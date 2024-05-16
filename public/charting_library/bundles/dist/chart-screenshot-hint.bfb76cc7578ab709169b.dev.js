"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[92], {
  45350: function _(e) {
    e.exports = {
      "nav-button": "nav-button-znwuaSC1",
      link: "link-znwuaSC1",
      background: "background-znwuaSC1",
      icon: "icon-znwuaSC1",
      "flip-icon": "flip-icon-znwuaSC1",
      "size-large": "size-large-znwuaSC1",
      "preserve-paddings": "preserve-paddings-znwuaSC1",
      "size-medium": "size-medium-znwuaSC1",
      "size-small": "size-small-znwuaSC1",
      "size-xsmall": "size-xsmall-znwuaSC1",
      "size-xxsmall": "size-xxsmall-znwuaSC1",
      "visually-hidden": "visually-hidden-znwuaSC1"
    };
  },
  48535: function _(e) {
    e.exports = {
      container: "container-TCHLKPuQ",
      "container-danger": "container-danger-TCHLKPuQ",
      "light-title": "light-title-TCHLKPuQ",
      "light-icon": "light-icon-TCHLKPuQ",
      icon: "icon-TCHLKPuQ",
      header: "header-TCHLKPuQ",
      "light-container-danger": "light-container-danger-TCHLKPuQ",
      "container-warning": "container-warning-TCHLKPuQ",
      "light-container-warning": "light-container-warning-TCHLKPuQ",
      "container-success": "container-success-TCHLKPuQ",
      "light-container-success": "light-container-success-TCHLKPuQ",
      "container-default": "container-default-TCHLKPuQ",
      "light-container-default": "light-container-default-TCHLKPuQ",
      "text-wrap": "text-wrap-TCHLKPuQ",
      "light-text-wrap": "light-text-wrap-TCHLKPuQ",
      "close-button": "close-button-TCHLKPuQ",
      "light-close-button": "light-close-button-TCHLKPuQ",
      informerBody: "informerBody-TCHLKPuQ",
      mainProblem: "mainProblem-TCHLKPuQ",
      "header-inline": "header-inline-TCHLKPuQ",
      "header-new-line": "header-new-line-TCHLKPuQ"
    };
  },
  44777: function _(e) {
    e.exports = {
      container: "container-Q8oybhDM",
      centerElement: "centerElement-Q8oybhDM",
      notice: "notice-Q8oybhDM",
      noticeShowed: "noticeShowed-Q8oybhDM"
    };
  },
  64388: function _(e, t, n) {
    "use strict";

    n.d(t, {
      NavButton: function NavButton() {
        return c;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n(9745),
        a = n(45350);

    function s(e) {
      var _e$size = e.size,
          t = _e$size === void 0 ? "large" : _e$size,
          n = e.preservePaddings,
          r = e.isLink,
          i = e.flipIconOnRtl,
          s = e.className;
      return o(a["nav-button"], a["size-".concat(t)], n && a["preserve-paddings"], i && a["flip-icon"], r && a.link, s);
    }

    function u(e) {
      var t = e.children,
          n = e.icon;
      return r.createElement(r.Fragment, null, r.createElement("span", {
        className: a.background
      }), r.createElement(i.Icon, {
        icon: n,
        className: a.icon,
        "aria-hidden": !0
      }), t && r.createElement("span", {
        className: a["visually-hidden"]
      }, t));
    }

    var c = (0, r.forwardRef)(function (e, t) {
      var n = e.icon,
          _e$type = e.type,
          o = _e$type === void 0 ? "button" : _e$type,
          i = e.preservePaddings,
          a = e.flipIconOnRtl,
          c = e.size,
          l = e["aria-label"],
          f = _objectWithoutProperties(e, ["icon", "type", "preservePaddings", "flipIconOnRtl", "size", "aria-label"]);

      return r.createElement("button", _objectSpread({}, f, {
        className: s(_objectSpread({}, e, {
          children: l
        })),
        ref: t,
        type: o
      }), r.createElement(u, {
        icon: n
      }, l));
    });
    c.displayName = "NavButton";
    var l = n(21593),
        f = n(53017);
    (0, r.forwardRef)(function (e, t) {
      var n = e.icon,
          o = e.renderComponent,
          i = e["aria-label"],
          a = _objectWithoutProperties(e, ["icon", "renderComponent", "aria-label"]),
          c = null != o ? o : l.CustomComponentDefaultLink;

      return r.createElement(c, _objectSpread({}, a, {
        className: s(_objectSpread({}, e, {
          children: i,
          isLink: !0
        })),
        reference: (0, f.isomorphicRef)(t)
      }), r.createElement(u, {
        icon: n
      }, i));
    }).displayName = "NavAnchorButton";
  },
  38952: function _(e, t, n) {
    "use strict";

    function r(e) {
      var t = e.reference,
          n = _objectWithoutProperties(e, ["reference"]);

      return _objectSpread({}, n, {
        ref: t
      });
    }

    n.d(t, {
      renameRef: function renameRef() {
        return r;
      }
    });
  },
  21593: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CustomComponentDefaultLink: function CustomComponentDefaultLink() {
        return i;
      }
    });
    var r = n(50959),
        o = n(38952);

    function i(e) {
      return r.createElement("a", _objectSpread({}, (0, o.renameRef)(e)));
    }

    r.PureComponent;
  },
  9745: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Icon: function Icon() {
        return o;
      }
    });
    var r = n(50959);
    var o = r.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          n = _e$icon === void 0 ? "" : _e$icon,
          o = _objectWithoutProperties(e, ["icon"]);

      return r.createElement("span", _objectSpread({}, o, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: n
        }
      }));
    });
  },
  90186: function _(e, t, n) {
    "use strict";

    function r(e) {
      return i(e, a);
    }

    function o(e) {
      return i(e, s);
    }

    function i(e, t) {
      var n = Object.entries(e).filter(t),
          r = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e = _step$value[0],
              _t = _step$value[1];

          r[_e] = _t;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return r;
    }

    function a(e) {
      var _e2 = _slicedToArray(e, 2),
          t = _e2[0],
          n = _e2[1];

      return 0 === t.indexOf("data-") && "string" == typeof n;
    }

    function s(e) {
      return 0 === e[0].indexOf("aria-");
    }

    n.d(t, {
      filterAriaProps: function filterAriaProps() {
        return o;
      },
      filterDataProps: function filterDataProps() {
        return r;
      },
      filterProps: function filterProps() {
        return i;
      },
      isAriaAttribute: function isAriaAttribute() {
        return s;
      },
      isDataAttribute: function isDataAttribute() {
        return a;
      }
    });
  },
  53017: function _(e, t, n) {
    "use strict";

    function r(e) {
      return function (t) {
        e.forEach(function (e) {
          "function" == typeof e ? e(t) : null != e && (e.current = t);
        });
      };
    }

    function o(e) {
      return r([e]);
    }

    n.d(t, {
      isomorphicRef: function isomorphicRef() {
        return o;
      },
      mergeRefs: function mergeRefs() {
        return r;
      }
    });
  },
  60441: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      ChartScreenshotHintRenderer: function ChartScreenshotHintRenderer() {
        return P;
      }
    });
    var r = n(50959),
        o = n(962),
        i = n(12481),
        a = n(97754),
        s = n(9745),
        u = n(64388),
        c = n(17105),
        l = n(15130),
        f = n(38822),
        d = n(63346),
        p = n(34983);

    function h() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "large";

      switch (e) {
        case "large":
          return c;

        case "medium":
        default:
          return l;

        case "small":
          return f;

        case "xsmall":
          return d;

        case "xxsmall":
          return p;
      }
    }

    var m = r.forwardRef(function (e, t) {
      return r.createElement(u.NavButton, _objectSpread({}, e, {
        ref: t,
        icon: h(e.size)
      }));
    });
    var w = n(90186),
        g = n(30162),
        y = n(27941),
        v = n(99084),
        b = n(48535),
        C = n.n(b);
    var _ = {
      danger: g,
      warning: g,
      success: v,
      "default": y
    };

    function x(e) {
      var t = e.informerIntent,
          n = e.content,
          o = e.className,
          i = e.header,
          _e$isIconShown = e.isIconShown,
          u = _e$isIconShown === void 0 ? !0 : _e$isIconShown,
          c = e.isCloseButtonShown,
          l = e.icon,
          f = e.onCloseClick,
          _e$closeButtonLabel = e.closeButtonLabel,
          d = _e$closeButtonLabel === void 0 ? "Close" : _e$closeButtonLabel,
          _e$headerPlacement = e.headerPlacement,
          p = _e$headerPlacement === void 0 ? "inline" : _e$headerPlacement,
          h = e.children,
          g = e.isLight;
      return r.createElement("div", _objectSpread({
        className: a(C().container, C()["container-".concat(t)], g && C()["light-container-".concat(t)], o)
      }, (0, w.filterDataProps)(e), {}, (0, w.filterAriaProps)(e)), r.createElement("div", {
        className: C().informerBody
      }, n && r.createElement("div", {
        className: C().mainProblem
      }, u && r.createElement(s.Icon, {
        className: a(C().icon, g && C()["light-icon"]),
        icon: null != l ? l : _[t]
      }), r.createElement("div", {
        className: a(C()["text-wrap"], g && C()["light-text-wrap"])
      }, i && r.createElement("span", {
        className: a(g && C()["light-title"], C().header, C()["header-".concat(g ? "new-line" : p)])
      }, i), r.createElement("span", null, " ", n))), h), c && r.createElement(m, {
        "aria-label": d,
        onClick: f,
        className: a(g && C()["light-close-button"], C()["close-button"]),
        size: g ? "xxsmall" : "xsmall",
        preservePaddings: !g
      }));
    }

    var E = n(44777);

    function S(e) {
      var t = e.text,
          n = e.style,
          o = e.hideTimeout,
          _e$informerIntent = e.informerIntent,
          i = _e$informerIntent === void 0 ? "success" : _e$informerIntent,
          s = function (e) {
        var _ref = (0, r.useState)(!1),
            _ref2 = _slicedToArray(_ref, 2),
            t = _ref2[0],
            n = _ref2[1];

        return (0, r.useLayoutEffect)(function () {
          var t = setTimeout(function () {
            return n(!0);
          }, 50),
              r = setTimeout(function () {
            return n(!1);
          }, null != e ? e : 2500);
          return function () {
            clearTimeout(t), clearTimeout(r);
          };
        }, []), t;
      }(o);

      return r.createElement("div", {
        className: E.container,
        style: n
      }, r.createElement("div", {
        className: E.centerElement
      }, r.createElement(x, {
        content: t,
        informerIntent: i,
        className: a(E.notice, s && E.noticeShowed)
      })));
    }

    var P =
    /*#__PURE__*/
    function () {
      function P(e, t) {
        var _this = this;

        _classCallCheck(this, P);

        this._showed = !1, this._wrap = document.createElement("div"), this._container = e, this._debouncedHide = (0, i["default"])(function () {
          return _this.hide();
        }, 3e3), this._bottomPadding = t.bottomPadding;
      }

      _createClass(P, [{
        key: "show",
        value: function show(e) {
          this._wrap && !this._showed && (this._showed = !0, this._container.append(this._wrap), o.render(r.createElement(S, {
            text: e,
            style: this._bottomPadding ? {
              bottom: 70
            } : void 0
          }), this._wrap), this._debouncedHide());
        }
      }, {
        key: "hide",
        value: function hide() {
          this._wrap && (this._showed = !1, o.unmountComponentAtNode(this._wrap), this._wrap.remove());
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.hide(), delete this._wrap;
        }
      }]);

      return P;
    }();
  },
  95257: function _(e, t) {
    "use strict";

    var n = Symbol["for"]("react.element"),
        r = Symbol["for"]("react.portal"),
        o = Symbol["for"]("react.fragment"),
        i = Symbol["for"]("react.strict_mode"),
        a = Symbol["for"]("react.profiler"),
        s = Symbol["for"]("react.provider"),
        u = Symbol["for"]("react.context"),
        c = Symbol["for"]("react.forward_ref"),
        l = Symbol["for"]("react.suspense"),
        f = Symbol["for"]("react.memo"),
        d = Symbol["for"]("react.lazy"),
        p = Symbol.iterator;
    var h = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        m = Object.assign,
        w = {};

    function g(e, t, n) {
      this.props = e, this.context = t, this.refs = w, this.updater = n || h;
    }

    function y() {}

    function v(e, t, n) {
      this.props = e, this.context = t, this.refs = w, this.updater = n || h;
    }

    g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, g.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, y.prototype = g.prototype;
    var b = v.prototype = new y();
    b.constructor = v, m(b, g.prototype), b.isPureReactComponent = !0;
    var C = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        x = {
      current: null
    },
        E = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function S(e, t, r) {
      var o,
          i = {},
          a = null,
          s = null;
      if (null != t) for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) {
        _.call(t, o) && !E.hasOwnProperty(o) && (i[o] = t[o]);
      }
      var u = arguments.length - 2;
      if (1 === u) i.children = r;else if (1 < u) {
        for (var c = Array(u), l = 0; l < u; l++) {
          c[l] = arguments[l + 2];
        }

        i.children = c;
      }
      if (e && e.defaultProps) for (o in u = e.defaultProps) {
        void 0 === i[o] && (i[o] = u[o]);
      }
      return {
        $$typeof: n,
        type: e,
        key: a,
        ref: s,
        props: i,
        _owner: x.current
      };
    }

    function P(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === n;
    }

    var k = /\/+/g;

    function L(e, t) {
      return "object" == _typeof(e) && null !== e && null != e.key ? function (e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function (e) {
          return t[e];
        });
      }("" + e.key) : t.toString(36);
    }

    function R(e, t, o, i, a) {
      var s = _typeof(e);

      "undefined" !== s && "boolean" !== s || (e = null);
      var u = !1;
      if (null === e) u = !0;else switch (s) {
        case "string":
        case "number":
          u = !0;
          break;

        case "object":
          switch (e.$$typeof) {
            case n:
            case r:
              u = !0;
          }

      }
      if (u) return a = a(u = e), e = "" === i ? "." + L(u, 0) : i, C(a) ? (o = "", null != e && (o = e.replace(k, "$&/") + "/"), R(a, t, o, "", function (e) {
        return e;
      })) : null != a && (P(a) && (a = function (e, t) {
        return {
          $$typeof: n,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(a, o + (!a.key || u && u.key === a.key ? "" : ("" + a.key).replace(k, "$&/") + "/") + e)), t.push(a)), 1;
      if (u = 0, i = "" === i ? "." : i + ":", C(e)) for (var c = 0; c < e.length; c++) {
        var l = i + L(s = e[c], c);
        u += R(s, t, o, l, a);
      } else if (l = function (e) {
        return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
      }(e), "function" == typeof l) for (e = l.call(e), c = 0; !(s = e.next()).done;) {
        u += R(s = s.value, t, o, l = i + L(s, c++), a);
      } else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return u;
    }

    function T(e, t, n) {
      if (null == e) return e;
      var r = [],
          o = 0;
      return R(e, r, "", "", function (e) {
        return t.call(n, e, o++);
      }), r;
    }

    function z(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(function (t) {
          0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t);
        }, function (t) {
          0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t);
        }), -1 === e._status && (e._status = 0, e._result = t);
      }

      if (1 === e._status) return e._result["default"];
      throw e._result;
    }

    var N = {
      current: null
    },
        H = {
      transition: null
    },
        $ = {
      ReactCurrentDispatcher: N,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: x
    };
    t.Children = {
      map: T,
      forEach: function forEach(e, t, n) {
        T(e, function () {
          t.apply(this, arguments);
        }, n);
      },
      count: function count(e) {
        var t = 0;
        return T(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return T(e, function (e) {
          return e;
        }) || [];
      },
      only: function only(e) {
        if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    }, t.Component = g, t.Fragment = o, t.Profiler = a, t.PureComponent = v, t.StrictMode = i, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, t.cloneElement = function (e, t, r) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var o = m({}, e.props),
          i = e.key,
          a = e.ref,
          s = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (a = t.ref, s = x.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;

        for (c in t) {
          _.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
        }
      }

      var c = arguments.length - 2;
      if (1 === c) o.children = r;else if (1 < c) {
        u = Array(c);

        for (var l = 0; l < c; l++) {
          u[l] = arguments[l + 2];
        }

        o.children = u;
      }
      return {
        $$typeof: n,
        type: e.type,
        key: i,
        ref: a,
        props: o,
        _owner: s
      };
    }, t.createContext = function (e) {
      return (e = {
        $$typeof: u,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }).Provider = {
        $$typeof: s,
        _context: e
      }, e.Consumer = e;
    }, t.createElement = S, t.createFactory = function (e) {
      var t = S.bind(null, e);
      return t.type = e, t;
    }, t.createRef = function () {
      return {
        current: null
      };
    }, t.forwardRef = function (e) {
      return {
        $$typeof: c,
        render: e
      };
    }, t.isValidElement = P, t.lazy = function (e) {
      return {
        $$typeof: d,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: z
      };
    }, t.memo = function (e, t) {
      return {
        $$typeof: f,
        type: e,
        compare: void 0 === t ? null : t
      };
    }, t.startTransition = function (e) {
      var t = H.transition;
      H.transition = {};

      try {
        e();
      } finally {
        H.transition = t;
      }
    }, t.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }, t.useCallback = function (e, t) {
      return N.current.useCallback(e, t);
    }, t.useContext = function (e) {
      return N.current.useContext(e);
    }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
      return N.current.useDeferredValue(e);
    }, t.useEffect = function (e, t) {
      return N.current.useEffect(e, t);
    }, t.useId = function () {
      return N.current.useId();
    }, t.useImperativeHandle = function (e, t, n) {
      return N.current.useImperativeHandle(e, t, n);
    }, t.useInsertionEffect = function (e, t) {
      return N.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect = function (e, t) {
      return N.current.useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return N.current.useMemo(e, t);
    }, t.useReducer = function (e, t, n) {
      return N.current.useReducer(e, t, n);
    }, t.useRef = function (e) {
      return N.current.useRef(e);
    }, t.useState = function (e) {
      return N.current.useState(e);
    }, t.useSyncExternalStore = function (e, t, n) {
      return N.current.useSyncExternalStore(e, t, n);
    }, t.useTransition = function () {
      return N.current.useTransition();
    }, t.version = "18.2.0";
  },
  50959: function _(e, t, n) {
    "use strict";

    e.exports = n(95257);
  },
  99084: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>';
  },
  30162: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>';
  },
  27941: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>';
  },
  17105: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>';
  },
  15130: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>';
  },
  38822: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>';
  },
  63346: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>';
  },
  34983: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>';
  }
}]);