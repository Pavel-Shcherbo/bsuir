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

/*****************************************************************************/
/*	FILTER	*/
/*****************************************************************************/
$(function() {
		if (window.partlyPayOffersCache) {
			window.partlyPayOffersCache.renderPartlyPayOffers(window.productCodes);
		}
		if (window.deliveryDates) {
			window.deliveryDates.renderDeliveryDatesForListings(window.deliveryDatesCodes);
		}

		//данный код актуален только там, где есть блок фильтров
		var $filter_form = $('#j-filter__form');
		var $filter_btn = $("#j-filter__btn");
		var filterRequest = null;
		var urlSearchId = new URLSearchParams(window.location.search).get('searchId');
		//запрещаем вводить не цифры в фильтры
		$('.filter__attrs .g-form__text').keypress(function(b){
			var a = b.which;
			var c = String.fromCharCode(a);

			var allowed_chars = [ //разрешенные знаки
				',', '.', '-'
			];

			var service_keys = [ //служебные символы
				0, //Tab
				8, //Backspace
				46 //Delete
			];

			var not_valid_key = (jQuery.isNumeric(c) == false //если не число
				&& ($.inArray(c, allowed_chars) == -1) //и не дозволенный знак
				&& ($.inArray(a, service_keys) == -1) //и не служебная кнопка
			);
			if(not_valid_key){
				return false;
			};
		});
		//запрещаем копировать не цифры в фильтры
		$('.filter__attrs .g-form__text').change(function() {
			var a = $( this ).val();
			var re = /[a-zA-ZА-Яа-я\%\=\&\?\\\/]/g;
			var re2 = /([0-9])([\.\,])([0-9]*)([\.\,])([0-9]*)/g;
			if(a){
				a = a.replace(re,'');//прячем буквы
				$( this ).val(a.replace(re2,"$1$3$4$5"));//прячем лишние точки и запятые
			};
		});
		if( $filter_form.size() ){
			var stickyFilter = function(){
				var $sticky_btn = $('#j-filter-sticky_btn');

				var body = document.body
				var docElem = document.documentElement
				var scrollBottom = $(window).height()
								+ (window.pageYOffset || docElem.scrollTop || body.scrollTop) //высота окна + scrollTop

				var filterTop = $filter_form.offset().top; //верхняя точка фильтра
				var filterBottom = filterTop + $filter_form.innerHeight(); //нижняя точка фильтра

				if(scrollBottom > filterBottom || scrollBottom < filterTop + 160){
					$sticky_btn.removeClass('j-filter-sticky_btn');
				}
				else{
					$sticky_btn.addClass('j-filter-sticky_btn');
				}
			};
			var stickyFilterTimer;
			$(window).on('scroll resize', function () {
				if (!stickyFilterTimer) {
					stickyFilterTimer = setTimeout(function () {
						stickyFilterTimer = null;
						stickyFilter();
					}, 500);
				}
			});
			stickyFilter(); // onload

			var getAndSetFilterData = function( delay, value ){
				var self = $(this), timeoutId = $filter_form.attr('timeoutId'), delay = delay || 0;
				clearTimeout(timeoutId);

				timeoutId = setTimeout(function(){

					self.data('value', value);
					var data = $filter_form.find(':text[value!=""], :checkbox:checked').serializeArray(), yesno = {}, attrId;

					//для случая если выбраны оба пункта в yesno мы удалим их из запроса
					for(var i = 0; i < data.length; i++){
						if(data[i].name.search(/\[(yes|no)\]/) != -1){
							attrId = data[i].name.replace(/\[(yes|no)\]/, '');
							if(typeof yesno[attrId] == 'undefined'){
								yesno[attrId] = [data[i]];
							} else {
								yesno[attrId].push(data[i]);
							}
						}
					}

					//итерируем по yesno и есть есть 2 элемента - удаляем
					for(var key in yesno){
						if(yesno[key].length == 2){
							data.splice(data.indexOf(yesno[attrId][0]), 1);
							data.splice(data.indexOf(yesno[attrId][1]), 1);
						}
					}

					var term = $filter_form.find("[name='term']").val();
					var current_category = $filter_form.find("[name='category_id']").val();
					var price_min = $filter_form.find("[name='price_min']").val();
					var price_max = $filter_form.find("[name='price_max']").val();
					var searchId = getSearchId();

					if (term && current_category && price_min && price_max) {
						data.push({name: 'term', value: term});
						data.push({name: 'current_category', value: current_category});
						data.push({name: 'price_min', value: price_min});
						data.push({name: 'price_max', value: price_max});
						data.push({name: 'searchId', value: searchId});
					}

					filterRequest && filterRequest.abort();
					filterRequest = $.ajax({
						type: "POST",
						url: $filter_form.attr('action') + 'ajax_filter/',
						data: data,
						success: function(data){
							$('#j-filter__counter').text(data.total);
							$filter_btn.toggleClass('cr-button__disabled', data.total <= 0);
							$filter_form.find('input[name="filter[price][from]"]').attr('placeholder', humanNumber(data.price_from, 'down'));
							$filter_form.find('input[name="filter[price][to]"]').attr('placeholder', humanNumber(data.price_to, 'up'));
						},
						error: function(data){
							//console.log('ERROR');
						},
						dataType: 'JSON'
					});
				}, delay);
				//таймаут 600 милисекунд, дабы не было миллиона запросов при выборе параметров
				$filter_form.attr('timeoutId', timeoutId);
			};

			getAndSetFilterData(true, true);

			$filter_form.find('input:checkbox').on('change', function(event){
				var $parent = $(this).closest('dl');
				var $toggle = $parent.find('.j-plus__toggle');
				if(
					$toggle.data('viewed') !== true
					&& $toggle.length > 0
					&& $(this).is(':checked')
					&& $parent.find('input:checked').size() == 1
					&& !$parent.hasClass('j-producers')
				)
				{
					setTimeout(function(){
						$toggle.trigger('click');
					},0);
				}
				getAndSetFilterData( 200, $(this).is(':checked') );
			});
			$filter_form.find('input:text').on('keyup', function(){
				getAndSetFilterData( 500, $(this).val() );
			});

		}
		$filter_btn.click(
			function(event){

				var $filter = $filter_form.find(':text[value!=""], :checkbox:checked');
				var $a = $filter.next('a');

				if($filter.length ===1 && $a.length === 1){
					event.preventDefault();
					filterRequest && filterRequest.abort();
					filterRequest = $.ajax({
						type: "get",
						url: $filter_form.attr('action') + 'ajax_filter/',
						data: $filter_form.serialize()+'&filter[sa]=',
						success: function(){
							window.location.href = $a.attr('href');
						}
					});
				}
				$filter_form.find('input:text[value=""]').prop('disabled', true); //пустые элементы фильтра
			}
		);

//		 Производители в фильтре ссылкой сделаны которая никуда не ведет
		$(".j-link-nohref").on('click', function( event ){
			event.preventDefault();
			$(this).siblings('input').trigger('click');
		});

		var showMoreLink =  function(){
			var reciepesListHeight = $('.b-recipes_wrap > ul').height();
			if(reciepesListHeight > 65){
				var pos_obj = $(".b-recipes__item__span").parent('li').position();
				if(pos_obj && pos_obj.top > 59){
					$(".j-recipes-more").toggleClass('active');
					$('.b-recipes_wrap').toggleClass('cr-show_recipes_more');
				}

				$('.b-recipes__more').show();
			}
		}

		var moveSelectedToFirstLine = function() {
			var recipes_list = $('.b-recipes_wrap > ul'),
				selected_recipe = $('.b-recipes_wrap').find('.b-recipes__item__span').parent('li');

			selected_recipe.prependTo(recipes_list);
		}

		moveSelectedToFirstLine();

		showMoreLink();

		$(".j-recipes-more").on('click', function( event ){
			event.preventDefault();
			$(this).toggleClass('active');
			$('.b-recipes_wrap').toggleClass('cr-show_recipes_more');
		});

		$(".j-filter__fold").click(function(){
			//сворачивает | разворачивает группу с параметрами
			$(this).parent().parent().toggleClass('cr-filter__fold cr-filter__unfold');
		});
		$("#j-producers__toggle").toggle(
			//для производителей
			//нажатие на псевдо-ссылку "показать всех"
			function(){
				$(this).text("Только популярные").closest('.g-arr').toggleClass("g-cr-darr g-cr-uarr ");
				$("#j-producers__additional").show();
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			},
			function(){
				$(this).text("Показать всех").closest('.g-arr').toggleClass("g-cr-darr g-cr-uarr ");
				$("#j-producers__additional").hide();
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			}
		);
		$(".j-plus__toggle").toggle(
			//для фильтров
			//нажатие на псевдо-ссылку "Показать всё"
			function(){
				$(this).data('viewed', true);
				$(this).hide();
				$(this).closest( "dl" ).addClass("cr-filter_viewadd");
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			},
			function(){
				$(this).hide();
				$(this).closest( "dl" ).addClass(".cr-filter__additional");
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			}
		);

		$("#j-filter__toggle").toggle(
			//показывает | скрывает дополнительные параметры
			function(){
				$(this).text("Скрыть параметры").closest('.g-arr').toggleClass("g-cr-darr g-cr-uarr ");
				$("#j-filter__additional").show();
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			},
			function(){
				$(this).text("Еще параметры").closest('.g-arr').toggleClass("g-cr-darr g-cr-uarr ");
				$("#j-filter__additional").hide();
				$('#tooltip').hide().removeClass('cr-source_tooltip-right');
			}
		);

		if($("#j-filter__additional").find(".g-form__checked, input:text[value!='']").size()){
			$("#j-filter__toggle").click();
		}

		//Замена точки на запятую для инпутов
		$('#j-filter__form').find("input.g-form__text").bind('change', function(){
			var $elem = $( this );
			if($elem.is('input')) {
				value = $elem.val();
				value = value.replace('.', ',');
				$elem.val(value);
			}
		})

		/*Слайдеры для заполнения полей*/
		$( ".j-slider_range" ).each(function(){
			var $inputs = $( this ).find("input"),
				$from	= $( $inputs[0] ), //текстовое поле для значения "от"
				$to		= $( $inputs[1] ), //текстовое поле для значения "до"
				min_value	= $( this ).attr('from')-0,
				max_value	= $( this ).attr('to')-0;

			var step = 1;

			var $slider = $('<div />').insertAfter( $(this) );

			$slider.slider({
				create: function(ui){

					$slider.wrap($('<div class="ui-slider-container" />'));

					$from.bind('change', function(){
						//В поле "от" было введено значение вручную
						var value = $(this).getFlN();

						//Даем возможность убрать цену, не сбрасывая всю форму
						if(value == ""){
							$(this).val(null);
							$slider.slider("values", 0, $slider.slider("option", "min"));
							return;
						}

						//Не больше максимального
						//Не меньше минимального
						if(value < $slider.slider("option", "min")){
							value = $slider.slider("option", "min");
						}
						else if(value > $slider.slider("option", "max")){
							value = $slider.slider("option", "max");
						}
						//Если больше верхнего, то верхнее сбрасывается
						if(value > $slider.slider("values", 1)){
							$slider.slider("values", 1, $slider.slider("option", "max"));
							$to.val(humanNumber($slider.slider("option", "max"), "up"));
						}

						$(this).val(humanNumber(value, 'down'));

						if($to.getN() && value > $to.getN()) value = $to.getN();
						$slider.slider("values", 0, value); //меняем положение 1 ползунка

						//и обновляем данные фильтра
						getAndSetFilterData();
					});
					var max = $to.bind('change', function(){
						//В поле "до" было введено значение вручную
						var value = $(this).getFlN();

						//Даем возможность убрать цену, не сбрасывая всю форму
						if(value == ""){
							$(this).val(null);
							$slider.slider("values", 1, $slider.slider("option", "max"));
							return;
						}

						//Не больше максимального
						//Не меньше минимального
						if(value < $slider.slider("option", "min")){
							value = $slider.slider("option", "min");
						}
						else if(value > $slider.slider("option", "max")){
							value = $slider.slider("option", "max");
						}
						//Если меньше нижнего, то нижнее сбрасывается
						if(value < $slider.slider("values", 0)){
							$slider.slider("values", 0, $slider.slider("option", "min"));
							$from.val(humanNumber($slider.slider("option", "min"), "down"));
						}

						$(this).val(humanNumber(value, 'up'));

						if(value < $from.getN()) value = $from.getN();
						$slider.slider("values", 1, value); //меняем положение 2 ползунка

						//и обновляем данные фильтра
						getAndSetFilterData();
					})
					.getN();

					if(max) $slider.slider("values", 1, max);

				},
				range: true,
				step: step,//шаг, с которым двигается ползунок
				min: min_value, //минимально возможное значение
				max: max_value, //максимально возможное значение
				values: [ $from.getN(), max_value ], //установим ползунки в первоначальные положения (в соот-ии со значениями, введенными в поля)
				slide: function( event, ui ) {
					//пользователь начал двигает ползунок - меняем зн-е в соотв. поле
					if(ui.values[0] == ui.value){
						$from.val(humanNumber(ui.value, 'down'));
					}
					else{
						$to.val(humanNumber(ui.value, 'up'));
					}
				},
				stop: function( event, ui ) {
					//пользователь перестал двигать ползунок - уберем выделение с поля, в котором менялось зн-е
					getAndSetFilterData();
				}
			});
		});

		/*Ресет формы (если понадобится в другом месте, заменить ID на класс)*/
		$("#j-reset").click(function(){
			$(".b-filter .g-form__check").check(false);
			$(".b-filter .g-form__text").val('');
			//очищаем фильтр подбора машин
			$.ajax({
				url: $('form.b-filter').attr('action')+'cars_filter/',
				dataType: "json",
				data: {'reset': 'brand'}
			});
			$(".b-filter #brand").val('').change();

			//сбрасываем каждый .j-slider_range на странице
			$(".j-slider_range").each(function(i, e){
				var slider = $(e).next().find('.ui-slider');
				slider.slider("values", 0, slider.slider("option", "min"));
				slider.slider("values", 1, slider.slider("option", "max"));
			});

//			$(this).parents('form')[0].reset();
			if(typeof getAndSetFilterData == 'function'){
				getAndSetFilterData();
			}
		});



	// Related Links
	if($('.b-related-links').length == 1) {

		var relatedLinksContaierWrap = $('.b-related-links__items__inner');
		var relatedLinksContaierWrapWidth = parseInt(relatedLinksContaierWrap.width());
		var relatedLinksContaier = $('.b-related-links__items');
		var relatedLinks = relatedLinksContaier.find('.b-related-links__item');
		var relatedLinksContaierWidth = 0;

		relatedLinks.each(function(){
			relatedLinksContaierWidth += parseInt($(this).width());
		});
		relatedLinksContaierWidth += 1;

		relatedLinksContaier.css({width: relatedLinksContaierWidth+'px'});

		var relatedLinksLeft = $('.b-related-links__items__inner .scroll-left');
		var relatedLinksRight = $('.b-related-links__items__inner .scroll-right');

		var relatedLinksControlls = function(){
			left = parseInt(relatedLinksContaier.css('left'));
			if(left < 0) {
				relatedLinksLeft.show();
			} else {
				relatedLinksLeft.hide();
			}
			if( (relatedLinksContaierWidth + left) <= relatedLinksContaierWrapWidth ) {
				relatedLinksRight.hide();
			} else {
				relatedLinksRight.show();
			}
		}

		relatedLinksControlls();

		relatedLinksRight.hover(function(){
			if(relatedLinksContaierWidth < relatedLinksContaierWrapWidth) return false;
			relatedLinksContaier.animate({left: (relatedLinksContaierWrapWidth - relatedLinksContaierWidth)+'px'}, 'slow', function(){
				relatedLinksControlls();
			});
		}, function(){
			relatedLinksContaier.stop();
			relatedLinksControlls();
		});

		relatedLinksLeft.hover(function(){
			relatedLinksContaier.animate({left: 0}, 'slow', function(){
				relatedLinksControlls();
			});
		}, function(){
			relatedLinksContaier.stop();
			relatedLinksControlls();
		});

		$(window).resize(function(){
			relatedLinksContaier.css({left: 0});
			relatedLinksContaierWrapWidth = parseInt(relatedLinksContaierWrap.width());
			relatedLinksControlls();
		});

	}

	// Так как экшены сортировок - это обычные ссылки, события которых обрабатывают в js,
	// то при загрузке страницы, когда еще js не проинициализировался, они отключены
	const enableToolsSortAfterDOMContentLoaded = () => {
		const elem = $('.tools-sort');

		if (elem) {
			elem.removeClass('disabled');
		}
	}

	enableToolsSortAfterDOMContentLoaded();

	// Обработка кликов на тулзы вывода каталога (сортировка, внешний вид вывода, ограничитель)
	$('.j-tools_output').click(function(e){
		e.preventDefault();
		var $elem = $(this),
			$parent = $elem.closest('li'),
			$result = $("#j-search_result"),
			block = $elem.closest('ul').attr('class'),
			active_class = 'cr-'+block+'__active',
			link = $elem.attr('href'),
			typeSort;

		if( $parent.hasClass('cr-tools-sort__bi')){
			//Если двунаправленная сортировка (возможность сортировать в обе стороны)
			//то действие происходит при каждом клике на элемент
			var direction = link.indexOf('desc')==-1 ? 'asc' : 'desc';
		}
		else if($parent.hasClass(active_class)) {
			//Во всех остальных случаях ничего не делаем при клике на активный элемент
			return false;
		}

		if (link.indexOf('sale') !== -1) {
			typeSort = 'discount';
		}
		else if (link.indexOf('price') !== -1) {
			typeSort = 'price';
			direction === 'desc' ? typeSort += 'Up' : typeSort += 'Down';
		}
		else if (link.indexOf('popular') !== -1) {
			typeSort = 'popular';
		}
		addEeTrack('useSorting', typeSort);

		if(loaded){
			loaded = false;
			$result.css('opacity', 0.5); //во время загрузки высветлим контент
			$.ajax({
				url: link + '&page=1',
				dataType: 'json'
			})
			.done(function(data){
				//загружаем новый контент и пагинацию
				$result.html(data.content);
				$("#j-load_of_items").text(data.viewed_count);
				$('#j-rest_of_items').html(data.limit_count);
				$('#j-total_count_items').html(data.total_count);

				//Прячем/показываем пагинатор
				var view_paginator = !(data.viewed_count == data.total_count);
					$("#j-all_page").closest('span').toggle(view_paginator);
					$("#j-next_page").toggle(view_paginator);

				if( $parent.hasClass('cr-tools-sort__bi') ){
					if($parent.hasClass(active_class)){
						//в случае клика на активный элемент
						//меняем стрелочку
						$parent.toggleClass('g-cr-desc g-cr-asc');
					}
					else{
						//иначе просто добавляем стрелочку (убрав ее у предыдущих)
						$parent.siblings().removeClass('g-arr g-cr-asc g-cr-desc');
						$parent.addClass('g-arr g-cr-' + (direction == 'desc'?'asc':'desc'));
					}

					//записываем новую ссылку
					if (direction === 'desc') {
						$elem.attr('href', link.replace('desc', 'asc'));
					} else {
						$elem.attr('href', link.replace('asc', 'desc'));
					}
				}

				//Активируем элемент, дизактивируя предыдущие
				//и убирая стрелочку с соседних эл-тов с двунаправленной сортировкой
				$parent.siblings().removeClass(active_class + ' g-arr g-cr-asc g-cr-desc');
				$parent.addClass(active_class);

				try {
					dl.goods.viewed.listing();
					dl.goods.viewed.searchPage();
					dl.cards.viewed.listing();
					dl.cards.viewed.searchPage();
				} catch (e) {}
			})
			.always(function(){
				//При любом исходе показываем контент обратно
				$result.css('opacity', 1);
				loaded = true;
			});
		}

	});

	function carsFilter(current, target){
		var value1 = $(current).on('change',
			function(){
				$(current).prop('disabled', false);
				var option_text = {'model' : '-- Модель --', 'year' : '-- Год выпуска --', 'modification' : '-- Модификация --'};
				if($(this).find(':selected').val() != '' && $(this).find(':selected').val() != 'none'){
					$curr = $(this).prop('name');
					$(target).removeAttr('disabled');
					var value = {'data':{}};
					$('.j-chain :selected').each(function( index ) {
						if($( this ).val() && $( this ).val()!='none'){
							value['data'][$( this ).parent().prop('name')] = $( this ).val();
							return ($( this ).parent().prop('name') !== $curr );
						}
					});
					$.ajax({
						url: $('form.b-filter').attr('action')+'cars_filter/',
						dataType: "json",
						data: value,
						success: function(data) {
							$.each(option_text, function($field_name, $field_text){
								if(!data.values[$field_name]){
									$('#'+$field_name).html('<option value="none">' + $field_text + '</option>').prop('disabled', true);
								}
							});
							$.each(data.options, function(i){
								$check_first = Object.keys(this).length;
								$options = '<option value="none">' + option_text[i] + '</option>';
								$.each(this, function(k, v){
									$checked = '';
									if(data.values[i] == k || $check_first == 1){
										$checked = 'selected';
									}
									$options += '<option value="' + k + '" '+$checked+'>' + v + '</option>';
								});
								$('#'+i).html($options).prop('disabled', false);
								if($check_first == 1){
									$('#'+i).change();
								}
							});
							$res = '';
							$.each(data.result, function(i){
								if(i == 0){
									$res = '<span class="b-cars_filter_result__none">Ничего не найдено</span>'
									return false;
								}
								$res += '<span class="b-cars_filter_result__title">'+i+'</span><ul class="b-cars_filter_result__list">';
								$.each(this, function(k, v){
									$res += '<li class="b-cars_filter_result__item"><a href="#" class= "j-set_filter" data-id="' + v + '">' + k + '</a></li>';
								});
								$res += '</ul>';
							});
							$('#j-cars_filter_result').html($res);
						}
					});
				}
				else{
					$(target).val(null).change().prop('disabled', true);
					$('#j-cars_filter_result').html('');
				}
				return value;
			});
		return value1;
	}
	$('.j-active_carfilter_fields').each(function(i){
		if(typeof $(this).next().attr('id') !== "undefined"){
			carsFilter('#'+$(this).attr('id'), '#'+$(this).next().attr('id'));
		}
	});

	$('.l-filter').on('click', '.j-set_filter',function(e){
		e.preventDefault();
		$.ajax({
			method: "POST",
			url: $('form.b-filter').attr('action')+'get_wheel_filter/',
			dataType: "json",
			data: {'name':$(this).attr('data-id')},
			success: function(data) {
				$.each(data.number, function($input_name, $input_value){
					$('input[name="'+$input_name+'"]').val($input_value);
				});
				$.each(data.select, function($input_name, $input_value){
					$('input[name="'+$input_name+'"]').prop('checked', false).filter(function(){return this.value == $input_value}).click();
				});
				$('#j-filter__btn').click();
			}
		});
	});
});
