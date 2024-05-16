"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[2878], {
  45300: function _(e) {
    e.exports = {};
  },
  10888: function _(e) {
    e.exports = {
      "default-drawer-min-top-distance": "100px"
    };
  },
  33963: function _(e) {
    e.exports = {
      item: "item-zwyEh4hn",
      label: "label-zwyEh4hn",
      labelRow: "labelRow-zwyEh4hn",
      toolbox: "toolbox-zwyEh4hn"
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
  39416: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useFunctionalRefObject: function useFunctionalRefObject() {
        return l;
      }
    });
    var n = o(50959),
        i = o(43010);

    function l(e) {
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
          l = function l(t) {
        if (null === t) return a(o.current, t), void (o.current = null);
        o.current !== e && (o.current = e, a(o.current, t));
      },
          s = (0, n.useRef)(l);

      return s.current = l, (0, i.useIsomorphicLayoutEffect)(function () {
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
        return i;
      }
    });
    var n = o(50959);

    function i(e, t) {
      ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(e, t);
    }
  },
  27267: function _(e, t, o) {
    "use strict";

    function n(e, t, o, n, i) {
      function l(i) {
        if (e > i.timeStamp) return;
        var l = i.target;
        void 0 !== o && null !== t && null !== l && l.ownerDocument === n && (t.contains(l) || o(i));
      }

      return i.click && n.addEventListener("click", l, !1), i.mouseDown && n.addEventListener("mousedown", l, !1), i.touchEnd && n.addEventListener("touchend", l, !1), i.touchStart && n.addEventListener("touchstart", l, !1), function () {
        n.removeEventListener("click", l, !1), n.removeEventListener("mousedown", l, !1), n.removeEventListener("touchend", l, !1), n.removeEventListener("touchstart", l, !1);
      };
    }

    o.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return n;
      }
    });
  },
  67842: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useResizeObserver: function useResizeObserver() {
        return s;
      }
    });
    var n = o(50959),
        i = o(59255),
        l = o(43010),
        a = o(39416);

    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref = function (e) {
        return "function" == typeof e ? {
          callback: e
        } : e;
      }(e),
          o = _ref.callback,
          _ref$ref = _ref.ref,
          s = _ref$ref === void 0 ? null : _ref$ref,
          r = (0, n.useRef)(null),
          c = (0, n.useRef)(o);

      c.current = o;
      var u = (0, a.useFunctionalRefObject)(s),
          d = (0, n.useCallback)(function (e) {
        u(e), null !== r.current && (r.current.disconnect(), null !== e && r.current.observe(e));
      }, [u, r]);
      return (0, l.useIsomorphicLayoutEffect)(function () {
        return r.current = new i["default"](function (e, t) {
          c.current(e, t);
        }), u.current && d(u.current), function () {
          var e;
          null === (e = r.current) || void 0 === e || e.disconnect();
        };
      }, [u].concat(_toConsumableArray(t))), d;
    }
  },
  90186: function _(e, t, o) {
    "use strict";

    function n(e) {
      return l(e, a);
    }

    function i(e) {
      return l(e, s);
    }

    function l(e, t) {
      var o = Object.entries(e).filter(t),
          n = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e2 = _step$value[0],
              _t2 = _step$value[1];

          n[_e2] = _t2;
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
      var _e3 = _slicedToArray(e, 2),
          t = _e3[0],
          o = _e3[1];

      return 0 === t.indexOf("data-") && "string" == typeof o;
    }

    function s(e) {
      return 0 === e[0].indexOf("aria-");
    }

    o.d(t, {
      filterAriaProps: function filterAriaProps() {
        return i;
      },
      filterDataProps: function filterDataProps() {
        return n;
      },
      filterProps: function filterProps() {
        return l;
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
  47201: function _(e, t, o) {
    "use strict";

    function n() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      return function (t) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _o = _step2.value;
            void 0 !== _o && _o(t);
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
      };
    }

    o.d(t, {
      createSafeMulticastEventHandler: function createSafeMulticastEventHandler() {
        return n;
      }
    });
  },
  45601: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Measure: function Measure() {
        return i;
      }
    });
    var n = o(67842);

    function i(e) {
      var t = e.children,
          o = e.onResize;
      return t((0, n.useResizeObserver)(o || function () {}, [null === o]));
    }
  },
  50238: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useRovingTabindexElement: function useRovingTabindexElement() {
        return a;
      }
    });
    var n = o(50959),
        i = o(39416),
        l = o(16838);

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref2 = (0, n.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          o = _ref3[0],
          a = _ref3[1],
          s = (0, i.useFunctionalRefObject)(e);

      return (0, n.useLayoutEffect)(function () {
        if (!l.PLATFORM_ACCESSIBILITY_ENABLED) return;
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
      }, t), [s, l.PLATFORM_ACCESSIBILITY_ENABLED ? o ? 0 : -1 : void 0];
    }
  },
  76068: function _(e, t, o) {
    "use strict";

    o.d(t, {
      CircleLogo: function CircleLogo() {
        return l;
      }
    });
    var n = o(50959),
        i = o(58492);
    o(45300);

    function l(e) {
      var t, o;
      var l = (0, i.getStyleClasses)(e.size, e.className),
          a = null !== (o = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== o ? o : "";
      return (0, i.isCircleLogoWithUrlProps)(e) ? n.createElement("img", {
        className: l,
        src: e.logoUrl,
        alt: a,
        title: e.title,
        loading: e.loading,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }) : n.createElement("span", {
        className: l,
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
        return i;
      },
      isCircleLogoWithUrlProps: function isCircleLogoWithUrlProps() {
        return l;
      }
    });
    var n = o(97754);

    function i(e, t) {
      return n("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function l(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  78036: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useEnsuredContext: function useEnsuredContext() {
        return l;
      }
    });
    var n = o(50959),
        i = o(50151);

    function l(e) {
      return (0, i.ensureNotNull)((0, n.useContext)(e));
    }
  },
  70412: function _(e, t, o) {
    "use strict";

    o.d(t, {
      hoverMouseEventFilter: function hoverMouseEventFilter() {
        return l;
      },
      useAccurateHover: function useAccurateHover() {
        return a;
      },
      useHover: function useHover() {
        return i;
      }
    });
    var n = o(50959);

    function i() {
      var _ref4 = (0, n.useState)(!1),
          _ref5 = _slicedToArray(_ref4, 2),
          e = _ref5[0],
          t = _ref5[1];

      return [e, {
        onMouseOver: function onMouseOver(e) {
          l(e) && t(!0);
        },
        onMouseOut: function onMouseOut(e) {
          l(e) && t(!1);
        }
      }];
    }

    function l(e) {
      return !e.currentTarget.contains(e.relatedTarget);
    }

    function a(e) {
      var _ref6 = (0, n.useState)(!1),
          _ref7 = _slicedToArray(_ref6, 2),
          t = _ref7[0],
          o = _ref7[1];

      return (0, n.useEffect)(function () {
        var t = function t(_t3) {
          if (null === e.current) return;
          var n = e.current.contains(_t3.target);
          o(n);
        };

        return document.addEventListener("mouseover", t), function () {
          return document.removeEventListener("mouseover", t);
        };
      }, []), t;
    }
  },
  29006: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useResizeObserver: function useResizeObserver() {
        return n.useResizeObserver;
      }
    });
    var n = o(67842);
  },
  77975: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useWatchedValueReadonly: function useWatchedValueReadonly() {
        return i;
      }
    });
    var n = o(50959);

    var i = function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var o = "watchedValue" in e ? e.watchedValue : void 0,
          i = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          _ref8 = (0, n.useState)(o ? o.value() : i),
          _ref9 = _slicedToArray(_ref8, 2),
          l = _ref9[0],
          a = _ref9[1];

      return (t ? n.useLayoutEffect : n.useEffect)(function () {
        if (o) {
          a(o.value());

          var _e4 = function _e4(e) {
            return a(e);
          };

          return o.subscribe(_e4), function () {
            return o.unsubscribe(_e4);
          };
        }

        return function () {};
      }, [o]), l;
    };
  },
  16396: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DEFAULT_POPUP_MENU_ITEM_THEME: function DEFAULT_POPUP_MENU_ITEM_THEME() {
        return u;
      },
      PopupMenuItem: function PopupMenuItem() {
        return h;
      }
    });
    var n = o(50959),
        i = o(97754),
        l = o(59064),
        a = o(51768),
        s = o(90186),
        r = o(76068),
        c = o(71986);
    var u = c;

    function d(e) {
      e.stopPropagation();
    }

    function h(e) {
      var _i2, _i3;

      var t = e.id,
          o = e.role,
          u = e["aria-label"],
          h = e["aria-selected"],
          m = e["aria-checked"],
          v = e.className,
          b = e.title,
          p = e.labelRowClassName,
          g = e.labelClassName,
          f = e.shortcut,
          T = e.forceShowShortcuts,
          C = e.icon,
          _ = e.isActive,
          E = e.isDisabled,
          w = e.isHovered,
          x = e.appearAsDisabled,
          F = e.label,
          k = e.link,
          L = e.showToolboxOnHover,
          S = e.showToolboxOnFocus,
          A = e.target,
          y = e.rel,
          M = e.toolbox,
          I = e.reference,
          B = e.onMouseOut,
          D = e.onMouseOver,
          N = e.onKeyDown,
          _e$suppressToolboxCli = e.suppressToolboxClick,
          R = _e$suppressToolboxCli === void 0 ? !0 : _e$suppressToolboxCli,
          _e$theme = e.theme,
          W = _e$theme === void 0 ? c : _e$theme,
          O = e.tabIndex,
          P = e.tagName,
          V = e.renderComponent,
          H = e.roundedIcon,
          j = e.iconAriaProps,
          z = e.circleLogo,
          U = (0, s.filterDataProps)(e),
          Z = (0, n.useRef)(null),
          G = (0, n.useMemo)(function () {
        return function (e) {
          function t(t) {
            var o = t.reference,
                i = _objectWithoutProperties(t, ["reference"]),
                l = null != e ? e : i.href ? "a" : "div",
                a = "a" === l ? i : function (e) {
              var t = e.download,
                  o = e.href,
                  n = e.hrefLang,
                  i = e.media,
                  l = e.ping,
                  a = e.rel,
                  s = e.target,
                  r = e.type,
                  c = e.referrerPolicy,
                  u = _objectWithoutProperties(e, ["download", "href", "hrefLang", "media", "ping", "rel", "target", "type", "referrerPolicy"]);

              return u;
            }(i);

            return n.createElement(l, _objectSpread({}, a, {
              ref: o
            }));
          }

          return t.displayName = "DefaultComponent(".concat(e, ")"), t;
        }(P);
      }, [P]),
          K = null != V ? V : G;
      return n.createElement(K, _objectSpread({}, U, {
        id: t,
        role: o,
        "aria-label": u,
        "aria-selected": h,
        "aria-checked": m,
        className: i(v, W.item, C && W.withIcon, (_i2 = {}, _defineProperty(_i2, W.isActive, _), _defineProperty(_i2, W.isDisabled, E || x), _defineProperty(_i2, W.hovered, w), _i2)),
        title: b,
        href: k,
        target: A,
        rel: y,
        reference: function reference(e) {
          Z.current = e, "function" == typeof I && I(e);
          "object" == _typeof(I) && (I.current = e);
        },
        onClick: function onClick(t) {
          var o = e.dontClosePopup,
              n = e.onClick,
              i = e.onClickArg,
              s = e.trackEventObject;
          if (E) return;
          s && (0, a.trackEvent)(s.category, s.event, s.label);
          n && n(i, t);
          o || (0, l.globalCloseMenu)();
        },
        onContextMenu: function onContextMenu(t) {
          var o = e.trackEventObject,
              n = e.trackRightClick;
          o && n && (0, a.trackEvent)(o.category, o.event, "".concat(o.label, "_rightClick"));
        },
        onMouseUp: function onMouseUp(t) {
          var o = e.trackEventObject,
              n = e.trackMouseWheelClick;

          if (1 === t.button && k && o) {
            var _e5 = o.label;
            n && (_e5 += "_mouseWheelClick"), (0, a.trackEvent)(o.category, o.event, _e5);
          }
        },
        onMouseOver: D,
        onMouseOut: B,
        onKeyDown: N,
        tabIndex: O
      }), z && n.createElement(r.CircleLogo, _objectSpread({}, j, {
        className: c["disclosure-item-circle-logo"],
        size: "xxxsmall",
        logoUrl: z.logoUrl,
        placeholderLetter: z.placeholderLetter
      })), C && n.createElement("span", {
        "aria-label": j && j["aria-label"],
        "aria-hidden": j && Boolean(j["aria-hidden"]),
        className: i(W.icon, H && c["round-icon"]),
        dangerouslySetInnerHTML: {
          __html: C
        }
      }), n.createElement("span", {
        className: i(W.labelRow, p)
      }, n.createElement("span", {
        className: i(W.label, g)
      }, F)), (void 0 !== f || T) && n.createElement("span", {
        className: W.shortcut
      }, (J = f) && J.split("+").join(" + ")), void 0 !== M && n.createElement("span", {
        onClick: R ? d : void 0,
        className: i(W.toolbox, (_i3 = {}, _defineProperty(_i3, W.showOnHover, L), _defineProperty(_i3, W.showOnFocus, S), _i3))
      }, M));
      var J;
    }
  },
  81332: function _(e, t, o) {
    "use strict";

    o.d(t, {
      multilineLabelWithIconAndToolboxTheme: function multilineLabelWithIconAndToolboxTheme() {
        return a;
      }
    });
    var n = o(40173),
        i = o(71986),
        l = o(33963);
    var a = (0, n.mergeThemes)(i, l);
  },
  20520: function _(e, t, o) {
    "use strict";

    o.d(t, {
      PopupMenu: function PopupMenu() {
        return h;
      }
    });
    var n = o(50959),
        i = o(962),
        l = o(62942),
        a = o(65718),
        s = o(27317),
        r = o(29197);
    var c = n.createContext(void 0);
    var u = o(36383);
    var d = n.createContext({
      setMenuMaxWidth: !1
    });

    function h(e) {
      var t = e.controller,
          o = e.children,
          h = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          m = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          v = e.doNotCloseOn,
          b = e.onClickOutside,
          p = e.onClose,
          g = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          f = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          T = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          C = (0, n.useContext)(r.CloseDelegateContext),
          _ = n.useContext(d),
          E = (0, n.useContext)(c),
          w = (0, u.useOutsideEvent)({
        handler: function handler(e) {
          b && b(e);
          if (!m) return;
          var t = (0, l["default"])(v) ? v() : null == v ? [] : [v];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = t[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _o2 = _step3.value;

                var _t4 = i.findDOMNode(_o2);

                if (_t4 instanceof Node && _t4.contains(e.target)) return;
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
          }

          p();
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
        ref: w,
        style: {
          pointerEvents: "auto"
        }
      }, n.createElement(s.Menu, _objectSpread({}, T, {
        onClose: p,
        onKeyboardClose: g,
        onScroll: function onScroll(t) {
          var o = e.onScroll;
          o && o(t);
        },
        customCloseDelegate: C,
        customRemeasureDelegate: E,
        ref: t,
        "data-name": f,
        limitMaxWidth: _.setMenuMaxWidth
      }), o))) : null;
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
        i = o(59142),
        l = o(50151),
        a = o(49483);
    var s = (0, n.forwardRef)(function (e, t) {
      var o = e.children,
          l = _objectWithoutProperties(e, ["children"]),
          s = (0, n.useRef)(null);

      return (0, n.useImperativeHandle)(t, function () {
        return s.current;
      }), (0, n.useLayoutEffect)(function () {
        if (a.CheckMobile.iOS()) return null !== s.current && (0, i.disableBodyScroll)(s.current, {
          allowTouchMove: r(s)
        }), function () {
          null !== s.current && (0, i.enableBodyScroll)(s.current);
        };
      }, []), n.createElement("div", _objectSpread({
        ref: s
      }, l), o);
    });

    function r(e) {
      return function (t) {
        var o = (0, l.ensureNotNull)(e.current),
            n = document.activeElement;
        return !o.contains(t) || null !== n && o.contains(n) && n.contains(t);
      };
    }
  },
  6132: function _(e, t, o) {
    "use strict";

    var n = o(22134);

    function i() {}

    function l() {}

    l.resetWarningCache = i, e.exports = function () {
      function e(e, t, o, i, l, a) {
        if (a !== n) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s;
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var o = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: l,
        resetWarningCache: i
      };
      return o.PropTypes = o, o;
    };
  },
  19036: function _(e, t, o) {
    e.exports = o(6132)();
  },
  22134: function _(e) {
    "use strict";

    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  47102: function _(e) {
    e.exports = {
      accessible: "accessible-NQERJsv9",
      active: "active-NQERJsv9"
    };
  },
  89089: function _(e) {
    e.exports = {
      button: "button-LkmyTVRc",
      active: "active-LkmyTVRc"
    };
  },
  22878: function _(e) {
    e.exports = {
      dropdown: "dropdown-pbhJWNrt",
      buttonWrap: "buttonWrap-pbhJWNrt",
      control: "control-pbhJWNrt",
      arrow: "arrow-pbhJWNrt",
      arrowIcon: "arrowIcon-pbhJWNrt",
      isOpened: "isOpened-pbhJWNrt",
      hover: "hover-pbhJWNrt",
      isGrayed: "isGrayed-pbhJWNrt",
      accessible: "accessible-pbhJWNrt"
    };
  },
  27334: function _(e) {
    e.exports = {
      container: "container-Wp9adlfh",
      mirror: "mirror-Wp9adlfh",
      background: "background-Wp9adlfh",
      arrow: "arrow-Wp9adlfh"
    };
  },
  46173: function _(e) {
    e.exports = {
      item: "item-uxNfqe_g",
      label: "label-uxNfqe_g"
    };
  },
  99537: function _(e) {
    e.exports = {
      drawingToolbar: "drawingToolbar-BfVZxb4b",
      isHidden: "isHidden-BfVZxb4b",
      inner: "inner-BfVZxb4b",
      group: "group-BfVZxb4b",
      lastGroup: "lastGroup-BfVZxb4b",
      fill: "fill-BfVZxb4b"
    };
  },
  22231: function _(e) {
    e.exports = {
      toggleButton: "toggleButton-OhcB9eH7",
      collapsed: "collapsed-OhcB9eH7",
      background: "background-OhcB9eH7",
      arrow: "arrow-OhcB9eH7"
    };
  },
  20274: function _(e) {
    e.exports = {
      item: "item-yfwdxbRo",
      hovered: "hovered-yfwdxbRo"
    };
  },
  12451: function _(e) {
    e.exports = {
      desktopSize: "desktopSize-l1SzP6TV",
      smallSize: "smallSize-l1SzP6TV",
      tabs: "tabs-l1SzP6TV",
      categories: "categories-l1SzP6TV"
    };
  },
  78227: function _(e) {
    e.exports = {
      sticker: "sticker-aZclaNCs"
    };
  },
  23091: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      stickerRow: "stickerRow-KUOIljqV"
    };
  },
  62270: function _(e) {
    e.exports = {
      wrapper: "wrapper-FNeSdxed"
    };
  },
  37531: function _(e) {
    e.exports = {
      drawer: "drawer-PzCssz1z",
      menuBox: "menuBox-PzCssz1z"
    };
  },
  85470: function _(e) {
    e.exports = {
      toolButtonMagnet: "toolButtonMagnet-wg76fIbD",
      toolButtonMagnet__menuItem: "toolButtonMagnet__menuItem-wg76fIbD",
      toolButtonMagnet__hintPlaceholder: "toolButtonMagnet__hintPlaceholder-wg76fIbD"
    };
  },
  30261: function _(e) {
    e.exports = {
      wrap: "wrap-Z4M3tWHb",
      scrollWrap: "scrollWrap-Z4M3tWHb",
      noScrollBar: "noScrollBar-Z4M3tWHb",
      content: "content-Z4M3tWHb",
      icon: "icon-Z4M3tWHb",
      scrollBot: "scrollBot-Z4M3tWHb",
      scrollTop: "scrollTop-Z4M3tWHb",
      isVisible: "isVisible-Z4M3tWHb",
      iconWrap: "iconWrap-Z4M3tWHb",
      fadeBot: "fadeBot-Z4M3tWHb",
      fadeTop: "fadeTop-Z4M3tWHb"
    };
  },
  55619: function _(e) {
    e.exports = {
      iconContainer: "iconContainer-dmpvVypS"
    };
  },
  81261: function _(e, t, o) {
    "use strict";

    o.d(t, {
      focusFirstMenuItem: function focusFirstMenuItem() {
        return c;
      },
      handleAccessibleMenuFocus: function handleAccessibleMenuFocus() {
        return s;
      },
      handleAccessibleMenuKeyDown: function handleAccessibleMenuKeyDown() {
        return r;
      },
      queryMenuElements: function queryMenuElements() {
        return h;
      }
    });
    var n = o(16838),
        i = o(71468),
        l = o(68335);
    var a = [37, 39, 38, 40];

    function s(e, t) {
      e.target && n.PLATFORM_ACCESSIBILITY_ENABLED && e.relatedTarget === t.current && c(e.target);
    }

    function r(e) {
      if (!n.PLATFORM_ACCESSIBILITY_ENABLED) return;
      if (e.defaultPrevented) return;
      var t = (0, l.hashFromEvent)(e);
      if (!a.includes(t)) return;
      var o = document.activeElement;
      if (!(document.activeElement instanceof HTMLElement)) return;
      var s = h(e.currentTarget).sort(n.navigationOrderComparator);
      if (0 === s.length) return;
      var r = document.activeElement.closest('[data-role="menuitem"]');
      if (!(r instanceof HTMLElement)) return;
      var c = s.indexOf(r);
      if (-1 === c) return;

      var v = m(r),
          b = v.indexOf(document.activeElement),
          p = -1 !== b,
          g = function g(e) {
        o && (0, i.becomeSecondaryElement)(o), (0, i.becomeMainElement)(e), e.focus();
      };

      switch (t) {
        case 37:
          if (!v.length) return;
          e.preventDefault(), g(0 === b ? s[c] : p ? u(v, b, -1) : v[v.length - 1]);
          break;

        case 39:
          if (!v.length) return;
          e.preventDefault(), b === v.length - 1 ? g(s[c]) : g(p ? u(v, b, 1) : v[0]);
          break;

        case 38:
          {
            e.preventDefault();

            var _t5 = u(s, c, -1);

            if (p) {
              var _e6 = d(_t5, b);

              g(_e6 || _t5);
              break;
            }

            g(_t5);
            break;
          }

        case 40:
          {
            e.preventDefault();

            var _t6 = u(s, c, 1);

            if (p) {
              var _e7 = d(_t6, b);

              g(_e7 || _t6);
              break;
            }

            g(_t6);
          }
      }
    }

    function c(e) {
      var _h = h(e),
          _h2 = _slicedToArray(_h, 1),
          t = _h2[0];

      t && ((0, i.becomeMainElement)(t), t.focus());
    }

    function u(e, t, o) {
      return e[(t + e.length + o) % e.length];
    }

    function d(e, t) {
      var o = m(e);
      return o.length ? o[(t + o.length) % o.length] : null;
    }

    function h(e) {
      return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled], [aria-disabled])')).filter((0, n.createScopedVisibleElementFilter)(e));
    }

    function m(e) {
      return Array.from(e.querySelectorAll("[tabindex]:not([disabled], [aria-disabled])")).filter((0, n.createScopedVisibleElementFilter)(e));
    }
  },
  71468: function _(e, t, o) {
    "use strict";

    function n(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
    }

    function i(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
    }

    o.d(t, {
      becomeMainElement: function becomeMainElement() {
        return n;
      },
      becomeSecondaryElement: function becomeSecondaryElement() {
        return i;
      }
    });
  },
  81351: function _(e, t, o) {
    "use strict";

    o.d(t, {
      AccessibleMenuItem: function AccessibleMenuItem() {
        return d;
      }
    });
    var n = o(50959),
        i = o(97754),
        l = o.n(i),
        a = o(3343),
        s = o(50238),
        r = o(16838),
        c = o(16396),
        u = o(47102);

    function d(e) {
      var t = e.className,
          o = _objectWithoutProperties(e, ["className"]),
          _ref10 = (0, s.useRovingTabindexElement)(null),
          _ref11 = _slicedToArray(_ref10, 2),
          i = _ref11[0],
          d = _ref11[1];

      return n.createElement(c.PopupMenuItem, _objectSpread({}, o, {
        className: l()(r.PLATFORM_ACCESSIBILITY_ENABLED && u.accessible, e.isActive && u.active, t),
        reference: i,
        tabIndex: d,
        onKeyDown: function onKeyDown(e) {
          if (!r.PLATFORM_ACCESSIBILITY_ENABLED || e.target !== e.currentTarget) return;
          var t = (0, a.hashFromEvent)(e);
          13 !== t && 32 !== t || (e.preventDefault(), i.current instanceof HTMLElement && i.current.click());
        },
        "data-role": r.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        "aria-disabled": r.PLATFORM_ACCESSIBILITY_ENABLED && e.isDisabled || void 0
      }));
    }
  },
  12165: function _(e, t, o) {
    "use strict";

    o.d(t, {
      MenuFavoriteButton: function MenuFavoriteButton() {
        return u;
      }
    });
    var n = o(50959),
        i = o(97754),
        l = o.n(i),
        a = o(50238),
        s = o(16838),
        r = o(36189),
        c = o(89089);

    function u(e) {
      var t = e.tooltip,
          o = e.onClick,
          i = _objectWithoutProperties(e, ["tooltip", "onClick"]),
          _ref12 = (0, a.useRovingTabindexElement)(null),
          _ref13 = _slicedToArray(_ref12, 2),
          u = _ref13[0],
          d = _ref13[1];

      return s.PLATFORM_ACCESSIBILITY_ENABLED ? n.createElement("button", {
        ref: u,
        tabIndex: d,
        onClick: o,
        className: l()(c.button, i.isActive && c.active),
        type: "button"
      }, n.createElement(r.FavoriteButton, _objectSpread({
        "aria-label": t
      }, i, {
        "data-tooltip": t
      }))) : n.createElement(r.FavoriteButton, _objectSpread({}, e, {
        "data-tooltip": t
      }));
    }
  },
  14186: function _(e, t, o) {
    "use strict";

    var _ce, _Ue, _Rt;

    o.r(t), o.d(t, {
      DrawingToolbarRenderer: function DrawingToolbarRenderer() {
        return mo;
      }
    });
    var n = o(50959),
        i = o(962),
        l = o(50151),
        a = o(97754),
        s = o.n(a),
        r = o(32563),
        c = o(56840),
        u = o(14483),
        d = o(88348),
        h = o(76422),
        m = o(57898),
        v = o(49483),
        b = o(84015),
        p = o(54819);

    var g =
    /*#__PURE__*/
    function () {
      function g(e) {
        _classCallCheck(this, g);

        this._drawingsAccess = e || {
          tools: [],
          type: "black"
        };
      }

      _createClass(g, [{
        key: "isToolEnabled",
        value: function isToolEnabled(e) {
          var t = this._findTool(e);

          return !(!t || !t.grayed) || ("black" === this._drawingsAccess.type ? !t : !!t);
        }
      }, {
        key: "isToolGrayed",
        value: function isToolGrayed(e) {
          var t = this._findTool(e);

          return Boolean(t && t.grayed);
        }
      }, {
        key: "_findTool",
        value: function _findTool(e) {
          return this._drawingsAccess.tools.find(function (t) {
            return t.name === e;
          });
        }
      }]);

      return g;
    }();

    var f = o(44352),
        T = o(68335);
    var C = [{
      id: "linetool-group-cursors",
      title: f.t(null, void 0, o(82401)),
      items: [{
        name: "cursor"
      }, {
        name: "dot"
      }, {
        name: "arrow"
      }, {
        name: "eraser"
      }],
      trackLabel: null
    }, {
      id: "linetool-group-trend-line",
      title: f.t(null, void 0, o(18794)),
      items: [{
        name: "LineToolTrendLine",
        hotkeyHash: T.Modifiers.Alt + 84
      }, {
        name: "LineToolArrow"
      }, {
        name: "LineToolRay"
      }, {
        name: "LineToolInfoLine"
      }, {
        name: "LineToolExtended"
      }, {
        name: "LineToolTrendAngle"
      }, {
        name: "LineToolHorzLine",
        hotkeyHash: T.Modifiers.Alt + 72
      }, {
        name: "LineToolHorzRay",
        hotkeyHash: T.Modifiers.Alt + 74
      }, {
        name: "LineToolVertLine",
        hotkeyHash: T.Modifiers.Alt + 86
      }, {
        name: "LineToolCrossLine",
        hotkeyHash: T.Modifiers.Alt + 67
      }, {
        name: "LineToolParallelChannel"
      }, {
        name: "LineToolRegressionTrend"
      }, {
        name: "LineToolFlatBottom"
      }, {
        name: "LineToolDisjointAngle"
      }, {
        name: "LineToolAnchoredVWAP"
      }].filter(Boolean),
      trackLabel: null
    }, {
      id: "linetool-group-gann-and-fibonacci",
      title: f.t(null, void 0, o(5816)),
      items: [{
        name: "LineToolFibRetracement",
        hotkeyHash: T.Modifiers.Alt + 70
      }, {
        name: "LineToolTrendBasedFibExtension"
      }, {
        name: "LineToolPitchfork"
      }, {
        name: "LineToolSchiffPitchfork2"
      }, {
        name: "LineToolSchiffPitchfork"
      }, {
        name: "LineToolInsidePitchfork"
      }, {
        name: "LineToolFibChannel"
      }, {
        name: "LineToolFibTimeZone"
      }, {
        name: "LineToolGannSquare"
      }, {
        name: "LineToolGannFixed"
      }, {
        name: "LineToolGannComplex"
      }, {
        name: "LineToolGannFan"
      }, {
        name: "LineToolFibSpeedResistanceFan"
      }, {
        name: "LineToolTrendBasedFibTime"
      }, {
        name: "LineToolFibCircles"
      }, {
        name: "LineToolPitchfan"
      }, {
        name: "LineToolFibSpiral"
      }, {
        name: "LineToolFibSpeedResistanceArcs"
      }, {
        name: "LineToolFibWedge"
      }],
      trackLabel: null
    }, {
      id: "linetool-group-geometric-shapes",
      title: f.t(null, void 0, o(22146)),
      items: [{
        name: "LineToolBrush"
      }, {
        name: "LineToolHighlighter"
      }, {
        name: "LineToolRectangle"
      }, {
        name: "LineToolCircle"
      }, {
        name: "LineToolEllipse"
      }, {
        name: "LineToolPath"
      }, {
        name: "LineToolBezierQuadro"
      }, {
        name: "LineToolPolyline"
      }, {
        name: "LineToolTriangle"
      }, {
        name: "LineToolRotatedRectangle"
      }, {
        name: "LineToolArc"
      }, {
        name: "LineToolBezierCubic"
      }],
      trackLabel: null
    }, {
      id: "linetool-group-annotation",
      title: f.t(null, void 0, o(19661)),
      items: [{
        name: "LineToolText"
      }, {
        name: "LineToolTextAbsolute"
      }, {
        name: "LineToolNote"
      }, {
        name: "LineToolNoteAbsolute"
      }, {
        name: "LineToolSignpost"
      }, null, null, null, {
        name: "LineToolCallout"
      }, {
        name: "LineToolComment"
      }, {
        name: "LineToolPriceLabel"
      }, {
        name: "LineToolPriceNote"
      }, {
        name: "LineToolArrowMarker"
      }, {
        name: "LineToolArrowMarkLeft"
      }, {
        name: "LineToolArrowMarkRight"
      }, {
        name: "LineToolArrowMarkUp"
      }, {
        name: "LineToolArrowMarkDown"
      }, {
        name: "LineToolFlagMark"
      }].filter(Boolean),
      trackLabel: null
    }, {
      id: "linetool-group-patterns",
      title: f.t(null, void 0, o(19693)),
      items: [{
        name: "LineTool5PointsPattern"
      }, {
        name: "LineToolCypherPattern"
      }, {
        name: "LineToolABCD"
      }, {
        name: "LineToolTrianglePattern"
      }, {
        name: "LineToolThreeDrivers"
      }, {
        name: "LineToolHeadAndShoulders"
      }, {
        name: "LineToolElliottImpulse"
      }, {
        name: "LineToolElliottTriangle"
      }, {
        name: "LineToolElliottTripleCombo"
      }, {
        name: "LineToolElliottCorrection"
      }, {
        name: "LineToolElliottDoubleCombo"
      }, {
        name: "LineToolCircleLines"
      }, {
        name: "LineToolTimeCycles"
      }, {
        name: "LineToolSineLine"
      }],
      trackLabel: null
    }, {
      id: "linetool-group-prediction-and-measurement",
      title: f.t(null, void 0, o(97100)),
      items: [{
        name: "LineToolRiskRewardLong"
      }, {
        name: "LineToolRiskRewardShort"
      }, {
        name: "LineToolPrediction"
      }, {
        name: "LineToolDateRange"
      }, {
        name: "LineToolPriceRange"
      }, {
        name: "LineToolDateAndPriceRange"
      }, {
        name: "LineToolBarsPattern"
      }, {
        name: "LineToolGhostFeed"
      }, {
        name: "LineToolProjection"
      }, {
        name: "LineToolFixedRangeVolumeProfile"
      }, null].filter(Boolean),
      trackLabel: null
    }];

    var _ = o(14873),
        E = o(9745),
        w = o(88275),
        x = o(61345),
        F = o(45601),
        k = o(30261),
        L = o(61380);

    var S =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(S, _n$PureComponent);

      function S(e) {
        var _this;

        _classCallCheck(this, S);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(S).call(this, e)), _this._scroll = null, _this._handleScrollTop = function () {
          _this.animateTo(Math.max(0, _this.currentPosition() - (_this.state.heightWrap - 50)));
        }, _this._handleScrollBot = function () {
          _this.animateTo(Math.min((_this.state.heightContent || 0) - (_this.state.heightWrap || 0), _this.currentPosition() + (_this.state.heightWrap - 50)));
        }, _this._handleResizeWrap = function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 1),
              e = _ref15[0];

          _this.setState({
            heightWrap: e.contentRect.height
          });
        }, _this._handleResizeContent = function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 1),
              e = _ref17[0];

          _this.setState({
            heightContent: e.contentRect.height
          });
        }, _this._handleScroll = function () {
          var e = _this.props.onScroll;
          e && e(_this.currentPosition(), _this.isAtTop(), _this.isAtBot()), _this._checkButtonsVisibility();
        }, _this._checkButtonsVisibility = function () {
          var _this$state = _this.state,
              e = _this$state.isVisibleTopButton,
              t = _this$state.isVisibleBotButton,
              o = _this.isAtTop(),
              n = _this.isAtBot();

          o || e ? o && e && _this.setState({
            isVisibleTopButton: !1
          }) : _this.setState({
            isVisibleTopButton: !0
          }), n || t ? n && t && _this.setState({
            isVisibleBotButton: !1
          }) : _this.setState({
            isVisibleBotButton: !0
          });
        }, _this.state = {
          heightContent: 0,
          heightWrap: 0,
          isVisibleBotButton: !1,
          isVisibleTopButton: !1
        };
        return _this;
      }

      _createClass(S, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._checkButtonsVisibility();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          t.heightWrap === this.state.heightWrap && t.heightContent === this.state.heightContent || this._handleScroll();
        }
      }, {
        key: "currentPosition",
        value: function currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0;
        }
      }, {
        key: "isAtTop",
        value: function isAtTop() {
          return this.currentPosition() <= 1;
        }
      }, {
        key: "isAtBot",
        value: function isAtBot() {
          return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1;
        }
      }, {
        key: "animateTo",
        value: function animateTo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.dur;
          var o = this._scroll;
          o && (0, w.doAnimate)({
            onStep: function onStep(e, t) {
              o.scrollTop = t;
            },
            from: o.scrollTop,
            to: Math.round(e),
            easing: x.easingFunc.easeInOutCubic,
            duration: t
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              e = _this$props.children,
              t = _this$props.isVisibleScrollbar,
              o = _this$props.isVisibleFade,
              i = _this$props.isVisibleButtons,
              l = _this$props.onMouseOver,
              a = _this$props.onMouseOut,
              _this$state2 = this.state,
              r = _this$state2.heightContent,
              c = _this$state2.heightWrap,
              u = _this$state2.isVisibleBotButton,
              d = _this$state2.isVisibleTopButton;
          return n.createElement(F.Measure, {
            onResize: this._handleResizeWrap
          }, function (h) {
            return n.createElement("div", {
              className: k.wrap,
              onMouseOver: l,
              onMouseOut: a,
              ref: h
            }, n.createElement("div", {
              className: s()(k.scrollWrap, _defineProperty({}, k.noScrollBar, !t)),
              onScroll: _this2._handleScroll,
              ref: function ref(e) {
                return _this2._scroll = e;
              }
            }, n.createElement(F.Measure, {
              onResize: _this2._handleResizeContent
            }, function (t) {
              return n.createElement("div", {
                className: k.content,
                ref: t
              }, e);
            })), o && n.createElement("div", {
              className: s()(k.fadeTop, _defineProperty({}, k.isVisible, d && r > c))
            }), o && n.createElement("div", {
              className: s()(k.fadeBot, _defineProperty({}, k.isVisible, u && r > c))
            }), i && n.createElement("div", {
              className: s()(k.scrollTop, _defineProperty({}, k.isVisible, d && r > c)),
              onClick: _this2._handleScrollTop
            }, n.createElement("div", {
              className: k.iconWrap
            }, n.createElement(E.Icon, {
              icon: L,
              className: k.icon
            }))), i && n.createElement("div", {
              className: s()(k.scrollBot, _defineProperty({}, k.isVisible, u && r > c)),
              onClick: _this2._handleScrollBot
            }, n.createElement("div", {
              className: k.iconWrap
            }, n.createElement(E.Icon, {
              icon: L,
              className: k.icon
            }))));
          });
        }
      }]);

      return S;
    }(n.PureComponent);

    S.defaultProps = {
      isVisibleScrollbar: !0
    };
    var A = o(4741),
        y = o(59064),
        M = o(66427),
        I = o(16838),
        B = o(50238);

    function D(e) {
      var _ref18 = (0, B.useRovingTabindexElement)(null),
          _ref19 = _slicedToArray(_ref18, 2),
          t = _ref19[0],
          o = _ref19[1];

      return n.createElement(M.ToolButton, _objectSpread({}, e, {
        ref: t,
        tag: I.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
        tabIndex: o
      }));
    }

    function N(e) {
      var t = e.id,
          o = e.action,
          i = e.isActive,
          l = e.isHidden,
          a = e.isTransparent,
          s = e.toolName;
      return n.createElement(D, {
        id: t,
        icon: p.lineToolsInfo[s].icon,
        isActive: i,
        isHidden: l,
        isTransparent: a,
        onClick: o,
        tooltip: p.lineToolsInfo[s].localizedName,
        "data-name": s
      });
    }

    var R = o(90186);

    var W = function W(e) {
      var _ref20 = (0, n.useState)(e.value()),
          _ref21 = _slicedToArray(_ref20, 2),
          t = _ref21[0],
          o = _ref21[1];

      return (0, n.useEffect)(function () {
        var t = function t(e) {
          return o(e);
        };

        return e.subscribe(t), function () {
          return e.unsubscribe(t);
        };
      }, [e]), [t, function (t) {
        return e.setValue(t);
      }];
    };

    var O,
        P = o(97145);
    !function (e) {
      e.Icons = "icons", e.Emojis = "emojis", e.Stickers = "stickers";
    }(O || (O = {}));
    var V = c.getValue("ToolButtonIcons.LastCategory", O.Emojis),
        H = new P.WatchedValue(V);

    function j() {
      var _W = W(H),
          _W2 = _slicedToArray(_W, 2),
          e = _W2[0],
          t = _W2[1];

      return [e, (0, n.useCallback)(function (e) {
        t(e), function (e) {
          c.setValue("ToolButtonIcons.LastCategory", e);
        }(e);
      }, [t])];
    }

    var z = o(99616),
        U = o(62270);

    function Z(e) {
      return n.createElement("div", {
        className: U.wrapper
      }, e.text);
    }

    var G = o(87872),
        K = o(51609),
        J = o(22976),
        Y = o(70616),
        q = o(18042),
        $ = o(44986),
        Q = o(83778),
        X = o(48748);
    var ee = ["0xF087", "0xF088", "0xF164", "0xF165", "0xF0A4", "0xF0A5", "0xF007", "0xF0A6", "0xF0A7", "0xF118", "0xF11A", "0xF119", "0xF183"],
        te = ["0xF153", "0xF154", "0xF155", "0xF156", "0xF157", "0xF158", "0xF159", "0xF195", "0xF15A"],
        oe = ["0xF060", "0xF061", "0xF062", "0xF063", "0xF053", "0xF054", "0xF077", "0xF078", "0xF07D", "0xF07E", "0xF0A9", "0xF0AA", "0xF0AB", "0xF0D9", "0xF0DA", "0xF0D7", "0xF0D8", "0xF102", "0xF103", "0xF104", "0xF105", "0xF106", "0xF107", "0xF137", "0xF139", "0xF13A", "0xF112", "0xF064", "0xF148", "0xF149", "0xF177", "0xF178", "0xF175", "0xF176", "0xF01A", "0xF01B", "0xF065", "0xF066"],
        ne = ["0xF11D", "0xF11E", "0xF024", "0xF004", "0xF005", "0xF006", "0xF046", "0xF00C", "0xF00D", "0xF011", "0xF012", "0xF021", "0xF01E", "0xF192", "0xF041", "0xF14A", "0xF055", "0xF056", "0xF057", "0xF059", "0xF058", "0xF05A", "0xF05B", "0xF05C", "0xF05D", "0xF05E", "0xF067", "0xF068", "0xF069", "0xF06A", "0xF071", "0xF06E", "0xF070", "0xF075", "0xF08A", "0xF0A3", "0xF0E5", "0xF110", "0xF111", "0xF123", "0xF124", "0xF10C", "0xF128", "0xF129", "0xF12A", "0xF140", "0xF113", "0xF17C", "0xF179"],
        ie = ["0xF06C", "0xF185", "0xF186", "0xF188", "0xF0E7"],
        le = ["0xF000", "0xF002", "0xF00E", "0xF015", "0xF017", "0xF030", "0xF013", "0xF043", "0xF06B", "0xF072", "0xF076", "0xF080", "0xF084", "0xF040", "0xF0A1", "0xF0A2", "0xF0D6", "0xF0E3", "0xF0EB", "0xF0F3", "0xF135", "0xF13D", "0xF2FE"],
        ae = [].concat(ee, te, oe, ne, ie, le).map(function (e) {
      return +e;
    }),
        se = new Set(ae);
    var re = [{
      title: f.t(null, {
        context: "emoji_group"
      }, o(15426)),
      emojis: [],
      content: n.createElement(z.IconItem, {
        icon: $
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(33628)),
      emojis: ee,
      content: n.createElement(z.IconItem, {
        icon: Q
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(77011)),
      emojis: ne,
      content: n.createElement(z.IconItem, {
        icon: Y
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(11739)),
      emojis: ie,
      content: n.createElement(z.IconItem, {
        icon: X
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(14281)),
      emojis: te,
      content: n.createElement(z.IconItem, {
        icon: J
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(72302)),
      emojis: le,
      content: n.createElement(z.IconItem, {
        icon: q
      })
    }, {
      title: f.t(null, {
        context: "emoji_group"
      }, o(57792)),
      emojis: oe,
      content: n.createElement(z.IconItem, {
        icon: K
      })
    }],
        ce = (_ce = {}, _defineProperty(_ce, O.Icons, G.drawingToolsIcons.heart), _defineProperty(_ce, O.Emojis, G.drawingToolsIcons.smile), _defineProperty(_ce, O.Stickers, G.drawingToolsIcons.sticker), _ce),
        ue = [{
      title: O.Emojis,
      content: n.createElement(Z, {
        text: f.t(null, void 0, o(19570))
      })
    }, {
      title: O.Stickers,
      content: n.createElement(Z, {
        text: f.t(null, void 0, o(84121))
      })
    }, {
      title: O.Icons,
      content: n.createElement(Z, {
        text: f.t(null, void 0, o(92464))
      })
    }];
    var de = o(3343),
        he = o(20520),
        me = o(27317),
        ve = o(76460),
        be = o(41590),
        pe = o(40173),
        ge = o(81261),
        fe = o(14665);
    var Te = o(22878),
        Ce = (0, n.forwardRef)(function (e, t) {
      var _a;

      var o = e.buttonActiveClass,
          i = e.buttonClass,
          l = e.buttonIcon,
          s = e.buttonTitle,
          c = e.buttonHotKey,
          u = e.dropdownTooltip,
          d = e.children,
          h = e.isActive,
          m = e.isGrayed,
          v = e.onClickWhenGrayed,
          b = e.checkable,
          p = e.isSmallTablet,
          _e$theme2 = e.theme,
          g = _e$theme2 === void 0 ? Te : _e$theme2,
          f = e.onClickButton,
          T = e.onArrowClick,
          C = e.openDropdownByClick,
          _e$onMenuFocus = e.onMenuFocus,
          _ = _e$onMenuFocus === void 0 ? ge.handleAccessibleMenuFocus : _e$onMenuFocus,
          _e$onMenuKeyDown = e.onMenuKeyDown,
          w = _e$onMenuKeyDown === void 0 ? ge.handleAccessibleMenuKeyDown : _e$onMenuKeyDown,
          x = _objectWithoutProperties(e, ["buttonActiveClass", "buttonClass", "buttonIcon", "buttonTitle", "buttonHotKey", "dropdownTooltip", "children", "isActive", "isGrayed", "onClickWhenGrayed", "checkable", "isSmallTablet", "theme", "onClickButton", "onArrowClick", "openDropdownByClick", "onMenuFocus", "onMenuKeyDown"]),
          F = (0, pe.mergeThemes)(me.DEFAULT_MENU_THEME, {
        menuBox: g.menuBox
      }),
          k = I.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
          _ref22 = (0, n.useState)(!1),
          _ref23 = _slicedToArray(_ref22, 2),
          L = _ref23[0],
          S = _ref23[1],
          _ref24 = (0, n.useState)(!1),
          _ref25 = _slicedToArray(_ref24, 2),
          A = _ref25[0],
          y = _ref25[1],
          D = (0, n.useRef)(null),
          N = (0, n.useRef)(null),
          R = (0, n.useRef)(null),
          W = (0, n.useRef)(0),
          O = (0, n.useRef)(0),
          _ref26 = (0, B.useRovingTabindexElement)(null),
          _ref27 = _slicedToArray(_ref26, 2),
          P = _ref27[0],
          V = _ref27[1],
          _ref28 = (0, B.useRovingTabindexElement)(null),
          _ref29 = _slicedToArray(_ref28, 2),
          H = _ref29[0],
          j = _ref29[1];

      return (0, n.useImperativeHandle)(t, function () {
        return {
          open: function open() {
            return S(!0);
          }
        };
      }, []), n.createElement("div", _objectSpread({}, x, {
        className: a(g.dropdown, (_a = {}, _defineProperty(_a, g.isGrayed, m), _defineProperty(_a, g.isActive, h), _defineProperty(_a, g.isOpened, L), _a)),
        onClick: m ? v : void 0,
        onKeyDown: function onKeyDown(e) {
          var t;
          if (e.defaultPrevented || !(e.target instanceof Node) || !I.PLATFORM_ACCESSIBILITY_ENABLED) return;
          var o = (0, de.hashFromEvent)(e);
          if (e.currentTarget.contains(e.target) || 27 !== o) return;
          e.preventDefault(), z(!1), A && (null === (t = null == H ? void 0 : H.current) || void 0 === t || t.focus());
        },
        ref: D
      }), n.createElement("div", {
        ref: N,
        className: g.control
      }, n.createElement("div", _objectSpread({}, function () {
        if (!m) return r.mobiletouch ? b ? {
          onTouchStart: G,
          onTouchEnd: J,
          onTouchMove: K
        } : {
          onClick: Z
        } : {
          onMouseDown: G,
          onMouseUp: Y
        };
        return {};
      }(), {
        className: a(g.buttonWrap, I.PLATFORM_ACCESSIBILITY_ENABLED && g.accessible)
      }), n.createElement(M.ToolButton, {
        activeClass: o,
        className: a(i, g.button),
        icon: l,
        isActive: h,
        isGrayed: m,
        isTransparent: !b,
        ref: P,
        tag: k,
        tabIndex: V,
        onClick: function onClick(e) {
          if (!(0, ve.isKeyboardClick)(e)) return;
          C ? z(!0, !0) : null == f || f();
        },
        tooltip: s,
        buttonHotKey: c,
        "data-tooltip-delay": 1500,
        tooltipPosition: "vertical"
      })), !m && !r.mobiletouch && n.createElement(k, {
        className: a(g.arrow, u && "apply-common-tooltip common-tooltip-vertical", I.PLATFORM_ACCESSIBILITY_ENABLED && g.accessible),
        onClick: function onClick(e) {
          null == T || T(), z(void 0, (0, ve.isKeyboardClick)(e));
        },
        onKeyDown: function onKeyDown(e) {
          if (e.defaultPrevented || !(e.target instanceof Node) || !I.PLATFORM_ACCESSIBILITY_ENABLED) return;
          var t = (0, de.hashFromEvent)(e);
          if (e.currentTarget.contains(e.target)) switch (t) {
            case 39:
              if (L) return;
              e.preventDefault(), z(!0, !0);
              break;

            case 27:
              if (!L) return;
              e.preventDefault(), z(!1);
          }
        },
        type: I.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : void 0,
        "data-role": I.PLATFORM_ACCESSIBILITY_ENABLED ? void 0 : "menu-handle",
        ref: H,
        tabIndex: j,
        "aria-pressed": I.PLATFORM_ACCESSIBILITY_ENABLED ? h : void 0,
        "aria-label": I.PLATFORM_ACCESSIBILITY_ENABLED ? u : void 0,
        "data-tooltip": u
      }, n.createElement(E.Icon, {
        className: g.arrowIcon,
        icon: fe
      }))), !m && (p ? L && n.createElement(be.Drawer, {
        className: g.drawer,
        onClose: U,
        position: "Bottom"
      }, d) : n.createElement(he.PopupMenu, {
        theme: F,
        doNotCloseOn: function doNotCloseOn() {
          if (null === D.current) return [];
          return [D.current];
        },
        isOpened: L,
        onClose: U,
        position: function position() {
          if (!N || !N.current) return {
            x: 0,
            y: 0
          };
          var e = N.current.getBoundingClientRect();
          return {
            x: e.left + e.width + 1,
            y: e.top - 6
          };
        },
        onKeyDown: w,
        onFocus: function onFocus(e) {
          return _(e, H);
        },
        controller: R,
        onOpen: function onOpen() {
          var e;
          if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return;
          null === (e = R.current) || void 0 === e || e.focus();
        },
        tabIndex: I.PLATFORM_ACCESSIBILITY_ENABLED ? -1 : void 0
      }, d)));

      function z(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var o = void 0 !== e ? e : !L;
        S(o), y(!!o && t);
      }

      function U() {
        z(!1);
      }

      function Z() {
        f && f(), z();
      }

      function G() {
        if (r.mobiletouch && !b) !O.current && f && f();else {
          if (W.current) return clearTimeout(W.current), W.current = 0, void z(!0);
          W.current = setTimeout(function () {
            W.current = 0, !O.current && f && f();
          }, 175);
        }
        O.current = setTimeout(function () {
          O.current = 0, z(!0);
        }, 300);
      }

      function K() {
        clearTimeout(O.current), O.current = 0, clearTimeout(W.current), W.current = 0;
      }

      function J(e) {
        e.cancelable && e.preventDefault(), Y();
      }

      function Y() {
        O.current && (clearTimeout(O.current), O.current = 0, L ? z(!1) : b || L || r.mobiletouch || !h && !C ? !W.current && f && f() : z(!0));
      }
    });

    var _e = o(38297),
        Ee = o(85034),
        we = o(68456),
        xe = o(21097);

    var Fe =
    /*#__PURE__*/
    function (_we$CommonJsonStoreSe) {
      _inherits(Fe, _we$CommonJsonStoreSe);

      function Fe(e, t, o, n) {
        var _this3;

        var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 18;

        _classCallCheck(this, Fe);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Fe).call(this, xe.TVXWindowEvents, c, e, t, [])), _this3._onChangeDrawingState = function () {
          var e = d[_this3._drawingType].value();

          _this3._promote(e);
        }, _this3._sanitizer = o, _this3._drawingType = n, _this3._maxRecentCount = i, d[_this3._drawingType].subscribe(_this3._onChangeDrawingState);
        return _this3;
      }

      _createClass(Fe, [{
        key: "destroy",
        value: function destroy() {
          d[this._drawingType].unsubscribe(this._onChangeDrawingState), _get(_getPrototypeOf(Fe.prototype), "destroy", this).call(this);
        }
      }, {
        key: "_deserialize",
        value: function _deserialize(e) {
          var t = this._sanitizer(e);

          return this._removeUnavailableRecents(e, t);
        }
      }, {
        key: "_removeUnavailableRecents",
        value: function _removeUnavailableRecents(e, t) {
          return Array.isArray(e) ? e.length > this._maxRecentCount && (t = e.slice(0, this._maxRecentCount)) : t = [], t;
        }
      }, {
        key: "_promote",
        value: function _promote(e) {
          var t = _toConsumableArray(this.get());

          var o = t.indexOf(e);
          -1 !== o && t.splice(o, 1), t = [e].concat(_toConsumableArray(t.slice(0, this._maxRecentCount - 1))), this.set(t);
        }
      }]);

      return Fe;
    }(we.CommonJsonStoreService);

    var ke = new Fe("RECENT_ICONS_CHANGED", "linetoolicon.recenticons", function (e) {
      return e.filter(function (e) {
        return se.has(e);
      });
    }, "iconTool");
    var Le = o(55619);

    function Se(e) {
      var t = e.fallback,
          o = _objectWithoutProperties(e, ["fallback"]);

      return n.createElement(n.Suspense, {
        fallback: null != t ? t : null
      }, n.createElement(Ae, _objectSpread({}, o)));
    }

    var Ae = n.lazy(function _callee() {
      var _ref30, e;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(o.e(7987).then(o.bind(o, 1383)));

            case 2:
              _ref30 = _context.sent;
              e = _ref30.getSvgContentForCharCode;
              return _context.abrupt("return", {
                "default": function _default(t) {
                  var o;
                  var i = t.charCode,
                      l = null !== (o = e(i)) && void 0 !== o ? o : void 0;
                  return n.createElement(E.Icon, {
                    icon: l,
                    className: Le.iconContainer
                  });
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    var ye = o(20274);
    var Me = o(173);
    var Ie = new Fe("RECENT_EMOJIS_CHANGED", "linetoolemoji.recents", Me.removeUnavailableEmoji, "emojiTool"),
        Be = ["elon", "doge", "dislike", "yolo", "whale", "wagmi", "tendies", "short", "rugged", "shill", "rekt", "sell", "paper-hands", "og", "fud", "gm", "ngmi", "moon", "love", "lambo", "ethereum", "look", "diamond-hand", "leap", "like", "few", "bitcoin", "bag-holder", "buy-the-dip", "buy", "hodl"];
    var De = o(37603),
        Ne = o(90624);
    var Re = new Set(Be);
    var We = [{
      title: f.t(null, {
        context: "emoji_group"
      }, o(15426)),
      emojis: [],
      content: n.createElement(z.IconItem, {
        icon: De
      })
    }, {
      title: "TradingView",
      emojis: Be,
      content: n.createElement(z.IconItem, {
        icon: Ne
      })
    }],
        Oe = new Fe("RECENT_STICKERS_CHANGED", "linetoolsticker.recents", function (e) {
      return e.filter(function (e) {
        return Re.has(e);
      });
    }, "stickerTool", 3);
    var Pe = o(78036),
        Ve = o(47291),
        He = o(78227);
    var je = o(26601),
        ze = o(23091);
    var Ue = (_Ue = {}, _defineProperty(_Ue, O.Icons, {
      service: ke,
      toolName: "LineToolIcon",
      ItemComponent: function ItemComponent(e) {
        var t = e.emoji,
            o = e.className;
        return n.createElement("div", {
          className: s()(ye.item, o)
        }, n.createElement(Se, {
          charCode: Number(t)
        }));
      },
      icons: re,
      onEmojiSelect: function onEmojiSelect(e) {
        d.iconTool.setValue(Number(e)), d.tool.setValue("LineToolIcon");
      }
    }), _defineProperty(_Ue, O.Emojis, {
      service: Ie,
      toolName: "LineToolEmoji",
      icons: Me.emojiGroups,
      onEmojiSelect: function onEmojiSelect(e) {
        d.emojiTool.setValue(e), d.tool.setValue("LineToolEmoji");
      }
    }), _defineProperty(_Ue, O.Stickers, {
      service: Oe,
      toolName: "LineToolSticker",
      ItemComponent: function ItemComponent(e) {
        var t = e.emoji,
            _ref31 = (0, Pe.useEnsuredContext)(Ve.EmojiListContentContext),
            i = _ref31.size,
            _ref32 = (0, n.useState)(),
            _ref33 = _slicedToArray(_ref32, 2),
            l = _ref33[0],
            a = _ref33[1];

        return (0, n.useEffect)(function () {
          o.e(5598).then(o.bind(o, 31235)).then(function (_ref34) {
            var e = _ref34.getSvgContentForSticker;
            var o = e(t);
            o && a(o);
          });
        }, []), n.createElement(E.Icon, {
          className: He.sticker,
          icon: null !== l ? l : void 0,
          style: {
            width: "".concat(i, "px"),
            height: "".concat(i, "px")
          }
        });
      },
      RowComponent: function RowComponent(e) {
        return n.createElement(je.EmojisRow, _objectSpread({}, e, {
          className: ze.stickerRow
        }));
      },
      icons: We,
      onEmojiSelect: function onEmojiSelect(e) {
        d.stickerTool.setValue(e), d.tool.setValue("LineToolSticker");
      },
      getEmojiSize: function getEmojiSize(e) {
        return e ? 78 : 112;
      }
    }), _Ue);
    var Ze = o(12451);

    function Ge(e) {
      var t = e.isSmallTablet,
          o = e.maxHeight,
          i = e.activeTab,
          l = e.setActiveTab,
          s = Ue[i],
          r = s.service,
          c = s.ItemComponent,
          u = s.RowComponent,
          d = s.onEmojiSelect,
          h = s.getEmojiSize,
          m = h && h(t),
          _ref35 = (0, n.useState)(Ke(s)),
          _ref36 = _slicedToArray(_ref35, 2),
          v = _ref36[0],
          b = _ref36[1];

      return (0, n.useLayoutEffect)(function () {
        var e = {},
            t = function t() {
          var e = Ke(s);
          b(e);
        };

        return t(), r.getOnChange().subscribe(e, t), function () {
          r.getOnChange().unsubscribeAll(e);
        };
      }, [s]), n.createElement("div", {
        style: {
          maxHeight: o
        }
      }, n.createElement(_e.EmojiList, {
        className: a(Ze.desktopSize, t && Ze.smallSize),
        emojis: v,
        onSelect: function onSelect(e) {
          d(e), (0, y.globalCloseMenu)();
        },
        ItemComponent: c,
        RowComponent: u,
        height: o,
        category: i,
        emojiSize: m
      }), n.createElement(Ee.GroupTabs, {
        className: Ze.tabs,
        tabClassName: Ze.categories,
        tabs: ue,
        activeTab: i,
        onTabClick: function onTabClick(e) {
          l(e);
        }
      }));
    }

    function Ke(e) {
      var t = e.icons,
          o = e.service,
          n = _toConsumableArray(t),
          i = o.get();

      return n[0].emojis = i.map(function (e) {
        return String(e);
      }), n.filter(function (e) {
        return e.emojis.length;
      });
    }

    var Je = o(10888),
        Ye = o(37531);
    var qe = {
      icon: f.t(null, void 0, o(26579)),
      dropdownTooltip: f.t(null, void 0, o(92464))
    },
        $e = (0, pe.mergeThemes)(Te, {
      menuBox: Ye.menuBox,
      drawer: Ye.drawer
    }),
        Qe = parseInt(Je["default-drawer-min-top-distance"]);

    function Xe(e) {
      var t = e.isGrayed,
          o = e.isSmallTablet,
          i = (0, R.filterDataProps)(e),
          _j = j(),
          _j2 = _slicedToArray(_j, 2),
          l = _j2[0],
          a = _j2[1],
          _W3 = W(d.tool),
          _W4 = _slicedToArray(_W3, 1),
          s = _W4[0],
          r = Ue[l].toolName;

      return n.createElement(Ce, _objectSpread({
        theme: $e,
        buttonIcon: ce[l],
        buttonTitle: qe.icon,
        dropdownTooltip: qe.dropdownTooltip,
        isActive: s === r,
        isGrayed: t,
        isSmallTablet: o,
        onClickButton: function onClickButton() {
          c();
        },
        onClickWhenGrayed: function onClickWhenGrayed() {
          return (0, h.emit)("onGrayedObjectClicked", {
            type: "drawing",
            name: p.lineToolsInfo[r].localizedName
          });
        },
        onArrowClick: function onArrowClick() {
          c("menu");
        },
        openDropdownByClick: !0,
        onMenuFocus: et,
        onMenuKeyDown: function onMenuKeyDown(e) {
          if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return;
          if (e.defaultPrevented) return;
          var t = (0, T.hashFromEvent)(e);
          9 !== t && t !== T.Modifiers.Shift + 9 || (0, I.updateTabIndexes)();
        }
      }, i), n.createElement(Ge, {
        isSmallTablet: o,
        maxHeight: o ? Math.min(679, window.innerHeight - Qe) : 679,
        activeTab: l,
        setActiveTab: a
      }));

      function c(e) {
        0;
      }
    }

    function et(e) {
      if (!e.target || !I.PLATFORM_ACCESSIBILITY_ENABLED) return;
      var t = e.currentTarget;
      e.target === t && ((0, I.updateTabIndexes)(), setTimeout(function () {
        if (document.activeElement !== t) return;

        var _sort = (0, I.queryTabbableElements)(t).sort(I.navigationOrderComparator),
            _sort2 = _slicedToArray(_sort, 1),
            e = _sort2[0];

        e && e.focus();
      }));
    }

    var tt = o(46100);

    var ot =
    /*#__PURE__*/
    function (_n$PureComponent2) {
      _inherits(ot, _n$PureComponent2);

      function ot(e) {
        var _this4;

        _classCallCheck(this, ot);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ot).call(this, e)), _this4._handleClick = function () {
          _this4.props.saveDefaultOnChange && (0, tt.saveDefaultProperties)(!0);
          var e = !_this4.props.property.value();
          _this4.props.property.setValue(e), _this4.props.saveDefaultOnChange && (0, tt.saveDefaultProperties)(!1), _this4.props.onClick && _this4.props.onClick(e);
        }, _this4.state = {
          isActive: _this4.props.property.value()
        };
        return _this4;
      }

      _createClass(ot, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.property.subscribe(this, this._onChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.props.property.unsubscribe(this, this._onChange);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.props.toolName,
              t = this.state.isActive,
              o = p.lineToolsInfo[e];
          return n.createElement(D, {
            icon: t && o.iconActive ? o.iconActive : o.icon,
            isActive: t,
            onClick: this._handleClick,
            tooltip: o.localizedName,
            buttonHotKey: o.hotKey,
            "data-name": e
          });
        }
      }, {
        key: "_onChange",
        value: function _onChange(e) {
          this.setState({
            isActive: e.value()
          });
        }
      }]);

      return ot;
    }(n.PureComponent);

    var nt =
    /*#__PURE__*/
    function (_n$PureComponent3) {
      _inherits(nt, _n$PureComponent3);

      function nt(e) {
        var _this5;

        _classCallCheck(this, nt);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(nt).call(this, e)), _this5._handleClick = function () {
          var e, t;
          d.tool.setValue(_this5.props.toolName), null === (t = (e = _this5.props).onClick) || void 0 === t || t.call(e);
        }, _this5._onChange = function () {
          _this5.setState({
            isActive: d.tool.value() === _this5.props.toolName
          });
        }, _this5.state = {
          isActive: d.tool.value() === _this5.props.toolName
        };
        return _this5;
      }

      _createClass(nt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          d.tool.subscribe(this._onChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          d.tool.unsubscribe(this._onChange);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.props.toolName,
              t = this.state.isActive,
              o = p.lineToolsInfo[e];
          return n.createElement(D, {
            icon: p.lineToolsInfo[e].icon,
            isActive: t,
            isTransparent: !0,
            onClick: this._handleClick,
            tooltip: o.localizedName,
            buttonHotKey: o.hotKey,
            "data-name": e
          });
        }
      }]);

      return nt;
    }(n.PureComponent);

    var it =
    /*#__PURE__*/
    function (_n$PureComponent4) {
      _inherits(it, _n$PureComponent4);

      function it(e) {
        var _this6;

        _classCallCheck(this, it);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(it).call(this, e)), _this6._boundUndoModel = null, _this6._handleClick = function () {
          var e = _this6._activeChartWidget();

          e.hasModel() && e.model().zoomFromViewport();
        }, _this6._syncUnzoomButton = function () {
          var e = _this6._activeChartWidget();

          var t = !1;

          if (e.hasModel()) {
            var _o3 = e.model();

            _this6._boundUndoModel !== _o3 && (_this6._boundUndoModel && _this6._boundUndoModel.zoomStack().onChange().unsubscribe(null, _this6._syncUnzoomButton), _o3.zoomStack().onChange().subscribe(null, _this6._syncUnzoomButton), _this6._boundUndoModel = _o3), t = !_o3.zoomStack().isEmpty();
          } else e.withModel(null, _this6._syncUnzoomButton);

          _this6.setState({
            isVisible: t
          });
        }, _this6.state = {
          isVisible: !1
        };
        return _this6;
      }

      _createClass(it, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._syncUnzoomButton, {
            callWithLast: !0
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._syncUnzoomButton);
        }
      }, {
        key: "render",
        value: function render() {
          return this.state.isVisible ? n.createElement(N, {
            action: this._handleClick,
            isTransparent: !0,
            toolName: "zoom-out"
          }) : n.createElement("div", null);
        }
      }, {
        key: "_activeChartWidget",
        value: function _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
      }]);

      return it;
    }(n.PureComponent);

    var lt = o(71810),
        at = o(12165),
        st = o(81351),
        rt = o(81332),
        ct = o(92249);

    var ut =
    /*#__PURE__*/
    function (_n$PureComponent5) {
      _inherits(ut, _n$PureComponent5);

      function ut(e) {
        var _this7;

        _classCallCheck(this, ut);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ut).call(this, e)), _this7._onChangeDrawingState = function () {
          var e = _this7._getActiveToolIndex();

          _this7.setState({
            current: -1 !== e ? e : _this7.state.current,
            isActive: -1 !== e
          });
        }, _this7._handleClickButton = function () {
          if (_this7._trackClick(), v.CheckMobile.any()) return;

          var e = _this7._getCurrentToolName();

          _this7._selectTool(e);
        }, _this7._handleClickItem = function (e) {
          _this7._selectTool(e);
        }, _this7._handleGrayedClick = function (e) {
          (0, h.emit)("onGrayedObjectClicked", {
            type: "drawing",
            name: p.lineToolsInfo[e].localizedName
          });
        }, _this7._handleClickFavorite = function (e) {
          _this7.state.favState && _this7.state.favState[e] ? lt.LinetoolsFavoritesStore.removeFavorite(e) : lt.LinetoolsFavoritesStore.addFavorite(e);
        }, _this7._onAddFavorite = function (e) {
          _this7.setState({
            favState: _objectSpread({}, _this7.state.favState, _defineProperty({}, e, !0))
          });
        }, _this7._onRemoveFavorite = function (e) {
          _this7.setState({
            favState: _objectSpread({}, _this7.state.favState, _defineProperty({}, e, !1))
          });
        }, _this7._onSyncFavorites = function () {
          _this7.setState({
            favState: _this7._composeFavState()
          });
        }, _this7._handleArrowClick = function () {
          _this7._trackClick("menu");
        }, _this7._trackClick = function (e) {
          var t = _this7.props.trackLabel;
        };

        var t = _this7._getActiveToolIndex();

        _this7.state = {
          current: -1 === t ? _this7._firstNonGrayedTool() : t,
          favState: _this7._composeFavState(),
          isActive: -1 !== t
        };
        return _this7;
      }

      _createClass(ut, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          d.tool.subscribe(this._onChangeDrawingState), lt.LinetoolsFavoritesStore.favoriteAdded.subscribe(null, this._onAddFavorite), lt.LinetoolsFavoritesStore.favoriteRemoved.subscribe(null, this._onRemoveFavorite), lt.LinetoolsFavoritesStore.favoritesSynced.subscribe(null, this._onSyncFavorites);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          d.tool.unsubscribe(this._onChangeDrawingState), lt.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(null, this._onAddFavorite), lt.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite), lt.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(null, this._onSyncFavorites);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          e.lineTools !== this.props.lineTools && this.setState({
            favState: this._composeFavState()
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this8 = this;

          var _this$props2 = this.props,
              e = _this$props2.favoriting,
              t = _this$props2.grayedTools,
              o = _this$props2.lineTools,
              i = _this$props2.dropdownTooltip,
              l = _this$props2.isSmallTablet,
              _this$state3 = this.state,
              a = _this$state3.current,
              s = _this$state3.favState,
              r = _this$state3.isActive,
              c = this._getCurrentToolName(),
              u = p.lineToolsInfo[c],
              d = this._showShortcuts(),
              h = (0, R.filterDataProps)(this.props);

          return n.createElement("span", null, n.createElement(Ce, _objectSpread({
            buttonIcon: u.icon,
            buttonTitle: u.localizedName,
            buttonHotKey: u.hotKey,
            dropdownTooltip: i,
            isActive: r,
            onClickButton: this._handleClickButton,
            onArrowClick: this._handleArrowClick,
            isSmallTablet: l
          }, h), o.map(function (o, i) {
            var c = o.name,
                u = p.lineToolsInfo[c],
                h = t[c];
            return n.createElement(st.AccessibleMenuItem, {
              key: c,
              "data-name": o.name,
              theme: l ? rt.multilineLabelWithIconAndToolboxTheme : void 0,
              dontClosePopup: h,
              forceShowShortcuts: d,
              shortcut: !l && o.hotkeyHash ? (0, T.humanReadableHash)(o.hotkeyHash) : void 0,
              icon: u.icon,
              isActive: r && a === i,
              appearAsDisabled: h,
              label: u.localizedName,
              showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
              onClick: h ? _this8._handleGrayedClick : _this8._handleClickItem,
              onClickArg: c,
              showToolboxOnHover: !s[c],
              toolbox: e && !h ? n.createElement(at.MenuFavoriteButton, {
                isActive: r && a === i,
                isFilled: s[c],
                onClick: function onClick() {
                  return _this8._handleClickFavorite(c);
                }
              }) : void 0
            });
          })));
        }
      }, {
        key: "_getCurrentToolName",
        value: function _getCurrentToolName() {
          var e = this.state.current,
              t = this.props.lineTools;
          return t[e || 0].name;
        }
      }, {
        key: "_firstNonGrayedTool",
        value: function _firstNonGrayedTool() {
          var _this$props3 = this.props,
              e = _this$props3.grayedTools,
              t = _this$props3.lineTools;
          return t.findIndex(function (t) {
            return !e[t.name];
          });
        }
      }, {
        key: "_getActiveToolIndex",
        value: function _getActiveToolIndex() {
          return this.props.lineTools.findIndex(function (e) {
            return e.name === d.tool.value();
          });
        }
      }, {
        key: "_showShortcuts",
        value: function _showShortcuts() {
          return this.props.lineTools.some(function (e) {
            return "shortcut" in e;
          });
        }
      }, {
        key: "_selectTool",
        value: function _selectTool(e) {
          return regeneratorRuntime.async(function _selectTool$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  d.tool.setValue(e);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          });
        }
      }, {
        key: "_composeFavState",
        value: function _composeFavState() {
          var e = {};
          return this.props.lineTools.forEach(function (t) {
            e[t.name] = lt.LinetoolsFavoritesStore.isFavorite(t.name);
          }), e;
        }
      }]);

      return ut;
    }(n.PureComponent);

    var dt = o(51768),
        ht = o(16396),
        mt = o(46173);
    var vt = (0, pe.mergeThemes)(ht.DEFAULT_POPUP_MENU_ITEM_THEME, mt);
    var bt = o(28853);
    var pt = !1;

    var gt =
    /*#__PURE__*/
    function (_n$PureComponent6) {
      _inherits(gt, _n$PureComponent6);

      function gt(e) {
        var _this9;

        _classCallCheck(this, gt);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(gt).call(this, e)), _this9._handleRemoveToolClick = function () {
          r.mobiletouch || _this9._handleRemoveDrawings(), Tt();
        }, _this9._handleRemoveDrawings = function () {
          ft("remove drawing"), _this9.props.chartWidgetCollection.activeChartWidget.value().removeAllDrawingTools();
        }, _this9._handleRemoveStudies = function () {
          ft("remove indicator"), _this9.props.chartWidgetCollection.activeChartWidget.value().removeAllStudies();
        }, _this9._handleRemoveAll = function () {
          ft("remove all"), _this9.props.chartWidgetCollection.activeChartWidget.value().removeAllStudiesDrawingTools();
        }, _this9._handleActiveChartWidgetChanged = function (e) {
          _this9._activeChartWidget && _this9._unsubscribeToModelChanges(_this9._activeChartWidget), e && _this9._subscribeToModelChanges(e), _this9._activeChartWidget = e, _this9._handleCollectionChanged();
        }, _this9._handleCollectionChanged = function () {
          _this9.setState(_this9._getActualState());
        }, _this9._getActualState = function () {
          if (!_this9._activeChartWidget || !_this9._activeChartWidget.hasModel()) return {
            numOfDrawings: 0,
            numOfIndicators: 0
          };

          var e = _this9._activeChartWidget.model().dataSources(),
              t = e.filter(ct.isLineTool).filter(function (e) {
            return e.isActualSymbol() && e.isUserDeletable();
          }),
              o = e.filter(bt.isStudy).filter(function (e) {
            return e.removeByRemoveAllStudies();
          });

          return {
            numOfDrawings: t.length,
            numOfIndicators: o.length
          };
        }, _this9._activeChartWidget = _this9.props.chartWidgetCollection.activeChartWidget.value(), _this9.state = _this9._getActualState();
        return _this9;
      }

      _createClass(gt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._handleActiveChartWidgetChanged, {
            callWithLast: !0
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._activeChartWidget && this._unsubscribeToModelChanges(this._activeChartWidget), this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._handleActiveChartWidgetChanged);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.props.isSmallTablet ? vt : void 0,
              _this$state4 = this.state,
              t = _this$state4.numOfDrawings,
              i = _this$state4.numOfIndicators,
              l = f.t(null, {
            plural: "{amount} drawings",
            count: t,
            replace: {
              amount: t.toString()
            }
          }, o(93030)),
              a = f.t(null, {
            plural: "{amount} indicators",
            count: i,
            replace: {
              amount: i.toString()
            }
          }, o(80437)),
              s = f.t(null, {
            replace: {
              drawings: l
            }
          }, o(30513)),
              r = f.t(null, {
            replace: {
              indicators: a
            }
          }, o(55084)),
              c = f.t(null, {
            replace: {
              drawings: l,
              indicators: a
            }
          }, o(10049));
          return n.createElement(Ce, {
            buttonIcon: p.lineToolsInfo[this.props.toolName].icon,
            buttonTitle: s,
            onClickButton: this._handleRemoveToolClick,
            isSmallTablet: this.props.isSmallTablet,
            "data-name": this.props.toolName,
            onArrowClick: this._handleArrowClick,
            openDropdownByClick: pt
          }, n.createElement(st.AccessibleMenuItem, {
            "data-name": "remove-drawing-tools",
            label: s,
            onClick: this._handleRemoveDrawings,
            theme: e
          }), n.createElement(st.AccessibleMenuItem, {
            "data-name": "remove-studies",
            label: r,
            onClick: this._handleRemoveStudies,
            theme: e
          }), n.createElement(st.AccessibleMenuItem, {
            "data-name": "remove-all",
            label: c,
            onClick: this._handleRemoveAll,
            theme: e
          }));
        }
      }, {
        key: "_handleArrowClick",
        value: function _handleArrowClick() {
          Tt("menu");
        }
      }, {
        key: "_subscribeToModelChanges",
        value: function _subscribeToModelChanges(e) {
          var _this10 = this;

          e.withModel(this, function () {
            _this10._handleCollectionChanged(), e.model().model().dataSourceCollectionChanged().subscribe(_this10, _this10._handleCollectionChanged);
          });
        }
      }, {
        key: "_unsubscribeToModelChanges",
        value: function _unsubscribeToModelChanges(e) {
          e.hasModel() && e.model().model().dataSourceCollectionChanged().unsubscribe(this, this._handleCollectionChanged), e.modelCreated().unsubscribeAll(this);
        }
      }]);

      return gt;
    }(n.PureComponent);

    function ft(e) {
      (0, dt.trackEvent)("GUI", "Chart Left Toolbar", e);
    }

    function Tt(e) {
      0;
    }

    var Ct = o(90995),
        _t = o(14881);

    var Et = n.createContext({
      hideMode: "drawings",
      isActive: !1
    });

    function wt(e) {
      var t = e.hideMode,
          _e$option = e.option,
          o = _e$option.label,
          i = _e$option.dataName,
          l = _e$option.getBoxedValue,
          a = e.isSmallTablet,
          s = e.onClick,
          _ref37 = (0, n.useContext)(Et),
          r = _ref37.hideMode,
          c = _ref37.isActive,
          u = null == l ? void 0 : l();

      return "all" === t || u ? n.createElement(st.AccessibleMenuItem, {
        label: o,
        isActive: r === t && c,
        onClick: function onClick() {
          s(t, (0, Ct.toggleHideMode)(t));
        },
        "data-name": i,
        theme: a ? vt : void 0
      }) : n.createElement(n.Fragment, null);
    }

    var xt = {
      drawings: {
        active: G.drawingToolsIcons.hideAllDrawingToolsActive,
        inactive: G.drawingToolsIcons.hideAllDrawingTools
      },
      indicators: {
        active: G.drawingToolsIcons.hideAllIndicatorsActive,
        inactive: G.drawingToolsIcons.hideAllIndicators
      },
      positions: {
        active: G.drawingToolsIcons.hideAllPositionsToolsActive,
        inactive: G.drawingToolsIcons.hideAllPositionsTools
      },
      all: {
        active: G.drawingToolsIcons.hideAllDrawingsActive,
        inactive: G.drawingToolsIcons.hideAllDrawings
      }
    };

    function Ft(e) {
      var t = e.isSmallTablet,
          _ref38 = (0, n.useState)(function () {
        return {
          isActive: !1,
          hideMode: (0, Ct.getSavedHideMode)()
        };
      }),
          _ref39 = _slicedToArray(_ref38, 2),
          _ref39$ = _ref39[0],
          o = _ref39$.isActive,
          i = _ref39$.hideMode,
          a = _ref39[1];

      (0, n.useEffect)(function () {
        return _t.hideStateChange.subscribe(null, a), function () {
          _t.hideStateChange.unsubscribe(null, a);
        };
      }, []);

      var s = p.lineToolsInfo.hideAllDrawings,
          _ref40 = (0, l.ensureDefined)((0, Ct.getHideOptions)().get(i)),
          r = _ref40.trackLabel,
          c = _ref40.tooltip,
          u = _ref40.dataName,
          d = xt[i][o ? "active" : "inactive"],
          h = o ? c.active : c.inactive;

      return n.createElement(Ce, {
        buttonIcon: d,
        buttonTitle: h,
        buttonHotKey: s.hotKey,
        onClickButton: function onClickButton() {
          (0, Ct.toggleHideMode)(i), kt(r, !o), Lt(o ? "on" : "off");
        },
        isSmallTablet: t,
        isActive: o,
        checkable: !0,
        "data-name": "hide-all",
        "data-type": u,
        onArrowClick: function onArrowClick() {
          Lt("menu");
        }
      }, n.createElement(Et.Provider, {
        value: {
          isActive: o,
          hideMode: i
        }
      }, Array.from((0, Ct.getHideOptions)()).map(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
            e = _ref42[0],
            o = _ref42[1];

        return n.createElement(wt, {
          key: e,
          hideMode: e,
          option: o,
          isSmallTablet: t,
          onClick: m
        });
      })));

      function m(e, t) {
        kt((0, l.ensureDefined)((0, Ct.getHideOptions)().get(e)).trackLabel, t);
      }
    }

    function kt(e, t) {
      (0, dt.trackEvent)("GUI", "Chart Left Toolbar", "".concat(e, " ").concat(t ? "on" : "off"));
    }

    function Lt(e) {
      0;
    }

    var St = o(241),
        At = o(51445);
    var yt = f.t(null, void 0, o(49616));

    var Mt =
    /*#__PURE__*/
    function (_n$PureComponent7) {
      _inherits(Mt, _n$PureComponent7);

      function Mt() {
        var _this11;

        _classCallCheck(this, Mt);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Mt).apply(this, arguments)), _this11._instance = null, _this11._promise = null, _this11._bindedForceUpdate = function () {
          return _this11.forceUpdate();
        }, _this11._handleClick = function () {
          null !== _this11._instance && (_this11._instance.isVisible() ? (_this11._instance.hideAndSaveSettingsValue(), _this11._trackClick(!1)) : (_this11._instance.showAndSaveSettingsValue(), _this11._trackClick(!0)));
        };
        return _this11;
      }

      _createClass(Mt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this12 = this;

          var e = this._promise = (0, l.ensureNotNull)((0, St.getFavoriteDrawingToolbarPromise)());
          e.then(function (t) {
            _this12._promise === e && (_this12._instance = t, _this12._instance.canBeShown().subscribe(_this12._bindedForceUpdate), _this12._instance.visibility().subscribe(_this12._bindedForceUpdate), _this12.forceUpdate());
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._promise = null, null !== this._instance && (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate), this._instance.visibility().unsubscribe(this._bindedForceUpdate), this._instance = null);
        }
      }, {
        key: "render",
        value: function render() {
          return null !== this._instance && this._instance.canBeShown().value() ? n.createElement(D, {
            id: this.props.id,
            icon: At,
            isActive: this._instance.isVisible(),
            onClick: this._handleClick,
            tooltip: yt
          }) : null;
        }
      }, {
        key: "_trackClick",
        value: function _trackClick(e) {
          0;
        }
      }]);

      return Mt;
    }(n.PureComponent);

    var It = o(77975),
        Bt = o(36147),
        Dt = o(18540),
        Nt = o(85470);
    var Rt = (_Rt = {}, _defineProperty(_Rt, Bt.MagnetMode.WeakMagnet, {
      id: Bt.MagnetMode.WeakMagnet,
      name: "weakMagnet",
      icon: G.drawingToolsIcons.magnet,
      localizedName: f.t(null, void 0, o(45265))
    }), _defineProperty(_Rt, Bt.MagnetMode.StrongMagnet, {
      id: Bt.MagnetMode.StrongMagnet,
      name: "strongMagnet",
      icon: G.drawingToolsIcons.strongMagnet,
      localizedName: f.t(null, void 0, o(85422))
    }), _Rt);

    function Wt(e) {
      var t = e.isSmallTablet,
          o = (0, It.useWatchedValueReadonly)({
        watchedValue: (0, Dt.magnetEnabled)()
      }),
          i = (0, It.useWatchedValueReadonly)({
        watchedValue: (0, Dt.magnetMode)()
      });
      return n.createElement("div", {
        className: Nt.toolButtonMagnet
      }, n.createElement(Ce, {
        "data-name": "magnet-button",
        buttonIcon: Rt[i].icon,
        buttonTitle: p.lineToolsInfo.magnet.localizedName,
        isActive: o,
        onClickButton: function onClickButton() {
          var e = !o;
          (0, dt.trackEvent)("GUI", "Chart Left Toolbar", "magnet mode " + (e ? "on" : "off")), !1;
          (0, Dt.setIsMagnetEnabled)(e);
        },
        buttonHotKey: p.lineToolsInfo.magnet.hotKey,
        checkable: !0,
        isSmallTablet: t,
        onArrowClick: function onArrowClick() {
          0;
        }
      }, Object.values(Rt).map(function (_ref43) {
        var e = _ref43.id,
            a = _ref43.name,
            s = _ref43.localizedName,
            r = _ref43.icon;
        return n.createElement(st.AccessibleMenuItem, {
          key: e,
          className: t ? Nt.toolButtonMagnet__menuItem : void 0,
          "data-name": a,
          icon: r,
          isActive: o && i === e,
          label: s,
          onClick: l,
          onClickArg: e
        });
      })), !1);

      function l(e) {
        void 0 !== e && ((0, dt.trackEvent)("GUI", "Magnet mode", e === Bt.MagnetMode.WeakMagnet ? "Weak" : "Strong"), (0, Dt.setMagnetMode)(e));
      }
    }

    var Ot;
    !function (e) {
      e.Screenshot = "drawing-toolbar-screenshot", e.FavoriteDrawings = "drawing-toolbar-favorite-drawings", e.ObjectTree = "drawing-toolbar-object-tree";
    }(Ot || (Ot = {}));
    var Pt = o(70412),
        Vt = o(21861),
        Ht = o(9438),
        jt = o(29197),
        zt = o(54079),
        Ut = o(27334);
    var Zt = Ut,
        Gt = "http://www.w3.org/2000/svg";

    function Kt(e) {
      var t = e.direction,
          _e$theme3 = e.theme,
          o = _e$theme3 === void 0 ? Ut : _e$theme3;
      return n.createElement("svg", {
        xmlns: Gt,
        width: "9",
        height: "27",
        viewBox: "0 0 9 27",
        className: a(o.container, "right" === t ? o.mirror : null),
        onContextMenu: Vt.preventDefault
      }, n.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, n.createElement("path", {
        className: o.background,
        d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z"
      }), n.createElement("path", {
        className: o.arrow,
        d: "M5.5 10l-2 3.5 2 3.5"
      })));
    }

    var Jt = o(22231);
    var Yt = (0, pe.mergeThemes)(Zt, Jt),
        qt = {
      hide: f.t(null, void 0, o(96411)),
      show: f.t(null, void 0, o(63354))
    };

    var $t =
    /*#__PURE__*/
    function (_n$PureComponent8) {
      _inherits($t, _n$PureComponent8);

      function $t() {
        var _this13;

        _classCallCheck(this, $t);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf($t).apply(this, arguments)), _this13._toggleVisibility = function () {
          _.isDrawingToolbarVisible.setValue(!_.isDrawingToolbarVisible.value());
        };
        return _this13;
      }

      _createClass($t, [{
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              e = _this$props4.toolbarVisible,
              t = _this$props4["data-name"];
          return n.createElement("div", {
            className: a(Yt.toggleButton, "apply-common-tooltip common-tooltip-vertical", !e && Yt.collapsed),
            onClick: this._toggleVisibility,
            title: e ? qt.hide : qt.show,
            "data-name": t,
            "data-value": e ? "visible" : "collapsed"
          }, n.createElement(Kt, {
            direction: e ? "left" : "right",
            theme: e ? void 0 : Yt
          }));
        }
      }]);

      return $t;
    }(n.PureComponent);

    var Qt = o(37558),
        Xt = o(24437),
        eo = o(90692);
    var to = {
      chartWidgetCollection: o(19036).any.isRequired
    };
    var oo = o(5962),
        no = o(99537);

    var io = u.enabled("right_toolbar"),
        lo = u.enabled("keep_object_tree_widget_in_right_toolbar"),
        ao = (0, v.onWidget)(),
        so = new m.Delegate(),
        ro = dt.trackEvent.bind(null, "GUI", "Chart Left Toolbar"),
        co = function co(e, t) {
      return ro("".concat(e, " ").concat(t ? "on" : "off"));
    };

    var uo =
    /*#__PURE__*/
    function (_n$PureComponent9) {
      _inherits(uo, _n$PureComponent9);

      function uo(e) {
        var _this14;

        _classCallCheck(this, uo);

        var t;
        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(uo).call(this, e)), _this14._grayedTools = {}, _this14._handleMeasureClick = function () {
          ho("measure");
        }, _this14._handleZoomInClick = function () {
          ho("zoom in");
        }, _this14._handleDrawingClick = function (e) {
          co("drawing mode", e), ho("drawing mode", e ? "on" : "off");
        }, _this14._handleLockClick = function (e) {
          co("lock all drawing", e), ho("lock", e ? "on" : "off");
        }, _this14._handleSyncClick = function (e) {
          co("sync", e), ho("sync", e ? "on" : "off");
        }, _this14._handleObjectsTreeClick = function () {
          _this14._activeChartWidget().showObjectsTreeDialog(), ho("object tree");
        }, _this14._handleMouseOver = function (e) {
          (0, Pt.hoverMouseEventFilter)(e) && _this14.setState({
            isHovered: !0
          });
        }, _this14._handleMouseOut = function (e) {
          (0, Pt.hoverMouseEventFilter)(e) && _this14.setState({
            isHovered: !1
          });
        }, _this14._handleChangeVisibility = function (e) {
          _this14.setState({
            isVisible: e
          });
        }, _this14._handleEsc = function () {
          d.resetToCursor(!0);
        }, _this14._handleWidgetbarSettled = function (e) {
          var t;

          _this14.setState({
            isWidgetbarVisible: Boolean(null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value()),
            widgetbarSettled: e
          });
        }, _this14._handleWidgetbarVisible = function (e) {
          _this14.setState({
            isWidgetbarVisible: e
          });
        }, d.init(), _this14._toolsFilter = new g(_this14.props.drawingsAccess), _this14._filteredLineTools = C.map(function (e) {
          return {
            id: e.id,
            title: e.title,
            items: e.items.filter(function (e) {
              return _this14._toolsFilter.isToolEnabled(p.lineToolsInfo[e.name].localizedName);
            }),
            trackLabel: e.trackLabel
          };
        }).filter(function (e) {
          return 0 !== e.items.length;
        }), _this14._filteredLineTools.forEach(function (e) {
          return e.items.forEach(function (e) {
            _this14._grayedTools[e.name] = _this14._toolsFilter.isToolGrayed(p.lineToolsInfo[e.name].localizedName);
          });
        }), _this14.state = {
          isHovered: !1,
          isVisible: _.isDrawingToolbarVisible.value(),
          isWidgetbarVisible: Boolean(null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value()),
          widgetbarSettled: void 0 !== window.widgetbar
        }, _this14._features = {
          favoriting: !ao && u.enabled("items_favoriting"),
          multicharts: u.enabled("support_multicharts"),
          tools: !ao || u.enabled("charting_library_base")
        }, _this14._registry = {
          chartWidgetCollection: _this14.props.chartWidgetCollection
        }, _this14._negotiateResizer();
        return _this14;
      }

      _createClass(uo, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e;
          _.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility), y.globalCloseDelegate.subscribe(this, this._handleGlobalClose), this._tool = d.tool.spawn(), this._tool.subscribe(this._updateHotkeys.bind(this)), this._initHotkeys(), this.props.widgetbarSettled && (this.props.widgetbarSettled.subscribe(this, this._handleWidgetbarSettled), v.CheckMobile.any() && (null === (e = window.widgetbar) || void 0 === e || e.visible().subscribe(this._handleWidgetbarVisible)));
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e;
          null === (e = window.widgetbar) || void 0 === e || e.visible().unsubscribe(this._handleWidgetbarVisible), _.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility), y.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose), this._tool.destroy(), this._hotkeys.destroy();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          var o;
          var _this$state5 = this.state,
              n = _this$state5.isVisible,
              i = _this$state5.widgetbarSettled;
          n !== t.isVisible && (h.emit("toggle_sidebar", !n), c.setValue("ChartDrawingToolbarWidget.visible", n), this._negotiateResizer()), t.widgetbarSettled !== i && i && v.CheckMobile.any() && (null === (o = window.widgetbar) || void 0 === o || o.visible().subscribe(this._handleWidgetbarVisible));
        }
      }, {
        key: "render",
        value: function render() {
          var _this15 = this;

          var _this$props5 = this.props,
              e = _this$props5.bgColor,
              t = _this$props5.chartWidgetCollection,
              o = _this$props5.readOnly,
              _this$state6 = this.state,
              i = _this$state6.isHovered,
              l = _this$state6.isVisible,
              s = {
            backgroundColor: e && "#".concat(e)
          };
          var c;
          c = n.createElement($t, {
            toolbarVisible: l,
            "data-name": "toolbar-drawing-toggle-button"
          });

          var h = function h() {
            return !!_this15._features.tools && !(!u.enabled("show_object_tree") || lo && !io);
          };

          return n.createElement(oo.RegistryProvider, {
            validation: to,
            value: this._registry
          }, n.createElement(jt.CloseDelegateContext.Provider, {
            value: so
          }, n.createElement(Qt.DrawerManager, null, n.createElement(eo.MatchMedia, {
            rule: Xt.DialogBreakpoints.TabletSmall
          }, function (e) {
            return n.createElement(zt.Toolbar, {
              id: "drawing-toolbar",
              className: a(no.drawingToolbar, _defineProperty({}, no.isHidden, !l)),
              style: s,
              onClick: _this15.props.onClick,
              onContextMenu: Vt.preventDefaultForContextMenu,
              orientation: "vertical"
            }, n.createElement(S, {
              onScroll: _this15._handleGlobalClose,
              isVisibleFade: r.mobiletouch,
              isVisibleButtons: !r.mobiletouch && i,
              isVisibleScrollbar: !1,
              onMouseOver: _this15._handleMouseOver,
              onMouseOut: _this15._handleMouseOut
            }, n.createElement("div", {
              className: no.inner
            }, !o && n.createElement("div", {
              className: no.group,
              style: s
            }, _this15._filteredLineTools.map(function (o, i) {
              return n.createElement(ut, {
                "data-name": o.id,
                chartWidgetCollection: t,
                favoriting: _this15._features.favoriting && !("linetool-group-cursors" === o.id && (0, b.isOnMobileAppPage)("any")),
                grayedTools: _this15._grayedTools,
                key: i,
                dropdownTooltip: o.title,
                lineTools: o.items,
                isSmallTablet: e,
                trackLabel: o.trackLabel
              });
            }), _this15._toolsFilter.isToolEnabled("Font Icons") && n.createElement(Xe, {
              "data-name": "linetool-group-font-icons",
              isGrayed: _this15._grayedTools["Font Icons"],
              isSmallTablet: e
            })), !o && n.createElement("div", {
              className: no.group,
              style: s
            }, n.createElement(nt, {
              toolName: "measure",
              onClick: _this15._handleMeasureClick
            }), n.createElement(nt, {
              toolName: "zoom",
              onClick: _this15._handleZoomInClick
            }), n.createElement(it, {
              chartWidgetCollection: t
            })), !o && n.createElement("div", {
              className: no.group,
              style: s
            }, n.createElement(Wt, {
              isSmallTablet: e
            }), _this15._features.tools && n.createElement(ot, {
              property: d.properties().childs().stayInDrawingMode,
              saveDefaultOnChange: !0,
              toolName: "drawginmode",
              onClick: _this15._handleDrawingClick
            }), _this15._features.tools && n.createElement(ot, {
              property: d.lockDrawings(),
              toolName: "lockAllDrawings",
              onClick: _this15._handleLockClick
            }), _this15._features.tools && n.createElement(Ft, {
              isSmallTablet: e
            }), !1), !o && _this15._features.tools && n.createElement("div", {
              className: no.group,
              style: s
            }, n.createElement(gt, {
              chartWidgetCollection: t,
              isSmallTablet: e,
              toolName: "removeAllDrawingTools"
            })), n.createElement("div", {
              className: no.fill,
              style: s
            }), !o && (_this15._features.tools || !1) && n.createElement("div", {
              className: a(no.group, no.lastGroup),
              style: s
            }, !1, _this15._features.tools && _this15._features.favoriting && n.createElement(Mt, {
              id: Ot.FavoriteDrawings
            }), h() && n.createElement(N, {
              id: Ot.ObjectTree,
              action: _this15._handleObjectsTreeClick,
              toolName: "showObjectsTree"
            })))));
          }), c)));
        }
      }, {
        key: "_activeChartWidget",
        value: function _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
      }, {
        key: "_negotiateResizer",
        value: function _negotiateResizer() {
          var e = Ht.TOOLBAR_WIDTH_COLLAPSED;
          this.props.resizerBridge.negotiateWidth(this.state.isVisible ? Ht.TOOLBAR_WIDTH_EXPANDED : e);
        }
      }, {
        key: "_handleGlobalClose",
        value: function _handleGlobalClose() {
          so.fire();
        }
      }, {
        key: "_updateHotkeys",
        value: function _updateHotkeys() {
          this._hotkeys.promote();
        }
      }, {
        key: "_initHotkeys",
        value: function _initHotkeys() {
          var _this16 = this;

          this._hotkeys = A.createGroup({
            desc: "Drawing Toolbar"
          }), this._hotkeys.add({
            desc: "Reset",
            hotkey: 27,
            handler: function handler() {
              return _this16._handleEsc();
            },
            isDisabled: function isDisabled() {
              return d.toolIsCursor(d.tool.value());
            }
          });
        }
      }]);

      return uo;
    }(n.PureComponent);

    function ho(e, t) {
      0;
    }

    var mo =
    /*#__PURE__*/
    function () {
      function mo(e, t) {
        var _this17 = this;

        _classCallCheck(this, mo);

        this._component = null, this._handleRef = function (e) {
          _this17._component = e;
        }, this._container = e, i.render(n.createElement(uo, _objectSpread({}, t, {
          ref: this._handleRef
        })), this._container);
      }

      _createClass(mo, [{
        key: "destroy",
        value: function destroy() {
          i.unmountComponentAtNode(this._container);
        }
      }, {
        key: "getComponent",
        value: function getComponent() {
          return (0, l.ensureNotNull)(this._component);
        }
      }]);

      return mo;
    }();
  },
  5962: function _(e, t, o) {
    "use strict";

    o.d(t, {
      RegistryProvider: function RegistryProvider() {
        return r;
      },
      registryContextType: function registryContextType() {
        return c;
      },
      validateRegistry: function validateRegistry() {
        return s;
      }
    });
    var n = o(50959),
        i = o(19036),
        l = o.n(i);
    var a = n.createContext({});

    function s(e, t) {
      l().checkPropTypes(t, e, "context", "RegistryContext");
    }

    function r(e) {
      var t = e.validation,
          o = e.value;
      return s(o, t), n.createElement(a.Provider, {
        value: o
      }, e.children);
    }

    function c() {
      return a;
    }
  },
  61380: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
  },
  51445: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
  },
  51609: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.31 14.5a1.07 1.07 0 0 1 0-1.5L13 4.3c.42-.41 1.1-.41 1.52 0l.99 1c.42.42.41 1.11-.02 1.53l-5.38 5.12h12.83c.6 0 1.07.48 1.07 1.07v1.43c0 .6-.48 1.07-1.07 1.07H10.1l5.38 5.13c.44.41.45 1.1.02 1.53l-1 .99c-.41.42-1.1.42-1.5 0L4.3 14.5Zm7.97 9.38-8.67-8.67c-.81-.8-.82-2.12 0-2.93l8.68-8.67c.8-.81 2.12-.82 2.92 0l1 .99c.82.82.8 2.16-.04 2.96l-3.57 3.4h10.33c1.14 0 2.07.93 2.07 2.07v1.43c0 1.15-.93 2.07-2.07 2.07H12.6l3.57 3.4c.84.8.86 2.14.03 2.97l-.99.99c-.8.8-2.12.8-2.93 0Z"/></svg>';
  },
  22976: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.87 4.52a.5.5 0 0 1 .61.35L6.91 10h5.47l1.03-4.67c.14-.63 1.04-.63 1.18 0L15.62 10h5.47l1.43-5.13a.5.5 0 0 1 .96.26L22.13 10H25a.5.5 0 0 1 0 1h-3.15l-.83 3H25a.5.5 0 0 1 0 1h-4.26l-2.15 7.75c-.17.6-1.03.58-1.16-.03L15.7 15h-3.42l-1.72 7.72c-.13.6-1 .63-1.16.03L7.26 15H3a.5.5 0 1 1 0-1h3.98l-.83-3H3a.5.5 0 1 1 0-1h2.87L4.52 5.13a.5.5 0 0 1 .35-.61ZM7.19 11l.83 3h3.47l.66-3H7.2Zm5.99 0-.67 3h2.98l-.67-3h-1.64Zm1.42-1L14 7.3l-.6 2.7h1.2Zm1.25 1 .66 3h3.47l.83-3h-4.96Zm3.85 4h-2.97l1.32 5.94L19.7 15Zm-8.43 0H8.3l1.65 5.94L11.27 15Z"/></svg>';
  },
  70616: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>';
  },
  48748: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14.08 3.73c.1.16.1.37 0 .54a9.4 9.4 0 0 0 3.35 13.26 9.9 9.9 0 0 0 6.49 1.18.5.5 0 0 1 .5.76 10.67 10.67 0 0 1-3.83 3.64 10.91 10.91 0 0 1-14.28-3.3A10.44 10.44 0 0 1 8.69 5.56a10.86 10.86 0 0 1 4.9-2.06.5.5 0 0 1 .49.22Zm8.3 15.61v.5c-1.91 0-3.8-.5-5.45-1.44a10.64 10.64 0 0 1-3.95-3.97 10.4 10.4 0 0 1-.3-9.72 9.6 9.6 0 0 0-6.37 5.39 9.39 9.39 0 0 0 .83 9.14 9.7 9.7 0 0 0 3.6 3.17 9.92 9.92 0 0 0 12.21-2.59c-.19.02-.38.02-.57.02v-.5Z"/></svg>';
  },
  18042: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M6 11.69C6 7.46 9.56 4 14 4c4.44 0 8 3.46 8 7.69 0 2.63-1.2 4.93-3.25 6.31H14.5v-5H18v-1h-8v1h3.5v5H9.14A8.06 8.06 0 0 1 6 11.69Zm2 6.67a9.1 9.1 0 0 1-3-6.67C5 6.87 9.05 3 14 3s9 3.87 9 8.69a8.51 8.51 0 0 1-3 6.62V22h-2v3h-8v-3H8v-3.64ZM11 22v2h6v-2h-6Zm-2-1v-2h10v2H9Z"/></svg>';
  },
  44986: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM14 16V9h1v6h4v1h-5Z"/></svg>';
  },
  83778: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-6 4-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17Z"/></svg>';
  },
  90624: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="28" height="28"><path fill="#fff" d="M63.42 93.22a37.13 37.13 0 1 0 .01-74.27 37.13 37.13 0 0 0-.01 74.27Z"/><path fill="#fff" d="M45.48 48.85c-.71.04-1.96 0-3.17.2-2.36.41-4.72.85-7.03 1.51a30.65 30.65 0 0 0-4.87 2.02c-1.9.9-3.74 1.93-5.59 2.94-.66.36-.71.86-.16 1.39.53.53 1.1 1.01 1.7 1.44 2.43 1.63 4.91 3.15 7.3 4.85 2.77 1.95 5.86 3.03 8.95 4.03 3.5 1.14 7.15.85 10.72.38 4.05-.54 8.1-1.3 11.9-2.96 2.17-.95 4.21-2.22 6.27-3.44.88-.5.86-.86.08-1.5-1.59-1.28-3.16-2.6-4.82-3.78-3.73-2.66-7.65-4.85-12.05-6a29.47 29.47 0 0 0-9.23-1.08Zm6.56-21.95v8.8c0 1.1-.02 2.18-.03 3.27 0 .86.33 1.39 1.14 1.47.38.04.77.06 1.16.11 2.8.35 3.14.13 3.99-2.86.77-2.7 1.47-5.44 2.22-8.15.31-1.12.5-1.18 1.5-.79 1.98.78 3.95 1.58 5.94 2.32.77.29 1.03.6.7 1.56-.98 2.94-1.86 5.92-2.77 8.89-.09.28-.15.57-.21.86-.42 2.02-.37 2.12 1.37 2.8.25.1.5.21.74.34.51.3.91.26 1.38-.19 2.34-2.22 4.75-4.34 7.05-6.6.74-.73 1.57-.62 2.16-.04A83.06 83.06 0 0 1 82 42.52c.64.73.6 1.52-.04 2.3a273.4 273.4 0 0 1-4.69 5.62c-.46.53-.44.98-.02 1.44 1.46 1.55 2.93 3.1 4.4 4.63 1.1 1.13 2.21 2.24 3.3 3.37 1.05 1.07 1.12 1.67.06 2.77-1.44 1.5-2.86 3.08-4.51 4.23a87.09 87.09 0 0 1-10 6.28 32.38 32.38 0 0 1-12.28 3.5c-4.54.36-9.07.43-13.57-.15a59.04 59.04 0 0 1-9.69-2.07 38.4 38.4 0 0 1-8.35-3.83 51.59 51.59 0 0 1-5.8-4.13 73.78 73.78 0 0 1-6.18-5.38c-1.29-1.3-2.33-2.9-3.38-4.46-.58-.84-.06-1.55.59-2.1 1.14-.96 2.32-1.9 3.42-2.9.72-.65.95-.96 1.62-1.67.5-.53.43-1.02-.07-1.51-1.3-1.3-1.52-1.76-2.83-3.07-.6-.59-.74-1.1-.07-1.79 1.66-1.72 4.35-4.22 5.97-5.98.8-.86.9-.82 1.7.12 1.6 1.9 2.12 2.97 3.78 4.83.87.98 1.19 1.55 2.5 1.04 2.37-.95 1.76-.7 1.05-3.35-.64-2.37-1-2.96-1.72-5.3-.08-.26-.17-.5-.23-.75-.33-1.2-.3-1.33.8-1.7 2.06-.68 5.56-1.72 7.62-2.4.8-.27 1.16.18 1.39.93.73 2.55 1.01 3.38 1.77 5.92.2.72.48 1.41.84 2.05.7 1.18 1.13 1.4 2.27 1.36 1.96-.07 2.24-.3 2.24-2.45 0-3.1-.06-6.21-.14-9.32-.04-1.53-.07-1.62 1.34-1.66 2.3-.06 4.61-.02 6.96-.02"/><path fill="#2962FF" d="M63.42 90.92a34.26 34.26 0 1 0 .01-68.52 34.26 34.26 0 0 0-.01 68.52Z"/><path fill="#FF5200" d="M45.69 49.83c-.67.03-1.83 0-2.95.17-2.2.35-4.4.72-6.54 1.28-1.56.4-3.06 1.05-4.53 1.7-1.76.77-3.47 1.64-5.2 2.49-.6.3-.66.73-.15 1.17.5.45 1.03.86 1.59 1.22 2.26 1.37 4.56 2.66 6.79 4.1 2.57 1.64 5.45 2.55 8.31 3.4 3.26.96 6.65.72 9.98.32 3.76-.46 7.52-1.1 11.06-2.5 2.01-.8 3.92-1.88 5.82-2.9.82-.44.8-.74.08-1.27-1.48-1.09-2.94-2.2-4.48-3.2-3.47-2.25-7.11-4.1-11.2-5.06a30.03 30.03 0 0 0-8.59-.91v-.01Zm6.09-18.54v7.44l-.02 2.76c0 .72.3 1.17 1.05 1.24.36.03.73.05 1.08.1 2.6.29 2.92.1 3.71-2.43.72-2.28 1.37-4.59 2.07-6.88.29-.94.45-1 1.4-.66 1.84.66 3.66 1.33 5.52 1.95.7.25.95.52.64 1.32-.9 2.48-1.72 5-2.57 7.5-.08.25-.14.5-.2.74-.38 1.7-.34 1.79 1.28 2.37.23.08.47.17.7.28.47.26.84.22 1.27-.16 2.18-1.87 4.42-3.67 6.56-5.58.69-.61 1.46-.52 2-.03a73.41 73.41 0 0 1 3.37 3.24c.6.6.56 1.28-.03 1.94-1.44 1.6-2.89 3.18-4.37 4.74-.43.46-.4.83-.01 1.22a340.4 340.4 0 0 0 4.1 3.91c1 .96 2.04 1.9 3.06 2.85.97.9 1.03 1.41.05 2.34-1.34 1.26-2.66 2.6-4.2 3.57a82.59 82.59 0 0 1-9.29 5.3 32.44 32.44 0 0 1-11.42 2.97c-4.22.3-8.43.36-12.62-.13a59.71 59.71 0 0 1-9-1.75c-2.76-.77-5.3-1.91-7.77-3.24a48.2 48.2 0 0 1-5.39-3.49c-2-1.4-3.92-2.92-5.75-4.54-1.2-1.09-2.17-2.45-3.15-3.76-.53-.72-.05-1.31.55-1.78 1.06-.82 2.16-1.6 3.18-2.45.67-.55 1.27-1.17 1.9-1.77.46-.45.4-.86-.07-1.28l-3.64-3.32c-.55-.5-.68-.93-.05-1.51 1.53-1.46 3.01-2.98 4.52-4.46.74-.72.84-.7 1.58.1 1.5 1.61 2.98 3.24 4.51 4.8.82.84 1.75 1.09 2.96.65 2.21-.8 2.3-.73 1.63-2.97-.6-2-1.32-3.96-2-5.93-.07-.22-.16-.42-.21-.63-.3-1.02-.28-1.12.74-1.43 1.92-.59 3.85-1.11 5.77-1.69.75-.23 1.08.15 1.3.78.67 2.16 1.33 4.32 2.04 6.46.18.61.44 1.2.78 1.74.66 1 1.72.98 2.78.94 1.83-.06 2.09-.25 2.09-2.07 0-2.62-.06-5.25-.13-7.87-.04-1.3-.07-1.37 1.24-1.4 2.14-.06 4.29-.02 6.47-.02"/><path fill="#FDD600" d="m53.5 54.08.15-.32c-.5-.49-.91-1.15-1.5-1.44a9.83 9.83 0 0 0-6.84-.8c-1.95.5-3.23 1.92-4.14 3.57-.98 1.8-1.33 3.8-.09 5.64.54.8 1.38 1.44 2.16 2.04a6.98 6.98 0 0 0 10.61-2.68c.4-.87.27-1.18-.66-1.48-.98-.31-1.98-.59-2.96-.9-.65-.22-1.31-.44-1.31-1.3 0-.82.53-1.15 1.24-1.35 1.12-.3 2.23-.65 3.34-.97Zm-7.81-4.25c3.23-.15 5.9.29 8.58.92 4.08.96 7.73 2.8 11.21 5.06 1.54.99 3 2.1 4.48 3.2.72.53.74.82-.08 1.26-1.91 1.03-3.82 2.1-5.82 2.9-3.54 1.4-7.3 2.04-11.07 2.5-3.32.4-6.72.65-9.97-.31-2.87-.85-5.74-1.76-8.32-3.41-2.22-1.43-4.52-2.72-6.78-4.1a12 12 0 0 1-1.6-1.21c-.5-.45-.45-.86.17-1.18 1.72-.86 3.43-1.72 5.19-2.48 1.48-.65 2.97-1.3 4.52-1.7 2.16-.56 4.35-.93 6.55-1.28 1.12-.18 2.28-.14 2.94-.18"/><path fill="#1D1D1B" d="M53.5 54.08c-1.11.33-2.22.67-3.34.98-.71.19-1.24.52-1.24 1.34 0 .86.67 1.1 1.3 1.3.99.32 1.99.6 2.97.9.93.3 1.05.61.66 1.49a6.98 6.98 0 0 1-10.62 2.68 9.18 9.18 0 0 1-2.16-2.04c-1.24-1.85-.9-3.85.1-5.65.9-1.65 2.18-3.07 4.13-3.57a9.84 9.84 0 0 1 6.84.8c.6.3 1.01.95 1.5 1.44l-.15.33"/></svg>';
  }
}]);