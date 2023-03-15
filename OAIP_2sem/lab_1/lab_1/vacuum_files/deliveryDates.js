;
(function initDeliveryDates() {
    let currentStatusElements;
    let currentShipmentElements;
    let loopCallbackLimit = 5;
    let loopIteration = 1;

    let currentCode;

    const DEFAULT_CITY_ID = '17030'; // Минск
    const DELIVERY_TYPE_COURIER = 'courier';
    const DELIVERY_TYPE_SELF = 'self';
    const DELIVERY_TYPE_PICKUP_POINT = 'pickup_point';
    const DELIVERY_TYPES = [DELIVERY_TYPE_COURIER, DELIVERY_TYPE_SELF];

    const CODES_PER_REQUEST = 60;
    const MAX_CHUNK_SIZE = 100;

    let DELIVERY_DATES_SERVICE_URL;
    let DELIVERY_DATES_SERVICE_TOKEN;

    function getToken (successCallback) {
        $.ajax({
            type: "GET",
            url: '/deliveryDates/token',
            dataType: "json",
            crossDomain: true,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            success: function (responseData) {
                DELIVERY_DATES_SERVICE_TOKEN = responseData.token;
                successCallback(responseData)
            },
        });
    }

    function getDeliveryDatesForProducts(codes, successCallback, checkQuantity = false, failCallback) {
        if (!codes.length) {
            return;
        }

        let hasPickupPoints = false;

        for (let code of codes) {
            if (code.pickup_points && code.pickup_points.length) {
                hasPickupPoints = true;
                break;
            }
        }

        let requestData = {
            city_id: (window.settings.user.cityId || DEFAULT_CITY_ID) + '',
            delivery_types: hasPickupPoints ?
                [DELIVERY_TYPE_COURIER, DELIVERY_TYPE_SELF] :
                [DELIVERY_TYPE_COURIER],
            codes,
            check_quantity: checkQuantity,
        };

        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DELIVERY_DATES_SERVICE_TOKEN
        }

        makeRequest(DELIVERY_DATES_SERVICE_URL + '/NetMs/api/DateTime/AvailableDate', headers, requestData, successCallback, failCallback,null,
              function() {
              const body = $("body");

              if (body.attr('data-ga_label') === 'catalog_detectum' || body.attr('data-ga_label') === 'catalog_index' || body.hasClass("catalog_index")) {
                  window['emitter']().emit('cake2react:updateCakeCatalog');
              }
          }
        );
    }

    function getDeliveryOptionsForProducts(products, successCallback, failCallback) {
        if (!products.length) {
            return;
        }

        const requestData = {
            data: {
                type: "DeliveryProducts",
                attributes: {
                    city_id: +(window.settings.user.cityId || DEFAULT_CITY_ID),
                    products
                }
            }
        };
        const headers = {
            accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        };

        makeRequest(
            window.settings.apiGatewayInfo.url + '/delivery/products',
            headers,
            requestData,
            successCallback,
            failCallback
        );
    }

    function getDeliveryOptionsAndPriceForProduct(product, successCallback, failCallback) {
        if (!product) {
            return;
        }

        const requestData = {
            data: {
                type: "DeliveryProduct",
                attributes: {
                    city_id: +(window.settings.user.cityId || DEFAULT_CITY_ID),
                    product
                }
            }
        };
        const headers = {
            accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        };

        makeRequest(
            window.settings.apiGatewayInfo.url + '/delivery/product',
            headers,
            requestData,
            successCallback,
            failCallback
        );
    }

    function getDeliveryIntervals(requestData, successCallback, iteration, errorCallback) {
        if (requestData === null) {
            return;
        }

        if (!iteration) {
            loopIteration = 1;
        }

        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DELIVERY_DATES_SERVICE_TOKEN
        };

        makeRequest(DELIVERY_DATES_SERVICE_URL + '/NetMs/api/DateTime/IntervalList', headers, requestData, successCallback, errorCallback);
    }


    function makeRequest (url, headers, requestData, successCallback, errorCallback, iteration, always) {
        if (!iteration) {
            loopIteration = 1;
        }

        $.ajax({
            type: "POST",
            url,
            dataType: "json",
            crossDomain: true,
            headers,
            data: JSON.stringify(requestData),
            success: function (responseData) {
                successCallback(responseData);
            },
            error: function(xhr) {
                if (xhr.status === 500) window.preventReloadOn500 = true;

                if (xhr.status === 401 && (!iteration || iteration <= loopCallbackLimit)) {
                    loopIteration++;
                    getToken(function () {
                        makeRequest(url, headers, requestData, successCallback, errorCallback, loopIteration, always);
                    });
                } else {
                    errorCallback?.(xhr);
                }
            }
        }).always(() => {
            always?.();
        });
    }

    function makeDeliveryDataForProductCode(data, code) {
        let item = data[code];
        let result = {
            code: code
        };

        DELIVERY_TYPES.forEach(function (deliveryType) {
            if (!item[deliveryType]) {
                return;
            }

            result[deliveryType] = formatDate(new Date(item[deliveryType]));
        });

        if (typeof item[DELIVERY_TYPE_COURIER] !== 'undefined') {
            result.request = mapRequestDays(new Date(item[DELIVERY_TYPE_COURIER]));
        }

        return result;
    }

    function handleDeliveryDatesForListingsGet(responseData) {
        let resDataTransformed = [];
        for (let code in responseData) {
            if (!Object.prototype.hasOwnProperty.call(responseData, code)) {
                continue;
            }

            resDataTransformed.push(makeDeliveryDataForProductCode(responseData, code));
        }

        writeDeliveryDatesToDOMForListings(resDataTransformed);
    }

    function transformDeliveryOptionsData(responseData) {
        return responseData.map(({ id, attributes }) =>
            ({
                code: id,
                [DELIVERY_TYPE_COURIER]: attributes[DELIVERY_TYPE_COURIER].available,
                [DELIVERY_TYPE_SELF]: attributes[DELIVERY_TYPE_PICKUP_POINT].available
            })
        );
    }

    function handleCartDeliveryDates(responseData) {
        $('.g-delivery').find('.delivery-courier').empty();
        $('.g-delivery').find('.delivery-self').empty();

        for (let code in responseData) {
            if (!Object.prototype.hasOwnProperty.call(responseData, code)) {
                continue;
            }
            let deliveryData = makeDeliveryDataForProductCode(responseData, code);
            let currentElement = currentShipmentElements[code];
            let complectElement = currentShipmentElements['complect' + code];
            if (currentElement) {
                applyDeliveryDatesForCurrentCartElement(currentElement, deliveryData);
            }
            if (complectElement) {
                applyDeliveryDatesForCurrentCartElement(complectElement, deliveryData);
            }
        }
    }

    function transformDeliveryOptionsDataForProduct(responseData) {
        return responseData.map(({ id, attributes }) =>
            ({
                code: id,
                [DELIVERY_TYPE_COURIER]: attributes[DELIVERY_TYPE_COURIER],
                [DELIVERY_TYPE_SELF]: attributes[DELIVERY_TYPE_PICKUP_POINT]
            })
        );
    }

    function writeDeliveryOptionsToDOMForCartProduct (data) {
        data.forEach((dataItem) => {
            const el = currentShipmentElements[dataItem.code];
            if (el) {
                if (dataItem[DELIVERY_TYPE_COURIER]) {
                    el.find(`.delivery-${DELIVERY_TYPE_COURIER}`).text('Курьером').removeClass('hidden');
                }

                if (dataItem[DELIVERY_TYPE_SELF]) {
                    el.find(`.delivery-${DELIVERY_TYPE_SELF}`).text('Самовывоз').removeClass('hidden');
                }
            }
        });
    }

    function applyDeliveryDatesForCurrentCartElement(currentElement, deliveryData) {
        DELIVERY_TYPES.forEach(function(deliveryType) {
            let element = currentElement.find('.delivery-' + deliveryType);
            if (!deliveryData[deliveryType]) {
                element.text('');
                element.addClass('hidden');
                return;
            }

            if (element) {
                let deliveryWord = mapDeliveryTypeToWord(deliveryType);
                element.text(deliveryWord + ': ' + deliveryData[deliveryType]);
                element.removeClass('hidden');
            }
        });
        currentElement.removeClass('hidden');
    }

    function handleMobileCartDeliveryDates(responseData) {
        $('.g-delivery').find('.j-courier').empty();
        $('.g-delivery').find('.j-self').empty();
        $('.g-delivery-full').hide();

        for (let code in responseData) {
            if (!Object.prototype.hasOwnProperty.call(responseData, code)) {
                continue;
            }
            let deliveryData = makeDeliveryDataForProductCode(responseData, code);
            let currentElement = currentShipmentElements[code];
            let complectElement = currentShipmentElements['complect' + code];

            if (currentElement) {
                currentElement.show();
                applyDeliveryDatesForCurrentMobileCartElement(currentElement, deliveryData);
            }

            if (complectElement) {
                complectElement.show();
                applyDeliveryDatesForCurrentMobileCartElement(complectElement, deliveryData);
            }
        }
    }

    function writeDeliveryOptionsToDOMForMobileCartProduct(data) {
        data.forEach((dataItem) => {
            const el = currentShipmentElements[dataItem.code];
            if (el && (dataItem[DELIVERY_TYPE_COURIER] || dataItem[DELIVERY_TYPE_SELF])) {
                if (dataItem[DELIVERY_TYPE_COURIER]) {
                    el.find(`.j-courier`).text('Курьером');
                }

                if (dataItem[DELIVERY_TYPE_SELF]) {
                    el.find(`.j-self`).text('Самовывоз');
                }
                el.removeClass('hidden');
                el.show();
            }
        });
    }

    function applyDeliveryDatesForCurrentMobileCartElement(currentElement, deliveryData) {
        DELIVERY_TYPES.forEach(function(deliveryType) {
            if (!deliveryData[deliveryType]) {
                return;
            }

            let element = currentElement.find('.j-' + deliveryType);

            if (element) {
                let deliveryWord = mapDeliveryTypeToWord(deliveryType);
                element.text(deliveryWord + ': ' + deliveryData[deliveryType]);
            }
        });
        currentElement.removeClass('hidden');
    }

    function getDiff(date) {
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        return Math.floor((date - today) / (60 * 60 * 24 * 1000));
    }

    function formatDate(date) {
        let diff = getDiff(date);

        switch (diff) {
            case 0:
                return 'сегодня';
            case 1:
                return 'завтра';
            default:
                return date.toLocaleDateString('ru', {day: 'numeric', month: 'long'})
        }
    }

    function mapRequestDays(date) {
        let diff = getDiff(date);

        return pluralTransform(diff);
    }

    function mapDeliveryTypeToWord(deliveryType) {
        switch (deliveryType) {
            case DELIVERY_TYPE_COURIER:
                return 'Курьером';
            case DELIVERY_TYPE_SELF:
                return 'Самовывоз';
        }
    }

    function pluralTransform(days) {
        let DAYS_NAMES = ['день','дня','дней'];
        let days_100 = days % 100,
            days_10 = days % 10;

        if (days_100 > 9 && days_100 < 20) {
            return days + ' ' + DAYS_NAMES[2];
        }

        if (days_10 === 1) {
            return days + ' ' + DAYS_NAMES[0];
        }

        if (days_10 > 1 && days_10 < 5) {
            return days + ' ' + DAYS_NAMES[1];
        }

        return days + ' ' + DAYS_NAMES[2];
    }

    function writeDeliveryDatesToDOMForListings(data) {
        data.forEach(function (dataItem) {
            let el = currentShipmentElements[dataItem.code];
            if (el) {
                if (dataItem[DELIVERY_TYPE_COURIER]) {
                    var courierDeliveryEl = el.querySelector('.j-courier__delivery');
                    courierDeliveryEl.classList.remove('hidden');
                    courierDeliveryEl.querySelector('span').innerText = dataItem[DELIVERY_TYPE_COURIER];
                }

                if (dataItem[DELIVERY_TYPE_SELF]) {
                    var selfDeliveryEl = el.querySelector('.j-self__delivery');
                    selfDeliveryEl.classList.remove('hidden');
                    selfDeliveryEl.querySelector('span').innerText = dataItem[DELIVERY_TYPE_SELF];
                }
            }

            let elStatus = currentStatusElements[dataItem.code];
            if (elStatus) {
                elStatus.classList.remove('hidden');
                elStatus.querySelector('span').innerText = dataItem.request;
            }
        });
    }

    function formatNumber(cost) {
        const formatter = new Intl.NumberFormat('ru-RU', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

        return formatter.format(cost);
    }

    function getDeliveryInfoBlock( infoBlock, cost, date) {
        const regex = /—.*/;
        const cityLink = infoBlock.querySelector('a');
        const popupOpener = infoBlock.querySelector('.j-callpopup');

        const deliveriDate = infoBlock.querySelector('.j-item-days');
        deliveriDate.innerText = date ? `${date}, `: '';

        cost = cost ? `${formatNumber(cost)} р.` : 'бесплатно';

        if (cityLink) {
            infoBlock.innerHTML = '';
            infoBlock.append(cityLink, ' — ', deliveriDate, cost);
        } else if (popupOpener) {
            infoBlock.innerHTML = '';
            infoBlock.append(popupOpener, ' — ', deliveriDate, cost);
        } else {
            infoBlock.innerText = infoBlock.innerText.replace( regex, `— ${date ? `${date}, `: ''} ${cost}`);
        }
    }

    function writeDeliveryDatesAndPriceToDOMForProduct(dataItem, dates) {
        if (
            typeof currentShipmentElements !== 'undefined'
            && Object.prototype.hasOwnProperty.call(currentShipmentElements, 'current')
            && Object.prototype.hasOwnProperty.call(dataItem, DELIVERY_TYPE_COURIER)
        ) {
            let currentElement = currentShipmentElements.current;
            DELIVERY_TYPES.forEach(function(deliveryType) {
                let infoBlock = currentElement.querySelector(`.j-item-delivery[data-type=${deliveryType}]`);

                if (infoBlock && dataItem[deliveryType].available) {
                    const cost = dataItem[deliveryType]?.cost ? `${dataItem[deliveryType]?.cost} р.` : 'бесплатно';
                    getDeliveryInfoBlock(infoBlock,  dataItem[deliveryType]?.cost, dates[deliveryType]);
                    infoBlock.classList.remove('hidden');
                }
            })
        }

        if (
            typeof currentStatusElements !== 'undefined'
            && Object.prototype.hasOwnProperty.call(currentStatusElements, 'current')
            && Object.prototype.hasOwnProperty.call(dates, 'request')
        ) {
            currentStatusElements.current.classList.remove('hidden');
            currentStatusElements.current.querySelector('.j-item-days').innerText = dates.request;
        }
    }

    function writeDeliveryOptionsToDOMForProduct(data) {
        data.forEach((dataItem) => {
            const el = currentShipmentElements[dataItem.code];
            if (el) {
                if (dataItem[DELIVERY_TYPE_COURIER]) {
                    showDeliveryOptionsBlock(el, 'j-courier__delivery');
                }

                if (dataItem[DELIVERY_TYPE_SELF]) {
                    showDeliveryOptionsBlock(el, 'j-self__delivery');
                }
            }
        });
    }

    function writeDeliveryOptionsAndPriceToDOMForProduct(data) {
        DELIVERY_TYPES.forEach(function(deliveryType) {
            let element = document.querySelector(`.j-item-delivery[data-type=${deliveryType}]`);

            if (element && data[deliveryType].available) {
                getDeliveryInfoBlock(element,  data[deliveryType]?.cost)
                element.classList.remove('hidden');
            }
        })
    }

    function showDeliveryOptionsBlock(el, classSelector) {
        const courierDeliveryEl = el.querySelector(`.${classSelector}`);
        courierDeliveryEl.innerText = courierDeliveryEl.innerText.replace(' — ', '');
        courierDeliveryEl.classList.remove('hidden');
    }

    function setCurrentElementsForListings() {
        let resShipment = {};
        let resStatus = {};
        let statusCodeEls = document.querySelectorAll('.j-catalog-status');
        let codeEls = document.querySelectorAll('.j-delivery-days__block');

        Array.prototype.forEach.call(codeEls, function (elem) {
            let code = elem.dataset.code;

            resShipment[code] = elem;
        });

        Array.prototype.forEach.call(statusCodeEls, function (elem) {
            let code = elem.dataset.code;

            resStatus[code] = elem;
        });

        currentShipmentElements = resShipment;
        currentStatusElements = resStatus;
    }

    function setCurrentElementsForProduct() {
        let codeEls = document.querySelectorAll('.j-delivery-info');
        let statusCodeEls = document.querySelectorAll('.j-catalog-status');

        if (codeEls.length > 0) {
            currentShipmentElements = {
                current: codeEls[0]
            };
        }
        if (statusCodeEls.length > 0) {
            currentStatusElements = {
                current: statusCodeEls[0]
            };
        }
    }

    function setCurrentElementsForCart(cartItems) {
        let resShipment = {};

        for (const itemKey in cartItems) {
            let key = cartItems[itemKey].code;
            if (cartItems[itemKey].sales_code) {
                key += '_' + cartItems[itemKey].sales_code;
            }

            if (itemKey.indexOf('complect') !== -1) {
                key = 'complect' + key;
            }
            resShipment[key] = $('#g-delivery-' + itemKey);
        }

        currentShipmentElements = resShipment;
        currentStatusElements = null;
    }

    function setCurrentElementsForMobileCart(cartItems) {
        let resShipment = {};

        for (const itemKey in cartItems) {
            let key = cartItems[itemKey].code;
            if (cartItems[itemKey].sales_code) {
                key += '_' + cartItems[itemKey].sales_code;
            }

            if (itemKey.indexOf('complect') !== -1) {
                key = 'complect' + key;
            }
            resShipment[key] = $('#j-courier-delivery-' + itemKey).parent('.g-delivery');
        }

        currentShipmentElements = resShipment;
        currentStatusElements = null;
    }

    function prepareDeliveryData(deliveryDatesData, deliveryOptionsData) {
        const itemsWithDate = {};
        const itemsWithoutDate = [];
        deliveryOptionsData.forEach(item => {
            if (!deliveryDatesData[item.code]) {
                itemsWithoutDate.push(item);
            } else if (item[DELIVERY_TYPE_COURIER] || item[DELIVERY_TYPE_SELF]) {
                itemsWithDate[item.code] = { code: item.code };
                if (item[DELIVERY_TYPE_COURIER]) {
                    itemsWithDate[item.code][DELIVERY_TYPE_COURIER] = deliveryDatesData[item.code][DELIVERY_TYPE_COURIER];
                }
                if (item[DELIVERY_TYPE_SELF]) {
                    itemsWithDate[item.code][DELIVERY_TYPE_SELF] = deliveryDatesData[item.code][DELIVERY_TYPE_SELF];
                }
            }
        });
        return [itemsWithDate, itemsWithoutDate];
    }

    function updateDeliveryOptionsAndDates(
      renderOptions,
      renderDates,
      codes,
      checkQuantity
    ) {
      function mapDeliveryOptionsData(deliveryOptionsData) {
        return deliveryOptionsData.map(({ id, attributes }) => ({
          code: id.toString(),
          pickup_points: attributes?.pickup_point?.ids?.map(String),
          quantity: codes.find(({ code }) => code === id.toString())?.quantity || 0,
        }));
      }
      getDeliveryOptionsForProducts(
        codes.map(({ code }) => ({ code: Number(code), count: 1 })),
        (responseData) => {
          getDeliveryDatesForProducts(
            mapDeliveryOptionsData(responseData.data),
            (deliveryDatesData) => {
              const deliveryOptionsData = transformDeliveryOptionsData(
                responseData.data
              );
              const [itemsWithDate, itemsWithoutDate] = prepareDeliveryData(
                deliveryDatesData.data,
                deliveryOptionsData
              );

              renderDates(itemsWithDate);
              renderOptions(itemsWithoutDate);
            },
            checkQuantity,
            () => {
              renderOptions(transformDeliveryOptionsData(responseData.data));
            }
          );
        },
        () => {}
      );
    }


    function renderDeliveryDatesForListings(productCodes) {
        try {
            setCurrentElementsForListings();

            let chunks = splitArrayToChunks(productCodes, CODES_PER_REQUEST, MAX_CHUNK_SIZE);

            chunks.forEach(function (codes) {
                updateDeliveryOptionsAndDates(writeDeliveryOptionsToDOMForProduct, handleDeliveryDatesForListingsGet, codes, false);
            });
        } catch(e) {
            console.error(e);
        }
    }

    function renderDeliveryDatesForProduct(productCode) {
        currentCode = productCode;
        currentCode.pickup_points = window.offerSpotsIds || [];

        const price = document.querySelector('[data-price]')?.dataset?.price;
        try {
            setCurrentElementsForProduct();
            getDeliveryOptionsAndPriceForProduct(
                {code: +productCode.code, count:1, price: +price},
                (responseData) =>{
                    getDeliveryDatesForProducts(
                        [productCode],
                        (deliveryDatesData) => {

                            const [deliveryOptionsData] = transformDeliveryOptionsDataForProduct([responseData.data]);
                            let resDataTransformed = makeDeliveryDataForProductCode(deliveryDatesData.data, deliveryOptionsData.code);

                            writeDeliveryDatesAndPriceToDOMForProduct(deliveryOptionsData, resDataTransformed)
                        },
                        false,
                        () => {
                            writeDeliveryOptionsAndPriceToDOMForProduct(...transformDeliveryOptionsDataForProduct([responseData.data]));
                        }
                    );
                },
                () =>{}
            )
        } catch (e) {
            console.log(e);
        }
    }
    function renderDeliveryDatesForCart(items, offerSpotsIds = []) {
        let itemsCodes = [];

        for (const itemKey in items) {
            let currentCode = items[itemKey];
            currentCode.pickup_points = offerSpotsIds;
            itemsCodes.push(currentCode)
        }
        try {
            setCurrentElementsForCart(items);

            let chunks = splitArrayToChunks(itemsCodes, CODES_PER_REQUEST, MAX_CHUNK_SIZE);

            chunks.forEach(function (codes) {
                updateDeliveryOptionsAndDates(writeDeliveryOptionsToDOMForCartProduct, handleCartDeliveryDates, codes, true);
            });
        } catch(e) {
            console.error(e);
        }
    }

    function renderDeliveryDatesForMobileCart(items, offerSpotsIds = []) {
        let itemsCodes = [];

        for (const itemKey in items) {
            let currentCode = items[itemKey];
            currentCode.pickup_points = offerSpotsIds;
            itemsCodes.push(currentCode);
        }
        try {
            setCurrentElementsForMobileCart(items);

            let chunks = splitArrayToChunks(itemsCodes, CODES_PER_REQUEST, MAX_CHUNK_SIZE);

            chunks.forEach(function (codes) {
                updateDeliveryOptionsAndDates(writeDeliveryOptionsToDOMForMobileCartProduct, handleMobileCartDeliveryDates, codes, true);
            });
        } catch(e) {
            console.error(e);
        }
    }

    function splitArrayToChunks(arr, chunkSize, maxChunkSize) {
        if (arr.length <= maxChunkSize) {
            return [arr];
        }

        let res = [];

        for (let i = 0; i * chunkSize < arr.length; i++) {
            res.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
        }

        return res;
    }

    if (
        window.settings.deliveryDateService
        && window.settings.deliveryDateService.url
        && window.cake.deliveryDate
        && window.cake.deliveryDate.token
    ) {
        DELIVERY_DATES_SERVICE_URL = window.settings.deliveryDateService.url;
        DELIVERY_DATES_SERVICE_TOKEN = window.cake.deliveryDate.token;

        Object.defineProperty(window, 'deliveryDates', {
            value: {
                renderDeliveryDatesForListings: renderDeliveryDatesForListings,
                renderDeliveryDatesForProduct: renderDeliveryDatesForProduct,
                renderDeliveryDatesForCart: renderDeliveryDatesForCart,
                renderDeliveryDatesForMobileCart: renderDeliveryDatesForMobileCart,
                getDeliveryIntervals: getDeliveryIntervals,
            },
            writable: false
        });
    } else {
        console.error('Delivery dates service url and/or token are not defined');
    }
})();
