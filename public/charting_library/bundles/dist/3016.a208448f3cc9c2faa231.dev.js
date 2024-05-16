"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3016], {
  19175: function _(t) {
    t.exports = {
      dialog: "dialog-CPGBbsmc",
      rounded: "rounded-CPGBbsmc",
      shadowed: "shadowed-CPGBbsmc",
      fullscreen: "fullscreen-CPGBbsmc",
      darker: "darker-CPGBbsmc",
      backdrop: "backdrop-CPGBbsmc"
    };
  },
  8326: function _(t) {
    t.exports = {
      "tablet-normal-breakpoint": "screen and (max-width: 768px)",
      "tooltip-offset": "20px",
      dialog: "dialog-qyCw0PaN",
      dragging: "dragging-qyCw0PaN",
      dialogAnimatedAppearance: "dialogAnimatedAppearance-qyCw0PaN",
      dialogAnimation: "dialogAnimation-qyCw0PaN",
      dialogTooltip: "dialogTooltip-qyCw0PaN"
    };
  },
  95711: function _(t, e, i) {
    "use strict";

    i.d(e, {
      PopupContext: function PopupContext() {
        return s;
      }
    });
    var s = i(50959).createContext(null);
  },
  63016: function _(t, e, i) {
    "use strict";

    i.d(e, {
      PopupDialog: function PopupDialog() {
        return w;
      }
    });
    var s = i(50959),
        o = i(97754),
        n = i(50151),
        a = i(60508),
        r = i(67961),
        l = i(90186),
        h = i(19175);

    var d =
    /*#__PURE__*/
    function (_s$PureComponent) {
      _inherits(d, _s$PureComponent);

      function d() {
        var _this;

        _classCallCheck(this, d);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this._manager = new r.OverlapManager(), _this._handleSlot = function (t) {
          _this._manager.setContainer(t);
        };
        return _this;
      }

      _createClass(d, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              _this$props$rounded = _this$props.rounded,
              t = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              _this$props$shadowed = _this$props.shadowed,
              e = _this$props$shadowed === void 0 ? !0 : _this$props$shadowed,
              _this$props$fullscree = _this$props.fullscreen,
              i = _this$props$fullscree === void 0 ? !1 : _this$props$fullscree,
              _this$props$darker = _this$props.darker,
              n = _this$props$darker === void 0 ? !1 : _this$props$darker,
              r = _this$props.className,
              d = _this$props.backdrop,
              _this$props$container = _this$props.containerTabIndex,
              c = _this$props$container === void 0 ? -1 : _this$props$container,
              u = o(r, h.dialog, t && h.rounded, e && h.shadowed, i && h.fullscreen, n && h.darker),
              p = (0, l.filterDataProps)(this.props),
              g = this.props.style ? _objectSpread({}, this._createStyles(), {}, this.props.style) : this._createStyles();
          return s.createElement(s.Fragment, null, s.createElement(a.SlotContext.Provider, {
            value: this._manager
          }, d && s.createElement("div", {
            onClick: this.props.onClickBackdrop,
            className: h.backdrop
          }), s.createElement("div", _objectSpread({}, p, {
            className: u,
            style: g,
            ref: this.props.reference,
            onFocus: this.props.onFocus,
            onMouseDown: this.props.onMouseDown,
            onMouseUp: this.props.onMouseUp,
            onClick: this.props.onClick,
            onKeyDown: this.props.onKeyDown,
            tabIndex: c,
            "aria-label": this.props.containerAriaLabel
          }), this.props.children)), s.createElement(a.Slot, {
            reference: this._handleSlot
          }));
        }
      }, {
        key: "_createStyles",
        value: function _createStyles() {
          var _this$props2 = this.props,
              t = _this$props2.bottom,
              e = _this$props2.left,
              i = _this$props2.width,
              s = _this$props2.right,
              o = _this$props2.top,
              n = _this$props2.zIndex,
              a = _this$props2.height;
          return {
            bottom: t,
            left: e,
            right: s,
            top: o,
            zIndex: n,
            maxWidth: i,
            height: a
          };
        }
      }]);

      return d;
    }(s.PureComponent);

    var c = i(86431),
        u = i(76594),
        p = i(37160);

    function g(t, e, i, s) {
      return t + e > s && (t = s - e), t < i && (t = i), t;
    }

    function _(t) {
      return {
        x: (0, p.clamp)(t.x, 20, document.documentElement.clientWidth - 20),
        y: (0, p.clamp)(t.y, 20, window.innerHeight - 20)
      };
    }

    function m(t) {
      return {
        x: t.clientX,
        y: t.clientY
      };
    }

    function f(t) {
      return {
        x: t.touches[0].clientX,
        y: t.touches[0].clientY
      };
    }

    var v =
    /*#__PURE__*/
    function () {
      function v(t, e) {
        var _this2 = this;

        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          boundByScreen: !0
        };

        _classCallCheck(this, v);

        this._drag = null, this._canBeTouchClick = !1, this._frame = null, this._onMouseDragStart = function (t) {
          if (0 !== t.button || _this2._isTargetNoDraggable(t)) return;
          t.preventDefault(), document.addEventListener("mousemove", _this2._onMouseDragMove), document.addEventListener("mouseup", _this2._onMouseDragEnd);

          var e = _(m(t));

          _this2._dragStart(e);
        }, this._onTouchDragStart = function (t) {
          if (_this2._isTargetNoDraggable(t)) return;
          _this2._canBeTouchClick = !0, t.preventDefault(), _this2._header.addEventListener("touchmove", _this2._onTouchDragMove, {
            passive: !1
          });

          var e = _(f(t));

          _this2._dragStart(e);
        }, this._onMouseDragEnd = function (t) {
          t.target instanceof Node && _this2._header.contains(t.target) && t.preventDefault(), document.removeEventListener("mousemove", _this2._onMouseDragMove), document.removeEventListener("mouseup", _this2._onMouseDragEnd), _this2._onDragStop();
        }, this._onTouchDragEnd = function (t) {
          _this2._header.removeEventListener("touchmove", _this2._onTouchDragMove), _this2._onDragStop(), _this2._canBeTouchClick && (_this2._canBeTouchClick = !1, function (t) {
            if (t instanceof SVGElement) {
              var _e = document.createEvent("SVGEvents");

              _e.initEvent("click", !0, !0), t.dispatchEvent(_e);
            }

            t instanceof HTMLElement && t.click();
          }(t.target));
        }, this._onMouseDragMove = function (t) {
          var e = _(m(t));

          _this2._dragMove(e);
        }, this._onTouchDragMove = function (t) {
          _this2._canBeTouchClick = !1, t.preventDefault();

          var e = _(f(t));

          _this2._dragMove(e);
        }, this._onDragStop = function () {
          _this2._drag = null, _this2._header.classList.remove("dragging"), _this2._options.onDragEnd && _this2._options.onDragEnd();
        }, this._dialog = t, this._header = e, this._options = i, this._header.addEventListener("mousedown", this._onMouseDragStart), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd);
      }

      _createClass(v, [{
        key: "destroy",
        value: function destroy() {
          null !== this._frame && cancelAnimationFrame(this._frame), this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd), this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd);
        }
      }, {
        key: "updateOptions",
        value: function updateOptions(t) {
          this._options = t;
        }
      }, {
        key: "_dragStart",
        value: function _dragStart(t) {
          var e = this._dialog.getBoundingClientRect();

          this._drag = {
            startX: t.x,
            startY: t.y,
            finishX: t.x,
            finishY: t.y,
            dialogX: e.left,
            dialogY: e.top
          };
          var i = Math.round(e.left),
              s = Math.round(e.top);
          this._dialog.style.transform = "translate(".concat(i, "px, ").concat(s, "px)"), this._header.classList.add("dragging"), this._options.onDragStart && this._options.onDragStart();
        }
      }, {
        key: "_dragMove",
        value: function _dragMove(t) {
          var _this3 = this;

          if (this._drag) {
            if (this._drag.finishX = t.x, this._drag.finishY = t.y, null !== this._frame) return;
            this._frame = requestAnimationFrame(function () {
              if (_this3._drag) {
                var _e2 = t.x - _this3._drag.startX,
                    _i = t.y - _this3._drag.startY;

                _this3._moveDialog(_this3._drag.dialogX + _e2, _this3._drag.dialogY + _i);
              }

              _this3._frame = null;
            });
          }
        }
      }, {
        key: "_moveDialog",
        value: function _moveDialog(t, e) {
          var i = this._dialog.getBoundingClientRect(),
              s = this._options.boundByScreen,
              o = g(t, i.width, s ? 0 : -1 / 0, s ? window.innerWidth : 1 / 0),
              n = g(e, i.height, s ? 0 : -1 / 0, s ? window.innerHeight : 1 / 0);

          this._dialog.style.transform = "translate(".concat(Math.round(o), "px, ").concat(Math.round(n), "px)");
        }
      }, {
        key: "_isTargetNoDraggable",
        value: function _isTargetNoDraggable(t) {
          return t.target instanceof Element && null !== t.target.closest("[data-disable-drag]");
        }
      }]);

      return v;
    }();

    var y = {
      vertical: 0
    };

    var D =
    /*#__PURE__*/
    function () {
      function D(t, e) {
        var _this4 = this;

        _classCallCheck(this, D);

        this._frame = null, this._isFullscreen = !1, this._handleResize = function () {
          null === _this4._frame && (_this4._frame = requestAnimationFrame(function () {
            _this4.recalculateBounds(), _this4._frame = null;
          }));
        }, this._dialog = t, this._guard = e.guard || y, this._calculateDialogPosition = e.calculateDialogPosition, this._initialHeight = t.style.height, window.addEventListener("resize", this._handleResize);
      }

      _createClass(D, [{
        key: "updateOptions",
        value: function updateOptions(t) {
          this._guard = t.guard || y, this._calculateDialogPosition = t.calculateDialogPosition;
        }
      }, {
        key: "setFullscreen",
        value: function setFullscreen(t) {
          this._isFullscreen !== t && (this._isFullscreen = t, this.recalculateBounds());
        }
      }, {
        key: "centerAndFit",
        value: function centerAndFit() {
          var _this$getDialogsTopLe = this.getDialogsTopLeftCoordinates(),
              t = _this$getDialogsTopLe.x,
              e = _this$getDialogsTopLe.y,
              i = this._calcAvailableHeight(),
              s = this._calcDialogHeight();

          if (i === s) if (this._calculateDialogPosition) {
            var _this$_calculateDialo = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard),
                _t = _this$_calculateDialo.left,
                _e3 = _this$_calculateDialo.top;

            this._dialog.style.transform = "translate(".concat(Math.round(_t), "px, ").concat(Math.round(_e3), "px)");
          } else this._dialog.style.height = s + "px";
          this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = "translate(".concat(t, "px, ").concat(e, "px)");
        }
      }, {
        key: "getDialogsTopLeftCoordinates",
        value: function getDialogsTopLeftCoordinates() {
          var _document$documentEle = document.documentElement,
              t = _document$documentEle.clientHeight,
              e = _document$documentEle.clientWidth,
              i = this._calcDialogHeight(),
              s = e / 2 - this._dialog.clientWidth / 2,
              o = t / 2 - i / 2;

          return {
            x: Math.round(s),
            y: Math.round(o)
          };
        }
      }, {
        key: "recalculateBounds",
        value: function recalculateBounds() {
          var t;
          var _document$documentEle2 = document.documentElement,
              e = _document$documentEle2.clientHeight,
              i = _document$documentEle2.clientWidth,
              s = this._guard.vertical,
              o = null === (t = this._calculateDialogPosition) || void 0 === t ? void 0 : t.call(this, this._dialog, {
            clientWidth: i,
            clientHeight: e
          }, {
            vertical: s
          });

          if (this._isFullscreen) {
            if (this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.width = "100%", this._dialog.style.height = "100%", this._dialog.style.transform = "none", o) {
              var _t2 = o.left,
                  _e4 = o.top,
                  _i2 = o.width,
                  _s = o.height;
              this._dialog.style.transform = "translate(".concat(Math.round(_t2), "px, ").concat(Math.round(_e4), "px)"), _i2 && (this._dialog.style.width = "".concat(_i2, "px"), this._dialog.style.minWidth = "unset"), _s && (this._dialog.style.height = "".concat(_s, "px"), this._dialog.style.minHeight = "unset");
            }
          } else if (o) {
            var _t3 = o.left,
                _e5 = o.top;
            this._dialog.style.transform = "translate(".concat(Math.round(_t3), "px, ").concat(Math.round(_e5), "px)");
          } else {
            this._dialog.style.width = "", this._dialog.style.height = "";

            var _t4 = this._dialog.getBoundingClientRect(),
                _o = e - 2 * s,
                _n = g(_t4.left, _t4.width, 0, i),
                _a = g(_t4.top, _t4.height, s, e);

            this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = "translate(".concat(Math.round(_n), "px, ").concat(Math.round(_a), "px)"), this._dialog.style.height = _o < _t4.height ? _o + "px" : this._initialHeight;
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          window.removeEventListener("resize", this._handleResize), null !== this._frame && (cancelAnimationFrame(this._frame), this._frame = null);
        }
      }, {
        key: "_calcDialogHeight",
        value: function _calcDialogHeight() {
          var t = this._calcAvailableHeight();

          return t < this._dialog.clientHeight ? t : this._dialog.clientHeight;
        }
      }, {
        key: "_calcAvailableHeight",
        value: function _calcAvailableHeight() {
          return document.documentElement.clientHeight - 2 * this._guard.vertical;
        }
      }]);

      return D;
    }();

    var E = i(65718),
        x = i(95711),
        S = i(99054),
        T = i(8326);
    T["tooltip-offset"];

    var M =
    /*#__PURE__*/
    function (_s$PureComponent2) {
      _inherits(M, _s$PureComponent2);

      function M(t) {
        var _this5;

        _classCallCheck(this, M);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(M).call(this, t)), _this5._dialog = null, _this5._cleanUpFunctions = [], _this5._prevActiveElement = null, _this5._handleDialogRef = function (t) {
          var e = _this5.props.reference;
          _this5._dialog = t, "function" == typeof e && e(t);
        }, _this5._handleFocus = function (t) {
          _this5._moveToTop();
        }, _this5._handleMouseDown = function (t) {
          _this5._moveToTop();
        }, _this5._handleTouchStart = function (t) {
          _this5._moveToTop();
        }, _this5.state = {
          canFitTooltip: !1
        };
        return _this5;
      }

      _createClass(M, [{
        key: "render",
        value: function render() {
          var _this6 = this;

          return s.createElement(x.PopupContext.Provider, {
            value: this
          }, s.createElement(u.OutsideEvent, {
            mouseDown: !0,
            touchStart: !0,
            handler: this.props.onClickOutside
          }, function (t) {
            return s.createElement("div", {
              ref: t,
              "data-outside-boundary-for": _this6.props.name,
              onFocus: _this6._handleFocus,
              onMouseDown: _this6._handleMouseDown,
              onTouchStart: _this6._handleTouchStart,
              "data-dialog-name": _this6.props["data-dialog-name"]
            }, s.createElement(d, _objectSpread({
              style: _this6._applyAnimationCSSVariables()
            }, _this6.props, {
              reference: _this6._handleDialogRef,
              className: o(T.dialog, _this6.props.className)
            }), !1, _this6.props.children));
          }));
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props3 = this.props,
              t = _this$props3.draggable,
              e = _this$props3.boundByScreen,
              i = _this$props3.onDragStart,
              s = (0, n.ensureNotNull)(this._dialog);

          if (t) {
            var _t5 = s.querySelector("[data-dragg-area]");

            if (_t5 && _t5 instanceof HTMLElement) {
              var _o2 = new v(s, _t5, {
                boundByScreen: Boolean(e),
                onDragStart: i
              });

              this._cleanUpFunctions.push(function () {
                return _o2.destroy();
              }), this._drag = _o2;
            }
          }

          this._prevActiveElement = document.activeElement, this.props.autofocus && !s.contains(document.activeElement) && s.focus(), (this._isFullScreen() || this.props.fixedBody) && (0, S.setFixedBodyState)(!0);
          var _this$props4 = this.props,
              o = _this$props4.guard,
              a = _this$props4.calculateDialogPosition;
          if (this.props.resizeHandler) this._resize = this.props.resizeHandler;else {
            var _t6 = new D(s, {
              guard: o,
              calculateDialogPosition: a
            });

            this._cleanUpFunctions.push(function () {
              return _t6.destroy();
            }), this._resize = _t6;
          }

          if (this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint), this.props.centeredOnMount && this._resize.centerAndFit(), this._resize.setFullscreen(this._isFullScreen()), this.props.shouldForceFocus) {
            if (this.props.onForceFocus) return void this.props.onForceFocus(s);
            s.focus();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this._resize) {
            var _this$props5 = this.props,
                _t7 = _this$props5.guard,
                _e6 = _this$props5.calculateDialogPosition;
            this._resize.updateOptions({
              guard: _t7,
              calculateDialogPosition: _e6
            }), this._resize.setFullscreen(this._isFullScreen());
          }

          this._drag && this._drag.updateOptions({
            boundByScreen: Boolean(this.props.boundByScreen),
            onDragStart: this.props.onDragStart
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var t;
          if (this.props.shouldReturnFocus && this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || (null === (t = this._dialog) || void 0 === t ? void 0 : t.contains(document.activeElement)))) try {
            this._prevActiveElement.focus({
              preventScroll: !0
            });
          } catch (t) {}
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._cleanUpFunctions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _t8 = _step.value;

              _t8();
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

          (this._isFullScreen() || this.props.fixedBody) && (0, S.setFixedBodyState)(!1);
        }
      }, {
        key: "focus",
        value: function focus() {
          this._dialog && this._dialog.focus();
        }
      }, {
        key: "centerAndFit",
        value: function centerAndFit() {
          this._resize && this._resize.centerAndFit();
        }
      }, {
        key: "recalculateBounds",
        value: function recalculateBounds() {
          this._resize && this._resize.recalculateBounds();
        }
      }, {
        key: "_moveToTop",
        value: function _moveToTop() {
          null !== this.context && this.context.moveToTop();
        }
      }, {
        key: "_applyAnimationCSSVariables",
        value: function _applyAnimationCSSVariables() {
          return {
            "--animationTranslateStartX": null,
            "--animationTranslateStartY": null,
            "--animationTranslateEndX": null,
            "--animationTranslateEndY": null
          };
        }
      }, {
        key: "_applyAppearanceAnimation",
        value: function _applyAppearanceAnimation(t) {
          if (this._resize && this._dialog) {
            var _e7 = t.x,
                _i3 = t.y,
                _this$_resize$getDial = this._resize.getDialogsTopLeftCoordinates(),
                _s2 = _this$_resize$getDial.x,
                _o3 = _this$_resize$getDial.y;

            this._dialog.style.setProperty("--animationTranslateStartX", "".concat(_e7, "px")), this._dialog.style.setProperty("--animationTranslateStartY", "".concat(_i3, "px")), this._dialog.style.setProperty("--animationTranslateEndX", "".concat(_s2, "px")), this._dialog.style.setProperty("--animationTranslateEndY", "".concat(_o3, "px")), this._dialog.classList.add(T.dialogAnimatedAppearance);
          }
        }
      }, {
        key: "_handleTooltipFit",
        value: function _handleTooltipFit() {
          0;
        }
      }, {
        key: "_isFullScreen",
        value: function _isFullScreen() {
          return Boolean(this.props.fullscreen);
        }
      }]);

      return M;
    }(s.PureComponent);

    M.contextType = E.PortalContext, M.defaultProps = {
      boundByScreen: !0,
      draggable: !0,
      centeredOnMount: !0,
      shouldReturnFocus: !0
    };
    var w = (0, c.makeOverlapable)(M);
  },
  76594: function _(t, e, i) {
    "use strict";

    i.d(e, {
      OutsideEvent: function OutsideEvent() {
        return o;
      }
    });
    var s = i(36383);

    function o(t) {
      var e = t.children,
          i = _objectWithoutProperties(t, ["children"]);

      return e((0, s.useOutsideEvent)(i));
    }
  },
  86431: function _(t, e, i) {
    "use strict";

    i.d(e, {
      makeOverlapable: function makeOverlapable() {
        return n;
      }
    });
    var s = i(50959),
        o = i(65718);

    function n(t) {
      return (
        /*#__PURE__*/
        function (_s$PureComponent3) {
          _inherits(_class, _s$PureComponent3);

          function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
          }

          _createClass(_class, [{
            key: "render",
            value: function render() {
              var _this$props6 = this.props,
                  e = _this$props6.isOpened,
                  i = _this$props6.root;
              if (!e) return null;
              var n = s.createElement(t, _objectSpread({}, this.props, {
                zIndex: 150
              }));
              return "parent" === i ? n : s.createElement(o.Portal, null, n);
            }
          }]);

          return _class;
        }(s.PureComponent)
      );
    }
  }
}]);