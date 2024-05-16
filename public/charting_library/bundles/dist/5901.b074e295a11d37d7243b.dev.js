"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5901], {
  59142: function _(e, t) {
    var n, o, r;
    o = [t], n = function n(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = !1;

      if ("undefined" != typeof window) {
        var o = {
          get passive() {
            n = !0;
          }

        };
        window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o);
      }

      var r = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          s = [],
          a = !1,
          i = -1,
          l = void 0,
          c = void 0,
          u = function u(e) {
        return s.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          p = function p(e) {
        var t = e || window.event;
        return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          d = function d() {
        setTimeout(function () {
          void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0);
        });
      };

      e.disableBodyScroll = function (e, o) {
        if (r) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !s.some(function (t) {
            return t.targetElement === e;
          })) {
            var d = {
              targetElement: e,
              options: o || {}
            };
            s = [].concat(t(s), [d]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (i = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var n, o, r, s;
              1 === t.targetTouches.length && (o = e, s = (n = t).targetTouches[0].clientY - i, !u(n.target) && (o && 0 === o.scrollTop && 0 < s || (r = o) && r.scrollHeight - r.scrollTop <= r.clientHeight && s < 0 ? p(n) : n.stopPropagation()));
            }, a || (document.addEventListener("touchmove", p, n ? {
              passive: !1
            } : void 0), a = !0);
          }
        } else {
          m = o, setTimeout(function () {
            if (void 0 === c) {
              var e = !!m && !0 === m.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var h = {
            targetElement: e,
            options: o || {}
          };
          s = [].concat(t(s), [h]);
        }

        var m;
      }, e.clearAllBodyScrollLocks = function () {
        r ? (s.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), a && (document.removeEventListener("touchmove", p, n ? {
          passive: !1
        } : void 0), a = !1), s = [], i = -1) : (d(), s = []);
      }, e.enableBodyScroll = function (e) {
        if (r) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, s = s.filter(function (t) {
            return t.targetElement !== e;
          }), a && 0 === s.length && (document.removeEventListener("touchmove", p, n ? {
            passive: !1
          } : void 0), a = !1);
        } else 1 === s.length && s[0].targetElement === e ? (d(), s = []) : s = s.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (r = "function" == typeof n ? n.apply(t, o) : n) || (e.exports = r);
  },
  23428: function _(e) {
    e.exports = {
      button: "button-PYEOTd6i",
      disabled: "disabled-PYEOTd6i",
      hidden: "hidden-PYEOTd6i",
      icon: "icon-PYEOTd6i",
      dropped: "dropped-PYEOTd6i"
    };
  },
  70048: function _(e) {
    e.exports = {
      wrapper: "wrapper-GZajBGIm",
      input: "input-GZajBGIm",
      box: "box-GZajBGIm",
      icon: "icon-GZajBGIm",
      noOutline: "noOutline-GZajBGIm",
      "intent-danger": "intent-danger-GZajBGIm",
      check: "check-GZajBGIm",
      dot: "dot-GZajBGIm"
    };
  },
  69789: function _(e) {
    e.exports = {
      checkbox: "checkbox-vyj6oJxw",
      reverse: "reverse-vyj6oJxw",
      label: "label-vyj6oJxw",
      baseline: "baseline-vyj6oJxw"
    };
  },
  22623: function _(e) {
    e.exports = {
      "textarea-container": "textarea-container-x5KHDULU",
      "change-highlight": "change-highlight-x5KHDULU",
      focused: "focused-x5KHDULU",
      "resize-vertical": "resize-vertical-x5KHDULU",
      "resize-horizontal": "resize-horizontal-x5KHDULU",
      "resize-both": "resize-both-x5KHDULU",
      textarea: "textarea-x5KHDULU",
      "with-icon": "with-icon-x5KHDULU",
      endslot: "endslot-x5KHDULU"
    };
  },
  78370: function _(e) {
    e.exports = {
      "icon-wrapper": "icon-wrapper-EZuD3gZZ",
      "no-active-state": "no-active-state-EZuD3gZZ",
      "with-tooltip": "with-tooltip-EZuD3gZZ",
      "intent-default": "intent-default-EZuD3gZZ",
      "intent-danger": "intent-danger-EZuD3gZZ",
      "intent-warning": "intent-warning-EZuD3gZZ",
      "intent-success": "intent-success-EZuD3gZZ",
      icon: "icon-EZuD3gZZ"
    };
  },
  88400: function _(e) {
    e.exports = {
      radio: "radio-ALqkCUvs",
      input: "input-ALqkCUvs",
      box: "box-ALqkCUvs",
      reverse: "reverse-ALqkCUvs",
      label: "label-ALqkCUvs",
      wrapper: "wrapper-ALqkCUvs",
      noOutline: "noOutline-ALqkCUvs"
    };
  },
  52272: function _(e) {
    e.exports = {
      wrap: "wrap-QStmZL8l",
      thicknessItem: "thicknessItem-QStmZL8l",
      checked: "checked-QStmZL8l",
      accessible: "accessible-QStmZL8l",
      focusVisible: "focusVisible-QStmZL8l",
      radio: "radio-QStmZL8l",
      bar: "bar-QStmZL8l"
    };
  },
  12863: function _(e) {
    e.exports = {
      innerLabel: "innerLabel-DjbvBF5Y"
    };
  },
  21234: function _(e) {
    e.exports = {
      controlWrapper: "controlWrapper-DBTazUk2",
      hidden: "hidden-DBTazUk2",
      control: "control-DBTazUk2",
      controlIncrease: "controlIncrease-DBTazUk2",
      controlDecrease: "controlDecrease-DBTazUk2",
      controlIcon: "controlIcon-DBTazUk2",
      title: "title-DBTazUk2"
    };
  },
  60015: function _(e) {
    e.exports = {
      wrap: "wrap-ne5qGlZh",
      icon: "icon-ne5qGlZh",
      text: "text-ne5qGlZh",
      disabled: "disabled-ne5qGlZh"
    };
  },
  28685: function _(e) {
    e.exports = {
      colorPickerWrap: "colorPickerWrap-Sw_a4qpB",
      focused: "focused-Sw_a4qpB",
      readonly: "readonly-Sw_a4qpB",
      disabled: "disabled-Sw_a4qpB",
      "size-small": "size-small-Sw_a4qpB",
      "size-medium": "size-medium-Sw_a4qpB",
      "size-large": "size-large-Sw_a4qpB",
      "font-size-small": "font-size-small-Sw_a4qpB",
      "font-size-medium": "font-size-medium-Sw_a4qpB",
      "font-size-large": "font-size-large-Sw_a4qpB",
      "border-none": "border-none-Sw_a4qpB",
      shadow: "shadow-Sw_a4qpB",
      "border-thin": "border-thin-Sw_a4qpB",
      "border-thick": "border-thick-Sw_a4qpB",
      "intent-default": "intent-default-Sw_a4qpB",
      "intent-success": "intent-success-Sw_a4qpB",
      "intent-warning": "intent-warning-Sw_a4qpB",
      "intent-danger": "intent-danger-Sw_a4qpB",
      "intent-primary": "intent-primary-Sw_a4qpB",
      "corner-top-left": "corner-top-left-Sw_a4qpB",
      "corner-top-right": "corner-top-right-Sw_a4qpB",
      "corner-bottom-right": "corner-bottom-right-Sw_a4qpB",
      "corner-bottom-left": "corner-bottom-left-Sw_a4qpB",
      colorPicker: "colorPicker-Sw_a4qpB",
      swatch: "swatch-Sw_a4qpB",
      placeholderContainer: "placeholderContainer-Sw_a4qpB",
      placeholder: "placeholder-Sw_a4qpB",
      mixedColor: "mixedColor-Sw_a4qpB",
      white: "white-Sw_a4qpB",
      opacitySwatch: "opacitySwatch-Sw_a4qpB",
      colorLine: "colorLine-Sw_a4qpB",
      multiWidth: "multiWidth-Sw_a4qpB",
      line: "line-Sw_a4qpB",
      thicknessContainer: "thicknessContainer-Sw_a4qpB",
      thicknessTitle: "thicknessTitle-Sw_a4qpB"
    };
  },
  86536: function _(e) {
    e.exports = {
      thicknessContainer: "thicknessContainer-C05zSid7",
      thicknessTitle: "thicknessTitle-C05zSid7"
    };
  },
  69006: function _(e) {
    e.exports = {
      hasTooltip: "hasTooltip-DcvaoxPU",
      uppercase: "uppercase-DcvaoxPU"
    };
  },
  2746: function _(e) {
    e.exports = {
      wrap: "wrap-Q2NZ0gvI"
    };
  },
  25679: function _(e) {
    e.exports = {
      checkbox: "checkbox-FG0u1J5p",
      title: "title-FG0u1J5p"
    };
  },
  41125: function _(e) {
    e.exports = {
      hintButton: "hintButton-qEI9XsjF"
    };
  },
  69750: function _(e) {
    e.exports = {
      titleWrap: "titleWrap-SexRbl__",
      title: "title-SexRbl__"
    };
  },
  63581: function _(e) {
    e.exports = {
      accessible: "accessible-HBcDEU4c"
    };
  },
  93402: function _(e) {
    e.exports = {
      container: "container-mdcOkvbj",
      sectionTitle: "sectionTitle-mdcOkvbj",
      separator: "separator-mdcOkvbj",
      customButton: "customButton-mdcOkvbj",
      accessible: "accessible-mdcOkvbj"
    };
  },
  80679: function _(e) {
    e.exports = {
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
  1369: function _(e) {
    e.exports = {
      hue: "hue-r4uo5Wn6",
      pointer: "pointer-r4uo5Wn6",
      pointerContainer: "pointerContainer-r4uo5Wn6"
    };
  },
  30099: function _(e) {
    e.exports = {
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
  35257: function _(e) {
    e.exports = {
      saturation: "saturation-NFNfqP2w",
      pointer: "pointer-NFNfqP2w"
    };
  },
  87466: function _(e) {
    e.exports = {
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
  66986: function _(e) {
    e.exports = {
      button: "button-tFul0OhX",
      "button-children": "button-children-tFul0OhX",
      hiddenArrow: "hiddenArrow-tFul0OhX",
      invisibleFocusHandler: "invisibleFocusHandler-tFul0OhX"
    };
  },
  60673: function _(e) {
    e.exports = {
      placeholder: "placeholder-V6ceS6BN"
    };
  },
  70673: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CheckboxInput: function CheckboxInput() {
        return u;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(9745),
        i = n(65890),
        l = n(70048),
        c = n.n(l);

    function u(e) {
      var _r;

      var t = r(c().box, c()["intent-".concat(e.intent)], (_r = {}, _defineProperty(_r, c().check, !Boolean(e.indeterminate)), _defineProperty(_r, c().dot, Boolean(e.indeterminate)), _defineProperty(_r, c().noOutline, -1 === e.tabIndex), _r)),
          n = r(c().wrapper, e.className);
      return o.createElement("span", {
        className: n,
        title: e.title,
        style: e.style
      }, o.createElement("input", _objectSpread({
        id: e.id,
        tabIndex: e.tabIndex,
        className: c().input,
        type: "checkbox",
        name: e.name,
        checked: e.checked,
        disabled: e.disabled,
        value: e.value,
        autoFocus: e.autoFocus,
        role: e.role,
        onChange: function onChange() {
          e.onChange && e.onChange(e.value);
        },
        ref: e.reference,
        "aria-required": e["aria-required"],
        "aria-describedby": e["aria-describedby"],
        "aria-invalid": e["aria-invalid"]
      }, (0, s.filterDataProps)(e))), o.createElement("span", {
        className: t
      }, o.createElement(a.Icon, {
        icon: i,
        className: c().icon
      })));
    }
  },
  15294: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Checkbox: function Checkbox() {
        return c;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(57733),
        a = n(70673),
        i = n(69789),
        l = n.n(i);

    var c =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(c, _o$PureComponent);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "render",
        value: function render() {
          var _r2;

          var _this$props = this.props,
              e = _this$props.inputClassName,
              t = _this$props.labelClassName,
              n = _objectWithoutProperties(_this$props, ["inputClassName", "labelClassName"]),
              s = r(this.props.className, l().checkbox, (_r2 = {}, _defineProperty(_r2, l().reverse, Boolean(this.props.labelPositionReverse)), _defineProperty(_r2, l().baseline, Boolean(this.props.labelAlignBaseline)), _r2)),
              i = r(l().label, t, _defineProperty({}, l().disabled, this.props.disabled));

          var c = null;
          return this.props.label && (c = o.createElement("span", {
            className: i,
            title: this.props.title
          }, this.props.label)), o.createElement("label", {
            className: s
          }, o.createElement(a.CheckboxInput, _objectSpread({}, n, {
            className: e
          })), c);
        }
      }]);

      return c;
    }(o.PureComponent);

    c.defaultProps = {
      value: "on"
    };
    (0, s.makeSwitchGroupItem)(c);
  },
  2568: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Textarea: function Textarea() {
        return C;
      }
    });
    var o,
        r = n(50959),
        s = n(97754),
        a = n(38528),
        i = n(29202),
        l = n(48027),
        c = n(45812),
        u = n(47201),
        p = n(48907),
        d = n(67029),
        h = n(78274),
        m = n(22623),
        v = n.n(m);
    !function (e) {
      e.None = "none", e.Vertical = "vertical", e.Horizontal = "horizontal", e.Both = "both";
    }(o || (o = {}));
    var g = r.forwardRef(function (e, t) {
      var n = e.id,
          o = e.title,
          a = e.tabIndex,
          i = e.containerTabIndex,
          l = e.role,
          c = e.inputClassName,
          u = e.autoComplete,
          p = e.autoFocus,
          m = e.cols,
          g = e.disabled,
          f = e.isFocused,
          b = e.form,
          C = e.maxLength,
          y = e.minLength,
          E = e.name,
          S = e.placeholder,
          w = e.readonly,
          _ = e.required,
          x = e.rows,
          N = e.value,
          I = e.defaultValue,
          T = e.wrap,
          B = e.containerReference,
          k = e.onChange,
          P = e.onSelect,
          D = e.onFocus,
          L = e.onContainerFocus,
          M = e.onBlur,
          O = e["aria-describedby"],
          F = e["aria-required"],
          V = e["aria-invalid"],
          A = e.hasIcon,
          R = e.endSlot,
          W = e.hasAttachImage,
          q = _objectWithoutProperties(e, ["id", "title", "tabIndex", "containerTabIndex", "role", "inputClassName", "autoComplete", "autoFocus", "cols", "disabled", "isFocused", "form", "maxLength", "minLength", "name", "placeholder", "readonly", "required", "rows", "value", "defaultValue", "wrap", "containerReference", "onChange", "onSelect", "onFocus", "onContainerFocus", "onBlur", "aria-describedby", "aria-required", "aria-invalid", "hasIcon", "endSlot", "hasAttachImage"]),
          z = {
        id: n,
        title: o,
        tabIndex: a,
        role: l,
        autoComplete: u,
        autoFocus: p,
        cols: m,
        disabled: g,
        form: b,
        maxLength: C,
        minLength: y,
        name: E,
        placeholder: S,
        readOnly: w,
        required: _,
        rows: x,
        value: N,
        defaultValue: I,
        wrap: T,
        onChange: k,
        onSelect: P,
        onFocus: D,
        onBlur: M,
        "aria-describedby": O,
        "aria-required": F,
        "aria-invalid": V
      };

      return r.createElement(d.ControlSkeleton, _objectSpread({}, q, {
        tabIndex: i,
        disabled: g,
        readonly: w,
        isFocused: f,
        ref: B,
        onFocus: L,
        middleSlot: r.createElement(h.MiddleSlot, null, r.createElement("textarea", _objectSpread({}, z, {
          className: s(v().textarea, c, R && v().endslot),
          ref: t
        })))
      }, R && {
        endSlot: r.createElement("span", {
          className: s(!W && v()["with-icon"])
        }, R)
      }));
    });
    g.displayName = "TextareaView";

    var f = function f(e, t, n) {
      return t ? void 0 : e ? -1 : n;
    },
        b = function b(e, t, n) {
      return t ? void 0 : e ? n : -1;
    },
        C = r.forwardRef(function (e, t) {
      e = (0, l.useControl)(e);

      var _e = e,
          n = _e.className,
          d = _e.disabled,
          h = _e.autoSelectOnFocus,
          _e$tabIndex = _e.tabIndex,
          m = _e$tabIndex === void 0 ? 0 : _e$tabIndex,
          C = _e.borderStyle,
          y = _e.highlight,
          E = _e.resize,
          _e$containerReference = _e.containerReference,
          S = _e$containerReference === void 0 ? null : _e$containerReference,
          w = _e.onFocus,
          _ = _e.onBlur,
          x = _e.hasIcon,
          N = _objectWithoutProperties(_e, ["className", "disabled", "autoSelectOnFocus", "tabIndex", "borderStyle", "highlight", "resize", "containerReference", "onFocus", "onBlur", "hasIcon"]),
          I = (0, r.useRef)(null),
          T = (0, r.useRef)(null),
          _ref = (0, c.useIsMouseDown)(),
          B = _ref.isMouseDown,
          k = _ref.handleMouseDown,
          P = _ref.handleMouseUp,
          _ref2 = (0, i.useFocus)(),
          _ref3 = _slicedToArray(_ref2, 2),
          D = _ref3[0],
          L = _ref3[1],
          M = (0, u.createSafeMulticastEventHandler)(L.onFocus, function (e) {
        h && !B.current && (0, p.selectAllContent)(e.currentTarget);
      }, w),
          O = (0, u.createSafeMulticastEventHandler)(L.onBlur, _),
          F = void 0 !== E && E !== o.None,
          V = null != C ? C : F ? y ? "thick" : "thin" : void 0,
          A = null != y ? y : !F && void 0;

      return r.createElement(g, _objectSpread({}, N, {
        className: s(v()["textarea-container"], F && v()["change-highlight"], E && E !== o.None && v()["resize-".concat(E)], D && v().focused, n),
        disabled: d,
        isFocused: D,
        containerTabIndex: f(D, d, m),
        tabIndex: b(D, d, m),
        borderStyle: V,
        highlight: A,
        onContainerFocus: function onContainerFocus(e) {
          T.current === e.target && null !== I.current && I.current.focus();
        },
        onFocus: M,
        onBlur: O,
        onMouseDown: k,
        onMouseUp: P,
        ref: function ref(e) {
          I.current = e, "function" == typeof t ? t(e) : t && (t.current = e);
        },
        containerReference: (0, a.useMergedRefs)([S, T]),
        hasIcon: x
      }));
    });

    C.displayName = "Textarea";
  },
  36104: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useControlDisclosure: function useControlDisclosure() {
        return r;
      }
    });
    var o = n(7953);

    function r(e) {
      var t = e.intent,
          n = e.highlight,
          r = _objectWithoutProperties(e, ["intent", "highlight"]),
          _ref4 = (0, o.useDisclosure)(r),
          s = _ref4.isFocused,
          a = _objectWithoutProperties(_ref4, ["isFocused"]);

      return _objectSpread({}, a, {
        isFocused: s,
        highlight: null != n ? n : s,
        intent: null != t ? t : s ? "primary" : "default"
      });
    }
  },
  57733: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SwitchGroup: function SwitchGroup() {
        return a;
      },
      makeSwitchGroupItem: function makeSwitchGroupItem() {
        return i;
      }
    });
    var o = n(50959);

    var r = function r() {},
        s = (0, o.createContext)({
      getName: function getName() {
        return "";
      },
      getValues: function getValues() {
        return [];
      },
      getOnChange: function getOnChange() {
        return r;
      },
      subscribe: r,
      unsubscribe: r
    });

    var a =
    /*#__PURE__*/
    function (_o$PureComponent2) {
      _inherits(a, _o$PureComponent2);

      function a(e) {
        var _this;

        _classCallCheck(this, a);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, e)), _this._subscriptions = new Set(), _this._getName = function () {
          return _this.props.name;
        }, _this._getValues = function () {
          return _this.props.values;
        }, _this._getOnChange = function () {
          return _this.props.onChange;
        }, _this._subscribe = function (e) {
          _this._subscriptions.add(e);
        }, _this._unsubscribe = function (e) {
          _this._subscriptions["delete"](e);
        }, _this.state = {
          switchGroupContext: {
            getName: _this._getName,
            getValues: _this._getValues,
            getOnChange: _this._getOnChange,
            subscribe: _this._subscribe,
            unsubscribe: _this._unsubscribe
          }
        };
        return _this;
      }

      _createClass(a, [{
        key: "render",
        value: function render() {
          return o.createElement(s.Provider, {
            value: this.state.switchGroupContext
          }, this.props.children);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values));
        }
      }, {
        key: "_notify",
        value: function _notify(e) {
          this._subscriptions.forEach(function (t) {
            return t(e);
          });
        }
      }, {
        key: "_getUpdates",
        value: function _getUpdates(e, t) {
          return [].concat(_toConsumableArray(t), _toConsumableArray(e)).filter(function (n) {
            return t.includes(n) ? !e.includes(n) : e.includes(n);
          });
        }
      }]);

      return a;
    }(o.PureComponent);

    function i(e) {
      var t;
      return t =
      /*#__PURE__*/
      function (_o$PureComponent3) {
        _inherits(t, _o$PureComponent3);

        function t() {
          var _this2;

          _classCallCheck(this, t);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)), _this2._onChange = function (e) {
            _this2.context.getOnChange()(e);
          }, _this2._onUpdate = function (e) {
            e.includes(_this2.props.value) && _this2.forceUpdate();
          };
          return _this2;
        }

        _createClass(t, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.context.subscribe(this._onUpdate);
          }
        }, {
          key: "render",
          value: function render() {
            return o.createElement(e, _objectSpread({}, this.props, {
              name: this._getName(),
              onChange: this._onChange,
              checked: this._isChecked()
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.context.unsubscribe(this._onUpdate);
          }
        }, {
          key: "_getName",
          value: function _getName() {
            return this.context.getName();
          }
        }, {
          key: "_isChecked",
          value: function _isChecked() {
            return this.context.getValues().includes(this.props.value);
          }
        }]);

        return t;
      }(o.PureComponent), t.contextType = s, t;
    }
  },
  92399: function _(e, t, n) {
    "use strict";

    n.d(t, {
      NumberInputView: function NumberInputView() {
        return T;
      }
    });
    var o = n(50959),
        r = n(32563),
        s = n(97754),
        a = n(67029),
        i = n(78274),
        l = n(86623),
        c = n(95263),
        u = n(1405),
        p = n(12863);
    var d = {
      large: a.InputClasses.FontSizeLarge,
      medium: a.InputClasses.FontSizeMedium
    },
        h = {
      attachment: u.anchors.top.attachment,
      targetAttachment: u.anchors.top.targetAttachment,
      attachmentOffsetY: -4
    };

    function m(e) {
      var t = e.className,
          n = e.inputClassName,
          _e$stretch = e.stretch,
          r = _e$stretch === void 0 ? !0 : _e$stretch,
          a = e.errorMessage,
          _e$fontSizeStyle = e.fontSizeStyle,
          u = _e$fontSizeStyle === void 0 ? "large" : _e$fontSizeStyle,
          m = e.endSlot,
          v = e.button,
          g = e.error,
          f = e.warning,
          b = e.innerLabel,
          C = e.inputReference,
          y = e.children,
          E = _objectWithoutProperties(e, ["className", "inputClassName", "stretch", "errorMessage", "fontSizeStyle", "endSlot", "button", "error", "warning", "innerLabel", "inputReference", "children"]),
          S = g && void 0 !== a ? [a] : void 0,
          w = f && void 0 !== a ? [a] : void 0,
          _ = s(p.inputContainer, d[u], t),
          x = b ? o.createElement(i.StartSlot, {
        className: p.innerLabel,
        interactive: !1
      }, b) : void 0,
          N = m || v || y ? o.createElement(i.EndSlot, null, m, v, y) : void 0;

      return o.createElement(l.FormInput, _objectSpread({}, E, {
        className: _,
        inputClassName: n,
        errors: S,
        warnings: w,
        hasErrors: g,
        hasWarnings: f,
        messagesPosition: c.MessagesPosition.Attached,
        customErrorsAttachment: h,
        messagesRoot: "document",
        inheritMessagesWidthFromTarget: !0,
        disableMessagesRtlStyles: !0,
        iconHidden: !0,
        stretch: r,
        reference: C,
        startSlot: x,
        endSlot: N
      }));
    }

    var v = n(38528),
        g = n(44352),
        f = n(9745),
        b = n(21861),
        C = n(2948),
        y = n(21234);

    function E(e) {
      var t = s(y.control, y.controlIncrease),
          r = s(y.control, y.controlDecrease);
      return o.createElement(o.Fragment, null, void 0 !== e.title && o.createElement("div", {
        className: y.title
      }, e.title), o.createElement("div", {
        className: y.controlWrapper
      }, (e.defaultButtonsVisible || e.title) && o.createElement(o.Fragment, null, o.createElement("button", {
        type: "button",
        tabIndex: -1,
        "aria-label": g.t(null, void 0, n(46812)),
        className: t,
        onClick: e.increaseValue,
        onMouseDown: b.preventDefault
      }, o.createElement(f.Icon, {
        icon: C,
        className: y.controlIcon
      })), o.createElement("button", {
        type: "button",
        tabIndex: -1,
        "aria-label": g.t(null, void 0, n(56095)),
        className: r,
        onClick: e.decreaseValue,
        onMouseDown: b.preventDefault
      }, o.createElement(f.Icon, {
        icon: C,
        className: y.controlIcon
      })))));
    }

    var S = n(70412),
        w = n(29202),
        _ = n(47201),
        x = n(68335);

    var N = [38],
        I = [40];

    function T(e) {
      var _ref5 = (0, S.useHover)(),
          _ref6 = _slicedToArray(_ref5, 2),
          t = _ref6[0],
          n = _ref6[1],
          _ref7 = (0, w.useFocus)(),
          _ref8 = _slicedToArray(_ref7, 2),
          s = _ref8[0],
          a = _ref8[1],
          i = (0, o.useRef)(null),
          l = (0, _.createSafeMulticastEventHandler)(a.onFocus, e.onFocus),
          c = (0, _.createSafeMulticastEventHandler)(a.onBlur, e.onBlur),
          u = (0, o.useCallback)(function (t) {
        !e.disabled && s && (t.preventDefault(), t.deltaY < 0 ? e.onValueByStepChange(1) : e.onValueByStepChange(-1));
      }, [s, e.disabled, e.onValueByStepChange]);

      return o.createElement(m, _objectSpread({}, n, {
        id: e.id,
        name: e.name,
        pattern: e.pattern,
        borderStyle: e.borderStyle,
        fontSizeStyle: e.fontSizeStyle,
        value: e.value,
        className: e.className,
        inputClassName: e.inputClassName,
        button: function () {
          var n = e.button,
              a = e.forceShowControls,
              i = e.disabled,
              l = e.title,
              c = !i && !r.mobiletouch && (a || s || t);
          return i ? void 0 : o.createElement(o.Fragment, null, null != n ? n : o.createElement(E, {
            increaseValue: p,
            decreaseValue: d,
            defaultButtonsVisible: c,
            title: l
          }));
        }(),
        disabled: e.disabled,
        placeholder: e.placeholder,
        innerLabel: e.innerLabel,
        endSlot: e.endSlot,
        containerReference: (0, v.useMergedRefs)([i, e.containerReference]),
        inputReference: e.inputReference,
        inputMode: e.inputMode,
        type: e.type,
        warning: e.warning,
        error: e.error,
        errorMessage: e.errorMessage,
        onClick: e.onClick,
        onFocus: l,
        onBlur: c,
        onChange: e.onValueChange,
        onKeyDown: function onKeyDown(t) {
          if (e.disabled || 0 !== (0, x.modifiersFromEvent)(t.nativeEvent)) return;
          var n = N,
              o = I;
          e.controlDecKeyCodes && (o = o.concat(e.controlDecKeyCodes));
          e.controlIncKeyCodes && (n = n.concat(e.controlIncKeyCodes));
          (o.includes(t.keyCode) || n.includes(t.keyCode)) && (t.preventDefault(), e.onValueByStepChange(o.includes(t.keyCode) ? -1 : 1));
          e.onKeyDown && e.onKeyDown(t);
        },
        onWheelNoPassive: u,
        stretch: e.stretch,
        intent: e.intent,
        highlight: e.highlight,
        highlightRemoveRoundBorder: e.highlightRemoveRoundBorder,
        autoSelectOnFocus: e.autoSelectOnFocus,
        "data-property-id": e["data-name"]
      }));

      function p() {
        var t;
        e.disabled || (null === (t = i.current) || void 0 === t || t.focus(), e.onValueByStepChange(1));
      }

      function d() {
        var t;
        e.disabled || (null === (t = i.current) || void 0 === t || t.focus(), e.onValueByStepChange(-1));
      }
    }
  },
  58593: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ColorSelect: function ColorSelect() {
        return T;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(50151),
        i = n(68335),
        l = n(20520),
        c = n(29202),
        u = n(34381),
        p = n(64706),
        d = n(16838),
        h = n(71468),
        m = n(63581);

    function v(e) {
      var t = e.button,
          n = e.children,
          r = e.className,
          v = e.onPopupClose,
          g = e["data-name"],
          f = e.onColorChange,
          b = e.disabled,
          C = _objectWithoutProperties(e, ["button", "children", "className", "onPopupClose", "data-name", "onColorChange", "disabled"]),
          _ref9 = (0, o.useState)(!1),
          _ref10 = _slicedToArray(_ref9, 2),
          y = _ref10[0],
          E = _ref10[1],
          _ref11 = (0, o.useState)(!1),
          _ref12 = _slicedToArray(_ref11, 2),
          S = _ref12[0],
          w = _ref12[1],
          _ref13 = (0, c.useFocus)(),
          _ref14 = _slicedToArray(_ref13, 2),
          _ = _ref14[0],
          x = _ref14[1],
          N = (0, o.useRef)(null),
          I = (0, o.useRef)(null),
          T = (0, o.useRef)(null);

      return o.createElement("div", {
        className: r,
        "data-name": g
      }, o.createElement("button", {
        className: s()(d.PLATFORM_ACCESSIBILITY_ENABLED && m.accessible),
        tabIndex: d.PLATFORM_ACCESSIBILITY_ENABLED && !b ? 0 : -1,
        ref: T,
        onClick: function onClick() {
          if (e.disabled) return;
          w(function (e) {
            return !e;
          }), E(!1);
        },
        onFocus: x.onFocus,
        onBlur: x.onBlur,
        disabled: b
      }, "function" == typeof t ? t(S, _) : t), o.createElement(l.PopupMenu, {
        reference: I,
        controller: N,
        onFocus: function onFocus(e) {
          if (!e.target || !d.PLATFORM_ACCESSIBILITY_ENABLED || e.target !== e.currentTarget) return;
          var t = e.currentTarget,
              n = (0, a.ensureNotNull)((o = e.target, o.querySelector('[data-role="swatch"]:not([disabled], [aria-disabled])')));
          var o;
          (0, h.becomeMainElement)(n), setTimeout(function () {
            if (document.activeElement !== t || !e.target.matches(":focus-visible")) return;

            var _sort = (0, d.queryTabbableElements)(t).sort(d.navigationOrderComparator),
                _sort2 = _slicedToArray(_sort, 1),
                n = _sort2[0];

            n && n.focus();
          });
        },
        isOpened: S,
        onClose: B,
        position: function position() {
          var e = (0, a.ensureNotNull)(T.current).getBoundingClientRect();
          return {
            x: e.left,
            y: e.top + e.height
          };
        },
        doNotCloseOn: T.current,
        onKeyDown: function onKeyDown(e) {
          if (27 === (0, i.hashFromEvent)(e)) S && (e.preventDefault(), B());
        },
        onOpen: function onOpen() {
          var e;
          if (!d.PLATFORM_ACCESSIBILITY_ENABLED) return;
          null === (e = N.current) || void 0 === e || e.focus();
        },
        tabIndex: d.PLATFORM_ACCESSIBILITY_ENABLED ? -1 : void 0
      }, o.createElement(p.MenuContext.Consumer, null, function (e) {
        return o.createElement(u.ColorPicker, _objectSpread({}, C, {
          onColorChange: f,
          onToggleCustom: E,
          menu: e
        }));
      }), !y && n));

      function B() {
        w(!1), (0, a.ensureNotNull)(T.current).focus(), v && v();
      }
    }

    var g = n(56512),
        f = n(87095),
        b = n(6914),
        C = n(44352),
        y = n(57733),
        E = n(52272);
    var S = (0, y.makeSwitchGroupItem)(
    /*#__PURE__*/
    function (_o$PureComponent4) {
      _inherits(_class, _o$PureComponent4);

      function _class(e) {
        var _this3;

        _classCallCheck(this, _class);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, e)), _this3._onChange = function () {
          _this3.props.onChange && _this3.props.onChange(_this3.props.value);
        }, _this3._handleFocus = function (e) {
          d.PLATFORM_ACCESSIBILITY_ENABLED && e.target.matches(":focus-visible") && _this3.setState({
            isFocusVisible: !0
          });
        }, _this3._handleBlur = function () {
          _this3.state.isFocusVisible && _this3.setState({
            isFocusVisible: !1
          });
        }, _this3.state = {
          isFocusVisible: !1
        };
        return _this3;
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var _r4;

          var _this$props2 = this.props,
              e = _this$props2.name,
              t = _this$props2.checked,
              n = _this$props2.value,
              s = r(E.thicknessItem, (_r4 = {}, _defineProperty(_r4, E.checked, t), _defineProperty(_r4, E.accessible, d.PLATFORM_ACCESSIBILITY_ENABLED), _defineProperty(_r4, E.focusVisible, this.state.isFocusVisible), _r4)),
              a = r(E.bar, _defineProperty({}, E.checked, t)),
              i = {
            borderTopWidth: parseInt(n)
          };
          return o.createElement("div", {
            className: s
          }, o.createElement("input", {
            type: "radio",
            className: E.radio,
            name: e,
            value: n,
            onChange: this._onChange,
            onFocus: this._handleFocus,
            onBlur: this._handleBlur,
            checked: t,
            tabIndex: d.PLATFORM_ACCESSIBILITY_ENABLED ? 0 : -1
          }), o.createElement("div", {
            className: a,
            style: i
          }, " "));
        }
      }]);

      return _class;
    }(o.PureComponent));

    function w(e) {
      var t = e.name,
          n = e.values,
          r = e.selectedValues,
          s = e.onChange,
          a = n.map(function (e, t) {
        return o.createElement(S, {
          key: t,
          value: e.toString()
        });
      }),
          i = r.map(function (e) {
        return e.toString();
      });
      return o.createElement("div", {
        className: E.wrap
      }, o.createElement(y.SwitchGroup, {
        name: t,
        onChange: function onChange(e) {
          s(parseInt(e));
        },
        values: i
      }, a));
    }

    var _ = n(86536);

    var x = C.t(null, void 0, n(60142));

    function N(e) {
      var t = e.value,
          n = e.items,
          r = e.onChange;
      return o.createElement("div", {
        className: _.thicknessContainer
      }, o.createElement("div", {
        className: _.thicknessTitle
      }, x), o.createElement(w, {
        name: "color_picker_thickness_select",
        onChange: r,
        values: n,
        selectedValues: "mixed" === t ? [] : [t]
      }));
    }

    var I = n(28685);

    function T(e) {
      var t = e.className,
          _e$selectOpacity = e.selectOpacity,
          n = _e$selectOpacity === void 0 ? void 0 !== e.opacity : _e$selectOpacity,
          r = e.thickness,
          a = e.color,
          i = e.disabled,
          _e$opacity = e.opacity,
          l = _e$opacity === void 0 ? 1 : _e$opacity,
          c = e.onColorChange,
          u = e.onOpacityChange,
          p = e.onThicknessChange,
          d = e.thicknessItems,
          h = e.onPopupClose,
          m = e["data-name"],
          _ref15 = (0, g.useCustomColors)(),
          _ref16 = _slicedToArray(_ref15, 3),
          f = _ref16[0],
          b = _ref16[1],
          C = _ref16[2];

      return o.createElement(v, {
        className: t,
        disabled: i,
        color: "mixed" !== a ? a : null,
        selectOpacity: n,
        opacity: l,
        selectCustom: !0,
        customColors: f,
        onColorChange: c,
        onOpacityChange: a ? u : void 0,
        onAddColor: b,
        onRemoveCustomColor: C,
        button: function button(e, t) {
          var n = e || t,
              c = n ? "primary" : "default";
          return o.createElement("div", {
            className: s()(I.colorPickerWrap, I["intent-".concat(c)], I["border-thin"], I["size-medium"], n && I.highlight, n && I.focused, i && I.disabled),
            "data-role": "button",
            "data-name": r ? "color-with-thickness-select" : "color-select"
          }, o.createElement("div", {
            className: s()(I.colorPicker, i && I.disabled)
          }, a && "mixed" !== a ? function () {
            var e = B(a, l),
                t = l >= .95 && k(a);
            return o.createElement("div", {
              className: I.opacitySwatch
            }, o.createElement("div", {
              style: {
                backgroundColor: e
              },
              className: s()(I.swatch, t && I.white)
            }));
          }() : o.createElement("div", {
            className: I.placeholderContainer
          }, o.createElement("div", {
            className: "mixed" === a ? I.mixedColor : I.placeholder
          })), r && function () {
            var e = a && "mixed" !== a ? B(a, l) : void 0;
            if ("mixed" === r) return o.createElement("div", {
              className: I.multiWidth
            }, o.createElement("div", {
              style: {
                backgroundColor: e
              },
              className: I.line
            }), o.createElement("div", {
              style: {
                backgroundColor: e
              },
              className: I.line
            }), o.createElement("div", {
              style: {
                backgroundColor: e
              },
              className: I.line
            }));
            return o.createElement("span", {
              className: s()(I.colorLine, k(a) && I.white),
              style: {
                height: r,
                backgroundColor: e
              }
            });
          }()), n && o.createElement("span", {
            className: I.shadow
          }));
        },
        onPopupClose: h,
        "data-name": m
      }, r && d && o.createElement(N, {
        value: r,
        items: d,
        onChange: function onChange(e) {
          p && p(e);
        }
      }));
    }

    function B(e, t) {
      return e ? (0, f.generateColor)(e, (0, f.alphaToTransparency)(t), !0) : "#000000";
    }

    function k(e) {
      return !!e && e.toLowerCase() === b.white;
    }
  },
  48897: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolInputsButton: function SymbolInputsButton() {
        return x;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(44352),
        i = n(50151),
        l = n(60508),
        c = n(95711),
        u = n(14483),
        p = n(55141),
        d = n(65106),
        h = n(1861),
        m = n(9745),
        v = n(93929),
        g = n(60015);

    function f(e) {
      var t = e.value,
          n = e.onClick,
          s = e.className,
          a = e.startSlot,
          _e$disabled = e.disabled,
          i = _e$disabled === void 0 ? !1 : _e$disabled;
      return o.createElement("div", {
        className: r(g.wrap, i && g.disabled, s),
        onClick: n,
        "data-name": "edit-button"
      }, o.createElement("div", {
        className: r(g.text, "apply-overflow-tooltip")
      }, void 0 !== a && a, o.createElement("span", null, t)), o.createElement(m.Icon, {
        icon: v,
        className: g.icon
      }));
    }

    var b = n(31356),
        C = n(78260),
        y = n(44254),
        E = n(15983),
        S = n(82708),
        w = n(69006);

    function _(e) {
      var t = e.symbol,
          r = e.onSymbolChanged,
          i = e.disabled,
          p = e.className,
          _ref17 = (0, o.useState)(t),
          _ref18 = _slicedToArray(_ref17, 2),
          m = _ref18[0],
          v = _ref18[1],
          g = (0, o.useContext)(l.SlotContext),
          b = (0, o.useContext)(c.PopupContext);

      return o.createElement(f, {
        value: m,
        onClick: function onClick() {
          var e = function (e) {
            var t = (0, y.tokenize)(e);
            return (0, E.isSpread)(t);
          }(m) ? m : (0, S.safeShortName)(m),
              t = (0, d.getSymbolSearchCompleteOverrideFunction)();
          (0, h.showSymbolSearchItemsDialog)({
            onSearchComplete: function onSearchComplete(e) {
              t(e[0].symbol, e[0].result).then(function (e) {
                r(e.symbol), v(e.name);
              });
            },
            dialogTitle: a.t(null, void 0, n(23398)),
            defaultValue: e,
            manager: g,
            onClose: function onClose() {
              b && b.focus();
            },
            showSpreadActions: u.enabled("show_spread_operators") && u.enabled("studies_symbol_search_spread_operators")
          });
        },
        disabled: i,
        className: s()(p, u.enabled("uppercase_instrument_names") && w.uppercase)
      });
    }

    function x(e) {
      if ("definition" in e) {
        var _e$definition = e.definition,
            _t = _e$definition.propType,
            _n2 = _e$definition.properties,
            _r6 = _e$definition.id,
            _e$definition$title = _e$definition.title,
            _s2 = _e$definition$title === void 0 ? "" : _e$definition$title,
            _a = _e$definition.solutionId,
            _l = _n2[_t],
            _c = _l.value() || "",
            _u = function _u(e) {
          _l.setValue(e);
        };

        return o.createElement(b.CommonSection, {
          id: _r6,
          title: _s2,
          solutionId: _a
        }, o.createElement(C.CellWrap, null, o.createElement(_, {
          symbol: (0, i.ensureDefined)(_c),
          onSymbolChanged: _u
        })));
      }

      {
        var _t2 = e.study,
            _n3 = e.value,
            _e$input = e.input,
            _r7 = _e$input.id,
            _a2 = _e$input.name,
            _l2 = e.onChange,
            _c2 = e.disabled,
            _u2 = e.hasTooltip,
            _d2 = function _d2(e) {
          var n = (0, p.getInternalSymbolName)(e, _t2);

          _l2(n, _r7, _a2);
        };

        return o.createElement(_, {
          symbol: (0, i.ensureDefined)(_n3),
          onSymbolChanged: _d2,
          disabled: _c2,
          className: s()(_u2 && w.hasTooltip)
        });
      }
    }
  },
  1861: function _(e, t, n) {
    "use strict";

    n.d(t, {
      showSymbolSearchItemsDialog: function showSymbolSearchItemsDialog() {
        return l;
      }
    });
    var o = n(50959),
        r = n(962),
        s = n(60508),
        a = n(51826),
        i = n(32456);

    function l(e) {
      var _e$initialMode = e.initialMode,
          t = _e$initialMode === void 0 ? "symbolSearch" : _e$initialMode,
          _e$autofocus = e.autofocus,
          n = _e$autofocus === void 0 ? !0 : _e$autofocus,
          l = e.defaultValue,
          c = e.showSpreadActions,
          u = e.selectSearchOnInit,
          p = e.onSearchComplete,
          d = e.dialogTitle,
          h = e.placeholder,
          m = e.fullscreen,
          v = e.initialScreen,
          g = e.wrapper,
          f = e.dialog,
          b = e.contentItem,
          C = e.onClose,
          y = e.onOpen,
          E = e.footer,
          S = e.symbolTypes,
          w = e.searchInput,
          _ = e.emptyState,
          x = e.hideMarkedListFlag,
          _e$dialogWidth = e.dialogWidth,
          N = _e$dialogWidth === void 0 ? "auto" : _e$dialogWidth,
          I = e.manager,
          T = e.shouldReturnFocus;
      if (a.dialogsOpenerManager.isOpened("SymbolSearch") || a.dialogsOpenerManager.isOpened("ChangeIntervalDialog")) return;
      var B = document.createElement("div"),
          k = o.createElement(s.SlotContext.Provider, {
        value: null != I ? I : null
      }, o.createElement(i.SymbolSearchItemsDialog, {
        onClose: P,
        initialMode: t,
        defaultValue: l,
        showSpreadActions: c,
        hideMarkedListFlag: x,
        selectSearchOnInit: u,
        onSearchComplete: p,
        dialogTitle: d,
        placeholder: h,
        fullscreen: m,
        initialScreen: v,
        wrapper: g,
        dialog: f,
        contentItem: b,
        footer: E,
        symbolTypes: S,
        searchInput: w,
        emptyState: _,
        autofocus: n,
        dialogWidth: N,
        shouldReturnFocus: T
      }));

      function P() {
        r.unmountComponentAtNode(B), a.dialogsOpenerManager.setAsClosed("SymbolSearch"), C && C();
      }

      return r.render(k, B), a.dialogsOpenerManager.setAsOpened("SymbolSearch"), y && y(), {
        close: P
      };
    }
  },
  50238: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useRovingTabindexElement: function useRovingTabindexElement() {
        return a;
      }
    });
    var o = n(50959),
        r = n(39416),
        s = n(16838);

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref19 = (0, o.useState)(!1),
          _ref20 = _slicedToArray(_ref19, 2),
          n = _ref20[0],
          a = _ref20[1],
          i = (0, r.useFunctionalRefObject)(e);

      return (0, o.useLayoutEffect)(function () {
        if (!s.PLATFORM_ACCESSIBILITY_ENABLED) return;
        var e = i.current;
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
      }, t), [i, s.PLATFORM_ACCESSIBILITY_ENABLED ? n ? 0 : -1 : void 0];
    }
  },
  73146: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createAdapter: function createAdapter() {
        return s;
      }
    });
    var o = n(92249),
        r = n(28853);

    function s(e) {
      if ((0, o.isLineTool)(e)) return {
        isPine: function isPine() {
          return !1;
        },
        isStandardPine: function isStandardPine() {
          return !1;
        },
        canOverrideMinTick: function canOverrideMinTick() {
          return !1;
        },
        resolvedSymbolInfoBySymbol: function resolvedSymbolInfoBySymbol() {
          throw new TypeError("Only study is supported.");
        },
        symbolsResolved: function symbolsResolved() {
          throw new TypeError("Only study is supported.");
        },
        parentSources: function parentSources() {
          throw new TypeError("Only study is supported.");
        },
        getAllChildren: function getAllChildren() {
          return [];
        },
        sourceId: function sourceId() {
          throw new TypeError("Only study is supported.");
        },
        inputs: function inputs() {
          return {};
        },
        parentSourceForInput: function parentSourceForInput() {
          throw new TypeError("Only study is supported.");
        }
      };
      if ((0, r.isStudy)(e)) return e;
      if ("isInputsStudy" in e) return e;
      throw new TypeError("Unsupported source type.");
    }
  },
  45560: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useDefinitionProperty: function useDefinitionProperty() {
        return s;
      }
    });
    var o = n(50959),
        r = n(71953);

    var s = function s(e) {
      var t = "property" in e ? e.property : void 0,
          n = "defaultValue" in e ? e.defaultValue : e.property.value(),
          _ref21 = (0, o.useState)(t ? t.value() : n),
          _ref22 = _slicedToArray(_ref21, 2),
          s = _ref22[0],
          a = _ref22[1];

      (0, o.useEffect)(function () {
        if (t) {
          var _n4 = {};
          return a(t.value()), t.subscribe(_n4, function (t) {
            var n = t.value();
            e.handler && e.handler(n), a(n);
          }), function () {
            t.unsubscribeAll(_n4);
          };
        }

        return function () {};
      }, [t]);
      return [s, function (e) {
        if (void 0 !== t) {
          var _n5 = t.value();

          r.logger.logNormal("Changing property value from \"".concat(_n5, "\" to \"").concat(e, "\"")), t.setValue(e);
        }
      }];
    };
  },
  78260: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CellWrap: function CellWrap() {
        return i;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(2746);

    function i(e) {
      return o.createElement("div", {
        className: s()(a.wrap, e.className)
      }, e.children);
    }
  },
  53424: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CheckableTitle: function CheckableTitle() {
        return c;
      }
    });
    var o = n(50959),
        r = n(15294),
        s = n(45560);

    function a(e) {
      var t = e.property,
          n = _objectWithoutProperties(e, ["property"]),
          _ref23 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref24 = _slicedToArray(_ref23, 2),
          a = _ref24[0],
          i = _ref24[1],
          l = "mixed" === a;

      return o.createElement(r.Checkbox, _objectSpread({}, n, {
        name: "toggle-enabled",
        checked: l || a,
        indeterminate: l,
        onChange: function onChange() {
          i("mixed" === a || !a);
        }
      }));
    }

    var i = n(78260),
        l = n(25679);

    function c(e) {
      var t = e.property,
          n = e.disabled,
          r = e.title,
          s = e.className,
          c = e.name,
          u = o.createElement("span", {
        className: l.title
      }, r);
      return o.createElement(i.CellWrap, {
        className: s
      }, t ? o.createElement(a, {
        name: c,
        className: l.checkbox,
        property: t,
        disabled: n,
        label: u,
        labelAlignBaseline: !0
      }) : u);
    }
  },
  31356: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CommonSection: function CommonSection() {
        return a;
      }
    });
    var o = n(50959),
        r = n(11062),
        s = n(53424);
    n(41125);

    function a(e) {
      var t = e.id,
          n = e.offset,
          a = e.disabled,
          i = e.checked,
          l = e.title,
          c = e.children,
          u = e.solutionId;
      return o.createElement(r.PropertyTable.Row, null, o.createElement(r.PropertyTable.Cell, {
        placement: "first",
        verticalAlign: "adaptive",
        offset: n,
        "data-section-name": t,
        colSpan: Boolean(c) ? void 0 : 2,
        checkableTitle: !0
      }, o.createElement(s.CheckableTitle, {
        name: "is-enabled-".concat(t),
        title: l,
        disabled: a,
        property: i
      }), u && !Boolean(c) && !1), Boolean(c) && o.createElement(r.PropertyTable.Cell, {
        placement: "last",
        "data-section-name": t
      }, c, u && !1));
    }
  },
  86067: function _(e, t, n) {
    "use strict";

    n.d(t, {
      GroupTitleSection: function GroupTitleSection() {
        return i;
      }
    });
    var o = n(50959),
        r = n(11062),
        s = n(53424),
        a = n(69750);

    function i(e) {
      return o.createElement(r.PropertyTable.Row, null, o.createElement(r.PropertyTable.Cell, {
        className: a.titleWrap,
        placement: "first",
        verticalAlign: "adaptive",
        colSpan: 2,
        "data-section-name": e.name,
        checkableTitle: !0
      }, o.createElement(s.CheckableTitle, {
        title: e.title,
        name: "is-enabled-".concat(e.name),
        className: a.title
      })));
    }
  },
  71953: function _(e, t, n) {
    "use strict";

    n.d(t, {
      logger: function logger() {
        return o;
      }
    });
    var o = (0, n(59224).getLogger)("Platform.GUI.PropertyDefinitionTrace");
  },
  34381: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ColorPicker: function ColorPicker() {
        return $;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(44352),
        i = n(16838),
        l = n(50151),
        c = n(68335),
        u = n(71468);
    var p = [37, 39, 38, 40];

    function d(e) {
      var t = (0, o.useRef)(null);
      return (0, o.useLayoutEffect)(function () {
        if (!i.PLATFORM_ACCESSIBILITY_ENABLED) return;

        var e = (0, l.ensureNotNull)(t.current),
            n = function n() {
          var n = (0, i.queryTabbableElements)(e).sort(i.navigationOrderComparator);

          if (0 === n.length || n[0].parentElement && !v(n[0].parentElement, (0, l.ensureNotNull)(t.current))) {
            var _o = function (e) {
              var n = m(e).sort(i.navigationOrderComparator).find(function (e) {
                return v(e, (0, l.ensureNotNull)(t.current));
              });
              if (!n) return null;
              var o = Array.from(n.children);
              if (!o.length) return null;
              return o[0];
            }(e);

            if (null === _o) return;

            if ((0, u.becomeMainElement)(_o), n.length > 0) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _e2 = _step.value;
                  (0, u.becomeSecondaryElement)(_e2);
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

        return window.addEventListener("keyboard-navigation-activation", n), n(), function () {
          return window.removeEventListener("keyboard-navigation-activation", n);
        };
      }, []), [t, function (t) {
        if (!i.PLATFORM_ACCESSIBILITY_ENABLED) return;
        if (t.defaultPrevented) return;
        var n = (0, c.hashFromEvent)(t);
        if (!p.includes(n)) return;
        var o = document.activeElement;
        if (!(o instanceof HTMLElement)) return;
        var r = t.currentTarget;
        var s, a;

        if (e) {
          var _e3 = o.parentElement;
          s = _e3 ? Array.from(_e3.children) : [], a = s.indexOf(o);
        } else s = (l = r, Array.from(l.querySelectorAll("button:not([disabled], [aria-disabled])")).filter((0, i.createScopedVisibleElementFilter)(l))).sort(i.navigationOrderComparator), a = s.indexOf(o);

        var l;
        if (0 === s.length || -1 === a) return;

        var u = function u(n) {
          if (!document.activeElement) return;
          var o = m(r),
              s = document.activeElement.parentElement;
          if (!s) return;
          var a = Array.from(s.children).indexOf(document.activeElement);
          if (-1 === a) return;
          var i = o["down" === n ? o.indexOf(s) + 1 : o.indexOf(s) - 1];
          if (!i) return;
          t.preventDefault();
          var l = Array.from(i.children);
          l.length && (!e && a <= l.length - 1 ? g(l[a]) : g(l[0]));
        };

        switch (n) {
          case 37:
            if (t.preventDefault(), !e && 0 === a) break;
            g(h(s, a, -1));
            break;

          case 39:
            if (t.preventDefault(), !e && a === s.length - 1) break;
            g(h(s, a, 1));
            break;

          case 38:
            u("up");
            break;

          case 40:
            u("down");
        }
      }];
    }

    function h(e, t, n) {
      return e[(t + e.length + n) % e.length];
    }

    function m(e) {
      return Array.from(e.querySelectorAll('[data-role="row"]')).filter((0, i.createScopedVisibleElementFilter)(e));
    }

    function v(e, t) {
      var n = (0, l.ensureNotNull)(e.parentElement).offsetTop,
          o = n + (0, l.ensureNotNull)(e.parentElement).clientHeight,
          r = t.scrollTop,
          s = r + t.clientHeight;
      return n >= r && o <= s;
    }

    function g(e) {
      document.activeElement && (0, u.becomeSecondaryElement)(document.activeElement), (0, u.becomeMainElement)(e), e.focus();
    }

    var f = n(43688),
        b = n(93532),
        C = n(45582),
        y = Math.ceil,
        E = Math.max;

    var S = function S(e, t, n) {
      t = (n ? (0, b["default"])(e, t, n) : void 0 === t) ? 1 : E((0, C["default"])(t), 0);
      var o = null == e ? 0 : e.length;
      if (!o || t < 1) return [];

      for (var r = 0, s = 0, a = Array(y(o / t)); r < o;) {
        a[s++] = (0, f["default"])(e, r, r += t);
      }

      return a;
    };

    var w = n(24377),
        _ = n(49483),
        x = n(20520),
        N = n(16396);

    var I = o.createContext(void 0);
    var T = n(6914),
        B = n(50238),
        k = n(35149),
        P = n(87466);

    function D(e) {
      var t = e.index,
          s = e.color,
          c = e.selected,
          u = e.onSelect,
          _ref25 = (0, o.useState)(!1),
          _ref26 = _slicedToArray(_ref25, 2),
          p = _ref26[0],
          d = _ref26[1],
          h = (0, o.useContext)(I),
          _ref27 = (0, B.useRovingTabindexElement)(null),
          _ref28 = _slicedToArray(_ref27, 2),
          m = _ref28[0],
          v = _ref28[1],
          g = Boolean(h) && !_.CheckMobile.any();

      return o.createElement(o.Fragment, null, o.createElement("button", {
        ref: m,
        style: s ? {
          color: s
        } : void 0,
        className: r(P.swatch, i.PLATFORM_ACCESSIBILITY_ENABLED && P.accessible, p && P.hover, c && P.selected, !s && P.empty, String(s).toLowerCase() === T.white && P.white),
        onClick: function onClick() {
          u(s);
        },
        onContextMenu: g ? f : void 0,
        tabIndex: v,
        "data-role": "swatch"
      }), g && o.createElement(x.PopupMenu, {
        isOpened: p,
        onClose: f,
        position: function position() {
          var e = (0, l.ensureNotNull)(m.current).getBoundingClientRect();
          return {
            x: e.left,
            y: e.top + e.height + 4
          };
        },
        onClickOutside: f
      }, o.createElement(N.PopupMenuItem, {
        className: P.contextItem,
        label: a.t(null, void 0, n(54336)),
        icon: k,
        onClick: function onClick() {
          f(), (0, l.ensureDefined)(h)(t);
        },
        dontClosePopup: !0
      })));

      function f() {
        d(!p);
      }
    }

    function L(e) {
      var t = e.colors,
          n = e.color,
          r = e.children,
          s = e.onSelect;
      if (!t) return null;
      var a = n ? (0, w.parseRgb)(String(n)) : void 0,
          i = S(t, 10);
      return o.createElement("div", {
        className: P.swatches
      }, i.map(function (e, t) {
        return o.createElement("div", {
          className: P.row,
          "data-role": "row",
          key: t
        }, e.map(function (e, t) {
          return o.createElement(D, {
            key: String(e) + t,
            index: t,
            color: e,
            selected: a && (0, w.areEqualRgb)(a, (0, w.parseRgb)(String(e))),
            onSelect: l
          });
        }));
      }), r);

      function l(e) {
        s && s(e);
      }
    }

    var M = n(54368),
        O = n(94720);

    function F(e) {
      var t = "Invalid RGB color: ".concat(e);
      if (null === e) throw new Error(t);
      var n = e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
      if (null === n) throw new Error(t);

      var _n6 = _slicedToArray(n, 4),
          o = _n6[1],
          r = _n6[2],
          s = _n6[3];

      if (!o || !r || !s) throw new Error(t);
      var a = parseInt(o, 16) / 255,
          i = parseInt(r, 16) / 255,
          l = parseInt(s, 16) / 255,
          c = Math.max(a, i, l),
          u = Math.min(a, i, l);
      var p;
      var d = c,
          h = c - u,
          m = 0 === c ? 0 : h / c;
      if (c === u) p = 0;else {
        switch (c) {
          case a:
            p = (i - l) / h + (i < l ? 6 : 0);
            break;

          case i:
            p = (l - a) / h + 2;
            break;

          case l:
            p = (a - i) / h + 4;
            break;

          default:
            p = 0;
        }

        p /= 6;
      }
      return {
        h: p,
        s: m,
        v: d
      };
    }

    var V = n(43370),
        A = n(35257);

    var R =
    /*#__PURE__*/
    function (_o$PureComponent5) {
      _inherits(R, _o$PureComponent5);

      function R() {
        var _this4;

        _classCallCheck(this, R);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(R).apply(this, arguments)), _this4._container = null, _this4._refContainer = function (e) {
          _this4._container = e;
        }, _this4._handlePosition = function (e) {
          var _this4$props = _this4.props,
              t = _this4$props.hsv.h,
              n = _this4$props.onChange;
          if (!n) return;
          var o = (0, l.ensureNotNull)(_this4._container).getBoundingClientRect(),
              r = e.clientX - o.left,
              s = e.clientY - o.top;
          var a = r / o.width;
          a < 0 ? a = 0 : a > 1 && (a = 1);
          var i = 1 - s / o.height;
          i < 0 ? i = 0 : i > 1 && (i = 1), n({
            h: t,
            s: a,
            v: i
          });
        }, _this4._mouseDown = function (e) {
          window.addEventListener("mouseup", _this4._mouseUp), window.addEventListener("mousemove", _this4._mouseMove);
        }, _this4._mouseUp = function (e) {
          window.removeEventListener("mousemove", _this4._mouseMove), window.removeEventListener("mouseup", _this4._mouseUp), _this4._handlePosition(e);
        }, _this4._mouseMove = (0, V["default"])(_this4._handlePosition, 100), _this4._handleTouch = function (e) {
          _this4._handlePosition(e.nativeEvent.touches[0]);
        };
        return _this4;
      }

      _createClass(R, [{
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              e = _this$props3.className,
              _this$props3$hsv = _this$props3.hsv,
              t = _this$props3$hsv.h,
              n = _this$props3$hsv.s,
              r = _this$props3$hsv.v,
              a = "hsl(".concat(360 * t, ", 100%, 50%)");
          return o.createElement("div", {
            className: s()(A.saturation, e),
            style: {
              backgroundColor: a
            },
            ref: this._refContainer,
            onMouseDown: this._mouseDown,
            onTouchStart: this._handleTouch,
            onTouchMove: this._handleTouch
          }, o.createElement("div", {
            className: A.pointer,
            style: {
              left: 100 * n + "%",
              top: 100 * (1 - r) + "%"
            }
          }));
        }
      }]);

      return R;
    }(o.PureComponent);

    var W = n(1369);

    var q =
    /*#__PURE__*/
    function (_o$PureComponent6) {
      _inherits(q, _o$PureComponent6);

      function q() {
        var _this5;

        _classCallCheck(this, q);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(q).apply(this, arguments)), _this5._container = null, _this5._refContainer = function (e) {
          _this5._container = e;
        }, _this5._handlePosition = function (e) {
          var _this5$props = _this5.props,
              _this5$props$hsv = _this5$props.hsv,
              t = _this5$props$hsv.s,
              n = _this5$props$hsv.v,
              o = _this5$props.onChange;
          if (!o) return;
          var r = (0, l.ensureNotNull)(_this5._container).getBoundingClientRect();
          var s = (e.clientY - r.top) / r.height;
          s < 0 ? s = 0 : s > 1 && (s = 1), o({
            h: s,
            s: t,
            v: n
          });
        }, _this5._mouseDown = function (e) {
          window.addEventListener("mouseup", _this5._mouseUp), window.addEventListener("mousemove", _this5._mouseMove);
        }, _this5._mouseUp = function (e) {
          window.removeEventListener("mousemove", _this5._mouseMove), window.removeEventListener("mouseup", _this5._mouseUp), _this5._handlePosition(e);
        }, _this5._mouseMove = (0, V["default"])(_this5._handlePosition, 100), _this5._handleTouch = function (e) {
          _this5._handlePosition(e.nativeEvent.touches[0]);
        };
        return _this5;
      }

      _createClass(q, [{
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              e = _this$props4.className,
              t = _this$props4.hsv.h;
          return o.createElement("div", {
            className: s()(W.hue, e)
          }, o.createElement("div", {
            className: W.pointerContainer,
            ref: this._refContainer,
            onMouseDown: this._mouseDown,
            onTouchStart: this._handleTouch,
            onTouchMove: this._handleTouch
          }, o.createElement("div", {
            className: W.pointer,
            style: {
              top: 100 * t + "%"
            }
          })));
        }
      }]);

      return q;
    }(o.PureComponent);

    var z = n(80679);
    var U = "#000000",
        Z = a.t(null, {
      context: "Color Picker"
    }, n(40276));

    var Y =
    /*#__PURE__*/
    function (_o$PureComponent7) {
      _inherits(Y, _o$PureComponent7);

      function Y(e) {
        var _this6;

        _classCallCheck(this, Y);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this, e)), _this6._inputRef = o.createRef(), _this6._handleHSV = function (e) {
          var t = function (e) {
            var t = e.h,
                n = e.s,
                o = e.v;
            var r, s, a;
            var i = Math.floor(6 * t),
                l = 6 * t - i,
                c = o * (1 - n),
                u = o * (1 - l * n),
                p = o * (1 - (1 - l) * n);

            switch (i % 6) {
              case 0:
                r = o, s = p, a = c;
                break;

              case 1:
                r = u, s = o, a = c;
                break;

              case 2:
                r = c, s = o, a = p;
                break;

              case 3:
                r = c, s = u, a = o;
                break;

              case 4:
                r = p, s = c, a = o;
                break;

              case 5:
                r = o, s = c, a = u;
                break;

              default:
                r = 0, s = 0, a = 0;
            }

            return "#" + [255 * r, 255 * s, 255 * a].map(function (e) {
              return ("0" + Math.round(e).toString(16)).replace(/.+?([a-f0-9]{2})$/i, "$1");
            }).join("");
          }(e) || U;

          _this6.setState({
            color: t,
            inputColor: t.replace(/^#/, ""),
            hsv: e
          }), _this6.props.onSelect(t);
        }, _this6._handleInput = function (e) {
          var t = e.currentTarget.value;

          try {
            var _e4 = F(t),
                _n7 = "#".concat(t);

            _this6.setState({
              color: _n7,
              inputColor: t,
              hsv: _e4
            }), _this6.props.onSelect(_n7);
          } catch (e) {
            _this6.setState({
              inputColor: t
            });
          }
        }, _this6._handleAddColor = function () {
          return _this6.props.onAdd(_this6.state.color);
        };
        var t = e.color || U;
        _this6.state = {
          color: t,
          inputColor: t.replace(/^#/, ""),
          hsv: F(t)
        };
        return _this6;
      }

      _createClass(Y, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e;
          i.PLATFORM_ACCESSIBILITY_ENABLED && !_.CheckMobile.any() && (null === (e = this._inputRef.current) || void 0 === e || e.focus());
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              e = _this$state.color,
              t = _this$state.hsv,
              n = _this$state.inputColor;
          return o.createElement("div", {
            className: z.container
          }, o.createElement("div", {
            className: z.form
          }, o.createElement("div", {
            className: z.swatch,
            style: {
              backgroundColor: e
            }
          }), o.createElement("div", {
            className: z.inputWrap
          }, o.createElement("span", {
            className: z.inputHash
          }, "#"), o.createElement("input", {
            ref: this._inputRef,
            type: "text",
            className: z.input,
            value: n,
            onChange: this._handleInput
          })), o.createElement("div", {
            className: z.buttonWrap
          }, o.createElement(O.Button, {
            size: "s",
            onClick: this._handleAddColor
          }, Z))), o.createElement("div", {
            className: z.hueSaturationWrap
          }, o.createElement(R, {
            className: z.saturation,
            hsv: t,
            onChange: this._handleHSV
          }), o.createElement(q, {
            className: z.hue,
            hsv: t,
            onChange: this._handleHSV
          })));
        }
      }]);

      return Y;
    }(o.PureComponent);

    var G = n(93402);
    var H = a.t(null, {
      context: "Color Picker"
    }, n(53585)),
        K = a.t(null, {
      context: "Color Picker"
    }, n(81865));

    function $(e) {
      var t = e.color,
          n = e.opacity,
          r = e.selectCustom,
          a = e.selectOpacity,
          l = e.customColors,
          c = e.onRemoveCustomColor,
          u = e.onToggleCustom,
          p = e.onOpacityChange,
          h = e.menu,
          _ref29 = (0, o.useState)(!1),
          _ref30 = _slicedToArray(_ref29, 2),
          m = _ref30[0],
          v = _ref30[1],
          g = "number" == typeof n ? n : 1,
          _d3 = d(),
          _d4 = _slicedToArray(_d3, 2),
          f = _d4[0],
          b = _d4[1];

      return (0, o.useLayoutEffect)(function () {
        h && h.update();
      }, [a, h]), m ? o.createElement(Y, {
        color: t,
        onSelect: C,
        onAdd: function onAdd(t) {
          v(!1), null == u || u(!1);
          var n = e.onAddColor;
          n && n(t);
        }
      }) : o.createElement("div", {
        className: G.container
      }, o.createElement("div", {
        ref: f,
        onKeyDown: b
      }, o.createElement(L, {
        colors: T.basic,
        color: t,
        onSelect: C
      }), o.createElement(L, {
        colors: T.extended,
        color: t,
        onSelect: C
      }), o.createElement("div", {
        className: G.separator
      }), o.createElement(I.Provider, {
        value: c
      }, o.createElement(L, {
        colors: l,
        color: t,
        onSelect: C
      }, r && o.createElement(o.Fragment, null, i.PLATFORM_ACCESSIBILITY_ENABLED ? (null == l ? void 0 : l.length) ? o.createElement("button", {
        title: H,
        onClick: y,
        className: s()(G.customButton, G.accessible, "apply-common-tooltip"),
        tabIndex: -1
      }) : o.createElement("div", {
        "data-role": "row"
      }, o.createElement("button", {
        title: H,
        onClick: y,
        className: s()(G.customButton, G.accessible, "apply-common-tooltip"),
        tabIndex: -1
      })) : o.createElement("div", {
        className: s()(G.customButton, "apply-common-tooltip"),
        onClick: y,
        title: H,
        tabIndex: -1
      }))))), a && o.createElement(o.Fragment, null, o.createElement("div", {
        className: G.sectionTitle
      }, K), o.createElement(M.Opacity, {
        color: t,
        opacity: g,
        onChange: function onChange(e) {
          p && p(e);
        }
      })));

      function C(t) {
        var n = e.onColorChange;
        n && n(t, m);
      }

      function y(e) {
        v(!0), null == u || u(!0);
      }
    }
  },
  54368: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Opacity: function Opacity() {
        return u;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(50151),
        a = n(37160),
        i = n(68335),
        l = n(16838),
        c = n(30099);

    var u =
    /*#__PURE__*/
    function (_o$PureComponent8) {
      _inherits(u, _o$PureComponent8);

      function u(e) {
        var _this7;

        _classCallCheck(this, u);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e)), _this7._container = null, _this7._pointer = null, _this7._raf = null, _this7._refContainer = function (e) {
          _this7._container = e;
        }, _this7._refPointer = function (e) {
          _this7._pointer = e;
        }, _this7._handlePosition = function (e) {
          null === _this7._raf && (_this7._raf = requestAnimationFrame(function () {
            var t = (0, s.ensureNotNull)(_this7._container),
                n = (0, s.ensureNotNull)(_this7._pointer),
                o = t.getBoundingClientRect(),
                r = n.offsetWidth,
                i = e.clientX - r / 2 - o.left,
                l = (0, a.clamp)(i / (o.width - r), 0, 1);
            _this7.setState({
              inputOpacity: Math.round(100 * l).toString()
            }), _this7.props.onChange(l), _this7._raf = null;
          }));
        }, _this7._onSliderClick = function (e) {
          _this7._handlePosition(e.nativeEvent), _this7._dragSubscribe();
        }, _this7._mouseUp = function (e) {
          _this7.setState({
            isPointerDragged: !1
          }), _this7._dragUnsubscribe(), _this7._handlePosition(e);
        }, _this7._mouseMove = function (e) {
          _this7.setState({
            isPointerDragged: !0
          }), _this7._handlePosition(e);
        }, _this7._onTouchStart = function (e) {
          _this7._handlePosition(e.nativeEvent.touches[0]);
        }, _this7._handleTouch = function (e) {
          _this7.setState({
            isPointerDragged: !0
          }), _this7._handlePosition(e.nativeEvent.touches[0]);
        }, _this7._handleTouchEnd = function () {
          _this7.setState({
            isPointerDragged: !1
          });
        }, _this7._handleInput = function (e) {
          var t = e.currentTarget.value,
              n = Number(t) / 100;
          _this7.setState({
            inputOpacity: t
          }), Number.isNaN(n) || n > 1 || _this7.props.onChange(n);
        }, _this7._handleKeyDown = function (e) {
          var t = (0, i.hashFromEvent)(e);
          if (37 !== t && 39 !== t) return;
          e.preventDefault();
          var n = Number(_this7.state.inputOpacity);
          37 === t && 0 !== n && _this7._changeOpacity(n - 1), 39 === t && 100 !== n && _this7._changeOpacity(n + 1);
        }, _this7.state = {
          inputOpacity: Math.round(100 * e.opacity).toString(),
          isPointerDragged: !1
        };
        return _this7;
      }

      _createClass(u, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), this._dragUnsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props5 = this.props,
              e = _this$props5.color,
              t = _this$props5.opacity,
              n = _this$props5.hideInput,
              s = _this$props5.disabled,
              _this$state2 = this.state,
              a = _this$state2.inputOpacity,
              i = _this$state2.isPointerDragged,
              u = {
            color: e || void 0
          };
          return o.createElement("div", {
            className: c.opacity
          }, o.createElement("div", {
            className: r(c.opacitySlider, l.PLATFORM_ACCESSIBILITY_ENABLED && c.accessible),
            style: u,
            tabIndex: l.PLATFORM_ACCESSIBILITY_ENABLED && !s ? 0 : -1,
            ref: this._refContainer,
            onMouseDown: this._onSliderClick,
            onTouchStart: this._onTouchStart,
            onTouchMove: this._handleTouch,
            onTouchEnd: this._handleTouchEnd,
            onKeyDown: this._handleKeyDown,
            "aria-disabled": s
          }, o.createElement("div", {
            className: c.opacitySliderGradient,
            style: {
              backgroundImage: "linear-gradient(90deg, transparent, ".concat(e, ")")
            }
          }), o.createElement("div", {
            className: c.opacityPointerWrap
          }, o.createElement("div", {
            className: r(c.pointer, i && c.dragged),
            style: {
              left: 100 * t + "%"
            },
            ref: this._refPointer
          }))), !n && o.createElement("div", {
            className: c.opacityInputWrap
          }, o.createElement("input", {
            type: "text",
            className: c.opacityInput,
            value: a,
            onChange: this._handleInput
          }), o.createElement("span", {
            className: c.opacityInputPercent
          }, "%")));
        }
      }, {
        key: "_dragSubscribe",
        value: function _dragSubscribe() {
          var e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e && (e.addEventListener("mouseup", this._mouseUp), e.addEventListener("mousemove", this._mouseMove));
        }
      }, {
        key: "_dragUnsubscribe",
        value: function _dragUnsubscribe() {
          var e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e && (e.removeEventListener("mousemove", this._mouseMove), e.removeEventListener("mouseup", this._mouseUp));
        }
      }, {
        key: "_changeOpacity",
        value: function _changeOpacity(e) {
          this.setState({
            inputOpacity: e.toString()
          }), this.props.onChange(e / 100);
        }
      }]);

      return u;
    }(o.PureComponent);
  },
  6914: function _(e, t, n) {
    "use strict";

    n.d(t, {
      basic: function basic() {
        return i;
      },
      extended: function extended() {
        return c;
      },
      white: function white() {
        return r;
      }
    });
    var o = n(48891);
    var r = o.colorsPalette["color-white"],
        s = ["ripe-red", "tan-orange", "banana-yellow", "iguana-green", "minty-green", "sky-blue", "tv-blue", "deep-blue", "grapes-purple", "berry-pink"],
        a = [200, 300, 400, 500, 600, 700, 800, 900].map(function (e) {
      return "color-cold-gray-".concat(e);
    });
    a.unshift("color-white"), a.push("color-black"), s.forEach(function (e) {
      a.push("color-".concat(e, "-500"));
    });
    var i = a.map(function (e) {
      return o.colorsPalette[e];
    }),
        l = [];
    [100, 200, 300, 400, 700, 900].forEach(function (e) {
      s.forEach(function (t) {
        l.push("color-".concat(t, "-").concat(e));
      });
    });
    var c = l.map(function (e) {
      return o.colorsPalette[e];
    });
  },
  59054: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlDisclosureView: function ControlDisclosureView() {
        return g;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(38528),
        i = n(67029),
        l = n(78274),
        c = n(4523),
        u = n(9745),
        p = n(2948),
        d = n(23428);

    function h(e) {
      var t = e.isDropped;
      return o.createElement(u.Icon, {
        className: s()(d.icon, t && d.dropped),
        icon: p
      });
    }

    function m(e) {
      var t = e.className,
          n = e.disabled,
          r = e.isDropped;
      return o.createElement("span", {
        className: s()(d.button, n && d.disabled, t)
      }, o.createElement(h, {
        isDropped: r
      }));
    }

    var v = n(66986);
    var g = o.forwardRef(function (e, t) {
      var n = e.listboxId,
          r = e.className,
          u = e.listboxClassName,
          p = e.listboxTabIndex,
          d = e.hideArrowButton,
          h = e.matchButtonAndListboxWidths,
          g = e.popupPosition,
          f = e.disabled,
          b = e.isOpened,
          C = e.scrollWrapReference,
          y = e.repositionOnScroll,
          E = e.closeOnHeaderOverlap,
          S = e.listboxReference,
          _e$size = e.size,
          w = _e$size === void 0 ? "small" : _e$size,
          _ = e.onClose,
          x = e.onOpen,
          N = e.onListboxFocus,
          I = e.onListboxBlur,
          T = e.onListboxKeyDown,
          B = e.buttonChildren,
          k = e.children,
          P = e.caretClassName,
          D = e.listboxAria,
          L = _objectWithoutProperties(e, ["listboxId", "className", "listboxClassName", "listboxTabIndex", "hideArrowButton", "matchButtonAndListboxWidths", "popupPosition", "disabled", "isOpened", "scrollWrapReference", "repositionOnScroll", "closeOnHeaderOverlap", "listboxReference", "size", "onClose", "onOpen", "onListboxFocus", "onListboxBlur", "onListboxKeyDown", "buttonChildren", "children", "caretClassName", "listboxAria"]),
          M = (0, o.useRef)(null),
          O = !d && o.createElement(l.EndSlot, null, o.createElement(m, {
        isDropped: b,
        disabled: f,
        className: P
      }));

      return o.createElement(c.PopupMenuDisclosureView, {
        buttonRef: M,
        listboxId: n,
        listboxClassName: u,
        listboxTabIndex: p,
        isOpened: b,
        onClose: _,
        onOpen: x,
        listboxReference: S,
        scrollWrapReference: C,
        onListboxFocus: N,
        onListboxBlur: I,
        onListboxKeyDown: T,
        listboxAria: D,
        matchButtonAndListboxWidths: h,
        popupPosition: g,
        button: o.createElement(i.ControlSkeleton, _objectSpread({}, L, {
          "data-role": "listbox",
          disabled: f,
          className: s()(v.button, r),
          size: w,
          ref: (0, a.useMergedRefs)([M, t]),
          middleSlot: o.createElement(l.MiddleSlot, null, o.createElement("span", {
            className: s()(v["button-children"], d && v.hiddenArrow)
          }, B)),
          endSlot: O
        })),
        popupChildren: k,
        repositionOnScroll: y,
        closeOnHeaderOverlap: E
      });
    });
    g.displayName = "ControlDisclosureView";
  },
  56512: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useCustomColors: function useCustomColors() {
        return l;
      }
    });
    var o = n(50959),
        r = n(56840),
        s = n(76422);

    function a(e, t) {
      (0, o.useEffect)(function () {
        return s.subscribe(e, t, null), function () {
          s.unsubscribe(e, t, null);
        };
      }, [e, t]);
    }

    var i = n(24377);

    function l() {
      var _ref31 = (0, o.useState)((0, r.getJSON)("pickerCustomColors", [])),
          _ref32 = _slicedToArray(_ref31, 2),
          e = _ref32[0],
          t = _ref32[1];

      a("add_new_custom_color", function (n) {
        return t(c(n, e));
      }), a("remove_custom_color", function (n) {
        return t(u(n, e));
      });
      var n = (0, o.useCallback)(function (t) {
        var n = t ? (0, i.parseRgb)(t) : null;
        e.some(function (e) {
          return null !== e && null !== n && (0, i.areEqualRgb)((0, i.parseRgb)(e), n);
        }) || (s.emit("add_new_custom_color", t), (0, r.setJSON)("pickerCustomColors", c(t, e)));
      }, [e]),
          l = (0, o.useCallback)(function (t) {
        (t >= 0 || t < e.length) && (s.emit("remove_custom_color", t), (0, r.setJSON)("pickerCustomColors", u(t, e)));
      }, [e]);
      return [e, n, l];
    }

    function c(e, t) {
      var n = t.slice();
      return n.push(e), n.length > 29 && n.shift(), n;
    }

    function u(e, t) {
      return t.filter(function (t, n) {
        return e !== n;
      });
    }
  },
  90405: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Select: function Select() {
        return C;
      }
    });
    var o = n(50959),
        r = n(22064),
        s = n(38528),
        a = n(16921),
        i = n(16396),
        l = n(12481),
        c = n(43370);
    var u = n(36762),
        p = n(26597),
        d = n(59054),
        h = n(36104),
        m = n(38223),
        v = n(60673);

    function g(e) {
      return !e.readonly;
    }

    function f(e, t) {
      var n;
      return null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : (0, r.createDomId)(e, "item", null == t ? void 0 : t.value);
    }

    function b(e) {
      var t, n;
      var r = e.selectedItem,
          s = e.placeholder;
      if (!r) return o.createElement("span", {
        className: v.placeholder
      }, s);
      var a = null !== (n = null !== (t = r.selectedContent) && void 0 !== t ? t : r.content) && void 0 !== n ? n : r.value;
      return o.createElement("span", null, a);
    }

    var C = o.forwardRef(function (e, t) {
      var n = e.id,
          v = e.menuClassName,
          C = e.menuItemClassName,
          y = e.tabIndex,
          E = e.disabled,
          S = e.highlight,
          w = e.intent,
          _ = e.hideArrowButton,
          x = e.placeholder,
          _e$addPlaceholderToIt = e.addPlaceholderToItems,
          N = _e$addPlaceholderToIt === void 0 ? !0 : _e$addPlaceholderToIt,
          I = e.value,
          T = e["aria-labelledby"],
          B = e.onFocus,
          k = e.onBlur,
          P = e.onClick,
          D = e.onChange,
          L = e.onKeyDown,
          _e$repositionOnScroll = e.repositionOnScroll,
          M = _e$repositionOnScroll === void 0 ? !0 : _e$repositionOnScroll,
          _e$openMenuOnEnter = e.openMenuOnEnter,
          O = _e$openMenuOnEnter === void 0 ? !0 : _e$openMenuOnEnter,
          F = e["aria-describedby"],
          V = e["aria-invalid"],
          A = _objectWithoutProperties(e, ["id", "menuClassName", "menuItemClassName", "tabIndex", "disabled", "highlight", "intent", "hideArrowButton", "placeholder", "addPlaceholderToItems", "value", "aria-labelledby", "onFocus", "onBlur", "onClick", "onChange", "onKeyDown", "repositionOnScroll", "openMenuOnEnter", "aria-describedby", "aria-invalid"]);

      var R = e.items;

      if (x && N) {
        R = [{
          value: void 0,
          content: x,
          id: (0, r.createDomId)(n, "placeholder")
        }].concat(_toConsumableArray(R));
      }

      var _ref33 = (0, h.useControlDisclosure)({
        id: n,
        disabled: E,
        buttonTabIndex: y,
        intent: w,
        highlight: S,
        onFocus: B,
        onBlur: k,
        onClick: P
      }),
          W = _ref33.listboxId,
          q = _ref33.isOpened,
          z = _ref33.isFocused,
          U = _ref33.buttonTabIndex,
          Z = _ref33.listboxTabIndex,
          Y = _ref33.highlight,
          G = _ref33.intent,
          H = _ref33.open,
          K = _ref33.onOpen,
          $ = _ref33.close,
          j = _ref33.toggle,
          X = _ref33.buttonFocusBindings,
          Q = _ref33.onButtonClick,
          J = _ref33.buttonRef,
          ee = _ref33.listboxRef,
          te = _ref33.buttonAria,
          ne = R.filter(g),
          oe = ne.find(function (e) {
        return e.value === I;
      }),
          _ref34 = (0, a.useKeepActiveItemIntoView)({
        activeItem: oe
      }),
          _ref35 = _slicedToArray(_ref34, 3),
          re = _ref35[0],
          se = _ref35[1],
          ae = _ref35[2],
          ie = (0, r.joinDomIds)(T, n),
          le = ie.length > 0 ? ie : void 0,
          ce = (0, o.useMemo)(function () {
        return {
          role: "listbox",
          "aria-labelledby": T,
          "aria-activedescendant": f(n, oe)
        };
      }, [T, oe]),
          ue = (0, o.useCallback)(function (e) {
        return e.value === I;
      }, [I]),
          pe = (0, o.useCallback)(function (e) {
        return D && D(e.value);
      }, [D]),
          de = (0, u.useItemsKeyboardNavigation)(m.isRtl, ne, ue, pe, !1, {
        next: [40],
        previous: [38]
      }),
          he = (0, p.useKeyboardToggle)(j, q || O),
          me = (0, p.useKeyboardClose)(q, $),
          ve = (0, p.useKeyboardOpen)(q, H),
          ge = (0, p.useKeyboardEventHandler)([he, me, ve]),
          fe = (0, p.useKeyboardEventHandler)([de, he, me]),
          be = function (e) {
        var t = (0, o.useRef)(""),
            n = (0, o.useMemo)(function () {
          return (0, l["default"])(function () {
            t.current = "";
          }, 500);
        }, []),
            r = (0, o.useMemo)(function () {
          return (0, c["default"])(e, 200);
        }, [e]);
        return (0, o.useCallback)(function (e) {
          e.key.length > 0 && e.key.length < 3 && (t.current += e.key, r(t.current, e), n());
        }, [n, r]);
      }(function (t, n) {
        var o = function (e, t, n) {
          return e.find(function (e) {
            var o;
            var r = t.toLowerCase();
            return !e.readonly && (n ? n(e).toLowerCase().startsWith(r) : !e.readonly && ("string" == typeof e.content && e.content.toLowerCase().startsWith(r) || "string" == typeof e.textContent && e.textContent.toLowerCase().startsWith(r) || String(null !== (o = e.value) && void 0 !== o ? o : "").toLowerCase().startsWith(r)));
          });
        }(ne, t, e.getSearchKey);

        void 0 !== o && D && (n.stopPropagation(), q || H(), D(o.value));
      });

      return o.createElement(d.ControlDisclosureView, _objectSpread({}, A, {}, te, {}, X, {
        id: n,
        role: "button",
        tabIndex: U,
        "aria-owns": te["aria-controls"],
        "aria-haspopup": "listbox",
        "aria-labelledby": le,
        disabled: E,
        hideArrowButton: _,
        isFocused: z,
        isOpened: q,
        highlight: Y,
        intent: G,
        ref: (0, s.useMergedRefs)([J, t]),
        onClick: Q,
        onOpen: function onOpen() {
          ae(oe, {
            duration: 0
          }), K();
        },
        onClose: $,
        onKeyDown: function onKeyDown(e) {
          ge(e), L && L(e);
          e.defaultPrevented || be(e);
        },
        listboxId: W,
        listboxTabIndex: Z,
        listboxClassName: v,
        listboxAria: ce,
        "aria-describedby": F,
        "aria-invalid": V,
        listboxReference: ee,
        scrollWrapReference: re,
        onListboxKeyDown: function onListboxKeyDown(e) {
          fe(e), e.defaultPrevented || be(e);
        },
        buttonChildren: o.createElement(b, {
          selectedItem: oe,
          placeholder: x
        }),
        repositionOnScroll: M
      }), R.map(function (e, t) {
        var r;
        if (e.readonly) return o.createElement(o.Fragment, {
          key: "readonly_item_".concat(t)
        }, e.content);
        var s = f(n, e);
        return o.createElement(i.PopupMenuItem, {
          key: s,
          id: s,
          className: C,
          role: "option",
          "aria-selected": I === e.value,
          isActive: I === e.value,
          label: null !== (r = e.content) && void 0 !== r ? r : e.value,
          onClick: Ce,
          onClickArg: e.value,
          isDisabled: e.disabled,
          reference: function reference(t) {
            return se(e, t);
          }
        });
      }));

      function Ce(e) {
        D && D(e);
      }
    });
    C.displayName = "Select";
  },
  86656: function _(e, t, n) {
    "use strict";

    n.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return i;
      }
    });
    var o = n(50959),
        r = n(59142),
        s = n(50151),
        a = n(49483);
    var i = (0, o.forwardRef)(function (e, t) {
      var n = e.children,
          s = _objectWithoutProperties(e, ["children"]),
          i = (0, o.useRef)(null);

      return (0, o.useImperativeHandle)(t, function () {
        return i.current;
      }), (0, o.useLayoutEffect)(function () {
        if (a.CheckMobile.iOS()) return null !== i.current && (0, r.disableBodyScroll)(i.current, {
          allowTouchMove: l(i)
        }), function () {
          null !== i.current && (0, r.enableBodyScroll)(i.current);
        };
      }, []), o.createElement("div", _objectSpread({
        ref: i
      }, s), n);
    });

    function l(e) {
      return function (t) {
        var n = (0, s.ensureNotNull)(e.current),
            o = document.activeElement;
        return !n.contains(t) || null !== o && n.contains(o) && o.contains(t);
      };
    }
  },
  26278: function _(e) {
    e.exports = {
      titleWrap: "titleWrap-Izz3hpJc",
      groupFooter: "groupFooter-Izz3hpJc"
    };
  },
  49934: function _(e) {
    e.exports = {
      wrapper: "wrapper-JXHzsa7P"
    };
  },
  17611: function _(e) {
    e.exports = {
      inlineRow: "inlineRow-D8g11qqA"
    };
  },
  93071: function _(e) {
    e.exports = {
      container: "container-QyF09i7Y",
      hasTooltip: "hasTooltip-QyF09i7Y",
      datePickerWrapper: "datePickerWrapper-QyF09i7Y",
      timePickerWrapper: "timePickerWrapper-QyF09i7Y"
    };
  },
  27698: function _(e) {
    e.exports = {
      input: "input-ZOx_CVY3",
      symbol: "symbol-ZOx_CVY3",
      checkbox: "checkbox-ZOx_CVY3",
      label: "label-ZOx_CVY3",
      dropdownMenu: "dropdownMenu-ZOx_CVY3",
      sessionStart: "sessionStart-ZOx_CVY3",
      sessionEnd: "sessionEnd-ZOx_CVY3",
      sessionInputContainer: "sessionInputContainer-ZOx_CVY3",
      sessionDash: "sessionDash-ZOx_CVY3",
      inputGroup: "inputGroup-ZOx_CVY3",
      textarea: "textarea-ZOx_CVY3",
      inlineGroup: "inlineGroup-ZOx_CVY3",
      hasTooltip: "hasTooltip-ZOx_CVY3"
    };
  },
  24712: function _(e) {
    e.exports = {
      content: "content-tBgV1m0B",
      cell: "cell-tBgV1m0B",
      inner: "inner-tBgV1m0B",
      first: "first-tBgV1m0B",
      inlineCell: "inlineCell-tBgV1m0B",
      fill: "fill-tBgV1m0B",
      top: "top-tBgV1m0B",
      topCenter: "topCenter-tBgV1m0B",
      offset: "offset-tBgV1m0B",
      inlineRow: "inlineRow-tBgV1m0B",
      grouped: "grouped-tBgV1m0B",
      separator: "separator-tBgV1m0B",
      groupSeparator: "groupSeparator-tBgV1m0B",
      big: "big-tBgV1m0B",
      adaptive: "adaptive-tBgV1m0B",
      checkableTitle: "checkableTitle-tBgV1m0B"
    };
  },
  80128: function _(e) {
    e.exports = {
      wrap: "wrap-QutFvTLS",
      labelWrap: "labelWrap-QutFvTLS",
      label: "label-QutFvTLS",
      hasTooltip: "hasTooltip-QutFvTLS"
    };
  },
  82161: function _(e, t, n) {
    "use strict";

    n.d(t, {
      splitThousands: function splitThousands() {
        return r;
      }
    });
    var o = n(50335);

    function r(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "&nbsp;";
      var n = e + "";
      -1 !== n.indexOf("e") && (n = function (e) {
        return (0, o.fixComputationError)(e).toFixed(10).replace(/\.?0+$/, "");
      }(Number(e)));
      var r = n.split(".");
      return r[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (r[1] ? "." + r[1] : "");
    }
  },
  71468: function _(e, t, n) {
    "use strict";

    function o(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
    }

    function r(e) {
      e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
    }

    n.d(t, {
      becomeMainElement: function becomeMainElement() {
        return o;
      },
      becomeSecondaryElement: function becomeSecondaryElement() {
        return r;
      }
    });
  },
  83207: function _(e, t, n) {
    "use strict";

    n.d(t, {
      bind: function bind() {
        return a;
      },
      setter: function setter() {
        return i;
      }
    });
    var o = n(50959),
        r = n(76917),
        s = n(27365);

    function a(e) {
      var t;
      return t =
      /*#__PURE__*/
      function (_o$PureComponent9) {
        _inherits(t, _o$PureComponent9);

        function t() {
          var _this8;

          _classCallCheck(this, t);

          _this8 = _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments)), _this8._onChange = function (e, t, n) {
            var o = _this8.context.setValue,
                r = _this8.props.onChange;
            i(o, r)(e, t, n);
          };
          return _this8;
        }

        _createClass(t, [{
          key: "render",
          value: function render() {
            var t = this.props.input,
                _this$context = this.context,
                n = _this$context.values,
                r = _this$context.model;
            return o.createElement(e, _objectSpread({}, this.props, {
              value: n[t.id],
              tzName: (0, s.getTimezoneName)(r),
              onChange: this._onChange
            }));
          }
        }]);

        return t;
      }(o.PureComponent), t.contextType = r.PropertyContext, t;
    }

    function i(e, t) {
      return function (n, o, r) {
        e(o, n, r), t && t(n, o, r);
      };
    }
  },
  76917: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PropertyContainer: function PropertyContainer() {
        return u;
      },
      PropertyContext: function PropertyContext() {
        return c;
      }
    });
    var o = n(50959),
        r = n(50151),
        s = n(44352),
        a = n(36298);
    var i = (0, n(59224).getLogger)("Platform.GUI.StudyInputPropertyContainer"),
        l = new a.TranslatedString("change {propertyName} property", s.t(null, void 0, n(18567))),
        c = o.createContext(null);

    var u =
    /*#__PURE__*/
    function (_o$PureComponent10) {
      _inherits(u, _o$PureComponent10);

      function u(e) {
        var _this9;

        _classCallCheck(this, u);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e)), _this9._setValue = function (e, t, o) {
          var _this9$props = _this9.props,
              c = _this9$props.property,
              u = _this9$props.model,
              p = (0, r.ensureDefined)(c.child(e));
          i.logNormal("Changing property \"".concat(e, "\" value from \"").concat(c.value(), "\" to \"").concat(t, "\""));
          var d = new a.TranslatedString(o, function (e) {
            return s.t(e, {
              context: "input"
            }, n(88601));
          }(o));
          u.setProperty(p, t, l.format({
            propertyName: d
          }));
        };
        var t = e.property,
            o = {};
        t.childNames().forEach(function (e) {
          var n = (0, r.ensureDefined)(t.child(e));
          o.hasOwnProperty(e) || (o[e] = n.value());
        }), _this9.state = o;
        return _this9;
      }

      _createClass(u, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this10 = this;

          var _this$props6 = this.props,
              e = _this$props6.property,
              t = _this$props6.onStudyInputChange;
          e.childNames().forEach(function (n) {
            (0, r.ensureDefined)(e.child(n)).subscribe(_this10, function (e) {
              var o = e.value();
              i.logNormal("Property \"".concat(n, "\" updated to value \"").concat(o, "\"")), _this10.setState(_defineProperty({}, n, o)), null == t || t(o, n);
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this11 = this;

          var e = this.props.property;
          e.childNames().forEach(function (t) {
            (0, r.ensureDefined)(e.child(t)).unsubscribeAll(_this11);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props7 = this.props,
              e = _this$props7.study,
              t = _this$props7.model,
              n = _this$props7.children,
              r = {
            study: e,
            model: t,
            values: this.state,
            setValue: this._setValue
          };
          return o.createElement(c.Provider, {
            value: r
          }, n);
        }
      }]);

      return u;
    }(o.PureComponent);
  },
  51717: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ModelContext: function ModelContext() {
        return r;
      },
      bindModel: function bindModel() {
        return s;
      }
    });
    var o = n(50959);
    var r = o.createContext(null);

    function s(e, t) {
      return o.createElement(r.Consumer, null, function (n) {
        return n ? o.createElement(e, _objectSpread({}, Object.assign({
          model: n
        }, t))) : null;
      });
    }
  },
  41594: function _(e, t, n) {
    "use strict";

    n.d(t, {
      StylePropertyContainer: function StylePropertyContainer() {
        return a;
      },
      StylePropertyContext: function StylePropertyContext() {
        return s;
      },
      bindPropertyContext: function bindPropertyContext() {
        return i;
      }
    });
    var o = n(50959),
        r = n(51717);
    var s = o.createContext(null);

    var a =
    /*#__PURE__*/
    function (_o$PureComponent11) {
      _inherits(a, _o$PureComponent11);

      function a() {
        var _this12;

        _classCallCheck(this, a);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments)), _this12._setValue = function (e, t, n) {
          var o = _this12.props.model;
          o.setProperty(e, t, n);
        };
        return _this12;
      }

      _createClass(a, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this13 = this;

          var e = this.props.property;
          e.subscribe(this, function () {
            return _this13.forceUpdate();
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e = this.props.property;
          e.unsubscribeAll(this);
        }
      }, {
        key: "render",
        value: function render() {
          var e = {
            setValue: this._setValue
          };
          return o.createElement(s.Provider, {
            value: e
          }, this.props.children);
        }
      }]);

      return a;
    }(o.PureComponent);

    function i(e, t) {
      return (0, r.bindModel)(function (_ref36) {
        var n = _ref36.model;
        return o.createElement(a, {
          model: n,
          property: t.property
        }, o.createElement(e, _objectSpread({}, t)));
      }, t);
    }
  },
  76694: function _(e, t, n) {
    "use strict";

    n.d(t, {
      IconGroupWrapper: function IconGroupWrapper() {
        return s;
      }
    });
    var o = n(50959),
        r = n(49934);

    function s(e) {
      var t = e.children;
      return o.createElement("div", {
        className: r.wrapper
      }, t);
    }
  },
  39847: function _(e, t, n) {
    "use strict";

    n.d(t, {
      InputTooltip: function InputTooltip() {
        return E;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(9745),
        i = n(5325);

    function l() {
      var _ref37 = (0, o.useState)(!1),
          _ref38 = _slicedToArray(_ref37, 2),
          e = _ref38[0],
          t = _ref38[1];

      return (0, o.useEffect)(function () {
        t(i.mobiletouch);
      }, []), e;
    }

    var c = n(38952),
        u = n(38528),
        p = n(82353),
        d = n(27941),
        h = n(99084),
        m = n(30162),
        v = n(78370),
        g = n.n(v);
    var f = {
      info: d,
      question: p,
      check: h,
      exclamation: m
    };

    function b(e) {
      return o.createElement("span", _objectSpread({}, (0, c.renameRef)(e), {
        className: r(e.className, g()["no-active-state"])
      }));
    }

    function C(e) {
      var t = e.icon,
          _e$intent = e.intent,
          n = _e$intent === void 0 ? "default" : _e$intent,
          i = e.ariaLabel,
          c = e.tooltip,
          p = e.className,
          d = e.reference,
          _e$showTooltipOnTouch = e.showTooltipOnTouch,
          h = _e$showTooltipOnTouch === void 0 ? !0 : _e$showTooltipOnTouch,
          _e$renderComponent = e.renderComponent,
          m = _e$renderComponent === void 0 ? b : _e$renderComponent,
          v = e.showTooltip,
          C = e.hideTooltip,
          y = e.onFocus,
          E = e.onBlur,
          S = e.onClick,
          w = e.tabIndex,
          _ = l() ? h : Boolean(c),
          x = o.useRef(null),
          N = (0, u.useMergedRefs)([d, x]),
          I = function (e) {
        var _e$tabIndex2 = e.tabIndex,
            t = _e$tabIndex2 === void 0 ? 0 : _e$tabIndex2,
            n = e.showTooltip,
            r = e.hideTooltip,
            s = e.onFocus,
            a = e.onBlur,
            i = e.onClick,
            c = e.ref,
            u = l();
        return {
          onBlur: (0, o.useCallback)(function (e) {
            r && r(), a && a(e);
          }, [r, a]),
          onFocus: (0, o.useCallback)(function (e) {
            n && n(e.currentTarget, {
              tooltipDelay: 200
            }), s && s(e);
          }, [n, s]),
          onClick: (0, o.useCallback)(function (e) {
            var t;
            u && (null === (t = c.current) || void 0 === t || t.focus()), i && i(e);
          }, [i]),
          tabIndex: t
        };
      }({
        showTooltip: v,
        hideTooltip: C,
        onFocus: y,
        onBlur: E,
        onClick: S,
        ref: x,
        tabIndex: w
      }),
          T = o.useMemo(function () {
        return function (e, t) {
          return t ? f[t] : "success" === e ? f.check : f.exclamation;
        }(n, t);
      }, [t, n]);

      return o.createElement(m, _objectSpread({
        className: r(p, g()["icon-wrapper"], g()["intent-".concat(n)], _ && c && g()["with-tooltip"], _ && c && "apply-common-tooltip"),
        title: _ ? c : void 0,
        "aria-label": i,
        reference: N
      }, (0, s.filterDataProps)(e), {}, I), o.createElement(a.Icon, {
        "aria-hidden": !0,
        icon: T,
        className: g().icon
      }));
    }

    var y = n(38780);

    function E(e) {
      var t = e.className,
          n = e.title;
      return o.createElement(C, {
        icon: "info",
        className: t,
        ariaLabel: n,
        showTooltip: y.showOnElement,
        hideTooltip: y.hide,
        tooltip: n,
        tabIndex: -1
      });
    }
  },
  12949: function _(e, t, n) {
    "use strict";

    n.d(t, {
      InputRow: function InputRow() {
        return ne;
      }
    });
    var o = n(44352),
        r = n(50959),
        s = n(50151),
        a = n(33703),
        i = n(96438),
        l = n(47510),
        c = n(4781),
        u = n(97754),
        p = n.n(u),
        d = n(31261),
        h = n(83207),
        m = n(90009),
        v = n(27698);

    var g =
    /*#__PURE__*/
    function (_r$PureComponent) {
      _inherits(g, _r$PureComponent);

      function g() {
        var _this14;

        _classCallCheck(this, g);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this14._onChange = function (e) {
          var _this14$props = _this14.props,
              _this14$props$input = _this14$props.input,
              t = _this14$props$input.id,
              n = _this14$props$input.name,
              o = _this14$props.onChange;
          o(e.currentTarget.value, t, n);
        };
        return _this14;
      }

      _createClass(g, [{
        key: "render",
        value: function render() {
          var _this$props8 = this.props,
              e = _this$props8.input.defval,
              t = _this$props8.value,
              n = _this$props8.disabled,
              o = _this$props8.onBlur,
              s = _this$props8.onKeyDown,
              a = _this$props8.hasTooltip;
          return r.createElement(d.InputControl, {
            className: p()(v.input, a && v.hasTooltip),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
            maxLength: 4096
          });
        }
      }]);

      return g;
    }(r.PureComponent);

    var f = (0, m.debounced)(g),
        b = (0, h.bind)(f);
    var C = n(55141),
        y = n(11062);

    function E(e) {
      var t = e.className,
          n = (0, r.useContext)(y.PropertyTable.InlineRowContext);
      return r.createElement("div", {
        className: u(v.inputGroup, n && v.inlineGroup, t)
      }, e.children);
    }

    var S = n(36565);

    function w() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _Array$from = Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || []),
          _Array$from2 = _slicedToArray(_Array$from, 5),
          _Array$from2$ = _Array$from2[1],
          t = _Array$from2$ === void 0 ? "" : _Array$from2$,
          _Array$from2$2 = _Array$from2[2],
          n = _Array$from2$2 === void 0 ? "" : _Array$from2$2,
          _Array$from2$3 = _Array$from2[3],
          o = _Array$from2$3 === void 0 ? "" : _Array$from2$3,
          _Array$from2$4 = _Array$from2[4],
          r = _Array$from2$4 === void 0 ? "" : _Array$from2$4;

      return ["".concat(t, ":").concat(n), "".concat(o, ":").concat(r)];
    }

    var _ =
    /*#__PURE__*/
    function (_r$PureComponent2) {
      _inherits(_, _r$PureComponent2);

      function _(e) {
        var _this15;

        _classCallCheck(this, _);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, e)), _this15._onStartPick = function (e) {
          _this15.setState({
            startTime: e
          }, _this15._onChange);
        }, _this15._onEndPick = function (e) {
          _this15.setState({
            endTime: e
          }, _this15._onChange);
        }, _this15._onChange = function () {
          var _this15$props = _this15.props,
              _this15$props$input = _this15$props.input,
              e = _this15$props$input.id,
              t = _this15$props$input.name,
              n = _this15$props.onChange,
              _this15$state = _this15.state,
              o = _this15$state.startTime,
              r = _this15$state.endTime;
          n(o.replace(":", "") + "-" + r.replace(":", ""), e, t);
        };

        var t = e.value || e.input.defval,
            _w = w(t),
            _w2 = _slicedToArray(_w, 2),
            n = _w2[0],
            o = _w2[1];

        _this15.state = {
          prevValue: t,
          startTime: n,
          endTime: o
        };
        return _this15;
      }

      _createClass(_, [{
        key: "render",
        value: function render() {
          var _this$state3 = this.state,
              e = _this$state3.startTime,
              t = _this$state3.endTime,
              _this$props9 = this.props,
              n = _this$props9.hasTooltip,
              o = _this$props9.disabled;
          return r.createElement(E, {
            className: p()(n && v.hasTooltip)
          }, r.createElement("div", {
            className: v.sessionStart
          }, r.createElement(S.TimeInput, {
            className: p()(v.input, v.sessionInputContainer),
            name: "start",
            value: (0, s.ensureDefined)(e),
            onChange: this._onStartPick,
            disabled: o
          }), r.createElement("span", {
            className: v.sessionDash
          }, " — ")), r.createElement("div", {
            className: v.sessionEnd
          }, r.createElement(S.TimeInput, {
            className: p()(v.input, v.sessionInputContainer),
            name: "end",
            value: (0, s.ensureDefined)(t),
            onChange: this._onEndPick,
            disabled: o
          })));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          if (e.value === t.prevValue) return t;

          var _w3 = w(e.value),
              _w4 = _slicedToArray(_w3, 2),
              n = _w4[0],
              o = _w4[1];

          return {
            prevValue: e.value,
            startTime: n,
            endTime: o
          };
        }
      }]);

      return _;
    }(r.PureComponent);

    var x = (0, h.bind)(_);
    var N = n(14483),
        I = n(42856),
        T = n(37591),
        B = n(76917),
        k = n(90405);

    var P =
    /*#__PURE__*/
    function (_r$PureComponent3) {
      _inherits(P, _r$PureComponent3);

      function P() {
        var _this16;

        _classCallCheck(this, P);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(P).apply(this, arguments)), _this16._onChange = function (e) {
          var _this16$props = _this16.props,
              _this16$props$input = _this16$props.input,
              t = _this16$props$input.id,
              n = _this16$props$input.name,
              o = _this16$props.onChange;
          o(e, t, n);
        };
        return _this16;
      }

      _createClass(P, [{
        key: "render",
        value: function render() {
          var _this$props10 = this.props,
              _this$props10$input = _this$props10.input,
              e = _this$props10$input.id,
              t = _this$props10$input.defval,
              s = _this$props10$input.options,
              a = _this$props10$input.optionsTitles,
              i = _this$props10.value,
              l = _this$props10.disabled,
              c = _this$props10.hasTooltip,
              u = s.map(function (e) {
            var t = a && a[e] ? a[e] : e;
            return {
              value: e,
              content: o.t(t, {
                context: "input"
              }, n(88601))
            };
          }),
              d = void 0 !== i && s.includes(i) ? i : t;
          return r.createElement(k.Select, {
            id: e,
            className: p()(v.input, c && v.hasTooltip),
            menuClassName: v.dropdownMenu,
            value: d,
            items: u,
            onChange: this._onChange,
            disabled: l
          });
        }
      }]);

      return P;
    }(r.PureComponent);

    var D = (0, h.bind)(P);
    var L = n(73146),
        M = n(28853);
    var O = {
      open: o.t(null, void 0, n(38466)),
      high: o.t(null, void 0, n(39337)),
      low: o.t(null, void 0, n(3919)),
      close: o.t(null, void 0, n(36962)),
      hl2: o.t(null, void 0, n(91815)),
      hlc3: o.t(null, void 0, n(40771)),
      ohlc4: o.t(null, void 0, n(12504)),
      hlcc4: o.t(null, void 0, n(9523))
    };

    var F =
    /*#__PURE__*/
    function (_r$PureComponent4) {
      _inherits(F, _r$PureComponent4);

      function F() {
        _classCallCheck(this, F);

        return _possibleConstructorReturn(this, _getPrototypeOf(F).apply(this, arguments));
      }

      _createClass(F, [{
        key: "render",
        value: function render() {
          var e = this.props.input,
              _this$context2 = this.context,
              t = _this$context2.study,
              n = _this$context2.model;

          var o = _objectSpread({}, O);

          delete o.hlcc4;
          var i = (0, L.createAdapter)(t);

          if (t && this._isStudy(t) && t.isChildStudy()) {
            var _t3 = (0, a.getInputValue)(i.inputs()[e.id]),
                _n8 = i.parentSourceForInput(_t3);

            if ((0, M.isStudy)(_n8)) {
              var _t4 = _n8.title(T.TitleDisplayTarget.StatusLine),
                  _r8 = I.StudyMetaInfo.getChildSourceInputTitles(e, _n8.metaInfo(), _t4);

              o = _objectSpread({}, o, {}, _r8);
            }
          }

          if (N.enabled("study_on_study") && t && this._isStudy(t) && (t.isChildStudy() || I.StudyMetaInfo.canBeChild(t.metaInfo()))) {
            var _e5 = [t].concat(_toConsumableArray(i.getAllChildren()));

            n.model().allStudies().filter(function (t) {
              return t.canHaveChildren() && !_e5.includes(t);
            }).forEach(function (e) {
              var t = e.title(T.TitleDisplayTarget.StatusLine, !0, void 0, !0),
                  n = e.id(),
                  r = e.metaInfo(),
                  a = r.styles,
                  i = r.plots || [];
              if (1 === i.length) o[n + "$0"] = t;else if (i.length > 1) {
                var _e6 = i.reduce(function (e, o, r) {
                  if (!I.StudyMetaInfo.canPlotBeSourceOfChildStudy(o.type)) return e;
                  var i;

                  try {
                    i = (0, s.ensureDefined)((0, s.ensureDefined)(a)[o.id]).title;
                  } catch (e) {
                    i = o.id;
                  }

                  return _objectSpread({}, e, _defineProperty({}, "".concat(n, "$").concat(r), "".concat(t, ": ").concat(i)));
                }, {});

                o = _objectSpread({}, o, {}, _e6);
              }
            });
          }

          var l = _objectSpread({}, e, {
            type: "text",
            options: Object.keys(o),
            optionsTitles: o
          });

          return r.createElement(D, _objectSpread({}, this.props, {
            input: l
          }));
        }
      }, {
        key: "_isStudy",
        value: function _isStudy(e) {
          return !e.hasOwnProperty("isInputsStudy");
        }
      }]);

      return F;
    }(r.PureComponent);

    F.contextType = B.PropertyContext;
    var V = n(36274),
        A = n(94025);
    var R = void 0,
        W = ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M", "3M", "6M", "12M"],
        q = ["1S", "5S", "10S", "15S", "30S"];

    var z =
    /*#__PURE__*/
    function (_r$PureComponent5) {
      _inherits(z, _r$PureComponent5);

      function z() {
        var _this17;

        _classCallCheck(this, z);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(z).apply(this, arguments)), _this17._onChange = function (e) {
          var _this17$props = _this17.props,
              _this17$props$input = _this17$props.input,
              t = _this17$props$input.id,
              n = _this17$props$input.name,
              o = _this17$props.onChange;
          o(e, t, n);
        };
        return _this17;
      }

      _createClass(z, [{
        key: "render",
        value: function render() {
          var _this$props11 = this.props,
              e = _this$props11.input,
              t = _this$props11.value,
              s = _this$props11.disabled,
              a = _this$props11.hasTooltip,
              i = V.Interval.parse(void 0 === t ? e.defval : t),
              l = i.isValid() ? i.value() : t,
              c = R ? R.get().filter(function (e) {
            return !V.Interval.parse(e).isRange();
          }) : [],
              u = (0, A.mergeResolutions)(W, (0, A.isSecondsEnabled)() ? q : [], c);
          return u.unshift(""), r.createElement(k.Select, {
            id: e.id,
            className: p()(v.input, v.resolution, a && v.hasTooltip),
            menuClassName: p()(v.dropdownMenu, v.resolution),
            items: (d = u, d.map(function (e) {
              return {
                value: e,
                content: "" === e ? o.t(null, void 0, n(94551)) : (0, A.getTranslatedResolutionModel)(e).hint
              };
            })),
            value: l,
            onChange: this._onChange,
            disabled: s
          });
          var d;
        }
      }]);

      return z;
    }(r.PureComponent);

    var U = (0, h.bind)(z);
    var Z = n(41552),
        Y = n(41594);

    var G =
    /*#__PURE__*/
    function (_r$PureComponent6) {
      _inherits(G, _r$PureComponent6);

      function G() {
        _classCallCheck(this, G);

        return _possibleConstructorReturn(this, _getPrototypeOf(G).apply(this, arguments));
      }

      _createClass(G, [{
        key: "render",
        value: function render() {
          var _this18 = this;

          return r.createElement(B.PropertyContext.Consumer, null, function (e) {
            return e ? _this18._getColorInputWithContext(e) : null;
          });
        }
      }, {
        key: "_getColorInputWithContext",
        value: function _getColorInputWithContext(e) {
          var t;
          var _this$props12 = this.props,
              n = _this$props12.input.id,
              o = _this$props12.disabled,
              s = _this$props12.hasTooltip,
              a = e.model,
              i = e.study;

          if ("properties" in i || "tempProperties" in i) {
            var _e7 = "properties" in i ? i.properties().inputs[n] : null === (t = i.tempProperties) || void 0 === t ? void 0 : t.inputs.child(n);

            return r.createElement(Y.StylePropertyContainer, {
              model: a,
              property: _e7
            }, r.createElement(Z.ColorWithThicknessSelect, {
              className: p()(s && v.hasTooltip),
              color: _e7,
              disabled: o
            }));
          }

          return null;
        }
      }]);

      return G;
    }(r.PureComponent);

    var H = n(85528),
        K = n(76056),
        $ = n(23935),
        j = n(27365),
        X = n(93071);
    var Q = (0, h.bind)(function (e) {
      var t = e.value,
          n = e.onChange,
          o = e.input,
          s = e.tzName,
          a = e.hasTooltip,
          i = o.id,
          l = o.name,
          c = o.defval,
          u = (0, r.useMemo)(function () {
        return Number(null != t ? t : c);
      }, [t, c]),
          d = (0, r.useMemo)(function () {
        return (0, j.getChartTimezoneOffsetMs)(u, s);
      }, [u, s]),
          h = (0, r.useMemo)(function () {
        var e = new Date(u + d + v(u));
        return e.setSeconds(0), e;
      }, [u, d]),
          m = (0, r.useMemo)(function () {
        return (0, $.twoDigitsFormat)(h.getHours()) + ":" + (0, $.twoDigitsFormat)(h.getMinutes());
      }, [h]);
      return r.createElement("div", {
        className: p()(X.container, a && X.hasTooltip)
      }, r.createElement("div", {
        className: X.datePickerWrapper
      }, r.createElement(H.DatePicker, {
        InputComponent: K.DateInput,
        initial: h,
        onPick: function onPick(e) {
          if (null === e) return;
          var t = new Date(h);
          t.setFullYear(e.getFullYear()), t.setMonth(e.getMonth()), t.setDate(e.getDate()), n(g(t), i, l);
        },
        revertInvalidData: !0
      })), r.createElement("div", {
        className: X.timePickerWrapper
      }, r.createElement(S.TimeInput, {
        value: m,
        onChange: function onChange(e) {
          var _e$split = e.split(":"),
              _e$split2 = _slicedToArray(_e$split, 2),
              t = _e$split2[0],
              o = _e$split2[1],
              r = new Date(h);

          r.setHours(Number(t)), r.setMinutes(Number(o)), n(g(r), i, l);
        }
      })));

      function v(e) {
        return 60 * new Date(e).getTimezoneOffset() * 1e3;
      }

      function g(e) {
        return e.valueOf() - d - v(u);
      }
    });

    var J =
    /*#__PURE__*/
    function (_r$PureComponent7) {
      _inherits(J, _r$PureComponent7);

      function J() {
        _classCallCheck(this, J);

        return _possibleConstructorReturn(this, _getPrototypeOf(J).apply(this, arguments));
      }

      _createClass(J, [{
        key: "render",
        value: function render() {
          var _this$props13 = this.props,
              e = _this$props13.input,
              t = _this$props13.disabled,
              n = _this$props13.onChange,
              o = _this$props13.tzName,
              s = _this$props13.hasTooltip;
          if ((0, a.isStudyInputOptionsInfo)(e)) return r.createElement(D, {
            input: e,
            disabled: t,
            onChange: n,
            hasTooltip: s
          });

          switch (e.type) {
            case "integer":
              return r.createElement(i.IntegerInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "float":
            case "price":
              return r.createElement(l.FloatInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "bool":
              return r.createElement(c.BoolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "text":
              return r.createElement(b, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "symbol":
              return r.createElement(C.SymbolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "session":
              return r.createElement(x, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "source":
              return r.createElement(F, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "resolution":
              return r.createElement(U, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            case "time":
              return r.createElement(Q, {
                input: e,
                tzName: o,
                onChange: n,
                hasTooltip: s
              });

            case "color":
              return r.createElement(G, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s
              });

            default:
              return null;
          }
        }
      }]);

      return J;
    }(r.PureComponent);

    var ee = n(39847),
        te = n(76694);

    var ne =
    /*#__PURE__*/
    function (_r$PureComponent8) {
      _inherits(ne, _r$PureComponent8);

      function ne() {
        _classCallCheck(this, ne);

        return _possibleConstructorReturn(this, _getPrototypeOf(ne).apply(this, arguments));
      }

      _createClass(ne, [{
        key: "render",
        value: function render() {
          var _this$props14 = this.props,
              e = _this$props14.label,
              t = _this$props14.children,
              a = _this$props14.input,
              i = _this$props14.disabled,
              l = _this$props14.onChange,
              c = _this$props14.labelAlign,
              u = _this$props14.grouped,
              p = _this$props14.tooltip,
              d = _this$props14.solutionId,
              h = _this$props14.offset,
              m = Boolean(p);
          return r.createElement(y.PropertyTable.Row, null, r.createElement(y.PropertyTable.Cell, {
            "data-study-input-name": (null == a ? void 0 : a.id) && "".concat(a.id, "-label"),
            placement: "first",
            verticalAlign: c,
            grouped: u,
            offset: h
          }, void 0 !== e ? e : o.t((0, s.ensureDefined)(a).name, {
            context: "input"
          }, n(88601))), r.createElement(y.PropertyTable.Cell, {
            "data-study-input-name": (null == a ? void 0 : a.id) && "".concat(a.id, "-input"),
            placement: "last",
            grouped: u
          }, t || r.createElement(J, {
            input: (0, s.ensureDefined)(a),
            onChange: l,
            disabled: i,
            hasTooltip: m
          }), m && r.createElement(te.IconGroupWrapper, null, p && r.createElement(ee.InputTooltip, {
            title: p
          }), !1)));
        }
      }]);

      return ne;
    }(r.PureComponent);
  },
  39828: function _(e, t, n) {
    "use strict";

    n.d(t, {
      InputsTabContent: function InputsTabContent() {
        return W;
      }
    });
    var o,
        r = n(50959),
        s = n(50151),
        a = n(44352),
        i = n(76917),
        l = n(11062),
        c = n(57733),
        u = n(97754),
        p = n.n(u),
        d = n(88400),
        h = n.n(d);
    var m = (0, c.makeSwitchGroupItem)(((o =
    /*#__PURE__*/
    function (_r$PureComponent9) {
      _inherits(o, _r$PureComponent9);

      function o() {
        var _this19;

        _classCallCheck(this, o);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(o).apply(this, arguments)), _this19._onChange = function () {
          _this19.props.onChange && _this19.props.onChange(_this19.props.value);
        };
        return _this19;
      }

      _createClass(o, [{
        key: "render",
        value: function render() {
          var e = u(this.props.className, h().radio, _defineProperty({}, h().reverse, Boolean(this.props.labelPositionReverse))),
              t = u(h().label, _defineProperty({}, h().disabled, this.props.disabled)),
              n = u(h().box, _defineProperty({}, h().noOutline, -1 === this.props.tabIndex));
          var o = null;
          return this.props.label && (o = r.createElement("span", {
            className: t
          }, this.props.label)), r.createElement("label", {
            className: e
          }, r.createElement("span", {
            className: h().wrapper,
            title: this.props.title
          }, r.createElement("input", {
            id: this.props.id,
            tabIndex: this.props.tabIndex,
            autoFocus: this.props.autoFocus,
            role: this.props.role,
            className: h().input,
            type: "radio",
            name: this.props.name,
            checked: this.props.checked,
            disabled: this.props.disabled,
            value: this.props.value,
            onChange: this._onChange,
            ref: this.props.reference,
            "aria-describedby": this.props["aria-describedby"],
            "aria-invalid": this.props["aria-invalid"]
          }), r.createElement("span", {
            className: n
          })), o);
        }
      }]);

      return o;
    }(r.PureComponent)).defaultProps = {
      value: "on"
    }, o));
    var v = n(55141),
        g = n(83207),
        f = n(39847),
        b = n(76694),
        C = n(27698);

    function y(e) {
      var t = e.children,
          o = e.input,
          u = e.disabled,
          p = e.onChange,
          d = e.grouped,
          h = e.tooltip,
          y = e.solutionId,
          E = (0, r.useContext)(i.PropertyContext),
          _ref39 = (0, s.ensureNotNull)(E),
          S = _ref39.values,
          w = _ref39.setValue,
          _ = S[o.id],
          _ref40 = (0, r.useState)(_ ? "another-symbol" : "main-symbol"),
          _ref41 = _slicedToArray(_ref40, 2),
          x = _ref41[0],
          N = _ref41[1],
          _ref42 = (0, r.useState)(_),
          _ref43 = _slicedToArray(_ref42, 2),
          I = _ref43[0],
          T = _ref43[1],
          B = Boolean(h);

      return (0, r.useEffect)(function () {
        _ && T(_);
      }, [_]), r.createElement(c.SwitchGroup, {
        name: "symbol-source-".concat(o.id),
        values: [x],
        onChange: function onChange(e) {
          N(e), "main-symbol" === e ? (0, g.setter)(w)("", o.id, o.name) : "another-symbol" === e && I && (0, g.setter)(w, p)(I, o.id, o.name);
        }
      }, r.createElement(l.PropertyTable.Row, null, r.createElement(l.PropertyTable.Cell, {
        colSpan: 2,
        placement: "first",
        grouped: d,
        "data-study-input-name": (null == o ? void 0 : o.id) && "".concat(o.id, "-main-symbol")
      }, r.createElement(m, {
        value: "main-symbol",
        className: C.checkbox,
        disabled: u,
        label: r.createElement("span", {
          className: C.label
        }, a.t(null, {
          context: "input"
        }, n(88046)))
      }))), r.createElement(l.PropertyTable.Row, null, r.createElement(l.PropertyTable.Cell, {
        placement: "first",
        grouped: d,
        "data-study-input-name": (null == o ? void 0 : o.id) && "".concat(o.id, "-another-symbol-label")
      }, r.createElement(m, {
        value: "another-symbol",
        className: C.checkbox,
        disabled: u,
        label: r.createElement("span", {
          className: C.label
        }, a.t(null, {
          context: "input"
        }, n(73755)))
      })), r.createElement(l.PropertyTable.Cell, {
        placement: "last",
        grouped: d,
        "data-study-input-name": (null == o ? void 0 : o.id) && "".concat(o.id, "-another-symbol-input")
      }, t || r.createElement(v.SymbolInput, {
        input: (0, s.ensureDefined)(o),
        onChange: p,
        disabled: u || "main-symbol" === x,
        hasTooltip: B
      }), B && r.createElement(b.IconGroupWrapper, null, h && r.createElement(f.InputTooltip, {
        title: h
      }), !1))));
    }

    var E = n(4781);

    var S =
    /*#__PURE__*/
    function (_r$PureComponent10) {
      _inherits(S, _r$PureComponent10);

      function S() {
        _classCallCheck(this, S);

        return _possibleConstructorReturn(this, _getPrototypeOf(S).apply(this, arguments));
      }

      _createClass(S, [{
        key: "render",
        value: function render() {
          var _this$props15 = this.props,
              e = _this$props15.label,
              t = _this$props15.input,
              n = _this$props15.tooltip,
              o = _this$props15.solutionId,
              s = Boolean(n);
          return r.createElement(l.PropertyTable.Row, null, r.createElement(l.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2,
            "data-study-input-name": (null == t ? void 0 : t.id) && "".concat(t.id, "-checkbox")
          }, r.createElement(E.BoolInput, {
            label: e,
            input: t,
            hasTooltip: s
          }), s && r.createElement(b.IconGroupWrapper, null, n && r.createElement(f.InputTooltip, {
            title: n
          }), !1)));
        }
      }]);

      return S;
    }(r.PureComponent);

    var w = n(12949),
        _ = n(2568),
        x = n(67029),
        N = n(90009);

    var I =
    /*#__PURE__*/
    function (_r$PureComponent11) {
      _inherits(I, _r$PureComponent11);

      function I() {
        var _this20;

        _classCallCheck(this, I);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(I).apply(this, arguments)), _this20._onChange = function (e) {
          var _this20$props = _this20.props,
              _this20$props$input = _this20$props.input,
              t = _this20$props$input.id,
              n = _this20$props$input.name,
              o = _this20$props.onChange;
          o(e.currentTarget.value, t, n);
        };
        return _this20;
      }

      _createClass(I, [{
        key: "render",
        value: function render() {
          var _this$props16 = this.props,
              e = _this$props16.input.defval,
              t = _this$props16.value,
              n = _this$props16.disabled,
              o = _this$props16.onBlur,
              s = _this$props16.onKeyDown;
          return r.createElement(_.Textarea, {
            className: p()(C.input, C.textarea, x.InputClasses.FontSizeMedium),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
            maxLength: 4096
          });
        }
      }]);

      return I;
    }(r.PureComponent);

    var T = (0, N.debounced)(I),
        B = (0, g.bind)(T);
    var k = n(80128);

    function P(e) {
      var t = e.input,
          n = e.label,
          o = e.tooltip,
          s = e.solutionId,
          a = Boolean(o);
      return r.createElement(l.PropertyTable.Row, null, r.createElement(l.PropertyTable.Cell, {
        placement: "first",
        colSpan: 2,
        className: k.wrap,
        "data-study-input-name": (null == t ? void 0 : t.id) && "".concat(t.id, "-textarea")
      }, r.createElement("div", {
        className: k.labelWrap
      }, r.createElement("span", {
        className: p()(k.label, a && k.hasTooltip)
      }, n), a && r.createElement(b.IconGroupWrapper, null, o && r.createElement(f.InputTooltip, {
        title: o
      }), !1)), r.createElement(B, {
        input: t
      })));
    }

    function D(e) {
      var t = e.input,
          o = e.tooltip,
          s = e.solutionId;
      return "symbol" === t.type && t.optional ? r.createElement(y, {
        input: t,
        tooltip: o,
        solutionId: s
      }) : "bool" === t.type ? r.createElement(S, {
        label: a.t(t.name, {
          context: "input"
        }, n(88601)),
        input: t,
        tooltip: o,
        solutionId: s
      }) : "text_area" === t.type ? r.createElement(P, {
        label: a.t(t.name, {
          context: "input"
        }, n(88601)),
        input: t,
        tooltip: o,
        solutionId: s
      }) : r.createElement(w.InputRow, {
        labelAlign: function (e) {
          switch (e) {
            case "session":
              return "adaptive";

            case "time":
              return "topCenter";

            default:
              return;
          }
        }(t.type),
        input: t,
        tooltip: o,
        solutionId: s
      });
    }

    var L = n(86067),
        M = n(17611);

    function O(e) {
      var t = e.content;
      var n;
      return r.createElement(l.PropertyTable.InlineRowContext.Provider, {
        value: !0
      }, r.createElement("div", {
        className: M.inlineRow
      }, t.children.map(function (e, o) {
        return void 0 !== e.tooltip && (n = e.tooltip), r.createElement(D, {
          key: e.id,
          input: e,
          tooltip: o === t.children.length - 1 ? n : void 0
        });
      })));
    }

    var F = n(64420),
        V = n(26278);

    function A(e) {
      var t = e.content;
      return (0, F.isGroup)(t) ? (0, F.isInputInlines)(t) ? r.createElement(O, {
        content: t
      }) : r.createElement(r.Fragment, null, r.createElement("div", {
        className: V.titleWrap
      }, r.createElement(L.GroupTitleSection, {
        title: a.t(t.id, {
          context: "input"
        }, n(88601)),
        name: t.id
      })), t.children.map(function (e) {
        return (0, F.isGroup)(e) ? r.createElement(O, {
          key: e.id,
          content: e
        }) : r.createElement(D, {
          key: e.id,
          input: e,
          tooltip: e.tooltip,
          solutionId: e.solutionId
        });
      }), r.createElement("div", {
        className: V.groupFooter
      })) : r.createElement(D, {
        input: t,
        tooltip: t.tooltip,
        solutionId: t.solutionId
      });
    }

    var R = {
      offset: a.t(null, void 0, n(89298))
    };

    var W =
    /*#__PURE__*/
    function (_r$PureComponent12) {
      _inherits(W, _r$PureComponent12);

      function W() {
        _classCallCheck(this, W);

        return _possibleConstructorReturn(this, _getPrototypeOf(W).apply(this, arguments));
      }

      _createClass(W, [{
        key: "render",
        value: function render() {
          var _this21 = this;

          var _this$props17 = this.props,
              e = _this$props17.reference,
              t = _this$props17.inputs,
              n = _this$props17.property,
              o = _this$props17.study,
              a = _this$props17.studyMetaInfo,
              i = _this$props17.model,
              c = _this$props17.onStudyInputChange,
              u = _this$props17.className,
              p = n.offset,
              d = n.offsets;
          return r.createElement(l.PropertyTable, {
            reference: e,
            className: u
          }, r.createElement(q, {
            study: o,
            model: i,
            property: n.inputs,
            inputs: t,
            onStudyInputChange: c
          }), p && this._createOffsetSection(p, (0, s.ensureDefined)(a.offset)), d && d.childNames().map(function (e) {
            var t;
            var n = d.childs()[e];
            return _this21._createOffsetSection(n, (0, s.ensureDefined)(null === (t = a.offsets) || void 0 === t ? void 0 : t[e]));
          }));
        }
      }, {
        key: "_createOffsetSection",
        value: function _createOffsetSection(e, t) {
          var n = e.childs();
          return r.createElement(q, {
            key: "offset_".concat(t.title),
            study: this.props.study,
            model: this.props.model,
            inputs: [z(n, t)],
            property: e
          });
        }
      }]);

      return W;
    }(r.PureComponent);

    function q(e) {
      var t = e.study,
          n = e.model,
          o = e.inputs,
          s = e.property,
          a = e.onStudyInputChange,
          l = o,
          c = (0, r.useMemo)(function () {
        return (0, F.getInputGroups)(l);
      }, [l]);
      return r.createElement(i.PropertyContainer, {
        property: s,
        study: t,
        model: n,
        onStudyInputChange: a
      }, !1, !1, c.map(function (e) {
        return r.createElement(r.Fragment, {
          key: e.id
        }, r.createElement(A, {
          content: e
        }), !1);
      }));
    }

    function z(e, t) {
      return {
        id: "val",
        name: t.title || R.offset,
        defval: e.val.value(),
        type: "integer",
        min: t.min,
        max: t.max
      };
    }
  },
  4781: function _(e, t, n) {
    "use strict";

    n.d(t, {
      BoolInput: function BoolInput() {
        return u;
      },
      BoolInputComponent: function BoolInputComponent() {
        return c;
      }
    });
    var o = n(50959),
        r = n(15294),
        s = n(97754),
        a = n.n(s),
        i = n(83207),
        l = n(27698);

    var c =
    /*#__PURE__*/
    function (_o$PureComponent12) {
      _inherits(c, _o$PureComponent12);

      function c() {
        var _this22;

        _classCallCheck(this, c);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this22._onChange = function () {
          var _this22$props = _this22.props,
              _this22$props$input = _this22$props.input,
              e = _this22$props$input.id,
              t = _this22$props$input.name,
              n = _this22$props.value,
              o = _this22$props.onChange;
          o(!n, e, t);
        };
        return _this22;
      }

      _createClass(c, [{
        key: "render",
        value: function render() {
          var _this$props18 = this.props,
              e = _this$props18.input.defval,
              t = _this$props18.value,
              n = _this$props18.disabled,
              s = _this$props18.label,
              i = _this$props18.hasTooltip,
              c = void 0 === t ? e : t;
          return o.createElement(r.Checkbox, {
            className: a()(l.checkbox, i && l.hasTooltip),
            disabled: n,
            checked: c,
            onChange: this._onChange,
            label: o.createElement("span", {
              className: l.label
            }, s),
            labelAlignBaseline: !0
          });
        }
      }]);

      return c;
    }(o.PureComponent);

    var u = (0, i.bind)(c);
  },
  90009: function _(e, t, n) {
    "use strict";

    n.d(t, {
      debounced: function debounced() {
        return s;
      }
    });
    var o = n(50959);
    var r = {
      blur: 0,
      commit: 0,
      change: 1 / 0
    };

    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
      return (
        /*#__PURE__*/
        function (_o$PureComponent13) {
          _inherits(_class2, _o$PureComponent13);

          function _class2(e) {
            var _this23;

            _classCallCheck(this, _class2);

            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, e)), _this23._onChange = function (e, n, o) {
              var r = t.change;
              r ? (clearTimeout(_this23._timeout), _this23.setState({
                value: e
              }, function () {
                r !== 1 / 0 && (_this23._timeout = setTimeout(function () {
                  return _this23._flush();
                }, r));
              })) : _this23._flush(e);
            }, _this23._onBlur = function () {
              _this23._debounce(t.blur);

              var e = _this23.props.onBlur;
              e && e();
            }, _this23._onKeyDown = function (e) {
              13 === e.keyCode && _this23._debounce(t.commit);
            }, _this23.state = {
              prevValue: e.value,
              value: e.value
            };
            return _this23;
          }

          _createClass(_class2, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this._flush();
            }
          }, {
            key: "render",
            value: function render() {
              var t = this.state.value;
              return o.createElement(e, _objectSpread({}, this.props, {
                value: t,
                onChange: this._onChange,
                onBlur: this._onBlur,
                onKeyDown: this._onKeyDown
              }));
            }
          }, {
            key: "_debounce",
            value: function _debounce(e) {
              var _this24 = this;

              e ? (clearTimeout(this._timeout), e !== 1 / 0 && (this._timeout = setTimeout(function () {
                return _this24._flush();
              }, e))) : this.setState(function (e) {
                _this24._flush(e.value);
              });
            }
          }, {
            key: "_flush",
            value: function _flush(e) {
              var _this$props19 = this.props,
                  _this$props19$input = _this$props19.input,
                  t = _this$props19$input.id,
                  n = _this$props19$input.name,
                  o = _this$props19.onChange,
                  _this$state4 = this.state,
                  r = _this$state4.prevValue,
                  s = _this$state4.value;
              clearTimeout(this._timeout);
              var a = void 0 !== e ? e : s;
              void 0 !== a && a !== r && o(a, t, n);
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(e, t) {
              return e.value === t.prevValue ? t : {
                prevValue: e.value,
                value: e.value
              };
            }
          }]);

          return _class2;
        }(o.PureComponent)
      );
    }
  },
  47510: function _(e, t, n) {
    "use strict";

    n.d(t, {
      FloatInput: function FloatInput() {
        return d;
      },
      FloatInputComponent: function FloatInputComponent() {
        return p;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(95052),
        i = n(83207),
        l = n(90009),
        c = n(27698);

    var u =
    /*#__PURE__*/
    function (_o$PureComponent14) {
      _inherits(u, _o$PureComponent14);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "render",
        value: function render() {
          var e = this.props.hasTooltip;
          return o.createElement(a.NumericInput, _objectSpread({}, this.props, {
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1
          }));
        }
      }]);

      return u;
    }(o.PureComponent);

    var p = (0, l.debounced)(u, {
      change: 1 / 0,
      commit: 0,
      blur: 0
    }),
        d = (0, i.bind)(p);
  },
  96438: function _(e, t, n) {
    "use strict";

    n.d(t, {
      IntegerInput: function IntegerInput() {
        return d;
      },
      IntegerInputComponent: function IntegerInputComponent() {
        return p;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(83207),
        i = n(90009),
        l = n(95052),
        c = n(27698);

    var u =
    /*#__PURE__*/
    function (_o$PureComponent15) {
      _inherits(u, _o$PureComponent15);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "render",
        value: function render() {
          var e = this.props.hasTooltip;
          return o.createElement(l.NumericInput, _objectSpread({}, this.props, {
            mode: "integer",
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1
          }));
        }
      }]);

      return u;
    }(o.PureComponent);

    var p = (0, i.debounced)(u, {
      change: 1 / 0,
      commit: 0,
      blur: 0
    }),
        d = (0, a.bind)(p);
  },
  95052: function _(e, t, n) {
    "use strict";

    n.d(t, {
      NumericInput: function NumericInput() {
        return y;
      }
    });
    var o = n(50959),
        r = n(50151),
        s = n(44352),
        a = n(60521),
        i = n(49483),
        l = n(92399),
        c = n(82161),
        u = n(38223);
    var p = n(87663),
        d = n(37160);
    var h = s.t(null, void 0, n(35563)),
        m = new (
    /*#__PURE__*/
    function () {
      function _class3() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";

        _classCallCheck(this, _class3);

        this._divider = e;
      }

      _createClass(_class3, [{
        key: "format",
        value: function format(e) {
          var t = (0, c.splitThousands)(e, this._divider);
          return (0, u.isRtl)() ? (0, u.startWithLTR)(t) : t;
        }
      }, {
        key: "parse",
        value: function parse(e) {
          var t = (0, u.stripLTRMarks)(e).split(this._divider).join(""),
              n = Number(t);
          return isNaN(n) || /e/i.test(t) ? {
            res: !1
          } : {
            res: !0,
            value: n,
            suggest: this.format(n)
          };
        }
      }]);

      return _class3;
    }())(),
        v = /^-?[0-9]*$/,
        g = 9e15;

    var f =
    /*#__PURE__*/
    function (_o$PureComponent16) {
      _inherits(f, _o$PureComponent16);

      function f(e) {
        var _this25;

        _classCallCheck(this, f);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this, e)), _this25._onFocus = function (e) {
          _this25.setState({
            focused: !0
          }), _this25.props.onFocus && _this25.props.onFocus(e);
        }, _this25._onBlur = function (e) {
          _this25.setState({
            focused: !1
          }), !1 !== _this25.props.shouldApplyValueOnBlur && (_this25.setState({
            displayValue: b(_this25.props, _this25.props.value)
          }), _this25.props.errorHandler && _this25.props.errorHandler(!1)), _this25.props.onBlur && _this25.props.onBlur(e);
        }, _this25._onValueChange = function (e) {
          var t = e.target.value;
          if (void 0 !== _this25.props.onEmptyString && "" === t && _this25.props.onEmptyString(), "integer" === _this25.props.mode && !v.test(t)) return;
          var n = C(t, _this25.props.formatter),
              o = n.res ? _this25._checkValueBoundaries(n.value) : {
            isPassed: !1,
            msg: void 0
          },
              r = n.res && !o.isPassed,
              s = n.res && n.suggest && !_this25.state.focused ? n.suggest : t,
              a = r && o.msg ? o.msg : h;
          _this25.setState({
            displayValue: s,
            errorMsg: a
          }), n.res && o.isPassed && _this25.props.onValueChange(n.value, "input"), _this25.props.errorHandler && _this25.props.errorHandler(!n.res || r);
        }, _this25._onValueByStepChange = function (e) {
          var _this25$props = _this25.props,
              _this25$props$roundBy = _this25$props.roundByStep,
              t = _this25$props$roundBy === void 0 ? !0 : _this25$props$roundBy,
              _this25$props$step = _this25$props.step,
              n = _this25$props$step === void 0 ? 1 : _this25$props$step,
              o = _this25$props.uiStep,
              _this25$props$min = _this25$props.min,
              r = _this25$props$min === void 0 ? n : _this25$props$min,
              s = _this25$props.formatter,
              i = C(_this25.state.displayValue, s),
              l = null != o ? o : n;
          var c = n;

          if (i.res) {
            var _o2 = new a.Big(i.value),
                _s3 = _o2.minus(r).mod(n);

            var _u6 = _o2.plus(e * l);

            !_s3.eq(0) && t && (_u6 = _u6.plus((e > 0 ? 0 : 1) * l).minus(_s3)), c = _u6.toNumber();
          }

          var _this25$_checkValueBo = _this25._checkValueBoundaries(c),
              u = _this25$_checkValueBo.isPassed,
              p = _this25$_checkValueBo.clampedValue;

          c = u ? c : p, _this25.setState({
            displayValue: b(_this25.props, c)
          }), _this25.props.onValueChange(c, "step"), _this25.props.errorHandler && _this25.props.errorHandler(!1);
        };
        var t = e.value;
        _this25.state = {
          value: t,
          displayValue: b(e, t),
          focused: !1,
          errorMsg: h
        };
        return _this25;
      }

      _createClass(f, [{
        key: "render",
        value: function render() {
          var e;
          return o.createElement(l.NumberInputView, {
            id: this.props.id,
            inputMode: null !== (e = this.props.inputMode) && void 0 !== e ? e : i.CheckMobile.iOS() ? void 0 : "numeric",
            borderStyle: this.props.borderStyle,
            fontSizeStyle: this.props.fontSizeStyle,
            value: this.state.displayValue,
            forceShowControls: this.props.forceShowControls,
            className: this.props.className,
            inputClassName: this.props.inputClassName,
            button: this.props.button,
            placeholder: this.props.placeholder,
            innerLabel: this.props.innerLabel,
            endSlot: this.props.endSlot,
            disabled: this.props.disabled,
            warning: this.props.warning,
            error: this.props.error,
            errorMessage: this.props.errorMessage || this.state.errorMsg,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this.props.inputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            controlDecKeyCodes: this.props.controlDecKeyCodes,
            controlIncKeyCodes: this.props.controlIncKeyCodes,
            title: this.props.title,
            intent: this.props.intent,
            highlight: this.props.highlight,
            highlightRemoveRoundBorder: this.props.highlightRemoveRoundBorder,
            stretch: this.props.stretch,
            autoSelectOnFocus: !i.CheckMobile.any(),
            "data-name": this.props["data-name"]
          });
        }
      }, {
        key: "getClampedValue",
        value: function getClampedValue() {
          var _this$props20 = this.props,
              _this$props20$min = _this$props20.min,
              e = _this$props20$min === void 0 ? -1 / 0 : _this$props20$min,
              _this$props20$max = _this$props20.max,
              t = _this$props20$max === void 0 ? g : _this$props20$max,
              n = C(this.state.displayValue, this.props.formatter);
          return n.res ? (0, d.clamp)(n.value, e, t) : null;
        }
      }, {
        key: "_checkValueBoundaries",
        value: function _checkValueBoundaries(e) {
          var t, o, r, a;

          var _this$props21 = this.props,
              _this$props21$min = _this$props21.min,
              i = _this$props21$min === void 0 ? -1 / 0 : _this$props21$min,
              _this$props21$max = _this$props21.max,
              l = _this$props21$max === void 0 ? g : _this$props21$max,
              c = function (e, t, n) {
            var o = e >= t,
                r = e <= n;
            return {
              passMin: o,
              passMax: r,
              pass: o && r,
              clamped: (0, d.clamp)(e, t, n)
            };
          }(e, i, l);

          var u;
          return c.passMax || (u = null !== (o = null === (t = this.props.boundariesErrorMessages) || void 0 === t ? void 0 : t.greaterThanMax) && void 0 !== o ? o : s.t(null, {
            replace: {
              max: String(l)
            }
          }, n(2607))), c.passMin || (u = null !== (a = null === (r = this.props.boundariesErrorMessages) || void 0 === r ? void 0 : r.lessThanMin) && void 0 !== a ? a : s.t(null, {
            replace: {
              min: String(i)
            }
          }, n(53669))), {
            isPassed: c.pass,
            msg: u,
            clampedValue: c.clamped
          };
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          var n = e.alwaysUpdateValueFromProps,
              o = e.value;
          return t.focused && !n || t.value === o ? null : {
            value: o,
            displayValue: b(e, o)
          };
        }
      }]);

      return f;
    }(o.PureComponent);

    function b(e, t) {
      var _e$useFormatter = e.useFormatter,
          n = _e$useFormatter === void 0 ? !0 : _e$useFormatter,
          o = e.formatter,
          r = e.mode;
      return n && "integer" !== r ? function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m;
        return null !== e ? t.format(e) : "";
      }(t, o) : function (e) {
        if (null === e) return "";
        return p.NumericFormatter.formatNoE(e);
      }(t);
    }

    function C(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m;
      return t.parse ? t.parse(e) : {
        res: !1,
        error: "Formatter does not support parse"
      };
    }

    var y =
    /*#__PURE__*/
    function (_o$PureComponent17) {
      _inherits(y, _o$PureComponent17);

      function y() {
        var _this26;

        _classCallCheck(this, y);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments)), _this26._container = null, _this26._handleContainerRef = function (e) {
          return _this26._container = e;
        }, _this26._onChange = function (e, t) {
          var _this26$props = _this26.props,
              _this26$props$input = _this26$props.input,
              n = _this26$props$input.id,
              o = _this26$props$input.name,
              r = _this26$props.onChange,
              s = _this26$props.onBlur;
          r(e, n, o), "step" === t && s && s();
        }, _this26._onBlur = function (e) {
          var t = _this26.props.onBlur;

          if (t) {
            var _n9 = (0, r.ensureNotNull)(_this26._container);

            _n9.contains(document.activeElement) || _n9.contains(e.relatedTarget) || t();
          }
        };
        return _this26;
      }

      _createClass(y, [{
        key: "render",
        value: function render() {
          var _this$props22 = this.props,
              _this$props22$input = _this$props22.input,
              e = _this$props22$input.defval,
              t = _this$props22$input.min,
              n = _this$props22$input.max,
              r = _this$props22$input.step,
              s = _this$props22.value,
              a = _this$props22.disabled,
              i = _this$props22.onKeyDown,
              l = _this$props22.className,
              c = _this$props22.mode,
              u = _this$props22.stretch;
          return o.createElement(f, {
            className: l,
            value: Number(void 0 === s ? e : s),
            min: t,
            max: n,
            step: r,
            mode: c,
            onBlur: this._onBlur,
            onValueChange: this._onChange,
            onKeyDown: i,
            disabled: a,
            containerReference: this._handleContainerRef,
            fontSizeStyle: "medium",
            roundByStep: !1,
            stretch: u
          });
        }
      }]);

      return y;
    }(o.PureComponent);
  },
  55141: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolInput: function SymbolInput() {
        return p;
      },
      getInternalSymbolName: function getInternalSymbolName() {
        return c;
      }
    });
    var o = n(50959),
        r = n(50151),
        s = n(76917),
        a = n(83207),
        i = n(73146),
        l = n(48897);

    function c(e, t) {
      var n = (0, i.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
      return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e;
    }

    function u(e, t) {
      var n = (0, i.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
      return null === n ? e : n.name;
    }

    var p = (0, a.bind)(function (e) {
      var t = (0, o.useContext)(s.PropertyContext),
          _ref44 = (0, r.ensureNotNull)(t),
          n = _ref44.study,
          a = e.input.defval,
          i = e.value;

      return o.createElement(l.SymbolInputsButton, _objectSpread({}, e, {
        value: u(i || a || "", n),
        study: n
      }));
    });
  },
  41552: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ColorWithThicknessSelect: function ColorWithThicknessSelect() {
        return g;
      }
    });
    var o = n(50959),
        r = n(24377),
        s = n(44352),
        a = n(36298),
        i = n(87095),
        l = n(41594),
        c = n(58593),
        u = n(17948),
        p = n(51768);
    var d = new a.TranslatedString("change thickness", s.t(null, void 0, n(95657))),
        h = new a.TranslatedString("change color", s.t(null, void 0, n(13066))),
        m = new a.TranslatedString("change opacity", s.t(null, void 0, n(17023))),
        v = [1, 2, 3, 4];

    var g =
    /*#__PURE__*/
    function (_o$PureComponent18) {
      _inherits(g, _o$PureComponent18);

      function g() {
        var _this27;

        _classCallCheck(this, g);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this27._trackEventLabel = null, _this27._getTransparencyValue = function () {
          var e = _this27.props.transparency;
          return e ? e.value() : 0;
        }, _this27._getOpacityValue = function () {
          var e = _this27.props.color,
              t = (0, u.getPropertyValue)(e);
          if (t) return (0, i.isHexColor)(t) ? (0, i.transparencyToAlpha)(_this27._getTransparencyValue()) : (0, r.parseRgba)(t)[3];
        }, _this27._getColorValueInHex = function () {
          var e = _this27.props.color,
              t = (0, u.getPropertyValue)(e);
          return t ? (0, i.isHexColor)(t) ? t : (0, r.rgbToHexString)((0, r.parseRgb)(t)) : null;
        }, _this27._onThicknessChange = function (e) {
          var t = _this27.props.thickness;
          void 0 !== t && _this27._setProperty(t, e, d);
        }, _this27._onColorChange = function (e) {
          var _this27$props = _this27.props,
              t = _this27$props.color,
              n = _this27$props.isPaletteColor,
              o = (0, u.getPropertyValue)(t);
          var s = 0;
          o && (s = (0, i.isHexColor)(o) ? _this27._getTransparencyValue() : (0, i.alphaToTransparency)((0, r.parseRgba)(o)[3])), _this27._setProperty(t, (0, i.generateColor)(String(e), s, !0), h), _this27._trackEventLabel = "Plot color > " + (n ? "Palette" : "Single");
        }, _this27._onOpacityChange = function (e) {
          var t = _this27.props.color,
              n = (0, u.getPropertyValue)(t);

          _this27._setProperty(t, (0, i.generateColor)(n, (0, i.alphaToTransparency)(e), !0), m);
        }, _this27._onPopupClose = function () {
          _this27._trackEventLabel && ((0, p.trackEvent)("GUI", "Study settings", _this27._trackEventLabel), _this27._trackEventLabel = null);
        };
        return _this27;
      }

      _createClass(g, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._onPopupClose();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props23 = this.props,
              _this$props23$selectO = _this$props23.selectOpacity,
              e = _this$props23$selectO === void 0 ? !0 : _this$props23$selectO,
              t = _this$props23.disabled,
              n = _this$props23.className;
          return o.createElement(c.ColorSelect, {
            className: n,
            disabled: t,
            color: this._getColorValueInHex(),
            selectOpacity: e,
            opacity: this._getOpacityValue(),
            thickness: this._getThicknessValue(),
            thicknessItems: v,
            onColorChange: this._onColorChange,
            onOpacityChange: this._onOpacityChange,
            onThicknessChange: this._onThicknessChange,
            onPopupClose: this._onPopupClose
          });
        }
      }, {
        key: "_getThicknessValue",
        value: function _getThicknessValue() {
          var e = this.props.thickness;
          return e ? (0, u.getPropertyValue)(e) : void 0;
        }
      }, {
        key: "_setProperty",
        value: function _setProperty(e, t, n) {
          var o = this.context.setValue;
          (0, u.setPropertyValue)(e, function (e) {
            return o(e, t, n);
          });
        }
      }]);

      return g;
    }(o.PureComponent);

    g.contextType = l.StylePropertyContext;
  },
  11062: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PropertyTable: function PropertyTable() {
        return l;
      }
    });
    var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(24712);
    var i = o.createContext(!1);

    var l =
    /*#__PURE__*/
    function (_o$PureComponent19) {
      _inherits(l, _o$PureComponent19);

      function l() {
        _classCallCheck(this, l);

        return _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments));
      }

      _createClass(l, [{
        key: "render",
        value: function render() {
          return o.createElement("div", {
            ref: this.props.reference,
            className: r(a.content, this.props.className)
          }, this.props.children);
        }
      }]);

      return l;
    }(o.PureComponent);

    l.InlineRowContext = i, l.Row = function (e) {
      var t = e.children;
      return (0, o.useContext)(i) ? o.createElement("span", {
        className: a.inlineRow
      }, t) : o.createElement(o.Fragment, null, t);
    }, l.Cell = function (e) {
      var t = (0, o.useContext)(i),
          n = r(a.cell, e.offset && a.offset, e.grouped && a.grouped, t && a.inlineCell, "top" === e.verticalAlign && a.top, "topCenter" === e.verticalAlign && a.topCenter, "adaptive" === e.verticalAlign && a.adaptive, e.checkableTitle && a.checkableTitle, 2 === e.colSpan && a.fill, "first" === e.placement && 2 !== e.colSpan && a.first, "last" === e.placement && 2 !== e.colSpan && a.last),
          l = (0, s.filterDataProps)(e);
      return o.createElement("div", _objectSpread({}, l, {
        className: n
      }), o.createElement("div", {
        className: r(a.inner, e.className)
      }, e.children));
    }, l.Separator = function (e) {
      return o.createElement(l.Row, null, o.createElement("div", {
        className: r(a.cell, a.separator, a.fill)
      }));
    }, l.GroupSeparator = function (e) {
      var t = e.size || 0;
      return o.createElement(l.Row, null, o.createElement("div", {
        className: r(a.cell, a.groupSeparator, a.fill, 1 === t && a.big)
      }));
    };
  },
  17948: function _(e, t, n) {
    "use strict";

    function o(e) {
      return Array.isArray(e) ? e[0].value() : e.value();
    }

    function r(e, t) {
      if (Array.isArray(e)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _n10 = _step2.value;
            t(_n10);
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
      } else t(e);
    }

    n.d(t, {
      getPropertyValue: function getPropertyValue() {
        return o;
      },
      setPropertyValue: function setPropertyValue() {
        return r;
      }
    });
  },
  99084: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>';
  },
  30162: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>';
  },
  27941: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>';
  },
  82353: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5H6Z"/></svg>';
  },
  65890: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
  },
  93929: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>';
  }
}]);