"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[2616], {
  50765: function _(t, e, i) {
    i.r(e), i.d(e, {
      svgRenderer: function svgRenderer() {
        return S;
      }
    });
    var s = i(50151),
        r = i(59224);
    var n = (0, r.getLogger)("Chart.SvgParser");

    function o(t, e) {
      var i = t.split(/[,\s]/).map(function (t) {
        return parseFloat(t.trim());
      });
      var s = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t = _step.value;
          if (!Number.isFinite(_t) && s < e) return null;
          s += 1;
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

      return i;
    }

    var l = /([a-zA-Z]+)\((.*)\)/g;

    function a(t) {
      var e;
      var i = null === (e = t.getAttribute("transform")) || void 0 === e ? void 0 : e.toLowerCase();
      if (void 0 === i) return null;
      var s = [];
      var r;
      l.lastIndex = 0;

      do {
        if (r = l.exec(i), null !== r) {
          var _t2 = r[1],
              _e = r[2];

          switch (_t2) {
            case "matrix":
              var _i = o(_e, 6);

              null !== _i && s.push({
                type: _t2,
                a: _i[0],
                b: _i[1],
                c: _i[2],
                d: _i[3],
                e: _i[4],
                f: _i[5]
              });
              break;

            case "rotate":
              var _r = o(_e, 1);

              null !== _r && s.push({
                type: _t2,
                a: _r[0],
                x: _r[1],
                y: _r[2]
              });
              break;

            case "translate":
              var _l = o(_e, 1);

              null !== _l && s.push({
                type: _t2,
                x: _l[0],
                y: _l[1]
              });
              break;

            case "scale":
              var _a = o(_e, 1);

              null !== _a && s.push({
                type: _t2,
                x: _a[0],
                y: _a[1]
              });
              break;

            default:
              n.logWarn("Unsupported transform operation: ".concat(_t2));
          }
        }
      } while (null !== r);

      return 0 === s.length ? null : s;
    }

    function c(t, e) {
      var i, s;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _r2 = _step2.value;

          switch (_r2.type) {
            case "matrix":
              t.transform(_r2.a, _r2.b, _r2.c, _r2.d, _r2.e, _r2.f);
              break;

            case "rotate":
              void 0 !== _r2.x && void 0 !== _r2.y && t.translate(_r2.x, _r2.y), t.rotate(_r2.a * Math.PI / 180), void 0 !== _r2.x && void 0 !== _r2.y && t.translate(-_r2.x, -_r2.y);
              break;

            case "scale":
              t.scale(_r2.x, null !== (i = _r2.y) && void 0 !== i ? i : _r2.x);
              break;

            case "translate":
              t.translate(_r2.x, null !== (s = _r2.y) && void 0 !== s ? s : 0);
          }
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

    function u(t, e) {
      var i;
      return parseFloat(null !== (i = t.getAttribute(e)) && void 0 !== i ? i : "");
    }

    var h = /^url\(#(.*)\)/;

    function g(t) {
      var e, i;
      return null !== (i = null === (e = h.exec(t)) || void 0 === e ? void 0 : e[1]) && void 0 !== i ? i : null;
    }

    function d(t, e, i) {
      var r = {},
          n = t.getAttribute("fill");

      if (null !== n) {
        var _t3 = g(n);

        r.getFillStyle = null !== _t3 ? function (i) {
          return (0, s.ensureDefined)(e.getStyle(_t3, i));
        } : function (t) {
          return n;
        };
      }

      var o = t.getAttribute("stroke");

      if (null !== o) {
        var _t4 = g(o);

        r.getStrokeStyle = null !== _t4 ? function (i) {
          return (0, s.ensureDefined)(e.getStyle(_t4, i));
        } : function (t) {
          return o;
        };
      }

      var l = u(t, "stroke-width");
      Number.isFinite(l) && (r.strokeWidth = l);
      var c = u(t, "opacity");
      Number.isFinite(c) && (r.fillOpacity = c, r.strokeOpacity = c);
      var h = u(t, "stroke-opacity");
      Number.isFinite(h) && (r.strokeOpacity = h);
      var d = u(t, "fill-opacity");

      if (Number.isFinite(d) && (r.fillOpacity = d), i) {
        var _e2 = a(t);

        null !== _e2 && (r.transform = _e2);
      }

      return r;
    }

    var p =
    /*#__PURE__*/
    function () {
      function p(t) {
        _classCallCheck(this, p);

        this._transformOperations = t;
      }

      _createClass(p, [{
        key: "apply",
        value: function apply(t, e) {
          null !== this._transformOperations ? (t.save(), c(t, this._transformOperations)) : t.restore();
        }
      }]);

      return p;
    }();

    var f =
    /*#__PURE__*/
    function () {
      function f(t, e, i) {
        _classCallCheck(this, f);

        this._styleData = _objectSpread({}, i, {}, d(t, e, !0));
      }

      _createClass(f, [{
        key: "apply",
        value: function apply(t, e) {
          if (!this._isValid()) return;
          var _this$_styleData = this._styleData,
              i = _this$_styleData.getFillStyle,
              s = _this$_styleData.getStrokeStyle,
              r = _this$_styleData.strokeWidth,
              n = _this$_styleData.transform,
              o = _this$_styleData.strokeOpacity,
              l = _this$_styleData.fillOpacity,
              a = void 0 !== n || void 0 !== o || void 0 !== l;
          a && (t.save(), void 0 !== n && c(t, n)), this._render(t);
          var u = null == i ? void 0 : i(t);
          "none" !== u && (e.doNotApplyColors || (void 0 !== l && (t.globalAlpha = l), t.fillStyle = null != u ? u : "black"), this._fill(t));
          var h = null == s ? void 0 : s(t);
          void 0 !== h && "none" !== h && (void 0 !== r && (t.lineWidth = r), e.doNotApplyColors || (void 0 !== l && (t.globalAlpha = l), t.strokeStyle = h), this._stroke(t)), a && t.restore();
        }
      }, {
        key: "_fill",
        value: function _fill(t) {
          t.fill();
        }
      }, {
        key: "_stroke",
        value: function _stroke(t) {
          t.stroke();
        }
      }]);

      return f;
    }();

    var y =
    /*#__PURE__*/
    function (_f) {
      _inherits(y, _f);

      function y(t, e, i) {
        var _this;

        _classCallCheck(this, y);

        var s;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this, t, e, i));
        var r = t.getAttribute("d");
        _this._path = null !== r ? new Path2D(r) : null, _this._fillRule = null !== (s = t.getAttribute("fill-rule")) && void 0 !== s ? s : void 0;
        return _this;
      }

      _createClass(y, [{
        key: "_fill",
        value: function _fill(t) {
          t.fill((0, s.ensureNotNull)(this._path), this._fillRule);
        }
      }, {
        key: "_stroke",
        value: function _stroke(t) {
          t.stroke((0, s.ensureNotNull)(this._path));
        }
      }, {
        key: "_render",
        value: function _render(t) {}
      }, {
        key: "_isValid",
        value: function _isValid() {
          return null !== this._path;
        }
      }]);

      return y;
    }(f);

    var v =
    /*#__PURE__*/
    function (_f2) {
      _inherits(v, _f2);

      function v(t, e, i) {
        var _this2;

        _classCallCheck(this, v);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, t, e, i)), _this2._cx = u(t, "cx"), _this2._cy = u(t, "cy"), _this2._r = u(t, "r");
        return _this2;
      }

      _createClass(v, [{
        key: "_render",
        value: function _render(t) {
          t.beginPath(), t.arc(this._cx, this._cy, this._r, 0, 2 * Math.PI);
        }
      }, {
        key: "_isValid",
        value: function _isValid() {
          return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._r);
        }
      }]);

      return v;
    }(f);

    var _ =
    /*#__PURE__*/
    function (_f3) {
      _inherits(_, _f3);

      function _(t, e, i) {
        var _this3;

        _classCallCheck(this, _);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, t, e, i)), _this3._cx = u(t, "cx"), _this3._cy = u(t, "cy"), _this3._rx = u(t, "rx"), _this3._ry = u(t, "ry");
        return _this3;
      }

      _createClass(_, [{
        key: "_render",
        value: function _render(t) {
          t.beginPath(), t.ellipse(this._cx, this._cy, this._rx, this._ry, 0, 0, 2 * Math.PI);
        }
      }, {
        key: "_isValid",
        value: function _isValid() {
          return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._rx) && Number.isFinite(this._ry);
        }
      }]);

      return _;
    }(f);

    var x =
    /*#__PURE__*/
    function () {
      function x(t) {
        _classCallCheck(this, x);

        this._originalViewBox = t;
      }

      _createClass(x, [{
        key: "apply",
        value: function apply(t, e) {
          var i = e.targetViewBox;
          t.translate(i.x, i.y), t.scale(i.width / this._originalViewBox.width, i.height / this._originalViewBox.height), t.beginPath(), t.rect(0, 0, this._originalViewBox.width, this._originalViewBox.height), t.clip(), t.translate(-this._originalViewBox.x, -this._originalViewBox.y);
        }
      }]);

      return x;
    }();

    var b = (0, r.getLogger)("Chart.SvgParser");

    function m(t) {
      var e = t.getAttribute("gradientUnits");
      if ("objectBoundingBox" === e) return void b.logWarn("Unsupported linearGradient gradientUnits: ".concat(e));
      var i = [],
          s = t.getElementsByTagName("stop");

      for (var _t5 = 0; _t5 < s.length; ++_t5) {
        var _e3 = s[_t5],
            _r3 = u(_e3, "offset"),
            _n = _e3.getAttribute("stop-color");

        null !== _n && i.push([Number.isFinite(_r3) ? _r3 : 0, _n]);
      }

      var r = u(t, "x1"),
          n = u(t, "y1"),
          o = u(t, "x2"),
          l = u(t, "y2");
      return function (t) {
        var e = t.createLinearGradient(r, n, o, l);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = i[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _t6 = _step3.value;
            e.addColorStop(_t6[0], _t6[1]);
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

        return e;
      };
    }

    var w = (0, r.getLogger)("Chart.SvgParser");
    var k = new DOMParser(),
        N = (0, r.getLogger)("Chart.SvgParser");

    function F(t, e, i, s) {
      var r;
      var n = t.children;
      var o,
          l = s;
      "g" !== t.tagName && "svg" !== t.tagName || (l = _objectSpread({}, l, {}, d(t, i, !1)), o = null !== (r = a(t)) && void 0 !== r ? r : void 0), void 0 !== o && e.push(new p(o));

      for (var _t7 = 0; _t7 < n.length; ++_t7) {
        var _s = n[_t7];
        "defs" !== _s.tagName && F(_s, e, i, l);
      }

      switch (void 0 !== o && e.push(new p(null)), t.tagName) {
        case "g":
        case "svg":
        case "defs":
          break;

        case "path":
          e.push(new y(t, i, s));
          break;

        case "circle":
          e.push(new v(t, i, s));
          break;

        case "ellipse":
          e.push(new _(t, i, s));
          break;

        default:
          N.logWarn("Unsupported tag name: ".concat(t.tagName));
      }
    }

    function S(t) {
      var e = k.parseFromString(t, "application/xml"),
          i = [],
          r = e.getElementsByTagName("svg")[0],
          n = (0, s.ensureNotNull)(r.getAttribute("viewBox")).split(" ").map(parseFloat),
          o = {
        x: n[0],
        y: n[1],
        width: n[2],
        height: n[3]
      };
      i.push(new x(o));
      var l = {
        getStyle: function getStyle() {}
      };
      var a = r.getElementsByTagName("defs");
      return a.length > 0 && (l = function (t) {
        var e = {},
            i = t.children;

        for (var _t8 = 0; _t8 < i.length; ++_t8) {
          var _s2 = i[_t8],
              _r4 = _s2.getAttribute("id");

          _r4 && ("linearGradient" === _s2.tagName ? e[_r4] = m(_s2) : w.logWarn("Unsupported defs tag: ".concat(_s2.tagName)));
        }

        var s = new WeakMap();
        return {
          getStyle: function getStyle(t, i) {
            var r = e[t];
            if (!r) return;
            var n = s.get(i);
            void 0 === n && (n = new Map(), s.set(i, n));
            var o = n.get(t);
            if (void 0 !== o) return o;
            var l = r(i);
            return n.set(t, l), l;
          }
        };
      }(a[0])), F(r, i, l), {
        viewBox: function viewBox() {
          return o;
        },
        render: function render(t, e) {
          t.save();
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = i[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _s3 = _step4.value;

              _s3.apply(t, e);
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

          t.restore();
        }
      };
    }
  }
}]);