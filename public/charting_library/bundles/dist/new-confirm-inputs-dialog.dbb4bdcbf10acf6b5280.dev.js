"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3030], {
  31988: function _(t) {
    t.exports = {
      separator: "separator-EI7Qsb2Q",
      scrollable: "scrollable-EI7Qsb2Q"
    };
  },
  29638: function _(t, e, i) {
    "use strict";

    i.r(e), i.d(e, {
      ConfirmInputsDialogRenderer: function ConfirmInputsDialogRenderer() {
        return S;
      }
    });
    var r = i(962),
        n = i(50959),
        o = i(44352),
        s = i(50182),
        p = i(59064),
        u = i(86656),
        c = i(39828),
        a = i(57898),
        l = i(49483),
        h = i(31988);

    function d(t) {
      var e = t.title,
          r = t.confirmInputs,
          d = t.inputsProperty,
          S = t.studyMetaInfo,
          y = t.model,
          D = t.confirmInputsType,
          f = t.onCancel,
          m = t.onSubmit,
          T = t.onClose,
          I = t.onStudyInputChange,
          _ref = (0, n.useState)(!0),
          _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          g = _ref2[1],
          k = (0, n.useMemo)(function () {
        var t = new a.Delegate();
        return {
          isInputsStudy: !0,
          symbolsResolved: function symbolsResolved() {
            return t;
          },
          resolvedSymbolInfoBySymbol: function resolvedSymbolInfoBySymbol() {
            return null;
          },
          tempProperties: d
        };
      }, []),
          v = (0, n.useRef)(null),
          _ref3 = (0, n.useState)(C()),
          _ref4 = _slicedToArray(_ref3, 2),
          z = _ref4[0],
          b = _ref4[1];

      return (0, n.useEffect)(function () {
        if (!l.CheckMobile.any() && _ && "symbol" === D && v.current) {
          var _t = v.current.querySelector("input");

          _t && _t.focus();
        }
      }, [_]), n.createElement(s.AdaptiveConfirmDialog, {
        dataName: "confirm-inputs-dialog",
        title: e,
        isOpened: _,
        onSubmit: function onSubmit() {
          m(d.state().inputs), E();
        },
        onCancel: f,
        onClickOutside: E,
        onClose: E,
        render: function render() {
          return n.createElement(n.Fragment, null, n.createElement("div", {
            className: h.separator
          }), n.createElement(u.TouchScrollContainer, {
            className: h.scrollable,
            onScroll: w
          }, n.createElement(c.InputsTabContent, {
            reference: v,
            property: d,
            studyMetaInfo: S,
            model: y,
            study: k,
            inputs: r,
            onStudyInputChange: M
          })));
        },
        defaultActionOnClose: "none",
        submitButtonText: o.t(null, void 0, i(73226)),
        submitButtonDisabled: z,
        submitOnEnterKey: !1
      });

      function w() {
        p.globalCloseDelegate.fire();
      }

      function E() {
        g(!1), T();
      }

      function C() {
        var _d$state = d.state(),
            t = _d$state.inputs;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = r[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _e2 = _step4.value;
            if ("symbol" === _e2.type && !_e2.optional && "" === t[_e2.id]) return !0;
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

        return !1;
      }

      function M(t, e) {
        null == I || I(t, e), b(C());
      }
    }

    var S =
    /*#__PURE__*/
    function () {
      function S(t, e, i, n, o, s, p, u, c) {
        var _this = this;

        _classCallCheck(this, S);

        this._container = document.createElement("div"), this._handleClose = function () {
          r.unmountComponentAtNode(_this._container), _this._onClose();
        }, this._title = t, this._confirmInputs = e, this._model = s, this._confirmInputsType = n, this._studyMetaInfo = o, this._onSubmit = p, this._onClose = u, this._onStudyInputChange = c, this._inputsProperty = i;
      }

      _createClass(S, [{
        key: "show",
        value: function show() {
          r.render(n.createElement(d, {
            title: this._title,
            confirmInputs: this._confirmInputs,
            inputsProperty: this._inputsProperty,
            studyMetaInfo: this._studyMetaInfo,
            model: this._model,
            confirmInputsType: this._confirmInputsType,
            onSubmit: this._onSubmit,
            onCancel: function onCancel() {},
            onClose: this._handleClose,
            onStudyInputChange: this._onStudyInputChange
          }), this._container);
        }
      }]);

      return S;
    }();
  },
  73339: function _(t, e, i) {
    "use strict";

    i.r(e), i.d(e, {
      selectInputValuesOnChart: function selectInputValuesOnChart() {
        return u;
      }
    });
    var r = i(50151),
        n = i(48891),
        o = i(44352),
        s = i(64420),
        p = i(88348);
    n.colorsPalette["color-cold-gray-500"];

    function u(t, e, n, u, c) {
      var a, l, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _t2, h, d, S, y;

      return regeneratorRuntime.async(function u$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              y = function _ref8(t) {
                var e;
                return c.filter(function (e) {
                  return e.inline === t;
                }).forEach(function (t) {
                  t.tooltip && (e = t.tooltip);
                }), e;
              };

              S = function _ref7(e, i, o, s, u) {
                var c, l;
                return regeneratorRuntime.async(function S$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return regeneratorRuntime.awrap(t.requestSelectPoint({
                          pointType: i,
                          pane: a,
                          lineColor: void 0,
                          selectPointMode: p.SelectPointMode.Study
                        }, o));

                      case 2:
                        c = _context3.sent;
                        void 0 === a && (a = c.pane);
                        l = n.childs().inputs;
                        l && (s && (0, r.ensureDefined)(l.child(s)).setValue(1e3 * (c.point.time || 0)), u && (0, r.ensureDefined)(l.child(u)).setValue(c.point.price));

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              };

              d = function _ref6(t) {
                var e, r, n, s, p;
                return regeneratorRuntime.async(function d$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e = "time" === t.type, r = e ? "time" : "price", n = function () {
                          if (t.inline) {
                            var _e6 = y(t.inline);

                            if (_e6) return _e6;
                          }

                          if (t.tooltip) return t.tooltip;
                          var r = t.name ? o.t(null, {
                            replace: {
                              inputTitle: t.name,
                              studyShortDescription: u
                            }
                          }, i(18571)) : o.t(null, {
                            replace: {
                              studyShortDescription: u
                            }
                          }, i(42917)),
                              n = t.name ? o.t(null, {
                            replace: {
                              inputTitle: t.name,
                              studyShortDescription: u
                            }
                          }, i(58552)) : o.t(null, {
                            replace: {
                              studyShortDescription: u
                            }
                          }, i(6083));
                          return e ? r : n;
                        }(), s = e ? t.id : void 0, p = e ? void 0 : t.id;
                        _context2.next = 3;
                        return regeneratorRuntime.awrap(S(t, r, n, s, p));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                });
              };

              h = function _ref5(t) {
                var _e3, _r, _n2, _s2, _p, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, _e4, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value3, _e5;

                return regeneratorRuntime.async(function h$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(0, s.isGroup)(t)) {
                          _context.next = 81;
                          break;
                        }

                        if (!(0, s.isInputInlines)(t)) {
                          _context.next = 45;
                          break;
                        }

                        _e3 = function (t) {
                          if (2 !== t.length || t[0].type === t[1].type) return null;
                          return "price" === t[0].type ? {
                            price: t[0],
                            time: t[1]
                          } : {
                            price: t[1],
                            time: t[0]
                          };
                        }(t.children);

                        if (!_e3) {
                          _context.next = 9;
                          break;
                        }

                        _r = _e3.time, _n2 = _e3.price, _s2 = _r.inline ? o.t(null, {
                          replace: {
                            inputInline: _r.inline,
                            studyShortDescription: u
                          }
                        }, i(59877)) : o.t(null, {
                          replace: {
                            studyShortDescription: u
                          }
                        }, i(80481)), _p = y(t.id);
                        _context.next = 7;
                        return regeneratorRuntime.awrap(S(t, "all", null != _p ? _p : _s2, _r.id, _n2.id));

                      case 7:
                        _context.next = 43;
                        break;

                      case 9:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _context.prev = 11;
                        _iterator2 = _asyncIterator(t.children);

                      case 13:
                        _context.next = 15;
                        return regeneratorRuntime.awrap(_iterator2.next());

                      case 15:
                        _step2 = _context.sent;
                        _iteratorNormalCompletion2 = _step2.done;
                        _context.next = 19;
                        return regeneratorRuntime.awrap(_step2.value);

                      case 19:
                        _value2 = _context.sent;

                        if (_iteratorNormalCompletion2) {
                          _context.next = 27;
                          break;
                        }

                        _e4 = _value2;
                        _context.next = 24;
                        return regeneratorRuntime.awrap(d(_e4));

                      case 24:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 13;
                        break;

                      case 27:
                        _context.next = 33;
                        break;

                      case 29:
                        _context.prev = 29;
                        _context.t0 = _context["catch"](11);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                      case 33:
                        _context.prev = 33;
                        _context.prev = 34;

                        if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
                          _context.next = 38;
                          break;
                        }

                        _context.next = 38;
                        return regeneratorRuntime.awrap(_iterator2["return"]());

                      case 38:
                        _context.prev = 38;

                        if (!_didIteratorError2) {
                          _context.next = 41;
                          break;
                        }

                        throw _iteratorError2;

                      case 41:
                        return _context.finish(38);

                      case 42:
                        return _context.finish(33);

                      case 43:
                        _context.next = 79;
                        break;

                      case 45:
                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _context.prev = 47;
                        _iterator3 = _asyncIterator(t.children);

                      case 49:
                        _context.next = 51;
                        return regeneratorRuntime.awrap(_iterator3.next());

                      case 51:
                        _step3 = _context.sent;
                        _iteratorNormalCompletion3 = _step3.done;
                        _context.next = 55;
                        return regeneratorRuntime.awrap(_step3.value);

                      case 55:
                        _value3 = _context.sent;

                        if (_iteratorNormalCompletion3) {
                          _context.next = 63;
                          break;
                        }

                        _e5 = _value3;
                        _context.next = 60;
                        return regeneratorRuntime.awrap(h(_e5));

                      case 60:
                        _iteratorNormalCompletion3 = true;
                        _context.next = 49;
                        break;

                      case 63:
                        _context.next = 69;
                        break;

                      case 65:
                        _context.prev = 65;
                        _context.t1 = _context["catch"](47);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context.t1;

                      case 69:
                        _context.prev = 69;
                        _context.prev = 70;

                        if (!(!_iteratorNormalCompletion3 && _iterator3["return"] != null)) {
                          _context.next = 74;
                          break;
                        }

                        _context.next = 74;
                        return regeneratorRuntime.awrap(_iterator3["return"]());

                      case 74:
                        _context.prev = 74;

                        if (!_didIteratorError3) {
                          _context.next = 77;
                          break;
                        }

                        throw _iteratorError3;

                      case 77:
                        return _context.finish(74);

                      case 78:
                        return _context.finish(69);

                      case 79:
                        _context.next = 83;
                        break;

                      case 81:
                        _context.next = 83;
                        return regeneratorRuntime.awrap(d(t));

                      case 83:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, [[11, 29, 33, 43], [34,, 38, 42], [47, 65, 69, 79], [70,, 74, 78]]);
              };

              l = (0, s.getInputGroups)(e);
              t.model().model();
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context4.prev = 8;
              _iterator = _asyncIterator(l);

            case 10:
              _context4.next = 12;
              return regeneratorRuntime.awrap(_iterator.next());

            case 12:
              _step = _context4.sent;
              _iteratorNormalCompletion = _step.done;
              _context4.next = 16;
              return regeneratorRuntime.awrap(_step.value);

            case 16:
              _value = _context4.sent;

              if (_iteratorNormalCompletion) {
                _context4.next = 24;
                break;
              }

              _t2 = _value;
              _context4.next = 21;
              return regeneratorRuntime.awrap(h(_t2)["catch"](function (t) {
                throw new Error(t);
              }));

            case 21:
              _iteratorNormalCompletion = true;
              _context4.next = 10;
              break;

            case 24:
              _context4.next = 30;
              break;

            case 26:
              _context4.prev = 26;
              _context4.t0 = _context4["catch"](8);
              _didIteratorError = true;
              _iteratorError = _context4.t0;

            case 30:
              _context4.prev = 30;
              _context4.prev = 31;

              if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                _context4.next = 35;
                break;
              }

              _context4.next = 35;
              return regeneratorRuntime.awrap(_iterator["return"]());

            case 35:
              _context4.prev = 35;

              if (!_didIteratorError) {
                _context4.next = 38;
                break;
              }

              throw _iteratorError;

            case 38:
              return _context4.finish(35);

            case 39:
              return _context4.finish(30);

            case 40:
              return _context4.abrupt("return", {
                customSourceId: void 0,
                destPane: a
              });

            case 41:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[8, 26, 30, 40], [31,, 35, 39]]);
    }
  },
  64420: function _(t, e, i) {
    "use strict";

    i.d(e, {
      getInputGroups: function getInputGroups() {
        return s;
      },
      isGroup: function isGroup() {
        return n;
      },
      isInputInlines: function isInputInlines() {
        return o;
      }
    });
    var r = i(50151);

    function n(t) {
      return t.hasOwnProperty("groupType");
    }

    function o(t) {
      return n(t) && "inline" === t.groupType;
    }

    function s(t) {
      var e = [],
          i = new Map(),
          n = new Map();
      return n.set(void 0, new Map()), t.forEach(function (t) {
        var o = t.group,
            s = t.inline;
        if (void 0 !== o || void 0 !== s) {
          if (void 0 !== o) {
            if (void 0 !== s) {
              if (i.has(o)) {
                var _e7 = (0, r.ensureDefined)(i.get(o));

                var u;
                n.has(_e7) ? u = (0, r.ensureDefined)(n.get(_e7)) : (u = new Map(), n.set(_e7, u)), p(t, "inline", s, u, _e7.children);
              } else {
                var _r2 = {
                  id: s,
                  groupType: "inline",
                  children: [t]
                },
                    _p2 = {
                  id: o,
                  groupType: "group",
                  children: [_r2]
                },
                    _u = new Map();

                _u.set(s, _r2), n.set(_p2, _u), i.set(o, _p2), e.push(_p2);
              }
            } else p(t, "group", o, i, e);
          } else {
            var _i2 = (0, r.ensureDefined)(n.get(void 0));

            p(t, "inline", (0, r.ensureDefined)(s), _i2, e);
          }
        } else e.push(t);
      }), e;
    }

    function p(t, e, i, n, o) {
      if (n.has(i)) (0, r.ensureDefined)(n.get(i)).children.push(t);else {
        var _r3 = {
          id: i,
          groupType: e,
          children: [t]
        };
        n.set(i, _r3), o.push(_r3);
      }
    }
  },
  73226: function _(t) {
    t.exports = {
      ar: ["تطبيق"],
      ca_ES: ["Aplicar"],
      cs: ["Použít"],
      de: ["Anwenden"],
      el: ["Εφαρμογή"],
      en: "Apply",
      es: ["Aplicar"],
      fa: ["اعمال"],
      fr: ["Appliquer"],
      he_IL: ["החל"],
      hu_HU: ["Alkalmaz"],
      id_ID: ["Terapkan"],
      it: ["Applica"],
      ja: ["適用"],
      ko: ["적용"],
      ms_MY: ["Gunakan"],
      nl_NL: ["Toepassen"],
      pl: ["Zastosuj"],
      pt: ["Aplicar"],
      ro: "Apply",
      ru: ["Применить"],
      sv: ["Verkställ"],
      th: ["บันทึก"],
      tr: ["Uygula"],
      vi: ["Áp dụng"],
      zh: ["应用"],
      zh_TW: ["套用"]
    };
  },
  59877: function _(t) {
    t.exports = {
      ar: ["تعيين وقت وسعر {inputInline} لـ {studyShortDescription}"],
      ca_ES: ["Establiu l'hora i el preu de {inputInline} per a {studyShortDescription}"],
      cs: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      de: ["Legen Sie die {inputInline} Zeit und den Preis für {studyShortDescription} fest"],
      el: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      en: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      es: ["Establezca la hora y el precio de {inputInline} para {studyShortDescription}"],
      fa: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      fr: ["Définissez l'heure et le prix de {inputInline} pour {studyShortDescription}."],
      he_IL: ["הגדר את הזמן והמחיר של {inputInline} עבור {studyShortDescription}"],
      hu_HU: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      id_ID: ["Menentukan waktu dan harga {inputInline} untuk {studyShortDescription}"],
      it: ["Imposta valori di tempo e prezzo di {inputInline} nello script {studyShortDescription}"],
      ja: ["{studyShortDescription}の{inputInline}に日時と価格を設定"],
      ko: ["{studyShortDescription}에 대한 {inputInline} 시간 및 가격 설정"],
      ms_MY: ["Tetapkan masa {inputInline} dan harga untuk {studyShortDescription}"],
      nl_NL: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
      pl: ["Ustaw czas i cenę „{inputInline}” dla „{studyShortDescription}”"],
      pt: ['Definir o preço e o tempo de "{inputInline}" para "{studyShortDescription}"'],
      ro: ["Set the {inputInline} time and price for {studyShortDescription}"],
      ru: ["Установить время и цену {inputInline} для {studyShortDescription}"],
      sv: ["Ställ in {inputInline} tid och pris för {studyShortDescription}"],
      th: ["กำหนดเวลาและราคา {inputInline} สำหรับ {studyShortDescription}"],
      tr: ["Saat ve fiyatı ayarlama{inputInline} {studyShortDescription}"],
      vi: ["Đặt {inputInline} thời gian và giá cho {studyShortDescription}"],
      zh: ["为{studyShortDescription}设置{inputInline}时间和价格"],
      zh_TW: ["為{studyShortDescription}設定{inputInline}時間和價格"]
    };
  },
  18571: function _(t) {
    t.exports = {
      ar: ["نعيين وقت {inputTitle} لـ {studyShortDescription}"],
      ca_ES: ["Establiu l'hora de {inputTitle} per a {studyShortDescription}"],
      cs: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      de: ["Legen Sie die {inputTitle} Zeit für {studyShortDescription} fest"],
      el: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      en: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      es: ["Establezca la hora de {inputTitle} para {studyShortDescription}"],
      fa: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      fr: ["Définissez {inputTitle} l'heure pour {studyShortDescription}"],
      he_IL: ["הגדר את הזמן {inputTitle} עבור {studyShortDescription}"],
      hu_HU: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      id_ID: ["Menentukan waktu {inputTitle} untuk {studyShortDescription}"],
      it: ["Imposta valore di tempo di {inputTitle} nello script {studyShortDescription}"],
      ja: ["{studyShortDescription}の{inputTitle}に日時を設定"],
      ko: ["{studyShortDescription}에 대한 {inputTitle} 시간 설정"],
      ms_MY: ["Tetapkan masa {inputTitle} dan harga untuk {studyShortDescription}"],
      nl_NL: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
      pl: ["Ustaw czas i cenę „{inputTitle}” dla „{studyShortDescription}”"],
      pt: ['Definir o tempo de "{inputTitle}" para "{studyShortDescription}"'],
      ro: ["Set the {inputTitle} time for {studyShortDescription}"],
      ru: ["Установить время {inputTitle} для {studyShortDescription}"],
      sv: ["Ställ in {inputTitle} pris för {studyShortDescription}"],
      th: ["กำหนดเวลา {inputTitle} สำหรับ {studyShortDescription}"],
      tr: ['"{studyShortDescription}" için "{inputTitle}" zamanını ayarlayın'],
      vi: ["Đặt {inputTitle} thời gian cho {studyShortDescription}"],
      zh: ["为{studyShortDescription}设置{inputTitle}时间"],
      zh_TW: ["為{studyShortDescription}設定{inputTitle}時間"]
    };
  },
  58552: function _(t) {
    t.exports = {
      ar: ["تعيين سعر {inputTitle} لـ {studyShortDescription}"],
      ca_ES: ["Establiu el preu de {inputTitle} per a {studyShortDescription}"],
      cs: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      de: ["Legen Sie den {inputTitle} Preis für {studyShortDescription} fest"],
      el: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      en: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      es: ["Establezca el precio de {inputTitle} para {studyShortDescription}"],
      fa: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      fr: ["Définissez le {inputTitle}prix pour {studyShortDescription}"],
      he_IL: ["הגדר את המחיר {inputTitle} עבור {studyShortDescription}"],
      hu_HU: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      id_ID: ["Menentukan harga {inputTitle} untuk {studyShortDescription}"],
      it: ["Imposta valore di prezzo di {inputTitle} nello script {studyShortDescription}"],
      ja: ["{studyShortDescription}の{inputTitle}に価格を設定"],
      ko: ["{studyShortDescription}에 대한 {inputTitle} 가격 설정"],
      ms_MY: ["Tetapkan harga {inputTitle} untuk {studyShortDescription}"],
      nl_NL: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
      pl: ["Ustaw czas i cenę „{inputTitle} ” dla „{studyShortDescription}”"],
      pt: ['Definir o preço de "{inputTitle}" para "{studyShortDescription}"'],
      ro: ["Set the {inputTitle} price for {studyShortDescription}"],
      ru: ["Установить цену {inputTitle} для {studyShortDescription}"],
      sv: ["Ställ in {inputTitle} pris för {studyShortDescription}"],
      th: ["กำหนดราคา {inputTitle} สำหรับ {studyShortDescription}"],
      tr: ['"{studyShortDescription}" için "{inputTitle}" fiyatını ayarlayın'],
      vi: ["Đặt {inputTitle} giá cho {studyShortDescription}"],
      zh: ["为{studyShortDescription}设置{inputTitle}价格"],
      zh_TW: ["為{studyShortDescription}設定{inputTitle}價格"]
    };
  },
  80481: function _(t) {
    t.exports = {
      ar: ['تعيين وقت وسعر "{studyShortDescription}"'],
      ca_ES: ['Establiu l\'hora i el preu per a "{studyShortDescription}"'],
      cs: 'Set the time and price for "{studyShortDescription}"',
      de: ['Legen Sie die Zeit und den Preis für "{studyShortDescription}" fest'],
      el: 'Set the time and price for "{studyShortDescription}"',
      en: 'Set the time and price for "{studyShortDescription}"',
      es: ['Establezca la hora y el precio para "{studyShortDescription}"'],
      fa: 'Set the time and price for "{studyShortDescription}"',
      fr: ['Fixez l\'heure et le prix pour "{studyShortDescription}"'],
      he_IL: ['הגדר את הזמן והמחיר עבור "{studyShortDescription}"'],
      hu_HU: 'Set the time and price for "{studyShortDescription}"',
      id_ID: ['Menentukan waktu dan harga untuk "{studyShortDescription}"'],
      it: ['Imposta tempo e prezzo per "{studyShortDescription}"'],
      ja: ["{studyShortDescription}に日時と価格を設定"],
      ko: ['"{studyShortDescription}" 에 대한 타임과 프라이스를 셋하시오'],
      ms_MY: ['Tetapkan masa dan harga untuk "{studyShortDescription}"'],
      nl_NL: 'Set the time and price for "{studyShortDescription}"',
      pl: ["Ustaw czas i cenę dla „{studyShortDescription}”"],
      pt: ['Definir o tempo e preço para "{studyShortDescription}"'],
      ro: 'Set the time and price for "{studyShortDescription}"',
      ru: ['Задать время и цену для "{studyShortDescription}"'],
      sv: ['Ställ in tid och pris för "{studyShortDescription}"'],
      th: ['ตั้งเวลาและราคาสำหรับ "{studyShortDescription}"'],
      tr: ['"{studyShortDescription}" için saati ve fiyatı ayarlayın'],
      vi: ['Đặt thời gian và giá cho "{studyShortDescription}"'],
      zh: ["设置“{studyShortDescription}”的时间和价格"],
      zh_TW: ["設定“{studyShortDescription}”的時間和價格"]
    };
  },
  42917: function _(t) {
    t.exports = {
      ar: ['نعيين وقت "{studyShortDescription}"'],
      ca_ES: ['Establiu l\'hora per a "{studyShortDescription}"'],
      cs: 'Set the time for "{studyShortDescription}"',
      de: ['Legen Sie die Zeit für "{studyShortDescription}" fest'],
      el: 'Set the time for "{studyShortDescription}"',
      en: 'Set the time for "{studyShortDescription}"',
      es: ['Establezca la hora para "{studyShortDescription}"'],
      fa: 'Set the time for "{studyShortDescription}"',
      fr: ['Fixez l\'heure pour "{studyShortDescription}"'],
      he_IL: ['הגדר את השעה עבור "{studyShortDescription}"'],
      hu_HU: 'Set the time for "{studyShortDescription}"',
      id_ID: ['Menentukan waktu untuk "{studyShortDescription}"'],
      it: ['Imposta tempo per "{studyShortDescription}"'],
      ja: ['{studyShortDescription}に日時を設定"'],
      ko: ['"{studyShortDescription}" 에 대한 타임을 셋하시오'],
      ms_MY: ['Tetapkan masa untuk "{studyShortDescription}"'],
      nl_NL: 'Set the time for "{studyShortDescription}"',
      pl: ["Ustaw godzinę dla „{studyShortDescription}”"],
      pt: ['Definir o tempo para "{studyShortDescription}"'],
      ro: 'Set the time for "{studyShortDescription}"',
      ru: ['Задать время для "{studyShortDescription}"'],
      sv: ['Ställ in tid för "{studyShortDescription}"'],
      th: ['ตั้งเวลาสำหรับ "{studyShortDescription}"'],
      tr: ['"{studyShortDescription}" için zamanı ayarlayın'],
      vi: ['Đặt thời gian cho "{studyShortDescription}"'],
      zh: ["设置“{studyShortDescription}”的时间"],
      zh_TW: ["設定“{studyShortDescription}”的時間"]
    };
  },
  6083: function _(t) {
    t.exports = {
      ar: ['تعيين سعر "{studyShortDescription}"'],
      ca_ES: ['Establiu el preu per a "{studyShortDescription}"'],
      cs: 'Set the price for "{studyShortDescription}"',
      de: ['Legen Sie den Preis für "{studyShortDescription}" fest'],
      el: 'Set the price for "{studyShortDescription}"',
      en: 'Set the price for "{studyShortDescription}"',
      es: ['Establezca el precio para "{studyShortDescription}"'],
      fa: 'Set the price for "{studyShortDescription}"',
      fr: ['Fixez le prix pour "{studyShortDescription}"'],
      he_IL: ['הגדר את המחיר עבור "{studyShortDescription}"'],
      hu_HU: 'Set the price for "{studyShortDescription}"',
      id_ID: ['Menentukan harga untuk "{studyShortDescription}"'],
      it: ['Imposta prezzo per "{studyShortDescription}"'],
      ja: ['{studyShortDescription}に価格を設定"'],
      ko: ['"{studyShortDescription}" 에 대한 프라이스를 셋하시오'],
      ms_MY: ['Tetapkan harga untuk "{studyShortDescription}"'],
      nl_NL: 'Set the price for "{studyShortDescription}"',
      pl: ["Ustaw cenę dla „{studyShortDescription}”"],
      pt: ['Definir o preço para "{studyShortDescription}"'],
      ro: 'Set the price for "{studyShortDescription}"',
      ru: ['Задать цену для "{studyShortDescription}"'],
      sv: ['Ställ in pris för "{studyShortDescription}"'],
      th: ['กำหนดราคาสำหรับ "{studyShortDescription}"'],
      tr: ['"{studyShortDescription}" için tarih seti'],
      vi: ['Đặt giá cho "{studyShortDescription}"'],
      zh: ["设置“{studyShortDescription}”的价格"],
      zh_TW: ["設定“{studyShortDescription}”的價格"]
    };
  }
}]);