"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4403], {
  1414: function _(e) {
    e.exports = {
      button: "button-D4RPB3ZC",
      content: "content-D4RPB3ZC",
      "icon-only": "icon-only-D4RPB3ZC",
      link: "link-D4RPB3ZC",
      "color-brand": "color-brand-D4RPB3ZC",
      "variant-primary": "variant-primary-D4RPB3ZC",
      "variant-secondary": "variant-secondary-D4RPB3ZC",
      "color-gray": "color-gray-D4RPB3ZC",
      "color-green": "color-green-D4RPB3ZC",
      "color-red": "color-red-D4RPB3ZC",
      "color-black": "color-black-D4RPB3ZC",
      "size-xsmall": "size-xsmall-D4RPB3ZC",
      "start-icon-wrap": "start-icon-wrap-D4RPB3ZC",
      "end-icon-wrap": "end-icon-wrap-D4RPB3ZC",
      "with-start-icon": "with-start-icon-D4RPB3ZC",
      "with-end-icon": "with-end-icon-D4RPB3ZC",
      "size-small": "size-small-D4RPB3ZC",
      "size-medium": "size-medium-D4RPB3ZC",
      "size-large": "size-large-D4RPB3ZC",
      "size-xlarge": "size-xlarge-D4RPB3ZC",
      animated: "animated-D4RPB3ZC",
      stretch: "stretch-D4RPB3ZC",
      grouped: "grouped-D4RPB3ZC",
      "adjust-position": "adjust-position-D4RPB3ZC",
      "first-row": "first-row-D4RPB3ZC",
      "first-col": "first-col-D4RPB3ZC",
      "no-corner-top-left": "no-corner-top-left-D4RPB3ZC",
      "no-corner-top-right": "no-corner-top-right-D4RPB3ZC",
      "no-corner-bottom-right": "no-corner-bottom-right-D4RPB3ZC",
      "no-corner-bottom-left": "no-corner-bottom-left-D4RPB3ZC",
      "text-wrap": "text-wrap-D4RPB3ZC",
      "multiline-content": "multiline-content-D4RPB3ZC",
      "secondary-text": "secondary-text-D4RPB3ZC",
      "primary-text": "primary-text-D4RPB3ZC"
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
  83073: function _(e) {
    e.exports = {
      "small-height-breakpoint": "screen and (max-height: 360px)",
      footer: "footer-PhMf7PhQ",
      submitButton: "submitButton-PhMf7PhQ",
      buttons: "buttons-PhMf7PhQ"
    };
  },
  94720: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Button: function Button() {
        return R;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(95604),
        l = n(9745),
        i = n(1414),
        a = n.n(i);

    function c(e) {
      var _e$color = e.color,
          t = _e$color === void 0 ? "brand" : _e$color,
          _e$size = e.size,
          n = _e$size === void 0 ? "medium" : _e$size,
          _e$variant = e.variant,
          o = _e$variant === void 0 ? "primary" : _e$variant,
          _e$stretch = e.stretch,
          l = _e$stretch === void 0 ? !1 : _e$stretch,
          i = e.icon,
          c = e.startIcon,
          u = e.endIcon,
          _e$iconOnly = e.iconOnly,
          d = _e$iconOnly === void 0 ? !1 : _e$iconOnly,
          h = e.className,
          m = e.isGrouped,
          f = e.cellState,
          _e$disablePositionAdj = e.disablePositionAdjustment,
          p = _e$disablePositionAdj === void 0 ? !1 : _e$disablePositionAdj,
          b = e.primaryText,
          g = e.secondaryText,
          _e$isAnchor = e.isAnchor,
          C = _e$isAnchor === void 0 ? !1 : _e$isAnchor,
          R = function (e) {
        var t = "";
        return 0 !== e && (1 & e && (t = r(t, a()["no-corner-top-left"])), 2 & e && (t = r(t, a()["no-corner-top-right"])), 4 & e && (t = r(t, a()["no-corner-bottom-right"])), 8 & e && (t = r(t, a()["no-corner-bottom-left"]))), t;
      }((0, s.getGroupCellRemoveRoundBorders)(f));

      return r(h, a().button, a()["size-".concat(n)], a()["color-".concat(t)], a()["variant-".concat(o)], l && a().stretch, (i || c) && a()["with-start-icon"], u && a()["with-end-icon"], d && a()["icon-only"], R, m && a().grouped, m && !p && a()["adjust-position"], m && f.isTop && a()["first-row"], m && f.isLeft && a()["first-col"], b && g && a()["multiline-content"], C && a().link);
    }

    function u(e) {
      var t = e.startIcon,
          n = e.icon,
          r = e.iconOnly,
          s = e.children,
          i = e.endIcon,
          c = e.primaryText,
          u = e.secondaryText,
          d = null != t ? t : n,
          h = !(t || n || i || r) && !s && c && u;
      return o.createElement(o.Fragment, null, d && o.createElement(l.Icon, {
        icon: d,
        className: a()["start-icon-wrap"]
      }), s && o.createElement("span", {
        className: a().content
      }, s), i && !r && o.createElement(l.Icon, {
        icon: i,
        className: a()["end-icon-wrap"]
      }), h && function (e) {
        return e.primaryText && e.secondaryText && o.createElement("div", {
          className: a()["text-wrap"]
        }, o.createElement("span", {
          className: a()["primary-text"]
        }, " ", e.primaryText, " "), "string" == typeof e.secondaryText ? o.createElement("span", {
          className: a()["secondary-text"]
        }, " ", e.secondaryText, " ") : o.createElement("span", {
          className: a()["secondary-text"]
        }, o.createElement("span", null, e.secondaryText.firstLine), o.createElement("span", null, e.secondaryText.secondLine)));
      }(e));
    }

    var d = n(86332),
        h = n(90186);

    function m(e) {
      var t = e.className,
          n = e.color,
          o = e.variant,
          r = e.size,
          s = e.stretch,
          l = e.animated,
          i = e.icon,
          a = e.iconOnly,
          c = e.startIcon,
          u = e.endIcon,
          d = e.primaryText,
          m = e.secondaryText,
          f = _objectWithoutProperties(e, ["className", "color", "variant", "size", "stretch", "animated", "icon", "iconOnly", "startIcon", "endIcon", "primaryText", "secondaryText"]);

      return _objectSpread({}, f, {}, (0, h.filterDataProps)(e), {}, (0, h.filterAriaProps)(e));
    }

    function f(e) {
      var t = e.reference,
          n = _objectWithoutProperties(e, ["reference"]),
          _ref = (0, o.useContext)(d.ControlGroupContext),
          r = _ref.isGrouped,
          s = _ref.cellState,
          l = _ref.disablePositionAdjustment,
          i = c(_objectSpread({}, n, {
        isGrouped: r,
        cellState: s,
        disablePositionAdjustment: l
      }));

      return o.createElement("button", _objectSpread({}, m(n), {
        className: i,
        ref: t
      }), o.createElement(u, _objectSpread({}, n)));
    }

    function p() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

      switch (e) {
        case "default":
          return "primary";

        case "stroke":
          return "secondary";
      }
    }

    function b() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "primary";

      switch (e) {
        case "primary":
          return "brand";

        case "success":
          return "green";

        case "default":
          return "gray";

        case "danger":
          return "red";
      }
    }

    function g() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "m";

      switch (e) {
        case "s":
          return "xsmall";

        case "m":
          return "small";

        case "l":
          return "large";
      }
    }

    function C(e) {
      var t = e.intent,
          n = e.size,
          o = e.appearance,
          r = e.useFullWidth,
          s = e.icon,
          l = _objectWithoutProperties(e, ["intent", "size", "appearance", "useFullWidth", "icon"]);

      return _objectSpread({}, l, {
        color: b(t),
        size: g(n),
        variant: p(o),
        stretch: r,
        startIcon: s
      });
    }

    function R(e) {
      return o.createElement(f, _objectSpread({}, C(e)));
    }
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
        return C;
      },
      InputClasses: function InputClasses() {
        return p;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(50151),
        l = n(38528),
        i = n(90186),
        a = n(86332),
        c = n(95604);
    var u = n(81026),
        d = n.n(u);

    function h(e) {
      var t = "";
      return 0 !== e && (1 & e && (t = r(t, d()["no-corner-top-left"])), 2 & e && (t = r(t, d()["no-corner-top-right"])), 4 & e && (t = r(t, d()["no-corner-bottom-right"])), 8 & e && (t = r(t, d()["no-corner-bottom-left"]))), t;
    }

    function m(e, t, n, o) {
      var s = e.removeRoundBorder,
          l = e.className,
          _e$intent = e.intent,
          i = _e$intent === void 0 ? "default" : _e$intent,
          _e$borderStyle = e.borderStyle,
          a = _e$borderStyle === void 0 ? "thin" : _e$borderStyle,
          u = e.size,
          m = e.highlight,
          f = e.disabled,
          p = e.readonly,
          b = e.stretch,
          g = e.noReadonlyStyles,
          C = e.isFocused,
          R = h(null != s ? s : (0, c.getGroupCellRemoveRoundBorders)(n));
      return r(d().container, d()["container-".concat(u)], d()["intent-".concat(i)], d()["border-".concat(a)], u && d()["size-".concat(u)], R, m && d()["with-highlight"], f && d().disabled, p && !g && d().readonly, C && d().focused, b && d().stretch, t && d().grouped, !o && d()["adjust-position"], n.isTop && d()["first-row"], n.isLeft && d()["first-col"], l);
    }

    function f(e, t, n) {
      var o = e.highlight,
          s = e.highlightRemoveRoundBorder;
      if (!o) return d().highlight;
      var l = h(null != s ? s : (0, c.getGroupCellRemoveRoundBorders)(t));
      return r(d().highlight, d().shown, d()["size-".concat(n)], l);
    }

    var p = {
      FontSizeMedium: (0, s.ensureDefined)(d()["font-size-medium"]),
      FontSizeLarge: (0, s.ensureDefined)(d()["font-size-large"])
    },
        b = {
      passive: !1
    };

    function g(e, t) {
      var n = e.style,
          r = e.id,
          s = e.role,
          c = e.onFocus,
          u = e.onBlur,
          d = e.onMouseOver,
          h = e.onMouseOut,
          p = e.onMouseDown,
          g = e.onMouseUp,
          C = e.onKeyDown,
          R = e.onClick,
          v = e.tabIndex,
          y = e.startSlot,
          x = e.middleSlot,
          D = e.endSlot,
          P = e.onWheel,
          _e$onWheelNoPassive = e.onWheelNoPassive,
          S = _e$onWheelNoPassive === void 0 ? null : _e$onWheelNoPassive,
          w = e.size,
          _ref2 = (0, o.useContext)(a.ControlGroupContext),
          N = _ref2.isGrouped,
          B = _ref2.cellState,
          _ref2$disablePosition = _ref2.disablePositionAdjustment,
          z = _ref2$disablePosition === void 0 ? !1 : _ref2$disablePosition,
          Z = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var r = (0, o.useRef)(null),
            s = (0, o.useRef)(null),
            l = (0, o.useCallback)(function () {
          if (null === r.current || null === s.current) return;

          var _s$current = _slicedToArray(s.current, 3),
              e = _s$current[0],
              t = _s$current[1],
              n = _s$current[2];

          null !== t && r.current.addEventListener(e, t, n);
        }, []),
            i = (0, o.useCallback)(function () {
          if (null === r.current || null === s.current) return;

          var _s$current2 = _slicedToArray(s.current, 3),
              e = _s$current2[0],
              t = _s$current2[1],
              n = _s$current2[2];

          null !== t && r.current.removeEventListener(e, t, n);
        }, []),
            a = (0, o.useCallback)(function (e) {
          i(), r.current = e, l();
        }, []);
        return (0, o.useEffect)(function () {
          return s.current = [e, t, n], l(), i;
        }, [e, t, n]), a;
      }("wheel", S, b);

      return o.createElement("span", _objectSpread({
        style: n,
        id: r,
        role: s,
        className: m(e, N, B, z),
        tabIndex: v,
        ref: (0, l.useMergedRefs)([t, Z]),
        onFocus: c,
        onBlur: u,
        onMouseOver: d,
        onMouseOut: h,
        onMouseDown: p,
        onMouseUp: g,
        onKeyDown: C,
        onClick: R,
        onWheel: P
      }, (0, i.filterDataProps)(e), {}, (0, i.filterAriaProps)(e)), y, x, D, o.createElement("span", {
        className: f(e, B, w)
      }));
    }

    g.displayName = "ControlSkeleton";
    var C = o.forwardRef(g);
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
        return i;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(7236),
        l = n.n(s);

    function i(e) {
      var t = e.className,
          _e$interactive = e.interactive,
          n = _e$interactive === void 0 ? !0 : _e$interactive,
          _e$icon = e.icon,
          s = _e$icon === void 0 ? !1 : _e$icon,
          i = e.children;
      return o.createElement("span", {
        className: r(l()["inner-slot"], n && l().interactive, s && l().icon, t)
      }, i);
    }

    function a(e) {
      var t = e.className,
          n = e.children;
      return o.createElement("span", {
        className: r(l()["inner-slot"], l()["inner-middle-slot"], t)
      }, n);
    }

    function c(e) {
      var t = e.className,
          _e$interactive2 = e.interactive,
          n = _e$interactive2 === void 0 ? !0 : _e$interactive2,
          _e$icon2 = e.icon,
          s = _e$icon2 === void 0 ? !1 : _e$icon2,
          i = e.children;
      return o.createElement("span", {
        className: r(l()["inner-slot"], n && l().interactive, s && l().icon, t)
      }, i);
    }

    function u(e) {
      var t = e.className,
          n = e.children;
      return o.createElement("span", {
        className: r(l()["after-slot"], t)
      }, n);
    }
  },
  31261: function _(e, t, n) {
    "use strict";

    n.d(t, {
      InputControl: function InputControl() {
        return C;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(90186),
        l = n(47201),
        i = n(48907),
        a = n(38528),
        c = n(48027),
        u = n(29202),
        d = n(45812),
        h = n(67029),
        m = n(78274),
        f = n(30930),
        p = n.n(f);

    function b(e) {
      return !(0, s.isAriaAttribute)(e) && !(0, s.isDataAttribute)(e);
    }

    function g(e) {
      var t = e.id,
          n = e.title,
          l = e.role,
          i = e.tabIndex,
          a = e.placeholder,
          c = e.name,
          u = e.type,
          d = e.value,
          f = e.defaultValue,
          g = e.draggable,
          C = e.autoComplete,
          R = e.autoFocus,
          v = e.maxLength,
          y = e.min,
          x = e.max,
          D = e.step,
          P = e.pattern,
          S = e.inputMode,
          w = e.onSelect,
          N = e.onFocus,
          B = e.onBlur,
          z = e.onKeyDown,
          Z = e.onKeyUp,
          E = e.onKeyPress,
          k = e.onChange,
          F = e.onDragStart,
          _e$size2 = e.size,
          W = _e$size2 === void 0 ? "small" : _e$size2,
          M = e.className,
          _ = e.inputClassName,
          I = e.disabled,
          K = e.readonly,
          O = e.containerTabIndex,
          T = e.startSlot,
          A = e.endSlot,
          j = e.reference,
          H = e.containerReference,
          L = e.onContainerFocus,
          U = _objectWithoutProperties(e, ["id", "title", "role", "tabIndex", "placeholder", "name", "type", "value", "defaultValue", "draggable", "autoComplete", "autoFocus", "maxLength", "min", "max", "step", "pattern", "inputMode", "onSelect", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "onKeyPress", "onChange", "onDragStart", "size", "className", "inputClassName", "disabled", "readonly", "containerTabIndex", "startSlot", "endSlot", "reference", "containerReference", "onContainerFocus"]),
          G = (0, s.filterProps)(U, b),
          V = _objectSpread({}, (0, s.filterAriaProps)(U), {}, (0, s.filterDataProps)(U), {
        id: t,
        title: n,
        role: l,
        tabIndex: i,
        placeholder: a,
        name: c,
        type: u,
        value: d,
        defaultValue: f,
        draggable: g,
        autoComplete: C,
        autoFocus: R,
        maxLength: v,
        min: y,
        max: x,
        step: D,
        pattern: P,
        inputMode: S,
        onSelect: w,
        onFocus: N,
        onBlur: B,
        onKeyDown: z,
        onKeyUp: Z,
        onKeyPress: E,
        onChange: k,
        onDragStart: F
      });

      return o.createElement(h.ControlSkeleton, _objectSpread({}, G, {
        disabled: I,
        readonly: K,
        tabIndex: O,
        className: r(p().container, M),
        size: W,
        ref: H,
        onFocus: L,
        startSlot: T,
        middleSlot: o.createElement(m.MiddleSlot, null, o.createElement("input", _objectSpread({}, V, {
          className: r(p().input, p()["size-".concat(W)], _, T && p()["with-start-slot"], A && p()["with-end-slot"]),
          disabled: I,
          readOnly: K,
          ref: j
        }))),
        endSlot: A
      }));
    }

    function C(e) {
      e = (0, c.useControl)(e);

      var _e2 = e,
          t = _e2.disabled,
          n = _e2.autoSelectOnFocus,
          _e2$tabIndex = _e2.tabIndex,
          r = _e2$tabIndex === void 0 ? 0 : _e2$tabIndex,
          s = _e2.onFocus,
          h = _e2.onBlur,
          m = _e2.reference,
          _e2$containerReferenc = _e2.containerReference,
          f = _e2$containerReferenc === void 0 ? null : _e2$containerReferenc,
          p = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          _ref3 = (0, u.useFocus)(),
          _ref4 = _slicedToArray(_ref3, 2),
          C = _ref4[0],
          R = _ref4[1],
          v = t ? void 0 : C ? -1 : r,
          y = t ? void 0 : C ? r : -1,
          _ref5 = (0, d.useIsMouseDown)(),
          x = _ref5.isMouseDown,
          D = _ref5.handleMouseDown,
          P = _ref5.handleMouseUp,
          S = (0, l.createSafeMulticastEventHandler)(R.onFocus, function (e) {
        n && !x.current && (0, i.selectAllContent)(e.currentTarget);
      }, s),
          w = (0, l.createSafeMulticastEventHandler)(R.onBlur, h),
          N = (0, o.useCallback)(function (e) {
        p.current = e, m && ("function" == typeof m && m(e), "object" == _typeof(m) && (m.current = e));
      }, [p, m]);

      return o.createElement(g, _objectSpread({}, e, {
        isFocused: C,
        containerTabIndex: v,
        tabIndex: y,
        onContainerFocus: function onContainerFocus(e) {
          b.current === e.target && null !== p.current && p.current.focus();
        },
        onFocus: S,
        onBlur: w,
        reference: N,
        containerReference: (0, a.useMergedRefs)([b, f]),
        onMouseDown: D,
        onMouseUp: P
      }));
    }
  },
  66686: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useComposedKeyboardActionHandlers: function useComposedKeyboardActionHandlers() {
        return i;
      },
      useKeyboardActionHandler: function useKeyboardActionHandler() {
        return l;
      },
      useKeyboardClose: function useKeyboardClose() {
        return u;
      },
      useKeyboardEventHandler: function useKeyboardEventHandler() {
        return a;
      },
      useKeyboardOpen: function useKeyboardOpen() {
        return d;
      },
      useKeyboardToggle: function useKeyboardToggle() {
        return c;
      }
    });
    var o = n(50959),
        r = n(3343);

    var s = function s() {
      return !0;
    };

    function l(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : s;
      return (0, o.useCallback)(function (o) {
        var r = e.map(function (e) {
          return "function" == typeof e ? e() : e;
        });
        return !(!n(o) || !r.includes(o)) && (t(o), !0);
      }, [].concat(_toConsumableArray(e), [t, n]));
    }

    function i() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      return (0, o.useCallback)(function (t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _n2 = _step.value;
            if (_n2(t)) return !0;
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

        return !1;
      }, [].concat(e));
    }

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var n = i.apply(void 0, _toConsumableArray(e));
      return (0, o.useCallback)(function (e) {
        n((0, r.hashFromEvent)(e)) && t && e.preventDefault();
      }, [n]);
    }

    function c(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      return l([13, 32], e, function (e) {
        if (13 === e) return t;
        return !0;
      });
    }

    function u(e, t) {
      return l([9, (0, o.useCallback)(function () {
        return r.Modifiers.Shift + 9;
      }, []), 27], t, (0, o.useCallback)(function () {
        return e;
      }, [e]));
    }

    function d(e, t) {
      return l([40, 38], t, (0, o.useCallback)(function () {
        return !e;
      }, [e]));
    }
  },
  48027: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useControl: function useControl() {
        return s;
      }
    });
    var o = n(47201),
        r = n(29202);

    function s(e) {
      var t = e.onFocus,
          n = e.onBlur,
          s = e.intent,
          l = e.highlight,
          i = e.disabled,
          _ref6 = (0, r.useFocus)(void 0, i),
          _ref7 = _slicedToArray(_ref6, 2),
          a = _ref7[0],
          c = _ref7[1],
          u = (0, o.createSafeMulticastEventHandler)(i ? void 0 : c.onFocus, t),
          d = (0, o.createSafeMulticastEventHandler)(i ? void 0 : c.onBlur, n);

      return _objectSpread({}, e, {
        intent: s || (a ? "primary" : "default"),
        highlight: null != l ? l : a,
        onFocus: u,
        onBlur: d
      });
    }
  },
  7953: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useDisclosure: function useDisclosure() {
        return c;
      }
    });
    var o = n(50959),
        r = n(50151),
        s = n(54717),
        l = n(29202),
        i = n(47201),
        a = n(22064);

    function c(e) {
      var t = e.id,
          n = e.listboxId,
          c = e.disabled,
          _e$buttonTabIndex = e.buttonTabIndex,
          u = _e$buttonTabIndex === void 0 ? 0 : _e$buttonTabIndex,
          d = e.onFocus,
          h = e.onBlur,
          m = e.onClick,
          _ref8 = (0, o.useState)(!1),
          _ref9 = _slicedToArray(_ref8, 2),
          f = _ref9[0],
          p = _ref9[1],
          _ref10 = (0, l.useFocus)(),
          _ref11 = _slicedToArray(_ref10, 2),
          b = _ref11[0],
          g = _ref11[1],
          C = b || f,
          R = (null != n ? n : void 0 !== t) ? (0, a.createDomId)(t, "listbox") : void 0,
          v = (0, o.useRef)(null),
          y = (0, o.useCallback)(function (e) {
        var t;
        return null === (t = v.current) || void 0 === t ? void 0 : t.focus(e);
      }, [v]),
          x = (0, o.useRef)(null),
          D = (0, o.useCallback)(function () {
        return (0, r.ensureNotNull)(x.current).focus();
      }, [x]),
          P = (0, o.useCallback)(function () {
        return p(!0);
      }, [p]),
          S = (0, o.useCallback)(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        p(!1);
        var _document = document,
            n = _document.activeElement;
        n && (0, s.isTextEditingField)(n) || t || y({
          preventScroll: e
        });
      }, [p, y]),
          w = (0, o.useCallback)(function () {
        f ? S() : P();
      }, [f, S, P]),
          N = c ? [] : [d, g.onFocus],
          B = c ? [] : [h, g.onBlur],
          z = c ? [] : [m, w],
          Z = (0, i.createSafeMulticastEventHandler).apply(void 0, N),
          E = (0, i.createSafeMulticastEventHandler).apply(void 0, B),
          k = (0, i.createSafeMulticastEventHandler).apply(void 0, z);

      return {
        listboxId: R,
        isOpened: f,
        isFocused: C,
        buttonTabIndex: c ? -1 : u,
        listboxTabIndex: -1,
        open: P,
        close: S,
        toggle: w,
        onOpen: D,
        buttonFocusBindings: {
          onFocus: Z,
          onBlur: E
        },
        onButtonClick: k,
        buttonRef: v,
        listboxRef: x,
        buttonAria: {
          "aria-controls": f ? R : void 0,
          "aria-expanded": f,
          "aria-disabled": c
        }
      };
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
      var _ref12 = (0, o.useState)(!1),
          _ref13 = _slicedToArray(_ref12, 2),
          n = _ref13[0],
          r = _ref13[1];

      (0, o.useEffect)(function () {
        t && n && r(!1);
      }, [t, n]);
      var s = {
        onFocus: (0, o.useCallback)(function (t) {
          void 0 !== e && e.current !== t.target || r(!0);
        }, [e]),
        onBlur: (0, o.useCallback)(function (t) {
          void 0 !== e && e.current !== t.target || r(!1);
        }, [e])
      };
      return [n, s];
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
  36762: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useItemsKeyboardNavigation: function useItemsKeyboardNavigation() {
        return l;
      }
    });
    var o = n(50959),
        r = n(66686);

    function s(e, t) {
      return e >= 0 ? e % t : (t - Math.abs(e) % t) % t;
    }

    function l(e, t, n, l, i) {
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      var c = arguments.length > 6 ? arguments[6] : undefined;
      var u = (0, o.useCallback)(function (e) {
        var o = t.findIndex(n);
        if (o === t.length - 1 && !i) return void ((null == c ? void 0 : c.onFailNext) && c.onFailNext(e));
        var r = s(o + 1, t.length);
        l && l(t[r], "next");
      }, [t, n, l, i]),
          d = (0, o.useCallback)(function (e) {
        var o = t.findIndex(n);
        if (0 === o && !i) return void ((null == c ? void 0 : c.onFailPrev) && c.onFailPrev(e));
        var r = s(o - 1, t.length);
        l && l(t[r], "previous");
      }, [t, n, l, i]),
          h = (0, o.useCallback)(function () {
        l && l(t[0], "first");
      }, [l, t]),
          m = (0, o.useCallback)(function () {
        l && l(t[t.length - 1], "last");
      }, [l, t]),
          f = (0, o.useMemo)(function () {
        return function (e) {
          return {
            next: [40, function () {
              return e() ? 37 : 39;
            }],
            previous: [38, function () {
              return e() ? 39 : 37;
            }],
            first: [33, function () {
              return e() ? 35 : 36;
            }],
            last: [34, function () {
              return e() ? 36 : 35;
            }]
          };
        }(e);
      }, [e]),
          _a$next = a.next,
          p = _a$next === void 0 ? f.next : _a$next,
          _a$previous = a.previous,
          b = _a$previous === void 0 ? f.previous : _a$previous,
          _a$first = a.first,
          g = _a$first === void 0 ? f.first : _a$first,
          _a$last = a.last,
          C = _a$last === void 0 ? f.last : _a$last;
      return (0, r.useComposedKeyboardActionHandlers)((0, r.useKeyboardActionHandler)(p, u), (0, r.useKeyboardActionHandler)(b, d), (0, r.useKeyboardActionHandler)(g, h), (0, r.useKeyboardActionHandler)(C, m));
    }
  },
  16921: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useKeepActiveItemIntoView: function useKeepActiveItemIntoView() {
        return d;
      }
    });
    var o = n(50959),
        r = n(50151),
        s = n(74991);
    var l = {
      duration: 200,
      additionalScroll: 0
    },
        i = {
      vertical: {
        scrollSize: "scrollHeight",
        clientSize: "clientHeight",
        start: "top",
        end: "bottom",
        size: "height"
      },
      horizontal: {
        scrollSize: "scrollWidth",
        clientSize: "clientWidth",
        start: "left",
        end: "right",
        size: "width"
      }
    };

    function a(e, t) {
      var n = i[e];
      return t[n.scrollSize] > t[n.clientSize];
    }

    function c(e, t, n, o, r, l) {
      var a = function (e, t, n) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var r = i[e];
        return {
          start: -1 * o,
          middle: -1 * (Math.floor(n[r.size] / 2) - Math.floor(t[r.size] / 2)),
          end: -1 * (n[r.size] - t[r.size]) + o
        };
      }(e, o, r, l.additionalScroll);

      var c = 0;
      if (function (e, t, n) {
        var o = i[e];
        return t[o.start] < n[o.start] - n[o.size] / 2 || t[o.end] > n[o.end] + n[o.size] / 2;
      }(e, o, r)) c = a.middle;else {
        var _t = function (e, t, n) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var r = i[e],
              s = t[r.start] + Math.floor(t[r.size] / 2),
              l = n[r.start] + Math.floor(n[r.size] / 2);
          return {
            start: t[r.start] - n[r.start] - o,
            middle: s - l,
            end: t[r.end] - n[r.end] + o
          };
        }(e, o, r, l.additionalScroll),
            _n3 = function (e) {
          var t = e.start,
              n = e.middle,
              o = e.end,
              r = new Map([[Math.abs(t), {
            key: "start",
            value: Math.sign(t)
          }], [Math.abs(n), {
            key: "middle",
            value: Math.sign(n)
          }], [Math.abs(o), {
            key: "end",
            value: Math.sign(o)
          }]]),
              s = Math.min.apply(Math, _toConsumableArray(r.keys()));
          return r.get(s);
        }(_t);

        c = void 0 !== _n3 ? a[_n3.key] : 0;
      }
      return function (e) {
        var _e$additionalScroll = e.additionalScroll,
            t = _e$additionalScroll === void 0 ? 0 : _e$additionalScroll,
            _e$duration = e.duration,
            n = _e$duration === void 0 ? s.dur : _e$duration,
            _e$func = e.func,
            o = _e$func === void 0 ? s.easingFunc.easeInOutCubic : _e$func,
            r = e.onScrollEnd,
            l = e.target,
            i = e.wrap,
            _e$direction = e.direction,
            a = _e$direction === void 0 ? "vertical" : _e$direction;
        var c = e.targetRect,
            u = e.wrapRect;
        c = null != c ? c : l.getBoundingClientRect(), u = null != u ? u : i.getBoundingClientRect();
        var d = ("vertical" === a ? c.top - u.top : c.left - u.left) + t,
            h = "vertical" === a ? "scrollTop" : "scrollLeft",
            m = i ? i[h] : 0;
        var f,
            p = 0;
        return p = window.requestAnimationFrame(function e(t) {
          var s;
          if (f ? s = t - f : (s = 0, f = t), s >= n) return i[h] = m + d, void (r && r());
          var l = m + d * o(s / n);
          i[h] = Math.floor(l), p = window.requestAnimationFrame(e);
        }), function () {
          window.cancelAnimationFrame(p), r && r();
        };
      }(_objectSpread({}, l, {
        target: t,
        targetRect: o,
        wrap: n,
        wrapRect: r,
        additionalScroll: c,
        direction: e
      }));
    }

    var u =
    /*#__PURE__*/
    function () {
      function u() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, u);

        this._container = null, this._lastScrolledElement = null, this._stopVerticalScroll = null, this._stopHorizontalScroll = null, this._container = e;
      }

      _createClass(u, [{
        key: "scrollTo",
        value: function scrollTo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;

          if (null !== this._container && null !== e && !function (e, t) {
            var n = e.getBoundingClientRect(),
                o = t.getBoundingClientRect();
            return n.top >= o.top && n.bottom <= o.bottom && n.left >= o.left && n.right <= o.right;
          }(e, this._container)) {
            var _n4 = e.getBoundingClientRect(),
                _o = this._container.getBoundingClientRect();

            this.stopScroll(), a("vertical", this._container) && (this._stopVerticalScroll = c("vertical", e, this._container, _n4, _o, this._modifyOptions("vertical", t))), a("horizontal", this._container) && (this._stopHorizontalScroll = c("horizontal", e, this._container, _n4, _o, this._modifyOptions("horizontal", t)));
          }

          this._lastScrolledElement = e;
        }
      }, {
        key: "scrollToLastElement",
        value: function scrollToLastElement(e) {
          this.scrollTo(this._lastScrolledElement, e);
        }
      }, {
        key: "stopScroll",
        value: function stopScroll() {
          null !== this._stopVerticalScroll && this._stopVerticalScroll(), null !== this._stopHorizontalScroll && this._stopHorizontalScroll();
        }
      }, {
        key: "getContainer",
        value: function getContainer() {
          return this._container;
        }
      }, {
        key: "setContainer",
        value: function setContainer(e) {
          var t;
          this._container = e, (null === (t = this._container) || void 0 === t ? void 0 : t.contains(this._lastScrolledElement)) || (this._lastScrolledElement = null);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.stopScroll(), this._container = null, this._lastScrolledElement = null;
        }
      }, {
        key: "_handleScrollEnd",
        value: function _handleScrollEnd(e) {
          "vertical" === e ? this._stopVerticalScroll = null : this._stopHorizontalScroll = null;
        }
      }, {
        key: "_modifyOptions",
        value: function _modifyOptions(e, t) {
          var _this = this;

          return Object.assign({}, t, {
            onScrollEnd: function onScrollEnd() {
              _this._handleScrollEnd(e), void 0 !== t.onScrollEnd && t.onScrollEnd();
            }
          });
        }
      }]);

      return u;
    }();

    function d() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var t = e.activeItem,
          n = e.getKey,
          s = _objectWithoutProperties(e, ["activeItem", "getKey"]),
          l = (0, o.useRef)(null),
          i = (0, o.useRef)(new Map()),
          a = function (e) {
        var t = (0, o.useRef)(null);
        return (0, o.useEffect)(function () {
          return t.current = new u(e), function () {
            return (0, r.ensureNotNull)(t.current).destroy();
          };
        }, []), t;
      }(l.current),
          c = (0, o.useCallback)(function () {
        null !== a.current && null !== l.current && a.current.getContainer() !== l.current && a.current.setContainer(l.current);
      }, [a, l]),
          d = (0, o.useCallback)(function (e) {
        l.current = e;
      }, [l]),
          h = (0, o.useCallback)(function (e, t) {
        var o = n ? n(e) : e;
        t ? i.current.set(o, t) : i.current["delete"](o);
      }, [i, n]),
          m = (0, o.useCallback)(function (e, t) {
        if (!e) return;
        var o = n ? n(e) : e,
            s = i.current.get(o);
        s && (c(), (0, r.ensureNotNull)(a.current).scrollTo(s, t));
      }, [i, a, n]);

      return (0, o.useEffect)(function () {
        return m(t, s);
      }, [m, t]), [d, h, m];
    }
  },
  38528: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useMergedRefs: function useMergedRefs() {
        return s;
      }
    });
    var o = n(50959),
        r = n(53017);

    function s(e) {
      return (0, o.useCallback)((0, r.mergeRefs)(e), e);
    }
  },
  22064: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createDomId: function createDomId() {
        return a;
      },
      joinDomIds: function joinDomIds() {
        return c;
      }
    });
    var o = /\s/g;

    function r(e) {
      return "string" == typeof e;
    }

    function s(e) {
      switch (_typeof(e)) {
        case "string":
          return e;

        case "number":
        case "bigint":
          return e.toString(10);

        case "boolean":
        case "symbol":
          return e.toString();

        default:
          return null;
      }
    }

    function l(e) {
      return e.trim().length > 0;
    }

    function i(e) {
      return e.replace(o, "-");
    }

    function a() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = e.map(s).filter(r).filter(l).map(i);
      return (t.length > 0 && t[0].startsWith("id_") ? t : ["id"].concat(_toConsumableArray(t))).join("_");
    }

    function c() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      return e.map(s).filter(r).filter(l).join(" ");
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
  50182: function _(e, t, n) {
    "use strict";

    n.d(t, {
      AdaptiveConfirmDialog: function AdaptiveConfirmDialog() {
        return h;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        l = n(94720),
        i = n(50151),
        a = n(44352),
        c = n(68335),
        u = n(35057),
        d = n(83073);

    var h =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(h, _o$PureComponent);

      function h() {
        var _this2;

        _classCallCheck(this, h);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this2._dialogRef = o.createRef(), _this2._handleClose = function () {
          var _this2$props = _this2.props,
              e = _this2$props.defaultActionOnClose,
              t = _this2$props.onSubmit,
              n = _this2$props.onCancel,
              o = _this2$props.onClose;

          switch (e) {
            case "submit":
              t();
              break;

            case "cancel":
              n();
          }

          o();
        }, _this2._handleCancel = function () {
          _this2.props.onCancel(), _this2.props.onClose();
        }, _this2._handleKeyDown = function (e) {
          var _this2$props2 = _this2.props,
              t = _this2$props2.onSubmit,
              n = _this2$props2.submitButtonDisabled,
              o = _this2$props2.submitOnEnterKey;
          13 === (0, c.hashFromEvent)(e) && o && (e.preventDefault(), n || t());
        };
        return _this2;
      }

      _createClass(h, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              e = _this$props.render,
              t = _this$props.onClose,
              n = _this$props.onSubmit,
              r = _this$props.onCancel,
              s = _this$props.footerLeftRenderer,
              l = _this$props.submitButtonText,
              i = _this$props.submitButtonDisabled,
              a = _this$props.defaultActionOnClose,
              c = _this$props.submitOnEnterKey,
              d = _objectWithoutProperties(_this$props, ["render", "onClose", "onSubmit", "onCancel", "footerLeftRenderer", "submitButtonText", "submitButtonDisabled", "defaultActionOnClose", "submitOnEnterKey"]);

          return o.createElement(u.AdaptivePopupDialog, _objectSpread({}, d, {
            ref: this._dialogRef,
            onKeyDown: this._handleKeyDown,
            render: this._renderChildren(),
            onClose: this._handleClose
          }));
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, i.ensureNotNull)(this._dialogRef.current).focus();
        }
      }, {
        key: "_renderChildren",
        value: function _renderChildren() {
          var _this3 = this;

          return function (e) {
            var _this3$props = _this3.props,
                t = _this3$props.render,
                r = _this3$props.footerLeftRenderer,
                i = _this3$props.additionalButtons,
                c = _this3$props.submitButtonText,
                u = _this3$props.submitButtonDisabled,
                h = _this3$props.onSubmit,
                m = _this3$props.cancelButtonText,
                _this3$props$showCanc = _this3$props.showCancelButton,
                f = _this3$props$showCanc === void 0 ? !0 : _this3$props$showCanc,
                p = _this3$props.submitButtonClassName,
                b = _this3$props.cancelButtonClassName,
                g = _this3$props.buttonsWrapperClassName;
            return o.createElement(o.Fragment, null, t(e), o.createElement("div", {
              className: d.footer
            }, r && r(e.isSmallWidth), o.createElement("div", {
              className: s()(d.buttons, g)
            }, i, f && o.createElement(l.Button, {
              className: b,
              name: "cancel",
              appearance: "stroke",
              onClick: _this3._handleCancel
            }, null != m ? m : a.t(null, void 0, n(20036))), o.createElement("span", {
              className: d.submitButton
            }, o.createElement(l.Button, {
              className: p,
              disabled: u,
              name: "submit",
              onClick: h,
              "data-name": "submit-button"
            }, null != c ? c : a.t(null, void 0, n(68988)))))));
          };
        }
      }]);

      return h;
    }(o.PureComponent);

    h.defaultProps = {
      defaultActionOnClose: "submit",
      submitOnEnterKey: !0
    };
  },
  4523: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupMenuDisclosureView: function PopupMenuDisclosureView() {
        return u;
      }
    });
    var o = n(50959),
        r = n(20520),
        s = n(50151);
    var l = {
      x: 0,
      y: 0
    };

    function i(e, t, n) {
      return (0, o.useCallback)(function () {
        return function (e, t) {
          var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l,
              _ref14$x = _ref14.x,
              n = _ref14$x === void 0 ? l.x : _ref14$x,
              _ref14$y = _ref14.y,
              o = _ref14$y === void 0 ? l.y : _ref14$y;

          var r = (0, s.ensureNotNull)(e).getBoundingClientRect(),
              i = {
            x: r.left + n,
            y: r.top + r.height + o,
            indentFromWindow: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            }
          };
          return t && (i.overrideWidth = r.width), i;
        }(e.current, t, n);
      }, [e, t]);
    }

    var a = n(86240);
    var c = parseInt(a["size-header-height"]);

    function u(e) {
      var t = e.button,
          n = e.popupChildren,
          s = e.buttonRef,
          l = e.listboxId,
          a = e.listboxClassName,
          u = e.listboxTabIndex,
          d = e.matchButtonAndListboxWidths,
          h = e.isOpened,
          m = e.scrollWrapReference,
          f = e.listboxReference,
          p = e.onClose,
          b = e.onOpen,
          g = e.onListboxFocus,
          C = e.onListboxBlur,
          R = e.onListboxKeyDown,
          v = e.listboxAria,
          _e$repositionOnScroll = e.repositionOnScroll,
          y = _e$repositionOnScroll === void 0 ? !0 : _e$repositionOnScroll,
          _e$closeOnHeaderOverl = e.closeOnHeaderOverlap,
          x = _e$closeOnHeaderOverl === void 0 ? !1 : _e$closeOnHeaderOverl,
          _e$popupPositionCorre = e.popupPositionCorrection,
          D = _e$popupPositionCorre === void 0 ? {
        x: 0,
        y: 0
      } : _e$popupPositionCorre,
          P = e.popupPosition,
          S = i(s, d, D),
          w = x ? c : 0;
      return o.createElement(o.Fragment, null, t, o.createElement(r.PopupMenu, _objectSpread({}, v, {
        id: l,
        className: a,
        tabIndex: u,
        isOpened: h,
        position: P || S,
        repositionOnScroll: y,
        onClose: p,
        onOpen: b,
        doNotCloseOn: s.current,
        reference: f,
        scrollWrapReference: m,
        onFocus: g,
        onBlur: C,
        onKeyDown: R,
        closeOnScrollOutsideOffset: w
      }), n));
    }
  },
  26597: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useKeyboardActionHandler: function useKeyboardActionHandler() {
        return o.useKeyboardActionHandler;
      },
      useKeyboardClose: function useKeyboardClose() {
        return o.useKeyboardClose;
      },
      useKeyboardEventHandler: function useKeyboardEventHandler() {
        return o.useKeyboardEventHandler;
      },
      useKeyboardOpen: function useKeyboardOpen() {
        return o.useKeyboardOpen;
      },
      useKeyboardToggle: function useKeyboardToggle() {
        return o.useKeyboardToggle;
      }
    });
    var o = n(66686);
  },
  86240: function _(e) {
    "use strict";

    e.exports = JSON.parse('{"size-header-height":"64px","media-mf-phone-landscape":"screen and (min-width: 568px)"}');
  }
}]);