;
(function initAdgames() {
    let $adgamesBlock = document.querySelector('#basket-adgames-block'),
        $adgamesDescription = document.querySelector('#basket-adgames-description'),
        $checkboxLink = document.querySelector('#basket-adgames-checkbox-title a'),
        $loader = document.querySelector('#basket-adgames-block #react-eCart-loader'),
        updateDataSettings = null;

    function sendCheckRequest (data, cb) {
        $.ajax({
            type: 'POST',
            url: window.API_GATEWAY_URL + '/adgames/adgames.check',
            dataType: 'json',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
            },
            success: function (response) {
                cb(response);
            },
            error: function () {
                cb({ data: {} });
            }
        })
    }

    function prepareBasketItems (basketItems) {
        return basketItems
            .reduce((reducer, item) => {
                const { count, special, complect, status } = item;
                const data = [...reducer];

                if (!count || (status !== 'in' && status !== 'request')) {
                    return data;
                }

                if (special === '0') {
                    data.push(item)
                }

                if (special === 'complect') {
                    Object.values(complect).forEach((item) => {
                        data.push({ ...item, count });
                    });
                }

                return data;
            }, [])
            .map(({ code, count }) => ({ code: Number(code), count }));
    }

    function getUpdateBasketSettings (data) {
        const settings = {};

        if (data.code) {
            settings.code = data.code;
            settings.special = 0;
        }

        return settings;
    }

    function checkAdgames (data) {
		const adGamesToggle = (window.featureToggles ? window.featureToggles.toggles : [])
            .some(({ variant, flag }) => flag === 'adgames' && variant === 'switched-on');

		if (!adGamesToggle) return;

        if (!data.length) {
            $($adgamesBlock).hide();
            return;
        };

        sendCheckRequest(data, (response) => {
            const { code, acceptance_text, url } = response.data;

            // Если РИ предусмотрены (проверяем по наличие ключей объекта, пустой объект возвращается если РИ для коризны/товаров нет
            if (!$.isEmptyObject(response.data)) {
                $($adgamesDescription).html(acceptance_text);

                if (url) {
                    $($checkboxLink).attr('href', url);
                } else {
                    $($checkboxLink).replaceWith('рекламной игре')
                }


                $($adgamesBlock).show();

                // Если у всех элементов корзины count === 0
                if (!data.length) {
                    $($adgamesBlock).hide();
                    updateBasket({ ad_game: false });
                    return;
                }

                updateDataSettings = getUpdateBasketSettings(response.data);
            } else {
                $($adgamesBlock).hide();
                updateDataSettings = null;

                if (basket.ad_game) {
                    updateBasket({ ad_game: false });
                }
            }
        })
    }

    function getAdgamesSettings () {
        return updateDataSettings;
    }

    function setLoading(value) {
        $($loader).toggle(value);
    }

    Object.defineProperty(window, 'adgames', {
        value: {
            checkAdgames: checkAdgames,
            getAdgamesSettings: getAdgamesSettings,
            setLoading: setLoading,
            prepareBasketItems: prepareBasketItems,
        },
        writable: false,
    });
})();
