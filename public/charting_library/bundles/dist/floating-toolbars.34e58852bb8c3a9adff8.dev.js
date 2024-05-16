"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[2306], {
  66783: function _(t) {
    "use strict";

    var e = Object.prototype.hasOwnProperty;

    function o(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }

    t.exports = function (t, i) {
      if (o(t, i)) return !0;
      if ("object" != _typeof(t) || null === t || "object" != _typeof(i) || null === i) return !1;
      var n = Object.keys(t),
          r = Object.keys(i);
      if (n.length !== r.length) return !1;

      for (var s = 0; s < n.length; s++) {
        if (!e.call(i, n[s]) || !o(t[n[s]], i[n[s]])) return !1;
      }

      return !0;
    };
  },
  26006: function _(t) {
    t.exports = {};
  },
  51338: function _(t) {
    t.exports = {};
  },
  1414: function _(t) {
    t.exports = {
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
  70132: function _(t) {
    t.exports = {};
  },
  19619: function _(t) {
    t.exports = {};
  },
  65719: function _(t) {
    t.exports = {};
  },
  12005: function _(t) {
    t.exports = {
      wrap: "wrap-Nn3SCuEL",
      icon: "icon-Nn3SCuEL",
      colorBg: "colorBg-Nn3SCuEL",
      color: "color-Nn3SCuEL",
      multicolor: "multicolor-Nn3SCuEL",
      white: "white-Nn3SCuEL"
    };
  },
  31188: function _(t) {
    t.exports = {
      button: "button-BuUjli6L"
    };
  },
  20835: function _(t) {
    t.exports = {
      item: "item-KdWj36gM",
      withIcon: "withIcon-KdWj36gM",
      icon: "icon-KdWj36gM",
      labelRow: "labelRow-KdWj36gM",
      multiWidth: "multiWidth-KdWj36gM",
      buttonWrap: "buttonWrap-KdWj36gM",
      buttonLabel: "buttonLabel-KdWj36gM"
    };
  },
  93402: function _(t) {
    t.exports = {
      container: "container-mdcOkvbj",
      sectionTitle: "sectionTitle-mdcOkvbj",
      separator: "separator-mdcOkvbj",
      customButton: "customButton-mdcOkvbj",
      accessible: "accessible-mdcOkvbj"
    };
  },
  80679: function _(t) {
    t.exports = {
      container: "container-iiEYaqPD",
      form: "form-iiEYaqPD",
      swatch: "swatch-iiEYaqPD",
      inputWrap: "inputWrap-iiEYaqPD",
      inputHash: "inputHash-iiEYaqPD",
      input: "input-iiEYaqPD",
      buttonWrap: "buttonWrap-iiEYaqPD",
      hueSaturationWrap: "hueSaturationWrap-iiEYaqPD",
      saturation: "saturation-iiEYaqPD",
      hue: "hue-iiEYaqPD"
    };
  },
  1369: function _(t) {
    t.exports = {
      hue: "hue-r4uo5Wn6",
      pointer: "pointer-r4uo5Wn6",
      pointerContainer: "pointerContainer-r4uo5Wn6"
    };
  },
  30099: function _(t) {
    t.exports = {
      opacity: "opacity-EnWts7Xu",
      opacitySlider: "opacitySlider-EnWts7Xu",
      opacitySliderGradient: "opacitySliderGradient-EnWts7Xu",
      pointer: "pointer-EnWts7Xu",
      dragged: "dragged-EnWts7Xu",
      opacityPointerWrap: "opacityPointerWrap-EnWts7Xu",
      opacityInputWrap: "opacityInputWrap-EnWts7Xu",
      opacityInput: "opacityInput-EnWts7Xu",
      opacityInputPercent: "opacityInputPercent-EnWts7Xu",
      accessible: "accessible-EnWts7Xu"
    };
  },
  35257: function _(t) {
    t.exports = {
      saturation: "saturation-NFNfqP2w",
      pointer: "pointer-NFNfqP2w"
    };
  },
  87466: function _(t) {
    t.exports = {
      swatches: "swatches-sfn7Lezv",
      swatch: "swatch-sfn7Lezv",
      hover: "hover-sfn7Lezv",
      empty: "empty-sfn7Lezv",
      white: "white-sfn7Lezv",
      selected: "selected-sfn7Lezv",
      contextItem: "contextItem-sfn7Lezv",
      row: "row-sfn7Lezv"
    };
  },
  94720: function _(t, e, o) {
    "use strict";

    o.d(e, {
      Button: function Button() {
        return y;
      }
    });
    var i = o(50959),
        n = o(97754),
        r = o(95604),
        s = o(9745),
        a = o(1414),
        l = o.n(a);

    function c(t) {
      var _t$color = t.color,
          e = _t$color === void 0 ? "brand" : _t$color,
          _t$size = t.size,
          o = _t$size === void 0 ? "medium" : _t$size,
          _t$variant = t.variant,
          i = _t$variant === void 0 ? "primary" : _t$variant,
          _t$stretch = t.stretch,
          s = _t$stretch === void 0 ? !1 : _t$stretch,
          a = t.icon,
          c = t.startIcon,
          d = t.endIcon,
          _t$iconOnly = t.iconOnly,
          h = _t$iconOnly === void 0 ? !1 : _t$iconOnly,
          u = t.className,
          p = t.isGrouped,
          g = t.cellState,
          _t$disablePositionAdj = t.disablePositionAdjustment,
          m = _t$disablePositionAdj === void 0 ? !1 : _t$disablePositionAdj,
          _ = t.primaryText,
          v = t.secondaryText,
          _t$isAnchor = t.isAnchor,
          f = _t$isAnchor === void 0 ? !1 : _t$isAnchor,
          y = function (t) {
        var e = "";
        return 0 !== t && (1 & t && (e = n(e, l()["no-corner-top-left"])), 2 & t && (e = n(e, l()["no-corner-top-right"])), 4 & t && (e = n(e, l()["no-corner-bottom-right"])), 8 & t && (e = n(e, l()["no-corner-bottom-left"]))), e;
      }((0, r.getGroupCellRemoveRoundBorders)(g));

      return n(u, l().button, l()["size-".concat(o)], l()["color-".concat(e)], l()["variant-".concat(i)], s && l().stretch, (a || c) && l()["with-start-icon"], d && l()["with-end-icon"], h && l()["icon-only"], y, p && l().grouped, p && !m && l()["adjust-position"], p && g.isTop && l()["first-row"], p && g.isLeft && l()["first-col"], _ && v && l()["multiline-content"], f && l().link);
    }

    function d(t) {
      var e = t.startIcon,
          o = t.icon,
          n = t.iconOnly,
          r = t.children,
          a = t.endIcon,
          c = t.primaryText,
          d = t.secondaryText,
          h = null != e ? e : o,
          u = !(e || o || a || n) && !r && c && d;
      return i.createElement(i.Fragment, null, h && i.createElement(s.Icon, {
        icon: h,
        className: l()["start-icon-wrap"]
      }), r && i.createElement("span", {
        className: l().content
      }, r), a && !n && i.createElement(s.Icon, {
        icon: a,
        className: l()["end-icon-wrap"]
      }), u && function (t) {
        return t.primaryText && t.secondaryText && i.createElement("div", {
          className: l()["text-wrap"]
        }, i.createElement("span", {
          className: l()["primary-text"]
        }, " ", t.primaryText, " "), "string" == typeof t.secondaryText ? i.createElement("span", {
          className: l()["secondary-text"]
        }, " ", t.secondaryText, " ") : i.createElement("span", {
          className: l()["secondary-text"]
        }, i.createElement("span", null, t.secondaryText.firstLine), i.createElement("span", null, t.secondaryText.secondLine)));
      }(t));
    }

    var h = o(86332),
        u = o(90186);

    function p(t) {
      var e = t.className,
          o = t.color,
          i = t.variant,
          n = t.size,
          r = t.stretch,
          s = t.animated,
          a = t.icon,
          l = t.iconOnly,
          c = t.startIcon,
          d = t.endIcon,
          h = t.primaryText,
          p = t.secondaryText,
          g = _objectWithoutProperties(t, ["className", "color", "variant", "size", "stretch", "animated", "icon", "iconOnly", "startIcon", "endIcon", "primaryText", "secondaryText"]);

      return _objectSpread({}, g, {}, (0, u.filterDataProps)(t), {}, (0, u.filterAriaProps)(t));
    }

    function g(t) {
      var e = t.reference,
          o = _objectWithoutProperties(t, ["reference"]),
          _ref = (0, i.useContext)(h.ControlGroupContext),
          n = _ref.isGrouped,
          r = _ref.cellState,
          s = _ref.disablePositionAdjustment,
          a = c(_objectSpread({}, o, {
        isGrouped: n,
        cellState: r,
        disablePositionAdjustment: s
      }));

      return i.createElement("button", _objectSpread({}, p(o), {
        className: a,
        ref: e
      }), i.createElement(d, _objectSpread({}, o)));
    }

    function m() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

      switch (t) {
        case "default":
          return "primary";

        case "stroke":
          return "secondary";
      }
    }

    function _() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "primary";

      switch (t) {
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

    function v() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "m";

      switch (t) {
        case "s":
          return "xsmall";

        case "m":
          return "small";

        case "l":
          return "large";
      }
    }

    function f(t) {
      var e = t.intent,
          o = t.size,
          i = t.appearance,
          n = t.useFullWidth,
          r = t.icon,
          s = _objectWithoutProperties(t, ["intent", "size", "appearance", "useFullWidth", "icon"]);

      return _objectSpread({}, s, {
        color: _(e),
        size: v(o),
        variant: m(i),
        stretch: n,
        startIcon: r
      });
    }

    function y(t) {
      return i.createElement(g, _objectSpread({}, f(t)));
    }
  },
  86332: function _(t, e, o) {
    "use strict";

    o.d(e, {
      ControlGroupContext: function ControlGroupContext() {
        return i;
      }
    });
    var i = o(50959).createContext({
      isGrouped: !1,
      cellState: {
        isTop: !0,
        isRight: !0,
        isBottom: !0,
        isLeft: !0
      }
    });
  },
  95604: function _(t, e, o) {
    "use strict";

    function i(t) {
      var e = 0;
      return t.isTop && t.isLeft || (e += 1), t.isTop && t.isRight || (e += 2), t.isBottom && t.isLeft || (e += 8), t.isBottom && t.isRight || (e += 4), e;
    }

    o.d(e, {
      getGroupCellRemoveRoundBorders: function getGroupCellRemoveRoundBorders() {
        return i;
      }
    });
  },
  56073: function _(t, e, o) {
    "use strict";

    function i(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var o = getComputedStyle(t),
          i = [o.height];
      return "border-box" !== o.boxSizing && i.push(o.paddingTop, o.paddingBottom, o.borderTopWidth, o.borderBottomWidth), e && i.push(o.marginTop, o.marginBottom), i.reduce(function (t, e) {
        return t + (parseFloat(e) || 0);
      }, 0);
    }

    function n(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var o = getComputedStyle(t),
          i = [o.width];
      return "border-box" !== o.boxSizing && i.push(o.paddingLeft, o.paddingRight, o.borderLeftWidth, o.borderRightWidth), e && i.push(o.marginLeft, o.marginRight), i.reduce(function (t, e) {
        return t + (parseFloat(e) || 0);
      }, 0);
    }

    o.d(e, {
      outerHeight: function outerHeight() {
        return i;
      },
      outerWidth: function outerWidth() {
        return n;
      }
    });
  },
  70114: function _(t, e, o) {
    "use strict";

    o.d(e, {
      ColorPickerButton: function ColorPickerButton() {
        return v;
      }
    });

    var i = o(50959),
        n = o(97754),
        r = o.n(n),
        s = o(50151),
        a = o(9745),
        l = o(24377),
        c = o(87095),
        d = o(56512),
        h = o(34381),
        u = o(6914),
        p = o(8087),
        g = o(43982),
        m = o(12811),
        _ = o(12005);

    function v(t) {
      var e = t.property,
          o = t.icon,
          n = t.propertyApplier,
          v = t.title,
          f = t.undoText,
          y = t.isToolbarFixed,
          b = t.className,
          w = (0, g.useProperty)(e),
          C = (0, i.useRef)(null),
          T = w ? (0, l.parseRgba)(w)[3] : void 0,
          x = "" === w,
          S = String(L()).toLowerCase() === u.white,
          _ref2 = (0, d.useCustomColors)(),
          _ref3 = _slicedToArray(_ref2, 3),
          P = _ref3[0],
          E = _ref3[1],
          W = _ref3[2];

      return i.createElement(p.ToolWidgetMenu, {
        className: b,
        verticalDropDirection: y ? m.VerticalDropDirection.FromBottomToTop : void 0,
        horizontalDropDirection: y ? m.HorizontalDropDirection.FromLeftToRight : void 0,
        horizontalAttachEdge: y ? m.HorizontalAttachEdge.Left : void 0,
        verticalAttachEdge: y ? m.VerticalAttachEdge.Top : void 0,
        content: i.createElement("div", {
          className: _.wrap
        }, i.createElement(a.Icon, {
          className: _.icon,
          icon: o
        }), i.createElement("div", {
          className: _.colorBg
        }, i.createElement("div", {
          className: r()(_.color, x && _.multicolor, S && _.white),
          style: x ? void 0 : {
            backgroundColor: w
          }
        }))),
        arrow: !1,
        title: v,
        ref: C,
        "data-name": t["data-name"],
        menuDataName: "".concat(t["data-name"], "-menu")
      }, i.createElement(h.ColorPicker, {
        color: L(),
        opacity: T,
        onColorChange: function onColorChange(t, e) {
          var o = w ? (0, c.alphaToTransparency)((0, l.parseRgba)(w)[3]) : 0;
          B((0, c.generateColor)(String(t), o, true)), e || (0, s.ensureNotNull)(C.current).close();
        },
        onOpacityChange: function onOpacityChange(t) {
          B((0, c.generateColor)(w, (0, c.alphaToTransparency)(t), !0));
        },
        selectOpacity: void 0 !== T,
        selectCustom: !0,
        customColors: P,
        onAddColor: function onAddColor(t) {
          E(t), (0, s.ensureNotNull)(C.current).close();
        },
        onRemoveCustomColor: W
      }));

      function L() {
        return w ? (0, l.rgbToHexString)((0, l.parseRgb)(w)) : null;
      }

      function B(t) {
        n.setProperty(e, t, f);
      }
    }
  },
  61259: function _(t, e, o) {
    "use strict";

    o.d(e, {
      LineWidthButton: function LineWidthButton() {
        return b;
      }
    });

    var i = o(50959),
        n = o(97754),
        r = o(50151),
        s = o(9745),
        a = o(8087),
        l = o(43982),
        c = o(16396),
        d = o(40173),
        h = o(12811),
        u = o(22978),
        p = o(14631),
        g = o(6096),
        m = o(6483),
        _ = o(66611),
        v = o(20835);

    var f = (0, d.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, v),
        y = [{
      value: 1,
      icon: u
    }, {
      value: 2,
      icon: p
    }, {
      value: 3,
      icon: g
    }, {
      value: 4,
      icon: m
    }];

    function b(t) {
      var e = t.multipleProperty,
          o = t.title,
          d = t.undoText,
          u = t.propertyApplier,
          p = t.isToolbarFixed,
          g = t.className,
          m = t.isSmallScreen,
          b = (0, l.useProperty)((0, r.ensureDefined)(e)),
          w = "mixed" === b || !b,
          C = function (t) {
        var e = y.find(function (e) {
          return e.value === t;
        });
        if (!e) return _;
        return e.icon;
      }(b);

      return i.createElement(a.ToolWidgetMenu, {
        className: g,
        arrow: !1,
        title: o,
        "data-name": t["data-name"],
        menuDataName: "".concat(t["data-name"], "-menu"),
        verticalDropDirection: p ? h.VerticalDropDirection.FromBottomToTop : void 0,
        horizontalDropDirection: p ? h.HorizontalDropDirection.FromRightToLeft : void 0,
        horizontalAttachEdge: p ? h.HorizontalAttachEdge.Right : void 0,
        verticalAttachEdge: p ? h.VerticalAttachEdge.Top : void 0,
        content: i.createElement("div", null, w ? i.createElement("div", {
          className: v.multiWidth
        }, i.createElement(s.Icon, {
          icon: _
        })) : i.createElement("div", {
          className: v.buttonWrap
        }, !m && i.createElement(s.Icon, {
          icon: C
        }), i.createElement("div", {
          className: n(!m && v.buttonLabel)
        }, "".concat(b, "px"))))
      }, y.map(function (_ref4) {
        var t = _ref4.value,
            e = _ref4.icon;
        return i.createElement(c.PopupMenuItem, {
          key: t,
          theme: f,
          label: "".concat(t, "px"),
          icon: e,
          isActive: t === b,
          onClick: T,
          onClickArg: t
        });
      }));

      function T(t) {
        t && e && (u.beginUndoMacro(d), e.setValue(t, void 0, {
          applyValue: function applyValue(t, e) {
            u.setProperty(t, e, d);
          }
        }), u.endUndoMacro());
      }
    }
  },
  43982: function _(t, e, o) {
    "use strict";

    o.d(e, {
      useProperty: function useProperty() {
        return n;
      }
    });
    var i = o(50959);

    var n = function n(t) {
      var _ref5 = (0, i.useState)(t.value()),
          _ref6 = _slicedToArray(_ref5, 2),
          e = _ref6[0],
          o = _ref6[1];

      return (0, i.useEffect)(function () {
        var e = function e(t) {
          o(t.value());
        };

        e(t);
        var i = {};
        return t.subscribe(i, e), function () {
          return t.unsubscribe(i, e);
        };
      }, [t]), e;
    };
  },
  34381: function _(t, e, o) {
    "use strict";

    o.d(e, {
      ColorPicker: function ColorPicker() {
        return Y;
      }
    });
    var i = o(50959),
        n = o(97754),
        r = o.n(n),
        s = o(44352),
        a = o(16838),
        l = o(50151),
        c = o(68335),
        d = o(71468);
    var h = [37, 39, 38, 40];

    function u(t) {
      var e = (0, i.useRef)(null);
      return (0, i.useLayoutEffect)(function () {
        if (!a.PLATFORM_ACCESSIBILITY_ENABLED) return;

        var t = (0, l.ensureNotNull)(e.current),
            o = function o() {
          var o = (0, a.queryTabbableElements)(t).sort(a.navigationOrderComparator);

          if (0 === o.length || o[0].parentElement && !m(o[0].parentElement, (0, l.ensureNotNull)(e.current))) {
            var _i2 = function (t) {
              var o = g(t).sort(a.navigationOrderComparator).find(function (t) {
                return m(t, (0, l.ensureNotNull)(e.current));
              });
              if (!o) return null;
              var i = Array.from(o.children);
              if (!i.length) return null;
              return i[0];
            }(t);

            if (null === _i2) return;

            if ((0, d.becomeMainElement)(_i2), o.length > 0) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _t2 = _step.value;
                  (0, d.becomeSecondaryElement)(_t2);
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
          }
        };

        return window.addEventListener("keyboard-navigation-activation", o), o(), function () {
          return window.removeEventListener("keyboard-navigation-activation", o);
        };
      }, []), [e, function (e) {
        if (!a.PLATFORM_ACCESSIBILITY_ENABLED) return;
        if (e.defaultPrevented) return;
        var o = (0, c.hashFromEvent)(e);
        if (!h.includes(o)) return;
        var i = document.activeElement;
        if (!(i instanceof HTMLElement)) return;
        var n = e.currentTarget;
        var r, s;

        if (t) {
          var _t3 = i.parentElement;
          r = _t3 ? Array.from(_t3.children) : [], s = r.indexOf(i);
        } else r = (l = n, Array.from(l.querySelectorAll("button:not([disabled], [aria-disabled])")).filter((0, a.createScopedVisibleElementFilter)(l))).sort(a.navigationOrderComparator), s = r.indexOf(i);

        var l;
        if (0 === r.length || -1 === s) return;

        var d = function d(o) {
          if (!document.activeElement) return;
          var i = g(n),
              r = document.activeElement.parentElement;
          if (!r) return;
          var s = Array.from(r.children).indexOf(document.activeElement);
          if (-1 === s) return;
          var a = i["down" === o ? i.indexOf(r) + 1 : i.indexOf(r) - 1];
          if (!a) return;
          e.preventDefault();
          var l = Array.from(a.children);
          l.length && (!t && s <= l.length - 1 ? _(l[s]) : _(l[0]));
        };

        switch (o) {
          case 37:
            if (e.preventDefault(), !t && 0 === s) break;

            _(p(r, s, -1));

            break;

          case 39:
            if (e.preventDefault(), !t && s === r.length - 1) break;

            _(p(r, s, 1));

            break;

          case 38:
            d("up");
            break;

          case 40:
            d("down");
        }
      }];
    }

    function p(t, e, o) {
      return t[(e + t.length + o) % t.length];
    }

    function g(t) {
      return Array.from(t.querySelectorAll('[data-role="row"]')).filter((0, a.createScopedVisibleElementFilter)(t));
    }

    function m(t, e) {
      var o = (0, l.ensureNotNull)(t.parentElement).offsetTop,
          i = o + (0, l.ensureNotNull)(t.parentElement).clientHeight,
          n = e.scrollTop,
          r = n + e.clientHeight;
      return o >= n && i <= r;
    }

    function _(t) {
      document.activeElement && (0, d.becomeSecondaryElement)(document.activeElement), (0, d.becomeMainElement)(t), t.focus();
    }

    var v = o(43688),
        f = o(93532),
        y = o(45582),
        b = Math.ceil,
        w = Math.max;

    var C = function C(t, e, o) {
      e = (o ? (0, f["default"])(t, e, o) : void 0 === e) ? 1 : w((0, y["default"])(e), 0);
      var i = null == t ? 0 : t.length;
      if (!i || e < 1) return [];

      for (var n = 0, r = 0, s = Array(b(i / e)); n < i;) {
        s[r++] = (0, v["default"])(t, n, n += e);
      }

      return s;
    };

    var T = o(24377),
        x = o(49483),
        S = o(20520),
        P = o(16396);
    var E = i.createContext(void 0);
    var W = o(6914),
        L = o(50238),
        B = o(35149),
        D = o(87466);

    function k(t) {
      var e = t.index,
          r = t.color,
          c = t.selected,
          d = t.onSelect,
          _ref7 = (0, i.useState)(!1),
          _ref8 = _slicedToArray(_ref7, 2),
          h = _ref8[0],
          u = _ref8[1],
          p = (0, i.useContext)(E),
          _ref9 = (0, L.useRovingTabindexElement)(null),
          _ref10 = _slicedToArray(_ref9, 2),
          g = _ref10[0],
          m = _ref10[1],
          _ = Boolean(p) && !x.CheckMobile.any();

      return i.createElement(i.Fragment, null, i.createElement("button", {
        ref: g,
        style: r ? {
          color: r
        } : void 0,
        className: n(D.swatch, a.PLATFORM_ACCESSIBILITY_ENABLED && D.accessible, h && D.hover, c && D.selected, !r && D.empty, String(r).toLowerCase() === W.white && D.white),
        onClick: function onClick() {
          d(r);
        },
        onContextMenu: _ ? v : void 0,
        tabIndex: m,
        "data-role": "swatch"
      }), _ && i.createElement(S.PopupMenu, {
        isOpened: h,
        onClose: v,
        position: function position() {
          var t = (0, l.ensureNotNull)(g.current).getBoundingClientRect();
          return {
            x: t.left,
            y: t.top + t.height + 4
          };
        },
        onClickOutside: v
      }, i.createElement(P.PopupMenuItem, {
        className: D.contextItem,
        label: s.t(null, void 0, o(54336)),
        icon: B,
        onClick: function onClick() {
          v(), (0, l.ensureDefined)(p)(e);
        },
        dontClosePopup: !0
      })));

      function v() {
        u(!h);
      }
    }

    function N(t) {
      var e = t.colors,
          o = t.color,
          n = t.children,
          r = t.onSelect;
      if (!e) return null;
      var s = o ? (0, T.parseRgb)(String(o)) : void 0,
          a = C(e, 10);
      return i.createElement("div", {
        className: D.swatches
      }, a.map(function (t, e) {
        return i.createElement("div", {
          className: D.row,
          "data-role": "row",
          key: e
        }, t.map(function (t, e) {
          return i.createElement(k, {
            key: String(t) + e,
            index: e,
            color: t,
            selected: s && (0, T.areEqualRgb)(s, (0, T.parseRgb)(String(t))),
            onSelect: l
          });
        }));
      }), n);

      function l(t) {
        r && r(t);
      }
    }

    var I = o(54368),
        A = o(94720);

    function M(t) {
      var e = "Invalid RGB color: ".concat(t);
      if (null === t) throw new Error(e);
      var o = t.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
      if (null === o) throw new Error(e);

      var _o = _slicedToArray(o, 4),
          i = _o[1],
          n = _o[2],
          r = _o[3];

      if (!i || !n || !r) throw new Error(e);
      var s = parseInt(i, 16) / 255,
          a = parseInt(n, 16) / 255,
          l = parseInt(r, 16) / 255,
          c = Math.max(s, a, l),
          d = Math.min(s, a, l);
      var h;
      var u = c,
          p = c - d,
          g = 0 === c ? 0 : p / c;
      if (c === d) h = 0;else {
        switch (c) {
          case s:
            h = (a - l) / p + (a < l ? 6 : 0);
            break;

          case a:
            h = (l - s) / p + 2;
            break;

          case l:
            h = (s - a) / p + 4;
            break;

          default:
            h = 0;
        }

        h /= 6;
      }
      return {
        h: h,
        s: g,
        v: u
      };
    }

    var R = o(43370),
        F = o(35257);

    var V =
    /*#__PURE__*/
    function (_i$PureComponent) {
      _inherits(V, _i$PureComponent);

      function V() {
        var _this;

        _classCallCheck(this, V);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(V).apply(this, arguments)), _this._container = null, _this._refContainer = function (t) {
          _this._container = t;
        }, _this._handlePosition = function (t) {
          var _this$props = _this.props,
              e = _this$props.hsv.h,
              o = _this$props.onChange;
          if (!o) return;
          var i = (0, l.ensureNotNull)(_this._container).getBoundingClientRect(),
              n = t.clientX - i.left,
              r = t.clientY - i.top;
          var s = n / i.width;
          s < 0 ? s = 0 : s > 1 && (s = 1);
          var a = 1 - r / i.height;
          a < 0 ? a = 0 : a > 1 && (a = 1), o({
            h: e,
            s: s,
            v: a
          });
        }, _this._mouseDown = function (t) {
          window.addEventListener("mouseup", _this._mouseUp), window.addEventListener("mousemove", _this._mouseMove);
        }, _this._mouseUp = function (t) {
          window.removeEventListener("mousemove", _this._mouseMove), window.removeEventListener("mouseup", _this._mouseUp), _this._handlePosition(t);
        }, _this._mouseMove = (0, R["default"])(_this._handlePosition, 100), _this._handleTouch = function (t) {
          _this._handlePosition(t.nativeEvent.touches[0]);
        };
        return _this;
      }

      _createClass(V, [{
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              t = _this$props2.className,
              _this$props2$hsv = _this$props2.hsv,
              e = _this$props2$hsv.h,
              o = _this$props2$hsv.s,
              n = _this$props2$hsv.v,
              s = "hsl(".concat(360 * e, ", 100%, 50%)");
          return i.createElement("div", {
            className: r()(F.saturation, t),
            style: {
              backgroundColor: s
            },
            ref: this._refContainer,
            onMouseDown: this._mouseDown,
            onTouchStart: this._handleTouch,
            onTouchMove: this._handleTouch
          }, i.createElement("div", {
            className: F.pointer,
            style: {
              left: 100 * o + "%",
              top: 100 * (1 - n) + "%"
            }
          }));
        }
      }]);

      return V;
    }(i.PureComponent);

    var z = o(1369);

    var O =
    /*#__PURE__*/
    function (_i$PureComponent2) {
      _inherits(O, _i$PureComponent2);

      function O() {
        var _this2;

        _classCallCheck(this, O);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(O).apply(this, arguments)), _this2._container = null, _this2._refContainer = function (t) {
          _this2._container = t;
        }, _this2._handlePosition = function (t) {
          var _this2$props = _this2.props,
              _this2$props$hsv = _this2$props.hsv,
              e = _this2$props$hsv.s,
              o = _this2$props$hsv.v,
              i = _this2$props.onChange;
          if (!i) return;
          var n = (0, l.ensureNotNull)(_this2._container).getBoundingClientRect();
          var r = (t.clientY - n.top) / n.height;
          r < 0 ? r = 0 : r > 1 && (r = 1), i({
            h: r,
            s: e,
            v: o
          });
        }, _this2._mouseDown = function (t) {
          window.addEventListener("mouseup", _this2._mouseUp), window.addEventListener("mousemove", _this2._mouseMove);
        }, _this2._mouseUp = function (t) {
          window.removeEventListener("mousemove", _this2._mouseMove), window.removeEventListener("mouseup", _this2._mouseUp), _this2._handlePosition(t);
        }, _this2._mouseMove = (0, R["default"])(_this2._handlePosition, 100), _this2._handleTouch = function (t) {
          _this2._handlePosition(t.nativeEvent.touches[0]);
        };
        return _this2;
      }

      _createClass(O, [{
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              t = _this$props3.className,
              e = _this$props3.hsv.h;
          return i.createElement("div", {
            className: r()(z.hue, t)
          }, i.createElement("div", {
            className: z.pointerContainer,
            ref: this._refContainer,
            onMouseDown: this._mouseDown,
            onTouchStart: this._handleTouch,
            onTouchMove: this._handleTouch
          }, i.createElement("div", {
            className: z.pointer,
            style: {
              top: 100 * e + "%"
            }
          })));
        }
      }]);

      return O;
    }(i.PureComponent);

    var H = o(80679);
    var U = "#000000",
        j = s.t(null, {
      context: "Color Picker"
    }, o(40276));

    var Z =
    /*#__PURE__*/
    function (_i$PureComponent3) {
      _inherits(Z, _i$PureComponent3);

      function Z(t) {
        var _this3;

        _classCallCheck(this, Z);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Z).call(this, t)), _this3._inputRef = i.createRef(), _this3._handleHSV = function (t) {
          var e = function (t) {
            var e = t.h,
                o = t.s,
                i = t.v;
            var n, r, s;
            var a = Math.floor(6 * e),
                l = 6 * e - a,
                c = i * (1 - o),
                d = i * (1 - l * o),
                h = i * (1 - (1 - l) * o);

            switch (a % 6) {
              case 0:
                n = i, r = h, s = c;
                break;

              case 1:
                n = d, r = i, s = c;
                break;

              case 2:
                n = c, r = i, s = h;
                break;

              case 3:
                n = c, r = d, s = i;
                break;

              case 4:
                n = h, r = c, s = i;
                break;

              case 5:
                n = i, r = c, s = d;
                break;

              default:
                n = 0, r = 0, s = 0;
            }

            return "#" + [255 * n, 255 * r, 255 * s].map(function (t) {
              return ("0" + Math.round(t).toString(16)).replace(/.+?([a-f0-9]{2})$/i, "$1");
            }).join("");
          }(t) || U;

          _this3.setState({
            color: e,
            inputColor: e.replace(/^#/, ""),
            hsv: t
          }), _this3.props.onSelect(e);
        }, _this3._handleInput = function (t) {
          var e = t.currentTarget.value;

          try {
            var _t4 = M(e),
                _o2 = "#".concat(e);

            _this3.setState({
              color: _o2,
              inputColor: e,
              hsv: _t4
            }), _this3.props.onSelect(_o2);
          } catch (t) {
            _this3.setState({
              inputColor: e
            });
          }
        }, _this3._handleAddColor = function () {
          return _this3.props.onAdd(_this3.state.color);
        };
        var e = t.color || U;
        _this3.state = {
          color: e,
          inputColor: e.replace(/^#/, ""),
          hsv: M(e)
        };
        return _this3;
      }

      _createClass(Z, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var t;
          a.PLATFORM_ACCESSIBILITY_ENABLED && !x.CheckMobile.any() && (null === (t = this._inputRef.current) || void 0 === t || t.focus());
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              t = _this$state.color,
              e = _this$state.hsv,
              o = _this$state.inputColor;
          return i.createElement("div", {
            className: H.container
          }, i.createElement("div", {
            className: H.form
          }, i.createElement("div", {
            className: H.swatch,
            style: {
              backgroundColor: t
            }
          }), i.createElement("div", {
            className: H.inputWrap
          }, i.createElement("span", {
            className: H.inputHash
          }, "#"), i.createElement("input", {
            ref: this._inputRef,
            type: "text",
            className: H.input,
            value: o,
            onChange: this._handleInput
          })), i.createElement("div", {
            className: H.buttonWrap
          }, i.createElement(A.Button, {
            size: "s",
            onClick: this._handleAddColor
          }, j))), i.createElement("div", {
            className: H.hueSaturationWrap
          }, i.createElement(V, {
            className: H.saturation,
            hsv: e,
            onChange: this._handleHSV
          }), i.createElement(O, {
            className: H.hue,
            hsv: e,
            onChange: this._handleHSV
          })));
        }
      }]);

      return Z;
    }(i.PureComponent);

    var $ = o(93402);
    var G = s.t(null, {
      context: "Color Picker"
    }, o(53585)),
        q = s.t(null, {
      context: "Color Picker"
    }, o(81865));

    function Y(t) {
      var e = t.color,
          o = t.opacity,
          n = t.selectCustom,
          s = t.selectOpacity,
          l = t.customColors,
          c = t.onRemoveCustomColor,
          d = t.onToggleCustom,
          h = t.onOpacityChange,
          p = t.menu,
          _ref11 = (0, i.useState)(!1),
          _ref12 = _slicedToArray(_ref11, 2),
          g = _ref12[0],
          m = _ref12[1],
          _ = "number" == typeof o ? o : 1,
          _u = u(),
          _u2 = _slicedToArray(_u, 2),
          v = _u2[0],
          f = _u2[1];

      return (0, i.useLayoutEffect)(function () {
        p && p.update();
      }, [s, p]), g ? i.createElement(Z, {
        color: e,
        onSelect: y,
        onAdd: function onAdd(e) {
          m(!1), null == d || d(!1);
          var o = t.onAddColor;
          o && o(e);
        }
      }) : i.createElement("div", {
        className: $.container
      }, i.createElement("div", {
        ref: v,
        onKeyDown: f
      }, i.createElement(N, {
        colors: W.basic,
        color: e,
        onSelect: y
      }), i.createElement(N, {
        colors: W.extended,
        color: e,
        onSelect: y
      }), i.createElement("div", {
        className: $.separator
      }), i.createElement(E.Provider, {
        value: c
      }, i.createElement(N, {
        colors: l,
        color: e,
        onSelect: y
      }, n && i.createElement(i.Fragment, null, a.PLATFORM_ACCESSIBILITY_ENABLED ? (null == l ? void 0 : l.length) ? i.createElement("button", {
        title: G,
        onClick: b,
        className: r()($.customButton, $.accessible, "apply-common-tooltip"),
        tabIndex: -1
      }) : i.createElement("div", {
        "data-role": "row"
      }, i.createElement("button", {
        title: G,
        onClick: b,
        className: r()($.customButton, $.accessible, "apply-common-tooltip"),
        tabIndex: -1
      })) : i.createElement("div", {
        className: r()($.customButton, "apply-common-tooltip"),
        onClick: b,
        title: G,
        tabIndex: -1
      }))))), s && i.createElement(i.Fragment, null, i.createElement("div", {
        className: $.sectionTitle
      }, q), i.createElement(I.Opacity, {
        color: e,
        opacity: _,
        onChange: function onChange(t) {
          h && h(t);
        }
      })));

      function y(e) {
        var o = t.onColorChange;
        o && o(e, g);
      }

      function b(t) {
        m(!0), null == d || d(!0);
      }
    }
  },
  54368: function _(t, e, o) {
    "use strict";

    o.d(e, {
      Opacity: function Opacity() {
        return d;
      }
    });
    var i = o(50959),
        n = o(97754),
        r = o(50151),
        s = o(37160),
        a = o(68335),
        l = o(16838),
        c = o(30099);

    var d =
    /*#__PURE__*/
    function (_i$PureComponent4) {
      _inherits(d, _i$PureComponent4);

      function d(t) {
        var _this4;

        _classCallCheck(this, d);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this, t)), _this4._container = null, _this4._pointer = null, _this4._raf = null, _this4._refContainer = function (t) {
          _this4._container = t;
        }, _this4._refPointer = function (t) {
          _this4._pointer = t;
        }, _this4._handlePosition = function (t) {
          null === _this4._raf && (_this4._raf = requestAnimationFrame(function () {
            var e = (0, r.ensureNotNull)(_this4._container),
                o = (0, r.ensureNotNull)(_this4._pointer),
                i = e.getBoundingClientRect(),
                n = o.offsetWidth,
                a = t.clientX - n / 2 - i.left,
                l = (0, s.clamp)(a / (i.width - n), 0, 1);
            _this4.setState({
              inputOpacity: Math.round(100 * l).toString()
            }), _this4.props.onChange(l), _this4._raf = null;
          }));
        }, _this4._onSliderClick = function (t) {
          _this4._handlePosition(t.nativeEvent), _this4._dragSubscribe();
        }, _this4._mouseUp = function (t) {
          _this4.setState({
            isPointerDragged: !1
          }), _this4._dragUnsubscribe(), _this4._handlePosition(t);
        }, _this4._mouseMove = function (t) {
          _this4.setState({
            isPointerDragged: !0
          }), _this4._handlePosition(t);
        }, _this4._onTouchStart = function (t) {
          _this4._handlePosition(t.nativeEvent.touches[0]);
        }, _this4._handleTouch = function (t) {
          _this4.setState({
            isPointerDragged: !0
          }), _this4._handlePosition(t.nativeEvent.touches[0]);
        }, _this4._handleTouchEnd = function () {
          _this4.setState({
            isPointerDragged: !1
          });
        }, _this4._handleInput = function (t) {
          var e = t.currentTarget.value,
              o = Number(e) / 100;
          _this4.setState({
            inputOpacity: e
          }), Number.isNaN(o) || o > 1 || _this4.props.onChange(o);
        }, _this4._handleKeyDown = function (t) {
          var e = (0, a.hashFromEvent)(t);
          if (37 !== e && 39 !== e) return;
          t.preventDefault();
          var o = Number(_this4.state.inputOpacity);
          37 === e && 0 !== o && _this4._changeOpacity(o - 1), 39 === e && 100 !== o && _this4._changeOpacity(o + 1);
        }, _this4.state = {
          inputOpacity: Math.round(100 * t.opacity).toString(),
          isPointerDragged: !1
        };
        return _this4;
      }

      _createClass(d, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), this._dragUnsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              t = _this$props4.color,
              e = _this$props4.opacity,
              o = _this$props4.hideInput,
              r = _this$props4.disabled,
              _this$state2 = this.state,
              s = _this$state2.inputOpacity,
              a = _this$state2.isPointerDragged,
              d = {
            color: t || void 0
          };
          return i.createElement("div", {
            className: c.opacity
          }, i.createElement("div", {
            className: n(c.opacitySlider, l.PLATFORM_ACCESSIBILITY_ENABLED && c.accessible),
            style: d,
            tabIndex: l.PLATFORM_ACCESSIBILITY_ENABLED && !r ? 0 : -1,
            ref: this._refContainer,
            onMouseDown: this._onSliderClick,
            onTouchStart: this._onTouchStart,
            onTouchMove: this._handleTouch,
            onTouchEnd: this._handleTouchEnd,
            onKeyDown: this._handleKeyDown,
            "aria-disabled": r
          }, i.createElement("div", {
            className: c.opacitySliderGradient,
            style: {
              backgroundImage: "linear-gradient(90deg, transparent, ".concat(t, ")")
            }
          }), i.createElement("div", {
            className: c.opacityPointerWrap
          }, i.createElement("div", {
            className: n(c.pointer, a && c.dragged),
            style: {
              left: 100 * e + "%"
            },
            ref: this._refPointer
          }))), !o && i.createElement("div", {
            className: c.opacityInputWrap
          }, i.createElement("input", {
            type: "text",
            className: c.opacityInput,
            value: s,
            onChange: this._handleInput
          }), i.createElement("span", {
            className: c.opacityInputPercent
          }, "%")));
        }
      }, {
        key: "_dragSubscribe",
        value: function _dragSubscribe() {
          var t = (0, r.ensureNotNull)(this._container).ownerDocument;
          t && (t.addEventListener("mouseup", this._mouseUp), t.addEventListener("mousemove", this._mouseMove));
        }
      }, {
        key: "_dragUnsubscribe",
        value: function _dragUnsubscribe() {
          var t = (0, r.ensureNotNull)(this._container).ownerDocument;
          t && (t.removeEventListener("mousemove", this._mouseMove), t.removeEventListener("mouseup", this._mouseUp));
        }
      }, {
        key: "_changeOpacity",
        value: function _changeOpacity(t) {
          this.setState({
            inputOpacity: t.toString()
          }), this.props.onChange(t / 100);
        }
      }]);

      return d;
    }(i.PureComponent);
  },
  6914: function _(t, e, o) {
    "use strict";

    o.d(e, {
      basic: function basic() {
        return a;
      },
      extended: function extended() {
        return c;
      },
      white: function white() {
        return n;
      }
    });
    var i = o(48891);
    var n = i.colorsPalette["color-white"],
        r = ["ripe-red", "tan-orange", "banana-yellow", "iguana-green", "minty-green", "sky-blue", "tv-blue", "deep-blue", "grapes-purple", "berry-pink"],
        s = [200, 300, 400, 500, 600, 700, 800, 900].map(function (t) {
      return "color-cold-gray-".concat(t);
    });
    s.unshift("color-white"), s.push("color-black"), r.forEach(function (t) {
      s.push("color-".concat(t, "-500"));
    });
    var a = s.map(function (t) {
      return i.colorsPalette[t];
    }),
        l = [];
    [100, 200, 300, 400, 700, 900].forEach(function (t) {
      r.forEach(function (e) {
        l.push("color-".concat(e, "-").concat(t));
      });
    });
    var c = l.map(function (t) {
      return i.colorsPalette[t];
    });
  },
  56512: function _(t, e, o) {
    "use strict";

    o.d(e, {
      useCustomColors: function useCustomColors() {
        return l;
      }
    });
    var i = o(50959),
        n = o(56840),
        r = o(76422);

    function s(t, e) {
      (0, i.useEffect)(function () {
        return r.subscribe(t, e, null), function () {
          r.unsubscribe(t, e, null);
        };
      }, [t, e]);
    }

    var a = o(24377);

    function l() {
      var _ref13 = (0, i.useState)((0, n.getJSON)("pickerCustomColors", [])),
          _ref14 = _slicedToArray(_ref13, 2),
          t = _ref14[0],
          e = _ref14[1];

      s("add_new_custom_color", function (o) {
        return e(c(o, t));
      }), s("remove_custom_color", function (o) {
        return e(d(o, t));
      });
      var o = (0, i.useCallback)(function (e) {
        var o = e ? (0, a.parseRgb)(e) : null;
        t.some(function (t) {
          return null !== t && null !== o && (0, a.areEqualRgb)((0, a.parseRgb)(t), o);
        }) || (r.emit("add_new_custom_color", e), (0, n.setJSON)("pickerCustomColors", c(e, t)));
      }, [t]),
          l = (0, i.useCallback)(function (e) {
        (e >= 0 || e < t.length) && (r.emit("remove_custom_color", e), (0, n.setJSON)("pickerCustomColors", d(e, t)));
      }, [t]);
      return [t, o, l];
    }

    function c(t, e) {
      var o = e.slice();
      return o.push(t), o.length > 29 && o.shift(), o;
    }

    function d(t, e) {
      return e.filter(function (e, o) {
        return t !== o;
      });
    }
  },
  84877: function _(t, e, o) {
    "use strict";

    o.d(e, {
      MatchMediaMap: function MatchMediaMap() {
        return s;
      }
    });
    var i = o(50959),
        n = o(66783),
        r = o.n(n);

    var s =
    /*#__PURE__*/
    function (_i$Component) {
      _inherits(s, _i$Component);

      function s(t) {
        var _this5;

        _classCallCheck(this, s);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), _this5._handleMediaChange = function () {
          var t = l(_this5.state.queries, function (t, e) {
            return e.matches;
          });
          var e = !1;

          for (var _o3 in t) {
            if (t.hasOwnProperty(_o3) && _this5.state.matches[_o3] !== t[_o3]) {
              e = !0;
              break;
            }
          }

          e && _this5.setState({
            matches: t
          });
        };
        var e = _this5.props.rules;
        _this5.state = a(e);
        return _this5;
      }

      _createClass(s, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(t, e) {
          return !r()(t, this.props) || !r()(e.rules, this.state.rules) || !r()(e.matches, this.state.matches);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._migrate(null, this.state.queries);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(t, e) {
          r()(t.rules, this.props.rules) || this._migrate(e.queries, this.state.queries);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._migrate(this.state.queries, null);
        }
      }, {
        key: "render",
        value: function render() {
          return this.props.children(this.state.matches);
        }
      }, {
        key: "_migrate",
        value: function _migrate(t, e) {
          var _this6 = this;

          null !== t && l(t, function (t, e) {
            e.removeListener(_this6._handleMediaChange);
          }), null !== e && l(e, function (t, e) {
            e.addListener(_this6._handleMediaChange);
          });
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(t, e) {
          if (r()(t.rules, e.rules)) return null;
          var o = t.rules;
          return a(o);
        }
      }]);

      return s;
    }(i.Component);

    function a(t) {
      var e = l(t, function (t, e) {
        return window.matchMedia(e);
      });
      return {
        queries: e,
        matches: l(e, function (t, e) {
          return e.matches;
        }),
        rules: _objectSpread({}, t)
      };
    }

    function l(t, e) {
      var o = {};

      for (var _i3 in t) {
        t.hasOwnProperty(_i3) && (o[_i3] = e(_i3, t[_i3]));
      }

      return o;
    }
  },
  40173: function _(t, e, o) {
    "use strict";

    function i(t, e) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Object.assign({}, t, function (t, e) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var i = Object.assign({}, e);

        for (var _i4 = 0, _Object$keys = Object.keys(e); _i4 < _Object$keys.length; _i4++) {
          var n = _Object$keys[_i4];
          var r = o[n] || n;
          r in t && (i[n] = [t[r], e[n]].join(" "));
        }

        return i;
      }(t, e, o));
    }

    o.d(e, {
      mergeThemes: function mergeThemes() {
        return i;
      }
    });
  },
  9629: function _(t, e, o) {
    "use strict";

    o.r(e), o.d(e, {
      FavoriteDrawingToolbar: function FavoriteDrawingToolbar() {
        return _;
      }
    });
    var i = o(44352),
        n = o(3809),
        r = o(71810),
        s = (o(50151), o(32563)),
        a = o(70027),
        l = o(39347),
        c = o(10643),
        d = o(88348),
        h = o(54819),
        u = o(56840),
        p = o(11417),
        g = o(97145),
        m = o(92249);
    o(70132);

    var _ =
    /*#__PURE__*/
    function (_n$FloatingToolbar) {
      _inherits(_, _n$FloatingToolbar);

      function _(t) {
        var _this7;

        _classCallCheck(this, _);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, {
          allowSortable: !s.mobiletouch,
          dragOnlyInsideToolbar: !0,
          defaultPosition: t,
          positionSettingsKey: "chart.favoriteDrawingsPosition",
          positionStorageType: "device"
        })), _this7._linetoolsWidgets = {}, _this7._canBeShownValue = new g.WatchedValue(!1), _this7._attachHandlers(), _this7._loadVisibilityState(), _this7._hideAction = _this7._createHideToolbarAction();
        return _this7;
      }

      _createClass(_, [{
        key: "show",
        value: function show() {
          this._canBeShownValue.value() && (this.isVisible() || this._renderAllLinetools(), _get(_getPrototypeOf(_.prototype), "show", this).call(this));
        }
      }, {
        key: "showAndSaveSettingsValue",
        value: function showAndSaveSettingsValue() {
          this._canBeShownValue.value() && (p.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", "true"), this.show());
        }
      }, {
        key: "hideAndSaveSettingsValue",
        value: function hideAndSaveSettingsValue() {
          p.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", "false"), this.hide();
        }
      }, {
        key: "canBeShown",
        value: function canBeShown() {
          return this._canBeShownValue.readonly();
        }
      }, {
        key: "_onFavoriteAdded",
        value: function _onFavoriteAdded(t) {
          this.addWidget(this._createLinetoolWidget(t)), r.LinetoolsFavoritesStore.favorites().filter(v).length > 0 && (this._canBeShownValue.setValue(!0), this.showAndSaveSettingsValue());
        }
      }, {
        key: "_onFavoriteRemoved",
        value: function _onFavoriteRemoved(t) {
          this.removeWidget(this._linetoolsWidgets[t]), delete this._linetoolsWidgets[t], 0 === r.LinetoolsFavoritesStore.favorites().filter(v).length && (this._canBeShownValue.setValue(!1), this.hide());
        }
      }, {
        key: "_onFavoriteMoved",
        value: function _onFavoriteMoved() {
          this._renderAllLinetools();
        }
      }, {
        key: "_onSelectedLinetoolChanged",
        value: function _onSelectedLinetoolChanged(t) {
          var _this8 = this;

          Object.keys(this._linetoolsWidgets).forEach(function (e) {
            _this8._linetoolsWidgets[e].classList.toggle("i-active", t === e);
          });
        }
      }, {
        key: "_createLinetoolWidget",
        value: function _createLinetoolWidget(t) {
          var e = "<span class=\"tv-favorited-drawings-toolbar__widget apply-common-tooltip ".concat(t === d.tool.value() ? "i-active" : "", "\" title=\"").concat(h.lineToolsInfo[t].localizedName, "\" data-name=\"FavoriteToolbar").concat(t, "\">").concat(h.lineToolsInfo[t].icon, "</span>"),
              o = (0, a.parseHtmlElement)(e);
          return o.addEventListener("click", function _callee(e) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    _context.next = 3;
                    return regeneratorRuntime.awrap((0, m.initLineTool)(t));

                  case 3:
                    d.tool.value() !== t && d.tool.setValue(t);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }), this._linetoolsWidgets[t] = o, o;
        }
      }, {
        key: "_renderAllLinetools",
        value: function _renderAllLinetools() {
          var _this9 = this;

          this._linetoolsWidgets = {}, this.removeWidgets(), r.LinetoolsFavoritesStore.favorites().filter(function (t) {
            return h.lineToolsInfo[t] && !0;
          }).forEach(function (t) {
            _this9.addWidget(_this9._createLinetoolWidget(t));
          });
        }
      }, {
        key: "_attachHandlers",
        value: function _attachHandlers() {
          var _this10 = this;

          r.LinetoolsFavoritesStore.favoriteAdded.subscribe(this, this._onFavoriteAdded), r.LinetoolsFavoritesStore.favoriteRemoved.subscribe(this, this._onFavoriteRemoved), r.LinetoolsFavoritesStore.favoriteMoved.subscribe(this, this._onFavoriteMoved), r.LinetoolsFavoritesStore.favoritesSynced.subscribe(null, function () {
            _this10._loadVisibilityState(), _this10._renderAllLinetools();
          }), this.onWidgetsReordered().subscribe(this, function (t, e) {
            if (r.LinetoolsFavoritesStore.favoriteMoved.unsubscribe(_this10, _this10._onFavoriteMoved), !r.LinetoolsFavoritesStore.moveFavorite(r.LinetoolsFavoritesStore.favorite(t), e)) throw new Error("Something went wrong");
            r.LinetoolsFavoritesStore.favoriteMoved.subscribe(_this10, _this10._onFavoriteMoved);
          }), this.onContextMenu(function (t) {
            t.preventDefault(), c.ContextMenuManager.showMenu([_this10._hideAction], t);
          }), d.tool.subscribe(this._onSelectedLinetoolChanged.bind(this));
        }
      }, {
        key: "_createHideToolbarAction",
        value: function _createHideToolbarAction() {
          var _this11 = this;

          return new l.Action({
            actionId: "Chart.FavoriteDrawingToolsToolbar.Hide",
            label: i.t(null, void 0, o(74813)),
            onExecute: function onExecute() {
              _this11.hideAndSaveSettingsValue();
            }
          });
        }
      }, {
        key: "_loadVisibilityState",
        value: function _loadVisibilityState() {
          var t = r.LinetoolsFavoritesStore.favorites().filter(v).length > 0;

          this._canBeShownValue.setValue(t);

          var e = r.LinetoolsFavoritesStore.favoritesCount() > 0;
          var o;
          var i = u.getValue("ChartFavoriteDrawingToolbarWidget.visible");
          void 0 !== i ? (u.remove("ChartFavoriteDrawingToolbarWidget.visible", {
            forceFlush: !0
          }), o = "false" !== i, p.TVLocalStorage.setItem("ChartFavoriteDrawingToolbarWidget.visible", i)) : o = "false" !== p.TVLocalStorage.getItem("ChartFavoriteDrawingToolbarWidget.visible"), o && e ? this.show() : this.hide();
        }
      }]);

      return _;
    }(n.FloatingToolbar);

    function v(t) {
      return !0;
    }
  },
  3809: function _(t, e, o) {
    "use strict";

    o.d(e, {
      FLOATING_TOOLBAR_REACT_WIDGETS_CLASS: function FLOATING_TOOLBAR_REACT_WIDGETS_CLASS() {
        return b;
      },
      FloatingToolbar: function FloatingToolbar() {
        return C;
      }
    });
    var i = o(59064),
        n = o(32563),
        r = o(61345),
        s = o(56840),
        a = o(57898),
        l = o(97145),
        c = o(38881);

    var d =
    /*#__PURE__*/
    function (_c$ChunkLoader) {
      _inherits(d, _c$ChunkLoader);

      function d() {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments));
      }

      _createClass(d, [{
        key: "_startLoading",
        value: function _startLoading() {
          return Promise.all([o.e(1553), o.e(2377)]).then(o.bind(o, 13367)).then(function (t) {
            return t.HammerJS;
          });
        }
      }]);

      return d;
    }(c.ChunkLoader);

    var h = o(11417),
        u = o(50151),
        p = o(56073);
    var g = o(49483);
    o(65719);

    var m =
    /*#__PURE__*/
    function () {
      function m(t) {
        var _this12 = this;

        _classCallCheck(this, m);

        var e, o;
        this._helper = null, this._handleDragStart = function (t) {
          var e;
          if (null !== _this12._helper) return;
          var o = _this12._source;
          o.classList.add("ui-draggable-dragging");
          var _ref15 = [(0, p.outerWidth)(o), (0, p.outerHeight)(o)],
              i = _ref15[0],
              n = _ref15[1];
          _this12._helper = {
            startTop: parseFloat(o.style.top) || 0,
            startLeft: parseFloat(o.style.left) || 0,
            nextTop: null,
            nextLeft: null,
            raf: null,
            size: [i, n],
            containment: _this12._containment instanceof HTMLElement ? [parseInt(getComputedStyle(_this12._containment).borderLeftWidth) + parseInt(getComputedStyle(_this12._containment).paddingLeft), parseInt(getComputedStyle(_this12._containment).borderTopWidth) + parseInt(getComputedStyle(_this12._containment).paddingTop), _this12._containment.offsetWidth - parseInt(getComputedStyle(_this12._containment).borderRightWidth) - parseInt(getComputedStyle(_this12._containment).paddingRight) - parseInt(getComputedStyle(o).marginLeft) - parseInt(getComputedStyle(o).marginRight) - i, _this12._containment.offsetHeight - parseInt(getComputedStyle(_this12._containment).borderBottomWidth) - parseInt(getComputedStyle(_this12._containment).paddingBottom) - parseInt(getComputedStyle(o).marginTop) - parseInt(getComputedStyle(o).marginBottom) - n] : "window" === _this12._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - i, window.scrollY + document.documentElement.offsetHeight - n] : null
          }, null === (e = _this12._start) || void 0 === e || e.call(_this12);
        }, this._handleDragMove = function (t) {
          var e;
          if (null === _this12._helper) return;
          var _t$detail = t.detail,
              o = _t$detail.current,
              i = _t$detail.initial,
              n = _this12._source,
              r = _this12._helper.nextTop,
              s = _this12._helper.nextLeft,
              a = "y" === _this12._axis || !1 === _this12._axis || 0 !== o.movementY;

          if (a) {
            var _t5 = _this12._helper.startTop;
            isFinite(_t5) && (_this12._helper.nextTop = o.clientY - i.clientY + _t5);
          }

          var l = "x" === _this12._axis || !1 === _this12._axis || 0 !== o.movementY;

          if (l) {
            var _t6 = _this12._helper.startLeft;
            isFinite(_t6) && (_this12._helper.nextLeft = o.clientX - i.clientX + _t6);
          }

          if (null !== _this12._helper.containment) {
            var _this12$_helper$conta = _slicedToArray(_this12._helper.containment, 4),
                _t7 = _this12$_helper$conta[0],
                _e2 = _this12$_helper$conta[1],
                _o4 = _this12$_helper$conta[2],
                _i5 = _this12$_helper$conta[3];

            a && _this12._helper.nextTop && (_this12._helper.nextTop = Math.min(_this12._helper.nextTop, _i5), _this12._helper.nextTop = Math.max(_this12._helper.nextTop, _e2)), l && _this12._helper.nextLeft && (_this12._helper.nextLeft = Math.min(_this12._helper.nextLeft, _o4), _this12._helper.nextLeft = Math.max(_this12._helper.nextLeft, _t7));
          }

          null !== _this12._helper.raf || r === _this12._helper.nextTop && s === _this12._helper.nextLeft || (_this12._helper.raf = requestAnimationFrame(function () {
            null !== _this12._helper && (null !== _this12._helper.nextTop && (n.style.top = _this12._helper.nextTop + "px", _this12._helper.nextTop = null), null !== _this12._helper.nextLeft && (n.style.left = _this12._helper.nextLeft + "px", _this12._helper.nextLeft = null), _this12._helper.raf = null);
          })), null === (e = _this12._drag) || void 0 === e || e.call(_this12);
        }, this._handleDragStop = function (t) {
          var e;
          if (null === _this12._helper) return;
          _this12._source.classList.remove("ui-draggable-dragging"), _this12._helper = null, null === (e = _this12._stop) || void 0 === e || e.call(_this12);
        };
        var i = this._source = t.source;
        i.classList.add("ui-draggable");
        var n = this._handle = null !== (e = t.handle ? i.querySelector(t.handle) : null) && void 0 !== e ? e : i;
        n.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new _({
          handle: n,
          onDragStart: this._handleDragStart,
          onDragMove: this._handleDragMove,
          onDragStop: this._handleDragStop
        }), this._axis = null !== (o = t.axis) && void 0 !== o && o, this._containment = t.containment;
      }

      _createClass(m, [{
        key: "destroy",
        value: function destroy() {
          var t = this._source;
          t.classList.remove("ui-draggable"), t.classList.remove("ui-draggable-dragging");
          this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(), null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null);
        }
      }]);

      return m;
    }();

    var _ =
    /*#__PURE__*/
    function () {
      function _(t) {
        var _this13 = this;

        _classCallCheck(this, _);

        this._initial = null, this._handlePointerDown = function (t) {
          if (null !== _this13._initial) return;
          if (!(t.target instanceof Element && _this13._handle.contains(t.target))) return;
          if (_this13._initial = t, !_this13._dispatchEvent(_this13._createEvent("pointer-drag-start", t))) return void (_this13._initial = null);
          t.preventDefault();

          var e = _this13._getEventTarget();

          e.addEventListener("pointermove", _this13._handlePointerMove), e.addEventListener("pointerup", _this13._handlePointerUp), e.addEventListener("pointercancel", _this13._handlePointerUp), e.addEventListener("lostpointercapture", _this13._handlePointerUp), e.setPointerCapture(t.pointerId);
        }, this._handlePointerMove = function (t) {
          null !== _this13._initial && _this13._initial.pointerId === t.pointerId && (t.preventDefault(), _this13._dispatchEvent(_this13._createEvent("pointer-drag-move", t)));
        }, this._handlePointerUp = function (t) {
          if (null === _this13._initial || _this13._initial.pointerId !== t.pointerId) return;
          t.preventDefault();

          var e = _this13._getEventTarget();

          e.removeEventListener("pointermove", _this13._handlePointerMove), e.removeEventListener("pointerup", _this13._handlePointerUp), e.removeEventListener("pointercancel", _this13._handlePointerUp), e.removeEventListener("lostpointercapture", _this13._handlePointerUp), e.releasePointerCapture(_this13._initial.pointerId), _this13._dispatchEvent(_this13._createEvent("pointer-drag-stop", t)), _this13._initial = null;
        };
        var e = this._handle = t.handle;
        this._onDragStart = t.onDragStart, this._onDragMove = t.onDragMove, this._onDragStop = t.onDragStop, e.style.touchAction = "none";

        this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown);
      }

      _createClass(_, [{
        key: "destroy",
        value: function destroy() {
          this._handle.style.touchAction = "";

          var t = this._getEventTarget();

          t.removeEventListener("pointerdown", this._handlePointerDown), t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (t.releasePointerCapture(this._initial.pointerId), this._initial = null);
        }
      }, {
        key: "_getEventTarget",
        value: function _getEventTarget() {
          return g.CheckMobile.iOS() || (0, g.isMac)() && n.touch ? window.document.documentElement : this._handle;
        }
      }, {
        key: "_dispatchEvent",
        value: function _dispatchEvent(t) {
          switch (t.type) {
            case "pointer-drag-start":
              this._onDragStart(t);

              break;

            case "pointer-drag-move":
              this._onDragMove(t);

              break;

            case "pointer-drag-stop":
              this._onDragStop(t);

          }

          return !t.defaultPrevented;
        }
      }, {
        key: "_createEvent",
        value: function _createEvent(t, e) {
          return (0, u.assert)(null !== this._initial), new CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: {
              backend: this,
              initial: this._initial,
              current: e
            }
          });
        }
      }]);

      return _;
    }();

    var v = o(70027),
        f = o(51768),
        y = o(25388);
    o(19619);
    var b = "floating-toolbar-react-widgets",
        w = "<div class=\"tv-floating-toolbar i-closed i-hidden\"><div class=\"tv-floating-toolbar__widget-wrapper\"><div class=\"tv-floating-toolbar__drag js-drag\">".concat(y, "</div><div class=\"tv-floating-toolbar__content js-content\"></div><div class=\"").concat(b, "\"></div></div></div>");

    var C =
    /*#__PURE__*/
    function () {
      function C(t) {
        var _this14 = this;

        _classCallCheck(this, C);

        this._widget = document.createElement("div"), this._isVertical = !1, this._hiddingTimeoutId = null, this._visibility = new l.WatchedValue(!1), this._windowResizeListener = this._onWindowResize.bind(this), this._reorderedDelegate = new a.Delegate(), this._responsiveResizeFunction = null, this._showTimeStamp = null, this._draggable = null, this._preventClickUntilAnimation = function (t) {
          null !== _this14._showTimeStamp && performance.now() - _this14._showTimeStamp < _this14.hideDuration() && t.stopPropagation();
        }, C._toolbars.push(this), this._options = t, this._widget = (0, v.parseHtmlElement)(w), this._content = this._widget.getElementsByClassName("js-content").item(0), this._reactWidgetsContainer = this._widget.getElementsByClassName(b).item(0), this._setZIndex(C._startZIndex + C._toolbars.length - 1), this._options.addClass && (this._widget.className += " ".concat(this._options.addClass)), this._options["data-name"] && (this._widget.dataset.name = this._options["data-name"]), this._options.layout && "auto" !== this._options.layout && (this._isVertical = "vertical" === this._options.layout, this._updateLayoutType(), this._updateAxisOption()), this._widget.addEventListener("click", this._preventClickUntilAnimation, !0);
      }

      _createClass(C, [{
        key: "destroy",
        value: function destroy() {
          this.hide(!0), C._toolbars.splice(C._toolbars.indexOf(this), 1), this._widget.removeEventListener("click", this._preventClickUntilAnimation, !0), document.body.contains(this._widget) && document.body.removeChild(this._widget), null !== this._draggable && this._draggable.destroy(), this._widget.innerHTML = "", this._responsiveResizeFunction = null;
        }
      }, {
        key: "setResponsiveResizeFunc",
        value: function setResponsiveResizeFunc(t) {
          this._responsiveResizeFunction = t;
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._visibility.value();
        }
      }, {
        key: "visibility",
        value: function visibility() {
          return this._visibility.readonly();
        }
      }, {
        key: "isVertical",
        value: function isVertical() {
          return this._isVertical;
        }
      }, {
        key: "show",
        value: function show() {
          var _this15 = this;

          this.isVisible() || (document.body.contains(this._widget) || (this._init(), document.body.appendChild(this._widget)), this._setHiddingTimeout(null), window.addEventListener("resize", this._windowResizeListener), this.raise(), this._visibility.setValue(!0), this._showTimeStamp = performance.now(), this._widget.classList.contains("i-hidden") ? (this._widget.classList.remove("i-hidden"), setTimeout(function () {
            _this15.isVisible() && _this15._widget.classList.remove("i-closed");
          })) : this._widget.classList.remove("i-closed"), this._onWindowResize());
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this16 = this;

          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          if (!this.isVisible()) return;

          var e = this._widget.classList.contains("i-closed");

          if (this._widget.classList.add("i-closed"), this._visibility.setValue(!1), t || e) this._setHiddingTimeout(null), this._widget.classList.add("i-hidden");else {
            var _t8 = setTimeout(function () {
              _this16._setHiddingTimeout(null), _this16._widget.classList.add("i-hidden");
            }, this.hideDuration());

            this._setHiddingTimeout(_t8);
          }
          window.removeEventListener("resize", this._windowResizeListener);
        }
      }, {
        key: "raise",
        value: function raise() {
          C._toolbars.length + C._startZIndex !== this._zIndex() && (C._toolbars.splice(C._toolbars.indexOf(this), 1), C._toolbars.push(this), C._updateAllZIndexes());
        }
      }, {
        key: "hideDuration",
        value: function hideDuration() {
          return .75 * r.dur;
        }
      }, {
        key: "addWidget",
        value: function addWidget(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var o = this.widgetsCount();
          if (void 0 === e.index && (e.index = o), e.index < 0 || e.index > o) throw new Error("Index must be in [0, ".concat(o, "]"));
          var i = document.createElement("div");
          i.className = "tv-floating-toolbar__widget js-widget", i.appendChild(t);
          var n = e.index === o ? null : this._content.childNodes.item(e.index);
          this._content.insertBefore(i, n), this._onWindowResize();
        }
      }, {
        key: "getReactWidgetContainer",
        value: function getReactWidgetContainer() {
          return this._reactWidgetsContainer;
        }
      }, {
        key: "removeWidget",
        value: function removeWidget(t) {
          var e = this._findWrapperForWidget(t);

          e && (this._content.removeChild(e), this._onWindowResize());
        }
      }, {
        key: "widgetsCount",
        value: function widgetsCount() {
          return this._content.childNodes.length;
        }
      }, {
        key: "showWidget",
        value: function showWidget(t) {
          var e = this._findWrapperForWidget(t);

          e && e.classList.remove("i-hidden");
        }
      }, {
        key: "hideWidget",
        value: function hideWidget(t) {
          var e = this._findWrapperForWidget(t);

          e && e.classList.add("i-hidden");
        }
      }, {
        key: "removeWidgets",
        value: function removeWidgets() {
          for (; this._content.firstChild;) {
            this._content.removeChild(this._content.firstChild);
          }

          this._onWindowResize();
        }
      }, {
        key: "onWidgetsReordered",
        value: function onWidgetsReordered() {
          return this._reorderedDelegate;
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(t) {
          var _this17 = this;

          if (n.mobiletouch) {
            new d().load().then(function (e) {
              var o = new e(_this17._widget);
              o.get("press").set({
                time: 500
              }), o.on("press", function (e) {
                _this17._preventWidgetTouchEndEvent(), t(e.srcEvent);
              });
            });
          } else this._widget.addEventListener("contextmenu", t);
        }
      }, {
        key: "checkPosition",
        value: function checkPosition() {
          var t = this._getCorrectedWidgetRect(),
              e = {
            left: t.left,
            top: t.top
          };

          this._correctPosition(e), t.left === e.left && t.top === e.top || (this._widget.style.left = e.left + "px", this._widget.style.top = e.top + "px");
        }
      }, {
        key: "_determineCurrentLayoutVertical",
        value: function _determineCurrentLayoutVertical(t) {
          var e = this._isVertical ? t.height : t.width;
          return window.innerWidth < e && window.innerWidth < window.innerHeight;
        }
      }, {
        key: "_getWidget",
        value: function _getWidget() {
          return this._widget;
        }
      }, {
        key: "_findWrapperForWidget",
        value: function _findWrapperForWidget(t) {
          var e = this._content.getElementsByClassName("js-widget");

          for (var _o5 = 0; _o5 < e.length; ++_o5) {
            var _i6 = e.item(_o5);

            if (_i6.contains(t)) return _i6;
          }

          return null;
        }
      }, {
        key: "_onVerticalChanged",
        value: function _onVerticalChanged(t, e) {}
      }, {
        key: "_correctPosition",
        value: function _correctPosition(t) {
          var e = this._getCorrectedWidgetRect(),
              o = this._getSavedPosition(),
              i = window.innerWidth - e.right,
              n = window.innerHeight - e.bottom;

          i < 0 ? t.left = Math.max(0, window.innerWidth - e.width) : o && o.left > t.left && (t.left = Math.min(t.left + i, o.left)), n < 0 ? t.top = Math.max(0, window.innerHeight - e.height) : o && o.top > t.top && (t.top = Math.min(t.top + n, o.top));
        }
      }, {
        key: "_getCorrectedWidgetRect",
        value: function _getCorrectedWidgetRect() {
          var t = this._widget.getBoundingClientRect();

          if (this._widget.classList.contains("i-closed")) {
            var _e3 = 1 / .925 - 1,
                _o6 = t.width * _e3,
                _i7 = t.height * _e3;

            return {
              bottom: t.bottom + _i7 / 2,
              height: t.height + _i7,
              left: t.left - _o6 / 2,
              right: t.right + _o6 / 2,
              top: t.top - _i7 / 2,
              width: t.width + _o6
            };
          }

          return t;
        }
      }, {
        key: "_getSavedPosition",
        value: function _getSavedPosition() {
          var t;
          var e;

          if ("device" === this._options.positionStorageType) {
            var _t9 = h.TVLocalStorage.getItem(this._options.positionSettingsKey);

            e = null !== _t9 ? JSON.parse(_t9) : null;
          } else e = null !== (t = (0, s.getJSON)(this._options.positionSettingsKey)) && void 0 !== t ? t : null;

          return null !== e && "top" in e && "left" in e ? e : null;
        }
      }, {
        key: "_setHiddingTimeout",
        value: function _setHiddingTimeout(t) {
          null !== this._hiddingTimeoutId && clearTimeout(this._hiddingTimeoutId), this._hiddingTimeoutId = t;
        }
      }, {
        key: "_preventWidgetTouchEndEvent",
        value: function _preventWidgetTouchEndEvent() {
          var _this18 = this;

          var t = function t(e) {
            e.preventDefault(), _this18._widget.removeEventListener("touchend", t);
          };

          this._widget.addEventListener("touchend", t);
        }
      }, {
        key: "_updateLayoutType",
        value: function _updateLayoutType() {
          this._widget.classList.toggle("i-vertical", this._isVertical);
        }
      }, {
        key: "_updateAxisOption",
        value: function _updateAxisOption() {
          0;
        }
      }, {
        key: "_onWindowResize",
        value: function _onWindowResize() {
          if ("auto" === (this._options.layout || "auto")) {
            var _t10 = this._isVertical,
                _e4 = this._getCorrectedWidgetRect();

            this._isVertical = this._determineCurrentLayoutVertical(_e4), this._updateLayoutType(), _t10 !== this._isVertical && (this._onVerticalChanged(this._isVertical, _t10), this._updateAxisOption());
          }

          this.checkPosition(), this._resizeResponsive();
        }
      }, {
        key: "_resizeResponsive",
        value: function _resizeResponsive() {
          if (null === this._responsiveResizeFunction) return;
          var t = this._options.layout || "auto";
          "auto" === t && (t = this._isVertical ? "vertical" : "horizontal");
          var e = "vertical" === t ? this._widget.clientHeight : this._widget.clientWidth,
              o = ("vertical" === t ? window.innerHeight : window.innerWidth) - e;

          this._responsiveResizeFunction(e, o, t);
        }
      }, {
        key: "_setZIndex",
        value: function _setZIndex(t) {
          this._widget.style.zIndex = String(t);
        }
      }, {
        key: "_zIndex",
        value: function _zIndex() {
          return Number(this._widget.style.zIndex);
        }
      }, {
        key: "_loadPosition",
        value: function _loadPosition() {
          var t;
          var e = null !== (t = this._getSavedPosition()) && void 0 !== t ? t : this._options.defaultPosition;
          this._widget.style.left = Math.round(e.left) + "px", this._widget.style.top = Math.round(e.top) + "px", this._onWindowResize();
        }
      }, {
        key: "_savePosition",
        value: function _savePosition() {
          var t = this._widget.getBoundingClientRect();

          if ("device" === this._options.positionStorageType) try {
            h.TVLocalStorage.setItem(this._options.positionSettingsKey, JSON.stringify({
              left: t.left,
              top: t.top
            }));
          } catch (t) {} else (0, s.setJSON)(this._options.positionSettingsKey, {
            left: t.left,
            top: t.top
          });
        }
      }, {
        key: "_init",
        value: function _init() {
          this._loadPosition(), this._draggable = new m({
            source: this._widget,
            containment: "window",
            handle: ".js-drag",
            start: i.globalCloseMenu,
            stop: this._savePosition.bind(this)
          }), this._widget.addEventListener("pointerdown", this.raise.bind(this));
        }
      }, {
        key: "_initSortable",
        value: function _initSortable() {
          var _this19 = this;

          var t = -1;
          lazyJqueryUI(this._content).sortable({
            start: function start(e, o) {
              t = o.item.index();
            },
            stop: function stop(e, o) {
              var i = o.item.index();
              t !== i && ((0, f.trackEvent)("Floating Toolbar", "User Sort"), _this19._reorderedDelegate.fire(t, i));
            },
            tolerance: "pointer",
            distance: 5,
            containment: !!this._options.dragOnlyInsideToolbar && "parent",
            scroll: !1,
            placeholder: "sortable-placeholder",
            forcePlaceholderSize: !0
          }), this._updateAxisOption();
        }
      }], [{
        key: "_updateAllZIndexes",
        value: function _updateAllZIndexes() {
          C._toolbars.forEach(function (t, e) {
            t._setZIndex(C._startZIndex + e);
          });
        }
      }]);

      return C;
    }();

    C._startZIndex = 20, C._toolbars = [];
  },
  89824: function _(t, e, o) {
    "use strict";

    o.d(e, {
      LineToolPropertiesWidgetBase: function LineToolPropertiesWidgetBase() {
        return wt;
      }
    });
    var i = o(50959),
        n = o(962),
        r = o(44352),
        s = o(36298),
        a = o(14483),
        l = o(97145),
        c = o(1722),
        d = o(88348),
        h = o(68806),
        u = o(50151),
        p = o(59452),
        g = o.n(p);

    var m =
    /*#__PURE__*/
    function (_g) {
      _inherits(m, _g);

      function m(t, e, o) {
        var _this20;

        _classCallCheck(this, m);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this)), _this20._listenersMappers = [], _this20._isProcess = !1, _this20._baseProperty = t, _this20._propertyApplier = e, _this20._undoText = o;
        return _this20;
      }

      _createClass(m, [{
        key: "destroy",
        value: function destroy() {
          this._baseProperty.destroy(), _get(_getPrototypeOf(m.prototype), "destroy", this).call(this);
        }
      }, {
        key: "value",
        value: function value() {
          return this._baseProperty.value();
        }
      }, {
        key: "setValue",
        value: function setValue(t) {
          var _this21 = this;

          this._isProcess = !0, this._baseProperty.setValue(t, void 0, {
            applyValue: function applyValue(t, e) {
              return _this21._propertyApplier.setProperty(t, e, _this21._undoText);
            }
          }), this._isProcess = !1, this._listenersMappers.forEach(function (t) {
            t.method.call(t.obj, _this21);
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(t, e) {
          var _this22 = this;

          var o = function o(_o7) {
            _this22._isProcess || e.call(t, _this22);
          },
              i = {
            obj: t,
            method: e,
            callback: o
          };

          this._listenersMappers.push(i), this._baseProperty.subscribe(t, o);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(t, e) {
          var o;
          var i = (0, u.ensureDefined)(null === (o = this._listenersMappers.find(function (o) {
            return o.obj === t && o.method === e;
          })) || void 0 === o ? void 0 : o.callback);

          this._baseProperty.unsubscribe(t, i);
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll(t) {
          this._baseProperty.unsubscribeAll(t);
        }
      }]);

      return m;
    }(g());

    var _ = o(69152),
        v = o(97754),
        f = o.n(v),
        y = o(84877),
        b = o(3809),
        w = o(24437);

    var C = b.FLOATING_TOOLBAR_REACT_WIDGETS_CLASS + "__button";

    function T(t) {
      var e = t.templateButton,
          o = t.propertyButtons,
          n = t.commonButtons,
          r = t.isDrawingFinished,
          s = t.isToolbarFixed,
          a = t.buttonClassName,
          l = t.activeChartWidget,
          c = l.hasModel() && l.model().selection().dataSources();
      return c && c.length ? i.createElement(y.MatchMediaMap, {
        rules: {
          isSmallWidth: w.DialogBreakpoints.TabletSmall,
          isSmallHeight: "screen and (max-height: 430px)"
        }
      }, function (_ref16) {
        var t = _ref16.isSmallWidth,
            e = _ref16.isSmallHeight;
        return i.createElement(i.Fragment, null, d(), r && i.createElement(i.Fragment, null, Boolean(o.length) && o.map(function (o, n) {
          return i.createElement(o.component, _objectSpread({}, o.props, {
            key: "".concat(o.props.title, "_").concat(n),
            className: f()(C, a),
            isSmallScreen: t || e,
            isToolbarFixed: s
          }));
        }), Boolean(n.length) && n.map(function (o, n) {
          var r = t || e;
          return r ? o.showForSmallScreen ? i.createElement(o.component, _objectSpread({}, o.props, {
            isSmallScreen: r,
            key: "".concat(o.props.title, "_").concat(n),
            className: f()(C, a)
          })) : null : i.createElement(o.component, _objectSpread({}, o.props, {
            key: "".concat(o.props.title, "_").concat(n),
            className: f()(C, a)
          }));
        })));
      }) : d();

      function d() {
        return null === e ? null : i.createElement(e.component, _objectSpread({}, e.props, {
          isToolbarFixed: s,
          isDrawingFinished: r,
          className: f()(C, a)
        }));
      }
    }

    var x = o(51768),
        S = o(50813),
        P = o(61964);

    function E(t) {
      var e = t.title,
          o = t.activeChartWidget,
          n = t.className;
      return i.createElement(S.ToolWidgetIconButton, {
        className: n,
        icon: P,
        title: e,
        onClick: function onClick() {
          var t, e;
          return regeneratorRuntime.async(function onClick$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  (0, x.trackEvent)("GUI", "Context action on drawings", "Settings");
                  t = o.model().selection().lineDataSources(), e = t.length;

                  if (!(1 === e)) {
                    _context2.next = 7;
                    break;
                  }

                  _context2.next = 5;
                  return regeneratorRuntime.awrap(o.showChartPropertiesForSource(t[0], void 0, {
                    onWidget: o.onWidget()
                  }));

                case 5:
                  _context2.next = 11;
                  break;

                case 7:
                  _context2.t0 = e > 1;

                  if (!_context2.t0) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return regeneratorRuntime.awrap(o.showChartPropertiesForSources({
                    sources: t
                  }));

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          });
        },
        "data-name": "settings"
      });
    }

    var W = o(43982),
        L = o(66427),
        B = o(31188);

    function D(t) {
      var e = t.className,
          o = _objectWithoutProperties(t, ["className"]);

      return i.createElement(L.ToolButton, _objectSpread({
        className: v(e, B.button),
        tooltipPosition: "horizontal"
      }, o));
    }

    var k = o(65186),
        N = o(91244);

    function I(t) {
      var e = t.activeChartWidget,
          n = t.className,
          s = e.model().selection().lineDataSources();
      if (0 === s.length) return null;
      var a = s[0].properties().frozen,
          l = (0, W.useProperty)(a),
          c = l ? {
        tooltip: r.t(null, void 0, o(15101)),
        icon: k
      } : {
        tooltip: r.t(null, void 0, o(42284)),
        icon: N
      };
      return i.createElement(D, _objectSpread({
        className: n,
        isActive: Boolean(l),
        onClick: function onClick() {
          (0, x.trackEvent)("GUI", "Context action on drawings", "Lock"), e.toggleLockSelectedObject();
        },
        "data-name": Boolean(l) ? "unlock" : "lock"
      }, c));
    }

    var A = o(35149);

    function M(t) {
      var e = t.title,
          o = t.activeChartWidget,
          n = t.className;
      return i.createElement(S.ToolWidgetIconButton, {
        className: n,
        icon: A,
        title: e,
        "data-name": "remove",
        onClick: function onClick() {
          (0, x.trackEvent)("GUI", "Context action on drawings", "Remove"), o.removeSelectedSources();
        }
      });
    }

    var R = o(9745),
        F = o(32563),
        V = o(8087),
        z = o(58451),
        O = o(10643),
        H = o(73212),
        U = o(68335),
        j = o(4741),
        Z = o(39347),
        $ = o(84959);

    function G(t, e) {
      var i = [(0, H.createVisualOrderAction)(t, e), (0, H.createChangeIntervalsVisibilitiesAction)(t, e)],
          n = function (t, e) {
        var i = [],
            n = U.isMacKeyboard ? " +" : "",
            s = e.filter(function (t) {
          return t.cloneable();
        });
        s.length > 0 && i.push(new Z.Action({
          actionId: "Chart.LineTool.Clone",
          name: "clone",
          icon: o(36296),
          shortcutHint: U.humanReadableModifiers(j.Modifiers.Mod) + n + " Drag",
          label: r.t(null, void 0, o(52977)),
          onExecute: function onExecute() {
            t.model().cloneLineTools(s, !1), (0, x.trackEvent)("GUI", "Context action on drawings", "Clone");
          }
        }));
        var a = e.filter(function (t) {
          return t.copiable();
        });

        if (a.length > 0) {
          var _e5 = {
            actionId: "Chart.Clipboard.CopyLineTools",
            name: "copy",
            label: r.t(null, void 0, o(35216)),
            shortcutHint: U.humanReadableModifiers(j.Modifiers.Mod) + n + " C",
            onExecute: function onExecute() {
              t.chartWidgetCollection().clipboard.uiRequestCopy(a);
            }
          };
          i.push(new Z.Action(_e5, "Copy"));
        }

        return function (t, e) {
          return !!(null == t ? void 0 : t.isMultipleLayout().value()) && e.some(function (t) {
            return t.isSynchronizable();
          });
        }(t, e) ? (i.push.apply(i, _toConsumableArray((0, H.createSyncDrawingActions)(t, e))), i) : i;
      }(t, e);

      return n.length && i.push.apply(i, [new Z.Separator()].concat(_toConsumableArray(n))), i.push(new Z.Separator(), function (t) {
        return new Z.Action({
          actionId: "Chart.SelectedObject.Hide",
          label: r.t(null, void 0, o(31971)),
          icon: $,
          onExecute: function onExecute() {
            t.hideSelectedObject();
          },
          name: "hide"
        });
      }(t)), i;
    }

    var q = o(44996);

    function Y(t) {
      var e = t.title,
          o = t.activeChartWidget,
          n = t.isSmallScreen,
          r = t.className,
          s = o.model().selection().lineDataSources(),
          _ref17 = (0, i.useState)([]),
          _ref18 = _slicedToArray(_ref17, 2),
          a = _ref18[0],
          l = _ref18[1],
          c = (0, i.useRef)(null),
          d = (0, i.useMemo)(function () {
        return new H.ActionsProvider(o);
      }, [o]),
          h = (0, i.useCallback)(function () {
        return d.contextMenuActionsForSources(s);
      }, [d, s]),
          u = (0, i.useCallback)(function () {
        if (n) return;
        var t = G(o, s);
        l(K(t));
      }, [n, o, s]),
          p = (0, i.useCallback)(function (t) {
        n && h().then(function (e) {
          window.matchMedia(w.DialogBreakpoints.TabletSmall).matches ? O.ContextMenuManager.showMenu(K(e), t, {
            mode: "drawer",
            "data-name": "more-menu"
          }) : l(K(e));
        });
      }, [n, h]);

      return (0, i.useEffect)(function () {
        var t;
        a.length && (null === (t = c.current) || void 0 === t || t.update());
      }, [a]), i.createElement(V.ToolWidgetMenu, {
        className: r,
        ref: c,
        arrow: !1,
        onOpen: u,
        onClick: p,
        title: e,
        content: i.createElement(R.Icon, {
          icon: q
        }),
        "data-name": "more",
        menuDataName: "more-menu",
        closeOnEsc: !0
      }, i.createElement(z.ActionsTable, {
        parentIsOpened: !0,
        items: a
      }));
    }

    function K(t) {
      if (F.touch && !window.matchMedia("(pointer:fine)").matches) {
        var _e6 = t.filter(function (t) {
          return "Copy" !== t.id;
        });

        if (_e6.length === t.length) return _e6;
        var _o8 = [];
        return _e6.forEach(function (t) {
          ("separator" !== t.type || _o8.length > 0 && "separator" !== _o8[_o8.length - 1].type) && _o8.push(t);
        }), _o8;
      }

      return t;
    }

    var X = o(95586),
        J = o(12811),
        Q = o(501),
        tt = o(23851),
        et = o(57740);

    function ot(t) {
      var e = t.property,
          n = t.propertyApplier,
          s = t.title,
          a = t.undoText,
          l = t.isToolbarFixed,
          c = t.className,
          d = (0, W.useProperty)(e),
          h = (0, i.useMemo)(function () {
        return [new Z.Action({
          actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToSolid",
          icon: Q,
          label: r.t(null, void 0, o(1277)),
          active: X.LineStyle.Solid === d,
          onExecute: function onExecute() {
            return n.setProperty(e, X.LineStyle.Solid, a);
          }
        }), new Z.Action({
          actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToDashed",
          icon: tt,
          label: r.t(null, void 0, o(59317)),
          active: X.LineStyle.Dashed === d,
          onExecute: function onExecute() {
            return n.setProperty(e, X.LineStyle.Dashed, a);
          }
        }), new Z.Action({
          actionId: "Chart.LineTool.Toolbar.ChangeLineStyleToDotted",
          icon: et,
          label: r.t(null, void 0, o(42973)),
          active: X.LineStyle.Dotted === d,
          onExecute: function onExecute() {
            return n.setProperty(e, X.LineStyle.Dotted, a);
          }
        })];
      }, [n, e, d]);
      return i.createElement(V.ToolWidgetMenu, {
        className: c,
        arrow: !1,
        content: i.createElement(R.Icon, {
          icon: it(d)
        }),
        title: s,
        "data-name": t["data-name"],
        menuDataName: "".concat(t["data-name"], "-menu"),
        verticalDropDirection: l ? J.VerticalDropDirection.FromBottomToTop : void 0,
        horizontalDropDirection: l ? J.HorizontalDropDirection.FromRightToLeft : void 0,
        horizontalAttachEdge: l ? J.HorizontalAttachEdge.Right : void 0,
        verticalAttachEdge: l ? J.VerticalAttachEdge.Top : void 0
      }, i.createElement(z.ActionsTable, {
        items: h
      }));
    }

    function it(t) {
      switch (t) {
        case X.LineStyle.Solid:
          return Q;

        case X.LineStyle.Dashed:
          return tt;

        case X.LineStyle.Dotted:
          return et;

        default:
          return "";
      }
    }

    var nt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];

    function rt(t) {
      var e = t.property,
          o = t.propertyApplier,
          n = t.title,
          r = t.undoText,
          s = t.isToolbarFixed,
          a = t.className,
          l = (0, W.useProperty)(e),
          c = nt.map(function (t) {
        return new Z.Action({
          actionId: "Chart.LineTool.Toolbar.ChangeFontSizeProperty",
          label: t.toString(),
          onExecute: function onExecute() {
            return o.setProperty(e, t, r);
          },
          active: t === l
        });
      });
      return i.createElement(V.ToolWidgetMenu, {
        arrow: !1,
        content: l,
        className: a,
        title: n,
        verticalDropDirection: s ? J.VerticalDropDirection.FromBottomToTop : void 0,
        horizontalDropDirection: s ? J.HorizontalDropDirection.FromRightToLeft : void 0,
        horizontalAttachEdge: s ? J.HorizontalAttachEdge.Right : void 0,
        verticalAttachEdge: s ? J.VerticalAttachEdge.Top : void 0,
        "data-name": t["data-name"],
        menuDataName: "".concat(t["data-name"], "-menu")
      }, i.createElement(z.ActionsTable, {
        items: c
      }));
    }

    var st = o(57898);
    o(51338), o(26006);

    var at =
    /*#__PURE__*/
    function (_b$FloatingToolbar) {
      _inherits(at, _b$FloatingToolbar);

      function at(t) {
        var _this23;

        _classCallCheck(this, at);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(at).call(this, at._prepareOptions(t))), _this23._onWidgetStateChangedDelegate = new st.Delegate(), _this23._statedWidgets = [], _this23._currentPopup = null, _this23._onWindowClickedListener = _this23._onWindowClicked.bind(_assertThisInitialized(_this23));
        return _this23;
      }

      _createClass(at, [{
        key: "show",
        value: function show() {
          _get(_getPrototypeOf(at.prototype), "show", this).call(this), document.addEventListener("mousedown", this._onWindowClickedListener);
        }
      }, {
        key: "hide",
        value: function hide(t) {
          _get(_getPrototypeOf(at.prototype), "hide", this).call(this, t), document.removeEventListener("mousedown", this._onWindowClickedListener);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._closePopup(), _get(_getPrototypeOf(at.prototype), "destroy", this).call(this);
        }
      }, {
        key: "addGroupedWidget",
        value: function addGroupedWidget(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          (0, u.assert)(t.states.length > 0 && -1 !== at._getStateIndexById(t, t.currentStateId), "Argument is invalid (count: ".concat(t.states.length, ", state: ").concat(t.currentStateId, ")"));
          var o = document.createElement("div");
          o.className = "tv-grouped-floating-toolbar__widget-wrapper apply-common-tooltip", t.widgetAddClass && o.classList.add(t.widgetAddClass), o.setAttribute("title", t.tooltip);

          var i = {
            isEnabled: !0,
            statedWidget: t,
            toolbarWidget: o
          },
              n = this._onWidgetClicked.bind(this, i);

          i.clickListener = n, o.addEventListener("click", n), this._updateWidgetPreview(i), this.addWidget(o, e), this._statedWidgets.push(i);
        }
      }, {
        key: "findGroupedWidget",
        value: function findGroupedWidget(t) {
          var e = this._statedWidgets.length;

          for (var _o9 = 0; _o9 < e; ++_o9) {
            if (this._statedWidgets[_o9].statedWidget.id === t) return _o9;
          }

          return -1;
        }
      }, {
        key: "removeGroupedWidget",
        value: function removeGroupedWidget(t) {
          var e = this._statedWidgets.length;

          for (var _o10 = 0; _o10 < e; ++_o10) {
            var _e7 = this._statedWidgets[_o10];
            if (_e7.statedWidget.id === t) return this._isPopupCreatedForWidget(t) && this._closePopup(), void 0 !== _e7.clickListener && _e7.toolbarWidget.removeEventListener("click", _e7.clickListener), this.removeWidget(_e7.toolbarWidget), this._statedWidgets.splice(_o10, 1), void this._updatePopupPosition();
          }

          (0, u.assert)(!1, "Unknown groupId(".concat(t, ")"));
        }
      }, {
        key: "updateGroupedWidget",
        value: function updateGroupedWidget(t, e) {
          this._closePopup();

          var o = this._ensuredGetWidgetDataForId(t);

          o.statedWidget.currentStateId = e.currentStateId, o.statedWidget.states = e.states, this._updateWidgetPreview(o);
        }
      }, {
        key: "setGroupedWidgetEnabled",
        value: function setGroupedWidgetEnabled(t, e) {
          var o = this._ensuredGetWidgetDataForId(t);

          o.isEnabled = e, o.toolbarWidget.classList.toggle("i-disabled", !e);
        }
      }, {
        key: "setGroupedWidgetState",
        value: function setGroupedWidgetState(t, e) {
          var o = this._ensuredGetWidgetDataForId(t);

          (0, u.assert)(-1 !== at._getStateIndexById(o.statedWidget, e), "Unknown stateId (".concat(e, ")")), o.statedWidget.currentStateId = e, this._updateSubWidgetsState(o.statedWidget), this._updateWidgetPreview(o);
        }
      }, {
        key: "onWidgetStateChanged",
        value: function onWidgetStateChanged() {
          return this._onWidgetStateChangedDelegate;
        }
      }, {
        key: "_onVerticalChanged",
        value: function _onVerticalChanged(t, e) {
          this._updatePopupPosition();
        }
      }, {
        key: "_ensuredGetWidgetDataForId",
        value: function _ensuredGetWidgetDataForId(t) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._statedWidgets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e8 = _step2.value;
              if (_e8.statedWidget.id === t) return _e8;
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

          throw new Error("Unknown groupId(".concat(t, ")"));
        }
      }, {
        key: "_onWidgetClicked",
        value: function _onWidgetClicked(t, e) {
          var o = this._currentPopup && this._isPopupCreatedForWidget(t.statedWidget.id);

          this._closePopup(), !o && t.isEnabled && this._createPopup(t);
        }
      }, {
        key: "_createPopup",
        value: function _createPopup(t) {
          var _this24 = this;

          var e = {
            createdFor: t.toolbarWidget,
            element: document.createElement("div"),
            stateWidgetId: t.statedWidget.id,
            widgets: []
          };
          e.element.className += "tv-grouped-floating-toolbar__popup js-popup";
          var o = t.statedWidget.states.length;
          t.statedWidget.states.forEach(function (i, n) {
            var r = _this24._createSubWidget(t, i),
                s = _this24._onSubWidgetClicked.bind(_this24, t, i.id);

            r.addEventListener("click", s), e.widgets.push({
              clickListener: s,
              stateWidget: i,
              widget: r
            }), r.classList.add("tv-grouped-floating-toolbar__sub-widget--slide-right-".concat(n)), r.classList.add("tv-grouped-floating-toolbar__sub-widget--slide-left-" + (o - n + 1)), i.readonly || e.element.appendChild(r);
          }), this._currentPopup = e, this._updateSubWidgetsState(t.statedWidget), t.toolbarWidget.classList.add("i-dropped"), this._getWidget().appendChild(this._currentPopup.element), Promise.resolve().then(function () {
            _this24._currentPopup && _this24._currentPopup.element.classList.add("i-opened");
          }), this._updatePopupPosition();
        }
      }, {
        key: "_closePopup",
        value: function _closePopup() {
          var _this25 = this;

          if (this._statedWidgets.forEach(function (t) {
            t.toolbarWidget.classList.remove("i-dropped");
          }), !this._currentPopup) return;
          var t = this._currentPopup.widgets,
              e = this._currentPopup.element;
          this._currentPopup = null, t.forEach(function (t) {
            t.widget.removeEventListener("click", t.clickListener);
          }), e.classList.remove("i-opened"), e.addEventListener("transitionend", function (t) {
            t.target === e && _this25._getWidget().removeChild(e);
          });
        }
      }, {
        key: "_updateWidgetPreview",
        value: function _updateWidgetPreview(t) {
          var e = at._getStateIndexById(t.statedWidget, t.statedWidget.currentStateId);

          (0, u.assert)(-1 !== e, "Unknown state id: ".concat(t.statedWidget.currentStateId));
          var o = t.statedWidget.states[e].widget.cloneNode(!0);
          t.toolbarWidget.firstChild ? t.toolbarWidget.replaceChild(o, t.toolbarWidget.firstChild) : (t.toolbarWidget.appendChild(o), t.toolbarWidget.appendChild(at._createCaret()));
        }
      }, {
        key: "_updateSubWidgetsState",
        value: function _updateSubWidgetsState(t) {
          this._currentPopup && this._isPopupCreatedForWidget(t.id) && this._currentPopup.widgets.forEach(function (e) {
            e.widget.classList.toggle(at._activeSubWidgetClass, e.stateWidget.id === t.currentStateId);
          });
        }
      }, {
        key: "_updatePopupPosition",
        value: function _updatePopupPosition() {
          if (!this._currentPopup) return;

          var t = this._currentPopup.createdFor,
              e = this._getWidget().getBoundingClientRect(),
              o = this._findWrapperForWidget(t);

          if (!o || !this._currentPopup) throw new Error("Toolbar has no wrapper for preview's widget or there is no popup");

          var i = o.getBoundingClientRect(),
              n = this._currentPopup.element.getBoundingClientRect(),
              r = this._currentPopup.element;

          if (this.isVertical()) r.classList.remove("tv-grouped-floating-toolbar__popup--at-top"), r.style.top = i.top - e.top + 1 + "px", r.style.left = "", e.left > window.innerWidth - e.right ? r.classList.add("tv-grouped-floating-toolbar__popup--at-left") : r.classList.remove("tv-grouped-floating-toolbar__popup--at-left");else {
            r.classList.remove("tv-grouped-floating-toolbar__popup--at-left");
            var _t11 = 0;
            i.left + n.width > window.innerWidth ? e.left + n.width > window.innerWidth && (_t11 = e.width - n.width) : _t11 = i.left - e.left + 1, r.style.left = "".concat(_t11, "px"), e.bottom + n.height > window.innerHeight ? r.classList.add("tv-grouped-floating-toolbar__popup--at-top") : (r.classList.remove("tv-grouped-floating-toolbar__popup--at-top"), r.style.top = "");
          }
        }
      }, {
        key: "_isPopupCreatedForWidget",
        value: function _isPopupCreatedForWidget(t) {
          return Boolean(this._currentPopup && this._currentPopup.stateWidgetId === t);
        }
      }, {
        key: "_createSubWidget",
        value: function _createSubWidget(t, e) {
          var o = document.createElement("div");
          return o.className += "tv-grouped-floating-toolbar__sub-widget", t.statedWidget.stateWidgetAddClass && o.classList.add(t.statedWidget.stateWidgetAddClass), o.appendChild(e.widget), o;
        }
      }, {
        key: "_onSubWidgetClicked",
        value: function _onSubWidgetClicked(t, e) {
          this._closePopup(), t.statedWidget.currentStateId !== e && (this.setGroupedWidgetState(t.statedWidget.id, e), this._onWidgetStateChangedDelegate.fire(t.statedWidget.id, e));
        }
      }, {
        key: "_onWindowClicked",
        value: function _onWindowClicked(t) {
          if (this.isVisible() && this._currentPopup && !at._isEventInElement(t, this._currentPopup.element)) {
            for (var _e9 = 0; _e9 < this._statedWidgets.length; ++_e9) {
              if (at._isEventInElement(t, this._statedWidgets[_e9].toolbarWidget)) return;
            }

            this._closePopup();
          }
        }
      }], [{
        key: "_getStateIndexById",
        value: function _getStateIndexById(t, e) {
          for (var _o11 = 0; _o11 < t.states.length; ++_o11) {
            if (t.states[_o11].id === e) return _o11;
          }

          return -1;
        }
      }, {
        key: "_createCaret",
        value: function _createCaret() {
          var t = document.createElement("div");
          return t.className = "tv-caret tv-caret--small tv-caret--colored tv-grouped-floating-toolbar__caret", t;
        }
      }, {
        key: "_prepareOptions",
        value: function _prepareOptions(t) {
          var e = " tv-grouped-floating-toolbar";
          return t.addClass ? t.addClass += e : t.addClass = e, t;
        }
      }, {
        key: "_isEventInElement",
        value: function _isEventInElement(t, e) {
          return t.target === e || e.contains(t.target);
        }
      }]);

      return at;
    }(b.FloatingToolbar);

    at._activeSubWidgetClass = "tv-grouped-floating-toolbar__sub-widget--current";
    var lt = o(69774),
        ct = o(92249),
        dt = o(15367),
        ht = o(3587),
        ut = o(87919);

    var pt = !1,
        gt = new s.TranslatedString("change line tool(s) font size", r.t(null, void 0, o(36819))),
        mt = new s.TranslatedString("change line tool(s) line style", r.t(null, void 0, o(54769))),
        _t = (new s.TranslatedString("apply drawing template", r.t(null, void 0, o(49037))), r.t(null, void 0, o(89517))),
        vt = r.t(null, void 0, o(34596)),
        ft = r.t(null, void 0, o(41610)),
        yt = r.t(null, void 0, o(32733)),
        bt = r.t(null, void 0, o(17006));

    var wt =
    /*#__PURE__*/
    function () {
      function wt(t) {
        var _this26 = this;

        _classCallCheck(this, wt);

        this._isDrawingFinished = new l.WatchedValue(!0), this._currentTool = null, this._updateVisibilityTimeout = null, this._lineWidthsProperty = null, this._lineColorsProperty = null, this._currentProperties = null, this._floatingContainer = null, this._fixedContainer = null, this._fixedToolbarRendered = !1, this._floatingToolbarRendered = !1, this._toolbarVisible = !1, this._propertiesVisible = !1, this._templatesButton = null, this._propertyButtons = [], this._commonButtons = [], this._handleSourceEdit = function (t) {
          d.isDirectionalMovementActive.value() || (t ? (_this26._fixedContainer && (_this26._fixedContainer.style.display = "none"), _this26._floatingToolbar.hide(!0)) : (_this26._fixedToolbarRendered && _this26._fixedContainer && (_this26._fixedContainer.style.display = "block"), _this26._floatingToolbarRendered && _this26._floatingToolbar.show()));
        }, this._handleMediaChange = function () {
          _this26._updateVisibility();
        }, this._chartWidgetCollection = t, this._floatingToolbar = new at({
          defaultPosition: {
            top: lt.HEADER_TOOLBAR_HEIGHT_EXPANDED + 15,
            left: window.innerWidth / 2
          },
          positionSettingsKey: "properties_toolbar.position",
          positionStorageType: "device",
          layout: "horizontal",
          "data-name": "drawing-toolbar"
        }), this._floatingContainer = this._floatingToolbar.getReactWidgetContainer(), this._isToolMovingNowSpawn = d.isToolMovingNow.spawn(), this._isToolEditingNowSpawn = d.isToolEditingNow.spawn(), this._toolSpawn = d.tool.spawn(), this._iconToolSpawn = d.iconTool.spawn(), this._emojiToolSpawn = d.emojiTool.spawn(), this._selectedSourcesSpawn = this._chartWidgetCollection.selectedSources.spawn(), this._isToolMovingNowSpawn.subscribe(this._handleSourceEdit), this._isToolEditingNowSpawn.subscribe(this._handleSourceEdit), this._toolSpawn.subscribe(this._onToolChanged.bind(this), {
          callWithLast: !0
        }), this._iconToolSpawn.subscribe(function () {
          return _this26._onToolChanged(d.tool.value());
        }), this._emojiToolSpawn.subscribe(function () {
          return _this26._onToolChanged(d.tool.value());
        }), this._selectedSourcesSpawn.subscribe(function () {
          return _this26.onSourceChanged(_this26.selectedSources());
        }), this._chartWidgetCollection.onAboutToBeDestroyed.subscribe(this, this.destroy, !0);
      }

      _createClass(wt, [{
        key: "destroy",
        value: function destroy() {
          this._isToolMovingNowSpawn.destroy(), this._isToolEditingNowSpawn.destroy(), this._toolSpawn.destroy(), this._iconToolSpawn.destroy(), this._emojiToolSpawn.destroy(), this._selectedSourcesSpawn.destroy();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.onSourceChanged(this.selectedSources());
        }
      }, {
        key: "onSourceChanged",
        value: function onSourceChanged(t) {
          if (!(null == t ? void 0 : t.length)) return this._propertiesVisible = !1, this._toolbarVisible = !1, void this.hide();

          if (this._createCommonButtons(), t.every(function (e) {
            return e.toolname === t[0].toolname;
          }) ? this._showTemplatesOf({
            sources: t
          }) : this._templatesButton && this._clearTemplatesButton(), 1 === t.length) {
            var _e10 = t[0];
            _e10.isAvailableInFloatingWidget() && this.activeChartWidget().model().model().dataSourceForId(_e10.id()) ? (!_e10.userEditEnabled() || !(0, dt.isLineDrawnWithPressedButton)(_e10.toolname) && this.activeChartWidget().model().lineBeingCreated() || this._isDrawingFinished.setValue(!0), this.showPropertiesOf(_e10.toolname, _e10.properties(), !0), this._toolbarVisible = !0) : this.hide();
          } else this._clearProperties(), this._createWidthsButton(void 0, !0), this._createColorsButton(void 0, !0), this._createBackgroundsButton(void 0, !0), this._createTextColorsButton(void 0, !0), this._propertiesVisible = !0;

          this._updateVisibility();
        }
      }, {
        key: "activeChartWidget",
        value: function activeChartWidget() {
          return this._chartWidgetCollection.activeChartWidget.value();
        }
      }, {
        key: "selectedSources",
        value: function selectedSources() {
          return this._chartWidgetCollection.selectedSources.value().filter(ct.isLineTool);
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this27 = this;

          this._updateVisibilityTimeout && clearTimeout(this._updateVisibilityTimeout), this._updateVisibilityTimeout = setTimeout(function () {
            (0, ct.unsetNewToolProperties)(), Ct() && _this27._fixedContainer ? _this27._fixedContainer.style.display = "none" : _this27._floatingToolbar.hide(!0), _this27._isToolbarRendered() && _this27._unmountToolbar(), _this27._clearProperties(), _this27._clearCommonButtons();
          }, 0), delete this._propertyApplier;
        }
      }, {
        key: "templatesList",
        value: function templatesList() {
          return this._templatesList;
        }
      }, {
        key: "_onToolChanged",
        value: function _onToolChanged(t, e) {
          this._currentTool = t;
          var o = this.selectedSources();
          this._isDrawingToolExcludingCustomUrlEventTool(t) ? (this._isDrawingFinished.setValue(!1), this._updateVisibility()) : o && o.length ? (o.length > 1 && this._isDrawingFinished.setValue(!0), this.onSourceChanged(this.selectedSources())) : this.hide();
        }
      }, {
        key: "_propertyApplierImpl",
        value: function _propertyApplierImpl() {
          var _this28 = this;

          return this._propertyApplier || (this._propertyApplier = new ut.PropertyApplierWithoutSavingChart(function () {
            return _this28.activeChartWidget().model();
          }, new l.WatchedValue(false))), this._propertyApplier;
        }
      }, {
        key: "_clearProperties",
        value: function _clearProperties() {
          this._clearPropertyButtons(), this._lineWidthsProperty && (this._lineWidthsProperty.destroy(), this._lineWidthsProperty = null), this._lineColorsProperty && (this._lineColorsProperty.destroy(), this._lineColorsProperty = null), this._currentProperties && (this._currentProperties = null);
        }
      }, {
        key: "_show",
        value: function _show() {
          var _this29 = this;

          this._updateVisibilityTimeout && clearTimeout(this._updateVisibilityTimeout), this._updateVisibilityTimeout = setTimeout(function () {
            _this29._renderToolbar(), Ct() && _this29._fixedContainer ? _this29._fixedContainer.style.display = "block" : (_this29._floatingToolbar.show(), _this29._floatingToolbar.checkPosition());
          }, 0);
        }
      }, {
        key: "_addPropertyButton",
        value: function _addPropertyButton(t) {
          this._propertyButtons.push(t), this._renderToolbar();
        }
      }, {
        key: "_addCommonButton",
        value: function _addCommonButton(t) {
          this._commonButtons.push(t), this._renderToolbar();
        }
      }, {
        key: "_addTemplatesButton",
        value: function _addTemplatesButton(t) {
          this._templatesButton = t;
        }
      }, {
        key: "_renderFloatingToolbar",
        value: function _renderFloatingToolbar() {
          null !== this._floatingContainer && this.activeChartWidget() && this.activeChartWidget().hasModel() && (n.render(i.createElement(T, {
            templateButton: this._templatesButton,
            propertyButtons: this._propertyButtons,
            commonButtons: this._commonButtons,
            isDrawingFinished: this._isDrawingFinished.value(),
            activeChartWidget: this.activeChartWidget()
          }), this._floatingContainer), this._floatingToolbarRendered = !0);
        }
      }, {
        key: "_unmountFloatingToolbar",
        value: function _unmountFloatingToolbar() {
          null !== this._floatingContainer && (n.unmountComponentAtNode(this._floatingContainer), this._floatingToolbarRendered = !1);
        }
      }, {
        key: "_clearTemplatesButton",
        value: function _clearTemplatesButton() {
          this._templatesButton = null;
        }
      }, {
        key: "_clearPropertyButtons",
        value: function _clearPropertyButtons() {
          this._propertyButtons = [];
        }
      }, {
        key: "_clearCommonButtons",
        value: function _clearCommonButtons() {
          this._commonButtons = [];
        }
      }, {
        key: "_isToolbarRendered",
        value: function _isToolbarRendered() {
          return this._floatingToolbarRendered || this._fixedToolbarRendered;
        }
      }, {
        key: "_createSettingsButton",
        value: function _createSettingsButton() {
          var t = {
            component: E,
            props: {
              title: _t,
              activeChartWidget: this.activeChartWidget()
            }
          };

          this._addCommonButton(t);
        }
      }, {
        key: "_createLockButton",
        value: function _createLockButton() {
          var t = {
            component: I,
            props: {
              title: "Lock",
              activeChartWidget: this.activeChartWidget()
            }
          };

          this._addCommonButton(t);
        }
      }, {
        key: "_createRemoveButton",
        value: function _createRemoveButton() {
          var t = {
            component: M,
            props: {
              title: vt,
              activeChartWidget: this.activeChartWidget()
            },
            showForSmallScreen: !0
          };

          this._addCommonButton(t);
        }
      }, {
        key: "_createDotsButton",
        value: function _createDotsButton() {
          this._addCommonButton({
            component: Y,
            props: {
              title: ft,
              activeChartWidget: this.activeChartWidget()
            },
            showForSmallScreen: !0
          });
        }
      }, {
        key: "_createAlertButton",
        value: function _createAlertButton() {}
      }, {
        key: "_createSourceActions",
        value: function _createSourceActions() {
          this._createLockButton();
        }
      }, {
        key: "_createLineStyleButton",
        value: function _createLineStyleButton(t) {
          var e = this.selectedSources();
          if (0 === e.length) return !1;
          var o = e[0];
          if (!(0, ht.isDataSource)(o)) return !1;
          var i = {
            component: ot,
            props: {
              property: o.properties().linestyle || t,
              title: yt,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "style",
              undoText: mt
            }
          };
          return this._addPropertyButton(i), !0;
        }
      }, {
        key: "_createFontSizeButton",
        value: function _createFontSizeButton(t) {
          var e = this.selectedSources();
          if (0 === e.length) return !1;
          var o = e[0];
          if (!(0, ht.isDataSource)(o)) return !1;
          var i = {
            component: rt,
            props: {
              property: o.properties().fontsize || t,
              title: bt,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "font-size",
              undoText: gt
            }
          };
          return this._addPropertyButton(i), !0;
        }
      }, {
        key: "_createCommonButtons",
        value: function _createCommonButtons() {
          this._commonButtons.length && this._clearCommonButtons(), a.enabled("property_pages") && this._createSettingsButton(), this._createSourceActions(), this._createRemoveButton(), this._createDotsButton();
        }
      }, {
        key: "_prepareProperties",
        value: function _prepareProperties(t) {
          var e = this.selectedSources().filter(function (e) {
            return e.properties()[t];
          });
          if (!(e.filter(function (e) {
            return e.properties()[t].visible();
          }).length < 1)) return e.map(function (e) {
            return e.properties()[t];
          }).filter(c.notNull);
        }
      }, {
        key: "_createProperty",
        value: function _createProperty(t, e, o, i) {
          if (e) {
            var _t12 = this._prepareProperties(o);

            if (!_t12) return;
            return this._isWidthProperty(_t12[0]) ? new m(new h.MultipleLineWidthsProperty(_t12), this._propertyApplierImpl(), i) : new _.CollectibleColorPropertyUndoWrapper(new h.MultipleLineColorsProperty(_t12), this._propertyApplierImpl(), i);
          }

          if (t && t.visible()) return this._isWidthProperty(t) ? new h.MultipleLineWidthsProperty([t]) : new _.CollectibleColorPropertyDirectWrapper(new h.MultipleLineColorsProperty([t]));
        }
      }, {
        key: "_shouldShowBackgroundProperty",
        value: function _shouldShowBackgroundProperty(t, e) {
          return !e || !e.fillBackground || !!e.fillBackground.value();
        }
      }, {
        key: "_isDrawingToolExcludingCustomUrlEventTool",
        value: function _isDrawingToolExcludingCustomUrlEventTool(t) {
          return Boolean(null == t ? void 0 : t.toLowerCase().includes("linetool")) && "LineToolTweet" !== t && "LineToolIdea" !== t && "LineToolImage" !== t;
        }
      }, {
        key: "_updateVisibility",
        value: function _updateVisibility() {
          this._isDrawingFinished.value() && (this._toolbarVisible || this._propertiesVisible) ? this._show() : this.hide();
        }
      }, {
        key: "_showTemplatesOf",
        value: function _showTemplatesOf(t) {}
      }, {
        key: "_isWidthProperty",
        value: function _isWidthProperty(t) {
          return t instanceof h.LineToolWidthsProperty;
        }
      }, {
        key: "_renderFixedToolbar",
        value: function _renderFixedToolbar() {
          null !== this._fixedContainer && this.activeChartWidget() && this.activeChartWidget().hasModel() && (n.render(i.createElement(FixedDrawingToolbar, {
            templateButton: this._templatesButton,
            propertyButtons: this._propertyButtons,
            commonButtons: this._commonButtons,
            isDrawingFinished: this._isDrawingFinished.value(),
            activeChartWidget: this.activeChartWidget()
          }), this._fixedContainer), this._fixedToolbarRendered = !0);
        }
      }, {
        key: "_renderToolbar",
        value: function _renderToolbar() {
          this._renderFloatingToolbar();
        }
      }, {
        key: "_unmountFixedToolbar",
        value: function _unmountFixedToolbar() {
          null !== this._fixedContainer && (n.unmountComponentAtNode(this._fixedContainer), this._fixedToolbarRendered = !1);
        }
      }, {
        key: "_unmountToolbar",
        value: function _unmountToolbar() {
          this._floatingToolbarRendered && this._unmountFloatingToolbar(), this._fixedToolbarRendered && this._unmountFixedToolbar();
        }
      }]);

      return wt;
    }();

    function Ct() {
      return pt;
    }
  },
  26916: function _(t, e, o) {
    "use strict";

    var i = o(36298).TranslatedString,
        n = o(89824).LineToolPropertiesWidgetBase;
    var r = o(70114).ColorPickerButton,
        s = o(61259).LineWidthButton;

    var a = o(94071),
        l = o(21065),
        c = o(48984),
        d = new i("change line tool(s) color", o(44352).t(null, void 0, o(68519))),
        h = new i("change line tool(s) background color", o(44352).t(null, void 0, o(74350))),
        u = new i("change line tool(s) text color", o(44352).t(null, void 0, o(16631))),
        p = new i("change line tool(s) line width", o(44352).t(null, void 0, o(41648))),
        g = o(44352).t(null, void 0, o(40054)),
        m = o(44352).t(null, void 0, o(12928)),
        _ = o(44352).t(null, void 0, o(19221)),
        v = o(44352).t(null, void 0, o(21327)),
        f = o(44352).t(null, void 0, o(38455)),
        y = o(44352).t(null, void 0, o(71845)),
        b = o(44352).t(null, void 0, o(32733)),
        w = o(44352).t(null, void 0, o(23886)),
        C = o(44352).t(null, void 0, o(86327)),
        T = o(44352).t(null, void 0, o(47059)),
        x = o(44352).t(null, void 0, o(36785)),
        S = o(44352).t(null, void 0, o(49593)),
        P = o(44352).t(null, void 0, o(67455)),
        E = o(44352).t(null, void 0, o(79964)),
        W = o(44352).t(null, void 0, o(45320));

    var L =
    /*#__PURE__*/
    function (_n2) {
      _inherits(L, _n2);

      function L(t) {
        var _this30;

        _classCallCheck(this, L);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, t)), _this30._templatesButton = null;
        return _this30;
      }

      _createClass(L, [{
        key: "_createWidthsButton",
        value: function _createWidthsButton(t, e) {
          if (this._lineWidthsProperty && (this._lineWidthsProperty.destroy(), this._lineWidthsProperty = null), this._lineWidthsProperty = this._createProperty(t, e, "linesWidths", p), !this._lineWidthsProperty) return !0;
          var o = C;
          e && 1 !== this.selectedSources().filter(function (t) {
            return t.properties().linesWidths;
          }).length && (o = T);
          return this._addPropertyButton({
            component: s,
            props: {
              title: o,
              multipleProperty: this._lineWidthsProperty,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "line-tool-width",
              undoText: p
            }
          }), !0;
        }
      }, {
        key: "_createColorsButton",
        value: function _createColorsButton(t, e) {
          return this._lineColorsProperty && (this._lineColorsProperty.destroy(), this._lineColorsProperty = null), this._lineColorsProperty = this._createProperty(t, e, "linesColors", d), !this._lineColorsProperty || (this._addPropertyButton({
            component: r,
            props: {
              icon: a,
              title: m,
              property: this._lineColorsProperty,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "line-tool-color",
              undoText: d
            }
          }), !0);
        }
      }, {
        key: "_createBackgroundsButton",
        value: function _createBackgroundsButton(t, e) {
          return this._backgroundsProperty && (this._backgroundsProperty.destroy(), this._backgroundsProperty = null), this._backgroundsProperty = this._createProperty(t, e, "backgroundsColors", h), !this._backgroundsProperty || (this._addPropertyButton({
            component: r,
            props: {
              icon: l,
              title: y,
              property: this._backgroundsProperty,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "background-color",
              undoText: h
            }
          }), !0);
        }
      }, {
        key: "_createTextColorsButton",
        value: function _createTextColorsButton(t, e) {
          return this._textColorsProperty && (this._textColorsProperty.destroy(), this._textColorsProperty = null), this._textColorsProperty = this._createProperty(t, e, "textsColors", u), !this._textColorsProperty || (this._addPropertyButton({
            component: r,
            props: {
              icon: c,
              title: v,
              property: this._textColorsProperty,
              propertyApplier: this._propertyApplierImpl(),
              "data-name": "text-color",
              undoText: u
            }
          }), !0);
        }
      }, {
        key: "_getPossibleProperty",
        value: function _getPossibleProperty(t) {
          for (var e = [], o = this._defaultToolProperties(), i = 0; i < o.length; i++) {
            var n = o[i];
            n.name in t && e.push(n);
          }

          return e;
        }
      }, {
        key: "showPropertiesOf",
        value: function showPropertiesOf(t, e, o) {
          this._toolExceptionCases || (this._toolExceptionCases = this._createToolExceptionCases());

          var i = this._toolExceptionCases[t] || this._getPossibleProperty(e);

          if (this._clearProperties(), this._propertiesVisible = !1, i.length) {
            for (var n = {}, s = 0; s < i.length; s++) {
              for (var a = i[s], l = e, c = a.name.split("."), d = 0; d < c.length; ++d) {
                l = l && l[c[d]];
              }

              var h = a.showIf;

              if ("function" != typeof h || h(l, e)) {
                var u = a.factory;
                if (u && u.call(this, l, o)) continue;
                if (!l) continue;

                if (this._propertiesVisible = !0, "combobox" !== a.inputType) {
                  var _t13 = {
                    component: r,
                    props: {
                      icon: a.iconSvgCode,
                      title: a.title,
                      "data-name": a.dataName,
                      property: l,
                      propertyApplier: this._propertyApplierImpl(),
                      undoText: a.undoText
                    }
                  };

                  this._addPropertyButton(_t13);

                  continue;
                }

                n[a.name] = l;
              }
            }

            this._currentProperties = n;
          }
        }
      }, {
        key: "_defaultToolProperties",
        value: function _defaultToolProperties() {
          return [{
            name: "linesColors",
            inputType: "colorPicker",
            iconSvgCode: a,
            title: g,
            factory: L.prototype._createColorsButton,
            dataName: "line-tool-color"
          }, {
            name: "backgroundsColors",
            inputType: "colorPicker",
            iconSvgCode: l,
            title: f,
            factory: L.prototype._createBackgroundsButton,
            dataName: "background-color",
            showIf: this._shouldShowBackgroundProperty
          }, {
            name: "textsColors",
            title: _,
            inputType: "colorPicker",
            iconSvgCode: c,
            factory: L.prototype._createTextColorsButton,
            dataName: "text-color"
          }, {
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }, {
            name: "linestyle",
            title: b,
            inputType: "combobox",
            factory: L.prototype._createLineStyleButton
          }];
        }
      }, {
        key: "_regressionToolExceptionCases",
        value: function _regressionToolExceptionCases() {
          return [{
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }];
        }
      }, {
        key: "_pathExceptionCases",
        value: function _pathExceptionCases() {
          return [{
            name: "linesColors",
            inputType: "colorPicker",
            iconSvgCode: a,
            title: g,
            factory: L.prototype._createColorsButton,
            dataName: "line-tool-color"
          }, {
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }, {
            name: "lineStyle",
            title: b,
            inputType: "combobox",
            factory: L.prototype._createLineStyleButton
          }];
        }
      }, {
        key: "_riskPropertiesExceptionCases",
        value: function _riskPropertiesExceptionCases() {
          return [{
            name: "textcolor",
            title: _,
            inputType: "colorPicker",
            iconSvgCode: c,
            dataName: "text-color",
            undoText: u
          }, {
            name: "profitBackground",
            title: x,
            inputType: "colorPicker",
            iconSvgCode: l,
            dataName: "background-color",
            undoText: h
          }, {
            name: "stopBackground",
            title: S,
            inputType: "colorPicker",
            iconSvgCode: l,
            dataName: "background-color",
            undoText: h
          }];
        }
      }, {
        key: "_rangeExceptionCases",
        value: function _rangeExceptionCases() {
          return [{
            name: "linecolor",
            inputType: "colorPicker",
            iconSvgCode: a,
            title: g,
            dataName: "line-tool-color",
            undoText: d
          }, {
            name: "backgroundColor",
            inputType: "colorPicker",
            iconSvgCode: l,
            title: f,
            dataName: "background-color",
            showIf: this._shouldShowBackgroundProperty,
            undoText: h
          }, {
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }];
        }
      }, {
        key: "_brushPropertiesExceptionCase",
        value: function _brushPropertiesExceptionCase() {
          return [{
            name: "linesColors",
            inputType: "colorPicker",
            iconSvgCode: a,
            title: g,
            factory: L.prototype._createColorsButton,
            dataName: "line-tool-color"
          }, {
            name: "backgroundsColors",
            inputType: "colorPicker",
            iconSvgCode: l,
            title: f,
            dataName: "background-color",
            factory: L.prototype._createBackgroundsButton
          }, {
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }];
        }
      }, {
        key: "_bezierPropertiesExceptionCases",
        value: function _bezierPropertiesExceptionCases() {
          return [{
            name: "linesColors",
            inputType: "colorPicker",
            iconSvgCode: a,
            title: g,
            factory: L.prototype._createColorsButton,
            dataName: "line-tool-color"
          }, {
            name: "backgroundsColors",
            inputType: "colorPicker",
            iconSvgCode: l,
            dataName: "background-color",
            title: f,
            factory: L.prototype._createBackgroundsButton,
            showIf: this._shouldShowBackgroundProperty
          }, {
            name: "linesWidths",
            inputType: "combobox",
            factory: L.prototype._createWidthsButton
          }, {
            name: "linestyle",
            title: b,
            inputType: "combobox",
            factory: L.prototype._createLineStyleButton
          }];
        }
      }, {
        key: "_textPropertiesExceptionCases",
        value: function _textPropertiesExceptionCases() {
          return [{
            name: "color",
            title: _,
            inputType: "colorPicker",
            iconSvgCode: c,
            dataName: "text-color",
            undoText: u
          }, {
            name: "backgroundColor",
            title: f,
            inputType: "colorPicker",
            iconSvgCode: l,
            dataName: "background-color",
            showIf: this._shouldShowBackgroundProperty,
            undoText: h
          }, {
            name: "fontsize",
            title: w,
            inputType: "combobox",
            factory: L.prototype._createFontSizeButton
          }];
        }
      }, {
        key: "_notePropertiesExceptionCases",
        value: function _notePropertiesExceptionCases() {
          return [{
            name: "markerColor",
            title: P,
            inputType: "colorPicker",
            iconSvgCode: a,
            dataName: "line-tool-color",
            undoText: d
          }, {
            name: "textColor",
            title: _,
            inputType: "colorPicker",
            iconSvgCode: c,
            dataName: "text-color",
            undoText: u
          }, {
            name: "fontSize",
            title: w,
            inputType: "combobox",
            factory: L.prototype._createFontSizeButton
          }];
        }
      }, {
        key: "_createToolExceptionCases",
        value: function _createToolExceptionCases() {
          return {
            LineToolBrush: L.prototype._brushPropertiesExceptionCase(),
            LineToolBezierQuadro: L.prototype._bezierPropertiesExceptionCases(),
            LineToolBezierCubic: L.prototype._bezierPropertiesExceptionCases(),
            LineToolText: L.prototype._textPropertiesExceptionCases(),
            LineToolTextAbsolute: L.prototype._textPropertiesExceptionCases(),
            LineToolBalloon: L.prototype._textPropertiesExceptionCases(),
            LineToolComment: L.prototype._textPropertiesExceptionCases(),
            LineToolCallout: L.prototype._textPropertiesExceptionCases(),
            LineToolPriceLabel: L.prototype._textPropertiesExceptionCases(),
            LineToolDateRange: L.prototype._rangeExceptionCases(),
            LineToolPriceRange: L.prototype._rangeExceptionCases(),
            LineToolDateAndPriceRange: L.prototype._rangeExceptionCases(),
            LineToolNote: L.prototype._notePropertiesExceptionCases(),
            LineToolNoteAbsolute: L.prototype._notePropertiesExceptionCases(),
            LineToolRiskRewardLong: L.prototype._riskPropertiesExceptionCases(),
            LineToolRiskRewardShort: L.prototype._riskPropertiesExceptionCases(),
            LineToolPath: L.prototype._pathExceptionCases(),
            LineToolRegressionTrend: L.prototype._regressionToolExceptionCases(),
            LineToolBarsPattern: [{
              name: "color",
              title: g,
              inputType: "colorPicker",
              iconSvgCode: l,
              dataName: "background-color",
              undoText: d
            }],
            LineToolProjection: [{
              name: "color1",
              title: E,
              inputType: "colorPicker",
              iconSvgCode: l,
              dataName: "background-color",
              undoText: h
            }, {
              name: "color2",
              title: W,
              inputType: "colorPicker",
              iconSvgCode: l,
              dataName: "background-color",
              undoText: h
            }, {
              name: "linesWidths",
              inputType: "combobox",
              factory: L.prototype._createWidthsButton
            }],
            LineToolSignpost: [{
              name: "linesColors",
              inputType: "colorPicker",
              iconSvgCode: l,
              dataName: "background-color",
              title: g,
              factory: L.prototype._createBackgroundsButton,
              showIf: function showIf(t, e) {
                return e && e.showImage.value();
              }
            }, {
              name: "fontSize",
              title: w,
              inputType: "combobox",
              factory: L.prototype._createFontSizeButton
            }]
          };
        }
      }]);

      return L;
    }(n);

    t.exports = L;
  },
  69152: function _(t, e, o) {
    "use strict";

    o.d(e, {
      CollectibleColorPropertyDirectWrapper: function CollectibleColorPropertyDirectWrapper() {
        return l;
      },
      CollectibleColorPropertyUndoWrapper: function CollectibleColorPropertyUndoWrapper() {
        return a;
      }
    });
    var i = o(50151),
        n = o(59452),
        r = o.n(n);

    var s =
    /*#__PURE__*/
    function (_r) {
      _inherits(s, _r);

      function s(t) {
        var _this31;

        _classCallCheck(this, s);

        _this31 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this31._listenersMappers = [], _this31._isProcess = !1, _this31._baseProperty = t;
        return _this31;
      }

      _createClass(s, [{
        key: "destroy",
        value: function destroy() {
          this._baseProperty.destroy(), _get(_getPrototypeOf(s.prototype), "destroy", this).call(this);
        }
      }, {
        key: "value",
        value: function value() {
          var t = this._baseProperty.value();

          return "mixed" === t ? "" : t;
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._baseProperty.visible();
        }
      }, {
        key: "setValue",
        value: function setValue(t) {
          var _this32 = this;

          this._isProcess = !0, this._baseProperty.setValue("" === t ? "mixed" : t, void 0, {
            applyValue: this._applyValue.bind(this)
          }), this._isProcess = !1, this._listenersMappers.forEach(function (t) {
            t.method.call(t.obj, _this32);
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(t, e) {
          var _this33 = this;

          var o = function o(_o12) {
            _this33._isProcess || e.call(t, _this33);
          },
              i = {
            obj: t,
            method: e,
            callback: o
          };

          this._listenersMappers.push(i), this._baseProperty.subscribe(t, o);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(t, e) {
          var o;
          var n = (0, i.ensureDefined)(null === (o = this._listenersMappers.find(function (o) {
            return o.obj === t && o.method === e;
          })) || void 0 === o ? void 0 : o.callback);

          this._baseProperty.unsubscribe(t, n);
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll(t) {
          this._baseProperty.unsubscribeAll(t);
        }
      }]);

      return s;
    }(r());

    var a =
    /*#__PURE__*/
    function (_s2) {
      _inherits(a, _s2);

      function a(t, e, o) {
        var _this34;

        _classCallCheck(this, a);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, t)), _this34._propertyApplier = e, _this34._undoText = o;
        return _this34;
      }

      _createClass(a, [{
        key: "_applyValue",
        value: function _applyValue(t, e) {
          this._propertyApplier.setProperty(t, e, this._undoText);
        }
      }]);

      return a;
    }(s);

    var l =
    /*#__PURE__*/
    function (_s3) {
      _inherits(l, _s3);

      function l() {
        _classCallCheck(this, l);

        return _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments));
      }

      _createClass(l, [{
        key: "_applyValue",
        value: function _applyValue(t, e) {
          t.setValue(e);
        }
      }]);

      return l;
    }(s);
  },
  87919: function _(t, e, o) {
    "use strict";

    o.d(e, {
      PropertyApplierWithoutSavingChart: function PropertyApplierWithoutSavingChart() {
        return i;
      }
    });

    var i =
    /*#__PURE__*/
    function () {
      function i(t, e) {
        _classCallCheck(this, i);

        this._undoModelSupplier = t, this._featureToggle = e;
      }

      _createClass(i, [{
        key: "setProperty",
        value: function setProperty(t, e, o) {
          this._undoModelSupplier().setProperty(t, e, o, this._featureToggle.value());
        }
      }, {
        key: "beginUndoMacro",
        value: function beginUndoMacro(t) {
          return this._undoModelSupplier().beginUndoMacro(t, this._shouldWeKeepChartValidated());
        }
      }, {
        key: "endUndoMacro",
        value: function endUndoMacro() {
          this._undoModelSupplier().endUndoMacro();
        }
      }, {
        key: "setWatchedValue",
        value: function setWatchedValue(t, e, o) {
          this._undoModelSupplier().undoHistory().setWatchedValue(t, e, o, !0);
        }
      }, {
        key: "_shouldWeKeepChartValidated",
        value: function _shouldWeKeepChartValidated() {
          var t = this._undoModelSupplier().model().isAutoSaveEnabled().value();

          return this._featureToggle.value() && t;
        }
      }]);

      return i;
    }();
  },
  44996: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>';
  },
  23851: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 13h5v1H4v-1zM12 13h5v1h-5v-1zM20 13h5v1h-5v-1z"/></svg>';
  },
  57740: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><circle cx="9" cy="14" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="14" r="1"/><circle cx="24" cy="14" r="1"/></svg>';
  },
  501: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4 13.5h20"/></svg>';
  },
  36296: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
  },
  21065: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none"><path stroke="currentColor" d="M13.5 6.5l-3-3-7 7 7.59 7.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82L13.5 6.5zm0 0v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"/><path fill="currentColor" d="M0 16.5C0 15 2.5 12 2.5 12S5 15 5 16.5 4 19 2.5 19 0 18 0 16.5z"/><circle fill="currentColor" cx="9.5" cy="9.5" r="1.5"/></svg>';
  },
  25388: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" width="8" height="12" fill="currentColor"><rect width="2" height="2" rx="1"/><rect width="2" height="2" rx="1" y="5"/><rect width="2" height="2" rx="1" y="10"/><rect width="2" height="2" rx="1" x="6"/><rect width="2" height="2" rx="1" x="6" y="5"/><rect width="2" height="2" rx="1" x="6" y="10"/></svg>';
  },
  22978: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 1" width="18" height="1"><rect width="18" height="1" fill="currentColor" rx=".5"/></svg>';
  },
  14631: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2" width="18" height="2"><rect width="18" height="2" fill="currentColor" rx="1"/></svg>';
  },
  6096: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 3" width="18" height="3"><rect width="18" height="3" fill="currentColor" rx="1.5"/></svg>';
  },
  6483: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 4" width="18" height="4"><rect width="18" height="4" fill="currentColor" rx="2"/></svg>';
  },
  66611: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><rect width="18" height="2" rx="1" x="5" y="14"/><rect width="18" height="1" rx=".5" x="5" y="20"/><rect width="18" height="3" rx="1.5" x="5" y="7"/></svg>';
  },
  94071: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" d="M1.5 11.5l-.7.7a1 1 0 0 0-.3.71v3.59h3.59a1 1 0 0 0 .7-.3l.71-.7m-4-4l9-9m-9 9l2 2m2 2l9-9m-9 9l-2-2m11-7l1.3-1.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.3 1.3m4 4l-4-4m-7 11l9-9"/></svg>';
  },
  48984: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" width="13" height="15" fill="none"><path stroke="currentColor" d="M4 14.5h2.5m2.5 0H6.5m0 0V.5m0 0h-5a1 1 0 0 0-1 1V4m6-3.5h5a1 1 0 0 1 1 1V4"/></svg>';
  },
  61964: function _(t) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V7.05l.4.09c.9.18 1.73.53 2.46 1.02l.34.23.29-.3.81-.8c.2-.2.52-.2.71 0l.7.7.36-.35-.35.35c.2.2.2.51 0 .7l-.82.82-.29.29.23.34c.49.73.84 1.57 1.02 2.46l.08.4H22.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H20.95l-.09.4c-.18.9-.53 1.73-1.02 2.46l-.23.34.3.29.8.81c.2.2.2.52 0 .71l-.7.7a.5.5 0 0 1-.7 0l-.82-.8-.29-.3-.34.23c-.73.49-1.57.84-2.46 1.02l-.4.08V22.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V20.95l-.4-.09a6.96 6.96 0 0 1-2.46-1.02l-.34-.23-.29.3-.81.8.35.36-.35-.35a.5.5 0 0 1-.71 0l-.7-.71a.5.5 0 0 1 0-.7l-.36-.36.35.35.82-.81.29-.29-.23-.34a6.96 6.96 0 0 1-1.02-2.46l-.08-.4H5.5a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5H7.05l.09-.4c.18-.9.53-1.73 1.02-2.46l.23-.34-.3-.29-.8-.81a.5.5 0 0 1 0-.71l.7-.7c.2-.2.51-.2.7 0l.82.8.29.3.34-.23a6.96 6.96 0 0 1 2.46-1.02l.4-.08V5.5zm.5-1.5c-.83 0-1.5.67-1.5 1.5v.75c-.73.2-1.43.48-2.06.86l-.54-.53a1.5 1.5 0 0 0-2.12 0l-.7.7a1.5 1.5 0 0 0 0 2.12l.53.54A7.95 7.95 0 0 0 6.25 12H5.5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h.75c.2.73.48 1.43.86 2.06l-.53.54a1.5 1.5 0 0 0 0 2.12l.7.7a1.5 1.5 0 0 0 2.12 0l.54-.53c.63.38 1.33.67 2.06.86v.75c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-.75a7.95 7.95 0 0 0 2.06-.86l.54.53a1.5 1.5 0 0 0 2.12 0l.7-.7a1.5 1.5 0 0 0 0-2.12l-.53-.54c.38-.63.67-1.33.86-2.06h.75c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-.75a7.95 7.95 0 0 0-.86-2.06l.53-.54a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.12 0l-.54.53A7.95 7.95 0 0 0 16 6.25V5.5c0-.83-.67-1.5-1.5-1.5h-1zM12 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>';
  }
}]);