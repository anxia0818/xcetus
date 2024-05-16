"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8167], {
  41339: function _(e, t, i) {
    i.r(t), i.d(t, {
      getCoordinateXMetaInfo: function getCoordinateXMetaInfo() {
        return g;
      },
      getCoordinateYMetaInfo: function getCoordinateYMetaInfo() {
        return f;
      },
      getCoordinatesPropertiesDefinitions: function getCoordinatesPropertiesDefinitions() {
        return w;
      },
      getSelectionCoordinatesPropertyDefinition: function getSelectionCoordinatesPropertyDefinition() {
        return b;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        s = i(62591);

    var l =
    /*#__PURE__*/
    function (_s$UndoCommand) {
      _inherits(l, _s$UndoCommand);

      function l(_ref) {
        var _this;

        var e = _ref.lineToolId,
            t = _ref.chartModel,
            i = _ref.newPositionPoints;

        _classCallCheck(this, l);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, null)), _this._pointState = null, _this._lineToolId = e, _this._model = t, _this._newPositionPoints = i;
        return _this;
      }

      _createClass(l, [{
        key: "redo",
        value: function redo() {
          var e = (0, n.ensureNotNull)(this._model.dataSourceForId(this._lineToolId));
          this._pointState = [e.normalizedPoints(), e.points()], e.startChanging(), e.moveLineTool(this._newPositionPoints), this._model.updateSource(e), e.syncMultichartState(e.endChanging(!0, !1));
        }
      }, {
        key: "undo",
        value: function undo() {
          if (this._pointState) {
            var _e = (0, n.ensureNotNull)(this._model.dataSourceForId(this._lineToolId));

            _e.startChanging(), _e.restorePoints.apply(_e, _toConsumableArray(this._pointState)), this._model.updateSource(_e), _e.syncMultichartState(_e.endChanging(!0, !1));
          }
        }
      }]);

      return l;
    }(s.UndoCommand);

    var a = i(46141),
        d = i(97145),
        c = i(59452),
        p = i.n(c),
        u = i(94474);
    var h = new r.TranslatedString("change price Y coordinate", o.t(null, void 0, i(66266))),
        y = new r.TranslatedString("change bar X coordinate", o.t(null, void 0, i(23723))),
        P = new r.TranslatedString("move drawings", o.t(null, void 0, i(72223)));

    function f(e, t, i) {
      return {
        property: (0, a.convertToDefinitionProperty)(e, t.price, h),
        info: {
          typeY: 1,
          stepY: i
        }
      };
    }

    function g(e, t) {
      return {
        property: (0, a.convertToDefinitionProperty)(e, t.bar, y),
        info: {
          typeX: 0,
          minX: new d.WatchedValue(-5e4),
          maxX: new d.WatchedValue(15e3),
          stepX: new d.WatchedValue(1)
        }
      };
    }

    function w(e, t, i, n, o, r) {
      var s = g(e, t),
          l = f(e, t, n);
      return (0, a.createCoordinatesPropertyDefinition)({
        x: s.property,
        y: l.property
      }, _objectSpread({
        id: (0, u.removeSpaces)("".concat(r, "Coordinates").concat(o)),
        title: o
      }, s.info, {}, l.info));
    }

    var m = /^([+*\-\/]?)((?:\d*)|(?:\d+\.\d*))$/;

    function _(e, t, i) {
      var o = new (p())(""),
          r = (0, a.makeProxyDefinitionProperty)(o.weakReference());
      return r.setValue = function (r) {
        try {
          var _s = r.match(m);

          if (!_s) return;

          var _s2 = _slicedToArray(_s, 3),
              _a = _s2[1],
              _d = _s2[2];

          if (!_d.length) return;

          var _c = i(parseFloat(_d));

          if ("/" === _a && (0 === _c.price || 0 === _c.index)) return;
          t.withMacro(P, function () {
            e.forEach(function (e) {
              var i = e.points();
              var o;

              switch (_a) {
                case "":
                  {
                    var _e2 = (0, n.ensureDefined)(i[0]);

                    var _c$index = _c.index,
                        _t = _c$index === void 0 ? _e2.index : _c$index,
                        _c$price = _c.price,
                        _r = _c$price === void 0 ? _e2.price : _c$price;

                    _r -= _e2.price, _t -= _e2.index, o = i.map(function (e) {
                      return _objectSpread({}, e, {
                        index: e.index + _t,
                        price: e.price + _r
                      });
                    });
                    break;
                  }

                case "-":
                case "+":
                  {
                    var _c$index2 = _c.index,
                        _e3 = _c$index2 === void 0 ? 0 : _c$index2,
                        _c$price2 = _c.price,
                        _t2 = _c$price2 === void 0 ? 0 : _c$price2;

                    "-" === _a && (_e3 *= -1, _t2 *= -1), o = i.map(function (i) {
                      return _objectSpread({}, i, {
                        index: i.index + _e3,
                        price: i.price + _t2
                      });
                    });
                    break;
                  }

                case "*":
                  {
                    var _c$index3 = _c.index,
                        _e4 = _c$index3 === void 0 ? 1 : _c$index3,
                        _c$price3 = _c.price,
                        _t3 = _c$price3 === void 0 ? 1 : _c$price3;

                    o = i.map(function (i) {
                      return _objectSpread({}, i, {
                        index: i.index * _e4,
                        price: i.price * _t3
                      });
                    });
                    break;
                  }

                case "/":
                  {
                    var _c$index4 = _c.index,
                        _e5 = _c$index4 === void 0 ? 1 : _c$index4,
                        _c$price4 = _c.price,
                        _t4 = _c$price4 === void 0 ? 1 : _c$price4;

                    o = i.map(function (i) {
                      return _objectSpread({}, i, {
                        index: i.index / _e5,
                        price: i.price / _t4
                      });
                    });
                    break;
                  }
              }

              t.undoHistory().pushUndoCommand(new l({
                lineToolId: e.id(),
                chartModel: t.model(),
                newPositionPoints: o
              }));
            });
          });
        } finally {
          o.setValue("", !0);
        }
      }, r;
    }

    function b(e, t) {
      var n = _(e, t, function (e) {
        return {
          index: e
        };
      }),
          r = _(e, t, function (e) {
        return {
          price: e
        };
      });

      return (0, a.createSelectionCoordinatesPropertyDefinition)({
        x: n,
        y: r
      }, {
        id: "SourcesCoordinates",
        title: o.t(null, void 0, i(37067)),
        mathOperationsX: "+",
        mathOperationsY: "+/*",
        modeX: "integer",
        modeY: "float"
      });
    }
  },
  97456: function _(e, t, i) {
    i.r(t), i.d(t, {
      getIntervalsVisibilitiesPropertiesDefinitions: function getIntervalsVisibilitiesPropertiesDefinitions() {
        return ae;
      },
      getSelectionIntervalsVisibilitiesPropertiesDefinition: function getSelectionIntervalsVisibilitiesPropertiesDefinition() {
        return de;
      }
    });
    var n = i(44352),
        o = i(36298),
        r = i(14483),
        s = i(46141),
        l = i(97145),
        a = i(94025),
        d = i(68806),
        c = i(62513);

    var p = new o.TranslatedString("change {title} visibility on ticks", n.t(null, void 0, i(30810))),
        u = new o.TranslatedString("change {title} visibility on seconds", n.t(null, void 0, i(46948))),
        h = new o.TranslatedString("change {title} seconds from", n.t(null, void 0, i(2822))),
        y = new o.TranslatedString("change {title} seconds to", n.t(null, void 0, i(66161))),
        P = new o.TranslatedString("change {title} visibility on minutes", n.t(null, void 0, i(64370))),
        f = new o.TranslatedString("change {title} minutes from", n.t(null, void 0, i(15106))),
        g = new o.TranslatedString("change {title} minutes to", n.t(null, void 0, i(91633))),
        w = new o.TranslatedString("change {title} visibility on hours", n.t(null, void 0, i(68971))),
        m = new o.TranslatedString("change {title} hours from", n.t(null, void 0, i(35388))),
        _ = new o.TranslatedString("change {title} hours to", n.t(null, void 0, i(78586))),
        b = new o.TranslatedString("change {title} visibility on days", n.t(null, void 0, i(29088))),
        v = new o.TranslatedString("change {title} days from", n.t(null, void 0, i(41377))),
        S = new o.TranslatedString("change {title} days to", n.t(null, void 0, i(13355))),
        T = new o.TranslatedString("change {title} visibility on weeks", n.t(null, void 0, i(24941))),
        C = new o.TranslatedString("change {title} weeks from", n.t(null, void 0, i(21339))),
        V = new o.TranslatedString("change {title} weeks to", n.t(null, void 0, i(68643))),
        D = new o.TranslatedString("change {title} visibility on months", n.t(null, void 0, i(6659))),
        W = new o.TranslatedString("change {title} months from", n.t(null, void 0, i(59635))),
        k = new o.TranslatedString("change {title} months to", n.t(null, void 0, i(74266))),
        x = (new o.TranslatedString("change {title} visibility on ranges", n.t(null, void 0, i(29091))), n.t(null, void 0, i(30973))),
        I = n.t(null, void 0, i(71129)),
        M = n.t(null, void 0, i(28134)),
        U = n.t(null, void 0, i(63099)),
        A = n.t(null, void 0, i(22192)),
        L = n.t(null, void 0, i(21594)),
        R = n.t(null, void 0, i(95543)),
        F = (n.t(null, void 0, i(86672)), new o.TranslatedString("ticks", n.t(null, void 0, i(59523)))),
        N = new o.TranslatedString("seconds", n.t(null, void 0, i(32925))),
        Y = new o.TranslatedString("seconds from", n.t(null, void 0, i(6049))),
        E = new o.TranslatedString("seconds to", n.t(null, void 0, i(39017))),
        X = new o.TranslatedString("minutes", n.t(null, void 0, i(16465))),
        H = new o.TranslatedString("minutes from", n.t(null, void 0, i(25586))),
        $ = new o.TranslatedString("minutes to", n.t(null, void 0, i(72317))),
        j = new o.TranslatedString("hours", n.t(null, void 0, i(3143))),
        K = new o.TranslatedString("hours from", n.t(null, void 0, i(84775))),
        O = new o.TranslatedString("hours to", n.t(null, void 0, i(11255))),
        z = new o.TranslatedString("days", n.t(null, void 0, i(82211))),
        B = new o.TranslatedString("days from", n.t(null, void 0, i(14077))),
        q = new o.TranslatedString("days to", n.t(null, void 0, i(33486))),
        G = new o.TranslatedString("weeks", n.t(null, void 0, i(93016))),
        J = new o.TranslatedString("weeks from", n.t(null, void 0, i(32002))),
        Q = new o.TranslatedString("weeks to", n.t(null, void 0, i(28091))),
        Z = new o.TranslatedString("months", n.t(null, void 0, i(58964))),
        ee = new o.TranslatedString("months from", n.t(null, void 0, i(71770))),
        te = new o.TranslatedString("months to", n.t(null, void 0, i(37179))),
        ie = (new o.TranslatedString("ranges", n.t(null, void 0, i(13604))), [1, 59]),
        ne = [1, 59],
        oe = [1, 24],
        re = [1, 366],
        se = [1, 52],
        le = [1, 12];

    function ae(e, t, i) {
      var n = [];

      if (r.enabled("tick_resolution")) {
        var _o = (0, s.createCheckablePropertyDefinition)({
          checked: (0, s.convertToDefinitionProperty)(e, t.ticks, p.format({
            title: i
          }))
        }, {
          id: "IntervalsVisibilitiesTicks",
          title: x
        });

        n.push(_o);
      }

      if ((0, a.isSecondsEnabled)()) {
        var _o2 = (0, s.createRangePropertyDefinition)({
          checked: (0, s.convertToDefinitionProperty)(e, t.seconds, u.format({
            title: i
          })),
          from: (0, s.convertToDefinitionProperty)(e, t.secondsFrom, h.format({
            title: i
          })),
          to: (0, s.convertToDefinitionProperty)(e, t.secondsTo, y.format({
            title: i
          }))
        }, {
          id: "IntervalsVisibilitiesSecond",
          title: I,
          min: new l.WatchedValue(ie[0]),
          max: new l.WatchedValue(ie[1])
        });

        n.push(_o2);
      }

      var o = (0, s.createRangePropertyDefinition)({
        checked: (0, s.convertToDefinitionProperty)(e, t.minutes, P.format({
          title: i
        })),
        from: (0, s.convertToDefinitionProperty)(e, t.minutesFrom, f.format({
          title: i
        })),
        to: (0, s.convertToDefinitionProperty)(e, t.minutesTo, g.format({
          title: i
        }))
      }, {
        id: "IntervalsVisibilitiesMinutes",
        title: M,
        min: new l.WatchedValue(ne[0]),
        max: new l.WatchedValue(ne[1])
      }),
          d = (0, s.createRangePropertyDefinition)({
        checked: (0, s.convertToDefinitionProperty)(e, t.hours, w.format({
          title: i
        })),
        from: (0, s.convertToDefinitionProperty)(e, t.hoursFrom, m.format({
          title: i
        })),
        to: (0, s.convertToDefinitionProperty)(e, t.hoursTo, _.format({
          title: i
        }))
      }, {
        id: "IntervalsVisibilitiesHours",
        title: U,
        min: new l.WatchedValue(oe[0]),
        max: new l.WatchedValue(oe[1])
      }),
          c = (0, s.createRangePropertyDefinition)({
        checked: (0, s.convertToDefinitionProperty)(e, t.days, b.format({
          title: i
        })),
        from: (0, s.convertToDefinitionProperty)(e, t.daysFrom, v.format({
          title: i
        })),
        to: (0, s.convertToDefinitionProperty)(e, t.daysTo, S.format({
          title: i
        }))
      }, {
        id: "IntervalsVisibilitiesDays",
        title: A,
        min: new l.WatchedValue(re[0]),
        max: new l.WatchedValue(re[1])
      });
      n.push(o, d, c);
      var F = (0, s.createRangePropertyDefinition)({
        checked: (0, s.convertToDefinitionProperty)(e, t.weeks, T.format({
          title: i
        })),
        from: (0, s.convertToDefinitionProperty)(e, t.weeksFrom, C.format({
          title: i
        })),
        to: (0, s.convertToDefinitionProperty)(e, t.weeksTo, V.format({
          title: i
        }))
      }, {
        id: "IntervalsVisibilitiesWeeks",
        title: L,
        min: new l.WatchedValue(se[0]),
        max: new l.WatchedValue(se[1])
      }),
          N = (0, s.createRangePropertyDefinition)({
        checked: (0, s.convertToDefinitionProperty)(e, t.months, D.format({
          title: i
        })),
        from: (0, s.convertToDefinitionProperty)(e, t.monthsFrom, W.format({
          title: i
        })),
        to: (0, s.convertToDefinitionProperty)(e, t.monthsTo, k.format({
          title: i
        }))
      }, {
        id: "IntervalsVisibilitiesMonths",
        title: R,
        min: new l.WatchedValue(le[0]),
        max: new l.WatchedValue(le[1])
      });
      return n.push(F, N), {
        definitions: n
      };
    }

    function de(e, t) {
      var i = [];

      if (r.enabled("tick_resolution")) {
        var _n2 = (0, s.createCheckablePropertyDefinition)({
          checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.ticks), F, t)
        }, {
          id: "IntervalsVisibilitiesTicks",
          title: x
        });

        i.push(_n2);
      }

      if ((0, a.isSecondsEnabled)()) {
        var _n3 = (0, s.createRangePropertyDefinition)({
          checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.seconds), N, t),
          from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.secondsFrom), Y, t),
          to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.secondsTo), E, t)
        }, {
          id: "IntervalsVisibilitiesSecond",
          title: I,
          min: new l.WatchedValue(ie[0]),
          max: new l.WatchedValue(ie[1])
        });

        i.push(_n3);
      }

      var n = (0, s.createRangePropertyDefinition)({
        checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.minutes), X, t),
        from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.minutesFrom), H, t),
        to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.minutesTo), $, t)
      }, {
        id: "IntervalsVisibilitiesMinutes",
        title: M,
        min: new l.WatchedValue(ne[0]),
        max: new l.WatchedValue(ne[1])
      }),
          o = (0, s.createRangePropertyDefinition)({
        checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.hours), j, t),
        from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.hoursFrom), K, t),
        to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.hoursTo), O, t)
      }, {
        id: "IntervalsVisibilitiesHours",
        title: U,
        min: new l.WatchedValue(oe[0]),
        max: new l.WatchedValue(oe[1])
      }),
          p = (0, s.createRangePropertyDefinition)({
        checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.days), z, t),
        from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.daysFrom), B, t),
        to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.daysTo), q, t)
      }, {
        id: "IntervalsVisibilitiesDays",
        title: A,
        min: new l.WatchedValue(re[0]),
        max: new l.WatchedValue(re[1])
      });
      i.push(n, o, p);
      var u = (0, s.createRangePropertyDefinition)({
        checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.weeks), G, t),
        from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.weeksFrom), J, t),
        to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.weeksTo), Q, t)
      }, {
        id: "IntervalsVisibilitiesWeeks",
        title: L,
        min: new l.WatchedValue(se[0]),
        max: new l.WatchedValue(se[1])
      }),
          h = (0, s.createRangePropertyDefinition)({
        checked: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.months), Z, t),
        from: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.monthsFrom), ee, t),
        to: new c.CollectiblePropertyUndoWrapper(new d.LineToolCollectedProperty(e.monthsTo), te, t)
      }, {
        id: "IntervalsVisibilitiesMonths",
        title: R,
        min: new l.WatchedValue(le[0]),
        max: new l.WatchedValue(le[1])
      });
      return i.push(u, h), {
        definitions: i
      };
    }
  },
  85766: function _(e, t, i) {
    i.r(t), i.d(t, {
      LineDataSourceDefinitionsViewModel: function LineDataSourceDefinitionsViewModel() {
        return m;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        s = (i(42053), i(46141)),
        l = i(73955),
        a = i(97145),
        d = i(97456),
        c = i(41339),
        p = i(87919),
        u = i(37591);
    var h = o.t(null, void 0, i(21852)),
        y = o.t(null, void 0, i(4639)),
        P = o.t(null, void 0, i(32733)),
        f = o.t(null, void 0, i(37229)),
        g = o.t(null, void 0, i(66304)),
        w = o.t(null, {
      context: "linetool point"
    }, i(9671));

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t) {
        _classCallCheck(this, m);

        this._yCoordinateStepWV = null, this._propertyPages = [], this._source = t, this._undoModel = e, this._ownerSource = (0, n.ensureNotNull)(this._source.ownerSource()), this._propertyApplier = new p.PropertyApplierWithoutSavingChart(function () {
          return e;
        }, new a.WatchedValue(false)), this._createPropertyRages();
      }

      _createClass(m, [{
        key: "destroy",
        value: function destroy() {
          null !== this._yCoordinateStepWV && (this._source.ownerSourceChanged().unsubscribeAll(this), this._ownerSource.priceStepChanged().unsubscribeAll(this)), this._source.pointAdded().unsubscribeAll(this), this._propertyPages.forEach(function (e) {
            (0, s.destroyDefinitions)(e.definitions.value());
          });
        }
      }, {
        key: "propertyPages",
        value: function propertyPages() {
          return Promise.resolve(this._propertyPages);
        }
      }, {
        key: "_createPropertyRages",
        value: function _createPropertyRages() {
          this._propertyPages = [];

          var e = this._createInputsPropertyPage();

          null !== e && this._propertyPages.push(e);

          var t = this._createStylePropertyPage();

          null !== t && this._propertyPages.push(t);

          var i = this._createTextPropertyPage();

          if (null !== i && this._propertyPages.push(i), this._source.hasEditableCoordinates()) {
            var _e6 = this._createCoordinatesPropertyPage();

            null !== _e6 && this._propertyPages.push(_e6);
          }

          var n = this._createVisibilitiesPropertyPage();

          this._propertyPages.push(n);
        }
      }, {
        key: "_createVisibilitiesPropertyPage",
        value: function _createVisibilitiesPropertyPage() {
          var e = this._source.properties().childs().intervalsVisibilities.childs();

          return (0, l.createPropertyPage)((0, d.getIntervalsVisibilitiesPropertiesDefinitions)(this._undoModel, e, new r.TranslatedString(this._source.name(), this._source.title(u.TitleDisplayTarget.StatusLine, !0))), "visibility", h);
        }
      }, {
        key: "_createCoordinatesPropertyPage",
        value: function _createCoordinatesPropertyPage() {
          var e = this._coordinatesPropertyDefinitions();

          return null !== e ? (e.definitions.length < this._source.pointsCount() && this._source.pointAdded().subscribe(this, this._updateCoordinatesPropertyDefinitons), (0, l.createPropertyPage)(e, "coordinates", y)) : null;
        }
      }, {
        key: "_getYCoordinateStepWV",
        value: function _getYCoordinateStepWV() {
          var _this2 = this;

          return null === this._yCoordinateStepWV && (this._yCoordinateStepWV = new a.WatchedValue(function (e) {
            if (null !== e) {
              var _t5 = e.priceStep();

              if (null !== _t5) return _t5;
            }

            return 1;
          }(this._source.ownerSource())), this._ownerSource.priceStepChanged().subscribe(this, function () {
            return _this2._updateYCoordinateStep();
          }), this._source.ownerSourceChanged().subscribe(this, function () {
            _this2._ownerSource.priceStepChanged().unsubscribeAll(_this2), _this2._ownerSource = (0, n.ensureNotNull)(_this2._source.ownerSource()), _this2._ownerSource.priceStepChanged().subscribe(_this2, function () {
              return _this2._updateYCoordinateStep();
            });
          })), this._yCoordinateStepWV;
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var _this3 = this;

          var e = this._source.points(),
              t = this._source.pointsProperty().childs().points,
              i = [],
              n = this._getYCoordinateStepWV();

          return e.forEach(function (e, o) {
            var r = t[o].childs();
            r && i.push((0, c.getCoordinatesPropertiesDefinitions)(_this3._propertyApplier, r, e, n, w.format({
              count: (o + 1).toString()
            }), _this3._source.name()));
          }), {
            definitions: i
          };
        }
      }, {
        key: "_createStylePropertyPage",
        value: function _createStylePropertyPage() {
          var e = this._stylePropertyDefinitions();

          return null !== e ? (0, l.createPropertyPage)(e, "style", P) : null;
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          return null;
        }
      }, {
        key: "_createTextPropertyPage",
        value: function _createTextPropertyPage() {
          var e = this._textPropertyDefinitions();

          return null !== e ? (0, l.createPropertyPage)(e, "text", f) : null;
        }
      }, {
        key: "_textPropertyDefinitions",
        value: function _textPropertyDefinitions() {
          return null;
        }
      }, {
        key: "_createInputsPropertyPage",
        value: function _createInputsPropertyPage() {
          var e = this._inputsPropertyDefinitions();

          return null !== e ? (0, l.createPropertyPage)(e, "inputs", g) : null;
        }
      }, {
        key: "_inputsPropertyDefinitions",
        value: function _inputsPropertyDefinitions() {
          return null;
        }
      }, {
        key: "_updateYCoordinateStep",
        value: function _updateYCoordinateStep() {
          var e = this._ownerSource.priceStep();

          this._getYCoordinateStepWV().setValue(e || 1);
        }
      }, {
        key: "_updateCoordinatesPropertyDefinitons",
        value: function _updateCoordinatesPropertyDefinitons() {
          var e = this._coordinatesPropertyDefinitions();

          if (null !== e) {
            (0, n.ensureDefined)(this._propertyPages.find(function (e) {
              return "coordinates" === e.id;
            })).definitions.setValue(e.definitions), this._source.points().length === this._source.pointsCount() && this._source.pointAdded().unsubscribeAll(this);
          }
        }
      }]);

      return m;
    }();
  },
  56059: function _(e, t, i) {
    i.r(t), i.d(t, {
      StudyLineDataSourceDefinitionsViewModel: function StudyLineDataSourceDefinitionsViewModel() {
        return c;
      }
    });
    var n = i(44352),
        o = (i(42053), i(57898)),
        r = i(46141),
        s = i(85766),
        l = i(96362),
        a = i(41339),
        d = i(94474);

    var c =
    /*#__PURE__*/
    function (_s$LineDataSourceDefi) {
      _inherits(c, _s$LineDataSourceDefi);

      function c(e, t) {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, _getPrototypeOf(c).call(this, e, t));
      }

      _createClass(c, [{
        key: "_inputsPropertyDefinitions",
        value: function _inputsPropertyDefinitions() {
          return {
            definitions: [(0, r.createStudyInputsPropertyDefinition)({}, {
              id: "StudyInputs",
              inputs: new l.MetaInfoHelper(this._source.metaInfo()).getUserEditableInputs(),
              inputsTabProperty: this._source.properties(),
              model: this._undoModel,
              studyMetaInfo: this._source.metaInfo(),
              source: {
                isInputsStudy: !0,
                symbolsResolved: function symbolsResolved() {
                  return new o.Delegate();
                },
                resolvedSymbolInfoBySymbol: function resolvedSymbolInfoBySymbol(e) {
                  return null;
                }
              }
            })]
          };
        }
      }, {
        key: "_coordinatesPropertyDefinitions",
        value: function _coordinatesPropertyDefinitions() {
          var _this4 = this;

          var e = this._source.points(),
              t = this._source.pointsProperty().childs().points,
              o = [];

          return e.forEach(function (e, s) {
            var l = t[s].childs();
            if (!l) return;
            var c = (0, a.getCoordinateXMetaInfo)(_this4._propertyApplier, l);
            o.push((0, r.createCoordinatesPropertyDefinition)({
              x: c.property
            }, _objectSpread({
              id: (0, d.removeSpaces)("".concat(_this4._source.name(), "Point").concat(s)),
              title: n.t(null, {
                context: "linetool point"
              }, i(63227)).format({
                count: (s + 1).toString()
              })
            }, c.info)));
          }), {
            definitions: o
          };
        }
      }]);

      return c;
    }(s.LineDataSourceDefinitionsViewModel);
  },
  62513: function _(e, t, i) {
    i.d(t, {
      CollectiblePropertyUndoWrapper: function CollectiblePropertyUndoWrapper() {
        return d;
      }
    });
    var n = i(50151),
        o = i(44352),
        r = i(36298),
        s = i(59452),
        l = i.n(s);
    var a = new r.TranslatedString("change {propertyName} property", o.t(null, void 0, i(18567)));

    var d =
    /*#__PURE__*/
    function (_l) {
      _inherits(d, _l);

      function d(e, t, i) {
        var _this5;

        _classCallCheck(this, d);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this)), _this5._isProcess = !1, _this5._listenersMappers = [], _this5._valueApplier = {
          applyValue: function applyValue(e, t) {
            _this5._propertyApplier.setProperty(e, t, a);
          }
        }, _this5._baseProperty = e, _this5._propertyApplier = i, _this5._propertyName = t;
        return _this5;
      }

      _createClass(d, [{
        key: "destroy",
        value: function destroy() {
          this._baseProperty.destroy(), _get(_getPrototypeOf(d.prototype), "destroy", this).call(this);
        }
      }, {
        key: "value",
        value: function value() {
          return this._baseProperty.value();
        }
      }, {
        key: "setValue",
        value: function setValue(e, t) {
          var _this6 = this;

          this._propertyApplier.beginUndoMacro(a.format({
            propertyName: this._propertyName
          })), this._isProcess = !0, this._baseProperty.setValue(e, void 0, this._valueApplier), this._isProcess = !1, this._propertyApplier.endUndoMacro(), this._listenersMappers.forEach(function (e) {
            e.method.call(e.obj, _this6);
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(e, t) {
          var _this7 = this;

          var i = function i() {
            _this7._isProcess || t.call(e, _this7);
          };

          this._listenersMappers.push({
            obj: e,
            method: t,
            callback: i
          }), this._baseProperty.subscribe(e, i);
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

      return d;
    }(l());
  },
  87919: function _(e, t, i) {
    i.d(t, {
      PropertyApplierWithoutSavingChart: function PropertyApplierWithoutSavingChart() {
        return n;
      }
    });

    var n =
    /*#__PURE__*/
    function () {
      function n(e, t) {
        _classCallCheck(this, n);

        this._undoModelSupplier = e, this._featureToggle = t;
      }

      _createClass(n, [{
        key: "setProperty",
        value: function setProperty(e, t, i) {
          this._undoModelSupplier().setProperty(e, t, i, this._featureToggle.value());
        }
      }, {
        key: "beginUndoMacro",
        value: function beginUndoMacro(e) {
          return this._undoModelSupplier().beginUndoMacro(e, this._shouldWeKeepChartValidated());
        }
      }, {
        key: "endUndoMacro",
        value: function endUndoMacro() {
          this._undoModelSupplier().endUndoMacro();
        }
      }, {
        key: "setWatchedValue",
        value: function setWatchedValue(e, t, i) {
          this._undoModelSupplier().undoHistory().setWatchedValue(e, t, i, !0);
        }
      }, {
        key: "_shouldWeKeepChartValidated",
        value: function _shouldWeKeepChartValidated() {
          var e = this._undoModelSupplier().model().isAutoSaveEnabled().value();

          return this._featureToggle.value() && e;
        }
      }]);

      return n;
    }();
  },
  99970: function _(e, t, i) {
    i.d(t, {
      StudyPlotVisibleProperty: function StudyPlotVisibleProperty() {
        return r;
      }
    });
    var n = i(19782),
        o = i(57898);

    var r =
    /*#__PURE__*/
    function () {
      function r(e) {
        _classCallCheck(this, r);

        this._subscribers = new o.Delegate(), this._displayProperty = e, this._displayProperty.subscribe(this, this._displayPropertyValueChanged);
      }

      _createClass(r, [{
        key: "destroy",
        value: function destroy() {
          this._displayProperty.unsubscribe(this, this._displayPropertyValueChanged), this._subscribers.destroy();
        }
      }, {
        key: "value",
        value: function value() {
          return 0 !== this._displayProperty.value();
        }
      }, {
        key: "setValue",
        value: function setValue(e, t) {
          this._displayProperty.setValue(e ? 15 : 0);
        }
      }, {
        key: "subscribe",
        value: function subscribe(e, t) {
          this._subscribers.subscribe(e, t, !1);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, t) {
          this._subscribers.unsubscribe(e, t);
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll(e) {
          this._subscribers.unsubscribeAll(e);
        }
      }, {
        key: "storeStateIfUndefined",
        value: function storeStateIfUndefined() {
          return !1;
        }
      }, {
        key: "weakReference",
        value: function weakReference() {
          return (0, n.weakReference)(this);
        }
      }, {
        key: "ownership",
        value: function ownership() {
          return (0, n.ownership)(this);
        }
      }, {
        key: "_displayPropertyValueChanged",
        value: function _displayPropertyValueChanged() {
          this._subscribers.fire(this);
        }
      }]);

      return r;
    }();
  }
}]);