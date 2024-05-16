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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[9795, 3016, 3179], {
  38446: function _(e) {
    e.exports = {
      wrapper: "wrapper-VB9J73Gf",
      focused: "focused-VB9J73Gf",
      readonly: "readonly-VB9J73Gf",
      disabled: "disabled-VB9J73Gf",
      "size-small": "size-small-VB9J73Gf",
      "size-medium": "size-medium-VB9J73Gf",
      "size-large": "size-large-VB9J73Gf",
      "font-size-small": "font-size-small-VB9J73Gf",
      "font-size-medium": "font-size-medium-VB9J73Gf",
      "font-size-large": "font-size-large-VB9J73Gf",
      "border-none": "border-none-VB9J73Gf",
      shadow: "shadow-VB9J73Gf",
      "border-thin": "border-thin-VB9J73Gf",
      "border-thick": "border-thick-VB9J73Gf",
      "intent-default": "intent-default-VB9J73Gf",
      "intent-success": "intent-success-VB9J73Gf",
      "intent-warning": "intent-warning-VB9J73Gf",
      "intent-danger": "intent-danger-VB9J73Gf",
      "intent-primary": "intent-primary-VB9J73Gf",
      "corner-top-left": "corner-top-left-VB9J73Gf",
      "corner-top-right": "corner-top-right-VB9J73Gf",
      "corner-bottom-right": "corner-bottom-right-VB9J73Gf",
      "corner-bottom-left": "corner-bottom-left-VB9J73Gf",
      childrenContainer: "childrenContainer-VB9J73Gf"
    };
  },
  36547: function _(e) {
    e.exports = {
      defaultSelect: "defaultSelect-OM7V5ndi"
    };
  },
  14619: function _(e) {
    e.exports = {
      itemWrap: "itemWrap-srH7jxJB",
      item: "item-srH7jxJB",
      icon: "icon-srH7jxJB",
      selected: "selected-srH7jxJB",
      label: "label-srH7jxJB"
    };
  },
  7625: function _(e) {
    e.exports = {
      lineEndSelect: "lineEndSelect-gw7ESiZg",
      right: "right-gw7ESiZg"
    };
  },
  66220: function _(e) {
    e.exports = {
      lineStyleSelect: "lineStyleSelect-GcXENVb4",
      multipleStyles: "multipleStyles-GcXENVb4"
    };
  },
  99118: function _(e) {
    e.exports = {
      lineWidthSelect: "lineWidthSelect-EUDB1YgB",
      bar: "bar-EUDB1YgB",
      isActive: "isActive-EUDB1YgB",
      item: "item-EUDB1YgB"
    };
  },
  68089: function _(e) {
    e.exports = {
      container: "container-dhpv13DH",
      active: "active-dhpv13DH",
      disabled: "disabled-dhpv13DH",
      icon: "icon-dhpv13DH"
    };
  },
  45707: function _(e) {
    e.exports = {
      wrap: "wrap-b6_0ORMg",
      disabled: "disabled-b6_0ORMg"
    };
  },
  3115: function _(e) {
    e.exports = {
      dropdown: "dropdown-gZlS9p6t",
      dropdownMenu: "dropdownMenu-gZlS9p6t",
      firstColorPicker: "firstColorPicker-gZlS9p6t"
    };
  },
  47543: function _(e) {
    e.exports = {
      row: "row-nGXZ4vJz",
      empty: "empty-nGXZ4vJz",
      wrap: "wrap-nGXZ4vJz",
      breakpointNormal: "breakpointNormal-nGXZ4vJz",
      breakpointMedium: "breakpointMedium-nGXZ4vJz",
      breakpointSmall: "breakpointSmall-nGXZ4vJz"
    };
  },
  50540: function _(e) {
    e.exports = {
      coordinates: "coordinates-mb1bDWNb",
      input: "input-mb1bDWNb",
      selectionCoordinates: "selectionCoordinates-mb1bDWNb",
      selectionCoordinates__inputs: "selectionCoordinates__inputs-mb1bDWNb",
      selectionCoordinates__description: "selectionCoordinates__description-mb1bDWNb",
      hintButton: "hintButton-mb1bDWNb"
    };
  },
  35199: function _(e) {
    e.exports = {
      wrapper: "wrapper-NVcHMTVy",
      checkbox: "checkbox-NVcHMTVy",
      colorSelect: "colorSelect-NVcHMTVy",
      hintButton: "hintButton-NVcHMTVy"
    };
  },
  22497: function _(e) {
    e.exports = {
      withoutPadding: "withoutPadding-KtEcG0Q0"
    };
  },
  54970: function _(e) {
    e.exports = {
      input: "input-mIsHGNhw",
      control: "control-mIsHGNhw",
      item: "item-mIsHGNhw",
      cell: "cell-mIsHGNhw",
      fragmentCell: "fragmentCell-mIsHGNhw",
      largeWidth: "largeWidth-mIsHGNhw",
      withTitle: "withTitle-mIsHGNhw",
      title: "title-mIsHGNhw"
    };
  },
  89232: function _(e) {
    e.exports = {
      line: "line-j5rMaiWF",
      control: "control-j5rMaiWF",
      valueInput: "valueInput-j5rMaiWF",
      valueUnit: "valueUnit-j5rMaiWF",
      input: "input-j5rMaiWF"
    };
  },
  76739: function _(e) {
    e.exports = {
      unit: "unit-ZtRdVxiD",
      input: "input-ZtRdVxiD",
      normal: "normal-ZtRdVxiD",
      big: "big-ZtRdVxiD",
      dropdown: "dropdown-ZtRdVxiD",
      dropdownMenu: "dropdownMenu-ZtRdVxiD"
    };
  },
  22332: function _(e) {
    e.exports = {
      optionalTwoColors: "optionalTwoColors-LDRcAXEV",
      colorPicker: "colorPicker-LDRcAXEV",
      dropdown: "dropdown-LDRcAXEV",
      dropdownMenu: "dropdownMenu-LDRcAXEV"
    };
  },
  13784: function _(e) {
    e.exports = {
      dropdown: "dropdown-RxdEkbF0",
      normal: "normal-RxdEkbF0",
      big: "big-RxdEkbF0",
      dropdownMenu: "dropdownMenu-RxdEkbF0"
    };
  },
  66586: function _(e) {
    e.exports = {
      range: "range-GLEBGed4",
      valueInput: "valueInput-GLEBGed4",
      rangeSlider: "rangeSlider-GLEBGed4",
      rangeSlider_mixed: "rangeSlider_mixed-GLEBGed4",
      input: "input-GLEBGed4",
      hintButton: "hintButton-GLEBGed4"
    };
  },
  42793: function _(e) {
    e.exports = {
      colorPicker: "colorPicker-VK3h8amb",
      fontStyleButton: "fontStyleButton-VK3h8amb",
      dropdown: "dropdown-VK3h8amb",
      dropdownMenu: "dropdownMenu-VK3h8amb",
      hintButton: "hintButton-VK3h8amb"
    };
  },
  81364: function _(e) {
    e.exports = {
      twoColors: "twoColors-C2hZXnYv",
      colorPicker: "colorPicker-C2hZXnYv"
    };
  },
  27394: function _(e) {
    e.exports = {
      dropdown: "dropdown-eLkGg0Ft",
      menu: "menu-eLkGg0Ft"
    };
  },
  19175: function _(e) {
    e.exports = {
      dialog: "dialog-CPGBbsmc",
      rounded: "rounded-CPGBbsmc",
      shadowed: "shadowed-CPGBbsmc",
      fullscreen: "fullscreen-CPGBbsmc",
      darker: "darker-CPGBbsmc",
      backdrop: "backdrop-CPGBbsmc"
    };
  },
  8326: function _(e) {
    e.exports = {
      "tablet-normal-breakpoint": "screen and (max-width: 768px)",
      "tooltip-offset": "20px",
      dialog: "dialog-qyCw0PaN",
      dragging: "dragging-qyCw0PaN",
      dialogAnimatedAppearance: "dialogAnimatedAppearance-qyCw0PaN",
      dialogAnimation: "dialogAnimation-qyCw0PaN",
      dialogTooltip: "dialogTooltip-qyCw0PaN"
    };
  },
  64104: function _(e) {
    e.exports = {
      desktopSize: "desktopSize-icygBqe7",
      drawer: "drawer-icygBqe7",
      menuBox: "menuBox-icygBqe7"
    };
  },
  40191: function _(e) {
    e.exports = {
      menuWrap: "menuWrap-Kq3ruQo8",
      isMeasuring: "isMeasuring-Kq3ruQo8",
      scrollWrap: "scrollWrap-Kq3ruQo8",
      momentumBased: "momentumBased-Kq3ruQo8",
      menuBox: "menuBox-Kq3ruQo8",
      isHidden: "isHidden-Kq3ruQo8"
    };
  },
  65542: function _(e) {
    e.exports = {
      range: "range-mFgGeMmT",
      disabled: "disabled-mFgGeMmT",
      rangeSlider: "rangeSlider-mFgGeMmT",
      rangeSliderMiddleWrap: "rangeSliderMiddleWrap-mFgGeMmT",
      rangeSliderMiddle: "rangeSliderMiddle-mFgGeMmT",
      dragged: "dragged-mFgGeMmT",
      pointer: "pointer-mFgGeMmT",
      rangePointerWrap: "rangePointerWrap-mFgGeMmT"
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
  36383: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useOutsideEvent: function useOutsideEvent() {
        return r;
      }
    });
    var o = n(50959),
        i = n(27267);

    function r(e) {
      var t = e.click,
          n = e.mouseDown,
          r = e.touchEnd,
          s = e.touchStart,
          a = e.handler,
          l = e.reference,
          _e$ownerDocument = e.ownerDocument,
          c = _e$ownerDocument === void 0 ? document : _e$ownerDocument,
          d = (0, o.useRef)(null),
          u = (0, o.useRef)(new CustomEvent("timestamp").timeStamp);
      return (0, o.useLayoutEffect)(function () {
        var e = {
          click: t,
          mouseDown: n,
          touchEnd: r,
          touchStart: s
        },
            o = l ? l.current : d.current;
        return (0, i.addOutsideEventListener)(u.current, o, a, c, e);
      }, [t, n, r, s, a]), l || d;
    }
  },
  9745: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Icon: function Icon() {
        return i;
      }
    });
    var o = n(50959);
    var i = o.forwardRef(function (e, t) {
      var _e$icon = e.icon,
          n = _e$icon === void 0 ? "" : _e$icon,
          i = _objectWithoutProperties(e, ["icon"]);

      return o.createElement("span", _objectSpread({}, i, {
        ref: t,
        dangerouslySetInnerHTML: {
          __html: n
        }
      }));
    });
  },
  83021: function _(e, t, n) {
    "use strict";

    n.d(t, {
      SubmenuContext: function SubmenuContext() {
        return i;
      },
      SubmenuHandler: function SubmenuHandler() {
        return r;
      }
    });
    var o = n(50959);
    var i = o.createContext(null);

    function r(e) {
      var _ref = (0, o.useState)(null),
          _ref2 = _slicedToArray(_ref, 2),
          t = _ref2[0],
          n = _ref2[1],
          r = (0, o.useRef)(null),
          s = (0, o.useRef)(new Map());

      return (0, o.useEffect)(function () {
        return function () {
          null !== r.current && clearTimeout(r.current);
        };
      }, []), o.createElement(i.Provider, {
        value: {
          current: t,
          setCurrent: function setCurrent(e) {
            null !== r.current && (clearTimeout(r.current), r.current = null);
            null === t ? n(e) : r.current = setTimeout(function () {
              r.current = null, n(e);
            }, 100);
          },
          registerSubmenu: function registerSubmenu(e, t) {
            return s.current.set(e, t), function () {
              s.current["delete"](e);
            };
          },
          isSubmenuNode: function isSubmenuNode(e) {
            return Array.from(s.current.values()).some(function (t) {
              return t(e);
            });
          }
        }
      }, e.children);
    }
  },
  67961: function _(e, t, n) {
    "use strict";

    n.d(t, {
      OverlapManager: function OverlapManager() {
        return r;
      },
      getRootOverlapManager: function getRootOverlapManager() {
        return a;
      }
    });
    var o = n(50151);

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

    var r =
    /*#__PURE__*/
    function () {
      function r() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

        _classCallCheck(this, r);

        this._storage = new i(), this._windows = new Map(), this._index = 0, this._document = e, this._container = e.createDocumentFragment();
      }

      _createClass(r, [{
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

          var o = this._document.createElement("div");

          if (o.style.position = t.position, o.style.zIndex = this._index.toString(), o.dataset.id = e, void 0 !== t.index) {
            var _e2 = this._container.childNodes.length;
            if (t.index >= _e2) this._container.appendChild(o);else if (t.index <= 0) this._container.insertBefore(o, this._container.firstChild);else {
              var _e3 = this._container.childNodes[t.index];

              this._container.insertBefore(o, _e3);
            }
          } else "reverse" === t.direction ? this._container.insertBefore(o, this._container.firstChild) : this._container.appendChild(o);

          return this._windows.set(e, o), ++this._index, o;
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

      return r;
    }();

    var s = new WeakMap();

    function a() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var t = e.getElementById("overlap-manager-root");
      if (null !== t) return (0, o.ensureDefined)(s.get(t));
      {
        var _t2 = new r(e),
            _n2 = function (e) {
          var t = e.createElement("div");
          return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t;
        }(e);

        return s.set(_n2, _t2), _t2.setContainer(_n2), e.body.appendChild(_n2), _t2;
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

    var o = function () {
      var e;
      return function () {
        var t;

        if (void 0 === e) {
          var _n3 = document.createElement("div"),
              _o = _n3.style;

          _o.visibility = "hidden", _o.width = "100px", _o.msOverflowStyle = "scrollbar", document.body.appendChild(_n3);
          var _i2 = _n3.offsetWidth;
          _n3.style.overflow = "scroll";

          var _r = document.createElement("div");

          _r.style.width = "100%", _n3.appendChild(_r);
          var _s2 = _r.offsetWidth;
          null === (t = _n3.parentNode) || void 0 === t || t.removeChild(_n3), e = _i2 - _s2;
        }

        return e;
      };
    }();

    function i(e, t, n) {
      null !== e && e.style.setProperty(t, n);
    }

    function r(e, t) {
      return getComputedStyle(e, null).getPropertyValue(t);
    }

    function s(e, t) {
      return parseInt(r(e, t));
    }

    var a = 0,
        l = !1;

    function c(e) {
      var _document = document,
          t = _document.body,
          n = t.querySelector(".widgetbar-wrap");

      if (e && 1 == ++a) {
        var _e4 = r(t, "overflow"),
            _a = s(t, "padding-right");

        "hidden" !== _e4.toLowerCase() && t.scrollHeight > t.offsetHeight && (i(n, "right", "".concat(o(), "px")), t.style.paddingRight = "".concat(_a + o(), "px"), l = !0), t.classList.add("i-no-scroll");
      } else if (!e && a > 0 && 0 == --a && (t.classList.remove("i-no-scroll"), l)) {
        i(n, "right", "0px");
        var _e5 = 0;
        0, t.scrollHeight <= t.clientHeight && (_e5 -= o()), t.style.paddingRight = (_e5 < 0 ? 0 : _e5) + "px", l = !1;
      }
    }
  },
  66045: function _(e, t, n) {
    "use strict";

    n.d(t, {
      FontSizeSelect: function FontSizeSelect() {
        return c;
      }
    });
    var o = n(50959),
        i = n(97754),
        r = n.n(i),
        s = n(90405),
        a = n(90186),
        l = n(36547);

    function c(e) {
      var t = e.id,
          n = e.fontSize,
          _e$fontSizes = e.fontSizes,
          i = _e$fontSizes === void 0 ? [] : _e$fontSizes,
          c = e.className,
          d = e.disabled,
          u = e.fontSizeChange;
      return o.createElement(s.Select, _objectSpread({
        id: t,
        disabled: d,
        className: r()(c, l.defaultSelect),
        menuClassName: l.defaultSelect,
        items: (p = i, p.map(function (e) {
          return {
            value: e.value,
            content: e.title
          };
        })),
        value: n,
        onChange: u
      }, (0, a.filterDataProps)(e)));
      var p;
    }
  },
  94697: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DisplayItem: function DisplayItem() {
        return d;
      },
      DropItem: function DropItem() {
        return u;
      },
      IconDropdown: function IconDropdown() {
        return c;
      }
    });
    var o = n(50959),
        i = n(97754),
        r = n.n(i),
        s = n(90405),
        a = n(9745),
        l = n(14619);

    function c(e) {
      var t = e.menuItemClassName,
          n = _objectWithoutProperties(e, ["menuItemClassName"]);

      return o.createElement(s.Select, _objectSpread({}, n, {
        menuItemClassName: r()(t, l.itemWrap)
      }));
    }

    function d(e) {
      return o.createElement("div", {
        className: r()(l.item, l.selected, e.className)
      }, o.createElement(a.Icon, {
        className: l.icon,
        icon: e.icon
      }));
    }

    function u(e) {
      return o.createElement("div", {
        className: l.item
      }, o.createElement(a.Icon, {
        className: r()(l.icon, e.iconClassName),
        icon: e.icon
      }), o.createElement("div", {
        className: l.label
      }, e.label));
    }
  },
  53598: function _(e, t, n) {
    "use strict";

    n.d(t, {
      LineStyleSelect: function LineStyleSelect() {
        return f;
      }
    });
    var o = n(44352),
        i = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(79849),
        l = n(94697),
        c = n(501),
        d = n(23851),
        u = n(57740),
        p = n(80427),
        h = n(66220);
    var m = [{
      type: a.LINESTYLE_SOLID,
      icon: c,
      label: o.t(null, void 0, n(1277))
    }, {
      type: a.LINESTYLE_DASHED,
      icon: d,
      label: o.t(null, void 0, n(59317))
    }, {
      type: a.LINESTYLE_DOTTED,
      icon: u,
      label: o.t(null, void 0, n(42973))
    }];

    var f =
    /*#__PURE__*/
    function (_i$PureComponent) {
      _inherits(f, _i$PureComponent);

      function f() {
        _classCallCheck(this, f);

        return _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments));
      }

      _createClass(f, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              e = _this$props.id,
              t = _this$props.lineStyle,
              n = _this$props.className,
              o = _this$props.lineStyleChange,
              r = _this$props.disabled,
              a = _this$props.additionalItems,
              c = _this$props.allowedLineStyles;

          var d = function (e) {
            var t = [].concat(m);
            return void 0 !== e && (t = t.filter(function (t) {
              return e.includes(t.type);
            })), t.map(function (e) {
              return {
                value: e.type,
                selectedContent: i.createElement(l.DisplayItem, {
                  icon: e.icon
                }),
                content: i.createElement(l.DropItem, {
                  icon: e.icon,
                  label: e.label
                })
              };
            });
          }(c);

          return a && (d = [{
            readonly: !0,
            content: a
          }].concat(_toConsumableArray(d))), i.createElement(l.IconDropdown, {
            id: e,
            disabled: r,
            className: s()(h.lineStyleSelect, n),
            hideArrowButton: !0,
            items: d,
            value: t,
            onChange: o,
            "data-name": "line-style-select",
            addPlaceholderToItems: !1,
            placeholder: i.createElement(l.DisplayItem, {
              icon: p,
              className: h.multipleStyles
            })
          });
        }
      }]);

      return f;
    }(i.PureComponent);
  },
  50890: function _(e, t, n) {
    "use strict";

    n.d(t, {
      LineWidthSelect: function LineWidthSelect() {
        return d;
      }
    });
    var o = n(50959),
        i = n(97754),
        r = n(90405),
        s = n(99118);
    var a = [1, 2, 3, 4];

    function l(e) {
      var t = e.id,
          n = e.value,
          _e$items = e.items,
          l = _e$items === void 0 ? a : _e$items,
          c = e.disabled,
          d = e.onChange;
      return o.createElement(r.Select, {
        id: t,
        disabled: c,
        hideArrowButton: !0,
        className: s.lineWidthSelect,
        items: (u = l, u.map(function (e) {
          return {
            value: e,
            selectedContent: p(e, !0),
            content: p(e)
          };
        })),
        value: n,
        onChange: d,
        "data-name": "line-width-select"
      });
      var u;

      function p(e, t) {
        var r = {
          borderTopWidth: e
        };
        return o.createElement("div", {
          className: s.item
        }, o.createElement("div", {
          className: i(s.bar, _defineProperty({}, s.isActive, e === n && !t)),
          style: r
        }, " "));
      }
    }

    var c = n(45560);

    function d(e) {
      var t = e.property,
          _ref3 = (0, c.useDefinitionProperty)({
        property: t
      }),
          _ref4 = _slicedToArray(_ref3, 2),
          n = _ref4[0],
          i = _ref4[1];

      return o.createElement(l, _objectSpread({}, e, {
        value: n,
        onChange: i
      }));
    }
  },
  66849: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlCustomHeightContext: function ControlCustomHeightContext() {
        return r;
      },
      ControlCustomWidthContext: function ControlCustomWidthContext() {
        return i;
      }
    });
    var o = n(50959);
    var i = o.createContext({}),
        r = o.createContext({});
  },
  15650: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Section: function Section() {
        return Rt;
      }
    });
    var o = n(50959),
        i = n(46141),
        r = n(48897),
        s = n(45560),
        a = n(31356);

    function l(e) {
      var _e$definition = e.definition,
          t = _e$definition.id,
          _e$definition$propert = _e$definition.properties,
          n = _e$definition$propert.checked,
          i = _e$definition$propert.disabled,
          r = _e$definition$propert.visible,
          l = _e$definition.title,
          c = _e$definition.solutionId,
          d = e.offset,
          _ref5 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !1
      }),
          _ref6 = _slicedToArray(_ref5, 1),
          u = _ref6[0],
          _ref7 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref8 = _slicedToArray(_ref7, 1),
          p = _ref8[0];

      return p ? o.createElement(a.CommonSection, {
        id: t,
        offset: d,
        checked: n,
        title: l,
        solutionId: c,
        disabled: e.disabled || u
      }) : null;
    }

    var c = n(97754),
        d = n.n(c),
        u = n(22064),
        p = n(53598);

    function h(e) {
      var t = e.property,
          _ref9 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref10 = _slicedToArray(_ref9, 2),
          n = _ref10[0],
          i = _ref10[1];

      return o.createElement(p.LineStyleSelect, _objectSpread({}, e, {
        lineStyle: n,
        lineStyleChange: i
      }));
    }

    var m = n(50890),
        f = n(60521),
        g = n(50151);

    function v(e) {
      return "mixed" === e;
    }

    function y(e, t, n) {
      var _ref11 = (0, o.useState)(e),
          _ref12 = _slicedToArray(_ref11, 2),
          i = _ref12[0],
          r = _ref12[1],
          s = (0, o.useRef)(i);

      return (0, o.useEffect)(function () {
        r(e);
      }, [e, n]), [i, function (e) {
        s.current = e, r(e);
      }, function () {
        t(s.current);
      }, function () {
        s.current = e, r(e);
      }];
    }

    var b = n(68335),
        _ = n(92399),
        E = n(37160),
        w = n(87663),
        C = n(49483);

    function D(e) {
      var t = e.property,
          n = _objectWithoutProperties(e, ["property"]),
          _ref13 = (0, o.useState)(performance.now()),
          _ref14 = _slicedToArray(_ref13, 2),
          i = _ref14[0],
          r = _ref14[1],
          _ref15 = (0, s.useDefinitionProperty)({
        property: t,
        handler: function handler() {
          return r(performance.now());
        }
      }),
          _ref16 = _slicedToArray(_ref15, 2),
          a = _ref16[0],
          l = _ref16[1],
          c = y(a, l, i);

      return o.createElement(S, _objectSpread({}, n, {
        valueHash: i,
        sharedBuffer: c
      }));
    }

    function S(e) {
      var t = e.sharedBuffer,
          n = e.min,
          i = e.max,
          r = e.step,
          s = _objectWithoutProperties(e, ["sharedBuffer", "min", "max", "step"]),
          _t3 = _slicedToArray(t, 4),
          a = _t3[0],
          l = _t3[1],
          c = _t3[2],
          d = _t3[3],
          u = (0, o.useRef)(null),
          p = (0, o.useRef)(null),
          h = {
        flushed: !1
      };

      return o.createElement(P, _objectSpread({}, s, {
        ref: p,
        onValueChange: function onValueChange(e, t) {
          l(e), "step" !== t || h.flushed || (c(), h.flushed = !0);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.defaultPrevented || h.flushed) return;

          switch ((0, b.hashFromEvent)(e.nativeEvent)) {
            case 27:
              d(), h.flushed = !0;
              break;

            case 13:
              e.preventDefault();

              var _t4 = (0, g.ensureNotNull)(p.current).getClampedValue();

              null !== _t4 && (l(_t4), c(), h.flushed = !0);
          }
        },
        onBlur: function onBlur(e) {
          var t = (0, g.ensureNotNull)(u.current);

          if (!t.contains(document.activeElement) && !t.contains(e.relatedTarget)) {
            var _e6 = (0, g.ensureNotNull)(p.current).getClampedValue();

            null === _e6 || h.flushed || (l(_e6), c(), h.flushed = !0);
          }
        },
        value: a,
        roundByStep: !1,
        containerReference: function containerReference(e) {
          u.current = e;
        },
        inputMode: C.CheckMobile.iOS() ? void 0 : "numeric",
        min: n,
        max: i,
        step: r,
        stretch: !1
      }));
    }

    var x = {
      mode: "float",
      min: -Number.MAX_VALUE,
      max: Number.MAX_VALUE,
      step: 1,
      precision: 0,
      inheritPrecisionFromStep: !0
    };

    var P =
    /*#__PURE__*/
    function (_o$PureComponent) {
      _inherits(P, _o$PureComponent);

      function P(e) {
        var _this;

        _classCallCheck(this, P);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this, e)), _this._selection = null, _this._restoreSelection = !1, _this._input = null, _this._handleSelectionChange = function () {
          _this._restoreSelection || document.activeElement !== (0, g.ensureNotNull)(_this._input) || _this._saveSelection((0, g.ensureNotNull)(_this._input));
        }, _this._handleInputReference = function (e) {
          _this._input = e, _this.props.inputReference && _this.props.inputReference(e);
        }, _this._onFocus = function (e) {
          _this._saveSelection((0, g.ensureNotNull)(_this._input)), _this.setState({
            focused: !0
          }), _this.props.onFocus && _this.props.onFocus(e);
        }, _this._onBlur = function (e) {
          _this._selection = null, _this.setState({
            displayValue: V(_this.props, _this.props.value, M(_this.props)),
            focused: !1
          }), _this.props.onBlur && _this.props.onBlur(e);
        }, _this._onValueChange = function (e) {
          var t = e.currentTarget,
              n = t.value,
              o = function (e, t, n) {
            switch (n) {
              case "integer":
                return T.test(t) ? t : e;

              case "float":
                return t = t.replace(/,/g, "."), N.test(t) ? t : e;
            }
          }(_this.state.displayValue, n, _this.props.mode),
              i = B(o),
              r = _this._checkValueBoundaries(i);

          var s, a;
          _this.setState({
            displayValue: o
          }), o !== n && (s = _this.state.displayValue, a = (a = o).replace(/,/g, "."), (s = s.replace(/,/g, ".")).includes(".") || !a.includes(".")) ? (_this._restoreSelection = !0, _this.forceUpdate()) : _this._saveSelection(t), r.value && V(_this.props, i) === o && _this.props.onValueChange(i, "input");
        }, _this._onValueByStepChange = function (e) {
          var _this$props2 = _this.props,
              _this$props2$roundByS = _this$props2.roundByStep,
              t = _this$props2$roundByS === void 0 ? !0 : _this$props2$roundByS,
              _this$props2$step = _this$props2.step,
              n = _this$props2$step === void 0 ? 1 : _this$props2$step,
              o = B(_this.state.displayValue);
          var i;

          if (isNaN(o)) {
            var _e7 = _this.props.defaultValue;
            if (void 0 === _e7) return;
            i = _e7;
          } else {
            var _r2 = new f.Big(o),
                _s3 = new f.Big(n),
                _a2 = _r2.mod(_s3);

            var _l = _r2.plus(e * n);

            !_a2.eq(0) && t && (_l = _l.plus((e > 0 ? 0 : 1) * n).minus(_a2)), i = _l.toNumber();
          }

          _this._checkValueBoundaries(i).value && (_this.setState({
            displayValue: V(_this.props, i, M(_this.props))
          }), _this.props.onValueChange(i, "step"));
        }, _this.state = {
          value: R(_this.props.value),
          displayValue: V(_this.props, _this.props.value, M(_this.props)),
          focused: !1,
          valueHash: _this.props.valueHash
        };
        return _this;
      }

      _createClass(P, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("selectionchange", this._handleSelectionChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("selectionchange", this._handleSelectionChange);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var e = (0, g.ensureNotNull)(this._input),
              t = this._selection;

          if (null !== t && this._restoreSelection && document.activeElement === e) {
            var _n4 = t.start,
                _o2 = t.end,
                _i4 = t.direction;
            e.setSelectionRange(_n4, _o2, _i4);
          }

          this._restoreSelection = !1;
        }
      }, {
        key: "render",
        value: function render() {
          return o.createElement(_.NumberInputView, {
            type: "text",
            inputMode: this.props.inputMode,
            name: this.props.name,
            fontSizeStyle: "medium",
            value: this.state.displayValue,
            className: this.props.className,
            placeholder: this.props.placeholder,
            forceShowControls: this.props.forceShowControls,
            disabled: this.props.disabled,
            stretch: this.props.stretch,
            error: Boolean(this.props.error),
            errorMessage: this.props.error,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this._handleInputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            autoSelectOnFocus: !0,
            "data-name": this.props["data-name"],
            highlight: this.props.highlight
          });
        }
      }, {
        key: "getClampedValue",
        value: function getClampedValue() {
          var _this$props3 = this.props,
              e = _this$props3.min,
              t = _this$props3.max,
              n = B(this.state.displayValue);
          return isNaN(n) ? null : (0, E.clamp)(n, e, t);
        }
      }, {
        key: "_saveSelection",
        value: function _saveSelection(e) {
          var t = e.selectionStart,
              n = e.selectionEnd,
              o = e.selectionDirection;
          null !== t && null !== n && null !== o && (this._selection = {
            start: t,
            end: n,
            direction: o
          });
        }
      }, {
        key: "_checkValueBoundaries",
        value: function _checkValueBoundaries(e) {
          var _this$props4 = this.props,
              t = _this$props4.min,
              n = _this$props4.max,
              o = function (e, t, n) {
            var o = e >= t,
                i = e <= n;
            return {
              passMin: o,
              passMax: i,
              pass: o && i,
              clamped: (0, E.clamp)(e, t, n)
            };
          }(e, t, n);

          return {
            value: o.pass
          };
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(e, t) {
          var n = e.valueHash,
              o = R(e.value);

          if (t.value !== o || t.valueHash !== n) {
            return {
              value: o,
              valueHash: n,
              displayValue: V(e, o, t.focused && t.valueHash === n ? void 0 : M(e))
            };
          }

          return null;
        }
      }]);

      return P;
    }(o.PureComponent);

    P.defaultProps = x;
    var T = /^-?[0-9]*$/,
        N = /^(-?([0-9]+\.?[0-9]*)|(-?[0-9]*))$/;

    function V(e, t, n) {
      return v(t = R(t)) ? "—" : (null !== t && void 0 !== n && (n = Math.max(k(t), n)), function (e, t) {
        if (null === e) return "";
        return new w.NumericFormatter(t).format(e);
      }(t, n));
    }

    function M(e) {
      var t = 0;
      return e.inheritPrecisionFromStep && e.step <= 1 && (t = k(e.step)), Math.max(e.precision, t) || void 0;
    }

    function k(e) {
      var t = Math.trunc(e).toString();
      return (0, E.clamp)(w.NumericFormatter.formatNoE(e).length - t.length - 1, 0, 15);
    }

    function B(e, t) {
      return new w.NumericFormatter(t).parse(e);
    }

    function R(e) {
      return "number" == typeof e && Number.isFinite(e) || v(e) ? e : null;
    }

    var I = n(24377),
        F = n(58593),
        W = n(87095);

    function L(e) {
      var t = e.color,
          n = e.thickness,
          i = e.thicknessItems,
          r = e.noAlpha,
          _ref17 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref18 = _slicedToArray(_ref17, 2),
          a = _ref18[0],
          l = _ref18[1],
          _ref19 = (0, s.useDefinitionProperty)(n ? {
        property: n
      } : {
        defaultValue: void 0
      }),
          _ref20 = _slicedToArray(_ref19, 2),
          c = _ref20[0],
          d = _ref20[1];

      return o.createElement(F.ColorSelect, _objectSpread({}, e, {
        color: function () {
          if (!a) return null;
          if ("mixed" === a) return "mixed";
          return (0, I.rgbToHexString)((0, I.parseRgb)(a));
        }(),
        onColorChange: function onColorChange(e) {
          var t = a && "mixed" !== a ? (0, W.alphaToTransparency)((0, I.parseRgba)(a)[3]) : 0;
          l((0, W.generateColor)(String(e), t, !0));
        },
        thickness: c,
        thicknessItems: i,
        onThicknessChange: d,
        opacity: r ? void 0 : a && "mixed" !== a ? (0, I.parseRgba)(a)[3] : void 0,
        onOpacityChange: r ? void 0 : function (e) {
          l((0, W.generateColor)(a, (0, W.alphaToTransparency)(e), !0));
        }
      }));
    }

    var A = n(44352),
        z = n(73436),
        G = n(94697),
        H = n(90186),
        O = n(43382),
        U = n(98853),
        $ = n(7625);
    var J = [{
      type: z.LineEnd.Normal,
      icon: O,
      label: A.t(null, void 0, n(55362))
    }, {
      type: z.LineEnd.Arrow,
      icon: U,
      label: A.t(null, void 0, n(96237))
    }];

    var Y =
    /*#__PURE__*/
    function (_o$PureComponent2) {
      _inherits(Y, _o$PureComponent2);

      function Y(e) {
        var _this2;

        _classCallCheck(this, Y);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this, e)), _this2._items = [], _this2._items = J.map(function (t) {
          return {
            value: t.type,
            selectedContent: o.createElement(G.DisplayItem, {
              icon: t.icon
            }),
            content: o.createElement(G.DropItem, {
              icon: t.icon,
              iconClassName: d()(e.isRight && $.right),
              label: t.label
            })
          };
        });
        return _this2;
      }

      _createClass(Y, [{
        key: "render",
        value: function render() {
          var _this$props5 = this.props,
              e = _this$props5.id,
              t = _this$props5.lineEnd,
              n = _this$props5.className,
              i = _this$props5.lineEndChange,
              r = _this$props5.isRight,
              s = _this$props5.disabled;
          return o.createElement(G.IconDropdown, _objectSpread({
            id: e,
            disabled: s,
            className: d()($.lineEndSelect, r && $.right, n),
            items: this._items,
            value: t,
            onChange: i,
            hideArrowButton: !0
          }, (0, H.filterDataProps)(this.props)));
        }
      }]);

      return Y;
    }(o.PureComponent);

    function X(e) {
      var t = e.property,
          _ref21 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref22 = _slicedToArray(_ref21, 2),
          n = _ref22[0],
          i = _ref22[1];

      return o.createElement(Y, _objectSpread({}, e, {
        lineEnd: n,
        lineEndChange: i
      }));
    }

    var q = n(78260),
        K = n(47543);

    function j(e) {
      var t = e.children,
          n = e.className,
          _e$breakPoint = e.breakPoint,
          i = _e$breakPoint === void 0 ? "Normal" : _e$breakPoint;
      return o.createElement(q.CellWrap, {
        className: c(K.wrap, n, K["breakpoint".concat(i)])
      }, o.Children.map(t, function (e) {
        return o.isValidElement(e) ? o.createElement("span", {
          key: null === e.key ? void 0 : e.key,
          className: c(K.row, r(e) && K.empty)
        }, e) : e;
      }));

      function r(e) {
        return !(!o.isValidElement(e) || e.type !== o.Fragment || !Array.isArray(e.props.children)) && e.props.children.every(function (e) {
          return null === e;
        });
      }
    }

    var Z = {
      1: "float",
      0: "integer"
    };
    var Q = n(77975),
        ee = n(89232);

    function te(e) {
      var _e$definition2 = e.definition,
          t = _e$definition2.id,
          _e$definition2$proper = _e$definition2.properties,
          n = _e$definition2$proper.checked,
          i = _e$definition2$proper.disabled,
          r = _e$definition2$proper.visible,
          l = _e$definition2$proper.leftEnd,
          d = _e$definition2$proper.rightEnd,
          p = _e$definition2$proper.value,
          f = _e$definition2$proper.extendLeft,
          g = _e$definition2$proper.extendRight,
          v = _e$definition2.title,
          y = _e$definition2.valueMin,
          b = _e$definition2.valueMax,
          _ = _e$definition2.valueStep,
          E = _e$definition2.valueUnit,
          w = _e$definition2.extendLeftTitle,
          C = _e$definition2.extendRightTitle,
          S = _e$definition2.solutionId,
          x = e.offset,
          _ref23 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !0
      }),
          _ref24 = _slicedToArray(_ref23, 1),
          P = _ref24[0],
          _ref25 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !1
      }),
          _ref26 = _slicedToArray(_ref25, 1),
          T = _ref26[0],
          _ref27 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref28 = _slicedToArray(_ref27, 1),
          N = _ref28[0],
          V = (0, Q.useWatchedValueReadonly)({
        watchedValue: y,
        defaultValue: void 0
      }),
          M = (0, Q.useWatchedValueReadonly)({
        watchedValue: b,
        defaultValue: void 0
      }),
          k = (0, Q.useWatchedValueReadonly)({
        watchedValue: _,
        defaultValue: void 0
      }),
          B = (0, Q.useWatchedValueReadonly)({
        watchedValue: E,
        defaultValue: void 0
      }),
          R = e.disabled || !P;

      return N ? o.createElement(o.Fragment, null, o.createElement(a.CommonSection, {
        id: t,
        offset: x,
        checked: n,
        title: v,
        solutionId: S,
        disabled: e.disabled || T
      }, o.createElement(j, {
        className: ee.line,
        breakPoint: "Small"
      }, o.createElement(o.Fragment, null, function () {
        var _e$definition3 = e.definition,
            _e$definition3$proper = _e$definition3.properties,
            n = _e$definition3$proper.color,
            i = _e$definition3$proper.width,
            r = _e$definition3.widthValues;
        if (n) return o.createElement("span", {
          className: ee.control
        }, o.createElement(L, {
          color: n,
          thickness: i,
          disabled: R,
          thicknessItems: r
        }));
        return i && o.createElement("span", {
          className: ee.control
        }, o.createElement(m.LineWidthSelect, {
          id: (0, u.createDomId)(t, "line-width-select"),
          items: r,
          property: i,
          disabled: R
        }));
      }(), function () {
        var n = e.definition.properties.style;
        return n && o.createElement("span", {
          className: ee.control
        }, o.createElement(h, {
          id: (0, u.createDomId)(t, "line-style-select"),
          property: n,
          disabled: R
        }));
      }()), (l || d || p) && o.createElement(o.Fragment, null, o.createElement(o.Fragment, null, l && o.createElement(X, {
        id: (0, u.createDomId)(t, "left-end-select"),
        "data-name": "left-end-select",
        className: ee.control,
        property: l,
        disabled: R
      }), d && o.createElement(X, {
        id: (0, u.createDomId)(t, "right-end-select"),
        "data-name": "right-end-select",
        className: ee.control,
        property: d,
        disabled: R,
        isRight: !0
      })), function () {
        var t = e.definition.valueType;
        return p && o.createElement("span", {
          className: c(ee.valueInput, ee.control)
        }, o.createElement(D, {
          className: ee.input,
          property: p,
          min: V,
          max: M,
          step: k,
          disabled: R,
          mode: void 0 !== t ? Z[t] : void 0,
          name: "line-value-input"
        }), o.createElement("span", {
          className: ee.valueUnit
        }, B));
      }()))), f && o.createElement(a.CommonSection, {
        id: "".concat(t, "ExtendLeft"),
        offset: x,
        checked: f,
        title: w,
        disabled: e.disabled || T
      }), g && o.createElement(a.CommonSection, {
        id: "".concat(t, "ExtendRight"),
        offset: x,
        checked: g,
        title: C,
        disabled: e.disabled || T
      })) : null;
    }

    var ne = n(93613),
        oe = n(90405),
        ie = n(37968);

    function re(e) {
      var t = e.property,
          n = e.options,
          i = _objectWithoutProperties(e, ["property", "options"]),
          _ref29 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref30 = _slicedToArray(_ref29, 2),
          r = _ref30[0],
          a = _ref30[1],
          l = (0, ie.useForceUpdate)();

      return (0, o.useEffect)(function () {
        var e = function e() {
          return l();
        };

        return Array.isArray(n) || n.subscribe(e), function () {
          Array.isArray(n) || n.unsubscribe(e);
        };
      }, []), o.createElement(oe.Select, _objectSpread({}, i, {
        onChange: a,
        value: r,
        items: (Array.isArray(n) ? n : n.value()).map(function (e) {
          return e.readonly ? {
            content: e.title,
            readonly: e.readonly
          } : {
            content: e.title,
            value: e.value,
            disabled: e.disabled,
            id: e.id
          };
        })
      }));
    }

    var se = n(3115);
    var ae = [{
      title: A.t(null, void 0, n(35637)),
      value: ne.ColorType.Solid
    }, {
      title: A.t(null, void 0, n(16079)),
      value: ne.ColorType.Gradient
    }];

    function le(e) {
      var t = e.id,
          n = e.disabled,
          i = e.noAlpha,
          r = e.properties,
          a = r.color,
          l = r.gradientColor1,
          c = r.gradientColor2,
          d = r.type,
          _ref31 = (0, s.useDefinitionProperty)({
        property: d,
        defaultValue: ne.ColorType.Solid
      }),
          _ref32 = _slicedToArray(_ref31, 1),
          p = _ref32[0];

      return o.createElement(j, null, o.createElement(re, {
        id: (0, u.createDomId)(t, "background-type-options-dropdown"),
        "data-name": "background-type-options-dropdown",
        className: se.dropdown,
        menuClassName: se.dropdownMenu,
        disabled: n,
        property: d,
        options: ae
      }), p === ne.ColorType.Solid ? o.createElement(L, {
        color: a,
        disabled: n,
        noAlpha: i
      }) : o.createElement(o.Fragment, null, o.createElement(L, {
        className: se.firstColorPicker,
        color: l,
        disabled: n,
        noAlpha: i
      }), o.createElement(L, {
        color: c,
        disabled: n,
        noAlpha: i
      })));
    }

    function ce(e) {
      var _e$definition4 = e.definition,
          t = _e$definition4.id,
          n = _e$definition4.properties,
          i = _e$definition4.title,
          r = _e$definition4.noAlpha,
          l = _e$definition4.solutionId,
          c = e.offset,
          d = n.color,
          u = n.checked,
          p = n.disabled,
          h = n.visible,
          _ref33 = (0, s.useDefinitionProperty)({
        property: u,
        defaultValue: !0
      }),
          _ref34 = _slicedToArray(_ref33, 1),
          m = _ref34[0],
          _ref35 = (0, s.useDefinitionProperty)({
        property: p,
        defaultValue: !1
      }),
          _ref36 = _slicedToArray(_ref35, 1),
          f = _ref36[0],
          _ref37 = (0, s.useDefinitionProperty)({
        property: h,
        defaultValue: !0
      }),
          _ref38 = _slicedToArray(_ref37, 1),
          g = _ref38[0],
          v = e.disabled || !m;

      return g ? o.createElement(a.CommonSection, {
        id: t,
        offset: c,
        checked: u,
        title: i,
        solutionId: l,
        disabled: e.disabled || f
      }, o.createElement(q.CellWrap, null, n.hasOwnProperty("type") ? o.createElement(le, {
        id: t,
        properties: n,
        disabled: v,
        noAlpha: r
      }) : o.createElement(L, {
        color: d,
        disabled: v,
        noAlpha: r
      }))) : null;
    }

    var de = n(54368),
        ue = n(48891),
        pe = n(45707);

    function he(e) {
      var t = e.value,
          n = e.disabled,
          i = e.onChange,
          r = e.className;
      return o.createElement("div", {
        className: c(pe.wrap, r, _defineProperty({}, pe.disabled, n))
      }, o.createElement(de.Opacity, {
        hideInput: !0,
        color: ue.colorsPalette["color-tv-blue-500"],
        opacity: 1 - t / 100,
        onChange: function onChange(e) {
          n || i(100 - 100 * e);
        },
        disabled: n
      }));
    }

    function me(e) {
      var t = e.property,
          n = _objectWithoutProperties(e, ["property"]),
          _ref39 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref40 = _slicedToArray(_ref39, 2),
          i = _ref40[0],
          r = _ref40[1];

      return o.createElement(he, _objectSpread({}, n, {
        value: i,
        onChange: r
      }));
    }

    function fe(e) {
      var _e$definition5 = e.definition,
          t = _e$definition5.id,
          _e$definition5$proper = _e$definition5.properties,
          n = _e$definition5$proper.transparency,
          i = _e$definition5$proper.checked,
          r = _e$definition5$proper.disabled,
          l = _e$definition5$proper.visible,
          c = _e$definition5.title,
          d = _e$definition5.solutionId,
          u = e.offset,
          _ref41 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !0
      }),
          _ref42 = _slicedToArray(_ref41, 1),
          p = _ref42[0],
          _ref43 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !1
      }),
          _ref44 = _slicedToArray(_ref43, 1),
          h = _ref44[0],
          _ref45 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !0
      }),
          _ref46 = _slicedToArray(_ref45, 1),
          m = _ref46[0],
          f = e.disabled || !p;

      return m ? o.createElement(a.CommonSection, {
        id: t,
        offset: u,
        checked: i,
        title: c,
        solutionId: d,
        disabled: e.disabled || h
      }, o.createElement(q.CellWrap, null, o.createElement(me, {
        property: n,
        disabled: f
      }))) : null;
    }

    var ge = n(81364);

    function ve(e) {
      var _e$definition6 = e.definition,
          t = _e$definition6.id,
          _e$definition6$proper = _e$definition6.properties,
          n = _e$definition6$proper.color1,
          i = _e$definition6$proper.color2,
          r = _e$definition6$proper.checked,
          l = _e$definition6$proper.disabled,
          c = _e$definition6$proper.visible,
          d = _e$definition6.title,
          u = _e$definition6.noAlpha1,
          p = _e$definition6.noAlpha2,
          h = _e$definition6.solutionId,
          m = e.offset,
          _ref47 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref48 = _slicedToArray(_ref47, 1),
          f = _ref48[0],
          _ref49 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !1
      }),
          _ref50 = _slicedToArray(_ref49, 1),
          g = _ref50[0],
          _ref51 = (0, s.useDefinitionProperty)({
        property: c,
        defaultValue: !0
      }),
          _ref52 = _slicedToArray(_ref51, 1),
          v = _ref52[0],
          y = e.disabled || !f || g;

      return v ? o.createElement(a.CommonSection, {
        id: t,
        offset: m,
        checked: r,
        solutionId: h,
        title: d,
        disabled: e.disabled || g
      }, o.createElement(q.CellWrap, {
        className: ge.twoColors
      }, b(n, u), b(i, p))) : null;

      function b(e, t) {
        return o.createElement("span", {
          className: ge.colorPicker
        }, o.createElement(L, {
          color: e,
          disabled: y,
          noAlpha: t
        }));
      }
    }

    var ye = n(66849),
        be = n(76739);

    function _e(e) {
      var _e$definition7 = e.definition,
          t = _e$definition7.id,
          _e$definition7$proper = _e$definition7.properties,
          n = _e$definition7$proper.checked,
          i = _e$definition7$proper.value,
          r = _e$definition7$proper.unitOptionsValue,
          l = _e$definition7$proper.disabled,
          d = _e$definition7$proper.visible,
          p = _e$definition7.min,
          h = _e$definition7.max,
          m = _e$definition7.step,
          f = _e$definition7.title,
          v = _e$definition7.unit,
          y = _e$definition7.unitOptions,
          b = _e$definition7.type,
          _ = _e$definition7.solutionId,
          E = e.offset,
          _ref53 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !0
      }),
          _ref54 = _slicedToArray(_ref53, 1),
          w = _ref54[0],
          _ref55 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !1
      }),
          _ref56 = _slicedToArray(_ref55, 1),
          C = _ref56[0],
          _ref57 = (0, s.useDefinitionProperty)({
        property: d,
        defaultValue: !0
      }),
          _ref58 = _slicedToArray(_ref57, 1),
          S = _ref58[0],
          x = (0, Q.useWatchedValueReadonly)({
        watchedValue: p,
        defaultValue: void 0
      }),
          P = (0, Q.useWatchedValueReadonly)({
        watchedValue: h,
        defaultValue: void 0
      }),
          T = (0, Q.useWatchedValueReadonly)({
        watchedValue: m,
        defaultValue: void 0
      }),
          N = (0, Q.useWatchedValueReadonly)({
        watchedValue: v,
        defaultValue: void 0
      }),
          V = (0, o.useContext)(ye.ControlCustomWidthContext),
          M = e.disabled || !w;

      return S ? o.createElement(a.CommonSection, {
        id: t,
        offset: E,
        checked: n,
        title: f,
        solutionId: _,
        disabled: e.disabled || C
      }, o.createElement(q.CellWrap, null, o.createElement(j, null, o.createElement(D, {
        className: c(be.input, V[t] && be[V[t]]),
        property: i,
        min: x,
        max: P,
        step: T,
        disabled: M,
        mode: Z[b],
        name: "number-input",
        "data-name": t
      }), r && o.createElement(re, {
        id: (0, u.createDomId)(t, "unit-options-dropdown"),
        "data-name": "unit-options-dropdown",
        className: be.dropdown,
        menuClassName: be.dropdownMenu,
        disabled: M,
        property: r,
        options: (0, g.ensureDefined)(y)
      })), N && o.createElement("span", {
        className: be.unit
      }, N))) : null;
    }

    function Ee(e) {
      var _e$definition8 = e.definition,
          t = _e$definition8.id,
          _e$definition8$proper = _e$definition8.properties,
          n = _e$definition8$proper.checked,
          i = _e$definition8$proper.disabled,
          r = _e$definition8$proper.visible,
          l = _e$definition8.childrenDefinitions,
          c = _e$definition8.title,
          d = e.offset,
          _ref59 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !0
      }),
          _ref60 = _slicedToArray(_ref59, 1),
          u = _ref60[0],
          _ref61 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !1
      }),
          _ref62 = _slicedToArray(_ref61, 1),
          p = _ref62[0],
          _ref63 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref64 = _slicedToArray(_ref63, 1),
          h = _ref64[0],
          m = e.disabled || !u;

      return h ? o.createElement(o.Fragment, null, o.createElement(a.CommonSection, {
        id: t,
        offset: d,
        checked: n,
        title: c,
        disabled: e.disabled || p
      }), l.map(function (e) {
        return o.createElement(Rt, {
          key: e.id,
          disabled: m,
          definition: e,
          offset: !0
        });
      })) : null;
    }

    var we = n(66045);

    function Ce(e) {
      var t = e.property,
          _ref65 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref66 = _slicedToArray(_ref65, 2),
          n = _ref66[0],
          i = _ref66[1];

      return o.createElement(we.FontSizeSelect, _objectSpread({}, e, {
        fontSize: n,
        fontSizeChange: i,
        "data-name": "font-size-select"
      }));
    }

    var De = n(9745),
        Se = n(68089);

    function xe(e) {
      var t = e.className,
          n = e.checked,
          i = e.icon,
          r = e.disabled,
          s = e.onClick;
      return o.createElement("div", _objectSpread({
        className: d()(t, Se.container, n && !r && Se.active, r && Se.disabled),
        onClick: r ? void 0 : s,
        "data-role": "button"
      }, (0, H.filterDataProps)(e)), o.createElement(De.Icon, {
        className: Se.icon,
        icon: i
      }));
    }

    function Pe(e) {
      var t = e.icon,
          n = e.className,
          i = e.property,
          r = e.disabled,
          _ref67 = (0, s.useDefinitionProperty)({
        property: i
      }),
          _ref68 = _slicedToArray(_ref67, 2),
          a = _ref68[0],
          l = _ref68[1];

      return o.createElement(xe, _objectSpread({
        className: n,
        icon: t,
        checked: a,
        onClick: function onClick() {
          l(!a);
        },
        disabled: r
      }, (0, H.filterDataProps)(e)));
    }

    var Te = n(67029),
        Ne = n(11062),
        Ve = n(2568);

    function Me(e) {
      var t = e.property,
          n = _objectWithoutProperties(e, ["property"]),
          _ref69 = (0, s.useDefinitionProperty)({
        property: t
      }),
          _ref70 = _slicedToArray(_ref69, 2),
          i = _ref70[0],
          r = _ref70[1],
          a = (0, o.useCallback)(function (e) {
        return r(e.target.value);
      }, [r]);

      return o.createElement(Ve.Textarea, _objectSpread({}, n, {
        value: i,
        onChange: a
      }));
    }

    var ke = n(8295),
        Be = n(29285),
        Re = n(42793);

    var Ie = function Ie(e) {
      return {
        content: e.title,
        title: e.title,
        value: e.value,
        id: e.id
      };
    },
        Fe = function Fe(e) {
      return {
        content: e.title,
        title: e.title,
        value: e.value,
        id: e.id
      };
    };

    function We(e) {
      var _e$definition9 = e.definition,
          t = _e$definition9.id,
          _e$definition9$proper = _e$definition9.properties,
          n = _e$definition9$proper.color,
          i = _e$definition9$proper.size,
          r = _e$definition9$proper.checked,
          l = _e$definition9$proper.disabled,
          c = _e$definition9$proper.bold,
          d = _e$definition9$proper.italic,
          p = _e$definition9$proper.text,
          h = _e$definition9$proper.alignmentHorizontal,
          m = _e$definition9$proper.alignmentVertical,
          f = _e$definition9$proper.orientation,
          g = _e$definition9$proper.backgroundVisible,
          v = _e$definition9$proper.backgroundColor,
          y = _e$definition9$proper.borderVisible,
          b = _e$definition9$proper.borderColor,
          _ = _e$definition9$proper.borderWidth,
          E = _e$definition9$proper.wrap,
          w = _e$definition9.title,
          C = _e$definition9.solutionId,
          D = _e$definition9.sizeItems,
          S = _e$definition9.alignmentTitle,
          x = _e$definition9.alignmentHorizontalItems,
          P = _e$definition9.alignmentVerticalItems,
          T = _e$definition9.orientationTitle,
          N = _e$definition9.orientationItems,
          V = _e$definition9.backgroundTitle,
          M = _e$definition9.borderTitle,
          k = _e$definition9.borderWidthItems,
          B = _e$definition9.wrapTitle,
          R = e.offset,
          I = (0, o.useContext)(ye.ControlCustomHeightContext),
          _ref71 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref72 = _slicedToArray(_ref71, 1),
          F = _ref72[0],
          _ref73 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !1
      }),
          _ref74 = _slicedToArray(_ref73, 1),
          W = _ref74[0],
          _ref75 = (0, s.useDefinitionProperty)({
        property: m,
        defaultValue: void 0
      }),
          _ref76 = _slicedToArray(_ref75, 2),
          A = _ref76[0],
          z = _ref76[1],
          _ref77 = (0, s.useDefinitionProperty)({
        property: f,
        defaultValue: "horizontal"
      }),
          _ref78 = _slicedToArray(_ref77, 2),
          G = _ref78[0],
          H = _ref78[1],
          _ref79 = (0, s.useDefinitionProperty)({
        property: h,
        defaultValue: void 0
      }),
          _ref80 = _slicedToArray(_ref79, 2),
          O = _ref80[0],
          U = _ref80[1],
          _ref81 = (0, s.useDefinitionProperty)({
        property: g,
        defaultValue: !1
      }),
          _ref82 = _slicedToArray(_ref81, 1),
          $ = _ref82[0],
          _ref83 = (0, s.useDefinitionProperty)({
        property: y,
        defaultValue: !1
      }),
          _ref84 = _slicedToArray(_ref83, 1),
          J = _ref84[0],
          Y = e.disabled || !F;

      return o.createElement(o.Fragment, null, function () {
        if (w) return o.createElement(a.CommonSection, {
          id: t,
          offset: R,
          checked: r,
          title: w,
          solutionId: C,
          disabled: e.disabled || W
        }, o.createElement(j, {
          breakPoint: "Small"
        }, Z(), Q()));
        return o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
          placement: "first",
          colSpan: 2,
          offset: R,
          "data-section-name": t
        }, Z(), Q(), C && !1));
      }(), p && o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        placement: "first",
        colSpan: 2,
        offset: R,
        "data-section-name": t
      }, o.createElement(Me, {
        className: Te.InputClasses.FontSizeMedium,
        rows: (X = I[t], "big" === X ? 9 : 5),
        stretch: !0,
        property: p,
        disabled: Y,
        onFocus: function onFocus(e) {
          e.target.select();
        },
        name: "text-input"
      }))), (h || m) && o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        placement: "first",
        verticalAlign: "adaptive",
        offset: R,
        "data-section-name": t
      }, o.createElement(q.CellWrap, null, S)), o.createElement(Ne.PropertyTable.Cell, {
        placement: "last",
        verticalAlign: "adaptive",
        "data-section-name": t
      }, o.createElement(j, {
        breakPoint: "Small"
      }, void 0 !== A && void 0 !== P && o.createElement(oe.Select, {
        id: (0, u.createDomId)(t, "alignment-vertical-select"),
        "data-name": "alignment-vertical-select",
        className: Re.dropdown,
        menuClassName: Re.dropdownMenu,
        disabled: Y,
        value: A,
        items: P.map(Ie),
        onChange: z
      }), void 0 !== O && void 0 !== x && o.createElement(oe.Select, {
        id: (0, u.createDomId)(t, "alignment-horizontal-select"),
        "data-name": "alignment-horizontal-select",
        className: Re.dropdown,
        menuClassName: Re.dropdownMenu,
        disabled: Y,
        value: O,
        items: x.map(Ie),
        onChange: U
      })))), void 0 !== f && void 0 !== N && o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        placement: "first",
        verticalAlign: "adaptive",
        offset: R,
        "data-section-name": t
      }, o.createElement(q.CellWrap, null, T)), o.createElement(Ne.PropertyTable.Cell, {
        placement: "last",
        verticalAlign: "adaptive",
        "data-section-name": t
      }, o.createElement(j, {
        breakPoint: "Small"
      }, o.createElement(oe.Select, {
        id: (0, u.createDomId)(t, "orientation-select"),
        "data-name": "orientation-select",
        className: Re.dropdown,
        menuClassName: Re.dropdownMenu,
        disabled: Y,
        value: G,
        items: N.map(Fe),
        onChange: H
      })))), ee(V, g, v, !!g && !$), ee(M, y, b, !!y && !J, _, k), E && o.createElement(a.CommonSection, {
        id: "".concat(t, "Wrap"),
        offset: R,
        checked: E,
        title: B,
        disabled: e.disabled || W
      }));
      var X;

      function K(e, t, n) {
        return e ? o.createElement(Pe, {
          className: Re.fontStyleButton,
          icon: t,
          property: e,
          disabled: Y,
          "data-name": n
        }) : null;
      }

      function Z() {
        return o.createElement(o.Fragment, null, n && o.createElement("div", {
          className: Re.colorPicker
        }, o.createElement(L, {
          color: n,
          disabled: Y
        })), i && D && o.createElement(Ce, {
          id: (0, u.createDomId)(t, "font-size-select"),
          property: i,
          fontSizes: D,
          disabled: Y
        }));
      }

      function Q() {
        return o.createElement(o.Fragment, null, K(c, ke, "toggle-bold"), K(d, Be, "toggle-italic"));
      }

      function ee(e, n, i, r, s, l) {
        return i || n ? o.createElement(a.CommonSection, {
          id: "".concat(t, "ColorSelect"),
          offset: R,
          checked: n,
          title: e,
          disabled: Y
        }, i && o.createElement(L, {
          color: i,
          thickness: s,
          thicknessItems: l,
          disabled: Y || r
        })) : null;
      }
    }

    var Le = n(86623),
        Ae = n(1722);

    function ze(e) {
      var t = e.property,
          _e$mathOperations = e.mathOperations,
          n = _e$mathOperations === void 0 ? "+/*" : _e$mathOperations,
          _e$mode = e.mode,
          i = _e$mode === void 0 ? "float" : _e$mode,
          r = e.disabled,
          a = _objectWithoutProperties(e, ["property", "mathOperations", "mode", "disabled"]),
          _ref85 = (0, o.useState)(performance.now()),
          _ref86 = _slicedToArray(_ref85, 2),
          l = _ref86[0],
          c = _ref86[1],
          _ref87 = (0, s.useDefinitionProperty)({
        property: t,
        handler: function handler() {
          return c(performance.now());
        }
      }),
          _ref88 = _slicedToArray(_ref87, 2),
          d = _ref88[0],
          u = _ref88[1],
          _y = y(d, u, l),
          _y2 = _slicedToArray(_y, 4),
          p = _y2[0],
          h = _y2[1],
          m = _y2[2],
          f = _y2[3],
          g = (0, o.useMemo)(function () {
        var e = new RegExp("^[".concat(n.split("").join("\\"), "-]?(").concat("float" === i ? "(\\d+\\.\\d*)|" : "", "(\\d*))$"));
        return function (t) {
          return (0, Ae.isString)(t) && e.test(t);
        };
      }, [n, i]);

      return o.createElement(Le.FormInput, _objectSpread({}, a, {
        type: "text",
        value: p,
        onChange: function onChange(e) {
          var t = e.currentTarget.value;
          h(g(t) ? t : p);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.defaultPrevented) return;

          switch ((0, b.hashFromEvent)(e.nativeEvent)) {
            case 27:
              f();
              break;

            case 13:
              v();
          }
        },
        onBlur: function onBlur() {
          v();
        },
        disabled: r,
        stretch: !1,
        autoSelectOnFocus: !0
      }));

      function v() {
        p.length && m();
      }
    }

    var Ge = n(50540);

    function He(e) {
      var _e$definition10 = e.definition,
          _e$definition10$prope = _e$definition10.properties,
          t = _e$definition10$prope.x,
          n = _e$definition10$prope.y,
          i = _e$definition10$prope.disabled,
          r = _e$definition10.id,
          s = _e$definition10.title,
          a = _e$definition10.solutionId,
          l = e.definition,
          c = e.offset,
          d = i && i.value() || e.disabled;
      return o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        verticalAlign: "top",
        placement: "first",
        offset: c,
        "data-section-name": r
      }, o.createElement("span", {
        className: Ge.coordinates
      }, s)), (t || n) && o.createElement(Ne.PropertyTable.Cell, {
        placement: "last",
        offset: c,
        "data-section-name": r
      }, o.createElement(j, {
        breakPoint: "Medium"
      }, "coordinates" === l.propType ? o.createElement(Oe, {
        definition: l,
        disabled: d
      }) : o.createElement(Ue, {
        definition: l,
        disabled: d
      })), a && !1));
    }

    function Oe(e) {
      var _e$definition11 = e.definition,
          _e$definition11$prope = _e$definition11.properties,
          t = _e$definition11$prope.x,
          n = _e$definition11$prope.y,
          i = _e$definition11.minX,
          r = _e$definition11.maxX,
          s = _e$definition11.stepX,
          a = _e$definition11.minY,
          l = _e$definition11.maxY,
          c = _e$definition11.stepY,
          d = _e$definition11.typeX,
          u = _e$definition11.typeY,
          p = e.disabled,
          h = (0, Q.useWatchedValueReadonly)({
        watchedValue: i,
        defaultValue: void 0
      }),
          m = (0, Q.useWatchedValueReadonly)({
        watchedValue: r,
        defaultValue: void 0
      }),
          f = (0, Q.useWatchedValueReadonly)({
        watchedValue: s,
        defaultValue: void 0
      }),
          g = (0, Q.useWatchedValueReadonly)({
        watchedValue: a,
        defaultValue: void 0
      }),
          v = (0, Q.useWatchedValueReadonly)({
        watchedValue: l,
        defaultValue: void 0
      }),
          y = (0, Q.useWatchedValueReadonly)({
        watchedValue: c,
        defaultValue: void 0
      });
      return o.createElement(o.Fragment, null, n && o.createElement(D, {
        className: Ge.input,
        property: n,
        min: g,
        max: v,
        step: y,
        disabled: p,
        name: "y-input",
        mode: void 0 !== u ? Z[u] : "integer"
      }), t && o.createElement(D, {
        className: Ge.input,
        property: t,
        min: h,
        max: m,
        step: f,
        disabled: p,
        name: "x-input",
        mode: void 0 !== d ? Z[d] : "integer"
      }));
    }

    function Ue(e) {
      var _e$definition12 = e.definition,
          _e$definition12$prope = _e$definition12.properties,
          t = _e$definition12$prope.x,
          i = _e$definition12$prope.y,
          r = _e$definition12.mathOperationsX,
          s = _e$definition12.mathOperationsY,
          a = _e$definition12.modeX,
          l = _e$definition12.modeY,
          c = e.disabled;
      return o.createElement("div", {
        className: Ge.selectionCoordinates
      }, o.createElement("div", {
        className: Ge.selectionCoordinates__inputs
      }, i && o.createElement(ze, {
        property: i,
        mathOperations: s,
        mode: l,
        disabled: c,
        className: Ge.input,
        placeholder: A.t(null, void 0, n(95166))
      }), t && o.createElement(ze, {
        property: t,
        mathOperations: r,
        mode: a,
        disabled: c,
        className: Ge.input,
        placeholder: A.t(null, void 0, n(76080))
      })), o.createElement("div", {
        className: Ge.selectionCoordinates__description
      }, A.t(null, void 0, n(78019))));
    }

    var $e = n(13784);

    function Je(e) {
      var _e$definition13 = e.definition,
          t = _e$definition13.id,
          _e$definition13$prope = _e$definition13.properties,
          n = _e$definition13$prope.checked,
          i = _e$definition13$prope.option,
          r = _e$definition13$prope.disabled,
          l = _e$definition13$prope.visible,
          c = _e$definition13.title,
          p = _e$definition13.solutionId,
          h = _e$definition13.options,
          m = e.offset,
          _ref89 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !0
      }),
          _ref90 = _slicedToArray(_ref89, 1),
          f = _ref90[0],
          _ref91 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !1
      }),
          _ref92 = _slicedToArray(_ref91, 1),
          g = _ref92[0],
          _ref93 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !0
      }),
          _ref94 = _slicedToArray(_ref93, 1),
          v = _ref94[0],
          y = (0, o.useContext)(ye.ControlCustomWidthContext),
          b = e.disabled || !f;

      return v ? o.createElement(a.CommonSection, {
        id: t,
        offset: m,
        checked: n,
        title: c,
        solutionId: p,
        disabled: e.disabled || g
      }, o.createElement(q.CellWrap, null, o.createElement(re, {
        id: (0, u.createDomId)(t, "options-dropdown"),
        "data-name": "options-dropdown",
        className: d()($e.dropdown, y[t] && $e[y[t]]),
        menuClassName: d()($e.dropdownMenu, y[t] && $e[y[t]]),
        disabled: b || g,
        property: i,
        options: h
      }))) : null;
    }

    var Ye = n(71953);
    var Xe = n(38223),
        qe = n(65542);

    var Ke =
    /*#__PURE__*/
    function (_o$PureComponent3) {
      _inherits(Ke, _o$PureComponent3);

      function Ke(e) {
        var _this3;

        _classCallCheck(this, Ke);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Ke).call(this, e)), _this3._container = null, _this3._pointer = null, _this3._rafPosition = null, _this3._rafDragStop = null, _this3._refContainer = function (e) {
          _this3._container = e;
        }, _this3._refPointer = function (e) {
          _this3._pointer = e;
        }, _this3._handlePosition = function (e) {
          null !== _this3._rafPosition || _this3.props.disabled || (_this3._rafPosition = requestAnimationFrame(function () {
            var _this3$props = _this3.props,
                t = _this3$props.from,
                n = _this3$props.to,
                o = _this3$props.min,
                i = _this3$props.max,
                r = _this3._getNewPosition(e),
                s = 1 === _this3._detectPointerMode(e),
                a = s ? (0, E.clamp)(r, o, n) : t,
                l = s ? n : (0, E.clamp)(r, t, i);

            a <= l && _this3._handleChange(a, l), _this3._rafPosition = null;
          }));
        }, _this3._handleDragStop = function () {
          null !== _this3._rafDragStop || _this3.props.disabled || (_this3._rafDragStop = requestAnimationFrame(function () {
            _this3.setState({
              pointerDragMode: 0
            }), _this3._rafDragStop = null, _this3.props.onCommit();
          }));
        }, _this3._onSliderClick = function (e) {
          C.CheckMobile.any() || (_this3._handlePosition(e.nativeEvent), _this3._dragSubscribe());
        }, _this3._mouseUp = function (e) {
          _this3._dragUnsubscribe(), _this3._handlePosition(e), _this3._handleDragStop();
        }, _this3._mouseMove = function (e) {
          _this3._handlePosition(e);
        }, _this3._onTouchStart = function (e) {
          _this3._handlePosition(e.nativeEvent.touches[0]);
        }, _this3._handleTouch = function (e) {
          _this3._handlePosition(e.nativeEvent.touches[0]);
        }, _this3._handleTouchEnd = function () {
          _this3._handleDragStop();
        }, _this3.state = {
          pointerDragMode: 0
        };
        return _this3;
      }

      _createClass(Ke, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          null !== this._rafPosition && (cancelAnimationFrame(this._rafPosition), this._rafPosition = null), null !== this._rafDragStop && (cancelAnimationFrame(this._rafDragStop), this._rafDragStop = null), this._dragUnsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          var _style;

          var _this$props6 = this.props,
              e = _this$props6.className,
              t = _this$props6.disabled,
              n = _this$props6.from,
              i = _this$props6.to,
              r = _this$props6.min,
              s = _this$props6.max,
              a = this.state.pointerDragMode,
              l = 0 !== a,
              d = s - r,
              u = 0 === d ? r : (n - r) / d,
              p = 0 === d ? s : (i - r) / d,
              h = (0, Xe.isRtl)() ? "right" : "left";
          return o.createElement("div", {
            className: c(e, qe.range, t && qe.disabled)
          }, o.createElement("div", {
            className: qe.rangeSlider,
            ref: this._refContainer,
            onMouseDown: this._onSliderClick,
            onTouchStart: this._onTouchStart,
            onTouchMove: this._handleTouch,
            onTouchEnd: this._handleTouchEnd
          }, o.createElement("div", {
            className: qe.rangeSliderMiddleWrap
          }, o.createElement("div", {
            className: c(qe.rangeSliderMiddle, l && qe.dragged),
            style: (_style = {}, _defineProperty(_style, h, 100 * u + "%"), _defineProperty(_style, "width", 100 * (p - u) + "%"), _style)
          })), o.createElement("div", {
            className: qe.rangePointerWrap
          }, o.createElement("div", {
            className: c(qe.pointer, l && qe.dragged),
            style: _defineProperty({}, h, 100 * u + "%"),
            ref: this._refPointer
          })), o.createElement("div", {
            className: qe.rangePointerWrap
          }, o.createElement("div", {
            className: c(qe.pointer, l && qe.dragged),
            style: _defineProperty({}, h, 100 * p + "%")
          }))));
        }
      }, {
        key: "_dragSubscribe",
        value: function _dragSubscribe() {
          var e = (0, g.ensureNotNull)(this._container).ownerDocument;
          e && (e.addEventListener("mouseup", this._mouseUp), e.addEventListener("mousemove", this._mouseMove));
        }
      }, {
        key: "_dragUnsubscribe",
        value: function _dragUnsubscribe() {
          var e = (0, g.ensureNotNull)(this._container).ownerDocument;
          e && (e.removeEventListener("mousemove", this._mouseMove), e.removeEventListener("mouseup", this._mouseUp));
        }
      }, {
        key: "_getNewPosition",
        value: function _getNewPosition(e) {
          var _this$props7 = this.props,
              t = _this$props7.min,
              n = _this$props7.max,
              o = n - t,
              i = (0, g.ensureNotNull)(this._container),
              r = (0, g.ensureNotNull)(this._pointer),
              s = i.getBoundingClientRect(),
              a = r.offsetWidth;
          var l = e.clientX - a / 2 - s.left;
          return (0, Xe.isRtl)() && (l = s.width - l - a), (0, E.clamp)(l / (s.width - a), 0, 1) * o + t;
        }
      }, {
        key: "_detectPointerMode",
        value: function _detectPointerMode(e) {
          var _this$props8 = this.props,
              t = _this$props8.from,
              n = _this$props8.to,
              o = this.state.pointerDragMode;
          if (0 !== o) return o;

          var i = this._getNewPosition(e),
              r = Math.abs(t - i),
              s = Math.abs(n - i),
              a = r === s ? i < t ? 1 : 2 : r < s ? 1 : 2;

          return this.setState({
            pointerDragMode: a
          }), a;
        }
      }, {
        key: "_handleChange",
        value: function _handleChange(e, t) {
          var _this$props9 = this.props,
              n = _this$props9.from,
              o = _this$props9.to,
              i = _this$props9.onChange;
          e === n && t === o || i(e, t);
        }
      }]);

      return Ke;
    }(o.PureComponent);

    var je = n(90692),
        Ze = n(66586);

    function Qe(e) {
      var _e$definition14 = e.definition,
          t = _e$definition14.id,
          _e$definition14$prope = _e$definition14.properties,
          n = _e$definition14$prope.checked,
          i = _e$definition14$prope.disabled,
          r = _e$definition14$prope.from,
          l = _e$definition14$prope.to,
          c = _e$definition14.title,
          u = _e$definition14.solutionId,
          p = _e$definition14.max,
          h = _e$definition14.min,
          m = e.offset,
          f = e.disabled,
          _ref95 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !0
      }),
          _ref96 = _slicedToArray(_ref95, 1),
          g = _ref96[0],
          _ref97 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !1
      }),
          _ref98 = _slicedToArray(_ref97, 1),
          b = _ref98[0],
          _ = (0, Q.useWatchedValueReadonly)({
        watchedValue: h,
        defaultValue: void 0
      }),
          E = (0, Q.useWatchedValueReadonly)({
        watchedValue: p,
        defaultValue: void 0
      }),
          _ref99 = (0, s.useDefinitionProperty)({
        property: r
      }),
          _ref100 = _slicedToArray(_ref99, 2),
          w = _ref100[0],
          C = _ref100[1],
          _ref101 = (0, s.useDefinitionProperty)({
        property: l
      }),
          _ref102 = _slicedToArray(_ref101, 2),
          D = _ref102[0],
          x = _ref102[1],
          P = v(w) || v(D),
          T = y(P ? "mixed" : w, function (e) {
        if (C(e), v(B)) {
          var _e8 = E || 100;

          R(_e8), x(_e8);
        }
      }),
          _T = _slicedToArray(T, 3),
          N = _T[0],
          V = _T[1],
          M = _T[2],
          k = y(P ? "mixed" : D, function (e) {
        if (x(e), v(N)) {
          var _e9 = _ || 0;

          V(_e9), C(_e9);
        }
      }),
          _k = _slicedToArray(k, 3),
          B = _k[0],
          R = _k[1],
          I = _k[2],
          F = v(N) || v(B),
          W = f || v(g) || !g,
          L = {
        flushed: !1
      };

      return o.createElement(a.CommonSection, {
        id: t,
        offset: m,
        checked: n,
        title: c,
        disabled: f || b
      }, o.createElement(q.CellWrap, {
        className: Ze.range
      }, function () {
        if (!_ || !E) return null;
        return o.createElement(je.MatchMedia, {
          rule: "screen and (max-width: 460px)"
        }, function (e) {
          return o.createElement(j, {
            breakPoint: "Medium"
          }, o.createElement(o.Fragment, null, o.createElement("span", {
            className: Ze.valueInput
          }, o.createElement(S, {
            className: Ze.input,
            sharedBuffer: T,
            min: _,
            max: v(B) ? E : B,
            step: 1,
            disabled: W,
            name: "from-input",
            mode: "integer",
            defaultValue: _
          }), e ? o.createElement("span", {
            className: Ze.rangeSlider
          }, "—") : o.createElement(Ke, {
            className: d()(Ze.rangeSlider, F && Ze.rangeSlider_mixed),
            from: F ? _ : N,
            to: F ? E : B,
            min: _,
            max: E,
            onChange: A,
            onCommit: z,
            disabled: W
          }))), o.createElement(o.Fragment, null, o.createElement("span", {
            className: Ze.valueInput
          }, o.createElement(S, {
            className: Ze.input,
            sharedBuffer: k,
            min: v(N) ? _ : N,
            max: E,
            step: 1,
            disabled: W,
            name: "to-input",
            mode: "integer",
            defaultValue: E
          }), u && !1)));
        });
      }()));

      function A(e, t) {
        V(Math.round(e)), R(Math.round(t));
      }

      function z() {
        L.flushed || (M(), I(), L.flushed = !0);
      }
    }

    var et = n(86067),
        tt = n(53424),
        nt = n(54970);

    function ot(e) {
      var t = e.definitions,
          n = e.name,
          i = e.offset,
          r = d()(nt.cell, nt.fragmentCell, t.some(function (e) {
        return void 0 !== e.solutionId;
      }) && nt.largeWidth);
      return o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        className: r,
        offset: i,
        placement: "first",
        verticalAlign: "adaptive",
        colSpan: 2,
        "data-section-name": n,
        checkableTitle: !0
      }, t.map(function (e) {
        return o.createElement("div", {
          className: nt.item,
          key: e.id,
          "data-section-name": e.id
        }, o.createElement(rt, {
          definition: e
        }));
      })));
    }

    function it(e) {
      var t = e.definition,
          n = e.offset;
      return o.createElement(Ne.PropertyTable.Row, null, o.createElement(Ne.PropertyTable.Cell, {
        className: nt.cell,
        offset: n,
        placement: "first",
        verticalAlign: "adaptive",
        colSpan: 2,
        checkableTitle: !0
      }, o.createElement(rt, {
        definition: t
      })));
    }

    function rt(e) {
      var _e$definition15 = e.definition,
          t = _e$definition15.id,
          _e$definition15$prope = _e$definition15.properties,
          n = _e$definition15$prope.disabled,
          i = _e$definition15$prope.checked,
          r = _e$definition15$prope.color,
          a = _e$definition15$prope.level,
          l = _e$definition15$prope.width,
          c = _e$definition15$prope.style,
          p = _e$definition15.solutionId,
          m = _e$definition15.title,
          f = _e$definition15.widthValues,
          g = _e$definition15.styleValues,
          _ref103 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !0
      }),
          _ref104 = _slicedToArray(_ref103, 1),
          v = _ref104[0],
          _ref105 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !1
      }),
          _ref106 = _slicedToArray(_ref105, 1),
          y = _ref106[0],
          b = y || !v;

      return o.createElement(o.Fragment, null, o.createElement(tt.CheckableTitle, {
        name: "is-enabled-".concat(t),
        className: d()(m && nt.withTitle),
        title: m && o.createElement("span", {
          className: nt.title
        }, m),
        property: i,
        disabled: y
      }), a && o.createElement(D, {
        className: d()(nt.input, nt.control),
        property: a,
        disabled: b
      }), r && o.createElement(L, {
        className: nt.control,
        disabled: b,
        color: r,
        thickness: l,
        thicknessItems: f
      }), c && o.createElement(h, {
        id: (0, u.createDomId)(t, "leveled-line-style-select"),
        className: nt.control,
        property: c,
        disabled: b,
        allowedLineStyles: g
      }), p && !1);
    }

    var st = n(27394);

    function at(e) {
      var _e$definition16 = e.definition,
          t = _e$definition16.id,
          _e$definition16$prope = _e$definition16.properties,
          n = _e$definition16$prope.option1,
          i = _e$definition16$prope.option2,
          r = _e$definition16$prope.checked,
          l = _e$definition16$prope.disabled,
          c = _e$definition16.title,
          d = _e$definition16.solutionId,
          p = _e$definition16.optionsItems1,
          h = _e$definition16.optionsItems2,
          m = e.offset,
          _ref107 = (0, s.useDefinitionProperty)({
        property: r,
        defaultValue: !0
      }),
          _ref108 = _slicedToArray(_ref107, 1),
          f = _ref108[0],
          _ref109 = (0, s.useDefinitionProperty)({
        property: l,
        defaultValue: !1
      }),
          _ref110 = _slicedToArray(_ref109, 1),
          g = _ref110[0],
          v = e.disabled || !f;

      return o.createElement(a.CommonSection, {
        id: t,
        offset: m,
        checked: r,
        title: c,
        solutionId: d,
        disabled: e.disabled || g
      }, o.createElement(j, {
        className: st.twoOptions
      }, o.createElement(re, {
        id: (0, u.createDomId)(t, "two-options-dropdown-1"),
        "data-name": "two-options-dropdown-1",
        className: st.dropdown,
        menuClassName: st.menu,
        property: n,
        disabled: v,
        options: p
      }), o.createElement(re, {
        id: (0, u.createDomId)(t, "two-options-dropdown-2"),
        "data-name": "two-options-dropdown-2",
        className: st.dropdown,
        menuClassName: st.menu,
        property: i,
        disabled: v,
        options: h
      })));
    }

    var lt = n(22332);

    function ct(e) {
      var _e$definition17 = e.definition,
          t = _e$definition17.id,
          _e$definition17$prope = _e$definition17.properties,
          n = _e$definition17$prope.color1,
          i = _e$definition17$prope.color2,
          r = _e$definition17$prope.option,
          s = _e$definition17.options,
          l = _e$definition17.color1Visible,
          c = _e$definition17.color2Visible,
          p = _e$definition17.title,
          h = _e$definition17.noAlpha1,
          m = _e$definition17.noAlpha2,
          f = _e$definition17.solutionId,
          g = e.offset,
          v = (0, Q.useWatchedValueReadonly)({
        watchedValue: l,
        defaultValue: !1
      }),
          y = (0, Q.useWatchedValueReadonly)({
        watchedValue: c,
        defaultValue: !1
      }),
          b = (0, o.useContext)(ye.ControlCustomWidthContext);
      return o.createElement(a.CommonSection, {
        id: t,
        offset: g,
        solutionId: f,
        title: p
      }, o.createElement(q.CellWrap, {
        className: lt.optionalTwoColors
      }, o.createElement(j, null, o.createElement(re, {
        id: (0, u.createDomId)(t, "options-dropdown"),
        "data-name": "options-dropdown",
        className: d()(lt.dropdown, b[t] && lt[b[t]]),
        menuClassName: d()(lt.dropdownMenu, b[t] && lt[b[t]]),
        property: r,
        options: s
      }), o.createElement(o.Fragment, null, v && _(n, h), y && _(i, m)))));

      function _(e, t) {
        return o.createElement("span", {
          className: lt.colorPicker
        }, o.createElement(L, {
          color: e,
          noAlpha: t
        }));
      }
    }

    var dt = n(39828),
        ut = n(22497);

    function pt(e) {
      var _e$definition18 = e.definition,
          t = _e$definition18.source,
          n = _e$definition18.inputs,
          i = _e$definition18.model,
          r = _e$definition18.inputsTabProperty,
          s = _e$definition18.studyMetaInfo;
      return o.createElement(dt.InputsTabContent, {
        className: ut.withoutPadding,
        property: r,
        model: i,
        study: t,
        studyMetaInfo: s,
        inputs: n
      });
    }

    var ht = n(56840),
        mt = n(38297),
        ft = n(83682),
        gt = n(173);

    var vt = n(20520),
        yt = n(37558),
        bt = n(41590),
        _t = n(27317),
        Et = n(40173);

    function wt(e) {
      !function (e, t) {
        (0, o.useEffect)(function () {
          var n = t || document;
          return n.addEventListener("scroll", e), function () {
            return n.removeEventListener("scroll", e);
          };
        }, [e]);
      }(e, document);
    }

    var Ct = n(12811),
        Dt = n(24437),
        St = n(38446);

    function xt(e) {
      var t = e.children,
          n = e.highlight,
          i = e.disabled,
          r = e.reference,
          s = _objectWithoutProperties(e, ["children", "highlight", "disabled", "reference"]),
          a = n ? "primary" : "default";

      return o.createElement("div", _objectSpread({}, s, {
        ref: r,
        className: d()(St.wrapper, St["intent-".concat(a)], St["border-thin"], St["size-medium"], n && St.highlight, n && St.focused, i && St.disabled),
        "data-role": "button"
      }), o.createElement("div", {
        className: d()(St.childrenContainer, i && St.disabled)
      }, t), n && o.createElement("span", {
        className: St.shadow
      }));
    }

    var Pt = n(64104);

    var Tt = function Tt() {
      return null;
    },
        Nt = (0, Et.mergeThemes)(_t.DEFAULT_MENU_THEME, {
      menuBox: Pt.menuBox
    });

    function Vt(e) {
      var t = e.value,
          n = e.disabled,
          i = e.onSelect,
          r = (0, o.useRef)(null),
          _ref111 = (0, o.useRef)(ht.getJSON("RecentlyUsedEmojis", [t])),
          s = _ref111.current,
          _ref112 = (0, o.useState)(s),
          _ref113 = _slicedToArray(_ref112, 2),
          a = _ref113[0],
          l = _ref113[1],
          _ref114 = (0, o.useState)(!1),
          _ref115 = _slicedToArray(_ref114, 2),
          c = _ref115[0],
          d = _ref115[1],
          u = (0, o.useCallback)(function () {
        return d(!1);
      }, []);

      wt(u);
      var p = (0, o.useCallback)(function (e) {
        var t = Array.from(new Set([e].concat(_toConsumableArray(a)))).slice(0, 18);
        ht.setJSON("RecentlyUsedEmojis", t), l(t), i(e), u();
      }, [a, i]),
          h = (m = a, (0, o.useMemo)(function () {
        return gt.emojiGroups[0].emojis = m, _toConsumableArray(gt.emojiGroups);
      }, [m]));
      var m;
      return o.createElement(o.Fragment, null, o.createElement(xt, {
        reference: r,
        highlight: c,
        disabled: n,
        "data-name": "emoji-picker"
      }, o.createElement(ft.EmojiWrap, {
        emoji: t,
        onClick: function onClick() {
          n || d(!0);
        }
      })), o.createElement(je.MatchMedia, {
        rule: Dt.DialogBreakpoints.TabletSmall
      }, function (e) {
        return c && o.createElement(yt.DrawerManager, null, e ? o.createElement(bt.Drawer, {
          className: Pt.drawer,
          position: "Bottom",
          onClose: u
        }, o.createElement(mt.EmojiList, {
          emojis: h,
          onSelect: p,
          height: 378
        })) : o.createElement(vt.PopupMenu, {
          theme: Nt,
          isOpened: !0,
          position: (0, Ct.getPopupPositioner)(r.current, {
            horizontalDropDirection: Ct.HorizontalDropDirection.FromLeftToRight,
            horizontalAttachEdge: Ct.HorizontalAttachEdge.Left
          }),
          onClickOutside: u,
          onClose: Tt
        }, o.createElement(mt.EmojiList, {
          className: Pt.desktopSize,
          emojis: h,
          onSelect: p,
          height: 378
        })));
      }));
    }

    var Mt = n(35199);

    function kt(e) {
      var _e$definition19 = e.definition,
          t = _e$definition19.id,
          n = _e$definition19.title,
          i = _e$definition19.properties,
          r = _e$definition19.solutionId,
          l = e.offset,
          c = i.checked,
          d = i.emoji,
          u = i.backgroundColor,
          _ref116 = (0, s.useDefinitionProperty)({
        property: c,
        defaultValue: !1
      }),
          _ref117 = _slicedToArray(_ref116, 1),
          p = _ref117[0],
          _ref118 = (0, s.useDefinitionProperty)({
        property: d,
        defaultValue: "🙂"
      }),
          _ref119 = _slicedToArray(_ref118, 2),
          h = _ref119[0],
          m = _ref119[1],
          _ref120 = (0, s.useDefinitionProperty)({
        property: u,
        defaultValue: ue.colorsPalette["color-tv-blue-a600"]
      }),
          _ref121 = _slicedToArray(_ref120, 2),
          f = _ref121[0],
          g = _ref121[1],
          _ref122 = (0, s.useDefinitionProperty)({
        property: i.disabled,
        defaultValue: !1
      }),
          _ref123 = _slicedToArray(_ref122, 1),
          v = _ref123[0],
          y = e.disabled || !p;

      return o.createElement(a.CommonSection, {
        id: t,
        offset: l,
        checked: c,
        title: n,
        solutionId: r,
        disabled: e.disabled || v
      }, o.createElement(Vt, {
        value: h,
        disabled: y,
        onSelect: m
      }), o.createElement(F.ColorSelect, {
        className: Mt.colorSelect,
        disabled: y,
        color: function () {
          if ("mixed" === f) return f;
          return (0, I.rgbToHexString)((0, I.parseRgb)(f));
        }(),
        opacity: f && "mixed" !== f ? (0, I.parseRgba)(f)[3] : void 0,
        onColorChange: function onColorChange(e) {
          var t = f && "mixed" !== f ? (0, W.alphaToTransparency)((0, I.parseRgba)(f)[3]) : 0;
          g((0, W.generateColor)(String(e), t, !0));
        },
        onOpacityChange: function onOpacityChange(e) {
          g((0, W.generateColor)(f, (0, W.alphaToTransparency)(e), !0));
        }
      }));
    }

    function Bt(e) {
      var _e$definition20 = e.definition,
          t = _e$definition20.id,
          _e$definition20$prope = _e$definition20.properties,
          n = _e$definition20$prope.disabled,
          i = _e$definition20$prope.visible,
          r = _e$definition20.childrenDefinitions,
          l = _e$definition20.title,
          c = e.offset,
          _ref124 = (0, s.useDefinitionProperty)({
        property: n,
        defaultValue: !1
      }),
          _ref125 = _slicedToArray(_ref124, 1),
          d = _ref125[0],
          _ref126 = (0, s.useDefinitionProperty)({
        property: i,
        defaultValue: !0
      }),
          _ref127 = _slicedToArray(_ref126, 1),
          u = _ref127[0],
          p = e.disabled;

      return u ? o.createElement(o.Fragment, null, l && o.createElement(a.CommonSection, {
        id: t,
        offset: c,
        title: l,
        disabled: e.disabled || d
      }), r.map(function (e) {
        return o.createElement(Rt, {
          key: e.id,
          disabled: p,
          definition: e,
          offset: Boolean(l)
        });
      })) : null;
    }

    function Rt(e) {
      var t = e.definition,
          n = e.offset,
          s = e.disabled;
      if (function (e) {
        (0, o.useEffect)(function () {
          if (void 0 === e) return;

          var t = _objectSpread({}, e.properties);

          return Object.entries(t).forEach(function (_ref128) {
            var _ref129 = _slicedToArray(_ref128, 2),
                n = _ref129[0],
                o = _ref129[1];

            void 0 !== o && o.subscribe(t, function () {
              return Ye.logger.logNormal("Property \"".concat(n, "\" in definition \"").concat(e.id, "\" was updated to value \"").concat(o.value(), "\""));
            });
          }), function () {
            Object.entries(t).forEach(function (_ref130) {
              var _ref131 = _slicedToArray(_ref130, 2),
                  e = _ref131[1];

              null == e || e.unsubscribeAll(t);
            });
          };
        }, [e]);
      }((0, i.isPropertyDefinitionsGroup)(t) ? void 0 : t), (0, i.isPropertyDefinitionsGroup)(t)) return o.createElement(It, {
        definition: t,
        offset: n,
        disabled: s
      });

      switch (t.propType) {
        case "line":
          return o.createElement(te, _objectSpread({}, e, {
            definition: t
          }));

        case "checkable":
          return o.createElement(l, _objectSpread({}, e, {
            definition: t
          }));

        case "color":
          return o.createElement(ce, _objectSpread({}, e, {
            definition: t
          }));

        case "transparency":
          return o.createElement(fe, _objectSpread({}, e, {
            definition: t
          }));

        case "twoColors":
          return o.createElement(ve, _objectSpread({}, e, {
            definition: t
          }));

        case "optionalTwoColors":
          return o.createElement(ct, _objectSpread({}, e, {
            definition: t
          }));

        case "number":
          return o.createElement(_e, _objectSpread({}, e, {
            definition: t
          }));

        case "symbol":
          return o.createElement(r.SymbolInputsButton, _objectSpread({}, e, {
            definition: t
          }));

        case "text":
          return o.createElement(We, _objectSpread({}, e, {
            definition: t
          }));

        case "checkableSet":
          return o.createElement(Ee, _objectSpread({}, e, {
            definition: t
          }));

        case "set":
          return o.createElement(Bt, _objectSpread({}, e, {
            definition: t
          }));

        case "options":
          return o.createElement(Je, _objectSpread({}, e, {
            definition: t
          }));

        case "soundSelect":
        case "image":
        default:
          return null;

        case "range":
          return o.createElement(Qe, _objectSpread({}, e, {
            definition: t
          }));

        case "coordinates":
        case "selectionCoordinates":
          return o.createElement(He, _objectSpread({}, e, {
            definition: t
          }));

        case "twoOptions":
          return o.createElement(at, _objectSpread({}, e, {
            definition: t
          }));

        case "leveledLine":
          return o.createElement(it, _objectSpread({}, e, {
            definition: t
          }));

        case "emoji":
          return o.createElement(kt, _objectSpread({}, e, {
            definition: t
          }));

        case "studyInputs":
          return o.createElement(pt, _objectSpread({}, e, {
            definition: t
          }));
      }
    }

    function It(e) {
      var t = e.definition,
          n = (0, Q.useWatchedValueReadonly)({
        watchedValue: t.definitions
      });
      return (0, Q.useWatchedValueReadonly)({
        watchedValue: t.visible,
        defaultValue: !0
      }) ? o.createElement(o.Fragment, null, t.title && o.createElement(et.GroupTitleSection, {
        title: t.title,
        name: t.id
      }), n && function (e) {
        var t = [];
        return e.reduce(function (e, t) {
          if ((0, i.isPropertyDefinitionsGroup)(t) || "leveledLine" !== t.propType) e.push(t);else {
            var _n5 = e[e.length - 1];
            Array.isArray(_n5) ? _n5.push(t) : e.push([t]);
          }
          return e;
        }, t);
      }(n).map(function (n) {
        return Array.isArray(n) ? o.createElement(ot, {
          key: n[0].id,
          name: t.id,
          definitions: n
        }) : o.createElement(Rt, _objectSpread({
          key: n.id
        }, e, {
          definition: n
        }));
      }), "general" === t.groupType && o.createElement(Ne.PropertyTable.GroupSeparator, {
        size: 1
      })) : null;
    }
  },
  95711: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupContext: function PopupContext() {
        return o;
      }
    });
    var o = n(50959).createContext(null);
  },
  63016: function _(e, t, n) {
    "use strict";

    n.d(t, {
      PopupDialog: function PopupDialog() {
        return x;
      }
    });
    var o = n(50959),
        i = n(97754),
        r = n(50151),
        s = n(60508),
        a = n(67961),
        l = n(90186),
        c = n(19175);

    var d =
    /*#__PURE__*/
    function (_o$PureComponent4) {
      _inherits(d, _o$PureComponent4);

      function d() {
        var _this4;

        _classCallCheck(this, d);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this4._manager = new a.OverlapManager(), _this4._handleSlot = function (e) {
          _this4._manager.setContainer(e);
        };
        return _this4;
      }

      _createClass(d, [{
        key: "render",
        value: function render() {
          var _this$props10 = this.props,
              _this$props10$rounded = _this$props10.rounded,
              e = _this$props10$rounded === void 0 ? !0 : _this$props10$rounded,
              _this$props10$shadowe = _this$props10.shadowed,
              t = _this$props10$shadowe === void 0 ? !0 : _this$props10$shadowe,
              _this$props10$fullscr = _this$props10.fullscreen,
              n = _this$props10$fullscr === void 0 ? !1 : _this$props10$fullscr,
              _this$props10$darker = _this$props10.darker,
              r = _this$props10$darker === void 0 ? !1 : _this$props10$darker,
              a = _this$props10.className,
              d = _this$props10.backdrop,
              _this$props10$contain = _this$props10.containerTabIndex,
              u = _this$props10$contain === void 0 ? -1 : _this$props10$contain,
              p = i(a, c.dialog, e && c.rounded, t && c.shadowed, n && c.fullscreen, r && c.darker),
              h = (0, l.filterDataProps)(this.props),
              m = this.props.style ? _objectSpread({}, this._createStyles(), {}, this.props.style) : this._createStyles();
          return o.createElement(o.Fragment, null, o.createElement(s.SlotContext.Provider, {
            value: this._manager
          }, d && o.createElement("div", {
            onClick: this.props.onClickBackdrop,
            className: c.backdrop
          }), o.createElement("div", _objectSpread({}, h, {
            className: p,
            style: m,
            ref: this.props.reference,
            onFocus: this.props.onFocus,
            onMouseDown: this.props.onMouseDown,
            onMouseUp: this.props.onMouseUp,
            onClick: this.props.onClick,
            onKeyDown: this.props.onKeyDown,
            tabIndex: u,
            "aria-label": this.props.containerAriaLabel
          }), this.props.children)), o.createElement(s.Slot, {
            reference: this._handleSlot
          }));
        }
      }, {
        key: "_createStyles",
        value: function _createStyles() {
          var _this$props11 = this.props,
              e = _this$props11.bottom,
              t = _this$props11.left,
              n = _this$props11.width,
              o = _this$props11.right,
              i = _this$props11.top,
              r = _this$props11.zIndex,
              s = _this$props11.height;
          return {
            bottom: e,
            left: t,
            right: o,
            top: i,
            zIndex: r,
            maxWidth: n,
            height: s
          };
        }
      }]);

      return d;
    }(o.PureComponent);

    var u = n(86431),
        p = n(76594),
        h = n(37160);

    function m(e, t, n, o) {
      return e + t > o && (e = o - t), e < n && (e = n), e;
    }

    function f(e) {
      return {
        x: (0, h.clamp)(e.x, 20, document.documentElement.clientWidth - 20),
        y: (0, h.clamp)(e.y, 20, window.innerHeight - 20)
      };
    }

    function g(e) {
      return {
        x: e.clientX,
        y: e.clientY
      };
    }

    function v(e) {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }

    var y =
    /*#__PURE__*/
    function () {
      function y(e, t) {
        var _this5 = this;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          boundByScreen: !0
        };

        _classCallCheck(this, y);

        this._drag = null, this._canBeTouchClick = !1, this._frame = null, this._onMouseDragStart = function (e) {
          if (0 !== e.button || _this5._isTargetNoDraggable(e)) return;
          e.preventDefault(), document.addEventListener("mousemove", _this5._onMouseDragMove), document.addEventListener("mouseup", _this5._onMouseDragEnd);
          var t = f(g(e));

          _this5._dragStart(t);
        }, this._onTouchDragStart = function (e) {
          if (_this5._isTargetNoDraggable(e)) return;
          _this5._canBeTouchClick = !0, e.preventDefault(), _this5._header.addEventListener("touchmove", _this5._onTouchDragMove, {
            passive: !1
          });
          var t = f(v(e));

          _this5._dragStart(t);
        }, this._onMouseDragEnd = function (e) {
          e.target instanceof Node && _this5._header.contains(e.target) && e.preventDefault(), document.removeEventListener("mousemove", _this5._onMouseDragMove), document.removeEventListener("mouseup", _this5._onMouseDragEnd), _this5._onDragStop();
        }, this._onTouchDragEnd = function (e) {
          _this5._header.removeEventListener("touchmove", _this5._onTouchDragMove), _this5._onDragStop(), _this5._canBeTouchClick && (_this5._canBeTouchClick = !1, function (e) {
            if (e instanceof SVGElement) {
              var _t5 = document.createEvent("SVGEvents");

              _t5.initEvent("click", !0, !0), e.dispatchEvent(_t5);
            }

            e instanceof HTMLElement && e.click();
          }(e.target));
        }, this._onMouseDragMove = function (e) {
          var t = f(g(e));

          _this5._dragMove(t);
        }, this._onTouchDragMove = function (e) {
          _this5._canBeTouchClick = !1, e.preventDefault();
          var t = f(v(e));

          _this5._dragMove(t);
        }, this._onDragStop = function () {
          _this5._drag = null, _this5._header.classList.remove("dragging"), _this5._options.onDragEnd && _this5._options.onDragEnd();
        }, this._dialog = e, this._header = t, this._options = n, this._header.addEventListener("mousedown", this._onMouseDragStart), this._header.addEventListener("touchstart", this._onTouchDragStart), this._header.addEventListener("touchend", this._onTouchDragEnd);
      }

      _createClass(y, [{
        key: "destroy",
        value: function destroy() {
          null !== this._frame && cancelAnimationFrame(this._frame), this._header.removeEventListener("mousedown", this._onMouseDragStart), document.removeEventListener("mouseup", this._onMouseDragEnd), this._header.removeEventListener("touchstart", this._onTouchDragStart), this._header.removeEventListener("touchend", this._onTouchDragEnd), document.removeEventListener("mouseleave", this._onMouseDragEnd);
        }
      }, {
        key: "updateOptions",
        value: function updateOptions(e) {
          this._options = e;
        }
      }, {
        key: "_dragStart",
        value: function _dragStart(e) {
          var t = this._dialog.getBoundingClientRect();

          this._drag = {
            startX: e.x,
            startY: e.y,
            finishX: e.x,
            finishY: e.y,
            dialogX: t.left,
            dialogY: t.top
          };
          var n = Math.round(t.left),
              o = Math.round(t.top);
          this._dialog.style.transform = "translate(".concat(n, "px, ").concat(o, "px)"), this._header.classList.add("dragging"), this._options.onDragStart && this._options.onDragStart();
        }
      }, {
        key: "_dragMove",
        value: function _dragMove(e) {
          var _this6 = this;

          if (this._drag) {
            if (this._drag.finishX = e.x, this._drag.finishY = e.y, null !== this._frame) return;
            this._frame = requestAnimationFrame(function () {
              if (_this6._drag) {
                var _t6 = e.x - _this6._drag.startX,
                    _n6 = e.y - _this6._drag.startY;

                _this6._moveDialog(_this6._drag.dialogX + _t6, _this6._drag.dialogY + _n6);
              }

              _this6._frame = null;
            });
          }
        }
      }, {
        key: "_moveDialog",
        value: function _moveDialog(e, t) {
          var n = this._dialog.getBoundingClientRect(),
              o = this._options.boundByScreen,
              i = m(e, n.width, o ? 0 : -1 / 0, o ? window.innerWidth : 1 / 0),
              r = m(t, n.height, o ? 0 : -1 / 0, o ? window.innerHeight : 1 / 0);

          this._dialog.style.transform = "translate(".concat(Math.round(i), "px, ").concat(Math.round(r), "px)");
        }
      }, {
        key: "_isTargetNoDraggable",
        value: function _isTargetNoDraggable(e) {
          return e.target instanceof Element && null !== e.target.closest("[data-disable-drag]");
        }
      }]);

      return y;
    }();

    var b = {
      vertical: 0
    };

    var _ =
    /*#__PURE__*/
    function () {
      function _(e, t) {
        var _this7 = this;

        _classCallCheck(this, _);

        this._frame = null, this._isFullscreen = !1, this._handleResize = function () {
          null === _this7._frame && (_this7._frame = requestAnimationFrame(function () {
            _this7.recalculateBounds(), _this7._frame = null;
          }));
        }, this._dialog = e, this._guard = t.guard || b, this._calculateDialogPosition = t.calculateDialogPosition, this._initialHeight = e.style.height, window.addEventListener("resize", this._handleResize);
      }

      _createClass(_, [{
        key: "updateOptions",
        value: function updateOptions(e) {
          this._guard = e.guard || b, this._calculateDialogPosition = e.calculateDialogPosition;
        }
      }, {
        key: "setFullscreen",
        value: function setFullscreen(e) {
          this._isFullscreen !== e && (this._isFullscreen = e, this.recalculateBounds());
        }
      }, {
        key: "centerAndFit",
        value: function centerAndFit() {
          var _this$getDialogsTopLe = this.getDialogsTopLeftCoordinates(),
              e = _this$getDialogsTopLe.x,
              t = _this$getDialogsTopLe.y,
              n = this._calcAvailableHeight(),
              o = this._calcDialogHeight();

          if (n === o) if (this._calculateDialogPosition) {
            var _this$_calculateDialo = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard),
                _e10 = _this$_calculateDialo.left,
                _t7 = _this$_calculateDialo.top;

            this._dialog.style.transform = "translate(".concat(Math.round(_e10), "px, ").concat(Math.round(_t7), "px)");
          } else this._dialog.style.height = o + "px";
          this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = "translate(".concat(e, "px, ").concat(t, "px)");
        }
      }, {
        key: "getDialogsTopLeftCoordinates",
        value: function getDialogsTopLeftCoordinates() {
          var _document$documentEle = document.documentElement,
              e = _document$documentEle.clientHeight,
              t = _document$documentEle.clientWidth,
              n = this._calcDialogHeight(),
              o = t / 2 - this._dialog.clientWidth / 2,
              i = e / 2 - n / 2;

          return {
            x: Math.round(o),
            y: Math.round(i)
          };
        }
      }, {
        key: "recalculateBounds",
        value: function recalculateBounds() {
          var e;
          var _document$documentEle2 = document.documentElement,
              t = _document$documentEle2.clientHeight,
              n = _document$documentEle2.clientWidth,
              o = this._guard.vertical,
              i = null === (e = this._calculateDialogPosition) || void 0 === e ? void 0 : e.call(this, this._dialog, {
            clientWidth: n,
            clientHeight: t
          }, {
            vertical: o
          });

          if (this._isFullscreen) {
            if (this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.width = "100%", this._dialog.style.height = "100%", this._dialog.style.transform = "none", i) {
              var _e11 = i.left,
                  _t8 = i.top,
                  _n7 = i.width,
                  _o3 = i.height;
              this._dialog.style.transform = "translate(".concat(Math.round(_e11), "px, ").concat(Math.round(_t8), "px)"), _n7 && (this._dialog.style.width = "".concat(_n7, "px"), this._dialog.style.minWidth = "unset"), _o3 && (this._dialog.style.height = "".concat(_o3, "px"), this._dialog.style.minHeight = "unset");
            }
          } else if (i) {
            var _e12 = i.left,
                _t9 = i.top;
            this._dialog.style.transform = "translate(".concat(Math.round(_e12), "px, ").concat(Math.round(_t9), "px)");
          } else {
            this._dialog.style.width = "", this._dialog.style.height = "";

            var _e13 = this._dialog.getBoundingClientRect(),
                _i5 = t - 2 * o,
                _r3 = m(_e13.left, _e13.width, 0, n),
                _s4 = m(_e13.top, _e13.height, o, t);

            this._dialog.style.top = "0px", this._dialog.style.left = "0px", this._dialog.style.transform = "translate(".concat(Math.round(_r3), "px, ").concat(Math.round(_s4), "px)"), this._dialog.style.height = _i5 < _e13.height ? _i5 + "px" : this._initialHeight;
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
          var e = this._calcAvailableHeight();

          return e < this._dialog.clientHeight ? e : this._dialog.clientHeight;
        }
      }, {
        key: "_calcAvailableHeight",
        value: function _calcAvailableHeight() {
          return document.documentElement.clientHeight - 2 * this._guard.vertical;
        }
      }]);

      return _;
    }();

    var E = n(65718),
        w = n(95711),
        C = n(99054),
        D = n(8326);
    D["tooltip-offset"];

    var S =
    /*#__PURE__*/
    function (_o$PureComponent5) {
      _inherits(S, _o$PureComponent5);

      function S(e) {
        var _this8;

        _classCallCheck(this, S);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(S).call(this, e)), _this8._dialog = null, _this8._cleanUpFunctions = [], _this8._prevActiveElement = null, _this8._handleDialogRef = function (e) {
          var t = _this8.props.reference;
          _this8._dialog = e, "function" == typeof t && t(e);
        }, _this8._handleFocus = function (e) {
          _this8._moveToTop();
        }, _this8._handleMouseDown = function (e) {
          _this8._moveToTop();
        }, _this8._handleTouchStart = function (e) {
          _this8._moveToTop();
        }, _this8.state = {
          canFitTooltip: !1
        };
        return _this8;
      }

      _createClass(S, [{
        key: "render",
        value: function render() {
          var _this9 = this;

          return o.createElement(w.PopupContext.Provider, {
            value: this
          }, o.createElement(p.OutsideEvent, {
            mouseDown: !0,
            touchStart: !0,
            handler: this.props.onClickOutside
          }, function (e) {
            return o.createElement("div", {
              ref: e,
              "data-outside-boundary-for": _this9.props.name,
              onFocus: _this9._handleFocus,
              onMouseDown: _this9._handleMouseDown,
              onTouchStart: _this9._handleTouchStart,
              "data-dialog-name": _this9.props["data-dialog-name"]
            }, o.createElement(d, _objectSpread({
              style: _this9._applyAnimationCSSVariables()
            }, _this9.props, {
              reference: _this9._handleDialogRef,
              className: i(D.dialog, _this9.props.className)
            }), !1, _this9.props.children));
          }));
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props12 = this.props,
              e = _this$props12.draggable,
              t = _this$props12.boundByScreen,
              n = _this$props12.onDragStart,
              o = (0, r.ensureNotNull)(this._dialog);

          if (e) {
            var _e14 = o.querySelector("[data-dragg-area]");

            if (_e14 && _e14 instanceof HTMLElement) {
              var _i6 = new y(o, _e14, {
                boundByScreen: Boolean(t),
                onDragStart: n
              });

              this._cleanUpFunctions.push(function () {
                return _i6.destroy();
              }), this._drag = _i6;
            }
          }

          this._prevActiveElement = document.activeElement, this.props.autofocus && !o.contains(document.activeElement) && o.focus(), (this._isFullScreen() || this.props.fixedBody) && (0, C.setFixedBodyState)(!0);
          var _this$props13 = this.props,
              i = _this$props13.guard,
              s = _this$props13.calculateDialogPosition;
          if (this.props.resizeHandler) this._resize = this.props.resizeHandler;else {
            var _e15 = new _(o, {
              guard: i,
              calculateDialogPosition: s
            });

            this._cleanUpFunctions.push(function () {
              return _e15.destroy();
            }), this._resize = _e15;
          }

          if (this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint), this.props.centeredOnMount && this._resize.centerAndFit(), this._resize.setFullscreen(this._isFullScreen()), this.props.shouldForceFocus) {
            if (this.props.onForceFocus) return void this.props.onForceFocus(o);
            o.focus();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this._resize) {
            var _this$props14 = this.props,
                _e16 = _this$props14.guard,
                _t10 = _this$props14.calculateDialogPosition;
            this._resize.updateOptions({
              guard: _e16,
              calculateDialogPosition: _t10
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
          var e;
          if (this.props.shouldReturnFocus && this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || (null === (e = this._dialog) || void 0 === e ? void 0 : e.contains(document.activeElement)))) try {
            this._prevActiveElement.focus({
              preventScroll: !0
            });
          } catch (e) {}
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._cleanUpFunctions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _e17 = _step.value;

              _e17();
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

          (this._isFullScreen() || this.props.fixedBody) && (0, C.setFixedBodyState)(!1);
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
        value: function _applyAppearanceAnimation(e) {
          if (this._resize && this._dialog) {
            var _t11 = e.x,
                _n8 = e.y,
                _this$_resize$getDial = this._resize.getDialogsTopLeftCoordinates(),
                _o4 = _this$_resize$getDial.x,
                _i7 = _this$_resize$getDial.y;

            this._dialog.style.setProperty("--animationTranslateStartX", "".concat(_t11, "px")), this._dialog.style.setProperty("--animationTranslateStartY", "".concat(_n8, "px")), this._dialog.style.setProperty("--animationTranslateEndX", "".concat(_o4, "px")), this._dialog.style.setProperty("--animationTranslateEndY", "".concat(_i7, "px")), this._dialog.classList.add(D.dialogAnimatedAppearance);
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

      return S;
    }(o.PureComponent);

    S.contextType = E.PortalContext, S.defaultProps = {
      boundByScreen: !0,
      draggable: !0,
      centeredOnMount: !0,
      shouldReturnFocus: !0
    };
    var x = (0, u.makeOverlapable)(S);
  },
  95276: function _(e, t, n) {
    "use strict";

    n.d(t, {
      ControlDisclosure: function ControlDisclosure() {
        return d;
      }
    });
    var o = n(50959),
        i = n(38528),
        r = n(26597),
        s = n(59054),
        a = n(36104),
        l = n(68335),
        c = n(66986);
    var d = o.forwardRef(function (e, t) {
      var n = e.id,
          d = e.tabIndex,
          u = e.disabled,
          p = e.highlight,
          h = e.intent,
          m = e.children,
          f = e.onClick,
          g = e.onFocus,
          v = e.onBlur,
          y = e.listboxAria,
          b = e.onListboxKeyDown,
          _ = _objectWithoutProperties(e, ["id", "tabIndex", "disabled", "highlight", "intent", "children", "onClick", "onFocus", "onBlur", "listboxAria", "onListboxKeyDown"]),
          E = (0, o.useRef)({
        "aria-labelledby": n
      }),
          _ref132 = (0, a.useControlDisclosure)({
        id: n,
        disabled: u,
        buttonTabIndex: d,
        intent: h,
        highlight: p,
        onFocus: g,
        onBlur: v,
        onClick: f
      }),
          w = _ref132.listboxId,
          C = _ref132.isOpened,
          D = _ref132.isFocused,
          S = _ref132.buttonTabIndex,
          x = _ref132.listboxTabIndex,
          P = _ref132.highlight,
          T = _ref132.intent,
          N = _ref132.onOpen,
          V = _ref132.close,
          M = _ref132.toggle,
          k = _ref132.buttonFocusBindings,
          B = _ref132.onButtonClick,
          R = _ref132.buttonRef,
          I = _ref132.listboxRef,
          F = _ref132.buttonAria,
          W = (0, r.useKeyboardToggle)(M),
          L = (0, r.useKeyboardClose)(C, V),
          A = (0, r.useKeyboardEventHandler)([W, L]);

      return o.createElement(s.ControlDisclosureView, _objectSpread({}, _, {}, k, {}, F, {
        id: n,
        role: "button",
        tabIndex: S,
        disabled: u,
        isOpened: C,
        isFocused: D,
        ref: (0, i.useMergedRefs)([R, t]),
        highlight: P,
        intent: T,
        onClose: V,
        onOpen: N,
        onClick: B,
        onKeyDown: A,
        listboxId: w,
        listboxTabIndex: x,
        listboxReference: I,
        listboxAria: null != y ? y : E.current,
        onListboxKeyDown: function onListboxKeyDown(e) {
          if (27 === (0, l.hashFromEvent)(e)) return e.preventDefault(), void V();
          null == b || b(e);
        }
      }), m, o.createElement("span", {
        className: c.invisibleFocusHandler,
        tabIndex: 0,
        "aria-hidden": !0,
        onFocus: function onFocus() {
          return V();
        }
      }));
    });
    d.displayName = "ControlDisclosure";
  },
  90692: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MatchMedia: function MatchMedia() {
        return i;
      }
    });
    var o = n(50959);

    var i =
    /*#__PURE__*/
    function (_o$PureComponent6) {
      _inherits(i, _o$PureComponent6);

      function i(e) {
        var _this10;

        _classCallCheck(this, i);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(i).call(this, e)), _this10._handleChange = function () {
          _this10.forceUpdate();
        }, _this10.state = {
          query: window.matchMedia(_this10.props.rule)
        };
        return _this10;
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
    }(o.PureComponent);
  },
  64706: function _(e, t, n) {
    "use strict";

    n.d(t, {
      MenuContext: function MenuContext() {
        return o;
      }
    });
    var o = n(50959).createContext(null);
  },
  27317: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DEFAULT_MENU_THEME: function DEFAULT_MENU_THEME() {
        return g;
      },
      Menu: function Menu() {
        return v;
      }
    });
    var o = n(50959),
        i = n(97754),
        r = n.n(i),
        s = n(50151),
        a = n(37160),
        l = n(21861),
        c = n(60508),
        d = n(59064),
        u = n(67961),
        p = n(4741),
        h = n(83021),
        m = n(64706),
        f = n(40191);
    var g = f;

    var v =
    /*#__PURE__*/
    function (_o$PureComponent7) {
      _inherits(v, _o$PureComponent7);

      function v(e) {
        var _this11;

        _classCallCheck(this, v);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e)), _this11._containerRef = null, _this11._scrollWrapRef = null, _this11._raf = null, _this11._scrollRaf = null, _this11._scrollTimeout = void 0, _this11._manager = new u.OverlapManager(), _this11._hotkeys = null, _this11._scroll = 0, _this11._handleContainerRef = function (e) {
          _this11._containerRef = e, _this11.props.reference && ("function" == typeof _this11.props.reference && _this11.props.reference(e), "object" == _typeof(_this11.props.reference) && (_this11.props.reference.current = e));
        }, _this11._handleScrollWrapRef = function (e) {
          _this11._scrollWrapRef = e, "function" == typeof _this11.props.scrollWrapReference && _this11.props.scrollWrapReference(e), "object" == _typeof(_this11.props.scrollWrapReference) && (_this11.props.scrollWrapReference.current = e);
        }, _this11._handleCustomRemeasureDelegate = function () {
          _this11._resizeForced(), _this11._handleMeasure();
        }, _this11._handleMeasure = function () {
          var _ref133 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref133.callback,
              t = _ref133.forceRecalcPosition;

          var n, o, i, r, l, c, d, u, p, h, m, f;
          if (_this11.state.isMeasureValid && !t) return;
          var g = _this11.props.position,
              v = (0, s.ensureNotNull)(_this11._containerRef);
          var y = v.getBoundingClientRect();
          var b = document.documentElement.clientHeight,
              _ = document.documentElement.clientWidth,
              E = null !== (n = _this11.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
          var w = b - 0 - E;
          var C = y.height > w;

          if (C) {
            (0, s.ensureNotNull)(_this11._scrollWrapRef).style.overflowY = "scroll", y = v.getBoundingClientRect();
          }

          var _y3 = y,
              D = _y3.width,
              S = _y3.height,
              x = "function" == typeof g ? g(D, S, _, b) : g,
              P = null !== (i = null === (o = null == x ? void 0 : x.indentFromWindow) || void 0 === o ? void 0 : o.left) && void 0 !== i ? i : 0,
              T = _ - (null !== (r = x.overrideWidth) && void 0 !== r ? r : D) - (null !== (c = null === (l = null == x ? void 0 : x.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== c ? c : 0),
              N = (0, a.clamp)(x.x, P, Math.max(P, T)),
              V = (null !== (u = null === (d = null == x ? void 0 : x.indentFromWindow) || void 0 === d ? void 0 : d.top) && void 0 !== u ? u : 0) + E,
              M = b - (null !== (p = x.overrideHeight) && void 0 !== p ? p : S) - (null !== (m = null === (h = null == x ? void 0 : x.indentFromWindow) || void 0 === h ? void 0 : h.bottom) && void 0 !== m ? m : 0);
          var k = (0, a.clamp)(x.y, V, Math.max(V, M));
          if (x.forbidCorrectYCoord && k < x.y && (w -= x.y - k, k = x.y), t && void 0 !== _this11.props.closeOnScrollOutsideOffset && x.y <= _this11.props.closeOnScrollOutsideOffset) return void _this11._handleGlobalClose(!0);
          var B = null !== (f = x.overrideHeight) && void 0 !== f ? f : C ? w : void 0;

          _this11.setState({
            appearingMenuHeight: t ? _this11.state.appearingMenuHeight : B,
            appearingMenuWidth: t ? _this11.state.appearingMenuWidth : x.overrideWidth,
            appearingPosition: {
              x: N,
              y: k
            },
            isMeasureValid: !0
          }, function () {
            _this11._restoreScrollPosition(), e && e();
          });
        }, _this11._restoreScrollPosition = function () {
          var e = document.activeElement,
              t = (0, s.ensureNotNull)(_this11._containerRef);
          if (null !== e && t.contains(e)) try {
            e.scrollIntoView();
          } catch (e) {} else (0, s.ensureNotNull)(_this11._scrollWrapRef).scrollTop = _this11._scroll;
        }, _this11._resizeForced = function () {
          _this11.setState({
            appearingMenuHeight: void 0,
            appearingMenuWidth: void 0,
            appearingPosition: void 0,
            isMeasureValid: void 0
          });
        }, _this11._resize = function () {
          null === _this11._raf && (_this11._raf = requestAnimationFrame(function () {
            _this11.setState({
              appearingMenuHeight: void 0,
              appearingMenuWidth: void 0,
              appearingPosition: void 0,
              isMeasureValid: void 0
            }), _this11._raf = null;
          }));
        }, _this11._handleGlobalClose = function (e) {
          _this11.props.onClose(e);
        }, _this11._handleSlot = function (e) {
          _this11._manager.setContainer(e);
        }, _this11._handleScroll = function () {
          _this11._scroll = (0, s.ensureNotNull)(_this11._scrollWrapRef).scrollTop;
        }, _this11._handleScrollOutsideEnd = function () {
          clearTimeout(_this11._scrollTimeout), _this11._scrollTimeout = setTimeout(function () {
            _this11._handleMeasure({
              forceRecalcPosition: !0
            });
          }, 80);
        }, _this11._handleScrollOutside = function (e) {
          e.target !== _this11._scrollWrapRef && (_this11._handleScrollOutsideEnd(), null === _this11._scrollRaf && (_this11._scrollRaf = requestAnimationFrame(function () {
            _this11._handleMeasure({
              forceRecalcPosition: !0
            }), _this11._scrollRaf = null;
          })));
        }, _this11.state = {};
        return _this11;
      }

      _createClass(v, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this12 = this;

          this._handleMeasure({
            callback: this.props.onOpen
          });

          var _this$props15 = this.props,
              _this$props15$customC = _this$props15.customCloseDelegate,
              e = _this$props15$customC === void 0 ? d.globalCloseDelegate : _this$props15$customC,
              t = _this$props15.customRemeasureDelegate;
          e.subscribe(this, this._handleGlobalClose), null == t || t.subscribe(null, this._handleCustomRemeasureDelegate), window.addEventListener("resize", this._resize);
          var n = null !== this.context;
          this._hotkeys || n || (this._hotkeys = p.createGroup({
            desc: "Popup menu"
          }), this._hotkeys.add({
            desc: "Close",
            hotkey: 27,
            handler: function handler() {
              _this12.props.onKeyboardClose && _this12.props.onKeyboardClose(), _this12._handleGlobalClose();
            }
          })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
            capture: !0
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this._handleMeasure();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$props16 = this.props,
              _this$props16$customC = _this$props16.customCloseDelegate,
              e = _this$props16$customC === void 0 ? d.globalCloseDelegate : _this$props16$customC,
              t = _this$props16.customRemeasureDelegate;
          e.unsubscribe(this, this._handleGlobalClose), null == t || t.unsubscribe(null, this._handleCustomRemeasureDelegate), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
            capture: !0
          }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props17 = this.props,
              e = _this$props17.id,
              t = _this$props17.role,
              n = _this$props17["aria-label"],
              i = _this$props17["aria-labelledby"],
              s = _this$props17["aria-activedescendant"],
              a = _this$props17["aria-hidden"],
              d = _this$props17["aria-describedby"],
              u = _this$props17["aria-invalid"],
              p = _this$props17.children,
              g = _this$props17.minWidth,
              _this$props17$theme = _this$props17.theme,
              v = _this$props17$theme === void 0 ? f : _this$props17$theme,
              b = _this$props17.className,
              _ = _this$props17.maxHeight,
              E = _this$props17.onMouseOver,
              w = _this$props17.onMouseOut,
              C = _this$props17.onKeyDown,
              D = _this$props17.onFocus,
              S = _this$props17.onBlur,
              _this$state = this.state,
              x = _this$state.appearingMenuHeight,
              P = _this$state.appearingMenuWidth,
              T = _this$state.appearingPosition,
              N = _this$state.isMeasureValid,
              V = {
            "--ui-kit-menu-max-width": "".concat(T && T.x, "px"),
            maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)"
          };
          return o.createElement(m.MenuContext.Provider, {
            value: this
          }, o.createElement(h.SubmenuHandler, null, o.createElement(c.SlotContext.Provider, {
            value: this._manager
          }, o.createElement("div", {
            id: e,
            role: t,
            "aria-label": n,
            "aria-labelledby": i,
            "aria-activedescendant": s,
            "aria-hidden": a,
            "aria-describedby": d,
            "aria-invalid": u,
            className: r()(b, v.menuWrap, !N && v.isMeasuring),
            style: _objectSpread({
              height: x,
              left: T && T.x,
              minWidth: g,
              position: "fixed",
              top: T && T.y,
              width: P
            }, this.props.limitMaxWidth && V),
            "data-name": this.props["data-name"],
            ref: this._handleContainerRef,
            onScrollCapture: this.props.onScroll,
            onContextMenu: l.preventDefaultForContextMenu,
            tabIndex: this.props.tabIndex,
            onMouseOver: E,
            onMouseOut: w,
            onKeyDown: C,
            onFocus: D,
            onBlur: S
          }, o.createElement("div", {
            className: r()(v.scrollWrap, !this.props.noMomentumBasedScroll && v.momentumBased),
            style: {
              overflowY: void 0 !== x ? "scroll" : "auto",
              maxHeight: _
            },
            onScrollCapture: this._handleScroll,
            ref: this._handleScrollWrapRef
          }, o.createElement(y, {
            className: v.menuBox
          }, p)))), o.createElement(c.Slot, {
            reference: this._handleSlot
          })));
        }
      }, {
        key: "update",
        value: function update(e) {
          e ? this._resizeForced() : this._resize();
        }
      }, {
        key: "focus",
        value: function focus(e) {
          var t;
          null === (t = this._containerRef) || void 0 === t || t.focus(e);
        }
      }, {
        key: "blur",
        value: function blur() {
          var e;
          null === (e = this._containerRef) || void 0 === e || e.blur();
        }
      }]);

      return v;
    }(o.PureComponent);

    function y(e) {
      var t = (0, s.ensureNotNull)((0, o.useContext)(h.SubmenuContext)),
          n = o.useRef(null);
      return o.createElement("div", {
        ref: n,
        className: e.className,
        onMouseOver: function onMouseOver(e) {
          if (!(null !== t.current && e.target instanceof Node && (o = e.target, null === (i = n.current) || void 0 === i ? void 0 : i.contains(o)))) return;
          var o, i;
          t.isSubmenuNode(e.target) || t.setCurrent(null);
        },
        "data-name": "menu-inner"
      }, e.children);
    }

    v.contextType = h.SubmenuContext;
  },
  76594: function _(e, t, n) {
    "use strict";

    n.d(t, {
      OutsideEvent: function OutsideEvent() {
        return i;
      }
    });
    var o = n(36383);

    function i(e) {
      var t = e.children,
          n = _objectWithoutProperties(e, ["children"]);

      return t((0, o.useOutsideEvent)(n));
    }
  },
  86431: function _(e, t, n) {
    "use strict";

    n.d(t, {
      makeOverlapable: function makeOverlapable() {
        return r;
      }
    });
    var o = n(50959),
        i = n(65718);

    function r(e) {
      return (
        /*#__PURE__*/
        function (_o$PureComponent8) {
          _inherits(_class, _o$PureComponent8);

          function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
          }

          _createClass(_class, [{
            key: "render",
            value: function render() {
              var _this$props18 = this.props,
                  t = _this$props18.isOpened,
                  n = _this$props18.root;
              if (!t) return null;
              var r = o.createElement(e, _objectSpread({}, this.props, {
                zIndex: 150
              }));
              return "parent" === n ? r : o.createElement(i.Portal, null, r);
            }
          }]);

          return _class;
        }(o.PureComponent)
      );
    }
  },
  29197: function _(e, t, n) {
    "use strict";

    n.d(t, {
      CloseDelegateContext: function CloseDelegateContext() {
        return r;
      }
    });
    var o = n(50959),
        i = n(59064);
    var r = o.createContext(i.globalCloseDelegate);
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
    var o = n(50959),
        i = n(962),
        r = n(36174),
        s = n(67961),
        a = n(60508);

    var l =
    /*#__PURE__*/
    function (_o$PureComponent9) {
      _inherits(l, _o$PureComponent9);

      function l() {
        var _this13;

        _classCallCheck(this, l);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments)), _this13._uuid = (0, r.guid)();
        return _this13;
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

          return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", i.createPortal(o.createElement(c.Provider, {
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
    }(o.PureComponent);

    l.contextType = a.SlotContext;
    var c = o.createContext(null);
  },
  96040: function _(e, t, n) {
    "use strict";

    n.d(t, {
      RemoveButton: function RemoveButton() {
        return c;
      }
    });
    var o = n(44352),
        i = n(50959),
        r = n(97754),
        s = n(9745),
        a = n(33765),
        l = n(27306);

    function c(e) {
      var t = e.className,
          c = e.isActive,
          d = e.onClick,
          u = e.onMouseDown,
          p = e.title,
          h = e.hidden,
          _e$dataName = e["data-name"],
          m = _e$dataName === void 0 ? "remove-button" : _e$dataName,
          f = _objectWithoutProperties(e, ["className", "isActive", "onClick", "onMouseDown", "title", "hidden", "data-name"]);

      return i.createElement(s.Icon, _objectSpread({}, f, {
        "data-name": m,
        className: r(l.button, "apply-common-tooltip", c && l.active, h && l.hidden, t),
        icon: a,
        onClick: d,
        onMouseDown: u,
        title: p || o.t(null, void 0, n(34596))
      }));
    }
  },
  60508: function _(e, t, n) {
    "use strict";

    n.d(t, {
      Slot: function Slot() {
        return i;
      },
      SlotContext: function SlotContext() {
        return r;
      }
    });
    var o = n(50959);

    var i =
    /*#__PURE__*/
    function (_o$Component) {
      _inherits(i, _o$Component);

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
          return o.createElement("div", {
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
    }(o.Component);

    var r = o.createContext(null);
  },
  12811: function _(e, t, n) {
    "use strict";

    n.d(t, {
      HorizontalAttachEdge: function HorizontalAttachEdge() {
        return i;
      },
      HorizontalDropDirection: function HorizontalDropDirection() {
        return s;
      },
      VerticalAttachEdge: function VerticalAttachEdge() {
        return o;
      },
      VerticalDropDirection: function VerticalDropDirection() {
        return r;
      },
      getPopupPositioner: function getPopupPositioner() {
        return c;
      }
    });
    var o,
        i,
        r,
        s,
        a = n(50151);
    !function (e) {
      e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom", e[e.AutoStrict = 2] = "AutoStrict";
    }(o || (o = {})), function (e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right";
    }(i || (i = {})), function (e) {
      e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop";
    }(r || (r = {})), function (e) {
      e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft";
    }(s || (s = {}));
    var l = {
      verticalAttachEdge: o.Bottom,
      horizontalAttachEdge: i.Left,
      verticalDropDirection: r.FromTopToBottom,
      horizontalDropDirection: s.FromLeftToRight,
      verticalMargin: 0,
      horizontalMargin: 0,
      matchButtonAndListboxWidths: !1
    };

    function c(e, t) {
      return function (n, c, d, u) {
        var p, h;
        var m = (0, a.ensureNotNull)(e).getBoundingClientRect(),
            _t$horizontalAttachEd = t.horizontalAttachEdge,
            f = _t$horizontalAttachEd === void 0 ? l.horizontalAttachEdge : _t$horizontalAttachEd,
            _t$horizontalDropDire = t.horizontalDropDirection,
            g = _t$horizontalDropDire === void 0 ? l.horizontalDropDirection : _t$horizontalDropDire,
            _t$horizontalMargin = t.horizontalMargin,
            v = _t$horizontalMargin === void 0 ? l.horizontalMargin : _t$horizontalMargin,
            _t$verticalMargin = t.verticalMargin,
            y = _t$verticalMargin === void 0 ? l.verticalMargin : _t$verticalMargin,
            _t$matchButtonAndList = t.matchButtonAndListboxWidths,
            b = _t$matchButtonAndList === void 0 ? l.matchButtonAndListboxWidths : _t$matchButtonAndList;

        var _ = null !== (p = t.verticalAttachEdge) && void 0 !== p ? p : l.verticalAttachEdge,
            E = null !== (h = t.verticalDropDirection) && void 0 !== h ? h : l.verticalDropDirection;

        _ === o.AutoStrict && (u < m.y + m.height + y + c ? (_ = o.Top, E = r.FromBottomToTop) : (_ = o.Bottom, E = r.FromTopToBottom));
        var w = _ === o.Top ? -1 * y : y,
            C = f === i.Right ? m.right : m.left,
            D = _ === o.Top ? m.top : m.bottom,
            S = {
          x: C - (g === s.FromRightToLeft ? n : 0) + v,
          y: D - (E === r.FromBottomToTop ? c : 0) + w
        };
        return b && (S.overrideWidth = m.width), S;
      };
    }
  },
  3347: function _(e, t, n) {
    "use strict";

    n.d(t, {
      convertToDefinitionProperty: function convertToDefinitionProperty() {
        return r;
      },
      makeProxyDefinitionProperty: function makeProxyDefinitionProperty() {
        return i;
      }
    });
    var o = n(51768);

    function i(e, t, n) {
      var o = new Map(),
          i = void 0 !== t ? t[0] : function (e) {
        return e;
      },
          r = void 0 !== t ? void 0 !== t[1] ? t[1] : t[0] : function (e) {
        return e;
      },
          s = {
        value: function value() {
          return i(e.value());
        },
        setValue: function setValue(t) {
          e.setValue(r(t));
        },
        subscribe: function subscribe(t, n) {
          var i = function i(e) {
            n(s);
          };

          o.set(n, i), e.subscribe(t, i);
        },
        unsubscribe: function unsubscribe(t, n) {
          var i = o.get(n);
          i && (e.unsubscribe(t, i), o["delete"](n));
        },
        unsubscribeAll: function unsubscribeAll(t) {
          e.unsubscribeAll(t), o.clear();
        },
        destroy: function destroy() {
          e.release(), null == n || n();
        }
      };
      return s;
    }

    function r(e, t, n, r, s, a, l) {
      var c = i(t.weakReference(), r, a),
          d = void 0 !== r ? void 0 !== r[1] ? r[1] : r[0] : function (e) {
        return e;
      },
          u = null != s ? s : function (o) {
        return e.setProperty(t, d(o), n);
      };
      return c.setValue = function (e) {
        var t;
        l && (0, o.trackEvent)(l.category, l.event, null === (t = l.label) || void 0 === t ? void 0 : t.call(l, e)), u(e);
      }, c;
    }
  },
  43715: function _(e, t, n) {
    "use strict";

    n.d(t, {
      createLinePropertyDefinition: function createLinePropertyDefinition() {
        return l;
      }
    });
    var o = n(73436),
        i = n(79849);
    var r = [i.LINESTYLE_SOLID, i.LINESTYLE_DOTTED, i.LINESTYLE_DASHED],
        s = [1, 2, 3, 4],
        a = [o.LineEnd.Normal, o.LineEnd.Arrow];

    function l(e, t) {
      var n = _objectSpread({
        propType: "line",
        properties: e
      }, t);

      return void 0 !== n.properties.style && (n.styleValues = r), void 0 !== n.properties.width && (n.widthValues = s), void 0 === n.properties.leftEnd && void 0 === n.properties.rightEnd || void 0 !== n.endsValues || (n.endsValues = a), void 0 !== n.properties.value && void 0 === n.valueType && (n.valueType = 1), n;
    }
  },
  46141: function _(e, t, n) {
    "use strict";

    function o(e, t) {
      return _objectSpread({
        propType: "checkable",
        properties: e
      }, t);
    }

    function i(e, t, n) {
      return _objectSpread({
        propType: "checkableSet",
        properties: e,
        childrenDefinitions: n
      }, t);
    }

    function r(e, t) {
      return _objectSpread({
        propType: "color",
        properties: e,
        noAlpha: !1
      }, t);
    }

    n.d(t, {
      convertFromReadonlyWVToDefinitionProperty: function convertFromReadonlyWVToDefinitionProperty() {
        return A;
      },
      convertFromWVToDefinitionProperty: function convertFromWVToDefinitionProperty() {
        return L;
      },
      convertToDefinitionProperty: function convertToDefinitionProperty() {
        return F.convertToDefinitionProperty;
      },
      createCheckablePropertyDefinition: function createCheckablePropertyDefinition() {
        return o;
      },
      createCheckableSetPropertyDefinition: function createCheckableSetPropertyDefinition() {
        return i;
      },
      createColorPropertyDefinition: function createColorPropertyDefinition() {
        return r;
      },
      createCoordinatesPropertyDefinition: function createCoordinatesPropertyDefinition() {
        return S;
      },
      createEmojiPropertyDefinition: function createEmojiPropertyDefinition() {
        return M;
      },
      createLeveledLinePropertyDefinition: function createLeveledLinePropertyDefinition() {
        return d;
      },
      createLinePropertyDefinition: function createLinePropertyDefinition() {
        return s.createLinePropertyDefinition;
      },
      createNumberPropertyDefinition: function createNumberPropertyDefinition() {
        return u;
      },
      createOptionalTwoColorsPropertyDefinition: function createOptionalTwoColorsPropertyDefinition() {
        return D;
      },
      createOptionsPropertyDefinition: function createOptionsPropertyDefinition() {
        return p;
      },
      createPropertyDefinitionsGeneralGroup: function createPropertyDefinitionsGeneralGroup() {
        return R;
      },
      createPropertyDefinitionsLeveledLinesGroup: function createPropertyDefinitionsLeveledLinesGroup() {
        return I;
      },
      createRangePropertyDefinition: function createRangePropertyDefinition() {
        return P;
      },
      createSelectionCoordinatesPropertyDefinition: function createSelectionCoordinatesPropertyDefinition() {
        return x;
      },
      createSessionPropertyDefinition: function createSessionPropertyDefinition() {
        return V;
      },
      createStudyInputsPropertyDefinition: function createStudyInputsPropertyDefinition() {
        return k;
      },
      createSymbolPropertyDefinition: function createSymbolPropertyDefinition() {
        return N;
      },
      createTextPropertyDefinition: function createTextPropertyDefinition() {
        return w;
      },
      createTransparencyPropertyDefinition: function createTransparencyPropertyDefinition() {
        return T;
      },
      createTwoColorsPropertyDefinition: function createTwoColorsPropertyDefinition() {
        return C;
      },
      createTwoOptionsPropertyDefinition: function createTwoOptionsPropertyDefinition() {
        return h;
      },
      destroyDefinitions: function destroyDefinitions() {
        return K;
      },
      getColorDefinitionProperty: function getColorDefinitionProperty() {
        return Y;
      },
      getLockPriceScaleDefinitionProperty: function getLockPriceScaleDefinitionProperty() {
        return G;
      },
      getPriceScaleSelectionStrategyDefinitionProperty: function getPriceScaleSelectionStrategyDefinitionProperty() {
        return z;
      },
      getScaleRatioDefinitionProperty: function getScaleRatioDefinitionProperty() {
        return H;
      },
      getSymbolDefinitionProperty: function getSymbolDefinitionProperty() {
        return X;
      },
      isPropertyDefinitionsGroup: function isPropertyDefinitionsGroup() {
        return q;
      },
      makeProxyDefinitionProperty: function makeProxyDefinitionProperty() {
        return F.makeProxyDefinitionProperty;
      }
    });
    var s = n(43715),
        a = n(79849);
    var l = [a.LINESTYLE_SOLID, a.LINESTYLE_DOTTED, a.LINESTYLE_DASHED],
        c = [1, 2, 3, 4];

    function d(e, t) {
      var n = _objectSpread({
        propType: "leveledLine",
        properties: e
      }, t);

      return void 0 !== n.properties.style && (n.styleValues = l), void 0 !== n.properties.width && (n.widthValues = c), n;
    }

    function u(e, t) {
      return _objectSpread({
        propType: "number",
        properties: e,
        type: 1
      }, t);
    }

    function p(e, t) {
      return _objectSpread({
        propType: "options",
        properties: e
      }, t);
    }

    function h(e, t) {
      return _objectSpread({
        propType: "twoOptions",
        properties: e
      }, t);
    }

    var m = n(44352);

    var f = [{
      id: "bottom",
      value: "bottom",
      title: m.t(null, void 0, n(65994))
    }, {
      id: "middle",
      value: "middle",
      title: m.t(null, void 0, n(76476))
    }, {
      id: "top",
      value: "top",
      title: m.t(null, void 0, n(91757))
    }],
        g = [{
      id: "left",
      value: "left",
      title: m.t(null, void 0, n(19286))
    }, {
      id: "center",
      value: "center",
      title: m.t(null, void 0, n(72171))
    }, {
      id: "right",
      value: "right",
      title: m.t(null, void 0, n(21141))
    }],
        v = [{
      id: "horizontal",
      value: "horizontal",
      title: m.t(null, void 0, n(77405))
    }, {
      id: "vertical",
      value: "vertical",
      title: m.t(null, void 0, n(44085))
    }],
        y = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
      return {
        title: String(e),
        value: e
      };
    }),
        b = [1, 2, 3, 4],
        _ = m.t(null, void 0, n(92960)),
        E = m.t(null, void 0, n(90581));

    function w(e, t) {
      var n = _objectSpread({
        propType: "text",
        properties: e
      }, t, {
        isEditable: t.isEditable || !1
      });

      return void 0 !== n.properties.size && void 0 === n.sizeItems && (n.sizeItems = y), void 0 !== n.properties.alignmentVertical && void 0 === n.alignmentVerticalItems && (n.alignmentVerticalItems = f), void 0 !== n.properties.alignmentHorizontal && void 0 === n.alignmentHorizontalItems && (n.alignmentHorizontalItems = g), (n.alignmentVerticalItems || n.alignmentHorizontalItems) && void 0 === n.alignmentTitle && (n.alignmentTitle = _), void 0 !== n.properties.orientation && (void 0 === n.orientationItems && (n.orientationItems = v), void 0 === n.orientationTitle && (n.orientationTitle = E)), void 0 !== n.properties.borderWidth && void 0 === n.borderWidthItems && (n.borderWidthItems = b), n;
    }

    function C(e, t) {
      return _objectSpread({
        propType: "twoColors",
        properties: e,
        noAlpha1: !1,
        noAlpha2: !1
      }, t);
    }

    function D(e, t) {
      return _objectSpread({
        propType: "optionalTwoColors",
        properties: e,
        noAlpha1: !1,
        noAlpha2: !1
      }, t);
    }

    function S(e, t) {
      return _objectSpread({
        propType: "coordinates",
        properties: e
      }, t);
    }

    function x(e, t) {
      return _objectSpread({
        propType: "selectionCoordinates",
        properties: e
      }, t);
    }

    function P(e, t) {
      return _objectSpread({
        propType: "range",
        properties: e
      }, t);
    }

    function T(e, t) {
      return _objectSpread({
        propType: "transparency",
        properties: e
      }, t);
    }

    function N(e, t) {
      return _objectSpread({
        propType: "symbol",
        properties: e
      }, t);
    }

    function V(e, t) {
      return _objectSpread({
        propType: "session",
        properties: e
      }, t);
    }

    function M(e, t) {
      return _objectSpread({
        propType: "emoji",
        properties: e
      }, t);
    }

    function k(e, t) {
      return _objectSpread({
        propType: "studyInputs",
        properties: e
      }, t);
    }

    var B = n(97145);

    function R(e, t, n, o) {
      return {
        id: t,
        title: n,
        visible: o,
        groupType: "general",
        definitions: new B.WatchedValue(e)
      };
    }

    function I(e, t, n) {
      return {
        id: t,
        title: n,
        groupType: "leveledLines",
        definitions: new B.WatchedValue(e)
      };
    }

    var F = n(3347);

    function W(e, t, n) {
      var o = new Map(),
          i = void 0 !== t ? t[0] : function (e) {
        return e;
      },
          r = void 0 !== t ? void 0 !== t[1] ? t[1] : t[0] : function (e) {
        return e;
      },
          s = {
        value: function value() {
          return i(e.value());
        },
        setValue: function setValue(t) {
          var n;
          null === (n = e.setValue) || void 0 === n || n.call(e, r(t));
        },
        subscribe: function subscribe(t, n) {
          var i = function i() {
            n(s);
          };

          var r = o.get(t);
          void 0 === r ? (r = new Map(), r.set(n, i), o.set(t, r)) : r.set(n, i), e.subscribe(i);
        },
        unsubscribe: function unsubscribe(t, n) {
          var i = o.get(t);

          if (void 0 !== i) {
            var _t12 = i.get(n);

            void 0 !== _t12 && (e.unsubscribe(_t12), i["delete"](n));
          }
        },
        unsubscribeAll: function unsubscribeAll(t) {
          var n = o.get(t);
          void 0 !== n && (n.forEach(function (t, n) {
            e.unsubscribe(t);
          }), n.clear());
        }
      };
      return n && (s.destroy = function () {
        return n();
      }), s;
    }

    function L(e, t, n, o) {
      var i = W(t, o),
          r = void 0 !== o ? void 0 !== o[1] ? o[1] : o[0] : function (e) {
        return e;
      };
      return i.setValue = function (o) {
        return e.setWatchedValue(t, r(o), n);
      }, i;
    }

    function A(e, t) {
      return function (e, t, n, o) {
        var i = new Map();
        return W({
          subscribe: function subscribe(n, o) {
            var r = function r(e) {
              return n(t(e));
            };

            i.set(n, r), e.subscribe(r, o);
          },
          unsubscribe: function unsubscribe(t) {
            if (t) {
              var _n9 = i.get(t);

              _n9 && (e.unsubscribe(_n9), i["delete"](t));
            } else i.clear(), e.unsubscribe();
          },
          value: function value() {
            return t(e.value());
          }
        }, n, o);
      }(e, function (e) {
        return e;
      }, t, function () {
        return e.release();
      });
    }

    function z(e, t) {
      var n = (0, F.makeProxyDefinitionProperty)(t.weakReference());
      return n.setValue = function (t) {
        return e.setPriceScaleSelectionStrategy(t);
      }, n;
    }

    function G(e, t, n, o) {
      var i = (0, F.makeProxyDefinitionProperty)(t.weakReference());
      return i.setValue = function (t) {
        var i = {
          lockScale: t
        };
        e.setPriceScaleMode(i, n, o);
      }, i;
    }

    function H(e, t, n, o) {
      var i = (0, F.makeProxyDefinitionProperty)(t.weakReference(), o);
      return i.setValue = function (o) {
        e.setScaleRatioProperty(t, o, n);
      }, i;
    }

    var O = n(24377),
        U = n(87095),
        $ = n(49152);

    function J(e, t) {
      if ((0, U.isHexColor)(e)) {
        var _n10 = (0, O.parseRgb)(e);

        return (0, O.rgbaToString)((0, O.rgba)(_n10, (100 - t) / 100));
      }

      return e;
    }

    function Y(e, t, n, o, i) {
      var r;

      if (null !== n) {
        var _e18 = (0, $.combineProperty)(J, t.weakReference(), n.weakReference());

        r = (0, F.makeProxyDefinitionProperty)(_e18.ownership());
      } else r = (0, F.makeProxyDefinitionProperty)(t.weakReference(), [function () {
        return J(t.value(), 0);
      }, function (e) {
        return e;
      }]);

      return r.setValue = function (n) {
        i && e.beginUndoMacro(o), e.setProperty(t, n, o), i && e.endUndoMacro();
      }, r;
    }

    function X(e, t, n, o, i, r) {
      var s = [(a = n, l = t, function (e) {
        var t = a(l);

        if (e === l.value() && null !== t) {
          var _e19 = t.ticker || t.full_name;

          if (_e19) return _e19;
        }

        return e;
      }), function (e) {
        return e;
      }];
      var a, l;
      var c = (0, F.convertToDefinitionProperty)(e, t, i, s);
      r && (c.setValue = r);
      var d = new Map();
      c.subscribe = function (e, n) {
        var o = function o(e) {
          n(c);
        };

        d.set(n, o), t.subscribe(e, o);
      }, c.unsubscribe = function (e, n) {
        var o = d.get(n);
        o && (t.unsubscribe(e, o), d["delete"](n));
      };
      var u = {};
      return o.subscribe(u, function () {
        d.forEach(function (e, t) {
          t(c);
        });
      }), c.destroy = function () {
        o.unsubscribeAll(u), d.clear();
      }, c;
    }

    function q(e) {
      return e.hasOwnProperty("groupType");
    }

    function K(e) {
      e.forEach(function (e) {
        var t;

        if (e.hasOwnProperty("propType")) {
          Object.keys(e.properties).forEach(function (t) {
            var n = e.properties[t];
            void 0 !== n && void 0 !== n.destroy && n.destroy();
          });
        } else K(e.definitions.value()), null === (t = e.visible) || void 0 === t || t.destroy();
      });
    }
  },
  64420: function _(e, t, n) {
    "use strict";

    n.d(t, {
      getInputGroups: function getInputGroups() {
        return s;
      },
      isGroup: function isGroup() {
        return i;
      },
      isInputInlines: function isInputInlines() {
        return r;
      }
    });
    var o = n(50151);

    function i(e) {
      return e.hasOwnProperty("groupType");
    }

    function r(e) {
      return i(e) && "inline" === e.groupType;
    }

    function s(e) {
      var t = [],
          n = new Map(),
          i = new Map();
      return i.set(void 0, new Map()), e.forEach(function (e) {
        var r = e.group,
            s = e.inline;
        if (void 0 !== r || void 0 !== s) {
          if (void 0 !== r) {
            if (void 0 !== s) {
              if (n.has(r)) {
                var _t13 = (0, o.ensureDefined)(n.get(r));

                var l;
                i.has(_t13) ? l = (0, o.ensureDefined)(i.get(_t13)) : (l = new Map(), i.set(_t13, l)), a(e, "inline", s, l, _t13.children);
              } else {
                var _o5 = {
                  id: s,
                  groupType: "inline",
                  children: [e]
                },
                    _a3 = {
                  id: r,
                  groupType: "group",
                  children: [_o5]
                },
                    _l2 = new Map();

                _l2.set(s, _o5), i.set(_a3, _l2), n.set(r, _a3), t.push(_a3);
              }
            } else a(e, "group", r, n, t);
          } else {
            var _n11 = (0, o.ensureDefined)(i.get(void 0));

            a(e, "inline", (0, o.ensureDefined)(s), _n11, t);
          }
        } else t.push(e);
      }), t;
    }

    function a(e, t, n, i, r) {
      if (i.has(n)) (0, o.ensureDefined)(i.get(n)).children.push(e);else {
        var _o6 = {
          id: n,
          groupType: t,
          children: [e]
        };
        i.set(n, _o6), r.push(_o6);
      }
    }
  },
  44996: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>';
  },
  33765: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
  },
  23851: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 13h5v1H4v-1zM12 13h5v1h-5v-1zM20 13h5v1h-5v-1z"/></svg>';
  },
  57740: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><circle cx="9" cy="14" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="14" r="1"/><circle cx="24" cy="14" r="1"/></svg>';
  },
  80427: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M5.5 7a.5.5 0 0 0 0 1h17a.5.5 0 0 0 0-1h-17Zm0 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm7 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm6.5.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM7 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>';
  },
  501: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4 13.5h20"/></svg>';
  },
  98853: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 13.5H24m-19.5 0L8 17m-3.5-3.5L8 10"/></svg>';
  },
  43382: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 13.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0H24"/></svg>';
  },
  8295: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 21h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3c2 0 4 1 4 3 0 1 0 2-1.5 3 1.5.5 2.5 2 2.5 4 0 2.75-2.638 4-5 4zM12 9l.004 3c.39.026.82 0 1.25 0C14.908 12 16 11.743 16 10.5c0-1.1-.996-1.5-2.5-1.5-.397 0-.927-.033-1.5 0zm0 5v5h1.5c1.5 0 3.5-.5 3.5-2.5S15 14 13.5 14c-.5 0-.895-.02-1.5 0z"/></svg>';
  },
  29285: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M12.143 20l1.714-12H12V7h5v1h-2.143l-1.714 12H15v1h-5v-1h2.143z"/></svg>';
  }
}]);