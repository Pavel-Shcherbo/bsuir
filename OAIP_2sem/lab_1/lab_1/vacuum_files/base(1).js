window.cake = {};

const initializeFeatureToggleCake = () => {
  const defaultVariants = getCookie('Settings[ft_variants]');

  if (defaultVariants) {
    const parsed = JSON.parse(decodeURIComponent(defaultVariants));
    Object.entries(parsed).forEach(([flag, variant]) => {
      if (window.featureToggles && window.featureToggles.toggles && flag && variant) {
        window.featureToggles.toggles.unshift({ flag, variant, enabled: true });
      }
    });
  }
};

initializeFeatureToggleCake();

/*************************************************************************/
/**Autocomplate search****************************************************/
/*************************************************************************/
//track ga-events
var addGaTrack = function(){
	if(	typeof ga != 'undefined' ) {
		var on = $(this).data('ga_on') || $(this).data('ga_action'),
			label = $(this).data('ga_label'),
			category = $(this).data('ga_category'),
			action = $(this).data('ga_action') || on,
			number = $(this).data('ga_number') || 1;

		if (label && category && on) {
			ga('send', {
				'hitType': 'event',
				'eventCategory': category,
				'eventAction': action,
				'eventLabel': label,
				'eventValue': number,
				'nonInteraction': 1
			});
		}
	}
};

const ifNewCartEnabled = () => {
	return document.cookie.includes('new-cart') && document.cookie.includes('cart-new');
}

function getBasketUrl () {
	const basketPath = ifNewCartEnabled() ? '/order/' : `/order/?${(new Date).getTime()}`;

	return `${settings.base}${basketPath}`
}

const getScrollWidth = () => {
  const element = document.createElement("div");
  element.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';

  document.body.appendChild(element);
  const width = element.offsetWidth - element.clientWidth;
  document.body.removeChild(element);

  document.documentElement.style.setProperty('--scrollbar-width-initial', width + 'px');

  return width;
};

const detectScrollWidth = () => {
  const scrollWidth = () => (window.innerWidth - document.documentElement.clientWidth) > 0 ? getScrollWidth() : 0;
  const resizeObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--scrollbar-width', scrollWidth() + 'px');
  });

  document.documentElement.style.setProperty('--scrollbar-width-initial', scrollWidth() + 'px');
  resizeObserver.observe(document.documentElement);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', detectScrollWidth);
} else {
  detectScrollWidth();
}

$(function() {
	// default ajax error handling
	$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
		// Request is aborted
		if (jqxhr.statusText === 'abort') {
			return;
		}
		console.log(jqxhr.status, window.preventReloadOn500);
		if (jqxhr.status === 500 && !window.preventReloadOn500) {
			location.reload();
		}
		window.preventReloadOn500 = false;
	});

	if(	typeof ga != 'undefined' ){

		var new_user = getCookie('new_user') ? false : true; //новый ли пользователь (срок - 4 недели)
		setCookie ('new_user', 1, datetime.toUTCString(), '/');

		$(".j-dimension").each(function(){
			var n = $(this).data('dimension_n'),
				x = $(this).data('dimension_x');
			var ab = getCookie('ab_'+n);

			if( new_user || ab){
				if( ab ){
					x = ab;
				}
				else{
					setCookie ('ab_'+n, x, datetime.toUTCString(), '/');
				}

				var v = $(this).data('dimension_v'+x);
				var text = $(this).text();
				$(this).html(text + v);
				if( x == 2 ){
					$(this).addClass('cr-status__2row');
				}
				ga('set', 'dimension'+n, x);

				new_user = false;
			}
		});

		$(".j-ga_track[data-ga_on=click]").on('click', addGaTrack);
		$(".j-ga_track[data-ga_on=load]").each( addGaTrack );

	}

	dynamicFooterPadding();
});

var dynamicFooterPadding = function(){
	var lfoot_height = $('.l-footer__inner').height();
	var lcontent_padding = parseInt($('.l-content').css('padding-bottom'));
	if(lfoot_height > 341){
		plus = lfoot_height - 341 + lcontent_padding;
		$('.l-content').css('padding-bottom', plus);
	}
}

// track enhanced ecommerce
var addEeTrack = function(method){
	if(	typeof ee != 'undefined' ) {
		ee[method].apply(this, arguments);
	}
}

var getSearchId = function () {
	var urlSearchId = new URLSearchParams(window.location.search).get('searchId');

	if (urlSearchId) {
		return urlSearchId;
	}

	var salt = Math.floor(Math.random() * 100);

	if (salt < 10) {
		salt = '00' + salt;
	} else if (salt < 100) {
		salt = '0' + salt;
	}
	return Date.now() + '' + salt;
};

var searchId = null;
var term = null;

/*************************************************************************/
/**Global Functions*******************************************************/
/*************************************************************************/

//если перешли через кнопку назад/вперед в браузере:
//якоря вызывают popstate наравне с вперед/назад: для них костыль
window.old_href = window.location.href;
//по якорю можно перейти только кликнув
//значит для совместимости с тачскринами будем отслеживать это
window.clicked = false;
document.addEventListener('click', function(){
	window.clicked = true;
	setTimeout(function(){
		window.clicked = false;
	}, 100);
});
document.addEventListener('keydown', function(event){
	if(event.keyCode == 8) {//backspace
		window.clicked = false;
	}
});
//и сама проверка
window.addEventListener('popstate', function(event){
	//в некоторых версиях сафари попстэйт вызывается, при входе на страницу
	if(window.old_href == window.location.href){
		return;
	}
	window.old_href = window.location.href;

	// Мы не перезагружаем страницу на /order, где навигация происходит за счет реактовского SPA
	if (window.location.href.indexOf('/order')) {
		return;
	}

	if(!window.clicked){//не якорь
		location.reload();
	}
});


jQuery.fn.reverse = [].reverse;

var replaceRegionAlias = function(url, region) {
	if (isNaN(region.region_alias)) {
		if (url.search(/region:[-a-z0-9]+/i) !== -1) {
			url = url.replace(/region:[-a-z0-9]+\//i, "region:" + region.region_alias + "/");
		} else {
			url = url + "region:" + region.region_alias + "/";
		}
	} else {
		url = url.replace(/region:[-a-z0-9]+\//i, "");
	}
	return url;
}

const changeRegionId = (region) => {
	// для региональной страницы меняем id рериона в url
	var url = window.location.href;

	if ($("body").hasClass("catalog_index")) {
		if (url.search(/region:[-a-z0-9]+/i) !== -1) {
			if (region.id == 15362) {
				url = url.replace(/region:[-a-z0-9]+\//i, "");
			}
			else if (isNaN(region.region_alias)) {
				url = url.replace(/region:[-a-z0-9]+\//i, "region:" + region.region_alias + "/");
			}
			else {
				url = url.replace(/region:[-a-z0-9]+\//i, "");
			}
			window.history.pushState({}, "", url);
		}
		else if (region.id != 15362 && isNaN(region.region_alias)) {
			if (url.search(/\/\?/) !== -1) {
				url = url.replace(/\/\?/, "/region:" + region.region_alias + "/?");
			}
			else {
				url = url + 'region:' + region.region_alias + '/';
			}
			window.history.pushState({}, "", url);
		}

		var link = $('.j-reload-page').data('link');
		$('.j-reload-page').data('link', replaceRegionAlias(link, region));

		// и переписываем ссылки на странице
		$(".b-recipes__item__link,a.cr-paging_link,a.j-load_page").each(function() {
			var href = $(this).attr('href');
			$(this).attr('href', replaceRegionAlias(href, region));
		});
	}
};

function updateDeliveryCityInput(region) {
	var $input = $('#b-delivery input.ui-autocomplete-input');
	$input.attr('value', region.city);
	$input.data('value', region.city);
	$input.parents('label').removeClass('cr-state-error');
	$input.parents('label').find('.g-form__message').remove();
}

/** Выбор регона < **/
var chooseLocality = function(region) {
	$item = $('#choose-locality');
	if ($item.size() > 0) {
		$item.find('a').html(region.id == 15362 ? 'по Минску' : 'в ' + region.city);
	}

	updateDeliveryCityInput(region);

	if($('#j-delivery-type').length) {
		window.settings.user.cityId = region.city_id;
		deliveryTypeInit(region, true, changeRegionId);
	} else {
		$.ajax({
			url: '/get/delivery_info/',
			method: 'get',
			dataType: "json",
			data: {
				region: region,
				item: $item.data()
			},
			complete: function (data) {
				if (data.statusText === 'error') {
					return window['emitter']().emit('CAKE2REACT:DELIVERY_LOCATION/CHANGED/ERROR');
				}
				const jsonValidate = () => {
					try {
						JSON.parse(data.responseText);
						return JSON.parse(data.responseText);
					} catch (e) {
						return false;
					}
				}
				const responseData = jsonValidate() || region;
				window.settings.user={
					city: responseData.city,
					cityId: responseData.city_id,
					region_alias: responseData.region_alias ? responseData.region_alias : '',
				};
				window['emitter']().emit('CAKE2REACT:SET_USER_LEGAL_LOCATIONS_RECEIVE', responseData);
				changeRegionId(responseData);
				$('#delivery-info').html(data.responseText);
				var reloadLink = $('.j-reload-page').data('link');
				if (reloadLink) {
					loadPage(reloadLink, false, false);
				}

				if (window.deliveryDates && window.currentProductCode) {
					window.deliveryDates.renderDeliveryDatesForProduct(window.currentProductCode);
				}
			},
		});
	}
};

var getNumEnding = function (num, endings){
	var ending, i;
	num = num % 100;
	if (num>=11 && num<=19) {
		ending=endings[2];
	}
	else {
		i = num % 10;
		switch (i)
		{
			case (1): ending = endings[0]; break;
			case (2):
			case (3):
			case (4): ending = endings[1]; break;
			default: ending = endings[2];
		}
	}
	return ending;
}

var isInt = function(value) {
	return !isNaN(value) &&
		parseInt(Number(value)) == value &&
		!isNaN(parseInt(value, 10));
}

$(function() {

	$(".j-nojs").remove(); //удаляем, все что не надо при включенном jsчё
	$(".j-hide").hide(); //прячем, все что не надо при включенном js

	/*PANEL*/
	$('#j-scroll').click(function(){
		$('body,html').animate({scrollTop:0},800);
	})

	/**Валидация**************************************************************/
	$.fn.validate = function(rules){
		var fValid = true;

		/*Дефолтные значения параметров*/
		var defaults = {
			required: {
				message	:	"Это поле обязательно для заполнения"
			},
			required_group: {
				message	:	"Выберите значение"
			},
			email: {
				message: "Введите корректный адрес электронной почты"
			},
			nospaces: {
				message	:	"Допускаются любые символы, кроме пробелов"
			},
			mask: {
				message	:	"Неверное значение"
			},
			tel: {
				message: "Введите корректный номер телефона"
			},
			customAddress: {
				message: "Выберите улицу, дом из списка или добавьте их как новый адрес в выпадающем меню",
			},
			agreement: {
				message: 'Подтвердите своё согласие'
			}
		};

		/*Заменяем дефолтные опции на переданные если таковые есть*/
		rules = $.extend(defaults, rules);

		var isCorrect = function( $container ){

			$container.removeClass('cr-state-error');
			$container.children('.g-form__message').html('');
			$container.find('.g-form__message').remove();

			var set_message = function(message) {
				$container.addClass('cr-state-error');
				var $mess = $container.children('.g-form__message');
				$mess.length ? $mess.html(message) : $container.append('<span class="g-form__message">' + message + '</span>');

				(!$container.prop('eventChangeAttached')) && ($container.prop('eventChangeAttached', true)) && $container.change(function (event) {
					var type = $(event.target).attr('type');
					if (type === undefined) {
						type = $(event.target).prop('tagName').toLowerCase();
					}

					switch (type) {
						case 'text': case 'password': case 'textarea':
							var test = $container.hasClass('cr-check-required');
							break;
						case 'radio':
							var test = $container.hasClass('cr-check-radiorequired') || $container.hasClass('cr-check-grouprequired');
							break;
						case 'checkbox':
							var test = $container.hasClass('cr-check-grouprequired') || $container.hasClass('cr-check-agreement');
							break;
						case 'hidden': // Необходим для обработки виджетов, в которых значение сохраняется в hiden поле
							var test = $container.hasClass('cr-check-required');
							break;
						case 'select':
							var test = $container.hasClass('cr-check-selectrequired');
							break;
					}

					if (test) {
						$container.removeClass('cr-state-error');
						$container.children('.g-form__message').html('');
					}

				});

				// Убираем проставление чекбоса по нажатию на текст ошибки валидации
				if ($container.hasClass('cr-check-agreement')) {
					$container.children('.g-form__message').click(function (e) {
						e.preventDefault();
						e.stopPropagation();
					});
				}
			}

			var value = $container.find('input, textarea').not(':disabled').val();

			if ($container.find($('.j-address-input')).length
				&& !!$container.find($('.j-address-input')).val()
			) {
				// Если в десктопной версии значение было выбрано не через список или же не через пункт "Добавить новый адрес" мы показываем ошибку
				if (!$('.j-address-selected-via-suggest').length && !$('.j-new-address').length) {
					set_message(rules.customAddress.message);
					return false;
				}
			}

			if ($container.hasClass('cr-check-required') && value === '') {
				//в первую очередь проверям обязательные поля
				set_message(rules.required.message);
				return false;
			}
			else if($container.hasClass('cr-check-radiorequired') && !$container.find('input[type=radio]:checked').size()){
				//аналогично для групп ( только радио)
				set_message(rules.required_group.message);
				return false;
			}
			else if($container.hasClass('cr-check-grouprequired') && !$container.find('input:checked').size()){
				//аналогично для групп ( радио и чекбоксы )
				set_message(rules.required_group.message);
				return false;
			}
			// для интервалов доставки
			else if ($container.hasClass('cr-check-selectrequired') && $('.j-delivery-intervals-date').attr('data-value') !== '0' && $container.attr('data-value') === '0') {
				set_message(rules.required_group.message);
				return false;
			}

			var inputPhone = $container.find('input[type=tel]');
			if (inputPhone.length) {
				var inputPhoneVal = inputPhone.val();
				var regPhone = /^\+?(375[ -]?\(?(25|29|33|44)|7[ -]?\(?\d{3})\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;
				if (inputPhoneVal.length !== 0 && !regPhone.test(inputPhoneVal)) {
					set_message(rules.tel.message);
					return false;
				}
			}
			else if($container.hasClass('cr-check-birth-year') && value){
				var birthday = value.split(" . ");
				if(birthday[2] >= new Date().getFullYear() || !isDate(birthday[2], parseInt(birthday[1], 10), parseInt(birthday[0], 10))){
					set_message(rules.mask.message);
					return false;
				}
			}

			if ($container.hasClass('cr-check-agreement') && !$container.find('input:checked').size()) {
				//Проверка согласия
				set_message(rules.agreement.message);
				return false;
			}

			if($container.hasClass('cr-check-nospaces')){
				var reg = /\s/g;
				if( reg.test(value) ){
					set_message(rules.nospaces.message);
					return false;
				}
			}

			if($container.hasClass('cr-check-email')){
				var reg = /^([\S]+)@([\S]+)\.([\S]+)$/;
				if (value.length !== 0 && !reg.test(value)) {
					set_message(rules.email.message);
					return false;
				}
			}

			if($container.attr('data-mask')){
				//далее проверяем на соотве-е маске, если она задана
				var reg = new RegExp(`^${$container.attr('data-mask')}$`, 'i' );
				if( !reg.test(value) ){
					var err_message;
					if( !(err_message = $container.attr('data-err_message')) ){
						err_message = rules.mask.message;
					}
					set_message(err_message);
					return false;
				}
			}

			return true;
		};

		if($(this).is('form')) {
			var elements = $(this).find('.j-check');
		} else {
			var elements = $(this);
		}

		elements.each(function(){
				fValid = isCorrect($(this)) && fValid;
			}
		);

		return fValid;
	};


	/*получить числовое значение из элемента*/
	$.fn.getN = function(){
		var $elem = $( this );
		var value = $elem.is('input') ? $elem.val() : $elem.text();
		value = value.replace(/[^,\d]/g, ''); //удаляем НЕ цифры и запятую
		value = (value == '') ? false : parseInt(value);

		return value;
	}

	/*получить float значение из элемента*/
	$.fn.getFlN = function(){
		var $elem = $( this );
		var value = $elem.is('input') ? $elem.val() : $elem.text();
		value = value.replace(/[^.,\d]/g, ''); //Убираем все кроме точки и запятой
		value = value.replace(',', '.'); //Заменяем запятую на точку
		value = (value == '') ? false : parseFloat(value);
		if(isNaN(value)) value = '';

		return value;
	}

	/*Записать в элемент числовое значение*/
	$.fn.setN = function(value){

		var $elem	  = $( this );

		if($elem.length == 0) return;

		var unit = '&nbsp;р.';

		var is_input  = $elem.is('input'), //это текстовое поле (может быть просто html-элемент),
			human = true;

		$elem.data('value', value); //запоминаем число в чистом виде

		if( value === false ) value = '';
		if( is_input ){
			human = $elem.attr('maxlength') > 3;
		}

		if ( human && value > 0 ) {
			//приводим к виду X XXX XXX
			value = humanNumber(value);
		}

		if(is_input && human) {

			$elem.val(value);
			$elem.data('parsed_value', value);
		}
		else if(is_input) {
			$elem.val(value);
		}
		else{
			$elem.html(value+unit);
		}

		return value;
	}

	$.preloadImages = function () {
		if (typeof arguments[arguments.length - 1] == 'function') {
			var callback = arguments[arguments.length - 1];
		} else {
			var callback = false;
		}
		if (typeof arguments[0] == 'object') {
			var images = arguments[0];
			var n = images.length;
		} else {
			var images = arguments;
			var n = images.length - 1;
		}
		var not_loaded = n;
		for (var i = 0; i < n; i++) {
			jQuery(new Image()).attr('src', images[i]).load(function() {
				if (--not_loaded < 1 && typeof callback == 'function') {
					callback();
				}
			});
		}
	}

	Message = function (text) {
		//Попап для сообщения
		var uniq_dialog = 'dialog-' + (new Date).getTime();
		var $o = $('<div id="' + uniq_dialog + '"/>');

		// колбэк на закрытие окошка, который передается вторым параметром
		var callback = (arguments[1] && (arguments[1] instanceof Function)) ? arguments[1] : undefined;
		// и сохраняем дополнительные аргументы для вызова колбэка
		var arguments_saved = Array.prototype.slice.call(arguments, 0) || [];
		var initialOverflow = $("body").css('overflowY');

		$o.html(text).dialog(
			{
				width: '338px',
				modal: true,
				dialogClass: 'b-message_popup',
				closeText: 'Закрыть',
				title: false,
				open: function(){
					$("body").disableScroll();
					$("body").css('overflowY', 'visible');
				},
				close: function() {
					if (callback) {
						callback.apply(null, arguments_saved);
					}
					$("body").enableScroll();
					$("body").css('overflowY', initialOverflow);
				},
				buttons: [
					{text: "Закрыть", click: function() { $(this).dialog("close"); }, 'class': 'g-button'}
				]
			});
	}

	$.fn.Popup = function (actions){

		var $caller = $(this),
			type = $caller.attr('id'),
			purpose = $caller.data('purpose'),
			item = $caller.attr('item'),
			uniq_dialog = 'dialog-'+(new Date).getTime();

		var afterComplete = function(event){
			if(event == 'load' && !(settings.authorized || settings.visitor_introduced)) return false;
			if(type == 'price_notif' || type == 'arive_notif'){
				if(settings.authorized){
					$caller.replaceWith('<a href="'+settings.base+'/profile/wishlist/">В листе ожидания</a>');
				}
				else{
					$caller.replaceWith('<span>В листе ожидания</span>');
				}
				$('.j-wishlist_result').closest('span').removeClass('g-none');
			}
		}

		var defaults = {
			width: $caller.hasClass('cr-popup-big') ? '738px' : '338px',
			modal: true,
			dialogClass: 'b-popup',
			closeText: 'Закрыть',
			title: ($caller.attr('title') ? $caller.attr('title'):$caller.text()),
			open:
				function(event, ui){
					$("body").disableScroll();
					var $form = $(this).find('form');
					var $dialog = $(this);
					$form.submit(function(){

						if ( $(this).validate() ) {
							$(this).find('.j-submit').attr('disabled','disabled');
							$.post('/feedback/?popup='+type+(item?'&item='+item:'')+(purpose?'&purpose='+purpose:''), $form.serialize() + '&data[title]=' + $dialog.dialog( "option", "title" ), function(data){
								$("#"+uniq_dialog).html(data);
								$(".j-popup__close").bind('click', function(){$("#"+uniq_dialog).dialog( "close" );});
								afterComplete('submit');
							});
						}
						return false;
					});
				},
			close:
				function(event, ui){
					$caller.data("is_active",false);
					$("body").enableScroll();
				}
		};
		actions = $.extend(defaults, actions);

		$.get('/feedback/?popup='+type+(item?'&item='+item:'')+(purpose?'&purpose='+purpose:''), function(data){
			var $o = $('<div id="'+uniq_dialog+'"/>');
			$o.html(data).dialog(actions);
			$o.find(".j-popup__close").bind('click', function(){$("#"+uniq_dialog).dialog( "close" );});

			afterComplete('load');
		});

	};

	$.fn.phoneWidget = function(){
		var elem = $(this);
		var codesTemplates = {
			'by': {
				'name': 'Беларусь (+375)',
				'mask': '+375 (B0) 0000000',
				'placeholder': '+375 (29) 0000000'
			},
			'ru': {
				'name': 'Россия (+7)',
				'mask': '+7 (000) 0000000',
				'placeholder': '+7 (000) 0000000'
			}
		};
		var input = elem.find('input[type="tel"]');
		var codeSelector = elem.find('select');

		codeSelector = $('<div class="phone-widget__code"><span class="phone-widget__holder"><span class="g-ico-flag flag-by"></span><span class="phone-widget__holder-text"></span></span><ul class="phone-widget__codes"></ul>');
		$.each(codesTemplates, function(code, template){
			codeSelector.find('.phone-widget__codes')
				.append($('<li class="phone-widget__code-item" data-value="'+code+'"><span class="g-ico-flag flag-'+code+'"></span><span class="phone-widget__code-text">'+template.name+'</span></li>'));
		});

		var selectCode = function(code){
			codeSelector.find('.phone-widget__holder')
				.data('code', code)
					.find('.phone-widget__holder-text')
					.text(codesTemplates[code].name);
			codeSelector.find('.phone-widget__holder .g-ico-flag').replaceWith('<span class="g-ico-flag flag-'+code+'"></span>');
		};

		elem.find('.phone-widget__code').remove();

		elem.addClass('b-phone-widget');
		input.parents('.g-form__inputwrap').addClass('phone-widget__phone');
		var elemInner = elem.find('.phone-widget__inner')
		elemInner = (elemInner.length) ? elemInner : $('<div class="phone-widget__inner"></div>');
		elemInner
			.appendTo(elem)
			.prepend(input.parents('.g-form__inputwrap'))
			.prepend(codeSelector);

		var countryCode = codeSelector.data('code');
		countryCode = codesTemplates[countryCode] ? countryCode : settings.locale;
		selectCode(countryCode);

		if(input.val()){
			searchMask = input.val(); searchMask = searchMask.substring(0, 2);
			$.each(codesTemplates, function(code, template){
				if(template.mask.indexOf(searchMask) === 0){
					countryCode = code;
					selectCode(code);
				}
			});
		}
		var error_reset_timeout;
		var mask_options = {
			clearIfNotMatch: true,
			translation: {
				'B': {
					pattern: /[1-4]/
				}
			},
			onComplete: function() {
				input.trigger('phonechange');
			},
			onInvalid: function (val, e, f, invalid) {
				var error = invalid[0];
				var $error = $('<span></span>')
					.addClass("g-form__message")
					.text('Введите код города или оператора без «0» + телефон. Например, 29 1234567')
				;
				elem.find('.g-form__message').remove();
				elem.addClass('cr-state-error').append($error);

				clearTimeout(error_reset_timeout);
				error_reset_timeout = setTimeout(function () {
					elem.find('.g-form__message').fadeOut(function() {
						elem.removeClass('cr-state-error');
					});
				}, 5000);
			},
			onChange: function () {
				elem.find('.g-form__message').remove();
				elem.removeClass('cr-state-error');
			}
		};

		input
			.attr('placeholder', codesTemplates[countryCode].placeholder)
			.mask(codesTemplates[countryCode].mask, mask_options);

		codeSelector.find('.phone-widget__code-item').click(function(){
			var newCode = $(this).data('value');
			selectCode(newCode);
			input
				.attr('placeholder', codesTemplates[newCode].placeholder)
				.mask(codesTemplates[newCode].mask, mask_options);
			if(newCode != countryCode){
				input.val('');
			}
			countryCode = newCode;
			codeSelector.removeClass('cr-state-active');
			return false;
		});

		codeSelector.find('.phone-widget__holder').click(function(){
			codeSelector.toggleClass('cr-state-active');
			return false;
		});

		$(document).click(function(event) {
			if( !$(event.target).hasClass('b-phone-widget') ){
				codeSelector.removeClass('cr-state-active');
			}
		})
	}


	if(window.location.search.indexOf('subscribe') > -1){
		if(!$('#subscribe').size()){
			$("<div id='subscribe' title='Подписка на скидки'></div>").appendTo('body');
		}
		$('#subscribe').Popup();
	}
	//пользовательский вид числа для любого числового поля (при изменении, при загрузке)
	$(".j-form__number").each(
		function(){
			var $elem = $(this);
			var parse = function(){
				value = $elem.getFlN();
				$elem.setN(value);
			}
			parse();
			if($elem.is('input')) $elem.bind('change', parse);
		}
	);

	/*Вызов попапа*/
	$(".j-callpopup").live('click', function(){
		if(!$(this).data('is_active')){
			$(this).data("is_active", true);
			$(this).Popup();
		}

		return false;
	});


	/*Вызов попапа для распродажи*/
	$( ".j-sale" ).live('click', function(){
		var $caller = $(this),
			uniq_dialog = 'saledialog-'+(new Date).getTime();
			if(!$(this).data('is_active')){
				$(this).data("is_active", true);
				$.get('/sales/?item='+$caller.attr('id') + '&title=' + $caller.attr('data-title'), function(data){
				$('<div id="'+uniq_dialog+'"/>').html(data).dialog({
					open: function() {
						if ($(this).parent().height() > $(window).height()) {
							$(this).height($(window).height()*0.7);
						}
						$(this).dialog({position: "center"}).css({ overflow:"auto"});
						$("body").disableScroll();
					},
					close: function(event, ui){
						$caller.data("is_active",false);
						$("body").enableScroll();
					},
					modal: true,
					dialogClass: 'b-popup',
					closeText: 'Закрыть',
					title: 'Распродажа'
				});
			});
		}
		return false;
	});

	/*фокус на поле ввода*/
	$('input[type=text], textarea, select').live('focus', function(){
		$('.cr-state-focus').removeClass('cr-state-focus');
		$(this).closest('.g-form__inputwrap').addClass('cr-state-focus');
		$(this).blur(function(){$(this).closest('.g-form__inputwrap').removeClass('cr-state-focus');})
	});
	var counter = counter_limit = $("#j-filter__counter").html()-0;
	/*Клик по чекбоксу*/
	$.fn.check = function(checked){
		if(checked == undefined){
			checked = ($(this).attr('checked')=='checked');
		}
		else{
			$(this).attr('checked', checked);
		}
		if($(this).attr('type') == 'radio'){
			var name = $(this).attr('name');
			name = name.replace(/\[/g, '\\[');
			name = name.replace(/\]/g, '\\]');
			var radio_group = $(':radio[name='+name+']').not(':checked');
			radio_group.each(function(){ $( this ).parent().removeClass('g-form__checked'); });
		}
		checked ? $(this).parent().addClass('g-form__checked') : $(this).parent().removeClass('g-form__checked');

		return checked;
	}
	/*disable input ( только внешне )*/
	$.fn.disable = function(disabled){
		//.attr('disabled', disabled)
		if(disabled){
			$(this).closest('label').addClass('g-form__disabled');
		}
		else{
			$(this).closest('label').removeClass('g-form__disabled');
		}

		return true;
	}

	$(".g-form__check") .each(
		function(){
			$(this).check(); //при загрузке
		}
	)
	.live('change', function(){
		$(this).check();
	});



	$(".j-putaside").on('click', function(e) {
		var event = '';
		var data = $('.j-item-data');
		if($(this).hasClass('j-putaside__del')){
			var href = $(this).attr('href');
			window['emitter']().emit('cake2react:fromFavorites');

			event = 'removeFromFavorites';
			try {
				dl.cards.common.removeFromWishlist(data.data(), $(this));
			} catch (e) {}
			href+='&act=delete';
			$(this).closest('li').remove();
			$.each( $('.result__item'), function( i, val ) {
				 $('.result__item').eq(i).removeClass('cr-result__first');
				 if(((i+1)%2)!==0){
					$('.result__item').eq(i).addClass('cr-result__first');
				 }
			});
			if($('.b-result .g-box_lseparator:empty').length){
				if((($(".j-putaside").length)%2)===0){$('.b-result .g-box_lseparator:empty').hide();}else{$('.b-result .g-box_lseparator:empty').show();}
			}else{
				$('.b-result').append( "<li class='result__item cr-result__simple  g-box_lseparator'></li>" );
			}
			if(!$(".result__root").length){$('.b-result').append('Нет избранных товаров');}
		}
		else if($(this).hasClass('j-putaside__in')){
			var href = $(this).attr('href');
			window['emitter']().emit('cake2react:fromFavorites')
			href+='&act=delete';
			$(this).removeClass('j-putaside__in');
			$(this).find('span').text('Добавить в избранное');
			event = 'removeFromFavorites';
			try {
				dl.cards.common.removeFromWishlist(data.data(), $(this));
			} catch (e) {}
		}
		else{
			var href = $(this).attr('href');
			window['emitter']().emit('cake2react:2favorites')
			$(this).addClass('j-putaside__in');
			$(this).find('span').text('Удалить из избранного');
			event = 'addToFavorites';
			try {
				dl.cards.common.addToWishlist(data.data(), $(this));
			} catch (e) {}
		}
//			$.getJSON(href, function(data){
//				window.location.href = (href + '?item=' + data.items.join('+'));
//			});
		$.get(href, function(data){
			$(".j-putaside_result").parent('span').toggleClass('g-none', data < 1);
			$(".j-putaside_count").text(data);
		});
		var item =
			{
				'name': data.attr('data-name'),
				'id': data.attr('data-code'),
				'category_id': data.attr('data-category_id'),
				'event': event,
			};
		if (data.attr('data-status') === 'in') {
			item['price'] = data.attr('data-price');
		}
		addEeTrack('favoriteClick',item);
		return false;
	});

	$(".j-compare").live('click', function(event){
		event.preventDefault();

		let href = $(this).attr('href');

		if($(this).hasClass('j-compare__in')){
			href+='&act=delete';

			$(this).removeClass('j-compare__in');
			$(this).text('Добавить в сравнение');
		}
		else{
			$(this).addClass('j-compare__in');
			$(this).text('Удалить из сравнения');
		}

		$.get(href, function(data){
			$(".j-compare_counter").text(data);
			$(".j-compare_counter").parent('span').toggleClass('g-none', data < 1);
		});

		return false;
	});

	$('button, .g-buybtn, .g-basketbtn, .g-button__big')
		.bind('mousedown keydown', function(){$(this).addClass('cr-btn-pressed')})
		.bind('mouseup keyup mouseout', function(){$(this).removeClass('cr-btn-pressed')});

	$(".j-to_basket").live('click', function(event) {
		window['emitter']().emit('cake2react:2basket')
		event.preventDefault();
		var $btn = $(this);
		$btn.find(':submit').prop('disabled', true);

		function successCallback() {
			try {
				dl.cart.add.one($btn);
			} catch (e) {}

			var in_basket_class = $btn.find('button').hasClass('g-buylink') ? 'j-button-clicked g-basketlink' : 'j-button-clicked g-basketbtn';
			$btn.replaceWith($("<a " +
				"href='"+getBasketUrl()+"'" +
				"data-code='"+$btn.attr('data-code')+"'" +
				"data-action='"+$btn.attr('action')+"'" +
				"class='"+in_basket_class+"'>В корзине</a>"
			));
			window['emitter']().emit('cake2react:after2basket');
		}

		if (ifNewCartEnabled()) {
			const headers = {
				'Content-Type': "application/json",
                'Accept': 'application/json',
				'X-gate-anonymous-id': window.cake.identity,
			};

			if (window.cake && window.cake.user && window.cake.user.jwt) {
				headers['Authorization'] = 'JWT ' + window.cake.user.jwt;
			}

			$.ajax({
				url: API_GATEWAY_URL + '/cart/carts/items',
				type: 'POST',
				headers,
				data: JSON.stringify({
					id: +$btn.data('code').split('_')[1] || +$btn.data('code').split('_')[0],
					count: 1,
					type: +$btn.data('code').split('_')[1] ? "markdown" : "product"
				}),
				success: successCallback,
			});
		} else {
			$.get($btn.attr('action') + '&' + $.now(), successCallback, 'json');
		}
	});

	$(".e_certificate__buybtn").live('click', function(event){
		window['emitter']().emit('cake2react:2basket');
		let btn = $(this);
		const productCode = btn.data('code');
		event.preventDefault();
		let item = {
			code: productCode,
			count: 1,
			type: "e-cert"
		}

		if (window.isSailPlay) {
			try {
				rrApi.addToBasket(productCode);
			} catch(e) {}
		}

		let callBack = function(){
			try {
				dl.cart.add.eCertAdd(item.code, 'Подборка');
			} catch (e) {
			}

			let in_basket_class = btn.find('button').hasClass('g-buylink') ? 'j-button-clicked g-basketlink' : ' j-button-clicked g-basketbtn';
      const separator = ifNewCartEnabled() ? '?' : '&';
			btn.replaceWith($("<a " +
				"href='"+getBasketUrl()+separator+"eCart=true'" +
				"data-code='"+btn.attr('data-code')+"'" +
				"class='"+in_basket_class+"'>В корзине</a>"
			));
			window['emitter']().emit('cake2react:after2basket');
		};

		eCart.addItem(item, callBack);
	});

	$(".j-from_basket")
		.on('click', function (event) {
			const adgamesSettings = window.adgames.getAdgamesSettings();
			const $adgameItemRemoveButton = $(`.j-basket-item[data-code=${(adgamesSettings || {}).code}] .j-from_basket`);

			// Если товар РИ был удален через кнопку "удалить" мы имитируем нажатие на чекбокс и откладываем процесс удаления
			if (
				adgamesSettings
				&& adgamesSettings.code
				&& $('.j-basket__adgamescheck').check()
				&& $(this).is($adgameItemRemoveButton)
			) {
				event.preventDefault();
				event.stopPropagation();
				$('.j-basket__adgamescheck')
					.prop('checked', false)
					.trigger({ type: 'change', programFired: true });
			}
		})
		.live('click', function(event) {
			var $btn = $( this );

			const url = new URL($btn.attr('href'), window.location.origin);
			const item = url.searchParams.get('item');
			const special = url.searchParams.get('special');

			window['emitter']().emit('cake2react:fromBasket', `${item}_${special}`);
			event.preventDefault();

			$btn.addClass("item-remove__inactive");

			$.get( $btn.attr('href')+'&'+$.now(), function(data) {
				var id = $btn.attr('id').replace('j-delete-', '');
				var $counter = $( "#j-counter-" + id );

				if (window.intervalsRequestDataManipulator) {
					var code = $('#j-code-' + id).val();
					window.intervalsRequestDataManipulator.deleteItem(code);
					sendIntervalsRequest();
				}

				if ($counter.attr('id')) {
					updateBasket();
					window.adgames.setLoading(false);
				}
				else {
					$btn.closest('tr').remove();
				}
				$counter.closest('tr').remove();

				try {
					dl.cart.remove.byKey(id, null, true);
				} catch (e) {}

				if (!$(".j-basket-item").size()) {
					$('#j-basket-container').hide();
					$('#j-empty-basket-container').show();
				}
			})
				.always(function() {
					$btn.removeClass("item-remove__inactive");
				});
		})
		.removeClass("item-remove__inactive");

	$.fn.disableScroll = function() {
		$windowStyles = {};
		//Убираем смещение контента
		$windowStyles.marginRight = getScrollWidth();
		$windowStyles.width = $(document).width();
		$windowStyles.overflow = 'hidden';
		$('html').css($windowStyles);
		$('.ui-widget-overlay').css('width','100%');
	};

	$.fn.enableScroll = function() {
		$windowStyles = {marginRight: ''};
		$windowStyles.overflow = '';
		$windowStyles.width = '';
		$('html').css($windowStyles);
	};

	//Табы
	$.fn.activateTab = function(save){
		var $item = $(this);

		if( $item.hasClass("cr-tabs__active") && $item.hasClass("cr-tabs__toggle") ){
			$item.removeClass("cr-tabs__active");
		}
		else{
			$item.siblings().removeClass("cr-tabs__active");
			$item.addClass("cr-tabs__active");

			// сохраняем индекс активной табы в куки
			var name = 'active_tab';
			var value = $item.attr('id');
			if(save && value && !$(this).parent().hasClass('b-accessories')){
				setCookie(name, value, "", window.location.pathname, window.location.host, "");
			}
		}
	}

	$(".j-tabs__switcher").live('click', function(){
		$(this).closest(".tabs__item").activateTab(1);
		if($(this).hasClass('accessories__header')){
			$(this).parent().find('.g-slider').Slider();
		}
	});
});

/*************************************************************************/
/**Tooltip*******************************************************/
/*************************************************************************/

var $active = false,
	$tooltip = $("<div id='tooltip'></div>");

$.fn.Tooltip = 	function(act, e){

	if(e) e.preventDefault();

	if($(this).hasClass('cr-source_tooltip-active')){
		$tooltip.hide();
		$(this).removeClass('cr-source_tooltip-active')
		return;

	}
	else if($active){
		$active.removeClass('cr-source_tooltip-active');
	}
	else{
		$("body").append($tooltip);
	}

	$active = $(this);
	$active.addClass('cr-source_tooltip-active');

	$tooltip.html( $active.data('title') + "<i class='tooltip__arrow'></i>" );

	if( act == 'click' ){
		$("<i class='tooltip__close' id='tooltip__close'></i>")
		.click(function(){$tooltip.hide(); $active.removeClass('cr-source_tooltip-active');})
		.prependTo($tooltip);
	}
	$tooltip.removeClass('cr-source_tooltip-right, cr-source_tooltip-top');
	if($active.hasClass('cr-source_tooltip-top')){
		var xOffset = 25 - $tooltip.outerWidth(),
			yOffset = -19 ;
		$tooltip.addClass('cr-source_tooltip-top');
	}
	else{
		var xOffset = $active.hasClass('cr-source_tooltip-right') ? $active.outerWidth() : (-9 - $tooltip.outerWidth()),
			yOffset = 7 + Math.ceil($tooltip.height()/2) ;

		if( $active.hasClass('cr-source_tooltip-right')){
			xOffset += 12;
			$tooltip.addClass('cr-source_tooltip-right');
		}
	}


	$tooltip
		.css("top",($active.offset().top - yOffset) + "px")
		.css("left",($active.offset().left + xOffset) + "px")
		.fadeIn("fast");

}
$(document).click(function(event) {
	if(
		!$(event.target).hasClass('b-source_tooltip')
		&& $(event.target).attr('id') != 'tooltip'
		&& $(event.target).attr('id') != 'j-promocode-check'
	){
		$tooltip.hide().removeClass('cr-source_tooltip-right');
		if($active) $active.removeClass('cr-source_tooltip-active');
	}
});

$(document).scroll(function(event){
	if($tooltip.is(":visible")){
		var boxesInWindow = inWindow(".cr-source_tooltip-active");
		if(!boxesInWindow.length){
			$tooltip.hide().removeClass('cr-source_tooltip-right');
			if($active) $active.removeClass('cr-source_tooltip-active');
		}
	}
})

var inWindow = function(s){
	var scrollTop = $(window).scrollTop() + 30;
	var windowHeight = $(window).height() - 120;

	var currentEls = $(s);
	var result = [];
	currentEls.each(function(){
		var el = $(this);
		var offset = el.offset();
		if((el.height() + offset.top) < (scrollTop + windowHeight))
		  result.push(this);
	});
	return $(result);
}

$(".j-tooltip-byhover").live('mouseover', function(e){

	$elem = $(this);

	$elem.bind('mouseout', function(e){
		$tooltip.hide().removeClass('cr-source_tooltip-right');
		$active.removeClass('cr-source_tooltip-active');
		$elem.unbind('mouseout');
	});

	$elem.Tooltip('mouseover', e);

});
$(".j-tooltip-byclick").live('click', function(e){
	$(this).Tooltip('click', e);
});
/*****************************************************************************/
/*	PAGINATOR	*/
/*****************************************************************************/

var current_page = 1; //текущая страница
var loaded = true;
var rest_of_items = 0;
var load_of_items = parseInt($("#j-load_of_items").text()); //уже загружено товаров
var page_count_items = load_of_items/current_page; //товаров на странице
var total_count_items = parseInt($("#j-total_count_items").text()); //общее кол-во товаров

$(function() {
	/*загружает контент одной страницы*/
	var loadContent = function(){
		if(loaded){
			loaded = false;
			beforeLoad();
			return $.ajax({
				url: $('#j-all_page').data('href'),
				data: {
					'page': ++current_page,
					'hash': window.location.hash,
				},
				success:
					function(data){
						if(data.viewed_count){
							if (data.name) {
								load_of_items = parseInt($("#j-load_of_items").text());
								$('#'+data.name).find('ul').append(data.content);
								total_count_items = data.total_count;
							}
							else {
								$('#j-search_result').append(data.content);
							}
							$("#j-load_of_items").text(load_of_items += data.viewed_count);
						}
					},
				error:
					function(){
						afterLoad();
					},
				dataType: 'json'
			})
				.done(function(){
					afterLoad();
					loaded = true;
				});
		}
	}

	/*рекурсивно загружает весь контент (вызывая ф-ю loadContent, т.е. постранично)*/
	var loadAllContent = function(){
		if(load_of_items < total_count_items){
			var load = loadContent();
			load.done(function() {
				loadAllContent();
			});
		}
		return false;
	};

	checkLoadedInfo();
	$(".j-load_page").live('click',function(event){
		event.preventDefault();
		loadPage($(this).attr('href'),$(this).hasClass('j-add'));
	});
	$("#j-next_page").click(loadContent);
	$("#j-all_page").click(loadAllContent);
	$('.j-menu__spec').click(function() {
		current_page = 1;
		load_of_items = 0;
	});

});
/*************************************************************************/
/**Global Functions*******************************************************/
/*************************************************************************/
/*Проверяет что осталось загрузить*/
var checkLoadedInfo = function(){
	rest_of_items = (total_count_items - load_of_items); //осталось загрузить товаров

	if( rest_of_items <= 0){
		/*загружены все товары*/
		$("#j-all_page").closest('span:not(#j-all_page)').hide();
		$("#j-next_page").hide();
		return false;
	}
	else if( rest_of_items < page_count_items*1.25 ){
		/*[осталось загрузить товаров] меньше чем отображается [товаров на одной странице]*/
		$("#j-rest_of_items").text(rest_of_items);
		return false;
	}
	return true;
} ;

var beforeLoad = function(){
	if($("#j-loading").size()){
		$("#j-loading").show();
	}
	else{
		$("<div id='j-loading' />").text('Загружается...').prependTo($("#j-paginator"));
	}
} ;
var afterLoad = function(){
	$("#j-loading").hide();

	try {
		dl.cards.viewed.selections();
		dl.goods.viewed.selections();
	} catch (e) {}

	checkLoadedInfo();
}

var loadPage = function(link, is_append, scrollTop = true){
	var $result = $("#j-search_result");
	var action = link;
	if(loaded){
		loaded = false;
		if(!is_append){
			if(scrollTop){
				$("html, body").scrollTop($(".b-tools.g-box_lseparator").offset().top);
			}

			$result.css('opacity', 0.5);
		}
		else{
			$('.cr-tools_paginator.j-add').remove();
		}

		$.ajaxSetup({ cache: false });
		//beforeLoad();
		return $.ajax({
			url: action,
			success:
				function(data){
					if(data.viewed_count){
						current_page = data.page;
						if(is_append){
							$result.append(data.content);
							if(data.total_pages>current_page){
								current_page++;
								setTimeout(function() {loadPage(link.replace("page:"+data.page+"/","page:"+current_page+"/"),true) }, 0);
							}
							else{
								$result.append('<div class="b-tools cr-tools_paginator g-box_lseparator"><div class="cr-paginator_page_list">Показано '+data.total_count+ ' из '+data.total_count+'</div></div>');
							}
						}
						else{
							$result.html(data.content);
							var queryString = (searchId === null) ? window.location.search : window.location.search.replace(/(&searchId=)([0-9a-z]+)/i, '$1' + searchId);
							history.pushState(null, null, link+queryString);
						}

						try {
							dl.goods.viewed.listing();
							dl.goods.viewed.searchPage();
							dl.cards.viewed.listing();
							dl.cards.viewed.searchPage();
						} catch (e) {}
					}
					if(data.title){
						document.title = data.title;
					}
				},
			error:
				function(){
					afterLoad();
				},
			dataType: 'json'
		})
			.done(function(){
				afterLoad();
				loaded = true;
			})
			.always(function(){
				//При любом исходе показываем контент обратно
				$result.css('opacity', 1);
				loaded = true;
			});
	}
}

var humanNumber = function(number, round, is_price){
	//делает число в человеческий вид
	//приводим к виду X XXX XXX
	if(is_price === undefined && !round){
		is_price = true;
	}

	if( !number ) return '0';

	if(is_price){
		number = parseFloat(number).toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',');
	}
	else{
		if(round == 'down'){
			number = Math.floor(number);
		}
		if(round == 'up'){
			number = Math.ceil(number);
		}

		if(number > 1000){
			number += '';
			number = (number<1000000 ? '' : number.slice(-9, -6)+' ') + number.slice(-6, -3) + ' ' + number.slice(-3);
		}
	}

	return number;
}

var humanDate = function(date){
	var d = new Date();
	d.setTime(Date.parse(date));

	var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	return d.getDate() +' '+ month[d.getMonth()] +' '+ d.getFullYear();
}

var pluralTransform = function(number, word, is_price){
	var number_100 = number % 100;
	var number_10 = number % 10;
	var number_original = number;

	is_price = (is_price == undefined)?false:true;

	number = humanNumber(number, false, is_price);

	//Для чисел с копейками
	if(number_original - Math.floor(number_original) > 0) {
		return number + ' ' + word[1];
	}

	if (number_100 > 9 && number_100 < 20){
		return number + ' ' + word[2];
	}

	if( number_10 == 1){
		return number + ' ' + word[0];
	}
	if( number_10 > 1 && number_10 < 5 ){
		return number + ' ' + word[1];
	}
	return number + ' ' + word[2];
}

/*BASE Слайдер "Популярные товары" / "Аксессуары" */
$(function(){

	$.fn.Slider = function(){
			var $slider = $(this);
			var count_items = $slider.hasClass('cr-slider-popular') ? 3 : 4;
			var items = $slider.find('.g-slider__item');
			var s = ($slider.hasClass('cr-slider-popular') || $slider.hasClass('cr-slider-full_width')) ? Math.ceil(items.size()/2) : items.size();

			if(s == 1) count_items = 2;
			else if(s < count_items) count_items = s;

			var $container = items.parent();

			var w = Math.round( ($slider.width()) / count_items);
			if(!w) return;
			$slider.data('w', w);


			if($slider.hasClass('cr-slider-popular') || $slider.hasClass('cr-slider-full_width')){
				items.width( w );
				$container.width( w * s );

				var h = Math.max.apply( null,items.map(function(index, value){ return $(value).height();}));
				$slider.find('.g-slider__container').height( 2*h +36 );
				items.height( h + 36 )
			}
			else{
				items.width( w );
				$container.width( w * s  );

				var h = Math.max.apply( null,items.map(function(index, value){ return $(value).height();}));
				$slider.find('.g-slider__container').height( h );
				items.height( h )
			}

			$(window).resize(function(){
				var l = Math.round($container.position().left / $slider.data('w'));
				if(w = Math.round( $slider.width() / count_items)){
					$slider.data('w', w);
					items.width( w );
					$container.width( w * s );
					$container.css('left', (l * w));
				}
			});
			if(s > count_items){//если слайдов достаточно
				var pointer = 0, step = count_items;

				$larrow = $slider.find('.j-slider__larrow');
				$larrow.remove();
				$larrow = $('<span class="g-slider__larrow j-slider__larrow"></span>');
				$slider.prepend($larrow);

				$rarrow = $slider.find('.j-slider__rarrow');
				$rarrow.remove();
				$rarrow = $('<span class="g-slider__rarrow j-slider__rarrow cr-slider__ractive"></span>');
				$slider.prepend($rarrow);

				$container.css({left: 0});

				$larrow
					.click(function(){//клик вправо, убегает влево
						if(w&&$(this).hasClass('cr-slider__lactive')){//если слайдер активен в эту сторону (есть скрытые слайды)
							pointer = (pointer < step) ? 0 : pointer-step; //либо минус шаг, либо на начало
							$container.animate({left: - w * pointer});//либо минус шаг, либо на начало

							if(!$rarrow.hasClass('cr-slider__ractive')) $rarrow.addClass('cr-slider__ractive') //если мы сейчас вначале, то активируем стрелку
							if(!pointer) $(this).removeClass('cr-slider__lactive');//если после действий мы вначале, то скрываем стрелку
						}
					});

				$rarrow
					.click(function(){
						if(w&&$(this).hasClass('cr-slider__ractive')){//если слайдер активен в эту сторону
							pointer = (pointer+step > s-step) ? (s-step) : pointer+step;
							$container.animate({left: - w * pointer});

							if(!$larrow.hasClass('cr-slider__lactive')) $larrow.addClass('cr-slider__lactive')
							if(pointer >= s-count_items){$(this).removeClass('cr-slider__ractive');}
						}
					});
			}


	}

	$(window).load(function(){
		$(".g-slider").each( function(){ $(this).Slider(); });
	});


});

// Функции для работы с cookie
//установки cookie
function setCookie (name, value, expires, path, domain, secure) {
	if(!domain) domain = settings.cookie_domain;
	document.cookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
//чтение cookie
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

// Cookie expires
var datetime = new Date();
var time = datetime.getTime();
time += 1000 * 3600 * 24 * 28;
datetime.setTime(time);

/**
GA-analis
*/
$(function() {

});
/**
Statistic
*/

(function($){
	// Параметры по умолчанию
	$.gradientText = $.gradientText || {version: '1.0'};

	$.gradientText.conf = {
		colors: ['#5f3db6', '#c10000'],
		toProcess: []
	};

	$.gradientTextSetup = function(conf) {
		$.extend($.gradientText.conf, conf);
	};

	$.fn.gradientText = function(conf) {

		// already constructed --> return API
		var el = this.data("gradientText");
		if (el) { return el; }

		// concatinate defined conf object with the user's one
		if (!conf) {
			conf = $.gradientText.conf;
		} else {
			if (typeof(conf.colors) == 'undefined') {
				conf.colors = $.gradientText.conf.colors;
			}
		}

		var aLetters = [];

		this.each(function(i) {
			aLetters[i] = new GradientLetters($(this), conf);
			$(this).data("gradientText", aLetters[i]);
		});

		$(window).load(function() {
			var iLetters_amount = aLetters.length;
			for (var i = 0; i < iLetters_amount; i++) {
				aLetters[i].update();
			}
		});

		return conf.api ? el: this;
	};


	function GradientLetters(jContainer, conf) {
		/**
		 * 	Если плагин уже поработал над элементом,
		 * 	то заново дробить его не нужно
		 */
		if (jContainer.find('span.gr-text').size() == 0) {
			/**
			 * 	getting nodes, good enough
			 * 	to be spliced in letters
			 */
			var jTextNodes = jContainer.contents().filter(function() {
				return (this.nodeType == 3 && /\S/.test(this.nodeValue))
			}).wrap('<span class="gr-text" />');

			if (typeof(conf.toProcess) != 'undefined') {
				var tags = conf.toProcess.toString();

				if (tags) {
					jTextNodes = jContainer.find(tags).contents().filter(function() {
						return (this.nodeType == 3 && /\S/.test(this.nodeValue))
					}).wrap('<span class="gr-text" />');
				}
			}

			/**
			 * 	width of the content can be less than jContainer's width
			 * 	that's why we have to use inline wrapper like span
			 */
			jContainer.html('<span class="gr-wrap">' + jContainer.html() + '</span>');
			jContainer = jContainer.find('.gr-wrap');

			/**
			*	Оборачиваем каждую букву в span.gr-letter.
			*	Пробелы заменяем на пробел нулевой ширины
			*/
			jContainer.find('span.gr-text').each(function(){
				var aText = $(this).text().split('');
				var sHTML = '';
				var iText_amount = aText.length;

				for (var i = 0; i < iText_amount; i++) {
					if (aText[i] != ' ') {
						sHTML += '<span class="gr-letter">' + aText[i] + '</span>';
					} else {
						sHTML += '<span class="gr-letter"><span style="display:none;">&#8203;</span> </span>';
					}
				}
				$(this).html(sHTML);
			});
		}

		var jWords = jContainer.find('span.gr-text');
		var jLetters = jContainer.find('span.gr-letter');
		var iHeight = 0;

		// Convert defined hex colors to rgb-colors
		conf.RGBcolors = [];
		for (var i = 0; i < conf.colors.length; i++) conf.RGBcolors[i] = hex2Rgb(conf.colors[i]);

		/**
		 * 	Measurer — некий объект, который понимает не только когда изменяется ширина окна,
		 * 	но и когда меняется размер шрифта.
		 *
		 * 	Плагин использует:
		 *	- jcommon, если он есть;
		 *	- measurer, если нет jcommon и подключен файл с measurer,
		 *	- resize, если по какой-то причине ни того, ни другого не обнаружено.
		 */
		if (typeof($c) != 'undefined') $c.measurer.bind(updateColors);
		else if (typeof($measurer) != 'undefined') $measurer.bind(updateColors);
		else $(window).resize(updateColors);

		PaintUnderlines();

		function updateColors() {
			var iRootLeftOffset = Math.round(jContainer[0].offsetLeft),
				iRootWidth = getMaxRootWidth(iRootLeftOffset),
				jLetters_amount = jLetters.size();

			if (iRootWidth < 200) iRootWidth = 200;

			for( var i = jLetters_amount; i--; ) {
				jLetters[i].style.color = getColor(Math.round(jLetters[i].offsetLeft - iRootLeftOffset), iRootWidth);
			}
		}

		function getMaxRootWidth(iRootLeftOffset) {
			var iMaxWidth = 0;
			jWords.each(function(index) {
				var iRightEdge = Math.round(this.offsetWidth + this.offsetLeft) - iRootLeftOffset;
				if (iRightEdge > iMaxWidth) iMaxWidth = iRightEdge;
			});
			return iMaxWidth;
		}

		function getColor(iLeftOffset, iRootWidth) {
			var
				fLeft = (iLeftOffset > 0)? (iLeftOffset / iRootWidth) : 0;
			for (var i = 0; i < conf.colors.length; i++) {
				fStopPosition = (i / (conf.colors.length - 1));
				fLastPosition = (i > 0)? ((i - 1) / (conf.colors.length - 1)) : 0;

				if (fLeft == fStopPosition) {
					return conf.colors[i];
				} else if (fLeft < fStopPosition) {
					fCurrentStop = (fLeft - fLastPosition) / (fStopPosition - fLastPosition);
					return getMidColor(conf.RGBcolors[i-1], conf.RGBcolors[i], fCurrentStop);
				}
			}
			return conf.colors[conf.colors.length - 1];
		}

		function getMidColor(aStart, aEnd, fMidStop) {
			var aRGBColor = [];

			for (var i = 0; i < 3; i++) {
				aRGBColor[i] = aStart[i] + Math.round((aEnd[i] - aStart[i]) * fMidStop)
			}

			return rgb2Hex(aRGBColor)
		}


		/**
		* To paint underline of gradiented text in right colors
		* every .gr-letter element has to have css rule:
		* 	text-decoration: underline;
		* so this function searching for .gr-text that is child
		* of underlined element
		*/
		function PaintUnderlines () {
			/* When gradiented element contains underlined child */
			jContainer.find('.gr-text').each(function(){
				if ($(this).parent().css('text-decoration') == 'underline') {
					$(this).parent().find('.gr-letter').css('text-decoration', 'underline');
				}
			});

			/* When gradiented element is underlined */
			if (jContainer.parent().css('text-decoration') == 'underline') {
				jContainer.find('.gr-letter').css('text-decoration', 'underline');
			}
		}

		return {
			update: updateColors
		}
	}

	/**
	 * Преобразует HEX-представление цвета в RGB.
	 * @param {String} hex
	 * @return {Array}
	 */
	function hex2Rgb(hex) {
		if ('#' == hex.substr(0, 1)) {
			hex = hex.substr(1);
		}
		if (3 == hex.length) {
			hex = hex.substr(0, 1) + hex.substr(0, 1) + hex.substr(1, 1) + hex.substr(1, 1) + hex.substr(2, 1) + hex.substr(2, 1);
		}

		return [parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16)];
	}

	/**
	 * Преобразует RGB-представление цвета в HEX.
	 * @param {Array} rgb
	 * @return {String}
	 */
	function rgb2Hex(rgb) {
		var s = '0123456789abcdef';

		return '#' + s.charAt(parseInt(rgb[0] / 16)) + s.charAt(rgb[0] % 16) + s.charAt(parseInt(rgb[1] / 16)) +
			s.charAt(rgb[1] % 16) + s.charAt(parseInt(rgb[2] / 16)) + s.charAt(rgb[2] % 16);
	}

	$('.g-gradient').gradientText({
		colors: ['#990099', '#E91653']
	});

	$('.j-contacts-switcher').on('click', function(){
		$('.b-contacts').toggleClass('active');
	});

	$(document).click(function(event) {
		if (!$(event.target).closest(".b-contacts").length){
			$('.b-contacts').removeClass('active');
		}
	});

	var sitemenuResize =  function(){
		var freeSpace = $('.l-sitemenu__inner').width();
		$('.l-sitemenu__inner > div, .l-sitemenu__inner > ul').each(function(){
			freeSpace -= $(this).width();
			if( $(this).hasClass('b-user_tools') ){
				freeSpace -= parseInt($(this).css('marginRight'));
			}
		});

		$('.b-sitemenu .cr-sitemenu__more .sitemenu__item').not('.cr-sitemenu__static').each(function(){
			var item = $(this);
			item.insertBefore('.sitemenu__item.cr-sitemenu__more');
			freeSpace -= item.width();
			if(freeSpace < 2) {
				freeSpace += item.width();
				$('.sitemenu__item.cr-sitemenu__more .b-sitemenu__submenu').prepend(item);
				return false;
			}
		});

		$('.b-sitemenu > .sitemenu__item').not('.cr-sitemenu__static').reverse().each(function(){
			var item = $(this);
			if(freeSpace < 2) {
				$('.sitemenu__item.cr-sitemenu__more .b-sitemenu__submenu').prepend(item);
			}
		});
	}

	sitemenuResize();

	$(window).resize(function(){
		sitemenuResize();
	});

	var reactChangeLocations = function (data) {
		const mapper = new SelectLocationsMapper();
		chooseLocality((data && data.attributes) ? mapper.mapApiResource(data) : data);
	};

	var changeBasketButtonState = function (codes) {
		// Замена "в корзине" на "в корзину"
		const selectedButtons = $(`.j-button-clicked`).not('.b-certificates .j-button-clicked');

		selectedButtons.each((index, item) => {
			const code = $(item).attr('data-code');
			let formClassName = 'j-to_basket';
			let buttonClassName = 'g-button g-buybtn result__buybtn cr-buybtn__in j-ga_track';
			let buttonEl = 'В корзину';

			// Если популярные товары
			if ($(item).hasClass('g-basketlink')) {
				formClassName = 'j-to_basket popular';
				buttonClassName = 'g-buylink foreign_goods__buylink j-ga_track';
				buttonEl = '<span class=\"g-buylink__text\">В корзину</span>';
			// Если уцененные товары
			} else if ($(item).parent().hasClass('sales__item')) {
				buttonClassName = 'g-button g-buybtn sales__buybtn cr-buybtn__in j-ga_track';
			}

			if (codes.indexOf(code) === -1) {
				$(item).replaceWith($("<form method='post' action='"+$(item).attr('data-action')+"' data-code='"+code+"' class='"+formClassName+"'><button class='"+buttonClassName+"' data-ga_action=\"add_to_cart\" data-ga_category=\"Ordering\">"+buttonEl+"</button></form>"));
			}
		});

		// Замена "в корзину" на "в корзине"
		codes.forEach((code) => {
			const button = $(`.j-to_basket[data-code='${code}']`);

			if (button.length) {
				const in_basket_class = button.find('button').hasClass('g-buylink') ? 'j-button-clicked g-basketlink' : 'j-button-clicked g-basketbtn';
				button.replaceWith($("<a " +
					"href='"+getBasketUrl()+"'" +
					"data-code='"+code+"'" +
					"data-action='"+button.attr('action')+"'" +
					"class='"+in_basket_class+"'>В корзине</a>"
				));
			}
		});
	}

	window.emitter().subscribe(
		'REACT2CAKE:DELIVERY_LOCATION/CHANGED/REQUEST',
		(region) => reactChangeLocations(region)
	);

	window.emitter().subscribe('REACT2CAKE:BASKET_ITEMS_CHANGED', (codes) => changeBasketButtonState(codes));

	var regionSearchInit = function(){
		$("#j-search-locality-input").regionsAutocomplete({
			appendTo: "#j-search-locality>label"
		})
			.change(function(){
				var selected = $(this).data('selected');
				if( selected ){
					chooseLocality(selected);
					$('#choose-locality-dialog').dialog('close');
					$(this).data('selected', '');
				}
			});
	}

	var $loaded = true;
	$('body').on({
		click: function(e){
			e.preventDefault();

			if(!$loaded) return false;

			var link = $(this);
			var li = link.parents('li');
			if(li.hasClass('active')) return false;

			$('.panel-regions__items li').removeClass('active');
			li.addClass('active');

			$('.b-choose-locality__panels .panel-cities').addClass('loading');
			$loaded = false;
			$.get('/choose_locality/?region='+link.text(), function(data){
				$('.panel-cities__items').html(data);
				$('.panel-cities .panel-scrolable').scrollTo(0);
				$('.b-choose-locality__panels .panel-cities').removeClass('loading');
				$loaded = true;
			});

		}
	}, '.panel-regions__items a');

	$('body').on({
		click: function(e){
			e.preventDefault();
			var region_data = $(this).data();
			var region = {};

			jQuery.each(region_data, function(key, val) {
				region[key] = val;
			});

			region['city'] = region.type +' '+ region.city;
			chooseLocality(region);
			$('#choose-locality-dialog').dialog('close');
		}
	}, '.panel-cities__items a');

	/** Выбор регона > **/


	// REACT RENDER POINT FOR POPUP
	$('.j-react-popup').on('click', function(e) {
		e.preventDefault();

		var pageWrap = document.querySelector('html');
		var currentWidth = pageWrap.clientWidth;
		var reactPopup = document.getElementById('react-popup');
		var reactPopupFocusableEl = document.querySelector('#react-popup .screenHolder-focusable');

		//the same way as in react code in popupActions.js
		reactPopup.style.display = "flex";
		pageWrap.classList.add('react-popup-is-active');
		pageWrap.style.width = currentWidth + 'px';

		reactPopupFocusableEl && reactPopupFocusableEl.focus();
	});

	$('.authModalToggler').on('click', (e) => {
		e.preventDefault();
		window.emitter().emit('CAKE2REACT:SET/MODAL_STATE', true);
	});

	/** логин // регистрация **/
	$('.j-user-popup').live('click', function(e){
		e.preventDefault();
		$link = $(this);
		var options = {
			width: '338px',
			modal: true,
			dialogClass: 'b-popup',
			closeText: 'Закрыть',
			title: ($link.attr('title') ? $link.attr('title'):$link.text()),
			open: function(event, ui){
				$("body").disableScroll();
			},
			close: function() {
				$("body").enableScroll();
			},
			autoOpen: false
		};

		$.get($link.attr('href'), function(data){
			if(typeof data === 'object' && data.location){
				window.location.href = data.location;
				return;
			}
			//$("#user-form").dialog("close");
			$(".ui-dialog:visible").find(".ui-dialog-content").dialog("close");
			var $o = $('<div id="user-form"/>');
			$o.html(data).dialog(options);
			if($o.find('.j-phone').length) {
				$o.find('.j-phone').phoneWidget();
			}
			if($o.find('.j-birthday').length) {
				$o.find('.j-birthday').attr('placeholder', 'дд . мм . гггг').mask('00 . 00 . 0000', {clearIfNotMatch: true});
			}

			$o.find('.j-region-input').regionsAutocomplete({
				appendTo: $o.find('.j-region')
			}).change(function(){
				var selected = $(this).data('selected');
				if( selected ){
					$o.find('.j-region-id').val(selected.id);
					$(this).data('selected', '');
					$('#choose-locality-dialog').dialog('close');
				}
			});

			$o.dialog('open');
		});

	});

	$(window).on('submit', '.j-user-login-form', function(e){
		e.preventDefault();
		var form = $(this);
		var loginEl = form.find('.j-input-user-email'),
			passEl = form.find('.j-input-user-password');
		loginEl.val($.trim(loginEl.val()));
		passEl.val($.trim(passEl.val()));
		form.find('.g-form__messages').html('');
		if(form.validate()){
			$.ajax({
				type: 'post',
				url: form.attr('action'),
				dataType: "json",
				data: form.serialize(),
				success: function(data) {
					if(data.error) {
						form.find('.g-form__messages').html('<span class="g-form__message">'+ data.error +'</span>');
					} else {
						form.find('.g-form__messages').html('');
						if (data.user && data.user.jwt) {
							window.location.href = data.location
						}
						$(".ui-dialog:visible").find(".ui-dialog-content").dialog("close");
					}
				}
			});
		}
	});

	$(window).on('submit', '.j-user-register-form', function(e){
		e.preventDefault();
		var form = $(this);
		if(form.hasClass('cr-state-proceed')) return false;
		if(form.validate()){

			$.ajax({
				type: 'post',
				url: form.attr('action'),
				dataType: "json",
				data: form.serialize(),
				success: function(data) {
					if(data.errors) {
						$.each( data.errors, function( field, error ) {
							var $elem = form.find(':input[name=data\\[User\\]\\['+field+'\\]]').parents('.g-form__label');
							$elem.find('.g-form__message').remove();
							$elem.addClass('cr-state-error').append('<span class="g-form__message">'+error+'</span>');
						});
					} else {
						if (data.user && data.user.jwt) {
							window.location.href = data.location
						}
						$(".ui-dialog:visible").find(".ui-dialog-content").dialog("close");
					}
				},
				beforeSend: function(){
					form.addClass('cr-state-proceed')
				},
				complete: function(){
					form.removeClass('cr-state-proceed')
				}
			});

		}
	})

	$('.j-remind-password').live('click', function(e){
		e.preventDefault();
		var btn = $(this);
		var container = $(this).parents('.b-remind-password');
		var form = $(this).parents('.b-user-auth');
		form.find('.j-input-user-password').parents('.g-form__label').removeClass('j-check');
		form.find('.cr-state-error').removeClass('cr-state-error');
		form.find('.g-form__message').remove();
		if(form.find('.j-check').validate()){
			var email = form.find('.j-input-user-email').val();
			btn.find('.j-remind-password__loader').addClass('cr-state-loading');
			$.ajax({
				type: 'post',
				url: '/users/remind_password/',
				dataType: "json",
				data: {data: {email: email}},
				success: function(data) {
					btn.find('.j-remind-password__loader').removeClass('cr-state-loading');
					if(data.error){
						var $elem = form.find(':input[name=data\\[User\\]\\[email\\]]').parents('.g-form__label');
						$elem.find('.g-form__message').remove();
						$elem.addClass('cr-state-error').append('<span class="g-form__message">'+data.error+'</span>');
					}
					if(data.msg){
						container.html(data.msg);
					}
				}
			});
		}

		$('.j-input-user-password').parents('.g-form__label').addClass('j-check');
	});
})( jQuery );

//проверяем на валидность дату
function isDate(y,m,d){
	var date = new Date(y,m-1,d);
	var convertedDate =
	""+date.getFullYear() + (date.getMonth()+1) + date.getDate();
	var givenDate = "" + y + m + d;
	return ( givenDate == convertedDate);
}

function getCSS(url){
	var link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', url);
	document.getElementsByTagName('head')[0].appendChild(link);
}

//виджет подборка
$(function(){
	const performWidgetSelectionPostRequest = (data, successCb) => {
		$.post('/get/widget/selection/', {'data': data})
			.done(function(response) {
				if (response.total_pages === -1) {
					const TID = setTimeout(() => {
						performWidgetSelectionPostRequest(data, successCb);
						clearTimeout(TID);
					}, 5000);
				} else {
					successCb(response);
				}
			});
	};

	const initWidget = function (settingsFromCache = {}) {
		$.widget('custom.selection', {
			options: {
				widget: 'selection',
				page: 1,
				modifiedContent: $('#b-content_modified').data('modified'),
				...(settingsFromCache.options || {})
			},
			getData: function() {
				var data = $.extend({}, this.options);
				delete data.selection;
				return data;
			},
			setMenu: function() {
				var el = this.element;
				var self = this;

				el.on('click', '.j-menu__spec', function(){
					var hash = this.hash;
					self.options['template'] = this.hash.replace('#', '');
					self.options.page = 1;
					el.find('.j-menu__spec').parent().removeClass('cr-menu__spec_active');
					el.find(hash + '-link').parent().addClass('cr-menu__spec_active');
					self.refresh();
				});
			},
			_create: function() {
				var el = this.element;
				var self = this;

				if (!settingsFromCache.isCached) {
					el.html("<div class='g-preloader' />");
				}

				getCSS('/css/main/selection.css');
				getCSS('/css/main/catalog_index.css');

				if(!this.options['template']){
					var template = window.location.hash.replace('#', '');
					this.options.template = template ? template : 'all';
				}

				var data = this.getData();
				const dataFromOptions = this.getData();
				if(this.options.with_menu){
					data['menu'] = true;
					this.setMenu();
				}

				el.on('click', '.j-click_to_all', function(){
					self.options['template'] = $(this).attr('href').replace('#', '');
					self.refresh();
				});

				function successGetSelection(data = {}) {
					if (data.total_pages > 1) {
						if (settingsFromCache.isCached) {
							this.changer = $('.cr-tools_paginator .g-button');
						}
						else {
							var paginator = $('<div/>', {
								'class': 'cr-tools_paginator g-box_lseparator g-paginator_offer_spot',
							}).appendTo(el);
							this.changer = $('<button>', {
								text: 'Показать еще',
								'class': 'g-button',
							}).appendTo(paginator);
						}
						this.changer.on('click', function() {
							self.options.page++;
							data['menu'] = '';
							self.refresh();
						});
					}
					window.emitter().emit('cake2react:updateSpecialOffersCake', { options: dataFromOptions, total_pages: data.total_pages });
					try {
						dl.cards.viewed.selections();
						dl.goods.viewed.selections();
					} catch (e) {}
				}

				if (settingsFromCache.isCached) {
					successGetSelection(settingsFromCache);
					settingsFromCache.isCached = false;
				}
				else {
					performWidgetSelectionPostRequest(data, (response) => {
						el.html(response.html);
						successGetSelection(response);
					})
				}
			},
			refresh: function(el){
				var el = this.element;
				var self = this;
				var data = this.getData();
				var dataFromOptions = this.getData();

				$('.g-paginator_offer_spot').find('.g-button').css('display', 'none');
				if (data.page === 1) {
					$('body,html').animate({scrollTop: el.offset().top - 50}, 400);
					el.find('.j-widget_selection__goods').html("<div class='g-preloader' />");
				}
				else{
					$('.g-paginator_offer_spot').prepend("<div class='g-preloader' />");
				}
				performWidgetSelectionPostRequest(data, (response) => {
					if (self.options.page < response.total_pages) {
						$('.g-paginator_offer_spot').find('.g-button').css('display', 'initial');
					}
					if (self.options.page === 1) {
						el.find('.j-widget_selection__goods').html(response.html);
					}
					else{
						el.find('.j-widget_selection__goods').find('ul').append(response.html);
						$('.g-paginator_offer_spot').find('.g-preloader').remove();
					}
					window.emitter().emit('cake2react:updateSpecialOffersCake', { options: dataFromOptions, total_pages: response.total_pages });
					try {
						dl.cards.viewed.selections();
						dl.goods.viewed.selections();
					} catch (e) {}
				})
			},
			_setOptions: function(options){
				Object.assign(this.options, options);
				this.refresh();
			}
		});

		$('.j-widget_selection').each(function(){
			var self = $(this);
			self.selection(self.data());
		});
	}

	const jWidgetSelection = $('.j-widget_selection');
	let timeoutId = null;

	if (jWidgetSelection && jWidgetSelection.length > 0) {
		getCSS('/css/main/selection.css');
		getCSS('/css/main/catalog_index.css');

		if (!window.cakeSpecialOffers) {
			window.cakeSpecialOffers = {};

			jWidgetSelection.html("<div class='g-preloader' />")

			timeoutId = setTimeout(() => {
				window.cakeSpecialOffers.isNotCache = true;
				initWidget(window.cakeSpecialOffers);
			}, 6000);
		}
		window.cakeSpecialOffers =  {
			...window.cakeSpecialOffers,
			jWidgetSelection
		};
		window['emitter']().emit('cake2react:widgetsLoaded');
		window['emitter']().subscribe('react2cake:init-react-save-scroll-position-so', function () {
			clearTimeout(timeoutId);
			initWidget(window.cakeSpecialOffers);
		})
	}
	else {
		initWidget();
	}
});

$("input[class^='j-read_']").on('change', function(){
	regex = /j-read_([a-z]*)\s/g;
	var matched = regex.exec($(this).attr('class'))[1];
	var incoming_data = {};
	incoming_data[matched] = $(this).val();
	company_info(incoming_data);
});

var company_info = function(incoming_data){
	var unp = incoming_data.unp;
	if (unp && unp.toString().length < 9) {
		showCompanyInfoForEdit();
		return;
	}
	$.ajax({
		type: 'post',
		url: '/order/get_company_info/',
		dataType: "json",
		data: incoming_data,
		success: function(data){
			if(data){
				if(data.org == undefined && data.address == undefined){
					$("input[name='data[org][address]']").closest("label").hide();
					$('#j-company_info').addClass('error');
					$('#j-company_info').show('error');

					$("input[name='data[org][org]']").attr('value', '');
					$("input[name='data[org][address]']").attr('value', '');

					$('#j-org_name').html('Организация не найдена');
					$('#j-org_address').html("Проверьте корретность ввода УНП — уникальный номер плательщика, 9 цифр.  <br>Уточнить УНП можно на сайте <a href='http://www.portal.nalog.gov.by/grp/' target='_blank'>министерства по налогам и сборам</a></div>");
				}
				else {
					$('#j-company_info').removeClass('error');
					$('#j-org_name').html(data.org);

					$('#j-org_address').html(data.address);
					$('#j-company_info').show();
					$.each(data, function(key, info){
						$("input[name='data[org]["+key+"]']").attr('value',info);

						if(key == 'address' && data.address == ''){
							//Если наименование организации получено, а адрес пуст, показываем для заполнения поле адрес
							$("input[name='data[org]["+key+"]']").closest("label").show();
						}
						else{
							$("input[name='data[org]["+key+"]']").closest("label").hide();
						}
					});
				}
			}
			else {
				showCompanyInfoForEdit();
			}
		}
	});

	function showCompanyInfoForEdit() {
		$('#j-company_info').hide();
		$('input[name=\'data[org][address]\']').closest('label').show();
		$('input[name=\'data[org][org]\']').closest('label').show();
	}
};
