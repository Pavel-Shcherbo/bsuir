(function initLocations() {
	let API_GATEWAY_URL;
	const CITIES_GET = '/locations/cities/get';
	const CITIES_SEARCH = '/locations/cities/search';
	const ADDRESSES_SEARCH = '/locations/addresses/search';

	const headers = {
		'Accept': 'application/vnd.api+json',
		'Content-Type': 'application/vnd.api+json'
	};

	/**
	 * @param {URLSearchParams} searchParams
	 * @param {string} limit
	 * @param {string} offset
	 */
	function addPageParams(searchParams, limit, offset) {
		if (limit) {
			searchParams.append('page[limit]', limit)
		}
		if (offset) {
			searchParams.append('page[offset]', offset)
		}
	}

	/**
	 *
	 * @param {String} route
	 * @param {URLSearchParams} getParams
	 * @param {String} errorText
	 * @returns {Promise<array[]>}
	 */
	function getRequest(route, getParams, errorText) {
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: API_GATEWAY_URL + route + '?' + getParams.toString(),
				crossDomain: true,
				headers,
				success: function (response) {
					resolve(response.data);
				},
				error: function (jqXHR) {
					if (jqXHR.status === 500){
						window.preventReloadOn500 = true;
					} 
					reject(errorText);
				},
			})
		});
	}

	function searchCitiesByName(name, limit, offset) {
		if (!name || name.length < 2 || name.length > 100) {
			return Promise.reject('Название населенного пункта должно быть длиной от 2 до 100 символов');
		}

		const searchParams = new URLSearchParams({
			'filter[name]': name,
		});

		addPageParams(searchParams, limit, offset);

		return getRequest(
			CITIES_SEARCH,
			searchParams,
			'Ошибка получения списка населенных пунктов'
		);
	}

	function getCitiesByIds(ids, limit, offset) {
		if (!Array.isArray(ids)) {
			return Promise.reject('Должен быть передан массив идентификаторов');
		}

		const searchParams = new URLSearchParams({
			'filter[id]': ids.join(','),
		});

		addPageParams(searchParams, limit, offset);

		return getRequest(
			CITIES_GET,
			searchParams,
			'Ошибка получения списка населенных пунктов'
		);
	}

	function searchAddresses(address, cityId, limit, offset) {
		if (!address || address.length === 0 || address.length > 100) {
			return Promise.reject('Адрес должен быть длиной от 1 до 100 символов');
		}

		const searchParams = new URLSearchParams({
			'filter[address]': address,
			'filter[city]': cityId,
		});

		addPageParams(searchParams, limit, offset);

		return getRequest(
			ADDRESSES_SEARCH,
			searchParams,
			'Ошибка получения списка адресов'
		)
	}

	if (window.settings.apiGatewayInfo && window.settings.apiGatewayInfo.url) {
		API_GATEWAY_URL = window.settings.apiGatewayInfo.url;

		Object.defineProperty(window, 'locations', {
			value: {
				searchCitiesByName,
				searchAddresses,
				getCitiesByIds,
			},
			writable: false
		});
	} else {
		console.error('Api-gateway url is not defined');
	}
})();
