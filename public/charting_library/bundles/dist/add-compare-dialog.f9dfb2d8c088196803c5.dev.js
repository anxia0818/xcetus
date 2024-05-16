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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[731], {
  59142: function _(e, t) {
    var o, r, a;
    r = [t], o = function o(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, o = Array(e.length); t < e.length; t++) {
            o[t] = e[t];
          }

          return o;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = !1;

      if ("undefined" != typeof window) {
        var r = {
          get passive() {
            o = !0;
          }

        };
        window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r);
      }

      var a = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          n = [],
          s = !1,
          i = -1,
          l = void 0,
          c = void 0,
          d = function d(e) {
        return n.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          u = function u(e) {
        var t = e || window.event;
        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          m = function m() {
        setTimeout(function () {
          void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0);
        });
      };

      e.disableBodyScroll = function (e, r) {
        if (a) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !n.some(function (t) {
            return t.targetElement === e;
          })) {
            var m = {
              targetElement: e,
              options: r || {}
            };
            n = [].concat(t(n), [m]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (i = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var o, r, a, n;
              1 === t.targetTouches.length && (r = e, n = (o = t).targetTouches[0].clientY - i, !d(o.target) && (r && 0 === r.scrollTop && 0 < n || (a = r) && a.scrollHeight - a.scrollTop <= a.clientHeight && n < 0 ? u(o) : o.stopPropagation()));
            }, s || (document.addEventListener("touchmove", u, o ? {
              passive: !1
            } : void 0), s = !0);
          }
        } else {
          p = r, setTimeout(function () {
            if (void 0 === c) {
              var e = !!p && !0 === p.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var h = {
            targetElement: e,
            options: r || {}
          };
          n = [].concat(t(n), [h]);
        }

        var p;
      }, e.clearAllBodyScrollLocks = function () {
        a ? (n.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), s && (document.removeEventListener("touchmove", u, o ? {
          passive: !1
        } : void 0), s = !1), n = [], i = -1) : (m(), n = []);
      }, e.enableBodyScroll = function (e) {
        if (a) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, n = n.filter(function (t) {
            return t.targetElement !== e;
          }), s && 0 === n.length && (document.removeEventListener("touchmove", u, o ? {
            passive: !1
          } : void 0), s = !1);
        } else 1 === n.length && n[0].targetElement === e ? (m(), n = []) : n = n.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (a = "function" == typeof o ? o.apply(t, r) : o) || (e.exports = a);
  },
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
  57222: function _(e) {
    e.exports = {
      button: "button-Rc93kXa8",
      bordersVisible: "bordersVisible-Rc93kXa8",
      selected: "selected-Rc93kXa8"
    };
  },
  17723: function _(e) {
    e.exports = {
      footer: "footer-dwINHZFL"
    };
  },
  85286: function _(e) {
    e.exports = {
      wrap: "wrap-oc7l8ZQg",
      header: "header-oc7l8ZQg",
      item: "item-oc7l8ZQg"
    };
  },
  44467: function _(e) {
    e.exports = {
      label: "label-lVJKBKVk"
    };
  },
  78724: function _(e) {
    e.exports = {
      scrollable: "scrollable-sXALjK1u",
      spinnerWrap: "spinnerWrap-sXALjK1u",
      item: "item-sXALjK1u",
      heading: "heading-sXALjK1u",
      checkboxWrap: "checkboxWrap-sXALjK1u",
      checkbox: "checkbox-sXALjK1u",
      emptyState: "emptyState-sXALjK1u",
      image: "image-sXALjK1u",
      text: "text-sXALjK1u"
    };
  },
  10341: function _(e) {
    e.exports = {
      dialog: "dialog-IKuIIugL",
      tablet: "tablet-IKuIIugL"
    };
  },
  66076: function _(e) {
    e.exports = {
      "default-drawer-min-top-distance": "100px",
      wrap: "wrap-_HnK0UIN",
      positionBottom: "positionBottom-_HnK0UIN",
      backdrop: "backdrop-_HnK0UIN",
      drawer: "drawer-_HnK0UIN",
      positionLeft: "positionLeft-_HnK0UIN"
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
  70673: function _(e, t, o) {
    "use strict";

    o.d(t, {
      CheckboxInput: function CheckboxInput() {
        return d;
      }
    });
    var r = o(50959),
        a = o(97754),
        n = o(90186),
        s = o(9745),
        i = o(65890),
        l = o(70048),
        c = o.n(l);

    function d(e) {
      var _a;

      var t = a(c().box, c()["intent-".concat(e.intent)], (_a = {}, _defineProperty(_a, c().check, !Boolean(e.indeterminate)), _defineProperty(_a, c().dot, Boolean(e.indeterminate)), _defineProperty(_a, c().noOutline, -1 === e.tabIndex), _a)),
          o = a(c().wrapper, e.className);
      return r.createElement("span", {
        className: o,
        title: e.title,
        style: e.style
      }, r.createElement("input", _objectSpread({
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
      }, (0, n.filterDataProps)(e))), r.createElement("span", {
        className: t
      }, r.createElement(s.Icon, {
        icon: i,
        className: c().icon
      })));
    }
  },
  36383: function _(e, t, o) {
    "use strict";

    o.d(t, {
      useOutsideEvent: function useOutsideEvent() {
        return n;
      }
    });
    var r = o(50959),
        a = o(27267);

    function n(e) {
      var t = e.click,
          o = e.mouseDown,
          n = e.touchEnd,
          s = e.touchStart,
          i = e.handler,
          l = e.reference,
          _e$ownerDocument = e.ownerDocument,
          c = _e$ownerDocument === void 0 ? document : _e$ownerDocument,
          d = (0, r.useRef)(null),
          u = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
      return (0, r.useLayoutEffect)(function () {
        var e = {
          click: t,
          mouseDown: o,
          touchEnd: n,
          touchStart: s
        },
            r = l ? l.current : d.current;
        return (0, a.addOutsideEventListener)(u.current, r, i, c, e);
      }, [t, o, n, s, i]), l || d;
    }
  },
  9745: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Icon: function Icon() {
        return a;
      }
    });
    var r = o(50959);
    var a = r.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          o = _e$icon === void 0 ? "" : _e$icon,
          a = _objectWithoutProperties(e, ["icon"]);

      return r.createElement("span", _objectSpread({}, a, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: o
        }
      }));
    });
  },
  67961: function _(e, t, o) {
    "use strict";

    o.d(t, {
      OverlapManager: function OverlapManager() {
        return n;
      },
      getRootOverlapManager: function getRootOverlapManager() {
        return i;
      }
    });
    var r = o(50151);

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);

        this._storage = [];
      }

      _createClass(a, [{
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

      return a;
    }();

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

        _classCallCheck(this, n);

        this._storage = new a(), this._windows = new Map(), this._index = 0, this._document = e, this._container = e.createDocumentFragment();
      }

      _createClass(n, [{
        key: "setContainer",
        value: function setContainer(e) {
          var t = this._container,
              o = null === e ? this._document.createDocumentFragment() : e;
          !function (e, t) {
            Array.from(e.childNodes).forEach(function (e) {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          }(t, o), this._container = o;
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

          var o = this._windows.get(e);

          if (void 0 !== o) return o;
          this.registerWindow(e);

          var r = this._document.createElement("div");

          if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
            var _e = this._container.childNodes.length;
            if (t.index >= _e) this._container.appendChild(r);else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);else {
              var _e2 = this._container.childNodes[t.index];

              this._container.insertBefore(r, _e2);
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

      return n;
    }();

    var s = new WeakMap();

    function i() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = e.getElementById("overlap-manager-root");
      if (null !== t) return (0, r.ensureDefined)(s.get(t));
      {
        var _t = new n(e),
            _o = function (e) {
          var t = e.createElement("div");
          return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t;
        }(e);

        return s.set(_o, _t), _t.setContainer(_o), e.body.appendChild(_o), _t;
      }
    }
  },
  99054: function _(e, t, o) {
    "use strict";

    o.d(t, {
      setFixedBodyState: function setFixedBodyState() {
        return c;
      }
    });

    var r = function () {
      var e;
      return function () {
        var t;

        if (void 0 === e) {
          var _o2 = document.createElement("div"),
              _r = _o2.style;

          _r.visibility = "hidden", _r.width = "100px", _r.msOverflowStyle = "scrollbar", document.body.appendChild(_o2);
          var _a2 = _o2.offsetWidth;
          _o2.style.overflow = "scroll";

          var _n = document.createElement("div");

          _n.style.width = "100%", _o2.appendChild(_n);
          var _s = _n.offsetWidth;
          null === (t = _o2.parentNode) || void 0 === t || t.removeChild(_o2), e = _a2 - _s;
        }

        return e;
      };
    }();

    function a(e, t, o) {
      null !== e && e.style.setProperty(t, o);
    }

    function n(e, t) {
      return getComputedStyle(e, null).getPropertyValue(t);
    }

    function s(e, t) {
      return parseInt(n(e, t));
    }

    var i = 0,
        l = !1;

    function c(e) {
      var _document = document,
          t = _document.body,
          o = t.querySelector(".widgetbar-wrap");

      if (e && 1 == ++i) {
        var _e3 = n(t, "overflow"),
            _i = s(t, "padding-right");

        "hidden" !== _e3.toLowerCase() && t.scrollHeight > t.offsetHeight && (a(o, "right", "".concat(r(), "px")), t.style.paddingRight = "".concat(_i + r(), "px"), l = !0), t.classList.add("i-no-scroll");
      } else if (!e && i > 0 && 0 == --i && (t.classList.remove("i-no-scroll"), l)) {
        a(o, "right", "0px");
        var _e4 = 0;
        0, t.scrollHeight <= t.clientHeight && (_e4 -= r()), t.style.paddingRight = (_e4 < 0 ? 0 : _e4) + "px", l = !1;
      }
    }
  },
  45601: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Measure: function Measure() {
        return a;
      }
    });
    var r = o(67842);

    function a(e) {
      var t = e.children,
          o = e.onResize;
      return t((0, r.useResizeObserver)(o || function () {}, [null === o]));
    }
  },
  39362: function _(e, t, o) {
    "use strict";

    o.d(t, {
      SymbolSearchDialogFooter: function SymbolSearchDialogFooter() {
        return i;
      }
    });
    var r = o(50959),
        a = o(97754),
        n = o.n(a),
        s = o(17723);

    function i(e) {
      var t = e.className,
          o = e.children;
      return r.createElement("div", {
        className: n()(s.footer, t)
      }, o);
    }
  },
  89035: function _(e, t, o) {
    "use strict";

    o.r(t), o.d(t, {
      getCompareDialogRenderer: function getCompareDialogRenderer() {
        return se;
      }
    });
    var r = o(50959),
        a = o(44352),
        n = o(32563),
        s = o(14483),
        i = o(65106),
        l = o(97754),
        c = o.n(l),
        d = o(50151),
        u = o(9745),
        m = o(86656),
        h = o(77975),
        p = o(63932),
        v = o(26843),
        f = o(45345),
        b = o(45601),
        g = o(84524),
        y = o(40987);
    var S = r.createContext(null);

    var _ = o(70412),
        k = o(78036);

    var x = r.createContext(null);
    var w = o(16396),
        I = o(41590),
        C = o(37558),
        E = o(57222);

    function N(e) {
      var _e$theme = e.theme,
          t = _e$theme === void 0 ? E : _e$theme,
          o = e.children,
          a = e.onClick,
          n = e.isSelected,
          s = e.areBordersVisible,
          i = e.isItemSelected,
          l = e.className,
          d = e.value,
          u = e.name;
      return r.createElement("button", {
        type: "button",
        className: c()(l, t.button, n && t.selected, s && !n && !i && t.bordersVisible),
        name: u,
        value: d,
        onClick: a
      }, o);
    }

    function z(e) {
      var t = e.value,
          o = e.onClick,
          a = _objectWithoutProperties(e, ["value", "onClick"]),
          n = (0, r.useCallback)(function (e) {
        return o(t, e);
      }, [t, o]);

      return r.createElement(N, _objectSpread({}, a, {
        value: String(t),
        onClick: n
      }));
    }

    var M = o(46148),
        D = o(85286);
    var L = {
      samePctScale: a.t(null, void 0, o(82642)),
      newPriceScale: a.t(null, void 0, o(34420)),
      newPane: a.t(null, void 0, o(67242)),
      sameScale: a.t(null, void 0, o(17547))
    };

    function T(e) {
      var t = e.fullSymbolName,
          n = e.isSelected,
          s = e.className,
          l = e.isYield,
          _ref = (0, k.useEnsuredContext)(g.SymbolSearchItemsDialogContext),
          d = _ref.isMobile,
          u = _ref.searchRef,
          m = _ref.setMode,
          _ref2 = (0, k.useEnsuredContext)(S),
          h = _ref2.compareModel,
          p = _ref2.selectedCompareOption,
          v = _ref2.setHoveredItemId,
          f = _ref2.clearInput,
          b = _ref2.allowExtendTimeScale,
          _ref3 = (0, k.useEnsuredContext)(x),
          y = _ref3.callback,
          _ = h.comparableOnSameScale({
        isYield: l
      }),
          E = _ ? M.CompareOption.SameScale : M.CompareOption.SamePctScale,
          N = _ ? L.sameScale : L.samePctScale;

      return d ? r.createElement(C.DrawerManager, null, r.createElement(I.Drawer, {
        position: "Bottom",
        onClose: T.bind(null, !1)
      }, r.createElement("div", {
        className: D.header
      }, a.t(null, void 0, o(79589))), r.createElement(w.PopupMenuItem, {
        className: D.item,
        onClick: A,
        onClickArg: E,
        label: N
      }), r.createElement(w.PopupMenuItem, {
        className: D.item,
        onClick: A,
        onClickArg: M.CompareOption.NewPriceScale,
        label: L.newPriceScale
      }), r.createElement(w.PopupMenuItem, {
        className: D.item,
        onClick: A,
        onClickArg: M.CompareOption.NewPane,
        label: L.newPane
      }))) : r.createElement("div", {
        className: c()(D.wrap, s),
        "data-name": "compare-buttons-group"
      }, r.createElement(z, {
        onClick: A,
        value: E,
        isItemSelected: Boolean(n),
        isSelected: n && p === E
      }, N), r.createElement(z, {
        onClick: A,
        value: M.CompareOption.NewPriceScale,
        isItemSelected: Boolean(n),
        isSelected: n && p === M.CompareOption.NewPriceScale
      }, L.newPriceScale), r.createElement(z, {
        onClick: A,
        value: M.CompareOption.NewPane,
        isItemSelected: Boolean(n),
        isSelected: n && p === M.CompareOption.NewPane
      }, L.newPane));

      function T(e) {
        d && y && y(), f && e && f(u, m);
      }

      function A(e, o) {
        if (o.preventDefault(), h && t && void 0 !== e) {
          (0, i.getSymbolSearchCompleteOverrideFunction)()(t).then(function (t) {
            h.applyStudy(t.symbol, e, b), v(""), T(!0);
          });
        }
      }
    }

    function A(e) {
      var t = e.isSelected,
          o = e.fullSymbolName,
          a = e.onExpandClick,
          s = e.actions,
          l = e.id,
          c = e.isOffset,
          d = e.isYield,
          _ref4 = (0, k.useEnsuredContext)(g.SymbolSearchItemsDialogContext),
          u = _ref4.isMobile,
          m = _ref4.toggleExpand,
          h = _ref4.searchSpreads,
          p = _ref4.searchRef,
          v = _ref4.setMode,
          f = _ref4.mode,
          _ref5 = (0, k.useEnsuredContext)(S),
          b = _ref5.compareModel,
          w = _ref5.hoveredItemId,
          I = _ref5.setHoveredItemId,
          C = _ref5.clearInput,
          E = _ref5.allowExtendTimeScale,
          _ref6 = (0, r.useState)(!1),
          _ref7 = _slicedToArray(_ref6, 2),
          N = _ref7[0],
          z = _ref7[1],
          D = (0, r.useRef)(null),
          L = (0, _.useAccurateHover)(D),
          A = (0, r.useMemo)(function () {
        return {
          callback: P
        };
      }, [P]),
          B = !Boolean(a) && !Boolean(s),
          j = l === w;

      return r.createElement(x.Provider, {
        value: A
      }, r.createElement(y.SymbolSearchDialogContentItem, _objectSpread({
        hideMarkedListFlag: "compare" === f
      }, e, {
        reference: D,
        onClick: function onClick(t) {
          if (Boolean(a) && l && !c) return null == t || t.preventDefault(), void m(l);
          if (!N && u) return void z(!0);
          if (h && e.onClick) return void e.onClick(t);

          if ((n.mobiletouch ? j : !N) && o) {
            (0, i.getSymbolSearchCompleteOverrideFunction)()(o).then(function (e) {
              var t = b.comparableOnSameScale({
                isYield: d
              }) ? M.CompareOption.SameScale : M.CompareOption.SamePctScale;
              b.applyStudy(e.symbol, t, E);
            }), I(""), C && C(p, v);
          }

          n.mobiletouch && !u && !j && l && I(l);
        },
        hoverComponent: function () {
          if (!B) return !1;
          if (u) return N;
          if (n.mobiletouch) return j;
          return Boolean(L || t);
        }() ? T : void 0
      })));

      function P() {
        z(!1);
      }
    }

    var B = o(15550),
        j = o(93986),
        P = o(39750),
        H = o(78724);

    function O(e) {
      var _ref8 = (0, d.ensureNotNull)((0, r.useContext)(g.SymbolSearchItemsDialogContext)),
          t = _ref8.handleListWidth,
          _ref9 = (0, d.ensureNotNull)((0, r.useContext)(S)),
          n = _ref9.compareModel,
          s = _ref9.selectedCompareIndex,
          i = _ref9.selectedItemRef,
          l = (0, h.useWatchedValueReadonly)({
        watchedValue: n.isDataReady()
      }),
          _ = (0, h.useWatchedValueReadonly)({
        watchedValue: n.studies()
      }),
          k = (0, h.useWatchedValueReadonly)({
        watchedValue: n.highlightedSymbol()
      }),
          x = (0, r.useMemo)(function () {
        return _.filter(function (e) {
          return e.checked;
        });
      }, [_]),
          w = (0, r.useMemo)(function () {
        return _.filter(function (e) {
          return !e.checked;
        });
      }, [_]);

      return (0, r.useEffect)(function () {
        return n.chartModel().dataSourceCollectionChanged().subscribe(n, n.handleSourcesChange), function () {
          return n.chartModel().dataSourceCollectionChanged().unsubscribe(n, n.handleSourcesChange);
        };
      }, [n]), r.createElement(b.Measure, {
        onResize: function onResize(_ref10) {
          var _ref11 = _slicedToArray(_ref10, 1),
              e = _ref11[0];

          t(e.contentRect.width);
        }
      }, function (e) {
        return r.createElement(m.TouchScrollContainer, {
          className: H.scrollable,
          ref: e
        }, function () {
          if (!l) return r.createElement("div", {
            className: H.spinnerWrap
          }, r.createElement(p.Spinner, null));

          if (!Boolean(x.length) && !Boolean(w.length)) {
            var _e5 = f.watchedTheme.value() === v.StdTheme.Dark ? j : B;

            return r.createElement("div", {
              className: H.emptyState
            }, r.createElement(u.Icon, {
              className: H.image,
              icon: _e5
            }), r.createElement("div", {
              className: H.text
            }, a.t(null, void 0, o(42078))));
          }

          return r.createElement(r.Fragment, null, Boolean(x.length) && r.createElement(r.Fragment, null, r.createElement("div", {
            className: H.heading
          }, a.t(null, void 0, o(46580))), x.map(function (e, t) {
            return r.createElement(y.SymbolSearchDialogContentItem, {
              "data-role": "added-symbol-item",
              className: H.item,
              key: e.id,
              id: e.id,
              shortName: e.title,
              title: e.title,
              logoId: e.logoId,
              currencyLogoId: e.currencyLogoId,
              baseCurrencyLogoId: e.baseCurrencyLogoId,
              dangerousDescriptionHTML: e.description,
              exchangeName: e.exchangeName,
              marketType: e.marketType,
              country: e.country,
              providerId: e.providerId,
              onClick: I.bind(null, e),
              isHighlighted: e.id === k,
              isSelected: C(e),
              itemRef: C(e) ? i : void 0,
              isYield: e.isYield,
              actions: r.createElement("div", {
                className: H.checkboxWrap
              }, r.createElement(N, {
                className: H.checkbox,
                onClick: I.bind(null, e),
                isSelected: C(e)
              }, r.createElement(u.Icon, {
                icon: P
              })))
            });
          })), Boolean(w.length) && r.createElement(r.Fragment, null, r.createElement("div", {
            className: H.heading
          }, a.t(null, void 0, o(57570))), w.map(function (e) {
            return r.createElement(A, {
              "data-role": "recent-symbol-item",
              className: c()(H.item, e.id === k && H.highlighted),
              key: e.id,
              id: e.id,
              shortName: e.title,
              logoId: e.logoId,
              currencyLogoId: e.currencyLogoId,
              baseCurrencyLogoId: e.baseCurrencyLogoId,
              title: e.title,
              dangerousDescriptionHTML: e.description,
              exchangeName: e.exchangeName,
              marketType: e.marketType,
              country: e.country,
              providerId: e.providerId,
              fullSymbolName: e.symbol,
              isSelected: C(e),
              itemRef: C(e) ? i : void 0,
              isYield: e.isYield
            });
          })));
        }());
      });

      function I(e, t) {
        null == t || t.preventDefault(), n.removeStudy(e);
      }

      function C(e) {
        return _.indexOf(e) === s;
      }
    }

    var R = o(56840);

    var W =
    /*#__PURE__*/
    function (_r$PureComponent) {
      _inherits(W, _r$PureComponent);

      function W(e) {
        var _this;

        _classCallCheck(this, W);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this, e)), _this._selectedItemRef = r.createRef(), _this._getContextValue = function () {
          var e = _this.props.compareModel,
              _this$state = _this.state,
              t = _this$state.selectedCompareOption,
              o = _this$state.selectedCompareIndex,
              r = _this$state.hoveredItemId,
              a = _this$state.allowExtendTimeScale;
          return {
            compareModel: e,
            selectedCompareOption: t,
            setSelectedCompareOption: _this._setSelectedCompareOption,
            hoveredItemId: r,
            setHoveredItemId: _this._setHoveredItemId,
            selectedCompareIndex: o,
            setSelectedCompareIndex: _this._setSelectedCompareIndex,
            selectedItemRef: _this._selectedItemRef,
            clearInput: _this._clearInput,
            allowExtendTimeScale: a,
            toggleAllowExtendTimeScale: _this._toggleAllowExtendTimeScale
          };
        }, _this._clearInput = function (e, t) {
          e && e.current && (e.current.value = "", t("compare"));
        }, _this._setSelectedCompareOption = function (e) {
          _this.setState({
            selectedCompareOption: e
          });
        }, _this._setHoveredItemId = function (e) {
          _this.setState({
            hoveredItemId: e
          });
        }, _this._setSelectedCompareIndex = function (e, t) {
          _this.setState({
            selectedCompareIndex: e
          }, t);
        }, _this._toggleAllowExtendTimeScale = function () {
          var e = !_this.state.allowExtendTimeScale;
          R.setValue("showAddSymbolDialog.extendCheckboxState", e), _this.setState({
            allowExtendTimeScale: e
          });
        }, _this.state = {
          selectedCompareOption: 0,
          selectedCompareIndex: -1,
          hoveredItemId: void 0,
          allowExtendTimeScale: Boolean(R.getBool("showAddSymbolDialog.extendCheckboxState"))
        };
        return _this;
      }

      _createClass(W, [{
        key: "render",
        value: function render() {
          var e = this.props.children;
          return r.createElement(S.Provider, {
            value: this._getContextValue()
          }, e);
        }
      }]);

      return W;
    }(r.PureComponent);

    var F = o(68335),
        U = o(35057),
        Y = o(10341);
    var q = Object.keys(M.CompareOption).length / 2;

    function K(e) {
      var _ref12 = (0, k.useEnsuredContext)(g.SymbolSearchItemsDialogContext),
          t = _ref12.openedItems,
          o = _ref12.searchRef,
          a = _ref12.feedItems,
          n = _ref12.selectedIndex,
          s = _ref12.toggleExpand,
          i = _ref12.onSearchComplete,
          c = _ref12.mode,
          d = _ref12.setMode,
          u = _ref12.setSelectedIndex,
          m = _ref12.isMobile,
          p = _ref12.isTablet,
          v = _ref12.onClose,
          f = _ref12.upperCaseEnabled,
          _ref13 = (0, k.useEnsuredContext)(S),
          b = _ref13.compareModel,
          y = _ref13.hoveredItemId,
          _ = _ref13.setHoveredItemId,
          x = _ref13.selectedCompareOption,
          w = _ref13.setSelectedCompareOption,
          I = _ref13.selectedCompareIndex,
          C = _ref13.setSelectedCompareIndex,
          E = _ref13.selectedItemRef,
          N = _ref13.clearInput,
          z = _ref13.allowExtendTimeScale,
          M = (0, h.useWatchedValueReadonly)({
        watchedValue: b.studies()
      }),
          D = a[n],
          L = "compare" === c,
          T = "exchange" === c;

      return (0, r.useEffect)(function () {
        y && _(""), I && C(-1);
      }, [c]), r.createElement(U.AdaptivePopupDialog, _objectSpread({}, e, {
        className: l(Y.dialog, !m && p && Y.tablet),
        onKeyDown: function onKeyDown(e) {
          var r;
          var l = (0, F.hashFromEvent)(e),
              c = L ? I : n,
              u = L ? M : a;

          switch (l) {
            case 38:
              if (e.preventDefault(), 0 === c) return;
              if (-1 === c) return void A(0);
              A(c - 1);
              break;

            case 40:
              if (e.preventDefault(), c === u.length - 1) return;
              A(c + 1);
              break;

            case 37:
              {
                var _o3 = j();

                if (_o3 && t.has(_o3)) return e.preventDefault(), void s(_o3);
                if (!x || _o3) return;
                e.preventDefault(), w(x - 1);
                break;
              }

            case 39:
              {
                var _o4 = j();

                if (_o4 && !t.has(_o4)) return e.preventDefault(), void s(_o4);
                if (x === q - 1 || _o4) return;
                e.preventDefault(), w(x + 1);
                break;
              }

            case 13:
              {
                if (L) return void function () {
                  if (-1 === I) return;
                  var e = M[I];
                  e.checked ? b.removeStudy(e) : b.applyStudy(e.symbol, x, z);
                  C(-1);
                }();

                var _t2 = j();

                if (_t2) return e.preventDefault(), void s(_t2);
                e.preventDefault();

                var _a3 = null === (r = null == o ? void 0 : o.current) || void 0 === r ? void 0 : r.value.trim();

                _a3 && N && (i([{
                  symbol: f ? _a3.toUpperCase() : _a3,
                  resolved: !1,
                  compareOption: x,
                  allowExtendTimeScale: z
                }]), N(o, d));
                break;
              }

            case 27:
              if (e.preventDefault(), T) return void d("symbolSearch");
              v();
          }
        },
        dataName: "compare-dialog",
        draggable: !0
      }));

      function A(e) {
        L ? C(e, B) : u(e);
      }

      function B() {
        var e;
        null === (e = E.current) || void 0 === e || e.scrollIntoView({
          block: "nearest"
        });
      }

      function j() {
        if (!D) return;
        var e = D.id,
            t = D.isOffset,
            o = D.onExpandClick;
        return !t && Boolean(o) && e ? e : void 0;
      }
    }

    var V = o(962),
        Z = o(32456),
        G = o(85067);

    var J =
    /*#__PURE__*/
    function (_G$DialogRenderer) {
      _inherits(J, _G$DialogRenderer);

      function J(e) {
        var _this2;

        _classCallCheck(this, J);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(J).call(this)), _this2._props = e;
        return _this2;
      }

      _createClass(J, [{
        key: "show",
        value: function show(e) {
          var _this3 = this;

          if (this.visible().value()) return;
          var t = r.createElement(Z.SymbolSearchItemsDialog, _objectSpread({}, this._props, {
            shouldReturnFocus: null == e ? void 0 : e.shouldReturnFocus,
            initialMode: this._props.initialMode || "symbolSearch",
            onClose: function onClose() {
              return _this3.hide();
            }
          }));
          V.render(t, this._container), this._setVisibility(!0);
        }
      }, {
        key: "hide",
        value: function hide() {
          var e, t;
          V.unmountComponentAtNode(this._container), this._visibility.setValue(!1), null === (t = (e = this._props).onClose) || void 0 === t || t.call(e);
        }
      }]);

      return J;
    }(G.DialogRenderer);

    var X = o(81319),
        Q = o(69654),
        $ = o(70613);

    function ee(e) {
      var _ref14 = (0, k.useEnsuredContext)(g.SymbolSearchItemsDialogContext),
          t = _ref14.searchRef,
          o = _ref14.setMode,
          _ref15 = (0, k.useEnsuredContext)($.SymbolSearchDialogBodyContext),
          a = _ref15.currentMode;

      return (0, r.useEffect)(function () {
        var e = t.current;
        if (e) return e.addEventListener("input", n), function () {
          e && e.removeEventListener("input", n);
        };
      }, []), r.createElement(Q.DialogSearch, _objectSpread({}, e));

      function n() {
        var e, r, n, s;
        t.current && a && ("compare" !== a.current || "" === (null === (r = null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || void 0 === r ? void 0 : r.trim()) ? "symbolSearch" === a.current && "" === (null === (s = null === (n = null == t ? void 0 : t.current) || void 0 === n ? void 0 : n.value) || void 0 === s ? void 0 : s.trim()) && o("compare") : o("symbolSearch"));
      }
    }

    var te = o(70673),
        oe = o(39362),
        re = o(44467);

    function ae(e) {
      var _ref16 = (0, d.ensureNotNull)((0, r.useContext)(S)),
          t = _ref16.allowExtendTimeScale,
          n = _ref16.toggleAllowExtendTimeScale;

      return r.createElement(oe.SymbolSearchDialogFooter, null, r.createElement("label", {
        "data-name": "allow-extend-time-scale-checkbox"
      }, r.createElement(te.CheckboxInput, {
        checked: t,
        value: t ? "on" : "off",
        onChange: n
      }), r.createElement("span", {
        className: re.label
      }, a.t(null, void 0, o(71046)))));
    }

    var ne = s.enabled("secondary_series_extend_time_scale");

    function se(e) {
      return new J({
        wrapper: (t = e, function (e) {
          return r.createElement(W, _objectSpread({}, e, {
            compareModel: t
          }));
        }),
        dialog: K,
        contentItem: A,
        initialScreen: O,
        searchInput: ee,
        footer: ne ? r.createElement(ae) : void 0,
        initialMode: "compare",
        dialogTitle: a.t(null, void 0, o(22320)),
        autofocus: !n.mobiletouch,
        dialogWidth: "fixed",
        onSearchComplete: function onSearchComplete(t) {
          var _t$ = t[0],
              o = _t$.compareOption,
              r = _t$.allowExtendTimeScale;

          if (void 0 !== o) {
            (0, i.getSymbolSearchCompleteOverrideFunction)()(t[0].symbol, t[0].result).then(function (t) {
              e.applyStudy(t.symbol, o, r);
            });
          }
        },
        symbolTypes: (0, X.getAvailableSymbolTypes)(),
        showSpreadActions: s.enabled("show_spread_operators") && s.enabled("compare_symbol_search_spread_operators")
      });
      var t;
    }
  },
  46148: function _(e, t, o) {
    "use strict";

    var r;
    o.d(t, {
      CompareOption: function CompareOption() {
        return r;
      }
    }), function (e) {
      e[e.SamePctScale = 0] = "SamePctScale", e[e.NewPriceScale = 1] = "NewPriceScale", e[e.NewPane = 2] = "NewPane", e[e.SameScale = 3] = "SameScale";
    }(r || (r = {}));
  },
  37558: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DrawerContext: function DrawerContext() {
        return s;
      },
      DrawerManager: function DrawerManager() {
        return n;
      }
    });
    var r = o(50959),
        a = o(99054);

    var n =
    /*#__PURE__*/
    function (_r$PureComponent2) {
      _inherits(n, _r$PureComponent2);

      function n(e) {
        var _this4;

        _classCallCheck(this, n);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, e)), _this4._isBodyFixed = !1, _this4._addDrawer = function (e) {
          _this4.setState(function (t) {
            return {
              stack: [].concat(_toConsumableArray(t.stack), [e])
            };
          });
        }, _this4._removeDrawer = function (e) {
          _this4.setState(function (t) {
            return {
              stack: t.stack.filter(function (t) {
                return t !== e;
              })
            };
          });
        }, _this4.state = {
          stack: []
        };
        return _this4;
      }

      _createClass(n, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(e, t) {
          !t.stack.length && this.state.stack.length && ((0, a.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, a.setFixedBodyState)(!1), this._isBodyFixed = !1);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.state.stack.length && this._isBodyFixed && (0, a.setFixedBodyState)(!1);
        }
      }, {
        key: "render",
        value: function render() {
          return r.createElement(s.Provider, {
            value: {
              addDrawer: this._addDrawer,
              removeDrawer: this._removeDrawer,
              currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
            }
          }, this.props.children);
        }
      }]);

      return n;
    }(r.PureComponent);

    var s = r.createContext(null);
  },
  41590: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Drawer: function Drawer() {
        return m;
      }
    });
    var r = o(50959),
        a = o(50151),
        n = o(97754),
        s = o(36174),
        i = o(65718),
        l = o(37558),
        c = o(29197),
        d = o(86656),
        u = o(66076);

    function m(e) {
      var _e$position = e.position,
          t = _e$position === void 0 ? "Bottom" : _e$position,
          o = e.onClose,
          d = e.children,
          m = e.className,
          _e$theme2 = e.theme,
          p = _e$theme2 === void 0 ? u : _e$theme2,
          v = (0, a.ensureNotNull)((0, r.useContext)(l.DrawerContext)),
          _ref17 = (0, r.useState)(function () {
        return (0, s.randomHash)();
      }),
          _ref18 = _slicedToArray(_ref17, 1),
          f = _ref18[0],
          b = (0, r.useRef)(null),
          g = (0, r.useContext)(c.CloseDelegateContext);

      return (0, r.useLayoutEffect)(function () {
        return (0, a.ensureNotNull)(b.current).focus({
          preventScroll: !0
        }), g.subscribe(v, o), v.addDrawer(f), function () {
          v.removeDrawer(f), g.unsubscribe(v, o);
        };
      }, []), r.createElement(i.Portal, null, r.createElement("div", {
        className: n(u.wrap, u["position".concat(t)])
      }, f === v.currentDrawer && r.createElement("div", {
        className: u.backdrop,
        onClick: o
      }), r.createElement(h, {
        className: n(p.drawer, u["position".concat(t)], m),
        ref: b,
        "data-name": e["data-name"]
      }, d)));
    }

    var h = (0, r.forwardRef)(function (e, t) {
      var o = e.className,
          a = _objectWithoutProperties(e, ["className"]);

      return r.createElement(d.TouchScrollContainer, _objectSpread({
        className: n(u.drawer, o),
        tabIndex: -1,
        ref: t
      }, a));
    });
  },
  70412: function _(e, t, o) {
    "use strict";

    o.d(t, {
      hoverMouseEventFilter: function hoverMouseEventFilter() {
        return n;
      },
      useAccurateHover: function useAccurateHover() {
        return s;
      },
      useHover: function useHover() {
        return a;
      }
    });
    var r = o(50959);

    function a() {
      var _ref19 = (0, r.useState)(!1),
          _ref20 = _slicedToArray(_ref19, 2),
          e = _ref20[0],
          t = _ref20[1];

      return [e, {
        onMouseOver: function onMouseOver(e) {
          n(e) && t(!0);
        },
        onMouseOut: function onMouseOut(e) {
          n(e) && t(!1);
        }
      }];
    }

    function n(e) {
      return !e.currentTarget.contains(e.relatedTarget);
    }

    function s(e) {
      var _ref21 = (0, r.useState)(!1),
          _ref22 = _slicedToArray(_ref21, 2),
          t = _ref22[0],
          o = _ref22[1];

      return (0, r.useEffect)(function () {
        var t = function t(_t3) {
          if (null === e.current) return;
          var r = e.current.contains(_t3.target);
          o(r);
        };

        return document.addEventListener("mouseover", t), function () {
          return document.removeEventListener("mouseover", t);
        };
      }, []), t;
    }
  },
  90692: function _(e, t, o) {
    "use strict";

    o.d(t, {
      MatchMedia: function MatchMedia() {
        return a;
      }
    });
    var r = o(50959);

    var a =
    /*#__PURE__*/
    function (_r$PureComponent3) {
      _inherits(a, _r$PureComponent3);

      function a(e) {
        var _this5;

        _classCallCheck(this, a);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, e)), _this5._handleChange = function () {
          _this5.forceUpdate();
        }, _this5.state = {
          query: window.matchMedia(_this5.props.rule)
        };
        return _this5;
      }

      _createClass(a, [{
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

      return a;
    }(r.PureComponent);
  },
  16396: function _(e, t, o) {
    "use strict";

    o.d(t, {
      DEFAULT_POPUP_MENU_ITEM_THEME: function DEFAULT_POPUP_MENU_ITEM_THEME() {
        return d;
      },
      PopupMenuItem: function PopupMenuItem() {
        return m;
      }
    });
    var r = o(50959),
        a = o(97754),
        n = o(59064),
        s = o(51768),
        i = o(90186),
        l = o(76068),
        c = o(71986);
    var d = c;

    function u(e) {
      e.stopPropagation();
    }

    function m(e) {
      var _a4, _a5;

      var t = e.id,
          o = e.role,
          d = e["aria-label"],
          m = e["aria-selected"],
          h = e["aria-checked"],
          p = e.className,
          v = e.title,
          f = e.labelRowClassName,
          b = e.labelClassName,
          g = e.shortcut,
          y = e.forceShowShortcuts,
          S = e.icon,
          _ = e.isActive,
          k = e.isDisabled,
          x = e.isHovered,
          w = e.appearAsDisabled,
          I = e.label,
          C = e.link,
          E = e.showToolboxOnHover,
          N = e.showToolboxOnFocus,
          z = e.target,
          M = e.rel,
          D = e.toolbox,
          L = e.reference,
          T = e.onMouseOut,
          A = e.onMouseOver,
          B = e.onKeyDown,
          _e$suppressToolboxCli = e.suppressToolboxClick,
          j = _e$suppressToolboxCli === void 0 ? !0 : _e$suppressToolboxCli,
          _e$theme3 = e.theme,
          P = _e$theme3 === void 0 ? c : _e$theme3,
          H = e.tabIndex,
          O = e.tagName,
          R = e.renderComponent,
          W = e.roundedIcon,
          F = e.iconAriaProps,
          U = e.circleLogo,
          Y = (0, i.filterDataProps)(e),
          q = (0, r.useRef)(null),
          K = (0, r.useMemo)(function () {
        return function (e) {
          function t(t) {
            var o = t.reference,
                a = _objectWithoutProperties(t, ["reference"]),
                n = null != e ? e : a.href ? "a" : "div",
                s = "a" === n ? a : function (e) {
              var t = e.download,
                  o = e.href,
                  r = e.hrefLang,
                  a = e.media,
                  n = e.ping,
                  s = e.rel,
                  i = e.target,
                  l = e.type,
                  c = e.referrerPolicy,
                  d = _objectWithoutProperties(e, ["download", "href", "hrefLang", "media", "ping", "rel", "target", "type", "referrerPolicy"]);

              return d;
            }(a);

            return r.createElement(n, _objectSpread({}, s, {
              ref: o
            }));
          }

          return t.displayName = "DefaultComponent(".concat(e, ")"), t;
        }(O);
      }, [O]),
          V = null != R ? R : K;
      return r.createElement(V, _objectSpread({}, Y, {
        id: t,
        role: o,
        "aria-label": d,
        "aria-selected": m,
        "aria-checked": h,
        className: a(p, P.item, S && P.withIcon, (_a4 = {}, _defineProperty(_a4, P.isActive, _), _defineProperty(_a4, P.isDisabled, k || w), _defineProperty(_a4, P.hovered, x), _a4)),
        title: v,
        href: C,
        target: z,
        rel: M,
        reference: function reference(e) {
          q.current = e, "function" == typeof L && L(e);
          "object" == _typeof(L) && (L.current = e);
        },
        onClick: function onClick(t) {
          var o = e.dontClosePopup,
              r = e.onClick,
              a = e.onClickArg,
              i = e.trackEventObject;
          if (k) return;
          i && (0, s.trackEvent)(i.category, i.event, i.label);
          r && r(a, t);
          o || (0, n.globalCloseMenu)();
        },
        onContextMenu: function onContextMenu(t) {
          var o = e.trackEventObject,
              r = e.trackRightClick;
          o && r && (0, s.trackEvent)(o.category, o.event, "".concat(o.label, "_rightClick"));
        },
        onMouseUp: function onMouseUp(t) {
          var o = e.trackEventObject,
              r = e.trackMouseWheelClick;

          if (1 === t.button && C && o) {
            var _e6 = o.label;
            r && (_e6 += "_mouseWheelClick"), (0, s.trackEvent)(o.category, o.event, _e6);
          }
        },
        onMouseOver: A,
        onMouseOut: T,
        onKeyDown: B,
        tabIndex: H
      }), U && r.createElement(l.CircleLogo, _objectSpread({}, F, {
        className: c["disclosure-item-circle-logo"],
        size: "xxxsmall",
        logoUrl: U.logoUrl,
        placeholderLetter: U.placeholderLetter
      })), S && r.createElement("span", {
        "aria-label": F && F["aria-label"],
        "aria-hidden": F && Boolean(F["aria-hidden"]),
        className: a(P.icon, W && c["round-icon"]),
        dangerouslySetInnerHTML: {
          __html: S
        }
      }), r.createElement("span", {
        className: a(P.labelRow, f)
      }, r.createElement("span", {
        className: a(P.label, b)
      }, I)), (void 0 !== g || y) && r.createElement("span", {
        className: P.shortcut
      }, (Z = g) && Z.split("+").join(" + ")), void 0 !== D && r.createElement("span", {
        onClick: j ? u : void 0,
        className: a(P.toolbox, (_a5 = {}, _defineProperty(_a5, P.showOnHover, E), _defineProperty(_a5, P.showOnFocus, N), _a5))
      }, D));
      var Z;
    }
  },
  29197: function _(e, t, o) {
    "use strict";

    o.d(t, {
      CloseDelegateContext: function CloseDelegateContext() {
        return n;
      }
    });
    var r = o(50959),
        a = o(59064);
    var n = r.createContext(a.globalCloseDelegate);
  },
  65718: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Portal: function Portal() {
        return l;
      },
      PortalContext: function PortalContext() {
        return c;
      }
    });
    var r = o(50959),
        a = o(962),
        n = o(36174),
        s = o(67961),
        i = o(60508);

    var l =
    /*#__PURE__*/
    function (_r$PureComponent4) {
      _inherits(l, _r$PureComponent4);

      function l() {
        var _this6;

        _classCallCheck(this, l);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments)), _this6._uuid = (0, n.guid)();
        return _this6;
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

          return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", a.createPortal(r.createElement(c.Provider, {
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
          return null === this.context ? (0, s.getRootOverlapManager)() : this.context;
        }
      }]);

      return l;
    }(r.PureComponent);

    l.contextType = i.SlotContext;
    var c = r.createContext(null);
  },
  60508: function _(e, t, o) {
    "use strict";

    o.d(t, {
      Slot: function Slot() {
        return a;
      },
      SlotContext: function SlotContext() {
        return n;
      }
    });
    var r = o(50959);

    var a =
    /*#__PURE__*/
    function (_r$Component) {
      _inherits(a, _r$Component);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
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

      return a;
    }(r.Component);

    var n = r.createContext(null);
  },
  86656: function _(e, t, o) {
    "use strict";

    o.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return i;
      }
    });
    var r = o(50959),
        a = o(59142),
        n = o(50151),
        s = o(49483);
    var i = (0, r.forwardRef)(function (e, t) {
      var o = e.children,
          n = _objectWithoutProperties(e, ["children"]),
          i = (0, r.useRef)(null);

      return (0, r.useImperativeHandle)(t, function () {
        return i.current;
      }), (0, r.useLayoutEffect)(function () {
        if (s.CheckMobile.iOS()) return null !== i.current && (0, a.disableBodyScroll)(i.current, {
          allowTouchMove: l(i)
        }), function () {
          null !== i.current && (0, a.enableBodyScroll)(i.current);
        };
      }, []), r.createElement("div", _objectSpread({
        ref: i
      }, n), o);
    });

    function l(e) {
      return function (t) {
        var o = (0, n.ensureNotNull)(e.current),
            r = document.activeElement;
        return !o.contains(t) || null !== r && o.contains(r) && r.contains(t);
      };
    }
  },
  65890: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
  },
  39750: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
  },
  93986: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" width="121" height="120"><path fill="#D1D4DC" d="M53.88 18.36a43.4 43.4 0 0 1 11.24 0 1 1 0 0 0 .26-1.98 45.42 45.42 0 0 0-11.76 0 1 1 0 1 0 .26 1.98zM43.04 21.26a1 1 0 0 0-.77-1.85A44.95 44.95 0 0 0 32.1 25.3a1 1 0 0 0 1.22 1.58 42.95 42.95 0 0 1 9.72-5.62zM75.42 19.96a1 1 0 0 1 1.3-.55A44.95 44.95 0 0 1 86.9 25.3a1 1 0 0 1-1.22 1.58 42.95 42.95 0 0 0-9.72-5.62 1 1 0 0 1-.54-1.3zM25.38 34.82a1 1 0 1 0-1.58-1.22 44.95 44.95 0 0 0-5.89 10.17 1 1 0 0 0 1.85.77 42.95 42.95 0 0 1 5.62-9.72zM16.86 55.38a1 1 0 0 0-1.98-.26 45.42 45.42 0 0 0 0 11.76 1 1 0 1 0 1.98-.26 43.4 43.4 0 0 1 0-11.24zM103 54.26a1 1 0 0 1 1.12.86 45.4 45.4 0 0 1 0 11.76 1 1 0 0 1-1.98-.26 43.37 43.37 0 0 0 0-11.24 1 1 0 0 1 .86-1.12zM19.76 77.46a1 1 0 0 0-1.85.77A44.95 44.95 0 0 0 23.8 88.4a1 1 0 0 0 1.58-1.22 42.95 42.95 0 0 1-5.62-9.72zM100.54 76.92a1 1 0 0 1 .54 1.3A44.95 44.95 0 0 1 95.2 88.4a1 1 0 0 1-1.58-1.22 42.95 42.95 0 0 0 5.62-9.72 1 1 0 0 1 1.3-.54zM33.32 95.12a1 1 0 1 0-1.22 1.58 44.94 44.94 0 0 0 10.17 5.88 1 1 0 0 0 .77-1.84 42.97 42.97 0 0 1-9.72-5.62zM87.08 95.3a1 1 0 0 1-.18 1.4 44.94 44.94 0 0 1-10.17 5.88 1 1 0 0 1-.77-1.84 42.98 42.98 0 0 0 9.72-5.62 1 1 0 0 1 1.4.18zM53.88 103.64a1 1 0 0 0-.26 1.98 45.4 45.4 0 0 0 11.76 0 1 1 0 0 0-.26-1.98 43.37 43.37 0 0 1-11.24 0zM62.81 53.17a1 1 0 0 0-.78 1.84 6.62 6.62 0 0 1 3.49 3.5 1 1 0 1 0 1.84-.78 8.62 8.62 0 0 0-4.55-4.56z"/><path fill="#D1D4DC" d="M45.5 61a14 14 0 1 1 24.28 9.5l7.92 7.92a1 1 0 0 1-1.42 1.42l-7.96-7.97A14 14 0 0 1 45.5 61zm14-12a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/><circle fill="#1976D2" cx="97.5" cy="39" r="13"/><path fill="#D1D4DC" d="M98.5 34a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-4z"/></svg>';
  },
  15550: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" width="121" height="120"><path fill="#1E222D" d="M53.88 18.36a43.4 43.4 0 0 1 11.24 0 1 1 0 0 0 .26-1.98 45.42 45.42 0 0 0-11.76 0 1 1 0 1 0 .26 1.98zM43.04 21.26a1 1 0 0 0-.77-1.85A44.95 44.95 0 0 0 32.1 25.3a1 1 0 0 0 1.22 1.58 42.95 42.95 0 0 1 9.72-5.62zM75.42 19.96a1 1 0 0 1 1.3-.55A44.95 44.95 0 0 1 86.9 25.3a1 1 0 0 1-1.22 1.58 42.95 42.95 0 0 0-9.72-5.62 1 1 0 0 1-.54-1.3zM25.38 34.82a1 1 0 1 0-1.58-1.22 44.95 44.95 0 0 0-5.89 10.17 1 1 0 0 0 1.85.77 42.95 42.95 0 0 1 5.62-9.72zM16.86 55.38a1 1 0 0 0-1.98-.26 45.42 45.42 0 0 0 0 11.76 1 1 0 1 0 1.98-.26 43.4 43.4 0 0 1 0-11.24zM103 54.26a1 1 0 0 1 1.12.86 45.4 45.4 0 0 1 0 11.76 1 1 0 0 1-1.98-.26 43.37 43.37 0 0 0 0-11.24 1 1 0 0 1 .86-1.12zM19.76 77.46a1 1 0 0 0-1.85.77A44.95 44.95 0 0 0 23.8 88.4a1 1 0 0 0 1.58-1.22 42.95 42.95 0 0 1-5.62-9.72zM100.54 76.92a1 1 0 0 1 .54 1.3A44.95 44.95 0 0 1 95.2 88.4a1 1 0 0 1-1.58-1.22 42.95 42.95 0 0 0 5.62-9.72 1 1 0 0 1 1.3-.54zM33.32 95.12a1 1 0 1 0-1.22 1.58 44.94 44.94 0 0 0 10.17 5.88 1 1 0 0 0 .77-1.84 42.97 42.97 0 0 1-9.72-5.62zM87.08 95.3a1 1 0 0 1-.18 1.4 44.94 44.94 0 0 1-10.17 5.88 1 1 0 0 1-.77-1.84 42.98 42.98 0 0 0 9.72-5.62 1 1 0 0 1 1.4.18zM53.88 103.64a1 1 0 0 0-.26 1.98 45.4 45.4 0 0 0 11.76 0 1 1 0 0 0-.26-1.98 43.37 43.37 0 0 1-11.24 0zM62.81 53.17a1 1 0 0 0-.78 1.84 6.62 6.62 0 0 1 3.49 3.5 1 1 0 1 0 1.84-.78 8.62 8.62 0 0 0-4.55-4.56z"/><path fill="#1E222D" d="M45.5 61a14 14 0 1 1 24.28 9.5l7.92 7.92a1 1 0 0 1-1.42 1.42l-7.96-7.97A14 14 0 0 1 45.5 61zm14-12a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/><circle fill="#2196F3" cx="97.5" cy="39" r="13"/><path fill="#fff" d="M98.5 34a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-4z"/></svg>';
  },
  16936: function _(e) {
    e.exports = {
      ar: ["عودة"],
      ca_ES: ["Enrere"],
      cs: "Back",
      de: ["Zurück"],
      el: "Back",
      en: "Back",
      es: ["Atrás"],
      fa: "Back",
      fr: ["Retour"],
      he_IL: ["חזור"],
      hu_HU: "Back",
      id_ID: ["Kembali"],
      it: ["Indietro"],
      ja: ["戻る"],
      ko: ["뒤로"],
      ms_MY: ["Kembali"],
      nl_NL: "Back",
      pl: ["Cofnij"],
      pt: ["Voltar"],
      ro: "Back",
      ru: ["Назад"],
      sv: ["Tillbaka"],
      th: ["กลับไป"],
      tr: ["Geri"],
      vi: ["Quay lại"],
      zh: ["返回"],
      zh_TW: ["返回"]
    };
  },
  9898: function _(e) {
    e.exports = {
      ar: ["حق"],
      ca_ES: ["Right (dret de subscripció)"],
      cs: "Right",
      de: ["Rechter"],
      el: "Right",
      en: "Right",
      es: ["Right (derecho de suscripción)"],
      fa: "Right",
      fr: ["De droite"],
      he_IL: ["זכות Right"],
      hu_HU: "Right",
      id_ID: ["Kanan"],
      it: ["Diritto"],
      ja: ["ストックオプション"],
      ko: ["라이트"],
      ms_MY: ["Benar"],
      nl_NL: "Right",
      pl: ["Prawo do udostępniania"],
      pt: ["Direita"],
      ro: "Right",
      ru: ["Право на акцию"],
      sv: ["Höger"],
      th: ["สิทธิ"],
      tr: ["Sağ"],
      vi: ["Phải"],
      zh: ["认股权"],
      zh_TW: ["認股權"]
    };
  },
  22320: function _(e) {
    e.exports = {
      ar: ["مقارنة الرمز"],
      ca_ES: ["Compara el símbol"],
      cs: "Compare symbol",
      de: ["Symbol vergleichen"],
      el: "Compare symbol",
      en: "Compare symbol",
      es: ["Comparar el símbolo"],
      fa: "Compare symbol",
      fr: ["Comparer le symbole"],
      he_IL: ["השווה סימול"],
      hu_HU: "Compare symbol",
      id_ID: ["Bandingkan simbol"],
      it: ["Confronta simbolo"],
      ja: ["シンボルを比較"],
      ko: ["심볼 견주기"],
      ms_MY: ["Bandingkan simbol"],
      nl_NL: "Compare symbol",
      pl: ["Porównaj symbol"],
      pt: ["Comparar símbolos"],
      ro: "Compare symbol",
      ru: ["Сравнить символ"],
      sv: ["Jämför symbol"],
      th: ["เปรียบเทียบสัญลักษณ์"],
      tr: ["Sembolü karşılaştır"],
      vi: ["So sánh mã"],
      zh: ["比较商品"],
      zh_TW: ["比較商品"]
    };
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
  79589: function _(e) {
    e.exports = {
      ar: ["إضافة إلى"],
      ca_ES: ["Afegeix a"],
      cs: "Add to",
      de: ["hinzufügen zu"],
      el: "Add to",
      en: "Add to",
      es: ["Añadir a"],
      fa: "Add to",
      fr: ["Ajouter à"],
      he_IL: ["הוסף ל"],
      hu_HU: "Add to",
      id_ID: ["Tambahkan ke"],
      it: ["Aggiungi a"],
      ja: ["追加先"],
      ko: ["~에 넣기:"],
      ms_MY: ["Tambah kepada"],
      nl_NL: "Add to",
      pl: ["Dodaj do"],
      pt: ["Adicionar"],
      ro: "Add to",
      ru: ["Добавить"],
      sv: ["Lägg till"],
      th: ["เพิ่มไปที่"],
      tr: ["Buna ekle:"],
      vi: ["Thêm vào"],
      zh: ["添加到"],
      zh_TW: ["增加到"]
    };
  },
  46580: function _(e) {
    e.exports = {
      ar: ["الرموز المضافة"],
      ca_ES: ["Símbols afegits"],
      cs: "Added symbols",
      de: ["Hinzugefügte Symbole"],
      el: "Added symbols",
      en: "Added symbols",
      es: ["Símbolos añadidos"],
      fa: "Added symbols",
      fr: ["Symboles ajoutés"],
      he_IL: ["נוספו סימולים"],
      hu_HU: "Added symbols",
      id_ID: ["Simbol yang ditambahkan"],
      it: ["Simboli aggiunti"],
      ja: ["追加されているシンボル"],
      ko: ["더해진 심볼들"],
      ms_MY: ["Tambah simbol-simbol"],
      nl_NL: "Added symbols",
      pl: ["Dodane symbole"],
      pt: ["Símbolos adicionados"],
      ro: "Added symbols",
      ru: ["Добавленные инструменты"],
      sv: ["Tillagda symboler"],
      th: ["สัญลักษณ์ที่ถูกเพิ่มมา"],
      tr: ["Semboller eklendi"],
      vi: ["Các mã đã thêm"],
      zh: ["添加商品"],
      zh_TW: ["增加商品"]
    };
  },
  64498: function _(e) {
    e.exports = {
      ar: ["كل المصادر"],
      ca_ES: ["Totes les fonts"],
      cs: "All sources",
      de: ["Alle Quellen"],
      el: "All sources",
      en: "All sources",
      es: ["Todas las fuentes"],
      fa: "All sources",
      fr: ["Toutes les sources"],
      he_IL: ["כל המקורות"],
      hu_HU: "All sources",
      id_ID: ["Seluruh sumber"],
      it: ["Tutte le fonti"],
      ja: ["すべての提供元"],
      ko: ["모든 자료"],
      ms_MY: ["Kesemua sumber"],
      nl_NL: "All sources",
      pl: ["Wszystkie źródła"],
      pt: ["Todas as fontes"],
      ro: "All sources",
      ru: ["Все источники"],
      sv: ["Samtliga källor"],
      th: ["แหล่งที่มาทั้งหมด"],
      tr: ["Tüm kaynaklar"],
      vi: ["Tất cả các nguồn"],
      zh: ["全部来源"],
      zh_TW: ["全部來源"]
    };
  },
  71046: function _(e) {
    e.exports = {
      ar: ["السماح بتمديد النطاق الزمني"],
      ca_ES: ["Permet ampliar l'escala de temps"],
      cs: "Allow extend time scale",
      de: ["Zeitskala verlängern lassen"],
      el: "Allow extend time scale",
      en: "Allow extend time scale",
      es: ["Permitir ampliar la escala de tiempo"],
      fa: "Allow extend time scale",
      fr: ["Permettre d'étendre l'échelle de temps"],
      he_IL: ["אפשר להאריך את סולם הזמן"],
      hu_HU: "Allow extend time scale",
      id_ID: ["Izinkan ekstensi skala waktu"],
      it: ["Permetti estensione scala temporale"],
      ja: ["時間軸の延長を許可"],
      ko: ["타임 스케일 확장을 허용합니다"],
      ms_MY: ["Benarkan pemanjangan skala masa"],
      nl_NL: "Allow extend time scale",
      pl: ["Zezwól na rozszerzenie osi czasu"],
      pt: ["Prolongar a escala de tempo"],
      ro: "Allow extend time scale",
      ru: ["Разрешить продолжение временной шкалы"],
      sv: ["Tillåt att förlängd tidsskala"],
      th: ["อนุญาตให้ขยายมาตราส่วนเวลา"],
      tr: ["Zaman ölçeğini uzatmaya izin ver"],
      vi: ["Cho phép mở rộng quy mô thời gian"],
      zh: ["允许延长时间坐标"],
      zh_TW: ["允許延長時間刻度"]
    };
  },
  79852: function _(e) {
    e.exports = {
      ar: ["سند"],
      ca_ES: ["Bo"],
      cs: "Bond",
      de: ["Anleihe"],
      el: "Bond",
      en: "Bond",
      es: ["Bono"],
      fa: "Bond",
      fr: ["Obligation"],
      he_IL: ["אגרת חוב"],
      hu_HU: "Bond",
      id_ID: ["Surat hutang"],
      it: ["Obbligazione"],
      ja: ["債券"],
      ko: ["채권"],
      ms_MY: ["Bon"],
      nl_NL: "Bond",
      pl: ["Obligacja"],
      pt: ["Título"],
      ro: "Bond",
      ru: ["Облигации"],
      sv: ["Obligation"],
      th: ["พันธบัตร"],
      tr: ["Tahvil"],
      vi: ["Trái phiếu"],
      zh: ["债券"],
      zh_TW: ["債券"]
    };
  },
  29601: function _(e) {
    e.exports = {
      ar: ["الوصف"],
      ca_ES: ["Descripció"],
      cs: ["Popis"],
      de: ["Beschreibung"],
      el: "Description",
      en: "Description",
      es: ["Descripción"],
      fa: ["شرح"],
      fr: "Description",
      he_IL: ["תיאור"],
      hu_HU: ["Leírás"],
      id_ID: ["Deskripsi"],
      it: ["Descrizione"],
      ja: ["詳細"],
      ko: ["설명"],
      ms_MY: ["Huraian"],
      nl_NL: ["Beschrijving"],
      pl: ["Opis"],
      pt: ["Descrição"],
      ro: "Description",
      ru: ["Описание"],
      sv: ["Beskrivning"],
      th: ["คำอธิบาย"],
      tr: ["Açıklama"],
      vi: ["Mô tả"],
      zh: ["描述"],
      zh_TW: ["描述"]
    };
  },
  29673: function _(e) {
    e.exports = {
      ar: ["لا توجد أسواق تطابق المعايير التي عينتها"],
      ca_ES: ["No hi ha mercats de valors que coincideixin amb els vostres criteris."],
      cs: "No exchanges match your criteria",
      de: ["Keine Börsen entsprechen Ihren Kriterien"],
      el: "No exchanges match your criteria",
      en: "No exchanges match your criteria",
      es: ["No hay mercados de valores que coincidan con sus criterios."],
      fa: "No exchanges match your criteria",
      fr: ["Aucun échange ne correspond à vos critères"],
      he_IL: ["אין בורסות התואמות את הקריטריונים שלך"],
      hu_HU: "No exchanges match your criteria",
      id_ID: ["Tidak ada bursa yang sesuai dengan kriteria anda"],
      it: ["Nessuna borsa corrisponde ai tuoi criteri"],
      ja: ["条件に合致する取引所はありません"],
      ko: ["조건에 맞는 익스체인지가 없음"],
      ms_MY: ["Tiada bursa saham yang memenuhi kriteria anda."],
      nl_NL: "No exchanges match your criteria",
      pl: ["Brak giełd spełniających Twoje kryteria"],
      pt: ["Nenhuma exchange corresponde ao seu critério"],
      ro: "No exchanges match your criteria",
      ru: ["Нет подходящих бирж"],
      sv: ["Inga börser matchar dina kriterier"],
      th: ["ไม่มีตลาดแลกเปลี่ยนใดๆ ตรงตามเงื่อนไขของคุณ"],
      tr: ["Kriterlerinize uygun borsa yok"],
      vi: ["Không có sàn giao dịch nào khớp với yêu cầu của bạn"],
      zh: ["没有交易所符合您的条件"],
      zh_TW: ["沒有交易所符合您的條件"]
    };
  },
  42078: function _(e) {
    e.exports = {
      ar: ["لا توجد رموز هنا حالياً — قم بإضافة الرموز"],
      ca_ES: ["Encara no hi ha símbols aquí, en voleu afegir algun?"],
      cs: "No symbols here yet — why not add some?",
      de: ["Hier gibt es noch keine Symbole - warum nicht welche hinzufügen?"],
      el: "No symbols here yet — why not add some?",
      en: "No symbols here yet — why not add some?",
      es: ["Todavía no hay símbolos aquí, ¿por qué no añadir algunos?"],
      fa: "No symbols here yet — why not add some?",
      fr: ["Pas encore de symboles ici - pourquoi ne pas en ajouter ?"],
      he_IL: ["עדיין אין כאן סימולים - למה לא להוסיף כמה?"],
      hu_HU: "No symbols here yet — why not add some?",
      id_ID: ["Belum ada simbol di sini — mengapa tidak menambahkan beberapa?"],
      it: ["Non ci sono simboli qui. Perchè non aggiungerne alcuni?"],
      ja: ["まだシンボルがありません — 追加してみませんか？"],
      ko: ["아직 종목이 없습니다. 종목을 추가하시겠습니까?"],
      ms_MY: ["Belum ada simbol di sini - mengapa tidak menambahkannya?"],
      nl_NL: "No symbols here yet — why not add some?",
      pl: ["Nie ma tu jeszcze żadnych symboli — chcesz coś dodać?"],
      pt: ["Não há símbolos aqui - por que não acrescentar alguns?"],
      ro: "No symbols here yet — why not add some?",
      ru: ["Здесь еще нет инструментов — почему бы их не добавить?"],
      sv: ["Inga symboler här — ska du ta och lägga till några?"],
      th: ["ยังไม่มีสัญลักษณ์ - ทำไมไม่เพิ่มมันบ้างล่ะ?"],
      tr: ["Burada henüz sembol yok - neden biraz eklemiyorsunuz?"],
      vi: ["Không có mã giao dịch nào ở đây - tại sao không thêm một số?"],
      zh: ["这里还没有商品 — 为什么不添加一些呢？"],
      zh_TW: ["這裡還沒有商品 — 為什麼不增加一些呢？"]
    };
  },
  41379: function _(e) {
    e.exports = {
      ar: ["لا توجد رموز تطابق معاييرك"],
      ca_ES: ["Cap símbol coincideix amb els vostres criteris"],
      cs: "No symbols match your criteria",
      de: ["Für Ihre Kriterien gibt es keine übereinstimmenden Symbole"],
      el: "No symbols match your criteria",
      en: "No symbols match your criteria",
      es: ["Ningún símbolo coincide con sus criterios"],
      fa: "No symbols match your criteria",
      fr: ["Aucun symbole ne correspond à vos critères"],
      he_IL: ["אין סימולים תואמים את הקריטריונים שלך"],
      hu_HU: "No symbols match your criteria",
      id_ID: ["Tidak ada Simbol yang sesuai dengan kriteria anda"],
      it: ["Nessun simbolo corrisponde ai criteri"],
      ja: ["条件に合致するシンボルはありません"],
      ko: ["조건에 맞는 심볼이 없음"],
      ms_MY: ["Tiada Simbol yang menepati kriteria anda"],
      nl_NL: "No symbols match your criteria",
      pl: ["Brak symboli spełniających Twoje kryteria"],
      pt: ["Nenhum símbolo compatível com seu critério"],
      ro: "No symbols match your criteria",
      ru: ["Нет подходящих символов"],
      sv: ["Inga symboler matchar dina kriterier"],
      th: ["ไม่มีสัญลักษณ์ที่ตรงกับการค้นหาของคุณ"],
      tr: ["Kriterlerinize uygun sembol yok"],
      vi: ["Không có mã giao dịch nào khớp với tiêu chí của bạn"],
      zh: ["没有代码符合您的条件"],
      zh_TW: ["沒有商品符合您的條件"]
    };
  },
  67242: function _(e) {
    e.exports = {
      ar: ["جزء جديد"],
      ca_ES: ["Nou quadre"],
      cs: "New pane",
      de: ["Neuer Bereich"],
      el: "New pane",
      en: "New pane",
      es: ["Nuevo panel"],
      fa: "New pane",
      fr: ["Nouveau volet"],
      he_IL: ["חלונית חדשה"],
      hu_HU: "New pane",
      id_ID: ["Panel baru"],
      it: ["Nuovo pannello"],
      ja: ["新規ペイン"],
      ko: ["새 페인"],
      ms_MY: ["Panel baru"],
      nl_NL: "New pane",
      pl: ["Nowy panel"],
      pt: ["Novo Painel"],
      ro: "New pane",
      ru: ["Новая панель"],
      sv: ["Ny ruta"],
      th: ["หน้าต่างใหม่"],
      tr: ["Yeni bölme"],
      vi: ["Ngăn mới"],
      zh: ["新窗格"],
      zh_TW: ["新窗格"]
    };
  },
  34420: function _(e) {
    e.exports = {
      ar: ["مقياس سعر جديد"],
      ca_ES: ["Nova escala de preus"],
      cs: "New price scale",
      de: ["Neue Preisskala"],
      el: "New price scale",
      en: "New price scale",
      es: ["Nueva escala de precios"],
      fa: "New price scale",
      fr: ["Nouvelle échelle de prix"],
      he_IL: ["סולם מחירים חדש"],
      hu_HU: "New price scale",
      id_ID: ["Skala harga baru"],
      it: ["Nuova scala di prezzo"],
      ja: ["新しい価格スケール"],
      ko: ["새 프라이스 스케일"],
      ms_MY: ["Skala harga baru"],
      nl_NL: "New price scale",
      pl: ["Nowa skala cen"],
      pt: ["Nova escala de preço"],
      ro: "New price scale",
      ru: ["Новая ценовая шкала"],
      sv: ["Ny prisskala"],
      th: ["สเกลราคาใหม่"],
      tr: ["Yeni fiyat ölçeği"],
      vi: ["Khung giá mới"],
      zh: ["新价格坐标"],
      zh_TW: ["新的價格刻度"]
    };
  },
  19724: function _(e) {
    e.exports = {
      ar: ["مصادر"],
      ca_ES: ["Fonts"],
      cs: "Sources",
      de: ["Quellen"],
      el: "Sources",
      en: "Sources",
      es: ["Fuentes"],
      fa: "Sources",
      fr: "Sources",
      he_IL: ["מקורות"],
      hu_HU: "Sources",
      id_ID: ["Sumber"],
      it: ["Fonti"],
      ja: ["情報源"],
      ko: ["자료"],
      ms_MY: ["Sumber-sumber"],
      nl_NL: "Sources",
      pl: ["Źródła"],
      pt: ["Fontes"],
      ro: "Sources",
      ru: ["Источники"],
      sv: ["Källor"],
      th: ["แหล่งที่มา"],
      tr: ["Kaynak"],
      vi: ["Nguồn"],
      zh: ["来源"],
      zh_TW: ["來源"]
    };
  },
  82642: function _(e) {
    e.exports = {
      ar: ["نفس مقياس %"],
      ca_ES: ["Mateixa escala de %"],
      cs: "Same % scale",
      de: ["Selbe % Skala"],
      el: "Same % scale",
      en: "Same % scale",
      es: ["Misma escala de %"],
      fa: "Same % scale",
      fr: ["Même échelle %"],
      he_IL: ["אותו סולם%"],
      hu_HU: "Same % scale",
      id_ID: ["% skala yang sama"],
      it: ["Stessa scala %"],
      ja: ["同じ％スケール"],
      ko: ["같은 % 스케일"],
      ms_MY: ["Skala % yang sama"],
      nl_NL: "Same % scale",
      pl: ["Ta sama skala %"],
      pt: ["Mesma escala %"],
      ro: "Same % scale",
      ru: ["Та же % шкала"],
      sv: ["Samma %-skala"],
      th: ["เหมือน % สเกล"],
      tr: ["Aynı % ölçek"],
      vi: ["Cùng % quy mô"],
      zh: ["相同%坐标"],
      zh_TW: ["相同%刻度"]
    };
  },
  17547: function _(e) {
    e.exports = {
      ar: ["نفس المقياس"],
      ca_ES: ["Mateixa escala"],
      cs: "Same scale",
      de: ["Selbe Skala"],
      el: "Same scale",
      en: "Same scale",
      es: ["Misma escala"],
      fa: "Same scale",
      fr: ["Même échelle"],
      he_IL: ["אותו קנה מידה"],
      hu_HU: "Same scale",
      id_ID: ["Skala yang sama"],
      it: ["Stessa scala"],
      ja: ["同じスケール"],
      ko: ["같은 스케일"],
      ms_MY: ["Skala sama"],
      nl_NL: "Same scale",
      pl: ["Ta sama skala"],
      pt: ["Mesma escala"],
      ro: "Same scale",
      ru: ["Та же шкала"],
      sv: ["Samma skala"],
      th: ["เหมือน % สเกล"],
      tr: ["Aynı ölçek"],
      vi: ["Thang tương tự"],
      zh: ["相同坐标"],
      zh_TW: ["相同的刻度"]
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
  13269: function _(e) {
    e.exports = {
      ar: ["اختر مصدراً"],
      ca_ES: ["Selecciona font"],
      cs: "Select source",
      de: ["Quelle wählen"],
      el: "Select source",
      en: "Select source",
      es: ["Seleccionar fuente"],
      fa: "Select source",
      fr: ["Sélectionner la source"],
      he_IL: ["בחר מקור"],
      hu_HU: "Select source",
      id_ID: ["Pilih sumber"],
      it: ["Seleziona fonte"],
      ja: ["情報源を選択"],
      ko: ["자료 선택"],
      ms_MY: ["Pilih sumber"],
      nl_NL: "Select source",
      pl: ["Wybierz źródło"],
      pt: ["Selecionar fonte"],
      ro: "Select source",
      ru: ["Выбрать источник"],
      sv: ["Välj källa"],
      th: ["เลือกแหล่งที่มา"],
      tr: ["Kaynak seç"],
      vi: ["Chọn nguồn"],
      zh: ["选择来源"],
      zh_TW: ["選擇來源"]
    };
  },
  89053: function _(e) {
    e.exports = {
      ar: ["رمز"],
      ca_ES: ["Símbol"],
      cs: "Symbol",
      de: "Symbol",
      el: ["Σύμβολο"],
      en: "Symbol",
      es: ["Símbolo"],
      fa: ["نماد"],
      fr: ["Symbole"],
      he_IL: ["סימול"],
      hu_HU: ["Szimbólum"],
      id_ID: ["Simbol"],
      it: ["Simbolo"],
      ja: ["シンボル"],
      ko: ["심볼"],
      ms_MY: ["Simbol"],
      nl_NL: ["Symbool"],
      pl: "Symbol",
      pt: ["Símbolo"],
      ro: "Symbol",
      ru: ["Инструмент"],
      sv: "Symbol",
      th: ["สัญลักษณ์"],
      tr: ["Sembol"],
      vi: ["Mã"],
      zh: ["商品代码"],
      zh_TW: ["商品代碼"]
    };
  },
  48490: function _(e) {
    e.exports = {
      ar: ["الرمز والوصف"],
      ca_ES: ["Símbol i descripció"],
      cs: "Symbol & description",
      de: ["Symbol & Beschreibung"],
      el: "Symbol & description",
      en: "Symbol & description",
      es: ["Símbolo y descripción"],
      fa: "Symbol & description",
      fr: ["Symbole & description"],
      he_IL: ["סימול ותיאור"],
      hu_HU: "Symbol & description",
      id_ID: ["Simbol & deskripsi"],
      it: ["Simbolo e descrizione"],
      ja: ["シンボル & 詳細"],
      ko: ["심볼 & 설명"],
      ms_MY: ["Simbol & penjelasan"],
      nl_NL: "Symbol & description",
      pl: ["Symbol i opis"],
      pt: ["Símbolo & descrição"],
      ro: "Symbol & description",
      ru: ["Инструмент и описание"],
      sv: ["Symbol & beskrivning"],
      th: ["สัญลักษณ์และคำอธิบาย"],
      tr: ["Sembol ve açıklama"],
      vi: ["Mã giao dịch & mô tả"],
      zh: ["商品和描述"],
      zh_TW: ["商品&描述"]
    };
  },
  75905: function _(e) {
    e.exports = {
      ar: ["بحث عن الرموز"],
      ca_ES: ["Cerca de símbols"],
      cs: "Symbol Search",
      de: ["Symbol Suche"],
      el: "Symbol Search",
      en: "Symbol Search",
      es: ["Búsqueda de símbolos"],
      fa: "Symbol Search",
      fr: ["Recherche de symbole"],
      he_IL: ["חיפוש סימולים"],
      hu_HU: "Symbol Search",
      id_ID: ["Pencarian Simbol"],
      it: ["Ricerca simbolo"],
      ja: ["シンボル検索"],
      ko: ["심볼 찾기"],
      ms_MY: ["Cari simbol"],
      nl_NL: "Symbol Search",
      pl: ["Wyszukiwanie symboli"],
      pt: ["Pesquisa de Símbolo"],
      ro: "Symbol Search",
      ru: ["Поиск инструментов"],
      sv: ["Symbolsök"],
      th: ["ค้นหาตัวย่อ"],
      tr: ["Sembol Arama"],
      vi: ["Tìm kiếm Mã giao dịch"],
      zh: ["商品代码搜索"],
      zh_TW: ["商品搜尋"]
    };
  },
  57570: function _(e) {
    e.exports = {
      ar: ["الرموز الحديثة"],
      ca_ES: ["Símbols recents"],
      cs: "Recent symbols",
      de: ["Letzte Symbole"],
      el: "Recent symbols",
      en: "Recent symbols",
      es: ["Símbolos recientes"],
      fa: "Recent symbols",
      fr: ["Symboles récents"],
      he_IL: ["סימולים אחרונים"],
      hu_HU: "Recent symbols",
      id_ID: ["Simbol terbaru"],
      it: ["Simboli recenti"],
      ja: ["最近のシンボル"],
      ko: ["최근 심볼들"],
      ms_MY: ["Simbol-simbol terbaru"],
      nl_NL: "Recent symbols",
      pl: ["Niedawne symbole"],
      pt: ["Símbolos recentes"],
      ro: "Recent symbols",
      ru: ["Недавние инструменты"],
      sv: ["Senaste symboler"],
      th: ["สัญลักษณ์ล่าสุด"],
      tr: ["Son semboller"],
      vi: ["Các mã gần đây"],
      zh: ["最近的商品"],
      zh_TW: ["最近的商品"]
    };
  },
  12629: function _(e) {
    e.exports = {
      ar: ["السلع"],
      ca_ES: "commodity",
      cs: "commodity",
      de: ["Rohstoff"],
      el: "commodity",
      en: "commodity",
      es: ["materia prima"],
      fa: "commodity",
      fr: ["produit de base"],
      he_IL: ["סחורה"],
      hu_HU: "commodity",
      id_ID: ["komiditas"],
      it: ["materia prima"],
      ja: ["コモディティ"],
      ko: ["상품"],
      ms_MY: ["komoditi"],
      nl_NL: "commodity",
      pl: ["towar"],
      pt: "commodity",
      ro: "commodity",
      ru: ["товары"],
      sv: ["Råvaror"],
      th: ["คอมมอดิตี้"],
      tr: ["Emtia"],
      vi: ["hàng hóa"],
      zh: ["商品"],
      zh_TW: ["商品"]
    };
  },
  87592: function _(e) {
    e.exports = {
      ar: ["عقود الفروقات"],
      ca_ES: "cfd",
      cs: "cfd",
      de: "cfd",
      el: "cfd",
      en: "cfd",
      es: "cfd",
      fa: "cfd",
      fr: "cfd",
      he_IL: ["חוזה הפרשים cfd"],
      hu_HU: "cfd",
      id_ID: "cfd",
      it: "cfd",
      ja: ["CFD"],
      ko: ["씨에프디"],
      ms_MY: "cfd",
      nl_NL: "cfd",
      pl: "cfd",
      pt: "cfd",
      ro: "cfd",
      ru: "cfd",
      sv: "cfd",
      th: "cfd",
      tr: "cfd",
      vi: "cfd",
      zh: ["差价合约"],
      zh_TW: "cfd"
    };
  },
  8448: function _(e) {
    e.exports = {
      ar: ["العملات الرقمية"],
      ca_ES: ["cripto"],
      cs: "crypto",
      de: "crypto",
      el: "crypto",
      en: "crypto",
      es: ["cripto"],
      fa: "crypto",
      fr: "crypto",
      he_IL: ["קריפטו"],
      hu_HU: ["kripto"],
      id_ID: "crypto",
      it: ["cripto"],
      ja: ["暗号"],
      ko: ["크립토"],
      ms_MY: ["kripto"],
      nl_NL: "crypto",
      pl: ["krypto"],
      pt: ["Cripto"],
      ro: "crypto",
      ru: ["криптовалюты"],
      sv: ["krypto"],
      th: ["คริปโต"],
      tr: ["kripto"],
      vi: ["tiền điện tử"],
      zh: ["加密"],
      zh_TW: "crypto"
    };
  },
  67245: function _(e) {
    e.exports = {
      ar: ["إيصال إيداع"],
      ca_ES: "dr",
      cs: "dr",
      de: "dr",
      el: "dr",
      en: "dr",
      es: "dr",
      fa: "dr",
      fr: "dr",
      he_IL: "dr",
      hu_HU: "dr",
      id_ID: "dr",
      it: "dr",
      ja: ["預託証券"],
      ko: "dr",
      ms_MY: "dr",
      nl_NL: "dr",
      pl: ["Potwierdzenie wpłaty"],
      pt: "dr",
      ro: "dr",
      ru: ["Депоз. расписки"],
      sv: "dr",
      th: "dr",
      tr: "dr",
      vi: "dr",
      zh: "dr",
      zh_TW: "dr"
    };
  },
  88720: function _(e) {
    e.exports = {
      ar: ["اقتصاد"],
      ca_ES: ["economia"],
      cs: "economy",
      de: ["Wirtschaft"],
      el: "economy",
      en: "economy",
      es: ["economía"],
      fa: "economy",
      fr: ["économie"],
      he_IL: ["כַּלְכָּלָה"],
      hu_HU: "economy",
      id_ID: ["ekonomi"],
      it: ["economia"],
      ja: ["経済指標"],
      ko: ["경제"],
      ms_MY: ["ekonomi"],
      nl_NL: "economy",
      pl: ["gospodarka"],
      pt: ["economia"],
      ro: "economy",
      ru: ["экономические данные"],
      sv: ["ekonomi"],
      th: ["เศรษฐกิจ"],
      tr: ["ekonomi"],
      vi: ["kinh tế"],
      zh: ["经济"],
      zh_TW: ["經濟"]
    };
  },
  39512: function _(e) {
    e.exports = {
      ar: ["فوركس"],
      ca_ES: ["Forex"],
      cs: "forex",
      de: ["Devisen"],
      el: "forex",
      en: "forex",
      es: ["Forex"],
      fa: "forex",
      fr: ["Forex"],
      he_IL: ['מט"ח'],
      hu_HU: "forex",
      id_ID: "forex",
      it: "forex",
      ja: ["FX"],
      ko: ["외환"],
      ms_MY: "forex",
      nl_NL: "forex",
      pl: "forex",
      pt: "forex",
      ro: "forex",
      ru: ["форекс"],
      sv: ["valutor"],
      th: ["ฟอเร็กซ์"],
      tr: ["döviz"],
      vi: "forex",
      zh: ["外汇"],
      zh_TW: ["外匯"]
    };
  },
  81859: function _(e) {
    e.exports = {
      ar: ["العقود الآجلة"],
      ca_ES: ["futurs"],
      cs: "futures",
      de: ["Futures"],
      el: "futures",
      en: "futures",
      es: ["futuros"],
      fa: "futures",
      fr: "futures",
      he_IL: ["חוזים עתידיים"],
      hu_HU: "futures",
      id_ID: ["kontrak berjangka"],
      it: ["future"],
      ja: ["先物"],
      ko: ["퓨쳐스"],
      ms_MY: ["pasaran hadapan"],
      nl_NL: "futures",
      pl: ["Kontrakty terminowe"],
      pt: ["futuros"],
      ro: "futures",
      ru: ["фьючерсы"],
      sv: ["terminer"],
      th: ["ฟิวเจอร์ส"],
      tr: ["vadeli"],
      vi: ["hợp đồng tương lai"],
      zh: ["期货"],
      zh_TW: ["期貨"]
    };
  },
  12754: function _(e) {
    e.exports = {
      ar: ["مؤشر"],
      ca_ES: ["índex"],
      cs: "index",
      de: ["Index"],
      el: "index",
      en: "index",
      es: ["índice"],
      fa: "index",
      fr: ["indice"],
      he_IL: ["מדד"],
      hu_HU: "index",
      id_ID: ["indeks"],
      it: ["indice"],
      ja: ["指数"],
      ko: ["지수"],
      ms_MY: ["indeks"],
      nl_NL: "index",
      pl: ["indeks"],
      pt: ["índice"],
      ro: "index",
      ru: ["индексы"],
      sv: "index",
      th: ["ดัชนี"],
      tr: ["endeks"],
      vi: ["chỉ số"],
      zh: ["指数"],
      zh_TW: ["指數"]
    };
  },
  60804: function _(e) {
    e.exports = {
      ar: ["المؤشرات"],
      ca_ES: "indices",
      cs: "indices",
      de: ["Indizes"],
      el: "indices",
      en: "indices",
      es: ["índices"],
      fa: "indices",
      fr: "indices",
      he_IL: ["מדדים"],
      hu_HU: "indices",
      id_ID: ["indeks"],
      it: ["Indici"],
      ja: ["指数"],
      ko: ["지수"],
      ms_MY: ["indeks"],
      nl_NL: ["indexen"],
      pl: ["indeksy"],
      pt: ["índices"],
      ro: "indices",
      ru: ["индексы"],
      sv: ["index"],
      th: ["ดัชนี"],
      tr: ["endeks"],
      vi: ["các chỉ báo"],
      zh: ["指数"],
      zh_TW: ["指數"]
    };
  },
  36931: function _(e) {
    e.exports = {
      ar: ["سهم"],
      ca_ES: ["accions"],
      cs: "stock",
      de: ["Aktie"],
      el: "stock",
      en: "stock",
      es: ["acciones"],
      fa: "stock",
      fr: "stock",
      he_IL: ["מניה"],
      hu_HU: "stock",
      id_ID: ["saham"],
      it: ["azione"],
      ja: ["株式"],
      ko: ["스탁"],
      ms_MY: ["saham"],
      nl_NL: "stock",
      pl: ["akcja"],
      pt: ["ação"],
      ro: "stock",
      ru: ["акция"],
      sv: ["aktier"],
      th: ["หุ้น"],
      tr: ["hisse"],
      vi: ["cổ phiếu"],
      zh: ["股票"],
      zh_TW: ["股票"]
    };
  }
}]);