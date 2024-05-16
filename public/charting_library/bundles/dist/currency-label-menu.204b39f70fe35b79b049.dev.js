"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[2704], {
  88803: function _(e) {
    e.exports = {
      "tablet-normal-breakpoint": "screen and (max-width: 768px)",
      "small-height-breakpoint": "screen and (max-height: 360px)",
      "tablet-small-breakpoint": "screen and (max-width: 430px)"
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
  40281: function _(e) {
    e.exports = {
      container: "container-qm7Rg5MB",
      inputContainer: "inputContainer-qm7Rg5MB",
      withCancel: "withCancel-qm7Rg5MB",
      input: "input-qm7Rg5MB",
      icon: "icon-qm7Rg5MB",
      cancel: "cancel-qm7Rg5MB"
    };
  },
  16734: function _(e) {
    e.exports = {
      scrollWrap: "scrollWrap-a62DpCum"
    };
  },
  40211: function _(e) {
    e.exports = {
      container: "container-c8Hkfy8e",
      separator: "separator-c8Hkfy8e",
      section: "section-c8Hkfy8e"
    };
  },
  55002: function _(e) {
    e.exports = {
      action: "action-peI7w0K1",
      hovered: "hovered-peI7w0K1",
      active: "active-peI7w0K1",
      label: "label-peI7w0K1",
      description: "description-peI7w0K1",
      selected: "selected-peI7w0K1",
      small: "small-peI7w0K1",
      withDescription: "withDescription-peI7w0K1",
      action__favoriteIcon: "action__favoriteIcon-peI7w0K1",
      action__favoriteIcon_active: "action__favoriteIcon_active-peI7w0K1",
      labelAndDescription: "labelAndDescription-peI7w0K1",
      icon: "icon-peI7w0K1",
      fakeIcon: "fakeIcon-peI7w0K1",
      highlighted: "highlighted-peI7w0K1"
    };
  },
  5826: function _(e) {
    e.exports = {
      menu: "menu-kJ5smAAE",
      withDescriptions: "withDescriptions-kJ5smAAE",
      header: "header-kJ5smAAE",
      title: "title-kJ5smAAE",
      container: "container-kJ5smAAE",
      icon: "icon-kJ5smAAE",
      clear: "clear-kJ5smAAE",
      input: "input-kJ5smAAE",
      highlighted: "highlighted-kJ5smAAE",
      active: "active-kJ5smAAE",
      section: "section-kJ5smAAE"
    };
  },
  45300: function _(e) {
    e.exports = {};
  },
  14877: function _(e) {
    e.exports = {
      favorite: "favorite-_FRQhM5Y",
      hovered: "hovered-_FRQhM5Y",
      disabled: "disabled-_FRQhM5Y",
      active: "active-_FRQhM5Y",
      checked: "checked-_FRQhM5Y"
    };
  },
  75623: function _(e) {
    e.exports = {
      highlighted: "highlighted-cwp8YRo6"
    };
  },
  45719: function _(e) {
    e.exports = {
      separator: "separator-Pf4rIzEt"
    };
  },
  92910: function _(e) {
    e.exports = {
      separator: "separator-QjUlCDId",
      small: "small-QjUlCDId",
      normal: "normal-QjUlCDId",
      large: "large-QjUlCDId"
    };
  },
  34587: function _(e) {
    e.exports = {
      icon: "icon-WB2y0EnP",
      dropped: "dropped-WB2y0EnP"
    };
  },
  27267: function _(e, t, n) {
    "use strict";

    function r(e, t, n, r, o) {
      function i(o) {
        if (e > o.timeStamp) return;
        var i = o.target;
        void 0 !== n && null !== t && null !== i && i.ownerDocument === r && (t.contains(i) || n(o));
      }

      return o.click && r.addEventListener("click", i, !1), o.mouseDown && r.addEventListener("mousedown", i, !1), o.touchEnd && r.addEventListener("touchend", i, !1), o.touchStart && r.addEventListener("touchstart", i, !1), function () {
        r.removeEventListener("click", i, !1), r.removeEventListener("mousedown", i, !1), r.removeEventListener("touchend", i, !1), r.removeEventListener("touchstart", i, !1);
      };
    }

    n.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return r;
      }
    });
  },
  90186: function _(e, t, n) {
    "use strict";

    function r(e) {
      return i(e, s);
    }

    function o(e) {
      return i(e, a);
    }

    function i(e, t) {
      var n = Object.entries(e).filter(t),
          r = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e = _step$value[0],
              _t = _step$value[1];

          r[_e] = _t;
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

      return r;
    }

    function s(e) {
      var _e2 = _slicedToArray(e, 2),
          t = _e2[0],
          n = _e2[1];

      return 0 === t.indexOf("data-") && "string" == typeof n;
    }

    function a(e) {
      return 0 === e[0].indexOf("aria-");
    }

    n.d(t, {
      filterAriaProps: function filterAriaProps() {
        return o;
      },
      filterDataProps: function filterDataProps() {
        return r;
      },
      filterProps: function filterProps() {
        return i;
      },
      isAriaAttribute: function isAriaAttribute() {
        return a;
      },
      isDataAttribute: function isDataAttribute() {
        return s;
      }
    });
  },
  53017: function _(e, t, n) {
    "use strict";

    function r(e) {
      return function (t) {
        e.forEach(function (e) {
          "function" == typeof e ? e(t) : null != e && (e.current = t);
        });
      };
    }

    function o(e) {
      return r([e]);
    }

    n.d(t, {
      isomorphicRef: function isomorphicRef() {
        return o;
      },
      mergeRefs: function mergeRefs() {
        return r;
      }
    });
  },
  24437: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogBreakpoints: function DialogBreakpoints() {
        return o;
      }
    });
    var r = n(88803);
    var o = {
      SmallHeight: r["small-height-breakpoint"],
      TabletSmall: r["tablet-small-breakpoint"],
      TabletNormal: r["tablet-normal-breakpoint"]
    };
  },
  35057: function _(e, t, n) {
    "use strict";

    n.d(t, {
      AdaptivePopupDialog: function AdaptivePopupDialog() {
        return A;
      }
    });
    var r = n(50959),
        o = n(50151);
    var i = n(97754),
        s = n.n(i),
        a = n(68335),
        l = n(38223),
        c = n(35749),
        u = n(63016),
        d = n(1109),
        h = n(24437),
        p = n(90692),
        f = n(95711);
    var m = n(52092),
        v = n(76422),
        g = n(9745);
    var C = r.createContext({
      setHideClose: function setHideClose() {}
    });
    var y = n(7720),
        E = n(69827);

    function b(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          n = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
          o = e.subtitle,
          _e$showCloseIcon = e.showCloseIcon,
          i = _e$showCloseIcon === void 0 ? !0 : _e$showCloseIcon,
          a = e.onClose,
          l = e.onCloseButtonKeyDown,
          c = e.renderBefore,
          u = e.renderAfter,
          d = e.draggable,
          h = e.className,
          p = e.unsetAlign,
          f = e.closeAriaLabel,
          m = e.closeButtonReference,
          _ref = (0, r.useState)(!1),
          _ref2 = _slicedToArray(_ref, 2),
          v = _ref2[0],
          b = _ref2[1];

      return r.createElement(C.Provider, {
        value: {
          setHideClose: b
        }
      }, r.createElement("div", {
        className: s()(E.container, h, (o || p) && E.unsetAlign)
      }, c, r.createElement("div", {
        "data-dragg-area": d,
        className: E.title
      }, r.createElement("div", {
        className: s()(n ? E.textWrap : E.ellipsis)
      }, t), o && r.createElement("div", {
        className: s()(E.ellipsis, E.subtitle)
      }, o)), u, i && !v && r.createElement("button", {
        className: E.close,
        onClick: a,
        onKeyDown: l,
        "data-name": "close",
        "aria-label": f,
        type: "button",
        ref: m
      }, r.createElement(g.Icon, {
        className: E.icon,
        icon: y,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var _ = n(53017),
        w = n(90186),
        S = n(55596);

    var x = {
      vertical: 20
    },
        k = {
      vertical: 0
    };

    var A =
    /*#__PURE__*/
    function (_r$PureComponent) {
      _inherits(A, _r$PureComponent);

      function A() {
        var _this;

        _classCallCheck(this, A);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(A).apply(this, arguments)), _this._controller = null, _this._reference = null, _this._orientationMediaQuery = null, _this._renderChildren = function (e, t) {
          return _this._controller = e, _this.props.render({
            requestResize: _this._requestResize,
            centerAndFit: _this._centerAndFit,
            isSmallWidth: t
          });
        }, _this._handleReference = function (e) {
          return _this._reference = e;
        }, _this._handleCloseBtnClick = function () {
          _this.props.onKeyboardClose && _this.props.onKeyboardClose(), _this._handleClose();
        }, _this._handleClose = function () {
          _this.props.onClose();
        }, _this._handleOpen = function () {
          void 0 !== _this.props.onOpen && _this.props.isOpened && _this.props.onOpen(_this.props.fullScreen || window.matchMedia(h.DialogBreakpoints.TabletSmall).matches);
        }, _this._handleKeyDown = function (e) {
          if (!e.defaultPrevented) {
            if (_this.props.onKeyDown && _this.props.onKeyDown(e), 27 === (0, a.hashFromEvent)(e)) {
              if (e.defaultPrevented) return;
              if (_this.props.forceCloseOnEsc && _this.props.forceCloseOnEsc()) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();

              var _document = document,
                  _n2 = _document.activeElement,
                  _r = (0, o.ensureNotNull)(_this._reference);

              if (null !== _n2) {
                if (e.preventDefault(), "true" === (t = _n2).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void _this._handleClose();
                if ((0, c.isTextEditingField)(_n2)) return void _r.focus();
                if (_r.contains(_n2)) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();
              }
            }

            var t, n;
            (function (e) {
              if ("function" == typeof e) return e();
              return Boolean(e);
            })(_this.props.disableTabNavigationContainment) || (n = e, [9, a.Modifiers.Shift + 9].includes((0, a.hashFromEvent)(n)) && n.stopPropagation());
          }
        }, _this._requestResize = function () {
          null !== _this._controller && _this._controller.recalculateBounds();
        }, _this._centerAndFit = function () {
          null !== _this._controller && _this._controller.centerAndFit();
        }, _this._calculatePositionWithOffsets = function (e, t) {
          var n = (0, o.ensureDefined)(_this.props.fullScreenViewOffsets).value();
          return {
            top: n.top,
            left: (0, l.isRtl)() ? -n.right : n.left,
            width: t.clientWidth - n.left - n.right,
            height: t.clientHeight - n.top - n.bottom
          };
        };
        return _this;
      }

      _createClass(A, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || v.subscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t) : e.addListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || v.unsubscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t) : e.removeListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, o.ensureNotNull)(this._reference).focus();
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._reference;
        }
      }, {
        key: "contains",
        value: function contains(e) {
          var t, n;
          return null !== (n = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) && void 0 !== n && n;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              e = _this$props.className,
              t = _this$props.wrapperClassName,
              n = _this$props.headerClassName,
              o = _this$props.isOpened,
              i = _this$props.title,
              a = _this$props.titleTextWrap,
              l = _this$props.dataName,
              c = _this$props.onClickOutside,
              m = _this$props.additionalElementPos,
              v = _this$props.additionalHeaderElement,
              g = _this$props.backdrop,
              _this$props$shouldFor = _this$props.shouldForceFocus,
              C = _this$props$shouldFor === void 0 ? !0 : _this$props$shouldFor,
              y = _this$props.shouldReturnFocus,
              E = _this$props.onForceFocus,
              A = _this$props.showSeparator,
              N = _this$props.subtitle,
              _this$props$draggable = _this$props.draggable,
              D = _this$props$draggable === void 0 ? !0 : _this$props$draggable,
              _this$props$fullScree = _this$props.fullScreen,
              R = _this$props$fullScree === void 0 ? !1 : _this$props$fullScree,
              _this$props$showClose = _this$props.showCloseIcon,
              I = _this$props$showClose === void 0 ? !0 : _this$props$showClose,
              _this$props$rounded = _this$props.rounded,
              L = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              T = _this$props.isAnimationEnabled,
              B = _this$props.growPoint,
              M = _this$props.dialogTooltip,
              O = _this$props.unsetHeaderAlign,
              z = _this$props.onDragStart,
              F = _this$props.dataDialogName,
              P = _this$props.closeAriaLabel,
              U = _this$props.containerAriaLabel,
              K = _this$props.reference,
              H = _this$props.containerTabIndex,
              j = _this$props.closeButtonReference,
              W = _this$props.onCloseButtonKeyDown,
              $ = _this$props.shadowed,
              V = _this$props.fullScreenViewOffsets,
              q = "after" !== m ? v : void 0,
              Q = "after" === m ? v : void 0,
              J = "string" == typeof i ? i : F || "",
              Y = (0, w.filterDataProps)(this.props),
              Z = (0, _.mergeRefs)([this._handleReference, K]);
          return r.createElement(p.MatchMedia, {
            rule: h.DialogBreakpoints.SmallHeight
          }, function (m) {
            return r.createElement(p.MatchMedia, {
              rule: h.DialogBreakpoints.TabletSmall
            }, function (h) {
              return r.createElement(u.PopupDialog, _objectSpread({
                rounded: !(h || R) && L,
                className: s()(S.dialog, R && V && S.bounded, e),
                isOpened: o,
                reference: Z,
                onKeyDown: _this2._handleKeyDown,
                onClickOutside: c,
                onClickBackdrop: c,
                fullscreen: h || R,
                guard: m ? k : x,
                boundByScreen: h || R,
                shouldForceFocus: C,
                onForceFocus: E,
                shouldReturnFocus: y,
                backdrop: g,
                draggable: D,
                isAnimationEnabled: T,
                growPoint: B,
                name: _this2.props.dataName,
                dialogTooltip: M,
                onDragStart: z,
                containerAriaLabel: U,
                containerTabIndex: H,
                calculateDialogPosition: R && V ? _this2._calculatePositionWithOffsets : void 0,
                shadowed: $
              }, Y), r.createElement("div", {
                className: s()(S.wrapper, t),
                "data-name": l,
                "data-dialog-name": J
              }, void 0 !== i && r.createElement(b, {
                draggable: D && !(h || R),
                onClose: _this2._handleCloseBtnClick,
                renderAfter: Q,
                renderBefore: q,
                subtitle: N,
                title: i,
                titleTextWrap: a,
                showCloseIcon: I,
                className: n,
                unsetAlign: O,
                closeAriaLabel: P,
                closeButtonReference: j,
                onCloseButtonKeyDown: W
              }), A && r.createElement(d.Separator, {
                className: S.separator
              }), r.createElement(f.PopupContext.Consumer, null, function (e) {
                return _this2._renderChildren(e, h || R);
              })));
            });
          });
        }
      }]);

      return A;
    }(r.PureComponent);
  },
  69654: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogSearch: function DialogSearch() {
        return u;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(44352),
        a = n(9745),
        l = n(69859),
        c = n(40281);

    function u(e) {
      var t = e.children,
          o = e.renderInput,
          u = e.onCancel,
          h = e.containerClassName,
          p = e.inputContainerClassName,
          f = e.iconClassName,
          m = _objectWithoutProperties(e, ["children", "renderInput", "onCancel", "containerClassName", "inputContainerClassName", "iconClassName"]);

      return r.createElement("div", {
        className: i()(c.container, h)
      }, r.createElement("div", {
        className: i()(c.inputContainer, p, u && c.withCancel)
      }, o || r.createElement(d, _objectSpread({}, m))), t, r.createElement(a.Icon, {
        className: i()(c.icon, f),
        icon: l
      }), u && r.createElement("div", {
        className: c.cancel,
        onClick: u
      }, s.t(null, void 0, n(20036))));
    }

    function d(e) {
      var t = e.className,
          n = e.reference,
          o = e.value,
          s = e.onChange,
          a = e.onFocus,
          l = e.onBlur,
          u = e.onKeyDown,
          d = e.onSelect,
          h = e.placeholder,
          p = _objectWithoutProperties(e, ["className", "reference", "value", "onChange", "onFocus", "onBlur", "onKeyDown", "onSelect", "placeholder"]);

      return r.createElement("input", _objectSpread({}, p, {
        ref: n,
        type: "text",
        className: i()(t, c.input),
        autoComplete: "off",
        "data-role": "search",
        placeholder: h,
        value: o,
        onChange: s,
        onFocus: a,
        onBlur: l,
        onSelect: d,
        onKeyDown: u
      }));
    }
  },
  28587: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      UnitConversionRenderer: function UnitConversionRenderer() {
        return z;
      }
    });
    var r = n(50959),
        o = n(962),
        i = n(79188),
        s = n(90692),
        a = n(19785),
        l = n(68335);

    var c = n(24437),
        u = n(12811),
        d = n(97754),
        h = n.n(d),
        p = n(44352),
        f = n(9745),
        m = n(20520),
        v = n(27317),
        g = n(40173),
        C = n(51613),
        y = n(76197),
        E = n(36189),
        b = n(76068),
        _ = n(24637),
        w = n(55002);

    var S = r.memo(function (e) {
      var t = e.label,
          n = e.icon,
          o = e.rules,
          i = e.search,
          s = e.description,
          a = e.onClick,
          l = e.onClose,
          c = e.isActive,
          u = e.isSmallSize,
          d = e.isSelected,
          p = e.selectedRef,
          f = e.hasDescriptions,
          m = e.hasIcons,
          v = e.isFavorite,
          g = e.onFavoriteClick,
          C = (0, r.useCallback)(function () {
        a(), l && l();
      }, [a, l]),
          y = u && w.small;
      return r.createElement("div", {
        className: h()(w.action, c && w.active, y, f && w.withDescription, d && w.selected),
        onClick: C,
        ref: p
      }, m && (void 0 !== n ? r.createElement(b.CircleLogo, {
        logoUrl: n,
        size: f ? "xsmall" : "xxxsmall",
        className: h()(w.icon, y)
      }) : r.createElement("span", {
        className: h()(w.fakeIcon, y)
      })), r.createElement("div", {
        className: h()(w.labelAndDescription, y)
      }, r.createElement("span", {
        className: h()(w.label, y)
      }, S(t)), f && r.createElement("br", null), f && r.createElement("span", {
        className: h()(w.description, y)
      }, s ? S(s) : "")), void 0 !== v && r.createElement("div", {
        className: h()(w.action__favoriteIcon, v && w.action__favoriteIcon_active)
      }, r.createElement(E.FavoriteButton, {
        isActive: c,
        isFilled: v,
        onClick: function onClick(e) {
          e.stopPropagation(), null == g || g();
        }
      })));

      function S(e) {
        return r.createElement(_.HighlightedText, {
          text: e,
          rules: o,
          queryString: i,
          className: h()(c && w.highlighted, c && w.active)
        });
      }
    }, function (e, t) {
      return Object.keys(t).filter(function (e) {
        return !["onClick", "onClose", "onFavoriteClick"].includes(e);
      }).every(function (n) {
        return t[n] === e[n];
      });
    });
    var x = n(48471),
        k = n(69311),
        A = n(5826),
        N = n(16734);
    var D = (0, g.mergeThemes)(v.DEFAULT_MENU_THEME, N);

    function R(e) {
      var t = e.title,
          o = e.sections,
          i = e.onClose,
          s = e.selectedId,
          a = e.selectedRef,
          l = e.search,
          c = e.setSearch,
          u = e.items,
          d = e.rules,
          v = e.searchRef,
          g = e.hasDescriptions,
          E = e.hasIcons,
          b = _objectWithoutProperties(e, ["title", "sections", "onClose", "selectedId", "selectedRef", "search", "setSearch", "items", "rules", "searchRef", "hasDescriptions", "hasIcons"]),
          _ref3 = (0, r.useState)(function () {
        return o.reduce(function (e, t, n) {
          return t.name && (e[t.id] = !0), e;
        }, {});
      }),
          _ref4 = _slicedToArray(_ref3, 2),
          _ = _ref4[0],
          w = _ref4[1];

      function N(e) {
        var t = e.id,
            n = _objectWithoutProperties(e, ["id"]);

        return r.createElement(S, _objectSpread({
          key: t,
          rules: d,
          search: l,
          onClose: i,
          isSmallSize: !0,
          isSelected: t === s,
          selectedRef: t === s ? a : void 0,
          hasDescriptions: g,
          hasIcons: E
        }, n));
      }

      return r.createElement(m.PopupMenu, _objectSpread({}, b, {
        onClose: i,
        className: h()(A.menu, g && A.withDescriptions),
        theme: D,
        maxHeight: g ? 313 : 280,
        noMomentumBasedScroll: !0,
        isOpened: !0,
        onOpen: function onOpen() {
          var e;
          null === (e = v.current) || void 0 === e || e.focus();
        }
      }), r.createElement("div", {
        className: A.header
      }, r.createElement("div", {
        className: A.title
      }, t), r.createElement("div", {
        className: A.container
      }, r.createElement(f.Icon, {
        icon: x,
        className: A.icon
      }), r.createElement("input", {
        size: 1,
        type: "text",
        className: A.input,
        placeholder: p.t(null, void 0, n(52298)),
        autoComplete: "off",
        "data-role": "search",
        onChange: function onChange(e) {
          c(e.target.value);
        },
        value: l,
        ref: v
      }), Boolean(l) && r.createElement(f.Icon, {
        icon: k,
        className: A.clear,
        onClick: function onClick() {
          c("");
        }
      }))), l ? u.map(N) : o.map(function (e, t) {
        return r.createElement(r.Fragment, {
          key: e.id
        }, Boolean(t) && r.createElement(C.PopupMenuSeparator, null), e.name ? r.createElement(y.CollapsibleSection, {
          summary: e.name,
          className: A.section,
          open: _[e.id],
          onStateChange: function onStateChange(t) {
            return w(_objectSpread({}, _, _defineProperty({}, e.id, t)));
          }
        }, e.actions.map(N)) : e.actions.map(N));
      }));
    }

    var I = n(35057),
        L = n(69654),
        T = n(40211);

    function B(e) {
      var t = e.title,
          o = e.onClose,
          i = e.sections,
          s = e.selectedId,
          a = e.selectedRef,
          l = e.search,
          c = e.setSearch,
          u = e.items,
          d = e.rules,
          h = e.searchRef,
          f = e.hasIcons,
          m = e.hasDescriptions;
      return r.createElement(I.AdaptivePopupDialog, {
        title: t,
        onClose: o,
        render: function render() {
          return r.createElement(r.Fragment, null, r.createElement(L.DialogSearch, {
            placeholder: p.t(null, void 0, n(52298)),
            onChange: v,
            reference: h
          }), r.createElement("div", {
            className: T.container
          }, l ? u.map(function (e) {
            var t = e.id,
                n = e.isActive,
                i = _objectWithoutProperties(e, ["id", "isActive"]);

            return r.createElement(S, _objectSpread({
              key: t,
              isActive: n,
              onClose: o,
              rules: d,
              search: l,
              isSelected: t === s,
              selectedRef: t === s ? a : void 0,
              hasIcons: f,
              hasDescriptions: m
            }, i));
          }) : i.map(function (e, t) {
            return r.createElement(r.Fragment, {
              key: e.id
            }, e.name && r.createElement("div", {
              className: T.section
            }, e.name), e.actions.map(function (n, c) {
              var u = n.id,
                  h = _objectWithoutProperties(n, ["id"]),
                  p = c === e.actions.length - 1,
                  v = t === i.length - 1;

              return r.createElement(r.Fragment, {
                key: u
              }, r.createElement(S, _objectSpread({
                rules: d,
                search: l,
                onClose: o,
                isSelected: u === s,
                selectedRef: u === s ? a : void 0,
                hasIcons: f,
                hasDescriptions: m
              }, h)), !v && p && r.createElement("div", {
                className: T.separator
              }));
            }));
          })));
        },
        dataName: "unit-conversion-dialog",
        draggable: !1,
        fullScreen: !0,
        isOpened: !0
      });

      function v(e) {
        c(e.target.value);
      }
    }

    var M = {
      horizontalAttachEdge: u.HorizontalAttachEdge.Right,
      horizontalDropDirection: u.HorizontalDropDirection.FromRightToLeft
    };

    function O(e) {
      var t = e.element,
          n = _objectWithoutProperties(e, ["element"]),
          _ref5 = (0, r.useState)(y()),
          _ref6 = _slicedToArray(_ref5, 2),
          o = _ref6[0],
          i = _ref6[1],
          _ref7 = (0, r.useState)(""),
          _ref8 = _slicedToArray(_ref7, 2),
          d = _ref8[0],
          h = _ref8[1],
          p = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          m = (0, r.useMemo)(function () {
        return (0, a.createRegExpList)(d);
      }, [d]),
          _ref9 = function (e, t, n) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "keydown";

        var _ref10 = (0, r.useState)(-1),
            _ref11 = _slicedToArray(_ref10, 2),
            i = _ref11[0],
            s = _ref11[1];

        return (0, r.useEffect)(function () {
          if (!e) return;

          var n = function n(e) {
            switch ((0, l.hashFromEvent)(e)) {
              case 40:
                if (i === t.length - 1) break;
                e.preventDefault(), s(i + 1);
                break;

              case 38:
                if (i <= 0) break;
                e.preventDefault(), s(i - 1);
            }
          };

          return e.addEventListener("keydown", n), function () {
            e.removeEventListener("keydown", n);
          };
        }, [e, i, t]), (0, r.useEffect)(function () {
          if (!e || !n) return;

          var r = function r(e) {
            var r;
            e.repeat || 13 === (0, l.hashFromEvent)(e) && n(null !== (r = t[i]) && void 0 !== r ? r : null, e);
          };

          return e.addEventListener(o, r), function () {
            e.removeEventListener(o, r);
          };
        }, [e, i, t, n, o]), {
          activeIdx: i,
          setActiveIdx: s
        };
      }(p.current, o, function (e) {
        e && (e.onClick(), n.onClose());
      }),
          v = _ref9.activeIdx,
          g = _ref9.setActiveIdx;

      !function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        (0, r.useEffect)(function () {
          e(-1);
        }, _toConsumableArray(t));
      }(g, [o]), function (e, t) {
        (0, r.useEffect)(function () {
          var n;
          t >= 0 && (null === (n = e.current) || void 0 === n || n.scrollIntoView({
            block: "nearest"
          }));
        }, [t]);
      }(f, v), (0, r.useEffect)(function () {
        i(d ? function (e, t, n) {
          var r = e.reduce(function (e, t) {
            return [].concat(_toConsumableArray(e), _toConsumableArray(t.actions));
          }, []);
          return (0, a.rankedSearch)({
            data: r,
            rules: n,
            queryString: t,
            primaryKey: "label",
            secondaryKey: "description"
          });
        }(n.sections, d, m) : y());
      }, [d, n.sections, m]);
      var C = (0, r.useMemo)(function () {
        return {
          selectedId: Boolean(v >= 0 && o[v]) ? o[v].id : "",
          selectedRef: f,
          search: d,
          setSearch: h,
          searchRef: p,
          items: o,
          rules: m,
          hasIcons: o.some(function (e) {
            return void 0 !== e.icon;
          }),
          hasDescriptions: o.some(function (e) {
            return void 0 !== e.description;
          })
        };
      }, [v, f, d, h, p, o, m]);
      return r.createElement(s.MatchMedia, {
        rule: c.DialogBreakpoints.TabletSmall
      }, function (e) {
        return e ? r.createElement(B, _objectSpread({}, n, {}, C)) : r.createElement(R, _objectSpread({}, n, {}, C, {
          position: (0, u.getPopupPositioner)(t, M),
          doNotCloseOn: t
        }));
      });

      function y() {
        return n.sections.reduce(function (e, t) {
          return e.push.apply(e, _toConsumableArray(t.actions)), e;
        }, []);
      }
    }

    var z =
    /*#__PURE__*/
    function () {
      function z(e, t, n, r) {
        var _this3 = this;

        _classCallCheck(this, z);

        this._rootElem = document.createElement("div"), this.close = function () {
          null !== _this3._rootElem && (o.unmountComponentAtNode(_this3._rootElem), i.favoriteCurrencyUnitConversionService.getOnChange().unsubscribe(_this3, _this3._render), _this3._rootElem = null, _this3._menuClosedCallback());
        }, this.isOpened = function () {
          return null !== _this3._rootElem;
        }, this._title = e, this._element = t, this._sectionsGetter = n, this._menuClosedCallback = r, this._render(), i.favoriteCurrencyUnitConversionService.getOnChange().subscribe(this, this._render);
      }

      _createClass(z, [{
        key: "_render",
        value: function _render() {
          var e = {
            title: this._title,
            sections: this._sectionsGetter(),
            element: this._element,
            onClose: this.close
          };
          o.render(r.createElement(O, _objectSpread({}, e)), this._rootElem);
        }
      }]);

      return z;
    }();
  },
  76068: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CircleLogo: function CircleLogo() {
        return i;
      }
    });
    var r = n(50959),
        o = n(58492);
    n(45300);

    function i(e) {
      var t, n;
      var i = (0, o.getStyleClasses)(e.size, e.className),
          s = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
      return (0, o.isCircleLogoWithUrlProps)(e) ? r.createElement("img", {
        className: i,
        src: e.logoUrl,
        alt: s,
        title: e.title,
        loading: e.loading,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }) : r.createElement("span", {
        className: i,
        title: e.title,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }, e.placeholderLetter);
    }
  },
  58492: function _(e, t, n) {
    "use strict";

    n.d(t, {
      getStyleClasses: function getStyleClasses() {
        return o;
      },
      isCircleLogoWithUrlProps: function isCircleLogoWithUrlProps() {
        return i;
      }
    });
    var r = n(97754);

    function o(e, t) {
      return r("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function i(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  36189: function _(e, t, n) {
    "use strict";

    n.d(t, {
      FavoriteButton: function FavoriteButton() {
        return d;
      }
    });
    var r = n(44352),
        o = n(50959),
        i = n(97754),
        s = n(9745),
        a = n(39146),
        l = n(48010),
        c = n(14877);
    var u = {
      add: r.t(null, void 0, n(44629)),
      remove: r.t(null, void 0, n(72482))
    };

    function d(e) {
      var t = e.className,
          n = e.isFilled,
          r = e.isActive,
          d = e.onClick,
          h = _objectWithoutProperties(e, ["className", "isFilled", "isActive", "onClick"]);

      return o.createElement(s.Icon, _objectSpread({}, h, {
        className: i(c.favorite, "apply-common-tooltip", n && c.checked, r && c.active, t),
        icon: n ? a : l,
        onClick: d,
        title: n ? u.remove : u.add
      }));
    }
  },
  19785: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createRegExpList: function createRegExpList() {
        return i;
      },
      getHighlightedChars: function getHighlightedChars() {
        return s;
      },
      rankedSearch: function rankedSearch() {
        return o;
      }
    });
    var r = n(1722);

    function o(e) {
      var t = e.data,
          n = e.rules,
          o = e.queryString,
          i = e.isPreventedFromFiltering,
          s = e.primaryKey,
          _e$secondaryKey = e.secondaryKey,
          a = _e$secondaryKey === void 0 ? s : _e$secondaryKey,
          l = e.optionalPrimaryKey,
          c = e.tertiaryKey;
      return t.map(function (e) {
        var t = l && e[l] ? e[l] : e[s],
            i = e[a],
            u = c && e[c];
        var d,
            h = 0;
        return n.forEach(function (e) {
          var n, s, a, l, c;
          var p = e.re,
              f = e.fullMatch;
          if (p.lastIndex = 0, (0, r.isString)(t) && t && t.toLowerCase() === o.toLowerCase()) return h = 4, void (d = null === (n = t.match(f)) || void 0 === n ? void 0 : n.index);
          if ((0, r.isString)(t) && f.test(t)) return h = 3, void (d = null === (s = t.match(f)) || void 0 === s ? void 0 : s.index);
          if ((0, r.isString)(i) && f.test(i)) return h = 2, void (d = null === (a = i.match(f)) || void 0 === a ? void 0 : a.index);
          if ((0, r.isString)(i) && p.test(i)) return h = 2, void (d = null === (l = i.match(p)) || void 0 === l ? void 0 : l.index);

          if (Array.isArray(u)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = u[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _e3 = _step2.value;
                if (f.test(_e3)) return h = 1, void (d = null === (c = _e3.match(f)) || void 0 === c ? void 0 : c.index);
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
        }), {
          matchPriority: h,
          matchIndex: d,
          item: e
        };
      }).filter(function (e) {
        return i || e.matchPriority;
      }).sort(function (e, t) {
        if (e.matchPriority < t.matchPriority) return 1;
        if (e.matchPriority > t.matchPriority) return -1;

        if (e.matchPriority === t.matchPriority) {
          if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
          if (e.matchIndex > t.matchIndex) return 1;
          if (e.matchIndex < t.matchIndex) return -1;
        }

        return 0;
      }).map(function (_ref12) {
        var e = _ref12.item;
        return e;
      });
    }

    function i(e, t) {
      var n = [],
          r = e.toLowerCase(),
          o = e.split("").map(function (e, t) {
        return "(".concat(0 !== t ? "[/\\s-]".concat(a(e)) : a(e), ")");
      }).join("(.*?)") + "(.*)";
      return n.push({
        fullMatch: new RegExp("(".concat(a(e), ")"), "i"),
        re: new RegExp("^".concat(o), "i"),
        reserveRe: new RegExp(o, "i"),
        fuzzyHighlight: !0
      }), t && t.hasOwnProperty(r) && n.push({
        fullMatch: t[r],
        re: t[r],
        fuzzyHighlight: !1
      }), n;
    }

    function s(e, t, n) {
      var r = [];
      return e && n ? (n.forEach(function (e) {
        var n = e.fullMatch,
            o = e.re,
            i = e.reserveRe;
        n.lastIndex = 0, o.lastIndex = 0;
        var s = n.exec(t),
            a = s || o.exec(t) || i && i.exec(t);
        if (e.fuzzyHighlight = !s, a) if (e.fuzzyHighlight) {
          var _e4 = a.index;

          for (var _t2 = 1; _t2 < a.length; _t2++) {
            var _n3 = a[_t2],
                _o = a[_t2].length;

            if (_t2 % 2) {
              var _t3 = _n3.startsWith(" ") || _n3.startsWith("/") || _n3.startsWith("-");

              r[_t3 ? _e4 + 1 : _e4] = !0;
            }

            _e4 += _o;
          }
        } else for (var _e5 = 0; _e5 < a[0].length; _e5++) {
          r[a.index + _e5] = !0;
        }
      }), r) : r;
    }

    function a(e) {
      return e.replace(/[!-/[-^{-}?]/g, "\\$&");
    }
  },
  24637: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HighlightedText: function HighlightedText() {
        return a;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n(19785),
        s = n(75623);

    function a(e) {
      var t = e.queryString,
          n = e.rules,
          a = e.text,
          l = e.className,
          c = (0, r.useMemo)(function () {
        return (0, i.getHighlightedChars)(t, a, n);
      }, [t, n, a]);
      return r.createElement(r.Fragment, null, c.length ? a.split("").map(function (e, t) {
        return r.createElement(r.Fragment, {
          key: t
        }, c[t] ? r.createElement("span", {
          className: o(s.highlighted, l)
        }, e) : r.createElement("span", null, e));
      }) : a);
    }
  },
  1109: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Separator: function Separator() {
        return s;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n(45719);

    function s(e) {
      return r.createElement("div", {
        className: o(i.separator, e.className)
      });
    }
  },
  51613: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupMenuSeparator: function PopupMenuSeparator() {
        return a;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(92910);

    function a(e) {
      var _e$size = e.size,
          t = _e$size === void 0 ? "normal" : _e$size,
          n = e.className,
          _e$ariaHidden = e.ariaHidden,
          o = _e$ariaHidden === void 0 ? !1 : _e$ariaHidden;
      return r.createElement("div", {
        className: i()(s.separator, "small" === t && s.small, "normal" === t && s.normal, "large" === t && s.large, n),
        role: "separator",
        "aria-hidden": o
      });
    }
  },
  20520: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupMenu: function PopupMenu() {
        return h;
      }
    });
    var r = n(50959),
        o = n(962),
        i = n(62942),
        s = n(65718),
        a = n(27317),
        l = n(29197);
    var c = r.createContext(void 0);
    var u = n(36383);
    var d = r.createContext({
      setMenuMaxWidth: !1
    });

    function h(e) {
      var t = e.controller,
          n = e.children,
          h = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          p = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          f = e.doNotCloseOn,
          m = e.onClickOutside,
          v = e.onClose,
          g = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          C = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          y = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          E = (0, r.useContext)(l.CloseDelegateContext),
          b = r.useContext(d),
          _ = (0, r.useContext)(c),
          w = (0, u.useOutsideEvent)({
        handler: function handler(e) {
          m && m(e);
          if (!p) return;
          var t = (0, i["default"])(f) ? f() : null == f ? [] : [f];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = t[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n4 = _step3.value;

                var _t4 = o.findDOMNode(_n4);

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

          v();
        },
        mouseDown: !0,
        touchStart: !0
      });

      return h ? r.createElement(s.Portal, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        pointerEvents: "none"
      }, r.createElement("span", {
        ref: w,
        style: {
          pointerEvents: "auto"
        }
      }, r.createElement(a.Menu, _objectSpread({}, y, {
        onClose: v,
        onKeyboardClose: g,
        onScroll: function onScroll(t) {
          var n = e.onScroll;
          n && n(t);
        },
        customCloseDelegate: E,
        customRemeasureDelegate: _,
        ref: t,
        "data-name": C,
        limitMaxWidth: b.setMenuMaxWidth
      }), n))) : null;
    }
  },
  10381: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ToolWidgetCaret: function ToolWidgetCaret() {
        return l;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n(9745),
        s = n(34587),
        a = n(578);

    function l(e) {
      var t = e.dropped,
          n = e.className;
      return r.createElement(i.Icon, {
        className: o(n, s.icon, _defineProperty({}, s.dropped, t)),
        icon: a
      });
    }
  },
  40173: function _(e, t, n) {
    "use strict";

    function r(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Object.assign({}, e, function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var r = Object.assign({}, t);

        for (var _i2 = 0, _Object$keys = Object.keys(t); _i2 < _Object$keys.length; _i2++) {
          var o = _Object$keys[_i2];
          var i = n[o] || o;
          i in e && (r[o] = [e[i], t[o]].join(" "));
        }

        return r;
      }(e, t, n));
    }

    n.d(t, {
      mergeThemes: function mergeThemes() {
        return r;
      }
    });
  },
  95257: function _(e, t) {
    "use strict";

    var n = Symbol["for"]("react.element"),
        r = Symbol["for"]("react.portal"),
        o = Symbol["for"]("react.fragment"),
        i = Symbol["for"]("react.strict_mode"),
        s = Symbol["for"]("react.profiler"),
        a = Symbol["for"]("react.provider"),
        l = Symbol["for"]("react.context"),
        c = Symbol["for"]("react.forward_ref"),
        u = Symbol["for"]("react.suspense"),
        d = Symbol["for"]("react.memo"),
        h = Symbol["for"]("react.lazy"),
        p = Symbol.iterator;
    var f = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        m = Object.assign,
        v = {};

    function g(e, t, n) {
      this.props = e, this.context = t, this.refs = v, this.updater = n || f;
    }

    function C() {}

    function y(e, t, n) {
      this.props = e, this.context = t, this.refs = v, this.updater = n || f;
    }

    g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, g.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, C.prototype = g.prototype;
    var E = y.prototype = new C();
    E.constructor = y, m(E, g.prototype), E.isPureReactComponent = !0;
    var b = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        w = {
      current: null
    },
        S = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function x(e, t, r) {
      var o,
          i = {},
          s = null,
          a = null;
      if (null != t) for (o in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) {
        _.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
      }
      var l = arguments.length - 2;
      if (1 === l) i.children = r;else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++) {
          c[u] = arguments[u + 2];
        }

        i.children = c;
      }
      if (e && e.defaultProps) for (o in l = e.defaultProps) {
        void 0 === i[o] && (i[o] = l[o]);
      }
      return {
        $$typeof: n,
        type: e,
        key: s,
        ref: a,
        props: i,
        _owner: w.current
      };
    }

    function k(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === n;
    }

    var A = /\/+/g;

    function N(e, t) {
      return "object" == _typeof(e) && null !== e && null != e.key ? function (e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function (e) {
          return t[e];
        });
      }("" + e.key) : t.toString(36);
    }

    function D(e, t, o, i, s) {
      var a = _typeof(e);

      "undefined" !== a && "boolean" !== a || (e = null);
      var l = !1;
      if (null === e) l = !0;else switch (a) {
        case "string":
        case "number":
          l = !0;
          break;

        case "object":
          switch (e.$$typeof) {
            case n:
            case r:
              l = !0;
          }

      }
      if (l) return s = s(l = e), e = "" === i ? "." + N(l, 0) : i, b(s) ? (o = "", null != e && (o = e.replace(A, "$&/") + "/"), D(s, t, o, "", function (e) {
        return e;
      })) : null != s && (k(s) && (s = function (e, t) {
        return {
          $$typeof: n,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(s, o + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(A, "$&/") + "/") + e)), t.push(s)), 1;
      if (l = 0, i = "" === i ? "." : i + ":", b(e)) for (var c = 0; c < e.length; c++) {
        var u = i + N(a = e[c], c);
        l += D(a, t, o, u, s);
      } else if (u = function (e) {
        return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
      }(e), "function" == typeof u) for (e = u.call(e), c = 0; !(a = e.next()).done;) {
        l += D(a = a.value, t, o, u = i + N(a, c++), s);
      } else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return l;
    }

    function R(e, t, n) {
      if (null == e) return e;
      var r = [],
          o = 0;
      return D(e, r, "", "", function (e) {
        return t.call(n, e, o++);
      }), r;
    }

    function I(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(function (t) {
          0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t);
        }, function (t) {
          0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t);
        }), -1 === e._status && (e._status = 0, e._result = t);
      }

      if (1 === e._status) return e._result["default"];
      throw e._result;
    }

    var L = {
      current: null
    },
        T = {
      transition: null
    },
        B = {
      ReactCurrentDispatcher: L,
      ReactCurrentBatchConfig: T,
      ReactCurrentOwner: w
    };
    t.Children = {
      map: R,
      forEach: function forEach(e, t, n) {
        R(e, function () {
          t.apply(this, arguments);
        }, n);
      },
      count: function count(e) {
        var t = 0;
        return R(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return R(e, function (e) {
          return e;
        }) || [];
      },
      only: function only(e) {
        if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    }, t.Component = g, t.Fragment = o, t.Profiler = s, t.PureComponent = y, t.StrictMode = i, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, t.cloneElement = function (e, t, r) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var o = m({}, e.props),
          i = e.key,
          s = e.ref,
          a = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (s = t.ref, a = w.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;

        for (c in t) {
          _.call(t, c) && !S.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
        }
      }

      var c = arguments.length - 2;
      if (1 === c) o.children = r;else if (1 < c) {
        l = Array(c);

        for (var u = 0; u < c; u++) {
          l[u] = arguments[u + 2];
        }

        o.children = l;
      }
      return {
        $$typeof: n,
        type: e.type,
        key: i,
        ref: s,
        props: o,
        _owner: a
      };
    }, t.createContext = function (e) {
      return (e = {
        $$typeof: l,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }).Provider = {
        $$typeof: a,
        _context: e
      }, e.Consumer = e;
    }, t.createElement = x, t.createFactory = function (e) {
      var t = x.bind(null, e);
      return t.type = e, t;
    }, t.createRef = function () {
      return {
        current: null
      };
    }, t.forwardRef = function (e) {
      return {
        $$typeof: c,
        render: e
      };
    }, t.isValidElement = k, t.lazy = function (e) {
      return {
        $$typeof: h,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: I
      };
    }, t.memo = function (e, t) {
      return {
        $$typeof: d,
        type: e,
        compare: void 0 === t ? null : t
      };
    }, t.startTransition = function (e) {
      var t = T.transition;
      T.transition = {};

      try {
        e();
      } finally {
        T.transition = t;
      }
    }, t.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }, t.useCallback = function (e, t) {
      return L.current.useCallback(e, t);
    }, t.useContext = function (e) {
      return L.current.useContext(e);
    }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
      return L.current.useDeferredValue(e);
    }, t.useEffect = function (e, t) {
      return L.current.useEffect(e, t);
    }, t.useId = function () {
      return L.current.useId();
    }, t.useImperativeHandle = function (e, t, n) {
      return L.current.useImperativeHandle(e, t, n);
    }, t.useInsertionEffect = function (e, t) {
      return L.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect = function (e, t) {
      return L.current.useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return L.current.useMemo(e, t);
    }, t.useReducer = function (e, t, n) {
      return L.current.useReducer(e, t, n);
    }, t.useRef = function (e) {
      return L.current.useRef(e);
    }, t.useState = function (e) {
      return L.current.useState(e);
    }, t.useSyncExternalStore = function (e, t, n) {
      return L.current.useSyncExternalStore(e, t, n);
    }, t.useTransition = function () {
      return L.current.useTransition();
    }, t.version = "18.2.0";
  },
  50959: function _(e, t, n) {
    "use strict";

    e.exports = n(95257);
  },
  12989: function _(e) {
    e.exports = {
      summary: "summary-ynHBVe1n",
      hovered: "hovered-ynHBVe1n",
      caret: "caret-ynHBVe1n"
    };
  },
  76197: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CollapsibleSection: function CollapsibleSection() {
        return l;
      }
    });
    var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(10381),
        a = n(12989);
    var l = (0, r.forwardRef)(function (e, t) {
      var n = e.open,
          o = e.summary,
          l = e.children,
          c = e.onStateChange,
          u = e.tabIndex,
          d = e.className,
          h = _objectWithoutProperties(e, ["open", "summary", "children", "onStateChange", "tabIndex", "className"]);

      return r.createElement(r.Fragment, null, r.createElement("div", _objectSpread({}, h, {
        className: i()(d, a.summary),
        onClick: function onClick() {
          c && c(!n);
        },
        "data-open": n,
        ref: t,
        tabIndex: u
      }), o, r.createElement(s.ToolWidgetCaret, {
        className: a.caret,
        dropped: Boolean(n)
      })), n && l);
    });
  },
  12811: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HorizontalAttachEdge: function HorizontalAttachEdge() {
        return o;
      },
      HorizontalDropDirection: function HorizontalDropDirection() {
        return s;
      },
      VerticalAttachEdge: function VerticalAttachEdge() {
        return r;
      },
      VerticalDropDirection: function VerticalDropDirection() {
        return i;
      },
      getPopupPositioner: function getPopupPositioner() {
        return c;
      }
    });
    var r,
        o,
        i,
        s,
        a = n(50151);
    !function (e) {
      e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom", e[e.AutoStrict = 2] = "AutoStrict";
    }(r || (r = {})), function (e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right";
    }(o || (o = {})), function (e) {
      e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop";
    }(i || (i = {})), function (e) {
      e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft";
    }(s || (s = {}));
    var l = {
      verticalAttachEdge: r.Bottom,
      horizontalAttachEdge: o.Left,
      verticalDropDirection: i.FromTopToBottom,
      horizontalDropDirection: s.FromLeftToRight,
      verticalMargin: 0,
      horizontalMargin: 0,
      matchButtonAndListboxWidths: !1
    };

    function c(e, t) {
      return function (n, c, u, d) {
        var h, p;
        var f = (0, a.ensureNotNull)(e).getBoundingClientRect(),
            _t$horizontalAttachEd = t.horizontalAttachEdge,
            m = _t$horizontalAttachEd === void 0 ? l.horizontalAttachEdge : _t$horizontalAttachEd,
            _t$horizontalDropDire = t.horizontalDropDirection,
            v = _t$horizontalDropDire === void 0 ? l.horizontalDropDirection : _t$horizontalDropDire,
            _t$horizontalMargin = t.horizontalMargin,
            g = _t$horizontalMargin === void 0 ? l.horizontalMargin : _t$horizontalMargin,
            _t$verticalMargin = t.verticalMargin,
            C = _t$verticalMargin === void 0 ? l.verticalMargin : _t$verticalMargin,
            _t$matchButtonAndList = t.matchButtonAndListboxWidths,
            y = _t$matchButtonAndList === void 0 ? l.matchButtonAndListboxWidths : _t$matchButtonAndList;
        var E = null !== (h = t.verticalAttachEdge) && void 0 !== h ? h : l.verticalAttachEdge,
            b = null !== (p = t.verticalDropDirection) && void 0 !== p ? p : l.verticalDropDirection;
        E === r.AutoStrict && (d < f.y + f.height + C + c ? (E = r.Top, b = i.FromBottomToTop) : (E = r.Bottom, b = i.FromTopToBottom));

        var _ = E === r.Top ? -1 * C : C,
            w = m === o.Right ? f.right : f.left,
            S = E === r.Top ? f.top : f.bottom,
            x = {
          x: w - (v === s.FromRightToLeft ? n : 0) + g,
          y: S - (b === i.FromBottomToTop ? c : 0) + _
        };

        return y && (x.overrideWidth = f.width), x;
      };
    }
  },
  84298: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      currencyActions: function currencyActions() {
        return a;
      }
    });
    var r = n(50151),
        o = n(44352),
        i = n(89691),
        s = n(79188);

    function a(e, t, a) {
      if (null === t || t.readOnly) return [];

      var l = [],
          c = function c(t) {
        e.setPriceScaleCurrency(a, t);
      },
          u = t.selectedCurrency,
          d = t.originalCurrencies,
          h = t.baseCurrencies,
          p = t.displayedValues,
          f = s.favoriteCurrencyUnitConversionService.get().currencies,
          m = {
        id: "first_section",
        actions: []
      };

      if (d.size > 1) {
        var _e6 = (0, i.createAction)("Mixed", o.t(null, void 0, n(95093)), void 0, void 0, null === t.selectedCurrency, function () {
          return c(null);
        });

        m.actions.push(_e6);
      }

      var v = e.model().availableCurrencies();

      if (null !== u) {
        var _e7 = (0, r.ensureNotNull)(v.item(u)),
            _t5 = (0, i.createAction)(u, (0, r.ensureDefined)(p.get(u)), _e7.logoUrl, _e7.description, !0, function () {}, f.has(u), function () {
          return s.favoriteCurrencyUnitConversionService.toggle("currencies", u);
        });

        m.actions.push(_t5);
      }

      var g = v.filterConvertible(h, function (e) {
        return e !== u && d.has(e);
      });
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop = function _loop() {
          var e = _step4.value;
          var n = (0, r.ensureNotNull)(v.item(e.id));
          m.actions.push((0, i.createAction)(e.id, e.code, n.logoUrl, n.description, t.selectedCurrency === e.id, function () {
            return c(e.id);
          }, f.has(e.id), function () {
            return s.favoriteCurrencyUnitConversionService.toggle("currencies", e.id);
          }));
        };

        for (var _iterator4 = g[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      m.actions.length > 0 && l.push(m);
      var C = v.filterConvertible(h, function (e) {
        return e !== u && !d.has(e);
      }),
          y = [],
          E = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        var _loop2 = function _loop2() {
          var e = _step5.value;
          var n = (0, r.ensureNotNull)(v.item(e.id)),
              o = f.has(e.id),
              a = (0, i.createAction)(e.id, e.code, n.logoUrl, n.description, t.selectedCurrency === e.id, function () {
            return c(e.id);
          }, o, function () {
            return s.favoriteCurrencyUnitConversionService.toggle("currencies", e.id);
          });
          o ? y.push(a) : E.push(a);
        };

        for (var _iterator5 = C[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          _loop2();
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

      return (E.length > 0 || y.length > 0) && l.push({
        id: "second_section",
        actions: y.concat(E)
      }), l;
    }
  },
  79188: function _(e, t, n) {
    "use strict";

    n.d(t, {
      favoriteCurrencyUnitConversionService: function favoriteCurrencyUnitConversionService() {
        return a;
      }
    });
    var r = n(56840),
        o = n(21097),
        i = n(68456);

    var s =
    /*#__PURE__*/
    function (_i$AbstractJsonStoreS) {
      _inherits(s, _i$AbstractJsonStoreS);

      function s(e, t) {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e, t, "FAVORITE_CURRENCY_UNIT_CONVERSION_CHANGED", "currencyUnitConversion.favorites", {
          currencies: new Set(),
          units: new Set()
        }));
      }

      _createClass(s, [{
        key: "add",
        value: function add(e, t) {
          var n = this.get();
          n[e].add(t), this.set(n);
        }
      }, {
        key: "remove",
        value: function remove(e, t) {
          var n = this.get();
          n[e]["delete"](t) && this.set(n);
        }
      }, {
        key: "toggle",
        value: function toggle(e, t) {
          this.get()[e].has(t) ? this.remove(e, t) : this.add(e, t);
        }
      }, {
        key: "_serialize",
        value: function _serialize(e) {
          return [_toConsumableArray(e.currencies), _toConsumableArray(e.units)];
        }
      }, {
        key: "_deserialize",
        value: function _deserialize(e) {
          return {
            currencies: new Set(e[0]),
            units: new Set(e[1])
          };
        }
      }]);

      return s;
    }(i.AbstractJsonStoreService);

    var a = new s(o.TVXWindowEvents, r);
  },
  14818: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      unitActions: function unitActions() {
        return a;
      }
    });
    var r = n(50151),
        o = n(44352),
        i = n(89691),
        s = n(79188);

    function a(e, t, a) {
      var _m$actions;

      if (null === t || 0 === t.availableGroups.size) return [];

      var l = [],
          c = function c(t) {
        e.setPriceScaleUnit(a, t);
      },
          u = t.selectedUnit,
          d = t.originalUnits,
          h = t.names,
          p = t.descriptions,
          f = s.favoriteCurrencyUnitConversionService.get().units,
          m = {
        actions: [],
        id: "first_section"
      };

      if (d.size > 1) {
        var _e8 = (0, i.createAction)("Mixed", o.t(null, void 0, n(95093)), void 0, void 0, null === t.selectedUnit, function () {
          return c(null);
        });

        m.actions.push(_e8);
      }

      var v = e.model().availableUnits();

      if (null !== u) {
        var _e9 = (0, i.createAction)(u, (0, r.ensureDefined)(h.get(u)), void 0, (0, r.ensureDefined)(p.get(u)), !0, function () {}, f.has(u), function () {
          return s.favoriteCurrencyUnitConversionService.toggle("units", u);
        });

        m.actions.push(_e9);
      }

      var g = v.unitsByGroups(t.availableGroups),
          C = [],
          y = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = g[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _e11 = _step6.value;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            var _loop4 = function _loop4() {
              var t = _step10.value;
              var e = f.has(t.id);
              if (t.id === u || !e && !d.has(t.id)) return "continue";
              var n = (0, i.createAction)(t.id, t.name, void 0, t.description, !1, function () {
                return c(t.id);
              }, e, function () {
                return s.favoriteCurrencyUnitConversionService.toggle("units", t.id);
              });
              e ? y.push(n) : C.push(n);
            };

            for (var _iterator10 = _e11.units[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _ret = _loop4();

              if (_ret === "continue") continue;
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

      (C.length > 0 || y.length > 0) && (_m$actions = m.actions).push.apply(_m$actions, _toConsumableArray(y.sort(function (e, t) {
        return e.label.toLowerCase().localeCompare(t.label.toLowerCase());
      })).concat(C)), m.actions.length > 0 && l.push(m);
      var E = u && v.unitGroupById(u);

      if (null !== E) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = g[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _e10 = _step7.value;
            if (_e10.name !== E) continue;
            var _t6 = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              var _loop3 = function _loop3() {
                var n = _step8.value;
                n.id === u || d.has(n.id) || f.has(n.id) || _t6.push((0, i.createAction)(n.id, n.name, void 0, n.description, !1, function () {
                  return c(n.id);
                }, !1, function () {
                  return s.favoriteCurrencyUnitConversionService.toggle("units", n.id);
                }));
              };

              for (var _iterator8 = _e10.units[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                _loop3();
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

            _t6.length > 0 && l.push({
              id: _e10.name,
              name: _e10.name,
              actions: _t6
            });
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
      }

      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = g[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _e12 = _step9.value;
          if (_e12.name === E) continue;
          var _t7 = [];
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            var _loop5 = function _loop5() {
              var n = _step11.value;
              n.id === u || d.has(n.id) || f.has(n.id) || _t7.push((0, i.createAction)(n.id, n.name, void 0, n.description, !1, function () {
                return c(n.id);
              }, !1, function () {
                return s.favoriteCurrencyUnitConversionService.toggle("units", n.id);
              }));
            };

            for (var _iterator11 = _e12.units[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              _loop5();
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

          _t7.length > 0 && l.push({
            id: _e12.name,
            name: _e12.name,
            actions: _t7
          });
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

      return l;
    }
  },
  89691: function _(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, s, a) {
      return {
        id: e,
        label: t,
        icon: n,
        description: r,
        isActive: o,
        onClick: i,
        isFavorite: s,
        onFavoriteClick: a
      };
    }

    n.d(t, {
      createAction: function createAction() {
        return r;
      }
    });
  },
  578: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
  },
  7720: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
  },
  69311: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
  },
  48471: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M11.85 11.93A5.48 5.48 0 0 0 8 2.5a5.5 5.5 0 1 0 3.85 9.43zm0 0L16 16"/></svg>';
  },
  69859: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
  },
  39146: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
  },
  48010: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
  },
  20036: function _(e) {
    e.exports = {
      ar: ["إلغاء"],
      ca_ES: ["Cancel·la"],
      cs: ["Zrušit"],
      de: ["Abbrechen"],
      el: ["Άκυρο"],
      en: "Cancel",
      es: ["Cancelar"],
      fa: ["لغو"],
      fr: ["Annuler"],
      he_IL: ["ביטול"],
      hu_HU: ["Törlés"],
      id_ID: ["Batal"],
      it: ["Annulla"],
      ja: ["キャンセル"],
      ko: ["취소"],
      ms_MY: ["Batal"],
      nl_NL: ["Annuleren"],
      pl: ["Anuluj"],
      pt: ["Cancelar"],
      ro: "Cancel",
      ru: ["Отмена"],
      sv: ["Avbryt"],
      th: ["ยกเลิก"],
      tr: ["İptal"],
      vi: ["Hủy bỏ"],
      zh: ["取消"],
      zh_TW: ["取消"]
    };
  },
  44629: function _(e) {
    e.exports = {
      ar: ["اضف إلى القائمة التفضيلات"],
      ca_ES: ["Afegeix a preferits"],
      cs: ["Přidat do oblíbených"],
      de: ["Zu Favoriten hinzufügen"],
      el: ["Προσθήκη στα αγαπημένα"],
      en: "Add to favorites",
      es: ["Añadir a favoritos"],
      fa: ["افزودن به موارد مورد علاقه"],
      fr: ["Ajouter aux favoris"],
      he_IL: ["הוסף למועדפים"],
      hu_HU: ["Hozzáadás kedvencekhez"],
      id_ID: ["Tambah ke daftar favorit"],
      it: ["Aggiungi ai preferiti"],
      ja: ["お気に入りに追加"],
      ko: ["즐겨찾기에 넣기"],
      ms_MY: ["Tambah kepada kegemaran"],
      nl_NL: ["Voeg toe aan favorieten"],
      pl: ["Dodaj do ulubionych"],
      pt: ["Adicionar aos favoritos"],
      ro: "Add to favorites",
      ru: ["Добавить в избранное"],
      sv: ["Lägg till som favorit"],
      th: ["เพิ่มลงรายการโปรด"],
      tr: ["Favorilere ekle"],
      vi: ["Thêm vào mục yêu thích"],
      zh: ["添加到收藏"],
      zh_TW: ["加入收藏"]
    };
  },
  52298: function _(e) {
    e.exports = {
      ar: ["بحث"],
      ca_ES: ["Cercar"],
      cs: ["Hledat"],
      de: ["Suche"],
      el: ["Αναζήτησή"],
      en: "Search",
      es: ["Buscar"],
      fa: ["جستجو"],
      fr: ["Chercher"],
      he_IL: ["חפש"],
      hu_HU: ["Keresés"],
      id_ID: ["Cari"],
      it: ["Cerca"],
      ja: ["検索"],
      ko: ["찾기"],
      ms_MY: ["Cari"],
      nl_NL: ["Zoeken"],
      pl: ["Szukaj"],
      pt: ["Pesquisar"],
      ro: "Search",
      ru: ["Поиск"],
      sv: ["Sök"],
      th: ["ค้นหา"],
      tr: ["Ara"],
      vi: ["Tìm kiếm"],
      zh: ["搜索"],
      zh_TW: ["搜尋"]
    };
  },
  72482: function _(e) {
    e.exports = {
      ar: ["حذف من القائمة المفضلة"],
      ca_ES: ["Treure de preferits"],
      cs: ["Odebrat z oblíbených"],
      de: ["Aus Favoriten entfernen"],
      el: ["Διαγραφή απο τα αγαπημένα"],
      en: "Remove from favorites",
      es: ["Quitar de favoritos"],
      fa: ["حذف از موارد مورد علاقه"],
      fr: ["Retirer des favoris"],
      he_IL: ["הסר ממועדפים"],
      hu_HU: ["Eltávolít kedvencek közül"],
      id_ID: ["Hilangkan dari favorit"],
      it: ["Rimuovi dai preferiti"],
      ja: ["お気に入りから削除"],
      ko: ["즐겨찾기지움"],
      ms_MY: ["Buang dari kegemaran"],
      nl_NL: ["Verwijder van favorieten"],
      pl: ["Usuń z ulubionych"],
      pt: ["Remover dos favoritos"],
      ro: "Remove from favorites",
      ru: ["Удалить из предпочтений"],
      sv: ["Ta bort från favoriter"],
      th: ["ลบออกจากรายการโปรด"],
      tr: ["Favorilerimden çıkar"],
      vi: ["Loại bỏ khỏi mục yêu thích"],
      zh: ["从收藏中移除"],
      zh_TW: ["從收藏移除"]
    };
  }
}]);