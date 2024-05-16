"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5009], {
  46188: function _(e) {
    e.exports = {
      container: "container-AhaeiE0y",
      list: "list-AhaeiE0y",
      overlayScrollWrap: "overlayScrollWrap-AhaeiE0y",
      scroll: "scroll-AhaeiE0y"
    };
  },
  12961: function _(e) {
    e.exports = {
      container: "container-huGG8x61",
      title: "title-huGG8x61"
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
  64409: function _(e) {
    e.exports = {
      container: "container-RZoAcQrm",
      labelWrap: "labelWrap-RZoAcQrm",
      icon: "icon-RZoAcQrm",
      text: "text-RZoAcQrm"
    };
  },
  33476: function _(e) {
    e.exports = {
      sortButton: "sortButton-mMR_mxxG",
      icon: "icon-mMR_mxxG"
    };
  },
  45300: function _(e) {
    e.exports = {};
  },
  75623: function _(e) {
    e.exports = {
      highlighted: "highlighted-cwp8YRo6"
    };
  },
  71986: function _(e) {
    e.exports = {
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      item: "item-jFqVJoPk",
      hovered: "hovered-jFqVJoPk",
      isDisabled: "isDisabled-jFqVJoPk",
      isActive: "isActive-jFqVJoPk",
      shortcut: "shortcut-jFqVJoPk",
      toolbox: "toolbox-jFqVJoPk",
      withIcon: "withIcon-jFqVJoPk",
      "round-icon": "round-icon-jFqVJoPk",
      icon: "icon-jFqVJoPk",
      labelRow: "labelRow-jFqVJoPk",
      label: "label-jFqVJoPk",
      showOnHover: "showOnHover-jFqVJoPk",
      "disclosure-item-circle-logo": "disclosure-item-circle-logo-jFqVJoPk",
      showOnFocus: "showOnFocus-jFqVJoPk"
    };
  },
  39416: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useFunctionalRefObject: function useFunctionalRefObject() {
        return r;
      }
    });
    var a = n(50959),
        o = n(43010);

    function r(e) {
      var t = (0, a.useMemo)(function () {
        return function (e) {
          var t = function t(n) {
            e(n), t.current = n;
          };

          return t.current = null, t;
        }(function (e) {
          l.current(e);
        });
      }, []),
          n = (0, a.useRef)(null),
          r = function r(t) {
        if (null === t) return i(n.current, t), void (n.current = null);
        n.current !== e && (n.current = e, i(n.current, t));
      },
          l = (0, a.useRef)(r);

      return l.current = r, (0, o.useIsomorphicLayoutEffect)(function () {
        if (null !== t.current) return l.current(t.current), function () {
          return l.current(null);
        };
      }, [e]), t;
    }

    function i(e, t) {
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
    var a = n(50959);

    function o(e, t) {
      ("undefined" == typeof window ? a.useEffect : a.useLayoutEffect)(e, t);
    }
  },
  27267: function _(e, t, n) {
    "use strict";

    function a(e, t, n, a, o) {
      function r(o) {
        if (e > o.timeStamp) return;
        var r = o.target;
        void 0 !== n && null !== t && null !== r && r.ownerDocument === a && (t.contains(r) || n(o));
      }

      return o.click && a.addEventListener("click", r, !1), o.mouseDown && a.addEventListener("mousedown", r, !1), o.touchEnd && a.addEventListener("touchend", r, !1), o.touchStart && a.addEventListener("touchstart", r, !1), function () {
        a.removeEventListener("click", r, !1), a.removeEventListener("mousedown", r, !1), a.removeEventListener("touchend", r, !1), a.removeEventListener("touchstart", r, !1);
      };
    }

    n.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return a;
      }
    });
  },
  90186: function _(e, t, n) {
    "use strict";

    function a(e) {
      return r(e, i);
    }

    function o(e) {
      return r(e, l);
    }

    function r(e, t) {
      var n = Object.entries(e).filter(t),
          a = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _e = _step$value[0],
              _t = _step$value[1];

          a[_e] = _t;
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

      return a;
    }

    function i(e) {
      var _e2 = _slicedToArray(e, 2),
          t = _e2[0],
          n = _e2[1];

      return 0 === t.indexOf("data-") && "string" == typeof n;
    }

    function l(e) {
      return 0 === e[0].indexOf("aria-");
    }

    n.d(t, {
      filterAriaProps: function filterAriaProps() {
        return o;
      },
      filterDataProps: function filterDataProps() {
        return a;
      },
      filterProps: function filterProps() {
        return r;
      },
      isAriaAttribute: function isAriaAttribute() {
        return l;
      },
      isDataAttribute: function isDataAttribute() {
        return i;
      }
    });
  },
  69654: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogSearch: function DialogSearch() {
        return u;
      }
    });
    var a = n(50959),
        o = n(97754),
        r = n.n(o),
        i = n(44352),
        l = n(9745),
        s = n(69859),
        c = n(40281);

    function u(e) {
      var t = e.children,
          o = e.renderInput,
          u = e.onCancel,
          d = e.containerClassName,
          h = e.inputContainerClassName,
          f = e.iconClassName,
          g = _objectWithoutProperties(e, ["children", "renderInput", "onCancel", "containerClassName", "inputContainerClassName", "iconClassName"]);

      return a.createElement("div", {
        className: r()(c.container, d)
      }, a.createElement("div", {
        className: r()(c.inputContainer, h, u && c.withCancel)
      }, o || a.createElement(m, _objectSpread({}, g))), t, a.createElement(l.Icon, {
        className: r()(c.icon, f),
        icon: s
      }), u && a.createElement("div", {
        className: c.cancel,
        onClick: u
      }, i.t(null, void 0, n(20036))));
    }

    function m(e) {
      var t = e.className,
          n = e.reference,
          o = e.value,
          i = e.onChange,
          l = e.onFocus,
          s = e.onBlur,
          u = e.onKeyDown,
          m = e.onSelect,
          d = e.placeholder,
          h = _objectWithoutProperties(e, ["className", "reference", "value", "onChange", "onFocus", "onBlur", "onKeyDown", "onSelect", "placeholder"]);

      return a.createElement("input", _objectSpread({}, h, {
        ref: n,
        type: "text",
        className: r()(t, c.input),
        autoComplete: "off",
        "data-role": "search",
        placeholder: d,
        value: o,
        onChange: i,
        onFocus: l,
        onBlur: s,
        onSelect: m,
        onKeyDown: u
      }));
    }
  },
  76068: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CircleLogo: function CircleLogo() {
        return r;
      }
    });
    var a = n(50959),
        o = n(58492);
    n(45300);

    function r(e) {
      var t, n;
      var r = (0, o.getStyleClasses)(e.size, e.className),
          i = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
      return (0, o.isCircleLogoWithUrlProps)(e) ? a.createElement("img", {
        className: r,
        src: e.logoUrl,
        alt: i,
        title: e.title,
        loading: e.loading,
        "aria-label": e["aria-label"],
        "aria-hidden": e["aria-hidden"]
      }) : a.createElement("span", {
        className: r,
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
        return r;
      }
    });
    var a = n(97754);

    function o(e, t) {
      return a("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function r(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  19785: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createRegExpList: function createRegExpList() {
        return r;
      },
      getHighlightedChars: function getHighlightedChars() {
        return i;
      },
      rankedSearch: function rankedSearch() {
        return o;
      }
    });
    var a = n(1722);

    function o(e) {
      var t = e.data,
          n = e.rules,
          o = e.queryString,
          r = e.isPreventedFromFiltering,
          i = e.primaryKey,
          _e$secondaryKey = e.secondaryKey,
          l = _e$secondaryKey === void 0 ? i : _e$secondaryKey,
          s = e.optionalPrimaryKey,
          c = e.tertiaryKey;
      return t.map(function (e) {
        var t = s && e[s] ? e[s] : e[i],
            r = e[l],
            u = c && e[c];
        var m,
            d = 0;
        return n.forEach(function (e) {
          var n, i, l, s, c;
          var h = e.re,
              f = e.fullMatch;
          if (h.lastIndex = 0, (0, a.isString)(t) && t && t.toLowerCase() === o.toLowerCase()) return d = 4, void (m = null === (n = t.match(f)) || void 0 === n ? void 0 : n.index);
          if ((0, a.isString)(t) && f.test(t)) return d = 3, void (m = null === (i = t.match(f)) || void 0 === i ? void 0 : i.index);
          if ((0, a.isString)(r) && f.test(r)) return d = 2, void (m = null === (l = r.match(f)) || void 0 === l ? void 0 : l.index);
          if ((0, a.isString)(r) && h.test(r)) return d = 2, void (m = null === (s = r.match(h)) || void 0 === s ? void 0 : s.index);

          if (Array.isArray(u)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = u[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _e3 = _step2.value;
                if (f.test(_e3)) return d = 1, void (m = null === (c = _e3.match(f)) || void 0 === c ? void 0 : c.index);
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
          matchPriority: d,
          matchIndex: m,
          item: e
        };
      }).filter(function (e) {
        return r || e.matchPriority;
      }).sort(function (e, t) {
        if (e.matchPriority < t.matchPriority) return 1;
        if (e.matchPriority > t.matchPriority) return -1;

        if (e.matchPriority === t.matchPriority) {
          if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
          if (e.matchIndex > t.matchIndex) return 1;
          if (e.matchIndex < t.matchIndex) return -1;
        }

        return 0;
      }).map(function (_ref) {
        var e = _ref.item;
        return e;
      });
    }

    function r(e, t) {
      var n = [],
          a = e.toLowerCase(),
          o = e.split("").map(function (e, t) {
        return "(".concat(0 !== t ? "[/\\s-]".concat(l(e)) : l(e), ")");
      }).join("(.*?)") + "(.*)";
      return n.push({
        fullMatch: new RegExp("(".concat(l(e), ")"), "i"),
        re: new RegExp("^".concat(o), "i"),
        reserveRe: new RegExp(o, "i"),
        fuzzyHighlight: !0
      }), t && t.hasOwnProperty(a) && n.push({
        fullMatch: t[a],
        re: t[a],
        fuzzyHighlight: !1
      }), n;
    }

    function i(e, t, n) {
      var a = [];
      return e && n ? (n.forEach(function (e) {
        var n = e.fullMatch,
            o = e.re,
            r = e.reserveRe;
        n.lastIndex = 0, o.lastIndex = 0;
        var i = n.exec(t),
            l = i || o.exec(t) || r && r.exec(t);
        if (e.fuzzyHighlight = !i, l) if (e.fuzzyHighlight) {
          var _e4 = l.index;

          for (var _t2 = 1; _t2 < l.length; _t2++) {
            var _n2 = l[_t2],
                _o = l[_t2].length;

            if (_t2 % 2) {
              var _t3 = _n2.startsWith(" ") || _n2.startsWith("/") || _n2.startsWith("-");

              a[_t3 ? _e4 + 1 : _e4] = !0;
            }

            _e4 += _o;
          }
        } else for (var _e5 = 0; _e5 < l[0].length; _e5++) {
          a[l.index + _e5] = !0;
        }
      }), a) : a;
    }

    function l(e) {
      return e.replace(/[!-/[-^{-}?]/g, "\\$&");
    }
  },
  24637: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HighlightedText: function HighlightedText() {
        return l;
      }
    });
    var a = n(50959),
        o = n(97754),
        r = n(19785),
        i = n(75623);

    function l(e) {
      var t = e.queryString,
          n = e.rules,
          l = e.text,
          s = e.className,
          c = (0, a.useMemo)(function () {
        return (0, r.getHighlightedChars)(t, l, n);
      }, [t, n, l]);
      return a.createElement(a.Fragment, null, c.length ? l.split("").map(function (e, t) {
        return a.createElement(a.Fragment, {
          key: t
        }, c[t] ? a.createElement("span", {
          className: o(i.highlighted, s)
        }, e) : a.createElement("span", null, e));
      }) : l);
    }
  },
  16396: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DEFAULT_POPUP_MENU_ITEM_THEME: function DEFAULT_POPUP_MENU_ITEM_THEME() {
        return u;
      },
      PopupMenuItem: function PopupMenuItem() {
        return d;
      }
    });
    var a = n(50959),
        o = n(97754),
        r = n(59064),
        i = n(51768),
        l = n(90186),
        s = n(76068),
        c = n(71986);
    var u = c;

    function m(e) {
      e.stopPropagation();
    }

    function d(e) {
      var _o2, _o3;

      var t = e.id,
          n = e.role,
          u = e["aria-label"],
          d = e["aria-selected"],
          h = e["aria-checked"],
          f = e.className,
          g = e.title,
          y = e.labelRowClassName,
          p = e.labelClassName,
          v = e.shortcut,
          _ = e.forceShowShortcuts,
          b = e.icon,
          C = e.isActive,
          w = e.isDisabled,
          k = e.isHovered,
          L = e.appearAsDisabled,
          E = e.label,
          D = e.link,
          S = e.showToolboxOnHover,
          x = e.showToolboxOnFocus,
          A = e.target,
          N = e.rel,
          M = e.toolbox,
          z = e.reference,
          T = e.onMouseOut,
          F = e.onMouseOver,
          I = e.onKeyDown,
          _e$suppressToolboxCli = e.suppressToolboxClick,
          Z = _e$suppressToolboxCli === void 0 ? !0 : _e$suppressToolboxCli,
          _e$theme = e.theme,
          R = _e$theme === void 0 ? c : _e$theme,
          P = e.tabIndex,
          j = e.tagName,
          B = e.renderComponent,
          O = e.roundedIcon,
          W = e.iconAriaProps,
          q = e.circleLogo,
          H = (0, l.filterDataProps)(e),
          U = (0, a.useRef)(null),
          V = (0, a.useMemo)(function () {
        return function (e) {
          function t(t) {
            var n = t.reference,
                o = _objectWithoutProperties(t, ["reference"]),
                r = null != e ? e : o.href ? "a" : "div",
                i = "a" === r ? o : function (e) {
              var t = e.download,
                  n = e.href,
                  a = e.hrefLang,
                  o = e.media,
                  r = e.ping,
                  i = e.rel,
                  l = e.target,
                  s = e.type,
                  c = e.referrerPolicy,
                  u = _objectWithoutProperties(e, ["download", "href", "hrefLang", "media", "ping", "rel", "target", "type", "referrerPolicy"]);

              return u;
            }(o);

            return a.createElement(r, _objectSpread({}, i, {
              ref: n
            }));
          }

          return t.displayName = "DefaultComponent(".concat(e, ")"), t;
        }(j);
      }, [j]),
          Y = null != B ? B : V;
      return a.createElement(Y, _objectSpread({}, H, {
        id: t,
        role: n,
        "aria-label": u,
        "aria-selected": d,
        "aria-checked": h,
        className: o(f, R.item, b && R.withIcon, (_o2 = {}, _defineProperty(_o2, R.isActive, C), _defineProperty(_o2, R.isDisabled, w || L), _defineProperty(_o2, R.hovered, k), _o2)),
        title: g,
        href: D,
        target: A,
        rel: N,
        reference: function reference(e) {
          U.current = e, "function" == typeof z && z(e);
          "object" == _typeof(z) && (z.current = e);
        },
        onClick: function onClick(t) {
          var n = e.dontClosePopup,
              a = e.onClick,
              o = e.onClickArg,
              l = e.trackEventObject;
          if (w) return;
          l && (0, i.trackEvent)(l.category, l.event, l.label);
          a && a(o, t);
          n || (0, r.globalCloseMenu)();
        },
        onContextMenu: function onContextMenu(t) {
          var n = e.trackEventObject,
              a = e.trackRightClick;
          n && a && (0, i.trackEvent)(n.category, n.event, "".concat(n.label, "_rightClick"));
        },
        onMouseUp: function onMouseUp(t) {
          var n = e.trackEventObject,
              a = e.trackMouseWheelClick;

          if (1 === t.button && D && n) {
            var _e6 = n.label;
            a && (_e6 += "_mouseWheelClick"), (0, i.trackEvent)(n.category, n.event, _e6);
          }
        },
        onMouseOver: F,
        onMouseOut: T,
        onKeyDown: I,
        tabIndex: P
      }), q && a.createElement(s.CircleLogo, _objectSpread({}, W, {
        className: c["disclosure-item-circle-logo"],
        size: "xxxsmall",
        logoUrl: q.logoUrl,
        placeholderLetter: q.placeholderLetter
      })), b && a.createElement("span", {
        "aria-label": W && W["aria-label"],
        "aria-hidden": W && Boolean(W["aria-hidden"]),
        className: o(R.icon, O && c["round-icon"]),
        dangerouslySetInnerHTML: {
          __html: b
        }
      }), a.createElement("span", {
        className: o(R.labelRow, y)
      }, a.createElement("span", {
        className: o(R.label, p)
      }, E)), (void 0 !== v || _) && a.createElement("span", {
        className: R.shortcut
      }, (J = v) && J.split("+").join(" + ")), void 0 !== M && a.createElement("span", {
        onClick: Z ? m : void 0,
        className: o(R.toolbox, (_o3 = {}, _defineProperty(_o3, R.showOnHover, S), _defineProperty(_o3, R.showOnFocus, x), _o3))
      }, M));
      var J;
    }
  },
  20520: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupMenu: function PopupMenu() {
        return d;
      }
    });
    var a = n(50959),
        o = n(962),
        r = n(62942),
        i = n(65718),
        l = n(27317),
        s = n(29197);
    var c = a.createContext(void 0);
    var u = n(36383);
    var m = a.createContext({
      setMenuMaxWidth: !1
    });

    function d(e) {
      var t = e.controller,
          n = e.children,
          d = e.isOpened,
          _e$closeOnClickOutsid = e.closeOnClickOutside,
          h = _e$closeOnClickOutsid === void 0 ? !0 : _e$closeOnClickOutsid,
          f = e.doNotCloseOn,
          g = e.onClickOutside,
          y = e.onClose,
          p = e.onKeyboardClose,
          _e$dataName = e["data-name"],
          v = _e$dataName === void 0 ? "popup-menu-container" : _e$dataName,
          _ = _objectWithoutProperties(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose", "onKeyboardClose", "data-name"]),
          b = (0, a.useContext)(s.CloseDelegateContext),
          C = a.useContext(m),
          w = (0, a.useContext)(c),
          k = (0, u.useOutsideEvent)({
        handler: function handler(e) {
          g && g(e);
          if (!h) return;
          var t = (0, r["default"])(f) ? f() : null == f ? [] : [f];

          if (t.length > 0 && e.target instanceof Node) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = t[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _n3 = _step3.value;

                var _t4 = o.findDOMNode(_n3);

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

          y();
        },
        mouseDown: !0,
        touchStart: !0
      });

      return d ? a.createElement(i.Portal, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        pointerEvents: "none"
      }, a.createElement("span", {
        ref: k,
        style: {
          pointerEvents: "auto"
        }
      }, a.createElement(l.Menu, _objectSpread({}, _, {
        onClose: y,
        onKeyboardClose: p,
        onScroll: function onScroll(t) {
          var n = e.onScroll;
          n && n(t);
        },
        customCloseDelegate: b,
        customRemeasureDelegate: w,
        ref: t,
        "data-name": v,
        limitMaxWidth: C.setMenuMaxWidth
      }), n))) : null;
    }
  },
  29276: function _(e) {
    e.exports = {
      highlight: "highlight-6tu1aYjZ",
      active: "active-6tu1aYjZ"
    };
  },
  47541: function _(e) {
    e.exports = {
      dialog: "dialog-T4Q8BJPb",
      contentList: "contentList-T4Q8BJPb",
      contentHeader: "contentHeader-T4Q8BJPb"
    };
  },
  12811: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HorizontalAttachEdge: function HorizontalAttachEdge() {
        return o;
      },
      HorizontalDropDirection: function HorizontalDropDirection() {
        return i;
      },
      VerticalAttachEdge: function VerticalAttachEdge() {
        return a;
      },
      VerticalDropDirection: function VerticalDropDirection() {
        return r;
      },
      getPopupPositioner: function getPopupPositioner() {
        return c;
      }
    });
    var a,
        o,
        r,
        i,
        l = n(50151);
    !function (e) {
      e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom", e[e.AutoStrict = 2] = "AutoStrict";
    }(a || (a = {})), function (e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right";
    }(o || (o = {})), function (e) {
      e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop";
    }(r || (r = {})), function (e) {
      e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft";
    }(i || (i = {}));
    var s = {
      verticalAttachEdge: a.Bottom,
      horizontalAttachEdge: o.Left,
      verticalDropDirection: r.FromTopToBottom,
      horizontalDropDirection: i.FromLeftToRight,
      verticalMargin: 0,
      horizontalMargin: 0,
      matchButtonAndListboxWidths: !1
    };

    function c(e, t) {
      return function (n, c, u, m) {
        var d, h;

        var f = (0, l.ensureNotNull)(e).getBoundingClientRect(),
            _t$horizontalAttachEd = t.horizontalAttachEdge,
            g = _t$horizontalAttachEd === void 0 ? s.horizontalAttachEdge : _t$horizontalAttachEd,
            _t$horizontalDropDire = t.horizontalDropDirection,
            y = _t$horizontalDropDire === void 0 ? s.horizontalDropDirection : _t$horizontalDropDire,
            _t$horizontalMargin = t.horizontalMargin,
            p = _t$horizontalMargin === void 0 ? s.horizontalMargin : _t$horizontalMargin,
            _t$verticalMargin = t.verticalMargin,
            v = _t$verticalMargin === void 0 ? s.verticalMargin : _t$verticalMargin,
            _t$matchButtonAndList = t.matchButtonAndListboxWidths,
            _ = _t$matchButtonAndList === void 0 ? s.matchButtonAndListboxWidths : _t$matchButtonAndList;

        var b = null !== (d = t.verticalAttachEdge) && void 0 !== d ? d : s.verticalAttachEdge,
            C = null !== (h = t.verticalDropDirection) && void 0 !== h ? h : s.verticalDropDirection;
        b === a.AutoStrict && (m < f.y + f.height + v + c ? (b = a.Top, C = r.FromBottomToTop) : (b = a.Bottom, C = r.FromTopToBottom));
        var w = b === a.Top ? -1 * v : v,
            k = g === o.Right ? f.right : f.left,
            L = b === a.Top ? f.top : f.bottom,
            E = {
          x: k - (y === i.FromRightToLeft ? n : 0) + p,
          y: L - (C === r.FromBottomToTop ? c : 0) + w
        };
        return _ && (E.overrideWidth = f.width), E;
      };
    }
  },
  34557: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      LoadChartDialogRenderer: function LoadChartDialogRenderer() {
        return re;
      }
    });
    var a = n(50959),
        o = n(962),
        r = n(97754),
        i = n.n(r),
        l = n(50151),
        s = n(44352),
        c = n(56840),
        u = n(49483),
        m = n(35057),
        d = n(20520),
        h = n(12811),
        f = n(9745),
        g = n(44563),
        y = n(645),
        p = n(33476);

    function v(e) {
      var t = e.sortDirection,
          n = e.children,
          o = _objectWithoutProperties(e, ["sortDirection", "children"]),
          i = (0, a.useRef)(null),
          _ref2 = (0, a.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          l = _ref3[0],
          s = _ref3[1];

      return a.createElement("div", _objectSpread({}, o, {
        ref: i,
        className: r(p.sortButton, "apply-common-tooltip", "common-tooltip-vertical"),
        onClick: function onClick() {
          s(!l);
        }
      }), a.createElement(f.Icon, {
        className: p.icon,
        icon: 0 === t ? g : y
      }), a.createElement(d.PopupMenu, {
        doNotCloseOn: i.current,
        isOpened: l,
        onClose: function onClose() {
          s(!1);
        },
        position: (0, h.getPopupPositioner)(i.current, {
          verticalMargin: -35,
          verticalAttachEdge: 0
        })
      }, n));
    }

    var _ = n(16396),
        b = n(64409);

    function C(e) {
      var t = e.label,
          n = e.listSortField,
          o = e.itemSortField,
          i = e.listSortDirection,
          l = e.itemSortDirection,
          s = e.onClick,
          c = e.className,
          u = _objectWithoutProperties(e, ["label", "listSortField", "itemSortField", "listSortDirection", "itemSortDirection", "onClick", "className"]),
          m = o === n && l === i;

      return a.createElement(_.PopupMenuItem, _objectSpread({}, u, {
        className: r(b.container, c),
        label: a.createElement("div", {
          className: b.labelWrap
        }, a.createElement(f.Icon, {
          className: b.icon,
          icon: 0 === l ? g : y
        }), a.createElement("span", {
          className: b.text
        }, t)),
        isActive: m,
        onClick: function onClick() {
          s(o, l);
        },
        "data-active": m.toString(),
        "data-sort-field": o,
        "data-sort-direction": 0 === l ? "asc" : "desc"
      }));
    }

    var w = n(69654),
        k = n(12961);

    function L(e) {
      var t = e.children,
          n = e.className;
      return a.createElement("div", {
        className: i()(k.container, n)
      }, t);
    }

    function E(e) {
      var t = e.title;
      return a.createElement("div", {
        className: k.title
      }, t);
    }

    var D = n(50335);
    var S = n(20037),
        x = n(38223),
        A = n(898),
        N = n(33127);
    var M = n(3085),
        z = n(46188);

    function T(e) {
      var t = e.className,
          n = e.onScroll,
          o = e.onTouchStart,
          r = e.reference,
          l = e.children,
          s = e.scrollbar,
          c = _objectWithoutProperties(e, ["className", "onScroll", "onTouchStart", "reference", "children", "scrollbar"]),
          _ref4 = (0, A.useDimensions)(),
          _ref5 = _slicedToArray(_ref4, 2),
          m = _ref5[0],
          d = _ref5[1],
          _ref6 = (0, N.useOverlayScroll)(),
          _ref7 = _slicedToArray(_ref6, 4),
          h = _ref7[0],
          f = _ref7[1],
          g = _ref7[2],
          y = _ref7[3];

      return (0, a.useEffect)(function () {
        var e = function e() {};

        return u.isFF ? (document.addEventListener("wheel", function () {
          return e;
        }), function () {
          document.removeEventListener("wheel", e);
        }) : e;
      }, []), a.createElement("div", _objectSpread({}, "overlay" === s && f, {
        className: i()(z.container, t),
        onTouchStart: o,
        onScrollCapture: n,
        ref: m
      }), "overlay" === s && a.createElement(M.OverlayScrollContainer, _objectSpread({}, h, {
        className: z.overlayScrollWrap
      })), a.createElement(S.FixedSizeList, _objectSpread({
        ref: r,
        className: i()("native" === s ? z.scroll : z.list),
        outerRef: "overlay" === s ? g : void 0,
        onItemsRendered: y,
        layout: "vertical",
        width: "100%",
        height: (null == d ? void 0 : d.height) || 0,
        children: l,
        direction: (0, x.isRtl)() ? "rtl" : "ltr"
      }, c)));
    }

    var F = n(84015);
    var I = n(14483),
        Z = n(64530),
        R = n(94025),
        P = n(60508),
        j = n(3615);
    var B = n(53741),
        O = n(79206),
        W = n(24637),
        q = n(19785),
        H = n(29276);
    var U = new B.DateFormatter("dd-MM-yyyy"),
        V = new O.TimeFormatter(O.hourMinuteFormat),
        Y = I.enabled("items_favoriting");

    function J(e) {
      var t = e.chart,
          o = e.chartWidgetCollection,
          r = e.trackEvent,
          l = e.localFavorites,
          c = e.setLocalFavorites,
          u = e.onClose,
          m = e.searchString,
          d = e.onClickRemove,
          h = e.onRemoveCanceled,
          f = e.isSelected,
          _ref8 = (0, a.useState)(function () {
        return t.active();
      }),
          _ref9 = _slicedToArray(_ref8, 2),
          g = _ref9[0],
          y = _ref9[1],
          _ref10 = (0, a.useState)(!1),
          _ref11 = _slicedToArray(_ref10, 2),
          p = _ref11[0],
          v = _ref11[1],
          _ = t.url ? function (e) {
        var t = e.chartId ? "/chart/".concat(e.chartId, "/") : "/chart/",
            n = new URL(t, location.href);
        return e.symbol && n.searchParams.append("symbol", e.symbol), e.interval && n.searchParams.append("interval", e.interval), e.style && n.searchParams.append("style", e.style), (0, F.urlWithMobileAppParams)(n.href);
      }({
        chartId: t.url
      }) : void 0,
          b = (0, a.useContext)(P.SlotContext),
          C = (0, a.useMemo)(function () {
        return new Date(1e3 * t.modified);
      }, [t]),
          w = (0, a.useMemo)(function () {
        return (0, q.createRegExpList)(m);
      }, [m]),
          k = i()(H.highlight, g && H.active);

      return (0, a.useEffect)(function () {
        return o && o.metaInfo.id.subscribe(E), function () {
          o && o.metaInfo.id.unsubscribe(E);
        };
      }, []), a.createElement(Z.DialogContentItem, {
        url: _,
        title: a.createElement(W.HighlightedText, {
          className: k,
          queryString: m,
          rules: w,
          text: t.title
        }),
        subtitle: a.createElement(a.Fragment, null, a.createElement(W.HighlightedText, {
          className: k,
          queryString: m,
          rules: w,
          text: t.description
        }), " ", "(", U.format(C).replace(/-/g, "."), " ", V.formatLocal(C), ")"),
        onClick: function onClick(e) {
          0;
          t.openAction(), !1;
        },
        onClickFavorite: function onClickFavorite() {
          0;

          var e = _objectSpread({}, l);

          e[t.id] ? delete e[t.id] : e[t.id] = !0;
          t.favoriteAction(e).then(function () {
            0;
          });
        },
        showFavorite: Y,
        onClickRemove: function onClickRemove() {
          var e;
          return regeneratorRuntime.async(function onClickRemove$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!p) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  v(!0);
                  _context2.next = 5;
                  return regeneratorRuntime.awrap(function _callee(e) {
                    return regeneratorRuntime.async(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", s.t(null, {
                              replace: {
                                name: e.title
                              }
                            }, n(69368)));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    });
                  }(t));

                case 5:
                  e = _context2.sent;
                  v(!1), function (e, t, n, a) {
                    (0, j.showConfirm)({
                      text: e,
                      onConfirm: function onConfirm(_ref12) {
                        var e = _ref12.dialogClose;
                        t(), e();
                      },
                      onClose: function onClose() {
                        n();
                      }
                    }, a);
                  }(e, L, h, b);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          });
        },
        isFavorite: Boolean(l[t.id]),
        isActive: g,
        isSelected: f,
        "data-name": "load-chart-dialog-item"
      });

      function L() {
        t.deleteAction().then(function () {
          return d(t.id);
        });
      }

      function E(e) {
        y(t.id === e);
      }
    }

    var K = n(59064),
        $ = n(68335);
    var G = n(47541);

    var Q = {
      sortField: "modified",
      sortDirection: 1
    },
        X = function (e) {
      var _e$paddingTop = e.paddingTop,
          t = _e$paddingTop === void 0 ? 0 : _e$paddingTop,
          _e$paddingBottom = e.paddingBottom,
          n = _e$paddingBottom === void 0 ? 0 : _e$paddingBottom;
      return (0, a.forwardRef)(function (_ref13, r) {
        var e = _ref13.style,
            o = _objectWithoutProperties(_ref13, ["style"]);

        var _e$height = e.height,
            i = _e$height === void 0 ? 0 : _e$height;
        return a.createElement("div", _objectSpread({
          ref: r,
          style: _objectSpread({}, e, {
            height: "".concat(((0, D.isNumber)(i) ? i : parseFloat(i)) + t + n, "px")
          })
        }, o));
      });
    }({
      paddingBottom: 6
    });

    function ee(e) {
      var t;

      try {
        t = (0, R.getTranslatedResolution)(e);
      } catch (n) {
        t = e;
      }

      return t;
    }

    var te = I.enabled("items_favoriting"),
        ne = s.t(null, void 0, n(75789));

    function ae(e) {
      var t = e.charts,
          o = e.onClose,
          r = e.favoriteChartsService,
          d = e.chartWidgetCollection,
          _ref14 = (0, a.useState)(""),
          _ref15 = _slicedToArray(_ref14, 2),
          h = _ref15[0],
          f = _ref15[1],
          _ref16 = (0, a.useState)(h),
          _ref17 = _slicedToArray(_ref16, 2),
          g = _ref17[0],
          y = _ref17[1],
          _ref18 = (0, a.useState)([]),
          _ref19 = _slicedToArray(_ref18, 2),
          p = _ref19[0],
          _ = _ref19[1],
          b = (0, a.useRef)(null),
          _ref20 = (0, a.useState)(function () {
        if (r) return r.get();
        var e = {};
        return t.filter(function (e) {
          return e.favorite;
        }).forEach(function (t) {
          e[t.id] = !0;
        }), e;
      }),
          _ref21 = _slicedToArray(_ref20, 2),
          k = _ref21[0],
          D = _ref21[1],
          _ref22 = (0, a.useState)(function () {
        return c.getJSON("loadChartDialog.viewState", Q);
      }),
          _ref23 = _slicedToArray(_ref22, 2),
          S = _ref23[0],
          x = _ref23[1],
          A = (0, a.useRef)(null),
          N = (0, a.useRef)(null),
          M = (0, a.useMemo)(function () {
        return t.map(function (e) {
          return _objectSpread({}, e, {
            description: "".concat(e.symbol, ", ").concat(ee(e.interval))
          });
        });
      }, [t]);

      (0, a.useEffect)(function () {
        u.CheckMobile.any() || (0, l.ensureNotNull)(A.current).focus();
      }, []);
      var z = (0, a.useRef)();
      (0, a.useEffect)(function () {
        return z.current = setTimeout(function () {
          f(g);
        }, 300), function () {
          clearTimeout(z.current);
        };
      }, [g]), (0, a.useEffect)(function () {
        return null == r || r.getOnChange().subscribe(null, H), function () {
          null == r || r.getOnChange().unsubscribe(null, H);
        };
      }, []);

      var F = (0, a.useCallback)(function () {
        return !0;
      }, []),
          I = (0, a.useMemo)(function () {
        return (0, q.rankedSearch)({
          data: M.filter(function (e) {
            return !p.includes(e.id);
          }).sort((e = S.sortDirection, function (t, n) {
            if (k[t.id] && !k[n.id]) return -1;
            if (!k[t.id] && k[n.id]) return 1;
            var a = 0 === e ? 1 : -1;
            return "modified" === S.sortField ? a * (t.modified - n.modified) : a * t.title.localeCompare(n.title);
          })),
          rules: (0, q.createRegExpList)(h),
          queryString: h,
          primaryKey: "title",
          secondaryKey: "description"
        });
        var e;
      }, [h, S, p, k]),
          _ref24 = function (e, t, n) {
        var _ref25 = (0, a.useState)(-1),
            _ref26 = _slicedToArray(_ref25, 2),
            o = _ref26[0],
            r = _ref26[1];

        return (0, a.useEffect)(function () {
          var e;
          -1 !== o && (null === (e = n.current) || void 0 === e || e.scrollToItem(o));
        }, [o]), {
          selectedItemIndex: o,
          setSelectedItemIndex: r,
          handleKeyboardSelection: function handleKeyboardSelection(n) {
            switch ((0, $.hashFromEvent)(n)) {
              case 40:
                if (o === e - 1) return;
                r(o + 1);
                break;

              case 38:
                if (0 === o) return;
                if (-1 === o) return void r(o + 1);
                r(o - 1);
                break;

              case 13:
                t(n);
            }
          }
        };
      }(I.length, function (e) {
        var t = I[Z];
        if (-1 === Z || !t) return;
        0;
        t.openAction(), !1;
      }, N),
          Z = _ref24.selectedItemIndex,
          R = _ref24.setSelectedItemIndex,
          P = _ref24.handleKeyboardSelection;

      return a.createElement(m.AdaptivePopupDialog, {
        ref: b,
        onClose: o,
        onClickOutside: o,
        onKeyDown: P,
        isOpened: !0,
        className: G.dialog,
        title: ne,
        dataName: "load-layout-dialog",
        render: function render() {
          return a.createElement(a.Fragment, null, a.createElement(w.DialogSearch, {
            reference: A,
            onChange: B,
            placeholder: s.t(null, void 0, n(52298))
          }), a.createElement(L, {
            className: i()(!te && G.contentHeader)
          }, a.createElement(E, {
            title: s.t(null, void 0, n(25653))
          }), a.createElement(v, {
            sortDirection: S.sortDirection,
            title: s.t(null, void 0, n(41583)),
            "data-name": "load-chart-dialog-sort-button"
          }, a.createElement(C, {
            label: s.t(null, void 0, n(63479)),
            listSortField: S.sortField,
            itemSortField: "title",
            listSortDirection: S.sortDirection,
            itemSortDirection: 0,
            onClick: V,
            "data-name": "load-chart-dialog-sort-menu-item"
          }), a.createElement(C, {
            label: s.t(null, void 0, n(96189)),
            listSortField: S.sortField,
            itemSortField: "title",
            listSortDirection: S.sortDirection,
            itemSortDirection: 1,
            onClick: V,
            "data-name": "load-chart-dialog-sort-menu-item"
          }), a.createElement(C, {
            label: s.t(null, void 0, n(38212)),
            listSortField: S.sortField,
            itemSortField: "modified",
            listSortDirection: S.sortDirection,
            itemSortDirection: 0,
            onClick: V,
            "data-name": "load-chart-dialog-sort-menu-item"
          }), a.createElement(C, {
            label: s.t(null, void 0, n(63037)),
            listSortField: S.sortField,
            itemSortField: "modified",
            listSortDirection: S.sortDirection,
            itemSortDirection: 1,
            onClick: V,
            "data-name": "load-chart-dialog-sort-menu-item"
          }))), a.createElement(T, {
            scrollbar: "native",
            reference: N,
            itemCount: I.length,
            itemSize: 52,
            className: G.contentList,
            onScroll: j,
            innerElementType: X,
            itemKey: function itemKey(e) {
              return (k[I[e].id] ? "f_" : "") + I[e].id;
            },
            children: function children(_ref27) {
              var e = _ref27.style,
                  t = _ref27.index;
              return a.createElement("div", {
                style: e
              }, a.createElement(J, {
                chart: I[t],
                onClose: o,
                chartWidgetCollection: d,
                trackEvent: O,
                onRemoveCanceled: U,
                localFavorites: k,
                setLocalFavorites: D,
                searchString: h,
                onClickRemove: W,
                isSelected: t === Z
              }));
            }
          }));
        },
        forceCloseOnEsc: F
      });

      function j() {
        K.globalCloseDelegate.fire();
      }

      function B(e) {
        var t = e.currentTarget.value;
        y(t), R(-1);
      }

      function O(e) {
        0;
      }

      function W(e) {
        _([e].concat(_toConsumableArray(p)));
      }

      function H(e) {
        D(e);
      }

      function U() {
        (0, l.ensureNotNull)(b.current).focus();
      }

      function V(e, t) {
        var n = {
          sortField: e,
          sortDirection: t
        };
        x(n), c.setValue("loadChartDialog.viewState", JSON.stringify(n), {
          forceFlush: !0
        }), O();
      }
    }

    var oe = n(85067);

    var re =
    /*#__PURE__*/
    function (_oe$DialogRenderer) {
      _inherits(re, _oe$DialogRenderer);

      function re(e) {
        var _this;

        _classCallCheck(this, re);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(re).call(this)), _this._options = e;
        return _this;
      }

      _createClass(re, [{
        key: "show",
        value: function show() {
          var _this2 = this;

          o.render(a.createElement(ae, _objectSpread({}, this._options, {
            onClose: function onClose() {
              return _this2.hide();
            }
          })), this._container), this._setVisibility(!0);
        }
      }, {
        key: "hide",
        value: function hide() {
          o.unmountComponentAtNode(this._container), this._setVisibility(!1);
        }
      }]);

      return re;
    }(oe.DialogRenderer);
  },
  645: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>';
  },
  44563: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>';
  },
  69859: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
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
  15795: function _(e) {
    e.exports = {
      ar: ["جميع تنسيقاتي"],
      ca_ES: "All my layouts",
      cs: "All my layouts",
      de: ["Alle meine Layouts"],
      el: "All my layouts",
      en: "All my layouts",
      es: ["Todos mis diseños"],
      fa: "All my layouts",
      fr: ["Toutes mes mises en page"],
      he_IL: ["כל הפריסות שלי"],
      hu_HU: "All my layouts",
      id_ID: ["Seluruh layout saya"],
      it: ["Tutti i miei layout"],
      ja: ["すべてのレイアウト"],
      ko: ["내 모든 레이아웃"],
      ms_MY: ["Semua susun atur saya"],
      nl_NL: "All my layouts",
      pl: ["Wszystkie moje układy"],
      pt: ["Todos meus layouts"],
      ro: "All my layouts",
      ru: ["Все мои графики"],
      sv: ["Alla mina layouter"],
      th: ["เค้าโครงทั้งหมดของฉัน"],
      tr: ["Tüm yerleşimlerim"],
      vi: ["Tất cả bố cục của tôi"],
      zh: ["所有我的布局"],
      zh_TW: ["我的所有版面"]
    };
  },
  69368: function _(e) {
    e.exports = {
      ar: ["هل تريد فعلا مسح تصميم مخطط الرسم البيانى‎ ‎{name}‎؟"],
      ca_ES: ["De debò que voleu eliminar el disseny del gràfic '{name}'?"],
      cs: "Do you really want to delete Chart Layout '{name}' ?",
      de: ["Möchten Sie das Chartlayout '{name}' wirklich löschen?"],
      el: "Do you really want to delete Chart Layout '{name}' ?",
      en: "Do you really want to delete Chart Layout '{name}' ?",
      es: ["¿Está seguro de que desea eliminar el Diseño del gráfico '{name}'?"],
      fa: "Do you really want to delete Chart Layout '{name}' ?",
      fr: ["Voulez-vous vraiment supprimer la configuration du graphique '{name}' ?"],
      he_IL: ["האם אתה באמת רוצה למחוק פריסת גרף '{name}'?"],
      hu_HU: ["Biztos, hogy törölni akarod ezt a chart elrendezést: {name}?"],
      id_ID: ["Apakah benar anda ingin menghapus Layout Chart '{name}' ?"],
      it: ["Cancellare la configurazione '{name}' ?"],
      ja: ["本当にチャートレイアウト '{name}' を削除しますか？"],
      ko: ["정말로 차트 레이아웃 '{name}' 을 지우시겠습니까?"],
      ms_MY: ["Anda benar-benar ingin memadam Susunatur Carta '{name}' ?"],
      nl_NL: "Do you really want to delete Chart Layout '{name}' ?",
      pl: ["Czy na pewno chcesz usunąć układ graficzny '{name}'?"],
      pt: ["Você quer realmente deletar o leiaute do gráfico '{name}'?"],
      ro: "Do you really want to delete Chart Layout '{name}' ?",
      ru: ['Вы действительно хотите удалить сохранённый график "{name}"?'],
      sv: ["Vill du verkligen ta bort diagramlayout '{name}' ?"],
      th: ["คุณต้องการลบชาทส์ '{name}' จริง ๆ หรือไม?"],
      tr: ["'{name}' isimli Grafik Yerleşimini silmek istediğinizden emin misiniz?"],
      vi: ["Bạn có thực sự muốn xóa Bố cục Biểu đồ {name}?"],
      zh: ["确定删除图表布局'{name}' ?"],
      zh_TW: ["確定刪除圖表版面「{name}」？"]
    };
  },
  58013: function _(e) {
    e.exports = {
      ar: ['هل تريد حقًا حذف تنسيق ارسم البياني "{name}" الذي يحتوي على ‎{n_drawings_on_n_symbols}‎؟'],
      ca_ES: ["De debò que voleu eliminar el disseny del gràfic '{name}' que conté {n_drawings_on_n_symbols}?"],
      cs: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      de: ["Möchten Sie wirklich das Chart-Layout '{name}' löschen, das {n_drawings_on_n_symbols} enthält?"],
      el: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      en: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      es: ["¿Realmente quiere eliminar el diseño del gráfico '{name}' que contiene {n_drawings_on_n_symbols}?"],
      fa: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      fr: ['Voulez-vous vraiment supprimer le modèle de graphique " {name} " qui contient {n_drawings_on_n_symbols}?'],
      he_IL: ["האם אתה באמת רוצה למחוק את פריסת הגרף '{name}' שמכילה {n_drawings_on_n_symbols}?"],
      hu_HU: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      id_ID: ["Apakah Anda benar-benar ingin menghapus Layout Chart '{name}' yang berisi {n_drawings_on_n_symbols}?"],
      it: ["Vuoi davvero eliminare il salvataggio '{name}' che contiene {n_drawings_on_n_symbols}?"],
      ja: ["本当に{n_drawings_on_n_symbols}を含むチャートレイアウト「{name}」を削除しますか？"],
      ko: ["{n_drawings_on_n_symbols}이 포함된 차트 레이아웃 '{name}'을 삭제하시겠습니까?"],
      ms_MY: ["Adakah anda pasti untuk padamkan Susun Atur Carta '{name}' yang mengandungi {n_drawings_on_n_symbols}?"],
      nl_NL: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      pl: ["Czy na pewno chcesz usunąć układ wykresu '{name}', który zawiera {n_drawings_on_n_symbols}?"],
      pt: ["Você realmente quer deletar o Layout do Gráfico '{name}' que contém {n_drawings_on_n_symbols}?"],
      ro: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
      ru: ['Вы действительно хотите удалить график "{name}", который содержит {n_drawings_on_n_symbols}?'],
      sv: ["Ska du verkligen radera diagramlayout '{name}' som innehåller {n_drawings_on_n_symbols}?"],
      th: ["คุณต้องการลบเลยเอาต์ชาร์ต '{name}' ที่มี {n_drawings_on_n_symbols} หรือไม่?"],
      tr: ["{n_drawings_on_n_symbols} içeren Grafik Düzenini '{name}' gerçekten silmek istiyor musunuz?"],
      vi: ["Bạn có thực sự muốn xóa Bố cục Biểu đồ '{name}' có chứa {n_drawings_on_n_symbols} không?"],
      zh: ["您真的要删除包含{n_drawings_on_n_symbols}的图表布局“{name}”吗？"],
      zh_TW: ["您真的要刪除包含{n_drawings_on_n_symbols}的圖表版面“{name}”嗎？"]
    };
  },
  38212: function _(e) {
    e.exports = {
      ar: ["تاريخ التعديل (الأقدم أولاً)"],
      ca_ES: ["Data de modificació (la més antiga primer)"],
      cs: "Date modified (oldest first)",
      de: ["Bearbeitungs-Datum (ältestes zuerst)"],
      el: "Date modified (oldest first)",
      en: "Date modified (oldest first)",
      es: ["Fecha de modificación (la más antigua primero)"],
      fa: "Date modified (oldest first)",
      fr: ["Date de modification (la plus ancienne d'abord)"],
      he_IL: ["התאריך שונה (הישן ראשון)"],
      hu_HU: "Date modified (oldest first)",
      id_ID: ["Tanggal modifikasi (dari yang terlama)"],
      it: ["Data ultima modifica (vecchi prima)"],
      ja: ["変更日 (古い順)"],
      ko: ["바뀐 날짜 (옛것부터)"],
      ms_MY: ["Tarikh diubah (lama dahulu)"],
      nl_NL: "Date modified (oldest first)",
      pl: ["Data modyfikacji (od najstarszych)"],
      pt: ["Data da modificação (mais antiga primeiro)"],
      ro: "Date modified (oldest first)",
      ru: ["Дата изменения (сначала старые)"],
      sv: ["Ändringsdatum (äldst först)"],
      th: ["วันที่แก้ไข (เก่าก่อน)"],
      tr: ["Değişim tarihine göre sırala (önce en eski)"],
      vi: ["Ngày chỉnh sửa (cũ lên trước)"],
      zh: ["修改日期(由旧到新)"],
      zh_TW: ["修改日期(舊到新)"]
    };
  },
  63037: function _(e) {
    e.exports = {
      ar: ["تاريخ التعديل (الأحدث أولاً)"],
      ca_ES: ["Data de modificació (la més nova primer)"],
      cs: "Date modified (newest first)",
      de: ["Bearbeitungs-Datum (neuestes zuerst)"],
      el: "Date modified (newest first)",
      en: "Date modified (newest first)",
      es: ["Fecha de modificación (la más reciente primero)"],
      fa: "Date modified (newest first)",
      fr: ["Date de modification (la plus récente d'abord)"],
      he_IL: ["התאריך שונה (החדש ראשון)"],
      hu_HU: "Date modified (newest first)",
      id_ID: ["Tanggal modifikasi (dari yang terbaru)"],
      it: ["Data ultima modifica (recenti prima)"],
      ja: ["変更日 (新しい順)"],
      ko: ["바뀐 날짜 (새것부터)"],
      ms_MY: ["Tarikh diubah (terbaru dahulu)"],
      nl_NL: "Date modified (newest first)",
      pl: ["Data modyfikacji (od najnowszych)"],
      pt: ["Data da modificação (mais recente 1°)"],
      ro: "Date modified (newest first)",
      ru: ["Дата изменения (сначала новые)"],
      sv: ["Ändringsdatum (nyast först)"],
      th: ["วันที่แก้ไข (ใหม่ก่อน)"],
      tr: ["Değişim tarihine göre sırala (önce en yeni)"],
      vi: ["Ngày chỉnh sửa (mới lên trước)"],
      zh: ["修改日期(由新到旧)"],
      zh_TW: ["修改日期(新到舊)"]
    };
  },
  75789: function _(e) {
    e.exports = {
      ar: ["تحميل التنسيق"],
      ca_ES: ["Carrega disseny"],
      cs: "Load layout",
      de: ["Layout öffnen"],
      el: "Load layout",
      en: "Load layout",
      es: ["Cargar diseño"],
      fa: "Load layout",
      fr: ["Charger la mise en page"],
      he_IL: ["טען גרף"],
      hu_HU: "Load layout",
      id_ID: ["Muat layout"],
      it: ["Carica layout"],
      ja: ["レイアウトの読み込み"],
      ko: ["레이아웃 불러오기"],
      ms_MY: ["Memuatkan susun atur"],
      nl_NL: "Load layout",
      pl: ["Załaduj układ"],
      pt: ["Carregar layout"],
      ro: "Load layout",
      ru: ["Загрузить график"],
      sv: ["Ladda layout"],
      th: ["โหลดเลย์เอาท์"],
      tr: ["Yerleşimi yükle"],
      vi: ["Tải bố cục"],
      zh: ["加载布局"],
      zh_TW: ["加載版面"]
    };
  },
  25653: function _(e) {
    e.exports = {
      ar: ["اسم التنسيق"],
      ca_ES: ["Nom del disseny del gràfic"],
      cs: "Layout name",
      de: ["Layout Name"],
      el: "Layout name",
      en: "Layout name",
      es: ["Nombre del diseño del gráfico"],
      fa: "Layout name",
      fr: ["Nom de la mise en page"],
      he_IL: ["שם פריסת גרף"],
      hu_HU: "Layout name",
      id_ID: ["Nama Layout"],
      it: ["Nome layout"],
      ja: ["レイアウト名"],
      ko: ["레이아웃 네임"],
      ms_MY: ["Aturan nama"],
      nl_NL: "Layout name",
      pl: ["Nazwa układu"],
      pt: ["Nome do layout"],
      ro: "Layout name",
      ru: ["Имя графика"],
      sv: ["Layoutnamn"],
      th: ["ชื่อเลย์เอาท์"],
      tr: ["Yerleşim adı"],
      vi: ["Tên bố cục"],
      zh: ["布局名称"],
      zh_TW: ["版面名稱"]
    };
  },
  63479: function _(e) {
    e.exports = {
      ar: ["اسم التنسيق (A إلى Z)"],
      ca_ES: ["Nom de disseny (de la A a la Z)"],
      cs: "Layout name (A to Z)",
      de: ["Layout Name (A bis Z)"],
      el: "Layout name (A to Z)",
      en: "Layout name (A to Z)",
      es: ["Nombre de diseño (de la A a la Z)"],
      fa: "Layout name (A to Z)",
      fr: ["Nom de la mise en page (A à Z)"],
      he_IL: ["שם הפריסה (א' עד ת')"],
      hu_HU: "Layout name (A to Z)",
      id_ID: ["Nama layout (A ke Z)"],
      it: ["Nome layout (A-Z)"],
      ja: ["レイアウト名 (AからZ)"],
      ko: ["레이아웃 이름 (A - Z)"],
      ms_MY: ["Nama susun atur (A hingga Z)"],
      nl_NL: "Layout name (A to Z)",
      pl: ["Nazwa układu (A do Z)"],
      pt: ["Nome do layout (A a Z)"],
      ro: "Layout name (A to Z)",
      ru: ["Название графиков (А → Я)"],
      sv: ["Layoutnamn (A till Z)"],
      th: ["ชื่อเลย์เอาท์ (A ไปยัง Z)"],
      tr: ["Yerleşim adı (A'dan Z'ye)"],
      vi: ["Tên bố cục (A đến Z)"],
      zh: ["布局名称(A到Z)"],
      zh_TW: ["版面名稱(A到Z)"]
    };
  },
  96189: function _(e) {
    e.exports = {
      ar: ["اسم التنسيق (Z إلى A)"],
      ca_ES: ["Nom de disseny (de la Z a la A)"],
      cs: "Layout name (Z to A)",
      de: ["Layout Name (Z-A)"],
      el: "Layout name (Z to A)",
      en: "Layout name (Z to A)",
      es: ["Nombre de diseño (de la Z a la A)"],
      fa: "Layout name (Z to A)",
      fr: ["Nom de la mise en page (Z à A)"],
      he_IL: ["שם הפריסה (ת' עד א')"],
      hu_HU: "Layout name (Z to A)",
      id_ID: ["Nama layout (Z ke A)"],
      it: ["Nome layout (Z-A)"],
      ja: ["レイアウト名 (ZからA)"],
      ko: ["레이아웃 이름 (Z - A)"],
      ms_MY: ["Nama susun atur (Z hingga A)"],
      nl_NL: "Layout name (Z to A)",
      pl: ["Nazwa układu (Z do A)"],
      pt: ["Nome do layout (Z a A)"],
      ro: "Layout name (Z to A)",
      ru: ["Название графиков (Я → А)"],
      sv: ["Layoutnamn (Z till A)"],
      th: ["ชื่อเลย์เอาท์ (Z ไปยัง A)"],
      tr: ["Yerleşim adı (Z'den A'ya)"],
      vi: ["Tên bố cục (Z đến A)"],
      zh: ["布局名称(Z到A)"],
      zh_TW: ["版面名稱(Z到A)"]
    };
  },
  41583: function _(e) {
    e.exports = {
      ar: ["تصنيف حسب اسم التنسيق، وتاريخ التعديل"],
      ca_ES: ["Ordena per nom de disseny del gràfic, data de modificació"],
      cs: "Sort by layout name, date changed",
      de: ["Nach Layout-Name sortieren, Änderungsdatum"],
      el: "Sort by layout name, date changed",
      en: "Sort by layout name, date changed",
      es: ["Ordenar por nombre de diseño del gráfico, fecha de modificación"],
      fa: "Sort by layout name, date changed",
      fr: ["Trier par nom de mise en page, date modifiée"],
      he_IL: ["מיין לפי שם הפריסה layout , התאריך השתנה"],
      hu_HU: "Sort by layout name, date changed",
      id_ID: ["Urut berdasarkan nama layout, tanggal perubahan"],
      it: ["Ordina in base a nome, data"],
      ja: ["レイアウト名や変更日で並び替え"],
      ko: ["레이아웃 네임, 바뀐 날짜로 소팅"],
      ms_MY: ["Susun mengikut aturan nama, perubahan tarikh"],
      nl_NL: "Sort by layout name, date changed",
      pl: ["Sortuj według nazwy układu, data zmiany"],
      pt: ["Ordenar por nome do layout, data de alteração"],
      ro: "Sort by layout name, date changed",
      ru: ["Сортировать по имени, дате изменения"],
      sv: ["Sortera med layoutnamn, datum ändrat"],
      th: ["เรียงตามชื่อเลย์เอาท์, วันที่เปลี่ยนแปลง"],
      tr: ["Yerleşim adına, tarih değişikliğine göre sırala"],
      vi: ["Sắp xếp theo tên bố cục, ngày thay đổi"],
      zh: ["排序依布局名称、修改日期"],
      zh_TW: ["排序按版面名稱、修改日期"]
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
  39966: function _(e) {
    e.exports = {
      ar: ["على {amount} من الرموز", "على {amount} من الرموز", "على {amount} من الرموز", "على {amount} من الرموز", "على {amount} من الرموز", "على {amount} من الرموز"],
      ca_ES: ["en {amount} símbol", "en {amount} símbols"],
      cs: "on {amount} symbol",
      de: ["auf {amount} Symbol", "auf {amount} Symbolen"],
      el: "on {amount} symbol",
      en: "on {amount} symbol",
      es: ["en {amount} símbolo", "en {amount} símbolos"],
      fa: ["on {amount} symbols"],
      fr: ["sur {amount} symbole", "sur {amount} symbols"],
      he_IL: ["על סימול {amount}", "על סימולים {amount}", "על סימולים {amount}", "על סימולים {amount}"],
      hu_HU: ["on {amount} symbols"],
      id_ID: ["pada {amount} simbol"],
      it: ["su {amount} simbolo", "su {amount} simboli"],
      ja: ["（{amount}個のシンボル上に）"],
      ko: ["on {amount} 심볼"],
      ms_MY: ["pada simbol {amount}"],
      nl_NL: "on {amount} symbol",
      pl: ["na {amount} symbolu", "na {amount} symbolach", "na {amount} symbolach", "na {amount} symbolach"],
      pt: ["em {amount} símbolo", "em {amount} símbolos"],
      ro: "on {amount} symbol",
      ru: ["на {amount} инструменте", "на {amount} инструментах", "на {amount} инструментах", "на {amount} инструментах"],
      sv: ["på {amount} symbol", "på {amount} symboler"],
      th: ["บน {amount} สัญลักษณ์"],
      tr: ["{amount} sembolünde", "{amount} sembolünde"],
      vi: ["trên {amount} mã giao dịch"],
      zh: ["在{amount}个商品"],
      zh_TW: ["在{amount}商品"]
    };
  },
  93030: function _(e) {
    e.exports = {
      ar: ["{amount} من الرسوم ", "{amount} من الرسوم ", "{amount} من الرسوم ", "{amount} من الرسوم ", "{amount} من الرسوم ", "{amount} من الرسوم "],
      ca_ES: ["{amount} dibuix", "{amount} dibuixos"],
      cs: "{amount} drawing",
      de: ["{amount} Zeichnung", "{amount} Zeichnungen"],
      el: "{amount} drawing",
      en: "{amount} drawing",
      es: ["{amount} dibujo", "{amount} dibujos"],
      fa: ["{amount} drawings"],
      fr: ["{amount} dessin", "{amount} dessins"],
      he_IL: ["שרטוט {amount}", "שרטוטים {amount}", "שרטוטים {amount}", "שרטוטים {amount}"],
      hu_HU: ["{amount} drawings"],
      id_ID: ["{amount} gambar"],
      it: ["{amount} disegno", "{amount} disegni"],
      ja: ["{amount}個の描画"],
      ko: ["{amount} 드로잉"],
      ms_MY: ["{amount} lukisan"],
      nl_NL: "{amount} drawing",
      pl: ["{amount} rysunek", "{amount} rysunki", "{amount} rysunków", "{amount} rysunków"],
      pt: ["{amount} desenho", "{amount} desenhos"],
      ro: "{amount} drawing",
      ru: ["{amount} объект рисования", "{amount} объекта рисования", "{amount} объектов рисования", "{amount} объектов рисования"],
      sv: ["{amount} ritning", "{amount} ritningar"],
      th: ["{amount} การวาด"],
      tr: ["{amount} çizim", "{amount} çizim"],
      vi: ["{amount} bản vẽ"],
      zh: ["{amount}个绘图"],
      zh_TW: ["{amount}繪圖"]
    };
  }
}]);