module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3MO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrerenderDataContext; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var PrerenderDataContext = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);


/***/ }),

/***/ "/CiD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReactGAImplementation = void 0;
var _ga = _interopRequireWildcard(__webpack_require__("s0TJ"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var ReactGAImplementation = _ga.GA4;
exports.ReactGAImplementation = ReactGAImplementation;
var _default = _ga["default"];
exports["default"] = _default;

/***/ }),

/***/ "0uLP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = format;
var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return string.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== "-" || title.charAt(index - 1) === "-") && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }
    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === "string" && s.indexOf("@") !== -1;
}
var redacted = "REDACTED (Potential Email Address)";
function redactEmail(string) {
  if (mightBeEmail(string)) {
    console.warn("This arg looks like an email address, redacting.");
    return redacted;
  }
  return string;
}
function format() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var titleCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var redactingEmail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _str = s || "";
  if (titleCase) {
    _str = toTitleCase(s);
  }
  if (redactingEmail) {
    _str = redactEmail(_str);
  }
  return _str;
}

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "MFe8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* unused harmony export PreRenderDataSource */
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/3MO");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qQTh");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yjbg");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var Consumer = _context__WEBPACK_IMPORTED_MODULE_1__[/* PrerenderDataContext */ "a"].Consumer;
var PreRenderDataSource = /*#__PURE__*/function (_Component) {
  _inherits(PreRenderDataSource, _Component);
  var _super = _createSuper(PreRenderDataSource);
  function PreRenderDataSource() {
    var _this;
    _classCallCheck(this, PreRenderDataSource);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      value: null,
      isLoading: false,
      error: false
    });
    _defineProperty(_assertThisInitialized(_this), "fetchPrerenderData", /*#__PURE__*/_asyncToGenerator(function* () {
      _this.setState({
        value: null,
        isLoading: true,
        error: false
      });
      try {
        var response = yield fetch("".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* normalizeUrl */ "c"])(_this.props.url)).concat(_constants__WEBPACK_IMPORTED_MODULE_3__["PRERENDER_DATA_FILE_NAME"]));
        var json = yield response.json();
        _this.setState({
          value: json,
          isLoading: false,
          error: false
        });
      } catch (e) {
        _this.setState({
          value: null,
          isLoading: false,
          error: e
        });
      }
    }));
    return _this;
  }
  _createClass(PreRenderDataSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* checkProps */ "a"])(this.props);
    }
  }, {
    key: "render",
    value: function render(props, _ref2) {
      var _this2 = this;
      var value = _ref2.value,
        isLoading = _ref2.isLoading,
        error = _ref2.error;
      if (!('doAutomaticFetch' in props)) {
        props.doAutomaticFetch = true;
      }
      return h(Consumer, null, function (contextValue) {
        var obtainedContextValue;
        // If the data is in script tag, it will be accesible from the following chaining
        if (contextValue.CLI_DATA && contextValue.CLI_DATA.preRenderData) {
          obtainedContextValue = contextValue.CLI_DATA.preRenderData;
        }
        var preRenderDataToBePassed = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getPrerenderdata */ "b"])(value || obtainedContextValue, props);
        // if the data is not in script tag, we'll fetch it from the server
        if (props.doAutomaticFetch && preRenderDataToBePassed === null && !isLoading && !error) {
          _this2.fetchPrerenderData();
        }
        return props.render({
          value: preRenderDataToBePassed,
          isLoading: isLoading,
          error: error
        });
      });
    }
  }]);
  return PreRenderDataSource;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "qQTh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPrerenderdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkProps; });
function normalizeUrl(url) {
  return url.endsWith('/') ? url : url + '/';
}
function getPrerenderdata(value, props) {
  if (value && value.url && normalizeUrl(props.url) === normalizeUrl(value.url)) {
    return value;
  }
  return null;
}
function checkProps(props) {
  if (!('url' in props)) {
    throw new Error('The prerender-data provider expects current URL in props. This is required to give the pre-render data to the correct instance only.');
  }
}


/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// CONCATENATED MODULE: ./components/header/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"header":"header__OVZyn","header_fixed":"header_fixed__e+u-O","header_hidden":"header_hidden__HZ-RF","title":"title__I4umU","subtitle":"subtitle__0gF3H"});
// CONCATENATED MODULE: ./components/header/index.tsx


var header_Header = function Header(_ref) {
  var ariaHidden = _ref.ariaHidden;
  return Object(external_preact_["h"])("header", {
    "aria-hidden": !!ariaHidden,
    class: "".concat(style.header, " ").concat(ariaHidden ? style.header_hidden : style.header_fixed)
  }, Object(external_preact_["h"])("h1", {
    class: style.title
  }, "Akifumi Akazawa(Tomiyama)"), Object(external_preact_["h"])("p", {
    class: style.subtitle
  }, "Software Engineer skilled in Web Application and Data Engineering."), Object(external_preact_["h"])("nav", null, Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-solid fa-file",
    href: "/assets/akifumi_akazawa_resume_en.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Resume(en)"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-solid fa-file",
    href: "/assets/akifumi_akazawa_resume_ja.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Resume(ja)"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-brands fa-github",
    href: "https://github.com/atomiyama"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "GitHub"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-brands fa-twitter",
    href: "https://twitter.com/atomiyama1216"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Twitter"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-brands fa-linkedin",
    href: "https://linkedin.com/in/atomiyama1216"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "LinkedIn"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-brands fa-facebook",
    href: "https://www.facebook.com/atomiyama1216"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Facebook"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
    class: "fa-regular fa-envelope",
    href: "mailto:tomisuker16@gmail.com"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Email"))))), Object(external_preact_["h"])("hr", null));
};
// EXTERNAL MODULE: ../node_modules/@preact/prerender-data-provider/src/context.js
var context = __webpack_require__("/3MO");

// EXTERNAL MODULE: ../node_modules/@preact/prerender-data-provider/src/render-prop.js
var render_prop = __webpack_require__("MFe8");

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  f = [],
  hooks_module_c = [],
  hooks_module_e = external_preact_["options"].__b,
  hooks_module_a = external_preact_["options"].__r,
  v = external_preact_["options"].diffed,
  hooks_module_l = external_preact_["options"].__c,
  m = external_preact_["options"].unmount;
function d(t, u) {
  external_preact_["options"].__h && external_preact_["options"].__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
  var i = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: hooks_module_c
  }), i.__[t];
}
function h(n) {
  return hooks_module_o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(hooks_module_t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = hooks_module_r, !hooks_module_r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    hooks_module_r.u = !0;
    var c = hooks_module_r.shouldComponentUpdate,
      e = hooks_module_r.componentWillUpdate;
    hooks_module_r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, hooks_module_r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(hooks_module_t++, 3);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(hooks_module_t++, 4);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__h.push(o));
}
function hooks_module_(n) {
  return hooks_module_o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function hooks_module_A(n, t, r) {
  hooks_module_o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(hooks_module_t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return hooks_module_o = 8, F(function () {
    return n;
  }, t);
}
function hooks_module_q(n) {
  var u = hooks_module_r.context[n.__c],
    i = d(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function x(t, r) {
  external_preact_["options"].useDebugValue && external_preact_["options"].useDebugValue(r ? r(t) : t);
}
function hooks_module_P(n) {
  var u = d(hooks_module_t++, 10),
    i = h();
  return u.__ = n, hooks_module_r.componentDidCatch || (hooks_module_r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(hooks_module_t++, 11);
  if (!n.__) {
    for (var u = hooks_module_r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], external_preact_["options"].__e(r, t.__v);
  }
}
external_preact_["options"].__b = function (n) {
  hooks_module_r = null, hooks_module_e && hooks_module_e(n);
}, external_preact_["options"].__r = function (n) {
  hooks_module_a && hooks_module_a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = hooks_module_c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), hooks_module_u = hooks_module_r;
}, external_preact_["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && hooks_module_i === external_preact_["options"].requestAnimationFrame || ((hooks_module_i = external_preact_["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== hooks_module_c && (n.__ = n.__V), n.i = void 0, n.__V = hooks_module_c;
  })), hooks_module_u = hooks_module_r = null;
}, external_preact_["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], external_preact_["options"].__e(u, t.__v);
    }
  }), hooks_module_l && hooks_module_l(t, r);
}, external_preact_["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && external_preact_["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = hooks_module_r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
}
function w(n) {
  var t = hooks_module_r;
  n.__c = n.__(), hooks_module_r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// EXTERNAL MODULE: ../node_modules/@preact/prerender-data-provider/src/utils.js
var utils = __webpack_require__("qQTh");

// EXTERNAL MODULE: ../node_modules/@preact/prerender-data-provider/src/constants.js
var constants = __webpack_require__("yjbg");

// CONCATENATED MODULE: ../node_modules/@preact/prerender-data-provider/src/hook.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function usePrerenderData(props) {
  var doAutomaticFetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var value;
  var _useState = h({
      value: value,
      isLoading: false,
      error: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var contextValue = hooks_module_q(context["a" /* PrerenderDataContext */]);
  Object(utils["a" /* checkProps */])(props);
  function fetchPreRenderData() {
    return _fetchPreRenderData.apply(this, arguments);
  }
  function _fetchPreRenderData() {
    _fetchPreRenderData = _asyncToGenerator(function* () {
      setState({
        value: null,
        isLoading: true,
        error: false
      });
      try {
        var response = yield fetch("".concat(Object(utils["c" /* normalizeUrl */])(props.url)).concat(constants["PRERENDER_DATA_FILE_NAME"]));
        var json = yield response.json();
        setState({
          value: json,
          isLoading: false,
          error: false
        });
      } catch (e) {
        setState({
          value: null,
          isLoading: false,
          error: e
        });
      }
    });
    return _fetchPreRenderData.apply(this, arguments);
  }
  if (contextValue.CLI_DATA && contextValue.CLI_DATA.preRenderData) {
    value = contextValue.CLI_DATA.preRenderData;
  }
  var data = Object(utils["b" /* getPrerenderdata */])(state.value || value, props);
  if (doAutomaticFetch && !data && !state.isLoading && !state.error) {
    fetchPreRenderData();
    return [data, true, state.error];
  }
  return [data, state.isLoading, state.error];
}

// CONCATENATED MODULE: ../node_modules/@preact/prerender-data-provider/src/index.js

var Provider = context["a" /* PrerenderDataContext */].Provider;



// CONCATENATED MODULE: ./components/terminal/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var terminal_style = ({"terminal":"terminal__Ns8FN","welcome":"welcome__8TTjf","activeprompt":"activeprompt__-RKgw","prompt":"prompt__wX4A9","command":"command__JBFdT"});
// CONCATENATED MODULE: ./components/terminal/cmd/useCmd.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || useCmd_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useCmd_arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function useCmd_slicedToArray(arr, i) { return useCmd_arrayWithHoles(arr) || useCmd_iterableToArrayLimit(arr, i) || useCmd_unsupportedIterableToArray(arr, i) || useCmd_nonIterableRest(); }
function useCmd_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useCmd_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useCmd_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useCmd_arrayLikeToArray(o, minLen); }
function useCmd_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useCmd_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useCmd_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCmd_useCmd = function useCmd() {
  // To scroll to bottom of terminal when new command is entered
  var formRef = hooks_module_(null);
  p(function () {
    return formRef.current.scrollIntoView({
      behavior: "smooth"
    });
  });

  // To restore history when user presses up/down arrow keys
  var _useState = h([]),
    _useState2 = useCmd_slicedToArray(_useState, 2),
    results = _useState2[0],
    setResults = _useState2[1];
  var _useState3 = h(0),
    _useState4 = useCmd_slicedToArray(_useState3, 2),
    historyIndex = _useState4[0],
    setHistoryIndex = _useState4[1];
  var inputRef = hooks_module_(null);
  p(function () {
    return inputRef.current.focus();
  }, []);
  var inputValueMemo = hooks_module_("");
  p(function () {
    var handleKeyDown = function handleKeyDown(e) {
      // formにフォーカスがない状態でEnterが押されたらformのinputにフォーカスする
      if (e.key === "Enter" && document.activeElement !== inputRef.current) {
        var _inputRef$current;
        e.preventDefault();
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      }

      // historyIndexが最大値のときその時点でのinputの値をinputValueMemoに保存する
      if (historyIndex === results.length) {
        var _inputRef$current2;
        inputValueMemo.current = ((_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.value) || "";
      }
      // 上下矢印キーで履歴を遡れるようにする
      if (e.key === "ArrowUp") {
        e.preventDefault();
        var prev = results[historyIndex - 1];
        if (prev && inputRef.current) {
          inputRef.current.value = prev.rawInput;
          setHistoryIndex(function (current) {
            return current - 1;
          });
        }
      }
      // 下矢印キーで履歴を進められるようにする
      // ただし、最新の履歴まで進んだ場合は、もとの入力を復元する
      if (e.key === "ArrowDown") {
        e.preventDefault();
        var next = results[historyIndex + 1];
        if (next && inputRef.current) {
          inputRef.current.value = next.rawInput;
          setHistoryIndex(function (current) {
            return current + 1;
          });
        } else {
          inputRef.current.value = inputValueMemo.current;
          setHistoryIndex(results.length);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      return document.removeEventListener("keydown", handleKeyDown);
    };
  }, [results, historyIndex]);
  var handleExecCmd = function handleExecCmd(input) {
    var command = input.split(" ")[0];
    var args = input.split(" ").slice(1);
    if (command === "clear") {
      return setResults(function (results) {
        return results.map(function (result) {
          return _objectSpread(_objectSpread({}, result), {}, {
            hidden: true
          });
        });
      });
    }
    var result = {
      rawInput: input,
      command: command,
      args: args
    };
    setResults(function (results) {
      return [].concat(_toConsumableArray(results), [result]);
    });
    setHistoryIndex(function (current) {
      return current + 1;
    });
  };
  return {
    formRef: formRef,
    inputRef: inputRef,
    handleExecCmd: handleExecCmd,
    commandProps: results
  };
};
// CONCATENATED MODULE: ./components/terminal/cmd/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var cmd_style = ({"output":"output__Y6snD","error":"error__HYsFw","section":"section__AQ-WW","title":"title__UtO8N","description":"description__DD9lX"});
// CONCATENATED MODULE: ./components/terminal/cmd/help.tsx


var help_CommandHelp = function CommandHelp() {
  return Object(external_preact_["h"])("div", {
    class: cmd_style.output
  }, Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Available Commands :"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "help -- List of available commands"), Object(external_preact_["h"])("li", null, "experience -- List of professional experiences"), Object(external_preact_["h"])("li", null, "skills -- List of skills"), Object(external_preact_["h"])("li", null, "education -- List of education"), Object(external_preact_["h"])("li", null, "activities -- List of activities"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Special Commands :"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "clear -- Clear all command histories"), Object(external_preact_["h"])("li", null, "cd -- Change location(Not Implemented)"), Object(external_preact_["h"])("li", null, "ls -- List locations and files(Not Implemented)"))));
};
// CONCATENATED MODULE: ./components/terminal/cmd/error.tsx


var error_CommandNotFound = function CommandNotFound(_ref) {
  var command = _ref.command;
  return Object(external_preact_["h"])("div", {
    class: cmd_style.error
  }, Object(external_preact_["h"])("p", null, "command not found: ", command));
};
// CONCATENATED MODULE: ./components/terminal/cmd/experience.tsx


var experience_CommandExperience = function CommandExperience() {
  return Object(external_preact_["h"])("div", {
    className: cmd_style.output
  }, Object(external_preact_["h"])("strong", null, "Professional Experience :"), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "1) Software Engineer Backend Techlead"), ", Mercari, Inc. Tokyo, Japan (2024/10 ~ Now)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "As a Software Engineer Backend Tech Lead, I was responsible for the system design, feature development, and operation of services in the HR domain, as well as the technical management of a team of three people."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Developing GraphQL API and gRPC."), Object(external_preact_["h"])("li", null, "Technical management for a team of 3 people."))), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "2) Software Engineer Backend"), ", Mercari, Inc. Tokyo, Japan (2023/10 ~ 2024/09)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "As a Software Engineer Backend, I was responsible for the system design, feature development, and operation of services in the HR domain."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Building a distributed record lock service across multiple services within modular monolith application."), Object(external_preact_["h"])("li", null, "Developing GraphQL API and gRPC."))), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "3) Customer Reliability Engineer"), ", Studyplus, Inc. Tokyo, Japan (2022/05 ~ Now)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "A first member of the team. Decrease Customer's anxiety and increase Customer's satisfaction by improving the reliability of the service."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Building Data Pipeline and Data Warehouse(~500 tables, 1billion records)"), Object(external_preact_["h"])("li", null, "Implement a system to detect messages between users that violate the terms of service.(1M messages/month)"))), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "4) Team Leader"), ", Studyplus, Inc. Tokyo, Japan (2020/01 ~ Now)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "As a team leader of 9 people web application group, I have led the team to deliver features in the educational field. Examples of actions I have taken are as follows."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Create a career ladder to clarify the career goals and current status of the members"), Object(external_preact_["h"])("li", null, "Introduced scrum development and reduced project delays"))), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "5) Back-End Engineer"), ", Studyplus, Inc. Tokyo, Japan (2018/09 ~ 2020/12)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "As part of B2B SaaS Web Application Team, I have delivered features to improve the learning efficiency of students and teachers."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Migrate monolith Ruby on Rails App into REST API and React SPA"), Object(external_preact_["h"])("li", null, "Introduce Schema Driven Development process"), Object(external_preact_["h"])("li", null, "Implement front-end and back-end across ambiguous systems and environment"))), Object(external_preact_["h"])("div", {
    className: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    className: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "6) System Engineer"), ", Technobrain,Inc. Tokyo, Japan (2017/09 ~ 2018/08)"), Object(external_preact_["h"])("p", {
    className: cmd_style.description
  }, "As a system engineer of a contract software development team, I have developed web applications for internal business operations.")));
};
// CONCATENATED MODULE: ./components/terminal/cmd/skills.tsx


var skills_CommandSkills = function CommandSkills() {
  return Object(external_preact_["h"])("div", {
    class: cmd_style.output
  }, Object(external_preact_["h"])("strong", null, "Skills :"), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Software Development"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Ruby"), Object(external_preact_["h"])("li", null, "Node.js"), Object(external_preact_["h"])("li", null, "Go"), Object(external_preact_["h"])("li", null, "Python"), Object(external_preact_["h"])("li", null, "Rust"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Data Engineering"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "digdag"), Object(external_preact_["h"])("li", null, "embulk"), Object(external_preact_["h"])("li", null, "GCP BigQuery"), Object(external_preact_["h"])("li", null, "GCP Datastream"), Object(external_preact_["h"])("li", null, "GCP Dataform"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Web Development"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "HTML"), Object(external_preact_["h"])("li", null, "CSS"), Object(external_preact_["h"])("li", null, "JavaScript/TypeScript"), Object(external_preact_["h"])("li", null, "React/Next.js"), Object(external_preact_["h"])("li", null, "Ruby on Rails"), Object(external_preact_["h"])("li", null, "Sidekiq"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Misc"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Git"), Object(external_preact_["h"])("li", null, "Scrum Development"), Object(external_preact_["h"])("li", null, "Schema Driven Development"), Object(external_preact_["h"])("li", null, "Interviewing"), Object(external_preact_["h"])("li", null, "Team organization"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Interests"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Engineering excellence"), Object(external_preact_["h"])("li", null, "Authorization and Authentication"), Object(external_preact_["h"])("li", null, "Machine Learning"))));
};
// CONCATENATED MODULE: ./components/terminal/cmd/education.tsx


var education_CommandEducation = function CommandEducation() {
  return Object(external_preact_["h"])("div", {
    class: cmd_style.output
  }, Object(external_preact_["h"])("strong", null, "Education :"), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Iwate Prefectural University(2013~2017)"), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, Object(external_preact_["h"])("strong", null, "Unfinished")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "Completed 66 Credits towards a Bachelor of Policy Management")));
};
// CONCATENATED MODULE: ./components/terminal/cmd/activities.tsx


var activities_CommandActivities = function CommandActivities() {
  return Object(external_preact_["h"])("div", {
    class: cmd_style.output
  }, Object(external_preact_["h"])("strong", null, "Activities :"), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "Feb 2023)")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "Release conventional commit stat tool ", Object(external_preact_["h"])("a", {
    href: "https://github.com/atomiyama/ccstat"
  }, Object(external_preact_["h"])("b", null, "ccstat")))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "December 2019)")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, Object(external_preact_["h"])("span", null, "Presentation ", Object(external_preact_["h"])("b", null, Object(external_preact_["h"])("i", null, "Build Gem in Rust "))), Object(external_preact_["h"])("span", null, "at ", Object(external_preact_["h"])("a", {
    href: "https://heiseirb.connpass.com/event/151414/"
  }, "heisei.rb#9"))), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, Object(external_preact_["h"])("a", {
    href: "https://speakerdeck.com/atomiyama/rustdegemwozuo-rou"
  }, "Speaker Deck"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "Oct 2019)")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, Object(external_preact_["h"])("span", null, "Presentation ", Object(external_preact_["h"])("b", null, Object(external_preact_["h"])("i", null, "FFI & Native Extension "))), Object(external_preact_["h"])("span", null, "at ", Object(external_preact_["h"])("a", {
    href: "https://heiseirb.connpass.com/event/148650/"
  }, "heisei.rb#9"))), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, Object(external_preact_["h"])("a", {
    href: "https://speakerdeck.com/atomiyama/ffi-and-native-extension"
  }, "Speaker Deck"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "Dec 2018)")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "Release Cursor based pagination gem ", Object(external_preact_["h"])("a", {
    href: "https://github.com/studyplus/jinrai"
  }, "jinrai"))), Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "Jun 2018)")), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "Applied Information Technology Engineer Examination")));
};
// CONCATENATED MODULE: ./components/terminal/cmd/index.tsx









var cmd_Cmd = function Cmd(props) {
  if (props.hidden) return null;
  return Object(external_preact_["h"])(external_preact_["Fragment"], null, Object(external_preact_["h"])("p", null, Object(external_preact_["h"])("span", {
    class: terminal_style.prompt
  }, PROMPT), Object(external_preact_["h"])("span", {
    class: terminal_style.command
  }, props.rawInput)), Object(external_preact_["h"])(cmd_CmdOutput, props));
};
var cmd_CmdOutput = function CmdOutput(_ref) {
  var command = _ref.command;
  switch (command) {
    case 'help':
      {
        return Object(external_preact_["h"])(help_CommandHelp, null);
      }
    case 'experience':
      {
        return Object(external_preact_["h"])(experience_CommandExperience, null);
      }
    case 'skills':
      {
        return Object(external_preact_["h"])(skills_CommandSkills, null);
      }
    case 'education':
      {
        return Object(external_preact_["h"])(education_CommandEducation, null);
      }
    case 'activities':
      {
        return Object(external_preact_["h"])(activities_CommandActivities, null);
      }
    case '':
      {
        return null;
      }
    default:
      {
        return Object(external_preact_["h"])(error_CommandNotFound, {
          command: command
        });
      }
  }
};
// EXTERNAL MODULE: ../node_modules/react-ga4/dist/index.js
var dist = __webpack_require__("/CiD");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./components/terminal/index.tsx





var PROMPT = "guest@atomiyama.dev:~$";
var terminal_Terminal = function Terminal() {
  var _useCmd = useCmd_useCmd(),
    formRef = _useCmd.formRef,
    inputRef = _useCmd.inputRef,
    commandProps = _useCmd.commandProps,
    handleExecCmd = _useCmd.handleExecCmd;
  return Object(external_preact_["h"])("div", {
    class: terminal_style.terminal
  }, Object(external_preact_["h"])("div", {
    class: terminal_style.welcome
  }, Object(external_preact_["h"])("p", null, "Hello, there!"), Object(external_preact_["h"])("p", null, "Type \"help\" to see the list of available commands.")), commandProps.map(function (props, i) {
    return Object(external_preact_["h"])(external_preact_["Fragment"], {
      key: "history_".concat(i)
    }, Object(external_preact_["h"])(cmd_Cmd, props));
  }), Object(external_preact_["h"])(terminal_Prompt, {
    handleExecCmd: handleExecCmd,
    formRef: formRef,
    inputRef: inputRef
  }));
};
var terminal_Prompt = function Prompt(_ref) {
  var handleExecCmd = _ref.handleExecCmd,
    formRef = _ref.formRef,
    inputRef = _ref.inputRef;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var input = e.target.command.value;
    handleExecCmd(input);
    dist_default.a.event("submit_form", {
      input: input
    });
    // reset input field
    e.target.command.value = '';
  };
  return Object(external_preact_["h"])("form", {
    ref: formRef,
    id: "activeprompt",
    class: terminal_style.activeprompt,
    onSubmit: handleSubmit
  }, Object(external_preact_["h"])("span", {
    class: terminal_style.prompt
  }, PROMPT), Object(external_preact_["h"])("input", {
    ref: inputRef,
    type: "text",
    name: "command",
    class: terminal_style.command,
    autofocus: true,
    autocomplete: "off"
  }));
};
// CONCATENATED MODULE: ./routes/home/index.tsx


var home_Home = function Home() {
  return Object(external_preact_["h"])(terminal_Terminal, null);
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
function compat_module_typeof(obj) { "@babel/helpers - typeof"; return compat_module_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, compat_module_typeof(obj); }




function compat_module_g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function compat_module_w(n) {
  this.props = n;
}
function compat_module_x(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(external_preact_["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(compat_module_w.prototype = new external_preact_["Component"]()).isPureReactComponent = !0, compat_module_w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var R = external_preact_["options"].__b;
external_preact_["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function compat_module_k(n) {
  function t(t) {
    var e = compat_module_g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var compat_module_A = function A(n, t) {
    return null == n ? null : Object(external_preact_["toChildArray"])(Object(external_preact_["toChildArray"])(n).map(t));
  },
  O = {
    map: compat_module_A,
    forEach: compat_module_A,
    count: function count(n) {
      return n ? Object(external_preact_["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(external_preact_["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: external_preact_["toChildArray"]
  },
  compat_module_T = external_preact_["options"].__e;
external_preact_["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  compat_module_T(n, t, e, r);
};
var I = external_preact_["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = compat_module_g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function compat_module_U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return compat_module_U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function compat_module_F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(external_preact_["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function compat_module_V() {
  this.u = null, this.o = null;
}
external_preact_["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new external_preact_["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = compat_module_F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = compat_module_U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(external_preact_["createElement"])(external_preact_["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(external_preact_["createElement"])(external_preact_["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function compat_module_P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function compat_module_j(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(external_preact_["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(external_preact_["render"])(Object(external_preact_["createElement"])(compat_module_P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function compat_module_z(n, e) {
  var r = Object(external_preact_["createElement"])(compat_module_j, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(compat_module_V.prototype = new external_preact_["Component"]()).__a = function (n) {
  var t = this,
    e = compat_module_F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, compat_module_V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(external_preact_["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, compat_module_V.prototype.componentDidUpdate = compat_module_V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var compat_module_B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  compat_module_H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Y = /[A-Z0-9]/g,
  $ = "undefined" != typeof document,
  compat_module_q = function q(n) {
    return ("undefined" != typeof Symbol && "symbol" == compat_module_typeof(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
function compat_module_G(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(external_preact_["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function J(n, t, e) {
  return Object(external_preact_["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
external_preact_["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(external_preact_["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var K = external_preact_["options"].event;
function Q() {}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
external_preact_["options"].event = function (n) {
  return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
};
var compat_module_tn,
  compat_module_en = {
    enumerable: !1,
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  compat_module_rn = external_preact_["options"].vnode;
external_preact_["options"].vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {};
    for (var o in t) {
      var i = t[o];
      if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
        var l = o.toLowerCase();
        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || compat_module_q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && compat_module_H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", compat_module_en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = compat_module_B, compat_module_rn && compat_module_rn(n);
};
var compat_module_un = external_preact_["options"].__r;
external_preact_["options"].__r = function (n) {
  compat_module_un && compat_module_un(n), compat_module_tn = n.__c;
};
var compat_module_on = external_preact_["options"].diffed;
external_preact_["options"].diffed = function (n) {
  compat_module_on && compat_module_on(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), compat_module_tn = null;
};
var ln = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return compat_module_tn.__n[n.__c].props.value;
        }
      }
    }
  },
  cn = "17.0.2";
function fn(n) {
  return external_preact_["createElement"].bind(null, n);
}
function compat_module_an(n) {
  return !!n && n.$$typeof === compat_module_B;
}
function sn(n) {
  return compat_module_an(n) ? external_preact_["cloneElement"].apply(null, arguments) : n;
}
function hn(n) {
  return !!n.__k && (Object(external_preact_["render"])(null, n), !0);
}
function vn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var dn = function dn(n, t) {
    return n(t);
  },
  pn = function pn(n, t) {
    return n(t);
  },
  mn = external_preact_["Fragment"];
function yn(n) {
  n();
}
function _n(n) {
  return n;
}
function bn() {
  return [!1, yn];
}
var Sn = y;
function gn(n, t) {
  var e = t(),
    r = h({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return y(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), p(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var Cn = {
  useState: h,
  useId: V,
  useReducer: s,
  useEffect: p,
  useLayoutEffect: y,
  useInsertionEffect: Sn,
  useTransition: bn,
  useDeferredValue: _n,
  useSyncExternalStore: gn,
  startTransition: yn,
  useRef: hooks_module_,
  useImperativeHandle: hooks_module_A,
  useMemo: F,
  useCallback: T,
  useContext: hooks_module_q,
  useDebugValue: x,
  version: "17.0.2",
  Children: O,
  render: compat_module_G,
  hydrate: J,
  unmountComponentAtNode: hn,
  createPortal: compat_module_z,
  createElement: external_preact_["createElement"],
  createContext: external_preact_["createContext"],
  createFactory: fn,
  cloneElement: sn,
  createRef: external_preact_["createRef"],
  Fragment: external_preact_["Fragment"],
  isValidElement: compat_module_an,
  findDOMNode: vn,
  Component: external_preact_["Component"],
  PureComponent: compat_module_w,
  memo: compat_module_x,
  forwardRef: compat_module_k,
  flushSync: pn,
  unstable_batchedUpdates: dn,
  StrictMode: mn,
  Suspense: D,
  SuspenseList: compat_module_V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln
};

// CONCATENATED MODULE: ../node_modules/markdown-to-jsx/dist/index.module.js
function index_module_typeof(obj) { "@babel/helpers - typeof"; return index_module_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, index_module_typeof(obj); }

function index_module_r() {
  return index_module_r = Object.assign || function (n) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
  }, index_module_r.apply(this, arguments);
}
var index_module_t = ["children", "options"],
  index_module_e = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce(function (n, r) {
    return n[r.toLowerCase()] = r, n;
  }, {
    for: "htmlFor"
  }),
  index_module_o = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "“"
  },
  index_module_u = ["style", "script"],
  index_module_a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  index_module_c = /mailto:/i,
  index_module_i = /\n{2,}$/,
  index_module_ = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  index_module_f = /^ *> ?/gm,
  index_module_l = /^ {2,}\n/,
  index_module_s = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  index_module_d = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  index_module_p = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  index_module_m = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  index_module_g = /^(?:\n *)*\n/,
  index_module_v = /\r\n?/g,
  index_module_y = /^\[\^([^\]]+)](:.*)\n/,
  index_module_h = /^\[\^([^\]]+)]/,
  index_module_k = /\f/g,
  index_module_x = /^\s*?\[(x|\s)\]/,
  index_module_b = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  index_module_$ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  index_module_z = /&([a-zA-Z]+);/g,
  index_module_w = /^<!--[\s\S]*?(?:-->)/,
  index_module_A = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  index_module_E = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  index_module_L = /^\{.*\}$/,
  index_module_M = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  index_module_I = /^<([^ >]+@[^ >]+)>/,
  index_module_O = /^<([^ >]+:\/[^ >]+)>/,
  index_module_B = /-([a-z])?/gi,
  index_module_R = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  index_module_T = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  index_module_j = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  index_module_C = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  index_module_D = /(\[|\])/g,
  index_module_N = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  index_module_Z = /\t/g,
  index_module_F = /^ *\| */,
  index_module_P = /(^ *\||\| *$)/g,
  index_module_G = / *$/,
  index_module_H = /^ *:-+: *$/,
  index_module_q = /^ *:-+ *$/,
  index_module_U = /^ *-+: *$/,
  index_module_V = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  index_module_W = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  index_module_Q = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  index_module_X = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  index_module_J = /^\\([^0-9A-Za-z\s])/,
  index_module_K = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  index_module_Y = /^\n+/,
  index_module_nn = /^([ \t]*)/,
  index_module_rn = /\\([^\\])/g,
  index_module_tn = / *\n+$/,
  index_module_en = /(?:^|\n)( *)$/,
  index_module_on = "(?:\\d+\\.)",
  index_module_un = "(?:[*+-])";
function index_module_an(n) {
  return "( *)(" + (1 === n ? index_module_on : index_module_un) + ") +";
}
var index_module_cn = index_module_an(1),
  index_module_n = index_module_an(2);
function index_module_fn(n) {
  return new RegExp("^" + (1 === n ? index_module_cn : index_module_n));
}
var index_module_ln = index_module_fn(1),
  index_module_sn = index_module_fn(2);
function index_module_dn(n) {
  return new RegExp("^" + (1 === n ? index_module_cn : index_module_n) + "[^\\n]*(?:\\n(?!\\1" + (1 === n ? index_module_on : index_module_un) + " )[^\\n]*)*(\\n|$)", "gm");
}
var index_module_pn = index_module_dn(1),
  index_module_mn = index_module_dn(2);
function index_module_gn(n) {
  var r = 1 === n ? index_module_on : index_module_un;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
var index_module_vn = index_module_gn(1),
  index_module_yn = index_module_gn(2);
function index_module_hn(n, r) {
  var t = 1 === r,
    e = t ? index_module_vn : index_module_yn,
    o = t ? index_module_pn : index_module_mn,
    u = t ? index_module_ln : index_module_sn;
  return {
    t: function t(n, r, _t) {
      var o = index_module_en.exec(_t);
      return o && (r.o || !r.u && !r.i) ? e.exec(n = o[1] + n) : null;
    },
    _: Nn.HIGH,
    l: function l(n, r, e) {
      var a = t ? +n[2] : void 0,
        c = n[0].replace(index_module_i, "\n").match(o),
        _ = !1;
      return {
        p: c.map(function (n, t) {
          var o = u.exec(n)[0].length,
            a = new RegExp("^ {1," + o + "}", "gm"),
            i = n.replace(a, "").replace(u, ""),
            f = t === c.length - 1,
            l = -1 !== i.indexOf("\n\n") || f && _;
          _ = l;
          var s,
            d = e.u,
            p = e.o;
          e.o = !0, l ? (e.u = !1, s = i.replace(index_module_tn, "\n\n")) : (e.u = !0, s = i.replace(index_module_tn, ""));
          var m = r(s, e);
          return e.u = d, e.o = p, m;
        }),
        m: t,
        g: a
      };
    },
    v: function v(r, t, e) {
      return n(r.m ? "ol" : "ul", {
        key: e.h,
        start: r.g
      }, r.p.map(function (r, o) {
        return n("li", {
          key: o
        }, t(r, e));
      }));
    }
  };
}
var kn = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  xn = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  index_module_bn = [index_module_, index_module_d, index_module_p, index_module_b, S, index_module_w, index_module_R, index_module_pn, index_module_vn, index_module_mn, index_module_yn],
  index_module_Sn = [].concat(index_module_bn, [/^[^\n]+(?:  \n|\n{2,})/, index_module_$, index_module_E]);
function $n(n) {
  return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function zn(n) {
  return index_module_U.test(n) ? "right" : index_module_H.test(n) ? "center" : index_module_q.test(n) ? "left" : null;
}
function wn(n, r, t) {
  var e = t.k;
  t.k = !0;
  var o = r(n.trim(), t);
  t.k = e;
  var u = [[]];
  return o.forEach(function (n, r) {
    "tableSeparator" === n.type ? 0 !== r && r !== o.length - 1 && u.push([]) : ("text" !== n.type || null != o[r + 1] && "tableSeparator" !== o[r + 1].type || (n.S = n.S.replace(index_module_G, "")), u[u.length - 1].push(n));
  }), u;
}
function An(n, r, t) {
  t.u = !0;
  var e = wn(n[1], r, t),
    o = n[2].replace(index_module_P, "").split("|").map(zn),
    u = function (n, r, t) {
      return n.trim().split("\n").map(function (n) {
        return wn(n, r, t);
      });
    }(n[3], r, t);
  return t.u = !1, {
    $: o,
    A: u,
    L: e,
    type: "table"
  };
}
function En(n, r) {
  return null == n.$[r] ? {} : {
    textAlign: n.$[r]
  };
}
function Ln(n) {
  return function (r, t) {
    return t.u ? n.exec(r) : null;
  };
}
function Mn(n) {
  return function (r, t) {
    return t.u || t.i ? n.exec(r) : null;
  };
}
function In(n) {
  return function (r, t) {
    return t.u || t.i ? null : n.exec(r);
  };
}
function On(n) {
  return function (r) {
    return n.exec(r);
  };
}
function Bn(n, r, t) {
  if (r.u || r.i) return null;
  if (t && !t.endsWith("\n")) return null;
  var e = "";
  n.split("\n").every(function (n) {
    return !index_module_bn.some(function (r) {
      return r.test(n);
    }) && (e += n + "\n", n.trim());
  });
  var o = e.trimEnd();
  return "" == o ? null : [e, o];
}
function Rn(n) {
  try {
    if (decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null;
  } catch (n) {
    return null;
  }
  return n;
}
function Tn(n) {
  return n.replace(index_module_rn, "$1");
}
function jn(n, r, t) {
  var e = t.u || !1,
    o = t.i || !1;
  t.u = !0, t.i = !0;
  var u = n(r, t);
  return t.u = e, t.i = o, u;
}
function index_module_Cn(n, r, t) {
  var e = t.u || !1,
    o = t.i || !1;
  t.u = !1, t.i = !0;
  var u = n(r, t);
  return t.u = e, t.i = o, u;
}
function Dn(n, r, t) {
  return t.u = !1, n(r + "\n\n", t);
}
var Nn,
  Zn = function Zn(n, r, t) {
    return {
      S: jn(r, n[1], t)
    };
  };
function Fn() {
  return {};
}
function Pn() {
  return null;
}
function Gn() {
  return [].slice.call(arguments).filter(Boolean).join(" ");
}
function Hn(n, r, t) {
  for (var e = n, o = r.split("."); o.length && void 0 !== (e = e[o[0]]);) o.shift();
  return e || t;
}
function qn(n, r) {
  var t = Hn(r, n);
  return t ? "function" == typeof t || "object" == index_module_typeof(t) && "render" in t ? t : Hn(r, n + ".component", n) : n;
}
function Un(t, i) {
  void 0 === i && (i = {}), i.overrides = i.overrides || {}, i.slugify = i.slugify || $n, i.namedCodesToUnicode = i.namedCodesToUnicode ? index_module_r({}, index_module_o, i.namedCodesToUnicode) : index_module_o;
  var P = i.createElement || external_preact_["createElement"];
  function G(n, t) {
    var e = Hn(i.overrides, n + ".props", {});
    return P.apply(void 0, [qn(n, i.overrides), index_module_r({}, t, e, {
      className: Gn(null == t ? void 0 : t.className, e.className) || void 0
    })].concat([].slice.call(arguments, 2)));
  }
  function H(r) {
    var t = !1;
    i.forceInline ? t = !0 : i.forceBlock || (t = !1 === index_module_N.test(r));
    for (var e = un(on(t ? r : r.trimEnd().replace(index_module_Y, "") + "\n\n", {
      u: t
    })); "string" == typeof e[e.length - 1] && !e[e.length - 1].trim();) e.pop();
    if (null === i.wrapper) return e;
    var o,
      u = i.wrapper || (t ? "span" : "div");
    if (e.length > 1 || i.forceWrapper) o = e;else {
      if (1 === e.length) return "string" == typeof (o = e[0]) ? G("span", {
        key: "outer"
      }, o) : o;
      o = null;
    }
    return external_preact_["createElement"](u, {
      key: "outer"
    }, o);
  }
  function q(r) {
    var t = r.match(index_module_a);
    return t ? t.reduce(function (r, t, o) {
      var u = t.indexOf("=");
      if (-1 !== u) {
        var a = function (n) {
            return -1 !== n.indexOf("-") && null === n.match(index_module_A) && (n = n.replace(index_module_B, function (n, r) {
              return r.toUpperCase();
            })), n;
          }(t.slice(0, u)).trim(),
          c = function (n) {
            var r = n[0];
            return ('"' === r || "'" === r) && n.length >= 2 && n[n.length - 1] === r ? n.slice(1, -1) : n;
          }(t.slice(u + 1).trim()),
          i = index_module_e[a] || a,
          _ = r[i] = function (n, r) {
            return "style" === n ? r.split(/;\s?/).reduce(function (n, r) {
              var t = r.slice(0, r.indexOf(":"));
              return n[t.replace(/(-[a-z])/g, function (n) {
                return n[1].toUpperCase();
              })] = r.slice(t.length + 1).trim(), n;
            }, {}) : "href" === n ? Rn(r) : (r.match(index_module_L) && (r = r.slice(1, r.length - 1)), "true" === r || "false" !== r && r);
          }(a, c);
        "string" == typeof _ && (index_module_$.test(_) || index_module_E.test(_)) && (r[i] = sn(H(_.trim()), {
          key: o
        }));
      } else "style" !== t && (r[index_module_e[t] || t] = !0);
      return r;
    }, {}) : null;
  }
  var U = [],
    rn = {},
    tn = {
      blockQuote: {
        t: In(index_module_),
        _: Nn.HIGH,
        l: function l(n, r, t) {
          return {
            S: r(n[0].replace(index_module_f, ""), t)
          };
        },
        v: function v(n, r, t) {
          return G("blockquote", {
            key: t.h
          }, r(n.S, t));
        }
      },
      breakLine: {
        t: On(index_module_l),
        _: Nn.HIGH,
        l: Fn,
        v: function v(n, r, t) {
          return G("br", {
            key: t.h
          });
        }
      },
      breakThematic: {
        t: In(index_module_s),
        _: Nn.HIGH,
        l: Fn,
        v: function v(n, r, t) {
          return G("hr", {
            key: t.h
          });
        }
      },
      codeBlock: {
        t: In(index_module_p),
        _: Nn.MAX,
        l: function l(n) {
          return {
            S: n[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
            M: void 0
          };
        },
        v: function v(n, t, e) {
          return G("pre", {
            key: e.h
          }, G("code", index_module_r({}, n.I, {
            className: n.M ? "lang-" + n.M : ""
          }), n.S));
        }
      },
      codeFenced: {
        t: In(index_module_d),
        _: Nn.MAX,
        l: function l(n) {
          return {
            I: q(n[3] || ""),
            S: n[4],
            M: n[2] || void 0,
            type: "codeBlock"
          };
        }
      },
      codeInline: {
        t: Mn(index_module_m),
        _: Nn.LOW,
        l: function l(n) {
          return {
            S: n[2]
          };
        },
        v: function v(n, r, t) {
          return G("code", {
            key: t.h
          }, n.S);
        }
      },
      footnote: {
        t: In(index_module_y),
        _: Nn.MAX,
        l: function l(n) {
          return U.push({
            O: n[2],
            B: n[1]
          }), {};
        },
        v: Pn
      },
      footnoteReference: {
        t: Ln(index_module_h),
        _: Nn.HIGH,
        l: function l(n) {
          return {
            S: n[1],
            R: "#" + i.slugify(n[1])
          };
        },
        v: function v(n, r, t) {
          return G("a", {
            key: t.h,
            href: Rn(n.R)
          }, G("sup", {
            key: t.h
          }, n.S));
        }
      },
      gfmTask: {
        t: Ln(index_module_x),
        _: Nn.HIGH,
        l: function l(n) {
          return {
            T: "x" === n[1].toLowerCase()
          };
        },
        v: function v(n, r, t) {
          return G("input", {
            checked: n.T,
            key: t.h,
            readOnly: !0,
            type: "checkbox"
          });
        }
      },
      heading: {
        t: In(index_module_b),
        _: Nn.HIGH,
        l: function l(n, r, t) {
          return {
            S: jn(r, n[2], t),
            j: i.slugify(n[2]),
            C: n[1].length
          };
        },
        v: function v(n, r, t) {
          return G("h" + n.C, {
            id: n.j,
            key: t.h
          }, r(n.S, t));
        }
      },
      headingSetext: {
        t: In(S),
        _: Nn.MAX,
        l: function l(n, r, t) {
          return {
            S: jn(r, n[1], t),
            C: "=" === n[2] ? 1 : 2,
            type: "heading"
          };
        }
      },
      htmlComment: {
        t: On(index_module_w),
        _: Nn.HIGH,
        l: function l() {
          return {};
        },
        v: Pn
      },
      image: {
        t: Mn(xn),
        _: Nn.HIGH,
        l: function l(n) {
          return {
            D: n[1],
            R: Tn(n[2]),
            N: n[3]
          };
        },
        v: function v(n, r, t) {
          return G("img", {
            key: t.h,
            alt: n.D || void 0,
            title: n.N || void 0,
            src: Rn(n.R)
          });
        }
      },
      link: {
        t: Ln(kn),
        _: Nn.LOW,
        l: function l(n, r, t) {
          return {
            S: index_module_Cn(r, n[1], t),
            R: Tn(n[2]),
            N: n[3]
          };
        },
        v: function v(n, r, t) {
          return G("a", {
            key: t.h,
            href: Rn(n.R),
            title: n.N
          }, r(n.S, t));
        }
      },
      linkAngleBraceStyleDetector: {
        t: Ln(index_module_O),
        _: Nn.MAX,
        l: function l(n) {
          return {
            S: [{
              S: n[1],
              type: "text"
            }],
            R: n[1],
            type: "link"
          };
        }
      },
      linkBareUrlDetector: {
        t: function t(n, r) {
          return r.Z ? null : Ln(index_module_M)(n, r);
        },
        _: Nn.MAX,
        l: function l(n) {
          return {
            S: [{
              S: n[1],
              type: "text"
            }],
            R: n[1],
            N: void 0,
            type: "link"
          };
        }
      },
      linkMailtoDetector: {
        t: Ln(index_module_I),
        _: Nn.MAX,
        l: function l(n) {
          var r = n[1],
            t = n[1];
          return index_module_c.test(t) || (t = "mailto:" + t), {
            S: [{
              S: r.replace("mailto:", ""),
              type: "text"
            }],
            R: t,
            type: "link"
          };
        }
      },
      orderedList: index_module_hn(G, 1),
      unorderedList: index_module_hn(G, 2),
      newlineCoalescer: {
        t: In(index_module_g),
        _: Nn.LOW,
        l: Fn,
        v: function v() {
          return "\n";
        }
      },
      paragraph: {
        t: Bn,
        _: Nn.LOW,
        l: Zn,
        v: function v(n, r, t) {
          return G("p", {
            key: t.h
          }, r(n.S, t));
        }
      },
      ref: {
        t: Ln(index_module_T),
        _: Nn.MAX,
        l: function l(n) {
          return rn[n[1]] = {
            R: n[2],
            N: n[4]
          }, {};
        },
        v: Pn
      },
      refImage: {
        t: Mn(index_module_j),
        _: Nn.MAX,
        l: function l(n) {
          return {
            D: n[1] || void 0,
            F: n[2]
          };
        },
        v: function v(n, r, t) {
          return G("img", {
            key: t.h,
            alt: n.D,
            src: Rn(rn[n.F].R),
            title: rn[n.F].N
          });
        }
      },
      refLink: {
        t: Ln(index_module_C),
        _: Nn.MAX,
        l: function l(n, r, t) {
          return {
            S: r(n[1], t),
            P: r(n[0].replace(index_module_D, "\\$1"), t),
            F: n[2]
          };
        },
        v: function v(n, r, t) {
          return rn[n.F] ? G("a", {
            key: t.h,
            href: Rn(rn[n.F].R),
            title: rn[n.F].N
          }, r(n.S, t)) : G("span", {
            key: t.h
          }, r(n.P, t));
        }
      },
      table: {
        t: In(index_module_R),
        _: Nn.HIGH,
        l: An,
        v: function v(n, r, t) {
          return G("table", {
            key: t.h
          }, G("thead", null, G("tr", null, n.L.map(function (e, o) {
            return G("th", {
              key: o,
              style: En(n, o)
            }, r(e, t));
          }))), G("tbody", null, n.A.map(function (e, o) {
            return G("tr", {
              key: o
            }, e.map(function (e, o) {
              return G("td", {
                key: o,
                style: En(n, o)
              }, r(e, t));
            }));
          })));
        }
      },
      tableSeparator: {
        t: function t(n, r) {
          return r.k ? index_module_F.exec(n) : null;
        },
        _: Nn.HIGH,
        l: function l() {
          return {
            type: "tableSeparator"
          };
        },
        v: function v() {
          return " | ";
        }
      },
      text: {
        t: On(index_module_K),
        _: Nn.MIN,
        l: function l(n) {
          return {
            S: n[0].replace(index_module_z, function (n, r) {
              return i.namedCodesToUnicode[r] ? i.namedCodesToUnicode[r] : n;
            })
          };
        },
        v: function v(n) {
          return n.S;
        }
      },
      textBolded: {
        t: Mn(index_module_V),
        _: Nn.MED,
        l: function l(n, r, t) {
          return {
            S: r(n[2], t)
          };
        },
        v: function v(n, r, t) {
          return G("strong", {
            key: t.h
          }, r(n.S, t));
        }
      },
      textEmphasized: {
        t: Mn(index_module_W),
        _: Nn.LOW,
        l: function l(n, r, t) {
          return {
            S: r(n[2], t)
          };
        },
        v: function v(n, r, t) {
          return G("em", {
            key: t.h
          }, r(n.S, t));
        }
      },
      textEscaped: {
        t: Mn(index_module_J),
        _: Nn.HIGH,
        l: function l(n) {
          return {
            S: n[1],
            type: "text"
          };
        }
      },
      textMarked: {
        t: Mn(index_module_Q),
        _: Nn.LOW,
        l: Zn,
        v: function v(n, r, t) {
          return G("mark", {
            key: t.h
          }, r(n.S, t));
        }
      },
      textStrikethroughed: {
        t: Mn(index_module_X),
        _: Nn.LOW,
        l: Zn,
        v: function v(n, r, t) {
          return G("del", {
            key: t.h
          }, r(n.S, t));
        }
      }
    };
  !0 !== i.disableParsingRawHTML && (tn.htmlBlock = {
    t: On(index_module_$),
    _: Nn.HIGH,
    l: function l(n, r, t) {
      var e,
        o = n[3].match(index_module_nn),
        a = new RegExp("^" + o[1], "gm"),
        c = n[3].replace(a, ""),
        i = (e = c, index_module_Sn.some(function (n) {
          return n.test(e);
        }) ? Dn : jn),
        _ = n[1].toLowerCase(),
        f = -1 !== index_module_u.indexOf(_);
      t.Z = t.Z || "a" === _;
      var l = f ? n[3] : i(r, c, t);
      return t.Z = !1, {
        I: q(n[2]),
        S: l,
        G: f,
        H: f ? _ : n[1]
      };
    },
    v: function v(n, t, e) {
      return G(n.H, index_module_r({
        key: e.h
      }, n.I), n.G ? n.S : t(n.S, e));
    }
  }, tn.htmlSelfClosing = {
    t: On(index_module_E),
    _: Nn.HIGH,
    l: function l(n) {
      return {
        I: q(n[2] || ""),
        H: n[1]
      };
    },
    v: function v(n, t, e) {
      return G(n.H, index_module_r({}, n.I, {
        key: e.h
      }));
    }
  });
  var en,
    on = function (n) {
      var r = Object.keys(n);
      function t(e, o) {
        for (var u = [], a = ""; e;) for (var c = 0; c < r.length;) {
          var i = r[c],
            _ = n[i],
            f = _.t(e, o, a);
          if (f) {
            var l = f[0];
            e = e.substring(l.length);
            var s = _.l(f, t, o);
            null == s.type && (s.type = i), u.push(s), a = l;
            break;
          }
          c++;
        }
        return u;
      }
      return r.sort(function (r, t) {
        var e = n[r]._,
          o = n[t]._;
        return e !== o ? e - o : r < t ? -1 : 1;
      }), function (n, r) {
        return t(function (n) {
          return n.replace(index_module_v, "\n").replace(index_module_k, "").replace(index_module_Z, "    ");
        }(n), r);
      };
    }(tn),
    un = (en = function (n) {
      return function (r, t, e) {
        return n[r.type].v(r, t, e);
      };
    }(tn), function n(r, t) {
      if (void 0 === t && (t = {}), Array.isArray(r)) {
        for (var e = t.h, o = [], u = !1, a = 0; a < r.length; a++) {
          t.h = a;
          var c = n(r[a], t),
            i = "string" == typeof c;
          i && u ? o[o.length - 1] += c : null !== c && o.push(c), u = i;
        }
        return t.h = e, o;
      }
      return en(r, n, t);
    }),
    an = H(t);
  return U.length ? G("div", null, an, G("footer", {
    key: "footer"
  }, U.map(function (n) {
    return G("div", {
      id: i.slugify(n.B),
      key: n.B
    }, n.B, un(on(n.O, {
      u: !0
    })));
  }))) : an;
}
!function (n) {
  n[n.MAX = 0] = "MAX", n[n.HIGH = 1] = "HIGH", n[n.MED = 2] = "MED", n[n.LOW = 3] = "LOW", n[n.MIN = 4] = "MIN";
}(Nn || (Nn = {}));
/* harmony default export */ var index_module = (function (r) {
  var e = r.children,
    o = r.options,
    u = function (n, r) {
      if (null == n) return {};
      var t,
        e,
        o = {},
        u = Object.keys(n);
      for (e = 0; e < u.length; e++) r.indexOf(t = u[e]) >= 0 || (o[t] = n[t]);
      return o;
    }(r, index_module_t);
  return sn(Un(e, o), u);
});

// CONCATENATED MODULE: ./routes/post/index.tsx
function post_slicedToArray(arr, i) { return post_arrayWithHoles(arr) || post_iterableToArrayLimit(arr, i) || post_unsupportedIterableToArray(arr, i) || post_nonIterableRest(); }
function post_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function post_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return post_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return post_arrayLikeToArray(o, minLen); }
function post_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function post_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function post_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var post_Post = function Post(props) {
  var _usePrerenderData = usePrerenderData(props),
    _usePrerenderData2 = post_slicedToArray(_usePrerenderData, 2),
    data = _usePrerenderData2[0],
    isLoading = _usePrerenderData2[1];
  if (isLoading) {
    return Object(external_preact_["h"])("div", null, "Loading...");
  }
  if (data && data.data) {
    var content = data.data.content;
    return Object(external_preact_["h"])(index_module, null, content);
  }
};
/* harmony default export */ var post = (post_Post);
// CONCATENATED MODULE: ./components/app.tsx





// Code-splitting is automated for `routes` directory


var app_App = function App(props) {
  return Object(external_preact_["h"])(Provider, {
    value: props
  }, Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(header_Header, null), Object(external_preact_["h"])(header_Header, {
    ariaHidden: true
  }), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(preact_router_es_Route, {
    path: "/",
    component: home
  }), Object(external_preact_["h"])(preact_router_es_Route, {
    path: "/posts/:post_id*",
    component: post
  })))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.ts



dist_default.a.initialize('G-PB50YCHPRR');
/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "s0TJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GA4 = void 0;
var _gtag = _interopRequireDefault(__webpack_require__("voWo"));
var _format = _interopRequireDefault(__webpack_require__("0uLP"));
var _excluded = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
  _excluded2 = ["title", "location"],
  _excluded3 = ["page", "hitType"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
/*
Links
https://developers.google.com/gtagjs/reference/api
https://developers.google.com/tag-platform/gtagjs/reference
*/
/**
 * @typedef GaOptions
 * @type {Object}
 * @property {boolean} [cookieUpdate=true]
 * @property {number} [cookieExpires=63072000] Default two years
 * @property {string} [cookieDomain="auto"]
 * @property {string} [cookieFlags]
 * @property {string} [userId]
 * @property {string} [clientId]
 * @property {boolean} [anonymizeIp]
 * @property {string} [contentGroup1]
 * @property {string} [contentGroup2]
 * @property {string} [contentGroup3]
 * @property {string} [contentGroup4]
 * @property {string} [contentGroup5]
 * @property {boolean} [allowAdFeatures=true]
 * @property {boolean} [allowAdPersonalizationSignals]
 * @property {boolean} [nonInteraction]
 * @property {string} [page]
 */
/**
 * @typedef UaEventOptions
 * @type {Object}
 * @property {string} action
 * @property {string} category
 * @property {string} [label]
 * @property {number} [value]
 * @property {boolean} [nonInteraction]
 * @property {('beacon'|'xhr'|'image')} [transport]
 */
/**
 * @typedef InitOptions
 * @type {Object}
 * @property {string} trackingId
 * @property {GaOptions|any} [gaOptions]
 * @property {Object} [gtagOptions] New parameter
 */
var GA4 = /*#__PURE__*/function () {
  function GA4() {
    var _this = this;
    _classCallCheck(this, GA4);
    _defineProperty(this, "reset", function () {
      _this.isInitialized = false;
      _this._testMode = false;
      _this._currentMeasurementId;
      _this._hasLoadedGA = false;
      _this._isQueuing = false;
      _this._queueGtag = [];
    });
    _defineProperty(this, "_gtag", function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (!_this._testMode) {
        if (_this._isQueuing) {
          _this._queueGtag.push(args);
        } else {
          _gtag["default"].apply(void 0, args);
        }
      } else {
        _this._queueGtag.push(args);
      }
    });
    _defineProperty(this, "_loadGA", function (GA_MEASUREMENT_ID, nonce) {
      var gtagUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!_this._hasLoadedGA) {
        // Global Site Tag (gtag.js) - Google Analytics
        var script = document.createElement("script");
        script.async = true;
        script.src = "".concat(gtagUrl, "?id=").concat(GA_MEASUREMENT_ID);
        if (nonce) {
          script.setAttribute("nonce", nonce);
        }
        document.body.appendChild(script);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
        _this._hasLoadedGA = true;
      }
    });
    _defineProperty(this, "_toGtagOptions", function (gaOptions) {
      if (!gaOptions) {
        return;
      }
      var mapFields = {
        // Old https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#cookieUpdate
        // New https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id#cookie_update
        cookieUpdate: "cookie_update",
        cookieExpires: "cookie_expires",
        cookieDomain: "cookie_domain",
        cookieFlags: "cookie_flags",
        // must be in set method?
        userId: "user_id",
        clientId: "client_id",
        anonymizeIp: "anonymize_ip",
        // https://support.google.com/analytics/answer/2853546?hl=en#zippy=%2Cin-this-article
        contentGroup1: "content_group1",
        contentGroup2: "content_group2",
        contentGroup3: "content_group3",
        contentGroup4: "content_group4",
        contentGroup5: "content_group5",
        // https://support.google.com/analytics/answer/9050852?hl=en
        allowAdFeatures: "allow_google_signals",
        allowAdPersonalizationSignals: "allow_ad_personalization_signals",
        nonInteraction: "non_interaction",
        page: "page_path",
        hitCallback: "event_callback"
      };
      var gtagOptions = Object.entries(gaOptions).reduce(function (prev, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (mapFields[key]) {
          prev[mapFields[key]] = value;
        } else {
          prev[key] = value;
        }
        return prev;
      }, {});
      return gtagOptions;
    });
    _defineProperty(this, "initialize", function (GA_MEASUREMENT_ID) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!GA_MEASUREMENT_ID) {
        throw new Error("Require GA_MEASUREMENT_ID");
      }
      var initConfigs = typeof GA_MEASUREMENT_ID === "string" ? [{
        trackingId: GA_MEASUREMENT_ID
      }] : GA_MEASUREMENT_ID;
      _this._currentMeasurementId = initConfigs[0].trackingId;
      var gaOptions = options.gaOptions,
        gtagOptions = options.gtagOptions,
        nonce = options.nonce,
        _options$testMode = options.testMode,
        testMode = _options$testMode === void 0 ? false : _options$testMode,
        gtagUrl = options.gtagUrl;
      _this._testMode = testMode;
      if (!testMode) {
        _this._loadGA(_this._currentMeasurementId, nonce, gtagUrl);
      }
      if (!_this.isInitialized) {
        _this._gtag("js", new Date());
        initConfigs.forEach(function (config) {
          var mergedGtagOptions = _objectSpread(_objectSpread(_objectSpread({}, _this._toGtagOptions(_objectSpread(_objectSpread({}, gaOptions), config.gaOptions))), gtagOptions), config.gtagOptions);
          if (Object.keys(mergedGtagOptions).length) {
            _this._gtag("config", config.trackingId, mergedGtagOptions);
          } else {
            _this._gtag("config", config.trackingId);
          }
        });
      }
      _this.isInitialized = true;
      if (!testMode) {
        var queues = _toConsumableArray(_this._queueGtag);
        _this._queueGtag = [];
        _this._isQueuing = false;
        while (queues.length) {
          var queue = queues.shift();
          _this._gtag.apply(_this, _toConsumableArray(queue));
          if (queue[0] === "get") {
            _this._isQueuing = true;
          }
        }
      }
    });
    _defineProperty(this, "set", function (fieldsObject) {
      if (!fieldsObject) {
        console.warn("`fieldsObject` is required in .set()");
        return;
      }
      if (_typeof(fieldsObject) !== "object") {
        console.warn("Expected `fieldsObject` arg to be an Object");
        return;
      }
      if (Object.keys(fieldsObject).length === 0) {
        console.warn("empty `fieldsObject` given to .set()");
      }
      _this._gaCommand("set", fieldsObject);
    });
    _defineProperty(this, "_gaCommandSendEvent", function (eventCategory, eventAction, eventLabel, eventValue, fieldsObject) {
      _this._gtag("event", eventAction, _objectSpread(_objectSpread({
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue
      }, fieldsObject && {
        non_interaction: fieldsObject.nonInteraction
      }), _this._toGtagOptions(fieldsObject)));
    });
    _defineProperty(this, "_gaCommandSendEventParameters", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string") {
        _this._gaCommandSendEvent.apply(_this, _toConsumableArray(args.slice(1)));
      } else {
        var _args$ = args[0],
          eventCategory = _args$.eventCategory,
          eventAction = _args$.eventAction,
          eventLabel = _args$.eventLabel,
          eventValue = _args$.eventValue,
          hitType = _args$.hitType,
          rest = _objectWithoutProperties(_args$, _excluded);
        _this._gaCommandSendEvent(eventCategory, eventAction, eventLabel, eventValue, rest);
      }
    });
    _defineProperty(this, "_gaCommandSendTiming", function (timingCategory, timingVar, timingValue, timingLabel) {
      _this._gtag("event", "timing_complete", {
        name: timingVar,
        value: timingValue,
        event_category: timingCategory,
        event_label: timingLabel
      });
    });
    _defineProperty(this, "_gaCommandSendPageview", function (page, fieldsObject) {
      if (fieldsObject && Object.keys(fieldsObject).length) {
        var _this$_toGtagOptions = _this._toGtagOptions(fieldsObject),
          title = _this$_toGtagOptions.title,
          location = _this$_toGtagOptions.location,
          rest = _objectWithoutProperties(_this$_toGtagOptions, _excluded2);
        _this._gtag("event", "page_view", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, page && {
          page_path: page
        }), title && {
          page_title: title
        }), location && {
          page_location: location
        }), rest));
      } else if (page) {
        _this._gtag("event", "page_view", {
          page_path: page
        });
      } else {
        _this._gtag("event", "page_view");
      }
    });
    _defineProperty(this, "_gaCommandSendPageviewParameters", function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (typeof args[0] === "string") {
        _this._gaCommandSendPageview.apply(_this, _toConsumableArray(args.slice(1)));
      } else {
        var _args$2 = args[0],
          page = _args$2.page,
          hitType = _args$2.hitType,
          rest = _objectWithoutProperties(_args$2, _excluded3);
        _this._gaCommandSendPageview(page, rest);
      }
    });
    _defineProperty(this, "_gaCommandSend", function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var hitType = typeof args[0] === "string" ? args[0] : args[0].hitType;
      switch (hitType) {
        case "event":
          _this._gaCommandSendEventParameters.apply(_this, args);
          break;
        case "pageview":
          _this._gaCommandSendPageviewParameters.apply(_this, args);
          break;
        case "timing":
          _this._gaCommandSendTiming.apply(_this, _toConsumableArray(args.slice(1)));
          break;
        case "screenview":
        case "transaction":
        case "item":
        case "social":
        case "exception":
          console.warn("Unsupported send command: ".concat(hitType));
          break;
        default:
          console.warn("Send command doesn't exist: ".concat(hitType));
      }
    });
    _defineProperty(this, "_gaCommandSet", function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      if (typeof args[0] === "string") {
        args[0] = _defineProperty({}, args[0], args[1]);
      }
      _this._gtag("set", _this._toGtagOptions(args[0]));
    });
    _defineProperty(this, "_gaCommand", function (command) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      switch (command) {
        case "send":
          _this._gaCommandSend.apply(_this, args);
          break;
        case "set":
          _this._gaCommandSet.apply(_this, args);
          break;
        default:
          console.warn("Command doesn't exist: ".concat(command));
      }
    });
    _defineProperty(this, "ga", function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      if (typeof args[0] === "string") {
        _this._gaCommand.apply(_this, args);
      } else {
        var readyCallback = args[0];
        _this._gtag("get", _this._currentMeasurementId, "client_id", function (clientId) {
          _this._isQueuing = false;
          var queues = _this._queueGtag;
          readyCallback({
            get: function get(property) {
              return property === "clientId" ? clientId : property === "trackingId" ? _this._currentMeasurementId : property === "apiVersion" ? "1" : undefined;
            }
          });
          while (queues.length) {
            var queue = queues.shift();
            _this._gtag.apply(_this, _toConsumableArray(queue));
          }
        });
        _this._isQueuing = true;
      }
      return _this.ga;
    });
    _defineProperty(this, "event", function (optionsOrName, params) {
      if (typeof optionsOrName === "string") {
        _this._gtag("event", optionsOrName, _this._toGtagOptions(params));
      } else {
        var action = optionsOrName.action,
          category = optionsOrName.category,
          label = optionsOrName.label,
          value = optionsOrName.value,
          nonInteraction = optionsOrName.nonInteraction,
          transport = optionsOrName.transport;
        if (!category || !action) {
          console.warn("args.category AND args.action are required in event()");
          return;
        }

        // Required Fields
        var fieldObject = {
          hitType: "event",
          eventCategory: (0, _format["default"])(category),
          eventAction: (0, _format["default"])(action)
        };

        // Optional Fields
        if (label) {
          fieldObject.eventLabel = (0, _format["default"])(label);
        }
        if (typeof value !== "undefined") {
          if (typeof value !== "number") {
            console.warn("Expected `args.value` arg to be a Number.");
          } else {
            fieldObject.eventValue = value;
          }
        }
        if (typeof nonInteraction !== "undefined") {
          if (typeof nonInteraction !== "boolean") {
            console.warn("`args.nonInteraction` must be a boolean.");
          } else {
            fieldObject.nonInteraction = nonInteraction;
          }
        }
        if (typeof transport !== "undefined") {
          if (typeof transport !== "string") {
            console.warn("`args.transport` must be a string.");
          } else {
            if (["beacon", "xhr", "image"].indexOf(transport) === -1) {
              console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`");
            }
            fieldObject.transport = transport;
          }
        }
        _this._gaCommand("send", fieldObject);
      }
    });
    _defineProperty(this, "send", function (fieldObject) {
      _this._gaCommand("send", fieldObject);
    });
    this.reset();
  }
  _createClass(GA4, [{
    key: "gtag",
    value: function gtag() {
      this._gtag.apply(this, arguments);
    }
  }]);
  return GA4;
}();
exports.GA4 = GA4;
var _default = new GA4();
exports["default"] = _default;

/***/ }),

/***/ "voWo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var gtag = function gtag() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof window !== "undefined") {
    var _window;
    if (typeof window.gtag === "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }
    (_window = window).gtag.apply(_window, args);
  }
};
var _default = gtag;
exports["default"] = _default;

/***/ }),

/***/ "yjbg":
/***/ (function(module, exports) {

var PRERENDER_DATA_FILE_NAME = 'preact_prerender_data.json';
module.exports = {
  PRERENDER_DATA_FILE_NAME: PRERENDER_DATA_FILE_NAME
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map