var eCart = eCart || {};
var API_GATEWAY_URL;
const DEFAULT_HEADERS = {
	accept: 'application/json',
	'Content-Type': 'application/json',
};

if (window.settings.apiGatewayInfo && window.settings.apiGatewayInfo.url) {
	API_GATEWAY_URL = window.settings.apiGatewayInfo.url;
}

eCart.attemptsCount = 0;

eCart.addItem = function(item, callBack, alwaysCallBack) {
	let headers = this.getHeaders();
	let eCart = this;

	$.ajax({
		type: 'POST',
		url:'/e-cart/add/',
		dataType: 'json',
		headers: headers,
		data: JSON.stringify(item),
		success: function(responseData) {
			eCart.attemptsCount = 0;
			callBack(responseData);
			window['emitter']().emit('cake2react:addToECart', item);
		},
		error: function(xhr) {
			if (xhr.status === 404 && eCart.attemptsCount < 1) {
				eCart.attemptsCount++;
				eCart.addItem(item);
			}

			if (xhr.status === 500) window.preventReloadOn500 = true;
		},
	})
		.always(function (){
			if(alwaysCallBack) {
				alwaysCallBack();
			}
		});
};

eCart.getMeta = function(callback) {
	const eCartInfo = this.getECartInfo();
	const headers = this.getHeaders();
	const nullResponse = {
		data: {
			totalAmountOfItems: 0,
			totalAmountOfProductTypes: 0
		}
	};

	if (!eCartInfo) {
		callback(nullResponse.data);
		return;
	}

	$.ajax({
		type: 'GET',
		url: API_GATEWAY_URL + '/checkout/baskets/' + eCartInfo.uuid + '/meta',
		crossDomain: true,
		headers: headers,
		success: function(responseData) {
			callback(responseData.data);
		},
		error: function(xhr) {
			if (xhr.status === 500) window.preventReloadOn500 = true;
			callback(nullResponse.data); // считаем что в е-корзинке у нас ничего нет
		},
	});
};

eCart.getECartInfo = function() {
	if (window.cake.eCart) {
		return window.cake.eCart;
	}

	return null;
}

eCart.getHeaders = function() {
	let headers = DEFAULT_HEADERS;
	if (window.cake.user && window.cake.user.jwt) {
		headers.Authorization = 'JWT ' + window.cake.user.jwt;
	}

	return headers;
};
