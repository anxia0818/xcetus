"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[9498], {
  50210: function _(e, t, i) {
    i.r(t), i.d(t, {
      exportData: function exportData() {
        return h;
      }
    });
    var s = i(44352),
        l = i(50151),
        n = i(37591),
        o = i(12500),
        a = i(86094),
        r = i(72877),
        u = i(92052),
        c = i(37160),
        d = i(66764);
    var f = {
      includeTime: !0,
      includeUserTime: !1,
      includeSeries: !0,
      includeDisplayedValues: !1,
      includedStudies: "all",
      includeOffsetStudyValues: !1
    };

    function h(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var i = Object.assign({}, f, t),
          s = {
        schema: [],
        data: [],
        displayedData: []
      },
          n = e.timeScale().points(),
          r = e.mainSeries(),
          h = (0, d.getChartWidgetApiTimeConverter)(r.interval(), (0, l.ensureNotNull)(r.symbolInfo()), e),
          T = function (e, t) {
        var i = e.allStudies().filter(function (e) {
          return e.showInObjectTree();
        });
        if ("all" === t) return i;
        return i.filter(function (e) {
          return t.includes(e.id());
        });
      }(e, i.includedStudies),
          y = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = T[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _e9 = _step.value;

          var _t5 = p(_e9);

          y.push(_t5);
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

      var N = T.map(function (e) {
        return e.data();
      });
      (i.includeSeries || 0 === N.length) && N.push(r.bars());

      var x = function (e, t, i, s, n) {
        var r = (0, l.ensureNotNull)(e.range().value(), "time scale points range"),
            u = function (e, t, i, s) {
          var n, r;
          var u = s.from,
              d = s.to,
              f = e.range().value(),
              h = (0, l.ensureNotNull)(void 0 !== u ? e.indexOf(u, !0) : (0, l.ensureNotNull)(f).firstIndex),
              m = (0, l.ensureNotNull)(void 0 !== d ? e.indexOf(d, !0) : (0, l.ensureNotNull)(f).lastIndex);
          var p = m,
              T = h;

          for (var _e = 0; _e < t.length; _e++) {
            var _l = t[_e],
                _o = s.includeOffsetStudyValues ? (0, c.max)(null !== (r = null === (n = i[_e]) || void 0 === n ? void 0 : n.fieldPlotOffsets) && void 0 !== r ? r : [0]) : 0,
                _u = _l.search(h, a.PlotRowSearchMode.NearestRight);

            null !== _u && _u.index < p && (p = _u.index);

            var _d = _l.search(m, a.PlotRowSearchMode.NearestLeft);

            null !== _d && _d.index + _o > T && (T = _d.index + _o);
          }

          return (0, l.assert)(p <= T, "Range must contain at least 1 time point"), new o.BarsRange(p, T);
        }(e, t, i, n),
            d = u.firstBar(),
            f = u.lastBar(),
            h = [];

        for (var _e2 = d; _e2 <= f; _e2++) {
          var _t = {
            index: _e2,
            time: (0, l.ensureNotNull)(s.convertTimePointIndexToInternalTime(_e2)),
            publicTime: (0, l.ensureNotNull)(s.convertTimePointIndexToPublicTime(_e2))
          };

          if (!(void 0 !== n.from && _t.time < n.from)) {
            if (void 0 !== n.to && _t.time > n.to) break;
            if (!n.includeOffsetStudyValues && _e2 > r.lastIndex) break;
            h.push(_t);
          }
        }

        return h.length > 0 ? new m(h) : null;
      }(n, N, y, h, i);

      if (null === x) return s;
      var P = x.firstBar(),
          S = x.lastBar();
      i.includeTime && s.schema.push({
        type: "time"
      });
      var I = s.schema.length;
      i.includeUserTime && s.schema.push({
        type: "userTime"
      });
      var b = s.schema.length;

      if (i.includeSeries) {
        var _e3 = r.statusProvider({
          hideResolution: !0
        }).getSplitTitle(),
            _t2 = Object.values(_e3).filter(function (e) {
          return "" !== e;
        }).join(", ");

        s.schema.push(g("open", _t2)), s.schema.push(g("high", _t2)), s.schema.push(g("low", _t2)), s.schema.push(g("close", _t2));
      }

      var w = s.schema.length;

      for (var _i = 0, _y = y; _i < _y.length; _i++) {
        var _s$schema;

        var _e10 = _y[_i];

        (_s$schema = s.schema).push.apply(_s$schema, _toConsumableArray(_e10.fields));
      }

      var D = s.schema.length;
      if (0 === D) return s;

      for (var _e4 = P; _e4 <= S; ++_e4) {
        var _e5 = new Float64Array(D);

        _e5.fill(NaN), s.data.push(_e5), i.includeDisplayedValues && s.displayedData.push(new Array(D).fill(""));
      }

      if (i.includeTime || i.includeUserTime) {
        var _t3 = e.dateTimeFormatter();

        for (var _e6 = P; _e6 <= S; ++_e6) {
          var _n = x.item(_e6),
              _o2 = _n.time,
              _a = _n.publicTime,
              _r = new Date(1e3 * (0, l.ensureNotNull)(_a));

          if (i.includeTime && (s.data[_e6 - P][0] = (0, l.ensureNotNull)(_o2)), i.includeUserTime && (s.data[_e6 - P][I] = _r.getTime() / 1e3), i.includeDisplayedValues) {
            var _l2 = _t3.format(_r);

            i.includeTime && (s.displayedData[_e6 - P][0] = _l2), i.includeUserTime && (s.displayedData[_e6 - P][I] = _l2);
          }
        }
      }

      if (i.includeSeries) {
        var _e7 = r.bars().range(P, S),
            _t4 = (0, u.getPriceValueFormatterForSource)(r);

        _e7.each(function (e, l) {
          var n = s.data[e - P],
              o = v(l[1]),
              a = v(l[2]),
              r = v(l[3]),
              u = v(l[4]);

          if (n[b] = o, n[b + 1] = a, n[b + 2] = r, n[b + 3] = u, i.includeDisplayedValues) {
            var _i2 = s.displayedData[e - P];
            _i2[b] = _t4(o), _i2[b + 1] = _t4(a), _i2[b + 2] = _t4(r), _i2[b + 3] = _t4(u);
          }

          return !1;
        });
      }

      var _loop = function _loop(_e8) {
        var t = T[_e8],
            l = y[_e8],
            n = (0, u.getPriceValueFormatterForSource)(t);

        var _loop2 = function _loop2(_e11) {
          var o = l.fieldPlotOffsets[_e11],
              a = l.fieldToPlotIndex[_e11],
              r = P - o,
              u = S - o,
              c = w + _e11;
          t.data().range(r, u).each(function (e, t) {
            var l = s.data[e - r],
                o = v(t[a]);
            return l[c] = o, i.includeDisplayedValues && (s.displayedData[e - r][c] = n(o)), !1;
          });
        };

        for (var _e11 = 0; _e11 < l.fields.length; ++_e11) {
          _loop2(_e11);
        }

        w += l.fields.length;
      };

      for (var _e8 = 0; _e8 < T.length; ++_e8) {
        _loop(_e8);
      }

      return s;
    }

    var m =
    /*#__PURE__*/
    function () {
      function m(e) {
        _classCallCheck(this, m);

        this._items = e, this._firstIndex = this._items[0].index, this._lastIndex = this._items[this._items.length - 1].index;
      }

      _createClass(m, [{
        key: "firstBar",
        value: function firstBar() {
          return this._firstIndex;
        }
      }, {
        key: "lastBar",
        value: function lastBar() {
          return this._lastIndex;
        }
      }, {
        key: "item",
        value: function item(e) {
          return this._items[e - this._firstIndex];
        }
      }]);

      return m;
    }();

    function p(e) {
      var t = e.metaInfo(),
          o = {
        fieldToPlotIndex: [],
        fieldPlotOffsets: [],
        fields: []
      },
          a = e.id(),
          u = e.title(n.TitleDisplayTarget.StatusLine, !1, void 0, !1);

      for (var _n2 = 0; _n2 < t.plots.length; ++_n2) {
        var _c = t.plots[_n2];

        var _d2 = void 0,
            _f = "";

        if ((0, r.isLinePlot)(_c) || (0, r.isShapesPlot)(_c) || (0, r.isCharsPlot)(_c) || (0, r.isArrowsPlot)(_c)) _d2 = (0, l.ensureDefined)(t.styles)[_c.id];else if ((0, r.isOhlcPlot)(_c)) switch (_d2 = t.ohlcPlots && t.ohlcPlots[_c.target], _c.type) {
          case "ohlc_open":
            _f = " (".concat(s.t(null, void 0, i(39280)), ")");
            break;

          case "ohlc_high":
            _f = " (".concat(s.t(null, void 0, i(30777)));
            break;

          case "ohlc_low":
            _f = " (".concat(s.t(null, void 0, i(8136)), ")");
            break;

          case "ohlc_close":
            _f = " (".concat(s.t(null, void 0, i(31691)), ")");
        }
        if (void 0 === _d2 || void 0 === _d2.title) continue;

        var _h = "".concat(_d2.title).concat(_f);

        o.fields.push(T(a, u, _h)), o.fieldToPlotIndex.push(_n2 + 1), o.fieldPlotOffsets.push(e.offset(_c.id));
      }

      return o;
    }

    function T(e, t, i) {
      return {
        type: "value",
        sourceType: "study",
        sourceId: e,
        sourceTitle: t,
        plotTitle: i
      };
    }

    function g(e, t) {
      return {
        type: "value",
        sourceType: "series",
        plotTitle: e,
        sourceTitle: t
      };
    }

    function v(e) {
      return null != e ? e : NaN;
    }
  }
}]);