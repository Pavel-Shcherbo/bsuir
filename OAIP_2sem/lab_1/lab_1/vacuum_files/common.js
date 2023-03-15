/**
 * @constructor
 */
var isMobile = $('.wrapper.ui-mobile').length;

function City() {

	this.id = null;
	this.nameObject = null;
	this.shortName = null;
	this.nameDistrict = null;
	this.selsovet = null;
	this.administrative_value = null;

	/**
	 * @returns {string}
	 */
	this.toHtmlLine = function () {

		var line = this.nameObject;

		if (this.shortName === 'г') {
			line = "<b>" + line + "</b>";
		}

		if (this.nameDistrict && this.shortName !== 'г') {
			line += ", " + "<i>" + this.nameDistrict + " р-н</i>";
		}

		if(this.selsovet && this.administrative_value === 0) {
			line += ', ' + '<i>' + this.selsovet + ' c/c</i>';
		}

		return this.shortName + ". " + line;
	}
}

function CityDumb() {
	City.call(this);
}

function LocationsMapper() {
	/**
	 * @param {Object} jsonApiCity
	 * @returns {City}
	 */
	this.mapApiResource = function (jsonApiCity) {
		const city = new City();

		city.id = jsonApiCity.id;
		city.nameObject = jsonApiCity.attributes.name;
		city.shortName = jsonApiCity.attributes.type.replace(/\.+$/, '');
		city.nameDistrict = jsonApiCity.attributes.district;
		city.selsovet = jsonApiCity.attributes.selsovet;
		city.administrative_value = 0;

		return city;
	}

	/**
	 * @param {Object} jsonApiAddress
	 * @returns {Address}
	 */
	this.mapToAddress = function (jsonApiAddress) {
		const address = new Address();

		address.id = jsonApiAddress.id;
		address.shortTypeName = jsonApiAddress.attributes.street_type_short;
		address.elementName = jsonApiAddress.attributes.street_name;
		address.numHouse = jsonApiAddress.attributes.num_house;
		address.numCorp = jsonApiAddress.attributes.num_corpus;
		address.indHouse = jsonApiAddress.attributes.index_house;
		address.km = jsonApiAddress.attributes.km;
		address.x_coordinate = jsonApiAddress.attributes.x_coordinate;
		address.y_coordinate = jsonApiAddress.attributes.y_coordinate;

		return address;
	}
}

/**
 * @constructor
 */
function Address() {
	this.toString = function () {

		var full = '';

		if (this.shortTypeName !== '') {
			full += ` ${this.shortTypeName.replace(/\.+$/, '')}.`;
		}

		if (this.elementName !== '') {
			full += ' ' + this.elementName;
		}

		if (full) {
			full += ', ';
		}

		if (this.numHouse !== '') {
			full += this.numHouse;
		}

		if (this.indHouse !== '') {
			full += this.indHouse;
		}

		if (this.numCorp !== '') {
			full += ', корп.' + this.numCorp;
		}

		return full.trim();
	}
}

/**
 * @constructor
 */
function NewAddress() {
	this.id = 'newAddress';
	this.shortTypeName = '+Добавить новый адрес';

	this.toString = function () {
		return this.shortTypeName;
	}
}


/**
 * @param {String} q
 * @param {LocationsMapper|SelectLocationsMapper} mapper
 * @param {function} response
 */
function searchLocationsCities(q, mapper, response) {
	window.locations.searchCitiesByName(q).then(function(data) {
		const result = data.map(function (city) {
			return mapper.mapApiResource(city);
		} )
		response(result)
	}).catch(function () {
		response([])
	});
}

/**
 * @param {String} q
 * @param {BigInteger} cityId
 * @param {LocationsMapper} mapper
 * @param {function} response
 */
function searchLocationsAddresses(q, cityId, mapper, response) {
	window.locations.searchAddresses(q, cityId).then(function(data) {
		const result = data.map(function (address) {
			return mapper.mapToAddress(address);
		} )
		response(result)
	}).catch(function () {
		response([])
	});
}

/**
 * @param {String} cityId
 * @param {function} response
 */
function getLocationsCity(cityId, response) {
	window.locations.getCitiesByIds([cityId]).then(function(data) {
		const [cityData, ] = data;
		const city = (new LocationsMapper()).mapApiResource(cityData);
		response(city)
	}).catch(function () {
		response(null)
	});
}


$.widget("custom.citySelector", {
	_create: function () {
		var $idStorage = this.element.hide();
		var $textField = $('<input type="text">')
			.attr('disabled', true)
			.addClass('citySelectorInput')
			.data($idStorage.data())
			.insertAfter(this.element);

		/**
		 * Возвращает название города в текстовое поле согласно установленному id из $idStorage
		 * @param callback
		 */
		var restoreTextFieldValue = function(callback) {
			getLocationsCity($idStorage.val(),
				/**
				 * @param {City} city
				 */
				function (city) {
					var name = city ? city.nameObject : '';
					if (typeof callback === 'function') {
						callback();
					}
					$textField.val(name);
				}
			)
		};

		$textField.cityAutocomplete({
			create: function () {
				restoreTextFieldValue(function () {
					$textField.attr('disabled', false);
				});
			},
			select: function (event, ui) {
				var cityId = ui.item.id;
				var label = ui.item.nameObject;
				$idStorage.attr('value', cityId);
				$textField.attr('value', label);
				return false;
			}
		});

		$textField.focusin(function () {
			$textField.val('');
		});

		$textField.focusout(function () {
			if ($('.citySelectorMenu:visible').length === 0) {
				restoreTextFieldValue();
			}
		});
	}
});

$.widget("custom.cityChange", {
	_create: function () {
		var $cityChange = this.element;
		var originalText = $cityChange.val();

		$cityChange.cityAutocomplete({
			select: function (event, ui) {
				if (ui.item instanceof CityDumb) {
					$cityChange.val(originalText);
					return false;
				}

				var btn = document.querySelector('button[type=submit]');
				if (btn) {
					btn.disabled = true;
				}

				$cityChange.val(ui.item.nameObject);
				$.get('/mobile/actions/select_region/', {
					city_id: ui.item.id,
				}, function (response) {
					window.location.reload();

					// fallback for our Android app, where window.location.reload() doesn't work in WebView
					// it doesn't reload the page with the same url
					if (window.settings.is_webview) {
						MessageToWebview(MessageToWebview.TYPES.androidReload);
					}
				});
				return false;
			},
			response: function (event, ui) {
				if (ui.content.length === 0) {
					ui.content.push(new CityDumb());
				}
			}
		});

		$cityChange.focusin(function () {
			$cityChange.val('');
		});
		$cityChange.focusout(function () {
			$cityChange.val(originalText);
		});

	}
});


function disableBrowserAutocomplete(element) {
	element.prop('autocomplete', 'nope');
}

$.widget("custom.cityAutocomplete", $.ui.autocomplete, {
	_init: function() {
		disableBrowserAutocomplete(this.element);
	},
	options: {
		source: function(request, response) {
			request.term = request.term.trim();
			if (request.term.length < 2 || request.term.length > 100) {
				response([]);
				return;
			}

			searchLocationsCities(request.term, new LocationsMapper(), response);
		},
		minLength: 2
	},
	/**
	 * @param {jQuery} ul
	 * @param {City} item
	 * @returns {jQuery}
	 * @private
	 */
	_renderItem: function(ul, item) {
		ul.addClass('ui-autocomplete-simple');
		ul.addClass('citySelectorMenu');

		if (item instanceof CityDumb) {
			var missingText = this.element.data('missing-items-text');
			return $( "<li>" ).text(missingText).appendTo(ul);
		}

		return $( "<li>" )
			.data( "item.autocomplete", item )
			.append( "<a>" + item.toHtmlLine() + "</a>" )
			.appendTo( ul );
	}
});

/**
 * Добавляем внутрь саджеста кнопку "Добавить новый адрес" для десктопа
 * @param {Address[]} collection
 */
function addNewAddressButton(collection) {
	const $textField = $('.g-form__text.j-address-input');

	if (!$textField.hasClass('j-new-address')) {
		collection.unshift(new NewAddress());
	}

	return collection;
}


/**
 * @param {String} q
 * @param {BigInteger} cityId
 * @param {function} response
 * @param {function} onResponse
 */
function requestLocationsAddresses(q, cityId, response, onResponse) {
	searchLocationsAddresses(q, cityId, new LocationsMapper(), function (collection) {
		if(onResponse){
			onResponse();
		}
		if($('.g-form__inputwrap .j-address-input').is(":focus")) {
			response(addNewAddressButton(collection));
		}
	});
}

function addLoader() {
	const inputContainer = $('.g-form__inputwrap .j-address-input');
	if (!$('.g-form__inputwrap .address-list-loader').length) {
		const spinner = $("<div class='address-list-loader'><div class='rotate'></div></div>");
		spinner.insertAfter(inputContainer);
	}
}

function removeLoader() {
	const adressInputLoader = $('.g-form__inputwrap .address-list-loader');
	adressInputLoader.remove();
}

$('.g-form__text.j-address-input').blur(removeLoader);

$.widget("custom.addressAutocomplete", $.ui.autocomplete, {
	options: {
		source: function(request, response) {
			var cityId = this.element.data('city_id');
			request.term = request.term.trim();
			if (
				request.term.length === 0
				|| request.term.length > 500
			) {
				response([]);
				return;
			}

			if(!$('#add-address-placeholder').length){
				response(addNewAddressButton([]));
			}
			addLoader();
			requestLocationsAddresses(request.term, cityId, response, removeLoader);
		},
		minLength: 1
	},
	/**
	 * @param {jQuery} ul
	 * @param {Address} item
	 * @returns {jQuery}
	 * @private
	 */
	_renderItem: function(ul, item) {
		ul.addClass('ui-autocomplete-simple');
		ul.addClass('addressSelectorMenu');
		const li = $("<li>").data( "item.autocomplete", item );
		const link = $("<a>" + item.toString() + "</a>")

		if (item.id === 'newAddress') {
			const id = 'add-address-placeholder';
			link.attr('id', id);
			li.attr('aria-label', id);
		}

		return li
			.append(link)
			.appendTo( ul );
	}
});

$.widget("custom.addressComboBox", {
	_create: function () {
		var $idStorage = this.element.find(".j-address_id-input");
		var x_coordinate = this.element.find(".j-address_x_coordinate-input");
		var y_coordinate = this.element.find(".j-address_y_coordinate-input");
		var $textField = this.element.find(".j-address-input");
		var $addressFormMessage = $(".j-address-message");
		var $profileAddressSuggest = this.element.find('#j-profile-address-suggest');
		var formTitle = $('.order__header.j-dynamic');
		var titleText = isMobile ? 'Адрес доставки' : ' Адрес доставки';

		// Если адрес был выбран не через саджест, то при загрузке страницы мы прячем сообщение
		if ($idStorage.val() !== '0') {
			$addressFormMessage.hide();
		}

		if (!isMobile) {
			formTitle = $('.g-form__set-label.j-dynamic');
		}

		var $opts = {
			create: function (event, ui) {
				if ($textField.val().length === 0 && parseInt($idStorage.val()) === 0) {
					$profileAddressSuggest.hide();

				} else if ($textField.val().length > 0 && parseInt($idStorage.val()) > 0 ) {
					$profileAddressSuggest.hide();

				} else {
					$profileAddressSuggest.show();
				}

				// выключаем браузерный autocomplete на инпуте "адрес"
				$textField.prop('autocomplete', 'nope');
			},
			select: function (event, ui) {
				/** @var {Address} address **/
				var address = ui.item;
				$addressFormMessage.hide();

				// Был выбран пункт "Добавить новый адрес"
				if (!address || address.id === 'newAddress') {
					formTitle.text(titleText + ', новый');
					$textField.addClass('j-new-address');
					return false;
				}

				// Был выбран адрес из саджеста
				formTitle.text(titleText);
				$textField.removeClass('j-new-address');
				$textField.addClass('j-address-selected-via-suggest');

				$textField.val(address.toString());
				// id ставится последним, потому что любое изменение тексторого поля сбрасывает id
				$idStorage.val(address.id);
				x_coordinate.val(address.x_coordinate);
				y_coordinate.val(address.y_coordinate);
				return false;
			},
			open: function (event, ui){
				if (UpdateBasketDesktopHelper) {
					UpdateBasketDesktopHelper.disableUpdateBasket();
				}

				$profileAddressSuggest.hide();
			},
			close: function (event, ui) {
				if (UpdateBasketDesktopHelper) {
					UpdateBasketDesktopHelper.enableUpdateBasket();
				}

				$idStorage.change();

				if ($idStorage.val() !== '0') {
					$profileAddressSuggest.hide();
				} else {
					$profileAddressSuggest.show();
				}
			}
		};

		if (this.options.appendTo) {
			$opts.appendTo = this.options.appendTo;
		}

		$textField.addressAutocomplete($opts);

		$textField.on("keydown", function (e) {
			if (e.which !== 13 && e.which !== 16 && e.which !== 17) {
				$textField.removeClass('j-address-selected-via-suggest');
				$idStorage.val('0');
				if (!$textField.hasClass('j-new-address')) {
          $addressFormMessage.show();
        }
			}
		});

		$textField.on("keyup", function (e) {
			if (!e.target.value.trim()) {
				formTitle.text(titleText);
				$textField.removeClass('j-new-address');
			}

			// Закрываем ошибки формы при вводе новых символов
			if (e.target.value.trim()) {
				$('#j-addr').removeClass('cr-state-error')
				$('#j-addr .g-form__message').hide();
			}
		});

		$textField.show();
	}
});

function SelectLocationsMapper() {
	/**
	 * @param {Object} jsonApiCity
	 * @returns {Object}
	 */
	this.mapApiResource = function (jsonApiCity) {
		return {
			city: jsonApiCity.attributes.name,
			type: jsonApiCity.attributes.type.replace(/\.+$/, '') ,
			region: jsonApiCity.attributes.district ? jsonApiCity.attributes.district + ' р-н' : '',
			distance: 0, //значение по умолчанию, подходит любое кроме -1
			city_id: jsonApiCity.id,
			village_council: jsonApiCity.attributes.selsovet ? jsonApiCity.attributes.selsovet + ' c/c' : '',
		};
	}
}

function character_escaping(text) {
	return text.replace(/[-[\]()*+?.,^$|#\s]/g, "\\$&");
}

function selectCity(input, city) {
	var label = input.parents('label');
	label.attr('data-mask', character_escaping(city.city));

	input.data('selected', city);
	input.val(city.city);
	input.data('value', city.city );
	input.trigger('change');
}

function searchCityByName(name, response, element) {
	name = name.trim();
	if (name < 2 || name.length > 100) {
		response([]);
		return;
	}

	searchLocationsCities(name, new SelectLocationsMapper(), response);
}

$.widget( "custom.regionsAutocomplete", $.ui.autocomplete, {
	_init: function() {
		disableBrowserAutocomplete(this.element);
	},
	options: {
		source: function( request, response ) {
			searchCityByName(request.term, response, this.element)
		},
		minLength: 2,
		focus: function( event, ui ) {
			$(this).val( ui.item.city ); //фокус над городом из списка
			return false;
		},
		select: function(event, ui){//перед запросом
			selectCity($(this), ui.item);
			return false;
		},
		close: function(event, ui){
			$(event.target).parents('label').validate();
			return false;
		},
		response: function (event, ui) {
			if (ui.content.length === 0) {
				ui.content.push({
					distance: -1,
				});
			}
		}
	},
	_renderItem: function( ul, item ) {
		ul.addClass('ui-autocomplete-simple');
		ul.addClass('regionSelectorMenu');

		if (item.distance === -1){
			var message = ul.siblings('div').find('input').attr('data-missing-items-text');
			return $( "<li class='ui-menu-itemnull'></li>" )
				.append( message ? message : 'Мы не нашли такой населенный пункт. Попробуйте выбрать его в списке ниже.' )
				.appendTo( ul );
		}
		var li = item.city;
		if ( item.type === 'г' ){
			//город выделим
			li = "<b>" + li + "</b>";
		}

		if (item.region && item.type !== 'г'){
			li += ",&nbsp;</span><i>" + item.region;
		}

		if (!item.region) {
			li += "&nbsp;</span>";
		}

		if (item.village_council) {
			li += ", " + item.village_council + "</i>";
		}

		item.city = item.type + ". " + item.city;
		// Добавляем контейнер для населенного пункта, чтобы иметь возможность вывести наименование
		// и все остальное в одну строку при уходе длинного текста в точки.
		// Проблема заключается в том, что если пытаться применить соответствующие стили ко всей строке,
		// то точки при наведении подсвечиваются как ссылка.
		li = "<span>" + item.type + ". " + li;

		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a>" + li + "</a>" )
			.appendTo( ul );

	}
});
