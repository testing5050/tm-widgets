var widgetsLib =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var service = {
  initialize: initialize,
  sendEvent: sendEvent,
  getStringEventHandler: getStringEventHandler
};
exports.default = service;
var TM_TRACKER_ID = exports.TM_TRACKER_ID = 'UA-78315612-1';
var DEVPORT_TRACKER_ID = exports.DEVPORT_TRACKER_ID = 'UA-114077619-1';
var DEVPORT_TRACKER_ALIAS = exports.DEVPORT_TRACKER_ALIAS = 'tmOpenPlatform';

var SHARED_ID_ATTRIBUTE_NAME = exports.SHARED_ID_ATTRIBUTE_NAME = 'SHAREDID';

var EVENT_CATEGORY = exports.EVENT_CATEGORY = {
  MAP_WIDGET: 'MapWidget',
  CALENDAR_WIDGET: 'CalendarWidget',
  COUNTDOWN_WIDGET: 'CountdownWidget',
  EVENT_DISCOVERY_WIDGET: 'EventDiscoveryWidget'
};

var EVENT_NAME = exports.EVENT_NAME = {
  RENDERED: 'rendered',
  LOAD: 'load',
  BUY_BUTTON_CLICK: 'buyButtonClick',
  EVENT_NAME_CLICK: 'eventNameClick'
};

var CUSTOM_DIMENSIONS = exports.CUSTOM_DIMENSIONS = {
  API_KEY: 'dimension1'
};

var SHARED_ID_FOR_WIDGET = exports.SHARED_ID_FOR_WIDGET = {
  CALENDAR: 'TM-WIDGET-CALENDAR',
  COUNTDOWN: 'TM-WIDGET-COUNTDOWN',
  DISCOVERY: 'TM-WIDGET-DISCOVERY',
  MAP: 'TM-WIDGET-MAP'
};

function sendEvent(eventOptions) {
  ga(DEVPORT_TRACKER_ALIAS + '.send', 'event', eventOptions);
};

function initialize(widgetCategory) {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', TM_TRACKER_ID, 'auto');
  ga('create', DEVPORT_TRACKER_ID, 'auto', DEVPORT_TRACKER_ALIAS);

  ga('send', 'pageview');
  service.sendEvent({
    eventCategory: widgetCategory,
    eventAction: EVENT_NAME.LOAD
  });
};

function getStringEventHandler(eventOptions) {
  return 'ga(\'' + DEVPORT_TRACKER_ALIAS + '.send\', \'event\', ' + JSON.stringify(eventOptions).replace(/"/g, '\'') + ');';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectorControls = function SelectorControls(root, selectorClass, selectorContent, attribute, update) {
	_classCallCheck(this, SelectorControls);

	if (!root) return;
	this.SelectorRoot = root;
	this.SelectorClass = selectorClass;
	this.SelectorContent = selectorContent;
	this.SelectorContainer = document.createElement("div");
	this.SelectorContainer.classList.add(this.SelectorClass);
	this.SelectorContainer.innerHTML = this.SelectorContent;
	this.SelectorRoot.appendChild(this.SelectorContainer);

	this.selTitle = this.SelectorContainer.getElementsByTagName("span")[0];
	this.selContent = this.selTitle.nextElementSibling;

	this.selContent.addEventListener("click", function (e) {
		if (e.target.classList.contains('selector-content') === false) {
			this.parentNode.getElementsByClassName('selector-title')[0].innerHTML = e.target.innerHTML;
			this.parentNode.getElementsByClassName('selector-title')[0].setAttribute("w-classificationid", e.target.getAttribute('w-classificationId'));
			this.parentNode.getElementsByClassName('selector-title')[0].classList.remove('open');
			this.parentNode.getElementsByClassName('selector-content')[0].classList.remove('show');
			if (attribute == 'period') this.parentNode.parentNode.parentNode.parentNode.setAttribute('w-period', e.target.getAttribute('w-period'));
			if (attribute == 'w-period') this.parentNode.parentNode.parentNode.parentNode.setAttribute('w-period-week', e.target.getAttribute('w-period-week'));
			if (attribute == 'classificationId') this.parentNode.parentNode.parentNode.parentNode.setAttribute('w-classificationId', e.target.getAttribute('w-classificationId'));

			/* Month fix by dates changing */
			if (this.parentNode.classList.contains('sliderLeftSelector') === true) {
				if (this.parentNode.nextElementSibling.querySelector('.selector-title').getAttribute('w-classificationid') != undefined) {
					if (this.parentNode.nextElementSibling.querySelector('.selector-title').getAttribute('w-classificationid') != this.parentNode.parentNode.parentNode.parentNode.getAttribute("w-classificationId")) {
						this.parentNode.parentNode.parentNode.parentNode.setAttribute("w-classificationId", this.parentNode.nextElementSibling.querySelector('.selector-title').getAttribute('w-classificationid'));
					}
				}
			}

			update();
		} else {
			console.log(this.classList);
			if (this.classList.contains("show")) {
				this.classList.remove("show");
				this.prevElementSibling.classList.remove("open");
			}
		}
	});

	this.selTitle.addEventListener("click", function (e) {
		this.nextElementSibling.classList.add("show");
		if (this.classList.contains("open")) {
			this.classList.remove("open");
			this.nextElementSibling.classList.remove("show");
		} else {
			this.classList.add("open");
		}
		this.nextElementSibling.focus();
	}, false);

	this.selContent.addEventListener("blur", function (e) {
		var self = this;
		if (self.classList.contains("show")) {
			setTimeout(function () {
				self.classList.remove("show");
				self.previousElementSibling.classList.remove("open");
			}, 127);
		}
	}, false);
};

exports.default = SelectorControls;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(27);

var service = {
  addParamToUrl: addParamToUrl
};
exports.default = service;


function addParamToUrl(urlString, key, value) {
  var url = new URL(urlString);
  url.searchParams.append(key, value);
  return url.href;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(17);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var before = __webpack_require__(18);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _widgetsAnalytics = __webpack_require__(1);

var _widgetsAnalytics2 = _interopRequireDefault(_widgetsAnalytics);

var _url3 = __webpack_require__(3);

var _url4 = _interopRequireDefault(_url3);

var _SelectorControls = __webpack_require__(2);

var _SelectorControls2 = _interopRequireDefault(_SelectorControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MonthScheduler = function () {
  _createClass(MonthScheduler, [{
    key: 'getJSON',
    value: function getJSON(handler) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apiUrl;
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "GET";

      attrs = Object.keys(attrs).map(function (key) {
        return key + '=' + attrs[key];
      }).join("&");

      url = [url, attrs].join("?");
      var thisSchedulerRoot = this.monthSchedulerRoot.parentNode.parentNode.parentNode;
      if (thisSchedulerRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + thisSchedulerRoot.getAttribute('w-postalcodeapi');
      url += '&sort=date,asc';

      this.xmlHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      if (method == "POST") {
        this.xmlHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      this.xmlHTTP.widget = this;
      this.xmlHTTP.onreadystatechange = handler;
      this.xmlHTTP.open(method, url, true);
      this.xmlHTTP.send();
    }
  }, {
    key: 'getJsonAsync',
    value: function getJsonAsync(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
          if (xhr.status === 200) {
            var result = JSON.parse(xhr.response);
            resolve(result);
          } else {
            reject("Error loading JSON!");
          }
        };
        xhr.onerror = function () {
          reject("Error loading JSON!");
        };
        xhr.send();
      });
    }
  }, {
    key: 'formatDate',
    value: function formatDate(date) {
      var result = '';
      if (!date.day) return result; // Day is required

      function LZ(x) {
        return (x < 0 || x > 9 ? "" : "0") + x;
      }
      var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayArray = date.day.split('-'),
          d = parseInt(dayArray[2]),
          M = parseInt(dayArray[1]);

      // var E = new Date(date.day).getDay();
      var E = new Date(+date.day.split('-')[0], +date.day.split('-')[1] - 1, +date.day.split('-')[2]).getDay();
      result = DAY_NAMES[E] + ', ' + MONTH_NAMES[M - 1] + ' ' + d + ', ' + dayArray[0];

      if (!date.time) return result;

      var timeArray = date.time.split(':'),
          H = parseInt(timeArray[0]),
          m = timeArray[1],
          a = "AM";

      if (H > 11) a = "PM";
      if (H == 0) {
        H = 12;
      } else if (H > 12) {
        H = H - 12;
      }

      return result + ' ' + LZ(H) + ':' + m + ' ' + a;
    }
  }, {
    key: 'addScroll',
    value: function addScroll() {
      (function (n, t) {
        function u(n) {
          n.hasOwnProperty("data-simple-scrollbar") || Object.defineProperty(n, "data-simple-scrollbar", new SimpleScrollbar(n));
        }function e(n, i) {
          function f(n) {
            var t = n.pageY - u;u = n.pageY;r(function () {
              i.el.scrollTop += t / i.scrollRatio;
            });
          }function e() {
            n.classList.remove("ss-grabbed");t.body.classList.remove("ss-grabbed");t.removeEventListener("mousemove", f);t.removeEventListener("mouseup", e);
          }var u;n.addEventListener("mousedown", function (i) {
            return u = i.pageY, n.classList.add("ss-grabbed"), t.body.classList.add("ss-grabbed"), t.addEventListener("mousemove", f), t.addEventListener("mouseup", e), !1;
          });
        }function i(n) {
          for (this.target = n, this.bar = '<div class="ss-scroll">', this.wrapper = t.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = t.createElement("div"), this.el.setAttribute("class", "ss-content"), this.wrapper.appendChild(this.el); this.target.firstChild;) {
            this.el.appendChild(this.target.firstChild);
          }this.target.appendChild(this.wrapper);this.target.insertAdjacentHTML("beforeend", this.bar);this.bar = this.target.lastChild;e(this.bar, this);this.moveBar();this.el.addEventListener("scroll", this.moveBar.bind(this));this.el.addEventListener("mouseenter", this.moveBar.bind(this));this.target.classList.add("ss-container");
        }function f() {
          for (var i = t.querySelectorAll("*[ss-container]"), n = 0; n < i.length; n++) {
            u(i[n]);
          }
        }var r = n.requestAnimationFrame || n.setImmediate || function (n) {
          return setTimeout(n, 0);
        };i.prototype = { moveBar: function moveBar() {
            var t = this.el.scrollHeight,
                i = this.el.clientHeight,
                n = this;this.scrollRatio = i / t;r(function () {
              n.bar.style.cssText = "height:" + i / t * 100 + "%; top:" + n.el.scrollTop / t * 100 + "%;right:-" + (n.target.clientWidth - n.bar.clientWidth) + "px;";
            });
          } };t.addEventListener("DOMContentLoaded", f);i.initEl = u;i.initAll = f;n.SimpleScrollbar = i;
      })(window, document);
      var scrollRoot = document.querySelectorAll(".ss");
      var maxL = scrollRoot.length;
      for (var ml = 0; ml < maxL; ml++) {
        SimpleScrollbar.initEl(scrollRoot[ml]);
      }
    }
  }, {
    key: 'initMessage',
    value: function initMessage(schedulerRoot) {
      var _this = this;

      this.eventsRootContainer = schedulerRoot;
      this.messageDialogContainer = document.createElement('div');
      this.messageDialogContainer.classList.add("event-message-container");
      this.messageDialog = document.createElement('div');
      this.messageDialog.classList.add("event-message_");
      this.messageContent = document.createElement('div');
      this.messageContent.classList.add("event-message__content");

      var messageClose = document.createElement('div');
      messageClose.classList.add("event-message__btn");
      messageClose.addEventListener("click", function () {
        _this.hideMessage();
      });

      this.messageDialog.appendChild(this.messageContent);
      this.messageDialog.appendChild(messageClose);
      this.messageDialogContainer.appendChild(this.messageDialog);
      this.eventsRootContainer.appendChild(this.messageDialogContainer);
    }
  }, {
    key: 'showMessage',
    value: function showMessage(message, hideMessageWithoutDelay) {

      if (message.length) {
        this.hideMessageWithoutDelay = hideMessageWithoutDelay;
        this.messageContent.innerHTML = message;
        this.messageDialog.classList.add("event-message_-visible");
        if (this.messageTimeout) {
          clearTimeout(this.messageTimeout); // Clear timeout if before 'hideMessageWithDelay' was called
        }
      }
    }
  }, {
    key: 'hideMessageWithDelay',
    value: function hideMessageWithDelay(delay) {
      var _this2 = this;

      if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout if this method was called before
      this.messageTimeout = setTimeout(function () {
        _this2.hideMessage();
      }, delay);
    }
  }, {
    key: 'hideMessage',
    value: function hideMessage() {
      if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout and hide message immediately.
      this.messageDialog.classList.remove("event-message_-visible");
    }
  }, {
    key: 'startMonth',
    value: function startMonth() {
      var spinner = this.monthSchedulerRoot.querySelector('.spinner-container');
      spinner.classList.remove('hide');
      this.getJSON(this.getMonthEventsHandler(), this.apiUrl, this.eventReqAttrs);
    }
  }, {
    key: 'getMonthEventsHandler',
    value: function getMonthEventsHandler() {
      var self = this;
      return function () {
        var events = void 0;
        var place = void 0;
        var address = void 0;
        var monthEvents = [];
        var widget = this.widget;
        var schedulerRoot = widget.monthSchedulerRoot;
        var calendarWidgetRoot = schedulerRoot.parentNode.parentNode.parentNode;
        var spinner = schedulerRoot.querySelector('.spinner-container');
        var prm = [];
        var url = 'https://app.ticketmaster.com/discovery-widgets/v2/events.json?apikey=aJVApdB1RoA41ejGebe0o4Ai9gufoCbd&latlong=36.1697096,-115.1236952&keyword=&startDateTime=2016-08-01T00:00:00Z&endDateTime=2016-09-02T23:59:59Z&classificationId=&radius=5&size=200&page=0&sort=date,asc';

        if (this && this.readyState == XMLHttpRequest.DONE) {

          if (this.status == 200) {
            events = JSON.parse(this.responseText);

            if (events.page.totalPages <= 1) {

              spinner.classList.add('hide');

              if (events.page.totalElements != 0) {
                var currentMonth = calendarWidgetRoot.getAttribute('w-period').substr(5, 2);
                var currentMonthDef = new Date(calendarWidgetRoot.getAttribute('w-period')).getMonth() + 1;
                if (currentMonthDef <= 9) currentMonthDef = '0' + currentMonthDef;
                if (currentMonth == '') {
                  currentMonth = new Date().getMonth() + 1;
                  if (parseInt(currentMonth) <= 9) currentMonth = '0' + currentMonth;
                }
                events._embedded.events.forEach(function (item) {
                  item.url = _url4.default.addParamToUrl(item.url, _widgetsAnalytics.SHARED_ID_ATTRIBUTE_NAME, _widgetsAnalytics.SHARED_ID_FOR_WIDGET.CALENDAR);
                  if (item.hasOwnProperty('_embedded') && item._embedded.hasOwnProperty('venues')) {
                    if (item._embedded.venues[0].hasOwnProperty('name')) {
                      place = item._embedded.venues[0].name + ', ';
                    } else {
                      place = '';
                    }
                    if (item._embedded.venues[0].hasOwnProperty('address')) {
                      address = item._embedded.venues[0].address.line1;
                    } else {
                      address = '';
                    }
                  } else {
                    place = '';
                    address = '';
                  }

                  var imgWidth = void 0;
                  var index = void 0;
                  item.images.forEach(function (img, i) {
                    if (i == 0) imgWidth = img.width;
                    if (imgWidth > img.width) {
                      imgWidth = img.width;
                      index = i;
                    }
                  });
                  if (currentMonth == item.dates.start.localDate.substr(5, 2) || currentMonthDef == item.dates.start.localDate.substr(5, 2)) {
                    if (+new Date(+new Date().getFullYear(), +new Date().getMonth(), +new Date().getDate()) <= +new Date(+item.dates.start.localDate.split('-')[0], +item.dates.start.localDate.split('-')[1] - 1, +item.dates.start.localDate.split('-')[2])) {
                      monthEvents.push({
                        'name': item.name,
                        'date': item.dates.start.localDate,
                        'time': item.dates.start.localTime,
                        'datetime': widget.formatDate({
                          day: item.dates.start.localDate,
                          time: item.dates.start.localTime
                        }),
                        'place': place + address,
                        'url': item.url,
                        'img': item.hasOwnProperty('images') && item.images[index] != undefined ? item.images[index].url : ''
                      });
                    }
                  }
                });
              } else {
                monthEvents[0] = {
                  date: '',
                  time: ''
                };
                widget.showMessage("No results were found.<br/>Here other options for you.");
                widget.hideMessageWithDelay(widget.hideMessageDelay);
              }

              var monthEventsSort = {};
              var eventsArr = [];
              var tDate = '';

              if (monthEvents[0]) {
                tDate = monthEvents[0].date;
              } else {
                tDate = '';
              }

              for (var e = 0, l = monthEvents.length; e < l; e++) {
                if (tDate == monthEvents[e].date) {
                  eventsArr.push(monthEvents[e]);
                  var day = tDate.toString().substr(8, 2);
                  if (day.substr(0, 1) == '0') day = day.substr(1, 1);
                  monthEventsSort[day] = monthEvents[e];
                } else {
                  var _day = tDate.toString().substr(8, 2);
                  if (_day.substr(0, 1) == '0') _day = _day.substr(1, 1);
                  monthEventsSort[_day] = eventsArr;
                  eventsArr = [];
                  eventsArr.push(monthEvents[e]);
                }
                tDate = monthEvents[e].date;

                if (eventsArr.lenght != 0) {
                  var dayNo = eventsArr[0].date.substr(8, 2);
                  if (dayNo.substr(0, 1) == '0') dayNo = dayNo.substr(1, 1);
                  monthEventsSort[dayNo] = eventsArr;
                }
              }

              var calendarClass = 'calendar';
              var year = new Date().getFullYear();
              var month = new Date().getMonth() + 1;

              if (calendarWidgetRoot.getAttribute("w-period") != 'week') {
                if (calendarWidgetRoot.getAttribute("w-period").length == 7) {
                  year = calendarWidgetRoot.getAttribute("w-period").substr(0, 4);
                  month = calendarWidgetRoot.getAttribute("w-period").substr(5, 7);
                }
              }

              var elem = schedulerRoot.getElementsByClassName(calendarClass)[0];
              var mon = parseInt(month) - 1;
              var d = new Date(year, mon);
              var table = '<table><tr><th>s</th><th>m</th><th>t</th><th>w</th><th>t</th><th>f</th><th>s</th></tr><tr>';
              var tmpD = new Date(year, mon);
              var outEnd = [];
              for (var i = 0; i < d.getDay(); i++) {
                tmpD.setDate(tmpD.getDate() - 1);
                outEnd[i] = '<td class="dis">' + tmpD.getDate() + '</td>';
              }
              outEnd.reverse();
              table += outEnd.join('');
              var tableRowMonth = 0;
              var tail_ = 'tail';
              var popup_ = 'popup ';
              var notFound = true;

              while (d.getMonth() == mon) {
                table += '<td';
                if (new Date().getMonth() == d.getMonth() && new Date().getDate() == d.getDate()) table += ' class="today"';
                table += '>';
                if (monthEventsSort[d.getDate()] != undefined) {
                  var eventsCount = monthEventsSort[d.getDate()].length;
                  if (eventsCount === undefined) eventsCount = 1;
                  table += '<span class="round-holder"><span class="round">' + d.getDate();
                  if (eventsCount > 1) table += '<span class="count">' + eventsCount + '</span>';
                  table += '</span></span>';

                  table += '<span class="' + tail_ + '"></span>';
                  table += '<div class="' + popup_ + ' ';
                  if (eventsCount == 1) table += 'single ';
                  table += 'ss" tabindex="-1">';

                  table += '<div class="ss-container">';

                  var _url = void 0,
                      img = void 0,
                      name = void 0,
                      datetime = void 0,
                      _place = void 0,
                      eventsLenght = void 0;

                  if (monthEventsSort[d.getDate()].length == undefined) eventsLenght = 1;else eventsLenght = monthEventsSort[d.getDate()].length;

                  for (var _e = 0, _l = eventsLenght; _e < _l; _e++) {
                    if (monthEventsSort[d.getDate()] && monthEventsSort[d.getDate()][_e]) {
                      _url = monthEventsSort[d.getDate()][_e].url;
                      img = monthEventsSort[d.getDate()][_e].img;
                      name = monthEventsSort[d.getDate()][_e].name;
                      datetime = monthEventsSort[d.getDate()][_e].datetime;
                      _place = monthEventsSort[d.getDate()][_e].place;
                    } else {
                      _url = monthEventsSort[d.getDate()].url;
                      img = monthEventsSort[d.getDate()].img;
                      name = monthEventsSort[d.getDate()].name;
                      datetime = monthEventsSort[d.getDate()].datetime;
                      _place = monthEventsSort[d.getDate()].place;
                    }

                    var eventNameClickHandler = _widgetsAnalytics2.default.getStringEventHandler(_extends({
                      eventAction: _widgetsAnalytics.EVENT_NAME.EVENT_NAME_CLICK,
                      eventLabel: _url
                    }, self.calendarWidget.defaultAnalyticsProperties));

                    table += '<span class="event">';
                    table += '<span class="event-holder">';
                    table += '<a href="' + _url + '" target="_blank" onclick="' + eventNameClickHandler + '">';
                    if (img !== '' && img.length !== 0) {
                      table += '<span class="img bg-cover-default" style="background: url(' + img + ') center center no-repeat"></span>';
                    } else {
                      table += '<span class="img bg-cover-default" ></span>';
                    }
                    table += '<span class="name">' + name + '</span>';
                    table += '</a>';
                    table += '<span class="date">' + datetime + '</span>';
                    table += '<span class="place">' + _place + '</span>';
                    table += '</span>';
                    table += '</span>';
                    notFound = false;
                  }

                  table += '</div>';
                  table += '</div>';
                } else {
                  table += d.getDate();
                }
                table += '</td>';

                if (d.getDay() % 7 == 6) {
                  tableRowMonth++;
                  if (tableRowMonth > 1) {
                    tail_ = 'tail-up';
                    popup_ = 'popup-up ';
                  }
                  table += '</tr><tr>';
                }

                d.setDate(d.getDate() + 1);
              }
              if (d.getDay() != 0) {
                d.setDate(d.getDate() - 1);
                for (var i = d.getDay(); i < 6; i++) {
                  d.setDate(d.getDate() + 1);
                  table += '<td class="dis">' + d.getDate() + '</td>';
                }
              }
              table += '</tr></table><span class="month-update"></span>';

              elem.innerHTML = table;
              widget.addScroll();

              if (notFound === true) {
                widget.showMessage("No results were found.<br/>Here other options for you.");
                widget.hideMessageWithDelay(widget.hideMessageDelay);
              }
            } else {
              monthEvents = [];
              var monthEventsConcat = [];
              var _l2 = parseInt(events.page.totalPages) - 1;
              var maxRequestsNumber = 3;
              var numberOfRequests = Math.min(_l2, maxRequestsNumber);

              var _loop = function _loop() {
                var attrs = widget.eventReqAttrs;
                attrs.page = i;
                attrs = Object.keys(attrs).map(function (key) {
                  return key + '=' + attrs[key];
                }).join("&");
                var url = void 0;
                url = widget.apiUrl + [url, attrs].join("?");
                var thisSchedulerRoot = widget.monthSchedulerRoot.parentNode.parentNode.parentNode;
                if (thisSchedulerRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + thisSchedulerRoot.getAttribute('w-postalcodeapi');
                url += '&sort=date,asc';
                prm.push(new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve(widget.getJsonAsync(url));
                  }, i * 500);
                }));
              };

              for (i = 0; i <= numberOfRequests; i++) {
                _loop();
              }

              Promise.all(prm).then(function (value) {
                spinner.classList.add('hide');
                var le = value.length + 1;
                var curMonth;
                if (calendarWidgetRoot.getAttribute("w-period") == 'week') {
                  curMonth = new Date().getMonth() + 1;
                } else {
                  if (calendarWidgetRoot.getAttribute("w-period").substr(5, 1) == '0') {
                    curMonth = calendarWidgetRoot.getAttribute("w-period").substr(6, 1);
                  } else {
                    curMonth = calendarWidgetRoot.getAttribute("w-period").substr(5, 2);
                  }
                }
                for (var _e2 = 0; _e2 <= le; _e2++) {
                  if (value[_e2] && value[_e2]._embedded && value[_e2]._embedded.events) {
                    value[_e2]._embedded.events.forEach(function (item) {
                      if (item.hasOwnProperty('_embedded') && item._embedded.hasOwnProperty('venues')) {
                        if (item._embedded.venues[0].hasOwnProperty('name')) {
                          place = item._embedded.venues[0].name + ', ';
                        } else {
                          place = '';
                        }
                        if (item._embedded.venues[0].hasOwnProperty('address')) {
                          address = item._embedded.venues[0].address.line1;
                        } else {
                          address = '';
                        }
                      } else {
                        place = '';
                        address = '';
                      }

                      var imgWidth = void 0;
                      var index = void 0;
                      if (item.hasOwnProperty('images')) {
                        item.images.forEach(function (img, i) {
                          if (i == 0) imgWidth = img.width;
                          if (imgWidth > img.width) {
                            imgWidth = img.width;
                            index = i;
                          }
                        });
                      }
                      var newDate = item.dates.start.localDate.substr(5, 2);
                      if (parseInt(curMonth) === parseInt(newDate)) {
                        if (+new Date(+new Date().getFullYear(), +new Date().getMonth(), +new Date().getDate()) <= +new Date(+item.dates.start.localDate.split('-')[0], +item.dates.start.localDate.split('-')[1] - 1, +item.dates.start.localDate.split('-')[2])) {
                          monthEvents.push({
                            'name': item.name,
                            'date': item.dates.start.localDate,
                            'time': item.dates.start.localTime,
                            'datetime': widget.formatDate({
                              day: item.dates.start.localDate,
                              time: item.dates.start.localTime
                            }),
                            'place': place + address,
                            'url': item.url,
                            'img': item.hasOwnProperty('images') && item.images[index] != undefined ? item.images[index].url : ''
                          });
                        }
                      }
                    });
                  }
                }
                monthEventsConcat.push(monthEvents);
                monthEvents = monthEventsConcat[0];

                var monthEventsSort = {};
                var eventsArr = [];
                var tDate = '';
                if (monthEvents[0]) {
                  tDate = monthEvents[0].date;
                } else {
                  tDate = '';
                }

                for (var _e3 = 0, _l3 = monthEvents.length; _e3 < _l3; _e3++) {
                  if (tDate == monthEvents[_e3].date) {
                    eventsArr.push(monthEvents[_e3]);
                    var _day2 = tDate.toString().substr(8, 2);
                    if (_day2.substr(0, 1) == '0') _day2 = _day2.substr(1, 1);
                    monthEventsSort[_day2] = monthEvents[_e3];
                  } else {
                    var _day3 = tDate.toString().substr(8, 2);
                    if (_day3.substr(0, 1) == '0') _day3 = _day3.substr(1, 1);
                    monthEventsSort[_day3] = eventsArr;
                    eventsArr = [];
                    eventsArr.push(monthEvents[_e3]);
                  }
                  tDate = monthEvents[_e3].date;

                  if (eventsArr.lenght != 0) {
                    var _dayNo = eventsArr[0].date.substr(8, 2);
                    if (_dayNo.substr(0, 1) == '0') _dayNo = _dayNo.substr(1, 1);
                    monthEventsSort[_dayNo] = eventsArr;
                  }
                }

                var calendarClass = 'calendar';
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;

                if (calendarWidgetRoot.getAttribute("w-period") != 'week') {
                  if (calendarWidgetRoot.getAttribute("w-period").length == 7) {
                    year = calendarWidgetRoot.getAttribute("w-period").substr(0, 4);
                    month = calendarWidgetRoot.getAttribute("w-period").substr(5, 7);
                  }
                }

                var elem = schedulerRoot.getElementsByClassName(calendarClass)[0];
                var mon = parseInt(month) - 1;
                var d = new Date(year, mon);
                var table = '<table><tr><th>s</th><th>m</th><th>t</th><th>w</th><th>t</th><th>f</th><th>s</th></tr><tr>';
                var tmpD = new Date(year, mon);
                var outEnd = [];
                for (var i = 0; i < d.getDay(); i++) {
                  tmpD.setDate(tmpD.getDate() - 1);
                  outEnd[i] = '<td class="dis">' + tmpD.getDate() + '</td>';
                }
                outEnd.reverse();
                table += outEnd.join('');
                var tableRowMonth = 0;
                var tail_ = 'tail';
                var popup_ = 'popup ';

                while (d.getMonth() == mon) {
                  table += '<td';
                  if (new Date().getMonth() == d.getMonth() && new Date().getDate() == d.getDate()) table += ' class="today"';
                  table += '>';
                  if (monthEventsSort[d.getDate()] != undefined) {
                    var _eventsCount = monthEventsSort[d.getDate()].length;
                    if (_eventsCount === undefined) _eventsCount = 1;
                    table += '<span class="round-holder"><span class="round">' + d.getDate();
                    if (_eventsCount > 1) table += '<span class="count">' + _eventsCount + '</span>';
                    table += '</span></span>';
                    table += '<span class="' + tail_ + '"></span>';
                    table += '<div class="' + popup_ + ' ';
                    if (_eventsCount == 1) table += 'single ';
                    table += 'ss" tabindex="-1">';

                    table += '<div class="ss-container">';

                    var _url2 = void 0,
                        _img = void 0,
                        _name = void 0,
                        _datetime = void 0,
                        _place2 = void 0,
                        _eventsLenght = void 0;

                    if (monthEventsSort[d.getDate()].length == undefined) _eventsLenght = 1;else _eventsLenght = monthEventsSort[d.getDate()].length;

                    for (var _e4 = 0, _l4 = _eventsLenght; _e4 < _l4; _e4++) {
                      if (monthEventsSort[d.getDate()] && monthEventsSort[d.getDate()][_e4]) {
                        _url2 = monthEventsSort[d.getDate()][_e4].url;
                        _img = monthEventsSort[d.getDate()][_e4].img;
                        _name = monthEventsSort[d.getDate()][_e4].name;
                        _datetime = monthEventsSort[d.getDate()][_e4].datetime;
                        _place2 = monthEventsSort[d.getDate()][_e4].place;
                      } else {
                        _url2 = monthEventsSort[d.getDate()].url;
                        _img = monthEventsSort[d.getDate()].img;
                        _name = monthEventsSort[d.getDate()].name;
                        _datetime = monthEventsSort[d.getDate()].datetime;
                        _place2 = monthEventsSort[d.getDate()].place;
                      }

                      var _eventNameClickHandler = _widgetsAnalytics2.default.getStringEventHandler(_extends({
                        eventAction: _widgetsAnalytics.EVENT_NAME.EVENT_NAME_CLICK,
                        eventLabel: _url2
                      }, self.calendarWidget.defaultAnalyticsProperties));

                      table += '<span class="event">';
                      table += '<span class="event-holder">';
                      table += '<a href="' + _url2 + '" target="_blank" onclick="' + _eventNameClickHandler + '">';
                      if (_img !== '' && _img.length !== 0) {
                        table += '<span class="img bg-cover-default" style="background: url(' + _img + ') center center no-repeat"></span>';
                      } else {
                        table += '<span class="img bg-cover-default" ></span>';
                      }
                      table += '<span class="name">' + _name + '</span>';
                      table += '</a>';
                      table += '<span class="date">' + _datetime + '</span>';
                      table += '<span class="place">' + _place2 + '</span>';
                      table += '</span>';
                      table += '</span>';
                    }

                    table += '</div>';
                    table += '</div>';
                  } else {
                    table += d.getDate();
                  }
                  table += '</td>';

                  if (d.getDay() % 7 == 6) {
                    tableRowMonth++;
                    if (tableRowMonth > 1) {
                      tail_ = 'tail-up';
                      popup_ = 'popup-up ';
                    }
                    table += '</tr><tr>';
                  }

                  d.setDate(d.getDate() + 1);
                }
                if (d.getDay() != 0) {
                  d.setDate(d.getDate() - 1);
                  for (var i = d.getDay(); i < 6; i++) {
                    d.setDate(d.getDate() + 1);
                    table += '<td class="dis">' + d.getDate() + '</td>';
                  }
                }
                table += '</tr></table><span class="month-update"></span>';
                elem.innerHTML = table;
                widget.addScroll();

                var rounds = schedulerRoot.querySelectorAll("span.round-holder");
                for (var x = 0; x < rounds.length; x++) {
                  rounds[x].addEventListener("click", function (e) {
                    this.classList.add("active");
                    this.nextElementSibling.classList.add("show");
                    this.nextElementSibling.nextElementSibling.classList.add("show");
                    this.nextElementSibling.nextElementSibling.focus();
                  }, false);
                }

                var popups = schedulerRoot.querySelectorAll(".popup, .popup-up");
                for (var y = 0; y < popups.length; y++) {
                  popups[y].addEventListener("blur", function (e) {
                    var self = this;
                    setTimeout(function () {
                      self.previousElementSibling.classList.remove("show");
                      self.classList.remove("show");
                      self.previousElementSibling.previousElementSibling.classList.remove('active');
                    }, 127);
                  }, false);
                }

                var monthUpdate = schedulerRoot.getElementsByClassName('month-update')[0];
                if (monthUpdate != null) {
                  monthUpdate.addEventListener('click', function () {
                    widget.update();
                  });
                }
              }, function (reason) {
                console.log(reason);
                setTimeout(widget.startMonth.bind(widget), 1000);
              });
            }
          } else if (this.status == 400) {
            console.log('There was an error 400');
          } else {
            console.log('something else other than 200 was returned');
          }
        }

        var rounds = schedulerRoot.querySelectorAll("span.round-holder");
        for (var x = 0; x < rounds.length; x++) {
          rounds[x].addEventListener("click", function (e) {
            this.classList.add("active");
            this.nextElementSibling.classList.add("show");
            this.nextElementSibling.nextElementSibling.classList.add("show");
            this.nextElementSibling.nextElementSibling.focus();
          }, false);
        }

        var popups = schedulerRoot.querySelectorAll(".popup, .popup-up");
        for (var y = 0; y < popups.length; y++) {
          popups[y].addEventListener("blur", function (e) {
            var self = this;
            setTimeout(function () {
              self.previousElementSibling.classList.remove("show");
              self.classList.remove("show");
              self.previousElementSibling.previousElementSibling.classList.remove('active');
            }, 127);
          }, false);
        }

        var monthUpdate = schedulerRoot.getElementsByClassName('month-update')[0];
        if (monthUpdate != null) {
          monthUpdate.addEventListener('click', function () {
            widget.update();
          });
        }
      };
    }
  }, {
    key: 'getMonthes',
    value: function getMonthes() {
      var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var year = new Date().getFullYear();
      var month = new Date().getMonth();
      var nowMonth = new Date().getMonth();
      var nowMonthTmp = nowMonth;
      var calendarWidgetRoot = this.monthSchedulerRoot.parentNode.parentNode.parentNode;

      if (calendarWidgetRoot.getAttribute("w-period") != 'week') {

        if (calendarWidgetRoot.getAttribute("w-period").length != 7) {
          year = new Date().getFullYear();
          month = new Date().getMonth() + 1;
          if (month <= 9) month = '0' + month;
          nowMonth = new Date().getMonth();
        } else {
          year = calendarWidgetRoot.getAttribute("w-period").substr(0, 4);
          month = calendarWidgetRoot.getAttribute("w-period").substr(5, 2);
          nowMonth = calendarWidgetRoot.getAttribute("w-period").substr(5, 2);
          if (calendarWidgetRoot.getAttribute("w-period").substr(5, 1) == '0') nowMonth = calendarWidgetRoot.getAttribute("w-period").substr(6, 1);
          nowMonth = parseInt(nowMonth - 1);
        }
        nowMonthTmp = nowMonth;
        if (new Date().getFullYear() != year) {
          nowMonth = 0;
        } else {
          nowMonth = new Date().getMonth();
        }
      }

      var content = '';
      content += '<span class="selector-title">' + MONTH_NAMES[nowMonthTmp] + '</span>';
      content += '<span class="selector-content" tabindex="-1">';

      var countMonth = 11;
      if (new Date().getFullYear() != year) countMonth = 6;
      for (var i = nowMonth; i <= countMonth; i++) {
        content += '<span ';
        if (i == nowMonth) content += 'class="active" ';
        if (i < 9) month = '0' + parseInt(i + 1);else month = parseInt(i + 1);
        content += 'w-period="' + year + '-' + month + '">' + MONTH_NAMES[i] + '</span>';
      }
      content += '</span>';
      return content;
    }
  }, {
    key: 'getCategories',
    value: function getCategories() {
      var calendarWidgetRoot = this.monthSchedulerRoot.parentNode.parentNode.parentNode;
      var active = calendarWidgetRoot.getAttribute('w-classificationid');
      var activeId = calendarWidgetRoot.getAttribute('w-classificationid');
      switch (active) {
        case 'KZFzniwnSyZfZ7v7na':
          active = 'Arts & Theatre';
          break;
        case 'KZFzniwnSyZfZ7v7nn':
          active = 'Film';
          break;
        case 'KZFzniwnSyZfZ7v7n1':
          active = 'Miscellaneous';
          break;
        case 'KZFzniwnSyZfZ7v7nJ':
          active = 'Music';
          break;
        case 'KZFzniwnSyZfZ7v7nE':
          active = 'Sports';
          break;
        default:
          active = 'All Events';
      }
      var content = '<span class="selector-title" w-classificationid="' + activeId + '">';
      content += active;
      content += '</span>';
      content += '<span class="selector-content" tabindex="-1">';
      content += '<span class="active" w-classificationId="">All Events</span>';
      content += '<span w-classificationId="KZFzniwnSyZfZ7v7na">Arts & Theatre</span>';
      content += '<span w-classificationId="KZFzniwnSyZfZ7v7nn">Film</span>';
      content += '<span w-classificationId="KZFzniwnSyZfZ7v7n1">Miscellaneous</span>';
      content += '<span w-classificationId="KZFzniwnSyZfZ7v7nJ">Music</span>';
      content += '<span w-classificationId="KZFzniwnSyZfZ7v7nE">Sports</span>';
      content += '</span>';
      return content;
    }
  }, {
    key: 'update',
    value: function update() {
      var schedulerRoot = this.monthSchedulerRoot;
      var delLeftselector = schedulerRoot.parentNode.getElementsByClassName('sliderLeftSelector')[0];
      delLeftselector.parentElement.removeChild(delLeftselector);
      var delRightselector = schedulerRoot.parentNode.getElementsByClassName('sliderRightSelector')[0];
      delRightselector.parentElement.removeChild(delRightselector);

      var leftSelector = new _SelectorControls2.default(schedulerRoot.parentNode, 'sliderLeftSelector', this.getMonthes(), 'period', this.update.bind(this));
      var RightSelector = new _SelectorControls2.default(schedulerRoot.parentNode, 'sliderRightSelector', this.getCategories(), 'classificationId', this.update.bind(this));
      var month = schedulerRoot.getElementsByClassName('calendar')[0];
      schedulerRoot.removeChild(month);
      this.monthRootContainer = document.createElement("div");
      this.monthRootContainer.classList.add("calendar");
      schedulerRoot.appendChild(this.monthRootContainer);
      this.startMonth();
    }
  }, {
    key: 'apiUrl',
    get: function get() {
      return "https://app.ticketmaster.com/discovery-widgets/v2/events.json";
    }
  }, {
    key: 'eventReqAttrs',
    get: function get() {
      var calendarWidgetRoot = this.monthSchedulerRoot.parentNode.parentNode.parentNode;
      var tmapikey = '',
          latlong = '',
          keyword = '',
          radius = void 0;
      var attrs = {},
          params = [{
        attr: 'tmapikey',
        verboseName: 'apikey'
      }, {
        attr: 'keyword',
        verboseName: 'keyword'
      }, {
        attr: 'size',
        verboseName: 'size'
      }, {
        attr: 'city',
        verboseName: 'city'
      }, {
        attr: 'countrycode',
        verboseName: 'countryCode'
      }, {
        attr: 'radius',
        verboseName: 'radius'
      }, {
        attr: 'classificationid',
        verboseName: 'classificationId'
      }, {
        attr: 'attractionid',
        verboseName: 'attractionId'
      }, {
        attr: 'promoterid',
        verboseName: 'promoterId'
      }, {
        attr: 'venueid',
        verboseName: 'venueId'
      }, {
        attr: 'segmentid',
        verboseName: 'segmentId'
      }, {
        attr: 'page',
        verboseName: 'page'
      }];

      var date = new Date();
      var startmonth = void 0,
          startdate = void 0,
          endmonth = void 0,
          enddate = void 0,
          startDateTime = void 0,
          endDateTime = void 0;
      var classificationid = '';
      var countrycode = '';
      var city = '';
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);

      if (firstDay.getMonth() + 1 <= 9) startmonth = '0' + (firstDay.getMonth() + 1);else startmonth = firstDay.getMonth() + 1;
      startdate = '0' + firstDay.getDate();
      if (lastDay.getMonth() + 1 <= 9) endmonth = '0' + (lastDay.getMonth() + 1);else endmonth = lastDay.getMonth() + 1;
      enddate = lastDay.getDate();
      startDateTime = firstDay.getFullYear() + '-' + startmonth + '-' + startdate + 'T00:00:00Z';
      endDateTime = lastDay.getFullYear() + '-' + endmonth + '-' + enddate + 'T23:59:59Z';

      if (calendarWidgetRoot.getAttribute("w-period") != 'week') {
        if (calendarWidgetRoot.getAttribute("w-period").length != 7) {
          firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
          lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        } else {
          firstDay = new Date(calendarWidgetRoot.getAttribute("w-period").substr(0, 4), calendarWidgetRoot.getAttribute("w-period").substr(5, 7), 0);
          lastDay = new Date(calendarWidgetRoot.getAttribute("w-period").substr(0, 4), calendarWidgetRoot.getAttribute("w-period").substr(5, 7), 0);
          firstDay.setDate(new Date(firstDay).getDate() - 1);
          lastDay.setDate(new Date(lastDay).getDate() + 1);
        }
        if (parseInt(firstDay.getMonth() + 1) <= 9) startmonth = '0' + parseInt(firstDay.getMonth() + 1);else startmonth = parseInt(firstDay.getMonth() + 1);
        startdate = '0' + firstDay.getDate();
        if (lastDay.getMonth() + 1 <= 9) endmonth = '0' + parseInt(lastDay.getMonth() + 1);else endmonth = parseInt(lastDay.getMonth()) + 1;
        if (lastDay.getDate() + 1 <= 9) enddate = '0' + parseInt(lastDay.getDate() + 1);else enddate = parseInt(lastDay.getDate()) + 1;

        startDateTime = firstDay.getFullYear() + '-' + startmonth + '-01T00:00:00Z';
        endDateTime = lastDay.getFullYear() + '-' + endmonth + '-' + enddate + 'T23:59:59Z';
      }

      if (calendarWidgetRoot.getAttribute("w-tmapikey") != '') {
        tmapikey = calendarWidgetRoot.getAttribute("w-tmapikey");
        /*
           if (sessionStorage.getItem('tk-api-key')) {
               tmapikey = sessionStorage.getItem('tk-api-key');
               document.querySelector('[w-type="calendar"]').setAttribute("w-tmapikey", tmapikey);
           }
           */
      }

      if (calendarWidgetRoot.getAttribute("w-latlong") != '') {
        latlong = calendarWidgetRoot.getAttribute("w-latlong");
      }

      // if (latlong === null) latlong = '34.0390107,-118.2672801';

      if (calendarWidgetRoot.getAttribute("w-keyword") != '') {
        keyword = calendarWidgetRoot.getAttribute("w-keyword");
      }

      if (calendarWidgetRoot.getAttribute("w-radius") != '') {
        radius = calendarWidgetRoot.getAttribute("w-radius");
      }

      if (calendarWidgetRoot.getAttribute("w-classificationId") != '') {
        classificationid = calendarWidgetRoot.getAttribute("w-classificationId");
      }

      if (calendarWidgetRoot.getAttribute("w-countrycode") != null) {
        countrycode = calendarWidgetRoot.getAttribute("w-countrycode");
        latlong = '';
      }

      if (calendarWidgetRoot.getAttribute("w-city") != null) {
        city = calendarWidgetRoot.getAttribute("w-city");
        latlong = '';
      }

      return {
        "apikey": tmapikey,
        "latlong": latlong,
        "countryCode": countrycode,
        "city": city,
        "keyword": keyword,
        "startDateTime": startDateTime,
        "endDateTime": endDateTime,
        "classificationId": classificationid,
        "radius": radius,
        "size": "200",
        "page": 0
      };
    }
  }, {
    key: 'messageRootContainer',
    get: function get() {
      return 'monthScheduler';
    }
  }, {
    key: 'hideMessageDelay',
    get: function get() {
      return 3000;
    }
  }]);

  function MonthScheduler(root, calendarWidget) {
    _classCallCheck(this, MonthScheduler);

    if (!root) return;
    this.monthSchedulerRoot = root;
    this.calendarWidget = calendarWidget;
    if (this.monthSchedulerRoot.parentNode.querySelector('.sliderLeftSelector') == null) {
      var leftSelector = new _SelectorControls2.default(this.monthSchedulerRoot.parentNode, 'sliderLeftSelector', this.getMonthes(), 'period', this.update.bind(this));
      var RightSelector = new _SelectorControls2.default(this.monthSchedulerRoot.parentNode, 'sliderRightSelector', this.getCategories(), 'classificationId', this.update.bind(this));
    }
    if (this.monthSchedulerRoot.querySelector('.calendar') == null) {
      this.initMessage(this.monthSchedulerRoot);
      this.calendarRootContainer = document.createElement("div");
      this.calendarRootContainer.classList.add("calendar");
      this.monthSchedulerRoot.appendChild(this.calendarRootContainer);
    }
  }

  return MonthScheduler;
}();

exports.default = MonthScheduler;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACTIVE_CLASS_NAME = 'active';
var TAB_SELECTOR = '.tb';
var TAB_PANEL_SELECTOR = '.tab';
var TABS_CONTAINER_SELECTOR = '.tabs';

var TabsControls = function () {
	_createClass(TabsControls, [{
		key: 'setActiveTab',
		value: function setActiveTab(index) {
			TabsControls.toggleActiveClass(this.tabsElements[this.activeTabIndex], false);
			TabsControls.toggleActiveClass(this.tabsElements[index], true);
			this.activeTabIndex = index;
		}
	}, {
		key: 'addEventListenerForTabIndex',
		value: function addEventListenerForTabIndex(eventName, tabIndex, listener) {
			this.tabsElements[tabIndex].tab.addEventListener(eventName, listener);
		}
	}], [{
		key: 'toggleActiveClass',
		value: function toggleActiveClass(_ref, isActive) {
			var tab = _ref.tab,
			    panel = _ref.panel;

			var method = isActive ? 'add' : 'remove';
			tab.classList[method](ACTIVE_CLASS_NAME);
			panel.classList[method](ACTIVE_CLASS_NAME);
		}
	}]);

	function TabsControls(rootElement) {
		var _this = this;

		_classCallCheck(this, TabsControls);

		var tabs = rootElement.querySelectorAll(TAB_SELECTOR);
		var tabPanels = rootElement.querySelectorAll(TAB_PANEL_SELECTOR);

		this.activeTabIndex = 0;
		this.tabsElements = Array.prototype.map.call(tabs, function (tab, idx) {
			return { tab: tab, panel: tabPanels[idx] };
		});
		this.tabsContainer = rootElement.querySelectorAll(TABS_CONTAINER_SELECTOR);

		this.tabsElements.forEach(function (tabElements, idx) {
			if (idx === _this.activeTabIndex) TabsControls.toggleActiveClass(tabElements, true);

			tabElements.tab.addEventListener('click', function (e) {
				var index = Array.prototype.indexOf.call(_this.tabsElements.map(function (tabElements) {
					return tabElements.tab;
				}), e.target);
				_this.setActiveTab(index);
			});
		});
	}

	return TabsControls;
}();

exports.default = TabsControls;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SelectorControls = __webpack_require__(2);

var _SelectorControls2 = _interopRequireDefault(_SelectorControls);

var _widgetsAnalytics = __webpack_require__(1);

var _widgetsAnalytics2 = _interopRequireDefault(_widgetsAnalytics);

var _url = __webpack_require__(3);

var _url2 = _interopRequireDefault(_url);

var _universePlugin = __webpack_require__(29);

var _universePlugin2 = _interopRequireDefault(_universePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicketmasterCalendarWidget = function () {
	_createClass(TicketmasterCalendarWidget, [{
		key: 'isConfigAttrExistAndNotEmpty',
		value: function isConfigAttrExistAndNotEmpty(attr) {
			if (!this.config.hasOwnProperty(attr) || this.config[attr] === "undefined") {
				return false;
			} else if (this.config[attr] === "") {
				return false;
			}
			return true;
		}
	}, {
		key: 'config',
		set: function set(attrs) {
			this.widgetConfig = this.loadConfig(attrs);
		},
		get: function get() {
			return this.widgetConfig;
		}
	}, {
		key: 'events',
		set: function set(responce) {
			this.eventsList = this.parseEvents(responce);
		},
		get: function get() {
			return this.eventsList;
		}
	}, {
		key: 'borderSize',
		get: function get() {
			return this.config.border || 0;
		}
	}, {
		key: 'widgetHeight',
		get: function get() {
			return this.config.height || 600;
		}
	}, {
		key: 'widgetContentHeight',
		get: function get() {
			/* return this.widgetHeight - (this.isListView || this.isSimpleProportionM ? 0 : 39) || 600; */
			return this.widgetHeight - 70;
		}
	}, {
		key: 'eventUrl',
		get: function get() {
			return "http://www.ticketmaster.com/event/";
		}
	}, {
		key: 'apiUrl',
		get: function get() {
			return "https://app.ticketmaster.com/discovery-widgets/v2/events.json";
		}
	}, {
		key: 'themeUrl',
		get: function get() {
			return window.location.host === 'developer.ticketmaster.com' ? 'https://developer.ticketmaster.com/products-and-docs/widgets/calendar/1.0.0/theme/' : 'https://ticketmaster-api-staging.github.io/products-and-docs/widgets/calendar/1.0.0/theme/';
		}
	}, {
		key: 'portalUrl',
		get: function get() {
			return window.location.host === 'developer.ticketmaster.com' ? 'https://developer.ticketmaster.com/' : 'https://ticketmaster-api-staging.github.io/';
		}
	}, {
		key: 'logoUrl',
		get: function get() {
			return "http://www.ticketmaster.com/";
		}
	}, {
		key: 'legalNoticeUrl',
		get: function get() {
			return "https://developer.ticketmaster.com/support/terms-of-use/";
		}
	}, {
		key: 'questionUrl',
		get: function get() {
			return "https://developer.ticketmaster.com/support/faq/";
		}
	}, {
		key: 'widgetVersion',
		get: function get() {
			return '1.0.80';
		}
	}, {
		key: 'geocodeUrl',
		get: function get() {
			return "https://maps.googleapis.com/maps/api/geocode/json";
		}
	}, {
		key: 'updateExceptions',
		get: function get() {
			return ["width", "height", "border", "borderradius", "colorscheme", "layout", "affiliateid", "propotion", "googleapikey"];
		}
	}, {
		key: 'sliderDelay',
		get: function get() {
			return 5000;
		}
	}, {
		key: 'sliderRestartDelay',
		get: function get() {
			return 5000;
		}
	}, {
		key: 'hideMessageDelay',
		get: function get() {
			return 5000;
		}
	}, {
		key: 'controlHiddenClass',
		get: function get() {
			return "events_control-hidden";
		}
	}, {
		key: 'tmWidgetWhiteList',
		get: function get() {
			return ["2200504BAD4C848F", "00005044BDC83AE6", "1B005068DB60687F", "1B004F4DBEE45E47", "3A004F4ED7829D5E", "3A004F4ED1FC9B63", "1B004F4FF83289C5", "1B004F4FC0276888", "0E004F4F3B7DC543", "1D004F4F09C61861", "1600505AC9A972A1", "22004F4FD82795C6", "01005057AFF54574", "01005056FAD8793A", "3A004F4FB2453240", "22004F50D2149AC6", "01005059AD49507A", "01005062B4236D5D"];
		}
	}, {
		key: 'countriesWhiteList',
		get: function get() {
			return ['Australia', 'Austria', 'Belgium', 'Canada', 'Denmark', 'Finland', 'France', 'Germany', 'Ireland', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Spain', 'Sweden', 'Turkey', 'UAE', 'United Kingdom', 'United States'];
		}
	}, {
		key: 'eventReqAttrs',
		get: function get() {
			var attrs = {},
			    params = [{
				attr: 'tmapikey',
				verboseName: 'apikey'
			}, {
				attr: 'keyword',
				verboseName: 'keyword'
			}, {
				attr: 'size',
				verboseName: 'size'
			}, {
				attr: 'radius',
				verboseName: 'radius'
			}, {
				attr: 'classificationid',
				verboseName: 'classificationId'
			}, {
				attr: 'attractionid',
				verboseName: 'attractionId'
			}, {
				attr: 'promoterid',
				verboseName: 'promoterId'
			}, {
				attr: 'venueid',
				verboseName: 'venueId'
			}, {
				attr: 'city',
				verboseName: 'city'
			}, {
				attr: 'countrycode',
				verboseName: 'countryCode'
			}, {
				attr: 'segmentid',
				verboseName: 'segmentId'
			}];

			for (var i in params) {
				var item = params[i];
				if (this.isConfigAttrExistAndNotEmpty(item.attr)) attrs[item.verboseName] = this.config[item.attr];
			}

			// Only one allowed at the same time
			if (this.config.latlong) {
				attrs.latlong = this.config.latlong;
				if (this.widgetRoot.getAttribute('w-postalcodeapi') != null) {
					this.config.latlong = '';
				}
				if (this.widgetRoot.getAttribute('w-latlong') != null && this.widgetRoot.getAttribute('w-latlong') != '34.0390107,-118.2672801') {
					attrs.latlong = this.widgetRoot.getAttribute('w-latlong');
					attrs.postalCode = '';
					this.config.postalcode = '';
				}
			} else {
				if (this.isConfigAttrExistAndNotEmpty("postalcode")) attrs.postalCode = this.config.postalcode;
			}

			if (this.config.countrycode != null) {
				attrs.latlong = '';
				this.config.latlong = '';
				this.widgetRoot.setAttribute('w-latlong', '');
			}

			if (this.isConfigAttrExistAndNotEmpty("period")) {
				var period = this.getDateFromPeriod(this.config.period);
				attrs.startDateTime = period[0];
				attrs.endDateTime = period[1];
			}

			if (this.config.period != 'week') {
				var period_ = new Date(this.config.period);
				var firstDay = new Date(period_);
				var lastDay = new Date(period_);
				firstDay.setDate(firstDay.getDate() + 1);
				lastDay.setDate(lastDay.getDate() + 1);
				firstDay.setHours(0);lastDay.setHours(23);
				firstDay.setMinutes(0);lastDay.setMinutes(59);
				firstDay.setSeconds(0);lastDay.setSeconds(59);
				attrs.startDateTime = this.toShortISOString(firstDay);
				attrs.endDateTime = this.toShortISOString(lastDay);
			}

			return attrs;
		}
	}]);

	function TicketmasterCalendarWidget(root) {
		var _this = this;

		_classCallCheck(this, TicketmasterCalendarWidget);

		if (!root) return;
		this.widgetRoot = root;

		if (this.widgetRoot.querySelector('.tabs-container') != null) return;

		this.tabsRootContainer = document.createElement("div");
		this.tabsRootContainer.classList.add("tabs");
		this.tabsRootContainer.innerHTML = '<span class="tb active">Day</span><span class="tb">Week</span><span class="tb">Month</span><span class="tb">Year</span>';
		this.widgetRoot.appendChild(this.tabsRootContainer);

		this.tabsRootContainer = document.createElement("div");
		this.tabsRootContainer.classList.add("tabs-container");
		this.widgetRoot.appendChild(this.tabsRootContainer);

		this.tab1RootContainer = document.createElement("div");
		this.tab1RootContainer.classList.add("tab");
		this.tab1RootContainer.classList.add("active");
		this.tabsRootContainer.appendChild(this.tab1RootContainer);

		var leftSelector = new _SelectorControls2.default(this.tab1RootContainer, 'sliderLeftSelector', this.getCurrentWeek(), 'period', this.update.bind(this));
		var RightSelector = new _SelectorControls2.default(this.tab1RootContainer, 'sliderRightSelector', '<span class="selector-title">All Events</span><span class="selector-content" tabindex="-1"><span class="active" w-classificationId="">All Events</span><span w-classificationId="KZFzniwnSyZfZ7v7na">Arts & Theatre</span><span w-classificationId="KZFzniwnSyZfZ7v7nn">Film</span><span w-classificationId="KZFzniwnSyZfZ7v7n1">Miscellaneous</span><span w-classificationId="KZFzniwnSyZfZ7v7nJ">Music</span><span w-classificationId="KZFzniwnSyZfZ7v7nE">Sports</span></span>', 'classificationId', this.update.bind(this));

		this.tab2RootContainer = document.createElement("div");
		this.tab2RootContainer.classList.add("tab");
		this.tab2RootContainer.innerHTML = '<div class="weekSсheduler"><div class="spinner-container"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>';
		this.tabsRootContainer.appendChild(this.tab2RootContainer);
		this.eventLogoBox = document.createElement("div");
		this.eventLogoBox.classList.add("event-logo-box-c");
		this.eventLogoBox.innerHTML = '<a class="event-logo-c" target="_blank" href="http://www.ticketmaster.com/">Powered by</a>';
		this.tab2RootContainer.appendChild(this.eventLogoBox);

		this.tab3RootContainer = document.createElement("div");
		this.tab3RootContainer.classList.add("tab");
		this.tab3RootContainer.innerHTML = '<div class="monthScheduler"><div class="spinner-container"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>';
		this.tabsRootContainer.appendChild(this.tab3RootContainer);
		this.eventLogoBox = document.createElement("div");
		this.eventLogoBox.classList.add("event-logo-box-c");
		this.eventLogoBox.innerHTML = '<a class="event-logo-c" target="_blank" href="http://www.ticketmaster.com/">Powered by</a>';
		this.tab3RootContainer.appendChild(this.eventLogoBox);

		this.tab4RootContainer = document.createElement("div");
		this.tab4RootContainer.classList.add("tab");
		this.tab4RootContainer.innerHTML = '<div class="yearScheduler"><div class="spinner-container"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>';
		this.tabsRootContainer.appendChild(this.tab4RootContainer);
		this.eventLogoBox = document.createElement("div");
		this.eventLogoBox.classList.add("event-logo-box-c");
		this.eventLogoBox.innerHTML = '<a class="event-logo-c" target="_blank" href="http://www.ticketmaster.com/">Powered by</a>';
		this.tab4RootContainer.appendChild(this.eventLogoBox);

		this.eventsRootContainer = document.createElement("div");
		this.eventsRootContainer.classList.add("events-root-container");
		this.eventsRootContainer.innerHTML = '<div class="spinner-container"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>';
		this.tab1RootContainer.appendChild(this.eventsRootContainer);

		this.eventsRoot = document.createElement("ul");
		this.eventsRoot.classList.add("events-root");
		this.eventsRootContainer.appendChild(this.eventsRoot);

		this.config = this.widgetRoot.attributes;

		if (this.config.theme !== null && !document.getElementById('widget-theme-' + this.config.theme)) {
			this.makeRequest(this.styleLoadingHandler, this.themeUrl + this.config.theme + ".css");
		}

		this.eventsRootContainer.classList.remove("border");
		if (this.config.border) {
			this.eventsRootContainer.classList.add("border");
		}

		this.widgetRoot.style.height = this.widgetHeight + 'px';
		this.widgetRoot.style.width = this.config.width + 'px';

		this.eventsRootContainer.style.height = this.widgetContentHeight + 'px';
		this.eventsRootContainer.style.width = this.config.width + 'px';
		this.eventsRootContainer.style.borderWidth = '0';
		this.widgetRoot.style.borderRadius = this.config.borderradius + 'px';
		this.widgetRoot.style.borderWidth = this.borderSize + 'px';

		this.loadCustomStyle();

		this.AdditionalElements();

		this.getCoordinates(function () {
			_this.makeRequest(_this.eventsLoadingHandler, _this.apiUrl, _this.eventReqAttrs);
		});

		/*plugins for 'buy button'*/
		_universePlugin2.default.embedUniversePlugin();

		this.initBuyBtn();

		this.initMessage();

		this.initSliderControls();

		this.defaultAnalyticsProperties = _defineProperty({
			eventCategory: _widgetsAnalytics.EVENT_CATEGORY.CALENDAR_WIDGET
		}, _widgetsAnalytics.CUSTOM_DIMENSIONS.API_KEY, this.eventReqAttrs.apikey);

		_widgetsAnalytics2.default.sendEvent(_extends({
			eventAction: _widgetsAnalytics.EVENT_NAME.RENDERED
		}, this.defaultAnalyticsProperties));

		/* if (!this.isListView) this.initEventCounter(); */
	}

	_createClass(TicketmasterCalendarWidget, [{
		key: 'getCurrentWeek',
		value: function getCurrentWeek() {
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var content = '<span class="selector-title">';
			var today = new Date();
			var todayTmp = new Date();
			content += monthNames[today.getMonth()] + ' ' + today.getDate();
			content += '</span>';
			content += '<span class="selector-content" tabindex="-1">';

			for (var d = 0; d <= 6; d++) {
				todayTmp.setDate(today.getDate() + d);
				if (d == 0) content += '<span class="active" w-period="' + todayTmp + '">';else content += '<span w-period="' + todayTmp + '">';
				content += monthNames[todayTmp.getMonth()] + ' ' + todayTmp.getDate();
				content += '</span>';
				todayTmp = new Date();
			}
			content += '</span>';
			return content;
		}
	}, {
		key: 'parseGoogleGeocodeResponse',
		value: function parseGoogleGeocodeResponse(cb) {
			var widget = this;
			if (this && this.readyState === XMLHttpRequest.DONE) {
				var latlong = '',
				    results = null,
				    countryShortName = '';
				if (this.status === 200) {
					var response = JSON.parse(this.responseText);
					if (response.status === 'OK' && response.results.length) {
						// Filtering only white list countries
						results = response.results.filter(function (item) {
							return widget.countriesWhiteList.filter(function (elem) {
								return elem === item.address_components[item.address_components.length - 1].long_name;
							}).length > 0;
						});

						if (results.length) {
							// sorting results by country name
							results.sort(function (f, g) {
								var a = f.address_components[f.address_components.length - 1].long_name;
								var b = g.address_components[g.address_components.length - 1].long_name;
								if (a > b) {
									return 1;
								}
								if (a < b) {
									return -1;
								}
								return 0;
							});

							// Use first item if multiple results was found in one country or in different
							var geometry = results[0].geometry;
							countryShortName = results[0].address_components[results[0].address_components.length - 1].short_name;

							// If multiple results without country try to find USA as prefer value
							if (!widget.config.country) {
								for (var i in results) {
									var result = results[i];
									if (result.address_components) {
										var country = result.address_components[result.address_components.length - 1];
										if (country) {
											if (country.short_name === 'US') {
												countryShortName = 'US';
												geometry = result.geometry;
											}
										}
									}
								}
							}

							if (geometry) {
								if (geometry.location) {
									latlong = geometry.location.lat + ',' + geometry.location.lng;
								}
							}
						} else {
							results = null;
						}
					}
				}
				if (widget.onLoadCoordinate) widget.onLoadCoordinate(results, countryShortName);
				widget.config.latlong = latlong;
				if (widget.config.latlong == null) widget.config.latlong = "34.0390107,-118.2672801";
				if (document.querySelector('[w-type="calendar"]').getAttribute("w-country") != null) {
					widget.config.latlong = '';
					latlong = '';
				};
				cb(widget.config.latlong);
				document.querySelector('[w-type="calendar"]').setAttribute("w-latlong", latlong);
			}
		}
	}, {
		key: 'getCoordinates',
		value: function getCoordinates(cb) {
			var widget = this;
			if (this.isConfigAttrExistAndNotEmpty('postalcode')) {
				var args = { language: 'en', components: 'postal_code:' + widget.config.postalcode };
				if (widget.config.googleapikey) args.key = widget.config.googleapikey;
				if (this.config.country) args.components += '|country:' + this.config.country;
				this.makeRequest(this.parseGoogleGeocodeResponse.bind(widget, cb), this.geocodeUrl, args);
			} else {
				// Used in builder
				if (widget.onLoadCoordinate) widget.onLoadCoordinate(null);
				widget.config.latlong = '34.0390107,-118.2672801';
				widget.config.country = 'US';
				cb(widget.config.latlong);
			}
		}
	}, {
		key: 'initBuyBtn',
		value: function initBuyBtn() {
			var _this2 = this;

			this.buyBtn = document.createElement("a");
			this.buyBtn.appendChild(document.createTextNode('BUY NOW'));
			this.buyBtn.classList.add("event-buy-btn");
			this.buyBtn.classList.add("main-btn");
			this.buyBtn.target = '_blank';
			this.buyBtn.href = '';
			this.buyBtn.addEventListener('click', function () {
				ga('send', 'event', 'DiscoveryClickBuyButton', 'click');
				_widgetsAnalytics2.default.sendEvent(_extends({
					eventAction: _widgetsAnalytics.EVENT_NAME.BUY_BUTTON_CLICK,
					eventLabel: _this2.buyBtn.href
				}, _this2.defaultAnalyticsProperties));

				_this2.stopAutoSlideX();
			});
			this.eventsRootContainer.appendChild(this.buyBtn);
		}
	}, {
		key: 'setBuyBtnUrl',
		value: function setBuyBtnUrl() {
			if (this.buyBtn) {
				var event = this.eventsGroups[this.currentSlideX][this.currentSlideY];

				if (event && event.url) {
					this.buyBtn.href = event.url;
				}
			}
		}
	}, {
		key: 'initMessage',
		value: function initMessage() {
			var _this3 = this;

			this.messageDialog = document.createElement('div');
			this.messageDialog.classList.add("event-message");
			this.messageContent = document.createElement('div');
			this.messageContent.classList.add("event-message__content");

			var messageClose = document.createElement('div');
			messageClose.classList.add("event-message__btn");
			messageClose.addEventListener("click", function () {
				_this3.hideMessage();
			});

			this.messageDialog.appendChild(this.messageContent);
			this.messageDialog.appendChild(messageClose);
			this.eventsRootContainer.appendChild(this.messageDialog);
		}
	}, {
		key: 'showMessage',
		value: function showMessage(message, hideMessageWithoutDelay) {
			if (message.length) {
				this.hideMessageWithoutDelay = hideMessageWithoutDelay;
				this.messageContent.innerHTML = message;
				this.messageDialog.classList.add("event-message-visible");
				if (this.messageTimeout) {
					clearTimeout(this.messageTimeout); // Clear timeout if before 'hideMessageWithDelay' was called
				}
			}
		}
	}, {
		key: 'hideMessageWithDelay',
		value: function hideMessageWithDelay(delay) {
			var _this4 = this;

			if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout if this method was called before
			this.messageTimeout = setTimeout(function () {
				_this4.hideMessage();
			}, delay);
		}
	}, {
		key: 'hideMessage',
		value: function hideMessage() {
			if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout and hide message immediately.
			this.messageDialog.classList.remove("event-message-visible");
		}
	}, {
		key: 'AdditionalElements',
		value: function AdditionalElements() {
			var logo = document.createElement('a');
			logo.classList.add("event-logo");
			logo.target = '_blank';
			logo.href = this.logoUrl;
			logo.innerHTML = 'Powered by';

			var logoBox = document.createElement('div');
			logoBox.classList.add("event-logo-box");
			logoBox.appendChild(logo);
			this.eventsRootContainer.appendChild(logoBox);

			var question = document.createElement('span');
			question.classList.add("event-question");
			question.target = '_blank';
			question.href = this.questionUrl;
			question.addEventListener('click', toolTipHandler);
			this.widgetRoot.appendChild(question);

			var toolTip = document.createElement('div'),
			    tooltipHtml = '\n              <div class="tooltip-inner"> \n                <a href="' + this.questionUrl + '" target = "_blank" >About widget</a>\n                <div class="place">version: <b>' + this.widgetVersion + '</b></div>\n              </div>';
			toolTip.classList.add("tooltip-version");
			toolTip.classList.add("left");
			toolTip.innerHTML = tooltipHtml;
			this.widgetRoot.appendChild(toolTip);

			function toolTipHandler(e) {
				e.preventDefault();
				e.target.nextSibling.classList.toggle('show-tip');
			}
		}
	}, {
		key: 'hideSliderControls',
		value: function hideSliderControls() {
			this.prevEventX.classList.add(this.controlHiddenClass);
			this.nextEventX.classList.add(this.controlHiddenClass);
			this.prevEventY.classList.add(this.controlHiddenClass);
			this.nextEventY.classList.add(this.controlHiddenClass);
		}
	}, {
		key: 'toggleControlsVisibility',
		value: function toggleControlsVisibility() {
			// Horizontal
			if (this.slideCountX > 1) {
				this.prevEventX.classList.remove(this.controlHiddenClass);
				this.nextEventX.classList.remove(this.controlHiddenClass);
				if (this.currentSlideX === 0) {
					this.prevEventX.classList.add(this.controlHiddenClass);
				} else if (this.currentSlideX === this.slideCountX - 1) {
					this.nextEventX.classList.add(this.controlHiddenClass);
				}
			} else {
				this.prevEventX.classList.add(this.controlHiddenClass);
				this.nextEventX.classList.add(this.controlHiddenClass);
			}

			// Vertical
			if (this.eventsGroups.length) {
				if (this.eventsGroups[this.currentSlideX].length > 1) {
					this.prevEventY.classList.remove(this.controlHiddenClass);
					this.nextEventY.classList.remove(this.controlHiddenClass);
					if (this.currentSlideY === 0) {
						this.prevEventY.classList.add(this.controlHiddenClass);
					} else if (this.currentSlideY === this.eventsGroups[this.currentSlideX].length - 1) {
						this.nextEventY.classList.add(this.controlHiddenClass);
					}
				} else {
					this.prevEventY.classList.add(this.controlHiddenClass);
					this.nextEventY.classList.add(this.controlHiddenClass);
				}
			} else {
				this.prevEventY.classList.add(this.controlHiddenClass);
				this.nextEventY.classList.add(this.controlHiddenClass);
			}
		}
	}, {
		key: 'prevSlideX',
		value: function prevSlideX() {
			if (this.currentSlideX > 0) {
				this.setSlideManually(this.currentSlideX - 1, true);
			}
		}
	}, {
		key: 'nextSlideX',
		value: function nextSlideX() {
			if (this.slideCountX - 1 > this.currentSlideX) {
				this.setSlideManually(this.currentSlideX + 1, true);
			}
		}
	}, {
		key: 'prevSlideY',
		value: function prevSlideY() {
			if (this.currentSlideY > 0) {
				this.setSlideManually(this.currentSlideY - 1, false);
			}
		}
	}, {
		key: 'nextSlideY',
		value: function nextSlideY() {
			if (this.eventsGroups[this.currentSlideX].length - 1 > this.currentSlideY) {
				this.setSlideManually(this.currentSlideY + 1, false);
			}
		}
	}, {
		key: 'setSlideManually',
		value: function setSlideManually(slideIndex, isDirectionX) {
			var _this5 = this;

			this.stopAutoSlideX();
			this.sliderTimeout = setTimeout(function () {
				_this5.runAutoSlideX();
			}, this.sliderRestartDelay);
			if (isDirectionX) this.goToSlideX(slideIndex);else this.goToSlideY(slideIndex);
		}
	}, {
		key: 'goToSlideX',
		value: function goToSlideX(slideIndex) {
			if (this.currentSlideX === slideIndex) return;
			this.currentSlideY = 0;
			this.currentSlideX = slideIndex;
			this.eventsRoot.style.marginLeft = '-' + this.currentSlideX * 100 + '%';
			this.toggleControlsVisibility();
			this.setEventsCounter();
			this.setBuyBtnUrl();
		}
	}, {
		key: 'goToSlideY',
		value: function goToSlideY(slideIndex) {
			if (this.currentSlideY === slideIndex) return;
			this.currentSlideY = slideIndex;
			var eventGroup = this.eventsRoot.getElementsByClassName("event-group-" + this.currentSlideX);
			if (eventGroup.length) {
				eventGroup = eventGroup[0];
				eventGroup.style.marginTop = '-' + this.currentSlideY * (this.widgetContentHeight - this.borderSize * 2) + 'px';
				this.toggleControlsVisibility();
				this.setBuyBtnUrl();
			}
		}
	}, {
		key: 'runAutoSlideX',
		value: function runAutoSlideX() {
			var _this6 = this;

			if (this.slideCountX > 1) {
				this.sliderInterval = setInterval(function () {
					var slideIndex = 0;
					if (_this6.slideCountX - 1 > _this6.currentSlideX) slideIndex = _this6.currentSlideX + 1;
					_this6.goToSlideX(slideIndex);
				}, this.sliderDelay);
			}
		}
	}, {
		key: 'stopAutoSlideX',
		value: function stopAutoSlideX() {
			if (this.sliderTimeout) clearTimeout(this.sliderTimeout);
			if (this.sliderInterval) clearInterval(this.sliderInterval);
		}
	}, {
		key: 'initSliderControls',
		value: function initSliderControls() {
			var _this7 = this;

			this.currentSlideX = 0;
			this.currentSlideY = 0;
			this.slideCountX = 0;
			var coreCssClass = 'events_control';

			// left btn
			this.prevEventX = document.createElement("div");
			var prevEventXClass = [coreCssClass, coreCssClass + '-horizontal', coreCssClass + '-left', this.controlHiddenClass];
			for (var i in prevEventXClass) {
				this.prevEventX.classList.add(prevEventXClass[i]);
			}
			this.eventsRootContainer.appendChild(this.prevEventX);

			// right btn
			this.nextEventX = document.createElement("div");
			var nextEventXClass = [coreCssClass, coreCssClass + '-horizontal', coreCssClass + '-right', this.controlHiddenClass];
			for (var _i in nextEventXClass) {
				this.nextEventX.classList.add(nextEventXClass[_i]);
			}
			this.eventsRootContainer.appendChild(this.nextEventX);

			// top btn
			this.prevEventY = document.createElement("div");
			var prevEventYClass = [coreCssClass, coreCssClass + '-vertical', coreCssClass + '-top', this.controlHiddenClass];
			for (var _i2 in prevEventYClass) {
				this.prevEventY.classList.add(prevEventYClass[_i2]);
			}
			this.eventsRootContainer.appendChild(this.prevEventY);

			// bottom btn
			this.nextEventY = document.createElement("div");
			var nextEventYClass = [coreCssClass, coreCssClass + '-vertical', coreCssClass + '-bottom', this.controlHiddenClass];
			for (var _i3 in nextEventYClass) {
				this.nextEventY.classList.add(nextEventYClass[_i3]);
			}
			this.eventsRootContainer.appendChild(this.nextEventY);

			// Restore events group position
			function whichTransitionEvent() {
				var el = document.createElement('fakeelement'),
				    transitions = {
					'transition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'MozTransition': 'transitionend',
					'WebkitTransition': 'webkitTransitionEnd'
				};

				for (var event in transitions) {
					if (el.style[event] !== undefined) return transitions[event];
				}
			}

			var transitionEvent = whichTransitionEvent();
			transitionEvent && this.eventsRoot.addEventListener(transitionEvent, function (e) {
				if (_this7.eventsRoot !== e.target) return;
				var eventGroup = _this7.eventsRoot.getElementsByClassName("event-group");
				// Reset all groups. We don't know what event group was visible before.
				for (var _i4 = 0; eventGroup.length > _i4; _i4++) {
					eventGroup[_i4].style.marginTop = 0;
				}
			});

			// Arrows
			this.prevEventX.addEventListener("click", function () {
				_this7.prevSlideX();
			});

			this.nextEventX.addEventListener("click", function () {
				_this7.nextSlideX();
			});

			this.prevEventY.addEventListener("click", function () {
				_this7.prevSlideY();
			});

			this.nextEventY.addEventListener("click", function () {
				_this7.nextSlideY();
			});

			// Tough device swipes
			var xDown = null,
			    yDown = null;

			function handleTouchStart(evt) {
				xDown = evt.touches[0].clientX;
				yDown = evt.touches[0].clientY;
			}

			function handleTouchMove(evt) {
				if (!xDown || !yDown) return;

				var xUp = evt.touches[0].clientX,
				    yUp = evt.touches[0].clientY,
				    xDiff = xDown - xUp,
				    yDiff = yDown - yUp;

				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0) this.nextSlideX(); // left swipe
					else this.prevSlideX(); // right swipe
				} else {
					if (yDiff > 0) this.nextSlideY(); // up swipe
					else this.prevSlideY(); // down swipe
				}

				xDown = null;
				yDown = null;
			}

			this.eventsRootContainer.addEventListener('touchstart', function (e) {
				if (_this7.config.theme !== "calendar") {
					if (e.target.className != 'event-logo' && e.target.className != 'event-question') e.preventDefault();
				} /*used in plugins for 'buy button'*/
				handleTouchStart.call(_this7, e);
			}, false);
			this.eventsRootContainer.addEventListener('touchmove', function (e) {
				if (_this7.config.theme !== "calendar") {
					if (e.target.className != 'event-logo' && e.target.className != 'event-question') e.preventDefault();
				}
				handleTouchMove.call(_this7, e);
			}, false);
		}
	}, {
		key: 'initSlider',
		value: function initSlider() {
			if (this.sliderInterval) clearInterval(this.sliderInterval);
			if (this.sliderTimeout) clearTimeout(this.sliderTimeout);
			this.slideCountX = this.eventsGroups.length;
			this.eventsRoot.style.marginLeft = '0%';
			this.eventsRoot.style.width = this.slideCountX * 100 + '%';
			this.currentSlideX = 0;
			this.currentSlideY = 0;
			this.runAutoSlideX();
			this.toggleControlsVisibility();
			this.setBuyBtnUrl();
		}
	}, {
		key: 'formatDate',
		value: function formatDate(date) {
			var result = '';
			if (date == undefined || !date.day || date.day == undefined) return result; // Day is required

			function LZ(x) {
				return (x < 0 || x > 9 ? "" : "0") + x;
			}
			var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			    DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			    dayArray = date.day.split('-'),
			    d = parseInt(dayArray[2]),
			    M = parseInt(dayArray[1]);

			// var E = new Date(date.day).getDay();
			var E = new Date(+date.day.split('-')[0], +date.day.split('-')[1] - 1, +date.day.split('-')[2]).getDay();
			result = DAY_NAMES[E] + ', ' + MONTH_NAMES[M - 1] + ' ' + d + ', ' + dayArray[0];

			if (!date.time) return result;

			var timeArray = date.time.split(':'),
			    H = parseInt(timeArray[0]),
			    m = timeArray[1],
			    a = "AM";

			if (H > 11) a = "PM";
			if (H == 0) {
				H = 12;
			} else if (H > 12) {
				H = H - 12;
			}

			return result + ' ' + LZ(H) + ':' + m + ' ' + a;
		}
	}, {
		key: 'clearEvents',
		value: function clearEvents() {
			this.eventsRoot.innerHTML = "";
		}
	}, {
		key: 'clear',
		value: function clear() {
			var modificatorList = this.widgetRoot.getElementsByClassName('modificator');
			while (modificatorList.length) {
				var el = modificatorList[0],
				    parent = el.parentNode;
				parent.removeChild(el);
			}

			this.clearEvents();
		}
	}, {
		key: 'loadCustomStyle',
		value: function loadCustomStyle() {

			var sheet = void 0;

			if (this.widgetRoot.getElementsByTagName('style')[0] == undefined) {
				var cusStyle = document.createElement("style");
				this.widgetRoot.appendChild(cusStyle);
				sheet = cusStyle.sheet;
			} else {
				sheet = this.widgetRoot.getElementsByTagName('style')[0].sheet;
			}

			if (this.widgetRoot.getAttribute("w-background") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .tabs', 'background: ' + this.widgetRoot.getAttribute("w-background"));
				sheet.insertRule('div[w-theme="calendar"] .tabs { background: ' + this.widgetRoot.getAttribute("w-background") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-textcolor") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .tabs span', 'color: ' + this.widgetRoot.getAttribute("w-textcolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span { color: ' + this.widgetRoot.getAttribute("w-textcolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .selector-title', 'color: ' + this.widgetRoot.getAttribute("w-textcolor"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title { color: ' + this.widgetRoot.getAttribute("w-textcolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .selector-title:after', 'border-color: ' + this.widgetRoot.getAttribute("w-textcolor"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title:after { border-color: ' + this.widgetRoot.getAttribute("w-textcolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-bordercolor") != undefined) {
				sheet.addRule('.div[w-theme="calendar"]', 'border-color: ' + this.widgetRoot.getAttribute("w-bordercolor"));
				sheet.insertRule('div[w-theme="calendar"] { border-color: ' + this.widgetRoot.getAttribute("w-bordercolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-tabsbordercolor") != undefined) {
				sheet.addRule('.div[w-theme="calendar"] .tabs span', 'border-color: ' + this.widgetRoot.getAttribute("w-tabsbordercolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span { border-color: ' + this.widgetRoot.getAttribute("w-tabsbordercolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .tabs span:first-child', 'border-color: ' + this.widgetRoot.getAttribute("w-tabsbordercolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span:first-child { border-color: ' + this.widgetRoot.getAttribute("w-tabsbordercolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-tabcolor") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .tabs span.active', 'color: ' + this.widgetRoot.getAttribute("w-tabcolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span.active { color: ' + this.widgetRoot.getAttribute("w-tabcolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .tabs span.active:hover', 'color: ' + this.widgetRoot.getAttribute("w-tabcolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span.active:hover { color: ' + this.widgetRoot.getAttribute("w-tabcolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-tabbackground") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .tabs span.active', 'background: ' + this.widgetRoot.getAttribute("w-tabbackground"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span.active { background: ' + this.widgetRoot.getAttribute("w-tabbackground") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .tabs span.active:hover', 'background: ' + this.widgetRoot.getAttribute("w-tabbackground"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span.active:hover { background: ' + this.widgetRoot.getAttribute("w-tabbackground") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-hovertabcolor") != undefined) {
				sheet.addRule('.div[w-theme="calendar"] .tabs span:hover', 'color: ' + this.widgetRoot.getAttribute("w-hovertabcolor"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span:hover { color: ' + this.widgetRoot.getAttribute("w-hovertabcolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-hovertabbackground") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .tabs span:hover', 'background: ' + this.widgetRoot.getAttribute("w-hovertabbackground"));
				sheet.insertRule('div[w-theme="calendar"] .tabs span:hover { background: ' + this.widgetRoot.getAttribute("w-hovertabbackground") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-selectorcolorhover") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .selector-title:hover', 'color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title:hover { color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .selector-title:hover:after', 'border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title:hover:after { border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .selector-title.open:after', 'border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title.open:after { border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .selector-title.open:hover:after', 'border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .selector-title.open:hover:after { border-color: ' + this.widgetRoot.getAttribute("w-selectorcolorhover") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-datesbackground") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .selector-content', 'background: ' + this.widgetRoot.getAttribute("w-datesbackground"));
				sheet.insertRule('div[w-theme="calendar"] .selector-content { background: ' + this.widgetRoot.getAttribute("w-datesbackground") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-datescolor") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .selector-content span', 'color: ' + this.widgetRoot.getAttribute("w-datescolor"));
				sheet.insertRule('div[w-theme="calendar"] .selector-content span { color: ' + this.widgetRoot.getAttribute("w-datescolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-datescolorhover") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .selector-content span:hover', 'color: ' + this.widgetRoot.getAttribute("w-datescolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .selector-content span:hover { color: ' + this.widgetRoot.getAttribute("w-datescolorhover") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-schedulesdotscolor") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .d .round', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .d .round { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round', 'color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round { color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round', 'border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round { border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round .count', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round .count { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar table td.today .round', 'color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar table td.today .round { color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .year .month .count', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor"));
				sheet.insertRule('div[w-theme="calendar"] .year .month .count { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-schedulesdotscolorhover") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .d .round:hover', 'color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .d .round:hover { color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover', 'border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover { border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover, div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .round, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .count', 'background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover, div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .round, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .count { background: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover, div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .round, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .count', 'border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .round:hover, div[w-theme="calendar"] .monthScheduler .calendar .round:hover .count, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .round, div[w-theme="calendar"] .monthScheduler .calendar .round-holder.active .count { border-color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-popuscolor") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .name, div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .name:hover, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .name, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .name:hover', 'color: ' + this.widgetRoot.getAttribute("w-popuscolor"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .name, div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .name:hover, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .name, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .name:hover { color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .date, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .date, div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .place, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .place', 'color: ' + this.widgetRoot.getAttribute("w-popuscolor"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .date, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .date, div[w-theme="calendar"] .weekSсheduler .days .popup .event .event-holder .place, div[w-theme="calendar"] .weekSсheduler .days .popup-up .event .event-holder .place { color: ' + this.widgetRoot.getAttribute("w-schedulesdotscolorhover") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .name, div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .name:hover, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .name, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .name:hover', 'color: ' + this.widgetRoot.getAttribute("w-popuscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .name, div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .name:hover, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .name, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .name:hover { color: ' + this.widgetRoot.getAttribute("w-popuscolor") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .date, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .date, div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .place, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .place', 'color: ' + this.widgetRoot.getAttribute("w-popuscolor"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .date, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .date, div[w-theme="calendar"] .monthScheduler .calendar .popup .event .event-holder .place, div[w-theme="calendar"] .monthScheduler .calendar .popup-up .event .event-holder .place { color: ' + this.widgetRoot.getAttribute("w-popuscolor") + ' }', 0);
			}

			if (this.widgetRoot.getAttribute("w-popusbackground") != undefined) {
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .popup', 'background: ' + this.widgetRoot.getAttribute("w-popusbackground"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .popup { background: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .popup-up', 'background: ' + this.widgetRoot.getAttribute("w-popusbackground"));
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .popup-up { background: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .tail:before', 'border-color: transparent transparent ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent');
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .tail:before { border-color: transparent transparent ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent}', 0);
				sheet.addRule('div[w-theme="calendar"] .weekSсheduler .days .tail-up:before', 'border-color: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent transparent transparent');
				sheet.insertRule('div[w-theme="calendar"] .weekSсheduler .days .tail-up:before { border-color: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent transparent transparent}', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .popup-up', 'background: ' + this.widgetRoot.getAttribute("w-popusbackground"));
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .popup-up { background: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' }', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .tail:before', 'border-color: transparent transparent ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent');
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .tail:before { border-color: transparent transparent ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent}', 0);
				sheet.addRule('div[w-theme="calendar"] .monthScheduler .calendar .tail-up:before', 'border-color: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent transparent transparent');
				sheet.insertRule('div[w-theme="calendar"] .monthScheduler .calendar .tail-up:before { border-color: ' + this.widgetRoot.getAttribute("w-popusbackground") + ' transparent transparent transparent}', 0);
			}
			/* If custom colors isset */
		}
	}, {
		key: 'update',
		value: function update() {
			var _this8 = this;

			var widget = this.eventsRootContainer;
			var spinner = widget.querySelector('.spinner-container');
			spinner.classList.remove('hide');
			var oldTheme = this.config.constructor();
			/*
     if (this.widgetRoot.getAttribute("w-background") != undefined) this.widgetRoot.firstChild.style.background = this.widgetRoot.getAttribute("w-background");
     if (this.widgetRoot.getAttribute("w-textcolor") != undefined)  {
         var tabsColor = this.widgetRoot.querySelectorAll('.tb:not(.active)'),
             selColor = this.widgetRoot.querySelectorAll('.selector-title');
         tabsColor.forEach((el,i) => {
             el.style.color = this.widgetRoot.getAttribute("w-textcolor");
         });
         selColor.forEach((el,i) => {
             el.style.color = this.widgetRoot.getAttribute("w-textcolor");
         });
     }
     /*
     if (this.widgetRoot.getAttribute("w-tabcolor") != undefined) {
         this.widgetRoot.querySelector('.tb.active').style.color = this.widgetRoot.getAttribute("w-tabcolor");
     }
     if (this.widgetRoot.getAttribute("w-tabbackground") != undefined) {
         this.widgetRoot.querySelector('.tb.active').style.background = this.widgetRoot.getAttribute("w-tabbackground");
     }
     */
			for (var attr in this.config) {
				if (this.config.hasOwnProperty(attr)) oldTheme[attr] = this.config[attr];
			}

			this.config = this.widgetRoot.attributes;

			this.loadCustomStyle();

			this.widgetRoot.style.height = this.widgetHeight + 'px';
			this.widgetRoot.style.width = this.config.width + 'px';
			this.widgetRoot.style.borderRadius = this.config.borderradius + 'px';
			this.widgetRoot.style.borderWidth = this.borderSize + 'px';

			this.getCurrentWeek();

			this.eventsRootContainer.classList.remove("border");

			widget.querySelector('.events-root-container .spinner-container').classList.add('hide');

			if (this.config.hasOwnProperty("border")) {
				this.eventsRootContainer.classList.add("border");
			}

			if (!this.needToUpdate(this.config, oldTheme, this.updateExceptions) || this.needToUpdate(this.config, oldTheme, this.updateExceptions)) {
				this.clear();

				this.getCoordinates(function () {
					_this8.makeRequest(_this8.eventsLoadingHandler, _this8.apiUrl, _this8.eventReqAttrs);
				});
			} else {
				var events = this.eventsRoot.getElementsByClassName("event-wrapper");
				for (var i in events) {
					if (events.hasOwnProperty(i) && events[i].style !== undefined) {
						events[i].style.width = this.config.width + 'px';
						events[i].style.height = this.widgetContentHeight + 'px';
					}
				}
				this.goToSlideY(0);
			}
		}
	}, {
		key: 'needToUpdate',
		value: function needToUpdate(newTheme, oldTheme) {
			var forCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			return Object.keys(newTheme).map(function (key) {
				if (forCheck.indexOf(key) > -1) return true;
				//console.warn([key, newTheme[key], oldTheme[key], newTheme[key] === oldTheme[key]])
				return newTheme[key] === oldTheme[key];
			}).indexOf(false) > -1;
		}
	}, {
		key: 'loadConfig',
		value: function loadConfig(NamedNodeMap) {
			var config = {};
			Object.keys(NamedNodeMap).map(function (value) {
				if (typeof NamedNodeMap[value].name !== "undefined" && NamedNodeMap[value].name.indexOf("w-") !== -1) {
					config[NamedNodeMap[value].name.replace(/w-/g, "").replace(/-/g, "")] = NamedNodeMap[value].value;
				}
			});
			return config;
		}
	}, {
		key: 'styleLoadingHandler',
		value: function styleLoadingHandler() {
			if (this && this.readyState == XMLHttpRequest.DONE) {
				if (this.status == 200) {
					var style = document.createElement("style");
					style.setAttribute("type", "text/css");
					style.setAttribute("id", 'widget-theme-' + this.widget.config.theme);
					style.textContent = this.responseText;
					document.getElementsByTagName("head")[0].appendChild(style);
				} else {
					console.log("theme wasn't loaded");
				}
			}
		}
	}, {
		key: 'groupEventsByName',
		value: function groupEventsByName() {
			var groups = {};
			this.events.map(function (event) {
				if (groups[event.name] === undefined) groups[event.name] = [];
				groups[event.name].push(event);
			});

			this.eventsGroups = [];
			for (var groupName in groups) {
				this.eventsGroups.push(groups[groupName]);
			}
		}
	}, {
		key: 'initEventCounter',
		value: function initEventCounter() {
			this.eventsCounter = document.createElement("div");
			this.eventsCounter.classList.add("events-counter");
			this.widgetRoot.appendChild(this.eventsCounter);
		}
	}, {
		key: 'setEventsCounter',
		value: function setEventsCounter() {
			if (this.eventsCounter) {
				var text = '';
				if (this.eventsGroups.length) {
					if (this.eventsGroups.length > 1) {
						text = this.currentSlideX + 1 + ' of ' + this.eventsGroups.length + ' events';
					} else {
						text = '1 event';
					}
				}
				this.eventsCounter.innerHTML = text;
			}
		}
	}, {
		key: 'resetReduceParamsOrder',
		value: function resetReduceParamsOrder() {
			this.reduceParamsOrder = 0;
		}
	}, {
		key: 'reduceParamsAndReloadEvents',
		value: function reduceParamsAndReloadEvents() {
			var eventReqAttrs = {},
			    reduceParamsList = [['startDateTime', 'endDateTime', 'country'], ['city'], ['countryCode'], ['radius'], ['postalCode', 'latlong'], ['classificationId'], ['attractionId'], ['promoterId'], ['segmentId'], ['venueId'], ['keyword'], ['size']];

			// make copy of params
			for (var key in this.eventReqAttrs) {
				eventReqAttrs[key] = this.eventReqAttrs[key];
			}

			if (!this.reduceParamsOrder) this.reduceParamsOrder = 0;
			if (reduceParamsList.length > this.reduceParamsOrder) {
				for (var item in reduceParamsList) {
					if (this.reduceParamsOrder >= item) {
						for (var i in reduceParamsList[item]) {
							delete eventReqAttrs[reduceParamsList[item][i]];
						}
					}
				}

				// if(this.reduceParamsOrder === 0) this.showMessage("No results were found.<br/>Here other options for you.");
				this.reduceParamsOrder++;
				this.makeRequest(this.eventsLoadingHandler, this.apiUrl, eventReqAttrs);
			} else {
				// We haven't any results
				this.showMessage("No results were found.", true);
				this.reduceParamsOrder = 0;
				this.hideSliderControls();
			}
		}
	}, {
		key: 'eventsLoadingHandler',
		value: function eventsLoadingHandler() {
			var widget = this.widget;

			var spinner = widget.eventsRootContainer.querySelector('.spinner-container');

			widget.clearEvents(); // Additional clearing after each loading
			if (this && this.readyState == XMLHttpRequest.DONE) {
				if (this.status == 200) {

					spinner.classList.add('hide');

					widget.events = JSON.parse(this.responseText);

					if (widget.events.length) {
						widget.groupEventsByName.call(widget);

						widget.eventsGroups.map(function (group, i) {
							if (group.length === 1) widget.publishEvent(group[0]);else widget.publishEventsGroup.call(widget, group, i);
						});

						widget.initSlider();
						widget.setEventsCounter();
						widget.resetReduceParamsOrder();
						if (widget.hideMessageWithoutDelay) widget.hideMessage();else widget.hideMessageWithDelay(widget.hideMessageDelay);
					} else {
						widget.reduceParamsAndReloadEvents.call(widget);
					}
				} else if (this.status == 400) {
					widget.reduceParamsAndReloadEvents.call(widget);
					console.log('There was an error 400');
				} else {
					widget.reduceParamsAndReloadEvents.call(widget);
					console.log('something else other than 200 was returned');
				}
			}
		}
	}, {
		key: 'publishEventsGroup',
		value: function publishEventsGroup(group, index) {
			var _this9 = this;

			var groupNodeWrapper = document.createElement("li");
			groupNodeWrapper.classList.add("event-wrapper");
			groupNodeWrapper.classList.add("event-group-wrapper");
			/*
     groupNodeWrapper.style.width  = `${this.config.width - this.borderSize * 2}px`;
     groupNodeWrapper.style.height = `${this.widgetContentHeight - this.borderSize * 2}px`;
     */
			groupNodeWrapper.style.width = this.config.width + 'px';
			groupNodeWrapper.style.height = this.widgetContentHeight + 'px';

			var groupNode = document.createElement("ul");
			groupNode.classList.add("event-group");
			groupNode.classList.add("event-group-" + index);

			group.map(function (event) {
				_this9.publishEvent(event, groupNode);
			});

			groupNodeWrapper.appendChild(groupNode);
			this.eventsRoot.appendChild(groupNodeWrapper);
		}
	}, {
		key: 'publishEvent',
		value: function publishEvent(event, parentNode) {
			parentNode = parentNode || this.eventsRoot;
			var DOMElement = this.createDOMItem(event);
			parentNode.appendChild(DOMElement);
		}
	}, {
		key: 'getEventByID',
		value: function getEventByID(id) {
			for (var index in this.events) {
				if (this.events.hasOwnProperty(index) && this.events[index].id === id) {
					return this.events[index];
				}
			}
		}
	}, {
		key: 'getImageForEvent',
		value: function getImageForEvent(images) {
			var width = this.config.width,
			    height = this.widgetContentHeight;

			images.sort(function (a, b) {
				if (a.width < b.width) return -1;else if (a.width > b.width) return 1;else return 0;
			});

			var myImg = "";
			images.forEach(function (element) {
				if (element.width >= width && element.height >= height && !myImg) {
					myImg = element.url;
				}
			});
			return myImg;
		}
	}, {
		key: 'parseEvents',
		value: function parseEvents(eventsSet) {
			if (!eventsSet._embedded) {
				if (typeof $widgetModalNoCode !== "undefined") {
					$widgetModalNoCode.modal();
				}
				return [];
			}
			eventsSet = eventsSet._embedded.events;

			var tmpEventSet = [];
			for (var key in eventsSet) {
				if (eventsSet.hasOwnProperty(key)) {
					var currentEvent = {};

					currentEvent.id = eventsSet[key].id;
					currentEvent.url = _url2.default.addParamToUrl(eventsSet[key].url, _widgetsAnalytics.SHARED_ID_ATTRIBUTE_NAME, _widgetsAnalytics.SHARED_ID_FOR_WIDGET.CALENDAR);
					currentEvent.name = eventsSet[key].name;

					currentEvent.date = {
						day: eventsSet[key].dates.start.localDate,
						time: eventsSet[key].dates.start.localTime
					};

					if (eventsSet[key].hasOwnProperty('_embedded') && eventsSet[key]._embedded.hasOwnProperty('venues')) {
						var venue = eventsSet[key]._embedded.venues[0];
						if (venue) {
							if (venue.address) currentEvent.address = venue.address;

							if (venue.name) {
								if (!currentEvent.address) currentEvent.address = {};
								currentEvent.address.name = venue.name;
							}
						}
					}

					// Remove this comment to get categories
					/*if(eventsSet[key]._embedded.hasOwnProperty('categories')){
          currentEvent.categories = [];
          let eventCategories = eventsSet[key]._embedded.categories;
          currentEvent.categories = Object.keys(eventCategories).map(function(category){
          return eventCategories[category].name
          });
          }*/

					currentEvent.img = this.getImageForEvent(eventsSet[key].images);

					tmpEventSet.push(currentEvent);
				}
			}
			return tmpEventSet;
		}
	}, {
		key: 'makeRequest',
		value: function makeRequest(handler) {
			var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apiUrl;
			var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "GET";

			attrs = Object.keys(attrs).map(function (key) {
				return key + '=' + attrs[key];
			}).join("&");
			url = [url, attrs].join("?");
			if (this.widgetRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + this.widgetRoot.getAttribute('w-postalcodeapi');
			url += '&sort=date,asc';
			this.xmlHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			if (method == "POST") {
				this.xmlHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			}
			this.xmlHTTP.widget = this;
			this.xmlHTTP.onreadystatechange = handler;
			this.xmlHTTP.open(method, url, true);
			this.xmlHTTP.send();
		}
	}, {
		key: 'initPretendedLink',
		value: function initPretendedLink(el, url, isBlank) {
			if (el && url) {
				el.setAttribute('data-url', url);
				el.classList.add("event-pretended-link");
				el.addEventListener('click', function () {
					var url = this.getAttribute('data-url');
					if (url) {
						var win = window.open(url, isBlank ? '_blank' : '_self');
						win.focus();
					}
				});
				el.addEventListener('touchstart', function () {
					var url = this.getAttribute('data-url');
					if (url) {
						var win = window.open(url, isBlank ? '_blank' : '_self');
						win.focus();
					}
				});
			}
			return el;
		}
	}, {
		key: 'createBackgroundImage',
		value: function createBackgroundImage(event, img) {
			var image = document.createElement("span");
			image.classList.add("bg-cover");
			image.style.backgroundImage = 'url(\'' + img + '\')';
			event.appendChild(image);
		}
	}, {
		key: 'addBuyButton',
		value: function addBuyButton(domNode, url) {
			var _this10 = this;

			var buyBtn = document.createElement("a");
			buyBtn.appendChild(document.createTextNode('BUY NOW'));
			buyBtn.classList.add("event-buy-btn");
			buyBtn.target = '_blank';
			buyBtn.href = url;
			buyBtn.addEventListener('click', function () {
				ga('send', 'event', 'DiscoveryClickBuyButton', 'click');
				_widgetsAnalytics2.default.sendEvent(_extends({
					eventAction: _widgetsAnalytics.EVENT_NAME.BUY_BUTTON_CLICK,
					eventLabel: buyBtn.href
				}, _this10.defaultAnalyticsProperties));
			});
			domNode.appendChild(buyBtn);
		}
	}, {
		key: 'createDOMItem',
		value: function createDOMItem(itemConfig) {
			var _this11 = this;

			var medWrapper = document.createElement("div");
			medWrapper.classList.add("event-content-wraper");

			var event = document.createElement("li");
			event.classList.add("event-wrapper");

			/* event.style.height = `${this.widgetContentHeight - this.borderSize * 2}px`;
     event.style.width  = `${this.config.width - this.borderSize * 2}px`;
     */

			event.style.height = this.widgetContentHeight + 'px';
			event.style.width = this.config.width + 'px';

			this.createBackgroundImage(event, itemConfig.img);

			var nameContent = document.createTextNode(itemConfig.name),
			    name = document.createElement("span");
			name.classList.add("event-name");
			name.appendChild(nameContent);
			this.initPretendedLink(name, itemConfig.url, true);
			var self = this;
			name.addEventListener('click', function (e) {
				ga('send', 'event', 'DiscoveryClickeventName_theme=' + self.config.theme + '_width=' + self.config.width + '_height=' + self.config.height + '_color_scheme=' + self.config.colorscheme, 'click', '' + itemConfig.url);
				_widgetsAnalytics2.default.sendEvent(_extends({
					eventAction: _widgetsAnalytics.EVENT_NAME.EVENT_NAME_CLICK,
					eventLabel: itemConfig.url
				}, _this11.defaultAnalyticsProperties));
			});

			/* name.setAttribute('onclick', "ga('send', 'event', 'DiscoveryClickeventName', 'click', '" + itemConfig.url + "');"); */
			medWrapper.appendChild(name);

			if (this.isListView) {
				this.addBuyButton(medWrapper, itemConfig.url);
			}

			var dateTimeContent = document.createTextNode(this.formatDate(itemConfig.date)),
			    dateTime = document.createElement("span");
			dateTime.classList.add("event-date");
			dateTime.appendChild(dateTimeContent);

			var dateWraper = document.createElement("span");
			dateWraper.classList.add("event-date-wraper");
			dateWraper.appendChild(dateTime);
			medWrapper.appendChild(dateWraper);

			if (itemConfig.hasOwnProperty("address")) {
				var addressWrapper = document.createElement("span");
				addressWrapper.classList.add("address-wrapper");

				if (itemConfig.address.hasOwnProperty("name")) {
					var addressNameText = document.createTextNode(itemConfig.address.name),
					    addressName = document.createElement("span");
					addressName.classList.add("event-address");
					addressName.classList.add("event-address-name");
					addressName.appendChild(addressNameText);
					addressWrapper.appendChild(addressName);
				}

				if (itemConfig.address.hasOwnProperty("line1")) {
					var addressOneText = document.createTextNode(itemConfig.address.line1),
					    addressOne = document.createElement("span");
					addressOne.classList.add("event-address");
					addressOne.appendChild(addressOneText);
					addressWrapper.appendChild(addressOne);
				}

				if (itemConfig.address.hasOwnProperty("line2")) {
					var addressTwoText = document.createTextNode(itemConfig.address.line2),
					    addressTwo = document.createElement("span");
					addressTwo.classList.add("event-address");
					addressTwo.appendChild(addressTwoText);
					addressWrapper.appendChild(addressTwo);
				}

				medWrapper.appendChild(addressWrapper);
			}

			if (itemConfig.hasOwnProperty("categories")) {
				var categoriesWrapper = document.createElement("span");
				categoriesWrapper.classList.add("category-wrapper");

				itemConfig.categories.forEach(function (element) {
					var categoryText = document.createTextNode(element),
					    category = document.createElement("span");
					category.classList.add("event-category");
					category.appendChild(categoryText);
					categoriesWrapper.appendChild(category);
				});
				medWrapper.appendChild(categoriesWrapper);
			}

			event.appendChild(medWrapper);

			return event;
		}
	}, {
		key: 'makeImageUrl',
		value: function makeImageUrl(id) {
			return 'https://app.ticketmaster.com/discovery-widgets/v2/events/' + id + '/images.json';
		}

		/* Config block */

	}, {
		key: 'decConfig',
		value: function decConfig(config) {
			return JSON.parse(window.atob(config));
		}
	}, {
		key: 'encConfig',
		value: function encConfig(config) {
			return window.btoa(config);
		}
	}, {
		key: 'toShortISOString',
		value: function toShortISOString(dateObj) {
			return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1 < 10 ? "0" + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1) + "-" + (dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate()) + "T" + (dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours()) + ":" + (dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes()) + ":" + (dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds()) + "Z";
		}
	}, {
		key: 'getDateFromPeriod',
		value: function getDateFromPeriod(period) {
			var firstDay = new Date();
			var lastDay = new Date();
			lastDay.setDate(lastDay.getDate() + 1);

			if (period != 'week') {
				period = new Date(document.querySelector('[w-type="calendar"]').getAttribute("w-period"));
				var _firstDay = new Date(period);
				var _lastDay = new Date(period);
				_lastDay.setDate(_lastDay.getDate() + 1);
				_firstDay.setHours(0);_lastDay.setHours(23);
				_firstDay.setMinutes(0);_lastDay.setMinutes(59);
				_firstDay.setSeconds(0);_lastDay.setSeconds(59);
			}

			firstDay = new Date(new Date(new Date()).toISOString());
			lastDay = new Date(new Date(new Date().valueOf() + 24 * 60 * 60 * 1000).toISOString());

			return [this.toShortISOString(firstDay), this.toShortISOString(lastDay)];
		}
	}]);

	return TicketmasterCalendarWidget;
}();

exports.default = TicketmasterCalendarWidget;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _widgetsAnalytics = __webpack_require__(1);

var _widgetsAnalytics2 = _interopRequireDefault(_widgetsAnalytics);

var _url = __webpack_require__(3);

var _url2 = _interopRequireDefault(_url);

var _SelectorControls = __webpack_require__(2);

var _SelectorControls2 = _interopRequireDefault(_SelectorControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeekScheduler = function () {
  _createClass(WeekScheduler, [{
    key: 'addScroll',
    value: function addScroll() {
      (function (n, t) {
        function u(n) {
          n.hasOwnProperty("data-simple-scrollbar") || Object.defineProperty(n, "data-simple-scrollbar", new SimpleScrollbar(n));
        }function e(n, i) {
          function f(n) {
            var t = n.pageY - u;u = n.pageY;r(function () {
              i.el.scrollTop += t / i.scrollRatio;
            });
          }function e() {
            n.classList.remove("ss-grabbed");t.body.classList.remove("ss-grabbed");t.removeEventListener("mousemove", f);t.removeEventListener("mouseup", e);
          }var u;n.addEventListener("mousedown", function (i) {
            return u = i.pageY, n.classList.add("ss-grabbed"), t.body.classList.add("ss-grabbed"), t.addEventListener("mousemove", f), t.addEventListener("mouseup", e), !1;
          });
        }function i(n) {
          for (this.target = n, this.bar = '<div class="ss-scroll">', this.wrapper = t.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = t.createElement("div"), this.el.setAttribute("class", "ss-content"), this.wrapper.appendChild(this.el); this.target.firstChild;) {
            this.el.appendChild(this.target.firstChild);
          }this.target.appendChild(this.wrapper);this.target.insertAdjacentHTML("beforeend", this.bar);this.bar = this.target.lastChild;e(this.bar, this);this.moveBar();this.el.addEventListener("scroll", this.moveBar.bind(this));this.el.addEventListener("mouseenter", this.moveBar.bind(this));this.target.classList.add("ss-container");
        }function f() {
          for (var i = t.querySelectorAll("*[ss-container]"), n = 0; n < i.length; n++) {
            u(i[n]);
          }
        }var r = n.requestAnimationFrame || n.setImmediate || function (n) {
          return setTimeout(n, 0);
        };i.prototype = { moveBar: function moveBar() {
            var t = this.el.scrollHeight,
                i = this.el.clientHeight,
                n = this;this.scrollRatio = i / t;r(function () {
              n.bar.style.cssText = "height:" + i / t * 100 + "%; top:" + n.el.scrollTop / t * 100 + "%;right:-" + (n.target.clientWidth - n.bar.clientWidth) + "px;";
            });
          } };t.addEventListener("DOMContentLoaded", f);i.initEl = u;i.initAll = f;n.SimpleScrollbar = i;
      })(window, document);
      var scrollRoot = document.querySelectorAll(".ss");
      var maxL = scrollRoot.length;
      for (var ml = 0; ml < maxL; ml++) {
        SimpleScrollbar.initEl(scrollRoot[ml]);
      }
    }
  }, {
    key: 'initMessage',
    value: function initMessage(schedulerRoot) {
      var _this = this;

      this.eventsRootContainer = schedulerRoot;
      this.messageDialogContainer = document.createElement('div');
      this.messageDialogContainer.classList.add("event-message-container");
      this.messageDialog = document.createElement('div');
      this.messageDialog.classList.add("event-message_");
      this.messageContent = document.createElement('div');
      this.messageContent.classList.add("event-message__content");

      var messageClose = document.createElement('div');
      messageClose.classList.add("event-message__btn");
      messageClose.addEventListener("click", function () {
        _this.hideMessage();
      });

      this.messageDialog.appendChild(this.messageContent);
      this.messageDialog.appendChild(messageClose);
      this.messageDialogContainer.appendChild(this.messageDialog);
      this.eventsRootContainer.appendChild(this.messageDialogContainer);
    }
  }, {
    key: 'showMessage',
    value: function showMessage(message, hideMessageWithoutDelay) {

      if (message.length) {
        this.hideMessageWithoutDelay = hideMessageWithoutDelay;
        this.messageContent.innerHTML = message;
        this.messageDialog.classList.add("event-message_-visible");
        if (this.messageTimeout) {
          clearTimeout(this.messageTimeout); // Clear timeout if before 'hideMessageWithDelay' was called
        }
      }
    }
  }, {
    key: 'hideMessageWithDelay',
    value: function hideMessageWithDelay(delay) {
      var _this2 = this;

      if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout if this method was called before
      this.messageTimeout = setTimeout(function () {
        _this2.hideMessage();
      }, delay);
    }
  }, {
    key: 'hideMessage',
    value: function hideMessage() {
      if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout and hide message immediately.
      this.messageDialog.classList.remove("event-message_-visible");
    }
  }, {
    key: 'getJSON',
    value: function getJSON(handler) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apiUrl;
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "GET";

      attrs = Object.keys(attrs).map(function (key) {
        return key + '=' + attrs[key];
      }).join("&");

      url = [url, attrs].join("?");
      var thisSchedulerRoot = this.weekSchedulerRoot.parentNode.parentNode.parentNode;
      if (thisSchedulerRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + thisSchedulerRoot.getAttribute('w-postalcodeapi');
      url += '&sort=date,asc';

      this.xmlHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      if (method == "POST") {
        this.xmlHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      this.xmlHTTP.widget = this;
      this.xmlHTTP.onreadystatechange = handler;
      this.xmlHTTP.open(method, url, true);
      this.xmlHTTP.send();
    }
  }, {
    key: 'getJsonAsync',
    value: function getJsonAsync(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
          if (xhr.status === 200) {
            var result = JSON.parse(xhr.response);
            resolve(result);
          } else {
            reject("Error loading JSON!");
          }
        };
        xhr.onerror = function () {
          reject("Error loading JSON!");
        };
        xhr.send();
      });
    }
  }, {
    key: 'formatDate',
    value: function formatDate(date) {
      var result = '';
      if (!date.day) return result; // Day is required

      function LZ(x) {
        return (x < 0 || x > 9 ? "" : "0") + x;
      }
      var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayArray = date.day.split('-'),
          d = parseInt(dayArray[2]),
          M = parseInt(dayArray[1]);

      // var E = new Date(date.day).getDay();
      var E = new Date(+date.day.split('-')[0], +date.day.split('-')[1] - 1, +date.day.split('-')[2]).getDay();
      result = DAY_NAMES[E] + ', ' + MONTH_NAMES[M - 1] + ' ' + d + ', ' + dayArray[0];

      if (!date.time) return result;

      var timeArray = date.time.split(':'),
          H = parseInt(timeArray[0]),
          m = timeArray[1],
          a = "AM";

      if (H > 11) a = "PM";
      if (H == 0) {
        H = 12;
      } else if (H > 12) {
        H = H - 12;
      }

      return result + ' ' + LZ(H) + ':' + m + ' ' + a;
    }
  }, {
    key: 'getWeekEventsHandler',
    value: function getWeekEventsHandler() {
      var self = this;
      return function () {
        var events = void 0;
        var place = void 0;
        var address = void 0;
        var weekEvents = [];
        var widget = this.widget;
        var schedulerRoot = widget.weekSchedulerRoot;
        var calendarWidgetRoot = this.widget.eventsRootContainer.parentNode.parentNode.parentNode;
        var spinner = schedulerRoot.querySelector('.spinner-container');
        var prm = [];
        var messageContainer = schedulerRoot.querySelector('.event-message-container');

        if (this && this.readyState == XMLHttpRequest.DONE) {

          if (this.status == 200) {

            events = JSON.parse(this.responseText);

            if (events.page.totalPages <= 1) {
              spinner.classList.add('hide');
              if (events.page.totalElements != 0) {
                events._embedded.events.forEach(function (item) {
                  item.url = _url2.default.addParamToUrl(item.url, _widgetsAnalytics.SHARED_ID_ATTRIBUTE_NAME, _widgetsAnalytics.SHARED_ID_FOR_WIDGET.CALENDAR);
                  if (item.hasOwnProperty('_embedded') && item._embedded.hasOwnProperty('venues')) {
                    if (item._embedded.venues[0].hasOwnProperty('name')) {
                      place = item._embedded.venues[0].name + ', ';
                    } else {
                      place = '';
                    }
                    if (item._embedded.venues[0].hasOwnProperty('address')) {
                      address = item._embedded.venues[0].address.line1;
                    } else {
                      address = '';
                    }
                  } else {
                    place = '';
                    address = '';
                  }

                  var imgWidth = void 0;
                  var index = void 0;
                  item.images.forEach(function (img, i) {
                    if (i == 0) imgWidth = img.width;
                    if (imgWidth > img.width) {
                      imgWidth = img.width;
                      index = i;
                    }
                  });

                  if (item.hasOwnProperty('dates') && item.dates.hasOwnProperty('start') && item.dates.start.hasOwnProperty('localTime')) {
                    if (+new Date(+new Date().getFullYear(), +new Date().getMonth(), +new Date().getDate()) <= +new Date(+item.dates.start.localDate.split('-')[0], +item.dates.start.localDate.split('-')[1] - 1, +item.dates.start.localDate.split('-')[2])) {
                      weekEvents.push({
                        'name': item.name,
                        'date': item.dates.start.localDate,
                        'time': item.dates.start.localTime,
                        'datetime': widget.formatDate({
                          day: item.dates.start.localDate,
                          time: item.dates.start.localTime
                        }),
                        'place': place + address,
                        'url': item.url,
                        'img': item.hasOwnProperty('images') && item.images[index] != undefined ? item.images[index].url : '',
                        'count': 0
                      });
                    }
                  }
                });
              } else {
                weekEvents[0] = {
                  date: '',
                  time: ''
                };
                messageContainer.classList.remove('hide');
                widget.showMessage("No results were found.<br/>Here other options for you.");
                widget.hideMessageWithDelay(widget.hideMessageDelay);
              }

              if (weekEvents[0] === undefined) {
                weekEvents[0] = {
                  date: '',
                  time: ''
                };
                messageContainer.classList.remove('hide');
                widget.showMessage("No results were found.<br/>Here other options for you.");
                widget.hideMessageWithDelay(widget.hideMessageDelay);
              }

              var tDate = weekEvents[0].date;
              var tTime = weekEvents[0].time.substr(0, 2);
              var count = 0;
              var startFlag = 0;
              var endFlag = 0;

              for (var e = 0, l = weekEvents.length; e < l; ++e) {
                if (tDate == weekEvents[e].date && tTime == weekEvents[e].time.substr(0, 2)) {
                  weekEvents[e].count = count;
                  endFlag = e;
                  count++;
                }
                if (tDate == weekEvents[e].date && tTime != weekEvents[e].time.substr(0, 2)) {
                  for (var i = startFlag; i <= endFlag; i++) {
                    weekEvents[i].count = count - 1;
                  }
                  tTime = weekEvents[e].time.substr(0, 2);
                  startFlag = e;
                  count = 0;
                }
                if (tDate != weekEvents[e].date || e == l - 1) {
                  for (var _i = startFlag; _i <= endFlag; _i++) {
                    weekEvents[_i].count = count - 1;
                  }
                  tDate = weekEvents[e].date;
                  tTime = weekEvents[e].time.substr(0, 2);
                  startFlag = e;
                  count = 0;
                }
              }

              var current = new Date();

              if (calendarWidgetRoot.getAttribute("w-period-week") != 'week') {
                var weekstart = new Date(calendarWidgetRoot.getAttribute("w-period-week"));
                weekstart.setDate(weekstart.getDate() - weekstart.getDay());
              } else {
                var weekstart = current.getDate() - current.getDay();
                weekstart = new Date(current.setDate(weekstart));
              }

              if (weekstart.getFullYear() == '1969') {
                current = new Date();
                weekstart = current.getDate() - current.getDay();
                weekstart = new Date(current.setDate(weekstart));
              }

              var currentSunday = weekstart;
              var daysDiv = '';
              var currentDayClass = '';
              var dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              var now = new Date();
              for (var _i2 = 0; _i2 <= 6; _i2++) {
                var day = new Date(new Date(currentSunday).getTime() + _i2 * 24 * 60 * 60 * 1000);
                if (day.getDay() == now.getDay() && day.getDate() == now.getDate()) currentDayClass = ' active';else currentDayClass = '';
                daysDiv += '<span class="d' + currentDayClass + '">' + dayOfWeek[_i2] + ' <span class="num">' + day.getDate() + '</span></span>';
              }
              var zeroLead = '';
              var timeTmp = '';
              var dateTmp = '';
              var monthTmp = '';
              var timeDiv = '<div class="top-gradient"></div><div class="ss time-wrapper"><div class="ss-container time-holder">';

              for (var _i3 = 13; _i3 <= 23; _i3++) {
                if (_i3 <= 9) {
                  zeroLead = '0';
                  timeTmp = '0' + _i3 + ":00:00";
                } else {
                  zeroLead = '';
                  timeTmp = _i3 + ":00:00";
                }
                timeDiv += '<div class="t t-' + _i3 + '"><span class="tl">' + zeroLead + _i3 + ' : 00</span>';

                var dayTmp = new Date(currentSunday);

                for (var d = 0; d <= 6; d++) {
                  var dayCount = 0;
                  if (d != 0) dayTmp.setDate(dayTmp.getDate() + 1);
                  if (parseInt(dayTmp.getMonth() + 1) <= 9) monthTmp = '0' + parseInt(dayTmp.getMonth() + 1);else monthTmp = dayTmp.getMonth() + 1;
                  if (parseInt(dayTmp.getDate()) <= 9) {
                    dateTmp = dayTmp.getFullYear() + '-' + monthTmp + '-' + '0' + parseInt(dayTmp.getDate());
                  } else {
                    dateTmp = dayTmp.getFullYear() + '-' + monthTmp + '-' + dayTmp.getDate();
                  }
                  timeDiv += '<div class="d d-' + d + '" w-date="' + dateTmp + '" w-time="' + zeroLead + _i3 + ':00:00">';

                  for (var _e = 0, _l = weekEvents.length; _e < _l; ++_e) {
                    if (weekEvents[_e].date == dateTmp && weekEvents[_e].time.substr(0, 2) == timeTmp.substr(0, 2)) {
                      if (dayCount == 0) {
                        timeDiv += '<span class="round"></span>';
                        if (weekEvents[_e].time.substring(0, 2) < 18) {
                          timeDiv += '<span class="tail"></span>';
                          timeDiv += '<div class="popup ';
                          if (weekEvents[_e].count == 0) timeDiv += 'single ';
                          timeDiv += 'ss" tabindex="-1">';
                          timeDiv += '<div class="ss-container">';
                        } else {
                          timeDiv += '<span class="tail-up"></span>';
                          timeDiv += '<div class="popup-up ';
                          if (weekEvents[_e].count == 0) timeDiv += 'single ';
                          timeDiv += 'ss" tabindex="-1">';
                          timeDiv += '<div class="ss-container">';
                        }
                        dayCount = 1;
                      }

                      var eventNameClickHandler = _widgetsAnalytics2.default.getStringEventHandler(_extends({
                        eventAction: _widgetsAnalytics.EVENT_NAME.EVENT_NAME_CLICK,
                        eventLabel: weekEvents[_e].url
                      }, self.calendarWidget.defaultAnalyticsProperties));

                      timeDiv += '<span class="event">';
                      timeDiv += '<span class="event-holder">';
                      timeDiv += '<a href="' + weekEvents[_e].url + '" target="_blank" onclick="' + eventNameClickHandler + '">';
                      if (weekEvents[_e].img !== '' && weekEvents[_e].img.length !== 0) {
                        timeDiv += '<span class="img bg-cover-default" style="background: url(' + weekEvents[_e].img + ') center center no-repeat"></span>';
                      } else {
                        timeDiv += '<span class="img bg-cover-default" ></span>';
                      }
                      timeDiv += '<span class="name">' + weekEvents[_e].name + '</span>';
                      timeDiv += '</a>';
                      timeDiv += '<span class="date">' + weekEvents[_e].datetime + '</span>';
                      timeDiv += '<span class="place">' + weekEvents[_e].place + '</span>';
                      timeDiv += '</span>';
                      timeDiv += '</span>';
                    }
                  }
                  if (dayCount == 1) timeDiv += '</div></div>';
                  timeDiv += '</div>';
                }
                timeDiv += '</div>';
              }
              timeDiv += '</div></div><div class="bottom-gradient"></div>';
              daysDiv += timeDiv;
              widget.weekdaysRootContainer.innerHTML = daysDiv;
              widget.addScroll();
              var rounds = widget.weekdaysRootContainer.querySelectorAll("span.round");
              for (var x = 0; x < rounds.length; x++) {
                rounds[x].addEventListener("click", function (e) {
                  widget.weekdaysRootContainer.querySelector('.top-gradient').style.display = "none";
                  widget.weekdaysRootContainer.querySelector('.bottom-gradient').style.display = "none";
                  widget.weekdaysRootContainer.querySelectorAll(".ss-wrapper")[0].style.overflow = "visible";
                  widget.weekdaysRootContainer.querySelectorAll(".ss-content")[0].style.overflow = "visible";
                  this.nextElementSibling.classList.add("show");
                  this.nextElementSibling.nextElementSibling.classList.add("show");
                  this.nextElementSibling.nextElementSibling.focus();
                }, false);
              }

              var popups = widget.weekdaysRootContainer.querySelectorAll(".popup, .popup-up");
              for (var y = 0; y < popups.length; y++) {
                popups[y].addEventListener("blur", function (e) {
                  var self = this;
                  widget.weekdaysRootContainer.querySelector('.top-gradient').style.display = "";
                  widget.weekdaysRootContainer.querySelector('.bottom-gradient').style.display = "";
                  widget.weekdaysRootContainer.querySelectorAll(".ss-wrapper")[0].style.overflow = "hidden";
                  widget.weekdaysRootContainer.querySelectorAll(".ss-content")[0].style.overflow = "auto";
                  setTimeout(function () {
                    self.previousElementSibling.classList.remove("show");
                    self.classList.remove("show");
                  }, 127);
                }, false);
              }
            } else {
              weekEvents = [];
              var weekEventsConcat = [];
              var _l2 = events.page.totalPages - 1;
              var maxRequestsNumber = 3;
              var numberOfRequests = Math.min(_l2, maxRequestsNumber);

              var _loop = function _loop(_i4) {
                var attrs = widget.eventReqAttrs;
                attrs.page = _i4;
                attrs = Object.keys(attrs).map(function (key) {
                  return key + '=' + attrs[key];
                }).join("&");
                var url = void 0;
                url = widget.apiUrl + [url, attrs].join("?");
                var thisSchedulerRoot = widget.weekSchedulerRoot.parentNode.parentNode.parentNode;
                if (thisSchedulerRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + thisSchedulerRoot.getAttribute('w-postalcodeapi');
                url += '&sort=date,asc';
                prm.push(widget.getJsonAsync(url));
                prm.push(new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve(widget.getJsonAsync(url));
                  }, _i4 * 500);
                }));
              };

              for (var _i4 = 0; _i4 <= numberOfRequests; _i4++) {
                _loop(_i4);
              }
              Promise.all(prm).then(function (value) {
                spinner.classList.add('hide');
                var le = value.length;
                for (var _e2 = 0; _e2 <= le; _e2++) {
                  if (value[_e2] && value[_e2]._embedded && value[_e2]._embedded.events) {
                    value[_e2]._embedded.events.forEach(function (item) {
                      if (item.hasOwnProperty('_embedded') && item._embedded.hasOwnProperty('venues')) {
                        if (item._embedded.venues[0].hasOwnProperty('name')) {
                          place = item._embedded.venues[0].name + ', ';
                        } else {
                          place = '';
                        }
                        if (item._embedded.venues[0].hasOwnProperty('address')) {
                          address = item._embedded.venues[0].address.line1;
                        } else {
                          address = '';
                        }
                      } else {
                        place = '';
                        address = '';
                      }

                      var imgWidth = void 0;
                      var index = void 0;
                      item.images.forEach(function (img, i) {
                        if (i == 0) imgWidth = img.width;
                        if (imgWidth > img.width) {
                          imgWidth = img.width;
                          index = i;
                        }
                      });

                      if (item.hasOwnProperty('dates') && item.dates.hasOwnProperty('start') && item.dates.start.hasOwnProperty('localTime')) {
                        if (+new Date(+new Date().getFullYear(), +new Date().getMonth(), +new Date().getDate()) <= +new Date(+item.dates.start.localDate.split('-')[0], +item.dates.start.localDate.split('-')[1] - 1, +item.dates.start.localDate.split('-')[2])) {
                          weekEvents.push({
                            'name': item.name,
                            'date': item.dates.start.localDate,
                            'time': item.dates.start.localTime,
                            'datetime': widget.formatDate({
                              day: item.dates.start.localDate,
                              time: item.dates.start.localTime
                            }),
                            'place': place + address,
                            'url': item.url,
                            'img': item.hasOwnProperty('images') && item.images[index] != undefined ? item.images[index].url : ''
                          });
                        }
                      }
                    });
                  } else {
                    weekEvents[0] = {
                      date: '',
                      time: ''
                    };
                  }
                }

                weekEventsConcat.push(weekEvents);
                weekEvents = weekEventsConcat[0];

                if (weekEvents.length == 0) {
                  messageContainer.classList.remove('hide');
                  widget.showMessage("No results were found.<br/>Here other options for you.");
                  widget.hideMessageWithDelay(widget.hideMessageDelay);
                }

                var tDate = weekEvents[0].date;
                var tTime = weekEvents[0].time.substr(0, 2);
                var count = 0;
                var startFlag = 0;
                var endFlag = 0;

                for (var _e3 = 0, _l3 = weekEvents.length; _e3 < _l3; ++_e3) {
                  if (tDate == weekEvents[_e3].date && tTime == weekEvents[_e3].time.substr(0, 2)) {
                    weekEvents[_e3].count = count;
                    endFlag = _e3;
                    count++;
                  }
                  if (tDate == weekEvents[_e3].date && tTime != weekEvents[_e3].time.substr(0, 2)) {
                    for (var _i5 = startFlag; _i5 <= endFlag; _i5++) {
                      weekEvents[_i5].count = count - 1;
                    }
                    tTime = weekEvents[_e3].time.substr(0, 2);
                    startFlag = _e3;
                    count = 0;
                  }
                  if (tDate != weekEvents[_e3].date || _e3 == _l3 - 1) {
                    for (var _i6 = startFlag; _i6 <= endFlag; _i6++) {
                      weekEvents[_i6].count = count - 1;
                    }
                    tDate = weekEvents[_e3].date;
                    tTime = weekEvents[_e3].time.substr(0, 2);
                    startFlag = _e3;
                    count = 0;
                  }
                }

                var current = new Date();

                if (calendarWidgetRoot.getAttribute("w-period-week") != 'week') {
                  var weekstart = new Date(calendarWidgetRoot.getAttribute("w-period-week"));
                  weekstart.setDate(weekstart.getDate() - weekstart.getDay());
                } else {
                  var weekstart = current.getDate() - current.getDay();
                  weekstart = new Date(current.setDate(weekstart));
                }

                if (weekstart.getFullYear() == '1969') {
                  current = new Date();
                  weekstart = current.getDate() - current.getDay();
                  weekstart = new Date(current.setDate(weekstart));
                }

                var currentSunday = weekstart;
                var daysDiv = '';
                var currentDayClass = '';
                var dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                var now = new Date();
                for (var _i7 = 0; _i7 <= 6; _i7++) {
                  var _day = new Date(new Date(currentSunday).getTime() + _i7 * 24 * 60 * 60 * 1000);
                  if (_day.getDay() == now.getDay() && _day.getDate() == now.getDate()) currentDayClass = ' active';else currentDayClass = '';
                  daysDiv += '<span class="d' + currentDayClass + '">' + dayOfWeek[_i7] + ' <span class="num">' + _day.getDate() + '</span></span>';
                }
                var zeroLead = '';
                var timeTmp = '';
                var dateTmp = '';
                var monthTmp = '';
                var timeDiv = '<div class="ss time-wrapper"><div class="ss-container time-holder">';

                for (var _i8 = 13; _i8 <= 23; _i8++) {
                  if (_i8 <= 9) {
                    zeroLead = '0';
                    timeTmp = '0' + _i8 + ":00:00";
                  } else {
                    zeroLead = '';
                    timeTmp = _i8 + ":00:00";
                  }
                  timeDiv += '<div class="t t-' + _i8 + '"><span class="tl">' + zeroLead + _i8 + ' : 00</span>';

                  var dayTmp = new Date(currentSunday);

                  for (var _d = 0; _d <= 6; _d++) {
                    var _dayCount = 0;
                    if (_d != 0) dayTmp.setDate(dayTmp.getDate() + 1);
                    if (parseInt(dayTmp.getMonth() + 1) <= 9) monthTmp = '0' + parseInt(dayTmp.getMonth() + 1);else monthTmp = dayTmp.getMonth() + 1;
                    if (parseInt(dayTmp.getDate()) <= 9) {
                      dateTmp = dayTmp.getFullYear() + '-' + monthTmp + '-' + '0' + parseInt(dayTmp.getDate());
                    } else {
                      dateTmp = dayTmp.getFullYear() + '-' + monthTmp + '-' + dayTmp.getDate();
                    }
                    timeDiv += '<div class="d d-' + _d + '" w-date="' + dateTmp + '" w-time="' + zeroLead + _i8 + ':00:00">';

                    for (var _e4 = 0, _l4 = weekEvents.length; _e4 < _l4; ++_e4) {
                      if (weekEvents[_e4].date == dateTmp && weekEvents[_e4].time.substr(0, 2) == timeTmp.substr(0, 2)) {
                        if (_dayCount == 0) {
                          timeDiv += '<span class="round"></span>';
                          if (weekEvents[_e4].time.substring(0, 2) < 18) {
                            timeDiv += '<span class="tail"></span>';
                            timeDiv += '<div class="popup ';
                            if (weekEvents[_e4].count == 0) timeDiv += 'single ';
                            timeDiv += 'ss" tabindex="-1">';
                            timeDiv += '<div class="ss-container">';
                          } else {
                            timeDiv += '<span class="tail-up"></span>';
                            timeDiv += '<div class="popup-up ';
                            if (weekEvents[_e4].count == 0) timeDiv += 'single ';
                            timeDiv += 'ss" tabindex="-1">';
                            timeDiv += '<div class="ss-container">';
                          }
                          _dayCount = 1;
                        }

                        var _eventNameClickHandler = _widgetsAnalytics2.default.getStringEventHandler(_extends({
                          eventAction: _widgetsAnalytics.EVENT_NAME.EVENT_NAME_CLICK,
                          eventLabel: weekEvents[_e4].url
                        }, self.calendarWidget.defaultAnalyticsProperties));

                        timeDiv += '<span class="event">';
                        timeDiv += '<span class="event-holder">';
                        timeDiv += '<a href="' + weekEvents[_e4].url + '" target="_blank" onclick="' + _eventNameClickHandler + '">';
                        if (weekEvents[_e4].img !== '' && weekEvents[_e4].img.length !== 0) {
                          timeDiv += '<span class="img bg-cover-default" style="background: url(' + weekEvents[_e4].img + ') center center no-repeat"></span>';
                        } else {
                          timeDiv += '<span class="img bg-cover-default" ></span>';
                        }
                        timeDiv += '<span class="name">' + weekEvents[_e4].name + '</span>';
                        timeDiv += '</a>';
                        timeDiv += '<span class="date">' + weekEvents[_e4].datetime + '</span>';
                        timeDiv += '<span class="place">' + weekEvents[_e4].place + '</span>';
                        timeDiv += '</span>';
                        timeDiv += '</span>';
                      }
                    }
                    if (_dayCount == 1) timeDiv += '</div></div>';
                    timeDiv += '</div>';
                  }
                  timeDiv += '</div>';
                }
                timeDiv += '</div></div>';
                daysDiv += timeDiv;
                widget.weekdaysRootContainer.innerHTML = daysDiv;
                widget.addScroll();

                var rounds = widget.weekdaysRootContainer.querySelectorAll("span.round");
                for (var x = 0; x < rounds.length; x++) {
                  rounds[x].addEventListener("click", function (e) {
                    widget.weekdaysRootContainer.querySelectorAll(".ss-wrapper")[0].style.overflow = "visible";
                    widget.weekdaysRootContainer.querySelectorAll(".ss-content")[0].style.overflow = "visible";
                    this.nextElementSibling.classList.add("show");
                    this.nextElementSibling.nextElementSibling.classList.add("show");
                    this.nextElementSibling.nextElementSibling.focus();
                  }, false);
                }

                var popups = widget.weekdaysRootContainer.querySelectorAll(".popup, .popup-up");
                for (var y = 0; y < popups.length; y++) {
                  popups[y].addEventListener("blur", function (e) {
                    var self = this;
                    widget.weekdaysRootContainer.querySelectorAll(".ss-wrapper")[0].style.overflow = "hidden";
                    widget.weekdaysRootContainer.querySelectorAll(".ss-content")[0].style.overflow = "auto";
                    setTimeout(function () {
                      self.previousElementSibling.classList.remove("show");
                      self.classList.remove("show");
                    }, 127);
                  }, false);
                }
              }, function (reason) {
                console.log(reason);
                setTimeout(widget.startMonth.bind(widget), 1000);
              });
            }
          } else if (this.status == 400) {
            console.log('There was an error 400');
          } else {
            console.log('something else other than 200 was returned');
          }
        }
      };
    }
  }, {
    key: 'update',
    value: function update() {
      var schedulerRoot = this.eventsRootContainer;
      var days = schedulerRoot.querySelector('.days');
      schedulerRoot.removeChild(days);
      this.weekdaysRootContainer = document.createElement("div");
      this.weekdaysRootContainer.classList.add("days");
      this.startMonth();
      this.weekSchedulerRoot.appendChild(this.weekdaysRootContainer);
    }
  }, {
    key: 'getCurrentMonth',
    value: function getCurrentMonth() {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var content = '<span class="selector-title">';
      var current = new Date();
      var weekstart = current.getDate() - current.getDay();
      var sunday = new Date(current.setDate(weekstart));
      var sundayGetMonth = void 0;
      var sundayGetDate = void 0;

      content += monthNames[current.getMonth()] + ' ' + current.getDate();
      current.setDate(current.getDate() + 6);
      content += ' - ' + monthNames[current.getMonth()] + ' ' + current.getDate();
      content += '</span>';
      content += '<span class="selector-content" tabindex="-1">';

      for (var m = 0; m <= 5; m++) {
        if (m == 0) content += '<span class="active" w-period-week="' + sunday + '">';
        content += '<span w-period-week="' + sunday + '">';
        content += monthNames[sunday.getMonth()] + ' ' + sunday.getDate();
        sunday.setDate(sunday.getDate() + 6);
        content += ' - ' + monthNames[sunday.getMonth()] + ' ' + sunday.getDate();
        content += '</span>';
        sunday.setDate(sunday.getDate() + 1);
      }
      content += '</span>';
      return content;
    }
  }, {
    key: 'startMonth',
    value: function startMonth() {
      var spinner = this.eventsRootContainer.querySelector('.spinner-container');
      spinner.classList.remove('hide');
      this.getJSON(this.getWeekEventsHandler(), this.apiUrl, this.eventReqAttrs);
    }
  }, {
    key: 'apiUrl',
    get: function get() {
      return "https://app.ticketmaster.com/discovery-widgets/v2/events.json";
    }
  }, {
    key: 'eventReqAttrs',
    get: function get() {
      var calendarWidgetRoot = this.eventsRootContainer.parentNode.parentNode.parentNode;
      var tmapikey = '',
          keyword = '',
          radius = void 0;

      var attrs = {},
          params = [{
        attr: 'tmapikey',
        verboseName: 'apikey'
      }, {
        attr: 'latlong',
        verboseName: 'latlong'
      }, {
        attr: 'keyword',
        verboseName: 'keyword'
      }, {
        attr: 'size',
        verboseName: 'size'
      }, {
        attr: 'radius',
        verboseName: 'radius'
      }, {
        attr: 'classificationid',
        verboseName: 'classificationId'
      }, {
        attr: 'attractionid',
        verboseName: 'attractionId'
      }, {
        attr: 'promoterid',
        verboseName: 'promoterId'
      }, {
        attr: 'venueid',
        verboseName: 'venueId'
      }, {
        attr: 'city',
        verboseName: 'city'
      }, {
        attr: 'countrycode',
        verboseName: 'countryCode'
      }, {
        attr: 'segmentid',
        verboseName: 'segmentId'
      }];

      var startmonth = void 0,
          startdate = void 0,
          endmonth = void 0,
          enddate = void 0;
      var classificationid = '';
      var countrycode = '';
      var city = '';
      var startDateTime = '2016-06-27T00:00:00Z';
      var endDateTime = '2016-07-02T23:59:59Z';
      var latlong = '';

      var current = new Date();
      var start = new Date();
      var end = new Date();

      var weekstart = current.getDate() - current.getDay();
      start = new Date(current.setDate(weekstart));
      end.setDate(start.getDate() + 7);
      if (start.getMonth() + 1 <= 9) startmonth = '0' + (start.getMonth() + 1);else startmonth = start.getMonth() + 1;
      if (start.getDate() <= 9) startdate = '0' + start.getDate();else startdate = start.getDate();
      if (end.getMonth() + 1 <= 9) endmonth = '0' + (end.getMonth() + 1);else endmonth = end.getMonth() + 1;
      if (end.getDate() <= 9) enddate = '0' + end.getDate();else enddate = end.getDate();
      startDateTime = start.getFullYear() + '-' + startmonth + '-' + startdate + 'T00:00:00Z';
      endDateTime = end.getFullYear() + '-' + endmonth + '-' + enddate + 'T23:59:59Z';

      if (calendarWidgetRoot.getAttribute("w-period-week") != 'week') {
        start = new Date(calendarWidgetRoot.getAttribute("w-period-week"));
        end = new Date(calendarWidgetRoot.getAttribute("w-period-week"));
        end.setDate(end.getDate() + 7);
        if (start.getMonth() + 1 <= 9) startmonth = '0' + (start.getMonth() + 1);else startmonth = start.getMonth() + 1;
        if (start.getDate() <= 9) startdate = '0' + start.getDate();else startdate = start.getDate();
        if (end.getMonth() + 1 <= 9) endmonth = '0' + (end.getMonth() + 1);else endmonth = end.getMonth() + 1;
        if (end.getDate() <= 9) enddate = '0' + end.getDate();else enddate = end.getDate();
        startDateTime = start.getFullYear() + '-' + startmonth + '-' + startdate + 'T00:00:00Z';
        endDateTime = end.getFullYear() + '-' + endmonth + '-' + enddate + 'T23:59:59Z';
      }

      if (calendarWidgetRoot.getAttribute("w-tmapikey") != '') {
        tmapikey = calendarWidgetRoot.getAttribute("w-tmapikey");
        /* if (sessionStorage.getItem('tk-api-key')) {
               tmapikey = sessionStorage.getItem('tk-api-key');
               document.querySelector('[w-type="calendar"]').setAttribute("w-tmapikey", tmapikey);
           }
           */
      }

      if (calendarWidgetRoot.getAttribute("w-latlong") != '') {
        latlong = calendarWidgetRoot.getAttribute("w-latlong");
      }

      // if (latlong === null) latlong = '34.0390107,-118.2672801';

      if (calendarWidgetRoot.getAttribute("w-keyword") != '') {
        keyword = calendarWidgetRoot.getAttribute("w-keyword");
      }

      if (calendarWidgetRoot.getAttribute("w-radius") != '') {
        radius = calendarWidgetRoot.getAttribute("w-radius");
      }

      if (calendarWidgetRoot.getAttribute("w-classificationId") != '') {
        classificationid = calendarWidgetRoot.getAttribute("w-classificationId");
      }

      if (calendarWidgetRoot.getAttribute("w-countrycode") != null) {
        countrycode = calendarWidgetRoot.getAttribute("w-countrycode");
        latlong = '';
      }

      if (calendarWidgetRoot.getAttribute("w-city") != null) {
        city = calendarWidgetRoot.getAttribute("w-city");
        latlong = '';
      }

      if (new Date(startDateTime).getFullYear() == '1969' || new Date(startDateTime).getFullYear() == '1970') {
        current = new Date();
        start = new Date();
        end = new Date();

        weekstart = current.getDate() - current.getDay();
        start = new Date(current.setDate(weekstart));
        end.setDate(start.getDate() + 7);
        if (start.getMonth() + 1 <= 9) startmonth = '0' + (start.getMonth() + 1);else startmonth = start.getMonth() + 1;
        if (start.getDate() <= 9) startdate = '0' + start.getDate();else startdate = start.getDate();
        if (end.getMonth() + 1 <= 9) endmonth = '0' + (end.getMonth() + 1);else endmonth = end.getMonth() + 1;
        if (end.getDate() <= 9) enddate = '0' + end.getDate();else enddate = end.getDate();
        startDateTime = start.getFullYear() + '-' + startmonth + '-' + startdate + 'T00:00:00Z';
        endDateTime = end.getFullYear() + '-' + endmonth + '-' + enddate + 'T23:59:59Z';
      }

      return {
        "apikey": tmapikey,
        "latlong": latlong,
        "keyword": keyword,
        "countryCode": countrycode,
        "city": city,
        "startDateTime": startDateTime,
        "endDateTime": endDateTime,
        "classificationId": classificationid,
        "radius": radius,
        "size": "200"
      };
    }
  }, {
    key: 'messageRootContainer',
    get: function get() {
      return 'weekSсheduler';
    }
  }, {
    key: 'hideMessageDelay',
    get: function get() {
      return 3000;
    }
  }]);

  function WeekScheduler(root, calendarWidget) {
    _classCallCheck(this, WeekScheduler);

    if (!root) return;
    this.weekSchedulerRoot = root;
    this.calendarWidget = calendarWidget;
    this.getCurrentMonth();
    if (this.weekSchedulerRoot.parentNode.querySelector('.sliderLeftSelector') == null) {
      var leftSelector1 = new _SelectorControls2.default(this.weekSchedulerRoot.parentNode, 'sliderLeftSelector', this.getCurrentMonth(), 'w-period', this.update.bind(this));
      var RightSelector1 = new _SelectorControls2.default(this.weekSchedulerRoot.parentNode, 'sliderRightSelector', '<span class="selector-title">All Events</span><span class="selector-content" tabindex="-1"><span class="active" w-classificationId="">All Events</span><span w-classificationId="KZFzniwnSyZfZ7v7na">Arts & Theatre</span><span w-classificationId="KZFzniwnSyZfZ7v7nn">Film</span><span w-classificationId="KZFzniwnSyZfZ7v7n1">Miscellaneous</span><span w-classificationId="KZFzniwnSyZfZ7v7nJ">Music</span><span w-classificationId="KZFzniwnSyZfZ7v7nE">Sports</span></span>', 'classificationId', this.update.bind(this));
    }
    if (this.weekSchedulerRoot.querySelector('.days') == null) {
      this.weekdaysRootContainer = document.createElement("div");
      this.weekdaysRootContainer.classList.add("days");
      this.initMessage(this.weekSchedulerRoot);
      this.weekSchedulerRoot.appendChild(this.weekdaysRootContainer);
    }
  }

  return WeekScheduler;
}();

exports.default = WeekScheduler;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SelectorControls = __webpack_require__(2);

var _SelectorControls2 = _interopRequireDefault(_SelectorControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YearScheduler = function () {
	_createClass(YearScheduler, [{
		key: 'getJsonAsync',
		value: function getJsonAsync(url) {
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url);

				xhr.onload = function () {
					if (xhr.status === 200) {
						var result = JSON.parse(xhr.response);
						resolve(result.page.totalElements);
					} else {
						reject("Error loading JSON!");
					}
				};
				xhr.onerror = function () {
					reject("Error loading JSON!");
				};
				xhr.send();
			});
		}
	}, {
		key: 'formatDate',
		value: function formatDate(date) {
			var result = '';
			if (!date.day) return result; // Day is required

			function LZ(x) {
				return (x < 0 || x > 9 ? "" : "0") + x;
			}
			var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			    DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			    dayArray = date.day.split('-'),
			    d = parseInt(dayArray[2]),
			    M = parseInt(dayArray[1]);

			// var E = new Date(date.day).getDay();
			var E = new Date(+date.day.split('-')[0], +date.day.split('-')[1] - 1, +date.day.split('-')[2]).getDay();
			result = DAY_NAMES[E] + ', ' + MONTH_NAMES[M - 1] + ' ' + d + ', ' + dayArray[0];

			if (!date.time) return result;

			var timeArray = date.time.split(':'),
			    H = parseInt(timeArray[0]),
			    m = timeArray[1],
			    a = "AM";

			if (H > 11) a = "PM";
			if (H == 0) {
				H = 12;
			} else if (H > 12) {
				H = H - 12;
			}

			return result + ' ' + LZ(H) + ':' + m + ' ' + a;
		}
	}, {
		key: 'addScroll',
		value: function addScroll() {
			(function (n, t) {
				function u(n) {
					n.hasOwnProperty("data-simple-scrollbar") || Object.defineProperty(n, "data-simple-scrollbar", new SimpleScrollbar(n));
				}function e(n, i) {
					function f(n) {
						var t = n.pageY - u;u = n.pageY;r(function () {
							i.el.scrollTop += t / i.scrollRatio;
						});
					}function e() {
						n.classList.remove("ss-grabbed");t.body.classList.remove("ss-grabbed");t.removeEventListener("mousemove", f);t.removeEventListener("mouseup", e);
					}var u;n.addEventListener("mousedown", function (i) {
						return u = i.pageY, n.classList.add("ss-grabbed"), t.body.classList.add("ss-grabbed"), t.addEventListener("mousemove", f), t.addEventListener("mouseup", e), !1;
					});
				}function i(n) {
					for (this.target = n, this.bar = '<div class="ss-scroll">', this.wrapper = t.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = t.createElement("div"), this.el.setAttribute("class", "ss-content"), this.wrapper.appendChild(this.el); this.target.firstChild;) {
						this.el.appendChild(this.target.firstChild);
					}this.target.appendChild(this.wrapper);this.target.insertAdjacentHTML("beforeend", this.bar);this.bar = this.target.lastChild;e(this.bar, this);this.moveBar();this.el.addEventListener("scroll", this.moveBar.bind(this));this.el.addEventListener("mouseenter", this.moveBar.bind(this));this.target.classList.add("ss-container");
				}function f() {
					for (var i = t.querySelectorAll("*[ss-container]"), n = 0; n < i.length; n++) {
						u(i[n]);
					}
				}var r = n.requestAnimationFrame || n.setImmediate || function (n) {
					return setTimeout(n, 0);
				};i.prototype = { moveBar: function moveBar() {
						var t = this.el.scrollHeight,
						    i = this.el.clientHeight,
						    n = this;this.scrollRatio = i / t;r(function () {
							n.bar.style.cssText = "height:" + i / t * 100 + "%; top:" + n.el.scrollTop / t * 100 + "%;right:-" + (n.target.clientWidth - n.bar.clientWidth) + "px;";
						});
					} };t.addEventListener("DOMContentLoaded", f);i.initEl = u;i.initAll = f;n.SimpleScrollbar = i;
			})(window, document);
			var scrollRoot = document.querySelectorAll(".ss");
			var maxL = scrollRoot.length;
			for (var ml = 0; ml < maxL; ml++) {
				SimpleScrollbar.initEl(scrollRoot[ml]);
			}
		}
	}, {
		key: 'initMessage',
		value: function initMessage(schedulerRoot) {
			var _this = this;

			this.eventsRootContainer = schedulerRoot;
			this.messageDialogContainer = document.createElement('div');
			this.messageDialogContainer.classList.add("event-message-container");
			this.messageDialog = document.createElement('div');
			this.messageDialog.classList.add("event-message_");
			this.messageContent = document.createElement('div');
			this.messageContent.classList.add("event-message__content");

			var messageClose = document.createElement('div');
			messageClose.classList.add("event-message__btn");
			messageClose.addEventListener("click", function () {
				_this.hideMessage();
			});

			this.messageDialog.appendChild(this.messageContent);
			this.messageDialog.appendChild(messageClose);
			this.messageDialogContainer.appendChild(this.messageDialog);
			this.eventsRootContainer.appendChild(this.messageDialogContainer);
		}
	}, {
		key: 'showMessage',
		value: function showMessage(message, hideMessageWithoutDelay) {

			if (message.length) {
				this.hideMessageWithoutDelay = hideMessageWithoutDelay;
				this.messageContent.innerHTML = message;
				this.messageDialog.classList.add("event-message_-visible");
				if (this.messageTimeout) {
					clearTimeout(this.messageTimeout); // Clear timeout if before 'hideMessageWithDelay' was called
				}
			}
		}
	}, {
		key: 'hideMessageWithDelay',
		value: function hideMessageWithDelay(delay) {
			var _this2 = this;

			if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout if this method was called before
			this.messageTimeout = setTimeout(function () {
				_this2.hideMessage();
			}, delay);
		}
	}, {
		key: 'hideMessage',
		value: function hideMessage() {
			if (this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout and hide message immediately.
			this.messageDialog.classList.remove("event-message_-visible");
		}
	}, {
		key: 'getYears',
		value: function getYears() {
			var now = new Date().getFullYear();
			var content = '';
			content += '<span class="selector-title">Events in ' + now + '</span>';
			content += '<span class="selector-content" tabindex="-1">';
			for (var i = now - 1; i < now + 1; i++) {
				content += '<span ';
				if (i == now) content += 'class="active" ';
				content += 'w-period="' + (i + 1) + '">Events in ' + (i + 1) + '</span>';
			}
			content += '</span>';
			return content;
		}
	}, {
		key: 'getLastDayOfMonth',
		value: function getLastDayOfMonth(year, month) {
			var date = new Date(year, month + 1, 0);
			return date.getDate();
		}
	}, {
		key: 'startYear',
		value: function startYear() {
			var _this3 = this;

			var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var prm = [];
			var year = void 0;
			var schedulerRoot = this.yearSchedulerRoot.parentNode.parentNode.parentNode;
			if (schedulerRoot.getAttribute("w-period").length != 4) {
				year = new Date().getFullYear();
			} else {
				year = this.eventReqAttrs.startDateTime.substring(0, 4);
			}

			var month = '01';

			var xhr = new XMLHttpRequest();
			var resp, dateOffset;

			var latlongOffset = schedulerRoot.getAttribute("w-latlong");
			if (latlongOffset != null) {
				xhr.open('GET', 'https://maps.googleapis.com/maps/api/timezone/json?language=en&location=' + schedulerRoot.getAttribute("w-latlong") + '&timestamp=1331161200');
				xhr.onload = function (e) {
					if (xhr.readyState == 4 && xhr.status == 200) {
						resp = JSON.parse(xhr.responseText);
						dateOffset = parseInt(resp.rawOffset) + parseInt(resp.dstOffset);
					}
				};
				xhr.send(null);
			} else {
				dateOffset = undefined;
			}

			var currentMonth = parseInt(new Date().getMonth()) + 1;

			var _loop = function _loop(i) {

				if (i <= 9) month = '0' + i;else month = i;
				var attrs = _this3.eventReqAttrs;

				if (dateOffset !== undefined) {
					startDT = new Date(new Date(year, i - 1, 1, 0, 0, 0, 0).valueOf() - dateOffset * 1000);
					finishDT = new Date(new Date(year, i - 1, _this3.getLastDayOfMonth(year, i - 1), 23, 59, 59, 0).valueOf() - dateOffset * 1000);
					startY = startDT.getFullYear();
					startM = startDT.getMonth() + 1;

					if (startM <= 9) startM = '0' + startM;
					startD = startDT.getDate();

					if (startD <= 9) startD = '0' + startD;
					startH = startDT.getHours();

					if (startDT.getHours() <= 9) startH = '0' + startDT.getHours();
					startMn = startDT.getMinutes();

					if (startDT.getMinutes() <= 9) startMn = '0' + startDT.getMinutes();
					startS = startDT.getSeconds();

					if (startDT.getSeconds() <= 9) startS = '0' + startDT.getSeconds();
					finishY = finishDT.getFullYear();
					finishM = finishDT.getMonth() + 1;

					if (finishM <= 9) finishM = '0' + finishM;
					finishD = finishDT.getDate();

					if (finishD <= 9) finishD = '0' + finishD;
					finishH = finishDT.getHours();

					if (finishDT.getHours() <= 9) finishH = '0' + finishDT.getHours();
					finishMn = finishDT.getMinutes();

					if (finishDT.getMinutes() <= 9) finishMn = '0' + finishDT.getMinutes();
					finishS = finishDT.getSeconds();

					if (finishDT.getSeconds() <= 9) finishS = '0' + finishDT.getSeconds();
					attrs.startDateTime = startY + '-' + startM + '-' + startD + 'T' + startH + ':' + startMn + ':' + startS + 'Z';
					attrs.endDateTime = finishY + '-' + finishM + '-' + finishD + 'T' + finishH + ':' + finishMn + ':' + finishS + 'Z';
				} else {
					currentMonth = parseInt(new Date().getMonth()) + 1;

					if (currentMonth <= 9) currentMonth = '0' + currentMonth;
					currentDay = new Date().getDate();

					if (currentDay <= 9) currentDay = '0' + currentDay;
					if (!(year == new Date().getFullYear() && month == currentMonth)) currentDay = '01';
					attrs.startDateTime = year + '-' + month + '-' + currentDay + 'T00:00:00Z';
					attrs.endDateTime = year + '-' + month + '-' + _this3.getLastDayOfMonth(year, i - 1) + 'T23:59:59Z';
				}
				attrs = Object.keys(attrs).map(function (key) {
					return key + '=' + attrs[key];
				}).join("&");
				var url = void 0;
				url = _this3.apiUrl + [url, attrs].join("?");
				var thisSchedulerRoot = _this3.yearSchedulerRoot.parentNode.parentNode.parentNode;
				if (thisSchedulerRoot.getAttribute('w-postalcodeapi') != null) url += '&postalCode=' + thisSchedulerRoot.getAttribute('w-postalcodeapi');
				url += '&sort=date,asc';
				prm.push(new Promise(function (resolve) {
					setTimeout(function () {
						resolve(_this3.getJsonAsync(url));
					}, 500 * i);
				}));
			};

			for (var i = 1; i <= 12; i++) {
				var startDT;
				var finishDT;
				var startY;
				var startM;
				var startD;
				var startH;
				var startMn;
				var startS;
				var finishY;
				var finishM;
				var finishD;
				var finishH;
				var finishMn;
				var finishS;
				var currentMonth;
				var currentDay;

				_loop(i);
			}

			Promise.all(prm).then(function (value) {
				var elem = _this3.yearSchedulerRoot.querySelector(".year");
				var table = '<div class="monthes-container">';
				var month = void 0;
				var curMonth = new Date().getMonth();
				var curYear = new Date().getFullYear();
				var noResults = true;
				var messageContainer = schedulerRoot.querySelector('.event-message-container');

				for (var i = 0; i < MONTH_NAMES.length; i++) {
					table += '<div class="month">';
					table += '<span class="name';
					if (year == curYear && curMonth == i) table += ' current';
					table += '">' + MONTH_NAMES[i] + '</span>';
					if (parseInt(i + 1) <= 9) month = '0' + parseInt(i + 1);else month = parseInt(i + 1);
					if (value[i] != 0) table += '<a href="javascript:void(0)" class="count" rel="' + year + '-' + month + '">' + value[i] + '</a>';
					table += '</div>';
					if (value[i] != 0) noResults = false;
				}
				table += '</div>';
				elem.innerHTML = table;

				_this3.yearSchedulerRoot.getElementsByClassName('spinner-container')[0].classList.add('hide');

				if (noResults === true) {
					_this3.showMessage("No results were found.<br/>Here other options for you.", true);
					_this3.hideMessageWithDelay(_this3.hideMessageDelay);
				}

				var rounds = schedulerRoot.querySelectorAll("a.count");
				for (var x = 0; x < rounds.length; x++) {
					rounds[x].addEventListener("click", function (e) {
						schedulerRoot.setAttribute('w-period', e.target.getAttribute('rel'));
						schedulerRoot.querySelectorAll('.tb')[2].click();
						schedulerRoot.getElementsByClassName('month-update')[0].click();
					}, false);
				}
			}, function (reason) {
				console.log(reason);
				setTimeout(_this3.startYear.bind(_this3), 1000);
			});
		}
	}, {
		key: 'update',
		value: function update() {
			var schedulerRoot = this.yearSchedulerRoot;
			var spinner = schedulerRoot.querySelector('.spinner-container');
			spinner.classList.remove('hide');
			var year = schedulerRoot.querySelector('.year');
			schedulerRoot.removeChild(year);
			this.yearRootContainer = document.createElement("div");
			this.yearRootContainer.classList.add("year");
			this.yearSchedulerRoot.appendChild(this.yearRootContainer);
			this.startYear();
		}
	}, {
		key: 'apiUrl',
		get: function get() {
			return "https://app.ticketmaster.com/discovery-widgets/v2/events.json";
		}
	}, {
		key: 'eventReqAttrs',
		get: function get() {
			var calendarWidgetRoot = this.yearSchedulerRoot.parentNode.parentNode.parentNode;
			var tmapikey = '',
			    keyword = '',
			    radius = void 0;
			var attrs = {},
			    params = [{
				attr: 'tmapikey',
				verboseName: 'apikey'
			}, {
				attr: 'keyword',
				verboseName: 'keyword'
			}, {
				attr: 'city',
				verboseName: 'city'
			}, {
				attr: 'countrycode',
				verboseName: 'countryCode'
			}, {
				attr: 'size',
				verboseName: 'size'
			}, {
				attr: 'radius',
				verboseName: 'radius'
			}, {
				attr: 'classificationid',
				verboseName: 'classificationId'
			}, {
				attr: 'attractionid',
				verboseName: 'attractionId'
			}, {
				attr: 'promoterid',
				verboseName: 'promoterId'
			}, {
				attr: 'venueid',
				verboseName: 'venueId'
			}, {
				attr: 'segmentid',
				verboseName: 'segmentId'
			}];

			var date = new Date();
			var startmonth = void 0,
			    startdate = void 0,
			    endmonth = void 0,
			    enddate = void 0,
			    startDateTime = void 0,
			    endDateTime = void 0;
			var classificationid = '';
			var countrycode = '';
			var city = '';
			var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
			var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
			var latlong = '34.0390107,-118.2672801';

			if (firstDay.getMonth() + 1 <= 9) startmonth = '0' + (firstDay.getMonth() + 1);else startmonth = firstDay.getMonth() + 1;
			startdate = '0' + firstDay.getDate();
			if (lastDay.getMonth() + 1 <= 9) endmonth = '0' + (lastDay.getMonth() + 1);else endmonth = lastDay.getMonth() + 1;
			enddate = lastDay.getDate();
			startDateTime = firstDay.getFullYear() + '-' + startmonth + '-' + startdate + 'T00:00:00Z';
			endDateTime = lastDay.getFullYear() + '-12-31T23:59:59Z';

			if (calendarWidgetRoot.getAttribute("w-period") != 'week') {

				if (calendarWidgetRoot.getAttribute("w-period").length != 4) {
					firstDay = new Date(date.getFullYear()) + '-01-01T00:00:00Z';
					lastDay = new Date(date.getFullYear()) + '-12-31T23:59:59Z';
				} else {
					firstDay = calendarWidgetRoot.getAttribute("w-period") + '-01-01T00:00:00Z';
					lastDay = parseInt(firstDay + 1) + '-12-31T23:59:59Z';
				}
				startDateTime = firstDay;
				endDateTime = lastDay;
			}

			if (calendarWidgetRoot.getAttribute("w-tmapikey") != '') {
				tmapikey = calendarWidgetRoot.getAttribute("w-tmapikey");
				/*
       if (sessionStorage.getItem('tk-api-key')) {
           tmapikey = sessionStorage.getItem('tk-api-key');
           calendarWidgetRoot.setAttribute("w-tmapikey", tmapikey);
       }
       */
			}

			if (calendarWidgetRoot.getAttribute("w-latlong") != '') {
				latlong = document.querySelector('[w-type="calendar"]').getAttribute("w-latlong");
			}

			// if (latlong === null) latlong = '34.0390107,-118.2672801';

			if (calendarWidgetRoot.getAttribute("w-keyword") != '') {
				keyword = calendarWidgetRoot.getAttribute("w-keyword");
			}

			if (calendarWidgetRoot.getAttribute("w-radius") != '') {
				radius = calendarWidgetRoot.getAttribute("w-radius");
			}

			if (calendarWidgetRoot.getAttribute("w-classificationId") != '') {
				classificationid = calendarWidgetRoot.getAttribute("w-classificationId");
			}

			if (calendarWidgetRoot.getAttribute("w-countrycode") != null) {
				countrycode = calendarWidgetRoot.getAttribute("w-countrycode");
				latlong = '';
			}

			if (calendarWidgetRoot.getAttribute("w-city") != null) {
				city = calendarWidgetRoot.getAttribute("w-city");
				latlong = '';
			}

			return {
				"apikey": tmapikey,
				"latlong": latlong,
				"countryCode": countrycode,
				"city": city,
				"keyword": keyword,
				"startDateTime": startDateTime,
				"endDateTime": endDateTime,
				"classificationId": classificationid,
				"radius": radius,
				"size": "1"
			};
		}
	}, {
		key: 'messageRootContainer',
		get: function get() {
			return 'yearScheduler';
		}
	}, {
		key: 'hideMessageDelay',
		get: function get() {
			return 3000;
		}
	}]);

	function YearScheduler(root) {
		_classCallCheck(this, YearScheduler);

		if (!root) return;
		this.yearSchedulerRoot = root;
		if (this.yearSchedulerRoot.parentNode.querySelector('.sliderLeftSelector') == null) {
			var leftSelector = new _SelectorControls2.default(this.yearSchedulerRoot.parentNode, 'sliderLeftSelector', this.getYears(), 'period', this.update.bind(this));
			var RightSelector = new _SelectorControls2.default(this.yearSchedulerRoot.parentNode, 'sliderRightSelector', '<span class="selector-title">All Events</span><span class="selector-content" tabindex="-1"><span class="active" w-classificationId="">All Events</span><span w-classificationId="KZFzniwnSyZfZ7v7na">Arts & Theatre</span><span w-classificationId="KZFzniwnSyZfZ7v7nn">Film</span><span w-classificationId="KZFzniwnSyZfZ7v7n1">Miscellaneous</span><span w-classificationId="KZFzniwnSyZfZ7v7nJ">Music</span><span w-classificationId="KZFzniwnSyZfZ7v7nE">Sports</span></span>', 'classificationId', this.update.bind(this));
		}
		if (this.yearSchedulerRoot.querySelector('.year') == null) {
			this.yearRootContainer = document.createElement("div");
			this.yearRootContainer.classList.add("year");
			this.yearSchedulerRoot.appendChild(this.yearRootContainer);
			this.initMessage(this.yearSchedulerRoot);
			// this.startYear();
		}
	}

	return YearScheduler;
}();

exports.default = YearScheduler;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
	if (window.ActiveXObject || "ActiveXObject" in window) {
		!function (t) {
			if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
				var e;"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Promise = t();
			}
		}(function () {
			var t, e, n;return function r(t, e, n) {
				function i(s, a) {
					if (!e[s]) {
						if (!t[s]) {
							var c = "function" == typeof _dereq_ && _dereq_;if (!a && c) return c(s, !0);if (o) return o(s, !0);var l = new Error("Cannot find module '" + s + "'");throw l.code = "MODULE_NOT_FOUND", l;
						}var u = e[s] = { exports: {} };t[s][0].call(u.exports, function (e) {
							var n = t[s][1][e];return i(n ? n : e);
						}, u, u.exports, r, t, e, n);
					}return e[s].exports;
				}for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < n.length; s++) {
					i(n[s]);
				}return i;
			}({ 1: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e(t) {
							var e = new n(t),
							    r = e.promise();return e.setHowMany(1), e.setUnwrap(), e.init(), r;
						}var n = t._SomePromiseArray;t.any = function (t) {
							return e(t);
						}, t.prototype.any = function () {
							return e(this);
						};
					};
				}, {}], 2: [function (t, e, n) {
					"use strict";
					function r() {
						this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new u(16), this._normalQueue = new u(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;var t = this;this.drainQueues = function () {
							t._drainQueues();
						}, this._schedule = l;
					}function i(t, e, n) {
						this._lateQueue.push(t, e, n), this._queueTick();
					}function o(t, e, n) {
						this._normalQueue.push(t, e, n), this._queueTick();
					}function s(t) {
						this._normalQueue._pushOne(t), this._queueTick();
					}var a;try {
						throw new Error();
					} catch (c) {
						a = c;
					}var l = t("./schedule"),
					    u = t("./queue"),
					    p = t("./util");r.prototype.setScheduler = function (t) {
						var e = this._schedule;return this._schedule = t, this._customScheduler = !0, e;
					}, r.prototype.hasCustomScheduler = function () {
						return this._customScheduler;
					}, r.prototype.enableTrampoline = function () {
						this._trampolineEnabled = !0;
					}, r.prototype.disableTrampolineIfNecessary = function () {
						p.hasDevTools && (this._trampolineEnabled = !1);
					}, r.prototype.haveItemsQueued = function () {
						return this._isTickUsed || this._haveDrainedQueues;
					}, r.prototype.fatalError = function (t, e) {
						e ? (process.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), process.exit(2)) : this.throwLater(t);
					}, r.prototype.throwLater = function (t, e) {
						if (1 === arguments.length && (e = t, t = function t() {
							throw e;
						}), "undefined" != typeof setTimeout) setTimeout(function () {
							t(e);
						}, 0);else try {
							this._schedule(function () {
								t(e);
							});
						} catch (n) {
							throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
						}
					}, p.hasDevTools ? (r.prototype.invokeLater = function (t, e, n) {
						this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function () {
							setTimeout(function () {
								t.call(e, n);
							}, 100);
						});
					}, r.prototype.invoke = function (t, e, n) {
						this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function () {
							t.call(e, n);
						});
					}, r.prototype.settlePromises = function (t) {
						this._trampolineEnabled ? s.call(this, t) : this._schedule(function () {
							t._settlePromises();
						});
					}) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s), r.prototype.invokeFirst = function (t, e, n) {
						this._normalQueue.unshift(t, e, n), this._queueTick();
					}, r.prototype._drainQueue = function (t) {
						for (; t.length() > 0;) {
							var e = t.shift();if ("function" == typeof e) {
								var n = t.shift(),
								    r = t.shift();e.call(n, r);
							} else e._settlePromises();
						}
					}, r.prototype._drainQueues = function () {
						this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
					}, r.prototype._queueTick = function () {
						this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
					}, r.prototype._reset = function () {
						this._isTickUsed = !1;
					}, e.exports = r, e.exports.firstLineError = a;
				}, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e, n, r) {
						var i = !1,
						    o = function o(t, e) {
							this._reject(e);
						},
						    s = function s(t, e) {
							e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t);
						},
						    a = function a(t, e) {
							0 === (50397184 & this._bitField) && this._resolveCallback(e.target);
						},
						    c = function c(t, e) {
							e.promiseRejectionQueued || this._reject(t);
						};t.prototype.bind = function (o) {
							i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());var l = n(o),
							    u = new t(e);u._propagateFrom(this, 1);var p = this._target();if (u._setBoundTo(l), l instanceof t) {
								var h = { promiseRejectionQueued: !1, promise: u, target: p, bindingPromise: l };p._then(e, s, void 0, u, h), l._then(a, c, void 0, u, h), u._setOnCancel(l);
							} else u._resolveCallback(p);return u;
						}, t.prototype._setBoundTo = function (t) {
							void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField;
						}, t.prototype._isBound = function () {
							return 2097152 === (2097152 & this._bitField);
						}, t.bind = function (e, n) {
							return t.resolve(n).bind(e);
						};
					};
				}, {}], 4: [function (t, e, n) {
					"use strict";
					function r() {
						try {
							Promise === o && (Promise = i);
						} catch (t) {}return o;
					}var i;"undefined" != typeof Promise && (i = Promise);var o = t("./promise")();o.noConflict = r, e.exports = o;
				}, { "./promise": 22 }], 5: [function (t, e, n) {
					"use strict";
					var r = Object.create;if (r) {
						var i = r(null),
						    o = r(null);i[" size"] = o[" size"] = 0;
					}e.exports = function (e) {
						function n(t, n) {
							var r;if (null != t && (r = t[n]), "function" != typeof r) {
								var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";throw new e.TypeError(i);
							}return r;
						}function r(t) {
							var e = this.pop(),
							    r = n(t, e);return r.apply(t, this);
						}function i(t) {
							return t[this];
						}function o(t) {
							var e = +this;return 0 > e && (e = Math.max(0, e + t.length)), t[e];
						}var s,
						    a = t("./util"),
						    c = a.canEvaluate;a.isIdentifier;e.prototype.call = function (t) {
							var e = [].slice.call(arguments, 1);return e.push(t), this._then(r, void 0, void 0, e, void 0);
						}, e.prototype.get = function (t) {
							var e,
							    n = "number" == typeof t;if (n) e = o;else if (c) {
								var r = s(t);e = null !== r ? r : i;
							} else e = i;return this._then(e, void 0, void 0, t, void 0);
						};
					};
				}, { "./util": 36 }], 6: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i) {
						var o = t("./util"),
						    s = o.tryCatch,
						    a = o.errorObj,
						    c = e._async;e.prototype["break"] = e.prototype.cancel = function () {
							if (!i.cancellation()) return this._warn("cancellation is disabled");for (var t = this, e = t; t._isCancellable();) {
								if (!t._cancelBy(e)) {
									e._isFollowing() ? e._followee().cancel() : e._cancelBranched();break;
								}var n = t._cancellationParent;if (null == n || !n._isCancellable()) {
									t._isFollowing() ? t._followee().cancel() : t._cancelBranched();break;
								}t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n;
							}
						}, e.prototype._branchHasCancelled = function () {
							this._branchesRemainingToCancel--;
						}, e.prototype._enoughBranchesHaveCancelled = function () {
							return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
						}, e.prototype._cancelBy = function (t) {
							return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
						}, e.prototype._cancelBranched = function () {
							this._enoughBranchesHaveCancelled() && this._cancel();
						}, e.prototype._cancel = function () {
							this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0));
						}, e.prototype._cancelPromises = function () {
							this._length() > 0 && this._settlePromises();
						}, e.prototype._unsetOnCancel = function () {
							this._onCancelField = void 0;
						}, e.prototype._isCancellable = function () {
							return this.isPending() && !this._isCancelled();
						}, e.prototype.isCancellable = function () {
							return this.isPending() && !this.isCancelled();
						}, e.prototype._doInvokeOnCancel = function (t, e) {
							if (o.isArray(t)) for (var n = 0; n < t.length; ++n) {
								this._doInvokeOnCancel(t[n], e);
							} else if (void 0 !== t) if ("function" == typeof t) {
								if (!e) {
									var r = s(t).call(this._boundValue());r === a && (this._attachExtraTrace(r.e), c.throwLater(r.e));
								}
							} else t._resultCancelled(this);
						}, e.prototype._invokeOnCancel = function () {
							var t = this._onCancel();this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, t);
						}, e.prototype._invokeInternalOnCancel = function () {
							this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
						}, e.prototype._resultCancelled = function () {
							this.cancel();
						};
					};
				}, { "./util": 36 }], 7: [function (t, e, n) {
					"use strict";
					e.exports = function (e) {
						function n(t, n, a) {
							return function (c) {
								var l = a._boundValue();t: for (var u = 0; u < t.length; ++u) {
									var p = t[u];if (p === Error || null != p && p.prototype instanceof Error) {
										if (c instanceof p) return o(n).call(l, c);
									} else if ("function" == typeof p) {
										var h = o(p).call(l, c);if (h === s) return h;if (h) return o(n).call(l, c);
									} else if (r.isObject(c)) {
										for (var f = i(p), _ = 0; _ < f.length; ++_) {
											var d = f[_];if (p[d] != c[d]) continue t;
										}return o(n).call(l, c);
									}
								}return e;
							};
						}var r = t("./util"),
						    i = t("./es5").keys,
						    o = r.tryCatch,
						    s = r.errorObj;return n;
					};
				}, { "./es5": 13, "./util": 36 }], 8: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e() {
							this._trace = new e.CapturedTrace(r());
						}function n() {
							return i ? new e() : void 0;
						}function r() {
							var t = o.length - 1;return t >= 0 ? o[t] : void 0;
						}var i = !1,
						    o = [];return t.prototype._promiseCreated = function () {}, t.prototype._pushContext = function () {}, t.prototype._popContext = function () {
							return null;
						}, t._peekContext = t.prototype._peekContext = function () {}, e.prototype._pushContext = function () {
							void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace));
						}, e.prototype._popContext = function () {
							if (void 0 !== this._trace) {
								var t = o.pop(),
								    e = t._promiseCreated;return t._promiseCreated = null, e;
							}return null;
						}, e.CapturedTrace = null, e.create = n, e.deactivateLongStackTraces = function () {}, e.activateLongStackTraces = function () {
							var n = t.prototype._pushContext,
							    o = t.prototype._popContext,
							    s = t._peekContext,
							    a = t.prototype._peekContext,
							    c = t.prototype._promiseCreated;e.deactivateLongStackTraces = function () {
								t.prototype._pushContext = n, t.prototype._popContext = o, t._peekContext = s, t.prototype._peekContext = a, t.prototype._promiseCreated = c, i = !1;
							}, i = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
								var t = this._peekContext();t && null == t._promiseCreated && (t._promiseCreated = this);
							};
						}, e;
					};
				}, {}], 9: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t, e) {
							return { promise: e };
						}function i() {
							return !1;
						}function o(t, e, n) {
							var r = this;try {
								t(e, n, function (t) {
									if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + H.toString(t));r._attachCancellationCallback(t);
								});
							} catch (i) {
								return i;
							}
						}function s(t) {
							if (!this._isCancellable()) return this;var e = this._onCancel();void 0 !== e ? H.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t);
						}function a() {
							return this._onCancelField;
						}function c(t) {
							this._onCancelField = t;
						}function l() {
							this._cancellationParent = void 0, this._onCancelField = void 0;
						}function u(t, e) {
							if (0 !== (1 & e)) {
								this._cancellationParent = t;var n = t._branchesRemainingToCancel;void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1;
							}0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
						}function p(t, e) {
							0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
						}function h() {
							var t = this._boundTo;return void 0 !== t && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t;
						}function f() {
							this._trace = new S(this._peekContext());
						}function _(t, e) {
							if (N(t)) {
								var n = this._trace;if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);else if (!t.__stackCleaned__) {
									var r = j(t);H.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), H.notEnumerableProp(t, "__stackCleaned__", !0);
								}
							}
						}function d(t, e, n, r, i) {
							if (void 0 === t && null !== e && W) {
								if (void 0 !== i && i._returnedNonUndefined()) return;if (0 === (65535 & r._bitField)) return;n && (n += " ");var o = "",
								    s = "";if (e._trace) {
									for (var a = e._trace.stack.split("\n"), c = w(a), l = c.length - 1; l >= 0; --l) {
										var u = c[l];if (!U.test(u)) {
											var p = u.match(M);p && (o = "at " + p[1] + ":" + p[2] + ":" + p[3] + " ");break;
										}
									}if (c.length > 0) for (var h = c[0], l = 0; l < a.length; ++l) {
										if (a[l] === h) {
											l > 0 && (s = "\n" + a[l - 1]);break;
										}
									}
								}var f = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;r._warn(f, !0, e);
							}
						}function v(t, e) {
							var n = t + " is deprecated and will be removed in a future version.";return e && (n += " Use " + e + " instead."), y(n);
						}function y(t, n, r) {
							if (ot.warnings) {
								var i,
								    o = new L(t);if (n) r._attachExtraTrace(o);else if (ot.longStackTraces && (i = e._peekContext())) i.attachExtraTrace(o);else {
									var s = j(o);o.stack = s.message + "\n" + s.stack.join("\n");
								}tt("warning", o) || k(o, "", !0);
							}
						}function m(t, e) {
							for (var n = 0; n < e.length - 1; ++n) {
								e[n].push("From previous event:"), e[n] = e[n].join("\n");
							}return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n");
						}function g(t) {
							for (var e = 0; e < t.length; ++e) {
								(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--);
							}
						}function b(t) {
							for (var e = t[0], n = 1; n < t.length; ++n) {
								for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a) {
									if (r[a] === o) {
										s = a;break;
									}
								}for (var a = s; a >= 0; --a) {
									var c = r[a];if (e[i] !== c) break;e.pop(), i--;
								}e = r;
							}
						}function w(t) {
							for (var e = [], n = 0; n < t.length; ++n) {
								var r = t[n],
								    i = "    (No stack trace)" === r || q.test(r),
								    o = i && nt(r);i && !o && ($ && " " !== r.charAt(0) && (r = "    " + r), e.push(r));
							}return e;
						}function C(t) {
							for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
								var r = e[n];if ("    (No stack trace)" === r || q.test(r)) break;
							}return n > 0 && (e = e.slice(n)), e;
						}function j(t) {
							var e = t.stack,
							    n = t.toString();return e = "string" == typeof e && e.length > 0 ? C(t) : ["    (No stack trace)"], { message: n, stack: w(e) };
						}function k(t, e, n) {
							if ("undefined" != typeof console) {
								var r;if (H.isObject(t)) {
									var i = t.stack;r = e + Q(i, t);
								} else r = e + String(t);"function" == typeof D ? D(r, n) : ("function" == typeof console.log || "object" == _typeof(console.log)) && console.log(r);
							}
						}function E(t, e, n, r) {
							var i = !1;try {
								"function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r));
							} catch (o) {
								I.throwLater(o);
							}"unhandledRejection" === t ? tt(t, n, r) || i || k(n, "Unhandled rejection ") : tt(t, r);
						}function F(t) {
							var e;if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";else {
								e = t && "function" == typeof t.toString ? t.toString() : H.toString(t);var n = /\[object [a-zA-Z0-9$_]+\]/;if (n.test(e)) try {
									var r = JSON.stringify(t);e = r;
								} catch (i) {}0 === e.length && (e = "(empty array)");
							}return "(<" + x(e) + ">, no stack trace)";
						}function x(t) {
							var e = 41;return t.length < e ? t : t.substr(0, e - 3) + "...";
						}function T() {
							return "function" == typeof it;
						}function P(t) {
							var e = t.match(rt);return e ? { fileName: e[1], line: parseInt(e[2], 10) } : void 0;
						}function R(t, e) {
							if (T()) {
								for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), s = -1, a = -1, c = 0; c < i.length; ++c) {
									var l = P(i[c]);if (l) {
										n = l.fileName, s = l.line;break;
									}
								}for (var c = 0; c < o.length; ++c) {
									var l = P(o[c]);if (l) {
										r = l.fileName, a = l.line;break;
									}
								}0 > s || 0 > a || !n || !r || n !== r || s >= a || (nt = function nt(t) {
									if (B.test(t)) return !0;var e = P(t);return e && e.fileName === n && s <= e.line && e.line <= a ? !0 : !1;
								});
							}
						}function S(t) {
							this._parent = t, this._promisesCreated = 0;var e = this._length = 1 + (void 0 === t ? 0 : t._length);it(this, S), e > 32 && this.uncycle();
						}var O,
						    A,
						    D,
						    V = e._getDomain,
						    I = e._async,
						    L = t("./errors").Warning,
						    H = t("./util"),
						    N = H.canAttachTrace,
						    B = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
						    U = /\((?:timers\.js):\d+:\d+\)/,
						    M = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
						    q = null,
						    Q = null,
						    $ = !1,
						    G = !(0 == H.env("BLUEBIRD_DEBUG") || !H.env("BLUEBIRD_DEBUG") && "development" !== H.env("NODE_ENV")),
						    z = !(0 == H.env("BLUEBIRD_WARNINGS") || !G && !H.env("BLUEBIRD_WARNINGS")),
						    X = !(0 == H.env("BLUEBIRD_LONG_STACK_TRACES") || !G && !H.env("BLUEBIRD_LONG_STACK_TRACES")),
						    W = 0 != H.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (z || !!H.env("BLUEBIRD_W_FORGOTTEN_RETURN"));e.prototype.suppressUnhandledRejections = function () {
							var t = this._target();t._bitField = -1048577 & t._bitField | 524288;
						}, e.prototype._ensurePossibleRejectionHandled = function () {
							0 === (524288 & this._bitField) && (this._setRejectionIsUnhandled(), I.invokeLater(this._notifyUnhandledRejection, this, void 0));
						}, e.prototype._notifyUnhandledRejectionIsHandled = function () {
							E("rejectionHandled", O, void 0, this);
						}, e.prototype._setReturnedNonUndefined = function () {
							this._bitField = 268435456 | this._bitField;
						}, e.prototype._returnedNonUndefined = function () {
							return 0 !== (268435456 & this._bitField);
						}, e.prototype._notifyUnhandledRejection = function () {
							if (this._isRejectionUnhandled()) {
								var t = this._settledValue();this._setUnhandledRejectionIsNotified(), E("unhandledRejection", A, t, this);
							}
						}, e.prototype._setUnhandledRejectionIsNotified = function () {
							this._bitField = 262144 | this._bitField;
						}, e.prototype._unsetUnhandledRejectionIsNotified = function () {
							this._bitField = -262145 & this._bitField;
						}, e.prototype._isUnhandledRejectionNotified = function () {
							return (262144 & this._bitField) > 0;
						}, e.prototype._setRejectionIsUnhandled = function () {
							this._bitField = 1048576 | this._bitField;
						}, e.prototype._unsetRejectionIsUnhandled = function () {
							this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
						}, e.prototype._isRejectionUnhandled = function () {
							return (1048576 & this._bitField) > 0;
						}, e.prototype._warn = function (t, e, n) {
							return y(t, e, n || this);
						}, e.onPossiblyUnhandledRejection = function (t) {
							var e = V();A = "function" == typeof t ? null === e ? t : H.domainBind(e, t) : void 0;
						}, e.onUnhandledRejectionHandled = function (t) {
							var e = V();O = "function" == typeof t ? null === e ? t : H.domainBind(e, t) : void 0;
						};var K = function K() {};e.longStackTraces = function () {
							if (I.haveItemsQueued() && !ot.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if (!ot.longStackTraces && T()) {
								var t = e.prototype._captureStackTrace,
								    r = e.prototype._attachExtraTrace;ot.longStackTraces = !0, K = function K() {
									if (I.haveItemsQueued() && !ot.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");e.prototype._captureStackTrace = t, e.prototype._attachExtraTrace = r, n.deactivateLongStackTraces(), I.enableTrampoline(), ot.longStackTraces = !1;
								}, e.prototype._captureStackTrace = f, e.prototype._attachExtraTrace = _, n.activateLongStackTraces(), I.disableTrampolineIfNecessary();
							}
						}, e.hasLongStackTraces = function () {
							return ot.longStackTraces && T();
						};var J = function () {
							try {
								if ("function" == typeof CustomEvent) {
									var t = new CustomEvent("CustomEvent");return H.global.dispatchEvent(t), function (t, e) {
										var n = new CustomEvent(t.toLowerCase(), { detail: e, cancelable: !0 });return !H.global.dispatchEvent(n);
									};
								}if ("function" == typeof Event) {
									var t = new Event("CustomEvent");return H.global.dispatchEvent(t), function (t, e) {
										var n = new Event(t.toLowerCase(), { cancelable: !0 });return n.detail = e, !H.global.dispatchEvent(n);
									};
								}var t = document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent", !1, !0, {}), H.global.dispatchEvent(t), function (t, e) {
									var n = document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !H.global.dispatchEvent(n);
								};
							} catch (e) {}return function () {
								return !1;
							};
						}(),
						    Y = function () {
							return H.isNode ? function () {
								return process.emit.apply(process, arguments);
							} : H.global ? function (t) {
								var e = "on" + t.toLowerCase(),
								    n = H.global[e];return n ? (n.apply(H.global, [].slice.call(arguments, 1)), !0) : !1;
							} : function () {
								return !1;
							};
						}(),
						    Z = { promiseCreated: r, promiseFulfilled: r, promiseRejected: r, promiseResolved: r, promiseCancelled: r, promiseChained: function promiseChained(t, e, n) {
								return { promise: e, child: n };
							}, warning: function warning(t, e) {
								return { warning: e };
							}, unhandledRejection: function unhandledRejection(t, e, n) {
								return { reason: e, promise: n };
							}, rejectionHandled: r },
						    tt = function tt(t) {
							var e = !1;try {
								e = Y.apply(null, arguments);
							} catch (n) {
								I.throwLater(n), e = !0;
							}var r = !1;try {
								r = J(t, Z[t].apply(null, arguments));
							} catch (n) {
								I.throwLater(n), r = !0;
							}return r || e;
						};e.config = function (t) {
							if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && K()), "warnings" in t) {
								var n = t.warnings;ot.warnings = !!n, W = ot.warnings, H.isObject(n) && "wForgottenReturn" in n && (W = !!n.wForgottenReturn);
							}if ("cancellation" in t && t.cancellation && !ot.cancellation) {
								if (I.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");e.prototype._clearCancellationData = l, e.prototype._propagateFrom = u, e.prototype._onCancel = a, e.prototype._setOnCancel = c, e.prototype._attachCancellationCallback = s, e.prototype._execute = o, et = u, ot.cancellation = !0;
							}"monitoring" in t && (t.monitoring && !ot.monitoring ? (ot.monitoring = !0, e.prototype._fireEvent = tt) : !t.monitoring && ot.monitoring && (ot.monitoring = !1, e.prototype._fireEvent = i));
						}, e.prototype._fireEvent = i, e.prototype._execute = function (t, e, n) {
							try {
								t(e, n);
							} catch (r) {
								return r;
							}
						}, e.prototype._onCancel = function () {}, e.prototype._setOnCancel = function (t) {}, e.prototype._attachCancellationCallback = function (t) {}, e.prototype._captureStackTrace = function () {}, e.prototype._attachExtraTrace = function () {}, e.prototype._clearCancellationData = function () {}, e.prototype._propagateFrom = function (t, e) {};var et = p,
						    nt = function nt() {
							return !1;
						},
						    rt = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;H.inherits(S, Error), n.CapturedTrace = S, S.prototype.uncycle = function () {
							var t = this._length;if (!(2 > t)) {
								for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) {
									e.push(i), i = i._parent;
								}t = this._length = r;for (var r = t - 1; r >= 0; --r) {
									var o = e[r].stack;void 0 === n[o] && (n[o] = r);
								}for (var r = 0; t > r; ++r) {
									var s = e[r].stack,
									    a = n[s];if (void 0 !== a && a !== r) {
										a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;var c = r > 0 ? e[r - 1] : this;t - 1 > a ? (c._parent = e[a + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);for (var l = c._length + 1, u = r - 2; u >= 0; --u) {
											e[u]._length = l, l++;
										}return;
									}
								}
							}
						}, S.prototype.attachExtraTrace = function (t) {
							if (!t.__stackCleaned__) {
								this.uncycle();for (var e = j(t), n = e.message, r = [e.stack], i = this; void 0 !== i;) {
									r.push(w(i.stack.split("\n"))), i = i._parent;
								}b(r), g(r), H.notEnumerableProp(t, "stack", m(n, r)), H.notEnumerableProp(t, "__stackCleaned__", !0);
							}
						};var it = function () {
							var t = /^\s*at\s*/,
							    e = function e(t, _e) {
								return "string" == typeof t ? t : void 0 !== _e.name && void 0 !== _e.message ? _e.toString() : F(_e);
							};if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
								Error.stackTraceLimit += 6, q = t, Q = e;var n = Error.captureStackTrace;return nt = function nt(t) {
									return B.test(t);
								}, function (t, e) {
									Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6;
								};
							}var r = new Error();if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return q = /@/, Q = e, $ = !0, function (t) {
								t.stack = new Error().stack;
							};var i;try {
								throw new Error();
							} catch (o) {
								i = "stack" in o;
							}return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (Q = function Q(t, e) {
								return "string" == typeof t ? t : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e || void 0 === e.name || void 0 === e.message ? F(e) : e.toString();
							}, null) : (q = t, Q = e, function (t) {
								Error.stackTraceLimit += 6;try {
									throw new Error();
								} catch (e) {
									t.stack = e.stack;
								}Error.stackTraceLimit -= 6;
							});
						}([]);"undefined" != typeof console && "undefined" != typeof console.warn && (D = function D(t) {
							console.warn(t);
						}, H.isNode && process.stderr.isTTY ? D = function D(t, e) {
							var n = e ? "[33m" : "[31m";console.warn(n + t + "[0m\n");
						} : H.isNode || "string" != typeof new Error().stack || (D = function D(t, e) {
							console.warn("%c" + t, e ? "color: darkorange" : "color: red");
						}));var ot = { warnings: z, longStackTraces: !1, cancellation: !1, monitoring: !1 };return X && e.longStackTraces(), { longStackTraces: function longStackTraces() {
								return ot.longStackTraces;
							}, warnings: function warnings() {
								return ot.warnings;
							}, cancellation: function cancellation() {
								return ot.cancellation;
							}, monitoring: function monitoring() {
								return ot.monitoring;
							}, propagateFromFunction: function propagateFromFunction() {
								return et;
							}, boundValueFunction: function boundValueFunction() {
								return h;
							}, checkForgottenReturns: d, setBounds: R, warn: y, deprecated: v, CapturedTrace: S, fireDomEvent: J, fireGlobalEvent: Y };
					};
				}, { "./errors": 12, "./util": 36 }], 10: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e() {
							return this.value;
						}function n() {
							throw this.reason;
						}t.prototype["return"] = t.prototype.thenReturn = function (n) {
							return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, { value: n }, void 0);
						}, t.prototype["throw"] = t.prototype.thenThrow = function (t) {
							return this._then(n, void 0, void 0, { reason: t }, void 0);
						}, t.prototype.catchThrow = function (t) {
							if (arguments.length <= 1) return this._then(void 0, n, void 0, { reason: t }, void 0);var e = arguments[1],
							    r = function r() {
								throw e;
							};return this.caught(t, r);
						}, t.prototype.catchReturn = function (n) {
							if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, { value: n }, void 0);var r = arguments[1];r instanceof t && r.suppressUnhandledRejections();var i = function i() {
								return r;
							};return this.caught(n, i);
						};
					};
				}, {}], 11: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e) {
						function n() {
							return o(this);
						}function r(t, n) {
							return i(t, n, e, e);
						}var i = t.reduce,
						    o = t.all;t.prototype.each = function (t) {
							return i(this, t, e, 0)._then(n, void 0, void 0, this, void 0);
						}, t.prototype.mapSeries = function (t) {
							return i(this, t, e, e);
						}, t.each = function (t, r) {
							return i(t, r, e, 0)._then(n, void 0, void 0, t, void 0);
						}, t.mapSeries = r;
					};
				}, {}], 12: [function (t, e, n) {
					"use strict";
					function r(t, e) {
						function n(r) {
							return this instanceof n ? (p(this, "message", "string" == typeof r ? r : e), p(this, "name", t), void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r);
						}return u(n, Error), n;
					}function i(t) {
						return this instanceof i ? (p(this, "name", "OperationalError"), p(this, "message", t), this.cause = t, this.isOperational = !0, void (t instanceof Error ? (p(this, "message", t.message), p(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t);
					}var o,
					    s,
					    a = t("./es5"),
					    c = a.freeze,
					    l = t("./util"),
					    u = l.inherits,
					    p = l.notEnumerableProp,
					    h = r("Warning", "warning"),
					    f = r("CancellationError", "cancellation error"),
					    _ = r("TimeoutError", "timeout error"),
					    d = r("AggregateError", "aggregate error");try {
						o = TypeError, s = RangeError;
					} catch (v) {
						o = r("TypeError", "type error"), s = r("RangeError", "range error");
					}for (var y = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < y.length; ++m) {
						"function" == typeof Array.prototype[y[m]] && (d.prototype[y[m]] = Array.prototype[y[m]]);
					}a.defineProperty(d.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 }), d.prototype.isOperational = !0;var g = 0;d.prototype.toString = function () {
						var t = Array(4 * g + 1).join(" "),
						    e = "\n" + t + "AggregateError of:\n";g++, t = Array(4 * g + 1).join(" ");for (var n = 0; n < this.length; ++n) {
							for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) {
								i[o] = t + i[o];
							}r = i.join("\n"), e += r + "\n";
						}return g--, e;
					}, u(i, Error);var b = Error.__BluebirdErrorTypes__;b || (b = c({ CancellationError: f, TimeoutError: _, OperationalError: i, RejectionError: i, AggregateError: d }), a.defineProperty(Error, "__BluebirdErrorTypes__", { value: b, writable: !1, enumerable: !1, configurable: !1 })), e.exports = { Error: Error, TypeError: o, RangeError: s, CancellationError: b.CancellationError, OperationalError: b.OperationalError, TimeoutError: b.TimeoutError, AggregateError: b.AggregateError, Warning: h };
				}, { "./es5": 13, "./util": 36 }], 13: [function (t, e, n) {
					var r = function () {
						"use strict";
						return void 0 === this;
					}();if (r) e.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: r, propertyIsWritable: function propertyIsWritable(t, e) {
							var n = Object.getOwnPropertyDescriptor(t, e);return !(n && !n.writable && !n.set);
						} };else {
						var i = {}.hasOwnProperty,
						    o = {}.toString,
						    s = {}.constructor.prototype,
						    a = function a(t) {
							var e = [];for (var n in t) {
								i.call(t, n) && e.push(n);
							}return e;
						},
						    c = function c(t, e) {
							return { value: t[e] };
						},
						    l = function l(t, e, n) {
							return t[e] = n.value, t;
						},
						    u = function u(t) {
							return t;
						},
						    p = function p(t) {
							try {
								return Object(t).constructor.prototype;
							} catch (e) {
								return s;
							}
						},
						    h = function h(t) {
							try {
								return "[object Array]" === o.call(t);
							} catch (e) {
								return !1;
							}
						};e.exports = { isArray: h, keys: a, names: a, defineProperty: l, getDescriptor: c, freeze: u, getPrototypeOf: p, isES5: r, propertyIsWritable: function propertyIsWritable() {
								return !0;
							} };
					}
				}, {}], 14: [function (t, e, n) {
					"use strict";
					e.exports = function (t, e) {
						var n = t.map;t.prototype.filter = function (t, r) {
							return n(this, t, r, e);
						}, t.filter = function (t, r, i) {
							return n(t, r, i, e);
						};
					};
				}, {}], 15: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t, e, n) {
							this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null;
						}function i(t) {
							this.finallyHandler = t;
						}function o(t, e) {
							return null != t.cancelPromise ? (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0) : !1;
						}function s() {
							return c.call(this, this.promise._target()._settledValue());
						}function a(t) {
							return o(this, t) ? void 0 : (p.e = t, p);
						}function c(t) {
							var r = this.promise,
							    c = this.handler;if (!this.called) {
								this.called = !0;var l = this.isFinallyHandler() ? c.call(r._boundValue()) : c.call(r._boundValue(), t);if (void 0 !== l) {
									r._setReturnedNonUndefined();var h = n(l, r);if (h instanceof e) {
										if (null != this.cancelPromise) {
											if (h._isCancelled()) {
												var f = new u("late cancellation observer");return r._attachExtraTrace(f), p.e = f, p;
											}h.isPending() && h._attachCancellationCallback(new i(this));
										}return h._then(s, a, void 0, this, void 0);
									}
								}
							}return r.isRejected() ? (o(this), p.e = t, p) : (o(this), t);
						}var l = t("./util"),
						    u = e.CancellationError,
						    p = l.errorObj;return r.prototype.isFinallyHandler = function () {
							return 0 === this.type;
						}, i.prototype._resultCancelled = function () {
							o(this.finallyHandler);
						}, e.prototype._passThrough = function (t, e, n, i) {
							return "function" != typeof t ? this.then() : this._then(n, i, void 0, new r(this, e, t), void 0);
						}, e.prototype.lastly = e.prototype["finally"] = function (t) {
							return this._passThrough(t, 0, c, c);
						}, e.prototype.tap = function (t) {
							return this._passThrough(t, 1, c);
						}, r;
					};
				}, { "./util": 36 }], 16: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o, s) {
						function a(t, n, r) {
							for (var o = 0; o < n.length; ++o) {
								r._pushContext();var s = f(n[o])(t);if (r._popContext(), s === h) {
									r._pushContext();var a = e.reject(h.e);return r._popContext(), a;
								}var c = i(s, r);if (c instanceof e) return c;
							}return null;
						}function c(t, n, i, o) {
							if (s.cancellation()) {
								var a = new e(r),
								    c = this._finallyPromise = new e(r);this._promise = a.lastly(function () {
									return c;
								}), a._captureStackTrace(), a._setOnCancel(this);
							} else {
								var l = this._promise = new e(r);l._captureStackTrace();
							}this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(_) : _, this._yieldedPromise = null, this._cancellationPhase = !1;
						}var l = t("./errors"),
						    u = l.TypeError,
						    p = t("./util"),
						    h = p.errorObj,
						    f = p.tryCatch,
						    _ = [];p.inherits(c, o), c.prototype._isResolved = function () {
							return null === this._promise;
						}, c.prototype._cleanup = function () {
							this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null);
						}, c.prototype._promiseCancelled = function () {
							if (!this._isResolved()) {
								var t,
								    n = "undefined" != typeof this._generator["return"];if (n) this._promise._pushContext(), t = f(this._generator["return"]).call(this._generator, void 0), this._promise._popContext();else {
									var r = new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = f(this._generator["throw"]).call(this._generator, r), this._promise._popContext();
								}this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t);
							}
						}, c.prototype._promiseFulfilled = function (t) {
							this._yieldedPromise = null, this._promise._pushContext();var e = f(this._generator.next).call(this._generator, t);this._promise._popContext(), this._continue(e);
						}, c.prototype._promiseRejected = function (t) {
							this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();var e = f(this._generator["throw"]).call(this._generator, t);this._promise._popContext(), this._continue(e);
						}, c.prototype._resultCancelled = function () {
							if (this._yieldedPromise instanceof e) {
								var t = this._yieldedPromise;this._yieldedPromise = null, t.cancel();
							}
						}, c.prototype.promise = function () {
							return this._promise;
						}, c.prototype._run = function () {
							this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
						}, c.prototype._continue = function (t) {
							var n = this._promise;if (t === h) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);var r = t.value;if (t.done === !0) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);var o = i(r, this._promise);if (!(o instanceof e) && (o = a(o, this._yieldHandlers, this._promise), null === o)) return void this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));o = o._target();var s = o._bitField;0 === (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 !== (33554432 & s) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 !== (16777216 & s) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled();
						}, e.coroutine = function (t, e) {
							if ("function" != typeof t) throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n = Object(e).yieldHandler,
							    r = c,
							    i = new Error().stack;return function () {
								var e = t.apply(this, arguments),
								    o = new r(void 0, void 0, n, i),
								    s = o.promise();return o._generator = e, o._promiseFulfilled(void 0), s;
							};
						}, e.coroutine.addYieldHandler = function (t) {
							if ("function" != typeof t) throw new u("expecting a function but got " + p.classString(t));_.push(t);
						}, e.spawn = function (t) {
							if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r = new c(t, this),
							    i = r.promise();return r._run(e.spawn), i;
						};
					};
				}, { "./errors": 12, "./util": 36 }], 17: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o, s) {
						var a = t("./util");a.canEvaluate, a.tryCatch, a.errorObj;e.join = function () {
							var t,
							    e = arguments.length - 1;if (e > 0 && "function" == typeof arguments[e]) {
								t = arguments[e];var r;
							}var i = [].slice.call(arguments);t && i.pop();var r = new n(i).promise();return void 0 !== t ? r.spread(t) : r;
						};
					};
				}, { "./util": 36 }], 18: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o, s) {
						function a(t, e, n, r) {
							this.constructor$(t), this._promise._captureStackTrace();var i = l();this._callback = null === i ? e : u.domainBind(i, e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], f.invoke(this._asyncInit, this, void 0);
						}function c(t, n, i, o) {
							if ("function" != typeof n) return r("expecting a function but got " + u.classString(n));var s = 0;if (void 0 !== i) {
								if ("object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) || null === i) return e.reject(new TypeError("options argument must be an object but it is " + u.classString(i)));if ("number" != typeof i.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(i.concurrency)));s = i.concurrency;
							}return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, new a(t, n, s, o).promise();
						}var l = e._getDomain,
						    u = t("./util"),
						    p = u.tryCatch,
						    h = u.errorObj,
						    f = e._async;u.inherits(a, n), a.prototype._asyncInit = function () {
							this._init$(void 0, -2);
						}, a.prototype._init = function () {}, a.prototype._promiseFulfilled = function (t, n) {
							var r = this._values,
							    o = this.length(),
							    a = this._preservedValues,
							    c = this._limit;if (0 > n) {
								if (n = -1 * n - 1, r[n] = t, c >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
							} else {
								if (c >= 1 && this._inFlight >= c) return r[n] = t, this._queue.push(n), !1;null !== a && (a[n] = t);var l = this._promise,
								    u = this._callback,
								    f = l._boundValue();l._pushContext();var _ = p(u).call(f, t, n, o),
								    d = l._popContext();if (s.checkForgottenReturns(_, d, null !== a ? "Promise.filter" : "Promise.map", l), _ === h) return this._reject(_.e), !0;var v = i(_, this._promise);if (v instanceof e) {
									v = v._target();var y = v._bitField;if (0 === (50397184 & y)) return c >= 1 && this._inFlight++, r[n] = v, v._proxy(this, -1 * (n + 1)), !1;if (0 === (33554432 & y)) return 0 !== (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);_ = v._value();
								}r[n] = _;
							}var m = ++this._totalResolved;return m >= o ? (null !== a ? this._filter(r, a) : this._resolve(r), !0) : !1;
						}, a.prototype._drainQueue = function () {
							for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
								if (this._isResolved()) return;var r = t.pop();this._promiseFulfilled(n[r], r);
							}
						}, a.prototype._filter = function (t, e) {
							for (var n = e.length, r = new Array(n), i = 0, o = 0; n > o; ++o) {
								t[o] && (r[i++] = e[o]);
							}r.length = i, this._resolve(r);
						}, a.prototype.preservedValues = function () {
							return this._preservedValues;
						}, e.prototype.map = function (t, e) {
							return c(this, t, e, null);
						}, e.map = function (t, e, n, r) {
							return c(t, e, n, r);
						};
					};
				}, { "./util": 36 }], 19: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o) {
						var s = t("./util"),
						    a = s.tryCatch;e.method = function (t) {
							if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + s.classString(t));return function () {
								var r = new e(n);r._captureStackTrace(), r._pushContext();var i = a(t).apply(this, arguments),
								    s = r._popContext();return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), r;
							};
						}, e.attempt = e["try"] = function (t) {
							if ("function" != typeof t) return i("expecting a function but got " + s.classString(t));var r = new e(n);r._captureStackTrace(), r._pushContext();var c;if (arguments.length > 1) {
								o.deprecated("calling Promise.try with more than 1 argument");var l = arguments[1],
								    u = arguments[2];c = s.isArray(l) ? a(t).apply(u, l) : a(t).call(u, l);
							} else c = a(t)();var p = r._popContext();return o.checkForgottenReturns(c, p, "Promise.try", r), r._resolveFromSyncValue(c), r;
						}, e.prototype._resolveFromSyncValue = function (t) {
							t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0);
						};
					};
				}, { "./util": 36 }], 20: [function (t, e, n) {
					"use strict";
					function r(t) {
						return t instanceof Error && u.getPrototypeOf(t) === Error.prototype;
					}function i(t) {
						var e;if (r(t)) {
							e = new l(t), e.name = t.name, e.message = t.message, e.stack = t.stack;for (var n = u.keys(t), i = 0; i < n.length; ++i) {
								var o = n[i];p.test(o) || (e[o] = t[o]);
							}return e;
						}return s.markAsOriginatingFromRejection(t), t;
					}function o(t, e) {
						return function (n, r) {
							if (null !== t) {
								if (n) {
									var o = i(a(n));t._attachExtraTrace(o), t._reject(o);
								} else if (e) {
									var s = [].slice.call(arguments, 1);t._fulfill(s);
								} else t._fulfill(r);t = null;
							}
						};
					}var s = t("./util"),
					    a = s.maybeWrapAsError,
					    c = t("./errors"),
					    l = c.OperationalError,
					    u = t("./es5"),
					    p = /^(?:name|message|stack|cause)$/;e.exports = o;
				}, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (t, e, n) {
					"use strict";
					e.exports = function (e) {
						function n(t, e) {
							var n = this;if (!o.isArray(t)) return r.call(n, t, e);var i = a(e).apply(n._boundValue(), [null].concat(t));i === c && s.throwLater(i.e);
						}function r(t, e) {
							var n = this,
							    r = n._boundValue(),
							    i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);i === c && s.throwLater(i.e);
						}function i(t, e) {
							var n = this;if (!t) {
								var r = new Error(t + "");r.cause = t, t = r;
							}var i = a(e).call(n._boundValue(), t);i === c && s.throwLater(i.e);
						}var o = t("./util"),
						    s = e._async,
						    a = o.tryCatch,
						    c = o.errorObj;e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
							if ("function" == typeof t) {
								var o = r;void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t);
							}return this;
						};
					};
				}, { "./util": 36 }], 22: [function (t, e, n) {
					"use strict";
					e.exports = function () {
						function n() {}function r(t, e) {
							if ("function" != typeof e) throw new m("expecting a function but got " + f.classString(e));if (t.constructor !== i) throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
						}function i(t) {
							this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, t !== b && (r(this, t), this._resolveFromExecutor(t)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
						}function o(t) {
							this.promise._resolveCallback(t);
						}function s(t) {
							this.promise._rejectCallback(t, !1);
						}function a(t) {
							var e = new i(b);e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t;
						}var c,
						    l = function l() {
							return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
						},
						    u = function u() {
							return new i.PromiseInspection(this._target());
						},
						    p = function p(t) {
							return i.reject(new m(t));
						},
						    h = {},
						    f = t("./util");c = f.isNode ? function () {
							var t = process.domain;return void 0 === t && (t = null), t;
						} : function () {
							return null;
						}, f.notEnumerableProp(i, "_getDomain", c);var _ = t("./es5"),
						    d = t("./async"),
						    v = new d();_.defineProperty(i, "_async", { value: v });var y = t("./errors"),
						    m = i.TypeError = y.TypeError;i.RangeError = y.RangeError;var g = i.CancellationError = y.CancellationError;i.TimeoutError = y.TimeoutError, i.OperationalError = y.OperationalError, i.RejectionError = y.OperationalError, i.AggregateError = y.AggregateError;var b = function b() {},
						    w = {},
						    C = {},
						    j = t("./thenables")(i, b),
						    k = t("./promise_array")(i, b, j, p, n),
						    E = t("./context")(i),
						    F = E.create,
						    x = t("./debuggability")(i, E),
						    T = (x.CapturedTrace, t("./finally")(i, j)),
						    P = t("./catch_filter")(C),
						    R = t("./nodeback"),
						    S = f.errorObj,
						    O = f.tryCatch;return i.prototype.toString = function () {
							return "[object Promise]";
						}, i.prototype.caught = i.prototype["catch"] = function (t) {
							var e = arguments.length;if (e > 1) {
								var n,
								    r = new Array(e - 1),
								    i = 0;for (n = 0; e - 1 > n; ++n) {
									var o = arguments[n];if (!f.isObject(o)) return p("expecting an object but got A catch statement predicate " + f.classString(o));r[i++] = o;
								}return r.length = i, t = arguments[n], this.then(void 0, P(r, t, this));
							}return this.then(void 0, t);
						}, i.prototype.reflect = function () {
							return this._then(u, u, void 0, this, void 0);
						}, i.prototype.then = function (t, e) {
							if (x.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
								var n = ".then() only accepts functions but was passed: " + f.classString(t);arguments.length > 1 && (n += ", " + f.classString(e)), this._warn(n);
							}return this._then(t, e, void 0, void 0, void 0);
						}, i.prototype.done = function (t, e) {
							var n = this._then(t, e, void 0, void 0, void 0);n._setIsFinal();
						}, i.prototype.spread = function (t) {
							return "function" != typeof t ? p("expecting a function but got " + f.classString(t)) : this.all()._then(t, void 0, void 0, w, void 0);
						}, i.prototype.toJSON = function () {
							var t = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 };return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t;
						}, i.prototype.all = function () {
							return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new k(this).promise();
						}, i.prototype.error = function (t) {
							return this.caught(f.originatesFromRejection, t);
						}, i.getNewLibraryCopy = e.exports, i.is = function (t) {
							return t instanceof i;
						}, i.fromNode = i.fromCallback = function (t) {
							var e = new i(b);e._captureStackTrace();var n = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1,
							    r = O(t)(R(e, n));return r === S && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e;
						}, i.all = function (t) {
							return new k(t).promise();
						}, i.cast = function (t) {
							var e = j(t);return e instanceof i || (e = new i(b), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e;
						}, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function (t) {
							var e = new i(b);return e._captureStackTrace(), e._rejectCallback(t, !0), e;
						}, i.setScheduler = function (t) {
							if ("function" != typeof t) throw new m("expecting a function but got " + f.classString(t));return v.setScheduler(t);
						}, i.prototype._then = function (t, e, n, r, o) {
							var s = void 0 !== o,
							    a = s ? o : new i(b),
							    l = this._target(),
							    u = l._bitField;s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 !== (2097152 & this._bitField) && (r = 0 !== (50397184 & u) ? this._boundValue() : l === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a));var p = c();if (0 !== (50397184 & u)) {
								var h,
								    _,
								    d = l._settlePromiseCtx;0 !== (33554432 & u) ? (_ = l._rejectionHandler0, h = t) : 0 !== (16777216 & u) ? (_ = l._fulfillmentHandler0, h = e, l._unsetRejectionIsUnhandled()) : (d = l._settlePromiseLateCancellationObserver, _ = new g("late cancellation observer"), l._attachExtraTrace(_), h = e), v.invoke(d, l, { handler: null === p ? h : "function" == typeof h && f.domainBind(p, h), promise: a, receiver: r, value: _ });
							} else l._addCallbacks(t, e, a, r, p);return a;
						}, i.prototype._length = function () {
							return 65535 & this._bitField;
						}, i.prototype._isFateSealed = function () {
							return 0 !== (117506048 & this._bitField);
						}, i.prototype._isFollowing = function () {
							return 67108864 === (67108864 & this._bitField);
						}, i.prototype._setLength = function (t) {
							this._bitField = -65536 & this._bitField | 65535 & t;
						}, i.prototype._setFulfilled = function () {
							this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
						}, i.prototype._setRejected = function () {
							this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
						}, i.prototype._setFollowing = function () {
							this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
						}, i.prototype._setIsFinal = function () {
							this._bitField = 4194304 | this._bitField;
						}, i.prototype._isFinal = function () {
							return (4194304 & this._bitField) > 0;
						}, i.prototype._unsetCancelled = function () {
							this._bitField = -65537 & this._bitField;
						}, i.prototype._setCancelled = function () {
							this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
						}, i.prototype._setWillBeCancelled = function () {
							this._bitField = 8388608 | this._bitField;
						}, i.prototype._setAsyncGuaranteed = function () {
							v.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
						}, i.prototype._receiverAt = function (t) {
							var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];return e === h ? void 0 : void 0 === e && this._isBound() ? this._boundValue() : e;
						}, i.prototype._promiseAt = function (t) {
							return this[4 * t - 4 + 2];
						}, i.prototype._fulfillmentHandlerAt = function (t) {
							return this[4 * t - 4 + 0];
						}, i.prototype._rejectionHandlerAt = function (t) {
							return this[4 * t - 4 + 1];
						}, i.prototype._boundValue = function () {}, i.prototype._migrateCallback0 = function (t) {
							var e = (t._bitField, t._fulfillmentHandler0),
							    n = t._rejectionHandler0,
							    r = t._promise0,
							    i = t._receiverAt(0);void 0 === i && (i = h), this._addCallbacks(e, n, r, i, null);
						}, i.prototype._migrateCallbackAt = function (t, e) {
							var n = t._fulfillmentHandlerAt(e),
							    r = t._rejectionHandlerAt(e),
							    i = t._promiseAt(e),
							    o = t._receiverAt(e);void 0 === o && (o = h), this._addCallbacks(n, r, i, o, null);
						}, i.prototype._addCallbacks = function (t, e, n, r, i) {
							var o = this._length();if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : f.domainBind(i, t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : f.domainBind(i, e));else {
								var s = 4 * o - 4;this[s + 2] = n, this[s + 3] = r, "function" == typeof t && (this[s + 0] = null === i ? t : f.domainBind(i, t)), "function" == typeof e && (this[s + 1] = null === i ? e : f.domainBind(i, e));
							}return this._setLength(o + 1), o;
						}, i.prototype._proxy = function (t, e) {
							this._addCallbacks(void 0, void 0, e, t, null);
						}, i.prototype._resolveCallback = function (t, e) {
							if (0 === (117506048 & this._bitField)) {
								if (t === this) return this._rejectCallback(l(), !1);var n = j(t, this);if (!(n instanceof i)) return this._fulfill(t);e && this._propagateFrom(n, 2);var r = n._target();if (r === this) return void this._reject(l());var o = r._bitField;if (0 === (50397184 & o)) {
									var s = this._length();s > 0 && r._migrateCallback0(this);for (var a = 1; s > a; ++a) {
										r._migrateCallbackAt(this, a);
									}this._setFollowing(), this._setLength(0), this._setFollowee(r);
								} else if (0 !== (33554432 & o)) this._fulfill(r._value());else if (0 !== (16777216 & o)) this._reject(r._reason());else {
									var c = new g("late cancellation observer");r._attachExtraTrace(c), this._reject(c);
								}
							}
						}, i.prototype._rejectCallback = function (t, e, n) {
							var r = f.ensureErrorObject(t),
							    i = r === t;if (!i && !n && x.warnings()) {
								var o = "a promise was rejected with a non-error: " + f.classString(t);this._warn(o, !0);
							}this._attachExtraTrace(r, e ? i : !1), this._reject(t);
						}, i.prototype._resolveFromExecutor = function (t) {
							var e = this;this._captureStackTrace(), this._pushContext();var n = !0,
							    r = this._execute(t, function (t) {
								e._resolveCallback(t);
							}, function (t) {
								e._rejectCallback(t, n);
							});n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0);
						}, i.prototype._settlePromiseFromHandler = function (t, e, n, r) {
							var i = r._bitField;if (0 === (65536 & i)) {
								r._pushContext();var o;e === w ? n && "number" == typeof n.length ? o = O(t).apply(this._boundValue(), n) : (o = S, o.e = new m("cannot .spread() a non-array: " + f.classString(n))) : o = O(t).call(e, n);var s = r._popContext();i = r._bitField, 0 === (65536 & i) && (o === C ? r._reject(n) : o === S ? r._rejectCallback(o.e, !1) : (x.checkForgottenReturns(o, s, "", r, this), r._resolveCallback(o)));
							}
						}, i.prototype._target = function () {
							for (var t = this; t._isFollowing();) {
								t = t._followee();
							}return t;
						}, i.prototype._followee = function () {
							return this._rejectionHandler0;
						}, i.prototype._setFollowee = function (t) {
							this._rejectionHandler0 = t;
						}, i.prototype._settlePromise = function (t, e, r, o) {
							var s = t instanceof i,
							    a = this._bitField,
							    c = 0 !== (134217728 & a);0 !== (65536 & a) ? (s && t._invokeInternalOnCancel(), r instanceof T && r.isFinallyHandler() ? (r.cancelPromise = t, O(e).call(r, o) === S && t._reject(S.e)) : e === u ? t._fulfill(u.call(r)) : r instanceof n ? r._promiseCancelled(t) : s || t instanceof k ? t._cancel() : r.cancel()) : "function" == typeof e ? s ? (c && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, r, o, t)) : e.call(r, o, t) : r instanceof n ? r._isResolved() || (0 !== (33554432 & a) ? r._promiseFulfilled(o, t) : r._promiseRejected(o, t)) : s && (c && t._setAsyncGuaranteed(), 0 !== (33554432 & a) ? t._fulfill(o) : t._reject(o));
						}, i.prototype._settlePromiseLateCancellationObserver = function (t) {
							var e = t.handler,
							    n = t.promise,
							    r = t.receiver,
							    o = t.value;"function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o);
						}, i.prototype._settlePromiseCtx = function (t) {
							this._settlePromise(t.promise, t.handler, t.receiver, t.value);
						}, i.prototype._settlePromise0 = function (t, e, n) {
							var r = this._promise0,
							    i = this._receiverAt(0);this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e);
						}, i.prototype._clearCallbackDataAtIndex = function (t) {
							var e = 4 * t - 4;this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0;
						}, i.prototype._fulfill = function (t) {
							var e = this._bitField;if (!((117506048 & e) >>> 16)) {
								if (t === this) {
									var n = l();return this._attachExtraTrace(n), this._reject(n);
								}this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 !== (134217728 & e) ? this._settlePromises() : v.settlePromises(this));
							}
						}, i.prototype._reject = function (t) {
							var e = this._bitField;if (!((117506048 & e) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal() ? v.fatalError(t, f.isNode) : void ((65535 & e) > 0 ? v.settlePromises(this) : this._ensurePossibleRejectionHandled());
						}, i.prototype._fulfillPromises = function (t, e) {
							for (var n = 1; t > n; n++) {
								var r = this._fulfillmentHandlerAt(n),
								    i = this._promiseAt(n),
								    o = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
							}
						}, i.prototype._rejectPromises = function (t, e) {
							for (var n = 1; t > n; n++) {
								var r = this._rejectionHandlerAt(n),
								    i = this._promiseAt(n),
								    o = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
							}
						}, i.prototype._settlePromises = function () {
							var t = this._bitField,
							    e = 65535 & t;if (e > 0) {
								if (0 !== (16842752 & t)) {
									var n = this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n);
								} else {
									var r = this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r);
								}this._setLength(0);
							}this._clearCancellationData();
						}, i.prototype._settledValue = function () {
							var t = this._bitField;return 0 !== (33554432 & t) ? this._rejectionHandler0 : 0 !== (16777216 & t) ? this._fulfillmentHandler0 : void 0;
						}, i.defer = i.pending = function () {
							x.deprecated("Promise.defer", "new Promise");var t = new i(b);return { promise: t, resolve: o, reject: s };
						}, f.notEnumerableProp(i, "_makeSelfResolutionError", l), t("./method")(i, b, j, p, x), t("./bind")(i, b, j, x), t("./cancel")(i, k, p, x), t("./direct_resolve")(i), t("./synchronous_inspection")(i), t("./join")(i, k, j, b, v, c), i.Promise = i, i.version = "3.4.6", t("./map.js")(i, k, p, j, b, x), t("./call_get.js")(i), t("./using.js")(i, p, j, F, b, x), t("./timers.js")(i, b, x), t("./generators.js")(i, p, b, j, n, x), t("./nodeify.js")(i), t("./promisify.js")(i, b), t("./props.js")(i, k, j, p), t("./race.js")(i, b, j, p), t("./reduce.js")(i, k, p, j, b, x), t("./settle.js")(i, k, x), t("./some.js")(i, k, p), t("./filter.js")(i, b), t("./each.js")(i, b), t("./any.js")(i), f.toFastProperties(i), f.toFastProperties(i.prototype), a({ a: 1 }), a({ b: 2 }), a({ c: 3 }), a(1), a(function () {}), a(void 0), a(!1), a(new i(b)), x.setBounds(d.firstLineError, f.lastLineError), i;
					};
				}, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o) {
						function s(t) {
							switch (t) {case -2:
									return [];case -3:
									return {};}
						}function a(t) {
							var r = this._promise = new e(n);t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
						}var c = t("./util");c.isArray;return c.inherits(a, o), a.prototype.length = function () {
							return this._length;
						}, a.prototype.promise = function () {
							return this._promise;
						}, a.prototype._init = function l(t, n) {
							var o = r(this._values, this._promise);if (o instanceof e) {
								o = o._target();var a = o._bitField;if (this._values = o, 0 === (50397184 & a)) return this._promise._setAsyncGuaranteed(), o._then(l, this._reject, void 0, this, n);if (0 === (33554432 & a)) return 0 !== (16777216 & a) ? this._reject(o._reason()) : this._cancel();o = o._value();
							}if (o = c.asArray(o), null === o) {
								var u = i("expecting an array or an iterable object but got " + c.classString(o)).reason();return void this._promise._rejectCallback(u, !1);
							}return 0 === o.length ? void (-5 === n ? this._resolveEmptyArray() : this._resolve(s(n))) : void this._iterate(o);
						}, a.prototype._iterate = function (t) {
							var n = this.getActualLength(t.length);this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;for (var i = this._promise, o = !1, s = null, a = 0; n > a; ++a) {
								var c = r(t[a], i);c instanceof e ? (c = c._target(), s = c._bitField) : s = null, o ? null !== s && c.suppressUnhandledRejections() : null !== s ? 0 === (50397184 & s) ? (c._proxy(this, a), this._values[a] = c) : o = 0 !== (33554432 & s) ? this._promiseFulfilled(c._value(), a) : 0 !== (16777216 & s) ? this._promiseRejected(c._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(c, a);
							}o || i._setAsyncGuaranteed();
						}, a.prototype._isResolved = function () {
							return null === this._values;
						}, a.prototype._resolve = function (t) {
							this._values = null, this._promise._fulfill(t);
						}, a.prototype._cancel = function () {
							!this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
						}, a.prototype._reject = function (t) {
							this._values = null, this._promise._rejectCallback(t, !1);
						}, a.prototype._promiseFulfilled = function (t, e) {
							this._values[e] = t;var n = ++this._totalResolved;return n >= this._length ? (this._resolve(this._values), !0) : !1;
						}, a.prototype._promiseCancelled = function () {
							return this._cancel(), !0;
						}, a.prototype._promiseRejected = function (t) {
							return this._totalResolved++, this._reject(t), !0;
						}, a.prototype._resultCancelled = function () {
							if (!this._isResolved()) {
								var t = this._values;if (this._cancel(), t instanceof e) t.cancel();else for (var n = 0; n < t.length; ++n) {
									t[n] instanceof e && t[n].cancel();
								}
							}
						}, a.prototype.shouldCopyValues = function () {
							return !0;
						}, a.prototype.getActualLength = function (t) {
							return t;
						}, a;
					};
				}, { "./util": 36 }], 24: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t) {
							return !C.test(t);
						}function i(t) {
							try {
								return t.__isPromisified__ === !0;
							} catch (e) {
								return !1;
							}
						}function o(t, e, n) {
							var r = f.getDataPropertyOrDefault(t, e + n, b);return r ? i(r) : !1;
						}function s(t, e, n) {
							for (var r = 0; r < t.length; r += 2) {
								var i = t[r];if (n.test(i)) for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2) {
									if (t[s] === o) throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e));
								}
							}
						}function a(t, e, n, r) {
							for (var a = f.inheritedDataKeys(t), c = [], l = 0; l < a.length; ++l) {
								var u = a[l],
								    p = t[u],
								    h = r === j ? !0 : j(u, p, t);"function" != typeof p || i(p) || o(t, u, e) || !r(u, p, t, h) || c.push(u, p);
							}return s(c, e, n), c;
						}function c(t, r, i, o, s, a) {
							function c() {
								var i = r;r === h && (i = this);var o = new e(n);o._captureStackTrace();var s = "string" == typeof u && this !== l ? this[u] : t,
								    c = _(o, a);try {
									s.apply(i, d(arguments, c));
								} catch (p) {
									o._rejectCallback(v(p), !0, !0);
								}return o._isFateSealed() || o._setAsyncGuaranteed(), o;
							}var l = function () {
								return this;
							}(),
							    u = t;return "string" == typeof u && (t = o), f.notEnumerableProp(c, "__isPromisified__", !0), c;
						}function l(t, e, n, r, i) {
							for (var o = new RegExp(k(e) + "$"), s = a(t, e, o, n), c = 0, l = s.length; l > c; c += 2) {
								var u = s[c],
								    p = s[c + 1],
								    _ = u + e;if (r === E) t[_] = E(u, h, u, p, e, i);else {
									var d = r(p, function () {
										return E(u, h, u, p, e, i);
									});f.notEnumerableProp(d, "__isPromisified__", !0), t[_] = d;
								}
							}return f.toFastProperties(t), t;
						}function u(t, e, n) {
							return E(t, e, void 0, t, null, n);
						}var p,
						    h = {},
						    f = t("./util"),
						    _ = t("./nodeback"),
						    d = f.withAppended,
						    v = f.maybeWrapAsError,
						    y = f.canEvaluate,
						    m = t("./errors").TypeError,
						    g = "Async",
						    b = { __isPromisified__: !0 },
						    w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
						    C = new RegExp("^(?:" + w.join("|") + ")$"),
						    j = function j(t) {
							return f.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t;
						},
						    k = function k(t) {
							return t.replace(/([$])/, "\\$");
						},
						    E = y ? p : c;e.promisify = function (t, e) {
							if ("function" != typeof t) throw new m("expecting a function but got " + f.classString(t));if (i(t)) return t;e = Object(e);var n = void 0 === e.context ? h : e.context,
							    o = !!e.multiArgs,
							    s = u(t, n, o);return f.copyDescriptors(t, s, r), s;
						}, e.promisifyAll = function (t, e) {
							if ("function" != typeof t && "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");e = Object(e);var n = !!e.multiArgs,
							    r = e.suffix;"string" != typeof r && (r = g);var i = e.filter;"function" != typeof i && (i = j);var o = e.promisifier;if ("function" != typeof o && (o = E), !f.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for (var s = f.inheritedDataKeys(t), a = 0; a < s.length; ++a) {
								var c = t[s[a]];"constructor" !== s[a] && f.isClass(c) && (l(c.prototype, r, i, o, n), l(c, r, i, o, n));
							}return l(t, r, i, o, n);
						};
					};
				}, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i) {
						function o(t) {
							var e,
							    n = !1;if (void 0 !== a && t instanceof a) e = p(t), n = !0;else {
								var r = u.keys(t),
								    i = r.length;e = new Array(2 * i);for (var o = 0; i > o; ++o) {
									var s = r[o];e[o] = t[s], e[o + i] = s;
								}
							}this.constructor$(e), this._isMap = n, this._init$(void 0, -3);
						}function s(t) {
							var n,
							    s = r(t);return l(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
						}var a,
						    c = t("./util"),
						    l = c.isObject,
						    u = t("./es5");"function" == typeof Map && (a = Map);var p = function () {
							function t(t, r) {
								this[e] = t, this[e + n] = r, e++;
							}var e = 0,
							    n = 0;return function (r) {
								n = r.size, e = 0;var i = new Array(2 * r.size);return r.forEach(t, i), i;
							};
						}(),
						    h = function h(t) {
							for (var e = new a(), n = t.length / 2 | 0, r = 0; n > r; ++r) {
								var i = t[n + r],
								    o = t[r];e.set(i, o);
							}return e;
						};c.inherits(o, n), o.prototype._init = function () {}, o.prototype._promiseFulfilled = function (t, e) {
							this._values[e] = t;var n = ++this._totalResolved;if (n >= this._length) {
								var r;if (this._isMap) r = h(this._values);else {
									r = {};for (var i = this.length(), o = 0, s = this.length(); s > o; ++o) {
										r[this._values[o + i]] = this._values[o];
									}
								}return this._resolve(r), !0;
							}return !1;
						}, o.prototype.shouldCopyValues = function () {
							return !1;
						}, o.prototype.getActualLength = function (t) {
							return t >> 1;
						}, e.prototype.props = function () {
							return s(this);
						}, e.props = function (t) {
							return s(t);
						};
					};
				}, { "./es5": 13, "./util": 36 }], 26: [function (t, e, n) {
					"use strict";
					function r(t, e, n, r, i) {
						for (var o = 0; i > o; ++o) {
							n[o + r] = t[o + e], t[o + e] = void 0;
						}
					}function i(t) {
						this._capacity = t, this._length = 0, this._front = 0;
					}i.prototype._willBeOverCapacity = function (t) {
						return this._capacity < t;
					}, i.prototype._pushOne = function (t) {
						var e = this.length();this._checkCapacity(e + 1);var n = this._front + e & this._capacity - 1;this[n] = t, this._length = e + 1;
					}, i.prototype._unshiftOne = function (t) {
						var e = this._capacity;this._checkCapacity(this.length() + 1);var n = this._front,
						    r = (n - 1 & e - 1 ^ e) - e;this[r] = t, this._front = r, this._length = this.length() + 1;
					}, i.prototype.unshift = function (t, e, n) {
						this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t);
					}, i.prototype.push = function (t, e, n) {
						var r = this.length() + 3;if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);var i = this._front + r - 3;this._checkCapacity(r);var o = this._capacity - 1;this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r;
					}, i.prototype.shift = function () {
						var t = this._front,
						    e = this[t];return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e;
					}, i.prototype.length = function () {
						return this._length;
					}, i.prototype._checkCapacity = function (t) {
						this._capacity < t && this._resizeTo(this._capacity << 1);
					}, i.prototype._resizeTo = function (t) {
						var e = this._capacity;this._capacity = t;var n = this._front,
						    i = this._length,
						    o = n + i & e - 1;r(this, 0, this, e, o);
					}, e.exports = i;
				}, {}], 27: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i) {
						function o(t, o) {
							var c = r(t);if (c instanceof e) return a(c);if (t = s.asArray(t), null === t) return i("expecting an array or an iterable object but got " + s.classString(t));var l = new e(n);void 0 !== o && l._propagateFrom(o, 3);for (var u = l._fulfill, p = l._reject, h = 0, f = t.length; f > h; ++h) {
								var _ = t[h];(void 0 !== _ || h in t) && e.cast(_)._then(u, p, void 0, l, null);
							}return l;
						}var s = t("./util"),
						    a = function a(t) {
							return t.then(function (e) {
								return o(e, t);
							});
						};e.race = function (t) {
							return o(t, void 0);
						}, e.prototype.race = function () {
							return o(this, void 0);
						};
					};
				}, { "./util": 36 }], 28: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o, s) {
						function a(t, n, r, i) {
							this.constructor$(t);var s = h();this._fn = null === s ? n : f.domainBind(s, n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, i === o ? this._eachValues = Array(this._length) : 0 === i ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
						}function c(t, e) {
							this.isFulfilled() ? e._resolve(t) : e._reject(t);
						}function l(t, e, n, i) {
							if ("function" != typeof e) return r("expecting a function but got " + f.classString(e));var o = new a(t, e, n, i);return o.promise();
						}function u(t) {
							this.accum = t, this.array._gotAccum(t);var n = i(this.value, this.array._promise);return n instanceof e ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0)) : p.call(this, n);
						}function p(t) {
							var n = this.array,
							    r = n._promise,
							    i = _(n._fn);r._pushContext();var o;o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length), o instanceof e && (n._currentCancellable = o);var a = r._popContext();return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o;
						}var h = e._getDomain,
						    f = t("./util"),
						    _ = f.tryCatch;f.inherits(a, n), a.prototype._gotAccum = function (t) {
							void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t);
						}, a.prototype._eachComplete = function (t) {
							return null !== this._eachValues && this._eachValues.push(t), this._eachValues;
						}, a.prototype._init = function () {}, a.prototype._resolveEmptyArray = function () {
							this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
						}, a.prototype.shouldCopyValues = function () {
							return !1;
						}, a.prototype._resolve = function (t) {
							this._promise._resolveCallback(t), this._values = null;
						}, a.prototype._resultCancelled = function (t) {
							return t === this._initialValue ? this._cancel() : void (this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel()));
						}, a.prototype._iterate = function (t) {
							this._values = t;var n,
							    r,
							    i = t.length;if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected()) for (; i > r; ++r) {
								var o = { accum: null, value: t[r], index: r, length: i, array: this };n = n._then(u, void 0, void 0, o, void 0);
							}void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(c, c, void 0, n, this);
						}, e.prototype.reduce = function (t, e) {
							return l(this, t, e, null);
						}, e.reduce = function (t, e, n, r) {
							return l(t, e, n, r);
						};
					};
				}, { "./util": 36 }], 29: [function (t, e, n) {
					"use strict";
					var r,
					    i = t("./util"),
					    o = function o() {
						throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
					},
					    s = i.getNativePromise();if (i.isNode && "undefined" == typeof MutationObserver) {
						var a = global.setImmediate,
						    c = process.nextTick;r = i.isRecentNode ? function (t) {
							a.call(global, t);
						} : function (t) {
							c.call(process, t);
						};
					} else if ("function" == typeof s && "function" == typeof s.resolve) {
						var l = s.resolve();r = function r(t) {
							l.then(t);
						};
					} else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function (t) {
						setImmediate(t);
					} : "undefined" != typeof setTimeout ? function (t) {
						setTimeout(t, 0);
					} : o : function () {
						var t = document.createElement("div"),
						    e = { attributes: !0 },
						    n = !1,
						    r = document.createElement("div"),
						    i = new MutationObserver(function () {
							t.classList.toggle("foo"), n = !1;
						});i.observe(r, e);var o = function o() {
							n || (n = !0, r.classList.toggle("foo"));
						};return function (n) {
							var r = new MutationObserver(function () {
								r.disconnect(), n();
							});r.observe(t, e), o();
						};
					}();e.exports = r;
				}, { "./util": 36 }], 30: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function i(t) {
							this.constructor$(t);
						}var o = e.PromiseInspection,
						    s = t("./util");s.inherits(i, n), i.prototype._promiseResolved = function (t, e) {
							this._values[t] = e;var n = ++this._totalResolved;return n >= this._length ? (this._resolve(this._values), !0) : !1;
						}, i.prototype._promiseFulfilled = function (t, e) {
							var n = new o();return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n);
						}, i.prototype._promiseRejected = function (t, e) {
							var n = new o();return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n);
						}, e.settle = function (t) {
							return r.deprecated(".settle()", ".reflect()"), new i(t).promise();
						}, e.prototype.settle = function () {
							return e.settle(this);
						};
					};
				}, { "./util": 36 }], 31: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function i(t) {
							this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
						}function o(t, e) {
							if ((0 | e) !== e || 0 > e) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n = new i(t),
							    o = n.promise();return n.setHowMany(e), n.init(), o;
						}var s = t("./util"),
						    a = t("./errors").RangeError,
						    c = t("./errors").AggregateError,
						    l = s.isArray,
						    u = {};s.inherits(i, n), i.prototype._init = function () {
							if (this._initialized) {
								if (0 === this._howMany) return void this._resolve([]);this._init$(void 0, -5);var t = l(this._values);!this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
							}
						}, i.prototype.init = function () {
							this._initialized = !0, this._init();
						}, i.prototype.setUnwrap = function () {
							this._unwrap = !0;
						}, i.prototype.howMany = function () {
							return this._howMany;
						}, i.prototype.setHowMany = function (t) {
							this._howMany = t;
						}, i.prototype._promiseFulfilled = function (t) {
							return this._addFulfilled(t), this._fulfilled() === this.howMany() ? (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0) : !1;
						}, i.prototype._promiseRejected = function (t) {
							return this._addRejected(t), this._checkOutcome();
						}, i.prototype._promiseCancelled = function () {
							return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(u), this._checkOutcome());
						}, i.prototype._checkOutcome = function () {
							if (this.howMany() > this._canPossiblyFulfill()) {
								for (var t = new c(), e = this.length(); e < this._values.length; ++e) {
									this._values[e] !== u && t.push(this._values[e]);
								}return t.length > 0 ? this._reject(t) : this._cancel(), !0;
							}return !1;
						}, i.prototype._fulfilled = function () {
							return this._totalResolved;
						}, i.prototype._rejected = function () {
							return this._values.length - this.length();
						}, i.prototype._addRejected = function (t) {
							this._values.push(t);
						}, i.prototype._addFulfilled = function (t) {
							this._values[this._totalResolved++] = t;
						}, i.prototype._canPossiblyFulfill = function () {
							return this.length() - this._rejected();
						}, i.prototype._getRangeError = function (t) {
							var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";return new a(e);
						}, i.prototype._resolveEmptyArray = function () {
							this._reject(this._getRangeError(0));
						}, e.some = function (t, e) {
							return o(t, e);
						}, e.prototype.some = function (t) {
							return o(this, t);
						}, e._SomePromiseArray = i;
					};
				}, { "./errors": 12, "./util": 36 }], 32: [function (t, e, n) {
					"use strict";
					e.exports = function (t) {
						function e(t) {
							void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
						}e.prototype._settledValue = function () {
							return this._settledValueField;
						};var n = e.prototype.value = function () {
							if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
						},
						    r = e.prototype.error = e.prototype.reason = function () {
							if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
						},
						    i = e.prototype.isFulfilled = function () {
							return 0 !== (33554432 & this._bitField);
						},
						    o = e.prototype.isRejected = function () {
							return 0 !== (16777216 & this._bitField);
						},
						    s = e.prototype.isPending = function () {
							return 0 === (50397184 & this._bitField);
						},
						    a = e.prototype.isResolved = function () {
							return 0 !== (50331648 & this._bitField);
						};e.prototype.isCancelled = function () {
							return 0 !== (8454144 & this._bitField);
						}, t.prototype.__isCancelled = function () {
							return 65536 === (65536 & this._bitField);
						}, t.prototype._isCancelled = function () {
							return this._target().__isCancelled();
						}, t.prototype.isCancelled = function () {
							return 0 !== (8454144 & this._target()._bitField);
						}, t.prototype.isPending = function () {
							return s.call(this._target());
						}, t.prototype.isRejected = function () {
							return o.call(this._target());
						}, t.prototype.isFulfilled = function () {
							return i.call(this._target());
						}, t.prototype.isResolved = function () {
							return a.call(this._target());
						}, t.prototype.value = function () {
							return n.call(this._target());
						}, t.prototype.reason = function () {
							var t = this._target();return t._unsetRejectionIsUnhandled(), r.call(t);
						}, t.prototype._value = function () {
							return this._settledValue();
						}, t.prototype._reason = function () {
							return this._unsetRejectionIsUnhandled(), this._settledValue();
						}, t.PromiseInspection = e;
					};
				}, {}], 33: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n) {
						function r(t, r) {
							if (u(t)) {
								if (t instanceof e) return t;var i = o(t);if (i === l) {
									r && r._pushContext();var c = e.reject(i.e);return r && r._popContext(), c;
								}if ("function" == typeof i) {
									if (s(t)) {
										var c = new e(n);return t._then(c._fulfill, c._reject, void 0, c, null), c;
									}return a(t, i, r);
								}
							}return t;
						}function i(t) {
							return t.then;
						}function o(t) {
							try {
								return i(t);
							} catch (e) {
								return l.e = e, l;
							}
						}function s(t) {
							try {
								return p.call(t, "_promise0");
							} catch (e) {
								return !1;
							}
						}function a(t, r, i) {
							function o(t) {
								a && (a._resolveCallback(t), a = null);
							}function s(t) {
								a && (a._rejectCallback(t, p, !0), a = null);
							}var a = new e(n),
							    u = a;i && i._pushContext(), a._captureStackTrace(), i && i._popContext();var p = !0,
							    h = c.tryCatch(r).call(t, o, s);return p = !1, a && h === l && (a._rejectCallback(h.e, !0, !0), a = null), u;
						}var c = t("./util"),
						    l = c.errorObj,
						    u = c.isObject,
						    p = {}.hasOwnProperty;return r;
					};
				}, { "./util": 36 }], 34: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r) {
						function i(t) {
							this.handle = t;
						}function o(t) {
							return clearTimeout(this.handle), t;
						}function s(t) {
							throw clearTimeout(this.handle), t;
						}var a = t("./util"),
						    c = e.TimeoutError;i.prototype._resultCancelled = function () {
							clearTimeout(this.handle);
						};var l = function l(t) {
							return u(+this).thenReturn(t);
						},
						    u = e.delay = function (t, o) {
							var s, a;return void 0 !== o ? (s = e.resolve(o)._then(l, null, null, t, void 0), r.cancellation() && o instanceof e && s._setOnCancel(o)) : (s = new e(n), a = setTimeout(function () {
								s._fulfill();
							}, +t), r.cancellation() && s._setOnCancel(new i(a)), s._captureStackTrace()), s._setAsyncGuaranteed(), s;
						};e.prototype.delay = function (t) {
							return u(t, this);
						};var p = function p(t, e, n) {
							var r;r = "string" != typeof e ? e instanceof Error ? e : new c("operation timed out") : new c(e), a.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._reject(r), null != n && n.cancel();
						};e.prototype.timeout = function (t, e) {
							t = +t;var n,
							    a,
							    c = new i(setTimeout(function () {
								n.isPending() && p(n, e, a);
							}, t));return r.cancellation() ? (a = this.then(), n = a._then(o, s, void 0, c, void 0), n._setOnCancel(c)) : n = this._then(o, s, void 0, c, void 0), n;
						};
					};
				}, { "./util": 36 }], 35: [function (t, e, n) {
					"use strict";
					e.exports = function (e, n, r, i, o, s) {
						function a(t) {
							setTimeout(function () {
								throw t;
							}, 0);
						}function c(t) {
							var e = r(t);return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e;
						}function l(t, n) {
							function i() {
								if (s >= l) return u._fulfill();var o = c(t[s++]);if (o instanceof e && o._isDisposable()) {
									try {
										o = r(o._getDisposer().tryDispose(n), t.promise);
									} catch (p) {
										return a(p);
									}if (o instanceof e) return o._then(i, a, null, null, null);
								}i();
							}var s = 0,
							    l = t.length,
							    u = new e(o);return i(), u;
						}function u(t, e, n) {
							this._data = t, this._promise = e, this._context = n;
						}function p(t, e, n) {
							this.constructor$(t, e, n);
						}function h(t) {
							return u.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t;
						}function f(t) {
							this.length = t, this.promise = null, this[t - 1] = null;
						}var _ = t("./util"),
						    d = t("./errors").TypeError,
						    v = t("./util").inherits,
						    y = _.errorObj,
						    m = _.tryCatch,
						    g = {};u.prototype.data = function () {
							return this._data;
						}, u.prototype.promise = function () {
							return this._promise;
						}, u.prototype.resource = function () {
							return this.promise().isFulfilled() ? this.promise().value() : g;
						}, u.prototype.tryDispose = function (t) {
							var e = this.resource(),
							    n = this._context;void 0 !== n && n._pushContext();var r = e !== g ? this.doDispose(e, t) : null;return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r;
						}, u.isDisposer = function (t) {
							return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose;
						}, v(p, u), p.prototype.doDispose = function (t, e) {
							var n = this.data();return n.call(t, t, e);
						}, f.prototype._resultCancelled = function () {
							for (var t = this.length, n = 0; t > n; ++n) {
								var r = this[n];r instanceof e && r.cancel();
							}
						}, e.using = function () {
							var t = arguments.length;if (2 > t) return n("you must pass at least 2 arguments to Promise.using");var i = arguments[t - 1];if ("function" != typeof i) return n("expecting a function but got " + _.classString(i));var o,
							    a = !0;2 === t && Array.isArray(arguments[0]) ? (o = arguments[0], t = o.length, a = !1) : (o = arguments, t--);for (var c = new f(t), p = 0; t > p; ++p) {
								var d = o[p];if (u.isDisposer(d)) {
									var v = d;d = d.promise(), d._setDisposable(v);
								} else {
									var g = r(d);g instanceof e && (d = g._then(h, null, null, { resources: c, index: p }, void 0));
								}c[p] = d;
							}for (var b = new Array(c.length), p = 0; p < b.length; ++p) {
								b[p] = e.resolve(c[p]).reflect();
							}var w = e.all(b).then(function (t) {
								for (var e = 0; e < t.length; ++e) {
									var n = t[e];if (n.isRejected()) return y.e = n.error(), y;if (!n.isFulfilled()) return void w.cancel();t[e] = n.value();
								}C._pushContext(), i = m(i);var r = a ? i.apply(void 0, t) : i(t),
								    o = C._popContext();return s.checkForgottenReturns(r, o, "Promise.using", C), r;
							}),
							    C = w.lastly(function () {
								var t = new e.PromiseInspection(w);return l(c, t);
							});return c.promise = C, C._setOnCancel(c), C;
						}, e.prototype._setDisposable = function (t) {
							this._bitField = 131072 | this._bitField, this._disposer = t;
						}, e.prototype._isDisposable = function () {
							return (131072 & this._bitField) > 0;
						}, e.prototype._getDisposer = function () {
							return this._disposer;
						}, e.prototype._unsetDisposable = function () {
							this._bitField = -131073 & this._bitField, this._disposer = void 0;
						}, e.prototype.disposer = function (t) {
							if ("function" == typeof t) return new p(t, this, i());throw new d();
						};
					};
				}, { "./errors": 12, "./util": 36 }], 36: [function (t, e, n) {
					"use strict";
					function r() {
						try {
							var t = P;return P = null, t.apply(this, arguments);
						} catch (e) {
							return T.e = e, T;
						}
					}function i(t) {
						return P = t, r;
					}function o(t) {
						return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t;
					}function s(t) {
						return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
					}function a(t) {
						return o(t) ? new Error(v(t)) : t;
					}function c(t, e) {
						var n,
						    r = t.length,
						    i = new Array(r + 1);for (n = 0; r > n; ++n) {
							i[n] = t[n];
						}return i[n] = e, i;
					}function l(t, e, n) {
						if (!F.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;var r = Object.getOwnPropertyDescriptor(t, e);return null != r ? null == r.get && null == r.set ? r.value : n : void 0;
					}function u(t, e, n) {
						if (o(t)) return t;var r = { value: n, configurable: !0, enumerable: !1, writable: !0 };return F.defineProperty(t, e, r), t;
					}function p(t) {
						throw t;
					}function h(t) {
						try {
							if ("function" == typeof t) {
								var e = F.names(t.prototype),
								    n = F.isES5 && e.length > 1,
								    r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
								    i = A.test(t + "") && F.names(t).length > 0;if (n || r || i) return !0;
							}return !1;
						} catch (o) {
							return !1;
						}
					}function f(t) {
						function e() {}e.prototype = t;for (var n = 8; n--;) {
							new e();
						}return t;
					}function _(t) {
						return D.test(t);
					}function d(t, e, n) {
						for (var r = new Array(t), i = 0; t > i; ++i) {
							r[i] = e + i + n;
						}return r;
					}function v(t) {
						try {
							return t + "";
						} catch (e) {
							return "[no string representation]";
						}
					}function y(t) {
						return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "string" == typeof t.message && "string" == typeof t.name;
					}function m(t) {
						try {
							u(t, "isOperational", !0);
						} catch (e) {}
					}function g(t) {
						return null == t ? !1 : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0;
					}function b(t) {
						return y(t) && F.propertyIsWritable(t, "stack");
					}function w(t) {
						return {}.toString.call(t);
					}function C(t, e, n) {
						for (var r = F.names(t), i = 0; i < r.length; ++i) {
							var o = r[i];if (n(o)) try {
								F.defineProperty(e, o, F.getDescriptor(t, o));
							} catch (s) {}
						}
					}function j(t, e) {
						return H ? process.env[t] : e;
					}function k() {
						if ("function" == typeof Promise) try {
							var t = new Promise(function () {});if ("[object Promise]" === {}.toString.call(t)) return Promise;
						} catch (e) {}
					}function E(t, e) {
						return t.bind(e);
					}var F = t("./es5"),
					    x = "undefined" == typeof navigator,
					    T = { e: {} },
					    P,
					    R = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null,
					    S = function S(t, e) {
						function n() {
							this.constructor = t, this.constructor$ = e;for (var n in e.prototype) {
								r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
							}
						}var r = {}.hasOwnProperty;return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
					},
					    O = function () {
						var t = [Array.prototype, Object.prototype, Function.prototype],
						    e = function e(_e2) {
							for (var n = 0; n < t.length; ++n) {
								if (t[n] === _e2) return !0;
							}return !1;
						};if (F.isES5) {
							var n = Object.getOwnPropertyNames;return function (t) {
								for (var r = [], i = Object.create(null); null != t && !e(t);) {
									var o;try {
										o = n(t);
									} catch (s) {
										return r;
									}for (var a = 0; a < o.length; ++a) {
										var c = o[a];if (!i[c]) {
											i[c] = !0;var l = Object.getOwnPropertyDescriptor(t, c);null != l && null == l.get && null == l.set && r.push(c);
										}
									}t = F.getPrototypeOf(t);
								}return r;
							};
						}var r = {}.hasOwnProperty;return function (n) {
							if (e(n)) return [];var i = [];t: for (var o in n) {
								if (r.call(n, o)) i.push(o);else {
									for (var s = 0; s < t.length; ++s) {
										if (r.call(t[s], o)) continue t;
									}i.push(o);
								}
							}return i;
						};
					}(),
					    A = /this\s*\.\s*\S+\s*=/,
					    D = /^[a-z$_][a-z$_0-9]*$/i,
					    V = function () {
						return "stack" in new Error() ? function (t) {
							return b(t) ? t : new Error(v(t));
						} : function (t) {
							if (b(t)) return t;try {
								throw new Error(v(t));
							} catch (e) {
								return e;
							}
						};
					}(),
					    I = function I(t) {
						return F.isArray(t) ? t : null;
					};if ("undefined" != typeof Symbol && Symbol.iterator) {
						var L = "function" == typeof Array.from ? function (t) {
							return Array.from(t);
						} : function (t) {
							for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;) {
								n.push(e.value);
							}return n;
						};I = function I(t) {
							return F.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? L(t) : null;
						};
					}var H = "undefined" != typeof process && "[object process]" === w(process).toLowerCase(),
					    N = { isClass: h, isIdentifier: _, inheritedDataKeys: O, getDataPropertyOrDefault: l, thrower: p, isArray: F.isArray, asArray: I, notEnumerableProp: u, isPrimitive: o, isObject: s, isError: y, canEvaluate: x, errorObj: T, tryCatch: i, inherits: S, withAppended: c, maybeWrapAsError: a, toFastProperties: f, filledRange: d, toString: v, canAttachTrace: b, ensureErrorObject: V, originatesFromRejection: g, markAsOriginatingFromRejection: m, classString: w, copyDescriptors: C, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: H, env: j, global: R, getNativePromise: k, domainBind: E };N.isRecentNode = N.isNode && function () {
						var t = process.versions.node.split(".").map(Number);return 0 === t[0] && t[1] > 10 || t[0] > 0;
					}(), N.isNode && N.toFastProperties(process);try {
						throw new Error();
					} catch (B) {
						N.lastLineError = B;
					}e.exports = N;
				}, { "./es5": 13 }] }, {}, [4])(4);
		}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
	}
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(0), __webpack_require__(26).setImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(4),
    getRawTag = __webpack_require__(15),
    objectToString = __webpack_require__(16);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(14);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toNumber = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toFinite = __webpack_require__(22);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(19),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(25);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = self && self.setImmediate || global && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = self && self.clearImmediate || global && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function serializeParam(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function deserializeParam(value) {
    return decodeURIComponent(value).replace(/\+/g, ' ');
  };

  var polyfillURLSearchParams = function polyfillURLSearchParams() {

    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', { writable: true, value: {} });

      if (typeof searchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(value.toString());
      } else {
        this._entries[name] = [value.toString()];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [value.toString()];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };

    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function value(searchString) {
        this._entries = {};
        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });

    global.URLSearchParams = URLSearchParams;
  };

  if (!('URLSearchParams' in global) || new URLSearchParams('?a=1').toString() !== 'a=1') {
    polyfillURLSearchParams();
  }

  if (typeof URLSearchParams.prototype.sort !== 'function') {
    URLSearchParams.prototype.sort = function () {
      var _this = this;
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  // HTMLAnchorElement
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;

    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url);

      // Only create another document if the base is different from current location.
      var doc = document,
          baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });

      // create a linked searchParams which reflect its changes on URL
      var searchParams = new URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });

      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });

      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });

    Object.defineProperty(proto, 'search', {
      get: function get() {
        return this._anchorElement['search'];
      },
      set: function set(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function get() {
          var _this = this;
          return function () {
            return _this.href;
          };
        }
      },

      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },

      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function get() {
          // get expected port from protocol
          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';

          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },

      'username': { // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _once = __webpack_require__(6);

var _once2 = _interopRequireDefault(_once);

var _TicketmasterCalendarWidget = __webpack_require__(9);

var _TicketmasterCalendarWidget2 = _interopRequireDefault(_TicketmasterCalendarWidget);

var _TabsControls = __webpack_require__(8);

var _TabsControls2 = _interopRequireDefault(_TabsControls);

var _WeekScheduler = __webpack_require__(10);

var _WeekScheduler2 = _interopRequireDefault(_WeekScheduler);

var _MonthScheduler = __webpack_require__(7);

var _MonthScheduler2 = _interopRequireDefault(_MonthScheduler);

var _YearScheduler = __webpack_require__(11);

var _YearScheduler2 = _interopRequireDefault(_YearScheduler);

var _widgetsAnalytics = __webpack_require__(1);

var _widgetsAnalytics2 = _interopRequireDefault(_widgetsAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_widgetsAnalytics2.default.initialize(_widgetsAnalytics.EVENT_CATEGORY.CALENDAR_WIDGET);

window.widgetsCalendar = [];
window.weekSchedulers = [];
window.monthSchedulers = [];
window.yearSchedulers = [];

(function () {
    var widgetContainers = document.querySelectorAll("div[w-type='calendar']");
    for (var i = 0; i < widgetContainers.length; ++i) {
        var calendarWidget = new _TicketmasterCalendarWidget2.default(widgetContainers[i]);
        var weekScheduler = new _WeekScheduler2.default(widgetContainers[i].querySelector('.weekSсheduler'), calendarWidget);
        var monthScheduler = new _MonthScheduler2.default(widgetContainers[i].querySelector('.monthScheduler'), calendarWidget);
        var yearScheduler = new _YearScheduler2.default(widgetContainers[i].querySelector('.yearScheduler'));

        var tabControl = new _TabsControls2.default(widgetContainers[i]);
        tabControl.addEventListenerForTabIndex('click', 1, (0, _once2.default)(weekScheduler.update.bind(weekScheduler)));
        tabControl.addEventListenerForTabIndex('click', 2, (0, _once2.default)(monthScheduler.update.bind(monthScheduler)));
        tabControl.addEventListenerForTabIndex('click', 3, (0, _once2.default)(yearScheduler.update.bind(yearScheduler)));

        window.widgetsCalendar.push(calendarWidget);
        window.weekSchedulers.push(weekScheduler);
        window.monthSchedulers.push(monthScheduler);
        window.yearSchedulers.push(yearScheduler);
    }
})();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var service = {
  embedUniversePlugin: embedUniversePlugin
};
exports.default = service;


function embedUniversePlugin() {
  var id = 'id_universe_widget';
  if (!document.getElementById(id)) {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://www.universe.com/embed.js');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('id', id);
    (document.head || document.getElementsByTagName('head')[0]).appendChild(script);
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=main-widget.js.map