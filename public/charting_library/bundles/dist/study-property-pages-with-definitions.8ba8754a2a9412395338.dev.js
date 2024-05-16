"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[607], {
  41109: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      RegressionTrendDefinitionsViewModel: function RegressionTrendDefinitionsViewModel() {
        return T;
      }
    });
    var n = i(44352),
        a = i(36298),
        l = (i(42053), i(46141)),
        r = i(56059),
        s = i(94474),
        o = i(99970);

    var d = new a.TranslatedString("change {title} base line visibility", n.t(null, void 0, i(16688))),
        c = new a.TranslatedString("change {title} base line color", n.t(null, void 0, i(97029))),
        h = new a.TranslatedString("change {title} base line width", n.t(null, void 0, i(51676))),
        u = new a.TranslatedString("change {title} base line style", n.t(null, void 0, i(3868))),
        p = new a.TranslatedString("change {title} up line visibility", n.t(null, void 0, i(17564))),
        y = new a.TranslatedString("change {title} up line color", n.t(null, void 0, i(25253))),
        g = new a.TranslatedString("change {title} up line width", n.t(null, void 0, i(66118))),
        b = new a.TranslatedString("change {title} up line style", n.t(null, void 0, i(58003))),
        _ = new a.TranslatedString("change {title} down line visibility", n.t(null, void 0, i(23527))),
        m = new a.TranslatedString("change {title} down line color", n.t(null, void 0, i(15438))),
        v = new a.TranslatedString("change {title} down line width", n.t(null, void 0, i(44470))),
        f = new a.TranslatedString("change {title} down line style", n.t(null, void 0, i(3782))),
        w = new a.TranslatedString("change {title} extend lines", n.t(null, void 0, i(96902))),
        k = new a.TranslatedString("change {title} show pearson's r", n.t(null, void 0, i(38317))),
        S = n.t(null, void 0, i(55719)),
        P = n.t(null, void 0, i(98802)),
        z = n.t(null, void 0, i(41361)),
        I = n.t(null, void 0, i(14105)),
        D = n.t(null, void 0, i(13611));

    var T =
    /*#__PURE__*/
    function (_r$StudyLineDataSourc) {
      _inherits(T, _r$StudyLineDataSourc);

      function T(e, t) {
        _classCallCheck(this, T);

        return _possibleConstructorReturn(this, _getPrototypeOf(T).call(this, e, t));
      }

      _createClass(T, [{
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var e = this._source.properties().childs().styles.childs(),
              t = this._source.name(),
              i = (0, s.removeSpaces)(t),
              n = new a.TranslatedString(t, this._source.translatedType()),
              r = e.baseLine.childs(),
              T = (0, l.createLinePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, new o.StudyPlotVisibleProperty(r.display), d.format({
              title: n
            })),
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, r.color, e.transparency, c.format({
              title: n
            })),
            width: (0, l.convertToDefinitionProperty)(this._propertyApplier, r.linewidth, h.format({
              title: n
            })),
            style: (0, l.convertToDefinitionProperty)(this._propertyApplier, r.linestyle, u.format({
              title: n
            }))
          }, {
            id: "".concat(i, "BaseLine"),
            title: S
          }),
              L = e.upLine.childs(),
              N = (0, l.createLinePropertyDefinition)({
            checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, new o.StudyPlotVisibleProperty(L.display), p.format({
              title: n
            })),
            color: (0, l.getColorDefinitionProperty)(this._propertyApplier, L.color, e.transparency, y.format({
              title: n
            })),
            width: (0, l.convertToDefinitionProperty)(this._propertyApplier, L.linewidth, g.format({
              title: n
            })),
            style: (0, l.convertToDefinitionProperty)(this._propertyApplier, L.linestyle, b.format({
              title: n
            }))
          }, {
            id: "".concat(i, "UpLine"),
            title: P
          }),
              M = e.downLine.childs();

          return {
            definitions: [T, N, (0, l.createLinePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, new o.StudyPlotVisibleProperty(M.display), _.format({
                title: n
              })),
              color: (0, l.getColorDefinitionProperty)(this._propertyApplier, M.color, e.transparency, m.format({
                title: n
              })),
              width: (0, l.convertToDefinitionProperty)(this._propertyApplier, M.linewidth, v.format({
                title: n
              })),
              style: (0, l.convertToDefinitionProperty)(this._propertyApplier, M.linestyle, f.format({
                title: n
              }))
            }, {
              id: "".concat(i, "DownLine"),
              title: z
            }), (0, l.createCheckablePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.extendLines, w.format({
                title: n
              }))
            }, {
              id: "".concat(i, "ExtendLines"),
              title: D
            }), (0, l.createCheckablePropertyDefinition)({
              checked: (0, l.convertToDefinitionProperty)(this._propertyApplier, e.showPearsons, k.format({
                title: n
              }))
            }, {
              id: "".concat(i, "Pearsons"),
              title: I
            })]
          };
        }
      }]);

      return T;
    }(r.StudyLineDataSourceDefinitionsViewModel);
  },
  89204: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      StudyOverlayDefinitionsViewModel: function StudyOverlayDefinitionsViewModel() {
        return O;
      }
    });
    var n = i(44352),
        a = i(36298),
        l = i(14483),
        r = i(50151),
        s = (i(42053), i(46141)),
        o = i(73955),
        d = i(33703),
        c = i(97145),
        h = i(94474);
    var u = new a.TranslatedString("change {inputName} property", n.t(null, void 0, i(21547)));

    function p(e, t) {
      var i = e.id;
      return i !== d.RangeDependentStudyInputNames.FirstBar && i !== d.RangeDependentStudyInputNames.LastBar && "time" !== e.type && !e.isHidden && !(t && !e.confirm) && void 0 === e.groupId;
    }

    function y(e) {
      return e.name || (0, h.capitalizeFirstLetterInWord)(e.id.toLowerCase());
    }

    function g(e) {
      return n.t(e, {
        context: "input"
      }, i(88601));
    }

    var b = i(73986),
        _ = i(42856),
        m = i(94025),
        v = i(97456),
        f = i(37591);

    var w = n.t(null, void 0, i(32733)),
        k = n.t(null, void 0, i(66304)),
        S = n.t(null, void 0, i(21852)),
        P = ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M"].map(function (e) {
      return {
        value: e,
        title: (0, m.getTranslatedResolutionModel)(e).hint
      };
    });
    var z = i(32766),
        I = i(42960);
    var D = new a.TranslatedString("change study overlay style", n.t(null, void 0, i(5529))),
        T = new a.TranslatedString("change price line visibility", n.t(null, void 0, i(67761))),
        L = new a.TranslatedString("change study overlay min tick", n.t(null, void 0, i(70016))),
        N = n.t(null, void 0, i(16812)),
        M = n.t(null, void 0, i(63528)),
        j = n.t(null, void 0, i(61582)),
        Y = n.t(null, void 0, i(36018)),
        x = n.t(null, void 0, i(1277)),
        W = n.t(null, void 0, i(42097)),
        A = n.t(null, void 0, i(34911)),
        U = n.t(null, void 0, i(17712)),
        E = n.t(null, void 0, i(31994)),
        C = n.t(null, void 0, i(38397)),
        B = n.t(null, void 0, i(79511)),
        H = n.t(null, void 0, i(32733)),
        R = n.t(null, void 0, i(91492)),
        V = n.t(null, void 0, i(36993)),
        X = [{
      title: N,
      value: 0
    }, {
      title: M,
      value: 1
    }, {
      title: j,
      value: 9
    }, {
      title: Y,
      value: 13
    }, {
      title: x,
      value: 2
    }, {
      title: C,
      value: 14
    }, {
      title: B,
      value: 15
    }, {
      title: W,
      value: 3
    }, {
      title: A,
      value: 16
    }, {
      title: U,
      value: 10
    }];
    l.enabled("chart_style_hilo") && X.push({
      title: E,
      value: 12
    });

    var O =
    /*#__PURE__*/
    function (_ref) {
      _inherits(O, _ref);

      function O(e, t) {
        var _this;

        _classCallCheck(this, O);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(O).call(this, e, t)), _this._stylesPropertyPage = null, _this.propertyPages().then(function (e) {
          _this._stylesPropertyPage = e.filter(function (e) {
            return "style" === e.id;
          })[0];
        }), _this._source.properties().childs().style.subscribe(_assertThisInitialized(_this), function (e) {
          var t;
          null !== _this._stylesPropertyPage && ((0, s.destroyDefinitions)(_this._stylesPropertyPage.definitions.value()), _this._stylesPropertyPage.definitions.setValue(_this._stylePropertyDefinitions().definitions)), null === (t = _this._availableStylesWV) || void 0 === t || t.setValue(_this._availableStyles());
        });
        return _this;
      }

      _createClass(O, [{
        key: "destroy",
        value: function destroy() {
          this._source.properties().childs().style.unsubscribeAll(this), this._source.symbolResolved().unsubscribeAll(this), _get(_getPrototypeOf(O.prototype), "destroy", this).call(this);
        }
      }, {
        key: "_customSymbolInputSetter",
        value: function _customSymbolInputSetter() {
          var _this2 = this;

          return function (e) {
            _this2._undoModel.setSymbol(_this2._source, e);
          };
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          var _this3 = this;

          void 0 === this._availableStylesWV && (this._availableStylesWV = new c.WatchedValue(this._availableStyles()), this._source.symbolResolved().subscribe(this, function () {
            var e;
            null === (e = _this3._availableStylesWV) || void 0 === e || e.setValue(_this3._availableStyles());
          }));

          var e = this._source.properties().childs(),
              t = (0, s.createOptionsPropertyDefinition)({
            option: (0, s.convertToDefinitionProperty)(this._undoModel, e.style, D)
          }, {
            id: "StudyOverlayStyle",
            title: H,
            options: this._availableStylesWV
          }),
              i = (0, s.createCheckablePropertyDefinition)({
            checked: (0, s.convertToDefinitionProperty)(this._undoModel, e.showPriceLine, T)
          }, {
            id: "StudyOverlayPriceLine",
            title: R
          }),
              n = (0, s.createOptionsPropertyDefinition)({
            option: (0, s.convertToDefinitionProperty)(this._undoModel, e.minTick, L)
          }, {
            id: "StudyOverlayMinTick",
            title: V,
            options: new c.WatchedValue((0, b.seriesPrecisionValues)())
          }),
              a = (0, h.removeSpaces)(this._source.title(f.TitleDisplayTarget.StatusLine));

          return {
            definitions: [(0, s.createPropertyDefinitionsGeneralGroup)([t].concat(_toConsumableArray(this._getSeriesStylesDefinitions())), "SeriesStyleGroup".concat(a)), i, n]
          };
        }
      }, {
        key: "_getSeriesStylesDefinitions",
        value: function _getSeriesStylesDefinitions() {
          var e = this._source.properties().childs(),
              t = e.style.value();

          return (0, z.getSeriesStylePropertiesDefinitions)(this._undoModel, e, t, {
            seriesPriceSources: b.basePriceSources,
            isJapaneseChartsAvailable: !1
          }, "mainSeries");
        }
      }, {
        key: "_availableStyles",
        value: function _availableStyles() {
          var e = this._source.symbolInfo();

          return X.map(function (t) {
            return t.readonly ? t : {
              readonly: !1,
              value: t.value,
              title: t.title,
              disabled: (0, I.isCloseBasedSymbol)(e) && !(0, I.isSingleValueBasedStyle)(t.value)
            };
          });
        }
      }]);

      return O;
    }(
    /*#__PURE__*/
    function () {
      function _class(e, t) {
        var _this4 = this;

        _classCallCheck(this, _class);

        this._inputSourceItems = null, this._propertyPages = [], this._sourceInput = null, this._source = t, this._undoModel = e;

        var i = this._sortInputs(this._source.metaInfo().inputs);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = i[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _e = _step.value;
            "source" === _e.type && (this._sourceInput = _e);
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

        this._createPropertyRages(), null !== this._inputSourceItems && this._undoModel.model().dataSourceCollectionChanged().subscribe(this, function () {
          null !== _this4._inputSourceItems && _this4._inputSourceItems.setValue(_this4._getInputSourceItems());
        });
      }

      _createClass(_class, [{
        key: "destroy",
        value: function destroy() {
          null !== this._inputSourceItems && this._undoModel.model().dataSourceCollectionChanged().unsubscribeAll(this), this._propertyPages.forEach(function (e) {
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

          null !== t && this._propertyPages.push(t), this._propertyPages.push(this._createVisibilitiesPropertyPage());
        }
      }, {
        key: "_createStylePropertyPage",
        value: function _createStylePropertyPage() {
          var e = this._stylePropertyDefinitions();

          return null !== e ? (0, o.createPropertyPage)(e, "style", w) : null;
        }
      }, {
        key: "_createVisibilitiesPropertyPage",
        value: function _createVisibilitiesPropertyPage() {
          var e = this._source.properties().childs().intervalsVisibilities.childs();

          return (0, o.createPropertyPage)((0, v.getIntervalsVisibilitiesPropertiesDefinitions)(this._undoModel, e, new a.TranslatedString(this._source.name(!0), this._source.title(f.TitleDisplayTarget.StatusLine, !0))), "visibility", S);
        }
      }, {
        key: "_stylePropertyDefinitions",
        value: function _stylePropertyDefinitions() {
          return null;
        }
      }, {
        key: "_createInputsPropertyPage",
        value: function _createInputsPropertyPage() {
          var e = this._inputsPropertyDefinitions();

          return null !== e ? (0, o.createPropertyPage)(e, "inputs", k) : null;
        }
      }, {
        key: "_inputsPropertyDefinitions",
        value: function _inputsPropertyDefinitions() {
          var e = this._sortInputs(this._source.metaInfo().inputs),
              t = this._source.properties().childs().inputs.childs();

          return null !== this._sourceInput && (this._inputSourceItems = new c.WatchedValue(this._getInputSourceItems())), function (e, t, l, o, d) {
            var h = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _b = _step2.value;
                if (!p(_b, o)) continue;

                var _t = y(_b),
                    _2 = "StudyInput".concat(_b.id),
                    _m = g(_t),
                    _v = new a.TranslatedString(_t, _m);

                var _f = null;
                if ("resolution" === _b.type) _f = (0, s.createOptionsPropertyDefinition)({
                  option: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                    inputName: _v
                  }))
                }, {
                  id: _2,
                  title: _m,
                  options: new c.WatchedValue(d.resolutionItems)
                });else if ("source" === _b.type) {
                  var _t2 = (0, r.ensure)(d.sourcesItems);

                  _f = (0, s.createOptionsPropertyDefinition)({
                    option: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                      inputName: _v
                    }))
                  }, {
                    id: _2,
                    title: _m,
                    options: _t2
                  });
                } else if ("options" in _b && void 0 !== _b.options) {
                  var _t3 = [];
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = _b.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var _e2 = _step3.value;

                      var _a = _b.optionsTitles && _b.optionsTitles[_e2] || _e2,
                          _l = n.t(_a, {
                        context: "input"
                      }, i(88601));

                      _t3.push({
                        value: _e2,
                        title: _l
                      });
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

                  _f = (0, s.createOptionsPropertyDefinition)({
                    option: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                      inputName: _v
                    }))
                  }, {
                    id: _2,
                    title: _m,
                    options: new c.WatchedValue(_t3)
                  });
                } else if ("symbol" === _b.type) {
                  var _t4 = l[_b.id],
                      _i = (0, r.ensure)(d.getSymbolInfoBySymbol),
                      _n = (0, r.ensure)(d.onSymbolsInfosChanged);

                  _f = (0, s.createSymbolPropertyDefinition)({
                    symbol: (0, s.getSymbolDefinitionProperty)(e, _t4, _i, _n, u.format({
                      inputName: _v
                    }), d.customSymbolInputSetter)
                  }, {
                    id: _2,
                    title: _m
                  });
                } else if ("session" === _b.type) _f = (0, s.createSessionPropertyDefinition)({
                  session: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                    inputName: _v
                  }))
                }, {
                  id: _2,
                  title: _m
                });else if ("bool" === _b.type) _f = (0, s.createCheckablePropertyDefinition)({
                  checked: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                    inputName: _v
                  }))
                }, {
                  id: _2,
                  title: _m
                });else if ("integer" === _b.type || "float" === _b.type || "price" === _b.type) {
                  var _t5 = {
                    id: _2,
                    title: _m,
                    type: "float" === _b.type || "price" === _b.type ? 1 : 0,
                    defval: _b.defval
                  };
                  void 0 !== _b.min && (_t5.min = new c.WatchedValue(_b.min)), void 0 !== _b.max && (_t5.max = new c.WatchedValue(_b.max)), void 0 !== _b.step && isFinite(_b.step) && _b.step > 0 && (_t5.step = new c.WatchedValue(_b.step)), _f = (0, s.createNumberPropertyDefinition)({
                    value: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                      inputName: _v
                    }))
                  }, _t5);
                } else _f = (0, s.createTextPropertyDefinition)({
                  text: (0, s.convertToDefinitionProperty)(e, l[_b.id], u.format({
                    inputName: _v
                  }))
                }, {
                  id: _2,
                  title: _m,
                  isEditable: !0,
                  isMultiLine: !1
                });
                h.push(_f);
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

            return 0 === h.length ? null : {
              definitions: h
            };
          }(this._undoModel, e, t, !1, {
            resolutionItems: P,
            customSymbolInputSetter: this._customSymbolInputSetter(),
            getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
            onSymbolsInfosChanged: this._source.symbolsResolved(),
            sourcesItems: this._inputSourceItems
          });
        }
      }, {
        key: "_sortInputs",
        value: function _sortInputs(e) {
          return e;
        }
      }, {
        key: "_getInputSourceItems",
        value: function _getInputSourceItems() {
          var e = b.basePriceSources.slice(),
              t = (0, r.ensureNotNull)(this._sourceInput);

          if (this._source && this._source.isChildStudy()) {
            var _i2 = this._source.inputs()[t.id],
                _n2 = (0, r.ensureNotNull)(this._source.parentSourceForInput(_i2.v)),
                _a2 = _n2.title(f.TitleDisplayTarget.StatusLine),
                _l2 = _.StudyMetaInfo.getChildSourceInputTitles(t, _n2.metaInfo(), _a2);

            for (var _i3 = 0, _Object$keys = Object.keys(_l2); _i3 < _Object$keys.length; _i3++) {
              var _t6 = _Object$keys[_i3];
              e.push({
                id: _t6,
                value: _t6,
                title: _l2[_t6]
              });
            }
          }

          if (l.enabled("study_on_study") && this._source && (this._source.isChildStudy() || _.StudyMetaInfo.canBeChild(this._source.metaInfo()))) {
            var _t7 = new Set([this._source].concat(_toConsumableArray(this._source.getAllChildren())));

            this._undoModel.model().allStudies().filter(function (e) {
              return e.canHaveChildren() && !_t7.has(e);
            }).forEach(function (t) {
              var i = t.title(f.TitleDisplayTarget.StatusLine, !0, void 0, !0),
                  n = t.sourceId() || "#" + t.id(),
                  a = t.metaInfo(),
                  l = a.styles,
                  s = a.plots || [];
              if (1 === s.length) e.push({
                id: n,
                value: n,
                title: i
              });else if (s.length > 1) {
                var _t8 = s.reduce(function (e, t, a) {
                  if (!_.StudyMetaInfo.canPlotBeSourceOfChildStudy(t.type)) return e;
                  var s;

                  try {
                    s = (0, r.ensureDefined)((0, r.ensureDefined)(l)[t.id]).title;
                  } catch (e) {
                    s = t.id;
                  }

                  return _objectSpread({}, e, _defineProperty({}, "".concat(n, "$").concat(a), "".concat(i, ": ").concat(s)));
                }, {});

                for (var _i4 = 0, _Object$keys2 = Object.keys(_t8); _i4 < _Object$keys2.length; _i4++) {
                  var _i5 = _Object$keys2[_i4];
                  e.push({
                    id: _i5,
                    value: _i5,
                    title: _t8[_i5]
                  });
                }
              }
            });
          }

          return e;
        }
      }, {
        key: "_customSymbolInputSetter",
        value: function _customSymbolInputSetter() {}
      }, {
        key: "_getSymbolInfoBySymbol",
        value: function _getSymbolInfoBySymbol(e) {
          return this._source.resolvedSymbolInfoBySymbol(e.value());
        }
      }]);

      return _class;
    }());
  },
  63227: function _(e) {
    e.exports = {
      ar: ["#‎{count}‎ (عمود)"],
      ca_ES: ["#{count} (barra)"],
      cs: "#{count} (bar)",
      de: "#{count} (bar)",
      el: "#{count} (bar)",
      en: "#{count} (bar)",
      es: ["#{count} (barra)"],
      fa: "#{count} (bar)",
      fr: ["#{count} (barre)"],
      he_IL: ["# {count} (בר)"],
      hu_HU: "#{count} (bar)",
      id_ID: "#{count} (bar)",
      it: ["#{count} (barra)"],
      ja: ["#{count} (バー)"],
      ko: ["#{count} (바)"],
      ms_MY: "#{count} (bar)",
      nl_NL: "#{count} (bar)",
      pl: ["#{count} (słupek)"],
      pt: ["#{count} (barra)"],
      ro: "#{count} (bar)",
      ru: ["#{count} (бар)"],
      sv: ["#{count} (stapel)"],
      th: ["#{count} (แท่ง)"],
      tr: ["#{count} (çubuk)"],
      vi: ["#{count} (thanh)"],
      zh: ["#{count}（K线）"],
      zh_TW: ["#{count}（K棒）"]
    };
  },
  9671: function _(e) {
    e.exports = {
      ar: ["#{count}' (سعر، عمود)"],
      ca_ES: ["#{count} (preu, barra)"],
      cs: "#{count} (price, bar)",
      de: ["#{count} (Preis, Bar)"],
      el: "#{count} (price, bar)",
      en: "#{count} (price, bar)",
      es: ["#{count} (precio, barra)"],
      fa: "#{count} (price, bar)",
      fr: ["#{count} (prix, bar)"],
      he_IL: ["#{count} (מחיר, נר)"],
      hu_HU: "#{count} (price, bar)",
      id_ID: ["#{count} (harga, bar)"],
      it: ["#{count} (prezzo, barra)"],
      ja: ["#{count}（価格, バー）"],
      ko: ["#{count} (프라이스, 바)"],
      ms_MY: ["#{count} (harga, bar)"],
      nl_NL: "#{count} (price, bar)",
      pl: ["#{count} (cena, słupek)"],
      pt: ["#{count} (preço, barra)"],
      ro: "#{count} (price, bar)",
      ru: ["#{count} (цена, бар)"],
      sv: ["Nr {count} (pris, stapel)"],
      th: ["#{count} (ราคา, แท่ง)"],
      tr: ["#{count} (fiyat, çubuk)"],
      vi: ["#{count} (giá, thanh)"],
      zh: ["#{count}（价格，K线）"],
      zh_TW: ["#{count}（價格，K棒）"]
    };
  },
  4639: function _(e) {
    e.exports = {
      ar: ["إحداثيات"],
      ca_ES: ["Coordenades"],
      cs: ["Souřadnice"],
      de: ["Koordinaten"],
      el: ["Συντεταγμένες"],
      en: "Coordinates",
      es: ["Coordenadas"],
      fa: ["مختصات"],
      fr: ["Coordonnées"],
      he_IL: ["קואורדינטות"],
      hu_HU: ["Koordináták"],
      id_ID: ["Koordinat"],
      it: ["Coordinate"],
      ja: ["座標"],
      ko: ["좌표"],
      ms_MY: ["Koordinat"],
      nl_NL: ["Coördinaten"],
      pl: ["Współrzędne"],
      pt: ["Coordenadas"],
      ro: "Coordinates",
      ru: ["Координаты"],
      sv: ["Koordinater"],
      th: ["พิกัดตำแหน่ง"],
      tr: ["Kordinatlar"],
      vi: ["Tọa độ"],
      zh: ["坐标"],
      zh_TW: ["坐標"]
    };
  },
  55719: function _(e) {
    e.exports = {
      ar: ["نقطة الأساس"],
      ca_ES: "Base",
      cs: "Base",
      de: ["Basis"],
      el: "Base",
      en: "Base",
      es: "Base",
      fa: "Base",
      fr: "Base",
      he_IL: ["בסיס"],
      hu_HU: ["Bázis"],
      id_ID: ["Dasar"],
      it: "Base",
      ja: ["ベース"],
      ko: ["베이스"],
      ms_MY: ["Asas"],
      nl_NL: "Base",
      pl: ["Baza"],
      pt: "Base",
      ro: "Base",
      ru: ["Базовая линия"],
      sv: ["Bas"],
      th: ["ฐาน"],
      tr: ["Taban"],
      vi: ["Cơ sở"],
      zh: ["基准线"],
      zh_TW: ["基準線"]
    };
  },
  41361: function _(e) {
    e.exports = {
      ar: ["للأسفل"],
      ca_ES: ["Avall"],
      cs: "Down",
      de: ["Abwärts"],
      el: "Down",
      en: "Down",
      es: ["Abajo"],
      fa: "Down",
      fr: ["Bas"],
      he_IL: ["למטה"],
      hu_HU: ["Le"],
      id_ID: ["Turun"],
      it: ["Giù"],
      ja: ["下"],
      ko: ["다운"],
      ms_MY: ["Bawah"],
      nl_NL: "Down",
      pl: ["W dół"],
      pt: ["Inferior"],
      ro: "Down",
      ru: ["Вниз"],
      sv: ["Ned"],
      th: ["ทิศลง"],
      tr: ["Alt"],
      vi: ["Xuống"],
      zh: ["下"],
      zh_TW: ["下"]
    };
  },
  37067: function _(e) {
    e.exports = {
      ar: ["النزوح (السعر، العمود)"],
      ca_ES: ["Desplaçament (preu, barra)"],
      cs: "Displacement (price, bar)",
      de: ["Verschiebung (Preis, Balken)"],
      el: "Displacement (price, bar)",
      en: "Displacement (price, bar)",
      es: ["Desplazamiento (precio, barra)"],
      fa: "Displacement (price, bar)",
      fr: ["Déplacement (prix, barre)"],
      he_IL: ["שינוי מיקום (מחיר, בר)"],
      hu_HU: "Displacement (price, bar)",
      id_ID: ["Pemindahan (harga, bar)"],
      it: ["Spostamento (prezzo, barra)"],
      ja: ["再配置 (価格, バー)"],
      ko: ["변위(가격, 막대)"],
      ms_MY: ["Anjakan (harga, bar)"],
      nl_NL: "Displacement (price, bar)",
      pl: ["Przemieszczenie (cena, słupek)"],
      pt: ["Deslocamento (preço, barra)"],
      ro: "Displacement (price, bar)",
      ru: ["Перемещение (цена, бар)"],
      sv: ["Förskjutning (pris-, stapel-)"],
      th: ["การกระจัด (ราคา, บาร์)"],
      tr: ["Ayrıştırma (fiyat, çubuk)"],
      vi: ["Sự dịch chuyển (giá, thanh)"],
      zh: ["移位（价格，K线）"],
      zh_TW: ["替換(價格，K線)"]
    };
  },
  13611: function _(e) {
    e.exports = {
      ar: ["تمديد الخطوط"],
      ca_ES: ["Amplia línies"],
      cs: ["Rozšířit linie"],
      de: ["Linien verlängern"],
      el: ["Extend Lines"],
      en: "Extend lines",
      es: ["Ampliar líneas"],
      fa: ["امتداد خطوط"],
      fr: ["Prolonger les lignes"],
      he_IL: ["הרחב קווים"],
      hu_HU: ["Vonalak Hosszabítása"],
      id_ID: ["Perpanjang Garis"],
      it: ["Estendi linee"],
      ja: ["ラインを延長"],
      ko: ["확장선"],
      ms_MY: ["Lanjutkan Garisan"],
      nl_NL: ["Rek lijnen uit"],
      pl: ["Przedłuż Linie"],
      pt: ["Estender linhas"],
      ro: ["Extend Lines"],
      ru: ["Продолжить линии"],
      sv: ["Utöka linjer"],
      th: ["ยืดเส้น"],
      tr: ["Çizgileri uzat"],
      vi: ["Kéo dài các Đường"],
      zh: ["延长线"],
      zh_TW: ["延長線"]
    };
  },
  36993: function _(e) {
    e.exports = {
      ar: ["تجاوز الحد الأدنى للتيك"],
      ca_ES: ["Anul·la el tick mínim"],
      cs: ["Přepsat Min Tick"],
      de: ["Min Tick überschreiben"],
      el: ["Override Min Tick"],
      en: "Override min tick",
      es: ["Anular el tick mínimo"],
      fa: ["حداقل مقیاس قیمت"],
      fr: ["Ne pas tenir compte du Tick minimum"],
      he_IL: ["דריסת טיק מינימלי"],
      hu_HU: ["Min. Tick Felülírása"],
      id_ID: ["Menimpa Tick Min"],
      it: ["Sovrascrivi tick minimo"],
      ja: ["小数点表示"],
      ko: ["min tick 오버라이드"],
      ms_MY: ["Melarang Tanda Semak Minimum"],
      nl_NL: ["Overschrijven minimale tick"],
      pl: ["Zmień min tick"],
      pt: ["Sobrepor tick mín."],
      ro: ["Override Min Tick"],
      ru: ["Минимальное изменение цены"],
      sv: ["Åsidosätt minimumkredit"],
      th: ["เขียนทับ Min Tick"],
      tr: ["Fiyatın Min Adımı"],
      vi: ["Ghi đè min tick"],
      zh: ["覆盖最小tick"],
      zh_TW: ["顯示最小刻度"]
    };
  },
  95543: function _(e) {
    e.exports = {
      ar: ["الشهور"],
      ca_ES: ["Mesos"],
      cs: "Months",
      de: ["Monate"],
      el: "Months",
      en: "Months",
      es: ["Meses"],
      fa: "Months",
      fr: ["Mois"],
      he_IL: ["חודשים"],
      hu_HU: ["Hónapok"],
      id_ID: ["Bulan"],
      it: ["Mesi"],
      ja: ["月"],
      ko: ["달"],
      ms_MY: ["Bulan"],
      nl_NL: "Months",
      pl: ["Miesiące"],
      pt: ["Meses"],
      ro: "Months",
      ru: ["Месяцы"],
      sv: ["Månader"],
      th: ["เดือน"],
      tr: ["Aylar"],
      vi: ["Tháng"],
      zh: ["个月"],
      zh_TW: ["個月"]
    };
  },
  14105: function _(e) {
    e.exports = {
      ar: ["معامل بيرسون"],
      ca_ES: ["Coeficient de correlació de Pearson"],
      cs: "Pearson's R",
      de: "Pearson's R",
      el: "Pearson's R",
      en: "Pearson's R",
      es: ["Coeficiente de correlación de Pearson"],
      fa: "Pearson's R",
      fr: ["Le R de Pearson"],
      he_IL: ["מתאם פירסון R"],
      hu_HU: "Pearson's R",
      id_ID: "Pearson's R",
      it: "Pearson's R",
      ja: ["ピアソンの積率相関係数"],
      ko: ["Pearson's 상관계수"],
      ms_MY: "Pearson's R",
      nl_NL: "Pearson's R",
      pl: ["R Pearsona"],
      pt: ["Correlação de Pearsons"],
      ro: "Pearson's R",
      ru: "Pearson's R",
      sv: "Pearson's R",
      th: ["เพียร์สัน อาร์"],
      tr: ["Pearson R"],
      vi: "Pearson's R",
      zh: ["相关系数"],
      zh_TW: ["皮爾遜相關係數(Pearson's R)"]
    };
  },
  98802: function _(e) {
    e.exports = {
      ar: ["أعلى"],
      ca_ES: ["Amunt"],
      cs: "Up",
      de: ["Aufwärts"],
      el: "Up",
      en: "Up",
      es: ["Arriba"],
      fa: "Up",
      fr: ["Haut"],
      he_IL: ["למעלה"],
      hu_HU: ["Fel"],
      id_ID: ["Naik"],
      it: ["Su"],
      ja: ["上"],
      ko: ["업"],
      ms_MY: ["Naik"],
      nl_NL: "Up",
      pl: ["W górę"],
      pt: ["Superior"],
      ro: "Up",
      ru: ["Вверх"],
      sv: ["Upp"],
      th: ["บน"],
      tr: ["Üst"],
      vi: ["Lên"],
      zh: ["上"],
      zh_TW: ["上"]
    };
  },
  23723: function _(e) {
    e.exports = {
      ar: ["تغيير إحداثيات سعر X"],
      ca_ES: ["canvia la coordenada X de les barres"],
      cs: "change bar X coordinate",
      de: ["X-Koordinate des Balkens ändern"],
      el: "change bar X coordinate",
      en: "change bar X coordinate",
      es: ["cambiar la coordenada X de las barras"],
      fa: "change bar X coordinate",
      fr: ["changer la coordonnée X de la barre"],
      he_IL: ["שנה בר של קואורדינטת X"],
      hu_HU: "change bar X coordinate",
      id_ID: ["Ubah koordinat bar X"],
      it: ["modifica coordinate di barra X"],
      ja: ["バーのX座標の変更"],
      ko: ["프라이스 X 좌표 바꾸기"],
      ms_MY: ["tukar koordinat bar X"],
      nl_NL: "change bar X coordinate",
      pl: ["zmień współrzędną słupka ceny Y"],
      pt: ["mudar a coordenada da barra X"],
      ro: "change bar X coordinate",
      ru: ["изменение X-координаты бара"],
      sv: ["ändra koordinaterna för stapel X"],
      th: ["เปลี่ยนแถบพิกัด X"],
      tr: ["çubuk X koordinatını değiştir"],
      vi: ["thay đổi giá tọa độ X"],
      zh: ["更改K线X坐标"],
      zh_TW: ["更改K線X坐標"]
    };
  },
  66266: function _(e) {
    e.exports = {
      ar: ["تغيير إحداثيات سعر Y"],
      ca_ES: ["canvia la coordenada Y dels preus"],
      cs: "change price Y coordinate",
      de: ["Y-Koordinate des Preises ändern"],
      el: "change price Y coordinate",
      en: "change price Y coordinate",
      es: ["cambiar la coordenada Y de los precios"],
      fa: "change price Y coordinate",
      fr: ["changer la coordonnée Y du prix"],
      he_IL: ["שנה מחיר של קואורדינטת Y"],
      hu_HU: "change price Y coordinate",
      id_ID: ["Ubah koordinat harga Y"],
      it: ["modifica coordinate di prezzo Y"],
      ja: ["価格のY座標の変更"],
      ko: ["프라이스 Y 좌표 바꾸기"],
      ms_MY: ["tukar koordinat harga Y"],
      nl_NL: "change price Y coordinate",
      pl: ["zmień współrzędną ceny Y"],
      pt: ["mudar o preço da coordenada Y"],
      ro: "change price Y coordinate",
      ru: ["изменение Y-координаты цены"],
      sv: ["ändra pris för Y-koordinaten"],
      th: ["เปลี่ยนราคาพิกัด Y"],
      tr: ["fiyatı değiştir Y koordinatı"],
      vi: ["thay đổi giá tọa độ Y"],
      zh: ["更改价格Y坐标"],
      zh_TW: ["更改價格Y坐標"]
    };
  },
  70016: function _(e) {
    e.exports = {
      ar: ["تغيير تراكب أدنى تيك في الدراسة"],
      ca_ES: ["canvia ticks mínims de la superposició de l'estudi"],
      cs: "change study overlay min tick",
      de: ["Overlay Studie in min tick ändern"],
      el: "change study overlay min tick",
      en: "change study overlay min tick",
      es: ["cambiar tics mínimos de la superposición del estudio"],
      fa: "change study overlay min tick",
      fr: ["changer la superposition d'étude min tick"],
      he_IL: ["שנה מינימום טיק של שכבת המחקר"],
      hu_HU: "change study overlay min tick",
      id_ID: ["ubah minimun tick overlay studi"],
      it: ["cambio tick min indicatore"],
      ja: ["インジケーターの最小ティックの変更"],
      ko: ["스터디 오버레이 최소 틱 바꾸기"],
      ms_MY: ["tukar tick minimum tindanan kajian"],
      nl_NL: "change study overlay min tick",
      pl: ["Zmień minimalny tik wskaźnika"],
      pt: ["alterar a espessura min. do overlay do estudo"],
      ro: "change study overlay min tick",
      ru: ["изменение мин. тик. значения символа сравнения"],
      sv: ["ändra överlagrings-min-tick för studien"],
      th: ["เปลี่ยน min tick ของ study overlay"],
      tr: ["min sembol kaplama çlş değiştir"],
      vi: ["thay đổi lớp phủ nghiên cứu đánh dấu tối thiểu"],
      zh: ["更改研究覆盖最小tick"],
      zh_TW: ["更改研究覆蓋最小tick"]
    };
  },
  5529: function _(e) {
    e.exports = {
      ar: ["تغيير نمط تراكب الدراسة"],
      ca_ES: ["canvia estil de superposició de l'estudi"],
      cs: "change study overlay style",
      de: ["Overlay Stil ändern"],
      el: "change study overlay style",
      en: "change study overlay style",
      es: ["cambio estilo de superposición del estudio"],
      fa: "change study overlay style",
      fr: ["changer le style de superposition des études"],
      he_IL: ["שנה את סגנון שכבת המחקר"],
      hu_HU: "change study overlay style",
      id_ID: ["ubah corak overlay studi"],
      it: ["cambio stile indicatore"],
      ja: ["インジケーターのオーバーレイのスタイルの変更"],
      ko: ["스터디 오버레이 스타일 바꾸기"],
      ms_MY: ["tukar gaya tindanan kajian"],
      nl_NL: "change study overlay style",
      pl: ["zmień styl nakładki badania"],
      pt: ["alterar estilo do overlay do estudo"],
      ro: "change study overlay style",
      ru: ["изменение стиля символа сравнения"],
      sv: ["ändra överlagringsstil för studien"],
      th: ["เปลี่ยนรูปแบบ study overlay"],
      tr: ["çalışma yer paylaşımı stilini değiştir"],
      vi: ["thay đổi kiểu bao phủ cho phần được nghiên cứu"],
      zh: ["更改研究覆盖样式"],
      zh_TW: ["改變研究覆蓋樣式"]
    };
  },
  97029: function _(e) {
    e.exports = {
      ar: ["تغيير لون خط القاعدة {title}"],
      ca_ES: ["canvia el color de la línia de referència de {title}"],
      cs: "change {title} base line color",
      de: ["{title} Farbe der Grundlinie ändern"],
      el: "change {title} base line color",
      en: "change {title} base line color",
      es: ["cambiar el color de la línea de referencia de {title}"],
      fa: "change {title} base line color",
      fr: ["changer la couleur de la ligne de base de {title}"],
      he_IL: ["שנה את צבע קו הבסיס של {title}"],
      hu_HU: "change {title} base line color",
      id_ID: ["ubah warna garis dasar {title}"],
      it: ["cambio colore linea base {title}"],
      ja: ["{title}のベースラインの色の変更"],
      ko: ["{title} 기본선 색상 변경"],
      ms_MY: ["tukar warna {title} garisan asas"],
      nl_NL: "change {title} base line color",
      pl: ["zmień kolor linii bazowej dla {title}"],
      pt: ["alterar a cor da linha base de {title}"],
      ro: "change {title} base line color",
      ru: ["изменение цвета линии стандарта: {title}"],
      sv: ["ändra baslinjefärg för {title}"],
      th: ["เปลี่ยนสี {title} เส้นพื้นฐาน"],
      tr: ["{title} temel çizgi rengini değiştir"],
      vi: ["điều chỉnh màu đường cơ sở {title}"],
      zh: ["更改{title}基准线颜色"],
      zh_TW: ["更改{title}基準線顏色"]
    };
  },
  3868: function _(e) {
    e.exports = {
      ar: ["تغيير نمط خط القاعدة {title}"],
      ca_ES: ["canvia l'estil de la línia de referència de {title}"],
      cs: "change {title} base line style",
      de: ["{title} Stil der Grundlinie ändern"],
      el: "change {title} base line style",
      en: "change {title} base line style",
      es: ["cambiar el estilo de la línea de referencia de {title}"],
      fa: "change {title} base line style",
      fr: ["changer le style de la ligne de base de {title}"],
      he_IL: ["שנה את סגנון קו הבסיס של {title}"],
      hu_HU: "change {title} base line style",
      id_ID: ["ubah corak garis dasar {title}"],
      it: ["cambio stile linea base {title}"],
      ja: ["{title}のベースラインのスタイルの変更"],
      ko: ["{title} 기본선 스타일 변경"],
      ms_MY: ["tukar gaya {title} garisan jalur asas"],
      nl_NL: "change {title} base line style",
      pl: ["zmień styl linii bazowej dla {title}"],
      pt: ["alterar o estilo da linha base de {title}"],
      ro: "change {title} base line style",
      ru: ["изменение стиля линии стандарта: {title}"],
      sv: ["ändra baslinjestil för {title}"],
      th: ["เปลี่ยนรูปแบบ {title} เส้นพื้นฐาน"],
      tr: ["{title} temel çizgi stilini değiştir"],
      vi: ["điều chỉnh kiểu đường cơ sở {title}"],
      zh: ["更改{title}基准线样式"],
      zh_TW: ["更改{title}基準線樣式"]
    };
  },
  16688: function _(e) {
    e.exports = {
      ar: ["تغيير وضوح خط القاعدة {title}"],
      ca_ES: ["canvia la visibilitat de la línia de referència de {title}"],
      cs: "change {title} base line visibility",
      de: ["{title} Sichtbarkeit der Grundlinie ändern"],
      el: "change {title} base line visibility",
      en: "change {title} base line visibility",
      es: ["cambiar la visibilidad de la línea de referencia de {title}"],
      fa: "change {title} base line visibility",
      fr: ["changer la visibilité de la ligne de base de {title}"],
      he_IL: ["שנה את נראות קו הבסיס של {title}"],
      hu_HU: "change {title} base line visibility",
      id_ID: ["ubah visibilitas garis dasar {title}"],
      it: ["cambio visibilità linea base {title}"],
      ja: ["{title}のベースラインの表示の変更"],
      ko: ["{title} 기본선 가시성 변경"],
      ms_MY: ["tukar kebolehlihatan {title} garisan asas"],
      nl_NL: "change {title} base line visibility",
      pl: ["zmień widoczność linii bazowej dla {title}"],
      pt: ["alterar a visibilidade da linha base de {title}"],
      ro: "change {title} base line visibility",
      ru: ["изменение видимости линии стандарта: {title}"],
      sv: ["ändra synlighet för {title}s baslinje"],
      th: ["เปลี่ยนการมองเห็น {title} เส้นพื้นฐาน"],
      tr: ["{title} temel çizgi görünürlüğünü değiştir"],
      vi: ["điều chỉnh hiển thị đường cơ sở {title}"],
      zh: ["更改{title}基准线可见性"],
      zh_TW: ["更改{title}基準線可見性"]
    };
  },
  51676: function _(e) {
    e.exports = {
      ar: ["تغيير عرض خط القاعدة {title}"],
      ca_ES: ["canvia l'ample de la línia de referència de {title}"],
      cs: "change {title} base line width",
      de: ["{title} Linienbreite der Grundlinie ändern"],
      el: "change {title} base line width",
      en: "change {title} base line width",
      es: ["cambiar el ancho de la línea de referencia de {title}"],
      fa: "change {title} base line width",
      fr: ["changer la largeur de la ligne de base de {title}"],
      he_IL: ["שנה את רוחב קו הבסיס של {title}"],
      hu_HU: "change {title} base line width",
      id_ID: ["ubah lebar garis dasar {title}"],
      it: ["cambio spessore linea base {title}"],
      ja: ["{title}のベースラインの幅の変更"],
      ko: ["{title} 기본선 너비 변경"],
      ms_MY: ["tukar tebal {title} garisan jalur asas"],
      nl_NL: "change {title} base line width",
      pl: ["zmień szerokość linii bazowej dla {title}"],
      pt: ["alterar a largura da linha base de {title}"],
      ro: "change {title} base line width",
      ru: ["изменение толщины линии стандарта: {title}"],
      sv: ["ändra baslinjebredd för {title}"],
      th: ["เปลี่ยนความกว้าง {title} เส้นพื้นฐาน"],
      tr: ["{title} taban çizgisi genişliğini değiştir"],
      vi: ["điều chỉnh độ rộng đường cơ sở {title}"],
      zh: ["更改{title}基准线宽度"],
      zh_TW: ["更改{title}基準線寬度"]
    };
  },
  15438: function _(e) {
    e.exports = {
      ar: ["تغيير لون الخط الأدنى {title}"],
      ca_ES: ["canvia color de la línia inferior de {title}"],
      cs: "change {title} down line color",
      de: ["{title} Farbe der Abwärtslinie ändern"],
      el: "change {title} down line color",
      en: "change {title} down line color",
      es: ["cambiar color de la línea inferior de {title}"],
      fa: "change {title} down line color",
      fr: ["changer la couleur de la ligne du bas de {title}"],
      he_IL: ["שנה את צבע הקו התחתון של {title}"],
      hu_HU: "change {title} down line color",
      id_ID: ["ubah warna garis bawah {title}"],
      it: ["cambio colore linea inf {title}"],
      ja: ["{title}の下降ラインの色の変更"],
      ko: ["{title} 다운 라인 컬러 바꾸기"],
      ms_MY: ["tukar warna {title} garisan bawah"],
      nl_NL: "change {title} down line color",
      pl: ["zmień kolor linii spadkowej dla {title}"],
      pt: ["alterar a cor da linha inferior de {title}"],
      ro: "change {title} down line color",
      ru: ["изменение цвета нижней линии: {title}"],
      sv: ["ändra den nedre linjefärgen för {title}"],
      th: ["เปลี่ยนสี {title} เส้นขาลง"],
      tr: ["{title} alt çizgi rengini değiştir"],
      vi: ["điều chỉnh hiển thị đường dưới {title}"],
      zh: ["更改{title}向下线条颜色"],
      zh_TW: ["更改{title}向下線條顏色"]
    };
  },
  3782: function _(e) {
    e.exports = {
      ar: ["تغيير نمط الخط الأدنى {title}"],
      ca_ES: ["canvia l'estil de la línia descendent de {title}"],
      cs: "change {title} down line style",
      de: ["{title} Stil der Abwärtslinie ändern"],
      el: "change {title} down line style",
      en: "change {title} down line style",
      es: ["cambiar el estilo de la línea descendente de {title}"],
      fa: "change {title} down line style",
      fr: ["changer le style de la ligne du bas de {title}"],
      he_IL: ["שנה את סגנון הקו התחתון של {title}"],
      hu_HU: "change {title} down line style",
      id_ID: ["ubah corak garis bawah {title}"],
      it: ["cambio stile linea inf {title}"],
      ja: ["{title}の下降ラインのスタイルの変更"],
      ko: ["{title} 다운 라인 스타일 바꾸기"],
      ms_MY: ["tukar gaya {title} garisan bawah"],
      nl_NL: "change {title} down line style",
      pl: ["zmień styl linii spadkowej dla {title}"],
      pt: ["alterar o estilo da linha inferior de {title}"],
      ro: "change {title} down line style",
      ru: ["изменение стиля нижней линии: {title}"],
      sv: ["ändra nedre linjestilen för {title}"],
      th: ["เปลี่ยนรูปแบบ {title} เส้นขาลง"],
      tr: ["{title} alt satır stilini değiştir"],
      vi: ["điều chỉnh kiểu đường dưới {title}"],
      zh: ["更改{title}向下线条样式"],
      zh_TW: ["更改{title}向下線條樣式"]
    };
  },
  23527: function _(e) {
    e.exports = {
      ar: ["تغيير وضوح الخط الأدنى {title}"],
      ca_ES: ["canvia la visibilitat de la línia descendent de {title}"],
      cs: "change {title} down line visibility",
      de: ["{title} Sichtbarkeit der Abwärtslinie ändern"],
      el: "change {title} down line visibility",
      en: "change {title} down line visibility",
      es: ["cambiar la visibilidad de la línea descendente de {title}"],
      fa: "change {title} down line visibility",
      fr: ["changer la visibilité de la ligne du bas de {title}"],
      he_IL: ["שנה נראות קו תחתון של {title}"],
      hu_HU: "change {title} down line visibility",
      id_ID: ["ubah visibilitas garis bawah {title}"],
      it: ["cambio visibilità linea inf {title}"],
      ja: ["{title}の下降ラインの表示の変更"],
      ko: ["{title} 다운 라인 비저빌리티 바꾸기"],
      ms_MY: ["tukar kebolehlihatan {title} garisan bawah"],
      nl_NL: "change {title} down line visibility",
      pl: ["zmień widoczność linii spadkowej dla {title}"],
      pt: ["alterar a visibilidade da linha inferior de {title}"],
      ro: "change {title} down line visibility",
      ru: ["изменение видимости нижней линии: {title}"],
      sv: ["ändra nedre linjesynligheten för {title}"],
      th: ["เปลี่ยนการมองเห็น {title} เส้นขาลง"],
      tr: ["{title} alt çizgi görünürlüğünü değiştir"],
      vi: ["điều chỉnh hiển thị đường dưới {title}"],
      zh: ["更改{title}向下线条可见性"],
      zh_TW: ["更改{title}向下線條可見性"]
    };
  },
  44470: function _(e) {
    e.exports = {
      ar: ["تغيير عرض الخط الأدنى {title}"],
      ca_ES: ["canvia l'ample de la línia inferior de {title}"],
      cs: "change {title} down line width",
      de: ["{title} Breite der Abwärtslinie ändern"],
      el: "change {title} down line width",
      en: "change {title} down line width",
      es: ["cambiar el ancho de la línea inferior de {title}"],
      fa: "change {title} down line width",
      fr: ["changer la largeur de la ligne du bas de {title}"],
      he_IL: ["שנה את רוחב הקו התחתון של {title}"],
      hu_HU: "change {title} down line width",
      id_ID: ["ubah lebar garis bawah {title}"],
      it: ["cambio spessore linea inf {title}"],
      ja: ["{title}の下降ラインの幅の変更"],
      ko: ["{title} 다운 라인 너비 바꾸기"],
      ms_MY: ["tukar tebal {title} garisan bawah"],
      nl_NL: "change {title} down line width",
      pl: ["zmień szerokość linii spadkowej dla {title}"],
      pt: ["alterar a largura da linha inferior de {title}"],
      ro: "change {title} down line width",
      ru: ["изменение толщины нижней линии: {title}"],
      sv: ["ändra nedre linjebredden för {title}"],
      th: ["เปลี่ยนความกว้าง {title} เส้นขาลง"],
      tr: ["{title} alt çizgi genişliğini değiştir"],
      vi: ["điều chỉnh độ rộng đường dưới {title}"],
      zh: ["更改{title}向下线条宽度"],
      zh_TW: ["更改{title}向下線條寬度"]
    };
  },
  96902: function _(e) {
    e.exports = {
      ar: ["تغيير تمديد الخط {title}"],
      ca_ES: ["canvia ampliar línies a {title}"],
      cs: "change {title} extend lines",
      de: ["{title} Linienerweiterungen ändern"],
      el: "change {title} extend lines",
      en: "change {title} extend lines",
      es: ["cambiar ampliar líneas en {title}"],
      fa: "change {title} extend lines",
      fr: ["changer étendre les lignes de {title}"],
      he_IL: ["שנה {title} קווים מורחבים"],
      hu_HU: "change {title} extend lines",
      id_ID: ["ubah perpanjangan garis {title}"],
      it: ["cambio estensione linee {title}"],
      ja: ["{title}のラインを延長の変更"],
      ko: ["{title} 익스텐드 라인 바꾸기"],
      ms_MY: ["tukar {title} lanjutkan garisan"],
      nl_NL: "change {title} extend lines",
      pl: ["zmień przedłużone linie {title}"],
      pt: ["alterar linhas estendidas de {title}"],
      ro: "change {title} extend lines",
      ru: ["изменение: продолжение линий ({title})"],
      sv: ["ändra förlängningslinjer för {title}"],
      th: ["เปลี่ยน {title} การขยายเส้น"],
      tr: ["{title} satırları uzat değiştir"],
      vi: ["điều chỉnh mở rộng dòng {title}"],
      zh: ["更改{title}延长线"],
      zh_TW: ["更改{title}延長線"]
    };
  },
  38317: function _(e) {
    e.exports = {
      ar: ["تغيير عرض {title} pearson's r"],
      ca_ES: ["canvia la visibilitat r de Pearson de {title}"],
      cs: "change {title} show pearson's r",
      de: ["{title} Pearson's R anzeigen"],
      el: "change {title} show pearson's r",
      en: "change {title} show pearson's r",
      es: ["cambiar la visibilidad r de Pearson de {title}"],
      fa: "change {title} show pearson's r",
      fr: ["changer show pearson's r de {title}"],
      he_IL: ["שנה {title} הצג את ה-r של פירסון"],
      hu_HU: "change {title} show pearson's r",
      id_ID: ["ubah {title} menampilkan r pearson"],
      it: ["cambio modifica visibilità r di Pearson {title}"],
      ja: ["{title}のピアソンの積率相関係数の表示の変更"],
      ko: ["{title} 피어슨 R 보기 바꾸기"],
      ms_MY: ["tukar {title} tunjuk pearson's r"],
      nl_NL: "change {title} show pearson's r",
      pl: ["Zmień sposób wyświetlania współczynnika korelacji momentu produktu Pearsona w {title}"],
      pt: ["alterar exibir correlação de pearson de {title}"],
      ro: "change {title} show pearson's r",
      ru: ["отображение pearson's r: {title}"],
      sv: ["ändra {title} visa Pearsons k"],
      th: ["เปลี่ยน {title} การแสดงผลเพียร์สัน อาร์"],
      tr: ["{title} pearson'ın r'sini göster değiştir"],
      vi: ["thay đổi {title} show pearson's r"],
      zh: ["更改{title}显示pearson's r"],
      zh_TW: ["更改{title}顯示pearson's r"]
    };
  },
  17564: function _(e) {
    e.exports = {
      ar: ["تغيير وضوح الخط العلوي {title}"],
      ca_ES: ["canvia la visibilitat de la línia superior de {title}"],
      cs: "change {title} up line visibility",
      de: ["{title} Sichtbarkeit der Aufwärtslinie ändern"],
      el: "change {title} up line visibility",
      en: "change {title} up line visibility",
      es: ["cambiar la visibilidad de la línea superior de {title}"],
      fa: "change {title} up line visibility",
      fr: ["changer la visibilité de la ligne du haut de {title}"],
      he_IL: ["שנה את נראות הקו העליון של {title}"],
      hu_HU: "change {title} up line visibility",
      id_ID: ["ubah visibilitas garis atas {title}"],
      it: ["cambio visibilità linea sup {title}"],
      ja: ["{title}の上昇ラインの表示の変更"],
      ko: ["{title} 업 라인 비저빌리티 바꾸기"],
      ms_MY: ["tukar kebolehlihatan {title} garisan atas"],
      nl_NL: "change {title} up line visibility",
      pl: ["zmień widoczność linii wzrostowej dla {title}"],
      pt: ["alterar a visibilidade da linha superior de {title}"],
      ro: "change {title} up line visibility",
      ru: ["изменение видимости верхней линии: {title}"],
      sv: ["ändra synlighet för {title}s övre linje"],
      th: ["เปลี่ยนการมองเห็น {title} เส้นขาขึ้น"],
      tr: ["{title} üst çizgi görünümünü değiştir"],
      vi: ["điều chỉnh hiển thị đường trên {title}"],
      zh: ["更改{title}向上线条可见性"],
      zh_TW: ["更改{title}向上線條可見性"]
    };
  },
  66118: function _(e) {
    e.exports = {
      ar: ["تغيير عرض الخط العلوي {title}"],
      ca_ES: ["canvia l'ample de la línia superior de {title}"],
      cs: "change {title} up line width",
      de: ["{title} Breite der Aufwärtslinie ändern"],
      el: "change {title} up line width",
      en: "change {title} up line width",
      es: ["cambiar el ancho de la línea superior de {title}"],
      fa: "change {title} up line width",
      fr: ["changer la largeur de la ligne du haut de {title}"],
      he_IL: ["שנה את רוחב הקו העליון של {title}"],
      hu_HU: "change {title} up line width",
      id_ID: ["ubah lebar garis atas {title}"],
      it: ["cambio spessore linea sup {title}"],
      ja: ["{title}の上昇ラインの幅の変更"],
      ko: ["{title} 업 라인 너비 바꾸기"],
      ms_MY: ["tukar tebal {title} garisan atas"],
      nl_NL: "change {title} up line width",
      pl: ["zmień szerokość linii wzrostowej dla {title}"],
      pt: ["alterar a largura da linha superior de {title}"],
      ro: "change {title} up line width",
      ru: ["изменение толщины верхней линии: {title}"],
      sv: ["ändra övre linjebredd för {title}"],
      th: ["เปลี่ยนความกว้าง {title} เส้นขาขึ้น"],
      tr: ["{title} üst çizgi genişliğini değiştir"],
      vi: ["điều chỉnh độ rộng đường trên {title}"],
      zh: ["更改{title}向上线条宽度"],
      zh_TW: ["更改{title}向上線條寬度"]
    };
  },
  25253: function _(e) {
    e.exports = {
      ar: ["تغيير لون الخط العلوي {title}"],
      ca_ES: ["canvia el color de la línia superior de {title}"],
      cs: "change {title} up line color",
      de: ["{title} Farbe der Aufwärtslinie ändern"],
      el: "change {title} up line color",
      en: "change {title} up line color",
      es: ["cambiar el color de la línea superior de {title}"],
      fa: "change {title} up line color",
      fr: ["changer la couleur de la ligne du haut de {title}"],
      he_IL: ["שנה את צבע הקו העליון של {title}"],
      hu_HU: "change {title} up line color",
      id_ID: ["ubah warna garis atas {title}"],
      it: ["cambio colore linea sup {title}"],
      ja: ["{title}の上昇ラインの色の変更"],
      ko: ["{title} 업 라인 컬러 바꾸기"],
      ms_MY: ["tukar warna {title} garisan atas"],
      nl_NL: "change {title} up line color",
      pl: ["zmień kolor linii wzrostowej dla {title}"],
      pt: ["alterar a cor da linha superior de {title}"],
      ro: "change {title} up line color",
      ru: ["изменение цвета верхней линии: {title}"],
      sv: ["ändra övre linjefärg för {title}"],
      th: ["เปลี่ยนสี {title} เส้นขาขึ้น"],
      tr: ["{title} üst çizgi rengini değiştir"],
      vi: ["điều chỉnh hiển thị đường trên {title}"],
      zh: ["更改{title}向上线条颜色"],
      zh_TW: ["更改{title}向上線條顏色"]
    };
  },
  58003: function _(e) {
    e.exports = {
      ar: ["تغيير نمط الخط العلوي {title}"],
      ca_ES: ["canvia l'estil de la línia superior de {title}"],
      cs: "change {title} up line style",
      de: ["{title} Stil der Aufwärtslinie ändern"],
      el: "change {title} up line style",
      en: "change {title} up line style",
      es: ["cambiar el estilo de la línea superior de {title}"],
      fa: "change {title} up line style",
      fr: ["changer le style de la ligne du haut de {title}"],
      he_IL: ["שנה את סגנון הקו העליון של {title}"],
      hu_HU: "change {title} up line style",
      id_ID: ["ubah corak garis atas {title}"],
      it: ["cambio stile linea sup {title}"],
      ja: ["{title}の上昇ラインのスタイルの変更"],
      ko: ["{title} 업 라인 스타일 바꾸기"],
      ms_MY: ["tukar gaya {title} garisan atas"],
      nl_NL: "change {title} up line style",
      pl: ["zmień styl linii wzrostowej dla {title}"],
      pt: ["alterar o estilo da linha superior de {title}"],
      ro: "change {title} up line style",
      ru: ["изменение стиля верхней линии: {title}"],
      sv: ["ändra övre linjestil för {title}"],
      th: ["เปลี่ยนรูปแบบ {title} เส้นขาขึ้น"],
      tr: ["{title} üst çizgi stilini değiştir"],
      vi: ["điều chỉnh kiểu đường trên {title}"],
      zh: ["更改{title}向上线条样式"],
      zh_TW: ["更改{title}向上線條樣式"]
    };
  },
  18567: function _(e) {
    e.exports = {
      ar: ["تغيير خاصية {propertyName}"],
      ca_ES: ["cnavia la propietat de {propertyName}"],
      cs: "change {propertyName} property",
      de: ["Eigenschaft {propertyName} ändern"],
      el: "change {propertyName} property",
      en: "change {propertyName} property",
      es: ["cambiar la propiedad de {propertyName}"],
      fa: "change {propertyName} property",
      fr: ["changer la propriété de {propertyName}"],
      he_IL: ["שנה את המאפיין {propertyName}"],
      hu_HU: "change {propertyName} property",
      id_ID: ["ubah properti {propertyName}"],
      it: ["cambio proprietà {propertyName}"],
      ja: ["{propertyName}のプロパティの変更"],
      ko: ["{propertyName} 속성 변경"],
      ms_MY: ["tukar {propertyName} sifat"],
      nl_NL: "change {propertyName} property",
      pl: ["zmień właściwość {propertyName}"],
      pt: ["alterar propriedade {propertyName}"],
      ro: "change {propertyName} property",
      ru: ["изменение свойств {propertyName}"],
      sv: ["ändra egenskapen {propertyName}"],
      th: ["เปลี่ยนคุณสมบัติ {propertyName}"],
      tr: ["{propertyName} özelliğini değiştir"],
      vi: ["thay đổi thuộc tính {propertyName}"],
      zh: ["更改{propertyName}属性"],
      zh_TW: ["更改{propertyName}屬性"]
    };
  },
  72223: function _(e) {
    e.exports = {
      ar: ["نقل الرسومات"],
      ca_ES: ["moure dibuixos"],
      cs: "move drawings",
      de: ["Zeichnungen verschieben"],
      el: "move drawings",
      en: "move drawings",
      es: ["mover dibujos"],
      fa: "move drawings",
      fr: ["déplacer les dessins"],
      he_IL: ["העבר שרטוטים"],
      hu_HU: "move drawings",
      id_ID: ["Pindahkan gambar"],
      it: ["spostamento disegni"],
      ja: ["描画を移動"],
      ko: ["드로윙 옮기기"],
      ms_MY: ["gerakkan lukisan"],
      nl_NL: "move drawings",
      pl: ["przenieś rysunki"],
      pt: ["mover desenhos"],
      ro: "move drawings",
      ru: ["перемещение объектов рисования"],
      sv: ["fler ritningar"],
      th: ["เลื่อนภาพวาด"],
      tr: ["çizimleri taşı"],
      vi: ["di chuyển hình vẽ"],
      zh: ["移动绘图"],
      zh_TW: ["移動繪圖"]
    };
  }
}]);