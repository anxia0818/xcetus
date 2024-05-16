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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8643], {
  59142: function _(e, t) {
    var o, n, r;
    n = [t], o = function o(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, o = Array(e.length); t < e.length; t++) {
            o[t] = e[t];
          }

          return o;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = !1;

      if ("undefined" != typeof window) {
        var n = {
          get passive() {
            o = !0;
          }

        };
        window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n);
      }

      var r = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          a = [],
          s = !1,
          i = -1,
          l = void 0,
          c = void 0,
          d = function d(e) {
        return a.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          u = function u(e) {
        var t = e || window.event;
        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          m = function m() {
        setTimeout(function () {
          void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0);
        });
      };

      e.disableBodyScroll = function (e, n) {
        if (r) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !a.some(function (t) {
            return t.targetElement === e;
          })) {
            var m = {
              targetElement: e,
              options: n || {}
            };
            a = [].concat(t(a), [m]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (i = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var o, n, r, a;
              1 === t.targetTouches.length && (n = e, a = (o = t).targetTouches[0].clientY - i, !d(o.target) && (n && 0 === n.scrollTop && 0 < a || (r = n) && r.scrollHeight - r.scrollTop <= r.clientHeight && a < 0 ? u(o) : o.stopPropagation()));
            }, s || (document.addEventListener("touchmove", u, o ? {
              passive: !1
            } : void 0), s = !0);
          }
        } else {
          v = n, setTimeout(function () {
            if (void 0 === c) {
              var e = !!v && !0 === v.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var p = {
            targetElement: e,
            options: n || {}
          };
          a = [].concat(t(a), [p]);
        }

        var v;
      }, e.clearAllBodyScrollLocks = function () {
        r ? (a.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), s && (document.removeEventListener("touchmove", u, o ? {
          passive: !1
        } : void 0), s = !1), a = [], i = -1) : (m(), a = []);
      }, e.enableBodyScroll = function (e) {
        if (r) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, a = a.filter(function (t) {
            return t.targetElement !== e;
          }), s && 0 === a.length && (document.removeEventListener("touchmove", u, o ? {
            passive: !1
          } : void 0), s = !1);
        } else 1 === a.length && a[0].targetElement === e ? (m(), a = []) : a = a.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (r = "function" == typeof o ? o.apply(t, n) : o) || (e.exports = r);
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
  37558: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DrawerContext: function DrawerContext() {
        return s;
      },
      DrawerManager: function DrawerManager() {
        return a;
      }
    });
    var n = o(50959),
        r = o(99054);

    var a =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(a, _n$PureComponent);

      function a(e) {
        var _this;

        _classCallCheck(this, a);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, e)), _this._isBodyFixed = !1, _this._addDrawer = function (e) {
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

      _createClass(a, [{
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
          return n.createElement(s.Provider, {
            value: {
              addDrawer: this._addDrawer,
              removeDrawer: this._removeDrawer,
              currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
            }
          }, this.props.children);
        }
      }]);

      return a;
    }(n.PureComponent);

    var s = n.createContext(null);
  },
  41590: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Drawer: function Drawer() {
        return m;
      }
    });
    var n = o(50959),
        r = o(50151),
        a = o(97754),
        s = o(36174),
        i = o(65718),
        l = o(37558),
        c = o(29197),
        d = o(86656),
        u = o(66076);

    function m(e) {
      var _e$position = e.position,
          t = _e$position === void 0 ? "Bottom" : _e$position,
          o = e.onClose,
          d = e.children,
          m = e.className,
          _e$theme = e.theme,
          v = _e$theme === void 0 ? u : _e$theme,
          f = (0, r.ensureNotNull)((0, n.useContext)(l.DrawerContext)),
          _ref = (0, n.useState)(function () {
        return (0, s.randomHash)();
      }),
          _ref2 = _slicedToArray(_ref, 1),
          h = _ref2[0],
          g = (0, n.useRef)(null),
          w = (0, n.useContext)(c.CloseDelegateContext);

      return (0, n.useLayoutEffect)(function () {
        return (0, r.ensureNotNull)(g.current).focus({
          preventScroll: !0
        }), w.subscribe(f, o), f.addDrawer(h), function () {
          f.removeDrawer(h), w.unsubscribe(f, o);
        };
      }, []), n.createElement(i.Portal, null, n.createElement("div", {
        className: a(u.wrap, u["position".concat(t)])
      }, h === f.currentDrawer && n.createElement("div", {
        className: u.backdrop,
        onClick: o
      }), n.createElement(p, {
        className: a(v.drawer, u["position".concat(t)], m),
        ref: g,
        "data-name": e["data-name"]
      }, d)));
    }

    var p = (0, n.forwardRef)(function (e, t) {
      var o = e.className,
          r = _objectWithoutProperties(e, ["className"]);

      return n.createElement(d.TouchScrollContainer, _objectSpread({
        className: a(u.drawer, o),
        tabIndex: -1,
        ref: t
      }, r));
    });
  },
  20520: function _(e, t, o) {
    "use strict";

    o.d(t, {
      PopupMenu: function PopupMenu() {
        return m;
      }
    });
    var n = o(50959),
        r = o(962),
        a = o(62942),
        s = o(65718),
        i = o(27317),
        l = o(29197);
    var c = n.createContext(void 0);
    var d = o(36383);
    var u = n.createContext({
      setMenuMaxWidth: !1
    });

    function m(e) {
      var t = e.controller,
          o = e.children,
          m = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          p = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          v = e.doNotCloseOn,
          f = e.onClickOutside,
          h = e.onClose,
          g = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          w = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          E = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          y = (0, n.useContext)(l.CloseDelegateContext),
          b = n.useContext(u),
          C = (0, n.useContext)(c),
          x = (0, d.useOutsideEvent)({
        handler: function handler(e) {
          f && f(e);
          if (!p) return;
          var t = (0, a["default"])(v) ? v() : null == v ? [] : [v];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _o = _step.value;

                var _t = r.findDOMNode(_o);

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

          h();
        },
        mouseDown: !0,
        touchStart: !0
      });

      return m ? n.createElement(s.Portal, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        pointerEvents: "none"
      }, n.createElement("span", {
        ref: x,
        style: {
          pointerEvents: "auto"
        }
      }, n.createElement(i.Menu, _objectSpread({}, E, {
        onClose: h,
        onKeyboardClose: g,
        onScroll: function onScroll(t) {
          var o = e.onScroll;
          o && o(t);
        },
        customCloseDelegate: y,
        customRemeasureDelegate: C,
        ref: t,
        "data-name": w,
        limitMaxWidth: b.setMenuMaxWidth
      }), o))) : null;
    }
  },
  86656: function _(e, t, o) {
    "use strict";

    o.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return i;
      }
    });
    var n = o(50959),
        r = o(59142),
        a = o(50151),
        s = o(49483);
    var i = (0, n.forwardRef)(function (e, t) {
      var o = e.children,
          a = _objectWithoutProperties(e, ["children"]),
          i = (0, n.useRef)(null);

      return (0, n.useImperativeHandle)(t, function () {
        return i.current;
      }), (0, n.useLayoutEffect)(function () {
        if (s.CheckMobile.iOS()) return null !== i.current && (0, r.disableBodyScroll)(i.current, {
          allowTouchMove: l(i)
        }), function () {
          null !== i.current && (0, r.enableBodyScroll)(i.current);
        };
      }, []), n.createElement("div", _objectSpread({
        ref: i
      }, a), o);
    });

    function l(e) {
      return function (t) {
        var o = (0, a.ensureNotNull)(e.current),
            n = document.activeElement;
        return !o.contains(t) || null !== n && o.contains(n) && n.contains(t);
      };
    }
  },
  64165: function _(e) {
    e.exports = {
      "css-value-small-size": "18px",
      "css-value-medium-size": "22px",
      "css-value-large-size": "28px",
      "css-value-border-radius-small-size": "9px",
      "css-value-border-radius-medium-size": "11px",
      "css-value-border-radius-large-size": "8px",
      "css-value-vertical-padding-size": "12px",
      "css-value-horizontal-padding-size": "14px",
      popupWidget: "popupWidget-Wu2pIo3E",
      large: "large-Wu2pIo3E",
      mobile: "mobile-Wu2pIo3E",
      desc: "desc-Wu2pIo3E",
      icon: "icon-Wu2pIo3E",
      small: "small-Wu2pIo3E",
      medium: "medium-Wu2pIo3E",
      title: "title-Wu2pIo3E",
      text: "text-Wu2pIo3E",
      item: "item-Wu2pIo3E",
      boldItem: "boldItem-Wu2pIo3E",
      action: "action-Wu2pIo3E",
      additionalWidget: "additionalWidget-Wu2pIo3E"
    };
  },
  52685: function _(e, t, o) {
    "use strict";

    o.r(t), o.d(t, {
      render: function render() {
        return C;
      }
    });
    var n = o(50959),
        r = o(962),
        a = o(20520),
        s = o(90692),
        i = o(41590),
        l = o(37558),
        c = o(36174),
        d = o(97754),
        u = o(50151),
        m = o(9745),
        p = o(77975),
        v = o(1722),
        f = o(64165);
    var h = new WeakMap(),
        g = new WeakMap();

    function w(e) {
      var t = (0, p.useWatchedValueReadonly)({
        watchedValue: e.info
      });
      if (null === t) return null;
      var o = t.map(function (t) {
        var o = t.title,
            r = t.titleColor,
            a = t.icon,
            s = t.iconClassName,
            i = t.html,
            l = t.action,
            p = t.size;
        h.has(t) || h.set(t, (0, c.randomHash)());
        var w = [];
        return void 0 !== e.additionalWidgets && (w = e.additionalWidgets.map(function (e) {
          return g.has(e) || g.set(e, (0, c.randomHash)()), e.renderer((0, u.ensureDefined)(g.get(e)), f.additionalWidget);
        })), n.createElement("div", {
          key: h.get(t),
          className: d(f.popupWidget, f[p], e.isMobile && f.mobile)
        }, n.createElement(m.Icon, {
          className: d(f.icon, s, f[p]),
          style: {
            "--custom-status-color": r || void 0
          },
          icon: a || void 0
        }), n.createElement("div", {
          className: f.desc
        }, n.createElement("span", {
          style: {
            color: r || void 0
          },
          className: d(f.title, f[p])
        }, o), i && n.createElement("p", {
          className: d(f.text, f[p])
        }, i.map(function (e, t) {
          var o, r;
          return (0, v.isObject)(e) ? (o = e.text, r = e.bold) : o = e, n.createElement("span", {
            key: "html_item_".concat(t),
            className: d(f.item, r && f.boldItem),
            dangerouslySetInnerHTML: {
              __html: o
            }
          });
        })), l && n.createElement("span", {
          className: d(l.tooltip && "apply-common-tooltip", f.action, f[p]),
          onClick: function onClick() {
            e.onClose(), null == l || l.onClick();
          },
          title: l.tooltip
        }, l.text), w));
      });
      return n.createElement(n.Fragment, null, o);
    }

    var E = new WeakMap();

    function y(e) {
      var t = e.statusWidgetInfos,
          _e$matchMediaRule = e.matchMediaRule,
          o = _e$matchMediaRule === void 0 ? "screen and (min-width: 431px)" : _e$matchMediaRule;
      return n.createElement(l.DrawerManager, null, n.createElement(s.MatchMedia, {
        rule: o
      }, function (o) {
        return o ? n.createElement(a.PopupMenu, {
          isOpened: !0,
          onClose: e.onClose,
          position: e.position,
          doNotCloseOn: e.rendererButton
        }, n.createElement(b, {
          widgetInfo: t,
          onClose: e.onClose,
          isMobile: !o
        })) : n.createElement(i.Drawer, {
          onClose: e.onClose,
          position: "Bottom"
        }, n.createElement(b, {
          widgetInfo: t,
          onClose: e.onClose,
          isMobile: !o
        }));
      }));
    }

    function b(e) {
      return n.createElement(n.Fragment, null, e.widgetInfo.filter(function (e) {
        return e.visible.value();
      }).map(function (t) {
        return E.has(t) || E.set(t, (0, c.randomHash)()), n.createElement(w, {
          key: E.get(t),
          info: t.model.fullInfo(),
          onClose: e.onClose,
          additionalWidgets: t.additionalWidgets,
          isMobile: e.isMobile
        });
      }));
    }

    function C(e) {
      var t = e.opened,
          o = e.container,
          a = _objectWithoutProperties(e, ["opened", "container"]);

      t ? r.render(n.createElement(y, _objectSpread({}, a)), o) : r.unmountComponentAtNode(o);
    }
  }
}]);