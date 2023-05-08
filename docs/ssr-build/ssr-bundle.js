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

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

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
/* harmony default export */ var style = ({"title":"title__I4umU","subtitle":"subtitle__0gF3H"});
// CONCATENATED MODULE: ./components/header/index.tsx



var header_Header = function Header() {
  return Object(external_preact_["h"])("header", null, Object(external_preact_["h"])("h1", {
    class: style.title
  }, "Akifumi Akazawa(Tomiyama)"), Object(external_preact_["h"])("p", {
    class: style.subtitle
  }, "Software Engineer skilled in Web Application and Data Engineering."), Object(external_preact_["h"])("nav", null, Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, Object(external_preact_["h"])(preact_router_es_Link, {
    class: "fa-solid fa-terminal",
    href: "/"
  }, Object(external_preact_["h"])("span", {
    class: style.label
  }, "Terminal"))), Object(external_preact_["h"])("li", null, Object(external_preact_["h"])("a", {
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
// CONCATENATED MODULE: ./components/terminal/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var terminal_style = ({"terminal":"terminal__Ns8FN","welcome":"welcome__8TTjf","activeprompt":"activeprompt__-RKgw","prompt":"prompt__wX4A9","command":"command__JBFdT"});
// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  f = [],
  c = [],
  e = external_preact_["options"].__b,
  a = external_preact_["options"].__r,
  v = external_preact_["options"].diffed,
  l = external_preact_["options"].__c,
  m = external_preact_["options"].unmount;
function d(t, u) {
  external_preact_["options"].__h && external_preact_["options"].__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
  var i = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
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
function _(n) {
  return hooks_module_o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
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
function q(n) {
  var u = hooks_module_r.context[n.__c],
    i = d(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function x(t, r) {
  external_preact_["options"].useDebugValue && external_preact_["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
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
  hooks_module_r = null, e && e(n);
}, external_preact_["options"].__r = function (n) {
  a && a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), hooks_module_u = hooks_module_r;
}, external_preact_["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && hooks_module_i === external_preact_["options"].requestAnimationFrame || ((hooks_module_i = external_preact_["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
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
  }), l && l(t, r);
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

// CONCATENATED MODULE: ./components/terminal/cmd/useCmd.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCmd_useCmd = function useCmd() {
  // To scroll to bottom of terminal when new command is entered
  var formRef = _(null);
  p(function () {
    return formRef.current.scrollIntoView({
      behavior: "smooth"
    });
  });

  // To restore history when user presses up/down arrow keys
  var _useState = h([]),
    _useState2 = _slicedToArray(_useState, 2),
    results = _useState2[0],
    setResults = _useState2[1];
  var _useState3 = h(0),
    _useState4 = _slicedToArray(_useState3, 2),
    historyIndex = _useState4[0],
    setHistoryIndex = _useState4[1];
  var inputRef = _(null);
  p(function () {
    return inputRef.current.focus();
  }, []);
  var inputValueMemo = _('');
  p(function () {
    var handleKeyDown = function handleKeyDown(e) {
      // formにフォーカスがない状態でEnterが押されたらformのinputにフォーカスする
      if (e.key === 'Enter' && document.activeElement !== inputRef.current) {
        var _inputRef$current;
        e.preventDefault();
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      }

      // historyIndexが最大値のときその時点でのinputの値をinputValueMemoに保存する
      if (historyIndex === results.length) {
        var _inputRef$current2;
        inputValueMemo.current = ((_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.value) || '';
      }
      // 上下矢印キーで履歴を遡れるようにする
      if (e.key === 'ArrowUp') {
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
      if (e.key === 'ArrowDown') {
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
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [results, historyIndex]);
  var handleExecCmd = function handleExecCmd(input) {
    console.log(input);
    var command = input.split(' ')[0];
    var args = input.split(' ').slice(1);
    if (command === 'clear') {
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
/* harmony default export */ var cmd_style = ({"output":"output__Y6snD","error":"error__HYsFw","experience":"experience__mujx-","title":"title__UtO8N","description":"description__DD9lX"});
// CONCATENATED MODULE: ./components/terminal/cmd/help.tsx


var help_CommandHelp = function CommandHelp() {
  return Object(external_preact_["h"])("div", {
    class: cmd_style.output
  }, Object(external_preact_["h"])("div", {
    class: cmd_style.section
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, "Available Commands :"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "help -- List of available commands"), Object(external_preact_["h"])("li", null, "experience -- List of professional experiences"), Object(external_preact_["h"])("li", null, "skills -- List of skills(Not Implemented)"), Object(external_preact_["h"])("li", null, "education -- List of education(Not Implemented)"), Object(external_preact_["h"])("li", null, "contact -- List of contact information(Not Implemented)"), Object(external_preact_["h"])("li", null, "activity -- List of activities and interests(Not Implemented)"))), Object(external_preact_["h"])("div", {
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
    class: cmd_style.output
  }, Object(external_preact_["h"])("strong", null, "Professional Experience :"), Object(external_preact_["h"])("div", {
    class: cmd_style.experience
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "1) Customer Reliability Engineer"), ", Studyplus,Inc. Tokyo,Japan (2022/05 ~ Now)"), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "A first member of the team. Decrease Customer's anxiety and increase Customer's satisfaction by improving the reliability of the service."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Building Data Pipeline and Data Warehouse(~500 tables, 1billion records)"), Object(external_preact_["h"])("li", null, "Implement system to detect messages between users that violate the terms of service.(1M messages/month)"))), Object(external_preact_["h"])("div", {
    class: cmd_style.experience
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "2) Team Leader"), ", Studyplus,Inc. Tokyo,Japan (2020/01 ~ Now)"), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "As a team leader of 9 people web application group, I have lead the team to deliver features in educational field. Examples of actions I have taken are as follows."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Create a career ladder to clarify the career goals and current status of the members"), Object(external_preact_["h"])("li", null, "Introduced scrum development and reduced project delays"))), Object(external_preact_["h"])("div", {
    class: cmd_style.experience
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "3) Back-End Engineer"), ", Studyplus,Inc. Tokyo,Japan (2018/09 ~ 2020/12)"), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "As part of B2B SaaS Web Application Team, I have delivered features to improve the learning efficiency of students and teachers."), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "Migrate monolith Ruby on Rails App into REST API and React SPA"), Object(external_preact_["h"])("li", null, "Introduce Schema Driven Development process"), Object(external_preact_["h"])("li", null, "Implement front-end and back-end across ambiguous systems and environment"))), Object(external_preact_["h"])("div", {
    class: cmd_style.experience
  }, Object(external_preact_["h"])("p", {
    class: cmd_style.title
  }, Object(external_preact_["h"])("strong", null, "4) System Engineer"), ", Technobrain ,Inc. Tokyo,Japan (2017/09 ~ 2018/08)"), Object(external_preact_["h"])("p", {
    class: cmd_style.description
  }, "As a system engineer of contract software development team, I have developed a internal use buisiness operation web application.")));
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
  }, Object(external_preact_["h"])("p", null, "Hello, there!"), Object(external_preact_["h"])("p", null, "Welcome to atomiyama's CLI resume."), Object(external_preact_["h"])("p", null, "Type \"help\" to see the list of available commands.")), commandProps.map(function (props, i) {
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
// CONCATENATED MODULE: ./routes/posts/index.tsx

var posts_Posts = function Posts() {
  return Object(external_preact_["h"])("h1", null, "Posts");
};
/* harmony default export */ var posts = (posts_Posts);
// CONCATENATED MODULE: ./components/app.tsx




// Code-splitting is automated for `routes` directory


var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(header_Header, null), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(preact_router_es_Route, {
    path: "/",
    component: home
  }), Object(external_preact_["h"])(preact_router_es_Route, {
    path: "/posts",
    component: posts
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.ts


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map