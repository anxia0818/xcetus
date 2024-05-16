"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[1583], {
  82161: function _(e, t, i) {
    "use strict";

    i.d(t, {
      splitThousands: function splitThousands() {
        return r;
      }
    });
    var n = i(50335);

    function r(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "&nbsp;";
      var i = e + "";
      -1 !== i.indexOf("e") && (i = function (e) {
        return (0, n.fixComputationError)(e).toFixed(10).replace(/\.?0+$/, "");
      }(Number(e)));
      var r = i.split(".");
      return r[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (r[1] ? "." + r[1] : "");
    }
  },
  24424: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      Pattern5pointsPaneView: function Pattern5pointsPaneView() {
        return _;
      }
    });
    var n = i(79849),
        r = i(73436),
        s = i(19266),
        o = i(80657),
        a = i(10695),
        l = i(99031),
        d = i(87663),
        h = i(18807),
        c = i(79797),
        u = i(79191),
        p = i(46501);

    var _ =
    /*#__PURE__*/
    function (_u$LineSourcePaneView) {
      _inherits(_, _u$LineSourcePaneView);

      function _(e, t) {
        var _this;

        _classCallCheck(this, _);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, e, t)), _this._abRetracement = NaN, _this._bcRetracement = NaN, _this._cdRetracement = NaN, _this._xdRetracement = NaN, _this._numericFormatter = new d.NumericFormatter(), _this._bcRetracementTrend = new l.TrendLineRenderer(), _this._xdRetracementTrend = new l.TrendLineRenderer(), _this._xbTrend = new l.TrendLineRenderer(), _this._bdTrend = new l.TrendLineRenderer(), _this._polylineRenderer = new c.PolygonRenderer(new h.HitTestResult(h.HitTarget.MovePoint)), _this._mainTriangleRenderer = new a.TriangleRenderer(), _this._triangleRendererPoints234 = new a.TriangleRenderer(), _this._xbLabelRenderer = new o.TextRenderer(), _this._acLabelRenderer = new o.TextRenderer(), _this._bdLabelRenderer = new o.TextRenderer(), _this._xdLabelRenderer = new o.TextRenderer(), _this._textRendererALabel = new o.TextRenderer(), _this._textRendererBLabel = new o.TextRenderer(), _this._textRendererCLabel = new o.TextRenderer(), _this._textRendererDLabel = new o.TextRenderer(), _this._textRendererXLabel = new o.TextRenderer(), _this._renderer = null;
        return _this;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this), this._updateBaseData(), this._renderer = null, this._points.length < 2) return;

          var e = this._source.properties().childs(),
              t = new s.CompositeRenderer(),
              i = function i(t, _i2) {
            return {
              points: [t],
              text: _i2,
              color: e.textcolor.value(),
              vertAlign: "middle",
              horzAlign: "center",
              font: p.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: e.bold && e.bold.value(),
              italic: e.italic && e.italic.value(),
              fontsize: e.fontsize.value(),
              backgroundColor: e.color.value(),
              backgroundRoundRect: 4
            };
          },
              o = function o(t, i) {
            return {
              points: [t, i],
              color: e.color.value(),
              linewidth: 1,
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: r.LineEnd.Normal,
              rightend: r.LineEnd.Normal
            };
          },
              _this$_points = _slicedToArray(this._points, 5),
              a = _this$_points[0],
              l = _this$_points[1],
              d = _this$_points[2],
              h = _this$_points[3],
              c = _this$_points[4],
              u = {
            points: [a, l, this._points.length < 3 ? l : d],
            color: "rgba(0, 0, 0, 0)",
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: e.fillBackground.value(),
            transparency: e.transparency.value()
          };

          if (this._mainTriangleRenderer.setData(u), t.append(this._mainTriangleRenderer), this._points.length > 3) {
            var _i3 = {
              points: [d, h, 5 === this._points.length ? c : h],
              color: "rgba(0, 0, 0, 0)",
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value()
            };
            this._triangleRendererPoints234.setData(_i3), t.append(this._triangleRendererPoints234);
          }

          var _ = {
            points: this._points,
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: !1,
            linestyle: n.LINESTYLE_SOLID,
            filled: !1
          };

          if (this._polylineRenderer.setData(_), t.append(this._polylineRenderer), this._points.length >= 3) {
            var _e2 = i(a.add(d).scaled(.5), this._numericFormatter.format(this._abRetracement));

            this._xbLabelRenderer.setData(_e2), t.append(this._xbLabelRenderer), this._xbTrend.setData(o(a, d)), t.append(this._xbTrend);
          }

          if (this._points.length >= 4) {
            this._bcRetracementTrend.setData(o(l, h)), t.append(this._bcRetracementTrend);

            var _e3 = i(l.add(h).scaled(.5), this._numericFormatter.format(this._bcRetracement));

            this._acLabelRenderer.setData(_e3), t.append(this._acLabelRenderer);
          }

          if (this._points.length >= 5) {
            var _e4 = i(d.add(c).scaled(.5), this._numericFormatter.format(this._cdRetracement));

            this._bdLabelRenderer.setData(_e4), t.append(this._bdLabelRenderer), this._xdRetracementTrend.setData(o(a, c)), t.append(this._xdRetracementTrend);

            var _n2 = i(a.add(c).scaled(.5), this._numericFormatter.format(this._xdRetracement));

            this._xdLabelRenderer.setData(_n2), t.append(this._xdLabelRenderer), this._bdTrend.setData(o(d, c)), t.append(this._bdTrend);
          }

          var g = i(a, "X");
          l.y > a.y ? (g.vertAlign = "bottom", g.offsetY = 5) : (g.vertAlign = "top", g.offsetY = 5), this._textRendererXLabel.setData(g), t.append(this._textRendererXLabel);
          var f = i(l, "A");

          if (l.y < a.y ? (f.vertAlign = "bottom", f.offsetY = 5) : (f.vertAlign = "top", f.offsetY = 5), this._textRendererALabel.setData(f), t.append(this._textRendererALabel), this._points.length > 2) {
            var _e5 = i(d, "B");

            d.y < l.y ? (_e5.vertAlign = "bottom", _e5.offsetY = 5) : (_e5.vertAlign = "top", _e5.offsetY = 5), this._textRendererBLabel.setData(_e5), t.append(this._textRendererBLabel);
          }

          if (this._points.length > 3) {
            var _e6 = i(h, "C");

            h.y < d.y ? (_e6.vertAlign = "bottom", _e6.offsetY = 5) : (_e6.vertAlign = "top", _e6.offsetY = 5), this._textRendererCLabel.setData(_e6), t.append(this._textRendererCLabel);
          }

          if (this._points.length > 4) {
            var _e7 = i(c, "D");

            c.y < h.y ? (_e7.vertAlign = "bottom", _e7.offsetY = 5) : (_e7.vertAlign = "top", _e7.offsetY = 5), this._textRendererDLabel.setData(_e7), t.append(this._textRendererDLabel);
          }

          this.addAnchors(t), this._renderer = t;
        }
      }, {
        key: "_updateBaseData",
        value: function _updateBaseData() {
          if (this._source.points().length >= 3) {
            var _this$_source$points = this._source.points(),
                _this$_source$points2 = _slicedToArray(_this$_source$points, 3),
                _e8 = _this$_source$points2[0],
                _t = _this$_source$points2[1],
                _i4 = _this$_source$points2[2];

            this._abRetracement = Math.round(1e3 * Math.abs((_i4.price - _t.price) / (_t.price - _e8.price))) / 1e3;
          }

          if (this._source.points().length >= 4) {
            var _this$_source$points3 = this._source.points(),
                _this$_source$points4 = _slicedToArray(_this$_source$points3, 4),
                _e9 = _this$_source$points4[1],
                _t2 = _this$_source$points4[2],
                _i5 = _this$_source$points4[3];

            this._bcRetracement = Math.round(1e3 * Math.abs((_i5.price - _t2.price) / (_t2.price - _e9.price))) / 1e3;
          }

          if (this._source.points().length >= 5) {
            var _this$_source$points5 = this._source.points(),
                _this$_source$points6 = _slicedToArray(_this$_source$points5, 5),
                _e10 = _this$_source$points6[0],
                _t3 = _this$_source$points6[1],
                _i6 = _this$_source$points6[2],
                _n3 = _this$_source$points6[3],
                _r = _this$_source$points6[4];

            this._cdRetracement = Math.round(1e3 * Math.abs((_r.price - _n3.price) / (_n3.price - _i6.price))) / 1e3, this._xdRetracement = Math.round(1e3 * Math.abs((_r.price - _t3.price) / (_t3.price - _e10.price))) / 1e3;
          }
        }
      }]);

      return _;
    }(u.LineSourcePaneView);
  },
  5480: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ABCDPaneView: function ABCDPaneView() {
        return p;
      }
    });
    var n = i(79849),
        r = i(19266),
        s = i(87663),
        o = i(99031),
        a = i(80657),
        l = i(73436),
        d = i(79797),
        h = i(18807),
        c = i(79191),
        u = i(46501);

    var p =
    /*#__PURE__*/
    function (_c$LineSourcePaneView) {
      _inherits(p, _c$LineSourcePaneView);

      function p() {
        var _this2;

        _classCallCheck(this, p);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this2._numericFormatter = new s.NumericFormatter(), _this2._abRetracementTrend = new o.TrendLineRenderer(), _this2._cdRetracementTrend = new o.TrendLineRenderer(), _this2._polylineRenderer = new d.PolygonRenderer(new h.HitTestResult(h.HitTarget.MovePoint)), _this2._abLabelRenderer = new a.TextRenderer(), _this2._cdLabelRenderer = new a.TextRenderer(), _this2._textRendererALabel = new a.TextRenderer(), _this2._textRendererBLabel = new a.TextRenderer(), _this2._textRendererCLabel = new a.TextRenderer(), _this2._textRendererDLabel = new a.TextRenderer(), _this2._renderer = null;
        return _this2;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(p.prototype), "_updateImpl", this).call(this), this._points.length < 2) return void (this._renderer = null);

          var e = this._source.properties().childs(),
              t = new r.CompositeRenderer(),
              i = function i(t, _i7) {
            return {
              points: [t],
              text: _i7,
              color: e.textcolor.value(),
              vertAlign: "middle",
              horzAlign: "center",
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: e.bold && e.bold.value(),
              italic: e.italic && e.italic.value(),
              fontsize: e.fontsize.value(),
              backgroundColor: e.color.value(),
              backgroundRoundRect: 4
            };
          },
              s = function s(t, i) {
            return {
              points: [t, i],
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal
            };
          },
              _this$_points2 = _slicedToArray(this._points, 4),
              o = _this$_points2[0],
              a = _this$_points2[1],
              d = _this$_points2[2],
              h = _this$_points2[3],
              c = {
            points: this._points,
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            linestyle: n.LINESTYLE_SOLID,
            fillBackground: !1,
            filled: !1,
            backcolor: "rgba(0, 0, 0, 0)"
          };

          this._polylineRenderer.setData(c), t.append(this._polylineRenderer);
          var p = i(o, "A");
          a.y > o.y ? (p.vertAlign = "bottom", p.offsetY = 5) : (p.vertAlign = "top", p.offsetY = 5), this._textRendererALabel.setData(p), t.append(this._textRendererALabel);

          var _ = i(a, "B");

          if (a.y < o.y ? (_.vertAlign = "bottom", _.offsetY = 5) : (_.vertAlign = "top", _.offsetY = 5), this._textRendererBLabel.setData(_), t.append(this._textRendererBLabel), this._points.length > 2) {
            var _e11 = i(d, "C");

            d.y < a.y ? (_e11.vertAlign = "bottom", _e11.offsetY = 5) : (_e11.vertAlign = "top", _e11.offsetY = 5), this._textRendererCLabel.setData(_e11), t.append(this._textRendererCLabel);
          }

          if (this._points.length > 3) {
            var _e12 = i(h, "D");

            h.y < d.y ? (_e12.vertAlign = "bottom", _e12.offsetY = 5) : (_e12.vertAlign = "top", _e12.offsetY = 5), this._textRendererDLabel.setData(_e12), t.append(this._textRendererDLabel);
          }

          if (this._points.length >= 3) {
            this._abRetracementTrend.setData(s(o, d)), t.append(this._abRetracementTrend);

            var _e13 = o.add(d).scaled(.5),
                _this$_source$points7 = this._source.points(),
                _this$_source$points8 = _slicedToArray(_this$_source$points7, 3),
                _n4 = _this$_source$points8[0],
                _r2 = _this$_source$points8[1],
                _a = _this$_source$points8[2],
                _l = Math.round(1e3 * Math.abs((_a.price - _r2.price) / (_r2.price - _n4.price))) / 1e3,
                _h = i(_e13, this._numericFormatter.format(_l));

            this._abLabelRenderer.setData(_h), t.append(this._abLabelRenderer);
          }

          if (this._points.length >= 4) {
            this._cdRetracementTrend.setData(s(a, h)), t.append(this._cdRetracementTrend);

            var _e14 = a.add(h).scaled(.5),
                _this$_source$points9 = this._source.points(),
                _this$_source$points10 = _slicedToArray(_this$_source$points9, 4),
                _n5 = _this$_source$points10[1],
                _r3 = _this$_source$points10[2],
                _o = _this$_source$points10[3],
                _l2 = Math.round(1e3 * Math.abs((_o.price - _r3.price) / (_r3.price - _n5.price))) / 1e3,
                _d2 = i(_e14, this._numericFormatter.format(_l2));

            this._cdLabelRenderer.setData(_d2), t.append(this._cdLabelRenderer);
          }

          this.addAnchors(t), this._renderer = t;
        }
      }]);

      return p;
    }(c.LineSourcePaneView);
  },
  33295: function _(e, t, i) {
    "use strict";

    i.d(t, {
      AlertableLineSourcePaneView: function AlertableLineSourcePaneView() {
        return r;
      }
    });
    var n = i(79191);

    var r =
    /*#__PURE__*/
    function (_n$LineSourcePaneView) {
      _inherits(r, _n$LineSourcePaneView);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_addAlertRenderer",
        value: function _addAlertRenderer(e, t) {}
      }, {
        key: "_getAlertRenderer",
        value: function _getAlertRenderer(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._source.properties().linecolor.value();
          var i = arguments.length > 2 ? arguments[2] : undefined;
          return null;
        }
      }]);

      return r;
    }(n.LineSourcePaneView);
  },
  37803: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ArcPaneView: function ArcPaneView() {
        return _;
      }
    });
    var n = i(4652),
        r = i(86441),
        s = i(25422),
        o = i(66103),
        a = i(19266),
        l = i(79191),
        d = i(87095),
        h = i(18807),
        c = i(15187),
        u = i(45197);

    var p =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa) {
      _inherits(p, _c$MediaCoordinatesPa);

      function p() {
        var _this3;

        _classCallCheck(this, p);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this3._data = null;
        return _this3;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = _objectSpread({}, e, {
            angleFrom: 0,
            angleTo: Math.PI,
            clockwise: !1
          });
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 3) return null;
          var t = (0, u.interactionTolerance)().curve,
              i = this._data.points[0],
              o = this._data.points[1];
          var a = this._data.points[2],
              l = (0, n.distanceToLine)(i, o, a).distance;
          if (l < 1) return l = (0, n.distanceToLine)(i, o, e).distance, l < t ? new h.HitTestResult(h.HitTarget.MovePoint) : null;
          var d = o.subtract(i),
              c = d.length(),
              p = i.add(o).scaled(.5);

          var _ = a.subtract(p).normalized();

          a = p.add(_.scaled(l));
          var g = d.x / c,
              f = d.y / c;
          var v = Math.acos(g);
          f < 0 && (v = -v);
          var x = (0, s.translationMatrix)(-i.x, -i.y);
          e = (0, s.transformPoint)(x, e), x = (0, s.rotationMatrix)(-v), e = (0, s.transformPoint)(x, e), _ = (0, s.transformPoint)(x, _);
          var m = 1 - Math.sqrt(3) / 2;
          if (x = (0, s.scalingMatrix)(1, c * m / l), e = (0, s.transformPoint)(x, e), _ = (0, s.transformPoint)(x, _), e.y * _.y < 0) return null;
          var w;
          w = e.y < 0 ? new r.Point(.5 * c, c * Math.sqrt(3) / 2) : new r.Point(.5 * c, -c * Math.sqrt(3) / 2);
          var R = e.subtract(w).length();
          return Math.abs(R - c) <= t ? new h.HitTestResult(h.HitTarget.MovePoint) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          var t = e.context,
              i = this._data.points[0],
              o = this._data.points[1];
          if (this._data.points.length < 3) return t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(o.x, o.y), void t.stroke();
          var a = this._data.points[2];
          var l = (0, n.distanceToLine)(i, o, a).distance;
          if (l < 1) return t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(o.x, o.y), void t.stroke();
          var h = o.subtract(i),
              c = i.add(o).scaled(.5),
              u = new r.Point(-h.y, h.x).normalized();
          a = c.add(u.scaled(l)), t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth;

          var p = h.length(),
              _ = h.x / p,
              g = h.y / p;

          var f = Math.acos(_);
          g < 0 && (f = -f);
          var v = this._data.points[2],
              x = (0, s.translationMatrix)(-c.x, -c.y);
          v = (0, s.transformPoint)(x, v), x = (0, s.rotationMatrix)(-f), v = (0, s.transformPoint)(x, v), x = (0, s.scalingMatrix)(1, p / (2 * l)), v = (0, s.transformPoint)(x, v), v.y < 0 ? this._data.clockwise = !0 : this._data.clockwise = !1, t.save(), t.beginPath(), t.translate(i.x, i.y), t.rotate(f);
          var m = 1 - Math.sqrt(3) / 2;
          t.scale(1, l / (p * m)), this._data.clockwise ? t.arc(.5 * p, p * Math.sqrt(3) / 2, p, -2 * Math.PI / 3, -Math.PI / 3, !1) : t.arc(.5 * p, -p * Math.sqrt(3) / 2, p, Math.PI / 3, 2 * Math.PI / 3, !1), t.restore(), t.stroke(), this._data.fillBackground && (t.fillStyle = (0, d.generateColor)(this._data.backcolor, this._data.transparency), t.fill());
        }
      }]);

      return p;
    }(c.MediaCoordinatesPaneRenderer);

    var _ =
    /*#__PURE__*/
    function (_l$LineSourcePaneView) {
      _inherits(_, _l$LineSourcePaneView);

      function _() {
        var _this4;

        _classCallCheck(this, _);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this4._arcRenderer = new p(), _this4._renderer = null;
        return _this4;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this), this._renderer = null, 0 === this._points.length) return;

          var e = this._source.properties().childs(),
              t = {
            points: this._points,
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: e.fillBackground.value(),
            transparency: e.transparency.value()
          };

          this._arcRenderer.setData(t);

          var i = new a.CompositeRenderer();
          this._renderer = i, i.append(this._arcRenderer);
          var d = [],
              h = t.points[0],
              c = new r.Point(h.x, h.y);
          if (c.data = 0, d.push(c), 1 === t.points.length) return;
          var u = t.points[1],
              p = new r.Point(u.x, u.y);
          if (p.data = 1, 2 === t.points.length) return void this.addAnchors(i);
          d.push(p);
          var _ = t.points[2];
          var g = (0, n.distanceToLine)(h, u, _).distance,
              f = u.subtract(h),
              v = h.add(u).scaled(.5),
              x = new r.Point(-f.y, f.x).normalized();
          _ = v.add(x.scaled(g));
          var m = v.add(x.scaled(-g)),
              w = f.length(),
              R = f.x / w,
              y = f.y / w;
          var T = Math.acos(R);
          y < 0 && (T = -T);
          var b = t.points[2],
              P = (0, s.translationMatrix)(-v.x, -v.y);
          b = (0, s.transformPoint)(P, b), P = (0, s.rotationMatrix)(-T), b = (0, s.transformPoint)(P, b), P = (0, s.scalingMatrix)(1, w / (2 * g)), b = (0, s.transformPoint)(P, b);
          var L = b.y >= 0 ? new r.Point(_.x, _.y) : new r.Point(m.x, m.y);
          L.data = 2, d.push(L);
          var S = [o.PaneCursorType.Default, o.PaneCursorType.Default, (0, l.thirdPointCursorType)(h, u)];
          i.append(this.createLineAnchor({
            points: d,
            pointsCursorType: S
          }, 0));
        }
      }]);

      return _;
    }(l.LineSourcePaneView);
  },
  93011: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ArrowMarkPaneView: function ArrowMarkPaneView() {
        return u;
      }
    });
    var n = i(46501),
        r = i(79191),
        s = i(19266),
        o = i(80101),
        a = i(80657),
        l = i(18807),
        d = i(34026),
        h = i(37160);

    var c =
    /*#__PURE__*/
    function () {
      function c() {
        _classCallCheck(this, c);

        this._data = null;
      }

      _createClass(c, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          if (null !== this._data) {
            switch (e.save(), e.fillStyle = this._data.color, this._data.direction) {
              case "up":
              case "down":
                !function (e, t, i, n) {
                  var r = Math.max(1, Math.floor(n)) % 2 ? .5 : 0,
                      s = "up" === i ? 1 : -1,
                      o = s * Math.round(12 * n),
                      a = (0, h.ceiledEven)(19.5 * n) / 2 + r,
                      l = s * Math.round(10 * n),
                      d = (0, h.ceiledEven)(10 * n) / 2 + r,
                      c = Math.round(t.x * n) + r,
                      u = Math.round(t.y * n);
                  e.beginPath(), e.moveTo(c, u), e.lineTo(c + a, u + o), e.lineTo(c + d, u + o), e.lineTo(c + d, u + o + l), e.lineTo(c - d, u + o + l), e.lineTo(c - d, u + o), e.lineTo(c - a, u + o), e.moveTo(c, u), e.fill();
                }(e, this._data.point, this._data.direction, t.pixelRatio);
                break;

              case "left":
              case "right":
                !function (e, t, i, n) {
                  var r = Math.max(1, Math.floor(n)) % 2 ? .5 : 0,
                      s = "left" === i ? 1 : -1,
                      o = s * Math.round(12 * n) + r,
                      a = (0, h.ceiledEven)(19.5 * n) / 2 + r,
                      l = s * Math.round(22 * n) + r,
                      d = (0, h.ceiledEven)(10 * n) / 2 + r,
                      c = Math.round(t.x * n) + r,
                      u = Math.round(t.y * n) + r;
                  e.beginPath(), e.moveTo(c, u), e.lineTo(c + o, u + a), e.lineTo(c + o, u + d), e.lineTo(c + l, u + d), e.lineTo(c + l, u - d), e.lineTo(c + o, u - d), e.lineTo(c + o, u - a), e.moveTo(c, u), e.fill();
                }(e, this._data.point, this._data.direction, t.pixelRatio);
            }

            e.restore();
          }
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data) return null;
          var t, i, n, r;

          switch (this._data.direction) {
            case "up":
              t = this._data.point.x - 9.75, n = t + 19.5, i = this._data.point.y, r = i + 12 + 10;
              break;

            case "down":
              t = this._data.point.x - 9.75, n = t + 19.5, r = this._data.point.y, i = r - 12 - 10;
              break;

            case "left":
              t = this._data.point.x, n = t + 12 + 10, i = this._data.point.y - 9.75, r = i + 19.5;
              break;

            case "right":
              n = this._data.point.x, t = n - 12 - 10, i = this._data.point.y - 9.75, r = i + 19.5;
          }

          return e.x < t || e.x > n || e.y < i || e.y > r ? null : new l.HitTestResult(l.HitTarget.MovePoint);
        }
      }, {
        key: "doesIntersectWithBox",
        value: function doesIntersectWithBox(e) {
          return null !== this._data && (0, d.pointInBox)(this._data.point, e);
        }
      }]);

      return c;
    }();

    var u =
    /*#__PURE__*/
    function (_r$LineSourcePaneView) {
      _inherits(u, _r$LineSourcePaneView);

      function u() {
        var _this5;

        _classCallCheck(this, u);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this5._arrowMarkRenderer = new c(), _this5._textRenderer = new a.TextRenderer(), _this5._renderer = null, _this5._anchorsOffset = null;
        return _this5;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer = null, 1 !== this._points.length) return;

          var e = this._getSource(),
              t = e.properties().childs(),
              i = this._getModel();

          this._arrowMarkRenderer.setData({
            point: this._points[0],
            direction: e.direction(),
            color: t.arrowColor.value()
          }), this._renderer = new s.CompositeRenderer(), this._renderer.append(this._arrowMarkRenderer), "" !== t.text.value() && t.showLabel.value() && (this._textRenderer.setData(_objectSpread({
            points: this._points,
            font: n.CHART_FONT_FAMILY,
            bold: t.bold.value(),
            italic: t.italic.value(),
            fontSize: t.fontsize.value(),
            text: t.text.value(),
            color: t.color.value()
          }, e.textAlignParams())), this._renderer.append(this._textRenderer));
          var r = [this._anchorsOffset ? this._points[0].add(this._anchorsOffset) : this._points[0].clone()];

          this._renderer.append(new o.SelectionRenderer({
            points: r,
            bgColors: this._lineAnchorColors(r),
            visible: this.areAnchorsVisible(),
            barSpacing: i.timeScale().barSpacing(),
            hittestResult: l.HitTarget.MovePoint
          }));
        }
      }]);

      return u;
    }(r.LineSourcePaneView);
  },
  97747: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ArrowMarkerPaneView: function ArrowMarkerPaneView() {
        return _;
      }
    });
    var n = i(79191),
        r = i(19266),
        s = i(80657),
        o = i(86441),
        a = i(15187),
        l = i(18807),
        d = i(45197);

    function h(e) {
      if (e < 92) return 18;
      var t = .25 * e;
      return t = Math.min(t, 106), t = Math.max(t, 18), t = Math.min(t, .9 * e), t;
    }

    var c =
    /*#__PURE__*/
    function (_a$MediaCoordinatesPa) {
      _inherits(c, _a$MediaCoordinatesPa);

      function c(e) {
        var _this6;

        _classCallCheck(this, c);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this)), _this6._data = e;
        return _this6;
      }

      _createClass(c, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (this._data.points.length < 2) return null;

          var t = this._data.points[0],
              i = this._data.points[1].subtract(t);

          var n = i.length();
          i = this._data.points[1].subtract(this._data.points[0]);
          i.length() < 22 && (t = this._data.points[1].addScaled(i.normalized(), -22), i = this._data.points[1].subtract(t));
          var r = e.subtract(t),
              s = i.dotProduct(r) / n;
          if (s < 0 || s > n) return null;

          var o = i.scaled(1 / n),
              a = t.addScaled(o, s),
              h = e.subtract(a),
              c = (0, d.interactionTolerance)().line,
              u = this._hittestGeometry(n);

          for (var _e15 = u.length - 2; _e15 >= 0; _e15--) {
            var _t4 = u[_e15];

            if (s >= _t4.x) {
              var _i8 = u[_e15 + 1],
                  _n6 = _i8.x - _t4.x,
                  _r4 = _i8.y - _t4.y,
                  _o2 = (s - _t4.x) / _n6,
                  _a2 = _t4.y + _r4 * _o2;

              return h.length() <= _a2 + c ? new l.HitTestResult(l.HitTarget.MovePoint) : null;
            }
          }

          return h.length() < 3 ? new l.HitTestResult(l.HitTarget.MovePoint) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (this._data.points.length < 2) return;
          var t = e.context;
          t.fillStyle = this._data.color, t.strokeStyle = this._data.color, t.lineJoin = "round", t.lineCap = "round";

          var i = this._data.points[1].subtract(this._data.points[0]);

          var n = i.length();
          var r = this._data.points[0];
          n < 22 && (r = this._data.points[1].addScaled(i.normalized(), -22), i = this._data.points[1].subtract(r));

          var s = new o.Point(i.y, -i.x).normalized(),
              a = this._arrowGeometry(i.length()),
              l = i.normalized();

          t.lineWidth = function (e) {
            var t = Math.round(.02 * e);
            return t = Math.min(t, 5), t = Math.max(t, 2), t;
          }(i.length()), t.beginPath(), t.moveTo(r.x, r.y);

          for (var _e16 = 0; _e16 < a.length; _e16++) {
            var _i9 = a[_e16],
                _n7 = r.addScaled(l, _i9.x).addScaled(s, _i9.y);

            t.lineTo(_n7.x, _n7.y);
          }

          t.lineTo(this._data.points[1].x, this._data.points[1].y);

          for (var _e17 = a.length - 1; _e17 >= 0; _e17--) {
            var _i10 = a[_e17],
                _n8 = r.addScaled(l, _i10.x).addScaled(s, -_i10.y);

            t.lineTo(_n8.x, _n8.y);
          }

          t.lineTo(r.x, r.y), t.stroke(), t.fill();
        }
      }, {
        key: "_arrowGeometry",
        value: function _arrowGeometry(e) {
          var t = h(e),
              i = [],
              n = e >= 35 ? .1 : 0;
          return i.push(new o.Point(0, 0)), i.push(new o.Point(e - t + t * n, 1.22 * t / 4)), i.push(new o.Point(e - t, 1.22 * t / 2)), i.push(new o.Point(e, 0)), i;
        }
      }, {
        key: "_hittestGeometry",
        value: function _hittestGeometry(e) {
          var t = h(e),
              i = [];
          return i.push(new o.Point(0, 0)), i.push(new o.Point(e - t, 1.22 * t / 4)), i.push(new o.Point(e - t, 1.22 * t / 2)), i.push(new o.Point(e, 0)), i;
        }
      }]);

      return c;
    }(a.MediaCoordinatesPaneRenderer);

    var u = i(70531),
        p = i(46501);

    var _ =
    /*#__PURE__*/
    function (_n$LineSourcePaneView2) {
      _inherits(_, _n$LineSourcePaneView2);

      function _(e, t) {
        var _this7;

        _classCallCheck(this, _);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, e, t)), _this7._textRendererData = {
          text: "",
          color: "",
          vertAlign: "middle",
          horzAlign: "center",
          font: "",
          offsetX: 10,
          offsetY: 10,
          points: [],
          forceTextAlign: !0
        }, _this7._arrowRendererData = {
          points: [],
          color: ""
        }, _this7._ellipseRendererData = {
          color: "",
          linewidth: 0,
          points: [],
          fillBackground: !0,
          backcolor: "",
          noHitTestOnBackground: !0
        }, _this7._drawAsCircle = !1, _this7._textRenderer = new s.TextRenderer(_this7._textRendererData), _this7._arrowRenderer = new c(_this7._arrowRendererData), _this7._ellipseRenderer = new u.EllipseRendererSimple(_this7._ellipseRendererData);
        return _this7;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          this._invalidated && this._updateImpl();
          var i = new r.CompositeRenderer();
          this._drawAsCircle ? i.append(this._ellipseRenderer) : i.append(this._arrowRenderer);

          var n = this._getSource().properties().childs();

          return this._textRendererData.points && this._textRendererData.points.length > 0 && n.showLabel.value() && (this._textRenderer.setData(_objectSpread({}, this._textRendererData)), i.append(this._textRenderer)), this.addAnchors(i), i;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this);

          var e = this._getPoints(),
              t = this._getSource().properties().childs();

          if (this._arrowRendererData.color = t.backgroundColor.value(), this._arrowRendererData.points = e, this._textRendererData.text = t.text.value(), this._textRendererData.color = t.textColor.value(), this._textRendererData.font = p.CHART_FONT_FAMILY, this._textRendererData.bold = t.bold.value(), this._textRendererData.italic = t.italic.value(), this._textRendererData.fontsize = t.fontsize.value(), e.length >= 2) {
            var _i11 = this._getSource().points(),
                _n9 = _i11[0].index - _i11[1].index,
                _r5 = _i11[0].price - _i11[1].price;

            if (this._drawAsCircle = 0 === _n9 && Math.abs(_r5) < 1e-8, this._textRendererData.points = [e[0]], this._drawAsCircle) {
              this._textRendererData.horzAlign = "left", this._textRendererData.vertAlign = "middle";

              var _i12 = new o.Point(e[0].x - 9, e[0].y - 9),
                  _n10 = new o.Point(e[0].x + 9, e[0].y + 9);

              this._ellipseRendererData.points = [_i12, _n10], this._ellipseRendererData.backcolor = t.backgroundColor.value(), this._ellipseRendererData.color = t.backgroundColor.value();
            } else {
              var _t5 = e[1].subtract(e[0]);

              Math.abs(_t5.x) >= Math.abs(_t5.y) ? (e[1].x > e[0].x ? this._textRendererData.horzAlign = "right" : this._textRendererData.horzAlign = "left", this._textRendererData.vertAlign = "middle") : (e[1].y > e[0].y ? this._textRendererData.vertAlign = "bottom" : this._textRendererData.vertAlign = "top", this._textRendererData.horzAlign = "center");
            }
          }
        }
      }]);

      return _;
    }(n.LineSourcePaneView);
  },
  74718: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      BalloonPaneView: function BalloonPaneView() {
        return f;
      }
    });
    var n = i(29764),
        r = i(87095),
        s = i(46501),
        o = i(79191),
        a = i(86441),
        l = i(34026),
        d = i(38223),
        h = i(74359),
        c = i(15187),
        u = i(18807);

    var p =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa2) {
      _inherits(p, _c$MediaCoordinatesPa2);

      function p() {
        var _this8;

        _classCallCheck(this, p);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this8._geometryCache = {
          innerHeight: NaN,
          textHorizontalPadding: NaN,
          innerWidth: NaN,
          paddingLeft: NaN
        }, _this8._geomertryCacheInvalidated = !0, _this8._data = null;
        return _this8;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e, this._geomertryCacheInvalidated = !0;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || 0 === this._data.points.length) return null;
          var i = this._data.points[0].x - (this._geometryCache.paddingLeft + 20),
              n = this._data.points[0].y - (this._geometryCache.innerHeight + 9),
              r = (0, a.box)(new a.Point(i, n), new a.Point(i + this._geometryCache.innerWidth, n + this._geometryCache.innerHeight));
          return (0, l.pointInBox)(e, r) ? new u.HitTestResult(u.HitTarget.MovePoint, {
            areaName: u.AreaName.Text
          }) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || 0 === this._data.points.length) return;
          var t = e.context;
          t.font = this._data.font;

          var i = this._measureInfo(t, this._data.label, this._data.fontSize),
              n = i.paddingLeft,
              r = i.innerHeight,
              s = i.innerWidth,
              o = i.textHorizontalPadding;

          t.textAlign = (0, d.isRtl)() ? "right" : "left";
          var a = this._data.points[0].x - (n + 20),
              l = this._data.points[0].y - (r + 9);
          t.translate(a, l), t.beginPath(), t.moveTo(24, r), t.lineTo(15, r), t.arcTo(-1e3, 0, 1e3, 0, r / 2), t.lineTo(s - 15, 0), t.arcTo(1e3, r, -1e3, r, r / 2), t.lineTo(33, r), t.quadraticCurveTo(33, r + 4, 35, r + 9), t.quadraticCurveTo(27, r + 6, 24, r), t.fillStyle = this._data.backgroundColor, t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "middle", t.fillStyle = this._data.color, t.fillText(this._data.label, n + o, r / 2);
        }
      }, {
        key: "_measureInfo",
        value: function _measureInfo(e, t, i) {
          if (this._geomertryCacheInvalidated) {
            var _n11 = e.measureText(t),
                _r6 = i,
                _s2 = 15,
                _o3 = Math.round(_r6 / 1.3),
                _a3 = _n11.width + 2 * _s2,
                _l3 = _r6 + 2 * _o3,
                _d3 = (0, h.calcTextHorizontalShift)(e, _n11.width);

            this._geometryCache = {
              paddingLeft: _s2,
              innerWidth: _a3,
              innerHeight: _l3,
              textHorizontalPadding: _d3
            }, this._geomertryCacheInvalidated = !1;
          }

          return this._geometryCache;
        }
      }]);

      return p;
    }(c.MediaCoordinatesPaneRenderer);

    var _ = i(19266),
        g = i(80101);

    var f =
    /*#__PURE__*/
    function (_o$LineSourcePaneView) {
      _inherits(f, _o$LineSourcePaneView);

      function f(e, t) {
        var _this9;

        _classCallCheck(this, f);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this, e, t)), _this9._balloonRenderer = new p(), _this9._renderer = null;
        return _this9;
      }

      _createClass(f, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          _get(_getPrototypeOf(f.prototype), "_updateImpl", this).call(this, e, t);

          var i = this._source.properties().childs(),
              o = {
            points: this._points,
            color: i.color.value(),
            borderColor: i.borderColor.value(),
            backgroundColor: (0, r.generateColor)(i.backgroundColor.value(), i.transparency.value()),
            font: (0, n.makeFont)(i.fontsize.value(), s.CHART_FONT_FAMILY),
            fontSize: i.fontsize.value(),
            label: i.text.value()
          };

          if (this._balloonRenderer.setData(o), 1 === o.points.length) {
            var _e18 = new _.CompositeRenderer();

            return _e18.append(this._balloonRenderer), _e18.append(new g.SelectionRenderer({
              points: o.points,
              bgColors: this._lineAnchorColors(o.points),
              visible: this.areAnchorsVisible(),
              barSpacing: this._model.timeScale().barSpacing(),
              hittestResult: u.HitTarget.MovePoint
            })), void (this._renderer = _e18);
          }

          this._renderer = this._balloonRenderer;
        }
      }]);

      return f;
    }(o.LineSourcePaneView);
  },
  45371: function _(e, t, i) {
    "use strict";

    var _v;

    i.r(t), i.d(t, {
      BarsPatternPaneView: function BarsPatternPaneView() {
        return x;
      }
    });

    var n = i(86441),
        r = i(48891),
        s = i(79849),
        o = i(87095),
        a = i(18807),
        l = i(19266),
        d = i(73436),
        h = i(1149),
        c = i(72739),
        u = i(99031),
        p = i(71254),
        _ = i(79191),
        g = i(99987);

    var f = r.colorsPalette["color-cold-gray-500"],
        v = (_v = {}, _defineProperty(_v, g.LineToolBarsPatternMode.Bars, function (e) {
      return [e[2], e[3]];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.Line, function (e) {
      return e[4];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.OpenClose, function (e) {
      return [e[1], e[4]];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.LineOpen, function (e) {
      return e[1];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.LineHigh, function (e) {
      return e[2];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.LineLow, function (e) {
      return e[3];
    }), _defineProperty(_v, g.LineToolBarsPatternMode.LineHL2, function (e) {
      return (e[2] + e[3]) / 2;
    }), _v);

    var x =
    /*#__PURE__*/
    function (_$LineSourcePaneView) {
      _inherits(x, _$LineSourcePaneView);

      function x() {
        var _this10;

        _classCallCheck(this, x);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(x).apply(this, arguments)), _this10._vertLineRenderer1 = new p.VerticalLineRenderer(), _this10._vertLineRenderer2 = new p.VerticalLineRenderer(), _this10._medianRenderer = new u.TrendLineRenderer(), _this10._renderer = null;
        return _this10;
      }

      _createClass(x, [{
        key: "renderer",
        value: function renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var _this11 = this;

          var e, t;
          if (_get(_getPrototypeOf(x.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var i = this._source.priceScale(),
              r = null !== (t = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;

          if (!i || i.isEmpty() || null === r) return;

          var u = this._source.points(),
              p = this._source.pattern(),
              _ = p.length,
              x = new l.CompositeRenderer();

          if (_ > 0 && 2 === u.length) {
            (function () {
              var e = _this11._source.properties().childs(),
                  t = e.mode.value(),
                  l = e.color.value(),
                  d = Math.abs((_this11._points[0].x - _this11._points[1].x) / (_ - 1)),
                  f = _this11._source.getScale(),
                  m = function m(e) {
                return i.priceToCoordinate(e, r) * f;
              },
                  _u = _slicedToArray(u, 2),
                  w = _u[0].index,
                  R = _u[1].index,
                  y = w < R ? _this11._points[0] : _this11._points[1],
                  T = y.x,
                  b = y.y - m(_this11._source.firstPatternPrice());

              if (t === g.LineToolBarsPatternMode.Bars || t === g.LineToolBarsPatternMode.OpenClose) {
                var _e19 = v[t];

                var _loop = function _loop(_t6) {
                  var i = Math.round(T + _t6 * d + .5),
                      r = _e19(p[_t6]).map(function (e, t) {
                    return new n.Point(i + (2 * t - 1), Math.round(m(e)) + b);
                  }),
                      s = new c.RectangleRenderer();

                  s.setData({
                    points: r,
                    color: l,
                    backcolor: l,
                    linewidth: 1,
                    fillBackground: !0,
                    transparency: 10,
                    extendLeft: !1,
                    extendRight: !1
                  }), x.append(s);
                };

                for (var _t6 = 0; _t6 < _; _t6++) {
                  _loop(_t6);
                }

                x.append(_this11.createLineAnchor({
                  points: _this11._points
                }, 0));
              } else {
                var _e20 = v[t],
                    _i13 = p.map(function (t, i) {
                  return new n.Point(T + i * d, m(_e20(t)) + b);
                });

                x.append(new h.PaneRendererLine({
                  barSpacing: d,
                  items: _i13,
                  lineColor: (0, o.generateColor)(l, 10),
                  lineStyle: s.LINESTYLE_SOLID,
                  lineWidth: 2,
                  hittest: new a.HitTestResult(a.HitTarget.MovePoint),
                  simpleMode: !0,
                  withMarkers: !1
                })), x.append(_this11.createLineAnchor({
                  points: _this11._points
                }, 1));
              }
            })();
          } else this._vertLineRenderer1.setData({
            x: this._points[0].x,
            color: f,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID
          }), x.append(this._vertLineRenderer1), this._vertLineRenderer2.setData({
            x: this._points[1].x,
            color: f,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID
          }), x.append(this._vertLineRenderer2), this._medianRenderer.setData({
            points: this._points,
            color: f,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: d.LineEnd.Normal,
            rightend: d.LineEnd.Normal
          }), x.append(this._medianRenderer);

          this._renderer = x;
        }
      }]);

      return x;
    }(_.LineSourcePaneView);
  },
  56853: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      BezierCubicPaneView: function BezierCubicPaneView() {
        return v;
      }
    });
    var n = i(87095),
        r = i(79191),
        s = i(15187),
        o = i(18807),
        a = i(2436),
        l = i(99031),
        d = i(73436),
        h = i(54364),
        c = i(45197),
        u = i(68441);

    var p =
    /*#__PURE__*/
    function (_s$MediaCoordinatesPa) {
      _inherits(p, _s$MediaCoordinatesPa);

      function p(e) {
        var _this12;

        _classCallCheck(this, p);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this12._data = e || null;
        return _this12;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          var i = this._data;
          if (null === i) return null;

          if (4 === i.points.length) {
            var _t7 = (0, c.interactionTolerance)().curve,
                _i$points = _slicedToArray(i.points, 4),
                _n12 = _i$points[0],
                _r7 = _i$points[1],
                _s3 = _i$points[2],
                _l4 = _i$points[3],
                _d4 = _l4.subtract(_n12),
                _u2 = _s3.subtract(_d4.scaled(.25)),
                _p = _s3.add(_d4.scaled(.25)),
                _2 = _r7.subtract(_s3),
                _g = _l4.subtract(_2.scaled(.25)),
                _f = _l4.add(_2.scaled(.25));

            if ((0, a.quadroBezierHitTest)(_s3, _n12, _u2, e, _t7) || (0, a.cubicBezierHitTest)(_s3, _l4, _p, _g, e, _t7) || (0, a.quadroBezierHitTest)(_l4, _r7, _f, e, _t7)) return new o.HitTestResult(o.HitTarget.MovePoint);

            var _v2 = (0, h.hitTestExtendedPoints)(e, _t7, i.extendLeftPoints);

            return null === _v2 && (_v2 = (0, h.hitTestExtendedPoints)(e, _t7, i.extendRightPoints)), _v2;
          }

          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;
          t.lineCap = "round", t.strokeStyle = this._data.color, t.lineWidth = this._data.lineWidth, (0, u.setLineStyle)(t, this._data.lineStyle);
          var i = this._data.points[0],
              n = this._data.points[1];
          if (2 === this._data.points.length) t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(n.x, n.y), t.stroke(), this._data.leftEnd === d.LineEnd.Arrow && (0, l.drawArrow)(n, i, t, t.lineWidth, 1), this._data.rightEnd === d.LineEnd.Arrow && (0, l.drawArrow)(i, n, t, t.lineWidth, 1);else {
            var _e21 = this._data.points[2],
                _r8 = this._data.points[3],
                _s4 = _r8.subtract(i),
                _o4 = _e21.subtract(_s4.scaled(.25)),
                _a4 = _e21.add(_s4.scaled(.25)),
                _c = n.subtract(_e21),
                _u3 = _r8.subtract(_c.scaled(.25)),
                _p2 = _r8.add(_c.scaled(.25));

            this._data.fillBack && this._data.points.length > 2 && (t.fillStyle = this._data.backColor, t.beginPath(), t.moveTo(i.x, i.y), t.quadraticCurveTo(_o4.x, _o4.y, _e21.x, _e21.y), t.bezierCurveTo(_a4.x, _a4.y, _u3.x, _u3.y, _r8.x, _r8.y), t.quadraticCurveTo(_p2.x, _p2.y, n.x, n.y), t.fill()), t.beginPath(), (0, h.buildExtendedSegments)(t, this._data.extendLeftPoints), t.moveTo(i.x, i.y), t.quadraticCurveTo(_o4.x, _o4.y, _e21.x, _e21.y), t.bezierCurveTo(_a4.x, _a4.y, _u3.x, _u3.y, _r8.x, _r8.y), t.quadraticCurveTo(_p2.x, _p2.y, n.x, n.y), (0, h.buildExtendedSegments)(t, this._data.extendRightPoints), this._data.leftEnd === d.LineEnd.Arrow && (0, l.drawArrow)(_o4, i, t, t.lineWidth, 1), this._data.rightEnd === d.LineEnd.Arrow && (0, l.drawArrow)(_p2, n, t, t.lineWidth, 1), t.stroke();
          }
        }
      }]);

      return p;
    }(s.MediaCoordinatesPaneRenderer);

    var _ = i(19266),
        g = i(33730),
        f = i(50151);

    var v =
    /*#__PURE__*/
    function (_r$LineSourcePaneView2) {
      _inherits(v, _r$LineSourcePaneView2);

      function v() {
        var _this13;

        _classCallCheck(this, v);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(v).apply(this, arguments)), _this13._bezierCubicRenderer = new p(), _this13._renderer = null, _this13._extendedSegmentLeftCache = null, _this13._extendedSegmentRightCache = null;
        return _this13;
      }

      _createClass(v, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          if (_get(_getPrototypeOf(v.prototype), "_updateImpl", this).call(this, e, t), this._renderer = null, this._points.length < 2) return;

          var i = this._source.properties().childs();

          var r = [],
              s = [];

          if (4 === this._source.points().length) {
            var _n13 = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[0])),
                _o5 = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[1])),
                _a5 = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[2])),
                _l5 = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[3])),
                _d5 = _l5.subtract(_n13),
                _h2 = _a5.subtract(_d5.scaled(.25)),
                _c2 = _o5.subtract(_a5),
                _u4 = _l5.add(_c2.scaled(.25));

            i.extendLeft.value() && (r = this._extendSegmentLeft(_a5, _n13, _h2, t, e)), i.extendRight.value() && (s = this._extendSegmentRight(_l5, _o5, _u4, t, e));
          }

          var o = this._points.slice(),
              a = this._source.controlPoints();

          null !== a && (o.push((0, f.ensureNotNull)(this._source.pointToScreenPoint(a[0]))), o.push((0, f.ensureNotNull)(this._source.pointToScreenPoint(a[1]))));
          var l = {
            points: o,
            color: i.linecolor.value(),
            lineWidth: i.linewidth.value(),
            lineStyle: i.linestyle.value(),
            leftEnd: i.leftEnd.value(),
            rightEnd: i.rightEnd.value(),
            fillBack: i.fillBackground.value(),
            backColor: (0, n.generateColor)(i.backgroundColor.value(), i.transparency.value()),
            extendLeftPoints: r,
            extendRightPoints: s
          };

          this._bezierCubicRenderer.setData(l);

          var d = new _.CompositeRenderer();
          d.append(this._bezierCubicRenderer), this.addAnchors(d), this._renderer = d;
        }
      }, {
        key: "_extendSegmentLeft",
        value: function _extendSegmentLeft(e, t, i, n, r) {
          return (0, g.cacheIsValid)(this._extendedSegmentLeftCache, e, t, i, n, r) || (this._extendedSegmentLeftCache = {
            p1: e,
            p2: t,
            p3: i,
            width: n,
            height: r,
            segment: (0, a.extendQuadroBezier)(e, t, i, n, r)
          }), (0, f.ensureNotNull)(this._extendedSegmentLeftCache).segment;
        }
      }, {
        key: "_extendSegmentRight",
        value: function _extendSegmentRight(e, t, i, n, r) {
          return (0, g.cacheIsValid)(this._extendedSegmentRightCache, e, t, i, n, r) || (this._extendedSegmentRightCache = {
            p1: e,
            p2: t,
            p3: i,
            width: n,
            height: r,
            segment: (0, a.extendQuadroBezier)(e, t, i, n, r)
          }), (0, f.ensureNotNull)(this._extendedSegmentRightCache).segment;
        }
      }]);

      return v;
    }(r.LineSourcePaneView);
  },
  33730: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      BezierQuadroPaneView: function BezierQuadroPaneView() {
        return h;
      },
      cacheIsValid: function cacheIsValid() {
        return d;
      }
    });
    var n = i(50151),
        r = i(87095),
        s = i(79191),
        o = i(19266),
        a = i(2436),
        l = i(54364);

    function d(e, t, i, n, r, s) {
      return null !== e && e.p1.x === t.x && e.p1.y === t.y && e.p2.x === i.x && e.p2.y === i.y && e.p3.x === n.x && e.p3.y === n.y && e.width === r && e.height === s;
    }

    var h =
    /*#__PURE__*/
    function (_s$LineSourcePaneView) {
      _inherits(h, _s$LineSourcePaneView);

      function h() {
        var _this14;

        _classCallCheck(this, h);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this14._bezierQuadroRenderer = new l.BezierQuadroRenderer(), _this14._renderer = null, _this14._extendedSegmentLeftCache = null, _this14._extendedSegmentRightCache = null;
        return _this14;
      }

      _createClass(h, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          if (_get(_getPrototypeOf(h.prototype), "_updateImpl", this).call(this, e, t), this._renderer = null, this._points.length < 2) return;

          var i = this._source.properties().childs();

          var s = [],
              a = [];

          if (3 === this._source.points().length) {
            var _r9 = (0, n.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[0])),
                _o6 = (0, n.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[1])),
                _l6 = (0, n.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[2])),
                _d6 = _o6.subtract(_r9),
                _h3 = _l6.subtract(_d6.scaled(.25)),
                _c3 = _l6.add(_d6.scaled(.25));

            i.extendLeft.value() && (s = this._extendSegmentLeft(_l6, _r9, _h3, t, e)), i.extendRight.value() && (a = this._extendSegmentRight(_l6, _o6, _c3, t, e));
          }

          var l = this._points.slice(),
              d = this._source.controlPoint();

          null !== d && l.push((0, n.ensureNotNull)(this._source.pointToScreenPoint(d)));
          var h = {
            points: l,
            color: i.linecolor.value(),
            lineWidth: i.linewidth.value(),
            lineStyle: i.linestyle.value(),
            leftEnd: i.leftEnd.value(),
            rightEnd: i.rightEnd.value(),
            fillBack: i.fillBackground.value(),
            backColor: (0, r.generateColor)(i.backgroundColor.value(), i.transparency.value()),
            extendLeftSegments: s,
            extendRightSegments: a
          };

          this._bezierQuadroRenderer.setData(h);

          var c = new o.CompositeRenderer();
          c.append(this._bezierQuadroRenderer), this.addAnchors(c), this._renderer = c;
        }
      }, {
        key: "_extendSegmentLeft",
        value: function _extendSegmentLeft(e, t, i, r, s) {
          return d(this._extendedSegmentLeftCache, e, t, i, r, s) || (this._extendedSegmentLeftCache = {
            p1: e,
            p2: t,
            p3: i,
            width: r,
            height: s,
            segment: (0, a.extendQuadroBezier)(e, t, i, r, s)
          }), (0, n.ensureNotNull)(this._extendedSegmentLeftCache).segment;
        }
      }, {
        key: "_extendSegmentRight",
        value: function _extendSegmentRight(e, t, i, r, s) {
          return d(this._extendedSegmentRightCache, e, t, i, r, s) || (this._extendedSegmentRightCache = {
            p1: e,
            p2: t,
            p3: i,
            width: r,
            height: s,
            segment: (0, a.extendQuadroBezier)(e, t, i, r, s)
          }), (0, n.ensureNotNull)(this._extendedSegmentRightCache).segment;
        }
      }]);

      return h;
    }(s.LineSourcePaneView);
  },
  54364: function _(e, t, i) {
    "use strict";

    i.d(t, {
      BezierQuadroRenderer: function BezierQuadroRenderer() {
        return p;
      },
      buildExtendedSegments: function buildExtendedSegments() {
        return u;
      },
      hitTestExtendedPoints: function hitTestExtendedPoints() {
        return c;
      }
    });
    var n = i(4652),
        r = i(15187),
        s = i(73436),
        o = i(18807),
        a = i(2436),
        l = i(99031),
        d = i(45197),
        h = i(68441);

    function c(e, t, i) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _r10 = _step.value;

          for (var _i14 = 1; _i14 < _r10.length; _i14++) {
            var _s5 = _r10[_i14 - 1],
                _a6 = _r10[_i14];
            if ((0, n.distanceToSegment)(_s5, _a6, e).distance < t) return new o.HitTestResult(o.HitTarget.MovePoint);
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

      return null;
    }

    function u(e, t) {
      for (var _i15 = 0; _i15 < t.length; _i15++) {
        var _n14 = t[_i15],
            _r11 = _n14[0];
        e.moveTo(_r11.x, _r11.y);

        for (var _t8 = 1; _t8 < _n14.length; _t8++) {
          var _i16 = _n14[_t8];
          e.lineTo(_i16.x, _i16.y);
        }
      }
    }

    var p =
    /*#__PURE__*/
    function (_r$MediaCoordinatesPa) {
      _inherits(p, _r$MediaCoordinatesPa);

      function p(e) {
        var _this15;

        _classCallCheck(this, p);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this15._data = e || null;
        return _this15;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null !== this._data && 3 === this._data.points.length) {
            var _t9 = (0, d.interactionTolerance)().curve,
                _this$_data$points = _slicedToArray(this._data.points, 3),
                _i17 = _this$_data$points[0],
                _n15 = _this$_data$points[1],
                _r12 = _this$_data$points[2],
                _s6 = _n15.subtract(_i17),
                _l7 = _r12.subtract(_s6.scaled(.25)),
                _h4 = _r12.add(_s6.scaled(.25));

            if ((0, a.quadroBezierHitTest)(_r12, _i17, _l7, e, _t9) || (0, a.quadroBezierHitTest)(_r12, _n15, _h4, e, _t9)) return new o.HitTestResult(o.HitTarget.MovePoint);

            var _u5 = c(e, _t9, this._data.extendLeftSegments);

            return null === _u5 && (_u5 = c(e, _t9, this._data.extendRightSegments)), _u5;
          }

          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;

          var _this$_data$points2 = _slicedToArray(this._data.points, 3),
              t = _this$_data$points2[0],
              i = _this$_data$points2[1],
              n = _this$_data$points2[2],
              r = e.context;

          if (r.lineCap = "round", r.strokeStyle = this._data.color, r.lineWidth = this._data.lineWidth, (0, h.setLineStyle)(r, this._data.lineStyle), 2 === this._data.points.length) r.beginPath(), r.moveTo(t.x, t.y), r.lineTo(i.x, i.y), r.stroke();else {
            var _e22 = i.subtract(t),
                _o7 = n.subtract(_e22.scaled(.25)),
                _a7 = n.add(_e22.scaled(.25));

            this._data.fillBack && this._data.points.length > 2 && (r.fillStyle = this._data.backColor, r.beginPath(), r.moveTo(t.x, t.y), r.quadraticCurveTo(_o7.x, _o7.y, n.x, n.y), r.quadraticCurveTo(_a7.x, _a7.y, i.x, i.y), r.fill()), r.beginPath(), u(r, this._data.extendLeftSegments), r.moveTo(t.x, t.y), r.quadraticCurveTo(_o7.x, _o7.y, n.x, n.y), r.quadraticCurveTo(_a7.x, _a7.y, i.x, i.y), u(r, this._data.extendRightSegments), this._data.leftEnd === s.LineEnd.Arrow && (0, l.drawArrow)(_o7, t, r, r.lineWidth, 1), this._data.rightEnd === s.LineEnd.Arrow && (0, l.drawArrow)(_a7, i, r, r.lineWidth, 1), r.stroke();
          }
        }
      }]);

      return p;
    }(r.MediaCoordinatesPaneRenderer);
  },
  26049: function _(e, t, i) {
    "use strict";

    i.d(t, {
      BrushBasePaneView: function BrushBasePaneView() {
        return d;
      }
    });
    var n = i(86441),
        r = i(79797),
        s = i(80101),
        o = i(19266),
        a = i(18807),
        l = i(79191);

    var d =
    /*#__PURE__*/
    function (_l$LineSourcePaneView2) {
      _inherits(d, _l$LineSourcePaneView2);

      function d() {
        var _this16;

        _classCallCheck(this, d);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this16._polygonRenderer = new r.PolygonRenderer(), _this16._renderer = new o.CompositeRenderer();
        return _this16;
      }

      _createClass(d, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(d.prototype), "_updateImpl", this).call(this);

          var e = Math.max(1, this._source.smooth()),
              t = this._points;
          if (0 === t.length) return void this._renderer.clear();
          var i = [t[0]];

          for (var _n16 = 1; _n16 < t.length; _n16++) {
            var _r13 = t[_n16].subtract(t[_n16 - 1]),
                _s7 = _r13.length(),
                _o8 = Math.min(5, Math.floor(_s7 / e)),
                _a8 = _r13.normalized().scaled(_s7 / _o8);

            for (var _e23 = 0; _e23 < _o8 - 1; _e23++) {
              i.push(t[_n16 - 1].add(_a8.scaled(_e23)));
            }

            i.push(t[_n16]);
          }

          this._points = this._smoothArray(i, e);

          var n = this._createPolygonRendererData();

          if (this._polygonRenderer.setData(n), this._renderer = new o.CompositeRenderer(), this._renderer.append(this._polygonRenderer), this._source.finished()) {
            var _e24 = n.points.length;

            if (_e24 > 0) {
              var _t10 = 1 !== _e24 ? [n.points[0], n.points[_e24 - 1]] : [n.points[0]],
                  _i18 = new s.SelectionRenderer({
                points: _t10,
                bgColors: this._lineAnchorColors(_t10),
                visible: this.areAnchorsVisible(),
                hittestResult: a.HitTarget.Regular,
                barSpacing: this._getModel().timeScale().barSpacing()
              });

              this._renderer.append(_i18);
            }
          }
        }
      }, {
        key: "_smoothArray",
        value: function _smoothArray(e, t) {
          if (1 === e.length) return e;
          var i = new Array(e.length);

          for (var _r14 = 0; _r14 < e.length; _r14++) {
            var _s8 = new n.Point(0, 0);

            for (var _i19 = 0; _i19 < t; _i19++) {
              var _t11 = Math.max(_r14 - _i19, 0),
                  _n17 = Math.min(_r14 + _i19, e.length - 1);

              _s8 = _s8.add(e[_t11]), _s8 = _s8.add(e[_n17]);
            }

            i[_r14] = _s8.scaled(.5 / t);
          }

          return i.push(e[e.length - 1]), i;
        }
      }]);

      return d;
    }(l.LineSourcePaneView);
  },
  48188: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      BrushPaneView: function BrushPaneView() {
        return s;
      }
    });
    var n = i(79849),
        r = i(26049);

    var s =
    /*#__PURE__*/
    function (_r$BrushBasePaneView) {
      _inherits(s, _r$BrushBasePaneView);

      function s() {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, _getPrototypeOf(s).apply(this, arguments));
      }

      _createClass(s, [{
        key: "_createPolygonRendererData",
        value: function _createPolygonRendererData() {
          var e = this._source.properties().childs(),
              t = {
            points: this._points,
            color: e.linecolor.value(),
            linewidth: e.linewidth.value(),
            linestyle: n.LINESTYLE_SOLID,
            skipClosePath: !0,
            leftend: e.leftEnd.value(),
            rightend: e.rightEnd.value(),
            filled: !1,
            fillBackground: !1,
            backcolor: e.backgroundColor.value()
          };

          return e.fillBackground.value() && this._model.lineBeingCreated() !== this._source && (t.filled = !0, t.fillBackground = !0, t.transparency = e.transparency.value()), t;
        }
      }]);

      return s;
    }(r.BrushBasePaneView);
  },
  70326: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      CalloutPaneView: function CalloutPaneView() {
        return v;
      }
    });
    var n = i(86441),
        r = i(50151),
        s = i(29764),
        o = i(19266),
        a = i(46501),
        l = i(38223),
        d = i(87095),
        h = i(74359),
        c = i(15187),
        u = i(18807);

    var p =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa3) {
      _inherits(p, _c$MediaCoordinatesPa3);

      function p() {
        var _this17;

        _classCallCheck(this, p);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this17._data = null, _this17._textSizeCache = {
          totalHeight: NaN,
          totalWidth: NaN
        };
        return _this17;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
              i = this._data.points[1];
          if (t.subtract(e).length() < 3) return new u.HitTestResult(u.HitTarget.ChangePoint);
          var n = i.x - this._textSizeCache.totalWidth / 2,
              r = i.y - this._textSizeCache.totalHeight / 2;
          return e.x >= n && e.x <= n + this._textSizeCache.totalWidth && e.y >= r && e.y <= r + this._textSizeCache.totalHeight ? new u.HitTestResult(u.HitTarget.MovePoint, {
            areaName: u.AreaName.Text
          }) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;

          var t = this._data.points[0].clone(),
              i = this._data.points[1].clone(),
              n = e.context;

          n.lineCap = "round", n.strokeStyle = this._data.bordercolor, n.lineWidth = this._data.linewidth, n.textBaseline = "bottom", n.font = this._data.textData.font;
          var r = this._data.textData.fontSize * this._data.textData.lines.length,
              s = this._data.textData.maxWidth,
              o = s + 20,
              a = r + 20;
          this._textSizeCache.totalWidth = o, this._textSizeCache.totalHeight = a;
          var c = i.x - o / 2,
              u = i.y - a / 2,
              p = 0;

          var _ = s + 4 > 16,
              g = r + 4 > 16;

          n.textAlign = (0, l.isRtl)() ? "right" : "left";
          var f = (0, h.calcTextHorizontalShift)(n, s);
          t.x > c + o ? p = 20 : t.x > c && (p = 10), t.y > u + a ? p += 2 : t.y > u && (p += 1), n.translate(c, u), t.x -= c, t.y -= u, i.x -= c, i.y -= u, n.beginPath(), n.moveTo(8, 0), 10 === p ? _ ? (n.lineTo(i.x - 8, 0), n.lineTo(t.x, t.y), n.lineTo(i.x + 8, 0), n.lineTo(o - 8, 0)) : (n.lineTo(t.x, t.y), n.lineTo(o - 8, 0)) : n.lineTo(o - 8, 0), 20 === p ? (n.lineTo(t.x, t.y), n.lineTo(o, 8)) : n.arcTo(o, 0, o, 8, 8), 21 === p ? g ? (n.lineTo(o, i.y - 8), n.lineTo(t.x, t.y), n.lineTo(o, i.y + 8), n.lineTo(o, a - 8)) : (n.lineTo(t.x, t.y), n.lineTo(o, a - 8)) : n.lineTo(o, a - 8), 22 === p ? (n.lineTo(t.x, t.y), n.lineTo(o - 8, a)) : n.arcTo(o, a, o - 8, a, 8), 12 === p ? _ ? (n.lineTo(i.x + 8, a), n.lineTo(t.x, t.y), n.lineTo(i.x - 8, a), n.lineTo(8, a)) : (n.lineTo(t.x, t.y), n.lineTo(8, a)) : n.lineTo(8, a), 2 === p ? (n.lineTo(t.x, t.y), n.lineTo(0, a - 8)) : n.arcTo(0, a, 0, a - 8, 8), 1 === p ? g ? (n.lineTo(0, i.y + 8), n.lineTo(t.x, t.y), n.lineTo(0, i.y - 8), n.lineTo(0, 8)) : (n.lineTo(t.x, t.y), n.lineTo(0, 8)) : n.lineTo(0, 8), 0 === p ? (n.lineTo(t.x, t.y), n.lineTo(8, 0)) : n.arcTo(0, 0, 8, 0, 8), n.stroke(), n.fillStyle = (0, d.generateColor)(this._data.backcolor, this._data.transparency), n.fill(), n.fillStyle = this._data.color, u = 10 + this._data.textData.fontSize, c = 10 + f;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._data.textData.lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e25 = _step2.value;
              n.fillText(_e25, c, u), u += this._data.textData.fontSize;
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
      }]);

      return p;
    }(c.MediaCoordinatesPaneRenderer);

    var _ = i(79191),
        g = i(80657);

    var f = null;

    var v =
    /*#__PURE__*/
    function (_$LineSourcePaneView2) {
      _inherits(v, _$LineSourcePaneView2);

      function v(e, t) {
        var _this18;

        _classCallCheck(this, v);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e, t)), _this18._calloutRenderer = new p(), _this18._renderer = new o.CompositeRenderer();
        return _this18;
      }

      _createClass(v, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(v.prototype), "_updateImpl", this).call(this), this._source.calculatePoint2(), this._renderer.clear(), !this._points[0]) return;
          if (this._points.length < 2) return;

          var e = this._source.properties().childs(),
              t = this._points[0],
              i = t.x + this._source.getBarOffset() * this._model.timeScale().barSpacing(),
              s = new n.Point(i, this._points[1].y),
              o = this._fontStyle(),
              a = e.wordWrap.value() ? e.wordWrapWidth.value() : void 0,
              l = (0, g.wordWrap)(e.text.value(), o, a);

          var d;
          d = void 0 !== a ? a : l.reduce(function (e, t) {
            return Math.max(e, function (e, t) {
              if (null === f) {
                var _e26 = document.createElement("canvas");

                _e26.width = 0, _e26.height = 0, f = (0, r.ensureNotNull)(_e26.getContext("2d"));
              }

              return f.font = t, f.measureText(e).width;
            }(t, o));
          }, 0);
          var h = {
            points: [t, s],
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            transparency: e.transparency.value(),
            textData: {
              lines: l,
              maxWidth: d,
              font: o,
              fontSize: e.fontsize.value()
            },
            bordercolor: e.bordercolor.value()
          };

          if (this._calloutRenderer.setData(h), this._renderer.append(this._calloutRenderer), this._renderer.append(this.createLineAnchor({
            points: [t]
          }, 0)), void 0 !== a) {
            var _e27 = h.points[1],
                _t12 = new n.Point(_e27.x + a / 2 + 8 + 2, _e27.y);

            _t12.data = 1, this._renderer.append(this.createLineAnchor({
              points: [_t12]
            }, 1));
          }
        }
      }, {
        key: "_fontStyle",
        value: function _fontStyle() {
          var e = this._source.properties().childs(),
              t = (e.bold.value() ? "bold " : "") + (e.italic.value() ? "italic " : ""),
              i = e.fontsize.value();

          return (0, s.makeFont)(i, a.CHART_FONT_FAMILY, t);
        }
      }]);

      return v;
    }(_.LineSourcePaneView);
  },
  71090: function _(e, t, i) {
    "use strict";

    var n = i(86441).Point,
        r = i(79191).LineSourcePaneView,
        s = i(71254).VerticalLineRenderer,
        o = i(99031).TrendLineRenderer,
        a = i(18807).HitTarget,
        l = i(19266).CompositeRenderer,
        d = i(73436).LineEnd;

    t.LineToolCircleLinesPaneView =
    /*#__PURE__*/
    function (_r15) {
      _inherits(_class, _r15);

      function _class(e, t) {
        var _this19;

        _classCallCheck(this, _class);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, e, t)), _this19._lines = [], _this19._trendRenderer = new o(), _this19._renderer = null;
        return _this19;
      }

      _createClass(_class, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class.prototype), "_updateImpl", this).call(this), this._renderer = null, !(this._source.points().length < 2)) {
            var e = this._model.timeScale();

            if (this._source.priceScale() && !this._source.priceScale().isEmpty() && !e.isEmpty()) {
              var t = this._source.points()[0],
                  i = this._source.points()[1],
                  r = i ? i.index - t.index : 1;

              if (this._lines = [], 0 !== r) {
                var o = e.visibleBarsStrictRange();
                if (r > 0) for (var h = t.index; h <= o.lastBar(); h += r) {
                  this._lines.push({
                    x: e.indexToCoordinate(h)
                  });
                } else for (h = t.index; h >= o.firstBar(); h += r) {
                  this._lines.push({
                    x: e.indexToCoordinate(h)
                  });
                }

                if (!(this._points.length < 2)) {
                  var c = new l(),
                      u = this._source.properties(),
                      p = {
                    points: [t, i],
                    width: this._model.timeScale().width(),
                    height: this._source.priceScale().height(),
                    color: u.trendline.color.value(),
                    linewidth: u.trendline.linewidth.value(),
                    linestyle: u.trendline.linestyle.value(),
                    extendleft: !1,
                    extendright: !1,
                    leftend: d.Normal,
                    rightend: d.Normal
                  };

                  this._trendRenderer.setData(p), c.append(this._trendRenderer);

                  var _ = this._model.timeScale().width(),
                      g = this._source.priceScale().height();

                  for (h = 0; h < this._lines.length; h++) {
                    var f = {
                      width: _,
                      height: g,
                      x: this._lines[h].x,
                      color: u.linecolor.value(),
                      linewidth: u.linewidth.value(),
                      linestyle: u.linestyle.value()
                    },
                        v = new s();
                    v.setData(f), c.append(v);
                  }

                  if (2 === this._source.points().length) {
                    var x = [].concat(this._points);
                    c.append(this.createLineAnchor({
                      points: x
                    }, 0));
                  } else c.append(this.createLineAnchor({
                    points: [new n(this._points[0].x, this._source.priceScale().height() / 2)],
                    hittestResult: a.MovePoint
                  }, 1));

                  this._renderer = c;
                }
              }
            }
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class;
    }(r);
  },
  79104: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      CirclePaneView: function CirclePaneView() {
        return c;
      }
    });
    var n = i(46501),
        r = i(80657),
        s = i(19266),
        o = i(79191),
        a = i(18807),
        l = i(34026),
        d = i(45197);

    var h =
    /*#__PURE__*/
    function () {
      function h(e) {
        _classCallCheck(this, h);

        this._data = null != e ? e : null;
      }

      _createClass(h, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          if (null === this._data) return;
          var _this$_data = this._data,
              i = _this$_data.center,
              n = _this$_data.radius,
              r = _this$_data.lineWidth,
              s = _this$_data.color,
              o = _this$_data.fillBackground,
              a = _this$_data.backColor;
          e.save();

          var l = t.pixelRatio,
              d = Math.max(1, Math.floor(l)),
              h = d % 2 / 2,
              c = Math.round(i.x * l) + h,
              u = Math.round(i.y * l) + h,
              p = Math.round(c + n * l),
              _ = Math.max(1, Math.floor(r * l)),
              g = p - c - _;

          o && g > 0 && (e.fillStyle = a, e.beginPath(), e.moveTo(c + g, u), e.arc(c, u, g, 0, 2 * Math.PI, !1), e.fill());
          var f = Math.max(d / 2, p - c - _ / 2);
          e.strokeStyle = s, e.lineWidth = _, e.beginPath(), e.moveTo(c + f, u), e.arc(c, u, f, 0, 2 * Math.PI, !1), e.stroke(), e.restore();
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data) return null;
          var _this$_data2 = this._data,
              i = _this$_data2.center,
              n = _this$_data2.radius,
              r = (0, d.interactionTolerance)().curve;
          if (!(0, l.pointInCircle)(e, i, n + r)) return null;
          var s = n > r && (0, l.pointInCircle)(e, i, n - r) ? a.HitTarget.MovePointBackground : a.HitTarget.MovePoint;
          return new a.HitTestResult(s);
        }
      }]);

      return h;
    }();

    var c =
    /*#__PURE__*/
    function (_o$LineSourcePaneView2) {
      _inherits(c, _o$LineSourcePaneView2);

      function c() {
        var _this20;

        _classCallCheck(this, c);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this20._circleRenderer = new h(), _this20._textRenderer = new r.TextRenderer(), _this20._renderer = new s.CompositeRenderer();
        return _this20;
      }

      _createClass(c, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var e;
          if (_get(_getPrototypeOf(c.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2) return;

          var t = this._source.properties().childs(),
              _this$_points3 = _slicedToArray(this._points, 2),
              i = _this$_points3[0],
              n = _this$_points3[1];

          this._circleRenderer.setData({
            center: i,
            radius: Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2)),
            color: t.color.value(),
            lineWidth: t.linewidth.value(),
            backColor: t.backgroundColor.value(),
            fillBackground: t.fillBackground.value()
          }), this._renderer.append(this._circleRenderer), t.showLabel.value() && (null === (e = t.text) || void 0 === e ? void 0 : e.value()) && (this._updateTextRenderer(), this._renderer.append(this._textRenderer)), this.addAnchors(this._renderer, {
            hittestResult: [a.HitTarget.MovePoint, a.HitTarget.ChangePoint]
          });
        }
      }, {
        key: "_updateTextRenderer",
        value: function _updateTextRenderer() {
          var _this$_source$propert = this._source.properties().childs(),
              e = _this$_source$propert.text,
              t = _this$_source$propert.textColor,
              i = _this$_source$propert.fontSize,
              r = _this$_source$propert.bold,
              s = _this$_source$propert.italic,
              _this$_points4 = _slicedToArray(this._points, 2),
              o = _this$_points4[0],
              a = _this$_points4[1],
              l = o.subtract(a).length() * Math.sqrt(2),
              d = {
            points: [o],
            text: e.value(),
            color: t.value(),
            fontSize: i.value(),
            font: n.CHART_FONT_FAMILY,
            bold: r.value(),
            italic: s.value(),
            wordWrapWidth: l,
            maxHeight: l,
            offsetX: 0,
            offsetY: 0,
            horzAlign: "center",
            vertAlign: "middle",
            forceTextAlign: !0
          };

          this._textRenderer.setData(d);
        }
      }]);

      return c;
    }(o.LineSourcePaneView);
  },
  37662: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      CommentPaneView: function CommentPaneView() {
        return f;
      }
    });

    var n = i(29764),
        r = i(87095),
        s = i(46501),
        o = i(79191),
        a = i(19266),
        l = i(86441),
        d = i(34026),
        h = i(38223),
        c = i(74359),
        u = i(15187),
        p = i(18807),
        _ = i(68441);

    var g =
    /*#__PURE__*/
    function (_u$MediaCoordinatesPa) {
      _inherits(g, _u$MediaCoordinatesPa);

      function g() {
        var _this21;

        _classCallCheck(this, g);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this21._geometryCache = {
          innerHeight: NaN,
          textHorizontalPadding: NaN,
          innerWidth: NaN,
          paddingLeft: NaN
        }, _this21._geomertryCacheInvalidated = !0, _this21._data = null;
        return _this21;
      }

      _createClass(g, [{
        key: "setData",
        value: function setData(e) {
          this._data = e, this._geomertryCacheInvalidated = !0;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || 0 === this._data.points.length) return null;
          var i = this._data.points[0].x,
              n = this._data.points[0].y - this._geometryCache.innerHeight,
              r = (0, l.box)(new l.Point(i, n), new l.Point(i + this._geometryCache.innerWidth, n + this._geometryCache.innerHeight));
          return (0, d.pointInBox)(e, r) ? new p.HitTestResult(p.HitTarget.MovePoint, {
            areaName: p.AreaName.Text
          }) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || 0 === this._data.points.length) return;
          var t = e.context;
          t.font = this._data.font, t.textAlign = (0, h.isRtl)() ? "right" : "left";

          var i = this._measureInfo(t, this._data.label, this._data.fontSize),
              n = i.paddingLeft,
              r = i.innerHeight,
              s = i.innerWidth,
              o = i.textHorizontalPadding,
              a = Math.min(s, r) / 2,
              l = this._data.points[0].x,
              d = this._data.points[0].y - r;

          t.translate(l, d), (0, _.drawRoundRect)(t, 0, 0, s, r, [a, a, a, 2]), t.fillStyle = this._data.backgroundColor, t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "middle", t.fillStyle = this._data.color, t.fillText(this._data.label, n + o, r / 2);
        }
      }, {
        key: "_measureInfo",
        value: function _measureInfo(e, t, i) {
          if (this._geomertryCacheInvalidated) {
            var _n18 = e.measureText(t),
                _r16 = i,
                _s9 = 12,
                _o9 = Math.round(_r16 / 1.3),
                _a9 = _n18.width + 2 * _s9,
                _l8 = _r16 + 2 * _o9,
                _d7 = (0, c.calcTextHorizontalShift)(e, _n18.width);

            this._geometryCache = {
              paddingLeft: _s9,
              innerWidth: _a9,
              innerHeight: _l8,
              textHorizontalPadding: _d7
            }, this._geomertryCacheInvalidated = !1;
          }

          return this._geometryCache;
        }
      }]);

      return g;
    }(u.MediaCoordinatesPaneRenderer);

    var f =
    /*#__PURE__*/
    function (_o$LineSourcePaneView3) {
      _inherits(f, _o$LineSourcePaneView3);

      function f(e, t) {
        var _this22;

        _classCallCheck(this, f);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this, e, t)), _this22._commentRenderer = new g(), _this22._renderer = null;
        return _this22;
      }

      _createClass(f, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          _get(_getPrototypeOf(f.prototype), "_updateImpl", this).call(this, e, t);

          var i = this._source.properties().childs(),
              o = {
            points: this._points,
            color: i.color.value(),
            borderColor: i.borderColor.value(),
            backgroundColor: (0, r.generateColor)(i.backgroundColor.value(), i.transparency.value()),
            font: (0, n.makeFont)(i.fontsize.value(), s.CHART_FONT_FAMILY),
            fontSize: i.fontsize.value(),
            label: i.text.value()
          };

          if (this._commentRenderer.setData(o), 1 === o.points.length) {
            var _e28 = new a.CompositeRenderer();

            return _e28.append(this._commentRenderer), _e28.append(this.createLineAnchor({
              points: o.points
            }, 0)), void (this._renderer = _e28);
          }

          this._renderer = this._commentRenderer;
        }
      }]);

      return f;
    }(o.LineSourcePaneView);
  },
  51084: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      CrossLinePaneView: function CrossLinePaneView() {
        return l;
      }
    });
    var n = i(79191),
        r = i(74997),
        s = i(71254),
        o = i(19266),
        a = i(18807);

    var l =
    /*#__PURE__*/
    function (_n$LineSourcePaneView3) {
      _inherits(l, _n$LineSourcePaneView3);

      function l(e, t) {
        var _this23;

        _classCallCheck(this, l);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, e, t)), _this23._renderer = null, _this23._horizLineRenderer = new r.HorizontalLineRenderer(), _this23._vertLineRenderer = new s.VerticalLineRenderer(), _this23._horizLineRenderer.setHitTest(new a.HitTestResult(a.HitTarget.MovePoint));
        return _this23;
      }

      _createClass(l, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer() {
          return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(l.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = this._getPoints();

          if (0 === e.length) return;
          var t = {
            color: this._getSource().lineColor(),
            linestyle: this._getSource().lineStyle(),
            linewidth: this._getSource().lineWidth(),
            x: e[0].x,
            y: e[0].y
          };
          this._horizLineRenderer.setData(t), this._horizLineRenderer.setHitTest(new a.HitTestResult(a.HitTarget.MovePoint, {
            snappingPrice: this._source.points()[0].price
          })), this._vertLineRenderer.setData(t), this._vertLineRenderer.setHitTest(new a.HitTestResult(a.HitTarget.MovePoint, {
            snappingIndex: this._source.points()[0].index
          }));
          var i = new o.CompositeRenderer();
          i.append(this._horizLineRenderer), i.append(this._vertLineRenderer), this.addAnchors(i), this._renderer = i;
        }
      }]);

      return l;
    }(n.LineSourcePaneView);
  },
  25615: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      CypherPaneView: function CypherPaneView() {
        return r;
      }
    });
    var n = i(24424);

    var r =
    /*#__PURE__*/
    function (_n$Pattern5pointsPane) {
      _inherits(r, _n$Pattern5pointsPane);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_updateBaseData",
        value: function _updateBaseData() {
          if (this._source.points().length >= 3) {
            var _this$_source$points11 = this._source.points(),
                _this$_source$points12 = _slicedToArray(_this$_source$points11, 3),
                _e29 = _this$_source$points12[0],
                _t13 = _this$_source$points12[1],
                _i20 = _this$_source$points12[2];

            this._abRetracement = Math.round(1e3 * Math.abs((_i20.price - _t13.price) / (_t13.price - _e29.price))) / 1e3;
          }

          if (this._source.points().length >= 4) {
            var _this$_source$points13 = this._source.points(),
                _this$_source$points14 = _slicedToArray(_this$_source$points13, 4),
                _e30 = _this$_source$points14[0],
                _t14 = _this$_source$points14[1],
                _i21 = _this$_source$points14[3];

            this._bcRetracement = Math.round(1e3 * Math.abs((_i21.price - _e30.price) / (_t14.price - _e30.price))) / 1e3;
          }

          if (this._source.points().length >= 5) {
            var _this$_source$points15 = this._source.points(),
                _this$_source$points16 = _slicedToArray(_this$_source$points15, 5),
                _e31 = _this$_source$points16[0],
                _t15 = _this$_source$points16[2],
                _i22 = _this$_source$points16[3],
                _n19 = _this$_source$points16[4];

            this._cdRetracement = Math.round(1e3 * Math.abs((_n19.price - _i22.price) / (_i22.price - _t15.price))) / 1e3, this._xdRetracement = Math.round(1e3 * Math.abs((_n19.price - _i22.price) / (_e31.price - _i22.price))) / 1e3;
          }
        }
      }]);

      return r;
    }(n.Pattern5pointsPaneView);
  },
  99734: function _(e, t, i) {
    "use strict";

    i.d(t, {
      DateAndPriceRangeBasePaneView: function DateAndPriceRangeBasePaneView() {
        return a;
      }
    });
    var n = i(86441),
        r = i(46501),
        s = i(80657),
        o = i(79191);

    var a =
    /*#__PURE__*/
    function (_o$LineSourcePaneView4) {
      _inherits(a, _o$LineSourcePaneView4);

      function a() {
        var _this24;

        _classCallCheck(this, a);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments)), _this24._customTextrenderer = new s.TextRenderer();
        return _this24;
      }

      _createClass(a, [{
        key: "_updateCustomTextRenderer",
        value: function _updateCustomTextRenderer(e, t) {
          var i = this._source.properties().childs().customText.childs();

          if (i.visible.value() && i.text.value().length > 0) {
            var _this$_points5 = _slicedToArray(this._points, 2),
                _o10 = _this$_points5[0],
                _a10 = _this$_points5[1],
                l = Math.round((_o10.y + _a10.y) / 2),
                d = new n.Point(_o10.x, l),
                h = new n.Point(_a10.x, l),
                c = d.x < h.x ? d : h,
                u = c === d ? h : d,
                p = "middle",
                _ = "center",
                g = new n.Point((d.x + h.x) / 2, (d.y + h.y) / 2),
                f = Math.atan((u.y - c.y) / (u.x - c.x)),
                v = {
              points: [g],
              text: i.text.value(),
              color: i.color.value(),
              vertAlign: p,
              horzAlign: _,
              font: r.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: i.bold.value(),
              italic: i.italic.value(),
              fontsize: i.fontsize.value(),
              forceTextAlign: !0,
              angle: f
            };

            return this._customTextrenderer.setData(v), this._needLabelExclusionPath(this._customTextrenderer, "middle") ? (0, s.getTextBoundaries)(this._customTextrenderer, t, e) : null;
          }

          return this._customTextrenderer.setData(null), null;
        }
      }]);

      return a;
    }(o.LineSourcePaneView);
  },
  54306: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      DateAndPriceRangePaneView: function DateAndPriceRangePaneView() {
        return b;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(44352),
        o = i(38223),
        a = i(80657),
        l = i(72739),
        d = i(99031),
        h = i(19266),
        c = i(93572),
        u = i(79849),
        p = i(73436),
        _ = i(2043),
        g = i(57322),
        f = i(98596),
        v = i(46501),
        x = i(99734);

    var m = new _.TimeSpanFormatter(),
        w = new c.PercentageFormatter(),
        R = new f.VolumeFormatter(),
        y = s.t(null, void 0, i(33355)),
        T = s.t(null, {
      context: "study"
    }, i(32819));

    var b =
    /*#__PURE__*/
    function (_x$DateAndPriceRangeB) {
      _inherits(b, _x$DateAndPriceRangeB);

      function b() {
        var _this25;

        _classCallCheck(this, b);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments)), _this25._distanceLineRenderer = new d.TrendLineRenderer(), _this25._distancePriceRenderer = new d.TrendLineRenderer(), _this25._backgroundRenderer = new l.RectangleRenderer(), _this25._borderRenderer = new l.RectangleRenderer(), _this25._textRenderer = new a.TextRenderer(), _this25._renderer = new h.CompositeRenderer(), _this25._pipFormatter = null, _this25._lastSymbolInfo = null;
        return _this25;
      }

      _createClass(b, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i, s, l;
          if (_get(_getPrototypeOf(b.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;

          var d = this._source.properties().childs();

          d.fillBackground && d.fillBackground.value() && (this._backgroundRenderer.setData({
            points: this._points,
            color: "white",
            linewidth: 0,
            backcolor: d.backgroundColor.value(),
            fillBackground: !0,
            transparency: d.backgroundTransparency.value(),
            extendLeft: !1,
            extendRight: !1
          }), this._renderer.append(this._backgroundRenderer));

          var _this$_points6 = _slicedToArray(this._points, 2),
              h = _this$_points6[0],
              c = _this$_points6[1];

          d.drawBorder.value() && (this._borderRenderer.setData({
            points: this._points,
            color: d.borderColor.value(),
            linewidth: d.borderWidth.value(),
            fillBackground: !1,
            extendLeft: !1,
            extendRight: !1,
            backcolor: ""
          }), this._renderer.append(this._borderRenderer));

          var _ = d.drawBorder.value() ? d.borderWidth.value() / 2 : 0,
              f = this._updateCustomTextRenderer(e, t),
              x = Math.round((h.y + c.y) / 2),
              b = new r.Point(h.x + Math.sign(c.x - h.x) * _, x),
              P = new r.Point(c.x + Math.sign(h.x - c.x) * _, x);

          this._distanceLineRenderer.setData({
            points: [b, P],
            color: d.linecolor.value(),
            linewidth: d.linewidth.value(),
            linestyle: u.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: p.LineEnd.Normal,
            rightend: Math.abs(h.x - c.x) >= 25 * d.linewidth.value() ? p.LineEnd.Arrow : p.LineEnd.Normal,
            excludeBoundaries: null != f ? f : void 0
          }), this._renderer.append(this._distanceLineRenderer);
          var L = Math.round((h.x + c.x) / 2),
              S = new r.Point(L, h.y + Math.sign(c.y - h.y) * _),
              C = new r.Point(L, c.y + Math.sign(h.y - c.y) * _);
          this._distancePriceRenderer.setData({
            points: [S, C],
            color: d.linecolor.value(),
            linewidth: d.linewidth.value(),
            linestyle: u.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: p.LineEnd.Normal,
            rightend: Math.abs(S.y - C.y) >= 25 * d.linewidth.value() ? p.LineEnd.Arrow : p.LineEnd.Normal,
            excludeBoundaries: null != f ? f : void 0
          }), this._renderer.append(this._distancePriceRenderer);

          var M = this._source.points()[0].price,
              I = this._source.points()[1].price,
              A = I - M,
              k = 100 * A / Math.abs(M),
              N = this._source.points()[0].index,
              D = this._source.points()[1].index,
              B = D - N,
              z = (0, o.forceLTRStr)(B + ""),
              E = this._model.timeScale().indexToUserTime(N),
              H = this._model.timeScale().indexToUserTime(D);

          var O = "";

          if (E && H) {
            var _e32 = (H.valueOf() - E.valueOf()) / 1e3;

            O = ", " + (0, o.startWithLTR)(m.format(_e32));
          }

          var V = this._model.mainSeries().symbolInfo();

          V && V !== this._lastSymbolInfo && (this._pipFormatter = new g.PipFormatter(V.pricescale, V.minmov, V.type, V.minmove2, V.typespecs), this._lastSymbolInfo = V);
          var W = (0, n.ensureNotNull)(this._source.ownerSource()).formatter(),
              F = (null !== (s = null === (i = W.formatChange) || void 0 === i ? void 0 : i.call(W, I, M)) && void 0 !== s ? s : W.format(A)) + " (" + w.format(Math.round(100 * k) / 100) + ") " + (this._pipFormatter ? this._pipFormatter.format(A) : "");
          var Y = (0, o.forceLTRStr)(F) + "\n" + y.format({
            count: z
          }) + O;

          var j = this._source.volume();

          var U;
          Number.isNaN(j) || (Y += "\n".concat(T, " ").concat(R.format(j))), U = I > M ? new r.Point(.5 * (h.x + c.x), c.y - 2 * d.fontsize.value()) : new r.Point(.5 * (h.x + c.x), c.y + .7 * d.fontsize.value());
          var q = {
            x: 0,
            y: 10
          },
              Q = d.fontsize.value(),
              Z = {
            points: [U],
            text: Y,
            color: d.textcolor.value(),
            font: v.CHART_FONT_FAMILY,
            offsetX: q.x,
            offsetY: q.y,
            padding: 8,
            vertAlign: "middle",
            horzAlign: "center",
            fontsize: Q,
            backgroundRoundRect: 4,
            backgroundHorzInflate: .4 * Q,
            backgroundVertInflate: .2 * Q
          };
          (null === (l = d.fillLabelBackground) || void 0 === l ? void 0 : l.value()) && (Z.boxShadow = {
            shadowColor: d.shadow.value(),
            shadowBlur: 4,
            shadowOffsetY: 1
          }, Z.backgroundColor = d.labelBackgroundColor.value()), this._textRenderer.setData(Z);

          var X = this._textRenderer.measure(),
              G = (0, a.calculateLabelPosition)(X, h, c, q, e);

          this._textRenderer.setPoints([G]), this._renderer.append(this._textRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer);
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e) {
          return e.getLinesInfo().lines.length > 0;
        }
      }]);

      return b;
    }(x.DateAndPriceRangeBasePaneView);
  },
  55762: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      DateRangePaneView: function DateRangePaneView() {
        return m;
      }
    });

    var n = i(86441),
        r = i(44352),
        s = i(38223),
        o = i(80657),
        a = i(72739),
        l = i(99031),
        d = i(19266),
        h = i(79849),
        c = i(73436),
        u = i(2043),
        p = i(98596),
        _ = i(46501),
        g = i(99734);

    var f = new p.VolumeFormatter(),
        v = r.t(null, void 0, i(33355)),
        x = r.t(null, {
      context: "study"
    }, i(32819));

    var m =
    /*#__PURE__*/
    function (_g$DateAndPriceRangeB) {
      _inherits(m, _g$DateAndPriceRangeB);

      function m() {
        var _this26;

        _classCallCheck(this, m);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(m).apply(this, arguments)), _this26._leftBorderRenderer = new l.TrendLineRenderer(), _this26._rightBorderRenderer = new l.TrendLineRenderer(), _this26._distancePriceRenderer = new l.TrendLineRenderer(), _this26._backgroundRenderer = new a.RectangleRenderer(), _this26._textRenderer = new o.TextRenderer(), _this26._renderer = new d.CompositeRenderer();
        return _this26;
      }

      _createClass(m, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var _this27 = this;

          var i;
          if (_get(_getPrototypeOf(m.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;

          var r = this._source.properties().childs(),
              a = r.extendTop.value(),
              l = r.extendBottom.value(),
              _this$_points7 = _slicedToArray(this._points, 2),
              d = _this$_points7[0],
              p = _this$_points7[1],
              g = a ? 0 : Math.min(d.y, p.y),
              m = l ? this._height() : Math.max(d.y, p.y);

          r.fillBackground.value() && (this._backgroundRenderer.setData({
            points: [new n.Point(d.x, g), new n.Point(p.x, m)],
            color: "white",
            linewidth: 0,
            backcolor: r.backgroundColor.value(),
            fillBackground: !0,
            transparency: r.backgroundTransparency.value(),
            extendLeft: !1,
            extendRight: !1
          }), this._renderer.append(this._backgroundRenderer));

          var w = function w(e, t, i) {
            e.setData({
              points: [t, i],
              color: r.linecolor.value(),
              linewidth: r.linewidth.value(),
              linestyle: h.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: c.LineEnd.Normal,
              rightend: c.LineEnd.Normal
            }), _this27._renderer.append(e);
          };

          w(this._leftBorderRenderer, new n.Point(d.x, g), new n.Point(d.x, m)), w(this._rightBorderRenderer, new n.Point(p.x, g), new n.Point(p.x, m));

          var R = Math.round((d.y + p.y) / 2),
              y = new n.Point(d.x, R),
              T = new n.Point(p.x, R),
              b = this._updateCustomTextRenderer(e, t);

          this._distancePriceRenderer.setData({
            points: [y, T],
            color: r.linecolor.value(),
            linewidth: r.linewidth.value(),
            linestyle: h.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: c.LineEnd.Normal,
            rightend: Math.abs(y.x - T.x) >= 15 * r.linewidth.value() ? c.LineEnd.Arrow : c.LineEnd.Normal,
            excludeBoundaries: null != b ? b : void 0
          }), this._renderer.append(this._distancePriceRenderer);

          var P = this._source.points()[0].index,
              L = this._source.points()[1].index,
              S = L - P,
              C = this._model.timeScale().indexToUserTime(P),
              M = this._model.timeScale().indexToUserTime(L);

          var I = "";

          if (C && M) {
            var _e33 = (M.valueOf() - C.valueOf()) / 1e3;

            I = ", " + (0, s.startWithLTR)(new u.TimeSpanFormatter().format(_e33));
          }

          var A = this._source.volume(),
              k = Number.isNaN(A) ? "" : "\n".concat(x, " ").concat(f.format(A)),
              N = v.format({
            count: (0, s.forceLTRStr)(S.toString())
          }) + I + k,
              D = {
            x: 0,
            y: 10
          },
              B = r.fontsize.value(),
              z = {
            text: N,
            color: r.textcolor.value(),
            font: _.CHART_FONT_FAMILY,
            offsetX: D.x,
            offsetY: D.y,
            padding: 8,
            vertAlign: "middle",
            horzAlign: "center",
            fontsize: B,
            backgroundRoundRect: 4,
            backgroundHorzInflate: .4 * B,
            backgroundVertInflate: .2 * B
          };

          (null === (i = r.fillLabelBackground) || void 0 === i ? void 0 : i.value()) && (z.boxShadow = {
            shadowColor: r.shadow.value(),
            shadowBlur: 4,
            shadowOffsetY: 1
          }, z.backgroundColor = r.labelBackgroundColor.value()), this._textRenderer.setData(z);

          var E = this._textRenderer.measure(),
              H = (0, o.calculateLabelPosition)(E, d, p, D, e);

          this._textRenderer.setPoints([H]), this._renderer.append(this._textRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer);
        }
      }]);

      return m;
    }(g.DateAndPriceRangeBasePaneView);
  },
  53288: function _(e, t, i) {
    "use strict";

    var n = i(23966).DisjointChannelRenderer,
        r = i(99031).TrendLineRenderer,
        s = i(80657).TextRenderer,
        o = i(19266).CompositeRenderer,
        a = i(66103).PaneCursorType,
        l = i(46501),
        d = i(33295).AlertableLineSourcePaneView,
        h = [a.Default, a.Default, a.VerticalResize, a.Default];

    t.DisjointChannelPaneView =
    /*#__PURE__*/
    function (_d8) {
      _inherits(_class2, _d8);

      function _class2(e, t) {
        var _this28;

        _classCallCheck(this, _class2);

        _this28 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, e, t)), _this28._label = null, _this28._trendLineRendererPoints12 = new r(), _this28._trendLineRendererPoints43 = new r(), _this28._disjointChannelRenderer = new n(), _this28._p1LabelRenderer = new s(), _this28._p2LabelRenderer = new s(), _this28._p3LabelRenderer = new s(), _this28._p4LabelRenderer = new s(), _this28._renderer = null;
        return _this28;
      }

      _createClass(_class2, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class2.prototype), "_updateImpl", this).call(this), this._renderer = null, this._label = null, !(this._source.points().length < 2) && this._source.priceScale()) {
            var e = this._source.points()[0],
                t = this._source.points()[1],
                i = this._source.ownerSource().firstValue();

            if (this._price1 = this._source.priceScale().formatPrice(e.price, i), this._price2 = this._source.priceScale().formatPrice(t.price, i), 3 === this._source.points().length) {
              var n = this._source.points()[2];

              this._price3 = this._source.priceScale().formatPrice(n.price, i);
              var r = t.price - e.price;
              this._price4 = this._source.priceScale().formatPrice(n.price + r, i);
            }

            if (!(this._points.length < 2)) {
              var s,
                  a = new o(),
                  d = (e = this._points[0], t = this._points[1], this._source.properties()),
                  c = this._model,
                  u = this._source;

              if (this._points.length >= 3) {
                (n = this._points[2]).x = t.x, n.square = !0;
                var p = t.y - e.y;

                if ((s = e.clone()).y = n.y + p, s.data = 3, d.fillBackground.value()) {
                  var _ = c.timeScale().width(),
                      g = u.priceScale().height(),
                      f = d.extendLeft.value(),
                      v = d.extendRight.value();

                  this._disjointChannelRenderer.setData({
                    width: _,
                    height: g,
                    extendleft: f,
                    extendright: v,
                    points: [e, t, n, s],
                    backcolor: d.backgroundColor.value(),
                    transparency: d.transparency.value(),
                    hittestOnBackground: TradingView.isMobile.any()
                  }), a.append(this._disjointChannelRenderer);
                }
              }

              var x = function x(e, t) {
                return {
                  points: [e, t],
                  width: c.timeScale().width(),
                  height: u.priceScale().height(),
                  color: d.linecolor.value(),
                  linewidth: d.linewidth.value(),
                  linestyle: d.linestyle.value(),
                  extendleft: d.extendLeft.value(),
                  extendright: d.extendRight.value(),
                  leftend: d.leftEnd.value(),
                  rightend: d.rightEnd.value()
                };
              },
                  m = this,
                  w = function w(e, t, i, n, r, s) {
                if (m._source.properties().showPrices.value()) {
                  var o = {
                    points: [i],
                    text: r,
                    color: m._source.properties().textcolor.value(),
                    horzAlign: i.x > n.x ? "left" : "right",
                    vertAlign: "middle",
                    font: l.CHART_FONT_FAMILY,
                    offsetX: 6,
                    offsetY: 0,
                    boxPadding: 0,
                    bold: m._source.properties().bold.value(),
                    italic: m._source.properties().italic.value(),
                    fontsize: m._source.properties().fontsize.value(),
                    forceTextAlign: !0
                  };
                  e.setData(o), a.append(e);
                  o = {
                    points: [n],
                    text: s,
                    color: m._source.properties().textcolor.value(),
                    horzAlign: i.x < n.x ? "left" : "right",
                    vertAlign: "middle",
                    font: l.CHART_FONT_FAMILY,
                    offsetX: 6,
                    offsetY: 0,
                    boxPadding: 0,
                    bold: m._source.properties().bold.value(),
                    italic: m._source.properties().italic.value(),
                    fontsize: m._source.properties().fontsize.value(),
                    forceTextAlign: !0
                  };
                  t.setData(o), a.append(t);
                }
              };

              if (this._trendLineRendererPoints12.setData(x(e, t)), a.append(this._trendLineRendererPoints12), w(this._p1LabelRenderer, this._p2LabelRenderer, e, t, this._price1, this._price2), 2 === this._points.length) return this.addAnchors(a), void (this._renderer = a);
              this._trendLineRendererPoints43.setData(x(s, n)), a.append(this._trendLineRendererPoints43), w(this._p3LabelRenderer, this._p4LabelRenderer, n, s, this._price3, this._price4);
              var R = [e, t, n, s];
              this._model.lineBeingCreated() === this._source && R.pop(), a.append(this.createLineAnchor({
                points: R,
                pointsCursorType: h
              }, 0)), e && t && this._addAlertRenderer(a, [e, t]), this._renderer = a;
            }
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class2;
    }(d);
  },
  14417: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ElliottLabelsPaneView: function ElliottLabelsPaneView() {
        return v;
      }
    });
    var n = i(79191),
        r = i(19266),
        s = i(37160),
        o = i(87095),
        a = i(79849),
        l = i(18807),
        d = i(86441),
        h = i(34026),
        c = i(74359),
        u = i(29764);

    var p =
    /*#__PURE__*/
    function () {
      function p(e, t) {
        _classCallCheck(this, p);

        this._data = e, this._hitTestResult = t;
      }

      _createClass(p, [{
        key: "hitTest",
        value: function hitTest(e) {
          var t = this._center(),
              i = this._data.circleRadius,
              n = {
            min: new d.Point(t.x - i, t.y - i),
            max: new d.Point(t.x + i, t.y + i)
          };

          return (0, h.pointInBox)(e, n) ? this._hitTestResult : null;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          var _this29 = this;

          e.save();

          var i = t.pixelRatio,
              n = Math.max(1, Math.floor(i)) % 2 / 2,
              r = this._center(),
              s = Math.round(r.x * i) + n,
              o = Math.round(r.y * i) + n;

          if (this._data.showCircle) {
            var _t16 = Math.round(s + this._data.circleRadius * i) - s - this._data.circleBorderWidth * i / 2;

            e.strokeStyle = this._data.color, e.lineWidth = this._data.circleBorderWidth * i, e.beginPath(), e.moveTo(s + _t16, o), e.arc(s, o, _t16, 0, 2 * Math.PI, !1), e.stroke();
          }

          e.font = (0, u.makeFont)(this._data.fontSize, this._data.font, this._data.bold ? "bold" : void 0), e.textBaseline = "middle", e.textAlign = "center", e.fillStyle = this._data.color, (0, c.drawScaled)(e, i, i, function () {
            e.fillText(_this29._data.letter, s / i, o / i + .05 * _this29._data.fontSize);
          }), e.restore();
        }
      }, {
        key: "_center",
        value: function _center() {
          var e = "bottom" === this._data.vertAlign ? -1 : 1,
              t = this._data.point.y + e * this._data.yOffset + e * this._data.circleRadius,
              i = this._data.point.x;
          return new d.Point(i, t);
        }
      }]);

      return p;
    }();

    var _ = i(46501),
        g = i(79797);

    var f = {
      4: {
        font: 24,
        circle: 36,
        circleBorderWidth: 1,
        bold: !0
      },
      3: {
        font: 20,
        circle: 28,
        circleBorderWidth: 1,
        bold: !1
      },
      2: {
        font: 18,
        circle: 22,
        circleBorderWidth: 1,
        bold: !1
      },
      1: {
        font: 16,
        circle: 22,
        circleBorderWidth: 1,
        bold: !1
      },
      0: {
        font: 11,
        circle: 14,
        circleBorderWidth: 1,
        bold: !0
      }
    };

    var v =
    /*#__PURE__*/
    function (_n$LineSourcePaneView4) {
      _inherits(v, _n$LineSourcePaneView4);

      function v(e, t) {
        var _this30;

        _classCallCheck(this, v);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this, e, t)), _this30._renderer = null, _this30._polylineRenderer = new g.PolygonRenderer();
        return _this30;
      }

      _createClass(v, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var e;
          _get(_getPrototypeOf(v.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var t = this._source.properties().childs(),
              i = this._source.priceScale(),
              n = this._model.timeScale(),
              d = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue();

          if (!i || i.isEmpty() || n.isEmpty() || null == d) return;
          var h = new r.CompositeRenderer();

          if (t.showWave.value()) {
            var _e34 = {
              points: this._points,
              color: (0, o.generateColor)(t.color.value(), 0),
              linewidth: t.linewidth.value(),
              linestyle: a.LINESTYLE_SOLID,
              fillBackground: !1,
              filled: !1,
              backcolor: "rgba(0, 0, 0, 0)",
              linejoin: "round"
            };
            this._polylineRenderer.setData(_e34), h.append(this._polylineRenderer);
          }

          var c = this.areAnchorsVisible() ? 0 : 1;
          var u = 1;

          if (this._points.length > 2) {
            var _e35 = this._points[2],
                _t17 = this._points[1];
            u = (0, s.sign)(_e35.y - _t17.y);
          }

          var g = 0;
          this._model.lineBeingCreated() === this._source && (g = 1);
          var v = (0, o.resetTransparency)(t.color.value());

          for (var _e36 = 0; _e36 < this._points.length - g; _e36++, u = -u) {
            if (_e36 < c) continue;

            var _t18 = this._source.label(_e36);

            var _i23 = _t18.label;

            var _n20 = "circle" === _t18.decoration;

            "brackets" === _t18.decoration && (_i23 = "(" + _i23 + ")");

            var _r17 = f[_t18.group],
                _s10 = new l.HitTestResult(l.HitTarget.ChangePoint, {
              pointIndex: _e36
            });

            h.append(new p({
              point: this._points[_e36],
              letter: _i23,
              color: v,
              font: _.CHART_FONT_FAMILY,
              fontSize: _r17.font,
              bold: _r17.bold,
              showCircle: _n20,
              circleRadius: _r17.circle / 2,
              circleBorderWidth: _r17.circleBorderWidth,
              yOffset: 10,
              vertAlign: 1 === u ? "top" : "bottom"
            }, _s10));
          }

          var x = [];

          for (var _e37 = 0; _e37 < this._points.length; _e37++) {
            var _t19 = this._points[_e37].clone();

            _t19.data = _e37, x.push(_t19);
          }

          this._model.lineBeingCreated() === this._source && x.pop(), h.append(this.createLineAnchor({
            points: x
          }, 0)), this._renderer = h;
        }
      }]);

      return v;
    }(n.LineSourcePaneView);
  },
  11756: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      EllipsePaneView: function EllipsePaneView() {
        return v;
      }
    });

    var n = i(4652),
        r = i(86441),
        s = i(5531),
        o = i(46501),
        a = i(80657),
        l = i(66103),
        d = i(19266),
        h = i(79191),
        c = i(25422),
        u = i(87095),
        p = i(18807),
        _ = i(15187),
        g = i(45197);

    var f =
    /*#__PURE__*/
    function (_$MediaCoordinatesPan) {
      _inherits(f, _$MediaCoordinatesPan);

      function f() {
        var _this31;

        _classCallCheck(this, f);

        _this31 = _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments)), _this31._data = null;
        return _this31;
      }

      _createClass(f, [{
        key: "setData",
        value: function setData(e) {
          this._data = _objectSpread({}, e, {
            angleFrom: 0,
            angleTo: 2 * Math.PI,
            clockwise: !1
          });
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 3) return null;
          var t = this._data.points[0],
              i = this._data.points[1];
          var s = this._data.points[2];
          var o = (0, n.distanceToLine)(t, i, s).distance,
              a = i.subtract(t),
              l = t.add(i).scaled(.5),
              d = new r.Point(-a.y, a.x).normalized();
          s = l.add(d.scaled(o));

          var h = a.length(),
              u = a.x / h,
              _ = a.y / h;

          var f = Math.acos(u);
          _ < 0 && (f = -f);
          var v = (0, c.translationMatrix)(-l.x, -l.y);
          e = (0, c.transformPoint)(v, e);
          var x = (0, c.transformPoint)(v, this._data.points[2]);
          v = (0, c.rotationMatrix)(-f), e = (0, c.transformPoint)(v, e), x = (0, c.transformPoint)(v, x), v = (0, c.scalingMatrix)(1, h / (2 * o)), e = (0, c.transformPoint)(v, e), x = (0, c.transformPoint)(v, x);
          var m = e.length(),
              w = (0, g.interactionTolerance)().curve;
          return Math.abs(m - .5 * h) <= w ? new p.HitTestResult(p.HitTarget.MovePoint) : this._data.fillBackground && !this._data.noHitTestOnBackground && m <= .5 * h ? new p.HitTestResult(p.HitTarget.MovePointBackground) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          var t = this._data.points[0],
              i = this._data.points[1],
              s = e.context;
          if (this._data.points.length < 3) return s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(i.x, i.y), void s.stroke();
          var o = this._data.points[2];
          var a = (0, n.distanceToLine)(t, i, o).distance;
          if (a < 1) return s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(i.x, i.y), void s.stroke();
          var l = i.subtract(t),
              d = t.add(i).scaled(.5),
              h = new r.Point(-l.y, l.x).normalized();
          o = d.add(h.scaled(a)), s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth;

          var p = l.length(),
              _ = l.x / p,
              g = l.y / p;

          var f = Math.acos(_);
          g < 0 && (f = -f);
          var v = this._data.points[2],
              x = (0, c.translationMatrix)(-d.x, -d.y);
          v = (0, c.transformPoint)(x, v), x = (0, c.rotationMatrix)(-f), v = (0, c.transformPoint)(x, v), x = (0, c.scalingMatrix)(1, p / (2 * a)), v = (0, c.transformPoint)(x, v), v.y < 0 ? this._data.clockwise = !0 : this._data.clockwise = !1, s.save(), s.beginPath(), s.translate(d.x, d.y), s.rotate(f), s.scale(1, 2 * a / p), s.arc(0, 0, .5 * p, this._data.angleFrom, this._data.angleTo, this._data.clockwise), s.restore(), s.stroke(), this._data.fillBackground && (s.fillStyle = (0, u.generateColor)(this._data.backcolor, this._data.transparency), s.fill());
        }
      }]);

      return f;
    }(_.MediaCoordinatesPaneRenderer);

    var v =
    /*#__PURE__*/
    function (_h$LineSourcePaneView) {
      _inherits(v, _h$LineSourcePaneView);

      function v() {
        var _this32;

        _classCallCheck(this, v);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(v).apply(this, arguments)), _this32._ellipseRenderer = new f(), _this32._textRenderer = new a.TextRenderer(), _this32._renderer = null;
        return _this32;
      }

      _createClass(v, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var e;
          if (_get(_getPrototypeOf(v.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var t = this._source.properties().childs(),
              i = {
            points: this._points,
            color: t.color.value(),
            linewidth: t.linewidth.value(),
            backcolor: t.backgroundColor.value(),
            fillBackground: t.fillBackground.value(),
            transparency: t.transparency.value(),
            noHitTestOnBackground: !1
          };

          this._ellipseRenderer.setData(i);

          var s = new d.CompositeRenderer();
          s.append(this._ellipseRenderer);
          var o = i.points[0],
              a = i.points[1];
          if (2 === this._points.length) return this.addAnchors(s), void (this._renderer = s);
          var c = i.points[2];

          var u = (0, n.distanceToLine)(o, a, c).distance,
              p = a.subtract(o),
              _ = o.add(a).scaled(.5),
              g = new r.Point(-p.y, p.x).normalized();

          c = _.add(g.scaled(u));

          var f = _.add(g.scaled(-u)),
              v = new r.Point(o.x, o.y);

          v.data = 0;
          var x = new r.Point(a.x, a.y);
          x.data = 1;
          var m = new r.Point(c.x, c.y);
          m.data = 2;
          var w = new r.Point(f.x, f.y);
          w.data = 3, t.showLabel.value() && (null === (e = t.text) || void 0 === e ? void 0 : e.value()) && this._updateTextRenderer(v, x, m, w) && s.append(this._textRenderer);
          var R = (0, h.thirdPointCursorType)(v, x),
              y = [l.PaneCursorType.Default, l.PaneCursorType.Default, R, R];
          s.append(this.createLineAnchor({
            points: [v, x, m, w],
            pointsCursorType: y
          }, 0)), this._renderer = s;
        }
      }, {
        key: "_updateTextRenderer",
        value: function _updateTextRenderer(e, t, i, n) {
          if (t.subtract(e).length() < 1e-5 || n.subtract(i).length() < 1e-5) return !1;
          var a = (0, s.intersectLines)((0, r.lineThroughPoints)(e, t), (0, r.lineThroughPoints)(i, n));
          if (!a) return !1;

          var _this$_source$propert2 = this._source.properties().childs(),
              l = _this$_source$propert2.text,
              d = _this$_source$propert2.textColor,
              h = _this$_source$propert2.fontSize,
              c = _this$_source$propert2.bold,
              u = _this$_source$propert2.italic,
              p = Math.sqrt(2),
              _ = {
            points: [a],
            text: l.value(),
            color: d.value(),
            fontSize: h.value(),
            font: o.CHART_FONT_FAMILY,
            bold: c.value(),
            italic: u.value(),
            wordWrapWidth: e.subtract(t).length() / p,
            maxHeight: n.subtract(i).length() / p,
            angle: Math.atan((e.y - t.y) / (e.x - t.x)),
            offsetX: 0,
            offsetY: 0,
            horzAlign: "center",
            vertAlign: "middle",
            forceTextAlign: !0
          };

          return this._textRenderer.setData(_), !0;
        }
      }]);

      return v;
    }(h.LineSourcePaneView);
  },
  63451: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      EmojiPaneView: function EmojiPaneView() {
        return r;
      }
    });
    var n = i(50761);

    var r =
    /*#__PURE__*/
    function (_n$SvgIconPaneView) {
      _inherits(r, _n$SvgIconPaneView);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_iconColor",
        value: function _iconColor() {
          return null;
        }
      }]);

      return r;
    }(n.SvgIconPaneView);
  },
  82080: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ExecutionPaneView: function ExecutionPaneView() {
        return d;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(18807),
        o = i(15187);

    var a =
    /*#__PURE__*/
    function (_o$MediaCoordinatesPa) {
      _inherits(a, _o$MediaCoordinatesPa);

      function a(e) {
        var _this33;

        _classCallCheck(this, a);

        _this33 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this)), _this33._data = null != e ? e : null;
        return _this33;
      }

      _createClass(a, [{
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data) return null;
          var i = Math.round(this._data.point.x),
              n = Math.round(this._data.point.y),
              r = this._data.arrowHeight;
          var o, a;

          if ("buy" === this._data.direction ? (o = n, a = n + r) : (o = n - r, a = n), e.x >= i - 2 && e.x <= i + 2 && e.y >= o && e.y <= a) {
            var _e38 = this._data.tooltip;
            return new s.HitTestResult(s.HitTarget.Custom, {
              tooltip: "" !== _e38 ? {
                text: _e38,
                rect: {
                  x: i,
                  y: o,
                  w: 2,
                  h: a - o
                }
              } : void 0
            });
          }

          return null;
        }
      }, {
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t = e.context;
          if (null === this._data) return;
          var i = Math.round(this._data.point.x),
              n = Math.round(this._data.point.y);
          !function (e, t, i, n, r, s) {
            e.save(), e.strokeStyle = n, e.fillStyle = n, e.translate(t - 2, i), "buy" !== r && (e.rotate(Math.PI), e.translate(-4, 0)), e.beginPath(), e.moveTo(2, s), e.lineTo(2, 0), e.moveTo(0, 2), e.lineTo(2, 0), e.lineTo(4, 2), e.stroke(), e.restore();
          }(t, i, n, this._data.arrowColor, this._data.direction, this._data.arrowHeight);

          var _this$_data3 = this._data,
              r = _this$_data3.arrowHeight,
              s = _this$_data3.arrowSpacing,
              o = _this$_data3.fontHeight,
              a = _this$_data3.direction,
              l = _this$_data3.text,
              d = _this$_data3.font,
              h = _this$_data3.textColor,
              c = function (e, t, i) {
            if (0 === t.length) return 0;
            e.save(), e.font = i;
            var n = e.measureText(t).width;
            return e.restore(), 5 + n;
          }(t, l, d);

          if (0 !== c) {
            var _e39 = "buy" === a ? n + r + s : n - r - s - o;

            !function (e, t, i, n, r, s, o, a) {
              if (!s) return;
              e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = o, e.fillStyle = a;
              var l = t + n / 2,
                  d = i + r / 2;
              e.fillText(s, l, d - 1), e.restore();
            }(t, Math.round(i + .5 - c / 2), _e39, c, o, l, d, h);
          }
        }
      }]);

      return a;
    }(o.MediaCoordinatesPaneRenderer);

    var l = i(47043);

    var d =
    /*#__PURE__*/
    function (_r$LineSourcePaneView3) {
      _inherits(d, _r$LineSourcePaneView3);

      function d() {
        var _this34;

        _classCallCheck(this, d);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this34._executionRenderer = new a(), _this34._renderer = null;
        return _this34;
      }

      _createClass(d, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          _get(_getPrototypeOf(d.prototype), "_updateImpl", this).call(this, e, t), this._renderer = null;
          var r = this._source,
              s = r.points();
          if (0 === s.length) return;
          var o = r.adapter(),
              a = r.model().timeScale(),
              d = null === (i = r.model().paneForSource(r)) || void 0 === i ? void 0 : i.executionsPositionController();
          if (!d) return;
          var h = d.getXYCoordinate(o, a, s[0].index);
          !isFinite(h.y) || h.y < 0 || h.y > e || h.x < 0 || (this._executionRenderer.setData({
            point: new n.Point(h.x, h.y),
            arrowColor: o.getArrowColor(),
            arrowHeight: o.getArrowHeight(),
            direction: o.getDirection(),
            tooltip: o.getTooltip(),
            arrowSpacing: o.getArrowSpacing(),
            fontHeight: l.fontHeight(o.getFont()),
            text: o.getText(),
            textColor: o.getTextColor(),
            font: o.getFont()
          }), this._renderer = this._executionRenderer);
        }
      }]);

      return d;
    }(r.LineSourcePaneView);
  },
  46406: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibChannelPaneView: function FibChannelPaneView() {
        return u;
      }
    });
    var n = i(50151),
        r = i(87095),
        s = i(73436),
        o = i(19266),
        a = i(28621),
        l = i(99031),
        d = i(134),
        h = i(80657);

    var c =
    /*#__PURE__*/
    function (_a$ParallelChannelRen) {
      _inherits(c, _a$ParallelChannelRen);

      function c() {
        var _this35;

        _classCallCheck(this, c);

        _this35 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this35._data = null;
        return _this35;
      }

      _createClass(c, [{
        key: "_getColor",
        value: function _getColor() {
          var e = (0, n.ensureNotNull)(this._data);
          return (0, r.generateColor)(e.backcolor, e.transparency, !0);
        }
      }, {
        key: "_extendAndDrawLineSegment",
        value: function _extendAndDrawLineSegment(e, t, i, n) {
          var r;
          var s = null === (r = this._data) || void 0 === r ? void 0 : r.excludeBoundaries;

          if (void 0 !== s) {
            e.save(), e.beginPath(), e.rect(0, 0, n.width, n.height);

            for (var _t20 = 0; _t20 < s.length; _t20++) {
              var _s$_t = s[_t20],
                  _i24 = _s$_t.x,
                  _n21 = _s$_t.y;
              0 !== _t20 ? e.lineTo(_i24, _n21) : e.moveTo(_i24, _n21);
            }

            e.closePath(), e.clip("evenodd");
          }

          _get(_getPrototypeOf(c.prototype), "_extendAndDrawLineSegment", this).call(this, e, t, i, n), void 0 !== s && e.restore();
        }
      }]);

      return c;
    }(a.ParallelChannelRenderer);

    var u =
    /*#__PURE__*/
    function (_d$LineToolPaneViewFi) {
      _inherits(u, _d$LineToolPaneViewFi);

      function u() {
        var _this36;

        _classCallCheck(this, u);

        _this36 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this36._baseLineRenderer = new l.TrendLineRenderer(), _this36._lastLevelTrendRenderer = new l.TrendLineRenderer(), _this36._renderer = null, _this36._norm = null;
        return _this36;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i, r, a;

          _get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this);

          var l = this._source.priceScale();

          if (null === l) return;
          this._renderer = null;
          var d = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();
          if (null == d) return;
          3 === this._points.length && 3 === this._source.points().length && (this._norm = this._points[2].subtract(this._points[0]));
          var u = new o.CompositeRenderer();
          if (this._points.length < 2) return this.addAnchors(u), void (this._renderer = u);

          var p = this._source.properties().childs(),
              _ = this._points[0],
              g = this._points[1];

          if (this._points.length < 3) {
            var _e40 = {
              points: [_, g],
              color: p.level1.childs().color.value(),
              linewidth: p.levelsStyle.childs().linewidth.value(),
              linestyle: p.levelsStyle.childs().linestyle.value(),
              extendleft: p.extendLeft.value(),
              extendright: p.extendRight.value(),
              leftend: s.LineEnd.Normal,
              rightend: s.LineEnd.Normal
            };
            return this._baseLineRenderer.setData(_e40), u.append(this._baseLineRenderer), this.addAnchors(u), void (this._renderer = u);
          }

          var f = this._source.levelsCount(),
              v = (0, n.ensureNotNull)(this._norm);

          for (var _i25 = 1; _i25 < f; _i25++) {
            var _s11 = (0, n.ensureDefined)(this._source.properties().child("level" + _i25)).childs();

            if (!_s11.visible.value()) continue;
            var _o11 = null;

            for (var _e41 = _i25 + 1; _e41 <= f; _e41++) {
              var _t21 = (0, n.ensureDefined)(this._source.properties().child("level" + _e41)).childs();

              if (_t21.visible.value()) {
                _o11 = _t21;
                break;
              }
            }

            if (!_o11) break;

            var _a11 = v.scaled(_s11.coeff.value()),
                _x = _.add(_a11),
                m = g.add(_a11),
                w = v.scaled(_o11.coeff.value()),
                R = _.add(w),
                y = g.add(w),
                T = l.coordinateToPrice(_x.y, d),
                b = this._updateLabelForLevel({
              i: _i25 - 1,
              levelIndex: _i25,
              leftPoint: _x,
              rightPoint: m,
              price: T,
              color: _s11.color.value(),
              horzAlign: p.horzLabelsAlign.value(),
              vertAlign: p.vertLabelsAlign.value()
            });

            var P = void 0;
            null !== b && (u.append(b), P = null !== (r = (0, h.getTextBoundaries)(b, t, e)) && void 0 !== r ? r : void 0);
            var L = {
              points: [_x, m, R, y],
              color: _s11.color.value(),
              linewidth: p.levelsStyle.childs().linewidth.value(),
              linestyle: p.levelsStyle.childs().linestyle.value(),
              extendleft: p.extendLeft.value(),
              extendright: p.extendRight.value(),
              backcolor: _s11.color.value(),
              transparency: p.transparency.value(),
              skipTopLine: !0,
              fillBackground: p.fillBackground.value(),
              hittestOnBackground: !0,
              showMidline: !1,
              excludeBoundaries: P
            },
                S = new c();
            S.setData(L), u.append(S);
          }

          var x = null;

          for (var _e42 = f; _e42 >= 1; _e42--) {
            if ((0, n.ensureDefined)(this._source.properties().child("level" + _e42)).childs().visible.value()) {
              x = _e42;
              break;
            }
          }

          if (null !== x) {
            var _i26 = (0, n.ensureDefined)(this._source.properties().child("level" + x)).childs();

            if (_i26.visible.value()) {
              var _n22 = v.scaled(_i26.coeff.value()),
                  _r18 = _.add(_n22),
                  _o12 = g.add(_n22),
                  _c4 = l.coordinateToPrice(_r18.y, d),
                  _f2 = this._updateLabelForLevel({
                i: x - 1,
                levelIndex: x,
                leftPoint: _r18,
                rightPoint: _o12,
                price: _c4,
                color: _i26.color.value(),
                horzAlign: p.horzLabelsAlign.value(),
                vertAlign: p.vertLabelsAlign.value()
              });

              var _m;

              null !== _f2 && (u.append(_f2), _m = null !== (a = (0, h.getTextBoundaries)(_f2, t, e)) && void 0 !== a ? a : void 0);
              var _w = {
                points: [_r18, _o12],
                color: _i26.color.value(),
                linewidth: p.levelsStyle.childs().linewidth.value(),
                linestyle: p.levelsStyle.childs().linestyle.value(),
                extendleft: p.extendLeft.value(),
                extendright: p.extendRight.value(),
                leftend: s.LineEnd.Normal,
                rightend: s.LineEnd.Normal,
                excludeBoundaries: _m
              };
              this._lastLevelTrendRenderer.setData(_w), u.append(this._lastLevelTrendRenderer);
            }
          }

          this.addAnchors(u), this._renderer = u;
        }
      }]);

      return u;
    }(d.LineToolPaneViewFibWithLabels);
  },
  13616: function _(e, t, i) {
    "use strict";

    var n = i(86441).Point;

    var _i27 = i(134),
        r = _i27.LineToolPaneViewFibWithLabels;

    var s = i(99031).TrendLineRenderer,
        o = i(18807).HitTestResult,
        a = i(18807).HitTarget,
        l = i(19266).CompositeRenderer,
        d = i(70531).EllipseRendererSimple,
        h = i(73436).LineEnd;

    t.FibCirclesPaneView =
    /*#__PURE__*/
    function (_r19) {
      _inherits(_class3, _r19);

      function _class3(e, t) {
        var _this37;

        _classCallCheck(this, _class3);

        _this37 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this, e, t)), _this37._trendLineRenderer = new s(), _this37._renderer = null;
        return _this37;
      }

      _createClass(_class3, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class3.prototype), "_updateImpl", this).call(this), this._renderer = null, !(this._source.points().length < 2 || this._points.length < 2) && this._source.priceScale() && !this._source.priceScale().isEmpty() && !this._model.timeScale().isEmpty()) {
            var e = this._points[0],
                t = this._points[1];
            this._center = e.add(t).scaled(.5);
            var i = Math.abs(t.x - e.x),
                r = Math.abs(t.y - e.y);
            this._levels = [];

            for (var s = this._source.properties(), c = this._source.levelsCount(), u = 1; u <= c; u++) {
              var p = s["level" + u];

              if (p.visible.value()) {
                var _ = p.coeff.value(),
                    g = p.color.value(),
                    f = [];

                f.push(new n(this._center.x - .5 * i * _, this._center.y - .5 * r * _)), f.push(new n(this._center.x + .5 * i * _, this._center.y + .5 * r * _));
                var v = new n(this._center.x, this._center.y + .5 * r * _);

                this._levels.push({
                  color: g,
                  points: f,
                  labelPoint: v,
                  linewidth: p.linewidth.value(),
                  linestyle: p.linestyle.value(),
                  index: u
                });
              }
            }

            if (!(this._points.length < 2)) {
              var x = new l(),
                  m = s.fillBackground.value(),
                  w = s.transparency.value();

              for (u = 0; u < this._levels.length; u++) {
                var R = this._levels[u],
                    y = {};
                y.points = R.points, y.color = R.color, y.linewidth = R.linewidth, y.backcolor = R.color, u > 0 && (y.wholePoints = this._levels[u - 1].points), y.fillBackground = m, y.transparency = w;
                var T = new o(a.MovePoint, null, R.index);
                x.append(new d(y, T));

                var _e43 = this._updateLabelForLevel({
                  i: u,
                  levelIndex: R.index,
                  color: R.color,
                  price: 0,
                  vertAlign: "middle",
                  horzAlign: "left",
                  leftPoint: this._levels[u].labelPoint,
                  rightPoint: this._levels[u].labelPoint
                });

                null !== _e43 && x.append(_e43);
              }

              if (s.trendline.visible.value()) {
                var b = {
                  points: [this._points[0], this._points[1]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: s.trendline.color.value(),
                  linewidth: s.trendline.linewidth.value(),
                  linestyle: s.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal
                };
                this._trendLineRenderer.setData(b), x.append(this._trendLineRenderer);
              }

              this.addAnchors(x), this._renderer = x;
            }
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class3;
    }(r);
  },
  26702: function _(e, t, i) {
    "use strict";

    i.d(t, {
      fibLevelCoordinate: function fibLevelCoordinate() {
        return r;
      },
      fibLevelPrice: function fibLevelPrice() {
        return s;
      }
    });
    var n = i(50151);

    function r(e, t, i, r, s, o) {
      if (o) return Math.round((0, n.ensureDefined)(e.coordinate) + (0, n.ensureDefined)(t.coordinate) * i);
      var a = e.price + t.price * i;
      return r.priceToCoordinate(a, s);
    }

    function s(e, t, i, r, s, o) {
      if (!o) return e.price + t.price * i;
      var a = (0, n.ensureDefined)(e.coordinate) + (0, n.ensureDefined)(t.coordinate) * i;
      return r.coordinateToPrice(a, s);
    }
  },
  95994: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibRetracementPaneView: function FibRetracementPaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(72739),
        s = i(99031),
        o = i(80657),
        a = i(18807),
        l = i(19266),
        d = i(73436),
        h = i(26702),
        c = i(134);

    var u =
    /*#__PURE__*/
    function (_c$LineToolPaneViewFi) {
      _inherits(u, _c$LineToolPaneViewFi);

      function u(e, t) {
        var _this38;

        _classCallCheck(this, u);

        _this38 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this38._trendLineRenderer = new s.TrendLineRenderer(), _this38._renderer = new l.CompositeRenderer(), _this38._levels = [];
        return _this38;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i, l;
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._source.points().length < 2) return;

          var c = this._source.priceScale();

          if (!c || c.isEmpty() || this._model.timeScale().isEmpty()) return;
          var u = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();
          if (null == u) return;

          var _this$_source$points17 = this._source.points(),
              _this$_source$points18 = _slicedToArray(_this$_source$points17, 2),
              p = _this$_source$points18[0],
              _ = _this$_source$points18[1],
              g = this._source.properties().childs(),
              f = g.reverse.value();

          if (this._points.length < 2) return;
          var v = this._points[0],
              x = this._points[1],
              m = Math.min(v.x, x.x),
              w = Math.max(v.x, x.x),
              R = g.fillBackground.value(),
              y = g.transparency.value(),
              T = g.extendLinesLeft.value(),
              b = g.extendLines.value(),
              P = c.isLog() && g.fibLevelsBasedOnLogScale.value(),
              L = !(m > t && !T || w < 0 && !b);
          this._levels = [];

          var S = f ? p.price : _.price,
              C = f ? _.price : p.price,
              M = C - S,
              I = c.priceToCoordinate(S, u),
              A = {
            price: S,
            coordinate: I
          },
              k = {
            price: M,
            coordinate: c.priceToCoordinate(C, u) - I
          },
              N = this._source.levelsCount();

          for (var _e44 = 1; _e44 <= N; _e44++) {
            var _t22 = g["level" + _e44].childs();

            if (!_t22 || !_t22.visible.value()) continue;

            var _i28 = _t22.coeff.value(),
                _n23 = (0, h.fibLevelCoordinate)(A, k, _i28, c, u, P),
                _r20 = (0, h.fibLevelPrice)(A, k, _i28, c, u, P);

            this._levels.push({
              color: _t22.color.value(),
              y: _n23,
              price: _r20,
              linewidth: g.levelsStyle.childs().linewidth.value(),
              linestyle: g.levelsStyle.childs().linestyle.value(),
              index: _e44
            });
          }

          if (R && L) for (var _e45 = 0; _e45 < this._levels.length; _e45++) {
            if (_e45 > 0 && R) {
              var _t23 = this._levels[_e45 - 1],
                  _i29 = {
                points: [new n.Point(m, this._levels[_e45].y), new n.Point(w, _t23.y)],
                color: this._levels[_e45].color,
                linewidth: 0,
                backcolor: this._levels[_e45].color,
                fillBackground: !0,
                transparency: y,
                extendLeft: T,
                extendRight: b
              },
                  _s12 = new r.RectangleRenderer(void 0, void 0, !0);

              _s12.setData(_i29), this._renderer.append(_s12);
            }
          }
          var D = m,
              B = w;
          D === B && (T && (D -= 1), b && (B += 1));

          for (var _i30 = 0; _i30 < this._levels.length; _i30++) {
            var _r21 = new n.Point(D, this._levels[_i30].y),
                _h5 = new n.Point(B, this._levels[_i30].y),
                _c5 = this._updateLabelForLevel({
              i: _i30,
              levelIndex: this._levels[_i30].index,
              leftPoint: _r21,
              rightPoint: _h5,
              price: this._levels[_i30].price,
              color: this._levels[_i30].color,
              extendLeft: T,
              extendRight: b,
              horzAlign: g.horzLabelsAlign.value(),
              vertAlign: g.vertLabelsAlign.value()
            });

            if (null === _c5 || _c5.isOutOfScreen(t, e) || this._renderer.append(_c5), L) {
              var _n24 = void 0;

              null !== _c5 && "middle" === g.vertLabelsAlign.value() && (_n24 = null !== (l = (0, o.getTextBoundaries)(_c5, t, e)) && void 0 !== l ? l : void 0);

              var _u6 = {
                points: [_r21, _h5],
                color: this._levels[_i30].color,
                linewidth: this._levels[_i30].linewidth,
                linestyle: this._levels[_i30].linestyle,
                extendleft: T,
                extendright: b,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal,
                excludeBoundaries: _n24
              },
                  _p3 = new s.TrendLineRenderer();

              _p3.setData(_u6), _p3.setHitTest(new a.HitTestResult(a.HitTarget.MovePoint, {
                snappingPrice: this._levels[_i30].price
              }, this._levels[_i30].index)), this._renderer.append(_p3);
            }
          }

          var z = g.trendline.childs();

          if (z.visible.value() && L) {
            var _i31 = {
              points: [this._points[0], this._points[1]],
              width: t,
              height: e,
              color: z.color.value(),
              linewidth: z.linewidth.value(),
              linestyle: z.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: d.LineEnd.Normal,
              rightend: d.LineEnd.Normal
            };
            this._trendLineRenderer.setData(_i31), this._renderer.append(this._trendLineRenderer);
          }

          this.addAnchors(this._renderer);
        }
      }]);

      return u;
    }(c.LineToolPaneViewFibWithLabels);
  },
  91331: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibSpeedResistanceArcsPaneView: function FibSpeedResistanceArcsPaneView() {
        return _;
      }
    });
    var n = i(86441),
        r = i(37160),
        s = i(18807),
        o = i(19266),
        a = i(73436),
        l = i(99031),
        d = i(87095),
        h = i(45197),
        c = i(15187);

    var u =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa4) {
      _inherits(u, _c$MediaCoordinatesPa4);

      function u(e, t, i) {
        var _this39;

        _classCallCheck(this, u);

        _this39 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this)), _this39._data = e, _this39._hittest = t || new s.HitTestResult(s.HitTarget.MovePoint), _this39._backHittest = i || new s.HitTestResult(s.HitTarget.MovePointBackground);
        return _this39;
      }

      _createClass(u, [{
        key: "hitTest",
        value: function hitTest(e) {
          var t = this._data;
          if (null === t) return null;
          if ((0, r.sign)(e.y - t.center.y) !== t.dir && !t.fullCircles) return null;
          var i = e.subtract(t.center).length(),
              n = (0, h.interactionTolerance)().curve;
          return Math.abs(i - t.radius) < n ? this._hittest : t.hittestOnBackground && Math.abs(i) <= t.radius + n ? this._backHittest : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t = this._data;
          if (null === t) return;
          var i = e.context;
          i.lineCap = "round", i.strokeStyle = t.color, i.lineWidth = t.linewidth, i.translate(t.center.x, t.center.y), i.beginPath(), t.fullCircles ? i.arc(0, 0, t.radius, 2 * Math.PI, 0, !1) : t.dir > 0 ? i.arc(0, 0, t.radius, 0, Math.PI, !1) : i.arc(0, 0, t.radius, Math.PI, 0, !1), i.stroke(), t.fillBackground && (t.radius2 && (t.fullCircles ? i.arc(0, 0, t.radius2, 2 * Math.PI, 0, !0) : t.dir > 0 ? i.arc(0, 0, t.radius2, Math.PI, 0, !0) : i.arc(0, 0, t.radius2, 0, Math.PI, !0)), i.fillStyle = (0, d.generateColor)(t.color, t.transparency, !0), i.fill());
        }
      }]);

      return u;
    }(c.MediaCoordinatesPaneRenderer);

    var p = i(134);

    var _ =
    /*#__PURE__*/
    function (_p$LineToolPaneViewFi) {
      _inherits(_, _p$LineToolPaneViewFi);

      function _() {
        var _this40;

        _classCallCheck(this, _);

        _this40 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this40._trendLineRenderer = new l.TrendLineRenderer(), _this40._renderer = null, _this40._levels = [];
        return _this40;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var e;
          if (_get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var t = this._source.priceScale();

          if (!t || t.isEmpty() || this._model.timeScale().isEmpty()) return;
          if (null == (null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue())) return;
          var i = this._points[0],
              l = this._points[1],
              d = i.subtract(l).length();
          this._levels = [];

          var h = this._source.properties().childs(),
              c = this._source.levelsCount();

          for (var _e46 = 1; _e46 <= c; _e46++) {
            var _t24 = "level" + _e46,
                _s13 = this._source.properties().child(_t24).childs();

            if (!_s13.visible.value()) continue;

            var _o13 = _s13.coeff.value(),
                _a12 = _s13.color.value(),
                _h6 = l.subtract(i).length() * _o13,
                _c6 = (0, r.sign)(l.y - i.y),
                _u7 = new n.Point(i.x, i.y + _c6 * d * _o13);

            this._levels.push({
              color: _a12,
              radius: _h6,
              dir: _c6,
              labelPoint: _u7,
              linewidth: _s13.linewidth.value(),
              linestyle: _s13.linestyle.value(),
              index: _e46
            });
          }

          if (this._points.length < 2) return;

          var p = new o.CompositeRenderer(),
              _ = h.fillBackground.value(),
              g = h.transparency.value();

          for (var _e47 = 0; _e47 < this._levels.length; _e47++) {
            var _t25 = this._levels[_e47],
                _n25 = {
              center: i,
              color: _t25.color,
              linewidth: _t25.linewidth,
              radius: _t25.radius,
              dir: _t25.dir,
              transparency: g,
              fillBackground: _,
              hittestOnBackground: !0,
              fullCircles: h.fullCircles.value(),
              radius2: _e47 > 0 ? this._levels[_e47 - 1].radius : void 0
            },
                _r22 = new s.HitTestResult(s.HitTarget.MovePoint, void 0, _t25.index);

            p.append(new u(_n25, _r22));

            var _o14 = this._updateLabelForLevel({
              i: _e47,
              levelIndex: this._levels[_e47].index,
              leftPoint: this._levels[_e47].labelPoint,
              rightPoint: this._levels[_e47].labelPoint,
              price: 0,
              color: this._levels[_e47].color,
              horzAlign: "left",
              vertAlign: "middle"
            });

            null !== _o14 && p.append(_o14);
          }

          var f = h.trendline.childs();

          if (f.visible.value()) {
            var _e48 = {
              points: [this._points[0], this._points[1]],
              color: f.color.value(),
              linewidth: f.linewidth.value(),
              linestyle: f.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            this._trendLineRenderer.setData(_e48), p.append(this._trendLineRenderer);
          }

          this.addAnchors(p), this._renderer = p;
        }
      }]);

      return _;
    }(p.LineToolPaneViewFibWithLabels);
  },
  80724: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibSpeedResistanceFanPaneView: function FibSpeedResistanceFanPaneView() {
        return _;
      }
    });
    var n = i(50151),
        r = i(86441),
        s = i(87663),
        o = i(18807),
        a = i(14146),
        l = i(19266),
        d = i(73436),
        h = i(80657),
        c = i(99031),
        u = i(79191),
        p = i(46501);

    var _ =
    /*#__PURE__*/
    function (_u$LineSourcePaneView2) {
      _inherits(_, _u$LineSourcePaneView2);

      function _() {
        var _this41;

        _classCallCheck(this, _);

        _this41 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this41._numericFormatter = new s.NumericFormatter(), _this41._renderer = null;
        return _this41;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this), this._renderer = null, this._source.points().length < 2) return;

          var e = this._source.priceScale(),
              t = (0, n.ensureNotNull)(this._source.ownerSource()).firstValue();

          if (null === t || !e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
          if (this._points.length < 2) return;

          var i = this._source.points()[0],
              s = this._source.points()[1],
              u = this._source.properties().childs(),
              _ = u.reverse.value(),
              g = [],
              f = _ ? s.price - i.price : i.price - s.price,
              v = _ ? i.price : s.price;

          for (var _i32 = 1; _i32 <= 7; _i32++) {
            var _n26 = "hlevel" + _i32,
                _r23 = this._source.properties().child(_n26).childs();

            if (!_r23.visible.value()) continue;

            var _s14 = _r23.coeff.value(),
                _o15 = _r23.color.value(),
                _a13 = v + _s14 * f,
                _l9 = e.priceToCoordinate(_a13, t);

            g.push({
              coeff: _s14,
              color: _o15,
              y: _l9,
              index: _i32
            });
          }

          var x = [],
              m = _ ? s.index - i.index : i.index - s.index,
              w = _ ? i.index : s.index;

          for (var _e49 = 1; _e49 <= 7; _e49++) {
            var _t26 = "vlevel" + _e49,
                _i33 = this._source.properties().child(_t26).childs();

            if (!_i33.visible.value()) continue;

            var _n27 = _i33.coeff.value(),
                _r24 = _i33.color.value(),
                _s15 = Math.round(w + _n27 * m),
                _o16 = this._model.timeScale().indexToCoordinate(_s15);

            x.push({
              coeff: _n27,
              color: _r24,
              x: _o16,
              index: _e49
            });
          }

          var R = new l.CompositeRenderer(),
              y = this._points[0],
              T = this._points[1],
              b = Math.min(y.x, T.x),
              P = Math.min(y.y, T.y),
              L = Math.max(y.x, T.x),
              S = Math.max(y.y, T.y),
              C = u.grid.childs().color.value(),
              M = u.grid.childs().linewidth.value(),
              I = u.grid.childs().linestyle.value();

          for (var _e50 = 0; _e50 < g.length; _e50++) {
            var _t27 = new r.Point(b, g[_e50].y),
                _i34 = new r.Point(L, g[_e50].y);

            if (u.grid.childs().visible.value()) {
              var _e51 = {
                points: [_t27, _i34],
                color: C,
                linewidth: M,
                linestyle: I,
                extendleft: !1,
                extendright: !1,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal
              },
                  _n28 = new c.TrendLineRenderer();

              _n28.setData(_e51), R.append(_n28);
            }

            if (u.showLeftLabels.value()) {
              var _i35 = {
                points: [_t27],
                text: this._numericFormatter.format(g[_e50].coeff),
                color: g[_e50].color,
                vertAlign: "middle",
                horzAlign: "right",
                font: p.CHART_FONT_FAMILY,
                offsetX: 5,
                offsetY: 0,
                fontsize: 12,
                forceTextAlign: !0
              };
              R.append(new h.TextRenderer(_i35));
            }

            if (u.showRightLabels.value()) {
              var _t28 = {
                points: [_i34],
                text: this._numericFormatter.format(g[_e50].coeff),
                color: g[_e50].color,
                vertAlign: "middle",
                horzAlign: "left",
                font: p.CHART_FONT_FAMILY,
                offsetX: 5,
                offsetY: 0,
                fontsize: 12,
                forceTextAlign: !0
              };
              R.append(new h.TextRenderer(_t28));
            }
          }

          for (var _e52 = 0; _e52 < x.length; _e52++) {
            var _t29 = new r.Point(x[_e52].x, P),
                _i36 = new r.Point(x[_e52].x, S);

            if (u.grid.childs().visible.value()) {
              var _e53 = {
                points: [_t29, _i36],
                color: C,
                linewidth: M,
                linestyle: I,
                extendleft: !1,
                extendright: !1,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal
              },
                  _n29 = new c.TrendLineRenderer();

              _n29.setData(_e53), R.append(_n29);
            }

            if (u.showTopLabels.value()) {
              var _i37 = {
                points: [_t29],
                text: this._numericFormatter.format(x[_e52].coeff),
                color: x[_e52].color,
                vertAlign: "bottom",
                horzAlign: "center",
                font: p.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12
              };
              R.append(new h.TextRenderer(_i37));
            }

            if (u.showBottomLabels.value()) {
              var _t30 = {
                points: [_i36],
                text: this._numericFormatter.format(x[_e52].coeff),
                color: x[_e52].color,
                vertAlign: "top",
                horzAlign: "center",
                font: p.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12
              };
              R.append(new h.TextRenderer(_t30));
            }
          }

          var A = u.fillBackground.value(),
              k = u.transparency.value();

          for (var _e54 = 0; _e54 < g.length; _e54++) {
            var _t31 = new r.Point(T.x, g[_e54].y);

            if (_e54 > 0 && A) {
              var _i38 = {
                p1: y,
                p2: _t31,
                p3: y,
                p4: new r.Point(T.x, g[_e54 - 1].y),
                color: g[_e54].color,
                transparency: k,
                hittestOnBackground: !0,
                extendLeft: !1
              },
                  _n30 = new a.ChannelRenderer();

              _n30.setData(_i38), R.append(_n30);
            }

            {
              var _i39 = {
                points: [y, _t31],
                color: g[_e54].color,
                linewidth: u.linewidth.value(),
                linestyle: u.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal
              },
                  _n31 = new c.TrendLineRenderer();

              _n31.setData(_i39), _n31.setHitTest(new o.HitTestResult(o.HitTarget.MovePoint, void 0, {
                type: "h",
                index: g[_e54].index
              })), R.append(_n31);
            }
          }

          for (var _e55 = 0; _e55 < x.length; _e55++) {
            var _t32 = new r.Point(x[_e55].x, T.y);

            if (_e55 > 0 && A) {
              var _i40 = {
                p1: y,
                p2: _t32,
                p3: y,
                p4: new r.Point(x[_e55 - 1].x, T.y),
                color: x[_e55].color,
                transparency: k,
                hittestOnBackground: !0,
                extendLeft: !1
              },
                  _n32 = new a.ChannelRenderer();

              _n32.setData(_i40), R.append(_n32);
            }

            {
              var _i41 = {
                points: [y, _t32],
                color: x[_e55].color,
                linewidth: u.linewidth.value(),
                linestyle: u.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal
              },
                  _n33 = new c.TrendLineRenderer();

              _n33.setData(_i41), _n33.setHitTest(new o.HitTestResult(o.HitTarget.MovePoint, void 0, {
                type: "v",
                index: x[_e55].index
              })), R.append(_n33);
            }
          }

          this.addAnchors(R), this._renderer = R;
        }
      }]);

      return _;
    }(u.LineSourcePaneView);
  },
  47056: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibSpiralPaneView: function FibSpiralPaneView() {
        return p;
      }
    });
    var n = i(19266),
        r = i(73436),
        s = i(99031),
        o = i(79191),
        a = i(18807),
        l = i(68441),
        d = i(45197),
        h = i(15187);
    var c = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    var u =
    /*#__PURE__*/
    function (_h$MediaCoordinatesPa) {
      _inherits(u, _h$MediaCoordinatesPa);

      function u() {
        var _this42;

        _classCallCheck(this, u);

        _this42 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this42._data = null;
        return _this42;
      }

      _createClass(u, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;

          var t = this._data.points[0],
              i = this._data.points[1].subtract(t),
              n = e.subtract(t),
              r = i.normalized(),
              s = r.transposed(),
              o = n.normalized();

          var l = Math.acos(r.dotProduct(o));
          Math.asin(s.dotProduct(o)) < 0 && (l = 2 * Math.PI - l);
          var h = this._data.counterclockwise ? -1 : 1,
              c = n.length(),
              u = (0, d.interactionTolerance)().curve;

          for (var _e56 = 0; _e56 < 4; _e56++) {
            var _t33 = h * l / (.5 * Math.PI);

            var _n34 = this._continiusFib(_t33 + 4 * _e56);

            if (null !== _n34 && (_n34 = _n34 * i.length() / 5, Math.abs(_n34 - c) < u)) return new a.HitTestResult(a.HitTarget.MovePoint);
          }

          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          var t = e.context;
          t.lineCap = "round", t.strokeStyle = this._data.color;
          var i = this._data.points[0],
              n = this._data.points[1];
          t.translate(i.x, i.y);
          var r = n.subtract(i);
          var s = r.length();
          r = r.normalized();
          var o = Math.acos(r.x);
          Math.asin(r.y) < 0 && (o = 2 * Math.PI - o), t.rotate(o), t.scale(s / 5, s / 5), t.lineWidth = this._data.linewidth, (0, l.setLineStyle)(t, this._data.linestyle);
          var a = Math.PI / 100;
          t.moveTo(0, 0);
          var d = this._data.counterclockwise ? -1 : 1;

          for (var _e57 = 0; _e57 < 50 * (c.length - 1); _e57++) {
            var _i42 = d * _e57 * a,
                _n35 = this._continiusFib(_e57 / 50);

            if (null === _n35) break;

            var _r25 = Math.cos(_i42) * _n35,
                _s16 = Math.sin(_i42) * _n35;

            t.lineTo(_r25, _s16);
          }

          t.scale(5 / s, 5 / s), t.rotate(-o), t.stroke();
        }
      }, {
        key: "_continiusFib",
        value: function _continiusFib(e) {
          var t = Math.floor(e),
              i = Math.ceil(e);
          if (i >= c.length) return null;
          var n = e - t;
          n = Math.pow(n, 1.15);
          return c[t] + (c[i] - c[t]) * n;
        }
      }]);

      return u;
    }(h.MediaCoordinatesPaneRenderer);

    var p =
    /*#__PURE__*/
    function (_o$LineSourcePaneView5) {
      _inherits(p, _o$LineSourcePaneView5);

      function p() {
        var _this43;

        _classCallCheck(this, p);

        _this43 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this43._trendLineRenderer = new s.TrendLineRenderer(), _this43._spiralRenderer = new u(), _this43._renderer = null;
        return _this43;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(p.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var e = new n.CompositeRenderer(),
              t = this._source.properties().childs();

          {
            var _i43 = {
              points: [this._points[0], this._points[1]],
              color: t.linecolor.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: r.LineEnd.Normal,
              rightend: r.LineEnd.Normal
            };
            this._trendLineRenderer.setData(_i43), e.append(this._trendLineRenderer);
          }
          {
            var _i44 = {
              points: this._points,
              color: t.linecolor.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.linestyle.value(),
              counterclockwise: t.counterclockwise.value()
            };
            this._spiralRenderer.setData(_i44), e.append(this._spiralRenderer);
          }
          this.addAnchors(e), this._renderer = e;
        }
      }]);

      return p;
    }(o.LineSourcePaneView);
  },
  54498: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FibTimeZonePaneView: function FibTimeZonePaneView() {
        return p;
      }
    });
    var n = i(86441),
        r = i(71254),
        s = i(80657),
        o = i(72739),
        a = i(99031),
        l = i(18807),
        d = i(19266),
        h = i(73436),
        c = i(46501),
        u = i(79191);

    var p =
    /*#__PURE__*/
    function (_u$LineSourcePaneView3) {
      _inherits(p, _u$LineSourcePaneView3);

      function p(e, t) {
        var _this44;

        _classCallCheck(this, p);

        _this44 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this, e, t)), _this44._levels = [], _this44._trendRenderer = new a.TrendLineRenderer(), _this44._renderer = new d.CompositeRenderer();
        return _this44;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          if (_get(_getPrototypeOf(p.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._source.points().length < 1) return;

          var a = this._model.timeScale();

          if (a.isEmpty()) return;

          var _this$_source$points19 = this._source.points(),
              _this$_source$points20 = _slicedToArray(_this$_source$points19, 2),
              d = _this$_source$points20[0],
              u = _this$_source$points20[1],
              p = this._source.properties().childs(),
              _ = d.index;

          if (null === a.visibleBarsStrictRange()) return;
          this._levels = [];
          var g = u ? u.index - d.index : 1;

          for (var _e58 = 1; _e58 <= 11; _e58++) {
            var _t34 = p["level" + _e58].childs();

            if (!_t34.visible.value()) continue;

            var _i45 = Math.round(_ + _t34.coeff.value() * g),
                _n36 = {
              index: _e58,
              x: a.indexToCoordinate(_i45),
              color: _t34.color.value(),
              width: _t34.linewidth.value(),
              style: _t34.linestyle.value(),
              text: String(_t34.coeff.value())
            };

            this._levels.push(_n36);
          }

          if (p.fillBackground.value()) {
            var _t35 = p.transparency.value();

            for (var _i46 = 1; _i46 < this._levels.length; _i46++) {
              var _r26 = this._levels[_i46 - 1],
                  _s17 = {
                points: [new n.Point(this._levels[_i46].x, 0), new n.Point(_r26.x, e)],
                color: this._levels[_i46].color,
                linewidth: 0,
                backcolor: this._levels[_i46].color,
                fillBackground: !0,
                transparency: _t35,
                extendLeft: !1,
                extendRight: !1
              },
                  _a14 = new o.RectangleRenderer(void 0, void 0, !0);

              _a14.setData(_s17), this._renderer.append(_a14);
            }
          }

          var f = p.horzLabelsAlign.value();
          f = "left" === f ? "right" : "right" === f ? "left" : "center";
          var v = p.vertLabelsAlign.value();

          for (var _o17 = 0; _o17 < this._levels.length; _o17++) {
            var _a15 = void 0;

            var _d9 = this._levels[_o17].color;

            if (p.showLabels.value()) {
              var _r27 = void 0;

              switch (v) {
                case "top":
                  _r27 = new n.Point(this._levels[_o17].x, 0);
                  break;

                case "middle":
                  _r27 = new n.Point(this._levels[_o17].x, .5 * e);
                  break;

                default:
                  _r27 = new n.Point(this._levels[_o17].x, e);
              }

              var _l10 = {
                points: [_r27],
                text: this._levels[_o17].text,
                color: _d9,
                vertAlign: v,
                horzAlign: f,
                font: c.CHART_FONT_FAMILY,
                offsetX: 2,
                offsetY: 0,
                fontsize: 12
              },
                  _h8 = new s.TextRenderer(_l10);

              this._needLabelExclusionPath(_h8) && (_a15 = null !== (i = (0, s.getTextBoundaries)(_h8, t, e)) && void 0 !== i ? i : void 0), this._renderer.append(_h8);
            }

            var _h7 = {
              x: this._levels[_o17].x,
              color: _d9,
              linewidth: this._levels[_o17].width,
              linestyle: this._levels[_o17].style,
              excludeBoundaries: _a15
            },
                _u8 = new l.HitTestResult(l.HitTarget.MovePoint, void 0, this._levels[_o17].index),
                _3 = new r.VerticalLineRenderer();

            _3.setData(_h7), _3.setHitTest(_u8), this._renderer.append(_3);
          }

          if (2 === this._points.length) {
            var _e59 = p.trendline.childs(),
                _t36 = {
              points: [this._points[0], this._points[1]],
              color: _e59.color.value(),
              linewidth: _e59.linewidth.value(),
              linestyle: _e59.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal
            };

            this._trendRenderer.setData(_t36), this._renderer.append(this._trendRenderer);
          }

          2 === this._source.points().length ? this._renderer.append(this.createLineAnchor({
            points: this._points
          }, 0)) : this._points.length > 0 && this._renderer.append(this.createLineAnchor({
            points: [new n.Point(this._points[0].x, e / 2)],
            hittestResult: l.HitTarget.MovePoint
          }, 0));
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e) {
          return "center" === this._source.properties().childs().horzLabelsAlign.value();
        }
      }]);

      return p;
    }(u.LineSourcePaneView);
  },
  60322: function _(e, t, i) {
    "use strict";

    var _i47 = i(134),
        n = _i47.LineToolPaneViewFibWithLabels;

    var r = i(86441).Point,
        s = i(99031).TrendLineRenderer,
        o = i(18807).HitTestResult,
        a = i(18807).HitTarget,
        l = i(19266).CompositeRenderer,
        d = i(81139).ArcWedgeRenderer,
        h = i(73436).LineEnd;

    t.FibWedgePaneView =
    /*#__PURE__*/
    function (_n37) {
      _inherits(_class4, _n37);

      function _class4(e, t) {
        var _this45;

        _classCallCheck(this, _class4);

        _this45 = _possibleConstructorReturn(this, _getPrototypeOf(_class4).call(this, e, t)), _this45._levels = [], _this45._baseTrendRenderer = new s(), _this45._edgeTrendRenderer = new s(), _this45._renderer = null;
        return _this45;
      }

      _createClass(_class4, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class4.prototype), "_updateImpl", this).call(this), this._renderer = null, this._levels = [], this._points.length < 3) this._updateRenderer();else {
            var e = this._points,
                t = e[0],
                i = e[1],
                n = e[2],
                s = i.subtract(t).normalized(),
                o = n.subtract(t).normalized(),
                a = new r(1, 0),
                l = new r(0, 1),
                d = Math.acos(s.dotProduct(a));
            s.dotProduct(l) < 0 && (d = 2 * Math.PI - d), this._edge1 = d;
            var h = Math.acos(o.dotProduct(a));
            o.dotProduct(l) < 0 && (h = 2 * Math.PI - h), this._edge2 = h, d < h && (this._edge1 = Math.max(d, h), this._edge2 = Math.min(d, h) + 2 * Math.PI), Math.abs(d - h) > Math.PI && (this._edge1 = Math.min(d, h), this._edge2 = Math.max(d, h) - 2 * Math.PI);

            for (var c = this._source.properties(), u = 1; u <= this._source.levelsCount(); u++) {
              var p = c["level" + u];

              if (p.visible.value()) {
                var _ = p.coeff.value(),
                    g = p.color.value(),
                    f = i.subtract(t).length() * _,
                    v = s.add(o).scaled(.5).normalized().scaled(f),
                    x = t.add(v);

                this._levels.push({
                  coeff: _,
                  color: g,
                  radius: f,
                  labelPoint: x,
                  p1: t.add(s.scaled(f)),
                  p2: t.add(o.scaled(f)),
                  linewidth: p.linewidth.value(),
                  linestyle: p.linestyle.value(),
                  index: u
                });
              }
            }

            this._points.length < 2 || this._updateRenderer();
          }
        }
      }, {
        key: "_updateRenderer",
        value: function _updateRenderer() {
          if (!((x = this._points).length < 2)) {
            var e = new l(),
                t = this._source.properties(),
                i = x[0],
                n = x[1],
                r = {
              points: [i, n],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: t.trendline.color.value(),
              linewidth: t.trendline.visible.value() ? t.trendline.linewidth.value() : 0,
              linestyle: t.trendline.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal
            };

            if (this._baseTrendRenderer.setData(r), e.append(this._baseTrendRenderer), x.length < 3) return this.addAnchors(e), void (this._renderer = e);
            var s = x[2],
                c = s.data,
                u = n.subtract(i).length(),
                p = s.subtract(i).normalized();
            (s = i.add(p.scaled(u))).data = c, r = {
              points: [i, s],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: t.trendline.color.value(),
              linewidth: t.trendline.visible.value() ? t.trendline.linewidth.value() : 0,
              linestyle: t.trendline.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal
            }, this._edgeTrendRenderer.setData(r), e.append(this._edgeTrendRenderer);

            for (var _ = this._levels.length - 1; _ >= 0; _--) {
              var g = this._levels[_],
                  f = {};
              f.center = this._points[0], f.radius = g.radius, f.prevRadius = _ > 0 ? this._levels[_ - 1].radius : 0, f.edge = this._edge, f.color = g.color, f.linewidth = g.linewidth, f.edge1 = this._edge1, f.edge2 = this._edge2, f.p1 = g.p1, f.p2 = g.p2, f.fillBackground = t.fillBackground.value(), f.transparency = t.transparency.value();
              var v = new d();
              v.setData(f), v.setHitTest(new o(a.MovePoint, null, g.index)), e.append(v);

              var _i48 = this._updateLabelForLevel({
                i: _,
                levelIndex: g.index,
                color: g.color,
                leftPoint: g.labelPoint,
                rightPoint: g.labelPoint,
                price: 0,
                horzAlign: "left",
                vertAlign: "middle"
              });

              null !== _i48 && e.append(_i48);
            }

            var x = [i, n];
            this._model.lineBeingCreated() !== this._source && x.push(s), e.append(this.createLineAnchor({
              points: x
            }, 0)), this._renderer = e;
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class4;
    }(n);
  },
  13227: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      FlagMarkPaneView: function FlagMarkPaneView() {
        return c;
      }
    });
    var n = i(79191),
        r = i(19266),
        s = i(80101),
        o = i(18807),
        a = i(34026),
        l = i(68441),
        d = i(15187);

    var h =
    /*#__PURE__*/
    function (_d$MediaCoordinatesPa) {
      _inherits(h, _d$MediaCoordinatesPa);

      function h() {
        var _this46;

        _classCallCheck(this, h);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this46._data = null;
        return _this46;
      }

      _createClass(h, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data) return null;
          var _this$_data$point = this._data.point,
              t = _this$_data$point.x,
              i = _this$_data$point.y;
          return e.x < t || e.x > t + 20 || e.y < i - 22 || e.y > i ? null : new o.HitTestResult(o.HitTarget.MovePoint);
        }
      }, {
        key: "doesIntersectWithBox",
        value: function doesIntersectWithBox(e) {
          return null !== this._data && (0, a.pointInBox)(this._data.point, e);
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;
          t.translate(Math.round(this._data.point.x) - .5, Math.round(this._data.point.y - 22) - .5), t.fillStyle = "#434651", (0, l.drawRoundRect)(t, 0, 0, 2, 22, 1), t.fill(), t.fillStyle = this._data.color, t.beginPath(), t.moveTo(6.87, 0), t.bezierCurveTo(5.62, 0, 4.46, .23, 3.32, .69), t.bezierCurveTo(3.26, .71, 3.2, .75, 3.15, .8), t.bezierCurveTo(3.06, .89, 3, 1.02, 3, 1.16), t.lineTo(3, 1.19), t.lineTo(3, 12.5), t.bezierCurveTo(3, 12.8, 3.3, 13.02, 3.59, 12.93), t.bezierCurveTo(4.61, 12.64, 5.94, 12.44, 6.87, 12.44), t.bezierCurveTo(8.5, 12.44, 10.09, 12.83, 11.63, 13.21), t.bezierCurveTo(13.19, 13.6, 14.79, 14, 16.45, 14), t.bezierCurveTo(17.59, 14, 18.65, 13.81, 19.69, 13.43), t.bezierCurveTo(19.88, 13.36, 20, 13.18, 20, 12.98), t.lineTo(20, 1.19), t.bezierCurveTo(20, 1.06, 19.83, .93, 19.66, .99), t.bezierCurveTo(18.63, 1.38, 17.58, 1.56, 16.45, 1.56), t.bezierCurveTo(14.82, 1.56, 13.23, 1.17, 11.69, .79), t.bezierCurveTo(10.14, .4, 8.53, 0, 6.87, 0), t.closePath(), t.fill();
        }
      }]);

      return h;
    }(d.MediaCoordinatesPaneRenderer);

    var c =
    /*#__PURE__*/
    function (_n$LineSourcePaneView5) {
      _inherits(c, _n$LineSourcePaneView5);

      function c() {
        var _this47;

        _classCallCheck(this, c);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this47._flagMarkRenderer = new h(), _this47._renderer = null, _this47._anchorsOffset = null;
        return _this47;
      }

      _createClass(c, [{
        key: "setAnchors",
        value: function setAnchors(e) {
          this._anchorsOffset = e;
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(c.prototype), "_updateImpl", this).call(this), this._renderer = null, 1 !== this._points.length) return;

          this._flagMarkRenderer.setData({
            point: this._points[0],
            color: this._getSource().properties().childs().flagColor.value()
          });

          var e = this._getModel();

          this._renderer = new r.CompositeRenderer(), this._renderer.append(this._flagMarkRenderer);
          var t = [this._anchorsOffset ? this._points[0].add(this._anchorsOffset) : this._points[0].clone()];

          this._renderer.append(new s.SelectionRenderer({
            points: t,
            bgColors: this._lineAnchorColors(t),
            visible: this.areAnchorsVisible(),
            barSpacing: e.timeScale().barSpacing(),
            hittestResult: o.HitTarget.MovePoint
          }));
        }
      }]);

      return c;
    }(n.LineSourcePaneView);
  },
  85377: function _(e, t, i) {
    "use strict";

    var n = i(23966).DisjointChannelRenderer,
        r = i(99031).TrendLineRenderer,
        s = i(80657).TextRenderer,
        o = i(19266).CompositeRenderer,
        a = i(46501),
        l = i(33295).AlertableLineSourcePaneView;

    t.FlatBottomPaneView =
    /*#__PURE__*/
    function (_l11) {
      _inherits(_class5, _l11);

      function _class5(e, t) {
        var _this48;

        _classCallCheck(this, _class5);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(_class5).call(this, e, t)), _this48._label1 = null, _this48._label2 = null, _this48._trendLineRendererPoints12 = new r(), _this48._trendLineRendererPoints43 = new r(), _this48._disjointChannelRenderer = new n(), _this48._p1LabelRenderer = new s(), _this48._p2LabelRenderer = new s(), _this48._p3LabelRenderer = new s(), _this48._p4LabelRenderer = new s(), _this48._renderer = null;
        return _this48;
      }

      _createClass(_class5, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class5.prototype), "_updateImpl", this).call(this), this._renderer = null, this._label1 = null, this._label2 = null, !(this._source.points().length < 2) && this._source.priceScale()) {
            var e = this._source.points()[0],
                t = this._source.points()[1],
                i = this._source.ownerSource().firstValue();

            if (this._price1 = this._source.priceScale().formatPrice(e.price, i), this._price2 = this._source.priceScale().formatPrice(t.price, i), 3 === this._source.points().length) {
              var n = this._source.points()[2];

              this._price3 = this._source.priceScale().formatPrice(n.price, i);
            }

            if (!(this._points.length < 2)) {
              var r,
                  s = new o(),
                  l = (e = this._points[0], t = this._points[1], this._source.properties()),
                  d = this._model,
                  h = this._source;

              if (3 === this._points.length && ((n = this._points[2]).x = t.x, (r = e.clone()).y = n.y, r.data = 3, l.fillBackground.value())) {
                var c = d.timeScale().width(),
                    u = h.priceScale().height(),
                    p = l.extendLeft.value(),
                    _ = l.extendRight.value();

                this._disjointChannelRenderer.setData({
                  width: c,
                  height: u,
                  extendleft: p,
                  extendright: _,
                  points: [e, t, n, r],
                  backcolor: l.backgroundColor.value(),
                  transparency: l.transparency.value(),
                  hittestOnBackground: TradingView.isMobile.any()
                }), s.append(this._disjointChannelRenderer);
              }

              var g = function g(e, t) {
                return {
                  points: [e, t],
                  width: d.timeScale().width(),
                  height: h.priceScale().height(),
                  color: l.linecolor.value(),
                  linewidth: l.linewidth.value(),
                  linestyle: l.linestyle.value(),
                  extendleft: l.extendLeft.value(),
                  extendright: l.extendRight.value(),
                  leftend: l.leftEnd.value(),
                  rightend: l.rightEnd.value()
                };
              };

              if (this._trendLineRendererPoints12.setData(g(e, t)), s.append(this._trendLineRendererPoints12), 2 === this._points.length) return this.addAnchors(s), void (this._renderer = s);

              var f = this,
                  v = function v(e, t, i, n, r, o) {
                if (f._source.properties().showPrices.value()) {
                  var l = {
                    points: [i],
                    text: r,
                    color: f._source.properties().textcolor.value(),
                    horzAlign: i.x > n.x ? "left" : "right",
                    vertAlign: "middle",
                    font: a.CHART_FONT_FAMILY,
                    offsetX: 6,
                    offsetY: 0,
                    boxPadding: 0,
                    bold: f._source.properties().bold.value(),
                    italic: f._source.properties().italic.value(),
                    fontsize: f._source.properties().fontsize.value(),
                    forceTextAlign: !0
                  };
                  e.setData(l), s.append(e);
                  l = {
                    points: [n],
                    text: o,
                    color: f._source.properties().textcolor.value(),
                    horzAlign: i.x < n.x ? "left" : "right",
                    vertAlign: "middle",
                    font: a.CHART_FONT_FAMILY,
                    offsetX: 6,
                    offsetY: 0,
                    boxPadding: 0,
                    bold: f._source.properties().bold.value(),
                    italic: f._source.properties().italic.value(),
                    fontsize: f._source.properties().fontsize.value(),
                    forceTextAlign: !0
                  };
                  t.setData(l), s.append(t);
                }
              };

              v(this._p1LabelRenderer, this._p2LabelRenderer, e, t, this._price1, this._price2), this._trendLineRendererPoints43.setData(g(r, n)), s.append(this._trendLineRendererPoints43), v(this._p3LabelRenderer, this._p4LabelRenderer, n, r, this._price3, this._price3);
              var x = [e, t, n, r];
              this._model.lineBeingCreated() === this._source && x.pop(), s.append(this.createLineAnchor({
                points: x
              }, 0)), e && t && this._addAlertRenderer(s, [e, t]), this._renderer = s;
            }
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class5;
    }(l);
  },
  27271: function _(e, t, i) {
    "use strict";

    i.d(t, {
      GannArcRenderer: function GannArcRenderer() {
        return a;
      }
    });
    var n = i(86441),
        r = i(87095),
        s = i(18807),
        o = i(15187);

    var a =
    /*#__PURE__*/
    function (_o$MediaCoordinatesPa2) {
      _inherits(a, _o$MediaCoordinatesPa2);

      function a() {
        var _this49;

        _classCallCheck(this, a);

        _this49 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this)), _this49._data = null;
        return _this49;
      }

      _createClass(a, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data) return null;
          e = e.subtract(this._data.center);

          var t = this._data.edge.subtract(this._data.center),
              i = t.y / t.x;

          e = new n.Point(e.x, e.y / i);

          var r = this._data.point.subtract(this._data.center);

          r = new n.Point(r.x, r.y / i);
          var o = r.length(),
              a = e.length();

          var l = this._data.prevPoint.subtract(this._data.center);

          l = new n.Point(l.x, l.y / i);
          var d = l.length();
          return Math.abs(a - o) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0 ? new s.HitTestResult(s.HitTarget.MovePoint) : this._data.fillBack && a >= d && a <= o && t.x * e.x >= 0 && t.y * e.y >= 0 ? new s.HitTestResult(s.HitTarget.MovePointBackground) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;
          t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.translate(this._data.center.x, this._data.center.y);

          var i = this._data.edge.subtract(this._data.center),
              s = i.y / i.x;

          var o = this._data.point.subtract(this._data.center);

          o = new n.Point(o.x, o.y / s);

          var a = o.length(),
              l = this._data.prevPoint.subtract(this._data.center);

          l = new n.Point(l.x, l.y / s);
          var d = l.length();
          t.scale(1, s);
          var h = Math.abs(this._data.edge.x - this._data.center.x);

          if (Math.abs(a) > h) {
            var _e60 = Math.sign(this._data.edge.x - this._data.center.x) * h;

            t.rect(0, 0, _e60, _e60), t.clip();
          }

          this._data.fillBack && (this._data.point.x < this._data.center.x && (a = -a, d = -d), t.beginPath(), t.moveTo(d, 0), t.lineTo(a, 0), t.arcTo(a, a, 0, a, Math.abs(a)), t.lineTo(0, d), t.arcTo(d, d, d, 0, Math.abs(d)), t.fillStyle = (0, r.generateColor)(this._data.color, this._data.transparency, !0), t.fill()), t.beginPath(), this._data.point.x > this._data.center.x ? t.arc(0, 0, Math.abs(a), 0, Math.PI / 2, !1) : t.arc(0, 0, Math.abs(a), -Math.PI / 2, -Math.PI, !0), t.scale(1, 1 / s), t.stroke();
        }
      }]);

      return a;
    }(o.MediaCoordinatesPaneRenderer);
  },
  99631: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      GannComplexPaneView: function GannComplexPaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(99031),
        o = i(80657),
        a = i(19266),
        l = i(73436),
        d = i(79849),
        h = i(27271),
        c = i(38223);

    var u =
    /*#__PURE__*/
    function (_r$LineSourcePaneView4) {
      _inherits(u, _r$LineSourcePaneView4);

      function u(e, t) {
        var _this50;

        _classCallCheck(this, u);

        _this50 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this50._verticalLevelsRenderers = [], _this50._horizontalLevelsRenderers = [], _this50._fanRenderers = [], _this50._arcRenderers = [], _this50._priceDiffTextRenderer = new o.TextRenderer(), _this50._indexDiffTextRenderer = new o.TextRenderer(), _this50._ratioTextRenderer = new o.TextRenderer(), _this50._renderer = null, _this50._initRenderers();
        return _this50;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var _t38, _t39;

          _get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = new a.CompositeRenderer(),
              t = this._getPoints();

          if (t.length < 2) return this.addAnchors(e), void (this._renderer = e);

          var _t37 = _slicedToArray(t, 2),
              i = _t37[0],
              n = _t37[1];

          var r = this._getSource(),
              s = r.isReversed();

          s && (_t38 = t, _t39 = _slicedToArray(_t38, 2), n = _t39[0], i = _t39[1], _t38);

          var o = n.x - i.x,
              l = n.y - i.y,
              d = i,
              h = n,
              c = this._getModel(),
              u = {
            barsCoordsRange: o,
            priceCoordsRange: l,
            startPoint: d,
            endPoint: h,
            p1: i,
            p2: n,
            isLabelsVisible: r.isLabelsVisible(),
            reversed: s
          };

          this._prepareLevels(e, u), this._prepareFanLines(e, u), this._prepareArcs(e, u), this._prepareLabels(e, u);
          var p = [i, n];
          c.lineBeingCreated() === r && p.pop(), e.append(this.createLineAnchor({
            points: p
          }, 0)), this._renderer = e;
        }
      }, {
        key: "_initRenderers",
        value: function _initRenderers() {
          var e = this._getSource(),
              t = e.levelsCount();

          for (var _e61 = 0; _e61 < t; _e61++) {
            this._verticalLevelsRenderers.push(new s.TrendLineRenderer()), this._horizontalLevelsRenderers.push(new s.TrendLineRenderer());
          }

          var i = e.fanLinesCount();

          for (var _e62 = 0; _e62 < i; _e62++) {
            this._fanRenderers.push(new s.TrendLineRenderer());
          }

          var n = e.arcsCount();

          for (var _e63 = 0; _e63 < n; _e63++) {
            this._arcRenderers.push(new h.GannArcRenderer());
          }
        }
      }, {
        key: "_prepareLevels",
        value: function _prepareLevels(e, t) {
          var i = t.startPoint,
              r = t.endPoint,
              s = t.barsCoordsRange,
              o = t.priceCoordsRange,
              a = this._getSource().levels();

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = a[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _t40 = _step3.value;
              if (!_t40.visible) continue;

              var _a16 = _t40.index / 5,
                  _h9 = i.x + _a16 * s,
                  _c7 = {
                points: [new n.Point(_h9, i.y), new n.Point(_h9, r.y)],
                color: _t40.color,
                linewidth: _t40.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal
              },
                  _u9 = this._verticalLevelsRenderers[_t40.index];

              _u9.setData(_c7), e.append(_u9);
              var p = i.y + _a16 * o,
                  _ = {
                points: [new n.Point(i.x, p), new n.Point(r.x, p)],
                color: _t40.color,
                linewidth: _t40.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal
              },
                  g = this._horizontalLevelsRenderers[_t40.index];
              g.setData(_), e.append(g);
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
      }, {
        key: "_prepareFanLines",
        value: function _prepareFanLines(e, t) {
          var i = t.p1,
              r = t.startPoint,
              s = t.endPoint,
              o = t.barsCoordsRange,
              a = t.priceCoordsRange,
              h = this._getSource().fanLines();

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = h[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _t41 = _step4.value;
              if (!_t41.visible) continue;
              var _h10 = _t41.x,
                  _c8 = _t41.y;

              var _u10 = void 0,
                  p = void 0;

              if (_h10 > _c8) {
                _u10 = s.x;

                var _e64 = _c8 / _h10;

                p = r.y + _e64 * a;
              } else {
                p = s.y;

                var _e65 = _h10 / _c8;

                _u10 = r.x + _e65 * o;
              }

              var _ = {
                points: [i, new n.Point(_u10, p)],
                color: _t41.color,
                linewidth: _t41.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal
              },
                  g = this._fanRenderers[_t41.index];
              g.setData(_), e.append(g);
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
      }, {
        key: "_prepareArcs",
        value: function _prepareArcs(e, t) {
          var i = t.p1,
              r = t.startPoint,
              s = t.endPoint,
              o = t.barsCoordsRange,
              a = t.priceCoordsRange;
          var l = i;

          var d = this._getSource(),
              h = d.isArcsBackgroundFilled(),
              c = d.arcsBackgroundTransparency(),
              u = d.arcs();

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = u[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _t42 = _step5.value;
              if (!_t42.visible) continue;

              var _i49 = _t42.x / 5,
                  _d10 = _t42.y / 5,
                  _u11 = r.x + _i49 * o,
                  p = r.y + _d10 * a,
                  _ = {
                center: r,
                point: new n.Point(_u11, p),
                edge: s,
                color: _t42.color,
                linewidth: _t42.width,
                fillBack: h,
                transparency: c,
                prevPoint: l
              },
                  g = this._arcRenderers[_t42.index];

              g.setData(_), e.append(g), l = _.point;
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
      }, {
        key: "_prepareLabels",
        value: function _prepareLabels(e, t) {
          var i = t.p1,
              r = t.p2,
              s = t.isLabelsVisible,
              o = t.reversed;
          if (!s) return;

          var a = this._getSource(),
              l = a.ownerSource();

          var d = a.getPriceDiff(),
              h = a.getIndexDiff();
          if (null === d || null === h || null === l) return;
          o && (d = -d, h = -h);

          var u = new n.Point(i.x, r.y),
              p = (0, c.forceLTRStr)(l.formatter().format(d)),
              _ = this._getLabelData(u, p);

          _.horzAlign = h > 0 ? "right" : "left", _.vertAlign = d > 0 ? "bottom" : "top", _.offsetX = 10, _.offsetY = d > 0 ? 8 : 10, _.forceTextAlign = !0, this._priceDiffTextRenderer.setData(_), e.append(this._priceDiffTextRenderer);

          var g = new n.Point(r.x, i.y),
              f = (0, c.forceLTRStr)(h.toString()),
              v = this._getLabelData(g, f);

          v.horzAlign = h > 0 ? "left" : "right", v.vertAlign = d > 0 ? "top" : "bottom", v.offsetX = 10, v.offsetY = d > 0 ? 10 : 8, v.forceTextAlign = !0, this._indexDiffTextRenderer.setData(v), e.append(this._indexDiffTextRenderer);
          var x = a.getScaleRatio();
          if (null === x) return;

          var m = a.getScaleRatioFormatter(),
              w = (0, c.forceLTRStr)(m.format(x)),
              R = this._getLabelData(r, w);

          R.horzAlign = h > 0 ? "left" : "right", R.vertAlign = d > 0 ? "bottom" : "top", R.offsetX = 10, R.offsetY = d > 0 ? 8 : 10, R.forceTextAlign = !0, this._ratioTextRenderer.setData(R), e.append(this._ratioTextRenderer);
        }
      }, {
        key: "_getLabelData",
        value: function _getLabelData(e, t) {
          var i = this._getSource(),
              _i$getLabelsStyle = i.getLabelsStyle(),
              n = _i$getLabelsStyle.textColor,
              r = _i$getLabelsStyle.font,
              s = _i$getLabelsStyle.fontSize,
              o = _i$getLabelsStyle.bold,
              a = _i$getLabelsStyle.italic;

          return {
            points: [e],
            backgroundColor: "transparent",
            text: t,
            font: r,
            bold: o,
            italic: a,
            fontsize: s,
            color: n,
            vertAlign: "top",
            horzAlign: "center",
            offsetX: 0,
            offsetY: 0,
            backgroundRoundRect: 4
          };
        }
      }]);

      return u;
    }(r.LineSourcePaneView);
  },
  25438: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      GannFanPaneView: function GannFanPaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(18807),
        s = i(14146),
        o = i(19266),
        a = i(73436),
        l = i(80657),
        d = i(99031),
        h = i(79191),
        c = i(46501);

    var u =
    /*#__PURE__*/
    function (_h$LineSourcePaneView2) {
      _inherits(u, _h$LineSourcePaneView2);

      function u() {
        var _this51;

        _classCallCheck(this, u);

        _this51 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this51._renderer = null;
        return _this51;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer = null, this._source.points().length < 2) return;

          var e = this._source.priceScale();

          if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
          if (this._points.length < 2) return;

          var t = this._points[0],
              i = this._points[1],
              h = [],
              u = i.x - t.x,
              p = i.y - t.y,
              _ = this._source.properties().childs();

          for (var _e66 = 1; _e66 <= 9; _e66++) {
            var _n38 = "level" + _e66,
                _r28 = this._source.properties().child(_n38).childs();

            if (!_r28.visible.value()) continue;

            var _s18 = _r28.coeff1.value(),
                _o18 = _r28.coeff2.value(),
                _a17 = _s18 / _o18,
                _l12 = _r28.color.value(),
                _d11 = _s18 + "/" + _o18;

            var _c9 = void 0,
                _4 = void 0;

            _s18 > _o18 ? (_c9 = i.x, _4 = t.y + p / _a17) : (_c9 = t.x + u * _a17, _4 = i.y), h.push({
              label: _d11,
              color: _l12,
              x: _c9,
              y: _4,
              linewidth: _r28.linewidth.value(),
              linestyle: _r28.linestyle.value(),
              index: _e66
            });
          }

          var g = new o.CompositeRenderer(),
              f = _.fillBackground.value(),
              v = _.transparency.value();

          for (var _e67 = 0; _e67 < h.length; _e67++) {
            var _i50 = new n.Point(h[_e67].x, h[_e67].y);

            if (f) if (h[_e67].index < 4) {
              var _r29 = {
                p1: t,
                p2: _i50,
                p3: t,
                p4: new n.Point(h[_e67 + 1].x, h[_e67 + 1].y),
                color: h[_e67].color,
                transparency: v,
                hittestOnBackground: !0,
                extendLeft: !1
              },
                  _o19 = new s.ChannelRenderer();

              _o19.setData(_r29), g.append(_o19);
            } else if (h[_e67].index > 4 && _e67 > 0) {
              var _r30 = {
                p1: t,
                p2: _i50,
                p3: t,
                p4: new n.Point(h[_e67 - 1].x, h[_e67 - 1].y),
                color: h[_e67].color,
                transparency: v,
                hittestOnBackground: !0,
                extendLeft: !1
              },
                  _o20 = new s.ChannelRenderer();

              _o20.setData(_r30), g.append(_o20);
            }
            {
              var _n39 = {
                points: [t, _i50],
                color: h[_e67].color,
                linewidth: h[_e67].linewidth,
                linestyle: h[_e67].linestyle,
                extendleft: !1,
                extendright: !0,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  _s19 = new d.TrendLineRenderer();

              _s19.setData(_n39), _s19.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, h[_e67].index)), g.append(_s19);
            }

            if (_.showLabels.value()) {
              var _t43 = {
                points: [_i50],
                text: h[_e67].label,
                color: h[_e67].color,
                vertAlign: "middle",
                horzAlign: "left",
                font: c.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12
              };
              g.append(new l.TextRenderer(_t43));
            }
          }

          this.addAnchors(g), this._renderer = g;
        }
      }]);

      return u;
    }(h.LineSourcePaneView);
  },
  57583: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      GannFixedPaneView: function GannFixedPaneView() {
        return h;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(99031),
        o = i(19266),
        a = i(73436),
        l = i(79849),
        d = i(27271);

    var h =
    /*#__PURE__*/
    function (_r$LineSourcePaneView5) {
      _inherits(h, _r$LineSourcePaneView5);

      function h(e, t) {
        var _this52;

        _classCallCheck(this, h);

        _this52 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e, t)), _this52._verticalLevelsRenderers = [], _this52._horizontalLevelsRenderers = [], _this52._fanRenderers = [], _this52._arcRenderers = [], _this52._renderer = null, _this52._initRenderers();
        return _this52;
      }

      _createClass(h, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(h.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = this._getSource(),
              t = this._getPoints(),
              i = e.getScreenPoints();

          if (t.length < 2 || i.length < 2) return;

          var _i51 = _slicedToArray(i, 2),
              n = _i51[0],
              r = _i51[1];

          t[1] = n, t[1].data = 1, t[2] = r;

          var s = this._getPoints(),
              a = new o.CompositeRenderer();

          if (s.length < 2) return this.addAnchors(a), void (this._renderer = a);

          var l = s[0],
              d = 3 === s.length ? s[2] : s[1],
              h = d.x - l.x,
              c = d.y - l.y,
              u = l,
              p = d,
              _ = this._getModel(),
              g = {
            barsCoordsRange: h,
            priceCoordsRange: c,
            startPoint: u,
            endPoint: p,
            p1: l,
            p2: d
          };

          this._prepareLevels(a, g), this._prepareFanLines(a, g), this._prepareArcs(a, g);
          var f = [l, s[1]];
          _.lineBeingCreated() === e && f.pop(), a.append(this.createLineAnchor({
            points: f
          }, 0)), this._renderer = a;
        }
      }, {
        key: "_initRenderers",
        value: function _initRenderers() {
          var e = this._getSource(),
              t = e.levelsCount();

          for (var _e68 = 0; _e68 < t; _e68++) {
            this._verticalLevelsRenderers.push(new s.TrendLineRenderer()), this._horizontalLevelsRenderers.push(new s.TrendLineRenderer());
          }

          var i = e.fanLinesCount();

          for (var _e69 = 0; _e69 < i; _e69++) {
            this._fanRenderers.push(new s.TrendLineRenderer());
          }

          var n = e.arcsCount();

          for (var _e70 = 0; _e70 < n; _e70++) {
            this._arcRenderers.push(new d.GannArcRenderer());
          }
        }
      }, {
        key: "_prepareLevels",
        value: function _prepareLevels(e, t) {
          var i = t.startPoint,
              r = t.endPoint,
              s = t.barsCoordsRange,
              o = t.priceCoordsRange,
              d = this._getSource().levels();

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = d[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _t44 = _step6.value;
              if (!_t44.visible) continue;

              var _d12 = _t44.index / 5,
                  _h11 = i.x + _d12 * s,
                  c = {
                points: [new n.Point(_h11, i.y), new n.Point(_h11, r.y)],
                color: _t44.color,
                linewidth: _t44.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  u = this._verticalLevelsRenderers[_t44.index];

              u.setData(c), e.append(u);
              var p = i.y + _d12 * o,
                  _ = {
                points: [new n.Point(i.x, p), new n.Point(r.x, p)],
                color: _t44.color,
                linewidth: _t44.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  g = this._horizontalLevelsRenderers[_t44.index];
              g.setData(_), e.append(g);
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
        }
      }, {
        key: "_prepareFanLines",
        value: function _prepareFanLines(e, t) {
          var i = t.p1,
              r = t.startPoint,
              s = t.endPoint,
              o = t.barsCoordsRange,
              d = t.priceCoordsRange,
              h = this._getSource().fanLines();

          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = h[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _t45 = _step7.value;
              if (!_t45.visible) continue;
              var _h12 = _t45.x,
                  c = _t45.y;
              var u = void 0,
                  p = void 0;

              if (_h12 > c) {
                u = s.x;

                var _e71 = c / _h12;

                p = r.y + _e71 * d;
              } else {
                p = s.y;

                var _e72 = _h12 / c;

                u = r.x + _e72 * o;
              }

              var _ = {
                points: [i, new n.Point(u, p)],
                color: _t45.color,
                linewidth: _t45.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  g = this._fanRenderers[_t45.index];
              g.setData(_), e.append(g);
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
        }
      }, {
        key: "_prepareArcs",
        value: function _prepareArcs(e, t) {
          var i = t.p1,
              r = t.startPoint,
              s = t.endPoint,
              o = t.barsCoordsRange,
              a = t.priceCoordsRange;
          var l = i;

          var d = this._getSource(),
              h = d.isArcsBackgroundFilled(),
              c = d.arcsBackgroundTransparency(),
              u = d.arcs();

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = u[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _t46 = _step8.value;
              if (!_t46.visible) continue;

              var _i52 = _t46.x / 5,
                  _d13 = _t46.y / 5,
                  _u12 = r.x + _i52 * o,
                  p = r.y + _d13 * a,
                  _ = {
                center: r,
                point: new n.Point(_u12, p),
                edge: s,
                color: _t46.color,
                linewidth: _t46.width,
                fillBack: h,
                transparency: c,
                prevPoint: l
              },
                  g = this._arcRenderers[_t46.index];

              g.setData(_), e.append(g), l = _.point;
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
        }
      }]);

      return h;
    }(r.LineSourcePaneView);
  },
  97449: function _(e, t, i) {
    "use strict";

    var n = i(86441).Point,
        r = i(79191).LineSourcePaneView,
        s = i(80657).TextRenderer,
        o = i(72739).RectangleRenderer,
        a = i(99031).TrendLineRenderer,
        l = i(19266).CompositeRenderer,
        d = i(87663).NumericFormatter,
        h = i(73436).LineEnd,
        c = i(46501);

    t.GannSquarePaneView =
    /*#__PURE__*/
    function (_r31) {
      _inherits(_class6, _r31);

      function _class6(e, t) {
        var _this53;

        _classCallCheck(this, _class6);

        _this53 = _possibleConstructorReturn(this, _getPrototypeOf(_class6).call(this, e, t)), _this53._numericFormatter = new d(), _this53._renderer = null;
        return _this53;
      }

      _createClass(_class6, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class6.prototype), "_updateImpl", this).call(this), this._renderer = null, !(this._source.points().length < 2) && this._source.priceScale() && !this._source.priceScale().isEmpty() && !this._model.timeScale().isEmpty()) {
            var e = this._source.points()[0],
                t = this._source.points()[1],
                i = (C = this._source.properties()).reverse && C.reverse.value();

            this._hlevels = [];

            for (var r = i ? e.price - t.price : t.price - e.price, d = i ? t.price : e.price, u = this._source.ownerSource().firstValue(), p = 1; p <= 7; p++) {
              if ((w = C["hlevel" + p]).visible.value()) {
                var _ = w.coeff.value(),
                    g = w.color.value(),
                    f = d + _ * r,
                    v = this._source.priceScale().priceToCoordinate(f, u);

                this._hlevels.push({
                  coeff: _,
                  color: g,
                  y: v
                });
              }
            }

            this._vlevels = [];
            var x = i ? e.index - t.index : t.index - e.index,
                m = i ? t.index : e.index;

            for (p = 1; p <= 7; p++) {
              var w;

              if ((w = C["vlevel" + p]).visible.value()) {
                _ = w.coeff.value(), g = w.color.value();

                var R = Math.round(m + _ * x),
                    y = this._model.timeScale().indexToCoordinate(R);

                this._vlevels.push({
                  coeff: _,
                  color: g,
                  x: y
                });
              }
            }

            if (this._hfans = [], this._vfans = [], C.fans.visible.value()) for (p = 1; p <= 7; p++) {
              R = Math.round(m + C["hlevel" + p].coeff.value() * x), f = d + C["vlevel" + p].coeff.value() * r;
              this._hfans.push(this._model.timeScale().indexToCoordinate(R)), this._vfans.push(this._source.priceScale().priceToCoordinate(f, u));
            }
            var T = new l();
            if (this._points.length < 2) return this.addAnchors(T), void (this._renderer = T);
            e = this._points[0], t = this._points[1];

            var b = Math.min(e.x, t.x),
                P = Math.min(e.y, t.y),
                L = Math.max(e.x, t.x),
                S = Math.max(e.y, t.y),
                C = this._source.properties(),
                M = this._source.properties().fillHorzBackground.value(),
                I = this._source.properties().horzTransparency.value(),
                A = this._source.properties().fillVertBackground.value(),
                k = this._source.properties().vertTransparency.value();

            for (p = 0; p < this._hlevels.length; p++) {
              if (p > 0 && M) {
                var N = this._hlevels[p - 1];
                e = new n(b, this._hlevels[p].y), t = new n(L, N.y);
                (E = {}).points = [e, t], E.color = this._hlevels[p].color, E.linewidth = 0, E.backcolor = this._hlevels[p].color, E.fillBackground = !0, E.transparency = I, E.extendLeft = !1, E.extendRight = !1, (O = new o(void 0, void 0, !0)).setData(E), T.append(O);
              }

              var D = {
                points: [e = new n(b, this._hlevels[p].y), t = new n(L, this._hlevels[p].y)],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[p].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal
              };

              if ((O = new a()).setData(D), T.append(O), C.showLeftLabels.value()) {
                var B = {
                  points: [e],
                  text: this._numericFormatter.format(this._hlevels[p].coeff),
                  color: this._hlevels[p].color,
                  vertAlign: "middle",
                  horzAlign: "right",
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0
                };
                T.append(new s(B));
              }

              if (C.showRightLabels.value()) {
                var z = {
                  points: [t],
                  text: this._numericFormatter.format(this._hlevels[p].coeff),
                  color: this._hlevels[p].color,
                  vertAlign: "middle",
                  horzAlign: "left",
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12
                };
                T.append(new s(z));
              }
            }

            for (p = 0; p < this._vlevels.length; p++) {
              e = new n(this._vlevels[p].x, P), t = new n(this._vlevels[p].x, S);

              if (p > 0 && A) {
                N = this._vlevels[p - 1];
                var E,
                    H = new n(N.x, P);
                (E = {}).points = [H, t], E.color = this._vlevels[p].color, E.linewidth = 0, E.backcolor = this._vlevels[p].color, E.fillBackground = !0, E.transparency = k, E.extendLeft = !1, E.extendRight = !1, (O = new o(void 0, void 0, !0)).setData(E), T.append(O);
              }

              var O;
              D = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[p].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal
              };

              if ((O = new a()).setData(D), T.append(O), C.showTopLabels.value()) {
                var V = {
                  points: [e],
                  text: this._numericFormatter.format(this._vlevels[p].coeff),
                  color: this._vlevels[p].color,
                  vertAlign: "bottom",
                  horzAlign: "center",
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 0,
                  offsetY: 3,
                  fontsize: 12
                };
                T.append(new s(V));
              }

              if (C.showBottomLabels.value()) {
                var W = {
                  points: [t],
                  text: this._numericFormatter.format(this._vlevels[p].coeff),
                  color: this._vlevels[p].color,
                  vertAlign: "top",
                  horzAlign: "center",
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 0,
                  offsetY: 5,
                  fontsize: 12
                };
                T.append(new s(W));
              }
            }

            var F = this;
            U(T, this._hfans, !0), U(T, this._vfans, !1);
            var Y = new n(this._points[0].x, this._points[1].y);
            Y.data = 2;
            var j = new n(this._points[1].x, this._points[0].y);
            j.data = 3, T.append(this.createLineAnchor({
              points: [].concat(_toConsumableArray(this._points), [Y, j])
            }, 0)), this._renderer = T;
          }

          function U(e, t, i) {
            var r = new n(b, P),
                s = new n(L, P),
                o = new n(b, S),
                l = new n(L, S),
                d = {
              width: F._model.timeScale().width(),
              height: F._source.priceScale().height(),
              color: C.fans.color.value(),
              linewidth: C.linewidth.value(),
              linestyle: C.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal
            };

            function c(t) {
              var i = new a();
              i.setData(Object.assign({}, d, {
                points: t
              })), e.append(i);
            }

            for (var u = 0; u < t.length; ++u) {
              var p = i ? S : t[u],
                  _ = i ? P : t[u],
                  g = i ? t[u] : b,
                  f = i ? t[u] : L,
                  v = new n(f, p),
                  x = new n(g, p),
                  m = new n(f, _),
                  w = new n(g, _);

              c([o, m]), c([l, w]), c([r, v]), c([s, x]);
            }
          }
        }
      }]);

      return _class6;
    }(r);
  },
  55715: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      GhostFeedPaneView: function GhostFeedPaneView() {
        return _;
      }
    });
    var n = i(48891),
        r = i(79849),
        s = i(1722),
        o = i(18807),
        a = i(19266),
        l = i(45197),
        d = i(73436),
        h = i(99031),
        c = i(836),
        u = i(79191);
    var p = n.colorsPalette["color-cold-gray-500"];

    var _ =
    /*#__PURE__*/
    function (_u$LineSourcePaneView4) {
      _inherits(_, _u$LineSourcePaneView4);

      function _() {
        var _this54;

        _classCallCheck(this, _);

        _this54 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this54._renderer = null, _this54._segments = [];
        return _this54;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var _this55 = this;

          var e, t;
          _get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this), this._renderer = null, this._segments = [];

          var i = this._source.priceScale(),
              n = null !== (t = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;

          if (this._points.length < 2 || null === i || i.isEmpty() || null === n) return;

          var u = this._source.points(),
              _ = this._source.properties().childs(),
              g = _.candleStyle.childs();

          this._segments = this._source.segments().map(function (e, t) {
            if (t >= _this55._points.length - 1) return null;

            var r = _this55._points[t].x,
                s = u[t].price,
                o = u[t + 1].price,
                a = i.priceToCoordinate(s, n),
                l = i.priceToCoordinate(o, n),
                d = u[t + 1].index - u[t].index,
                h = _this55._model.timeScale().barSpacing() * Math.sign(d),
                c = (l - a) / (e.bars().length - 1),
                p = g.upColor.value(),
                _ = g.downColor.value(),
                f = g.borderUpColor.value(),
                v = g.borderDownColor.value();

            return {
              bars: e.bars().map(function (e, t) {
                var s = a + t * c,
                    o = i.coordinateToPrice(s, n),
                    l = e.c >= e.o;
                return {
                  time: r + t * h,
                  exactTime: r + t * h,
                  open: i.priceToCoordinate(o + e.o, n),
                  high: i.priceToCoordinate(o + e.h, n),
                  low: i.priceToCoordinate(o + e.l, n),
                  close: i.priceToCoordinate(o + e.c, n),
                  color: l ? p : _,
                  borderColor: l ? f : v,
                  hollow: !1
                };
              })
            };
          }).filter(s.notNull);
          var f = new a.CompositeRenderer();

          for (var _e73 = 1; _e73 < this._points.length; _e73++) {
            var _t47 = {
              points: [this._points[_e73 - 1], this._points[_e73]],
              color: p,
              linewidth: 1,
              linestyle: r.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: d.LineEnd.Normal,
              rightend: d.LineEnd.Normal
            },
                _i53 = new h.TrendLineRenderer();

            _i53.setData(_t47), _i53.setHitTest(new o.HitTestResult(o.HitTarget.MovePoint)), f.append(_i53);
          }

          var v = g.drawWick.value(),
              x = g.drawBorder.value(),
              m = g.borderColor.value(),
              w = g.wickColor.value(),
              R = new a.CompositeRenderer();
          R.setGlobalAlpha(1 - _.transparency.value() / 100);

          var y = this._model.timeScale().barSpacing();

          for (var _e74 = 0; _e74 < this._segments.length; _e74++) {
            var _t48 = {
              bars: this._segments[_e74].bars,
              barSpacing: y,
              wickVisible: v,
              bodyVisible: !0,
              borderVisible: x,
              borderColor: m,
              wickColor: w,
              barWidth: (0, l.optimalBarWidth)(y),
              hittest: new o.HitTestResult(o.HitTarget.MovePoint)
            };
            R.append(new c.PaneRendererCandles(_t48));
          }

          f.append(R), this.addAnchors(f), this._renderer = f;
        }
      }]);

      return _;
    }(u.LineSourcePaneView);
  },
  45495: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      LineToolHeadAndShouldersPaneView: function LineToolHeadAndShouldersPaneView() {
        return g;
      }
    });
    var n = i(5531),
        r = i(44352),
        s = i(79849),
        o = i(99031),
        a = i(10695),
        l = i(80657),
        d = i(19266),
        h = i(73436),
        c = i(79797),
        u = i(79191),
        p = i(46501);
    var _ = {
      leftShoulder: r.t(null, void 0, i(68589)),
      rightShoulder: r.t(null, void 0, i(78934)),
      head: r.t(null, void 0, i(63706))
    };

    var g =
    /*#__PURE__*/
    function (_u$LineSourcePaneView5) {
      _inherits(g, _u$LineSourcePaneView5);

      function g() {
        var _this56;

        _classCallCheck(this, g);

        _this56 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this56._trendLineRenderer = new o.TrendLineRenderer(), _this56._triangleRendererPoints234 = new a.TriangleRenderer(), _this56._intersect1Renderer = new a.TriangleRenderer(), _this56._intersect2Renderer = new a.TriangleRenderer(), _this56._polyLineRenderer = new c.PolygonRenderer(), _this56._leftShoulderLabelRenderer = new l.TextRenderer(), _this56._headLabelRenderer = new l.TextRenderer(), _this56._rightShoulderLabelRenderer = new l.TextRenderer(), _this56._renderer = null;
        return _this56;
      }

      _createClass(g, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          var e, t;
          _get(_getPrototypeOf(g.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var _this$_points8 = _slicedToArray(this._points, 7),
              i = _this$_points8[0],
              r = _this$_points8[1],
              o = _this$_points8[2],
              a = _this$_points8[3],
              l = _this$_points8[4],
              c = _this$_points8[5],
              u = _this$_points8[6];

          if (this._points.length >= 5) {
            var _s20 = (0, n.intersectLineSegments)(o, l, i, r);

            if (null !== _s20) {
              var _t49 = l.subtract(o);

              e = o.add(_t49.scaled(_s20));
            }

            if (7 === this._points.length) {
              var _e75 = (0, n.intersectLineSegments)(o, l, c, u);

              if (null !== _e75) {
                var _i54 = l.subtract(o);

                t = o.add(_i54.scaled(_e75));
              }
            }
          }

          if (this._points.length < 2) return;

          var g = this._source.properties().childs(),
              f = new d.CompositeRenderer(),
              v = function v(e, t) {
            return {
              points: [e],
              text: t,
              color: g.textcolor.value(),
              horzAlign: "center",
              vertAlign: "middle",
              font: p.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: g.bold && g.bold.value(),
              italic: g.italic && g.italic.value(),
              fontsize: g.fontsize.value(),
              backgroundColor: g.color.value(),
              backgroundRoundRect: 4
            };
          },
              x = function x(e, t, i) {
            return {
              points: [e, t, i],
              color: "rgba(0, 0, 0, 0)",
              linewidth: 0,
              backcolor: g.backgroundColor.value(),
              fillBackground: g.fillBackground.value(),
              transparency: g.transparency.value()
            };
          },
              m = {
            points: this._points,
            color: g.color.value(),
            linewidth: g.linewidth.value(),
            linestyle: s.LINESTYLE_SOLID,
            backcolor: "rgba(0, 0, 0, 0)",
            fillBackground: !1,
            filled: !1
          };

          if (this._polyLineRenderer.setData(m), f.append(this._polyLineRenderer), this._points.length >= 5) {
            var _i55,
                _n40,
                _r32 = !1,
                _d14 = !1;

            e ? _i55 = e : (_i55 = o, _r32 = !0), t ? _n40 = t : (_n40 = l, _d14 = !0);
            var _c10 = {
              points: [_i55, _n40],
              color: g.color.value(),
              linewidth: g.linewidth.value(),
              linestyle: s.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal
            };
            _c10.extendleft = _r32, _c10.extendright = _d14, this._trendLineRenderer.setData(_c10), f.append(this._trendLineRenderer);

            var _u13 = x(o, a, l);

            this._triangleRendererPoints234.setData(_u13), f.append(this._triangleRendererPoints234);
          }

          if (e) {
            var _t50 = x(e, r, o);

            this._intersect1Renderer.setData(_t50), f.append(this._intersect1Renderer);
          }

          if (t) {
            var _e76 = x(l, c, t);

            this._intersect2Renderer.setData(_e76), f.append(this._intersect2Renderer);
          }

          if (this._points.length >= 2) {
            var _e77 = v(r, _.leftShoulder);

            r.y < i.y ? (_e77.vertAlign = "bottom", _e77.offsetY = 5) : (_e77.vertAlign = "top", _e77.offsetY = 5), this._leftShoulderLabelRenderer.setData(_e77), f.append(this._leftShoulderLabelRenderer);
          }

          if (this._points.length >= 4) {
            var _e78 = v(a, _.head);

            a.y < o.y ? (_e78.vertAlign = "bottom", _e78.offsetY = 5) : (_e78.vertAlign = "top", _e78.offsetY = 5), this._headLabelRenderer.setData(_e78), f.append(this._headLabelRenderer);
          }

          if (this._points.length >= 6) {
            var _e79 = v(c, _.rightShoulder);

            c.y < l.y ? (_e79.vertAlign = "bottom", _e79.offsetY = 5) : (_e79.vertAlign = "top", _e79.offsetY = 5), this._rightShoulderLabelRenderer.setData(_e79), f.append(this._rightShoulderLabelRenderer);
          }

          this.addAnchors(f), this._renderer = f;
        }
      }]);

      return g;
    }(u.LineSourcePaneView);
  },
  75427: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      HighlighterPaneView: function HighlighterPaneView() {
        return s;
      }
    });
    var n = i(79849),
        r = i(26049);

    var s =
    /*#__PURE__*/
    function (_r$BrushBasePaneView2) {
      _inherits(s, _r$BrushBasePaneView2);

      function s() {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, _getPrototypeOf(s).apply(this, arguments));
      }

      _createClass(s, [{
        key: "_createPolygonRendererData",
        value: function _createPolygonRendererData() {
          var e = this._source.properties().childs();

          return {
            points: this._points,
            color: e.linecolor.value(),
            linewidth: 20,
            backcolor: "rgba(0, 0, 0, 0)",
            fillBackground: !1,
            linestyle: n.LINESTYLE_SOLID,
            filled: !1,
            transparency: e.transparency.value()
          };
        }
      }]);

      return s;
    }(r.BrushBasePaneView);
  },
  74660: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      HorzLinePaneView: function HorzLinePaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(18807),
        s = i(66103),
        o = i(80657),
        a = i(74997),
        l = i(19266),
        d = i(46501),
        h = i(33295);
    var c = [s.PaneCursorType.VerticalResize];

    var u =
    /*#__PURE__*/
    function (_h$AlertableLineSourc) {
      _inherits(u, _h$AlertableLineSourc);

      function u(e, t) {
        var _this57;

        _classCallCheck(this, u);

        _this57 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this57._renderer = null, _this57._labelRenderer = new o.TextRenderer(), _this57._lineRenderer = new a.HorizontalLineRenderer(), _this57._lineRenderer.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint));
        return _this57;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this, e, t), this._renderer = null, 0 === this._points.length) return;

          var s = this._source.properties().childs(),
              a = new l.CompositeRenderer();

          var h,
              u = !0;

          if (s.showLabel.value() && 1 === this._points.length && s.text.value().length > 0) {
            var _r33 = s.vertLabelsAlign.value(),
                _l13 = s.horzLabelsAlign.value();

            var _c11 = 0,
                _p4 = 0;
            "left" === _l13 ? _p4 = 3 : "right" === _l13 ? (_p4 = this._model.timeScale().width(), _c11 = 3) : _p4 = this._model.timeScale().width() / 2;
            var _5 = {
              points: [new n.Point(_p4, this._points[0].y)],
              text: s.text.value(),
              color: s.textcolor.value(),
              vertAlign: _r33,
              horzAlign: _l13,
              font: d.CHART_FONT_FAMILY,
              offsetX: _c11,
              offsetY: 0,
              bold: s.bold.value(),
              italic: s.italic.value(),
              fontsize: s.fontsize.value(),
              forceTextAlign: !0
            };
            this._labelRenderer.setData(_5), a.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, o.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0), u = this._labelRenderer.isOutOfScreen(t, e);
          }

          var p = {
            y: this._points[0].y,
            color: s.linecolor.value(),
            linewidth: s.linewidth.value(),
            linestyle: s.linestyle.value(),
            excludeBoundaries: h
          };
          this._lineRenderer.setData(p), this._lineRenderer.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, {
            snappingPrice: this._source.points()[0].price
          }));

          var _ = p.linewidth / 2 + 1;

          if (u = u && (p.y < -_ || p.y > e + _), a.append(this._lineRenderer), !u) {
            if (1 === this._points.length) {
              var _e80 = new n.Point(t / 2, this._points[0].y);

              _e80.data = 0, _e80.square = !0, a.append(this.createLineAnchor({
                points: [_e80],
                pointsCursorType: c
              }, 0));
            }

            if (1 === this._points.length) {
              var _e81 = new n.Point(this._model.timeScale().width() / 2, this._points[0].y);

              this._addAlertRenderer(a, [_e81]);
            }

            this._renderer = a;
          }
        }
      }]);

      return u;
    }(h.AlertableLineSourcePaneView);
  },
  57964: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      HorzRayPaneView: function HorzRayPaneView() {
        return g;
      }
    });
    var n = i(86441),
        r = i(19266),
        s = i(80657),
        o = i(46501),
        a = i(18807),
        l = i(33295),
        d = i(68441),
        h = i(45197),
        c = i(74359),
        u = i(59590),
        p = i(79849);

    var _ =
    /*#__PURE__*/
    function (_u$BitmapCoordinatesP) {
      _inherits(_, _u$BitmapCoordinatesP);

      function _() {
        var _this58;

        _classCallCheck(this, _);

        _this58 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this58._data = null;
        return _this58;
      }

      _createClass(_, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || 0 === this._data.points.length) return null;
          if (e.x < this._data.points[0].x) return null;
          var t = (0, h.interactionTolerance)().line;
          return Math.abs(e.y - this._data.points[0].y) <= t ? new a.HitTestResult(this._data.hitTestResult, {
            snappingPrice: this._data.snappingPrice
          }) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || 0 === this._data.points.length) return;
          var t = e.context,
              i = e.horizontalPixelRatio,
              n = e.verticalPixelRatio,
              r = e.bitmapSize,
              s = r.width,
              o = this._data.points[0].y,
              a = Math.max(0, this._data.points[0].x),
              l = Math.max(s, this._data.points[0].x);
          t.lineCap = void 0 === this._data.linestyle || this._data.linestyle === p.LINESTYLE_SOLID ? "round" : "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, d.setLineStyle)(t, this._data.linestyle);
          var h = this._data.excludeBoundaries;
          void 0 !== h && (0, c.addExclusionAreaByScope)(e, h), (0, d.drawHorizontalLine)(t, Math.round(o * n), Math.round(a * i), Math.round(l * i));
        }
      }]);

      return _;
    }(u.BitmapCoordinatesPaneRenderer);

    var g =
    /*#__PURE__*/
    function (_l$AlertableLineSourc) {
      _inherits(g, _l$AlertableLineSourc);

      function g(e, t) {
        var _this59;

        _classCallCheck(this, g);

        _this59 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this, e, t)), _this59._horzRayRenderer = new _(), _this59._labelRenderer = new s.TextRenderer(), _this59._renderer = null, _this59._horzRayRenderer = new _(), _this59._labelRenderer = new s.TextRenderer(), _this59._renderer = null;
        return _this59;
      }

      _createClass(g, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          if (_get(_getPrototypeOf(g.prototype), "_updateImpl", this).call(this), this._renderer = null, 0 === this._points.length) return;

          var l = this._source.properties().childs(),
              d = new r.CompositeRenderer();

          var h,
              c = this._points[0].clone();

          if (l.showLabel.value() && 1 === this._points.length) {
            var _r34 = l.vertLabelsAlign.value(),
                _a18 = l.horzLabelsAlign.value(),
                _u14 = 0;

            var _p5 = 0;

            var _6 = l.text.value(),
                _g2 = l.bold.value(),
                f = l.italic.value(),
                v = o.CHART_FONT_FAMILY,
                x = l.fontsize.value();

            if ("right" === _a18) {
              var _e82 = this._labelRenderer.measure().width,
                  _t51 = this._model.timeScale().width();

              c.x + _e82 + 3 >= _t51 ? c = c.add((0, n.point)(_e82 + 3, 0)) : (c = (0, n.point)(_t51, c.y), _p5 = 3);
            } else "center" === _a18 && (c = (0, n.point)((c.x + this._model.timeScale().width()) / 2, c.y));

            var m = {
              points: [c],
              text: _6,
              color: l.textcolor.value(),
              vertAlign: _r34,
              horzAlign: _a18,
              font: v,
              offsetX: _p5,
              offsetY: _u14,
              bold: _g2,
              italic: f,
              fontsize: x,
              forceTextAlign: !0
            };
            this._labelRenderer.setData(m), d.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, s.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0);
          }

          var u = {
            points: this._points,
            color: l.linecolor.value(),
            linewidth: l.linewidth.value(),
            linestyle: l.linestyle.value(),
            hitTestResult: a.HitTarget.MovePoint,
            snappingPrice: this._source.points()[0].price,
            excludeBoundaries: h
          };
          this._horzRayRenderer.setData(u), d.append(this._horzRayRenderer), this.addAnchors(d), 1 === this._points.length && this._addAlertRenderer(d, [u.points[0]]), this._renderer = d;
        }
      }]);

      return g;
    }(l.AlertableLineSourcePaneView);
  },
  48273: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      IconPaneView: function IconPaneView() {
        return r;
      }
    });
    var n = i(50761);

    var r =
    /*#__PURE__*/
    function (_n$SvgIconPaneView2) {
      _inherits(r, _n$SvgIconPaneView2);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_iconColor",
        value: function _iconColor() {
          return this._source.properties().childs().color.value();
        }
      }]);

      return r;
    }(n.SvgIconPaneView);
  },
  79191: function _(e, t, i) {
    "use strict";

    i.d(t, {
      LineSourcePaneView: function LineSourcePaneView() {
        return p;
      },
      thirdPointCursorType: function thirdPointCursorType() {
        return u;
      }
    });
    var n = i(48891),
        r = i(50151),
        s = i(38325),
        o = i(18807),
        a = i(80101),
        l = i(79059),
        d = i(66103);
    var h = n.colorsPalette["color-tv-blue-600"];
    var c;

    function u(e, t) {
      var i = t.x - e.x,
          n = t.y - e.y,
          r = Math.abs(Math.atan2(i, n));
      return r > Math.PI / 4 && r < 3 * Math.PI / 4 ? d.PaneCursorType.VerticalResize : d.PaneCursorType.HorizontalResize;
    }

    !function (e) {
      e[e.RegularAnchorRadius = 6] = "RegularAnchorRadius", e[e.TouchAnchorRadius = 13] = "TouchAnchorRadius", e[e.RegularStrokeWidth = 1] = "RegularStrokeWidth", e[e.TouchStrokeWidth = 3] = "TouchStrokeWidth", e[e.RegularSelectedStrokeWidth = 3] = "RegularSelectedStrokeWidth", e[e.TouchSelectedStrokeWidth = 0] = "TouchSelectedStrokeWidth";
    }(c || (c = {}));

    var p =
    /*#__PURE__*/
    function () {
      function p(e, t) {
        _classCallCheck(this, p);

        this._invalidated = !0, this._points = [], this._middlePoint = null, this._selectionRenderers = [], this._lineAnchorRenderers = [], this._source = e, this._model = t;
      }

      _createClass(p, [{
        key: "priceToCoordinate",
        value: function priceToCoordinate(e) {
          var t = this._source.priceScale();

          if (null === t) return null;

          var i = this._source.ownerSource(),
              n = null !== i ? i.firstValue() : null;

          return null === n ? null : t.priceToCoordinate(e, n);
        }
      }, {
        key: "currentPoint",
        value: function currentPoint() {
          return this._model.crossHairSource().currentPoint();
        }
      }, {
        key: "anchorColor",
        value: function anchorColor() {
          return h;
        }
      }, {
        key: "isHoveredSource",
        value: function isHoveredSource() {
          return this._source === this._model.hoveredSource();
        }
      }, {
        key: "isSelectedSource",
        value: function isSelectedSource() {
          return this._model.selection().isSelected(this._source);
        }
      }, {
        key: "isBeingEdited",
        value: function isBeingEdited() {
          return this._model.lineBeingEdited() === this._source;
        }
      }, {
        key: "isEditMode",
        value: function isEditMode() {
          return !this._model.isSnapshot();
        }
      }, {
        key: "areAnchorsVisible",
        value: function areAnchorsVisible() {
          return (this.isHoveredSource() && !this.isLocked() || this.isSelectedSource()) && this.isEditMode();
        }
      }, {
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "isLocked",
        value: function isLocked() {
          return Boolean(this._source.isLocked && this._source.isLocked());
        }
      }, {
        key: "addAnchors",
        value: function addAnchors(e, t) {
          var _this60 = this;

          var i = this._points;
          this._model.lineBeingCreated() === this._source && (i = i.slice(0, -1));
          var n = i.map(function (e, t) {
            var i = _this60._source.points()[t],
                n = e;

            return n.snappingPrice = null == i ? void 0 : i.price, n.snappingIndex = null == i ? void 0 : i.index, n;
          });
          e.append(this.createLineAnchor(_objectSpread({}, null != t ? t : {}, {
            points: n
          }), 0));
        }
      }, {
        key: "createLineAnchor",
        value: function createLineAnchor(e, t) {
          var i;

          if (this.isLocked()) {
            var _i56 = this._getSelectionRenderer(t);

            return _i56.setData({
              bgColors: this._lineAnchorColors(e.points),
              points: e.points,
              visible: this.areAnchorsVisible(),
              hittestResult: o.HitTarget.Regular,
              barSpacing: this._model.timeScale().barSpacing()
            }), _i56;
          }

          var n = (0, s.lastMouseOrTouchEventInfo)().isTouch,
              r = this._getLineAnchorRenderer(t);

          return r.setData(_objectSpread({}, e, {
            color: this.anchorColor(),
            backgroundColors: this._lineAnchorColors(e.points),
            currentPoint: this.currentPoint(),
            linePointBeingEdited: this.isBeingEdited() ? this._model.linePointBeingEdited() : null,
            hittestResult: null !== (i = e.hittestResult) && void 0 !== i ? i : o.HitTarget.ChangePoint,
            radius: this._anchorRadius(),
            strokeWidth: n ? c.TouchStrokeWidth : c.RegularStrokeWidth,
            selected: this.isSelectedSource(),
            selectedStrokeWidth: n ? c.TouchSelectedStrokeWidth : c.RegularSelectedStrokeWidth,
            visible: this.areAnchorsVisible()
          })), r;
        }
      }, {
        key: "_anchorRadius",
        value: function _anchorRadius() {
          return (0, s.lastMouseOrTouchEventInfo)().isTouch ? c.TouchAnchorRadius : c.RegularAnchorRadius;
        }
      }, {
        key: "_lineAnchorColors",
        value: function _lineAnchorColors(e) {
          var _this61 = this;

          var t = (0, r.ensureNotNull)(this._model.paneForSource(this._source)).height();
          return e.map(function (e) {
            return _this61._model.backgroundColorAtYPercentFromTop(e.y / t);
          });
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          this._points = [];
          if (this._model.timeScale().isEmpty()) return;
          if (!this._validatePriceScale()) return;

          var i = this._source.points();

          for (var _e83 = 0; _e83 < i.length; _e83++) {
            var _t52 = i[_e83],
                _n41 = this._source.pointToScreenPoint(_t52);

            if (!_n41) return;
            var _r35 = _n41;
            _r35.data = _e83, this._points.push(_r35);
          }

          2 === this._points.length && (this._middlePoint = this._source.calcMiddlePoint(this._points[0], this._points[1])), this._invalidated = !1;
        }
      }, {
        key: "_validatePriceScale",
        value: function _validatePriceScale() {
          var e = this._source.priceScale();

          return null !== e && !e.isEmpty();
        }
      }, {
        key: "_getSource",
        value: function _getSource() {
          return this._source;
        }
      }, {
        key: "_getPoints",
        value: function _getPoints() {
          return this._points;
        }
      }, {
        key: "_getModel",
        value: function _getModel() {
          return this._model;
        }
      }, {
        key: "_height",
        value: function _height() {
          var e = this._source.priceScale();

          return null !== e ? e.height() : 0;
        }
      }, {
        key: "_width",
        value: function _width() {
          return this._model.timeScale().width();
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e, t) {
          var i = this._source.properties().childs();

          if ("middle" !== (null != t ? t : i.vertLabelsAlign.value())) return !1;
          var n = e.getLinesInfo().lines;
          if (n.length % 2 == 0) return !1;
          if ("" === n[Math.floor(n.length / 2)].trim()) return !1;
          return !0;
        }
      }, {
        key: "_getSelectionRenderer",
        value: function _getSelectionRenderer(e) {
          for (; this._selectionRenderers.length <= e;) {
            this._selectionRenderers.push(new a.SelectionRenderer());
          }

          return this._selectionRenderers[e];
        }
      }, {
        key: "_getLineAnchorRenderer",
        value: function _getLineAnchorRenderer(e) {
          for (; this._lineAnchorRenderers.length <= e;) {
            this._lineAnchorRenderers.push(new l.LineAnchorRenderer());
          }

          return this._lineAnchorRenderers[e];
        }
      }]);

      return p;
    }();
  },
  99058: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      LineToolBeingCreatedPaneView: function LineToolBeingCreatedPaneView() {
        return c;
      }
    });
    var n = i(48891),
        r = i(79191),
        s = i(79849),
        o = i(73436),
        a = i(19266),
        l = i(71254),
        d = i(99031);
    var h = n.colorsPalette["color-cold-gray-500"];

    var c =
    /*#__PURE__*/
    function (_r$LineSourcePaneView6) {
      _inherits(c, _r$LineSourcePaneView6);

      function c() {
        var _this62;

        _classCallCheck(this, c);

        _this62 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this62._lineRenderer1 = new l.VerticalLineRenderer(), _this62._lineRenderer2 = new l.VerticalLineRenderer(), _this62._medianRenderer = new d.TrendLineRenderer(), _this62._renderer = null;
        return _this62;
      }

      _createClass(c, [{
        key: "renderer",
        value: function renderer() {
          return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(c.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = this._getPoints();

          if (e.length < 1) return;
          this._renderer = new a.CompositeRenderer();

          var _e84 = _slicedToArray(e, 2),
              t = _e84[0],
              i = _e84[1];

          this._lineRenderer1.setData({
            x: t.x,
            color: h,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID
          }), this._renderer.append(this._lineRenderer1), e.length > 1 && (this._lineRenderer2.setData({
            x: i.x,
            color: h,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID
          }), this._medianRenderer.setData({
            points: [t, i],
            color: h,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: o.LineEnd.Normal,
            rightend: o.LineEnd.Normal
          }), this._renderer.append(this._lineRenderer2), this._renderer.append(this._medianRenderer));
        }
      }]);

      return c;
    }(r.LineSourcePaneView);
  },
  134: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      LineToolPaneViewFibWithLabels: function LineToolPaneViewFibWithLabels() {
        return d;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(80657),
        o = i(87663),
        a = i(93572),
        l = i(46501);

    var d =
    /*#__PURE__*/
    function (_r$LineSourcePaneView7) {
      _inherits(d, _r$LineSourcePaneView7);

      function d(e, t) {
        var _this63;

        _classCallCheck(this, d);

        _this63 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this, e, t)), _this63._labelsRenderers = {};

        for (var _t53 = 0; _t53 < e.levelsCount(); _t53++) {
          _this63._labelsRenderers[_t53] = new s.TextRenderer();
        }

        _this63._numericFormatter = new o.NumericFormatter(), _this63._percentageFormatter = new a.PercentageFormatter();
        return _this63;
      }

      _createClass(d, [{
        key: "_updateLabelForLevel",
        value: function _updateLabelForLevel(_ref) {
          var e = _ref.i,
              t = _ref.levelIndex,
              i = _ref.leftPoint,
              r = _ref.rightPoint,
              s = _ref.price,
              o = _ref.color,
              a = _ref.horzAlign,
              d = _ref.vertAlign,
              _ref$extendLeft = _ref.extendLeft,
              h = _ref$extendLeft === void 0 ? !1 : _ref$extendLeft,
              _ref$extendRight = _ref.extendRight,
              c = _ref$extendRight === void 0 ? !1 : _ref$extendRight;

          var u, p, _, g, f;

          var v = this._labelsRenderers[e];
          if (void 0 === v) return null;

          var x = this._source.priceScale();

          if (!x) return null;

          var m = this._source.properties(),
              w = Boolean(null === (u = m.showCoeffs) || void 0 === u ? void 0 : u.value()),
              R = Boolean(null === (p = m.showPrices) || void 0 === p ? void 0 : p.value());

          if (!w && !R) return null;
          var y = null === (_ = this._source.ownerSource()) || void 0 === _ ? void 0 : _.firstValue();
          if (null == y) return null;
          var T = !(i.x > this._model.timeScale().width() && !h || r.x < 0 && !c);
          var b,
              P,
              L = a;

          switch (L) {
            case "left":
              P = i.y, h ? b = T ? 0 : r.x : (b = i.x, L = "right");
              break;

            case "right":
              P = r.y, c ? b = T ? this._model.timeScale().width() : i.x : (b = r.x, L = "left");
              break;

            default:
              b = (i.x + r.x) / 2, P = (i.y + r.y) / 2;
          }

          var S = m["level" + t].coeff.value();
          var C = "";

          if (w) {
            C += null !== (f = null === (g = m.coeffsAsPercents) || void 0 === g ? void 0 : g.value()) && void 0 !== f && f ? this._percentageFormatter.format(100 * S, !1, 2) : this._numericFormatter.format(S);
          }

          return R && (C += "(" + x.formatPrice(s, y) + ")"), v.setData({
            points: [new n.Point(b, P)],
            text: C,
            color: o,
            vertAlign: d,
            horzAlign: L,
            offsetX: 4,
            offsetY: 0,
            font: l.CHART_FONT_FAMILY,
            fontSize: m.labelFontSize ? m.labelFontSize.value() : 12
          }), v;
        }
      }]);

      return d;
    }(r.LineSourcePaneView);
  },
  34658: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      NotePaneView: function NotePaneView() {
        return m;
      }
    });

    var n = i(50151),
        r = i(79191),
        s = i(19266),
        o = i(80101),
        a = i(18807),
        l = i(46501),
        d = i(80657),
        h = i(87095),
        c = i(38223),
        u = i(74359),
        p = i(57352),
        _ = i(27714),
        g = i(86441),
        f = i(34026);

    var v =
    /*#__PURE__*/
    function () {
      function v(e) {
        _classCallCheck(this, v);

        this._data = null, this._sourceCanvas = null, this._translate = new g.Point(0, 0), this._renderParams = e;
      }

      _createClass(v, [{
        key: "destroy",
        value: function destroy() {
          var e;
          null === (e = this._sourceCanvas) || void 0 === e || e.remove();
        }
      }, {
        key: "renderParams",
        value: function renderParams() {
          return this._renderParams;
        }
      }, {
        key: "update",
        value: function update(e) {
          var t, i;
          t = this._data, i = e, (null === t || t.markerColor !== i.markerColor || t.borderColor !== i.borderColor || t.width !== i.width || t.height !== i.height) && this._createSource(e.width, e.height, e.markerColor), this._data = e;
        }
      }, {
        key: "drawOn",
        value: function drawOn(e) {
          var t = (0, n.ensureNotNull)(this._data),
              i = new g.Point(Math.round(t.point.x), Math.round(t.point.y)).add(this._translate);
          e.drawImage((0, n.ensureNotNull)(this._sourceCanvas), Math.round(i.x * this._renderParams.pixelRatio), Math.round(i.y * this._renderParams.pixelRatio), Math.round(t.width * this._renderParams.pixelRatio), Math.round(t.height * this._renderParams.pixelRatio));
        }
      }, {
        key: "hasPoint",
        value: function hasPoint(e) {
          var t = (0, n.ensureNotNull)(this._data),
              i = t.point.add(this._translate),
              r = new g.Point(t.point.x - this._translate.x, t.point.y);
          return (0, f.pointInBox)(e, (0, g.box)(i, r));
        }
      }, {
        key: "_createSource",
        value: function _createSource(e, t, i) {
          this._sourceCanvas = (0, u.createDisconnectedCanvas)(document, (0, _.size)({
            width: e,
            height: t
          }), this._renderParams.pixelRatio), this._translate = new g.Point(-e / 2, .5 - t), this._translate.x % 1 == 0 && (this._translate = new g.Point(this._translate.x + .5, this._translate.y));
          var r = (0, n.ensureNotNull)(this._sourceCanvas.getContext("2d")),
              s = this._renderParams.pixelRatio;
          (0, u.drawScaled)(r, s, s, function () {
            var n = .6 * e;
            r.fillStyle = i, r.beginPath(), r.moveTo(e / 2, t), r.quadraticCurveTo(e, e / 1.15, e, e / 2), r.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0), r.quadraticCurveTo(0, e / 1.15, e / 2, t), r.fill(), r.globalCompositeOperation = "destination-out", r.beginPath(), r.moveTo((e - n) / 2, e / 2), r.arc(e / 2, e / 2, n / 2, 0, 2 * Math.PI), r.fill();
          });
        }
      }]);

      return v;
    }();

    var x =
    /*#__PURE__*/
    function () {
      function x() {
        _classCallCheck(this, x);

        this._source = null, this._data = null;
      }

      _createClass(x, [{
        key: "setData",
        value: function setData(e) {
          this._data = e, this._source && this._source.update(e);
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          var i;
          if (null === this._data) return;
          null !== this._source && (0, p.areEqualPaneRenderParams)(this._source.renderParams(), t) || (null === (i = this._source) || void 0 === i || i.destroy(), this._source = new v(t), this._source.update(this._data));
          this._source.drawOn(e), this._data.tooltipVisible && this._drawTooltipOn(e, t);
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          return null !== this._data && null !== this._source && this._source.hasPoint(e) ? new a.HitTestResult(a.HitTarget.MovePoint) : null;
        }
      }, {
        key: "_drawTooltipOn",
        value: function _drawTooltipOn(e, t) {
          e.save(), e.translate(.5, .5);
          var i = (0, n.ensureNotNull)(this._data),
              r = String(i.text).replace(/^\s+|\s+$/g, "");
          e.font = (i.bold ? "bold " : "") + (i.italic ? "italic " : "") + i.fontSize + "px " + i.font;
          var s = i.tooltipWidth - 2 * i.tooltipPadding,
              o = (0, d.wordWrap)(r, e.font, s),
              a = i.point,
              l = i.tooltipLineSpacing;

          var p = i.tooltipWidth,
              _ = o.length * i.fontSize + 2 * i.tooltipPadding;

          o.length > 1 && (_ += (o.length - 1) * l);
          var g = Math.round(a.x - p / 2),
              f = Math.round(a.y - i.height - _ - 8);
          var v = a.x < 20 || a.x + 20 > i.vpWidth;
          var x = v ? null : "top",
              m = v ? 0 : Math.round(a.x);
          f < 10 ? f = a.y + 13 : x = "bottom", g < 10 ? g += Math.abs(g - 10) : g + p + 10 > i.vpWidth && (g -= g + p + 10 - i.vpWidth), e.fillStyle = (0, h.generateColor)(i.backgroundColor, i.backgroundTransparency), e.strokeStyle = i.borderColor, e.lineWidth = 1, e.beginPath();
          var w = Math.round(g * t.pixelRatio),
              R = Math.round(f * t.pixelRatio);
          m = Math.round(m * t.pixelRatio), _ = Math.round(_ * t.pixelRatio), p = Math.round(p * t.pixelRatio);
          var y = Math.round(7 * t.pixelRatio);
          e.moveTo(w, R), v || "top" !== x || (e.lineTo(m - y, R), e.lineTo(m, R - y), e.lineTo(m + y, R)), e.lineTo(w + p, R), e.lineTo(w + p, R + _), v || "bottom" !== x || (e.lineTo(m + y, R + _), e.lineTo(m, R + _ + y), e.lineTo(m - y, R + _)), e.lineTo(w, R + _), e.closePath(), e.fill(), e.stroke(), e.textBaseline = "middle", e.fillStyle = i.textColor, e.textAlign = (0, c.isRtl)() ? "right" : "left";
          var T = (0, u.calcTextHorizontalShift)(e, s),
              b = g + i.tooltipPadding + T;
          var P = f + i.tooltipPadding + i.fontSize / 2;
          (0, u.drawScaled)(e, t.pixelRatio, t.pixelRatio, function () {
            for (var _t54 = 0; _t54 < o.length; _t54++) {
              e.fillText(o[_t54].replace(/^\s+/, ""), b, P), P += i.fontSize + l;
            }
          }), e.restore();
        }
      }]);

      return x;
    }();

    var m =
    /*#__PURE__*/
    function (_r$LineSourcePaneView8) {
      _inherits(m, _r$LineSourcePaneView8);

      function m(e, t) {
        var _this64;

        _classCallCheck(this, m);

        _this64 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this, e, t)), _this64._renderer = null, _this64._noteRenderer = new x();
        return _this64;
      }

      _createClass(m, [{
        key: "isLabelVisible",
        value: function isLabelVisible() {
          return this.isHoveredSource() || this.isSelectedSource();
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(m.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = this._getSource(),
              t = this._source.isFixed() ? [(0, n.ensureDefined)(e.fixedPoint())] : this._points;

          if (t.length < 1) return;

          var i = new s.CompositeRenderer(),
              r = this.isLabelVisible(),
              d = this._source.properties().childs(),
              h = {
            text: d.text.value(),
            bold: d.bold.value(),
            italic: d.italic.value(),
            font: l.CHART_FONT_FAMILY,
            fontSize: d.fontSize.value(),
            backgroundColor: d.backgroundColor.value(),
            backgroundTransparency: d.backgroundTransparency.value(),
            borderColor: d.borderColor.value(),
            textColor: d.textColor.value(),
            markerColor: d.markerColor.value(),
            point: t[0],
            width: 24,
            height: 32,
            tooltipVisible: r,
            vpWidth: this._model.timeScale().width(),
            tooltipWidth: e.getTooltipWidth(),
            tooltipPadding: e.getTooltipPadding(),
            tooltipLineSpacing: e.getTooltipLineSpacing()
          };

          this._noteRenderer.setData(h), i.append(this._noteRenderer), i.append(new o.SelectionRenderer({
            points: t,
            bgColors: this._lineAnchorColors(t),
            visible: this.areAnchorsVisible(),
            barSpacing: this._model.timeScale().barSpacing(),
            hittestResult: a.HitTarget.MovePoint
          })), this._renderer = i;
        }
      }]);

      return m;
    }(r.LineSourcePaneView);
  },
  14002: function _(e, t, i) {
    "use strict";

    function n(e, t, i) {
      var n = t - i;

      if ("percentage" === e.getLineLengthUnit()) {
        var _r36 = Math.max(e.getLineLength() / 100 * t, 1),
            s = Math.round(t - Math.min(n, _r36));

        return {
          right: s,
          left: s - i
        };
      }

      var r = e.getLineLength();

      if (r < 0) {
        var _e85 = Math.round(Math.min(n, -1 * r));

        return {
          left: _e85,
          right: _e85 + i
        };
      }

      {
        var _e86 = Math.round(t - Math.min(n, r));

        return {
          right: _e86,
          left: _e86 - i
        };
      }
    }

    i.d(t, {
      orderLineLocation: function orderLineLocation() {
        return n;
      }
    });
  },
  61144: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      OrderPaneView: function OrderPaneView() {
        return x;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(19266),
        o = i(44352),
        a = i(82161),
        l = i(68441),
        d = i(15187),
        h = i(18807),
        c = i(53180),
        u = i(47043),
        p = i(14002);

    var _ = o.t(null, void 0, i(33241)),
        g = o.t(null, void 0, i(16075));

    var f =
    /*#__PURE__*/
    function (_d$MediaCoordinatesPa2) {
      _inherits(f, _d$MediaCoordinatesPa2);

      function f(e) {
        var _this65;

        _classCallCheck(this, f);

        _this65 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this)), _this65._data = null, _this65._cache = {}, _this65._data = null, _this65._adapter = e;
        return _this65;
      }

      _createClass(f, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || 0 === this._data.points.length) return null;
          var i = this._cache;
          if (e.y < i.top || e.y > i.bottom) return null;
          if (this._adapter.getBlocked() && e.x >= i.left && e.x < i.right) return new h.HitTestResult(h.HitTarget.Custom, {});

          if (this._adapter.getEditable() && e.x >= i.left && e.x < i.bodyRight) {
            var _e87 = this._adapter.hasMoveCallback() ? h.HitTarget.MovePoint : h.HitTarget.Regular;

            return 0 === this._adapter.getTooltip().length ? new h.HitTestResult(_e87) : new h.HitTestResult(_e87, {
              tooltip: {
                text: this._adapter.getTooltip(),
                forceHideOnMove: this._adapter.hasMoveCallback(),
                rect: {
                  x: i.left,
                  y: i.top,
                  w: i.bodyRight - i.left,
                  h: i.bottom - i.top
                }
              }
            });
          }

          return this._adapter.getEditable() && e.x >= i.bodyRight && e.x < i.quantityRight ? this._adapter.hasModifyCallback() ? new h.HitTestResult(h.HitTarget.Custom, {
            clickHandler: this._adapter.callOnModify.bind(this._adapter),
            tapHandler: this._adapter.callOnModify.bind(this._adapter),
            tooltip: {
              text: this._adapter.getModifyTooltip() || (0, c.appendEllipsis)(_),
              rect: {
                x: i.bodyRight,
                y: i.top,
                w: i.quantityRight - i.bodyRight,
                h: i.bottom - i.top
              }
            }
          }) : new h.HitTestResult(h.HitTarget.Regular) : this._adapter.getCancellable() && e.x >= i.quantityRight && e.x < i.right ? new h.HitTestResult(h.HitTarget.Custom, {
            clickHandler: this._adapter.callOnCancel.bind(this._adapter),
            tapHandler: this._adapter.callOnCancel.bind(this._adapter),
            tooltip: {
              text: this._adapter.getCancelTooltip() || g,
              rect: {
                x: i.quantityRight,
                y: i.top,
                w: i.right - i.quantityRight,
                h: i.bottom - i.top
              }
            }
          }) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || !this._data.points || this._data.points.length < 1) return;

          var t = e.context,
              i = e.mediaSize.width,
              n = this._bodyWidth(t),
              r = this._quantityWidth(t),
              s = n + r + this._cancelButtonWidth(),
              _ref2 = (0, p.orderLineLocation)(this._adapter, i, s),
              o = _ref2.left,
              a = _ref2.right,
              l = Math.round(this._data.points[0].y),
              d = Math.round(l - (this._height() + 1) / 2);

          this._cache.bodyRight = o + n, this._cache.quantityRight = o + n + r, this._cache.top = d, this._cache.bottom = d + this._height(), this._cache.left = o, this._cache.right = a, this._drawLines(t, o, a, l, i);
          var h = !1;
          0 !== n && (this._drawBody(t, o, d), this._adapter.hasMoveCallback() && this._drawMovePoints(t, o, d), this._drawBodyText(t, o, d), h = !0), 0 !== r && (this._drawQuantity(t, o + n, d, h), this._drawQuantityText(t, o + n, d), h = !0), 0 !== this._cancelButtonWidth() && this._drawCancelButton(t, o + n + r, d, h);
        }
      }, {
        key: "_height",
        value: function _height() {
          return Math.max(20, 1 + Math.max(u.fontHeight(this._adapter.getBodyFont()), u.fontHeight(this._adapter.getQuantityFont())));
        }
      }, {
        key: "_bodyWidth",
        value: function _bodyWidth(e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), e.font = this._adapter.getBodyFont();
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(20 + t);
        }
      }, {
        key: "_getQuantity",
        value: function _getQuantity() {
          return (0, a.splitThousands)(this._adapter.getQuantity(), " ");
        }
      }, {
        key: "_quantityWidth",
        value: function _quantityWidth(e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), e.font = this._adapter.getQuantityFont();
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }
      }, {
        key: "_cancelButtonWidth",
        value: function _cancelButtonWidth() {
          return this._adapter.isOnCancelCallbackPresent() ? this._height() : 0;
        }
      }, {
        key: "_drawLines",
        value: function _drawLines(e, t, i, n, r) {
          e.save(), e.strokeStyle = this._adapter.getLineColor(), (0, l.setLineStyle)(e, this._adapter.getLineStyle()), e.lineWidth = this._adapter.getLineWidth(), (0, l.drawLine)(e, i, n, r, n), this._adapter.getExtendLeft() && (0, l.drawLine)(e, 0, n, t, n), e.restore();
        }
      }, {
        key: "_drawMovePoints",
        value: function _drawMovePoints(e, t, i) {
          e.save(), e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBorderColor();
          var n = t + 4,
              r = n + 2,
              s = Math.floor((this._height() - 10) / 2) + 1;

          for (var _t55 = 0; _t55 < s; ++_t55) {
            var _s21 = i + 5 + 2 * _t55;

            (0, l.drawLine)(e, n, _s21, r, _s21);
          }

          e.restore();
        }
      }, {
        key: "_drawBody",
        value: function _drawBody(e, t, i) {
          e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBackgroundColor();

          var n = this._bodyWidth(e),
              r = this._height();

          e.fillRect(t + .5, i + .5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
      }, {
        key: "_drawBodyText",
        value: function _drawBodyText(e, t, i) {
          e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getBodyFont(), e.fillStyle = this._adapter.getBodyTextColor();
          var n = t + this._bodyWidth(e) / 2,
              r = i + this._height() / 2;
          e.fillText(this._adapter.getText(), 5 + n - 2, r);
        }
      }, {
        key: "_drawQuantity",
        value: function _drawQuantity(e, t, i, n) {
          e.save(), e.strokeStyle = this._adapter.getQuantityBorderColor(), e.fillStyle = this._adapter.getQuantityBackgroundColor();

          var r = this._quantityWidth(e),
              s = this._height();

          e.fillRect(t + .5, i + .5, r - 1, s - 1), n && e.clip && (e.beginPath(), e.rect(t + .5, i - .5, r + 1, s + 1), e.clip()), e.strokeRect(t, i, r, s), e.restore();
        }
      }, {
        key: "_drawQuantityText",
        value: function _drawQuantityText(e, t, i) {
          e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getQuantityFont(), e.fillStyle = this._adapter.getQuantityTextColor();
          var n = t + this._quantityWidth(e) / 2,
              r = i + this._height() / 2;
          e.fillText(this._getQuantity(), n, r), e.restore();
        }
      }, {
        key: "_drawCancelButton",
        value: function _drawCancelButton(e, t, i, r) {
          e.strokeStyle = this._adapter.getCancelButtonBorderColor(), e.fillStyle = this._adapter.getCancelButtonBackgroundColor();

          var s = this._cancelButtonWidth(),
              o = this._height();

          e.fillRect(t + .5, i + .5, s - 1, o - 1), this._adapter.getBlocked() && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, s - 1, o - 1)), e.save(), r && e.clip && (e.beginPath(), e.rect(t + .5, i - .5, s + 1, o + 1), e.clip()), e.strokeRect(t, i, s, o), e.restore();
          var a = t + s,
              d = i + o;
          e.strokeStyle = this._adapter.getCancelButtonIconColor();
          var h = (this._cancelButtonWidth() - 8) / 2,
              c = (this._height() - 8) / 2;
          (0, l.drawPoly)(e, [new n.Point(t + h, i + c), new n.Point(a - h, d - c)], !0), (0, l.drawPoly)(e, [new n.Point(a - h, i + c), new n.Point(t + h, d - c)], !0);
        }
      }]);

      return f;
    }(d.MediaCoordinatesPaneRenderer);

    var v = i(80101);

    var x =
    /*#__PURE__*/
    function (_r$LineSourcePaneView9) {
      _inherits(x, _r$LineSourcePaneView9);

      function x(e, t) {
        var _this66;

        _classCallCheck(this, x);

        _this66 = _possibleConstructorReturn(this, _getPrototypeOf(x).call(this, e, t)), _this66._renderer = new s.CompositeRenderer(), _this66._selectionRenderer = new v.SelectionRenderer(), _this66._selectionData = null, _this66._adapter = e.adapter(), _this66._orderRenderer = new f(e.adapter()), _this66._renderer.append(_this66._orderRenderer), _this66._renderer.append(_this66._selectionRenderer);
        return _this66;
      }

      _createClass(x, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e) {
          if (_get(_getPrototypeOf(x.prototype), "_updateImpl", this).call(this), this._selectionData = null, this.isSelectedSource() && this._points.length > 0) {
            var _t56 = this._points[0].y,
                _i57 = e - 3.5 - 1,
                _r37 = this._adapter.hasMoveCallback() ? h.HitTarget.MovePoint : h.HitTarget.Regular,
                _s22 = [new n.Point(_i57, _t56)];

            this._selectionData = {
              barSpacing: this._model.timeScale().barSpacing(),
              points: _s22,
              bgColors: this._lineAnchorColors(_s22),
              hittestResult: _r37,
              visible: !0
            };
          }

          this._orderRenderer.setData({
            points: this._points
          }), this._selectionRenderer.setData(this._selectionData);
        }
      }]);

      return x;
    }(r.LineSourcePaneView);
  },
  26013: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ParallelChannelPaneView: function ParallelChannelPaneView() {
        return d;
      }
    });
    var n = i(86441),
        r = i(66103),
        s = i(19266),
        o = i(28621),
        a = i(33295);
    var l = [r.PaneCursorType.Default, r.PaneCursorType.Default, r.PaneCursorType.Default, r.PaneCursorType.Default, r.PaneCursorType.VerticalResize, r.PaneCursorType.VerticalResize];

    var d =
    /*#__PURE__*/
    function (_a$AlertableLineSourc) {
      _inherits(d, _a$AlertableLineSourc);

      function d() {
        var _this67;

        _classCallCheck(this, d);

        _this67 = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this67._channelRenderer = new o.ParallelChannelRenderer(), _this67._renderer = null;
        return _this67;
      }

      _createClass(d, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(d.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var e = this._source.priceScale();

          if (!e || e.isEmpty()) return;
          if (0 === this._source.points().length) return;
          var t = null,
              i = null;

          if (3 === this._points.length) {
            var _e88 = this._points[0],
                _r38 = this._points[1],
                _s23 = this._points[2].y - this._points[0].y;

            t = _e88.add((0, n.point)(0, _s23)), i = _r38.add((0, n.point)(0, _s23));
          }

          if (this._points.length <= 1) return;

          var r = this._source.properties(),
              o = {
            points: this._points.length > 2 && null !== t && null !== i ? [this._points[0], this._points[1], t, i] : [this._points[0], this._points[1]],
            color: r.childs().linecolor.value(),
            linewidth: r.childs().linewidth.value(),
            linestyle: r.childs().linestyle.value(),
            extendleft: r.childs().extendLeft.value(),
            extendright: r.childs().extendRight.value(),
            fillBackground: r.childs().fillBackground.value(),
            backcolor: r.childs().backgroundColor.value(),
            transparency: r.childs().transparency.value(),
            showMidline: r.childs().showMidline.value(),
            midlinewidth: r.childs().midlinewidth.value(),
            midlinestyle: r.childs().midlinestyle.value(),
            midcolor: r.childs().midlinecolor.value(),
            hittestOnBackground: !0
          };

          this._channelRenderer.setData(o);

          var a = new s.CompositeRenderer();
          a.append(this._channelRenderer);
          var d = [];

          if (this._points[0] && d.push(this._points[0]), this._points[1] && d.push(this._points[1]), t && i) {
            var _e89 = t;
            _e89.data = 2, d.push(_e89);
            var _n42 = i;
            _n42.data = 3, d.push(_n42);

            var _r39 = t.add(i).scaled(.5);

            _r39.data = 4, _r39.square = !0, d.push(_r39);

            var _s24 = d[0].add(d[1]).scaled(.5);

            _s24.data = 5, _s24.square = !0, d.push(_s24);
          }

          var h = 3 === this._points.length && !t;

          if (this._model.lineBeingCreated() !== this._source || h || (d.pop(), d.pop()), a.append(this.createLineAnchor({
            points: d,
            pointsCursorType: l
          }, 0)), this._points.length >= 2) {
            var _e90 = this._points;

            this._addAlertRenderer(a, [_e90[0], _e90[1]]);
          }

          this._renderer = a;
        }
      }]);

      return d;
    }(a.AlertableLineSourcePaneView);
  },
  62801: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      PathPaneView: function PathPaneView() {
        return o;
      }
    });
    var n = i(79797),
        r = i(19266),
        s = i(79191);

    var o =
    /*#__PURE__*/
    function (_s$LineSourcePaneView2) {
      _inherits(o, _s$LineSourcePaneView2);

      function o(e, t) {
        var _this68;

        _classCallCheck(this, o);

        _this68 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e, t)), _this68._polygonRenderer = new n.PolygonRenderer(), _this68._renderer = new r.CompositeRenderer();
        return _this68;
      }

      _createClass(o, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(o.prototype), "_updateImpl", this).call(this), this._renderer.clear();

          var e = this._source.properties().childs(),
              t = {
            points: this._points,
            color: e.lineColor.value(),
            linewidth: e.lineWidth.value(),
            linestyle: e.lineStyle.value(),
            leftend: e.leftEnd.value(),
            rightend: e.rightEnd.value(),
            filled: !1,
            backcolor: "",
            fillBackground: !1,
            transparency: 0
          };

          this._polygonRenderer.setData(t), this._renderer.append(this._polygonRenderer), this.addAnchors(this._renderer);
        }
      }]);

      return o;
    }(s.LineSourcePaneView);
  },
  87202: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      PitchfanLinePaneView: function PitchfanLinePaneView() {
        return d;
      }
    });
    var n = i(18807),
        r = i(14146),
        s = i(19266),
        o = i(73436),
        a = i(99031),
        l = i(79191);

    var d =
    /*#__PURE__*/
    function (_l$LineSourcePaneView3) {
      _inherits(d, _l$LineSourcePaneView3);

      function d() {
        var _this69;

        _classCallCheck(this, d);

        _this69 = _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments)), _this69._medianRenderer = new a.TrendLineRenderer(), _this69._sideRenderer = new a.TrendLineRenderer(), _this69._renderer = null, _this69._medianPoint = null;
        return _this69;
      }

      _createClass(d, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(d.prototype), "_updateImpl", this).call(this), this._renderer = null, 0 === this._points.length) return;
          if (3 === this._points.length ? (this._medianPoint = this._points[1].add(this._points[2]).scaled(.5), this._medianPoint.data = 3) : 2 === this._points.length ? (this._medianPoint = this._points[1].clone(), this._medianPoint.data = 3) : (this._medianPoint = this._points[0].clone(), this._medianPoint.data = 3), this._points.length < 2) return;
          if (!this._medianPoint) return;

          var e = new s.CompositeRenderer(),
              t = this._source.properties().childs(),
              i = t.median.childs(),
              l = {
            points: [this._points[0], this._medianPoint],
            color: i.color.value(),
            linewidth: i.linewidth.value(),
            linestyle: i.linestyle.value(),
            extendleft: !1,
            extendright: !0,
            leftend: o.LineEnd.Normal,
            rightend: o.LineEnd.Normal
          };

          if (this._medianRenderer.setData(l), e.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(e), void (this._renderer = e);
          var d = {
            points: [this._points[1], this._points[2]],
            color: i.color.value(),
            linewidth: i.linewidth.value(),
            linestyle: i.linestyle.value(),
            extendleft: !1,
            extendright: !1,
            leftend: o.LineEnd.Normal,
            rightend: o.LineEnd.Normal
          };
          this._sideRenderer.setData(d), e.append(this._sideRenderer);
          var h = 0;

          var c = this._points[2].subtract(this._points[1]).scaled(.5),
              u = t.fillBackground.value(),
              p = t.transparency.value();

          for (var _t57 = 0; _t57 <= 8; _t57++) {
            var _i58 = "level" + _t57,
                _s25 = this._source.properties().child(_i58);

            if (_s25.childs().visible.value()) {
              var _i59 = this._medianPoint.addScaled(c, _s25.childs().coeff.value()),
                  _l14 = this._medianPoint.addScaled(c, -_s25.childs().coeff.value());

              if (u) {
                {
                  var _t58 = {
                    p1: this._points[0],
                    p2: _i59,
                    p3: this._points[0],
                    p4: this._medianPoint.addScaled(c, h),
                    color: _s25.childs().color.value(),
                    transparency: p,
                    hittestOnBackground: !0,
                    extendLeft: !1
                  },
                      _n43 = new r.ChannelRenderer();

                  _n43.setData(_t58), e.append(_n43);
                }
                {
                  var _t59 = {
                    p1: this._points[0],
                    p2: _l14,
                    p3: this._points[0],
                    p4: this._medianPoint.addScaled(c, -h),
                    color: _s25.childs().color.value(),
                    transparency: p,
                    hittestOnBackground: !0,
                    extendLeft: !1
                  },
                      _i60 = new r.ChannelRenderer();

                  _i60.setData(_t59), e.append(_i60);
                }
              }

              h = _s25.childs().coeff.value();
              {
                var _r40 = {
                  points: [this._points[0], _i59],
                  color: _s25.childs().color.value(),
                  linewidth: _s25.childs().linewidth.value(),
                  linestyle: _s25.childs().linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: o.LineEnd.Normal,
                  rightend: o.LineEnd.Normal
                },
                    _l15 = new a.TrendLineRenderer();

                _l15.setData(_r40), _l15.setHitTest(new n.HitTestResult(n.HitTarget.MovePoint, void 0, _t57)), e.append(_l15);
              }
              {
                var _i61 = {
                  points: [this._points[0], _l14],
                  color: _s25.childs().color.value(),
                  linewidth: _s25.childs().linewidth.value(),
                  linestyle: _s25.childs().linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: o.LineEnd.Normal,
                  rightend: o.LineEnd.Normal
                },
                    _r41 = new a.TrendLineRenderer();

                _r41.setData(_i61), _r41.setHitTest(new n.HitTestResult(n.HitTarget.MovePoint, void 0, _t57)), e.append(_r41);
              }
            }
          }

          this.addAnchors(e), this._renderer = e;
        }
      }]);

      return d;
    }(l.LineSourcePaneView);
  },
  95337: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      InsidePitchforkLinePaneView: function InsidePitchforkLinePaneView() {
        return p;
      },
      PitchforkLinePaneView: function PitchforkLinePaneView() {
        return h;
      },
      SchiffPitchfork2LinePaneView: function SchiffPitchfork2LinePaneView() {
        return u;
      },
      SchiffPitchforkLinePaneView: function SchiffPitchforkLinePaneView() {
        return c;
      }
    });
    var n = i(86441),
        r = i(18807),
        s = i(14146),
        o = i(19266),
        a = i(73436),
        l = i(99031),
        d = i(79191);

    var h =
    /*#__PURE__*/
    function (_d$LineSourcePaneView) {
      _inherits(h, _d$LineSourcePaneView);

      function h() {
        var _this70;

        _classCallCheck(this, h);

        _this70 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this70._medianRenderer = new l.TrendLineRenderer(), _this70._sideRenderer = new l.TrendLineRenderer(), _this70._renderer = null, _this70._medianPoint = null;
        return _this70;
      }

      _createClass(h, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(h.prototype), "_updateImpl", this).call(this), this._renderer = null, 0 !== this._points.length && (3 === this._points.length ? (this._medianPoint = this._points[1].add(this._points[2]).scaled(.5), this._medianPoint.data = 3) : 2 === this._points.length ? (this._medianPoint = this._points[1].clone(), this._medianPoint.data = 3) : (this._medianPoint = this._points[0].clone(), this._medianPoint.data = 3), this._updateRenderer());
        }
      }, {
        key: "_updateRenderer",
        value: function _updateRenderer() {
          if (this._points.length < 2) return;
          if (!this._medianPoint) return;

          var e = this._source.properties(),
              t = e.childs().median.childs(),
              i = new o.CompositeRenderer(),
              n = {
            points: [this._points[0], this._medianPoint],
            color: t.color.value(),
            linewidth: t.linewidth.value(),
            linestyle: t.linestyle.value(),
            extendleft: e.childs().extendLines.value(),
            extendright: !0,
            leftend: a.LineEnd.Normal,
            rightend: a.LineEnd.Normal
          };

          if (this._medianRenderer.setData(n), i.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(i), void (this._renderer = i);
          var d = {
            points: [this._points[1], this._points[2]],
            color: t.color.value(),
            linewidth: t.linewidth.value(),
            linestyle: t.linestyle.value(),
            extendleft: !1,
            extendright: !1,
            leftend: a.LineEnd.Normal,
            rightend: a.LineEnd.Normal
          };
          this._sideRenderer.setData(d), i.append(this._sideRenderer);

          var h = this._points[2].subtract(this._points[1]).scaled(.5),
              c = this._medianPoint.subtract(this._points[0]);

          var u = 0;

          var p = e.childs().fillBackground.value(),
              _ = e.childs().transparency.value();

          for (var _t60 = 0; _t60 <= 8; _t60++) {
            var _n44 = "level" + _t60,
                _o21 = e.childs()[_n44];

            if (_o21.childs().visible.value()) {
              var _n45 = this._medianPoint.addScaled(h, _o21.childs().coeff.value()),
                  _d15 = _n45.add(c),
                  g = this._medianPoint.addScaled(h, -_o21.childs().coeff.value()),
                  f = g.add(c);

              if (p) {
                {
                  var _t61 = this._medianPoint.addScaled(h, u),
                      _r42 = {
                    p1: _n45,
                    p2: _d15,
                    p3: _t61,
                    p4: _t61.add(c),
                    color: _o21.childs().color.value(),
                    transparency: _,
                    hittestOnBackground: !0,
                    extendLeft: e.childs().extendLines.value()
                  },
                      _a19 = new s.ChannelRenderer();

                  _a19.setData(_r42), i.append(_a19);
                }
                {
                  var _t62 = this._medianPoint.addScaled(h, -u),
                      _n46 = {
                    p1: g,
                    p2: f,
                    p3: _t62,
                    p4: _t62.add(c),
                    color: _o21.childs().color.value(),
                    transparency: _,
                    hittestOnBackground: !0,
                    extendLeft: e.childs().extendLines.value()
                  },
                      _r43 = new s.ChannelRenderer();

                  _r43.setData(_n46), i.append(_r43);
                }
              }

              u = _o21.childs().coeff.value();
              var v = {
                points: [_n45, _d15],
                color: _o21.childs().color.value(),
                linewidth: _o21.childs().linewidth.value(),
                linestyle: _o21.childs().linestyle.value(),
                extendleft: e.childs().extendLines.value(),
                extendright: !0,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  x = new l.TrendLineRenderer();
              x.setData(v), x.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _t60)), i.append(x);
              var m = {
                points: [g, f],
                color: _o21.childs().color.value(),
                linewidth: _o21.childs().linewidth.value(),
                linestyle: _o21.childs().linestyle.value(),
                extendleft: e.childs().extendLines.value(),
                extendright: !0,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal
              },
                  w = new l.TrendLineRenderer();
              w.setData(m), w.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _t60)), i.append(w);
            }
          }

          this.addAnchors(i), this._renderer = i;
        }
      }]);

      return h;
    }(d.LineSourcePaneView);

    var c =
    /*#__PURE__*/
    function (_h13) {
      _inherits(c, _h13);

      function c() {
        var _this71;

        _classCallCheck(this, c);

        _this71 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this71._modifiedBase = null, _this71._backSideRenderer = new l.TrendLineRenderer();
        return _this71;
      }

      _createClass(c, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateRenderer",
        value: function _updateRenderer() {
          if (this._points.length < 2) return;

          this._calcMofifiedBase();

          var e = this._source.properties(),
              t = new o.CompositeRenderer(),
              i = e.childs().median.childs();

          {
            var _e91 = {
              points: [this._points[0], this._points[1]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            if (this._backSideRenderer.setData(_e91), t.append(this._backSideRenderer), !this._medianPoint || !this._modifiedBase) return this.addAnchors(t), void (this._renderer = t);
          }
          {
            var _n47 = {
              points: [this._modifiedBase, this._medianPoint],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: e.childs().extendLines.value(),
              extendright: !0,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            if (this._medianRenderer.setData(_n47), t.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(t), void (this._renderer = t);
          }
          {
            var _e92 = {
              points: [this._points[1], this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            this._sideRenderer.setData(_e92), t.append(this._sideRenderer);
          }
          {
            var _i62 = this._points[2].subtract(this._points[1]).scaled(.5),
                _n48 = this._medianPoint.subtract(this._modifiedBase);

            var _o22 = 0;

            var _d16 = e.childs().fillBackground.value(),
                _h14 = e.childs().transparency.value();

            for (var _c12 = 0; _c12 <= 8; _c12++) {
              var _u15 = "level" + _c12,
                  _p6 = e.child(_u15);

              if (_p6.childs().visible.value()) {
                var _u16 = this._medianPoint.addScaled(_i62, _p6.childs().coeff.value()),
                    _ = _u16.add(_n48),
                    g = this._medianPoint.addScaled(_i62, -_p6.childs().coeff.value()),
                    f = g.add(_n48);

                if (_d16) {
                  var _r44 = this._medianPoint.addScaled(_i62, _o22);

                  {
                    var _i63 = {
                      p1: _u16,
                      p2: _,
                      p3: _r44,
                      p4: _r44.add(_n48),
                      color: _p6.childs().color.value(),
                      transparency: _h14,
                      hittestOnBackground: !0,
                      extendLeft: e.childs().extendLines.value()
                    },
                        _o23 = new s.ChannelRenderer();

                    _o23.setData(_i63), t.append(_o23);
                  }
                  {
                    var _r45 = this._medianPoint.addScaled(_i62, -_o22),
                        _a20 = {
                      p1: g,
                      p2: f,
                      p3: _r45,
                      p4: _r45.add(_n48),
                      color: _p6.childs().color.value(),
                      transparency: _h14,
                      hittestOnBackground: !0,
                      extendLeft: e.childs().extendLines.value()
                    },
                        _l16 = new s.ChannelRenderer();

                    _l16.setData(_a20), t.append(_l16);
                  }
                }

                _o22 = _p6.childs().coeff.value();
                var v = {
                  points: [_u16, _],
                  color: _p6.childs().color.value(),
                  linewidth: _p6.childs().linewidth.value(),
                  linestyle: _p6.childs().linestyle.value(),
                  extendleft: e.childs().extendLines.value(),
                  extendright: !0,
                  leftend: a.LineEnd.Normal,
                  rightend: a.LineEnd.Normal
                },
                    x = new l.TrendLineRenderer();
                x.setData(v), x.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _c12)), t.append(x);
                var m = {
                  points: [g, f],
                  color: _p6.childs().color.value(),
                  linewidth: _p6.childs().linewidth.value(),
                  linestyle: _p6.childs().linestyle.value(),
                  extendleft: e.childs().extendLines.value(),
                  extendright: !0,
                  leftend: a.LineEnd.Normal,
                  rightend: a.LineEnd.Normal
                },
                    w = new l.TrendLineRenderer();
                w.setData(m), w.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _c12)), t.append(w);
              }
            }
          }
          this.addAnchors(t), this._renderer = t;
        }
      }, {
        key: "_calcMofifiedBase",
        value: function _calcMofifiedBase() {
          this._points.length > 1 && (this._modifiedBase = this._points[0].add(this._points[1]).scaled(.5));
        }
      }]);

      return c;
    }(h);

    var u =
    /*#__PURE__*/
    function (_c13) {
      _inherits(u, _c13);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "_calcMofifiedBase",
        value: function _calcMofifiedBase() {
          if (this._points.length > 2) {
            var _e93 = this._points[0].x,
                _t63 = .5 * (this._points[0].y + this._points[1].y),
                _i64 = new n.Point(_e93, _t63);

            this._modifiedBase = _i64;
          }
        }
      }]);

      return u;
    }(c);

    var p =
    /*#__PURE__*/
    function (_h15) {
      _inherits(p, _h15);

      function p() {
        var _this72;

        _classCallCheck(this, p);

        _this72 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this72._backSideRenderer = new l.TrendLineRenderer(), _this72._centerRenderer = new l.TrendLineRenderer(), _this72._modifiedBase = null;
        return _this72;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateRenderer",
        value: function _updateRenderer() {
          if (this._points.length > 1 && (this._modifiedBase = this._points[0].add(this._points[1]).scaled(.5)), this._points.length < 2) return;
          var e = new o.CompositeRenderer();
          if (!this._medianPoint || !this._modifiedBase) return void this.addAnchors(e);

          var t = this._source.properties(),
              i = t.childs().median.childs();

          if (3 === this._points.length) {
            var _t64 = {
              points: [this._modifiedBase, this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            this._medianRenderer.setData(_t64), e.append(this._medianRenderer);
          }

          {
            var _t65 = {
              points: [this._points[0], this._points[1]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            if (this._backSideRenderer.setData(_t65), e.append(this._backSideRenderer), this._points.length < 3) return this.addAnchors(e), void (this._renderer = e);
          }
          {
            var _t66 = {
              points: [this._points[1], this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };
            this._sideRenderer.setData(_t66), e.append(this._sideRenderer);
          }
          {
            var _n49 = this._points[2].subtract(this._points[1]).scaled(.5),
                _o24 = this._points[2].subtract(this._modifiedBase);

            var _d17 = 0;

            var _h16 = t.childs().fillBackground.value(),
                _c14 = t.childs().transparency.value(),
                _u17 = {
              points: [this._medianPoint, this._medianPoint.add(_o24)],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: t.childs().extendLines.value(),
              extendright: !0,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal
            };

            this._centerRenderer.setData(_u17), e.append(this._centerRenderer);

            for (var _i65 = 0; _i65 <= 8; _i65++) {
              var _u18 = "level" + _i65,
                  _p7 = t.child(_u18).childs();

              if (_p7.visible.value()) {
                var _u19 = this._medianPoint.addScaled(_n49, _p7.coeff.value()),
                    _ = _u19.add(_o24),
                    g = this._medianPoint.addScaled(_n49, -_p7.coeff.value()),
                    f = g.add(_o24);

                if (_h16) {
                  {
                    var _i66 = this._medianPoint.addScaled(_n49, _d17),
                        _r46 = {
                      p1: _u19,
                      p2: _,
                      p3: _i66,
                      p4: _i66.add(_o24),
                      color: _p7.color.value(),
                      transparency: _c14,
                      hittestOnBackground: !0,
                      extendLeft: t.childs().extendLines.value()
                    },
                        _a21 = new s.ChannelRenderer();

                    _a21.setData(_r46), e.append(_a21);
                  }
                  {
                    var _i67 = this._medianPoint.addScaled(_n49, -_d17),
                        _r47 = {
                      p1: g,
                      p2: f,
                      p3: _i67,
                      p4: _i67.add(_o24),
                      color: _p7.color.value(),
                      transparency: _c14,
                      hittestOnBackground: !0,
                      extendLeft: t.childs().extendLines.value()
                    },
                        _a22 = new s.ChannelRenderer();

                    _a22.setData(_r47), e.append(_a22);
                  }
                }

                _d17 = _p7.coeff.value();
                var v = {
                  points: [_u19, _],
                  color: _p7.color.value(),
                  linewidth: _p7.linewidth.value(),
                  linestyle: _p7.linestyle.value(),
                  extendleft: t.childs().extendLines.value(),
                  extendright: !0,
                  leftend: a.LineEnd.Normal,
                  rightend: a.LineEnd.Normal
                },
                    x = new l.TrendLineRenderer();
                x.setData(v), x.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _i65)), e.append(x);
                var m = {
                  points: [g, f],
                  color: _p7.color.value(),
                  linewidth: _p7.linewidth.value(),
                  linestyle: _p7.linestyle.value(),
                  extendleft: t.childs().extendLines.value(),
                  extendright: !0,
                  leftend: a.LineEnd.Normal,
                  rightend: a.LineEnd.Normal
                },
                    w = new l.TrendLineRenderer();
                w.setData(m), w.setHitTest(new r.HitTestResult(r.HitTarget.MovePoint, void 0, _i65)), e.append(w);
              }
            }
          }
          this.addAnchors(e), this._renderer = e;
        }
      }]);

      return p;
    }(h);
  },
  50253: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      PolylinePaneView: function PolylinePaneView() {
        return o;
      }
    });
    var n = i(79797),
        r = i(19266),
        s = i(79191);

    var o =
    /*#__PURE__*/
    function (_s$LineSourcePaneView3) {
      _inherits(o, _s$LineSourcePaneView3);

      function o(e, t) {
        var _this73;

        _classCallCheck(this, o);

        _this73 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e, t)), _this73._polygonRenderer = new n.PolygonRenderer(), _this73._renderer = new r.CompositeRenderer();
        return _this73;
      }

      _createClass(o, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(o.prototype), "_updateImpl", this).call(this), this._renderer.clear();

          var e = this._source.properties().childs(),
              t = {
            points: this._points,
            color: e.linecolor.value(),
            linewidth: e.linewidth.value(),
            linestyle: e.linestyle.value(),
            filled: e.filled.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: e.fillBackground.value(),
            transparency: e.transparency.value()
          };

          this._polygonRenderer.setData(t), this._renderer.append(this._polygonRenderer), this.addAnchors(this._renderer);
        }
      }]);

      return o;
    }(s.LineSourcePaneView);
  },
  46258: function _(e, t, i) {
    "use strict";

    var n = i(79191).LineSourcePaneView,
        r = i(47043),
        s = i(18807).HitTestResult,
        o = i(18807).HitTarget,
        a = i(82161).splitThousands,
        l = i(38223),
        d = i(53180).appendEllipsis,
        h = i(15187).MediaCoordinatesPaneRenderer,
        c = i(14002).orderLineLocation;

    var _i68 = i(68441),
        u = _i68.setLineStyle,
        p = _i68.drawLine,
        _ = _i68.drawPoly,
        _i69 = i(79849),
        g = _i69.LINESTYLE_SOLID;

    var f =
    /*#__PURE__*/
    function (_h17) {
      _inherits(f, _h17);

      function f(e, t) {
        var _this74;

        _classCallCheck(this, f);

        _this74 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this)), _this74._data = null, _this74._cache = e, _this74._adapter = t;
        return _this74;
      }

      _createClass(f, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "_height",
        value: function _height() {
          return Math.max(20, 1 + Math.max(r.fontHeight(this._adapter.getBodyFont()), r.fontHeight(this._adapter.getQuantityFont())));
        }
      }, {
        key: "_bodyWidth",
        value: function _bodyWidth(e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), e.font = this._adapter.getBodyFont();
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(10 + t);
        }
      }, {
        key: "_getQuantity",
        value: function _getQuantity() {
          var e = this._adapter.getQuantity();

          return isNaN(e) ? e : a(this._adapter.getQuantity(), " ");
        }
      }, {
        key: "_quantityWidth",
        value: function _quantityWidth(e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), e.font = this._adapter.getQuantityFont();
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }
      }, {
        key: "_reverseButtonWidth",
        value: function _reverseButtonWidth() {
          return this._adapter.isOnReverseCallbackPresent() ? this._height() : 0;
        }
      }, {
        key: "_closeButtonWidth",
        value: function _closeButtonWidth() {
          return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0;
        }
      }, {
        key: "_drawLines",
        value: function _drawLines(e, t, i, n, r) {
          e.save(), e.strokeStyle = this._adapter.getLineColor(), u(e, this._adapter.getLineStyle()), e.lineWidth = this._adapter.getLineWidth(), p(e, i, n, r, n), this._adapter.getExtendLeft() && p(e, 0, n, t, n), e.restore();
        }
      }, {
        key: "_drawBody",
        value: function _drawBody(e, t, i) {
          e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBackgroundColor();

          var n = this._bodyWidth(e),
              r = this._height();

          e.fillRect(t + .5, i + .5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
      }, {
        key: "_drawBodyText",
        value: function _drawBodyText(e, t, i) {
          e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getBodyFont(), e.fillStyle = this._adapter.getBodyTextColor();
          var n = t + this._bodyWidth(e) / 2,
              r = i + this._height() / 2;
          e.fillText(this._adapter.getText(), n, r), e.restore();
        }
      }, {
        key: "_drawQuantity",
        value: function _drawQuantity(e, t, i) {
          e.strokeStyle = this._adapter.getQuantityBorderColor(), e.fillStyle = this._adapter.getQuantityBackgroundColor();

          var n = this._quantityWidth(e),
              r = this._height();

          e.fillRect(t + .5, i + .5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
      }, {
        key: "_drawQuantityText",
        value: function _drawQuantityText(e, t, i) {
          e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getQuantityFont(), e.fillStyle = this._adapter.getQuantityTextColor();
          var n = t + this._quantityWidth(e) / 2,
              r = i + this._height() / 2;
          e.fillText(l.startWithLTR(this._getQuantity() + ""), n, r), e.restore();
        }
      }, {
        key: "_drawReverseButton",
        value: function _drawReverseButton(e, t, i) {
          e.save(), e.strokeStyle = this._adapter.getReverseButtonBorderColor(), e.fillStyle = this._adapter.getReverseButtonBackgroundColor();

          var n = this._reverseButtonWidth(),
              r = this._height();

          e.fillRect(t + .5, i + .5, n - 1, r - 1), e.strokeRect(t, i, n, r), e.strokeStyle = this._adapter.getReverseButtonIconColor();

          var s = function s(e, t) {
            u(e, g), p(e, 0, 0, 0, t), p(e, -1, 1, 1, 1), p(e, -2, 2, 2, 2);
          },
              o = t + Math.round((this._reverseButtonWidth() - 6) / 2),
              a = i + 5;

          e.save(), e.translate(o, a), s(e, 10), e.translate(6, 10), e.rotate(Math.PI), s(e, 10), e.restore(), this._adapter._blocked && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, n - 1, r - 1)), e.restore();
        }
      }, {
        key: "_drawCloseButton",
        value: function _drawCloseButton(e, t, i) {
          e.save(), e.strokeStyle = this._adapter.getCloseButtonBorderColor(), e.fillStyle = this._adapter.getCloseButtonBackgroundColor();

          var n = this._closeButtonWidth(),
              r = this._height();

          e.fillRect(t + .5, i + .5, n - 1, r - 1), e.strokeRect(t, i, n, r);
          var s = t + n,
              o = i + r;
          e.strokeStyle = this._adapter.getCloseButtonIconColor();
          var a = (this._closeButtonWidth() - 8) / 2,
              l = (this._height() - 8) / 2;
          _(e, [{
            x: t + a,
            y: i + l
          }, {
            x: s - a,
            y: o - l
          }], !0), _(e, [{
            x: s - a,
            y: i + l
          }, {
            x: t + a,
            y: o - l
          }], !0), this._adapter._blocked && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, n - 1, r - 1)), e.restore();
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || !this._data.points || this._data.points.length < 1) return;

          var t = e.context,
              i = this._data.width,
              n = this._bodyWidth(t),
              r = this._quantityWidth(t),
              s = this._reverseButtonWidth(t),
              o = n + r + s + this._closeButtonWidth();

          var _c15 = c(this._adapter, i, o),
              a = _c15.left,
              l = _c15.right;

          var d = Math.round(this._data.points[0].y),
              h = Math.round(d - (this._height() + 1) / 2);
          this._cache.bodyRight = a + n, this._cache.quantityRight = this._cache.bodyRight + r, this._cache.reverseButtonRight = this._cache.quantityRight + s, this._cache.top = h, this._cache.bottom = h + this._height(), this._cache.left = a, this._cache.right = l, this._drawLines(t, a, l, d, i), 0 !== n && (this._drawBody(t, a, h), this._drawBodyText(t, a, h)), 0 !== r && (this._drawQuantity(t, this._cache.bodyRight, h), this._drawQuantityText(t, this._cache.bodyRight, h)), 0 !== s && this._drawReverseButton(t, this._cache.quantityRight, h), 0 !== this._closeButtonWidth() && this._drawCloseButton(t, this._cache.reverseButtonRight, h);
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          return null === this._data || 0 === this._data.points.length || e.y < this._cache.top || e.y > this._cache.bottom || e.x < this._cache.left || this._cache.right < e.x ? null : this._adapter._blocked ? new s(o.Custom, {}) : e.x >= this._cache.bodyRight && e.x < this._cache.quantityRight && this._adapter._onModifyCallback ? new s(o.Custom, {
            clickHandler: this._adapter.callOnModify.bind(this._adapter),
            tapHandler: this._adapter.callOnModify.bind(this._adapter),
            tooltip: {
              text: this._adapter.getProtectTooltip() || d(i(44352).t(null, void 0, i(11810))),
              rect: {
                x: this._cache.bodyRight,
                y: this._cache.top,
                w: this._cache.quantityRight - this._cache.bodyRight,
                h: this._cache.bottom - this._cache.top
              }
            }
          }) : e.x >= this._cache.quantityRight && e.x < this._cache.reverseButtonRight ? new s(o.Custom, {
            clickHandler: this._adapter.callOnReverse.bind(this._adapter),
            tapHandler: this._adapter.callOnReverse.bind(this._adapter),
            tooltip: {
              text: this._adapter.getReverseTooltip() || i(44352).t(null, void 0, i(19780)),
              rect: {
                x: this._cache.quantityRight,
                y: this._cache.top,
                w: this._cache.reverseButtonRight - this._cache.quantityRight,
                h: this._cache.bottom - this._cache.top
              }
            }
          }) : e.x >= this._cache.reverseButtonRight && e.x < this._cache.right ? new s(o.Custom, {
            clickHandler: this._adapter.callOnClose.bind(this._adapter),
            tapHandler: this._adapter.callOnClose.bind(this._adapter),
            tooltip: {
              text: this._adapter.getCloseTooltip() || i(44352).t(null, void 0, i(37431)),
              rect: {
                x: this._cache.reverseButtonRight,
                y: this._cache.top,
                w: this._cache.right - this._cache.reverseButtonRight,
                h: this._cache.bottom - this._cache.top
              }
            }
          }) : new s(o.Custom, {
            clickHandler: function clickHandler() {},
            tapHandler: function tapHandler() {},
            tooltip: {
              text: this._adapter.getTooltip(),
              rect: {
                x: this._cache.left,
                y: this._cache.top,
                w: this._cache.bodyRight - this._cache.left,
                h: this._cache.bottom - this._cache.top
              }
            }
          });
        }
      }]);

      return f;
    }(h);

    t.PositionPaneView =
    /*#__PURE__*/
    function (_n50) {
      _inherits(_class7, _n50);

      function _class7(e, t) {
        var _this75;

        _classCallCheck(this, _class7);

        _this75 = _possibleConstructorReturn(this, _getPrototypeOf(_class7).call(this, e, t)), _this75._rendererCache = {}, _this75._renderer = new f(_this75._rendererCache, e._adapter);
        return _this75;
      }

      _createClass(_class7, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer.setData({
            points: this._points,
            width: this._model.timeScale().width()
          }), this._renderer;
        }
      }]);

      return _class7;
    }(n);
  },
  75061: function _(e, t, i) {
    "use strict";

    var n = i(86441).Point,
        r = i(79191).LineSourcePaneView,
        s = i(36274).Interval,
        o = i(18807).HitTestResult,
        a = i(18807).HitTarget,
        l = i(19266).CompositeRenderer,
        d = i(12767).getImage,
        h = i(37160),
        c = i(93572).PercentageFormatter,
        u = i(53741).DateFormatter,
        p = i(79206).TimeFormatter,
        _ = i(79206).hourMinuteFormat,
        g = i(79206).hourMinuteSecondFormat,
        f = i(2043).TimeSpanFormatter,
        v = i(87095),
        x = i(21316),
        m = i(74359).calcTextHorizontalShift,
        w = i(38223).isRtl,
        R = i(68441).drawRoundRect,
        y = i(29764).makeFont,
        T = i(15187).MediaCoordinatesPaneRenderer,
        b = i(38223),
        P = b.forceLTRStr,
        L = b.startWithLTR,
        S = i(46501).CHART_FONT_FAMILY;

    var C =
    /*#__PURE__*/
    function (_T) {
      _inherits(C, _T);

      function C() {
        var _this76;

        _classCallCheck(this, C);

        _this76 = _possibleConstructorReturn(this, _getPrototypeOf(C).call(this)), _this76._data = null, _this76._font = S, _this76._targetFontSize1 = 14, _this76._targetFontSize2 = 11, _this76._sourceFontSize1 = 12, _this76._sourceFontSize2 = 10, _this76._arrowOffset = 6, _this76._arrowWidth = 5, _this76._arrowHeight = 5, _this76._radius = 3, _this76._sourceWidth = void 0, _this76._sourceHeight = void 0, _this76._sourceRectLeftOffset = void 0, _this76._targetWidth = void 0, _this76._targetHeight = void 0, _this76._targetRectLeftOffset = void 0;
        return _this76;
      }

      _createClass(C, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "drawBalloon",
        value: function drawBalloon(e, t, i, r, s, o) {
          var a = o || 20;

          if (e.beginPath(), "down" === s) {
            var l = new n(t.x - a, t.y - this._arrowOffset - this._arrowHeight - r);
            return e.moveTo(l.x + this._radius, l.y), e.lineTo(l.x + i - this._radius, l.y), e.arcTo(l.x + i, l.y, l.x + i, l.y + this._radius, this._radius), e.lineTo(l.x + i, l.y + r - this._radius), e.arcTo(l.x + i, l.y + r, l.x + i - this._radius, l.y + r, this._radius), e.lineTo(l.x + a + this._arrowWidth, l.y + r), e.lineTo(l.x + a, l.y + r + this._arrowHeight), e.lineTo(l.x + a - this._arrowWidth, l.y + r), e.lineTo(l.x + this._radius, l.y + r), e.arcTo(l.x, l.y + r, l.x, l.y + r - this._radius, this._radius), e.lineTo(l.x, l.y + this._radius), e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius), l;
          }

          var d = new n(t.x - a, t.y + this._arrowOffset + this._arrowHeight + r);
          return e.moveTo(d.x + this._radius, d.y), e.lineTo(d.x + i - this._radius, d.y), e.arcTo(d.x + i, d.y, d.x + i, d.y - this._radius, this._radius), e.lineTo(d.x + i, d.y - r + this._radius), e.arcTo(d.x + i, d.y - r, d.x + i - this._radius, d.y - r, this._radius), e.lineTo(d.x + a + this._arrowWidth, d.y - r), e.lineTo(d.x + a, d.y - r - this._arrowHeight), e.lineTo(d.x + a - this._arrowWidth, d.y - r), e.lineTo(d.x + this._radius, d.y - r), e.arcTo(d.x, d.y - r, d.x, d.y - r + this._radius, this._radius), e.lineTo(d.x, d.y - this._radius), e.arcTo(d.x, d.y, d.x + this._radius, d.y, this._radius), new n(d.x, d.y - r);
        }
      }, {
        key: "drawTargetLabel",
        value: function drawTargetLabel(e) {
          e.save(), e.translate(.5, .5);
          var t = y(this._targetFontSize1, this._font, "normal"),
              n = y(this._targetFontSize2, this._font, "normal"),
              r = this._data.targetLine1,
              s = this._data.targetLine2,
              o = this._data.targetLine3,
              a = this._data.targetLine4;
          e.font = t;
          var l = e.measureText(r).width,
              d = e.measureText(s).width,
              h = e.measureText(" ").width;
          e.font = n;

          var c = e.measureText(o).width,
              u = e.measureText(a).width,
              p = e.measureText(" ").width,
              _ = this._data.clockWhite && this._data.clockWhite.width || 0;

          this._targetWidth = Math.max(l + d + h, c + u + _ + 2 * p) + 8 + 4, this._targetHeight = this._targetFontSize1 + this._targetFontSize2 + 9 + 4;
          var g = this._data.points[1],
              f = g.x + this._targetWidth - e.canvas.width + 5;
          this._targetRectLeftOffset = Math.max(20, Math.min(this._targetWidth - 15, f));
          var T = "up" === this._data.direction ? "down" : "up",
              b = this.drawBalloon(e, g, this._targetWidth, this._targetHeight, T, this._targetRectLeftOffset);
          e.fillStyle = v.generateColor(this._data.targetBackColor, this._data.transparency), e.fill(), e.lineWidth = 2, e.strokeStyle = v.generateColor(this._data.targetStrokeColor, this._data.transparency), e.stroke();
          e.beginPath(), e.arc(g.x, g.y, 3, 0, 2 * Math.PI, !1), e.fillStyle = this._data.centersColor, e.fill(), e.textBaseline = "top", e.fillStyle = this._data.targetTextColor;
          var P = 2 + b.x + 4,
              L = 2 + b.y + 3,
              S = this._targetWidth - 8 - 4;
          e.font = t, e.textAlign = w() ? "right" : "left";
          var C = m(e, S - d - h);
          e.fillText(r, P + C, L);
          var M = m(e, S - l);
          e.fillText(s, P + l + h + M, L), e.font = n;
          var I = L + this._targetFontSize1 + 3,
              A = m(e, S - u - _ - p);
          e.fillText(o, P + A, I);
          var k = m(e, S - c - p - _ - u);
          this._data.clockWhite && e.drawImage(this._data.clockWhite, P + c + p + k, I + 1);
          var N = m(e, S - c - _);

          if (e.fillText(a, P + c + _ + 2 * p + N, I), this._data.status) {
            var D, B, z, E;

            switch (e.font = y(this._targetFontSize1, this._font, "bold"), this._data.status) {
              case x.AlertStatus.Success:
                D = i(44352).t(null, void 0, i(26787)), B = v.generateColor(this._data.successBackground, this._data.transparency), z = this._data.successTextColor, E = this._data.successIcon;
                break;

              case x.AlertStatus.Failure:
                D = i(44352).t(null, void 0, i(968)), B = v.generateColor(this._data.failureBackground, this._data.transparency), z = this._data.failureTextColor, E = this._data.failureIcon;
            }

            var H = this._targetFontSize1 + 4,
                O = e.measureText(D).width,
                V = Math.round((this._targetWidth - O) / 2),
                W = m(e, O);
            e.fillStyle = B, "up" === this._data.direction ? (R(e, b.x - 1, b.y - H - 2, this._targetWidth + 2, H, 5), e.fill(), e.fillStyle = z, e.fillText(D, b.x + V + W, b.y - H + 1), E && e.drawImage(E, b.x + V - E.width - 4, b.y - H - 2 + Math.abs(H - E.height) / 2)) : (R(e, b.x - 1, b.y + this._targetHeight + 2, this._targetWidth + 2, H, 5), e.fill(), e.fillStyle = z, e.fillText(D, b.x + V + W, b.y + this._targetHeight + 5), E && e.drawImage(E, b.x + V - E.width - 4, b.y + this._targetHeight + 10 - Math.abs(H - E.height) / 2)), e.restore();
          } else e.restore();
        }
      }, {
        key: "drawStartLabel",
        value: function drawStartLabel(e) {
          e.save(), e.translate(.5, .5);
          var t = y(this._sourceFontSize1, this._font, "normal"),
              i = y(this._sourceFontSize2, this._font, "normal");
          e.font = t;
          var n = e.measureText(this._data.sourceLine1).width;
          e.font = i;
          var r = e.measureText(this._data.sourceLine2).width;
          this._sourceWidth = Math.max(n, r) + 6 + 4, this._sourceHeight = this._sourceFontSize1 + this._sourceFontSize2 + 6 + 4;
          var s = this._data.points[0],
              o = s.x + this._sourceWidth - e.canvas.width + 5;
          this._sourceRectLeftOffset = Math.max(20, Math.min(this._sourceWidth - 15, o));
          var a = this.drawBalloon(e, s, this._sourceWidth, this._sourceHeight, this._data.direction, this._sourceRectLeftOffset);
          e.fillStyle = v.generateColor(this._data.sourceBackColor, this._data.transparency), e.fill(), e.lineWidth = 2, e.strokeStyle = v.generateColor(this._data.sourceStrokeColor, this._data.transparency), e.stroke(), e.textAlign = w() ? "right" : "left", e.textBaseline = "top", e.fillStyle = this._data.sourceTextColor;
          var l = m(e, this._sourceWidth - 6 - 4),
              d = 2 + a.x + 3 + l,
              h = 2 + a.y + 2;
          e.font = t, e.fillText(this._data.sourceLine1, d, h), e.font = i, e.fillText(this._data.sourceLine2, d, h + this._sourceFontSize1 + 2);
          e.beginPath(), e.arc(s.x, s.y, 3, 0, 2 * Math.PI, !1), e.fillStyle = this._data.centersColor, e.fill(), e.restore();
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            var t = e.context;
            t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.lineStyle = this._data.linestyle;
            var i = this._data.points[0],
                n = this._data.points[1],
                r = n.subtract(i);
            Math.abs(r.x) < 1 || Math.abs(r.y) < 1 ? (t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(n.x, n.y), t.stroke()) : (t.save(), t.beginPath(), t.translate(i.x, i.y), t.scale(1, r.y / r.x), t.moveTo(0, 0), t.arcTo(r.x, 0, r.x, r.x, Math.abs(r.x)), t.lineTo(r.x, r.x), t.restore(), t.stroke()), this.drawTargetLabel(t), this.drawStartLabel(t);
            var s = Math.max(8, 4 * this._data.linewidth);
            t.fillStyle = this._data.color;
            var o = r.y < 0 ? 1 : -1;
            if (Math.abs(r.x) < 1 || Math.abs(r.y) < 1) var a = Math.atan(r.x / r.y);else {
              var l,
                  d,
                  h = Math.abs(r.x),
                  c = Math.abs(r.y),
                  u = 0,
                  p = Math.PI / 2,
                  _ = (u + p) / 2;

              if (r.length() > s) for (;;) {
                l = h * Math.sin(_), d = c * (1 - Math.cos(_));
                var g = Math.sqrt((l - h) * (l - h) + (d - c) * (d - c));
                if (Math.abs(g - s) < 1) break;
                g > s ? u = _ : p = _, _ = (u + p) / 2;
              }
              a = Math.atan((h - l) / (c - d)), r.x * r.y < 0 && (a = -a);
            }
            t.save(), t.beginPath(), t.translate(n.x, n.y), t.rotate(-a), t.moveTo(0, 0), t.lineTo(-s / 2, o * s), t.lineTo(s / 2, o * s), t.lineTo(0, 0), t.restore(), t.fill();
          }
        }
      }, {
        key: "targetLabelHitTest",
        value: function targetLabelHitTest(e) {
          if (void 0 === this._targetWidth || void 0 === this._targetHeight || void 0 === this._targetRectLeftOffset) return null;
          var t = this._targetHeight + this._arrowHeight;
          this._data.status && (t += this._targetFontSize1 + 10);
          var i = "up" === this._data.direction ? -1 : 1,
              n = this._radius,
              r = this._data.points[1],
              s = r.x - this._targetRectLeftOffset,
              l = r.y + i * n,
              d = r.y + i * (t + n),
              h = Math.min(l, d),
              c = Math.max(l, d);
          return e.x >= s && e.x <= s + this._targetWidth && e.y >= h && e.y <= c ? new o(a.MovePoint) : null;
        }
      }, {
        key: "sourceLabelHitTest",
        value: function sourceLabelHitTest(e) {
          if (void 0 === this._sourceHeight || void 0 === this._sourceWidth || void 0 === this._sourceRectLeftOffset) return null;
          var t = "up" === this._data.direction ? 1 : -1,
              i = this._radius,
              n = this._data.points[0],
              r = n.x - this._sourceRectLeftOffset,
              s = n.y + i * t,
              l = n.y + (i + this._sourceHeight + this._arrowHeight) * t,
              d = Math.min(s, l),
              h = Math.max(s, l);
          return e.x >= r && e.x <= r + this._sourceWidth && e.y >= d && e.y <= h ? new o(a.MovePoint) : null;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
              i = this._data.points[1],
              n = i.subtract(t),
              r = (n = i.subtract(t), e.subtract(t)),
              s = Math.abs(n.x),
              l = Math.abs(n.y),
              d = h.sign(n.y) * (l - l * Math.sqrt(1 - r.x * r.x / (s * s)));
          if (Math.abs(d - r.y) < 3) return new o(a.MovePoint);
          var c = this.targetLabelHitTest(e);
          return c || this.sourceLabelHitTest(e);
        }
      }]);

      return C;
    }(T);

    t.PredictionPaneView =
    /*#__PURE__*/
    function (_r48) {
      _inherits(_class8, _r48);

      function _class8(e, t) {
        var _this77;

        _classCallCheck(this, _class8);

        _this77 = _possibleConstructorReturn(this, _getPrototypeOf(_class8).call(this, e, t)), _this77._pendingIcons = 3;

        var n = _assertThisInitialized(_this77);

        function r() {
          n._pendingIcons -= 1, 0 === n._pendingIcons && n._source.model().updateSource(n._source);
        }

        _this77._clockWhite = null, _this77._successIcon = null, _this77._failureIcon = null, d("prediction-clock-white", i(99620)).then(function (e) {
          n._clockWhite = e, r();
        }), d("prediction-success-white", i(14012)).then(function (e) {
          n._successIcon = e, r();
        }), d("prediction-failure-white", i(88249)).then(function (e) {
          n._failureIcon = e, r();
        }), _this77._percentageFormatter = new c(), _this77._predictionRenderer = new C(), _this77._renderer = null;
        return _this77;
      }

      _createClass(_class8, [{
        key: "iconsReady",
        value: function iconsReady() {
          return 0 === this._pendingIcons;
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if ((_get(_getPrototypeOf(_class8.prototype), "_updateImpl", this).call(this), this._renderer = null, this._targetLine1 = "", this._targetLine2 = "", this._targetLine3 = "", this._targetLine4 = "", !(this._source.points().length < 2)) && this._source.priceScale()) {
            var e = this._source.ownerSource().formatter(),
                t = this._source.points()[1],
                n = this._source.points()[0];

            this._targetLine3 = P(e.format(t.price));
            var r = t.price - n.price,
                o = r / Math.abs(n.price) * 100;
            this._targetLine1 = P(e.format(r) + " (" + this._percentageFormatter.format(o) + ")");

            var a = this._model.timeScale().indexToUserTime(n.index),
                d = this._model.timeScale().indexToUserTime(t.index);

            n.time && t.time && (a = TradingView.isString(n.time) ? new Date(Date.parse(n.time)) : n.time, d = TradingView.isString(t.time) ? new Date(Date.parse(t.time)) : t.time);

            var h = this._model.mainSeries().isDWM(),
                c = s.parse(this._model.mainSeries().interval()),
                v = c.isSeconds() || c.isTicks();

            if (d && a) {
              this._targetLine4 = new u().format(d), h || (this._targetLine4 = this._targetLine4 + "  " + new p(v ? g : _).format(d));
              var m = (d.valueOf() - a.valueOf()) / 1e3;
              this._targetLine2 = i(44352).t(null, {
                context: "dates"
              }, i(91481)) + " " + L(new f().format(m));
            }

            this._sourceLine1 = e.format(n.price), this._sourceLine2 = "";

            var w = this._model.timeScale().indexToUserTime(n.index);

            w && (this._sourceLine2 = new u().format(w), h || (this._sourceLine2 = this._sourceLine2 + " " + new p(v ? g : _).format(w))), this._direction = this._source.direction() === x.Direction.Up ? "up" : "down", this._finished = this._model.lineBeingCreated() !== this._source && this._model.lineBeingEdited() !== this._source && !this._model.sourcesBeingMoved().includes(this._source);
            var R = {};
            R.points = this._points, R.color = this._source.properties().linecolor.value(), R.linewidth = this._source.properties().linewidth.value(), R.targetLine1 = this._targetLine1, R.targetLine2 = this._targetLine2, R.targetLine3 = this._targetLine3, R.targetLine4 = this._targetLine4, R.status = this._source.properties().status.value(), R.transparency = this._source.properties().transparency.value(), R.targetBackColor = this._source.properties().targetBackColor.value(), R.targetStrokeColor = this._source.properties().targetStrokeColor.value(), R.targetTextColor = this._source.properties().targetTextColor.value(), R.sourceBackColor = this._source.properties().sourceBackColor.value(), R.sourceStrokeColor = this._source.properties().sourceStrokeColor.value(), R.sourceTextColor = this._source.properties().sourceTextColor.value(), R.successBackground = this._source.properties().successBackground.value(), R.successTextColor = this._source.properties().successTextColor.value(), R.failureBackground = this._source.properties().failureBackground.value(), R.failureTextColor = this._source.properties().failureTextColor.value(), R.intermediateBackColor = this._source.properties().intermediateBackColor.value(), R.intermediateTextColor = this._source.properties().intermediateTextColor.value(), R.sourceLine1 = this._sourceLine1, R.sourceLine2 = this._sourceLine2, R.direction = this._direction, R.clockWhite = this._clockWhite, R.successIcon = this._successIcon, R.failureIcon = this._failureIcon, R.finished = this._finished, R.centersColor = this._model.backgroundCounterColor().value(), this._predictionRenderer.setData(R);
            var y = new l();
            y.append(this._predictionRenderer), this.addAnchors(y), this._renderer = y;
          }
        }
      }]);

      return _class8;
    }(r);
  },
  86583: function _(e, t, i) {
    "use strict";

    var n = i(86441),
        r = n.Point,
        s = n.box,
        o = i(34026).pointInBox,
        a = i(79191).LineSourcePaneView,
        l = i(80101).SelectionRenderer,
        d = i(18807).HitTestResult,
        h = i(18807).HitTarget,
        c = i(19266).CompositeRenderer,
        u = i(87095),
        p = i(74359).calcTextHorizontalShift,
        _ = i(38223).isRtl,
        g = i(15187).MediaCoordinatesPaneRenderer,
        f = i(46501);

    var v =
    /*#__PURE__*/
    function (_g3) {
      _inherits(v, _g3);

      function v(e, t) {
        var _this78;

        _classCallCheck(this, v);

        _this78 = _possibleConstructorReturn(this, _getPrototypeOf(v).call(this)), _this78._data = null, _this78._measureCache = e, _this78._chartModel = t, _this78._points = null;
        return _this78;
      }

      _createClass(v, [{
        key: "setData",
        value: function setData(e) {
          this._data = e, this._points = e.points;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null !== this._data && null !== this._points && 0 !== this._points.length) {
            var t = e.context;
            t.font = [this._data.fontWeight, this._data.fontSize + "px", this._data.fontFamily].join(" ");
            var i = t.measureText(this._data.label);
            i.height = this._data.fontSize;
            var n = 10,
                r = 5,
                s = i.width + 2 * n,
                o = i.height + 2 * r,
                a = this._points[0].x - -9,
                l = this._points[0].y - (o + 15);
            t.textAlign = _() ? "right" : "left";
            var d = p(t, i.width);
            this._measureCache && Object.assign(this._measureCache, {
              innerWidth: s,
              innerHeight: o,
              tailLeft: -9,
              tailHeight: 15
            }), t.translate(.5 + a, .5 + l), t.beginPath(), t.moveTo(12, o), t.lineTo(-9, o + 15), t.lineTo(-10, o + 15 - 1), t.lineTo(5, o), t.lineTo(3, o), t.arcTo(0, o, 0, 0, 3), t.lineTo(0, 3), t.arcTo(0, 0, s, 0, 3), t.lineTo(s - 3, 0), t.arcTo(s, 0, s, o, 3), t.lineTo(s, o - 3), t.arcTo(s, o, 0, o, 3), t.lineTo(12, o), t.fillStyle = u.generateColor(this._data.backgroundColor, this._data.transparency), t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "alphabetic", t.fillStyle = this._data.color, t.fillText(this._data.label, n + d, o / 2 + Math.floor(.35 * this._data.fontSize)), t.translate(-.5, -.5), t.beginPath(), t.arc(-9, o + 15, 2.5, 0, 2 * Math.PI, !1), t.fillStyle = u.generateColor(this._data.borderColor, this._data.transparency), t.fill(), t.strokeStyle = this._chartModel.backgroundColor().value(), t.lineWidth = 1, t.stroke(), t.closePath();
          }
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || null === this._points || 0 === this._points.length) return null;
          var t = this._points[0].x - this._measureCache.tailLeft,
              i = this._points[0].y - (this._measureCache.innerHeight + this._measureCache.tailHeight),
              n = s(new r(t, i), new r(t + this._measureCache.innerWidth, i + this._measureCache.innerHeight));
          return o(e, n) ? new d(h.MovePoint) : null;
        }
      }]);

      return v;
    }(g);

    t.PriceLabelPaneView =
    /*#__PURE__*/
    function (_a23) {
      _inherits(_class9, _a23);

      function _class9(e, t, i) {
        var _this79;

        _classCallCheck(this, _class9);

        _this79 = _possibleConstructorReturn(this, _getPrototypeOf(_class9).call(this, e, t)), _this79._rendererCache = {}, _this79._priceLabelRenderer = new v(_this79._rendererCache, t), _this79._renderer = null;
        return _this79;
      }

      _createClass(_class9, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class9.prototype), "_updateImpl", this).call(this), this._renderer = null, this._source.points().length > 0) {
            var e = this._source.points()[0].price,
                t = this._source.priceScale();

            if (!t || t.isEmpty()) return;

            var i = this._source.ownerSource().firstValue();

            this._priceLabel = t.formatPrice(e, i);
          }

          var n = {};

          if (n.points = this._points, n.borderColor = this._source.properties().borderColor.value(), n.backgroundColor = this._source.properties().backgroundColor.value(), n.color = this._source.properties().color.value(), n.fontWeight = this._source.properties().fontWeight.value(), n.fontSize = this._source.properties().fontsize.value(), n.fontFamily = f.CHART_FONT_FAMILY, n.transparency = this._source.properties().transparency.value(), n.label = this._priceLabel, this._priceLabelRenderer.setData(n), 1 === n.points.length) {
            var r = new c();
            return r.append(this._priceLabelRenderer), r.append(new l({
              points: n.points,
              bgColors: this._lineAnchorColors(n.points),
              visible: this.areAnchorsVisible()
            })), void (this._renderer = r);
          }

          this._renderer = this._priceLabelRenderer;
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class9;
    }(a);
  },
  29734: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      PriceNotePaneView: function PriceNotePaneView() {
        return m;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(48891),
        o = i(19266),
        a = i(80657),
        l = i(79191),
        d = i(4652),
        h = i(79849),
        c = i(74359),
        u = i(46501),
        p = i(38325),
        _ = i(18807),
        g = i(68441),
        f = i(45197);

    function v(e) {
      var t, i;
      return e >= -135 && e <= -45 ? (t = "center", i = "bottom") : e > -45 && e < 45 ? (t = "left", i = "middle") : e >= 45 && e <= 135 ? (t = "center", i = "top") : (t = "right", i = "middle"), {
        horzAlign: t,
        vertAlign: i
      };
    }

    var x =
    /*#__PURE__*/
    function () {
      function x() {
        _classCallCheck(this, x);

        this._data = null, this._priceLabelRenderer = new a.TextRenderer(void 0, new _.HitTestResult(_.HitTarget.MovePoint, {
          areaName: _.AreaName.Style,
          activeItem: 1
        })), this._hittest = new _.HitTestResult(_.HitTarget.MovePoint, {
          areaName: _.AreaName.Style
        });
      }

      _createClass(x, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
          var t = e.points[0],
              i = e.points[1],
              n = Math.round(180 * Math.atan2(i.y - t.y, i.x - t.x) / Math.PI);

          this._priceLabelRenderer.setData(_objectSpread({}, v(n), {
            points: [i],
            text: e.text,
            color: e.textColor,
            font: u.CHART_FONT_FAMILY,
            fontSize: e.fontSize,
            bold: e.bold,
            italic: e.italic,
            offsetX: 0,
            offsetY: 0,
            borderColor: e.borderColor,
            borderWidth: 1,
            backgroundColor: e.backgroundColor,
            backgroundRoundRect: 4,
            boxPaddingVert: 6,
            boxPaddingHorz: 8
          }));
        }
      }, {
        key: "setHitTest",
        value: function setHitTest(e) {
          this._hittest = e;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          var i = this._data;
          if (null === i || i.points.length < 2) return;
          e.save();
          var n = t.pixelRatio,
              r = Math.round(i.points[0].x * n),
              s = Math.round(i.points[0].y * n),
              o = Math.round(i.points[1].x * n),
              a = Math.round(i.points[1].y * n);
          e.lineCap = "round", (0, g.setLineStyle)(e, h.LINESTYLE_SOLID), e.strokeStyle = i.lineColor, e.fillStyle = i.lineColor, e.lineWidth = Math.round(1 * n);
          var l = (0, f.fillScaledRadius)(2, n);
          (0, g.createCircle)(e, r, s, l), e.fill(), void 0 !== i.excludeBoundaries && (e.save(), (0, c.addExclusionArea)(e, t, i.excludeBoundaries)), (0, g.drawLine)(e, r, s, o, a), void 0 !== i.excludeBoundaries && e.restore(), this._priceLabelRenderer.draw(e, t);
          var d = 1 * n;
          e.strokeStyle = i.circleBorderColor, e.lineWidth = d;
          var u = l + d / 2;
          (0, g.createCircle)(e, r, s, u), e.stroke(), e.restore();
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          var t = this._data;
          if (null === t) return null;
          var i = (0, p.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3;
          return (0, d.distanceToSegment)(t.points[0], t.points[1], e).distance <= i ? this._hittest : this._priceLabelRenderer.hitTest(e);
        }
      }]);

      return x;
    }();

    var m =
    /*#__PURE__*/
    function (_l$LineSourcePaneView4) {
      _inherits(m, _l$LineSourcePaneView4);

      function m() {
        var _this80;

        _classCallCheck(this, m);

        _this80 = _possibleConstructorReturn(this, _getPrototypeOf(m).apply(this, arguments)), _this80._renderer = new o.CompositeRenderer(), _this80._priceNoteRenderer = new x(), _this80._customLabelRenderer = new a.TextRenderer();
        return _this80;
      }

      _createClass(m, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          _get(_getPrototypeOf(m.prototype), "_updateImpl", this).call(this), this._renderer.clear();

          var o = this._source.priceScale();

          if (!o || o.isEmpty()) return;
          var l = this._points;
          if (l.length < 2) return;
          var d = (0, n.ensureNotNull)(this._source.ownerSource()).firstValue();
          if (null === d) return;

          var h = this._source.properties().childs(),
              c = this._model.dark().value() ? s.colorsPalette["color-cold-gray-900"] : s.colorsPalette["color-white"],
              p = this._source.points()[0].price,
              _ = {
            text: o.formatPrice(p, d),
            points: l,
            lineColor: h.lineColor.value(),
            circleBorderColor: c,
            backgroundColor: h.priceLabelBackgroundColor.value(),
            borderColor: h.priceLabelBorderColor.value(),
            textColor: h.priceLabelTextColor.value(),
            fontSize: h.priceLabelFontSize.value(),
            bold: h.priceLabelBold.value(),
            italic: h.priceLabelItalic.value()
          };

          if (h.showLabel && h.showLabel.value()) {
            var _n51 = l[0],
                _s26 = l[1],
                _o25 = _n51.x < _s26.x ? _n51 : _s26,
                _d18 = _o25 === _n51 ? _s26 : _n51,
                _c16 = h.vertLabelsAlign.value(),
                _p8 = h.horzLabelsAlign.value();

            var _g4;

            _g4 = "left" === _p8 ? _o25.clone() : "right" === _p8 ? _d18.clone() : new r.Point((_n51.x + _s26.x) / 2, (_n51.y + _s26.y) / 2);

            var _f3 = Math.atan((_d18.y - _o25.y) / (_d18.x - _o25.x)),
                _v3 = {
              points: [_g4],
              text: h.text.value(),
              color: h.textColor.value(),
              vertAlign: _c16,
              horzAlign: _p8,
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: h.bold.value(),
              italic: h.italic.value(),
              fontsize: h.fontSize.value(),
              forceTextAlign: !0,
              angle: _f3
            };

            this._customLabelRenderer.setData(_v3), this._renderer.append(this._customLabelRenderer), "middle" === _c16 && (_.excludeBoundaries = null !== (i = (0, a.getTextBoundaries)(this._customLabelRenderer, t, e)) && void 0 !== i ? i : void 0);
          }

          this._renderer.append(this._priceNoteRenderer), this._priceNoteRenderer.setData(_), this._renderer.append(this.createLineAnchor({
            points: l
          }, 0));
        }
      }]);

      return m;
    }(l.LineSourcePaneView);
  },
  61416: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      PriceRangePaneView: function PriceRangePaneView() {
        return v;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(38223),
        o = i(80657),
        a = i(72739),
        l = i(99031),
        d = i(19266),
        h = i(93572),
        c = i(79849),
        u = i(73436),
        p = i(57322),
        _ = i(46501),
        g = i(99734);

    var f = new h.PercentageFormatter();

    var v =
    /*#__PURE__*/
    function (_g$DateAndPriceRangeB2) {
      _inherits(v, _g$DateAndPriceRangeB2);

      function v() {
        var _this81;

        _classCallCheck(this, v);

        _this81 = _possibleConstructorReturn(this, _getPrototypeOf(v).apply(this, arguments)), _this81._topBorderRenderer = new l.TrendLineRenderer(), _this81._bottomBorderRenderer = new l.TrendLineRenderer(), _this81._distanceRenderer = new l.TrendLineRenderer(), _this81._backgroundRenderer = new a.RectangleRenderer(), _this81._labelRenderer = new o.TextRenderer(), _this81._renderer = new d.CompositeRenderer(), _this81._pipFormatter = null, _this81._lastSymbolInfo = null;
        return _this81;
      }

      _createClass(v, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var _this82 = this;

          var i, a, l;
          if (_get(_getPrototypeOf(v.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;

          var d = this._source.properties().childs(),
              h = d.extendLeft.value(),
              g = d.extendRight.value(),
              _this$_points9 = _slicedToArray(this._points, 2),
              v = _this$_points9[0],
              x = _this$_points9[1],
              m = Math.min(v.x, x.x),
              w = Math.max(v.x, x.x);

          d.fillBackground.value() && (this._backgroundRenderer.setData({
            points: [new r.Point(m, v.y), new r.Point(w, x.y)],
            color: "white",
            linewidth: 0,
            backcolor: d.backgroundColor.value(),
            fillBackground: !0,
            transparency: d.backgroundTransparency.value(),
            extendLeft: h,
            extendRight: g
          }), this._renderer.append(this._backgroundRenderer));

          var R = function R(e, t, i) {
            e.setData({
              points: [t, i],
              color: d.linecolor.value(),
              linewidth: d.linewidth.value(),
              linestyle: c.LINESTYLE_SOLID,
              extendleft: h,
              extendright: g,
              leftend: u.LineEnd.Normal,
              rightend: u.LineEnd.Normal
            }), _this82._renderer.append(e);
          };

          var y = m,
              T = w;
          y === T && (h && (y -= 1), g && (T += 1)), R(this._topBorderRenderer, new r.Point(y, v.y), new r.Point(T, v.y)), R(this._bottomBorderRenderer, new r.Point(y, x.y), new r.Point(T, x.y));

          var b = Math.round((v.x + x.x) / 2),
              P = new r.Point(b, v.y),
              L = new r.Point(b, x.y),
              S = this._updateCustomTextRenderer(e, t);

          this._distanceRenderer.setData({
            points: [P, L],
            color: d.linecolor.value(),
            linewidth: d.linewidth.value(),
            linestyle: c.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: u.LineEnd.Normal,
            rightend: Math.abs(P.y - L.y) >= 15 * d.linewidth.value() ? u.LineEnd.Arrow : u.LineEnd.Normal,
            excludeBoundaries: null != S ? S : void 0
          }), this._renderer.append(this._distanceRenderer);

          var C = this._source.points()[0].price,
              M = this._source.points()[1].price,
              I = M - C,
              A = 100 * I / Math.abs(C),
              k = this._model.mainSeries().symbolInfo();

          k && k !== this._lastSymbolInfo && (this._pipFormatter = new p.PipFormatter(k.pricescale, k.minmov, k.type, k.minmove2, k.typespecs), this._lastSymbolInfo = k);
          var N = (0, n.ensureNotNull)(this._source.ownerSource()).formatter(),
              D = null !== (a = null === (i = N.formatChange) || void 0 === i ? void 0 : i.call(N, M, C)) && void 0 !== a ? a : N.format(I),
              B = (0, s.forceLTRStr)(D + " (" + f.format(A) + ") " + (this._pipFormatter ? this._pipFormatter.format(I) : ""));
          var z;
          z = M > C ? new r.Point(.5 * (v.x + x.x), x.y - 2 * d.fontsize.value()) : new r.Point(.5 * (v.x + x.x), x.y + .7 * d.fontsize.value());
          var E = {
            x: 0,
            y: 10
          },
              H = d.fontsize.value(),
              O = {
            points: [z],
            text: B,
            color: d.textcolor.value(),
            font: _.CHART_FONT_FAMILY,
            offsetX: E.x,
            offsetY: E.y,
            padding: 8,
            vertAlign: "middle",
            horzAlign: "center",
            fontsize: H,
            backgroundRoundRect: 4,
            backgroundHorzInflate: .4 * H,
            backgroundVertInflate: .2 * H
          };
          (null === (l = d.fillLabelBackground) || void 0 === l ? void 0 : l.value()) && (O.boxShadow = {
            shadowColor: d.shadow.value(),
            shadowBlur: 4,
            shadowOffsetY: 1
          }, O.backgroundColor = d.labelBackgroundColor.value()), this._labelRenderer.setData(O);

          var V = this._labelRenderer.measure(),
              W = (0, o.calculateLabelPosition)(V, v, x, E, e);

          this._labelRenderer.setPoints([W]), this._renderer.append(this._labelRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer);
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e) {
          return e.getLinesInfo().lines.length > 0;
        }
      }]);

      return v;
    }(g.DateAndPriceRangeBasePaneView);
  },
  75219: function _(e, t, i) {
    "use strict";

    var n = i(81139).ArcWedgeRenderer,
        r = i(60322).FibWedgePaneView,
        s = i(99031).TrendLineRenderer,
        o = i(19266).CompositeRenderer,
        a = i(73436).LineEnd;

    t.ProjectionLinePaneView =
    /*#__PURE__*/
    function (_r49) {
      _inherits(_class10, _r49);

      function _class10(e, t) {
        var _this83;

        _classCallCheck(this, _class10);

        _this83 = _possibleConstructorReturn(this, _getPrototypeOf(_class10).call(this, e, t)), _this83._baseTrendRenderer = new s(), _this83._edgeTrendRenderer = new s(), _this83._arcWedgeRenderer = new n();
        return _this83;
      }

      _createClass(_class10, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateRenderer",
        value: function _updateRenderer() {
          if (!(this._points.length < 2)) {
            var e = new o(),
                t = this._source.properties(),
                i = this._points,
                n = i[0],
                r = i[1],
                s = {
              points: [n, r],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: t.trendline.color.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.trendline.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.Normal,
              rightend: a.Normal
            };

            if (this._baseTrendRenderer.setData(s), e.append(this._baseTrendRenderer), this._points.length < 3) return this.addAnchors(e), void (this._renderer = e);
            var l = i[2],
                d = l.data,
                h = r.subtract(n).length(),
                c = l.subtract(n).normalized();
            (l = n.add(c.scaled(h))).data = d, s = {
              points: [n, l],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: t.trendline.color.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.trendline.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: a.Normal,
              rightend: a.Normal
            }, this._edgeTrendRenderer.setData(s), e.append(this._edgeTrendRenderer);
            var u = this._levels[0],
                p = {};
            p.center = this._points[0], p.radius = u.radius, p.prevRadius = 0, p.edge = this._edge, p.color = t.trendline.color.value(), p.color1 = t.color1.value(), p.color2 = t.color2.value(), p.linewidth = t.linewidth.value(), p.edge1 = this._edge1, p.edge2 = this._edge2, p.p1 = u.p1, p.p2 = u.p2, p.fillBackground = t.fillBackground.value(), p.transparency = t.transparency.value(), p.gradient = !0, this._arcWedgeRenderer.setData(p), e.append(this._arcWedgeRenderer), this.addAnchors(e), this._renderer = e;
          }
        }
      }]);

      return _class10;
    }(r);
  },
  31320: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      RectanglePaneView: function RectanglePaneView() {
        return h;
      }
    });
    var n = i(86441),
        r = i(46501),
        s = i(72739),
        o = i(19266),
        a = i(80657),
        l = i(79191),
        d = i(66103);

    var h =
    /*#__PURE__*/
    function (_l$LineSourcePaneView5) {
      _inherits(h, _l$LineSourcePaneView5);

      function h(e, t) {
        var _this84;

        _classCallCheck(this, h);

        _this84 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e, t)), _this84._rectangleRenderer = new s.RectangleRenderer(), _this84._textRenderer = new a.TextRenderer(), _this84._renderer = null;
        return _this84;
      }

      _createClass(h, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(h.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var e = this._getSource().properties().childs(),
              t = {
            points: this._points,
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: e.fillBackground.value(),
            transparency: e.transparency.value(),
            extendLeft: e.extendLeft.value(),
            extendRight: e.extendRight.value()
          };

          this._rectangleRenderer.setData(t);

          var i = new o.CompositeRenderer();
          i.append(this._rectangleRenderer);
          var s = this._points[0],
              a = this._points[1];

          if (e.showLabel.value()) {
            var _t67 = Math.min(s.x, a.x),
                _o26 = Math.max(s.x, a.x),
                _l17 = Math.min(s.y, a.y),
                _d19 = Math.max(s.y, a.y);

            var _h18, c, u, p;

            var _ = e.fontSize.value() / 3;

            var g,
                f,
                v = 0;

            switch (e.vertLabelsAlign.value()) {
              case "middle":
                p = (_l17 + _d19) / 2, c = "middle", v = _;
                break;

              case "top":
                p = _d19, c = "top";
                break;

              case "bottom":
                p = _l17, c = "bottom";
            }

            switch (e.horzLabelsAlign.value()) {
              case "center":
                u = (_t67 + _o26) / 2, _h18 = "center";
                break;

              case "left":
                u = _t67, _h18 = "left";
                break;

              case "right":
                u = _o26, _h18 = "right";
            }

            "middle" === c && (g = _o26 - _t67 - 2 * v, f = _d19 - _l17);
            var x = {
              points: [new n.Point(u, p)],
              text: e.text.value(),
              fontSize: e.fontSize.value(),
              font: r.CHART_FONT_FAMILY,
              bold: e.bold.value(),
              italic: e.italic.value(),
              horzAlign: _h18,
              vertAlign: c,
              color: e.textColor.value(),
              wordWrapWidth: g,
              maxHeight: f,
              offsetX: 0,
              offsetY: 0,
              boxPaddingVert: _,
              boxPaddingHorz: v,
              forceTextAlign: !0
            };
            this._textRenderer.setData(x), i.append(this._textRenderer);
          }

          this._addAnchors(s, a, i), this._renderer = i;
        }
      }, {
        key: "_addAnchors",
        value: function _addAnchors(e, t, i) {
          var r = new n.Point(e.x, t.y);
          r.data = 2;
          var s = new n.Point(t.x, e.y);
          s.data = 3;
          var o = new n.Point(e.x, .5 * (e.y + t.y));
          o.data = 4;
          var a = new n.Point(t.x, .5 * (e.y + t.y));
          a.data = 5;
          var l = new n.Point(.5 * (e.x + t.x), e.y);
          l.data = 6;
          var h = new n.Point(.5 * (e.x + t.x), t.y);
          h.data = 7, [o, a, l, h].forEach(function (e) {
            return e.square = !0;
          });
          var c = e.x - t.x,
              u = e.y - t.y,
              p = Math.sign(c * u),
              _ = [p < 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p < 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p > 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p > 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, d.PaneCursorType.HorizontalResize, d.PaneCursorType.HorizontalResize, d.PaneCursorType.VerticalResize, d.PaneCursorType.VerticalResize];
          i.append(this.createLineAnchor({
            points: [e, t, r, s, o, a, l, h],
            pointsCursorType: _
          }, 0));
        }
      }]);

      return h;
    }(l.LineSourcePaneView);
  },
  5374: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      RegressionTrendPaneView: function RegressionTrendPaneView() {
        return g;
      }
    });
    var n = i(50151),
        r = i(87095),
        s = i(18807),
        o = i(19266),
        a = i(28621),
        l = i(80657),
        d = i(99031),
        h = i(80101),
        c = i(86441),
        u = i(73436),
        p = i(46501);

    var _ = i(79191);

    var g =
    /*#__PURE__*/
    function (_$LineSourcePaneView3) {
      _inherits(g, _$LineSourcePaneView3);

      function g(e, t) {
        var _this85;

        _classCallCheck(this, g);

        _this85 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this, e, t)), _this85._data = null, _this85._pearsonsLabelRenderer = new l.TextRenderer(), _this85._renderer = null, _this85._renderer = null;
        return _this85;
      }

      _createClass(g, [{
        key: "renderer",
        value: function renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(g.prototype), "_updateImpl", this).call(this), this._data = function (e, t) {
            var i = {
              lines: [],
              pearsons: null
            };
            if (!t.properties().visible.value()) return i;
            var r = e.timeScale(),
                s = t.priceScale(),
                o = e.mainSeries().firstBar();
            if (!s || s.isEmpty() || r.isEmpty() || !o) return i;
            var a = t.startIndex(),
                l = t.endIndex();
            if (null === a || null === l) return i;

            var d = [t.baseLine(), t.downLine(), t.upLine()],
                h = Math.round(r.indexToCoordinate(a)),
                _ = Math.round(r.indexToCoordinate(l)),
                g = t.properties(),
                f = [g.styles.baseLine, g.styles.downLine, g.styles.upLine],
                v = o[4];

            for (var _r50 = 0; _r50 < d.length; _r50++) {
              if (1 != (1 & f[_r50].display.value())) continue;
              var _o27 = (0, n.ensureNotNull)(d[_r50]).startPrice,
                  _a24 = (0, n.ensureNotNull)(d[_r50]).endPrice;
              if (void 0 === _o27 || void 0 === _a24) continue;

              var _l18 = s.priceToCoordinate(_o27, v),
                  _p9 = s.priceToCoordinate(_a24, v),
                  _x2 = new c.Point(h, _l18),
                  m = new c.Point(_, _p9),
                  w = f[_r50].color.value(),
                  R = f[_r50].linewidth.value(),
                  y = f[_r50].linestyle.value(),
                  T = {
                points: [_x2, m],
                width: e.timeScale().width(),
                height: (0, n.ensureNotNull)(t.priceScale()).height(),
                color: w,
                linewidth: R,
                linestyle: y,
                extendleft: !1,
                extendright: g.styles.extendLines.value(),
                leftend: u.LineEnd.Normal,
                rightend: u.LineEnd.Normal
              };

              i.lines.push(T);
            }

            var x = (0, n.ensureNotNull)(t.downLine());

            if (g.styles.showPearsons.value() && void 0 !== x.startPrice) {
              var _e94 = s.priceToCoordinate(x.startPrice, v),
                  _n52 = new c.Point(h, _e94);

              i.pearsons = {
                points: [_n52],
                text: "" + t.pearsons(),
                color: g.styles.downLine.color.value(),
                vertAlign: "top",
                horzAlign: "center",
                font: p.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 4,
                fontsize: 12
              };
            }

            return i;
          }(this._model, this._source), this._renderer = null;
          var e = new o.CompositeRenderer();
          var t = [];

          var i = [this._data.lines[1], this._data.lines[0], this._data.lines[2]].filter(function (e) {
            return !!e;
          }),
              l = this._source.properties().childs().styles.childs().transparency.value();

          for (var _t68 = 1; _t68 < i.length; _t68++) {
            var _n53 = {
              points: [i[_t68].points[0], i[_t68].points[1], i[_t68 - 1].points[0], i[_t68 - 1].points[1]],
              color: i[_t68].color,
              linewidth: i[_t68].linewidth,
              linestyle: i[_t68].linestyle,
              extendleft: !1,
              extendright: i[_t68].extendright,
              backcolor: i[_t68].color,
              transparency: l,
              skipLines: !0,
              fillBackground: !0,
              showMidline: !1
            },
                _r51 = new a.ParallelChannelRenderer(new s.HitTestResult(s.HitTarget.Regular));

            _r51.setData(_n53), e.append(_r51);
          }

          var _ = this._getTransparencyResetLines();

          for (var _n54 = 0; _n54 < i.length; _n54++) {
            var _r52 = new d.TrendLineRenderer();

            _r52.setData(_[_n54]), _r52.setHitTest(new s.HitTestResult(s.HitTarget.Regular)), e.append(_r52), 0 !== _n54 && (t = t.concat(i[_n54].points));
          }

          this._data.pearsons && (this._data.pearsons.color = (0, r.resetTransparency)(this._data.pearsons.color), this._pearsonsLabelRenderer.setData(this._data.pearsons), e.append(this._pearsonsLabelRenderer)), this._data.lines.length >= 1 && e.append(new h.SelectionRenderer({
            points: t,
            bgColors: this._lineAnchorColors(t),
            visible: this.areAnchorsVisible(),
            hittestResult: s.HitTarget.Regular,
            barSpacing: this._model.timeScale().barSpacing()
          })), this._renderer = e;
        }
      }, {
        key: "_getTransparencyResetLines",
        value: function _getTransparencyResetLines() {
          return (0, n.ensureNotNull)(this._data).lines.map(function (e) {
            return _objectSpread({}, e, {
              color: (0, r.resetTransparency)(e.color)
            });
          });
        }
      }]);

      return g;
    }(_.LineSourcePaneView);
  },
  56457: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      RiskRewardPaneView: function RiskRewardPaneView() {
        return A;
      }
    });

    var n = i(86441),
        r = i(50151),
        s = i(44352),
        o = i(79191),
        a = i(99031),
        l = i(80657),
        d = i(72739),
        h = i(18807),
        c = i(19266),
        u = i(93572),
        p = i(87663),
        _ = i(57322),
        g = i(87095),
        f = i(73436),
        v = i(95539),
        x = i(38223),
        m = i(66103),
        w = i(88145),
        R = i(46501),
        y = i(79849);

    var T = [m.PaneCursorType.Default, m.PaneCursorType.HorizontalResize, m.PaneCursorType.VerticalResize, m.PaneCursorType.VerticalResize],
        b = s.t(null, void 0, i(72892)),
        P = s.t(null, {
      context: "line_tool_position"
    }, i(50140)),
        L = s.t(null, {
      context: "line_tool_position"
    }, i(44143)),
        S = s.t(null, void 0, i(53115)),
        C = s.t(null, void 0, i(438)),
        M = s.t(null, void 0, i(15166)),
        I = s.t(null, void 0, i(87061));

    var A =
    /*#__PURE__*/
    function (_o$LineSourcePaneView6) {
      _inherits(A, _o$LineSourcePaneView6);

      function A() {
        var _this86;

        _classCallCheck(this, A);

        _this86 = _possibleConstructorReturn(this, _getPrototypeOf(A).apply(this, arguments)), _this86._percentageFormatter = new u.PercentageFormatter(), _this86._numericFormatter = new p.NumericFormatter(), _this86._pipFormatter = null, _this86._lastSymbolInfo = null, _this86._entryLineRenderer = new a.TrendLineRenderer(), _this86._stopLineRenderer = new a.TrendLineRenderer(), _this86._targetLineRenderer = new a.TrendLineRenderer(), _this86._positionLineRenderer = new a.TrendLineRenderer(), _this86._fullStopBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTarget.MovePoint), new h.HitTestResult(h.HitTarget.MovePoint)), _this86._stopBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTarget.MovePoint), new h.HitTestResult(h.HitTarget.MovePoint)), _this86._fullTargetBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTarget.MovePoint), new h.HitTestResult(h.HitTarget.MovePoint)), _this86._targetBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTarget.MovePoint), new h.HitTestResult(h.HitTarget.MovePoint)), _this86._stopLabelRenderer = new l.TextRenderer(), _this86._middleLabelRenderer = new l.TextRenderer(), _this86._profitLabelRenderer = new l.TextRenderer(), _this86._renderer = new c.CompositeRenderer();
        return _this86;
      }

      _createClass(A, [{
        key: "isLabelVisible",
        value: function isLabelVisible() {
          return this.isHoveredSource() || this.isSelectedSource() || this._source.properties().childs().alwaysShowStats.value();
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          _get(_getPrototypeOf(A.prototype), "_updateImpl", this).call(this, e, t), this._renderer.clear();

          var i = this._model.timeScale(),
              s = this._source.priceScale();

          if (!s || s.isEmpty() || i.isEmpty()) return;

          var o = this._source.points();

          if (o.length < 2 || this._points.length < 2) return;
          var a = (0, r.ensureNotNull)(this._source.ownerSource()),
              l = null == a ? void 0 : a.barsProvider().bars();
          if (!l || l.isEmpty()) return;
          if (null === l.last()) return;

          var d = 4 === o.length,
              h = this._source.lastBarData();

          if (!h) return;

          var c = h.closePrice,
              u = this._source.stopPrice(),
              p = this._source.profitPrice(),
              g = this._source.calculatePL(c),
              f = a.symbolSource().symbolInfo();

          if (!f) return;
          var x = a.firstValue();
          if (null === x) return;

          var m = this._points[v.RiskRewardPointIndex.Entry].y,
              w = s.priceToCoordinate(u, x),
              R = s.priceToCoordinate(p, x),
              y = s.priceToCoordinate(h.closePrice, x),
              b = i.indexToCoordinate(h.index),
              P = this._points[v.RiskRewardPointIndex.Entry].x,
              L = this._points[v.RiskRewardPointIndex.ActualEntry] ? this._points[v.RiskRewardPointIndex.ActualEntry].x : this._points[v.RiskRewardPointIndex.Close].x,
              S = this._points[v.RiskRewardPointIndex.ActualClose] ? this._points[v.RiskRewardPointIndex.ActualClose].x : this._points[v.RiskRewardPointIndex.Close].x,
              C = this._points[v.RiskRewardPointIndex.Close].x,
              M = this._source.entryPrice(),
              I = this._source.stopPrice(),
              A = this._source.profitPrice(),
              k = {
            pl: g,
            isClosed: d,
            entryLevel: m,
            stopLevel: w,
            profitLevel: R,
            closeLevel: y,
            closeBar: b,
            left: P,
            entryX: L,
            right: S,
            edge: C,
            entryPrice: M,
            stopPrice: I,
            profitPrice: A,
            currentPrice: c
          };

          var N = C < -5 || P > t + 5;
          if (this._createBackgroundRenderers(k, this._renderer), this._createLinesRenderers(k, this._renderer), this._createLabelsRenderers(k, this._renderer, f), f !== this._lastSymbolInfo && (this._pipFormatter = new _.PipFormatter(f.pricescale, f.minmov, f.type, f.minmove2, f.typespecs), this._lastSymbolInfo = f), N = [this._profitLabelRenderer, this._stopLabelRenderer, this._middleLabelRenderer].reduce(function (i, n) {
            return i && n.isOutOfScreen(t, e);
          }, N), N) return;

          var D = this._points[0].clone();

          D.data = 0, D.snappingPrice = M;
          var B = new n.Point(P, w);
          B.data = 2, B.square = !0, B.snappingPrice = I;
          var z = new n.Point(P, R);
          z.data = 3, z.square = !0, z.snappingPrice = A;
          var E = new n.Point(C, D.y);
          E.data = 1, E.square = !0, E.snappingIndex = h.index;
          var H = {
            points: [D, E, B, z],
            pointsCursorType: T
          };

          this._renderer.append(this.createLineAnchor(H, 0));
        }
      }, {
        key: "_createBackgroundRenderers",
        value: function _createBackgroundRenderers(e, t) {
          var i = this._source.properties().childs();

          {
            var _t69 = {
              points: [new n.Point(e.left, e.entryLevel), new n.Point(e.edge, e.stopLevel)],
              color: "white",
              linewidth: 0,
              backcolor: i.stopBackground.value(),
              fillBackground: !0,
              transparency: i.stopBackgroundTransparency.value(),
              extendLeft: !1,
              extendRight: !1
            };
            this._fullStopBgRenderer.setData(_t69), this._renderer.append(this._fullStopBgRenderer);
          }

          if (e.pl < 0 && e.entryX !== e.right) {
            var _t70 = new n.Point(e.entryX, e.entryLevel),
                _r53 = new n.Point(e.right, e.closeLevel),
                _s27 = .01 * i.stopBackgroundTransparency.value(),
                _o28 = 100 - 100 * (1 - _s27 * _s27 * _s27),
                _a25 = {
              points: [_t70, _r53],
              color: "white",
              linewidth: 0,
              backcolor: i.stopBackground.value(),
              fillBackground: !0,
              transparency: _o28,
              extendLeft: !1,
              extendRight: !1
            };

            this._stopBgRenderer.setData(_a25), this._renderer.append(this._stopBgRenderer);
          }

          {
            var _t71 = {
              points: [new n.Point(e.left, e.entryLevel), new n.Point(e.edge, e.profitLevel)],
              color: "white",
              linewidth: 0,
              backcolor: i.profitBackground.value(),
              fillBackground: !0,
              transparency: i.profitBackgroundTransparency.value(),
              extendLeft: !1,
              extendRight: !1
            };
            this._fullTargetBgRenderer.setData(_t71), this._renderer.append(this._fullTargetBgRenderer);
          }

          if (e.pl > 0 && e.entryX !== e.right) {
            var _t72 = new n.Point(e.entryX, e.entryLevel),
                _r54 = new n.Point(e.right, e.closeLevel),
                _s28 = .01 * i.profitBackgroundTransparency.value(),
                _o29 = 100 - 100 * (1 - _s28 * _s28 * _s28),
                _a26 = {
              points: [_t72, _r54],
              color: "white",
              linewidth: 0,
              backcolor: i.profitBackground.value(),
              fillBackground: !0,
              transparency: _o29,
              extendLeft: !1,
              extendRight: !1
            };

            this._targetBgRenderer.setData(_a26), this._renderer.append(this._targetBgRenderer);
          }
        }
      }, {
        key: "_createLinesRenderers",
        value: function _createLinesRenderers(e, t) {
          var _this87 = this;

          var i = this._source.properties().childs(),
              r = function r(e, t, n, _r55) {
            var s = {
              points: [t, n],
              color: null != _r55 ? _r55 : i.linecolor.value(),
              linewidth: i.linewidth.value(),
              linestyle: y.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: f.LineEnd.Normal,
              rightend: f.LineEnd.Normal
            };
            e.setData(s), _this87._renderer.append(e);
          };

          if (this._points[v.RiskRewardPointIndex.ActualEntry]) {
            var _t73 = {
              points: [this._points[v.RiskRewardPointIndex.ActualEntry], e.isClosed ? this._points[v.RiskRewardPointIndex.ActualClose] : new n.Point(e.closeBar, e.closeLevel)],
              color: this._source.properties().childs().linecolor.value(),
              linewidth: 1,
              linestyle: y.LINESTYLE_DASHED,
              extendleft: !1,
              extendright: !1,
              leftend: f.LineEnd.Normal,
              rightend: f.LineEnd.Arrow
            };
            this._positionLineRenderer.setData(_t73), this._renderer.append(this._positionLineRenderer);
          }

          {
            var _t74 = new n.Point(e.left, this._points[v.RiskRewardPointIndex.Entry].y),
                _i70 = new n.Point(e.edge, this._points[v.RiskRewardPointIndex.Entry].y);

            r(this._entryLineRenderer, _t74, _i70);
          }
          {
            var _t75 = new n.Point(e.left, e.stopLevel),
                _s29 = new n.Point(e.edge, e.stopLevel);

            r(this._stopLineRenderer, _t75, _s29, i.stopBackground.value());
          }
          {
            var _t76 = new n.Point(e.left, e.profitLevel),
                _s30 = new n.Point(e.edge, e.profitLevel);

            r(this._targetLineRenderer, _t76, _s30, i.profitBackground.value());
          }
        }
      }, {
        key: "_addCenterLabel",
        value: function _addCenterLabel(e, t, i) {
          var n = this._source.properties().childs(),
              r = {
            font: R.CHART_FONT_FAMILY,
            offsetX: 3,
            horzAlign: "center",
            backgroundRoundRect: 4,
            backgroundHorzInflate: 4,
            points: [i.p],
            text: i.txt,
            color: n.textcolor.value(),
            offsetY: i.offsetY,
            vertAlign: i.vertAlign,
            backgroundColor: (0, g.resetTransparency)(i.color),
            fontsize: n.fontsize.value(),
            borderColor: i.border
          };

          return t.setData(r), e.append(t), r;
        }
      }, {
        key: "_creareMiddleLabel",
        value: function _creareMiddleLabel(e, t, i) {
          var s = e.entryPrice,
              o = e.profitPrice,
              a = e.stopPrice,
              l = e.currentPrice,
              d = e.pl,
              h = e.left,
              c = e.edge,
              u = e.isClosed,
              p = Math.abs(s - o) / Math.abs(s - a),
              _ = this._source.properties().childs(),
              g = (0, r.ensureNotNull)(this._source.ownerSource()),
              f = new n.Point((h + c) / 2, Math.round(this._points[0].y));

          var v = "",
              x = "";

          var m = this._numericFormatter.format(Math.round(100 * p) / 100);

          if (this._points[1]) {
            var _e95 = g.formatter();

            if (_e95.formatChange) {
              var _t77 = Math.max(l, s),
                  _i71 = Math.min(l, s);

              x = d >= 0 ? _e95.formatChange(_t77, _i71) : _e95.formatChange(_i71, _t77);
            } else x = _e95.format(d);
          }

          var R = _.qty.value() / _.lotSize.value(),
              y = "futures" === i.type || (0, w.hasCryptoTypespec)(i.typespecs || []) ? Math.round(1e3 * R) / 1e3 : Math.floor(R);

          if (_.compact.value()) v += x ? x + " ~ " : "", v += y + "\n", v += m;else {
            var _e96 = u ? L : P;

            v += x ? b.format({
              status: _e96,
              pnl: x
            }) + ", " : "", v += I.format({
              qty: "" + y
            }) + "\n", v += S.format({
              ratio: m
            }) + " ";
          }

          var T = _.linecolor.value();

          return d < 0 ? T = _.stopBackground.value() : d > 0 && (T = _.profitBackground.value()), this._addCenterLabel(t, this._middleLabelRenderer, {
            p: f,
            txt: v,
            color: T,
            vertAlign: "middle",
            offsetY: 0,
            border: "white"
          });
        }
      }, {
        key: "_createStopLabel",
        value: function _createStopLabel(e, t) {
          var i, s;

          var o = e.stopPrice,
              a = e.entryPrice,
              l = e.left,
              d = e.edge,
              h = e.stopLevel,
              c = this._source.properties().childs(),
              u = (0, r.ensureNotNull)(this._source.ownerSource()),
              p = Math.abs(o - a),
              _ = Math.round(1e4 * p / a) / 100,
              g = new n.Point((l + d) / 2, h);

          var f = "";

          var v = u.formatter(),
              m = null !== (s = null === (i = v.formatChange) || void 0 === i ? void 0 : i.call(v, Math.max(o, a), Math.min(o, a))) && void 0 !== s ? s : v.format(p),
              w = this._percentageFormatter.format(_);

          return f = c.compact.value() ? m + " (" + w + ") " + c.amountStop.value() : C.format({
            stopChange: (0, x.forceLTRStr)(m),
            stopChangePercent: (0, x.forceLTRStr)(this._percentageFormatter.format(_)),
            stopChangePip: this._pipFormatter ? (0, x.forceLTRStr)(this._pipFormatter.format(p)) : "",
            amount: (0, x.forceLTRStr)("" + c.amountStop.value())
          }), this._addCenterLabel(t, this._stopLabelRenderer, {
            p: g,
            txt: f,
            color: c.stopBackground.value(),
            vertAlign: a < o ? "bottom" : "top",
            offsetY: 0
          });
        }
      }, {
        key: "_createTargetLabel",
        value: function _createTargetLabel(e, t) {
          var i, s;

          var o = e.profitPrice,
              a = e.entryPrice,
              l = e.stopPrice,
              d = e.left,
              h = e.edge,
              c = e.profitLevel,
              u = this._source.properties().childs(),
              p = (0, r.ensureNotNull)(this._source.ownerSource()),
              _ = Math.abs(o - a),
              g = Math.round(1e4 * _ / a) / 100,
              f = new n.Point((d + h) / 2, c);

          var v = "";

          var m = p.formatter(),
              w = null !== (s = null === (i = m.formatChange) || void 0 === i ? void 0 : i.call(m, Math.max(o, a), Math.min(o, a))) && void 0 !== s ? s : m.format(_),
              R = this._percentageFormatter.format(g);

          return v = u.compact.value() ? w + " (" + R + ") " + u.amountTarget.value() : M.format({
            profitChange: w,
            profitChangePercent: (0, x.forceLTRStr)(this._percentageFormatter.format(g)),
            profitChangePip: this._pipFormatter ? (0, x.forceLTRStr)(this._pipFormatter.format(_)) : "",
            amount: (0, x.forceLTRStr)("" + u.amountTarget.value())
          }), this._addCenterLabel(t, this._profitLabelRenderer, {
            p: f,
            txt: v,
            color: u.profitBackground.value(),
            vertAlign: a < l ? "top" : "bottom",
            offsetY: 0
          });
        }
      }, {
        key: "_createLabelsRenderers",
        value: function _createLabelsRenderers(e, t, i) {
          var s;
          if (!this.isLabelVisible()) return;

          var o = this._creareMiddleLabel(e, t, i),
              a = this._createStopLabel(e, t),
              l = this._createTargetLabel(e, t),
              d = [this._profitLabelRenderer, this._stopLabelRenderer, this._middleLabelRenderer].reduce(function (e, t) {
            return Math.max(e, t.measure().width);
          }, 0),
              h = e.edge - e.left,
              c = this._anchorRadius();

          if (h - d - c <= 8 && (l && (l.offsetY += c + 8, this._profitLabelRenderer.setData(l)), a && (a.offsetY += c + 8, this._stopLabelRenderer.setData(a)), o)) {
            var _t78;

            if (null === (s = this._source.priceScale()) || void 0 === s ? void 0 : s.isLog()) {
              var _i73 = Math.abs(this._points[0].y - e.stopLevel);

              _t78 = Math.abs(this._points[0].y - e.profitLevel) > _i73 ? -1 : 1;
            } else {
              var _i74 = Math.abs(e.stopPrice - e.entryPrice);

              _t78 = Math.abs(e.profitPrice - e.entryPrice) > _i74 ? -1 : 1;
            }

            var _i72 = e.profitLevel < e.stopLevel ? 1 : -1,
                _a27 = (0, r.ensureDefined)(o.points)[0].add(new n.Point(0, _i72 * _t78 * (.5 * this._middleLabelRenderer.measure().height + c + 8)));

            o.points = [_a27], this._middleLabelRenderer.setData(o);
          }
        }
      }]);

      return A;
    }(o.LineSourcePaneView);
  },
  55832: function _(e, t, i) {
    "use strict";

    var n = i(86441).Point,
        r = i(4652).distanceToLine,
        s = i(79191).LineSourcePaneView,
        o = i(79191).thirdPointCursorType,
        a = i(99031).TrendLineRenderer,
        l = i(79797).PolygonRenderer,
        d = i(19266).CompositeRenderer,
        h = i(73436).LineEnd,
        c = i(66103).PaneCursorType;

    var _i75 = i(79849),
        u = _i75.LINESTYLE_SOLID;

    t.RotatedRectanglePaneView =
    /*#__PURE__*/
    function (_s31) {
      _inherits(_class11, _s31);

      function _class11(e, t) {
        var _this88;

        _classCallCheck(this, _class11);

        _this88 = _possibleConstructorReturn(this, _getPrototypeOf(_class11).call(this, e, t)), _this88._poligonRenderer = new l(), _this88._renderer = null;
        return _this88;
      }

      _createClass(_class11, [{
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(_class11.prototype), "_updateImpl", this).call(this), this._renderer = null, this._distance = 0, 3 === this._points.length && (this._distance = r(this._points[0], this._points[1], this._points[2]).distance), 0 !== this._points.length) {
            var e,
                t,
                i,
                s,
                l = new d(),
                p = this._source.properties(),
                _ = this._points[0],
                g = this._points[1];

            if (2 === this._points.length) {
              (v = {}).points = this._points, v.floatPoints = this._floatPoints, v.width = this._model.timeScale().width(), v.height = this._source.priceScale().height(), v.color = p.color.value(), v.linewidth = 1, v.linestyle = u, v.extendleft = !1, v.extendright = !1, v.leftend = h.Normal, v.rightend = h.Normal;
              var f = new a();
              f.setData(v), l.append(f);
            } else if (3 === this._points.length) {
              var v,
                  x = g.subtract(_),
                  m = new n(x.y, -x.x).normalized().scaled(this._distance),
                  w = m.scaled(-1);
              e = _.add(m), t = g.add(m), i = _.add(w), s = g.add(w), (v = {}).points = [e, t, s, i], v.color = p.color.value(), v.linewidth = this._source.properties().linewidth.value(), v.linestyle = u, v.filled = !0, v.backcolor = p.backgroundColor.value(), v.fillBackground = p.fillBackground.value(), v.transparency = p.transparency.value(), this._poligonRenderer.setData(v), l.append(this._poligonRenderer);
            }

            var R = [];
            R.push(_), this._points.length >= 2 && R.push(g);
            var y = [c.Default, c.Default];

            if (3 === this._points.length) {
              e.data = 2, i.data = 2, t.data = 2, s.data = 2, R.push(e, i, t, s);
              var T = o(_, g);
              y.push(T, T, T, T);
            }

            l.append(this.createLineAnchor({
              points: R,
              pointsCursorType: y
            }, 0)), this._renderer = l;
          }
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }]);

      return _class11;
    }(s);
  },
  26294: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      SignpostPaneView: function SignpostPaneView() {
        return L;
      }
    });

    var n = i(86441),
        r = i(48891),
        s = i(19266),
        o = i(66103),
        a = i(18807),
        l = i(79191),
        d = i(85573),
        h = i(46501),
        c = i(4652),
        u = i(34026),
        p = i(50151),
        _ = i(38325),
        g = i(80657),
        f = i(45197);

    function v(e) {
      return void 0 === e ? 0 : e.poleTailHeight + 2 * e.circleRadius;
    }

    function x(e) {
      return e.poleStartY;
    }

    function m(e) {
      return e.inverseAnchorPosition ? e.anchorY : e.anchorY + (e.labelHeight + v(e.plate)) * e.direction;
    }

    function w(e) {
      return e.inverseAnchorPosition ? e.anchorY + v(e.plate) * e.direction : e.anchorY + e.labelHeight * e.direction;
    }

    var R =
    /*#__PURE__*/
    function () {
      function R(e, t) {
        _classCallCheck(this, R);

        this._data = null, this._hitTestResult = e, this._phantomMode = Boolean(t);
      }

      _createClass(R, [{
        key: "setData",
        value: function setData(e) {
          if (null === e) return void (this._data = null);
          this._data = _objectSpread({}, e, {
            labelHeight: 0,
            labelRenderer: new g.TextRenderer()
          });
          var t = this._data,
              i = t.label,
              r = {
            offsetX: 0,
            offsetY: 0,
            points: [new n.Point(t.x, t.anchorY)],
            forceCalculateMaxLineWidth: !0,
            vertAlign: -1 === i.labelDirection ? "bottom" : "top",
            horzAlign: "center",
            horzTextAlign: "center",
            font: i.labelFont,
            fontSize: i.labelFontSize,
            bold: i.labelFontBold,
            italic: i.labelFontItalic,
            backgroundRoundRect: i.labelBorderRadius,
            padding: i.labelPadding,
            boxPaddingVert: i.labelBoxPaddingVert,
            boxPaddingHorz: i.labelBoxPaddingHorz,
            wordWrapWidth: i.labelWordWrapWidth,
            color: i.labelColor,
            borderColor: i.labelBorderColor,
            borderWidth: 1,
            backgroundColor: i.labelBackgroundColor,
            text: i.text
          };

          if (t.labelRenderer.setData(r), this._data.labelHeight = this._data.labelRenderer.measure().height, t.inverseAnchorPosition) {
            var _e97 = (0, p.ensureDefined)(r.points);

            r.points = [new n.Point(_e97[0].x, w(t))];
          } else {
            var _e98 = 1 === t.direction ? Math.min(t.poleStartY - this._data.labelHeight, t.anchorY) : Math.max(t.poleStartY + this._data.labelHeight, t.anchorY);

            t.anchorY !== _e98 && (t.anchorY = _e98, r.points = [new n.Point(t.x, _e98)]);
          }

          t.labelRenderer.setData(r);
        }
      }, {
        key: "itemAnchorY",
        value: function itemAnchorY() {
          return null === this._data ? null : this._data.anchorY;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data) return null;

          var _ref3 = function (e, t) {
            var i = (0, _.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3,
                r = e.x,
                s = e.plate,
                o = (0, c.distanceToSegment)(new n.Point(r, x(e)), new n.Point(r, m(e)), t).distance < i;
            var a = !1;

            if (!o && void 0 !== s) {
              var _o30 = e.inverseAnchorPosition ? e.anchorY + s.circleRadius * e.direction : e.anchorY + (e.labelHeight + s.poleTailHeight + s.circleRadius) * e.direction;

              a = s.circleRadius > 0 && (0, u.pointInCircle)(t, new n.Point(r, _o30), s.circleRadius + i);
            }

            return [o, a, !o && !a && null !== e.labelRenderer.hitTest(t)];
          }(this._data, e),
              _ref4 = _slicedToArray(_ref3, 3),
              i = _ref4[0],
              r = _ref4[1],
              s = _ref4[2];

          if (i || r || s) {
            var _e99 = {
              hideCrosshairLinesOnHover: !0,
              activeItem: i || r ? this._data.itemIndex : this._data.label.labelIndex
            };
            return s ? _e99.areaName = a.AreaName.Text : r && (_e99.areaName = a.AreaName.Style), new a.HitTestResult(this._hitTestResult, _e99);
          }

          return null;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          if (null === this._data) return;
          e.save(), this._phantomMode && (e.globalAlpha = .5);
          var _this$_data4 = this._data,
              i = _this$_data4.poleColor,
              n = _this$_data4.emojiRadius,
              r = t.pixelRatio,
              s = Math.max(1, Math.floor(r)),
              o = s % 2 ? .5 : 0;
          e.beginPath(), e.strokeStyle = i, e.lineWidth = s;
          var a = Math.round(this._data.x * r) + o;
          e.moveTo(a, Math.round(x(this._data) * r)), e.lineTo(a, Math.round(m(this._data) * r)), void 0 !== this._data.plate && 0 !== this._data.plate.poleTailHeight && (e.moveTo(a, Math.round(w(this._data) * r)), e.lineTo(a, Math.round(function (e) {
            var t, i;
            var n = null !== (i = null === (t = e.plate) || void 0 === t ? void 0 : t.poleTailHeight) && void 0 !== i ? i : 0;
            return e.inverseAnchorPosition ? w(e) - n * e.direction : w(e) + n * e.direction;
          }(this._data) * r))), e.stroke(), void 0 !== this._data.plate && function (e, t, i, n, r) {
            var s = r.pixelRatio,
                o = i.circleRadius,
                a = i.poleTailHeight,
                l = i.circleBorderColor,
                d = i.circleBackgroundColor;
            e.strokeStyle = l, e.fillStyle = d;

            var h = (0, f.fillScaledRadius)(o, s),
                c = Math.round(t.x * s),
                u = t.inverseAnchorPosition ? Math.round(t.anchorY * s) + Math.round(o * s) * t.direction : Math.round(t.anchorY * s) + Math.round((t.labelHeight + a + o) * s) * t.direction,
                p = Math.max(1, Math.floor(s)) % 2 / 2,
                _ = c + p,
                g = u + p;

            if (e.shadowOffsetY = 1, e.shadowColor = i.shadowColor, e.shadowBlur = 4, e.beginPath(), e.arc(_, g, h, 0, 2 * Math.PI, !0), e.closePath(), e.fill(), e.shadowColor = "transparent", t.svgRenderer) {
              var _i76 = 2 * (0, f.fillScaledRadius)(n, s);

              t.svgRenderer.render(e, {
                targetViewBox: {
                  x: _ - _i76 / 2,
                  y: g - _i76 / 2,
                  width: _i76,
                  height: _i76
                }
              });
            }

            var v = Math.round(i.circleBorderWidth * s),
                x = (0, f.strokeScaledRadius)(o, s, v);

            if (e.lineWidth = v, e.beginPath(), e.arc(_, g, x, 0, 2 * Math.PI, !0), e.closePath(), e.stroke(), i.outsideBorderWidth) {
              e.save();

              var _t79 = Math.round(i.outsideBorderWidth * s),
                  _n55 = x + v / 2 + _t79 / 2;

              e.lineWidth = _t79, e.strokeStyle = i.outsideBorderColor, e.beginPath(), e.arc(_, g, _n55, 0, 2 * Math.PI, !0), e.closePath(), e.stroke(), e.restore();
            }
          }(e, this._data, this._data.plate, n, t), this._data.labelRenderer.draw(e, t), e.restore();
        }
      }]);

      return R;
    }();

    var y = i(68616),
        T = i(69798);
    var b = {
      circleBorderColor: (0, r.getHexColorByName)("color-cold-gray-900"),
      labelBackgroundColor: (0, r.getHexColorByName)("color-cold-gray-900"),
      labelBorderColor: (0, r.getHexColorByName)("color-cold-gray-800"),
      labelTextColor: (0, r.getHexColorByName)("color-cold-gray-200"),
      poleColor: (0, r.getHexColorByName)("color-cold-gray-500"),
      shadowColor: "rgba(0,0,0,0.4)",
      selectionColor: (0, r.getHexColorByName)("color-tv-blue-500")
    },
        P = {
      circleBorderColor: (0, r.getHexColorByName)("color-white"),
      labelBackgroundColor: (0, r.getHexColorByName)("color-white"),
      labelBorderColor: (0, r.getHexColorByName)("color-cold-gray-150"),
      labelTextColor: (0, r.getHexColorByName)("color-cold-gray-900"),
      poleColor: (0, r.getHexColorByName)("color-cold-gray-500"),
      shadowColor: "rgba(0,0,0,0.2)",
      selectionColor: (0, r.getHexColorByName)("color-tv-blue-500")
    };

    var L =
    /*#__PURE__*/
    function (_l$LineSourcePaneView6) {
      _inherits(L, _l$LineSourcePaneView6);

      function L(e, t) {
        var _this89;

        _classCallCheck(this, L);

        _this89 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, e, t)), _this89._renderer = new s.CompositeRenderer(), _this89._emojiCache = null, _this89._destroyed = !1, _this89._signpostRenderer = new R(a.HitTarget.MovePoint, e.isPhantom()), e.properties().childs().emoji.subscribe(_assertThisInitialized(_this89), _this89._updateEmoji), _this89._updateEmoji();
        return _this89;
      }

      _createClass(L, [{
        key: "destroy",
        value: function destroy() {
          this._source.properties().childs().emoji.unsubscribeAll(this), this._destroyed = !0;
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          if (_get(_getPrototypeOf(L.prototype), "_updateImpl", this).call(this), this._renderer.clear(), !this._updateTimelineRenderer(e)) return;
          if (this._renderer.append(this._signpostRenderer), this._source.isPhantom()) return;

          var i = this._itemAnchorY();

          if (null === i) return;
          var r = this._points[0],
              s = new n.Point(r.x, i);
          s.data = r.data, s.square = !0, this._renderer.append(this.createLineAnchor({
            points: [s],
            pointsCursorType: [o.PaneCursorType.VerticalResize]
          }, 0));
        }
      }, {
        key: "_itemAnchorY",
        value: function _itemAnchorY() {
          return this._signpostRenderer.itemAnchorY();
        }
      }, {
        key: "_updateTimelineRenderer",
        value: function _updateTimelineRenderer(e) {
          var t;

          var i = this._source.ownerSource();

          if (null === i) return !1;

          var n = this._model.timeScale(),
              r = i.priceScale(),
              s = i.firstValue();

          if (n.isEmpty() || null === r || r.isEmpty() || null === s) return !1;

          var o = this._model.dark().value() ? b : P,
              a = this._model.mainSeries(),
              l = this._source.properties().childs(),
              c = l.position.value(),
              u = this._source.customEvent(),
              p = i === a ? (0, d.getSeriesPosition)(a, u) : (0, d.getNoDataPosition)(u, r, s);

          if (null === p) return !1;

          var _ = n.indexToCoordinate(p.index),
              g = r.priceToCoordinate(p.price, s),
              f = l.showImage.value();

          var v = (0, d.positionToCoordinate)(c, e, g, p.positionPointDirection);
          v >= -1e-10 && v <= e + 1e-10 && (v = Math.min(e - 2, Math.max(2, v)));
          var x = p.visualDirection !== p.positionPointDirection,
              m = p.visualDirection,
              w = {
            emojiRadius: 16,
            poleColor: o.poleColor,
            svgRenderer: null === (t = this._emojiCache) || void 0 === t ? void 0 : t.emojiSvgRenderer,
            itemIndex: 1,
            label: {
              labelIndex: 1,
              labelDirection: p.positionPointDirection,
              labelFont: h.CHART_FONT_FAMILY,
              labelFontSize: l.fontSize.value(),
              labelFontBold: l.bold.value(),
              labelFontItalic: l.italic.value(),
              labelBorderRadius: 4,
              labelPadding: 3,
              labelBoxPaddingVert: 6,
              labelBoxPaddingHorz: 8,
              labelWordWrapWidth: 134,
              labelColor: o.labelTextColor,
              labelBorderColor: o.labelBorderColor,
              labelBackgroundColor: o.labelBackgroundColor,
              text: l.text.value()
            },
            x: _,
            anchorY: v,
            poleStartY: p.poleStartY,
            direction: m * (x ? -1 : 1),
            inverseAnchorPosition: x
          };
          return f && (w.plate = {
            circleBackgroundColor: l.backgroundsColors.value(),
            outsideBorderWidth: 0,
            circleBorderColor: o.circleBorderColor,
            circleBorderWidth: 1,
            poleTailHeight: l.text.value() ? 10 : 0,
            circleRadius: 35,
            shadowColor: o.shadowColor,
            outsideBorderColor: o.selectionColor
          }), this._signpostRenderer.setData(w), !0;
        }
      }, {
        key: "_updateEmoji",
        value: function _updateEmoji() {
          var e, t, n, r, s, o, _ref5, _ref6, a, l;

          return regeneratorRuntime.async(function _updateEmoji$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  t = this._source.properties().childs().emoji.value();

                  if (!(null !== this._emojiCache && this._emojiCache.emoji === t)) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  null !== this._emojiCache && (null === (e = this._emojiCache.abortController) || void 0 === e || e.abort(), this._emojiCache.abortController = void 0);
                  n = (0, y.getTwemojiUrl)(t, "svg"), r = new AbortController(), s = (0, T.fetch)(n, {
                    signal: r.signal
                  }).then(function (e) {
                    return e.text();
                  }), o = {
                    emoji: t,
                    abortController: r
                  };
                  this._emojiCache = o;
                  _context.next = 8;
                  return regeneratorRuntime.awrap(Promise.all([s, i.e(2616).then(i.bind(i, 50765))]));

                case 8:
                  _ref5 = _context.sent;
                  _ref6 = _slicedToArray(_ref5, 2);
                  a = _ref6[0];
                  l = _ref6[1].svgRenderer;
                  !this._destroyed && o.abortController && (o.emojiSvgRenderer = l(a), this._model.updateSource(this._source));

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }]);

      return L;
    }(l.LineSourcePaneView);
  },
  5362: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      SineLinePaneView: function SineLinePaneView() {
        return h;
      }
    });
    var n = i(86441),
        r = i(79191),
        s = i(19266),
        o = i(15187),
        a = i(18807),
        l = i(68441);

    var d =
    /*#__PURE__*/
    function (_o$MediaCoordinatesPa3) {
      _inherits(d, _o$MediaCoordinatesPa3);

      function d(e) {
        var _this90;

        _classCallCheck(this, d);

        _this90 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this)), _this90._data = e;
        return _this90;
      }

      _createClass(d, [{
        key: "hitTest",
        value: function hitTest(e, t) {
          var i = (e.x - this._data.point.x) * Math.PI / this._data.width;
          var n = Math.sin(i - Math.PI / 2) * this._data.height / 2;
          return n = this._data.point.y + n + this._data.height / 2, Math.abs(n - e.y) <= 3 ? new a.HitTestResult(a.HitTarget.MovePoint) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t = e.context;
          t.strokeStyle = this._data.color, t.lineWidth = this._data.lineWidth, (0, l.setLineStyle)(t, this._data.lineStyle), t.beginPath(), t.moveTo(this._data.point.x, this._data.point.y);
          var i = Math.max(1, this._data.width / 30),
              n = e.mediaSize.width - this._data.point.x + i;

          for (var _e100 = 1; _e100 <= n; _e100 += i) {
            var _i77 = _e100 * Math.PI / this._data.width,
                _n56 = Math.sin(_i77 - Math.PI / 2) * this._data.height / 2;

            t.lineTo(this._data.point.x + _e100, this._data.point.y + _n56 + this._data.height / 2);
          }

          t.stroke();
        }
      }]);

      return d;
    }(o.MediaCoordinatesPaneRenderer);

    var h =
    /*#__PURE__*/
    function (_r$LineSourcePaneView10) {
      _inherits(h, _r$LineSourcePaneView10);

      function h(e, t) {
        var _this91;

        _classCallCheck(this, h);

        _this91 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e, t)), _this91._renderer = new s.CompositeRenderer();
        return _this91;
      }

      _createClass(h, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          if (_get(_getPrototypeOf(h.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2) return;

          var _this$_source$points21 = this._source.points(),
              _this$_source$points22 = _slicedToArray(_this$_source$points21, 2),
              i = _this$_source$points22[0],
              r = _this$_source$points22[1];

          if (0 === 2 * Math.abs(i.index - r.index)) return void this.addAnchors(this._renderer);

          var _this$_points10 = _slicedToArray(this._points, 2),
              s = _this$_points10[0],
              o = _this$_points10[1],
              a = Math.abs(s.x - o.x),
              l = o.y - s.y,
              h = this._source.properties().childs(),
              c = h.linewidth.value();

          if (s.y < -c && o.y < -c || s.y > e + c && o.y > e + c) return;
          var u = 2 * a,
              p = s.x > 0 ? s.x - Math.ceil(s.x / u) * u : s.x + Math.floor(-s.x / u) * u,
              _ = {
            point: new n.Point(p, s.y),
            width: a,
            height: l,
            color: h.linecolor.value(),
            lineWidth: h.linewidth.value(),
            lineStyle: h.linestyle.value()
          };
          this._renderer.append(new d(_)), this.addAnchors(this._renderer);
        }
      }]);

      return h;
    }(r.LineSourcePaneView);
  },
  15378: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      StickerPaneView: function StickerPaneView() {
        return r;
      }
    });
    var n = i(50761);

    var r =
    /*#__PURE__*/
    function (_n$SvgIconPaneView3) {
      _inherits(r, _n$SvgIconPaneView3);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_iconColor",
        value: function _iconColor() {
          return null;
        }
      }]);

      return r;
    }(n.SvgIconPaneView);
  },
  44666: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      StudyLineDataSourceAnchorsPaneView: function StudyLineDataSourceAnchorsPaneView() {
        return r;
      }
    });
    var n = i(79191);

    var r =
    /*#__PURE__*/
    function (_n$LineSourcePaneView6) {
      _inherits(r, _n$LineSourcePaneView6);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
      }

      _createClass(r, [{
        key: "renderer",
        value: function renderer() {
          return this._invalidated && (this._updateImpl(), this._invalidated = !1), this.createLineAnchor({
            points: this._getPoints()
          }, 0);
        }
      }]);

      return r;
    }(n.LineSourcePaneView);
  },
  50761: function _(e, t, i) {
    "use strict";

    i.d(t, {
      SvgIconPaneView: function SvgIconPaneView() {
        return g;
      }
    });
    var n = i(86441),
        r = i(25422),
        s = i(50151),
        o = i(87095),
        a = i(19266),
        l = i(66103),
        d = i(79191),
        h = i(48891),
        c = i(15187),
        u = i(18807);
    var p = (0, h.getHexColorByName)("color-tv-blue-600");

    var _ =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa5) {
      _inherits(_, _c$MediaCoordinatesPa5);

      function _() {
        var _this92;

        _classCallCheck(this, _);

        _this92 = _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments)), _this92._data = null;
        return _this92;
      }

      _createClass(_, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data) return null;
          var _this$_data5 = this._data,
              i = _this$_data5.size,
              n = _this$_data5.angle,
              s = _this$_data5.point,
              o = (0, r.rotationMatrix)(-n),
              a = (0, r.transformPoint)(o, e.subtract(s));
          return Math.abs(a.y) <= i / 2 && Math.abs(a.x) <= i / 2 ? new u.HitTestResult(u.HitTarget.MovePoint) : null;
        }
      }, {
        key: "isOutOfScreen",
        value: function isOutOfScreen(e, t) {
          if (null === this._data) return !0;
          var _this$_data6 = this._data,
              i = _this$_data6.size,
              n = _this$_data6.point,
              r = _this$_data6.angle;
          var s;
          return s = r % (Math.PI / 2) == 0 ? i / 2 : Math.sqrt(Math.pow(i, 2) * 2) / 2, n.x + s < 0 || n.x - s > t || n.y + s < 0 || n.y - s > e;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var _this$_data7 = this._data,
              t = _this$_data7.size,
              i = _this$_data7.svg,
              n = _this$_data7.point,
              r = _this$_data7.angle,
              s = _this$_data7.color,
              o = _this$_data7.background,
              a = _this$_data7.selected,
              l = e.context;
          l.translate(n.x, n.y);
          var d = r - Math.PI / 2;
          l.rotate(d);
          var h = t / 2;
          a && (l.fillStyle = o, l.strokeStyle = p, l.beginPath(), l.rect(-h, -h, t, t), l.closePath(), l.fill(), l.stroke()), i && (l.translate(-h, -h), null !== s && (l.fillStyle = s), i.render(l, {
            targetViewBox: {
              x: 0,
              y: 0,
              width: t,
              height: t
            },
            doNotApplyColors: null !== s
          }));
        }
      }]);

      return _;
    }(c.MediaCoordinatesPaneRenderer);

    var g =
    /*#__PURE__*/
    function (_d$LineSourcePaneView2) {
      _inherits(g, _d$LineSourcePaneView2);

      function g(e, t, i) {
        var _this93;

        _classCallCheck(this, g);

        _this93 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this, e, t)), _this93._iconRenderer = new _(), _this93._renderer = new a.CompositeRenderer(), _this93._svg = i;
        return _this93;
      }

      _createClass(g, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          if (_get(_getPrototypeOf(g.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 1) return;

          var i = this._source.properties().childs(),
              s = i.size.value(),
              o = {
            point: this._points[0],
            color: this._iconColor(),
            size: s,
            svg: this._svg,
            angle: i.angle.value(),
            selected: this.areAnchorsVisible(),
            background: this._calculateBackgroundColor()
          };

          this._iconRenderer.setData(o), this._iconRenderer.isOutOfScreen(e, t) || this._renderer.append(this._iconRenderer);

          var a = this._points[0],
              h = this._source.getAnchorLimit();

          var c = new n.Point(Math.max(h, s) / 2, 0),
              u = new n.Point(0, Math.max(h, s) / 2);
          var p = (0, r.rotationMatrix)(i.angle.value());
          c = (0, r.transformPoint)(p, c), u = (0, r.transformPoint)(p, u);

          var _ = a.add(c);

          _.data = 0, _.nonDiscreteIndex = !0;
          var g = a.subtract(c);
          g.data = 1, g.nonDiscreteIndex = !0;
          var f = a.add(u);
          f.data = 2, f.square = !0, f.nonDiscreteIndex = !0;
          var v = a.subtract(u);
          v.data = 3, v.square = !0, v.nonDiscreteIndex = !0;
          var x = (0, d.thirdPointCursorType)(_, g),
              m = [l.PaneCursorType.Default, l.PaneCursorType.Default, x, x];

          this._renderer.append(this.createLineAnchor({
            points: [_, g, f, v],
            pointsCursorType: m
          }, 0));
        }
      }, {
        key: "_calculateBackgroundColor",
        value: function _calculateBackgroundColor() {
          return (0, o.generateColor)(this._model.backgroundColorAtYPercentFromTop(this._points[0].y / (0, s.ensureNotNull)(this._model.paneForSource(this._source)).height()), 60, !0);
        }
      }]);

      return g;
    }(d.LineSourcePaneView);
  },
  62912: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TextPaneView: function TextPaneView() {
        return _;
      }
    });
    var n = i(50151),
        r = i(86441),
        s = i(46501),
        o = i(66103),
        a = i(80657),
        l = i(19266),
        d = i(80101),
        h = i(78211),
        c = i(18807),
        u = i(79191);
    var p = [o.PaneCursorType.HorizontalResize];

    var _ =
    /*#__PURE__*/
    function (_u$LineSourcePaneView6) {
      _inherits(_, _u$LineSourcePaneView6);

      function _(e, t, i, n, r, s, o, l) {
        var _this94;

        _classCallCheck(this, _);

        _this94 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this, e, t)), _this94._textRenderer = new a.TextRenderer(), _this94._noSelection = !1, _this94._renderer = null, _this94._offsetX = i, _this94._offsetY = n, _this94._vertAlign = r, _this94._horzAlign = s, _this94._forceTextAlign = Boolean(o), _this94._noSelection = !1, _this94._renderer = null, _this94._recalculateSourcePointsOnFirstUpdate = l;
        return _this94;
      }

      _createClass(_, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "disableSelection",
        value: function disableSelection() {
          this._noSelection = !0;
        }
      }, {
        key: "isEditMode",
        value: function isEditMode() {
          return !this._getModel().readOnly();
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          _get(_getPrototypeOf(_.prototype), "_updateImpl", this).call(this, e, t), this._renderer = null;

          var i = this._getSource(),
              o = i.priceScale();

          if (!o || o.isEmpty()) return;

          var a = i.properties().childs(),
              u = this._getModel(),
              _ = {
            text: a.text.value(),
            color: a.color.value(),
            fontSize: a.fontsize.value(),
            boxPadding: a.fontsize.value() / 6,
            font: s.CHART_FONT_FAMILY,
            vertAlign: this._vertAlign || "top",
            horzAlign: this._horzAlign || "left",
            offsetX: this._offsetX || 0,
            offsetY: this._offsetY || 0,
            forceTextAlign: this._forceTextAlign
          };

          if (_.points = i.isFixed() ? [(0, n.ensureDefined)(i.fixedPoint())] : this._points, a.fillBackground && a.fillBackground.value() && (_.backgroundColor = a.backgroundColor.value()), a.drawBorder && a.drawBorder.value() && (_.borderColor = a.borderColor.value()), a.wordWrap && a.wordWrap.value() && (_.wordWrapWidth = a.wordWrapWidth.value()), _.bold = a.bold && a.bold.value(), _.italic = a.italic && a.italic.value(), _.highlightBorder = u.selection().isSelected(i), !i.isFixed() && a.fixedSize && !a.fixedSize.value()) {
            _.scaleX = u.timeScale().barSpacing() / i.barSpacing();

            var _e101 = (0, n.ensureNotNull)(o.priceRange());

            var _t80 = o.height() / _e101.length();

            var _r56 = o.logFormula();

            i.isPriceDencityLog() && !o.isLog() && (_t80 = o.height() / ((0, h.toLog)(_e101.maxValue(), _r56) - (0, h.toLog)(_e101.minValue(), _r56))), !i.isPriceDencityLog() && o.isLog() && (_t80 = o.height() / ((0, h.fromLog)(_e101.maxValue(), _r56) - (0, h.fromLog)(_e101.minValue(), _r56)));

            var _s32 = i.priceDencity();

            void 0 !== _s32 && (_.scaleY = _t80 / _s32), (void 0 === _s32 || void 0 === _.scaleY || _.scaleY <= 0) && delete _.scaleY;
          }

          if (this._textRenderer.setData(_), this._textRenderer.isOutOfScreen(t, e)) return;
          var g = 1 === _.points.length;

          if (g && void 0 !== this._recalculateSourcePointsOnFirstUpdate) {
            this._renderer = null;

            var _e102 = this._textRenderer.measure();

            return this._recalculateSourcePointsOnFirstUpdate(_e102.width, _e102.height), void (this._recalculateSourcePointsOnFirstUpdate = void 0);
          }

          if (g && !this._noSelection) {
            var _e103 = new l.CompositeRenderer();

            _e103.append(this._textRenderer);

            var _t81 = _.points[0].clone(),
                _i78 = this._textRenderer.measure(),
                _n57 = _i78.width,
                _s33 = _i78.height;

            if (_.wordWrapWidth) {
              var _i79 = new r.Point(_t81.x + _n57, _t81.y + _s33 / 2);

              _i79.data = 1, _e103.append(this.createLineAnchor({
                points: [_i79],
                pointsCursorType: p
              }, 1));
            }

            var _o31 = new r.Point(_t81.x + _n57 / 2, _t81.y + _s33);

            return _o31.data = 0, _e103.append(new d.SelectionRenderer({
              points: [_o31],
              bgColors: this._lineAnchorColors([_o31]),
              visible: this.areAnchorsVisible(),
              hittestResult: c.HitTarget.MovePoint,
              barSpacing: u.timeScale().barSpacing()
            })), void (this._renderer = _e103);
          }

          this._renderer = this._textRenderer;
        }
      }]);

      return _;
    }(u.LineSourcePaneView);
  },
  90042: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      LineToolThreeDrivesPaneView: function LineToolThreeDrivesPaneView() {
        return u;
      }
    });
    var n = i(79849),
        r = i(19266),
        s = i(80657),
        o = i(87663),
        a = i(99031),
        l = i(73436),
        d = i(79797),
        h = i(79191),
        c = i(46501);

    var u =
    /*#__PURE__*/
    function (_h$LineSourcePaneView3) {
      _inherits(u, _h$LineSourcePaneView3);

      function u() {
        var _this95;

        _classCallCheck(this, u);

        _this95 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this95._numericFormatter = new o.NumericFormatter(), _this95._retrace1LabelRenderer = new s.TextRenderer(), _this95._retrace12LabelRenderer = new s.TextRenderer(), _this95._polyLineRenderer = new d.PolygonRenderer(), _this95._renderer = null;
        return _this95;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer = null;
          var e = NaN,
              t = NaN;

          if (this._source.points().length >= 4) {
            var _this$_source$points23 = this._source.points(),
                _this$_source$points24 = _slicedToArray(_this$_source$points23, 4),
                _t82 = _this$_source$points24[1],
                _i80 = _this$_source$points24[2],
                _n58 = _this$_source$points24[3];

            e = Math.round(100 * Math.abs((_n58.price - _i80.price) / (_i80.price - _t82.price))) / 100;
          }

          if (this._source.points().length >= 6) {
            var _this$_source$points25 = this._source.points(),
                _this$_source$points26 = _slicedToArray(_this$_source$points25, 6),
                _e104 = _this$_source$points26[3],
                _i81 = _this$_source$points26[4],
                _n59 = _this$_source$points26[5];

            t = Math.round(100 * Math.abs((_n59.price - _i81.price) / (_i81.price - _e104.price))) / 100;
          }

          if (this._points.length < 2) return;

          var i = this._source.properties().childs(),
              s = new r.CompositeRenderer(),
              o = function o(e, t) {
            return {
              points: [e],
              text: t,
              color: i.textcolor.value(),
              vertAlign: "middle",
              horzAlign: "center",
              font: c.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: i.bold && i.bold.value(),
              italic: i.italic && i.italic.value(),
              fontsize: i.fontsize.value(),
              backgroundColor: i.color.value(),
              backgroundRoundRect: 4
            };
          },
              d = function d(e, t) {
            return {
              points: [e, t],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal
            };
          },
              h = {
            points: this._points,
            color: i.color.value(),
            linewidth: i.linewidth.value(),
            linestyle: n.LINESTYLE_SOLID,
            leftend: l.LineEnd.Normal,
            rightend: l.LineEnd.Normal,
            backcolor: "rgba(0, 0, 0, 0)",
            fillBackground: !1,
            filled: !1
          };

          if (this._polyLineRenderer.setData(h), s.append(this._polyLineRenderer), !isNaN(e)) {
            var _t83 = new a.TrendLineRenderer();

            _t83.setData(d(this._points[1], this._points[3])), s.append(_t83);

            var _i82 = o(this._points[1].add(this._points[3]).scaled(.5), this._numericFormatter.format(e));

            this._retrace1LabelRenderer.setData(_i82), s.append(this._retrace1LabelRenderer);
          }

          if (!isNaN(t)) {
            var _e105 = new a.TrendLineRenderer();

            _e105.setData(d(this._points[3], this._points[5])), s.append(_e105);

            var _i83 = o(this._points[5].add(this._points[3]).scaled(.5), this._numericFormatter.format(t));

            this._retrace12LabelRenderer.setData(_i83), s.append(this._retrace12LabelRenderer);
          }

          this.addAnchors(s), this._renderer = s;
        }
      }]);

      return u;
    }(h.LineSourcePaneView);
  },
  65557: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TimeCyclesPaneView: function TimeCyclesPaneView() {
        return c;
      }
    });
    var n = i(86441),
        r = i(19266),
        s = i(79191),
        o = i(87095),
        a = i(18807),
        l = i(68441),
        d = i(15187);

    var h =
    /*#__PURE__*/
    function (_d$MediaCoordinatesPa3) {
      _inherits(h, _d$MediaCoordinatesPa3);

      function h() {
        var _this96;

        _classCallCheck(this, h);

        _this96 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this96._data = null;
        return _this96;
      }

      _createClass(h, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || e.y > this._data.point.y) return null;
          if (e.x < this._data.point.x || e.x > this._data.point.x + this._data.width) return null;
          var t = new n.Point(this._data.point.x + this._data.width / 2, this._data.point.y);
          var i = e.subtract(t);
          var r = this._data.height / this._data.width;
          i = new n.Point(i.x, i.y / r);
          var s = i.length();
          return Math.abs(s - this._data.width / 2) < 3 ? new a.HitTestResult(a.HitTarget.MovePoint) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;
          t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, (0, l.setLineStyle)(t, this._data.linestyle), t.save(), t.translate(this._data.point.x + 1, this._data.point.y), t.scale(this._data.width, this._data.height), t.beginPath(), t.arc(.5, 0, .5, Math.PI, 0, !1), t.restore(), t.stroke(), this._data.fillBackground && (t.fillStyle = (0, o.generateColor)(this._data.backcolor, this._data.transparency), t.fill());
        }
      }]);

      return h;
    }(d.MediaCoordinatesPaneRenderer);

    var c =
    /*#__PURE__*/
    function (_s$LineSourcePaneView4) {
      _inherits(c, _s$LineSourcePaneView4);

      function c() {
        var _this97;

        _classCallCheck(this, c);

        _this97 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this97._renderer = null;
        return _this97;
      }

      _createClass(c, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          if (_get(_getPrototypeOf(c.prototype), "_updateImpl", this).call(this), this._renderer = null, this._points.length < 2) return;

          var e = this._source.points(),
              t = e[0],
              i = e[1],
              s = Math.min(t.index, i.index),
              o = Math.max(t.index, i.index),
              a = o - s,
              l = this._points[0],
              d = this._points[1],
              c = Math.abs(l.x - d.x),
              u = new r.CompositeRenderer(),
              p = this._source.properties().childs(),
              _ = this._model.timeScale();

          if (0 === a) return;
          var g = Math.min(l.x, d.x);
          var f = [];

          for (var _e106 = s; g > -c; _e106 -= a) {
            g = _.indexToCoordinate(_e106), f.push(g);
          }

          g = Math.max(l.x, d.x);

          for (var _e107 = o; g < _.width(); _e107 += a) {
            g = _.indexToCoordinate(_e107), f.push(g);
          }

          for (var _e108 = 0; _e108 < f.length; _e108++) {
            var _t84 = {
              point: new n.Point(f[_e108], l.y),
              width: c,
              height: c,
              color: p.linecolor.value(),
              linewidth: p.linewidth.value(),
              linestyle: p.linestyle.value(),
              fillBackground: p.fillBackground.value(),
              backcolor: p.backgroundColor.value(),
              transparency: p.transparency.value()
            },
                _i84 = new h();

            _i84.setData(_t84), u.append(_i84);
          }

          this.addAnchors(u), this._renderer = u;
        }
      }]);

      return c;
    }(s.LineSourcePaneView);
  },
  67998: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TrendAnglePaneView: function TrendAnglePaneView() {
        return m;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(5531),
        o = i(34026),
        a = i(38223),
        l = i(18807),
        d = i(73436),
        h = i(9155),
        c = i(80657),
        u = i(99031),
        p = i(80101),
        _ = i(46501),
        g = i(21477),
        f = i(15187);

    var v =
    /*#__PURE__*/
    function (_f$MediaCoordinatesPa) {
      _inherits(v, _f$MediaCoordinatesPa);

      function v() {
        var _this98;

        _classCallCheck(this, v);

        _this98 = _possibleConstructorReturn(this, _getPrototypeOf(v).apply(this, arguments)), _this98._data = null;
        return _this98;
      }

      _createClass(v, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;
          t.translate(this._data.point.x, this._data.point.y), t.strokeStyle = this._data.color, t.setLineDash([1, 2]);
          var i = this._data.size;
          t.beginPath(), t.moveTo(0, 0), t.lineTo(i, 0), t.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0), t.stroke();
        }
      }]);

      return v;
    }(f.MediaCoordinatesPaneRenderer);

    var x = i(48063);

    var m =
    /*#__PURE__*/
    function (_x$TrendToolWithStats) {
      _inherits(m, _x$TrendToolWithStats);

      function m(e, t) {
        var _this99;

        _classCallCheck(this, m);

        _this99 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this, e, t)), _this99._secondPoint = null, _this99._trendRenderer = new u.TrendLineRenderer(), _this99._angleRenderer = new v(), _this99._angleLabelRenderer = new c.TextRenderer();
        return _this99;
      }

      _createClass(m, [{
        key: "_getPointsForStats",
        value: function _getPointsForStats() {
          return [this._points[0], (0, n.ensureNotNull)(this._middlePoint), (0, n.ensureNotNull)(this._secondPoint)];
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          this._renderer.clear(), _get(_getPrototypeOf(m.prototype), "_updateImpl", this).call(this);
          var n = this._source,
              c = n.angle();

          if (this._points.length > 0 && null !== c) {
            var _e109 = Math.cos(c),
                _t85 = -Math.sin(c),
                _i85 = new r.Point(_e109, _t85);

            this._secondPoint = this._points[0].addScaled(_i85, n.distance()), this._middlePoint = this._source.calcMiddlePoint(this._points[0], this._secondPoint);
          }

          this._invalidated = !1;

          var u = this._source.priceScale(),
              f = this._model.timeScale();

          if (!u || u.isEmpty() || f.isEmpty()) return;
          if (null === this._model.timeScale().visibleBarsStrictRange()) return;
          if (this._source.points().length < 2) return;
          if (this._points.length < 2 || null === this._secondPoint) return;

          var v = this._points[0],
              x = this._points[1],
              m = this._source.properties().childs();

          m.showBarsRange.value() || m.showPriceRange.value() || m.showPercentPriceRange.value() || m.showPipsPriceRange.value() || (this._label = null, this._labelData && (this._labelData.text = ""));
          var w = m.linecolor.value(),
              R = {
            points: [v, this._secondPoint],
            color: w,
            linewidth: m.linewidth.value(),
            linestyle: m.linestyle.value(),
            extendleft: m.extendLeft.value(),
            extendright: m.extendRight.value(),
            leftend: d.LineEnd.Normal,
            rightend: d.LineEnd.Normal
          };
          this._trendRenderer.setData(R), this._renderer.append(this._trendRenderer);
          var y = (0, r.box)(new r.Point(0, 0), new r.Point(t, e));
          var T = !1;
          m.statsPosition.value() === h.StatsPosition.Auto && (T = (0, r.equalPoints)(v, x) ? !(0, o.pointInBox)(v, y) : null === (0, s.intersectLineSegmentAndBox)((0, r.lineSegment)(v, x), y));

          if ((this.isHoveredSource() || this.isSelectedSource() || m.alwaysShowStats.value()) && !T && 2 === this._points.length) {
            var _e110 = new g.PaneRendererCachedImage(this, 0);

            this._renderer.append(_e110);
          }

          var b = (this.isHoveredSource() || this.isSelectedSource()) && m.showMiddlePoint.value();
          this._middlePoint && this._renderer.append(new p.SelectionRenderer({
            points: [this._middlePoint],
            bgColors: this._lineAnchorColors([this._middlePoint]),
            color: w,
            visible: b && this.areAnchorsVisible(),
            hittestResult: l.HitTarget.Regular,
            barSpacing: 0
          }));
          var P = {
            point: v,
            angle: null !== (i = n.angle()) && void 0 !== i ? i : 0,
            color: m.linecolor.value(),
            size: 50
          };
          this._angleRenderer.setData(P), this._renderer.append(this._angleRenderer);
          var L = Math.round(180 * P.angle / Math.PI) + "º",
              S = {
            points: [new r.Point(v.x + 50, v.y)],
            text: (0, a.forceLTRStr)(L),
            color: m.textcolor.value(),
            horzAlign: "left",
            font: _.CHART_FONT_FAMILY,
            offsetX: 5,
            offsetY: 0,
            bold: m.bold.value(),
            italic: m.italic.value(),
            fontsize: m.fontsize.value(),
            vertAlign: "middle"
          };
          this._angleLabelRenderer.setData(S), this._renderer.append(this._angleLabelRenderer), R.points.length >= 2 && this._addAlertRenderer(this._renderer, R.points);
          var C = new r.Point(this._secondPoint.x, this._secondPoint.y);
          C.data = 1, this._renderer.append(this.createLineAnchor({
            points: [v, C]
          }, 0));
        }
      }]);

      return m;
    }(x.TrendToolWithStatsPaneView);
  },
  38058: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TrendBasedFibExtensionPaneView: function TrendBasedFibExtensionPaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(72739),
        s = i(99031),
        o = i(18807),
        a = i(19266),
        l = i(73436),
        d = i(26702),
        h = i(80657),
        c = i(134);

    var u =
    /*#__PURE__*/
    function (_c$LineToolPaneViewFi2) {
      _inherits(u, _c$LineToolPaneViewFi2);

      function u(e, t) {
        var _this100;

        _classCallCheck(this, u);

        _this100 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this100._trendLineRendererPoints12 = new s.TrendLineRenderer(), _this100._trendLineRendererPoints23 = new s.TrendLineRenderer(), _this100._rectangleRenderers = {}, _this100._hlevelLineRenderers = {}, _this100._renderer = new a.CompositeRenderer(), _this100._levels = [];
        return _this100;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(t, e), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i, a;
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer.clear(), this._points.length < 2) return;

          var _this$_points11 = _slicedToArray(this._points, 2),
              c = _this$_points11[0],
              u = _this$_points11[1],
              p = this._source.properties().childs();

          if (3 === this._source.points().length) {
            var _e111 = this._source.priceScale();

            if (!_e111 || _e111.isEmpty() || this._model.timeScale().isEmpty()) return;

            var _t86 = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();

            if (null == _t86) return;

            var _this$_source$points27 = this._source.points(),
                _this$_source$points28 = _slicedToArray(_this$_source$points27, 3),
                _n60 = _this$_source$points28[0],
                _r57 = _this$_source$points28[1],
                _s34 = _this$_source$points28[2];

            var _o32 = !1;

            p.reverse && p.reverse.value() && (_o32 = p.reverse.value()), this._levels = [];

            var _a28 = _o32 ? _n60.price : _r57.price,
                _l19 = _o32 ? _r57.price : _n60.price,
                _h19 = _a28 - _l19;

            var _c17, _u20, _7;

            var _g5 = _e111.isLog() && p.fibLevelsBasedOnLogScale.value();

            if (_g5) {
              _c17 = _e111.priceToCoordinate(_a28, _t86);
              _u20 = _c17 - _e111.priceToCoordinate(_l19, _t86), _7 = _e111.priceToCoordinate(_s34.price, _t86);
            }

            var _f4 = {
              price: _s34.price,
              coordinate: _7
            },
                _v4 = {
              price: _h19,
              coordinate: _u20
            },
                _x3 = this._source.levelsCount();

            for (var _i86 = 1; _i86 <= _x3; _i86++) {
              var _n61 = p["level" + _i86].childs();

              if (!_n61.visible.value()) continue;

              var _r58 = _n61.coeff.value(),
                  _s35 = _n61.color.value(),
                  _o33 = (0, d.fibLevelCoordinate)(_f4, _v4, _r58, _e111, _t86, _g5),
                  _a29 = (0, d.fibLevelPrice)(_f4, _v4, _r58, _e111, _t86, _g5);

              this._levels.push({
                color: _s35,
                price: _a29,
                y: _o33,
                linewidth: p.levelsStyle.childs().linewidth.value(),
                linestyle: p.levelsStyle.childs().linestyle.value(),
                index: _i86
              });
            }
          }

          var _ = p.trendline.childs();

          if (_.visible.value()) {
            var _e112 = {
              points: [c, u],
              color: _.color.value(),
              linewidth: _.linewidth.value(),
              linestyle: _.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal
            };
            this._trendLineRendererPoints12.setData(_e112), this._renderer.append(this._trendLineRendererPoints12);
          }

          if (this._points.length < 3) return void this.addAnchors(this._renderer);
          var g = this._points[2];

          if (_.visible.value()) {
            var _e113 = {
              points: [u, g],
              color: _.color.value(),
              linewidth: _.linewidth.value(),
              linestyle: _.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal
            };
            this._trendLineRendererPoints23.setData(_e113), this._renderer.append(this._trendLineRendererPoints23);
          }

          var f = Math.min(g.x, u.x),
              v = Math.max(g.x, u.x),
              x = p.fillBackground.value(),
              m = p.transparency.value(),
              w = p.extendLinesLeft.value(),
              R = p.extendLines.value();
          if (x) for (var _e114 = 0; _e114 < this._levels.length; _e114++) {
            if (_e114 > 0 && x) {
              var _t87 = this._levels[_e114 - 1],
                  _i87 = {
                points: [new n.Point(f, this._levels[_e114].y), new n.Point(v, _t87.y)],
                color: this._levels[_e114].color,
                linewidth: 0,
                backcolor: this._levels[_e114].color,
                fillBackground: !0,
                transparency: m,
                extendLeft: w,
                extendRight: R
              };
              this._rectangleRenderers.hasOwnProperty(_e114) || (this._rectangleRenderers[_e114] = new r.RectangleRenderer(void 0, void 0, !0));
              var _s36 = this._rectangleRenderers[_e114];
              _s36.setData(_i87), this._renderer.append(_s36);
            }
          }
          var y = f,
              T = v;
          y === T && (w && (y -= 1), R && (T += 1));

          for (var _i88 = 0; _i88 < this._levels.length; _i88++) {
            var _r59 = new n.Point(y, this._levels[_i88].y),
                _d20 = new n.Point(T, this._levels[_i88].y);

            var _c18 = void 0;

            var _u21 = this._updateLabelForLevel({
              i: _i88,
              levelIndex: this._levels[_i88].index,
              leftPoint: _r59,
              rightPoint: _d20,
              price: this._levels[_i88].price,
              color: this._levels[_i88].color,
              extendLeft: w,
              extendRight: R,
              horzAlign: p.horzLabelsAlign.value(),
              vertAlign: p.vertLabelsAlign.value()
            });

            null !== _u21 && (this._renderer.append(_u21), "middle" === p.vertLabelsAlign.value() && (_c18 = null !== (a = (0, h.getTextBoundaries)(_u21, e, t)) && void 0 !== a ? a : void 0));
            var _8 = {
              points: [_r59, _d20],
              color: this._levels[_i88].color,
              linewidth: this._levels[_i88].linewidth,
              linestyle: this._levels[_i88].linestyle,
              extendleft: w,
              extendright: R,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
              excludeBoundaries: _c18
            };
            this._hlevelLineRenderers.hasOwnProperty(_i88) || (this._hlevelLineRenderers[_i88] = new s.TrendLineRenderer());
            var _g6 = this._hlevelLineRenderers[_i88];
            _g6.setData(_8), _g6.setHitTest(new o.HitTestResult(o.HitTarget.MovePoint, {
              snappingPrice: this._levels[_i88].price
            }, this._levels[_i88].index)), this._renderer.append(_g6);
          }

          this.addAnchors(this._renderer);
        }
      }]);

      return u;
    }(c.LineToolPaneViewFibWithLabels);
  },
  33482: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TrendBasedFibTimePaneView: function TrendBasedFibTimePaneView() {
        return p;
      }
    });
    var n = i(86441),
        r = i(71254),
        s = i(80657),
        o = i(72739),
        a = i(99031),
        l = i(18807),
        d = i(19266),
        h = i(73436),
        c = i(46501),
        u = i(79191);

    var p =
    /*#__PURE__*/
    function (_u$LineSourcePaneView7) {
      _inherits(p, _u$LineSourcePaneView7);

      function p(e, t) {
        var _this101;

        _classCallCheck(this, p);

        _this101 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this, e, t)), _this101._trendLineRendererPoints12 = new a.TrendLineRenderer(), _this101._trendLineRendererPoints23 = new a.TrendLineRenderer(), _this101._renderer = new d.CompositeRenderer(), _this101._levels = [];
        return _this101;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          _get(_getPrototypeOf(p.prototype), "_updateImpl", this).call(this), this._renderer.clear();

          var a = this._source.properties().childs();

          if (3 === this._source.points().length) {
            var _e115 = this._model.timeScale();

            if (_e115.isEmpty()) return;

            var _this$_source$points29 = this._source.points(),
                _this$_source$points30 = _slicedToArray(_this$_source$points29, 3),
                _t88 = _this$_source$points30[0],
                _i89 = _this$_source$points30[1],
                _n62 = _this$_source$points30[2];

            if (this._levels = [], _i89.index === _t88.index) return;

            var _r60 = _i89.index - _t88.index,
                _s37 = _n62.index;

            if (null === _e115.visibleBarsStrictRange()) return;

            for (var _t89 = 1; _t89 <= 11; _t89++) {
              var _i90 = a["level" + _t89].childs();

              if (!_i90.visible.value()) continue;

              var _n63 = _i90.coeff.value(),
                  _o34 = _i90.color.value(),
                  _l20 = Math.round(_s37 + _n63 * _r60),
                  _d21 = {
                x: _e115.indexToCoordinate(_l20),
                coeff: _n63,
                color: _o34,
                linewidth: _i90.linewidth.value(),
                linestyle: _i90.linestyle.value(),
                index: _t89,
                text: String(_n63)
              };

              this._levels.push(_d21);
            }
          }

          if (this._points.length < 2) return;

          var u = new d.CompositeRenderer(),
              _this$_points12 = _slicedToArray(this._points, 2),
              p = _this$_points12[0],
              _ = _this$_points12[1],
              g = a.trendline.childs();

          if (g.visible.value()) {
            var _e116 = {
              points: [p, _],
              color: g.color.value(),
              linewidth: g.linewidth.value(),
              linestyle: g.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal
            };
            this._trendLineRendererPoints12.setData(_e116), u.append(this._trendLineRendererPoints12);
          }

          if (this._points.length < 3) return this.addAnchors(u), void (this._renderer = u);
          var f = this._points[2];

          if (g.visible.value()) {
            var _e117 = {
              points: [_, f],
              color: g.color.value(),
              linewidth: g.linewidth.value(),
              linestyle: g.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal
            };
            this._trendLineRendererPoints23.setData(_e117), u.append(this._trendLineRendererPoints23);
          }

          if (a.fillBackground.value()) {
            var _t90 = a.transparency.value();

            for (var _i91 = 1; _i91 < this._levels.length; _i91++) {
              var _r61 = this._levels[_i91 - 1],
                  _s38 = {
                points: [new n.Point(_r61.x, 0), new n.Point(this._levels[_i91].x, e)],
                color: this._levels[_i91].color,
                linewidth: 0,
                backcolor: this._levels[_i91].color,
                fillBackground: !0,
                transparency: _t90,
                extendLeft: !1,
                extendRight: !1
              },
                  _a30 = new o.RectangleRenderer(void 0, void 0, !0);

              _a30.setData(_s38), u.append(_a30);
            }
          }

          var v = a.horzLabelsAlign.value();
          v = "left" === v ? "right" : "right" === v ? "left" : "center";
          var x = a.vertLabelsAlign.value(),
              m = a.showCoeffs.value();

          for (var _o35 = 0; _o35 < this._levels.length; _o35++) {
            var _a31 = void 0;

            if (m) {
              var _r62 = void 0;

              switch (x) {
                case "top":
                  _r62 = new n.Point(this._levels[_o35].x, 0);
                  break;

                case "middle":
                  _r62 = new n.Point(this._levels[_o35].x, .5 * e);
                  break;

                default:
                  _r62 = new n.Point(this._levels[_o35].x, e);
              }

              var _l21 = {
                points: [_r62],
                text: this._levels[_o35].text,
                color: this._levels[_o35].color,
                vertAlign: x,
                horzAlign: v,
                font: c.CHART_FONT_FAMILY,
                offsetX: 2,
                offsetY: 0,
                fontsize: 12
              },
                  _d23 = new s.TextRenderer(_l21);

              this._needLabelExclusionPath(_d23) && (_a31 = null !== (i = (0, s.getTextBoundaries)(_d23, t, e)) && void 0 !== i ? i : void 0), u.append(_d23);
            }

            var _d22 = {
              x: this._levels[_o35].x,
              color: this._levels[_o35].color,
              linewidth: this._levels[_o35].linewidth,
              linestyle: this._levels[_o35].linestyle,
              excludeBoundaries: _a31
            },
                _h20 = new l.HitTestResult(l.HitTarget.MovePoint, void 0, this._levels[_o35].index),
                _p10 = new r.VerticalLineRenderer();

            _p10.setData(_d22), _p10.setHitTest(_h20), u.append(_p10);
          }

          this.addAnchors(u), this._renderer = u;
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e) {
          return "center" === this._source.properties().childs().horzLabelsAlign.value();
        }
      }]);

      return p;
    }(u.LineSourcePaneView);
  },
  96310: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      TrendLinePaneView: function TrendLinePaneView() {
        return g;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(34026),
        o = i(5531),
        a = i(21477),
        l = i(80657),
        d = i(9155),
        h = i(80101),
        c = i(99031),
        u = i(46501),
        p = i(18807),
        _ = i(48063);

    var g =
    /*#__PURE__*/
    function (_$TrendToolWithStatsP) {
      _inherits(g, _$TrendToolWithStatsP);

      function g() {
        var _this102;

        _classCallCheck(this, g);

        _this102 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this102._trendRenderer = new c.TrendLineRenderer(), _this102._labelRenderer = new l.TextRenderer();
        return _this102;
      }

      _createClass(g, [{
        key: "_getPointsForStats",
        value: function _getPointsForStats() {
          return [this._points[0], (0, n.ensureNotNull)(this._middlePoint), this._points[1]];
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          this._renderer.clear(), this._invalidated = !1;

          var n = this._source.priceScale(),
              c = this._model.timeScale();

          if (!n || n.isEmpty() || c.isEmpty()) return;

          var _ = this._model.timeScale().visibleBarsStrictRange();

          if (null === _) return;

          var g = this._source.points();

          if (g.length < 2) return;

          var f = g[0],
              v = g[1],
              x = this._source.properties().childs();

          if (f.index < _.firstBar() && v.index < _.firstBar() && !x.extendLeft.value() && !x.extendRight.value()) return;
          if (_get(_getPrototypeOf(g.prototype), "_updateImpl", this).call(this), this._points.length < 2) return;
          x.showPriceRange.value() || x.showPercentPriceRange.value() || x.showPipsPriceRange.value() || x.showBarsRange.value() || x.showDateTimeRange.value() || x.showDistance.value() || x.showAngle.value() || (this._label = null, this._labelData && (this._labelData.text = ""));
          var m = this._points[0],
              w = this._points[1];
          var R;

          if (x.showLabel && x.showLabel.value() && x.text.value().length > 0) {
            var _n64 = m.x < w.x ? m : w,
                _s39 = _n64 === m ? w : m,
                _o36 = x.vertLabelsAlign.value(),
                _a32 = x.horzLabelsAlign.value();

            var _d24;

            _d24 = "left" === _a32 ? _n64.clone() : "right" === _a32 ? _s39.clone() : new r.Point((m.x + w.x) / 2, (m.y + w.y) / 2);

            var _h21 = Math.atan((_s39.y - _n64.y) / (_s39.x - _n64.x)),
                _c19 = {
              points: [_d24],
              text: x.text.value(),
              color: x.textcolor.value(),
              vertAlign: _o36,
              horzAlign: _a32,
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: x.bold.value(),
              italic: x.italic.value(),
              fontsize: x.fontsize.value(),
              forceTextAlign: !0,
              angle: _h21
            };

            this._labelRenderer.setData(_c19), this._renderer.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (R = null !== (i = (0, l.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0);
          }

          var y = x.linecolor.value(),
              T = {
            points: this._points,
            color: y,
            linewidth: x.linewidth.value(),
            linestyle: x.linestyle.value(),
            extendleft: x.extendLeft.value(),
            extendright: x.extendRight.value(),
            leftend: x.leftEnd.value(),
            rightend: x.rightEnd.value(),
            excludeBoundaries: R
          };
          this._trendRenderer.setData(T), this._renderer.append(this._trendRenderer);
          var b = (0, r.box)(new r.Point(0, 0), new r.Point(t, e));
          var P = !1;
          x.statsPosition.value() === d.StatsPosition.Auto && (P = (0, r.equalPoints)(m, w) ? !(0, s.pointInBox)(m, b) : null === (0, o.intersectLineSegmentAndBox)((0, r.lineSegment)(m, w), b));

          if (((this.isHoveredSource() || this.isSelectedSource()) && this.isEditMode() || x.alwaysShowStats.value()) && !P && 2 === this._points.length) {
            var _e118 = new a.PaneRendererCachedImage(this, 0);

            this._renderer.append(_e118);
          }

          var L = (this.isHoveredSource() || this.isSelectedSource()) && x.showMiddlePoint.value();
          this._middlePoint && this._renderer.append(new h.SelectionRenderer({
            points: [this._middlePoint],
            bgColors: this._lineAnchorColors([this._middlePoint]),
            color: y,
            visible: L && this.areAnchorsVisible(),
            hittestResult: p.HitTarget.Regular,
            barSpacing: 0
          })), this.addAnchors(this._renderer), T.points.length >= 2 && this._addAlertRenderer(this._renderer, T.points);
        }
      }]);

      return g;
    }(_.TrendToolWithStatsPaneView);
  },
  48063: function _(e, t, i) {
    "use strict";

    i.d(t, {
      TrendToolWithStatsPaneView: function TrendToolWithStatsPaneView() {
        return V;
      }
    });

    var n = i(50151),
        r = i(86441),
        s = i(5531),
        o = i(44352),
        a = i(38223),
        l = i(19266),
        d = i(93572),
        h = i(87663),
        c = i(2043),
        u = i(57322),
        p = i(57352),
        _ = i(27714),
        g = i(34026),
        f = i(49483),
        v = i(80657),
        x = i(18807),
        m = i(68441),
        w = i(1722),
        R = i(74359),
        y = i(57898);

    var T =
    /*#__PURE__*/
    function () {
      function T(e, t, i) {
        var _this103 = this;

        _classCallCheck(this, T);

        this._ready = !1, this._img = function (e, t, i) {
          var n = new Image();
          return n.width = t, n.height = t, n.onload = i, n.src = e, n;
        }(e, t, function () {
          _this103._ready = !0, i();
        });
      }

      _createClass(T, [{
        key: "ready",
        value: function ready() {
          return this._ready;
        }
      }, {
        key: "image",
        value: function image() {
          return this._img;
        }
      }]);

      return T;
    }();

    var b = null;
    var P = 18,
        L = new (
    /*#__PURE__*/
    function () {
      function _class12(e, t) {
        var _this104 = this;

        _classCallCheck(this, _class12);

        this._icons = new Map(), this._onAllIconsLoaded = new y.Delegate(), this._pendingLoading = e.length;

        var i = function i() {
          0 == --_this104._pendingLoading && _this104._onAllIconsLoaded.fire();
        };

        e.forEach(function (e) {
          var n = _this104._icons.get(e.name) || new Map();
          n.set(e.theme, new T(e.imageData, t, i)), _this104._icons.set(e.name, n);
        });
      }

      _createClass(_class12, [{
        key: "getIcon",
        value: function getIcon(e, t) {
          return (0, n.ensureDefined)((0, n.ensureDefined)(this._icons.get(e)).get(t));
        }
      }, {
        key: "onAllIconsReady",
        value: function onAllIconsReady() {
          return this._onAllIconsLoaded;
        }
      }]);

      return _class12;
    }())([{
      name: "angle",
      theme: "dark",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjQ5OTk5IDE1SDIuNjU3NzFMMy4wNjEwNCAxNC4yNjA2TDkuMDYxMDQgMy4yNjA1N0w5LjMwMDQ2IDIuODIxNjJMMTAuMTc4NCAzLjMwMDQ4TDkuOTM4OTMgMy43Mzk0Mkw3LjUxMzg1IDguMTg1NDJDMTAuNTYyMSA5LjY3MjA1IDEwLjk0NTEgMTIuNjI2MSAxMC45OTMxIDE0SDE0LjVIMTVWMTVIMTQuNUgzLjQ5OTk5Wk05Ljk5MTk3IDE0QzkuOTQyMzYgMTIuNzI1OSA5LjU4NjI5IDEwLjI4OCA3LjAzNDM1IDkuMDY0NDlMNC4zNDIyNiAxNEg5Ljk5MTk3WiIgZmlsbD0iI0Y4RjlGRCIvPgo8L3N2Zz4K"
    }, {
      name: "angle",
      theme: "light",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy40OTk5OSAxNUgyLjY1NzcxTDMuMDYxMDQgMTQuMjYwNkw5LjA2MTA0IDMuMjYwNTdMOS4zMDA0NiAyLjgyMTYyTDEwLjE3ODQgMy4zMDA0OEw5LjkzODkzIDMuNzM5NDJMNy41MTM4NSA4LjE4NTQyQzEwLjU2MjEgOS42NzIwNSAxMC45NDUxIDEyLjYyNjEgMTAuOTkzMSAxNEgxNC41SDE1VjE1SDE0LjVIMy40OTk5OVpNOS45OTE5NyAxNEM5Ljk0MjM2IDEyLjcyNTkgOS41ODYyOSAxMC4yODggNy4wMzQzNSA5LjA2NDQ5TDQuMzQyMjYgMTRIOS45OTE5N1oiIGZpbGw9IiMyQTJFMzkiLz4NCjwvc3ZnPg0K"
    }, {
      name: "barsRange",
      theme: "dark",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjRjhGOUZEIi8+DQo8L3N2Zz4NCg=="
    }, {
      name: "barsRange",
      theme: "light",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjMkEyRTM5Ii8+DQo8L3N2Zz4NCg=="
    }, {
      name: "priceRange",
      theme: "dark",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iI0Y4RjlGRCIvPg0KPC9zdmc+DQo="
    }, {
      name: "priceRange",
      theme: "light",
      imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iIzJBMkUzOSIvPg0KPC9zdmc+DQo="
    }], P),
        S = new Map();

    var C =
    /*#__PURE__*/
    function () {
      function C(e, t, i) {
        _classCallCheck(this, C);

        this._fontSize = 0, this._preRendered = !1, this._boundingBox = null, this._rect = null, this._padding = null, this._textPoint = null, this._textSizeCache = t, this._data = e, this._fontSize = e.fontSize ? e.fontSize : 12, this._lineSpacing = (0, w.isNumber)(this._data.lineSpacing) && this._data.lineSpacing ? this._data.lineSpacing : 0, e.lines = this._lines = null === e.text ? [] : (0, v.wordWrap)(e.text, this.fontStyle(), e.wordWrapWidth), this._hittest = i || new x.HitTestResult(x.HitTarget.MovePoint);
      }

      _createClass(C, [{
        key: "fontStyle",
        value: function fontStyle() {
          return "".concat(this._data.bold ? "bold " : "").concat(this._data.italic ? "italic " : "").concat(this._fontSize, "px ").concat(this._data.font);
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          if (0 === this._data.points.length || null === this._data.text) return {
            width: 0
          };

          this._preRender();

          var i = this._fontSize + this._lineSpacing;
          e.textBaseline = "top", e.font = this.fontStyle();
          var r = (0, n.ensureNotNull)(this._rect);

          if (this._rect) {
            if ("right" !== this._data.horzAlign && "center" !== this._data.horzAlign || !0 !== this._data.doNotAlignText && (e.textAlign = "right" === this._data.horzAlign ? "end" : "center"), this._data.backgroundRoundRect ? ((0, m.drawRoundRect)(e, r.x, r.y, r.w, r.h, this._data.backgroundRoundRect), e.fillStyle = this._data.backgroundColor, e.fill(), e.globalAlpha = 1) : (e.fillStyle = this._data.backgroundColor, e.fillRect(r.x, r.y, r.w, r.h), e.globalAlpha = 1), this._data.icons) {
              var _s40 = 0;

              var _o37 = Math.ceil((P - this._fontSize) / 2),
                  _a33 = (0, n.ensureNotNull)(this._padding);

              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = this._data.icons[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var _n65 = _step9.value;

                  var _l22 = Math.round(r.x + _a33.left),
                      _d25 = Math.round(r.y + _a33.top + i * _s40 - _o37);

                  this._drawIcon(e, _l22, _d25, _n65, Boolean(this._data.isDark), t), _s40 += 1;
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
            }
          } else "right" === this._data.horzAlign ? e.textAlign = "end" : "center" === this._data.horzAlign && (e.textAlign = "center");

          var s = (0, n.ensureNotNull)(this._textPoint),
              o = s.x;
          var a = s.y;
          e.fillStyle = this._data.color;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this._lines[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _t91 = _step10.value;
              e.fillText(_t91, o, a), a += i;
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

          return {
            width: r.w + 2
          };
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          return 0 === this._data.points.length ? null : (this._preRender(), this._boundingBox && (0, g.pointInBox)(e, this._boundingBox) ? this._hittest : null);
        }
      }, {
        key: "_preRender",
        value: function _preRender() {
          if (this._preRendered) return;

          var e = function () {
            if (null !== b) return b;
            var e = (0, R.createDisconnectedCanvas)(document, (0, _.size)({
              width: 0,
              height: 0
            }));
            return b = (0, R.getPrescaledContext2D)(e), b;
          }(),
              t = this._data.points[0].x;

          var i = t;
          var n = this._data.points[0].y;
          var s = n;
          var o = this._fontSize,
              a = this._lineSpacing,
              l = (o + a) * this._lines.length - a;
          e.textBaseline = "top", e.font = this.fontStyle();
          var d = [];
          var h;

          if (this._data.wordWrapWidth) {
            h = this._data.wordWrapWidth;

            for (var _e119 = 0; _e119 < this._lines.length; _e119++) {
              d.push(this._data.wordWrapWidth);
            }
          } else {
            h = 0;

            for (var _t92 = 0; _t92 < this._lines.length; _t92++) {
              var _i92 = e.measureText(this._lines[_t92]).width;
              d.push(_i92), h = Math.max(h, _i92);
            }
          }

          var c = {
            top: this._data.paddingTop,
            right: this._data.paddingRight,
            bottom: this._data.paddingBottom,
            left: this._data.paddingLeft
          },
              u = {
            x: Math.floor(t),
            y: Math.floor(n),
            w: Math.ceil(h + c.left + c.right),
            h: Math.ceil(l + c.top + c.bottom)
          };

          if (i += c.left, s += c.top, this._data.icons) {
            var _e120 = void 0 !== this._data.textPadding ? this._data.textPadding : Math.round(o / 2);

            i += P + _e120, u.w += P + _e120;
          }

          if ("bottom" === this._data.vertAlign || "middle" === this._data.vertAlign) {
            var _e121 = "middle" === this._data.vertAlign ? n - u.h / 2 : n - u.h - (u.y - n);

            s += _e121 - u.y, u.y = _e121;
          }

          if ("right" === this._data.horzAlign || "center" === this._data.horzAlign) {
            var _n66 = "center" === this._data.horzAlign ? t - u.w / 2 : t - u.w - (u.x - t);

            i += _n66 - u.x, u.x = _n66, !0 !== this._data.doNotAlignText && ("right" === this._data.horzAlign ? (e.textAlign = "end", i += h) : (e.textAlign = "center", i += h / 2));
          }

          u.w % 2 != 0 && u.w++, u.x += .5, u.y += .5, this._boundingBox = (0, r.box)(new r.Point(u.x, u.y), new r.Point(u.x + u.w, u.y + u.h)), this._rect = u, this._padding = c, this._textPoint = {
            x: i,
            y: s
          }, this._textSizeCache && (this._textSizeCache.widths = d), this._preRendered = !0;
        }
      }, {
        key: "_drawIcon",
        value: function _drawIcon(e, t, i, r, s, o) {
          var a = "".concat(r).concat(this._data.isDark).concat(o.pixelRatio);
          var l = S.get(a);

          if (!l) {
            l = document.createElement("canvas"), l.width = P * o.pixelRatio, l.height = P * o.pixelRatio, l.style.width = "18px", l.style.height = "18px";

            var _e122 = (0, n.ensureNotNull)(l.getContext("2d"));

            _e122.setTransform(1, 0, 0, 1, 0, 0), f.isEdge || _e122.scale(o.pixelRatio, o.pixelRatio);

            var _t93 = L.getIcon(r, s ? "dark" : "light");

            _t93.ready() && (_e122.drawImage(_t93.image(), 0, 0), S.set(a, l));
          }

          e.drawImage(l, t - .5, i - .5, P, P);
        }
      }]);

      return C;
    }();

    var M,
        I = i(46501),
        A = i(33295),
        k = i(59224);
    !function (e) {
      e.offset = 8, e.fontSize = 12, e.lineSpacing = 16, e.rectRadius = 4, e.bgColorLight = "rgba(227,242,253,0.9)", e.bgColorDark = "rgba(67,70,81,0.9)", e.textColorLight = "#2A2E39", e.textColorDark = "#F8F9FD", e.textPadding = 10, e.paddingTopBottom = 13, e.paddingLeftRight = 10;
    }(M || (M = {}));
    var N = M.fontSize,
        D = M.lineSpacing,
        B = M.paddingTopBottom;
    var z = (0, k.getLogger)("Chart.LineToolTrendLine");

    function E(e, t) {
      return !(!e && !t) && (!(!e || t) || !(e || !t) || e.index !== t.index || e.price !== t.price);
    }

    var H =
    /*#__PURE__*/
    function () {
      function H(e) {
        _classCallCheck(this, H);

        this._sourcesToRow = new Map(), this._rowsToSources = new Map(), this._currentWidth = 400, this._actualCapacity = 1, this._currentSymbol = "", this._params = e;
        var t = D,
            i = N + t;
        this._maxRowHeight = 3 * i - t + 2 * B + 2, this._recreateCanvas();
      }

      _createClass(H, [{
        key: "destroy",
        value: function destroy() {
          delete this._canvas, delete this._ctx;
        }
      }, {
        key: "canvas",
        value: function canvas() {
          return this._canvas;
        }
      }, {
        key: "topByRow",
        value: function topByRow(e) {
          return e * this._maxRowHeight;
        }
      }, {
        key: "rowHeight",
        value: function rowHeight(e) {
          var t = (0, n.ensureDefined)(this._rowsToSources.get(e)),
              i = (0, n.ensureDefined)(this._sourcesToRow.get(t)).effectiveState;
          return null !== i ? i.realRowHeight : this._maxRowHeight;
        }
      }, {
        key: "rowWidth",
        value: function rowWidth(e) {
          var t = (0, n.ensureDefined)(this._rowsToSources.get(e));
          return (0, n.ensureDefined)(this._sourcesToRow.get(t)).width;
        }
      }, {
        key: "currentWidth",
        value: function currentWidth() {
          return this._currentWidth;
        }
      }, {
        key: "updateSource",
        value: function updateSource(e, t) {
          var i = e.properties().symbol.value();
          this._currentSymbol !== i && (z.logDebug("TrendLineCache. Clearing canvas because of changing symbol from " + this._currentSymbol + " to " + i), this._currentSymbol = i, this._sourcesToRow.clear(), this._rowsToSources.clear());
          var n = e.id();

          var r = this._sourcesToRow.get(n);

          if (void 0 === r) {
            var _e123 = this._findEmptyRow(n);

            r = {
              effectiveState: null,
              rowIndex: _e123,
              width: 0
            }, this._sourcesToRow.set(n, r), this._rowsToSources.set(_e123, n);
          }

          var s = r.effectiveState,
              o = this._effectiveState(e);

          if (!this._effectiveStatesEquals(s, o)) {
            var _e124 = t();

            this._repaintSource(n, r.rowIndex, _e124), r.effectiveState = o;
          }

          return r;
        }
      }, {
        key: "_findEmptyRow",
        value: function _findEmptyRow(e) {
          var t = 0;

          for (; void 0 !== this._rowsToSources.get(t);) {
            t++;
          }

          return this._rowsToSources.set(t, e), t >= this._actualCapacity && (this._actualCapacity++, this._recreateCanvas()), t;
        }
      }, {
        key: "_effectiveState",
        value: function _effectiveState(e) {
          var t, i;
          var r = e.properties(),
              s = r.showBarsRange && r.showBarsRange.value(),
              o = r.showDateTimeRange && r.showDateTimeRange.value(),
              a = r.showDistance && r.showDistance.value(),
              l = r.showPriceRange && r.showPriceRange.value(),
              d = null === (t = r.showPercentPriceRange) || void 0 === t ? void 0 : t.value(),
              h = null === (i = r.showPipsPriceRange) || void 0 === i ? void 0 : i.value(),
              c = r.showAngle && r.showAngle.value();
          var u = 0;
          (s || o || a) && u++, c && u++, (l || d || h) && u++;
          var p = (N + D) * u - D + 2 * B + 2;
          return {
            p1: Object.assign({}, e.points()[0]),
            p2: Object.assign({}, e.points()[1]),
            props: e.properties(),
            showBars: s,
            showTimeRange: o,
            showDistance: a,
            showPriceRange: l,
            showPipsPriceRange: h,
            showPercentPriceRange: d,
            showAngle: c,
            dark: e.model().dark().value(),
            priceRange: (0, n.ensureNotNull)((0, n.ensureNotNull)(e.priceScale()).priceRange()).state(),
            barSpacing: e.model().timeScale().barSpacing(),
            realRowHeight: p
          };
        }
      }, {
        key: "_effectiveStatesEquals",
        value: function _effectiveStatesEquals(e, t) {
          if (null !== e && null === t) return !1;
          if (null === e && null !== t) return !1;
          var i = (0, n.ensureNotNull)(e),
              r = (0, n.ensureNotNull)(t);
          if (E(i.p1, r.p1)) return !1;
          if (E(i.p2, r.p2)) return !1;
          if (i.dark !== r.dark || i.showBars !== r.showBars || i.showTimeRange !== r.showTimeRange || i.showDistance !== r.showDistance || i.showPriceRange !== r.showPriceRange || i.showPercentPriceRange !== r.showPercentPriceRange || i.showPipsPriceRange !== r.showPipsPriceRange || i.showAngle !== r.showAngle) return !1;

          if (i.showAngle || i.showDistance) {
            if (i.priceRange.min !== r.priceRange.min) return !1;
            if (i.priceRange.max !== r.priceRange.max) return !1;
            if (i.barSpacing !== r.barSpacing) return !1;
          }

          return !0;
        }
      }, {
        key: "_repaintSource",
        value: function _repaintSource(e, t, i) {
          var _this105 = this;

          i.points[0] = new r.Point(0, 0), delete i.horzAlign, delete i.vertAlign;
          var s = this._params.pixelRatio;
          (0, R.drawScaled)(this._ctx, s, s, function () {
            _this105._ctx.translate(.5, _this105.topByRow(t) + .5), _this105._ctx.clearRect(0, 0, _this105._currentWidth, _this105._maxRowHeight);
            var r = new C(i, {
              widths: []
            }).draw(_this105._ctx, _this105._params);
            (0, n.ensureDefined)(_this105._sourcesToRow.get(e)).width = r.width;
          });
        }
      }, {
        key: "_recreateCanvas",
        value: function _recreateCanvas() {
          this._canvas = (0, n.ensureNotNull)(document.createElement("canvas")), this._canvas.width = this._currentWidth * this._params.pixelRatio, this._canvas.height = this._maxRowHeight * this._actualCapacity * this._params.pixelRatio, this._ctx = (0, n.ensureNotNull)(this._canvas.getContext("2d")), this._ctx.font = "".concat(N, "px ").concat(I.CHART_FONT_FAMILY), this._sourcesToRow.clear(), this._rowsToSources.clear();
        }
      }]);

      return H;
    }();

    var O = i(9155);

    var V =
    /*#__PURE__*/
    function (_A$AlertableLineSourc) {
      _inherits(V, _A$AlertableLineSourc);

      function V(e, t) {
        var _this106;

        _classCallCheck(this, V);

        _this106 = _possibleConstructorReturn(this, _getPrototypeOf(V).call(this, e, t)), _this106._renderer = new l.CompositeRenderer(), _this106._labelData = null, _this106._label = null, _this106._percentageFormatter = new d.PercentageFormatter(), _this106._numericFormatter = new h.NumericFormatter(), _this106._pipFormatter = null, _this106._lastSymbolInfo = null, _this106._cache = null, _this106._cacheDrawParams = null, _this106._cacheInvalidated = !0, _this106._statCache = null, _this106._iconsReady = !1, L.onAllIconsReady().subscribe(_assertThisInitialized(_this106), function () {
          _this106._cache && (_this106._cache.destroy(), _this106._cache = null), _this106._iconsReady = !0, t.lightUpdate();
        });
        return _this106;
      }

      _createClass(V, [{
        key: "destroy",
        value: function destroy() {
          this._cache && (this._cache.destroy(), this._cache = null), L.onAllIconsReady().unsubscribeAll(this);
        }
      }, {
        key: "iconsReady",
        value: function iconsReady() {
          return this._iconsReady;
        }
      }, {
        key: "update",
        value: function update() {
          _get(_getPrototypeOf(V.prototype), "update", this).call(this), this._cacheInvalidated = !0;
        }
      }, {
        key: "getCacheCanvas",
        value: function getCacheCanvas(e) {
          return this._createCacheIfRequired(e).canvas();
        }
      }, {
        key: "getCacheRects",
        value: function getCacheRects(e, t) {
          var i = this._createCacheIfRequired(e),
              o = (0, n.ensureNotNull)(this._statCache),
              a = this._source.properties().childs().statsPosition.value(),
              l = this._getPointsForStats(),
              d = {
            left: 0,
            top: i.topByRow(o.rowIndex),
            width: i.rowWidth(o.rowIndex),
            height: i.rowHeight(o.rowIndex)
          },
              h = a === O.StatsPosition.Auto ? O.StatsPosition.Center : a;

          var c = l[h].x + 10,
              u = l[h].y;
          var p = this._points[1].y < this._points[0].y && this._points[1].x < this._points[0].x || this._points[1].y > this._points[0].y && this._points[1].x > this._points[0].x;
          p ? u -= 10 + d.height : u += 10, a !== O.StatsPosition.Auto || (0, r.equalPoints)(l[O.StatsPosition.Left], l[O.StatsPosition.Right]) || (c < 0 ? c = 0 : c + d.width > e.cssWidth && (c = e.cssWidth - d.width), u < 0 ? u = 0 : u + d.height > e.cssHeight && (u = e.cssHeight - d.height), (0, s.intersectLineSegmentAndBox)((0, r.lineSegment)(l[O.StatsPosition.Left], l[O.StatsPosition.Right]), (0, r.box)((0, r.point)(c, u), (0, r.point)(c + d.width, u + d.height))) && (u = p ? l[h].y + 10 : l[h].y - 10 - d.height, c = Math.min(l[O.StatsPosition.Center].x, e.cssWidth) - d.width));
          return {
            cacheRect: d,
            targetRect: {
              left: Math.floor(c),
              top: Math.floor(u),
              width: d.width,
              height: d.height
            }
          };
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_createCacheIfRequired",
        value: function _createCacheIfRequired(e) {
          var _this107 = this;

          return null !== this._cache && null !== this._cacheDrawParams && (0, p.areEqualPaneRenderParams)(e, this._cacheDrawParams) || (this._cache && this._cache.destroy(), this._cache = new H(e), this._statCache = this._cache.updateSource(this._source, function () {
            return _this107._statLabelData();
          }), this._cacheDrawParams = e, this._cacheInvalidated = !1), this._cacheInvalidated && (this._statCache = this._cache.updateSource(this._source, function () {
            return _this107._statLabelData();
          }), this._cacheInvalidated = !1), this._cache;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          _get(_getPrototypeOf(V.prototype), "_updateImpl", this).call(this, e, t);
        }
      }, {
        key: "_priceRange",
        value: function _priceRange() {
          var e, t;

          var _this$_source$points31 = this._source.points(),
              _this$_source$points32 = _slicedToArray(_this$_source$points31, 2),
              i = _this$_source$points32[0],
              r = _this$_source$points32[1],
              s = this._source.properties().childs(),
              o = s.showPriceRange.value(),
              a = s.showPercentPriceRange.value(),
              l = s.showPipsPriceRange.value(),
              d = (0, n.ensureNotNull)(this._source.ownerSource());

          var h;

          if (this._source.priceScale() && (o || a || l)) {
            var _n67 = [],
                _s41 = r.price - i.price;

            if (o || a) {
              var _l23 = _s41 / Math.abs(i.price),
                  _h22 = [];

              if (o) {
                var _n68 = d.formatter(),
                    _o38 = null !== (t = null === (e = _n68.formatChange) || void 0 === e ? void 0 : e.call(_n68, r.price, i.price)) && void 0 !== t ? t : _n68.format(_s41);

                _h22.push(_o38);
              }

              if (a) {
                var _e125 = this._percentageFormatter.format(100 * _l23);

                _h22.push(o ? "(".concat(_e125, ")") : _e125);
              }

              _n67.push(_h22.join(" "));
            }

            var _c20 = this._model.mainSeries().symbolInfo();

            _c20 && _c20 !== this._lastSymbolInfo && (this._pipFormatter = new u.PipFormatter(_c20.pricescale, _c20.minmov, _c20.type, _c20.minmove2, _c20.typespecs), this._lastSymbolInfo = _c20), l && this._pipFormatter && _n67.push(this._pipFormatter.format(_s41)), h = _n67.join(", ");
          }

          return h;
        }
      }, {
        key: "_statLabelData",
        value: function _statLabelData() {
          var _this$_source$points33 = this._source.points(),
              _this$_source$points34 = _slicedToArray(_this$_source$points33, 2),
              e = _this$_source$points34[0],
              t = _this$_source$points34[1],
              r = this._source.properties().childs(),
              s = [];

          var l, d, h, u, p;

          var _ = this._priceRange();

          void 0 !== _ && s.push("priceRange");
          var g = r.showBarsRange.value(),
              f = r.showDateTimeRange && r.showDateTimeRange.value(),
              v = r.showDistance && r.showDistance.value(),
              x = r.showAngle && r.showAngle.value();

          if (x || v) {
            var _i93 = (0, n.ensureNotNull)(this._source.pointToScreenPoint(e));

            u = (0, n.ensureNotNull)(this._source.pointToScreenPoint(t)).subtract(_i93), p = Math.round(1e5 * u.length()) / 1e5;
          }

          if (g || f || v) {
            if (l = "", g && (h = t.index - e.index, l += o.t(null, void 0, i(33355)).format({
              count: (0, a.forceLTRStr)(String(h))
            })), f) {
              var _i94 = this._model.timeScale().indexToUserTime(e.index),
                  _n69 = this._model.timeScale().indexToUserTime(t.index);

              if (_i94 && _n69) {
                var _e126 = (_n69.valueOf() - _i94.valueOf()) / 1e3,
                    _t94 = (0, a.startWithLTR)(new c.TimeSpanFormatter().format(_e126));

                _t94 && (l += g ? " (" + _t94 + ")" : _t94);
              }
            }

            v && (l && (l += ", "), l += o.t(null, void 0, i(26273)).format({
              number: (0, a.forceLTRStr)(this._numericFormatter.format(Math.round(Number(p))))
            })), l && s.push("barsRange");
          }

          if (x) {
            var _e127;

            void 0 !== p && p > 0 && void 0 !== u && (u = u.normalized(), _e127 = Math.acos(u.x), u.y > 0 && (_e127 = -_e127)), "number" != typeof _e127 || isNaN(_e127) || (d = Math.round(180 * _e127 / Math.PI) + "º", s.push("angle"));
          }

          this._label = [(0, a.forceLTRStr)(_), l, d].filter(function (e) {
            return null != e;
          }).join("\n") || null;

          var m = this._model.dark().value(),
              w = m ? "rgba(67,70,81,0.9)" : "rgba(227,242,253,0.9)",
              R = m ? "#F8F9FD" : "#2A2E39",
              y = {
            points: [this._points[1]],
            text: this._label,
            color: R,
            isDark: m,
            font: I.CHART_FONT_FAMILY,
            fontSize: 12,
            lineSpacing: 16,
            backgroundColor: w,
            backgroundRoundRect: 4,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 13,
            paddingBottom: 13,
            textPadding: 10,
            doNotAlignText: !0,
            icons: s,
            bold: !1,
            italic: !1,
            lines: [],
            wordWrapWidth: 0
          };

          return this._points[1].y < this._points[0].y && (y.vertAlign = "bottom"), this._points[1].x < this._points[0].x && (y.horzAlign = "right"), this._labelData = y, y;
        }
      }]);

      return V;
    }(A.AlertableLineSourcePaneView);
  },
  23545: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      LineToolTrianglePatternPaneView: function LineToolTrianglePatternPaneView() {
        return p;
      }
    });
    var n = i(50151),
        r = i(86441),
        s = i(79849),
        o = i(19266),
        a = i(99031),
        l = i(10695),
        d = i(80657),
        h = i(73436),
        c = i(79191),
        u = i(46501);

    var p =
    /*#__PURE__*/
    function (_c$LineSourcePaneView2) {
      _inherits(p, _c$LineSourcePaneView2);

      function p() {
        var _this108;

        _classCallCheck(this, p);

        _this108 = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this108._trendLineRendererPoints01 = new a.TrendLineRenderer(), _this108._trendLineRendererPoints12 = new a.TrendLineRenderer(), _this108._trendLineRendererPoints23 = new a.TrendLineRenderer(), _this108._intersectionRenderer = new l.TriangleRenderer(), _this108._aLabelRenderer = new d.TextRenderer(), _this108._bLabelRenderer = new d.TextRenderer(), _this108._cLabelRenderer = new d.TextRenderer(), _this108._dLabelRenderer = new d.TextRenderer(), _this108._renderer = null;
        return _this108;
      }

      _createClass(p, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(p.prototype), "_updateImpl", this).call(this), this._renderer = null;

          var _this$_points13 = _slicedToArray(this._points, 4),
              e = _this$_points13[0],
              t = _this$_points13[1],
              i = _this$_points13[2],
              a = _this$_points13[3];

          var l, d, c;

          if (4 === this._points.length) {
            if (Math.abs(i.x - e.x) < 1 || Math.abs(a.x - t.x) < 1) return;

            var _n70 = Math.min(e.x, t.x);

            _n70 = Math.min(_n70, i.x), _n70 = Math.min(_n70, a.x);

            var _s42 = (i.y - e.y) / (i.x - e.x),
                _o39 = e.y + (_n70 - e.x) * _s42,
                _h23 = (a.y - t.y) / (a.x - t.x),
                _u22 = t.y + (_n70 - t.x) * _h23;

            if (Math.abs(_s42 - _h23) < 1e-6) return;
            d = new r.Point(_n70, _o39), c = new r.Point(_n70, _u22);

            var _p11 = (t.y - e.y + (e.x * _s42 - t.x * _h23)) / (_s42 - _h23);

            if (_p11 < _n70) {
              var _n71 = Math.max(e.x, t.x);

              _n71 = Math.max(_n71, i.x), _n71 = Math.max(_n71, a.x), d = new r.Point(_n71, e.y + (_n71 - e.x) * _s42), c = new r.Point(_n71, t.y + (_n71 - t.x) * _h23);
            }

            var _9 = e.y + (_p11 - e.x) * _s42;

            l = new r.Point(_p11, _9);
          }

          if (this._points.length < 2) return;

          var p = this._source.properties().childs(),
              _ = new o.CompositeRenderer(),
              g = function g(e, t) {
            return {
              points: [e],
              text: t,
              color: p.textcolor.value(),
              vertAlign: "middle",
              horzAlign: "center",
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: p.bold && p.bold.value(),
              italic: p.italic && p.italic.value(),
              fontsize: p.fontsize.value(),
              backgroundColor: p.color.value(),
              backgroundRoundRect: 4
            };
          },
              f = function f(e, t) {
            return {
              points: [e, t],
              color: p.color.value(),
              linewidth: p.linewidth.value(),
              linestyle: s.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal
            };
          };

          if (this._trendLineRendererPoints01.setData(f(e, t)), _.append(this._trendLineRendererPoints01), this._points.length >= 3 && (this._trendLineRendererPoints12.setData(f(t, i)), _.append(this._trendLineRendererPoints12)), 4 === this._points.length && (this._trendLineRendererPoints23.setData(f(i, a)), _.append(this._trendLineRendererPoints23), l)) {
            var _e128 = {
              points: [(0, n.ensureDefined)(d), (0, n.ensureDefined)(c), l],
              color: p.color.value(),
              linewidth: p.linewidth.value(),
              backcolor: p.backgroundColor.value(),
              fillBackground: p.fillBackground.value(),
              transparency: p.transparency.value(),
              linestyle: s.LINESTYLE_DOTTED
            };
            this._intersectionRenderer.setData(_e128), _.append(this._intersectionRenderer);
          }

          var v = g(e, "A");
          t.y > e.y ? (v.vertAlign = "bottom", v.offsetY = 5) : (v.vertAlign = "top", v.offsetY = 5), this._aLabelRenderer.setData(v), _.append(this._aLabelRenderer);
          var x = g(t, "B");

          if (t.y < e.y ? (x.vertAlign = "bottom", x.offsetY = 5) : (x.vertAlign = "top", x.offsetY = 5), this._bLabelRenderer.setData(x), _.append(this._bLabelRenderer), this._points.length > 2) {
            var _e129 = g(i, "C");

            i.y < t.y ? (_e129.vertAlign = "bottom", _e129.offsetY = 5) : (_e129.vertAlign = "top", _e129.offsetY = 5), this._cLabelRenderer.setData(_e129), _.append(this._cLabelRenderer);
          }

          if (this._points.length > 3) {
            var _e130 = g(a, "D");

            a.y < i.y ? (_e130.vertAlign = "bottom", _e130.offsetY = 5) : (_e130.vertAlign = "top", _e130.offsetY = 5), this._dLabelRenderer.setData(_e130), _.append(this._dLabelRenderer);
          }

          this.addAnchors(_), this._renderer = _;
        }
      }]);

      return p;
    }(c.LineSourcePaneView);
  },
  97615: function _(e, t, i) {
    "use strict";

    var n = i(79191).LineSourcePaneView,
        r = i(19266).CompositeRenderer,
        s = i(10695).TriangleRenderer;

    t.TrianglePaneView =
    /*#__PURE__*/
    function (_n72) {
      _inherits(_class13, _n72);

      function _class13(e, t) {
        var _this109;

        _classCallCheck(this, _class13);

        _this109 = _possibleConstructorReturn(this, _getPrototypeOf(_class13).call(this, e, t)), _this109._triangleRenderer = new s(), _this109._renderer = null;
        return _this109;
      }

      _createClass(_class13, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          _get(_getPrototypeOf(_class13.prototype), "_updateImpl", this).call(this), this._renderer = null;
          var e = {};
          e.points = this._points, e.color = this._source.properties().color.value(), e.linewidth = this._source.properties().linewidth.value(), e.backcolor = this._source.properties().backgroundColor.value(), e.fillBackground = this._source.properties().fillBackground.value(), e.transparency = this._source.properties().transparency.value(), this._triangleRenderer.setData(e);
          var t = new r();
          t.append(this._triangleRenderer), this.addAnchors(t), this._renderer = t;
        }
      }]);

      return _class13;
    }(n);
  },
  77444: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      VertLinePaneView: function VertLinePaneView() {
        return u;
      }
    });
    var n = i(86441),
        r = i(19266),
        s = i(80657),
        o = i(66103),
        a = i(71254),
        l = i(46501),
        d = i(18807),
        h = i(33295);
    var c = [o.PaneCursorType.HorizontalResize];

    var u =
    /*#__PURE__*/
    function (_h$AlertableLineSourc2) {
      _inherits(u, _h$AlertableLineSourc2);

      function u(e, t, i) {
        var _this110;

        _classCallCheck(this, u);

        _this110 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this110._lineRenderer = new a.VerticalLineRenderer(), _this110._labelRenderer = new s.TextRenderer(), _this110._renderer = null, _this110._pane = i;
        return _this110;
      }

      _createClass(u, [{
        key: "renderer",
        value: function renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }, {
        key: "_validatePriceScale",
        value: function _validatePriceScale() {
          return !0;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(e, t) {
          var i;
          if (_get(_getPrototypeOf(u.prototype), "_updateImpl", this).call(this), this._renderer = null, 0 === this._points.length) return;

          var o = this._source.properties().childs(),
              a = new r.CompositeRenderer();

          var h,
              u = !0;

          if (1 === this._points.length) {
            var _t95 = new n.Point(this._points[0].x, e / 2);

            this._addAlertRenderer(a, [_t95]);
          }

          if (o.showLabel.value() && o.text.value().length > 0 && this._source.model().paneForSource(this._source) === this._pane) {
            var _r63 = 0,
                _d26 = 5,
                _c21 = "center",
                _p12 = "middle";
            var _10 = this._points[0].x;
            var g = 0;

            switch (o.vertLabelsAlign.value()) {
              case "top":
                g = e;
                break;

              case "middle":
                g = e / 2;
                break;

              case "bottom":
                g = 0;
            }

            if ("horizontal" === o.textOrientation.value()) {
              switch (o.horzLabelsAlign.value()) {
                case "left":
                  _c21 = "right";
                  break;

                case "right":
                  _c21 = "left";
                  break;

                case "center":
                  _c21 = "center";
              }

              switch (o.vertLabelsAlign.value()) {
                case "top":
                  _p12 = "bottom";
                  break;

                case "middle":
                  _p12 = "middle";
                  break;

                case "bottom":
                  _p12 = "top";
              }
            } else {
              switch (_r63 = -Math.PI / 2, _d26 = 0, o.horzLabelsAlign.value()) {
                case "left":
                  _p12 = "bottom";
                  break;

                case "right":
                  _p12 = "top";
                  break;

                case "center":
                  _p12 = "middle";
              }

              switch (o.vertLabelsAlign.value()) {
                case "top":
                  _c21 = "left";
                  break;

                case "middle":
                  _c21 = "center";
                  break;

                case "bottom":
                  _c21 = "right";
              }
            }

            var f = {
              points: [new n.Point(_10, g)],
              text: o.text.value(),
              color: o.textcolor.value(),
              vertAlign: _p12,
              horzAlign: _c21,
              font: l.CHART_FONT_FAMILY,
              offsetX: _d26,
              offsetY: 0,
              bold: o.bold.value(),
              italic: o.italic.value(),
              fontsize: o.fontsize.value(),
              forceTextAlign: !0,
              angle: _r63
            };
            this._labelRenderer.setData(f), a.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, s.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0), u = this._labelRenderer.isOutOfScreen(t, e);
          }

          var p = {
            x: this._points[0].x,
            color: o.linecolor.value(),
            linewidth: o.linewidth.value(),
            linestyle: o.linestyle.value(),
            excludeBoundaries: h
          },
              _ = p.linewidth / 2 + 1;

          if (u = u && (p.x < -_ || p.x > t + _), this._lineRenderer.setData(p), this._lineRenderer.setHitTest(new d.HitTestResult(d.HitTarget.MovePoint, {
            snappingIndex: this._source.points()[0].index
          })), a.append(this._lineRenderer), !u) {
            if (1 === this._points.length) {
              var _t96 = new n.Point(this._points[0].x, e / 2);

              _t96.data = 0, _t96.square = !0, _t96.snappingIndex = this._source.points()[0].index, a.append(this.createLineAnchor({
                points: [_t96],
                pointsCursorType: c
              }, 0));
            }

            this._renderer = a;
          }
        }
      }, {
        key: "_needLabelExclusionPath",
        value: function _needLabelExclusionPath(e) {
          var t = this._source.properties().childs(),
              i = "horizontal" === t.textOrientation.value(),
              n = t.text.value();

          if (i) return "" !== n.trim();
          if ("center" !== t.horzLabelsAlign.value()) return !1;
          var r = e.getLinesInfo().lines;
          if ("" === r[r.length - 1] && r.pop(), r.length % 2 == 0) return !1;
          if ("" === r[Math.floor(r.length / 2)].trim()) return !1;
          return !0;
        }
      }]);

      return u;
    }(h.AlertableLineSourcePaneView);
  },
  21477: function _(e, t, i) {
    "use strict";

    i.d(t, {
      PaneRendererCachedImage: function PaneRendererCachedImage() {
        return o;
      }
    });
    var n = i(86441),
        r = i(34026),
        s = i(18807);

    var o =
    /*#__PURE__*/
    function () {
      function o(e, t) {
        _classCallCheck(this, o);

        this._cacheRect = null, this._targetRect = null, this._cacheProvider = e, this._index = t;
      }

      _createClass(o, [{
        key: "draw",
        value: function draw(e, t) {
          var i = this._cacheProvider.getCacheRects(t, this._index);

          if (null === i) return this._cacheRect = null, void (this._targetRect = null);
          if (this._cacheRect = i.cacheRect, this._targetRect = i.targetRect, 0 === this._cacheRect.width || 0 === this._cacheRect.height || 0 === this._targetRect.width || 0 === this._targetRect.height) return;
          e.save(), e.setTransform(1, 0, 0, 1, 0, 0);

          var n = t.pixelRatio,
              r = this._cacheProvider.getCacheCanvas(t);

          e.drawImage(r, Math.round(this._cacheRect.left * n), Math.round(this._cacheRect.top * n), this._cacheRect.width * n, this._cacheRect.height * n, Math.round(this._targetRect.left * n), Math.round(this._targetRect.top * n), this._targetRect.width * n, this._targetRect.height * n), e.restore();
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._targetRect) return null;
          var t = new n.Point(this._targetRect.left, this._targetRect.top),
              i = t.add(new n.Point(this._targetRect.width, this._targetRect.height));
          return (0, r.pointInBox)(e, (0, n.box)(t, i)) ? new s.HitTestResult(s.HitTarget.Regular) : null;
        }
      }]);

      return o;
    }();
  },
  81139: function _(e, t, i) {
    "use strict";

    i.d(t, {
      ArcWedgeRenderer: function ArcWedgeRenderer() {
        return o;
      }
    });
    var n = i(18807),
        r = i(87095),
        s = i(15187);

    var o =
    /*#__PURE__*/
    function (_s$MediaCoordinatesPa2) {
      _inherits(o, _s$MediaCoordinatesPa2);

      function o() {
        var _this111;

        _classCallCheck(this, o);

        _this111 = _possibleConstructorReturn(this, _getPrototypeOf(o).apply(this, arguments)), _this111._data = null, _this111._hitTest = new n.HitTestResult(n.HitTarget.MovePoint), _this111._backHitTest = new n.HitTestResult(n.HitTarget.MovePointBackground);
        return _this111;
      }

      _createClass(o, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "setHitTest",
        value: function setHitTest(e) {
          this._hitTest = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data) return null;
          var t = e.subtract(this._data.center),
              i = t.length();

          if (Math.abs(i - this._data.radius) <= 4) {
            var _t97 = e.subtract(this._data.p1).length(),
                _i95 = e.subtract(this._data.p2).length();

            if (Math.max(_t97, _i95) <= this._data.p1.subtract(this._data.p2).length()) return this._hitTest;
          }

          if (this._data.fillBackground && i <= this._data.radius) {
            var _e131 = this._data.p1.subtract(this._data.center).normalized(),
                _i96 = this._data.p2.subtract(this._data.center).normalized(),
                _n73 = t.normalized(),
                _r64 = _e131.dotProduct(_i96),
                _s43 = _n73.dotProduct(_e131),
                _o40 = _n73.dotProduct(_i96);

            if (_s43 >= _r64 && _o40 >= _r64) return this._backHitTest;
          }

          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;
          var t = e.context;

          if (t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.arc(this._data.center.x, this._data.center.y, this._data.radius, this._data.edge1, this._data.edge2, !0), t.stroke(), this._data.fillBackground) {
            if (t.arc(this._data.center.x, this._data.center.y, this._data.prevRadius, this._data.edge2, this._data.edge1, !1), this._data.gradient) {
              var _e132 = t.createRadialGradient(this._data.center.x, this._data.center.y, this._data.prevRadius, this._data.center.x, this._data.center.y, this._data.radius);

              _e132.addColorStop(0, (0, r.generateColor)(this._data.color1, this._data.transparency)), _e132.addColorStop(1, (0, r.generateColor)(this._data.color2, this._data.transparency)), t.fillStyle = _e132;
            } else t.fillStyle = (0, r.generateColor)(this._data.color, this._data.transparency, !0);

            t.fill();
          }
        }
      }]);

      return o;
    }(s.MediaCoordinatesPaneRenderer);
  },
  2436: function _(e, t, i) {
    "use strict";

    i.d(t, {
      cubicBezierHitTest: function cubicBezierHitTest() {
        return s;
      },
      extendQuadroBezier: function extendQuadroBezier() {
        return o;
      },
      quadroBezierHitTest: function quadroBezierHitTest() {
        return r;
      }
    });
    var n = i(4652);

    function r(e, t, i, r, s) {
      var o = i.subtract(e).length() + i.subtract(t).length(),
          a = Math.max(3 / o, .02);
      var l;

      for (var _o41 = 0;; _o41 += a) {
        _o41 > 1 && (_o41 = 1);

        var _a34 = e.scaled((1 - _o41) * (1 - _o41)),
            d = i.scaled(2 * _o41 * (1 - _o41)),
            h = t.scaled(_o41 * _o41),
            c = _a34.add(d).add(h);

        if (void 0 !== l) {
          if ((0, n.distanceToSegment)(c, l, r).distance < s) return !0;
        } else if (c.subtract(r).length() < s) return !0;

        if (l = c, 1 === _o41) break;
      }

      return !1;
    }

    function s(e, t, i, r, s, o) {
      var a = i.subtract(e).length() + r.subtract(i).length() + t.subtract(r).length(),
          l = Math.max(3 / a, .02);
      var d;

      for (var _a35 = 0;; _a35 += l) {
        _a35 > 1 && (_a35 = 1);

        var _l24 = e.scaled((1 - _a35) * (1 - _a35) * (1 - _a35)),
            h = i.scaled(3 * (1 - _a35) * (1 - _a35) * _a35),
            c = r.scaled(3 * (1 - _a35) * _a35 * _a35),
            u = t.scaled(_a35 * _a35 * _a35),
            p = _l24.add(h).add(c).add(u);

        if (void 0 !== d) {
          if ((0, n.distanceToSegment)(p, d, s).distance < o) return !0;
        } else if (p.subtract(s).length() < o) return !0;

        if (d = p, 1 === _a35) break;
      }

      return !1;
    }

    function o(e, t, i, n, r) {
      var s = i.subtract(e).length() + i.subtract(t).length();
      if (!s) return [];

      var o = function (e, t, i, n, r) {
        var s = [],
            o = a(e.y, t.y, i.y, 0).concat(a(e.y, t.y, i.y, r));

        for (var _r65 = 0; _r65 < o.length; _r65++) {
          var _a36 = l(e.x, t.x, i.x, o[_r65]);

          _a36 >= 0 && _a36 <= n && s.push(o[_r65]);
        }

        var d = a(e.x, t.x, i.x, 0).concat(a(e.x, t.x, i.x, n));

        for (var _n74 = 0; _n74 < d.length; _n74++) {
          var _o42 = l(e.y, t.y, i.y, d[_n74]);

          _o42 >= 0 && _o42 <= r && s.push(d[_n74]);
        }

        return s;
      }(e, t, i, n, r).filter(function (e) {
        return e > 1;
      }).sort(function (e, t) {
        return e - t;
      });

      t.x >= 0 && t.x <= n && t.y >= 0 && t.y <= r && o.unshift(1);
      var d = 3 / s,
          h = [];

      for (var _n75 = 0; _n75 < o.length - 1; _n75 += 2) {
        var _r66 = d,
            _s44 = o[_n75],
            _a37 = o[_n75 + 1] + _r66;

        var _l25 = [];

        for (; _s44 <= _a37;) {
          var _n76 = e.scaled((1 - _s44) * (1 - _s44)),
              _o43 = i.scaled(2 * _s44 * (1 - _s44)),
              _d27 = t.scaled(_s44 * _s44),
              _h24 = _n76.add(_o43).add(_d27);

          if (_l25.length > 0) {
            _l25[_l25.length - 1].subtract(_h24).length() < 2 && (_a37 += _r66, _r66 *= 2);
          }

          _l25.push(_h24), _s44 += _r66;
        }

        _l25.length > 0 && h.push(_l25);
      }

      return h;
    }

    function a(e, t, i, n) {
      var r = [],
          s = e - 2 * i + t,
          o = 2 * i - 2 * e,
          a = e - n;

      if (Math.abs(s) > 1e-8) {
        var _e133 = o * o - 4 * s * a;

        _e133 >= 0 && (r.push((-o + Math.sqrt(_e133)) / (2 * s)), r.push((-o - Math.sqrt(_e133)) / (2 * s)));
      } else r.push(-a / o);

      return r;
    }

    function l(e, t, i, n) {
      return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * i + n * n * t;
    }
  },
  14146: function _(e, t, i) {
    "use strict";

    i.d(t, {
      ChannelRenderer: function ChannelRenderer() {
        return u;
      }
    });
    var n = i(27714),
        r = i(50151),
        s = i(86441),
        o = i(34026),
        a = i(4652),
        l = i(5531),
        d = i(18807),
        h = i(87095),
        c = i(15187);

    var u =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa6) {
      _inherits(u, _c$MediaCoordinatesPa6);

      function u() {
        var _this112;

        _classCallCheck(this, u);

        _this112 = _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments)), _this112._data = null;
        return _this112;
      }

      _createClass(u, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || !this._data.hittestOnBackground) return null;

          var i = this._visiblePolygon((0, n.size)({
            width: t.cssWidth,
            height: t.cssHeight
          }));

          return null !== i && (0, o.pointInPolygon)(e, i) ? new d.HitTestResult(d.HitTarget.MovePointBackground) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data) return;

          var t = e.context,
              i = this._visiblePolygon(e.mediaSize);

          if (null !== i) {
            t.beginPath(), t.moveTo(i[0].x, i[0].y);

            for (var _e134 = 1; _e134 < i.length; _e134++) {
              t.lineTo(i[_e134].x, i[_e134].y);
            }

            t.fillStyle = (0, h.generateColor)(this._data.color, this._data.transparency, !0), t.fill();
          }
        }
      }, {
        key: "_visiblePolygon",
        value: function _visiblePolygon(e) {
          var t = (0, r.ensureNotNull)(this._data),
              i = t.p1,
              n = t.p2,
              o = t.p3,
              l = t.p4;
          if ((0, s.equalPoints)(i, n) || (0, s.equalPoints)(o, l) || (0, a.distanceToLine)(i, n, o).distance < 1e-6 && (0, a.distanceToLine)(i, n, l).distance < 1e-6) return null;
          if (e.width <= 0 || e.height <= 0) return null;
          var d = [new s.Point(0, 0), new s.Point(e.width, 0), new s.Point(e.width, e.height), new s.Point(0, e.height)];
          return d = p(d, i, n, [l, o]), d = p(d, l, o, [i, n]), (0, s.equalPoints)(o, i) || t.extendLeft || (d = p(d, o, i, [n, l])), d;
        }
      }]);

      return u;
    }(c.MediaCoordinatesPaneRenderer);

    function p(e, t, i, n) {
      var r = (0, s.equalPoints)(i, n[0]) ? (0, s.equalPoints)(i, n[1]) ? null : n[1] : n[0];
      return null !== e && null !== r ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((0, s.lineThroughPoints)(t, i), r)) : null;
    }
  },
  23966: function _(e, t, i) {
    "use strict";

    i.d(t, {
      DisjointChannelRenderer: function DisjointChannelRenderer() {
        return _;
      }
    });
    var n = i(27714),
        r = i(50151),
        s = i(86441),
        o = i(34026),
        a = i(4652),
        l = i(5531),
        d = i(79849),
        h = i(18807),
        c = i(28621),
        u = i(87095),
        p = i(15187);

    var _ =
    /*#__PURE__*/
    function () {
      function _() {
        _classCallCheck(this, _);

        this._parallelChannelRenderer = new c.ParallelChannelRenderer(), this._disjointChannelIntersectionRenderer = new g(), this._selectedRenderer = this._disjointChannelIntersectionRenderer;
      }

      _createClass(_, [{
        key: "setData",
        value: function setData(e) {
          if (e.points.length < 4) return;

          var _e$points = _slicedToArray(e.points, 4),
              t = _e$points[0],
              i = _e$points[1],
              n = _e$points[2],
              r = _e$points[3];

          if ((0, s.equalPoints)(t, i) || (0, s.equalPoints)(n, r) || (0, a.distanceToLine)(t, i, n).distance < 1e-6 && (0, a.distanceToLine)(t, i, r).distance < 1e-6) this._selectedRenderer = null;else {
            null !== (0, l.intersectLines)((0, s.lineThroughPoints)(t, i), (0, s.lineThroughPoints)(n, r)) ? (this._disjointChannelIntersectionRenderer.setData(e), this._selectedRenderer = this._disjointChannelIntersectionRenderer) : (this._parallelChannelRenderer.setData({
              extendleft: e.extendleft,
              extendright: e.extendright,
              points: [t, i, r, n],
              fillBackground: !0,
              backcolor: e.backcolor,
              transparency: e.transparency,
              color: "rgba(0,0,0,0)",
              linestyle: d.LINESTYLE_SOLID,
              linewidth: 0,
              showMidline: !1,
              hittestOnBackground: e.hittestOnBackground
            }), this._selectedRenderer = this._parallelChannelRenderer);
          }
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          return null !== this._selectedRenderer ? this._selectedRenderer.hitTest(e, t) : null;
        }
      }, {
        key: "draw",
        value: function draw(e, t) {
          null !== this._selectedRenderer && this._selectedRenderer.draw(e, t);
        }
      }]);

      return _;
    }();

    var g =
    /*#__PURE__*/
    function (_p$MediaCoordinatesPa) {
      _inherits(g, _p$MediaCoordinatesPa);

      function g() {
        var _this113;

        _classCallCheck(this, g);

        _this113 = _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments)), _this113._data = null;
        return _this113;
      }

      _createClass(g, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || !this._data.hittestOnBackground) return null;
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this._visiblePolygons((0, n.size)({
              width: t.cssWidth,
              height: t.cssHeight
            }))[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _i97 = _step11.value;
              if ((0, o.pointInPolygon)(e, _i97)) return new h.HitTestResult(h.HitTarget.MovePointBackground);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 4) return;
          var t = e.context;
          t.fillStyle = (0, u.generateColor)(this._data.backcolor, this._data.transparency);
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this._visiblePolygons(e.mediaSize)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _i98 = _step12.value;
              t.beginPath(), t.moveTo(_i98[0].x, _i98[0].y);

              for (var _e135 = 1; _e135 < _i98.length; _e135++) {
                t.lineTo(_i98[_e135].x, _i98[_e135].y);
              }

              t.fill();
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }
        }
      }, {
        key: "_visiblePolygons",
        value: function _visiblePolygons(e) {
          var t = (0, r.ensureNotNull)(this._data),
              _t$points = _slicedToArray(t.points, 4),
              i = _t$points[0],
              n = _t$points[1],
              o = _t$points[2],
              a = _t$points[3];

          if (e.width <= 0 || e.height <= 0) return [];
          var d = (0, l.intersectLines)((0, s.lineThroughPoints)(i, n), (0, s.lineThroughPoints)(o, a));
          if (null === d) return [];
          var h = [new s.Point(0, 0), new s.Point(e.width, 0), new s.Point(e.width, e.height), new s.Point(0, e.height)],
              c = [];
          {
            var _e136 = h;

            var _r67 = i.subtract(n).add(d),
                _s45 = a.subtract(o).add(d);

            _e136 = f(_e136, d, _r67, [_s45, _s45]), _e136 = x(_e136, t), _e136 = f(_e136, _s45, d, [_r67, _r67]), null !== _e136 && c.push(_e136);
          }
          {
            var _e137 = h;

            var _r68 = n.subtract(i).add(d),
                _s46 = o.subtract(a).add(d);

            _e137 = f(_e137, d, _r68, [_s46, _s46]), _e137 = x(_e137, t), _e137 = f(_e137, _s46, d, [_r68, _r68]), null !== _e137 && c.push(_e137);
          }
          return c;
        }
      }]);

      return g;
    }(p.MediaCoordinatesPaneRenderer);

    function f(e, t, i, n) {
      var r = (0, s.equalPoints)(i, n[0]) ? (0, s.equalPoints)(i, n[1]) ? null : n[1] : n[0];
      return null !== e && null !== r ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((0, s.lineThroughPoints)(t, i), r)) : null;
    }

    function v(e, t, i) {
      return null !== e ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((n = t, (0, s.line)(1, 0, -n)), new s.Point(i, 0))) : null;
      var n;
    }

    function x(e, t) {
      var _t$points2 = _slicedToArray(t.points, 2),
          i = _t$points2[0],
          n = _t$points2[1];

      return t.extendleft || (e = v(e, i.x, n.x)), t.extendright || (e = v(e, n.x, i.x)), e;
    }
  },
  70531: function _(e, t, i) {
    "use strict";

    i.d(t, {
      EllipseRendererSimple: function EllipseRendererSimple() {
        return d;
      }
    });
    var n = i(18807),
        r = i(37160),
        s = i(86441),
        o = i(87095),
        a = i(15187),
        l = i(68441);

    var d =
    /*#__PURE__*/
    function (_a$MediaCoordinatesPa2) {
      _inherits(d, _a$MediaCoordinatesPa2);

      function d(e, t, i) {
        var _this114;

        _classCallCheck(this, d);

        _this114 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this)), _this114._data = e, _this114._hitTest = t || new n.HitTestResult(n.HitTarget.MovePoint), _this114._backgroundHitTest = i || new n.HitTestResult(n.HitTarget.MovePointBackground);
        return _this114;
      }

      _createClass(d, [{
        key: "hitTest",
        value: function hitTest(e) {
          if (this._data.points.length < 2) return null;
          var t = this._data.points[0],
              i = this._data.points[1],
              n = .5 * Math.abs(t.x - i.x),
              o = Math.abs(t.x - i.x),
              a = Math.abs(t.y - i.y),
              l = t.add(i).scaled(.5);
          var d = e.subtract(l);
          if (o < 1 || a < 1) return null;
          var h = (i.y - t.y) / (i.x - t.x);
          d = new s.Point(d.x, d.y / h);
          var c = d.x * d.x + d.y * d.y - n * n;
          return c = (0, r.sign)(c) * Math.sqrt(Math.abs(c / n)), Math.abs(c) < 3 ? this._hitTest : this._data.fillBackground && !this._data.noHitTestOnBackground && c < 3 ? this._backgroundHitTest : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t = e.context;
          t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, void 0 !== this._data.linestyle && (0, l.setLineStyle)(t, this._data.linestyle);
          var i = this._data.points[0],
              n = this._data.points[1],
              r = Math.abs(i.x - n.x),
              s = Math.abs(i.y - n.y),
              a = i.add(n).scaled(.5);
          if (r < 1 || s < 1) return;
          var d = 0;

          if (this._data.wholePoints) {
            var _e138 = this._data.wholePoints[0],
                _t98 = this._data.wholePoints[1];
            d = Math.abs(_e138.x - _t98.x);
          }

          t.save(), t.translate(a.x, a.y), t.scale(1, s / r), t.beginPath(), t.arc(0, 0, r / 2, 0, 2 * Math.PI, !1), t.restore(), t.stroke(), this._data.fillBackground && (this._data.wholePoints && (t.translate(a.x, a.y), t.scale(1, s / r), t.arc(0, 0, d / 2, 0, 2 * Math.PI, !0)), t.fillStyle = (0, o.generateColor)(this._data.backcolor, this._data.transparency, !0), t.fill());
        }
      }]);

      return d;
    }(a.MediaCoordinatesPaneRenderer);
  },
  57352: function _(e, t, i) {
    "use strict";

    function n(e, t) {
      return e.pixelRatio === t.pixelRatio;
    }

    i.d(t, {
      areEqualPaneRenderParams: function areEqualPaneRenderParams() {
        return n;
      }
    });
  },
  79059: function _(e, t, i) {
    "use strict";

    i.d(t, {
      LineAnchorRenderer: function LineAnchorRenderer() {
        return x;
      }
    });
    var n = i(86441),
        r = i(34026),
        s = i(50151),
        o = i(68441),
        a = i(1722),
        l = i(18807),
        d = i(66103),
        h = i(45197),
        c = i(59590);

    var u =
    /*#__PURE__*/
    function (_n$Point) {
      _inherits(u, _n$Point);

      function u(e, t, i, n) {
        var _this115;

        _classCallCheck(this, u);

        _this115 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this115.data = i, _this115.square = n;
        return _this115;
      }

      return u;
    }(n.Point);

    function p(e, t, i, n) {
      var r = i + n / 2;
      (0, o.drawRoundRect)(e, t.x - r, t.y - r, 2 * r, 2 * r, (i + n) / 2), e.closePath(), e.lineWidth = n;
    }

    function _(e, t, i, n) {
      e.globalAlpha = .2, p(e, t, i, n), e.stroke(), e.globalAlpha = 1;
    }

    function g(e, t, i, n) {
      p(e, t, i - n, n), e.fill(), e.stroke();
    }

    function f(e, t, i, n) {
      e.globalAlpha = .2, e.beginPath(), e.arc(t.x, t.y, i + n / 2, 0, 2 * Math.PI, !0), e.closePath(), e.lineWidth = n, e.stroke(), e.globalAlpha = 1;
    }

    function v(e, t, i, n) {
      e.beginPath(), e.arc(t.x, t.y, i - n / 2, 0, 2 * Math.PI, !0), e.closePath(), e.lineWidth = n, e.fill(), e.stroke();
    }

    var x =
    /*#__PURE__*/
    function (_c$BitmapCoordinatesP) {
      _inherits(x, _c$BitmapCoordinatesP);

      function x(e) {
        var _this116;

        _classCallCheck(this, x);

        _this116 = _possibleConstructorReturn(this, _getPrototypeOf(x).call(this)), _this116._data = null != e ? e : null;
        return _this116;
      }

      _createClass(x, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          var t;
          if (null === this._data || this._data.disableInteractions) return null;
          var _this$_data8 = this._data,
              i = _this$_data8.radius,
              n = _this$_data8.points,
              r = _this$_data8.pointsCursorType,
              s = _this$_data8.hittestResult,
              o = (0, h.interactionTolerance)().anchor;

          for (var _a38 = 0; _a38 < n.length; ++_a38) {
            var _h25 = n[_a38];
            if (_h25.subtract(e).length() <= i + o) return new l.HitTestResult(Array.isArray(s) ? s[_a38] : s, {
              pointIndex: _h25.data,
              cursorType: null !== (t = null == r ? void 0 : r[_a38]) && void 0 !== t ? t : d.PaneCursorType.Default,
              activeItem: _h25.activeItem,
              snappingPrice: _h25.snappingPrice,
              snappingIndex: _h25.snappingIndex,
              nonDiscreteIndex: _h25.nonDiscreteIndex
            });
          }

          return null;
        }
      }, {
        key: "doesIntersectWithBox",
        value: function doesIntersectWithBox(e) {
          return null !== this._data && this._data.points.some(function (t) {
            return (0, r.pointInBox)(t, e);
          });
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || !this._data.visible) return;
          var t = [],
              i = [],
              n = [],
              r = [];

          for (var _e139 = 0; _e139 < this._data.points.length; ++_e139) {
            var _s47 = this._data.points[_e139],
                _o44 = this._data.backgroundColors[_e139];
            _s47.square ? (t.push(_s47), i.push(_o44)) : (n.push(_s47), r.push(_o44));
          }

          t.length && this._drawPoints(e, t, i, g, _), n.length && this._drawPoints(e, n, r, v, f);
        }
      }, {
        key: "_drawPoints",
        value: function _drawPoints(e, t, i, n, r) {
          var o = e.context,
              l = e.horizontalPixelRatio,
              d = e.verticalPixelRatio,
              c = (0, s.ensureNotNull)(this._data),
              p = c.currentPoint,
              _ = c.radius;
          var g = Math.max(1, Math.floor((c.strokeWidth || 2) * l));
          c.selected && (g += Math.max(1, Math.floor(l / 2)));
          var f = Math.max(1, Math.floor(l));
          var v = Math.round(_ * l * 2);
          v % 2 != f % 2 && (v += 1);
          var x = f % 2 / 2,
              m = (0, h.interactionTolerance)().anchor;
          o.strokeStyle = c.color;

          for (var _e140 = 0; _e140 < t.length; ++_e140) {
            var _s48 = t[_e140];
            o.fillStyle = i[_e140];

            if (!((0, a.isInteger)(_s48.data) && c.linePointBeingEdited === _s48.data)) {
              if (n(o, new u(Math.round(_s48.x * l) + x, Math.round(_s48.y * d) + x, _s48.data, _s48.square), v / 2, g), !c.disableInteractions) {
                if (_s48.subtract(p).length() <= _ + m) {
                  var _e141 = Math.max(1, Math.floor(c.selectedStrokeWidth * l));

                  var _t99 = Math.round(_ * l * 2);

                  _t99 % 2 != f % 2 && (_t99 += 1);
                  r(o, new u(Math.round(_s48.x * l) + x, Math.round(_s48.y * d) + x, _s48.data, _s48.square), _t99 / 2, _e141);
                }
              }
            }
          }
        }
      }]);

      return x;
    }(c.BitmapCoordinatesPaneRenderer);
  },
  28621: function _(e, t, i) {
    "use strict";

    i.d(t, {
      ParallelChannelRenderer: function ParallelChannelRenderer() {
        return p;
      }
    });
    var n = i(27714),
        r = i(50151),
        s = i(86441),
        o = i(4652),
        a = i(5531),
        l = i(18807),
        d = i(45197),
        h = i(87095),
        c = i(15187),
        u = i(68441);

    var p =
    /*#__PURE__*/
    function (_c$MediaCoordinatesPa7) {
      _inherits(p, _c$MediaCoordinatesPa7);

      function p(e, t) {
        var _this117;

        _classCallCheck(this, p);

        _this117 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this117._data = null, _this117._hittestResult = e || new l.HitTestResult(l.HitTarget.MovePoint), _this117._backHittestResult = t || new l.HitTestResult(l.HitTarget.MovePointBackground);
        return _this117;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e, t) {
          if (null === this._data || this._data.points.length < 2) return null;

          var i = (0, n.size)({
            width: t.cssWidth,
            height: t.cssHeight
          }),
              _this$_data$points3 = _slicedToArray(this._data.points, 2),
              r = _this$_data$points3[0],
              s = _this$_data$points3[1],
              o = this._extendAndHitTestLineSegment(e, r, s, i);

          if (null !== o) return o;

          if (4 === this._data.points.length && !this._data.skipTopLine) {
            var _this$_data$points4 = _slicedToArray(this._data.points, 4),
                _t100 = _this$_data$points4[2],
                _n77 = _this$_data$points4[3],
                _o45 = this._extendAndHitTestLineSegment(e, _t100, _n77, i);

            if (null !== _o45) return _o45;

            if (this._data.showMidline && !this._data.skipLines) {
              var _o46 = r.add(_t100).scaled(.5),
                  _a39 = s.add(_n77).scaled(.5),
                  _l26 = this._extendAndHitTestLineSegment(e, _o46, _a39, i);

              if (null !== _l26) return _l26;
            }
          }

          return this._data.hittestOnBackground && this._data.fillBackground ? this._hitTestBackground(e) : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          var t = e.context;
          t.lineCap = "round", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, (0, u.setLineStyle)(t, this._data.linestyle);

          var _this$_data$points5 = _slicedToArray(this._data.points, 2),
              i = _this$_data$points5[0],
              n = _this$_data$points5[1];

          if (this._data.points.some(function (e) {
            return !isFinite(e.y);
          })) this._extendAndDrawLineSegment(t, i, n, e.mediaSize);else if (this._data.skipLines || this._extendAndDrawLineSegment(t, i, n, e.mediaSize), 4 === this._data.points.length) {
            var _this$_data$points6 = _slicedToArray(this._data.points, 4),
                _r69 = _this$_data$points6[2],
                _s49 = _this$_data$points6[3];

            if (this._data.skipLines || this._data.skipTopLine || this._extendAndDrawLineSegment(t, _r69, _s49, e.mediaSize), this._data.fillBackground && this._drawBackground(t, this._data.points, e.mediaSize), this._data.showMidline && !this._data.skipLines) {
              t.strokeStyle = this._data.midcolor, t.lineWidth = this._data.midlinewidth, (0, u.setLineStyle)(t, this._data.midlinestyle);

              var _o47 = i.add(_r69).scaled(.5),
                  _a40 = n.add(_s49).scaled(.5);

              this._extendAndDrawLineSegment(t, _o47, _a40, e.mediaSize);
            }
          }
        }
      }, {
        key: "_getColor",
        value: function _getColor() {
          var e = (0, r.ensureNotNull)(this._data);
          return (0, h.generateColor)(e.backcolor, e.transparency);
        }
      }, {
        key: "_extendAndDrawLineSegment",
        value: function _extendAndDrawLineSegment(e, t, i, n) {
          var r = this._extendAndClipLineSegment(t, i, n);

          null !== r && (0, u.drawLine)(e, r[0].x, r[0].y, r[1].x, r[1].y);
        }
      }, {
        key: "_extendAndHitTestLineSegment",
        value: function _extendAndHitTestLineSegment(e, t, i, n) {
          var r = this._extendAndClipLineSegment(t, i, n);

          if (null !== r) {
            if ((0, o.distanceToSegment)(r[0], r[1], e).distance <= 3) return this._hittestResult;
          }

          return null;
        }
      }, {
        key: "_extendAndClipLineSegment",
        value: function _extendAndClipLineSegment(e, t, i) {
          var n = (0, r.ensureNotNull)(this._data);
          return (0, d.extendAndClipLineSegment)(e, t, i.width, i.height, n.extendleft, n.extendright);
        }
      }, {
        key: "_drawBackground",
        value: function _drawBackground(e, t, i) {
          var n = (0, r.ensureNotNull)(this._data),
              _t101 = _slicedToArray(t, 4),
              a = _t101[0],
              l = _t101[1],
              d = _t101[2],
              h = _t101[3];

          if ((0, s.equalPoints)(a, l) || (0, s.equalPoints)(d, h) || (0, o.distanceToLine)(a, l, d).distance < 1e-6 || (0, o.distanceToLine)(a, l, h).distance < 1e-6) return;
          if (i.width <= 0 || i.height <= 0) return;
          var c = [new s.Point(0, 0), new s.Point(i.width, 0), new s.Point(i.width, i.height), new s.Point(0, i.height)];

          if (c = _(c, a, l, h), n.extendright || (c = _(c, l, h, d)), c = _(c, h, d, a), n.extendleft || (c = _(c, d, a, l)), null !== c) {
            e.beginPath(), e.moveTo(c[0].x, c[0].y);

            for (var _t102 = 1; _t102 < c.length; _t102++) {
              e.lineTo(c[_t102].x, c[_t102].y);
            }

            e.fillStyle = this._getColor(), e.fill();
          }
        }
      }, {
        key: "_hitTestBackground",
        value: function _hitTestBackground(e) {
          var t = (0, r.ensureNotNull)(this._data);
          if (4 !== t.points.length) return null;

          var _t$points3 = _slicedToArray(t.points, 3),
              i = _t$points3[0],
              n = _t$points3[1],
              s = _t$points3[2],
              o = (n.y - i.y) / (n.x - i.x),
              a = i.y + o * (e.x - i.x),
              l = s.y + o * (e.x - s.x),
              d = Math.max(a, l),
              h = Math.min(a, l),
              c = Math.min(i.x, n.x),
              u = Math.max(i.x, n.x);

          return !t.extendleft && e.x < c || !t.extendright && e.x > u ? null : e.y >= h && e.y <= d ? this._backHittestResult : null;
        }
      }]);

      return p;
    }(c.MediaCoordinatesPaneRenderer);

    function _(e, t, i, n) {
      return null !== e ? (0, a.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((0, s.lineThroughPoints)(t, i), n)) : null;
    }
  },
  79797: function _(e, t, i) {
    "use strict";

    i.d(t, {
      PolygonRenderer: function PolygonRenderer() {
        return p;
      }
    });
    var n = i(34026),
        r = i(4652),
        s = i(99031),
        o = i(73436),
        a = i(18807),
        l = i(87095),
        d = i(15187),
        h = i(45197),
        c = i(68441),
        u = i(79849);

    var p =
    /*#__PURE__*/
    function (_d$MediaCoordinatesPa4) {
      _inherits(p, _d$MediaCoordinatesPa4);

      function p(e) {
        var _this118;

        _classCallCheck(this, p);

        _this118 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this118._data = null, _this118._backHittest = new a.HitTestResult(a.HitTarget.MovePointBackground), _this118._points = [], _this118._hittest = null != e ? e : new a.HitTestResult(a.HitTarget.MovePoint);
        return _this118;
      }

      _createClass(p, [{
        key: "setData",
        value: function setData(e) {
          this._data = e, this._points = e.points;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable) return null;
          var t = Math.max((0, h.interactionTolerance)().line, Math.ceil(this._data.linewidth / 2)),
              i = this._points.length;

          if (1 === i) {
            return (0, n.pointInCircle)(e, this._points[0], t) ? this._hittest : null;
          }

          for (var _n78 = 1; _n78 < i; _n78++) {
            var _i99 = this._points[_n78 - 1],
                _s50 = this._points[_n78];
            if ((0, r.distanceToSegment)(_i99, _s50, e).distance <= t) return this._hittest;
          }

          if (this._data.filled && this._data.fillBackground && i > 0) {
            var _n79 = this._points[0],
                _s51 = this._points[i - 1];
            if ((0, r.distanceToSegment)(_n79, _s51, e).distance <= t) return this._hittest;
          }

          return this._data.filled && this._data.fillBackground && (0, n.pointInPolygon)(e, this._data.points) ? this._backHittest : null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t, i;
          var n = e.context,
              r = this._points.length;
          if (null === this._data || 0 === r) return;
          if (1 === r) return void this._drawPoint(n, this._points[0], this._data.linewidth / 2, this._data.color);
          n.beginPath();
          var a = this._data.linestyle === u.LINESTYLE_SOLID ? "round" : "butt",
              d = null !== (t = this._data.linecap) && void 0 !== t ? t : a;
          n.lineCap = d, n.strokeStyle = this._data.color, n.lineWidth = this._data.linewidth, n.lineJoin = null !== (i = this._data.linejoin) && void 0 !== i ? i : "round", (0, c.setLineStyle)(n, this._data.linestyle);
          var h = this._points[0];
          n.moveTo(h.x, h.y);
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this._points[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _e144 = _step13.value;
              n.lineTo(_e144.x, _e144.y);
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          if (this._data.filled && this._data.fillBackground && (n.fillStyle = (0, l.generateColor)(this._data.backcolor, this._data.transparency), n.fill()), this._data.filled && !this._data.skipClosePath && n.closePath(), r > 1) {
            if (this._data.leftend === o.LineEnd.Arrow) {
              var _e142 = this._correctArrowPoints(this._points[1], this._points[0], n.lineWidth, d);

              (0, s.drawArrow)(_e142[0], _e142[1], n, n.lineWidth, 1);
            }

            if (this._data.rightend === o.LineEnd.Arrow) {
              var _e143 = this._correctArrowPoints(this._points[r - 2], this._points[r - 1], n.lineWidth, d);

              (0, s.drawArrow)(_e143[0], _e143[1], n, n.lineWidth, 1);
            }
          }

          this._data.linewidth > 0 && n.stroke();
        }
      }, {
        key: "_drawPoint",
        value: function _drawPoint(e, t, i, n) {
          0 !== i && (e.beginPath(), e.fillStyle = n, e.arc(t.x, t.y, i, 0, 2 * Math.PI, !0), e.fill(), e.closePath());
        }
      }, {
        key: "_correctArrowPoints",
        value: function _correctArrowPoints(e, t, i, n) {
          var r = t.subtract(e),
              s = r.length();
          if ("butt" === n || s < 1) return [e, t];
          var o = s + i / 2;
          return [e, r.scaled(o / s).add(e)];
        }
      }]);

      return p;
    }(d.MediaCoordinatesPaneRenderer);
  },
  10695: function _(e, t, i) {
    "use strict";

    i.d(t, {
      TriangleRenderer: function TriangleRenderer() {
        return c;
      }
    });
    var n = i(4652),
        r = i(34026),
        s = i(15187),
        o = i(18807),
        a = i(87095),
        l = i(45197),
        d = i(68441),
        h = i(79849);

    var c =
    /*#__PURE__*/
    function (_s$MediaCoordinatesPa3) {
      _inherits(c, _s$MediaCoordinatesPa3);

      function c() {
        var _this119;

        _classCallCheck(this, c);

        _this119 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this119._data = null;
        return _this119;
      }

      _createClass(c, [{
        key: "setData",
        value: function setData(e) {
          this._data = e;
        }
      }, {
        key: "hitTest",
        value: function hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;

          var _this$_data$points7 = _slicedToArray(this._data.points, 2),
              t = _this$_data$points7[0],
              i = _this$_data$points7[1];

          var s = (0, n.distanceToSegment)(t, i, e);
          var a = (0, l.interactionTolerance)().line;
          if (s.distance <= a) return new o.HitTestResult(o.HitTarget.MovePoint);
          if (3 !== this._data.points.length) return null;
          var d = this._data.points[2];
          return s = (0, n.distanceToSegment)(i, d, e), s.distance <= a ? new o.HitTestResult(o.HitTarget.MovePoint) : (s = (0, n.distanceToSegment)(d, t, e), s.distance <= a ? new o.HitTestResult(o.HitTarget.MovePoint) : this._data.fillBackground && (0, r.pointInTriangle)(e, t, i, d) ? new o.HitTestResult(o.HitTarget.MovePointBackground) : null);
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(e) {
          var t;
          if (null === this._data || this._data.points.length < 2) return;
          var i = e.context,
              n = (null !== (t = this._data.linestyle) && void 0 !== t ? t : h.LINESTYLE_SOLID) === h.LINESTYLE_SOLID ? "round" : "butt";
          i.lineCap = n, i.lineJoin = "round", i.strokeStyle = this._data.color, i.lineWidth = this._data.linewidth, void 0 !== this._data.linestyle && (0, d.setLineStyle)(i, this._data.linestyle);

          var _this$_data$points8 = _slicedToArray(this._data.points, 2),
              r = _this$_data$points8[0],
              s = _this$_data$points8[1],
              o = 2 === this._data.points.length ? s : this._data.points[2];

          i.beginPath(), i.moveTo(r.x, r.y), i.lineTo(s.x, s.y), i.lineTo(o.x, o.y), i.lineTo(r.x, r.y), this._data.fillBackground && (i.fillStyle = (0, a.generateColor)(this._data.backcolor, this._data.transparency), i.fill()), i.stroke();
        }
      }]);

      return c;
    }(s.MediaCoordinatesPaneRenderer);
  },
  99620: function _(e, t, i) {
    "use strict";

    e.exports = i.p + "prediction-clock-white.c4675d37769f1df4c9ec.png";
  },
  88249: function _(e, t, i) {
    "use strict";

    e.exports = i.p + "prediction-failure-white.a838a6689f951970e715.png";
  },
  14012: function _(e, t, i) {
    "use strict";

    e.exports = i.p + "prediction-success-white.2fb9966b4c0f3529a2ea.png";
  },
  91481: function _(e) {
    e.exports = {
      ar: "in",
      ca_ES: "in",
      cs: ["za"],
      de: "in",
      el: ["σε"],
      en: "in",
      es: ["en"],
      fa: "in",
      fr: ["en"],
      he_IL: ["בתוך"],
      hu_HU: ["-ban/ben"],
      id_ID: ["dalam"],
      it: "in",
      ja: ["："],
      ko: "in",
      ms_MY: ["dalam"],
      nl_NL: "in",
      pl: ["w"],
      pt: ["em"],
      ro: "in",
      ru: ["за"],
      sv: "in",
      th: ["ใน"],
      tr: ["za"],
      vi: ["trong"],
      zh: ["在"],
      zh_TW: ["內"]
    };
  },
  44143: function _(e) {
    e.exports = {
      ar: ["أغلقت"],
      ca_ES: ["Tancat"],
      cs: ["Zavřený"],
      de: ["Geschlossen"],
      el: "Closed",
      en: "Closed",
      es: ["Cerrado"],
      fa: ["سود/زیان"],
      fr: ["Fermé"],
      he_IL: ["נסגר"],
      hu_HU: ["Záró"],
      id_ID: ["Tutup"],
      it: ["Chiuso"],
      ja: ["確定"],
      ko: ["포지션청산"],
      ms_MY: ["Tutup"],
      nl_NL: ["Gesloten"],
      pl: ["Zamknięte"],
      pt: ["Fechado"],
      ro: "Closed",
      ru: ["Закр. поз."],
      sv: "Closed",
      th: ["ปิด"],
      tr: ["Kapalı"],
      vi: ["Đóng"],
      zh: ["已平仓"],
      zh_TW: ["已平倉"]
    };
  },
  50140: function _(e) {
    e.exports = {
      ar: ["مفتوح"],
      ca_ES: ["Obertura"],
      cs: ["Otevřený"],
      de: ["Offener"],
      el: ["Opened"],
      en: "Open",
      es: ["Apertura"],
      fa: ["سود/زیان"],
      fr: ["Ouverture"],
      he_IL: ["נפתח"],
      hu_HU: ["Nyitva"],
      id_ID: ["Pembukaan"],
      it: ["Aperto"],
      ja: ["未確定"],
      ko: ["포지션보유"],
      ms_MY: ["Buka"],
      nl_NL: ["Opened"],
      pl: ["Otwarte"],
      pt: ["Aberto"],
      ro: "Open",
      ru: ["Откр. поз."],
      sv: "Open",
      th: ["เปิด"],
      tr: ["Açık"],
      vi: ["Mở"],
      zh: ["开仓"],
      zh_TW: ["未平倉"]
    };
  },
  16075: function _(e) {
    e.exports = {
      ar: ["إلغاء أمر"],
      ca_ES: ["Cancel·lar ordre"],
      cs: "Cancel Order",
      de: ["Auftrag abbrechen"],
      el: "Cancel Order",
      en: "Cancel Order",
      es: ["Cancelar orden"],
      fa: "Cancel Order",
      fr: ["Annuler Ordre"],
      he_IL: ["בטל פקודה"],
      hu_HU: ["Megbízás Törlése"],
      id_ID: ["Batalkan Order"],
      it: ["Annulla ordine"],
      ja: ["注文をキャンセル"],
      ko: ["주문 취소"],
      ms_MY: ["Batalkan Pesanan"],
      nl_NL: "Cancel Order",
      pl: ["Anuluj zlecenie"],
      pt: ["Cancelar ordem"],
      ro: "Cancel Order",
      ru: ["Отменить заявку"],
      sv: ["Avbryt order"],
      th: ["ยกเลิกคำสั่ง"],
      tr: ["Emir İptal"],
      vi: ["Hủy Lệnh"],
      zh: ["取消订单"],
      zh_TW: ["取消報單"]
    };
  },
  37431: function _(e) {
    e.exports = {
      ar: ["إغلاق صفقة"],
      ca_ES: "Close Position",
      cs: "Close Position",
      de: ["Position Schließen"],
      el: "Close Position",
      en: "Close Position",
      es: ["Cerrar posición"],
      fa: "Close Position",
      fr: ["Fermer la Position"],
      he_IL: ["סגור פוזיציה"],
      hu_HU: ["Záró Pozíció"],
      id_ID: ["Tutup Posisi"],
      it: ["Chiudi posizione"],
      ja: ["ポジション決済"],
      ko: ["포지션 닫기"],
      ms_MY: ["Kedudukan Penutup"],
      nl_NL: "Close Position",
      pl: ["Zamknij pozycję"],
      pt: ["Fechar Posição"],
      ro: "Close Position",
      ru: ["Закрыть позицию"],
      sv: ["Stäng position"],
      th: ["ปิดสถานะ"],
      tr: ["Pozisyonu Kapat"],
      vi: ["Đóng Trạng thái"],
      zh: ["平仓"],
      zh_TW: ["平倉"]
    };
  },
  968: function _(e) {
    e.exports = {
      ar: ["لم تنجح"],
      ca_ES: "FAILURE",
      cs: ["SELHÁNÍ"],
      de: ["FEHLER"],
      el: ["ΑΠΟΤΥΧΙΑ"],
      en: "FAILURE",
      es: ["FALLO"],
      fa: ["شکست"],
      fr: ["ÉCHEC"],
      he_IL: ["כישלון"],
      hu_HU: ["VESZTESÉG"],
      id_ID: ["KEGAGALAN"],
      it: ["OPERAZIONE NON RIUSCITA"],
      ja: ["失敗"],
      ko: ["실패"],
      ms_MY: ["KEGAGALAN"],
      nl_NL: ["Mislukt!"],
      pl: ["PORAŻKA"],
      pt: ["FALHA"],
      ro: "FAILURE",
      ru: ["НЕУДАЧА"],
      sv: ["MISSLYCKANDE"],
      th: ["ล้มเหลว"],
      tr: ["BAŞARISIZ"],
      vi: ["THẤT BẠI"],
      zh: ["失败"],
      zh_TW: ["失敗"]
    };
  },
  63706: function _(e) {
    e.exports = {
      ar: ["رأس"],
      ca_ES: ["Cap"],
      cs: "Head",
      de: ["Kopf"],
      el: "Head",
      en: "Head",
      es: ["Cabeza"],
      fa: "Head",
      fr: ["Tête"],
      he_IL: ["ראש"],
      hu_HU: ["Fej"],
      id_ID: "Head",
      it: ["Testa"],
      ja: ["ヘッド"],
      ko: ["머리"],
      ms_MY: ["Kepala"],
      nl_NL: "Head",
      pl: ["Głowa"],
      pt: ["Cabeça"],
      ro: "Head",
      ru: ["Голова"],
      sv: ["Huvud"],
      th: ["หัว"],
      tr: ["Baş"],
      vi: ["Đầu"],
      zh: ["头部"],
      zh_TW: ["頭"]
    };
  },
  68589: function _(e) {
    e.exports = {
      ar: ["الكتف الأيسر"],
      ca_ES: ["Espatlla esquerra"],
      cs: "Left Shoulder",
      de: ["Linke Schulter"],
      el: "Left Shoulder",
      en: "Left Shoulder",
      es: ["Hombro izquierdo"],
      fa: "Left Shoulder",
      fr: ["Épaule gauche"],
      he_IL: ["כתף שמאל"],
      hu_HU: ["Bal Váll"],
      id_ID: "Left Shoulder",
      it: ["Spalla sinistra"],
      ja: ["左ショルダー"],
      ko: ["왼어깨"],
      ms_MY: ["Bahu Kiri"],
      nl_NL: "Left Shoulder",
      pl: ["Lewe ramię"],
      pt: ["Ombro Esquerdo"],
      ro: "Left Shoulder",
      ru: ["Левое плечо"],
      sv: ["Vänster skuldra"],
      th: ["ไหล่ซ้าย"],
      tr: ["Sol Omuz"],
      vi: ["Vai trái"],
      zh: ["左肩"],
      zh_TW: ["左肩"]
    };
  },
  33241: function _(e) {
    e.exports = {
      ar: ["تعديل الأمر"],
      ca_ES: ["Modifica ordre"],
      cs: "Modify Order",
      de: ["Order modifizieren"],
      el: "Modify Order",
      en: "Modify Order",
      es: ["Modificar orden"],
      fa: "Modify Order",
      fr: ["Modifier l'ordre"],
      he_IL: ["שנה הוראה"],
      hu_HU: "Modify Order",
      id_ID: ["Memodifikasi Order"],
      it: ["Modifica ordine"],
      ja: ["注文の変更"],
      ko: ["오더 고치기"],
      ms_MY: ["Ubah Suai Pesanan"],
      nl_NL: "Modify Order",
      pl: ["Modyfikuj zlecenie"],
      pt: ["Modificar ordem"],
      ro: "Modify Order",
      ru: ["Изменить заявку"],
      sv: ["Ändra order"],
      th: ["แก้ไขออเดอร์"],
      tr: ["Emir Değiştir"],
      vi: ["Chỉnh Lệnh"],
      zh: ["修改订单"],
      zh_TW: ["修改訂單"]
    };
  },
  26787: function _(e) {
    e.exports = {
      ar: ["نجاح"],
      ca_ES: "SUCCESS",
      cs: ["ÚSPĚCH"],
      de: ["ERFOLG"],
      el: ["ΕΠΙΤΥΧΙΑ"],
      en: "SUCCESS",
      es: ["ÉXITO"],
      fa: ["موفقیت"],
      fr: ["SUCCÈS"],
      he_IL: ["הצלחה"],
      hu_HU: ["NYERESÉG"],
      id_ID: ["SUKSES"],
      it: ["OPERAZIONE RIUSCITA"],
      ja: ["成功"],
      ko: ["성공"],
      ms_MY: ["BERJAYA"],
      nl_NL: ["Succes!"],
      pl: ["SUKCES"],
      pt: ["SUCESSO"],
      ro: "SUCCESS",
      ru: ["УСПЕХ"],
      sv: ["FRAMGÅNG"],
      th: ["สำเร็จ"],
      tr: ["BAŞARILI"],
      vi: ["THÀNH CÔNG"],
      zh: ["成功"],
      zh_TW: ["成功"]
    };
  },
  438: function _(e) {
    e.exports = {
      ar: ["وقف:{stopChange} ({stopChangePercent}) {stopChangePip}، الكمية:‎{amount}‎"],
      ca_ES: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Import: {amount}"],
      cs: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      de: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Betrag: {amount}"],
      el: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      en: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      es: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Importe: {amount}"],
      fa: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      fr: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Montant: {amount}"],
      he_IL: ["סטופ: {stopChange} ({stopChangePercent}) {stopChangePip}, סכום: {amount}"],
      hu_HU: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Összeg: {amount}"],
      id_ID: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Jumlah: {amount}"],
      it: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Quantità: {amount}"],
      ja: ["ストップ: {stopChange} ({stopChangePercent}) {stopChangePip}, 金額: {amount}"],
      ko: ["스탑: {stopChange} ({stopChangePercent}) {stopChangePip}, 금액: {amount}"],
      ms_MY: ["Berhenti: {stopChange} ({stopChangePercent}) {stopChangePip}, Jumlah: {amount}"],
      nl_NL: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      pl: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Kwota: {amount}"],
      pt: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Quantidade: {amount}"],
      ro: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
      ru: ["Стоп: {stopChange} ({stopChangePercent}) {stopChangePip}, Сумма: {amount}"],
      sv: ["Stopp: {stopChange} ({stopChangePercent}) {stopChangePip}, belopp: {amount}"],
      th: ["หยุด: {stopChange} ({stopChangePercent}) {stopChangePip}, จำนวน: {amount}"],
      tr: ["Durdurma: {stopChange} ({stopChangePercent}) {stopChangePip}, Miktar: {amount}"],
      vi: ["Dừng: {stopChange} ({stopChangePercent}) {stopChangePip}, Số tiền: {amount}"],
      zh: ["止损:{stopChange} ({stopChangePercent}) {stopChangePip}, 账户: {amount}"],
      zh_TW: ["停損：{stopChange} ({stopChangePercent}) {stopChangePip}，賬戶：{amount}"]
    };
  },
  11810: function _(e) {
    e.exports = {
      ar: ["حماية المركز"],
      ca_ES: "Protect Position",
      cs: "Protect Position",
      de: ["Position absichern"],
      el: "Protect Position",
      en: "Protect Position",
      es: ["Proteger posición"],
      fa: "Protect Position",
      fr: ["Protéger la position"],
      he_IL: ["הגן על הפוזיציה."],
      hu_HU: "Protect Position",
      id_ID: ["Lindungi Posisi"],
      it: ["Proteggi posizione"],
      ja: ["ポジション保護"],
      ko: ["프로텍트 포지션"],
      ms_MY: ["Melindungi Kedudukan"],
      nl_NL: "Protect Position",
      pl: ["Zabezpiecz pozycję"],
      pt: ["Proteger a posição"],
      ro: "Protect Position",
      ru: ["Защитить позицию"],
      sv: ["Skydda position"],
      th: ["ป้องกันโพซิชั่น"],
      tr: ["Pozisyonu Koru"],
      vi: ["Bảo vệ Vị thế"],
      zh: ["保护持仓"],
      zh_TW: ["保護倉位"]
    };
  },
  87061: function _(e) {
    e.exports = {
      ar: ["كمية:‎{qty}‎"],
      ca_ES: ["Quantitat: {qty}"],
      cs: "Qty: {qty}",
      de: ["Anz: {qty}"],
      el: "Qty: {qty}",
      en: "Qty: {qty}",
      es: ["Cantidad: {qty}"],
      fa: "Qty: {qty}",
      fr: ["Qté: {qty}"],
      he_IL: ["כמות: {qty}"],
      hu_HU: ["Menny.: {qty}"],
      id_ID: ["Kuant: {qty}"],
      it: ["Q.tà: {qty}"],
      ja: ["数量: {qty}"],
      ko: ["수량: {qty}"],
      ms_MY: ["Kuantiti: {qty}"],
      nl_NL: "Qty: {qty}",
      pl: ["Ilość: {qty}"],
      pt: ["Qtde: {qty}"],
      ro: "Qty: {qty}",
      ru: ["Кол-во: {qty}"],
      sv: ["Kvt: {qty}"],
      th: ["จำนวน: {qty}"],
      tr: ["Mik: {qty}"],
      vi: ["S.Lg: {qty}"],
      zh: ["仓量:{qty}"],
      zh_TW: ["數量：{qty}"]
    };
  },
  19780: function _(e) {
    e.exports = {
      ar: ["عكس الصفقة"],
      ca_ES: "Reverse Position",
      cs: "Reverse Position",
      de: ["Position Umkehren"],
      el: "Reverse Position",
      en: "Reverse Position",
      es: ["Revertir posición"],
      fa: "Reverse Position",
      fr: ["Inverser la Position"],
      he_IL: ["הפוך פוזיציה"],
      hu_HU: ["Fordított Pozíció"],
      id_ID: ["Membalik Posisi"],
      it: ["Inverti posizione"],
      ja: ["ポジションを反転"],
      ko: ["리버스 포지션"],
      ms_MY: ["Kedudukan Terbalik"],
      nl_NL: "Reverse Position",
      pl: ["Odwróć pozycje"],
      pt: ["Reverter Posição"],
      ro: "Reverse Position",
      ru: ["Перевернуть позицию"],
      sv: ["Omvänd position"],
      th: ["ตำแหน่งการย้อนกลับ"],
      tr: ["Karşıt Pozisyon"],
      vi: ["Vị thế Đảo ngược"],
      zh: ["平仓反手"],
      zh_TW: ["平倉反手"]
    };
  },
  78934: function _(e) {
    e.exports = {
      ar: ["الكتف الأيمن"],
      ca_ES: ["Espatlla dreta"],
      cs: "Right Shoulder",
      de: ["Rechte Schulter"],
      el: "Right Shoulder",
      en: "Right Shoulder",
      es: ["Hombro derecho"],
      fa: "Right Shoulder",
      fr: ["Epaule droite"],
      he_IL: ["כתף ימין"],
      hu_HU: ["Jobb Váll"],
      id_ID: "Right Shoulder",
      it: ["Spalla destra"],
      ja: ["右ショルダー"],
      ko: ["오른어깨"],
      ms_MY: ["Bahu Kanan"],
      nl_NL: "Right Shoulder",
      pl: ["Prawe ramię"],
      pt: ["Ombro Direito"],
      ro: "Right Shoulder",
      ru: ["Правое плечо"],
      sv: ["Höger skuldra"],
      th: ["ไหล่ขวา"],
      tr: ["Sağ Omuz"],
      vi: ["Vai Phải"],
      zh: ["右肩"],
      zh_TW: ["右肩"]
    };
  },
  53115: function _(e) {
    e.exports = {
      ar: ["نسبة المخاطرة/العائد: {ratio}"],
      ca_ES: ["Ràtio risc/benefici: {ratio}"],
      cs: ["Poměr rizika / odměny: {ratio}"],
      de: ["Chance/Risiko Verhältnis: {ratio}"],
      el: "Risk/Reward Ratio: {ratio}",
      en: "Risk/Reward Ratio: {ratio}",
      es: ["Relación riesgo/beneficio: {ratio}"],
      fa: ["‫نسبت ریسک به سود: {ratio}"],
      fr: ["Ratio Risque/Récompense: {ratio}"],
      he_IL: ["יחס סיכוי/סיכון: {ratio}"],
      hu_HU: ["Kockázat/Nyereség Arány: {ratio}"],
      id_ID: ["Rasio Risiko/Perolehan: {ratio}"],
      it: ["Rapporto rischio/rendimento: {ratio}"],
      ja: ["リスク／リワード比: {ratio}"],
      ko: ["위험/보상율: {ratio}"],
      ms_MY: ["Nisbah Risiko/Ganjaran: {ratio}"],
      nl_NL: ["Risico/opbrengst ratio: {ratio}"],
      pl: ["Współczynnik Ryzyko/Zysk: {ratio}"],
      pt: ["Razão risco/retorno: {ratio}"],
      ro: "Risk/Reward Ratio: {ratio}",
      ru: ["Соотношение риск/прибыль: {ratio}"],
      sv: ["Risk/reward-kvot: {ratio}"],
      th: ["ความเสี่ยง/ผลตอบแทน : {ratio}"],
      tr: ["Risk/Ödül Oranı: {ratio}"],
      vi: ["Tỷ lệ Rủi ro/Lợi nhuận: {ratio}"],
      zh: ["盈亏比: {ratio}"],
      zh_TW: ["風險/報酬比：{ratio}"]
    };
  },
  15166: function _(e) {
    e.exports = {
      ar: ["هدف:{profitChange} ({profitChangePercent}) {profitChangePip}، الكمية:‎{amount}‎"],
      ca_ES: ["Objectiu: {profitChange} ({profitChangePercent}) {profitChangePip}, Import: {amount}"],
      cs: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      de: ["Ziel: {profitChange} ({profitChangePercent}) {profitChangePip}, Betrag: {amount}"],
      el: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      en: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      es: ["Objetivo: {profitChange} ({profitChangePercent}) {profitChangePip}, Importe: {amount}"],
      fa: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      fr: ["Cible: {profitChange} ({profitChangePercent}) {profitChangePip},Montant: {amount}"],
      he_IL: ["יעד: {profitChange} ({profitChangePercent}) {profitChangePip}, סכום: {amount}"],
      hu_HU: ["Cél: {profitChange} ({profitChangePercent}) {profitChangePip}, Összeg: {amount}"],
      id_ID: ["Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Jumlah: {amount}"],
      it: ["Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Quantità: {amount}"],
      ja: ["ターゲット: {profitChange} ({profitChangePercent}) {profitChangePip}, 金額: {amount}"],
      ko: ["타겟: {profitChange} ({profitChangePercent}) {profitChangePip}, 금액: {amount}"],
      ms_MY: ["Sasaran: {profitChange} ({profitChangePercent}) {profitChangePip}, Jumlah: {amount}"],
      nl_NL: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      pl: ["Cel: {profitChange} ({profitChangePercent}) {profitChangePip}, Kwota: {amount}"],
      pt: ["Alvos: {profitChange} ({profitChangePercent}) {profitChangePip}, Quantidade: {amount}"],
      ro: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
      ru: ["Цель: {profitChange} ({profitChangePercent}) {profitChangePip}, Сумма: {amount}"],
      sv: ["Mål: {profitChange} ({profitChangePercent}) {profitChangePip}, Belopp: {amount}"],
      th: ["เป้าหมาย: {profitChange} ({profitChangePercent}) {profitChangePip}, จำนวน: {amount}"],
      tr: ["Hedef: {profitChange} ({profitChangePercent}) {profitChangePip}, Miktar: {amount}"],
      vi: ["Mục tiêu: {profitChange} ({profitChangePercent}) {profitChangePip}, Số tiền: {amount}"],
      zh: ["目标: {profitChange} ({profitChangePercent}) {profitChangePip}, 账户: {amount}"],
      zh_TW: ["目標：{profitChange} ({profitChangePercent}) {profitChangePip}，賬戶：{amount}"]
    };
  },
  26273: function _(e) {
    e.exports = {
      ar: ["مسافة: {number} px"],
      ca_ES: ["distància: {number} px"],
      cs: ["Vzdálenost: {number} px"],
      de: ["Abstand: {number} px"],
      el: ["απόσταση: {number} px"],
      en: "distance: {number} px",
      es: ["distancia: {number} px"],
      fa: ["{number} px :فاصله مختصات"],
      fr: "distance: {number} px",
      he_IL: ["מרחק: {number} px"],
      hu_HU: ["távolság: {number} px"],
      id_ID: ["jarak: {number} px"],
      it: ["distanza {number} px"],
      ja: ["距離: {number} px"],
      ko: ["거리: {number} px"],
      ms_MY: ["jarak: {number} px"],
      nl_NL: ["afstand: {number} px"],
      pl: ["dystans: {number} px"],
      pt: ["distância: {number} px"],
      ro: "distance: {number} px",
      ru: ["Расстояние: {number} пк"],
      sv: ["avstånd: {number} px"],
      th: ["ระยะ: {number} px"],
      tr: ["mesafe: {number} px"],
      vi: ["khoảng cách: {number} px"],
      zh: ["距离: {number} px"],
      zh_TW: ["距離：{number} px"]
    };
  },
  72892: function _(e) {
    e.exports = {
      ar: ["‎{status}‎ الهدف والخسارة:‎{pnl}‎"],
      ca_ES: ["{status} PiG: {pnl}"],
      cs: ["{status} Z&Z: {pnl}"],
      de: ["{status} G&V: {pnl}"],
      el: "{status} P&L: {pnl}",
      en: "{status} P&L: {pnl}",
      es: ["{status} PyG: {pnl}"],
      fa: ["‎{status} P&L {pnl}‎"],
      fr: ["{status} Gains&Pertes: {pnl}"],
      he_IL: ["{status} רווח/הפסד: {pnl}"],
      hu_HU: "{status} P&L: {pnl}",
      id_ID: "{status} P&L: {pnl}",
      it: "{status} P&L: {pnl}",
      ja: ["{status}損益: {pnl}"],
      ko: ["{status} 손익: {pnl}"],
      ms_MY: "{status} P&L: {pnl}",
      nl_NL: ["{status} winst & verlies: {pnl}"],
      pl: "{status} P&L: {pnl}",
      pt: ["{status} L&P: {pnl}"],
      ro: "{status} P&L: {pnl}",
      ru: ["ПР/УБ {status}: {pnl}"],
      sv: "{status} P&L: {pnl}",
      th: ["{status} กำไร&ขาดทุน: {pnl}"],
      tr: ["{status} Kar/Zarar: {pnl}"],
      vi: ["{status} Lợi nhuận & Thua lỗ: {pnl}"],
      zh: ["{status} 盈利&亏损: {pnl}"],
      zh_TW: ["{status}損益表：{pnl}"]
    };
  }
}]);