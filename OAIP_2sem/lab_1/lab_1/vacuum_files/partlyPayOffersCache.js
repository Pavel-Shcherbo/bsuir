(function initPartlyPayOffersCache() {
  var partlyPayOffersCache = {};
  var currentElements;

  var CACHE_LIFETIME = 1000 * 60 * 10; // 10 min
  var CODES_PER_REQUEST = 60;
  var API_GATEWAY_URL;

  function getPartlyPayOffersForProducts(products) {
    var requestData = {
      data: {
        products
      }
    };

    $.ajax({
      type: "POST",
      url: API_GATEWAY_URL + '/partly-pay/v2/products.calculate',
      dataType: "json",
      crossDomain: true,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData, prepareDataForRequest),
      success: function (responseData) {
        handlePartlyPayOffersGet(requestData, responseData);
      },
      error: function(xhr) {
        if (xhr.status === 500) window.preventReloadOn500 = true;
      },
    })
      .always(function() {
        const body = $("body");

        if (body.attr('data-ga_label') === 'catalog_detectum' || body.attr('data-ga_label') === 'catalog_index' || body.hasClass("catalog_index")) {
          window['emitter']().emit('cake2react:updateCakeCatalogPartlyPay');
        }
      });
  }

  function prepareDataForRequest(key, value) {
    if (key === 'code' || key === 'price' || key === 'sale_price')
      return Number(value);
    if (key === 'producer_id' || key === 'template' || key === 'attributes')
      return undefined;
    return value;
  }

  function handlePartlyPayOffersGet(requestData, responseData) {
    var expiryDate = Date.now() + CACHE_LIFETIME;
    var resDataTransformed = {};

    responseData.data.forEach(function(itemInfo) {
      resDataTransformed[itemInfo.code] = itemInfo;
    });

    requestData.data.products.forEach(function(code) {
      partlyPayOffersCache[code] = {
        code: code,
        monthly_payment: resDataTransformed[code] ? resDataTransformed[code].monthly_payment : null,
        expiryDate: expiryDate
      };
    });

    writePartlyPayOffersToDOM(responseData.data);
  }

  function formatPrice(price) {
    if (!price) return '';

    return parseFloat(price).toFixed(2).replace('.', ',');
  }

  function getPartlyPayPriceElement(value) {
    var span = document.createElement('span');
    span.innerHTML = 'От <span class="partlyPay__price">' + formatPrice(value) + '</span> р./месяц<br>при оплате частями';
    return span;
  }

  function writePartlyPayOffersToDOM(data) {
    data.forEach(function (dataItem) {
      var el = currentElements[dataItem.code];

      if (el && dataItem.monthly_payment) {
        el.classList.remove('hidden');
        el.append(getPartlyPayPriceElement(dataItem.monthly_payment));
      }
    });
  }

  function separateCachedAndNonCachedCodes(productCodes) {
    var cached = [];
    var nonCached = [];
    var now = Date.now();

    productCodes.forEach(function (product) {
      if (partlyPayOffersCache[product.code]) {
        if (partlyPayOffersCache[product.code].expiryDate > now) {
          cached.push(product.code);
        } else {
          delete partlyPayOffersCache[product.code];
          nonCached.push(product);
        }
      } else {
        nonCached.push(product);
      }
    });

    return {
      cached: cached,
      nonCached: nonCached
    };
  }

  function setCurrentElements() {
    var res = {};
    var codeEls = document.querySelectorAll('.partlyPay__offer.hidden');

    Array.prototype.forEach.call(codeEls, function (elem) {
      var code = elem.dataset.code;

      res[code] = elem;
    });

    currentElements = res;
  }

  function splitArrayToChunks(arr, chunkSize) {
    var res = [];

    for (var i = 0; i * chunkSize < arr.length; i++) {
      res.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }

    return res;
  }

  function renderPartlyPayOffers(productCodes) {
    try {
      var separated = separateCachedAndNonCachedCodes(productCodes);
      setCurrentElements();

      if (separated.nonCached.length > 0) {
        var chunks = splitArrayToChunks(separated.nonCached, CODES_PER_REQUEST);

        chunks.forEach(function (codes) {
          getPartlyPayOffersForProducts(codes);
        });
      }

      writePartlyPayOffersToDOM(
        separated.cached.map(function (productCode) {
          return partlyPayOffersCache[productCode];
        })
      );
    } catch(e) {
      console.error(e);
    }
  }

  if (window.settings.apiGatewayInfo && window.settings.apiGatewayInfo.url) {
    API_GATEWAY_URL = window.settings.apiGatewayInfo.url;

    Object.defineProperty(window, 'partlyPayOffersCache', {
      value: {
        renderPartlyPayOffers: renderPartlyPayOffers
      },
      writable: false
    });
  } else {
    console.error('Api-gateway url is not defined');
  }
})();
