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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5516, 9685], {
  26574: function _(e) {
    e.exports = {
      switcher: "switcher-fwE97QDf",
      "thumb-wrapper": "thumb-wrapper-fwE97QDf",
      "size-small": "size-small-fwE97QDf",
      "size-medium": "size-medium-fwE97QDf",
      "size-large": "size-large-fwE97QDf",
      input: "input-fwE97QDf",
      "intent-default": "intent-default-fwE97QDf",
      "disable-active-state-styles": "disable-active-state-styles-fwE97QDf",
      "intent-select": "intent-select-fwE97QDf",
      track: "track-fwE97QDf",
      thumb: "thumb-fwE97QDf"
    };
  },
  88803: function _(e) {
    e.exports = {
      "tablet-normal-breakpoint": "screen and (max-width: 768px)",
      "small-height-breakpoint": "screen and (max-height: 360px)",
      "tablet-small-breakpoint": "screen and (max-width: 430px)"
    };
  },
  17723: function _(e) {
    e.exports = {
      footer: "footer-dwINHZFL"
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
  33963: function _(e) {
    e.exports = {
      item: "item-zwyEh4hn",
      label: "label-zwyEh4hn",
      labelRow: "labelRow-zwyEh4hn",
      toolbox: "toolbox-zwyEh4hn"
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
  17946: function _(e, t, a) {
    "use strict";

    a.d(t, {
      CustomBehaviourContext: function CustomBehaviourContext() {
        return n;
      }
    });
    var n = (0, a(50959).createContext)({
      enableActiveStateStyles: !0
    });
    n.displayName = "CustomBehaviourContext";
  },
  76974: function _(e, t, a) {
    "use strict";

    a.d(t, {
      useIsMounted: function useIsMounted() {
        return i;
      }
    });
    var n = a(50959);

    var i = function i() {
      var e = (0, n.useRef)(!1);
      return (0, n.useEffect)(function () {
        return e.current = !0, function () {
          e.current = !1;
        };
      }, []), e;
    };
  },
  24437: function _(e, t, a) {
    "use strict";

    a.d(t, {
      DialogBreakpoints: function DialogBreakpoints() {
        return i;
      }
    });
    var n = a(88803);
    var i = {
      SmallHeight: n["small-height-breakpoint"],
      TabletSmall: n["tablet-small-breakpoint"],
      TabletNormal: n["tablet-normal-breakpoint"]
    };
  },
  39362: function _(e, t, a) {
    "use strict";

    a.d(t, {
      SymbolSearchDialogFooter: function SymbolSearchDialogFooter() {
        return l;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(17723);

    function l(e) {
      var t = e.className,
          a = e.children;
      return n.createElement("div", {
        className: s()(o.footer, t)
      }, a);
    }
  },
  36189: function _(e, t, a) {
    "use strict";

    a.d(t, {
      FavoriteButton: function FavoriteButton() {
        return d;
      }
    });
    var n = a(44352),
        i = a(50959),
        s = a(97754),
        o = a(9745),
        l = a(39146),
        r = a(48010),
        h = a(14877);
    var c = {
      add: n.t(null, void 0, a(44629)),
      remove: n.t(null, void 0, a(72482))
    };

    function d(e) {
      var t = e.className,
          a = e.isFilled,
          n = e.isActive,
          d = e.onClick,
          u = _objectWithoutProperties(e, ["className", "isFilled", "isActive", "onClick"]);

      return i.createElement(o.Icon, _objectSpread({}, u, {
        className: s(h.favorite, "apply-common-tooltip", a && h.checked, n && h.active, t),
        icon: a ? l : r,
        onClick: d,
        title: a ? c.remove : c.add
      }));
    }
  },
  37968: function _(e, t, a) {
    "use strict";

    a.d(t, {
      useForceUpdate: function useForceUpdate() {
        return i;
      }
    });
    var n = a(50959);

    var i = function i() {
      var _ref = (0, n.useReducer)(function (e) {
        return e + 1;
      }, 0),
          _ref2 = _slicedToArray(_ref, 2),
          e = _ref2[1];

      return e;
    };
  },
  70412: function _(e, t, a) {
    "use strict";

    a.d(t, {
      hoverMouseEventFilter: function hoverMouseEventFilter() {
        return s;
      },
      useAccurateHover: function useAccurateHover() {
        return o;
      },
      useHover: function useHover() {
        return i;
      }
    });
    var n = a(50959);

    function i() {
      var _ref3 = (0, n.useState)(!1),
          _ref4 = _slicedToArray(_ref3, 2),
          e = _ref4[0],
          t = _ref4[1];

      return [e, {
        onMouseOver: function onMouseOver(e) {
          s(e) && t(!0);
        },
        onMouseOut: function onMouseOut(e) {
          s(e) && t(!1);
        }
      }];
    }

    function s(e) {
      return !e.currentTarget.contains(e.relatedTarget);
    }

    function o(e) {
      var _ref5 = (0, n.useState)(!1),
          _ref6 = _slicedToArray(_ref5, 2),
          t = _ref6[0],
          a = _ref6[1];

      return (0, n.useEffect)(function () {
        var t = function t(_t2) {
          if (null === e.current) return;
          var n = e.current.contains(_t2.target);
          a(n);
        };

        return document.addEventListener("mouseover", t), function () {
          return document.removeEventListener("mouseover", t);
        };
      }, []), t;
    }
  },
  81332: function _(e, t, a) {
    "use strict";

    a.d(t, {
      multilineLabelWithIconAndToolboxTheme: function multilineLabelWithIconAndToolboxTheme() {
        return o;
      }
    });
    var n = a(40173),
        i = a(71986),
        s = a(33963);
    var o = (0, n.mergeThemes)(i, s);
  },
  96040: function _(e, t, a) {
    "use strict";

    a.d(t, {
      RemoveButton: function RemoveButton() {
        return h;
      }
    });
    var n = a(44352),
        i = a(50959),
        s = a(97754),
        o = a(9745),
        l = a(33765),
        r = a(27306);

    function h(e) {
      var t = e.className,
          h = e.isActive,
          c = e.onClick,
          d = e.onMouseDown,
          u = e.title,
          v = e.hidden,
          _e$dataName = e["data-name"],
          m = _e$dataName === void 0 ? "remove-button" : _e$dataName,
          p = _objectWithoutProperties(e, ["className", "isActive", "onClick", "onMouseDown", "title", "hidden", "data-name"]);

      return i.createElement(o.Icon, _objectSpread({}, p, {
        "data-name": m,
        className: s(r.button, "apply-common-tooltip", h && r.active, v && r.hidden, t),
        icon: l,
        onClick: c,
        onMouseDown: d,
        title: u || n.t(null, void 0, a(34596))
      }));
    }
  },
  47102: function _(e) {
    e.exports = {
      accessible: "accessible-NQERJsv9",
      active: "active-NQERJsv9"
    };
  },
  12989: function _(e) {
    e.exports = {
      summary: "summary-ynHBVe1n",
      hovered: "hovered-ynHBVe1n",
      caret: "caret-ynHBVe1n"
    };
  },
  90785: function _(e) {
    e.exports = {
      accessible: "accessible-raQdxQp0"
    };
  },
  89089: function _(e) {
    e.exports = {
      button: "button-LkmyTVRc",
      active: "active-LkmyTVRc"
    };
  },
  20461: function _(e) {
    e.exports = {
      wrapper: "wrapper-psOC5oyI",
      labelRow: "labelRow-psOC5oyI",
      label: "label-psOC5oyI",
      labelHint: "labelHint-psOC5oyI",
      labelOn: "labelOn-psOC5oyI"
    };
  },
  40670: function _(e) {
    e.exports = {
      wrapper: "wrapper-bl9AR3Gv",
      hovered: "hovered-bl9AR3Gv",
      withIcon: "withIcon-bl9AR3Gv",
      labelRow: "labelRow-bl9AR3Gv",
      label: "label-bl9AR3Gv",
      switchWrap: "switchWrap-bl9AR3Gv",
      icon: "icon-bl9AR3Gv",
      labelHint: "labelHint-bl9AR3Gv",
      labelOn: "labelOn-bl9AR3Gv"
    };
  },
  90826: function _(e) {
    e.exports = {
      button: "button-Y1TCZogJ",
      active: "active-Y1TCZogJ"
    };
  },
  38456: function _(e) {
    e.exports = {
      button: "button-ptpAHg8E",
      withText: "withText-ptpAHg8E",
      withoutText: "withoutText-ptpAHg8E"
    };
  },
  67972: function _(e) {
    e.exports = {
      form: "form-MgR0zejo",
      input: "input-MgR0zejo",
      menu: "menu-MgR0zejo",
      add: "add-MgR0zejo",
      hovered: "hovered-MgR0zejo",
      wrap: "wrap-MgR0zejo",
      accessible: "accessible-MgR0zejo",
      menuLabel: "menuLabel-MgR0zejo",
      hover: "hover-MgR0zejo"
    };
  },
  39357: function _(e) {
    e.exports = {
      spinnerWrap: "spinnerWrap-cZT0OZe0"
    };
  },
  52045: function _(e) {
    e.exports = {
      button: "button-neROVfUe",
      first: "first-neROVfUe",
      last: "last-neROVfUe"
    };
  },
  97041: function _(e) {
    e.exports = {
      wrap: "wrap-n5bmFxyX"
    };
  },
  64618: function _(e) {
    e.exports = {
      hidden: "hidden-5MVS18J8"
    };
  },
  18369: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      item: "item-o5a0MQMm",
      withIcon: "withIcon-o5a0MQMm",
      shortcut: "shortcut-o5a0MQMm",
      loading: "loading-o5a0MQMm",
      icon: "icon-o5a0MQMm"
    };
  },
  4549: function _(e) {
    e.exports = {
      button: "button-b3Cgff6l",
      group: "group-b3Cgff6l",
      menu: "menu-b3Cgff6l"
    };
  },
  27363: function _(e) {
    e.exports = {
      customTradingViewStyleButton: "customTradingViewStyleButton-zigjK1n2",
      withoutIcon: "withoutIcon-zigjK1n2"
    };
  },
  75352: function _(e) {
    e.exports = {
      dropdown: "dropdown-l0nf43ai",
      label: "label-l0nf43ai",
      smallWidthTitle: "smallWidthTitle-l0nf43ai",
      smallWidthMenuItem: "smallWidthMenuItem-l0nf43ai",
      smallWidthWrapper: "smallWidthWrapper-l0nf43ai"
    };
  },
  20371: function _(e) {
    e.exports = {
      value: "value-gwXludjS",
      selected: "selected-gwXludjS"
    };
  },
  867: function _(e) {
    e.exports = {
      smallWidthMenuItem: "smallWidthMenuItem-RmqZNwwp",
      menuItem: "menuItem-RmqZNwwp",
      remove: "remove-RmqZNwwp"
    };
  },
  80022: function _(e) {
    e.exports = {
      button: "button-S_1OCXUK",
      first: "first-S_1OCXUK",
      last: "last-S_1OCXUK",
      menu: "menu-S_1OCXUK",
      dropdown: "dropdown-S_1OCXUK",
      menuContent: "menuContent-S_1OCXUK",
      section: "section-S_1OCXUK",
      smallTabletSectionTitle: "smallTabletSectionTitle-S_1OCXUK",
      addCustomInterval: "addCustomInterval-S_1OCXUK",
      hovered: "hovered-S_1OCXUK",
      group: "group-S_1OCXUK"
    };
  },
  23902: function _(e) {
    e.exports = {
      button: "button-gn9HMufu"
    };
  },
  92998: function _(e) {
    e.exports = {
      button: "button-ZuDkGGhF",
      isDisabled: "isDisabled-ZuDkGGhF"
    };
  },
  70152: function _(e) {
    e.exports = {
      saveString: "saveString-XVd1Kfjg",
      hidden: "hidden-XVd1Kfjg",
      loader: "loader-XVd1Kfjg"
    };
  },
  63672: function _(e) {
    e.exports = {
      opened: "opened-yyMUOAN9",
      hover: "hover-yyMUOAN9",
      autoSaveWrapper: "autoSaveWrapper-yyMUOAN9",
      sharingWrapper: "sharingWrapper-yyMUOAN9",
      button: "button-yyMUOAN9",
      buttonSmallPadding: "buttonSmallPadding-yyMUOAN9",
      hintPlaceHolder: "hintPlaceHolder-yyMUOAN9",
      smallHintPlaceHolder: "smallHintPlaceHolder-yyMUOAN9",
      popupItemRowTabletSmall: "popupItemRowTabletSmall-yyMUOAN9",
      shortcut: "shortcut-yyMUOAN9",
      toolTitle: "toolTitle-yyMUOAN9",
      toolTitleMobile: "toolTitleMobile-yyMUOAN9",
      layoutItem: "layoutItem-yyMUOAN9",
      layoutMeta: "layoutMeta-yyMUOAN9",
      labelRow: "labelRow-yyMUOAN9",
      layoutTitle: "layoutTitle-yyMUOAN9",
      layoutItemWrap: "layoutItemWrap-yyMUOAN9",
      layoutTitleMobile: "layoutTitleMobile-yyMUOAN9",
      active: "active-yyMUOAN9",
      textWrap: "textWrap-yyMUOAN9",
      text: "text-yyMUOAN9",
      withIcon: "withIcon-yyMUOAN9",
      sharingLabelWrap: "sharingLabelWrap-yyMUOAN9",
      infoIcon: "infoIcon-yyMUOAN9",
      copyLink: "copyLink-yyMUOAN9",
      copyLinkMobile: "copyLinkMobile-yyMUOAN9"
    };
  },
  25882: function _(e) {
    e.exports = {
      button: "button-cq__ntSC",
      smallLeftPadding: "smallLeftPadding-cq__ntSC",
      text: "text-cq__ntSC",
      uppercase: "uppercase-cq__ntSC"
    };
  },
  92710: function _(e) {
    e.exports = {
      description: "description-jgoQcEnP"
    };
  },
  5145: function _(e) {
    e.exports = {
      item: "item-j7oVl2yI",
      accessible: "accessible-j7oVl2yI",
      round: "round-j7oVl2yI"
    };
  },
  85013: function _(e) {
    e.exports = {
      wrap: "wrap-HXSqojvq",
      titleWrap: "titleWrap-HXSqojvq",
      indicators: "indicators-HXSqojvq",
      title: "title-HXSqojvq",
      icon: "icon-HXSqojvq",
      text: "text-HXSqojvq",
      titleTabletSmall: "titleTabletSmall-HXSqojvq",
      labelRow: "labelRow-HXSqojvq",
      label: "label-HXSqojvq"
    };
  },
  48261: function _(e) {
    e.exports = {
      labelRow: "labelRow-JeQoCpvi",
      toolbox: "toolbox-JeQoCpvi",
      description: "description-JeQoCpvi",
      descriptionTabletSmall: "descriptionTabletSmall-JeQoCpvi",
      item: "item-JeQoCpvi",
      titleItem: "titleItem-JeQoCpvi",
      remove: "remove-JeQoCpvi",
      titleItemTabletSmall: "titleItemTabletSmall-JeQoCpvi",
      itemTabletSmall: "itemTabletSmall-JeQoCpvi",
      itemLabelTabletSmall: "itemLabelTabletSmall-JeQoCpvi",
      wrap: "wrap-JeQoCpvi",
      hovered: "hovered-JeQoCpvi"
    };
  },
  36001: function _(e) {
    e.exports = {
      menu: "menu-hcofKPms",
      menuSmallTablet: "menuSmallTablet-hcofKPms",
      menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-hcofKPms",
      menuItemHeader: "menuItemHeader-hcofKPms"
    };
  },
  70760: function _(e) {
    e.exports = {
      wrap: "wrap-jiC5bgmi",
      full: "full-jiC5bgmi",
      first: "first-jiC5bgmi",
      last: "last-jiC5bgmi",
      medium: "medium-jiC5bgmi",
      buttonWithFavorites: "buttonWithFavorites-jiC5bgmi"
    };
  },
  57778: function _(e) {
    e.exports = {
      icon: "icon-uMfL97K2"
    };
  },
  81351: function _(e, t, a) {
    "use strict";

    a.d(t, {
      AccessibleMenuItem: function AccessibleMenuItem() {
        return d;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(3343),
        l = a(50238),
        r = a(16838),
        h = a(16396),
        c = a(47102);

    function d(e) {
      var t = e.className,
          a = _objectWithoutProperties(e, ["className"]),
          _ref7 = (0, l.useRovingTabindexElement)(null),
          _ref8 = _slicedToArray(_ref7, 2),
          i = _ref8[0],
          d = _ref8[1];

      return n.createElement(h.PopupMenuItem, _objectSpread({}, a, {
        className: s()(r.PLATFORM_ACCESSIBILITY_ENABLED && c.accessible, e.isActive && c.active, t),
        reference: i,
        tabIndex: d,
        onKeyDown: function onKeyDown(e) {
          if (!r.PLATFORM_ACCESSIBILITY_ENABLED || e.target !== e.currentTarget) return;
          var t = (0, o.hashFromEvent)(e);
          13 !== t && 32 !== t || (e.preventDefault(), i.current instanceof HTMLElement && i.current.click());
        },
        "data-role": r.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        "aria-disabled": r.PLATFORM_ACCESSIBILITY_ENABLED && e.isDisabled || void 0
      }));
    }
  },
  76197: function _(e, t, a) {
    "use strict";

    a.d(t, {
      CollapsibleSection: function CollapsibleSection() {
        return r;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(10381),
        l = a(12989);
    var r = (0, n.forwardRef)(function (e, t) {
      var a = e.open,
          i = e.summary,
          r = e.children,
          h = e.onStateChange,
          c = e.tabIndex,
          d = e.className,
          u = _objectWithoutProperties(e, ["open", "summary", "children", "onStateChange", "tabIndex", "className"]);

      return n.createElement(n.Fragment, null, n.createElement("div", _objectSpread({}, u, {
        className: s()(d, l.summary),
        onClick: function onClick() {
          h && h(!a);
        },
        "data-open": a,
        ref: t,
        tabIndex: c
      }), i, n.createElement(o.ToolWidgetCaret, {
        className: l.caret,
        dropped: Boolean(a)
      })), a && r);
    });
  },
  12165: function _(e, t, a) {
    "use strict";

    a.d(t, {
      MenuFavoriteButton: function MenuFavoriteButton() {
        return c;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(50238),
        l = a(16838),
        r = a(36189),
        h = a(89089);

    function c(e) {
      var t = e.tooltip,
          a = e.onClick,
          i = _objectWithoutProperties(e, ["tooltip", "onClick"]),
          _ref9 = (0, o.useRovingTabindexElement)(null),
          _ref10 = _slicedToArray(_ref9, 2),
          c = _ref10[0],
          d = _ref10[1];

      return l.PLATFORM_ACCESSIBILITY_ENABLED ? n.createElement("button", {
        ref: c,
        tabIndex: d,
        onClick: a,
        className: s()(h.button, i.isActive && h.active),
        type: "button"
      }, n.createElement(r.FavoriteButton, _objectSpread({
        "aria-label": t
      }, i, {
        "data-tooltip": t
      }))) : n.createElement(r.FavoriteButton, _objectSpread({}, e, {
        "data-tooltip": t
      }));
    }
  },
  69297: function _(e, t, a) {
    "use strict";

    a.d(t, {
      DEFAULT_MENU_ITEM_SWITCHER_THEME: function DEFAULT_MENU_ITEM_SWITCHER_THEME() {
        return m;
      },
      MenuItemSwitcher: function MenuItemSwitcher() {
        return p;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(17946),
        l = a(26574),
        r = a.n(l);

    function h(e) {
      var t = (0, n.useContext)(o.CustomBehaviourContext),
          a = e.className,
          _e$intent = e.intent,
          s = _e$intent === void 0 ? "default" : _e$intent,
          _e$size = e.size,
          l = _e$size === void 0 ? "small" : _e$size,
          _e$enableActiveStateS = e.enableActiveStateStyles,
          h = _e$enableActiveStateS === void 0 ? t.enableActiveStateStyles : _e$enableActiveStateS;
      return i(a, r().switcher, r()["size-".concat(l)], r()["intent-".concat(s)], !h && r()["disable-active-state-styles"]);
    }

    function c(e) {
      var t;

      var a = e.reference,
          i = e.size,
          s = e.intent,
          o = e.role,
          l = e["aria-checked"],
          c = e.checked,
          d = e.defaultChecked,
          u = e.onKeyDown,
          v = _objectWithoutProperties(e, ["reference", "size", "intent", "role", "aria-checked", "checked", "defaultChecked", "onKeyDown"]),
          m = (0, n.useCallback)(function (e) {
        13 === e.keyCode && e.target.click(), u && u(e);
      }, [u]);

      return n.createElement("span", {
        className: h(e)
      }, n.createElement("input", _objectSpread({}, v, {
        type: "checkbox",
        className: r().input,
        ref: a,
        role: null != o ? o : "switch",
        "aria-checked": null !== (t = null != l ? l : c) && void 0 !== t ? t : d,
        checked: c,
        defaultChecked: d,
        onKeyDown: m
      })), n.createElement("span", {
        className: r()["thumb-wrapper"]
      }, n.createElement("span", {
        className: r().track
      }), n.createElement("span", {
        className: r().thumb
      })));
    }

    var d = a(9745),
        u = a(90186),
        v = a(40670);
    var m = v;

    function p(e) {
      var t = e.className,
          a = e.checked,
          i = e.id,
          o = e.label,
          l = e.labelDescription,
          r = e.value,
          h = e.preventLabelHighlight,
          m = e.reference,
          p = e.switchReference,
          _e$theme = e.theme,
          g = _e$theme === void 0 ? v : _e$theme,
          b = e.disabled,
          C = e.icon,
          S = s()(g.label, a && !h && g.labelOn),
          _ = s()(t, g.wrapper, a && g.wrapperWithOnLabel, l && g.wrapperWithDescription);

      return n.createElement("label", {
        className: s()(_, C && g.withIcon),
        htmlFor: i,
        ref: m
      }, void 0 !== C && n.createElement(d.Icon, {
        className: g.icon,
        icon: C
      }), n.createElement("div", {
        className: g.labelRow
      }, n.createElement("div", {
        className: S
      }, o), l && n.createElement("div", {
        className: g.labelHint
      }, l)), n.createElement("div", {
        className: v.switchWrap
      }, n.createElement(c, _objectSpread({
        disabled: b,
        className: g["switch"],
        reference: p,
        checked: a,
        onChange: function onChange(t) {
          var a = t.target.checked;
          void 0 !== e.onChange && e.onChange(a);
        },
        value: r,
        tabIndex: -1,
        id: i,
        role: e.switchRole
      }, (0, u.filterDataProps)(e)))));
    }
  },
  74628: function _(e, t, a) {
    "use strict";

    a.d(t, {
      MenuRemoveButton: function MenuRemoveButton() {
        return c;
      }
    });
    var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(50238),
        l = a(16838),
        r = a(96040),
        h = a(90826);

    function c(e) {
      var t = e.tooltip,
          a = e.onClick,
          i = _objectWithoutProperties(e, ["tooltip", "onClick"]),
          _ref11 = (0, o.useRovingTabindexElement)(null),
          _ref12 = _slicedToArray(_ref11, 2),
          c = _ref12[0],
          d = _ref12[1];

      return l.PLATFORM_ACCESSIBILITY_ENABLED ? n.createElement("button", {
        ref: c,
        tabIndex: d,
        onClick: a,
        className: s()(h.button, i.isActive && h.active),
        type: "button"
      }, n.createElement(r.RemoveButton, _objectSpread({
        "aria-label": t
      }, i, {
        "data-tooltip": t
      }))) : n.createElement(r.RemoveButton, _objectSpread({}, e, {
        "data-tooltip": t
      }));
    }
  },
  65817: function _(e, t, a) {
    "use strict";

    a.d(t, {
      INTERVALS: function INTERVALS() {
        return i;
      }
    });
    var n = a(44352);
    var i = [{
      name: "",
      label: n.t(null, {
        context: "interval"
      }, a(37830))
    }, {
      name: "H",
      label: n.t(null, {
        context: "interval"
      }, a(5285))
    }, {
      name: "D",
      label: n.t(null, {
        context: "interval"
      }, a(6174))
    }, {
      name: "W",
      label: n.t(null, {
        context: "interval"
      }, a(25042))
    }, {
      name: "M",
      label: n.t(null, {
        context: "interval"
      }, a(79410))
    }];
  },
  54491: function _(e, t, a) {
    "use strict";

    var _Le;

    a.r(t), a.d(t, {
      getRestrictedToolSet: function getRestrictedToolSet() {
        return $a;
      }
    });
    var n = a(14483),
        i = a(50959),
        s = a(19036),
        o = a(44352),
        l = a(82992),
        r = a(88732),
        h = a(45876),
        c = a(9745),
        d = a(50298),
        u = a(97754),
        v = a.n(u),
        m = a(97041);
    var p = i.forwardRef(function (e, t) {
      var a = e.children,
          n = e.className,
          s = _objectWithoutProperties(e, ["children", "className"]);

      return i.createElement("div", _objectSpread({
        className: u(n, m.wrap),
        ref: t
      }, s), a);
    });
    var g = a(88066),
        b = a(52045);

    var C =
    /*#__PURE__*/
    function (_i$PureComponent) {
      _inherits(C, _i$PureComponent);

      function C() {
        var _this;

        _classCallCheck(this, C);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments)), _this._handleClick = function () {
          var _this$props = _this.props,
              e = _this$props.onClick,
              t = _this$props.onClickArg;
          e && e(t);
        };
        return _this;
      }

      _createClass(C, [{
        key: "render",
        value: function render() {
          var _u;

          var _this$props2 = this.props,
              e = _this$props2.className,
              t = _this$props2.icon,
              a = _this$props2.hint,
              n = _this$props2.text,
              s = _this$props2.isDisabled,
              o = _this$props2.isActive,
              l = _this$props2.isFirst,
              r = _this$props2.isLast,
              h = _this$props2.onClick,
              c = _this$props2.onClickArg,
              d = _objectWithoutProperties(_this$props2, ["className", "icon", "hint", "text", "isDisabled", "isActive", "isFirst", "isLast", "onClick", "onClickArg"]);

          return i.createElement(g.ToolbarButton, _objectSpread({}, d, {
            icon: t,
            text: n,
            tooltip: a,
            isDisabled: s,
            isActive: o,
            isGrouped: !0,
            onClick: this._handleClick,
            className: u(e, b.button, (_u = {}, _defineProperty(_u, b.first, l), _defineProperty(_u, b.last, r), _u))
          }));
        }
      }]);

      return C;
    }(i.PureComponent);

    var S = a(51613),
        _ = a(90692),
        f = a(24437),
        w = a(81332),
        y = a(5962),
        E = a(16410),
        M = a(42960),
        T = a(47201),
        k = a(3343),
        I = a(16838);

    function x(e) {
      var t = e.orientation,
          a = e.onKeyDown,
          n = _objectWithoutProperties(e, ["orientation", "onKeyDown"]),
          s = I.PLATFORM_ACCESSIBILITY_ENABLED ? {
        role: "radiogroup",
        "aria-orientation": t
      } : {};

      return i.createElement("div", _objectSpread({}, n, {}, s, {
        onKeyDown: (0, T.createSafeMulticastEventHandler)(function (e) {
          if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return;
          if (e.defaultPrevented) return;
          if (!(document.activeElement instanceof HTMLElement)) return;
          var a = (0, k.hashFromEvent)(e);
          if ("vertical" !== t && 38 !== a && 40 !== a) return;
          if ("vertical" === t && 37 !== a && 39 !== a) return;
          var n = (i = e.currentTarget, Array.from(i.querySelectorAll('[role="radio"]:not([disabled], [aria-disabled])')).filter((0, I.createScopedVisibleElementFilter)(i))).sort(I.navigationOrderComparator);
          var i;
          if (0 === n.length) return;
          var s = n.indexOf(document.activeElement);
          if (-1 === s) return;
          e.preventDefault();

          var o = function o() {
            var e = (s + n.length - 1) % n.length;
            n[s].dispatchEvent(new CustomEvent("roving-tabindex:secondary-element")), n[e].dispatchEvent(new CustomEvent("roving-tabindex:main-element")), n[e].focus();
          },
              l = function l() {
            var e = (s + n.length + 1) % n.length;
            n[s].dispatchEvent(new CustomEvent("roving-tabindex:secondary-element")), n[e].dispatchEvent(new CustomEvent("roving-tabindex:main-element")), n[e].focus();
          };

          switch (a) {
            case 38:
              "vertical" !== t && o();
              break;

            case 40:
              "vertical" !== t && l();
              break;

            case 37:
              "vertical" === t && o();
              break;

            case 39:
              "vertical" === t && l();
          }
        }, a)
      }));
    }

    var A = a(81351),
        R = a(12165),
        N = a(4549);
    var F = {
      barsStyle: o.t(null, void 0, a(84232))
    },
        O = (0, y.registryContextType)();

    function H(e) {
      var t;
      return !(null === (t = l.linking.supportedChartStyles.value()) || void 0 === t ? void 0 : t.includes(e));
    }

    var L =
    /*#__PURE__*/
    function (_i$PureComponent2) {
      _inherits(L, _i$PureComponent2);

      function L(e, t) {
        var _this2;

        _classCallCheck(this, L);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, e, t)), _this2._handleChangeStyle = function (e) {
          var _this2$state = _this2.state,
              t = _this2$state.favorites,
              a = _this2$state.lastSelectedNotFavorite,
              n = _this2$state.activeStyle;

          _this2.setState({
            activeStyle: e,
            lastSelectedNotFavorite: t.includes(n) ? a : n
          });
        }, _this2._handleSelectStyle = function (e) {
          var t = _this2.context.chartWidgetCollection;
          e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e);
        }, _this2._handleClickFavorite = function (e) {
          _this2._isStyleFavorited(e) ? _this2._handleRemoveFavorite(e) : _this2._handleAddFavorite(e);
        }, _this2._boundForceUpdate = function () {
          _this2.forceUpdate();
        }, _this2._handleQuickClick = function (e) {
          _this2._handleSelectStyle(e), _this2._trackClick();
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired,
          favoriteChartStylesService: s.any.isRequired
        });
        var a = t.chartWidgetCollection,
            n = t.favoriteChartStylesService,
            i = a.activeChartStyle.value(),
            o = n.get(),
            l = (0, E.japaneseChartStyles)();
        _this2.state = {
          activeStyle: i,
          favorites: o,
          styles: (0, E.commonChartStyles)(),
          japaneseStyles: l
        };
        return _this2;
      }

      _createClass(L, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$context = this.context,
              e = _this$context.chartWidgetCollection,
              t = _this$context.favoriteChartStylesService;
          e.activeChartStyle.subscribe(this._handleChangeStyle), t.getOnChange().subscribe(this, this._handleChangeSettings), l.linking.supportedChartStyles.subscribe(this._boundForceUpdate);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$context2 = this.context,
              e = _this$context2.chartWidgetCollection,
              t = _this$context2.favoriteChartStylesService;
          e.activeChartStyle.unsubscribe(this._handleChangeStyle), t.getOnChange().unsubscribe(this, this._handleChangeSettings), l.linking.supportedChartStyles.unsubscribe(this._boundForceUpdate);
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          var _this$props3 = this.props,
              e = _this$props3.isShownQuicks,
              _this$props3$displayM = _this$props3.displayMode,
              t = _this$props3$displayM === void 0 ? "full" : _this$props3$displayM,
              a = _this$props3.id,
              _this$state = this.state,
              n = _this$state.activeStyle,
              s = _this$state.favorites,
              o = _this$state.styles,
              l = _this$state.japaneseStyles,
              u = _this$state.lastSelectedNotFavorite,
              v = "small" !== t && e && 0 !== s.length,
              m = _toConsumableArray(s);

          m.includes(n) ? void 0 !== u && m.push(u) : m.push(n);
          var g = v && m.length > 1;
          return i.createElement(_.MatchMedia, {
            rule: f.DialogBreakpoints.TabletSmall
          }, function (e) {
            var t = o.map(function (t) {
              return _this3._renderPopupMenuItem(t, t === n, e);
            }),
                s = l.map(function (t) {
              return _this3._renderPopupMenuItem(t, t === n, e);
            });
            return i.createElement(p, {
              id: a
            }, g && i.createElement(x, {
              orientation: "horizontal",
              className: N.group
            }, m.map(function (e, t) {
              return i.createElement(C, {
                role: "radio",
                className: N.button,
                icon: h.SERIES_ICONS[e],
                "aria-checked": v && n === e,
                isActive: v && n === e,
                isDisabled: H(e),
                key: t,
                hint: (0, M.getTranslatedChartStyleName)(e),
                isFirst: 0 === t,
                isLast: t === m.length - 1,
                onClick: v ? _this3._handleQuickClick : void 0,
                onClickArg: e,
                "data-value": r.STYLE_SHORT_NAMES[e]
              });
            })), i.createElement(d.ToolbarMenuButton, {
              arrow: Boolean(g),
              content: g ? void 0 : i.createElement(p, null, i.createElement(c.Icon, {
                icon: h.SERIES_ICONS[n]
              })),
              tooltip: g ? F.barsStyle : (0, M.getTranslatedChartStyleName)(n),
              className: N.menu,
              isDrawer: e,
              onClick: _this3._trackClick
            }, t, !!s.length && i.createElement(S.PopupMenuSeparator, null), s));
          });
        }
      }, {
        key: "_renderPopupMenuItem",
        value: function _renderPopupMenuItem(e, t, a) {
          var _this4 = this;

          var n = this.props.isFavoritingAllowed,
              s = this._isStyleFavorited(e);

          return i.createElement(A.AccessibleMenuItem, {
            key: e,
            theme: a ? w.multilineLabelWithIconAndToolboxTheme : void 0,
            icon: h.SERIES_ICONS[e],
            isActive: t,
            isDisabled: H(e),
            label: (0, M.getTranslatedChartStyleName)(e) || "",
            onClick: this._handleSelectStyle,
            onClickArg: e,
            showToolboxOnHover: !s,
            showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
            toolbox: n && i.createElement(R.MenuFavoriteButton, {
              isActive: t,
              isFilled: s,
              onClick: function onClick() {
                return _this4._handleClickFavorite(e);
              }
            }),
            "data-value": r.STYLE_SHORT_NAMES[e]
          });
        }
      }, {
        key: "_handleChangeSettings",
        value: function _handleChangeSettings(e) {
          this.setState({
            lastSelectedNotFavorite: void 0,
            favorites: e
          });
        }
      }, {
        key: "_isStyleFavorited",
        value: function _isStyleFavorited(e) {
          return -1 !== this.state.favorites.indexOf(e);
        }
      }, {
        key: "_handleAddFavorite",
        value: function _handleAddFavorite(e) {
          var t = this.state.favorites,
              a = this.context.favoriteChartStylesService;
          a.set([].concat(_toConsumableArray(t), [e]));
        }
      }, {
        key: "_handleRemoveFavorite",
        value: function _handleRemoveFavorite(e) {
          var t = this.state.favorites,
              a = this.context.favoriteChartStylesService;
          a.set(t.filter(function (t) {
            return t !== e;
          }));
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }]);

      return L;
    }(i.PureComponent);

    L.contextType = O;
    var D = a(50238),
        P = a(31409),
        B = a(38456);
    var U = ["medium", "small"],
        W = (0, i.forwardRef)(function (e, t) {
      var a = e.text,
          n = e.className,
          s = e.displayMode,
          _e$collapseWhen = e.collapseWhen,
          o = _e$collapseWhen === void 0 ? U : _e$collapseWhen,
          l = _objectWithoutProperties(e, ["text", "className", "displayMode", "collapseWhen"]),
          r = !o.includes(s);

      return i.createElement(P.ToolWidgetButton, _objectSpread({}, l, {
        ref: t,
        text: r ? a : void 0,
        className: u(n, B.button, r ? B.withText : B.withoutText)
      }));
    });

    function z(e) {
      var t = e.tooltip,
          a = _objectWithoutProperties(e, ["tooltip"]),
          _ref13 = (0, D.useRovingTabindexElement)(null),
          _ref14 = _slicedToArray(_ref13, 2),
          n = _ref14[0],
          s = _ref14[1];

      return i.createElement(W, _objectSpread({
        "aria-label": I.PLATFORM_ACCESSIBILITY_ENABLED ? t : void 0
      }, a, {
        tag: I.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
        tabIndex: s,
        ref: n,
        "data-tooltip": t
      }));
    }

    var V = a(51768),
        Z = a(76460),
        K = a(1393);
    var Q = (0, y.registryContextType)();

    var q =
    /*#__PURE__*/
    function (_i$PureComponent3) {
      _inherits(q, _i$PureComponent3);

      function q(e, t) {
        var _this5;

        _classCallCheck(this, q);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(q).call(this, e, t)), _this5._updateState = function (e) {
          _this5.setState({
            isActive: e
          });
        }, _this5._handleClick = function (e) {
          var t;
          (0, V.trackEvent)("GUI", "Chart Header Toolbar", "compare"), null === (t = _this5._compareDialogRenderer) || void 0 === t || t.show({
            shouldReturnFocus: (0, Z.isKeyboardClick)(e)
          });
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired
        }), _this5.state = {
          isActive: !1
        }, _this5._compareDialogRenderer = _this5.context.chartWidgetCollection.getCompareDialogRenderer();
        return _this5;
      }

      _createClass(q, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e;
          null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().subscribe(this._updateState);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e;
          null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().unsubscribe(this._updateState);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.state.isActive;
          return i.createElement(z, _objectSpread({}, this.props, {
            icon: K,
            isOpened: e,
            onClick: this._handleClick,
            collapseWhen: ["full", "medium", "small"],
            tooltip: o.t(null, void 0, a(20229))
          }));
        }
      }]);

      return q;
    }(i.PureComponent);

    q.contextType = Q;
    var j = a(48889),
        G = a(61814),
        Y = a(68335),
        X = a(97268),
        $ = a(57047);
    var J = (0, G.hotKeySerialize)({
      keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Shift, !1), "F"],
      text: "{0} + {1}"
    }),
        ee = (0, y.registryContextType)();

    function te(e) {
      return e.fullscreen().value() ? $ : X;
    }

    var ae =
    /*#__PURE__*/
    function (_i$PureComponent4) {
      _inherits(ae, _i$PureComponent4);

      function ae(e, t) {
        var _this6;

        _classCallCheck(this, ae);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ae).call(this, e, t)), _this6._updateState = function () {
          _this6.setState({
            icon: te(_this6.context.chartWidgetCollection)
          });
        }, _this6._handleClick = function () {
          var e = _this6.context.chartWidgetCollection;
          e.fullscreen().value() ? e.exitFullscreen() : e.startFullscreen();
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired
        }), _this6.state = {
          icon: te(_this6.context.chartWidgetCollection)
        }, _this6._subscribe();
        return _this6;
      }

      _createClass(ae, [{
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              e = _this$props4.className,
              t = _this$props4.id,
              n = this.state.icon;
          return i.createElement(j.ToolbarIconButton, {
            id: t,
            icon: n,
            onClick: this._handleClick,
            className: u(e),
            tooltip: o.t(null, void 0, a(11682)),
            "data-tooltip-hotkey": J
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._unsubscribe();
        }
      }, {
        key: "_subscribe",
        value: function _subscribe() {
          this.context.chartWidgetCollection.fullscreen().subscribe(this._updateState);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          this.context.chartWidgetCollection.fullscreen().unsubscribe(this._updateState);
        }
      }]);

      return ae;
    }(i.PureComponent);

    ae.contextType = ee;
    var ne = a(50151),
        ie = a(16396),
        se = a(81261);
    var oe = (0, a(59224).getLogger)("FavoritesInfo");

    function le(e, t) {
      if (0 === e.length) return Promise.resolve([]);
      oe.logNormal("Requesting favorites info");
      var a = [],
          n = new Map(),
          i = new Map(),
          s = new Map();
      return e.forEach(function (e) {
        switch (e.type) {
          case "java":
            s.set(e.studyId, e);
            break;

          case "pine":
            isPublishedPineId(e.pineId) ? n.set(e.pineId, e) : i.set(e.pineId, e);
            break;

          default:
            (0, ne.assert)(!1, "unknown favorite type ".concat(JSON.stringify(e)));
        }
      }), 0 !== s.size && a.push(t.findAllJavaStudies().then(function (e) {
        var t = new Map();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _a2 = _step.value;
            !_a2.is_hidden_study && s.has(_a2.id) && t.set(_a2.id, {
              name: _a2.description,
              localizedName: _a2.description_localized,
              studyMarketShittyObject: _a2
            });
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

        return t;
      }).then(function (e) {
        var t = function (e, t) {
          var a = {
            items: [],
            notFoundItems: []
          };
          return e.forEach(function (e, n) {
            var i = t.get(n);
            void 0 !== i ? a.items.push({
              item: e,
              info: i
            }) : a.notFoundItems.push(e);
          }), a;
        }(s, e);

        if (0 !== t.notFoundItems.length) {
          var _e2 = t.notFoundItems.map(function (e) {
            return e.studyId;
          });

          oe.logWarn("Cannot find java scripts: ".concat(JSON.stringify(_e2)));
        }

        return t.items;
      })), Promise.all(a).then(function (e) {
        return oe.logNormal("Requesting favorites info finished"), e.reduce(function (e, t) {
          return e.concat(t);
        }, []);
      });
    }

    var re = a(92249),
        he = a(88348),
        ce = a(26996),
        de = a(39357);

    function ue(e) {
      var t = e.className;
      return i.createElement("div", {
        className: v()(de.spinnerWrap, t)
      }, i.createElement(ce.Loader, null));
    }

    var ve = a(82962),
        me = a(76422),
        pe = a(39681),
        ge = a(75352);
    var be = (0, G.hotKeySerialize)({
      keys: ["/"],
      text: "{0}"
    }),
        Ce = (0, y.registryContextType)();

    var Se =
    /*#__PURE__*/
    function (_i$PureComponent5) {
      _inherits(Se, _i$PureComponent5);

      function Se(e, t) {
        var _this7;

        _classCallCheck(this, Se);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Se).call(this, e, t)), _this7._promise = null, _this7._menu = i.createRef(), _this7._menuItemsContainer = i.createRef(), _this7._favoriteFundamentalsModel = null, _this7._setActiveState = function (e) {
          _this7.setState({
            isActive: e
          });
        }, _this7._handleClick = function (e) {
          var t = _this7.props.studyMarket;
          _this7.setState({
            isActive: !0
          }, function () {
            t.visible().value() ? t.hide() : t.show({
              shouldReturnFocus: (0, Z.isKeyboardClick)(e)
            });
          }), _this7._trackClick();
        }, _this7._handleSelectIndicator = function (e) {
          e = (0, ne.ensureDefined)(e), _this7._trackFavoriteAction("Favorite indicator from toolbar");
          "java" === e.type ? e.studyId : e.pineId;

          (function () {
            e = (0, ne.ensureDefined)(e);
            var t = _this7.context.chartWidgetCollection;

            if ("java" === e.type) {
              var _t3 = (0, re.tryFindStudyLineToolNameByStudyId)(e.studyId);

              if (null !== _t3) return void he.tool.setValue(_t3);
            }

            t.activeChartWidget.value().insertStudy(e, []);
          })();
        }, _this7._handleFavoriteIndicatorsChange = function () {
          var e = _this7.context.favoriteScriptsModel,
              t = _toConsumableArray((0, ne.ensureDefined)(e).favorites());

          _this7.setState({
            favorites: t
          }), _this7._clearCache();
        }, _this7._handleFavoriteFundamentalsChange = function () {
          var e;
          var t = new Set((null === (e = _this7._favoriteFundamentalsModel) || void 0 === e ? void 0 : e.favorites()) || []);
          _this7.setState({
            favoriteFundamentals: t
          }), _this7._clearCache();
        }, _this7._handleMouseEnter = function () {
          _this7._prefetchFavorites();
        }, _this7._handleWrapClick = function () {
          _this7._prefetchFavorites();
        }, _this7._handleChangeActiveWidget = function () {
          _this7._clearCache();
        }, _this7._clearCache = function () {
          _this7._promise = null, _this7.setState({
            infos: []
          });
        }, _this7._handleScriptRenamed = function (e) {
          var t = _this7.context.favoriteScriptsModel;
          void 0 !== t && t.isFav(e.scriptIdPart) && _this7._clearCache();
        }, _this7._handleFavoriteMenuClick = function () {
          _this7._trackClick(), _this7._trackFavoriteAction("Select favorite indicators dropdown");
        }, (0, y.validateRegistry)(t, {
          favoriteScriptsModel: s.any,
          chartWidgetCollection: s.any.isRequired
        });
        var a = t.favoriteScriptsModel,
            n = void 0 !== a ? a.favorites() : [];
        _this7.state = {
          isActive: !1,
          isLoading: !1,
          favorites: n,
          favoriteFundamentals: void 0,
          infos: []
        };
        return _this7;
      }

      _createClass(Se, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e = this.props.studyMarket,
              _this$context3 = this.context,
              t = _this$context3.favoriteScriptsModel,
              a = _this$context3.chartWidgetCollection;
          e.visible().subscribe(this._setActiveState), void 0 !== t && (t.favoritesChanged().subscribe(this, this._handleFavoriteIndicatorsChange), a.activeChartWidget.subscribe(this._handleChangeActiveWidget)), me.on("TVScriptRenamed", this._handleScriptRenamed, null);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e = this.props.studyMarket,
              _this$context4 = this.context,
              t = _this$context4.favoriteScriptsModel,
              a = _this$context4.chartWidgetCollection;
          e.visible().unsubscribe(this._setActiveState), void 0 !== t && (t.favoritesChanged().unsubscribe(this, this._handleFavoriteIndicatorsChange), a.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)), me.unsubscribe("TVScriptRenamed", this._handleScriptRenamed, null), this._promise = null;
        }
      }, {
        key: "render",
        value: function render() {
          var _this8 = this;

          var _this$state2 = this.state,
              e = _this$state2.isActive,
              t = _this$state2.favorites,
              n = _this$state2.favoriteFundamentals,
              s = _this$state2.isLoading,
              _this$props5 = this.props,
              l = _this$props5.className,
              r = _this$props5.displayMode,
              h = _this$props5.id,
              c = this.context.chartWidgetCollection;
          return i.createElement(i.Fragment, null, i.createElement(p, {
            id: h,
            onMouseEnter: this._handleMouseEnter,
            onClick: this._handleWrapClick
          }, i.createElement(z, {
            displayMode: r,
            className: l,
            icon: pe,
            isOpened: e,
            onClick: this._handleClick,
            text: o.t(null, void 0, a(61142)),
            "data-role": "button",
            "data-name": "open-indicators-dialog",
            tooltip: o.t(null, void 0, a(74527)),
            "data-tooltip-hotkey": be
          }), Boolean(t.length > 0 || (null == n ? void 0 : n.size)) && i.createElement(_.MatchMedia, {
            rule: "screen and (max-width: 430px)"
          }, function (e) {
            return i.createElement(d.ToolbarMenuButton, {
              key: c.activeChartWidget.value().id(),
              arrow: !0,
              closeOnClickOutside: !0,
              isDrawer: e,
              drawerPosition: "Bottom",
              ref: _this8._menu,
              menuReference: _this8._menuItemsContainer,
              onClick: _this8._handleFavoriteMenuClick,
              "data-name": "show-favorite-indicators",
              tooltip: o.t(null, void 0, a(33959))
            }, i.createElement("div", {
              className: v()(ge.dropdown, e && ge.smallWidthWrapper)
            }, i.createElement(ve.ToolWidgetMenuSummary, {
              className: e && ge.smallWidthTitle
            }, o.t(null, void 0, a(83127))), s && i.createElement(ue, null), !s && i.createElement(i.Fragment, null, _this8.state.infos.length > 0 ? _this8.state.infos.map(function (t) {
              return i.createElement(A.AccessibleMenuItem, {
                className: v()(e && ge.smallWidthMenuItem),
                theme: e ? w.multilineLabelWithIconAndToolboxTheme : void 0,
                key: "java" === t.item.type ? t.item.studyId : t.item.pineId,
                onClick: _this8._handleSelectIndicator,
                onClickArg: t.item,
                label: i.createElement("span", {
                  className: v()(!e && ge.label, e && ge.smallWidthLabel, "apply-overflow-tooltip")
                }, _e(t))
              });
            }) : null !== _this8._promise && i.createElement(ie.PopupMenuItem, {
              isDisabled: !0,
              label: o.t(null, void 0, a(23687))
            }))));
          })));
        }
      }, {
        key: "_prefetchFavorites",
        value: function _prefetchFavorites() {
          var _this9 = this;

          var e = this.context.chartWidgetCollection;
          if (null !== this._promise || !window.is_authenticated) return;
          var t = e.activeChartWidget.value();
          if (!t.hasModel()) return;
          var a = t.model().model().studyMetaInfoRepository();
          this.setState({
            isLoading: !0
          });
          var n = this._promise = Promise.all([le(this.state.favorites, a), void 0]).then(function (e) {
            if (n !== _this9._promise) return;

            var _e3 = _slicedToArray(e, 2),
                t = _e3[0],
                a = _e3[1];

            var i = _toConsumableArray(t);

            if (a) {
              var _i2;

              var _e4 = a.filter(function (e) {
                var t;
                return null === (t = _this9.state.favoriteFundamentals) || void 0 === t ? void 0 : t.has(e.scriptIdPart);
              }).map(_this9._mapFundamentalToFavoriteItemInfo);

              (_i2 = i).push.apply(_i2, _toConsumableArray(_e4));
            }

            i = _toConsumableArray(i).sort(function (e, t) {
              return _e(e).localeCompare(_e(t));
            }), _this9.setState({
              infos: i,
              isLoading: !1
            }, function () {
              var e;
              null === (e = _this9._menu.current) || void 0 === e || e.update(), _this9._menuItemsContainer.current && document.activeElement === _this9._menuItemsContainer.current && (0, se.focusFirstMenuItem)(_this9._menuItemsContainer.current);
            });
          });
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }, {
        key: "_trackFavoriteAction",
        value: function _trackFavoriteAction(e) {
          (0, V.trackEvent)("GUI", "Chart Header Toolbar", e);
        }
      }, {
        key: "_mapFundamentalToFavoriteItemInfo",
        value: function _mapFundamentalToFavoriteItemInfo(e) {
          return {
            item: {
              type: "pine",
              pineId: e.scriptIdPart
            },
            info: {
              name: e.scriptName,
              localizedName: getLocalizedFundamentalsName(e),
              studyMarketShittyObject: void 0
            }
          };
        }
      }]);

      return Se;
    }(i.PureComponent);

    function _e(e) {
      return e.info.localizedName || o.t(e.info.name, {
        context: "study"
      }, a(68716));
    }

    Se.contextType = Ce;
    var fe = a(94025),
        we = a(20371);

    function ye(e) {
      return i.createElement("div", {
        className: u(we.value, _defineProperty({}, we.selected, e.isSelected))
      }, e.value, e.metric);
    }

    var Ee = a(65817),
        Me = a(67972);

    function Te(e) {
      var t = e.className,
          a = _objectWithoutProperties(e, ["className"]),
          _ref15 = (0, D.useRovingTabindexElement)(null),
          _ref16 = _slicedToArray(_ref15, 2),
          n = _ref16[0],
          s = _ref16[1],
          o = I.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div";

      return i.createElement(o, _objectSpread({}, a, {
        ref: n,
        tabIndex: s,
        "data-role": I.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && Me.accessible, t)
      }));
    }

    function ke(e) {
      var t = e.className,
          a = _objectWithoutProperties(e, ["className"]),
          _ref17 = (0, D.useRovingTabindexElement)(null),
          _ref18 = _slicedToArray(_ref17, 2),
          n = _ref18[0],
          s = _ref18[1];

      return i.createElement("input", _objectSpread({}, a, {
        ref: n,
        tabIndex: s,
        "data-role": I.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && Me.accessible, t)
      }));
    }

    var Ie =
    /*#__PURE__*/
    function (_i$PureComponent6) {
      _inherits(Ie, _i$PureComponent6);

      function Ie(e) {
        var _this10;

        _classCallCheck(this, Ie);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Ie).call(this, e)), _this10._menu = i.createRef(), _this10._handleChangeInput = function (e) {
          var t = e.currentTarget.value;
          /^[0-9]*$/.test(t) && _this10.setState({
            inputValue: t
          });
        }, _this10._handleSelectTime = function (e) {
          var t, a, n, i;
          _this10.setState({
            selectedIntervalSuffix: e
          }), null === (a = (t = _this10.props).onSelect) || void 0 === a || a.call(t), null === (n = _this10._menu.current) || void 0 === n || n.close(), null === (i = _this10._menu.current) || void 0 === i || i.focus();
        }, _this10._handleClickAdd = function () {
          var _this10$state = _this10.state,
              e = _this10$state.inputValue,
              t = _this10$state.selectedIntervalSuffix;

          _this10.props.onAdd(e, t);
        }, _this10.state = {
          inputValue: "1",
          selectedIntervalSuffix: Ee.INTERVALS[0].name
        };
        return _this10;
      }

      _createClass(Ie, [{
        key: "render",
        value: function render() {
          var _this11 = this;

          var _this$state3 = this.state,
              e = _this$state3.inputValue,
              t = _this$state3.menuWidth,
              n = _this$state3.selectedIntervalSuffix;
          return i.createElement("div", {
            className: Me.form
          }, i.createElement(ke, {
            className: Me.input,
            maxLength: 7,
            onChange: this._handleChangeInput,
            value: e
          }), i.createElement(d.ToolbarMenuButton, {
            orientation: "none",
            minWidth: t,
            "data-role": "menuitem",
            onClose: this.props.onCloseMenu,
            onOpen: this.props.onOpenMenu,
            className: Me.menu,
            ref: this._menu,
            content: i.createElement("div", {
              className: Me.menuLabel
            }, Ee.INTERVALS.find(function (e) {
              return e.name === n;
            }).label)
          }, Ee.INTERVALS.map(function (e) {
            return i.createElement(A.AccessibleMenuItem, {
              dontClosePopup: !0,
              key: e.name,
              label: e.label,
              onClick: _this11._handleSelectTime,
              onClickArg: e.name
            });
          })), i.createElement(Te, {
            className: Me.add,
            onClick: this._handleClickAdd
          }, o.t(null, void 0, a(54777))));
        }
      }]);

      return Ie;
    }(i.PureComponent);

    var xe = a(90186),
        Ae = a(70412),
        Re = a(32563),
        Ne = a(74628),
        Fe = a(867);

    function Oe(e) {
      var t = e.interval,
          a = e.hint,
          n = e.isActive,
          s = e.isDisabled,
          o = e.isFavorite,
          l = e.isSignaling,
          r = e.onClick,
          h = e.onClickRemove,
          c = e.onClickFavorite,
          d = e.isSmallTablet,
          u = (0, xe.filterDataProps)(e),
          _ref19 = (0, Ae.useHover)(),
          _ref20 = _slicedToArray(_ref19, 2),
          m = _ref20[0],
          p = _ref20[1],
          g = i.useCallback(function (e) {
        return h(t, e);
      }, [h, t]),
          b = i.useCallback(function () {
        return c(t);
      }, [c, t]),
          C = (0, i.useRef)(null);

      return (0, i.useEffect)(function () {
        var e;
        l && d && (null === (e = C.current) || void 0 === e || e.scrollIntoView());
      }, [l, d]), i.createElement("div", _objectSpread({}, p, {
        ref: C
      }), i.createElement(A.AccessibleMenuItem, _objectSpread({}, u, {
        className: v()(Fe.menuItem, d && Fe.smallWidthMenuItem),
        theme: d ? w.multilineLabelWithIconAndToolboxTheme : void 0,
        isActive: n,
        isDisabled: s,
        isHovered: l,
        onClick: r,
        onClickArg: t,
        toolbox: function () {
          var t = e.isRemovable,
              a = e.isFavoritingAllowed,
              l = i.createElement(Ne.MenuRemoveButton, {
            key: "remove",
            isActive: n,
            hidden: !Re.touch && !m,
            onClick: g,
            className: Fe.remove
          }),
              r = i.createElement(R.MenuFavoriteButton, {
            key: "favorite",
            isActive: n,
            isFilled: o,
            onClick: b
          });
          return [t && l, !s && a && r];
        }(),
        showToolboxOnHover: !o,
        showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
        label: a
      })));
    }

    var He = a(36274);
    var Le = (_Le = {}, _defineProperty(_Le, He.ResolutionKind.Ticks, o.t(null, {
      context: "interval_group_name"
    }, a(30426))), _defineProperty(_Le, He.ResolutionKind.Seconds, o.t(null, {
      context: "interval_group_name"
    }, a(74973))), _defineProperty(_Le, He.ResolutionKind.Minutes, o.t(null, {
      context: "interval_group_name"
    }, a(57470))), _defineProperty(_Le, He.SpecialResolutionKind.Hours, o.t(null, {
      context: "interval_group_name"
    }, a(62346))), _defineProperty(_Le, He.ResolutionKind.Days, o.t(null, {
      context: "interval_group_name"
    }, a(74787))), _defineProperty(_Le, He.ResolutionKind.Weeks, o.t(null, {
      context: "interval_group_name"
    }, a(86614))), _defineProperty(_Le, He.ResolutionKind.Months, o.t(null, {
      context: "interval_group_name"
    }, a(94328))), _defineProperty(_Le, He.ResolutionKind.Range, o.t(null, {
      context: "interval_group_name"
    }, a(48801))), _defineProperty(_Le, He.ResolutionKind.Invalid, ""), _Le);

    function De(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return {
        id: e,
        name: Le[e],
        items: [],
        mayOmitSeparator: t
      };
    }

    var Pe = a(57898),
        Be = a(29197),
        Ue = a(59064),
        We = a(76197),
        ze = a(90785);

    function Ve(e) {
      var t = e.className,
          a = _objectWithoutProperties(e, ["className"]),
          _ref21 = (0, D.useRovingTabindexElement)(null),
          _ref22 = _slicedToArray(_ref21, 2),
          n = _ref22[0],
          s = _ref22[1];

      return i.createElement(We.CollapsibleSection, _objectSpread({}, a, {
        ref: n,
        tabIndex: s,
        "data-role": I.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && ze.accessible, t),
        onKeyDown: function onKeyDown(e) {
          var t = (0, k.hashFromEvent)(e);
          13 !== t && 32 !== t || (e.preventDefault(), n.current instanceof HTMLElement && n.current.click());
        }
      }));
    }

    var Ze = a(80022);
    var Ke = {
      openDialog: o.t(null, void 0, a(79353)),
      timeInterval: o.t(null, void 0, a(32916))
    },
        Qe = (0, G.hotKeySerialize)({
      keys: [","],
      text: o.t(null, void 0, a(14605))
    }),
        qe = (0, y.registryContextType)(),
        je = new Pe.Delegate(),
        Ge = i.lazy(function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Promise.all([a.e(1013), a.e(5145), a.e(855), a.e(2191), a.e(6221), a.e(4215), a.e(7194), a.e(2676), a.e(3016), a.e(4403), a.e(4013)]).then(a.bind(a, 44762)));

            case 2:
              _context.t0 = _context.sent.ToolWidgetIntervalsAddDialog;
              return _context.abrupt("return", {
                "default": _context.t0
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    var Ye =
    /*#__PURE__*/
    function (_i$PureComponent7) {
      _inherits(Ye, _i$PureComponent7);

      function Ye(e, t) {
        var _this12;

        _classCallCheck(this, Ye);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Ye).call(this, e, t)), _this12._menu = i.createRef(), _this12._menuItemsContainerRef = i.createRef(), _this12._renderChildren = function (e, t) {
          return [].concat(_toConsumableArray(_this12._createMenuItems(e, t)), _toConsumableArray(_this12._createIntervalForm(t)));
        }, _this12._handleChangeInterval = function (e) {
          var _this12$state = _this12.state,
              t = _this12$state.activeInterval,
              a = _this12$state.lastNotQuicked,
              n = _this12._getQuicks();

          _this12.setState({
            activeInterval: (0, fe.normalizeIntervalString)(e),
            lastNotQuicked: void 0 === t || n.includes(t) ? a : t
          });
        }, _this12._bindedForceUpdate = function () {
          _this12.forceUpdate();
        }, _this12._handleCloseMenu = function () {
          _this12.setState({
            isOpenedFormMenu: !1
          });
        }, _this12._handleOpenMenu = function () {
          _this12.setState({
            isOpenedFormMenu: !0
          });
        }, _this12._handleSelectInterval = function (e) {
          void 0 !== e && e !== l.linking.interval.value() && _this12.context.chartWidgetCollection.setResolution(e), e && (0, V.trackEvent)("GUI", "Time Interval", e);
        }, _this12._handleClickFavorite = function (e) {
          e = (0, ne.ensureDefined)(e), _this12._isIntervalFavorite(e) ? _this12._handleRemoveFavorite(e) : _this12._handleAddFavorite(e);
        }, _this12._handleAddFavorite = function (e) {
          var t = _this12.state.favorites;

          _this12.context.favoriteIntervalsService.set([].concat(_toConsumableArray(t), [e]));
        }, _this12._handleRemoveFavorite = function (e) {
          var t = _this12.state.favorites;

          _this12.context.favoriteIntervalsService.set(t.filter(function (t) {
            return t !== e;
          }));
        }, _this12._handleAddInterval = function (e, t) {
          var a = _this12.context.intervalService,
              n = a.add(e, t);
          n && _this12.setState({
            lastAddedInterval: n
          });
        }, _this12._handleRemoveInterval = function (e, t) {
          var a;
          var n = _this12.context.intervalService;

          if (e) {
            if (I.PLATFORM_ACCESSIBILITY_ENABLED && t && (0, Z.isKeyboardClick)(t) && _this12._menuItemsContainerRef.current) {
              var _t4 = (0, se.queryMenuElements)(_this12._menuItemsContainerRef.current),
                  _n2 = _t4.findIndex(function (t) {
                return t.matches("[data-value=\"".concat(e, "\"]"));
              });

              if (-1 !== _n2) {
                var _e5 = null !== (a = _t4[_n2 + 1]) && void 0 !== a ? a : _t4[_n2 - 1];

                _e5 ? _e5.focus() : (0, se.focusFirstMenuItem)(_this12._menuItemsContainerRef.current);
              }
            }

            n.remove(e), _this12._handleRemoveFavorite(e);
          }
        }, _this12._getHandleSectionStateChange = function (e) {
          return function (t) {
            var a = _this12.state.menuViewState,
                n = _this12.context.intervalsMenuViewStateService;
            n.set(_objectSpread({}, a, _defineProperty({}, e, !t)));
          };
        }, _this12._handleOpenAddIntervalDialog = function () {
          _this12.setState({
            isAddIntervalDialogOpened: !0
          });
        }, _this12._handleCloseAddIntervalDialog = function () {
          _this12.setState({
            isAddIntervalDialogOpened: !1
          });
        }, _this12._handleGlobalClose = function () {
          var e = _this12.props.isFake,
              t = _this12.state.isAddIntervalDialogOpened;
          e || t || je.fire();
        }, _this12._handeQuickClick = function (e) {
          _this12._handleSelectInterval(e), _this12._trackClick();
        }, _this12._updateMenuPosition = function () {
          var e;
          null === (e = _this12._menu.current) || void 0 === e || e.update();
        }, (0, y.validateRegistry)(t, {
          chartApiInstance: s.any.isRequired,
          favoriteIntervalsService: s.any.isRequired,
          intervalService: s.any.isRequired,
          intervalsMenuViewStateService: s.any.isRequired
        });
        var a = t.chartApiInstance,
            o = t.favoriteIntervalsService,
            r = t.intervalService,
            h = t.intervalsMenuViewStateService;
        _this12._customIntervals = n.enabled("custom_resolutions");
        var c = l.linking.interval.value(),
            d = c && (0, fe.normalizeIntervalString)(c),
            u = o.get(),
            v = r.getCustomIntervals(),
            m = h.get();
        _this12._defaultIntervals = a.defaultResolutions().filter(fe.isIntervalEnabled).map(fe.normalizeIntervalString), _this12.state = {
          isOpenedFormMenu: !1,
          activeInterval: d,
          favorites: u,
          customs: v,
          menuViewState: m,
          isAddIntervalDialogOpened: !1
        };
        return _this12;
      }

      _createClass(Ye, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$context5 = this.context,
              e = _this$context5.favoriteIntervalsService,
              t = _this$context5.intervalService,
              a = _this$context5.intervalsMenuViewStateService;
          e.getOnChange().subscribe(this, this._handleChangeFavorites), a.getOnChange().subscribe(this, this._handleChangeMenuViewState), t.getOnChange().subscribe(this, this._handleChangeCustoms), l.linking.interval.subscribe(this._handleChangeInterval), l.linking.intraday.subscribe(this._bindedForceUpdate), l.linking.seconds.subscribe(this._bindedForceUpdate), l.linking.ticks.subscribe(this._bindedForceUpdate), l.linking.range.subscribe(this._bindedForceUpdate), l.linking.supportedResolutions.subscribe(this._bindedForceUpdate), l.linking.dataFrequencyResolution.subscribe(this._bindedForceUpdate), Ue.globalCloseDelegate.subscribe(this, this._handleGlobalClose);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$context6 = this.context,
              e = _this$context6.favoriteIntervalsService,
              t = _this$context6.intervalService,
              a = _this$context6.intervalsMenuViewStateService;
          e.getOnChange().unsubscribe(this, this._handleChangeFavorites), a.getOnChange().unsubscribe(this, this._handleChangeMenuViewState), t.getOnChange().unsubscribe(this, this._handleChangeCustoms), l.linking.interval.unsubscribe(this._handleChangeInterval), l.linking.intraday.unsubscribe(this._bindedForceUpdate), l.linking.seconds.unsubscribe(this._bindedForceUpdate), l.linking.ticks.unsubscribe(this._bindedForceUpdate), l.linking.range.unsubscribe(this._bindedForceUpdate), l.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate), l.linking.dataFrequencyResolution.unsubscribe(this._bindedForceUpdate), Ue.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          var _this13 = this;

          this.state.lastAddedInterval && setTimeout(function () {
            return _this13.setState({
              lastAddedInterval: void 0
            });
          }, 400);
        }
      }, {
        key: "render",
        value: function render() {
          var _this14 = this;

          var _this$props6 = this.props,
              e = _this$props6.isShownQuicks,
              t = _this$props6.id,
              _this$state4 = this.state,
              a = _this$state4.activeInterval,
              n = _this$state4.customs,
              s = _this$state4.lastNotQuicked,
              o = _this$state4.isAddIntervalDialogOpened,
              l = this._getQuicks(),
              r = (0, fe.sortResolutions)(_toConsumableArray(l));

          void 0 !== a && r.includes(a) ? void 0 !== s && r.push(s) : void 0 !== a && r.push(a);
          var h = (!(!e || 0 === l.length) || void 0) && r.length > 1,
              c = {},
              v = (0, fe.mergeResolutions)(this._defaultIntervals, n);
          (void 0 !== a ? v.concat(a) : v).filter(fe.isAvailable).forEach(function (e) {
            return c[e] = !0;
          });
          var m = void 0 !== a ? (0, fe.getTranslatedResolutionModel)(a) : null;
          return i.createElement(p, {
            id: t
          }, h && i.createElement(x, {
            className: Ze.group,
            orientation: "horizontal"
          }, r.map(function (e, t) {
            var _u3;

            var n = (0, fe.getTranslatedResolutionModel)(e);
            return i.createElement(C, {
              key: t,
              role: "radio",
              className: u(Ze.button, (_u3 = {}, _defineProperty(_u3, Ze.first, 0 === t), _defineProperty(_u3, Ze.last, t === r.length - 1), _u3)),
              text: i.createElement(ye, {
                value: n.mayOmitMultiplier ? void 0 : n.multiplier,
                metric: n.shortKind
              }),
              hint: n.hint,
              "aria-checked": a === e,
              isActive: a === e,
              isDisabled: !c[e] && e !== s,
              onClick: _this14._handeQuickClick,
              onClickArg: e,
              "data-value": e
            });
          })), i.createElement(_.MatchMedia, {
            rule: f.DialogBreakpoints.TabletSmall
          }, function (e) {
            return i.createElement(i.Fragment, null, i.createElement(Be.CloseDelegateContext.Provider, {
              value: je
            }, i.createElement(d.ToolbarMenuButton, {
              arrow: Boolean(h),
              closeOnClickOutside: !0,
              content: h || null === m ? void 0 : i.createElement(p, {
                className: Ze.menuContent
              }, i.createElement(ye, {
                value: m.mayOmitMultiplier ? void 0 : m.multiplier,
                metric: m.shortKind
              })),
              hotKey: h ? Qe : void 0,
              className: Ze.menu,
              ref: _this14._menu,
              isDrawer: e,
              onClick: _this14._trackClick,
              tooltip: h || null === m ? Ke.timeInterval : m.hint,
              menuReference: _this14._menuItemsContainerRef
            }, i.createElement("div", {
              className: Ze.dropdown
            }, _this14._renderChildren(v, e)))), e && o && i.createElement(i.Suspense, {
              fallback: null
            }, i.createElement(Ge, {
              onAdd: _this14._handleAddInterval,
              onClose: _this14._handleCloseAddIntervalDialog,
              onUnmount: _this14._handleCloseAddIntervalDialog
            })));
          }));
        }
      }, {
        key: "_createMenuItems",
        value: function _createMenuItems(e, t) {
          var _this15 = this,
              _ref23;

          var a = function (e) {
            var t = De(He.ResolutionKind.Ticks),
                a = De(He.ResolutionKind.Seconds),
                n = De(He.ResolutionKind.Minutes),
                i = De(He.SpecialResolutionKind.Hours),
                s = De(He.ResolutionKind.Days),
                o = De(He.ResolutionKind.Range);
            return e.forEach(function (e) {
              var l = He.Interval.parse(e);
              l.isMinuteHours() ? i.items.push(e) : l.isMinutes() ? (0, He.isHour)(Number(l.multiplier())) ? i.items.push(e) : n.items.push(e) : l.isSeconds() ? a.items.push(e) : l.isDWM() ? s.items.push(e) : l.isRange() ? o.items.push(e) : l.isTicks() && t.items.push(e);
            }), [t, a, n, i, s, o].filter(function (e) {
              return 0 !== e.items.length;
            });
          }(e).map(function (e, a, n) {
            return _this15._renderResolutionsGroup(e, 1 === n.length, t);
          });

          return function (e) {
            var t = !1;
            return e.filter(function (e, a, n) {
              var i = !0;
              return e.type === S.PopupMenuSeparator && (0 !== a && a !== n.length - 1 || (i = !1), t && (i = !1)), t = e.type === S.PopupMenuSeparator, i;
            });
          }((_ref23 = []).concat.apply(_ref23, _toConsumableArray(a)));
        }
      }, {
        key: "_createIntervalForm",
        value: function _createIntervalForm(e) {
          if (this._customIntervals) {
            var _t5 = e ? i.createElement(Xe, {
              key: "add-dialog",
              onClick: this._handleOpenAddIntervalDialog
            }) : i.createElement(Ie, {
              key: "add-form",
              onAdd: this._handleAddInterval,
              onCloseMenu: this._handleCloseMenu,
              onOpenMenu: this._handleOpenMenu,
              onSelect: this._updateMenuPosition
            });

            return [i.createElement(S.PopupMenuSeparator, {
              key: "custom-interval-separator"
            }), _t5];
          }

          return [];
        }
      }, {
        key: "_renderResolutionsGroup",
        value: function _renderResolutionsGroup(e) {
          var _this16 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var a = arguments.length > 2 ? arguments[2] : undefined;
          var n = [],
              s = e.items.map(function (e) {
            return _this16._renderPopupMenuItem(e, a);
          });
          if (t) n.push.apply(n, _toConsumableArray(s));else if (a) {
            var _t6 = i.createElement($e, {
              key: e.id,
              title: e.name
            }, s);

            n.push(_t6);
          } else {
            var _t7 = this.context.intervalsMenuViewStateService,
                _a3 = this.state.menuViewState;
            if (!_t7.isAllowed(e.id)) return [];

            var _o = i.createElement(Ve, {
              key: e.id,
              className: Ze.section,
              summary: e.name,
              open: !_a3[e.id],
              onStateChange: this._getHandleSectionStateChange(e.id)
            }, s);

            n.push(_o);
          }
          return (!e.mayOmitSeparator || e.items.length > 1) && (n.unshift(i.createElement(S.PopupMenuSeparator, {
            key: "begin-".concat(e.name)
          })), n.push(i.createElement(S.PopupMenuSeparator, {
            key: "end-".concat(e.name)
          }))), n;
        }
      }, {
        key: "_handleChangeFavorites",
        value: function _handleChangeFavorites(e) {
          this.setState({
            lastNotQuicked: void 0,
            favorites: e
          });
        }
      }, {
        key: "_handleChangeCustoms",
        value: function _handleChangeCustoms(e) {
          this.setState({
            customs: e
          });
        }
      }, {
        key: "_handleChangeMenuViewState",
        value: function _handleChangeMenuViewState(e) {
          var _this17 = this;

          this.setState({
            menuViewState: e
          }, function () {
            _this17._menu.current && _this17._menu.current.update();
          });
        }
      }, {
        key: "_renderPopupMenuItem",
        value: function _renderPopupMenuItem(e, t) {
          var a = this.props.isFavoritingAllowed,
              _this$state5 = this.state,
              n = _this$state5.activeInterval,
              s = _this$state5.lastAddedInterval,
              o = e === n,
              l = (0, fe.isAvailable)(e),
              r = this._isIntervalFavorite(e),
              h = this._isIntervalDefault(e),
              c = (0, fe.getTranslatedResolutionModel)(e);

          return i.createElement(Oe, {
            key: e,
            isSmallTablet: t,
            interval: e,
            hint: c.hint,
            isSignaling: s === e,
            isFavoritingAllowed: a,
            isDisabled: !l,
            isFavorite: r,
            isRemovable: !h,
            isActive: o,
            onClick: this._handleSelectInterval,
            onClickRemove: this._handleRemoveInterval,
            onClickFavorite: this._handleClickFavorite,
            "data-value": e
          });
        }
      }, {
        key: "_isIntervalDefault",
        value: function _isIntervalDefault(e) {
          return this._defaultIntervals.includes(e);
        }
      }, {
        key: "_isIntervalFavorite",
        value: function _isIntervalFavorite(e) {
          return this.state.favorites.includes(e);
        }
      }, {
        key: "_getQuicks",
        value: function _getQuicks(e) {
          return this.props.isShownQuicks && "small" !== this.props.displayMode ? void 0 === e ? this.state.favorites : e : [];
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }]);

      return Ye;
    }(i.PureComponent);

    function Xe(e) {
      var t = e.onClick,
          n = e.className;
      return i.createElement("div", {
        key: "add-dialog",
        className: u(Ze.addCustomInterval, n),
        onClick: t
      }, o.t(null, void 0, a(95798)) + "…");
    }

    function $e(e) {
      var t = e.children,
          a = e.title,
          n = e.className;
      return i.createElement("div", {
        className: n
      }, i.createElement("div", {
        className: Ze.smallTabletSectionTitle
      }, a), t);
    }

    Ye.contextType = qe;
    var Je = a(23902),
        et = a(82436);
    var tt = (0, y.registryContextType)();

    var at =
    /*#__PURE__*/
    function (_i$PureComponent8) {
      _inherits(at, _i$PureComponent8);

      function at(e, t) {
        var _this18;

        _classCallCheck(this, at);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(at).call(this, e, t)), _this18._handleClick = function () {
          var _this18$context = _this18.context,
              e = _this18$context.chartWidgetCollection,
              t = _this18$context.windowMessageService,
              a = _this18$context.isFundamental,
              n = e.activeChartWidget.value();
          n.withModel(null, function () {
            t.post(parent, "openChartInPopup", {
              symbol: n.model().mainSeries().actualSymbol(),
              interval: n.model().mainSeries().interval(),
              fundamental: a
            });
          });
        }, (0, y.validateRegistry)(t, {
          isFundamental: s.any,
          chartWidgetCollection: s.any.isRequired,
          windowMessageService: s.any.isRequired
        });
        return _this18;
      }

      _createClass(at, [{
        key: "render",
        value: function render() {
          var e = this.props.className;
          return i.createElement(j.ToolbarIconButton, {
            className: u(e, Je.button),
            icon: et,
            onClick: this._handleClick,
            tooltip: o.t(null, void 0, a(55520))
          });
        }
      }]);

      return at;
    }(i.PureComponent);

    at.contextType = tt;
    var nt = a(48449);
    var it = (0, y.registryContextType)();

    var st =
    /*#__PURE__*/
    function (_i$PureComponent9) {
      _inherits(st, _i$PureComponent9);

      function st(e, t) {
        var _this19;

        _classCallCheck(this, st);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(st).call(this, e, t)), _this19._updateState = function (e) {
          _this19.setState({
            isOpened: e
          });
        }, _this19._handleClick = function (e) {
          var t = _this19.context.chartWidgetCollection,
              a = t.activeChartWidget.value();
          (0, V.trackEvent)("GUI", "Chart Header Toolbar", "chart properties"), a.showGeneralChartProperties(void 0, {
            shouldReturnFocus: (0, Z.isKeyboardClick)(e)
          });
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired
        }), _this19.state = {
          isOpened: !1
        }, _this19._propertiesDialogRenderer = _this19.context.chartWidgetCollection.getChartPropertiesDialogRenderer();
        return _this19;
      }

      _createClass(st, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e;
          null === (e = this._propertiesDialogRenderer) || void 0 === e || e.visible().subscribe(this._updateState);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e;
          null === (e = this._propertiesDialogRenderer) || void 0 === e || e.visible().unsubscribe(this._updateState);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.state.isOpened;
          return i.createElement(j.ToolbarIconButton, _objectSpread({}, this.props, {
            icon: nt,
            isOpened: e,
            onClick: this._handleClick,
            tooltip: o.t(null, void 0, a(74207))
          }));
        }
      }]);

      return st;
    }(i.PureComponent);

    st.contextType = it;
    var ot = a(4741),
        lt = a(93352),
        rt = a(40173),
        ht = a(69297),
        ct = a(20461);
    (0, rt.mergeThemes)(ht.DEFAULT_MENU_ITEM_SWITCHER_THEME, ct);
    var dt = a(53180),
        ut = a(70152);

    function vt(e) {
      var t = e.wasChanges,
          n = e.isSaving,
          s = e.className;
      return i.createElement("span", {
        className: u(ut.saveString, !t && !n && ut.hidden, s)
      }, n ? i.createElement(ce.Loader, {
        className: ut.loader,
        size: "small",
        staticPosition: !0
      }) : o.t(null, void 0, a(85520)));
    }

    var mt = a(36296),
        pt = a(63672),
        gt = a(92998);
    a(40670);

    var bt = n.enabled("widget"),
        Ct = o.t(null, void 0, a(75789)),
        St = (0, rt.mergeThemes)(P.DEFAULT_TOOL_WIDGET_BUTTON_THEME, gt),
        _t = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
      shortcut: pt.shortcut,
      withIcon: pt.withIcon
    }),
        ft = o.t(null, void 0, a(80959)),
        wt = o.t(null, void 0, a(11680)),
        yt = [],
        Et = (0, G.hotKeySerialize)({
      keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "S"],
      text: "{0} + {1}"
    });

    var Mt =
    /*#__PURE__*/
    function (_i$PureComponent10) {
      _inherits(Mt, _i$PureComponent10);

      function Mt(e) {
        var _this20;

        _classCallCheck(this, Mt);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Mt).call(this, e)), _this20._copyElRef = i.createRef(), _this20._handleCopyLinkClick = function () {
          return Promise.resolve();
        }, _this20._handleCloneClick = function () {
          var e, t;
          null === (t = (e = _this20.props).onCloneChart) || void 0 === t || t.call(e);
        }, _this20._handleSaveClick = function () {
          var e, t;
          null === (t = (e = _this20.props).onSaveChart) || void 0 === t || t.call(e), _this20._trackClick();
        }, _this20._handleSaveAsClick = function () {
          var e, t;
          null === (t = (e = _this20.props).onSaveAsChart) || void 0 === t || t.call(e);
        }, _this20.state = {
          isSaving: !1
        };
        return _this20;
      }

      _createClass(Mt, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          var _this21 = this;

          e.isProcessing && !this.props.isProcessing && (clearTimeout(this._timeout), this._timeout = void 0, this.setState({
            isSaving: !1
          })), !e.isProcessing && this.props.isProcessing && (this._timeout = setTimeout(function () {
            _this21.setState({
              isSaving: !0
            });
          }, 1e3));
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._timeout && clearTimeout(this._timeout);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props7 = this.props,
              e = _this$props7.id,
              t = _this$props7.isReadOnly,
              n = _this$props7.displayMode,
              s = _this$props7.isProcessing,
              l = _this$props7.title,
              r = _this$props7.wasChanges,
              h = _this$props7.hideMenu,
              v = _this$props7.isTabletSmall,
              m = _this$props7.onOpenMenu,
              g = _this$props7.dataNameSaveMenu,
              b = _this$props7.isSaveDialogOpened,
              C = !t && !h,
              S = !(r || !l || this.state.isSaving),
              _ = i.createElement("div", {
            className: pt.textWrap
          }, i.createElement("span", {
            className: pt.text
          }, l || o.t(null, void 0, a(85520))), i.createElement(vt, {
            isSaving: this.state.isSaving,
            wasChanges: r
          }));

          return i.createElement(p, null, t ? i.createElement(p, null, i.createElement(z, {
            id: e,
            displayMode: n,
            icon: i.createElement(c.Icon, {
              icon: mt
            }),
            isDisabled: s,
            onClick: this._handleCloneClick,
            text: o.t(null, void 0, a(35216)),
            collapseWhen: yt,
            tooltip: ft
          })) : i.createElement(p, null, i.createElement(z, {
            id: e,
            className: u(pt.button, C && pt.buttonSmallPadding),
            displayMode: n,
            "aria-disabled": !!S || void 0,
            isDisabled: s,
            onClick: S ? void 0 : this._handleSaveClick,
            text: _,
            theme: St,
            collapseWhen: yt,
            isOpened: b,
            tooltip: S ? o.t(null, void 0, a(88368)) : o.t(null, void 0, a(87409)),
            "data-tooltip-hotkey": bt || S ? "" : Et
          }), C && i.createElement(d.ToolbarMenuButton, {
            "data-name": g,
            arrow: !0,
            isDrawer: v,
            drawerPosition: "Bottom",
            onClick: this._trackClick,
            onOpen: m,
            tooltip: o.t(null, void 0, a(58219))
          }, this._renderMenuItems(Boolean(v)))));
        }
      }, {
        key: "_renderMenuItems",
        value: function _renderMenuItems(e) {
          var _this$props8 = this.props,
              t = _this$props8.wasChanges,
              n = _this$props8.isProcessing,
              s = _this$props8.chartId,
              l = _this$props8.onSaveChartFromMenu,
              r = _this$props8.onRenameChart,
              h = _this$props8.onLoadChart,
              c = _this$props8.onNewChart,
              d = _this$props8.isAutoSaveEnabled,
              v = _this$props8.autoSaveId,
              m = _this$props8.sharingId,
              p = _this$props8.onAutoSaveChanged,
              g = _this$props8.isSharingEnabled,
              b = _this$props8.onSharingChanged,
              C = _this$props8.layoutItems,
              _ = _this$props8.onExportData,
              f = _this$props8.isAuthenticated,
              y = e ? w.multilineLabelWithIconAndToolboxTheme : _t,
              E = e ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Mod + 83),
              M = e ? void 0 : o.t(null, {
            context: "hotkey"
          }, a(14229)),
              T = [];
          return T.push(i.createElement(ie.PopupMenuItem, {
            key: "save",
            isDisabled: Boolean(n || !t && s),
            label: wt,
            onClick: l,
            shortcut: E,
            labelRowClassName: u(e && pt.popupItemRowTabletSmall),
            theme: y,
            "data-name": "save-load-menu-item-save"
          })), void 0 !== s && T.push(i.createElement(ie.PopupMenuItem, {
            key: "rename",
            icon: void 0,
            label: (0, dt.appendEllipsis)(o.t(null, void 0, a(35038))),
            onClick: r,
            labelRowClassName: u(e && pt.popupItemRowTabletSmall),
            theme: y,
            "data-name": "save-load-menu-item-rename"
          }), i.createElement(ie.PopupMenuItem, {
            key: "save-as",
            icon: void 0,
            label: (0, dt.appendEllipsis)(ft),
            onClick: this._handleSaveAsClick,
            labelRowClassName: u(e && pt.popupItemRowTabletSmall),
            theme: y,
            "data-name": "save-load-menu-item-clone"
          })), T.push(i.createElement(S.PopupMenuSeparator, {
            key: "all-layouts-separator"
          }), i.createElement(ie.PopupMenuItem, {
            key: "all-layouts",
            className: "js-save-load-menu-item-load-chart",
            label: (0, dt.appendEllipsis)(Ct),
            onClick: h,
            labelRowClassName: u(e && pt.popupItemRowTabletSmall),
            theme: y,
            shortcut: M,
            "data-name": "save-load-menu-item-load"
          })), T;
        }
      }, {
        key: "_trackClick",
        value: function _trackClick() {
          0;
        }
      }]);

      return Mt;
    }(i.PureComponent);

    var Tt = (0, y.registryContextType)();

    var kt =
    /*#__PURE__*/
    function (_i$PureComponent11) {
      _inherits(kt, _i$PureComponent11);

      function kt(e, t) {
        var _this22;

        _classCallCheck(this, kt);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(kt).call(this, e, t)), _this22._exportDialogPromise = null, _this22._layoutsAbortController = null, _this22._requestRecentLayouts = function () {}, _this22._handleExportData = function () {
          0;
        }, _this22._onSaveDialogVisibleChange = function (e) {
          _this22.setState({
            isSaveDialogOpened: e
          });
        }, _this22._syncState = function (e) {
          _this22.setState(e);
        }, _this22._onChangeHasChanges = function (e) {
          _this22.state.wasChanges !== e && _this22.setState({
            wasChanges: e
          });
        }, _this22._onChangeAutoSaveEnabled = function (e) {
          0;
        }, _this22._onChangeSharingEnabled = function (e) {
          _this22.setState({
            isSharingEnabled: e
          });
        }, _this22._onChangeTitle = function (e) {
          _this22.setState({
            title: e
          });
        }, _this22._onChangeId = function (e) {
          _this22.setState({
            id: e
          });
        }, _this22._onChartAboutToBeSaved = function () {
          _this22.setState({
            isProcessing: !0
          });
        }, _this22._onChartSaved = function () {
          _this22.setState({
            isProcessing: !1
          });
        }, _this22._handleAutoSaveEnabled = function (e) {
          0;
        }, _this22._handleSharingEnabled = function (e) {
          0;
        }, _this22._handleClickSave = function () {
          _this22.context.saveChartService.saveChartOrShowTitleDialog(), _this22._trackEvent("Save click");
        }, _this22._handleOpenMenu = function () {
          _this22._requestRecentLayouts();
        }, _this22._handleClickSaveFromMenu = function () {
          _this22.context.saveChartService.saveChartOrShowTitleDialog(), _this22._trackEvent("Save From Menu");
        }, _this22._handleClickClone = function () {
          _this22.context.saveChartService.cloneChart();
        }, _this22._handleClickSaveAs = function () {
          _this22.context.saveChartService.saveChartAs(), _this22._trackEvent("Make a copy");
        }, _this22._handleClickNew = function () {
          _this22._trackEvent("New chart layout");
        }, _this22._handleClickLoad = function () {
          _this22.context.loadChartService.showLoadDialog();

          _this22._trackEvent("Load chart layout");
        }, _this22._handleHotkey = function () {
          _this22.context.loadChartService.showLoadDialog();
        }, _this22._handleClickRename = function () {
          _this22.context.saveChartService.renameChart(), _this22._trackEvent("Rename");
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired,
          chartChangesWatcher: s.any.isRequired,
          saveChartService: s.any.isRequired,
          sharingChartService: s.any,
          loadChartService: s.any.isRequired
        });
        var a = t.chartWidgetCollection,
            n = t.chartChangesWatcher,
            i = t.saveChartService,
            o = t.sharingChartService;
        _this22.state = {
          isAuthenticated: window.is_authenticated,
          isProcessing: !1,
          id: a.metaInfo.id.value(),
          title: a.metaInfo.name.value(),
          wasChanges: n.hasChanges(),
          iconHovered: !1,
          isSaveDialogOpened: !1
        };
        return _this22;
      }

      _createClass(kt, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props9 = this.props,
              e = _this$props9.chartSaver,
              t = _this$props9.isFake,
              n = _this$props9.stateSyncEmitter,
              _this$context7 = this.context,
              i = _this$context7.chartWidgetCollection,
              s = _this$context7.chartChangesWatcher,
              l = _this$context7.saveChartService,
              r = _this$context7.sharingChartService;
          t ? n.on("change", this._syncState) : (s.getOnChange().subscribe(this, this._onChangeHasChanges), i.metaInfo.name.subscribe(this._onChangeTitle), i.metaInfo.id.subscribe(this._onChangeId), this._hotkeys = (0, ot.createGroup)({
            desc: "Save/Load"
          }), this._hotkeys.add({
            desc: o.t(null, void 0, a(75687)),
            handler: this._handleHotkey,
            hotkey: 190
          }), e.chartSaved().subscribe(this, this._onChartSaved), e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.subscribe(this, this._onLoginStateChange), this.context.saveChartService.getCreateController().visible().subscribe(this._onSaveDialogVisibleChange));
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          this.props.isFake || t !== this.state && this.props.stateSyncEmitter.emit("change", this.state);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e;
          var _this$props10 = this.props,
              t = _this$props10.chartSaver,
              a = _this$props10.isFake,
              n = _this$props10.stateSyncEmitter,
              _this$context8 = this.context,
              i = _this$context8.chartWidgetCollection,
              s = _this$context8.chartChangesWatcher,
              o = _this$context8.saveChartService,
              l = _this$context8.sharingChartService;
          a ? n.off("change", this._syncState) : (s.getOnChange().unsubscribe(this, this._onChangeHasChanges), i.metaInfo.name.unsubscribe(this._onChangeTitle), i.metaInfo.id.unsubscribe(this._onChangeId), (0, ne.ensureDefined)(this._hotkeys).destroy(), t.chartSaved().unsubscribe(this, this._onChartSaved), t.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.unsubscribe(this, this._onLoginStateChange), null === (e = this._layoutsAbortController) || void 0 === e || e.abort(), this.context.saveChartService.getCreateController().visible().unsubscribe(this._onSaveDialogVisibleChange));
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props11 = this.props,
              e = _this$props11.isReadOnly,
              t = _this$props11.displayMode,
              a = _this$props11.id,
              n = _this$props11.isFake,
              _this$state6 = this.state,
              s = _this$state6.isProcessing,
              o = _this$state6.isAuthenticated,
              l = _this$state6.title,
              r = _this$state6.id,
              h = _this$state6.wasChanges,
              c = _this$state6.isAutoSaveEnabled,
              d = _this$state6.isSharingEnabled,
              u = _this$state6.recentLayouts,
              v = _this$state6.isSaveDialogOpened,
              m = {
            displayMode: t,
            isReadOnly: e,
            isAuthenticated: o,
            isProcessing: s,
            wasChanges: h,
            title: l,
            id: a,
            isSaveDialogOpened: v,
            chartId: null !== r ? r : void 0,
            dataNameSaveMenu: n ? void 0 : "save-load-menu",
            onCloneChart: this._handleClickClone,
            onSaveChart: this._handleClickSave,
            onSaveChartFromMenu: this._handleClickSaveFromMenu,
            onRenameChart: this._handleClickRename,
            onSaveAsChart: this._handleClickSaveAs,
            onLoadChart: this._handleClickLoad
          };
          return i.createElement(_.MatchMedia, {
            rule: f.DialogBreakpoints.TabletSmall
          }, function (e) {
            return i.createElement(Mt, _objectSpread({}, m, {
              isTabletSmall: e
            }));
          });
        }
      }, {
        key: "_onLoginStateChange",
        value: function _onLoginStateChange() {
          this.setState({
            isAuthenticated: window.is_authenticated
          });
        }
      }, {
        key: "_trackEvent",
        value: function _trackEvent(e) {
          0;
        }
      }]);

      return kt;
    }(i.PureComponent);

    kt.contextType = Tt;
    var It = a(53166),
        xt = a(34928),
        At = a(79982);
    var Rt = new xt.DateTimeFormatter({
      dateTimeSeparator: "_",
      timeFormat: "%h-%m-%s"
    }),
        Nt = {
      takeSnapshot: o.t(null, void 0, a(88513))
    },
        Ft = (0, y.registryContextType)();
    var Ot = o.t(null, void 0, a(90879));

    function Ht(e, t, a) {
      return function _callee2(e, t, a) {
        var n, _i3, _s2;

        return regeneratorRuntime.async(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                n = URL.createObjectURL(new Blob(["<!doctype html><html style=\"background-color:".concat(getComputedStyle(document.documentElement).backgroundColor, "\"><head><meta charset=\"utf-8\"><title>").concat(Ot, "</title></head><body style=\"background-color:").concat(getComputedStyle(document.body).backgroundColor, "\"></body></html>")], {
                  type: "text/html"
                }));
                _context2.prev = 1;
                _i3 = open(n, t, a);

                if (_i3) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("cound not open a new tab");

              case 5:
                _context2.next = 7;
                return regeneratorRuntime.awrap(e["catch"](function () {}));

              case 7:
                _s2 = _context2.sent;
                void 0 !== _s2 ? _i3.location.replace(_s2) : _i3.close();

              case 9:
                _context2.prev = 9;
                URL.revokeObjectURL(n);
                return _context2.finish(9);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, null, null, [[1,, 9, 12]]);
      }(e, t, a);
    }

    var Lt = a(65446),
        Dt = a(65939),
        Pt = a(64618);

    function Bt(e) {
      var t = u(e.isLoading && Pt.hidden),
          a = u(!e.isLoading && Pt.hidden);
      return i.createElement("div", null, i.createElement("span", {
        className: t
      }, e.children), i.createElement("span", {
        className: a
      }, i.createElement(ce.Loader, null)));
    }

    var Ut = a(76974),
        Wt = a(84502),
        zt = a(1457),
        Vt = a(23595),
        Zt = a(29414),
        Kt = a(99280),
        Qt = a(18369);
    var qt = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, Qt);

    function jt(e) {
      var t = e.serverSnapshot,
          n = e.clientSnapshot,
          s = e.hideShortcuts,
          _ref24 = (0, i.useState)(!1),
          _ref25 = _slicedToArray(_ref24, 2),
          l = _ref25[0],
          r = _ref25[1],
          _ref26 = (0, i.useState)(!1),
          _ref27 = _slicedToArray(_ref26, 2),
          h = _ref27[0],
          c = _ref27[1],
          _ref28 = (0, i.useState)(!1),
          _ref29 = _slicedToArray(_ref28, 2),
          d = _ref29[0],
          v = _ref29[1],
          _ref30 = (0, i.useState)(!1),
          _ref31 = _slicedToArray(_ref30, 2),
          m = _ref31[0],
          p = _ref31[1],
          g = (0, Ut.useIsMounted)(),
          b = (0, i.useCallback)(function _callee3() {
        var e, t, a, _ref32, _n3;

        return regeneratorRuntime.async(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                t = n(), a = t.then(function (e) {
                  return new Promise(function (t) {
                    return e.canvas.toBlob(function (e) {
                      null !== e && t(e);
                    });
                  });
                });
                _context3.prev = 1;
                _context3.next = 4;
                return regeneratorRuntime.awrap((0, Lt.writePromiseUsingApi)(a, "image/png"));

              case 4:
                me.emit("onClientScreenshotCopiedToClipboard");
                _context3.next = 14;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                _context3.next = 11;
                return regeneratorRuntime.awrap(t);

              case 11:
                _ref32 = _context3.sent;
                _n3 = _ref32.canvas;
                null === (e = window.open()) || void 0 === e || e.document.write("<img width=\"100%\" src=\"".concat(_n3.toDataURL(), "\"/>"));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, [[1, 7]]);
      }, [n]),
          C = (0, i.useCallback)(function _callee4() {
        var e, t;
        return regeneratorRuntime.async(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return regeneratorRuntime.awrap(n());

              case 2:
                e = _context4.sent;
                _context4.next = 5;
                return regeneratorRuntime.awrap(function (e) {
                  return new Promise(function (t) {
                    try {
                      e.canvas.toBlob(function (e) {
                        if (null === e) throw new Error("Unable to generate blob");
                        t(URL.createObjectURL(e));
                      });
                    } catch (a) {
                      t(e.canvas.toDataURL());
                    }
                  });
                }(e));

              case 5:
                t = _context4.sent;
                t && (0, Dt.downloadFile)("".concat(e.name, ".png"), t);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        });
      }, [n]),
          S = function S(e) {
        return Ht(e.then(function (e) {
          return e.imageUrl;
        }));
      },
          _ = (0, i.useCallback)(function _callee5() {
        var e,
            a,
            _e6,
            _args5 = arguments;

        return regeneratorRuntime.async(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                e = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : !1;
                a = t();
                _context5.prev = 2;

                if (!e) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 6;
                return regeneratorRuntime.awrap(S(a));

              case 6:
                _context5.next = 12;
                break;

              case 8:
                _e6 = a.then(function (e) {
                  return new Blob([e.imageUrl], {
                    type: "text/plain"
                  });
                });
                _context5.next = 11;
                return regeneratorRuntime.awrap((0, Lt.writePromiseUsingApi)(_e6, "text/plain"));

              case 11:
                me.emit("onServerScreenshotCopiedToClipboard");

              case 12:
                return _context5.abrupt("return", !0);

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](2);
                return _context5.abrupt("return", (S(a), !0));

              case 18:
                _context5.prev = 18;
                g.current && (c(!1), r(!1), (0, Ue.globalCloseMenu)());
                return _context5.finish(18);

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, null, null, [[2, 15, 18, 21]]);
      }, [t]),
          f = ((0, i.useCallback)(function _callee6() {
        var e, _t8, _a4;

        return regeneratorRuntime.async(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                e = t();
                _context6.prev = 1;
                _t8 = 720, _a4 = e.then(function (e) {
                  return new Blob(["<img width=\"".concat(_t8, "\" loading=\"lazy\" src=\"").concat(e.imageUrl, "\"/><p><a href=\"https://www.tradingview.com\">").concat(e.symbol, " chart</a> by TradingView</p>")], {
                    type: "text/plain"
                  });
                });
                _context6.next = 5;
                return regeneratorRuntime.awrap((0, Lt.writePromiseUsingApi)(_a4, "text/plain"));

              case 5:
                me.emit("onServerScreenshotEmbedCodeCopiedToClipboard");
                return _context6.abrupt("return", !0);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                return _context6.abrupt("return", (S(e), !0));

              case 12:
                _context6.prev = 12;
                g.current && (v(!1), (0, Ue.globalCloseMenu)());
                return _context6.finish(12);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, null, null, [[1, 9, 12, 15]]);
      }, [t]), (0, i.useCallback)(function _callee7() {
        var _ref33, _ref34, e, n;

        return regeneratorRuntime.async(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                p(!0);
                _context7.next = 3;
                return regeneratorRuntime.awrap(Promise.all([a.e(4665).then(a.bind(a, 65692)), t()]));

              case 3:
                _ref33 = _context7.sent;
                _ref34 = _slicedToArray(_ref33, 2);
                e = _ref34[0];
                n = _ref34[1];
                e.Twitter.shareSnapshotInstantly(n.symbol, n.imageUrl), g.current && (p(!1), (0, Ue.globalCloseMenu)());

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        });
      }, [t]));

      return i.createElement(i.Fragment, null, i.createElement(ve.ToolWidgetMenuSummary, null, o.t(null, void 0, a(45888))), i.createElement(ie.PopupMenuItem, {
        "data-name": "save-chart-image",
        label: o.t(null, void 0, a(39011)),
        icon: Vt,
        onClick: C,
        shortcut: s ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Mod + Y.Modifiers.Alt + 83),
        theme: qt
      }), i.createElement(ie.PopupMenuItem, {
        "data-name": "copy-chart-image",
        label: o.t(null, void 0, a(43001)),
        icon: zt,
        onClick: b,
        shortcut: s ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Mod + Y.Modifiers.Shift + 83),
        theme: qt
      }), i.createElement(ie.PopupMenuItem, {
        "data-name": "copy-link-to-the-chart-image",
        label: i.createElement(Bt, {
          isLoading: l
        }, o.t(null, void 0, a(7367))),
        icon: Zt,
        onClick: function onClick() {
          r(!0), _(!1);
        },
        dontClosePopup: !0,
        isDisabled: l,
        shortcut: s ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Alt + 83),
        className: u(l && Qt.loading),
        theme: qt
      }), !1, i.createElement(ie.PopupMenuItem, {
        "data-name": "open-image-in-new-tab",
        label: i.createElement(Bt, {
          isLoading: h
        }, o.t(null, void 0, a(38543))),
        icon: Kt,
        onClick: function onClick() {
          c(!0), _(!0);
        },
        dontClosePopup: !0,
        isDisabled: h,
        className: u(h && Qt.loading),
        theme: qt
      }), i.createElement(ie.PopupMenuItem, {
        "data-name": "tweet-chart-image",
        label: i.createElement(Bt, {
          isLoading: m
        }, o.t(null, void 0, a(99746))),
        icon: Wt,
        onClick: f,
        dontClosePopup: !0,
        isDisabled: m,
        className: u(m && Qt.loading),
        theme: qt
      }));
    }

    var Gt = a(84015);

    function Yt(e) {
      var _ref35 = (0, i.useState)(!1),
          _ref36 = _slicedToArray(_ref35, 2),
          t = _ref36[0],
          a = _ref36[1],
          n = (0, Ut.useIsMounted)(),
          s = (0, i.useCallback)(function _callee8() {
        return regeneratorRuntime.async(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                a(!0);
                _context8.next = 3;
                return regeneratorRuntime.awrap(e.serverSnapshot());

              case 3:
                n.current && a(!1);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        });
      }, [e.serverSnapshot]);

      return i.createElement(P.ToolWidgetButton, {
        id: e.id,
        className: e.className,
        isDisabled: t,
        onClick: s,
        title: e.tooltip,
        icon: e.icon
      });
    }

    var Xt = a(72644);
    var $t = (Jt = function Jt(e) {
      return (0, Gt.isOnMobileAppPage)("any") ? i.createElement(Yt, _objectSpread({}, e, {
        icon: Xt
      })) : i.createElement(d.ToolbarMenuButton, {
        content: i.createElement(P.ToolWidgetButton, {
          tag: "div",
          id: e.id,
          className: e.className,
          icon: Xt
        }),
        drawerPosition: "Bottom",
        drawerBreakpoint: f.DialogBreakpoints.TabletSmall,
        arrow: !1,
        onClick: function onClick() {},
        tooltip: e.tooltip
      }, i.createElement(jt, _objectSpread({}, e)));
    }, (ea =
    /*#__PURE__*/
    function (_i$PureComponent12) {
      _inherits(ea, _i$PureComponent12);

      function ea(e, t) {
        var _this23;

        _classCallCheck(this, ea);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(ea).call(this, e, t)), _this23._clientSnapshot = function _callee9() {
          var e;
          return regeneratorRuntime.async(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  e = _this23.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol();
                  _context9.next = 3;
                  return regeneratorRuntime.awrap(_this23.context.chartWidgetCollection.clientSnapshot());

                case 3:
                  _context9.t0 = _context9.sent;
                  _context9.t1 = "".concat((0, At.shortName)(e), "_").concat(Rt.formatLocal(new Date()));
                  return _context9.abrupt("return", {
                    canvas: _context9.t0,
                    name: _context9.t1
                  });

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          });
        }, _this23._serverSnapshot = function _callee10() {
          var e, t, a;
          return regeneratorRuntime.async(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  e = _this23.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol();
                  _context10.next = 3;
                  return regeneratorRuntime.awrap(_this23.context.chartWidgetCollection.takeScreenshot());

                case 3:
                  t = _context10.sent;
                  a = n.enabled("charting_library_base") && void 0 !== _this23.context.snapshotUrl ? t : (0, It.convertImageNameToUrl)(t);
                  return _context10.abrupt("return", {
                    symbol: (0, At.shortName)(e),
                    imageUrl: a
                  });

                case 6:
                case "end":
                  return _context10.stop();
              }
            }
          });
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired
        });
        return _this23;
      }

      _createClass(ea, [{
        key: "render",
        value: function render() {
          var _this$props12 = this.props,
              e = _this$props12.className,
              t = _this$props12.id;
          return i.createElement(Jt, {
            id: t,
            className: e,
            tooltip: Nt.takeSnapshot,
            serverSnapshot: this._serverSnapshot,
            clientSnapshot: this._clientSnapshot
          });
        }
      }]);

      return ea;
    }(i.PureComponent)).contextType = Ft, ea);
    var Jt,
        ea,
        ta = a(31330),
        aa = a(39362),
        na = a(13702);

    var ia =
    /*#__PURE__*/
    function () {
      function ia() {
        _classCallCheck(this, ia);
      }

      _createClass(ia, [{
        key: "show",
        value: function show(e) {
          var _e7, _t9;

          return regeneratorRuntime.async(function show$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!(null !== ia._provider)) {
                    _context11.next = 5;
                    break;
                  }

                  _context11.next = 3;
                  return regeneratorRuntime.awrap(ia._provider.getSymbol());

                case 3:
                  _e7 = _context11.sent;
                  return _context11.abrupt("return", (l.linking.symbol.setValue(_e7.symbol), _e7));

                case 5:
                  if (!ia._currentShowingInstance) {
                    _context11.next = 7;
                    break;
                  }

                  throw new DOMException("SymbolSearchUI is already shown", "InvalidStateError");

                case 7:
                  _context11.prev = 7;
                  ia._currentShowingInstance = this, ia.preload();
                  _context11.next = 11;
                  return regeneratorRuntime.awrap(ia._implementation);

                case 11:
                  _t9 = _context11.sent;
                  return _context11.abrupt("return", ((0, ne.assert)(null !== _t9), new Promise(function (a) {
                    _t9.showDefaultSearchDialog(_objectSpread({}, e, {
                      onSearchComplete: function onSearchComplete(e) {
                        a({
                          symbol: e
                        });
                      }
                    }));
                  })));

                case 13:
                  _context11.prev = 13;
                  ia._currentShowingInstance = null;
                  return _context11.finish(13);

                case 16:
                case "end":
                  return _context11.stop();
              }
            }
          }, null, this, [[7,, 13, 16]]);
        }
      }], [{
        key: "setProvider",
        value: function setProvider(e) {
          this._provider = e;
        }
      }, {
        key: "preload",
        value: function preload() {
          null === this._provider && null === this._implementation && (this._implementation = (0, na.loadNewSymbolSearch)());
        }
      }]);

      return ia;
    }();

    ia._currentShowingInstance = null, ia._provider = null, ia._implementation = null;
    var sa = a(29142),
        oa = a(25882);
    var la = (0, rt.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, oa);

    var ra =
    /*#__PURE__*/
    function (_i$PureComponent13) {
      _inherits(ra, _i$PureComponent13);

      function ra(e) {
        var _this24;

        _classCallCheck(this, ra);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(ra).call(this, e)), _this24._openSymbolSearchDialog = function _callee11(e) {
          return regeneratorRuntime.async(function _callee11$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (!((0, Y.modifiersFromEvent)(e) !== Y.Modifiers.Alt)) {
                    _context12.next = 12;
                    break;
                  }

                  if (_this24.state.isOpened) {
                    _context12.next = 10;
                    break;
                  }

                  _context12.prev = 2;
                  (0, V.trackEvent)("GUI", "SS", "main search");
                  _context12.next = 6;
                  return regeneratorRuntime.awrap(new ia().show({
                    onClose: function onClose() {
                      _this24.setState({
                        isOpened: !1
                      });
                    },
                    onOpen: function onOpen() {
                      _this24.setState({
                        isOpened: !0
                      });
                    },
                    shouldReturnFocus: (0, Z.isKeyboardClick)(e),
                    defaultValue: _this24._isSpread(_this24.state.symbol) ? _this24.state.symbol : _this24.state.shortName,
                    showSpreadActions: (0, ta.canShowSpreadActions)() && _this24.props.isActionsVisible,
                    source: "searchBar",
                    footer: Re.mobiletouch ? void 0 : i.createElement(aa.SymbolSearchDialogFooter, null, o.t(null, void 0, a(20987)))
                  }));

                case 6:
                  _context12.next = 10;
                  break;

                case 8:
                  _context12.prev = 8;
                  _context12.t0 = _context12["catch"](2);

                case 10:
                  _context12.next = 13;
                  break;

                case 12:
                  (0, lt.getClipboard)().writeText(_this24.state.symbol);

                case 13:
                case "end":
                  return _context12.stop();
              }
            }
          }, null, null, [[2, 8]]);
        }, _this24._isSpread = function (e) {
          return !1;
        }, _this24._onSymbolChanged = function () {
          var e = l.linking.symbol.value();

          _this24.setState({
            symbol: e,
            shortName: ha()
          });
        }, _this24.state = {
          symbol: l.linking.symbol.value(),
          shortName: ha(),
          isOpened: !1
        };
        return _this24;
      }

      _createClass(ra, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          l.linking.symbol.subscribe(this._onSymbolChanged), l.linking.seriesShortSymbol.subscribe(this._onSymbolChanged), ia.preload();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          l.linking.symbol.unsubscribe(this._onSymbolChanged), l.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props13 = this.props,
              e = _this$props13.id,
              t = _this$props13.className;
          return i.createElement(g.ToolbarButton, {
            id: e,
            className: v()(t, n.enabled("uppercase_instrument_names") && oa.uppercase, oa.smallLeftPadding),
            theme: la,
            icon: sa,
            isOpened: this.state.isOpened,
            text: this.state.shortName,
            onClick: this._openSymbolSearchDialog,
            tooltip: o.t(null, void 0, a(75905))
          });
        }
      }, {
        key: "_updateQuotes",
        value: function _updateQuotes(e) {
          return regeneratorRuntime.async(function _updateQuotes$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                case "end":
                  return _context13.stop();
              }
            }
          });
        }
      }]);

      return ra;
    }(i.PureComponent);

    function ha() {
      return l.linking.seriesShortSymbol.value() || l.linking.symbol.value() || "";
    }

    var ca = a(5145);

    function da(e) {
      var t;

      var a = e.className,
          n = e.item,
          s = e.onApply,
          _ref37 = (0, D.useRovingTabindexElement)(null),
          _ref38 = _slicedToArray(_ref37, 2),
          o = _ref38[0],
          l = _ref38[1];

      return I.PLATFORM_ACCESSIBILITY_ENABLED ? i.createElement("button", {
        type: "button",
        className: u(a, ca.item, ca.accessible, "apply-common-tooltip"),
        onClick: r,
        "data-tooltip": n.name,
        "aria-label": n.name,
        tabIndex: l,
        ref: o
      }, i.createElement("div", {
        className: ca.round
      }, null !== (t = function (e) {
        var t;
        var a = Intl.Segmenter;

        if (a) {
          var _n4 = new a(void 0, {
            granularity: "grapheme"
          }),
              _n4$segment = _n4.segment(e),
              _n4$segment2 = _slicedToArray(_n4$segment, 1),
              _n4$segment2$ = _n4$segment2[0];

          _n4$segment2$ = _n4$segment2$ === void 0 ? {
            segment: null
          } : _n4$segment2$;
          var _i4 = _n4$segment2$.segment;
          return null !== (t = null == _i4 ? void 0 : _i4.toUpperCase()) && void 0 !== t ? t : null;
        }

        {
          var _t10 = e.codePointAt(0);

          return _t10 ? String.fromCodePoint(_t10).toUpperCase() : null;
        }
      }(n.name)) && void 0 !== t ? t : " ")) : i.createElement("div", {
        className: u(a, ca.item, "apply-common-tooltip"),
        onClick: r,
        "data-tooltip": n.name
      }, i.createElement("div", {
        className: ca.round
      }, n.name.length > 0 ? n.name[0].toUpperCase() : " "));

      function r(e) {
        e.stopPropagation(), s(n);
      }
    }

    var ua = a(39344),
        va = a(92710);

    function ma(e) {
      return i.createElement("div", {
        className: u(va.description, e.className)
      }, e.children);
    }

    var pa = a(48261);
    var ga = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
      labelRow: pa.labelRow,
      toolbox: pa.toolbox,
      item: pa.titleItem
    }),
        ba = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
      labelRow: pa.labelRow,
      toolbox: pa.toolbox,
      item: pa.titleItemTabletSmall
    }),
        Ca = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
      item: pa.item
    }),
        Sa = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
      item: pa.itemTabletSmall
    });

    function _a(e) {
      var t = e.className,
          a = e.item,
          n = e.onApply,
          s = e.onRemove,
          o = e.onFavor,
          l = e.favorite,
          r = e.isFavoritingAllowed,
          h = e.isTabletSmall,
          _ref39 = (0, Ae.useHover)(),
          _ref40 = _slicedToArray(_ref39, 2),
          c = _ref40[0],
          d = _ref40[1],
          u = a.meta_info,
          m = u ? (0, ua.descriptionString)(u.indicators) : void 0,
          p = h ? ba : ga,
          g = h ? Sa : Ca,
          b = (0, i.useCallback)(function () {
        return n(a);
      }, [n, a]),
          C = (0, i.useCallback)(function (e) {
        return s(a, e);
      }, [s, a]),
          S = (0, i.useCallback)(function () {
        o && o(a);
      }, [o, a]);

      return i.createElement("div", _objectSpread({}, d, {
        className: v()(t, pa.wrap),
        "data-name": a.name,
        "data-id": a.id,
        "data-is-default": Boolean(a.is_default)
      }), i.createElement(A.AccessibleMenuItem, {
        theme: p,
        label: a.name,
        labelRowClassName: v()(h && pa.itemLabelTabletSmall),
        isHovered: c,
        showToolboxOnHover: !l && !c,
        showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
        onClick: b,
        toolbox: i.createElement(i.Fragment, null, !a.is_default && i.createElement(Ne.MenuRemoveButton, {
          key: "remove",
          hidden: !Re.touch && !c,
          onClick: C,
          className: pa.remove
        }), Boolean(o) && r && i.createElement(R.MenuFavoriteButton, {
          key: "favorite",
          isFilled: Boolean(l),
          onClick: S
        }))
      }), m && i.createElement(ie.PopupMenuItem, {
        theme: g,
        label: i.createElement(ma, {
          className: v()(pa.description, h && pa.descriptionTabletSmall)
        }, m),
        onClick: b,
        isHovered: c
      }));
    }

    var fa = a(53707),
        wa = a(85013);
    var ya = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, wa);

    function Ea(e) {
      var t = e.onClick,
          n = e.isTabletSmall,
          s = e.className;
      return i.createElement(A.AccessibleMenuItem, {
        theme: ya,
        className: v()(s, wa.wrap),
        label: i.createElement("div", {
          className: wa.titleWrap
        }, i.createElement("div", {
          className: v()(wa.title, n && wa.titleTabletSmall)
        }, i.createElement(c.Icon, {
          className: wa.icon,
          icon: fa
        }), i.createElement("div", {
          className: wa.text
        }, (0, dt.appendEllipsis)(o.t(null, void 0, a(92093)))))),
        onClick: t
      });
    }

    var Ma = a(37968),
        Ta = a(64706);
    var ka = i.createContext(null);
    var Ia = a(36001);

    function xa(e) {
      var t = e.templates,
          a = e.favorites,
          n = e.onTemplateSave,
          s = e.onTemplateRemove,
          o = e.onTemplateSelect,
          l = e.onTemplateFavorite,
          r = e.isTabletSmall,
          h = e.isLoading,
          c = (0, i.useMemo)(function () {
        return t.filter(function (e) {
          return e.is_default;
        });
      }, [t]),
          d = (0, i.useMemo)(function () {
        return t.filter(function (e) {
          return !e.is_default;
        });
      }, [t]),
          u = (0, i.useMemo)(function () {
        return new Set(a.map(function (e) {
          return e.name;
        }));
      }, [a]),
          m = (0, i.useContext)(ka),
          p = (0, i.useContext)(Ta.MenuContext),
          g = (0, Ma.useForceUpdate)();
      (0, i.useEffect)(function () {
        if (null !== m) {
          var _e8 = {};
          return m.getOnChange().subscribe(_e8, function () {
            g(), p && p.update();
          }), function () {
            return m.getOnChange().unsubscribeAll(_e8);
          };
        }

        return function () {};
      }, []);

      var b = function b(e) {
        return i.createElement(_a, {
          key: e.name,
          item: e,
          isFavoritingAllowed: Boolean(l),
          favorite: u.has(e.name),
          onApply: o,
          onFavor: l,
          onRemove: s,
          isTabletSmall: r
        });
      };

      return i.createElement("div", {
        className: v()(Ia.menu, r && Ia.menuSmallTablet)
      }, i.createElement(Ea, {
        onClick: n,
        isTabletSmall: r
      }), h && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(ue, null)), !h && (r ? i.createElement(Aa, {
        defaults: c,
        customs: d,
        render: b
      }) : i.createElement(Ra, {
        defaults: c,
        customs: d,
        render: b,
        state: m
      })));
    }

    function Aa(e) {
      var t = e.defaults,
          n = e.customs,
          s = e.render;
      return i.createElement(i.Fragment, null, n.length > 0 && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(ve.ToolWidgetMenuSummary, {
        className: Ia.menuItemHeaderTabletSmall
      }, o.t(null, void 0, a(38554))), n.map(s)), t.length > 0 && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(ve.ToolWidgetMenuSummary, {
        className: Ia.menuItemHeaderTabletSmall
      }, o.t(null, void 0, a(43399))), t.map(s)));
    }

    function Ra(e) {
      var t = e.defaults,
          n = e.customs,
          s = e.render,
          l = e.state;
      return i.createElement(i.Fragment, null, n.length > 0 && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(ve.ToolWidgetMenuSummary, {
        className: Ia.menuItemHeader
      }, o.t(null, void 0, a(38554))), n.map(s)), n.length > 0 && t.length > 0 && l && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(Ve, {
        summary: o.t(null, void 0, a(43399)),
        open: !l.get().defaultsCollapsed,
        onStateChange: function onStateChange(e) {
          return l.set({
            defaultsCollapsed: !e
          });
        }
      }, t.map(s))), 0 === n.length && t.length > 0 && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), i.createElement(ve.ToolWidgetMenuSummary, {
        className: Ia.menuItemHeader
      }, o.t(null, void 0, a(43399))), t.map(s)));
    }

    var Na = a(97145);

    var Fa =
    /*#__PURE__*/
    function () {
      function Fa(e, t) {
        var _this25 = this;

        _classCallCheck(this, Fa);

        var a, i;
        this._isFavoriteEnabled = n.enabled("items_favoriting"), this.handleFavorTemplate = function (e) {
          if (!_this25._isFavoriteEnabled) return;
          var t = e.name;
          _this25._isTemplateFavorite(t) ? _this25._removeFavoriteTemplate(t) : _this25._addFavoriteTemplate(t);
        }, this.handleDropdownOpen = function () {
          _this25._setState({
            isLoading: !0
          }), _this25._studyTemplates.invalidate(), _this25._studyTemplates.refreshStudyTemplateList(function () {
            return _this25._setState({
              isLoading: !1
            });
          });
        }, this.handleApplyTemplate = function (e) {
          _this25._studyTemplates.applyTemplate(e.name);
        }, this.handleRemoveTemplate = function (e, t) {
          _this25._studyTemplates.deleteStudyTemplate(e.name, t);
        }, this.handleSaveTemplate = function () {
          _this25._studyTemplates.showSaveAsDialog();
        }, this._studyTemplates = e, this._favoriteStudyTemplatesService = t;

        var s = (null === (a = this._favoriteStudyTemplatesService) || void 0 === a ? void 0 : a.get()) || [],
            o = this._studyTemplates.list();

        this._state = new Na.WatchedValue({
          isLoading: !1,
          studyTemplatesList: o,
          favorites: s
        }), this._studyTemplates.getOnChange().subscribe(this, this._handleTemplatesChange), this._studyTemplates.refreshStudyTemplateList(), this._isFavoriteEnabled && (null === (i = this._favoriteStudyTemplatesService) || void 0 === i || i.getOnChange().subscribe(this, this._handleFavoritesChange));
      }

      _createClass(Fa, [{
        key: "destroy",
        value: function destroy() {
          var e;
          this._studyTemplates.getOnChange().unsubscribe(this, this._handleTemplatesChange), this._isFavoriteEnabled && (null === (e = this._favoriteStudyTemplatesService) || void 0 === e || e.getOnChange().unsubscribe(this, this._handleFavoritesChange));
        }
      }, {
        key: "state",
        value: function state() {
          return this._state.readonly();
        }
      }, {
        key: "_setState",
        value: function _setState(e) {
          this._state.setValue(_objectSpread({}, this._state.value(), {}, e));
        }
      }, {
        key: "_handleTemplatesChange",
        value: function _handleTemplatesChange() {
          this._setState({
            studyTemplatesList: this._studyTemplates.list()
          });
        }
      }, {
        key: "_handleFavoritesChange",
        value: function _handleFavoritesChange(e) {
          this._isFavoriteEnabled && this._setState({
            favorites: e
          });
        }
      }, {
        key: "_removeFavoriteTemplate",
        value: function _removeFavoriteTemplate(e) {
          var t;

          var _this$_state$value = this._state.value(),
              a = _this$_state$value.favorites;

          null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set(a.filter(function (t) {
            return t !== e;
          }));
        }
      }, {
        key: "_addFavoriteTemplate",
        value: function _addFavoriteTemplate(e) {
          var t;

          var _this$_state$value2 = this._state.value(),
              a = _this$_state$value2.favorites;

          null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set([].concat(_toConsumableArray(a), [e]));
        }
      }, {
        key: "_isTemplateFavorite",
        value: function _isTemplateFavorite(e) {
          var _this$_state$value3 = this._state.value(),
              t = _this$_state$value3.favorites;

          return t.includes(e);
        }
      }]);

      return Fa;
    }();

    var Oa = a(21233),
        Ha = a(70760);
    var La = (0, y.registryContextType)();

    var Da =
    /*#__PURE__*/
    function (_i$PureComponent14) {
      _inherits(Da, _i$PureComponent14);

      function Da(e, t) {
        var _this26;

        _classCallCheck(this, Da);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(Da).call(this, e, t)), _this26._updateState = function (e) {
          _this26.setState(_objectSpread({}, e, {
            isActive: _this26.state.isActive
          }));
        }, _this26._handleApplyTemplate = function (e) {
          _this26._handleClose(), _this26._model.handleApplyTemplate(e);
        }, _this26._handleRemoveTemplate = function (e, t) {
          _this26._handleClose(), _this26._model.handleRemoveTemplate(e, t);
        }, _this26._handleClose = function () {
          _this26._handleToggleDropdown(!1);
        }, _this26._handleToggleDropdown = function (e) {
          var t = _this26.state.isActive,
              a = "boolean" == typeof e ? e : !t;

          _this26.setState({
            isActive: a
          });
        }, (0, y.validateRegistry)(t, {
          favoriteStudyTemplatesService: s.any,
          studyTemplates: s.any.isRequired,
          templatesMenuViewStateService: s.any
        });
        var a = t.favoriteStudyTemplatesService,
            n = t.studyTemplates;
        _this26._model = new Fa(n, a), _this26.state = _objectSpread({}, _this26._model.state().value(), {
          isActive: !1
        });
        return _this26;
      }

      _createClass(Da, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._model.state().subscribe(this._updateState);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._model.state().unsubscribe(this._updateState), this._model.destroy();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state7 = this.state,
              e = _this$state7.studyTemplatesList,
              t = _this$state7.favorites,
              _this$props14 = this.props,
              a = _this$props14.isShownQuicks,
              n = _this$props14.className,
              s = _this$props14.displayMode,
              o = _this$props14.id;
          return i.createElement(ka.Provider, {
            value: this.context.templatesMenuViewStateService || null
          }, i.createElement(Pa, {
            id: o,
            className: n,
            mode: s,
            templates: e,
            favorites: t,
            onMenuOpen: this._model.handleDropdownOpen,
            onTemplateFavorite: a ? this._model.handleFavorTemplate : void 0,
            onTemplateSelect: this._handleApplyTemplate,
            onTemplateRemove: this._handleRemoveTemplate,
            onTemplateSave: this._model.handleSaveTemplate
          }));
        }
      }]);

      return Da;
    }(i.PureComponent);

    function Pa(e) {
      var _v;

      var t = e.id,
          n = e.className,
          s = e.mode,
          l = e.favorites,
          r = e.templates,
          h = e.isMenuOpen,
          c = e.onTemplateSelect,
          u = e.onTemplateSave,
          m = e.onTemplateFavorite,
          g = e.onTemplateRemove,
          b = (0, i.useRef)(null),
          C = (0, i.useRef)(null),
          S = v()(n, Ha.wrap, (_v = {}, _defineProperty(_v, Ha.full, "full" === s), _defineProperty(_v, Ha.medium, "medium" === s), _v)),
          w = r.filter(function (e) {
        return l.includes(e.name);
      }),
          y = "small" !== s && m && w.length > 0;
      return i.createElement(p, {
        id: t,
        className: S
      }, i.createElement(_.MatchMedia, {
        rule: f.DialogBreakpoints.TabletSmall
      }, function (t) {
        return i.createElement(d.ToolbarMenuButton, {
          ref: b,
          menuReference: C,
          onOpen: e.onMenuOpen,
          isDrawer: t,
          drawerPosition: "Bottom",
          arrow: !1,
          content: i.createElement(W, {
            tag: "div",
            className: v()(y && Ha.buttonWithFavorites),
            displayMode: s,
            isOpened: h,
            icon: Oa,
            forceInteractive: !0,
            collapseWhen: ["full", "medium", "small"]
          }),
          onClick: M,
          tooltip: o.t(null, void 0, a(15812))
        }, i.createElement(xa, {
          onTemplateSave: u,
          onTemplateSelect: c,
          onTemplateRemove: E,
          onTemplateFavorite: m,
          templates: r,
          favorites: w,
          isTabletSmall: t
        }));
      }), y && i.createElement(Ba, {
        favorites: w,
        onTemplateSelect: function onTemplateSelect(e) {
          c(e), M();
        }
      }));

      function E(e, t) {
        if (I.PLATFORM_ACCESSIBILITY_ENABLED && t && (0, Z.isKeyboardClick)(t) && C.current) {
          var _t11 = (0, se.queryMenuElements)(C.current),
              _a5 = _t11.findIndex(function (t) {
            return null !== t.closest("[data-id=\"".concat(e.id, "\"]"));
          });

          g(e, function () {
            var e, n;

            if (-1 !== _a5 && C.current) {
              var _i5 = null !== (e = _t11[_a5 + 1]) && void 0 !== e ? e : _t11[_a5 - 1];

              _i5 ? _i5.focus() : (0, se.focusFirstMenuItem)(C.current), null === (n = b.current) || void 0 === n || n.update();
            }
          });
        } else g(e);
      }

      function M() {
        0;
      }
    }

    function Ba(e) {
      return i.createElement(i.Fragment, null, e.favorites.map(function (t, a, n) {
        var _v2;

        return i.createElement(da, {
          key: t.name,
          item: t,
          onApply: e.onTemplateSelect,
          className: v()((_v2 = {}, _defineProperty(_v2, Ha.first, 0 === a), _defineProperty(_v2, Ha.last, a === n.length - 1), _v2))
        });
      }));
    }

    Da.contextType = La;
    a(42053);
    var Ua = a(77665),
        Wa = a(96052),
        za = a(57778);
    var Va = {
      undoHotKey: (0, G.hotKeySerialize)({
        keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "Z"],
        text: "{0} + {1}"
      }),
      redoHotKey: (0, G.hotKeySerialize)({
        keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "Y"],
        text: "{0} + {1}"
      })
    },
        Za = (0, rt.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, za),
        Ka = (0, y.registryContextType)();

    var Qa =
    /*#__PURE__*/
    function (_i$PureComponent15) {
      _inherits(Qa, _i$PureComponent15);

      function Qa(e, t) {
        var _this27;

        _classCallCheck(this, Qa);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Qa).call(this, e, t)), _this27._batched = null, _this27._handleClickUndo = function () {
          (0, V.trackEvent)("GUI", "Undo");
          var e = _this27.context.chartWidgetCollection;
          e.undoHistory.undo();
        }, _this27._handleClickRedo = function () {
          (0, V.trackEvent)("GUI", "Redo");
          var e = _this27.context.chartWidgetCollection;
          e.undoHistory.redo();
        }, (0, y.validateRegistry)(t, {
          chartWidgetCollection: s.any.isRequired
        }), _this27.state = _this27._getStateFromUndoHistory();
        return _this27;
      }

      _createClass(Qa, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e = this.context.chartWidgetCollection;
          e.undoHistory.redoStack().onChange().subscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().subscribe(this, this._onChangeStack);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e = this.context.chartWidgetCollection;
          e.undoHistory.redoStack().onChange().unsubscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().unsubscribe(this, this._onChangeStack), this._batched = null;
        }
      }, {
        key: "render",
        value: function render() {
          var e = this.props.id,
              _this$state8 = this.state,
              t = _this$state8.isEnabledRedo,
              n = _this$state8.isEnabledUndo,
              s = _this$state8.redoStack,
              l = _this$state8.undoStack;
          return i.createElement(p, {
            id: e
          }, i.createElement(g.ToolbarButton, {
            icon: Ua,
            isDisabled: !n,
            onClick: this._handleClickUndo,
            theme: Za,
            tooltip: n ? o.t(null, {
              replace: {
                hint: l
              }
            }, a(80323)) : void 0,
            "data-tooltip-hotkey": n ? Va.undoHotKey : void 0
          }), i.createElement(g.ToolbarButton, {
            icon: Wa,
            isDisabled: !t,
            onClick: this._handleClickRedo,
            theme: Za,
            tooltip: t ? o.t(null, {
              replace: {
                hint: s
              }
            }, a(70728)) : void 0,
            "data-tooltip-hotkey": t ? Va.redoHotKey : void 0
          }));
        }
      }, {
        key: "_onChangeStack",
        value: function _onChangeStack() {
          var _this28 = this;

          null === this._batched && (this._batched = Promise.resolve().then(function () {
            if (null === _this28._batched) return;
            _this28._batched = null;

            var e = _this28._getStateFromUndoHistory();

            _this28.setState(e);
          }));
        }
      }, {
        key: "_getStateFromUndoHistory",
        value: function _getStateFromUndoHistory() {
          var e = this.context.chartWidgetCollection,
              t = e.undoHistory.undoStack(),
              a = e.undoHistory.redoStack(),
              n = a.head(),
              i = t.head();
          return {
            isEnabledRedo: !a.isEmpty(),
            isEnabledUndo: !t.isEmpty(),
            redoStack: n ? n.text().translatedText() : "",
            undoStack: i ? i.text().translatedText() : ""
          };
        }
      }]);

      return Qa;
    }(i.PureComponent);

    Qa.contextType = Ka;

    var qa = function qa(e) {
      if (function (e) {
        return "http://www.w3.org/1999/xhtml" === (null == e ? void 0 : e.namespaceURI);
      }(e) && "true" !== e.dataset.internalAllowKeyboardNavigation) {
        e.tabIndex = -1, e.ariaDisabled = "true";

        for (var _t12 = 0; _t12 < e.children.length; _t12++) {
          qa(e.children.item(_t12));
        }
      }
    };

    var ja =
    /*#__PURE__*/
    function (_i$PureComponent16) {
      _inherits(ja, _i$PureComponent16);

      function ja() {
        var _this29;

        _classCallCheck(this, ja);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(ja).apply(this, arguments)), _this29._wrapperElement = null, _this29._resizeObserver = null, _this29._mutationObserver = null, _this29._update = function () {
          _this29.forceUpdate();
        }, _this29._setRef = function (e) {
          _this29._wrapperElement = e;
        }, _this29._handleMeasure = function (_ref41) {
          var _ref42 = _slicedToArray(_ref41, 1),
              e = _ref42[0];

          _this29.props.width.setValue(e.contentRect.width);
        }, _this29._handleMutation = function (_ref43) {
          var _ref44 = _slicedToArray(_ref43, 1),
              e = _ref44[0];

          I.PLATFORM_ACCESSIBILITY_ENABLED && "childList" === e.type && qa(_this29.props.element);
        };
        return _this29;
      }

      _createClass(ja, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props15 = this.props,
              e = _this$props15.element,
              t = _this$props15.isFake,
              a = _this$props15.width;
          !t && this._wrapperElement ? (this._resizeObserver = new ResizeObserver(this._handleMeasure), this._mutationObserver = new MutationObserver(this._handleMutation), this._wrapperElement.appendChild(e), this._resizeObserver.observe(this._wrapperElement), this._mutationObserver.observe(e, {
            subtree: !0,
            childList: !0
          })) : a.subscribe(this._update);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$props16 = this.props,
              e = _this$props16.width,
              t = _this$props16.isFake;
          t && e.unsubscribe(this._update), this._resizeObserver && this._wrapperElement && this._resizeObserver.unobserve(this._wrapperElement), this._mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props17 = this.props,
              _this$props17$isFake = _this$props17.isFake,
              e = _this$props17$isFake === void 0 ? !1 : _this$props17$isFake,
              t = _this$props17.width;
          return i.createElement(p, {
            ref: this._setRef,
            style: e ? {
              width: t.value()
            } : void 0,
            "data-is-custom-header-element": !0
          });
        }
      }]);

      return ja;
    }(i.PureComponent);

    function Ga(e) {
      var t = e.displayMode,
          a = e.params;
      return i.createElement(d.ToolbarMenuButton, {
        content: i.createElement(W, {
          collapseWhen: void 0 !== a.icon ? void 0 : [],
          displayMode: t,
          icon: a.icon,
          text: a.title,
          "data-name": "dropdown",
          "data-is-custom-header-element": !0
        }),
        drawerPosition: "Bottom",
        drawerBreakpoint: f.DialogBreakpoints.TabletSmall,
        arrow: !1,
        tooltip: a.tooltip
      }, a.items.map(function (e, t) {
        return i.createElement(ie.PopupMenuItem, {
          key: t,
          label: e.title,
          onClick: function onClick() {
            return e.onSelect();
          },
          "data-name": "dropdown-item"
        });
      }));
    }

    var Ya = a(27363);

    function Xa(e) {
      var t = e.className,
          a = e.title,
          n = _objectWithoutProperties(e, ["className", "title"]);

      return i.createElement(z, _objectSpread({}, n, {
        className: u(t, Ya.customTradingViewStyleButton, Ya.withoutIcon),
        collapseWhen: [],
        "data-name": "custom-tradingview-styled-button",
        tooltip: a
      }));
    }

    function $a() {
      return {
        Bars: n.enabled("header_chart_type") ? L : void 0,
        Compare: n.enabled("header_compare") ? q : void 0,
        Custom: ja,
        CustomTradingViewStyledButton: Xa,
        Fullscreen: n.enabled("header_fullscreen_button") ? ae : void 0,
        Indicators: n.enabled("header_indicators") ? Se : void 0,
        Intervals: n.enabled("header_resolutions") ? Ye : void 0,
        OpenPopup: at,
        Properties: n.enabled("header_settings") && n.enabled("show_chart_property_page") ? st : void 0,
        SaveLoad: n.enabled("header_saveload") ? kt : void 0,
        Screenshot: n.enabled("header_screenshot") ? $t : void 0,
        SymbolSearch: n.enabled("header_symbol_search") ? ra : void 0,
        Templates: n.enabled("study_templates") ? Da : void 0,
        Dropdown: Ga,
        UndoRedo: n.enabled("header_undo_redo") ? Qa : void 0,
        Layout: undefined
      };
    }
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
        var _ref45 = t.get(e.id) || [e.description, 0],
            _ref46 = _slicedToArray(_ref45, 2),
            a = _ref46[0],
            n = _ref46[1];

        t.set(e.id, [a, n + 1]);
      }), Array.from(t.values()).map(function (_ref47) {
        var _ref48 = _slicedToArray(_ref47, 2),
            e = _ref48[0],
            t = _ref48[1];

        return "".concat(e).concat(t > 1 ? " x ".concat(t) : "");
      }).join(", ");
    }
  },
  45876: function _(e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      SERIES_ICONS: function SERIES_ICONS() {
        return p;
      }
    });
    var n = a(94670),
        i = a(32162),
        s = a(39956),
        o = a(14083),
        l = a(45504),
        r = a(52867),
        h = a(41473),
        c = a(31246),
        d = a(15726),
        u = a(24464),
        v = a(71705),
        m = a(9450);
    var p = {
      3: n,
      16: i,
      0: s,
      1: o,
      8: l,
      9: r,
      2: h,
      14: c,
      15: d,
      10: u,
      12: v,
      13: m
    };
  },
  53166: function _(e, t, a) {
    "use strict";

    a.d(t, {
      convertImageNameToUrl: function convertImageNameToUrl() {
        return s;
      }
    });
    var n = a(14483),
        i = a(76861);

    function s(e) {
      return n.enabled("charting_library_base") || (0, i.isProd)() ? "https://www.tradingview.com/x/" + e + "/" : window.location.protocol + "//" + window.location.host + "/x/" + e + "/";
    }
  },
  65939: function _(e, t, a) {
    "use strict";

    function n(e, t) {
      var a = document.createElement("a");
      a.style.display = "none", a.href = t, a.download = e, a.click();
    }

    a.d(t, {
      downloadFile: function downloadFile() {
        return n;
      }
    });
  },
  29142: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z"/></svg>';
  },
  97268: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>';
  },
  57047: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M17 6v2.5a2.5 2.5 0 0 0 2.5 2.5H22v-1h-2.5A1.5 1.5 0 0 1 18 8.5V6h-1zm2.5 11a2.5 2.5 0 0 0-2.5 2.5V22h1v-2.5c0-.83.67-1.5 1.5-1.5H22v-1h-2.5zm-11 1H6v-1h2.5a2.5 2.5 0 0 1 2.5 2.5V22h-1v-2.5c0-.83-.67-1.5-1.5-1.5zM11 8.5V6h-1v2.5c0 .83-.67 1.5-1.5 1.5H6v1h2.5A2.5 2.5 0 0 0 11 8.5z"/></svg>';
  },
  99280: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>';
  },
  21233: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>';
  },
  94670: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"/></svg>';
  },
  39956: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>';
  },
  24464: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m10.49 7.55-.42.7-2.1 3.5.86.5 1.68-2.8 1.8 2.82.84-.54-2.23-3.5-.43-.68Zm12.32 4.72-.84-.54 2.61-4 .84.54-2.61 4Zm-5.3 6.3 1.2-1.84.84.54-1.63 2.5-.43.65-.41-.65-1.6-2.5.85-.54 1.17 1.85ZM4.96 16.75l.86.52-2.4 4-.86-.52 2.4-4ZM3 14v1h1v-1H3Zm2 0h1v1H5v-1Zm2 0v1h1v-1H7Zm2 0h1v1H9v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Z"/></svg>';
  },
  14083: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
  },
  53707: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
  },
  9450: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>';
  },
  1393: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
  },
  45504: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
  },
  71705: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
  },
  32162: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M22 3h1v1h-1V3Zm0 2V4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1v1H9v1H8v1H7v1H6v1H5v1H4v1h1v1H4v1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h-1Zm-1 1V5h1v1h-1Zm-1 1V6h1v1h-1Zm-1 1V7h1v1h-1Zm-1 1V8h1v1h-1Zm-1 1V9h1v1h-1Zm-1 1v-1h1v1h-1Zm-1 0v-1h-1V9h-1V8h-1V7h-1V6h-1v1H9v1H8v1H7v1H6v1H5v1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h1v1h1Zm0 0h1v1h-1v-1Zm.84 6.37 7.5-7-.68-.74-7.15 6.67-4.66-4.65-.33-.34-.36.32-5.5 5 .68.74 5.14-4.68 4.67 4.66.34.35.35-.33ZM6 23H5v1h1v-1Zm0-1H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0v1H7v-1h1Zm0-1H7v-1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0v1H9v-1h1Zm0-1H9v-1h1v1Zm1 0h-1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h1v1Zm0 0h1v1h-1v-1Zm2 2v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1Zm0 0v-1h-1v1h1Z"/></svg>';
  },
  52867: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
  },
  39681: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
  },
  31246: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="m18.43 15.91 6.96-8.6-.78-.62-6.96 8.6a2.49 2.49 0 0 0-2.63.2l-2.21-2.02A2.5 2.5 0 0 0 10.5 10a2.5 2.5 0 1 0 1.73 4.3l2.12 1.92a2.5 2.5 0 1 0 4.08-.31ZM10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path d="M8.37 13.8c.17.3.4.54.68.74l-5.67 6.78-.76-.64 5.75-6.88Z"/></svg>';
  },
  41473: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m25.39 7.31-8.83 10.92-6.02-5.47-7.16 8.56-.76-.64 7.82-9.36 6 5.45L24.61 6.7l.78.62Z"/></svg>';
  },
  82436: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
  },
  48449: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>';
  },
  96052: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
  },
  72644: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
  },
  15726: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M19 5h5v1h-4v13h-6v-7h-4v12H5v-1h4V11h6v7h4V5Z"/></svg>';
  },
  77665: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
  },
  33765: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
  },
  36296: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
  },
  23595: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>';
  },
  39146: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
  },
  48010: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
  },
  29414: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>';
  },
  84502: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
  }
}]);