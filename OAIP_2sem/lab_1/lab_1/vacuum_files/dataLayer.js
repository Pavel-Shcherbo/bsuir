var dl = dl || {};

const popularOnHomePageList = 'Главная';
const listingList = 'Листинг';
const recipeList = 'Рецепт'
const productCartList = 'Карточка товара';
const searchPageList = 'Поисковая выдача';
const reviewBlockList = 'Отзыв';
const selectionBlockList = 'Подборка';
const putAsideList = 'Избранные товары';
const viewedList = 'Просмотренные';
const brandPageList = 'Страница бренда';
const compareList = 'Списки сравнения';
const waitingList = 'Лист ожидания';
const notFoundList = 'Страница не найдена';
const cartList = 'Корзина';
const profileBoughtList = 'История покупок';
const accessoriesList = 'Аксессуары и сопутствующие';

dl.cards = function () {
	const viewed = function () {
		const DUPLICATES = [];

		const popularOnHomePage = () => {
			process($('.cr-slider-popular .foreign_goods__term'), popularOnHomePageList, 30);
			process($('.b-popular .item'), popularOnHomePageList, 30);
		};

		const popularOnCatalogPage = () => {
			const list = $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList
			process($('.cr-slider-popular .foreign_goods__term'), list, 30);
		};

		const popularOnNotFoundPage = () => {
			process($('.b-foreign_goods .foreign_goods__item'), notFoundList, 30);
			process($('.b-popular .item'), notFoundList, 30);
		}

		const listing = () => {
			const list = $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList
			process($('#j-search_result .result__item'), list, 60);
			process($('#j-search_result .item'), list, 60);
		};

		const searchPage = () => {
			process($('#j-search_result .result__item'), searchPageList, 60);
			process($('.catalog .item'), searchPageList, 60);
		};

		const reviewBlock = () => {
			process($('.best_review__item .foreign_goods__term'), reviewBlockList, 1);
		};

		const accessories = () => {
			const tabsDesktop = $('.b-accessories .tabs__item');

			if (tabsDesktop.length) {
				tabsDesktop.each((i, elem) => {
					const list = $(elem).find('h3.tabs__header span').html();
					process($(elem).find('.foreign_goods__term'), list, 30);
				});
			} else {
				const tabs = $('.tab.j-goods-list');

				tabs.each((i, elem) => {
					const list = $(elem).find('.j-goods-list-name').html();
					process($(elem).find('.catalog .item'), list, 30);
				});
			}
		};

		const processCart = (list) => {
			const basketData = window.basket_data || window.basket;
			if (!basketData) {
				return;
			}

			const items = [];

			Object.values(basketData.items).forEach((item, index) => {
				items.push(prepareForDataLayer(item, list, index));
			});

			if (items.length) {
				pushToDataLayer(toJson(items));
			}
		}

		const processCertificates = ($items) => {
			intersectionDebounce($items.toArray(), (data) => {
				const preparedItems = [];

				data.forEach((item, index) => {
					const itemData = $(item).find('.certificates_item__btn span').data();
					if (!itemData.code) {
						return;
					}

					preparedItems.push(prepareForDataLayer(itemData, selectionBlockList, index, 1));
				});

				if (!preparedItems.length) {
					return;
				}

				pushToDataLayer(toJson(preparedItems));
			}, {
				'batchSize': 20,
				'visibility': 0.9
			});
		};

		const selections = () => {
			process($('.b-widget_selection .result__item'), selectionBlockList, 100, true);
			process($('.b-widget_selection .item'), selectionBlockList, 100, true);
			process($('#catalog_selection .result__item'), selectionBlockList, 100, true);
			process($('#catalog_selection .item'), selectionBlockList, 100, true);
			process($('.b-foreign_goods .foreign_goods__item'), brandPageList, 30);
			process($('.b-brand .item'), brandPageList, 30);
			processCertificates($('.b-certificates .certificates_item'));
		};

		const cartPage = () => {
			processCart(cartList);
		}

		const putAside = () => {
			process($('.b-result .result__item'), putAsideList, 100);
			process($('.catalog .item'), putAsideList, 100);
		};

		const viewed = () => {
			process($('.b-result .result__item'), viewedList, 100);
			process($('.catalog .item'), viewedList, 100);
		};

		const compare = () => {
			process($('.b-compare_container .j-full_info'), compareList, 10);
		};

		const wishList = () => {
			process($('.b-wishlist .b-wishlist-item'), waitingList, 100, true);
			process($('.catalog-wishlist .b-wishlist-item'), waitingList, 100, true);
		};

		const process = ($items, list, batchSize, allowOut) => {
			intersectionDebounce($items.toArray(), (data) => {
				const preparedItems = prepare(data, list, allowOut);
				if (preparedItems.length) {
					pushToDataLayer(toJson(preparedItems));
				}
			}, {
				'batchSize': batchSize
			});
		};

		const prepare = (data, list, allowOut) => {
			const result = [];

			data.forEach((item, index) => {
				const cardData = $(item).find('.g-item-data').data();

				if (isCorrectCard(cardData, allowOut) && DUPLICATES.indexOf(cardData.code) === -1) {
					result.push(prepareForDataLayer(cardData, list, index, 1));
					DUPLICATES.push(cardData.code);
				}
			});

			return result;
		};

		const toJson = (cards) => {
			return {
				'event': 'view_item_list',
				'ecommerce': {
					'items': cards,
				},
			}
		};

		return {
			popularOnHomePage: popularOnHomePage,
			popularOnCatalogPage: popularOnCatalogPage,
			popularOnNotFoundPage: popularOnNotFoundPage,
			listing: listing,
			searchPage: searchPage,
			reviewBlock: reviewBlock,
			accessories: accessories,
			selections: selections,
			putAside: putAside,
			viewed: viewed,
			compare: compare,
			wishList: wishList,
			cartPage: cartPage
		};
	}();

	const common = function() {
		const fetchDataFromBasket = (code) => {
			const basketData = window.basket_data || window.basket;
			if (!basketData) {
				return;
			}

			return (Object.values(basketData.items) || []).find((product) => code === product.code);
		}

		const toJson = (items, event) => {
			return {
				'event': event,
				'ecommerce': {
					'items': [items],
				},
			}
		};

		const addToWishlist = (data, $target) => {
			if (data) {
				const gaLabel = $('body').data('ga_label');
				const list = gaLabel === 'catalog_putaside' ? putAsideList : productCartList;
				const preparedItems = prepareForDataLayer(data, list, 0, 1);
				pushToDataLayer(toJson(preparedItems, 'add_to_wishlist'));
			} else {
				processWishlistFromCart('add_to_wishlist', $target)
			}
		};

		const processWishlistFromCart = (event, $target) => {
			const parentData = $target.closest('article.item, .j-basket-item').data();

			if (parentData) {
				const data = fetchDataFromBasket(String(parentData.code));
				const preparedItems = prepareForDataLayer(data, cartList, 0);
				pushToDataLayer(toJson(preparedItems, event));
			}
		};

		const removeFromWishlist = (data, $target) => {
			if (data) {
				const gaLabel = $('body').data('ga_label');
				const list = gaLabel === 'catalog_putaside' ? putAsideList : productCartList;
				const preparedItems = prepareForDataLayer(data, list, 0, 1);
				pushToDataLayer(toJson(preparedItems, 'remove_from_wishlist'));
			} else {
				processWishlistFromCart('remove_from_wishlist', $target);
			}
		};

		return {
			addToWishlist: addToWishlist,
			removeFromWishlist: removeFromWishlist
		};
	}();

	const details = function () {
		const process = ($itemData) => {
			if (!$itemData.length) {
				return;
			}

			const cardData = $itemData.data();

			if (isCorrectCard(cardData)) {
				const preparedCard = prepareForDataLayer(cardData, productCartList, 0, 1);

				pushToDataLayer(toJson(preparedCard));
			}
		}

		const toJson = (data) => {
			return {
				'ecommerce': {
					'items': [data],
				},
				'event': 'view_item'
			};
		}

		return {
			view: () => {
				process($('.b-item .l-buyzone .g-item-data'));
				process($('.b-product.single .b-product__buy__price-wrap .g-item-data'));
			}
		}
	}();

	const isCorrectCard = (cardData, allowOut) => {
		return cardData &&
			cardData.code &&
			(allowOut || cardData.status !== 'out') &&
			cardData.status !== 'archive';
	}

	return {
		viewed: viewed,
		details: details,
		common: common
	}
}();

dl.goods = function () {
	var viewed = function () {
		var DUPLICATES = [];

		var popularOnHomePage = function () {
			process($('.cr-slider-popular .foreign_goods__term'), popularOnHomePageList, 30);
			process($('.b-popular .item'), popularOnHomePageList,30);
		}

		var popularOnCatalogPage = function () {
			process($('.cr-slider-popular .foreign_goods__term'), null,30);
		}

		var listing = function () {
			const list = $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList
			process($('#j-search_result .result__item'), list,60);
			process($('#j-search_result .item'), list,60);
		}

		var searchPage = function () {
			process($('#j-search_result .result__item'), searchPageList,60);
			process($('.catalog .item'), searchPageList,60);
		}

		var reviewBlock = function () {
			process($('.best_review__item .foreign_goods__term'), reviewBlockList,1);
		}

		var accessories = function () {
			var tabs = $('.b-accessories .tabs__item');

			tabs.each(function(i, elem) {
				var list = $(elem).find('h3.tabs__header span').html();

				process($(elem).find('.foreign_goods__term'), list, 30);
			});

			process($('.j-accessories-container .item'), 'accessories',30);
			process($('.j-goods-list .catalog .item'), 'accessories',30);
		}

		var selections = function () {
			process($('.b-widget_selection .result__item'), selectionBlockList,100, true);
			process($('.b-widget_selection .item'), selectionBlockList,100, true);
			process($('#catalog_selection .result__item'), selectionBlockList,100, true);
			process($('#catalog_selection .item'), selectionBlockList,100, true);
			processCertificates($('.b-certificates .certificates_item'));

			function processCertificates($items) {
				intersectionDebounce($items.toArray(), function (data) {
					var preparedGoods = [];

					data.forEach(function (item) {
						var goodData = $(item).find('.certificates_item__btn span').data();
						if (!goodData.code) {
							return;
						}
						preparedGoods.push(prepareGoodForDataLayer(goodData, null, selectionBlockList));
					});

					if (!preparedGoods.length) {
						return;
					}
					pushToDataLayer(toJson(preparedGoods));
				}, {
					'batchSize': 20,
					'visibility': 0.9
				});
			}
		}

		var putAside = function () {
			process($('.b-result .result__item'), putAsideList, 100);
			process($('.catalog .item'), putAsideList,100);
		}

		var viewed = function () {
			process($('.b-result .result__item'), viewedList,100);
			process($('.catalog .item'), viewedList,100);
		}

		var compare = function () {
			process($('.b-compare_container .j-full_info'), compareList,10);
		}

		var wishList = function () {
			process($('.b-wishlist .b-wishlist-item'), waitingList,100);
			process($('.catalog-wishlist .b-wishlist-item'), waitingList,100);
		}

		function process($items, list, batchSize, allowOut) {
			intersectionDebounce($items.toArray(), function (data) {
				var preparedGoods = prepareGoods(data, list, allowOut);
				if (!preparedGoods.length) {
					return;
				}
				pushToDataLayer(toJson(preparedGoods));
			}, {
				'batchSize': batchSize
			});
		}

		function prepareGoods(data, list, allowOut) {
			var result = [];

			data.forEach(function (item) {
				var goodData = $(item).find('.g-item-data').data();

				if (!isCorrectGood(goodData, allowOut)) {
					return;
				}

				if (DUPLICATES.indexOf(goodData.code) !== -1) {
					return;
				}
				DUPLICATES.push(goodData.code);

				result.push(prepareGoodForDataLayer(goodData, null, list));
			});

			return result;
		}

		function toJson(goods) {
			return {
				'ecommerce': {
					'impressions': goods,
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'impression',
				'gtm-ee-event-non-interaction': 'True'
			}
		}

		return {
			popularOnHomePage: popularOnHomePage,
			popularOnCatalogPage: popularOnCatalogPage,
			listing: listing,
			searchPage: searchPage,
			reviewBlock: reviewBlock,
			accessories: accessories,
			selections: selections,
			putAside: putAside,
			viewed: viewed,
			compare: compare,
			wishList: wishList
		}
	}();

	var clicked = function () {
		var DUPLICATES = [];

		var popularOnHomePage = function () {
			$('.cr-slider-popular').on('click', '.foreign_goods__term a', function (e) {
				const item = $(this).closest('.foreign_goods__term');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, popularOnHomePageList);
				process(item, popularOnHomePageList);
			});
			$('.b-popular').on('click', '.item a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, popularOnHomePageList);
				process(item, popularOnHomePageList);
			});
		};

		var popularOn404Page = function () {
			$('.b-popular').on('click', '.foreign_goods__term a', function (e) {
				const item = $(this).closest('.foreign_goods__term');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, notFoundList);
			});

			$('.b-popular').on('click', '.item .thumb, .item .info a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, notFoundList);
			});
		};

		var popularOnBrandPage = function () {
			$('.b-popular').on('click', '.foreign_goods__term a', function (e) {
				e.preventDefault();
				const item = $(this).closest('.foreign_goods__term');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, brandPageList);
			});
		};

		var catalogViewSlider = function () {
			$('.b-accessories').on('click', '.j-goods-list:not(#j-tabs-accessories) .foreign_goods__term a', function (e) {
				const item = $(this).closest('.foreign_goods__term');
				const payload = item.find('.g-item-data').data();
				const activeTabName = $('.cr-tabs__active').find('.j-goods-list-name').html();

				processEmit2React(e, payload, activeTabName);
			});
		}

		var catalogViewTabs = function () {
			$('.tabs').on('click', '.j-goods-list:not(#j-tabs-accessories) .trade a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();
				const activeTabName = $('.j-goods-list.active').find('.j-goods-list-name').html();

				processEmit2React(e, payload, activeTabName);
			});
		};

		var basketItem = function () {
			const basketData = window.basket_data || window.basket;

			if (!basketData) {
				return;
			}

			$('.j-basket-item, .catalog-cart').on('click', '.cr-basket__name a, .trade .thumb, .info a', function (e) {
				const itemCode = $(this).closest('.j-basket-item, .item').data().code;

				if (!itemCode) {
					return;
				}

				const data = Object.values(basketData.items)
					.find((item) => +item.code === itemCode);
				const payload = {
					name: data.name,
					code: data.code,
					producer_name: data.producer_name,
					category: data.categories_tree,
					multiple: data.count,
					price: data.price,
				};

				processEmit2React(e, payload, cartList);
			});
		};

		var listing = function () {
			const jSearchResult = $('#j-search_result');
			const catalogSelection = $('#catalog_selection');

			jSearchResult.on('click', '.result__item a.result__link', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();
				const list = $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList;

				processEmit2React(e, payload, list);
				process(item, listingList);
			});
			jSearchResult.on('click', '.trade .thumb, .info a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();
				const list = $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList;

				processEmit2React(e, payload, list);
				process(item, listingList);
			});

			catalogSelection.on('click', '.result__item a.result__link', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, listingList);
			});
		};

		var searchPageListing = function () {
			const jSearchResult = $('#j-search_result');

			jSearchResult.on('click', '.result__item a', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, searchPageList);
				process(item, searchPageList);
			});

			jSearchResult.on('click', '.trade .thumb, .info a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, searchPageList);
				process(item, searchPageList);
			});
		};

		var brandPageListing = function () {
			$('.b-result__main').on('click', '.result__link', function (e) {
				const item = $(this).closest('.result__link');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, brandPageList);
			});

			$('.b-brand__items').on('click', '.trade .thumb, .info a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, brandPageList);
			});
		};

		var compare = function () {
			$('.b-compare_container .j-full_info').on('click', '.attr__image_link, .attr__value a', function (e) {
				const payload = $(this).closest('.j-full_info').find('.g-item-data').data();
				processEmit2React(e, payload, compareList);
			});
		}

		var profileBought = function () {
			$('.b-order-item__name a').on('click', function (e) {
				const payload = $(this).closest('.b-order-item__name').find('.g-item-data').data();

				processEmit2React(e, payload, profileBoughtList);
			});

			$('.b-order-goods__name a').on('click', function (e) {
				const payload = $(this).closest('.b-order-goods__name').find('.g-item-data').data();

				processEmit2React(e, payload, profileBoughtList);
			});
		};

		var reviewBlock = function () {
			$('.best_review__item').on('click', '.foreign_goods__term a', function () {
				process($(this).closest('.foreign_goods__term'), reviewBlockList);
			});
		}

		var accessories = function () {
			// Desktop accessories
			$('.b-accessories').on('click', '#j-tabs-accessories .foreign_goods__term a', function (e) {
				const item = $(this).closest('.foreign_goods__term');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, accessoriesList);
				process(item, accessoriesList);
			});
			// Mobile accessories
			$('.tabs').on('click', '#j-tabs-accessories .trade a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, accessoriesList);
				process($(this).closest('.item'), accessoriesList);
			});
			$('.tabs').on('click', '.j-goods-list .item a', function () {
				process($(this).closest('.item'), 'accessories');
			});
		}

		var selections = function () {
			var $widgetSelection = $('.b-widget_selection');
			$widgetSelection.on('click', '.result__item a', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, selectionBlockList);
				process(item, selectionBlockList);
			});
			$widgetSelection.on('click', '.item a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, selectionBlockList);
				process(item, selectionBlockList);
			});

			var $catalogSelection = $('#catalog_selection');
			$catalogSelection.on('click', '.result__item a', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, selectionBlockList);
				process(item, selectionBlockList);
			});
			$catalogSelection.on('click', '.item a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, selectionBlockList);
				process(item, selectionBlockList);
			});
		}

		var putAside = function () {
			$('.b-result').on('click', '.result__link', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, putAsideList);
				process(item, putAsideList);
			});
			$('.catalog').on('click', '.item .trade .thumb, .item .trade .info a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, putAsideList);
				process($(this).closest('.item'), putAsideList);
			});
		}

		var viewed = function () {
			$('.b-result').on('click', '.result__item a', function (e) {
				const item = $(this).closest('.result__item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, viewedList);
				process(item, viewedList);
			});
			$('.catalog').on('click', '.item a', function (e) {
				const item = $(this).closest('.item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, viewedList);
				process($(this).closest('.item'), viewedList);
			});
		}

		var wishList = function () {
			$('.b-wishlist').on('click', '.b-wishlist-item a', function (e) {
				const item = $(this).closest('.b-wishlist-item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, waitingList);
				process(item, waitingList);
			});

			$('.catalog-wishlist').on('click', '.trade .thumb, .info a', function (e) {
				const item = $(this).closest('.b-wishlist-item');
				const payload = item.find('.g-item-data').data();

				processEmit2React(e, payload, waitingList);
				process(item, waitingList);
			});
		}

		function process($item, list) {
			var preparedGood = prepareGood($item, list);
			if (!preparedGood) {
				return;
			}
			pushToDataLayer(toJson(preparedGood, list));
		}

		function processEmit2React(e, payload, listName) {
			if (!payload) {
				return;
			}

			payload.listName = listName;
			window.emitter().emit('cake2react:goodItemClickGTM', { e, payload });
		}

		function prepareGood($item) {
			var goodData = $item.find('.g-item-data').data();

			if (!isCorrectGood(goodData)) {
				return;
			}

			if (DUPLICATES.indexOf(goodData.code) !== -1) {
				return;
			}
			DUPLICATES.push(goodData.code);

			return prepareGoodForDataLayer(goodData);
		}

		function toJson(goods, list) {
			let ecommerce = {
				'click': {
					'products': [goods]
				}
			};

			if (list !== null) {
				ecommerce.click.actionField = {'list': list};
			}

			return {
				'ecommerce': ecommerce,
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'product click',
				'gtm-ee-event-non-interaction': 'False'
			}
		}

		return {
			popularOnHomePage: popularOnHomePage,
			catalogViewSlider: catalogViewSlider,
			catalogViewTabs: catalogViewTabs,
			popularOn404Page: popularOn404Page,
			popularOnBrandPage: popularOnBrandPage,
			basketItem: basketItem,
			listing: listing,
			searchPageListing: searchPageListing,
			brandPageListing: brandPageListing,
			compare: compare,
			profileBought: profileBought,
			reviewBlock: reviewBlock,
			accessories: accessories,
			selections: selections,
			putAside: putAside,
			viewed: viewed,
			wishList: wishList
		}
	}();

	var details = function () {
		var view = function () {
			process($('.b-item .l-buyzone .g-item-data'));
			process($('.b-product.single .b-product__buy__price-wrap .g-item-data'));
		};

		function process($itemData) {
			if (!$itemData.length) {
				return;
			}
			var goodData = $itemData.data();
			if (!isCorrectGood(goodData)) {
				return;
			}

			var preparedGood = prepareGoodForDataLayer(goodData);

			pushToDataLayer(toJson(preparedGood));
		}

		function toJson(goods) {
			return {
				'ecommerce': {
					'detail': {
						'actionField': {'list': 'Product Page'},
						'products': [goods]
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'product details',
				'gtm-ee-event-non-interaction': 'True'
			};
		}

		return {
			view: view
		}
	}();

	function isCorrectGood(goodData, allowOut) {
		return goodData &&
			goodData.code &&
			(allowOut || goodData.status !== 'out') &&
			goodData.status !== 'archive';
	}

	return {
		viewed: viewed,
		clicked: clicked,
		details: details
	}
}();

dl.cart = function () {
	var checkout = function () {

		var step = function (currentPage) {
			if (!currentPage) {
				currentPage = window.location.pathname.replace(/\//g, '').trim();
			}

			var steps = {
				'order': {
					'step': 1,
					'option': 'basketView',
				},
				'checkout': {
					'step': 2,
					'option': 'loginM',
				},
				'checkoutpersonal': {
					'step': 3,
					'option': 'phoneM',
					'ga4event': 'add_personal_info'
				},
				'checkoutdelivery': {
					'step': 4,
					'option': 'deliveryM',
					'ga4event': 'add_shipping_info'
				},
				'checkoutpayment': {
					'step': 5,
					'option': 'payM',
					'ga4event': 'add_payment_info'
				},
				'orderdetail': {
					'step': 5,
					'option': 'orderdetailD',
				},
				'checkoutadditional': {
					'step': 6,
					'option': 'CommentM',
					'ga4event': 'add_additional_info'
				}
			}

			if (!steps[currentPage]) {
				return;
			}

			var preparedGoods = fetchAllGoodsFromCart();
			if (!preparedGoods.length) {
				return;
			}

			pushToDataLayer(toJson(preparedGoods, steps[currentPage].step, steps[currentPage].option));

			if (steps[currentPage].ga4event) {
				const products = preparedGoods.map((product, index) => prepareForDataLayer(product, cartList, index));
				pushToDataLayer(toGA4json(products, steps[currentPage].ga4event));
			}
		}

		function toGA4json (products, event) {
			return {
				'ecommerce': {
					'items': products,
				},
				'event': event
			};
		}

		function toJson(goods, step, option) {
			return {
				'ecommerce': {
					'checkout': {
						'products': goods,
						'actionField': {
							'step': step,
							'option': option
						}
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': option,
				'gtm-ee-event-non-interaction': 'False'
			};
		}

		return {
			step: step
		}
	}();

	var add = function () {
		var one = function ($form) {
			var query = getJsonByQuery($form.attr('action'));
			if (!query || !query.item) {
				return;
			}

			var goodsIds = query.special === 'complect' ? query.item.split(';') : [query.item];
			var isSales = $form.find('.g-button').data('ga_label') === 'sales_buybtn';
			var preparedGoods = prepareGoods(goodsIds, isSales);
			if (!preparedGoods.length) {
				return;
			}
			var list = getList($form);

			pushToDataLayer(toJson(preparedGoods, list));
			processEmit2React(preparedGoods, list);

			function getList($form) {
				var list;
				var $body = $('body');

				var mapper = {
					'profile_wishlist': waitingList,
					'catalog_compare': compareList,
					'catalog_viewed': viewedList,
					'catalog_putaside': putAsideList,
					'catalog_detectum': searchPageList,
					'pages_index': selectionBlockList,
					'catalog_view': productCartList,
					'catalog_index': $('.b-recipes__item__span').toArray().length || $('.cr-detail-filter__active').toArray().length ? recipeList :listingList,
					'catalog_category': listingList,
					'error_404': notFoundList,
					'pages_home': popularOnHomePageList
				};

				var gaList = $body.data('ga_list');
				var gaLabel = $body.data('ga_label');

				if ($body.hasClass('catalog_view') || gaLabel === 'catalog_view') {
					var $tab = $form.closest('.j-goods-list');
					if ($tab.length) {
						list = $tab.find('.j-goods-list-name').text();
					}
				}

				if (gaList && gaList.includes('brands')) {
					list = brandPageList;
				}

				return list || mapper[gaLabel];
			}
		}

		var byKey = function (uniqKey, quantity) {
			var preparedGoods = fetGoodFromCartByKey(uniqKey, quantity);
			if (!preparedGoods.length) {
				return;
			}

			var list;
			if (preparedGoods.length > 1) {
				list = 'Вместе дешевле';
			}

			pushToDataLayer(toJson(preparedGoods, list));
		}

		var all = function () {
			var preparedGoods = fetchAllGoodsFromCart();
			if (!preparedGoods.length) {
				return;
			}

			pushToDataLayer(toJson(preparedGoods));
		}

		var partlypayAdd = function($link) {
			const query = getJsonByQuery($link.href);
			const preparedGoods = prepareGoods([query.item], 0);

			if (!preparedGoods.length) {
				return;
			}

			pushToDataLayer(toJson(preparedGoods, null));
		}

		var eCertAdd = function(code, list) {
			const preparedGoods = prepareGoods([code], 0);

			if (!preparedGoods.length) {
				return;
			}

			pushToDataLayer(toJson(preparedGoods, list));
			processEmit2React(preparedGoods, list)
		};

		const processEmit2React = (products, list) => {
			if (!products) {
				return;
			}

			window.emitter().emit('cake2react:addToCartGTM', { products, list });
		}

		function toJson(goods, list) {
			var result = {
				'ecommerce': {
					'add': {
						'products': goods
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'add to cart',
				'gtm-ee-event-non-interaction': 'False'
			};

			if (list) {
				result.ecommerce.add.actionField = {
					'list': list
				};
			}

			return result;
		}

		function prepareGoods(goodsIds, isSales) {
			var result = [];

			goodsIds.forEach(function (goodId) {
				var goodData = $('.j-item-data-real' + goodId).data() || $('.j-item-data' + goodId).data();
				if (!goodData) {
					return;
				}
				if (isSales) {
					goodData.price = $('.b-sales .j-item-data-real' + goodId).data('price') || $('.b-sales .j-item-data' + goodId).data('price');
				}

				result.push(prepareGoodForDataLayer(goodData, goodData.multiple));
			});

			return result;
		}

		function getJsonByQuery(query) {
			var resultQuery = query.split('?');
			if (!resultQuery[1]) {
				return;
			}

			var result = {};

			resultQuery[1].split("&").forEach(function (part) {
				var item = part.split("=");
				result[item[0]] = decodeURIComponent(item[1]);
			});

			return result;
		}

		return {
			one: one,
			byKey: byKey,
			all: all,
			partlypayAdd,
			eCertAdd
		}
	}();

	var remove = function () {
		var byKey = function (uniqKey, quantity, isGA4) {
			var preparedGoods = fetGoodFromCartByKey(uniqKey, quantity, isGA4);
			if (!preparedGoods.length) {
				return;
			}

			var list;
			if (preparedGoods.length > 1) {
				list = 'Вместе дешевле';
			}

			pushToDataLayer(toJson(preparedGoods, list));

			if (isGA4) {
				processEmit2React('cart2react:removeFromCartGTM', preparedGoods, cartList);
			}
		};

		var all = function () {
			var preparedGoods = fetchAllGoodsFromCart();
			if (!preparedGoods.length) {
				return;
			}

			processEmit2React('cart2react:removeFromCartGTM', preparedGoods, cartList);
			pushToDataLayer(toJson(preparedGoods));
		};

		function toJson(goods, list) {
			var result = {
				'ecommerce': {
					'remove': {
						'products': goods
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'remove from cart',
				'gtm-ee-event-non-interaction': 'False'
			};

			if (list) {
				result.ecommerce.remove.actionField = {
					'list': list
				};
			}

			return result;
		}

		return {
			byKey: byKey,
			all: all
		}
	}();

	var view = function () {
		const cartItems = window.basket_data || window.basket;

		if (!cartItems) {
			return undefined;
		}

		const cartData = Object.values(cartItems.items).map(value => ({
			name: value.name,
			code: value.code,
			producer_name: value.producer_name,
			category: value.categories_tree,
			multiple: value.count,
			price: value.price,
		}));

		processEmit2React('cake2react:cartViewGTM', cartData, cartList);
	}();

	return {
		checkout: checkout,
		add: add,
		remove: remove,
		view: view,
	}
}();

dl.links = (function() {
	var clicked = (function () {
		var login = function () {
			$("#order-login").on("click", (e) => {
				e.preventDefault();
				
				var preparedGoods = fetchAllGoodsFromCart();
				if (!preparedGoods.length) {
					return;
				}
	
				processEmit2React("cake2react:loginFromBasket", preparedGoods, cartList);
			});
		};

		var signUp = function () {
			$("#j-basket__confirm").on("click", (e) => {
				e.preventDefault();

				const isNewUser = !!$(".b-user-auth__password").attr('style')?.includes('display: none');
				const isLogin = !!$('.b-order cr-order__private')?.length;

				if (isLogin || !isNewUser) return;

				var preparedGoods = fetchAllGoodsFromCart();
				if (!preparedGoods.length) {
					return;
				}

				processEmit2React("cake2react:signUpFromBasket", preparedGoods, cartList);
			});
		};

    return { login: login, signUp: signUp };
  })();

	return { clicked: clicked };
})()

dl.basketButtons = (function() {
	var clicked = (function () {
		var beginCheckout = function() {
			$('#j-basket__ok').on('click', () => {
				var preparedGoods = fetchAllGoodsFromCart();
				if (!preparedGoods.length) {
					return;
				}

				const products = preparedGoods.map((product, index) => prepareForDataLayer(product, cartList, index));
				pushToDataLayer(toGA4json(products, 'begin_checkout'));
			})
		}

		var login = function () {
			$('#step-auth-login').on('click', function () {
				var preparedGoods = fetchAllGoodsFromCart();
				if (!preparedGoods.length) {
					return;
				}

				const products = preparedGoods.map((product, index) => prepareForDataLayer(product, cartList, index));
				if ($(this).text().toLowerCase().includes('войти')) {
					pushToDataLayer(toGA4json(products, 'login'));
				} else {
					pushToDataLayer(toGA4json(products, 'sign_up'));
				}
			})
		};

    return { login: login, beginCheckout: beginCheckout };
  })();

  function toGA4json (products, event) {
		return {
			'ecommerce': {
				'items': products,
			},
			'event': event
		};
	}

	return { clicked: clicked };
})()

dl.promo = function () {
	var viewed = function () {
		var DUPLICATES = [];

		var homePage = function () {
			setTimeout(function () {
				process($('#j-slither .j-promotion_main').eq(1).toArray(), 1);
				process($('.cr-exposition__fixed .b-poster').toArray(), 4);
			}, 1);
		}

		var mainSliderToggle = function ($slide) {
			process([$slide[0]], 1);
		}

		var catalogPage = function () {
			process($('.b-catexposition .b-poster').toArray());
		}

		function process(items, batchSize) {
			intersectionDebounce(items, function (data) {
				var preparedPromotions = preparePromotions(data);
				if (!preparedPromotions.length) {
					return;
				}
				pushToDataLayer(toJson(preparedPromotions));
			}, {
				'batchSize': batchSize
			});
		}

		function preparePromotions(data) {
			var result = [];

			data.forEach(function (item) {
				var promoData = $(item).data();

				if (DUPLICATES.indexOf(promoData.gtm_id) !== -1) {
					return;
				}
				DUPLICATES.push(promoData.gtm_id);

				result.push(preparePromoForDataLayer(promoData));
			});

			return result;
		}

		function toJson(promotions) {
			return {
				'ecommerce': {
					'promoView': {
						'promotions': promotions
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'banner_view',
				'gtm-ee-event-non-interaction': 'False'
			};
		}

		return {
			homePage: homePage,
			mainSliderToggle: mainSliderToggle,
			catalogPage: catalogPage
		}
	}();

	var clicked = function () {
		var DUPLICATES = [];

		var homePage = function () {
			$('#j-slither').on('click', '.j-promotion_main a', function () {
				process($(this).closest('.j-promotion_main'));
			});
			$('.cr-exposition__fixed').on('click', '.b-poster a', function () {
				process($(this).closest('.b-poster'));
			});
		}

		var catalogPage = function () {
			$('.b-catexposition').on('click', '.b-poster a', function () {
				process($(this).closest('.b-poster'));
			});
		}

		function process($item) {
			var promoData = $item.data();

			if (DUPLICATES.indexOf(promoData.gtm_id) !== -1) {
				return;
			}
			DUPLICATES.push(promoData.gtm_id);

			var preparedPromotion = preparePromoForDataLayer(promoData);

			pushToDataLayer(toJson(preparedPromotion));
		}

		function toJson(promotions) {
			return {
				'ecommerce': {
					'promoClick': {
						'actionField': {'list': ''},
						'promotions': [
							promotions
						]
					}
				},
				'event': 'gtm-ee-event',
				'gtm-ee-event-category': 'ecommerce',
				'gtm-ee-event-action': 'banner_click',
				'gtm-ee-event-non-interaction': 'False'
			};
		}

		return {
			homePage: homePage,
			catalogPage: catalogPage
		}
	}();

	return {
		viewed: viewed,
		clicked: clicked
	}
}();

var PAGES_ACTIONS = {
	'pages_home': function () {
		dl.cards.viewed.popularOnHomePage();
		dl.goods.viewed.popularOnHomePage();
		dl.goods.clicked.popularOnHomePage();
		dl.promo.viewed.homePage();
		dl.promo.clicked.homePage();
	},
	'catalog_category': function () {
		dl.cards.viewed.popularOnCatalogPage();
		dl.cards.viewed.reviewBlock();
		dl.goods.viewed.popularOnCatalogPage();
		dl.goods.clicked.popularOnHomePage();
		dl.promo.viewed.catalogPage();
		dl.promo.clicked.catalogPage();
		dl.goods.viewed.reviewBlock();
		dl.goods.clicked.reviewBlock();
	},
	'catalog_index': function () {
		dl.cards.viewed.listing();
		dl.cards.viewed.reviewBlock();
		dl.goods.viewed.listing();
		dl.goods.clicked.listing();
		dl.goods.viewed.reviewBlock();
		dl.goods.clicked.reviewBlock();
	},
	'catalog_detectum': function () {
		dl.cards.viewed.searchPage();
		dl.cards.viewed.reviewBlock();
		dl.goods.viewed.searchPage();
		dl.goods.viewed.reviewBlock();
		dl.goods.clicked.reviewBlock();
		dl.goods.clicked.searchPageListing();
	},
	'catalog_view': function () {
		dl.cards.viewed.accessories();
		dl.goods.viewed.accessories();
		dl.goods.clicked.accessories();
		dl.goods.clicked.catalogViewSlider();
		dl.goods.clicked.catalogViewTabs();
		dl.goods.details.view();
		dl.cards.details.view();
	},
	'pages_index': function () {
		dl.cards.viewed.selections();
		dl.goods.clicked.brandPageListing();
		dl.goods.clicked.popularOnHomePage();
		dl.goods.clicked.popularOnBrandPage();
		dl.goods.viewed.selections();
		dl.goods.clicked.selections();
	},
	'catalog_putaside': function () {
		dl.cards.viewed.putAside();
		dl.goods.viewed.putAside();
		dl.goods.clicked.putAside();
	},
	'catalog_viewed': function () {
		dl.cards.viewed.viewed();
		dl.goods.viewed.viewed();
		dl.goods.clicked.viewed();
	},
	'catalog_compare': function () {
		dl.cards.viewed.compare();
		dl.goods.viewed.compare();
		dl.goods.clicked.compare();
	},
	'profile_wishlist': function () {
		dl.cards.viewed.wishList();
		dl.goods.viewed.wishList();
		dl.goods.clicked.wishList();
	},
	'order_order': function () {
		dl.cards.viewed.cartPage();
		dl.goods.clicked.basketItem();
	},
	'profile_bought': function () {
		dl.goods.clicked.profileBought();
	},
	'error_404': function () {
		dl.cards.viewed.popularOnNotFoundPage();
		dl.goods.clicked.popularOn404Page();
	}
};

$(function () {
	try {
		var currentPage = $('body').data('ga_label');

		if (typeof PAGES_ACTIONS[currentPage] === 'function') {
			PAGES_ACTIONS[currentPage]();
		}

		// Чекаем на всех страницах, т.к. нет ga_label + есть проверка внутри метода
		dl.cart.checkout.step();
		dl.links.clicked.login();
		dl.links.clicked.signUp();
		dl.basketButtons.clicked.beginCheckout()
		dl.basketButtons.clicked.login();
	} catch (e) {}
});

function fetchAllGoodsFromCart() {
  var basketData = window.basket_data || window.basket;
  if (!basketData) {
    return;
  }

  var result = [];

  for (var key in basketData.items) {
    if (basketData.items.hasOwnProperty(key)) {
      var preparedGoods = prepareGoodsFromCart(
        basketData.items[key],
        null,
        true
      );
      preparedGoods.forEach(function (preparedGood) {
        result.push(preparedGood);
      });
    }
  }

  return result;
}

function fetGoodFromCartByKey(uniqKey, quantity, isGA4) {
  var goodData;

  var basketData = window.basket_data || window.basket;
  if (!basketData) {
    return;
  }

  for (var key in basketData.items) {
    if (
      basketData.items.hasOwnProperty(key) &&
      basketData.items[key].uniqKey === uniqKey
    ) {
      goodData = basketData.items[key];

      break;
    }
  }
  if (!goodData) {
    return;
  }

  return prepareGoodsFromCart(goodData, quantity, false, isGA4);
}

function prepareGoodsFromCart(goodData, quantity, isMultiple, isGA4) {
  var result = [];
  var resultQuantity = quantity || goodData.count;

  if (resultQuantity || isGA4) {
    if (goodData.complect) {
      Object.keys(goodData.complect).forEach(function (k) {
        result.push(
          prepareGoodForDataLayer(
            goodData.complect[k],
            resultQuantity,
            isMultiple ? "Вместе дешевле" : null
          )
        );
      });
    } else {
      result.push(prepareGoodForDataLayer(goodData, resultQuantity));
    }
  }

  return result;
}

function processEmit2React(event, products, list) {
	if (!products) {
		return;
	}

	window.emitter().emit(event, { products, list });
}

const prepareForDataLayer = (cardItemData, list, index, quantity) => {
	const result = {
		'index': index,
		'item_list_name': list
	};

	if (cardItemData.name) {
		result.item_name = cardItemData.name;
	}

	if (cardItemData.code || cardItemData.id) {
		result.item_id = String(cardItemData.code || cardItemData.id);
	}

	const price = parseFloat(cardItemData.price);

	if (cardItemData.brand) {
		result.item_brand = cardItemData.brand;
	}

	if (price) {
		result.price = price;
	}

	if (cardItemData.producer_name) {
		result.item_brand = cardItemData.producer_name;
	}

	const category = cardItemData['categories_tree'] ? cardItemData['categories_tree'].toString() : cardItemData.category;

	if (!category) {
		result['item_category'] = 'Подарочный сертификат';
	} else if (category && category.includes('/')) {
		(category.split('/') || []).forEach((item, key) => {
			result[key > 0 ? ('item_category' + (key + 1)) : 'item_category'] = item.trim();
		});
	}	else if (category) {
		result['item_category'] = category;
	} else {
		result['item_category'] = '';
	}

	if (quantity || cardItemData.quantity || cardItemData.count) {
		result['quantity'] = quantity || cardItemData.quantity || cardItemData.count;
	}

	return result;
};

/**
 * @param {object} goodData
 * @param {int?} quantity
 * @param {string?} list
 */
var prepareGoodForDataLayer = function (goodData, quantity, list) {


	var result = {
		'id': goodData.code ? goodData.code.toString() : '',
		'name': goodData.name ? goodData.name.toString().replace(/&nbsp;/g, ' ') : '',
		'category': getCategory(),
		'brand': goodData.producer_name ? goodData.producer_name.toString() : '',
		'price': goodData.price ? goodData.price.toString() : ''
	};

	if (quantity) {
		result.quantity = quantity;
	}
	if (list) {
		result.list = list;
	}

	function getCategory() {
		if (goodData.category === 'certificate') {
			return '';
		}
		if (goodData.categories_tree) {
			return goodData.categories_tree.toString();
		}
		if (goodData.category) {
			return goodData.category.toString();
		}

		return '';
	}

	return result;
}

/**
 * @param {object} promoData
 */
var preparePromoForDataLayer = function (promoData) {
	return {
		'id': promoData.gtm_id ? promoData.gtm_id : '',
		'name': promoData.gtm_name ? promoData.gtm_name.replace(/\n/g, ' ') : '',
		'creative': promoData.gtm_creative ? promoData.gtm_creative.replace(/\n/g, ' ') : '',
		'position': promoData.gtm_position ? promoData.gtm_position : ''
	};
}

/**
 * Отправляем подготовленные данные в Data Layer
 */
var pushToDataLayer = function (data) {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push(data);
}

/**
 * Декоратор для IntersectionObserver. Делаем debounce, чтобы отправлять элементы пачками.
 */
intersectionDebounce = function (items, callable, options) {
	try {
		var defaultOptions = {
			'batchSize': 100, // количество элементов для принудительной отправки без timeout
			'visibility': 0.5, // на сколько должен быть виден на странице элемент, чтобы обработать его (0.5 - 50%)
			'timeout': 500 // интервал добавления в пачку просмотренных товаров
		};
		options = Object.assign(defaultOptions, options);

		var intersectionItems = [];
		var clear;

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.intersectionRatio > 0) {
					observer.unobserve(entry.target);

					intersectionItems.push(entry.target);

					// Ограничаемся по batchSize
					var batchSize = options.batchSize ? parseInt(options.batchSize) : 100;
					if (intersectionItems.length >= batchSize) {
						callable(intersectionItems);
						intersectionItems = [];
					}

					// debounce
					clearTimeout(clear);
					if (intersectionItems.length > 0) {
						clear = setTimeout(function () {
							callable(intersectionItems);
							intersectionItems = [];
						}, options.timeout);
					}
				}
			});
		}, {
			'threshold': [options.visibility]
		});

		items.forEach(function (item) {
			observer.observe(item);
		});
	} catch (e) {
	}
}
