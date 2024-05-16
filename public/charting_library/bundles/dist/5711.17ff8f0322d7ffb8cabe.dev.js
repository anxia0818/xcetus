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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5711], {
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
  12228: function _(e) {
    e.exports = {
      itemRow: "itemRow-BadjY5sX",
      favoriteButton: "favoriteButton-BadjY5sX",
      active: "active-BadjY5sX",
      selected: "selected-BadjY5sX",
      mobile: "mobile-BadjY5sX",
      itemInfo: "itemInfo-BadjY5sX",
      title: "title-BadjY5sX",
      details: "details-BadjY5sX",
      itemInfoWithPadding: "itemInfoWithPadding-BadjY5sX",
      favorite: "favorite-BadjY5sX",
      removeButton: "removeButton-BadjY5sX"
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
  82434: function _(e) {
    e.exports = {
      scrollWrap: "scrollWrap-FaOvTD2r"
    };
  },
  77253: function _(e) {
    e.exports = {
      wrap: "wrap-vSb6C0Bj",
      "wrap--horizontal": "wrap--horizontal-vSb6C0Bj",
      bar: "bar-vSb6C0Bj",
      barInner: "barInner-vSb6C0Bj",
      "barInner--horizontal": "barInner--horizontal-vSb6C0Bj",
      "bar--horizontal": "bar--horizontal-vSb6C0Bj"
    };
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
  45719: function _(e) {
    e.exports = {
      separator: "separator-Pf4rIzEt"
    };
  },
  27306: function _(e) {
    e.exports = {
      button: "button-iLKiGOdQ",
      hovered: "hovered-iLKiGOdQ",
      disabled: "disabled-iLKiGOdQ",
      active: "active-iLKiGOdQ",
      hidden: "hidden-iLKiGOdQ"
    };
  },
  67842: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useResizeObserver: function useResizeObserver() {
        return a;
      }
    });
    var n = r(50959),
        o = r(59255),
        i = r(43010),
        s = r(39416);

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref = function (e) {
        return "function" == typeof e ? {
          callback: e
        } : e;
      }(e),
          r = _ref.callback,
          _ref$ref = _ref.ref,
          a = _ref$ref === void 0 ? null : _ref$ref,
          l = (0, n.useRef)(null),
          c = (0, n.useRef)(r);

      c.current = r;
      var u = (0, s.useFunctionalRefObject)(a),
          d = (0, n.useCallback)(function (e) {
        u(e), null !== l.current && (l.current.disconnect(), null !== e && l.current.observe(e));
      }, [u, l]);
      return (0, i.useIsomorphicLayoutEffect)(function () {
        return l.current = new o["default"](function (e, t) {
          c.current(e, t);
        }), u.current && d(u.current), function () {
          var e;
          null === (e = l.current) || void 0 === e || e.disconnect();
        };
      }, [u].concat(_toConsumableArray(t))), d;
    }
  },
  53017: function _(e, t, r) {
    "use strict";

    function n(e) {
      return function (t) {
        e.forEach(function (e) {
          "function" == typeof e ? e(t) : null != e && (e.current = t);
        });
      };
    }

    function o(e) {
      return n([e]);
    }

    r.d(t, {
      isomorphicRef: function isomorphicRef() {
        return o;
      },
      mergeRefs: function mergeRefs() {
        return n;
      }
    });
  },
  24437: function _(e, t, r) {
    "use strict";

    r.d(t, {
      DialogBreakpoints: function DialogBreakpoints() {
        return o;
      }
    });
    var n = r(88803);
    var o = {
      SmallHeight: n["small-height-breakpoint"],
      TabletSmall: n["tablet-small-breakpoint"],
      TabletNormal: n["tablet-normal-breakpoint"]
    };
  },
  35057: function _(e, t, r) {
    "use strict";

    r.d(t, {
      AdaptivePopupDialog: function AdaptivePopupDialog() {
        return B;
      }
    });
    var n = r(50959),
        o = r(50151);
    var i = r(97754),
        s = r.n(i),
        a = r(68335),
        l = r(38223),
        c = r(35749),
        u = r(63016),
        d = r(1109),
        h = r(24437),
        p = r(90692),
        v = r(95711);
    var m = r(52092),
        f = r(76422),
        g = r(9745);
    var b = n.createContext({
      setHideClose: function setHideClose() {}
    });
    var N = r(7720),
        C = r(69827);

    function w(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          r = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
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
          v = e.closeAriaLabel,
          m = e.closeButtonReference,
          _ref2 = (0, n.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          f = _ref3[0],
          w = _ref3[1];

      return n.createElement(b.Provider, {
        value: {
          setHideClose: w
        }
      }, n.createElement("div", {
        className: s()(C.container, h, (o || p) && C.unsetAlign)
      }, c, n.createElement("div", {
        "data-dragg-area": d,
        className: C.title
      }, n.createElement("div", {
        className: s()(r ? C.textWrap : C.ellipsis)
      }, t), o && n.createElement("div", {
        className: s()(C.ellipsis, C.subtitle)
      }, o)), u, i && !f && n.createElement("button", {
        className: C.close,
        onClick: a,
        onKeyDown: l,
        "data-name": "close",
        "aria-label": v,
        type: "button",
        ref: m
      }, n.createElement(g.Icon, {
        className: C.icon,
        icon: N,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var E = r(53017),
        _ = r(90186),
        P = r(55596);

    var k = {
      vertical: 20
    },
        S = {
      vertical: 0
    };

    var B =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(B, _n$PureComponent);

      function B() {
        var _this;

        _classCallCheck(this, B);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments)), _this._controller = null, _this._reference = null, _this._orientationMediaQuery = null, _this._renderChildren = function (e, t) {
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
                  _r = _document.activeElement,
                  _n2 = (0, o.ensureNotNull)(_this._reference);

              if (null !== _r) {
                if (e.preventDefault(), "true" === (t = _r).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void _this._handleClose();
                if ((0, c.isTextEditingField)(_r)) return void _n2.focus();
                if (_n2.contains(_r)) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();
              }
            }

            var t, r;
            (function (e) {
              if ("function" == typeof e) return e();
              return Boolean(e);
            })(_this.props.disableTabNavigationContainment) || (r = e, [9, a.Modifiers.Shift + 9].includes((0, a.hashFromEvent)(r)) && r.stopPropagation());
          }
        }, _this._requestResize = function () {
          null !== _this._controller && _this._controller.recalculateBounds();
        }, _this._centerAndFit = function () {
          null !== _this._controller && _this._controller.centerAndFit();
        }, _this._calculatePositionWithOffsets = function (e, t) {
          var r = (0, o.ensureDefined)(_this.props.fullScreenViewOffsets).value();
          return {
            top: r.top,
            left: (0, l.isRtl)() ? -r.right : r.left,
            width: t.clientWidth - r.left - r.right,
            height: t.clientHeight - r.top - r.bottom
          };
        };
        return _this;
      }

      _createClass(B, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || f.subscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t) : e.addListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || f.unsubscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t) : e.removeListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
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
          var t, r;
          return null !== (r = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) && void 0 !== r && r;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              e = _this$props.className,
              t = _this$props.wrapperClassName,
              r = _this$props.headerClassName,
              o = _this$props.isOpened,
              i = _this$props.title,
              a = _this$props.titleTextWrap,
              l = _this$props.dataName,
              c = _this$props.onClickOutside,
              m = _this$props.additionalElementPos,
              f = _this$props.additionalHeaderElement,
              g = _this$props.backdrop,
              _this$props$shouldFor = _this$props.shouldForceFocus,
              b = _this$props$shouldFor === void 0 ? !0 : _this$props$shouldFor,
              N = _this$props.shouldReturnFocus,
              C = _this$props.onForceFocus,
              B = _this$props.showSeparator,
              z = _this$props.subtitle,
              _this$props$draggable = _this$props.draggable,
              M = _this$props$draggable === void 0 ? !0 : _this$props$draggable,
              _this$props$fullScree = _this$props.fullScreen,
              D = _this$props$fullScree === void 0 ? !1 : _this$props$fullScree,
              _this$props$showClose = _this$props.showCloseIcon,
              L = _this$props$showClose === void 0 ? !0 : _this$props$showClose,
              _this$props$rounded = _this$props.rounded,
              x = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              O = _this$props.isAnimationEnabled,
              R = _this$props.growPoint,
              A = _this$props.dialogTooltip,
              T = _this$props.unsetHeaderAlign,
              y = _this$props.onDragStart,
              F = _this$props.dataDialogName,
              H = _this$props.closeAriaLabel,
              I = _this$props.containerAriaLabel,
              W = _this$props.reference,
              K = _this$props.containerTabIndex,
              j = _this$props.closeButtonReference,
              Y = _this$props.onCloseButtonKeyDown,
              X = _this$props.shadowed,
              Q = _this$props.fullScreenViewOffsets,
              V = "after" !== m ? f : void 0,
              Z = "after" === m ? f : void 0,
              G = "string" == typeof i ? i : F || "",
              U = (0, _.filterDataProps)(this.props),
              q = (0, E.mergeRefs)([this._handleReference, W]);
          return n.createElement(p.MatchMedia, {
            rule: h.DialogBreakpoints.SmallHeight
          }, function (m) {
            return n.createElement(p.MatchMedia, {
              rule: h.DialogBreakpoints.TabletSmall
            }, function (h) {
              return n.createElement(u.PopupDialog, _objectSpread({
                rounded: !(h || D) && x,
                className: s()(P.dialog, D && Q && P.bounded, e),
                isOpened: o,
                reference: q,
                onKeyDown: _this2._handleKeyDown,
                onClickOutside: c,
                onClickBackdrop: c,
                fullscreen: h || D,
                guard: m ? S : k,
                boundByScreen: h || D,
                shouldForceFocus: b,
                onForceFocus: C,
                shouldReturnFocus: N,
                backdrop: g,
                draggable: M,
                isAnimationEnabled: O,
                growPoint: R,
                name: _this2.props.dataName,
                dialogTooltip: A,
                onDragStart: y,
                containerAriaLabel: I,
                containerTabIndex: K,
                calculateDialogPosition: D && Q ? _this2._calculatePositionWithOffsets : void 0,
                shadowed: X
              }, U), n.createElement("div", {
                className: s()(P.wrapper, t),
                "data-name": l,
                "data-dialog-name": G
              }, void 0 !== i && n.createElement(w, {
                draggable: M && !(h || D),
                onClose: _this2._handleCloseBtnClick,
                renderAfter: Z,
                renderBefore: V,
                subtitle: z,
                title: i,
                titleTextWrap: a,
                showCloseIcon: L,
                className: r,
                unsetAlign: T,
                closeAriaLabel: H,
                closeButtonReference: j,
                onCloseButtonKeyDown: Y
              }), B && n.createElement(d.Separator, {
                className: P.separator
              }), n.createElement(v.PopupContext.Consumer, null, function (e) {
                return _this2._renderChildren(e, h || D);
              })));
            });
          });
        }
      }]);

      return B;
    }(n.PureComponent);
  },
  64530: function _(e, t, r) {
    "use strict";

    r.d(t, {
      DialogContentItem: function DialogContentItem() {
        return d;
      }
    });
    var n = r(50959),
        o = r(97754),
        i = r.n(o),
        s = r(49483),
        a = r(36189),
        l = r(96040);

    function c(e) {
      var t = e.url,
          r = _objectWithoutProperties(e, ["url"]);

      return t ? n.createElement("a", _objectSpread({}, r, {
        href: t
      })) : n.createElement("div", _objectSpread({}, r));
    }

    var u = r(12228);

    function d(e) {
      var t = e.title,
          r = e.subtitle,
          o = e.removeBtnLabel,
          d = e.onClick,
          p = e.onClickFavorite,
          v = e.onClickRemove,
          m = e.isActive,
          f = e.isSelected,
          g = e.isFavorite,
          _e$isMobile = e.isMobile,
          b = _e$isMobile === void 0 ? !1 : _e$isMobile,
          _e$showFavorite = e.showFavorite,
          N = _e$showFavorite === void 0 ? !0 : _e$showFavorite,
          C = _objectWithoutProperties(e, ["title", "subtitle", "removeBtnLabel", "onClick", "onClickFavorite", "onClickRemove", "isActive", "isSelected", "isFavorite", "isMobile", "showFavorite"]);

      return n.createElement(c, _objectSpread({}, C, {
        className: i()(u.itemRow, m && !f && u.active, b && u.mobile, f && u.selected),
        onClick: h.bind(null, d),
        "data-role": "list-item",
        "data-active": m
      }), N && p && n.createElement(a.FavoriteButton, {
        className: i()(u.favoriteButton, g && u.favorite, s.CheckMobile.any() && u.mobile),
        isActive: m && !f,
        isFilled: g,
        onClick: h.bind(null, p),
        "data-name": "list-item-favorite-button",
        "data-favorite": g
      }), n.createElement("div", {
        className: i()(u.itemInfo, !N && u.itemInfoWithPadding)
      }, n.createElement("div", {
        className: i()(u.title, m && !f && u.active, b && u.mobile),
        "data-name": "list-item-title"
      }, t), n.createElement("div", {
        className: i()(u.details, m && !f && u.active, b && u.mobile)
      }, r)), n.createElement(l.RemoveButton, {
        className: u.removeButton,
        isActive: m && !f,
        onClick: h.bind(null, v),
        "data-name": "list-item-remove-button",
        title: o
      }));
    }

    function h(e, t) {
      t.defaultPrevented || (t.preventDefault(), e(t));
    }
  },
  3085: function _(e, t, r) {
    "use strict";

    r.d(t, {
      OverlayScrollContainer: function OverlayScrollContainer() {
        return m;
      }
    });
    var n = r(50959),
        o = r(97754),
        i = r.n(o),
        s = r(38223),
        a = r(50151),
        l = r(37160);
    var c = r(77253),
        u = {
      0: {
        isHorizontal: !1,
        isNegative: !1,
        sizePropName: "height",
        minSizePropName: "minHeight",
        startPointPropName: "top",
        currentMousePointPropName: "clientY",
        progressBarTransform: "translateY"
      },
      1: {
        isHorizontal: !0,
        isNegative: !1,
        sizePropName: "width",
        minSizePropName: "minWidth",
        startPointPropName: "left",
        currentMousePointPropName: "clientX",
        progressBarTransform: "translateX"
      },
      2: {
        isHorizontal: !0,
        isNegative: !0,
        sizePropName: "width",
        minSizePropName: "minWidth",
        startPointPropName: "right",
        currentMousePointPropName: "clientX",
        progressBarTransform: "translateX"
      }
    },
        d = 40;

    function h(e) {
      var _style2;

      var t = e.size,
          r = e.scrollSize,
          o = e.clientSize,
          s = e.scrollProgress,
          h = e.onScrollProgressChange,
          p = e.scrollMode,
          _e$theme = e.theme,
          v = _e$theme === void 0 ? c : _e$theme,
          m = e.onDragStart,
          f = e.onDragEnd,
          _e$minBarSize = e.minBarSize,
          g = _e$minBarSize === void 0 ? d : _e$minBarSize,
          b = (0, n.useRef)(null),
          N = (0, n.useRef)(null),
          _ref4 = (0, n.useState)(!1),
          _ref5 = _slicedToArray(_ref4, 2),
          C = _ref5[0],
          w = _ref5[1],
          E = (0, n.useRef)(0),
          _u$p = u[p],
          _ = _u$p.isHorizontal,
          P = _u$p.isNegative,
          k = _u$p.sizePropName,
          S = _u$p.minSizePropName,
          B = _u$p.startPointPropName,
          z = _u$p.currentMousePointPropName,
          M = _u$p.progressBarTransform;

      (0, n.useEffect)(function () {
        var e = (0, a.ensureNotNull)(b.current).ownerDocument;
        return C ? (m && m(), e && (e.addEventListener("mousemove", F), e.addEventListener("mouseup", H))) : f && f(), function () {
          e && (e.removeEventListener("mousemove", F), e.removeEventListener("mouseup", H));
        };
      }, [C]);
      var D = t / r || 0,
          L = o * D || 0,
          x = Math.max(L, g),
          O = (t - x) / (t - L),
          R = r - t,
          A = P ? -R : 0,
          T = P ? 0 : R,
          y = W((0, l.clamp)(s, A, T)) || 0;
      return n.createElement("div", {
        ref: b,
        className: i()(v.wrap, _ && v["wrap--horizontal"]),
        style: _defineProperty({}, k, t),
        onMouseDown: function onMouseDown(e) {
          if (e.isDefaultPrevented()) return;
          e.preventDefault();
          var t = I(e.nativeEvent, (0, a.ensureNotNull)(b.current)),
              r = Math.sign(t),
              n = (0, a.ensureNotNull)(N.current).getBoundingClientRect();
          E.current = r * n[k] / 2;
          var o = Math.abs(t) - Math.abs(E.current);
          var i = W(R);
          o < 0 ? (o = 0, E.current = t) : o > i && (o = i, E.current = t - r * i);
          h(K(r * o)), w(!0);
        }
      }, n.createElement("div", {
        ref: N,
        className: i()(v.bar, _ && v["bar--horizontal"]),
        style: (_style2 = {}, _defineProperty(_style2, S, g), _defineProperty(_style2, k, x), _defineProperty(_style2, "transform", "".concat(M, "(").concat(y, "px)")), _style2),
        onMouseDown: function onMouseDown(e) {
          e.preventDefault(), E.current = I(e.nativeEvent, (0, a.ensureNotNull)(N.current)), w(!0);
        }
      }, n.createElement("div", {
        className: i()(v.barInner, _ && v["barInner--horizontal"])
      })));

      function F(e) {
        var t = I(e, (0, a.ensureNotNull)(b.current)) - E.current;
        h(K(t));
      }

      function H() {
        w(!1);
      }

      function I(e, t) {
        var r = t.getBoundingClientRect()[B];
        return e[z] - r;
      }

      function W(e) {
        return e * D * O;
      }

      function K(e) {
        return e / D / O;
      }
    }

    var p = r(70412),
        v = r(82434);

    function m(e) {
      var t = e.reference,
          r = e.className,
          _e$containerHeight = e.containerHeight,
          i = _e$containerHeight === void 0 ? 0 : _e$containerHeight,
          _e$containerWidth = e.containerWidth,
          a = _e$containerWidth === void 0 ? 0 : _e$containerWidth,
          _e$contentHeight = e.contentHeight,
          l = _e$contentHeight === void 0 ? 0 : _e$contentHeight,
          _e$contentWidth = e.contentWidth,
          c = _e$contentWidth === void 0 ? 0 : _e$contentWidth,
          _e$scrollPosTop = e.scrollPosTop,
          u = _e$scrollPosTop === void 0 ? 0 : _e$scrollPosTop,
          _e$scrollPosLeft = e.scrollPosLeft,
          d = _e$scrollPosLeft === void 0 ? 0 : _e$scrollPosLeft,
          m = e.onVerticalChange,
          f = e.onHorizontalChange,
          g = e.visible,
          _ref6 = (0, p.useHover)(),
          _ref7 = _slicedToArray(_ref6, 2),
          b = _ref7[0],
          N = _ref7[1],
          _ref8 = (0, n.useState)(!1),
          _ref9 = _slicedToArray(_ref8, 2),
          C = _ref9[0],
          w = _ref9[1],
          E = i < l,
          _ = a < c,
          P = E && _ ? 8 : 0;

      return n.createElement("div", _objectSpread({}, N, {
        ref: t,
        className: o(r, v.scrollWrap),
        style: {
          visibility: g || b || C ? "visible" : "hidden"
        }
      }), E && n.createElement(h, {
        size: i - P,
        scrollSize: l - P,
        clientSize: i - P,
        scrollProgress: u,
        onScrollProgressChange: function onScrollProgressChange(e) {
          m && m(e);
        },
        onDragStart: k,
        onDragEnd: S,
        scrollMode: 0
      }), _ && n.createElement(h, {
        size: a - P,
        scrollSize: c - P,
        clientSize: a - P,
        scrollProgress: d,
        onScrollProgressChange: function onScrollProgressChange(e) {
          f && f(e);
        },
        onDragStart: k,
        onDragEnd: S,
        scrollMode: (0, s.isRtl)() ? 2 : 1
      }));

      function k() {
        w(!0);
      }

      function S() {
        w(!1);
      }
    }
  },
  36189: function _(e, t, r) {
    "use strict";

    r.d(t, {
      FavoriteButton: function FavoriteButton() {
        return d;
      }
    });
    var n = r(44352),
        o = r(50959),
        i = r(97754),
        s = r(9745),
        a = r(39146),
        l = r(48010),
        c = r(14877);
    var u = {
      add: n.t(null, void 0, r(44629)),
      remove: n.t(null, void 0, r(72482))
    };

    function d(e) {
      var t = e.className,
          r = e.isFilled,
          n = e.isActive,
          d = e.onClick,
          h = _objectWithoutProperties(e, ["className", "isFilled", "isActive", "onClick"]);

      return o.createElement(s.Icon, _objectSpread({}, h, {
        className: i(c.favorite, "apply-common-tooltip", r && c.checked, n && c.active, t),
        icon: r ? a : l,
        onClick: d,
        title: r ? u.remove : u.add
      }));
    }
  },
  898: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useDimensions: function useDimensions() {
        return i;
      }
    });
    var n = r(50959),
        o = r(67842);

    function i() {
      var _ref10 = (0, n.useState)(null),
          _ref11 = _slicedToArray(_ref10, 2),
          e = _ref11[0],
          t = _ref11[1],
          r = (0, n.useCallback)(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 1),
            r = _ref13[0];

        var n = r.target.getBoundingClientRect();
        n.width === (null == e ? void 0 : e.width) && n.height === e.height || t(n);
      }, [e]);

      return [(0, o.useResizeObserver)(r), e];
    }
  },
  70412: function _(e, t, r) {
    "use strict";

    r.d(t, {
      hoverMouseEventFilter: function hoverMouseEventFilter() {
        return i;
      },
      useAccurateHover: function useAccurateHover() {
        return s;
      },
      useHover: function useHover() {
        return o;
      }
    });
    var n = r(50959);

    function o() {
      var _ref14 = (0, n.useState)(!1),
          _ref15 = _slicedToArray(_ref14, 2),
          e = _ref15[0],
          t = _ref15[1];

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

    function s(e) {
      var _ref16 = (0, n.useState)(!1),
          _ref17 = _slicedToArray(_ref16, 2),
          t = _ref17[0],
          r = _ref17[1];

      return (0, n.useEffect)(function () {
        var t = function t(_t) {
          if (null === e.current) return;
          var n = e.current.contains(_t.target);
          r(n);
        };

        return document.addEventListener("mouseover", t), function () {
          return document.removeEventListener("mouseover", t);
        };
      }, []), t;
    }
  },
  33127: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useOverlayScroll: function useOverlayScroll() {
        return l;
      }
    });
    var n = r(50959),
        o = r(50151),
        i = r(70412),
        s = r(49483);
    var a = {
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {}
    };

    function l(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s.CheckMobile.any();

      var r = (0, n.useRef)(null),
          l = e || (0, n.useRef)(null),
          _ref18 = (0, i.useHover)(),
          _ref19 = _slicedToArray(_ref18, 2),
          c = _ref19[0],
          u = _ref19[1],
          _ref20 = (0, n.useState)({
        reference: r,
        containerHeight: 0,
        containerWidth: 0,
        contentHeight: 0,
        contentWidth: 0,
        scrollPosTop: 0,
        scrollPosLeft: 0,
        onVerticalChange: function onVerticalChange(e) {
          h(function (t) {
            return _objectSpread({}, t, {
              scrollPosTop: e
            });
          }), (0, o.ensureNotNull)(l.current).scrollTop = e;
        },
        onHorizontalChange: function onHorizontalChange(e) {
          h(function (t) {
            return _objectSpread({}, t, {
              scrollPosLeft: e
            });
          }), (0, o.ensureNotNull)(l.current).scrollLeft = e;
        },
        visible: c
      }),
          _ref21 = _slicedToArray(_ref20, 2),
          d = _ref21[0],
          h = _ref21[1],
          p = (0, n.useCallback)(function () {
        if (!l.current) return;
        var _l$current = l.current,
            e = _l$current.clientHeight,
            t = _l$current.scrollHeight,
            n = _l$current.scrollTop,
            o = _l$current.clientWidth,
            i = _l$current.scrollWidth,
            s = _l$current.scrollLeft,
            a = r.current ? r.current.offsetTop : 0;
        h(function (r) {
          return _objectSpread({}, r, {
            containerHeight: e - a,
            contentHeight: t - a,
            scrollPosTop: n,
            containerWidth: o,
            contentWidth: i,
            scrollPosLeft: s
          });
        });
      }, []);

      function v() {
        h(function (e) {
          return _objectSpread({}, e, {
            scrollPosTop: (0, o.ensureNotNull)(l.current).scrollTop,
            scrollPosLeft: (0, o.ensureNotNull)(l.current).scrollLeft
          });
        });
      }

      return (0, n.useEffect)(function () {
        c && p(), h(function (e) {
          return _objectSpread({}, e, {
            visible: c
          });
        });
      }, [c]), (0, n.useEffect)(function () {
        var e = l.current;
        return e && e.addEventListener("scroll", v), function () {
          e && e.removeEventListener("scroll", v);
        };
      }, [l]), [d, t ? a : u, l, p];
    }
  },
  1109: function _(e, t, r) {
    "use strict";

    r.d(t, {
      Separator: function Separator() {
        return s;
      }
    });
    var n = r(50959),
        o = r(97754),
        i = r(45719);

    function s(e) {
      return n.createElement("div", {
        className: o(i.separator, e.className)
      });
    }
  },
  96040: function _(e, t, r) {
    "use strict";

    r.d(t, {
      RemoveButton: function RemoveButton() {
        return c;
      }
    });
    var n = r(44352),
        o = r(50959),
        i = r(97754),
        s = r(9745),
        a = r(33765),
        l = r(27306);

    function c(e) {
      var t = e.className,
          c = e.isActive,
          u = e.onClick,
          d = e.onMouseDown,
          h = e.title,
          p = e.hidden,
          _e$dataName = e["data-name"],
          v = _e$dataName === void 0 ? "remove-button" : _e$dataName,
          m = _objectWithoutProperties(e, ["className", "isActive", "onClick", "onMouseDown", "title", "hidden", "data-name"]);

      return o.createElement(s.Icon, _objectSpread({}, m, {
        "data-name": v,
        className: i(l.button, "apply-common-tooltip", c && l.active, p && l.hidden, t),
        icon: a,
        onClick: u,
        onMouseDown: d,
        title: h || n.t(null, void 0, r(34596))
      }));
    }
  },
  33765: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
  },
  7720: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
  },
  39146: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
  },
  48010: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
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