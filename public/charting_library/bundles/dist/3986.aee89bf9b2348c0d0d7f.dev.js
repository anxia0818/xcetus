"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3986], {
  32766: function _(e, i, t) {
    t.d(i, {
      getSeriesStylePropertiesDefinitions: function getSeriesStylePropertiesDefinitions() {
        return Pe;
      }
    });
    var n = t(44352),
        o = t(36298),
        r = t(46141),
        l = (t(62615), t(97145)),
        s = t(14483),
        a = t(49152),
        c = t(20345),
        d = t(94474);

    var u = new o.TranslatedString("change color bars based on previous close", n.t(null, void 0, t(29353))),
        h = new o.TranslatedString("change HLC bars", n.t(null, void 0, t(55740))),
        p = new o.TranslatedString("change bar up color", n.t(null, void 0, t(76804))),
        y = new o.TranslatedString("change bar down color", n.t(null, void 0, t(71816))),
        g = new o.TranslatedString("change thin bars", n.t(null, void 0, t(72886))),
        v = new o.TranslatedString("change line price source", n.t(null, void 0, t(17119))),
        f = new o.TranslatedString("change line color", n.t(null, void 0, t(87828))),
        S = new o.TranslatedString("change line width", n.t(null, void 0, t(69125))),
        w = new o.TranslatedString("change area price source", n.t(null, void 0, t(1316))),
        b = new o.TranslatedString("change area line color", n.t(null, void 0, t(661))),
        P = new o.TranslatedString("change area line width", n.t(null, void 0, t(6610))),
        T = new o.TranslatedString("change area fill color", n.t(null, void 0, t(97008))),
        m = new o.TranslatedString("change baseline price source", n.t(null, void 0, t(56819))),
        D = new o.TranslatedString("change baseline top line color", n.t(null, void 0, t(68621))),
        _ = new o.TranslatedString("change baseline top line width", n.t(null, void 0, t(35339))),
        C = new o.TranslatedString("change baseline bottom line color", n.t(null, void 0, t(4164))),
        k = new o.TranslatedString("change baseline bottom line width", n.t(null, void 0, t(38990))),
        L = new o.TranslatedString("change baseline fill top area color", n.t(null, void 0, t(12673))),
        M = new o.TranslatedString("change baseline fill bottom area color", n.t(null, void 0, t(73163))),
        $ = new o.TranslatedString("change base level", n.t(null, void 0, t(31547))),
        W = new o.TranslatedString("change high-low body visibility", n.t(null, void 0, t(30033))),
        V = new o.TranslatedString("change high-low body color", n.t(null, void 0, t(81080))),
        I = new o.TranslatedString("change high-low borders visibility", n.t(null, void 0, t(79236))),
        O = new o.TranslatedString("change high-low border color", n.t(null, void 0, t(76885))),
        B = new o.TranslatedString("change high-low labels visibility", n.t(null, void 0, t(42981))),
        A = new o.TranslatedString("change high-low labels color", n.t(null, void 0, t(31937))),
        x = (new o.TranslatedString("change renko wick visibility", n.t(null, void 0, t(9473))), new o.TranslatedString("change renko wick up color", n.t(null, void 0, t(7747))), new o.TranslatedString("change renko wick down color", n.t(null, void 0, t(75986))), new o.TranslatedString("change the display of real prices on price scale (instead of Heiken-Ashi price)", n.t(null, void 0, t(39783))), new o.TranslatedString("change range thin bars", n.t(null, void 0, t(28143))), new o.TranslatedString("change range bars style", n.t(null, void 0, t(35116))), new o.TranslatedString("change {candleType} body visibility", n.t(null, void 0, t(47202)))),
        F = new o.TranslatedString("change {candleType} up color", n.t(null, void 0, t(61118))),
        N = new o.TranslatedString("change {candleType} down color", n.t(null, void 0, t(36320))),
        E = new o.TranslatedString("change {candleType} border visibility", n.t(null, void 0, t(23986))),
        H = new o.TranslatedString("change {candleType} up border color", n.t(null, void 0, t(5464))),
        R = new o.TranslatedString("change {candleType} down border color", n.t(null, void 0, t(92330))),
        j = new o.TranslatedString("change {candleType} wick visibility", n.t(null, void 0, t(39987))),
        U = new o.TranslatedString("change {candleType} wick up color", n.t(null, void 0, t(45543))),
        G = new o.TranslatedString("change {candleType} wick down color", n.t(null, void 0, t(60164))),
        z = (new o.TranslatedString("change {chartType} up color", n.t(null, void 0, t(59414))), new o.TranslatedString("change {chartType} down color", n.t(null, void 0, t(85503))), new o.TranslatedString("change {chartType} projection bar up color", n.t(null, void 0, t(50453))), new o.TranslatedString("change {chartType} projection bar down color", n.t(null, void 0, t(18465))), new o.TranslatedString("change {chartType} border bar up color", n.t(null, void 0, t(11107))), new o.TranslatedString("change {chartType} border bar down color", n.t(null, void 0, t(79088))), new o.TranslatedString("change {chartType} projection border bar up color", n.t(null, void 0, t(61250))), new o.TranslatedString("change {chartType} projection border bar up color", n.t(null, void 0, t(61250))), new o.TranslatedString("change column up color", n.t(null, void 0, t(85709)))),
        J = new o.TranslatedString("change column down color", n.t(null, void 0, t(12155))),
        q = new o.TranslatedString("change column price source", n.t(null, void 0, t(66890))),
        K = n.t(null, void 0, t(63243)),
        Q = n.t(null, void 0, t(86953)),
        X = n.t(null, void 0, t(5536)),
        Y = n.t(null, void 0, t(87151)),
        Z = n.t(null, void 0, t(55314)),
        ee = n.t(null, void 0, t(83760)),
        ie = n.t(null, void 0, t(72269)),
        te = n.t(null, void 0, t(26458)),
        ne = n.t(null, void 0, t(24248)),
        oe = n.t(null, void 0, t(1277)),
        re = n.t(null, void 0, t(57417)),
        le = n.t(null, void 0, t(50430)),
        se = n.t(null, void 0, t(86846)),
        ae = n.t(null, void 0, t(58747)),
        ce = n.t(null, void 0, t(11157)),
        de = (n.t(null, void 0, t(83610)), n.t(null, void 0, t(39667)), n.t(null, void 0, t(80293)), n.t(null, void 0, t(94089)), n.t(null, void 0, t(5704)), n.t(null, void 0, t(29881)), n.t(null, void 0, t(7445))),
        ue = n.t(null, void 0, t(83760)),
        he = n.t(null, void 0, t(72269)),
        pe = n.t(null, void 0, t(94420)),
        ye = n.t(null, void 0, t(83678)),
        ge = n.t(null, void 0, t(15857)),
        ve = n.t(null, void 0, t(75310));

    n.t(null, void 0, t(32733)), n.t(null, void 0, t(16812)), n.t(null, void 0, t(63528));

    function fe(e, i, t, n) {
      return (0, r.createCheckablePropertyDefinition)({
        checked: (0, r.convertToDefinitionProperty)(e, i.barColorsOnPrevClose, u)
      }, {
        id: "".concat(t).concat(n),
        title: K
      });
    }

    function Se(e, i, t, n, o, s) {
      var c = (0, a.createWVFromGetterAndSubscription)(function () {
        return e.model().isInReplay.bind(e.model())() && false;
      }, e.model().onInReplayStateChanged());
      return (0, r.createOptionsPropertyDefinition)({
        disabled: (0, r.convertFromReadonlyWVToDefinitionProperty)(c.ownership()),
        option: (0, r.convertToDefinitionProperty)(e, i.priceSource, s)
      }, {
        id: "".concat(n).concat(o),
        title: ne,
        options: new l.WatchedValue(t)
      });
    }

    function we(e, i, t, n) {
      var o = (0, d.removeSpaces)(t.originalText());
      return [(0, r.createTwoColorsPropertyDefinition)({
        checked: (0, r.convertToDefinitionProperty)(e, i.drawBody, x.format({
          candleType: t
        })),
        color1: (0, r.getColorDefinitionProperty)(e, i.upColor, null, F.format({
          candleType: t
        })),
        color2: (0, r.getColorDefinitionProperty)(e, i.downColor, null, N.format({
          candleType: t
        }))
      }, {
        id: "".concat(n, "Symbol").concat(o, "CandlesColor"),
        title: ee
      }), (0, r.createTwoColorsPropertyDefinition)({
        checked: (0, r.convertToDefinitionProperty)(e, i.drawBorder, E.format({
          candleType: t
        })),
        color1: (0, r.getColorDefinitionProperty)(e, i.borderUpColor, null, H.format({
          candleType: t
        })),
        color2: (0, r.getColorDefinitionProperty)(e, i.borderDownColor, null, R.format({
          candleType: t
        }))
      }, {
        id: "".concat(n, "Symbol").concat(o, "BordersColor"),
        title: ie
      }), (0, r.createTwoColorsPropertyDefinition)({
        checked: (0, r.convertToDefinitionProperty)(e, i.drawWick, j.format({
          candleType: t
        })),
        color1: (0, r.getColorDefinitionProperty)(e, i.wickUpColor, null, U.format({
          candleType: t
        })),
        color2: (0, r.getColorDefinitionProperty)(e, i.wickDownColor, null, G.format({
          candleType: t
        }))
      }, {
        id: "".concat(n, "Symbol").concat(o, "WickColors"),
        title: te
      })];
    }

    function be(e, i, t, n) {
      return [Se(e, i, t, n, "SymbolLinePriceSource", v), (0, r.createLinePropertyDefinition)({
        color: (0, r.getColorDefinitionProperty)(e, i.color, null, f),
        width: (0, r.convertToDefinitionProperty)(e, i.linewidth, S)
      }, {
        id: "".concat(n, "SymbolLineStyle"),
        title: oe
      })];
    }

    function Pe(e, i, a, d, u) {
      switch (a) {
        case 0:
          return function (e, i, t) {
            return [fe(e, i, t, "SymbolBarStyleBarColorsOnPrevClose"), (0, r.createCheckablePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(e, i.dontDrawOpen, h)
            }, {
              id: "".concat(t, "SymbolDontDrawOpen"),
              title: Q
            }), (0, r.createColorPropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.upColor, null, p)
            }, {
              id: "".concat(t, "SymbolUpColor"),
              title: X
            }), (0, r.createColorPropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.downColor, null, y)
            }, {
              id: "".concat(t, "SymbolDownColor"),
              title: Y
            }), (0, r.createCheckablePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(e, i.thinBars, g)
            }, {
              id: "".concat(t, "SymbolBarThinBars"),
              title: Z
            })];
          }(e, i.barStyle.childs(), u);

        case 1:
          return function (e, i, r) {
            return [fe(e, i, r, "SymbolCandleStyleBarColorsOnPrevClose")].concat(_toConsumableArray(we(e, i, new o.TranslatedString("candle", n.t(null, void 0, t(30792))), r)));
          }(e, i.candleStyle.childs(), u);

        case 2:
          return be(e, i.lineStyle.childs(), d.seriesPriceSources, u);

        case 14:
          return be(e, i.lineWithMarkersStyle.childs(), d.seriesPriceSources, u);

        case 15:
          return be(e, i.steplineStyle.childs(), d.seriesPriceSources, u);

        case 3:
          return function (e, i, t, n) {
            return [Se(e, i, t, n, "SymbolAreaPriceSource", w), (0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.linecolor, null, b),
              width: (0, r.convertToDefinitionProperty)(e, i.linewidth, P)
            }, {
              id: "".concat(n, "SymbolAreaLineStyle"),
              title: oe
            }), (0, r.createTwoColorsPropertyDefinition)({
              color1: (0, r.getColorDefinitionProperty)(e, i.color1, i.transparency, T),
              color2: (0, r.getColorDefinitionProperty)(e, i.color2, i.transparency, T)
            }, {
              id: "".concat(n, "SymbolAreaFills"),
              title: se
            })];
          }(e, i.areaStyle.childs(), d.seriesPriceSources, u);

        case 16:
          return function (e, i, t, n) {
            return [(0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.highLineColor, null, b),
              width: (0, r.convertToDefinitionProperty)(e, i.highLineWidth, P)
            }, {
              id: "".concat(n, "SymbolHLCAreaHighLineStyle"),
              title: ye
            }), (0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.lowLineColor, null, b),
              width: (0, r.convertToDefinitionProperty)(e, i.lowLineWidth, P)
            }, {
              id: "".concat(n, "SymbolHLCAreaLowLineStyle"),
              title: ve
            }), (0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.closeLineColor, null, b),
              width: (0, r.convertToDefinitionProperty)(e, i.closeLineWidth, P)
            }, {
              id: "".concat(n, "SymbolHLCAreaCloseLineStyle"),
              title: ge
            }), (0, r.createTwoColorsPropertyDefinition)({
              color1: (0, r.getColorDefinitionProperty)(e, i.highCloseFillColor, null, T),
              color2: (0, r.getColorDefinitionProperty)(e, i.closeLowFillColor, null, T)
            }, {
              id: "".concat(n, "SymbolHLCAreaFills"),
              title: se
            })];
          }(e, i.hlcAreaStyle.childs(), d.seriesPriceSources, u);

        case 9:
          return we(e, i.hollowCandleStyle.childs(), new o.TranslatedString("hollow candles", n.t(null, void 0, t(75165))), u);

        case 10:
          return function (e, i, t, n) {
            return [Se(e, i, t, n, "SymbolBaseLinePriceSource", m), (0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.topLineColor, null, D),
              width: (0, r.convertToDefinitionProperty)(e, i.topLineWidth, _)
            }, {
              id: "".concat(n, "SymbolBaseLineTopLine"),
              title: re
            }), (0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.bottomLineColor, null, C),
              width: (0, r.convertToDefinitionProperty)(e, i.bottomLineWidth, k)
            }, {
              id: "".concat(n, "SymbolBaseLineBottomLine"),
              title: le
            }), (0, r.createTwoColorsPropertyDefinition)({
              color1: (0, r.getColorDefinitionProperty)(e, i.topFillColor1, null, L),
              color2: (0, r.getColorDefinitionProperty)(e, i.topFillColor2, null, L)
            }, {
              id: "".concat(n, "SymbolBaseLineTopFills"),
              title: ae
            }), (0, r.createTwoColorsPropertyDefinition)({
              color1: (0, r.getColorDefinitionProperty)(e, i.bottomFillColor1, null, M),
              color2: (0, r.getColorDefinitionProperty)(e, i.bottomFillColor2, null, M)
            }, {
              id: "".concat(n, "SymbolBaseLineBottomFills"),
              title: ce
            }), (0, r.createNumberPropertyDefinition)({
              value: (0, r.convertToDefinitionProperty)(e, i.baseLevelPercentage, $, [c.floor])
            }, {
              id: "".concat(n, "SymbolBaseLevelPercentage"),
              title: de,
              type: 0,
              min: new l.WatchedValue(0),
              max: new l.WatchedValue(100),
              step: new l.WatchedValue(1),
              unit: new l.WatchedValue("%")
            })];
          }(e, i.baselineStyle.childs(), d.seriesPriceSources, u);

        case 13:
          return function (e, i, t, n) {
            return [Se(e, i, t, n, "SymbolColumnPriceSource", q), fe(e, i, n, "SymbolColumnStyleColumnColorsOnPrevClose"), (0, r.createColorPropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.upColor, null, z)
            }, {
              id: "".concat(n, "SymbolUpColor"),
              title: X
            }), (0, r.createColorPropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(e, i.downColor, null, J)
            }, {
              id: "".concat(n, "SymbolDownColor"),
              title: Y
            })];
          }(e, i.columnStyle.childs(), d.seriesPriceSources, u);
      }

      if (12 === a && s.enabled("chart_style_hilo")) {
        return function (e, i, t) {
          return [(0, r.createColorPropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(e, i.drawBody, W),
            color: (0, r.getColorDefinitionProperty)(e, i.color, null, V)
          }, {
            id: "".concat(t, "SymbolBodiesColor"),
            title: ue
          }), (0, r.createColorPropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(e, i.showBorders, I),
            color: (0, r.getColorDefinitionProperty)(e, i.borderColor, null, O)
          }, {
            id: "".concat(t, "SymbolBorderColor"),
            title: he
          }), (0, r.createTextPropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(e, i.showLabels, B),
            color: (0, r.getColorDefinitionProperty)(e, i.labelColor, null, A)
          }, {
            id: "".concat(t, "SymbolLabels"),
            title: pe,
            isEditable: !1,
            isMultiLine: !1
          })];
        }(e, i.hiloStyle.childs(), u);
      }

      if (!i.hasOwnProperty("haStyle")) return [];

      if (d.isJapaneseChartsAvailable && 8 === a) {
        return function (e, i, r) {
          var l = [];
          return l.push.apply(l, [fe(e, i, r, "SymbolHAStyleBarColorsOnPrevClose")].concat(_toConsumableArray(we(e, i, new o.TranslatedString("Heikin Ashi", n.t(null, void 0, t(40530))), r)))), l;
        }(e, i.haStyle.childs(), u);
      }

      return d.isJapaneseChartsAvailable && s.enabled("japanese_chart_styles"), [];
    }
  },
  73986: function _(e, i, t) {
    t.d(i, {
      SeriesPropertyDefinitionsViewModel: function SeriesPropertyDefinitionsViewModel() {
        return te;
      },
      basePriceSources: function basePriceSources() {
        return ee;
      },
      seriesPrecisionValues: function seriesPrecisionValues() {
        return ie;
      }
    });
    var n = t(50151),
        o = t(44352),
        r = t(36298),
        l = t(14483),
        s = t(46141),
        a = t(97145),
        c = t(42960),
        d = t(32766),
        u = t(20345);
    var h = new r.TranslatedString("change {inputName} property", o.t(null, void 0, t(21547)));

    function p(e) {
      return e.map(function (e) {
        return {
          value: e,
          title: o.t(e, {
            context: "input"
          }, t(88601))
        };
      });
    }

    function y(e, i, l, d, y, g, v) {
      var f = [];
      return l.forEach(function (l) {
        if (!function (e, i) {
          return !e.isHidden && (void 0 === e.visible || function (e, i) {
            if (!e) return !0;
            var t = e.split("==");
            return !(t.length < 2) && i[t[0]].value() === t[1];
          }(e.visible, i));
        }(l, d)) return;
        var S = l.id;
        if (!d.hasOwnProperty(S)) return;

        var w = d[S],
            b = function (e, i) {
          return "style" === e.id ? "Box size assignment method" : "boxSize" === e.id ? "Box size" : i.childs().name.value();
        }(l, y[S]),
            P = function (e) {
          return o.t(e, {
            context: "input"
          }, t(88601));
        }(b),
            T = new r.TranslatedString(b, P);

        if ("options" in l) {
          var _i = (0, n.ensure)(l.options);

          f.push((0, s.createOptionsPropertyDefinition)({
            option: (0, s.convertToDefinitionProperty)(e, w, h.format({
              inputName: T
            }))
          }, {
            id: "".concat(v).concat(l.name),
            title: P,
            options: new a.WatchedValue(p(_i))
          }));
        } else if ("integer" !== l.type) {
          if ("float" === l.type) {
            var _t;

            return _t = function (e, i) {
              return !((i === (0, c.chartStyleStudyId)(4) || i === (0, c.chartStyleStudyId)(6)) && "boxSize" === e || i === (0, c.chartStyleStudyId)(5) && "reversalAmount" === e);
            }(S, i) || null === g.value() ? new a.WatchedValue(l.min) : g, void f.push((0, s.createNumberPropertyDefinition)({
              value: (0, s.convertToDefinitionProperty)(e, w, h.format({
                inputName: T
              }))
            }, {
              id: "".concat(v).concat(l.name),
              title: P,
              type: 1,
              min: _t,
              max: new a.WatchedValue(l.max),
              defval: l.defval
            }));
          }

          "text" !== l.type ? "bool" !== l.type || f.push((0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(e, w, h.format({
              inputName: T
            }))
          }, {
            id: "".concat(v).concat(l.name),
            title: P
          })) : f.push((0, s.createTextPropertyDefinition)({
            text: (0, s.convertToDefinitionProperty)(e, w, h.format({
              inputName: T
            }))
          }, {
            id: "".concat(v).concat(l.name),
            title: P,
            isEditable: !0,
            isMultiLine: !1
          }));
        } else f.push((0, s.createNumberPropertyDefinition)({
          value: (0, s.convertToDefinitionProperty)(e, w, h.format({
            inputName: T
          }), [u.floor])
        }, {
          id: "".concat(v).concat(l.name),
          title: P,
          type: 0,
          min: new a.WatchedValue(l.min),
          max: new a.WatchedValue(l.max),
          defval: l.defval
        }));
      }), f;
    }

    var g = t(59224),
        v = t(93544),
        f = t(49152),
        S = t(97906),
        w = t(11678);

    var b = (0, g.getLogger)("Chart.Definitions.Series"),
        P = l.enabled("show_average_close_price_line_and_label"),
        T = l.enabled("pre_post_market_sessions"),
        m = new r.TranslatedString("change decimal places", o.t(null, void 0, t(71809))),
        D = new r.TranslatedString("change timezone", o.t(null, void 0, t(20505))),
        _ = (new r.TranslatedString("adjust data for dividends", o.t(null, void 0, t(42390))), new r.TranslatedString("use settlement as close on daily interval", o.t(null, void 0, t(98402))), new r.TranslatedString("adjust for contract changes", o.t(null, void 0, t(99511))), new r.TranslatedString("change session", o.t(null, void 0, t(65303)))),
        C = new r.TranslatedString("change extended hours color", o.t(null, void 0, t(31317))),
        k = new r.TranslatedString("change pre market color", o.t(null, void 0, t(46257))),
        L = new r.TranslatedString("change post market color", o.t(null, void 0, t(49973))),
        M = new r.TranslatedString("change price line visibility", o.t(null, void 0, t(67761))),
        $ = new r.TranslatedString("change price line color", o.t(null, void 0, t(77640))),
        W = new r.TranslatedString("change price line width", o.t(null, void 0, t(97322))),
        V = (new r.TranslatedString("change previous close price line visibility", o.t(null, void 0, t(59883))), new r.TranslatedString("change previous close price line color", o.t(null, void 0, t(91183))), new r.TranslatedString("change previous close price line width", o.t(null, void 0, t(87631))), new r.TranslatedString("change pre/post market price lines visibility", o.t(null, void 0, t(50393))), new r.TranslatedString("change pre market line color", o.t(null, void 0, t(60852))), new r.TranslatedString("change post market line color", o.t(null, void 0, t(5969))), new r.TranslatedString("change bid and ask lines visibility", o.t(null, void 0, t(32311))), new r.TranslatedString("change bid line color", o.t(null, void 0, t(36703))), new r.TranslatedString("change ask line color", o.t(null, void 0, t(29180))), new r.TranslatedString("change high and low price lines visibility", o.t(null, void 0, t(92556)))),
        I = new r.TranslatedString("change high and low price line color", o.t(null, void 0, t(60944))),
        O = new r.TranslatedString("change high and low price line width", o.t(null, void 0, t(83708))),
        B = new r.TranslatedString("change average close price line visibility", o.t(null, void 0, t(98866))),
        A = new r.TranslatedString("change average close price line color", o.t(null, void 0, t(30385))),
        x = new r.TranslatedString("change average close price line width", o.t(null, void 0, t(68927))),
        F = (o.t(null, void 0, t(9994)), o.t(null, void 0, t(25866))),
        N = (o.t(null, void 0, t(10989)), o.t(null, void 0, t(99983)), o.t(null, void 0, t(62521))),
        E = o.t(null, void 0, t(15107)),
        H = (o.t(null, void 0, t(8094)), o.t(null, void 0, t(47586)), o.t(null, void 0, t(6350)), o.t(null, void 0, t(73947))),
        R = o.t(null, void 0, t(87492)),
        j = o.t(null, void 0, t(39280)),
        U = o.t(null, void 0, t(30777)),
        G = o.t(null, void 0, t(8136)),
        z = o.t(null, void 0, t(31691)),
        J = o.t(null, void 0, t(10591)),
        q = o.t(null, void 0, t(94884)),
        K = o.t(null, void 0, t(22353)),
        Q = o.t(null, void 0, t(4329)),
        X = o.t(null, void 0, t(39292)),
        Y = o.t(null, void 0, t(70816)),
        Z = [{
      priceScale: 2,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 4,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 8,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 16,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 32,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 64,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 128,
      minMove: 1,
      frac: !0
    }, {
      priceScale: 320,
      minMove: 1,
      frac: !0
    }],
        ee = [{
      title: j,
      value: "open",
      id: "price-source-open"
    }, {
      title: U,
      value: "high",
      id: "price-source-high"
    }, {
      title: G,
      value: "low",
      id: "price-source-low"
    }, {
      title: z,
      value: "close",
      id: "price-source-close"
    }, {
      title: J,
      value: "hl2",
      id: "price-source-hl2"
    }, {
      title: q,
      value: "hlc3",
      id: "price-source-hlc3"
    }, {
      title: K,
      value: "ohlc4",
      id: "price-source-ohlc4"
    }];

    function ie() {
      var e = [{
        title: Q,
        value: "default"
      }],
          i = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
        var i = [];

        for (var _t2 = 0; _t2 <= e; _t2++) {
          i.push({
            priceScale: Math.pow(10, _t2),
            minMove: 1,
            frac: !1
          });
        }

        return i;
      }();

      for (var _t3 = 0; _t3 < i.length; _t3++) {
        var _n = Math.log10(i[_t3].priceScale),
            _o = 0 === _n ? "Integer" : 1 === _n ? "".concat(_n, " decimal") : "".concat(_n, " decimals");

        e.push({
          title: _o,
          value: "".concat(i[_t3].priceScale, ",").concat(i[_t3].minMove, ",").concat(i[_t3].frac)
        });
      }

      for (var _i2 = 0; _i2 < Z.length; _i2++) {
        e.push({
          title: "".concat(Z[_i2].minMove, "/").concat(Z[_i2].priceScale),
          value: "".concat(Z[_i2].priceScale, ",").concat(Z[_i2].minMove, ",").concat(Z[_i2].frac)
        });
      }

      return e;
    }

    var te =
    /*#__PURE__*/
    function () {
      function te(e, i, t, n, o, r) {
        _classCallCheck(this, te);

        this._definitions = null, this._inputsSubscriptions = null, this._isDestroyed = !1, this._propertyPages = null, this._seriesMinTickWV = null, this._sessionIdOptionsWV = new a.WatchedValue([]), this._series = e, this._undoModel = i, this._model = this._undoModel.model(), this._propertyPageId = t, this._propertyPageName = n, this._propertyPageIcon = o, this._timezonePropertyObj = r, this._series.onStyleChanged().subscribe(this, this._updateDefinitions), this._series.properties().childs().rangeStyle.childs().barStyle.listeners().subscribe(this, this._updateDefinitions), this._series.dataEvents().symbolResolved().subscribe(this, this._updateSeriesMinTickWV), this._series.dataEvents().symbolResolved().subscribe(this, this._updateSessionIdOptionsWV), this._updateSeriesMinTickWV(), this._updateSessionIdOptionsWV();
      }

      _createClass(te, [{
        key: "destroy",
        value: function destroy() {
          null !== this._propertyPages && this._propertyPages.forEach(function (e) {
            (0, s.destroyDefinitions)(e.definitions.value());
          }), this._series.onStyleChanged().unsubscribe(this, this._updateDefinitions), this._series.properties().childs().rangeStyle.childs().barStyle.listeners().unsubscribeAll(this), this._series.dataEvents().symbolResolved().unsubscribeAll(this), this._unsubscribeInputsUpdate(), this._isDestroyed = !0;
        }
      }, {
        key: "propertyPages",
        value: function propertyPages() {
          var _this = this;

          return null === this._propertyPages ? this._getDefinitions().then(function (e) {
            var i;
            if (_this._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
            return null === _this._propertyPages && (_this._propertyPages = [{
              id: _this._propertyPageId,
              title: _this._propertyPageName,
              icon: _this._propertyPageIcon,
              definitions: new a.WatchedValue(e.definitions),
              visible: null !== (i = e.visible) && void 0 !== i ? i : new a.WatchedValue(!0).readonly()
            }]), _this._propertyPages;
          }) : Promise.resolve(this._propertyPages);
        }
      }, {
        key: "_seriesMinTick",
        value: function _seriesMinTick() {
          var e = this._series.symbolInfo();

          return null !== e ? e.minmov / e.pricescale : null;
        }
      }, {
        key: "_updateSeriesMinTickWV",
        value: function _updateSeriesMinTickWV() {
          null === this._seriesMinTickWV ? this._seriesMinTickWV = new a.WatchedValue(this._seriesMinTick()) : this._seriesMinTickWV.setValue(this._seriesMinTick());
        }
      }, {
        key: "_updateSessionIdOptionsWV",
        value: function _updateSessionIdOptionsWV() {
          if (!T) return;

          var e = this._series.symbolInfo();

          if (null === e) return;
          var i = (e.subsessions || []).filter(function (e) {
            return !e["private"];
          }).map(function (e) {
            return {
              title: (0, w.translateSessionDescription)(e.description),
              value: e.id
            };
          });

          this._sessionIdOptionsWV.setValue(i);
        }
      }, {
        key: "_updateDefinitions",
        value: function _updateDefinitions() {
          var _this2 = this;

          null !== this._definitions && (0, s.destroyDefinitions)(this._definitions.definitions), this._definitions = null, this._unsubscribeInputsUpdate(), this._createSeriesDefinitions().then(function (e) {
            if (_this2._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
            (0, n.ensureNotNull)(_this2._propertyPages)[0].definitions.setValue(e.definitions);
          });
        }
      }, {
        key: "_getDefinitions",
        value: function _getDefinitions() {
          return null === this._definitions ? this._createSeriesDefinitions() : Promise.resolve(this._definitions);
        }
      }, {
        key: "_unsubscribeInputsUpdate",
        value: function _unsubscribeInputsUpdate() {
          var _this3 = this;

          null !== this._inputsSubscriptions && (this._inputsSubscriptions.forEach(function (e) {
            e.unsubscribeAll(_this3);
          }), this._inputsSubscriptions = null);
        }
      }, {
        key: "_subscribeInputsUpdate",
        value: function _subscribeInputsUpdate(e, i) {
          var _this4 = this;

          var t = [];
          e.forEach(function (e) {
            if (void 0 !== e.visible) {
              var _n2 = e.visible.split("==");

              if (2 === _n2.length) {
                var _e = i[_n2[0]];
                -1 === t.indexOf(_e) && (_e.subscribe(_this4, _this4._updateDefinitions), t.push(_e));
              }
            }
          }), t.length > 0 ? this._inputsSubscriptions = t : this._inputsSubscriptions = null;
        }
      }, {
        key: "_createSeriesDefinitions",
        value: function _createSeriesDefinitions() {
          var _this5 = this;

          var e = this._series.properties().childs(),
              i = this._series.getInputsProperties(),
              r = this._series.getInputsInfoProperties(),
              l = e.style.value(),
              u = this._series.getStyleShortName();

          return new Promise(function (e) {
            var t = (0, c.chartStyleStudyId)(l);
            null !== t ? _this5._model.studyMetaInfoRepository().findById({
              type: "java",
              studyId: t
            }).then(function (t) {
              if (_this5._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
              if (null !== _this5._definitions) return void e(null);
              var o = (0, n.ensureNotNull)(_this5._seriesMinTickWV),
                  l = y(_this5._undoModel, t.id, t.inputs, i, r, o, u);
              _this5._subscribeInputsUpdate(t.inputs, i), e(l);
            })["catch"](function (i) {
              b.logWarn("Find meta info for create series definitions with error - ".concat((0, v.errorToString)(i))), e(null);
            }) : e(null);
          }).then(function (i) {
            if (_this5._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
            if (null !== _this5._definitions) return _this5._definitions;
            var n = (0, d.getSeriesStylePropertiesDefinitions)(_this5._undoModel, e, l, {
              seriesPriceSources: ee,
              isJapaneseChartsAvailable: true
            }, "mainSeries");
            null !== i && n.push.apply(n, _toConsumableArray(i));
            var r = (0, s.createOptionsPropertyDefinition)({
              option: (0, s.convertToDefinitionProperty)(_this5._undoModel, e.minTick, m)
            }, {
              id: "".concat(u, "SymbolMinTick"),
              title: H,
              options: new a.WatchedValue(ie())
            }),
                h = (0, s.createOptionsPropertyDefinition)({
              option: (0, s.convertToDefinitionProperty)(_this5._undoModel, _this5._timezonePropertyObj.property, D)
            }, {
              id: "".concat(u, "SymbolTimezone"),
              title: R,
              options: new a.WatchedValue(_this5._timezonePropertyObj.values)
            });
            return _this5._definitions = {
              definitions: [(0, s.createPropertyDefinitionsGeneralGroup)(n, "generalSymbolStylesGroup", (0, c.getTranslatedChartStyleName)(l)), (0, s.createPropertyDefinitionsGeneralGroup)(_this5._seriesPriceLinesDefinitions(u), "priceLinesGroup", o.t(null, void 0, t(77986))), (0, s.createPropertyDefinitionsGeneralGroup)([].concat(_toConsumableArray(_this5._seriesDataDefinitions(u)), [r, h]), "dataModififcationGroup", o.t(null, void 0, t(81285)))]
            }, _this5._definitions;
          });
        }
      }, {
        key: "_seriesDataDefinitions",
        value: function _seriesDataDefinitions(e) {
          var _this6 = this;

          var i = [];

          if (T) {
            var _t4 = this._series.sessionIdProxyProperty(),
                _n3 = (0, S.combineWithFilteredUpdate)(function (e, i) {
              return !i && (0, c.symbolHasSeveralSessions)(_this6._series.symbolInfo());
            }, function (e, i) {
              return i || !e;
            }, this._series.symbolResolvingActive().weakReference(), (0, f.createWVFromProperty)(this._series.isDWMProperty()).ownership()),
                _o2 = (0, s.createOptionsPropertyDefinition)({
              option: (0, s.convertToDefinitionProperty)(this._undoModel, _t4, _),
              visible: (0, s.convertFromReadonlyWVToDefinitionProperty)(_n3.ownership())
            }, {
              id: "sessionId",
              title: F,
              options: this._sessionIdOptionsWV
            });

            i.push(_o2);

            var _r = this._model.sessions().graphicsInfo();

            var _l = !1;

            _r.backgrounds && (_l = void 0 !== _r.backgrounds.outOfSession);

            var _a = _l ? this._createOutOfSessionDefinition(e) : this._createPrePostMarketDefinition(e);

            i.push(_a);
          }

          return i;
        }
      }, {
        key: "_createOutOfSessionDefinition",
        value: function _createOutOfSessionDefinition(e) {
          var i = this._model.sessions().properties().childs().graphics.childs().backgrounds.childs().outOfSession.childs();

          return (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._undoModel, i.color, i.transparency, C)
          }, {
            id: "".concat(e, "SymbolExtendedHoursColors"),
            title: N
          });
        }
      }, {
        key: "_createPrePostMarketDefinition",
        value: function _createPrePostMarketDefinition(e) {
          var _this7 = this;

          var i = (0, S.combineWithFilteredUpdate)(function (e, i) {
            return !i && (0, c.symbolHasPreOrPostMarket)(_this7._series.symbolInfo()) && !(0, c.isRegularSessionId)(_this7._series.sessionIdProxyProperty().value());
          }, function (e, i) {
            return i || !e;
          }, this._series.symbolResolvingActive().weakReference(), (0, f.createWVFromProperty)(this._series.isDWMProperty()).ownership()),
              t = this._model.sessions(),
              n = t.properties().childs().graphics.childs().backgrounds.childs().preMarket.childs(),
              o = t.properties().childs().graphics.childs().backgrounds.childs().postMarket.childs();

          return (0, s.createTwoColorsPropertyDefinition)({
            color1: (0, s.getColorDefinitionProperty)(this._undoModel, n.color, n.transparency, k),
            color2: (0, s.getColorDefinitionProperty)(this._undoModel, o.color, o.transparency, L),
            visible: (0, s.convertFromReadonlyWVToDefinitionProperty)(i.ownership())
          }, {
            id: "".concat(e, "SymbolExtendedHoursColors"),
            title: N
          });
        }
      }, {
        key: "_seriesPriceLinesDefinitions",
        value: function _seriesPriceLinesDefinitions(e) {
          var i = [],
              t = this._series.properties().childs();

          if (this._series.hasClosePrice()) {
            var _n4 = (0, s.createLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._undoModel, t.showPriceLine, M),
              color: (0, s.getColorDefinitionProperty)(this._undoModel, t.priceLineColor, null, $),
              width: (0, s.convertToDefinitionProperty)(this._undoModel, t.priceLineWidth, W)
            }, {
              id: "".concat(e, "SymbolLastValuePriceLine"),
              title: E
            });

            i.push(_n4);
          }

          this._series.hasClosePrice();

          var n = t.highLowAvgPrice.childs(),
              o = (0, s.createLinePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._undoModel, n.highLowPriceLinesVisible, V),
            color: (0, s.getColorDefinitionProperty)(this._undoModel, n.highLowPriceLinesColor, null, I),
            width: (0, s.convertToDefinitionProperty)(this._undoModel, n.highLowPriceLinesWidth, O)
          }, {
            id: "".concat(e, "SymbolHighLowPriceLines"),
            title: X
          });

          if (i.push(o), P) {
            var _t5 = (0, s.createLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._undoModel, n.averageClosePriceLineVisible, B),
              color: (0, s.getColorDefinitionProperty)(this._undoModel, n.averagePriceLineColor, null, A),
              width: (0, s.convertToDefinitionProperty)(this._undoModel, n.averagePriceLineWidth, x)
            }, {
              id: "".concat(e, "SymbolAverageClosePriceLine"),
              title: Y
            });

            i.push(_t5);
          }

          return i;
        }
      }]);

      return te;
    }();
  }
}]);