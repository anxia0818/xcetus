"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6456], {
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
  54829: function _(e) {
    e.exports = {
      wrapper: "wrapper-nGEmjtaX",
      container: "container-nGEmjtaX",
      tab: "tab-nGEmjtaX",
      active: "active-nGEmjtaX",
      title: "title-nGEmjtaX",
      icon: "icon-nGEmjtaX",
      withoutIcon: "withoutIcon-nGEmjtaX",
      titleText: "titleText-nGEmjtaX",
      nested: "nested-nGEmjtaX",
      isTablet: "isTablet-nGEmjtaX",
      isMobile: "isMobile-nGEmjtaX",
      accessible: "accessible-nGEmjtaX"
    };
  },
  61098: function _(e) {
    e.exports = {
      title: "title-z9fs4j4t",
      small: "small-z9fs4j4t",
      normal: "normal-z9fs4j4t",
      large: "large-z9fs4j4t"
    };
  },
  76797: function _(e) {
    e.exports = {
      container: "container-XOHpda28"
    };
  },
  95988: function _(e) {
    e.exports = {
      title: "title-cIIj4HrJ",
      disabled: "disabled-cIIj4HrJ",
      icon: "icon-cIIj4HrJ",
      locked: "locked-cIIj4HrJ",
      open: "open-cIIj4HrJ",
      actionIcon: "actionIcon-cIIj4HrJ",
      selected: "selected-cIIj4HrJ",
      codeIcon: "codeIcon-cIIj4HrJ",
      solutionIcon: "solutionIcon-cIIj4HrJ"
    };
  },
  60430: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      container: "container-WeNdU0sq",
      selected: "selected-WeNdU0sq",
      disabled: "disabled-WeNdU0sq",
      favorite: "favorite-WeNdU0sq",
      highlighted: "highlighted-WeNdU0sq",
      light: "light-WeNdU0sq",
      "highlight-animation-theme-light": "highlight-animation-theme-light-WeNdU0sq",
      dark: "dark-WeNdU0sq",
      "highlight-animation-theme-dark": "highlight-animation-theme-dark-WeNdU0sq",
      badge: "badge-WeNdU0sq",
      main: "main-WeNdU0sq",
      paddingLeft: "paddingLeft-WeNdU0sq",
      author: "author-WeNdU0sq",
      likes: "likes-WeNdU0sq",
      actions: "actions-WeNdU0sq",
      isActive: "isActive-WeNdU0sq"
    };
  },
  60030: function _(e) {
    e.exports = {
      container: "container-hrZZtP0J"
    };
  },
  4567: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      dialog: "dialog-I087YV6b",
      dialogLibrary: "dialogLibrary-I087YV6b",
      contentContainer: "contentContainer-I087YV6b",
      listContainer: "listContainer-I087YV6b",
      scroll: "scroll-I087YV6b",
      sidebarContainer: "sidebarContainer-I087YV6b",
      noContentBlock: "noContentBlock-I087YV6b",
      tabWithHint: "tabWithHint-I087YV6b",
      solution: "solution-I087YV6b"
    };
  },
  70722: function _(e) {
    e.exports = {
      container: "container-QcG0kDOU",
      image: "image-QcG0kDOU",
      title: "title-QcG0kDOU",
      description: "description-QcG0kDOU",
      button: "button-QcG0kDOU"
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
  94720: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Button: function Button() {
        return _;
      }
    });
    var r = n(50959),
        i = n(97754),
        o = n(95604),
        a = n(9745),
        s = n(1414),
        l = n.n(s);

    function c(e) {
      var _e$color = e.color,
          t = _e$color === void 0 ? "brand" : _e$color,
          _e$size = e.size,
          n = _e$size === void 0 ? "medium" : _e$size,
          _e$variant = e.variant,
          r = _e$variant === void 0 ? "primary" : _e$variant,
          _e$stretch = e.stretch,
          a = _e$stretch === void 0 ? !1 : _e$stretch,
          s = e.icon,
          c = e.startIcon,
          u = e.endIcon,
          _e$iconOnly = e.iconOnly,
          d = _e$iconOnly === void 0 ? !1 : _e$iconOnly,
          h = e.className,
          p = e.isGrouped,
          f = e.cellState,
          _e$disablePositionAdj = e.disablePositionAdjustment,
          m = _e$disablePositionAdj === void 0 ? !1 : _e$disablePositionAdj,
          v = e.primaryText,
          g = e.secondaryText,
          _e$isAnchor = e.isAnchor,
          y = _e$isAnchor === void 0 ? !1 : _e$isAnchor,
          _ = function (e) {
        var t = "";
        return 0 !== e && (1 & e && (t = i(t, l()["no-corner-top-left"])), 2 & e && (t = i(t, l()["no-corner-top-right"])), 4 & e && (t = i(t, l()["no-corner-bottom-right"])), 8 & e && (t = i(t, l()["no-corner-bottom-left"]))), t;
      }((0, o.getGroupCellRemoveRoundBorders)(f));

      return i(h, l().button, l()["size-".concat(n)], l()["color-".concat(t)], l()["variant-".concat(r)], a && l().stretch, (s || c) && l()["with-start-icon"], u && l()["with-end-icon"], d && l()["icon-only"], _, p && l().grouped, p && !m && l()["adjust-position"], p && f.isTop && l()["first-row"], p && f.isLeft && l()["first-col"], v && g && l()["multiline-content"], y && l().link);
    }

    function u(e) {
      var t = e.startIcon,
          n = e.icon,
          i = e.iconOnly,
          o = e.children,
          s = e.endIcon,
          c = e.primaryText,
          u = e.secondaryText,
          d = null != t ? t : n,
          h = !(t || n || s || i) && !o && c && u;
      return r.createElement(r.Fragment, null, d && r.createElement(a.Icon, {
        icon: d,
        className: l()["start-icon-wrap"]
      }), o && r.createElement("span", {
        className: l().content
      }, o), s && !i && r.createElement(a.Icon, {
        icon: s,
        className: l()["end-icon-wrap"]
      }), h && function (e) {
        return e.primaryText && e.secondaryText && r.createElement("div", {
          className: l()["text-wrap"]
        }, r.createElement("span", {
          className: l()["primary-text"]
        }, " ", e.primaryText, " "), "string" == typeof e.secondaryText ? r.createElement("span", {
          className: l()["secondary-text"]
        }, " ", e.secondaryText, " ") : r.createElement("span", {
          className: l()["secondary-text"]
        }, r.createElement("span", null, e.secondaryText.firstLine), r.createElement("span", null, e.secondaryText.secondLine)));
      }(e));
    }

    var d = n(86332),
        h = n(90186);

    function p(e) {
      var t = e.className,
          n = e.color,
          r = e.variant,
          i = e.size,
          o = e.stretch,
          a = e.animated,
          s = e.icon,
          l = e.iconOnly,
          c = e.startIcon,
          u = e.endIcon,
          d = e.primaryText,
          p = e.secondaryText,
          f = _objectWithoutProperties(e, ["className", "color", "variant", "size", "stretch", "animated", "icon", "iconOnly", "startIcon", "endIcon", "primaryText", "secondaryText"]);

      return _objectSpread({}, f, {}, (0, h.filterDataProps)(e), {}, (0, h.filterAriaProps)(e));
    }

    function f(e) {
      var t = e.reference,
          n = _objectWithoutProperties(e, ["reference"]),
          _ref = (0, r.useContext)(d.ControlGroupContext),
          i = _ref.isGrouped,
          o = _ref.cellState,
          a = _ref.disablePositionAdjustment,
          s = c(_objectSpread({}, n, {
        isGrouped: i,
        cellState: o,
        disablePositionAdjustment: a
      }));

      return r.createElement("button", _objectSpread({}, p(n), {
        className: s,
        ref: t
      }), r.createElement(u, _objectSpread({}, n)));
    }

    function m() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

      switch (e) {
        case "default":
          return "primary";

        case "stroke":
          return "secondary";
      }
    }

    function v() {
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

    function y(e) {
      var t = e.intent,
          n = e.size,
          r = e.appearance,
          i = e.useFullWidth,
          o = e.icon,
          a = _objectWithoutProperties(e, ["intent", "size", "appearance", "useFullWidth", "icon"]);

      return _objectSpread({}, a, {
        color: v(t),
        size: g(n),
        variant: m(r),
        stretch: i,
        startIcon: o
      });
    }

    function _(e) {
      return r.createElement(f, _objectSpread({}, y(e)));
    }
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
  95604: function _(e, t, n) {
    "use strict";

    function r(e) {
      var t = 0;
      return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t;
    }

    n.d(t, {
      getGroupCellRemoveRoundBorders: function getGroupCellRemoveRoundBorders() {
        return r;
      }
    });
  },
  27267: function _(e, t, n) {
    "use strict";

    function r(e, t, n, r, i) {
      function o(i) {
        if (e > i.timeStamp) return;
        var o = i.target;
        void 0 !== n && null !== t && null !== o && o.ownerDocument === r && (t.contains(o) || n(i));
      }

      return i.click && r.addEventListener("click", o, !1), i.mouseDown && r.addEventListener("mousedown", o, !1), i.touchEnd && r.addEventListener("touchend", o, !1), i.touchStart && r.addEventListener("touchstart", o, !1), function () {
        r.removeEventListener("click", o, !1), r.removeEventListener("mousedown", o, !1), r.removeEventListener("touchend", o, !1), r.removeEventListener("touchstart", o, !1);
      };
    }

    n.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return r;
      }
    });
  },
  36383: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useOutsideEvent: function useOutsideEvent() {
        return o;
      }
    });
    var r = n(50959),
        i = n(27267);

    function o(e) {
      var t = e.click,
          n = e.mouseDown,
          o = e.touchEnd,
          a = e.touchStart,
          s = e.handler,
          l = e.reference,
          _e$ownerDocument = e.ownerDocument,
          c = _e$ownerDocument === void 0 ? document : _e$ownerDocument,
          u = (0, r.useRef)(null),
          d = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
      return (0, r.useLayoutEffect)(function () {
        var e = {
          click: t,
          mouseDown: n,
          touchEnd: o,
          touchStart: a
        },
            r = l ? l.current : u.current;
        return (0, i.addOutsideEventListener)(d.current, r, s, c, e);
      }, [t, n, o, a, s]), l || u;
    }
  },
  9745: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Icon: function Icon() {
        return i;
      }
    });
    var r = n(50959);
    var i = r.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          n = _e$icon === void 0 ? "" : _e$icon,
          i = _objectWithoutProperties(e, ["icon"]);

      return r.createElement("span", _objectSpread({}, i, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: n
        }
      }));
    });
  },
  90186: function _(e, t, n) {
    "use strict";

    function r(e) {
      return o(e, a);
    }

    function i(e) {
      return o(e, s);
    }

    function o(e, t) {
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

    function a(e) {
      var _e2 = _slicedToArray(e, 2),
          t = _e2[0],
          n = _e2[1];

      return 0 === t.indexOf("data-") && "string" == typeof n;
    }

    function s(e) {
      return 0 === e[0].indexOf("aria-");
    }

    n.d(t, {
      filterAriaProps: function filterAriaProps() {
        return i;
      },
      filterDataProps: function filterDataProps() {
        return r;
      },
      filterProps: function filterProps() {
        return o;
      },
      isAriaAttribute: function isAriaAttribute() {
        return s;
      },
      isDataAttribute: function isDataAttribute() {
        return a;
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

    function i(e) {
      return r([e]);
    }

    n.d(t, {
      isomorphicRef: function isomorphicRef() {
        return i;
      },
      mergeRefs: function mergeRefs() {
        return r;
      }
    });
  },
  67961: function _(e, t, n) {
    "use strict";

    n.d(t, {
      OverlapManager: function OverlapManager() {
        return o;
      },
      getRootOverlapManager: function getRootOverlapManager() {
        return s;
      }
    });
    var r = n(50151);

    var i =
    /*#__PURE__*/
    function () {
      function i() {
        _classCallCheck(this, i);

        this._storage = [];
      }

      _createClass(i, [{
        key: "add",
        value: function add(e) {
          this._storage.push(e);
        }
      }, {
        key: "remove",
        value: function remove(e) {
          this._storage = this._storage.filter(function (t) {
            return e !== t;
          });
        }
      }, {
        key: "has",
        value: function has(e) {
          return this._storage.includes(e);
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this._storage;
        }
      }]);

      return i;
    }();

    var o =
    /*#__PURE__*/
    function () {
      function o() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

        _classCallCheck(this, o);

        this._storage = new i(), this._windows = new Map(), this._index = 0, this._document = e, this._container = e.createDocumentFragment();
      }

      _createClass(o, [{
        key: "setContainer",
        value: function setContainer(e) {
          var t = this._container,
              n = null === e ? this._document.createDocumentFragment() : e;
          !function (e, t) {
            Array.from(e.childNodes).forEach(function (e) {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          }(t, n), this._container = n;
        }
      }, {
        key: "registerWindow",
        value: function registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
      }, {
        key: "ensureWindow",
        value: function ensureWindow(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            position: "fixed",
            direction: "normal"
          };

          var n = this._windows.get(e);

          if (void 0 !== n) return n;
          this.registerWindow(e);

          var r = this._document.createElement("div");

          if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
            var _e3 = this._container.childNodes.length;
            if (t.index >= _e3) this._container.appendChild(r);else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);else {
              var _e4 = this._container.childNodes[t.index];

              this._container.insertBefore(r, _e4);
            }
          } else "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);

          return this._windows.set(e, r), ++this._index, r;
        }
      }, {
        key: "unregisterWindow",
        value: function unregisterWindow(e) {
          this._storage.remove(e);

          var t = this._windows.get(e);

          void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows["delete"](e));
        }
      }, {
        key: "getZindex",
        value: function getZindex(e) {
          var t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || "0");
        }
      }, {
        key: "moveToTop",
        value: function moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
      }, {
        key: "removeWindow",
        value: function removeWindow(e) {
          this.unregisterWindow(e);
        }
      }]);

      return o;
    }();

    var a = new WeakMap();

    function s() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = e.getElementById("overlap-manager-root");
      if (null !== t) return (0, r.ensureDefined)(a.get(t));
      {
        var _t2 = new o(e),
            _n2 = function (e) {
          var t = e.createElement("div");
          return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t;
        }(e);

        return a.set(_n2, _t2), _t2.setContainer(_n2), e.body.appendChild(_n2), _t2;
      }
    }
  },
  99054: function _(e, t, n) {
    "use strict";

    n.d(t, {
      setFixedBodyState: function setFixedBodyState() {
        return c;
      }
    });

    var r = function () {
      var e;
      return function () {
        var t;

        if (void 0 === e) {
          var _n3 = document.createElement("div"),
              _r = _n3.style;

          _r.visibility = "hidden", _r.width = "100px", _r.msOverflowStyle = "scrollbar", document.body.appendChild(_n3);
          var _i2 = _n3.offsetWidth;
          _n3.style.overflow = "scroll";

          var _o = document.createElement("div");

          _o.style.width = "100%", _n3.appendChild(_o);
          var _a = _o.offsetWidth;
          null === (t = _n3.parentNode) || void 0 === t || t.removeChild(_n3), e = _i2 - _a;
        }

        return e;
      };
    }();

    function i(e, t, n) {
      null !== e && e.style.setProperty(t, n);
    }

    function o(e, t) {
      return getComputedStyle(e, null).getPropertyValue(t);
    }

    function a(e, t) {
      return parseInt(o(e, t));
    }

    var s = 0,
        l = !1;

    function c(e) {
      var _document = document,
          t = _document.body,
          n = t.querySelector(".widgetbar-wrap");

      if (e && 1 == ++s) {
        var _e5 = o(t, "overflow"),
            _s2 = a(t, "padding-right");

        "hidden" !== _e5.toLowerCase() && t.scrollHeight > t.offsetHeight && (i(n, "right", "".concat(r(), "px")), t.style.paddingRight = "".concat(_s2 + r(), "px"), l = !0), t.classList.add("i-no-scroll");
      } else if (!e && s > 0 && 0 == --s && (t.classList.remove("i-no-scroll"), l)) {
        i(n, "right", "0px");
        var _e6 = 0;
        0, t.scrollHeight <= t.clientHeight && (_e6 -= r()), t.style.paddingRight = (_e6 < 0 ? 0 : _e6) + "px", l = !1;
      }
    }
  },
  24437: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogBreakpoints: function DialogBreakpoints() {
        return i;
      }
    });
    var r = n(88803);
    var i = {
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
        i = n(50151);
    var o = n(97754),
        a = n.n(o),
        s = n(68335),
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
    var y = r.createContext({
      setHideClose: function setHideClose() {}
    });

    var _ = n(7720),
        b = n(69827);

    function C(e) {
      var t = e.title,
          _e$titleTextWrap = e.titleTextWrap,
          n = _e$titleTextWrap === void 0 ? !1 : _e$titleTextWrap,
          i = e.subtitle,
          _e$showCloseIcon = e.showCloseIcon,
          o = _e$showCloseIcon === void 0 ? !0 : _e$showCloseIcon,
          s = e.onClose,
          l = e.onCloseButtonKeyDown,
          c = e.renderBefore,
          u = e.renderAfter,
          d = e.draggable,
          h = e.className,
          p = e.unsetAlign,
          f = e.closeAriaLabel,
          m = e.closeButtonReference,
          _ref2 = (0, r.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          v = _ref3[0],
          C = _ref3[1];

      return r.createElement(y.Provider, {
        value: {
          setHideClose: C
        }
      }, r.createElement("div", {
        className: a()(b.container, h, (i || p) && b.unsetAlign)
      }, c, r.createElement("div", {
        "data-dragg-area": d,
        className: b.title
      }, r.createElement("div", {
        className: a()(n ? b.textWrap : b.ellipsis)
      }, t), i && r.createElement("div", {
        className: a()(b.ellipsis, b.subtitle)
      }, i)), u, o && !v && r.createElement("button", {
        className: b.close,
        onClick: s,
        onKeyDown: l,
        "data-name": "close",
        "aria-label": f,
        type: "button",
        ref: m
      }, r.createElement(g.Icon, {
        className: b.icon,
        icon: _,
        "data-name": "close",
        "data-role": "button"
      }))));
    }

    var E = n(53017),
        w = n(90186),
        k = n(55596);
    var x = {
      vertical: 20
    },
        S = {
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
          void 0 !== _this.props.onOpen && _this.props.isOpened && _this.props.onOpen(_this.props.fullScreen || window.matchMedia(h.DialogBreakpoints.TabletSmall).matches);
        }, _this._handleKeyDown = function (e) {
          if (!e.defaultPrevented) {
            if (_this.props.onKeyDown && _this.props.onKeyDown(e), 27 === (0, s.hashFromEvent)(e)) {
              if (e.defaultPrevented) return;
              if (_this.props.forceCloseOnEsc && _this.props.forceCloseOnEsc()) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();

              var _document2 = document,
                  _n4 = _document2.activeElement,
                  _r2 = (0, i.ensureNotNull)(_this._reference);

              if (null !== _n4) {
                if (e.preventDefault(), "true" === (t = _n4).getAttribute("data-haspopup") && "true" !== t.getAttribute("data-expanded")) return void _this._handleClose();
                if ((0, c.isTextEditingField)(_n4)) return void _r2.focus();
                if (_r2.contains(_n4)) return _this.props.onKeyboardClose && _this.props.onKeyboardClose(), void _this._handleClose();
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
          var n = (0, i.ensureDefined)(_this.props.fullScreenViewOffsets).value();
          return {
            top: n.top,
            left: (0, l.isRtl)() ? -n.right : n.left,
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
              i = _this$props.isOpened,
              o = _this$props.title,
              s = _this$props.titleTextWrap,
              l = _this$props.dataName,
              c = _this$props.onClickOutside,
              m = _this$props.additionalElementPos,
              v = _this$props.additionalHeaderElement,
              g = _this$props.backdrop,
              _this$props$shouldFor = _this$props.shouldForceFocus,
              y = _this$props$shouldFor === void 0 ? !0 : _this$props$shouldFor,
              _ = _this$props.shouldReturnFocus,
              b = _this$props.onForceFocus,
              N = _this$props.showSeparator,
              P = _this$props.subtitle,
              _this$props$draggable = _this$props.draggable,
              I = _this$props$draggable === void 0 ? !0 : _this$props$draggable,
              _this$props$fullScree = _this$props.fullScreen,
              D = _this$props$fullScree === void 0 ? !1 : _this$props$fullScree,
              _this$props$showClose = _this$props.showCloseIcon,
              R = _this$props$showClose === void 0 ? !0 : _this$props$showClose,
              _this$props$rounded = _this$props.rounded,
              B = _this$props$rounded === void 0 ? !0 : _this$props$rounded,
              T = _this$props.isAnimationEnabled,
              L = _this$props.growPoint,
              A = _this$props.dialogTooltip,
              M = _this$props.unsetHeaderAlign,
              z = _this$props.onDragStart,
              O = _this$props.dataDialogName,
              F = _this$props.closeAriaLabel,
              j = _this$props.containerAriaLabel,
              W = _this$props.reference,
              H = _this$props.containerTabIndex,
              q = _this$props.closeButtonReference,
              Z = _this$props.onCloseButtonKeyDown,
              U = _this$props.shadowed,
              K = _this$props.fullScreenViewOffsets,
              V = "after" !== m ? v : void 0,
              G = "after" === m ? v : void 0,
              $ = "string" == typeof o ? o : O || "",
              Y = (0, w.filterDataProps)(this.props),
              X = (0, E.mergeRefs)([this._handleReference, W]);
          return r.createElement(p.MatchMedia, {
            rule: h.DialogBreakpoints.SmallHeight
          }, function (m) {
            return r.createElement(p.MatchMedia, {
              rule: h.DialogBreakpoints.TabletSmall
            }, function (h) {
              return r.createElement(u.PopupDialog, _objectSpread({
                rounded: !(h || D) && B,
                className: a()(k.dialog, D && K && k.bounded, e),
                isOpened: i,
                reference: X,
                onKeyDown: _this2._handleKeyDown,
                onClickOutside: c,
                onClickBackdrop: c,
                fullscreen: h || D,
                guard: m ? S : x,
                boundByScreen: h || D,
                shouldForceFocus: y,
                onForceFocus: b,
                shouldReturnFocus: _,
                backdrop: g,
                draggable: I,
                isAnimationEnabled: T,
                growPoint: L,
                name: _this2.props.dataName,
                dialogTooltip: A,
                onDragStart: z,
                containerAriaLabel: j,
                containerTabIndex: H,
                calculateDialogPosition: D && K ? _this2._calculatePositionWithOffsets : void 0,
                shadowed: U
              }, Y), r.createElement("div", {
                className: a()(k.wrapper, t),
                "data-name": l,
                "data-dialog-name": $
              }, void 0 !== o && r.createElement(C, {
                draggable: I && !(h || D),
                onClose: _this2._handleCloseBtnClick,
                renderAfter: G,
                renderBefore: V,
                subtitle: P,
                title: o,
                titleTextWrap: s,
                showCloseIcon: R,
                className: n,
                unsetAlign: M,
                closeAriaLabel: F,
                closeButtonReference: q,
                onCloseButtonKeyDown: Z
              }), N && r.createElement(d.Separator, {
                className: k.separator
              }), r.createElement(f.PopupContext.Consumer, null, function (e) {
                return _this2._renderChildren(e, h || D);
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
        i = n(97754),
        o = n.n(i),
        a = n(44352),
        s = n(9745),
        l = n(69859),
        c = n(40281);

    function u(e) {
      var t = e.children,
          i = e.renderInput,
          u = e.onCancel,
          h = e.containerClassName,
          p = e.inputContainerClassName,
          f = e.iconClassName,
          m = _objectWithoutProperties(e, ["children", "renderInput", "onCancel", "containerClassName", "inputContainerClassName", "iconClassName"]);

      return r.createElement("div", {
        className: o()(c.container, h)
      }, r.createElement("div", {
        className: o()(c.inputContainer, p, u && c.withCancel)
      }, i || r.createElement(d, _objectSpread({}, m))), t, r.createElement(s.Icon, {
        className: o()(c.icon, f),
        icon: l
      }), u && r.createElement("div", {
        className: c.cancel,
        onClick: u
      }, a.t(null, void 0, n(20036))));
    }

    function d(e) {
      var t = e.className,
          n = e.reference,
          i = e.value,
          a = e.onChange,
          s = e.onFocus,
          l = e.onBlur,
          u = e.onKeyDown,
          d = e.onSelect,
          h = e.placeholder,
          p = _objectWithoutProperties(e, ["className", "reference", "value", "onChange", "onFocus", "onBlur", "onKeyDown", "onSelect", "placeholder"]);

      return r.createElement("input", _objectSpread({}, p, {
        ref: n,
        type: "text",
        className: o()(t, c.input),
        autoComplete: "off",
        "data-role": "search",
        placeholder: h,
        value: i,
        onChange: a,
        onFocus: s,
        onBlur: l,
        onSelect: d,
        onKeyDown: u
      }));
    }
  },
  22265: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogSidebarContainer: function DialogSidebarContainer() {
        return u;
      },
      DialogSidebarItem: function DialogSidebarItem() {
        return h;
      },
      DialogSidebarWrapper: function DialogSidebarWrapper() {
        return d;
      }
    });
    var r = n(50959),
        i = n(97754),
        o = n.n(i),
        a = n(9745),
        s = n(65631),
        l = n(68648),
        c = n(54829);

    function u(e) {
      var t = e.mode,
          n = e.className,
          i = _objectWithoutProperties(e, ["mode", "className"]),
          _ref4 = (0, s.getSidebarMode)(t),
          a = _ref4.isMobile,
          l = _ref4.isTablet,
          u = o()(c.container, l && c.isTablet, a && c.isMobile, n);

      return r.createElement("div", _objectSpread({}, i, {
        className: u,
        "data-role": "dialog-sidebar"
      }));
    }

    function d(e) {
      return r.createElement("div", _objectSpread({
        className: c.wrapper
      }, e));
    }

    function h(e) {
      var t = e.mode,
          n = e.title,
          i = e.icon,
          u = e.isActive,
          d = e.onClick,
          _e$tag = e.tag,
          h = _e$tag === void 0 ? "div" : _e$tag,
          p = e.reference,
          f = e.className,
          m = _objectWithoutProperties(e, ["mode", "title", "icon", "isActive", "onClick", "tag", "reference", "className"]),
          _ref5 = (0, s.getSidebarMode)(t),
          v = _ref5.isMobile,
          g = _ref5.isTablet,
          y = u ? null == i ? void 0 : i.active : null == i ? void 0 : i["default"];

      return r.createElement(h, _objectSpread({}, m, {
        ref: p,
        className: o()(c.tab, g && c.isTablet, v && c.isMobile, u && c.active, f),
        onClick: d
      }), i && r.createElement(a.Icon, {
        className: c.icon,
        icon: y
      }), !g && r.createElement("span", {
        className: o()(c.title, !i && c.withoutIcon)
      }, r.createElement("span", {
        className: c.titleText
      }, n), v && r.createElement(a.Icon, {
        className: c.nested,
        icon: l
      })));
    }
  },
  65631: function _(e, t, n) {
    "use strict";

    function r(e) {
      return {
        isMobile: "mobile" === e,
        isTablet: "tablet" === e
      };
    }

    n.d(t, {
      getSidebarMode: function getSidebarMode() {
        return r;
      }
    });
  },
  57979: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      IndicatorsLibraryContainer: function IndicatorsLibraryContainer() {
        return ce;
      }
    });
    var r = n(50959),
        i = n(962),
        o = n(44352),
        a = n(88348);
    var s = o.t(null, void 0, n(44463));
    var l = n(42856),
        c = n(14483),
        u = n(92249);

    function d(e, t) {
      var n = e.title.toLowerCase(),
          r = t.title.toLowerCase();
      return n < r ? -1 : n > r ? 1 : 0;
    }

    var h = {
      earning: new RegExp("EPS"),
      earnings: new RegExp("EPS"),
      "trailing twelve months": new RegExp("TTM")
    };

    function p(e) {
      var t;
      var r = e.id,
          i = e.description,
          a = e.shortDescription,
          u = e.description_localized,
          d = e.is_hidden_study,
          h = e.version,
          p = e.extra,
          m = e.tags,
          v = c.enabled("graying_disabled_tools_enabled") && (null === (t = window.ChartApiInstance) || void 0 === t ? void 0 : t.studiesAccessController.isToolGrayed(i));
      return {
        id: r,
        title: u || o.t(i, {
          context: "study"
        }, n(68716)),
        shortDescription: a,
        shortTitle: a,
        isStrategy: l.StudyMetaInfo.isScriptStrategy(e),
        isHidden: d,
        isNew: null == p ? void 0 : p.isNew,
        isUpdated: null == p ? void 0 : p.isUpdated,
        isBeta: null == p ? void 0 : p.isBeta,
        isPro: null == p ? void 0 : p.isPro,
        proBadgeTitle: s,
        isFundamental: !1,
        studyData: {
          id: r,
          version: h,
          descriptor: {
            type: "java",
            studyId: e.id
          },
          packageName: f(r, p)
        },
        isGrayed: v,
        tags: m
      };
    }

    function f(e, t) {
      return (null == t ? void 0 : t.isChartPattern) ? "tv-chart_patterns" : (null == t ? void 0 : t.isAuto) ? "auto-java" : l.StudyMetaInfo.getPackageName(e);
    }

    var m = n(97754),
        v = n.n(m),
        g = n(63932),
        y = n(35057),
        _ = n(49483),
        b = n(69654),
        C = n(22265),
        E = n(60030);

    function w(e) {
      var t = e.reference,
          n = e.className,
          i = _objectWithoutProperties(e, ["reference", "className"]);

      return r.createElement("div", _objectSpread({
        ref: t,
        className: v()(E.container, n)
      }, i, {
        "data-role": "dialog-content"
      }));
    }

    var k = n(95988);

    function x(e) {
      var t = e.children,
          n = e.className,
          i = e.disabled;
      return r.createElement("span", {
        className: v()(k.title, i && k.disabled, n)
      }, t);
    }

    var S = r.createContext(null);
    var N = n(24637),
        P = n(77975),
        I = n(45345),
        D = n(26843),
        R = n(36189),
        B = n(68335),
        T = n(60430);

    function L(e) {
      var t;
      var i = (0, r.useContext)(S),
          a = e.style,
          s = e.layoutMode,
          l = e.item,
          c = e.query,
          u = e.regExpRules,
          d = e.isBeta,
          h = e.isNew,
          p = e.isUpdated,
          f = e.isSelected,
          m = e.isHighlighted,
          g = e.reference,
          y = e.onClick,
          _ = e.renderActions,
          b = e.isPro,
          C = e.proBadgeTitle,
          E = l.isFavorite,
          w = l.isLocked,
          k = l["public"],
          B = l.editorsPick,
          L = void 0 !== E,
          M = A(y, l),
          z = (0, r.useCallback)(function (e) {
        return e.stopPropagation();
      }, []),
          O = null !== (t = e.favoriteClickHandler) && void 0 !== t ? t : (null == i ? void 0 : i.toggleFavorite) ? A(i.toggleFavorite, l) : void 0,
          F = (0, P.useWatchedValueReadonly)({
        watchedValue: I.watchedTheme
      }) === D.StdTheme.Dark ? T.dark : T.light,
          j = v()(T.container, l.isGrayed && T.disabled, f && T.selected, m && T.highlighted, m && F);
      return r.createElement("div", {
        ref: g,
        className: j,
        onClick: M,
        style: a,
        "data-role": "list-item",
        "data-disabled": l.isGrayed,
        "data-title": l.title,
        "data-id": l.id
      }, r.createElement("div", {
        className: v()(T.main, !L && T.paddingLeft)
      }, L && r.createElement(R.FavoriteButton, {
        className: v()(T.favorite, E && T.isActive),
        isFilled: E,
        onClick: O
      }), r.createElement(x, {
        disabled: l.isGrayed
      }, r.createElement(N.HighlightedText, {
        queryString: c,
        rules: u,
        text: l.title
      })), !1, d && r.createElement(BadgeIndicator, {
        type: "beta",
        className: T.badge
      }), h && r.createElement(BadgeIndicator, {
        type: "new",
        className: T.badge
      }), p && r.createElement(BadgeIndicator, {
        type: "updated",
        className: T.badge
      }), B && r.createElement(BadgeIndicator, {
        type: "ep",
        className: T.badge,
        tooltip: o.t(null, void 0, n(92490))
      }), !1), k && r.createElement("a", {
        href: k.authorLink,
        className: T.author,
        target: "_blank",
        onClick: z
      }, k.authorName), "mobile" !== s && k && r.createElement("span", {
        className: T.likes
      }, k.likesCount), !1);
    }

    function A(e, t) {
      return function (n) {
        var r = 0 === (0, B.modifiersFromEvent)(n) && 0 === n.button;
        !n.defaultPrevented && e && r && (n.preventDefault(), e(t));
      };
    }

    var M = n(61098);

    function z(e) {
      var t = e.title,
          n = e.type,
          i = e.className;
      return r.createElement("h3", {
        className: v()(M.title, "Small" === n && M.small, "Normal" === n && M.normal, "Large" === n && M.large, i)
      }, t);
    }

    var O = n(76797);

    function F(e) {
      var t = e.style,
          n = e.children;
      return r.createElement("div", {
        style: t,
        className: O.container
      }, n);
    }

    var j = n(9745),
        W = n(94720),
        H = n(70722);

    function q(e) {
      var t = e.className,
          n = e.icon,
          i = e.title,
          o = e.description,
          a = e.buttonText,
          s = e.buttonAction;
      return r.createElement("div", {
        className: v()(H.container, t)
      }, n && r.createElement(j.Icon, {
        icon: n,
        className: H.image
      }), i && r.createElement("h3", {
        className: H.title
      }, i), o && r.createElement("p", {
        className: H.description
      }, o), a && s && r.createElement(W.Button, {
        onClick: s,
        className: H.button
      }, a));
    }

    function Z(e) {
      var _ref6 = (0, r.useState)(null),
          _ref7 = _slicedToArray(_ref6, 2),
          t = _ref7[0],
          n = _ref7[1];

      function i(e) {
        return e.findIndex(function (e) {
          return (null == t ? void 0 : t.id) === e.id;
        });
      }

      return [t, n, function () {
        n(function () {
          var n;
          var r = i(e),
              o = r === e.length - 1;
          return null === t || -1 === r ? null !== (n = e[0]) && void 0 !== n ? n : null : o ? e[r] : e[r + 1];
        }());
      }, function () {
        n(function () {
          var n;
          var r = i(e);
          return null === t || 0 === r || -1 === r ? null !== (n = e[0]) && void 0 !== n ? n : null : e[r - 1];
        }());
      }];
    }

    var U = n(19785),
        K = n(4567),
        V = n(57898),
        G = n(56840);
    var $ = new V.Delegate(),
        Y = new V.Delegate(),
        X = new V.Delegate();
    var J = [];

    function Q(e) {
      return -1 === te(e) ? (function (e) {
        !ee(e) && (J.push(e), re(), $.fire(e));
      }(e), !0) : (function (e) {
        var t = te(e);
        -1 !== t && (J.splice(t, 1), re(), Y.fire(e));
      }(e), !1);
    }

    function ee(e) {
      return -1 !== te(e);
    }

    function te(e) {
      return J.indexOf(e);
    }

    function ne() {
      var _J;

      var e, t;
      J = [];
      var n = Boolean(void 0 === (0, G.getValue)("chart.favoriteLibraryIndicators")),
          r = (0, G.getJSON)("chart.favoriteLibraryIndicators", []);

      if ((_J = J).push.apply(_J, _toConsumableArray(r)), 0 === J.length && n && "undefined" != typeof window) {
        var _J2;

        var _n5 = JSON.parse(null !== (t = null === (e = window.urlParams) || void 0 === e ? void 0 : e.favorites) && void 0 !== t ? t : "{}").indicators;
        _n5 && Array.isArray(_n5) && (_J2 = J).push.apply(_J2, _toConsumableArray(_n5));
      }

      X.fire();
    }

    function re() {
      var e = J.slice();
      (0, G.setJSON)("chart.favoriteLibraryIndicators", e);
    }

    function ie(e) {
      var t = e.reference,
          i = e.data,
          a = e.isOpened,
          s = e.onClose,
          l = e.applyStudy,
          c = e.shouldReturnFocus,
          _ref8 = (0, r.useState)(""),
          _ref9 = _slicedToArray(_ref8, 2),
          u = _ref9[0],
          d = _ref9[1],
          p = (0, r.useMemo)(function () {
        return (0, U.createRegExpList)(u, h);
      }, [u]),
          f = (0, r.useMemo)(function () {
        return u ? (0, U.rankedSearch)({
          data: i,
          rules: p,
          queryString: u,
          primaryKey: "shortDescription",
          secondaryKey: "title",
          optionalPrimaryKey: "shortTitle",
          tertiaryKey: "tags"
        }) : i;
      }, [u, p, i]),
          _ref10 = function (e, t, n, i) {
        var o = 0;

        var _ref11 = (0, r.useState)(null),
            _ref12 = _slicedToArray(_ref11, 2),
            a = _ref12[0],
            s = _ref12[1],
            l = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            _Z = Z(t),
            _Z2 = _slicedToArray(_Z, 4),
            u = _Z2[0],
            d = _Z2[1],
            h = _Z2[2],
            p = _Z2[3],
            f = (0, r.useRef)(null);

        return (0, r.useEffect)(function () {
          e ? m(0) : d(null);
        }, [e]), (0, r.useEffect)(function () {
          void 0 !== i && (m(0), d(null));
        }, [i]), (0, r.useEffect)(function () {
          return a && (o = setTimeout(function () {
            s(null);
          }, 1500)), function () {
            clearInterval(o);
          };
        }, [a]), {
          highlightedItem: a,
          scrollContainerRef: l,
          selectedNodeReference: c,
          selectedItem: u,
          searchInputRef: f,
          onClickStudy: function onClickStudy(e) {
            n && (n(e), d(e), s(e));
          },
          handleKeyDown: function handleKeyDown(e) {
            var _ref13 = function (e, t) {
              if (null === e.current || null === t.current) return [0, 0];
              var n = e.current.getBoundingClientRect(),
                  r = t.current.getBoundingClientRect(),
                  i = n.height,
                  o = n.top - r.top,
                  a = n.bottom - r.bottom + i < 0 ? 0 : i,
                  s = o - i > 0 ? 0 : i,
                  l = t.current.scrollTop;
              return [l - s, l + a];
            }(c, l),
                _ref14 = _slicedToArray(_ref13, 2),
                t = _ref14[0],
                r = _ref14[1];

            if (40 === (0, B.hashFromEvent)(e) && (e.preventDefault(), h(), m(r)), 38 === (0, B.hashFromEvent)(e) && (e.preventDefault(), p(), m(t)), 13 === (0, B.hashFromEvent)(e) && u) {
              if (!n) return;
              n(u), s(u);
            }
          }
        };

        function m(e) {
          null !== l.current && l.current.scrollTo && l.current.scrollTo(0, e);
        }
      }(a, f, l),
          m = _ref10.highlightedItem,
          E = _ref10.selectedItem,
          k = _ref10.selectedNodeReference,
          x = _ref10.scrollContainerRef,
          S = _ref10.searchInputRef,
          N = _ref10.onClickStudy,
          P = _ref10.handleKeyDown,
          I = "" === u && !f.length;

      return (0, r.useEffect)(function () {
        var e;
        a || d(""), _.CheckMobile.any() || null === (e = S.current) || void 0 === e || e.focus();
      }, [a]), r.createElement(y.AdaptivePopupDialog, {
        isOpened: a,
        onClose: s,
        onClickOutside: s,
        className: v()(K.dialogLibrary),
        render: function render() {
          return r.createElement(r.Fragment, null, r.createElement(b.DialogSearch, {
            reference: S,
            placeholder: o.t(null, void 0, n(52298)),
            onChange: D,
            onFocus: R
          }), r.createElement(C.DialogSidebarWrapper, null, r.createElement(w, {
            reference: x,
            className: K.scroll
          }, I ? r.createElement(g.Spinner, null) : f.length ? r.createElement(r.Fragment, null, r.createElement(F, null, r.createElement(z, {
            title: o.t(null, void 0, n(15491))
          })), f.slice().sort(oe).map(function (e) {
            var t = (null == E ? void 0 : E.id) === e.id;
            return r.createElement(L, {
              key: e.id,
              item: e,
              onClick: function onClick() {
                return N(e);
              },
              query: u,
              regExpRules: p,
              reference: t ? k : void 0,
              isSelected: (null == E ? void 0 : E.id) === e.id,
              isHighlighted: (null == m ? void 0 : m.id) === e.id,
              favoriteClickHandler: function favoriteClickHandler(t) {
                t.stopPropagation(), Q(e.title);
              }
            });
          })) : r.createElement(q, {
            className: K.noContentBlock,
            description: o.t(null, void 0, n(53170))
          }))));
        },
        title: o.t(null, void 0, n(61142)),
        dataName: "indicators-dialog",
        onKeyDown: P,
        shouldReturnFocus: c,
        ref: t
      });

      function D(e) {
        d(e.target.value);
      }

      function R() {
        var e;
        u.length > 0 && (null === (e = S.current) || void 0 === e || e.select());
      }
    }

    function oe(e, t) {
      return e.isFavorite === t.isFavorite ? 0 : e.isFavorite ? -1 : 1;
    }

    ne(), G.onSync.subscribe(null, ne);
    var ae = n(76422),
        se = n(97145);

    function le(e, t) {
      return e[t] || [];
    }

    var ce =
    /*#__PURE__*/
    function (_ref15) {
      _inherits(ce, _ref15);

      function ce(e, t) {
        var _this3;

        _classCallCheck(this, ce);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ce).call(this, e)), _this3._options = {
          onWidget: !1
        }, _this3._indicatorData = [], t && (_this3._options = t), _this3._props = new se.WatchedValue({
          data: [],
          applyStudy: _this3._applyStudy.bind(_assertThisInitialized(_this3)),
          isOpened: !1,
          reference: _this3._getDialog(),
          onClose: _this3.hide.bind(_assertThisInitialized(_this3))
        }), _this3._getProps().subscribe(_this3._render.bind(_assertThisInitialized(_this3))), _this3._init();
        return _this3;
      }

      _createClass(ce, [{
        key: "_getProps",
        value: function _getProps() {
          return this._props;
        }
      }, {
        key: "_init",
        value: function _init() {
          var _this4 = this;

          var e;
          return regeneratorRuntime.async(function _init$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = function (e) {
                    var t = {};
                    return e.forEach(function (e) {
                      var n = e.studyData;
                      if (!n) return;
                      var r = n.packageName;
                      r in t ? t[r].push(e) : t[r] = [e];
                    }), t;
                  };

                  _context2.t1 = function (e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    return e.filter(function (e) {
                      var n = !!t || !function (e) {
                        return e.isStrategy;
                      }(e);
                      return !e.isHidden && n;
                    });
                  };

                  _context2.next = 4;
                  return regeneratorRuntime.awrap(this._requestBuiltInJavaStudies());

                case 4:
                  _context2.t2 = p;
                  _context2.t3 = _context2.sent.map(_context2.t2);
                  _context2.t4 = (0, _context2.t1)(_context2.t3);
                  e = (0, _context2.t0)(_context2.t4);
                  _context2.next = 10;
                  return regeneratorRuntime.awrap(function _callee(e, t) {
                    var n;
                    return regeneratorRuntime.async(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            n = _objectSpread({}, t);
                            return _context.abrupt("return", [].concat(_toConsumableArray(le(n, "tv-basicstudies")), _toConsumableArray(le(n, "Script$STD")), _toConsumableArray(le(n, "tv-volumebyprice"))).filter(function (e) {
                              return !e.isStrategy;
                            }).sort(d));

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    });
                  }(this._options.onWidget, e));

                case 10:
                  this._indicatorData = _context2.sent;

                  this._setFavorites();

                  this._setProps({
                    data: this._indicatorData
                  });

                  $.subscribe(null, function () {
                    return _this4._refreshFavorites();
                  });
                  Y.subscribe(null, function () {
                    return _this4._refreshFavorites();
                  });

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_setFavorites",
        value: function _setFavorites() {
          c.enabled("items_favoriting") && this._indicatorData.forEach(function (e) {
            e.isFavorite = ee(e.title);
          });
        }
      }, {
        key: "_refreshFavorites",
        value: function _refreshFavorites() {
          this._setFavorites(), this._setProps({
            data: this._indicatorData
          });
        }
      }, {
        key: "_render",
        value: function _render() {
          if (this._shouldPreventRender()) return;

          var _this$_getRenderData = this._getRenderData(),
              e = _this$_getRenderData.props,
              t = _this$_getRenderData.container;

          i.render(r.createElement(ie, _objectSpread({}, e)), t);
        }
      }]);

      return ce;
    }(
    /*#__PURE__*/
    function () {
      function _class(e) {
        _classCallCheck(this, _class);

        this._searchInputRef = r.createRef(), this._dialog = r.createRef(), this._visibility = new se.WatchedValue(!1), this._container = document.createElement("div"), this._isForceRender = !1, this._parentSources = [], this._isDestroyed = !1, this._deepFundamentalsHistoryNotificationHasBeenShown = !1, this._showDeepFundamentalsHistoryNotification = function () {}, this._chartWidgetCollection = e;
      }

      _createClass(_class, [{
        key: "isDestroyed",
        value: function isDestroyed() {
          return this._isDestroyed;
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._visibility.readonly();
        }
      }, {
        key: "resetAllStudies",
        value: function resetAllStudies() {}
      }, {
        key: "updateFavorites",
        value: function updateFavorites() {}
      }, {
        key: "open",
        value: function open(e, t, n, r, i) {
          this._parentSources = e, this._updateSymbol(), this._setProps({
            isOpened: !0,
            shouldReturnFocus: null == i ? void 0 : i.shouldReturnFocus
          }), this._visibility.setValue(!0), ae.emit("indicators_dialog");
        }
      }, {
        key: "show",
        value: function show(e) {
          this.open([], void 0, void 0, void 0, e);
        }
      }, {
        key: "hide",
        value: function hide() {
          this._parentSources = [], this._setProps({
            isOpened: !1
          }), this._visibility.setValue(!1);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._isDestroyed = !0, i.unmountComponentAtNode(this._container);
        }
      }, {
        key: "_shouldPreventRender",
        value: function _shouldPreventRender() {
          return this._isDestroyed || !this._isForceRender && !this._getProps().value().isOpened;
        }
      }, {
        key: "_getRenderData",
        value: function _getRenderData() {
          return {
            props: this._getProps().value(),
            container: this._getContainer()
          };
        }
      }, {
        key: "_applyStudy",
        value: function _applyStudy(e, t) {
          var _this5 = this;

          var n;
          e.isGrayed ? ae.emit("onGrayedObjectClicked", {
            type: "study",
            name: e.shortDescription
          }) : (_.CheckMobile.any() || null === (n = this._searchInputRef.current) || void 0 === n || n.select(), function _callee2(e, t, n, r, i) {
            var o, s, l, _e7;

            return regeneratorRuntime.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    o = e.activeChartWidget.value();

                    if (o) {
                      _context3.next = 3;
                      break;
                    }

                    return _context3.abrupt("return", null);

                  case 3:
                    s = t.studyData;

                    if (s) {
                      _context3.next = 6;
                      break;
                    }

                    return _context3.abrupt("return", Promise.resolve(null));

                  case 6:
                    l = s.descriptor;

                    if (!("java" === l.type)) {
                      _context3.next = 11;
                      break;
                    }

                    _e7 = (0, u.tryFindStudyLineToolNameByStudyId)(l.studyId);

                    if (!(null !== _e7)) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.abrupt("return", (a.tool.setValue(_e7), null));

                  case 11:
                    return _context3.abrupt("return", o.insertStudy(s.descriptor, n, t.shortDescription));

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }(this._chartWidgetCollection, e, this._parentSources, 0, this._symbol).then(function () {
            var e;
            window.is_authenticated;
            _.CheckMobile.any() || (null === document.activeElement || document.activeElement === document.body || null !== _this5._dialog.current && _this5._dialog.current.contains(document.activeElement)) && (null === (e = _this5._searchInputRef.current) || void 0 === e || e.focus());
          }));
        }
      }, {
        key: "_setProps",
        value: function _setProps(e) {
          var t = this._getProps().value(),
              n = t.isOpened;

          this._isForceRender = n && "isOpened" in e && !e.isOpened;

          var r = _objectSpread({}, t, {}, e);

          this._getProps().setValue(r);
        }
      }, {
        key: "_requestBuiltInJavaStudies",
        value: function _requestBuiltInJavaStudies() {
          return this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository().findAllJavaStudies();
        }
      }, {
        key: "_focus",
        value: function _focus() {
          var e;
          this._getProps().value().isOpened && (null === (e = this._dialog.current) || void 0 === e || e.focus());
        }
      }, {
        key: "_getContainer",
        value: function _getContainer() {
          return this._container;
        }
      }, {
        key: "_getDialog",
        value: function _getDialog() {
          return this._dialog;
        }
      }, {
        key: "_getSymbol",
        value: function _getSymbol() {
          return this._symbol;
        }
      }, {
        key: "_updateSymbol",
        value: function _updateSymbol() {
          this._symbol = void 0;
        }
      }]);

      return _class;
    }());
  },
  36189: function _(e, t, n) {
    "use strict";

    n.d(t, {
      FavoriteButton: function FavoriteButton() {
        return d;
      }
    });
    var r = n(44352),
        i = n(50959),
        o = n(97754),
        a = n(9745),
        s = n(39146),
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

      return i.createElement(a.Icon, _objectSpread({}, h, {
        className: o(c.favorite, "apply-common-tooltip", n && c.checked, r && c.active, t),
        icon: n ? s : l,
        onClick: d,
        title: n ? u.remove : u.add
      }));
    }
  },
  19785: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createRegExpList: function createRegExpList() {
        return o;
      },
      getHighlightedChars: function getHighlightedChars() {
        return a;
      },
      rankedSearch: function rankedSearch() {
        return i;
      }
    });
    var r = n(1722);

    function i(e) {
      var t = e.data,
          n = e.rules,
          i = e.queryString,
          o = e.isPreventedFromFiltering,
          a = e.primaryKey,
          _e$secondaryKey = e.secondaryKey,
          s = _e$secondaryKey === void 0 ? a : _e$secondaryKey,
          l = e.optionalPrimaryKey,
          c = e.tertiaryKey;
      return t.map(function (e) {
        var t = l && e[l] ? e[l] : e[a],
            o = e[s],
            u = c && e[c];
        var d,
            h = 0;
        return n.forEach(function (e) {
          var n, a, s, l, c;
          var p = e.re,
              f = e.fullMatch;
          if (p.lastIndex = 0, (0, r.isString)(t) && t && t.toLowerCase() === i.toLowerCase()) return h = 4, void (d = null === (n = t.match(f)) || void 0 === n ? void 0 : n.index);
          if ((0, r.isString)(t) && f.test(t)) return h = 3, void (d = null === (a = t.match(f)) || void 0 === a ? void 0 : a.index);
          if ((0, r.isString)(o) && f.test(o)) return h = 2, void (d = null === (s = o.match(f)) || void 0 === s ? void 0 : s.index);
          if ((0, r.isString)(o) && p.test(o)) return h = 2, void (d = null === (l = o.match(p)) || void 0 === l ? void 0 : l.index);

          if (Array.isArray(u)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = u[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _e8 = _step2.value;
                if (f.test(_e8)) return h = 1, void (d = null === (c = _e8.match(f)) || void 0 === c ? void 0 : c.index);
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
        return o || e.matchPriority;
      }).sort(function (e, t) {
        if (e.matchPriority < t.matchPriority) return 1;
        if (e.matchPriority > t.matchPriority) return -1;

        if (e.matchPriority === t.matchPriority) {
          if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
          if (e.matchIndex > t.matchIndex) return 1;
          if (e.matchIndex < t.matchIndex) return -1;
        }

        return 0;
      }).map(function (_ref16) {
        var e = _ref16.item;
        return e;
      });
    }

    function o(e, t) {
      var n = [],
          r = e.toLowerCase(),
          i = e.split("").map(function (e, t) {
        return "(".concat(0 !== t ? "[/\\s-]".concat(s(e)) : s(e), ")");
      }).join("(.*?)") + "(.*)";
      return n.push({
        fullMatch: new RegExp("(".concat(s(e), ")"), "i"),
        re: new RegExp("^".concat(i), "i"),
        reserveRe: new RegExp(i, "i"),
        fuzzyHighlight: !0
      }), t && t.hasOwnProperty(r) && n.push({
        fullMatch: t[r],
        re: t[r],
        fuzzyHighlight: !1
      }), n;
    }

    function a(e, t, n) {
      var r = [];
      return e && n ? (n.forEach(function (e) {
        var n = e.fullMatch,
            i = e.re,
            o = e.reserveRe;
        n.lastIndex = 0, i.lastIndex = 0;
        var a = n.exec(t),
            s = a || i.exec(t) || o && o.exec(t);
        if (e.fuzzyHighlight = !a, s) if (e.fuzzyHighlight) {
          var _e9 = s.index;

          for (var _t3 = 1; _t3 < s.length; _t3++) {
            var _n6 = s[_t3],
                _i3 = s[_t3].length;

            if (_t3 % 2) {
              var _t4 = _n6.startsWith(" ") || _n6.startsWith("/") || _n6.startsWith("-");

              r[_t4 ? _e9 + 1 : _e9] = !0;
            }

            _e9 += _i3;
          }
        } else for (var _e10 = 0; _e10 < s[0].length; _e10++) {
          r[s.index + _e10] = !0;
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
        i = n(97754),
        o = n(19785),
        a = n(75623);

    function s(e) {
      var t = e.queryString,
          n = e.rules,
          s = e.text,
          l = e.className,
          c = (0, r.useMemo)(function () {
        return (0, o.getHighlightedChars)(t, s, n);
      }, [t, n, s]);
      return r.createElement(r.Fragment, null, c.length ? s.split("").map(function (e, t) {
        return r.createElement(r.Fragment, {
          key: t
        }, c[t] ? r.createElement("span", {
          className: i(a.highlighted, l)
        }, e) : r.createElement("span", null, e));
      }) : s);
    }
  },
  77975: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useWatchedValueReadonly: function useWatchedValueReadonly() {
        return i;
      }
    });
    var r = n(50959);

    var i = function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var n = "watchedValue" in e ? e.watchedValue : void 0,
          i = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          _ref17 = (0, r.useState)(n ? n.value() : i),
          _ref18 = _slicedToArray(_ref17, 2),
          o = _ref18[0],
          a = _ref18[1];

      return (t ? r.useLayoutEffect : r.useEffect)(function () {
        if (n) {
          a(n.value());

          var _e11 = function _e11(e) {
            return a(e);
          };

          return n.subscribe(_e11), function () {
            return n.unsubscribe(_e11);
          };
        }

        return function () {};
      }, [n]), o;
    };
  },
  90692: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MatchMedia: function MatchMedia() {
        return i;
      }
    });
    var r = n(50959);

    var i =
    /*#__PURE__*/
    function (_r$PureComponent2) {
      _inherits(i, _r$PureComponent2);

      function i(e) {
        var _this6;

        _classCallCheck(this, i);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this6._handleChange = function () {
          _this6.forceUpdate();
        }, _this6.state = {
          query: window.matchMedia(_this6.props.rule)
        };
        return _this6;
      }

      _createClass(i, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._subscribe(this.state.query);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
      }, {
        key: "render",
        value: function render() {
          return this.props.children(this.state.query.matches);
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(e) {
          e.addListener(this._handleChange);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe(e) {
          e.removeListener(this._handleChange);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media ? {
            query: window.matchMedia(e.rule)
          } : null;
        }
      }]);

      return i;
    }(r.PureComponent);
  },
  1109: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Separator: function Separator() {
        return a;
      }
    });
    var r = n(50959),
        i = n(97754),
        o = n(45719);

    function a(e) {
      return r.createElement("div", {
        className: i(o.separator, e.className)
      });
    }
  },
  65718: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Portal: function Portal() {
        return l;
      },
      PortalContext: function PortalContext() {
        return c;
      }
    });
    var r = n(50959),
        i = n(962),
        o = n(36174),
        a = n(67961),
        s = n(60508);

    var l =
    /*#__PURE__*/
    function (_r$PureComponent3) {
      _inherits(l, _r$PureComponent3);

      function l() {
        var _this7;

        _classCallCheck(this, l);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments)), _this7._uuid = (0, o.guid)();
        return _this7;
      }

      _createClass(l, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
      }, {
        key: "render",
        value: function render() {
          var e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);

          return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(r.createElement(c.Provider, {
            value: this
          }, this.props.children), e);
        }
      }, {
        key: "moveToTop",
        value: function moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
      }, {
        key: "_manager",
        value: function _manager() {
          return null === this.context ? (0, a.getRootOverlapManager)() : this.context;
        }
      }]);

      return l;
    }(r.PureComponent);

    l.contextType = s.SlotContext;
    var c = r.createContext(null);
  },
  60508: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Slot: function Slot() {
        return i;
      },
      SlotContext: function SlotContext() {
        return o;
      }
    });
    var r = n(50959);

    var i =
    /*#__PURE__*/
    function (_r$Component) {
      _inherits(i, _r$Component);

      function i() {
        _classCallCheck(this, i);

        return _possibleConstructorReturn(this, _getPrototypeOf(i).apply(this, arguments));
      }

      _createClass(i, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
          return !1;
        }
      }, {
        key: "render",
        value: function render() {
          return r.createElement("div", {
            style: {
              position: "fixed",
              zIndex: 150,
              left: 0,
              top: 0
            },
            ref: this.props.reference
          });
        }
      }]);

      return i;
    }(r.Component);

    var o = r.createContext(null);
  },
  63932: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Spinner: function Spinner() {
        return a;
      }
    });
    var r = n(50959),
        i = n(97754),
        o = n(58096);
    n(83135);

    function a(e) {
      var t = i(e.className, "tv-spinner", "tv-spinner--shown", "tv-spinner--size_".concat(o.spinnerSizeMap[e.size || o.DEFAULT_SIZE]));
      return r.createElement("div", {
        className: t,
        style: e.style,
        role: "progressbar"
      });
    }
  },
  95257: function _(e, t) {
    "use strict";

    var n = Symbol["for"]("react.element"),
        r = Symbol["for"]("react.portal"),
        i = Symbol["for"]("react.fragment"),
        o = Symbol["for"]("react.strict_mode"),
        a = Symbol["for"]("react.profiler"),
        s = Symbol["for"]("react.provider"),
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

    function y() {}

    function _(e, t, n) {
      this.props = e, this.context = t, this.refs = v, this.updater = n || f;
    }

    g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, g.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, y.prototype = g.prototype;
    var b = _.prototype = new y();
    b.constructor = _, m(b, g.prototype), b.isPureReactComponent = !0;
    var C = Array.isArray,
        E = Object.prototype.hasOwnProperty,
        w = {
      current: null
    },
        k = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function x(e, t, r) {
      var i,
          o = {},
          a = null,
          s = null;
      if (null != t) for (i in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) {
        E.call(t, i) && !k.hasOwnProperty(i) && (o[i] = t[i]);
      }
      var l = arguments.length - 2;
      if (1 === l) o.children = r;else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++) {
          c[u] = arguments[u + 2];
        }

        o.children = c;
      }
      if (e && e.defaultProps) for (i in l = e.defaultProps) {
        void 0 === o[i] && (o[i] = l[i]);
      }
      return {
        $$typeof: n,
        type: e,
        key: a,
        ref: s,
        props: o,
        _owner: w.current
      };
    }

    function S(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === n;
    }

    var N = /\/+/g;

    function P(e, t) {
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

    function I(e, t, i, o, a) {
      var s = _typeof(e);

      "undefined" !== s && "boolean" !== s || (e = null);
      var l = !1;
      if (null === e) l = !0;else switch (s) {
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
      if (l) return a = a(l = e), e = "" === o ? "." + P(l, 0) : o, C(a) ? (i = "", null != e && (i = e.replace(N, "$&/") + "/"), I(a, t, i, "", function (e) {
        return e;
      })) : null != a && (S(a) && (a = function (e, t) {
        return {
          $$typeof: n,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(a, i + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(N, "$&/") + "/") + e)), t.push(a)), 1;
      if (l = 0, o = "" === o ? "." : o + ":", C(e)) for (var c = 0; c < e.length; c++) {
        var u = o + P(s = e[c], c);
        l += I(s, t, i, u, a);
      } else if (u = function (e) {
        return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
      }(e), "function" == typeof u) for (e = u.call(e), c = 0; !(s = e.next()).done;) {
        l += I(s = s.value, t, i, u = o + P(s, c++), a);
      } else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return l;
    }

    function D(e, t, n) {
      if (null == e) return e;
      var r = [],
          i = 0;
      return I(e, r, "", "", function (e) {
        return t.call(n, e, i++);
      }), r;
    }

    function R(e) {
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

    var B = {
      current: null
    },
        T = {
      transition: null
    },
        L = {
      ReactCurrentDispatcher: B,
      ReactCurrentBatchConfig: T,
      ReactCurrentOwner: w
    };
    t.Children = {
      map: D,
      forEach: function forEach(e, t, n) {
        D(e, function () {
          t.apply(this, arguments);
        }, n);
      },
      count: function count(e) {
        var t = 0;
        return D(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return D(e, function (e) {
          return e;
        }) || [];
      },
      only: function only(e) {
        if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    }, t.Component = g, t.Fragment = i, t.Profiler = a, t.PureComponent = _, t.StrictMode = o, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, t.cloneElement = function (e, t, r) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var i = m({}, e.props),
          o = e.key,
          a = e.ref,
          s = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (a = t.ref, s = w.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;

        for (c in t) {
          E.call(t, c) && !k.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
        }
      }

      var c = arguments.length - 2;
      if (1 === c) i.children = r;else if (1 < c) {
        l = Array(c);

        for (var u = 0; u < c; u++) {
          l[u] = arguments[u + 2];
        }

        i.children = l;
      }
      return {
        $$typeof: n,
        type: e.type,
        key: o,
        ref: a,
        props: i,
        _owner: s
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
        $$typeof: s,
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
    }, t.isValidElement = S, t.lazy = function (e) {
      return {
        $$typeof: h,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: R
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
      return B.current.useCallback(e, t);
    }, t.useContext = function (e) {
      return B.current.useContext(e);
    }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
      return B.current.useDeferredValue(e);
    }, t.useEffect = function (e, t) {
      return B.current.useEffect(e, t);
    }, t.useId = function () {
      return B.current.useId();
    }, t.useImperativeHandle = function (e, t, n) {
      return B.current.useImperativeHandle(e, t, n);
    }, t.useInsertionEffect = function (e, t) {
      return B.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect = function (e, t) {
      return B.current.useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return B.current.useMemo(e, t);
    }, t.useReducer = function (e, t, n) {
      return B.current.useReducer(e, t, n);
    }, t.useRef = function (e) {
      return B.current.useRef(e);
    }, t.useState = function (e) {
      return B.current.useState(e);
    }, t.useSyncExternalStore = function (e, t, n) {
      return B.current.useSyncExternalStore(e, t, n);
    }, t.useTransition = function () {
      return B.current.useTransition();
    }, t.version = "18.2.0";
  },
  50959: function _(e, t, n) {
    "use strict";

    e.exports = n(95257);
  },
  68648: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
  },
  7720: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>';
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
  44463: function _(e) {
    e.exports = {
      ar: ["متاح لحسابات Pro"],
      ca_ES: "Available for Pro accounts",
      cs: "Available for Pro accounts",
      de: ["Erhältlich für Pro-Konten"],
      el: "Available for Pro accounts",
      en: "Available for Pro accounts",
      es: ["Disponible para las cuentas Pro"],
      fa: "Available for Pro accounts",
      fr: ["Disponible pour les comptes Pro"],
      he_IL: ["זמין עבור חשבונות Pro"],
      hu_HU: "Available for Pro accounts",
      id_ID: ["Tersedia untuk akun Pro"],
      it: ["Disponibile per gli account Pro"],
      ja: ["Proアカウントでご利用いただけます"],
      ko: ["프로 계정에서 사용 가능"],
      ms_MY: ["Tersedia untuk akaun Pro"],
      nl_NL: "Available for Pro accounts",
      pl: ["Dostępne dla kont Pro"],
      pt: ["Disponível para contas Pro"],
      ro: "Available for Pro accounts",
      ru: ["Доступно для подписок Pro"],
      sv: ["Tillgängligt för Proabonnenter"],
      th: ["มีให้สำหรับบัญชี Pro"],
      tr: ["Pro hesaplar için kullanılabilir"],
      vi: ["Dành cho các tài khoản Pro"],
      zh: ["适用于Pro账户"],
      zh_TW: ["適用於Pro帳戶"]
    };
  },
  92490: function _(e) {
    e.exports = {
      ar: ["مختارات المحرر"],
      ca_ES: ["Seleccions dels editors"],
      cs: "Editors' picks",
      de: ["Editor's Picks"],
      el: "Editors' picks",
      en: "Editors' picks",
      es: ["Selecciones de los editores"],
      fa: "Editors' picks",
      fr: ["Choix de la rédaction"],
      he_IL: ["בחירות העורכים"],
      hu_HU: "Editors' picks",
      id_ID: ["Pilihan editor"],
      it: ["Selezione editoriale"],
      ja: ["エディターズ・ピック"],
      ko: ["에디터즈 픽"],
      ms_MY: ["Pilihan Editor"],
      nl_NL: "Editors' picks",
      pl: ["Wybór Redakcji"],
      pt: ["Sugestão da Casa"],
      ro: "Editors' picks",
      ru: ["Выбор редакции"],
      sv: ["Redaktörens val"],
      th: ["คัดสรรโดยบรรณาธิการ"],
      tr: ["Editörün Seçtikleri"],
      vi: ["Biên tập viên chọn"],
      zh: ["编辑精选"],
      zh_TW: ["編輯精選"]
    };
  },
  61142: function _(e) {
    e.exports = {
      ar: ["مؤشرات"],
      ca_ES: ["Indicadors"],
      cs: ["Indikátory"],
      de: ["Indikatoren"],
      el: ["Τέχν. Δείκτες"],
      en: "Indicators",
      es: ["Indicadores"],
      fa: ["اندیکاتورها"],
      fr: ["Indicateurs"],
      he_IL: ["אינדיקטורים"],
      hu_HU: ["Indikátorok"],
      id_ID: ["Indikator"],
      it: ["Indicatori"],
      ja: ["インジケーター"],
      ko: ["지표"],
      ms_MY: ["Penunjuk"],
      nl_NL: ["Indicatoren"],
      pl: ["Wskaźniki"],
      pt: ["Indicadores"],
      ro: "Indicators",
      ru: ["Индикаторы"],
      sv: ["Indikatorer"],
      th: ["อินดิเคเตอร์"],
      tr: ["Göstergeler"],
      vi: ["Các chỉ báo"],
      zh: ["指标"],
      zh_TW: ["技術指標"]
    };
  },
  53170: function _(e) {
    e.exports = {
      ar: ["لا توجد مؤشرات تتوافق مع معاييرك."],
      ca_ES: ["Cap indicador coincideix amb els vostres criteris"],
      cs: ["Indikátory nevyhovující vaším požadavkům"],
      de: ["Keine passenden Indikatoren zu Ihren Kriterien gefunden"],
      el: ["Δε βρέθηκαν Τέχνικο. Δείκτες που να ταιριάζουν με τα κριτήρια αναζήτησης"],
      en: "No indicators matched your criteria",
      es: ["Ningún indicador coincide con sus criterios"],
      fa: ["هیچ اندیکاتوری با شرط شما مطابقت ندارد."],
      fr: ["Aucuns indicateurs ne correspondent à vos critères."],
      he_IL: ["לא נמצאו התאמות לאינדקטור"],
      hu_HU: ["Egyetlen indikátor se felel meg a kritériumoknak."],
      id_ID: ["Tidak ada indikator yang cocok dengan kriteria anda."],
      it: ["Nessun indicatore corrisponde ai criteri"],
      ja: ["条件に合致するインジケーターはありません"],
      ko: ["찾는 지표가 없습니다."],
      ms_MY: ["Tiada penunjuk yang sepadan dengan kriteria anda."],
      nl_NL: ["Geen indicator voldeed aan je criteria"],
      pl: ["Brak wskaźników spełniających twoje kryteria"],
      pt: ["Não foram encontrados indicadores que correspondam à escolha selecionada."],
      ro: ["No indicators matched your criteria."],
      ru: ["Нет подходящих индикаторов."],
      sv: ["Inga indikatorer överensstämde med dina kriterier."],
      th: ["ไม่พบตัวชี้วัดตามเกณฑ์ของคุณ"],
      tr: ["Kriterinize uygun gösterge bulunamadı."],
      vi: ["Không có chỉ số nào khớp với tiêu chí của bạn."],
      zh: ["没有符合您搜索条件的指标."],
      zh_TW: ["沒有指標符合您的搜尋條件。"]
    };
  },
  15491: function _(e) {
    e.exports = {
      ar: ["اسم النص البرمجي"],
      ca_ES: ["Nom de l'script"],
      cs: "Script name",
      de: ["Skripname"],
      el: "Script name",
      en: "Script name",
      es: ["Nombre del script"],
      fa: "Script name",
      fr: ["Nom du script"],
      he_IL: ["שם הסקריפט"],
      hu_HU: ["Szkript név"],
      id_ID: ["Nama skrip"],
      it: ["Nome script"],
      ja: ["スクリプト名"],
      ko: ["스크립트 이름"],
      ms_MY: ["Nama skrip"],
      nl_NL: "Script name",
      pl: ["Nazwa skryptu"],
      pt: ["Nome do script"],
      ro: "Script name",
      ru: ["Имя скрипта"],
      sv: ["Skriptets namn"],
      th: ["ชื่อชุดคำสั่ง"],
      tr: ["Komut adı"],
      vi: ["Tên Script"],
      zh: ["脚本名称"],
      zh_TW: ["腳本名稱"]
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