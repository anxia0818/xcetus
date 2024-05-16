"use strict";

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4389], {
  82869: function _(e, t, a) {
    a.r(t), a.d(t, {
      copyToClipboardClientScreenshot: function copyToClipboardClientScreenshot() {
        return u;
      },
      copyToClipboardImageOfChart: function copyToClipboardImageOfChart() {
        return h;
      },
      downloadClientScreenshot: function downloadClientScreenshot() {
        return y;
      },
      getImageOfChartSilently: function getImageOfChartSilently() {
        return g;
      }
    });
    var n = a(59224),
        o = a(14483),
        i = a(34928),
        r = a(79982),
        s = a(65446),
        c = a(65939),
        l = a(53166),
        d = (a(42053), a(44352), a(69798));

    function p(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (a, n) {
        !function _callee2(e, t, a) {
          var n,
              i,
              r,
              _iteratorNormalCompletion,
              _didIteratorError,
              _iteratorError,
              _iterator,
              _step,
              _e,
              s,
              c,
              l,
              p,
              w,
              m,
              _args2 = arguments;

          return regeneratorRuntime.async(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  n = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
                  r = new FormData();

                  if (!(void 0 !== n.previews)) {
                    _context2.next = 22;
                    break;
                  }

                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context2.prev = 6;

                  for (_iterator = n.previews[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _e = _step.value;
                    r.append("previews[]", _e);
                  }

                  _context2.next = 14;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](6);
                  _didIteratorError = true;
                  _iteratorError = _context2.t0;

                case 14:
                  _context2.prev = 14;
                  _context2.prev = 15;

                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }

                case 17:
                  _context2.prev = 17;

                  if (!_didIteratorError) {
                    _context2.next = 20;
                    break;
                  }

                  throw _iteratorError;

                case 20:
                  return _context2.finish(17);

                case 21:
                  return _context2.finish(14);

                case 22:
                  void 0 !== n.cme && r.append("cme", String(n.cme));
                  void 0 !== n.wl && r.append("wl", String(n.wl));
                  void 0 !== n.onWidget && r.append("onWidget", String(n.onWidget));
                  n.isReport && r.append("isReport", String(n.isReport));
                  n.asyncSave && r.append("asyncSave", String(n.asyncSave));
                  s = window.urlParams;
                  s && s.locale && r.append("language", s.locale);
                  c = e.activeChartWidget.value(), l = c.widgetCustomer();
                  void 0 !== l && r.append("customer", l);
                  p = c.properties().childs().timezone.value();
                  "exchange" === p && (p = (null === (i = c.model().mainSeries().symbolInfo()) || void 0 === i ? void 0 : i.timezone) || p);
                  r.append("timezone", p), r.append("symbol", c.model().mainSeries().symbol());
                  _context2.next = 36;
                  return regeneratorRuntime.awrap(e.clientSnapshot({
                    showHeaderMainSymbol: n.showHeaderMainSymbol
                  }));

                case 36:
                  w = _context2.sent;
                  _context2.next = 39;
                  return regeneratorRuntime.awrap(new Promise(function (e) {
                    return w.toBlob(e);
                  }));

                case 39:
                  m = _context2.sent;
                  null !== m && r.append("preparedImage", m);
                  !function _callee(e, t, a) {
                    var n,
                        i,
                        _n,
                        _o,
                        _args = arguments;

                    return regeneratorRuntime.async(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            n = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                            i = o.enabled("charting_library_base") ? n.snapshotUrl || "https://www.tradingview.com/snapshot/" : "/snapshot/";
                            _context.prev = 2;
                            _context.next = 5;
                            return regeneratorRuntime.awrap((0, d.fetch)(i, {
                              body: e,
                              method: "POST",
                              credentials: "same-origin"
                            }));

                          case 5:
                            _n = _context.sent;
                            _context.next = 8;
                            return regeneratorRuntime.awrap(_n.text());

                          case 8:
                            _o = _context.sent;
                            _n.ok ? t(_o) : a();
                            _context.next = 15;
                            break;

                          case 12:
                            _context.prev = 12;
                            _context.t0 = _context["catch"](2);
                            a();

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, null, null, [[2, 12]]);
                  }(r, t, a, n);

                case 42:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, null, [[6, 10, 14, 22], [15,, 17, 21]]);
        }(e, a, n, t);
      });
    }

    var w = (0, n.getLogger)("Platform.TakeChartImage"),
        m = new i.DateTimeFormatter({
      dateTimeSeparator: "_",
      timeFormat: "%h-%m-%s"
    });

    function h(e, t) {
      var a, n, i, r;
      return regeneratorRuntime.async(function h$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              a = "text/plain", n = p(e, t), i = n.then(function (e) {
                return o.enabled("charting_library_base") && t.snapshotUrl ? e : (0, l.convertImageNameToUrl)(e);
              }), r = i.then(function (e) {
                return new Blob([e], {
                  type: a
                });
              });
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap((0, s.writePromiseUsingApi)(r, a));

            case 4:
              return _context3.abrupt("return", n);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);
              _context3.t1 = window;
              _context3.next = 12;
              return regeneratorRuntime.awrap(i);

            case 12:
              _context3.t2 = _context3.sent;

              _context3.t1.open.call(_context3.t1, _context3.t2);

              throw _context3.t0;

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }

    function g(e, t) {
      return regeneratorRuntime.async(function g$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(p(e, t));

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              throw w.logWarn("Error while trying to create snapshot"), _context4.t0;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }

    function u(e) {
      var t, a, _a;

      return regeneratorRuntime.async(function u$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              t = e.clientSnapshot(), a = t.then(function (e) {
                return new Promise(function (t) {
                  return e.toBlob(function (e) {
                    null !== e && t(e);
                  });
                });
              });
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap((0, s.writePromiseUsingApi)(a, "image/png"));

            case 4:
              return _context5.abrupt("return", _context5.sent);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);
              _a = window.open();
              _context5.t1 = _a;

              if (!_context5.t1) {
                _context5.next = 19;
                break;
              }

              _context5.t2 = _a.document;
              _context5.t3 = "<img width=\"100%\" src=\"";
              _context5.next = 16;
              return regeneratorRuntime.awrap(t);

            case 16:
              _context5.t4 = _context5.sent.toDataURL();
              _context5.t5 = _context5.t3.concat.call(_context5.t3, _context5.t4, "\"/>");

              _context5.t2.write.call(_context5.t2, _context5.t5);

            case 19:
              throw _context5.t0;

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }

    function y(e) {
      var t, a, n;
      return regeneratorRuntime.async(function y$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              t = e.activeChartWidget.value().model().mainSeries().actualSymbol();
              a = "".concat((0, r.shortName)(t), "_").concat(m.formatLocal(new Date()));
              _context6.next = 4;
              return regeneratorRuntime.awrap(e.clientSnapshot());

            case 4:
              n = _context6.sent;
              (0, c.downloadFile)("".concat(a, ".png"), n.toDataURL());

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  },
  53166: function _(e, t, a) {
    a.d(t, {
      convertImageNameToUrl: function convertImageNameToUrl() {
        return i;
      }
    });
    var n = a(14483),
        o = a(76861);

    function i(e) {
      return n.enabled("charting_library_base") || (0, o.isProd)() ? "https://www.tradingview.com/x/" + e + "/" : window.location.protocol + "//" + window.location.host + "/x/" + e + "/";
    }
  },
  65939: function _(e, t, a) {
    function n(e, t) {
      var a = document.createElement("a");
      a.style.display = "none", a.href = t, a.download = e, a.click();
    }

    a.d(t, {
      downloadFile: function downloadFile() {
        return n;
      }
    });
  }
}]);