"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[9039], {
  59142: function _(e, t) {
    var n, o, r;
    o = [t], n = function n(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = !1;

      if ("undefined" != typeof window) {
        var o = {
          get passive() {
            n = !0;
          }

        };
        window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o);
      }

      var r = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          l = [],
          i = !1,
          a = -1,
          c = void 0,
          s = void 0,
          u = function u(e) {
        return l.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          d = function d(e) {
        var t = e || window.event;
        return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          f = function f() {
        setTimeout(function () {
          void 0 !== s && (document.body.style.paddingRight = s, s = void 0), void 0 !== c && (document.body.style.overflow = c, c = void 0);
        });
      };

      e.disableBodyScroll = function (e, o) {
        if (r) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !l.some(function (t) {
            return t.targetElement === e;
          })) {
            var f = {
              targetElement: e,
              options: o || {}
            };
            l = [].concat(t(l), [f]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (a = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var n, o, r, l;
              1 === t.targetTouches.length && (o = e, l = (n = t).targetTouches[0].clientY - a, !u(n.target) && (o && 0 === o.scrollTop && 0 < l || (r = o) && r.scrollHeight - r.scrollTop <= r.clientHeight && l < 0 ? d(n) : n.stopPropagation()));
            }, i || (document.addEventListener("touchmove", d, n ? {
              passive: !1
            } : void 0), i = !0);
          }
        } else {
          m = o, setTimeout(function () {
            if (void 0 === s) {
              var e = !!m && !0 === m.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (s = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === c && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var p = {
            targetElement: e,
            options: o || {}
          };
          l = [].concat(t(l), [p]);
        }

        var m;
      }, e.clearAllBodyScrollLocks = function () {
        r ? (l.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), i && (document.removeEventListener("touchmove", d, n ? {
          passive: !1
        } : void 0), i = !1), l = [], a = -1) : (f(), l = []);
      }, e.enableBodyScroll = function (e) {
        if (r) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, l = l.filter(function (t) {
            return t.targetElement !== e;
          }), i && 0 === l.length && (document.removeEventListener("touchmove", d, n ? {
            passive: !1
          } : void 0), i = !1);
        } else 1 === l.length && l[0].targetElement === e ? (f(), l = []) : l = l.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (r = "function" == typeof n ? n.apply(t, o) : n) || (e.exports = r);
  },
  66076: function _(e) {
    e.exports = {
      "default-drawer-min-top-distance": "100px",
      wrap: "wrap-_HnK0UIN",
      positionBottom: "positionBottom-_HnK0UIN",
      backdrop: "backdrop-_HnK0UIN",
      drawer: "drawer-_HnK0UIN",
      positionLeft: "positionLeft-_HnK0UIN"
    };
  },
  27267: function _(e, t, n) {
    "use strict";

    function o(e, t, n, o, r) {
      function l(r) {
        if (e > r.timeStamp) return;
        var l = r.target;
        void 0 !== n && null !== t && null !== l && l.ownerDocument === o && (t.contains(l) || n(r));
      }

      return r.click && o.addEventListener("click", l, !1), r.mouseDown && o.addEventListener("mousedown", l, !1), r.touchEnd && o.addEventListener("touchend", l, !1), r.touchStart && o.addEventListener("touchstart", l, !1), function () {
        o.removeEventListener("click", l, !1), o.removeEventListener("mousedown", l, !1), o.removeEventListener("touchend", l, !1), o.removeEventListener("touchstart", l, !1);
      };
    }

    n.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return o;
      }
    });
  },
  37558: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DrawerContext: function DrawerContext() {
        return i;
      },
      DrawerManager: function DrawerManager() {
        return l;
      }
    });
    var o = n(50959),
        r = n(99054);

    var l =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(l, _o$PureComponent);

      function l(e) {
        var _this;

        _classCallCheck(this, l);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, e)), _this._isBodyFixed = !1, _this._addDrawer = function (e) {
          _this.setState(function (t) {
            return {
              stack: [].concat(_toConsumableArray(t.stack), [e])
            };
          });
        }, _this._removeDrawer = function (e) {
          _this.setState(function (t) {
            return {
              stack: t.stack.filter(function (t) {
                return t !== e;
              })
            };
          });
        }, _this.state = {
          stack: []
        };
        return _this;
      }

      _createClass(l, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          !t.stack.length && this.state.stack.length && ((0, r.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, r.setFixedBodyState)(!1), this._isBodyFixed = !1);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.state.stack.length && this._isBodyFixed && (0, r.setFixedBodyState)(!1);
        }
      }, {
        key: "render",
        value: function render() {
          return o.createElement(i.Provider, {
            value: {
              addDrawer: this._addDrawer,
              removeDrawer: this._removeDrawer,
              currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
            }
          }, this.props.children);
        }
      }]);

      return l;
    }(o.PureComponent);

    var i = o.createContext(null);
  },
  41590: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Drawer: function Drawer() {
        return f;
      }
    });
    var o = n(50959),
        r = n(50151),
        l = n(97754),
        i = n(36174),
        a = n(65718),
        c = n(37558),
        s = n(29197),
        u = n(86656),
        d = n(66076);

    function f(e) {
      var _e$position = e.position,
          t = _e$position === void 0 ? "Bottom" : _e$position,
          n = e.onClose,
          u = e.children,
          f = e.className,
          _e$theme = e.theme,
          m = _e$theme === void 0 ? d : _e$theme,
          h = (0, r.ensureNotNull)((0, o.useContext)(c.DrawerContext)),
          _ref = (0, o.useState)(function () {
        return (0, i.randomHash)();
      }),
          _ref2 = _slicedToArray(_ref, 1),
          v = _ref2[0],
          y = (0, o.useRef)(null),
          g = (0, o.useContext)(s.CloseDelegateContext);

      return (0, o.useLayoutEffect)(function () {
        return (0, r.ensureNotNull)(y.current).focus({
          preventScroll: !0
        }), g.subscribe(h, n), h.addDrawer(v), function () {
          h.removeDrawer(v), g.unsubscribe(h, n);
        };
      }, []), o.createElement(a.Portal, null, o.createElement("div", {
        className: l(d.wrap, d["position".concat(t)])
      }, v === h.currentDrawer && o.createElement("div", {
        className: d.backdrop,
        onClick: n
      }), o.createElement(p, {
        className: l(m.drawer, d["position".concat(t)], f),
        ref: y,
        "data-name": e["data-name"]
      }, u)));
    }

    var p = (0, o.forwardRef)(function (e, t) {
      var n = e.className,
          r = _objectWithoutProperties(e, ["className"]);

      return o.createElement(u.TouchScrollContainer, _objectSpread({
        className: l(d.drawer, n),
        tabIndex: -1,
        ref: t
      }, r));
    });
  },
  20520: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupMenu: function PopupMenu() {
        return f;
      }
    });
    var o = n(50959),
        r = n(962),
        l = n(62942),
        i = n(65718),
        a = n(27317),
        c = n(29197);
    var s = o.createContext(void 0);
    var u = n(36383);
    var d = o.createContext({
      setMenuMaxWidth: !1
    });

    function f(e) {
      var t = e.controller,
          n = e.children,
          f = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          p = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          m = e.doNotCloseOn,
          h = e.onClickOutside,
          v = e.onClose,
          y = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          g = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          b = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          E = (0, o.useContext)(c.CloseDelegateContext),
          w = o.useContext(d),
          C = (0, o.useContext)(s),
          k = (0, u.useOutsideEvent)({
        handler: function handler(e) {
          h && h(e);
          if (!p) return;
          var t = (0, l["default"])(m) ? m() : null == m ? [] : [m];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _n2 = _step.value;

                var _t = r.findDOMNode(_n2);

                if (_t instanceof Node && _t.contains(e.target)) return;
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
          }

          v();
        },
        mouseDown: !0,
        touchStart: !0
      });

      return f ? o.createElement(i.Portal, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        pointerEvents: "none"
      }, o.createElement("span", {
        ref: k,
        style: {
          pointerEvents: "auto"
        }
      }, o.createElement(a.Menu, _objectSpread({}, b, {
        onClose: v,
        onKeyboardClose: y,
        onScroll: function onScroll(t) {
          var n = e.onScroll;
          n && n(t);
        },
        customCloseDelegate: E,
        customRemeasureDelegate: C,
        ref: t,
        "data-name": g,
        limitMaxWidth: w.setMenuMaxWidth
      }), n))) : null;
    }
  },
  86656: function _(e, t, n) {
    "use strict";

    n.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return a;
      }
    });
    var o = n(50959),
        r = n(59142),
        l = n(50151),
        i = n(49483);
    var a = (0, o.forwardRef)(function (e, t) {
      var n = e.children,
          l = _objectWithoutProperties(e, ["children"]),
          a = (0, o.useRef)(null);

      return (0, o.useImperativeHandle)(t, function () {
        return a.current;
      }), (0, o.useLayoutEffect)(function () {
        if (i.CheckMobile.iOS()) return null !== a.current && (0, r.disableBodyScroll)(a.current, {
          allowTouchMove: c(a)
        }), function () {
          null !== a.current && (0, r.enableBodyScroll)(a.current);
        };
      }, []), o.createElement("div", _objectSpread({
        ref: a
      }, l), n);
    });

    function c(e) {
      return function (t) {
        var n = (0, l.ensureNotNull)(e.current),
            o = document.activeElement;
        return !n.contains(t) || null !== o && n.contains(o) && o.contains(t);
      };
    }
  },
  40173: function _(e, t, n) {
    "use strict";

    function o(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Object.assign({}, e, function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var o = Object.assign({}, t);

        for (var _i2 = 0, _Object$keys = Object.keys(t); _i2 < _Object$keys.length; _i2++) {
          var r = _Object$keys[_i2];
          var l = n[r] || r;
          l in e && (o[r] = [e[l], t[r]].join(" "));
        }

        return o;
      }(e, t, n));
    }

    n.d(t, {
      mergeThemes: function mergeThemes() {
        return o;
      }
    });
  },
  95257: function _(e, t) {
    "use strict";

    var n = Symbol["for"]("react.element"),
        o = Symbol["for"]("react.portal"),
        r = Symbol["for"]("react.fragment"),
        l = Symbol["for"]("react.strict_mode"),
        i = Symbol["for"]("react.profiler"),
        a = Symbol["for"]("react.provider"),
        c = Symbol["for"]("react.context"),
        s = Symbol["for"]("react.forward_ref"),
        u = Symbol["for"]("react.suspense"),
        d = Symbol["for"]("react.memo"),
        f = Symbol["for"]("react.lazy"),
        p = Symbol.iterator;
    var m = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        h = Object.assign,
        v = {};

    function y(e, t, n) {
      this.props = e, this.context = t, this.refs = v, this.updater = n || m;
    }

    function g() {}

    function b(e, t, n) {
      this.props = e, this.context = t, this.refs = v, this.updater = n || m;
    }

    y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, y.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, g.prototype = y.prototype;
    var E = b.prototype = new g();
    E.constructor = b, h(E, y.prototype), E.isPureReactComponent = !0;
    var w = Array.isArray,
        C = Object.prototype.hasOwnProperty,
        k = {
      current: null
    },
        _ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function x(e, t, o) {
      var r,
          l = {},
          i = null,
          a = null;
      if (null != t) for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t) {
        C.call(t, r) && !_.hasOwnProperty(r) && (l[r] = t[r]);
      }
      var c = arguments.length - 2;
      if (1 === c) l.children = o;else if (1 < c) {
        for (var s = Array(c), u = 0; u < c; u++) {
          s[u] = arguments[u + 2];
        }

        l.children = s;
      }
      if (e && e.defaultProps) for (r in c = e.defaultProps) {
        void 0 === l[r] && (l[r] = c[r]);
      }
      return {
        $$typeof: n,
        type: e,
        key: i,
        ref: a,
        props: l,
        _owner: k.current
      };
    }

    function T(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === n;
    }

    var S = /\/+/g;

    function O(e, t) {
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

    function N(e, t, r, l, i) {
      var a = _typeof(e);

      "undefined" !== a && "boolean" !== a || (e = null);
      var c = !1;
      if (null === e) c = !0;else switch (a) {
        case "string":
        case "number":
          c = !0;
          break;

        case "object":
          switch (e.$$typeof) {
            case n:
            case o:
              c = !0;
          }

      }
      if (c) return i = i(c = e), e = "" === l ? "." + O(c, 0) : l, w(i) ? (r = "", null != e && (r = e.replace(S, "$&/") + "/"), N(i, t, r, "", function (e) {
        return e;
      })) : null != i && (T(i) && (i = function (e, t) {
        return {
          $$typeof: n,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(i, r + (!i.key || c && c.key === i.key ? "" : ("" + i.key).replace(S, "$&/") + "/") + e)), t.push(i)), 1;
      if (c = 0, l = "" === l ? "." : l + ":", w(e)) for (var s = 0; s < e.length; s++) {
        var u = l + O(a = e[s], s);
        c += N(a, t, r, u, i);
      } else if (u = function (e) {
        return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
      }(e), "function" == typeof u) for (e = u.call(e), s = 0; !(a = e.next()).done;) {
        c += N(a = a.value, t, r, u = l + O(a, s++), i);
      } else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return c;
    }

    function R(e, t, n) {
      if (null == e) return e;
      var o = [],
          r = 0;
      return N(e, o, "", "", function (e) {
        return t.call(n, e, r++);
      }), o;
    }

    function B(e) {
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

    var M = {
      current: null
    },
        F = {
      transition: null
    },
        D = {
      ReactCurrentDispatcher: M,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: k
    };
    t.Children = {
      map: R,
      forEach: function forEach(e, t, n) {
        R(e, function () {
          t.apply(this, arguments);
        }, n);
      },
      count: function count(e) {
        var t = 0;
        return R(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return R(e, function (e) {
          return e;
        }) || [];
      },
      only: function only(e) {
        if (!T(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    }, t.Component = y, t.Fragment = r, t.Profiler = i, t.PureComponent = b, t.StrictMode = l, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.cloneElement = function (e, t, o) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var r = h({}, e.props),
          l = e.key,
          i = e.ref,
          a = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (i = t.ref, a = k.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;

        for (s in t) {
          C.call(t, s) && !_.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
        }
      }

      var s = arguments.length - 2;
      if (1 === s) r.children = o;else if (1 < s) {
        c = Array(s);

        for (var u = 0; u < s; u++) {
          c[u] = arguments[u + 2];
        }

        r.children = c;
      }
      return {
        $$typeof: n,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: a
      };
    }, t.createContext = function (e) {
      return (e = {
        $$typeof: c,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }).Provider = {
        $$typeof: a,
        _context: e
      }, e.Consumer = e;
    }, t.createElement = x, t.createFactory = function (e) {
      var t = x.bind(null, e);
      return t.type = e, t;
    }, t.createRef = function () {
      return {
        current: null
      };
    }, t.forwardRef = function (e) {
      return {
        $$typeof: s,
        render: e
      };
    }, t.isValidElement = T, t.lazy = function (e) {
      return {
        $$typeof: f,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: B
      };
    }, t.memo = function (e, t) {
      return {
        $$typeof: d,
        type: e,
        compare: void 0 === t ? null : t
      };
    }, t.startTransition = function (e) {
      var t = F.transition;
      F.transition = {};

      try {
        e();
      } finally {
        F.transition = t;
      }
    }, t.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }, t.useCallback = function (e, t) {
      return M.current.useCallback(e, t);
    }, t.useContext = function (e) {
      return M.current.useContext(e);
    }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
      return M.current.useDeferredValue(e);
    }, t.useEffect = function (e, t) {
      return M.current.useEffect(e, t);
    }, t.useId = function () {
      return M.current.useId();
    }, t.useImperativeHandle = function (e, t, n) {
      return M.current.useImperativeHandle(e, t, n);
    }, t.useInsertionEffect = function (e, t) {
      return M.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect = function (e, t) {
      return M.current.useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return M.current.useMemo(e, t);
    }, t.useReducer = function (e, t, n) {
      return M.current.useReducer(e, t, n);
    }, t.useRef = function (e) {
      return M.current.useRef(e);
    }, t.useState = function (e) {
      return M.current.useState(e);
    }, t.useSyncExternalStore = function (e, t, n) {
      return M.current.useSyncExternalStore(e, t, n);
    }, t.useTransition = function () {
      return M.current.useTransition();
    }, t.version = "18.2.0";
  },
  50959: function _(e, t, n) {
    "use strict";

    e.exports = n(95257);
  },
  25105: function _(e) {
    e.exports = {
      drawer: "drawer-xBKhVqal",
      drawerItem: "drawerItem-xBKhVqal",
      menuWrap: "menuWrap-xBKhVqal",
      scrollWrap: "scrollWrap-xBKhVqal",
      menuBox: "menuBox-xBKhVqal",
      card: "card-xBKhVqal",
      cardRow: "cardRow-xBKhVqal",
      mini: "mini-xBKhVqal",
      fadeTop: "fadeTop-xBKhVqal",
      fadeBottom: "fadeBottom-xBKhVqal"
    };
  },
  95795: function _(e) {
    e.exports = {
      lollipopTooltipTitle: "lollipopTooltipTitle-hkWvPxQc",
      lollipopTooltipTitle_minimal: "lollipopTooltipTitle_minimal-hkWvPxQc",
      lollipopTooltipTitle__title: "lollipopTooltipTitle__title-hkWvPxQc",
      lollipopTooltipTitle_mobile: "lollipopTooltipTitle_mobile-hkWvPxQc",
      lollipopTooltipTitle__icon: "lollipopTooltipTitle__icon-hkWvPxQc"
    };
  },
  13668: function _(e) {
    e.exports = {
      content: "content-tm3FiOQl",
      contentWithTab: "contentWithTab-tm3FiOQl",
      group: "group-tm3FiOQl",
      subtitle: "subtitle-tm3FiOQl",
      text: "text-tm3FiOQl",
      tabsWrapper: "tabsWrapper-tm3FiOQl",
      tabsContentWrapper: "tabsContentWrapper-tm3FiOQl",
      groupIcon: "groupIcon-tm3FiOQl",
      beforeMarketOpen: "beforeMarketOpen-tm3FiOQl",
      afterMarketClose: "afterMarketClose-tm3FiOQl",
      groupTitle: "groupTitle-tm3FiOQl",
      groupRow: "groupRow-tm3FiOQl",
      groupCell: "groupCell-tm3FiOQl",
      link: "link-tm3FiOQl",
      mob: "mob-tm3FiOQl",
      mini: "mini-tm3FiOQl",
      generalContent: "generalContent-tm3FiOQl"
    };
  },
  70434: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      showLollipopTooltip: function showLollipopTooltip() {
        return D;
      }
    });
    var o = n(50959),
        r = n(962),
        l = n(50151),
        i = n(97754),
        a = n.n(i);

    function c(e, t, n) {
      (0, o.useEffect)(function () {
        var o = new IntersectionObserver(function (e) {
          e[e.length - 1].intersectionRatio < .25 ? n() : t();
        }, {
          threshold: [0, .25, .5, .75, 1],
          root: null,
          rootMargin: "0px"
        });
        return e.current && o.observe(e.current), function () {
          return o.disconnect();
        };
      }, []);
    }

    var s = n(90692),
        u = n(41590),
        d = n(37558),
        f = n(20520),
        p = n(59064),
        m = n(68335),
        h = n(1722);
    var v = (0, o.forwardRef)(function (e, t) {
      var n = e.onClose,
          r = e.onForceClose,
          l = e.onClickOutside,
          i = e.className,
          a = _objectWithoutProperties(e, ["onClose", "onForceClose", "onClickOutside", "className"]),
          c = (0, o.useRef)(null);

      (0, o.useEffect)(function () {
        return p.globalCloseDelegate.subscribe(null, r), function () {
          p.globalCloseDelegate.unsubscribe(null, r);
        };
      }, [r]);
      var s = (0, o.useCallback)(function (e) {
        27 === (0, m.hashFromEvent)(e) && (e.preventDefault(), r());
      }, [r]),
          u = (0, o.useCallback)(function () {
        c.current && c.current.focus({
          preventScroll: !0
        });
      }, []);
      return o.createElement(f.PopupMenu, _objectSpread({
        className: i,
        isOpened: !0,
        tabIndex: -1,
        reference: function reference(e) {
          "function" == typeof t ? t(e) : (0, h.isObject)(t) && (t.current = e), c.current = e;
        },
        onClose: n,
        onClickOutside: l,
        onKeyDown: s,
        onOpen: u
      }, a), e.children);
    });

    function y(e) {
      (0, o.useEffect)(function () {
        return e = g, window.addEventListener("scroll", e), function () {
          return window.removeEventListener("scroll", e);
        };
        var e;
      }, []), (0, o.useEffect)(function () {
        if (e.length) return function (e, t) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _n4 = _step2.value;

              _n4.subscribe(null, t);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return function () {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n3 = _step3.value;

                _n3.unsubscribe(null, t);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          };
        }(e, g);
      }, e);
    }

    function g() {
      (0, p.globalCloseMenu)();
    }

    v.displayName = "TooltipPopup";
    var b = n(40173),
        E = n(27317),
        w = n(9745),
        C = n(95795);

    function k(e) {
      var t = e.title,
          n = e.icon,
          r = e.iconStyle,
          l = e.className,
          i = e.cardType;
      return o.createElement("div", {
        className: a()(C.lollipopTooltipTitle, ["mob" === i && C.lollipopTooltipTitle_mobile, "mini" === i && C.lollipopTooltipTitle_minimal], l)
      }, n && o.createElement(w.Icon, {
        icon: n,
        className: C.lollipopTooltipTitle__icon,
        style: r
      }), o.createElement("span", {
        className: C.lollipopTooltipTitle__title
      }, t));
    }

    var _,
        x = n(13668);

    function T(e) {
      var t = e.text,
          n = e.href,
          r = e.onClick;
      return o.createElement("a", {
        href: n,
        onClick: r && function (e) {
          e.preventDefault(), r();
        },
        className: x.link
      }, t);
    }

    function S(e) {
      var t = e.name,
          n = e.value,
          r = e.style,
          l = e.valueStyle,
          i = e.onValueClick,
          c = e.valueRightIcon,
          s = e.className;
      return o.createElement("div", {
        className: a()(x.groupRow, s),
        style: r
      }, t && o.createElement("div", {
        className: x.groupCell
      }, o.createElement("span", {
        className: x.text
      }, t)), o.createElement("div", {
        className: x.groupCell
      }, o.createElement("span", {
        className: x.text,
        style: l,
        onClick: i
      }, n), c && o.createElement(w.Icon, {
        icon: c.iconContent,
        className: a()(x.groupIcon, c.iconClass, "apply-common-tooltip"),
        title: c.tooltipText
      })));
    }

    function O(e) {
      var _e$content = e.content,
          t = _e$content === void 0 ? [] : _e$content,
          n = e.subTitle,
          r = e.cardRowClass,
          l = t.map(function (e, t) {
        var n = e.title,
            r = e.content;
        return o.createElement("div", {
          key: "group".concat(t),
          className: x.group
        }, n && o.createElement("span", {
          className: x.groupTitle
        }, n), r.map(function (e, t) {
          return o.createElement(S, _objectSpread({
            key: "contentRow".concat(t)
          }, e));
        }));
      }),
          i = "string" == typeof n ? n : n.map(function (e, t) {
        return o.createElement(S, _objectSpread({
          key: "subTitle".concat(t)
        }, e));
      });
      return o.createElement("div", {
        className: r
      }, o.createElement("span", {
        className: x.subtitle
      }, i), l.length > 0 && o.createElement("div", null, l));
    }

    !function (e) {
      e[e.BeforeMarketOpen = x.beforeMarketOpen] = "BeforeMarketOpen", e[e.AfterMarketClose = x.afterMarketClose] = "AfterMarketClose";
    }(_ || (_ = {}));

    function N(e) {
      var t;

      var n = e.cardType,
          r = e.anchor,
          l = e.title,
          i = e.tooltipIcon,
          c = _objectWithoutProperties(e, ["cardType", "anchor", "title", "tooltipIcon"]),
          s = n ? a()(x.content, x[n]) : x.content,
          u = (0, o.useMemo)(function () {
        var t;
        return l && i ? {
          color: null === (t = e.style) || void 0 === t ? void 0 : t.color
        } : void 0;
      }, [!!l, !!i, null === (t = e.style) || void 0 === t ? void 0 : t.color]);

      return o.createElement("div", {
        className: s
      }, l && o.createElement(k, {
        title: l,
        icon: i,
        iconStyle: u,
        cardType: n
      }), "common" === c.type && o.createElement(O, _objectSpread({}, c)), r && ("mob" !== n || !r.hideInMobileMode) && o.createElement("div", {
        className: x.group
      }, o.createElement(T, _objectSpread({}, r))));
    }

    var R = n(25105);
    var B = (0, b.mergeThemes)(E.DEFAULT_MENU_THEME, {
      menuWrap: R.menuWrap,
      menuBox: R.menuBox
    });

    function M(e) {
      var t = e.tooltips,
          n = e.onClose,
          r = e.onForceClose,
          l = e.onClickOutside,
          i = e.position,
          _e$customCloseSubscri = e.customCloseSubscriptions,
          f = _e$customCloseSubscri === void 0 ? [] : _e$customCloseSubscri,
          p = e.showScrollFades,
          m = e.cardType,
          h = e.doNotCloseOn,
          g = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          w = (0, o.useRef)(null),
          _ref3 = (0, o.useState)("100%"),
          _ref4 = _slicedToArray(_ref3, 2),
          C = _ref4[0],
          k = _ref4[1],
          _ = function _(e) {
        null !== e && k("".concat(e.clientWidth, "px"));
      },
          _ref5 = (0, o.useState)(!1),
          _ref6 = _slicedToArray(_ref5, 2),
          x = _ref6[0],
          T = _ref6[1];

      c(E, function () {
        return T(!1);
      }, function () {
        return T(!0);
      });

      var S = {
        display: x ? "block" : "none",
        width: C
      },
          _ref7 = (0, o.useState)(!1),
          _ref8 = _slicedToArray(_ref7, 2),
          O = _ref8[0],
          M = _ref8[1];

      c(w, function () {
        return M(!1);
      }, function () {
        return M(!0);
      });
      var F = {
        display: O ? "block" : "none",
        width: C
      };
      y(f);
      var D = m ? a()(R.card, R[m]) : R.card;
      return o.createElement(d.DrawerManager, null, o.createElement(s.MatchMedia, {
        rule: "screen and (max-width: 419px)"
      }, function (e) {
        return e ? o.createElement(u.Drawer, {
          className: R.drawer,
          onClose: r || n,
          position: "Bottom"
        }, t.map(function (e, t) {
          return o.createElement("div", {
            key: "".concat(t),
            className: R.drawerItem
          }, o.createElement(N, _objectSpread({
            cardType: "mob"
          }, e)));
        })) : o.createElement(v, {
          position: i,
          theme: B,
          onClose: n,
          onForceClose: r || n,
          onClickOutside: l,
          doNotCloseOn: h
        }, p && o.createElement(o.Fragment, null, o.createElement("div", {
          ref: g,
          className: R.fadeTop,
          style: S
        }), o.createElement("div", {
          ref: E
        })), o.createElement("div", {
          ref: _
        }, t.map(function (e, t) {
          var n;
          return o.createElement("div", {
            key: "".concat(t),
            className: D,
            style: {
              borderColor: null === (n = e.style) || void 0 === n ? void 0 : n.color
            }
          }, o.createElement(N, _objectSpread({
            cardType: m
          }, e)));
        })), p && o.createElement(o.Fragment, null, o.createElement("div", {
          ref: w
        }), o.createElement("div", {
          ref: b,
          className: R.fadeBottom,
          style: F
        })));
      }));
    }

    var F = null;

    function D(e) {
      if (!e.items.length) return function () {};
      var t = {
        tooltips: e.items,
        onClose: I,
        onForceClose: function onForceClose() {
          I(), "function" == typeof e.onCustomClose && e.onCustomClose();
        },
        onClickOutside: e.onClickOutside,
        doNotCloseOn: e.doNotCloseOn,
        position: $.bind(null, e.position),
        customCloseSubscriptions: e.customCloseSubscriptions,
        showScrollFades: e.showScrollFades,
        cardType: e.cardType
      };
      return null === F && (F = document.createElement("div"), document.body.appendChild(F)), r.render(o.createElement(M, _objectSpread({}, t)), F), I;
    }

    function I() {
      null !== F && (r.unmountComponentAtNode(F), F.remove(), F = null);
    }

    function $(e, t, n) {
      var o = e.target,
          r = o.getBoundingClientRect(),
          i = r.width - e.targetSize.width,
          a = r.height - e.targetSize.height,
          c = (0, l.ensureNotNull)(o.closest(".chart-container")),
          s = c.getBoundingClientRect(),
          u = (0, l.ensureNotNull)(c.parentElement).getBoundingClientRect(),
          d = r.left + e.point.x + i,
          f = Math.round(d - t / 2),
          p = Math.min(f + t, s.right, u.right);
      var m,
          h,
          v = Math.max(p - t, s.left, u.left);
      v + t >= u.right && (v = u.right - t);
      var y = s.bottom - (r.top + e.point.y + a),
          g = s.height - y - e.marginTop;
      return g < n ? (h = e.marginTop + s.top, m = Math.max(g, 0)) : h = s.height + s.top - y - n, {
        x: v,
        y: h,
        overrideHeight: m
      };
    }
  }
}]);