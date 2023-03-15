/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_widget_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_widget_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__widget_widget_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_widget__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_widget_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_widget_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__widget_widget_css__);




function app(window) {
  console.log("Chat-Widget starting");
  var defaultTitle = document.title;
  var globalObject = window[window["Chat-Widget"]];
  var queue = globalObject.q;
  var config = queue[0][0];
  var message;
  var isBlinking;

  if (queue) {
    var _ref, _config$userToken, _document$getElementB, _config$linkName, _config$urlLink, _config$popupMode, _config$startMode, _config$startMessageW, _config$hideClientSta, _config$inputPlacehol, _config$operatorPosit, _config$separateMessa, _config$disableUsedBu, _config$sendPreviewMe, _config$setDateTimeFo, _config$isMessageSoun, _config$isBlinking, _config$newMessageTex;

    if (!config.urlToWidget) {
      config = {
        urlToWidget: queue[0][0],
        urlToCss: queue[0][1],
        urlToButtonCss: queue[0][2],
        newMessageText: queue[0][3],
        userToken: queue[0][4],
        linkName: queue[0][5],
        urlLink: queue[0][6],
        popupMode: queue[0][7],
        startMode: queue[0][8],
        startMessageWithoutBot: queue[0][9],
        withoutLocation: queue[0][10],
        separeteOperatorNameAndTimeSent: queue[0][11],
        withoutAttach: queue[0][12],
        autoSendSpeechRecognizier: queue[0][13],
        pageUrl: queue[0][14],
        inputPlaceholder: queue[0][15],
        operatorPosition: queue[0][16],
        separateMessageAndButtons: queue[0][17],
        disableUsedButtons: queue[0][18],
        setDateTimeFormat: queue[0][19],
        isBlinking: queue[0][20],
        changeSendButtonIcon: queue[0][21],
        hideClientStartMessage: queue[0][22],
        isMessageSound: queue[0][23]
      };
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__widget_widget__["a" /* LoadButtonStyle */])(config.urlToButtonCss);
    var content = document.createElement('div');
    content.innerHTML = __WEBPACK_IMPORTED_MODULE_0__widget_widget_html___default.a;
    document.body.appendChild(content);
    var account = (_ref = (_config$userToken = config.userToken) !== null && _config$userToken !== void 0 ? _config$userToken : (_document$getElementB = document.getElementById('user-token')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) !== null && _ref !== void 0 ? _ref : null;
    var linkName = (_config$linkName = config.linkName) !== null && _config$linkName !== void 0 ? _config$linkName : "it-symphony";
    var linkUrl = (_config$urlLink = config.urlLink) !== null && _config$urlLink !== void 0 ? _config$urlLink : "http://it-symphony.com/";
    var popupMode = (_config$popupMode = config.popupMode) !== null && _config$popupMode !== void 0 ? _config$popupMode : "byUser";
    var startMode = (_config$startMode = config.startMode) !== null && _config$startMode !== void 0 ? _config$startMode : "auto";
    var startMessageWithoutBot = (_config$startMessageW = config.startMessageWithoutBot) !== null && _config$startMessageW !== void 0 ? _config$startMessageW : "Задайте ваш вопрос";
    var withoutLocation = config.withoutLocation;
    var separeteOperatorNameAndTimeSent = config.separeteOperatorNameAndTimeSent;
    var changeSendButtonIcon = config.changeSendButtonIcon;
    var hideClientStartMessage = (_config$hideClientSta = config.hideClientStartMessage) !== null && _config$hideClientSta !== void 0 ? _config$hideClientSta : false;
    var withoutAttach = config.withoutAttach;
    var autoSendSpeechRecognizier = config.autoSendSpeechRecognizier;
    var pageUrl = config.pageUrl;
    var inputPlaceholder = (_config$inputPlacehol = config.inputPlaceholder) !== null && _config$inputPlacehol !== void 0 ? _config$inputPlacehol : "Введите ваше сообщение";
    var operatorPosition = (_config$operatorPosit = config.operatorPosition) !== null && _config$operatorPosit !== void 0 ? _config$operatorPosit : "undefined";
    var separateMessageAndButtons = (_config$separateMessa = config.separateMessageAndButtons) !== null && _config$separateMessa !== void 0 ? _config$separateMessa : false;
    var disableUsedButtons = (_config$disableUsedBu = config.disableUsedButtons) !== null && _config$disableUsedBu !== void 0 ? _config$disableUsedBu : true;
    var sendPreviewMessage = (_config$sendPreviewMe = config.sendPreviewMessage) !== null && _config$sendPreviewMe !== void 0 ? _config$sendPreviewMe : false;
    var setDateTimeFormat = (_config$setDateTimeFo = config.setDateTimeFormat) !== null && _config$setDateTimeFo !== void 0 ? _config$setDateTimeFo : 'TimeWithoutSeconds';
    var isMessageSound = (_config$isMessageSoun = config.isMessageSound) !== null && _config$isMessageSoun !== void 0 ? _config$isMessageSoun : true;
    isBlinking = (_config$isBlinking = config.isBlinking) !== null && _config$isBlinking !== void 0 ? _config$isBlinking : true;
    var src = config.urlToWidget + "&css=" + config.urlToCss + "&account=".concat(account) + "&linkName=".concat(linkName) + "&linkUrl=".concat(linkUrl) + "&popupMode=".concat(popupMode) + "&startMode=".concat(startMode) + "&startMessageWithoutBot=".concat(startMessageWithoutBot) + "&withoutLocation=".concat(withoutLocation) + "&separeteOperatorNameAndTimeSent=".concat(separeteOperatorNameAndTimeSent) + "&changeSendButtonIcon=".concat(changeSendButtonIcon) + "&hideClientStartMessage=".concat(hideClientStartMessage) + "&withoutAttach=".concat(withoutAttach) + "&autoSendSpeechRecognizier=".concat(autoSendSpeechRecognizier) + "&input_placeholder=".concat(inputPlaceholder) + "&inline_operator_position=".concat(operatorPosition) + "&separate_message_and_buttons=".concat(separateMessageAndButtons) + "&disableUsedButtons=".concat(disableUsedButtons) + "&sendPreviewMessage=".concat(sendPreviewMessage) + "&setDateTimeFormat=".concat(setDateTimeFormat) + "&isBlinking=".concat(isBlinking) + "&isMessageSound=".concat(isMessageSound) + "&v=".concat("1.14.2-writer" || '') + "&parent=" + document.URL;
    message = (_config$newMessageTex = config.newMessageText) !== null && _config$newMessageTex !== void 0 ? _config$newMessageTex : "*New message*";

    if (pageUrl) {
      setWidgetHandler(src, pageUrl);
    } else if (document.readyState === "complete") {
      startChatWidget(src);
    } else {
      window.onload = function () {
        startChatWidget(src);
      };
    }
  } // get message to show 'new message' in tab name


  var eventer = window["addEventListener"];
  eventer("message", function (e) {
    if (e.data === "newMessage" && isBlinking && (document.hidden || document.querySelector("#chat-widget__content").getAttribute('style') === 'display: none;')) {
      setTitleBlinking(true);
      openChat();
    } else if (e.data === "focus" && isBlinking) {
      setTitleBlinking(false);
    } else if (e.data === "getGeolocation") {
      navigator.geolocation.getCurrentPosition(sendGeolocationEvent);
    } else if (e.data.type === "redirectToUrl") {
      redirectToUrl(e.data.url);
    } else if (e.data.type !== "webpackOk") {
      sendChatEvent(e.data);
    }
  });

  var redirectToUrl = function redirectToUrl(url) {
    var host = new URL(url).hostname;
    if (host === window.location.hostname) window.location.href = url;else {
      var link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  var sendGeolocationEvent = function sendGeolocationEvent(location) {
    var documentWindow = document.querySelector("iframe").contentWindow;
    var windowUrl = document.querySelector("iframe").src;
    var obj = JSON.stringify({
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
    documentWindow.postMessage(obj, windowUrl);
  };

  var sendChatEvent = function sendChatEvent(a) {
    if (a.length === 2) {
      dataLayer.push({
        'event': 'itsymphony event',
        'category': 'itsymphony',
        'action': a[0],
        'label': a[1]
      });
    }
  };

  var blur;

  var setTitleBlinking = function setTitleBlinking(enable) {
    if (enable === true && !blur) {
      setTimeout(function tick() {
        if (document.title == defaultTitle) {
          document.title = message;
        } else {
          document.title = defaultTitle;
        }

        ;
        blur = setTimeout(tick, 1000);
      }, 1000);
    } else if (enable === false) {
      clearTimeout(blur);
      blur = null;
      document.title = defaultTitle;
    }
  };

  var openChat = function openChat() {
    var button = document.getElementById("chat-widget__button--expand");

    if (getComputedStyle(button).display == 'block') {
      button.click();
    }
  };
}

var setWidgetHandler = function setWidgetHandler(src, pageUrl) {
  var currentUrl = location.href;
  onLocationChanged(src, pageUrl);
  setInterval(function () {
    if (currentUrl != location.href) {
      currentUrl = location.href;
      onLocationChanged(src, pageUrl);
    }
  }, 1000);
};

var startChatWidget = function startChatWidget(src) {
  Object(__WEBPACK_IMPORTED_MODULE_1__widget_widget__["b" /* Widget */])(src);
  console.log("Chat-Widget started", src);
};

var onLocationChanged = function onLocationChanged(src, pageUrl) {
  if (location.pathname.startsWith(pageUrl)) {
    startChatWidget(src);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__widget_widget__["b" /* Widget */])(null);
    console.log("Chat-Widget stopped");
  }
};

app(window);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-widget__container\">\r\n    <a id=\"chat-widget__button--expand\" class=\"chat-widget__button chat-widget__button--expand\">\r\n        <i class=\"chat-widget__button-icon chat-widget__button--expand-icon\">Задать вопрос</i>\r\n    </a>\r\n    <div id=\"chat-widget__content\" class=\"chat-widget__content\" style=\"display: none;\">\r\n        <a class=\"chat-widget__button chat-widget__button--close\">\r\n            <i class=\"chat-widget__button--close-icon\">+</i>\r\n        </a>\r\n        <iframe allow=\"microphone\"></iframe>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Widget;
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadButtonStyle;
var isWidgetLoaded = false;
function Widget(src) {
  var getExpandButton = function getExpandButton() {
    return document.getElementById("chat-widget__button--expand");
  };

  var getContent = function getContent() {
    return document.getElementById("chat-widget__content");
  };

  var loadWidget = function loadWidget() {
    var content = getContent();
    content.addEventListener("click", closeWidget);
    content.querySelector("iframe").src = src;
  };

  var openWidget = function openWidget() {
    if (!isWidgetLoaded) {
      isWidgetLoaded = true;
    }

    var content = getContent();
    var expandButton = getExpandButton();
    content.style.display = "block";
    expandButton.style.display = "none";
    document.getElementsByClassName("chat-widget__container")[0].classList.add("expanded");
  };

  var closeWidget = function closeWidget() {
    var content = getContent();
    var expandButton = getExpandButton();
    content.style.display = "none";
    expandButton.style.display = "block";
    document.getElementsByClassName("chat-widget__container")[0].classList.remove("expanded");
  };

  var init = function init() {
    //To avoid a bug in chrome where the widget is not displayed
    var ifrm = getContent().querySelector("iframe");

    ifrm.onload = function () {
      ifrm.style.display = "none";
      setTimeout(function () {
        ifrm.style.display = "block";
      }, 20);
    };

    var expandButton = getExpandButton();
    expandButton.addEventListener("click", openWidget);
    setTimeout(function () {
      expandButton.style.display = "block";
    }, 50);
  };

  var openWidgetByUrl = function openWidgetByUrl() {
    if (document.location.href.includes("#bot")) {
      setTimeout(function () {
        return openWidget();
      }, 100);
    }
  };

  var openWidgetByPopupMode = function openWidgetByPopupMode() {
    var urlParams = new URLSearchParams(src);
    var popupMode = urlParams.get('popupMode');

    if (popupMode === "auto") {
      setTimeout(function () {
        return openWidget();
      }, 100);
    }
  };

  var unLoadWidget = function unLoadWidget() {
    var content = getContent();
    content.removeEventListener("click", closeWidget);
    content.querySelector("iframe").src = "";
    var expandButton = getExpandButton();
    expandButton.removeEventListener("click", openWidget);
    setTimeout(function () {
      expandButton.style.display = "none";
    }, 50);
    closeWidget();
    isWidgetLoaded = false;
  };

  if (src) {
    init();
    openWidgetByUrl();
    openWidgetByPopupMode();
    loadWidget();
  } else if (isWidgetLoaded) {
    unLoadWidget();
  }
}
function LoadButtonStyle(src) {
  if ((src === null || src === void 0 ? void 0 : src.lenght) === 0) return;
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', src);
  document.head.appendChild(style);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!./widget.css", function() {
			var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!./widget.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-widget__container {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 99999;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button {\r\n    display: inline-block;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    background-color: #559ded;\r\n    border: none;\r\n    border-radius: 50%;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n    outline: 0;\r\n    text-transform: uppercase;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    vertical-align: middle;\r\n    -webkit-transition: 0.3s ease-out;\r\n    transition: 0.3s ease-out;\r\n}\r\n\r\n    .chat-widget__container .chat-widget__button:hover {\r\n        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n.chat-widget__container .chat-widget__button-icon {\r\n    display: inline-block;\r\n    width: inherit;\r\n    color: #fff;\r\n    font-size: 48px;\r\n    text-align: center;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n}\r\n\r\n.chat-widget__container .chat-widget__content {\r\n    width: 400px;\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n}\r\n\r\n.chat-widget__container .chat-widget__content iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button--expand {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: inline-block;\r\n    width: 56px;\r\n    height: 56px;\r\n    line-height: 54px;\r\n    margin: 10px;\r\n    z-index: 99999;\r\n    display: none;\r\n}   \r\n\r\n.chat-widget__container .chat-widget__button--close {\r\n    position: fixed;\r\n    top: 15px;\r\n    right: 410px;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 42px;\r\n    margin: 5px;\r\n    z-index: 1;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button--close-icon {\r\n    line-height: 30px;\r\n    margin-left: 6px;\r\n    margin-top: -4px;\r\n}\r\n\r\n@media(max-width: 475px) {\r\n    .chat-widget__container .chat-widget__content iframe {\r\n        right: 0px;\r\n        left: 0px;\r\n        position: fixed;\r\n    }\r\n\r\n    .chat-widget__container {\r\n        top: 0rem;\r\n        right: 0rem;\r\n    }\r\n\r\n    .chat-widget__container .chat-widget__content {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .chat-widget__container .chat-widget__button--close {\r\n        top: 0px;\r\n        right: 0px;\r\n    }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzUwNGZkNjA4NTI3M2RkMTdmNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldC93aWRnZXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5jc3M/YmFjNyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFRpdGxlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImdsb2JhbE9iamVjdCIsInF1ZXVlIiwicSIsImNvbmZpZyIsIm1lc3NhZ2UiLCJpc0JsaW5raW5nIiwidXJsVG9XaWRnZXQiLCJ1cmxUb0NzcyIsInVybFRvQnV0dG9uQ3NzIiwibmV3TWVzc2FnZVRleHQiLCJ1c2VyVG9rZW4iLCJsaW5rTmFtZSIsInVybExpbmsiLCJwb3B1cE1vZGUiLCJzdGFydE1vZGUiLCJzdGFydE1lc3NhZ2VXaXRob3V0Qm90Iiwid2l0aG91dExvY2F0aW9uIiwic2VwYXJldGVPcGVyYXRvck5hbWVBbmRUaW1lU2VudCIsIndpdGhvdXRBdHRhY2giLCJhdXRvU2VuZFNwZWVjaFJlY29nbml6aWVyIiwicGFnZVVybCIsImlucHV0UGxhY2Vob2xkZXIiLCJvcGVyYXRvclBvc2l0aW9uIiwic2VwYXJhdGVNZXNzYWdlQW5kQnV0dG9ucyIsImRpc2FibGVVc2VkQnV0dG9ucyIsInNldERhdGVUaW1lRm9ybWF0IiwiY2hhbmdlU2VuZEJ1dHRvbkljb24iLCJoaWRlQ2xpZW50U3RhcnRNZXNzYWdlIiwiaXNNZXNzYWdlU291bmQiLCJMb2FkQnV0dG9uU3R5bGUiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIndpZGdldEh0bWwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJhY2NvdW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImxpbmtVcmwiLCJzZW5kUHJldmlld01lc3NhZ2UiLCJzcmMiLCJwcm9jZXNzIiwiVVJMIiwic2V0V2lkZ2V0SGFuZGxlciIsInJlYWR5U3RhdGUiLCJzdGFydENoYXRXaWRnZXQiLCJvbmxvYWQiLCJldmVudGVyIiwiZSIsImRhdGEiLCJoaWRkZW4iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2V0VGl0bGVCbGlua2luZyIsIm9wZW5DaGF0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzZW5kR2VvbG9jYXRpb25FdmVudCIsInR5cGUiLCJyZWRpcmVjdFRvVXJsIiwidXJsIiwic2VuZENoYXRFdmVudCIsImhvc3QiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnRXaW5kb3ciLCJjb250ZW50V2luZG93Iiwid2luZG93VXJsIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicG9zdE1lc3NhZ2UiLCJhIiwibGVuZ3RoIiwiZGF0YUxheWVyIiwicHVzaCIsImJsdXIiLCJlbmFibGUiLCJzZXRUaW1lb3V0IiwidGljayIsImNsZWFyVGltZW91dCIsImJ1dHRvbiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiY3VycmVudFVybCIsIm9uTG9jYXRpb25DaGFuZ2VkIiwic2V0SW50ZXJ2YWwiLCJXaWRnZXQiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJpc1dpZGdldExvYWRlZCIsImdldEV4cGFuZEJ1dHRvbiIsImdldENvbnRlbnQiLCJsb2FkV2lkZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlV2lkZ2V0Iiwib3BlbldpZGdldCIsImV4cGFuZEJ1dHRvbiIsInN0eWxlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluaXQiLCJpZnJtIiwib3BlbldpZGdldEJ5VXJsIiwiaW5jbHVkZXMiLCJvcGVuV2lkZ2V0QnlQb3B1cE1vZGUiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJ1bkxvYWRXaWRnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ2h0Iiwic2V0QXR0cmlidXRlIiwiaGVhZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxLQUE5QjtBQUNBLE1BQU1DLFlBQVksR0FBR04sTUFBTSxDQUFDQSxNQUFNLENBQUMsYUFBRCxD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6IndpZGdldC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNTA0ZmQ2MDg1MjczZGQxN2Y1OSIsImltcG9ydCB3aWRnZXRIdG1sIGZyb20gXCIuL3dpZGdldC93aWRnZXQuaHRtbFwiO1xyXG5pbXBvcnQge1dpZGdldCwgTG9hZEJ1dHRvblN0eWxlfSBmcm9tIFwiLi93aWRnZXQvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3dpZGdldC93aWRnZXQuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBhcHAod2luZG93KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoYXQtV2lkZ2V0IHN0YXJ0aW5nXCIpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xyXG4gICAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gd2luZG93W3dpbmRvd1tcIkNoYXQtV2lkZ2V0XCJdXTtcclxuICAgIGNvbnN0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnE7XHJcbiAgICB2YXIgY29uZmlnID0gcXVldWVbMF1bMF07XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGxldCBpc0JsaW5raW5nO1xyXG4gICAgaWYocXVldWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFjb25maWcudXJsVG9XaWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmxUb1dpZGdldDogcXVldWVbMF1bMF0sXHJcbiAgICAgICAgICAgICAgICB1cmxUb0NzczogcXVldWVbMF1bMV0sXHJcbiAgICAgICAgICAgICAgICB1cmxUb0J1dHRvbkNzczogcXVldWVbMF1bMl0sXHJcbiAgICAgICAgICAgICAgICBuZXdNZXNzYWdlVGV4dDogcXVldWVbMF1bM10sXHJcbiAgICAgICAgICAgICAgICB1c2VyVG9rZW46IHF1ZXVlWzBdWzRdLFxyXG4gICAgICAgICAgICAgICAgbGlua05hbWU6IHF1ZXVlWzBdWzVdLFxyXG4gICAgICAgICAgICAgICAgdXJsTGluazogcXVldWVbMF1bNl0sXHJcbiAgICAgICAgICAgICAgICBwb3B1cE1vZGU6IHF1ZXVlWzBdWzddLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRNb2RlOiBxdWV1ZVswXVs4XSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TWVzc2FnZVdpdGhvdXRCb3Q6IHF1ZXVlWzBdWzldLCBcclxuICAgICAgICAgICAgICAgIHdpdGhvdXRMb2NhdGlvbjogcXVldWVbMF1bMTBdLCBcclxuICAgICAgICAgICAgICAgIHNlcGFyZXRlT3BlcmF0b3JOYW1lQW5kVGltZVNlbnQ6IHF1ZXVlWzBdWzExXSxcclxuICAgICAgICAgICAgICAgIHdpdGhvdXRBdHRhY2g6IHF1ZXVlWzBdWzEyXSxcclxuICAgICAgICAgICAgICAgIGF1dG9TZW5kU3BlZWNoUmVjb2duaXppZXI6IHF1ZXVlWzBdWzEzXSxcclxuICAgICAgICAgICAgICAgIHBhZ2VVcmw6IHF1ZXVlWzBdWzE0XSxcclxuICAgICAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IHF1ZXVlWzBdWzE1XSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yUG9zaXRpb246IHF1ZXVlWzBdWzE2XSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRlTWVzc2FnZUFuZEJ1dHRvbnM6IHF1ZXVlWzBdWzE3XSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVVc2VkQnV0dG9uczogcXVldWVbMF1bMThdLFxyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZVRpbWVGb3JtYXQ6IHF1ZXVlWzBdWzE5XSxcclxuICAgICAgICAgICAgICAgIGlzQmxpbmtpbmc6IHF1ZXVlWzBdWzIwXSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNlbmRCdXR0b25JY29uOiBxdWV1ZVswXVsyMV0sXHJcbiAgICAgICAgICAgICAgICBoaWRlQ2xpZW50U3RhcnRNZXNzYWdlOiBxdWV1ZVswXVsyMl0sXHJcbiAgICAgICAgICAgICAgICBpc01lc3NhZ2VTb3VuZDogcXVldWVbMF1bMjNdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2FkQnV0dG9uU3R5bGUoY29uZmlnLnVybFRvQnV0dG9uQ3NzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHdpZGdldEh0bWw7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGNvbmZpZy51c2VyVG9rZW4gPz8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItdG9rZW4nKT8udmFsdWUgPz8gbnVsbDtcclxuICAgICAgICBjb25zdCBsaW5rTmFtZSA9IGNvbmZpZy5saW5rTmFtZSA/PyBcIml0LXN5bXBob255XCI7XHJcbiAgICAgICAgY29uc3QgbGlua1VybCA9IGNvbmZpZy51cmxMaW5rID8/IFwiaHR0cDovL2l0LXN5bXBob255LmNvbS9cIjtcclxuICAgICAgICBjb25zdCBwb3B1cE1vZGUgPSBjb25maWcucG9wdXBNb2RlID8/IFwiYnlVc2VyXCI7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRNb2RlID0gY29uZmlnLnN0YXJ0TW9kZSA/PyBcImF1dG9cIjtcclxuICAgICAgICBjb25zdCBzdGFydE1lc3NhZ2VXaXRob3V0Qm90ID0gY29uZmlnLnN0YXJ0TWVzc2FnZVdpdGhvdXRCb3QgPz8gXCLQl9Cw0LTQsNC50YLQtSDQstCw0Ygg0LLQvtC/0YDQvtGBXCI7XHJcbiAgICAgICAgY29uc3Qgd2l0aG91dExvY2F0aW9uID0gY29uZmlnLndpdGhvdXRMb2NhdGlvbjtcclxuICAgICAgICBjb25zdCBzZXBhcmV0ZU9wZXJhdG9yTmFtZUFuZFRpbWVTZW50ID0gY29uZmlnLnNlcGFyZXRlT3BlcmF0b3JOYW1lQW5kVGltZVNlbnQ7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlU2VuZEJ1dHRvbkljb24gPSBjb25maWcuY2hhbmdlU2VuZEJ1dHRvbkljb247XHJcbiAgICAgICAgY29uc3QgaGlkZUNsaWVudFN0YXJ0TWVzc2FnZSA9IGNvbmZpZy5oaWRlQ2xpZW50U3RhcnRNZXNzYWdlID8/IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHdpdGhvdXRBdHRhY2ggPSBjb25maWcud2l0aG91dEF0dGFjaDtcclxuICAgICAgICBjb25zdCBhdXRvU2VuZFNwZWVjaFJlY29nbml6aWVyID0gY29uZmlnLmF1dG9TZW5kU3BlZWNoUmVjb2duaXppZXI7XHJcbiAgICAgICAgY29uc3QgcGFnZVVybCA9IGNvbmZpZy5wYWdlVXJsO1xyXG4gICAgICAgIGNvbnN0IGlucHV0UGxhY2Vob2xkZXIgPSBjb25maWcuaW5wdXRQbGFjZWhvbGRlciA/PyBcItCS0LLQtdC00LjRgtC1INCy0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVwiO1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdG9yUG9zaXRpb24gPSBjb25maWcub3BlcmF0b3JQb3NpdGlvbiA/PyBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIGNvbnN0IHNlcGFyYXRlTWVzc2FnZUFuZEJ1dHRvbnMgPSBjb25maWcuc2VwYXJhdGVNZXNzYWdlQW5kQnV0dG9ucyA/PyBmYWxzZTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlVXNlZEJ1dHRvbnMgPSBjb25maWcuZGlzYWJsZVVzZWRCdXR0b25zID8/IHRydWU7XHJcbiAgICAgICAgY29uc3Qgc2VuZFByZXZpZXdNZXNzYWdlID0gY29uZmlnLnNlbmRQcmV2aWV3TWVzc2FnZSA/PyBmYWxzZTtcclxuICAgICAgICBjb25zdCBzZXREYXRlVGltZUZvcm1hdCA9IGNvbmZpZy5zZXREYXRlVGltZUZvcm1hdCA/PyAnVGltZVdpdGhvdXRTZWNvbmRzJztcclxuICAgICAgICBjb25zdCBpc01lc3NhZ2VTb3VuZCA9IGNvbmZpZy5pc01lc3NhZ2VTb3VuZCA/PyB0cnVlO1xyXG4gICAgICAgIGlzQmxpbmtpbmcgPSBjb25maWcuaXNCbGlua2luZyA/PyB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGNvbmZpZy51cmxUb1dpZGdldCArIFwiJmNzcz1cIiArIGNvbmZpZy51cmxUb0NzcyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmYWNjb3VudD0ke2FjY291bnR9YCArIGAmbGlua05hbWU9JHtsaW5rTmFtZX1gICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmbGlua1VybD0ke2xpbmtVcmx9YCArIGAmcG9wdXBNb2RlPSR7cG9wdXBNb2RlfWAgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZzdGFydE1vZGU9JHtzdGFydE1vZGV9YCArIGAmc3RhcnRNZXNzYWdlV2l0aG91dEJvdD0ke3N0YXJ0TWVzc2FnZVdpdGhvdXRCb3R9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmd2l0aG91dExvY2F0aW9uPSR7d2l0aG91dExvY2F0aW9ufWAgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZzZXBhcmV0ZU9wZXJhdG9yTmFtZUFuZFRpbWVTZW50PSR7c2VwYXJldGVPcGVyYXRvck5hbWVBbmRUaW1lU2VudH1gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZjaGFuZ2VTZW5kQnV0dG9uSWNvbj0ke2NoYW5nZVNlbmRCdXR0b25JY29ufWAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJmhpZGVDbGllbnRTdGFydE1lc3NhZ2U9JHtoaWRlQ2xpZW50U3RhcnRNZXNzYWdlfWAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJndpdGhvdXRBdHRhY2g9JHt3aXRob3V0QXR0YWNofWAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJmF1dG9TZW5kU3BlZWNoUmVjb2duaXppZXI9JHthdXRvU2VuZFNwZWVjaFJlY29nbml6aWVyfWAgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZpbnB1dF9wbGFjZWhvbGRlcj0ke2lucHV0UGxhY2Vob2xkZXJ9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmaW5saW5lX29wZXJhdG9yX3Bvc2l0aW9uPSR7b3BlcmF0b3JQb3NpdGlvbn1gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZzZXBhcmF0ZV9tZXNzYWdlX2FuZF9idXR0b25zPSR7c2VwYXJhdGVNZXNzYWdlQW5kQnV0dG9uc31gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZkaXNhYmxlVXNlZEJ1dHRvbnM9JHtkaXNhYmxlVXNlZEJ1dHRvbnN9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmc2VuZFByZXZpZXdNZXNzYWdlPSR7c2VuZFByZXZpZXdNZXNzYWdlfWAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJnNldERhdGVUaW1lRm9ybWF0PSR7c2V0RGF0ZVRpbWVGb3JtYXR9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmaXNCbGlua2luZz0ke2lzQmxpbmtpbmd9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmaXNNZXNzYWdlU291bmQ9JHtpc01lc3NhZ2VTb3VuZH1gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCZ2PSR7cHJvY2Vzcy5lbnYuQlVJTERfVkVSU0lPTiB8fCAnJ31gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImcGFyZW50PVwiICsgZG9jdW1lbnQuVVJMO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBjb25maWcubmV3TWVzc2FnZVRleHQgPz8gXCIqTmV3IG1lc3NhZ2UqXCI7XHJcbiAgICAgICAgaWYgKHBhZ2VVcmwpIHtcclxuICAgICAgICAgICAgc2V0V2lkZ2V0SGFuZGxlcihzcmMsIHBhZ2VVcmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGF0V2lkZ2V0KHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRDaGF0V2lkZ2V0KHNyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IG1lc3NhZ2UgdG8gc2hvdyAnbmV3IG1lc3NhZ2UnIGluIHRhYiBuYW1lXHJcbiAgICBjb25zdCBldmVudGVyID0gd2luZG93W1wiYWRkRXZlbnRMaXN0ZW5lclwiXTtcclxuICAgIGV2ZW50ZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YSA9PT0gXCJuZXdNZXNzYWdlXCIgJiYgaXNCbGlua2luZyAmJiAoZG9jdW1lbnQuaGlkZGVuIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhdC13aWRnZXRfX2NvbnRlbnRcIikuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAnZGlzcGxheTogbm9uZTsnKSkge1xyXG4gICAgICAgICAgICBzZXRUaXRsZUJsaW5raW5nKHRydWUpO1xyXG4gICAgICAgICAgICBvcGVuQ2hhdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhID09PSBcImZvY3VzXCIgJiYgaXNCbGlua2luZykge1xyXG4gICAgICAgICAgICBzZXRUaXRsZUJsaW5raW5nKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJnZXRHZW9sb2NhdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2VuZEdlb2xvY2F0aW9uRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09IFwicmVkaXJlY3RUb1VybFwiKSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9VcmwoZS5kYXRhLnVybCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSAhPT0gXCJ3ZWJwYWNrT2tcIikge1xyXG4gICAgICAgICAgICBzZW5kQ2hhdEV2ZW50KGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3RUb1VybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBsZXQgaG9zdCA9IChuZXcgVVJMKHVybCkpLmhvc3RuYW1lO1xyXG4gICAgICAgIGlmIChob3N0ID09PSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmRHZW9sb2NhdGlvbkV2ZW50ID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKS5jb250ZW50V2luZG93O1xyXG4gICAgICAgIGxldCB3aW5kb3dVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLnNyYztcclxuICAgICAgICBsZXQgb2JqID0gSlNPTi5zdHJpbmdpZnkoeyBjb29yZHM6IHsgbGF0aXR1ZGU6IGxvY2F0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgbG9uZ2l0dWRlOiBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlIH19KTtcclxuICAgICAgICBkb2N1bWVudFdpbmRvdy5wb3N0TWVzc2FnZShvYmosIHdpbmRvd1VybCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZENoYXRFdmVudCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdldmVudCc6ICdpdHN5bXBob255IGV2ZW50JyxcclxuICAgICAgICAgICAgICAgICdjYXRlZ29yeSc6ICdpdHN5bXBob255JyxcclxuICAgICAgICAgICAgICAgICdhY3Rpb24nOiBhWzBdLFxyXG4gICAgICAgICAgICAgICAgJ2xhYmVsJzogYVsxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsdXI7XHJcbiAgICBjb25zdCBzZXRUaXRsZUJsaW5raW5nID0gZnVuY3Rpb24gKGVuYWJsZSkge1xyXG4gICAgICAgIGlmIChlbmFibGUgPT09IHRydWUgJiYgIWJsdXIpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiB0aWNrKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnRpdGxlID09IGRlZmF1bHRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gZGVmYXVsdFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJsdXIgPSBzZXRUaW1lb3V0KHRpY2ssIDEwMDApO1xyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5hYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYmx1cik7XHJcbiAgICAgICAgICAgIGJsdXIgPSBudWxsO1xyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGRlZmF1bHRUaXRsZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBvcGVuQ2hhdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXdpZGdldF9fYnV0dG9uLS1leHBhbmRcIik7XHJcbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoYnV0dG9uKS5kaXNwbGF5ID09ICdibG9jaycpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3Qgc2V0V2lkZ2V0SGFuZGxlciA9IChzcmMsIHBhZ2VVcmwpID0+IHtcclxuICAgIGxldCBjdXJyZW50VXJsID0gbG9jYXRpb24uaHJlZjtcclxuICAgIG9uTG9jYXRpb25DaGFuZ2VkKHNyYywgcGFnZVVybClcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVcmwgIT0gbG9jYXRpb24uaHJlZikge1xyXG4gICAgICAgICAgICBjdXJyZW50VXJsID0gbG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgb25Mb2NhdGlvbkNoYW5nZWQoc3JjLCBwYWdlVXJsKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMDApXHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0Q2hhdFdpZGdldCA9IChzcmMpID0+IHtcclxuICAgIFdpZGdldChzcmMpXHJcbiAgICBjb25zb2xlLmxvZyhcIkNoYXQtV2lkZ2V0IHN0YXJ0ZWRcIiwgc3JjKTtcclxufVxyXG5cclxuY29uc3Qgb25Mb2NhdGlvbkNoYW5nZWQgPSAoc3JjLCBwYWdlVXJsKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChwYWdlVXJsKSkge1xyXG4gICAgICAgIHN0YXJ0Q2hhdFdpZGdldChzcmMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgV2lkZ2V0KG51bGwpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGF0LVdpZGdldCBzdG9wcGVkXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hcHAod2luZG93KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGEgaWQ9XFxcImNoYXQtd2lkZ2V0X19idXR0b24tLWV4cGFuZFxcXCIgY2xhc3M9XFxcImNoYXQtd2lkZ2V0X19idXR0b24gY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kXFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fYnV0dG9uLWljb24gY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kLWljb25cXFwiPtCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YE8L2k+XFxyXFxuICAgIDwvYT5cXHJcXG4gICAgPGRpdiBpZD1cXFwiY2hhdC13aWRnZXRfX2NvbnRlbnRcXFwiIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fY29udGVudFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fYnV0dG9uIGNoYXQtd2lkZ2V0X19idXR0b24tLWNsb3NlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiY2hhdC13aWRnZXRfX2J1dHRvbi0tY2xvc2UtaWNvblxcXCI+KzwvaT5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxpZnJhbWUgYWxsb3c9XFxcIm1pY3JvcGhvbmVcXFwiPjwvaWZyYW1lPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXQvd2lkZ2V0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGlzV2lkZ2V0TG9hZGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gV2lkZ2V0KHNyYykge1xyXG4gICAgY29uc3QgZ2V0RXhwYW5kQnV0dG9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC13aWRnZXRfX2NvbnRlbnRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRXaWRnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xyXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2lkZ2V0KTtcclxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuc3JjID0gc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5XaWRnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaXNXaWRnZXRMb2FkZWQpIHtcclxuICAgICAgICAgICAgaXNXaWRnZXRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoKTtcclxuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBnZXRFeHBhbmRCdXR0b24oKTtcclxuXHJcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGV4cGFuZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXQtd2lkZ2V0X19jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZVdpZGdldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XHJcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZ2V0RXhwYW5kQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGV4cGFuZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGF0LXdpZGdldF9fY29udGFpbmVyXCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1RvIGF2b2lkIGEgYnVnIGluIGNocm9tZSB3aGVyZSB0aGUgd2lkZ2V0IGlzIG5vdCBkaXNwbGF5ZWRcclxuICAgICAgICBjb25zdCBpZnJtID0gZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgaWZybS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGlmcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBzZXRUaW1lb3V0KCgpID0+IHsgaWZybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyB9LCAyMCkgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBnZXRFeHBhbmRCdXR0b24oKTtcclxuICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5XaWRnZXQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW5XaWRnZXRCeVVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIiNib3RcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcGVuV2lkZ2V0KCksIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5XaWRnZXRCeVBvcHVwTW9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc3JjKTtcclxuICAgICAgICBjb25zdCBwb3B1cE1vZGUgPSB1cmxQYXJhbXMuZ2V0KCdwb3B1cE1vZGUnKTtcclxuICAgICAgICBpZiAocG9wdXBNb2RlID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wZW5XaWRnZXQoKSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdW5Mb2FkV2lkZ2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoKTtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVdpZGdldCk7XHJcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLnNyYyA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGdldEV4cGFuZEJ1dHRvbigpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbldpZGdldCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgNTApO1xyXG5cclxuICAgICAgICBjbG9zZVdpZGdldCgpXHJcbiAgICAgICAgaXNXaWRnZXRMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3JjKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIG9wZW5XaWRnZXRCeVVybCgpO1xyXG4gICAgICAgIG9wZW5XaWRnZXRCeVBvcHVwTW9kZSgpO1xyXG4gICAgICAgIGxvYWRXaWRnZXQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzV2lkZ2V0TG9hZGVkKXtcclxuICAgICAgICB1bkxvYWRXaWRnZXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRCdXR0b25TdHlsZShzcmMpIHtcclxuICAgIGlmKHNyYz8ubGVuZ2h0ID09PSAwKSByZXR1cm47XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHNyYyk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2lkZ2V0L3dpZGdldC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpZGdldC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lkZ2V0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aWRnZXQuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXQvd2lkZ2V0LmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoYXQtd2lkZ2V0X19jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OWRlZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiAgICAuY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbi1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2NvbnRlbnQgaWZyYW1lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDU2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn0gICBcXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbi0tY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgcmlnaHQ6IDQxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtd2lkZ2V0X19jb250YWluZXIgLmNoYXQtd2lkZ2V0X19idXR0b24tLWNsb3NlLWljb24ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDc1cHgpIHtcXHJcXG4gICAgLmNoYXQtd2lkZ2V0X19jb250YWluZXIgLmNoYXQtd2lkZ2V0X19jb250ZW50IGlmcmFtZSB7XFxyXFxuICAgICAgICByaWdodDogMHB4O1xcclxcbiAgICAgICAgbGVmdDogMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaGF0LXdpZGdldF9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHRvcDogMHJlbTtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fY29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbi0tY2xvc2Uge1xcclxcbiAgICAgICAgdG9wOiAwcHg7XFxyXFxuICAgICAgICByaWdodDogMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL3dpZGdldC93aWRnZXQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9