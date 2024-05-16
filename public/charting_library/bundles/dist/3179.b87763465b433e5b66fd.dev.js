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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3179], {
  40191: function _(e) {
    e.exports = {
      menuWrap: "menuWrap-Kq3ruQo8",
      isMeasuring: "isMeasuring-Kq3ruQo8",
      scrollWrap: "scrollWrap-Kq3ruQo8",
      momentumBased: "momentumBased-Kq3ruQo8",
      menuBox: "menuBox-Kq3ruQo8",
      isHidden: "isHidden-Kq3ruQo8"
    };
  },
  36383: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useOutsideEvent: function useOutsideEvent() {
        return r;
      }
    });
    var s = n(50959),
        i = n(27267);

    function r(e) {
      var t = e.click,
          n = e.mouseDown,
          r = e.touchEnd,
          o = e.touchStart,
          l = e.handler,
          a = e.reference,
          _e$ownerDocument = e.ownerDocument,
          u = _e$ownerDocument === void 0 ? document : _e$ownerDocument,
          c = (0, s.useRef)(null),
          d = (0, s.useRef)(new CustomEvent("timestamp").timeStamp);
      return (0, s.useLayoutEffect)(function () {
        var e = {
          click: t,
          mouseDown: n,
          touchEnd: r,
          touchStart: o
        },
            s = a ? a.current : c.current;
        return (0, i.addOutsideEventListener)(d.current, s, l, u, e);
      }, [t, n, r, o, l]), a || c;
    }
  },
  9745: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Icon: function Icon() {
        return i;
      }
    });
    var s = n(50959);
    var i = s.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          n = _e$icon === void 0 ? "" : _e$icon,
          i = _objectWithoutProperties(e, ["icon"]);

      return s.createElement("span", _objectSpread({}, i, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: n
        }
      }));
    });
  },
  83021: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SubmenuContext: function SubmenuContext() {
        return i;
      },
      SubmenuHandler: function SubmenuHandler() {
        return r;
      }
    });
    var s = n(50959);
    var i = s.createContext(null);

    function r(e) {
      var _ref = (0, s.useState)(null),
          _ref2 = _slicedToArray(_ref, 2),
          t = _ref2[0],
          n = _ref2[1],
          r = (0, s.useRef)(null),
          o = (0, s.useRef)(new Map());

      return (0, s.useEffect)(function () {
        return function () {
          null !== r.current && clearTimeout(r.current);
        };
      }, []), s.createElement(i.Provider, {
        value: {
          current: t,
          setCurrent: function setCurrent(e) {
            null !== r.current && (clearTimeout(r.current), r.current = null);
            null === t ? n(e) : r.current = setTimeout(function () {
              r.current = null, n(e);
            }, 100);
          },
          registerSubmenu: function registerSubmenu(e, t) {
            return o.current.set(e, t), function () {
              o.current["delete"](e);
            };
          },
          isSubmenuNode: function isSubmenuNode(e) {
            return Array.from(o.current.values()).some(function (t) {
              return t(e);
            });
          }
        }
      }, e.children);
    }
  },
  67961: function _(e, t, n) {
    "use strict";

    n.d(t, {
      OverlapManager: function OverlapManager() {
        return r;
      },
      getRootOverlapManager: function getRootOverlapManager() {
        return l;
      }
    });
    var s = n(50151);

    var i =
    /*#__PURE__*/
    function () {
      function i() {
        _classCallCheck(this, i);

        this._storage = [];
      }

      _createClass(i, [{
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

      return i;
    }();

    var r =
    /*#__PURE__*/
    function () {
      function r() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

        _classCallCheck(this, r);

        this._storage = new i(), this._windows = new Map(), this._index = 0, this._document = e, this._container = e.createDocumentFragment();
      }

      _createClass(r, [{
        key: "setContainer",
        value: function setContainer(e) {
          var t = this._container,
              n = null === e ? this._document.createDocumentFragment() : e;
          !function (e, t) {
            Array.from(e.childNodes).forEach(function (e) {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          }(t, n), this._container = n;
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

          var n = this._windows.get(e);

          if (void 0 !== n) return n;
          this.registerWindow(e);

          var s = this._document.createElement("div");

          if (s.style.position = t.position, s.style.zIndex = this._index.toString(), s.dataset.id = e, void 0 !== t.index) {
            var _e2 = this._container.childNodes.length;
            if (t.index >= _e2) this._container.appendChild(s);else if (t.index <= 0) this._container.insertBefore(s, this._container.firstChild);else {
              var _e3 = this._container.childNodes[t.index];

              this._container.insertBefore(s, _e3);
            }
          } else "reverse" === t.direction ? this._container.insertBefore(s, this._container.firstChild) : this._container.appendChild(s);

          return this._windows.set(e, s), ++this._index, s;
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

      return r;
    }();

    var o = new WeakMap();

    function l() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = e.getElementById("overlap-manager-root");
      if (null !== t) return (0, s.ensureDefined)(o.get(t));
      {
        var _t = new r(e),
            _n2 = function (e) {
          var t = e.createElement("div");
          return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t;
        }(e);

        return o.set(_n2, _t), _t.setContainer(_n2), e.body.appendChild(_n2), _t;
      }
    }
  },
  99054: function _(e, t, n) {
    "use strict";

    n.d(t, {
      setFixedBodyState: function setFixedBodyState() {
        return u;
      }
    });

    var s = function () {
      var e;
      return function () {
        var t;

        if (void 0 === e) {
          var _n3 = document.createElement("div"),
              _s2 = _n3.style;

          _s2.visibility = "hidden", _s2.width = "100px", _s2.msOverflowStyle = "scrollbar", document.body.appendChild(_n3);
          var _i2 = _n3.offsetWidth;
          _n3.style.overflow = "scroll";

          var _r = document.createElement("div");

          _r.style.width = "100%", _n3.appendChild(_r);
          var _o = _r.offsetWidth;
          null === (t = _n3.parentNode) || void 0 === t || t.removeChild(_n3), e = _i2 - _o;
        }

        return e;
      };
    }();

    function i(e, t, n) {
      null !== e && e.style.setProperty(t, n);
    }

    function r(e, t) {
      return getComputedStyle(e, null).getPropertyValue(t);
    }

    function o(e, t) {
      return parseInt(r(e, t));
    }

    var l = 0,
        a = !1;

    function u(e) {
      var _document = document,
          t = _document.body,
          n = t.querySelector(".widgetbar-wrap");

      if (e && 1 == ++l) {
        var _e4 = r(t, "overflow"),
            _l = o(t, "padding-right");

        "hidden" !== _e4.toLowerCase() && t.scrollHeight > t.offsetHeight && (i(n, "right", "".concat(s(), "px")), t.style.paddingRight = "".concat(_l + s(), "px"), a = !0), t.classList.add("i-no-scroll");
      } else if (!e && l > 0 && 0 == --l && (t.classList.remove("i-no-scroll"), a)) {
        i(n, "right", "0px");
        var _e5 = 0;
        0, t.scrollHeight <= t.clientHeight && (_e5 -= s()), t.style.paddingRight = (_e5 < 0 ? 0 : _e5) + "px", a = !1;
      }
    }
  },
  90692: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MatchMedia: function MatchMedia() {
        return i;
      }
    });
    var s = n(50959);

    var i =
    /*#__PURE__*/
    function (_s$PureComponent) {
      _inherits(i, _s$PureComponent);

      function i(e) {
        var _this;

        _classCallCheck(this, i);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this._handleChange = function () {
          _this.forceUpdate();
        }, _this.state = {
          query: window.matchMedia(_this.props.rule)
        };
        return _this;
      }

      _createClass(i, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._subscribe(this.state.query);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
      }, {
        key: "render",
        value: function render() {
          return this.props.children(this.state.query.matches);
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(e) {
          e.addListener(this._handleChange);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe(e) {
          e.removeListener(this._handleChange);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media ? {
            query: window.matchMedia(e.rule)
          } : null;
        }
      }]);

      return i;
    }(s.PureComponent);
  },
  64706: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MenuContext: function MenuContext() {
        return s;
      }
    });
    var s = n(50959).createContext(null);
  },
  27317: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DEFAULT_MENU_THEME: function DEFAULT_MENU_THEME() {
        return _;
      },
      Menu: function Menu() {
        return v;
      }
    });
    var s = n(50959),
        i = n(97754),
        r = n.n(i),
        o = n(50151),
        l = n(37160),
        a = n(21861),
        u = n(60508),
        c = n(59064),
        d = n(67961),
        h = n(4741),
        p = n(83021),
        m = n(64706),
        f = n(40191);
    var _ = f;

    var v =
    /*#__PURE__*/
    function (_s$PureComponent2) {
      _inherits(v, _s$PureComponent2);

      function v(e) {
        var _this2;

        _classCallCheck(this, v);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e)), _this2._containerRef = null, _this2._scrollWrapRef = null, _this2._raf = null, _this2._scrollRaf = null, _this2._scrollTimeout = void 0, _this2._manager = new d.OverlapManager(), _this2._hotkeys = null, _this2._scroll = 0, _this2._handleContainerRef = function (e) {
          _this2._containerRef = e, _this2.props.reference && ("function" == typeof _this2.props.reference && _this2.props.reference(e), "object" == _typeof(_this2.props.reference) && (_this2.props.reference.current = e));
        }, _this2._handleScrollWrapRef = function (e) {
          _this2._scrollWrapRef = e, "function" == typeof _this2.props.scrollWrapReference && _this2.props.scrollWrapReference(e), "object" == _typeof(_this2.props.scrollWrapReference) && (_this2.props.scrollWrapReference.current = e);
        }, _this2._handleCustomRemeasureDelegate = function () {
          _this2._resizeForced(), _this2._handleMeasure();
        }, _this2._handleMeasure = function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref3.callback,
              t = _ref3.forceRecalcPosition;

          var n, s, i, r, a, u, c, d, h, p, m, f;
          if (_this2.state.isMeasureValid && !t) return;
          var _ = _this2.props.position,
              v = (0, o.ensureNotNull)(_this2._containerRef);
          var g = v.getBoundingClientRect();
          var y = document.documentElement.clientHeight,
              x = document.documentElement.clientWidth,
              C = null !== (n = _this2.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
          var b = y - 0 - C;
          var w = g.height > b;

          if (w) {
            (0, o.ensureNotNull)(_this2._scrollWrapRef).style.overflowY = "scroll", g = v.getBoundingClientRect();
          }

          var _g = g,
              M = _g.width,
              S = _g.height,
              W = "function" == typeof _ ? _(M, S, x, y) : _,
              R = null !== (i = null === (s = null == W ? void 0 : W.indentFromWindow) || void 0 === s ? void 0 : s.left) && void 0 !== i ? i : 0,
              E = x - (null !== (r = W.overrideWidth) && void 0 !== r ? r : M) - (null !== (u = null === (a = null == W ? void 0 : W.indentFromWindow) || void 0 === a ? void 0 : a.right) && void 0 !== u ? u : 0),
              O = (0, l.clamp)(W.x, R, Math.max(R, E)),
              N = (null !== (d = null === (c = null == W ? void 0 : W.indentFromWindow) || void 0 === c ? void 0 : c.top) && void 0 !== d ? d : 0) + C,
              D = y - (null !== (h = W.overrideHeight) && void 0 !== h ? h : S) - (null !== (m = null === (p = null == W ? void 0 : W.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== m ? m : 0);
          var T = (0, l.clamp)(W.y, N, Math.max(N, D));
          if (W.forbidCorrectYCoord && T < W.y && (b -= W.y - T, T = W.y), t && void 0 !== _this2.props.closeOnScrollOutsideOffset && W.y <= _this2.props.closeOnScrollOutsideOffset) return void _this2._handleGlobalClose(!0);
          var P = null !== (f = W.overrideHeight) && void 0 !== f ? f : w ? b : void 0;

          _this2.setState({
            appearingMenuHeight: t ? _this2.state.appearingMenuHeight : P,
            appearingMenuWidth: t ? _this2.state.appearingMenuWidth : W.overrideWidth,
            appearingPosition: {
              x: O,
              y: T
            },
            isMeasureValid: !0
          }, function () {
            _this2._restoreScrollPosition(), e && e();
          });
        }, _this2._restoreScrollPosition = function () {
          var e = document.activeElement,
              t = (0, o.ensureNotNull)(_this2._containerRef);
          if (null !== e && t.contains(e)) try {
            e.scrollIntoView();
          } catch (e) {} else (0, o.ensureNotNull)(_this2._scrollWrapRef).scrollTop = _this2._scroll;
        }, _this2._resizeForced = function () {
          _this2.setState({
            appearingMenuHeight: void 0,
            appearingMenuWidth: void 0,
            appearingPosition: void 0,
            isMeasureValid: void 0
          });
        }, _this2._resize = function () {
          null === _this2._raf && (_this2._raf = requestAnimationFrame(function () {
            _this2.setState({
              appearingMenuHeight: void 0,
              appearingMenuWidth: void 0,
              appearingPosition: void 0,
              isMeasureValid: void 0
            }), _this2._raf = null;
          }));
        }, _this2._handleGlobalClose = function (e) {
          _this2.props.onClose(e);
        }, _this2._handleSlot = function (e) {
          _this2._manager.setContainer(e);
        }, _this2._handleScroll = function () {
          _this2._scroll = (0, o.ensureNotNull)(_this2._scrollWrapRef).scrollTop;
        }, _this2._handleScrollOutsideEnd = function () {
          clearTimeout(_this2._scrollTimeout), _this2._scrollTimeout = setTimeout(function () {
            _this2._handleMeasure({
              forceRecalcPosition: !0
            });
          }, 80);
        }, _this2._handleScrollOutside = function (e) {
          e.target !== _this2._scrollWrapRef && (_this2._handleScrollOutsideEnd(), null === _this2._scrollRaf && (_this2._scrollRaf = requestAnimationFrame(function () {
            _this2._handleMeasure({
              forceRecalcPosition: !0
            }), _this2._scrollRaf = null;
          })));
        }, _this2.state = {};
        return _this2;
      }

      _createClass(v, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this3 = this;

          this._handleMeasure({
            callback: this.props.onOpen
          });

          var _this$props = this.props,
              _this$props$customClo = _this$props.customCloseDelegate,
              e = _this$props$customClo === void 0 ? c.globalCloseDelegate : _this$props$customClo,
              t = _this$props.customRemeasureDelegate;
          e.subscribe(this, this._handleGlobalClose), null == t || t.subscribe(null, this._handleCustomRemeasureDelegate), window.addEventListener("resize", this._resize);
          var n = null !== this.context;
          this._hotkeys || n || (this._hotkeys = h.createGroup({
            desc: "Popup menu"
          }), this._hotkeys.add({
            desc: "Close",
            hotkey: 27,
            handler: function handler() {
              _this3.props.onKeyboardClose && _this3.props.onKeyboardClose(), _this3._handleGlobalClose();
            }
          })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
            capture: !0
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this._handleMeasure();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$props2 = this.props,
              _this$props2$customCl = _this$props2.customCloseDelegate,
              e = _this$props2$customCl === void 0 ? c.globalCloseDelegate : _this$props2$customCl,
              t = _this$props2.customRemeasureDelegate;
          e.unsubscribe(this, this._handleGlobalClose), null == t || t.unsubscribe(null, this._handleCustomRemeasureDelegate), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
            capture: !0
          }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              e = _this$props3.id,
              t = _this$props3.role,
              n = _this$props3["aria-label"],
              i = _this$props3["aria-labelledby"],
              o = _this$props3["aria-activedescendant"],
              l = _this$props3["aria-hidden"],
              c = _this$props3["aria-describedby"],
              d = _this$props3["aria-invalid"],
              h = _this$props3.children,
              _ = _this$props3.minWidth,
              _this$props3$theme = _this$props3.theme,
              v = _this$props3$theme === void 0 ? f : _this$props3$theme,
              y = _this$props3.className,
              x = _this$props3.maxHeight,
              C = _this$props3.onMouseOver,
              b = _this$props3.onMouseOut,
              w = _this$props3.onKeyDown,
              M = _this$props3.onFocus,
              S = _this$props3.onBlur,
              _this$state = this.state,
              W = _this$state.appearingMenuHeight,
              R = _this$state.appearingMenuWidth,
              E = _this$state.appearingPosition,
              O = _this$state.isMeasureValid,
              N = {
            "--ui-kit-menu-max-width": "".concat(E && E.x, "px"),
            maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)"
          };
          return s.createElement(m.MenuContext.Provider, {
            value: this
          }, s.createElement(p.SubmenuHandler, null, s.createElement(u.SlotContext.Provider, {
            value: this._manager
          }, s.createElement("div", {
            id: e,
            role: t,
            "aria-label": n,
            "aria-labelledby": i,
            "aria-activedescendant": o,
            "aria-hidden": l,
            "aria-describedby": c,
            "aria-invalid": d,
            className: r()(y, v.menuWrap, !O && v.isMeasuring),
            style: _objectSpread({
              height: W,
              left: E && E.x,
              minWidth: _,
              position: "fixed",
              top: E && E.y,
              width: R
            }, this.props.limitMaxWidth && N),
            "data-name": this.props["data-name"],
            ref: this._handleContainerRef,
            onScrollCapture: this.props.onScroll,
            onContextMenu: a.preventDefaultForContextMenu,
            tabIndex: this.props.tabIndex,
            onMouseOver: C,
            onMouseOut: b,
            onKeyDown: w,
            onFocus: M,
            onBlur: S
          }, s.createElement("div", {
            className: r()(v.scrollWrap, !this.props.noMomentumBasedScroll && v.momentumBased),
            style: {
              overflowY: void 0 !== W ? "scroll" : "auto",
              maxHeight: x
            },
            onScrollCapture: this._handleScroll,
            ref: this._handleScrollWrapRef
          }, s.createElement(g, {
            className: v.menuBox
          }, h)))), s.createElement(u.Slot, {
            reference: this._handleSlot
          })));
        }
      }, {
        key: "update",
        value: function update(e) {
          e ? this._resizeForced() : this._resize();
        }
      }, {
        key: "focus",
        value: function focus(e) {
          var t;
          null === (t = this._containerRef) || void 0 === t || t.focus(e);
        }
      }, {
        key: "blur",
        value: function blur() {
          var e;
          null === (e = this._containerRef) || void 0 === e || e.blur();
        }
      }]);

      return v;
    }(s.PureComponent);

    function g(e) {
      var t = (0, o.ensureNotNull)((0, s.useContext)(p.SubmenuContext)),
          n = s.useRef(null);
      return s.createElement("div", {
        ref: n,
        className: e.className,
        onMouseOver: function onMouseOver(e) {
          if (!(null !== t.current && e.target instanceof Node && (s = e.target, null === (i = n.current) || void 0 === i ? void 0 : i.contains(s)))) return;
          var s, i;
          t.isSubmenuNode(e.target) || t.setCurrent(null);
        },
        "data-name": "menu-inner"
      }, e.children);
    }

    v.contextType = p.SubmenuContext;
  },
  29197: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CloseDelegateContext: function CloseDelegateContext() {
        return r;
      }
    });
    var s = n(50959),
        i = n(59064);
    var r = s.createContext(i.globalCloseDelegate);
  },
  65718: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Portal: function Portal() {
        return a;
      },
      PortalContext: function PortalContext() {
        return u;
      }
    });
    var s = n(50959),
        i = n(962),
        r = n(36174),
        o = n(67961),
        l = n(60508);

    var a =
    /*#__PURE__*/
    function (_s$PureComponent3) {
      _inherits(a, _s$PureComponent3);

      function a() {
        var _this4;

        _classCallCheck(this, a);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments)), _this4._uuid = (0, r.guid)();
        return _this4;
      }

      _createClass(a, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);

          return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(s.createElement(u.Provider, {
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
          return null === this.context ? (0, o.getRootOverlapManager)() : this.context;
        }
      }]);

      return a;
    }(s.PureComponent);

    a.contextType = l.SlotContext;
    var u = s.createContext(null);
  },
  60508: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Slot: function Slot() {
        return i;
      },
      SlotContext: function SlotContext() {
        return r;
      }
    });
    var s = n(50959);

    var i =
    /*#__PURE__*/
    function (_s$Component) {
      _inherits(i, _s$Component);

      function i() {
        _classCallCheck(this, i);

        return _possibleConstructorReturn(this, _getPrototypeOf(i).apply(this, arguments));
      }

      _createClass(i, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          return !1;
        }
      }, {
        key: "render",
        value: function render() {
          return s.createElement("div", {
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

      return i;
    }(s.Component);

    var r = s.createContext(null);
  }
}]);