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

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[7260], {
  22436: function _(e) {
    e.exports = {
      item: "item-GJX1EXhk",
      interactive: "interactive-GJX1EXhk",
      hovered: "hovered-GJX1EXhk",
      disabled: "disabled-GJX1EXhk",
      active: "active-GJX1EXhk",
      shortcut: "shortcut-GJX1EXhk",
      normal: "normal-GJX1EXhk",
      big: "big-GJX1EXhk",
      iconCell: "iconCell-GJX1EXhk",
      icon: "icon-GJX1EXhk",
      checkmark: "checkmark-GJX1EXhk",
      content: "content-GJX1EXhk",
      label: "label-GJX1EXhk",
      checked: "checked-GJX1EXhk",
      toolbox: "toolbox-GJX1EXhk",
      showToolboxOnHover: "showToolboxOnHover-GJX1EXhk",
      arrowIcon: "arrowIcon-GJX1EXhk",
      subMenu: "subMenu-GJX1EXhk",
      invisibleHotkey: "invisibleHotkey-GJX1EXhk"
    };
  },
  29122: function _(e) {
    e.exports = {
      item: "item-WJDah4zD",
      emptyIcons: "emptyIcons-WJDah4zD",
      loading: "loading-WJDah4zD",
      disabled: "disabled-WJDah4zD",
      interactive: "interactive-WJDah4zD",
      hovered: "hovered-WJDah4zD",
      normal: "normal-WJDah4zD",
      big: "big-WJDah4zD",
      icon: "icon-WJDah4zD",
      label: "label-WJDah4zD",
      title: "title-WJDah4zD",
      nested: "nested-WJDah4zD",
      shortcut: "shortcut-WJDah4zD",
      remove: "remove-WJDah4zD"
    };
  },
  45719: function _(e) {
    e.exports = {
      separator: "separator-Pf4rIzEt"
    };
  },
  4618: function _(e) {
    e.exports = {
      tabs: "tabs-NGf0gcnH",
      tab: "tab-NGf0gcnH",
      noBorder: "noBorder-NGf0gcnH",
      disabled: "disabled-NGf0gcnH",
      active: "active-NGf0gcnH",
      defaultCursor: "defaultCursor-NGf0gcnH",
      slider: "slider-NGf0gcnH",
      content: "content-NGf0gcnH"
    };
  },
  42142: function _(e, t, s) {
    "use strict";

    s.d(t, {
      FragmentMap: function FragmentMap() {
        return a;
      }
    });
    var r = s(50959);

    function a(e) {
      if (e.map) {
        return r.Children.toArray(e.children).map(e.map);
      }

      return e.children;
    }
  },
  99025: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Hint: function Hint() {
        return o;
      }
    });
    var r = s(50959),
        a = s(97754),
        n = s.n(a),
        i = s(22436);

    function o(e) {
      var _e$text = e.text,
          t = _e$text === void 0 ? "" : _e$text,
          s = e.className;
      return r.createElement("span", {
        className: n()(i.shortcut, s)
      }, t);
    }
  },
  23829: function _(e, t, s) {
    "use strict";

    s.d(t, {
      ContextMenuItem: function ContextMenuItem() {
        return p;
      }
    });
    var r = s(50959),
        a = s(97754),
        n = s.n(a),
        i = s(9745),
        o = s(26996),
        l = s(54627),
        c = s(99025),
        d = s(39750),
        h = s(79978),
        u = s(69311),
        m = s(29122);

    function p(e) {
      var t = e.className,
          s = e.isTitle,
          a = e.isLoading,
          p = e.isHovered,
          g = e.active,
          v = e.checkable,
          _ = e.disabled,
          b = e.checked,
          y = e.icon,
          f = e.iconChecked,
          S = e.hint,
          k = e.subItems,
          x = e.label,
          C = e.onClick,
          E = e.children,
          M = e.toolbox,
          T = e.jsxLabel,
          _e$size = e.size,
          z = _e$size === void 0 ? "normal" : _e$size,
          A = (0, r.useContext)(l.EmptyIconsContext),
          w = !!k.length;
      return a ? r.createElement("li", {
        className: n()(t, m.item, m.loading, m[z])
      }, r.createElement(o.Loader, null)) : r.createElement("li", {
        className: n()(t, m.item, m.interactive, s && m.title, _ && m.disabled, p && m.hovered, g && m.active, A && m.emptyIcons, m[z]),
        onClick: C
      }, r.createElement(i.Icon, {
        className: n()(m.icon),
        icon: function () {
          if (v && b) return f || y || d;
          return y;
        }()
      }), r.createElement("span", {
        className: n()(m.label)
      }, null != T ? T : x), !!M && r.createElement(i.Icon, {
        onClick: function onClick() {
          M && M.action();
        },
        className: m.remove,
        icon: u
      }), !w && S && r.createElement(c.Hint, {
        className: m.shortcut,
        text: S
      }), w && r.createElement(i.Icon, {
        className: m.nested,
        icon: h
      }), E);
    }
  },
  54627: function _(e, t, s) {
    "use strict";

    s.d(t, {
      EmptyIconsContext: function EmptyIconsContext() {
        return r;
      }
    });
    var r = s(50959).createContext(!1);
  },
  1109: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Separator: function Separator() {
        return i;
      }
    });
    var r = s(50959),
        a = s(97754),
        n = s(45719);

    function i(e) {
      return r.createElement("div", {
        className: a(n.separator, e.className)
      });
    }
  },
  64264: function _(e) {
    e.exports = {
      toolbar: "toolbar-BXXUwft2",
      dateRangeWrapper: "dateRangeWrapper-BXXUwft2",
      seriesControlWrapper: "seriesControlWrapper-BXXUwft2",
      dateRangeExpanded: "dateRangeExpanded-BXXUwft2",
      dateRangeCollapsed: "dateRangeCollapsed-BXXUwft2",
      item: "item-BXXUwft2",
      last: "last-BXXUwft2",
      inline: "inline-BXXUwft2",
      dateRange: "dateRange-BXXUwft2",
      hidden: "hidden-BXXUwft2",
      collapsed: "collapsed-BXXUwft2"
    };
  },
  7458: function _(e) {
    e.exports = {
      button: "button-Hfju7pW_"
    };
  },
  50242: function _(e) {
    e.exports = {
      button: "button-uToIfRbZ"
    };
  },
  56812: function _(e) {
    e.exports = {
      separator: "separator-yDfG9Ccu"
    };
  },
  97086: function _(e) {
    e.exports = {
      headerMenuText: "headerMenuText-AcJrLng7"
    };
  },
  85616: function _(e) {
    e.exports = {
      button: "button-x1dCOTP3",
      disabled: "disabled-x1dCOTP3",
      hover: "hover-x1dCOTP3",
      accessible: "accessible-x1dCOTP3"
    };
  },
  91348: function _(e) {
    e.exports = {
      item: "item-SqYYy1zF"
    };
  },
  22586: function _(e) {
    e.exports = {
      slider: "slider-3kCW6DWs",
      inner: "inner-3kCW6DWs"
    };
  },
  21648: function _(e) {
    e.exports = {
      sliderRow: "sliderRow-k2h4OAz8"
    };
  },
  54079: function _(e, t, s) {
    "use strict";

    s.d(t, {
      Toolbar: function Toolbar() {
        return h;
      }
    });
    var r = s(50959),
        a = s(50151),
        n = s(47201),
        i = s(3343),
        o = s(16838),
        l = s(71468),
        c = s(39416),
        d = s(36898);
    var h = (0, r.forwardRef)(function (e, t) {
      var s = e.onKeyDown,
          h = e.orientation,
          _e$blurOnEscKeydown = e.blurOnEscKeydown,
          u = _e$blurOnEscKeydown === void 0 ? !0 : _e$blurOnEscKeydown,
          _e$blurOnClick = e.blurOnClick,
          m = _e$blurOnClick === void 0 ? !0 : _e$blurOnClick,
          p = _objectWithoutProperties(e, ["onKeyDown", "orientation", "blurOnEscKeydown", "blurOnClick"]),
          g = o.PLATFORM_ACCESSIBILITY_ENABLED ? {
        role: "toolbar",
        "aria-orientation": h
      } : {},
          v = (0, c.useFunctionalRefObject)(t);

      return (0, r.useLayoutEffect)(function () {
        if (!o.PLATFORM_ACCESSIBILITY_ENABLED) return;

        var e = (0, a.ensureNotNull)(v.current),
            t = function t() {
          var t = (0, o.queryTabbableElements)(e).sort(o.navigationOrderComparator);

          if (0 === t.length) {
            var _sort = (0, o.queryFocusableElements)(e).sort(o.navigationOrderComparator),
                _sort2 = _slicedToArray(_sort, 1),
                _t = _sort2[0];

            if (void 0 === _t) return;
            (0, l.becomeMainElement)(_t);
          }

          if (t.length > 1) {
            var _t2 = _toArray(t),
                _e2 = _t2.slice(1);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _e2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _t3 = _step.value;
                (0, l.becomeSecondaryElement)(_t3);
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
        };

        return window.addEventListener("keyboard-navigation-activation", t), function () {
          return window.removeEventListener("keyboard-navigation-activation", t);
        };
      }, []), (0, d.useMouseClickAutoBlur)(v, m), r.createElement("div", _objectSpread({}, p, {}, g, {
        ref: v,
        onKeyDown: (0, n.createSafeMulticastEventHandler)(function (e) {
          if (!o.PLATFORM_ACCESSIBILITY_ENABLED) return;
          if (e.defaultPrevented) return;
          if (!(document.activeElement instanceof HTMLElement)) return;
          var t = (0, i.hashFromEvent)(e);
          if (27 === t) return e.preventDefault(), void document.activeElement.blur();
          if ("vertical" !== h && 37 !== t && 39 !== t) return;
          if ("vertical" === h && 38 !== t && 40 !== t) return;
          var s = e.currentTarget,
              r = (0, o.queryFocusableElements)(s).sort(o.navigationOrderComparator);
          if (0 === r.length) return;
          var a = r.indexOf(document.activeElement);
          if (-1 === a) return;
          e.preventDefault();

          var n = function n() {
            var e = (a + r.length - 1) % r.length;
            (0, l.becomeSecondaryElement)(r[a]), (0, l.becomeMainElement)(r[e]), r[e].focus();
          },
              c = function c() {
            var e = (a + r.length + 1) % r.length;
            (0, l.becomeSecondaryElement)(r[a]), (0, l.becomeMainElement)(r[e]), r[e].focus();
          };

          switch (t) {
            case 37:
              "vertical" !== h && n();
              break;

            case 39:
              "vertical" !== h && c();
              break;

            case 38:
              "vertical" === h && n();
              break;

            case 40:
              "vertical" === h && c();
          }
        }, s)
      }));
    });
  },
  33279: function _(e, t, s) {
    "use strict";

    s.r(t), s.d(t, {
      BottomToolbarRenderer: function BottomToolbarRenderer() {
        return pt;
      }
    });

    var r = s(50959),
        a = s(962),
        n = s(44352),
        i = s(19036),
        o = s(97754),
        l = s.n(o),
        c = s(14483),
        d = s(50298),
        h = s(12811),
        u = s(59064),
        m = s(90692),
        p = s(16396),
        g = s(51613),
        v = s(50151),
        _ = s(51768),
        b = s(5962),
        y = s(57898),
        f = s(36274);

    var S = function S(e) {
      return n.t(null, {
        plural: "{str} minutes",
        count: e,
        replace: {
          str: "".concat(e)
        }
      }, s(60144));
    },
        k = function k(e) {
      return n.t(null, {
        plural: "{str} hours",
        count: e,
        replace: {
          str: "".concat(e)
        }
      }, s(17174));
    },
        x = function x(e) {
      return n.t(null, {
        plural: "{str} months",
        count: e,
        replace: {
          str: "".concat(e)
        }
      }, s(28039));
    },
        C = {
      1: {
        resolution: "1",
        text: S(1)
      },
      3: {
        resolution: "3",
        text: S(3)
      },
      5: {
        resolution: "5",
        text: S(5)
      },
      15: {
        resolution: "15",
        text: S(15)
      },
      30: {
        resolution: "30",
        text: S(30)
      },
      45: {
        resolution: "45",
        text: S(45)
      },
      60: {
        resolution: "60",
        text: k(1)
      },
      120: {
        resolution: "120",
        text: k(2)
      },
      180: {
        resolution: "180",
        text: k(3)
      },
      240: {
        resolution: "240",
        text: k(4)
      },
      "1D": {
        resolution: "1D",
        text: (T = 1, n.t(null, {
          plural: "{str} days",
          count: T,
          replace: {
            str: "".concat(T)
          }
        }, s(74262)))
      },
      "1W": {
        resolution: "1W",
        text: (M = 1, n.t(null, {
          plural: "{str} weeks",
          count: M,
          replace: {
            str: "".concat(M)
          }
        }, s(14074)))
      },
      "1M": {
        resolution: "1M",
        text: x(1)
      },
      "3M": {
        resolution: "3M",
        text: x(3)
      },
      "6M": {
        resolution: "6M",
        text: x(6)
      },
      "12M": {
        resolution: "12M",
        text: (E = 1, n.t(null, {
          plural: "{str} years",
          count: E,
          replace: {
            str: "".concat(E)
          }
        }, s(8222)))
      }
    };

    var E, M, T;

    function z(e) {
      var t = function (e) {
        var t = e.value.value,
            r = f.Interval.parse(t);

        if (!r.isValid()) {
          if ("YTD" === t) return n.t(null, {
            context: "timeframe_title"
          }, s(87556));
          if ("ALL" === t) return n.t(null, {
            context: "timeframe_title"
          }, s(74944));
          if ("LASTSESSION" === t) return A(1);
        }

        if (r.isMinutes()) {
          var _e3 = r.multiplier();

          return _e3 % 60 != 0 ? (i = _e3, n.t(null, {
            plural: "{str} minutes",
            count: i,
            replace: {
              str: "".concat(i)
            },
            context: "timeframe_title"
          }, s(44795))) : (a = _e3 / 60, n.t(null, {
            plural: "{str} hours",
            count: a,
            replace: {
              str: "".concat(a)
            },
            context: "timeframe_title"
          }, s(89020)));
        }

        var a;
        var i;
        if (r.isDays()) return A(r.multiplier());
        if (r.isWeeks()) return function (e) {
          return n.t(null, {
            plural: "{str} weeks",
            count: e,
            replace: {
              str: "".concat(e)
            },
            context: "timeframe_title"
          }, s(67518));
        }(r.multiplier());

        if (r.isMonths()) {
          var _e4 = r.multiplier();

          return _e4 % 12 != 0 ? (o = _e4, n.t(null, {
            plural: "{str} months",
            count: o,
            replace: {
              str: "".concat(o)
            },
            context: "timeframe_title"
          }, s(3189))) : function (e) {
            return n.t(null, {
              plural: "{str} years",
              count: e,
              replace: {
                str: "".concat(e)
              },
              context: "timeframe_title"
            }, s(6598));
          }(_e4 / 12);
        }

        var o;
        return e.description || e.text;
      }(e),
          r = function (e) {
        var t = e.targetResolution,
            r = f.Interval.parse(t);

        if (r.isMinutes()) {
          var _e5 = r.multiplier();

          return _e5 % 60 != 0 ? (i = _e5, n.t(null, {
            plural: "{str} minutes intervals",
            count: i,
            replace: {
              str: "".concat(i)
            },
            context: "timeframe_title"
          }, s(56347))) : (a = _e5 / 60, n.t(null, {
            plural: "{str} hours intervals",
            count: a,
            replace: {
              str: "".concat(a)
            },
            context: "timeframe_title"
          }, s(54028)));
        }

        var a;
        var i;
        if (r.isDays()) return function (e) {
          return n.t(null, {
            plural: "{str} days intervals",
            count: e,
            replace: {
              str: "".concat(e)
            },
            context: "timeframe_title"
          }, s(81693));
        }(r.multiplier());
        if (r.isWeeks()) return function (e) {
          return n.t(null, {
            plural: "{str} weeks intervals",
            count: e,
            replace: {
              str: "".concat(e)
            },
            context: "timeframe_title"
          }, s(58667));
        }(r.multiplier());

        if (r.isMonths()) {
          var _e6 = r.multiplier();

          return _e6 % 12 != 0 ? (o = _e6, n.t(null, {
            plural: "{str} months intervals",
            count: o,
            replace: {
              str: "".concat(o)
            },
            context: "timeframe_title"
          }, s(99773))) : function (e) {
            return n.t(null, {
              plural: "{str} years intervals",
              count: e,
              replace: {
                str: "".concat(e)
              },
              context: "timeframe_title"
            }, s(57849));
          }(_e6 / 12);
        }

        var o;
        return C[t].text;
      }(e);

      return n.t(null, {
        replace: {
          timePeriod: t,
          timeInterval: r
        },
        context: "timeframe_title"
      }, s(29505));
    }

    var A = function A(e) {
      return n.t(null, {
        plural: "{str} days",
        count: e,
        replace: {
          str: "".concat(e)
        },
        context: "timeframe_title"
      }, s(42908));
    };

    var w =
    /*#__PURE__*/
    function () {
      function w(e) {
        var _this = this;

        _classCallCheck(this, w);

        this._state = {
          ranges: []
        }, this._change = new y.Delegate(), this._rangeChangedListenerBound = this._onRangeChanged.bind(this);

        var _this$_context = this._context = e,
            t = _this$_context.chartWidget;

        t.withModel(null, function () {
          var e = t.model(),
              s = e.mainSeries();
          s.onStatusChanged().subscribe(_this, _this._updateAvailableRanges), c.enabled("update_timeframes_set_on_symbol_resolve") && s.dataEvents().symbolResolved().subscribe(_this, _this._updateAvailableRanges), s.priceScale().properties().childs().lockScale.subscribe(_this, _this._updateAvailableRanges);
          var r = e.model().appliedTimeFrame();
          r.subscribe(_this._rangeChangedListenerBound), _this._rangeChangedListenerBound(r.value()), _this._updateAvailableRanges();
        });
      }

      _createClass(w, [{
        key: "state",
        value: function state() {
          return this._state;
        }
      }, {
        key: "onChange",
        value: function onChange() {
          return this._change;
        }
      }, {
        key: "selectRange",
        value: function selectRange(e) {
          this._setState({
            activeRange: e.value.value
          });

          var t = this._context.chartWidgetCollection,
              s = {
            val: e.value,
            res: e.targetResolution
          };
          t.setTimeFrame(s);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this2 = this;

          var e = this._context.chartWidget;
          e.withModel(null, function () {
            var t = e.model(),
                s = t.mainSeries();
            s.onStatusChanged().unsubscribe(_this2, _this2._updateAvailableRanges), c.enabled("update_timeframes_set_on_symbol_resolve") && s.dataEvents().symbolResolved().unsubscribe(_this2, _this2._updateAvailableRanges), s.priceScale().properties().childs().lockScale.unsubscribe(_this2, _this2._updateAvailableRanges), t.model().appliedTimeFrame().unsubscribe(_this2._rangeChangedListenerBound);
          }), this._change.destroy();
        }
      }, {
        key: "_setState",
        value: function _setState(e) {
          this._state = Object.assign({}, this._state, e), this._change.fire(this._state);
        }
      }, {
        key: "_onRangeChanged",
        value: function _onRangeChanged(e) {
          var t;
          null !== e && "period-back" === e.val.type && (t = e.val.value), this._setState({
            activeRange: t
          });
        }
      }, {
        key: "_updateAvailableRanges",
        value: function _updateAvailableRanges() {
          var _this$_context2 = this._context,
              e = _this$_context2.availableTimeFrames,
              t = _this$_context2.chartWidget;
          if (!t.hasModel()) return;
          var s = t.model().mainSeries(),
              r = s.status();
          if (2 === r || 1 === r) return;
          var a = e(s.symbolInfo(), s.status()).map(function (e) {
            return _objectSpread({}, e, {
              description: z(e)
            });
          });
          0 !== a.length && this._setState({
            ranges: a
          });
        }
      }]);

      return w;
    }();

    var D = (0, b.registryContextType)();

    function I(e) {
      var t;
      return (t =
      /*#__PURE__*/
      function (_r$PureComponent) {
        _inherits(t, _r$PureComponent);

        function t(e, _t4) {
          var _this3;

          _classCallCheck(this, t);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, _t4)), _this3._handleUpdate = function (e) {
            _this3.setState(e);
          }, _this3._handleSelectRange = function (e) {
            var t, s;
            (0, _.trackEvent)("GUI", "Chart Bottom Toolbar", "range ".concat(e.value)), null === (s = (t = _this3.props).onSelectRange) || void 0 === s || s.call(t, e), _this3._binding.selectRange(e);
          }, (0, b.validateRegistry)(_t4, {
            availableTimeFrames: i.any.isRequired,
            chartWidgetCollection: i.any.isRequired,
            chartWidget: i.any.isRequired
          }), W.has(_t4.chartWidget) || W.set(_t4.chartWidget, new w(_t4));
          var s = _this3._binding = (0, v.ensureDefined)(W.get(_t4.chartWidget));
          _this3.state = s.state();
          return _this3;
        }

        _createClass(t, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this._binding.onChange().subscribe(this, this._handleUpdate);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this._binding.onChange().unsubscribe(this, this._handleUpdate);
          }
        }, {
          key: "render",
          value: function render() {
            return r.createElement(e, {
              goToDateButton: this.props.goToDateButton,
              className: this.props.className,
              ranges: this.state.ranges,
              activeRange: this.state.activeRange,
              onSelectRange: this._handleSelectRange
            });
          }
        }]);

        return t;
      }(r.PureComponent)).contextType = D, t;
    }

    var W = new WeakMap();
    var L = s(64358),
        j = s(23829),
        N = s(1109),
        B = s(53180),
        R = s(90752),
        P = s(7458);

    function H(e) {
      var t = e.ranges,
          s = e.activeRange,
          a = e.onSelectRange;
      return r.createElement(r.Fragment, null, t.map(function (e) {
        return r.createElement(j.ContextMenuItem, {
          key: e.value.value,
          label: e.description || e.text,
          active: s === e.value.value,
          checked: s === e.value.value,
          checkable: !0,
          disabled: !1,
          onClick: n.bind(null, e),
          doNotCloseOnClick: !1,
          subItems: []
        });
      }));

      function n(e) {
        e && a && a(e), (0, u.globalCloseMenu)();
      }
    }

    function U(e) {
      var t = e.onGoToDateClick;
      return r.createElement(r.Fragment, null, r.createElement(N.Separator, {
        className: P.separator
      }), r.createElement(j.ContextMenuItem, {
        icon: R,
        label: (0, B.appendEllipsis)(n.t(null, void 0, s(369))),
        onClick: t,
        active: !1,
        checked: !1,
        checkable: !1,
        disabled: !1,
        doNotCloseOnClick: !1,
        subItems: []
      }));
    }

    var F = {
      title: n.t(null, void 0, s(60222)),
      goToDate: (0, B.appendEllipsis)(n.t(null, void 0, s(369)))
    },
        Y = (0, b.registryContextType)();

    var O =
    /*#__PURE__*/
    function (_r$PureComponent2) {
      _inherits(O, _r$PureComponent2);

      function O(e, t) {
        var _this4;

        _classCallCheck(this, O);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(O).call(this, e, t)), _this4._handleGoToDateClick = function () {
          var e = _this4.context.chartWidget;
          (0, L.showGoToDateDialog)(e), (0, u.globalCloseMenu)();
        }, _this4._handleRangeSelect = function (e) {
          e && _this4.props.onSelectRange && _this4.props.onSelectRange(e), (0, u.globalCloseMenu)();
        }, _this4._renderChildren = function (e) {
          var _this4$props = _this4.props,
              t = _this4$props.ranges,
              s = _this4$props.activeRange,
              a = _this4$props.goToDateButton;
          return e ? r.createElement(r.Fragment, null, r.createElement(H, {
            ranges: t,
            activeRange: s,
            onSelectRange: _this4._handleRangeSelect
          }), a && r.createElement(U, {
            onGoToDateClick: _this4._handleGoToDateClick
          })) : r.createElement(r.Fragment, null, t.map(function (e) {
            return r.createElement(p.PopupMenuItem, {
              key: e.value.value,
              label: e.description || e.text,
              isActive: s === e.value.value,
              onClick: _this4._handleRangeSelect,
              onClickArg: e
            });
          }), a && r.createElement(g.PopupMenuSeparator, null), a && r.createElement(p.PopupMenuItem, {
            label: F.goToDate,
            onClick: _this4._handleGoToDateClick
          }));
        }, (0, b.validateRegistry)(t, {
          chartWidget: i.any.isRequired
        });
        return _this4;
      }

      _createClass(O, [{
        key: "render",
        value: function render() {
          var _this5 = this;

          return r.createElement(m.MatchMedia, {
            rule: "screen and (max-width: 430px)"
          }, function (e) {
            return r.createElement(d.ToolbarMenuButton, {
              className: l()(P.button, _this5.props.className),
              content: F.title,
              arrow: !0,
              verticalAttachEdge: h.VerticalAttachEdge.Top,
              verticalDropDirection: h.VerticalDropDirection.FromBottomToTop,
              horizontalMargin: 4,
              "data-name": "date-ranges-menu",
              isDrawer: e,
              onClick: _this5._trackClick
            }, _this5._renderChildren(e));
          });
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }]);

      return O;
    }(r.PureComponent);

    O.contextType = Y;
    var X = I(O);
    var J = s(4618);
    var G = J;

    function V(e) {
      return (
        /*#__PURE__*/
        function (_r$PureComponent3) {
          _inherits(_class, _r$PureComponent3);

          function _class() {
            var _this6;

            _classCallCheck(this, _class);

            _this6 = _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments)), _this6.activeTab = {
              current: null
            };
            return _this6;
          }

          _createClass(_class, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
              (0, v.ensureNotNull)(this._slider).style.transition = "transform 350ms", this._componentDidUpdate();
            }
          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              this._componentDidUpdate();
            }
          }, {
            key: "render",
            value: function render() {
              var _this7 = this;

              var t = this.props.className,
                  s = this._generateTabs();

              return r.createElement("div", {
                className: o(t, J.tabs),
                "data-name": this.props["data-name"]
              }, s, r.createElement(e, {
                reference: function reference(e) {
                  _this7._slider = e;
                }
              }));
            }
          }, {
            key: "_generateTabs",
            value: function _generateTabs() {
              var _this8 = this;

              return this.activeTab.current = null, r.Children.map(this.props.children, function (e) {
                var t = e,
                    s = Boolean(t.props.isActive),
                    a = {
                  reference: function reference(e) {
                    s && (_this8.activeTab.current = e), t.props.reference && t.props.reference(e);
                  }
                };
                return r.cloneElement(t, a);
              });
            }
          }, {
            key: "_componentDidUpdate",
            value: function _componentDidUpdate() {
              var e = (0, v.ensureNotNull)(this._slider).style;

              if (this.activeTab.current) {
                var _t5 = this.activeTab.current.offsetWidth,
                    _s2 = this.activeTab.current.offsetLeft;
                e.transform = "translateX(".concat(_s2, "px)"), e.width = "".concat(_t5, "px"), e.opacity = "1";
              } else e.opacity = "0";
            }
          }]);

          return _class;
        }(r.PureComponent)
      );
    }

    V(function (e) {
      return r.createElement("div", {
        className: J.slider,
        ref: e.reference
      });
    });
    var q = s(40173),
        Z = s(88066),
        $ = s(91348);
    (0, q.mergeThemes)(Z.DEFAULT_TOOLBAR_BUTTON_THEME, $);

    function K(e) {
      var t = e.reference,
          s = e.text,
          a = e.tooltip,
          n = e.isActive,
          i = e.className,
          l = e.onClick,
          _e$theme = e.theme,
          c = _e$theme === void 0 ? $ : _e$theme,
          d = _objectWithoutProperties(e, ["reference", "text", "tooltip", "isActive", "className", "onClick", "theme"]),
          h = o(i, c.item, _defineProperty({}, c.isActive, n));

      return r.createElement(Z.ToolbarButton, _objectSpread({}, d, {
        ref: t,
        text: s,
        isActive: n,
        tooltip: a,
        className: h,
        onClick: l
      }));
    }

    var Q = s(22586);
    var ee = (0, q.mergeThemes)(G, Q);
    var te = s(21648);
    var se = V(function (e) {
      return r.createElement("div", {
        className: o(e.className, ee.slider),
        ref: e.reference
      }, r.createElement("div", {
        className: ee.inner
      }));
    });
    var re = I(function (e) {
      var t = e.className,
          s = e.ranges,
          a = e.activeRange,
          n = e.onSelectRange;
      return r.createElement(se, {
        className: o(te.sliderRow, t),
        "data-name": "date-ranges-tabs"
      }, s.map(function (e) {
        return r.createElement(K, {
          key: e.value.value,
          value: e.value.value,
          "data-name": "date-range-tab-".concat(e.value.value),
          isActive: a === e.value.value,
          onClick: n && n.bind(null, e),
          text: e.text,
          tooltip: e.description || e.text
        });
      }));
    });
    var ae = s(61814),
        ne = s(68335),
        ie = s(48889),
        oe = s(92574),
        le = s(50242);
    var ce = (0, ae.hotKeySerialize)({
      keys: [(0, ne.humanReadableModifiers)(ne.Modifiers.Alt, !1), "G"],
      text: "{0} + {1}"
    }),
        de = (0, b.registryContextType)();

    var he =
    /*#__PURE__*/
    function (_r$PureComponent4) {
      _inherits(he, _r$PureComponent4);

      function he(e, t) {
        var _this9;

        _classCallCheck(this, he);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(he).call(this, e, t)), _this9._handleClick = function () {
          var e = _this9.context.chartWidget;
          (0, _.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"), (0, L.showGoToDateDialog)(e);
        }, (0, b.validateRegistry)(t, {
          chartWidget: i.any.isRequired
        });
        return _this9;
      }

      _createClass(he, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              e = _this$props.className,
              t = _this$props.ranges;
          return t.length > 0 && r.createElement(ie.ToolbarIconButton, {
            icon: oe,
            onClick: this._handleClick,
            "data-tooltip-hotkey": ce,
            tooltip: n.t(null, void 0, s(369)),
            "data-name": "go-to-date",
            className: o(le.button, e)
          });
        }
      }]);

      return he;
    }(r.PureComponent);

    he.contextType = de;
    var ue = I(he);

    var me = s(88270),
        pe = s(79206),
        ge = s(39347),
        ve = s(41249),
        _e = s(92216),
        be = s(16164),
        ye = s(10643),
        fe = s(85616);

    var Se = (0, q.mergeThemes)(Z.DEFAULT_TOOLBAR_BUTTON_THEME, {
      isDisabled: fe.disabled,
      button: fe.button
    });
    var ke = (0, b.registryContextType)();

    var xe =
    /*#__PURE__*/
    function (_r$PureComponent5) {
      _inherits(xe, _r$PureComponent5);

      function xe(e, t) {
        var _this10;

        _classCallCheck(this, xe);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(xe).call(this, e, t)), _this10._timeFormatter = new pe.TimeFormatter((0, _e.getHourMinuteSecondFormat)(be.timeHoursFormatProperty.value())), _this10._tickInterval = void 0, _this10._element = null, _this10._menuShown = !1, _this10._preventShowingMenu = !1, _this10._tickClock = function () {
          var e = _this10.context.chartApiInstance;

          if (void 0 !== _this10._timezone) {
            var _t6 = (0, ve.utc_to_cal)(_this10._timezone, e.serverTime());

            _this10.setState({
              time: _this10._timeFormatter.format(_t6)
            });
          }
        }, _this10._getActions = function () {
          if (!_this10.props.withMenu) return [];
          var e = _this10.context.chartWidget;
          return function (e) {
            e.updateActions();
            var t = e.actions();
            return t && t.applyTimeZone instanceof ge.Action ? t.applyTimeZone.getSubItems() : [];
          }(e);
        }, _this10._handleRef = function (e) {
          _this10._element = e;
        }, _this10._onMouseDown = function () {
          _this10._preventShowingMenu = _this10._menuShown;
        }, _this10._showMenu = function () {
          if (_this10._preventShowingMenu) return void ye.ContextMenuManager.hideAll();

          var e = (0, v.ensureNotNull)(_this10._element),
              t = _this10._getActions();

          if (0 === t.length) return;
          var s = e.getBoundingClientRect();
          ye.ContextMenuManager.showMenu(t, {
            clientX: s.left,
            clientY: s.top,
            attachToYBy: "bottom"
          }, {
            returnFocus: !0,
            takeFocus: !0
          }, {
            menuName: "TimezoneMenuContextMenu"
          }, function () {
            _this10._menuShown = !1;
          }).then(function () {
            _this10._menuShown = !0;
          });
        }, (0, b.validateRegistry)(t, {
          chartWidget: i.any.isRequired,
          chartApiInstance: i.any.isRequired
        }), _this10.state = {
          time: ""
        };
        return _this10;
      }

      _createClass(xe, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this11 = this;

          var e = this.context.chartWidget;
          this._tickInterval = setInterval(this._tickClock, 1e3), e.withModel(null, function () {
            var t = e.model();
            t.model().mainSeries().dataEvents().symbolResolved().subscribe(_this11, _this11.updateTimezonesButton), t.model().properties().childs().timezone.subscribe(_this11, _this11.updateTimezonesButton), be.timeHoursFormatProperty.subscribe(_this11, _this11._timeHoursFormatPropertyChanged);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this12 = this;

          var e = this.context.chartWidget;
          clearInterval(this._tickInterval), e.withModel(null, function () {
            var t = e.model();
            t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(_this12, _this12.updateTimezonesButton), t.model().properties().childs().timezone.unsubscribe(_this12, _this12.updateTimezonesButton), be.timeHoursFormatProperty.unsubscribe(_this12, _this12._timeHoursFormatPropertyChanged);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              e = _this$props2.className,
              t = _this$props2.withMenu,
              a = this.state.time,
              i = void 0 !== this._timezone ? (0, me.parseTzOffset)(this._timezone.name()).string : null;
          return r.createElement(Z.ToolbarButton, {
            onMouseDown: this._onMouseDown,
            ref: this._handleRef,
            onClick: this._showMenu,
            isDisabled: !t,
            theme: Se,
            "data-name": "time-zone-menu",
            tooltip: t ? n.t(null, void 0, s(87492)) : void 0,
            className: e,
            text: a && i && "".concat(a, " (").concat(i, ")")
          });
        }
      }, {
        key: "updateTimezonesButton",
        value: function updateTimezonesButton() {
          var e = this.context.chartWidget;
          if (!e.hasModel()) return;
          if (null === e.model().mainSeries().symbolInfo()) return;
          var t = e.model().model().timezone();

          if ("exchange" === t) {
            var _s3 = (0, v.ensureNotNull)(e.model().mainSeries().symbolInfo()).timezone;
            _s3 && (t = _s3);
          }

          this._timezone = (0, ve.get_timezone)(t), this._tickClock();
        }
      }, {
        key: "_timeHoursFormatPropertyChanged",
        value: function _timeHoursFormatPropertyChanged() {
          this._timeFormatter = new pe.TimeFormatter((0, _e.getHourMinuteSecondFormat)(be.timeHoursFormatProperty.value())), this.updateTimezonesButton();
        }
      }]);

      return xe;
    }(r.PureComponent);

    xe.contextType = ke;
    var Ce = s(56812);

    function Ee(e) {
      return r.createElement("span", {
        className: o(Ce.separator, e.className)
      });
    }

    var Me = s(54079),
        Te = s(36298),
        ze = s(49483);

    var Ae =
    /*#__PURE__*/
    function () {
      function Ae(e, t, s) {
        _classCallCheck(this, Ae);

        this._highlighted = !1, this._chartWidget = e, this._priceScaleGetter = t, this._owner = s, this._setHighlight = this._setHighlight.bind(this), this._removeHighlight = this._removeHighlight.bind(this);
      }

      _createClass(Ae, [{
        key: "destroy",
        value: function destroy() {
          this._highlighted && this._removeHighlight();
        }
      }, {
        key: "handlers",
        value: function handlers() {
          var e = ze.CheckMobile.any();
          return {
            onMouseEnter: e ? void 0 : this._setHighlight,
            onMouseLeave: e ? void 0 : this._removeHighlight
          };
        }
      }, {
        key: "_setHighlight",
        value: function _setHighlight() {
          if (!this._chartWidget.hasModel()) return;

          var e = this._chartWidget.model().model(),
              t = e.paneForSource(e.mainSeries()),
              s = this._priceScaleGetter();

          if (null === t || null === s) return;

          var r = this._chartWidget.paneByState(t);

          if (null !== r) {
            var _t7 = r.rightPriceAxisesContainer().findAxisWidgetForScale(s);

            var _a = null;
            null !== _t7 && (_a = _t7.axisInfo());

            var _n2 = r.leftPriceAxisesContainer().findAxisWidgetForScale(s);

            null !== _n2 && (_a = _n2.axisInfo());

            var _i2 = r.highlightedPriceAxis();

            null !== _a && _i2.value().axis !== _a && (_i2.setValue({
              owner: this._owner,
              axis: _a
            }), e.lightUpdate(), this._highlighted = !0);
          }
        }
      }, {
        key: "_removeHighlight",
        value: function _removeHighlight() {
          if (!this._chartWidget.hasModel()) return;

          var e = this._chartWidget.model().model(),
              t = e.paneForSource(e.mainSeries());

          if (null === t) return;

          var s = this._chartWidget.paneByState(t);

          if (null !== s) {
            var _t8 = s.highlightedPriceAxis(),
                _r = _t8.value();

            null !== _r.axis && _r.owner === this._owner && (_t8.setValue({
              owner: this._owner,
              axis: null
            }), e.lightUpdate(), this._highlighted = !1);
          }
        }
      }]);

      return Ae;
    }();

    var we = (0, b.registryContextType)(),
        De = new Te.TranslatedString("toggle log scale", n.t(null, void 0, s(60166)));
    var Ie = (0, b.registryContextType)(),
        We = new Te.TranslatedString("toggle auto scale", n.t(null, void 0, s(63060)));
    var Le = (0, b.registryContextType)(),
        je = new Te.TranslatedString("toggle percentage scale", n.t(null, void 0, s(68642)));
    var Ne = (0, b.registryContextType)();
    var Be = s(42142),
        Re = s(21861),
        Pe = s(82962),
        He = s(11678),
        Ue = s(97086);
    var Fe = new Te.TranslatedString("change session", n.t(null, void 0, s(65303))),
        Ye = {
      hint: n.t(null, void 0, s(25866)),
      headerMenuText: n.t(null, void 0, s(44794))
    },
        Oe = (0, b.registryContextType)();

    var Xe =
    /*#__PURE__*/
    function (_r$PureComponent6) {
      _inherits(Xe, _r$PureComponent6);

      function Xe(e, t) {
        var _this13;

        _classCallCheck(this, Xe);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Xe).call(this, e, t)), (0, b.validateRegistry)(t, {
          chartWidget: i.any.isRequired,
          chartApiInstance: i.any.isRequired
        }), _this13.state = {
          availableSessions: []
        };
        return _this13;
      }

      _createClass(Xe, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this14 = this;

          var e = this.context.chartWidget;
          e.withModel(null, function () {
            var t = e.model();
            t.model().mainSeries().dataEvents().symbolResolved().subscribe(_this14, _this14.updateSessionButton), t.model().mainSeries().properties().childs().sessionId.subscribe(_this14, _this14.updateSessionButton), _this14.updateSessionButton();
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this15 = this;

          var e = this.context.chartWidget;
          e.withModel(null, function () {
            var t = e.model();
            t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(_this15, _this15.updateSessionButton), t.model().mainSeries().properties().childs().sessionId.unsubscribe(_this15, _this15.updateSessionButton);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              e = _this$props3.className,
              t = _this$props3.withMenu,
              _this$state = this.state,
              s = _this$state.sessionName,
              a = _this$state.sessionDescription;
          return r.createElement(d.ToolbarMenuButton, {
            arrow: !1,
            isDisabled: !t,
            content: s,
            className: e,
            closeOnClickOutside: !0,
            tooltip: t ? a : void 0,
            "data-name": "session-menu",
            verticalDropDirection: h.VerticalDropDirection.FromBottomToTop,
            verticalAttachEdge: h.VerticalAttachEdge.Top,
            onClick: this._trackClick
          }, this._menuItems());
        }
      }, {
        key: "updateSessionButton",
        value: function updateSessionButton() {
          var e, t;
          var s = this.context.chartWidget;
          if (!s.model()) return;
          var r = s.model().mainSeries().symbolInfo();
          if (null === r) return;
          var a = r.subsession_id,
              n = null !== (t = null === (e = r.subsessions) || void 0 === e ? void 0 : e.filter(function (e) {
            return !e["private"];
          })) && void 0 !== t ? t : [],
              i = n.find(function (e) {
            return e.id === a;
          });
          this.setState({
            sessionId: a,
            sessionName: (0, He.translateSessionShortDescription)((null == i ? void 0 : i.description) || ""),
            sessionDescription: (0, He.translateSessionDescription)((null == i ? void 0 : i.description) || ""),
            availableSessions: n
          });
        }
      }, {
        key: "_menuItems",
        value: function _menuItems() {
          var _this16 = this;

          if (!this.props.withMenu) return [];
          var e = this.context.chartWidget,
              t = this.state.availableSessions;
          if (!e.model()) return [];
          var s = e.model().mainSeries(),
              a = [r.createElement(Pe.ToolWidgetMenuSummary, {
            key: "header_menu_text",
            className: Ue.headerMenuText
          }, Ye.headerMenuText.toUpperCase())];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var n = _step2.value;

              var t = {
                category: "SetSession",
                event: n.id
              },
                  i = function i() {
                e.model().setProperty(s.properties().childs().sessionId, n.id, Fe);
              };

              a.push(r.createElement(p.PopupMenuItem, {
                key: n.id,
                label: (0, He.translateSessionDescription)(n.description),
                isActive: _this16.state.sessionId === n.id,
                trackEventObject: t,
                onClick: i
              }));
            };

            for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
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

          return a;
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }]);

      return Xe;
    }(r.PureComponent);

    Xe.contextType = Oe;
    var Je = s(21868),
        Ge = s(72026),
        Ve = s(51267),
        qe = s(64264);
    var Ze = {
      extLabel: n.t(null, void 0, s(8877)),
      extHint: n.t(null, void 0, s(41421)),
      percentageHint: n.t(null, void 0, s(43737)),
      logLabel: n.t(null, {
        context: "scale"
      }, s(885)),
      logHint: n.t(null, void 0, s(21329)),
      autoLabel: n.t(null, {
        context: "scale"
      }, s(99247)),
      autoHint: n.t(null, void 0, s(60879)),
      fullscreenHint: n.t(null, void 0, s(98948)),
      adjLabel: n.t(null, {
        context: "adjustments"
      }, s(25988)),
      adjHint: n.t(null, void 0, s(9994)),
      adjForDividendsOnlyHint: n.t(null, void 0, s(1217)),
      adjForSplitsOnlyHint: n.t(null, void 0, s(27662)),
      backAdjustLabel: n.t(null, {
        context: "adjustments"
      }, s(24717)),
      backAdjustHint: n.t(null, void 0, s(10989)),
      settlementAsCloseLabel: n.t(null, {
        context: "adjustments"
      }, s(11987)),
      settlementAsCloseHint: n.t(null, void 0, s(99983))
    },
        $e = (Ke = function Ke(e) {
      return r.createElement(Z.ToolbarButton, {
        text: Ze.logLabel,
        tooltip: Ze.logHint,
        className: e.className,
        isActive: e.isLogarithm,
        "aria-pressed": e.isLogarithm,
        onClick: lt(e.onClick, "log", e.isLogarithm),
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        "data-name": "logarithm"
      });
    }, (Qe =
    /*#__PURE__*/
    function (_r$PureComponent7) {
      _inherits(Qe, _r$PureComponent7);

      function Qe(e, t) {
        var _this17;

        _classCallCheck(this, Qe);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Qe).call(this, e, t)), _this17._priceScale = null, _this17._handleSelect = function () {
          var e = _this17.context.chartWidget.model(),
              t = (0, v.ensureNotNull)(_this17.state.series),
              s = t.priceScale(),
              r = s.mode();

          t.priceScale().isLockScale() || e.setPriceScaleMode({
            log: !r.log
          }, s, De);
        }, (0, b.validateRegistry)(t, {
          chartWidget: i.any.isRequired
        }), _this17.state = {
          isActive: !1,
          series: null
        }, _this17._priceAxisHighlighter = new Ae(_this17.context.chartWidget, function () {
          return _this17._priceScale;
        }, "logarithm");
        return _this17;
      }

      _createClass(Qe, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this18 = this;

          var e = this.context.chartWidget;
          e.withModel(null, function () {
            var t = e.model().mainSeries(),
                s = t.priceScale();
            _this18._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(_this18, _this18._handleMainSeriesPriceScaleChanged), _this18._handleModeChanged({}, s.mode()), _this18.setState({
              isActive: t.priceScale().isLog(),
              series: t
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this19 = this;

          var e = this.context.chartWidget;
          e.withModel(null, function () {
            e.model().mainSeries().priceScaleChanged().unsubscribe(_this19, _this19._handleMainSeriesPriceScaleChanged);
          }), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy();
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.props.className,
              _this$state2 = this.state,
              t = _this$state2.isActive,
              s = _this$state2.series;
          return r.createElement(Ke, _objectSpread({}, this._priceAxisHighlighter.handlers(), {
            className: e,
            isLogarithm: t,
            isDisabled: null === s,
            onClick: this._handleSelect
          }));
        }
      }, {
        key: "_handleMainSeriesPriceScaleChanged",
        value: function _handleMainSeriesPriceScaleChanged(e) {
          null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged), this._priceScale = e, this._priceScale.modeChanged().subscribe(this, this._handleModeChanged), this._handleModeChanged({}, e.mode());
        }
      }, {
        key: "_handleModeChanged",
        value: function _handleModeChanged(e, t) {
          Boolean(t.log) !== this.state.isActive && this.setState({
            isActive: Boolean(t.log)
          });
        }
      }]);

      return Qe;
    }(r.PureComponent)).contextType = we, Qe);
    var Ke, Qe;

    var et = function (e) {
      var t;
      return (t =
      /*#__PURE__*/
      function (_r$PureComponent8) {
        _inherits(t, _r$PureComponent8);

        function t(e, _t9) {
          var _this20;

          _classCallCheck(this, t);

          _this20 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, _t9)), _this20._priceScale = null, _this20._handleSelect = function () {
            var e = _this20.context.chartWidget.model(),
                t = (0, v.ensureNotNull)(_this20.state.series).priceScale(),
                s = t.mode();

            e.setPriceScaleMode({
              autoScale: !s.autoScale
            }, t, We);
          }, (0, b.validateRegistry)(_t9, {
            chartWidget: i.any.isRequired
          }), _this20.state = {
            isActive: !1,
            series: null
          }, _this20._priceAxisHighlighter = new Ae(_this20.context.chartWidget, function () {
            return _this20._priceScale;
          }, "auto");
          return _this20;
        }

        _createClass(t, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this21 = this;

            var e = this.context.chartWidget;
            e.withModel(null, function () {
              var t = e.model().mainSeries(),
                  s = t.priceScale();
              _this21._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(_this21, _this21._handleMainSeriesPriceScaleChanged), _this21._handleModeChanged({}, s.mode()), _this21.setState({
                isActive: t.priceScale().isAutoScale(),
                series: t
              });
            });
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var _this22 = this;

            var e = this.context.chartWidget;
            e.withModel(null, function () {
              e.model().mainSeries().priceScaleChanged().unsubscribe(_this22, _this22._handleMainSeriesPriceScaleChanged);
            }), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy();
          }
        }, {
          key: "render",
          value: function render() {
            var t = this.props.className,
                _this$state3 = this.state,
                s = _this$state3.isActive,
                a = _this$state3.series;
            return r.createElement(e, _objectSpread({}, this._priceAxisHighlighter.handlers(), {
              className: t,
              isAuto: s,
              isDisabled: null === a,
              onClick: this._handleSelect
            }));
          }
        }, {
          key: "_handleMainSeriesPriceScaleChanged",
          value: function _handleMainSeriesPriceScaleChanged(e) {
            null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged), this._priceScale = e, this._priceScale.modeChanged().subscribe(this, this._handleModeChanged), this._handleModeChanged({}, e.mode());
          }
        }, {
          key: "_handleModeChanged",
          value: function _handleModeChanged(e, t) {
            Boolean(t.autoScale) !== this.state.isActive && this.setState({
              isActive: Boolean(t.autoScale)
            });
          }
        }]);

        return t;
      }(r.PureComponent)).contextType = Ie, t;
    }(function (e) {
      return r.createElement(Z.ToolbarButton, {
        text: Ze.autoLabel,
        tooltip: Ze.autoHint,
        className: e.className,
        isActive: e.isAuto,
        "aria-pressed": e.isAuto,
        onClick: lt(e.onClick, "auto", e.isAuto),
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        "data-name": "auto"
      });
    }),
        tt = function (e) {
      var t;
      return (t =
      /*#__PURE__*/
      function (_r$PureComponent9) {
        _inherits(t, _r$PureComponent9);

        function t(e, _t10) {
          var _this23;

          _classCallCheck(this, t);

          _this23 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, _t10)), _this23._priceScale = null, _this23._handleSelect = function () {
            var e = _this23.context.chartWidget.model(),
                t = (0, v.ensureNotNull)(_this23.state.series),
                s = t.priceScale(),
                r = s.mode();

            t.priceScale().isLockScale() || e.setPriceScaleMode({
              percentage: !r.percentage
            }, s, je);
          }, (0, b.validateRegistry)(_t10, {
            chartWidget: i.any.isRequired
          }), _this23.state = {
            isActive: !1,
            series: null
          }, _this23._priceAxisHighlighter = new Ae(_this23.context.chartWidget, function () {
            return _this23._priceScale;
          }, "percentage");
          return _this23;
        }

        _createClass(t, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this24 = this;

            var e = this.context.chartWidget;
            e.withModel(null, function () {
              var t = e.model().mainSeries(),
                  s = t.priceScale();
              _this24._handleMainSeriesPriceScaleChanged(s), t.priceScaleChanged().subscribe(_this24, _this24._handleMainSeriesPriceScaleChanged), _this24._handleScaleChange({}, s.mode()), _this24.setState({
                isActive: t.priceScale().isPercentage(),
                series: t
              });
            });
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var _this25 = this;

            var e = this.context.chartWidget;
            e.withModel(null, function () {
              e.model().mainSeries().priceScaleChanged().unsubscribe(_this25, _this25._handleMainSeriesPriceScaleChanged);
            }), null !== this._priceScale && (this._priceScale.modeChanged().unsubscribeAll(this), this._priceScale = null), this._priceAxisHighlighter.destroy();
          }
        }, {
          key: "render",
          value: function render() {
            var t = this.props.className,
                _this$state4 = this.state,
                s = _this$state4.isActive,
                a = _this$state4.series;
            return r.createElement(e, _objectSpread({}, this._priceAxisHighlighter.handlers(), {
              className: t,
              isPercentage: s,
              isDisabled: null === a,
              onClick: this._handleSelect
            }));
          }
        }, {
          key: "_handleMainSeriesPriceScaleChanged",
          value: function _handleMainSeriesPriceScaleChanged(e) {
            null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleScaleChange), this._priceScale = e, this._priceScale.modeChanged().subscribe(this, this._handleScaleChange), this._handleScaleChange({}, e.mode());
          }
        }, {
          key: "_handleScaleChange",
          value: function _handleScaleChange(e, t) {
            Boolean(t.percentage) !== this.state.isActive && this.setState({
              isActive: Boolean(t.percentage)
            });
          }
        }]);

        return t;
      }(r.PureComponent)).contextType = Le, t;
    }(function (e) {
      return r.createElement(Z.ToolbarButton, {
        icon: Je,
        tooltip: Ze.percentageHint,
        className: e.className,
        isActive: e.isPercentage,
        "aria-pressed": e.isPercentage,
        isDisabled: e.isDisabled,
        onClick: lt(e.onClick, "percent", e.isPercentage),
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        "data-name": "percentage"
      });
    });

    var st = (0, ae.hotKeySerialize)({
      keys: [(0, ne.humanReadableModifiers)(ne.Modifiers.Alt, !1), "Enter"],
      text: "{0} + {1}"
    }),
        rt = function (e) {
      var t;
      return (t =
      /*#__PURE__*/
      function (_r$PureComponent10) {
        _inherits(t, _r$PureComponent10);

        function t(e, _t11) {
          var _this26;

          _classCallCheck(this, t);

          _this26 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e, _t11)), _this26._handleClick = function (e) {
            var _this26$context = _this26.context,
                t = _this26$context.resizerDetacher,
                s = _this26$context.chartWidgetCollection;
            e.shiftKey && t.detachable.value() ? t.detach() : _this26.state.isFullscreen ? t.exitFullscreen() : t.requestFullscreen();
          }, _this26._handleLayoutChange = function (e) {
            _this26.setState({
              isFullscreen: e
            });
          }, _this26._handlePhoneSize = function () {
            0;
          }, (0, b.validateRegistry)(_t11, {
            chartWidgetCollection: i.any.isRequired,
            resizerDetacher: i.any.isRequired
          });
          var s = _t11.resizerDetacher;
          _this26.state = {
            isFullscreen: s.fullscreen.value(),
            isChangeLayoutButton: _this26._isChangeLayoutButton()
          };
          return _this26;
        }

        _createClass(t, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this$context = this.context,
                e = _this$context.resizerDetacher,
                t = _this$context.chartWidgetCollection,
                s = this.props.mobileChangeLayoutEnabled;
            e.fullscreen.subscribe(this._handleLayoutChange);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            var _this$context2 = this.context,
                e = _this$context2.resizerDetacher,
                t = _this$context2.chartWidgetCollection,
                s = this.props.mobileChangeLayoutEnabled;
            e.fullscreen.unsubscribe(this._handleLayoutChange);
          }
        }, {
          key: "render",
          value: function render() {
            var t = this.props.className,
                _this$state5 = this.state,
                s = _this$state5.isFullscreen,
                a = _this$state5.isChangeLayoutButton;
            return r.createElement(e, {
              className: t,
              isFullscreen: s,
              onClick: this._handleClick
            });
          }
        }, {
          key: "_isChangeLayoutButton",
          value: function _isChangeLayoutButton() {
            return !1;
          }
        }]);

        return t;
      }(r.PureComponent)).contextType = Ne, t;
    }(function (e) {
      return r.createElement(Z.ToolbarButton, {
        icon: e.isFullscreen ? Ve : Ge,
        tooltip: Ze.fullscreenHint,
        className: e.className,
        isActive: e.isFullscreen,
        onClick: lt(e.onClick, "maximize chart", e.isFullscreen),
        "data-tooltip-hotkey": st,
        "data-name": "fullscreen"
      });
    }),
        at = {
      fullscreen: !0,
      preventPhoneLayout: !0
    },
        nt = {
      fullscreen: Number.MIN_SAFE_INTEGER,
      preventPhoneLayout: Number.MIN_SAFE_INTEGER,
      separator: -2,
      timeZones: -1,
      auto: 0,
      logarithm: 1,
      percentage: 2,
      session: 3,
      adj: 4,
      backAdj: 5,
      settlementAsClose: 6
    },
        it = function () {
      var e = new Map();
      return e.set($e, "logarithm"), e.set(tt, "percentage"), e.set(et, "auto"), e.set(Xe, "session"), e.set(rt, "fullscreen"), e;
    }();

    function ot(e) {
      0;
    }

    function lt(e, t, s) {
      return function (t) {
        e(t);
      };
    }

    var ct = {
      dateRangeMode: "hidden",
      separator: !0,
      timeZones: !0,
      fullscreen: !0,
      preventPhoneLayout: !0,
      auto: !0,
      logarithm: !0,
      percentage: !0,
      session: !0,
      adj: !0,
      backAdj: !0,
      settlementAsClose: !0
    },
        dt = (0, b.registryContextType)();

    var ht =
    /*#__PURE__*/
    function (_r$PureComponent11) {
      _inherits(ht, _r$PureComponent11);

      function ht(e, t) {
        var _this27;

        _classCallCheck(this, ht);

        var s, n;
        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(ht).call(this, e, t)), _this27._timezoneButtonRef = null, _this27._layout = Object.assign({}, ct), _this27._raf = null, _this27._toolbar = null, _this27._rangeExpanded = null, _this27._rangeCollapsed = null, _this27._seriesComponents = {}, _this27._resizeObserver = null, _this27._injector = (s = function s() {
          return _this27._layout;
        }, n = function n(e, t) {
          return _this27._seriesComponents[t] = e;
        }, function (e, t, a) {
          if (r.isValidElement(e) && "string" != typeof e.type) {
            var _i3 = e.props;

            if ("string" == typeof _i3.className) {
              var _l = {
                className: o(_i3.className, t === a.length - 1 && qe.last)
              },
                  _c = s(),
                  _d2 = (0, v.ensureDefined)(it.get(e.type));

              return r.createElement("div", {
                key: null === e.key ? void 0 : e.key,
                className: o(qe.inline, _c[_d2] && qe.collapsed),
                ref: function ref(e) {
                  return n(e, _d2);
                },
                onClick: function onClick() {
                  return ot();
                }
              }, r.cloneElement(e, _l));
            }
          }

          return e;
        }), _this27._updateButtonsVisibility = function () {
          var e = _this27.context.chartWidget,
              t = e.model().model(),
              s = t.mainSeries(),
              r = s.symbolInfo(),
              a = !s.isDWMProperty().value();
          if (s.symbolResolvingActive().value()) return void _this27._setStateWithResize({
            intervalAllowsSessionButton: a
          });
          var n = ((null == r ? void 0 : r.subsessions) || []).filter(function (e) {
            return !e["private"];
          }).length > 1;

          _this27._setStateWithResize({
            intervalAllowsSessionButton: a,
            symbolAllowsSessionButton: n
          });
        }, _this27._handleResize = function () {
          null === _this27._raf && (_this27._raf = requestAnimationFrame(function () {
            var e = _this27._layout,
                t = (0, v.ensureNotNull)(_this27._toolbar),
                s = (0, v.ensureNotNull)(_this27._rangeExpanded),
                r = (n = function (e) {
              var t = {};
              return Object.keys(e).forEach(function (s) {
                var r = e[s];

                if (null !== r) {
                  var _e7 = a.findDOMNode(r);

                  null !== _e7 && (t[s] = _e7);
                }
              }), t;
            }(_this27._seriesComponents), Object.keys(n).map(function (e) {
              return {
                name: e,
                width: n[e].offsetWidth
              };
            }).sort(function (e, t) {
              return nt[e.name] - nt[t.name];
            }));
            var n;
            var i = t.offsetWidth,
                o = r.reduce(function (e, t) {
              return e + t.width;
            }, 0),
                l = s.offsetWidth,
                c = !Boolean(s.textContent) || i - o - l <= 0 ? "collapsed" : "expanded";

            if (Object.assign(e, {
              dateRangeMode: c
            }), "expanded" !== c) {
              var _t12 = i - (0, v.ensureNotNull)(_this27._rangeCollapsed).offsetWidth - 0;

              var _s4 = 0,
                  _a2 = 0;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = r[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _n3 = _step3.value;
                  _s4 += _n3.width, _n3.name in at ? (_a2 += _n3.width, Object.assign(e, _defineProperty({}, _n3.name, !1))) : Object.assign(e, _defineProperty({}, _n3.name, _t12 <= _s4));
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

              _t12 <= _a2 && Object.assign(e, {
                dateRangeMode: "hidden"
              });
            } else Object.assign(e, {
              separator: !1,
              timeZones: !1,
              fullscreen: !1,
              preventPhoneLayout: !1,
              auto: !1,
              logarithm: !1,
              percentage: !1,
              session: !1,
              adj: !1,
              settlementAsClose: !1,
              backAdj: !1
            });

            _this27._applyResizing(), _this27._raf = null;
          }));
        }, _this27._handleTimezoneButtonRef = function (e) {
          _this27._timezoneButtonRef = e;
        }, _this27._handleMeasure = function () {
          null !== _this27._toolbar && _this27.resizeUI();
        }, _this27._handleFullscreenableChange = function (e) {
          _this27._setStateWithResize({
            isFullscreenable: e
          });
        }, _this27._handlePreventPhoneLayoutButtonVisibility = function () {
          0;
        }, _this27._handleToolbarRef = function (e) {
          return _this27._toolbar = e;
        }, _this27._handleRangeCollapsedRef = function (e) {
          return _this27._rangeCollapsed = e;
        }, _this27._handleRangeExpandedRef = function (e) {
          _this27._updateResizeObserver(_this27._rangeExpanded, e), _this27._rangeExpanded = e;
        }, _this27._handleTimeZonesRef = function (e) {
          _this27._updateResizeObserver(_this27._seriesComponents.timeZones, e), _this27._seriesComponents.timeZones = e;
        }, _this27._handleSessionsRef = function (e) {
          _this27._updateResizeObserver(_this27._seriesComponents.session, e), _this27._seriesComponents.session = e;
        }, _this27._handleSeparatorRef = function (e) {
          _this27._seriesComponents.separator = e;
        }, _this27._updateResizeObserver = function (e, t) {
          _this27._resizeObserver && e !== t && (e && _this27._resizeObserver.unobserve(e), t && _this27._resizeObserver.observe(t));
        }, (0, b.validateRegistry)(t, {
          onContentBoxChanged: i.any.isRequired,
          chartApiInstance: i.any.isRequired,
          chartWidget: i.any.isRequired,
          chartWidgetCollection: i.any.isRequired,
          resizerDetacher: i.any.isRequired
        });
        var l = _this27.context.resizerDetacher;
        _this27.state = {
          isFullscreenable: l.fullscreenable.value(),
          isPreventPhoneLayoutButton: _this27._isPreventPhoneLayoutButton()
        }, _this27._resizeObserver = new ResizeObserver(_this27._handleMeasure);
        return _this27;
      }

      _createClass(ht, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this28 = this;

          var _this$context3 = this.context,
              e = _this$context3.onContentBoxChanged,
              t = _this$context3.resizerDetacher,
              s = _this$context3.chartWidgetCollection,
              r = _this$context3.chartWidget;
          e.subscribe(this, this._handleResize), t.fullscreenable.subscribe(this._handleFullscreenableChange), r.withModel(null, function () {
            var e = r.model(),
                t = e.model();
            e.mainSeries().isDWMProperty().subscribe(_this28, _this28._updateButtonsVisibility), t.symbolSourceResolvingActive().subscribe(_this28._updateButtonsVisibility), t.symbolSourceCollectionChanged().subscribe(_this28, _this28._updateButtonsVisibility), _this28._updateButtonsVisibility();
          }), this.updateTimezonesButton(), this.resizeUI();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this29 = this;

          var e;
          var _this$context4 = this.context,
              t = _this$context4.onContentBoxChanged,
              s = _this$context4.resizerDetacher,
              r = _this$context4.chartWidgetCollection,
              a = _this$context4.chartWidget;
          t.unsubscribe(this, this._handleResize), s.fullscreenable.unsubscribe(this._handleFullscreenableChange), null === (e = this._resizeObserver) || void 0 === e || e.disconnect(), a.withModel(null, function () {
            var e = a.model(),
                t = e.model();
            e.mainSeries().isDWMProperty().unsubscribe(_this29, _this29._updateButtonsVisibility), e.mainSeries().isBackAdjustmentForbiddenProperty().unsubscribe(_this29, _this29._updateButtonsVisibility), e.mainSeries().isSettlementAsCloseForbiddenProperty().unsubscribe(_this29, _this29._updateButtonsVisibility), t.symbolSourceCollectionChanged().unsubscribe(_this29, _this29._updateButtonsVisibility), t.symbolSourceResolvingActive().unsubscribe(_this29._updateButtonsVisibility);
          }), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this._layout,
              _this$props4 = this.props,
              t = _this$props4.timeFramesWidgetEnabled,
              s = _this$props4.timeWidgetEnabled,
              a = _this$props4.percentageScaleButtonEnabled,
              n = _this$props4.logScaleButtonEnabled,
              i = _this$props4.autoScaleButtonEnabled,
              l = _this$props4.fullscreenButtonEnabled;
          return r.createElement(Me.Toolbar, {
            className: qe.toolbar,
            onContextMenu: Re.preventDefault,
            ref: this._handleToolbarRef
          }, t && r.createElement(Be.FragmentMap, null, r.createElement("div", {
            className: o(qe.dateRangeWrapper, "collapsed" !== e.dateRangeMode && qe.collapsed),
            ref: this._handleRangeCollapsedRef
          }, r.createElement("div", {
            className: o(qe.dateRangeCollapsed)
          }, r.createElement(X, {
            goToDateButton: this.props.goToDateEnabled,
            className: qe.dateRange
          }))), r.createElement("div", {
            className: o(qe.dateRangeWrapper, "expanded" !== e.dateRangeMode && qe.collapsed),
            ref: this._handleRangeExpandedRef
          }, r.createElement("div", {
            className: o(qe.dateRangeExpanded)
          }, r.createElement(re, {
            onSelectRange: this._trackRangeButtonClick,
            className: qe.dateRange
          }), this.props.goToDateEnabled && r.createElement(Ee, null), this.props.goToDateEnabled && r.createElement(ue, null)))), r.createElement("div", {
            className: qe.seriesControlWrapper
          }, s && r.createElement("div", {
            className: o(qe.inline, e.timeZones && qe.collapsed),
            ref: this._handleTimeZonesRef
          }, r.createElement("div", {
            className: qe.inline,
            onClick: this._trackTimezonesButtonClick
          }, r.createElement(xe, {
            className: qe.item,
            withMenu: this.props.timezoneMenuEnabled,
            ref: this._handleTimezoneButtonRef
          }))), this.props.sessionIdButtonEnabled && this.state.symbolAllowsSessionButton && this.state.intervalAllowsSessionButton && r.createElement("div", {
            className: o(qe.inline, e.session && qe.collapsed),
            ref: this._handleSessionsRef
          }, r.createElement("div", {
            className: qe.inline
          }, r.createElement(Xe, {
            className: qe.item,
            withMenu: this.props.sessionIdButtonEnabled
          }))), r.createElement("div", {
            ref: this._handleSeparatorRef,
            className: o(qe.inline, e.separator && qe.collapsed)
          }, r.createElement(Ee, null)), r.createElement(Be.FragmentMap, {
            map: this._injector
          }, !1, !1, !1, a && !c.enabled("fundamental_widget") && r.createElement(tt, {
            className: qe.item
          }), n && r.createElement($e, {
            className: qe.item
          }), i && r.createElement(et, {
            className: qe.item
          }), l && this.state.isFullscreenable && r.createElement(rt, {
            className: qe.item,
            mobileChangeLayoutEnabled: this.props.mobileChangeLayoutEnabled
          }), !1)));
        }
      }, {
        key: "updateTimezonesButton",
        value: function updateTimezonesButton() {
          null !== this._timezoneButtonRef && this._timezoneButtonRef.updateTimezonesButton();
        }
      }, {
        key: "resizeUI",
        value: function resizeUI() {
          this._handleResize();
        }
      }, {
        key: "_trackRangeButtonClick",
        value: function _trackRangeButtonClick(e) {
          0;
        }
      }, {
        key: "_trackTimezonesButtonClick",
        value: function _trackTimezonesButtonClick() {
          ot();
        }
      }, {
        key: "_setStateWithResize",
        value: function _setStateWithResize(e) {
          var _this30 = this;

          Object.assign(this._layout, ct), this._applyResizing(), this.setState(e, function () {
            return _this30._handleResize();
          });
        }
      }, {
        key: "_applyResizing",
        value: function _applyResizing() {
          var _this31 = this;

          var _this$_layout = this._layout,
              e = _this$_layout.dateRangeMode,
              t = _objectWithoutProperties(_this$_layout, ["dateRangeMode"]);

          this._rangeExpanded && this._rangeExpanded.classList.toggle(qe.collapsed, "expanded" !== e), this._rangeCollapsed && this._rangeCollapsed.classList.toggle(qe.collapsed, "collapsed" !== e);
          var s = !1,
              r = !1;
          Object.keys(t).forEach(function (e) {
            var a = e;

            if ("separator" !== a) {
              var _e8 = _this31._seriesComponents[a],
                  _n4 = !0 === t[a];

              _e8 && ("timeZones" === a || "session" === a ? s = s || !_n4 : r = r || !_n4, _e8.classList.toggle(qe.collapsed, _n4));
            }
          });
          var a = this._seriesComponents.separator;

          if (a) {
            var _e9 = !s || !r || !0 === t.separator;

            a.classList.toggle(qe.collapsed, _e9);
          }
        }
      }, {
        key: "_isPreventPhoneLayoutButton",
        value: function _isPreventPhoneLayoutButton() {
          return !1;
        }
      }]);

      return ht;
    }(r.PureComponent);

    ht.contextType = dt;
    var ut = {
      onContentBoxChanged: i.any,
      computeContentBox: i.any,
      chartWidget: i.any,
      chartApiInstance: i.any,
      chartWidgetCollection: i.any,
      resizerDetacher: i.any,
      availableTimeFrames: i.any
    };

    var mt =
    /*#__PURE__*/
    function (_r$PureComponent12) {
      _inherits(mt, _r$PureComponent12);

      function mt(e) {
        var _this32;

        _classCallCheck(this, mt);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(mt).call(this, e)), _this32._setActiveChart = function (e) {
          _this32._defineRegistry(e), _this32.setState({
            chartWidget: e
          });
        };

        var t = _this32.props.chartWidgetCollection.activeChartWidget.value();

        _this32.state = {
          chartWidget: t
        }, _this32._defineRegistry(t);
        return _this32;
      }

      _createClass(mt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._setActiveChart);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._setActiveChart);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.state.chartWidget;
          if (!e) return null;
          var t = this.props.options,
              s = {
            timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
            goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
            timeWidgetEnabled: t.timeWidgetEnabled,
            timezoneMenuEnabled: t.timeWidget && t.timeWidget.timezoneMenuEnabled,
            sessionIdButtonEnabled: t.sessionIdButtonEnabled,
            backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
            settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
            adjustForDividendsButtonEnabled: t.adjustForDividendsButtonEnabled,
            logScaleButtonEnabled: t.logScaleButtonEnabled,
            percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
            autoScaleButtonEnabled: t.autoScaleButtonEnabled,
            fullscreenButtonEnabled: t.fullscreenButtonEnabled,
            mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled
          };
          return r.createElement(b.RegistryProvider, {
            validation: ut,
            value: this._registry
          }, r.createElement(ht, _objectSpread({
            key: e.id()
          }, s)));
        }
      }, {
        key: "_defineRegistry",
        value: function _defineRegistry(e) {
          var _this$props5 = this.props,
              t = _this$props5.onContentBoxChanged,
              s = _this$props5.computeContentBox,
              r = _this$props5.chartApiInstance,
              a = _this$props5.chartWidgetCollection,
              _this$props5$options = _this$props5.options,
              n = _this$props5$options.timeFramesWidgetEnabled,
              i = _this$props5$options.timeFramesWidget,
              o = n ? i.availableTimeFrames : void 0;
          this._registry = {
            onContentBoxChanged: t,
            computeContentBox: s,
            chartWidget: e,
            availableTimeFrames: o,
            chartApiInstance: r,
            chartWidgetCollection: a,
            resizerDetacher: e.getResizerDetacher()
          };
        }
      }]);

      return mt;
    }(r.PureComponent);

    var pt =
    /*#__PURE__*/
    function () {
      function pt(e, t, s, n, i, o, l) {
        _classCallCheck(this, pt);

        this._container = e;
        var c = r.createElement(mt, {
          onContentBoxChanged: t,
          computeContentBox: s,
          chartWidgetCollection: n,
          chartApiInstance: i,
          chartWidgetOptions: o,
          options: l
        });
        a.render(c, e), e.setAttribute("data-initialized", "true");
      }

      _createClass(pt, [{
        key: "destroy",
        value: function destroy() {
          a.unmountComponentAtNode(this._container), this._container.removeAttribute("data-initialized");
        }
      }]);

      return pt;
    }();
  },
  72026: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M15 8V3h-5V2h6v6h-1ZM3 10v5h5v1H2v-6h1Z"/></svg>';
  },
  51267: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11 2v5h5v1h-6V2h1ZM7 16v-5H2v-1h6v6H7Z"/></svg>';
  },
  92574: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M11 4h-1v2H7.5A2.5 2.5 0 0 0 5 8.5V13h1v-2h16v8.5c0 .83-.67 1.5-1.5 1.5H14v1h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 6H18V4h-1v2h-6V4Zm6 4V7h-6v1h-1V7H7.5C6.67 7 6 7.67 6 8.5V10h16V8.5c0-.83-.67-1.5-1.5-1.5H18v1h-1Zm-5.15 10.15-3.5-3.5-.7.7L10.29 18H4v1h6.3l-2.65 2.65.7.7 3.5-3.5.36-.35-.36-.35Z"/></svg>';
  },
  79978: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
  },
  21868: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
  },
  39750: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
  },
  69311: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
  },
  90752: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
  },
  25988: function _(e) {
    e.exports = {
      ar: ["تعديل"],
      ca_ES: ["aj"],
      cs: ["adj"],
      de: ["Anp."],
      el: ["adj"],
      en: "ADJ",
      es: "ADJ",
      fa: ["adj"],
      fr: ["adj"],
      he_IL: ["התאם"],
      hu_HU: ["adj"],
      id_ID: ["penyesuaian"],
      it: ["adg"],
      ja: ["配当調整"],
      ko: "ADJ",
      ms_MY: ["laras"],
      nl_NL: ["adj"],
      pl: ["adj"],
      pt: ["AJUSTES"],
      ro: ["adj"],
      ru: ["коррект."],
      sv: ["adj"],
      th: ["adj"],
      tr: "ADJ",
      vi: ["đ.chỉnh"],
      zh: "ADJ",
      zh_TW: "ADJ"
    };
  },
  24717: function _(e) {
    e.exports = {
      ar: ["b-adj"],
      ca_ES: ["b-adj"],
      cs: "B-ADJ",
      de: ["b-adj"],
      el: "B-ADJ",
      en: "B-ADJ",
      es: "B-ADJ",
      fa: "B-ADJ",
      fr: ["b-adj"],
      he_IL: ["b-adj"],
      hu_HU: "B-ADJ",
      id_ID: ["b-adj"],
      it: ["b-adg"],
      ja: ["限月調整"],
      ko: "B-ADJ",
      ms_MY: ["b-adj"],
      nl_NL: "B-ADJ",
      pl: ["b-adj"],
      pt: "B-ADJ",
      ro: "B-ADJ",
      ru: ["корр"],
      sv: ["b-adj"],
      th: ["b-adj"],
      tr: "B-ADJ",
      vi: ["b-adj"],
      zh: "B-ADJ",
      zh_TW: "B-ADJ"
    };
  },
  11987: function _(e) {
    e.exports = {
      ar: ["ضبط"],
      ca_ES: ["set"],
      cs: "SET",
      de: ["setzen"],
      el: "SET",
      en: "SET",
      es: "SET",
      fa: "SET",
      fr: ["fixer"],
      he_IL: ["הגדר"],
      hu_HU: "SET",
      id_ID: "SET",
      it: ["set"],
      ja: ["清算価格"],
      ko: "SET",
      ms_MY: ["set"],
      nl_NL: "SET",
      pl: ["ustaw"],
      pt: ["DEFINIR"],
      ro: "SET",
      ru: ["расч.цена"],
      sv: ["ställ in"],
      th: ["set"],
      tr: "SET",
      vi: ["set"],
      zh: "SET",
      zh_TW: "SET"
    };
  },
  99247: function _(e) {
    e.exports = {
      ar: ["تلقائي"],
      ca_ES: "auto",
      cs: ["automatické"],
      de: "auto",
      el: ["αυτοματο"],
      en: "auto",
      es: "auto",
      fa: ["خودکار"],
      fr: ["automatique"],
      he_IL: ["אוטומטי"],
      hu_HU: "auto",
      id_ID: "auto",
      it: "auto",
      ja: ["自動"],
      ko: ["자동"],
      ms_MY: "auto",
      nl_NL: "auto",
      pl: "auto",
      pt: "auto",
      ro: "auto",
      ru: ["авто"],
      sv: "auto",
      th: ["อัตโนมัติ"],
      tr: ["otomatik"],
      vi: ["tự động"],
      zh: ["自动"],
      zh_TW: ["自動"]
    };
  },
  885: function _(e) {
    e.exports = {
      ar: ["لوغاريتمي"],
      ca_ES: "log",
      cs: "log",
      de: "log",
      el: "log",
      en: "log",
      es: "log",
      fa: "log",
      fr: "log",
      he_IL: ["לוג"],
      hu_HU: "log",
      id_ID: "log",
      it: "log",
      ja: ["ログスケール"],
      ko: ["로그"],
      ms_MY: "log",
      nl_NL: "log",
      pl: "log",
      pt: "log",
      ro: "log",
      ru: ["лог"],
      sv: ["logg"],
      th: ["ล็อก"],
      tr: "log",
      vi: "log",
      zh: "log",
      zh_TW: "log"
    };
  },
  74944: function _(e) {
    e.exports = {
      ar: "All data",
      ca_ES: "All data",
      cs: "All data",
      de: ["Alle Daten"],
      el: "All data",
      en: "All data",
      es: ["Todos los datos"],
      fa: "All data",
      fr: ["Toutes les données"],
      he_IL: ["כל הנתונים"],
      hu_HU: "All data",
      id_ID: ["Seluruh data"],
      it: ["Tutti i dati"],
      ja: ["すべてのデータ"],
      ko: ["모든 데이터"],
      ms_MY: ["Semua data"],
      nl_NL: "All data",
      pl: "All data",
      pt: ["Todos os dados"],
      ro: "All data",
      ru: ["Все данные"],
      sv: "All data",
      th: "All data",
      tr: "All data",
      vi: "All data",
      zh: ["所有数据"],
      zh_TW: "All data"
    };
  },
  87556: function _(e) {
    e.exports = {
      ar: "Year to day",
      ca_ES: "Year to day",
      cs: "Year to day",
      de: ["Jahr zu Tag"],
      el: "Year to day",
      en: "Year to day",
      es: ["De año a día"],
      fa: "Year to day",
      fr: ["Année à ce jour"],
      he_IL: ["שנה ליום"],
      hu_HU: "Year to day",
      id_ID: ["Tahun ke hari"],
      it: "Year to day",
      ja: ["年初来"],
      ko: ["연도별"],
      ms_MY: ["Tahun ke hari"],
      nl_NL: "Year to day",
      pl: "Year to day",
      pt: ["De ano para dia"],
      ro: "Year to day",
      ru: ["Данные с начала года"],
      sv: "Year to day",
      th: "Year to day",
      tr: "Year to day",
      vi: "Year to day",
      zh: "Year to day",
      zh_TW: "Year to day"
    };
  },
  29505: function _(e) {
    e.exports = {
      ar: "{timePeriod} in {timeInterval}",
      ca_ES: "{timePeriod} in {timeInterval}",
      cs: "{timePeriod} in {timeInterval}",
      de: "{timePeriod} in {timeInterval}",
      el: "{timePeriod} in {timeInterval}",
      en: "{timePeriod} in {timeInterval}",
      es: ["{timePeriod} en {timeInterval}"],
      fa: "{timePeriod} in {timeInterval}",
      fr: ["{timePeriod} dans {timeInterval}"],
      he_IL: ["‎{timePeriod}‎ ב-‎{timeInterval}‎"],
      hu_HU: "{timePeriod} in {timeInterval}",
      id_ID: ["{timePeriod} pada {timeInterval}"],
      it: ["{timeInterval} a {timePeriod}"],
      ja: ["{timeInterval} で {timePeriod}"],
      ko: ["{timeInterval} 의 {timePeriod}₩"],
      ms_MY: ["{timePeriod} dalam {timeInterval}"],
      nl_NL: "{timePeriod} in {timeInterval}",
      pl: "{timePeriod} in {timeInterval}",
      pt: ["{timePeriod} em {timeInterval}"],
      ro: "{timePeriod} in {timeInterval}",
      ru: ["{timePeriod} в {timeInterval}"],
      sv: "{timePeriod} in {timeInterval}",
      th: "{timePeriod} in {timeInterval}",
      tr: "{timePeriod} in {timeInterval}",
      vi: "{timePeriod} in {timeInterval}",
      zh: "{timePeriod} in {timeInterval}",
      zh_TW: "{timePeriod} in {timeInterval}"
    };
  },
  9994: function _(e) {
    e.exports = {
      ar: ["تعديل البيانات لأرباح الأسهم"],
      ca_ES: ["Ajusta dades dels dividends"],
      cs: "Adjust data for dividends",
      de: ["Daten für Dividenden anpassen"],
      el: "Adjust data for dividends",
      en: "Adjust data for dividends",
      es: ["Ajustar datos de los dividendos"],
      fa: "Adjust data for dividends",
      fr: ["Ajuster les données pour les dividendes"],
      he_IL: ["התאם נתונים לדיבידנדים"],
      hu_HU: "Adjust data for dividends",
      id_ID: ["Sesuaikan data untuk dividen"],
      it: ["Adegua i dati a seconda dei dividendi"],
      ja: ["配当でデータを調整"],
      ko: ["배당에 따른 데이터 조정"],
      ms_MY: ["Laras data untuk dividen"],
      nl_NL: "Adjust data for dividends",
      pl: ["Dopasuj dane według dywidend"],
      pt: ["Ajustar dados de dividendos"],
      ro: "Adjust data for dividends",
      ru: ["Корректировать данные на дивиденды"],
      sv: ["Justera data för utdelning"],
      th: ["ปรับเปลี่ยนข้อมูลเนื่องจากเงินปันผล"],
      tr: ["Verileri temettülere göre düzelt"],
      vi: ["Điều chỉnh dữ liệu cho Cổ tức"],
      zh: ["调整股息数据"],
      zh_TW: ["調整股息數據"]
    };
  },
  10989: function _(e) {
    e.exports = {
      ar: ["ضبط لتغييرات العقود"],
      ca_ES: ["Ajusta els canvis dels contractes"],
      cs: "Adjust for contract changes",
      de: ["Veränderungen der Kontraktgrößen und Verfalltage"],
      el: "Adjust for contract changes",
      en: "Adjust for contract changes",
      es: ["Ajustar cambios de contrato"],
      fa: "Adjust for contract changes",
      fr: ["Ajustement pour les changements de contrat"],
      he_IL: ["התאם לשינויים בחוזה"],
      hu_HU: "Adjust for contract changes",
      id_ID: ["Penyesuaian untuk perubahan kontrak"],
      it: ["Incorpora variazioni dovute al cambio di contratto"],
      ja: ["限月の切り替えの調整"],
      ko: ["컨트랙트 변경 조절"],
      ms_MY: ["Laraskan untuk perubahan-perubahan kontrak"],
      nl_NL: "Adjust for contract changes",
      pl: ["Dostosuj do zmian w kontrakcie"],
      pt: ["Ajustes para mudanças no contrato"],
      ro: "Adjust for contract changes",
      ru: ["Корректировать с учётом изменений контрактов"],
      sv: ["Förändringar i avtalens storlek och datum för upphörande"],
      th: ["ปรับตามการเปลี่ยนแปลงสัญญา"],
      tr: ["Sözleşme değişiklikleri için ayarlama"],
      vi: ["Điều chỉnh để thay đổi hợp đồng"],
      zh: ["根据合约变更调整"],
      zh_TW: ["調整合約變更"]
    };
  },
  369: function _(e) {
    e.exports = {
      ar: ["الذهاب إلى"],
      ca_ES: ["Anar a"],
      cs: "Go to",
      de: ["Gehe zu"],
      el: "Go to",
      en: "Go to",
      es: ["Ir a"],
      fa: ["برو به"],
      fr: ["Aller à"],
      he_IL: ["עבור ל"],
      hu_HU: ["Ugrás ide:"],
      id_ID: ["Menuju ke"],
      it: ["Vai a"],
      ja: ["移動"],
      ko: ["가기"],
      ms_MY: ["Pergi ke"],
      nl_NL: "Go to",
      pl: ["Idź do..."],
      pt: ["Ir para"],
      ro: "Go to",
      ru: ["Перейти к дате"],
      sv: ["Gå till"],
      th: ["ไปที่"],
      tr: ["Tarihe git"],
      vi: ["Đến"],
      zh: ["前往到"],
      zh_TW: ["前往到"]
    };
  },
  41421: function _(e) {
    e.exports = {
      ar: ["ساعات التداول المُمددة متاحة فقط على النطاقات الصغرى خلال اليوم للرسوم البيانية"],
      ca_ES: ["L'horari ampliat només està disponible per a gràfics intradia"],
      cs: "Extended Hours is available only for intraday charts",
      de: ["Verlängerte Handelszeiten sind nur für Intraday-Charts verfügbar"],
      el: "Extended Hours is available only for intraday charts",
      en: "Extended Hours is available only for intraday charts",
      es: ["El horario ampliado solo se encuentra disponible para gráficos intradía"],
      fa: "Extended Hours is available only for intraday charts",
      fr: ["L'option Horaires étendus est disponible uniquement pour les graphiques intrajournaliers"],
      he_IL: ["שעות מורחבות זמינות רק עבור גרפים תוך-יומיים"],
      hu_HU: "Extended Hours is available only for intraday charts",
      id_ID: ["Jam Perpanjangan hanya tersedia bagi chart intrahari"],
      it: ["Gli orari di negoziazione estesi sono disponibili solo per i grafici intraday"],
      ja: ["時間外取引の機能は、イントラデイのチャートでのみ利用できます"],
      ko: ["확장시간은 인트라데이 차트에서만 가능합니다"],
      ms_MY: ["Waktu Dilanjutkan hanya tersedia untuk carta intra hari"],
      nl_NL: "Extended Hours is available only for intraday charts",
      pl: ["Sesja rozszerzona dostępna jest wyłącznie dla wykresów intraday"],
      pt: ["O Horário Estendido está disponível apenas para gráficos intradiário"],
      ro: "Extended Hours is available only for intraday charts",
      ru: ["Функция расширенных торговых часов доступна только для внутридневных графиков"],
      sv: ["Utökade timmar är endast tillgänglig för intradagsdiagram"],
      th: ["ชั่วโมงที่เพิ่มเติมขึ้นมาใช้ได้สำหรับกราฟแบบระหว่างวันเท่านั้น"],
      tr: ["Uzatılmış saatler sadece gün içi grafiklerde kullanılabilir"],
      vi: ["Tính năng Thời gian Giao dịch Ngoài giờ chỉ có sẵn cho các biểu đồ trong ngày"],
      zh: ["延长时段仅适用于日内图表"],
      zh_TW: ["延長時段僅適用於日內圖表"]
    };
  },
  1217: function _(e) {
    e.exports = {
      ar: ["يتم ضبط بيانات الرمز الرئيسي لتوزيعات الأرباح فقط"],
      ca_ES: ["Les dades del símbol principal s'ajusten només als dividends"],
      cs: "Main symbol data is adjusted for dividends only",
      de: ["Die Daten des Hauptsymbols sind nur für die Dividenden angepasst"],
      el: "Main symbol data is adjusted for dividends only",
      en: "Main symbol data is adjusted for dividends only",
      es: ["Los datos del símbolo principal se ajustan solo a los dividendos"],
      fa: "Main symbol data is adjusted for dividends only",
      fr: ["Les données du symbole principal sont ajustées pour les dividendes uniquement"],
      he_IL: ["הנתונים של הסימול הראשי מותאמים לדיבידנדים בלבד"],
      hu_HU: "Main symbol data is adjusted for dividends only",
      id_ID: ["Data simbol utama disesuaikan hanya untuk deviden"],
      it: ["I dati del simbolo principale sono adeguati solo per lo stacco dei dividendi"],
      ja: ["メインシンボルのデータは配当のみで調整されています"],
      ko: ["메인 심볼 데이터는 디비든드에 대해서만 조정됩니다"],
      ms_MY: ["Data utama simbol adalah diselaraskan untuk dividend sahaja"],
      nl_NL: "Main symbol data is adjusted for dividends only",
      pl: ["Dane głównego symbolu są dostosowywane tylko do dywidend"],
      pt: ["Os dados do símbolo são ajustados apenas para dividendos"],
      ro: "Main symbol data is adjusted for dividends only",
      ru: ["Данные по основному инструменту корректируются только для дивидендов"],
      sv: ["Uppgifterna om huvudsymbolen justeras endast för utdelningar."],
      th: ["ข้อมูลสัญลักษณ์หลักถูกปรับเป็นเงินปันผลเท่านั้น"],
      tr: ["Ana sembol verileri yalnızca temettüler için ayarlanır"],
      vi: ["Dữ liệu của mã chính chỉ được điều chỉnh cho cổ tức"],
      zh: ["主要商品数据仅针对股息进行调整"],
      zh_TW: ["主要商品數據僅針對股息進行調整"]
    };
  },
  27662: function _(e) {
    e.exports = {
      ar: ["يتم ضبط بيانات الرمز الرئيسي للتقسيمات فقط"],
      ca_ES: ["Les dades del símbol principal s'ajusten només als splits"],
      cs: "Main symbol data is adjusted for splits only",
      de: ["Die Daten des Hauptsymbols werden nur für Splits angepasst"],
      el: "Main symbol data is adjusted for splits only",
      en: "Main symbol data is adjusted for splits only",
      es: ["Los datos del símbolo principal se ajustan solo a los splits"],
      fa: "Main symbol data is adjusted for splits only",
      fr: ["Les données du symbole principal sont ajustées pour les fractions uniquement"],
      he_IL: ["הנתונים של הסימול הראשי מותאמים לספליטים בלבד"],
      hu_HU: "Main symbol data is adjusted for splits only",
      id_ID: ["Data simbol utama disesuaikan hanya untuk pecahan."],
      it: ["I dati del simbolo principale sono adeguati solo per i frazionamenti"],
      ja: ["メインシンボルのデータは株式分割でのみ調整されています"],
      ko: ["메인 심볼 데이터는 스플릿에 대해서만 조정됩니다"],
      ms_MY: ["Data utama simbol adalah diselaraskan untuk pembahagian sahaja"],
      nl_NL: "Main symbol data is adjusted for splits only",
      pl: ["Dane głównego symbolu są dostosowywane tylko do podziałów"],
      pt: ["Os dados do símbolo principal são ajustados apenas para desdobramentos"],
      ro: "Main symbol data is adjusted for splits only",
      ru: ["Данные по основному инструменту корректируются только для сплитов"],
      sv: ["Uppgifter om huvudsymbolen justeras endast för splits."],
      th: ["ข้อมูลสัญลักษณ์หลักถูกปรับสำหรับการแยกเท่านั้น"],
      tr: ["Ana sembol verileri yalnızca bölmeler için ayarlanır"],
      vi: ["Dữ liệu của mã chính chỉ được điều chỉnh để tách"],
      zh: ["主要商品数据仅针对拆分进行调整"],
      zh_TW: ["主要商品數據僅針對拆分進行調整"]
    };
  },
  44794: function _(e) {
    e.exports = {
      ar: ["الجلسات"],
      ca_ES: "Sessions",
      cs: "Sessions",
      de: "Sessions",
      el: "Sessions",
      en: "Sessions",
      es: ["Sesiones"],
      fa: "Sessions",
      fr: "Sessions",
      he_IL: ["סשנים"],
      hu_HU: "Sessions",
      id_ID: ["Sesi"],
      it: ["Sessioni"],
      ja: ["セッション"],
      ko: ["세션"],
      ms_MY: ["Sesi-sesi"],
      nl_NL: "Sessions",
      pl: ["Sesje"],
      pt: ["Sessões"],
      ro: "Sessions",
      ru: ["Сессии"],
      sv: ["Sessioner"],
      th: ["เซสชั่น"],
      tr: ["Oturum"],
      vi: ["Phiên"],
      zh: ["交易时段"],
      zh_TW: ["交易時段"]
    };
  },
  98948: function _(e) {
    e.exports = {
      ar: ["تبديل تكبير الرسم البياني"],
      ca_ES: ["Alterna maximitzar gràfic"],
      cs: "Toggle Maximize Chart",
      de: ["Auf maximierten Chart umschalten"],
      el: "Toggle Maximize Chart",
      en: "Toggle Maximize Chart",
      es: ["Alternar maximizar gráfico"],
      fa: "Toggle Maximize Chart",
      fr: ["Agrandir le graphique"],
      he_IL: ["החלף לגרף מקסימלי"],
      hu_HU: ["Maximális Chat Kiterjesztése"],
      id_ID: ["Toggle Memperbesar Chart"],
      it: ["Espandi/riduci grafico"],
      ja: ["チャート最大化切り替え"],
      ko: ["차트최대화토글"],
      ms_MY: ["Carta Memaksimumkan Togol"],
      nl_NL: "Toggle Maximize Chart",
      pl: ["Maksymalizuj wykres"],
      pt: ["Alternar para gráfico maximizado"],
      ro: "Toggle Maximize Chart",
      ru: ["Развернуть/свернуть график"],
      sv: ["Slå på/av maximering av diagram"],
      th: ["สลับเป็นชาร์ตขนาดใหญ่ที่สุด"],
      tr: ["Grafik Maksimize Değiştir"],
      vi: ["Chuyển đổi Tối đa hoá Biểu đồ"],
      zh: ["切换为最大化图表"],
      zh_TW: ["切換最大化圖表"]
    };
  },
  60879: function _(e) {
    e.exports = {
      ar: ["نطاق قياس تلقائي"],
      ca_ES: ["Alterna l'escala automàtica"],
      cs: ["Přepnout na Auto Stupnici"],
      de: ["Auf automatische Skalierung umschalten"],
      el: ["Αυτόματη κλίμακα"],
      en: "Toggle Auto Scale",
      es: ["Alternar escala automática"],
      fa: "Toggle Auto Scale",
      fr: ["Mise à l'échelle automatique"],
      he_IL: ["הפעל/כבה קנה מידה אוטומטיות"],
      hu_HU: ["Váltás Automata Méretezés"],
      id_ID: ["Toggle Skala Otomatis"],
      it: ["Seleziona/deseleziona scala automatica"],
      ja: ["自動スケール切り替え"],
      ko: ["자동눈금토글"],
      ms_MY: ["Skala Auto Togol"],
      nl_NL: ["Schakel autoschaal"],
      pl: ["Włącz skalę automatyczną"],
      pt: ["Alternar Para Escala Automática"],
      ro: "Toggle Auto Scale",
      ru: ["Автоматический масштаб вкл/выкл"],
      sv: ["Växla skala automatiskt"],
      th: ["สลับเป็นสเกลอัตโนมัติ"],
      tr: ["Otomatik Ölçeklendirmeyi Aç/Kapat"],
      vi: ["Chuyển đổi Tỷ lệ tự động"],
      zh: ["切换为自动坐标"],
      zh_TW: ["切換為自動刻度"]
    };
  },
  21329: function _(e) {
    e.exports = {
      ar: ["نطاق قياس لوغاريتمي"],
      ca_ES: ["Alterna l'escala logarítmica"],
      cs: ["Přepnout Log Měřítko"],
      de: ["Auf logarithmische Skalierung umschalten"],
      el: ["Λογαριθμική κλίμακα"],
      en: "Toggle Log Scale",
      es: ["Alternar escala logarítmica"],
      fa: "Toggle Log Scale",
      fr: ["Mise à l'échelle logarithmique"],
      he_IL: ["הפעל/כבה סקאלה לוגריתמית"],
      hu_HU: ["Váltás Log Skála"],
      id_ID: ["Toggle Skala Log"],
      it: ["Seleziona/Deseleziona scala logaritmica"],
      ja: ["ログスケール切り替え"],
      ko: ["로그눈금토글"],
      ms_MY: ["Skala Log Togol"],
      nl_NL: ["Schakel log schaal"],
      pl: ["Przełącz na skalę logarytmiczną"],
      pt: ["Alternar Para Escala Logarítmica"],
      ro: "Toggle Log Scale",
      ru: ["Логарифмическая шкала вкл/выкл"],
      sv: ["Slå på/av Log-skala"],
      th: ["สลับเป็นมาตราแบบล๊อก"],
      tr: ["Logaritmik Ölçeklendirmeyi Aç/Kapat"],
      vi: ["Chuyển đổi Quy mô Đăng nhập"],
      zh: ["切换为对数坐标"],
      zh_TW: ["切換為對數刻度"]
    };
  },
  43737: function _(e) {
    e.exports = {
      ar: ["نطاق قياس النسبة المئوية"],
      ca_ES: ["Altarna percentatge"],
      cs: ["Přepnout na Procenta"],
      de: ["Auf Prozent umschalten"],
      el: ["Ποσοστιαία κλίμακα"],
      en: "Toggle Percentage",
      es: ["Alternar porcentaje"],
      fa: "Toggle Percentage",
      fr: ["Echelle en pourcentage"],
      he_IL: ["החלף אחוזים"],
      hu_HU: ["Váltás Százalék"],
      id_ID: ["Toggle Persentase"],
      it: ["Seleziona/Deseleziona percentuale"],
      ja: ["％スケール切り替え"],
      ko: ["백분율토글"],
      ms_MY: ["Peratusan Togol"],
      nl_NL: ["Schakel percentage"],
      pl: ["Włącz skalę procentową"],
      pt: ["Alternar Para Percentagem"],
      ro: "Toggle Percentage",
      ru: ["Процентная шкала вкл/выкл"],
      sv: ["Slå på/av procentsats"],
      th: ["สลับเป็นเปอร์เซ็นต์"],
      tr: ["Yüzde Olarak Değiştir"],
      vi: ["Chuyển đồi Phần trăm"],
      zh: ["切换为百分比坐标"],
      zh_TW: ["切換為百分比"]
    };
  },
  87492: function _(e) {
    e.exports = {
      ar: ["توقيت"],
      ca_ES: ["Zona horària"],
      cs: ["Časové pásmo"],
      de: ["Zeitzone"],
      el: "Timezone",
      en: "Timezone",
      es: ["Zona horaria"],
      fa: "Timezone",
      fr: ["Fuseau horaire"],
      he_IL: ["אזור זמן"],
      hu_HU: ["Időzóna"],
      id_ID: ["Zona waktu"],
      it: ["Fuso orario"],
      ja: ["タイムゾーン"],
      ko: ["타임존"],
      ms_MY: ["Zon Waktu"],
      nl_NL: "Timezone",
      pl: ["Strefa czasowa"],
      pt: ["Fuso Horário"],
      ro: "Timezone",
      ru: ["Часовой пояс"],
      sv: ["Tidszon"],
      th: ["เขตเวลา"],
      tr: ["Saat Dilimi"],
      vi: ["Múi giờ"],
      zh: ["时区"],
      zh_TW: ["時區"]
    };
  },
  99983: function _(e) {
    e.exports = {
      ar: ["استخدم التسوية في أقرب وقت على الفاصل الزمني اليومي"],
      ca_ES: ["Fer servir la liquidació com a tancament en intervals diaris"],
      cs: "Use settlement as close on daily interval",
      de: ["Settlement als Schlusskurs im Tagesintervall verwenden"],
      el: "Use settlement as close on daily interval",
      en: "Use settlement as close on daily interval",
      es: ["Utilizar la liquidación como cierre en intervalos diarios"],
      fa: "Use settlement as close on daily interval",
      fr: ["Utiliser le règlement comme proche de l'intervalle quotidien"],
      he_IL: ["השתמש בסליקה כסגירה באינטרוול יומי"],
      hu_HU: "Use settlement as close on daily interval",
      id_ID: ["Gunakan penyelesaian sedekat mungkin pada interval harian"],
      it: ["Usa il settlement come chiusura nel giornaliero"],
      ja: ["日足で清算価格を終値として利用"],
      ko: ["데일리 클로즈를 청산가로 쓰기"],
      ms_MY: ["Gunakan penyelesaian sebagai penutup pada selang masa harian"],
      nl_NL: "Use settlement as close on daily interval",
      pl: ["Użyj ceny rozliczenia jako dziennej ceny zamknięcia"],
      pt: ["Usar a liquidação como fechamento no gráfico diário"],
      ro: "Use settlement as close on daily interval",
      ru: ["Использовать расчетную цену для цены закрытия на дневном интервале"],
      sv: ["Använd avräkning så nära daglig intervallängd"],
      th: ["ใช้การชำระราคาที่ใกล้เคียงกันในแต่ละวัน"],
      tr: ["Ödemeyi günlük aralıklarla yakın olarak kullanma"],
      vi: ["Sử dụng giải quyết càng gần vào khoảng thời gian hàng ngày"],
      zh: ["使用结算价作为每日周期的收盘价"],
      zh_TW: ["使用結算價做為日圖的收盤價"]
    };
  },
  8877: function _(e) {
    e.exports = {
      ar: "ext",
      ca_ES: "ext",
      cs: "ext",
      de: ["verl."],
      el: "ext",
      en: "ext",
      es: "ext",
      fa: "ext",
      fr: "ext",
      he_IL: ["הרחב"],
      hu_HU: "ext",
      id_ID: ["perp"],
      it: ["est"],
      ja: ["時間外"],
      ko: ["확장"],
      ms_MY: ["dilanjutkan"],
      nl_NL: "ext",
      pl: ["rozsz"],
      pt: ["est"],
      ro: "ext",
      ru: ["расш"],
      sv: ["utökad"],
      th: ["ต่อ"],
      tr: ["ek"],
      vi: ["mở rộng"],
      zh: ["延时"],
      zh_TW: ["延時"]
    };
  },
  42908: function _(e) {
    e.exports = {
      ar: "{str} day",
      ca_ES: "{str} day",
      cs: "{str} day",
      de: ["{str} Tag", "{str} Tage"],
      el: "{str} day",
      en: "{str} day",
      es: ["{str} día", "{str} días"],
      fa: ["{str} days"],
      fr: ["{str} jour", "{str} jours"],
      he_IL: ["{str} יום", "{str} ימים", "{str} ימים", "{str} ימים"],
      hu_HU: ["{str} days"],
      id_ID: ["{str} hari"],
      it: ["{str} giorno", "{str} giorni"],
      ja: ["{str}日"],
      ko: ["{str} 일"],
      ms_MY: ["{str} hari"],
      nl_NL: "{str} day",
      pl: "{str} day",
      pt: ["{str} dia", "{str} dias"],
      ro: "{str} day",
      ru: ["{str} день", "{str} дня", "{str} дней", "{str} дней"],
      sv: "{str} day",
      th: ["{str} days"],
      tr: "{str} day",
      vi: ["{str} days"],
      zh: ["{str} days"],
      zh_TW: ["{str} days"]
    };
  },
  74262: function _(e) {
    e.exports = {
      ar: ["‎‎{str}‎ يوم", "‎‎{str}‎ يوم", "‎‎{str}‎ يوم", "‎‎{str}‎ يوم", "‎‎{str}‎ يوم", "‎‎{str}‎ يوم"],
      ca_ES: "{str} day",
      cs: "{str} day",
      de: ["{str} Tag", "{str} Tage"],
      el: "{str} day",
      en: "{str} day",
      es: ["{str} día", "{str} días"],
      fa: ["{str} days"],
      fr: ["{str} jour", "{str} jours"],
      he_IL: ["יום ‎{str}‎", "‎{str}‎ ימים", "‎{str}‎ ימים", "‎{str}‎ ימים"],
      hu_HU: ["{str} days"],
      id_ID: ["{str} hari"],
      it: ["{str} giorno", "{str} giorni"],
      ja: ["{str}日"],
      ko: ["{str} 날"],
      ms_MY: ["{str} hari"],
      nl_NL: "{str} day",
      pl: ["{str} dzień", "{str} dni", "{str} dni", "{str} dni"],
      pt: ["{str} dia", "{str} dias"],
      ro: "{str} day",
      ru: ["{str} день", "{str} дня", "{str} дней", "{str} дней"],
      sv: ["{str} dag", "{str} dagar"],
      th: ["{str} days"],
      tr: ["{str} gün", "{str} gün"],
      vi: ["{str} ngày"],
      zh: ["{str}天"],
      zh_TW: ["{str}天"]
    };
  },
  81693: function _(e) {
    e.exports = {
      ar: "{str} day intervals",
      ca_ES: "{str} day intervals",
      cs: "{str} day intervals",
      de: ["{str}-tägige Intervalle", "{str}-tägige Intervalle"],
      el: "{str} day intervals",
      en: "{str} day intervals",
      es: ["intervalos de {str} día", "intervalos de {str} días"],
      fa: ["{str} days intervals"],
      fr: ["{str} intervalles de jour", "{str} intervalles de jours"],
      he_IL: ["{str} אינטרוולי יום", "{str} אינטרוולי ימים", "{str} אינטרוולי ימים", "{str} אינטרוולי ימים"],
      hu_HU: ["{str} days intervals"],
      id_ID: ["{str} interval hari"],
      it: ["Timeframe {str} giorno", "Timeframe {str} giorni"],
      ja: ["{str}日足"],
      ko: ["{str} 일 간격"],
      ms_MY: ["{str} selang hari"],
      nl_NL: "{str} day intervals",
      pl: "{str} day intervals",
      pt: ["intervalos de {str} dia", "intervalos de {str} dias"],
      ro: "{str} day intervals",
      ru: ["{str}-дневных интервалах", "{str}-дневных интервалах", "{str}-дневных интервалах", "{str}-дневных интервалах"],
      sv: "{str} day intervals",
      th: ["{str} days intervals"],
      tr: "{str} day intervals",
      vi: ["{str} days intervals"],
      zh: ["{str} days intervals"],
      zh_TW: ["{str} days intervals"]
    };
  },
  89020: function _(e) {
    e.exports = {
      ar: "{str} hour",
      ca_ES: "{str} hour",
      cs: "{str} hour",
      de: ["{str} Stunde", "{str} Stunden"],
      el: "{str} hour",
      en: "{str} hour",
      es: ["{str} hora", "{str} horas"],
      fa: ["{str} hours"],
      fr: ["{str} heure", "{str} heures"],
      he_IL: ["{str} שעה", "{str} שעות", "{str} שעות", "{str} שעות"],
      hu_HU: ["{str} hours"],
      id_ID: ["{str} jam"],
      it: ["{str} ora", "{str} ore"],
      ja: ["{str}時間"],
      ko: ["{str} 시"],
      ms_MY: ["{str} jam"],
      nl_NL: "{str} hour",
      pl: "{str} hour",
      pt: ["{str} hora", "{str} horas"],
      ro: "{str} hour",
      ru: ["{str} час", "{str} часа", "{str} часов", "{str} часов"],
      sv: "{str} hour",
      th: ["{str} hours"],
      tr: "{str} hour",
      vi: ["{str} hours"],
      zh: ["{str} hours"],
      zh_TW: ["{str} hours"]
    };
  },
  17174: function _(e) {
    e.exports = {
      ar: ["{str} ساعة", "{str} ساعة", "{str} ساعة", "{str} ساعة", "{str} ساعة", "{str} ساعة"],
      ca_ES: "{str} hour",
      cs: "{str} hour",
      de: ["{str} Stunde", "{str} Stunden"],
      el: "{str} hour",
      en: "{str} hour",
      es: ["{str} hora", "{str} horas"],
      fa: ["{str} hours"],
      fr: ["{str} heure", "{str} heures"],
      he_IL: ["שעה ‎{str}‎", "‎{str}‎ שעות", "‎{str}‎ שעות", "‎{str}‎ שעות"],
      hu_HU: ["{str} hours"],
      id_ID: ["{str} jam"],
      it: ["{str} ora", "{str} ore"],
      ja: ["{str}時間"],
      ko: ["{str} 시간"],
      ms_MY: ["{str} jam"],
      nl_NL: "{str} hour",
      pl: ["{str} godzina", "{str} godziny", "{str} godzin", "{str} godzin"],
      pt: ["{str} hora", "{str} horas"],
      ro: "{str} hour",
      ru: ["{str} час", "{str} часа", "{str} часов", "{str} часов"],
      sv: ["{str} timme", "{str} timmar"],
      th: ["{str} hours"],
      tr: ["{str} saat", "{str} saat"],
      vi: ["{str} giờ"],
      zh: ["{str}小时"],
      zh_TW: ["{str}小時"]
    };
  },
  54028: function _(e) {
    e.exports = {
      ar: "{str} hour intervals",
      ca_ES: "{str} hour intervals",
      cs: "{str} hour intervals",
      de: ["{str}-stündige Intervalle", "{str}-stündige Intervalle"],
      el: "{str} hour intervals",
      en: "{str} hour intervals",
      es: ["intervalos de {str} hora", "intervalos de {str} horas"],
      fa: ["{str} hours intervals"],
      fr: ["{str} intervalles d'heure", "{str} intervalles d'heures"],
      he_IL: ["{str} אינטרוולי שעה", "{str} אינטרוולי שעות", "{str} אינטרוולי שעות", "{str} אינטרוולי שעות"],
      hu_HU: ["{str} hours intervals"],
      id_ID: ["{str} interval jam"],
      it: ["Timeframe {str} ora", "Timeframe {str} ore"],
      ja: ["{str}時間足"],
      ko: ["{str} 시간 간격"],
      ms_MY: ["{str} selang jam"],
      nl_NL: "{str} hour intervals",
      pl: "{str} hour intervals",
      pt: ["intervalos de {str} hora", "intervalos de {str} horas"],
      ro: "{str} hour intervals",
      ru: ["{str}-часовых интервалах", "{str}-часовых интервалах", "{str}-часовых интервалах", "{str}-часовых интервалах"],
      sv: "{str} hour intervals",
      th: ["{str} hours intervals"],
      tr: "{str} hour intervals",
      vi: ["{str} hours intervals"],
      zh: ["{str} hours intervals"],
      zh_TW: ["{str} hours intervals"]
    };
  },
  3189: function _(e) {
    e.exports = {
      ar: "{str} month",
      ca_ES: "{str} month",
      cs: "{str} month",
      de: ["{str} Monat", "{str} Monate"],
      el: "{str} month",
      en: "{str} month",
      es: ["{str} mes", "{str} meses"],
      fa: ["{str} months"],
      fr: ["{str} mois", "{str} mois"],
      he_IL: ["{str} חודש", "{str} חודשים", "{str} חודשים", "{str} חודשים"],
      hu_HU: ["{str} months"],
      id_ID: ["{str} bulan"],
      it: ["{str} mese", "{str} mesi"],
      ja: ["{str}ヶ月"],
      ko: ["{str} 월"],
      ms_MY: ["{str} bulan"],
      nl_NL: "{str} month",
      pl: "{str} month",
      pt: ["{str} mês", "{str} meses"],
      ro: "{str} month",
      ru: ["{str} месяц", "{str} месяца", "{str} месяцев", "{str} месяцев"],
      sv: "{str} month",
      th: ["{str} months"],
      tr: "{str} month",
      vi: ["{str} months"],
      zh: ["{str} months"],
      zh_TW: ["{str} months"]
    };
  },
  28039: function _(e) {
    e.exports = {
      ar: ["‎{str}‎ شهر", "‎{str}‎ شهر", "‎{str}‎ شهر", "‎{str}‎ شهر", "‎{str}‎ شهر", "‎{str}‎ شهر"],
      ca_ES: "{str} month",
      cs: "{str} month",
      de: ["{str} Monat", "{str} Monate"],
      el: "{str} month",
      en: "{str} month",
      es: ["{str} mes", "{str} meses"],
      fa: ["{str} months"],
      fr: ["{str} mois", "{str} mois"],
      he_IL: ["חודש ‎{str}‎", "‎{str}‎ חודשים", "‎{str}‎ חודשים", "‎{str}‎ חודשים"],
      hu_HU: ["{str} months"],
      id_ID: ["{str} bulan"],
      it: ["{str} mese", "{str} mesi"],
      ja: ["{str}ヶ月"],
      ko: ["{str} 달"],
      ms_MY: ["{str} bulan"],
      nl_NL: "{str} month",
      pl: ["{str} miesiąc", "{str} miesiące", "{str} miesięcy", "{str} miesięcy"],
      pt: ["{str} mês", "{str} meses"],
      ro: "{str} month",
      ru: ["{str} месяц", "{str} месяца", "{str} месяцев", "{str} месяцев"],
      sv: ["{str} månad", "{str} månader"],
      th: ["{str} months"],
      tr: ["{str} ay", "{str} ay"],
      vi: ["{str} tháng"],
      zh: ["{str}个月"],
      zh_TW: ["{str}月"]
    };
  },
  99773: function _(e) {
    e.exports = {
      ar: "{str} month intervals",
      ca_ES: "{str} month intervals",
      cs: "{str} month intervals",
      de: ["{str}-monatige Intervalle", "{str}-monatige Intervalle"],
      el: "{str} month intervals",
      en: "{str} month intervals",
      es: ["intervalos de {str} mes", "intervalos de {str} meses"],
      fa: ["{str} months intervals"],
      fr: ["{str} intervalles de mois", "{str} intervalles de mois"],
      he_IL: ["{str} אינטרוולי חודש", "{str} אינטרוולי חודשים", "{str} אינטרוולי חודשים", "{str} אינטרוולי חודשים"],
      hu_HU: ["{str} months intervals"],
      id_ID: ["{str} interval bulan"],
      it: ["Timeframe {str} mese", "Timeframe {str} mesi"],
      ja: ["{str}ヶ月足"],
      ko: ["{str} 월 간격"],
      ms_MY: ["{str} selang bulan"],
      nl_NL: "{str} month intervals",
      pl: "{str} month intervals",
      pt: ["intervalos de {str} mês", "intervalos de {str} meses"],
      ro: "{str} month intervals",
      ru: ["{str}-месячных интервалах", "{str}-месячных интервалах", "{str}-месячных интервалах", "{str}-месячных интервалах"],
      sv: "{str} month intervals",
      th: ["{str} months intervals"],
      tr: "{str} month intervals",
      vi: ["{str} months intervals"],
      zh: ["{str} months intervals"],
      zh_TW: ["{str} months intervals"]
    };
  },
  44795: function _(e) {
    e.exports = {
      ar: "{str} minute",
      ca_ES: "{str} minute",
      cs: "{str} minute",
      de: ["{str} Minute", "{str} Minuten"],
      el: "{str} minute",
      en: "{str} minute",
      es: ["{str} minuto", "{str} minutos"],
      fa: ["{str} minutes"],
      fr: "{str} minute",
      he_IL: ["דקה {str}", "דקות {str}", "דקות {str}", "דקות {str}"],
      hu_HU: ["{str} minutes"],
      id_ID: ["{str} menit"],
      it: ["{str} minuto", "{str} minuti"],
      ja: ["{str}分"],
      ko: ["{str} 분"],
      ms_MY: ["{str} minit"],
      nl_NL: "{str} minute",
      pl: "{str} minute",
      pt: ["{str} minuto", "{str} minutos"],
      ro: "{str} minute",
      ru: ["{str} минута", "{str} минуты", "{str} минут", "{str} минут"],
      sv: "{str} minute",
      th: ["{str} minutes"],
      tr: "{str} minute",
      vi: ["{str} minutes"],
      zh: ["{str} minutes"],
      zh_TW: ["{str} minutes"]
    };
  },
  60144: function _(e) {
    e.exports = {
      ar: ["{str} دقيقة", "{str} دقيقة", "{str} دقيقة", "{str} دقيقة", "{str} دقيقة", "{str} دقيقة"],
      ca_ES: "{str} minute",
      cs: "{str} minute",
      de: ["{str} Minute", "{str} Minuten"],
      el: "{str} minute",
      en: "{str} minute",
      es: ["{str} minuto", "{str} minutos"],
      fa: ["{str} minutes"],
      fr: "{str} minute",
      he_IL: ["דקה {str}", "{str} דקות", "{str} דקות", "{str} דקות"],
      hu_HU: ["{str} minutes"],
      id_ID: ["{str} menit"],
      it: ["{str} minuto", "{str} minuti"],
      ja: ["{str}分"],
      ko: ["{str} 분"],
      ms_MY: ["{str} minit"],
      nl_NL: "{str} minute",
      pl: ["{str} minuta", "{str} minuty", "{str} minut", "{str} minut"],
      pt: ["{str} minuto", "{str} minutos"],
      ro: "{str} minute",
      ru: ["{str} минута", "{str} минуты", "{str} минут", "{str} минут"],
      sv: "{str} minute",
      th: ["{str} minutes"],
      tr: ["{str} dakika", "{str} dakika"],
      vi: ["{str} phút"],
      zh: ["{str}分钟"],
      zh_TW: ["{str}分"]
    };
  },
  56347: function _(e) {
    e.exports = {
      ar: "{str} minute intervals",
      ca_ES: "{str} minute intervals",
      cs: "{str} minute intervals",
      de: ["{str}-minütige Intervalle", "{str}-minütige Intervalle"],
      el: "{str} minute intervals",
      en: "{str} minute intervals",
      es: ["intervalos de {str} minuto", "intervalos de {str} minutos"],
      fa: ["{str} minutes intervals"],
      fr: ["{str} intervalles de minute", "{str} intervalles de minutes"],
      he_IL: ["{str} אינטרוולי דקה", "{str} אינטרוולי דקות", "{str} אינטרוולי דקות", "{str} אינטרוולי דקות"],
      hu_HU: ["{str} minutes intervals"],
      id_ID: ["{str} interval menit"],
      it: ["Timeframe {str} minuto", "Timeframe {str} minuti"],
      ja: ["{str}分足"],
      ko: ["{str} 분 간격"],
      ms_MY: ["{str} selang minit"],
      nl_NL: "{str} minute intervals",
      pl: "{str} minute intervals",
      pt: ["intervalos de {str} minuto", "intervalos de {str} minutos"],
      ro: "{str} minute intervals",
      ru: ["{str}-минутных интервалах", "{str}-минутных интервалах", "{str}-минутных интервалах", "{str}-минутных интервалах"],
      sv: "{str} minute intervals",
      th: ["{str} minutes intervals"],
      tr: "{str} minute intervals",
      vi: ["{str} minutes intervals"],
      zh: ["{str} minutes intervals"],
      zh_TW: ["{str} minutes intervals"]
    };
  },
  67518: function _(e) {
    e.exports = {
      ar: "{str} week",
      ca_ES: "{str} week",
      cs: "{str} week",
      de: ["{str} Woche", "{str} Wochen"],
      el: "{str} week",
      en: "{str} week",
      es: ["{str} semana", "{str} semanas"],
      fa: ["{str} weeks"],
      fr: ["{str} semaine", "{str} semaines"],
      he_IL: ["{str} שבוע", "{str} שבועות", "{str} שבועות", "{str} שבועות"],
      hu_HU: ["{str} weeks"],
      id_ID: ["{str} minggu"],
      it: ["{str} settimana", "{str} settimane"],
      ja: ["{str}週"],
      ko: ["{str} 주"],
      ms_MY: ["{str} minggu"],
      nl_NL: "{str} week",
      pl: "{str} week",
      pt: ["{str} semana", "{str} semanas"],
      ro: "{str} week",
      ru: ["{str} неделя", "{str} недели", "{str} недель", "{str} недель"],
      sv: "{str} week",
      th: ["{str} weeks"],
      tr: "{str} week",
      vi: ["{str} weeks"],
      zh: ["{str} weeks"],
      zh_TW: ["{str} weeks"]
    };
  },
  14074: function _(e) {
    e.exports = {
      ar: ["‎{str}‎ أسبوع", "‎{str}‎ أسبوع", "‎{str}‎ أسبوع", "‎{str}‎ أسبوع", "‎{str}‎ أسبوع", "‎{str}‎ أسبوع"],
      ca_ES: "{str} week",
      cs: "{str} week",
      de: ["{str} Woche", "{str} Wochen"],
      el: "{str} week",
      en: "{str} week",
      es: ["{str} semana", "{str} semanas"],
      fa: ["{str} weeks"],
      fr: ["{str} semaine", "{str} semaines"],
      he_IL: ["שבוע ‎{str}‎", "‎{str}‎ שבועות", "‎{str}‎ שבועות", "‎{str}‎ שבועות"],
      hu_HU: ["{str} weeks"],
      id_ID: ["{str} minggu"],
      it: ["{str} settimana", "{str} settimane"],
      ja: ["{str}週"],
      ko: ["{str} 주"],
      ms_MY: ["{str} minggu"],
      nl_NL: "{str} week",
      pl: ["{str} tydzień", "{str} tygodnie", "{str} tygodni", "{str} tygodni"],
      pt: ["{str} semana", "{str} semanas"],
      ro: "{str} week",
      ru: ["{str} неделя", "{str} недели", "{str} недель", "{str} недель"],
      sv: ["{str} vecka", "{str} veckor"],
      th: ["{str} weeks"],
      tr: ["{str} hafta", "{str} hafta"],
      vi: ["{str} tuần"],
      zh: ["{str}周"],
      zh_TW: ["{str}週"]
    };
  },
  58667: function _(e) {
    e.exports = {
      ar: "{str} week intervals",
      ca_ES: "{str} week intervals",
      cs: "{str} week intervals",
      de: ["{str}-wöchige Intervalle", "{str}-wöchige Intervalle"],
      el: "{str} week intervals",
      en: "{str} week intervals",
      es: ["intervalos de {str} semana", "intervalos de {str} semanas"],
      fa: ["{str} weeks intervals"],
      fr: ["{str} intervalles de semaine", "{str} intervalles de semaines"],
      he_IL: ["{str} אינטרוולי שבוע", "{str} אינטרוולי שבועות", "{str} אינטרוולי שבועות", "{str} אינטרוולי שבועות"],
      hu_HU: ["{str} weeks intervals"],
      id_ID: ["{str} interval minggu"],
      it: ["Timeframe {str} settimana", "Timeframe {str} settimane"],
      ja: ["{str}週足"],
      ko: ["{str} 주 간격"],
      ms_MY: ["{str} selang minggu"],
      nl_NL: "{str} week intervals",
      pl: "{str} week intervals",
      pt: ["intervalos de {str} semana", "intervalos de {str} semanas"],
      ro: "{str} week intervals",
      ru: ["{str}-недельных интервалах", "{str}-недельных интервалах", "{str}-недельных интервалах", "{str}-недельных интервалах"],
      sv: "{str} week intervals",
      th: ["{str} weeks intervals"],
      tr: "{str} week intervals",
      vi: ["{str} weeks intervals"],
      zh: ["{str} weeks intervals"],
      zh_TW: ["{str} weeks intervals"]
    };
  },
  6598: function _(e) {
    e.exports = {
      ar: "{str} year",
      ca_ES: "{str} year",
      cs: "{str} year",
      de: ["{str} Jahr", "{str} Jahre"],
      el: "{str} year",
      en: "{str} year",
      es: ["{str} año", "{str} años"],
      fa: ["{str} years"],
      fr: ["{str} an", "{str} ans"],
      he_IL: ["{str} שנה", "{str} שנים", "{str} שנים", "{str} שנים"],
      hu_HU: ["{str} years"],
      id_ID: ["{str} tahun"],
      it: ["{str} anno", "{str} anni"],
      ja: ["{str}年"],
      ko: ["{str} 년"],
      ms_MY: ["{str} tahun"],
      nl_NL: "{str} year",
      pl: "{str} year",
      pt: ["{str} ano", "{str} anos"],
      ro: "{str} year",
      ru: ["{str} год", "{str} года", "{str} лет", "{str} лет"],
      sv: "{str} year",
      th: ["{str} years"],
      tr: "{str} year",
      vi: ["{str} years"],
      zh: ["{str} years"],
      zh_TW: ["{str} years"]
    };
  },
  8222: function _(e) {
    e.exports = {
      ar: ["‎{str}‎ سنة", "‎{str}‎ سنة", "‎{str}‎ سنة", "‎{str}‎ سنة", "‎{str}‎ سنة", "‎{str}‎ سنة"],
      ca_ES: "{str} year",
      cs: "{str} year",
      de: ["{str} Jahr", "{str} Jahre"],
      el: "{str} year",
      en: "{str} year",
      es: ["{str} año", "{str} años"],
      fa: ["{str} years"],
      fr: ["{str} année", "{str} années"],
      he_IL: ["שנה ‎{str}‎", "‎{str}‎ שנים", "‎{str}‎ שנים", "‎{str}‎ שנים"],
      hu_HU: ["{str} years"],
      id_ID: ["{str} tahun"],
      it: ["{str} anno", "{str} anni"],
      ja: ["{str}年"],
      ko: ["{str} 해"],
      ms_MY: ["{str} tahun"],
      nl_NL: "{str} year",
      pl: ["{str} rok", "{str} lata", "{str} lat", "{str} lat"],
      pt: ["{str} ano", "{str} anos"],
      ro: "{str} year",
      ru: ["{str} год", "{str} года", "{str} лет", "{str} лет"],
      sv: ["{str} år", "{str} år"],
      th: ["{str} years"],
      tr: ["{str} yıl", "{str} yıl"],
      vi: ["{str} năm"],
      zh: ["{str}年"],
      zh_TW: ["{str}年"]
    };
  },
  57849: function _(e) {
    e.exports = {
      ar: "{str} year intervals",
      ca_ES: "{str} year intervals",
      cs: "{str} year intervals",
      de: ["{str}-jährige Intervalle", "{str}-jährige Intervalle"],
      el: "{str} year intervals",
      en: "{str} year intervals",
      es: ["intervalos de {str} año", "intervalos de {str} años"],
      fa: ["{str} years intervals"],
      fr: ["{str} intervalles d'année", "{str} intervalles d'années"],
      he_IL: ["{str} אינטרוולי שעה", "{str} אינטרוולי שעות", "{str} אינטרוולי שעות", "{str} אינטרוולי שעות"],
      hu_HU: ["{str} years intervals"],
      id_ID: ["{str} interval tahun"],
      it: ["Timeframe {str} anno", "Timeframe {str} anni"],
      ja: ["{str}年足"],
      ko: ["{str} 년 간격"],
      ms_MY: ["{str} selang tahun"],
      nl_NL: "{str} year intervals",
      pl: "{str} year intervals",
      pt: ["intervalos de {str} ano", "intervalos de {str} anos"],
      ro: "{str} year intervals",
      ru: ["{str}-летних интервалах", "{str}-летних интервалах", "{str}-летних интервалах", "{str}-летних интервалах"],
      sv: "{str} year intervals",
      th: ["{str} years intervals"],
      tr: "{str} year intervals",
      vi: ["{str} years intervals"],
      zh: ["{str} years intervals"],
      zh_TW: ["{str} years intervals"]
    };
  }
}]);