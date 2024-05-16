"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4862], {
  25398: function _(e) {
    e.exports = {
      "round-button": "round-button-FujgyDpN",
      icon: "icon-FujgyDpN",
      content: "content-FujgyDpN",
      link: "link-FujgyDpN",
      "color-brand": "color-brand-FujgyDpN",
      "variant-primary": "variant-primary-FujgyDpN",
      "disable-themes": "disable-themes-FujgyDpN",
      activated: "activated-FujgyDpN",
      "variant-quiet-primary": "variant-quiet-primary-FujgyDpN",
      "variant-secondary": "variant-secondary-FujgyDpN",
      "variant-ghost": "variant-ghost-FujgyDpN",
      "color-gray": "color-gray-FujgyDpN",
      "color-red": "color-red-FujgyDpN",
      "color-black": "color-black-FujgyDpN",
      "color-invertedblack": "color-invertedblack-FujgyDpN",
      "size-xsmall": "size-xsmall-FujgyDpN",
      "icon-only": "icon-only-FujgyDpN",
      "with-start-icon": "with-start-icon-FujgyDpN",
      "with-end-icon": "with-end-icon-FujgyDpN",
      startIcon: "startIcon-FujgyDpN",
      endIcon: "endIcon-FujgyDpN",
      "size-small": "size-small-FujgyDpN",
      "size-medium": "size-medium-FujgyDpN",
      "size-large": "size-large-FujgyDpN",
      "size-xlarge": "size-xlarge-FujgyDpN",
      "size-xxlarge": "size-xxlarge-FujgyDpN",
      animated: "animated-FujgyDpN",
      stretch: "stretch-FujgyDpN"
    };
  },
  81026: function _(e) {
    e.exports = {
      container: "container-WDZ0PRNh",
      "container-xxsmall": "container-xxsmall-WDZ0PRNh",
      "container-xsmall": "container-xsmall-WDZ0PRNh",
      "container-small": "container-small-WDZ0PRNh",
      "container-medium": "container-medium-WDZ0PRNh",
      "container-large": "container-large-WDZ0PRNh",
      "intent-default": "intent-default-WDZ0PRNh",
      focused: "focused-WDZ0PRNh",
      readonly: "readonly-WDZ0PRNh",
      disabled: "disabled-WDZ0PRNh",
      "with-highlight": "with-highlight-WDZ0PRNh",
      grouped: "grouped-WDZ0PRNh",
      "adjust-position": "adjust-position-WDZ0PRNh",
      "first-row": "first-row-WDZ0PRNh",
      "first-col": "first-col-WDZ0PRNh",
      stretch: "stretch-WDZ0PRNh",
      "font-size-medium": "font-size-medium-WDZ0PRNh",
      "font-size-large": "font-size-large-WDZ0PRNh",
      "no-corner-top-left": "no-corner-top-left-WDZ0PRNh",
      "no-corner-top-right": "no-corner-top-right-WDZ0PRNh",
      "no-corner-bottom-right": "no-corner-bottom-right-WDZ0PRNh",
      "no-corner-bottom-left": "no-corner-bottom-left-WDZ0PRNh",
      "size-xxsmall": "size-xxsmall-WDZ0PRNh",
      "size-xsmall": "size-xsmall-WDZ0PRNh",
      "size-small": "size-small-WDZ0PRNh",
      "size-medium": "size-medium-WDZ0PRNh",
      "size-large": "size-large-WDZ0PRNh",
      "intent-success": "intent-success-WDZ0PRNh",
      "intent-warning": "intent-warning-WDZ0PRNh",
      "intent-danger": "intent-danger-WDZ0PRNh",
      "intent-primary": "intent-primary-WDZ0PRNh",
      "border-none": "border-none-WDZ0PRNh",
      "border-thin": "border-thin-WDZ0PRNh",
      "border-thick": "border-thick-WDZ0PRNh",
      highlight: "highlight-WDZ0PRNh",
      shown: "shown-WDZ0PRNh"
    };
  },
  7236: function _(e) {
    e.exports = {
      "inner-slot": "inner-slot-W53jtLjw",
      interactive: "interactive-W53jtLjw",
      icon: "icon-W53jtLjw",
      "inner-middle-slot": "inner-middle-slot-W53jtLjw",
      "before-slot": "before-slot-W53jtLjw",
      "after-slot": "after-slot-W53jtLjw"
    };
  },
  30930: function _(e) {
    e.exports = {
      input: "input-RUSovanF",
      "size-xxsmall": "size-xxsmall-RUSovanF",
      "size-xsmall": "size-xsmall-RUSovanF",
      "size-small": "size-small-RUSovanF",
      "size-medium": "size-medium-RUSovanF",
      "size-large": "size-large-RUSovanF",
      "with-start-slot": "with-start-slot-RUSovanF",
      "with-end-slot": "with-end-slot-RUSovanF"
    };
  },
  48729: function _(e) {
    e.exports = {
      "round-tabs": "round-tabs-J4T7wK54",
      "align-start": "align-start-J4T7wK54",
      "align-center": "align-center-J4T7wK54",
      tab: "tab-J4T7wK54",
      "tab-primary": "tab-primary-J4T7wK54",
      checked: "checked-J4T7wK54",
      "tab-ghost": "tab-ghost-J4T7wK54",
      "size-xsmall": "size-xsmall-J4T7wK54",
      "size-small": "size-small-J4T7wK54",
      "size-large": "size-large-J4T7wK54"
    };
  },
  23490: function _(e) {
    e.exports = {
      dropTargetInside: "dropTargetInside-e_nPSSdZ",
      dropTarget: "dropTarget-e_nPSSdZ",
      before: "before-e_nPSSdZ",
      after: "after-e_nPSSdZ"
    };
  },
  75564: function _(e) {
    e.exports = {
      wrap: "wrap-IEe5qpW4",
      selected: "selected-IEe5qpW4",
      childOfSelected: "childOfSelected-IEe5qpW4",
      disabled: "disabled-IEe5qpW4",
      expandHandle: "expandHandle-IEe5qpW4",
      expanded: "expanded-IEe5qpW4"
    };
  },
  76106: function _(e) {
    e.exports = {
      separator: "separator-MgF6KBas",
      tree: "tree-MgF6KBas",
      overlayScrollWrap: "overlayScrollWrap-MgF6KBas",
      listContainer: "listContainer-MgF6KBas"
    };
  },
  28355: function _(e) {
    e.exports = {
      title: "title-QPktCwTY",
      tabs: "tabs-QPktCwTY",
      empty: "empty-QPktCwTY",
      image: "image-QPktCwTY",
      spinner: "spinner-QPktCwTY",
      contentList: "contentList-QPktCwTY"
    };
  },
  17742: function _(e) {
    e.exports = {
      dialog: "dialog-VUnQLSMH",
      button: "button-VUnQLSMH"
    };
  },
  22813: function _(e) {
    e.exports = {
      title: "title-uNZ8yW1y",
      withoutIcon: "withoutIcon-uNZ8yW1y",
      buttons: "buttons-uNZ8yW1y",
      button: "button-uNZ8yW1y",
      disabled: "disabled-uNZ8yW1y",
      spacing: "spacing-uNZ8yW1y",
      toolbar: "toolbar-uNZ8yW1y"
    };
  },
  87769: function _(e) {
    e.exports = {
      wrap: "wrap-C8ln3wvp",
      dialog: "dialog-C8ln3wvp",
      offset: "offset-C8ln3wvp",
      title: "title-C8ln3wvp",
      main: "main-C8ln3wvp",
      disabled: "disabled-C8ln3wvp",
      icon: "icon-C8ln3wvp",
      pathIcon: "pathIcon-C8ln3wvp",
      syncIconWrap: "syncIconWrap-C8ln3wvp",
      syncIcon: "syncIcon-C8ln3wvp",
      rightButtons: "rightButtons-C8ln3wvp",
      hover: "hover-C8ln3wvp",
      expandHandle: "expandHandle-C8ln3wvp",
      button: "button-C8ln3wvp",
      selected: "selected-C8ln3wvp",
      childOfSelected: "childOfSelected-C8ln3wvp",
      renameInput: "renameInput-C8ln3wvp",
      warn: "warn-C8ln3wvp",
      visible: "visible-C8ln3wvp"
    };
  },
  6909: function _(e) {
    e.exports = {
      wrap: "wrap-ukH4sVzT",
      space: "space-ukH4sVzT",
      tree: "tree-ukH4sVzT"
    };
  },
  86928: function _(e) {
    e.exports = {
      button: "button-w6lVe_oI",
      hovered: "hovered-w6lVe_oI",
      disabled: "disabled-w6lVe_oI"
    };
  },
  27011: function _(e, t, n) {
    "use strict";

    function o(e, t) {
      return t || null == e || ("string" == typeof e || Array.isArray(e)) && 0 === e.length;
    }

    n.d(t, {
      isIconOnly: function isIconOnly() {
        return o;
      }
    });
  },
  86332: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlGroupContext: function ControlGroupContext() {
        return o;
      }
    });
    var o = n(50959).createContext({
      isGrouped: !1,
      cellState: {
        isTop: !0,
        isRight: !0,
        isBottom: !0,
        isLeft: !0
      }
    });
  },
  95604: function _(e, t, n) {
    "use strict";

    function o(e) {
      var t = 0;
      return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t;
    }

    n.d(t, {
      getGroupCellRemoveRoundBorders: function getGroupCellRemoveRoundBorders() {
        return o;
      }
    });
  },
  67029: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlSkeleton: function ControlSkeleton() {
        return b;
      },
      InputClasses: function InputClasses() {
        return p;
      }
    });
    var o = n(50959),
        r = n(97754),
        i = n(50151),
        s = n(38528),
        l = n(90186),
        a = n(86332),
        c = n(95604);
    var u = n(81026),
        d = n.n(u);

    function h(e) {
      var t = "";
      return 0 !== e && (1 & e && (t = r(t, d()["no-corner-top-left"])), 2 & e && (t = r(t, d()["no-corner-top-right"])), 4 & e && (t = r(t, d()["no-corner-bottom-right"])), 8 & e && (t = r(t, d()["no-corner-bottom-left"]))), t;
    }

    function g(e, t, n, o) {
      var i = e.removeRoundBorder,
          s = e.className,
          _e$intent = e.intent,
          l = _e$intent === void 0 ? "default" : _e$intent,
          _e$borderStyle = e.borderStyle,
          a = _e$borderStyle === void 0 ? "thin" : _e$borderStyle,
          u = e.size,
          g = e.highlight,
          m = e.disabled,
          p = e.readonly,
          f = e.stretch,
          v = e.noReadonlyStyles,
          b = e.isFocused,
          y = h(null != i ? i : (0, c.getGroupCellRemoveRoundBorders)(n));
      return r(d().container, d()["container-".concat(u)], d()["intent-".concat(l)], d()["border-".concat(a)], u && d()["size-".concat(u)], y, g && d()["with-highlight"], m && d().disabled, p && !v && d().readonly, b && d().focused, f && d().stretch, t && d().grouped, !o && d()["adjust-position"], n.isTop && d()["first-row"], n.isLeft && d()["first-col"], s);
    }

    function m(e, t, n) {
      var o = e.highlight,
          i = e.highlightRemoveRoundBorder;
      if (!o) return d().highlight;
      var s = h(null != i ? i : (0, c.getGroupCellRemoveRoundBorders)(t));
      return r(d().highlight, d().shown, d()["size-".concat(n)], s);
    }

    var p = {
      FontSizeMedium: (0, i.ensureDefined)(d()["font-size-medium"]),
      FontSizeLarge: (0, i.ensureDefined)(d()["font-size-large"])
    },
        f = {
      passive: !1
    };

    function v(e, t) {
      var n = e.style,
          r = e.id,
          i = e.role,
          c = e.onFocus,
          u = e.onBlur,
          d = e.onMouseOver,
          h = e.onMouseOut,
          p = e.onMouseDown,
          v = e.onMouseUp,
          b = e.onKeyDown,
          y = e.onClick,
          _ = e.tabIndex,
          S = e.startSlot,
          w = e.middleSlot,
          C = e.endSlot,
          T = e.onWheel,
          _e$onWheelNoPassive = e.onWheelNoPassive,
          E = _e$onWheelNoPassive === void 0 ? null : _e$onWheelNoPassive,
          I = e.size,
          _ref = (0, o.useContext)(a.ControlGroupContext),
          M = _ref.isGrouped,
          k = _ref.cellState,
          _ref$disablePositionA = _ref.disablePositionAdjustment,
          D = _ref$disablePositionA === void 0 ? !1 : _ref$disablePositionA,
          N = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var r = (0, o.useRef)(null),
            i = (0, o.useRef)(null),
            s = (0, o.useCallback)(function () {
          if (null === r.current || null === i.current) return;

          var _i$current = _slicedToArray(i.current, 3),
              e = _i$current[0],
              t = _i$current[1],
              n = _i$current[2];

          null !== t && r.current.addEventListener(e, t, n);
        }, []),
            l = (0, o.useCallback)(function () {
          if (null === r.current || null === i.current) return;

          var _i$current2 = _slicedToArray(i.current, 3),
              e = _i$current2[0],
              t = _i$current2[1],
              n = _i$current2[2];

          null !== t && r.current.removeEventListener(e, t, n);
        }, []),
            a = (0, o.useCallback)(function (e) {
          l(), r.current = e, s();
        }, []);
        return (0, o.useEffect)(function () {
          return i.current = [e, t, n], s(), l;
        }, [e, t, n]), a;
      }("wheel", E, f);

      return o.createElement("span", _objectSpread({
        style: n,
        id: r,
        role: i,
        className: g(e, M, k, D),
        tabIndex: _,
        ref: (0, s.useMergedRefs)([t, N]),
        onFocus: c,
        onBlur: u,
        onMouseOver: d,
        onMouseOut: h,
        onMouseDown: p,
        onMouseUp: v,
        onKeyDown: b,
        onClick: y,
        onWheel: T
      }, (0, l.filterDataProps)(e), {}, (0, l.filterAriaProps)(e)), S, w, C, o.createElement("span", {
        className: m(e, k, I)
      }));
    }

    v.displayName = "ControlSkeleton";
    var b = o.forwardRef(v);
  },
  78274: function _(e, t, n) {
    "use strict";

    n.d(t, {
      AfterSlot: function AfterSlot() {
        return u;
      },
      EndSlot: function EndSlot() {
        return c;
      },
      MiddleSlot: function MiddleSlot() {
        return a;
      },
      StartSlot: function StartSlot() {
        return l;
      }
    });
    var o = n(50959),
        r = n(97754),
        i = n(7236),
        s = n.n(i);

    function l(e) {
      var t = e.className,
          _e$interactive = e.interactive,
          n = _e$interactive === void 0 ? !0 : _e$interactive,
          _e$icon = e.icon,
          i = _e$icon === void 0 ? !1 : _e$icon,
          l = e.children;
      return o.createElement("span", {
        className: r(s()["inner-slot"], n && s().interactive, i && s().icon, t)
      }, l);
    }

    function a(e) {
      var t = e.className,
          n = e.children;
      return o.createElement("span", {
        className: r(s()["inner-slot"], s()["inner-middle-slot"], t)
      }, n);
    }

    function c(e) {
      var t = e.className,
          _e$interactive2 = e.interactive,
          n = _e$interactive2 === void 0 ? !0 : _e$interactive2,
          _e$icon2 = e.icon,
          i = _e$icon2 === void 0 ? !1 : _e$icon2,
          l = e.children;
      return o.createElement("span", {
        className: r(s()["inner-slot"], n && s().interactive, i && s().icon, t)
      }, l);
    }

    function u(e) {
      var t = e.className,
          n = e.children;
      return o.createElement("span", {
        className: r(s()["after-slot"], t)
      }, n);
    }
  },
  31261: function _(e, t, n) {
    "use strict";

    n.d(t, {
      InputControl: function InputControl() {
        return b;
      }
    });
    var o = n(50959),
        r = n(97754),
        i = n(90186),
        s = n(47201),
        l = n(48907),
        a = n(38528),
        c = n(48027),
        u = n(29202),
        d = n(45812),
        h = n(67029),
        g = n(78274),
        m = n(30930),
        p = n.n(m);

    function f(e) {
      return !(0, i.isAriaAttribute)(e) && !(0, i.isDataAttribute)(e);
    }

    function v(e) {
      var t = e.id,
          n = e.title,
          s = e.role,
          l = e.tabIndex,
          a = e.placeholder,
          c = e.name,
          u = e.type,
          d = e.value,
          m = e.defaultValue,
          v = e.draggable,
          b = e.autoComplete,
          y = e.autoFocus,
          _ = e.maxLength,
          S = e.min,
          w = e.max,
          C = e.step,
          T = e.pattern,
          E = e.inputMode,
          I = e.onSelect,
          M = e.onFocus,
          k = e.onBlur,
          D = e.onKeyDown,
          N = e.onKeyUp,
          L = e.onKeyPress,
          x = e.onChange,
          z = e.onDragStart,
          _e$size = e.size,
          j = _e$size === void 0 ? "small" : _e$size,
          A = e.className,
          R = e.inputClassName,
          O = e.disabled,
          B = e.readonly,
          F = e.containerTabIndex,
          P = e.startSlot,
          W = e.endSlot,
          H = e.reference,
          V = e.containerReference,
          G = e.onContainerFocus,
          U = _objectWithoutProperties(e, ["id", "title", "role", "tabIndex", "placeholder", "name", "type", "value", "defaultValue", "draggable", "autoComplete", "autoFocus", "maxLength", "min", "max", "step", "pattern", "inputMode", "onSelect", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "onKeyPress", "onChange", "onDragStart", "size", "className", "inputClassName", "disabled", "readonly", "containerTabIndex", "startSlot", "endSlot", "reference", "containerReference", "onContainerFocus"]),
          Z = (0, i.filterProps)(U, f),
          K = _objectSpread({}, (0, i.filterAriaProps)(U), {}, (0, i.filterDataProps)(U), {
        id: t,
        title: n,
        role: s,
        tabIndex: l,
        placeholder: a,
        name: c,
        type: u,
        value: d,
        defaultValue: m,
        draggable: v,
        autoComplete: b,
        autoFocus: y,
        maxLength: _,
        min: S,
        max: w,
        step: C,
        pattern: T,
        inputMode: E,
        onSelect: I,
        onFocus: M,
        onBlur: k,
        onKeyDown: D,
        onKeyUp: N,
        onKeyPress: L,
        onChange: x,
        onDragStart: z
      });

      return o.createElement(h.ControlSkeleton, _objectSpread({}, Z, {
        disabled: O,
        readonly: B,
        tabIndex: F,
        className: r(p().container, A),
        size: j,
        ref: V,
        onFocus: G,
        startSlot: P,
        middleSlot: o.createElement(g.MiddleSlot, null, o.createElement("input", _objectSpread({}, K, {
          className: r(p().input, p()["size-".concat(j)], R, P && p()["with-start-slot"], W && p()["with-end-slot"]),
          disabled: O,
          readOnly: B,
          ref: H
        }))),
        endSlot: W
      }));
    }

    function b(e) {
      e = (0, c.useControl)(e);

      var _e2 = e,
          t = _e2.disabled,
          n = _e2.autoSelectOnFocus,
          _e2$tabIndex = _e2.tabIndex,
          r = _e2$tabIndex === void 0 ? 0 : _e2$tabIndex,
          i = _e2.onFocus,
          h = _e2.onBlur,
          g = _e2.reference,
          _e2$containerReferenc = _e2.containerReference,
          m = _e2$containerReferenc === void 0 ? null : _e2$containerReferenc,
          p = (0, o.useRef)(null),
          f = (0, o.useRef)(null),
          _ref2 = (0, u.useFocus)(),
          _ref3 = _slicedToArray(_ref2, 2),
          b = _ref3[0],
          y = _ref3[1],
          _ = t ? void 0 : b ? -1 : r,
          S = t ? void 0 : b ? r : -1,
          _ref4 = (0, d.useIsMouseDown)(),
          w = _ref4.isMouseDown,
          C = _ref4.handleMouseDown,
          T = _ref4.handleMouseUp,
          E = (0, s.createSafeMulticastEventHandler)(y.onFocus, function (e) {
        n && !w.current && (0, l.selectAllContent)(e.currentTarget);
      }, i),
          I = (0, s.createSafeMulticastEventHandler)(y.onBlur, h),
          M = (0, o.useCallback)(function (e) {
        p.current = e, g && ("function" == typeof g && g(e), "object" == _typeof(g) && (g.current = e));
      }, [p, g]);

      return o.createElement(v, _objectSpread({}, e, {
        isFocused: b,
        containerTabIndex: _,
        tabIndex: S,
        onContainerFocus: function onContainerFocus(e) {
          f.current === e.target && null !== p.current && p.current.focus();
        },
        onFocus: E,
        onBlur: I,
        reference: M,
        containerReference: (0, a.useMergedRefs)([f, m]),
        onMouseDown: C,
        onMouseUp: T
      }));
    }
  },
  38952: function _(e, t, n) {
    "use strict";

    function o(e) {
      var t = e.reference,
          n = _objectWithoutProperties(e, ["reference"]);

      return _objectSpread({}, n, {
        ref: t
      });
    }

    n.d(t, {
      renameRef: function renameRef() {
        return o;
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
    var o = n(50959),
        r = n(38952);

    function i(e) {
      return o.createElement("a", _objectSpread({}, (0, r.renameRef)(e)));
    }

    o.PureComponent;
  },
  48027: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useControl: function useControl() {
        return i;
      }
    });
    var o = n(47201),
        r = n(29202);

    function i(e) {
      var t = e.onFocus,
          n = e.onBlur,
          i = e.intent,
          s = e.highlight,
          l = e.disabled,
          _ref5 = (0, r.useFocus)(void 0, l),
          _ref6 = _slicedToArray(_ref5, 2),
          a = _ref6[0],
          c = _ref6[1],
          u = (0, o.createSafeMulticastEventHandler)(l ? void 0 : c.onFocus, t),
          d = (0, o.createSafeMulticastEventHandler)(l ? void 0 : c.onBlur, n);

      return _objectSpread({}, e, {
        intent: i || (a ? "primary" : "default"),
        highlight: null != s ? s : a,
        onFocus: u,
        onBlur: d
      });
    }
  },
  29202: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useFocus: function useFocus() {
        return r;
      }
    });
    var o = n(50959);

    function r(e, t) {
      var _ref7 = (0, o.useState)(!1),
          _ref8 = _slicedToArray(_ref7, 2),
          n = _ref8[0],
          r = _ref8[1];

      (0, o.useEffect)(function () {
        t && n && r(!1);
      }, [t, n]);
      var i = {
        onFocus: (0, o.useCallback)(function (t) {
          void 0 !== e && e.current !== t.target || r(!0);
        }, [e]),
        onBlur: (0, o.useCallback)(function (t) {
          void 0 !== e && e.current !== t.target || r(!1);
        }, [e])
      };
      return [n, i];
    }
  },
  45812: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useIsMouseDown: function useIsMouseDown() {
        return r;
      }
    });
    var o = n(50959);

    function r() {
      var e = (0, o.useRef)(!1),
          t = (0, o.useCallback)(function () {
        e.current = !0;
      }, [e]),
          n = (0, o.useCallback)(function () {
        e.current = !1;
      }, [e]);
      return {
        isMouseDown: e,
        handleMouseDown: t,
        handleMouseUp: n
      };
    }
  },
  38528: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useMergedRefs: function useMergedRefs() {
        return i;
      }
    });
    var o = n(50959),
        r = n(53017);

    function i(e) {
      return (0, o.useCallback)((0, r.mergeRefs)(e), e);
    }
  },
  48907: function _(e, t, n) {
    "use strict";

    function o(e) {
      null !== e && e.setSelectionRange(0, e.value.length);
    }

    n.d(t, {
      selectAllContent: function selectAllContent() {
        return o;
      }
    });
  },
  47201: function _(e, t, n) {
    "use strict";

    function o() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      return function (t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _n2 = _step.value;
            void 0 !== _n2 && _n2(t);
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

    n.d(t, {
      createSafeMulticastEventHandler: function createSafeMulticastEventHandler() {
        return o;
      }
    });
  },
  23263: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ManageDrawings: function ManageDrawings() {
        return O;
      }
    });
    var o = n(50959),
        r = n(43370),
        i = (n(50151), n(9745)),
        s = n(44352),
        l = n(36298),
        a = n(97145),
        c = n(59224),
        u = n(92249),
        d = n(64530),
        h = n(1722),
        g = n(63932),
        m = n(97754),
        p = n.n(m);
    var f = n(90186),
        v = n(27011),
        b = n(25398),
        y = n.n(b);

    function _(e) {
      var t = e.className,
          n = e.color,
          o = e.variant,
          r = e.size,
          i = e.stretch,
          s = e.animated,
          l = e.disableThemes,
          a = e.isInvertedColorTheme,
          c = _objectWithoutProperties(e, ["className", "color", "variant", "size", "stretch", "animated", "disableThemes", "isInvertedColorTheme"]);

      return _objectSpread({}, c, {}, (0, f.filterDataProps)(e), {}, (0, f.filterAriaProps)(e));
    }

    function S(e) {
      var t = e.reference,
          n = e.children,
          r = e.iconOnly,
          s = e.startIcon,
          l = e.endIcon,
          a = _objectWithoutProperties(e, ["reference", "children", "iconOnly", "startIcon", "endIcon"]),
          c = function (e, t) {
        var n = t.className,
            _t$color = t.color,
            o = _t$color === void 0 ? "brand" : _t$color,
            _t$variant = t.variant,
            r = _t$variant === void 0 ? "primary" : _t$variant,
            _t$size = t.size,
            i = _t$size === void 0 ? "xlarge" : _t$size,
            s = t.stretch,
            _t$animated = t.animated,
            l = _t$animated === void 0 ? !1 : _t$animated,
            _t$disableThemes = t.disableThemes,
            a = _t$disableThemes === void 0 ? !1 : _t$disableThemes,
            _t$iconOnly = t.iconOnly,
            c = _t$iconOnly === void 0 ? !1 : _t$iconOnly,
            _t$isAnchor = t.isAnchor,
            u = _t$isAnchor === void 0 ? !1 : _t$isAnchor,
            _t$isActivated = t.isActivated,
            d = _t$isActivated === void 0 ? !1 : _t$isActivated,
            _t$isInvertedColorThe = t.isInvertedColorTheme,
            h = _t$isInvertedColorThe === void 0 ? !1 : _t$isInvertedColorThe,
            g = t.endIcon,
            p = t.startIcon,
            f = function (e, t) {
          return !!t && "black" === e;
        }(o, h);

        return m(n, e["round-button"], f ? e["color-inverted".concat(o)] : e["color-".concat(o)], e["variant-".concat(r)], e["size-".concat(i)], l && e.animated, s && e.stretch, a && e["disable-themes"], c && e["icon-only"], u && e.link, d && e.activated, p && e["with-start-icon"], g && e["with-end-icon"]);
      }(y(), e);

      return o.createElement("button", _objectSpread({}, _(a), {
        className: c,
        ref: t
      }), s && o.createElement(i.Icon, {
        className: p()(y().icon, y().startIcon),
        icon: s
      }), !(0, v.isIconOnly)(n, r) && o.createElement("span", {
        className: y().content
      }, n), l && o.createElement(i.Icon, {
        className: p()(y().icon, y().endIcon),
        icon: l
      }));
    }

    n(21593);

    function w(e, t) {
      var _t$align = t.align,
          n = _t$align === void 0 ? "start" : _t$align,
          _t$size2 = t.size,
          o = _t$size2 === void 0 ? "xsmall" : _t$size2;
      return m(e["round-tabs"], e["align-".concat(n)], e["size-".concat(o)]);
    }

    function C(e, t) {
      var _t$variant2 = t.variant,
          n = _t$variant2 === void 0 ? "primary" : _t$variant2,
          o = t.isChecked;
      return m(e.tab, e["tab-".concat(n)], o && e.checked);
    }

    var T = n(48729),
        E = n.n(T);
    var I = o.forwardRef(function (e, t) {
      var n = e.tabs,
          _e$size2 = e.size,
          r = _e$size2 === void 0 ? "xsmall" : _e$size2,
          _e$variant = e.variant,
          i = _e$variant === void 0 ? "primary" : _e$variant,
          _e$theme = e.theme,
          s = _e$theme === void 0 ? E() : _e$theme;
      return o.createElement("div", {
        className: w(s, e),
        ref: t
      }, n.map(function (e) {
        var t = e.isChecked,
            n = _objectWithoutProperties(e, ["isChecked"]);

        return o.createElement(S, _objectSpread({}, n, {
          className: C(s, _objectSpread({}, n, {
            variant: i,
            isChecked: t
          })),
          size: r,
          variant: i
        }));
      }));
    });
    I.displayName = "RoundTabsButtons";
    s.t(null, void 0, n(87871)), s.t(null, void 0, n(10538)), s.t(null, void 0, n(74860));
    var M = n(29540),
        k = n(28355);
    var D = (0, c.getLogger)("Chart.ManageDrawings"),
        N = new Map();

    function L(e) {
      var t = N.get(e);
      return void 0 === t && (t = new a.WatchedValue([]), N.set(e, t)), t;
    }

    var x = new l.TranslatedString("remove all line tools for {symbol}", s.t(null, void 0, n(23481))),
        z = function z(e) {
      return s.t(null, {
        plural: "{drawingsCount} drawings",
        count: e
      }, n(88143)).format({
        drawingsCount: e.toString()
      });
    },
        j = s.t(null, void 0, n(85128)),
        A = s.t(null, void 0, n(18570));

    function R(e) {
      var _o$useState = o.useState(null),
          _o$useState2 = _slicedToArray(_o$useState, 2),
          t = _o$useState2[0],
          n = _o$useState2[1],
          _o$useState3 = o.useState(null),
          _o$useState4 = _slicedToArray(_o$useState3, 2),
          i = _o$useState4[0],
          s = _o$useState4[1],
          _o$useState5 = o.useState(null),
          _o$useState6 = _slicedToArray(_o$useState5, 2),
          l = _o$useState6[0],
          a = _o$useState6[1],
          _ref9 = (o.useRef(null), o.useState([])),
          _ref10 = _slicedToArray(_ref9, 2),
          c = _ref10[0],
          d = _ref10[1];

      return o.useEffect(function () {
        return e.withModel(null, function () {
          var t = e.model();
          n(t), s(t.mainSeries().symbol());
        }), function () {
          return n(null);
        };
      }, [e]), o.useEffect(function () {
        if (null !== t) {
          var _e3 = {},
              _n3 = (0, r["default"])(f, 250, {
            leading: !1
          });

          return f(), t.model().dataSourceCollectionChanged().subscribe(_e3, _n3), function () {
            t.model().dataSourceCollectionChanged().unsubscribe(_e3, _n3);
          };
        }
      }, [t]), o.useEffect(function () {
        if (null !== t) {
          var _e4 = L(t.model().id()).spawn();

          return d(_toConsumableArray(_e4.value())), _e4.subscribe(function () {
            return d(_toConsumableArray(_e4.value()));
          }), function () {
            return null == _e4 ? void 0 : _e4.destroy();
          };
        }
      }, [t]), o.useMemo(function () {
        return {
          currentSymbol: i,
          symbolDrawingsMaps: l,
          removeSymbolDrawings: g,
          changeSymbol: m,
          hiddenSymbols: c
        };
      }, [i, l, g, m, c]);

      function g(e, n) {
        var _o2, _n4, _r;

        return regeneratorRuntime.async(function g$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(t && l)) {
                  _context.next = 16;
                  break;
                }

                _o2 = l[n].get(e);

                if (!_o2) {
                  _context.next = 16;
                  break;
                }

                _n4 = Array.from(_o2).map(function (e) {
                  return t.model().dataSourceForId(e);
                }).filter(h.notNull);
                _n4.length > 0 && t.removeSources(_n4, !1, x.format({
                  symbol: e
                }));
                _r = L(t.model().id());

                _r.setValue([].concat(_toConsumableArray(_r.value()), [e]));

                _context.prev = 7;
                _context.next = 10;
                return regeneratorRuntime.awrap(f());

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);
                D.logError("Error removing line tools: ".concat(_context.t0));

              case 15:
                _r.setValue(_r.value().filter(function (t) {
                  return t !== e;
                }));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[7, 12]]);
      }

      function m(n) {
        e.setSymbol(n), null !== t && s(n);
      }

      function p(e) {
        var t;
        return regeneratorRuntime.async(function p$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                t = function (e) {
                  var t = [new Map(), new Map(), new Map()];
                  {
                    var _n5 = t[0];
                    e.forEach(function (e) {
                      var t;

                      if ((0, u.isLineTool)(e) && e.showInObjectTree()) {
                        var _o3 = null !== (t = e.symbol()) && void 0 !== t ? t : "",
                            _r2 = _n5.get(_o3) || new Set();

                        _r2.add(e.id()), _n5.set(_o3, _r2);
                      }
                    });
                  }
                  return t;
                }(e);

                _context3.next = 3;
                return regeneratorRuntime.awrap(function _callee() {
                  return regeneratorRuntime.async(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", [new Map(), new Map(), new Map()]);

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  });
                }());

              case 3:
                _context3.t0 = function (e, n) {
                  var o = t[n];
                  e.forEach(function (e, t) {
                    var n = o.get(t) || new Set();
                    e.forEach(function (e) {
                      return n.add(e);
                    }), o.set(t, n);
                  });
                };

                _context3.sent.forEach(_context3.t0);

                return _context3.abrupt("return", t);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        });
      }

      function f() {
        return regeneratorRuntime.async(function f$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = null !== t;

                if (!_context4.t0) {
                  _context4.next = 7;
                  break;
                }

                _context4.t1 = a;
                _context4.next = 5;
                return regeneratorRuntime.awrap(p(t.dataSources()));

              case 5:
                _context4.t2 = _context4.sent;
                (0, _context4.t1)(_context4.t2);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        });
      }
    }

    function O(e) {
      var t = e.isMobile,
          r = e.chartWidget,
          l = e.onClose,
          a = e.onInitialized,
          _R = R(r),
          c = _R.currentSymbol,
          u = _R.symbolDrawingsMaps,
          h = _R.removeSymbolDrawings,
          m = _R.changeSymbol,
          p = _R.hiddenSymbols,
          _o$useState7 = o.useState(0),
          _o$useState8 = _slicedToArray(_o$useState7, 2),
          f = _o$useState8[0],
          v = _o$useState8[1],
          _o$useMemo = o.useMemo(function () {
        var e;

        if (null !== c && null !== u) {
          var _t2 = [];
          var _n6 = 0,
              _o4 = f;
          if (null === _o4) for (_o4 = 2; _o4 > 0 && !(((null === (e = u[_o4].get(c)) || void 0 === e ? void 0 : e.size) || 0) > 0);) {
            _o4--;
          }
          return u[_o4].forEach(function (e, o) {
            p.includes(o) || (_t2.push({
              symbol: o,
              drawingsCount: e.size,
              onRemove: function onRemove() {
                return function (e) {
                  h(e, _);
                }(o);
              },
              onClick: function onClick() {
                return function (e) {
                  "" !== e && (m(e), null == l || l());
                }(o);
              }
            }), _n6 += e.size);
          }), _t2.sort(function (e, t) {
            return e.drawingsCount === t.drawingsCount ? e.symbol.localeCompare(t.symbol) : e.drawingsCount > t.drawingsCount ? -1 : 1;
          }), [_t2, _n6, _o4];
        }

        return [[], 0, 0];
      }, [c, f, u, p]),
          _o$useMemo2 = _slicedToArray(_o$useMemo, 3),
          b = _o$useMemo2[0],
          y = _o$useMemo2[1],
          _ = _o$useMemo2[2];

      return o.useEffect(function () {
        null !== u && (null == a || a());
      }, [u]), o.createElement(o.Fragment, null, b.length > 0 && o.createElement("div", {
        className: k.title
      }, "".concat((S = u ? u[_].size : 0, s.t(null, {
        plural: "{symbolsCount} symbols",
        context: "symbols_and_drawings_count",
        count: S
      }, n(52908)).format({
        symbolsCount: S.toString()
      })), " ").concat(function (e) {
        return s.t(null, {
          plural: "with {drawingsCount} drawings",
          context: "symbols_and_drawings_count",
          count: e
        }, n(42743)).format({
          drawingsCount: e.toString()
        });
      }(y))), 0 === b.length ? null === u ? o.createElement(g.Spinner, {
        className: k.spinner
      }) : o.createElement("div", {
        className: k.empty
      }, o.createElement(i.Icon, {
        className: k.image,
        icon: M
      }), o.createElement("span", null, A)) : b.map(function (_ref11) {
        var e = _ref11.symbol,
            n = _ref11.drawingsCount,
            r = _ref11.onRemove,
            i = _ref11.onClick;
        return o.createElement(d.DialogContentItem, {
          key: e,
          title: e,
          subtitle: z(n),
          removeBtnLabel: j,
          isActive: e === c,
          isMobile: t,
          onClick: i,
          onClickRemove: r,
          showFavorite: !1
        });
      }));
      var S;
    }
  },
  67165: function _(e, t, n) {
    "use strict";

    var _It;

    var _marked =
    /*#__PURE__*/
    regeneratorRuntime.mark(tt),
        _marked2 =
    /*#__PURE__*/
    regeneratorRuntime.mark(nt),
        _marked3 =
    /*#__PURE__*/
    regeneratorRuntime.mark(ot),
        _marked4 =
    /*#__PURE__*/
    regeneratorRuntime.mark(rt),
        _marked5 =
    /*#__PURE__*/
    regeneratorRuntime.mark(it),
        _marked6 =
    /*#__PURE__*/
    regeneratorRuntime.mark(st),
        _marked7 =
    /*#__PURE__*/
    regeneratorRuntime.mark(lt),
        _marked8 =
    /*#__PURE__*/
    regeneratorRuntime.mark(at),
        _marked9 =
    /*#__PURE__*/
    regeneratorRuntime.mark(ct),
        _marked10 =
    /*#__PURE__*/
    regeneratorRuntime.mark(dt),
        _marked11 =
    /*#__PURE__*/
    regeneratorRuntime.mark(fn),
        _marked12 =
    /*#__PURE__*/
    regeneratorRuntime.mark(vn),
        _marked13 =
    /*#__PURE__*/
    regeneratorRuntime.mark(bn),
        _marked14 =
    /*#__PURE__*/
    regeneratorRuntime.mark(yn),
        _marked15 =
    /*#__PURE__*/
    regeneratorRuntime.mark(_n);

    n.r(t), n.d(t, {
      ObjectTreeDialogRenderer: function ObjectTreeDialogRenderer() {
        return Xo;
      }
    });
    var o = n(50959),
        r = n(962);

    function i(e, t, n) {
      var o, _r3;

      return regeneratorRuntime.async(function i$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _r3 = 0;

            case 1:
              if (!(_r3 < t)) {
                _context5.next = 16;
                break;
              }

              _context5.prev = 2;
              _context5.next = 5;
              return regeneratorRuntime.awrap(e(o));

            case 5:
              return _context5.abrupt("return", _context5.sent);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](2);
              o = _context5.t0;
              _context5.next = 13;
              return regeneratorRuntime.awrap(n(_r3));

            case 13:
              ++_r3;
              _context5.next = 1;
              break;

            case 16:
              throw o;

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[2, 8]]);
    }

    function s(e, t) {
      return regeneratorRuntime.async(function s$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", i(e, t, function () {
                return Promise.resolve();
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }

    var l = n(59224);
    var a = (0, l.getLogger)("DataSourcesIcons");
    var c = null;

    function u() {
      var e = n.c[57673];
      return e ? Promise.resolve(e.exports.lineToolsIcons) : n.e(1890).then(n.bind(n, 57673)).then(function (e) {
        return e.lineToolsIcons;
      });
    }

    function d() {
      var e = n.c[45876];
      return e ? Promise.resolve(e.exports.SERIES_ICONS) : n.e(9685).then(n.bind(n, 45876)).then(function (e) {
        return e.SERIES_ICONS;
      });
    }

    var h = null;

    function g() {
      return null === h && (h = function () {
        var e = s(u, 2).then(function (e) {
          return e;
        })["catch"](function (e) {
          return a.logWarn(e), {};
        }),
            t = s(d, 2).then(function (e) {
          return e;
        })["catch"](function (e) {
          return a.logWarn(e), {};
        });
        return Promise.all([e, t]);
      }()), h.then(function (e) {
        return c = {
          linetool: e[0],
          series: e[1]
        }, c;
      });
    }

    var m = n(41590),
        p = n(37558),
        f = n(90692),
        v = n(44352),
        b = n(35057),
        y = n(24437),
        _ = n(23263);

    var S = n(36349),
        w = n(32563),
        C = n(68335),
        T = n(50151),
        E = n(97754),
        I = n.n(E),
        M = n(9745),
        k = n(16396),
        D = n(50298),
        N = n(37968);
    var L = o.createContext(null);
    var x = n(48889),
        z = n(54079),
        j = n(16838),
        A = n(36296),
        R = n(74059),
        O = n(80465),
        B = n(22813),
        F = n(51768);

    function P(e) {
      var t = e.hideTitle,
          _ref12 = (0, T.ensureNotNull)((0, o.useContext)(L)),
          r = _ref12.viewModel,
          i = (0, N.useForceUpdate)(),
          s = r.selection();

      (0, o.useEffect)(function () {
        var e = {};
        return r.onChange().subscribe(e, function () {
          return i();
        }), function () {
          r.onChange().unsubscribeAll(e);
        };
      }, [r]), (0, o.useEffect)(function () {
        var e = {};
        return s.onChange().subscribe(e, function () {
          return i();
        }), function () {
          s.onChange().unsubscribeAll(e);
        };
      }, [s]), (0, o.useEffect)(function () {
        (0, j.updateTabIndexes)();
      }, []);
      var l = !r.canSelectionBeUnmerged(),
          a = r.isSelectionCopiable(),
          c = r.isSelectionCloneable(),
          u = !a && !c,
          d = r.canSelectionBeGrouped(),
          h = !1;
      return o.createElement(z.Toolbar, {
        orientation: "horizontal",
        className: B.toolbar
      }, !t && o.createElement("div", {
        className: E(B.title, B.withoutIcon)
      }, v.t(null, void 0, n(31095)), h), o.createElement("div", {
        className: B.buttons
      }, o.createElement(x.ToolbarIconButton, {
        className: E(B.button, !d && B.disabled),
        icon: O,
        onClick: function onClick() {
          r.createGroupFromSelection();
        },
        isDisabled: !d,
        tooltip: v.t(null, void 0, n(91073)),
        "data-name": "group-button"
      }), o.createElement(D.ToolbarMenuButton, {
        className: E(B.button, u && B.disabled),
        isDisabled: u,
        content: o.createElement(M.Icon, {
          icon: A
        }),
        tooltip: v.t(null, void 0, n(98129)),
        arrow: !1,
        isShowTooltip: !0,
        "data-name": "copy-clone-button"
      }, a && o.createElement(k.PopupMenuItem, {
        "data-name": "copy",
        label: v.t(null, void 0, n(35216)),
        onClick: function onClick() {
          r.copySelection();
        }
      }), c && o.createElement(k.PopupMenuItem, {
        "data-name": "clone",
        label: v.t(null, void 0, n(52977)),
        onClick: function onClick() {
          r.cloneSelection();
        }
      })), o.createElement(D.ToolbarMenuButton, {
        className: E(B.button, l && B.disabled),
        isDisabled: l,
        content: o.createElement(M.Icon, {
          icon: R
        }),
        tooltip: v.t(null, void 0, n(45828)),
        arrow: !1,
        isShowTooltip: !0,
        "data-name": "move-to-button"
      }, o.createElement(k.PopupMenuItem, {
        "data-name": "new-pane-above",
        label: v.t(null, void 0, n(40887)),
        onClick: function onClick() {
          r.unmergeSelectionUp();
        }
      }), o.createElement(k.PopupMenuItem, {
        "data-name": "new-pane-below",
        label: v.t(null, void 0, n(96712)),
        onClick: function onClick() {
          r.unmergeSelectionDown();
        }
      })), t && o.createElement(o.Fragment, null, o.createElement("div", {
        className: B.spacing
      }), o.createElement(x.ToolbarIconButton, {
        className: B.button,
        icon: manageDrawingsIcon,
        tooltip: v.t(null, void 0, n(72357)),
        "data-name": "manage-drawings-button",
        onClick: g
      }))));

      function g() {
        h;
      }
    }

    var W = n(54773),
        H = n(86942),
        V = n(10170),
        G = n(7809),
        U = n(23642);
    var Z = (K = "OBJECT_TREE", function (e) {
      return K + "__" + e;
    });
    var K;

    var Y = Z("SET_NODES"),
        $ = Z("SYNC_NODES"),
        q = Z("UPDATE_NODE"),
        J = Z("UPDATE_NODES"),
        Q = Z("RESET_TREE"),
        X = Z("SET_SELECTED_IDS"),
        ee = Z("DROP_SELECTION"),
        te = Z("SELECT_PREVIOUS"),
        ne = Z("SELECT_NEXT"),
        oe = Z("MULTI_SELECT_PREVIOUS"),
        re = Z("MULTI_SELECT_NEXT"),
        ie = Z("PROCESS_DROP_TARGET"),
        se = Z("UPDATE_DROP_TARGET"),
        le = Z("HIDE_DROP_TARGET"),
        ae = Z("START_MULTI_SELECT"),
        ce = Z("STOP_MULTI_SELECT"),
        ue = (Z("REMOVE_NODE"), Z("SET_FOCUSED_NODE")),
        de = Z("SCROLL_TO_ID"),
        he = Z("SET_IS_SELECTED"),
        ge = Z("SET_IS_EXPANDED"),
        me = Z("SET_DISABLED_NODES"),
        pe = Z("MOVE_NODES"),
        fe = (Z("START_DRAG"), Z("END_DRAG")),
        ve = function ve() {
      return {
        type: te
      };
    },
        be = function be() {
      return {
        type: ne
      };
    },
        ye = function ye() {
      return {
        type: oe
      };
    },
        _e = function _e() {
      return {
        type: re
      };
    },
        Se = function Se(e, t, n, o, r) {
      return {
        type: ie,
        dropTarget: e,
        dropType: t,
        isHoveredLeft: n,
        boundBox: o,
        isLastChild: r
      };
    },
        we = function we() {
      return {
        type: ee
      };
    },
        Ce = function Ce(e) {
      return {
        type: X,
        ids: e
      };
    },
        Te = function Te(e, t, n) {
      return {
        type: pe,
        ids: e,
        targetId: t,
        dropType: n
      };
    },
        Ee = function Ee() {
      return {
        type: ae
      };
    },
        Ie = function Ie() {
      return {
        type: ce
      };
    },
        Me = function Me(e) {
      return {
        type: ue,
        nodeId: e
      };
    },
        ke = function ke(e) {
      return {
        type: de,
        nodeId: e
      };
    },
        De = function De(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return {
        type: he,
        nodeId: e,
        isSelected: t,
        mode: n
      };
    },
        Ne = function Ne(e, t) {
      return {
        type: ge,
        nodeId: e,
        isExpanded: t
      };
    },
        Le = function Le(e) {
      return {
        type: me,
        ids: e
      };
    },
        xe = function xe() {
      return {
        type: fe
      };
    };

    var ze = n(77145);

    var je = function je(e) {
      return e.nodes;
    },
        Ae = function Ae(e) {
      return e.selection;
    },
        Re = function Re(e) {
      return e.dropTarget;
    },
        Oe = function Oe(e) {
      return e.expanded;
    },
        Be = function Be(e) {
      return e.scrollToId;
    },
        Fe = function Fe(e, t) {
      return t;
    },
        Pe = (0, ze.createSelector)([je, Fe], function (e, t) {
      return e[t];
    }),
        We = (0, ze.createSelector)([Ae, Fe], function (e, t) {
      return e.ids.includes(t);
    }),
        He = (0, ze.createSelector)([Oe, Fe], function (e, t) {
      return e.includes(t);
    }),
        Ve = (0, ze.createSelector)([function (e) {
      return e.disabled;
    }, Ae, Fe], function (e, t, n) {
      return !t.ids.includes(n) && e.includes(n);
    }),
        Ge = (0, ze.createSelector)(je, function (e) {
      return Object.keys(e);
    }),
        Ue = (0, ze.createSelector)(Ae, function (_ref13) {
      var e = _ref13.ids;
      return e;
    }),
        Ze = (0, ze.createSelector)(Ae, function (_ref14) {
      var e = _ref14.lastFocusedNodeId;
      return e;
    }),
        Ke = (0, ze.createSelector)(Ae, function (_ref15) {
      var e = _ref15.isMultiSelecting;
      return e;
    }),
        Ye = (0, ze.createSelector)([je, Ue], function (e, t) {
      return t.map(function (t) {
        return e[t];
      });
    }),
        $e = (0, ze.createSelector)(je, function (e) {
      return Object.values(e).filter(function (e) {
        return 0 === e.level;
      });
    }),
        qe = (0, ze.createSelector)([je, $e], function (e, t) {
      return t.reduce(function (t, n) {
        return [].concat(_toConsumableArray(t), _toConsumableArray(Je(e, (0, T.ensureDefined)(n))));
      }, []);
    });

    function Je(e, t) {
      var n = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = t.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var o = _step2.value;
          n.push(e[o]), n.push.apply(n, _toConsumableArray(Je(e, e[o])));
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

      return n;
    }

    var Qe = (0, ze.createSelector)([je, $e, Oe], function (e, t, n) {
      var o = new Set(n);
      return t.reduce(function (t, n) {
        return [].concat(_toConsumableArray(t), _toConsumableArray(et(e, (0, T.ensureDefined)(n), o)));
      }, []);
    }),
        Xe = (0, ze.createSelector)([je, Ue, Oe], function (e, t, n) {
      var o = new Set(n);
      return [{
        id: "drag-list",
        level: -1,
        children: t
      }].reduce(function (t, n) {
        return [].concat(_toConsumableArray(t), _toConsumableArray(et(e, (0, T.ensureDefined)(n), o)));
      }, []);
    });

    function et(e, t, n) {
      var o = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = t.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _r4 = _step3.value;
          var _t3 = e[_r4];
          void 0 !== _t3 && (o.push(_t3), n.has(_r4) && o.push.apply(o, _toConsumableArray(et(e, _t3, n))));
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

      return o;
    }

    function tt(e) {
      var _ref16, t, n, o, _e5, _t4;

      return regeneratorRuntime.wrap(function tt$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, S.call)(e);

            case 2:
              _ref16 = _context7.sent;
              t = _ref16.selectedIds;
              n = _ref16.nodes;
              o = {};

              for (_e5 = 0; _e5 < n.length; ++_e5) {
                _t4 = n[_e5];
                o[_t4.id] = _t4;
              }

              _context7.next = 9;
              return (0, S.put)(function (e) {
                return {
                  type: Y,
                  nodes: e
                };
              }(o));

            case 9:
              _context7.next = 11;
              return (0, S.put)(Ce(t));

            case 11:
              _context7.t1 = Ze;
              _context7.next = 14;
              return (0, S.select)();

            case 14:
              _context7.t2 = _context7.sent;
              _context7.t0 = !(0, _context7.t1)(_context7.t2);

              if (!_context7.t0) {
                _context7.next = 18;
                break;
              }

              _context7.t0 = t.length > 0;

            case 18:
              _context7.t3 = _context7.t0;

              if (!_context7.t3) {
                _context7.next = 24;
                break;
              }

              _context7.next = 22;
              return (0, S.put)(Me(t[0]));

            case 22:
              _context7.next = 24;
              return (0, S.put)(ke(t[0]));

            case 24:
            case "end":
              return _context7.stop();
          }
        }
      }, _marked);
    }

    function nt(e) {
      var _t5;

      return regeneratorRuntime.wrap(function nt$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, S.take)([ae, ce]);

            case 2:
              _context8.t0 = _context8.sent.type;
              _context8.t1 = ae;

              if (!(_context8.t0 === _context8.t1)) {
                _context8.next = 15;
                break;
              }

              _context8.t2 = Ge;
              _context8.next = 8;
              return (0, S.select)();

            case 8:
              _context8.t3 = _context8.sent;

              _context8.t4 = function (t) {
                return !e(t);
              };

              _t5 = (0, _context8.t2)(_context8.t3).filter(_context8.t4);
              _context8.next = 13;
              return (0, S.put)(Le(_t5));

            case 13:
              _context8.next = 17;
              break;

            case 15:
              _context8.next = 17;
              return (0, S.put)(Le([]));

            case 17:
              _context8.next = 0;
              break;

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _marked2);
    }

    function ot() {
      var _loop, _ret;

      return regeneratorRuntime.wrap(function ot$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _loop =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _loop() {
                var _ref17, e, t, n, o, r, i, s, l, a, c;

                return regeneratorRuntime.wrap(function _loop$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return (0, S.take)([re, oe]);

                      case 2:
                        _ref17 = _context9.sent;
                        e = _ref17.type;
                        _context9.next = 6;
                        return (0, S.select)();

                      case 6:
                        t = _context9.sent;
                        n = qe(t);
                        o = n.length;
                        r = Ze(t);
                        i = _toConsumableArray(Ue(t));
                        s = 1 === i.length && i[0] !== r;
                        l = n.findIndex(function (e) {
                          return e.id === (s ? i[0] : r);
                        });

                        if (!(e === oe && 0 === l || e === re && l === o - 1)) {
                          _context9.next = 15;
                          break;
                        }

                        return _context9.abrupt("return", "continue");

                      case 15:
                        a = ut(t, e === re ? "next" : "previous", n, l), c = a.id;

                        if (!(i.includes(c) && r)) {
                          _context9.next = 23;
                          break;
                        }

                        _context9.next = 19;
                        return (0, S.put)(De(r, !1, 1));

                      case 19:
                        _context9.next = 21;
                        return (0, S.put)(Me(c));

                      case 21:
                        _context9.next = 25;
                        break;

                      case 23:
                        _context9.next = 25;
                        return (0, S.put)(De(c, !0, 1));

                      case 25:
                        _context9.next = 27;
                        return (0, S.put)(ke(c));

                      case 27:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _loop);
              });

            case 1:
              return _context10.delegateYield(_loop(), "t0", 2);

            case 2:
              _ret = _context10.t0;

              if (!(_ret === "continue")) {
                _context10.next = 5;
                break;
              }

              return _context10.abrupt("continue", 5);

            case 5:
              _context10.next = 1;
              break;

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, _marked3);
    }

    function rt(e, t) {
      var _loop2, _ret2;

      return regeneratorRuntime.wrap(function rt$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _loop2 =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _loop2() {
                var _ref18, n, o, r, i, s, _e6, _t6, l, a, c, u;

                return regeneratorRuntime.wrap(function _loop2$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return (0, S.take)([ne, te]);

                      case 2:
                        _ref18 = _context11.sent;
                        n = _ref18.type;
                        _context11.next = 6;
                        return (0, S.select)();

                      case 6:
                        o = _context11.sent;
                        r = qe(o);
                        i = Ye(o);
                        s = Ze(o);

                        if (!(1 === i.length && i[0].id !== s && !s)) {
                          _context11.next = 20;
                          break;
                        }

                        if (!(n === ne)) {
                          _context11.next = 15;
                          break;
                        }

                        _context11.next = 14;
                        return (0, S.put)(Me(i[0].id));

                      case 14:
                        return _context11.abrupt("return", "continue");

                      case 15:
                        if (!(n === te)) {
                          _context11.next = 20;
                          break;
                        }

                        _e6 = r.findIndex(function (e) {
                          return e.id === i[0].id;
                        }), _t6 = ut(o, "previous", r, _e6);
                        _context11.next = 19;
                        return (0, S.put)(Me(_t6.id));

                      case 19:
                        return _context11.abrupt("return", "continue");

                      case 20:
                        l = r.findIndex(function (e) {
                          return e.id === s;
                        }), a = n === ne ? "next" : "previous", c = ut(o, a, r, l), u = c.id;

                        if (!e) {
                          _context11.next = 25;
                          break;
                        }

                        e([u], a);
                        _context11.next = 27;
                        break;

                      case 25:
                        _context11.next = 27;
                        return (0, S.put)(Ce([u]));

                      case 27:
                        t && t(u);
                        _context11.next = 30;
                        return (0, S.put)(Me(u));

                      case 30:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _loop2);
              });

            case 1:
              return _context12.delegateYield(_loop2(), "t0", 2);

            case 2:
              _ret2 = _context12.t0;

              if (!(_ret2 === "continue")) {
                _context12.next = 5;
                break;
              }

              return _context12.abrupt("continue", 5);

            case 5:
              _context12.next = 1;
              break;

            case 7:
            case "end":
              return _context12.stop();
          }
        }
      }, _marked4);
    }

    function it(e) {
      var t,
          _loop3,
          _args14 = arguments;

      return regeneratorRuntime.wrap(function it$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              t = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : function () {
                return !0;
              };
              _loop3 =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _loop3() {
                var _ref19, n, o, r, i, s, _e7, _n7, _r5, _e8, _n8, l;

                return regeneratorRuntime.wrap(function _loop3$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return (0, S.take)(he);

                      case 2:
                        _ref19 = _context13.sent;
                        n = _ref19.mode;
                        o = _ref19.nodeId;
                        r = _ref19.isSelected;
                        _context13.t0 = _toConsumableArray;
                        _context13.t1 = Ue;
                        _context13.next = 10;
                        return (0, S.select)();

                      case 10:
                        _context13.t2 = _context13.sent;
                        _context13.t3 = (0, _context13.t1)(_context13.t2);
                        i = (0, _context13.t0)(_context13.t3);
                        _context13.t4 = qe;
                        _context13.next = 16;
                        return (0, S.select)();

                      case 16:
                        _context13.t5 = _context13.sent;
                        s = (0, _context13.t4)(_context13.t5);

                        if (!(1 === n)) {
                          _context13.next = 22;
                          break;
                        }

                        r ? i.push(o) : i.splice(i.indexOf(o), 1);
                        _context13.next = 35;
                        break;

                      case 22:
                        if (!(2 === n && i.length > 0)) {
                          _context13.next = 34;
                          break;
                        }

                        _context13.t6 = Ze;
                        _context13.next = 26;
                        return (0, S.select)();

                      case 26:
                        _context13.t7 = _context13.sent;
                        _e7 = (0, _context13.t6)(_context13.t7);
                        _n7 = s.findIndex(function (t) {
                          return t.id === _e7;
                        });
                        -1 === _n7 && (_n7 = s.reduce(function (e, t, n) {
                          return i.includes(t.id) ? n : e;
                        }, -1));
                        _r5 = s.findIndex(function (e) {
                          return e.id === o;
                        });
                        if (_n7 !== _r5) for (_e8 = Math.min(_n7, _r5); _e8 <= Math.max(_n7, _r5); _e8++) {
                          _n8 = s[_e8].id;
                          !i.includes(_n8) && t(_n8) && i.push(_n8);
                        }
                        _context13.next = 35;
                        break;

                      case 34:
                        i = o ? [o] : [];

                      case 35:
                        l = new Set(i);
                        i = s.reduce(function (e, t) {
                          return l.has(t.id) && e.push(t.id), e;
                        }, []);

                        if (!e) {
                          _context13.next = 41;
                          break;
                        }

                        e(i);
                        _context13.next = 43;
                        break;

                      case 41:
                        _context13.next = 43;
                        return (0, S.put)(Ce(i));

                      case 43:
                        _context13.next = 45;
                        return (0, S.put)(Me(o));

                      case 45:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _loop3);
              });

            case 2:
              return _context14.delegateYield(_loop3(), "t0", 3);

            case 3:
              _context14.next = 2;
              break;

            case 5:
            case "end":
              return _context14.stop();
          }
        }
      }, _marked5);
    }

    function st() {
      var e,
          t,
          n,
          o,
          r,
          i,
          s,
          l,
          a,
          c,
          u,
          d,
          h,
          _args15 = arguments;
      return regeneratorRuntime.wrap(function st$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : function () {
                return !0;
              };
              t = _args15.length > 1 ? _args15[1] : undefined;
              n = t.dropTarget;
              o = t.dropType;
              r = t.isHoveredLeft;
              i = t.boundBox;
              s = t.isLastChild;
              _context15.t0 = Re;
              _context15.next = 10;
              return (0, S.select)();

            case 10:
              _context15.t1 = _context15.sent;
              l = (0, _context15.t0)(_context15.t1);
              _context15.t2 = Pe;
              _context15.next = 15;
              return (0, S.select)();

            case 15:
              _context15.t3 = _context15.sent;
              _context15.t4 = (0, T.ensureDefined)(n.parentId);
              a = (0, _context15.t2)(_context15.t3, _context15.t4);
              c = s && "after" === o;
              _context15.t5 = Ye;
              _context15.next = 22;
              return (0, S.select)();

            case 22:
              _context15.t6 = _context15.sent;
              u = (0, _context15.t5)(_context15.t6);
              d = !c || !r && e(u, n, o) ? n : a;
              h = l.node && l.node.id !== d.id || l.dropType !== o;

              if (!u.map(function (e) {
                return e.id;
              }).includes(d.id)) {
                _context15.next = 31;
                break;
              }

              _context15.next = 29;
              return (0, S.put)({
                type: le
              });

            case 29:
              _context15.next = 35;
              break;

            case 31:
              _context15.t7 = h && e(u, d, o);

              if (!_context15.t7) {
                _context15.next = 35;
                break;
              }

              _context15.next = 35;
              return (0, S.put)(function (e, t, n) {
                return {
                  type: se,
                  node: e,
                  dropType: t,
                  boundBox: n
                };
              }(d, o, i));

            case 35:
            case "end":
              return _context15.stop();
          }
        }
      }, _marked6);
    }

    function lt(e) {
      return regeneratorRuntime.wrap(function lt$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return (0, S.throttle)(0, ie, st, e);

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _marked7);
    }

    function at(e) {
      var _t7, _Re, _n9, o, _r6, _e9;

      return regeneratorRuntime.wrap(function at$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return (0, S.take)(ee);

            case 2:
              _context17.t0 = Ye;
              _context17.next = 5;
              return (0, S.select)();

            case 5:
              _context17.t1 = _context17.sent;
              _t7 = (0, _context17.t0)(_context17.t1);
              _context17.t2 = Re;
              _context17.next = 10;
              return (0, S.select)();

            case 10:
              _context17.t3 = _context17.sent;
              _Re = (0, _context17.t2)(_context17.t3);
              _n9 = _Re.node;
              o = _Re.dropType;

              if (!(_n9 && o)) {
                _context17.next = 24;
                break;
              }

              _r6 = new CustomEvent("tree-node-drop", {
                detail: {
                  nodes: _t7,
                  target: _n9.id,
                  type: o
                }
              });

              if (!(e && e(_r6), !_r6.defaultPrevented)) {
                _context17.next = 24;
                break;
              }

              _context17.t4 = Ue;
              _context17.next = 20;
              return (0, S.select)();

            case 20:
              _context17.t5 = _context17.sent;
              _e9 = (0, _context17.t4)(_context17.t5);
              _context17.next = 24;
              return (0, S.put)(Te(_e9, _n9.id, o));

            case 24:
              _context17.next = 0;
              break;

            case 26:
            case "end":
              return _context17.stop();
          }
        }
      }, _marked8);
    }

    function ct(e) {
      return regeneratorRuntime.wrap(function ct$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return (0, S.take)(pe);

            case 2:
              _context18.t0 = e;
              _context18.t1 = je;
              _context18.next = 6;
              return (0, S.select)();

            case 6:
              _context18.t2 = _context18.sent;
              _context18.t3 = (0, _context18.t1)(_context18.t2);
              (0, _context18.t0)(_context18.t3);

            case 9:
              _context18.next = 0;
              break;

            case 11:
            case "end":
              return _context18.stop();
          }
        }
      }, _marked9);
    }

    function ut(e, t, n, o) {
      var r = n.length;
      var i;
      -1 === o && "previous" === t && (o = r);
      var s = 0;

      for (; !i || Math.abs(s) < r && (l = i).level > 1 && !He(e, (0, T.ensureDefined)(l.parentId));) {
        s += "next" === t ? 1 : -1, i = n[(o + s + r) % r];
      }

      var l;
      return i;
    }

    function dt() {
      var e,
          t,
          n,
          o,
          r,
          i,
          s,
          l,
          a,
          c,
          _e10,
          _iteratorNormalCompletion4,
          _didIteratorError4,
          _iteratorError4,
          _iterator4,
          _step4,
          _t8,
          _args19 = arguments;

      return regeneratorRuntime.wrap(function dt$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : {};
              t = e.saga, n = e.onDrop, o = e.canMove, r = e.onMove, i = e.onSelect, s = e.onKeyboardSelect, l = e.initState, a = e.canBeAddedToSelection, c = [(0, S.fork)(lt, o), (0, S.fork)(at, n), (0, S.fork)(it, i, a), (0, S.fork)(rt, i, s), (0, S.fork)(ot)];
              t && c.push((0, S.fork)(t)), r && c.push((0, S.fork)(ct, r)), a && c.push((0, S.fork)(nt, a));

            case 3:
              _context19.t0 = l;

              if (!_context19.t0) {
                _context19.next = 7;
                break;
              }

              _context19.next = 7;
              return (0, S.call)(tt, l);

            case 7:
              _context19.next = 9;
              return (0, S.all)(c);

            case 9:
              _e10 = _context19.sent;
              _context19.next = 12;
              return (0, S.take)(Q);

            case 12:
              _iteratorNormalCompletion4 = true;
              _didIteratorError4 = false;
              _iteratorError4 = undefined;
              _context19.prev = 15;
              _iterator4 = _e10[Symbol.iterator]();

            case 17:
              if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                _context19.next = 24;
                break;
              }

              _t8 = _step4.value;
              _context19.next = 21;
              return (0, S.cancel)(_t8);

            case 21:
              _iteratorNormalCompletion4 = true;
              _context19.next = 17;
              break;

            case 24:
              _context19.next = 30;
              break;

            case 26:
              _context19.prev = 26;
              _context19.t1 = _context19["catch"](15);
              _didIteratorError4 = true;
              _iteratorError4 = _context19.t1;

            case 30:
              _context19.prev = 30;
              _context19.prev = 31;

              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }

            case 33:
              _context19.prev = 33;

              if (!_didIteratorError4) {
                _context19.next = 36;
                break;
              }

              throw _iteratorError4;

            case 36:
              return _context19.finish(33);

            case 37:
              return _context19.finish(30);

            case 38:
              _context19.next = 3;
              break;

            case 40:
            case "end":
              return _context19.stop();
          }
        }
      }, _marked10, null, [[15, 26, 30, 38], [31,, 33, 37]]);
    }

    var ht = n(91622),
        gt = n(1722);
    var mt = (0, l.getLogger)("Platform.GUI.ObjectTree.CallApi");
    var pt = {
      ids: [],
      lastFocusedNodeId: void 0,
      isMultiSelecting: !1
    };
    var ft = {
      node: void 0,
      dropType: void 0,
      boundBox: void 0
    };
    var vt = (0, ht.combineReducers)({
      nodes: function nodes() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 ? arguments[1] : undefined;

        switch (t.type) {
          case Y:
            return t.nodes;

          case $:
            {
              var _n10 = t.nodes,
                  o = _n10.map(function (e) {
                return e.id;
              }),
                  _r7 = _objectSpread({}, e);

              var _loop4 = function _loop4() {
                var t = _Object$keys[_i2];

                if (!o.includes(t)) {
                  var _e12 = _r7[t].parentId;
                  _e12 && (_r7[_e12] = _objectSpread({}, _r7[_e12], {
                    children: _r7[_e12].children.filter(function (e) {
                      return e !== t;
                    })
                  })), delete _r7[t];
                }
              };

              for (var _i2 = 0, _Object$keys = Object.keys(e); _i2 < _Object$keys.length; _i2++) {
                _loop4();
              }

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = _n10[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var _e11 = _step5.value;
                  var _t9 = _e11.id;

                  if (_r7.hasOwnProperty(_t9)) {
                    !(0, gt.deepEquals)(_r7[_t9].children, _e11.children)[0] && (_r7[_t9] = _objectSpread({}, _r7[_t9], {
                      children: _toConsumableArray(_e11.children)
                    }));
                  } else {
                    _r7[_t9] = _e11;
                    var _n11 = _e11.parentId;
                    if (_n11 && !_r7[_n11].children.includes(_t9)) throw new Error("Not implemented");
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                    _iterator5["return"]();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }

              return _r7;
            }

          case q:
            {
              var _n12 = t.type,
                  _o5 = t.nodeId,
                  _r8 = _objectWithoutProperties(t, ["type", "nodeId"]);

              return _objectSpread({}, e, _defineProperty({}, _o5, _objectSpread({}, e[_o5], {}, _r8)));
            }

          case J:
            {
              var _n13 = t.nodes,
                  _o6 = _objectSpread({}, e);

              return Object.keys(_n13).forEach(function (e) {
                _o6[e] = _objectSpread({}, _o6[e], {}, _n13[e]);
              }), _objectSpread({}, e, {}, _o6);
            }

          case pe:
            {
              var _n14 = t.ids,
                  _o7 = t.targetId,
                  _r9 = t.dropType,
                  _i3 = (0, T.ensureDefined)(e[_o7].parentId),
                  _s2 = e[_i3],
                  _l = {};

              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                var _loop5 = function _loop5() {
                  var t = _step6.value;
                  var n = e[t];

                  if (n.parentId) {
                    var _o8 = _l[n.parentId] || e[n.parentId];

                    _l[n.parentId] = _objectSpread({}, _o8, {
                      children: _o8.children.filter(function (e) {
                        return e !== t;
                      })
                    });
                  }

                  _l[t] = _objectSpread({}, n, {
                    parentId: _i3,
                    level: _s2.level + 1
                  });
                };

                for (var _iterator6 = _n14[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  _loop5();
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                    _iterator6["return"]();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }

              var _a = _s2.children.filter(function (e) {
                return !_n14.includes(e);
              });

              return _a.splice.apply(_a, [function (e, t, n) {
                switch (n) {
                  case "before":
                    return e.indexOf((0, T.ensureDefined)(t));

                  case "inside":
                    return e.length;

                  case "after":
                    return e.indexOf((0, T.ensureDefined)(t)) + 1;

                  default:
                    return 0;
                }
              }(_a, _o7, _r9), 0].concat(_toConsumableArray(_n14))), _l[_i3] = _objectSpread({}, e[_i3], {
                children: _a,
                isExpanded: !0
              }), _objectSpread({}, e, {}, _l);
            }

          default:
            return e;
        }
      },
      selection: function selection() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pt;
        var t = arguments.length > 1 ? arguments[1] : undefined;

        switch (t.type) {
          case X:
            {
              var _n15 = t.ids;
              return _objectSpread({}, e, {
                ids: _n15,
                lastFocusedNodeId: _n15.length > 0 ? e.lastFocusedNodeId : void 0
              });
            }

          case ae:
            return _objectSpread({}, e, {
              isMultiSelecting: !0
            });

          case ce:
            return _objectSpread({}, e, {
              isMultiSelecting: !1
            });

          case ue:
            return _objectSpread({}, e, {
              lastFocusedNodeId: t.nodeId
            });

          case $:
            {
              var _n16 = new Set(t.nodes.map(function (e) {
                return e.id;
              }));

              return e.lastFocusedNodeId && !_n16.has(e.lastFocusedNodeId) && delete e.lastFocusedNodeId, _objectSpread({}, e, {
                ids: e.ids.filter(function (e) {
                  return _n16.has(e);
                })
              });
            }

          default:
            return e;
        }
      },
      dropTarget: function dropTarget() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ft;
        var t = arguments.length > 1 ? arguments[1] : undefined;

        switch (t.type) {
          case se:
            {
              var _n17 = t.node,
                  o = t.dropType,
                  _r10 = t.boundBox;
              return _objectSpread({}, e, {
                node: _n17,
                dropType: o,
                boundBox: _r10
              });
            }

          case le:
          case fe:
          case Q:
            return _objectSpread({}, ft);

          default:
            return e;
        }
      },
      expanded: function expanded() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 ? arguments[1] : undefined;

        if (t.type === ge) {
          var _n18 = t.nodeId,
              o = t.isExpanded;
          if (o) return [].concat(_toConsumableArray(e), [_n18]);

          var _r11 = _toConsumableArray(e);

          return _r11.splice(e.indexOf(_n18), 1), _r11;
        }

        return e;
      },
      disabled: function disabled() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 ? arguments[1] : undefined;
        return t.type === me ? _toConsumableArray(t.ids) : e;
      },
      scrollToId: function scrollToId() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        return t.type === de ? null === t.nodeId ? null : {
          id: t.nodeId
        } : e;
      }
    });

    var bt = n(40933),
        yt = n(20037),
        _t = n(49483);

    var St = n(42357),
        wt = n(98314),
        Ct = n(47201),
        Tt = n(70412);
    var Et = o.createContext({
      size: 0,
      smallSizeTreeNodeAction: 1
    }),
        It = (_It = {}, _defineProperty(_It, C.Modifiers.Mod, 1), _defineProperty(_It, C.Modifiers.Shift, 2), _It);
    var Mt = n(69533),
        kt = n(75564);

    var Dt = function Dt() {};

    var Nt =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(Nt, _o$PureComponent);

      function Nt() {
        var _this;

        _classCallCheck(this, Nt);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Nt).apply(this, arguments)), _this._ref = null, _this._handleRef = function (e) {
          _this._ref = e;
          var _this$props = _this.props,
              t = _this$props.connectDragSource,
              n = _this$props.connectDropTarget,
              o = _this$props.connectDragPreview;
          (0, T.ensureDefined)(n)(_this._ref), (0, T.ensureDefined)(t)(_this._ref), (0, T.ensureDefined)(o)((0, wt.getEmptyImage)(), {
            captureDraggingState: !0
          });
        }, _this._handleTouchStart = function (e) {
          var t = function t(e, _t10) {
            var n = function (e, t) {
              try {
                var _n19 = document.createEvent("TouchEvent");

                return _n19.initTouchEvent(e, !0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, t.touches, t.targetTouches, t.changedTouches), _n19;
              } catch (e) {
                return null;
              }
            }(e, _t10);

            if (n) return n;
            var o = Array.from(_t10.changedTouches),
                r = Array.from(_t10.touches),
                i = Array.from(_t10.targetTouches);
            return new TouchEvent(e, {
              bubbles: !0,
              changedTouches: o,
              touches: r,
              targetTouches: i
            });
          },
              n = e.target;

          if (n instanceof Element) {
            var _e13 = function _e13(e) {
              var o = e;

              if (!n.isConnected) {
                o.preventDefault();

                var _e14 = t("touchmove", o);

                document.body.dispatchEvent(_e14);
              }
            },
                _o9 = function _o9(r) {
              var i = r;

              if (!n.isConnected) {
                i.preventDefault();

                var _e15 = t("touchend", i);

                document.body.dispatchEvent(_e15);
              }

              n.removeEventListener("touchend", _o9), n.removeEventListener("touchmove", _e13);
            };

            n.addEventListener("touchend", _o9), n.addEventListener("touchmove", _e13);
          }
        };
        return _this;
      }

      _createClass(Nt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e;
          null === (e = this._ref) || void 0 === e || e.addEventListener("touchstart", this._handleTouchStart);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e;
          null === (e = this._ref) || void 0 === e || e.removeEventListener("touchstart", this._handleTouchStart);
        }
      }, {
        key: "render",
        value: function render() {
          return o.createElement(Lt, _objectSpread({}, this.props, {
            reference: this._handleRef
          }));
        }
      }, {
        key: "getNode",
        value: function getNode() {
          return (0, T.ensureNotNull)(this._ref);
        }
      }]);

      return Nt;
    }(o.PureComponent);

    var Lt = function Lt(e) {
      var t = e.id,
          n = e.isSelected,
          r = e.isOffset,
          i = e.isExpandable,
          s = e.setIsSelected,
          l = e.isDisabled,
          a = e.isExpanded,
          c = e.onClick,
          u = e.parentId,
          d = e.setIsExpanded,
          h = e.reference,
          g = e.isFirstListItem,
          m = e.isLastListItem,
          p = e.nodeRenderer,
          _e$isChildOfSelected = e.isChildOfSelected,
          f = _e$isChildOfSelected === void 0 ? !1 : _e$isChildOfSelected,
          _ref20 = (0, o.useContext)(Et),
          v = _ref20.size,
          b = _ref20.smallSizeTreeNodeAction,
          y = (0, o.useRef)(null),
          _ = (0, Ct.createSafeMulticastEventHandler)(function (e) {
        return y.current = e;
      }, h);

      var _ref21 = (0, Tt.useHover)(),
          _ref22 = _slicedToArray(_ref21, 2),
          S = _ref22[0],
          w = _ref22[1];

      return (_t.CheckMobile.any() || _t.CheckMobile.isIPad()) && (S = n, w = {
        onMouseOut: Dt,
        onMouseOver: Dt
      }), o.createElement("div", _objectSpread({
        className: E(kt.wrap, n && kt.selected, f && kt.childOfSelected, l && kt.disabled, i && kt.expandable),
        onClick: 1 === v && 0 === b ? T : function (e) {
          if (e.defaultPrevented) return;
          var o = It[(0, C.modifiersFromEvent)(e)] || 0;
          !l && s && s(t, !n, o);
          c && 0 === o && c(e, t);
        },
        onContextMenu: T,
        ref: _
      }, w), i && o.createElement(M.Icon, {
        icon: Mt,
        className: E(kt.expandHandle, a && kt.expanded),
        onClick: function onClick(e) {
          e.preventDefault(), i && d(t, !a);
        },
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
        }
      }), p({
        id: t,
        isOffset: r,
        parentId: u,
        isDisabled: l,
        isSelected: n,
        isChildOfSelected: f,
        isHovered: S,
        isExpanded: a,
        isFirstListItem: g,
        isLastListItem: m
      }));

      function T() {
        l || n || !s || s(t, !0);
      }
    },
        xt = o.createContext({});

    function zt(e, t) {
      var n = t.id,
          o = Pe(e, n),
          r = We(e, n);
      var i = !1,
          s = o.parentId;

      for (; s && !i;) {
        i = We(e, s), s = Pe(e, s).parentId;
      }

      return _objectSpread({}, o, {
        isSelected: r,
        isChildOfSelected: i,
        isExpanded: o.children.length > 0 && He(e, n),
        isExpandable: o.children.length > 0,
        isDisabled: Ve(e, n)
      });
    }

    function jt(e) {
      return (0, ht.bindActionCreators)({
        setIsExpanded: Ne,
        processDropTarget: Se,
        dropSelection: we,
        selectNext: be,
        selectPrevious: ve,
        setIsSelected: De,
        endDrag: xe
      }, e);
    }

    var At = (0, H.connect)(zt, jt, null, {
      context: xt
    })(function (e) {
      var t = (0, o.useRef)(null),
          _ref23 = (0, St.useDrag)({
        type: "node",
        item: function item(t) {
          var n = e.id,
              o = e.isDisabled,
              r = e.isSelected;
          return o || r || e.setIsSelected(n, !0), e;
        },
        end: function end(e) {
          e.endDrag();
        }
      }),
          _ref24 = _slicedToArray(_ref23, 3),
          n = _ref24[1],
          r = _ref24[2],
          _ref25 = (0, bt.useDrop)({
        accept: "node",
        hover: function hover(n, o) {
          var r = t.current;
          if (!r) return;
          var i = r.getNode(),
              s = i.getBoundingClientRect(),
              l = s.bottom - s.top,
              a = o.getClientOffset();

          if (a) {
            var _t11 = a.y - s.top;

            var _n20, _o10;

            if (_n20 = 0 === e.children.length ? _t11 < l / 2 ? "before" : "after" : _t11 < l / 3 ? "before" : e.isExpanded || _t11 >= l / 3 && _t11 < 2 * l / 3 ? "inside" : "after", void 0 !== e.getContainerElement) {
              var _t12 = e.getContainerElement().getBoundingClientRect();

              _o10 = {
                top: s.top - _t12.top,
                left: s.left - _t12.left,
                bottom: s.top - _t12.top + s.height,
                right: s.left - _t12.left + s.width,
                height: s.height,
                width: s.width
              };
            } else _o10 = {
              top: i.offsetTop,
              left: i.offsetLeft,
              bottom: i.offsetTop + i.offsetHeight,
              right: i.offsetLeft + i.offsetWidth,
              height: i.offsetHeight,
              width: i.offsetWidth
            };

            e.processDropTarget(e, _n20, a.x - s.left < 48, _o10, e.isLastChild);
          }
        }
      }),
          _ref26 = _slicedToArray(_ref25, 2),
          i = _ref26[1];

      return o.createElement(Nt, _objectSpread({}, e, {
        connectDragSource: n,
        connectDropTarget: i,
        connectDragPreview: r,
        ref: t
      }));
    }),
        Rt = (0, H.connect)(zt, jt, null, {
      context: xt
    })(Lt);
    var Ot = n(35749),
        Bt = n(85783),
        Ft = n(65718);

    function Pt(e) {
      var t = e(),
          n = (0, o.useRef)(t);
      n.current = t;

      var _ref27 = (0, o.useState)(n.current),
          _ref28 = _slicedToArray(_ref27, 2),
          r = _ref28[0],
          i = _ref28[1],
          s = (0, o.useRef)(null);

      return (0, o.useEffect)(function () {
        null === s.current && (s.current = requestAnimationFrame(function () {
          s.current = null, i(n.current);
        }));
      }), (0, o.useEffect)(function () {
        return function () {
          s.current && cancelAnimationFrame(s.current);
        };
      }, []), r;
    }

    function Wt(e) {
      var t = e.dropTargetOffset,
          n = e.mousePosition;
      if (!t) return {
        display: "none"
      };
      var o = t.x,
          r = t.y,
          i = n && t ? n.y - t.y : 0,
          s = "translate(".concat(o + (n && t ? n.x - t.x : 0), "px, ").concat(r + i, "px)");
      return {
        transform: s,
        WebkitTransform: s
      };
    }

    var Ht = {
      top: 0,
      left: 0,
      position: "fixed",
      pointerEvents: "none",
      zIndex: 100,
      opacity: .5,
      width: 300,
      backgroundColor: "red"
    };

    function Vt(e) {
      return {
        isDragging: e.isDragging() && "node" === e.getItemType(),
        mousePosition: e.getClientOffset(),
        dropTargetOffset: e.getSourceClientOffset()
      };
    }

    var Gt = (0, H.connect)(function (e) {
      return {
        items: Xe(e)
      };
    }, null, null, {
      context: xt
    })(function (e) {
      var t = e.items,
          n = e.isDragging,
          r = e.nodeRenderer,
          i = e.dragPreviewRenderer;
      return Pt(function () {
        return n ? o.createElement(Ft.Portal, null, o.createElement("div", {
          style: _objectSpread({}, Ht, {}, Wt(e))
        }, t.map(function (e) {
          if (i) {
            var _t13 = i;
            return o.createElement(_t13, _objectSpread({
              key: e.id
            }, e));
          }

          return o.createElement(Rt, {
            id: e.id,
            key: e.id,
            nodeRenderer: r,
            isDragPreview: !0,
            isOffset: e.level > 1
          });
        }))) : null;
      });
    });

    function Ut(e) {
      return o.createElement(Gt, _objectSpread({}, e, {}, (0, Bt.useDragLayer)(Vt)));
    }

    var Zt = n(3085),
        Kt = n(33127);
    var Yt = o.forwardRef(function (e, t) {
      var n = (0, o.useRef)(null);
      return e.connectDropTarget(n), (0, o.useImperativeHandle)(t, function () {
        return {
          getNode: function getNode() {
            return (0, T.ensureNotNull)(n.current);
          }
        };
      }, []), o.createElement("div", {
        ref: n,
        style: {
          height: "100%",
          width: "100%"
        }
      });
    });

    function $t(e) {
      var t = (0, o.useRef)(null),
          _ref29 = (0, bt.useDrop)({
        accept: "node",
        hover: function hover(n, o) {
          if (!t.current) return;
          var r = o.getClientOffset();
          if (null === r) return;
          var i = e.getOrderedNodes();
          if (0 === i.length) return;
          var s = t.current.getNode().getBoundingClientRect(),
              l = e.getContainerElement().getBoundingClientRect();

          if ("first" === e.type) {
            var _t14 = {
              top: s.top - l.top + s.height,
              left: s.left - l.left,
              bottom: s.top - l.top + s.height,
              right: s.left - l.left + s.width,
              height: 0,
              width: s.width
            };
            e.processDropTarget(i[0], "before", !1, _t14, !1);
          }

          if ("last" === e.type) {
            var _t15 = r.x - s.left < 48,
                _n21 = i[i.length - 1],
                _o11 = _t15 && 2 === _n21.level ? (0, T.ensureDefined)(i.find(function (e) {
              return e.id === _n21.parentId;
            })) : _n21,
                _a2 = {
              top: s.top - l.top,
              left: s.left - l.left,
              bottom: s.top - l.top,
              right: s.left - l.left + s.width,
              height: s.height,
              width: s.width
            };

            e.processDropTarget(_o11, "after", _t15, _a2, !1);
          }
        }
      }),
          _ref30 = _slicedToArray(_ref29, 2),
          n = _ref30[1];

      return o.createElement(Yt, _objectSpread({}, e, {
        connectDropTarget: n,
        ref: t
      }));
    }

    var qt = o.createContext({
      isOver: !1,
      transform: void 0
    });
    var Jt = n(23490);

    function Qt(e) {
      var t = e.dropType,
          n = e.boundBox,
          _ref31 = (0, T.ensureDefined)(n),
          o = _ref31.top,
          r = _ref31.bottom,
          i = _ref31.left;

      return [i, "before" === t || "inside" === t ? o : r];
    }

    function Xt(e) {
      return {
        isDragging: e.isDragging()
      };
    }

    var en = (0, H.connect)(function (e) {
      var _Re2 = Re(e),
          t = _Re2.boundBox,
          n = _Re2.dropType,
          o = _Re2.node;

      return {
        boundBox: t,
        dropType: n,
        level: o ? o.level : void 0
      };
    }, null, null, {
      context: xt
    })(function (e) {
      var t = e.dropType,
          n = e.boundBox,
          r = e.isDragging,
          i = e.level,
          _e$transform = e.transform,
          s = _e$transform === void 0 ? Qt : _e$transform;
      return Pt(function () {
        var _l2;

        if (!r || !t || !n) return null;

        var l = (_l2 = {}, _defineProperty(_l2, Jt.dropTarget, "inside" !== t), _defineProperty(_l2, Jt.dropTargetInside, "inside" === t), _l2),
            a = n.width,
            c = n.height,
            _s3 = s(e),
            _s4 = _slicedToArray(_s3, 2),
            u = _s4[0],
            d = _s4[1],
            h = "translate(".concat(u, "px, ").concat(d, "px)");

        return o.createElement("div", {
          className: E(l),
          style: {
            position: "absolute",
            transform: h,
            WebkitTransform: h,
            top: 0,
            left: 2 === i ? "46px" : 0,
            width: 2 === i ? a - 46 + "px" : a,
            height: "inside" === t ? c : "2px"
          }
        });
      });
    });

    function tn(e) {
      var _ref32 = (0, Bt.useDragLayer)(Xt),
          t = _ref32.isDragging;

      return o.createElement(en, _objectSpread({}, e, {
        isDragging: t
      }));
    }

    var nn = o.forwardRef(function (e, t) {
      var n = (0, o.useContext)(qt);
      return o.createElement("div", _objectSpread({}, e, {
        ref: t
      }), e.children, n.isOver && o.createElement(tn, {
        transform: n.transform
      }));
    });
    var on = n(38223),
        rn = n(76106);
    var sn = 38 + C.Modifiers.Shift,
        ln = 40 + C.Modifiers.Shift;
    var an = o.forwardRef(function (e, t) {
      var n = e.navigationKeys,
          r = e.renderList,
          i = e.stopMultiSelect,
          s = e.startMultiSelect,
          l = e.isMultiSelecting,
          a = e.nodeRenderer,
          c = e.dragPreviewRenderer,
          u = e.className,
          d = e.connectDropTarget,
          h = e.readOnly,
          g = e.onClick,
          m = e.dropLayerTransform,
          p = e.setFocusedNode,
          f = e.scrollToId,
          v = e.rowHeight,
          b = e.onMultiSelectPrevious,
          y = e.onMultiSelectNext,
          _ = e.onMoveCursorToNext,
          S = e.onMoveCursorToPrevious,
          w = e.onKeyDown,
          E = e.outerRef,
          M = e.width,
          k = e.height,
          D = e.isOver,
          N = e.processDropTarget,
          x = e.autofocus,
          z = (0, o.useContext)(L),
          A = (0, o.useRef)(null);
      (0, o.useEffect)(function () {
        var e;
        x && (null === (e = A.current) || void 0 === e || e.focus());
      }, []), (0, o.useEffect)(function () {
        var e = function e(_e16) {
          [C.Modifiers.Mod, C.Modifiers.Shift].includes((0, C.modifiersFromEvent)(_e16)) && s();
        },
            t = function t(e) {
          l && ![C.Modifiers.Mod, C.Modifiers.Shift].includes((0, C.modifiersFromEvent)(e)) && i();
        };

        return document.addEventListener("keydown", e), document.addEventListener("keyup", t), document.addEventListener("mousemove", t), function () {
          document.removeEventListener("keydown", e), document.removeEventListener("keyup", t), document.removeEventListener("mousemove", t);
        };
      }, [l]), function (e) {
        (0, o.useEffect)(function () {
          if (_t.isEdge) {
            var _t16 = null;

            var _n22 = (0, T.ensureNotNull)(e.current),
                _o12 = function _o12(e) {
              if (e.target instanceof Element) {
                var _n23 = (0, T.ensureNotNull)(e.target.closest("[draggable]"));

                _n23 instanceof HTMLElement && (_n23.style.opacity = "0", _t16 = requestAnimationFrame(function () {
                  return _n23.style.opacity = "1";
                }));
              }
            };

            return _n22.addEventListener("dragstart", _o12), function () {
              _n22.removeEventListener("dragstart", _o12), null !== _t16 && cancelAnimationFrame(_t16);
            };
          }

          return function () {};
        }, []);
      }(A);
      var R = (0, o.useCallback)(function () {
        return (0, T.ensureNotNull)($.current);
      }, []),
          O = (0, o.useCallback)(function () {
        return r;
      }, [r]),
          B = (0, o.useMemo)(function () {
        var e = h ? Rt : At,
            t = [];
        var n;
        t.push({
          type: "padding",
          node: o.createElement($t, {
            type: "first",
            key: "padding-top",
            getContainerElement: R,
            getOrderedNodes: O,
            processDropTarget: N
          })
        });

        for (var _i4 = 0; _i4 < r.length; _i4++) {
          var _s5 = r[_i4];
          1 === _s5.level && (void 0 !== n && n !== _s5.parentId && t.push({
            type: "separator",
            node: o.createElement("div", {
              key: n + "_separator",
              className: rn.separator
            })
          }), n = _s5.parentId), t.push({
            type: "node",
            node: o.createElement(e, {
              id: _s5.id,
              key: _s5.id,
              isFirstListItem: 0 === _i4,
              isLastListItem: _i4 === r.length - 1,
              isExpandable: _s5.children.length > 0,
              nodeRenderer: a,
              readOnly: h,
              onClick: g,
              isOffset: _s5.level > 1,
              getContainerElement: R
            })
          });
        }

        return t.push({
          type: "padding",
          node: o.createElement($t, {
            type: "last",
            key: "padding-bottom",
            getContainerElement: R,
            getOrderedNodes: O,
            processDropTarget: N
          })
        }), t;
      }, [r]),
          F = (0, o.useRef)([]);
      F.current = B;
      var P = (0, o.useCallback)(function (e) {
        var t = e.style;
        var n = e.index;
        return n === F.current.length - 1 && (t = _objectSpread({}, t, {
          bottom: 0,
          minHeight: t.height
        }), delete t.height), o.createElement("div", {
          style: t
        }, F.current[n].node);
      }, []),
          W = (0, o.useCallback)(function (e) {
        var t = F.current[e];
        return "padding" === t.type ? 6 : "function" == typeof v ? v(e, t) : v;
      }, [v]),
          H = (0, o.useCallback)(function (e) {
        return (0, T.ensure)(F.current[e].node.key);
      }, []),
          V = (0, o.useMemo)(function () {
        return null === f ? {
          index: -1
        } : {
          index: F.current.findIndex(function (e) {
            return e.node.key === f.id;
          })
        };
      }, [f]);
      d(A);

      var _ref33 = (0, Kt.useOverlayScroll)(),
          _ref34 = _slicedToArray(_ref33, 4),
          G = _ref34[0],
          U = _ref34[1],
          Z = _ref34[2],
          K = _ref34[3],
          Y = (0, o.useRef)(null);

      (0, o.useEffect)(function () {
        return (0, T.ensureNotNull)(Y.current).resetAfterIndex(0, !0);
      }, [B]), (0, o.useEffect)(function () {
        return (0, T.ensureNotNull)(Y.current).scrollToItem(V.index);
      }, [V]);
      var $ = (0, o.useRef)(null),
          q = (0, o.useMemo)(function () {
        return {
          isOver: D,
          transform: m
        };
      }, [D, m]),
          J = (0, o.useRef)(null),
          Q = (0, o.useRef)({
        startScroll: function startScroll(e) {
          var t = function t() {
            null !== Z.current && (J.current = requestAnimationFrame(t), Z.current.scrollBy({
              top: e
            }));
          };

          this.stopScroll(), t();
        },
        stopScroll: function stopScroll() {
          null !== J.current && (cancelAnimationFrame(J.current), J.current = null);
        },
        getListElement: function getListElement() {
          return Z.current;
        }
      });
      return (0, o.useImperativeHandle)(t, function () {
        return Q.current;
      }, []), (0, o.useEffect)(function () {
        return function () {
          return Q.current.stopScroll();
        };
      }, [D]), (0, o.useEffect)(function () {
        if (!A.current || !j.PLATFORM_ACCESSIBILITY_ENABLED) return;

        function e(e) {
          if (!t.matches(":focus-visible")) return;
          if (!z) return;
          var n = z.viewModel,
              o = n.selection();
          e.defaultPrevented || e.currentTarget !== e.target || o.selected().length || _();
        }

        var t = A.current;
        return t.addEventListener("focus", e), function () {
          t.removeEventListener("focus", e);
        };
      }, [A, _, z]), o.createElement(qt.Provider, {
        value: q
      }, o.createElement("div", _objectSpread({}, U, {
        className: I()(rn.tree, u),
        ref: A,
        "data-name": "tree",
        tabIndex: j.PLATFORM_ACCESSIBILITY_ENABLED ? 0 : -1,
        onKeyDown: function onKeyDown(e) {
          var t = (0, C.hashFromEvent)(e);
          if (e.defaultPrevented || (0, Ot.isNativeUIInteraction)(t, e.target)) return;
          var o = (0, T.ensureDefined)(G.scrollPosTop),
              r = (0, T.ensureDefined)(G.contentHeight),
              i = (0, T.ensureDefined)(G.containerHeight);

          if (i) {
            var _n24 = .875 * i,
                _s6 = o + i === r;

            switch (t) {
              case 35:
                _s6 || (e.preventDefault(), X(r));
                break;

              case 36:
                0 !== o && (e.preventDefault(), X(0));
                break;

              case 33:
                0 !== o && (e.preventDefault(), X(Math.max(0, o - _n24)));
                break;

              case 34:
                _s6 || (e.preventDefault(), X(Math.min(o + _n24, r)));
            }
          }

          z || t !== sn || (e.preventDefault(), b());
          z || t !== ln || (e.preventDefault(), y());
          (38 === t || void 0 !== n && "previous" === n[t]) && (e.preventDefault(), S());
          (40 === t || void 0 !== n && "next" === n[t]) && (e.preventDefault(), _());

          if ((8 === t || 46 === t) && z) {
            var _e17 = z.viewModel,
                _t17 = _e17.selection(),
                _n25 = _t17.selected();

            if (1 !== _n25.length) return;

            var _o13 = _e17.getNextNodeIdAfterRemove(_n25[0]);

            if (null === _o13) return;

            _e17.onChange().subscribe(null, function () {
              if (_t17.selected().length) return;

              var n = _e17.entity(_o13);

              n && (_t17.set([n]), p(_o13));
            }, !0);
          }

          null == w || w(e);
        }
      }), o.createElement(Zt.OverlayScrollContainer, _objectSpread({}, G, {
        className: rn.overlayScrollWrap
      })), o.createElement(yt.VariableSizeList, {
        ref: function ref(e) {
          Y.current = e;
        },
        className: rn.listContainer,
        width: M,
        height: k,
        itemCount: B.length,
        itemSize: W,
        children: P,
        itemKey: H,
        outerRef: function outerRef(e) {
          Z.current = e, E && E(e);
        },
        innerRef: function innerRef(e) {
          $.current = e;
        },
        innerElementType: nn,
        onItemsRendered: function onItemsRendered() {
          K();
        },
        overscanCount: 20,
        direction: (0, on.isRtl)() ? "rtl" : "ltr"
      }), o.createElement(Ut, {
        dragPreviewRenderer: c,
        nodeRenderer: a
      })));

      function X(e) {
        var t;
        null === (t = Z.current) || void 0 === t || t.scrollTo({
          left: 0,
          top: e
        });
      }
    });
    var cn = (0, H.connect)(function (e) {
      return {
        renderList: Qe(e),
        orderedNodes: qe(e),
        isMultiSelecting: Ke(e),
        selectedIds: Ue(e),
        scrollToId: Be(e)
      };
    }, function (e) {
      return (0, ht.bindActionCreators)({
        startMultiSelect: Ee,
        stopMultiSelect: Ie,
        setFocusedNode: Me,
        processDropTarget: Se,
        onMoveCursorToNext: be,
        onMoveCursorToPrevious: ve,
        onMultiSelectPrevious: ye,
        onMultiSelectNext: _e
      }, e);
    }, null, {
      context: xt
    })(function (e) {
      var t = (0, o.useRef)(null),
          _ref35 = (0, bt.useDrop)({
        accept: "node",
        drop: function drop(n, o) {
          var r;
          ("touch" === e.drag || _t.isFF) && (null === (r = t.current) || void 0 === r || r.stopScroll()), o.getItem().dropSelection();
        },
        hover: function hover(n, o) {
          var r, i;
          if ("touch" !== e.drag && !_t.isFF) return;
          var s = o.getClientOffset();
          if (null === s) return;
          var l = null !== (i = null === (r = t.current) || void 0 === r ? void 0 : r.getListElement()) && void 0 !== i ? i : null;
          if (null === l) return;
          var a = l.getBoundingClientRect();

          (function (n, o, r) {
            var i;
            var s = Math.abs(n - r),
                l = Math.abs(n - o);
            if (l > 40 && s > 40 || s <= 40 && l <= 40) return void (null === (i = t.current) || void 0 === i || i.stopScroll());

            (function (n, o, r, i) {
              var s, l, a, c;
              o || n ? "touch" === e.drag ? null === (s = t.current) || void 0 === s || s.startScroll(o ? -5 : 5) : null === (l = t.current) || void 0 === l || l.startScroll(o ? -2 : 2) : (r || i) && ("touch" === e.drag ? null === (a = t.current) || void 0 === a || a.startScroll(r ? -10 : 10) : null === (c = t.current) || void 0 === c || c.startScroll(r ? -5 : 5));
            })(l > 20 && l <= 40, s > 20 && s <= 40, s <= 20, l <= 20);
          })(s.y, a.bottom, a.top);
        },
        collect: function collect(e) {
          return {
            isOver: e.isOver()
          };
        }
      }),
          _ref36 = _slicedToArray(_ref35, 2),
          n = _ref36[0].isOver,
          r = _ref36[1];

      return o.createElement(an, _objectSpread({}, e, {
        isOver: n,
        connectDropTarget: r,
        ref: t
      }));
    }),
        un = {
      delayTouchStart: 100
    };

    function dn(e) {
      var t = e.canBeAddedToSelection,
          n = e.initState,
          r = e.onSelect,
          i = e.canMove,
          s = e.onDrop,
          l = e.onMove,
          a = e.nodes,
          c = e.selectedIds,
          u = e.onKeyboardSelect,
          d = e.saga,
          h = e.lastFocusedNodeObject,
          g = e.lastSyncTimestampRef,
          m = e.scrollToId,
          p = _objectWithoutProperties(e, ["canBeAddedToSelection", "initState", "onSelect", "canMove", "onDrop", "onMove", "nodes", "selectedIds", "onKeyboardSelect", "saga", "lastFocusedNodeObject", "lastSyncTimestampRef", "scrollToId"]),
          _ref37 = (0, o.useState)(null),
          _ref38 = _slicedToArray(_ref37, 2),
          f = _ref38[0],
          v = _ref38[1];

      return (0, o.useEffect)(function () {
        var e = (0, W["default"])();
        v(function (e) {
          var t = (0, ht.applyMiddleware)(e);
          return (0, ht.createStore)(vt, t);
        }(e));
        var o = e.run(dt, {
          initState: n,
          onKeyboardSelect: u,
          saga: d,
          canMove: i,
          onMove: l,
          onDrop: s,
          onSelect: r,
          canBeAddedToSelection: t
        });
        return function () {
          return o.cancel();
        };
      }, []), (0, o.useEffect)(function () {
        return null !== f && a && (g && (g.current = performance.now()), f.dispatch(function (e) {
          return {
            type: $,
            nodes: e
          };
        }(a))), function () {};
      }, [f, a]), (0, o.useEffect)(function () {
        null !== f && c && f.dispatch(Ce(c));
      }, [f, c]), (0, o.useEffect)(function () {
        null !== f && (null == h ? void 0 : h.id) && f.dispatch(Me(h.id));
      }, [f, h]), null === f ? null : o.createElement(hn, _objectSpread({
        store: f,
        scrollToId: m
      }, p));
    }

    var hn = o.memo(function (e) {
      var t = e.store,
          n = e.scrollToId,
          r = _objectWithoutProperties(e, ["store", "scrollToId"]),
          i = "touch" === e.drag ? G.TouchBackend : V.HTML5Backend;

      return (0, o.useEffect)(function () {
        var e;
        t.dispatch(ke(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : null));
      }, [n]), o.createElement(U.DndProvider, {
        backend: i,
        options: un
      }, o.createElement(H.Provider, {
        store: t,
        context: xt
      }, o.createElement(cn, _objectSpread({}, r))));
    });

    function gn(e, t) {
      (0, F.trackEvent)("Object Tree", e, t);
    }

    function mn(e) {
      return e.length > 1 ? "Multi select" : e[0].gaLabel();
    }

    function pn(e) {
      return (0, W.eventChannel)(function (t) {
        var n = {};
        return e.onChange().subscribe(n, function () {
          return t({
            type: Q
          });
        }), e.onGroupCreated().subscribe(n, function (e) {
          return t(Ne(e, !0));
        }), e.selection().onChange().subscribe(n, function (e) {
          return t(Ce(e));
        }), function () {
          e.onChange().unsubscribeAll(n), e.selection().onChange().unsubscribeAll(n), e.onGroupCreated().unsubscribeAll(n);
        };
      }, W.buffers.expanding());
    }

    function fn() {
      return regeneratorRuntime.wrap(function fn$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return (0, S.take)([ne, te]);

            case 2:
              gn("Select", "Arrow");

            case 3:
              _context20.next = 0;
              break;

            case 5:
            case "end":
              return _context20.stop();
          }
        }
      }, _marked11);
    }

    function vn() {
      var _ref39, _e18;

      return regeneratorRuntime.wrap(function vn$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return (0, S.take)(he);

            case 2:
              _ref39 = _context21.sent;
              _e18 = _ref39.mode;
              1 === _e18 && gn("Multi select", "Ctrl"), 2 === _e18 && gn("Multi select", "Shift");

            case 5:
              _context21.next = 0;
              break;

            case 7:
            case "end":
              return _context21.stop();
          }
        }
      }, _marked12);
    }

    function bn(e) {
      var _Re3, _t18, _n26, _o14, _r12, _i5;

      return regeneratorRuntime.wrap(function bn$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return (0, S.take)(ee);

            case 2:
              _context22.t0 = Re;
              _context22.next = 5;
              return (0, S.select)();

            case 5:
              _context22.t1 = _context22.sent;
              _Re3 = (0, _context22.t0)(_context22.t1);
              _t18 = _Re3.node;
              _n26 = _Re3.dropType;

              if (!_t18) {
                _context22.next = 18;
                break;
              }

              _context22.t2 = Ye;
              _context22.next = 13;
              return (0, S.select)();

            case 13:
              _context22.t3 = _context22.sent;
              _o14 = (0, _context22.t2)(_context22.t3);
              _r12 = _o14.map(function (t) {
                return (0, T.ensureNotNull)(e.entity(t.id));
              });
              _i5 = "Drag";
              1 === _t18.level && "inside" !== _n26 && _o14.some(function (e) {
                return 2 === e.level;
              }) ? _i5 = "From the group" : 2 !== _t18.level && "inside" !== _n26 || !_o14.some(function (e) {
                return 1 === e.level;
              }) ? 1 === _o14.length && _o14[0].parentId !== _t18.parentId && (_i5 = "Existing pane") : _i5 = "To the group", gn(_i5, mn(_r12));

            case 18:
              _context22.next = 0;
              break;

            case 20:
            case "end":
              return _context22.stop();
          }
        }
      }, _marked13);
    }

    function yn(e) {
      return regeneratorRuntime.wrap(function yn$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return (0, S.fork)(fn);

            case 2:
              _context23.next = 4;
              return (0, S.fork)(vn);

            case 4:
              _context23.next = 6;
              return (0, S.fork)(bn, e);

            case 6:
            case "end":
              return _context23.stop();
          }
        }
      }, _marked14);
    }

    function _n(e) {
      var t, _e19;

      return regeneratorRuntime.wrap(function _n$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return (0, S.fork)(yn, e);

            case 2:
              _context24.next = 4;
              return (0, S.call)(pn, e);

            case 4:
              t = _context24.sent;
              mt.logNormal("Opened object tree data source channel");
              _context24.prev = 6;

            case 7:
              _context24.next = 9;
              return (0, S.take)(t);

            case 9:
              _e19 = _context24.sent;
              _context24.next = 12;
              return (0, S.put)(_e19);

            case 12:
              _context24.next = 7;
              break;

            case 14:
              _context24.prev = 14;
              mt.logNormal("Closed object tree data source channel"), t.close();
              return _context24.finish(14);

            case 17:
            case "end":
              return _context24.stop();
          }
        }
      }, _marked15, null, [[6,, 14, 17]]);
    }

    var Sn = o.createContext(null);
    var wn = n(21861),
        Cn = n(898),
        Tn = n(6909);
    var En = w.mobiletouch ? "touch" : "native";

    function In(e) {
      var t = e.viewModel,
          _e$showHeader = e.showHeader,
          n = _e$showHeader === void 0 ? !0 : _e$showHeader,
          r = e.nodeRenderer,
          _e$isDialog = e.isDialog,
          i = _e$isDialog === void 0 ? !1 : _e$isDialog,
          _e$hideHeaderTitle = e.hideHeaderTitle,
          s = _e$hideHeaderTitle === void 0 ? !1 : _e$hideHeaderTitle,
          l = (0, o.useRef)(null),
          a = function (e) {
        var _ref44 = (0, o.useState)(e.getChartId()),
            _ref45 = _slicedToArray(_ref44, 2),
            t = _ref45[0],
            n = _ref45[1],
            r = (0, o.useRef)(t);

        return r.current = t, (0, o.useEffect)(function () {
          return e.onChange().subscribe(null, t), function () {
            e.onChange().unsubscribe(null, t);
          };

          function t() {
            var t = e.getChartId();
            r.current !== t && n(t);
          }
        }, []), t;
      }(t),
          _ref40 = (0, Cn.useDimensions)(),
          _ref41 = _slicedToArray(_ref40, 2),
          c = _ref41[0],
          u = _ref41[1],
          _ref42 = (0, o.useState)(null),
          _ref43 = _slicedToArray(_ref42, 2),
          d = _ref43[0],
          h = _ref43[1],
          g = (0, o.useMemo)(function () {
        return {
          isTouch: w.touch,
          isDialog: i
        };
      }, [i]);

      return o.createElement(Sn.Provider, {
        value: g
      }, o.createElement(L.Provider, {
        value: {
          viewModel: t
        }
      }, o.createElement("div", {
        className: Tn.wrap,
        onContextMenu: wn.preventDefaultForContextMenu
      }, n && o.createElement(P, {
        hideTitle: s
      }), o.createElement("div", {
        className: Tn.space,
        onClick: function onClick(e) {
          if (e.defaultPrevented) return;
          if (!(e.target instanceof Element) || null === l.current) return;
          e.target === l.current && t.selection().set([]);
        },
        ref: c
      }, null !== u && o.createElement(dn, {
        key: a,
        height: u.height,
        width: u.width,
        canBeAddedToSelection: function canBeAddedToSelection(e) {
          var n = t.entity(e);
          return t.selection().canBeAddedToSelection(n);
        },
        nodeRenderer: r,
        initState: function initState() {
          var _t$getState = t.getState(),
              e = _t$getState.nodes,
              n = _t$getState.selection;

          return {
            selectedIds: n,
            nodes: e
          };
        },
        canMove: function canMove(e, n, o) {
          return t.isSelectionDropable(n.id, o);
        },
        drag: En,
        rowHeight: Mn,
        onSelect: function onSelect(e) {
          var n = e.map(function (e) {
            return t.entity(e);
          }).filter(function (e) {
            return null !== e;
          });
          t.selection().set(n);
        },
        onDrop: function onDrop(e) {
          e.preventDefault();
          var _e$detail = e.detail,
              n = _e$detail.target,
              o = _e$detail.type;
          t.insertSelection(n, o);
        },
        scrollToId: d,
        saga:
        /*#__PURE__*/
        regeneratorRuntime.mark(function saga() {
          return regeneratorRuntime.wrap(function saga$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return (0, S.fork)(_n, t);

                case 2:
                case "end":
                  return _context25.stop();
              }
            }
          }, saga);
        }),
        onKeyboardSelect: function onKeyboardSelect(e) {
          h({
            id: e
          });
        },
        outerRef: function outerRef(e) {
          l.current = e;
        },
        onKeyDown: function onKeyDown(e) {
          if (13 === (0, C.hashFromEvent)(e)) {
            e.preventDefault();

            var _n27 = t.selection().selected(),
                _o15 = _n27.length > 0 ? t.entity(_n27[0]) : void 0;

            _o15 && t.openProperties(_o15);
          }
        },
        autofocus: i
      })))));
    }

    function Mn(e, t) {
      switch (t.type) {
        case "node":
          return 38;

        case "separator":
          return 13;
      }
    }

    var kn,
        Dn = n(14483);
    !function (e) {
      e.Svg = "svg";
    }(kn || (kn = {}));
    var Nn = n(31261),
        Ln = n(86928);

    function xn(e) {
      var t = e.className,
          n = e.disabled,
          r = _objectWithoutProperties(e, ["className", "disabled"]);

      return o.createElement(M.Icon, _objectSpread({
        className: I()(Ln.button, n && Ln.disabled, t)
      }, r));
    }

    var zn = n(77975);
    var jn = v.t(null, void 0, n(91073)),
        An = v.t(null, void 0, n(35038)),
        Rn = v.t(null, void 0, n(15101)),
        On = v.t(null, void 0, n(42284)),
        Bn = v.t(null, void 0, n(31971)),
        Fn = v.t(null, void 0, n(81428)),
        Pn = v.t(null, void 0, n(34596));
    var Wn = n(14787),
        Hn = n(33765),
        Vn = n(52870),
        Gn = n(49756),
        Un = n(94007),
        Zn = n(62766),
        Kn = n(87769);

    function Yn(e) {
      var t = e.id,
          n = (0, o.useContext)(L),
          _ref46 = (0, T.ensureNotNull)(n),
          r = _ref46.viewModel,
          i = r.entity(t);

      return null === i ? null : o.createElement($n, _objectSpread({}, e, {
        entity: i
      }));
    }

    function $n(e) {
      var t = e.id,
          r = e.isOffset,
          i = e.isDisabled,
          s = e.isSelected,
          l = e.isChildOfSelected,
          a = e.isHovered,
          c = e.parentId,
          u = e.entity,
          d = e.isExpanded,
          h = (0, o.useContext)(L),
          _ref47 = (0, T.ensureNotNull)(h),
          g = _ref47.viewModel,
          m = (0, o.useContext)(Sn),
          _ref48 = (0, o.useContext)(Et),
          p = _ref48.size,
          _ref49 = (0, o.useState)(!1),
          _ref50 = _slicedToArray(_ref49, 2),
          f = _ref50[0],
          b = _ref50[1],
          y = (0, o.useRef)(null),
          _ref51 = (0, o.useState)(u.title()),
          _ref52 = _slicedToArray(_ref51, 2),
          _ = _ref52[0],
          S = _ref52[1],
          _ref53 = (0, o.useState)(u.getIcon()),
          _ref54 = _slicedToArray(_ref53, 2),
          w = _ref54[0],
          I = _ref54[1],
          _ref55 = (0, o.useState)(u.isLocked()),
          _ref56 = _slicedToArray(_ref55, 2),
          k = _ref56[0],
          D = _ref56[1],
          _ref57 = (0, o.useState)(u.isVisible()),
          _ref58 = _slicedToArray(_ref57, 2),
          N = _ref58[0],
          x = _ref58[1],
          _ref59 = (0, o.useState)(u.isActualInterval()),
          _ref60 = _slicedToArray(_ref59, 2),
          z = _ref60[0],
          j = _ref60[1],
          _ref61 = (0, o.useState)(u.getDrawingSyncState()),
          _ref62 = _slicedToArray(_ref61, 2),
          A = _ref62[0],
          R = _ref62[1],
          _ref63 = (0, o.useState)(!1),
          _ref64 = _slicedToArray(_ref63, 2),
          O = _ref64[0],
          B = _ref64[1],
          _ref65 = ((0, zn.useWatchedValueReadonly)({
        watchedValue: g.getChartLayout()
      }), (0, o.useState)(!1)),
          _ref66 = _slicedToArray(_ref65, 2),
          F = _ref66[0],
          P = _ref66[1],
          W = (0, o.useRef)(null);

      (0, o.useEffect)(function () {
        var e = {};
        u.onLockChanged().subscribe(e, function () {
          return D(u.isLocked());
        }), u.onVisibilityChanged().subscribe(e, function () {
          return x(u.isVisible());
        });
        var t = u.onTitleChanged();
        t && t.subscribe(e, function () {
          return S(u.title());
        }), u.onIsActualIntervalChange().subscribe(e, function () {
          return j(u.isActualInterval());
        }), u.onSyncStateChanged().subscribe(e, function () {
          return R(u.getDrawingSyncState());
        });
        var n = u.onIconChanged ? u.onIconChanged() : void 0;
        return n && n.subscribe(e, function () {
          return I(u.getIcon());
        }), function () {
          u.onIsActualIntervalChange().unsubscribeAll(e), u.onLockChanged().unsubscribeAll(e), u.onVisibilityChanged().unsubscribeAll(e), u.onSyncStateChanged().unsubscribeAll(e), t && t.unsubscribeAll(e), W.current && clearTimeout(W.current), n && n.unsubscribeAll(e);
        };
      }, [u]), (0, o.useEffect)(function () {
        f && y.current && (y.current.focus(), y.current.setSelectionRange(0, _.length));
      }, [f]), (0, o.useEffect)(function () {
        var e = {};
        return g.hoveredObjectChanged().subscribe(e, X), function () {
          g.hoveredObjectChanged().unsubscribeAll(e);
        };
      }, [d]), (0, o.useEffect)(function () {
        g.setHoveredObject(a ? t : null);
      }, [a]), (0, o.useEffect)(function () {
        !s && W.current && (clearTimeout(W.current), W.current = null), b(!1);
      }, [s]);
      var H = {};

      if (c) {
        var _e20 = g.entity(c);

        _e20 && (H["data-parent-name"] = _e20.title()), H["data-type"] = u.hasChildren() ? "group" : "data-source";
      }

      var V = Dn.enabled("test_show_object_tree_debug") ? "<".concat(u.id(), "> (").concat(u.zOrder(), ") ").concat(u.title()) : u.title(),
          G = a || O,
          U = f && s,
          Z = !!m && m.isTouch,
          K = !!m && m.isDialog,
          Y = z && N ? Un : Zn,
          $ = u.hasChildren() ? v.t(null, void 0, n(38207)) : v.t(null, void 0, n(39781));
      var q = null;
      return w && w.type === kn.Svg && (q = o.createElement(M.Icon, {
        icon: w.content || "",
        className: Kn.icon
      })), o.createElement("span", {
        className: E(Kn.wrap, i && Kn.disabled, s && Kn.selected, r && Kn.offset, l && Kn.childOfSelected, O && !i && !s && !l && Kn.hover, K && !i && !s && !l && Kn.dialog),
        onMouseDown: function onMouseDown(e) {
          f && !(0, T.ensureNotNull)(y.current).contains(e.target) && P(!0);
        },
        onClick: 1 === p ? J : function (e) {
          if (e.defaultPrevented) return;
          if (0 !== (0, C.modifiersFromEvent)(e)) return;
          if (W.current) e.preventDefault(), clearTimeout(W.current), W.current = null, g.openProperties(u), P(!1);else {
            var _e21 = g.selection().selected();

            W.current = setTimeout(function () {
              W.current = null, s && !F && 1 === _e21.length && g.rename(u, function () {
                return b(!0);
              }), P(!1);
            }, 500);
          }
        },
        onContextMenu: Z ? void 0 : J
      }, !U && o.createElement(o.Fragment, null, q, !1, o.createElement("span", _objectSpread({
        className: E(Kn.title, g.isMain(u) && Kn.main, (!u.isVisible() || !z) && Kn.disabled)
      }, H), V), o.createElement("span", {
        className: Kn.rightButtons
      }, u.canBeLocked() && o.createElement(xn, {
        title: k ? Rn : On,
        icon: k ? Vn : Gn,
        className: E(Kn.button, (G || k) && Kn.visible, "apply-common-tooltip"),
        onClick: function onClick(e) {
          if (e.defaultPrevented) return;
          e.preventDefault(), g.setIsLocked(t, !u.isLocked());
        },
        "data-role": "button",
        "data-name": "lock",
        "data-active": k
      }), o.createElement(xn, {
        icon: Y,
        className: E(Kn.button, !z && Kn.warn, (G || !N || !z) && Kn.visible, "apply-common-tooltip"),
        onClick: z ? function (e) {
          if (e.defaultPrevented) return;
          e.preventDefault(), g.setIsVisible(t, !u.isVisible());
        } : function (e) {
          if (e.defaultPrevented) return;
          e.preventDefault(), g.openProperties(u, Wn.TabNames.visibility);
        },
        title: function () {
          if (!z) return $;
          return N ? Bn : Fn;
        }(),
        "data-role": "button",
        "data-name": "hide",
        "data-active": !N
      }), u.canBeRemoved() && o.createElement(xn, {
        title: Pn,
        icon: Hn,
        className: E(Kn.button, (Z || G) && Kn.visible, "apply-common-tooltip"),
        onClick: function onClick(e) {
          if (e.defaultPrevented) return;
          e.preventDefault(), e.stopPropagation(), g.remove(t);
        },
        "data-role": "button",
        "data-name": "remove"
      }))), U && o.createElement(Nn.InputControl, {
        value: _,
        onChange: function onChange(e) {
          S(e.currentTarget.value);
        },
        onClick: wn.preventDefault,
        className: Kn.renameInput,
        onKeyDown: function onKeyDown(e) {
          27 === (0, C.hashFromEvent)(e) ? (e.preventDefault(), S(u.title()), b(!1)) : 13 === (0, C.hashFromEvent)(e) && (e.preventDefault(), Q());
        },
        reference: function reference(e) {
          y.current = e;
        },
        onBlur: Q,
        onDragStart: function onDragStart(e) {
          e.preventDefault(), e.stopPropagation();
        },
        draggable: !0,
        stretch: !0
      }));

      function J(e) {
        e.defaultPrevented || f || !u.fullyConstructed() || (e.preventDefault(), e.persist(), g.openContextMenu(u, function () {
          return b(!0);
        }, e));
      }

      function Q() {
        "" !== _ && u.setName(_), S(u.title()), b(!1);
      }

      function X(e) {
        if (u.hasChildren() && !d) {
          var _t19 = null !== e && u.childrenIds().has(e);

          B(_t19);
        } else B(t === e);
      }
    }

    var qn = n(17742);

    var Jn =
    /*#__PURE__*/
    function (_o$PureComponent2) {
      _inherits(Jn, _o$PureComponent2);

      function Jn(e) {
        var _this2;

        _classCallCheck(this, Jn);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Jn).call(this, e)), _this2._isMounted = !1, _this2._dialogRef = o.createRef(), _this2._renderChildren = function (e) {
          return o.createElement(Qn, {
            isSmallTablet: e,
            viewModel: _this2.props.viewModel
          });
        }, _this2._handleMediaChange = function () {
          _this2.state.showDrawer && !window.matchMedia(y.DialogBreakpoints.TabletSmall).matches && _this2.setState({
            showDrawer: !1
          });
        }, _this2._onManageDrawings = function (e) {
          throw new Error("not supported");
        }, _this2._closeDrawer = function () {
          _this2.setState({
            showDrawer: !1
          });
        }, _this2._handleContextMenuOpened = function (e) {
          _this2.setState({
            isContextMenuOpened: e
          });
        }, _this2._matchMedia = window.matchMedia(y.DialogBreakpoints.TabletSmall), _this2.state = {
          showDrawer: !1,
          showDialog: !1,
          isContextMenuOpened: !1
        };
        return _this2;
      }

      _createClass(Jn, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._isMounted = !0, this._matchMedia.addListener(this._handleMediaChange), this.props.viewModel.isContextMenuOpened().subscribe(this._handleContextMenuOpened);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._isMounted = !1, this._matchMedia.removeListener(this._handleMediaChange), this.props.viewModel.isContextMenuOpened().unsubscribe(this._handleContextMenuOpened);
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          return o.createElement(o.Fragment, null, o.createElement(f.MatchMedia, {
            rule: y.DialogBreakpoints.TabletSmall
          }, function (e) {
            return o.createElement(b.AdaptivePopupDialog, {
              additionalElementPos: "after",
              additionalHeaderElement: !1,
              className: qn.dialog,
              dataName: "object-tree-dialog",
              isOpened: !0,
              onClickOutside: _this3.state.showDialog || e || _this3.state.isContextMenuOpened ? function () {} : _this3.props.onClose,
              onClose: _this3.props.onClose,
              ref: _this3._dialogRef,
              render: function render() {
                return _this3._renderChildren(e);
              },
              title: v.t(null, void 0, n(31095)),
              showSeparator: !0
            });
          }), o.createElement(p.DrawerManager, null, this.state.showDrawer && o.createElement(m.Drawer, {
            onClose: this._closeDrawer,
            position: "Bottom"
          }, o.createElement(_.ManageDrawings, {
            onClose: this._closeDrawer,
            chartWidget: this.props.activeChartWidget,
            isMobile: !0
          }))));
        }
      }]);

      return Jn;
    }(o.PureComponent);

    function Qn(e) {
      var t = e.isSmallTablet,
          n = e.viewModel,
          r = (0, o.useMemo)(function () {
        return {
          size: t ? 1 : 0,
          smallSizeTreeNodeAction: 0
        };
      }, [t]);
      return o.createElement(Et.Provider, {
        value: r
      }, o.createElement(In, {
        nodeRenderer: Yn,
        showHeader: !1,
        viewModel: n,
        isDialog: !0
      }));
    }

    var Xn = n(16216),
        eo = n(98310),
        to = n(57898);
    var no = n(32112);

    function oo(e, t) {
      return "".concat(e, ":").concat(t);
    }

    function ro(e) {
      var t = e.split(":");
      return {
        persistentId: t[0],
        instanceId: t[1]
      };
    }

    var io =
    /*#__PURE__*/
    function () {
      function io(e) {
        var _this4 = this;

        _classCallCheck(this, io);

        this._onChange = new to.Delegate(), this._recalculate = function () {
          var e = _this4._groupModel.groups().map(function (e) {
            return oo(e.id, e.instanceId());
          }),
              t = _this4._selectionApi.allSources();

          _this4._selected = _this4._selected.filter(function (n) {
            return e.includes(n) || t.includes(n);
          }), _this4._onChange.fire(_this4._selected);
        }, this._model = e, this._selectionApi = new no.SelectionApi(this._model), this._groupModel = this._model.lineToolsGroupModel(), this._selected = this._getSelectedIds(), this._selectionApi.onChanged().subscribe(this, function () {
          _this4._selected = _this4._getSelectedIds(), _this4._onChange.fire(_this4._selected);
        }), this._groupModel.onChanged().subscribe(this, this._recalculate);
      }

      _createClass(io, [{
        key: "destroy",
        value: function destroy() {
          this._selectionApi.onChanged().unsubscribeAll(this), this._groupModel.onChanged().unsubscribeAll(this);
        }
      }, {
        key: "set",
        value: function set(e) {
          var t = [];
          var n = e.map(function (e) {
            return e.id();
          });
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = e[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _o16 = _step7.value;

              if (_o16.hasChildren()) {
                (function () {
                  var e = _o16.childrenIds();

                  t.push.apply(t, _toConsumableArray(Array.from(e.values()))), n = n.filter(function (t) {
                    return !e.has(t);
                  });
                })();
              } else t.push(_o16.id());
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          this._selectionApi.set(t.map(function (e) {
            return ro(e).persistentId;
          })), this._selected = n, this._onChange.fire(this._selected);
        }
      }, {
        key: "canBeAddedToSelection",
        value: function canBeAddedToSelection(e) {
          return null !== e && e.canBeAddedToSelection();
        }
      }, {
        key: "onChange",
        value: function onChange() {
          return this._onChange;
        }
      }, {
        key: "selected",
        value: function selected() {
          return this._selected;
        }
      }, {
        key: "_getSelectedIds",
        value: function _getSelectedIds() {
          var _this5 = this;

          return this._selectionApi.allSources().map(function (e) {
            return _this5._model.dataSourceForId(e);
          }).filter(gt.notNull).filter(function (e) {
            return e.showInObjectTree();
          }).map(function (e) {
            return oo(e.id(), e.instanceId());
          });
        }
      }]);

      return io;
    }();

    var so =
    /*#__PURE__*/
    function () {
      function so(e, t) {
        _classCallCheck(this, so);

        this._controller = e, this._facade = t, this._groupModel = e.model().lineToolsGroupModel();
      }

      _createClass(so, [{
        key: "buildTree",
        value: function buildTree() {
          var _this6 = this;

          var e = {};
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this._controller.model().panes()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _t20 = _step8.value;

              var _n28 = _t20.sourcesByGroup().all().filter(function (e) {
                return e.showInObjectTree();
              });

              e[_t20.id()] = lo(_t20.id(), 0);
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = this._groupModel.groups()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var _n29 = _step9.value;

                  var _o17 = oo(_n29.id, _n29.instanceId()),
                      _r13 = (0, T.ensureNotNull)(this._facade.getObjectById(_o17));

                  if (_r13.pane() === _t20) {
                    var _o18 = _toConsumableArray(_n29.lineTools()).sort(function (e, t) {
                      return e.zorder() > t.zorder() ? -1 : 1;
                    }).map(function (e) {
                      return oo(e.id(), e.instanceId());
                    });

                    e[_r13.id()] = lo(_r13.id(), 1, _t20.id(), _o18), e[_t20.id()].children.push(_r13.id());
                    var _iteratorNormalCompletion11 = true;
                    var _didIteratorError11 = false;
                    var _iteratorError11 = undefined;

                    try {
                      for (var _iterator11 = _o18[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var _t21 = _step11.value;
                        e[_t21] = lo(_t21, 2, _r13.id());
                      }
                    } catch (err) {
                      _didIteratorError11 = true;
                      _iteratorError11 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                          _iterator11["return"]();
                        }
                      } finally {
                        if (_didIteratorError11) {
                          throw _iteratorError11;
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                    _iterator9["return"]();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }

              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = _n28[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var _o19 = _step10.value;

                  var _n30 = oo(_o19.id(), _o19.instanceId());

                  e[_n30] || (e[_n30] = lo(_n30, 1, _t20.id()), e[_t20.id()].children.push(_n30));
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                    _iterator10["return"]();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }

              e[_t20.id()].children.sort(function (e, t) {
                var n = (0, T.ensureNotNull)(_this6._facade.getObjectById(e)),
                    o = (0, T.ensureNotNull)(_this6._facade.getObjectById(t));
                return (0, T.ensureNotNull)(o.zOrder()) - (0, T.ensureNotNull)(n.zOrder());
              });
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          return this._facade.invalidateCache(new Set(Object.keys(e))), e;
        }
      }]);

      return so;
    }();

    function lo(e, t, n) {
      var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      return {
        id: e,
        level: t,
        parentId: n,
        children: o
      };
    }

    var ao = n(36298),
        co = n(92249),
        uo = n(28853),
        ho = n(14292),
        go = n(76544),
        mo = n(73212),
        po = n(88348),
        fo = n(7295),
        vo = n(28824),
        bo = n(57674),
        yo = n(37591);

    var _o = new ao.TranslatedString("show {title}", v.t(null, void 0, n(87358))),
        So = new ao.TranslatedString("hide {title}", v.t(null, void 0, n(70301))),
        wo = new ao.TranslatedString("lock {title}", v.t(null, void 0, n(50193))),
        Co = new ao.TranslatedString("unlock {title}", v.t(null, void 0, n(92421))),
        To = new ao.TranslatedString("change {sourceTitle} title to {newSourceTitle}", v.t(null, void 0, n(40001))),
        Eo = new ao.TranslatedString("insert source(s) after", v.t(null, void 0, n(8343))),
        Io = !1;

    function Mo(e, t) {
      return t.every(function (t) {
        return !(t.pane() !== e && !t.allowsMovingbetweenPanes());
      });
    }

    function ko(e) {
      return e instanceof ho.DataSource && e.showInObjectTree() ? oo(e.id(), e.instanceId()) : null;
    }

    function Do(e) {
      return new ao.TranslatedString(e.name(), e.title(yo.TitleDisplayTarget.DataWindow));
    }

    var No = new to.Delegate();

    var Lo =
    /*#__PURE__*/
    function () {
      function Lo(e, t) {
        var _this7 = this;

        _classCallCheck(this, Lo);

        this._syncStateChanged = new to.Delegate(), this._updateSyncState = function () {
          _this7._syncStateChanged.fire((0, T.ensureNotNull)(_this7.getDrawingSyncState()));
        }, this._undoModel = e, this._dataSource = t, (0, co.isLineTool)(this._dataSource) && (this._dataSource.linkKey().subscribe(this._updateSyncState), this._dataSource.sharingMode().subscribe(this._updateSyncState));

        var n = this._undoModel.lineBeingCreated();

        null !== n && n === t && n.isSynchronizable() && po.isToolCreatingNow.subscribe(this._updateSyncState);
      }

      _createClass(Lo, [{
        key: "destroy",
        value: function destroy() {
          (0, co.isLineTool)(this._dataSource) && (this._dataSource.linkKey().unsubscribe(this._updateSyncState), this._dataSource.sharingMode().unsubscribe(this._updateSyncState)), po.isToolCreatingNow.unsubscribe(this._updateSyncState);
        }
      }, {
        key: "id",
        value: function id() {
          return oo(this._dataSource.id(), this._dataSource.instanceId());
        }
      }, {
        key: "title",
        value: function title() {
          var e = this._dataSource;
          return (0, co.isLineTool)(e) ? e.properties().title.value() || e.translatedType() : (0, go.isSeries)(e) && this._undoModel.mainSeries() === e ? e.symbolTitle(yo.TitleDisplayTarget.DataWindow, void 0, void 0, (0, _t.onWidget)() ? "exchange" : "listed_exchange") : e.title(yo.TitleDisplayTarget.DataWindow);
        }
      }, {
        key: "gaLabel",
        value: function gaLabel() {
          return (0, uo.isStudy)(this._dataSource) ? "Study" : (0, co.isLineTool)(this._dataSource) ? "Drawing" : "Symbol";
        }
      }, {
        key: "canBeLocked",
        value: function canBeLocked() {
          return (0, co.isLineTool)(this._dataSource) && this._dataSource.userEditEnabled();
        }
      }, {
        key: "canBeRemoved",
        value: function canBeRemoved() {
          return this._undoModel.mainSeries() !== this._dataSource && this._dataSource.isUserDeletable();
        }
      }, {
        key: "canBeHidden",
        value: function canBeHidden() {
          return this._dataSource.canBeHidden();
        }
      }, {
        key: "canBeRenamed",
        value: function canBeRenamed() {
          return (0, co.isLineTool)(this._dataSource);
        }
      }, {
        key: "fullyConstructed",
        value: function fullyConstructed() {
          return this._undoModel.lineBeingCreated() !== this._dataSource;
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._dataSource.properties().visible.value();
        }
      }, {
        key: "isActualInterval",
        value: function isActualInterval() {
          return !(0, co.isLineTool)(this._dataSource) && !(0, uo.isStudy)(this._dataSource) || this._dataSource.isActualInterval();
        }
      }, {
        key: "onIsActualIntervalChange",
        value: function onIsActualIntervalChange() {
          return (0, co.isLineTool)(this._dataSource) || (0, uo.isStudy)(this._dataSource) ? this._dataSource.onIsActualIntervalChange() : No;
        }
      }, {
        key: "isLocked",
        value: function isLocked() {
          return !!(0, co.isLineTool)(this._dataSource) && this._dataSource.properties().frozen.value();
        }
      }, {
        key: "onVisibilityChanged",
        value: function onVisibilityChanged() {
          return this._dataSource.properties().visible.listeners();
        }
      }, {
        key: "onLockChanged",
        value: function onLockChanged() {
          return (0, co.isLineTool)(this._dataSource) ? this._dataSource.properties().frozen.listeners() : No;
        }
      }, {
        key: "getIcon",
        value: function getIcon() {
          var e = c,
              t = this._dataSource.getSourceIcon(),
              n = (0, uo.isStudyStrategy)(this._dataSource);

          var o = {
            type: kn.Svg,
            content: n ? fo : vo
          };
          if (e && t) if ("loadSvg" === t.type) {
            var _t$svgId$split = t.svgId.split("."),
                _t$svgId$split2 = _slicedToArray(_t$svgId$split, 2),
                _n31 = _t$svgId$split2[0],
                _r14 = _t$svgId$split2[1],
                _i6 = "linetool" === _n31 ? e.linetool[_r14] : e.series[Number(_r14)];

            o = {
              type: kn.Svg,
              content: _i6 || vo
            };
          } else "svgContent" === t.type && (o = {
            type: kn.Svg,
            content: t.content
          });
          return o;
        }
      }, {
        key: "onIconChanged",
        value: function onIconChanged() {
          if (this._dataSource.onSourceIconChanged) return this._dataSource.onSourceIconChanged();
        }
      }, {
        key: "setVisible",
        value: function setVisible(e) {
          var t = (e ? _o : So).format({
            title: Do(this._dataSource)
          });

          this._undoModel.setProperty(this._dataSource.properties().visible, e, t);
        }
      }, {
        key: "setLocked",
        value: function setLocked(e) {
          if ((0, co.isLineTool)(this._dataSource)) {
            var _t22 = (e ? wo : Co).format({
              title: Do(this._dataSource)
            });

            this._undoModel.setProperty(this._dataSource.properties().frozen, e, _t22);
          }
        }
      }, {
        key: "setName",
        value: function setName(e) {
          if ((0, co.isLineTool)(this._dataSource)) {
            var _t23 = To.format({
              sourceTitle: this._dataSource.properties().title.value() || Do(this._dataSource),
              newSourceTitle: e
            });

            this._undoModel.setProperty(this._dataSource.properties().title, e, _t23, Io);
          }
        }
      }, {
        key: "isCopiable",
        value: function isCopiable() {
          return this._dataSource.copiable();
        }
      }, {
        key: "isClonable",
        value: function isClonable() {
          return this._dataSource.cloneable();
        }
      }, {
        key: "zOrder",
        value: function zOrder() {
          return this._dataSource.zorder();
        }
      }, {
        key: "remove",
        value: function remove() {
          this._undoModel.removeSource(this._dataSource, !1);
        }
      }, {
        key: "canBeAddedToSelection",
        value: function canBeAddedToSelection() {
          return this._undoModel.selection().canBeAddedToSelection(this._dataSource);
        }
      }, {
        key: "setAsSelection",
        value: function setAsSelection() {
          var _this8 = this;

          this._undoModel.model().selectionMacro(function (e) {
            e.clearSelection(), e.addSourceToSelection(_this8._dataSource);
          });
        }
      }, {
        key: "addToSelection",
        value: function addToSelection() {
          var _this9 = this;

          this._undoModel.model().selectionMacro(function (e) {
            e.addSourceToSelection(_this9._dataSource);
          });
        }
      }, {
        key: "addSourcesToArray",
        value: function addSourcesToArray(e) {
          return e.push(this._dataSource), e;
        }
      }, {
        key: "insertSourcesBeforeThis",
        value: function insertSourcesBeforeThis(e) {
          var _this10 = this;

          this._insertSources(e, function (e) {
            return _this10._undoModel.insertBefore(e, _this10._dataSource);
          });
        }
      }, {
        key: "insertSourcesAfterThis",
        value: function insertSourcesAfterThis(e) {
          var _this11 = this;

          this._insertSources(e, function (e) {
            return _this11._undoModel.insertAfter(e, _this11._dataSource);
          });
        }
      }, {
        key: "childrenIds",
        value: function childrenIds() {
          return new Set();
        }
      }, {
        key: "hasChildren",
        value: function hasChildren() {
          return !1;
        }
      }, {
        key: "pane",
        value: function pane() {
          return (0, T.ensureNotNull)(this._undoModel.model().paneForSource(this._dataSource));
        }
      }, {
        key: "allowsMovingbetweenPanes",
        value: function allowsMovingbetweenPanes() {
          return !(0, co.isLineTool)(this._dataSource);
        }
      }, {
        key: "canBeAddedToGroup",
        value: function canBeAddedToGroup() {
          return (0, co.isLineTool)(this._dataSource) && this._dataSource.boundToSymbol();
        }
      }, {
        key: "canInsertBeforeThis",
        value: function canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
      }, {
        key: "canInsertAfterThis",
        value: function canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
      }, {
        key: "detachFromParent",
        value: function detachFromParent() {
          if ((0, co.isLineTool)(this._dataSource)) {
            var _e22 = this._undoModel.model(),
                _t24 = this._undoModel.lineToolsGroupController(),
                _n32 = _e22.lineToolsGroupModel().groupForLineTool(this._dataSource);

            null !== _n32 && _t24.excludeLineToolFromGroup(_n32, this._dataSource);
          }
        }
      }, {
        key: "onTitleChanged",
        value: function onTitleChanged() {
          var e = this._dataSource.properties().title;

          return e ? e.listeners() : void 0;
        }
      }, {
        key: "canBeSyncedInLayout",
        value: function canBeSyncedInLayout() {
          return (0, co.isLineTool)(this._dataSource) && this._dataSource.isSynchronizable();
        }
      }, {
        key: "onSyncStateChanged",
        value: function onSyncStateChanged() {
          return this._syncStateChanged;
        }
      }, {
        key: "setDrawingSyncState",
        value: function setDrawingSyncState(e) {
          if (!this.canBeSyncedInLayout() || !this.fullyConstructed()) return;
          var t = this._dataSource;

          switch (e) {
            case 0:
              if (null === t.linkKey().value()) return;

              this._undoModel.unlinkLines([t]);

              break;

            case 1:
              if (null !== t.linkKey().value()) return;

              this._undoModel.shareLineTools([t], 1);

          }
        }
      }, {
        key: "getDrawingSyncState",
        value: function getDrawingSyncState() {
          return this.canBeSyncedInLayout() ? this.fullyConstructed() && null !== this._dataSource.linkKey().value() ? 1 : 0 : null;
        }
      }, {
        key: "doNotAffectChartInvalidation",
        value: function doNotAffectChartInvalidation() {
          return (0, co.isLineTool)(this._dataSource) && Io;
        }
      }, {
        key: "_canInsertBeforeOrAfter",
        value: function _canInsertBeforeOrAfter(e) {
          var t = this._undoModel.model();

          if (!Mo(this.pane(), e)) return !1;

          if ((0, co.isLineTool)(this._dataSource)) {
            if (null !== t.lineToolsGroupModel().groupForLineTool(this._dataSource) && e.some(function (e) {
              return !e.canBeAddedToGroup();
            })) return !1;
          }

          return !0;
        }
      }, {
        key: "_insertSources",
        value: function _insertSources(e, t) {
          var n = this._undoModel.model(),
              o = this._undoModel.lineToolsGroupController();

          this._undoModel.beginUndoMacro(Eo);

          var r = function r() {
            e.forEach(function (e) {
              return e.detachFromParent();
            });
          },
              i = e.reduce(function (e, t) {
            return t.addSourcesToArray(e);
          }, []);

          if ((0, co.isLineTool)(this._dataSource)) {
            var _t25 = n.lineToolsGroupModel().groupForLineTool(this._dataSource);

            null !== _t25 ? ((0, T.assert)(!e.some(function (e) {
              return e.hasChildren();
            })), i.forEach(function (e) {
              (0, co.isLineTool)(e) && (_t25.containsLineTool(e) || o.addLineToolToGroup(_t25, e));
            })) : r();
          } else r();

          t(i), this._undoModel.endUndoMacro();
        }
      }]);

      return Lo;
    }();

    var xo =
    /*#__PURE__*/
    function () {
      function xo(e, t) {
        var _this12 = this;

        _classCallCheck(this, xo);

        this._onTitleChanged = new to.Delegate(), this._onVisibilityChanged = new to.Delegate(), this._onLockChanged = new to.Delegate(), this._onIsActualIntervalChanged = new to.Delegate(), this._syncStateChanged = new to.Delegate(), this._linkKeyChangedBound = this._linkKeyChanged.bind(this), this._undoModel = e, this._group = t, this._lineTools = t.lineTools(), this._paneId = (0, T.ensureNotNull)(e.model().paneForSource(this._lineTools[0])).id();

        var n = function n() {
          _this12._lineTools.forEach(function (e) {
            e.properties().visible.listeners().subscribe(_this12, function () {
              return _this12._onVisibilityChanged.fire();
            }), e.properties().frozen.listeners().subscribe(_this12, function () {
              return _this12._onLockChanged.fire();
            }), e.onIsActualIntervalChange().subscribe(_this12, function () {
              return _this12._onIsActualIntervalChanged.fire();
            }), e.linkKey().subscribe(_this12._linkKeyChangedBound), e.sharingMode().subscribe(_this12._linkKeyChangedBound);
          });
        };

        this._group.onChanged().subscribe(this, function (e) {
          _this12._unsubscribeFromAllLineTools(), _this12._lineTools = _this12._group.lineTools(), n(), e.lockedChanged && _this12._onLockChanged.fire(), e.visibilityChanged && _this12._onVisibilityChanged.fire(), e.titleChanged && _this12._onTitleChanged.fire(), e.isActualIntervalChanged && _this12._onIsActualIntervalChanged.fire();

          var t = _this12.getDrawingSyncState();

          null !== t && _this12._syncStateChanged.fire(t);
        }), n(), this._lastActualZOrder = this.zOrder(), this._lastIsVisible = this.isVisible(), this._lastIsActualInterval = this.isActualInterval(), this._lastIsLocked = this.isLocked();
      }

      _createClass(xo, [{
        key: "destroy",
        value: function destroy() {
          this._unsubscribeFromAllLineTools(), this._group.onChanged().unsubscribeAll(this);
        }
      }, {
        key: "id",
        value: function id() {
          return oo(this._group.id, this._group.instanceId());
        }
      }, {
        key: "title",
        value: function title() {
          return this._group.name();
        }
      }, {
        key: "gaLabel",
        value: function gaLabel() {
          return "Group";
        }
      }, {
        key: "getIcon",
        value: function getIcon() {
          return {
            type: kn.Svg,
            content: bo
          };
        }
      }, {
        key: "canBeRemoved",
        value: function canBeRemoved() {
          return !0;
        }
      }, {
        key: "canBeHidden",
        value: function canBeHidden() {
          return !0;
        }
      }, {
        key: "canBeLocked",
        value: function canBeLocked() {
          return !0;
        }
      }, {
        key: "canBeRenamed",
        value: function canBeRenamed() {
          return !0;
        }
      }, {
        key: "fullyConstructed",
        value: function fullyConstructed() {
          return !0;
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._group.lineTools().length > 0 && (this._lastIsVisible = "Invisible" !== this._group.visibility()), this._lastIsVisible;
        }
      }, {
        key: "isActualInterval",
        value: function isActualInterval() {
          return this._group.lineTools().length > 0 && (this._lastIsActualInterval = this._group.lineTools().some(function (e) {
            return e.isActualInterval();
          })), this._lastIsActualInterval;
        }
      }, {
        key: "onIsActualIntervalChange",
        value: function onIsActualIntervalChange() {
          return this._onIsActualIntervalChanged;
        }
      }, {
        key: "isLocked",
        value: function isLocked() {
          return this._group.lineTools().length > 0 && (this._lastIsLocked = "Locked" === this._group.locked()), this._lastIsLocked;
        }
      }, {
        key: "onTitleChanged",
        value: function onTitleChanged() {
          return this._onTitleChanged;
        }
      }, {
        key: "onVisibilityChanged",
        value: function onVisibilityChanged() {
          return this._onVisibilityChanged;
        }
      }, {
        key: "onLockChanged",
        value: function onLockChanged() {
          return this._onLockChanged;
        }
      }, {
        key: "setVisible",
        value: function setVisible(e) {
          this._undoModel.lineToolsGroupController().setGroupVisibility(this._group, e);
        }
      }, {
        key: "setLocked",
        value: function setLocked(e) {
          this._undoModel.lineToolsGroupController().setGroupLock(this._group, e);
        }
      }, {
        key: "setName",
        value: function setName(e) {
          this._undoModel.lineToolsGroupController().setGroupName(this._group, e);
        }
      }, {
        key: "isCopiable",
        value: function isCopiable() {
          return !1;
        }
      }, {
        key: "isClonable",
        value: function isClonable() {
          return !1;
        }
      }, {
        key: "zOrder",
        value: function zOrder() {
          return this._group.lineTools().length > 0 && (this._lastActualZOrder = this._group.lineTools()[0].zorder()), this._lastActualZOrder;
        }
      }, {
        key: "remove",
        value: function remove() {
          this._undoModel.lineToolsGroupController().removeGroup(this._group);
        }
      }, {
        key: "canBeAddedToSelection",
        value: function canBeAddedToSelection() {
          var e = this._undoModel.model();

          return this._lineTools.every(function (t) {
            return e.selection().canBeAddedToSelection(t);
          });
        }
      }, {
        key: "setAsSelection",
        value: function setAsSelection() {
          var _this13 = this;

          this._undoModel.model().selectionMacro(function (e) {
            e.clearSelection(), _this13._lineTools.forEach(function (t) {
              return e.addSourceToSelection(t);
            });
          });
        }
      }, {
        key: "addToSelection",
        value: function addToSelection() {
          var _this14 = this;

          this._undoModel.model().selectionMacro(function (e) {
            _this14._lineTools.forEach(function (t) {
              return e.addSourceToSelection(t);
            });
          });
        }
      }, {
        key: "addSourcesToArray",
        value: function addSourcesToArray(e) {
          return e.push.apply(e, _toConsumableArray(this._lineTools)), e;
        }
      }, {
        key: "detachFromParent",
        value: function detachFromParent() {}
      }, {
        key: "insertSourcesBeforeThis",
        value: function insertSourcesBeforeThis(e) {
          var _this15 = this;

          var t = this._insertBeforeTarget();

          this._insertSources(e, function (e) {
            return _this15._undoModel.insertBefore(e, t);
          });
        }
      }, {
        key: "insertSourcesAfterThis",
        value: function insertSourcesAfterThis(e) {
          var _this16 = this;

          var t = this._insertAfterTarget();

          this._insertSources(e, function (e) {
            return _this16._undoModel.insertAfter(e, t);
          });
        }
      }, {
        key: "childrenIds",
        value: function childrenIds() {
          var e = _toConsumableArray(this._lineTools);

          return e.sort(function (e, t) {
            return t.zorder() - e.zorder();
          }), new Set(e.map(function (e) {
            return oo(e.id(), e.instanceId());
          }));
        }
      }, {
        key: "hasChildren",
        value: function hasChildren() {
          return !0;
        }
      }, {
        key: "pane",
        value: function pane() {
          var _this17 = this;

          return (0, T.ensureDefined)(this._undoModel.model().panes().find(function (e) {
            return e.id() === _this17._paneId;
          }));
        }
      }, {
        key: "allowsMovingbetweenPanes",
        value: function allowsMovingbetweenPanes() {
          return !1;
        }
      }, {
        key: "canBeAddedToGroup",
        value: function canBeAddedToGroup() {
          return !1;
        }
      }, {
        key: "canInsertBeforeThis",
        value: function canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
      }, {
        key: "canInsertAfterThis",
        value: function canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
      }, {
        key: "canBeSyncedInLayout",
        value: function canBeSyncedInLayout() {
          return this._lineTools.length > 0 && this._lineTools[0].isSynchronizable();
        }
      }, {
        key: "onSyncStateChanged",
        value: function onSyncStateChanged() {
          return this._syncStateChanged;
        }
      }, {
        key: "setDrawingSyncState",
        value: function setDrawingSyncState(e) {
          if (this.canBeSyncedInLayout()) switch (_e23) {
            case 0:
              var _e23 = this._lineTools.filter(function (e) {
                return null !== e.linkKey().value();
              });

              _e23.length > 0 && this._undoModel.unlinkLines(_e23);
              break;

            case 1:
              var _t26 = this._lineTools.filter(function (e) {
                return null === e.linkKey().value();
              });

              _t26.length > 0 && this._undoModel.shareLineTools(_t26, 1);
          }
        }
      }, {
        key: "getDrawingSyncState",
        value: function getDrawingSyncState() {
          return this.canBeSyncedInLayout() ? this._lineTools.every(function (e) {
            return null !== e.linkKey().value();
          }) ? 1 : 0 : null;
        }
      }, {
        key: "doNotAffectChartInvalidation",
        value: function doNotAffectChartInvalidation() {
          return Io;
        }
      }, {
        key: "_linkKeyChanged",
        value: function _linkKeyChanged() {
          this._syncStateChanged.fire((0, T.ensureNotNull)(this.getDrawingSyncState()));
        }
      }, {
        key: "_canInsertBeforeOrAfter",
        value: function _canInsertBeforeOrAfter(e) {
          return Mo(this.pane(), e);
        }
      }, {
        key: "_insertSources",
        value: function _insertSources(e, t) {
          this._undoModel.beginUndoMacro(Eo);

          var n = e.reduce(function (e, t) {
            return t.addSourcesToArray(e);
          }, []);
          e.forEach(function (e) {
            return e.detachFromParent();
          }), t(n), this._undoModel.endUndoMacro();
        }
      }, {
        key: "_insertBeforeTarget",
        value: function _insertBeforeTarget() {
          return (0, T.ensureNotNull)(this._lineTools.reduce(function (e, t) {
            return null === e ? t : e.zorder() < t.zorder() ? e : t;
          }, null));
        }
      }, {
        key: "_insertAfterTarget",
        value: function _insertAfterTarget() {
          return (0, T.ensureNotNull)(this._lineTools.reduce(function (e, t) {
            return null === e ? t : e.zorder() > t.zorder() ? e : t;
          }, null));
        }
      }, {
        key: "_unsubscribeFromAllLineTools",
        value: function _unsubscribeFromAllLineTools() {
          var _this18 = this;

          this._lineTools.forEach(function (e) {
            e.properties().visible.listeners().unsubscribeAll(_this18), e.properties().frozen.listeners().unsubscribeAll(_this18), e.onIsActualIntervalChange().unsubscribeAll(_this18), e.linkKey().unsubscribe(_this18._linkKeyChangedBound), e.sharingMode().unsubscribe(_this18._linkKeyChangedBound);
          });
        }
      }]);

      return xo;
    }();

    var zo =
    /*#__PURE__*/
    function () {
      function zo(e) {
        _classCallCheck(this, zo);

        this._hoveredObjectChanged = new to.Delegate(), this._entitiesCache = new Map(), this._undoModel = e, this._undoModel.model().hoveredSourceChanged().subscribe(this, this._onModelHoveredSourceChanged);
      }

      _createClass(zo, [{
        key: "destroy",
        value: function destroy() {
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this._entitiesCache.values()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _e24 = _step12.value;
              null == _e24 || _e24.destroy();
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          this._undoModel.model().hoveredSourceChanged().unsubscribe(this, this._onModelHoveredSourceChanged);
        }
      }, {
        key: "getObjectById",
        value: function getObjectById(e) {
          if (this._entitiesCache.has(e)) return (0, T.ensureDefined)(this._entitiesCache.get(e));

          var t = this._createObjectById(e);

          return this._entitiesCache.set(e, t), t;
        }
      }, {
        key: "invalidateCache",
        value: function invalidateCache(e) {
          var _this19 = this;

          Array.from(this._entitiesCache.keys()).forEach(function (t) {
            var n;
            e.has(t) || (null === (n = _this19._entitiesCache.get(t)) || void 0 === n || n.destroy(), _this19._entitiesCache["delete"](t));
          });
        }
      }, {
        key: "canBeGroupped",
        value: function canBeGroupped(e) {
          if (0 === e.length || 1 === e.length && e[0].hasChildren()) return !1;
          var t = [];
          if (e.forEach(function (e) {
            return e.addSourcesToArray(t);
          }), t.some(function (e) {
            return !(0, co.isLineTool)(e) || !e.boundToSymbol();
          })) return !1;

          var n = this._undoModel.model(),
              o = t.map(function (e) {
            return n.paneForSource(e);
          });

          return !(new Set(o).size > 1);
        }
      }, {
        key: "contextMenuActions",
        value: function contextMenuActions(e, t, n) {
          var o = new mo.ActionsProvider(e, n),
              r = [];
          return t.forEach(function (e) {
            return e.addSourcesToArray(r);
          }), o.contextMenuActionsForSources(r);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(e, t) {
          t.insertSourcesAfterThis(e);
        }
      }, {
        key: "insertAfter",
        value: function insertAfter(e, t) {
          t.insertSourcesBeforeThis(e);
        }
      }, {
        key: "setHoveredObject",
        value: function setHoveredObject(e) {
          var t = this._undoModel.model();

          if (null === e) return void t.setHoveredSource(null, null);
          var n = t.dataSourceForId(e);
          null !== n && t.setHoveredSource(n, null);
        }
      }, {
        key: "hoveredObjectId",
        value: function hoveredObjectId() {
          return ko(this._undoModel.model().hoveredSource());
        }
      }, {
        key: "hoveredObjectChanged",
        value: function hoveredObjectChanged() {
          return this._hoveredObjectChanged;
        }
      }, {
        key: "_onModelHoveredSourceChanged",
        value: function _onModelHoveredSourceChanged(e) {
          this._hoveredObjectChanged.fire(ko(e));
        }
      }, {
        key: "_createObjectById",
        value: function _createObjectById(e) {
          var t = ro(e).persistentId,
              n = this._undoModel.model(),
              o = n.dataSourceForId(t);

          if (null !== o) return new Lo(this._undoModel, o);
          var r = n.lineToolsGroupModel().groupForId(t);
          return null !== r ? new xo(this._undoModel, r) : null;
        }
      }]);

      return zo;
    }();

    Error;
    var jo = n(80842),
        Ao = n(10643),
        Ro = n(39347),
        Oo = n(97145),
        Bo = n(97874),
        Fo = n(2872),
        Po = n(84959),
        Wo = n(91730),
        Ho = n(33055),
        Vo = n(35149);
    var Go = (0, l.getLogger)("Platform.GUI.ObjectTree");
    var Uo = new ao.TranslatedString("move objects", v.t(null, void 0, n(40566))),
        Zo = new ao.TranslatedString("lock objects", v.t(null, void 0, n(68163))),
        Ko = new ao.TranslatedString("unlock objects", v.t(null, void 0, n(66824))),
        Yo = new ao.TranslatedString("show objects", v.t(null, void 0, n(63549))),
        $o = new ao.TranslatedString("hide objects", v.t(null, void 0, n(28506))),
        qo = new ao.TranslatedString("remove objects", v.t(null, void 0, n(57428)));

    var Jo =
    /*#__PURE__*/
    function () {
      function Jo(e) {
        var _this20 = this;

        _classCallCheck(this, Jo);

        this._nodes = {}, this._onChange = new to.Delegate(), this._onGroupCreated = new to.Delegate(), this._subscriptions = [], this._removeSourcesPromise = null, this._timeout = null, this._objects = [], this._options = {
          general: !0,
          mainSeries: !0,
          mainSeriesTrade: !0,
          esdStudies: !0,
          fundamentals: !0,
          studies: !0,
          lineTools: !0,
          publishedCharts: !0,
          ordersAndPositions: !0,
          alerts: !1,
          chartEvents: !0,
          objectTree: !1,
          gotoLineTool: !0
        }, this._isContextMenuOpened = new Oo.WatchedValue(!1), this._getObjectsToModify = function (e) {
          var t = _this20.selection().selected();

          return t.find(function (t) {
            return t === e;
          }) ? t.map(_this20._ensuredEntity) : [_this20._ensuredEntity(e)];
        }, this._onActiveChartChanged = function () {
          _this20._cleanup(), _this20._init();
        }, this._cleanup = function () {
          null !== _this20._timeout && (clearTimeout(_this20._timeout), _this20._timeout = null), _this20._subscriptions.forEach(function (e) {
            e.unsubscribeAll(_this20);
          }), _this20._selection.destroy(), _this20._chart.unsubscribe(_this20._onActiveChartChanged), null !== _this20._removeSourcesPromise && _this20._removeSourcesPromise.cancel(), _this20._facade.destroy();
        }, this._init = function () {
          var e = _this20._chart.value();

          e.hasModel() && (_this20._controller = e.model(), _this20._groupController = _this20._controller.lineToolsGroupController(), _this20._model = _this20._controller.model(), _this20._groupModel = _this20._model.lineToolsGroupModel(), _this20._facade = new zo(_this20._controller), _this20._subscriptions = [_this20._model.mainSeries().onStyleChanged(), _this20._model.mainSeries().dataEvents().symbolResolved(), _this20._model.mainSeries().onIntervalChanged(), _this20._model.panesCollectionChanged(), _this20._model.dataSourceCollectionChanged(), _this20._groupModel.onChanged()], _this20._subscriptions.forEach(function (e) {
            e.subscribe(_this20, _this20._update);
          }), _this20._chart.subscribe(_this20._onActiveChartChanged), _this20._selection = new io(_this20._model), _this20._update());
        }, this._update = function () {
          null === _this20._timeout && (_this20._timeout = setTimeout(function () {
            _this20._recalculateTree(), _this20._onChange.fire(), _this20._timeout = null;
          }));
        }, this._ensuredEntity = function (e) {
          return (0, T.ensureNotNull)(_this20._getEntityById(e));
        }, this._chart = e, this._init();
      }

      _createClass(Jo, [{
        key: "destroy",
        value: function destroy() {
          this._cleanup();
        }
      }, {
        key: "getState",
        value: function getState() {
          return {
            nodes: Object.values(this._nodes),
            selection: this._selection.selected()
          };
        }
      }, {
        key: "getChartId",
        value: function getChartId() {
          return this._chart.value().id();
        }
      }, {
        key: "insertSelection",
        value: function insertSelection(e, t) {
          var n = this._facade,
              o = this.selection().selected().map(this._ensuredEntity),
              _this$_normalizeTarge = this._normalizeTargetAndDropType(e, t),
              _this$_normalizeTarge2 = _slicedToArray(_this$_normalizeTarge, 2),
              r = _this$_normalizeTarge2[0],
              i = _this$_normalizeTarge2[1];

          this._controller.withMacro(Uo, function () {
            switch (i) {
              case "before":
                n.insertBefore(o, r);
                break;

              case "after":
                n.insertAfter(o, r);
            }
          }), this._update();
        }
      }, {
        key: "entity",
        value: function entity(e) {
          return this._facade.getObjectById(e);
        }
      }, {
        key: "isMain",
        value: function isMain(e) {
          return ro(e.id()).persistentId === this._controller.mainSeries().id();
        }
      }, {
        key: "selection",
        value: function selection() {
          return this._selection;
        }
      }, {
        key: "setIsLocked",
        value: function setIsLocked(e, t) {
          var n = this._getObjectsToModify(e),
              o = n.every(function (e) {
            return e.doNotAffectChartInvalidation();
          }),
              r = t ? Zo : Ko;

          this._controller.withMacro(r, function () {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = n[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _e25 = _step13.value;

                _e25.setLocked(t);
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                  _iterator13["return"]();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }
          }, o), gn("Lock", mn(n));
        }
      }, {
        key: "setIsVisible",
        value: function setIsVisible(e, t) {
          var n = this._getObjectsToModify(e),
              o = n.every(function (e) {
            return e.doNotAffectChartInvalidation();
          }),
              r = t ? Yo : $o;

          this._controller.withMacro(r, function () {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = n[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _e26 = _step14.value;

                _e26.setVisible(t);
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                  _iterator14["return"]();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }
          }, o), gn("Hide", mn(n));
        }
      }, {
        key: "remove",
        value: function remove(e) {
          var _this21 = this;

          var t = function t() {
            var e = n.every(function (e) {
              return e.doNotAffectChartInvalidation();
            });
            _this21._controller.withMacro(qo, function () {
              var _iteratorNormalCompletion15 = true;
              var _didIteratorError15 = false;
              var _iteratorError15 = undefined;

              try {
                for (var _iterator15 = n[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                  var _e27 = _step15.value;

                  _e27.remove();
                }
              } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                    _iterator15["return"]();
                  }
                } finally {
                  if (_didIteratorError15) {
                    throw _iteratorError15;
                  }
                }
              }
            }, e), gn("Delete", mn(n)), _this21._update();
          },
              n = this._getObjectsToModify(e);

          t();
        }
      }, {
        key: "canSelectionBeGrouped",
        value: function canSelectionBeGrouped() {
          var e = this._getSelectedEntities();

          return this._facade.canBeGroupped(e);
        }
      }, {
        key: "createGroupFromSelection",
        value: function createGroupFromSelection() {
          var e = this._groupController.createGroupFromSelection();

          gn("Create Group");
          var t = oo(e.id, e.instanceId());
          this.selection().set([this._ensuredEntity(t)]), this._onGroupCreated.fire(t), this._update();
        }
      }, {
        key: "isSelectionDropable",
        value: function isSelectionDropable(e, t) {
          var n = this.selection().selected().map(this._ensuredEntity),
              _this$_normalizeTarge3 = this._normalizeTargetAndDropType(e, t),
              _this$_normalizeTarge4 = _slicedToArray(_this$_normalizeTarge3, 2),
              o = _this$_normalizeTarge4[0],
              r = _this$_normalizeTarge4[1];

          switch (r) {
            case "after":
              return o.canInsertAfterThis(n);

            case "before":
              return o.canInsertBeforeThis(n);
          }
        }
      }, {
        key: "onChange",
        value: function onChange() {
          return this._onChange;
        }
      }, {
        key: "onGroupCreated",
        value: function onGroupCreated() {
          return this._onGroupCreated;
        }
      }, {
        key: "isSelectionCloneable",
        value: function isSelectionCloneable() {
          var e = this._getSelectedEntities();

          return e.length > 0 && e.every(function (e) {
            return e.isClonable();
          });
        }
      }, {
        key: "isSelectionCopiable",
        value: function isSelectionCopiable() {
          var e = this._getSelectedEntities();

          return e.length > 0 && e.every(function (e) {
            return e.isCopiable();
          });
        }
      }, {
        key: "openProperties",
        value: function openProperties(e, t) {
          var n = this._model.dataSourceForId(ro(e.id()).persistentId);

          this.selection().selected().length > 1 && this.selection().selected().includes(e.id()) ? this._chart.value().showSelectedSourcesProperties(t) : (this.selection().set([e]), null !== n ? this._controller.mainSeries() === n ? this._chart.value().showGeneralChartProperties(void 0, {
            shouldReturnFocus: !0
          }) : ((0, co.isLineTool)(n) || (0, uo.isStudy)(n)) && this._chart.value().showChartPropertiesForSource(n, t, {
            shouldReturnFocus: !0
          }) : this._chart.value().showChartPropertiesForSources({
            sources: this._chart.value().model().selection().lineDataSources(),
            title: e.title(),
            tabName: t,
            renamable: !0
          }));
        }
      }, {
        key: "canSelectionBeUnmerged",
        value: function canSelectionBeUnmerged() {
          var e = this._getSelectedEntities();

          return 1 === e.length && this.canNodeWithIdBeUnmerged(ro(e[0].id()).persistentId);
        }
      }, {
        key: "canNodeWithIdBeUnmerged",
        value: function canNodeWithIdBeUnmerged(e) {
          var t = this._model.dataSourceForId(e);

          return null !== t && (0, jo.isPriceDataSource)(t) && this._model.isUnmergeAvailableForSource(t);
        }
      }, {
        key: "unmergeSelectionUp",
        value: function unmergeSelectionUp() {
          this._unmergeSelection(0);
        }
      }, {
        key: "unmergeSelectionDown",
        value: function unmergeSelectionDown() {
          this._unmergeSelection(1);
        }
      }, {
        key: "copySelection",
        value: function copySelection() {
          var _this22 = this;

          var e = this._getSelectedEntities(),
              t = e.map(function (e) {
            return (0, T.ensureNotNull)(_this22._model.dataSourceForId(ro(e.id()).persistentId));
          });

          this._chart.value().chartWidgetCollection().clipboard.uiRequestCopy(t), gn("Copy", mn(e));
        }
      }, {
        key: "cloneSelection",
        value: function cloneSelection() {
          var _this23 = this;

          var e = this._getSelectedEntities(),
              t = e.map(function (e) {
            return (0, T.ensureNotNull)(_this23._model.dataSourceForId(ro(e.id()).persistentId));
          });

          t.every(co.isLineTool) && (this._controller.cloneLineTools(_toConsumableArray(t), !1), gn("Clone", mn(e)));
        }
      }, {
        key: "rename",
        value: function rename(e, t) {
          var n = this._getObjectsToModify(e.id());

          1 === n.length && n.some(function (e) {
            return e.canBeRenamed();
          }) && (t(), gn("Rename", mn(n)));
        }
      }, {
        key: "openContextMenu",
        value: function openContextMenu(e, t, n) {
          var _this24 = this;

          var o, r, i, _e28, _e29, _e30, _t27, _r15, _s7, _l3, _a3;

          return regeneratorRuntime.async(function openContextMenu$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  this._objects = this._getObjectsToModify(e.id());
                  r = this._facade.canBeGroupped(this._objects);

                  if (!this._objects.some(function (e) {
                    return e.hasChildren();
                  })) {
                    _context26.next = 6;
                    break;
                  }

                  i = this._getActionsForGroupItem(e, t, r);
                  _context26.next = 11;
                  break;

                case 6:
                  _context26.next = 8;
                  return regeneratorRuntime.awrap(this._facade.contextMenuActions(this._chart.value(), this._objects, this._options));

                case 8:
                  _e28 = _context26.sent;

                  if (i = Array.from(_e28).filter(function (e, t, n) {
                    return "separator" !== e.type || !n[t + 1] || "separator" !== n[t + 1].type;
                  }), 1 === this._objects.length && this._objects[0].canBeRenamed()) {
                    _e29 = i.findIndex(function (e) {
                      return "Copy" === e.id;
                    });
                    i.splice(-1 === _e29 ? i.length : _e29 + 1, 0, this._getRenameAction(t));
                  }

                  if (r) {
                    _e30 = i.findIndex(function (e) {
                      return "Clone" === e.id;
                    });
                    i.splice(-1 === _e30 ? 0 : _e30, 0, this._getGroupAction());
                  }

                case 11:
                  if (i.length > 0) {
                    this._chart.value().updateActions();

                    _t27 = ro(e.id()).persistentId, _r15 = this._model.dataSourceForId(_t27), _s7 = _r15 instanceof go.Series, _l3 = 0 !== e.childrenIds().size;
                    _a3 = _s7 ? {
                      menuName: "ObjectTreeContextMenu",
                      detail: {
                        type: "series",
                        id: _r15.instanceId()
                      }
                    } : (0, co.isLineTool)(_r15) ? {
                      menuName: "ObjectTreeContextMenu",
                      detail: {
                        type: "shape",
                        id: null !== (o = null == _r15 ? void 0 : _r15.id()) && void 0 !== o ? o : null
                      }
                    } : _l3 ? {
                      menuName: "ObjectTreeContextMenu",
                      detail: {
                        type: "groupOfShapes",
                        id: _t27 || null
                      }
                    } : {
                      menuName: "ObjectTreeContextMenu",
                      detail: {
                        type: "study",
                        id: (null == _r15 ? void 0 : _r15.id()) || null
                      }
                    }, Ao.ContextMenuManager.showMenu(i, n, {
                      takeFocus: !0,
                      returnFocus: !0
                    }, _a3, function () {
                      _this24._isContextMenuOpened.setValue(!1);
                    }).then(function () {
                      _this24._isContextMenuOpened.setValue(!0);
                    });
                  }

                case 12:
                case "end":
                  return _context26.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "setHoveredObject",
        value: function setHoveredObject(e) {
          this._facade.setHoveredObject(e);
        }
      }, {
        key: "hoveredObjectChanged",
        value: function hoveredObjectChanged() {
          return this._facade.hoveredObjectChanged();
        }
      }, {
        key: "getNextNodeIdAfterRemove",
        value: function getNextNodeIdAfterRemove(e) {
          var t;

          var _this$getState = this.getState(),
              n = _this$getState.nodes,
              o = ro(e).persistentId,
              r = n.find(function (t) {
            return t.id === e;
          }),
              i = this.entity(e);

          if (!(r && r.parentId && i && i.canBeRemoved())) return null;

          if ((null === (t = i.pane().mainDataSource()) || void 0 === t ? void 0 : t.id()) === o && !this.canNodeWithIdBeUnmerged(o)) {
            var _e31 = n.filter(function (e) {
              return 0 === e.level;
            }).map(function (e) {
              return e.id;
            }),
                _t28 = this._takeNextOrPrevElement(_e31, r.parentId);

            return (0, T.ensureDefined)(n.find(function (e) {
              return e.id === _t28;
            })).children[0];
          }

          var s = (0, T.ensureDefined)(n.find(function (e) {
            return e.id === r.parentId;
          })).children;
          return 1 === s.length ? this.getNextNodeIdAfterRemove(r.parentId) : this._takeNextOrPrevElement(s, e);
        }
      }, {
        key: "isContextMenuOpened",
        value: function isContextMenuOpened() {
          return this._isContextMenuOpened.readonly();
        }
      }, {
        key: "getChartLayout",
        value: function getChartLayout() {
          return this._chart.value().chartWidgetCollection().layout;
        }
      }, {
        key: "_takeNextOrPrevElement",
        value: function _takeNextOrPrevElement(e, t) {
          var n = e.indexOf(t);
          return e[n === e.length - 1 ? n - 1 : n + 1];
        }
      }, {
        key: "_getGroupAction",
        value: function _getGroupAction() {
          var _this25 = this;

          return new Ro.Action({
            actionId: "ObjectsTree.CreateGroup",
            label: jn,
            icon: O,
            onExecute: function onExecute() {
              _this25.createGroupFromSelection();
            }
          });
        }
      }, {
        key: "_getRenameAction",
        value: function _getRenameAction(e) {
          var _this26 = this;

          return new Ro.Action({
            actionId: "ObjectsTree.RenameItem",
            label: An,
            icon: Ho,
            onExecute: function onExecute() {
              e(), gn("Context menu rename", mn(_this26._objects));
            }
          });
        }
      }, {
        key: "_getActionsForGroupItem",
        value: function _getActionsForGroupItem(e, t, n) {
          var _this27 = this;

          var o = [];

          this._objects.forEach(function (e) {
            return e.addSourcesToArray(o);
          });

          var r = [];
          1 === this._objects.length && r.unshift(this._getRenameAction(t), new Ro.Separator()), n && r.unshift(this._getGroupAction(), new Ro.Separator());
          var i = (0, mo.createSyncDrawingActions)(this._chart.value(), o.filter(co.isLineTool));
          i.length && (i.shift(), i.push(new Ro.Separator()), r.push.apply(r, _toConsumableArray(i)));

          var s = this._chart.value().actions().format.getState();

          return r.push(new Ro.Action({
            actionId: "ObjectsTree.ToggleItemLocked",
            label: e.isLocked() ? Rn : On,
            icon: e.isLocked() ? Bo : Fo,
            onExecute: function onExecute() {
              return _this27.setIsLocked(e.id(), !e.isLocked());
            }
          }), new Ro.Action({
            actionId: "ObjectsTree.ToggleItemVisibility",
            label: e.isVisible() ? Bn : Fn,
            icon: e.isVisible() ? Po : Wo,
            onExecute: function onExecute() {
              return _this27.setIsVisible(e.id(), !e.isVisible());
            }
          }), new Ro.Action({
            actionId: "ObjectsTree.RemoveItem",
            label: Pn,
            icon: Vo,
            onExecute: function onExecute() {
              return _this27.remove(e.id());
            },
            hotkeyHash: C.isMacKeyboard ? 8 : 46
          }), new Ro.Separator(), new Ro.Action({
            actionId: s.actionId,
            label: s.label,
            icon: s.icon,
            onExecute: function onExecute() {
              return _this27.openProperties(e);
            }
          })), r;
        }
      }, {
        key: "_unmergeSelection",
        value: function _unmergeSelection(e) {
          var t = this._getSelectedEntities();

          if (1 !== t.length) throw new Error("Only one object can be unmerged");
          var n = t[0],
              o = (0, T.ensureNotNull)(this._model.dataSourceForId(ro(n.id()).persistentId));
          if (!(0, jo.isPriceDataSource)(o)) throw new Error("Entity is not IPriceDataSource");
          (0 === e ? this._controller.unmergeSourceUp : this._controller.unmergeSourceDown).call(this._controller, o);
          gn(0 === e ? "New pane above" : "New pane below", mn([n]));
        }
      }, {
        key: "_recalculateTree",
        value: function _recalculateTree() {
          var e = new so(this._controller, this._facade);
          this._nodes = e.buildTree();
        }
      }, {
        key: "_normalizeTargetAndDropType",
        value: function _normalizeTargetAndDropType(e, t) {
          var n = this._ensuredEntity(e);

          return "inside" === t && (t = "before", n = (0, T.ensureNotNull)(this.entity(_toConsumableArray(n.childrenIds()).shift() || ""))), [n, t];
        }
      }, {
        key: "_getSelectedEntities",
        value: function _getSelectedEntities() {
          var _this28 = this;

          var _this$_selection$sele = this._selection.selected().reduce(function (e, t) {
            var n = _this28._getEntityById(t);

            return n ? (e.selected.push(n), e) : (e.removed.push(t), e);
          }, {
            selected: [],
            removed: []
          }),
              e = _this$_selection$sele.selected,
              t = _this$_selection$sele.removed;

          return t.length && Go.logWarn("Detected dangling sources in selection. They will be ignored: ".concat(JSON.stringify(t))), e;
        }
      }, {
        key: "_getEntityById",
        value: function _getEntityById(e) {
          return this._facade.getObjectById(e);
        }
      }]);

      return Jo;
    }();

    var Qo = n(85067);

    var Xo =
    /*#__PURE__*/
    function (_Qo$DialogRenderer) {
      _inherits(Xo, _Qo$DialogRenderer);

      function Xo() {
        var _this29;

        _classCallCheck(this, Xo);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(Xo).call(this)), _this29._handleClose = function () {
          r.unmountComponentAtNode(_this29._container), _this29._setVisibility(!1), null !== _this29._viewModel && (_this29._viewModel.destroy(), _this29._viewModel = null);
        };
        var e = (0, Xn.service)(eo.CHART_WIDGET_COLLECTION_SERVICE);
        _this29._activeChartWidget = e.activeChartWidget.value(), _this29._viewModel = new Jo(e.activeChartWidget);
        return _this29;
      }

      _createClass(Xo, [{
        key: "hide",
        value: function hide() {
          this._handleClose();
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this.visible().value();
        }
      }, {
        key: "show",
        value: function show() {
          var _this30 = this;

          g().then(function () {
            null !== _this30._viewModel && (r.render(o.createElement(Jn, {
              onClose: _this30._handleClose,
              viewModel: _this30._viewModel,
              activeChartWidget: _this30._activeChartWidget
            }), _this30._container), _this30._setVisibility(!0));
          });
        }
      }]);

      return Xo;
    }(Qo.DialogRenderer);
  },
  37968: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useForceUpdate: function useForceUpdate() {
        return r;
      }
    });
    var o = n(50959);

    var r = function r() {
      var _ref67 = (0, o.useReducer)(function (e) {
        return e + 1;
      }, 0),
          _ref68 = _slicedToArray(_ref67, 2),
          e = _ref68[1];

      return e;
    };
  },
  77975: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useWatchedValueReadonly: function useWatchedValueReadonly() {
        return r;
      }
    });
    var o = n(50959);

    var r = function r(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var n = "watchedValue" in e ? e.watchedValue : void 0,
          r = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          _ref69 = (0, o.useState)(n ? n.value() : r),
          _ref70 = _slicedToArray(_ref69, 2),
          i = _ref70[0],
          s = _ref70[1];

      return (t ? o.useLayoutEffect : o.useEffect)(function () {
        if (n) {
          s(n.value());

          var _e32 = function _e32(e) {
            return s(e);
          };

          return n.subscribe(_e32), function () {
            return n.unsubscribe(_e32);
          };
        }

        return function () {};
      }, [n]), i;
    };
  },
  63932: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Spinner: function Spinner() {
        return s;
      }
    });
    var o = n(50959),
        r = n(97754),
        i = n(58096);
    n(83135);

    function s(e) {
      var t = r(e.className, "tv-spinner", "tv-spinner--shown", "tv-spinner--size_".concat(i.spinnerSizeMap[e.size || i.DEFAULT_SIZE]));
      return o.createElement("div", {
        className: t,
        style: e.style,
        role: "progressbar"
      });
    }
  },
  81261: function _(e, t, n) {
    "use strict";

    n.d(t, {
      focusFirstMenuItem: function focusFirstMenuItem() {
        return c;
      },
      handleAccessibleMenuFocus: function handleAccessibleMenuFocus() {
        return l;
      },
      handleAccessibleMenuKeyDown: function handleAccessibleMenuKeyDown() {
        return a;
      },
      queryMenuElements: function queryMenuElements() {
        return h;
      }
    });
    var o = n(16838),
        r = n(71468),
        i = n(68335);
    var s = [37, 39, 38, 40];

    function l(e, t) {
      e.target && o.PLATFORM_ACCESSIBILITY_ENABLED && e.relatedTarget === t.current && c(e.target);
    }

    function a(e) {
      if (!o.PLATFORM_ACCESSIBILITY_ENABLED) return;
      if (e.defaultPrevented) return;
      var t = (0, i.hashFromEvent)(e);
      if (!s.includes(t)) return;
      var n = document.activeElement;
      if (!(document.activeElement instanceof HTMLElement)) return;
      var l = h(e.currentTarget).sort(o.navigationOrderComparator);
      if (0 === l.length) return;
      var a = document.activeElement.closest('[data-role="menuitem"]');
      if (!(a instanceof HTMLElement)) return;
      var c = l.indexOf(a);
      if (-1 === c) return;

      var m = g(a),
          p = m.indexOf(document.activeElement),
          f = -1 !== p,
          v = function v(e) {
        n && (0, r.becomeSecondaryElement)(n), (0, r.becomeMainElement)(e), e.focus();
      };

      switch (t) {
        case 37:
          if (!m.length) return;
          e.preventDefault(), v(0 === p ? l[c] : f ? u(m, p, -1) : m[m.length - 1]);
          break;

        case 39:
          if (!m.length) return;
          e.preventDefault(), p === m.length - 1 ? v(l[c]) : v(f ? u(m, p, 1) : m[0]);
          break;

        case 38:
          {
            e.preventDefault();

            var _t29 = u(l, c, -1);

            if (f) {
              var _e33 = d(_t29, p);

              v(_e33 || _t29);
              break;
            }

            v(_t29);
            break;
          }

        case 40:
          {
            e.preventDefault();

            var _t30 = u(l, c, 1);

            if (f) {
              var _e34 = d(_t30, p);

              v(_e34 || _t30);
              break;
            }

            v(_t30);
          }
      }
    }

    function c(e) {
      var _h = h(e),
          _h2 = _slicedToArray(_h, 1),
          t = _h2[0];

      t && ((0, r.becomeMainElement)(t), t.focus());
    }

    function u(e, t, n) {
      return e[(t + e.length + n) % e.length];
    }

    function d(e, t) {
      var n = g(e);
      return n.length ? n[(t + n.length) % n.length] : null;
    }

    function h(e) {
      return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled], [aria-disabled])')).filter((0, o.createScopedVisibleElementFilter)(e));
    }

    function g(e) {
      return Array.from(e.querySelectorAll("[tabindex]:not([disabled], [aria-disabled])")).filter((0, o.createScopedVisibleElementFilter)(e));
    }
  },
  36898: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useMouseClickAutoBlur: function useMouseClickAutoBlur() {
        return s;
      }
    });
    var o = n(50959),
        r = n(76460),
        i = n(16838);

    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      (0, o.useEffect)(function () {
        if (!i.PLATFORM_ACCESSIBILITY_ENABLED || !t) return;

        var n = function n(t) {
          var n = e.current;
          null !== n && document.activeElement instanceof HTMLElement && ((0, r.isKeyboardClick)(t) || n.contains(document.activeElement) && "INPUT" !== document.activeElement.tagName && document.activeElement.blur());
        };

        return window.addEventListener("click", n, !0), function () {
          return window.removeEventListener("click", n, !0);
        };
      }, [t]);
    }
  },
  48889: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ToolbarIconButton: function ToolbarIconButton() {
        return l;
      }
    });
    var o = n(50959),
        r = n(50238),
        i = n(16838),
        s = n(50813);
    var l = (0, o.forwardRef)(function (e, t) {
      var n = e.tooltip,
          l = _objectWithoutProperties(e, ["tooltip"]),
          _ref71 = (0, r.useRovingTabindexElement)(t),
          _ref72 = _slicedToArray(_ref71, 2),
          a = _ref72[0],
          c = _ref72[1];

      return o.createElement(s.ToolWidgetIconButton, _objectSpread({
        "aria-label": i.PLATFORM_ACCESSIBILITY_ENABLED ? n : void 0
      }, l, {
        tag: i.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
        ref: a,
        tabIndex: c,
        "data-tooltip": n
      }));
    });
  },
  50298: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ToolbarMenuButton: function ToolbarMenuButton() {
        return u;
      }
    });
    var o = n(50959),
        r = n(39416),
        i = n(8087),
        s = n(50238),
        l = n(16838),
        a = n(36898),
        c = n(81261);
    var u = (0, o.forwardRef)(function (e, t) {
      var n = e.tooltip,
          _e$menuReference = e.menuReference,
          u = _e$menuReference === void 0 ? null : _e$menuReference,
          d = _objectWithoutProperties(e, ["tooltip", "menuReference"]),
          _ref73 = (0, s.useRovingTabindexElement)(null),
          _ref74 = _slicedToArray(_ref73, 2),
          h = _ref74[0],
          g = _ref74[1],
          m = (0, r.useFunctionalRefObject)(u);

      return (0, a.useMouseClickAutoBlur)(m), o.createElement(i.ToolWidgetMenu, _objectSpread({
        "aria-label": l.PLATFORM_ACCESSIBILITY_ENABLED ? n : void 0
      }, d, {
        ref: t,
        tag: l.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
        reference: h,
        tabIndex: g,
        "data-tooltip": n,
        menuReference: m,
        onMenuKeyDown: c.handleAccessibleMenuKeyDown,
        onMenuFocus: function onMenuFocus(e) {
          return (0, c.handleAccessibleMenuFocus)(e, h);
        }
      }));
    });
  },
  54079: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Toolbar: function Toolbar() {
        return d;
      }
    });
    var o = n(50959),
        r = n(50151),
        i = n(47201),
        s = n(3343),
        l = n(16838),
        a = n(71468),
        c = n(39416),
        u = n(36898);
    var d = (0, o.forwardRef)(function (e, t) {
      var n = e.onKeyDown,
          d = e.orientation,
          _e$blurOnEscKeydown = e.blurOnEscKeydown,
          h = _e$blurOnEscKeydown === void 0 ? !0 : _e$blurOnEscKeydown,
          _e$blurOnClick = e.blurOnClick,
          g = _e$blurOnClick === void 0 ? !0 : _e$blurOnClick,
          m = _objectWithoutProperties(e, ["onKeyDown", "orientation", "blurOnEscKeydown", "blurOnClick"]),
          p = l.PLATFORM_ACCESSIBILITY_ENABLED ? {
        role: "toolbar",
        "aria-orientation": d
      } : {},
          f = (0, c.useFunctionalRefObject)(t);

      return (0, o.useLayoutEffect)(function () {
        if (!l.PLATFORM_ACCESSIBILITY_ENABLED) return;

        var e = (0, r.ensureNotNull)(f.current),
            t = function t() {
          var t = (0, l.queryTabbableElements)(e).sort(l.navigationOrderComparator);

          if (0 === t.length) {
            var _sort = (0, l.queryFocusableElements)(e).sort(l.navigationOrderComparator),
                _sort2 = _slicedToArray(_sort, 1),
                _t31 = _sort2[0];

            if (void 0 === _t31) return;
            (0, a.becomeMainElement)(_t31);
          }

          if (t.length > 1) {
            var _t32 = _toArray(t),
                _e35 = _t32.slice(1);

            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = _e35[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var _t33 = _step16.value;
                (0, a.becomeSecondaryElement)(_t33);
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                  _iterator16["return"]();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }
          }
        };

        return window.addEventListener("keyboard-navigation-activation", t), function () {
          return window.removeEventListener("keyboard-navigation-activation", t);
        };
      }, []), (0, u.useMouseClickAutoBlur)(f, g), o.createElement("div", _objectSpread({}, m, {}, p, {
        ref: f,
        onKeyDown: (0, i.createSafeMulticastEventHandler)(function (e) {
          if (!l.PLATFORM_ACCESSIBILITY_ENABLED) return;
          if (e.defaultPrevented) return;
          if (!(document.activeElement instanceof HTMLElement)) return;
          var t = (0, s.hashFromEvent)(e);
          if (27 === t) return e.preventDefault(), void document.activeElement.blur();
          if ("vertical" !== d && 37 !== t && 39 !== t) return;
          if ("vertical" === d && 38 !== t && 40 !== t) return;
          var n = e.currentTarget,
              o = (0, l.queryFocusableElements)(n).sort(l.navigationOrderComparator);
          if (0 === o.length) return;
          var r = o.indexOf(document.activeElement);
          if (-1 === r) return;
          e.preventDefault();

          var i = function i() {
            var e = (r + o.length - 1) % o.length;
            (0, a.becomeSecondaryElement)(o[r]), (0, a.becomeMainElement)(o[e]), o[e].focus();
          },
              c = function c() {
            var e = (r + o.length + 1) % o.length;
            (0, a.becomeSecondaryElement)(o[r]), (0, a.becomeMainElement)(o[e]), o[e].focus();
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
        }, n)
      }));
    });
  },
  29540: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" d="M15 24a21 21 0 1 1 42 0v7.41l8.97 5.01 1.08.6-.82.94-7.77 8.82 2.34 2.53-1.47 1.36L57 48.15V69H46v-7h-6v5h-9V56h-6v13H15V48.15l-2.33 2.52-1.47-1.36 2.35-2.53-7.78-8.82-.82-.93 1.08-.6L15 31.4V24Zm0 9.7-6.9 3.87L15 45.4V33.7Zm42 11.7 6.91-7.83-6.9-3.87v11.7ZM36 5a19 19 0 0 0-19 19v43h6V54h10v11h5v-5h10v7h7V24A19 19 0 0 0 36 5Zm-5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM42.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>';
  },
  36296: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
  },
  33055: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
  },
  69533: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
  },
  57674: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 11.5v8a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-8m-17 0v-4a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 1 1v2m-17 0h17"/></svg>';
  },
  80465: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6C4.67 6 4 6.67 4 7.5V20.5c0 .83.67 1.5 1.5 1.5H16v-1H5.5a.5.5 0 0 1-.5-.5V12h16v1h1V9.5c0-.83-.67-1.5-1.5-1.5h-8.8L9.86 6.15 9.71 6H5.5zM21 11H5V7.5c0-.28.22-.5.5-.5h3.8l1.85 1.85.14.15h9.21c.28 0 .5.22.5.5V11zm1 11v-3h3v-1h-3v-3h-1v3h-3v1h3v3h1z"/></svg>';
  },
  94007: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"/></svg>';
  },
  52870: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
  },
  74059: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M21.106 12.5H6.894a.5.5 0 0 1-.318-.886L14 5.5l7.424 6.114a.5.5 0 0 1-.318.886zM21.106 16.5H6.894a.5.5 0 0 0-.318.886L14 23.5l7.424-6.114a.5.5 0 0 0-.318-.886z"/></svg>';
  },
  91730: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.605 14.089A10.052 10.052 0 0 1 4.56 14l.046-.089a17.18 17.18 0 0 1 2.329-3.327C8.58 8.758 10.954 7 14 7c3.046 0 5.421 1.757 7.066 3.585A17.18 17.18 0 0 1 23.44 14l-.046.089a17.18 17.18 0 0 1-2.329 3.327C19.42 19.242 17.046 21 14 21c-3.046 0-5.421-1.757-7.066-3.584a17.18 17.18 0 0 1-2.329-3.327zm19.848-.3L24 14l.453.212-.001.002-.003.005-.009.02a16.32 16.32 0 0 1-.662 1.195c-.44.72-1.1 1.684-1.969 2.65C20.08 20.008 17.454 22 14 22c-3.454 0-6.079-1.993-7.81-3.916a18.185 18.185 0 0 1-2.469-3.528 10.636 10.636 0 0 1-.161-.318l-.01-.019-.002-.005v-.002L4 14a55.06 55.06 0 0 1-.453-.212l.001-.002.003-.005.009-.02.033-.067a16.293 16.293 0 0 1 .629-1.126c.44-.723 1.1-1.686 1.969-2.652C7.92 7.993 10.546 6 14 6c3.454 0 6.079 1.993 7.81 3.916a18.183 18.183 0 0 1 2.469 3.528 10.588 10.588 0 0 1 .161.318l.01.019.002.005v.002zM24 14l.453-.211.099.211-.099.211L24 14zm-20.453-.211L4 14l-.453.211L3.448 14l.099-.211zM11 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>';
  },
  7295: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 12.5l4.59-4.59a2 2 0 0 1 2.83 0l3.17 3.17a2 2 0 0 0 2.83 0L22.5 6.5m-8 9.5v5.5M12 19l2.5 2.5L17 19m4.5 3v-5.5M19 19l2.5-2.5L24 19"/></svg>';
  },
  28824: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
  },
  49756: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4A2.5 2.5 0 0 0 7 5.5V7h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5.5a3.5 3.5 0 0 1 6.231-2.19c-.231.19-.73.69-.73.69zM13 8H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
  },
  62766: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"/></svg>';
  },
  98129: function _(e) {
    e.exports = {
      ar: ["استنساخ ، نسخ"],
      ca_ES: ["Clona, Copia"],
      cs: "Clone, Copy",
      de: ["Klonen, Kopieren"],
      el: "Clone, Copy",
      en: "Clone, Copy",
      es: ["Clonar, Copiar"],
      fa: "Clone, Copy",
      fr: ["Cloner, Copier"],
      he_IL: ["שכפל, העתק"],
      hu_HU: "Clone, Copy",
      id_ID: ["Duplikat, Salin"],
      it: ["Clona, copia"],
      ja: ["複製、コピー"],
      ko: ["클론, 카피"],
      ms_MY: ["Klon, Salin"],
      nl_NL: "Clone, Copy",
      pl: ["Klonuj, Kopiuj"],
      pt: ["Clonar, Copiar"],
      ro: "Clone, Copy",
      ru: ["Клонировать, копировать"],
      sv: ["Klon, kopiera"],
      th: ["โคลน, ก๊อปปี้"],
      tr: ["Klonla, Kopyala"],
      vi: ["Nhân bản, Sao chép"],
      zh: ["克隆，复制"],
      zh_TW: ["克隆，複製"]
    };
  },
  91073: function _(e) {
    e.exports = {
      ar: ["أنشئ مجموعة من الرسومات"],
      ca_ES: ["Creeu un grup de gràfics"],
      cs: "Create a group of drawings",
      de: ["Erstellen Sie eine Gruppe von Zeichnungen"],
      el: "Create a group of drawings",
      en: "Create a group of drawings",
      es: ["Cree un grupo de graficos"],
      fa: "Create a group of drawings",
      fr: ["Créer un groupe de dessins"],
      he_IL: ["צור קבוצת שרטוטים"],
      hu_HU: "Create a group of drawings",
      id_ID: ["Buat kelompok untuk gambar"],
      it: ["Crea un gruppo di disegni"],
      ja: ["描画のグループを作成"],
      ko: ["드로잉 그룹 만들기"],
      ms_MY: ["Cipta kumpulan untuk lukisan"],
      nl_NL: "Create a group of drawings",
      pl: ["Utwórz grupę obiektów rysowania"],
      pt: ["Criar um grupo de desenhos"],
      ro: "Create a group of drawings",
      ru: ["Создать группу объектов рисования"],
      sv: ["Skapa en grup ritningar"],
      th: ["สร้างกรุ๊ปของการวาด"],
      tr: ["Bir grup çizim oluşturun"],
      vi: ["Tạo nhóm các hình vẽ"],
      zh: ["建立一组绘图"],
      zh_TW: ["建立一組繪圖"]
    };
  },
  38207: function _(e) {
    e.exports = {
      ar: ["المجموعة مخفية في الفاصل الزمني الحالي"],
      ca_ES: ["El grup està ocult a l'interval actual"],
      cs: "Group is hidden on current interval",
      de: ["Gruppe ist im aktuellen Intervall verborgen"],
      el: "Group is hidden on current interval",
      en: "Group is hidden on current interval",
      es: ["El grupo está oculto en el intervalo actual"],
      fa: "Group is hidden on current interval",
      fr: ["Le groupe est caché sur l'intervalle actuel"],
      he_IL: ["הקבוצה מוסתרת באינטרוול הנוכחי"],
      hu_HU: "Group is hidden on current interval",
      id_ID: ["Grup disembunyikan pada interval saat ini"],
      it: ["Il gruppo è nascosto nel timeframe corrente"],
      ja: ["グループは現在の時間足で非表示です"],
      ko: ["현재 인터벌에 대해 그룹이 감춰져 있습니다"],
      ms_MY: ["Kumpulan disembunyikan pada selang masa sekarang"],
      nl_NL: "Group is hidden on current interval",
      pl: ["Grupa jest ukryta na bieżącym interwale"],
      pt: ["O grupo está oculto no intervalo atual"],
      ro: "Group is hidden on current interval",
      ru: ["Группа скрыта на текущем интервале"],
      sv: ["Gruppen är dold i det aktuella intervallet"],
      th: ["กรุ๊ปถูกซ่อนบนช่วงเวลาปัจจุบัน"],
      tr: ["Grup şu anki aralıkta gizli"],
      vi: ["Nhóm được ẩn trong chế độ hiện tại"],
      zh: ["该组在当前时间间隔内隐藏"],
      zh_TW: ["該組隱藏在當前的時間間隔內"]
    };
  },
  39781: function _(e) {
    e.exports = {
      ar: ["الرسم مخفي على الفاصل الزمني الحالي"],
      ca_ES: ["El dibuix està ocult a l'interval actual"],
      cs: "Drawing is hidden on current interval",
      de: ["Zeichnung ist für das aktuelle Intervall ausgeblendet"],
      el: "Drawing is hidden on current interval",
      en: "Drawing is hidden on current interval",
      es: ["El dibujo está oculto en el intervalo actual"],
      fa: "Drawing is hidden on current interval",
      fr: ["Le dessin est caché sur l'intervalle actuel"],
      he_IL: ["הציור מוסתר באינטרוול הנוכחי"],
      hu_HU: "Drawing is hidden on current interval",
      id_ID: ["Gambar disembunyikan pada interval saat ini"],
      it: ["Il disegno è nascosto sul timeframe corrente"],
      ja: ["描画は現在の時間足で非表示です"],
      ko: ["커런트 인터벌에서는 드로잉이 숨겨져 있습니다"],
      ms_MY: ["Lukisan disembunyikan pada selang masa terkini"],
      nl_NL: "Drawing is hidden on current interval",
      pl: ["Rysunek jest ukryty na bieżącym interwale"],
      pt: ["O desenho está oculto no intervalo atual"],
      ro: "Drawing is hidden on current interval",
      ru: ["Объект рисования скрыт на этом интервале"],
      sv: ["Ritning är dold på aktuellt intervall"],
      th: ["การวาดถูกซ่อนไว้สำหรับช่วงเวลาปัจจุบัน"],
      tr: ["Çizim, geçerli aralıkta gizlendi"],
      vi: ["Bản vẽ bị ẩn trong khoảng thời gian hiện tại"],
      zh: ["在当前时间周期内隐藏绘图"],
      zh_TW: ["在當前時間周期內隱藏繪圖"]
    };
  },
  31095: function _(e) {
    e.exports = {
      ar: ["شجرة الكائنات"],
      ca_ES: ["Arbre d'objectes"],
      cs: "Object tree",
      de: ["Objektbaum"],
      el: "Object tree",
      en: "Object tree",
      es: ["Árbol de objetos"],
      fa: "Object tree",
      fr: ["Arborescence des objets"],
      he_IL: ["אובייקט עץ"],
      hu_HU: "Object tree",
      id_ID: ["Pohon objek"],
      it: ["Albero oggetti"],
      ja: ["オブジェクトツリー"],
      ko: ["오브젝트 트리"],
      ms_MY: ["Salasilah Objek"],
      nl_NL: "Object tree",
      pl: ["Drzewo obiektów"],
      pt: ["Árvore de objetos"],
      ro: "Object tree",
      ru: ["Дерево объектов"],
      sv: ["Objektträd"],
      th: ["แผนผังวัตถุ"],
      tr: ["Nesne ağacı"],
      vi: ["Danh sách đối tượng"],
      zh: ["对象树"],
      zh_TW: ["物件樹"]
    };
  },
  74860: function _(e) {
    e.exports = {
      ar: ["رسومات محلية"],
      ca_ES: ["Dibuixos locals"],
      cs: "Local drawings",
      de: ["Lokale Zeichnungen"],
      el: "Local drawings",
      en: "Local drawings",
      es: ["Dibujos locales"],
      fa: "Local drawings",
      fr: ["Dessins locaux"],
      he_IL: ["שרטוטים מקומיים"],
      hu_HU: "Local drawings",
      id_ID: ["Gambar lokal"],
      it: ["Disegni in loco"],
      ja: ["ローカルの描画"],
      ko: ["로컬 드로잉"],
      ms_MY: ["Lukisan tempatan"],
      nl_NL: "Local drawings",
      pl: ["Rysunki lokalne"],
      pt: ["Desenhos locais"],
      ro: "Local drawings",
      ru: ["На выбранном графике"],
      sv: ["Lokala ritningar"],
      th: ["ภาพวาดท้องถิ่น"],
      tr: ["Lokal çizimler"],
      vi: ["Bản vẽ cục bộ"],
      zh: ["本地绘图"],
      zh_TW: ["當地繪圖"]
    };
  },
  72357: function _(e) {
    e.exports = {
      ar: ["إدارة رسومات التنسيق"],
      ca_ES: ["Gestiona els dibuixos dels dissenys"],
      cs: "Manage layout drawings",
      de: ["Zeichnungen des Layouts verwalten"],
      el: "Manage layout drawings",
      en: "Manage layout drawings",
      es: ["Gestionar los dibujos de los diseños"],
      fa: "Manage layout drawings",
      fr: ["Gérer les dessins de mise en page"],
      he_IL: ["נהל שרטוטי פריסה"],
      hu_HU: "Manage layout drawings",
      id_ID: ["Kelola layout gambar"],
      it: ["Gestisci disegni del layout"],
      ja: ["レイアウトの描画を管理"],
      ko: ["레이아웃 드로잉 관리"],
      ms_MY: ["Urus susun atur lukisan"],
      nl_NL: "Manage layout drawings",
      pl: ["Zarządzaj rysunkami układu"],
      pt: ["Administre seu layout de desenhos"],
      ro: "Manage layout drawings",
      ru: ["Настройки объектов рисования графика"],
      sv: ["Hantera layoutritningar"],
      th: ["จัดการการวาดเลย์เอาท์"],
      tr: ["Yerleşim çizimlerini yönet"],
      vi: ["Quản lý bố cục hình vẽ"],
      zh: ["管理布局绘图"],
      zh_TW: ["管理版面繪圖"]
    };
  },
  18570: function _(e) {
    e.exports = {
      ar: ["لا يوجد رسوم حتى الآن"],
      ca_ES: ["Encara no hi ha dibuixos"],
      cs: ["Zatím Žádné Nákresy"],
      de: ["Noch keine Zeichnungen"],
      el: ["Δεν υπάρχουν ακομα σχέδια"],
      en: "No drawings yet",
      es: ["No hay dibujos todavía"],
      fa: ["شکلی رسم نشده است"],
      fr: ["Pas de Dessins pour le moment"],
      he_IL: ["אין שרטוט עדיין"],
      hu_HU: ["Nincs még rajz"],
      id_ID: ["Belum ada gambar saat ini"],
      it: ["Nessun disegno disponibile"],
      ja: ["未描画"],
      ko: ["그림없음"],
      ms_MY: ["Masih belum ada lukisan"],
      nl_NL: ["Nog geen tekeningen"],
      pl: ["Brak rysunków"],
      pt: ["Ainda sem desenhos"],
      ro: "No drawings yet",
      ru: ["Нет инструментов рисования"],
      sv: ["Inga ritningar än"],
      th: ["ยังไม่มีรูปวาด"],
      tr: ["Henüz çizim yok"],
      vi: ["Chưa có bản vẽ nào"],
      zh: ["尚未绘图"],
      zh_TW: ["尚無任何繪圖"]
    };
  },
  87871: function _(e) {
    e.exports = {
      ar: ["متزامن كليًا"],
      ca_ES: ["Sincronitzat globalment"],
      cs: "Synced globally",
      de: ["Global synchronisiert"],
      el: "Synced globally",
      en: "Synced globally",
      es: ["Sincronizado globalmente"],
      fa: "Synced globally",
      fr: ["Synchronisé globalement"],
      he_IL: ["מסונכרן ברחבי העולם"],
      hu_HU: "Synced globally",
      id_ID: ["Disinkronisasi secara global"],
      it: ["Sincronizzazione globale"],
      ja: ["グローバルに同期"],
      ko: ["전체 싱크"],
      ms_MY: ["Disegerakkan secara sejagat"],
      nl_NL: "Synced globally",
      pl: ["Zsynchronizowane globalnie"],
      pt: ["Sincronizado em tudo"],
      ro: "Synced globally",
      ru: ["Синхр. везде"],
      sv: ["Synkad globalt"],
      th: ["ซิงค์ทั่วโลก"],
      tr: ["Küresel senkronize"],
      vi: ["Đã đồng bộ hóa trên toàn cầu"],
      zh: ["全局同步"],
      zh_TW: ["全球同步"]
    };
  },
  10538: function _(e) {
    e.exports = {
      ar: ["تمت المزامنة في التنسيق"],
      ca_ES: ["Sincronitzat a la plantilla"],
      cs: "Synced in layout",
      de: ["Im Layout synchronisiert"],
      el: "Synced in layout",
      en: "Synced in layout",
      es: ["Sincronizado en la plantilla"],
      fa: "Synced in layout",
      fr: ["Synchronisé dans la mise en page"],
      he_IL: ["מסונכרן בפריסה"],
      hu_HU: "Synced in layout",
      id_ID: ["Disinkronisasi dalam layout"],
      it: ["Sincronizzazione su layout"],
      ja: ["レイアウト内で同期"],
      ko: ["레이아웃 싱크"],
      ms_MY: ["Disegerakkan di dalam susun atur"],
      nl_NL: "Synced in layout",
      pl: ["Zsynchronizowane w układzie"],
      pt: ["Sincronizado no layout"],
      ro: "Synced in layout",
      ru: ["Синхр. на всех графиках"],
      sv: ["Synkad i layout"],
      th: ["ซิงค์ในเลย์เอาต์"],
      tr: ["Düzende senkronize"],
      vi: ["Đã đồng bộ hóa trong bố cục"],
      zh: ["在布局内同步"],
      zh_TW: ["版面同步"]
    };
  },
  85128: function _(e) {
    e.exports = {
      ar: ["إزالة كافة الرسومات لهذا الرمز"],
      ca_ES: ["Elimina tots els dibuixos per a aquest símbol"],
      cs: "Remove all drawings for this symbol",
      de: ["Alle Zeichnungen für dieses Symbol entfernen"],
      el: "Remove all drawings for this symbol",
      en: "Remove all drawings for this symbol",
      es: ["Eliminar todos los dibujos para este símbolo"],
      fa: "Remove all drawings for this symbol",
      fr: ["Supprimer tous les dessins pour ce symbole"],
      he_IL: ["הסר את כל השרטוטים לסימול זה"],
      hu_HU: "Remove all drawings for this symbol",
      id_ID: ["Hilangkan seluruh gambar pada simbol ini"],
      it: ["Rimuove tutti i disegni su questo simbolo"],
      ja: ["このシンボルのすべての描画を削除"],
      ko: ["이 심볼에 대한 모든 드로잉 없애기"],
      ms_MY: ["Buang semua lukisan untuk simbol ini"],
      nl_NL: "Remove all drawings for this symbol",
      pl: ["Usuń wszystkie obiekty rysowania dla tego symbolu"],
      pt: ["Remover todos os desenhos deste símbolo"],
      ro: "Remove all drawings for this symbol",
      ru: ["Удалить все объекты рисования для этого символа"],
      sv: ["Ta bort alla ritningar för denna symbol"],
      th: ["ลบการวาดทั้งหมดของตัวย่อนี้"],
      tr: ["Bu sembol için tüm çizimleri kaldır"],
      vi: ["Loại bỏ tất cả nét vẽ cho mã này"],
      zh: ["移除该商品代码的所有绘图"],
      zh_TW: ["刪除此商品代碼的所有繪圖"]
    };
  },
  35038: function _(e) {
    e.exports = {
      ar: ["تغيير الأسم"],
      ca_ES: ["Reanomenar"],
      cs: "Rename",
      de: ["Umbenennen"],
      el: "Rename",
      en: "Rename",
      es: ["Renombrar."],
      fa: "Rename",
      fr: ["Renommer"],
      he_IL: ["שנה שם"],
      hu_HU: ["Átnevezés"],
      id_ID: ["Mengganti Nama"],
      it: ["Rinomina"],
      ja: ["名前の変更"],
      ko: ["이름 바꾸기"],
      ms_MY: ["Namakan semula"],
      nl_NL: "Rename",
      pl: ["Zmień nazwę"],
      pt: ["Renomear"],
      ro: "Rename",
      ru: ["Переименовать"],
      sv: ["Döp om"],
      th: ["เปลี่ยนชื่อ"],
      tr: ["Yeni Ad Ver"],
      vi: ["Đổi tên"],
      zh: ["重命名"],
      zh_TW: ["重新命名"]
    };
  },
  40001: function _(e) {
    e.exports = {
      ar: ["غيّر عنوان {sourceTitle} إلى {newSourceTitle}"],
      ca_ES: ["canvia el títol {sourceTitle} per {newSourceTitle}"],
      cs: "change {sourceTitle} title to {newSourceTitle}",
      de: ["{sourceTitle} zu {newSourceTitle} ändern"],
      el: "change {sourceTitle} title to {newSourceTitle}",
      en: "change {sourceTitle} title to {newSourceTitle}",
      es: ["cambiar el título {sourceTitle} por {newSourceTitle}"],
      fa: "change {sourceTitle} title to {newSourceTitle}",
      fr: ["Remplacer le titre {sourceTitle} par {newSourceTitle}"],
      he_IL: ["שנה את {sourceTitle} כותרת ל- {newSourceTitle}"],
      hu_HU: "change {sourceTitle} title to {newSourceTitle}",
      id_ID: ["Ubah judul {sourceTitle} menjadi {newSourceTitle}"],
      it: ["Cambia titolo da {sourceTitle} a {newSourceTitle}"],
      ja: ["{sourceTitle}のタイトルを{newSourceTitle}に変更"],
      ko: ["{sourceTitle} 타이틀을 {newSourceTitle} 으로 바꾸기"],
      ms_MY: ["Tukar tajuk {sourceTitle} kepada {newSourceTitle}"],
      nl_NL: "change {sourceTitle} title to {newSourceTitle}",
      pl: ["Zmień tytuł {sourceTitle} na {newSourceTitle}."],
      pt: ["Mudar {sourceTitle} título para {newSourceTitle}"],
      ro: ["Change {sourceTitle} title to {newSourceTitle}"],
      ru: ["изменение названия {sourceTitle} на {newSourceTitle}"],
      sv: ["Ändra {sourceTitle} titel till {newSourceTitle}"],
      th: ["เปลี่ยนชื่อ {sourceTitle} ไปเป็น {newSourceTitle}"],
      tr: ["{sourceTitle} başlığını {newSourceTitle} olarak değiştirin"],
      vi: ["Thay đổi {sourceTitle} tiêu đề sang {newSourceTitle}"],
      zh: ["将{sourceTitle}标题更改为{newSourceTitle}"],
      zh_TW: ["將{sourceTitle}標題更改為{newSourceTitle}"]
    };
  },
  28506: function _(e) {
    e.exports = {
      ar: ["إخفاء العناصر"],
      ca_ES: ["amaga objectes"],
      cs: "hide objects",
      de: ["Objekte ausblenden"],
      el: "hide objects",
      en: "hide objects",
      es: ["ocultar objetos"],
      fa: "hide objects",
      fr: ["masquer les objets"],
      he_IL: ["הסתר אובייקטים"],
      hu_HU: "hide objects",
      id_ID: ["sembunyikan objek"],
      it: ["nascondi oggetti"],
      ja: ["オブジェクトの非表示"],
      ko: ["오브젝트 숨기기"],
      ms_MY: ["sembunyi objek"],
      nl_NL: "hide objects",
      pl: ["ukryj obiekty"],
      pt: ["ocultar objetos"],
      ro: "hide objects",
      ru: ["скрытие объектов"],
      sv: ["dölj objekt"],
      th: ["ซ่อนออบเจ็กต์"],
      tr: ["nesneleri gizle"],
      vi: ["ẩn đối tượng"],
      zh: ["隐藏对象"],
      zh_TW: ["隱藏物件"]
    };
  },
  8343: function _(e) {
    e.exports = {
      ar: ["أدخل المصدر (المصادر) بعد ذلك"],
      ca_ES: ["introdueix font(s) després"],
      cs: "insert source(s) after",
      de: ["Quelle(n) einfügen nach"],
      el: "insert source(s) after",
      en: "insert source(s) after",
      es: ["introducir fuente(s) después"],
      fa: "insert source(s) after",
      fr: ["insérer la/les source(s) après"],
      he_IL: ["הכנס מקור(ות) לאחר מכן"],
      hu_HU: "insert source(s) after",
      id_ID: ["masukkan sumber setelah"],
      it: ["inserimento fonti"],
      ja: ["後にソースを挿入"],
      ko: ["~뒤에 소스 넣기"],
      ms_MY: ["masukkan sumber(s) selepas"],
      nl_NL: "insert source(s) after",
      pl: ["wstaw źródła po"],
      pt: ["inserir fonte(s) depois"],
      ro: "insert source(s) after",
      ru: ["вставку объекта(ов) после"],
      sv: ["infoga källa(källor) efter"],
      th: ["แทรกแหล่งที่มาหลังจาก"],
      tr: ["kaynağ(ı) ardına ekle"],
      vi: ["chèn (các) nguồn sau đó"],
      zh: ["插入源到后面"],
      zh_TW: ["插入源到後面"]
    };
  },
  40566: function _(e) {
    e.exports = {
      ar: ["تحريك العناصر"],
      ca_ES: ["mou objectes"],
      cs: "move objects",
      de: ["Objekte Bewegen"],
      el: "move objects",
      en: "move objects",
      es: ["mover objetos"],
      fa: "move objects",
      fr: ["Déplacer les objets"],
      he_IL: ["הזז אובייקטים"],
      hu_HU: "move objects",
      id_ID: ["Pindahkan objek"],
      it: ["Sposta oggetti"],
      ja: ["オブジェクトを移動"],
      ko: ["오브젝트 옮기기"],
      ms_MY: ["Pindahkan objek"],
      nl_NL: "move objects",
      pl: ["Przenieś obiekty"],
      pt: ["Mover objetos"],
      ro: ["Move objects"],
      ru: ["перемещение объектов"],
      sv: ["Flytta objekt"],
      th: ["ย้ายวัตถุ"],
      tr: ["nesneleri taşı"],
      vi: ["Chuyển đối tượng"],
      zh: ["移动对象"],
      zh_TW: ["移動物件"]
    };
  },
  87358: function _(e) {
    e.exports = {
      ar: ["عرض ‎{title}‎"],
      ca_ES: ["mostra {title}"],
      cs: "show {title}",
      de: ["{title} anzeigen"],
      el: "show {title}",
      en: "show {title}",
      es: ["mostrar {title}"],
      fa: "show {title}",
      fr: ["afficher {title}"],
      he_IL: ["הצג ‎{title}‎"],
      hu_HU: "show {title}",
      id_ID: ["tampilkan {title}"],
      it: ["mostra {title}"],
      ja: ["{title}の表示"],
      ko: ["{title} 보이기"],
      ms_MY: ["tunjuk {title}"],
      nl_NL: "show {title}",
      pl: ["pokaż {title}"],
      pt: ["exibir {title}"],
      ro: "show {title}",
      ru: ["отображение: {title}"],
      sv: ["visa {title}"],
      th: ["แสดง {title}"],
      tr: ["{title} göster"],
      vi: ["hiện {title}"],
      zh: ["显示{title}"],
      zh_TW: ["顯示{title}"]
    };
  },
  63549: function _(e) {
    e.exports = {
      ar: ["إظهار العناصر"],
      ca_ES: ["mostra objectes"],
      cs: "show objects",
      de: ["Objekte einblenden"],
      el: "show objects",
      en: "show objects",
      es: ["mostrar objetos"],
      fa: "show objects",
      fr: ["afficher les objets"],
      he_IL: ["הצג אובייקטים"],
      hu_HU: "show objects",
      id_ID: ["tampilkan objek"],
      it: ["mostra oggetti"],
      ja: ["オブジェクトの表示"],
      ko: ["오브젝트 보이기"],
      ms_MY: ["tunjuk objek"],
      nl_NL: "show objects",
      pl: ["pokaż obiekty"],
      pt: ["exibir objetos"],
      ro: "show objects",
      ru: ["отображение объектов"],
      sv: ["visa objekt"],
      th: ["แสดงออบเจ็กต์"],
      tr: ["nesneleri göster"],
      vi: ["hiển thị đối tượng"],
      zh: ["显示对象"],
      zh_TW: ["顯示物件"]
    };
  },
  57428: function _(e) {
    e.exports = {
      ar: ["إزالة العناصر"],
      ca_ES: ["elimina objectes"],
      cs: "remove objects",
      de: ["Objekte entfernen"],
      el: "remove objects",
      en: "remove objects",
      es: ["eliminar objetos"],
      fa: "remove objects",
      fr: ["supprimer les objets"],
      he_IL: ["הסר אובייקטים"],
      hu_HU: "remove objects",
      id_ID: ["Hilangkan objek"],
      it: ["rimuovi oggetti"],
      ja: ["オブジェクトの削除"],
      ko: ["오브젝트 없애기"],
      ms_MY: ["buang objek"],
      nl_NL: "remove objects",
      pl: ["usuń obiekty"],
      pt: ["remover objetos"],
      ro: "remove objects",
      ru: ["удаление объектов"],
      sv: ["Ta bort objekt"],
      th: ["ลบออบเจ็กต์"],
      tr: ["nesneleri kaldır"],
      vi: ["di chuyển đối tượng"],
      zh: ["移除对象"],
      zh_TW: ["移除物件"]
    };
  },
  23481: function _(e) {
    e.exports = {
      ar: ["حذف كافة خطوط الأدوات لـ {symbol}"],
      ca_ES: ["elimina totes les eines de línies per a {symbol}"],
      cs: "remove all line tools for {symbol}",
      de: ["alle Linienwerkzeuge für {symbol} entfernen"],
      el: "remove all line tools for {symbol}",
      en: "remove all line tools for {symbol}",
      es: ["eliminar todas las herramientas de líneas para {symbol}"],
      fa: "remove all line tools for {symbol}",
      fr: ["supprimer tous les outils de ligne pour {symbol}."],
      he_IL: ["הסרת כל קבוצת כלי קו ‎{symbol}‎"],
      hu_HU: "remove all line tools for {symbol}",
      id_ID: ["Hilangkan semua peralatan garis untuk {symbol}"],
      it: ["rimuovi tutte le linee da {symbol}"],
      ja: ["{symbol}のすべてのラインツールの削除"],
      ko: ["{symbol}의 모든 줄 도구 제거"],
      ms_MY: ["buang semua alat garisan untuk {symbol}"],
      nl_NL: "remove all line tools for {symbol}",
      pl: ["usuń wszystkie narzędzia linii dla {symbol}"],
      pt: ["remover todas as ferramentas de linhas para {symbol}"],
      ro: "remove all line tools for {symbol}",
      ru: ["удаление всех объектов рисования для {symbol}"],
      sv: ["Ta bort alla linjeverktyg för {symbol}"],
      th: ["ลบเครื่องมือเส้นทั้งหมดสำหรับ {symbol}"],
      tr: ["{symbol} için tüm çizgi araçlarını kaldır"],
      vi: ["loại bỏ tất cả đường công cụ cho {symbol}"],
      zh: ["移除{symbol}的所有线条工具"],
      zh_TW: ["移除{symbol}的所有線條工具"]
    };
  },
  42743: function _(e) {
    e.exports = {
      ar: ["مع ‎{drawingsCount}‎ رسم", "مع ‎{drawingsCount}‎ رسم", "مع ‎{drawingsCount}‎ رسم", "مع ‎{drawingsCount}‎ رسوم", "مع ‎{drawingsCount}‎ رسماً", "مع ‎{drawingsCount}‎ رسماً"],
      ca_ES: ["amb {drawingsCount} dibuix", "amb {drawingsCount} dibuixos"],
      cs: "with {drawingsCount} drawing",
      de: ["mit {drawingsCount} Zeichnung", "mit {drawingsCount} Zeichnungen"],
      el: "with {drawingsCount} drawing",
      en: "with {drawingsCount} drawing",
      es: ["con {drawingsCount} dibujo", "con {drawingsCount} dibujos"],
      fa: ["with {drawingsCount} drawings"],
      fr: ["avec {drawingsCount} dessin", "avec {drawingsCount} dessins"],
      he_IL: ["עם שרטוט ‎{drawingsCount}‎", "עם ‎{drawingsCount}‎ שרטוטים", "עם ‎{drawingsCount}‎ שרטוטים", "עם ‎{drawingsCount}‎ שרטוטים"],
      hu_HU: ["with {drawingsCount} drawings"],
      id_ID: ["dengan {drawingsCount} gambar"],
      it: ["con {drawingsCount} disegno", "con {drawingsCount} disegni"],
      ja: ["に{drawingsCount}個の描画"],
      ko: ["{drawingsCount} 드로잉이 있는"],
      ms_MY: ["dengan {drawingsCount} lukisan"],
      nl_NL: "with {drawingsCount} drawing",
      pl: ["z {drawingsCount} rysunkiem", "z {drawingsCount} rysunkami", "z {drawingsCount} rysunkami", "z {drawingsCount} rysunkami"],
      pt: ["com {drawingsCount} desenho", "com {drawingsCount} desenhos"],
      ro: "with {drawingsCount} drawing",
      ru: ["с {drawingsCount} объектом рисования", "с {drawingsCount} объектами рисования", "с {drawingsCount} объектами рисования", "с {drawingsCount} объектами рисования"],
      sv: ["med {drawingsCount} ritverktyg", "med {drawingsCount} ritverktyg"],
      th: ["กับ {drawingsCount} การวาด"],
      tr: ["{drawingsCount} çizim ile", "{drawingsCount} çizim ile"],
      vi: ["với {drawingsCount} nét vẽ"],
      zh: ["含{drawingsCount}个绘图"],
      zh_TW: ["含{drawingsCount}個繪圖"]
    };
  },
  88143: function _(e) {
    e.exports = {
      ar: ["‎{drawingsCount}‎ رسم", "‎{drawingsCount}‎ رسم", "‎{drawingsCount}‎ رسم", "‎{drawingsCount}‎ رسوم", "‎{drawingsCount}‎ رسماً", "‎{drawingsCount}‎ رسماً"],
      ca_ES: ["{drawingsCount} dibuix", "{drawingsCount} dibuixos"],
      cs: "{drawingsCount} drawing",
      de: ["{drawingsCount} Zeichnung", "{drawingsCount} Zeichnungen"],
      el: "{drawingsCount} drawing",
      en: "{drawingsCount} drawing",
      es: ["{drawingsCount} dibujo", "{drawingsCount} dibujos"],
      fa: ["{drawingsCount} drawings"],
      fr: ["{drawingsCount} dessin", "{drawingsCount} dessins"],
      he_IL: ["שרטוט ‎{drawingsCount}‎", "‎{drawingsCount}‎ שרטוטים", "‎{drawingsCount}‎ שרטוטים", "‎{drawingsCount}‎ שרטוטים"],
      hu_HU: ["{drawingsCount} drawings"],
      id_ID: ["{drawingsCount} gambar"],
      it: ["{drawingsCount} disegno", "{drawingsCount} disegni"],
      ja: ["{drawingsCount}個の描画"],
      ko: ["{drawingsCount} 드로잉"],
      ms_MY: ["{drawingsCount} lukisan"],
      nl_NL: "{drawingsCount} drawing",
      pl: ["{drawingsCount} rysunek", "{drawingsCount} rysunki", "{drawingsCount} rysunków", "{drawingsCount} rysunków"],
      pt: ["{drawingsCount} desenho", "{drawingsCount} desenhos"],
      ro: "{drawingsCount} drawing",
      ru: ["{drawingsCount} объект рисования", "{drawingsCount} объекта рисования", "{drawingsCount} объектов рисования", "{drawingsCount} объектов рисования"],
      sv: ["{drawingsCount} ritverktyg", "{drawingsCount} ritverktyg"],
      th: ["{drawingsCount} การวาด"],
      tr: ["{drawingsCount} çizimi", "{drawingsCount} çizimi"],
      vi: ["{drawingsCount} nét vẽ"],
      zh: ["{drawingsCount}个绘图"],
      zh_TW: ["{drawingsCount}個繪圖"]
    };
  },
  52908: function _(e) {
    e.exports = {
      ar: ["‎{symbolsCount}‎ رمز", "‎{symbolsCount}‎ رمز", "‎{symbolsCount}‎ رمز", "‎{symbolsCount}‎ رموز", "‎{symbolsCount}‎ رمزاً", "‎{symbolsCount}‎ رمزاً"],
      ca_ES: ["{symbolsCount} símbol", "{symbolsCount} símbols"],
      cs: "{symbolsCount} symbol",
      de: ["{symbolsCount} Symbol", "{symbolsCount} Symbole"],
      el: "{symbolsCount} symbol",
      en: "{symbolsCount} symbol",
      es: ["{symbolsCount} símbolo", "{symbolsCount} símbolos"],
      fa: ["{symbolsCount} symbols"],
      fr: ["{symbolsCount} symbole", "{symbolsCount} symboles"],
      he_IL: ["סימול ‎{symbolsCount}‎", "‎{symbolsCount}‎ סימולים", "‎{symbolsCount}‎ סימולים", "‎{symbolsCount}‎ סימולים"],
      hu_HU: ["{symbolsCount} symbols"],
      id_ID: ["{symbolsCount} simbol"],
      it: ["{symbolsCount} simbolo", "{symbolsCount} simboli"],
      ja: ["{symbolsCount}シンボル"],
      ko: ["{symbolsCount} 심볼"],
      ms_MY: ["Simbol {symbolsCount}"],
      nl_NL: "{symbolsCount} symbol",
      pl: "{symbolsCount} symbol",
      pt: ["{symbolsCount} símbolo", "{symbolsCount} símbolos"],
      ro: "{symbolsCount} symbol",
      ru: ["{symbolsCount} символ", "{symbolsCount} символа", "{symbolsCount} символов", "{symbolsCount} символов"],
      sv: "{symbolsCount} symbol",
      th: ["{symbolsCount} สัญลักษณ์"],
      tr: ["{symbolsCount} sembol", "{symbolsCount} sembol"],
      vi: ["{symbolsCount} mã giao dịch"],
      zh: ["{symbolsCount}个商品"],
      zh_TW: ["{symbolsCount}個商品"]
    };
  }
}]);