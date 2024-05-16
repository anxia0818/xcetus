"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8890], {
  59142: function _(e, t) {
    var n, o, l;
    o = [t], n = function n(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = !1;

      if ("undefined" != typeof window) {
        var o = {
          get passive() {
            n = !0;
          }

        };
        window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o);
      }

      var l = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          a = [],
          r = !1,
          i = -1,
          s = void 0,
          c = void 0,
          u = function u(e) {
        return a.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          d = function d(e) {
        var t = e || window.event;
        return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          m = function m() {
        setTimeout(function () {
          void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== s && (document.body.style.overflow = s, s = void 0);
        });
      };

      e.disableBodyScroll = function (e, o) {
        if (l) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !a.some(function (t) {
            return t.targetElement === e;
          })) {
            var m = {
              targetElement: e,
              options: o || {}
            };
            a = [].concat(t(a), [m]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (i = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var n, o, l, a;
              1 === t.targetTouches.length && (o = e, a = (n = t).targetTouches[0].clientY - i, !u(n.target) && (o && 0 === o.scrollTop && 0 < a || (l = o) && l.scrollHeight - l.scrollTop <= l.clientHeight && a < 0 ? d(n) : n.stopPropagation()));
            }, r || (document.addEventListener("touchmove", d, n ? {
              passive: !1
            } : void 0), r = !0);
          }
        } else {
          v = o, setTimeout(function () {
            if (void 0 === c) {
              var e = !!v && !0 === v.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === s && (s = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var f = {
            targetElement: e,
            options: o || {}
          };
          a = [].concat(t(a), [f]);
        }

        var v;
      }, e.clearAllBodyScrollLocks = function () {
        l ? (a.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), r && (document.removeEventListener("touchmove", d, n ? {
          passive: !1
        } : void 0), r = !1), a = [], i = -1) : (m(), a = []);
      }, e.enableBodyScroll = function (e) {
        if (l) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, a = a.filter(function (t) {
            return t.targetElement !== e;
          }), r && 0 === a.length && (document.removeEventListener("touchmove", d, n ? {
            passive: !1
          } : void 0), r = !1);
        } else 1 === a.length && a[0].targetElement === e ? (m(), a = []) : a = a.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (l = "function" == typeof n ? n.apply(t, o) : n) || (e.exports = l);
  },
  30507: function _(e) {
    e.exports = {
      actionButton: "actionButton-k53vexPa",
      small: "small-k53vexPa",
      hiddenTitle: "hiddenTitle-k53vexPa"
    };
  },
  55021: function _(e) {
    e.exports = {
      label: "label-nb7ji1l2"
    };
  },
  54936: function _(e) {
    e.exports = {
      popupDialog: "popupDialog-B02UUUN3",
      wrap: "wrap-B02UUUN3",
      main: "main-B02UUUN3",
      small: "small-B02UUUN3",
      title: "title-B02UUUN3",
      content: "content-B02UUUN3",
      html: "html-B02UUUN3",
      footer: "footer-B02UUUN3",
      close: "close-B02UUUN3",
      marginWithoutCloseButton: "marginWithoutCloseButton-B02UUUN3"
    };
  },
  76974: function _(e, t, n) {
    "use strict";

    n.d(t, {
      useIsMounted: function useIsMounted() {
        return l;
      }
    });
    var o = n(50959);

    var l = function l() {
      var e = (0, o.useRef)(!1);
      return (0, o.useEffect)(function () {
        return e.current = !0, function () {
          e.current = !1;
        };
      }, []), e;
    };
  },
  70493: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      confirmModule: function confirmModule() {
        return D;
      },
      renameModule: function renameModule() {
        return L;
      },
      showSimpleDialog: function showSimpleDialog() {
        return P;
      },
      warningModule: function warningModule() {
        return I;
      }
    });
    var o = n(50959),
        l = n(44352),
        a = n(97754),
        r = n(9745),
        i = n(76422),
        s = n(63016),
        c = n(68335),
        u = n(90692),
        d = n(52092),
        m = n(24437),
        f = n(86656),
        v = n(94720),
        h = n(26996),
        p = n(50151),
        g = n(76974),
        C = n(60508);
    var E = o.createContext({
      isSmallTablet: !1,
      dialogCloseHandler: function dialogCloseHandler() {}
    });
    var N = n(30507);

    function w(e) {
      var t = e.disabled,
          n = e.name,
          l = e.title,
          r = e.appearance,
          i = e.intent,
          s = e.handler,
          c = e.reference,
          _ref = (0, o.useContext)(E),
          u = _ref.isSmallTablet,
          d = _ref.dialogCloseHandler,
          m = (0, p.ensureNotNull)((0, o.useContext)(C.SlotContext)),
          f = (0, g.useIsMounted)(),
          _ref2 = (0, o.useState)(!1),
          _ref3 = _slicedToArray(_ref2, 2),
          w = _ref3[0],
          _ = _ref3[1];

      return o.createElement(v.Button, {
        disabled: t,
        reference: c,
        className: a(N.actionButton, u && N.small),
        name: n,
        size: u ? "l" : void 0,
        appearance: r,
        intent: i,
        onClick: function onClick() {
          if (w) return;
          var e = s({
            dialogClose: d,
            innerManager: m
          });
          e && (_(!0), e.then(function () {
            f.current && _(!1);
          }));
        }
      }, o.createElement("span", {
        className: a(w && N.hiddenTitle)
      }, l), w && o.createElement(h.Loader, {
        color: "white"
      }));
    }

    var _ = n(7720),
        y = n(54936);

    function S(e) {
      var t = e.title,
          n = e.onClose,
          l = e.actions,
          v = e.dataName,
          h = e.popupDialogClassName,
          p = e.contentClassName,
          g = e.wrapperClassName,
          C = e.backdrop,
          _e$closeOnOutsideClic = e.closeOnOutsideClick,
          N = _e$closeOnOutsideClic === void 0 ? !0 : _e$closeOnOutsideClic,
          _e$showCloseButton = e.showCloseButton,
          S = _e$showCloseButton === void 0 ? !0 : _e$showCloseButton,
          _e$closeOnEscapePress = e.closeOnEscapePress,
          b = _e$closeOnEscapePress === void 0 ? !0 : _e$closeOnEscapePress,
          _e$events = e.events,
          B = _e$events === void 0 ? !0 : _e$events;
      (0, o.useEffect)(function () {
        return i.subscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null), function () {
          i.unsubscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null);
        };
      }, [n]);

      var _ref4 = (0, o.useState)(!0),
          _ref5 = _slicedToArray(_ref4, 2),
          T = _ref5[0],
          U = _ref5[1],
          k = (0, o.useRef)(null);

      return o.createElement(u.MatchMedia, {
        rule: m.DialogBreakpoints.TabletSmall
      }, function (i) {
        return o.createElement(E.Provider, {
          value: {
            isSmallTablet: i,
            dialogCloseHandler: n
          }
        }, o.createElement(s.PopupDialog, {
          className: a(y.popupDialog, h),
          isOpened: T,
          backdrop: C,
          onClickBackdrop: B ? x : void 0,
          onClickOutside: N ? x : void 0,
          onKeyDown: O,
          autofocus: !0,
          fixedBody: !0
        }, o.createElement("div", {
          className: a(y.wrap, g),
          "data-name": v
        }, o.createElement("div", {
          className: a(y.main, !S && y.marginWithoutCloseButton, i && y.small)
        }, t && o.createElement("div", {
          className: a(y.title, i && y.small)
        }, t), function (t) {
          if ("html" in e) return o.createElement(f.TouchScrollContainer, {
            className: a(y.content, t && y.small, y.html, p),
            dangerouslySetInnerHTML: {
              __html: e.html
            }
          });
          if ("content" in e) return o.createElement(f.TouchScrollContainer, {
            className: a(y.content, t && y.small, p)
          }, e.content);
          return null;
        }(i), l && l.length > 0 && o.createElement("div", {
          className: a(y.footer, i && y.small)
        }, l.map(function (e, t) {
          return o.createElement(w, _objectSpread({}, e, {
            key: e.name,
            reference: 0 === t ? k : void 0
          }));
        }))), S && o.createElement(r.Icon, {
          className: a(y.close, i && y.small),
          icon: _,
          onClick: x,
          "data-name": "close",
          "data-role": "button"
        }))));
      });

      function O(e) {
        switch ((0, c.hashFromEvent)(e)) {
          case 27:
            T && b && (e.preventDefault(), n());
            break;

          case 13:
            if (T && l && l.length) {
              e.preventDefault();
              var _t = k.current;
              _t && _t.click();
            }

        }
      }

      function x() {
        U(!1), n();
      }
    }

    function b(e) {
      return "html" in e ? {
        html: e.html
      } : {
        content: e.text
      };
    }

    var B = n(21788),
        T = n(55021);

    function U(e) {
      var t = e.maxLength,
          n = e.value,
          l = e.placeholder,
          a = e.onValueChange,
          r = e.nameInputRef,
          _e$source = e.source,
          i = _e$source === void 0 ? [] : _e$source,
          s = e.autocompleteFilter,
          _ref6 = (0, o.useContext)(E),
          c = _ref6.isSmallTablet,
          u = o.useRef(null);

      return (0, o.useLayoutEffect)(function () {
        u.current && u.current.select();
      }, []), o.createElement(o.Fragment, null, function () {
        if ("content" in e) return o.createElement("div", {
          className: T.label
        }, e.content);
        if ("html" in e) return o.createElement("div", {
          className: T.label,
          dangerouslySetInnerHTML: {
            __html: e.html
          }
        });
        return null;
      }(), o.createElement(B.Autocomplete, {
        maxLength: t,
        value: n,
        onChange: function onChange(e) {
          a(e);
        },
        allowUserDefinedValues: !0,
        preventOnFocusOpen: !0,
        noEmptyText: !0,
        source: i,
        preventSearchOnEmptyQuery: !0,
        filter: s,
        setupHTMLInput: function setupHTMLInput(e) {
          u.current = e, r && (r.current = e);
        },
        size: c ? "large" : void 0,
        placeholder: l,
        suggestionsInPortal: !0
      }));
    }

    function k(e) {
      return Boolean(e.trim());
    }

    function O(e) {
      var t = e.buttonText,
          o = e.intentButton,
          a = e.actions,
          r = [{
        name: "ok",
        title: t || l.t(null, void 0, n(68988)),
        intent: o,
        handler: function handler(_ref7) {
          var e = _ref7.dialogClose;
          e();
        }
      }];
      return a && a.forEach(function (e) {
        return r.push(e);
      }), r;
    }

    var x = n(962);
    var M = new (n(51826).DialogsOpenerManager)();

    var D = function D(e) {
      var t = e.title,
          _e$onClose = e.onClose,
          a = _e$onClose === void 0 ? function () {} : _e$onClose,
          r = e.mainButtonText,
          i = e.mainButtonIntent,
          s = e.cancelButtonText,
          c = e.closeOnOutsideClick,
          u = e.onConfirm,
          d = e.onCancel,
          m = b(e);
      return o.createElement(S, _objectSpread({}, m, {
        title: t || l.t(null, void 0, n(94443)),
        onClose: a,
        actions: [{
          name: "yes",
          title: r || l.t(null, void 0, n(79831)),
          intent: i || "success",
          handler: u
        }, {
          name: "no",
          title: s || l.t(null, void 0, n(6255)),
          appearance: "stroke",
          intent: "default",
          handler: function handler(e) {
            d ? d(e) : e.dialogClose();
          }
        }],
        dataName: "confirm-dialog",
        closeOnOutsideClick: c
      }));
    },
        L = function L(e) {
      var t = e.title,
          a = e.maxLength,
          r = e.initValue,
          i = e.placeholder,
          _e$onClose2 = e.onClose,
          s = _e$onClose2 === void 0 ? function () {} : _e$onClose2,
          c = e.mainButtonText,
          u = e.mainButtonIntent,
          d = e.cancelButtonText,
          _e$validator = e.validator,
          m = _e$validator === void 0 ? k : _e$validator,
          f = e.onRename,
          v = e.source,
          h = e.autocompleteFilter,
          p = (0, o.useRef)(null),
          _ref8 = (0, o.useState)(r || ""),
          _ref9 = _slicedToArray(_ref8, 2),
          g = _ref9[0],
          C = _ref9[1],
          _ref10 = (0, o.useState)(function () {
        return m(g);
      }),
          _ref11 = _slicedToArray(_ref10, 2),
          E = _ref11[0],
          N = _ref11[1],
          w = b(e);

      return o.createElement(S, {
        title: t || l.t(null, void 0, n(35038)),
        content: o.createElement(U, _objectSpread({}, w, {
          nameInputRef: p,
          maxLength: a,
          placeholder: i,
          value: g,
          onValueChange: function onValueChange(e) {
            C(e), N(m(e));
          },
          source: v,
          autocompleteFilter: h
        })),
        onClose: s,
        actions: [{
          disabled: !E,
          name: "save",
          title: c || l.t(null, void 0, n(85520)),
          intent: u || "primary",
          handler: function handler(_ref12) {
            var e = _ref12.dialogClose,
                t = _ref12.innerManager;
            return f({
              newValue: g,
              focusInput: _,
              dialogClose: e,
              innerManager: t
            });
          }
        }, {
          name: "cancel",
          title: d || l.t(null, void 0, n(20036)),
          appearance: "stroke",
          intent: "default",
          handler: function handler(_ref13) {
            var e = _ref13.dialogClose;
            e();
          }
        }],
        dataName: "rename-dialog"
      });

      function _() {
        p.current && p.current.focus();
      }
    },
        I = function I(e) {
      var t = e.title,
          a = e.closeOnOutsideClick,
          _e$onClose3 = e.onClose,
          r = _e$onClose3 === void 0 ? function () {} : _e$onClose3,
          i = b(e);
      return o.createElement(S, _objectSpread({}, i, {
        title: t || l.t(null, void 0, n(33603)),
        onClose: r,
        actions: O(e),
        dataName: "warning-dialog",
        closeOnOutsideClick: a
      }));
    },
        P = function P(e, t, n) {
      var l = e.title,
          a = "".concat(l, "_").concat("text" in e ? e.text : e.html);
      if (M.isOpened(a)) return (0, p.ensureDefined)(M.getDialogPayload(a)).closeHandler;

      var r = document.createElement("div"),
          i = function i() {
        var t;
        null === (t = e.onClose) || void 0 === t || t.call(e), x.unmountComponentAtNode(r), M.setAsClosed(a);
      };

      return x.render(o.createElement(C.SlotContext.Provider, {
        value: n || null
      }, o.createElement(t, _objectSpread({}, e, {
        onClose: i
      }))), r), M.setAsOpened(a, {
        closeHandler: i
      }), i;
    };
  },
  51826: function _(e, t, n) {
    "use strict";

    n.d(t, {
      DialogsOpenerManager: function DialogsOpenerManager() {
        return o;
      },
      dialogsOpenerManager: function dialogsOpenerManager() {
        return l;
      }
    });

    var o =
    /*#__PURE__*/
    function () {
      function o() {
        _classCallCheck(this, o);

        this._storage = new Map();
      }

      _createClass(o, [{
        key: "setAsOpened",
        value: function setAsOpened(e, t) {
          this._storage.set(e, t);
        }
      }, {
        key: "setAsClosed",
        value: function setAsClosed(e) {
          this._storage["delete"](e);
        }
      }, {
        key: "isOpened",
        value: function isOpened(e) {
          return this._storage.has(e);
        }
      }, {
        key: "getDialogPayload",
        value: function getDialogPayload(e) {
          return this._storage.get(e);
        }
      }]);

      return o;
    }();

    var l = new o();
  },
  86656: function _(e, t, n) {
    "use strict";

    n.d(t, {
      TouchScrollContainer: function TouchScrollContainer() {
        return i;
      }
    });
    var o = n(50959),
        l = n(59142),
        a = n(50151),
        r = n(49483);
    var i = (0, o.forwardRef)(function (e, t) {
      var n = e.children,
          a = _objectWithoutProperties(e, ["children"]),
          i = (0, o.useRef)(null);

      return (0, o.useImperativeHandle)(t, function () {
        return i.current;
      }), (0, o.useLayoutEffect)(function () {
        if (r.CheckMobile.iOS()) return null !== i.current && (0, l.disableBodyScroll)(i.current, {
          allowTouchMove: s(i)
        }), function () {
          null !== i.current && (0, l.enableBodyScroll)(i.current);
        };
      }, []), o.createElement("div", _objectSpread({
        ref: i
      }, a), n);
    });

    function s(e) {
      return function (t) {
        var n = (0, a.ensureNotNull)(e.current),
            o = document.activeElement;
        return !n.contains(t) || null !== o && n.contains(o) && o.contains(t);
      };
    }
  },
  94443: function _(e) {
    e.exports = {
      ar: ["تأكيد"],
      ca_ES: ["Confirmació"],
      cs: ["Potvrzení"],
      de: ["Bestätigung"],
      el: ["Επιβεβαίωση"],
      en: "Confirmation",
      es: ["Confirmación"],
      fa: ["تاییدیه"],
      fr: "Confirmation",
      he_IL: ["אישור"],
      hu_HU: ["Megerősítés"],
      id_ID: ["Konfirmasi"],
      it: ["Conferma"],
      ja: ["確認"],
      ko: ["확인"],
      ms_MY: ["Pengesahan"],
      nl_NL: ["Bevestig"],
      pl: ["Potwierdzenie"],
      pt: ["Confirmação"],
      ro: "Confirmation",
      ru: ["Подтвердите действие"],
      sv: ["Bekräftelse"],
      th: ["การยืนยัน"],
      tr: ["Onaylama"],
      vi: ["Xác nhận"],
      zh: ["确认"],
      zh_TW: ["確認"]
    };
  },
  6255: function _(e) {
    e.exports = {
      ar: ["لا"],
      ca_ES: "No",
      cs: ["Ne"],
      de: ["Nein"],
      el: "No",
      en: "No",
      es: "No",
      fa: "No",
      fr: ["Non"],
      he_IL: ["לא"],
      hu_HU: ["Nem"],
      id_ID: ["Tidak"],
      it: "No",
      ja: ["いいえ"],
      ko: ["아니오"],
      ms_MY: ["Tidak"],
      nl_NL: "No",
      pl: ["Nie"],
      pt: ["Não"],
      ro: "No",
      ru: ["Нет"],
      sv: ["Nej"],
      th: ["ไม่"],
      tr: ["Hayır"],
      vi: ["Không"],
      zh: ["否"],
      zh_TW: ["否"]
    };
  },
  35038: function _(e) {
    e.exports = {
      ar: ["تغيير الأسم"],
      ca_ES: ["Reanomenar"],
      cs: "Rename",
      de: ["Umbenennen"],
      el: "Rename",
      en: "Rename",
      es: ["Renombrar."],
      fa: "Rename",
      fr: ["Renommer"],
      he_IL: ["שנה שם"],
      hu_HU: ["Átnevezés"],
      id_ID: ["Mengganti Nama"],
      it: ["Rinomina"],
      ja: ["名前の変更"],
      ko: ["이름 바꾸기"],
      ms_MY: ["Namakan semula"],
      nl_NL: "Rename",
      pl: ["Zmień nazwę"],
      pt: ["Renomear"],
      ro: "Rename",
      ru: ["Переименовать"],
      sv: ["Döp om"],
      th: ["เปลี่ยนชื่อ"],
      tr: ["Yeni Ad Ver"],
      vi: ["Đổi tên"],
      zh: ["重命名"],
      zh_TW: ["重新命名"]
    };
  },
  79831: function _(e) {
    e.exports = {
      ar: ["نعم"],
      ca_ES: ["Sí"],
      cs: ["Ano"],
      de: ["Ja"],
      el: "Yes",
      en: "Yes",
      es: ["Sí"],
      fa: "Yes",
      fr: ["Oui"],
      he_IL: ["כן"],
      hu_HU: ["Igen"],
      id_ID: ["Ya"],
      it: ["Sì"],
      ja: ["はい"],
      ko: ["예"],
      ms_MY: ["Ya"],
      nl_NL: "Yes",
      pl: ["Tak"],
      pt: ["Sim"],
      ro: "Yes",
      ru: ["Да"],
      sv: ["Ja"],
      th: ["ใช่"],
      tr: ["Evet"],
      vi: ["Có"],
      zh: ["是"],
      zh_TW: ["是"]
    };
  }
}]);