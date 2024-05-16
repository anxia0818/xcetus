"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[507], {
  79797: function _(t, e, i) {
    i.d(e, {
      PolygonRenderer: function PolygonRenderer() {
        return p;
      }
    });
    var s = i(34026),
        r = i(4652),
        n = i(99031),
        a = i(73436),
        o = i(18807),
        l = i(87095),
        d = i(15187),
        h = i(45197),
        c = i(68441),
        u = i(79849);

    var p =
    /*#__PURE__*/
    function (_d$MediaCoordinatesPa) {
      _inherits(p, _d$MediaCoordinatesPa);

      function p(t) {
        var _this;

        _classCallCheck(this, p);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this._data = null, _this._backHittest = new o.HitTestResult(o.HitTarget.MovePointBackground), _this._points = [], _this._hittest = null != t ? t : new o.HitTestResult(o.HitTarget.MovePoint);
        return _this;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(t) {
          this._data = t, this._points = t.points;
        }
      }, {
        key: "hitTest",
        value: function hitTest(t) {
          if (null === this._data || void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable) return null;
          var e = Math.max((0, h.interactionTolerance)().line, Math.ceil(this._data.linewidth / 2)),
              i = this._points.length;

          if (1 === i) {
            return (0, s.pointInCircle)(t, this._points[0], e) ? this._hittest : null;
          }

          for (var _s = 1; _s < i; _s++) {
            var _i = this._points[_s - 1],
                _n = this._points[_s];
            if ((0, r.distanceToSegment)(_i, _n, t).distance <= e) return this._hittest;
          }

          if (this._data.filled && this._data.fillBackground && i > 0) {
            var _s2 = this._points[0],
                _n2 = this._points[i - 1];
            if ((0, r.distanceToSegment)(_s2, _n2, t).distance <= e) return this._hittest;
          }

          return this._data.filled && this._data.fillBackground && (0, s.pointInPolygon)(t, this._data.points) ? this._backHittest : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(t) {
          var e, i;
          var s = t.context,
              r = this._points.length;
          if (null === this._data || 0 === r) return;
          if (1 === r) return void this._drawPoint(s, this._points[0], this._data.linewidth / 2, this._data.color);
          s.beginPath();
          var o = this._data.linestyle === u.LINESTYLE_SOLID ? "round" : "butt",
              d = null !== (e = this._data.linecap) && void 0 !== e ? e : o;
          s.lineCap = d, s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth, s.lineJoin = null !== (i = this._data.linejoin) && void 0 !== i ? i : "round", (0, c.setLineStyle)(s, this._data.linestyle);
          var h = this._points[0];
          s.moveTo(h.x, h.y);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _t3 = _step.value;
              s.lineTo(_t3.x, _t3.y);
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

          if (this._data.filled && this._data.fillBackground && (s.fillStyle = (0, l.generateColor)(this._data.backcolor, this._data.transparency), s.fill()), this._data.filled && !this._data.skipClosePath && s.closePath(), r > 1) {
            if (this._data.leftend === a.LineEnd.Arrow) {
              var _t = this._correctArrowPoints(this._points[1], this._points[0], s.lineWidth, d);

              (0, n.drawArrow)(_t[0], _t[1], s, s.lineWidth, 1);
            }

            if (this._data.rightend === a.LineEnd.Arrow) {
              var _t2 = this._correctArrowPoints(this._points[r - 2], this._points[r - 1], s.lineWidth, d);

              (0, n.drawArrow)(_t2[0], _t2[1], s, s.lineWidth, 1);
            }
          }

          this._data.linewidth > 0 && s.stroke();
        }
      }, {
        key: "_drawPoint",
        value: function _drawPoint(t, e, i, s) {
          0 !== i && (t.beginPath(), t.fillStyle = s, t.arc(e.x, e.y, i, 0, 2 * Math.PI, !0), t.fill(), t.closePath());
        }
      }, {
        key: "_correctArrowPoints",
        value: function _correctArrowPoints(t, e, i, s) {
          var r = e.subtract(t),
              n = r.length();
          if ("butt" === s || n < 1) return [t, e];
          var a = n + i / 2;
          return [t, r.scaled(a / n).add(t)];
        }
      }]);

      return p;
    }(d.MediaCoordinatesPaneRenderer);
  },
  47372: function _(t, e, i) {
    i.r(e), i.d(e, {
      BackgroundPaneView: function BackgroundPaneView() {
        return l;
      }
    });
    var s = i(50151),
        r = i(19266),
        n = i(74359),
        a = i(87095);

    var o =
    /*#__PURE__*/
    function () {
      function o(t) {
        _classCallCheck(this, o);

        this._data = t;
      }

      _createClass(o, [{
        key: "hitTest",
        value: function hitTest(t) {
          return null;
        }
      }, {
        key: "draw",
        value: function draw(t, e) {}
      }, {
        key: "drawBackground",
        value: function drawBackground(t, e) {
          var i = this._data,
              s = (0, a.generateColor)(this._data.color, this._data.transparency),
              r = e.pixelRatio,
              o = Math.round(i.x1 * r),
              l = Math.round(i.x2 * r);
          (0, n.fillRect)(t, o, 0, l - o, e.physicalHeight, s);
        }
      }]);

      return o;
    }();

    var l =
    /*#__PURE__*/
    function () {
      function l(t, e, i) {
        _classCallCheck(this, l);

        this._data = [], this._invalidated = !0, this._provider = t, this._model = e, this._data = [];
      }

      _createClass(l, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
          var t = new r.CompositeRenderer();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e = _step2.value;
              t.append(new o(_e));
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

          return t;
        }
      }, {
        key: "_updateViewInternal",
        value: function _updateViewInternal() {
          var _this2 = this;

          this._data = [];

          var t = this._provider.priceScale(),
              e = this._model.timeScale();

          if (!t || t.isEmpty() || e.isEmpty()) return;

          var i = this._provider.graphics().backgrounds();

          if (0 === i.size) return;

          var r = this._model.timeScale().visibleBarsStrictRange();

          if (null === r) return;
          var n = r.firstBar(),
              a = r.lastBar(),
              o = (0, s.ensureDefined)(this._provider.properties().childs().graphics.childs().backgrounds);
          i.forEach(function (t, i) {
            var r = (0, s.ensureDefined)(o.childs()[i]).childs();
            if (!r.visible.value()) return;
            var l, d;
            t.forEach(function (t) {
              var i = null !== t.start ? t.start : (0, s.ensureNotNull)(e.points().range().value()).firstIndex,
                  o = t.stop;
              if (o < n || a < i) return;
              var h = e.indexToCoordinate(i) - .5 * e.barSpacing();
              var c = e.indexToCoordinate(o) + .5 * e.barSpacing();
              d === i - 1 && (h = l || h), l = c, d = o, h < 0 && c < 0 || h > e.width() && c > e.width() || _this2._data.push({
                x1: h,
                x2: c,
                color: r.color.value(),
                transparency: r.transparency.value()
              });
            });
          });
        }
      }]);

      return l;
    }();
  },
  21335: function _(t, e, i) {
    i.r(e), i.d(e, {
      HHistPaneView: function HHistPaneView() {
        return y;
      }
    });
    var s = i(24377),
        r = i(50151),
        n = i(18807),
        a = i(90164),
        o = i(19266),
        l = i(80657),
        d = i(86441),
        h = i(74359),
        c = i(98596),
        u = i(46501);

    function p(t, e) {
      return {
        min: Math.min(t, e),
        max: Math.max(t, e)
      };
    }

    var _ =
    /*#__PURE__*/
    function () {
      function _(t) {
        _classCallCheck(this, _);

        this._data = t;
      }

      _createClass(_, [{
        key: "hitTest",
        value: function hitTest(t, e) {
          var i = this._data;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            var _loop = function _loop() {
              var s = _step3.value;
              if (s.yRange.min >= t.y || t.y >= s.yRange.max) return "continue";
              var r = null;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = s.bars[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _o = _step4.value;
                  var _l = i.styles[_o.styleId];
                  if (!_l.visible) continue;
                  if (_l.location === a.HHistLocation.Absolute && (s.xRange.min >= t.x || t.x >= s.xRange.max)) continue;
                  null === r && (r = 0, s.bars.forEach(function (t) {
                    var e = t.subBarValues.reduce(function (t, e) {
                      return t + e;
                    });
                    r = Math.max(r, e);
                  }));

                  var _d = f(s.xRange, _l, e.cssWidth),
                      _h = _d.xBasePoint,
                      _c = _d.sign,
                      _u = _d.xRangeWidth,
                      _p = Math.max(_l.percentWidth * _u / 100 - _o.subBarValues.length, 0);

                  var _2 = _h;

                  for (var _e2 = 0; _e2 < _o.subBarValues.length; _e2++) {
                    var _i2 = _o.y,
                        _s3 = _o.y + _o.height,
                        _a = _2,
                        _l2 = _a + _c * (_p * _o.subBarValues[_e2] / r);

                    if (_2 = _l2, (t.x >= _a && t.x <= _l2 || t.x >= _l2 && t.x <= _a) && t.y >= _i2 && t.y <= _s3) return {
                      v: new n.HitTestResult(n.HitTarget.Regular)
                    };
                  }
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
            };

            for (var _iterator3 = i.histograms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _ret = _loop();

              switch (_ret) {
                case "continue":
                  continue;

                default:
                  if (_typeof(_ret) === "object") return _ret.v;
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

          return null;
        }
      }, {
        key: "draw",
        value: function draw(t, e) {
          var i = this._data,
              r = e.pixelRatio;
          t.save(), i.histograms.forEach(function (n) {
            if (i.histBoxBgColor) {
              t.beginPath(), t.fillStyle = i.histBoxBgColor;

              var _e3 = Math.round(n.xRange.min * r),
                  _s4 = Math.round(n.yRange.min * r),
                  _a2 = Math.round(n.xRange.max * r) - _e3,
                  _o2 = Math.round(n.yRange.max * r) - _s4;

              t.rect(_e3, _s4, _a2, _o2), t.fill();
            }

            var a = [];
            var o = 0,
                l = 0;
            n.bars.forEach(function (t) {
              var e = t.subBarValues.reduce(function (t, e) {
                return t + e;
              });
              o = Math.max(o, e), l += t.height;
            });

            var d = l / n.bars.length,
                h = function (t, e) {
              return Math.floor(t * e) >= 1 * e ? Math.floor(e) : 0;
            }(d, r),
                c = [];

            if (n.bars.forEach(function (s) {
              var l = i.styles[s.styleId];
              if (!l.visible) return;
              if (l.showValues && l.addToTotalValue) for (var _t4 = 0; _t4 < s.subBarValues.length; _t4++) {
                a[_t4] = (a[_t4] || 0) + s.subBarValues[_t4];
              }
              var d = f(n.xRange, l, e.cssWidth),
                  u = d.xBasePoint,
                  p = d.sign,
                  _ = d.xRangeWidth;
              if (s.y > e.cssHeight || s.y + s.height < 0) return;
              var m = Math.max(l.percentWidth * _ / 100 - s.subBarValues.length, 0);
              var x = u;

              for (var _e4 = 0; _e4 < s.subBarValues.length; _e4++) {
                var _i3 = s.y,
                    _n3 = s.y + s.height,
                    _a3 = x,
                    _d2 = _a3 + p * (m * s.subBarValues[_e4] / o);

                if (Math.abs(_d2 - _a3) < .5) continue;
                x = _d2, t.beginPath(), t.fillStyle = l.colors[_e4];

                var _c2 = Math.round(_a3 * r),
                    _u2 = Math.round(_i3 * r),
                    _3 = Math.round(_d2 * r) - _c2,
                    _f = Math.max(Math.round(_n3 * r) - _u2 - h, 1);

                t.rect(_c2, _u2, _3, _f), t.fill();
              }

              if (!l.showValues) return;
              var y = v(s.displayedValues, l.direction),
                  w = g(_, s.y, s.height, d, l, y);
              c.push(w);
            }), a.length > 0) {
              var _t5 = i.styles[n.bars[0].styleId],
                  _r = f(n.xRange, _t5, e.cssWidth),
                  _o3 = v(a, _t5.direction),
                  _l3 = n.bars[n.bars.length - 1],
                  _h2 = g(_r.xRangeWidth, _l3.y + _l3.height, d, _r, _t5, _o3);

              _h2.color = (0, s.shiftColor)(_h2.color, 1.5), c.push(_h2);
            }

            var u = Math.min.apply(Math, _toConsumableArray(c.map(function (t) {
              return t.fontSize;
            })));

            if (u >= 7.5) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = c[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var _i4 = _step5.value;
                  _i4.fontSize = u, m(t, e, _i4);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                    _iterator5["return"]();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }
          }), t.restore();
        }
      }]);

      return _;
    }();

    function f(t, e, i) {
      var s = e.location === a.HHistLocation.Absolute,
          r = e.location === a.HHistLocation.Relative,
          n = e.direction === a.HHistDirection.LeftToRight,
          o = e.direction === a.HHistDirection.RightToLeft;
      var l, d;
      if (s && n) l = t.min, d = 1;else if (s && o) l = t.max, d = -1;else if (r && n) l = 0, d = 1;else {
        if (!r || !o) throw new Error("Unknown location/direction values: ".concat(e.location, "/").concat(e.direction));
        l = i, d = -1;
      }
      var h;
      return {
        xBasePoint: l,
        sign: d,
        xRangeWidth: r ? i : (h = t).max - h.min
      };
    }

    function v(t, e) {
      e === a.HHistDirection.RightToLeft && (t = t.slice()).reverse();
      var i = new c.VolumeFormatter();
      return t.map(function (t) {
        return i.format(t);
      }).join("x");
    }

    function g(t, e, i, s, r, n) {
      var o = Math.min(Math.round(1.7 * t / n.length), Math.round(.6 * i)),
          l = r.direction === a.HHistDirection.LeftToRight ? "left" : "right",
          h = s.xBasePoint,
          c = s.sign,
          u = h + 3 * c,
          p = e + .7 * i;
      return {
        text: n,
        color: r.valuesColor,
        fontSize: o,
        align: l,
        point: new d.Point(u, p)
      };
    }

    function m(t, e, i) {
      var s = i.text,
          r = i.color,
          n = i.fontSize,
          a = i.align,
          o = i.point;
      t.font = "".concat(n, "px ").concat(u.CHART_FONT_FAMILY), t.fillStyle = r, t.textAlign = a, (0, h.drawScaled)(t, e.pixelRatio, e.pixelRatio, function () {
        return t.fillText(s, o.x, o.y);
      });
    }

    var x = i(87095);

    var y =
    /*#__PURE__*/
    function () {
      function y(t, e, i, s) {
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;

        _classCallCheck(this, y);

        this._invalidated = !0, this._histBoxBgStyle = null, this._provider = t, this._model = e, this._histBoxBgStyle = null != s ? s : null, this._extendToBarsEndings = r, this._alwaysVisible = n, this._rendererData = {
          histograms: [],
          styles: {}
        }, this._textData = [], this._hhistRenderer = new _(this._rendererData);
      }

      _createClass(y, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
          var t = new o.CompositeRenderer();
          t.append(this._hhistRenderer);
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this._textData[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _e5 = _step6.value;
              t.append(new l.TextRenderer(_e5, new n.HitTestResult(n.HitTarget.Regular)));
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return t;
        }
      }, {
        key: "_resetRenderersData",
        value: function _resetRenderersData() {
          this._rendererData.histograms = [], this._rendererData.styles = {}, this._rendererData.histBoxBgColor = void 0, this._textData = [];
        }
      }, {
        key: "_prepareStyles",
        value: function _prepareStyles() {
          var t, e;
          var i = (0, r.ensureDefined)(this._provider.graphicsInfo().hhists),
              s = Object.keys(i),
              n = (0, r.ensureDefined)(this._provider.properties().childs().graphics.childs().hhists),
              o = (null === (e = null === (t = this._provider.properties().child("inputs")) || void 0 === t ? void 0 : t.child("volume")) || void 0 === e ? void 0 : e.value()) === a.HHistVolumeMode.Delta;

          for (var _i5 = 0, _s5 = s; _i5 < _s5.length; _i5++) {
            var _t7 = _s5[_i5];

            var _e6 = (0, r.ensureDefined)(n.childs()[_t7]).childs(),
                _s6 = (0, r.ensureDefined)(i[_t7]);

            if (o) this._rendererData.styles[_t7 + "UpDominate"] = {
              colors: w(_e6.colors[0].value(), _e6.transparencies[0].value()),
              visible: _e6.visible.value(),
              percentWidth: _e6.percentWidth.value(),
              location: _s6.location,
              direction: _e6.direction.value(),
              showValues: _e6.showValues.value(),
              addToTotalValue: !1,
              valuesColor: _e6.valuesColor.value()
            }, this._rendererData.styles[_t7 + "DownDominate"] = {
              colors: w(_e6.colors[1].value(), _e6.transparencies[1].value()),
              visible: _e6.visible.value(),
              percentWidth: _e6.percentWidth.value(),
              location: _s6.location,
              direction: _e6.direction.value(),
              showValues: _e6.showValues.value(),
              addToTotalValue: !1,
              valuesColor: _e6.valuesColor.value()
            };else {
              var _i6 = (0, x.generateColor)(_e6.colors[0].value(), _e6.transparencies[0].value()),
                  _r2 = _e6.colors[1] ? (0, x.generateColor)(_e6.colors[1].value(), _e6.transparencies[1].value()) : _i6;

              this._rendererData.styles[_t7] = {
                colors: [_i6, _r2],
                visible: _e6.visible.value(),
                percentWidth: _e6.percentWidth.value(),
                location: _s6.location,
                direction: _e6.direction.value(),
                showValues: _e6.showValues.value(),
                addToTotalValue: !0,
                valuesColor: _e6.valuesColor.value()
              };
            }
          }

          if (this._histBoxBgStyle) {
            var _t6 = this._histBoxBgStyle.childs();

            this._rendererData.histBoxBgColor = (0, x.generateColor)(_t6.color.value(), _t6.transparency.value());
          }
        }
      }, {
        key: "_updateViewInternal",
        value: function _updateViewInternal() {
          var _this3 = this;

          this._resetRenderersData();

          var t = this._provider.priceScale(),
              e = this._model.timeScale();

          if (!t || t.isEmpty() || e.isEmpty()) return;
          if (null === this._provider.firstValue()) return;

          var i = this._provider.graphics().hhistsByTimePointIndex();

          if (0 === i.size) return;
          var s = e.visibleBarsStrictRange();
          if (null === s) return;
          var n = s.firstBar(),
              a = s.lastBar();
          this._prepareStyles(), (0, r.ensureDefined)(i).forEach(function (i, s) {
            var r = 1 / 0,
                o = -1 / 0;
            i.forEach(function (t) {
              r = Math.min(r, t.firstBarTime), o = Math.max(o, t.lastBarTime);
            }), !_this3._alwaysVisible && (o < n || r > a) || _this3._updateDataForRenderers(i, t, e);
          });
        }
      }, {
        key: "_updateDataForRenderers",
        value: function _updateDataForRenderers(t, e, i) {
          var s, n;
          if (t.size <= 0) return;
          var o = null;
          if (t.forEach(function (t) {
            o = o || t;
          }), null === o) return;
          var l = o;
          t.forEach(function (t) {
            t.priceLow < l.priceLow && (l = t);
          });

          var d = (null === (n = null === (s = this._provider.properties().child("inputs")) || void 0 === s ? void 0 : s.child("volume")) || void 0 === n ? void 0 : n.value()) === a.HHistVolumeMode.Delta,
              h = function (t, e, i) {
            var s = i ? e.barSpacing() / 2 : 0;
            return p(e.indexToCoordinate(t.firstBarTime) - s, e.indexToCoordinate(t.lastBarTime) + s);
          }(o, i, this._extendToBarsEndings),
              c = (0, r.ensureNotNull)(this._provider.firstValue()),
              u = [];

          t.forEach(function (t) {
            null == t.rate[t.rate.length - 1] && t.rate.splice(-1, 1);
            var i = [],
                s = [],
                r = t.styleId;

            if (d) {
              var _ref = t.rate[0] > t.rate[1] ? [t.rate[1], t.rate[0], "UpDominate"] : [t.rate[0], t.rate[1], "DownDominate"],
                  _ref2 = _slicedToArray(_ref, 3),
                  _e7 = _ref2[0],
                  _n4 = _ref2[1],
                  _a4 = _ref2[2];

              i = [_n4 - _e7, _e7, _e7], s = [_n4 - _e7], r += _a4;
            } else i = t.rate, s = t.rate;

            var n = function (t, e, i) {
              return p(e.priceToCoordinate(t.priceHigh, i), e.priceToCoordinate(t.priceLow, i));
            }(t, e, c);

            u.push({
              height: n.max - n.min,
              y: n.min,
              subBarValues: i,
              displayedValues: s,
              styleId: r
            });
          }), u.sort(function (t, e) {
            return t.y - e.y;
          }), this._rendererData.histograms.push({
            xRange: h,
            yRange: p(u[0].y, u[u.length - 1].y + u[u.length - 1].height),
            bars: u
          });
        }
      }]);

      return y;
    }();

    function w(t, e) {
      var i;
      if ((0, x.isHexColor)(t)) i = 100 - e;else {
        var _r3 = (0, s.tryParseRgba)(t);

        i = 100 - (null !== _r3 ? (0, x.alphaToTransparency)(_r3[3]) : e);
      }
      return [(0, x.generateColor)(t, 100 - i, !0), (0, x.generateColor)(t, 100 - i / 2, !0), (0, x.generateColor)(t, 100 - i / 4, !0)];
    }
  },
  13369: function _(t, e, i) {
    i.r(e), i.d(e, {
      HorizLinePaneView: function HorizLinePaneView() {
        return o;
      }
    });
    var s = i(50151),
        r = i(18807),
        n = i(19266),
        a = i(74997);

    var o =
    /*#__PURE__*/
    function () {
      function o(t, e, i) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

        _classCallCheck(this, o);

        this._data = [], this._invalidated = !0, this._provider = t, this._model = e, this._extendToBarsEndings = s, this._hitTestResult = void 0 !== i ? new r.HitTestResult(r.HitTarget.Custom, i) : new r.HitTestResult(r.HitTarget.Regular);
      }

      _createClass(o, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
          var t = new n.CompositeRenderer();
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this._data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _e8 = _step7.value;

              var _i7 = new a.HorizontalLineRenderer();

              _i7.setData(_e8), _i7.setHitTest(this._hitTestResult), t.append(_i7);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return t;
        }
      }, {
        key: "_updateViewInternal",
        value: function _updateViewInternal() {
          var _this4 = this;

          this._data = [];

          var t = this._provider.priceScale(),
              e = this._model.timeScale();

          if (!t || t.isEmpty() || e.isEmpty()) return;

          var i = this._provider.graphics().horizlines();

          if (0 === i.size) return;

          var r = this._model.timeScale().visibleBarsStrictRange();

          if (null === r) return;

          var n = this._provider.firstValue();

          if (null === n) return;
          var a = r.firstBar(),
              o = r.lastBar(),
              l = this._extendToBarsEndings ? e.barSpacing() / 2 : 0,
              d = (0, s.ensureDefined)(this._provider.properties().childs().graphics.childs().horizlines);
          i.forEach(function (i, r) {
            var h = (0, s.ensureDefined)(d.childs()[r]).childs();
            h.visible.value() && i.forEach(function (i) {
              var r = i.startIndex,
                  d = i.endIndex;
              !i.extendRight && Math.max(r, d) < a || !i.extendLeft && Math.min(r, d) > o || _this4._data.push({
                y: t.priceToCoordinate((0, s.ensureDefined)(i.level), n),
                left: i.extendLeft ? void 0 : e.indexToCoordinate(r) - l,
                right: i.extendRight ? void 0 : e.indexToCoordinate(d) + l,
                color: h.color.value(),
                linewidth: h.width.value(),
                linestyle: h.style.value()
              });
            });
          });
        }
      }]);

      return o;
    }();
  },
  66999: function _(t, e, i) {
    i.r(e), i.d(e, {
      PolygonPaneView: function PolygonPaneView() {
        return d;
      }
    });
    var s = i(50151),
        r = i(86441),
        n = i(18807),
        a = i(19266),
        o = i(79849),
        l = i(79797);

    var d =
    /*#__PURE__*/
    function () {
      function d(t, e, i) {
        _classCallCheck(this, d);

        this._data = [], this._invalidated = !0, this._provider = t, this._model = e, this._hitTestResult = void 0 !== i ? new n.HitTestResult(n.HitTarget.Custom, i) : new n.HitTestResult(n.HitTarget.Regular);
      }

      _createClass(d, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
          var t = new a.CompositeRenderer();
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this._data[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _e9 = _step8.value;

              var _i8 = new l.PolygonRenderer(this._hitTestResult);

              _i8.setData(_e9), t.append(_i8);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          return t;
        }
      }, {
        key: "_updateViewInternal",
        value: function _updateViewInternal() {
          var _this5 = this;

          this._data = [];

          var t = this._provider.priceScale(),
              e = this._model.timeScale();

          if (!t || t.isEmpty() || e.isEmpty()) return;

          var i = this._provider.graphics().polygons();

          if (0 === i.size) return;

          var n = this._model.timeScale().visibleBarsStrictRange();

          if (null === n) return;

          var a = this._provider.firstValue();

          if (null === a) return;
          var l = n.firstBar(),
              d = n.lastBar(),
              h = (0, s.ensureDefined)(this._provider.properties().childs().graphics.childs().polygons),
              c = (0, s.ensureDefined)(this._provider.graphicsInfo().polygons);
          i.forEach(function (i, n) {
            var u = (0, s.ensureDefined)(h.childs()[n]).childs(),
                p = (0, s.ensureDefined)(c[n]);
            100 !== u.transparency.value() && i.forEach(function (i) {
              var n = 1 / 0,
                  h = -1 / 0;
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = i.points[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var _t8 = _step9.value;

                  var _e10 = _t8.index + (_t8.offset || 0);

                  n = Math.min(n, _e10), h = Math.max(h, _e10);
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                    _iterator9["return"]();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }

              if (h < l || d < n) return;
              var c = i.points.map(function (i) {
                var n = e.indexToCoordinate(i.index + (i.offset || 0)),
                    o = t.priceToCoordinate((0, s.ensureDefined)(i.level), a);
                return new r.Point(n, o);
              });

              _this5._data.push({
                points: c,
                color: u.color.value(),
                backcolor: u.color.value(),
                linewidth: p.showBorder ? 1 : 0,
                linestyle: o.LINESTYLE_SOLID,
                filled: !0,
                fillBackground: !0,
                transparency: u.transparency.value(),
                mouseTouchable: p.mouseTouchable
              });
            });
          });
        }
      }]);

      return d;
    }();
  },
  78266: function _(t, e, i) {
    i.r(e), i.d(e, {
      VertLinePaneView: function VertLinePaneView() {
        return l;
      }
    });
    var s = i(50151),
        r = i(18807),
        n = i(95586),
        a = i(19266),
        o = i(71254);

    var l =
    /*#__PURE__*/
    function () {
      function l(t, e, i) {
        _classCallCheck(this, l);

        this._data = [], this._invalidated = !0, this._provider = t, this._model = e, this._hitTestResult = void 0 !== i ? new r.HitTestResult(r.HitTarget.Custom, i) : new r.HitTestResult(r.HitTarget.Regular);
      }

      _createClass(l, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          this._invalidated && (this._updateViewInternal(), this._invalidated = !1);
          var t = new a.CompositeRenderer();
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this._data[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _e11 = _step10.value;

              var _i9 = new o.VerticalLineRenderer();

              _i9.setData(_e11), _i9.setHitTest(this._hitTestResult), t.append(_i9);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          return t;
        }
      }, {
        key: "_updateViewInternal",
        value: function _updateViewInternal() {
          var _this6 = this;

          this._data = [];

          var t = this._provider.priceScale(),
              e = this._model.timeScale();

          if (!t || t.isEmpty() || e.isEmpty()) return;

          var i = this._provider.graphicsInfo().vertlines,
              r = this._provider.graphics().vertlines();

          if (0 === r.size || void 0 === i) return;

          var a = this._model.timeScale().visibleBarsStrictRange();

          if (null === a) return;

          var o = this._provider.firstValue();

          if (null === o) return;
          var l = a.firstBar(),
              d = a.lastBar(),
              h = (0, s.ensureDefined)(this._provider.properties().childs().graphics.childs().vertlines);
          r.forEach(function (r, a) {
            var c = (0, s.ensureDefined)(h.childs()[a]).childs(),
                u = (0, s.ensureDefined)(i[a]);
            if (!c.visible.value()) return;
            var p = 0;

            switch (u.halign) {
              case n.HAlign.Left:
                p = -e.barSpacing() / 2;
                break;

              case n.HAlign.Right:
                p = e.barSpacing() / 2;
            }

            r.forEach(function (i) {
              var r = i.index;
              r < l || d < r || _this6._data.push({
                x: e.indexToCoordinate(r) + p,
                top: i.extendTop ? void 0 : t.priceToCoordinate((0, s.ensureDefined)(i.endPrice), o),
                bottom: i.extendBottom ? void 0 : t.priceToCoordinate((0, s.ensureDefined)(i.startPrice), o),
                color: c.color.value(),
                linewidth: c.width.value(),
                linestyle: c.style.value()
              });
            });
          });
        }
      }]);

      return l;
    }();
  }
}]);