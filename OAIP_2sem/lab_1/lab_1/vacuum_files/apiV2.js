var apiV2Request = function(payload, callback) {
	$.post('/gateway/api/v2/', payload, function(data) {
		callback(data);
	}, "json");
};

var getBanksRequest = function(data, callback) {
	var payload = {
		'route_key': 'get_banks',
		'iban': data.iban,
	};

	apiV2Request(payload, function (data) {
		var banks = [];
		if (data) {
			banks = data.map(function (value) {
				return value['attributes'];
			});
		}

		if (banks && banks.length > 0 && banks[0].bic) {
			callback(banks);
		}
	});
};


