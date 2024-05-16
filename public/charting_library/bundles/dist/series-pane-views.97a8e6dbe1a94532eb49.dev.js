"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4079], {
  1539: function _(t, e, a) {
    "use strict";

    a.r(e), a.d(e, {
      GotoDateView: function GotoDateView() {
        return T;
      }
    });
    var i = a(50151),
        l = a(86441),
        r = a(48891),
        s = a(44352),
        n = a(29764),
        o = a(38223),
        d = a(5286),
        u = a(46501),
        h = a(15187),
        c = a(74359);

    var _ = s.t(null, void 0, a(24450)),
        b = (0, r.getHexColorByName)("color-cold-gray-100");

    var m =
    /*#__PURE__*/
    function (_h$MediaCoordinatesPa) {
      _inherits(m, _h$MediaCoordinatesPa);

      function m() {
        var _this;

        _classCallCheck(this, m);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(m).apply(this, arguments)), _this._data = null;
        return _this;
      }

      _createClass(m, [{
        key: "setData",
        value: function setData(t) {
          this._data = t;
        }
      }, {
        key: "hitTest",
        value: function hitTest() {
          return null;
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(t) {
          var e = this._data;
          if (null === e) return;
          var a = e.dateString,
              l = e.timeString,
              r = e.eod,
              s = e.point,
              h = e.direction,
              m = Math.round(4.5),
              T = t.context;
          var f,
              g = 0,
              p = 0;
          T.font = (0, n.makeFont)(12, u.CHART_FONT_FAMILY), r ? f = T.measureText(_).width : (g = T.measureText(null != a ? a : "").width, p = T.measureText(null != l ? l : "").width, f = Math.max(g, p));
          var v = l ? 2 : 1,
              x = (0, d.getThemedColor)("color-goto-label-background");
          T.fillStyle = x, T.translate(s.x, s.y);
          var S = Math.round(-f / 2) - 8,
              N = -9 * h,
              w = N + h * (-17 * v - 8),
              L = Math.round(S + f + 16);
          T.beginPath(), T.moveTo(S + 2, w), T.lineTo(L - 2, w), T.arcTo(L, w, L, w + 2 * h, 2), T.lineTo(L, N - 2 * h), T.arcTo(L, N, L - 2, N, 2), T.lineTo(6, N), T.lineTo(0, N + 4 * h), T.lineTo(-6, N), T.lineTo(S + 2, N), T.arcTo(S, N, S, N - 2 * h, 2), T.lineTo(S, w + 2 * h), T.arcTo(S, w, S + 2, w, 2), T.fill(), T.fillStyle = b, T.textBaseline = "middle", T.textAlign = (0, o.isRtl)() ? "right" : "left";
          var B = Math.min(N, w),
              I = Math.max(N, w);

          if (e.eod) {
            var _t = (0, c.calcTextHorizontalShift)(T, f);

            T.fillText(_, S + 8 + _t, (B + I) / 2);
          } else {
            var _t2 = S + 8 + (f - g) / 2,
                _a = (0, c.calcTextHorizontalShift)(T, g);

            if (T.fillText((0, i.ensureDefined)(e.dateString), _t2 + _a, B + m + 8), e.timeString) {
              var _t3 = (0, c.calcTextHorizontalShift)(T, p),
                  _a2 = S + 8 + (f - p) / 2;

              T.fillText(e.timeString, _a2 + _t3, B + 17 * v - m);
            }
          }
        }
      }]);

      return m;
    }(h.MediaCoordinatesPaneRenderer);

    var T =
    /*#__PURE__*/
    function () {
      function T(t, e) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

        _classCallCheck(this, T);

        this._renderer = new m(), this._invalidated = !0, this._data = null, this._doNotShowLastAvailableBar = !1, this._gotoDateResult = e, this._series = t, this._belowBar = a;
      }

      _createClass(T, [{
        key: "update",
        value: function update() {
          this._invalidated = !0;
        }
      }, {
        key: "doNotShowLastAvailableBar",
        value: function doNotShowLastAvailableBar(t) {
          this._doNotShowLastAvailableBar = t, this.update();
        }
      }, {
        key: "renderer",
        value: function renderer() {
          return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._data ? this._renderer : null;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl() {
          this._data = null;
          var t = !!this._gotoDateResult.eod;
          if (t && this._doNotShowLastAvailableBar) return;

          var e = this._series.model(),
              a = e.timeScale().timePointToIndex(this._gotoDateResult.timestamp);

          if (null === a) return;

          var r = this._getTargetBar(a);

          if (null === r) return;

          var s = r.bar,
              n = r.targetIndex,
              o = this._series.firstValue();

          if (null === o) return;
          var d, u;

          var h = this._series.priceScale().isInverted();

          this._belowBar ? (d = 3, u = h ? 1 : -1) : (d = 2, u = h ? -1 : 1);

          var c = this._series.priceScale().priceToCoordinate(s[d], o),
              _ = e.timeScale().indexToCoordinate((0, i.ensureNotNull)(n)),
              b = new l.Point(_, c);

          var m, T;

          if (!t) {
            var _t4 = (0, i.ensureNotNull)(e.timeScale().indexToUserTime((0, i.ensureNotNull)(n)));

            m = e.dateFormatter().format(_t4), this._series.isDWM() || (T = e.timeFormatter().format(_t4));
          }

          this._data = {
            point: b,
            direction: u,
            eod: t,
            dateString: m,
            timeString: T
          }, this._renderer.setData(this._data);
        }
      }, {
        key: "_getTargetBar",
        value: function _getTargetBar(t) {
          var e = this._series.bars(),
              a = e.firstIndex(),
              l = e.lastIndex();

          if (null === a || null === l) return null;
          var r,
              s = t;
          return t < a && null !== e.first() ? (s = a, r = (0, i.ensureNotNull)(e.first()).value) : t > l && null !== e.last() ? (s = (0, i.ensureNotNull)(e.lastIndex()), r = (0, i.ensureNotNull)(e.last()).value) : r = (0, i.ensureNotNull)(e.valueAt(t)), {
            bar: r,
            targetIndex: s
          };
        }
      }]);

      return T;
    }();
  },
  24450: function _(t) {
    t.exports = {
      ar: ["وقت آخر شريط"],
      ca_ES: ["Última barra disponible"],
      cs: "Last available bar",
      de: ["Letzter vorhandener Balken"],
      el: "Last available bar",
      en: "Last available bar",
      es: ["Última barra disponible"],
      fa: "Last available bar",
      fr: ["Dernière barre disponible"],
      he_IL: ["הנר זמין אחרון"],
      hu_HU: ["Utolsó elérhető oszlop"],
      id_ID: ["Bar tersedia terakhir"],
      it: ["Ultima barra disponibile"],
      ja: ["ご利用可能な最も古いバー"],
      ko: ["마지막 봉"],
      ms_MY: ["Bar terakhir yang tersedia"],
      nl_NL: "Last available bar",
      pl: ["Ostatnia dostępna świeczka"],
      pt: ["Última barra disponível"],
      ro: "Last available bar",
      ru: ["Последний доступный бар"],
      sv: ["Sista tillgängliga stapel"],
      th: ["แท่งราคาสุดท้ายทีมีให้"],
      tr: ["Son bulunan çubuk"],
      vi: ["Thanh có sẵn cuối cùng"],
      zh: ["最后一根可用的K线"],
      zh_TW: ["最後一根可用的K線"]
    };
  }
}]);