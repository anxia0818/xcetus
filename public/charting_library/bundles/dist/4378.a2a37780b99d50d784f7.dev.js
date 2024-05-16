"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4378], {
  45015: function _(e) {
    e.exports = {
      "link-item": "link-item-eIA09f0e"
    };
  },
  85200: function _(e) {
    e.exports = {
      "arrow-icon": "arrow-icon-NIrWNOPk",
      dropped: "dropped-NIrWNOPk",
      "size-xsmall": "size-xsmall-NIrWNOPk",
      "size-small": "size-small-NIrWNOPk",
      "size-medium": "size-medium-NIrWNOPk",
      "size-large": "size-large-NIrWNOPk",
      "size-xlarge": "size-xlarge-NIrWNOPk"
    };
  },
  25164: function _(e) {
    e.exports = {
      "underline-tab": "underline-tab-cfYYXvwA",
      "disable-focus-outline": "disable-focus-outline-cfYYXvwA",
      "enable-cursor-pointer": "enable-cursor-pointer-cfYYXvwA",
      selected: "selected-cfYYXvwA",
      "disable-active-state-styles": "disable-active-state-styles-cfYYXvwA",
      "size-xsmall": "size-xsmall-cfYYXvwA",
      "size-small": "size-small-cfYYXvwA",
      "size-medium": "size-medium-cfYYXvwA",
      "size-large": "size-large-cfYYXvwA",
      "size-xlarge": "size-xlarge-cfYYXvwA",
      fake: "fake-cfYYXvwA"
    };
  },
  79877: function _(e) {
    e.exports = {
      "scroll-wrap": "scroll-wrap-SmxgjhBJ",
      "size-xlarge": "size-xlarge-SmxgjhBJ",
      "enable-scroll": "enable-scroll-SmxgjhBJ",
      "underline-tabs": "underline-tabs-SmxgjhBJ",
      "size-large": "size-large-SmxgjhBJ",
      "size-medium": "size-medium-SmxgjhBJ",
      "size-small": "size-small-SmxgjhBJ",
      "size-xsmall": "size-xsmall-SmxgjhBJ",
      "stretch-tabs": "stretch-tabs-SmxgjhBJ",
      "stretch-tab-item": "stretch-tab-item-SmxgjhBJ"
    };
  },
  56073: function _(e, t, n) {
    "use strict";

    function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = getComputedStyle(e),
          i = [n.height];
      return "border-box" !== n.boxSizing && i.push(n.paddingTop, n.paddingBottom, n.borderTopWidth, n.borderBottomWidth), t && i.push(n.marginTop, n.marginBottom), i.reduce(function (e, t) {
        return e + (parseFloat(t) || 0);
      }, 0);
    }

    function a(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = getComputedStyle(e),
          i = [n.width];
      return "border-box" !== n.boxSizing && i.push(n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth), t && i.push(n.marginLeft, n.marginRight), i.reduce(function (e, t) {
        return e + (parseFloat(t) || 0);
      }, 0);
    }

    n.d(t, {
      outerHeight: function outerHeight() {
        return i;
      },
      outerWidth: function outerWidth() {
        return a;
      }
    });
  },
  64378: function _(e, t, n) {
    "use strict";

    n.d(t, {
      UnderlineButtonTabs: function UnderlineButtonTabs() {
        return se;
      }
    });
    var i,
        a = n(50959),
        s = n(97754),
        l = n.n(s),
        r = n(44352);
    !function (e) {
      e.StartFirst = "start-first", e.EndFirst = "end-first";
    }(i || (i = {}));
    var o = n(67842),
        c = n(56073),
        u = n(78869),
        d = n(43010),
        m = n(53017);

    function b(e) {
      var t = e.itemsList,
          n = e.getItemId,
          i = e.calcVisibleAndHiddenItems,
          s = e.shouldKeepItemVisible,
          l = e.onMeasureCallback,
          _e$forceUpdate = e.forceUpdate,
          r = _e$forceUpdate === void 0 ? !1 : _e$forceUpdate,
          _ref = (0, u.useRefsMap)(),
          _ref2 = _slicedToArray(_ref, 2),
          b = _ref2[0],
          h = _ref2[1],
          v = (0, a.useRef)(null),
          g = (0, a.useRef)({
        widthsMap: new Map(),
        containerWidth: 0,
        moreButtonWidth: 0
      }),
          _ref3 = (0, a.useState)({
        visible: t,
        hidden: []
      }),
          _ref4 = _slicedToArray(_ref3, 2),
          p = _ref4[0],
          C = _ref4[1],
          k = (0, a.useMemo)(function () {
        return t.reduce(function (e, t, n) {
          return s(t) && e.push(n), e;
        }, []);
      }, [t, s]),
          w = (0, a.useCallback)(function () {
        var e = i(g.current, k);
        (function (e, t) {
          return !f(e.visible, t.visible) || !f(e.hidden, t.hidden);
        })(p, e) && C(e);
      }, [g, C, p, k, i]),
          x = (0, a.useCallback)(function () {
        g.current.moreButtonWidth = v.current ? (0, c.outerWidth)(v.current, !0) : 0;
        var e = new Map(g.current.widthsMap);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _i2 = _step.value;

            var _t = n(_i2),
                _a = b.current.get(_t);

            if (_a) {
              var _n2 = (0, c.outerWidth)(_a, !0);

              e.set(_t, _n2);
            }
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

        g.current.widthsMap = e, l && l();
      }, [g, t, n, b, l]),
          y = (0, a.useRef)(null),
          A = (0, a.useCallback)(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            e = _ref6[0];

        e.contentRect.width !== g.current.containerWidth && (y.current && cancelAnimationFrame(y.current), g.current.containerWidth = e.contentRect.width, y.current = requestAnimationFrame(function () {
          w();
        }));
      }, [g, w]),
          I = (0, a.useRef)(null),
          R = (0, a.useCallback)(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            e = _ref8[0];

        I.current && cancelAnimationFrame(I.current), x(), I.current = requestAnimationFrame(function () {
          w();
        });
      }, [x, w]),
          z = (0, o.useResizeObserver)(R),
          B = (0, o.useResizeObserver)(A),
          S = (0, a.useRef)(null),
          N = (0, m.mergeRefs)([B, S]),
          E = (0, a.useRef)(t),
          W = (0, a.useRef)(!0),
          H = (0, a.useRef)([]);

      return (0, d.useIsomorphicLayoutEffect)(function () {
        !r && !W.current && f(E.current, t) && f(k, H.current) || (w(), W.current = !1, E.current = t, H.current = k);
      }, [t, w, k, r]), {
        containerRefCallback: N,
        moreButtonRef: v,
        innerContainerRefCallback: z,
        itemsRefs: b,
        setItemRef: h,
        hiddenItems: p.hidden,
        visibleItems: p.visible,
        itemsMeasurements: g
      };
    }

    function f(e, t) {
      return e.length === t.length && e.reduce(function (e, n, i) {
        return e && n === t[i];
      }, !0);
    }

    function h(e, t, n) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : i.EndFirst;
      var l = (0, a.useCallback)(function (n, a) {
        var l = e.map(function (e) {
          var i;
          return null !== (i = n.widthsMap.get(t(e))) && void 0 !== i ? i : 0;
        });
        return function (_ref9) {
          var e = _ref9.items,
              t = _ref9.containerWidth,
              n = _ref9.elementsWidths,
              a = _ref9.menuItemWidth,
              s = _ref9.keepVisible,
              l = _ref9.direction;

          var r = _toConsumableArray(e),
              o = [],
              c = [];

          var u = 0;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = n[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e4 = _step2.value;
              u += _e4;
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

          if (u <= t) return {
            visible: r,
            hidden: c
          };

          var d = _toConsumableArray(n);

          if (u = s.map(function (e) {
            return d[e];
          }).reduce(function (e, t) {
            return e + t;
          }, 0) + a, l === i.EndFirst) for (var _e2 = 0; _e2 < r.length; _e2++) {
            s.includes(_e2) ? o.push(r[_e2]) : (u += d[_e2], u <= t ? o.push(r[_e2]) : c.push(r[_e2]));
          } else for (var _e3 = r.length - 1; _e3 >= 0; _e3--) {
            s.includes(_e3) ? o.unshift(r[_e3]) : (u += d[_e3], u <= t ? o.unshift(r[_e3]) : c.unshift(r[_e3]));
          }
          return {
            visible: o,
            hidden: c
          };
        }({
          items: e,
          containerWidth: n.containerWidth,
          elementsWidths: l,
          menuItemWidth: n.moreButtonWidth,
          keepVisible: a,
          direction: s
        });
      }, [e]);
      return b({
        itemsList: e,
        getItemId: t,
        calcVisibleAndHiddenItems: l,
        shouldKeepItemVisible: n
      });
    }

    var v,
        g = n(38528),
        p = n(47201),
        C = n(7953),
        k = n(22064);

    function w(e, t, n, i, a) {
      return {
        id: e,
        role: "tablist",
        "aria-orientation": t,
        "aria-label": a,
        "aria-labelledby": i,
        "aria-disabled": n
      };
    }

    function x(e, t, n, i, a) {
      return {
        id: e,
        role: "tab",
        tabIndex: t ? 0 : -1,
        disabled: a,
        "aria-selected": n,
        "aria-controls": i,
        "aria-disabled": a
      };
    }

    !function (e) {
      e.SquareButtonTabs = "square-button-tabs", e.UnderlineButtonTabs = "underline-button-tabs", e.UnderlineAnchorTabs = "underline-anchor-tabs", e.RoundAnchorTabs = "round-anchor-tabs", e.RoundButtonTabs = "round-button-tabs", e.LightButtonTabs = "light-button-tabs";
    }(v || (v = {}));
    var y = n(29202),
        A = n(16921),
        I = n(50151),
        R = n(66686),
        z = n(36762);

    function B() {
      return !1;
    }

    function S(e) {
      var _e$activationType = e.activationType,
          t = _e$activationType === void 0 ? "manual" : _e$activationType,
          n = (0, a.useMemo)(function () {
        return t;
      }, []);
      return (0, I.assert)(t === n, "Activation type must be invariant."), "automatic" === t ? function (e) {
        var t = e.isRtl,
            n = e.items,
            _e$preventDefaultIfHa = e.preventDefaultIfHandled,
            i = _e$preventDefaultIfHa === void 0 ? !0 : _e$preventDefaultIfHa,
            s = e.isHighlighted,
            l = e.onHighlight,
            r = e.onActivate,
            _e$isCollapsed = e.isCollapsed,
            o = _e$isCollapsed === void 0 ? B : _e$isCollapsed,
            c = (0, a.useCallback)(function (e) {
          l(e), o(e) || r(e);
        }, [l, r, o]);
        return (0, R.useKeyboardEventHandler)([(0, z.useItemsKeyboardNavigation)(t, n, s, c, !0)], i);
      }(e) : function (e) {
        var t = e.isRtl,
            n = e.items,
            _e$preventDefaultIfHa2 = e.preventDefaultIfHandled,
            i = _e$preventDefaultIfHa2 === void 0 ? !0 : _e$preventDefaultIfHa2,
            s = e.isHighlighted,
            l = e.onHighlight,
            r = e.onActivate,
            o = n.find(s),
            c = (0, a.useCallback)(function () {
          void 0 !== o && r(o);
        }, [o, r]),
            u = (0, a.useCallback)(function (e) {
          return l(e);
        }, [l]),
            d = (0, z.useItemsKeyboardNavigation)(t, n, s, u, !0),
            m = (0, R.useKeyboardActionHandler)([13, 32], c);
        return (0, R.useKeyboardEventHandler)([d, m], i);
      }(e);
    }

    var N = n(5325);

    function E(e) {
      var t = e.id,
          n = e.items,
          _e$orientation = e.orientation,
          i = _e$orientation === void 0 ? "horizontal" : _e$orientation,
          _e$activationType2 = e.activationType,
          s = _e$activationType2 === void 0 ? "manual" : _e$activationType2,
          l = e.disabled,
          r = e.tablistLabelId,
          o = e.tablistLabel,
          _e$focusOnHighlight = e.focusOnHighlight,
          c = _e$focusOnHighlight === void 0 ? !0 : _e$focusOnHighlight,
          _e$preventDefaultIfKe = e.preventDefaultIfKeyboardActionHandled,
          u = _e$preventDefaultIfKe === void 0 ? !0 : _e$preventDefaultIfKe,
          d = e.scrollIntoViewOptions,
          m = e.isActive,
          b = e.onActivate,
          f = e.isCollapsed,
          h = e.isRtl,
          v = function () {
        var _ref14 = (0, a.useState)(!1),
            _ref15 = _slicedToArray(_ref14, 2),
            e = _ref15[0],
            t = _ref15[1];

        return (0, a.useEffect)(function () {
          t(N.mobiletouch);
        }, []), e;
      }(),
          g = (0, a.useRef)(new Map()),
          _ref10 = (0, a.useState)(),
          _ref11 = _slicedToArray(_ref10, 2),
          C = _ref11[0],
          I = _ref11[1],
          _ref12 = (0, y.useFocus)(),
          _ref13 = _slicedToArray(_ref12, 2),
          R = _ref13[0],
          z = _ref13[1],
          B = n.find(m),
          E = (0, a.useCallback)(function (e) {
        return !l && !e.disabled && e === C;
      }, [l, C]),
          W = (0, a.useCallback)(function (e) {
        var t = g.current.get(e);
        c && void 0 !== t && t !== document.activeElement && t.focus();
      }, [c, g]),
          H = (0, a.useRef)(),
          O = (0, a.useCallback)(function (e, t) {
        l || e.disabled || (I(e), "number" == typeof t ? (clearTimeout(H.current), H.current = setTimeout(function () {
          return W(e);
        }, t)) : W(e));
      }, [l, E, I, W]),
          T = (0, a.useCallback)(function (e) {
        l || e.disabled || (b(e), E(e) || O(e));
      }, [l, m, b, E, O]),
          F = S({
        isRtl: h,
        items: (0, a.useMemo)(function () {
          return n.filter(function (e) {
            return !l && !e.disabled;
          });
        }, [n, l]),
        activationType: s,
        preventDefaultIfHandled: u,
        onActivate: T,
        isHighlighted: E,
        onHighlight: O,
        isCollapsed: f
      }),
          M = (0, a.useCallback)(function (e) {
        var t = null;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = g.current.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                _n3 = _step3$value[0],
                _i3 = _step3$value[1];

            if (e.target === _i3) {
              t = _n3;
              break;
            }
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

        t && !E(t) && ("automatic" === s && f && !f(t) ? T(t) : O(t));
      }, [s, g, E, O, T, f]);

      (0, a.useEffect)(function () {
        v || void 0 !== B && I(B);
      }, [B, v]), (0, a.useEffect)(function () {
        R || I(void 0);
      }, [R]), (0, a.useEffect)(function () {
        return function () {
          return clearTimeout(H.current);
        };
      }, []);

      var _ref16 = (0, A.useKeepActiveItemIntoView)(_objectSpread({}, d, {
        activeItem: null != C ? C : B,
        getKey: (0, a.useCallback)(function (e) {
          return e.id;
        }, [])
      })),
          _ref17 = _slicedToArray(_ref16, 2),
          Y = _ref17[0],
          L = _ref17[1],
          K = (0, a.useCallback)(function (e, t) {
        L(e, t), null !== t ? g.current.set(e, t) : g.current["delete"](e);
      }, [L, g]);

      var D;
      return {
        tabsBindings: n.map(function (e) {
          var t, n;
          var i = E(e),
              a = m(e),
              s = null !== (n = null !== (t = e.disabled) && void 0 !== t ? t : l) && void 0 !== n && n,
              r = !s && (R ? i : a);
          return _objectSpread({}, x(e.id, r, a, e.tabpanelId, s), {
            highlighted: i,
            active: a,
            handleItemRef: K
          });
        }),
        tablistBinding: _objectSpread({}, w((D = t, (0, k.createDomId)(D, "tablist")), i, l, r, o), {
          onBlur: z.onBlur,
          onFocus: (0, p.createSafeMulticastEventHandler)(z.onFocus, M),
          onKeyDown: F
        }),
        scrollWrapBinding: {
          ref: Y
        },
        onActivate: T,
        onHighlight: O,
        isHighlighted: E
      };
    }

    var W = n(26597);
    var H = (0, a.createContext)("small");
    var O = n(17946),
        T = n(25164);

    function F(e) {
      var _e$size = e.size,
          t = _e$size === void 0 ? "xsmall" : _e$size,
          n = e.active,
          i = e.fake,
          a = e.enableActiveStateStyles,
          _e$anchor = e.anchor,
          l = _e$anchor === void 0 ? !1 : _e$anchor,
          _e$hideFocusOutline = e.hideFocusOutline,
          r = _e$hideFocusOutline === void 0 ? !1 : _e$hideFocusOutline,
          o = e.className;
      return s(T["underline-tab"], T["size-".concat(t)], n && T.selected, !a && T["disable-active-state-styles"], r && T["disable-focus-outline"], i && T.fake, l && T["enable-cursor-pointer"], o);
    }

    var M = (0, a.forwardRef)(function (e, t) {
      var n = (0, a.useContext)(H),
          i = (0, a.useContext)(O.CustomBehaviourContext),
          s = e.active,
          l = e.fake,
          r = e.className,
          _e$enableActiveStateS = e.enableActiveStateStyles,
          o = _e$enableActiveStateS === void 0 ? i.enableActiveStateStyles : _e$enableActiveStateS,
          _e$hideFocusOutline2 = e.hideFocusOutline,
          c = _e$hideFocusOutline2 === void 0 ? !1 : _e$hideFocusOutline2,
          u = _objectWithoutProperties(e, ["active", "fake", "className", "enableActiveStateStyles", "hideFocusOutline"]);

      return a.createElement("button", _objectSpread({}, u, {
        ref: t,
        className: F({
          size: n,
          active: s,
          fake: l,
          enableActiveStateStyles: o,
          hideFocusOutline: c,
          className: r
        })
      }));
    });
    M.displayName = "UnderlineTabsBaseButton";
    var Y = (0, a.forwardRef)(function (e, t) {
      var n = e.item,
          i = e.highlighted,
          s = e.handleItemRef,
          l = e.onClick,
          r = e["aria-disabled"],
          o = _objectWithoutProperties(e, ["item", "highlighted", "handleItemRef", "onClick", "aria-disabled"]),
          c = (0, a.useCallback)(function () {
        l && l(n);
      }, [l, n]),
          u = (0, a.useCallback)(function (e) {
        s && s(n, e), t && "object" == _typeof(t) ? t.current = e : "function" == typeof t && t(e);
      }, [n, s, t]);

      return a.createElement(M, _objectSpread({}, o, {
        id: n.id,
        onClick: c,
        ref: u
      }), n.label);
    });
    Y.displayName = "UnderlineButtonTab";
    var L = n(16396),
        K = n(4523),
        D = n(9745),
        P = n(47531),
        j = n(2948),
        X = n(63509),
        J = n(68874),
        V = n(85200);

    function U(e) {
      switch (e) {
        case "xsmall":
          return P;

        case "small":
          return j;

        case "medium":
        case "large":
          return X;

        case "xlarge":
          return J;
      }
    }

    function q(e) {
      var t = e.size,
          _e$isDropped = e.isDropped,
          n = _e$isDropped === void 0 ? !1 : _e$isDropped;
      return a.createElement(D.Icon, {
        icon: U(t),
        className: s(V["arrow-icon"], V["size-".concat(t)], n && V.dropped)
      });
    }

    var $ = n(45015);

    function Z(e) {
      var t = e.size,
          n = e.disabled,
          i = e.isOpened,
          s = e.enableActiveStateStyles,
          l = e.hideFocusOutline,
          r = e.fake,
          o = e.items,
          c = e.buttonContent,
          u = e.buttonRef,
          d = e.isAnchorTabs,
          m = e.isHighlighted,
          b = e.onButtonClick,
          f = e.onItemClick,
          h = e.onClose,
          v = (0, a.useRef)(null),
          p = (0, g.useMergedRefs)([u, v]),
          C = function (e, t) {
        var n = (0, a.useRef)(Q);
        return (0, a.useEffect)(function () {
          var e = getComputedStyle((0, I.ensureNotNull)(t.current));
          n.current = {
            xsmall: G(e, "xsmall"),
            small: G(e, "small"),
            medium: G(e, "medium"),
            large: G(e, "large"),
            xlarge: G(e, "xlarge")
          };
        }, [t]), (0, a.useCallback)(function () {
          var i = (0, I.ensureNotNull)(t.current).getBoundingClientRect(),
              a = n.current[e];
          return {
            x: i.left,
            y: i.top + i.height + a + 4,
            indentFromWindow: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            }
          };
        }, [t, e]);
      }(t, v);

      return a.createElement(K.PopupMenuDisclosureView, {
        buttonRef: v,
        listboxTabIndex: -1,
        isOpened: i,
        onClose: h,
        listboxAria: {
          "aria-hidden": !0
        },
        popupPosition: C,
        button: a.createElement(M, {
          "aria-hidden": !0,
          disabled: n,
          active: i,
          onClick: b,
          ref: p,
          tabIndex: -1,
          enableActiveStateStyles: s,
          hideFocusOutline: l,
          fake: r
        }, c, a.createElement(q, {
          size: t,
          isDropped: i
        })),
        popupChildren: o.map(function (e) {
          return a.createElement(L.PopupMenuItem, {
            key: e.id,
            className: d ? $["link-item"] : void 0,
            onClick: f,
            onClickArg: e,
            isActive: m(e),
            label: e.label,
            isDisabled: e.disabled,
            link: "href" in e ? e.href : void 0,
            rel: "rel" in e ? e.rel : void 0,
            target: "target" in e ? e.target : void 0,
            renderComponent: "renderComponent" in e ? e.renderComponent : void 0,
            dontClosePopup: !0
          });
        })
      });
    }

    function G(e, t) {
      return parseInt(e.getPropertyValue("--ui-lib-underline-tabs-tab-margin-bottom-".concat(t)), 10);
    }

    var Q = {
      xsmall: 0,
      small: 0,
      medium: 0,
      large: 0,
      xlarge: 0
    };

    function _(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var _ref18 = (0, a.useState)(t),
          _ref19 = _slicedToArray(_ref18, 2),
          n = _ref19[0],
          i = _ref19[1];

      return (0, a.useEffect)(function () {
        var t = window.matchMedia(e);

        function n() {
          i(t.matches);
        }

        return n(), t.addListener(n), function () {
          t.removeListener(n);
        };
      }, [e]), n;
    }

    var ee = n(86240),
        te = n(79877);

    function ne(e) {
      var t = e.size,
          n = e.overflowBehaviour,
          i = e.className;
      return s(te["scroll-wrap"], te["size-".concat(t)], "scroll" === n && te["enable-scroll"], i);
    }

    function ie() {
      var _ref20 = (0, a.useState)(!1),
          _ref21 = _slicedToArray(_ref20, 2),
          e = _ref21[0],
          t = _ref21[1];

      return (0, a.useEffect)(function () {
        t(N.mobiletouch);
      }, []), e;
    }

    var ae = n(38223);

    function se(e) {
      var t = e.id,
          i = e.items,
          s = e.activationType,
          o = e.orientation,
          c = e.disabled,
          _e$moreButtonContent = e.moreButtonContent,
          u = _e$moreButtonContent === void 0 ? r.t(null, void 0, n(41610)) : _e$moreButtonContent,
          _e$size2 = e.size,
          d = _e$size2 === void 0 ? "small" : _e$size2,
          m = e.onActivate,
          b = e.isActive,
          f = e.className,
          v = e.style,
          k = e.overflowBehaviour,
          w = e.enableActiveStateStyles,
          x = e.tablistLabelId,
          y = e.tablistLabel,
          _e$dataName = e["data-name"],
          A = _e$dataName === void 0 ? "underline-tabs-buttons" : _e$dataName,
          I = e.stretchTabs,
          R = ie(),
          z = function (e) {
        var t = _(ee["media-mf-phone-landscape"], !0),
            n = ie();

        return null != e ? e : n || !t ? "scroll" : "collapse";
      }(k),
          B = (0, a.useRef)(!1),
          S = (0, a.useCallback)(function (e) {
        return e.id;
      }, []),
          N = "none" === z && I,
          O = null != w ? w : !R,
          _h = h(i, S, b),
          T = _h.visibleItems,
          F = _h.hiddenItems,
          M = _h.containerRefCallback,
          L = _h.innerContainerRefCallback,
          K = _h.moreButtonRef,
          D = _h.setItemRef,
          P = "collapse" === z ? T : i,
          j = "collapse" === z ? F : [],
          X = (0, a.useCallback)(function (e) {
        return j.includes(e);
      }, [j]),
          _E = E({
        id: t,
        items: [].concat(_toConsumableArray(P), _toConsumableArray(j)),
        activationType: s,
        orientation: o,
        disabled: c,
        tablistLabelId: x,
        tablistLabel: y,
        onActivate: m,
        isActive: b,
        isCollapsed: X,
        isRtl: ae.isRtl
      }),
          J = _E.tabsBindings,
          V = _E.tablistBinding,
          U = _E.scrollWrapBinding,
          q = _E.onActivate,
          $ = _E.onHighlight,
          G = _E.isHighlighted,
          Q = j.find(G),
          se = (0, a.useCallback)(function () {
        var e = i.find(b);
        e && $(e);
      }, [$, b, i]),
          le = (0, a.useCallback)(function (e) {
        var t;
        return null !== (t = J.find(function (t) {
          return t.id === e.id;
        })) && void 0 !== t ? t : {};
      }, [i, J]),
          _ref22 = (0, C.useDisclosure)({
        id: t,
        disabled: c
      }),
          re = _ref22.isOpened,
          oe = _ref22.open,
          ce = _ref22.close,
          ue = _ref22.onButtonClick,
          de = (0, a.useCallback)(function () {
        ce(), se(), B.current = !0;
      }, [ce, se]),
          me = (0, a.useCallback)(function () {
        Q && (q(Q), $(Q, 200));
      }, [q, $, Q]);

      U.ref = (0, g.useMergedRefs)([U.ref, M]), V.ref = (0, g.useMergedRefs)([V.ref, L]), V.onKeyDown = (0, p.createSafeMulticastEventHandler)((0, W.useKeyboardEventHandler)([(0, W.useKeyboardClose)(re, de), (0, W.useKeyboardActionHandler)([13, 32], me, (0, a.useCallback)(function () {
        return Boolean(Q);
      }, [Q]))]), V.onKeyDown);
      var be = (0, a.useCallback)(function (e) {
        B.current = !0, ue(e);
      }, [B, ue]),
          fe = (0, a.useCallback)(function (e) {
        e && q(e);
      }, [q]);
      return (0, a.useEffect)(function () {
        B.current ? B.current = !1 : (Q && !re && oe(), !Q && re && ce());
      }, [Q, re, oe, ce]), a.createElement(H.Provider, {
        value: d
      }, a.createElement("div", _objectSpread({}, U, {
        className: ne({
          size: d,
          overflowBehaviour: z,
          className: f
        }),
        style: v,
        "data-name": A
      }), a.createElement("div", _objectSpread({}, V, {
        className: l()(te["underline-tabs"], N && te["stretch-tabs"])
      }), P.map(function (e) {
        return a.createElement(Y, _objectSpread({}, le(e), {
          className: l()(N && te["stretch-tab-item"]),
          key: e.id,
          item: e,
          onClick: function onClick() {
            return q(e);
          },
          enableActiveStateStyles: O,
          hideFocusOutline: R,
          ref: D(S(e))
        }, e.dataId && {
          "data-id": e.dataId
        }));
      }), j.map(function (e) {
        return a.createElement(Y, _objectSpread({}, le(e), {
          key: e.id,
          item: e,
          fake: !0
        }));
      }), a.createElement(Z, {
        size: d,
        disabled: c,
        isOpened: re,
        items: j,
        buttonContent: u,
        buttonRef: K,
        isHighlighted: G,
        onButtonClick: be,
        onItemClick: fe,
        onClose: ce,
        enableActiveStateStyles: O,
        hideFocusOutline: R,
        fake: 0 === j.length
      }))));
    }

    var le = n(38952);

    function re(e) {
      return a.createElement("a", _objectSpread({}, (0, le.renameRef)(e)));
    }

    (0, a.forwardRef)(function (e, t) {
      var n;

      var i = (0, a.useContext)(H),
          s = (0, a.useContext)(O.CustomBehaviourContext),
          l = e.item,
          r = e.highlighted,
          o = e.handleItemRef,
          c = e.onClick,
          u = e.active,
          d = e.fake,
          m = e.className,
          _e$enableActiveStateS2 = e.enableActiveStateStyles,
          b = _e$enableActiveStateS2 === void 0 ? s.enableActiveStateStyles : _e$enableActiveStateS2,
          _e$hideFocusOutline3 = e.hideFocusOutline,
          f = _e$hideFocusOutline3 === void 0 ? !1 : _e$hideFocusOutline3,
          h = e.disabled,
          v = e["aria-disabled"],
          g = _objectWithoutProperties(e, ["item", "highlighted", "handleItemRef", "onClick", "active", "fake", "className", "enableActiveStateStyles", "hideFocusOutline", "disabled", "aria-disabled"]),
          p = (0, a.useCallback)(function (e) {
        v ? e.preventDefault() : c && c(l);
      }, [c, v, l]),
          C = (0, a.useCallback)(function (e) {
        o && o(l, e), t && "object" == _typeof(t) ? t.current = e : "function" == typeof t && t(e);
      }, [l, o, t]),
          k = null !== (n = l.renderComponent) && void 0 !== n ? n : re;

      return a.createElement(k, _objectSpread({}, g, {
        id: l.id,
        "aria-disabled": v,
        onClick: p,
        reference: C,
        href: l.href,
        rel: l.rel,
        target: l.target,
        className: F({
          size: i,
          active: u,
          fake: d,
          enableActiveStateStyles: b,
          anchor: !0,
          hideFocusOutline: f,
          className: m
        })
      }), l.label);
    }).displayName = "UnderlineAnchorTab";
  },
  47531: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"/></svg>';
  },
  63509: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.38 11.78a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L9 9.72l-4.38-3.5a1 1 0 1 0-1.24 1.56l5 4Z"/></svg>';
  },
  68874: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.3 10.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"/></svg>';
  }
}]);