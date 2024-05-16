"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[9727], {
  66783: function _(e) {
    "use strict";

    var t = Object.prototype.hasOwnProperty;

    function n(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }

    e.exports = function (e, r) {
      if (n(e, r)) return !0;
      if ("object" != _typeof(e) || null === e || "object" != _typeof(r) || null === r) return !1;
      var o = Object.keys(e),
          a = Object.keys(r);
      if (o.length !== a.length) return !1;

      for (var l = 0; l < o.length; l++) {
        if (!t.call(r, o[l]) || !n(e[o[l]], r[o[l]])) return !1;
      }

      return !0;
    };
  },
  58222: function _(e) {
    e.exports = {
      "light-button": "light-button-bYDQcOkp",
      link: "link-bYDQcOkp",
      content: "content-bYDQcOkp",
      "visually-hidden": "visually-hidden-bYDQcOkp",
      nowrap: "nowrap-bYDQcOkp",
      "ellipsis-container": "ellipsis-container-bYDQcOkp",
      "text-wrap-container": "text-wrap-container-bYDQcOkp",
      "text-wrap-with-ellipsis": "text-wrap-with-ellipsis-bYDQcOkp",
      icon: "icon-bYDQcOkp",
      "force-direction-ltr": "force-direction-ltr-bYDQcOkp",
      "force-direction-rtl": "force-direction-rtl-bYDQcOkp",
      "with-grouped": "with-grouped-bYDQcOkp",
      "variant-quiet-primary": "variant-quiet-primary-bYDQcOkp",
      selected: "selected-bYDQcOkp",
      "typography-regular16px": "typography-regular16px-bYDQcOkp",
      "typography-medium16px": "typography-medium16px-bYDQcOkp",
      "typography-regular14px": "typography-regular14px-bYDQcOkp",
      "typography-semibold14px": "typography-semibold14px-bYDQcOkp",
      "typography-semibold16px": "typography-semibold16px-bYDQcOkp",
      "size-xsmall": "size-xsmall-bYDQcOkp",
      "with-start-icon": "with-start-icon-bYDQcOkp",
      "with-end-icon": "with-end-icon-bYDQcOkp",
      "no-content": "no-content-bYDQcOkp",
      wrap: "wrap-bYDQcOkp",
      "size-small": "size-small-bYDQcOkp",
      "size-medium": "size-medium-bYDQcOkp",
      "variant-primary": "variant-primary-bYDQcOkp",
      "color-gray": "color-gray-bYDQcOkp",
      caret: "caret-bYDQcOkp",
      grouped: "grouped-bYDQcOkp",
      pills: "pills-bYDQcOkp",
      "disable-active-on-touch": "disable-active-on-touch-bYDQcOkp",
      "disable-active-state-styles": "disable-active-state-styles-bYDQcOkp",
      "color-green": "color-green-bYDQcOkp",
      "color-red": "color-red-bYDQcOkp",
      "variant-secondary": "variant-secondary-bYDQcOkp",
      "variant-ghost": "variant-ghost-bYDQcOkp"
    };
  },
  45350: function _(e) {
    e.exports = {
      "nav-button": "nav-button-znwuaSC1",
      link: "link-znwuaSC1",
      background: "background-znwuaSC1",
      icon: "icon-znwuaSC1",
      "flip-icon": "flip-icon-znwuaSC1",
      "size-large": "size-large-znwuaSC1",
      "preserve-paddings": "preserve-paddings-znwuaSC1",
      "size-medium": "size-medium-znwuaSC1",
      "size-small": "size-small-znwuaSC1",
      "size-xsmall": "size-xsmall-znwuaSC1",
      "size-xxsmall": "size-xxsmall-znwuaSC1",
      "visually-hidden": "visually-hidden-znwuaSC1"
    };
  },
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
  57240: function _(e) {
    e.exports = {
      container: "container-M1mz4quA",
      pairContainer: "pairContainer-M1mz4quA",
      logo: "logo-M1mz4quA",
      hidden: "hidden-M1mz4quA"
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
  52597: function _(e) {
    e.exports = {
      actions: "actions-rarsm4ka",
      actionButton: "actionButton-rarsm4ka"
    };
  },
  54257: function _(e) {
    e.exports = {
      logo: "logo-d0vVmGvT"
    };
  },
  39339: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      itemRow: "itemRow-oRSs8UQo",
      multiLine: "multiLine-oRSs8UQo",
      cell: "cell-oRSs8UQo",
      itemInfoCell: "itemInfoCell-oRSs8UQo",
      description: "description-oRSs8UQo",
      symbolDescription: "symbolDescription-oRSs8UQo",
      flag: "flag-oRSs8UQo",
      exchangeDescription: "exchangeDescription-oRSs8UQo",
      marketType: "marketType-oRSs8UQo",
      exchangeName: "exchangeName-oRSs8UQo",
      actionHandleWrap: "actionHandleWrap-oRSs8UQo",
      source: "source-oRSs8UQo",
      hover: "hover-oRSs8UQo",
      selected: "selected-oRSs8UQo",
      active: "active-oRSs8UQo",
      highlighted: "highlighted-oRSs8UQo",
      light: "light-oRSs8UQo",
      "highlight-animation-theme-light": "highlight-animation-theme-light-oRSs8UQo",
      dark: "dark-oRSs8UQo",
      "highlight-animation-theme-dark": "highlight-animation-theme-dark-oRSs8UQo",
      markedFlag: "markedFlag-oRSs8UQo",
      offset: "offset-oRSs8UQo",
      descriptionCell: "descriptionCell-oRSs8UQo",
      addition: "addition-oRSs8UQo",
      exchangeCell: "exchangeCell-oRSs8UQo",
      fixedWidth: "fixedWidth-oRSs8UQo",
      expandHandle: "expandHandle-oRSs8UQo",
      expanded: "expanded-oRSs8UQo",
      symbolTitle: "symbolTitle-oRSs8UQo",
      invalid: "invalid-oRSs8UQo",
      noDescription: "noDescription-oRSs8UQo",
      highlightedText: "highlightedText-oRSs8UQo",
      icon: "icon-oRSs8UQo",
      narrow: "narrow-oRSs8UQo",
      wide: "wide-oRSs8UQo",
      dataMode: "dataMode-oRSs8UQo",
      actionsCell: "actionsCell-oRSs8UQo",
      action: "action-oRSs8UQo",
      targetAction: "targetAction-oRSs8UQo",
      removeAction: "removeAction-oRSs8UQo",
      addAction: "addAction-oRSs8UQo",
      markedFlagWrap: "markedFlagWrap-oRSs8UQo",
      markedFlagMobile: "markedFlagMobile-oRSs8UQo",
      logo: "logo-oRSs8UQo",
      isExpandable: "isExpandable-oRSs8UQo",
      primaryIcon: "primaryIcon-oRSs8UQo"
    };
  },
  33172: function _(e) {
    e.exports = {
      icon: "icon-OJpk_CAQ"
    };
  },
  50674: function _(e) {
    e.exports = {
      wrap: "wrap-IxKZEhmO",
      libAllSelected: "libAllSelected-IxKZEhmO",
      container: "container-IxKZEhmO",
      iconWrap: "iconWrap-IxKZEhmO",
      icon: "icon-IxKZEhmO",
      title: "title-IxKZEhmO",
      highlighted: "highlighted-IxKZEhmO",
      description: "description-IxKZEhmO",
      mobile: "mobile-IxKZEhmO",
      allSelected: "allSelected-IxKZEhmO",
      desktop: "desktop-IxKZEhmO",
      allSelectedIcon: "allSelectedIcon-IxKZEhmO",
      selected: "selected-IxKZEhmO",
      titleWithoutDesc: "titleWithoutDesc-IxKZEhmO",
      textBlock: "textBlock-IxKZEhmO",
      bordered: "bordered-IxKZEhmO"
    };
  },
  70699: function _(e) {
    e.exports = {
      container: "container-dfKL9A7t",
      contentList: "contentList-dfKL9A7t",
      contentListDesktop: "contentListDesktop-dfKL9A7t",
      searchSourceItemsContainer: "searchSourceItemsContainer-dfKL9A7t",
      searchSourceItemsContainerDesktop: "searchSourceItemsContainerDesktop-dfKL9A7t",
      groupTitleDesktop: "groupTitleDesktop-dfKL9A7t",
      emptyText: "emptyText-dfKL9A7t",
      emptyIcon: "emptyIcon-dfKL9A7t",
      noResultsDesktop: "noResultsDesktop-dfKL9A7t"
    };
  },
  37796: function _(e) {
    e.exports = {
      wrap: "wrap-gjrLBBL3",
      item: "item-gjrLBBL3",
      small: "small-gjrLBBL3",
      newStyles: "newStyles-gjrLBBL3",
      mobile: "mobile-gjrLBBL3",
      text: "text-gjrLBBL3",
      exchange: "exchange-gjrLBBL3",
      filterItem: "filterItem-gjrLBBL3",
      brokerWrap: "brokerWrap-gjrLBBL3"
    };
  },
  52662: function _(e) {
    e.exports = {
      wrap: "wrap-dlewR1s1",
      watchlist: "watchlist-dlewR1s1",
      noFeed: "noFeed-dlewR1s1",
      newStyles: "newStyles-dlewR1s1",
      scrollContainer: "scrollContainer-dlewR1s1",
      listContainer: "listContainer-dlewR1s1",
      multiLineItemsContainer: "multiLineItemsContainer-dlewR1s1",
      withSpinner: "withSpinner-dlewR1s1",
      spinnerContainer: "spinnerContainer-dlewR1s1",
      largeSpinner: "largeSpinner-dlewR1s1"
    };
  },
  85544: function _(e) {
    e.exports = {
      search: "search-ZXzPWcCf",
      upperCase: "upperCase-ZXzPWcCf",
      withFilters: "withFilters-ZXzPWcCf",
      withButton: "withButton-ZXzPWcCf",
      symbolType: "symbolType-ZXzPWcCf",
      spinnerWrap: "spinnerWrap-ZXzPWcCf",
      emptyText: "emptyText-ZXzPWcCf",
      emptyIcon: "emptyIcon-ZXzPWcCf",
      noResultsDesktop: "noResultsDesktop-ZXzPWcCf",
      brokerButtonWrap: "brokerButtonWrap-ZXzPWcCf",
      brokerButton: "brokerButton-ZXzPWcCf"
    };
  },
  14444: function _(e) {
    e.exports = {
      flagWrap: "flagWrap-QKnxaZOG",
      icon: "icon-QKnxaZOG",
      caret: "caret-QKnxaZOG",
      title: "title-QKnxaZOG",
      button: "button-QKnxaZOG",
      withFlag: "withFlag-QKnxaZOG",
      buttonContent: "buttonContent-QKnxaZOG"
    };
  },
  62393: function _(e) {
    e.exports = {
      dialog: "dialog-u2dP3kv1",
      tabletDialog: "tabletDialog-u2dP3kv1",
      desktopDialog: "desktopDialog-u2dP3kv1",
      backButton: "backButton-u2dP3kv1"
    };
  },
  54638: function _(e) {
    e.exports = {
      childrenWrapper: "childrenWrapper-_RhDhmVQ",
      container: "container-_RhDhmVQ"
    };
  },
  88389: function _(e) {
    e.exports = {
      bubbles: "bubbles-Ie7o2cas",
      multiLine: "multiLine-Ie7o2cas",
      bubble: "bubble-Ie7o2cas"
    };
  },
  61371: function _(e) {
    e.exports = {
      bubble: "bubble-zcjhaZ_y",
      animated: "animated-zcjhaZ_y",
      content: "content-zcjhaZ_y",
      "appearance-default": "appearance-default-zcjhaZ_y",
      active: "active-zcjhaZ_y",
      gray: "gray-zcjhaZ_y",
      red: "red-zcjhaZ_y",
      blue: "blue-zcjhaZ_y",
      green: "green-zcjhaZ_y",
      orange: "orange-zcjhaZ_y",
      purple: "purple-zcjhaZ_y",
      cyan: "cyan-zcjhaZ_y",
      pink: "pink-zcjhaZ_y",
      "appearance-text": "appearance-text-zcjhaZ_y",
      "fontSize-s": "fontSize-s-zcjhaZ_y",
      "fontSize-m": "fontSize-m-zcjhaZ_y",
      "size-m": "size-m-zcjhaZ_y",
      "size-l": "size-l-zcjhaZ_y"
    };
  },
  82112: function _(e) {
    e.exports = {};
  },
  45300: function _(e) {
    e.exports = {};
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
  34587: function _(e) {
    e.exports = {
      icon: "icon-WB2y0EnP",
      dropped: "dropped-WB2y0EnP"
    };
  },
  18429: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SEPARATOR_PREFIX: function SEPARATOR_PREFIX() {
        return r;
      },
      isSeparatorItem: function isSeparatorItem() {
        return o;
      }
    });
    var r = "###";

    function o(e) {
      return e.startsWith(r);
    }
  },
  48199: function _(e, t, n) {
    "use strict";

    n.d(t, {
      BackButton: function BackButton() {
        return v;
      }
    });
    var r = n(50959),
        o = n(64388),
        a = n(95694),
        l = n(49498),
        s = n(60176),
        i = n(35369),
        c = n(58478),
        u = n(73063),
        d = n(14127),
        m = n(18073),
        p = n(99243),
        h = n(42576);

    function g() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "large";
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1.2";

      switch (e) {
        case "large":
          return "1.2" === t ? a : u;

        case "medium":
          return "1.2" === t ? l : d;

        case "small":
          return "1.2" === t ? s : m;

        case "xsmall":
          return "1.2" === t ? i : p;

        case "xxsmall":
          return "1.2" === t ? c : h;

        default:
          return l;
      }
    }

    var v = r.forwardRef(function (e, t) {
      var n = e["aria-label"],
          a = _objectWithoutProperties(e, ["aria-label"]);

      return r.createElement(o.NavButton, _objectSpread({}, a, {
        "aria-label": n,
        ref: t,
        icon: g(e.size, e.iconStrokeWidth),
        flipIconOnRtl: !0
      }));
    });
  },
  27011: function _(e, t, n) {
    "use strict";

    function r(e, t) {
      return t || null == e || ("string" == typeof e || Array.isArray(e)) && 0 === e.length;
    }

    n.d(t, {
      isIconOnly: function isIconOnly() {
        return r;
      }
    });
  },
  90744: function _(e, t, n) {
    "use strict";

    n.d(t, {
      LightButton: function LightButton() {
        return g;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(9745),
        l = n(17946),
        s = n(27011),
        i = n(86332);
    var c = r.createContext({
      isInButtonGroup: !1,
      isGroupPrimary: !1
    });
    var u = n(2948),
        d = n(58222),
        m = n.n(d);

    var p = function p(e, t) {
      var n = (0, r.useContext)(l.CustomBehaviourContext),
          a = (0, r.useContext)(i.ControlGroupContext),
          _ref = (0, r.useContext)(c),
          u = _ref.isInButtonGroup,
          d = _ref.isGroupPrimary,
          p = e.className,
          h = e.isSelected,
          g = e.children,
          v = e.startIcon,
          f = e.showCaret,
          y = e.endIcon,
          b = e.forceDirection,
          S = e.iconOnly,
          _e$color = e.color,
          x = _e$color === void 0 ? "gray" : _e$color,
          _e$variant = e.variant,
          w = _e$variant === void 0 ? "primary" : _e$variant,
          _e$size = e.size,
          k = _e$size === void 0 ? "medium" : _e$size,
          _e$enableActiveStateS = e.enableActiveStateStyles,
          C = _e$enableActiveStateS === void 0 ? n.enableActiveStateStyles : _e$enableActiveStateS,
          E = e.typography,
          _e$isLink = e.isLink,
          L = _e$isLink === void 0 ? !1 : _e$isLink,
          N = e.textWrap,
          I = e.isPills,
          R = E ? m()["typography-".concat(E)] : m()["typography-".concat(function (e, t) {
        return "xsmall" === e ? t ? "semibold14px" : "regular14px" : "small" === e || "medium" === e ? t ? "semibold16px" : "regular16px" : "";
      }(k, h || I))];

      return o(p, m()["light-button"], L && m().link, h && m().selected, (0, s.isIconOnly)(g, S) && m()["no-content"], v && m()["with-start-icon"], (f || y) && m()["with-end-icon"], t && m()["with-grouped"], b && m()["force-direction-".concat(b)], m()["variant-".concat(d ? "primary" : w)], m()["color-".concat(d ? "gray" : x)], m()["size-".concat(k)], R, !C && m()["disable-active-state-styles"], a.isGrouped && m().grouped, N && m().wrap, u && m()["disable-active-on-touch"], I && m().pills);
    };

    function h(e) {
      var t = e.startIcon,
          n = e.endIcon,
          l = e.showCaret,
          i = e.iconOnly,
          _e$ellipsis = e.ellipsis,
          c = _e$ellipsis === void 0 ? !0 : _e$ellipsis,
          d = e.textWrap,
          p = e.children;
      return r.createElement(r.Fragment, null, t && r.createElement(a.Icon, {
        className: m().icon,
        icon: t
      }), !(0, s.isIconOnly)(p, i) && r.createElement("span", {
        className: o(m().content, !d && m().nowrap)
      }, d || c ? r.createElement(r.Fragment, null, r.createElement("span", {
        className: o(!d && c && m()["ellipsis-container"], d && m()["text-wrap-container"], d && c && m()["text-wrap-with-ellipsis"])
      }, p), r.createElement("span", {
        className: m()["visually-hidden"],
        "aria-hidden": !0
      }, p)) : r.createElement(r.Fragment, null, p, r.createElement("span", {
        className: m()["visually-hidden"],
        "aria-hidden": !0
      }, p))), (n || l) && function (e) {
        return r.createElement(a.Icon, {
          className: o(m().icon, e.showCaret && m().caret),
          icon: e.showCaret ? u : e.endIcon
        });
      }(e));
    }

    function g(e) {
      var _r$useContext = r.useContext(i.ControlGroupContext),
          t = _r$useContext.isGrouped,
          n = e.reference,
          o = e.className,
          a = e.isSelected,
          l = e.children,
          s = e.startIcon,
          c = e.iconOnly,
          u = e.ellipsis,
          d = e.showCaret,
          m = e.forceDirection,
          g = e.endIcon,
          v = e.color,
          f = e.variant,
          y = e.size,
          b = e.enableActiveStateStyles,
          S = e.typography,
          _e$textWrap = e.textWrap,
          x = _e$textWrap === void 0 ? !1 : _e$textWrap,
          w = e.maxLines,
          _e$style = e.style,
          k = _e$style === void 0 ? {} : _e$style,
          C = e.isPills,
          E = _objectWithoutProperties(e, ["reference", "className", "isSelected", "children", "startIcon", "iconOnly", "ellipsis", "showCaret", "forceDirection", "endIcon", "color", "variant", "size", "enableActiveStateStyles", "typography", "textWrap", "maxLines", "style", "isPills"]),
          L = x ? null != w ? w : 2 : 1,
          N = L > 0 ? _objectSpread({}, k, {
        "--ui-lib-light-button-content-max-lines": L
      }) : k;

      return r.createElement("button", _objectSpread({}, E, {
        className: p({
          className: o,
          isSelected: a,
          children: l,
          startIcon: s,
          iconOnly: c,
          showCaret: d,
          forceDirection: m,
          endIcon: g,
          color: v,
          variant: f,
          size: y,
          enableActiveStateStyles: b,
          typography: S,
          textWrap: x,
          isPills: C
        }, t),
        ref: n,
        style: N
      }), r.createElement(h, {
        showCaret: d,
        startIcon: s,
        endIcon: g,
        iconOnly: c,
        ellipsis: u,
        textWrap: x
      }, l));
    }

    n(21593);
  },
  64388: function _(e, t, n) {
    "use strict";

    n.d(t, {
      NavButton: function NavButton() {
        return c;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(9745),
        l = n(45350);

    function s(e) {
      var _e$size2 = e.size,
          t = _e$size2 === void 0 ? "large" : _e$size2,
          n = e.preservePaddings,
          r = e.isLink,
          a = e.flipIconOnRtl,
          s = e.className;
      return o(l["nav-button"], l["size-".concat(t)], n && l["preserve-paddings"], a && l["flip-icon"], r && l.link, s);
    }

    function i(e) {
      var t = e.children,
          n = e.icon;
      return r.createElement(r.Fragment, null, r.createElement("span", {
        className: l.background
      }), r.createElement(a.Icon, {
        icon: n,
        className: l.icon,
        "aria-hidden": !0
      }), t && r.createElement("span", {
        className: l["visually-hidden"]
      }, t));
    }

    var c = (0, r.forwardRef)(function (e, t) {
      var n = e.icon,
          _e$type = e.type,
          o = _e$type === void 0 ? "button" : _e$type,
          a = e.preservePaddings,
          l = e.flipIconOnRtl,
          c = e.size,
          u = e["aria-label"],
          d = _objectWithoutProperties(e, ["icon", "type", "preservePaddings", "flipIconOnRtl", "size", "aria-label"]);

      return r.createElement("button", _objectSpread({}, d, {
        className: s(_objectSpread({}, e, {
          children: u
        })),
        ref: t,
        type: o
      }), r.createElement(i, {
        icon: n
      }, u));
    });
    c.displayName = "NavButton";
    var u = n(21593),
        d = n(53017);
    (0, r.forwardRef)(function (e, t) {
      var n = e.icon,
          o = e.renderComponent,
          a = e["aria-label"],
          l = _objectWithoutProperties(e, ["icon", "renderComponent", "aria-label"]),
          c = null != o ? o : u.CustomComponentDefaultLink;

      return r.createElement(c, _objectSpread({}, l, {
        className: s(_objectSpread({}, e, {
          children: a,
          isLink: !0
        })),
        reference: (0, d.isomorphicRef)(t)
      }), r.createElement(i, {
        icon: n
      }, a));
    }).displayName = "NavAnchorButton";
  },
  86332: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlGroupContext: function ControlGroupContext() {
        return r;
      }
    });
    var r = n(50959).createContext({
      isGrouped: !1,
      cellState: {
        isTop: !0,
        isRight: !0,
        isBottom: !0,
        isLeft: !0
      }
    });
  },
  38952: function _(e, t, n) {
    "use strict";

    function r(e) {
      var t = e.reference,
          n = _objectWithoutProperties(e, ["reference"]);

      return _objectSpread({}, n, {
        ref: t
      });
    }

    n.d(t, {
      renameRef: function renameRef() {
        return r;
      }
    });
  },
  21593: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CustomComponentDefaultLink: function CustomComponentDefaultLink() {
        return a;
      }
    });
    var r = n(50959),
        o = n(38952);

    function a(e) {
      return r.createElement("a", _objectSpread({}, (0, o.renameRef)(e)));
    }

    r.PureComponent;
  },
  17946: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CustomBehaviourContext: function CustomBehaviourContext() {
        return r;
      }
    });
    var r = (0, n(50959).createContext)({
      enableActiveStateStyles: !0
    });
    r.displayName = "CustomBehaviourContext";
  },
  39416: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useFunctionalRefObject: function useFunctionalRefObject() {
        return a;
      }
    });
    var r = n(50959),
        o = n(43010);

    function a(e) {
      var t = (0, r.useMemo)(function () {
        return function (e) {
          var t = function t(n) {
            e(n), t.current = n;
          };

          return t.current = null, t;
        }(function (e) {
          s.current(e);
        });
      }, []),
          n = (0, r.useRef)(null),
          a = function a(t) {
        if (null === t) return l(n.current, t), void (n.current = null);
        n.current !== e && (n.current = e, l(n.current, t));
      },
          s = (0, r.useRef)(a);

      return s.current = a, (0, o.useIsomorphicLayoutEffect)(function () {
        if (null !== t.current) return s.current(t.current), function () {
          return s.current(null);
        };
      }, [e]), t;
    }

    function l(e, t) {
      null !== e && ("function" == typeof e ? e(t) : e.current = t);
    }
  },
  43010: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useIsomorphicLayoutEffect: function useIsomorphicLayoutEffect() {
        return o;
      }
    });
    var r = n(50959);

    function o(e, t) {
      ("undefined" == typeof window ? r.useEffect : r.useLayoutEffect)(e, t);
    }
  },
  27267: function _(e, t, n) {
    "use strict";

    function r(e, t, n, r, o) {
      function a(o) {
        if (e > o.timeStamp) return;
        var a = o.target;
        void 0 !== n && null !== t && null !== a && a.ownerDocument === r && (t.contains(a) || n(o));
      }

      return o.click && r.addEventListener("click", a, !1), o.mouseDown && r.addEventListener("mousedown", a, !1), o.touchEnd && r.addEventListener("touchend", a, !1), o.touchStart && r.addEventListener("touchstart", a, !1), function () {
        r.removeEventListener("click", a, !1), r.removeEventListener("mousedown", a, !1), r.removeEventListener("touchend", a, !1), r.removeEventListener("touchstart", a, !1);
      };
    }

    n.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return r;
      }
    });
  },
  67842: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useResizeObserver: function useResizeObserver() {
        return s;
      }
    });
    var r = n(50959),
        o = n(59255),
        a = n(43010),
        l = n(39416);

    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _ref2 = function (e) {
        return "function" == typeof e ? {
          callback: e
        } : e;
      }(e),
          n = _ref2.callback,
          _ref2$ref = _ref2.ref,
          s = _ref2$ref === void 0 ? null : _ref2$ref,
          i = (0, r.useRef)(null),
          c = (0, r.useRef)(n);

      c.current = n;
      var u = (0, l.useFunctionalRefObject)(s),
          d = (0, r.useCallback)(function (e) {
        u(e), null !== i.current && (i.current.disconnect(), null !== e && i.current.observe(e));
      }, [u, i]);
      return (0, a.useIsomorphicLayoutEffect)(function () {
        return i.current = new o["default"](function (e, t) {
          c.current(e, t);
        }), u.current && d(u.current), function () {
          var e;
          null === (e = i.current) || void 0 === e || e.disconnect();
        };
      }, [u].concat(_toConsumableArray(t))), d;
    }
  },
  90186: function _(e, t, n) {
    "use strict";

    function r(e) {
      return a(e, l);
    }

    function o(e) {
      return a(e, s);
    }

    function a(e, t) {
      var n = Object.entries(e).filter(t),
          r = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e2 = _step$value[0],
              _t = _step$value[1];

          r[_e2] = _t;
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

    function l(e) {
      var _e3 = _slicedToArray(e, 2),
          t = _e3[0],
          n = _e3[1];

      return 0 === t.indexOf("data-") && "string" == typeof n;
    }

    function s(e) {
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
        return a;
      },
      isAriaAttribute: function isAriaAttribute() {
        return s;
      },
      isDataAttribute: function isDataAttribute() {
        return l;
      }
    });
  },
  76460: function _(e, t, n) {
    "use strict";

    function r(e) {
      return 0 === e.detail;
    }

    n.d(t, {
      isKeyboardClick: function isKeyboardClick() {
        return r;
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
  3685: function _(e, t, n) {
    "use strict";

    function r() {
      var e, t, n;
      return null !== (n = null === (t = null === (e = window.configurationData) || void 0 === e ? void 0 : e.exchanges) || void 0 === t ? void 0 : t.map(function (e) {
        return _objectSpread({}, e, {
          country: "",
          providerId: "",
          flag: ""
        });
      })) && void 0 !== n ? n : [];
    }

    n.d(t, {
      getExchanges: function getExchanges() {
        return r;
      }
    });
  },
  36279: function _(e, t, n) {
    "use strict";

    var r;
    n.d(t, {
      LogoSize: function LogoSize() {
        return r;
      },
      getLogoUrlResolver: function getLogoUrlResolver() {
        return l;
      }
    }), function (e) {
      e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large";
    }(r || (r = {}));

    var o =
    /*#__PURE__*/
    function () {
      function o() {
        _classCallCheck(this, o);
      }

      _createClass(o, [{
        key: "getSymbolLogoUrl",
        value: function getSymbolLogoUrl(e) {
          return e;
        }
      }, {
        key: "getCountryFlagUrl",
        value: function getCountryFlagUrl() {
          return "";
        }
      }, {
        key: "getCryptoLogoUrl",
        value: function getCryptoLogoUrl(e) {
          return e;
        }
      }, {
        key: "getProviderLogoUrl",
        value: function getProviderLogoUrl(e) {
          return e;
        }
      }]);

      return o;
    }();

    var a;

    function l() {
      return a || (a = new o()), a;
    }
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
        return N;
      }
    });
    var r = n(50959),
        o = n(50151);
    var a = n(97754),
        l = n.n(a),
        s = n(68335),
        i = n(38223),
        c = n(35749),
        u = n(63016),
        d = n(1109),
        m = n(24437),
        p = n(90692),
        h = n(95711);
    var g = n(52092),
        v = n(76422),
        f = n(9745);
    var y = r.createContext({
      setHideClose: function setHideClose() {}
    });
    var b = n(7720),
        S = n(69827);

    function x(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          n = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
          o = e.subtitle,
          _e$showCloseIcon = e.showCloseIcon,
          a = _e$showCloseIcon === void 0 ? !0 : _e$showCloseIcon,
          s = e.onClose,
          i = e.onCloseButtonKeyDown,
          c = e.renderBefore,
          u = e.renderAfter,
          d = e.draggable,
          m = e.className,
          p = e.unsetAlign,
          h = e.closeAriaLabel,
          g = e.closeButtonReference,
          _ref3 = (0, r.useState)(!1),
          _ref4 = _slicedToArray(_ref3, 2),
          v = _ref4[0],
          x = _ref4[1];

      return r.createElement(y.Provider, {
        value: {
          setHideClose: x
        }
      }, r.createElement("div", {
        className: l()(S.container, m, (o || p) && S.unsetAlign)
      }, c, r.createElement("div", {
        "data-dragg-area": d,
        className: S.title
      }, r.createElement("div", {
        className: l()(n ? S.textWrap : S.ellipsis)
      }, t), o && r.createElement("div", {
        className: l()(S.ellipsis, S.subtitle)
      }, o)), u, a && !v && r.createElement("button", {
        className: S.close,
        onClick: s,
        onKeyDown: i,
        "data-name": "close",
        "aria-label": h,
        type: "button",
        ref: g
      }, r.createElement(f.Icon, {
        className: S.icon,
        icon: b,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var w = n(53017),
        k = n(90186),
        C = n(55596);
    var E = {
      vertical: 20
    },
        L = {
      vertical: 0
    };

    var N =
    /*#__PURE__*/
    function (_r$PureComponent) {
      _inherits(N, _r$PureComponent);

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
          void 0 !== _this.props.onOpen && _this.props.isOpened && _this.props.onOpen(_this.props.fullScreen || window.matchMedia(m.DialogBreakpoints.TabletSmall).matches);
        }, _this._handleKeyDown = function (e) {
          if (!e.defaultPrevented) {
            if (_this.props.onKeyDown && _this.props.onKeyDown(e), 27 === (0, s.hashFromEvent)(e)) {
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
            })(_this.props.disableTabNavigationContainment) || (n = e, [9, s.Modifiers.Shift + 9].includes((0, s.hashFromEvent)(n)) && n.stopPropagation());
          }
        }, _this._requestResize = function () {
          null !== _this._controller && _this._controller.recalculateBounds();
        }, _this._centerAndFit = function () {
          null !== _this._controller && _this._controller.centerAndFit();
        }, _this._calculatePositionWithOffsets = function (e, t) {
          var n = (0, o.ensureDefined)(_this.props.fullScreenViewOffsets).value();
          return {
            top: n.top,
            left: (0, i.isRtl)() ? -n.right : n.left,
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
          this.props.ignoreClosePopupsAndDialog || v.subscribe(g.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), this._handleOpen(), void 0 !== this.props.onOpen && (this._orientationMediaQuery = window.matchMedia("(orientation: portrait)"), e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.addEventListener) ? e.addEventListener("change", t) : e.addListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.subscribe(this._requestResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e, t;
          this.props.ignoreClosePopupsAndDialog || v.unsubscribe(g.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null), null !== this._orientationMediaQuery && (e = this._orientationMediaQuery, t = this._handleOpen, (null == e ? void 0 : e.removeEventListener) ? e.removeEventListener("change", t) : e.removeListener(t)), this.props.fullScreenViewOffsets && this.props.fullScreen && this.props.fullScreenViewOffsets.unsubscribe(this._requestResize);
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
              a = _this$props.title,
              s = _this$props.titleTextWrap,
              i = _this$props.dataName,
              c = _this$props.onClickOutside,
              g = _this$props.additionalElementPos,
              v = _this$props.additionalHeaderElement,
              f = _this$props.backdrop,
              _this$props$shouldFor = _this$props.shouldForceFocus,
              y = _this$props$shouldFor === void 0 ? !0 : _this$props$shouldFor,
              b = _this$props.shouldReturnFocus,
              S = _this$props.onForceFocus,
              N = _this$props.showSeparator,
              I = _this$props.subtitle,
              _this$props$draggable = _this$props.draggable,
              R = _this$props$draggable === void 0 ? !0 : _this$props$draggable,
              _this$props$fullScree = _this$props.fullScreen,
              _ = _this$props$fullScree === void 0 ? !1 : _this$props$fullScree,
              _this$props$showClose = _this$props.showCloseIcon,
              T = _this$props$showClose === void 0 ? !0 : _this$props$showClose,
              _this$props$rounded = _this$props.rounded,
              D = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              B = _this$props.isAnimationEnabled,
              M = _this$props.growPoint,
              O = _this$props.dialogTooltip,
              A = _this$props.unsetHeaderAlign,
              z = _this$props.onDragStart,
              F = _this$props.dataDialogName,
              Q = _this$props.closeAriaLabel,
              P = _this$props.containerAriaLabel,
              U = _this$props.reference,
              W = _this$props.containerTabIndex,
              V = _this$props.closeButtonReference,
              Z = _this$props.onCloseButtonKeyDown,
              K = _this$props.shadowed,
              q = _this$props.fullScreenViewOffsets,
              j = "after" !== g ? v : void 0,
              H = "after" === g ? v : void 0,
              G = "string" == typeof a ? a : F || "",
              $ = (0, k.filterDataProps)(this.props),
              Y = (0, w.mergeRefs)([this._handleReference, U]);

          return r.createElement(p.MatchMedia, {
            rule: m.DialogBreakpoints.SmallHeight
          }, function (g) {
            return r.createElement(p.MatchMedia, {
              rule: m.DialogBreakpoints.TabletSmall
            }, function (m) {
              return r.createElement(u.PopupDialog, _objectSpread({
                rounded: !(m || _) && D,
                className: l()(C.dialog, _ && q && C.bounded, e),
                isOpened: o,
                reference: Y,
                onKeyDown: _this2._handleKeyDown,
                onClickOutside: c,
                onClickBackdrop: c,
                fullscreen: m || _,
                guard: g ? L : E,
                boundByScreen: m || _,
                shouldForceFocus: y,
                onForceFocus: S,
                shouldReturnFocus: b,
                backdrop: f,
                draggable: R,
                isAnimationEnabled: B,
                growPoint: M,
                name: _this2.props.dataName,
                dialogTooltip: O,
                onDragStart: z,
                containerAriaLabel: P,
                containerTabIndex: W,
                calculateDialogPosition: _ && q ? _this2._calculatePositionWithOffsets : void 0,
                shadowed: K
              }, $), r.createElement("div", {
                className: l()(C.wrapper, t),
                "data-name": i,
                "data-dialog-name": G
              }, void 0 !== a && r.createElement(x, {
                draggable: R && !(m || _),
                onClose: _this2._handleCloseBtnClick,
                renderAfter: H,
                renderBefore: j,
                subtitle: I,
                title: a,
                titleTextWrap: s,
                showCloseIcon: T,
                className: n,
                unsetAlign: A,
                closeAriaLabel: Q,
                closeButtonReference: V,
                onCloseButtonKeyDown: Z
              }), N && r.createElement(d.Separator, {
                className: C.separator
              }), r.createElement(h.PopupContext.Consumer, null, function (e) {
                return _this2._renderChildren(e, m || _);
              })));
            });
          });
        }
      }]);

      return N;
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
        a = n.n(o),
        l = n(44352),
        s = n(9745),
        i = n(69859),
        c = n(40281);

    function u(e) {
      var t = e.children,
          o = e.renderInput,
          u = e.onCancel,
          m = e.containerClassName,
          p = e.inputContainerClassName,
          h = e.iconClassName,
          g = _objectWithoutProperties(e, ["children", "renderInput", "onCancel", "containerClassName", "inputContainerClassName", "iconClassName"]);

      return r.createElement("div", {
        className: a()(c.container, m)
      }, r.createElement("div", {
        className: a()(c.inputContainer, p, u && c.withCancel)
      }, o || r.createElement(d, _objectSpread({}, g))), t, r.createElement(s.Icon, {
        className: a()(c.icon, h),
        icon: i
      }), u && r.createElement("div", {
        className: c.cancel,
        onClick: u
      }, l.t(null, void 0, n(20036))));
    }

    function d(e) {
      var t = e.className,
          n = e.reference,
          o = e.value,
          l = e.onChange,
          s = e.onFocus,
          i = e.onBlur,
          u = e.onKeyDown,
          d = e.onSelect,
          m = e.placeholder,
          p = _objectWithoutProperties(e, ["className", "reference", "value", "onChange", "onFocus", "onBlur", "onKeyDown", "onSelect", "placeholder"]);

      return r.createElement("input", _objectSpread({}, p, {
        ref: n,
        type: "text",
        className: a()(t, c.input),
        autoComplete: "off",
        "data-role": "search",
        placeholder: m,
        value: o,
        onChange: l,
        onFocus: s,
        onBlur: i,
        onSelect: d,
        onKeyDown: u
      }));
    }
  },
  40987: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolSearchDialogContentItem: function SymbolSearchDialogContentItem() {
        return z;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n.n(o),
        l = (n(44352), n(50151)),
        s = n(9745),
        i = n(14483),
        c = n(24637),
        u = n(19785),
        d = n(84524),
        m = n(24633),
        p = n(77975),
        h = n(45345),
        g = n(32563),
        v = n(94474),
        f = n(93251),
        y = n(36279),
        b = n(44747);
    n(82112);
    var S = n(76068),
        x = n(58492),
        w = n(12767),
        k = n(43010),
        C = n(57240);
    var E = "tv-circle-logo--visually-hidden";

    function L(e) {
      var t = e.className,
          n = e.placeholderLetter,
          o = e.url1,
          l = e.url2,
          _e$size3 = e.size,
          s = _e$size3 === void 0 ? "xxxsmall" : _e$size3,
          i = (0, r.useRef)(null),
          c = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          m = (0, r.useRef)(null),
          p = (0, r.useRef)(null);
      return (0, k.useIsomorphicLayoutEffect)(function () {
        var e = void 0 === o ? [] : void 0 === l ? [o] : [o, l],
            t = p.current = (n = e, Promise.all(n.map(function (e) {
          return (0, w.getImage)("symbol_logo_".concat(e), e, I).then(function (e) {
            return e.cloneNode();
          });
        })));
        var n;
        t.then(function (e) {
          var n, r, o, a, l, s, h, g, v;
          if (t === p.current) switch (e.length) {
            case 0:
              null === (n = u.current) || void 0 === n || n.classList.add(C.hidden), null === (r = c.current) || void 0 === r || r.classList.add(E), null === (o = i.current) || void 0 === o || o.classList.remove(E);
              break;

            case 1:
              N(c.current, e[0]), null === (a = u.current) || void 0 === a || a.classList.add(C.hidden), null === (l = c.current) || void 0 === l || l.classList.remove(E), null === (s = i.current) || void 0 === s || s.classList.add(E);
              break;

            case 2:
              N(d.current, e[0]), N(m.current, e[1]), null === (h = u.current) || void 0 === h || h.classList.remove(C.hidden), null === (g = c.current) || void 0 === g || g.classList.add(E), null === (v = i.current) || void 0 === v || v.classList.add(E);
          }
        });
      }, [o, l]), r.createElement("span", {
        className: a()(t, C.container)
      }, r.createElement("span", {
        ref: u,
        className: a()(C.pairContainer, C.hidden)
      }, r.createElement("span", {
        className: (0, b.getBlockStyleClasses)(s)
      }, r.createElement("span", {
        ref: m,
        className: a()(C.logo, (0, b.getLogoStyleClasses)(s))
      }), r.createElement("span", {
        ref: d,
        className: a()(C.logo, (0, b.getLogoStyleClasses)(s))
      }))), r.createElement("span", {
        ref: c,
        className: a()(C.logo, E, (0, x.getStyleClasses)(s))
      }), r.createElement("span", {
        ref: i,
        className: a()(C.logo, (0, x.getStyleClasses)(s))
      }, r.createElement(S.CircleLogo, {
        size: s,
        placeholderLetter: n
      })));
    }

    function N(e, t) {
      e && (e.innerHTML = "", e.appendChild(t));
    }

    function I(e) {
      e.decoding = "async";
    }

    var R = n(54257);

    function _(e) {
      var t = e.logoId,
          n = e.baseCurrencyLogoId,
          o = e.currencyLogoId,
          l = e.placeholder,
          s = e.className,
          _e$size4 = e.size,
          i = _e$size4 === void 0 ? "xsmall" : _e$size4,
          c = (0, r.useMemo)(function () {
        var e = {
          logoid: t,
          "currency-logoid": o,
          "base-currency-logoid": n
        };
        return (0, f.removeUsdFromCryptoPairLogos)((0, f.resolveLogoUrls)(e, y.LogoSize.Medium));
      }, [t, o, n]);
      return r.createElement(L, {
        key: i,
        className: a()(R.logo, s),
        url1: c[0],
        url2: c[1],
        placeholderLetter: l,
        size: i
      });
    }

    function T(e) {
      return e === m.StdTheme.Dark ? n(64494) : n(2495);
    }

    var D = y.LogoSize.Medium;
    var B = n(33172);

    function M(e) {
      var t = e.country,
          n = e.providerId,
          o = e.sourceId,
          s = e.className,
          i = (0, p.useWatchedValueReadonly)({
        watchedValue: h.watchedTheme
      }),
          _ref5 = (0, r.useState)(function (_ref7) {
        var e = _ref7.country,
            t = _ref7.providerId,
            n = _ref7.sourceId;
        var r = (0, y.getLogoUrlResolver)();
        return function (o) {
          var a = function a(e) {
            return r.getProviderLogoUrl(e, D);
          },
              s = [{
            value: n,
            resolve: a
          }, {
            value: e,
            resolve: function resolve(e) {
              return r.getCountryFlagUrl(e.toUpperCase(), D);
            }
          }, {
            value: t,
            resolve: a
          }].find(function (_ref8) {
            var e = _ref8.value;
            return void 0 !== e && e.length > 0;
          });

          return void 0 !== s ? s.resolve((0, l.ensureDefined)(s.value)) : T(o);
        };
      }({
        country: t,
        providerId: n,
        sourceId: o
      })(i)),
          _ref6 = _slicedToArray(_ref5, 2),
          c = _ref6[0],
          u = _ref6[1];

      return r.createElement("img", {
        className: a()(s, B.icon),
        src: c,
        onError: function onError() {
          u(T(i));
        }
      });
    }

    var O = n(69533),
        A = n(39339);

    function z(e) {
      var t, n;

      var o = e.dangerousTitleHTML,
          f = e.title,
          y = e.dangerousDescriptionHTML,
          b = e.description,
          S = e.searchToken,
          x = e.exchangeName,
          w = e.marketType,
          k = e.onClick,
          C = e.isSelected,
          _e$isEod = e.isEod,
          E = _e$isEod === void 0 ? !1 : _e$isEod,
          _e$isActive = e.isActive,
          L = _e$isActive === void 0 ? !1 : _e$isActive,
          _e$isOffset = e.isOffset,
          N = _e$isOffset === void 0 ? !1 : _e$isOffset,
          _e$invalid = e.invalid,
          I = _e$invalid === void 0 ? !1 : _e$invalid,
          _e$isHighlighted = e.isHighlighted,
          R = _e$isHighlighted === void 0 ? !1 : _e$isHighlighted,
          _e$hideExchange = e.hideExchange,
          T = _e$hideExchange === void 0 ? !1 : _e$hideExchange,
          _e$hideMarkedListFlag = e.hideMarkedListFlag,
          D = _e$hideMarkedListFlag === void 0 ? !1 : _e$hideMarkedListFlag,
          B = e.onExpandClick,
          z = e.isExpanded,
          F = e.hoverComponent,
          Q = e.country,
          P = e.providerId,
          U = e.source,
          W = e.source2,
          V = e.type,
          Z = e.flag,
          K = e.itemRef,
          q = e.onMouseOut,
          j = e.onMouseOver,
          H = e.className,
          G = e.actions,
          $ = e.reference,
          Y = e.fullSymbolName,
          X = e.logoId,
          J = e.currencyLogoId,
          ee = e.baseCurrencyLogoId,
          te = e.shortName,
          _e$hideLogo = e.hideLogo,
          ne = _e$hideLogo === void 0 ? !1 : _e$hideLogo,
          re = e.exchangeTooltip,
          oe = e.hideMarketType,
          ae = e.isPrimary,
          _ref9 = (0, l.ensureNotNull)((0, r.useContext)(d.SymbolSearchItemsDialogContext)),
          le = _ref9.isSmallWidth,
          se = _ref9.isMobile,
          ie = Boolean(F),
          ce = !I && !T && (se || !ie),
          ue = (0, p.useWatchedValueReadonly)({
        watchedValue: h.watchedTheme
      }) === m.StdTheme.Dark ? A.dark : A.light,
          de = F,
          me = i.enabled("show_symbol_logos"),
          pe = i.enabled("show_exchange_logos"),
          he = me || !1,
          ge = null !== (t = null == W ? void 0 : W.description) && void 0 !== t ? t : U,
          ve = null !== (n = null == W ? void 0 : W.name) && void 0 !== n ? n : U;

      return r.createElement("div", {
        className: a()(A.itemRow, le && A.multiLine, R && A.highlighted, R && ue, C && A.selected, L && A.active, I && A.invalid, !se && g.mobiletouch && ie && A.hover, H),
        onClick: function onClick(e) {
          if (!k || e.defaultPrevented) return;
          e.preventDefault(), k(e);
        },
        "data-role": e["data-role"] || "list-item",
        "data-active": L,
        "data-type": w,
        "data-name": "symbol-search-dialog-content-item",
        onMouseOut: q,
        onMouseOver: j,
        ref: $
      }, r.createElement("div", {
        ref: K,
        className: a()(A.itemInfoCell, A.cell, N && A.offset)
      }, r.createElement("div", {
        className: a()(A.actionHandleWrap, !he && A.fixedWidth)
      }, r.createElement(r.Fragment, null, !1, B && r.createElement("div", {
        onClick: function onClick(e) {
          if (!B || e.defaultPrevented) return;
          e.preventDefault(), B(e);
        }
      }, r.createElement(s.Icon, {
        className: a()(A.expandHandle, z && A.expanded, C && A.selected),
        icon: O
      })), he && !N && r.createElement("div", {
        className: a()(A.logo, Boolean(B) && A.isExpandable)
      }, r.createElement(_, {
        key: Y,
        logoId: X,
        currencyLogoId: J,
        baseCurrencyLogoId: ee,
        placeholder: te ? te[0] : void 0
      })))), r.createElement("div", {
        className: a()(A.description, he && N && A.offset)
      }, f && r.createElement("div", {
        className: a()(A.symbolTitle, L && A.active, I && A.invalid, !Boolean(y) && A.noDescription),
        "data-name": "list-item-title"
      }, "string" == typeof f && S ? r.createElement(c.HighlightedText, {
        className: A.highlightedText,
        text: f,
        queryString: S,
        rules: (0, u.createRegExpList)(S)
      }) : f, E && r.createElement("span", {
        className: A.dataMode
      }, "E")), !f && o && r.createElement("div", {
        className: a()(A.symbolTitle, L && A.active, I && A.invalid),
        "data-name": "list-item-title"
      }, r.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: o
        }
      }), E && r.createElement("span", {
        className: A.dataMode
      }, "E")), le && fe())), !le && r.createElement("div", {
        className: a()(A.cell, A.descriptionCell, Boolean(de) && A.addition)
      }, fe(), de ? r.createElement(de, _objectSpread({}, e, {
        className: A.actions,
        onMouseOver: void 0,
        onMouseOut: void 0
      })) : null), le && de ? r.createElement(de, _objectSpread({}, e, {
        className: A.cell,
        onMouseOver: void 0,
        onMouseOut: void 0
      })) : null, ce && r.createElement("div", {
        className: a()(A.exchangeCell, A.cell)
      }, r.createElement("div", {
        className: a()(A.exchangeDescription)
      }, !oe && r.createElement("div", {
        className: a()(A.marketType, L && A.active)
      }, w), r.createElement("div", {
        className: A.source
      }, !1, "economic" === V && ge && ve ? r.createElement("div", {
        className: a()(A.exchangeName, L && A.active, "apply-common-tooltip", A.narrow, oe && A.wide),
        title: ge
      }, ve) : r.createElement("div", {
        className: a()(A.exchangeName, L && A.active, re && "apply-common-tooltip"),
        title: re
      }, x))), pe && r.createElement("div", {
        className: A.flag
      }, r.createElement(M, {
        key: pe ? "".concat(Y, "_exchange") : "".concat(Q, "_").concat(P, "_").concat(null == W ? void 0 : W.id, "_").concat(V, "_").concat(Z),
        className: A.icon,
        country: Q,
        providerId: P,
        sourceId: "economic" === V && W ? W.id : void 0
      }))), r.createElement("div", {
        className: a()(A.cell, Boolean(G) && A.actionsCell)
      }, G));

      function fe() {
        if (I) return null;
        var e = a()(A.symbolDescription, L && A.active, !g.mobiletouch && "apply-overflow-tooltip apply-overflow-tooltip--allow-text");
        return b ? r.createElement("div", {
          className: e
        }, S ? r.createElement(c.HighlightedText, {
          className: A.highlightedText,
          text: b,
          queryString: S,
          rules: (0, u.createRegExpList)(S)
        }) : b) : y ? r.createElement("div", {
          "data-overflow-tooltip-text": (0, v.removeTags)(y),
          className: e,
          dangerouslySetInnerHTML: {
            __html: y
          }
        }) : null;
      }
    }
  },
  58442: function _(e, t, n) {
    "use strict";

    n.d(t, {
      QualifiedSources: function QualifiedSources() {
        return r;
      },
      qualifyProName: function qualifyProName() {
        return l;
      }
    });
    var r,
        o = n(50151),
        a = n(14483);
    n(81319);

    function l(e) {
      return e;
    }

    !function (e) {
      function t(e) {
        return e.pro_name;
      }

      function n(e) {
        {
          var _t2 = a.enabled("pay_attention_to_ticker_not_symbol") ? e.ticker : e.full_name;

          return (0, o.ensureDefined)(_t2);
        }
      }

      e.fromQuotesSnapshot = function (e) {
        return "error" === e.status ? e.symbolname : e.values.pro_name;
      }, e.fromQuotesResponse = function (e) {
        var n = e.values,
            r = e.symbolname,
            o = e.status;
        return "error" === o && r ? r : t(n);
      }, e.fromQuotes = t, e.fromSymbolSearchResult = function (e, t) {
        {
          var _ref10 = null != t ? t : e,
              _n3 = _ref10.ticker,
              _r2 = _ref10.full_name;

          return a.enabled("pay_attention_to_ticker_not_symbol") ? (0, o.ensureDefined)(null != _n3 ? _n3 : _r2) : (0, o.ensureDefined)(_r2);
        }
      }, e.fromSymbolInfo = n, e.fromSymbolMessage = function (e, t) {
        return "symbol_resolved" === t.method ? n(t.params[1]) : e;
      };
    }(r || (r = {}));
  },
  20882: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createSearchSources: function createSearchSources() {
        return s;
      },
      filterSearchSources: function filterSearchSources() {
        return a;
      },
      isAllSearchSourcesSelected: function isAllSearchSourcesSelected() {
        return o;
      },
      splitSearchSourcesByGroup: function splitSearchSourcesByGroup() {
        return l;
      }
    });
    var r = [];

    function o(e) {
      return "" === e.value();
    }

    function a(e, t) {
      return e.filter(function (e) {
        return e.includes(t);
      });
    }

    function l(e) {
      var t = new Map();
      e.forEach(function (e) {
        t.has(e.group()) ? t.get(e.group()).push(e) : t.set(e.group(), [e]);
      });
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = t.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _e4 = _step2.value;
          _e4[0].group() !== ExchangeGroup.NorthAmerica && _e4.sort(function (e, t) {
            return e.name().toLowerCase() > t.name().toLowerCase() ? 1 : -1;
          });
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

      return new Map(_toConsumableArray(t.entries()).sort(function (_ref11, _ref12) {
        var _ref13 = _slicedToArray(_ref11, 1),
            e = _ref13[0];

        var _ref14 = _slicedToArray(_ref12, 1),
            t = _ref14[0];

        return r.indexOf(e) - r.indexOf(t);
      }));
    }

    function s(e, t) {
      return t.map(function (t) {
        return new e(t);
      });
    }
  },
  70613: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolSearchDialogBodyContext: function SymbolSearchDialogBodyContext() {
        return r;
      }
    });
    var r = n(50959).createContext(null);
  },
  84524: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolSearchItemsDialogContext: function SymbolSearchItemsDialogContext() {
        return r;
      }
    });
    var r = n(50959).createContext(null);
  },
  32456: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SymbolSearchItemsDialog: function SymbolSearchItemsDialog() {
        return We;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n.n(o),
        l = n(44352),
        s = n(15983);
    var i = ["futures", "forex", "bond", "economic"];
    var c = n(84877),
        u = n(14483),
        d = n(24437),
        m = n(35057),
        p = n(9745),
        h = n(84524),
        g = n(69654),
        v = n(20882),
        f = n(54638);

    function y(e) {
      var t = e.children,
          n = e.className;
      return r.createElement("div", {
        className: a()(f.container, n)
      }, r.createElement("div", {
        className: f.childrenWrapper
      }, t));
    }

    var b = n(50151),
        S = n(78036),
        x = n(24637),
        w = n(19785),
        k = n(81319),
        C = n(91540),
        E = n(50674);

    function L(e) {
      var t = e.searchSource,
          n = e.onClick,
          o = e.queryString,
          _ref15 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          l = _ref15.symbolSearchContent,
          s = _ref15.isAllSearchSourcesSelected,
          i = _ref15.allSearchSourcesTitle,
          c = _ref15.isMobile,
          u = l.currentSelectedSearchSource,
          d = (0, b.ensureNotNull)(u).value(),
          m = s(t),
          g = t.value() === d,
          v = (0, r.useMemo)(function () {
        return (0, w.createRegExpList)(o);
      }, [o]),
          f = t.description(),
          y = f && !m,
          L = k.isSeparateSymbolSearchTabs && m && i ? i : t.name(),
          N = a()(E.container, c ? E.mobile : E.desktop, g && E.selected, m && E.allSelected, m && E.libAllSelected, !m && c && E.bordered);

      return r.createElement("div", {
        className: a()(!c && E.wrap, m && E.libAllSelected),
        onClick: n
      }, r.createElement("div", {
        className: N
      }, r.createElement("div", {
        className: E.iconWrap
      }, !!m && r.createElement(p.Icon, {
        className: a()(E.icon, E.allSelectedIcon),
        icon: C
      })), r.createElement("div", {
        className: E.textBlock
      }, r.createElement("div", {
        className: a()(E.title, !y && !c && E.titleWithoutDesc)
      }, r.createElement(x.HighlightedText, {
        className: a()(g && E.highlighted),
        queryString: o,
        text: L,
        rules: v
      })), y && r.createElement("div", {
        className: a()(E.description, "apply-overflow-tooltip")
      }, r.createElement(x.HighlightedText, {
        className: E.highlighted,
        queryString: o,
        rules: v,
        text: f
      })))));
    }

    var N = n(77975),
        I = n(45345),
        R = n(26843),
        _ = n(70613),
        T = n(66619),
        D = n(67562),
        B = n(70699);

    var M = {
      emptyTextClassName: B.emptyText
    };

    function O(e) {
      var t = e.searchSources,
          _ref16 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          o = _ref16.setSelectedSearchSource,
          s = _ref16.setMode,
          i = _ref16.isMobile,
          c = _ref16.emptyState,
          u = _ref16.autofocus,
          d = (0, N.useWatchedValueReadonly)({
        watchedValue: I.watchedTheme
      }) === R.StdTheme.Dark ? T : D,
          _ref17 = (0, r.useState)(""),
          _ref18 = _slicedToArray(_ref17, 2),
          m = _ref18[0],
          f = _ref18[1],
          b = (0, r.useMemo)(function () {
        return [{
          group: null,
          sources: (0, v.filterSearchSources)(t, m)
        }];
      }, [t, m]),
          x = (0, r.useRef)(null),
          w = (0, r.useRef)(null);

      (0, r.useLayoutEffect)(function () {
        var e;
        u && (null === (e = null == x ? void 0 : x.current) || void 0 === e || e.focus());
      }, []);
      var k = c ? r.createElement(c, null) : r.createElement(y, {
        className: B.noResultsDesktop
      }, r.createElement(p.Icon, {
        icon: d,
        className: B.emptyIcon
      }), r.createElement("div", {
        className: B.emptyText
      }, l.t(null, void 0, n(29673)))),
          C = !(b.length && b.every(function (e) {
        return 0 === e.sources.length;
      }));
      return r.createElement(_.SymbolSearchDialogBodyContext.Provider, {
        value: M
      }, r.createElement(g.DialogSearch, {
        placeholder: l.t(null, void 0, n(52298)),
        onChange: function onChange(e) {
          f(e.target.value), w && w.current && (w.current.scrollTop = 0);
        },
        reference: x
      }), C ? r.createElement("div", {
        ref: w,
        className: a()(B.contentList, !i && B.contentListDesktop),
        onTouchStart: function onTouchStart() {
          var e;
          null === (e = x.current) || void 0 === e || e.blur();
        }
      }, b.map(function (e) {
        var t = e.group,
            n = e.sources;
        return 0 === n.length ? r.createElement(r.Fragment, {
          key: t
        }) : r.createElement(r.Fragment, {
          key: t
        }, !1, r.createElement("div", {
          className: a()(B.searchSourceItemsContainer, !i && B.searchSourceItemsContainerDesktop)
        }, n.map(function (e) {
          return r.createElement(L, {
            key: e.value(),
            searchSource: e,
            queryString: m,
            onClick: E.bind(null, e)
          });
        })));
      })) : k);

      function E(e) {
        o(e), s("symbolSearch");
      }
    }

    var A = n(962),
        z = n(45884);
    n(76861), n(69798);

    function F(e) {
      return e.hasOwnProperty("exchange");
    }

    function Q(e) {
      var _t3;

      return regeneratorRuntime.async(function Q$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(function _callee(e) {
                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (t) {
                          window.ChartApiInstance.searchSymbols(e.text || "", e.exchange || "", e.type || "", "", !1, !0, "", !0, "", function (e) {
                            t(e);
                          });
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }(e));

            case 2:
              _t3 = _context2.sent;
              return _context2.abrupt("return", {
                symbols: _t3,
                symbols_remaining: 0
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }

    new Map([].map(function (_ref19) {
      var e = _ref19.value,
          t = _ref19.search_type;
      return [e, t];
    }));
    var P = n(78136),
        U = n(51768),
        W = n(68335),
        V = n(31409),
        Z = n(44254),
        K = n(486),
        q = n(81574),
        j = n(35119),
        H = n(32617),
        G = n(69135),
        $ = n(63861),
        Y = n(52597);

    function X(e) {
      var t;

      var n = e.state,
          o = e.update,
          _ref20 = (0, b.ensureNotNull)((0, r.useContext)(h.SymbolSearchItemsDialogContext)),
          a = _ref20.searchRef,
          l = _ref20.forceUpdate,
          i = _ref20.upperCaseEnabled,
          c = (0, Z.tokenize)(null === (t = a.current) || void 0 === t ? void 0 : t.value),
          d = (0, s.validate)(c);

      var m = [{
        icon: K,
        insert: "/",
        type: "binaryOp",
        name: "division"
      }, {
        icon: q,
        insert: "-",
        type: "binaryOp",
        name: "subtraction"
      }, {
        icon: j,
        insert: "+",
        type: "binaryOp",
        name: "addition"
      }, {
        icon: H,
        insert: "*",
        type: "binaryOp",
        name: "multiplication"
      }];
      return u.enabled("hide_exponentiation_spread_operator") || (m = m.concat([{
        icon: G,
        insert: "^",
        type: "binaryOp",
        name: "exponentiation"
      }])), u.enabled("hide_reciprocal_spread_operator") || (m = m.concat([{
        icon: $,
        type: "complete",
        name: "1/x",
        callback: function callback() {
          !a.current || d.errors.length || d.warnings.length || (a.current.value = (0, s.stringifyTokens)((0, s.flip)(c)), l());
        }
      }])), r.createElement("div", {
        className: Y.actions
      }, m.map(function (e) {
        return r.createElement(V.ToolWidgetButton, {
          className: Y.actionButton,
          icon: e.icon,
          key: e.name,
          isDisabled: J(e, d),
          onClick: function onClick() {
            return function (e) {
              var t;

              if (!J(e, d)) {
                if (e.insert && a.current) {
                  var _t4 = a.current.value + e.insert;

                  a.current.value = _t4, a.current.setSelectionRange(_t4.length, _t4.length);

                  var _ref21 = (0, s.getCurrentTokenParamsFromInput)(a.current, i),
                      _ref22 = _slicedToArray(_ref21, 3),
                      _r3 = _ref22[0],
                      _c = _ref22[2];

                  n.current && (n.current.selectedIndexValue = -1, n.current.searchSpreadsValue = (0, s.isSpread)(_c), n.current.searchTokenValue = _r3), l(), o();
                }

                e.callback && e.callback(), null === (t = a.current) || void 0 === t || t.focus(), (0, U.trackEvent)("GUI", "SS", e.name);
              }
            }(e);
          }
        });
      }));
    }

    function J(e, t) {
      var n = !1;
      if (!t.errors.length) switch (e.type) {
        case "binaryOp":
          n = "var" === t.currentState;
          break;

        case "openBrace":
          n = "var" !== t.currentState;
          break;

        case "closeBrace":
          n = "var" === t.currentState && t.braceBalance > 0;
          break;

        case "complete":
          n = !t.errors.length && !t.warnings.length;
      }
      return !n;
    }

    var ee = n(90186),
        te = n(61371);

    function ne(e) {
      var t = e.title,
          n = e.isActive,
          r = e.isAnimated,
          o = e.activeColor,
          _e$size5 = e.size,
          l = _e$size5 === void 0 ? "m" : _e$size5,
          _e$appearance = e.appearance,
          s = _e$appearance === void 0 ? "default" : _e$appearance,
          _e$fontSize = e.fontSize,
          i = _e$fontSize === void 0 ? "m" : _e$fontSize,
          c = e.grayStyles,
          u = e.className;
      return a()(te.bubble, n && te.active, o && te[o], t && "apply-common-tooltip", l && te["size-".concat(l)], i && te["fontSize-".concat(i)], s && te["appearance-".concat(s)], r && te.animated, c && te.gray, u);
    }

    function re(e) {
      var t = e.id,
          n = e.title,
          o = e.tabIndex,
          l = e.role,
          s = e.contentClassName,
          i = e.children,
          c = e.onClick,
          u = e.onMouseDown,
          d = e.reference,
          m = e.grayStyles,
          p = _objectWithoutProperties(e, ["id", "title", "tabIndex", "role", "contentClassName", "children", "onClick", "onMouseDown", "reference", "grayStyles"]);

      return r.createElement("span", _objectSpread({}, (0, ee.filterAriaProps)(p), {}, (0, ee.filterDataProps)(p), {
        id: t,
        title: n,
        tabIndex: o,
        role: l,
        className: ne(e),
        onClick: c,
        onMouseDown: u,
        ref: d
      }), r.createElement("span", {
        className: a()(te.content, s)
      }, i));
    }

    var oe = n(88389);

    function ae(e) {
      var t = e.className,
          n = e.itemClassName,
          a = e.itemContentClassName,
          l = e.items,
          s = e.getItemTitle,
          i = e.getItemTooltip,
          c = e.getItemKey,
          u = e.checkItemIsActive,
          d = e.getItemColor,
          m = e.onBubbleClick,
          p = e.multiline,
          h = e.children,
          _e$BubbleComponent = e.BubbleComponent,
          g = _e$BubbleComponent === void 0 ? re : _e$BubbleComponent,
          v = e.reference,
          f = e.fontSize,
          y = e.grayStyles;
      return r.createElement("div", {
        className: o(t, oe.bubbles, p && oe.multiLine),
        ref: v
      }, l.map(function (e, t) {
        return r.createElement(g, {
          key: c ? c(e) : t,
          id: c ? c(e) : t.toString(),
          className: o(oe.bubble, n),
          contentClassName: a,
          onClick: function onClick() {
            m(e);
          },
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
          },
          isActive: !!u && u(e),
          activeColor: d ? d(e) : void 0,
          fontSize: f,
          title: i ? i(e) : void 0,
          grayStyles: y
        }, s(e));
      }), h);
    }

    var le = n(63932),
        se = n(20037),
        ie = n(29006),
        ce = n(90744),
        ue = n(10381),
        de = n(52019),
        me = n(14444);
    var pe = (0, k.getDefaultSearchSource)();

    function he(e) {
      var _ref23 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          t = _ref23.mode,
          o = _ref23.setMode,
          s = _ref23.searchRef,
          i = _ref23.cachedInputValue,
          c = _ref23.setSelectedSearchSource,
          u = _ref23.isAllSearchSourcesSelected,
          d = _ref23.allSearchSourcesTitle,
          m = _ref23.upperCaseEnabled,
          g = _ref23.symbolSearchContent,
          v = g.currentSelectedSearchSource,
          f = (0, b.ensureNotNull)(v),
          y = "symbolSearch" === t,
          x = u(f),
          w = k.isSeparateSymbolSearchTabs && x && d ? d : f.name(),
          E = (0, r.useCallback)(function () {
        k.isSeparateSymbolSearchTabs && !x && pe ? c(pe) : (s.current && (i.current = m ? s.current.value.toUpperCase() : s.current.value), o("exchange"));
      }, [x, s, m, o, c]);

      return k.isSeparateSymbolSearchTabs ? y ? r.createElement(ce.LightButton, {
        onClick: E,
        isPills: !x,
        size: "xsmall",
        variant: x ? "ghost" : "quiet-primary",
        showCaret: x,
        endIcon: x ? void 0 : de,
        enableActiveStateStyles: !1,
        className: a()(me.button, !x && me.withFlag, "apply-common-tooltip"),
        title: w,
        tabIndex: -1,
        "data-name": "sources-button"
      }, r.createElement("div", {
        className: me.buttonContent
      }, null, r.createElement("span", null, w))) : null : y ? r.createElement("div", {
        className: a()(me.flagWrap, "apply-common-tooltip", !x && me.withFlag),
        title: l.t(null, void 0, n(13269)),
        onClick: E,
        "data-name": "sources-button"
      }, x && r.createElement(p.Icon, {
        className: me.icon,
        icon: C
      }), null, r.createElement("div", {
        className: a()(me.title)
      }, w), r.createElement(ue.ToolWidgetCaret, {
        className: me.caret,
        dropped: !1
      })) : null;
    }

    var ge = n(37796);

    function ve(e) {
      var _e$brokerButton = e.brokerButton,
          t = _e$brokerButton === void 0 ? null : _e$brokerButton,
          _ref24 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          o = _ref24.isSmallWidth,
          s = _ref24.selectedFilterValues,
          i = _ref24.setSelectedFilterValues,
          c = _ref24.isMobile,
          u = _ref24.searchRef,
          d = _ref24.symbolSearchContent,
          m = d.tabSelectFilters;

      return k.isSeparateSymbolSearchTabs ? r.createElement("div", {
        className: a()(ge.wrap, ge.small, ge.newStyles, c && ge.mobile)
      }, t && r.createElement("div", {
        className: ge.brokerWrap
      }, t), d.canChangeExchange && r.createElement("div", {
        className: ge.filterItem
      }, r.createElement(he, null)), m && m.map(function (e) {
        var t = e.id,
            n = e.options,
            o = e.label,
            a = n.find(function (e) {
          return e.value === FILTER_DEFAULT_VALUE;
        });
        if (!a) throw new Error("There must be default filter value in filter definition");
        var l = n.find(function (e) {
          var n;
          return e.value === (null === (n = s[d.currentSymbolType]) || void 0 === n ? void 0 : n[t]);
        }) || a;
        return r.createElement("div", {
          key: t,
          className: ge.filterItem
        }, r.createElement(SymbolSearchSelectFilter, {
          selectedOption: l,
          defaultOption: a,
          options: n,
          onSelect: function onSelect(e) {
            var n;
            i(d.currentSymbolType, _defineProperty({}, t, e.value)), trackEvent("New SS", d.currentSymbolType, null === e.value ? e.analyticsLabel : e.value), null === (n = u.current) || void 0 === n || n.focus();
          },
          label: o,
          isMobile: c,
          "data-name": t
        }));
      })) : r.createElement("div", {
        className: a()(ge.wrap, o && ge.small)
      }, r.createElement("div", {
        className: ge.item
      }, r.createElement("div", {
        className: ge.text
      }, o ? l.t(null, void 0, n(48490)) : l.t(null, void 0, n(89053)))), r.createElement("div", {
        className: ge.item
      }, !o && r.createElement("div", {
        className: ge.text
      }, l.t(null, void 0, n(29601))), d.canChangeExchange && r.createElement("div", {
        className: ge.exchange
      }, r.createElement(he, null))));
    }

    var fe = n(38223),
        ye = n(52662);

    function be(e) {
      var t = e.onTouchMove,
          n = e.listRef,
          o = e.className,
          l = e.listWrapRef,
          s = e.virtualListKey,
          i = e.items,
          c = e.getItemSize,
          u = e.hideFeed,
          d = e.canLoadMore,
          m = e.onLoadMoreSymbols,
          _ref25 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          p = _ref25.mode,
          g = _ref25.isSmallWidth,
          v = _ref25.handleListWidth,
          _ref26 = (0, r.useState)(null),
          _ref27 = _slicedToArray(_ref26, 2),
          f = _ref27[0],
          y = _ref27[1],
          x = (0, ie.useResizeObserver)(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 1),
            e = _ref29[0];

        y(e.contentRect.height), v(e.contentRect.width);
      }),
          w = (0, r.useCallback)(function (e) {
        var t = e.index,
            n = e.style;
        return r.createElement("div", {
          style: n
        }, i[t]);
      }, [i]),
          C = (0, r.useCallback)(function (e) {
        return (0, b.ensure)(i[e].key);
      }, [i]),
          E = "watchlist" === p && null !== f;

      return r.createElement("div", {
        className: a()(ye.wrap, E && ye.watchlist, u && ye.noFeed, u && k.isSeparateSymbolSearchTabs && ye.newStyles, o),
        onTouchMove: t,
        ref: x
      }, r.createElement("div", {
        ref: l,
        className: a()(ye.scrollContainer, u && ye.noFeed)
      }, E ? r.createElement(se.VariableSizeList, {
        key: s,
        ref: n,
        className: ye.listContainer,
        width: "100%",
        height: (0, b.ensureNotNull)(f),
        itemCount: i.length,
        itemSize: c,
        children: w,
        itemKey: C,
        overscanCount: 20,
        direction: (0, fe.isRtl)() ? "rtl" : "ltr"
      }) : r.createElement(r.Fragment, null, r.createElement.apply(r, ["div", {
        className: a()(ye.listContainer, g && ye.multiLineItemsContainer)
      }, !k.isSeparateSymbolSearchTabs && r.createElement(ve, null)].concat(_toConsumableArray(i), [!1])))));
    }

    var Se = n(40987),
        xe = n(85544);
    var we = u.enabled("hide_image_invalid_symbol");

    function ke(e) {
      var t = e.otherSymbolsCount,
          n = e.onChangeSymbolTypeFilter,
          a = e.onResetFilters,
          l = e.onListTouchMove,
          s = e.brokerTitle,
          i = e.brokerLogoInfo,
          c = e.isBrokerActive,
          u = e.onBrokerToggle,
          d = e.listRef,
          m = e.listWrapRef,
          p = e.onLoadMoreSymbols,
          g = e.canLoadMore,
          _ref30 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          v = _ref30.mode,
          f = _ref30.isMobile,
          y = _ref30.selectedSymbolType,
          b = _ref30.symbolTypes,
          x = _ref30.feedItems,
          w = _ref30.contentItem,
          _ref30$emptyState = _ref30.emptyState,
          C = _ref30$emptyState === void 0 ? Ce : _ref30$emptyState,
          E = _ref30.symbolSearchContent,
          L = _ref30.symbolSearchState,
          N = s ? r.createElement(BrokerButton, {
        brokerTitle: s,
        isActive: c,
        onToggle: u,
        logoInfo: i
      }) : null,
          I = "symbolSearch" === v && ["good", "loadingWithPaginated"].includes(L),
          R = null != w ? w : Se.SymbolSearchDialogContentItem,
          _ = (0, r.useMemo)(function () {
        return x.map(function (e) {
          return r.createElement(R, _objectSpread({}, e, {
            searchToken: E.token
          }));
        });
      }, [x]);

      return r.createElement(r.Fragment, null, "symbolSearch" === v && r.createElement(r.Fragment, null, b.length > 0 && r.createElement(ae, {
        className: o(k.isSeparateSymbolSearchTabs && (E.withFilters || f && N) && xe.withFilters, !f && N && xe.withButton),
        itemClassName: xe.symbolType,
        items: b,
        getItemTitle: function getItemTitle(e) {
          return e.name;
        },
        getItemKey: function getItemKey(e) {
          return e.value;
        },
        checkItemIsActive: function checkItemIsActive(e) {
          return e.value === y;
        },
        onBubbleClick: n,
        multiline: !f,
        grayStyles: !0
      }, !f && r.createElement("div", {
        className: xe.brokerButton
      }, N)), !k.isSeparateSymbolSearchTabs && f && b.length > 0 && s && r.createElement("div", {
        className: xe.brokerButtonWrap
      }, N), k.isSeparateSymbolSearchTabs && r.createElement(ve, {
        brokerButton: f ? N : void 0
      })), r.createElement(be, {
        listRef: d,
        listWrapRef: m,
        onTouchMove: l,
        items: _,
        getItemSize: function getItemSize() {
          return Le;
        },
        onLoadMoreSymbols: p,
        canLoadMore: g,
        hideFeed: !I
      }), "loading" === L && r.createElement("div", {
        className: xe.spinnerWrap
      }, r.createElement(le.Spinner, null)), "symbolSearch" === v && r.createElement(r.Fragment, null, !1, "empty" === L && r.createElement(C, null)));
    }

    function Ce(e) {
      var t = (0, N.useWatchedValueReadonly)({
        watchedValue: I.watchedTheme
      }) === R.StdTheme.Dark ? T : D;
      return r.createElement(y, {
        className: xe.noResultsDesktop
      }, !we && r.createElement(p.Icon, {
        icon: t,
        className: xe.emptyIcon
      }), r.createElement("div", {
        className: xe.emptyText
      }, l.t(null, void 0, n(41379))));
    }

    var Ee = (0, k.getDefaultSearchSource)(),
        Le = 52;

    function Ne(e) {
      var _ref31 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          t = _ref31.mode,
          o = _ref31.setMode,
          i = _ref31.setSelectedIndex,
          c = _ref31.isMobile,
          d = _ref31.selectedSearchSource,
          m = _ref31.setSelectedSearchSource,
          p = _ref31.isAllSearchSourcesSelected,
          v = _ref31.selectedSymbolType,
          f = _ref31.setSelectedSymbolType,
          y = _ref31.symbolSearchContent,
          b = _ref31.setSymbolSearchContent,
          x = _ref31.searchRef,
          w = _ref31.setSearchSpreads,
          C = _ref31.showSpreadActions,
          E = _ref31.selectedItem,
          L = _ref31.forceUpdate,
          N = _ref31.placeholder,
          I = _ref31.initialScreen,
          R = _ref31.footer,
          T = _ref31.searchInput,
          D = _ref31.upperCaseEnabled,
          B = _ref31.externalInput,
          M = _ref31.handleKeyDown,
          O = _ref31.customSearchSymbols,
          V = _ref31.filterDefinitions,
          Z = _ref31.filterQueryParams,
          K = _ref31.searchSources,
          q = _ref31.symbolSearchState,
          j = _ref31.setSymbolSearchState,
          H = (0, r.useRef)(t);

      H.current = t;

      var G = (0, r.useRef)(new AbortController()),
          _ref32 = (0, r.useState)(0),
          _ref33 = _slicedToArray(_ref32, 2),
          $ = _ref33[0],
          Y = _ref33[1],
          J = (0, r.useRef)(0),
          _ref34 = (0, r.useState)(y.token),
          _ref35 = _slicedToArray(_ref34, 2),
          ee = _ref35[0],
          te = _ref35[1],
          ne = (0, r.useRef)(null),
          re = (0, r.useRef)(null),
          oe = (0, r.useRef)({
        selectedIndexValue: -1,
        searchTokenValue: "",
        searchSpreadsValue: !0
      }),
          ae = (0, r.useRef)(null),
          le = (0, r.useRef)(null),
          _brokerId$brokerTitle = {
        brokerId: void 0,
        brokerTitle: void 0,
        brokerLogoInfo: void 0
      },
          _brokerId$brokerTitle2 = _brokerId$brokerTitle.broker,
          se = _brokerId$brokerTitle2 === void 0 ? null : _brokerId$brokerTitle2,
          ie = _brokerId$brokerTitle.brokerId,
          ce = _brokerId$brokerTitle.brokerTitle,
          ue = _brokerId$brokerTitle.brokerLogoInfo,
          _brokerId$brokerTitle3 = _brokerId$brokerTitle.isBrokerChecked,
          de = _brokerId$brokerTitle3 === void 0 ? !1 : _brokerId$brokerTitle3,
          _brokerId$brokerTitle4 = _brokerId$brokerTitle.setIsBrokerChecked,
          me = _brokerId$brokerTitle4 === void 0 ? function () {} : _brokerId$brokerTitle4,
          _brokerId$brokerTitle5 = _brokerId$brokerTitle.unhideSymbolSearchGroups,
          pe = _brokerId$brokerTitle5 === void 0 ? "" : _brokerId$brokerTitle5;

      (0, r.useEffect)(function () {
        return function () {
          G.current.abort(), _e();
        };
      }, []), (0, r.useEffect)(function () {
        (null == x ? void 0 : x.current) && te(x.current.value);
      }, []), (0, r.useEffect)(function () {
        var e = x.current;
        if (e) return e.addEventListener("input", Se), e.addEventListener("focus", Ie), e.addEventListener("select", be), e.addEventListener("click", be), e.addEventListener("keyup", Re), B && M && e.addEventListener("keydown", M), function () {
          e && (e.removeEventListener("input", Se), e.removeEventListener("focus", Ie), e.removeEventListener("select", be), e.removeEventListener("click", be), e.removeEventListener("keyup", Re), B && M && e.removeEventListener("keydown", M));
        };
      }, [M]), (0, r.useEffect)(function () {
        Boolean(I) && "" === ee.trim() || (b(function (e) {
          return _objectSpread({}, e, {
            symbolStartIndex: 0
          });
        }), Ce(ee, v, d).then(function () {
          ne.current && (ne.current.scrollTop = 0);
        }));
      }, [ee, v, d, de, I, Z]), (0, r.useEffect)(function () {
        var e;
        if (!E || !x.current) return;
        if (!u.enabled("show_spread_operators")) return x.current.value = E.symbol, void L();
        var t = F(E) ? E.exchange : E.parent.exchange;
        var n;
        n = "contracts" in E && (null === (e = E.contracts) || void 0 === e ? void 0 : e.length) ? E.contracts[0] : E;

        var r = {
          name: n.symbol,
          exchange: t,
          prefix: n.prefix,
          fullName: n.full_name
        },
            _ref36 = (0, s.getNextSymbolInputValueAndPosition)(x.current, r, D),
            _ref37 = _slicedToArray(_ref36, 2),
            o = _ref37[0],
            a = _ref37[1];

        x.current.value = o, x.current.setSelectionRange(a, a), L();
      }, [E]);
      var he = null != I ? I : "div",
          ge = Boolean(I) && "symbolSearch" !== t,
          ve = null != T ? T : g.DialogSearch,
          fe = (0, r.useMemo)(function () {
        return {
          listRef: re,
          resetRecommends: Ne,
          updateRecommends: Ce,
          searchToken: ee,
          emptyTextClassName: xe.emptyText,
          isBrokerChecked: de,
          symbolSearchState: q,
          currentMode: H
        };
      }, [re, ee, de, q, H, Z]);
      return r.createElement(_.SymbolSearchDialogBodyContext.Provider, {
        value: fe
      }, !(B && "symbolSearch" === t) && r.createElement(ve, {
        reference: x,
        className: a()(xe.search, D && xe.upperCase),
        placeholder: N || l.t(null, void 0, n(52298))
      }, C && r.createElement(X, {
        state: oe,
        update: we
      })), ge ? r.createElement(he, null) : r.createElement(ke, {
        otherSymbolsCount: $,
        onListTouchMove: function onListTouchMove() {
          var e;
          null === (e = x.current) || void 0 === e || e.blur();
        },
        onChangeSymbolTypeFilter: function onChangeSymbolTypeFilter(e) {
          var t = e.value;
          f(t), i(-1);
        },
        onResetFilters: function onResetFilters() {
          var e;
          k.isSeparateSymbolSearchTabs ? "resetFilter" === q ? f((0, k.getAllSymbolTypesValue)()) : Ee && m(Ee) : (f((0, k.getAllSymbolTypesValue)()), Ee && m(Ee));
          me(!1), c || null === (e = x.current) || void 0 === e || e.focus();
        },
        brokerTitle: ce,
        brokerLogoInfo: ue,
        isBrokerActive: de,
        onBrokerToggle: me,
        listRef: re,
        listWrapRef: ne,
        onLoadMoreSymbols: void 0,
        canLoadMore: void 0
      }), R);

      function ye() {
        if (!x.current) return;

        var _ref38 = (0, s.getCurrentTokenParamsFromInput)(x.current, D),
            _ref39 = _slicedToArray(_ref38, 3),
            e = _ref39[0],
            t = _ref39[1],
            n = _ref39[2];

        J.current = t, oe.current = {
          selectedIndexValue: -1,
          searchSpreadsValue: (0, s.isSpread)(n),
          searchTokenValue: e
        }, ae.current || (ae.current = setTimeout(we, 0));
      }

      function be() {
        if (!x.current) return;

        var _ref40 = (0, s.getCurrentTokenParamsFromInput)(x.current, D),
            _ref41 = _slicedToArray(_ref40, 2),
            e = _ref41[1];

        e !== J.current && ye();
      }

      function Se() {
        u.enabled("show_spread_operators") ? ye() : x.current && (oe.current = {
          selectedIndexValue: -1,
          searchSpreadsValue: !1,
          searchTokenValue: x.current.value
        }, ae.current || (ae.current = setTimeout(we, 0)));
      }

      function we() {
        var _oe$current = oe.current,
            e = _oe$current.selectedIndexValue,
            t = _oe$current.searchTokenValue,
            n = _oe$current.searchSpreadsValue;
        ae.current = null, (0, A.unstable_batchedUpdates)(function () {
          w(n), i(e), te(D ? t.toUpperCase() : t);
        });
      }

      function Ce(e, t, n, r) {
        var o, a, l, _i3, _c2, _m, _p, _ref42, _ref43, _h, _g, _v, _f, _S, _x;

        return regeneratorRuntime.async(function Ce$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                "noop" === q ? j("loading") : r ? j("loadingWithPaginated") : (_e(), le.current = setTimeout(function () {
                  b({
                    token: e,
                    canChangeExchange: Boolean(d && K.length > 1 && !(0, k.exchangeSelectDisabled)(t)),
                    tabSelectFilters: null == V ? void 0 : V[t],
                    withFilters: !!t,
                    currentSymbolType: t,
                    currentSelectedSearchSource: d,
                    currentTabAvailableSearchSources: K,
                    renderSymbolSearchList: [],
                    symbolsRemaining: 0,
                    symbolStartIndex: 0
                  }), j("loading");
                }, 500)), Te();
                (0, k.getAllSymbolTypesValue)();
                _i3 = !1;

                if (!(de && se)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return regeneratorRuntime.awrap((0, z.respectAbort)(G.current.signal, se.accountMetainfo()));

              case 7:
                _c2 = _context3.sent.prefix;

              case 8:
                _m = u.enabled("show_spread_operators") ? null !== (a = null !== (o = (0, s.getExchange)(e)) && void 0 !== o ? o : _c2) && void 0 !== a ? a : null == n ? void 0 : n.getRequestExchangeValue() : null == d ? void 0 : d.getRequestExchangeValue();
                _p = (0, s.getExchange)(e) || null === (l = n || d) || void 0 === l ? void 0 : l.getRequestCountryValue();
                _context3.next = 12;
                return regeneratorRuntime.awrap(Promise.all([Le(G.current.signal, e, t, n, _m, _p, r), _i3 && !r ? getRecent() : Promise.resolve([])]));

              case 12:
                _ref42 = _context3.sent;
                _ref43 = _slicedToArray(_ref42, 2);
                _h = _ref43[0];
                _g = _ref43[1];
                _v = _g.filter(function (e) {
                  var t, n;
                  return _m ? (null === (t = e.exchange) || void 0 === t ? void 0 : t.toLowerCase()) === _m.toLowerCase() : !_p || (null === (n = e.country) || void 0 === n ? void 0 : n.toLowerCase()) === _p.toLowerCase();
                });
                _f = new Set(_v.map(function (e) {
                  return "".concat(e.exchange, "_").concat(e.symbol);
                }));
                _S = _h.symbols.filter(function (e) {
                  return !_f.has("".concat(e.exchange, "_").concat(e.symbol));
                });

                _x = function (e) {
                  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.ChartApiInstance.symbolsGrouping();
                  var n;
                  var r = {},
                      o = [];

                  for (var _a = 0; _a < e.length; ++_a) {
                    var _l = e[_a];
                    if (_l.prefix || Array.isArray(_l.contracts)) return e;
                    var _s2 = t[_l.type];

                    if (void 0 === _s2) {
                      o.push(_l);
                      continue;
                    }

                    var _i4 = _s2.exec(_l.symbol);

                    if (_i4) {
                      var _e5 = _i4[1];

                      var _t5 = void 0;

                      r.hasOwnProperty(_e5) ? _t5 = r[_e5] : (_t5 = o.length, r[_e5] = _t5, o.push({
                        type: _l.type,
                        symbol: _e5,
                        exchange: _l.exchange,
                        description: _l.description,
                        full_name: _l.exchange + ":" + _e5,
                        contracts: []
                      })), null === (n = o[_t5].contracts) || void 0 === n || n.push(_l);
                    } else o.push(_l);
                  }

                  return o;
                }([].concat(_toConsumableArray(_v), _toConsumableArray(_S)));

                if (!(r && (_x = [].concat(_toConsumableArray(y.renderSymbolSearchList), _toConsumableArray(_x))), !_x.length)) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt("return", (b(function (n) {
                  return _objectSpread({}, n, {
                    canChangeExchange: Boolean(d && K.length > 1 && !(0, k.exchangeSelectDisabled)(t)),
                    tabSelectFilters: null == V ? void 0 : V[t],
                    token: e,
                    symbolsRemaining: 0,
                    withFilters: !!t,
                    currentSymbolType: t,
                    currentSelectedSearchSource: d,
                    currentTabAvailableSearchSources: K
                  });
                }), _e(), void j("empty")));

              case 22:
                _e(), b(function (n) {
                  return _objectSpread({}, n, {
                    canChangeExchange: Boolean(d && K.length > 1 && !(0, k.exchangeSelectDisabled)(t)),
                    tabSelectFilters: null == V ? void 0 : V[t],
                    renderSymbolSearchList: _x,
                    token: e,
                    symbolsRemaining: _h.symbols_remaining,
                    withFilters: !!t,
                    currentSymbolType: t,
                    currentSelectedSearchSource: d,
                    currentTabAvailableSearchSources: K,
                    symbolStartIndex: n.symbolStartIndex + _h.symbols.length
                  });
                }), j("good");
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](0);
                (0, z.skipAbortError)(_context3.t0);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, [[0, 25]]);
      }

      function Le(e, t, n, r, o, a, l) {
        var i, c, d;
        return regeneratorRuntime.async(function Le$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                c = {
                  serverHighlight: !1,
                  text: u.enabled("show_spread_operators") ? (0, s.shortName)(t) : null === (i = x.current) || void 0 === i ? void 0 : i.value,
                  exchange: o,
                  country: a,
                  type: n,
                  lang: window.language || "",
                  sortByCountry: void 0,
                  brokerId: ie,
                  onlyTradable: Boolean(ie) && de,
                  unhideSymbolSearchGroups: pe,
                  signal: e,
                  start: l,
                  filterQueryParams: Z
                }, d = (0, P.getSearchRequestDelay)();
                _context4.t0 = void 0 !== d;

                if (!_context4.t0) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 5;
                return regeneratorRuntime.awrap((0, z.delay)(e, d));

              case 5:
                return _context4.abrupt("return", O ? O(c) : Q(c));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        });
      }

      function Ne() {
        Te(), j("empty"), te(""), w(!1), b(function (e) {
          return _objectSpread({}, e, {
            symbolStartIndex: 0
          });
        }), _e();
      }

      function Ie() {
        "watchlist" === H.current && (o("symbolSearch"), (0, U.trackEvent)("Watchlist", "Mobile SS", "Go to SS page"));
      }

      function Re(e) {
        switch ((0, W.hashFromEvent)(e)) {
          case 37:
          case 39:
            be();
        }
      }

      function _e() {
        le.current && clearTimeout(le.current);
      }

      function Te() {
        G.current.abort(), G.current = new AbortController();
      }
    }

    var Ie = n(48199),
        Re = n(24658),
        _e = n(58442),
        Te = n(56840);

    function De(e) {
      var _ref44 = (0, r.useState)(function () {
        var t = e.defaultSearchSource,
            n = e.searchSources,
            r = Te.getValue("symboledit.exchangefilter", "");
        return n.find(function (e) {
          return e.value() === r;
        }) || t;
      }),
          _ref45 = _slicedToArray(_ref44, 2),
          t = _ref45[0],
          n = _ref45[1];

      return [t, (0, r.useCallback)(function (e) {
        var t;
        n(e), t = e, Te.setValue("symboledit.exchangefilter", t.value());
      }, [])];
    }

    function Be(e) {
      var _ref46 = (0, r.useState)(function () {
        if (1 === e.types.length) return e.types[0].value;
        var t = Te.getValue("symboledit.filter", (0, k.getAllSymbolTypesValue)());
        return e.types.find(function (e) {
          return e.value === t;
        }) ? t : (0, k.getAllSymbolTypesValue)();
      }),
          _ref47 = _slicedToArray(_ref46, 2),
          t = _ref47[0],
          n = _ref47[1];

      return [t, (0, r.useCallback)(function (e) {
        var t;
        n(e), t = e, Te.setValue("symboledit.filter", t);
      }, [])];
    }

    var Me = n(37968),
        Oe = n(82708),
        Ae = n(77248),
        ze = n(76460),
        Fe = n(62393);
    var Qe = (0, k.getAvailableSearchSources)(),
        Pe = (0, k.getDefaultSearchSource)(),
        Ue = u.enabled("uppercase_instrument_names");

    function We(e) {
      var t;

      var o = e.onClose,
          a = e.initialMode,
          _e$defaultValue = e.defaultValue,
          m = _e$defaultValue === void 0 ? "" : _e$defaultValue,
          p = e.showSpreadActions,
          g = e.hideMarkedListFlag,
          _e$selectSearchOnInit = e.selectSearchOnInit,
          f = _e$selectSearchOnInit === void 0 ? !0 : _e$selectSearchOnInit,
          y = e.onSearchComplete,
          _e$dialogTitle = e.dialogTitle,
          b = _e$dialogTitle === void 0 ? l.t(null, void 0, n(75905)) : _e$dialogTitle,
          S = e.placeholder,
          x = e.fullscreen,
          w = e.initialScreen,
          C = e.wrapper,
          E = e.dialog,
          L = e.contentItem,
          N = e.footer,
          I = e.searchInput,
          R = e.emptyState,
          _ = e.autofocus,
          T = e.dialogWidth,
          D = e.onKeyDown,
          B = e.searchSourcesScreen,
          M = e.customSearchSymbols,
          A = e.isDisableFiltering,
          z = e.disableRecents,
          P = e.shouldReturnFocus,
          U = e.onSymbolFiltersParamsChange,
          V = (0, r.useMemo)(function () {
        return A ? [] : e.symbolTypes ? e.symbolTypes : (0, k.getAvailableSymbolTypes)();
      }, []),
          Z = void 0 !== e.input,
          K = A ? [] : Qe,
          _ref48 = (0, r.useState)(a),
          _ref49 = _slicedToArray(_ref48, 2),
          q = _ref49[0],
          j = _ref49[1],
          H = (0, r.useRef)(m),
          _De = De({
        searchSources: K,
        defaultSearchSource: Pe
      }),
          _De2 = _slicedToArray(_De, 2),
          G = _De2[0],
          $ = _De2[1],
          _ref50 = [],
          Y = _ref50[0],
          X = _ref50[1],
          _Be = Be({
        types: V
      }),
          _Be2 = _slicedToArray(_Be, 2),
          J = _Be2[0],
          ee = _Be2[1],
          te = {},
          ne = function ne() {},
          _ref51 = (0, r.useState)(!1),
          _ref52 = _slicedToArray(_ref51, 2),
          re = _ref52[0],
          oe = _ref52[1],
          _ref53 = (0, r.useState)(-1),
          _ref54 = _slicedToArray(_ref53, 2),
          ae = _ref54[0],
          le = _ref54[1],
          _ref55 = (0, r.useState)("noop"),
          _ref56 = _slicedToArray(_ref55, 2),
          se = _ref56[0],
          ie = _ref56[1],
          ce = k.isSeparateSymbolSearchTabs ? TAB_SELECT_FILTER_MAP : void 0,
          ue = k.isSeparateSymbolSearchTabs ? (null == Y ? void 0 : Y[J]) || Pe : G,
          de = (0, r.useMemo)(function () {
        if (!k.isSeparateSymbolSearchTabs) return K;
        return K.filter(function (e) {
          var t = TAB_FILTER_MAP[J];
          if (!J) return !0;
          var n = e.group();
          return n === ExchangeGroup.AllExchanges || n && t.value.includes(n);
        });
      }, [K, J]),
          _ref57 = (0, r.useState)(function () {
        return {
          canChangeExchange: Boolean(G && Qe.length > 1 && !(0, k.exchangeSelectDisabled)(J)),
          tabSelectFilters: null == ce ? void 0 : ce[J],
          withFilters: !!J,
          renderSymbolSearchList: [],
          token: H.current,
          symbolsRemaining: 0,
          currentSymbolType: J,
          currentSelectedSearchSource: ue,
          currentTabAvailableSearchSources: de,
          symbolStartIndex: 0
        };
      }),
          _ref58 = _slicedToArray(_ref57, 2),
          me = _ref58[0],
          pe = _ref58[1],
          he = (0, r.useCallback)(function (e) {
        trackEvent("New SS", J, "Change sources"), null == X || X(J, e), pe(function (t) {
          return _objectSpread({}, t, {
            currentSelectedSearchSource: e
          });
        });
      }, [J, pe]),
          ge = (0, r.useRef)(null !== (t = e.input) && void 0 !== t ? t : null),
          _ref59 = (0, r.useState)(!1),
          _ref60 = _slicedToArray(_ref59, 2),
          ve = _ref60[0],
          fe = _ref60[1],
          ye = (0, Me.useForceUpdate)(),
          _ref61 = (0, r.useState)(new Set()),
          _ref62 = _slicedToArray(_ref61, 2),
          be = _ref62[0],
          Se = _ref62[1],
          _brokerId = {
        brokerId: void 0
      },
          _brokerId$broker = _brokerId.broker,
          xe = _brokerId$broker === void 0 ? null : _brokerId$broker,
          we = _brokerId.brokerId,
          _brokerId$unhideSymbo = _brokerId.unhideSymbolSearchGroups,
          ke = _brokerId$unhideSymbo === void 0 ? "" : _brokerId$unhideSymbo,
          _brokerId$displayBrok = _brokerId.displayBrokerSymbol,
          Ce = _brokerId$displayBrok === void 0 ? !1 : _brokerId$displayBrok;

      (0, r.useLayoutEffect)(function () {
        var e;
        !(null == ge ? void 0 : ge.current) || !Z && Boolean(null === (e = ge.current) || void 0 === e ? void 0 : e.value) || (Z || "compare" === q || (ge.current.value = H.current), !_ || Z && "symbolSearch" !== q || ge.current.focus());
      }, [q]), (0, r.useEffect)(function () {
        (null == ge ? void 0 : ge.current) && f && _ && ge.current.select();
      }, []);
      var Ee = (0, r.useMemo)(function () {
        return me.renderSymbolSearchList.reduce(function (e, t) {
          var n = Ke(t),
              r = be.has(n);
          return e.push(t), r && t.contracts && e.push.apply(e, _toConsumableArray(t.contracts.map(function (e) {
            return _objectSpread({}, e, {
              parent: t
            });
          }))), e;
        }, []);
      }, [me.renderSymbolSearchList, be]),
          Le = (0, r.useRef)(null);
      (0, r.useEffect)(function () {
        var e;
        -1 !== ae && (null === (e = Le.current) || void 0 === e || e.scrollIntoView({
          block: "nearest"
        }));
      }, [ae, Le]);
      var Te = i.includes(J),
          We = (0, r.useMemo)(function () {
        return Ee.map(function (e, t) {
          var n, r, o, a;

          if (F(e)) {
            var _o = Ke(e),
                _a2 = e.contracts ? be.has(_o) : void 0,
                l = t === ae;

            return {
              key: t,
              id: _o,
              title: Ze(e, Ce),
              description: e.description,
              isOffset: !1,
              onClick: rt.bind(null, e),
              providerId: e.provider_id,
              source: e.source,
              source2: e.source2,
              country: null === (n = e.country) || void 0 === n ? void 0 : n.toLocaleLowerCase(),
              type: e.type,
              exchangeName: null === e.exchange ? void 0 : e.exchange,
              exchangeTooltip: "",
              prefix: e.prefix || void 0,
              marketType: (0, Re.marketType)(e.type, e.typespecs, !1),
              hideMarketType: Te,
              isEod: (null === (r = e.params) || void 0 === r ? void 0 : r.includes("eod")) && "economic" !== e.type,
              isYield: (0, Ae.isYield)(e),
              isExpanded: _a2,
              onExpandClick: e.contracts ? ot.bind(null, _o) : void 0,
              fullSymbolName: e.contracts ? _e.QualifiedSources.fromSymbolSearchResult(e, e.contracts[0]) : _e.QualifiedSources.fromSymbolSearchResult(e),
              itemRef: l ? Le : void 0,
              isSelected: t === ae,
              hideMarkedListFlag: g,
              item: e,
              logoId: e.logoid,
              currencyLogoId: e["currency-logoid"],
              baseCurrencyLogoId: e["base-currency-logoid"],
              shortName: (0, Oe.safeShortName)(_e.QualifiedSources.fromSymbolSearchResult(e)),
              currencyCode: e.currency_code,
              isPrimary: e.is_primary_listing
            };
          }

          {
            var _n4 = e.parent,
                _r4 = Ke(_n4),
                _l2 = t === ae;

            return {
              key: t,
              id: _r4 + e.symbol,
              dangerousTitleHTML: Ze(e, Ce),
              dangerousDescriptionHTML: "".concat(_n4.description) + (e.description ? " (".concat(e.description, ")") : ""),
              isOffset: !0,
              isEod: null === (o = e.params) || void 0 === o ? void 0 : o.includes("eod"),
              isYield: (0, Ae.isYield)(e),
              onClick: at.bind(null, e.parent, e),
              providerId: _n4.provider_id,
              country: null === (a = _n4.country) || void 0 === a ? void 0 : a.toLowerCase(),
              type: _n4.type,
              exchangeName: null === _n4.exchange ? void 0 : _n4.exchange,
              exchangeTooltip: "",
              marketType: (0, Re.marketType)(_n4.type, e.typespecs, !1),
              hideMarketType: Te,
              fullSymbolName: _e.QualifiedSources.fromSymbolSearchResult(e.parent, e),
              itemRef: _l2 ? Le : void 0,
              isSelected: _l2,
              hideMarkedListFlag: g,
              item: e
            };
          }
        });
      }, [me.renderSymbolSearchList, be, q, ae, D]),
          He = (0, r.useMemo)(function () {
        return function (e, t, n) {
          var r = null == t ? void 0 : t[e],
              o = new Map(null == r ? void 0 : r.map(function (e) {
            return [e.id, e.urlParam];
          })),
              a = n[e];
          var l;

          if (a) {
            l = {};

            for (var _i5 = 0, _Object$entries = Object.entries(a); _i5 < _Object$entries.length; _i5++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
                  _e6 = _Object$entries$_i[0],
                  _t6 = _Object$entries$_i[1];

              var _n5 = o.get(_e6);

              _n5 && (l[_n5] = _t6);
            }
          }

          return l;
        }(J, ce, te);
      }, [J, ce, te]),
          Ge = (0, r.useMemo)(function () {
        return me.renderSymbolSearchList.slice(0, 20).map(function (e) {
          return e.contracts ? _e.QualifiedSources.fromSymbolSearchResult(e, e.contracts[0]) : _e.QualifiedSources.fromSymbolSearchResult(e);
        });
      }, [me.renderSymbolSearchList]);
      (0, r.useEffect)(function () {
        var e, t;
        if (!U) return;

        var n = ["resetFilter", "resetTabFilter", "empty"].includes(se) ? [] : Ge,
            r = _objectSpread({}, He, {
          result_list: n
        });

        r.search_type || (r.search_type = "bitcoin,crypto" === J ? "crypto" : J);
        var o = TAB_FILTER_MAP[J];
        J && ("country" === o.id ? r.country = null !== (e = null == ue ? void 0 : ue.getRequestCountryValue()) && void 0 !== e ? e : null : r.exchange = null !== (t = null == ue ? void 0 : ue.getRequestExchangeValue()) && void 0 !== t ? t : null), U(r);
      }, [J, He, Ge, ue, se]);

      var $e = null != E ? E : je,
          Ye = $e !== je && !Z,
          Xe = function Xe(e, t) {
        var n;
        return {
          mode: q,
          setMode: j,
          selectedSearchSource: ue,
          setSelectedSearchSource: k.isSeparateSymbolSearchTabs ? he : $,
          isAllSearchSourcesSelected: v.isAllSearchSourcesSelected,
          allSearchSourcesTitle: k.isSeparateSymbolSearchTabs ? null === (n = TAB_FILTER_MAP[me.currentSymbolType]) || void 0 === n ? void 0 : n.allSearchSourcesTitle : void 0,
          selectedSymbolType: J,
          setSelectedSymbolType: ee,
          selectedIndex: ae,
          setSelectedIndex: le,
          onClose: o,
          setSymbolSearchContent: pe,
          symbolSearchContent: me,
          searchRef: ge,
          cachedInputValue: H,
          searchSpreads: re,
          setSearchSpreads: oe,
          handleListWidth: lt,
          isSmallWidth: ve,
          feedItems: We,
          isMobile: e,
          showSpreadActions: p,
          selectSearchOnInit: f,
          isTablet: t,
          selectedItem: Ee[ae],
          forceUpdate: ye,
          placeholder: S,
          initialScreen: w,
          toggleExpand: ot,
          openedItems: be,
          onSubmit: ct,
          onSearchComplete: y,
          footer: N,
          symbolTypes: V,
          contentItem: L,
          searchInput: I,
          emptyState: R,
          autofocus: _,
          upperCaseEnabled: Ue,
          externalInput: Z,
          handleKeyDown: Ye ? void 0 : it,
          customSearchSymbols: M,
          searchSources: de,
          filterDefinitions: ce,
          selectedFilterValues: te,
          setSelectedFilterValues: ne,
          filterQueryParams: He,
          symbolSearchState: se,
          setSymbolSearchState: ie
        };
      },
          Je = null != B ? B : O,
          et = "exchange" === q,
          tt = et ? {
        title: l.t(null, void 0, n(19724)),
        dataName: "exchanges-search",
        render: function render() {
          return r.createElement(Je, {
            searchSources: me.currentTabAvailableSearchSources
          });
        },
        additionalHeaderElement: r.createElement(Ie.BackButton, {
          onClick: function onClick() {
            return j("symbolSearch");
          },
          className: Fe.backButton,
          size: "medium",
          "aria-label": l.t(null, {
            context: "input"
          }, n(16936)),
          preservePaddings: !0
        }),
        additionalElementPos: "before"
      } : {
        title: b,
        dataName: "symbol-search-items-dialog",
        render: function render() {
          return r.createElement(Ne, null);
        },
        additionalElementPos: "after"
      },
          nt = null != C ? C : "div";

      return r.createElement(nt, null, r.createElement(c.MatchMediaMap, {
        rules: d.DialogBreakpoints
      }, function (_ref63) {
        var e = _ref63.TabletSmall,
            t = _ref63.TabletNormal;
        return r.createElement(h.SymbolSearchItemsDialogContext.Provider, {
          value: Xe(e, t)
        }, r.createElement($e, _objectSpread({}, tt, {
          shouldReturnFocus: P,
          fullScreen: x,
          onClose: o,
          onClickOutside: o,
          onKeyDown: Ye ? void 0 : it,
          isOpened: !0
        })));
      }));

      function rt(e, t) {
        if (e.contracts) return e.contracts.length ? void at(e, e.contracts[0], t) : void ot(Ke(e));
        at(e, void 0, t);
      }

      function ot(e) {
        var t = new Set(be);
        t.has(e) ? t["delete"](e) : t.add(e), Se(t);
      }

      function at(e, t, n) {
        var r = t || e,
            a = e.exchange;

        if (u.enabled("show_spread_operators")) {
          var _e7 = {
            name: r.symbol,
            exchange: a,
            prefix: r.prefix,
            fullName: r.full_name
          };
          if (re) return st(_e7), void ye();
          if (ge.current && ge.current.value.includes(",")) return void st(_e7);
        }

        ut([{
          resolved: !0,
          symbol: _e.QualifiedSources.fromSymbolSearchResult(e, t),
          result: r
        }], n), o();
      }

      function lt(e) {
        fe("fixed" === T || e <= 640);
      }

      function st(e) {
        if (!ge.current) return;

        var _ref64 = (0, s.getNextSymbolInputValueAndPosition)(ge.current, e, Ue),
            _ref65 = _slicedToArray(_ref64, 2),
            t = _ref65[0],
            n = _ref65[1];

        ge.current.value = t, ge.current.setSelectionRange(n, n), ge.current.focus();
      }

      function it(e) {
        switch ((0, W.hashFromEvent)(e)) {
          case 38:
            if (e.preventDefault(), 0 === ae) return;
            if (-1 === ae) return void le(0);
            le(ae - 1);
            break;

          case 40:
            if (e.preventDefault(), ae === We.length - 1) return;
            le(ae + 1);
            break;

          case 37:
            {
              if (-1 === ae) return;
              var _t7 = We[ae],
                  _n6 = _t7.id,
                  _r5 = _t7.isOffset,
                  _o2 = _t7.onExpandClick;
              if (!_r5 && _n6 && be.has(_n6) && Boolean(_o2) && !Boolean(D) && (e.preventDefault(), ot(_n6)), _o2) return void (null == D || D(e, !0));
              break;
            }

          case 39:
            {
              if (-1 === ae) return;
              var _t8 = We[ae],
                  _n7 = _t8.id,
                  _r6 = _t8.isOffset,
                  _o3 = _t8.onExpandClick;
              if (_r6 || !_n7 || be.has(_n7) || !Boolean(_o3) || Boolean(D) || (e.preventDefault(), ot(_n7)), _o3) return void (null == D || D(e, !0));
              break;
            }

          case 13:
            e.preventDefault(), ct(!0);
            break;

          case 27:
            if (e.preventDefault(), et) return void j("symbolSearch");
            o();
        }

        null == D || D(e);
      }

      function ct(e) {
        if (!ge.current) return;
        var t = ge.current.value;

        if (u.enabled("show_spread_operators") && re && t) {
          var _n8 = We[ae];

          if (_n8 && void 0 !== _n8.isExpanded && (_n8.onClick(), t = ge.current.value), t.includes(",")) {
            return ut(qe(t).map(Ve)), void (e && o());
          }

          return ut([{
            symbol: Ue ? t.toUpperCase() : t,
            resolved: !1
          }]), void (e && o());
        }

        if (t.includes(",")) return ut(qe(t).map(Ve)), void (e && o());

        if (-1 !== ae) {
          We[ae].onClick();
        } else {
          var _n9 = Ue ? t.toUpperCase() : t;

          if (_n9 && "" !== _n9.trim()) {
            var _e8 = qe(_n9);

            if (void 0 !== we && -1 === _n9.indexOf(":")) (function (e) {
              var t = !1;
              return Promise.all(e.map(function (e) {
                return -1 !== e.indexOf(":") || t ? Promise.resolve({
                  symbol: e,
                  resolved: !1
                }) : (t = !0, function _callee2(e) {
                  var t, n, r, _e9, _t9, _n10, _o4, _a3;

                  return regeneratorRuntime.async(function _callee2$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return regeneratorRuntime.awrap(null == xe ? void 0 : xe.accountMetainfo());

                        case 2:
                          _context5.t1 = t = _context5.sent;
                          _context5.t0 = null === _context5.t1;

                          if (_context5.t0) {
                            _context5.next = 6;
                            break;
                          }

                          _context5.t0 = void 0 === t;

                        case 6:
                          _context5.t2 = _context5.t0;

                          if (_context5.t2) {
                            _context5.next = 9;
                            break;
                          }

                          t.prefix;

                        case 9:
                          n = void 0;
                          _context5.next = 12;
                          return regeneratorRuntime.awrap(Q({
                            strictMatch: !0,
                            serverHighlight: !1,
                            text: e,
                            lang: window.language || "",
                            brokerId: we,
                            onlyTradable: !0,
                            unhideSymbolSearchGroups: ke,
                            exchange: n
                          }));

                        case 12:
                          r = _context5.sent;

                          if (!(0 !== r.symbols.length)) {
                            _context5.next = 17;
                            break;
                          }

                          _e9 = r.symbols[0], _t9 = _e9.contracts, _n10 = _t9 && _t9.length > 0 ? _t9[0] : void 0, _o4 = _e9.prefix || _e9.exchange, _a3 = _n10 ? _n10.symbol : _e9.symbol;

                          if (!(_o4 && _a3)) {
                            _context5.next = 17;
                            break;
                          }

                          return _context5.abrupt("return", {
                            symbol: _e.QualifiedSources.fromSymbolSearchResult(_e9, _n10),
                            resolved: !0,
                            result: _e9
                          });

                        case 17:
                          return _context5.abrupt("return", {
                            symbol: e,
                            resolved: !1
                          });

                        case 18:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  });
                }(e));
              }));
            })(_e8).then(function (e) {
              return ut(e);
            });else {
              ut(_e8.map(Ve));
            }
          }

          e && o();
        }
      }

      function ut(e, t) {
        var n;
        return regeneratorRuntime.async(function ut$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                n = !t || (0, ze.isKeyboardClick)(t);
                y(e, {
                  symbolType: J,
                  isKeyboardEvent: n
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        });
      }
    }

    function Ve(e) {
      return {
        symbol: Ue ? e.toUpperCase() : e,
        resolved: !1
      };
    }

    function Ze(e, t) {
      var n = e.broker_symbol,
          r = e.symbol,
          o = e.description;
      return "".concat("spread" === e.type ? o : r).concat(t && n ? " (".concat(n, ")") : "");
    }

    function Ke(e) {
      return e.symbol + e.exchange + e.description;
    }

    function qe(e) {
      return e.split(",").map(function (e) {
        return e.trim();
      }).filter(function (e) {
        return "" !== e;
      });
    }

    function je(e) {
      var _ref66 = (0, S.useEnsuredContext)(h.SymbolSearchItemsDialogContext),
          t = _ref66.isMobile,
          n = _ref66.isTablet;

      return r.createElement(m.AdaptivePopupDialog, _objectSpread({}, e, {
        className: a()(Fe.dialog, !t && (n ? Fe.tabletDialog : Fe.desktopDialog)),
        backdrop: !0,
        draggable: !1
      }));
    }
  },
  15983: function _(e, t, n) {
    "use strict";

    n.d(t, {
      flip: function flip() {
        return s;
      },
      getCurrentTokenParamsFromInput: function getCurrentTokenParamsFromInput() {
        return v;
      },
      getExchange: function getExchange() {
        return p;
      },
      getNextSymbolInputValueAndPosition: function getNextSymbolInputValueAndPosition() {
        return g;
      },
      isSpread: function isSpread() {
        return u;
      },
      shortName: function shortName() {
        return m;
      },
      stringifyTokens: function stringifyTokens() {
        return i;
      },
      validate: function validate() {
        return l;
      }
    });
    var r = n(14483),
        o = n(44254),
        a = n(81319);

    function l(e) {
      var t = {
        braceBalance: 0,
        currentState: "var",
        warnings: [],
        errors: []
      };
      if (r.enabled("charting_library_base") && !r.enabled("show_spread_operators")) return t;
      var n = "init";
      var o = [];

      for (var _r7 = 0; _r7 < e.length; _r7++) {
        var _a4 = e[_r7];

        if ("whitespace" !== _a4.type) {
          if ("incompleteSymbol" === _a4.type || "incompleteNumber" === _a4.type) {
            var _n11 = _r7 !== e.length - 1,
                _o5 = {
              status: _n11 ? "error" : "incomplete",
              reason: "incomplete_token",
              offset: _a4.offset,
              token: _a4
            };

            if (_n11 ? t.errors.push(_o5) : t.warnings.push(_o5), _n11) continue;
          }

          switch (_a4.type) {
            case "symbol":
            case "number":
              if ("var" === n) {
                t.errors.push({
                  status: "error",
                  reason: "unexpected_token",
                  offset: _a4.offset,
                  token: _a4
                });
                continue;
              }

              n = "var";
              break;

            case "plus":
            case "minus":
            case "multiply":
            case "divide":
            case "power":
              if ("var" !== n) {
                t.errors.push({
                  status: "error",
                  reason: "unexpected_token",
                  offset: _a4.offset,
                  token: _a4
                });
                continue;
              }

              n = "operator";
              break;

            case "openBrace":
              if ("var" === n) {
                t.errors.push({
                  status: "error",
                  reason: "unexpected_token",
                  offset: _a4.offset,
                  token: _a4
                });
                continue;
              }

              o.push(_a4), n = "init";
              break;

            case "closeBrace":
              if ("var" !== n) {
                t.errors.push({
                  status: "error",
                  reason: "unexpected_token",
                  offset: _a4.offset,
                  token: _a4
                });
                continue;
              }

              o.pop() || t.errors.push({
                status: "error",
                reason: "unbalanced_brace",
                offset: _a4.offset,
                token: _a4
              }), n = "var";
              break;

            case "unparsed":
              t.errors.push({
                status: "error",
                reason: "unparsed_entity",
                offset: _a4.offset,
                token: _a4
              });
          }
        }
      }

      for (t.braceBalance = o.length, "var" !== n && t.warnings.push({
        status: "incomplete",
        token: e[e.length - 1]
      }); o.length;) {
        var _e10 = o.pop();

        _e10 && t.warnings.push({
          status: "incomplete",
          reason: "unbalanced_brace",
          offset: _e10.offset,
          token: _e10
        });
      }

      return t.currentState = n, t;
    }

    function s(e) {
      var t = function (e) {
        var t,
            n = 0,
            r = 0;

        for (var _o6 = 0; _o6 < e.length; _o6++) {
          var _a5 = e[_o6];
          if ("whitespace" !== _a5.type) switch (n) {
            case 0:
              if ("number" !== _a5.type || 1 != +_a5.value) return [];
              n = 1;
              break;

            case 1:
              if (1 !== n || "divide" !== _a5.type) return [];
              n = 2, t = _o6 + 1;
              break;

            case 2:
              if ("openBrace" === _a5.type) n = 3, r = 1;else if (c(_a5.type)) return [];
              break;

            case 3:
              "openBrace" === _a5.type ? r++ : "closeBrace" === _a5.type && (r--, r <= 0 && (n = 2));
          }
        }

        return e.slice(t);
      }(e);

      return t.length ? d(t) : d((0, o.tokenize)("1/(" + i(e) + ")"));
    }

    function i(e) {
      return e.reduce(function (e, t) {
        return "symbol" === t.type && o.symbolTokenEscapeRe.test(t.value) ? e + "'".concat(t.value, "'") : e + t.value;
      }, "");
    }

    function c(e) {
      return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e;
    }

    function u(e) {
      return e.length > 1 && e.some(function (e) {
        return c(e.type);
      });
    }

    function d(e) {
      e = function (e) {
        var t = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _n12 = _step3.value;
            "whitespace" !== _n12.type && t.push(_n12);
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

        return t;
      }(e);

      var t = [],
          n = [];
      var r;

      for (var _o7 = 0; _o7 < e.length; _o7++) {
        var _a6 = e[_o7];

        switch (_a6.type) {
          case "plus":
          case "minus":
          case "multiply":
          case "divide":
          case "power":
            n.length && n[n.length - 1].minPrecedence > _a6.precedence && (n[n.length - 1].minPrecedence = _a6.precedence);
            break;

          case "openBrace":
            r = {
              minPrecedence: 1 / 0,
              openBraceIndex: _o7
            }, n.push(r);
            break;

          case "closeBrace":
            {
              if (r = n.pop(), !r) break;

              var _a7 = e[r.openBraceIndex - 1],
                  _l3 = e[_o7 + 1],
                  _s3 = _a7 && ("plus" === _a7.type || "multiply" === _a7.type);

              (!c(null == _l3 ? void 0 : _l3.type) || (null == _l3 ? void 0 : _l3.precedence) <= r.minPrecedence) && (!c(null == _a7 ? void 0 : _a7.type) || (null == _a7 ? void 0 : _a7.precedence) < (null == r ? void 0 : r.minPrecedence) || (null == _a7 ? void 0 : _a7.precedence) === (null == r ? void 0 : r.minPrecedence) && _s3) && (t.unshift(r.openBraceIndex), t.push(_o7), n.length && n[n.length - 1].minPrecedence > r.minPrecedence && (n[n.length - 1].minPrecedence = r.minPrecedence));
            }
        }
      }

      for (var _n13 = t.length; _n13--;) {
        e.splice(t[_n13], 1);
      }

      return e;
    }

    function m(e) {
      return d((0, o.tokenize)(e)).reduce(function (e, t) {
        if ("symbol" !== t.type) return e + t.value;

        var _h2 = h(t),
            _h3 = _slicedToArray(_h2, 2),
            n = _h3[1];

        return n ? e + n : e;
      }, "");
    }

    function p(e) {
      var t = function (e) {
        var t = (0, o.tokenize)(e),
            n = [];
        return t.forEach(function (e) {
          if ("symbol" !== e.type) return;

          var _h4 = h(e),
              _h5 = _slicedToArray(_h4, 1),
              t = _h5[0];

          t && n.push(t);
        }), n;
      }(e);

      if (1 === t.length) return t[0];
    }

    function h(e) {
      var t = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i.exec(e.value);
      return null === t ? [void 0, void 0] : [t[1], t[2]];
    }

    function g(e, t, n) {
      var r = e.value,
          _v2 = v(e, n),
          _v3 = _slicedToArray(_v2, 2),
          l = _v3[0],
          s = _v3[1],
          i = (0, a.getSymbolFullName)(t),
          c = o.symbolTokenEscapeRe.test(i) ? "'".concat(i, "'") : i;

      return [r.substring(0, s) + c + r.substring(s + l.length), s + c.length];
    }

    function v(e, t) {
      var n = e.value,
          r = e.selectionStart,
          a = (0, o.tokenize)(t ? n.toUpperCase() : n),
          l = function (e, t) {
        for (var _n14 = 0; _n14 < e.length; _n14++) {
          var _r8 = e[_n14],
              _o8 = "symbol" === _r8.type || "incompleteSymbol" === _r8.type || "number" === _r8.type;

          if (_r8.offset <= t && t <= _r8.offset + _r8.value.length && _o8) return _r8;
        }

        return null;
      }(a, r || 0);

      return [(null == l ? void 0 : l.value) || "", l ? l.offset : n.length, a];
    }
  },
  81319: function _(e, t, n) {
    "use strict";

    n.d(t, {
      exchangeSelectDisabled: function exchangeSelectDisabled() {
        return m;
      },
      getAllSymbolTypesValue: function getAllSymbolTypesValue() {
        return d;
      },
      getAvailableSearchSources: function getAvailableSearchSources() {
        return c;
      },
      getAvailableSymbolTypes: function getAvailableSymbolTypes() {
        return u;
      },
      getDefaultSearchSource: function getDefaultSearchSource() {
        return i;
      },
      getSymbolFullName: function getSymbolFullName() {
        return s;
      },
      isSeparateSymbolSearchTabs: function isSeparateSymbolSearchTabs() {
        return p;
      }
    });
    var r = n(44352),
        o = n(20882);

    var a =
    /*#__PURE__*/
    function () {
      function a(e) {
        _classCallCheck(this, a);

        this._exchange = e;
      }

      _createClass(a, [{
        key: "value",
        value: function value() {
          return this._exchange.value;
        }
      }, {
        key: "name",
        value: function name() {
          return (0, o.isAllSearchSourcesSelected)(this) ? r.t(null, void 0, n(64498)) : this._exchange.name;
        }
      }, {
        key: "description",
        value: function description() {
          return this._exchange.desc;
        }
      }, {
        key: "country",
        value: function country() {
          return this._exchange.country;
        }
      }, {
        key: "providerId",
        value: function providerId() {
          return this._exchange.providerId;
        }
      }, {
        key: "group",
        value: function group() {
          return this._exchange.group;
        }
      }, {
        key: "includes",
        value: function includes(e) {
          return function (e, t) {
            var n = t.toLowerCase(),
                r = e.name,
                o = e.desc,
                a = e.searchTerms;
            return r.toLowerCase().includes(n) || o.toLowerCase().includes(n) || void 0 !== a && a.some(function (e) {
              return e.toLowerCase().includes(n);
            });
          }(this._exchange, e);
        }
      }, {
        key: "getRequestExchangeValue",
        value: function getRequestExchangeValue() {
          return this._exchange.value;
        }
      }, {
        key: "getRequestCountryValue",
        value: function getRequestCountryValue() {}
      }]);

      return a;
    }();

    var l = n(3685);

    function s(e) {
      if (e.fullName) return e.fullName;
      var t;
      return t = e.prefix || e.exchange ? (e.prefix || e.exchange) + ":" + e.name : e.name, t.replace(/<\/?[^>]+(>|$)/g, "");
    }

    function i() {
      var e = c();
      return e.find(o.isAllSearchSourcesSelected) || e[0] || null;
    }

    function c() {
      return (0, o.createSearchSources)(a, (0, l.getExchanges)());
    }

    function u() {
      return window.ChartApiInstance.supportedSymbolsTypes();
    }

    function d() {
      return "";
    }

    function m(e) {
      return !(!p || "" !== e);
    }

    var p = !1;
  },
  82708: function _(e, t, n) {
    "use strict";

    n.d(t, {
      safeShortName: function safeShortName() {
        return o;
      }
    });
    var r = n(79982);

    function o(e) {
      try {
        return (0, r.shortName)(e);
      } catch (t) {
        return e;
      }
    }
  },
  44254: function _(e, t, n) {
    "use strict";

    n.d(t, {
      symbolTokenEscapeRe: function symbolTokenEscapeRe() {
        return l;
      },
      tokenize: function tokenize() {
        return c;
      }
    });
    var r = n(14483),
        o = n(18429);
    var a = r.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
        l = /[+\-/*]/,
        s = {
      number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
      incompleteNumber: /\./,
      symbol: a,
      incompleteSymbol: /'[^']*/,
      separatorPrefix: o.SEPARATOR_PREFIX,
      openBrace: "(",
      closeBrace: ")",
      plus: "+",
      minus: "-",
      multiply: "*",
      divide: "/",
      power: "^",
      whitespace: /[\0-\x20\s]+/,
      unparsed: null
    },
        i = new RegExp(Object.values(s).map(function (e) {
      return null === e ? "" : "(".concat("string" == typeof e ? (t = e, t.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&")) : e.source, ")");
      var t;
    }).filter(function (e) {
      return "" !== e;
    }).concat(".").join("|"), "g");

    function c(e) {
      if (!e) return [];
      var t = [],
          n = Object.keys(s);
      var r;

      for (; r = i.exec(e);) {
        var _e11 = !1;

        for (var _o9 = n.length; _o9--;) {
          if (r[_o9 + 1]) {
            n[_o9] && t.push({
              value: r[_o9 + 1],
              type: n[_o9],
              precedence: 0,
              offset: r.index
            }), _e11 = !0;
            break;
          }
        }

        _e11 || t.push({
          value: r[0],
          type: "unparsed",
          precedence: 0,
          offset: r.index
        });
      }

      return t;
    }
  },
  93251: function _(e, t, n) {
    "use strict";

    n.d(t, {
      removeUsdFromCryptoPairLogos: function removeUsdFromCryptoPairLogos() {
        return l;
      },
      resolveLogoUrls: function resolveLogoUrls() {
        return a;
      }
    });
    var r = n(36279);
    var o = (0, r.getLogoUrlResolver)();

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r.LogoSize.Medium;
      var n = e.logoid,
          a = e["base-currency-logoid"],
          l = e["currency-logoid"],
          s = n && o.getSymbolLogoUrl(n, t);
      if (s) return [s];
      var i = a && o.getSymbolLogoUrl(a, t),
          c = l && o.getSymbolLogoUrl(l, t);
      return i && c ? [i, c] : i ? [i] : c ? [c] : [];
    }

    function l(e) {
      return 2 !== e.length ? e : function (e) {
        return e.some(function (e) {
          return s(e);
        });
      }(e) && !function (e) {
        return e.some(function (e) {
          return e.includes("country") && !s(e);
        });
      }(e) ? e.filter(function (e) {
        return !s(e);
      }) : e;
    }

    function s(e) {
      return !1;
    }
  },
  44747: function _(e, t, n) {
    "use strict";

    n.d(t, {
      getBlockStyleClasses: function getBlockStyleClasses() {
        return o;
      },
      getLogoStyleClasses: function getLogoStyleClasses() {
        return a;
      }
    });
    var r = n(97754);

    function o(e, t) {
      return r("tv-circle-logo-pair", "tv-circle-logo-pair--".concat(e), t);
    }

    function a(e, t) {
      return r("tv-circle-logo-pair__logo", "tv-circle-logo-pair__logo--".concat(e), !t && "tv-circle-logo-pair__logo-empty");
    }
  },
  76068: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CircleLogo: function CircleLogo() {
        return a;
      }
    });
    var r = n(50959),
        o = n(58492);
    n(45300);

    function a(e) {
      var t, n;
      var a = (0, o.getStyleClasses)(e.size, e.className),
          l = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
      return (0, o.isCircleLogoWithUrlProps)(e) ? r.createElement("img", {
        className: a,
        src: e.logoUrl,
        alt: l,
        title: e.title,
        loading: e.loading,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }) : r.createElement("span", {
        className: a,
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
        return a;
      }
    });
    var r = n(97754);

    function o(e, t) {
      return r("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function a(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  19785: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createRegExpList: function createRegExpList() {
        return a;
      },
      getHighlightedChars: function getHighlightedChars() {
        return l;
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
          a = e.isPreventedFromFiltering,
          l = e.primaryKey,
          _e$secondaryKey = e.secondaryKey,
          s = _e$secondaryKey === void 0 ? l : _e$secondaryKey,
          i = e.optionalPrimaryKey,
          c = e.tertiaryKey;
      return t.map(function (e) {
        var t = i && e[i] ? e[i] : e[l],
            a = e[s],
            u = c && e[c];
        var d,
            m = 0;
        return n.forEach(function (e) {
          var n, l, s, i, c;
          var p = e.re,
              h = e.fullMatch;
          if (p.lastIndex = 0, (0, r.isString)(t) && t && t.toLowerCase() === o.toLowerCase()) return m = 4, void (d = null === (n = t.match(h)) || void 0 === n ? void 0 : n.index);
          if ((0, r.isString)(t) && h.test(t)) return m = 3, void (d = null === (l = t.match(h)) || void 0 === l ? void 0 : l.index);
          if ((0, r.isString)(a) && h.test(a)) return m = 2, void (d = null === (s = a.match(h)) || void 0 === s ? void 0 : s.index);
          if ((0, r.isString)(a) && p.test(a)) return m = 2, void (d = null === (i = a.match(p)) || void 0 === i ? void 0 : i.index);

          if (Array.isArray(u)) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = u[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _e12 = _step4.value;
                if (h.test(_e12)) return m = 1, void (d = null === (c = _e12.match(h)) || void 0 === c ? void 0 : c.index);
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
          }
        }), {
          matchPriority: m,
          matchIndex: d,
          item: e
        };
      }).filter(function (e) {
        return a || e.matchPriority;
      }).sort(function (e, t) {
        if (e.matchPriority < t.matchPriority) return 1;
        if (e.matchPriority > t.matchPriority) return -1;

        if (e.matchPriority === t.matchPriority) {
          if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
          if (e.matchIndex > t.matchIndex) return 1;
          if (e.matchIndex < t.matchIndex) return -1;
        }

        return 0;
      }).map(function (_ref67) {
        var e = _ref67.item;
        return e;
      });
    }

    function a(e, t) {
      var n = [],
          r = e.toLowerCase(),
          o = e.split("").map(function (e, t) {
        return "(".concat(0 !== t ? "[/\\s-]".concat(s(e)) : s(e), ")");
      }).join("(.*?)") + "(.*)";
      return n.push({
        fullMatch: new RegExp("(".concat(s(e), ")"), "i"),
        re: new RegExp("^".concat(o), "i"),
        reserveRe: new RegExp(o, "i"),
        fuzzyHighlight: !0
      }), t && t.hasOwnProperty(r) && n.push({
        fullMatch: t[r],
        re: t[r],
        fuzzyHighlight: !1
      }), n;
    }

    function l(e, t, n) {
      var r = [];
      return e && n ? (n.forEach(function (e) {
        var n = e.fullMatch,
            o = e.re,
            a = e.reserveRe;
        n.lastIndex = 0, o.lastIndex = 0;
        var l = n.exec(t),
            s = l || o.exec(t) || a && a.exec(t);
        if (e.fuzzyHighlight = !l, s) if (e.fuzzyHighlight) {
          var _e13 = s.index;

          for (var _t10 = 1; _t10 < s.length; _t10++) {
            var _n15 = s[_t10],
                _o10 = s[_t10].length;

            if (_t10 % 2) {
              var _t11 = _n15.startsWith(" ") || _n15.startsWith("/") || _n15.startsWith("-");

              r[_t11 ? _e13 + 1 : _e13] = !0;
            }

            _e13 += _o10;
          }
        } else for (var _e14 = 0; _e14 < s[0].length; _e14++) {
          r[s.index + _e14] = !0;
        }
      }), r) : r;
    }

    function s(e) {
      return e.replace(/[!-/[-^{-}?]/g, "\\$&");
    }
  },
  24637: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HighlightedText: function HighlightedText() {
        return s;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(19785),
        l = n(75623);

    function s(e) {
      var t = e.queryString,
          n = e.rules,
          s = e.text,
          i = e.className,
          c = (0, r.useMemo)(function () {
        return (0, a.getHighlightedChars)(t, s, n);
      }, [t, n, s]);
      return r.createElement(r.Fragment, null, c.length ? s.split("").map(function (e, t) {
        return r.createElement(r.Fragment, {
          key: t
        }, c[t] ? r.createElement("span", {
          className: o(l.highlighted, i)
        }, e) : r.createElement("span", null, e));
      }) : s);
    }
  },
  78036: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useEnsuredContext: function useEnsuredContext() {
        return a;
      }
    });
    var r = n(50959),
        o = n(50151);

    function a(e) {
      return (0, o.ensureNotNull)((0, r.useContext)(e));
    }
  },
  37968: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useForceUpdate: function useForceUpdate() {
        return o;
      }
    });
    var r = n(50959);

    var o = function o() {
      var _ref68 = (0, r.useReducer)(function (e) {
        return e + 1;
      }, 0),
          _ref69 = _slicedToArray(_ref68, 2),
          e = _ref69[1];

      return e;
    };
  },
  29006: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useResizeObserver: function useResizeObserver() {
        return r.useResizeObserver;
      }
    });
    var r = n(67842);
  },
  77975: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useWatchedValueReadonly: function useWatchedValueReadonly() {
        return o;
      }
    });
    var r = n(50959);

    var o = function o(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var n = "watchedValue" in e ? e.watchedValue : void 0,
          o = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          _ref70 = (0, r.useState)(n ? n.value() : o),
          _ref71 = _slicedToArray(_ref70, 2),
          a = _ref71[0],
          l = _ref71[1];

      return (t ? r.useLayoutEffect : r.useEffect)(function () {
        if (n) {
          l(n.value());

          var _e15 = function _e15(e) {
            return l(e);
          };

          return n.subscribe(_e15), function () {
            return n.unsubscribe(_e15);
          };
        }

        return function () {};
      }, [n]), a;
    };
  },
  84877: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MatchMediaMap: function MatchMediaMap() {
        return l;
      }
    });
    var r = n(50959),
        o = n(66783),
        a = n.n(o);

    var l =
    /*#__PURE__*/
    function (_r$Component) {
      _inherits(l, _r$Component);

      function l(e) {
        var _this3;

        _classCallCheck(this, l);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, e)), _this3._handleMediaChange = function () {
          var e = i(_this3.state.queries, function (e, t) {
            return t.matches;
          });
          var t = !1;

          for (var _n16 in e) {
            if (e.hasOwnProperty(_n16) && _this3.state.matches[_n16] !== e[_n16]) {
              t = !0;
              break;
            }
          }

          t && _this3.setState({
            matches: e
          });
        };
        var t = _this3.props.rules;
        _this3.state = s(t);
        return _this3;
      }

      _createClass(l, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(e, t) {
          return !a()(e, this.props) || !a()(t.rules, this.state.rules) || !a()(t.matches, this.state.matches);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._migrate(null, this.state.queries);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          a()(e.rules, this.props.rules) || this._migrate(t.queries, this.state.queries);
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
        value: function _migrate(e, t) {
          var _this4 = this;

          null !== e && i(e, function (e, t) {
            t.removeListener(_this4._handleMediaChange);
          }), null !== t && i(t, function (e, t) {
            t.addListener(_this4._handleMediaChange);
          });
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          if (a()(e.rules, t.rules)) return null;
          var n = e.rules;
          return s(n);
        }
      }]);

      return l;
    }(r.Component);

    function s(e) {
      var t = i(e, function (e, t) {
        return window.matchMedia(t);
      });
      return {
        queries: t,
        matches: i(t, function (e, t) {
          return t.matches;
        }),
        rules: _objectSpread({}, e)
      };
    }

    function i(e, t) {
      var n = {};

      for (var _r9 in e) {
        e.hasOwnProperty(_r9) && (n[_r9] = t(_r9, e[_r9]));
      }

      return n;
    }
  },
  1109: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Separator: function Separator() {
        return l;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(45719);

    function l(e) {
      return r.createElement("div", {
        className: o(a.separator, e.className)
      });
    }
  },
  63932: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Spinner: function Spinner() {
        return l;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(58096);
    n(83135);

    function l(e) {
      var t = o(e.className, "tv-spinner", "tv-spinner--shown", "tv-spinner--size_".concat(a.spinnerSizeMap[e.size || a.DEFAULT_SIZE]));
      return r.createElement("div", {
        className: t,
        style: e.style,
        role: "progressbar"
      });
    }
  },
  10381: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ToolWidgetCaret: function ToolWidgetCaret() {
        return i;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(9745),
        l = n(34587),
        s = n(578);

    function i(e) {
      var t = e.dropped,
          n = e.className;
      return r.createElement(a.Icon, {
        className: o(n, l.icon, _defineProperty({}, l.dropped, t)),
        icon: s
      });
    }
  },
  78029: function _(e) {
    e.exports = {
      button: "button-GwQQdU8S",
      hover: "hover-GwQQdU8S",
      isInteractive: "isInteractive-GwQQdU8S",
      accessible: "accessible-GwQQdU8S",
      isGrouped: "isGrouped-GwQQdU8S",
      isActive: "isActive-GwQQdU8S",
      isOpened: "isOpened-GwQQdU8S",
      isDisabled: "isDisabled-GwQQdU8S",
      text: "text-GwQQdU8S",
      icon: "icon-GwQQdU8S",
      endIcon: "endIcon-GwQQdU8S"
    };
  },
  31409: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DEFAULT_TOOL_WIDGET_BUTTON_THEME: function DEFAULT_TOOL_WIDGET_BUTTON_THEME() {
        return s;
      },
      ToolWidgetButton: function ToolWidgetButton() {
        return i;
      }
    });
    var r = n(50959),
        o = n(97754),
        a = n(9745),
        l = n(78029);
    var s = l,
        i = r.forwardRef(function (e, t) {
      var _o12;

      var _e$tag = e.tag,
          n = _e$tag === void 0 ? "div" : _e$tag,
          s = e.icon,
          i = e.endIcon,
          c = e.isActive,
          u = e.isOpened,
          d = e.isDisabled,
          m = e.isGrouped,
          p = e.isHovered,
          h = e.onClick,
          g = e.text,
          v = e.textBeforeIcon,
          f = e.title,
          _e$theme = e.theme,
          y = _e$theme === void 0 ? l : _e$theme,
          b = e.className,
          S = e.forceInteractive,
          x = e.inactive,
          w = e["data-name"],
          k = e["data-tooltip"],
          C = _objectWithoutProperties(e, ["tag", "icon", "endIcon", "isActive", "isOpened", "isDisabled", "isGrouped", "isHovered", "onClick", "text", "textBeforeIcon", "title", "theme", "className", "forceInteractive", "inactive", "data-name", "data-tooltip"]),
          E = o(b, y.button, (f || k) && "apply-common-tooltip", (_o12 = {}, _defineProperty(_o12, y.isActive, c), _defineProperty(_o12, y.isOpened, u), _defineProperty(_o12, y.isInteractive, (S || Boolean(h)) && !d && !x), _defineProperty(_o12, y.isDisabled, Boolean(d || x)), _defineProperty(_o12, y.isGrouped, m), _defineProperty(_o12, y.hover, p), _o12)),
          L = s && ("string" == typeof s ? r.createElement(a.Icon, {
        className: y.icon,
        icon: s
      }) : r.cloneElement(s, {
        className: o(y.icon, s.props.className)
      }));

      return "button" === n ? r.createElement("button", _objectSpread({}, C, {
        ref: t,
        type: "button",
        className: o(E, y.accessible),
        disabled: d && !x,
        onClick: h,
        title: f,
        "data-name": w,
        "data-tooltip": k
      }), v && g && r.createElement("div", {
        className: o("js-button-text", y.text)
      }, g), L, !v && g && r.createElement("div", {
        className: o("js-button-text", y.text)
      }, g)) : r.createElement("div", _objectSpread({}, C, {
        ref: t,
        "data-role": "button",
        className: E,
        onClick: d ? void 0 : h,
        title: f,
        "data-name": w,
        "data-tooltip": k
      }), v && g && r.createElement("div", {
        className: o("js-button-text", y.text)
      }, g), L, !v && g && r.createElement("div", {
        className: o("js-button-text", y.text)
      }, g), i && r.createElement(a.Icon, {
        icon: i,
        className: l.endIcon
      }));
    });
  },
  24658: function _(e, t, n) {
    "use strict";

    n.d(t, {
      marketType: function marketType() {
        return s;
      }
    });
    var r = n(44352);
    var o = new Map([["cfd", r.t(null, void 0, n(87592))], ["dr", r.t(null, void 0, n(67245))], ["index", r.t(null, void 0, n(12754))], ["forex", r.t(null, void 0, n(39512))], ["right", r.t(null, {
      context: "symbol_type"
    }, n(9898))], ["bond", r.t(null, void 0, n(79852))], ["bitcoin", r.t(null, void 0, n(8448))], ["crypto", r.t(null, void 0, n(8448))], ["economic", r.t(null, void 0, n(88720))], ["indices", r.t(null, void 0, n(60804))], ["futures", r.t(null, void 0, n(81859))], ["stock", r.t(null, void 0, n(36931))], ["commodity", r.t(null, void 0, n(12629))]]);
    n(42053);
    var a = new Map(),
        l = new Set(["cfd", "spreadbet", "defi", "sharia", "yield", "government", "corporate", "mutual", "money", "etf", "unit", "trust", "reit", "etn", "convertible", "closedend", "crypto", "oracle"]);

    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var r = t.filter(function (e) {
        return l.has(e);
      }),
          s = "".concat(e, "_").concat(r.sort().join("_")),
          i = a.get(s);
      if (void 0 !== i) return i;
      var c = n ? function (e) {
        return o.get(e) || e;
      }(e) : e,
          u = Boolean(t.length) ? [c].concat(_toConsumableArray(r)).join(" ") : c;
      return a.set(s, u), u;
    }
  },
  2948: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"/></svg>';
  },
  52019: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.35 5.35a.5.5 0 0 0-.7-.7L9 8.29 5.35 4.65a.5.5 0 1 0-.7.7L8.29 9l-3.64 3.65a.5.5 0 0 0 .7.7L9 9.71l3.65 3.64a.5.5 0 0 0 .7-.7L9.71 9l3.64-3.65z"/></svg>';
  },
  95694: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>';
  },
  49498: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>';
  },
  60176: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>';
  },
  35369: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>';
  },
  58478: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>';
  },
  73063: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>';
  },
  14127: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>';
  },
  18073: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>';
  },
  99243: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>';
  },
  42576: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>';
  },
  578: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
  },
  91540: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M2.5 14.5c1.68-1.26 3.7-2 6.5-2s4.91.74 6.5 2m-13-11c1.68 1.26 3.7 2 6.5 2s4.91-.74 6.5-2"/><circle stroke="currentColor" cx="9" cy="9" r="8.5"/><path stroke="currentColor" d="M13.5 9c0 2.42-.55 4.58-1.4 6.12-.87 1.56-1.98 2.38-3.1 2.38s-2.23-.82-3.1-2.38c-.85-1.54-1.4-3.7-1.4-6.12s.55-4.58 1.4-6.12C6.77 1.32 7.88.5 9 .5s2.23.82 3.1 2.38c.85 1.54 1.4 3.7 1.4 6.12z"/></svg>';
  },
  7720: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
  },
  66619: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="#B2B5BE" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>';
  },
  67562: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="#131722" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>';
  },
  69859: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
  },
  69533: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
  },
  486: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h9"/><circle fill="currentColor" cx="7" cy="3" r="1"/><circle fill="currentColor" cx="7" cy="10" r="1"/></svg>';
  },
  63861: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="round" d="M3.5 10V2.5L1 5"/><path stroke-linecap="square" d="M1.5 10.5h4"/><path d="M8 12l3-11"/></g></svg>';
  },
  81574: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h8"/></svg>';
  },
  32617: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M3 10l7-7M3 3l7 7"/></svg>';
  },
  35119: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h8m-4-4v8"/></svg>';
  },
  69135: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M3 7l3.5-3.5L10 7"/></svg>';
  },
  64494: function _(e, t, n) {
    "use strict";

    e.exports = n.p + "flag-square-mock-dark.16b5f3a431f502b03ae3.svg";
  },
  2495: function _(e, t, n) {
    "use strict";

    e.exports = n.p + "flag-square-mock.d201313017eb2c1b989f.svg";
  }
}]);