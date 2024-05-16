"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6631], {
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
  83073: function _(e) {
    e.exports = {
      "small-height-breakpoint": "screen and (max-height: 360px)",
      footer: "footer-PhMf7PhQ",
      submitButton: "submitButton-PhMf7PhQ",
      buttons: "buttons-PhMf7PhQ"
    };
  },
  55596: function _(e) {
    e.exports = {
      dialog: "dialog-b8SxMnzX",
      wrapper: "wrapper-b8SxMnzX",
      separator: "separator-b8SxMnzX",
      bounded: "bounded-b8SxMnzX"
    };
  },
  69827: function _(e) {
    e.exports = {
      "small-height-breakpoint": "screen and (max-height: 360px)",
      container: "container-BZKENkhT",
      unsetAlign: "unsetAlign-BZKENkhT",
      title: "title-BZKENkhT",
      subtitle: "subtitle-BZKENkhT",
      textWrap: "textWrap-BZKENkhT",
      ellipsis: "ellipsis-BZKENkhT",
      close: "close-BZKENkhT",
      icon: "icon-BZKENkhT"
    };
  },
  45719: function _(e) {
    e.exports = {
      separator: "separator-Pf4rIzEt"
    };
  },
  70673: function _(e, t, a) {
    "use strict";

    a.d(t, {
      CheckboxInput: function CheckboxInput() {
        return d;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a(90186),
        o = a(9745),
        l = a(65890),
        r = a(70048),
        c = a.n(r);

    function d(e) {
      var _i;

      var t = i(c().box, c()["intent-".concat(e.intent)], (_i = {}, _defineProperty(_i, c().check, !Boolean(e.indeterminate)), _defineProperty(_i, c().dot, Boolean(e.indeterminate)), _defineProperty(_i, c().noOutline, -1 === e.tabIndex), _i)),
          a = i(c().wrapper, e.className);
      return n.createElement("span", {
        className: a,
        title: e.title,
        style: e.style
      }, n.createElement("input", _objectSpread({
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
      }, (0, s.filterDataProps)(e))), n.createElement("span", {
        className: t
      }, n.createElement(o.Icon, {
        icon: l,
        className: c().icon
      })));
    }
  },
  15294: function _(e, t, a) {
    "use strict";

    a.d(t, {
      Checkbox: function Checkbox() {
        return c;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a(57733),
        o = a(70673),
        l = a(69789),
        r = a.n(l);

    var c =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(c, _n$PureComponent);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "render",
        value: function render() {
          var _i2;

          var _this$props = this.props,
              e = _this$props.inputClassName,
              t = _this$props.labelClassName,
              a = _objectWithoutProperties(_this$props, ["inputClassName", "labelClassName"]),
              s = i(this.props.className, r().checkbox, (_i2 = {}, _defineProperty(_i2, r().reverse, Boolean(this.props.labelPositionReverse)), _defineProperty(_i2, r().baseline, Boolean(this.props.labelAlignBaseline)), _i2)),
              l = i(r().label, t, _defineProperty({}, r().disabled, this.props.disabled));

          var c = null;
          return this.props.label && (c = n.createElement("span", {
            className: l,
            title: this.props.title
          }, this.props.label)), n.createElement("label", {
            className: s
          }, n.createElement(o.CheckboxInput, _objectSpread({}, a, {
            className: e
          })), c);
        }
      }]);

      return c;
    }(n.PureComponent);

    c.defaultProps = {
      value: "on"
    };
    (0, s.makeSwitchGroupItem)(c);
  },
  57733: function _(e, t, a) {
    "use strict";

    a.d(t, {
      SwitchGroup: function SwitchGroup() {
        return o;
      },
      makeSwitchGroupItem: function makeSwitchGroupItem() {
        return l;
      }
    });
    var n = a(50959);

    var i = function i() {},
        s = (0, n.createContext)({
      getName: function getName() {
        return "";
      },
      getValues: function getValues() {
        return [];
      },
      getOnChange: function getOnChange() {
        return i;
      },
      subscribe: i,
      unsubscribe: i
    });

    var o =
    /*#__PURE__*/
    function (_n$PureComponent2) {
      _inherits(o, _n$PureComponent2);

      function o(e) {
        var _this;

        _classCallCheck(this, o);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e)), _this._subscriptions = new Set(), _this._getName = function () {
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

      _createClass(o, [{
        key: "render",
        value: function render() {
          return n.createElement(s.Provider, {
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
          return [].concat(_toConsumableArray(t), _toConsumableArray(e)).filter(function (a) {
            return t.includes(a) ? !e.includes(a) : e.includes(a);
          });
        }
      }]);

      return o;
    }(n.PureComponent);

    function l(e) {
      var t;
      return t =
      /*#__PURE__*/
      function (_n$PureComponent3) {
        _inherits(t, _n$PureComponent3);

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
            return n.createElement(e, _objectSpread({}, this.props, {
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
      }(n.PureComponent), t.contextType = s, t;
    }
  },
  50182: function _(e, t, a) {
    "use strict";

    a.d(t, {
      AdaptiveConfirmDialog: function AdaptiveConfirmDialog() {
        return m;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(94720),
        l = a(50151),
        r = a(44352),
        c = a(68335),
        d = a(35057),
        u = a(83073);

    var m =
    /*#__PURE__*/
    function (_n$PureComponent4) {
      _inherits(m, _n$PureComponent4);

      function m() {
        var _this3;

        _classCallCheck(this, m);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(m).apply(this, arguments)), _this3._dialogRef = n.createRef(), _this3._handleClose = function () {
          var _this3$props = _this3.props,
              e = _this3$props.defaultActionOnClose,
              t = _this3$props.onSubmit,
              a = _this3$props.onCancel,
              n = _this3$props.onClose;

          switch (e) {
            case "submit":
              t();
              break;

            case "cancel":
              a();
          }

          n();
        }, _this3._handleCancel = function () {
          _this3.props.onCancel(), _this3.props.onClose();
        }, _this3._handleKeyDown = function (e) {
          var _this3$props2 = _this3.props,
              t = _this3$props2.onSubmit,
              a = _this3$props2.submitButtonDisabled,
              n = _this3$props2.submitOnEnterKey;
          13 === (0, c.hashFromEvent)(e) && n && (e.preventDefault(), a || t());
        };
        return _this3;
      }

      _createClass(m, [{
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              e = _this$props2.render,
              t = _this$props2.onClose,
              a = _this$props2.onSubmit,
              i = _this$props2.onCancel,
              s = _this$props2.footerLeftRenderer,
              o = _this$props2.submitButtonText,
              l = _this$props2.submitButtonDisabled,
              r = _this$props2.defaultActionOnClose,
              c = _this$props2.submitOnEnterKey,
              u = _objectWithoutProperties(_this$props2, ["render", "onClose", "onSubmit", "onCancel", "footerLeftRenderer", "submitButtonText", "submitButtonDisabled", "defaultActionOnClose", "submitOnEnterKey"]);

          return n.createElement(d.AdaptivePopupDialog, _objectSpread({}, u, {
            ref: this._dialogRef,
            onKeyDown: this._handleKeyDown,
            render: this._renderChildren(),
            onClose: this._handleClose
          }));
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, l.ensureNotNull)(this._dialogRef.current).focus();
        }
      }, {
        key: "_renderChildren",
        value: function _renderChildren() {
          var _this4 = this;

          return function (e) {
            var _this4$props = _this4.props,
                t = _this4$props.render,
                i = _this4$props.footerLeftRenderer,
                l = _this4$props.additionalButtons,
                c = _this4$props.submitButtonText,
                d = _this4$props.submitButtonDisabled,
                m = _this4$props.onSubmit,
                h = _this4$props.cancelButtonText,
                _this4$props$showCanc = _this4$props.showCancelButton,
                p = _this4$props$showCanc === void 0 ? !0 : _this4$props$showCanc,
                b = _this4$props.submitButtonClassName,
                v = _this4$props.cancelButtonClassName,
                g = _this4$props.buttonsWrapperClassName;
            return n.createElement(n.Fragment, null, t(e), n.createElement("div", {
              className: u.footer
            }, i && i(e.isSmallWidth), n.createElement("div", {
              className: s()(u.buttons, g)
            }, l, p && n.createElement(o.Button, {
              className: v,
              name: "cancel",
              appearance: "stroke",
              onClick: _this4._handleCancel
            }, null != h ? h : r.t(null, void 0, a(20036))), n.createElement("span", {
              className: u.submitButton
            }, n.createElement(o.Button, {
              className: b,
              disabled: d,
              name: "submit",
              onClick: m,
              "data-name": "submit-button"
            }, null != c ? c : r.t(null, void 0, a(68988)))))));
          };
        }
      }]);

      return m;
    }(n.PureComponent);

    m.defaultProps = {
      defaultActionOnClose: "submit",
      submitOnEnterKey: !0
    };
  },
  35057: function _(e, t, a) {
    "use strict";

    a.d(t, {
      AdaptivePopupDialog: function AdaptivePopupDialog() {
        return T;
      }
    });
    var n = a(50959),
        i = a(50151);
    var s = a(97754),
        o = a.n(s),
        l = a(68335),
        r = a(38223),
        c = a(35749),
        d = a(63016),
        u = a(1109),
        m = a(24437),
        h = a(90692),
        p = a(95711);
    var b = a(52092),
        v = a(76422),
        g = a(9745);

    var _ = n.createContext({
      setHideClose: function setHideClose() {}
    });

    var f = a(7720),
        S = a(69827);

    function y(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          a = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
          i = e.subtitle,
          _e$showCloseIcon = e.showCloseIcon,
          s = _e$showCloseIcon === void 0 ? !0 : _e$showCloseIcon,
          l = e.onClose,
          r = e.onCloseButtonKeyDown,
          c = e.renderBefore,
          d = e.renderAfter,
          u = e.draggable,
          m = e.className,
          h = e.unsetAlign,
          p = e.closeAriaLabel,
          b = e.closeButtonReference,
          _ref = (0, n.useState)(!1),
          _ref2 = _slicedToArray(_ref, 2),
          v = _ref2[0],
          y = _ref2[1];

      return n.createElement(_.Provider, {
        value: {
          setHideClose: y
        }
      }, n.createElement("div", {
        className: o()(S.container, m, (i || h) && S.unsetAlign)
      }, c, n.createElement("div", {
        "data-dragg-area": u,
        className: S.title
      }, n.createElement("div", {
        className: o()(a ? S.textWrap : S.ellipsis)
      }, t), i && n.createElement("div", {
        className: o()(S.ellipsis, S.subtitle)
      }, i)), d, s && !v && n.createElement("button", {
        className: S.close,
        onClick: l,
        onKeyDown: r,
        "data-name": "close",
        "aria-label": p,
        type: "button",
        ref: b
      }, n.createElement(g.Icon, {
        className: S.icon,
        icon: f,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var C = a(53017),
        w = a(90186),
        N = a(55596);
    var x = {
      vertical: 20
    },
        k = {
      vertical: 0
    };

    var T =
    /*#__PURE__*/
    function (_n$PureComponent5) {
      _inherits(T, _n$PureComponent5);

      function T() {
        var _this5;

        _classCallCheck(this, T);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(T).apply(this, arguments)), _this5._controller = null, _this5._reference = null, _this5._orientationMediaQuery = null, _this5._renderChildren = function (e, t) {
          return _this5._controller = e, _this5.props.render({
            requestResize: _this5._requestResize,
            centerAndFit: _this5._centerAndFit,
            isSmallWidth: t
          });
        }, _this5._handleReference = function (e) {
          return _this5._reference = e;
        }, _this5._handleCloseBtnClick = function () {
          _this5.props.onKeyboardClose && _this5.props.onKeyboardClose(), _this5._handleClose();
        }, _this5._handleClose = function () {
          _this5.props.onClose();
        }, _this5._handleOpen = function () {
          void 0 !== _this5.props.onOpen && _this5.props.isOpened && _this5.props.onOpen(_this5.props.fullScreen || window.matchMedia(m.DialogBreakpoints.TabletSmall).matches);
        }, _this5._handleKeyDown = function (e) {
          if (!e.defaultPrevented) {
            if (_this5.props.onKeyDown && _this5.props.onKeyDown(e), 27 === (0, l.hashFromEvent)(e)) {
              if (e.defaultPrevented) return;
              if (_this5.props.forceCloseOnEsc && _this5.props.forceCloseOnEsc()) return _this5.props.onKeyboardClose && _this5.props.onKeyboardClose(), void _this5._handleClose();

              var _document = document,
                  _a = _document.activeElement,
                  _n2 = (0, i.ensureNotNull)(_this5._reference);

              if (null !== _a) {
                if (e.preventDefault(), "true" === (t = _a).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void _this5._handleClose();
                if ((0, c.isTextEditingField)(_a)) return void _n2.focus();
                if (_n2.contains(_a)) return _this5.props.onKeyboardClose && _this5.props.onKeyboardClose(), void _this5._handleClose();
              }
            }

            var t, a;
            (function (e) {
              if ("function" == typeof e) return e();
              return Boolean(e);
            })(_this5.props.disableTabNavigationContainment) || (a = e, [9, l.Modifiers.Shift + 9].includes((0, l.hashFromEvent)(a)) && a.stopPropagation());
          }
        }, _this5._requestResize = function () {
          null !== _this5._controller && _this5._controller.recalculateBounds();
        }, _this5._centerAndFit = function () {
          null !== _this5._controller && _this5._controller.centerAndFit();
        }, _this5._calculatePositionWithOffsets = function (e, t) {
          var a = (0, i.ensureDefined)(_this5.props.fullScreenViewOffsets).value();
          return {
            top: a.top,
            left: (0, r.isRtl)() ? -a.right : a.left,
            width: t.clientWidth - a.left - a.right,
            height: t.clientHeight - a.top - a.bottom
          };
        };
        return _this5;
      }

      _createClass(T, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || v.subscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t) : e.addListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || v.unsubscribe(b.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t) : e.removeListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, i.ensureNotNull)(this._reference).focus();
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._reference;
        }
      }, {
        key: "contains",
        value: function contains(e) {
          var t, a;
          return null !== (a = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) && void 0 !== a && a;
        }
      }, {
        key: "render",
        value: function render() {
          var _this6 = this;

          var _this$props3 = this.props,
              e = _this$props3.className,
              t = _this$props3.wrapperClassName,
              a = _this$props3.headerClassName,
              i = _this$props3.isOpened,
              s = _this$props3.title,
              l = _this$props3.titleTextWrap,
              r = _this$props3.dataName,
              c = _this$props3.onClickOutside,
              b = _this$props3.additionalElementPos,
              v = _this$props3.additionalHeaderElement,
              g = _this$props3.backdrop,
              _this$props3$shouldFo = _this$props3.shouldForceFocus,
              _ = _this$props3$shouldFo === void 0 ? !0 : _this$props3$shouldFo,
              f = _this$props3.shouldReturnFocus,
              S = _this$props3.onForceFocus,
              T = _this$props3.showSeparator,
              E = _this$props3.subtitle,
              _this$props3$draggabl = _this$props3.draggable,
              D = _this$props3$draggabl === void 0 ? !0 : _this$props3$draggabl,
              _this$props3$fullScre = _this$props3.fullScreen,
              I = _this$props3$fullScre === void 0 ? !1 : _this$props3$fullScre,
              _this$props3$showClos = _this$props3.showCloseIcon,
              B = _this$props3$showClos === void 0 ? !0 : _this$props3$showClos,
              _this$props3$rounded = _this$props3.rounded,
              L = _this$props3$rounded === void 0 ? !0 : _this$props3$rounded,
              O = _this$props3.isAnimationEnabled,
              M = _this$props3.growPoint,
              A = _this$props3.dialogTooltip,
              z = _this$props3.unsetHeaderAlign,
              P = _this$props3.onDragStart,
              R = _this$props3.dataDialogName,
              j = _this$props3.closeAriaLabel,
              K = _this$props3.containerAriaLabel,
              H = _this$props3.reference,
              G = _this$props3.containerTabIndex,
              W = _this$props3.closeButtonReference,
              F = _this$props3.onCloseButtonKeyDown,
              U = _this$props3.shadowed,
              q = _this$props3.fullScreenViewOffsets,
              Z = "after" !== b ? v : void 0,
              V = "after" === b ? v : void 0,
              Q = "string" == typeof s ? s : R || "",
              Y = (0, w.filterDataProps)(this.props),
              J = (0, C.mergeRefs)([this._handleReference, H]);

          return n.createElement(h.MatchMedia, {
            rule: m.DialogBreakpoints.SmallHeight
          }, function (b) {
            return n.createElement(h.MatchMedia, {
              rule: m.DialogBreakpoints.TabletSmall
            }, function (m) {
              return n.createElement(d.PopupDialog, _objectSpread({
                rounded: !(m || I) && L,
                className: o()(N.dialog, I && q && N.bounded, e),
                isOpened: i,
                reference: J,
                onKeyDown: _this6._handleKeyDown,
                onClickOutside: c,
                onClickBackdrop: c,
                fullscreen: m || I,
                guard: b ? k : x,
                boundByScreen: m || I,
                shouldForceFocus: _,
                onForceFocus: S,
                shouldReturnFocus: f,
                backdrop: g,
                draggable: D,
                isAnimationEnabled: O,
                growPoint: M,
                name: _this6.props.dataName,
                dialogTooltip: A,
                onDragStart: P,
                containerAriaLabel: K,
                containerTabIndex: G,
                calculateDialogPosition: I && q ? _this6._calculatePositionWithOffsets : void 0,
                shadowed: U
              }, Y), n.createElement("div", {
                className: o()(N.wrapper, t),
                "data-name": r,
                "data-dialog-name": Q
              }, void 0 !== s && n.createElement(y, {
                draggable: D && !(m || I),
                onClose: _this6._handleCloseBtnClick,
                renderAfter: V,
                renderBefore: Z,
                subtitle: E,
                title: s,
                titleTextWrap: l,
                showCloseIcon: B,
                className: a,
                unsetAlign: z,
                closeAriaLabel: j,
                closeButtonReference: W,
                onCloseButtonKeyDown: F
              }), T && n.createElement(u.Separator, {
                className: N.separator
              }), n.createElement(p.PopupContext.Consumer, null, function (e) {
                return _this6._renderChildren(e, m || I);
              })));
            });
          });
        }
      }]);

      return T;
    }(n.PureComponent);
  },
  1109: function _(e, t, a) {
    "use strict";

    a.d(t, {
      Separator: function Separator() {
        return o;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a(45719);

    function o(e) {
      return n.createElement("div", {
        className: i(s.separator, e.className)
      });
    }
  },
  92297: function _(e) {
    e.exports = {
      loading: "loading-BPaLXf0z"
    };
  },
  15747: function _(e) {
    e.exports = {
      container: "container-CD9TBN7D",
      withSuggestions: "withSuggestions-CD9TBN7D",
      title: "title-CD9TBN7D",
      autocomplete: "autocomplete-CD9TBN7D",
      saveSymbol: "saveSymbol-CD9TBN7D",
      saveInterval: "saveInterval-CD9TBN7D",
      indicators: "indicators-CD9TBN7D",
      hintLabel: "hintLabel-CD9TBN7D",
      hintMark: "hintMark-CD9TBN7D",
      hidden: "hidden-CD9TBN7D"
    };
  },
  13932: function _(e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      StudyTemplateSaver: function StudyTemplateSaver() {
        return j;
      }
    });
    var n = a(50151),
        i = a(44352),
        s = a(50959),
        o = a(962),
        l = (a(42053), a(97754)),
        r = a(15294),
        c = a(21788),
        d = a(9745),
        u = a(50182),
        m = a(60508),
        h = a(26996),
        p = a(92297);

    function b(e) {
      var t = e.isLoading;
      return s.createElement("span", {
        className: t ? p.loading : void 0
      }, i.t(null, void 0, a(85520)), t && s.createElement(h.Loader, {
        color: "white"
      }));
    }

    var v =
    /*#__PURE__*/
    function (_s$PureComponent) {
      _inherits(v, _s$PureComponent);

      function v(e) {
        var _this7;

        _classCallCheck(this, v);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e)), _this7._dialogRef = s.createRef(), _this7._manager = null, _this7._handleSubmit = function () {
          _this7.setState({
            isLoading: !0
          }), _this7.props.onSubmit(_assertThisInitialized(_this7));
        }, _this7.state = {
          isLoading: !1
        };
        return _this7;
      }

      _createClass(v, [{
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              e = _this$props4.isOpened,
              t = _this$props4.saveDisabled,
              a = _this$props4.title,
              n = _this$props4.onClose;
          return s.createElement(u.AdaptiveConfirmDialog, {
            ref: this._dialogRef,
            onClose: n,
            onSubmit: this._handleSubmit,
            onCancel: n,
            onClickOutside: n,
            isOpened: e,
            title: a,
            dataName: "save-rename-dialog",
            render: this._renderDialogBody(),
            defaultActionOnClose: "none",
            submitButtonText: s.createElement(b, {
              isLoading: this.state.isLoading
            }),
            submitButtonDisabled: t
          });
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, n.ensureNotNull)(this._dialogRef.current).focus();
        }
      }, {
        key: "manager",
        value: function manager() {
          return this._manager;
        }
      }, {
        key: "submit",
        value: function submit() {
          this.props.onSubmit(this);
        }
      }, {
        key: "close",
        value: function close() {
          this.props.onClose();
        }
      }, {
        key: "dropLoading",
        value: function dropLoading() {
          this.setState({
            isLoading: !1
          });
        }
      }, {
        key: "_renderDialogBody",
        value: function _renderDialogBody() {
          var _this8 = this;

          return function () {
            return s.createElement(m.SlotContext.Consumer, null, function (e) {
              return _this8._manager = e, _this8.props.children;
            });
          };
        }
      }]);

      return v;
    }(s.PureComponent);

    var g = a(33547),
        _ = a(85508),
        f = a(15747),
        S = a(49483);

    var y = i.t(null, void 0, a(50912)),
        C = i.t(null, void 0, a(40898)),
        w = i.t(null, void 0, a(33455)),
        N = i.t(null, void 0, a(63135)),
        x = [f.hintMark, "apply-common-tooltip"];

    function k(e) {
      var t = e.title,
          a = e.saveSymbolHintText,
          i = e.saveIntervalHintText,
          o = e.indicatorsText,
          u = e.source,
          m = e.onClose,
          h = e.onSubmit,
          _ref3 = (0, s.useState)(""),
          _ref4 = _slicedToArray(_ref3, 2),
          p = _ref4[0],
          b = _ref4[1],
          _ref5 = (0, s.useState)(!1),
          _ref6 = _slicedToArray(_ref5, 2),
          S = _ref6[0],
          k = _ref6[1],
          _ref7 = (0, s.useState)(!1),
          _ref8 = _slicedToArray(_ref7, 2),
          T = _ref8[0],
          E = _ref8[1],
          _ref9 = (0, s.useState)(!1),
          _ref10 = _slicedToArray(_ref9, 2),
          D = _ref10[0],
          I = _ref10[1],
          B = (0, s.useRef)(null),
          L = (0, s.useRef)(null);

      return (0, s.useEffect)(function () {
        (0, n.ensureNotNull)(L.current).focus();
      }, []), s.createElement(v, {
        ref: B,
        isOpened: !0,
        saveDisabled: !p,
        title: t,
        onClose: m,
        onSubmit: function onSubmit(e) {
          h({
            title: p,
            saveSymbol: S,
            saveInterval: T
          }, e);
        }
      }, s.createElement("div", {
        className: l(f.container, D && f.withSuggestions)
      }, s.createElement("div", {
        className: f.title
      }, y), s.createElement("div", {
        className: f.autocomplete
      }, s.createElement(c.Autocomplete, {
        maxLength: 64,
        value: p,
        onChange: b,
        onBlur: function onBlur() {
          (0, n.ensureNotNull)(B.current).focus();
        },
        source: u,
        allowUserDefinedValues: !0,
        preventOnFocusOpen: !0,
        noEmptyText: !0,
        preventSearchOnEmptyQuery: !0,
        filter: g.autocompleteFilter,
        setupHTMLInput: function setupHTMLInput(e) {
          L.current = e;
        },
        onSuggestionsOpen: function onSuggestionsOpen() {
          I(!0);
        },
        onSuggestionsClose: function onSuggestionsClose() {
          I(!1);
        }
      })), s.createElement("div", {
        className: f.saveSymbol
      }, s.createElement(r.Checkbox, {
        label: s.createElement("span", {
          className: f.hintLabel
        }, w, s.createElement(d.Icon, {
          icon: _,
          className: l(x),
          title: a
        })),
        onChange: function onChange() {
          k(!S), (0, n.ensureNotNull)(B.current).focus();
        },
        checked: S
      })), s.createElement("div", {
        className: f.saveInterval
      }, s.createElement(r.Checkbox, {
        label: s.createElement("span", {
          className: f.hintLabel
        }, N, s.createElement(d.Icon, {
          icon: _,
          className: l(x),
          title: i
        })),
        onChange: function onChange() {
          E(!T), (0, n.ensureNotNull)(B.current).focus();
        },
        checked: T
      })), s.createElement("div", {
        className: f.title
      }, C), s.createElement("div", {
        className: l(f.indicators, D && f.withSuggestions)
      }, o)));
    }

    S.CheckMobile.any() && x.push(f.hidden);
    var T = a(76422),
        E = a(52092);

    var D =
    /*#__PURE__*/
    function () {
      function D(e) {
        var _this9 = this;

        _classCallCheck(this, D);

        this._container = document.createElement("div"), this.close = function () {
          _this9.unmount(), _this9._onClose && _this9._onClose();
        }, this.unmount = function () {
          T.unsubscribe(E.CLOSE_POPUPS_AND_DIALOGS_COMMAND, _this9.unmount, null), o.unmountComponentAtNode(_this9._container);
        }, this._title = e.title, this._saveSymbolHintText = e.saveSymbolHintText, this._saveIntervalHintText = e.saveIntervalHintText, this._indicatorsText = e.indicatorsText, this._source = e.source, this._onSubmit = e.onSubmit, this._onClose = e.onClose, T.subscribe(E.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this.unmount, null);
      }

      _createClass(D, [{
        key: "mount",
        value: function mount() {
          o.render(s.createElement(k, {
            title: this._title,
            saveSymbolHintText: this._saveSymbolHintText,
            saveIntervalHintText: this._saveIntervalHintText,
            indicatorsText: this._indicatorsText,
            source: this._source,
            onClose: this.close,
            onSubmit: this._onSubmit
          }), this._container);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.unmount();
        }
      }, {
        key: "show",
        value: function show() {
          this.mount();
        }
      }]);

      return D;
    }();

    var I = a(61595),
        B = a(3615),
        L = a(11321),
        O = a(39344);
    var M = i.t(null, void 0, a(21939)),
        A = i.t(null, void 0, a(61422)),
        z = i.t(null, void 0, a(30858)),
        P = i.t(null, void 0, a(83081));

    function R(e, t, a) {
      var n = function n() {
        I.backend.invalidateStudyTemplatesList(), I.backend.getStudyTemplatesList().then(t);
      };

      I.backend.saveStudyTemplate(e).then(n);
    }

    var j =
    /*#__PURE__*/
    function () {
      function j(e) {
        var _this10 = this;

        _classCallCheck(this, j);

        this._dialog = null, this._onSave = function (e) {
          _this10._options.onSave(e), _this10._close();
        }, this._showSaveDialog = function _callee() {
          var e, t, a;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e = _this10._controller.model().mainSeries().symbol();
                  t = _this10._controller.model().mainSeries().interval();
                  _context.next = 4;
                  return regeneratorRuntime.awrap(_this10._getActualTemplateList());

                case 4:
                  a = _context.sent;
                  _context.next = 7;
                  return regeneratorRuntime.awrap(_this10._showTemplateSaveRenameDialog(a, e, t));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          });
        }, this._close = function () {
          _this10._dialog && (_this10._dialog.destroy(), _this10._dialog = null);
        }, this._options = e, this._controller = e.controller;
      }

      _createClass(j, [{
        key: "show",
        value: function show() {
          window.runOrSignIn(this._showSaveDialog, {
            source: "Study templates save as",
            sourceMeta: "Chart"
          });
        }
      }, {
        key: "_prepareData",
        value: function _prepareData(e, t, a) {
          var n = this._controller.model().studyTemplate(t, a);

          return {
            name: e,
            content: JSON.stringify(n),
            meta_info: (0, O.createStudyTemplateMetaInfo)(this._controller, n.interval)
          };
        }
      }, {
        key: "_doSave",
        value: function _doSave(e, t, a) {
          var _this11 = this;

          var n = t.title,
              i = t.saveSymbol,
              s = t.saveInterval;
          if (!n) return;

          var o = a.manager() || void 0,
              l = this._prepareData(n, i, s);

          if (e.find(function (e) {
            return e.name === n;
          })) {
            var _e2 = function _e2(e) {
              e ? R(l, _this11._onSave) : (a.focus(), a.dropLoading());
            };

            (function (e, t) {
              return new Promise(function (a) {
                return (0, B.showConfirm)({
                  text: P.format({
                    templateName: e
                  }),
                  onConfirm: function onConfirm(_ref11) {
                    var e = _ref11.dialogClose;
                    a(!0), e();
                  },
                  onClose: function onClose() {
                    return a(!1);
                  }
                }, t);
              });
            })(n, o).then(_e2);
          } else {
            R(l, this._onSave);
          }
        }
      }, {
        key: "_getActualTemplateList",
        value: function _getActualTemplateList() {
          return I.backend.invalidateStudyTemplatesList(), I.backend.getStudyTemplatesList();
        }
      }, {
        key: "_showTemplateSaveRenameDialog",
        value: function _showTemplateSaveRenameDialog(e, t, a) {
          var _this12 = this;

          var n = (0, O.createStudyTemplateMetaInfo)(this._controller);
          (this._dialog = new D({
            source: e.map(function (e) {
              return e.name;
            }),
            title: M,
            saveSymbolHintText: A.format({
              symbol: t
            }),
            saveIntervalHintText: z.format({
              interval: (0, L.translatedIntervalString)(a)
            }),
            indicatorsText: (0, O.descriptionString)(n.indicators),
            onSubmit: function onSubmit(t, a) {
              return _this12._doSave(e, t, a);
            },
            onClose: this._close
          })).show();
        }
      }]);

      return j;
    }();
  },
  39344: function _(e, t, a) {
    "use strict";

    a.d(t, {
      createStudyTemplateMetaInfo: function createStudyTemplateMetaInfo() {
        return s;
      },
      descriptionString: function descriptionString() {
        return o;
      }
    });
    var n = a(28853),
        i = a(37591);

    function s(e, t) {
      return {
        indicators: e.orderedDataSources(!0).filter(function (e) {
          return (0, n.isStudy)(e) && !0;
        }).map(function (e) {
          return {
            id: e.metaInfo().id,
            description: e.title(i.TitleDisplayTarget.StatusLine, !0, void 0, !0)
          };
        }),
        interval: t
      };
    }

    function o(e) {
      var t = new Map();
      return e.forEach(function (e) {
        var _ref12 = t.get(e.id) || [e.description, 0],
            _ref13 = _slicedToArray(_ref12, 2),
            a = _ref13[0],
            n = _ref13[1];

        t.set(e.id, [a, n + 1]);
      }), Array.from(t.values()).map(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
            e = _ref15[0],
            t = _ref15[1];

        return "".concat(e).concat(t > 1 ? " x ".concat(t) : "");
      }).join(", ");
    }
  },
  33547: function _(e, t, a) {
    "use strict";

    function n(e, t) {
      return Boolean("" === e || e && -1 !== t.toLowerCase().indexOf(e.toLowerCase()));
    }

    a.d(t, {
      autocompleteFilter: function autocompleteFilter() {
        return n;
      }
    });
  },
  65890: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
  },
  85508: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
  },
  21939: function _(e) {
    e.exports = {
      ar: ["حفظ قالب المؤشر"],
      ca_ES: "Save Indicator Template",
      cs: "Save Indicator Template",
      de: ["Indikatorvorlage speichern"],
      el: "Save Indicator Template",
      en: "Save Indicator Template",
      es: ["Guardar plantilla de indicadores"],
      fa: "Save Indicator Template",
      fr: ["Sauver le modèle d'indicateur"],
      he_IL: ["שמור תבנית אינדיקטור"],
      hu_HU: "Save Indicator Template",
      id_ID: ["Simpan Template Indikator"],
      it: ["Salva modello indicatore"],
      ja: ["インジケーターテンプレートを保存"],
      ko: ["인디케이터 템플릿 세이브"],
      ms_MY: ["Simpan Templat Penunjuk"],
      nl_NL: "Save Indicator Template",
      pl: ["Zapisz szablon wskaźnika"],
      pt: ["Salvar Conjunto de Indicadores"],
      ro: "Save Indicator Template",
      ru: ["Сохранить шаблон индикаторов"],
      sv: ["Spara indikatormall"],
      th: ["บันทึกรูปแบบอินดิเคเตอร์"],
      tr: ["Gösterge Şablonu Kaydet"],
      vi: ["Lưu mẫu chỉ báo"],
      zh: ["保存指标模板"],
      zh_TW: ["儲存指標範本為"]
    };
  },
  40898: function _(e) {
    e.exports = {
      ar: ["المؤشرات المحفوظة"],
      ca_ES: "Saved indicators",
      cs: "Saved indicators",
      de: ["Gespeicherte Indikatoren"],
      el: "Saved indicators",
      en: "Saved indicators",
      es: ["Indicadores guardados"],
      fa: "Saved indicators",
      fr: ["Indicateurs sauvegardés"],
      he_IL: ["אינדיקטורים שמורים"],
      hu_HU: "Saved indicators",
      id_ID: ["Indikator tersimpan"],
      it: ["Indicatori salvati"],
      ja: ["保存されたインジケーター"],
      ko: ["세이브된 인디케이터"],
      ms_MY: ["Petunjuk yang disimpan"],
      nl_NL: "Saved indicators",
      pl: ["Zapisane wskaźniki"],
      pt: ["Indicadores salvos"],
      ro: "Saved indicators",
      ru: ["Сохранённые индикаторы"],
      sv: ["Sparade indikatorer"],
      th: ["อินดิเคเตอร์ที่เซฟไว้"],
      tr: ["Kaydedilmiş göstergeler"],
      vi: ["Chỉ báo đã được lưu"],
      zh: ["已存指标"],
      zh_TW: ["已存指標"]
    };
  },
  30858: function _(e) {
    e.exports = {
      ar: ["سيؤدي تحديد هذا الخيار إلى تعيين الفاصل الزمني‎{interval} ‎ على الرسم البياني عند تطبيق هذا القالب"],
      ca_ES: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      cs: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      de: ["Durch Auswahl dieser Option wird das {interval}-Intervall im Chart festgelegt, wenn diese Vorlage angewendet wird"],
      el: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      en: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      es: ["Al seleccionar esta opción se establecerá el intervalo {interval} en el gráfico cuando se aplique esta plantilla"],
      fa: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      fr: ["En sélectionnant cette option, l'intervalle {interval} sera placé sur le graphique lorsque ce modèle est appliqué"],
      he_IL: ["בחירת אפשרות זו תגדיר את האינטרוול ‎{interval}‎ בגרף כאשר מיושמת תבנית זו"],
      hu_HU: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      id_ID: ["Memilih opsi ini akan mengatur interval {interval} pada chart saat template ini diterapkan"],
      it: ["Selezionando questa opzione, il modello viene applicato cambiando il timeframe in {interval}"],
      ja: ["この項目を選択すると、テンプレートが適用された時にチャートの時間足が{interval}に設定されます"],
      ko: ["이 옵션을 고르면 이 템플릿이 적용될 때 차트에 {interval} 을 세팅하게 됩니다."],
      ms_MY: ["Memilih pilihan ini akan menetapkan selang masa {interval} pada carta apabila templat ini digunakan"],
      nl_NL: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      pl: ["Wybór tej opcji spowoduje ustawienie na wykresie interwału {interval} po zastosowaniu tego szablonu"],
      pt: ["Selecionar esta opção definirá o intervalo {interval} no gráfico quando este modelo for aplicado"],
      ro: "Selecting this option will set the {interval} interval on the chart when this template is applied",
      ru: ["Включите, чтобы установить на графике интервал {interval}, когда этот шаблон применён"],
      sv: ["Om du väljer detta alternativ ställer du in intervallet {interval} i diagrammet när den här mallen används"],
      th: ["การเลือกตัวเลือกนี้จะเป็นการกำหนดช่วงเวลา {interval} บนชาร์ต เมื่อเทมเพลตนี้ถูกใช้งาน"],
      tr: ["Bu seçeneğin belirlenmesi ile, bu taslak uygulandığında grafikte {interval} aralığı ayarlanır"],
      vi: ["Chọn tùy chọn này sẽ đặt khoảng thời gian {interval} trên biểu đồ khi mẫu này được áp dụng"],
      zh: ["套用此模板时，选择此选项将在图表上设置{interval}周期"],
      zh_TW: ["套用此模板時，選擇此選項將在圖表上設置{interval}周期"]
    };
  },
  61422: function _(e) {
    e.exports = {
      ar: ["سيؤدي تحديد هذا الخيار إلى تعيين الرمز ‎{symbol}‎ على الرسم البياني عند تطبيق هذا القالب"],
      ca_ES: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      cs: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      de: ["Wenn Sie diese Option wählen, wird das {symbol}-Symbol auf dem Chart gesetzt, wenn diese Vorlage angewendet wird."],
      el: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      en: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      es: ["Al seleccionar esta opción se establecerá el símbolo {symbol} en el gráfico cuando se utilice esta plantilla"],
      fa: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      fr: ["En sélectionnant cette option, le symbole {symbol} sera placé sur le graphique lorsque ce modèle est appliqué"],
      he_IL: ["בחירת אפשרות זו תגדיר את הסימול ‎{symbol}‎ בגרף כאשר מיושמת תבנית זו"],
      hu_HU: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      id_ID: ["Memilih opsi ini akan mengatur simbol {symbol} pada chart saat template ini diterapkan"],
      it: ["Selezionando questa opzione, quando il modello viene applicato, viene inserito anche il simbolo {symbol}"],
      ja: ["この項目を選択すると、テンプレートが適用された時にチャートのシンボルが{symbol}に設定されます"],
      ko: ["이 옵션을 고르면 이 템플릿이 적용될 때 차트에 {symbol} 을 세팅하게 됩니다."],
      ms_MY: ["Memilih pilihan ini akan menetapkan simbol {symbol} pada carta apabila templat ini digunakan"],
      nl_NL: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      pl: ["Wybór tej opcji spowoduje ustawienie na wykresie symbolu {symbol} po zastosowaniu tego szablonu"],
      pt: ["Selecionar esta opção definirá o símbolo {symbol} no gráfico quando este modelo for aplicado"],
      ro: "Selecting this option will set the {symbol} symbol on the chart when this template is applied",
      ru: ["Включите, чтобы установить на графике символ {symbol}, когда этот шаблон применён"],
      sv: ["Om du väljer detta alternativ ställer du in symbolen {symbol} i diagrammet när den här mallen används"],
      th: ["การเลือกตัวเลือกนี้จะเป็นการกำหนดตัวย่อ {symbol} บนชาร์ต เมื่อเทมเพลตนี้ถูกใช้งาน"],
      tr: ["Bu seçeneğin belirlenmesi ile, bu taslak uygulandığında grafikte {symbol} sembolü ayarlanacaktır."],
      vi: ["Chọn lựa chọn này sẽ đặt mã giao dịch {symbol} trên biểu đồ khi mẫu hình được áp dụng"],
      zh: ["套用此模板时，选择此选项将在图表上设置{symbol}商品"],
      zh_TW: ["套用此模板時，選擇此選項將在圖表上設置{symbol}商品"]
    };
  },
  83081: function _(e) {
    e.exports = {
      ar: ['نموذج الدراسة "‎{templateName}‎" موجود بالفعل، هل تريد حقًا استبداله؟'],
      ca_ES: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      cs: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      de: ["Studienvorlage '{templateName}' existiert bereits. Möchten Sie diese wirklich ersetzen?"],
      el: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      en: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      es: ["La plantilla de estudio '{templateName}' ya existe. ¿Está seguro de que quiere reemplazarla?"],
      fa: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      fr: ["Le Modèle d'Etude '{templateName}' existe déjà. Voulez-vous vraiment le remplacer ?"],
      he_IL: ["תבנית המחקר ‎{templateName}‎ קיימת כבר. האם אתה באמת רוצה להחליף אותה?"],
      hu_HU: ["{templateName} névvel már létezik tanulmánysablon. Biztos, hogy cserélni akarod?"],
      id_ID: ["Template Studi '{templateName}' sudah ada. Apakah anda ingin menggantinya?"],
      it: ["Il Modello di studio '{templateName}' esiste già. Sostituirlo?"],
      ja: ["テンプレート {templateName} は既に存在します。本当に上書きしますか？"],
      ko: ["같은 이름의 스터디 템플릿 '{templateName}' 가 이미 있습니다. 정말로 바꾸시겠습니까?"],
      ms_MY: ["Templat Kajian '{templateName}' sudah ada. Adakah anda benar-benar mahu menggantikannya?"],
      nl_NL: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      pl: ["Szablon analizy '{templateName}' już istnieje. Naprawdę chcesz go zastąpić?"],
      pt: ["O modelo de estudo '{templateName}' já existe. Deseja substituí-lo?"],
      ro: "Study Template '{templateName}' already exists. Do you really want to replace it?",
      ru: ["Шаблон индикаторов '{templateName}' уже существует. Вы действительно хотите заменить его?"],
      sv: ["Studiemall '{templateName}' finns redan. Vill du verkligen ersätta den?"],
      th: ["เทมเพลตการศึกษา '{templateName}' มีอยู่แล้ว คุณต้องการที่จะแทนที่มันใช่หรือไม่?"],
      tr: ["'{templateName}' Çalışma Şablonu zaten var.Yenisiyle değiştirmek mi istiyorsunuz?"],
      vi: ["Mẫu Nghiên cứu '{templateName}' đã tồn tại. Bạn có thực sự muốn thay thế nó?"],
      zh: ["指标模板{templateName}已经存在。确定替换？"],
      zh_TW: ["研究模板'{templateName}'已經存在，確定替換？"]
    };
  },
  63135: function _(e) {
    e.exports = {
      ar: ["تذكر الفاصل الزمني"],
      ca_ES: "Remember Interval",
      cs: "Remember Interval",
      de: ["Interval merken"],
      el: "Remember Interval",
      en: "Remember Interval",
      es: ["Recordar intervalo"],
      fa: "Remember Interval",
      fr: ["Se souvenir de l'intervalle"],
      he_IL: ["זכור אינטרוול"],
      hu_HU: "Remember Interval",
      id_ID: ["Ingat Interval"],
      it: ["Ricorda timeframe"],
      ja: ["時間足を記憶"],
      ko: ["인터벌 기억하기"],
      ms_MY: ["Ingat Selang Masa"],
      nl_NL: "Remember Interval",
      pl: ["Zapamiętaj interwał"],
      pt: ["Lembrar do Intervalo"],
      ro: "Remember Interval",
      ru: ["Запомнить интервал"],
      sv: ["Kom ihåg intervall"],
      th: ["จำช่วงเวลา"],
      tr: ["Aralığı Hatırla"],
      vi: ["Nhớ Khoảng thời gian"],
      zh: ["记住周期"],
      zh_TW: ["記住周期"]
    };
  },
  33455: function _(e) {
    e.exports = {
      ar: ["تذكر الرمز"],
      ca_ES: "Remember Symbol",
      cs: "Remember Symbol",
      de: ["Symbol merken"],
      el: "Remember Symbol",
      en: "Remember Symbol",
      es: ["Recordar símbolo"],
      fa: "Remember Symbol",
      fr: ["Se souvenir du symbole"],
      he_IL: ["זכור את הסימול"],
      hu_HU: "Remember Symbol",
      id_ID: ["Ingat Simbol"],
      it: ["Ricorda simbolo"],
      ja: ["シンボルを記憶"],
      ko: ["심볼 기억하기"],
      ms_MY: ["Ingat Simbol"],
      nl_NL: "Remember Symbol",
      pl: ["Zapamiętaj symbol"],
      pt: ["Lembrar do Símbolo"],
      ro: "Remember Symbol",
      ru: ["Запомнить инструмент"],
      sv: ["Kom ihåg symbol"],
      th: ["จำตัวย่อ"],
      tr: ["Sembolü Hatırla"],
      vi: ["Nhớ Mã giao dịch"],
      zh: ["记住商品"],
      zh_TW: ["記住商品"]
    };
  },
  50912: function _(e) {
    e.exports = {
      ar: ["أسم القالب"],
      ca_ES: ["Nom de la plantilla"],
      cs: "Template name",
      de: ["Name der Vorlage"],
      el: "Template name",
      en: "Template name",
      es: ["Nombre de la plantilla"],
      fa: "Template name",
      fr: ["Nom du modèle"],
      he_IL: ["שם תבנית"],
      hu_HU: ["Sablon neve"],
      id_ID: ["Nama template"],
      it: ["Nome modello"],
      ja: ["テンプレート名"],
      ko: ["템플릿이름"],
      ms_MY: ["Nama templat"],
      nl_NL: "Template name",
      pl: ["Nazwa Szablonu"],
      pt: ["Nome do modelo"],
      ro: "Template name",
      ru: ["Имя шаблона"],
      sv: ["Mallnamn"],
      th: ["ชื่อเทมเพลต"],
      tr: ["Şablon adı"],
      vi: ["Tên Mẫu"],
      zh: ["模板名称"],
      zh_TW: ["範本名稱"]
    };
  }
}]);