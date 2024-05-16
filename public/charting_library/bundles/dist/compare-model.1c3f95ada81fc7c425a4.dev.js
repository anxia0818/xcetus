"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[7271], {
  18429: function _(e, t, s) {
    "use strict";

    s.d(t, {
      SEPARATOR_PREFIX: function SEPARATOR_PREFIX() {
        return o;
      },
      isSeparatorItem: function isSeparatorItem() {
        return r;
      }
    });
    var o = "###";

    function r(e) {
      return e.startsWith(o);
    }
  },
  3685: function _(e, t, s) {
    "use strict";

    function o() {
      var e, t, s;
      return null !== (s = null === (t = null === (e = window.configurationData) || void 0 === e ? void 0 : e.exchanges) || void 0 === t ? void 0 : t.map(function (e) {
        return _objectSpread({}, e, {
          country: "",
          providerId: "",
          flag: ""
        });
      })) && void 0 !== s ? s : [];
    }

    s.d(t, {
      getExchanges: function getExchanges() {
        return o;
      }
    });
  },
  58442: function _(e, t, s) {
    "use strict";

    s.d(t, {
      QualifiedSources: function QualifiedSources() {
        return o;
      },
      qualifyProName: function qualifyProName() {
        return i;
      }
    });
    var o,
        r = s(50151),
        n = s(14483);
    s(81319);

    function i(e) {
      return e;
    }

    !function (e) {
      function t(e) {
        return e.pro_name;
      }

      function s(e) {
        {
          var _t = n.enabled("pay_attention_to_ticker_not_symbol") ? e.ticker : e.full_name;

          return (0, r.ensureDefined)(_t);
        }
      }

      e.fromQuotesSnapshot = function (e) {
        return "error" === e.status ? e.symbolname : e.values.pro_name;
      }, e.fromQuotesResponse = function (e) {
        var s = e.values,
            o = e.symbolname,
            r = e.status;
        return "error" === r && o ? o : t(s);
      }, e.fromQuotes = t, e.fromSymbolSearchResult = function (e, t) {
        {
          var _ref = null != t ? t : e,
              _s = _ref.ticker,
              _o = _ref.full_name;

          return n.enabled("pay_attention_to_ticker_not_symbol") ? (0, r.ensureDefined)(null != _s ? _s : _o) : (0, r.ensureDefined)(_o);
        }
      }, e.fromSymbolInfo = s, e.fromSymbolMessage = function (e, t) {
        return "symbol_resolved" === t.method ? s(t.params[1]) : e;
      };
    }(o || (o = {}));
  },
  20882: function _(e, t, s) {
    "use strict";

    s.d(t, {
      createSearchSources: function createSearchSources() {
        return a;
      },
      filterSearchSources: function filterSearchSources() {
        return n;
      },
      isAllSearchSourcesSelected: function isAllSearchSourcesSelected() {
        return r;
      },
      splitSearchSourcesByGroup: function splitSearchSourcesByGroup() {
        return i;
      }
    });
    var o = [];

    function r(e) {
      return "" === e.value();
    }

    function n(e, t) {
      return e.filter(function (e) {
        return e.includes(t);
      });
    }

    function i(e) {
      var t = new Map();
      e.forEach(function (e) {
        t.has(e.group()) ? t.get(e.group()).push(e) : t.set(e.group(), [e]);
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = t.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _e2 = _step.value;
          _e2[0].group() !== ExchangeGroup.NorthAmerica && _e2.sort(function (e, t) {
            return e.name().toLowerCase() > t.name().toLowerCase() ? 1 : -1;
          });
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

      return new Map(_toConsumableArray(t.entries()).sort(function (_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 1),
            e = _ref4[0];

        var _ref5 = _slicedToArray(_ref3, 1),
            t = _ref5[0];

        return o.indexOf(e) - o.indexOf(t);
      }));
    }

    function a(e, t) {
      return t.map(function (t) {
        return new e(t);
      });
    }
  },
  81319: function _(e, t, s) {
    "use strict";

    s.d(t, {
      exchangeSelectDisabled: function exchangeSelectDisabled() {
        return h;
      },
      getAllSymbolTypesValue: function getAllSymbolTypesValue() {
        return u;
      },
      getAvailableSearchSources: function getAvailableSearchSources() {
        return l;
      },
      getAvailableSymbolTypes: function getAvailableSymbolTypes() {
        return d;
      },
      getDefaultSearchSource: function getDefaultSearchSource() {
        return c;
      },
      getSymbolFullName: function getSymbolFullName() {
        return a;
      },
      isSeparateSymbolSearchTabs: function isSeparateSymbolSearchTabs() {
        return m;
      }
    });
    var o = s(44352),
        r = s(20882);

    var n =
    /*#__PURE__*/
    function () {
      function n(e) {
        _classCallCheck(this, n);

        this._exchange = e;
      }

      _createClass(n, [{
        key: "value",
        value: function value() {
          return this._exchange.value;
        }
      }, {
        key: "name",
        value: function name() {
          return (0, r.isAllSearchSourcesSelected)(this) ? o.t(null, void 0, s(64498)) : this._exchange.name;
        }
      }, {
        key: "description",
        value: function description() {
          return this._exchange.desc;
        }
      }, {
        key: "country",
        value: function country() {
          return this._exchange.country;
        }
      }, {
        key: "providerId",
        value: function providerId() {
          return this._exchange.providerId;
        }
      }, {
        key: "group",
        value: function group() {
          return this._exchange.group;
        }
      }, {
        key: "includes",
        value: function includes(e) {
          return function (e, t) {
            var s = t.toLowerCase(),
                o = e.name,
                r = e.desc,
                n = e.searchTerms;
            return o.toLowerCase().includes(s) || r.toLowerCase().includes(s) || void 0 !== n && n.some(function (e) {
              return e.toLowerCase().includes(s);
            });
          }(this._exchange, e);
        }
      }, {
        key: "getRequestExchangeValue",
        value: function getRequestExchangeValue() {
          return this._exchange.value;
        }
      }, {
        key: "getRequestCountryValue",
        value: function getRequestCountryValue() {}
      }]);

      return n;
    }();

    var i = s(3685);

    function a(e) {
      if (e.fullName) return e.fullName;
      var t;
      return t = e.prefix || e.exchange ? (e.prefix || e.exchange) + ":" + e.name : e.name, t.replace(/<\/?[^>]+(>|$)/g, "");
    }

    function c() {
      var e = l();
      return e.find(r.isAllSearchSourcesSelected) || e[0] || null;
    }

    function l() {
      return (0, r.createSearchSources)(n, (0, i.getExchanges)());
    }

    function d() {
      return window.ChartApiInstance.supportedSymbolsTypes();
    }

    function u() {
      return "";
    }

    function h(e) {
      return !(!m || "" !== e);
    }

    var m = !1;
  },
  56217: function _(e, t, s) {
    "use strict";

    s.r(t), s.d(t, {
      CompareModel: function CompareModel() {
        return I;
      }
    });
    var o = s(50151),
        r = s(14483),
        n = s(19171),
        i = s(27856),
        a = s(97145),
        c = s(46148),
        l = s(64063),
        d = s(8561),
        u = s(3685),
        h = s(58442);
    new Set(r.enabled("widget") ? ["pro_name", "short_name", "description", "exchange", "type", "country_code", "provider_id", "typespecs"] : ["pro_name", "short_name", "description", "exchange", "type", "country_code", "provider_id", "typespecs", "logoid", "currency-logoid", "base-currency-logoid"]);
    var m = (0, u.getExchanges)(),
        y = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = m[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _e7 = _step2.value;
        y[_e7.value] = {
          country: _e7.country,
          providerId: _e7.providerId
        };
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

    var S = s(77248);

    function _(e) {
      return e instanceof l.study_Overlay || e instanceof d.StudyCompare;
    }

    function p(e, t, s) {
      var o = h.QualifiedSources.fromSymbolInfo(e),
          r = function (e) {
        if (!e) return;

        var _e$split = e.split(":"),
            _e$split2 = _slicedToArray(_e$split, 2),
            t = _e$split2[0],
            s = _e$split2[1];

        return s && t && y[t] ? y[t] : void 0;
      }(o),
          n = {
        id: (null == s ? void 0 : s.id()) || o,
        symbol: o,
        checked: t,
        title: e.name,
        description: e.description,
        exchangeName: e.exchange,
        country: null == r ? void 0 : r.country,
        providerId: null == r ? void 0 : r.providerId,
        marketType: e.type,
        study: s,
        isYield: (0, S.isYield)(e)
      };

      {
        var _t2 = e;
        _t2.logo_urls && _t2.logo_urls.length && (_t2.logo_urls.length > 1 ? (n.baseCurrencyLogoId = _t2.logo_urls[0], n.currencyLogoId = _t2.logo_urls[1]) : n.logoId = _t2.logo_urls[0]), _t2.exchange_logo && (n.providerId = _t2.exchange_logo);
      }
      return n;
    }

    function f(e, t, s, o) {
      return {
        id: void 0 !== s ? s.id() : e,
        symbol: e,
        checked: t,
        title: e,
        study: s,
        description: o
      };
    }

    var g = s(56840),
        b = s(76422),
        v = s(18429);

    var I =
    /*#__PURE__*/
    function () {
      function I(e) {
        var _this = this;

        _classCallCheck(this, I);

        this._contentItemList = new a.WatchedValue([]), this._checkedSymbols = new Map(), this._recentLength = 10, this._isDataReady = new a.WatchedValue(!1), this._highlightedSymbol = new a.WatchedValue(null), this._defaultSymbolsDescriptions = new Map(), this._idToStudyMap = new Map(), this._chartSession = null, this._recentSymbolsEnabled = r.enabled("compare_recent_symbols_enabled"), this._preventHandleSourcesChange = !0, this.removeStudy = function (e) {
          var t = e.symbol,
              s = e.study;
          if (!s) return;

          _this._chartWidget.model().removeSource(s, !1);

          var o = _this._checkedSymbols.get(t);

          o && o.length > 1 ? _this._removeStudyIdFromCheckedSymbols(t, s.id()) : _this._checkedSymbols["delete"](t), _this._updateContentItemList(_this._contentItemList.value(), !0);
        }, this._getResolveSymbolPromise = function (e, t) {
          return new Promise(function (s) {
            var r = (0, o.ensureNotNull)(_this._chartSession).resolveSymbol((0, n.makeNextSymbolId)(), (0, i.encodeExtendedSymbolOrGetSimpleSymbolString)({
              symbol: e
            }), s);
            t && t.set(e, r);
          });
        }, this._chartWidget = e.activeChartWidget.value(), this._chartSession = this._chartWidget.model().model().chartApi();

        var t = new Set(this._loadRecent().reverse()),
            s = new Set(),
            c = new Set(),
            l = this._chartWidget.model().model().dataSources().filter(_),
            d = l.map(function (e) {
          var t = e.symbolInfo();
          if (t) return Promise.resolve(h.QualifiedSources.fromSymbolInfo(t));
          var s = e.symbol();
          return (0, h.qualifyProName)(s);
        });

        Promise.all(d).then(function (e) {
          var o = e.map(function (e, t) {
            return l[t];
          });
          e.forEach(function (e, r) {
            var n = o[r],
                i = n.id();
            _this._addStudyIdToCheckedSymbols(e, i), _this._idToStudyMap.set(i, n), t.has(e) ? s.add(e) : c.add(e);
          });
          var r = Array.from(t).filter(function (e) {
            return _this._checkedSymbols.has(e);
          }).reduce(function (e, t) {
            return s.has(t) && e.push(t), e;
          }, []).concat(Array.from(c)),
              n = Array.from(t);

          if (_this._recentSymbolsEnabled && n.length < _this._recentLength) {
            var _e3;

            _e3 = [], _this._chartWidget.compareSymbols() && _this._chartWidget.compareSymbols().forEach(function (t) {
              _e3.push((0, h.qualifyProName)(t.symbol)), _this._defaultSymbolsDescriptions.set(t.symbol, t.title);
            });

            var _t3 = [].concat(_toConsumableArray(n), _toConsumableArray(_e3));

            r.push.apply(r, _toConsumableArray(_t3));
          } else r.push.apply(r, _toConsumableArray(n));

          var i = Array.from(new Set(r));
          {
            var _e4 = new Map(),
                _t4 = i.map(function (t) {
              return _this._getResolveSymbolPromise(t, _e4);
            });

            Promise.all(_t4).then(function (t) {
              return _this._handleInitProcess(r, function (s) {
                var o = _e4.get(s);

                return t.find(function (e) {
                  return e.params[0] === o;
                });
              }, function (e, t) {
                return h.QualifiedSources.fromSymbolMessage(t, e);
              }, function (e, t, s, o) {
                return "symbol_resolved" === e.method ? p(e.params[1], s, o) : f(t, s, o, _this._getSymbolDescription(t));
              });
            });
          }
        });
      }

      _createClass(I, [{
        key: "chartModel",
        value: function chartModel() {
          return this._chartWidget.model().model();
        }
      }, {
        key: "comparableOnSameScale",
        value: function comparableOnSameScale(e) {
          return this._chartWidget.model().model().mainSeries().isYield() && Boolean(e.isYield);
        }
      }, {
        key: "handleSourcesChange",
        value: function handleSourcesChange() {
          var _this2 = this;

          if (this._preventHandleSourcesChange) return;
          var e = this.chartModel().dataSources().filter(_),
              t = new Set(e.map(function (e) {
            return e.id();
          }));
          Array.from(t).forEach(function (e) {
            if (!_this2._checkedStudiesIds().has(e)) {
              var _t5 = _this2.chartModel().dataSourceForId(e) || null;

              if (null !== _t5 && _(_t5)) {
                var _t6 = _this2._getContentItemByStudyId(e);

                if (!_t6) return;
                _this2._addStudyIdToCheckedSymbols(_t6.symbol, e), _this2._saveRecent(_t6.symbol), _this2._updateContentItemList(_this2._contentItemList.value(), !0);
              }
            }
          });
          Array.from(this._checkedStudiesIds()).forEach(function (e) {
            if (!t.has(e)) {
              var _t7 = _this2._getContentItemByStudyId(e);

              if (!_t7) return;

              var _s2 = _this2._checkedSymbols.get(_t7.symbol);

              _s2 && _s2.length > 1 ? _this2._removeStudyIdFromCheckedSymbols(_t7.symbol, e) : _this2._checkedSymbols["delete"](_t7.symbol), _this2._updateContentItemList(_this2._contentItemList.value(), !0);
            }
          });
        }
      }, {
        key: "studies",
        value: function studies() {
          return this._contentItemList.readonly();
        }
      }, {
        key: "isDataReady",
        value: function isDataReady() {
          return this._isDataReady.readonly();
        }
      }, {
        key: "highlightedSymbol",
        value: function highlightedSymbol() {
          return this._highlightedSymbol.readonly();
        }
      }, {
        key: "applyStudy",
        value: function applyStudy(e, t, s) {
          var _this3 = this;

          (function () {
            var o = _this3._chartWidget;
            if (!o) return;
            if (r = e, (0, v.isSeparatorItem)(r)) return;
            var r;
            var n;

            switch (t) {
              case c.CompareOption.SamePctScale:
                n = o.addCompareAsOverlay(e, s);
                break;

              case c.CompareOption.SameScale:
                n = o.addCompareAsOverlay(e, s, !0);
                break;

              case c.CompareOption.NewPriceScale:
                n = o.addOverlayStudy(e, !0, s);
                break;

              case c.CompareOption.NewPane:
                n = o.addOverlayStudy(e, !1, s);
            }

            Promise.all([_this3._getResolveSymbolPromise(e), n]).then(function (t) {
              return _this3._handleApplyProcess(t, function (t) {
                return h.QualifiedSources.fromSymbolMessage(e, t);
              }, function (e, t, s) {
                return "symbol_resolved" === e.method ? p(e.params[1], !0, s) : f(t, !0, s);
              });
            }), b.emit("add_compare");
          })();
        }
      }, {
        key: "_snapshoter",
        value: function _snapshoter() {
          throw new Error("not implemented");
        }
      }, {
        key: "_handleApplyProcess",
        value: function _handleApplyProcess(e, t, s) {
          var _e5 = _slicedToArray(e, 2),
              o = _e5[0],
              r = _e5[1];

          if (!o || null === r) return;
          var n = r.id(),
              i = t(o),
              a = s(o, i, r);
          this._saveRecent(i), this._addStudyIdToCheckedSymbols(i, n), this._showNewItem(a, i, n);
        }
      }, {
        key: "_handleInitProcess",
        value: function _handleInitProcess(e, t, s, o) {
          var _this4 = this;

          var r = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            var _loop = function _loop() {
              var n = _step3.value;
              var e = t(n);
              if (!e) return "continue";

              var i = s(e, n),
                  a = _this4._checkedSymbols.get(i),
                  c = -1 !== r.findIndex(function (e) {
                return e.symbol === i;
              });

              if (void 0 === a || c) _this4._recentSymbolsEnabled && r.push(o(e, i, !1));else {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = a[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _t8 = _step4.value;
                    r.push(o(e, i, !0, _this4._idToStudyMap.get(_t8)));
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
            };

            for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _ret = _loop();

              if (_ret === "continue") continue;
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

          this._updateContentItemList(r), this._isDataReady.setValue(!0);
        }
      }, {
        key: "_showNewItem",
        value: function _showNewItem(e, t, s) {
          var _this5 = this;

          var o = this._contentItemList.value().map(this._updateChecked, this);

          o.unshift(e), this._recentSymbolsEnabled && o.unshift(_objectSpread({}, e, {
            id: t,
            study: void 0,
            checked: !1
          })), this._updateContentItemList(o), this._highlightedSymbol.setValue(s), setTimeout(function () {
            return _this5._highlightedSymbol.setValue(null);
          }, 500);
        }
      }, {
        key: "_addStudyIdToCheckedSymbols",
        value: function _addStudyIdToCheckedSymbols(e, t) {
          var s = this._checkedSymbols.get(e) || [];

          this._checkedSymbols.set(e, [].concat(_toConsumableArray(s), [t]));
        }
      }, {
        key: "_removeStudyIdFromCheckedSymbols",
        value: function _removeStudyIdFromCheckedSymbols(e, t) {
          var s = this._checkedSymbols.get(e);

          if (s) {
            var _o2 = s.indexOf(t);

            s.splice(_o2, 1), this._checkedSymbols.set(e, s);
          }
        }
      }, {
        key: "_updateChecked",
        value: function _updateChecked(e) {
          var t;

          var s = this._checkedSymbols.get(e.symbol),
              o = null === (t = e.study) || void 0 === t ? void 0 : t.id();

          return o ? _objectSpread({}, e, {
            checked: Boolean(s && s.includes(o))
          }) : e;
        }
      }, {
        key: "_updateContentItemList",
        value: function _updateContentItemList(e, t) {
          var s = t ? e.map(this._updateChecked, this) : e,
              o = s.filter(function (e) {
            return e.checked;
          });

          if (this._recentSymbolsEnabled) {
            var _e6 = new Set(),
                _t9 = s.reduce(function (t, s) {
              return s.checked || _e6.has(s.symbol) || (t.push(s), _e6.add(s.symbol)), t;
            }, []).slice(0, this._recentLength);

            this._contentItemList.setValue(o.concat(_t9));
          } else this._contentItemList.setValue(o);
        }
      }, {
        key: "_checkedStudiesIds",
        value: function _checkedStudiesIds() {
          var _ref6;

          var e = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(Array.from(this._checkedSymbols.values())));

          return new Set(e);
        }
      }, {
        key: "_getContentItemByStudyId",
        value: function _getContentItemByStudyId(e) {
          var t = this._contentItemList.value(),
              s = t.findIndex(function (t) {
            return t.study && t.study.id() === e;
          });

          return t[s];
        }
      }, {
        key: "_loadRecent",
        value: function _loadRecent() {
          if (!this._recentSymbolsEnabled) return [];
          return g.getJSON("CompareDialog.recent", []).filter(function (e) {
            return "string" == typeof e;
          });
        }
      }, {
        key: "_saveRecent",
        value: function _saveRecent(e) {
          if (!this._recentSymbolsEnabled) return;
          var t = new Set(this._loadRecent());
          t.has(e) && t["delete"](e), t.add(e), g.setJSON("CompareDialog.recent", Array.from(t).slice(-this._recentLength));
        }
      }, {
        key: "_getSymbolDescription",
        value: function _getSymbolDescription(e) {
          var t;
          return this._defaultSymbolsDescriptions.size && null !== (t = this._defaultSymbolsDescriptions.get(e)) && void 0 !== t ? t : "";
        }
      }]);

      return I;
    }();

    I._snapshoter = null;
  },
  46148: function _(e, t, s) {
    "use strict";

    var o;
    s.d(t, {
      CompareOption: function CompareOption() {
        return o;
      }
    }), function (e) {
      e[e.SamePctScale = 0] = "SamePctScale", e[e.NewPriceScale = 1] = "NewPriceScale", e[e.NewPane = 2] = "NewPane", e[e.SameScale = 3] = "SameScale";
    }(o || (o = {}));
  },
  64498: function _(e) {
    e.exports = {
      ar: ["كل المصادر"],
      ca_ES: ["Totes les fonts"],
      cs: "All sources",
      de: ["Alle Quellen"],
      el: "All sources",
      en: "All sources",
      es: ["Todas las fuentes"],
      fa: "All sources",
      fr: ["Toutes les sources"],
      he_IL: ["כל המקורות"],
      hu_HU: "All sources",
      id_ID: ["Seluruh sumber"],
      it: ["Tutte le fonti"],
      ja: ["すべての提供元"],
      ko: ["모든 자료"],
      ms_MY: ["Kesemua sumber"],
      nl_NL: "All sources",
      pl: ["Wszystkie źródła"],
      pt: ["Todas as fontes"],
      ro: "All sources",
      ru: ["Все источники"],
      sv: ["Samtliga källor"],
      th: ["แหล่งที่มาทั้งหมด"],
      tr: ["Tüm kaynaklar"],
      vi: ["Tất cả các nguồn"],
      zh: ["全部来源"],
      zh_TW: ["全部來源"]
    };
  }
}]);