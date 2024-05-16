"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4013], {
  23428: function _(e) {
    e.exports = {
      button: "button-PYEOTd6i",
      disabled: "disabled-PYEOTd6i",
      hidden: "hidden-PYEOTd6i",
      icon: "icon-PYEOTd6i",
      dropped: "dropped-PYEOTd6i"
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
  45719: function _(e) {
    e.exports = {
      separator: "separator-Pf4rIzEt"
    };
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
  36104: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useControlDisclosure: function useControlDisclosure() {
        return l;
      }
    });
    var o = n(7953);

    function l(e) {
      var t = e.intent,
          n = e.highlight,
          l = _objectWithoutProperties(e, ["intent", "highlight"]),
          _ref = (0, o.useDisclosure)(l),
          r = _ref.isFocused,
          i = _objectWithoutProperties(_ref, ["isFocused"]);

      return _objectSpread({}, i, {
        isFocused: r,
        highlight: null != n ? n : r,
        intent: null != t ? t : r ? "primary" : "default"
      });
    }
  },
  53017: function _(e, t, n) {
    "use strict";

    function o(e) {
      return function (t) {
        e.forEach(function (e) {
          "function" == typeof e ? e(t) : null != e && (e.current = t);
        });
      };
    }

    function l(e) {
      return o([e]);
    }

    n.d(t, {
      isomorphicRef: function isomorphicRef() {
        return l;
      },
      mergeRefs: function mergeRefs() {
        return o;
      }
    });
  },
  35057: function _(e, t, n) {
    "use strict";

    n.d(t, {
      AdaptivePopupDialog: function AdaptivePopupDialog() {
        return N;
      }
    });
    var o = n(50959),
        l = n(50151);
    var r = n(97754),
        i = n.n(r),
        s = n(68335),
        a = n(38223),
        d = n(35749),
        c = n(63016),
        u = n(1109),
        p = n(24437),
        h = n(90692),
        m = n(95711);
    var f = n(52092),
        b = n(76422),
        v = n(9745);
    var g = o.createContext({
      setHideClose: function setHideClose() {}
    });

    var C = n(7720),
        _ = n(69827);

    function E(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          n = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
          l = e.subtitle,
          _e$showCloseIcon = e.showCloseIcon,
          r = _e$showCloseIcon === void 0 ? !0 : _e$showCloseIcon,
          s = e.onClose,
          a = e.onCloseButtonKeyDown,
          d = e.renderBefore,
          c = e.renderAfter,
          u = e.draggable,
          p = e.className,
          h = e.unsetAlign,
          m = e.closeAriaLabel,
          f = e.closeButtonReference,
          _ref2 = (0, o.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          b = _ref3[0],
          E = _ref3[1];

      return o.createElement(g.Provider, {
        value: {
          setHideClose: E
        }
      }, o.createElement("div", {
        className: i()(_.container, p, (l || h) && _.unsetAlign)
      }, d, o.createElement("div", {
        "data-dragg-area": u,
        className: _.title
      }, o.createElement("div", {
        className: i()(n ? _.textWrap : _.ellipsis)
      }, t), l && o.createElement("div", {
        className: i()(_.ellipsis, _.subtitle)
      }, l)), c, r && !b && o.createElement("button", {
        className: _.close,
        onClick: s,
        onKeyDown: a,
        "data-name": "close",
        "aria-label": m,
        type: "button",
        ref: f
      }, o.createElement(v.Icon, {
        className: _.icon,
        icon: C,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var x = n(53017),
        w = n(90186),
        O = n(55596);
    var A = {
      vertical: 20
    },
        y = {
      vertical: 0
    };

    var N =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(N, _o$PureComponent);

      function N() {
        var _this;

        _classCallCheck(this, N);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(N).apply(this, arguments)), _this._controller = null, _this._reference = null, _this._orientationMediaQuery = null, _this._renderChildren = function (e, t) {
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
          void 0 !== _this.props.onOpen && _this.props.isOpened && _this.props.onOpen(_this.props.fullScreen || window.matchMedia(p.DialogBreakpoints.TabletSmall).matches);
        }, _this._handleKeyDown = function (e) {
          if (!e.defaultPrevented) {
            if (_this.props.onKeyDown && _this.props.onKeyDown(e), 27 === (0, s.hashFromEvent)(e)) {
              if (e.defaultPrevented) return;
              if (_this.props.forceCloseOnEsc && _this.props.forceCloseOnEsc()) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();

              var _document = document,
                  _n2 = _document.activeElement,
                  _o = (0, l.ensureNotNull)(_this._reference);

              if (null !== _n2) {
                if (e.preventDefault(), "true" === (t = _n2).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void _this._handleClose();
                if ((0, d.isTextEditingField)(_n2)) return void _o.focus();
                if (_o.contains(_n2)) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();
              }
            }

            var t, n;
            (function (e) {
              if ("function" == typeof e) return e();
              return Boolean(e);
            })(_this.props.disableTabNavigationContainment) || (n = e, [9, s.Modifiers.Shift + 9].includes((0, s.hashFromEvent)(n)) && n.stopPropagation());
          }
        }, _this._requestResize = function () {
          null !== _this._controller && _this._controller.recalculateBounds();
        }, _this._centerAndFit = function () {
          null !== _this._controller && _this._controller.centerAndFit();
        }, _this._calculatePositionWithOffsets = function (e, t) {
          var n = (0, l.ensureDefined)(_this.props.fullScreenViewOffsets).value();
          return {
            top: n.top,
            left: (0, a.isRtl)() ? -n.right : n.left,
            width: t.clientWidth - n.left - n.right,
            height: t.clientHeight - n.top - n.bottom
          };
        };
        return _this;
      }

      _createClass(N, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || b.subscribe(f.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t) : e.addListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || b.unsubscribe(f.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t) : e.removeListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
        }
      }, {
        key: "focus",
        value: function focus() {
          (0, l.ensureNotNull)(this._reference).focus();
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
              l = _this$props.isOpened,
              r = _this$props.title,
              s = _this$props.titleTextWrap,
              a = _this$props.dataName,
              d = _this$props.onClickOutside,
              f = _this$props.additionalElementPos,
              b = _this$props.additionalHeaderElement,
              v = _this$props.backdrop,
              _this$props$shouldFor = _this$props.shouldForceFocus,
              g = _this$props$shouldFor === void 0 ? !0 : _this$props$shouldFor,
              C = _this$props.shouldReturnFocus,
              _ = _this$props.onForceFocus,
              N = _this$props.showSeparator,
              T = _this$props.subtitle,
              _this$props$draggable = _this$props.draggable,
              I = _this$props$draggable === void 0 ? !0 : _this$props$draggable,
              _this$props$fullScree = _this$props.fullScreen,
              k = _this$props$fullScree === void 0 ? !1 : _this$props$fullScree,
              _this$props$showClose = _this$props.showCloseIcon,
              S = _this$props$showClose === void 0 ? !0 : _this$props$showClose,
              _this$props$rounded = _this$props.rounded,
              D = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              L = _this$props.isAnimationEnabled,
              M = _this$props.growPoint,
              B = _this$props.dialogTooltip,
              z = _this$props.unsetHeaderAlign,
              K = _this$props.onDragStart,
              F = _this$props.dataDialogName,
              P = _this$props.closeAriaLabel,
              R = _this$props.containerAriaLabel,
              W = _this$props.reference,
              H = _this$props.containerTabIndex,
              U = _this$props.closeButtonReference,
              V = _this$props.onCloseButtonKeyDown,
              G = _this$props.shadowed,
              Y = _this$props.fullScreenViewOffsets,
              Z = "after" !== f ? b : void 0,
              j = "after" === f ? b : void 0,
              X = "string" == typeof r ? r : F || "",
              q = (0, w.filterDataProps)(this.props),
              Q = (0, x.mergeRefs)([this._handleReference, W]);
          return o.createElement(h.MatchMedia, {
            rule: p.DialogBreakpoints.SmallHeight
          }, function (f) {
            return o.createElement(h.MatchMedia, {
              rule: p.DialogBreakpoints.TabletSmall
            }, function (p) {
              return o.createElement(c.PopupDialog, _objectSpread({
                rounded: !(p || k) && D,
                className: i()(O.dialog, k && Y && O.bounded, e),
                isOpened: l,
                reference: Q,
                onKeyDown: _this2._handleKeyDown,
                onClickOutside: d,
                onClickBackdrop: d,
                fullscreen: p || k,
                guard: f ? y : A,
                boundByScreen: p || k,
                shouldForceFocus: g,
                onForceFocus: _,
                shouldReturnFocus: C,
                backdrop: v,
                draggable: I,
                isAnimationEnabled: L,
                growPoint: M,
                name: _this2.props.dataName,
                dialogTooltip: B,
                onDragStart: K,
                containerAriaLabel: R,
                containerTabIndex: H,
                calculateDialogPosition: k && Y ? _this2._calculatePositionWithOffsets : void 0,
                shadowed: G
              }, q), o.createElement("div", {
                className: i()(O.wrapper, t),
                "data-name": a,
                "data-dialog-name": X
              }, void 0 !== r && o.createElement(E, {
                draggable: I && !(p || k),
                onClose: _this2._handleCloseBtnClick,
                renderAfter: j,
                renderBefore: Z,
                subtitle: T,
                title: r,
                titleTextWrap: s,
                showCloseIcon: S,
                className: n,
                unsetAlign: z,
                closeAriaLabel: P,
                closeButtonReference: U,
                onCloseButtonKeyDown: V
              }), N && o.createElement(u.Separator, {
                className: O.separator
              }), o.createElement(m.PopupContext.Consumer, null, function (e) {
                return _this2._renderChildren(e, p || k);
              })));
            });
          });
        }
      }]);

      return N;
    }(o.PureComponent);
  },
  59054: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlDisclosureView: function ControlDisclosureView() {
        return b;
      }
    });
    var o = n(50959),
        l = n(97754),
        r = n.n(l),
        i = n(38528),
        s = n(67029),
        a = n(78274),
        d = n(4523),
        c = n(9745),
        u = n(2948),
        p = n(23428);

    function h(e) {
      var t = e.isDropped;
      return o.createElement(c.Icon, {
        className: r()(p.icon, t && p.dropped),
        icon: u
      });
    }

    function m(e) {
      var t = e.className,
          n = e.disabled,
          l = e.isDropped;
      return o.createElement("span", {
        className: r()(p.button, n && p.disabled, t)
      }, o.createElement(h, {
        isDropped: l
      }));
    }

    var f = n(66986);
    var b = o.forwardRef(function (e, t) {
      var n = e.listboxId,
          l = e.className,
          c = e.listboxClassName,
          u = e.listboxTabIndex,
          p = e.hideArrowButton,
          h = e.matchButtonAndListboxWidths,
          b = e.popupPosition,
          v = e.disabled,
          g = e.isOpened,
          C = e.scrollWrapReference,
          _ = e.repositionOnScroll,
          E = e.closeOnHeaderOverlap,
          x = e.listboxReference,
          _e$size = e.size,
          w = _e$size === void 0 ? "small" : _e$size,
          O = e.onClose,
          A = e.onOpen,
          y = e.onListboxFocus,
          N = e.onListboxBlur,
          T = e.onListboxKeyDown,
          I = e.buttonChildren,
          k = e.children,
          S = e.caretClassName,
          D = e.listboxAria,
          L = _objectWithoutProperties(e, ["listboxId", "className", "listboxClassName", "listboxTabIndex", "hideArrowButton", "matchButtonAndListboxWidths", "popupPosition", "disabled", "isOpened", "scrollWrapReference", "repositionOnScroll", "closeOnHeaderOverlap", "listboxReference", "size", "onClose", "onOpen", "onListboxFocus", "onListboxBlur", "onListboxKeyDown", "buttonChildren", "children", "caretClassName", "listboxAria"]),
          M = (0, o.useRef)(null),
          B = !p && o.createElement(a.EndSlot, null, o.createElement(m, {
        isDropped: g,
        disabled: v,
        className: S
      }));

      return o.createElement(d.PopupMenuDisclosureView, {
        buttonRef: M,
        listboxId: n,
        listboxClassName: c,
        listboxTabIndex: u,
        isOpened: g,
        onClose: O,
        onOpen: A,
        listboxReference: x,
        scrollWrapReference: C,
        onListboxFocus: y,
        onListboxBlur: N,
        onListboxKeyDown: T,
        listboxAria: D,
        matchButtonAndListboxWidths: h,
        popupPosition: b,
        button: o.createElement(s.ControlSkeleton, _objectSpread({}, L, {
          "data-role": "listbox",
          disabled: v,
          className: r()(f.button, l),
          size: w,
          ref: (0, i.useMergedRefs)([M, t]),
          middleSlot: o.createElement(a.MiddleSlot, null, o.createElement("span", {
            className: r()(f["button-children"], p && f.hiddenArrow)
          }, I)),
          endSlot: B
        })),
        popupChildren: k,
        repositionOnScroll: _,
        closeOnHeaderOverlap: E
      });
    });
    b.displayName = "ControlDisclosureView";
  },
  90405: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Select: function Select() {
        return C;
      }
    });
    var o = n(50959),
        l = n(22064),
        r = n(38528),
        i = n(16921),
        s = n(16396),
        a = n(12481),
        d = n(43370);
    var c = n(36762),
        u = n(26597),
        p = n(59054),
        h = n(36104),
        m = n(38223),
        f = n(60673);

    function b(e) {
      return !e.readonly;
    }

    function v(e, t) {
      var n;
      return null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : (0, l.createDomId)(e, "item", null == t ? void 0 : t.value);
    }

    function g(e) {
      var t, n;
      var l = e.selectedItem,
          r = e.placeholder;
      if (!l) return o.createElement("span", {
        className: f.placeholder
      }, r);
      var i = null !== (n = null !== (t = l.selectedContent) && void 0 !== t ? t : l.content) && void 0 !== n ? n : l.value;
      return o.createElement("span", null, i);
    }

    var C = o.forwardRef(function (e, t) {
      var n = e.id,
          f = e.menuClassName,
          C = e.menuItemClassName,
          _ = e.tabIndex,
          E = e.disabled,
          x = e.highlight,
          w = e.intent,
          O = e.hideArrowButton,
          A = e.placeholder,
          _e$addPlaceholderToIt = e.addPlaceholderToItems,
          y = _e$addPlaceholderToIt === void 0 ? !0 : _e$addPlaceholderToIt,
          N = e.value,
          T = e["aria-labelledby"],
          I = e.onFocus,
          k = e.onBlur,
          S = e.onClick,
          D = e.onChange,
          L = e.onKeyDown,
          _e$repositionOnScroll = e.repositionOnScroll,
          M = _e$repositionOnScroll === void 0 ? !0 : _e$repositionOnScroll,
          _e$openMenuOnEnter = e.openMenuOnEnter,
          B = _e$openMenuOnEnter === void 0 ? !0 : _e$openMenuOnEnter,
          z = e["aria-describedby"],
          K = e["aria-invalid"],
          F = _objectWithoutProperties(e, ["id", "menuClassName", "menuItemClassName", "tabIndex", "disabled", "highlight", "intent", "hideArrowButton", "placeholder", "addPlaceholderToItems", "value", "aria-labelledby", "onFocus", "onBlur", "onClick", "onChange", "onKeyDown", "repositionOnScroll", "openMenuOnEnter", "aria-describedby", "aria-invalid"]);

      var P = e.items;

      if (A && y) {
        P = [{
          value: void 0,
          content: A,
          id: (0, l.createDomId)(n, "placeholder")
        }].concat(_toConsumableArray(P));
      }

      var _ref4 = (0, h.useControlDisclosure)({
        id: n,
        disabled: E,
        buttonTabIndex: _,
        intent: w,
        highlight: x,
        onFocus: I,
        onBlur: k,
        onClick: S
      }),
          R = _ref4.listboxId,
          W = _ref4.isOpened,
          H = _ref4.isFocused,
          U = _ref4.buttonTabIndex,
          V = _ref4.listboxTabIndex,
          G = _ref4.highlight,
          Y = _ref4.intent,
          Z = _ref4.open,
          j = _ref4.onOpen,
          X = _ref4.close,
          q = _ref4.toggle,
          Q = _ref4.buttonFocusBindings,
          $ = _ref4.onButtonClick,
          J = _ref4.buttonRef,
          ee = _ref4.listboxRef,
          te = _ref4.buttonAria,
          ne = P.filter(b),
          oe = ne.find(function (e) {
        return e.value === N;
      }),
          _ref5 = (0, i.useKeepActiveItemIntoView)({
        activeItem: oe
      }),
          _ref6 = _slicedToArray(_ref5, 3),
          le = _ref6[0],
          re = _ref6[1],
          ie = _ref6[2],
          se = (0, l.joinDomIds)(T, n),
          ae = se.length > 0 ? se : void 0,
          de = (0, o.useMemo)(function () {
        return {
          role: "listbox",
          "aria-labelledby": T,
          "aria-activedescendant": v(n, oe)
        };
      }, [T, oe]),
          ce = (0, o.useCallback)(function (e) {
        return e.value === N;
      }, [N]),
          ue = (0, o.useCallback)(function (e) {
        return D && D(e.value);
      }, [D]),
          pe = (0, c.useItemsKeyboardNavigation)(m.isRtl, ne, ce, ue, !1, {
        next: [40],
        previous: [38]
      }),
          he = (0, u.useKeyboardToggle)(q, W || B),
          me = (0, u.useKeyboardClose)(W, X),
          fe = (0, u.useKeyboardOpen)(W, Z),
          be = (0, u.useKeyboardEventHandler)([he, me, fe]),
          ve = (0, u.useKeyboardEventHandler)([pe, he, me]),
          ge = function (e) {
        var t = (0, o.useRef)(""),
            n = (0, o.useMemo)(function () {
          return (0, a["default"])(function () {
            t.current = "";
          }, 500);
        }, []),
            l = (0, o.useMemo)(function () {
          return (0, d["default"])(e, 200);
        }, [e]);
        return (0, o.useCallback)(function (e) {
          e.key.length > 0 && e.key.length < 3 && (t.current += e.key, l(t.current, e), n());
        }, [n, l]);
      }(function (t, n) {
        var o = function (e, t, n) {
          return e.find(function (e) {
            var o;
            var l = t.toLowerCase();
            return !e.readonly && (n ? n(e).toLowerCase().startsWith(l) : !e.readonly && ("string" == typeof e.content && e.content.toLowerCase().startsWith(l) || "string" == typeof e.textContent && e.textContent.toLowerCase().startsWith(l) || String(null !== (o = e.value) && void 0 !== o ? o : "").toLowerCase().startsWith(l)));
          });
        }(ne, t, e.getSearchKey);

        void 0 !== o && D && (n.stopPropagation(), W || Z(), D(o.value));
      });

      return o.createElement(p.ControlDisclosureView, _objectSpread({}, F, {}, te, {}, Q, {
        id: n,
        role: "button",
        tabIndex: U,
        "aria-owns": te["aria-controls"],
        "aria-haspopup": "listbox",
        "aria-labelledby": ae,
        disabled: E,
        hideArrowButton: O,
        isFocused: H,
        isOpened: W,
        highlight: G,
        intent: Y,
        ref: (0, r.useMergedRefs)([J, t]),
        onClick: $,
        onOpen: function onOpen() {
          ie(oe, {
            duration: 0
          }), j();
        },
        onClose: X,
        onKeyDown: function onKeyDown(e) {
          be(e), L && L(e);
          e.defaultPrevented || ge(e);
        },
        listboxId: R,
        listboxTabIndex: V,
        listboxClassName: f,
        listboxAria: de,
        "aria-describedby": z,
        "aria-invalid": K,
        listboxReference: ee,
        scrollWrapReference: le,
        onListboxKeyDown: function onListboxKeyDown(e) {
          ve(e), e.defaultPrevented || ge(e);
        },
        buttonChildren: o.createElement(g, {
          selectedItem: oe,
          placeholder: A
        }),
        repositionOnScroll: M
      }), P.map(function (e, t) {
        var l;
        if (e.readonly) return o.createElement(o.Fragment, {
          key: "readonly_item_".concat(t)
        }, e.content);
        var r = v(n, e);
        return o.createElement(s.PopupMenuItem, {
          key: r,
          id: r,
          className: C,
          role: "option",
          "aria-selected": N === e.value,
          isActive: N === e.value,
          label: null !== (l = e.content) && void 0 !== l ? l : e.value,
          onClick: Ce,
          onClickArg: e.value,
          isDisabled: e.disabled,
          reference: function reference(t) {
            return re(e, t);
          }
        });
      }));

      function Ce(e) {
        D && D(e);
      }
    });
    C.displayName = "Select";
  },
  1109: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Separator: function Separator() {
        return i;
      }
    });
    var o = n(50959),
        l = n(97754),
        r = n(45719);

    function i(e) {
      return o.createElement("div", {
        className: l(r.separator, e.className)
      });
    }
  },
  89872: function _(e) {
    e.exports = {
      scrollable: "scrollable-uT4IUFMG",
      content: "content-uT4IUFMG",
      row: "row-uT4IUFMG",
      title: "title-uT4IUFMG",
      control: "control-uT4IUFMG"
    };
  },
  44762: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      ToolWidgetIntervalsAddDialog: function ToolWidgetIntervalsAddDialog() {
        return h;
      }
    });
    var o = n(50959),
        l = n(44352),
        r = n(50182),
        i = n(90405),
        s = n(31261),
        a = n(59064),
        d = n(86656),
        c = n(65817),
        u = n(89872);
    var p = c.INTERVALS.map(function (e) {
      return {
        value: e.name,
        content: e.label
      };
    });

    function h(e) {
      var t = e.onAdd,
          h = e.onClose,
          m = e.onUnmount,
          _ref7 = (0, o.useState)(c.INTERVALS[0].name),
          _ref8 = _slicedToArray(_ref7, 2),
          f = _ref8[0],
          b = _ref8[1],
          _ref9 = (0, o.useState)("1"),
          _ref10 = _slicedToArray(_ref9, 2),
          v = _ref10[0],
          g = _ref10[1];

      return (0, o.useEffect)(function () {
        return function () {
          m && m();
        };
      }, []), o.createElement(r.AdaptiveConfirmDialog, {
        dataName: "add-custom-interval-dialog",
        title: l.t(null, void 0, n(92746)),
        isOpened: !0,
        onSubmit: function onSubmit() {
          t(v, f), h();
        },
        onCancel: h,
        onClickOutside: h,
        onClose: h,
        render: function render() {
          return o.createElement(d.TouchScrollContainer, {
            className: u.scrollable,
            onScroll: _
          }, o.createElement("div", {
            className: u.content
          }, o.createElement("div", {
            className: u.row
          }, o.createElement("div", {
            className: u.title
          }, l.t(null, void 0, n(58416))), o.createElement(i.Select, {
            id: "metric-items",
            className: u.control,
            value: f,
            items: p,
            onChange: E
          })), o.createElement("div", {
            className: u.row
          }, o.createElement("div", {
            className: u.title
          }, l.t(null, void 0, n(69466))), o.createElement(s.InputControl, {
            className: u.control,
            inputMode: "numeric",
            maxLength: 6,
            value: v,
            onChange: C
          }))));
        },
        defaultActionOnClose: "none",
        submitButtonText: l.t(null, void 0, n(54777)),
        submitOnEnterKey: !1,
        fullScreen: !0
      });

      function C(e) {
        var t = e.currentTarget.value;
        /^[0-9]*$/.test(t) && g(t);
      }

      function _() {
        a.globalCloseDelegate.fire();
      }

      function E(e) {
        b(e);
      }
    }
  },
  2948: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"/></svg>';
  },
  7720: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
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
  92746: function _(e) {
    e.exports = {
      ar: ["إضافة فترة زمنية مخصصة"],
      ca_ES: ["Afegeix interval de temps personalitzat"],
      cs: "Add custom time interval",
      de: ["Individuelles Zeit Interval hinzufügen"],
      el: "Add custom time interval",
      en: "Add custom time interval",
      es: ["Añadir intervalo de tiempo personalizado"],
      fa: "Add custom time interval",
      fr: ["Ajouter un intervalle de temps personnalisé"],
      he_IL: ["הוסף אינטרוול זמן מותאם אישית"],
      hu_HU: "Add custom time interval",
      id_ID: ["Tambahkan interval waktu khusus"],
      it: ["Aggiungi timeframe personalizzato"],
      ja: ["カスタム時間足を追加"],
      ko: ["커스텀 타임 인터벌 넣기"],
      ms_MY: ["Tambah selang masa tersuai"],
      nl_NL: "Add custom time interval",
      pl: ["Dodaj niestandardowy przedział czasowy"],
      pt: ["Adicionar um tempo gráfico personalizado"],
      ro: "Add custom time interval",
      ru: ["Добавить свой временной интервал"],
      sv: ["Lägg till anpassat tidsintervall"],
      th: ["เพิ่มช่วงเวลาแบบกำหนดเอง"],
      tr: ["Özel zaman aralığı ekle"],
      vi: ["Thêm khoảng thời gian tùy chỉnh"],
      zh: ["添加自定义事件周期"],
      zh_TW: ["增加自訂時間周期"]
    };
  },
  69466: function _(e) {
    e.exports = {
      ar: ["الفاصل الزمني"],
      ca_ES: "Interval",
      cs: "Interval",
      de: ["Intervall"],
      el: "Interval",
      en: "Interval",
      es: ["Intervalo"],
      fa: ["بازه زمانی"],
      fr: ["Intervalle"],
      he_IL: ["אינטרוול"],
      hu_HU: ["Időköz"],
      id_ID: "Interval",
      it: ["Timeframe"],
      ja: ["時間足"],
      ko: ["인터벌"],
      ms_MY: ["Selang Masa"],
      nl_NL: "Interval",
      pl: ["Interwał"],
      pt: ["Tempo Gráfico"],
      ro: "Interval",
      ru: ["Интервал"],
      sv: ["Intervall"],
      th: ["ช่วงเวลา"],
      tr: ["Aralık"],
      vi: ["Khoảng thời gian"],
      zh: ["周期"],
      zh_TW: ["週期"]
    };
  },
  68988: function _(e) {
    e.exports = {
      ar: ["موافق"],
      ca_ES: ["Acceptar"],
      cs: "Ok",
      de: "Ok",
      el: "Ok",
      en: "Ok",
      es: ["Aceptar"],
      fa: "Ok",
      fr: ["D'accord"],
      he_IL: ["אוקיי"],
      hu_HU: ["Oké"],
      id_ID: "Ok",
      it: "Ok",
      ja: ["OK"],
      ko: ["확인"],
      ms_MY: "Ok",
      nl_NL: "Ok",
      pl: "Ok",
      pt: "Ok",
      ro: "Ok",
      ru: ["Ок"],
      sv: ["OK"],
      th: ["ตกลง"],
      tr: ["Tamam"],
      vi: "Ok",
      zh: ["确认"],
      zh_TW: ["確認"]
    };
  },
  58416: function _(e) {
    e.exports = {
      ar: ["نوع"],
      ca_ES: ["Tipus"],
      cs: ["Typ"],
      de: ["Typ"],
      el: ["Τύπος"],
      en: "Type",
      es: ["Tipo"],
      fa: ["نوع"],
      fr: "Type",
      he_IL: ["סוג"],
      hu_HU: ["Típus"],
      id_ID: ["Tipe"],
      it: ["Tipo"],
      ja: ["タイプ"],
      ko: ["타입"],
      ms_MY: ["Jenis"],
      nl_NL: "Type",
      pl: ["Typ"],
      pt: ["Tipo"],
      ro: "Type",
      ru: ["Тип"],
      sv: ["Typ"],
      th: ["ประเภท"],
      tr: ["Tip"],
      vi: ["Loại"],
      zh: ["类型"],
      zh_TW: ["種類"]
    };
  }
}]);