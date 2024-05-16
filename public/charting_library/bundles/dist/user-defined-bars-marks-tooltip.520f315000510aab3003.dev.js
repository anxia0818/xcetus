"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8020], {
  27267: function _(t, e, r) {
    "use strict";

    function n(t, e, r, n, o) {
      function i(o) {
        if (t > o.timeStamp) return;
        var i = o.target;
        void 0 !== r && null !== e && null !== i && i.ownerDocument === n && (e.contains(i) || r(o));
      }

      return o.click && n.addEventListener("click", i, !1), o.mouseDown && n.addEventListener("mousedown", i, !1), o.touchEnd && n.addEventListener("touchend", i, !1), o.touchStart && n.addEventListener("touchstart", i, !1), function () {
        n.removeEventListener("click", i, !1), n.removeEventListener("mousedown", i, !1), n.removeEventListener("touchend", i, !1), n.removeEventListener("touchstart", i, !1);
      };
    }

    r.d(e, {
      addOutsideEventListener: function addOutsideEventListener() {
        return n;
      }
    });
  },
  36383: function _(t, e, r) {
    "use strict";

    r.d(e, {
      useOutsideEvent: function useOutsideEvent() {
        return i;
      }
    });
    var n = r(50959),
        o = r(27267);

    function i(t) {
      var e = t.click,
          r = t.mouseDown,
          i = t.touchEnd,
          u = t.touchStart,
          s = t.handler,
          c = t.reference,
          _t$ownerDocument = t.ownerDocument,
          a = _t$ownerDocument === void 0 ? document : _t$ownerDocument,
          l = (0, n.useRef)(null),
          f = (0, n.useRef)(new CustomEvent("timestamp").timeStamp);
      return (0, n.useLayoutEffect)(function () {
        var t = {
          click: e,
          mouseDown: r,
          touchEnd: i,
          touchStart: u
        },
            n = c ? c.current : l.current;
        return (0, o.addOutsideEventListener)(f.current, n, s, a, t);
      }, [e, r, i, u, s]), c || l;
    }
  },
  95257: function _(t, e) {
    "use strict";

    var r = Symbol["for"]("react.element"),
        n = Symbol["for"]("react.portal"),
        o = Symbol["for"]("react.fragment"),
        i = Symbol["for"]("react.strict_mode"),
        u = Symbol["for"]("react.profiler"),
        s = Symbol["for"]("react.provider"),
        c = Symbol["for"]("react.context"),
        a = Symbol["for"]("react.forward_ref"),
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
        _ = {};

    function y(t, e, r) {
      this.props = t, this.context = e, this.refs = _, this.updater = r || h;
    }

    function v() {}

    function w(t, e, r) {
      this.props = t, this.context = e, this.refs = _, this.updater = r || h;
    }

    y.prototype.isReactComponent = {}, y.prototype.setState = function (t, e) {
      if ("object" != _typeof(t) && "function" != typeof t && null != t) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, t, e, "setState");
    }, y.prototype.forceUpdate = function (t) {
      this.updater.enqueueForceUpdate(this, t, "forceUpdate");
    }, v.prototype = y.prototype;
    var E = w.prototype = new v();
    E.constructor = w, m(E, y.prototype), E.isPureReactComponent = !0;
    var C = Array.isArray,
        b = Object.prototype.hasOwnProperty,
        S = {
      current: null
    },
        I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function k(t, e, n) {
      var o,
          i = {},
          u = null,
          s = null;
      if (null != e) for (o in void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (u = "" + e.key), e) {
        b.call(e, o) && !I.hasOwnProperty(o) && (i[o] = e[o]);
      }
      var c = arguments.length - 2;
      if (1 === c) i.children = n;else if (1 < c) {
        for (var a = Array(c), l = 0; l < c; l++) {
          a[l] = arguments[l + 2];
        }

        i.children = a;
      }
      if (t && t.defaultProps) for (o in c = t.defaultProps) {
        void 0 === i[o] && (i[o] = c[o]);
      }
      return {
        $$typeof: r,
        type: t,
        key: u,
        ref: s,
        props: i,
        _owner: S.current
      };
    }

    function g(t) {
      return "object" == _typeof(t) && null !== t && t.$$typeof === r;
    }

    var T = /\/+/g;

    function L(t, e) {
      return "object" == _typeof(t) && null !== t && null != t.key ? function (t) {
        var e = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + t.replace(/[=:]/g, function (t) {
          return e[t];
        });
      }("" + t.key) : e.toString(36);
    }

    function R(t, e, o, i, u) {
      var s = _typeof(t);

      "undefined" !== s && "boolean" !== s || (t = null);
      var c = !1;
      if (null === t) c = !0;else switch (s) {
        case "string":
        case "number":
          c = !0;
          break;

        case "object":
          switch (t.$$typeof) {
            case r:
            case n:
              c = !0;
          }

      }
      if (c) return u = u(c = t), t = "" === i ? "." + L(c, 0) : i, C(u) ? (o = "", null != t && (o = t.replace(T, "$&/") + "/"), R(u, e, o, "", function (t) {
        return t;
      })) : null != u && (g(u) && (u = function (t, e) {
        return {
          $$typeof: r,
          type: t.type,
          key: e,
          ref: t.ref,
          props: t.props,
          _owner: t._owner
        };
      }(u, o + (!u.key || c && c.key === u.key ? "" : ("" + u.key).replace(T, "$&/") + "/") + t)), e.push(u)), 1;
      if (c = 0, i = "" === i ? "." : i + ":", C(t)) for (var a = 0; a < t.length; a++) {
        var l = i + L(s = t[a], a);
        c += R(s, e, o, l, u);
      } else if (l = function (t) {
        return null === t || "object" != _typeof(t) ? null : "function" == typeof (t = p && t[p] || t["@@iterator"]) ? t : null;
      }(t), "function" == typeof l) for (t = l.call(t), a = 0; !(s = t.next()).done;) {
        c += R(s = s.value, e, o, l = i + L(s, a++), u);
      } else if ("object" === s) throw e = String(t), Error("Objects are not valid as a React child (found: " + ("[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
      return c;
    }

    function $(t, e, r) {
      if (null == t) return t;
      var n = [],
          o = 0;
      return R(t, n, "", "", function (t) {
        return e.call(r, t, o++);
      }), n;
    }

    function x(t) {
      if (-1 === t._status) {
        var e = t._result;
        (e = e()).then(function (e) {
          0 !== t._status && -1 !== t._status || (t._status = 1, t._result = e);
        }, function (e) {
          0 !== t._status && -1 !== t._status || (t._status = 2, t._result = e);
        }), -1 === t._status && (t._status = 0, t._result = e);
      }

      if (1 === t._status) return t._result["default"];
      throw t._result;
    }

    var A = {
      current: null
    },
        O = {
      transition: null
    },
        j = {
      ReactCurrentDispatcher: A,
      ReactCurrentBatchConfig: O,
      ReactCurrentOwner: S
    };
    e.Children = {
      map: $,
      forEach: function forEach(t, e, r) {
        $(t, function () {
          e.apply(this, arguments);
        }, r);
      },
      count: function count(t) {
        var e = 0;
        return $(t, function () {
          e++;
        }), e;
      },
      toArray: function toArray(t) {
        return $(t, function (t) {
          return t;
        }) || [];
      },
      only: function only(t) {
        if (!g(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
    }, e.Component = y, e.Fragment = o, e.Profiler = u, e.PureComponent = w, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, e.cloneElement = function (t, e, n) {
      if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
      var o = m({}, t.props),
          i = t.key,
          u = t.ref,
          s = t._owner;

      if (null != e) {
        if (void 0 !== e.ref && (u = e.ref, s = S.current), void 0 !== e.key && (i = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;

        for (a in e) {
          b.call(e, a) && !I.hasOwnProperty(a) && (o[a] = void 0 === e[a] && void 0 !== c ? c[a] : e[a]);
        }
      }

      var a = arguments.length - 2;
      if (1 === a) o.children = n;else if (1 < a) {
        c = Array(a);

        for (var l = 0; l < a; l++) {
          c[l] = arguments[l + 2];
        }

        o.children = c;
      }
      return {
        $$typeof: r,
        type: t.type,
        key: i,
        ref: u,
        props: o,
        _owner: s
      };
    }, e.createContext = function (t) {
      return (t = {
        $$typeof: c,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }).Provider = {
        $$typeof: s,
        _context: t
      }, t.Consumer = t;
    }, e.createElement = k, e.createFactory = function (t) {
      var e = k.bind(null, t);
      return e.type = t, e;
    }, e.createRef = function () {
      return {
        current: null
      };
    }, e.forwardRef = function (t) {
      return {
        $$typeof: a,
        render: t
      };
    }, e.isValidElement = g, e.lazy = function (t) {
      return {
        $$typeof: d,
        _payload: {
          _status: -1,
          _result: t
        },
        _init: x
      };
    }, e.memo = function (t, e) {
      return {
        $$typeof: f,
        type: t,
        compare: void 0 === e ? null : e
      };
    }, e.startTransition = function (t) {
      var e = O.transition;
      O.transition = {};

      try {
        t();
      } finally {
        O.transition = e;
      }
    }, e.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }, e.useCallback = function (t, e) {
      return A.current.useCallback(t, e);
    }, e.useContext = function (t) {
      return A.current.useContext(t);
    }, e.useDebugValue = function () {}, e.useDeferredValue = function (t) {
      return A.current.useDeferredValue(t);
    }, e.useEffect = function (t, e) {
      return A.current.useEffect(t, e);
    }, e.useId = function () {
      return A.current.useId();
    }, e.useImperativeHandle = function (t, e, r) {
      return A.current.useImperativeHandle(t, e, r);
    }, e.useInsertionEffect = function (t, e) {
      return A.current.useInsertionEffect(t, e);
    }, e.useLayoutEffect = function (t, e) {
      return A.current.useLayoutEffect(t, e);
    }, e.useMemo = function (t, e) {
      return A.current.useMemo(t, e);
    }, e.useReducer = function (t, e, r) {
      return A.current.useReducer(t, e, r);
    }, e.useRef = function (t) {
      return A.current.useRef(t);
    }, e.useState = function (t) {
      return A.current.useState(t);
    }, e.useSyncExternalStore = function (t, e, r) {
      return A.current.useSyncExternalStore(t, e, r);
    }, e.useTransition = function () {
      return A.current.useTransition();
    }, e.version = "18.2.0";
  },
  50959: function _(t, e, r) {
    "use strict";

    t.exports = r(95257);
  },
  46315: function _(t) {
    t.exports = {
      css_value_arrow_size: "13",
      tooltip: "tooltip-eSLcXvvL",
      show: "show-eSLcXvvL",
      right: "right-eSLcXvvL"
    };
  },
  49844: function _(t) {
    t.exports = {
      text: "text-hF57_4zZ"
    };
  },
  5972: function _(t, e, r) {
    "use strict";

    r.r(e), r.d(e, {
      TooltipRenderer: function TooltipRenderer() {
        return c;
      }
    });
    var n = r(50959),
        o = r(962),
        i = r(36383),
        u = r(46315);
    var s = parseInt(u.css_value_arrow_size);

    var c =
    /*#__PURE__*/
    function () {
      function c(t) {
        var _this = this;

        _classCallCheck(this, c);

        this._container = null, this._props = null, this._deferredActions = {
          hideItemTime: 0
        }, this._updatePosition = function () {
          if (null === _this._props || null === _this._container) return;

          var _this$_tooltipContain = _this._tooltipContainer.getBoundingClientRect(),
              t = _this$_tooltipContain.width,
              e = _this$_tooltipContain.height,
              r = _this._container.getBoundingClientRect(),
              n = Math.round(_this._props.itemSize / 2),
              o = Math.min(8, n);

          var i = !1,
              c = _this._props.x - t - n - s - o;
          c < 0 && (c = _this._props.x + n + s + o, i = !0);
          var a = r.height;
          var l = Math.max(0, _this._props.y - e / 2);
          l > 0 && (l = Math.min(l, a - e)), _this._tooltipContainer.classList.toggle(u.right, i), _this._tooltipContainer.style.top = "".concat(l, "px"), _this._tooltipContainer.style.left = "".concat(c, "px");
        }, this._tooltipFactory = t, this._tooltipContainer = document.createElement("div"), this._tooltipContainer.classList.add(u.tooltip);
      }

      _createClass(c, [{
        key: "destroy",
        value: function destroy() {
          this._unmountComponent();
        }
      }, {
        key: "contains",
        value: function contains(t) {
          return this._tooltipContainer.contains(t);
        }
      }, {
        key: "hide",
        value: function hide(t) {
          var _this2 = this;

          this._deferredActions.hideItemTime = performance.now(), this._clearTimeouts(), t ? this._tooltipContainer.classList.remove(u.show) : this._deferredActions.hideItemTimerId = setTimeout(function () {
            _this2._tooltipContainer.classList.remove(u.show);
          }, 100);
        }
      }, {
        key: "show",
        value: function show(t) {
          var _this3 = this;

          this._clearTimeouts(), performance.now() < this._deferredActions.hideItemTime + 100 ? this._showImpl(t) : this._deferredActions.showItemTimerId = setTimeout(function () {
            return _this3._showImpl(t);
          }, 400);
        }
      }, {
        key: "_showImpl",
        value: function _showImpl(t) {
          this._props = t, this._render(t), this._clearTimeouts(), this._tooltipContainer.classList.add(u.show);
        }
      }, {
        key: "_render",
        value: function _render(t) {
          var e = t.container;
          this._container !== e && (this._unmountComponent(), this._container = e, this._container.appendChild(this._tooltipContainer)), o.render(n.createElement(a, {
            handler: t.onClickOutside,
            child: n.createElement(this._tooltipFactory, t.factoryProps)
          }), this._tooltipContainer, this._updatePosition);
        }
      }, {
        key: "_unmountComponent",
        value: function _unmountComponent() {
          null !== this._container && (o.unmountComponentAtNode(this._tooltipContainer), this._tooltipContainer.remove(), this._container = null, this._clearTimeouts());
        }
      }, {
        key: "_clearTimeouts",
        value: function _clearTimeouts() {
          void 0 !== this._deferredActions.showItemTimerId && (clearTimeout(this._deferredActions.showItemTimerId), this._deferredActions.showItemTimerId = void 0), void 0 !== this._deferredActions.hideItemTimerId && (clearTimeout(this._deferredActions.hideItemTimerId), this._deferredActions.hideItemTimerId = void 0);
        }
      }]);

      return c;
    }();

    function a(t) {
      var e = t.handler,
          r = t.child,
          o = (0, i.useOutsideEvent)({
        mouseDown: !0,
        touchStart: !0,
        handler: e
      });
      return n.createElement("div", {
        ref: o
      }, r);
    }
  },
  48080: function _(t, e, r) {
    "use strict";

    r.r(e), r.d(e, {
      UserDefinedBarsMarksTooltip: function UserDefinedBarsMarksTooltip() {
        return i;
      }
    });
    var n = r(50959),
        o = r(49844);

    function i(t) {
      var e = t.text;
      return n.createElement("div", {
        className: o.text
      }, e);
    }
  }
}]);