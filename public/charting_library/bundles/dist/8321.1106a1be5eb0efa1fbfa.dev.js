"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8321], {
  45300: function _(e) {
    e.exports = {};
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
  71986: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      item: "item-jFqVJoPk",
      hovered: "hovered-jFqVJoPk",
      isDisabled: "isDisabled-jFqVJoPk",
      isActive: "isActive-jFqVJoPk",
      shortcut: "shortcut-jFqVJoPk",
      toolbox: "toolbox-jFqVJoPk",
      withIcon: "withIcon-jFqVJoPk",
      "round-icon": "round-icon-jFqVJoPk",
      icon: "icon-jFqVJoPk",
      labelRow: "labelRow-jFqVJoPk",
      label: "label-jFqVJoPk",
      showOnHover: "showOnHover-jFqVJoPk",
      "disclosure-item-circle-logo": "disclosure-item-circle-logo-jFqVJoPk",
      showOnFocus: "showOnFocus-jFqVJoPk"
    };
  },
  34587: function _(e) {
    e.exports = {
      icon: "icon-WB2y0EnP",
      dropped: "dropped-WB2y0EnP"
    };
  },
  39416: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useFunctionalRefObject: function useFunctionalRefObject() {
        return i;
      }
    });
    var n = o(50959),
        r = o(43010);

    function i(e) {
      var t = (0, n.useMemo)(function () {
        return function (e) {
          var t = function t(o) {
            e(o), t.current = o;
          };

          return t.current = null, t;
        }(function (e) {
          s.current(e);
        });
      }, []),
          o = (0, n.useRef)(null),
          i = function i(t) {
        if (null === t) return a(o.current, t), void (o.current = null);
        o.current !== e && (o.current = e, a(o.current, t));
      },
          s = (0, n.useRef)(i);

      return s.current = i, (0, r.useIsomorphicLayoutEffect)(function () {
        if (null !== t.current) return s.current(t.current), function () {
          return s.current(null);
        };
      }, [e]), t;
    }

    function a(e, t) {
      null !== e && ("function" == typeof e ? e(t) : e.current = t);
    }
  },
  43010: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useIsomorphicLayoutEffect: function useIsomorphicLayoutEffect() {
        return r;
      }
    });
    var n = o(50959);

    function r(e, t) {
      ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(e, t);
    }
  },
  27267: function _(e, t, o) {
    "use strict";

    function n(e, t, o, n, r) {
      function i(r) {
        if (e > r.timeStamp) return;
        var i = r.target;
        void 0 !== o && null !== t && null !== i && i.ownerDocument === n && (t.contains(i) || o(r));
      }

      return r.click && n.addEventListener("click", i, !1), r.mouseDown && n.addEventListener("mousedown", i, !1), r.touchEnd && n.addEventListener("touchend", i, !1), r.touchStart && n.addEventListener("touchstart", i, !1), function () {
        n.removeEventListener("click", i, !1), n.removeEventListener("mousedown", i, !1), n.removeEventListener("touchend", i, !1), n.removeEventListener("touchstart", i, !1);
      };
    }

    o.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return n;
      }
    });
  },
  90186: function _(e, t, o) {
    "use strict";

    function n(e) {
      return i(e, a);
    }

    function r(e) {
      return i(e, s);
    }

    function i(e, t) {
      var o = Object.entries(e).filter(t),
          n = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e = _step$value[0],
              _t = _step$value[1];

          n[_e] = _t;
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

      return n;
    }

    function a(e) {
      var _e2 = _slicedToArray(e, 2),
          t = _e2[0],
          o = _e2[1];

      return 0 === t.indexOf("data-") && "string" == typeof o;
    }

    function s(e) {
      return 0 === e[0].indexOf("aria-");
    }

    o.d(t, {
      filterAriaProps: function filterAriaProps() {
        return r;
      },
      filterDataProps: function filterDataProps() {
        return n;
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
  76460: function _(e, t, o) {
    "use strict";

    function n(e) {
      return 0 === e.detail;
    }

    o.d(t, {
      isKeyboardClick: function isKeyboardClick() {
        return n;
      }
    });
  },
  50238: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useRovingTabindexElement: function useRovingTabindexElement() {
        return a;
      }
    });
    var n = o(50959),
        r = o(39416),
        i = o(16838);

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref = (0, n.useState)(!1),
          _ref2 = _slicedToArray(_ref, 2),
          o = _ref2[0],
          a = _ref2[1],
          s = (0, r.useFunctionalRefObject)(e);

      return (0, n.useLayoutEffect)(function () {
        if (!i.PLATFORM_ACCESSIBILITY_ENABLED) return;
        var e = s.current;
        if (null === e) return;

        var t = function t(e) {
          switch (e.type) {
            case "roving-tabindex:main-element":
              a(!0);
              break;

            case "roving-tabindex:secondary-element":
              a(!1);
          }
        };

        return e.addEventListener("roving-tabindex:main-element", t), e.addEventListener("roving-tabindex:secondary-element", t), function () {
          e.removeEventListener("roving-tabindex:main-element", t), e.removeEventListener("roving-tabindex:secondary-element", t);
        };
      }, t), [s, i.PLATFORM_ACCESSIBILITY_ENABLED ? o ? 0 : -1 : void 0];
    }
  },
  76068: function _(e, t, o) {
    "use strict";

    o.d(t, {
      CircleLogo: function CircleLogo() {
        return i;
      }
    });
    var n = o(50959),
        r = o(58492);
    o(45300);

    function i(e) {
      var t, o;
      var i = (0, r.getStyleClasses)(e.size, e.className),
          a = null !== (o = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== o ? o : "";
      return (0, r.isCircleLogoWithUrlProps)(e) ? n.createElement("img", {
        className: i,
        src: e.logoUrl,
        alt: a,
        title: e.title,
        loading: e.loading,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }) : n.createElement("span", {
        className: i,
        title: e.title,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }, e.placeholderLetter);
    }
  },
  58492: function _(e, t, o) {
    "use strict";

    o.d(t, {
      getStyleClasses: function getStyleClasses() {
        return r;
      },
      isCircleLogoWithUrlProps: function isCircleLogoWithUrlProps() {
        return i;
      }
    });
    var n = o(97754);

    function r(e, t) {
      return n("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function i(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  37558: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DrawerContext: function DrawerContext() {
        return a;
      },
      DrawerManager: function DrawerManager() {
        return i;
      }
    });
    var n = o(50959),
        r = o(99054);

    var i =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(i, _n$PureComponent);

      function i(e) {
        var _this;

        _classCallCheck(this, i);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this._isBodyFixed = !1, _this._addDrawer = function (e) {
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

      _createClass(i, [{
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
          return n.createElement(a.Provider, {
            value: {
              addDrawer: this._addDrawer,
              removeDrawer: this._removeDrawer,
              currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
            }
          }, this.props.children);
        }
      }]);

      return i;
    }(n.PureComponent);

    var a = n.createContext(null);
  },
  41590: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Drawer: function Drawer() {
        return h;
      }
    });
    var n = o(50959),
        r = o(50151),
        i = o(97754),
        a = o(36174),
        s = o(65718),
        c = o(37558),
        l = o(29197),
        d = o(86656),
        u = o(66076);

    function h(e) {
      var _e$position = e.position,
          t = _e$position === void 0 ? "Bottom" : _e$position,
          o = e.onClose,
          d = e.children,
          h = e.className,
          _e$theme = e.theme,
          m = _e$theme === void 0 ? u : _e$theme,
          f = (0, r.ensureNotNull)((0, n.useContext)(c.DrawerContext)),
          _ref3 = (0, n.useState)(function () {
        return (0, a.randomHash)();
      }),
          _ref4 = _slicedToArray(_ref3, 1),
          v = _ref4[0],
          g = (0, n.useRef)(null),
          b = (0, n.useContext)(l.CloseDelegateContext);

      return (0, n.useLayoutEffect)(function () {
        return (0, r.ensureNotNull)(g.current).focus({
          preventScroll: !0
        }), b.subscribe(f, o), f.addDrawer(v), function () {
          f.removeDrawer(v), b.unsubscribe(f, o);
        };
      }, []), n.createElement(s.Portal, null, n.createElement("div", {
        className: i(u.wrap, u["position".concat(t)])
      }, v === f.currentDrawer && n.createElement("div", {
        className: u.backdrop,
        onClick: o
      }), n.createElement(p, {
        className: i(m.drawer, u["position".concat(t)], h),
        ref: g,
        "data-name": e["data-name"]
      }, d)));
    }

    var p = (0, n.forwardRef)(function (e, t) {
      var o = e.className,
          r = _objectWithoutProperties(e, ["className"]);

      return n.createElement(d.TouchScrollContainer, _objectSpread({
        className: i(u.drawer, o),
        tabIndex: -1,
        ref: t
      }, r));
    });
  },
  16396: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DEFAULT_POPUP_MENU_ITEM_THEME: function DEFAULT_POPUP_MENU_ITEM_THEME() {
        return d;
      },
      PopupMenuItem: function PopupMenuItem() {
        return h;
      }
    });
    var n = o(50959),
        r = o(97754),
        i = o(59064),
        a = o(51768),
        s = o(90186),
        c = o(76068),
        l = o(71986);
    var d = l;

    function u(e) {
      e.stopPropagation();
    }

    function h(e) {
      var _r, _r2;

      var t = e.id,
          o = e.role,
          d = e["aria-label"],
          h = e["aria-selected"],
          p = e["aria-checked"],
          m = e.className,
          f = e.title,
          v = e.labelRowClassName,
          g = e.labelClassName,
          b = e.shortcut,
          w = e.forceShowShortcuts,
          E = e.icon,
          C = e.isActive,
          D = e.isDisabled,
          k = e.isHovered,
          x = e.appearAsDisabled,
          N = e.label,
          y = e.link,
          _ = e.showToolboxOnHover,
          O = e.showToolboxOnFocus,
          T = e.target,
          M = e.rel,
          B = e.toolbox,
          L = e.reference,
          F = e.onMouseOut,
          P = e.onMouseOver,
          A = e.onKeyDown,
          _e$suppressToolboxCli = e.suppressToolboxClick,
          S = _e$suppressToolboxCli === void 0 ? !0 : _e$suppressToolboxCli,
          _e$theme2 = e.theme,
          R = _e$theme2 === void 0 ? l : _e$theme2,
          I = e.tabIndex,
          W = e.tagName,
          U = e.renderComponent,
          j = e.roundedIcon,
          z = e.iconAriaProps,
          Q = e.circleLogo,
          H = (0, s.filterDataProps)(e),
          K = (0, n.useRef)(null),
          G = (0, n.useMemo)(function () {
        return function (e) {
          function t(t) {
            var o = t.reference,
                r = _objectWithoutProperties(t, ["reference"]),
                i = null != e ? e : r.href ? "a" : "div",
                a = "a" === i ? r : function (e) {
              var t = e.download,
                  o = e.href,
                  n = e.hrefLang,
                  r = e.media,
                  i = e.ping,
                  a = e.rel,
                  s = e.target,
                  c = e.type,
                  l = e.referrerPolicy,
                  d = _objectWithoutProperties(e, ["download", "href", "hrefLang", "media", "ping", "rel", "target", "type", "referrerPolicy"]);

              return d;
            }(r);

            return n.createElement(i, _objectSpread({}, a, {
              ref: o
            }));
          }

          return t.displayName = "DefaultComponent(".concat(e, ")"), t;
        }(W);
      }, [W]),
          V = null != U ? U : G;
      return n.createElement(V, _objectSpread({}, H, {
        id: t,
        role: o,
        "aria-label": d,
        "aria-selected": h,
        "aria-checked": p,
        className: r(m, R.item, E && R.withIcon, (_r = {}, _defineProperty(_r, R.isActive, C), _defineProperty(_r, R.isDisabled, D || x), _defineProperty(_r, R.hovered, k), _r)),
        title: f,
        href: y,
        target: T,
        rel: M,
        reference: function reference(e) {
          K.current = e, "function" == typeof L && L(e);
          "object" == _typeof(L) && (L.current = e);
        },
        onClick: function onClick(t) {
          var o = e.dontClosePopup,
              n = e.onClick,
              r = e.onClickArg,
              s = e.trackEventObject;
          if (D) return;
          s && (0, a.trackEvent)(s.category, s.event, s.label);
          n && n(r, t);
          o || (0, i.globalCloseMenu)();
        },
        onContextMenu: function onContextMenu(t) {
          var o = e.trackEventObject,
              n = e.trackRightClick;
          o && n && (0, a.trackEvent)(o.category, o.event, "".concat(o.label, "_rightClick"));
        },
        onMouseUp: function onMouseUp(t) {
          var o = e.trackEventObject,
              n = e.trackMouseWheelClick;

          if (1 === t.button && y && o) {
            var _e3 = o.label;
            n && (_e3 += "_mouseWheelClick"), (0, a.trackEvent)(o.category, o.event, _e3);
          }
        },
        onMouseOver: P,
        onMouseOut: F,
        onKeyDown: A,
        tabIndex: I
      }), Q && n.createElement(c.CircleLogo, _objectSpread({}, z, {
        className: l["disclosure-item-circle-logo"],
        size: "xxxsmall",
        logoUrl: Q.logoUrl,
        placeholderLetter: Q.placeholderLetter
      })), E && n.createElement("span", {
        "aria-label": z && z["aria-label"],
        "aria-hidden": z && Boolean(z["aria-hidden"]),
        className: r(R.icon, j && l["round-icon"]),
        dangerouslySetInnerHTML: {
          __html: E
        }
      }), n.createElement("span", {
        className: r(R.labelRow, v)
      }, n.createElement("span", {
        className: r(R.label, g)
      }, N)), (void 0 !== b || w) && n.createElement("span", {
        className: R.shortcut
      }, (q = b) && q.split("+").join(" + ")), void 0 !== B && n.createElement("span", {
        onClick: S ? u : void 0,
        className: r(R.toolbox, (_r2 = {}, _defineProperty(_r2, R.showOnHover, _), _defineProperty(_r2, R.showOnFocus, O), _r2))
      }, B));
      var q;
    }
  },
  20520: function _(e, t, o) {
    "use strict";

    o.d(t, {
      PopupMenu: function PopupMenu() {
        return h;
      }
    });
    var n = o(50959),
        r = o(962),
        i = o(62942),
        a = o(65718),
        s = o(27317),
        c = o(29197);
    var l = n.createContext(void 0);
    var d = o(36383);
    var u = n.createContext({
      setMenuMaxWidth: !1
    });

    function h(e) {
      var t = e.controller,
          o = e.children,
          h = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          p = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          m = e.doNotCloseOn,
          f = e.onClickOutside,
          v = e.onClose,
          g = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          b = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          w = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          E = (0, n.useContext)(c.CloseDelegateContext),
          C = n.useContext(u),
          D = (0, n.useContext)(l),
          k = (0, d.useOutsideEvent)({
        handler: function handler(e) {
          f && f(e);
          if (!p) return;
          var t = (0, i["default"])(m) ? m() : null == m ? [] : [m];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _o = _step2.value;

                var _t2 = r.findDOMNode(_o);

                if (_t2 instanceof Node && _t2.contains(e.target)) return;
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
          }

          v();
        },
        mouseDown: !0,
        touchStart: !0
      });

      return h ? n.createElement(a.Portal, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        pointerEvents: "none"
      }, n.createElement("span", {
        ref: k,
        style: {
          pointerEvents: "auto"
        }
      }, n.createElement(s.Menu, _objectSpread({}, w, {
        onClose: v,
        onKeyboardClose: g,
        onScroll: function onScroll(t) {
          var o = e.onScroll;
          o && o(t);
        },
        customCloseDelegate: E,
        customRemeasureDelegate: D,
        ref: t,
        "data-name": b,
        limitMaxWidth: C.setMenuMaxWidth
      }), o))) : null;
    }
  },
  10381: function _(e, t, o) {
    "use strict";

    o.d(t, {
      ToolWidgetCaret: function ToolWidgetCaret() {
        return c;
      }
    });
    var n = o(50959),
        r = o(97754),
        i = o(9745),
        a = o(34587),
        s = o(578);

    function c(e) {
      var t = e.dropped,
          o = e.className;
      return n.createElement(i.Icon, {
        className: r(o, a.icon, _defineProperty({}, a.dropped, t)),
        icon: s
      });
    }
  },
  86656: function _(e, t, o) {
    "use strict";

    o.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return s;
      }
    });
    var n = o(50959),
        r = o(59142),
        i = o(50151),
        a = o(49483);
    var s = (0, n.forwardRef)(function (e, t) {
      var o = e.children,
          i = _objectWithoutProperties(e, ["children"]),
          s = (0, n.useRef)(null);

      return (0, n.useImperativeHandle)(t, function () {
        return s.current;
      }), (0, n.useLayoutEffect)(function () {
        if (a.CheckMobile.iOS()) return null !== s.current && (0, r.disableBodyScroll)(s.current, {
          allowTouchMove: c(s)
        }), function () {
          null !== s.current && (0, r.enableBodyScroll)(s.current);
        };
      }, []), n.createElement("div", _objectSpread({
        ref: s
      }, i), o);
    });

    function c(e) {
      return function (t) {
        var o = (0, i.ensureNotNull)(e.current),
            n = document.activeElement;
        return !o.contains(t) || null !== n && o.contains(n) && n.contains(t);
      };
    }
  },
  78029: function _(e) {
    e.exports = {
      button: "button-GwQQdU8S",
      hover: "hover-GwQQdU8S",
      isInteractive: "isInteractive-GwQQdU8S",
      accessible: "accessible-GwQQdU8S",
      isGrouped: "isGrouped-GwQQdU8S",
      isActive: "isActive-GwQQdU8S",
      isOpened: "isOpened-GwQQdU8S",
      isDisabled: "isDisabled-GwQQdU8S",
      text: "text-GwQQdU8S",
      icon: "icon-GwQQdU8S",
      endIcon: "endIcon-GwQQdU8S"
    };
  },
  2869: function _(e) {
    e.exports = {
      button: "button-xNqEcuN2"
    };
  },
  42919: function _(e) {
    e.exports = {
      button: "button-merBkM5y",
      hover: "hover-merBkM5y",
      accessible: "accessible-merBkM5y",
      arrow: "arrow-merBkM5y",
      arrowWrap: "arrowWrap-merBkM5y",
      isOpened: "isOpened-merBkM5y"
    };
  },
  71468: function _(e, t, o) {
    "use strict";

    function n(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
    }

    function r(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
    }

    o.d(t, {
      becomeMainElement: function becomeMainElement() {
        return n;
      },
      becomeSecondaryElement: function becomeSecondaryElement() {
        return r;
      }
    });
  },
  12811: function _(e, t, o) {
    "use strict";

    o.d(t, {
      HorizontalAttachEdge: function HorizontalAttachEdge() {
        return r;
      },
      HorizontalDropDirection: function HorizontalDropDirection() {
        return a;
      },
      VerticalAttachEdge: function VerticalAttachEdge() {
        return n;
      },
      VerticalDropDirection: function VerticalDropDirection() {
        return i;
      },
      getPopupPositioner: function getPopupPositioner() {
        return l;
      }
    });
    var n,
        r,
        i,
        a,
        s = o(50151);
    !function (e) {
      e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom", e[e.AutoStrict = 2] = "AutoStrict";
    }(n || (n = {})), function (e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right";
    }(r || (r = {})), function (e) {
      e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop";
    }(i || (i = {})), function (e) {
      e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft";
    }(a || (a = {}));
    var c = {
      verticalAttachEdge: n.Bottom,
      horizontalAttachEdge: r.Left,
      verticalDropDirection: i.FromTopToBottom,
      horizontalDropDirection: a.FromLeftToRight,
      verticalMargin: 0,
      horizontalMargin: 0,
      matchButtonAndListboxWidths: !1
    };

    function l(e, t) {
      return function (o, l, d, u) {
        var h, p;
        var m = (0, s.ensureNotNull)(e).getBoundingClientRect(),
            _t$horizontalAttachEd = t.horizontalAttachEdge,
            f = _t$horizontalAttachEd === void 0 ? c.horizontalAttachEdge : _t$horizontalAttachEd,
            _t$horizontalDropDire = t.horizontalDropDirection,
            v = _t$horizontalDropDire === void 0 ? c.horizontalDropDirection : _t$horizontalDropDire,
            _t$horizontalMargin = t.horizontalMargin,
            g = _t$horizontalMargin === void 0 ? c.horizontalMargin : _t$horizontalMargin,
            _t$verticalMargin = t.verticalMargin,
            b = _t$verticalMargin === void 0 ? c.verticalMargin : _t$verticalMargin,
            _t$matchButtonAndList = t.matchButtonAndListboxWidths,
            w = _t$matchButtonAndList === void 0 ? c.matchButtonAndListboxWidths : _t$matchButtonAndList;
        var E = null !== (h = t.verticalAttachEdge) && void 0 !== h ? h : c.verticalAttachEdge,
            C = null !== (p = t.verticalDropDirection) && void 0 !== p ? p : c.verticalDropDirection;
        E === n.AutoStrict && (u < m.y + m.height + b + l ? (E = n.Top, C = i.FromBottomToTop) : (E = n.Bottom, C = i.FromTopToBottom));
        var D = E === n.Top ? -1 * b : b,
            k = f === r.Right ? m.right : m.left,
            x = E === n.Top ? m.top : m.bottom,
            N = {
          x: k - (v === a.FromRightToLeft ? o : 0) + g,
          y: x - (C === i.FromBottomToTop ? l : 0) + D
        };
        return w && (N.overrideWidth = m.width), N;
      };
    }
  },
  31409: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DEFAULT_TOOL_WIDGET_BUTTON_THEME: function DEFAULT_TOOL_WIDGET_BUTTON_THEME() {
        return s;
      },
      ToolWidgetButton: function ToolWidgetButton() {
        return c;
      }
    });
    var n = o(50959),
        r = o(97754),
        i = o(9745),
        a = o(78029);
    var s = a,
        c = n.forwardRef(function (e, t) {
      var _r4;

      var _e$tag = e.tag,
          o = _e$tag === void 0 ? "div" : _e$tag,
          s = e.icon,
          c = e.endIcon,
          l = e.isActive,
          d = e.isOpened,
          u = e.isDisabled,
          h = e.isGrouped,
          p = e.isHovered,
          m = e.onClick,
          f = e.text,
          v = e.textBeforeIcon,
          g = e.title,
          _e$theme3 = e.theme,
          b = _e$theme3 === void 0 ? a : _e$theme3,
          w = e.className,
          E = e.forceInteractive,
          C = e.inactive,
          D = e["data-name"],
          k = e["data-tooltip"],
          x = _objectWithoutProperties(e, ["tag", "icon", "endIcon", "isActive", "isOpened", "isDisabled", "isGrouped", "isHovered", "onClick", "text", "textBeforeIcon", "title", "theme", "className", "forceInteractive", "inactive", "data-name", "data-tooltip"]),
          N = r(w, b.button, (g || k) && "apply-common-tooltip", (_r4 = {}, _defineProperty(_r4, b.isActive, l), _defineProperty(_r4, b.isOpened, d), _defineProperty(_r4, b.isInteractive, (E || Boolean(m)) && !u && !C), _defineProperty(_r4, b.isDisabled, Boolean(u || C)), _defineProperty(_r4, b.isGrouped, h), _defineProperty(_r4, b.hover, p), _r4)),
          y = s && ("string" == typeof s ? n.createElement(i.Icon, {
        className: b.icon,
        icon: s
      }) : n.cloneElement(s, {
        className: r(b.icon, s.props.className)
      }));

      return "button" === o ? n.createElement("button", _objectSpread({}, x, {
        ref: t,
        type: "button",
        className: r(N, b.accessible),
        disabled: u && !C,
        onClick: m,
        title: g,
        "data-name": D,
        "data-tooltip": k
      }), v && f && n.createElement("div", {
        className: r("js-button-text", b.text)
      }, f), y, !v && f && n.createElement("div", {
        className: r("js-button-text", b.text)
      }, f)) : n.createElement("div", _objectSpread({}, x, {
        ref: t,
        "data-role": "button",
        className: N,
        onClick: u ? void 0 : m,
        title: g,
        "data-name": D,
        "data-tooltip": k
      }), v && f && n.createElement("div", {
        className: r("js-button-text", b.text)
      }, f), y, !v && f && n.createElement("div", {
        className: r("js-button-text", b.text)
      }, f), c && n.createElement(i.Icon, {
        icon: c,
        className: a.endIcon
      }));
    });
  },
  50813: function _(e, t, o) {
    "use strict";

    o.d(t, {
      ToolWidgetIconButton: function ToolWidgetIconButton() {
        return s;
      }
    });
    var n = o(50959),
        r = o(97754),
        i = o(31409),
        a = o(2869);
    var s = n.forwardRef(function (e, t) {
      var o = e.className,
          s = e.id,
          c = _objectWithoutProperties(e, ["className", "id"]);

      return n.createElement(i.ToolWidgetButton, _objectSpread({
        "data-name": s
      }, c, {
        ref: t,
        className: r(o, a.button)
      }));
    });
  },
  8087: function _(e, t, o) {
    "use strict";

    o.d(t, {
      ToolWidgetMenu: function ToolWidgetMenu() {
        return v;
      }
    });
    var n = o(50959),
        r = o(97754),
        i = o(3343),
        a = o(20520),
        s = o(10381),
        c = o(90186),
        l = o(37558),
        d = o(41590),
        u = o(12811),
        h = o(90692),
        p = o(14483),
        m = o(76460),
        f = o(42919);

    var v =
    /*#__PURE__*/
    function (_n$PureComponent2) {
      _inherits(v, _n$PureComponent2);

      function v(e) {
        var _this2;

        _classCallCheck(this, v);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e)), _this2._wrapperRef = null, _this2._controller = n.createRef(), _this2._handleWrapperRef = function (e) {
          _this2._wrapperRef = e, _this2.props.reference && _this2.props.reference(e);
        }, _this2._handleOpen = function () {
          var e;
          "div" !== _this2.props.tag && (null === (e = _this2._controller.current) || void 0 === e || e.focus());
        }, _this2._handleClick = function (e) {
          (p.enabled("skip_event_target_check") || e.target instanceof Node) && e.currentTarget.contains(e.target) && (_this2._handleToggleDropdown(void 0, (0, m.isKeyboardClick)(e)), _this2.props.onClick && _this2.props.onClick(e, !_this2.state.isOpened));
        }, _this2._handleToggleDropdown = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var _this2$props = _this2.props,
              o = _this2$props.onClose,
              n = _this2$props.onOpen,
              r = _this2.state.isOpened,
              i = "boolean" == typeof e ? e : !r;
          _this2.setState({
            isOpened: i,
            shouldReturnFocus: !!i && t
          }), i && n && n(), !i && o && o();
        }, _this2._handleClose = function () {
          _this2.close();
        }, _this2._handleKeyDown = function (e) {
          var t;
          var _this2$props$orientat = _this2.props.orientation,
              o = _this2$props$orientat === void 0 ? "horizontal" : _this2$props$orientat;
          if (e.defaultPrevented) return;
          if (!(e.target instanceof Node)) return;
          var n = (0, i.hashFromEvent)(e);
          if (e.currentTarget.contains(e.target)) switch (n) {
            case 40:
              if ("div" === _this2.props.tag || "horizontal" !== o) return;
              if (_this2.state.isOpened) return;
              e.preventDefault(), _this2._handleToggleDropdown(!0, !0);
              break;

            case 27:
              if (!_this2.state.isOpened || !_this2.props.closeOnEsc) return;
              e.preventDefault(), e.stopPropagation(), _this2._handleToggleDropdown(!1);
          } else {
            if ("div" === _this2.props.tag) return;

            switch (n) {
              case 27:
                {
                  e.preventDefault();
                  var _o2 = _this2.state.shouldReturnFocus;
                  _this2._handleToggleDropdown(!1), _o2 && (null === (t = _this2._wrapperRef) || void 0 === t || t.focus());
                  break;
                }
            }
          }
        }, _this2.state = {
          isOpened: !1,
          shouldReturnFocus: !1
        };
        return _this2;
      }

      _createClass(v, [{
        key: "render",
        value: function render() {
          var _r5,
              _this3 = this;

          var _this$props = this.props,
              _this$props$tag = _this$props.tag,
              e = _this$props$tag === void 0 ? "div" : _this$props$tag,
              t = _this$props.id,
              o = _this$props.arrow,
              i = _this$props.content,
              a = _this$props.isDisabled,
              l = _this$props.isDrawer,
              d = _this$props.isShowTooltip,
              u = _this$props.title,
              p = _this$props.className,
              m = _this$props.hotKey,
              f = _this$props.theme,
              v = _this$props.drawerBreakpoint,
              g = _this$props.tabIndex,
              b = this.state.isOpened,
              w = r(p, f.button, (_r5 = {
            "apply-common-tooltip": d || !a
          }, _defineProperty(_r5, f.isDisabled, a), _defineProperty(_r5, f.isOpened, b), _r5));
          return "button" === e ? n.createElement("button", _objectSpread({
            type: "button",
            id: t,
            className: r(w, f.accessible),
            disabled: a,
            onClick: this._handleClick,
            title: u,
            "data-tooltip-hotkey": m,
            ref: this._handleWrapperRef,
            onKeyDown: this._handleKeyDown,
            tabIndex: g
          }, (0, c.filterDataProps)(this.props), {}, (0, c.filterAriaProps)(this.props)), i, o && n.createElement("div", {
            className: f.arrow
          }, n.createElement("div", {
            className: f.arrowWrap
          }, n.createElement(s.ToolWidgetCaret, {
            dropped: b
          }))), this.state.isOpened && (v ? n.createElement(h.MatchMedia, {
            rule: v
          }, function (e) {
            return _this3._renderContent(e);
          }) : this._renderContent(l))) : n.createElement("div", _objectSpread({
            id: t,
            className: w,
            onClick: a ? void 0 : this._handleClick,
            title: u,
            "data-tooltip-hotkey": m,
            ref: this._handleWrapperRef,
            "data-role": "button",
            tabIndex: g,
            onKeyDown: this._handleKeyDown
          }, (0, c.filterDataProps)(this.props)), i, o && n.createElement("div", {
            className: f.arrow
          }, n.createElement("div", {
            className: f.arrowWrap
          }, n.createElement(s.ToolWidgetCaret, {
            dropped: b
          }))), this.state.isOpened && (v ? n.createElement(h.MatchMedia, {
            rule: v
          }, function (e) {
            return _this3._renderContent(e);
          }) : this._renderContent(l)));
        }
      }, {
        key: "close",
        value: function close() {
          this._handleToggleDropdown(!1);
        }
      }, {
        key: "focus",
        value: function focus() {
          var e;
          null === (e = this._wrapperRef) || void 0 === e || e.focus();
        }
      }, {
        key: "update",
        value: function update() {
          null !== this._controller.current && this._controller.current.update();
        }
      }, {
        key: "_renderContent",
        value: function _renderContent(e) {
          var _this$props2 = this.props,
              t = _this$props2.menuDataName,
              o = _this$props2.minWidth,
              r = _this$props2.menuClassName,
              i = _this$props2.maxHeight,
              _this$props2$drawerPo = _this$props2.drawerPosition,
              s = _this$props2$drawerPo === void 0 ? "Bottom" : _this$props2$drawerPo,
              c = _this$props2.children,
              h = this.state.isOpened,
              p = {
            horizontalMargin: this.props.horizontalMargin || 0,
            verticalMargin: this.props.verticalMargin || 2,
            verticalAttachEdge: this.props.verticalAttachEdge,
            horizontalAttachEdge: this.props.horizontalAttachEdge,
            verticalDropDirection: this.props.verticalDropDirection,
            horizontalDropDirection: this.props.horizontalDropDirection,
            matchButtonAndListboxWidths: this.props.matchButtonAndListboxWidths
          },
              m = Boolean(h && e && s),
              f = function (e) {
            return "function" == typeof e;
          }(c) ? c({
            isDrawer: m
          }) : c;
          return m ? n.createElement(l.DrawerManager, null, n.createElement(d.Drawer, {
            onClose: this._handleClose,
            position: s,
            "data-name": t
          }, f)) : n.createElement(a.PopupMenu, {
            reference: this.props.menuReference,
            controller: this._controller,
            closeOnClickOutside: this.props.closeOnClickOutside,
            doNotCloseOn: this,
            isOpened: h,
            minWidth: o,
            onClose: this._handleClose,
            position: (0, u.getPopupPositioner)(this._wrapperRef, p),
            className: r,
            maxHeight: i,
            "data-name": t,
            tabIndex: "div" !== this.props.tag ? -1 : void 0,
            onOpen: this._handleOpen,
            onKeyDown: this.props.onMenuKeyDown,
            onFocus: this.props.onMenuFocus
          }, f);
        }
      }]);

      return v;
    }(n.PureComponent);

    v.defaultProps = {
      arrow: !0,
      closeOnClickOutside: !0,
      theme: f
    };
  },
  578: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
  }
}]);