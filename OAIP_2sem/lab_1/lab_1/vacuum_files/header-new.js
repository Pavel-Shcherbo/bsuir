$(function(){

	$('.navMenuItemMore > .navMenuLink').click(function(e){
		$(this).parent('li').toggleClass('active');
	});

	$('#j-communication-switcher').on('click', function(){
		$(this).closest('.communicationItem').toggleClass('active');
	});

	$('.j-launchpopup').on('click', function(){
		$(this).closest('.communicationItem.active').removeClass('active');

		if(!$(this).data('is_active')){
			$(this).data('is_active', true);
			$(this).Popup();
		}

		return false;
	});

	$('.searchField').on('input', '.searchFieldInput', function(e) {
		var searchFieldVal = e.target.value;

		if (searchFieldVal !== '') {
			$(this).closest('.searchFieldInputwrap').addClass('searchFieldInputwrapFilled');
		} else {
			$(this).closest('.searchFieldInputwrap').removeClass('searchFieldInputwrapFilled');
		}
	});

	$('.searchFieldClear').on('click', function() {
		$(this).closest('.searchFieldInputwrap')
			.removeClass('searchFieldInputwrapFilled')
			.find('.searchFieldInput').val('');
	});

	$(document).click(function(event) {
		if (!$(event.target).closest('.navMenuItemMore').length) {
			$('.navMenuItemMore').removeClass('active');
		}

		if (!$(event.target).closest('.userToolsWrapper').length) {
			$('.userToolsWrapper').removeClass('active');
		}

		if (!$(event.target).closest('.itemBoxMore').length) {
			$('.communicationItem').removeClass('active');
		}
	});

	// REACT RENDER POINT FOR POPUP
	$('#j-react-popup').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.userToolsWrapper').removeClass('active');

		var pageWrap = document.querySelector('html');
		var currentWidth = pageWrap.clientWidth;
		var reactPopup = document.getElementById('react-popup');
		var reactPopupFocusableEl = document.querySelector('#react-popup .screenHolder-focusable');

		//the same way as in react code in popupActions.js
		reactPopup.style.display = "flex";
		pageWrap.classList.add('react-popup-is-active');
		pageWrap.style.width = currentWidth + 'px';

		reactPopupFocusableEl && reactPopupFocusableEl.focus();
	});
});
