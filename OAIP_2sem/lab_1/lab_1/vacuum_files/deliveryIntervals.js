;
(function initDeliveryIntervals() {
    let dateIntervals = null,
        intervals = null,
        values = {},
        daysSelect,
        intervalsSelect,
        intervalInputBegin = document.querySelector('.j-delivery-interval-begin'),
        intervalInputEnd = document.querySelector('.j-delivery-interval-end'),
        intervalsSent = false,
        response,
        selectedIntervalsStorage = [];

    const DEFAULT_OPTION_VALUE = '0';

    function clearSelects() {
        clearIntervalsOptions();
        clearDaysOptions();
    }

    function handleGetData(responseData) {
        response = responseData;
        daysSelect = document.querySelector('.j-delivery-intervals-date');
        intervalsSelect = document.querySelector('.j-delivery-intervals-time');

        prepareIntervalsSelects(responseData);

        daysSelect.addEventListener('change', handleDaysSelectChanged);
        intervalsSelect.addEventListener('change', handleIntervalsSelectChanged);
    }

    function handleGetDataDesktop(responseData) {
        response = responseData;
        // Если пользователь слишком бысро переключил адрес доставки на пункт "другой"
        if ($(".j-delivery_type:checked").val() === 'courier' && $('.j-address_select:checked').val() === 'other' && !$('.j-address-input').val()) {
            return;
        }

        daysSelect = document.querySelector('.j-delivery-intervals-date-desktop');
        intervalsSelect = document.querySelector('.j-delivery-intervals-time-desktop');

        prepareIntervalsSelects(responseData);

        daysSelect.addEventListener('change', handleDaysSelectChangedDesktop);
        intervalsSelect.addEventListener('change', handleIntervalsSelectChangedDesktop);
    }

    function prepareIntervalsSelects(responseData = { data: [] }) {
        clearSelects();
        let intervalsData = mapIntervalsData(responseData.data);
        if (Object.keys(intervalsData).length === 0) {
            return;
        }

        dateIntervals = intervalsData;
        addDaysOptions();
        clearIntervalsOptions();
    }

    function handleDaysSelectChanged(event) {
        clearIntervalsOptions();
        const value = $(event.target).attr('data-value');
        values = { ...values, delivery_date: value };

        if (value !== DEFAULT_OPTION_VALUE) {
            if (!dateIntervals[value]) {
                return;
            }

            intervals = dateIntervals[value].intervals;
            addIntervalsOptions();
        }

        updateIntervalStorage();
    }

    function handleDaysSelectChangedDesktop(event) {
        clearIntervalsOptions();
        clearIntervalsFromBasket();
        const value = $(event.target).attr('data-value');
        values = { ...values, delivery_date: value };

        if (value !== DEFAULT_OPTION_VALUE) {
            if (!dateIntervals[value]) {
                return;
            }

            intervals = dateIntervals[value].intervals;
            addIntervalsOptions();
        }

        updateIntervalStorage();
    }

    function handleIntervalsSelectChanged(event) {
        const value = $(event.target).attr('data-value');

        if (value !== DEFAULT_OPTION_VALUE) {
            let interval = intervals.find(intervalObj => intervalObj.interval === value);
            const payload = {
                'delivery_time_begin': interval.originalInterval.begin,
                'delivery_time_end': interval.originalInterval.end,
            };
            values = { ...values, ...payload, delivery_time: value };
            setIntervalInputs(interval);
        } else {
            clearIntervalInputs();
        }

        updateIntervalStorage();
    }

    function handleIntervalsSelectChangedDesktop(event) {
        const value = $(event.target).attr('data-value');

        if (value !== DEFAULT_OPTION_VALUE) {
            let interval = intervals.find(intervalObj => intervalObj.interval === value);
            if (typeof window.updateBasket !== 'undefined') {
                intervalsSent = true;
                const payload = {
                    'delivery_time_begin': interval.originalInterval.begin,
                    'delivery_time_end': interval.originalInterval.end,
                };
                window.updateBasket(payload);
                values = { ...values, ...payload, delivery_time: value };
            }
        } else {
            clearIntervalsFromBasket();
        }

        updateIntervalStorage();
    }

    function updateIntervalStorage () {
        const payload = {
            response,
            paymentType: window.deliveryIntervalsRequestData.payment,
            addressId: window.deliveryIntervalsRequestData.address_id,
            deliveryType: window.deliveryIntervalsRequestData.delivery_type,
            selectedIntervalTime: values.delivery_time,
            selectedIntervalDate: values.delivery_date,
        };

        selectedIntervalsStorage = selectedIntervalsStorage.filter(item => item.paymentType !== payload.paymentType);
        selectedIntervalsStorage.push(payload);
        localStorage.setItem('intervalStorage', JSON.stringify(selectedIntervalsStorage));
    }

    function getIntervalStorage () {
        return selectedIntervalsStorage;
    }

    function clearIntervalsFromBasket() {
        values.delivery_time_begin = null;
        values.delivery_time_end = null;
        values.delivery_time = null;

        if (typeof window.updateBasket !== 'undefined' && intervalsSent) {
            intervalsSent = false;
            window.updateBasket({
                'delivery_time_begin': 0,
                'delivery_time_end': 0,
            })
        }
    }

    function setIntervalInputs(interval) {
        intervalInputBegin.value = interval.originalInterval.begin;
        intervalInputEnd.value = interval.originalInterval.end;
    }

    function clearIntervalInputs() {
        values.delivery_time_begin = null;
        values.delivery_time_end = null;
        values.delivery_time = null;

        if (intervalInputBegin && intervalInputEnd) {
            intervalInputBegin.value = '';
            intervalInputEnd.value = '';
        }
    }

    function addDaysOptions() {
        daysSelect.appendChild(getDefaultValue('Выберите дату'));
        daysSelect.setAttribute('data-value', DEFAULT_OPTION_VALUE);
        daysSelect.querySelector('.custom-options').appendChild(getDefaultOption('Выберите дату'));

        Object.keys(dateIntervals).forEach((dayKey) => {
            let option = document.createElement('div');

            option.setAttribute('data-value', dayKey);
            option.innerHTML = dateIntervals[dayKey].date;
            option.classList.add('custom-option');
            daysSelect.querySelector('.custom-options').appendChild(option);
            daysSelect.classList.remove('disabled');
        });
    }

    function clearIntervalsOptions() {
        clearSelect(intervalsSelect);
        intervals = null;
        values = {};

        // триггерим об изменении селекта для сброса ошибок валидации
        $(intervalsSelect).change();

        clearIntervalInputs();
        updateIntervalStorage();
    }

    function clearDaysOptions() {
        clearSelect(daysSelect);
        dateIntervals = null;
    }

    function clearSelect(select) {
        if (select) {
           select.removeAttribute('data-value');
           if (select.querySelector('.g-form__custom-value')) {
               select.querySelector('.g-form__custom-value').remove();
               select.querySelector('.custom-options').innerHTML = '';
           }
           select.classList.add('disabled');
        }
    }

    function addIntervalsOptions() {
        intervalsSelect.appendChild(getDefaultValue('Выберите время'));
        intervalsSelect.querySelector('.custom-options').appendChild(getDefaultOption('Выберите время'));
        intervalsSelect.setAttribute('data-value', DEFAULT_OPTION_VALUE);

        for (let i = 0; i < intervals.length; i++) {
            let option = document.createElement('div');
            option.setAttribute('data-value', intervals[i].interval);
            option.setAttribute('data-display-value', intervals[i].interval);
            option.innerHTML = intervals[i].interval;

            if (intervals[i].originalInterval.bonus) {
                option.innerHTML += '<br> х2 баллов при выборе';
            }

            option.classList.add('custom-option');
            intervalsSelect.querySelector('.custom-options').appendChild(option);
            intervalsSelect.classList.remove('disabled');
        }
    }

    function getDefaultValue(text) {
        let option = document.createElement('div');
        option.classList.add('g-form__custom-value');
        option.innerText = text;

        return option;
    }

    function getDefaultOption(text) {
        let option = document.createElement('div');
        option.setAttribute('data-value', DEFAULT_OPTION_VALUE);
        option.innerHTML = text;
        option.classList.add('custom-option');

        return option;
    }

    function isDateBeforeToday(date) {
        return date.getTime() < new Date().getTime();
    }

    function mapIntervalsData(intervalsData) {
        let result = {};
        intervalsData.forEach(function (intervalObject) {
            if (isDateBeforeToday(new Date(intervalObject.begin))) {
                dataLayer.push({
                    'event': 'checkout-delivery-time',
                    'checkout-delivery-device': navigator.userAgent,
                    'checkout-delivery-interval-start': intervalObject.begin,
                    'checkout-delivery-interval-end': intervalObject.end,
                });
                return;
            }

            let begin = new Date(intervalObject.begin);
            let end = new Date(intervalObject.end);
            let key = formatKey(begin);

            if (!result[key]) {
                result[key] = {
                    date: formatDate(begin),
                    intervals: []
                };
            }

            result[key].intervals.push(getIntervalObject(begin, end, intervalObject));
        });

        return result;
    }

    function formatDate(date) {
        let formattedDate = date.toLocaleDateString('ru', {weekday: 'long', day: '2-digit', month: 'long'});
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    function formatKey(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    function getIntervalObject(begin, end, originalInterval) {
        return {
            interval: getTwoDigitDatePart(begin.getHours())
                + ':'
                + getTwoDigitDatePart(begin.getMinutes())
                + '-'
                + getTwoDigitDatePart(end.getHours())
                + ':'
                + getTwoDigitDatePart(end.getMinutes()),
            begin: begin,
            end: end,
            originalInterval
        };
    }

    function getTwoDigitDatePart(datePart) {
        return datePart < 10 ? '0' + datePart : datePart;
    }

    function validateIntervals(data) {
        if (!values.delivery_time_begin || !values.delivery_time_end) {
            return true;
        }

        return !!data.find(item => item.begin === values.delivery_time_begin && item.end === values.delivery_time_end);
    }

    Object.defineProperty(window, 'deliveryIntervals', {
        value: {
            handleGetData: handleGetData,
            handleGetDataDesktop: handleGetDataDesktop,
            clearSelects: clearSelects,
            validateIntervals: validateIntervals,
            getIntervalStorage: getIntervalStorage,
        },
        writable: false
    });
})();
