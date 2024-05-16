"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6166], {
  87941: function _(e) {
    e.exports = {
      container: "container-kfvcmk8t",
      centerElement: "centerElement-kfvcmk8t",
      text: "text-kfvcmk8t"
    };
  },
  96302: function _(e) {
    e.exports = {
      container: "container-zLVm6B4t",
      content: "content-zLVm6B4t",
      arrowHolder: "arrowHolder-zLVm6B4t",
      "arrowHolder--below": "arrowHolder--below-zLVm6B4t",
      "arrowHolder--above": "arrowHolder--above-zLVm6B4t",
      "arrowHolder--before": "arrowHolder--before-zLVm6B4t",
      "arrowHolder--after": "arrowHolder--after-zLVm6B4t",
      "arrowHolder--above-fix": "arrowHolder--above-fix-zLVm6B4t",
      "arrowHolder--before-rtl-fix": "arrowHolder--before-rtl-fix-zLVm6B4t",
      "arrowHolder--after-ltr-fix": "arrowHolder--after-ltr-fix-zLVm6B4t",
      label: "label-zLVm6B4t",
      closeButton: "closeButton-zLVm6B4t"
    };
  },
  9745: function _(e, t, r) {
    "use strict";

    r.d(t, {
      Icon: function Icon() {
        return o;
      }
    });
    var n = r(50959);
    var o = n.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          r = _e$icon === void 0 ? "" : _e$icon,
          o = _objectWithoutProperties(e, ["icon"]);

      return n.createElement("span", _objectSpread({}, o, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: r
        }
      }));
    });
  },
  67961: function _(e, t, r) {
    "use strict";

    r.d(t, {
      OverlapManager: function OverlapManager() {
        return i;
      },
      getRootOverlapManager: function getRootOverlapManager() {
        return a;
      }
    });
    var n = r(50151);

    var o =
    /*#__PURE__*/
    function () {
      function o() {
        _classCallCheck(this, o);

        this._storage = [];
      }

      _createClass(o, [{
        key: "add",
        value: function add(e) {
          this._storage.push(e);
        }
      }, {
        key: "remove",
        value: function remove(e) {
          this._storage = this._storage.filter(function (t) {
            return e !== t;
          });
        }
      }, {
        key: "has",
        value: function has(e) {
          return this._storage.includes(e);
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this._storage;
        }
      }]);

      return o;
    }();

    var i =
    /*#__PURE__*/
    function () {
      function i() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

        _classCallCheck(this, i);

        this._storage = new o(), this._windows = new Map(), this._index = 0, this._document = e, this._container = e.createDocumentFragment();
      }

      _createClass(i, [{
        key: "setContainer",
        value: function setContainer(e) {
          var t = this._container,
              r = null === e ? this._document.createDocumentFragment() : e;
          !function (e, t) {
            Array.from(e.childNodes).forEach(function (e) {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          }(t, r), this._container = r;
        }
      }, {
        key: "registerWindow",
        value: function registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
      }, {
        key: "ensureWindow",
        value: function ensureWindow(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            position: "fixed",
            direction: "normal"
          };

          var r = this._windows.get(e);

          if (void 0 !== r) return r;
          this.registerWindow(e);

          var n = this._document.createElement("div");

          if (n.style.position = t.position, n.style.zIndex = this._index.toString(), n.dataset.id = e, void 0 !== t.index) {
            var _e = this._container.childNodes.length;
            if (t.index >= _e) this._container.appendChild(n);else if (t.index <= 0) this._container.insertBefore(n, this._container.firstChild);else {
              var _e2 = this._container.childNodes[t.index];

              this._container.insertBefore(n, _e2);
            }
          } else "reverse" === t.direction ? this._container.insertBefore(n, this._container.firstChild) : this._container.appendChild(n);

          return this._windows.set(e, n), ++this._index, n;
        }
      }, {
        key: "unregisterWindow",
        value: function unregisterWindow(e) {
          this._storage.remove(e);

          var t = this._windows.get(e);

          void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows["delete"](e));
        }
      }, {
        key: "getZindex",
        value: function getZindex(e) {
          var t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || "0");
        }
      }, {
        key: "moveToTop",
        value: function moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
      }, {
        key: "removeWindow",
        value: function removeWindow(e) {
          this.unregisterWindow(e);
        }
      }]);

      return i;
    }();

    var s = new WeakMap();

    function a() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = e.getElementById("overlap-manager-root");
      if (null !== t) return (0, n.ensureDefined)(s.get(t));
      {
        var _t = new i(e),
            _r = function (e) {
          var t = e.createElement("div");
          return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t;
        }(e);

        return s.set(_r, _t), _t.setContainer(_r), e.body.appendChild(_r), _t;
      }
    }
  },
  5015: function _(e, t, r) {
    "use strict";

    r.r(t), r.d(t, {
      ChartEventHintRenderer: function ChartEventHintRenderer() {
        return d;
      }
    });
    var n = r(50959),
        o = r(962),
        i = r(97754),
        s = r(9745),
        a = (r(65718), r(33765)),
        u = r(96302);
    n.PureComponent;

    function c(e) {
      var t = e.className,
          r = e.containerClassName,
          o = e.contentClassName,
          c = e.reference,
          l = e.style,
          _e$arrow = e.arrow,
          f = _e$arrow === void 0 ? !0 : _e$arrow,
          d = e.arrowClassName,
          p = e.arrowReference,
          h = e.onClose,
          m = e.arrowStyle,
          y = e.children,
          _ = _objectWithoutProperties(e, ["className", "containerClassName", "contentClassName", "reference", "style", "arrow", "arrowClassName", "arrowReference", "onClose", "arrowStyle", "children"]);

      return n.createElement("div", _objectSpread({}, _, {
        className: t,
        ref: c,
        style: l
      }), f && n.createElement("div", {
        className: d,
        ref: p,
        style: m
      }), n.createElement("div", {
        className: i(u.container, r)
      }, n.createElement("div", {
        className: i(u.content, o)
      }, y), h && n.createElement(s.Icon, {
        className: u.closeButton,
        icon: a,
        onClick: h
      })));
    }

    var l = r(87941);

    function f(e) {
      var t = e.bottomOffset,
          r = e.text,
          o = e.onClose;
      return n.createElement("div", {
        className: l.container,
        style: {
          bottom: t
        }
      }, n.createElement("div", {
        className: l.centerElement
      }, n.createElement(c, {
        arrow: !1,
        onClose: o
      }, n.createElement("div", {
        className: l.text
      }, r))));
    }

    var d =
    /*#__PURE__*/
    function () {
      function d(e) {
        _classCallCheck(this, d);

        this._wrap = document.createElement("div"), this._container = e;
      }

      _createClass(d, [{
        key: "show",
        value: function show(e, t) {
          var _this = this;

          if (!this._wrap) return;
          this.hide(), this._container.append(this._wrap);
          var r = {
            text: e,
            onClose: function onClose() {
              t && t(), _this.hide();
            },
            bottomOffset: Array.from(this._container.children).reduce(function (e, t) {
              return t.getAttribute("data-is-chart-toolbar-component") && (e += t.clientHeight), e;
            }, 32)
          };
          o.render(n.createElement(f, _objectSpread({}, r)), this._wrap);
        }
      }, {
        key: "hide",
        value: function hide() {
          this._wrap && (o.unmountComponentAtNode(this._wrap), this._wrap.remove());
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.hide(), delete this._wrap;
        }
      }]);

      return d;
    }();
  },
  65718: function _(e, t, r) {
    "use strict";

    r.d(t, {
      Portal: function Portal() {
        return u;
      },
      PortalContext: function PortalContext() {
        return c;
      }
    });
    var n = r(50959),
        o = r(962),
        i = r(36174),
        s = r(67961),
        a = r(60508);

    var u =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(u, _n$PureComponent);

      function u() {
        var _this2;

        _classCallCheck(this, u);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this2._uuid = (0, i.guid)();
        return _this2;
      }

      _createClass(u, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);

          return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(n.createElement(c.Provider, {
            value: this
          }, this.props.children), e);
        }
      }, {
        key: "moveToTop",
        value: function moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
      }, {
        key: "_manager",
        value: function _manager() {
          return null === this.context ? (0, s.getRootOverlapManager)() : this.context;
        }
      }]);

      return u;
    }(n.PureComponent);

    u.contextType = a.SlotContext;
    var c = n.createContext(null);
  },
  60508: function _(e, t, r) {
    "use strict";

    r.d(t, {
      Slot: function Slot() {
        return o;
      },
      SlotContext: function SlotContext() {
        return i;
      }
    });
    var n = r(50959);

    var o =
    /*#__PURE__*/
    function (_n$Component) {
      _inherits(o, _n$Component);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, _getPrototypeOf(o).apply(this, arguments));
      }

      _createClass(o, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          return !1;
        }
      }, {
        key: "render",
        value: function render() {
          return n.createElement("div", {
            style: {
              position: "fixed",
              zIndex: 150,
              left: 0,
              top: 0
            },
            ref: this.props.reference
          });
        }
      }]);

      return o;
    }(n.Component);

    var i = n.createContext(null);
  },
  95257: function _(e, t) {
    "use strict";

    var r = Symbol["for"]("react.element"),
        n = Symbol["for"]("react.portal"),
        o = Symbol["for"]("react.fragment"),
        i = Symbol["for"]("react.strict_mode"),
        s = Symbol["for"]("react.profiler"),
        a = Symbol["for"]("react.provider"),
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
        y = {};

    function _(e, t, r) {
      this.props = e, this.context = t, this.refs = y, this.updater = r || h;
    }

    function v() {}

    function w(e, t, r) {
      this.props = e, this.context = t, this.refs = y, this.updater = r || h;
    }

    _.prototype.isReactComponent = {}, _.prototype.setState = function (e, t) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, _.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, v.prototype = _.prototype;
    var g = w.prototype = new v();
    g.constructor = w, m(g, _.prototype), g.isPureReactComponent = !0;
    var b = Array.isArray,
        x = Object.prototype.hasOwnProperty,
        E = {
      current: null
    },
        C = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function S(e, t, n) {
      var o,
          i = {},
          s = null,
          a = null;
      if (null != t) for (o in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) {
        x.call(t, o) && !C.hasOwnProperty(o) && (i[o] = t[o]);
      }
      var u = arguments.length - 2;
      if (1 === u) i.children = n;else if (1 < u) {
        for (var c = Array(u), l = 0; l < u; l++) {
          c[l] = arguments[l + 2];
        }

        i.children = c;
      }
      if (e && e.defaultProps) for (o in u = e.defaultProps) {
        void 0 === i[o] && (i[o] = u[o]);
      }
      return {
        $$typeof: r,
        type: e,
        key: s,
        ref: a,
        props: i,
        _owner: E.current
      };
    }

    function k(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === r;
    }

    var R = /\/+/g;

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

    function N(e, t, o, i, s) {
      var a = _typeof(e);

      "undefined" !== a && "boolean" !== a || (e = null);
      var u = !1;
      if (null === e) u = !0;else switch (a) {
        case "string":
        case "number":
          u = !0;
          break;

        case "object":
          switch (e.$$typeof) {
            case r:
            case n:
              u = !0;
          }

      }
      if (u) return s = s(u = e), e = "" === i ? "." + L(u, 0) : i, b(s) ? (o = "", null != e && (o = e.replace(R, "$&/") + "/"), N(s, t, o, "", function (e) {
        return e;
      })) : null != s && (k(s) && (s = function (e, t) {
        return {
          $$typeof: r,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(s, o + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(R, "$&/") + "/") + e)), t.push(s)), 1;
      if (u = 0, i = "" === i ? "." : i + ":", b(e)) for (var c = 0; c < e.length; c++) {
        var l = i + L(a = e[c], c);
        u += N(a, t, o, l, s);
      } else if (l = function (e) {
        return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
      }(e), "function" == typeof l) for (e = l.call(e), c = 0; !(a = e.next()).done;) {
        u += N(a = a.value, t, o, l = i + L(a, c++), s);
      } else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return u;
    }

    function $(e, t, r) {
      if (null == e) return e;
      var n = [],
          o = 0;
      return N(e, n, "", "", function (e) {
        return t.call(r, e, o++);
      }), n;
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

    var H = {
      current: null
    },
        I = {
      transition: null
    },
        z = {
      ReactCurrentDispatcher: H,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: E
    };
    t.Children = {
      map: $,
      forEach: function forEach(e, t, r) {
        $(e, function () {
          t.apply(this, arguments);
        }, r);
      },
      count: function count(e) {
        var t = 0;
        return $(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return $(e, function (e) {
          return e;
        }) || [];
      },
      only: function only(e) {
        if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    }, t.Component = _, t.Fragment = o, t.Profiler = s, t.PureComponent = w, t.StrictMode = i, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function (e, t, n) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var o = m({}, e.props),
          i = e.key,
          s = e.ref,
          a = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (s = t.ref, a = E.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;

        for (c in t) {
          x.call(t, c) && !C.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
        }
      }

      var c = arguments.length - 2;
      if (1 === c) o.children = n;else if (1 < c) {
        u = Array(c);

        for (var l = 0; l < c; l++) {
          u[l] = arguments[l + 2];
        }

        o.children = u;
      }
      return {
        $$typeof: r,
        type: e.type,
        key: i,
        ref: s,
        props: o,
        _owner: a
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
        $$typeof: a,
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
    }, t.isValidElement = k, t.lazy = function (e) {
      return {
        $$typeof: d,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: B
      };
    }, t.memo = function (e, t) {
      return {
        $$typeof: f,
        type: e,
        compare: void 0 === t ? null : t
      };
    }, t.startTransition = function (e) {
      var t = I.transition;
      I.transition = {};

      try {
        e();
      } finally {
        I.transition = t;
      }
    }, t.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }, t.useCallback = function (e, t) {
      return H.current.useCallback(e, t);
    }, t.useContext = function (e) {
      return H.current.useContext(e);
    }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
      return H.current.useDeferredValue(e);
    }, t.useEffect = function (e, t) {
      return H.current.useEffect(e, t);
    }, t.useId = function () {
      return H.current.useId();
    }, t.useImperativeHandle = function (e, t, r) {
      return H.current.useImperativeHandle(e, t, r);
    }, t.useInsertionEffect = function (e, t) {
      return H.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect = function (e, t) {
      return H.current.useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return H.current.useMemo(e, t);
    }, t.useReducer = function (e, t, r) {
      return H.current.useReducer(e, t, r);
    }, t.useRef = function (e) {
      return H.current.useRef(e);
    }, t.useState = function (e) {
      return H.current.useState(e);
    }, t.useSyncExternalStore = function (e, t, r) {
      return H.current.useSyncExternalStore(e, t, r);
    }, t.useTransition = function () {
      return H.current.useTransition();
    }, t.version = "18.2.0";
  },
  50959: function _(e, t, r) {
    "use strict";

    e.exports = r(95257);
  },
  33765: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
  }
}]);