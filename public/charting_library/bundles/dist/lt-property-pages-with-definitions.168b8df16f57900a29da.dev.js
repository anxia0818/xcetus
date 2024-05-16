"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8537], {
  86778: function _(e, t, i) {
    i.d(t, {
      getLinesStylesPropertiesDefinitions: function getLinesStylesPropertiesDefinitions() {
        return y;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(46141),
        s = i(94474);
    var a = new o.TranslatedString("change {title} price label visibility", n.t(null, void 0, i(45936))),
        c = new o.TranslatedString("change {title} extension", n.t(null, void 0, i(86647))),
        d = new o.TranslatedString("change {title} time label visibility", n.t(null, void 0, i(33822))),
        p = n.t(null, void 0, i(23675)),
        u = n.t(null, void 0, i(55325)),
        h = n.t(null, void 0, i(1220));

    function y(e, t, i) {
      var n = (0, s.removeSpaces)(i.originalText()),
          o = [],
          y = (0, r.createLineStyleDefinition)(e, {
        lineColor: t.linecolor,
        lineWidth: t.linewidth,
        lineStyle: t.linestyle
      }, i, "Line");

      if (o.push(y), "showPrice" in t) {
        var _r = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.showPrice, a.format({
            title: i
          }))
        }, {
          id: "".concat(n, "ShowPrice"),
          title: p
        });

        o.push(_r);
      }

      if ("extendLine" in t) {
        var _r2 = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.extendLine, c.format({
            title: i
          }))
        }, {
          id: "".concat(n, "ExtendLine"),
          title: h
        });

        o.push(_r2);
      }

      if ("showTime" in t) {
        var _r3 = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.showTime, d.format({
            title: i
          }))
        }, {
          id: "".concat(n, "ShowTime"),
          title: u
        });

        o.push(_r3);
      }

      return {
        definitions: o
      };
    }
  },
  43940: function _(e, t, i) {
    i.r(t), i.d(t, {
      getSelectionStylePropertiesDefinitions: function getSelectionStylePropertiesDefinitions() {
        return y;
      }
    });
    var n = i(44352),
        o = i(68806),
        r = i(62513),
        l = i(36298),
        s = i(46141);
    var a = new l.TranslatedString("lines width", n.t(null, void 0, i(73043))),
        c = new l.TranslatedString("lines style", n.t(null, void 0, i(41075))),
        d = new l.TranslatedString("lines color", n.t(null, void 0, i(70607))),
        p = new l.TranslatedString("backgrounds color", n.t(null, void 0, i(21926))),
        u = new l.TranslatedString("backgrounds filled", n.t(null, void 0, i(52241))),
        h = new l.TranslatedString("text color", n.t(null, void 0, i(41437)));

    function y(e, t) {
      var l = [];

      if ("linesWidths" in e || "linestyle" in e || "linesColors" in e) {
        var _p = (0, s.createLinePropertyDefinition)({
          width: e.linesWidths ? new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.linesWidths), a, t) : void 0,
          style: e.linestyle ? new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.linestyle), c, t) : void 0,
          color: e.linesColors ? new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.linesColors), d, t) : void 0
        }, {
          id: "LineStyles",
          title: n.t(null, void 0, i(1277))
        });

        l.push(_p);
      }

      if ("backgroundsColors" in e) {
        var _a = (0, s.createColorPropertyDefinition)({
          checked: e.fillBackground ? new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.fillBackground), u, t) : void 0,
          color: new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.backgroundsColors), p, t)
        }, {
          id: "BackgroundColors",
          title: n.t(null, void 0, i(27331))
        });

        l.push(_a);
      }

      if ("textsColors" in e) {
        var _a2 = (0, s.createLinePropertyDefinition)({
          color: new r.CollectiblePropertyUndoWrapper(new o.LineToolCollectedProperty(e.textsColors), h, t)
        }, {
          id: "TextColors",
          title: n.t(null, void 0, i(37229))
        });

        l.push(_a2);
      }

      return {
        definitions: l
      };
    }
  },
  75611: function _(e, t, i) {
    i.d(t, {
      getTrendLineToolsStylePropertiesDefinitions: function getTrendLineToolsStylePropertiesDefinitions() {
        return W;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(46141),
        s = i(97145),
        a = i(9155),
        c = i(94474);
    var d = new o.TranslatedString("change {title} middle point visibility", n.t(null, void 0, i(89996))),
        p = new o.TranslatedString("change {title} price labels visibility", n.t(null, void 0, i(88577))),
        u = new o.TranslatedString("change {title} price range visibility", n.t(null, void 0, i(47045))),
        h = new o.TranslatedString("change {title} percent change visibility", n.t(null, void 0, i(62243))),
        y = new o.TranslatedString("change {title} change in pips visibility", n.t(null, void 0, i(22430))),
        f = new o.TranslatedString("change {title} bars range visibility", n.t(null, void 0, i(42746))),
        v = new o.TranslatedString("change {title} date/time range visibility", n.t(null, void 0, i(15485))),
        g = new o.TranslatedString("change {title} distance visibility", n.t(null, void 0, i(91534))),
        T = new o.TranslatedString("change {title} angle visibility", n.t(null, void 0, i(45537))),
        D = new o.TranslatedString("change {title} always show stats", n.t(null, void 0, i(37913))),
        w = new o.TranslatedString("change {title} stats position", n.t(null, void 0, i(588))),
        _ = [{
      value: a.StatsPosition.Left,
      title: n.t(null, void 0, i(19286))
    }, {
      value: a.StatsPosition.Center,
      title: n.t(null, void 0, i(72171))
    }, {
      value: a.StatsPosition.Right,
      title: n.t(null, void 0, i(21141))
    }, {
      value: a.StatsPosition.Auto,
      title: n.t(null, void 0, i(86951))
    }],
        P = n.t(null, void 0, i(24510)),
        S = n.t(null, void 0, i(75675)),
        m = n.t(null, void 0, i(28712)),
        b = n.t(null, void 0, i(46964)),
        C = n.t(null, void 0, i(2694)),
        L = n.t(null, void 0, i(60066)),
        x = n.t(null, void 0, i(19949)),
        k = n.t(null, void 0, i(67114)),
        A = n.t(null, void 0, i(75460)),
        V = n.t(null, void 0, i(36150)),
        $ = n.t(null, void 0, i(85160)),
        M = n.t(null, void 0, i(37249));

    function W(e, t, i, n) {
      var o = (0, c.removeSpaces)(i.originalText()),
          a = [],
          W = t,
          B = (0, r.createLineStyleDefinition)(e, _objectSpread({}, W, {
        lineColor: t.linecolor,
        lineWidth: t.linewidth,
        lineStyle: t.linestyle
      }), i, "Line");
      a.push(B);
      var z = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showMiddlePoint, d.format({
          title: i
        }))
      }, {
        id: "".concat(o, "MiddlePoint"),
        title: n && n.middlePoint || P
      });
      a.push(z);
      var N = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showPriceLabels, p.format({
          title: i
        }))
      }, {
        id: "".concat(o, "ShowPriceLabels"),
        title: n && n.showPriceLabelsTitle || S
      });
      a.push(N);
      var R = [],
          G = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showPriceRange, u.format({
          title: i
        }))
      }, {
        id: "".concat(o, "PriceRange"),
        title: n && n.priceRange || b
      });
      R.push(G);
      var E = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showPercentPriceRange, h.format({
          title: i
        }))
      }, {
        id: "".concat(o, "PercentChange"),
        title: n && n.percentChange || C
      });
      R.push(E);
      var O = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showPipsPriceRange, y.format({
          title: i
        }))
      }, {
        id: "".concat(o, "PipsChange"),
        title: n && n.pipsChange || L
      });
      R.push(O);
      var U = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.showBarsRange, f.format({
          title: i
        }))
      }, {
        id: "".concat(o, "BarsRange"),
        title: n && n.barRange || x
      });

      if (R.push(U), "showDateTimeRange" in t) {
        var _r4 = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.showDateTimeRange, v.format({
            title: i
          }))
        }, {
          id: "".concat(o, "DateTimeRange"),
          title: n && n.dateTimeRange || k
        });

        R.push(_r4);
      }

      if ("showDistance" in t) {
        var _r5 = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.showDistance, g.format({
            title: i
          }))
        }, {
          id: "".concat(o, "Distance"),
          title: n && n.distance || A
        });

        R.push(_r5);
      }

      if ("showAngle" in t) {
        var _r6 = (0, l.createCheckablePropertyDefinition)({
          checked: (0, l.convertToDefinitionProperty)(e, t.showAngle, T.format({
            title: i
          }))
        }, {
          id: "".concat(o, "Angle"),
          title: n && n.angle || V
        });

        R.push(_r6);
      }

      var F = (0, l.createCheckablePropertyDefinition)({
        checked: (0, l.convertToDefinitionProperty)(e, t.alwaysShowStats, D.format({
          title: i
        }))
      }, {
        id: "".concat(o, "ShowStats"),
        title: n && n.showStats || $
      });
      R.push(F);
      var I = (0, l.createOptionsPropertyDefinition)({
        option: (0, l.convertToDefinitionProperty)(e, t.statsPosition, w.format({
          title: i
        }))
      }, {
        id: "".concat(o, "StatsPosition"),
        title: n && n.statsPosition || m,
        options: new s.WatchedValue(_)
      });
      return R.push(I), a.push((0, l.createPropertyDefinitionsGeneralGroup)(R, "".concat(o, "StatsGroup"), M)), {
        definitions: a
      };
    }
  },
  2908: function _(e, t, i) {
    i.d(t, {
      createLineStyleDefinition: function createLineStyleDefinition() {
        return T;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(94474);
    var s = new o.TranslatedString("change {toolName} line visibility", n.t(null, void 0, i(24272))),
        a = new o.TranslatedString("change {toolName} line width", n.t(null, void 0, i(46404))),
        c = new o.TranslatedString("change {toolName} line style", n.t(null, void 0, i(35422))),
        d = new o.TranslatedString("change {toolName} line color", n.t(null, void 0, i(50265))),
        p = new o.TranslatedString("change {toolName} line extending left", n.t(null, void 0, i(72781))),
        u = new o.TranslatedString("change {toolName} line left end", n.t(null, void 0, i(62603))),
        h = new o.TranslatedString("change {toolName} line extending right", n.t(null, void 0, i(84613))),
        y = new o.TranslatedString("change {toolName} line right end", n.t(null, void 0, i(62412))),
        f = n.t(null, void 0, i(1277)),
        v = n.t(null, void 0, i(25892)),
        g = n.t(null, void 0, i(74395));

    function T(e, t, i, n, o) {
      var T = {},
          D = {
        id: "".concat((0, l.removeSpaces)(i.originalText())).concat(n),
        title: o && o.line || f
      };
      return void 0 !== t.showLine && (T.checked = (0, r.convertToDefinitionProperty)(e, t.showLine, s.format({
        toolName: i
      }))), void 0 !== t.lineWidth && (T.width = (0, r.convertToDefinitionProperty)(e, t.lineWidth, a.format({
        toolName: i
      }))), void 0 !== t.lineStyle && (T.style = (0, r.convertToDefinitionProperty)(e, t.lineStyle, c.format({
        toolName: i
      }))), void 0 !== t.lineColor && (T.color = (0, r.getColorDefinitionProperty)(e, t.lineColor, null, d.format({
        toolName: i
      }))), void 0 !== t.extendLeft && (T.extendLeft = (0, r.convertToDefinitionProperty)(e, t.extendLeft, p.format({
        toolName: i
      })), D.extendLeftTitle = o && o.extendLeftTitle || v), void 0 !== t.leftEnd && (T.leftEnd = (0, r.convertToDefinitionProperty)(e, t.leftEnd, u.format({
        toolName: i
      }))), void 0 !== t.extendRight && (T.extendRight = (0, r.convertToDefinitionProperty)(e, t.extendRight, h.format({
        toolName: i
      })), D.extendRightTitle = o && o.extendRightTitle || g), void 0 !== t.rightEnd && (T.rightEnd = (0, r.convertToDefinitionProperty)(e, t.rightEnd, y.format({
        toolName: i
      }))), (0, r.createLinePropertyDefinition)(T, D);
    }
  },
  50653: function _(e, t, i) {
    i.d(t, {
      createTextStyleDefinition: function createTextStyleDefinition() {
        return b;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(94474);

    var s = new o.TranslatedString("change {toolName} text visibility", n.t(null, void 0, i(69871))),
        a = new o.TranslatedString("change {toolName} text color", n.t(null, void 0, i(6500))),
        c = new o.TranslatedString("change {toolName} text font size", n.t(null, void 0, i(48382))),
        d = new o.TranslatedString("change {toolName} text font bold", n.t(null, void 0, i(51614))),
        p = new o.TranslatedString("change {toolName} text font italic", n.t(null, void 0, i(18572))),
        u = new o.TranslatedString("change {toolName} text", n.t(null, void 0, i(77690))),
        h = new o.TranslatedString("change {toolName} labels alignment vertical", n.t(null, void 0, i(25937))),
        y = new o.TranslatedString("change {toolName} labels alignment horizontal", n.t(null, void 0, i(46991))),
        f = new o.TranslatedString("change {toolName} labels direction", n.t(null, void 0, i(73080))),
        v = new o.TranslatedString("change {toolName} text background visibility", n.t(null, void 0, i(18610))),
        g = new o.TranslatedString("change {toolName} text background color", n.t(null, void 0, i(91832))),
        T = new o.TranslatedString("change {toolName} text border visibility", n.t(null, void 0, i(45529))),
        D = new o.TranslatedString("change {toolName} text border width", n.t(null, void 0, i(6324))),
        w = new o.TranslatedString("change {toolName} text border color", n.t(null, void 0, i(44755))),
        _ = new o.TranslatedString("change {toolName} text wrap", n.t(null, void 0, i(25878))),
        P = n.t(null, void 0, i(27331)),
        S = n.t(null, void 0, i(48848)),
        m = n.t(null, void 0, i(17932));

    function b(e, t, i, n) {
      var o = {},
          b = {
        id: "".concat((0, l.removeSpaces)(i.originalText()), "Text"),
        title: n.customTitles && n.customTitles.text || ""
      };

      if (void 0 !== t.showText && (o.checked = (0, r.convertToDefinitionProperty)(e, t.showText, s.format({
        toolName: i
      }))), void 0 !== t.textColor && (o.color = (0, r.getColorDefinitionProperty)(e, t.textColor, t.transparency || null, a.format({
        toolName: i
      }))), void 0 !== t.fontSize && (o.size = (0, r.convertToDefinitionProperty)(e, t.fontSize, c.format({
        toolName: i
      }))), void 0 !== t.bold && (o.bold = (0, r.convertToDefinitionProperty)(e, t.bold, d.format({
        toolName: i
      }))), void 0 !== t.italic && (o.italic = (0, r.convertToDefinitionProperty)(e, t.italic, p.format({
        toolName: i
      }))), void 0 !== t.text && (o.text = (0, r.convertToDefinitionProperty)(e, t.text, u.format({
        toolName: i
      })), b.isEditable = Boolean(n.isEditable), b.isMultiLine = Boolean(n.isMultiLine)), void 0 !== t.vertLabelsAlign && (o.alignmentVertical = (0, r.convertToDefinitionProperty)(e, t.vertLabelsAlign, h.format({
        toolName: i
      })), b.alignmentVerticalItems = n.alignmentVerticalItems), void 0 !== t.horzLabelsAlign && (o.alignmentHorizontal = (0, r.convertToDefinitionProperty)(e, t.horzLabelsAlign, y.format({
        toolName: i
      })), b.alignmentHorizontalItems = n.alignmentHorizontalItems), void 0 !== t.textOrientation && (o.orientation = (0, r.convertToDefinitionProperty)(e, t.textOrientation, f.format({
        toolName: i
      }))), void 0 !== t.backgroundVisible && (o.backgroundVisible = (0, r.convertToDefinitionProperty)(e, t.backgroundVisible, v.format({
        toolName: i
      }))), void 0 !== t.backgroundColor) {
        var _n = null;
        void 0 !== t.backgroundTransparency && (_n = t.backgroundTransparency), o.backgroundColor = (0, r.getColorDefinitionProperty)(e, t.backgroundColor, _n, g.format({
          toolName: i
        }));
      }

      return void 0 === t.backgroundVisible && void 0 === t.backgroundColor || (b.backgroundTitle = n.customTitles && n.customTitles.backgroundTitle || P), void 0 !== t.borderVisible && (o.borderVisible = (0, r.convertToDefinitionProperty)(e, t.borderVisible, T.format({
        toolName: i
      }))), void 0 !== t.borderWidth && (o.borderWidth = (0, r.convertToDefinitionProperty)(e, t.borderWidth, D.format({
        toolName: i
      }))), void 0 !== t.borderColor && (o.borderColor = (0, r.getColorDefinitionProperty)(e, t.borderColor, null, w.format({
        toolName: i
      }))), void 0 === t.borderVisible && void 0 === t.borderColor && void 0 === t.borderWidth || (b.borderTitle = n.customTitles && n.customTitles.borderTitle || S), void 0 !== t.wrap && (o.wrap = (0, r.convertToDefinitionProperty)(e, t.wrap, _.format({
        toolName: i
      })), b.wrapTitle = n.customTitles && n.customTitles.wrapTitle || m), (0, r.createTextPropertyDefinition)(o, b);
    }
  },
  73896: function _(e, t, i) {
    i.r(t), i.d(t, {
      ArrowMarkDefinitionsViewModel: function ArrowMarkDefinitionsViewModel() {
        return p;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141);
    var a = new o.TranslatedString("change arrow color", n.t(null, void 0, i(38829))),
        c = n.t(null, void 0, i(37229)),
        d = n.t(null, void 0, i(96237));

    var p =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi) {
      _inherits(p, _l$LineDataSourceDefi);

      function p() {
        _classCallCheck(this, p);

        return _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments));
      }

      _createClass(p, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              text: e.text,
              showText: e.showLabel,
              textColor: e.color,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: c
              }
            })]
          };
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.arrowColor, null, a)
            }, {
              id: "ArrowColor",
              title: d
            })]
          };
        }
      }]);

      return p;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  57239: function _(e, t, i) {
    i.r(t), i.d(t, {
      ArrowMarkerDefinitionsViewModel: function ArrowMarkerDefinitionsViewModel() {
        return u;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(94474),
        a = i(50653);
    var c = new o.TranslatedString("change {title} color", n.t(null, void 0, i(20216))),
        d = n.t(null, void 0, i(40054)),
        p = n.t(null, void 0, i(37229));

    var u =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi2) {
      _inherits(u, _l$LineDataSourceDefi2);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createColorPropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, null, c.format({
                title: i
              }))
            }, {
              id: (0, s.removeSpaces)("".concat(t, "Color")),
              title: d
            })]
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, a.createTextStyleDefinition)(this._propertyApplier, {
              text: e.text,
              showText: e.showLabel,
              textColor: e.textColor,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: p
              }
            })]
          };
        }
      }]);

      return u;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  38534: function _(e, t, i) {
    i.r(t), i.d(t, {
      BalloonDefinitionsViewModel: function BalloonDefinitionsViewModel() {
        return a;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766);
    var s = n.t(null, void 0, i(37229));

    var a =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi3) {
      _inherits(a, _l$LineDataSourceDefi3);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.color,
              fontSize: e.fontsize,
              text: e.text,
              backgroundColor: e.backgroundColor,
              backgroundTransparency: e.transparency,
              borderColor: e.borderColor
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: s
              }
            })]
          };
        }
      }]);

      return a;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  266: function _(e, t, i) {
    i.r(t), i.d(t, {
      BarsPatternDefinitionsViewModel: function BarsPatternDefinitionsViewModel() {
        return w;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(97145),
        a = i(99987),
        c = i(20345),
        d = i(94474);
    var p = new o.TranslatedString("change {title} color", n.t(null, void 0, i(20216))),
        u = new o.TranslatedString("change {title} mode", n.t(null, void 0, i(94441))),
        h = new o.TranslatedString("change {title} mirrored", n.t(null, void 0, i(36618))),
        y = new o.TranslatedString("change {title} flipped", n.t(null, void 0, i(99670))),
        f = n.t(null, void 0, i(40054)),
        v = n.t(null, void 0, i(53889)),
        g = n.t(null, void 0, i(63158)),
        T = n.t(null, void 0, i(92754)),
        D = [{
      value: a.LineToolBarsPatternMode.Bars,
      title: n.t(null, void 0, i(25264))
    }, {
      value: a.LineToolBarsPatternMode.OpenClose,
      title: n.t(null, void 0, i(66049))
    }, {
      value: a.LineToolBarsPatternMode.Line,
      title: n.t(null, void 0, i(47669))
    }, {
      value: a.LineToolBarsPatternMode.LineOpen,
      title: n.t(null, void 0, i(17676))
    }, {
      value: a.LineToolBarsPatternMode.LineHigh,
      title: n.t(null, void 0, i(71899))
    }, {
      value: a.LineToolBarsPatternMode.LineLow,
      title: n.t(null, void 0, i(83394))
    }, {
      value: a.LineToolBarsPatternMode.LineHL2,
      title: n.t(null, void 0, i(49286))
    }];

    var w =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi) {
      _inherits(w, _r$LineDataSourceDefi);

      function w() {
        _classCallCheck(this, w);

        return _possibleConstructorReturn(this, _getPrototypeOf(w).apply(this, arguments));
      }

      _createClass(w, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType()),
              n = (0, d.removeSpaces)(t);

          return {
            definitions: [(0, l.createColorPropertyDefinition)({
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, e.color, null, p.format({
                title: i
              }))
            }, {
              id: "".concat(n, "Color"),
              title: f
            }), (0, l.createOptionsPropertyDefinition)({
              option: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.mode, u.format({
                title: i
              }), [c.convertToInt])
            }, {
              id: "".concat(n, "Mode"),
              title: v,
              options: new s.WatchedValue(D)
            }), (0, l.createCheckablePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.mirrored, h.format({
                title: i
              }))
            }, {
              id: "".concat(n, "Mirrored"),
              title: g
            }), (0, l.createCheckablePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.flipped, y.format({
                title: i
              }))
            }, {
              id: "".concat(n, "Flipped"),
              title: T
            })]
          };
        }
      }]);

      return w;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  26430: function _(e, t, i) {
    i.r(t), i.d(t, {
      BrushDefinitionsViewModel: function BrushDefinitionsViewModel() {
        return u;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        d = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        p = n.t(null, void 0, i(27331));

    var u =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi4) {
      _inherits(u, _l$LineDataSourceDefi4);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth,
              leftEnd: e.leftEnd,
              rightEnd: e.rightEnd
            }, i, "Line"), (0, s.createColorPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, c.format({
                title: i
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "BackgroundColor")),
              title: p
            })]
          };
        }
      }]);

      return u;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  2813: function _(e, t, i) {
    i.r(t), i.d(t, {
      CalloutDefinitionsViewModel: function CalloutDefinitionsViewModel() {
        return l;
      }
    });
    var n = i(50653),
        o = i(85766),
        r = i(36298);

    var l =
    /*#__PURE__*/
    function (_o$LineDataSourceDefi) {
      _inherits(l, _o$LineDataSourceDefi);

      function l() {
        _classCallCheck(this, l);

        return _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments));
      }

      _createClass(l, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, n.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.color,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic,
              text: e.text,
              backgroundColor: e.backgroundColor,
              backgroundTransparency: e.transparency,
              borderColor: e.bordercolor,
              borderWidth: e.linewidth,
              wrap: e.wordWrap
            }, new r.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0
            })]
          };
        }
      }]);

      return l;
    }(o.LineDataSourceDefinitionsViewModel);
  },
  70007: function _(e, t, i) {
    i.r(t), i.d(t, {
      CrossLineDefinitionsViewModel: function CrossLineDefinitionsViewModel() {
        return c;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(86778),
        s = i(50653);
    var a = n.t(null, void 0, i(37229));

    var c =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi2) {
      _inherits(c, _r$LineDataSourceDefi2);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, l.getLinesStylesPropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()));
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          if ("showLabel" in e) {
            return {
              definitions: [(0, s.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize
              }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
                isEditable: !0,
                isMultiLine: !0,
                customTitles: {
                  text: a
                }
              })]
            };
          }

          return null;
        }
      }]);

      return c;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  15673: function _(e, t, i) {
    i.r(t), i.d(t, {
      CyclicAndSineLinesPatternDefinitionsViewModel: function CyclicAndSineLinesPatternDefinitionsViewModel() {
        return a;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766);
    var s = n.t(null, void 0, i(83182));

    var a =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi5) {
      _inherits(a, _l$LineDataSourceDefi5);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth,
              lineStyle: e.linestyle
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), "Line", {
              line: s
            })]
          };
        }
      }]);

      return a;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  92383: function _(e, t, i) {
    i.r(t), i.d(t, {
      ElliottPatternDefinitionsViewModel: function ElliottPatternDefinitionsViewModel() {
        return f;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(97145),
        c = i(94474);
    var d = new o.TranslatedString("change {title} color", n.t(null, void 0, i(20216))),
        p = new o.TranslatedString("change {title} degree", n.t(null, void 0, i(3400))),
        u = n.t(null, void 0, i(40054)),
        h = n.t(null, void 0, i(95545)),
        y = n.t(null, void 0, i(69479));

    var f =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi6) {
      _inherits(f, _l$LineDataSourceDefi6);

      function f() {
        _classCallCheck(this, f);

        return _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments));
      }

      _createClass(f, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.color, null, d.format({
                title: i
              }))
            }, {
              id: (0, c.removeSpaces)("".concat(t, "BackgroundColor")),
              title: u
            }), (0, r.createLineStyleDefinition)(this._propertyApplier, {
              showLine: e.showWave,
              lineWidth: e.linewidth
            }, i, "Line", {
              line: h
            }), (0, s.createOptionsPropertyDefinition)({
              option: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.degree, p.format({
                title: i
              }))
            }, {
              id: "".concat(t, "Degree"),
              title: y,
              options: new a.WatchedValue(this._source.availableDegreesValues())
            })]
          };
        }
      }]);

      return f;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  82300: function _(e, t, i) {
    i.r(t), i.d(t, {
      EllipseCircleDefinitionsViewModel: function EllipseCircleDefinitionsViewModel() {
        return a;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(20061);
    var s = n.t(null, void 0, i(37229));

    var a =
    /*#__PURE__*/
    function (_l$GeneralFiguresDefi) {
      _inherits(a, _l$GeneralFiguresDefi);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textColor,
              text: e.text,
              bold: e.bold,
              italic: e.italic,
              fontSize: e.fontSize,
              showText: e.showLabel
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: s
              }
            })]
          };
        }
      }]);

      return a;
    }(l.GeneralFiguresDefinitionsViewModelBase);
  },
  7044: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibCirclesDefinitionsViewModel: function FibCirclesDefinitionsViewModel() {
        return b;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152);

    var p = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        u = new r.TranslatedString("change {title} levels visibility", o.t(null, void 0, i(26710))),
        h = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        y = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        f = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        v = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        g = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        T = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        D = new r.TranslatedString("change {title} coeffs as percents visibility", o.t(null, void 0, i(99128))),
        w = o.t(null, void 0, i(4372)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(79106)),
        m = o.t(null, void 0, i(43809));

    var b =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi) {
      _inherits(b, _a$LineDataSourceDefi);

      function b() {
        _classCallCheck(this, b);

        return _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments));
      }

      _createClass(b, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, c.removeSpaces)(i),
              a = new r.TranslatedString(i, this._source.translatedType()),
              b = t.trendline.childs(),
              C = (0, l.createLineStyleDefinition)(this._propertyApplier, {
            showLine: b.visible,
            lineColor: b.color,
            lineStyle: b.linestyle,
            lineWidth: b.linewidth
          }, a, "TrendLine", {
            line: w
          });

          e.push(C);

          var L = this._source.levelsCount();

          for (var _i = 1; _i <= L; _i++) {
            var _n2 = t["level".concat(_i)].childs(),
                _r7 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n2.visible, p.format({
                title: a,
                index: _i
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _n2.color, null, h.format({
                title: a,
                index: _i
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n2.linewidth, y.format({
                title: a,
                index: _i
              })),
              level: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n2.coeff, f.format({
                title: a,
                index: _i
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_i)
            });

            e.push(_r7);
          }

          var x = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new d.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, v.format({
              title: a
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: _
          });
          e.push(x);
          var k = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, g.format({
              title: a
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.transparency, T.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Background"),
            title: P
          });
          e.push(k);
          var A = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.showCoeffs, u.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Levels"),
            title: S
          });
          e.push(A);
          var V = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.coeffsAsPercents, D.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Percentage"),
            title: m
          });
          return e.push(V), {
            definitions: e
          };
        }
      }]);

      return b;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  56194: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibDrawingsWith24LevelsDefinitionsViewModel: function FibDrawingsWith24LevelsDefinitionsViewModel() {
        return U;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(18505),
        d = i(97145),
        p = i(94474),
        u = i(69152);

    var h = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        y = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        f = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        v = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        g = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        T = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        D = new r.TranslatedString("change {title} reverse", o.t(null, void 0, i(52877))),
        w = new r.TranslatedString("change {title} prices visibility", o.t(null, void 0, i(56175))),
        _ = new r.TranslatedString("change {title} labels alignment", o.t(null, void 0, i(81170))),
        P = new r.TranslatedString("change {title} labels font size", o.t(null, void 0, i(22775))),
        S = new r.TranslatedString("change {title} style", o.t(null, void 0, i(74428))),
        m = new r.TranslatedString("change {title} fib levels based on log scale", o.t(null, void 0, i(45739))),
        b = o.t(null, void 0, i(4372)),
        C = o.t(null, void 0, i(95610)),
        L = o.t(null, void 0, i(14025)),
        x = o.t(null, void 0, i(45809)),
        k = o.t(null, void 0, i(83095)),
        A = o.t(null, void 0, i(3304)),
        V = o.t(null, void 0, i(24186)),
        $ = o.t(null, void 0, i(29072)),
        M = o.t(null, void 0, i(79106)),
        W = o.t(null, void 0, i(94420)),
        B = o.t(null, void 0, i(17006)),
        z = o.t(null, void 0, i(12374)),
        N = o.t(null, void 0, i(27331)),
        R = o.t(null, void 0, i(39836)),
        G = [{
      id: "values",
      value: !1,
      title: o.t(null, void 0, i(91322))
    }, {
      id: "percents",
      value: !0,
      title: o.t(null, void 0, i(650))
    }],
        E = [{
      id: "bottom",
      value: "bottom",
      title: o.t(null, void 0, i(65994))
    }, {
      id: "middle",
      value: "middle",
      title: o.t(null, void 0, i(76476))
    }, {
      id: "top",
      value: "top",
      title: o.t(null, void 0, i(91757))
    }],
        O = [10, 11, 12, 14, 16, 20, 24].map(function (e) {
      return {
        title: String(e),
        value: e
      };
    });

    var U =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi2) {
      _inherits(U, _a$LineDataSourceDefi2);

      function U(e, t) {
        var _this;

        _classCallCheck(this, U);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(U).call(this, e, t)), _this._disabledBasedOnLog = null;

        if ("fibLevelsBasedOnLogScale" in _this._source.properties().childs()) {
          var _e = _this._source.priceScale();

          null !== _e && (_this._disabledBasedOnLog = new d.WatchedValue(Boolean(!_e.mode().log)), _this._createPropertyRages(), _e.modeChanged().subscribe(_assertThisInitialized(_this), function (e, t) {
            null !== _this._disabledBasedOnLog && _this._disabledBasedOnLog.setValue(Boolean(!t.log));
          }));
        }

        return _this;
      }

      _createClass(U, [{
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(U.prototype), "destroy", this).call(this);

          var e = this._source.priceScale();

          null !== e && e.modeChanged().unsubscribeAll(this);
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, p.removeSpaces)(i),
              a = new r.TranslatedString(i, this._source.translatedType());

          if ("trendline" in t) {
            var _i2 = t.trendline.childs(),
                _n3 = (0, l.createLineStyleDefinition)(this._propertyApplier, {
              showLine: _i2.visible,
              lineColor: _i2.color,
              lineStyle: _i2.linestyle,
              lineWidth: _i2.linewidth
            }, a, "TrendLine", {
              line: b
            });

            e.push(_n3);
          }

          var U = t.levelsStyle.childs(),
              F = {
            lineStyle: U.linestyle,
            lineWidth: U.linewidth
          },
              I = {
            line: C
          };
          "extendLines" in t && (F.extendRight = t.extendLines, I.extendRightTitle = k), "extendLinesLeft" in t && (F.extendLeft = t.extendLinesLeft, I.extendLeftTitle = A), "extendRight" in t && (F.extendRight = t.extendRight, I.extendRightTitle = L), "extendLeft" in t && (F.extendLeft = t.extendLeft, I.extendLeftTitle = x);
          var H = (0, l.createLineStyleDefinition)(this._propertyApplier, F, a, "LevelsStyleLine", I);
          e.push(H);

          var j = [],
              Y = this._source.levelsCount();

          for (var _e2 = 1; _e2 <= Y; _e2++) {
            var _i3 = t["level".concat(_e2)].childs(),
                _n4 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i3.visible, h.format({
                title: a,
                index: _e2
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _i3.color, null, y.format({
                title: a,
                index: _e2
              })),
              level: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i3.coeff, f.format({
                title: a,
                index: _e2
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_e2)
            });

            j.push(_n4);
          }

          var X = (0, s.createPropertyDefinitionsLeveledLinesGroup)(j, "".concat(o, "LeveledLinesGroup"));
          e.push((0, s.createPropertyDefinitionsGeneralGroup)([X], "".concat(o, "Group")));
          var q = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new u.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, v.format({
              title: a
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: z
          });
          e.push(q);
          var J = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, g.format({
              title: a
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.transparency, T.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Background"),
            title: N
          });
          e.push(J);
          var K = t;

          if ("reverse" in K) {
            var _t = (0, s.createCheckablePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, K.reverse, D.format({
                title: a
              }))
            }, {
              id: "".concat(o, "Reverse"),
              title: V
            });

            e.push(_t);
          }

          var Q = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.showPrices, w.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Prices"),
            title: $
          });
          e.push(Q);
          var Z = (0, s.createOptionsPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.showCoeffs, S.format({
              title: a
            })),
            option: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.coeffsAsPercents, S.format({
              title: a
            }))
          }, {
            id: "".concat(o, "PitchStyle"),
            title: M,
            options: new d.WatchedValue(G)
          });
          e.push(Z);
          var ee = (0, s.createTwoOptionsPropertyDefinition)({
            option1: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.horzLabelsAlign, _.format({
              title: a
            })),
            option2: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.vertLabelsAlign, _.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Alignment"),
            title: W,
            optionsItems1: new d.WatchedValue(c.availableAlignmentHorizontalItems),
            optionsItems2: new d.WatchedValue(E)
          });
          e.push(ee);
          var te = (0, s.createOptionsPropertyDefinition)({
            option: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.labelFontSize, P.format({
              title: a
            }))
          }, {
            id: "".concat(o, "FontSize"),
            title: B,
            options: new d.WatchedValue(O)
          });

          if (e.push(te), "fibLevelsBasedOnLogScale" in t && null !== this._disabledBasedOnLog) {
            var _i4 = (0, s.createCheckablePropertyDefinition)({
              disabled: (0, s.convertFromWVToDefinitionProperty)(this._propertyApplier, this._disabledBasedOnLog, m.format({
                title: a
              })),
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fibLevelsBasedOnLogScale, m.format({
                title: a
              }))
            }, {
              id: "".concat(o, "BasedOnLog"),
              title: R
            });

            e.push(_i4);
          }

          return {
            definitions: e
          };
        }
      }]);

      return U;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  13972: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibSpeedResistanceArcsDefinitionsViewModel: function FibSpeedResistanceArcsDefinitionsViewModel() {
        return b;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152);

    var p = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        u = new r.TranslatedString("change {title} levels visibility", o.t(null, void 0, i(26710))),
        h = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        y = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        f = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        v = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        g = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        T = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        D = new r.TranslatedString("change {title} full circles visibility", o.t(null, void 0, i(35165))),
        w = o.t(null, void 0, i(4372)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(79106)),
        m = o.t(null, void 0, i(10578));

    var b =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi3) {
      _inherits(b, _a$LineDataSourceDefi3);

      function b() {
        _classCallCheck(this, b);

        return _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments));
      }

      _createClass(b, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, c.removeSpaces)(i),
              a = new r.TranslatedString(i, this._source.translatedType()),
              b = t.trendline.childs(),
              C = (0, l.createLineStyleDefinition)(this._propertyApplier, {
            showLine: b.visible,
            lineColor: b.color,
            lineStyle: b.linestyle,
            lineWidth: b.linewidth
          }, a, "TrendLine", {
            line: w
          });

          e.push(C);

          var L = this._source.levelsCount();

          for (var _i5 = 1; _i5 <= L; _i5++) {
            var _n5 = t["level".concat(_i5)].childs(),
                _r8 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n5.visible, p.format({
                title: a,
                index: _i5
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _n5.color, null, h.format({
                title: a,
                index: _i5
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n5.linewidth, y.format({
                title: a,
                index: _i5
              })),
              level: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n5.coeff, f.format({
                title: a,
                index: _i5
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_i5)
            });

            e.push(_r8);
          }

          var x = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new d.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, v.format({
              title: a
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: _
          });
          e.push(x);
          var k = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, g.format({
              title: a
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.transparency, T.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Background"),
            title: P
          });
          e.push(k);
          var A = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.showCoeffs, u.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Levels"),
            title: S
          });
          e.push(A);
          var V = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fullCircles, D.format({
              title: a
            }))
          }, {
            id: "".concat(o, "FullCircles"),
            title: m
          });
          return e.push(V), {
            definitions: e
          };
        }
      }]);

      return b;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  4841: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibSpeedResistanceFanDefinitionsViewModel: function FibSpeedResistanceFanDefinitionsViewModel() {
        return B;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152);

    var d = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        p = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        u = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        h = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        y = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        f = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        v = new r.TranslatedString("change {title} left labels visibility", o.t(null, void 0, i(2359))),
        g = new r.TranslatedString("change {title} right labels visibility", o.t(null, void 0, i(16598))),
        T = new r.TranslatedString("change {title} top labels visibility", o.t(null, void 0, i(73137))),
        D = new r.TranslatedString("change {title} bottom labels visibility", o.t(null, void 0, i(15802))),
        w = new r.TranslatedString("change {title} reverse", o.t(null, void 0, i(52877))),
        _ = new r.TranslatedString("change {title} grid visibility", o.t(null, void 0, i(53770))),
        P = new r.TranslatedString("change {title} grid line color", o.t(null, void 0, i(29145))),
        S = new r.TranslatedString("change {title} grid line width", o.t(null, void 0, i(93548))),
        m = new r.TranslatedString("change {title} grid line style", o.t(null, void 0, i(64949))),
        b = o.t(null, void 0, i(12374)),
        C = o.t(null, void 0, i(27331)),
        L = o.t(null, void 0, i(16103)),
        x = o.t(null, void 0, i(77838)),
        k = o.t(null, void 0, i(79307)),
        A = o.t(null, void 0, i(91367)),
        V = o.t(null, void 0, i(10209)),
        $ = o.t(null, void 0, i(17608)),
        M = o.t(null, void 0, i(81260)),
        W = o.t(null, void 0, i(24186));

    var B =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi) {
      _inherits(B, _s$LineDataSourceDefi);

      function B() {
        _classCallCheck(this, B);

        return _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
      }

      _createClass(B, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, a.removeSpaces)(i),
              s = new r.TranslatedString(i, this._source.translatedType()),
              B = [],
              z = this._source.hLevelsCount();

          for (var _e3 = 1; _e3 <= z; _e3++) {
            var _i6 = t["hlevel".concat(_e3)].childs(),
                _n6 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i6.visible, d.format({
                title: s,
                index: _e3
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _i6.color, null, p.format({
                title: s,
                index: _e3
              })),
              level: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i6.coeff, u.format({
                title: s,
                index: _e3
              }))
            }, {
              id: "".concat(o, "HLineLevel").concat(_e3)
            });

            B.push(_n6);
          }

          var N = (0, l.createPropertyDefinitionsLeveledLinesGroup)(B, "".concat(o, "HLeveledLinesGroup")),
              R = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showLeftLabels, v.format({
              title: s
            }))
          }, {
            id: "".concat(o, "LeftLabels"),
            title: k
          }),
              G = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showRightLabels, g.format({
              title: s
            }))
          }, {
            id: "".concat(o, "RightLabels"),
            title: A
          }),
              E = (0, l.createPropertyDefinitionsGeneralGroup)([N, R, G], "".concat(o, "HLevelGroup"), L);
          e.push(E);

          var O = [],
              U = this._source.vLevelsCount();

          for (var _e4 = 1; _e4 <= U; _e4++) {
            var _i7 = t["vlevel".concat(_e4)].childs(),
                _n7 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i7.visible, d.format({
                title: s,
                index: _e4
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _i7.color, null, p.format({
                title: s,
                index: _e4
              })),
              level: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i7.coeff, u.format({
                title: s,
                index: _e4
              }))
            }, {
              id: "".concat(o, "VLineLevel").concat(_e4)
            });

            O.push(_n7);
          }

          var F = (0, l.createPropertyDefinitionsLeveledLinesGroup)(O, "".concat(o, "VLeveledLinesGroup")),
              I = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showTopLabels, T.format({
              title: s
            }))
          }, {
            id: "".concat(o, "TopLabels"),
            title: V
          }),
              H = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showBottomLabels, D.format({
              title: s
            }))
          }, {
            id: "".concat(o, "BottomLabels"),
            title: $
          }),
              j = (0, l.createPropertyDefinitionsGeneralGroup)([F, I, H], "".concat(o, "VLevelGroup"), x);
          e.push(j);
          var Y = (0, l.createColorPropertyDefinition)({
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, new c.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, h.format({
              title: s
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: b
          });
          e.push(Y);
          var X = (0, l.createTransparencyPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, y.format({
              title: s
            })),
            transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.transparency, f.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Background"),
            title: C
          });
          e.push(X);
          var q = t.grid.childs(),
              J = (0, l.createLinePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, q.visible, _.format({
              title: s
            })),
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, q.color, null, P.format({
              title: s
            })),
            width: (0, l.convertToDefinitionProperty)(this._propertyApplier, q.linewidth, S.format({
              title: s
            })),
            style: (0, l.convertToDefinitionProperty)(this._propertyApplier, q.linestyle, m.format({
              title: s
            }))
          }, {
            id: "".concat(o, "GridLine"),
            title: M
          });
          e.push(J);
          var K = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.reverse, w.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Reverse"),
            title: W
          });
          return e.push(K), {
            definitions: e
          };
        }
      }]);

      return B;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  90448: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibSpiralDefinitionsViewModel: function FibSpiralDefinitionsViewModel() {
        return y;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(94474);
    var a = new o.TranslatedString("change {title} line color", n.t(null, void 0, i(20563))),
        c = new o.TranslatedString("change {title} line width", n.t(null, void 0, i(44643))),
        d = new o.TranslatedString("change {title} line style", n.t(null, void 0, i(66982))),
        p = new o.TranslatedString("change {title} counterclockwise", n.t(null, void 0, i(31804))),
        u = n.t(null, void 0, i(1277)),
        h = n.t(null, void 0, i(89795));

    var y =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi7) {
      _inherits(y, _l$LineDataSourceDefi7);

      function y() {
        _classCallCheck(this, y);

        return _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments));
      }

      _createClass(y, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, s.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLinePropertyDefinition)({
              color: (0, r.getColorDefinitionProperty)(this._propertyApplier, e.linecolor, null, a.format({
                title: n
              })),
              width: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.linewidth, c.format({
                title: n
              })),
              style: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.linestyle, d.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Line"),
              title: u
            }), (0, r.createCheckablePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.counterclockwise, p.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Counterclockwise"),
              title: h
            })]
          };
        }
      }]);

      return y;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  18505: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibTimezoneDefinitionsViewModel: function FibTimezoneDefinitionsViewModel() {
        return C;
      },
      availableAlignmentHorizontalItems: function availableAlignmentHorizontalItems() {
        return b;
      },
      availableAlignmentVerticalItems: function availableAlignmentVerticalItems() {
        return m;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(97145),
        c = i(94474),
        d = i(69152);

    var p = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        u = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        h = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        y = new r.TranslatedString("change {title} level {index} line style", o.t(null, void 0, i(47840))),
        f = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        v = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        g = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        T = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        D = new r.TranslatedString("change {title} labels visibility", o.t(null, void 0, i(24338))),
        w = new r.TranslatedString("change {title} labels alignment", o.t(null, void 0, i(81170))),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(94420)),
        m = [{
      id: "top",
      value: "top",
      title: o.t(null, void 0, i(65994))
    }, {
      id: "middle",
      value: "middle",
      title: o.t(null, void 0, i(76476))
    }, {
      id: "bottom",
      value: "bottom",
      title: o.t(null, void 0, i(91757))
    }],
        b = [{
      id: "left",
      value: "left",
      title: o.t(null, void 0, i(19286))
    }, {
      id: "center",
      value: "center",
      title: o.t(null, void 0, i(72171))
    }, {
      id: "right",
      value: "right",
      title: o.t(null, void 0, i(21141))
    }];

    var C =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi2) {
      _inherits(C, _s$LineDataSourceDefi2);

      function C() {
        _classCallCheck(this, C);

        return _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
      }

      _createClass(C, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, c.removeSpaces)(i),
              s = new r.TranslatedString(i, this._source.translatedType()),
              C = this._source.levelsCount();

          for (var _i8 = 1; _i8 <= C; _i8++) {
            var _n8 = t["level".concat(_i8)].childs(),
                _r9 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n8.visible, p.format({
                title: s,
                index: _i8
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _n8.color, null, u.format({
                title: s,
                index: _i8
              })),
              width: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n8.linewidth, h.format({
                title: s,
                index: _i8
              })),
              style: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n8.linestyle, y.format({
                title: s,
                index: _i8
              })),
              level: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n8.coeff, f.format({
                title: s,
                index: _i8
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_i8)
            });

            e.push(_r9);
          }

          var L = (0, l.createColorPropertyDefinition)({
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, new d.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, v.format({
              title: s
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: _
          });
          e.push(L);
          var x = (0, l.createTransparencyPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, g.format({
              title: s
            })),
            transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.transparency, T.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Background"),
            title: P
          });
          e.push(x);
          var k = (0, l.createTwoOptionsPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showLabels, D.format({
              title: s
            })),
            option1: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.horzLabelsAlign, w.format({
              title: s
            })),
            option2: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.vertLabelsAlign, w.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Labels"),
            title: S,
            optionsItems1: new a.WatchedValue(b),
            optionsItems2: new a.WatchedValue(m)
          });
          return e.push(k), {
            definitions: e
          };
        }
      }]);

      return C;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  89478: function _(e, t, i) {
    i.r(t), i.d(t, {
      FibWedgeDefinitionsViewModel: function FibWedgeDefinitionsViewModel() {
        return S;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152);

    var p = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        u = new r.TranslatedString("change {title} levels visibility", o.t(null, void 0, i(26710))),
        h = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        y = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        f = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        v = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        g = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        T = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        D = o.t(null, void 0, i(4372)),
        w = o.t(null, void 0, i(12374)),
        _ = o.t(null, void 0, i(27331)),
        P = o.t(null, void 0, i(79106));

    var S =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi4) {
      _inherits(S, _a$LineDataSourceDefi4);

      function S() {
        _classCallCheck(this, S);

        return _possibleConstructorReturn(this, _getPrototypeOf(S).apply(this, arguments));
      }

      _createClass(S, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, c.removeSpaces)(i),
              a = new r.TranslatedString(i, this._source.translatedType()),
              S = t.trendline.childs(),
              m = (0, l.createLineStyleDefinition)(this._propertyApplier, {
            showLine: S.visible,
            lineColor: S.color,
            lineWidth: S.linewidth
          }, a, "TrendLine", {
            line: D
          });

          e.push(m);

          var b = this._source.levelsCount();

          for (var _i9 = 1; _i9 <= b; _i9++) {
            var _n9 = t["level".concat(_i9)].childs(),
                _r10 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n9.visible, p.format({
                title: a,
                index: _i9
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _n9.color, null, h.format({
                title: a,
                index: _i9
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n9.linewidth, y.format({
                title: a,
                index: _i9
              })),
              level: (0, s.convertToDefinitionProperty)(this._propertyApplier, _n9.coeff, f.format({
                title: a,
                index: _i9
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_i9)
            });

            e.push(_r10);
          }

          var C = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new d.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, v.format({
              title: a
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: w
          });
          e.push(C);
          var L = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, g.format({
              title: a
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.transparency, T.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Background"),
            title: _
          });
          e.push(L);
          var x = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.showCoeffs, u.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Levels"),
            title: P
          });
          return e.push(x), {
            definitions: e
          };
        }
      }]);

      return S;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  42923: function _(e, t, i) {
    i.r(t), i.d(t, {
      FlagMarkDefinitionsViewModel: function FlagMarkDefinitionsViewModel() {
        return c;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141);
    var s = new o.TranslatedString("change flag color", n.t(null, void 0, i(72080))),
        a = n.t(null, void 0, i(21524));

    var c =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi3) {
      _inherits(c, _r$LineDataSourceDefi3);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, l.createColorPropertyDefinition)({
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, e.flagColor, null, s)
            }, {
              id: "FlagColor",
              title: a
            })]
          };
        }
      }]);

      return c;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  85951: function _(e, t, i) {
    i.r(t), i.d(t, {
      GannComplexAndFixedDefinitionsViewModel: function GannComplexAndFixedDefinitionsViewModel() {
        return N;
      },
      isGannComplexLineTool: function isGannComplexLineTool() {
        return z;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(50653),
        s = i(46141),
        a = i(85766),
        c = i(49809),
        d = i(97145),
        p = i(20345),
        u = i(94474),
        h = i(69152);

    var y = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        f = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        v = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        g = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        T = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        D = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        w = new r.TranslatedString("change {title} reverse", o.t(null, void 0, i(52877))),
        _ = new r.TranslatedString("change {title} fan {index} line visibility", o.t(null, void 0, i(89126))),
        P = new r.TranslatedString("change {title} fan {index} line color", o.t(null, void 0, i(82516))),
        S = new r.TranslatedString("change {title} fan {index} line width", o.t(null, void 0, i(30016))),
        m = new r.TranslatedString("change {title} arcs {index} line visibility", o.t(null, void 0, i(13853))),
        b = new r.TranslatedString("change {title} arcs {index} line color", o.t(null, void 0, i(17466))),
        C = new r.TranslatedString("change {title} arcs {index} line width", o.t(null, void 0, i(72307))),
        L = new r.TranslatedString("change top margin", o.t(null, void 0, i(98905))),
        x = o.t(null, void 0, i(24186)),
        k = o.t(null, void 0, i(12374)),
        A = o.t(null, void 0, i(27331)),
        V = o.t(null, void 0, i(59771)),
        $ = o.t(null, void 0, i(33886)),
        M = o.t(null, void 0, i(79106)),
        W = o.t(null, void 0, i(87931)),
        B = o.t(null, void 0, i(54189));

    function z(e) {
      return e instanceof c.LineToolGannComplex;
    }

    var N =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi5) {
      _inherits(N, _a$LineDataSourceDefi5);

      function N() {
        _classCallCheck(this, N);

        return _possibleConstructorReturn(this, _getPrototypeOf(N).apply(this, arguments));
      }

      _createClass(N, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, u.removeSpaces)(i),
              a = new r.TranslatedString(i, this._source.translatedType()),
              c = [],
              N = t.levels.childCount();

          for (var _e5 = 0; _e5 < N; _e5++) {
            var _i10 = t.levels.childs()[_e5].childs(),
                _n10 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i10.visible, y.format({
                title: a,
                index: _e5
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _i10.color, null, f.format({
                title: a,
                index: _e5
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i10.width, v.format({
                title: a,
                index: _e5
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_e5),
              title: "".concat(_e5)
            });

            c.push(_n10);
          }

          var R = (0, s.createPropertyDefinitionsLeveledLinesGroup)(c, "".concat(o, "LeveledLinesGroup"));
          e.push((0, s.createPropertyDefinitionsGeneralGroup)([R], "".concat(o, "LevelGroup"), M));
          var G = [],
              E = t.fanlines.childCount();

          for (var _e6 = 0; _e6 < E; _e6++) {
            var _i11 = t.fanlines.childs()[_e6].childs(),
                _n11 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i11.visible, _.format({
                title: a,
                index: _e6
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _i11.color, null, P.format({
                title: a,
                index: _e6
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i11.width, S.format({
                title: a,
                index: _e6
              }))
            }, {
              id: "".concat(o, "FanLineLevel").concat(_e6),
              title: "".concat(_i11.x.value(), "x").concat(_i11.y.value())
            });

            G.push(_n11);
          }

          var O = (0, s.createPropertyDefinitionsLeveledLinesGroup)(G, "".concat(o, "FanLeveledLinesGroup"));
          e.push((0, s.createPropertyDefinitionsGeneralGroup)([O], "".concat(o, "FanLinesGroup"), W));
          var U = [],
              F = t.arcs.childCount();

          for (var _e7 = 0; _e7 < F; _e7++) {
            var _i12 = t.arcs.childs()[_e7].childs(),
                _n12 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i12.visible, m.format({
                title: a,
                index: _e7
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _i12.color, null, b.format({
                title: a,
                index: _e7
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i12.width, C.format({
                title: a,
                index: _e7
              }))
            }, {
              id: "".concat(o, "ArcsLineLevel").concat(_e7),
              title: "".concat(_i12.x.value(), "x").concat(_i12.y.value())
            });

            U.push(_n12);
          }

          var I = (0, s.createPropertyDefinitionsLeveledLinesGroup)(U, "".concat(o, "ArcsLeveledLinesGroup"));
          e.push((0, s.createPropertyDefinitionsGeneralGroup)([I], "".concat(o, "ArcsLinesGroup"), B));
          var H = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new h.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, g.format({
              title: a
            })), null, null)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: k
          });
          e.push(H);
          var j = t.arcsBackground.childs(),
              Y = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, j.fillBackground, T.format({
              title: a
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, j.transparency, D.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Background"),
            title: A
          });
          e.push(Y);
          var X = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, t.reverse, w.format({
              title: a
            }))
          }, {
            id: "".concat(o, "Reverse"),
            title: x
          });

          if (e.push(X), z(this._source)) {
            var _t2 = this._source,
                _i13 = _t2.properties().childs(),
                _n13 = (0, s.createNumberPropertyDefinition)({
              value: (0, s.convertToDefinitionProperty)(this._propertyApplier, _i13.scaleRatio, L, [(0, p.limitedPrecision)(7), function (e) {
                return null !== e ? parseFloat(_t2.getScaleRatioFormatter().format("".concat(e))) : null;
              }])
            }, {
              id: "scaleRatio",
              title: V,
              min: new d.WatchedValue(1e-7),
              max: new d.WatchedValue(1e8),
              step: new d.WatchedValue(_t2.getScaleRatioStep())
            });

            e.push(_n13);

            var _o = _i13.labelsStyle.childs(),
                _r11 = (0, l.createTextStyleDefinition)(this._propertyApplier, {
              showText: _i13.showLabels,
              fontSize: _o.fontSize,
              bold: _o.bold,
              italic: _o.italic
            }, a, {
              customTitles: {
                text: $
              }
            });

            e.push(_r11);
          }

          return {
            definitions: e
          };
        }
      }]);

      return N;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  95399: function _(e, t, i) {
    i.r(t), i.d(t, {
      GannFanDefinitionsViewModel: function GannFanDefinitionsViewModel() {
        return _;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152);
    var d = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        p = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        u = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        h = new r.TranslatedString("change {title} level {index} line style", o.t(null, void 0, i(47840))),
        y = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        f = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        v = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        g = new r.TranslatedString("change {title} labels visibility", o.t(null, void 0, i(24338))),
        T = o.t(null, void 0, i(12374)),
        D = o.t(null, void 0, i(27331)),
        w = o.t(null, void 0, i(94420));

    var _ =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi3) {
      _inherits(_, _s$LineDataSourceDefi3);

      function _() {
        _classCallCheck(this, _);

        return _possibleConstructorReturn(this, _getPrototypeOf(_).apply(this, arguments));
      }

      _createClass(_, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, a.removeSpaces)(i),
              s = new r.TranslatedString(i, this._source.translatedType()),
              _ = this._source.levelsCount();

          for (var _i14 = 1; _i14 <= _; _i14++) {
            var _n14 = t["level".concat(_i14)].childs(),
                _r12 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n14.visible, d.format({
                title: s,
                index: _i14
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _n14.color, null, p.format({
                title: s,
                index: _i14
              })),
              width: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n14.linewidth, u.format({
                title: s,
                index: _i14
              })),
              style: (0, l.convertToDefinitionProperty)(this._propertyApplier, _n14.linestyle, h.format({
                title: s,
                index: _i14
              }))
            }, {
              id: "".concat(o, "LineLevel").concat(_i14),
              title: "".concat(_n14.coeff1.value(), "/").concat(_n14.coeff2.value())
            });

            e.push(_r12);
          }

          var P = (0, l.createColorPropertyDefinition)({
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, new c.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, y.format({
              title: s
            }))
          }, {
            id: "".concat(o, "AllLineColor"),
            title: T
          });
          e.push(P);
          var S = (0, l.createTransparencyPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, f.format({
              title: s
            })),
            transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.transparency, v.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Background"),
            title: D
          });
          e.push(S);
          var m = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showLabels, g.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Labels"),
            title: w
          });
          return e.push(m), {
            definitions: e
          };
        }
      }]);

      return _;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  41854: function _(e, t, i) {
    i.r(t), i.d(t, {
      GannSquareDefinitionsViewModel: function GannSquareDefinitionsViewModel() {
        return M;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152);

    var d = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        p = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        u = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        h = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        y = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        f = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        v = new r.TranslatedString("change {title} reverse", o.t(null, void 0, i(52877))),
        g = new r.TranslatedString("change {title} left labels visibility", o.t(null, void 0, i(2359))),
        T = new r.TranslatedString("change {title} right labels visibility", o.t(null, void 0, i(16598))),
        D = new r.TranslatedString("change {title} top labels visibility", o.t(null, void 0, i(73137))),
        w = new r.TranslatedString("change {title} bottom labels visibility", o.t(null, void 0, i(15802))),
        _ = new r.TranslatedString("change {title} fans visibility", o.t(null, void 0, i(78142))),
        P = new r.TranslatedString("change {title} fans line color", o.t(null, void 0, i(79467))),
        S = o.t(null, void 0, i(12374)),
        m = o.t(null, void 0, i(27331)),
        b = o.t(null, void 0, i(16103)),
        C = o.t(null, void 0, i(77838)),
        L = o.t(null, void 0, i(79307)),
        x = o.t(null, void 0, i(91367)),
        k = o.t(null, void 0, i(10209)),
        A = o.t(null, void 0, i(17608)),
        V = o.t(null, void 0, i(38280)),
        $ = o.t(null, void 0, i(24186));

    var M =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi4) {
      _inherits(M, _s$LineDataSourceDefi4);

      function M() {
        _classCallCheck(this, M);

        return _possibleConstructorReturn(this, _getPrototypeOf(M).apply(this, arguments));
      }

      _createClass(M, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              o = (0, a.removeSpaces)(i),
              s = new r.TranslatedString(i, this._source.translatedType()),
              M = [],
              W = this._source.hLevelsCount();

          for (var _e8 = 1; _e8 <= W; _e8++) {
            var _i15 = t["hlevel".concat(_e8)].childs(),
                _n15 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i15.visible, d.format({
                title: s,
                index: _e8
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _i15.color, null, p.format({
                title: s,
                index: _e8
              })),
              level: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i15.coeff, u.format({
                title: s,
                index: _e8
              }))
            }, {
              id: "".concat(o, "HLineLevel").concat(_e8)
            });

            M.push(_n15);
          }

          var B = (0, l.createPropertyDefinitionsLeveledLinesGroup)(M, "".concat(o, "HLeveledLinesGroup")),
              z = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showLeftLabels, g.format({
              title: s
            }))
          }, {
            id: "".concat(o, "LeftLabels"),
            title: L
          }),
              N = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showRightLabels, T.format({
              title: s
            }))
          }, {
            id: "".concat(o, "RightLabels"),
            title: x
          }),
              R = (0, l.createTransparencyPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.fillHorzBackground, y.format({
              title: s
            })),
            transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.horzTransparency, f.format({
              title: s
            }))
          }, {
            id: "".concat(o, "BackgroundH"),
            title: m
          }),
              G = (0, l.createPropertyDefinitionsGeneralGroup)([B, z, N, R], "".concat(o, "HLevelGroup"), b);
          e.push(G);

          var E = [],
              O = this._source.vLevelsCount();

          for (var _e9 = 1; _e9 <= O; _e9++) {
            var _i16 = t["vlevel".concat(_e9)].childs(),
                _n16 = (0, l.createLeveledLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i16.visible, d.format({
                title: s,
                index: _e9
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, _i16.color, null, p.format({
                title: s,
                index: _e9
              })),
              level: (0, l.convertToDefinitionProperty)(this._propertyApplier, _i16.coeff, u.format({
                title: s,
                index: _e9
              }))
            }, {
              id: "".concat(o, "VLineLevel").concat(_e9)
            });

            E.push(_n16);
          }

          var U = (0, l.createPropertyDefinitionsLeveledLinesGroup)(E, "".concat(o, "VLeveledLinesGroup")),
              F = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showTopLabels, D.format({
              title: s
            }))
          }, {
            id: "".concat(o, "TopLabels"),
            title: k
          }),
              I = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.showBottomLabels, w.format({
              title: s
            }))
          }, {
            id: "".concat(o, "BottomLabels"),
            title: A
          }),
              H = (0, l.createTransparencyPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.fillVertBackground, y.format({
              title: s
            })),
            transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.vertTransparency, f.format({
              title: s
            }))
          }, {
            id: "".concat(o, "BackgroundV"),
            title: m
          }),
              j = (0, l.createPropertyDefinitionsGeneralGroup)([U, F, I, H], "".concat(o, "VLevelGroup"), C);
          e.push(j);
          var Y = (0, l.createColorPropertyDefinition)({
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, new c.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, h.format({
              title: s
            }), !0)
          }, {
            id: "".concat(o, "AllLineColor"),
            title: S
          });
          e.push(Y);
          var X = t.fans.childs(),
              q = (0, l.createColorPropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, X.visible, _.format({
              title: s
            })),
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, X.color, null, P.format({
              title: s
            }))
          }, {
            id: "".concat(o, "FansLines"),
            title: V
          });
          e.push(q);
          var J = (0, l.createCheckablePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, t.reverse, v.format({
              title: s
            }))
          }, {
            id: "".concat(o, "Reverse"),
            title: $
          });
          return e.push(J), {
            definitions: e
          };
        }
      }]);

      return M;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  84070: function _(e, t, i) {
    i.r(t), i.d(t, {
      GeneralBezierDefinitionsViewModel: function GeneralBezierDefinitionsViewModel() {
        return u;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        d = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        p = n.t(null, void 0, i(27331));

    var u =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi8) {
      _inherits(u, _l$LineDataSourceDefi8);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._undoModel, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth,
              lineStyle: e.linestyle,
              extendLeft: e.extendLeft,
              extendRight: e.extendRight,
              leftEnd: e.leftEnd,
              rightEnd: e.rightEnd
            }, i, "Line"), (0, s.createColorPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._undoModel, e.fillBackground, c.format({
                title: i
              })),
              color: (0, s.getColorDefinitionProperty)(this._undoModel, e.backgroundColor, e.transparency, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "BackgroundColor")),
              title: p
            })]
          };
        }
      }]);

      return u;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  83115: function _(e, t, i) {
    i.r(t), i.d(t, {
      GeneralDatePriceRangeDefinitionsViewModel: function GeneralDatePriceRangeDefinitionsViewModel() {
        return b;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474);

    var d = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        p = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        u = new o.TranslatedString("change {title} extend top", n.t(null, void 0, i(896))),
        h = new o.TranslatedString("change {title} extend bottom", n.t(null, void 0, i(1447))),
        y = new o.TranslatedString("change {title} extend left", n.t(null, void 0, i(15258))),
        f = n.t(null, void 0, i(1277)),
        v = n.t(null, void 0, i(48848)),
        g = n.t(null, void 0, i(27331)),
        T = n.t(null, void 0, i(85197)),
        D = n.t(null, void 0, i(71116)),
        w = n.t(null, void 0, i(45809)),
        _ = n.t(null, void 0, i(14025)),
        P = n.t(null, void 0, i(85206)),
        S = n.t(null, void 0, i(14773)),
        m = n.t(null, void 0, i(37229));

    var b =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi5) {
      _inherits(b, _s$LineDataSourceDefi5);

      function b() {
        _classCallCheck(this, b);

        return _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments));
      }

      _createClass(b, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties().childs(),
              i = this._source.name(),
              n = (0, c.removeSpaces)(i),
              s = new o.TranslatedString(i, this._source.translatedType()),
              m = (0, r.createLineStyleDefinition)(this._propertyApplier, {
            lineColor: t.linecolor,
            lineWidth: t.linewidth
          }, s, "Line", {
            line: f
          });

          if (e.push(m), t.hasOwnProperty("borderWidth")) {
            var _i17 = (0, r.createLineStyleDefinition)(this._propertyApplier, {
              showLine: t.drawBorder,
              lineColor: t.borderColor,
              lineWidth: t.borderWidth
            }, s, "Border", {
              line: v
            });

            e.push(_i17);
          }

          var b = (0, a.createColorPropertyDefinition)({
            checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, t.fillBackground, d.format({
              title: s
            })),
            color: (0, a.getColorDefinitionProperty)(this._propertyApplier, t.backgroundColor, t.backgroundTransparency, p.format({
              title: s
            }))
          }, {
            id: "".concat(n, "BackgroundColor"),
            title: g
          });

          if (e.push(b), function (e) {
            return e.hasOwnProperty("extendTop");
          }(t)) {
            var _i18 = (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, t.extendTop, u.format({
                title: s
              }))
            }, {
              id: "".concat(n, "ExtendTop"),
              title: T
            }),
                _o2 = (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, t.extendBottom, h.format({
                title: s
              }))
            }, {
              id: "".concat(n, "ExtendBottom"),
              title: D
            });

            e.push(_i18, _o2);
          }

          if (function (e) {
            return e.hasOwnProperty("extendLeft");
          }(t)) {
            var _i19 = (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, t.extendLeft, y.format({
                title: s
              }))
            }, {
              id: "".concat(n, "extendLeft"),
              title: w
            }),
                _o3 = (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, t.extendRight, h.format({
                title: s
              }))
            }, {
              id: "".concat(n, "ExtendBottom"),
              title: _
            });

            e.push(_i19, _o3);
          }

          var C = (0, l.createTextStyleDefinition)(this._propertyApplier, {
            textColor: t.textcolor,
            backgroundColor: t.labelBackgroundColor,
            backgroundTransparency: t.backgroundTransparency,
            fontSize: t.fontsize,
            backgroundVisible: t.fillLabelBackground
          }, s, {
            isEditable: !0,
            isMultiLine: !0,
            customTitles: {
              text: P,
              backgroundTitle: S
            }
          });
          return e.push(C), {
            definitions: e
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs().customText.childs();

          return {
            definitions: [(0, l.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.visible,
              textColor: e.color,
              fontSize: e.fontsize
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: m
              }
            })]
          };
        }
      }]);

      return b;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  20061: function _(e, t, i) {
    i.r(t), i.d(t, {
      GeneralFiguresDefinitionsViewModel: function GeneralFiguresDefinitionsViewModel() {
        return y;
      },
      GeneralFiguresDefinitionsViewModelBase: function GeneralFiguresDefinitionsViewModelBase() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        d = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331));

    var h =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi9) {
      _inherits(h, _l$LineDataSourceDefi9);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType()),
              n = (0, r.createLineStyleDefinition)(this._propertyApplier, {
            lineColor: e.color,
            lineWidth: e.linewidth
          }, i, "Line", {
            line: p
          }),
              l = "transparency" in e ? e.transparency : null;

          return {
            definitions: [n, (0, s.createColorPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, c.format({
                title: i
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, l, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "BackgroundColor")),
              title: u
            })]
          };
        }
      }]);

      return h;
    }(l.LineDataSourceDefinitionsViewModel);

    var y =
    /*#__PURE__*/
    function (_h) {
      _inherits(y, _h);

      function y() {
        _classCallCheck(this, y);

        return _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments));
      }

      return y;
    }(h);
  },
  28578: function _(e, t, i) {
    i.r(t), i.d(t, {
      GeneralTrendFiguresDefinitionsViewModel: function GeneralTrendFiguresDefinitionsViewModel() {
        return y;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474);
    var d = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        p = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        u = n.t(null, void 0, i(29072)),
        h = n.t(null, void 0, i(27331));

    var y =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi6) {
      _inherits(y, _s$LineDataSourceDefi6);

      function y() {
        _classCallCheck(this, y);

        return _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments));
      }

      _createClass(y, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth,
              lineStyle: e.linestyle
            }), i, "Line"), (0, l.createTextStyleDefinition)(this._propertyApplier, {
              showText: e.showPrices,
              textColor: e.textcolor,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic
            }, i, {
              customTitles: {
                text: u
              }
            }), (0, a.createColorPropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, d.format({
                title: i
              })),
              color: (0, a.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, p.format({
                title: i
              }))
            }, {
              id: (0, c.removeSpaces)("".concat(t, "Background")),
              title: h
            })]
          };
        }
      }]);

      return y;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  52266: function _(e, t, i) {
    i.r(t), i.d(t, {
      GhostFeedDefinitionsViewModel: function GhostFeedDefinitionsViewModel() {
        return b;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(97145),
        a = i(94474);

    var c = new o.TranslatedString("change {title} candle up color", n.t(null, void 0, i(42273))),
        d = new o.TranslatedString("change {title} candle down color", n.t(null, void 0, i(38742))),
        p = new o.TranslatedString("change {title} candle border visibility", n.t(null, void 0, i(28146))),
        u = new o.TranslatedString("change {title} candle border up color", n.t(null, void 0, i(550))),
        h = new o.TranslatedString("change {title} candle border down color", n.t(null, void 0, i(7373))),
        y = new o.TranslatedString("change {title} candle wick visibility", n.t(null, void 0, i(27029))),
        f = new o.TranslatedString("change {title} candle wick color", n.t(null, void 0, i(76054))),
        v = new o.TranslatedString("change {title} transparency", n.t(null, void 0, i(84321))),
        g = new o.TranslatedString("change {title} average HL value", n.t(null, void 0, i(78680))),
        T = new o.TranslatedString("change {title} variance value", n.t(null, void 0, i(12355))),
        D = n.t(null, void 0, i(63528)),
        w = n.t(null, void 0, i(72269)),
        _ = n.t(null, void 0, i(26458)),
        P = n.t(null, void 0, i(2295)),
        S = n.t(null, void 0, i(34674)),
        m = n.t(null, void 0, i(25227));

    var b =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi4) {
      _inherits(b, _r$LineDataSourceDefi4);

      function b() {
        _classCallCheck(this, b);

        return _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments));
      }

      _createClass(b, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, a.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType()),
              r = e.candleStyle.childs();

          return {
            definitions: [(0, l.createTwoColorsPropertyDefinition)({
              color1: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.upColor, null, c.format({
                title: n
              })),
              color2: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.downColor, null, d.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Candle2Colors"),
              title: D
            }), (0, l.createTwoColorsPropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, r.drawBorder, p.format({
                title: n
              })),
              color1: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.borderUpColor, null, u.format({
                title: n
              })),
              color2: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.borderDownColor, null, h.format({
                title: n
              }))
            }, {
              id: "".concat(i, "CandleBorder2Colors"),
              title: w
            }), (0, l.createColorPropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, r.drawWick, y.format({
                title: n
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.wickColor, null, f.format({
                title: n
              }))
            }, {
              id: "".concat(i, "CandleWickColor"),
              title: _
            }), (0, l.createTransparencyPropertyDefinition)({
              transparency: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.transparency, v.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Transparency"),
              title: P
            })]
          };
        }
      }, {
        key: "_inputsPropertyDefinitions",
        value: function _inputsPropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, a.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, l.createNumberPropertyDefinition)({
              value: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.averageHL, g.format({
                title: n
              }))
            }, {
              id: "".concat(i, "AvgHL"),
              title: S,
              type: 0,
              min: new s.WatchedValue(1),
              max: new s.WatchedValue(5e4),
              step: new s.WatchedValue(1)
            }), (0, l.createNumberPropertyDefinition)({
              value: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.variance, T.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Variance"),
              title: m,
              type: 0,
              min: new s.WatchedValue(1),
              max: new s.WatchedValue(100),
              step: new s.WatchedValue(1)
            })]
          };
        }
      }]);

      return b;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  63138: function _(e, t, i) {
    i.r(t), i.d(t, {
      HighlighterDefinitionsViewModel: function HighlighterDefinitionsViewModel() {
        return l;
      }
    });
    var n = i(2908),
        o = i(85766),
        r = i(36298);

    var l =
    /*#__PURE__*/
    function (_o$LineDataSourceDefi2) {
      _inherits(l, _o$LineDataSourceDefi2);

      function l() {
        _classCallCheck(this, l);

        return _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments));
      }

      _createClass(l, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, n.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor
            }, new r.TranslatedString(this._source.name(), this._source.translatedType()), "Line")]
          };
        }
      }]);

      return l;
    }(o.LineDataSourceDefinitionsViewModel);
  },
  55252: function _(e, t, i) {
    i.r(t), i.d(t, {
      HorizontalLineDefinitionsViewModel: function HorizontalLineDefinitionsViewModel() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(41339),
        s = i(94474),
        a = i(85766),
        c = i(86778),
        d = i(50653);
    var p = n.t(null, void 0, i(37229)),
        u = n.t(null, {
      context: "linetool point"
    }, i(1961));

    var h =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi6) {
      _inherits(h, _a$LineDataSourceDefi6);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, c.getLinesStylesPropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()));
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var e = this._source.pointsProperty().childs().points[0].childs(),
              t = this._getYCoordinateStepWV(),
              i = (0, l.getCoordinateYMetaInfo)(this._propertyApplier, e, t);

          return {
            definitions: [(0, r.createCoordinatesPropertyDefinition)({
              y: i.property
            }, _objectSpread({
              id: (0, s.removeSpaces)("".concat(this._source.name(), "Point")),
              title: u
            }, i.info))]
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, d.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.showLabel,
              textColor: e.textcolor,
              fontSize: e.fontsize,
              textOrientation: e.textOrientation
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: p
              }
            })]
          };
        }
      }]);

      return h;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  15574: function _(e, t, i) {
    i.r(t), i.d(t, {
      HorizontalRayDefinitionsViewModel: function HorizontalRayDefinitionsViewModel() {
        return c;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(86778),
        s = i(50653);
    var a = n.t(null, void 0, i(37229));

    var c =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi5) {
      _inherits(c, _r$LineDataSourceDefi5);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, l.getLinesStylesPropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()));
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, s.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.showLabel,
              textColor: e.textcolor,
              fontSize: e.fontsize,
              textOrientation: e.textOrientation
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: a
              }
            })]
          };
        }
      }]);

      return c;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  53284: function _(e, t, i) {
    i.r(t), i.d(t, {
      IconsDefinitionsViewModel: function IconsDefinitionsViewModel() {
        return d;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(94474);
    var a = new o.TranslatedString("change {title} color", n.t(null, void 0, i(20216))),
        c = n.t(null, void 0, i(40054));

    var d =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi6) {
      _inherits(d, _r$LineDataSourceDefi6);

      function d(e, t) {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, _getPrototypeOf(d).call(this, e, t));
      }

      _createClass(d, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, l.createColorPropertyDefinition)({
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, e.color, null, a.format({
                title: i
              }))
            }, {
              id: (0, s.removeSpaces)("".concat(t, "Color")),
              title: c
            })]
          };
        }
      }]);

      return d;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  77420: function _(e, t, i) {
    i.r(t), i.d(t, {
      NoteDefinitionsViewModel: function NoteDefinitionsViewModel() {
        return p;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        d = n.t(null, void 0, i(85206));

    var p =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi10) {
      _inherits(p, _l$LineDataSourceDefi10);

      function p() {
        _classCallCheck(this, p);

        return _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments));
      }

      _createClass(p, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.markerColor, null, c.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "LabelColor")),
              title: d
            })]
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textColor,
              fontSize: e.fontSize,
              bold: e.bold,
              italic: e.italic,
              text: e.text,
              backgroundColor: e.backgroundColor,
              backgroundTransparency: e.backgroundTransparency,
              borderColor: e.borderColor
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0
            })]
          };
        }
      }]);

      return p;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  21905: function _(e, t, i) {
    i.r(t), i.d(t, {
      ParallelChannelDefinitionsViewModel: function ParallelChannelDefinitionsViewModel() {
        return T;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(2908),
        a = i(94474);
    var c = new o.TranslatedString("change {title} extending left", n.t(null, void 0, i(3708))),
        d = new o.TranslatedString("change {title} extending right", n.t(null, void 0, i(52889))),
        p = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        u = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        h = n.t(null, void 0, i(27331)),
        y = n.t(null, void 0, i(25892)),
        f = n.t(null, void 0, i(74395)),
        v = n.t(null, void 0, i(99120)),
        g = n.t(null, void 0, i(76476));

    var T =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi11) {
      _inherits(T, _l$LineDataSourceDefi11);

      function T() {
        _classCallCheck(this, T);

        return _possibleConstructorReturn(this, _getPrototypeOf(T).apply(this, arguments));
      }

      _createClass(T, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, a.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, s.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineStyle: e.linestyle,
              lineWidth: e.linewidth
            }, n, "ChannelLine", {
              line: v
            }), (0, s.createLineStyleDefinition)(this._propertyApplier, {
              showLine: e.showMidline,
              lineColor: e.midlinecolor,
              lineStyle: e.midlinestyle,
              lineWidth: e.midlinewidth
            }, n, "MiddleLine", {
              line: g
            }), (0, r.createCheckablePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.extendLeft, c.format({
                title: n
              }))
            }, {
              id: "".concat(i, "ExtendLeft"),
              title: y
            }), (0, r.createCheckablePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.extendRight, d.format({
                title: n
              }))
            }, {
              id: "".concat(i, "ExtendRight"),
              title: f
            }), (0, r.createColorPropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, p.format({
                title: n
              })),
              color: (0, r.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, u.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Background"),
              title: h
            })]
          };
        }
      }]);

      return T;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  74481: function _(e, t, i) {
    i.r(t), i.d(t, {
      PathDefinitionsViewModel: function PathDefinitionsViewModel() {
        return a;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766);
    var s = n.t(null, void 0, i(1277));

    var a =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi12) {
      _inherits(a, _l$LineDataSourceDefi12);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.lineColor,
              lineWidth: e.lineWidth,
              lineStyle: e.lineStyle,
              leftEnd: e.leftEnd,
              rightEnd: e.rightEnd
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), "Line", {
              line: s
            })]
          };
        }
      }]);

      return a;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  25107: function _(e, t, i) {
    i.r(t), i.d(t, {
      PatternWithBackgroundDefinitionViewModel: function PatternWithBackgroundDefinitionViewModel() {
        return f;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474);
    var d = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        p = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        u = n.t(null, void 0, i(85206)),
        h = n.t(null, void 0, i(48848)),
        y = n.t(null, void 0, i(27331));

    var f =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi7) {
      _inherits(f, _s$LineDataSourceDefi7);

      function f() {
        _classCallCheck(this, f);

        return _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments));
      }

      _createClass(f, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, l.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textcolor,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic
            }, i, {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: u
              }
            }), (0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.color,
              lineWidth: e.linewidth
            }, i, "Line", {
              line: h
            }), (0, a.createColorPropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, d.format({
                title: i
              })),
              color: (0, a.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, p.format({
                title: i
              }))
            }, {
              id: (0, c.removeSpaces)("".concat(t, "BackgroundColor")),
              title: y
            })]
          };
        }
      }]);

      return f;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  63311: function _(e, t, i) {
    i.r(t), i.d(t, {
      PatternWithoutBackgroundDefinitionsViewModel: function PatternWithoutBackgroundDefinitionsViewModel() {
        return d;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766);
    var a = n.t(null, void 0, i(85206)),
        c = n.t(null, void 0, i(48848));

    var d =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi8) {
      _inherits(d, _s$LineDataSourceDefi8);

      function d() {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, _getPrototypeOf(d).apply(this, arguments));
      }

      _createClass(d, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = new o.TranslatedString(this._source.name(), this._source.translatedType());

          return {
            definitions: [(0, l.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textcolor,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic
            }, t, {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: a
              }
            }), (0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.color,
              lineWidth: e.linewidth
            }, t, "Line", {
              line: c
            })]
          };
        }
      }]);

      return d;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  81658: function _(e, t, i) {
    i.r(t), i.d(t, {
      PitchBaseDefinitionsViewModel: function PitchBaseDefinitionsViewModel() {
        return m;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(85766),
        a = i(46141),
        c = i(94474),
        d = i(69152);

    var p = new r.TranslatedString("change {title} extend lines", o.t(null, void 0, i(96902))),
        u = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        h = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        y = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        f = new r.TranslatedString("change {title} level {index} line style", o.t(null, void 0, i(47840))),
        v = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        g = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        T = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        D = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        w = o.t(null, {
      context: "study"
    }, i(66187)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(13611));

    var m =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi9) {
      _inherits(m, _s$LineDataSourceDefi9);

      function m() {
        _classCallCheck(this, m);

        return _possibleConstructorReturn(this, _getPrototypeOf(m).apply(this, arguments));
      }

      _createClass(m, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties(),
              i = t.childs(),
              o = this._source.name(),
              s = (0, c.removeSpaces)(o),
              m = new r.TranslatedString(o, this._source.translatedType());

          t.hasChild("extendLines") && e.push((0, a.createCheckablePropertyDefinition)({
            checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, i.extendLines, p.format({
              title: m
            }))
          }, {
            id: "".concat(s, "ExtendLines"),
            title: S
          }));
          var b = i.median.childs(),
              C = (0, l.createLineStyleDefinition)(this._propertyApplier, {
            lineColor: b.color,
            lineStyle: b.linestyle,
            lineWidth: b.linewidth
          }, m, "Median", {
            line: w
          });
          e.push(C);

          var L = this._source.levelsCount();

          for (var _t3 = 0; _t3 <= L; _t3++) {
            var _n17 = i["level".concat(_t3)].childs(),
                _o4 = (0, a.createLeveledLinePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, _n17.visible, u.format({
                title: m,
                index: _t3 + 1
              })),
              color: (0, a.getColorDefinitionProperty)(this._propertyApplier, _n17.color, null, h.format({
                title: m,
                index: _t3 + 1
              })),
              width: (0, a.convertToDefinitionProperty)(this._propertyApplier, _n17.linewidth, y.format({
                title: m,
                index: _t3 + 1
              })),
              style: (0, a.convertToDefinitionProperty)(this._propertyApplier, _n17.linestyle, f.format({
                title: m,
                index: _t3 + 1
              })),
              level: (0, a.convertToDefinitionProperty)(this._propertyApplier, _n17.coeff, v.format({
                title: m,
                index: _t3 + 1
              }))
            }, {
              id: "".concat(s, "LineLevel").concat(_t3 + 1)
            });

            e.push(_o4);
          }

          var x = (0, a.createColorPropertyDefinition)({
            color: (0, a.getColorDefinitionProperty)(this._propertyApplier, new d.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, g.format({
              title: m
            }), !0)
          }, {
            id: "".concat(s, "AllLineColor"),
            title: _
          });
          e.push(x);
          var k = (0, a.createTransparencyPropertyDefinition)({
            checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, i.fillBackground, T.format({
              title: m
            })),
            transparency: (0, a.convertToDefinitionProperty)(this._propertyApplier, i.transparency, D.format({
              title: m
            }))
          }, {
            id: "".concat(s, "Background"),
            title: P
          });
          return e.push(k), {
            definitions: e
          };
        }
      }]);

      return m;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  769: function _(e, t, i) {
    i.r(t), i.d(t, {
      PitchForkDefinitionsViewModel: function PitchForkDefinitionsViewModel() {
        return u;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(81658),
        s = i(90095),
        a = i(97145);
    var c = new o.TranslatedString("change {title} style", n.t(null, void 0, i(74428))),
        d = n.t(null, void 0, i(32733)),
        p = [{
      value: s.LineToolPitchforkStyle.Original,
      title: n.t(null, void 0, i(25595))
    }, {
      value: s.LineToolPitchforkStyle.Schiff2,
      title: n.t(null, void 0, i(51464))
    }, {
      value: s.LineToolPitchforkStyle.Schiff,
      title: n.t(null, void 0, i(66276))
    }, {
      value: s.LineToolPitchforkStyle.Inside,
      title: n.t(null, void 0, i(9114))
    }];

    var u =
    /*#__PURE__*/
    function (_l$PitchBaseDefinitio) {
      _inherits(u, _l$PitchBaseDefinitio);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, _getPrototypeOf(u).apply(this, arguments));
      }

      _createClass(u, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = _get(_getPrototypeOf(u.prototype), "_stylePropertyDefinitions", this).call(this),
              t = this._source.properties().childs(),
              i = this._source.name(),
              n = new o.TranslatedString(i, this._source.translatedType()),
              l = (0, r.createOptionsPropertyDefinition)({
            option: (0, r.convertToDefinitionProperty)(this._propertyApplier, t.style, c.format({
              title: n
            }))
          }, {
            id: "".concat(i, "PitchStyle"),
            title: d,
            options: new a.WatchedValue(p)
          });

          return e.definitions.push(l), e;
        }
      }]);

      return u;
    }(l.PitchBaseDefinitionsViewModel);
  },
  62890: function _(e, t, i) {
    i.r(t), i.d(t, {
      PolylinesDefinitionsViewModel: function PolylinesDefinitionsViewModel() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        d = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331));

    var h =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi13) {
      _inherits(h, _l$LineDataSourceDefi13);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth
            }, i, "Line", {
              line: p
            }), (0, s.createColorPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, c.format({
                title: i
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "BackgroundColor")),
              title: u
            })]
          };
        }
      }]);

      return h;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  54440: function _(e, t, i) {
    i.r(t), i.d(t, {
      PredictionDefinitionsViewModel: function PredictionDefinitionsViewModel() {
        return k;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);

    var c = new o.TranslatedString("change {title} source text color", n.t(null, void 0, i(42286))),
        d = new o.TranslatedString("change {title} source background color", n.t(null, void 0, i(18544))),
        p = new o.TranslatedString("change {title} source border color", n.t(null, void 0, i(48035))),
        u = new o.TranslatedString("change {title} target text color", n.t(null, void 0, i(27634))),
        h = new o.TranslatedString("change {title} target background color", n.t(null, void 0, i(52387))),
        y = new o.TranslatedString("change {title} target border color", n.t(null, void 0, i(6921))),
        f = new o.TranslatedString("change {title} success text color", n.t(null, void 0, i(88383))),
        v = new o.TranslatedString("change {title} success background color", n.t(null, void 0, i(26967))),
        g = new o.TranslatedString("change {title} failure text color", n.t(null, void 0, i(3156))),
        T = new o.TranslatedString("change {title} failure background color", n.t(null, void 0, i(49885))),
        D = n.t(null, void 0, i(79238)),
        w = n.t(null, void 0, i(22213)),
        _ = n.t(null, void 0, i(15500)),
        P = n.t(null, void 0, i(74289)),
        S = n.t(null, void 0, i(98001)),
        m = n.t(null, void 0, i(89258)),
        b = n.t(null, void 0, i(69835)),
        C = n.t(null, void 0, i(91141)),
        L = n.t(null, void 0, i(31343)),
        x = n.t(null, void 0, i(28565));

    var k =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi14) {
      _inherits(k, _l$LineDataSourceDefi14);

      function k() {
        _classCallCheck(this, k);

        return _possibleConstructorReturn(this, _getPrototypeOf(k).apply(this, arguments));
      }

      _createClass(k, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, a.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth
            }, n, "Line"), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.sourceTextColor, null, c.format({
                title: n
              }))
            }, {
              id: "".concat(i, "SourceTextColor"),
              title: D
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.sourceBackColor, e.transparency, d.format({
                title: n
              }))
            }, {
              id: "".concat(i, "SourceBackgroundColor"),
              title: w
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.sourceStrokeColor, null, p.format({
                title: n
              }))
            }, {
              id: "".concat(i, "SourceBorderColor"),
              title: _
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.targetTextColor, null, u.format({
                title: n
              }))
            }, {
              id: "".concat(i, "TargetTextColor"),
              title: P
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.targetBackColor, null, h.format({
                title: n
              }))
            }, {
              id: "".concat(i, "TargetBackgroundColor"),
              title: S
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.targetStrokeColor, null, y.format({
                title: n
              }))
            }, {
              id: "".concat(i, "TargetBorderColor"),
              title: m
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.successTextColor, null, f.format({
                title: n
              }))
            }, {
              id: "".concat(i, "SuccessTextColor"),
              title: b
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.successBackground, null, v.format({
                title: n
              }))
            }, {
              id: "".concat(i, "SuccessBackgroundColor"),
              title: C
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.failureTextColor, null, g.format({
                title: n
              }))
            }, {
              id: "".concat(i, "FailureTextColor"),
              title: L
            }), (0, s.createColorPropertyDefinition)({
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.failureBackground, null, T.format({
                title: n
              }))
            }, {
              id: "".concat(i, "FailureBackgroundColor"),
              title: x
            })]
          };
        }
      }]);

      return k;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  17265: function _(e, t, i) {
    i.r(t), i.d(t, {
      PriceLabelDefinitionsViewModel: function PriceLabelDefinitionsViewModel() {
        return a;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766);
    var s = n.t(null, void 0, i(37229));

    var a =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi15) {
      _inherits(a, _l$LineDataSourceDefi15);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.color,
              fontSize: e.fontsize,
              backgroundColor: e.backgroundColor,
              backgroundTransparency: e.transparency,
              borderColor: e.borderColor
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              customTitles: {
                text: s
              }
            })]
          };
        }
      }]);

      return a;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  11980: function _(e, t, i) {
    i.r(t), i.d(t, {
      PriceNoteDefinitionsViewModel: function PriceNoteDefinitionsViewModel() {
        return f;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} line color", n.t(null, void 0, i(20563))),
        d = n.t(null, void 0, i(37126)),
        p = n.t(null, void 0, i(37229)),
        u = n.t(null, void 0, i(60489)),
        h = n.t(null, void 0, i(75332)),
        y = n.t(null, void 0, i(14773));

    var f =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi16) {
      _inherits(f, _l$LineDataSourceDefi16);

      function f() {
        _classCallCheck(this, f);

        return _possibleConstructorReturn(this, _getPrototypeOf(f).apply(this, arguments));
      }

      _createClass(f, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, a.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType()),
              l = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.lineColor, null, c.format({
              title: n
            }))
          }, {
            id: "".concat(i, "LineColor"),
            title: u
          });

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.priceLabelTextColor,
              fontSize: e.priceLabelFontSize,
              bold: e.priceLabelBold,
              italic: e.priceLabelItalic,
              backgroundColor: e.priceLabelBackgroundColor,
              borderColor: e.priceLabelBorderColor
            }, n, {
              isEditable: !1,
              isMultiLine: !1,
              customTitles: {
                text: d,
                borderTitle: h,
                backgroundTitle: y
              }
            }), l]
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, r.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.showLabel,
              textColor: e.textColor,
              fontSize: e.fontSize
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: p
              }
            })]
          };
        }
      }]);

      return f;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  12501: function _(e, t, i) {
    i.r(t), i.d(t, {
      ProjectionDefinitionsViewModel: function ProjectionDefinitionsViewModel() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background color 1", n.t(null, void 0, i(39651))),
        d = new o.TranslatedString("change {title} background color 2", n.t(null, void 0, i(78177))),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331));

    var h =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi17) {
      _inherits(h, _l$LineDataSourceDefi17);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, s.createTwoColorsPropertyDefinition)({
              color1: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.color1, e.transparency, c.format({
                title: i
              })),
              color2: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.color2, e.transparency, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "Background2Color")),
              title: u
            }), (0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.trendline.childs().color,
              lineWidth: e.linewidth
            }, i, "Line", {
              line: p
            })]
          };
        }
      }]);

      return h;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  3664: function _(e, t, i) {
    i.r(t), i.d(t, {
      RectangleDefinitionsViewModel: function RectangleDefinitionsViewModel() {
        return y;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(20061),
        s = i(50653);
    var a = new o.TranslatedString("change {title} extending left", n.t(null, void 0, i(3708))),
        c = new o.TranslatedString("change {title} extending right", n.t(null, void 0, i(52889))),
        d = n.t(null, void 0, i(37229)),
        p = n.t(null, void 0, i(45809)),
        u = n.t(null, void 0, i(14025)),
        h = [{
      value: "bottom",
      title: n.t(null, void 0, i(65994))
    }, {
      value: "middle",
      title: n.t(null, void 0, i(9114))
    }, {
      value: "top",
      title: n.t(null, void 0, i(91757))
    }];

    var y =
    /*#__PURE__*/
    function (_l$GeneralFiguresDefi2) {
      _inherits(y, _l$GeneralFiguresDefi2);

      function y() {
        _classCallCheck(this, y);

        return _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments));
      }

      _createClass(y, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType()),
              n = _get(_getPrototypeOf(y.prototype), "_stylePropertyDefinitions", this).call(this),
              l = (0, r.createCheckablePropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.extendRight, c.format({
              title: i
            }))
          }, {
            id: "".concat(t, "ExtendRight"),
            title: u
          });

          n.definitions.push(l);
          var s = (0, r.createCheckablePropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, e.extendLeft, a.format({
              title: i
            }))
          }, {
            id: "".concat(t, "ExtendLeft"),
            title: p
          });
          return n.definitions.push(s), n;
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, s.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textColor,
              text: e.text,
              bold: e.bold,
              italic: e.italic,
              fontSize: e.fontSize,
              horzLabelsAlign: e.horzLabelsAlign,
              vertLabelsAlign: e.vertLabelsAlign,
              showText: e.showLabel
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              alignmentVerticalItems: h,
              customTitles: {
                text: d
              }
            })]
          };
        }
      }]);

      return y;
    }(l.GeneralFiguresDefinitionsViewModelBase);
  },
  30333: function _(e, t, i) {
    i.r(t), i.d(t, {
      RiskRewardDefinitionsViewModel: function RiskRewardDefinitionsViewModel() {
        return I;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(4895),
        d = i(97145),
        p = i(94474);

    var u = new o.TranslatedString("change {title} stop color", n.t(null, void 0, i(54659))),
        h = new o.TranslatedString("change {title} target color", n.t(null, void 0, i(97573))),
        y = new o.TranslatedString("change {title} price labels visibility", n.t(null, void 0, i(88577))),
        f = new o.TranslatedString("change {title} compact stats mode", n.t(null, void 0, i(35435))),
        v = new o.TranslatedString("change {title} always show stats", n.t(null, void 0, i(37913))),
        g = new o.TranslatedString("change {title} account size", n.t(null, void 0, i(31775))),
        T = new o.TranslatedString("change {title} lot size", n.t(null, void 0, i(45025))),
        D = new o.TranslatedString("change {title} risk", n.t(null, void 0, i(31553))),
        w = new o.TranslatedString("change {title} risk display mode", n.t(null, void 0, i(40344))),
        _ = new o.TranslatedString("change {title} entry price", n.t(null, void 0, i(59354))),
        P = new o.TranslatedString("change {title} profit level", n.t(null, void 0, i(44539))),
        S = new o.TranslatedString("change {title} profit price", n.t(null, void 0, i(41646))),
        m = new o.TranslatedString("change {title} stop level", n.t(null, void 0, i(89182))),
        b = new o.TranslatedString("change {title} stop price", n.t(null, void 0, i(82224))),
        C = n.t(null, void 0, i(83182)),
        L = n.t(null, void 0, i(50948)),
        x = n.t(null, void 0, i(45302)),
        k = n.t(null, void 0, i(37229)),
        A = n.t(null, void 0, i(47737)),
        V = n.t(null, void 0, i(30973)),
        $ = n.t(null, void 0, i(25684)),
        M = n.t(null, void 0, i(46001)),
        W = n.t(null, void 0, i(2635)),
        B = n.t(null, void 0, i(56119)),
        z = n.t(null, void 0, i(95264)),
        N = n.t(null, void 0, i(27531)),
        R = n.t(null, void 0, i(63833)),
        G = n.t(null, void 0, i(85160)),
        E = n.t(null, void 0, i(75675)),
        O = n.t(null, void 0, i(5066)),
        U = n.t(null, void 0, i(76655));

    function F(e) {
      return [{
        value: c.RiskDisplayMode.Percentage,
        title: O
      }, {
        value: c.RiskDisplayMode.Money,
        title: e || U
      }];
    }

    var I =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi10) {
      _inherits(I, _s$LineDataSourceDefi10);

      function I(e, t) {
        var _this2;

        _classCallCheck(this, I);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(I).call(this, e, t));

        var i = _this2._source.properties().childs(),
            n = i.riskDisplayMode.value();

        _this2._riskMaxWV = new d.WatchedValue(_this2._getRiskMax(n)), _this2._riskStepWV = new d.WatchedValue(_this2._getRiskStep(n)), _this2._riskPrecisionWV = new d.WatchedValue(_this2._getRiskPrecision(n)), _this2._riskUnitWV = new d.WatchedValue(_this2._getRiskUnit()), _this2._riskUnitOptionsWV = new d.WatchedValue(_this2._getRiskUnitOptions()), _this2._lotSizeStepWV = new d.WatchedValue(_this2._getLotSizeStep()), _this2._createPropertyRages(), i.riskDisplayMode.subscribe(_assertThisInitialized(_this2), function (e) {
          return _this2._onRiskDisplayChanged(e);
        }), i.accountSize.subscribe(_assertThisInitialized(_this2), function () {
          return _this2._onAccountSizeChanged();
        }), i.lotSize.subscribe(_assertThisInitialized(_this2), function () {
          return _this2._onLotSizeChanged();
        }), _this2._undoModel.model().mainSeries().dataEvents().symbolResolved().subscribe(_assertThisInitialized(_this2), _this2._onSymbolInfoChanged);
        return _this2;
      }

      _createClass(I, [{
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(I.prototype), "destroy", this).call(this);

          var e = this._source.properties().childs();

          e.riskDisplayMode.unsubscribeAll(this), e.accountSize.unsubscribeAll(this), e.lotSize.unsubscribeAll(this), this._undoModel.model().mainSeries().dataEvents().symbolResolved().unsubscribeAll(this);
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, p.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth
            }, n, "Line", {
              line: C
            }), (0, a.createColorPropertyDefinition)({
              color: (0, a.getColorDefinitionProperty)(this._propertyApplier, e.stopBackground, e.stopBackgroundTransparency, u.format({
                title: n
              }))
            }, {
              id: "".concat(i, "StopColor"),
              title: L
            }), (0, a.createColorPropertyDefinition)({
              color: (0, a.getColorDefinitionProperty)(this._propertyApplier, e.profitBackground, e.profitBackgroundTransparency, h.format({
                title: n
              }))
            }, {
              id: "".concat(i, "ProfitColor"),
              title: x
            }), (0, l.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.textcolor,
              fontSize: e.fontsize
            }, n, {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: k
              }
            }), (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.showPriceLabels, y.format({
                title: n
              }))
            }, {
              id: "".concat(i, "ShowPriceLabels"),
              title: E
            }), (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.compact, f.format({
                title: n
              }))
            }, {
              id: "".concat(i, "CompactMode"),
              title: A
            }), (0, a.createCheckablePropertyDefinition)({
              checked: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.alwaysShowStats, v.format({
                title: n
              }))
            }, {
              id: "".concat(i, "AlwaysShowStats"),
              title: G
            })]
          };
        }
      }, {
        key: "_inputsPropertyDefinitions",
        value: function _inputsPropertyDefinitions() {
          var _this3 = this;

          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = (0, p.removeSpaces)(t),
              n = new o.TranslatedString(t, this._source.translatedType()),
              r = this._getYCoordinateStepWV(),
              l = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.accountSize, g.format({
              title: n
            }))
          }, {
            id: "".concat(i, "AccountSize"),
            title: z,
            type: 1,
            min: new d.WatchedValue(1e-9),
            max: new d.WatchedValue(1e9),
            step: new d.WatchedValue(1),
            unit: this._riskUnitWV
          }),
              s = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.lotSize, T.format({
              title: n
            }))
          }, {
            id: "".concat(i, "LotSize"),
            title: N,
            type: 1,
            min: new d.WatchedValue(1e-9),
            max: new d.WatchedValue(1e8),
            step: this._lotSizeStepWV
          }),
              c = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.risk, D.format({
              title: n
            }), [function (e) {
              return parseFloat(e);
            }]),
            unitOptionsValue: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.riskDisplayMode, w.format({
              title: n
            }))
          }, {
            id: "".concat(i, "Risk"),
            title: R,
            type: 1,
            min: new d.WatchedValue(1e-9),
            max: this._riskMaxWV,
            precision: this._riskPrecisionWV,
            step: this._riskStepWV,
            unitOptions: this._riskUnitOptionsWV
          }),
              u = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.entryPrice, _.format({
              title: n
            }))
          }, {
            id: "".concat(i, "EntryPrice"),
            title: M,
            type: 1,
            step: r
          }),
              h = (0, a.createPropertyDefinitionsGeneralGroup)([l, s, c, u], "".concat(i, "AccountRisk")),
              y = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.profitLevel, P.format({
              title: n
            }))
          }, {
            id: "".concat(i, "ProfitLevelTicks"),
            title: V,
            type: 0,
            min: new d.WatchedValue(0),
            max: new d.WatchedValue(1e9),
            step: new d.WatchedValue(1)
          }),
              f = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.targetPrice, S.format({
              title: n
            }), [function (e) {
              return e;
            }, function (e) {
              return _this3._source.prepareProfitPrice(e);
            }])
          }, {
            id: "".concat(i, "ProfitLevelPrice"),
            title: $,
            type: 1,
            step: r
          }),
              v = (0, a.createPropertyDefinitionsGeneralGroup)([y, f], "".concat(i, "ProfitLevel"), W),
              C = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.stopLevel, m.format({
              title: n
            }))
          }, {
            id: "".concat(i, "StopLevelTicks"),
            title: V,
            type: 0,
            min: new d.WatchedValue(0),
            max: new d.WatchedValue(1e9),
            step: new d.WatchedValue(1)
          }),
              L = (0, a.createNumberPropertyDefinition)({
            value: (0, a.convertToDefinitionProperty)(this._propertyApplier, e.stopPrice, b.format({
              title: n
            }), [function (e) {
              return e;
            }, function (e) {
              return _this3._source.prepareStopPrice(e);
            }])
          }, {
            id: "".concat(i, "StopLevelPrice"),
            title: $,
            type: 1,
            step: r
          });

          return {
            definitions: [h, v, (0, a.createPropertyDefinitionsGeneralGroup)([C, L], "".concat(i, "StopLevel"), B)]
          };
        }
      }, {
        key: "_onRiskDisplayChanged",
        value: function _onRiskDisplayChanged(e) {
          var t = e.value();
          this._riskMaxWV.setValue(this._getRiskMax(t)), this._riskStepWV.setValue(this._getRiskStep(t)), this._riskPrecisionWV.setValue(this._getRiskPrecision(t));
        }
      }, {
        key: "_onAccountSizeChanged",
        value: function _onAccountSizeChanged() {
          this._riskMaxWV.setValue(this._getRiskMax(this._source.properties().childs().riskDisplayMode.value()));
        }
      }, {
        key: "_onLotSizeChanged",
        value: function _onLotSizeChanged() {
          this._lotSizeStepWV.setValue(this._getLotSizeStep());
        }
      }, {
        key: "_onSymbolInfoChanged",
        value: function _onSymbolInfoChanged() {
          this._riskUnitWV.setValue(this._getRiskUnit()), this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions());
        }
      }, {
        key: "_getRiskMax",
        value: function _getRiskMax(e) {
          return e === c.RiskDisplayMode.Percentage ? 100 : this._source.properties().childs().accountSize.value();
        }
      }, {
        key: "_getRiskStep",
        value: function _getRiskStep(e) {
          return e === c.RiskDisplayMode.Percentage ? .01 : 1;
        }
      }, {
        key: "_getRiskPrecision",
        value: function _getRiskPrecision(e) {
          if (e === c.RiskDisplayMode.Percentage) return 2;
        }
      }, {
        key: "_getLotSizeStep",
        value: function _getLotSizeStep() {
          var e = this._source.properties().childs().lotSize.value();

          if (e % 1 == 0) return 1;
          var t = e.toString(),
              i = t.split(".");
          if (2 === i.length) return Number("1e-".concat(i[1].length));
          {
            var _e10 = /\d+e-(\d+)/.exec(t);

            if (null !== _e10) return Number("1e-".concat(_e10[1]));
          }
          return this._lotSizeStepWV.value();
        }
      }, {
        key: "_getRiskUnit",
        value: function _getRiskUnit() {
          var e = this._undoModel.model().mainSeries().symbolInfo();

          return null !== e && e.currency_code || "";
        }
      }, {
        key: "_getRiskUnitOptions",
        value: function _getRiskUnitOptions() {
          var e = this._undoModel.model().mainSeries().symbolInfo();

          return null !== e ? F(e.currency_code) : F();
        }
      }]);

      return I;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  18613: function _(e, t, i) {
    i.r(t), i.d(t, {
      SignpostDefinitionsViewModel: function SignpostDefinitionsViewModel() {
        return g;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(94474),
        l = i(97145),
        s = i(46141),
        a = i(50653),
        c = i(41339),
        d = i(85766);
    var p = new o.TranslatedString("change vertical position Y coordinate", n.t(null, void 0, i(11049))),
        u = new o.TranslatedString("change {title} emoji visibility", n.t(null, void 0, i(65899))),
        h = new o.TranslatedString("change {title} image background color", n.t(null, void 0, i(48983))),
        y = new o.TranslatedString("change {title} emoji", n.t(null, void 0, i(65056))),
        f = n.t(null, {
      context: "linetool point"
    }, i(92195)),
        v = n.t(null, void 0, i(46211));

    var g =
    /*#__PURE__*/
    function (_d$LineDataSourceDefi) {
      _inherits(g, _d$LineDataSourceDefi);

      function g() {
        _classCallCheck(this, g);

        return _possibleConstructorReturn(this, _getPrototypeOf(g).apply(this, arguments));
      }

      _createClass(g, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, a.createTextStyleDefinition)(this._propertyApplier, {
              text: e.text,
              fontSize: e.fontSize,
              bold: e.bold,
              italic: e.italic
            }, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0
            })]
          };
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var e = this._source.pointsProperty().childs().points[0].childs(),
              t = this._source.name(),
              i = (0, c.getCoordinateXMetaInfo)(this._propertyApplier, e),
              n = {
            property: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.price, p),
            info: {
              typeY: 1,
              stepY: new l.WatchedValue(1),
              minY: new l.WatchedValue(-100),
              maxY: new l.WatchedValue(100)
            }
          };

          return {
            definitions: [(0, s.createCoordinatesPropertyDefinition)({
              x: i.property,
              y: n.property
            }, _objectSpread({
              id: (0, r.removeSpaces)("".concat(t, "Coordinates").concat(f)),
              title: f
            }, i.info, {}, n.info))]
          };
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, s.createEmojiPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.showImage, u.format({
                title: i
              })),
              backgroundColor: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.plateColor, null, h.format({
                title: i
              })),
              emoji: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.emoji, y.format({
                title: i
              }))
            }, {
              id: (0, r.removeSpaces)("".concat(t, "Emoji").concat(v)),
              title: v
            })]
          };
        }
      }]);

      return g;
    }(d.LineDataSourceDefinitionsViewModel);
  },
  94625: function _(e, t, i) {
    i.r(t), i.d(t, {
      TextDefinitionsViewModel: function TextDefinitionsViewModel() {
        return l;
      }
    });
    var n = i(50653),
        o = i(85766),
        r = i(36298);

    var l =
    /*#__PURE__*/
    function (_o$LineDataSourceDefi3) {
      _inherits(l, _o$LineDataSourceDefi3);

      function l() {
        _classCallCheck(this, l);

        return _possibleConstructorReturn(this, _getPrototypeOf(l).apply(this, arguments));
      }

      _createClass(l, [{
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, n.createTextStyleDefinition)(this._propertyApplier, {
              textColor: e.color,
              fontSize: e.fontsize,
              bold: e.bold,
              italic: e.italic,
              text: e.text,
              backgroundVisible: e.fillBackground,
              backgroundColor: e.backgroundColor,
              backgroundTransparency: e.backgroundTransparency,
              borderVisible: e.drawBorder,
              borderColor: e.borderColor,
              wrap: e.wordWrap
            }, new r.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0
            })]
          };
        }
      }]);

      return l;
    }(o.LineDataSourceDefinitionsViewModel);
  },
  81888: function _(e, t, i) {
    i.r(t), i.d(t, {
      TimeCyclesPatternDefinitionsViewModel: function TimeCyclesPatternDefinitionsViewModel() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474);
    var c = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        d = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        p = n.t(null, void 0, i(1277)),
        u = n.t(null, void 0, i(27331));

    var h =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi18) {
      _inherits(h, _l$LineDataSourceDefi18);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs(),
              t = this._source.name(),
              i = new o.TranslatedString(t, this._source.translatedType());

          return {
            definitions: [(0, r.createLineStyleDefinition)(this._propertyApplier, {
              lineColor: e.linecolor,
              lineWidth: e.linewidth,
              lineStyle: e.linestyle
            }, i, "Line", {
              line: p
            }), (0, s.createColorPropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, e.fillBackground, c.format({
                title: i
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, e.backgroundColor, e.transparency, d.format({
                title: i
              }))
            }, {
              id: (0, a.removeSpaces)("".concat(t, "BackgroundColor")),
              title: u
            })]
          };
        }
      }]);

      return h;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  34935: function _(e, t, i) {
    i.r(t), i.d(t, {
      TrendAngleDefinitionsViewModel: function TrendAngleDefinitionsViewModel() {
        return y;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(97145),
        a = i(41339),
        c = i(75611);
    var d = new o.TranslatedString("change angle", n.t(null, void 0, i(1670))),
        p = n.t(null, void 0, i(36150)),
        u = n.t(null, void 0, i(37229)),
        h = n.t(null, {
      context: "linetool point"
    }, i(12706));

    var y =
    /*#__PURE__*/
    function (_l$LineDataSourceDefi19) {
      _inherits(y, _l$LineDataSourceDefi19);

      function y() {
        _classCallCheck(this, y);

        return _possibleConstructorReturn(this, _getPrototypeOf(y).apply(this, arguments));
      }

      _createClass(y, [{
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var e = this._source.points(),
              t = [],
              i = this._source.pointsProperty().childs().points[0].childs(),
              n = this._getYCoordinateStepWV();

          t.push((0, a.getCoordinatesPropertiesDefinitions)(this._propertyApplier, i, e[0], n, h, this._source.name()));
          var o = (0, r.createNumberPropertyDefinition)({
            value: (0, r.convertToDefinitionProperty)(this._propertyApplier, this._source.properties().childs().angle, d)
          }, {
            id: "TrendLineAngleCoordinate",
            title: p,
            min: new s.WatchedValue(-360),
            max: new s.WatchedValue(360),
            step: new s.WatchedValue(1)
          });
          return t.push(o), {
            definitions: t
          };
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, c.getTrendLineToolsStylePropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()), {
            text: u
          });
        }
      }]);

      return y;
    }(l.LineDataSourceDefinitionsViewModel);
  },
  60007: function _(e, t, i) {
    i.r(t), i.d(t, {
      TrendBasedFibTimeDefinitionsViewModel: function TrendBasedFibTimeDefinitionsViewModel() {
        return L;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(18505),
        d = i(97145),
        p = i(94474),
        u = i(69152);

    var h = new r.TranslatedString("change {title} level {index} line visibility", o.t(null, void 0, i(45463))),
        y = new r.TranslatedString("change {title} level {index} line color", o.t(null, void 0, i(85551))),
        f = new r.TranslatedString("change {title} level {index} line width", o.t(null, void 0, i(90098))),
        v = new r.TranslatedString("change {title} level {index} line style", o.t(null, void 0, i(47840))),
        g = new r.TranslatedString("change {title} level {index} line coeff", o.t(null, void 0, i(32891))),
        T = new r.TranslatedString("change {title} all lines color", o.t(null, void 0, i(15521))),
        D = new r.TranslatedString("change {title} background visibility", o.t(null, void 0, i(64548))),
        w = new r.TranslatedString("change {title} background transparency", o.t(null, void 0, i(36438))),
        _ = new r.TranslatedString("change {title} labels visibility", o.t(null, void 0, i(24338))),
        P = new r.TranslatedString("change {title} labels alignment", o.t(null, void 0, i(81170))),
        S = o.t(null, void 0, i(4372)),
        m = o.t(null, void 0, i(12374)),
        b = o.t(null, void 0, i(27331)),
        C = o.t(null, void 0, i(94420));

    var L =
    /*#__PURE__*/
    function (_a$LineDataSourceDefi7) {
      _inherits(L, _a$LineDataSourceDefi7);

      function L() {
        _classCallCheck(this, L);

        return _possibleConstructorReturn(this, _getPrototypeOf(L).apply(this, arguments));
      }

      _createClass(L, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = [],
              t = this._source.properties(),
              i = t.childs(),
              o = this._source.name(),
              a = (0, p.removeSpaces)(o),
              L = new r.TranslatedString(o, this._source.translatedType()),
              x = i.trendline.childs(),
              k = (0, l.createLineStyleDefinition)(this._propertyApplier, {
            showLine: x.visible,
            lineColor: x.color,
            lineStyle: x.linestyle,
            lineWidth: x.linewidth
          }, L, "TrendLine", {
            line: S
          });

          e.push(k);

          var A = this._source.levelsCount();

          for (var _i20 = 1; _i20 <= A; _i20++) {
            var _o5 = (0, n.ensureDefined)(t.child("level".concat(_i20))).childs(),
                _r13 = (0, s.createLeveledLinePropertyDefinition)({
              checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, _o5.visible, h.format({
                title: L,
                index: _i20
              })),
              color: (0, s.getColorDefinitionProperty)(this._propertyApplier, _o5.color, null, y.format({
                title: L,
                index: _i20
              })),
              width: (0, s.convertToDefinitionProperty)(this._propertyApplier, _o5.linewidth, f.format({
                title: L,
                index: _i20
              })),
              style: (0, s.convertToDefinitionProperty)(this._propertyApplier, _o5.linestyle, v.format({
                title: L,
                index: _i20
              })),
              level: (0, s.convertToDefinitionProperty)(this._propertyApplier, _o5.coeff, g.format({
                title: L,
                index: _i20
              }))
            }, {
              id: "".concat(a, "LineLevel").concat(_i20)
            });

            e.push(_r13);
          }

          var V = (0, s.createColorPropertyDefinition)({
            color: (0, s.getColorDefinitionProperty)(this._propertyApplier, new u.CollectibleColorPropertyUndoWrapper((0, n.ensureNotNull)(this._source.lineColorsProperty()), this._propertyApplier, null), null, T.format({
              title: L
            }), !0)
          }, {
            id: "".concat(a, "AllLineColor"),
            title: m
          });
          e.push(V);
          var $ = (0, s.createTransparencyPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, i.fillBackground, D.format({
              title: L
            })),
            transparency: (0, s.convertToDefinitionProperty)(this._propertyApplier, i.transparency, w.format({
              title: L
            }))
          }, {
            id: "".concat(a, "Background"),
            title: b
          });
          e.push($);
          var M = (0, s.createTwoOptionsPropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._propertyApplier, i.showCoeffs, _.format({
              title: L
            })),
            option1: (0, s.convertToDefinitionProperty)(this._propertyApplier, i.horzLabelsAlign, P.format({
              title: L
            })),
            option2: (0, s.convertToDefinitionProperty)(this._propertyApplier, i.vertLabelsAlign, P.format({
              title: L
            }))
          }, {
            id: "".concat(a, "Labels"),
            title: C,
            optionsItems1: new d.WatchedValue(c.availableAlignmentHorizontalItems),
            optionsItems2: new d.WatchedValue(c.availableAlignmentVerticalItems)
          });
          return e.push(M), {
            definitions: e
          };
        }
      }]);

      return L;
    }(a.LineDataSourceDefinitionsViewModel);
  },
  84926: function _(e, t, i) {
    i.r(t), i.d(t, {
      TrendLineDefinitionsViewModel: function TrendLineDefinitionsViewModel() {
        return c;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(75611),
        s = i(50653);
    var a = n.t(null, void 0, i(37229));

    var c =
    /*#__PURE__*/
    function (_r$LineDataSourceDefi7) {
      _inherits(c, _r$LineDataSourceDefi7);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments));
      }

      _createClass(c, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, l.getTrendLineToolsStylePropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()));
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, s.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.showLabel,
              textColor: e.textcolor,
              fontSize: e.fontsize
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: a
              }
            })]
          };
        }
      }]);

      return c;
    }(r.LineDataSourceDefinitionsViewModel);
  },
  71472: function _(e, t, i) {
    i.r(t), i.d(t, {
      VerticalLineDefinitionsViewModel: function VerticalLineDefinitionsViewModel() {
        return h;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(41339),
        s = i(86778),
        a = i(94474),
        c = i(85766),
        d = i(50653);
    var p = n.t(null, void 0, i(37229)),
        u = n.t(null, {
      context: "linetool point"
    }, i(91282));

    var h =
    /*#__PURE__*/
    function (_c$LineDataSourceDefi) {
      _inherits(h, _c$LineDataSourceDefi);

      function h() {
        _classCallCheck(this, h);

        return _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments));
      }

      _createClass(h, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs();

          return (0, s.getLinesStylesPropertiesDefinitions)(this._propertyApplier, e, new o.TranslatedString(this._source.name(), this._source.translatedType()));
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var e = this._source.pointsProperty().childs().points[0].childs(),
              t = (0, l.getCoordinateXMetaInfo)(this._propertyApplier, e);

          return {
            definitions: [(0, r.createCoordinatesPropertyDefinition)({
              x: t.property
            }, _objectSpread({
              id: (0, a.removeSpaces)("".concat(this._source.name(), "Point1")),
              title: u
            }, t.info))]
          };
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          var e = this._source.properties().childs();

          return {
            definitions: [(0, d.createTextStyleDefinition)(this._propertyApplier, _objectSpread({}, e, {
              showText: e.showLabel,
              textColor: e.textcolor,
              fontSize: e.fontsize,
              textOrientation: e.textOrientation
            }), new o.TranslatedString(this._source.name(), this._source.translatedType()), {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: {
                text: p
              }
            })]
          };
        }
      }]);

      return h;
    }(c.LineDataSourceDefinitionsViewModel);
  },
  59973: function _(e, t, i) {
    i.r(t), i.d(t, {
      AnchoredVWAPDefinitionsViewModel: function AnchoredVWAPDefinitionsViewModel() {
        return U;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = (i(42053), i(46141)),
        l = i(56059),
        s = i(94474),
        a = i(99970);

    var c = new o.TranslatedString("change {title} VWAP line color", n.t(null, void 0, i(98057))),
        d = new o.TranslatedString("change {title} VWAP line width", n.t(null, void 0, i(55218))),
        p = new o.TranslatedString("change {title} lower band #1 line visibility", n.t(null, void 0, i(78425))),
        u = new o.TranslatedString("change {title} lower band #1 line color", n.t(null, void 0, i(13901))),
        h = new o.TranslatedString("change {title} lower band #1 line width", n.t(null, void 0, i(99491))),
        y = new o.TranslatedString("change {title} upper band #1 line visibility", n.t(null, void 0, i(58722))),
        f = new o.TranslatedString("change {title} upper band #1 line color", n.t(null, void 0, i(10417))),
        v = new o.TranslatedString("change {title} upper band #1 line width", n.t(null, void 0, i(13633))),
        g = new o.TranslatedString("change {title} lower band #2 line visibility", n.t(null, void 0, i(76157))),
        T = new o.TranslatedString("change {title} lower band #2 line color", n.t(null, void 0, i(55469))),
        D = new o.TranslatedString("change {title} lower band #2 line width", n.t(null, void 0, i(8081))),
        w = new o.TranslatedString("change {title} upper band #2 line visibility", n.t(null, void 0, i(97847))),
        _ = new o.TranslatedString("change {title} upper band #2 line color", n.t(null, void 0, i(64709))),
        P = new o.TranslatedString("change {title} upper band #2 line width", n.t(null, void 0, i(62921))),
        S = new o.TranslatedString("change {title} lower band #3 line visibility", n.t(null, void 0, i(84928))),
        m = new o.TranslatedString("change {title} lower band #3 line color", n.t(null, void 0, i(95016))),
        b = new o.TranslatedString("change {title} lower band #3 line width", n.t(null, void 0, i(44693))),
        C = new o.TranslatedString("change {title} upper band #3 line visibility", n.t(null, void 0, i(19835))),
        L = new o.TranslatedString("change {title} upper band #3 line color", n.t(null, void 0, i(94153))),
        x = new o.TranslatedString("change {title} upper band #3 line width", n.t(null, void 0, i(68310))),
        k = new o.TranslatedString("change {title} background visibility", n.t(null, void 0, i(64548))),
        A = new o.TranslatedString("change {title} background color", n.t(null, void 0, i(75312))),
        V = new o.TranslatedString("change {title} price visibility", n.t(null, void 0, i(94028))),
        $ = n.t(null, void 0, i(53473)),
        M = n.t(null, void 0, i(99180)),
        W = n.t(null, void 0, i(26775)),
        B = n.t(null, void 0, i(53861)),
        z = n.t(null, void 0, i(21774)),
        N = n.t(null, void 0, i(44775)),
        R = n.t(null, void 0, i(21076)),
        G = n.t(null, void 0, i(66282)),
        E = n.t(null, void 0, i(23675));

    function O(e, t, i, n, o, l, s, c, d) {
      return (0, r.createLinePropertyDefinition)({
        checked: (0, r.convertToDefinitionProperty)(e, new a.StudyPlotVisibleProperty(t.display), i.format({
          title: d
        })),
        color: (0, r.getColorDefinitionProperty)(e, t.color, t.transparency, n.format({
          title: d
        })),
        width: (0, r.convertToDefinitionProperty)(e, t.linewidth, o.format({
          title: d
        }))
      }, {
        id: "".concat(c).concat(s),
        title: l
      });
    }

    var U =
    /*#__PURE__*/
    function (_l$StudyLineDataSourc) {
      _inherits(U, _l$StudyLineDataSourc);

      function U(e, t) {
        _classCallCheck(this, U);

        return _possibleConstructorReturn(this, _getPrototypeOf(U).call(this, e, t));
      }

      _createClass(U, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e, t, i, n, l, a;

          var U = this._source.properties().childs(),
              F = this._source.name(),
              I = (0, s.removeSpaces)(F),
              H = new o.TranslatedString(F, this._source.translatedType()),
              j = U.styles.childs().VWAP.childs(),
              Y = [(0, r.createLinePropertyDefinition)({
            color: (0, r.getColorDefinitionProperty)(this._propertyApplier, j.color, j.transparency, c.format({
              title: H
            })),
            width: (0, r.convertToDefinitionProperty)(this._propertyApplier, j.linewidth, d.format({
              title: H
            }))
          }, {
            id: "".concat(I, "VWAPLine"),
            title: $
          })],
              X = this._source.metaInfo();

          if ((null === (e = X.styles) || void 0 === e ? void 0 : e.UpperBand) && (null === (t = X.styles) || void 0 === t ? void 0 : t.LowerBand)) {
            var _e11 = U.styles.childs().LowerBand.childs(),
                _t4 = O(this._propertyApplier, _e11, p, u, h, M, "LowerBandLine", I, H),
                _i21 = U.styles.childs().UpperBand.childs(),
                _n18 = O(this._propertyApplier, _i21, y, f, v, W, "UpperBandLine", I, H);

            Y.push(_t4, _n18);
          }

          if (null == X ? void 0 : X.area) {
            var _e12 = U.areaBackground.childs(),
                _t5 = (0, r.createLinePropertyDefinition)({
              checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, _e12.fillBackground, k.format({
                title: H
              })),
              color: (0, r.getColorDefinitionProperty)(this._propertyApplier, _e12.backgroundColor, _e12.transparency, A.format({
                title: H
              }))
            }, {
              id: "".concat(I, "Background"),
              title: G
            });

            Y.push(_t5);
          }

          if ((null === (i = X.styles) || void 0 === i ? void 0 : i.UpperBand_2) && (null === (n = X.styles) || void 0 === n ? void 0 : n.LowerBand_2) && (null === (l = X.styles) || void 0 === l ? void 0 : l.UpperBand_3) && (null === (a = X.styles) || void 0 === a ? void 0 : a.LowerBand_3)) {
            var _e13 = U.styles.childs().LowerBand_2.childs(),
                _t6 = O(this._propertyApplier, _e13, g, T, D, B, "LowerBand2Line", I, H),
                _i22 = U.styles.childs().UpperBand_2.childs(),
                _n19 = O(this._propertyApplier, _i22, w, _, P, z, "UpperBand2Line", I, H),
                _o6 = U.styles.childs().LowerBand_3.childs(),
                _r14 = O(this._propertyApplier, _o6, S, m, b, N, "LowerBand3Line", I, H),
                _l = U.styles.childs().UpperBand_3.childs(),
                _s = O(this._propertyApplier, _l, C, L, x, R, "UpperBand3Line", I, H);

            Y.push(_t6, _n19, _r14, _s);
          }

          var q = (0, r.createCheckablePropertyDefinition)({
            checked: (0, r.convertToDefinitionProperty)(this._propertyApplier, U.axisLabelVisible, V.format({
              title: H
            }))
          }, {
            id: "".concat(I, "ShowPrice"),
            title: E
          });
          return Y.push(q), {
            definitions: Y
          };
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          return null;
        }
      }]);

      return U;
    }(l.StudyLineDataSourceDefinitionsViewModel);
  },
  69152: function _(e, t, i) {
    i.d(t, {
      CollectibleColorPropertyDirectWrapper: function CollectibleColorPropertyDirectWrapper() {
        return a;
      },
      CollectibleColorPropertyUndoWrapper: function CollectibleColorPropertyUndoWrapper() {
        return s;
      }
    });
    var n = i(50151),
        o = i(59452),
        r = i.n(o);

    var l =
    /*#__PURE__*/
    function (_r15) {
      _inherits(l, _r15);

      function l(e) {
        var _this4;

        _classCallCheck(this, l);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this)), _this4._listenersMappers = [], _this4._isProcess = !1, _this4._baseProperty = e;
        return _this4;
      }

      _createClass(l, [{
        key: "destroy",
        value: function destroy() {
          this._baseProperty.destroy(), _get(_getPrototypeOf(l.prototype), "destroy", this).call(this);
        }
      }, {
        key: "value",
        value: function value() {
          var e = this._baseProperty.value();

          return "mixed" === e ? "" : e;
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._baseProperty.visible();
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          var _this5 = this;

          this._isProcess = !0, this._baseProperty.setValue("" === e ? "mixed" : e, void 0, {
            applyValue: this._applyValue.bind(this)
          }), this._isProcess = !1, this._listenersMappers.forEach(function (e) {
            e.method.call(e.obj, _this5);
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(e, t) {
          var _this6 = this;

          var i = function i(_i23) {
            _this6._isProcess || t.call(e, _this6);
          },
              n = {
            obj: e,
            method: t,
            callback: i
          };

          this._listenersMappers.push(n), this._baseProperty.subscribe(e, i);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, t) {
          var i;
          var o = (0, n.ensureDefined)(null === (i = this._listenersMappers.find(function (i) {
            return i.obj === e && i.method === t;
          })) || void 0 === i ? void 0 : i.callback);

          this._baseProperty.unsubscribe(e, o);
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e);
        }
      }]);

      return l;
    }(r());

    var s =
    /*#__PURE__*/
    function (_l2) {
      _inherits(s, _l2);

      function s(e, t, i) {
        var _this7;

        _classCallCheck(this, s);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this7._propertyApplier = t, _this7._undoText = i;
        return _this7;
      }

      _createClass(s, [{
        key: "_applyValue",
        value: function _applyValue(e, t) {
          this._propertyApplier.setProperty(e, t, this._undoText);
        }
      }]);

      return s;
    }(l);

    var a =
    /*#__PURE__*/
    function (_l3) {
      _inherits(a, _l3);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).apply(this, arguments));
      }

      _createClass(a, [{
        key: "_applyValue",
        value: function _applyValue(e, t) {
          e.setValue(t);
        }
      }]);

      return a;
    }(l);
  }
}]);