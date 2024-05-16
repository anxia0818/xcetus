"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3005], {
  64553: function _(e) {
    e.exports = {
      wrap: "wrap-wXGVFOC9",
      wrapWithArrowsOuting: "wrapWithArrowsOuting-wXGVFOC9",
      wrapOverflow: "wrapOverflow-wXGVFOC9",
      scrollWrap: "scrollWrap-wXGVFOC9",
      noScrollBar: "noScrollBar-wXGVFOC9",
      icon: "icon-wXGVFOC9",
      scrollLeft: "scrollLeft-wXGVFOC9",
      scrollRight: "scrollRight-wXGVFOC9",
      isVisible: "isVisible-wXGVFOC9",
      iconWrap: "iconWrap-wXGVFOC9",
      fadeLeft: "fadeLeft-wXGVFOC9",
      fadeRight: "fadeRight-wXGVFOC9"
    };
  },
  39416: function _(e, t, s) {
    "use strict";

    s.d(t, {
      useFunctionalRefObject: function useFunctionalRefObject() {
        return i;
      }
    });
    var n = s(50959),
        r = s(43010);

    function i(e) {
      var t = (0, n.useMemo)(function () {
        return function (e) {
          var t = function t(s) {
            e(s), t.current = s;
          };

          return t.current = null, t;
        }(function (e) {
          o.current(e);
        });
      }, []),
          s = (0, n.useRef)(null),
          i = function i(t) {
        if (null === t) return a(s.current, t), void (s.current = null);
        s.current !== e && (s.current = e, a(s.current, t));
      },
          o = (0, n.useRef)(i);

      return o.current = i, (0, r.useIsomorphicLayoutEffect)(function () {
        if (null !== t.current) return o.current(t.current), function () {
          return o.current(null);
        };
      }, [e]), t;
    }

    function a(e, t) {
      null !== e && ("function" == typeof e ? e(t) : e.current = t);
    }
  },
  43010: function _(e, t, s) {
    "use strict";

    s.d(t, {
      useIsomorphicLayoutEffect: function useIsomorphicLayoutEffect() {
        return r;
      }
    });
    var n = s(50959);

    function r(e, t) {
      ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(e, t);
    }
  },
  67842: function _(e, t, s) {
    "use strict";

    s.d(t, {
      useResizeObserver: function useResizeObserver() {
        return o;
      }
    });
    var n = s(50959),
        r = s(59255),
        i = s(43010),
        a = s(39416);

    function o(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref = function (e) {
        return "function" == typeof e ? {
          callback: e
        } : e;
      }(e),
          s = _ref.callback,
          _ref$ref = _ref.ref,
          o = _ref$ref === void 0 ? null : _ref$ref,
          l = (0, n.useRef)(null),
          c = (0, n.useRef)(s);

      c.current = s;
      var u = (0, a.useFunctionalRefObject)(o),
          d = (0, n.useCallback)(function (e) {
        u(e), null !== l.current && (l.current.disconnect(), null !== e && l.current.observe(e));
      }, [u, l]);
      return (0, i.useIsomorphicLayoutEffect)(function () {
        return l.current = new r["default"](function (e, t) {
          c.current(e, t);
        }), u.current && d(u.current), function () {
          var e;
          null === (e = l.current) || void 0 === e || e.disconnect();
        };
      }, [u].concat(_toConsumableArray(t))), d;
    }
  },
  9745: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Icon: function Icon() {
        return r;
      }
    });
    var n = s(50959);
    var r = n.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          s = _e$icon === void 0 ? "" : _e$icon,
          r = _objectWithoutProperties(e, ["icon"]);

      return n.createElement("span", _objectSpread({}, r, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: s
        }
      }));
    });
  },
  76460: function _(e, t, s) {
    "use strict";

    function n(e) {
      return 0 === e.detail;
    }

    s.d(t, {
      isKeyboardClick: function isKeyboardClick() {
        return n;
      }
    });
  },
  47201: function _(e, t, s) {
    "use strict";

    function n() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      return function (t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _s = _step.value;
            void 0 !== _s && _s(t);
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
      };
    }

    s.d(t, {
      createSafeMulticastEventHandler: function createSafeMulticastEventHandler() {
        return n;
      }
    });
  },
  42142: function _(e, t, s) {
    "use strict";

    s.d(t, {
      FragmentMap: function FragmentMap() {
        return r;
      }
    });
    var n = s(50959);

    function r(e) {
      if (e.map) {
        return n.Children.toArray(e.children).map(e.map);
      }

      return e.children;
    }
  },
  45601: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Measure: function Measure() {
        return r;
      }
    });
    var n = s(67842);

    function r(e) {
      var t = e.children,
          s = e.onResize;
      return t((0, n.useResizeObserver)(s || function () {}, [null === s]));
    }
  },
  70412: function _(e, t, s) {
    "use strict";

    s.d(t, {
      hoverMouseEventFilter: function hoverMouseEventFilter() {
        return i;
      },
      useAccurateHover: function useAccurateHover() {
        return a;
      },
      useHover: function useHover() {
        return r;
      }
    });
    var n = s(50959);

    function r() {
      var _ref2 = (0, n.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          e = _ref3[0],
          t = _ref3[1];

      return [e, {
        onMouseOver: function onMouseOver(e) {
          i(e) && t(!0);
        },
        onMouseOut: function onMouseOut(e) {
          i(e) && t(!1);
        }
      }];
    }

    function i(e) {
      return !e.currentTarget.contains(e.relatedTarget);
    }

    function a(e) {
      var _ref4 = (0, n.useState)(!1),
          _ref5 = _slicedToArray(_ref4, 2),
          t = _ref5[0],
          s = _ref5[1];

      return (0, n.useEffect)(function () {
        var t = function t(_t) {
          if (null === e.current) return;
          var n = e.current.contains(_t.target);
          s(n);
        };

        return document.addEventListener("mouseover", t), function () {
          return document.removeEventListener("mouseover", t);
        };
      }, []), t;
    }
  },
  21043: function _(e) {
    e.exports = {
      group: "group-MBOVGQRI",
      separator: "separator-MBOVGQRI",
      noLeftDecoration: "noLeftDecoration-MBOVGQRI",
      noRightDecoration: "noRightDecoration-MBOVGQRI",
      noMinimalWidth: "noMinimalWidth-MBOVGQRI",
      separatorWrap: "separatorWrap-MBOVGQRI"
    };
  },
  63869: function _(e) {
    e.exports = {
      separator: "separator-xVhBjD5m"
    };
  },
  20694: function _(e) {
    e.exports = {
      "css-value-header-toolbar-height": "38px",
      toolbar: "toolbar-qqNP9X6e",
      isHidden: "isHidden-qqNP9X6e",
      overflowWrap: "overflowWrap-qqNP9X6e",
      customButton: "customButton-qqNP9X6e",
      hover: "hover-qqNP9X6e"
    };
  },
  59468: function _(e) {
    e.exports = {
      wrap: "wrap-_psvpUP2",
      icon: "icon-_psvpUP2"
    };
  },
  40620: function _(e) {
    e.exports = {
      "css-value-header-toolbar-height": "38px",
      innerWrap: "innerWrap-OhqNVIYA",
      inner: "inner-OhqNVIYA",
      fake: "fake-OhqNVIYA",
      fill: "fill-OhqNVIYA",
      collapse: "collapse-OhqNVIYA",
      button: "button-OhqNVIYA",
      iconButton: "iconButton-OhqNVIYA",
      hidden: "hidden-OhqNVIYA",
      content: "content-OhqNVIYA",
      desktopPublish: "desktopPublish-OhqNVIYA",
      mobilePublish: "mobilePublish-OhqNVIYA"
    };
  },
  71468: function _(e, t, s) {
    "use strict";

    function n(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
    }

    function r(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
    }

    s.d(t, {
      becomeMainElement: function becomeMainElement() {
        return n;
      },
      becomeSecondaryElement: function becomeSecondaryElement() {
        return r;
      }
    });
  },
  36898: function _(e, t, s) {
    "use strict";

    s.d(t, {
      useMouseClickAutoBlur: function useMouseClickAutoBlur() {
        return a;
      }
    });
    var n = s(50959),
        r = s(76460),
        i = s(16838);

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      (0, n.useEffect)(function () {
        if (!i.PLATFORM_ACCESSIBILITY_ENABLED || !t) return;

        var s = function s(t) {
          var s = e.current;
          null !== s && document.activeElement instanceof HTMLElement && ((0, r.isKeyboardClick)(t) || s.contains(document.activeElement) && "INPUT" !== document.activeElement.tagName && document.activeElement.blur());
        };

        return window.addEventListener("click", s, !0), function () {
          return window.removeEventListener("click", s, !0);
        };
      }, [t]);
    }
  },
  65817: function _(e, t, s) {
    "use strict";

    s.d(t, {
      INTERVALS: function INTERVALS() {
        return r;
      }
    });
    var n = s(44352);
    var r = [{
      name: "",
      label: n.t(null, {
        context: "interval"
      }, s(37830))
    }, {
      name: "H",
      label: n.t(null, {
        context: "interval"
      }, s(5285))
    }, {
      name: "D",
      label: n.t(null, {
        context: "interval"
      }, s(6174))
    }, {
      name: "W",
      label: n.t(null, {
        context: "interval"
      }, s(25042))
    }, {
      name: "M",
      label: n.t(null, {
        context: "interval"
      }, s(79410))
    }];
  },
  54079: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Toolbar: function Toolbar() {
        return d;
      }
    });
    var n = s(50959),
        r = s(50151),
        i = s(47201),
        a = s(3343),
        o = s(16838),
        l = s(71468),
        c = s(39416),
        u = s(36898);
    var d = (0, n.forwardRef)(function (e, t) {
      var s = e.onKeyDown,
          d = e.orientation,
          _e$blurOnEscKeydown = e.blurOnEscKeydown,
          h = _e$blurOnEscKeydown === void 0 ? !0 : _e$blurOnEscKeydown,
          _e$blurOnClick = e.blurOnClick,
          m = _e$blurOnClick === void 0 ? !0 : _e$blurOnClick,
          v = _objectWithoutProperties(e, ["onKeyDown", "orientation", "blurOnEscKeydown", "blurOnClick"]),
          p = o.PLATFORM_ACCESSIBILITY_ENABLED ? {
        role: "toolbar",
        "aria-orientation": d
      } : {},
          f = (0, c.useFunctionalRefObject)(t);

      return (0, n.useLayoutEffect)(function () {
        if (!o.PLATFORM_ACCESSIBILITY_ENABLED) return;

        var e = (0, r.ensureNotNull)(f.current),
            t = function t() {
          var t = (0, o.queryTabbableElements)(e).sort(o.navigationOrderComparator);

          if (0 === t.length) {
            var _sort = (0, o.queryFocusableElements)(e).sort(o.navigationOrderComparator),
                _sort2 = _slicedToArray(_sort, 1),
                _t2 = _sort2[0];

            if (void 0 === _t2) return;
            (0, l.becomeMainElement)(_t2);
          }

          if (t.length > 1) {
            var _t3 = _toArray(t),
                _e2 = _t3.slice(1);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _e2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _t4 = _step2.value;
                (0, l.becomeSecondaryElement)(_t4);
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
        };

        return window.addEventListener("keyboard-navigation-activation", t), function () {
          return window.removeEventListener("keyboard-navigation-activation", t);
        };
      }, []), (0, u.useMouseClickAutoBlur)(f, m), n.createElement("div", _objectSpread({}, v, {}, p, {
        ref: f,
        onKeyDown: (0, i.createSafeMulticastEventHandler)(function (e) {
          if (!o.PLATFORM_ACCESSIBILITY_ENABLED) return;
          if (e.defaultPrevented) return;
          if (!(document.activeElement instanceof HTMLElement)) return;
          var t = (0, a.hashFromEvent)(e);
          if (27 === t) return e.preventDefault(), void document.activeElement.blur();
          if ("vertical" !== d && 37 !== t && 39 !== t) return;
          if ("vertical" === d && 38 !== t && 40 !== t) return;
          var s = e.currentTarget,
              n = (0, o.queryFocusableElements)(s).sort(o.navigationOrderComparator);
          if (0 === n.length) return;
          var r = n.indexOf(document.activeElement);
          if (-1 === r) return;
          e.preventDefault();

          var i = function i() {
            var e = (r + n.length - 1) % n.length;
            (0, l.becomeSecondaryElement)(n[r]), (0, l.becomeMainElement)(n[e]), n[e].focus();
          },
              c = function c() {
            var e = (r + n.length + 1) % n.length;
            (0, l.becomeSecondaryElement)(n[r]), (0, l.becomeMainElement)(n[e]), n[e].focus();
          };

          switch (t) {
            case 37:
              "vertical" !== d && i();
              break;

            case 39:
              "vertical" !== d && c();
              break;

            case 38:
              "vertical" === d && i();
              break;

            case 40:
              "vertical" === d && c();
          }
        }, s)
      }));
    });
  },
  46618: function _(e, t, s) {
    "use strict";

    var _Se;

    s.r(t), s.d(t, {
      HeaderToolbarRenderer: function HeaderToolbarRenderer() {
        return Le;
      }
    });
    var n = s(50959),
        r = s(962),
        i = s(50151),
        a = s(97754),
        o = s.n(a),
        l = s(85459),
        c = s.n(l),
        u = s(43370),
        d = s(14483),
        h = s(76422),
        m = s(19036),
        v = s(32563),
        p = s(42142),
        f = s(63869);

    function g(e) {
      return n.createElement("div", {
        className: o()(f.separator, e.className)
      });
    }

    var S = s(21043);

    function y(e) {
      var _a;

      var t = e.children,
          s = e.className,
          r = e.noLeftDecoration,
          i = e.noRightDecoration,
          o = e.noMinimalWidth,
          l = e.onClick,
          c = e.removeSeparator;
      return n.createElement(n.Fragment, null, !c && n.createElement("div", {
        className: S.separatorWrap
      }, n.createElement(g, {
        className: S.separator
      })), n.createElement("div", {
        className: a(s, S.group, (_a = {}, _defineProperty(_a, S.noMinimalWidth, o), _defineProperty(_a, S.noLeftDecoration, r), _defineProperty(_a, S.noRightDecoration, i), _a)),
        onClick: l
      }, t));
    }

    var _ = s(45601),
        E = s(44352),
        b = s(9745),
        C = s(59468),
        w = s(45820);

    var M = {
      text: E.t(null, void 0, s(55646))
    };

    function I(e) {
      return n.createElement("div", {
        className: C.wrap
      }, n.createElement(b.Icon, {
        className: C.icon,
        icon: w
      }), M.text);
    }

    var k = s(88275),
        R = s(61345),
        V = s(38223),
        L = s(61380),
        F = s(64553);
    var O = {
      isVisibleScrollbar: !0,
      shouldMeasure: !0,
      hideButtonsFrom: 1
    };

    function W(e) {
      return n.createElement("div", {
        className: a(F.fadeLeft, e.className, _defineProperty({}, F.isVisible, e.isVisible))
      });
    }

    function N(e) {
      return n.createElement("div", {
        className: a(F.fadeRight, e.className, _defineProperty({}, F.isVisible, e.isVisible))
      });
    }

    function T(e) {
      return n.createElement(B, _objectSpread({}, e, {
        className: F.scrollLeft
      }));
    }

    function A(e) {
      return n.createElement(B, _objectSpread({}, e, {
        className: F.scrollRight
      }));
    }

    function B(e) {
      return n.createElement("div", {
        className: a(e.className, _defineProperty({}, F.isVisible, e.isVisible)),
        onClick: e.onClick
      }, n.createElement("div", {
        className: F.iconWrap
      }, n.createElement(b.Icon, {
        icon: L,
        className: F.icon
      })));
    }

    var D = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : T;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : A;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : W;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : N;
      var o;
      return (o =
      /*#__PURE__*/
      function (_n$PureComponent) {
        _inherits(o, _n$PureComponent);

        function o(e) {
          var _this;

          _classCallCheck(this, o);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e)), _this._scroll = n.createRef(), _this._handleScrollLeft = function () {
            if (_this.props.onScrollButtonClick) return void _this.props.onScrollButtonClick("left");
            var e = _this.props.scrollStepSize || _this.state.widthWrap - 50;

            _this.animateTo(Math.max(0, _this.currentPosition() - e));
          }, _this._handleScrollRight = function () {
            if (_this.props.onScrollButtonClick) return void _this.props.onScrollButtonClick("right");
            var e = _this.props.scrollStepSize || _this.state.widthWrap - 50;

            _this.animateTo(Math.min((_this.state.widthContent || 0) - (_this.state.widthWrap || 0), _this.currentPosition() + e));
          }, _this._handleResizeWrap = function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 1),
                e = _ref7[0];

            var t = e.target.getBoundingClientRect();
            _this.props.onMeasureWrap && _this.props.onMeasureWrap(t), _this.setState({
              widthWrap: t.width
            }), _this._checkButtonsVisibility();
          }, _this._handleResizeContent = function (_ref8) {
            var _ref9 = _slicedToArray(_ref8, 1),
                e = _ref9[0];

            var t = e.target.getBoundingClientRect();
            _this.props.onMeasureContent && _this.props.onMeasureContent(t);
            var _this$props = _this.props,
                s = _this$props.shouldDecreaseWidthContent,
                n = _this$props.buttonsWidthIfDecreasedWidthContent;
            s && n ? _this.setState({
              widthContent: t.width + 2 * n
            }) : _this.setState({
              widthContent: t.width
            });
          }, _this._handleScroll = function () {
            var e = _this.props.onScroll;
            e && e(_this.currentPosition(), _this.isAtLeft(), _this.isAtRight()), _this._checkButtonsVisibility();
          }, _this._checkButtonsVisibility = function () {
            var _this$state = _this.state,
                e = _this$state.isVisibleLeftButton,
                t = _this$state.isVisibleRightButton,
                s = _this.isAtLeft(),
                n = _this.isAtRight();

            s || e ? s && e && _this.setState({
              isVisibleLeftButton: !1
            }) : _this.setState({
              isVisibleLeftButton: !0
            }), n || t ? n && t && _this.setState({
              isVisibleRightButton: !1
            }) : _this.setState({
              isVisibleRightButton: !0
            });
          }, _this.state = {
            widthContent: 0,
            widthWrap: 0,
            isVisibleRightButton: !1,
            isVisibleLeftButton: !1
          };
          return _this;
        }

        _createClass(o, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this._checkButtonsVisibility();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(e, t) {
            t.widthWrap === this.state.widthWrap && t.widthContent === this.state.widthContent || this._handleScroll();
          }
        }, {
          key: "currentPosition",
          value: function currentPosition() {
            return this._scroll.current ? (0, V.isRtl)() ? (0, V.getLTRScrollLeft)(this._scroll.current) : this._scroll.current.scrollLeft : 0;
          }
        }, {
          key: "isAtLeft",
          value: function isAtLeft() {
            return !this._isOverflowed() || this.currentPosition() <= (0, i.ensureDefined)(this.props.hideButtonsFrom);
          }
        }, {
          key: "isAtRight",
          value: function isAtRight() {
            return !this._isOverflowed() || this.currentPosition() + this.state.widthWrap >= this.state.widthContent - (0, i.ensureDefined)(this.props.hideButtonsFrom);
          }
        }, {
          key: "animateTo",
          value: function animateTo(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : R.dur;
            var s = this._scroll.current;
            s && ((0, V.isRtl)() && (e = (0, V.getLTRScrollLeftOffset)(s, e)), t <= 0 ? s.scrollLeft = Math.round(e) : (0, k.doAnimate)({
              onStep: function onStep(e, t) {
                s.scrollLeft = Math.round(t);
              },
              from: s.scrollLeft,
              to: Math.round(e),
              easing: R.easingFunc.easeInOutCubic,
              duration: t
            }));
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            var _this$props2 = this.props,
                i = _this$props2.children,
                o = _this$props2.isVisibleScrollbar,
                l = _this$props2.isVisibleFade,
                c = _this$props2.isVisibleButtons,
                u = _this$props2.shouldMeasure,
                d = _this$props2.shouldDecreaseWidthContent,
                h = _this$props2.buttonsWidthIfDecreasedWidthContent,
                m = _this$props2.onMouseOver,
                v = _this$props2.onMouseOut,
                p = _this$props2.scrollWrapClassName,
                f = _this$props2.fadeClassName,
                _this$state2 = this.state,
                g = _this$state2.isVisibleRightButton,
                S = _this$state2.isVisibleLeftButton,
                y = d && h;
            return n.createElement(_.Measure, {
              onResize: u ? this._handleResizeWrap : null
            }, function (d) {
              return n.createElement("div", {
                className: F.wrapOverflow,
                onMouseOver: m,
                onMouseOut: v,
                ref: d
              }, n.createElement("div", {
                className: a(F.wrap, y ? F.wrapWithArrowsOuting : "")
              }, n.createElement("div", {
                className: a(F.scrollWrap, p, _defineProperty({}, F.noScrollBar, !o)),
                onScroll: _this2._handleScroll,
                ref: _this2._scroll
              }, n.createElement(_.Measure, {
                onResize: u ? _this2._handleResizeContent : null
              }, i)), l && n.createElement(s, {
                isVisible: S,
                className: f
              }), l && n.createElement(r, {
                isVisible: g,
                className: f
              }), c && n.createElement(e, {
                onClick: _this2._handleScrollLeft,
                isVisible: S
              }), c && n.createElement(t, {
                onClick: _this2._handleScrollRight,
                isVisible: g
              })));
            });
          }
        }, {
          key: "_isOverflowed",
          value: function _isOverflowed() {
            var _this$state3 = this.state,
                e = _this$state3.widthContent,
                t = _this$state3.widthWrap;
            return e > t;
          }
        }]);

        return o;
      }(n.PureComponent)).defaultProps = O, o;
    }(T, A, W, N);

    var x,
        P = s(21861);
    !function (e) {
      e.SymbolSearch = "header-toolbar-symbol-search", e.Intervals = "header-toolbar-intervals", e.ChartStyles = "header-toolbar-chart-styles", e.Compare = "header-toolbar-compare", e.Indicators = "header-toolbar-indicators", e.StudyTemplates = "header-toolbar-study-templates", e.Dropdown = "header-toolbar-dropdown", e.Alerts = "header-toolbar-alerts", e.Layouts = "header-toolbar-layouts", e.SaveLoad = "header-toolbar-save-load", e.UndoRedo = "header-toolbar-undo-redo", e.Properties = "header-toolbar-properties", e.QuickSearch = "header-toolbar-quick-search", e.PublishDesktop = "header-toolbar-publish-desktop", e.PublishMobile = "header-toolbar-publish-mobile", e.Fullscreen = "header-toolbar-fullscreen", e.Screenshot = "header-toolbar-screenshot", e.Replay = "header-toolbar-replay", e.Financials = "header-toolbar-financials";
    }(x || (x = {}));
    var z = s(70412),
        H = s(5962),
        q = s(54079),
        G = s(16838),
        X = s(40620);
    var Y = (0, H.registryContextType)(),
        U = d.enabled("widget");

    var j =
    /*#__PURE__*/
    function (_n$PureComponent2) {
      _inherits(j, _n$PureComponent2);

      function j(e, t) {
        var _this3;

        _classCallCheck(this, j);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(j).call(this, e, t)), _this3._handleMouseOver = function (e) {
          (0, z.hoverMouseEventFilter)(e) && _this3.setState({
            isHovered: !0
          });
        }, _this3._handleMouseOut = function (e) {
          (0, z.hoverMouseEventFilter)(e) && _this3.setState({
            isHovered: !1
          });
        }, _this3._handleInnerResize = function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 1),
              e = _ref11[0];

          var t = e.contentRect.width,
              s = _this3.props.onWidthChange;
          s && s(t);
        }, _this3._handleMeasureAvailableSpace = function (e) {
          var t = _this3.props.onAvailableSpaceChange;
          t && t(e.width);
        }, _this3._processCustoms = function (e) {
          var _this3$props = _this3.props,
              t = _this3$props.isFake,
              s = _this3$props.displayMode,
              r = _this3.context.tools;
          return e.map(function (e) {
            return n.createElement(y, {
              key: e.id
            }, function (e) {
              switch (e.type) {
                case "Button":
                  return n.createElement(r.Custom, _objectSpread({}, e.params, {
                    isFake: t
                  }));

                case "TradingViewStyledButton":
                  return n.createElement(r.CustomTradingViewStyledButton, _objectSpread({}, e.params, {
                    className: X.button,
                    displayMode: s
                  }));

                case "Dropdown":
                  return n.createElement(r.Dropdown, {
                    displayMode: s,
                    params: e.params
                  });

                default:
                  return null;
              }
            }(e));
          });
        }, _this3._fixLastGroup = function (e, t, s) {
          if (t === s.length - 1 && n.isValidElement(e) && e.type === y) {
            var _t5 = void 0 !== _this3.context.tools.Publish && !_this3.props.readOnly;

            return n.cloneElement(e, {
              noRightDecoration: _t5
            });
          }

          return e;
        }, (0, H.validateRegistry)(t, {
          tools: m.any.isRequired
        }), _this3.state = {
          isHovered: !1
        };
        return _this3;
      }

      _createClass(j, [{
        key: "render",
        value: function render() {
          var _this4 = this;

          var e = this.context.tools,
              _this$props3 = this.props,
              t = _this$props3.features,
              s = _this$props3.displayMode,
              r = _this$props3.chartSaver,
              i = _this$props3.studyMarket,
              o = _this$props3.readOnly,
              l = _this$props3.saveLoadSyncEmitter,
              c = _this$props3.leftCustomElements,
              u = _this$props3.rightCustomElements,
              d = _this$props3.showScrollbarWhen,
              _this$props3$isFake = _this$props3.isFake,
              h = _this$props3$isFake === void 0 ? !1 : _this$props3$isFake,
              m = this.state.isHovered,
              f = this._processCustoms(c),
              g = this._processCustoms(u),
              S = d.includes(s);

          return n.createElement(q.Toolbar, {
            className: a(X.inner, _defineProperty({}, X.fake, h)),
            onContextMenu: P.preventDefaultForContextMenu,
            "data-is-fake-main-panel": h,
            "aria-hidden": G.PLATFORM_ACCESSIBILITY_ENABLED ? h : void 0
          }, n.createElement(D, {
            isVisibleFade: v.mobiletouch && S,
            isVisibleButtons: !v.mobiletouch && S && m,
            isVisibleScrollbar: !1,
            shouldMeasure: !h,
            onMouseOver: this._handleMouseOver,
            onMouseOut: this._handleMouseOut,
            onMeasureWrap: this._handleMeasureAvailableSpace
          }, function (c) {
            return n.createElement("div", {
              className: X.content,
              ref: c,
              role: G.PLATFORM_ACCESSIBILITY_ENABLED ? "none" : void 0
            }, n.createElement(_.Measure, {
              onResize: h ? _this4._handleInnerResize : null
            }, function (c) {
              return n.createElement("div", {
                className: X.innerWrap,
                ref: c
              }, n.createElement(p.FragmentMap, {
                map: _this4._fixLastGroup
              }, !o && n.Children.toArray([(e.SymbolSearch || !U && e.Compare) && n.createElement(y, {
                key: "symbol"
              }, e.SymbolSearch && n.createElement(e.SymbolSearch, {
                id: h ? void 0 : x.SymbolSearch,
                isActionsVisible: t.allowSymbolSearchSpread
              }), e.Compare && n.createElement(e.Compare, {
                id: h ? void 0 : x.Compare,
                className: X.button,
                displayMode: s
              })), e.DateRange && n.createElement(y, {
                key: "range"
              }, n.createElement(e.DateRange, null)), e.Intervals && n.createElement(y, {
                key: "intervals"
              }, n.createElement(e.Intervals, {
                id: h ? void 0 : x.Intervals,
                isShownQuicks: t.allowFavoriting,
                isFavoritingAllowed: t.allowFavoriting,
                displayMode: s,
                isFake: h
              })), e.Bars && n.createElement(y, {
                key: "styles"
              }, n.createElement(e.Bars, {
                id: h ? void 0 : x.ChartStyles,
                isShownQuicks: t.allowFavoriting,
                isFavoritingAllowed: t.allowFavoriting,
                displayMode: s,
                isFake: h
              })), U && e.Compare && !e.SymbolSearch && n.createElement(y, {
                key: "compare"
              }, n.createElement(e.Compare, {
                id: h ? void 0 : x.Compare,
                className: X.button,
                displayMode: s
              })), e.Indicators && n.createElement(y, {
                key: "indicators"
              }, n.createElement(e.Indicators, {
                id: h ? void 0 : x.Indicators,
                className: X.button,
                studyMarket: i,
                displayMode: s
              }), e.Templates && n.createElement(e.Templates, {
                id: h ? void 0 : x.StudyTemplates,
                isShownQuicks: t.allowFavoriting,
                isFavoritingAllowed: t.allowFavoriting,
                displayMode: s
              })), e.Alert && n.createElement(y, {
                key: "alert"
              }, n.createElement(e.Alert, {
                id: h ? void 0 : x.Alerts,
                className: X.button,
                displayMode: s
              }), e.Replay && n.createElement(e.Replay, {
                id: h ? void 0 : x.Replay,
                className: X.button,
                displayMode: s
              })), e.AlertReferral && n.createElement(y, {
                key: "alert-referral"
              }, n.createElement(e.AlertReferral, {
                className: X.button,
                displayMode: s
              })), e.ScalePercentage && n.createElement(y, {
                key: "percentage"
              }, n.createElement(e.ScalePercentage, null)), e.ScaleLogarithm && n.createElement(y, {
                key: "logarithm"
              }, n.createElement(e.ScaleLogarithm, null))].concat(_toConsumableArray(f))), function (e) {
                var t = e.findIndex(function (e) {
                  return n.isValidElement(e) && !!e.key && -1 !== e.key.toString().indexOf("view-only-badge");
                });
                return [t].filter(function (e) {
                  return e >= 0;
                }).forEach(function (t) {
                  e = n.Children.map(e, function (e, s) {
                    if (n.isValidElement(e)) {
                      switch ([_t6 - 1, _t6, _t6 + 1].indexOf(_s2)) {
                        case 0:
                          var _t6 = {
                            noRightDecoration: !0
                          };
                          e = n.cloneElement(e, _t6);
                          break;

                        case 1:
                          var _s2 = {
                            noLeftDecoration: !0,
                            noRightDecoration: !0
                          };
                          e = n.cloneElement(e, _s2);
                          break;

                        case 2:
                          var _r = {
                            noLeftDecoration: !0
                          };
                          e = n.cloneElement(e, _r);
                      }
                    }

                    return e;
                  });
                }), e;
              }(n.Children.toArray([o && n.createElement(y, {
                key: "view-only-badge",
                removeSeparator: !0
              }, n.createElement(I, null)), !o && e.UndoRedo && n.createElement(y, {
                key: "undo-redo"
              }, n.createElement(e.UndoRedo, {
                id: h ? void 0 : x.UndoRedo
              })), n.createElement(y, {
                removeSeparator: !0,
                key: "gap-1",
                className: a(X.fill, h && X.collapse)
              }), (e.Layout || e.SaveLoad) && n.createElement(y, {
                key: "layout",
                removeSeparator: !0
              }, !o && e.Layout && n.createElement(e.Layout, {
                id: h ? void 0 : x.Layouts
              }), e.SaveLoad && n.createElement(e.SaveLoad, {
                id: h ? void 0 : x.SaveLoad,
                chartSaver: r,
                isReadOnly: o,
                displayMode: s,
                isFake: h,
                stateSyncEmitter: l
              })), e.SaveLoadReferral && n.createElement(y, {
                key: "save-load-referral"
              }, n.createElement(e.SaveLoadReferral, {
                isReadOnly: o,
                displayMode: s
              })), !1, t.showLaunchInPopupButton && e.OpenPopup && n.createElement(y, {
                key: "popup",
                removeSeparator: !1
              }, n.createElement(e.OpenPopup, null)), !o && (e.Properties || e.Fullscreen || !U && e.Screenshot) && n.createElement(y, {
                key: "properties",
                removeSeparator: !1
              }, !o && e.QuickSearch && n.createElement(e.QuickSearch, {
                id: h ? void 0 : x.QuickSearch,
                className: X.iconButton
              }), !o && e.Properties && n.createElement(e.Properties, {
                id: h ? void 0 : x.Properties,
                className: X.iconButton
              }), n.createElement(n.Fragment, null, !o && e.Fullscreen && n.createElement(y, {
                key: "fullscreen",
                onClick: _this4._trackFullscreenButtonClick,
                removeSeparator: !0
              }, n.createElement(e.Fullscreen, {
                id: h ? void 0 : x.Fullscreen
              })), !U && e.Screenshot && n.createElement(e.Screenshot, {
                id: h ? void 0 : x.Screenshot,
                className: X.iconButton
              }))), U && !o && e.Fullscreen && n.createElement(y, {
                key: "fullscreen",
                onClick: _this4._trackFullscreenButtonClick,
                removeSeparator: !0
              }, n.createElement(e.Fullscreen, {
                id: h ? void 0 : x.Fullscreen
              })), U && e.Screenshot && n.createElement(y, {
                key: "screenshot",
                removeSeparator: !0
              }, n.createElement(e.Screenshot, {
                id: h ? void 0 : x.Screenshot,
                className: X.iconButton
              })), !o && e.Publish && n.createElement(y, {
                key: "publish",
                className: X.mobilePublish,
                removeSeparator: !0
              }, n.createElement(e.Publish, {
                id: h ? void 0 : x.PublishMobile
              }))].concat(_toConsumableArray(g))))));
            }));
          }), e.Publish && !o && !h && n.createElement(e.Publish, {
            id: x.PublishDesktop,
            className: X.desktopPublish
          }));
        }
      }, {
        key: "_trackFullscreenButtonClick",
        value: function _trackFullscreenButtonClick() {
          0;
        }
      }]);

      return j;
    }(n.PureComponent);

    j.contextType = Y;
    var Q = s(97145),
        K = s(68456);

    var J =
    /*#__PURE__*/
    function (_K$CommonJsonStoreSer) {
      _inherits(J, _K$CommonJsonStoreSer);

      function J(e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, J);

        return _possibleConstructorReturn(this, _getPrototypeOf(J).call(this, e, t, "FAVORITE_CHART_STYLES_CHANGED", "StyleWidget.quicks", s));
      }

      return J;
    }(K.CommonJsonStoreService);

    var $ = s(94025),
        Z = s(15051);

    var ee =
    /*#__PURE__*/
    function (_K$AbstractJsonStoreS) {
      _inherits(ee, _K$AbstractJsonStoreS);

      function ee(e, t, s) {
        _classCallCheck(this, ee);

        return _possibleConstructorReturn(this, _getPrototypeOf(ee).call(this, e, t, "FAVORITE_INTERVALS_CHANGED", "IntervalWidget.quicks", s));
      }

      _createClass(ee, [{
        key: "_serialize",
        value: function _serialize(e) {
          return (0, Z.uniq)(e.map($.normalizeIntervalString));
        }
      }, {
        key: "_deserialize",
        value: function _deserialize(e) {
          return (0, Z.uniq)((0, $.convertResolutionsFromSettings)(e).filter($.isResolutionMultiplierValid).map($.normalizeIntervalString));
        }
      }]);

      return ee;
    }(K.AbstractJsonStoreService);

    var te = s(82992),
        se = s(57898),
        ne = s(56840),
        re = s(21097);

    var ie =
    /*#__PURE__*/
    function (_K$AbstractJsonStoreS2) {
      _inherits(ie, _K$AbstractJsonStoreS2);

      function ie(e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, ie);

        return _possibleConstructorReturn(this, _getPrototypeOf(ie).call(this, e, t, "CUSTOM_INTERVALS_CHANGED", "IntervalWidget.intervals", s));
      }

      _createClass(ie, [{
        key: "set",
        value: function set(e, t) {
          e.length, this.get().length, _get(_getPrototypeOf(ie.prototype), "set", this).call(this, e, t);
        }
      }, {
        key: "_serialize",
        value: function _serialize(e) {
          return (0, Z.uniq)(e.map($.normalizeIntervalString));
        }
      }, {
        key: "_deserialize",
        value: function _deserialize(e) {
          return (0, Z.uniq)((0, $.convertResolutionsFromSettings)(e).filter($.isResolutionMultiplierValid).map($.normalizeIntervalString));
        }
      }]);

      return ie;
    }(K.AbstractJsonStoreService);

    var ae = new ie(re.TVXWindowEvents, ne);
    var oe = s(65817);

    var le =
    /*#__PURE__*/
    function () {
      function le(e) {
        var _this5 = this;

        _classCallCheck(this, le);

        this._customIntervalsService = ae, this._supportedIntervalsMayChange = new se.Delegate(), this._fireSupportedIntervalsMayChange = function () {
          _this5._supportedIntervalsMayChange.fire();
        }, this._chartApiInstance = e, te.linking.supportedResolutions.subscribe(this._fireSupportedIntervalsMayChange), te.linking.range.subscribe(this._fireSupportedIntervalsMayChange), te.linking.seconds.subscribe(this._fireSupportedIntervalsMayChange), te.linking.ticks.subscribe(this._fireSupportedIntervalsMayChange), te.linking.intraday.subscribe(this._fireSupportedIntervalsMayChange), te.linking.dataFrequencyResolution.subscribe(this._fireSupportedIntervalsMayChange);
      }

      _createClass(le, [{
        key: "destroy",
        value: function destroy() {
          te.linking.supportedResolutions.unsubscribe(this._fireSupportedIntervalsMayChange), te.linking.range.unsubscribe(this._fireSupportedIntervalsMayChange), te.linking.seconds.unsubscribe(this._fireSupportedIntervalsMayChange), te.linking.ticks.unsubscribe(this._fireSupportedIntervalsMayChange), te.linking.intraday.unsubscribe(this._fireSupportedIntervalsMayChange), te.linking.dataFrequencyResolution.unsubscribe(this._fireSupportedIntervalsMayChange);
        }
      }, {
        key: "getDefaultIntervals",
        value: function getDefaultIntervals() {
          return null === this._chartApiInstance ? [] : this._chartApiInstance.defaultResolutions().map($.normalizeIntervalString);
        }
      }, {
        key: "getCustomIntervals",
        value: function getCustomIntervals() {
          return this._customIntervalsService.get();
        }
      }, {
        key: "add",
        value: function add(e, t, s) {
          if (!this.isValidInterval(e, t)) return null;
          var n = (0, $.normalizeIntervalString)("".concat(e).concat(t)),
              r = this.getCustomIntervals();
          return this._isIntervalDefault(n) || r.includes(n) ? null : (this._customIntervalsService.set((0, $.sortResolutions)([].concat(_toConsumableArray(r), [n]))), n);
        }
      }, {
        key: "remove",
        value: function remove(e) {
          this._customIntervalsService.set(this.getCustomIntervals().filter(function (t) {
            return t !== e;
          }));
        }
      }, {
        key: "isValidInterval",
        value: function isValidInterval(e, t) {
          return (0, $.isResolutionMultiplierValid)("".concat(e).concat(t));
        }
      }, {
        key: "isSupportedInterval",
        value: function isSupportedInterval(e) {
          return (0, $.isAvailable)(e);
        }
      }, {
        key: "supportedIntervalsMayChange",
        value: function supportedIntervalsMayChange() {
          return this._supportedIntervalsMayChange;
        }
      }, {
        key: "getOnChange",
        value: function getOnChange() {
          return this._customIntervalsService.getOnChange();
        }
      }, {
        key: "getPossibleIntervals",
        value: function getPossibleIntervals() {
          return oe.INTERVALS;
        }
      }, {
        key: "getResolutionUtils",
        value: function getResolutionUtils() {
          return {
            getMaxResolutionValue: $.getMaxResolutionValue,
            getTranslatedResolutionModel: $.getTranslatedResolutionModel,
            mergeResolutions: $.mergeResolutions,
            sortResolutions: $.sortResolutions
          };
        }
      }, {
        key: "_isIntervalDefault",
        value: function _isIntervalDefault(e) {
          return this.getDefaultIntervals().includes(e);
        }
      }]);

      return le;
    }();

    var ce = s(69774),
        ue = s(70826),
        de = s(14905);
    var he = {};
    var me = null;

    var ve =
    /*#__PURE__*/
    function () {
      function ve() {
        var _this6 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ne;

        _classCallCheck(this, ve);

        this._favorites = [], this._favoritesChanged = new se.Delegate(), this._settings = e, re.TVXWindowEvents.on("StudyFavoritesChanged", function (e) {
          var t = JSON.parse(e);

          _this6._loadFromState(t.favorites || []);
        }), this._settings.onSync.subscribe(this, this._loadFavs), this._loadFavs();
      }

      _createClass(ve, [{
        key: "isFav",
        value: function isFav(e) {
          var t = this.favId(e);
          return -1 !== this._findFavIndex(t);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite(e) {
          this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e);
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(e) {
          var t = this.favId(e);
          this._favorites.push(fe(t)), this._favoritesChanged.fire(), this._saveFavs();
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(e) {
          var t = this.favId(e),
              s = this._findFavIndex(t);

          -1 !== s && (this._favorites.splice(s, 1), this._favoritesChanged.fire()), this._saveFavs();
        }
      }, {
        key: "favId",
        value: function favId(e) {
          return (0, de.isPineIdString)(e) ? e : (0, de.extractPineId)(e) || (0, ue.extractStudyId)(e);
        }
      }, {
        key: "favorites",
        value: function favorites() {
          return this._favorites;
        }
      }, {
        key: "favoritePineIds",
        value: function favoritePineIds() {
          return this._favorites.filter(function (e) {
            return "pine" === e.type;
          }).map(function (e) {
            return e.pineId;
          });
        }
      }, {
        key: "favoritesChanged",
        value: function favoritesChanged() {
          return this._favoritesChanged;
        }
      }, {
        key: "_loadFavs",
        value: function _loadFavs() {
          var e = this._settings.getJSON("studyMarket.favorites", []);

          this._loadFromState(e);
        }
      }, {
        key: "_saveFavs",
        value: function _saveFavs() {
          var e = this._stateToSave();

          this._settings.setJSON("studyMarket.favorites", e, {
            forceFlush: !0
          }), re.TVXWindowEvents.emit("StudyFavoritesChanged", JSON.stringify({
            favorites: e
          }));
        }
      }, {
        key: "_stateToSave",
        value: function _stateToSave() {
          return this._favorites.map(pe);
        }
      }, {
        key: "_loadFromState",
        value: function _loadFromState(e) {
          this._favorites = e.map(function (e) {
            return fe(function (e) {
              return e in he ? he[e] : e;
            }(e));
          }), this._favoritesChanged.fire();
        }
      }, {
        key: "_findFavIndex",
        value: function _findFavIndex(e) {
          return this._favorites.findIndex(function (t) {
            return e === pe(t);
          });
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return null === me && (me = new ve()), me;
        }
      }, {
        key: "create",
        value: function create(e) {
          return new ve(e);
        }
      }]);

      return ve;
    }();

    function pe(e) {
      return "java" === e.type ? e.studyId : e.pineId;
    }

    function fe(e) {
      return (0, de.isPineIdString)(e) ? {
        type: "pine",
        pineId: e
      } : {
        type: "java",
        studyId: e
      };
    }

    var ge = s(36274);
    var Se = (_Se = {}, _defineProperty(_Se, ge.ResolutionKind.Ticks, !1), _defineProperty(_Se, ge.ResolutionKind.Seconds, !1), _defineProperty(_Se, ge.ResolutionKind.Minutes, !1), _defineProperty(_Se, ge.SpecialResolutionKind.Hours, !1), _defineProperty(_Se, ge.ResolutionKind.Days, !1), _defineProperty(_Se, ge.ResolutionKind.Range, !1), _Se);

    var ye =
    /*#__PURE__*/
    function (_K$CommonJsonStoreSer2) {
      _inherits(ye, _K$CommonJsonStoreSer2);

      function ye(e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Se;

        _classCallCheck(this, ye);

        return _possibleConstructorReturn(this, _getPrototypeOf(ye).call(this, e, t, "INTERVALS_MENU_VIEW_STATE_CHANGED", "IntervalWidget.menu.viewState", s));
      }

      _createClass(ye, [{
        key: "isAllowed",
        value: function isAllowed(e) {
          return Object.keys(Se).includes(e);
        }
      }]);

      return ye;
    }(K.CommonJsonStoreService);

    var _e = s(35423);

    var Ee = {
      Area: 3,
      "HLC area": 16,
      Bars: 0,
      Candles: 1,
      "Heiken Ashi": 8,
      "Hollow Candles": 9,
      Line: 2,
      Renko: 4,
      Kagi: 5,
      "Point & figure": 6,
      "Line Break": 7,
      Baseline: 10,
      LineWithMarkers: 14,
      Stepline: 15,
      Columns: 13,
      "High-low": 12
    },
        be = ["1", "30", "60"];

    function Ce() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var t = e.map(function (e) {
        return Ee[e];
      }) || [1, 4, 5, 6];
      return d.enabled("widget") && (t = [0, 1, 3]), t;
    }

    function we() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return (0, $.mergeResolutions)(e, d.enabled("star_some_intervals_by_default") ? be : []);
    }

    new ee(re.TVXWindowEvents, ne, we()), new J(re.TVXWindowEvents, ne, Ce()), new _e.FavoriteStudyTemplateService(re.TVXWindowEvents, ne);
    var Me = {
      tools: m.any.isRequired,
      isFundamental: m.any,
      chartApiInstance: m.any,
      availableTimeFrames: m.any,
      chartWidgetCollection: m.any,
      windowMessageService: m.any,
      favoriteChartStylesService: m.any,
      favoriteIntervalsService: m.any,
      intervalService: m.any,
      favoriteStudyTemplatesService: m.any,
      studyTemplates: m.any,
      chartChangesWatcher: m.any,
      saveChartService: m.any,
      sharingChartService: m.any,
      loadChartService: m.any,
      chartWidget: m.any,
      favoriteScriptsModel: m.any,
      intervalsMenuViewStateService: m.any,
      templatesMenuViewStateService: m.any,
      openGlobalSearch: m.any,
      snapshotUrl: m.any
    };
    var Ie = s(70027),
        ke = s(20694);
    var Re = [];

    var Ve =
    /*#__PURE__*/
    function (_n$PureComponent3) {
      _inherits(Ve, _n$PureComponent3);

      function Ve(e) {
        var _this7;

        _classCallCheck(this, Ve);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Ve).call(this, e)), _this7._saveLoadSyncEmitter = new (c())(), _this7._handleFullWidthChange = function (e) {
          _this7._fullWidth = e, _this7.setState({
            measureValid: !1
          });
        }, _this7._handleFavoritesWidthChange = function (e) {
          _this7._favoritesWidth = e, _this7.setState({
            measureValid: !1
          });
        }, _this7._handleCollapseWidthChange = function (e) {
          _this7._collapseWidth = e, _this7.setState({
            measureValid: !1
          });
        }, _this7._handleMeasure = function (e) {
          _this7.setState({
            availableWidth: e,
            measureValid: !1
          });
        };
        var t = e.tools,
            s = e.windowMessageService,
            n = e.chartWidgetCollection,
            r = e.chartApiInstance,
            a = e.availableTimeFrames,
            o = e.isFundamental,
            l = e.favoriteIntervalsService,
            h = e.favoriteChartStylesService,
            m = e.favoriteStudyTemplatesService,
            v = e.studyTemplates,
            p = e.saveChartService,
            f = e.sharingChartService,
            g = e.loadChartService,
            S = e.snapshotUrl,
            y = e.openGlobalSearch;
        _this7._showScrollbarWhen = (0, i.ensureDefined)(e.allowedModes).slice(-1), _this7._panelWidthChangeHandlers = {
          full: _this7._handleFullWidthChange,
          medium: _this7._handleFavoritesWidthChange,
          small: _this7._handleCollapseWidthChange
        };
        var _ = e.chartChangesWatcher;
        _this7._chartChangesWatcher = _;
        var E = Ce(_this7.props.defaultFavoriteStyles);
        _this7._favoriteChartStylesService = h || new J(re.TVXWindowEvents, ne, E);
        var b = we(_this7.props.defaultFavoriteIntervals);
        _this7._favoriteIntervalsService = l || new ee(re.TVXWindowEvents, ne, b), _this7._intervalsMenuViewStateService = new ye(re.TVXWindowEvents, ne), _this7._intervalService = new le(r), _this7._registry = {
          tools: t,
          isFundamental: o,
          chartWidgetCollection: n,
          windowMessageService: s,
          chartApiInstance: r,
          availableTimeFrames: a,
          favoriteStudyTemplatesService: m,
          studyTemplates: v,
          saveChartService: p,
          sharingChartService: f,
          loadChartService: g,
          intervalsMenuViewStateService: _this7._intervalsMenuViewStateService,
          favoriteChartStylesService: _this7._favoriteChartStylesService,
          favoriteIntervalsService: _this7._favoriteIntervalsService,
          intervalService: _this7._intervalService,
          chartChangesWatcher: _this7._chartChangesWatcher,
          chartWidget: n.activeChartWidget.value(),
          favoriteScriptsModel: ve.getInstance(),
          templatesMenuViewStateService: _this7._templatesMenuVuewStateService,
          snapshotUrl: S,
          openGlobalSearch: y
        }, _this7.state = {
          isVisible: !0,
          availableWidth: 0,
          displayMode: "full",
          measureValid: !1,
          leftCustomElements: [],
          rightCustomElements: []
        }, _this7._readOnly = n.readOnly(), _this7._features = {
          allowFavoriting: d.enabled("items_favoriting"),
          showIdeasButton: Boolean(_this7.props.ideas),
          showLaunchInPopupButton: Boolean(_this7.props.popupButton),
          allowSymbolSearchSpread: d.enabled("header_symbol_search") && d.enabled("show_spread_operators"),
          allowToolbarHiding: d.enabled("collapsible_header")
        }, _this7._setDisplayMode = (0, u["default"])(_this7._setDisplayMode, 100), _this7._negotiateResizer();
        return _this7;
      }

      _createClass(Ve, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          var _this$state4 = this.state,
              s = _this$state4.isVisible,
              n = _this$state4.measureValid;
          s !== t.isVisible && (h.emit("toggle_header", s), this._negotiateResizer()), n || this._setDisplayMode();
        }
      }, {
        key: "render",
        value: function render() {
          var _this8 = this;

          var _this$props4 = this.props,
              e = _this$props4.resizerBridge,
              t = _this$props4.allowedModes,
              s = _objectWithoutProperties(_this$props4, ["resizerBridge", "allowedModes"]),
              _this$state5 = this.state,
              r = _this$state5.displayMode,
              o = _this$state5.isVisible,
              l = _this$state5.leftCustomElements,
              c = _this$state5.rightCustomElements,
              u = _objectSpread({
            features: this._features,
            readOnly: this._readOnly,
            isFake: !1,
            saveLoadSyncEmitter: this._saveLoadSyncEmitter,
            leftCustomElements: l,
            rightCustomElements: c
          }, s),
              d = _objectSpread({}, u, {
            isFake: !0,
            showScrollbarWhen: Re
          }),
              h = (0, i.ensureDefined)(t),
              m = this.props.tools.PublishButtonManager || n.Fragment;

          return n.createElement(H.RegistryProvider, {
            value: this._registry,
            validation: Me
          }, n.createElement(m, null, n.createElement("div", {
            className: a(ke.toolbar, _defineProperty({}, ke.isHidden, !o)),
            onClick: this.props.onClick
          }, n.createElement("div", {
            className: ke.overflowWrap
          }, h.map(function (e) {
            return n.createElement(j, _objectSpread({
              key: e,
              displayMode: e,
              onWidthChange: _this8._panelWidthChangeHandlers[e]
            }, d));
          }), n.createElement(j, _objectSpread({
            key: "live",
            showScrollbarWhen: this._showScrollbarWhen,
            displayMode: r,
            onAvailableSpaceChange: this._handleMeasure
          }, u))))));
        }
      }, {
        key: "addButton",
        value: function addButton(e, t) {
          if (!t.useTradingViewStyle) return this._addCustomHTMLButton(e, t.align);

          this._addCustomTradingViewStyledButton(e, t);
        }
      }, {
        key: "addDropdown",
        value: function addDropdown(e, t) {
          var _this$state6 = this.state,
              s = _this$state6.leftCustomElements,
              n = _this$state6.rightCustomElements,
              r = {
            type: "Dropdown",
            id: e,
            params: t
          };
          "left" === t.align ? this.setState({
            leftCustomElements: [].concat(_toConsumableArray(s), [r])
          }) : this.setState({
            rightCustomElements: [].concat(_toConsumableArray(n), [r])
          });
        }
      }, {
        key: "updateDropdown",
        value: function updateDropdown(e, t) {
          var s = function s(t) {
            return "Dropdown" === t.type && t.id === e;
          },
              n = this.state.leftCustomElements.find(s) || this.state.rightCustomElements.find(s);

          void 0 !== n && (n.params = _objectSpread({}, n.params, {}, t), this.setState({
            leftCustomElements: this.state.leftCustomElements.slice(),
            rightCustomElements: this.state.rightCustomElements.slice()
          }));
        }
      }, {
        key: "removeDropdown",
        value: function removeDropdown(e) {
          var t = function t(_t7) {
            return "Dropdown" === _t7.type && _t7.id !== e;
          },
              s = this.state.leftCustomElements.filter(t),
              n = this.state.rightCustomElements.filter(t);

          this.setState({
            leftCustomElements: s,
            rightCustomElements: n
          });
        }
      }, {
        key: "_negotiateResizer",
        value: function _negotiateResizer() {
          this.props.resizerBridge.negotiateHeight(this.state.isVisible ? ce.HEADER_TOOLBAR_HEIGHT_EXPANDED : ce.HEADER_TOOLBAR_HEIGHT_COLLAPSED);
        }
      }, {
        key: "_setDisplayMode",
        value: function _setDisplayMode() {
          var e = this.state.availableWidth,
              t = this.props.allowedModes,
              s = {
            full: this._fullWidth,
            medium: this._favoritesWidth,
            small: this._collapseWidth
          },
              n = (0, i.ensureDefined)(t);
          var r = n.map(function (e) {
            return s[e];
          }).findIndex(function (t) {
            return e >= t;
          });
          -1 === r && (r = n.length - 1);
          var a = n[r];
          this.setState({
            measureValid: !0,
            displayMode: a
          });
        }
      }, {
        key: "_addCustomHTMLButton",
        value: function _addCustomHTMLButton(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "left";
          var s = new Q.WatchedValue(0),
              n = (0, Ie.parseHtmlElement)("<div class=\"apply-common-tooltip ".concat(ke.customButton, "\">")),
              r = {
            type: "Button",
            id: e,
            params: {
              key: Number(new Date()),
              element: n,
              width: s
            }
          };
          return this._addCustomElementToState(t, r), n;
        }
      }, {
        key: "_addCustomTradingViewStyledButton",
        value: function _addCustomTradingViewStyledButton(e, t) {
          var s = {
            type: "TradingViewStyledButton",
            id: e,
            params: {
              key: Number(new Date()),
              text: t.text,
              title: t.title,
              onClick: t.onClick
            }
          };

          this._addCustomElementToState(t.align, s);
        }
      }, {
        key: "_addCustomElementToState",
        value: function _addCustomElementToState(e, t) {
          var _this$state7 = this.state,
              s = _this$state7.leftCustomElements,
              n = _this$state7.rightCustomElements;
          "left" === e ? this.setState({
            leftCustomElements: [].concat(_toConsumableArray(s), [t])
          }) : this.setState({
            rightCustomElements: [].concat(_toConsumableArray(n), [t])
          });
        }
      }]);

      return Ve;
    }(n.PureComponent);

    Ve.defaultProps = {
      allowedModes: ["full", "medium"]
    };

    var Le =
    /*#__PURE__*/
    function () {
      function Le(e, t) {
        var _this9 = this;

        _classCallCheck(this, Le);

        this._component = null, this._handleRef = function (e) {
          _this9._component = e;
        }, this._container = e, r.render(n.createElement(Ve, _objectSpread({}, t, {
          ref: this._handleRef
        })), this._container);
      }

      _createClass(Le, [{
        key: "destroy",
        value: function destroy() {
          r.unmountComponentAtNode(this._container);
        }
      }, {
        key: "getComponent",
        value: function getComponent() {
          return (0, i.ensureNotNull)(this._component);
        }
      }]);

      return Le;
    }();
  },
  5962: function _(e, t, s) {
    "use strict";

    s.d(t, {
      RegistryProvider: function RegistryProvider() {
        return l;
      },
      registryContextType: function registryContextType() {
        return c;
      },
      validateRegistry: function validateRegistry() {
        return o;
      }
    });
    var n = s(50959),
        r = s(19036),
        i = s.n(r);
    var a = n.createContext({});

    function o(e, t) {
      i().checkPropTypes(t, e, "context", "RegistryContext");
    }

    function l(e) {
      var t = e.validation,
          s = e.value;
      return o(s, t), n.createElement(a.Provider, {
        value: s
      }, e.children);
    }

    function c() {
      return a;
    }
  },
  61380: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
  },
  45820: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>';
  },
  6174: function _(e) {
    e.exports = {
      ar: ["أيام"],
      ca_ES: ["dies"],
      cs: "days",
      de: ["Tage"],
      el: "days",
      en: "days",
      es: ["días"],
      fa: "days",
      fr: ["jours"],
      he_IL: ["ימים"],
      hu_HU: ["nap"],
      id_ID: ["hari"],
      it: ["giorni"],
      ja: ["日"],
      ko: ["날"],
      ms_MY: ["hari"],
      nl_NL: "days",
      pl: ["dni"],
      pt: ["dias"],
      ro: "days",
      ru: ["дни"],
      sv: ["dagar"],
      th: ["วัน"],
      tr: ["gün"],
      vi: ["ngày"],
      zh: ["日"],
      zh_TW: ["天"]
    };
  },
  5285: function _(e) {
    e.exports = {
      ar: ["ساعات"],
      ca_ES: ["hores"],
      cs: "hours",
      de: ["Stunden"],
      el: "hours",
      en: "hours",
      es: ["horas"],
      fa: "hours",
      fr: ["heures"],
      he_IL: ["שעות"],
      hu_HU: ["óra"],
      id_ID: ["jam"],
      it: ["ore"],
      ja: ["時間"],
      ko: ["시"],
      ms_MY: ["jam"],
      nl_NL: "hours",
      pl: ["godziny"],
      pt: ["horas"],
      ro: "hours",
      ru: ["часы"],
      sv: ["timmar"],
      th: ["ชั่วโมง"],
      tr: ["saat"],
      vi: ["giờ"],
      zh: ["小时"],
      zh_TW: ["小時"]
    };
  },
  79410: function _(e) {
    e.exports = {
      ar: ["شهور"],
      ca_ES: ["mesos"],
      cs: "months",
      de: ["Monate"],
      el: "months",
      en: "months",
      es: ["meses"],
      fa: "months",
      fr: ["mois"],
      he_IL: ["חודשים"],
      hu_HU: ["hónap"],
      id_ID: ["bulan"],
      it: ["mesi"],
      ja: ["月"],
      ko: ["달"],
      ms_MY: ["bulan"],
      nl_NL: "months",
      pl: ["miesiące"],
      pt: ["meses"],
      ro: "months",
      ru: ["месяцы"],
      sv: ["månader"],
      th: ["เดือน"],
      tr: ["ay"],
      vi: ["tháng"],
      zh: ["个月"],
      zh_TW: ["個月"]
    };
  },
  37830: function _(e) {
    e.exports = {
      ar: ["دقائق"],
      ca_ES: ["minuts"],
      cs: "minutes",
      de: ["Minuten"],
      el: "minutes",
      en: "minutes",
      es: ["minutos"],
      fa: "minutes",
      fr: "minutes",
      he_IL: ["דקות"],
      hu_HU: ["perc"],
      id_ID: ["menit"],
      it: ["minuti"],
      ja: ["分"],
      ko: ["분"],
      ms_MY: ["minit"],
      nl_NL: "minutes",
      pl: ["minuty"],
      pt: ["minutos"],
      ro: "minutes",
      ru: ["минуты"],
      sv: ["minuter"],
      th: ["นาที"],
      tr: ["dakika"],
      vi: ["phút"],
      zh: ["分钟"],
      zh_TW: ["分鐘"]
    };
  },
  25042: function _(e) {
    e.exports = {
      ar: ["أسابيع"],
      ca_ES: ["setmanes"],
      cs: "weeks",
      de: ["Wochen"],
      el: "weeks",
      en: "weeks",
      es: ["semanas"],
      fa: "weeks",
      fr: ["semaines"],
      he_IL: ["שבועות"],
      hu_HU: ["hét"],
      id_ID: ["minggu"],
      it: ["settimane"],
      ja: ["週"],
      ko: ["주"],
      ms_MY: ["minggu"],
      nl_NL: "weeks",
      pl: ["tygodnie"],
      pt: ["semanas"],
      ro: "weeks",
      ru: ["недели"],
      sv: ["veckor"],
      th: ["สัปดาห์"],
      tr: ["hafta"],
      vi: ["tuần"],
      zh: ["周"],
      zh_TW: ["周"]
    };
  },
  55646: function _(e) {
    e.exports = {
      ar: ["وضع العرض فقط"],
      ca_ES: ["Mode només lectura"],
      cs: "View Only Mode",
      de: ["Ansichtsmodus"],
      el: "View Only Mode",
      en: "View Only Mode",
      es: ["Modo sólo lectura"],
      fa: "View Only Mode",
      fr: ["Mode Voir uniquement"],
      he_IL: ["מצב תצוגה בלבד"],
      hu_HU: "View Only Mode",
      id_ID: ["Mode Hanya Melihat"],
      it: ["Modalità di sola visualizzazione"],
      ja: ["表示専用モード"],
      ko: ["뷰 온리 모드"],
      ms_MY: ["Mod Lihat Sahaja"],
      nl_NL: "View Only Mode",
      pl: ["Tryb Podglądu"],
      pt: ["Modo de Visualização"],
      ro: "View Only Mode",
      ru: ['Режим "Только просмотр"'],
      sv: ["Endast visningsläge"],
      th: ["โหมดแบบดูอย่างเดียว"],
      tr: ["Sadece Görme Modu"],
      vi: ["Chế độ chỉ xem"],
      zh: ["仅查看模式"],
      zh_TW: ["僅查看模式"]
    };
  }
}]);