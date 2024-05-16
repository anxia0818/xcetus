"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4062], {
  60676: function _(e, t, r) {
    "use strict";

    r.d(t, {
      A: function A() {
        return _;
      },
      B: function B() {
        return y;
      },
      C: function C() {
        return k;
      },
      D: function D() {
        return b;
      },
      E: function E() {
        return u;
      },
      F: function F() {
        return U;
      },
      G: function G() {
        return W;
      },
      H: function H() {
        return A;
      },
      J: function J() {
        return F;
      },
      K: function K() {
        return X;
      },
      L: function L() {
        return ee;
      },
      M: function M() {
        return te;
      },
      N: function N() {
        return Z;
      },
      O: function O() {
        return ne;
      },
      P: function P() {
        return L;
      },
      Q: function Q() {
        return x;
      },
      R: function R() {
        return j;
      },
      S: function S() {
        return B;
      },
      T: function T() {
        return R;
      },
      U: function U() {
        return oe;
      },
      Y: function Y() {
        return V;
      },
      _: function _() {
        return J;
      },
      a: function a() {
        return H;
      },
      a3: function a3() {
        return re;
      },
      b: function b() {
        return $;
      },
      d: function d() {
        return q;
      },
      e: function e() {
        return M;
      },
      f: function f() {
        return K;
      },
      g: function g() {
        return G;
      },
      h: function h() {
        return Y;
      },
      i: function i() {
        return m;
      },
      j: function j() {
        return D;
      },
      k: function k() {
        return a;
      },
      l: function l() {
        return w;
      },
      m: function m() {
        return S;
      },
      n: function n() {
        return P;
      },
      o: function o() {
        return h;
      },
      p: function p() {
        return l;
      },
      q: function q() {
        return v;
      },
      r: function r() {
        return f;
      },
      s: function s() {
        return T;
      },
      t: function t() {
        return c;
      },
      u: function u() {
        return d;
      },
      v: function v() {
        return C;
      },
      y: function y() {
        return E;
      },
      z: function z() {
        return O;
      }
    });
    var n = r(49209),
        o = r(15882),
        i = r(75880);

    var s = function s(e, t) {
      var r;
      void 0 === t && (t = !0);
      var o = new Promise(function (n) {
        r = setTimeout(n, e, t);
      });
      return o[n.CANCEL] = function () {
        clearTimeout(r);
      }, o;
    };

    var a = function (e) {
      return function () {
        return e;
      };
    }(!0),
        c = function c() {};

    var u = function u(e) {
      return e;
    };

    "function" == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;

    var l = function l(e, t) {
      (0, o["default"])(e, t), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(function (r) {
        e[r] = t[r];
      });
    },
        d = function d(e, t) {
      var r;
      return (r = []).concat.apply(r, t.map(e));
    };

    function f(e, t) {
      var r = e.indexOf(t);
      r >= 0 && e.splice(r, 1);
    }

    function h(e) {
      var t = !1;
      return function () {
        t || (t = !0, e());
      };
    }

    var g = function g(e) {
      throw e;
    },
        p = function p(e) {
      return {
        value: e,
        done: !0
      };
    };

    function v(e, t, r) {
      void 0 === t && (t = g), void 0 === r && (r = "iterator");
      var n = {
        meta: {
          name: r
        },
        next: e,
        "throw": t,
        "return": p,
        isSagaIterator: !0
      };
      return "undefined" != typeof Symbol && (n[Symbol.iterator] = function () {
        return n;
      }), n;
    }

    function y(e, t) {
      var r = t.sagaStack;
      console.error(e), console.error(r);
    }

    var m = function m(e) {
      return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + e + "\n");
    },
        S = function S(e) {
      return Array.apply(null, new Array(e));
    },
        b = function b(e) {
      return function (t) {
        return e(Object.defineProperty(t, n.SAGA_ACTION, {
          value: !0
        }));
      };
    },
        O = function O(e) {
      return e === n.TERMINATE;
    },
        E = function E(e) {
      return e === n.TASK_CANCEL;
    },
        T = function T(e) {
      return O(e) || E(e);
    };

    function w(e, t) {
      var r = Object.keys(e),
          n = r.length;
      var o,
          s = 0,
          a = (0, i.array)(e) ? S(n) : {},
          u = {};
      return r.forEach(function (e) {
        var r = function r(_r, i) {
          o || (i || T(_r) ? (t.cancel(), t(_r, i)) : (a[e] = _r, ++s === n && (o = !0, t(a))));
        };

        r.cancel = c, u[e] = r;
      }), t.cancel = function () {
        o || (o = !0, r.forEach(function (e) {
          return u[e].cancel();
        }));
      }, u;
    }

    function D(e) {
      return {
        name: e.name || "anonymous",
        location: C(e)
      };
    }

    function C(e) {
      return e[n.SAGA_LOCATION];
    }

    var I = {
      isEmpty: a,
      put: c,
      take: c
    };

    function N(e, t) {
      void 0 === e && (e = 10);

      var r = new Array(e),
          n = 0,
          o = 0,
          i = 0,
          s = function s(t) {
        r[o] = t, o = (o + 1) % e, n++;
      },
          a = function a() {
        if (0 != n) {
          var t = r[i];
          return r[i] = null, n--, i = (i + 1) % e, t;
        }
      },
          c = function c() {
        for (var e = []; n;) {
          e.push(a());
        }

        return e;
      };

      return {
        isEmpty: function isEmpty() {
          return 0 == n;
        },
        put: function put(a) {
          var u;
          if (n < e) s(a);else switch (t) {
            case 1:
              throw new Error("Channel's Buffer overflow!");

            case 3:
              r[o] = a, i = o = (o + 1) % e;
              break;

            case 4:
              u = 2 * e, r = c(), n = r.length, o = r.length, i = 0, r.length = u, e = u, s(a);
          }
        },
        take: a,
        flush: c
      };
    }

    var P = function P() {
      return I;
    },
        x = function x(e) {
      return N(e, 3);
    },
        M = function M(e) {
      return N(e, 4);
    },
        A = Object.freeze({
      __proto__: null,
      none: P,
      fixed: function fixed(e) {
        return N(e, 1);
      },
      dropping: function dropping(e) {
        return N(e, 2);
      },
      sliding: x,
      expanding: M
    }),
        R = "TAKE",
        L = "PUT",
        _ = "ALL",
        j = "RACE",
        k = "CALL",
        H = "CPS",
        U = "FORK",
        F = "JOIN",
        $ = "CANCEL",
        B = "SELECT",
        q = "ACTION_CHANNEL",
        K = "CANCELLED",
        G = "FLUSH",
        W = "GET_CONTEXT",
        Y = "SET_CONTEXT",
        z = function z(e, t) {
      var r;
      return (r = {})[n.IO] = !0, r.combinator = !1, r.type = e, r.payload = t, r;
    };

    function X(e, t) {
      return void 0 === e && (e = "*"), (0, i.pattern)(e) ? z(R, {
        pattern: e
      }) : (0, i.multicast)(e) && (0, i.notUndef)(t) && (0, i.pattern)(t) ? z(R, {
        channel: e,
        pattern: t
      }) : (0, i.channel)(e) ? z(R, {
        channel: e
      }) : void 0;
    }

    function V(e, t) {
      return (0, i.undef)(t) && (t = e, e = void 0), z(L, {
        channel: e,
        action: t
      });
    }

    function J(e) {
      var t = z(_, e);
      return t.combinator = !0, t;
    }

    function Q(e, t) {
      var r,
          n = null;
      return (0, i.func)(e) ? r = e : ((0, i.array)(e) ? (n = e[0], r = e[1]) : (n = e.context, r = e.fn), n && (0, i.string)(r) && (0, i.func)(n[r]) && (r = n[r])), {
        context: n,
        fn: r,
        args: t
      };
    }

    function Z(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }

      return z(k, Q(e, r));
    }

    function ee(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }

      return z(U, Q(e, r));
    }

    function te(e) {
      return void 0 === e && (e = n.SELF_CANCELLATION), z($, e);
    }

    function re(e) {
      void 0 === e && (e = u);

      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }

      return z(B, {
        selector: e,
        args: r
      });
    }

    function ne(e, t) {
      return z(q, {
        pattern: e,
        buffer: t
      });
    }

    var oe = Z.bind(null, s);
  },
  75880: function _(e, t, r) {
    "use strict";

    r.d(t, {
      array: function array() {
        return c;
      },
      channel: function channel() {
        return f;
      },
      func: function func() {
        return s;
      },
      iterator: function iterator() {
        return l;
      },
      multicast: function multicast() {
        return p;
      },
      notUndef: function notUndef() {
        return i;
      },
      pattern: function pattern() {
        return d;
      },
      promise: function promise() {
        return u;
      },
      string: function string() {
        return a;
      },
      stringableFunc: function stringableFunc() {
        return h;
      },
      symbol: function symbol() {
        return g;
      },
      undef: function undef() {
        return o;
      }
    });

    var n = r(49209),
        o = function o(e) {
      return null == e;
    },
        i = function i(e) {
      return null != e;
    },
        s = function s(e) {
      return "function" == typeof e;
    },
        a = function a(e) {
      return "string" == typeof e;
    },
        c = Array.isArray,
        u = function u(e) {
      return e && s(e.then);
    },
        l = function l(e) {
      return e && s(e.next) && s(e["throw"]);
    },
        d = function e(t) {
      return t && (a(t) || g(t) || s(t) || c(t) && t.every(e));
    },
        f = function f(e) {
      return e && s(e.take) && s(e.close);
    },
        h = function h(e) {
      return s(e) && e.hasOwnProperty("toString");
    },
        g = function g(e) {
      return Boolean(e) && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype;
    },
        p = function p(e) {
      return f(e) && e[n.MULTICAST];
    };
  },
  49209: function _(e, t, r) {
    "use strict";

    r.d(t, {
      CANCEL: function CANCEL() {
        return o;
      },
      CHANNEL_END_TYPE: function CHANNEL_END_TYPE() {
        return i;
      },
      IO: function IO() {
        return s;
      },
      MATCH: function MATCH() {
        return a;
      },
      MULTICAST: function MULTICAST() {
        return c;
      },
      SAGA_ACTION: function SAGA_ACTION() {
        return u;
      },
      SAGA_LOCATION: function SAGA_LOCATION() {
        return g;
      },
      SELF_CANCELLATION: function SELF_CANCELLATION() {
        return l;
      },
      TASK: function TASK() {
        return d;
      },
      TASK_CANCEL: function TASK_CANCEL() {
        return f;
      },
      TERMINATE: function TERMINATE() {
        return h;
      }
    });

    var n = function n(e) {
      return "@@redux-saga/" + e;
    },
        o = n("CANCEL_PROMISE"),
        i = n("CHANNEL_END"),
        s = n("IO"),
        a = n("MATCH"),
        c = n("MULTICAST"),
        u = n("SAGA_ACTION"),
        l = n("SELF_CANCELLATION"),
        d = n("TASK"),
        f = n("TASK_CANCEL"),
        h = n("TERMINATE"),
        g = n("LOCATION");
  },
  59142: function _(e, t) {
    var r, n, o;
    n = [t], r = function r(e) {
      "use strict";

      function t(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }

          return r;
        }

        return Array.from(e);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = !1;

      if ("undefined" != typeof window) {
        var n = {
          get passive() {
            r = !0;
          }

        };
        window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n);
      }

      var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          i = [],
          s = !1,
          a = -1,
          c = void 0,
          u = void 0,
          l = function l(e) {
        return i.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
          d = function d(e) {
        var t = e || window.event;
        return !!l(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
      },
          f = function f() {
        setTimeout(function () {
          void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== c && (document.body.style.overflow = c, c = void 0);
        });
      };

      e.disableBodyScroll = function (e, n) {
        if (o) {
          if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");

          if (e && !i.some(function (t) {
            return t.targetElement === e;
          })) {
            var f = {
              targetElement: e,
              options: n || {}
            };
            i = [].concat(t(i), [f]), e.ontouchstart = function (e) {
              1 === e.targetTouches.length && (a = e.targetTouches[0].clientY);
            }, e.ontouchmove = function (t) {
              var r, n, o, i;
              1 === t.targetTouches.length && (n = e, i = (r = t).targetTouches[0].clientY - a, !l(r.target) && (n && 0 === n.scrollTop && 0 < i || (o = n) && o.scrollHeight - o.scrollTop <= o.clientHeight && i < 0 ? d(r) : r.stopPropagation()));
            }, s || (document.addEventListener("touchmove", d, r ? {
              passive: !1
            } : void 0), s = !0);
          }
        } else {
          g = n, setTimeout(function () {
            if (void 0 === u) {
              var e = !!g && !0 === g.reserveScrollBarGap,
                  t = window.innerWidth - document.documentElement.clientWidth;
              e && 0 < t && (u = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
            }

            void 0 === c && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
          });
          var h = {
            targetElement: e,
            options: n || {}
          };
          i = [].concat(t(i), [h]);
        }

        var g;
      }, e.clearAllBodyScrollLocks = function () {
        o ? (i.forEach(function (e) {
          e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
        }), s && (document.removeEventListener("touchmove", d, r ? {
          passive: !1
        } : void 0), s = !1), i = [], a = -1) : (f(), i = []);
      }, e.enableBodyScroll = function (e) {
        if (o) {
          if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
          e.ontouchstart = null, e.ontouchmove = null, i = i.filter(function (t) {
            return t.targetElement !== e;
          }), s && 0 === i.length && (document.removeEventListener("touchmove", d, r ? {
            passive: !1
          } : void 0), s = !1);
        } else 1 === i.length && i[0].targetElement === e ? (f(), i = []) : i = i.filter(function (t) {
          return t.targetElement !== e;
        });
      };
    }, void 0 === (o = "function" == typeof r ? r.apply(t, n) : r) || (e.exports = o);
  },
  3341: function _(e) {
    "use strict";

    e.exports = function e(t, r) {
      if (t === r) return !0;

      if (t && r && "object" == _typeof(t) && "object" == _typeof(r)) {
        if (t.constructor !== r.constructor) return !1;
        var n, o, i;

        if (Array.isArray(t)) {
          if ((n = t.length) != r.length) return !1;

          for (o = n; 0 != o--;) {
            if (!e(t[o], r[o])) return !1;
          }

          return !0;
        }

        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
        if ((n = (i = Object.keys(t)).length) !== Object.keys(r).length) return !1;

        for (o = n; 0 != o--;) {
          if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
        }

        for (o = n; 0 != o--;) {
          var s = i[o];
          if (!e(t[s], r[s])) return !1;
        }

        return !0;
      }

      return t != t && r != r;
    };
  },
  72535: function _(e, t, r) {
    "use strict";

    var n = r(56237),
        o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
        i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
        s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
        a = {};

    function c(e) {
      return n.isMemo(e) ? s : a[e.$$typeof] || o;
    }

    a[n.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    }, a[n.Memo] = s;
    var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        g = Object.prototype;

    e.exports = function e(t, r, n) {
      if ("string" != typeof r) {
        if (g) {
          var o = h(r);
          o && o !== g && e(t, o, n);
        }

        var s = l(r);
        d && (s = s.concat(d(r)));

        for (var a = c(t), p = c(r), v = 0; v < s.length; ++v) {
          var y = s[v];

          if (!(i[y] || n && n[y] || p && p[y] || a && a[y])) {
            var m = f(r, y);

            try {
              u(t, y, m);
            } catch (e) {}
          }
        }
      }

      return t;
    };
  },
  60198: function _(e, t) {
    "use strict";

    var r = "function" == typeof Symbol && Symbol["for"],
        n = r ? Symbol["for"]("react.element") : 60103,
        o = r ? Symbol["for"]("react.portal") : 60106,
        i = r ? Symbol["for"]("react.fragment") : 60107,
        s = r ? Symbol["for"]("react.strict_mode") : 60108,
        a = r ? Symbol["for"]("react.profiler") : 60114,
        c = r ? Symbol["for"]("react.provider") : 60109,
        u = r ? Symbol["for"]("react.context") : 60110,
        l = r ? Symbol["for"]("react.async_mode") : 60111,
        d = r ? Symbol["for"]("react.concurrent_mode") : 60111,
        f = r ? Symbol["for"]("react.forward_ref") : 60112,
        h = r ? Symbol["for"]("react.suspense") : 60113,
        g = r ? Symbol["for"]("react.suspense_list") : 60120,
        p = r ? Symbol["for"]("react.memo") : 60115,
        v = r ? Symbol["for"]("react.lazy") : 60116,
        y = r ? Symbol["for"]("react.block") : 60121,
        m = r ? Symbol["for"]("react.fundamental") : 60117,
        S = r ? Symbol["for"]("react.responder") : 60118,
        b = r ? Symbol["for"]("react.scope") : 60119;

    function O(e) {
      if ("object" == _typeof(e) && null !== e) {
        var t = e.$$typeof;

        switch (t) {
          case n:
            switch (e = e.type) {
              case l:
              case d:
              case i:
              case a:
              case s:
              case h:
                return e;

              default:
                switch (e = e && e.$$typeof) {
                  case u:
                  case f:
                  case v:
                  case p:
                  case c:
                    return e;

                  default:
                    return t;
                }

            }

          case o:
            return t;
        }
      }
    }

    function E(e) {
      return O(e) === d;
    }

    t.AsyncMode = l, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = c, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = p, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function (e) {
      return E(e) || O(e) === l;
    }, t.isConcurrentMode = E, t.isContextConsumer = function (e) {
      return O(e) === u;
    }, t.isContextProvider = function (e) {
      return O(e) === c;
    }, t.isElement = function (e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === n;
    }, t.isForwardRef = function (e) {
      return O(e) === f;
    }, t.isFragment = function (e) {
      return O(e) === i;
    }, t.isLazy = function (e) {
      return O(e) === v;
    }, t.isMemo = function (e) {
      return O(e) === p;
    }, t.isPortal = function (e) {
      return O(e) === o;
    }, t.isProfiler = function (e) {
      return O(e) === a;
    }, t.isStrictMode = function (e) {
      return O(e) === s;
    }, t.isSuspense = function (e) {
      return O(e) === h;
    }, t.isValidElementType = function (e) {
      return "string" == typeof e || "function" == typeof e || e === i || e === d || e === a || e === s || e === h || e === g || "object" == _typeof(e) && null !== e && (e.$$typeof === v || e.$$typeof === p || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === m || e.$$typeof === S || e.$$typeof === b || e.$$typeof === y);
    }, t.typeOf = O;
  },
  56237: function _(e, t, r) {
    "use strict";

    e.exports = r(60198);
  },
  11195: function _(e, t) {
    "use strict";

    var r,
        n = Symbol["for"]("react.element"),
        o = Symbol["for"]("react.portal"),
        i = Symbol["for"]("react.fragment"),
        s = Symbol["for"]("react.strict_mode"),
        a = Symbol["for"]("react.profiler"),
        c = Symbol["for"]("react.provider"),
        u = Symbol["for"]("react.context"),
        l = Symbol["for"]("react.server_context"),
        d = Symbol["for"]("react.forward_ref"),
        f = Symbol["for"]("react.suspense"),
        h = Symbol["for"]("react.suspense_list"),
        g = Symbol["for"]("react.memo"),
        p = Symbol["for"]("react.lazy"),
        v = Symbol["for"]("react.offscreen");

    function y(e) {
      if ("object" == _typeof(e) && null !== e) {
        var t = e.$$typeof;

        switch (t) {
          case n:
            switch (e = e.type) {
              case i:
              case a:
              case s:
              case f:
              case h:
                return e;

              default:
                switch (e = e && e.$$typeof) {
                  case l:
                  case u:
                  case d:
                  case p:
                  case g:
                  case c:
                    return e;

                  default:
                    return t;
                }

            }

          case o:
            return t;
        }
      }
    }

    r = Symbol["for"]("react.module.reference"), t.isContextConsumer = function (e) {
      return y(e) === u;
    };
  },
  61357: function _(e, t, r) {
    "use strict";

    e.exports = r(11195);
  },
  86942: function _(e, t, r) {
    "use strict";

    r.d(t, {
      Provider: function Provider() {
        return L;
      },
      connect: function connect() {
        return R;
      }
    });
    var n = r(4322),
        o = r(7231),
        i = r(962);

    var s = function s(e) {
      e();
    };

    var a = function a() {
      return s;
    };

    var c = r(50959);
    var u = (0, c.createContext)(null);
    var l = null;
    var d = r(15882),
        f = r(30950),
        h = r(72535),
        g = r.n(h),
        p = r(61357);
    var v = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

    function y(e, t, r, n, _ref) {
      var o = _ref.areStatesEqual,
          i = _ref.areOwnPropsEqual,
          s = _ref.areStatePropsEqual;
      var a,
          c,
          u,
          l,
          d,
          f = !1;

      function h(f, h) {
        var g = !i(h, c),
            p = !o(f, a, h, c);
        return a = f, c = h, g && p ? (u = e(a, c), t.dependsOnOwnProps && (l = t(n, c)), d = r(u, l, c), d) : g ? (e.dependsOnOwnProps && (u = e(a, c)), t.dependsOnOwnProps && (l = t(n, c)), d = r(u, l, c), d) : p ? function () {
          var t = e(a, c),
              n = !s(t, u);
          return u = t, n && (d = r(u, l, c)), d;
        }() : d;
      }

      return function (o, i) {
        return f ? h(o, i) : (a = o, c = i, u = e(a, c), l = t(n, c), d = r(u, l, c), f = !0, d);
      };
    }

    function m(e) {
      return function (t) {
        var r = e(t);

        function n() {
          return r;
        }

        return n.dependsOnOwnProps = !1, n;
      };
    }

    function S(e) {
      return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
    }

    function b(e, t) {
      return function (t, _ref2) {
        var r = _ref2.displayName;

        var n = function n(e, t) {
          return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e, void 0);
        };

        return n.dependsOnOwnProps = !0, n.mapToProps = function (t, r) {
          n.mapToProps = e, n.dependsOnOwnProps = S(e);
          var o = n(t, r);
          return "function" == typeof o && (n.mapToProps = o, n.dependsOnOwnProps = S(o), o = n(t, r)), o;
        }, n;
      };
    }

    function O(e, t) {
      return function (r, n) {
        throw new Error("Invalid value of type ".concat(_typeof(e), " for ").concat(t, " argument when connecting component ").concat(n.wrappedComponentName, "."));
      };
    }

    function E(e, t, r) {
      return (0, d["default"])({}, r, e, t);
    }

    var T = {
      notify: function notify() {},
      get: function get() {
        return [];
      }
    };

    function w(e, t) {
      var r,
          n = T;

      function o() {
        s.onStateChange && s.onStateChange();
      }

      function i() {
        r || (r = t ? t.addNestedSub(o) : e.subscribe(o), n = function () {
          var e = a();
          var t = null,
              r = null;
          return {
            clear: function clear() {
              t = null, r = null;
            },
            notify: function notify() {
              e(function () {
                var e = t;

                for (; e;) {
                  e.callback(), e = e.next;
                }
              });
            },
            get: function get() {
              var e = [],
                  r = t;

              for (; r;) {
                e.push(r), r = r.next;
              }

              return e;
            },
            subscribe: function subscribe(e) {
              var n = !0,
                  o = r = {
                callback: e,
                next: null,
                prev: r
              };
              return o.prev ? o.prev.next = o : t = o, function () {
                n && null !== t && (n = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : t = o.next);
              };
            }
          };
        }());
      }

      var s = {
        addNestedSub: function addNestedSub(e) {
          return i(), n.subscribe(e);
        },
        notifyNestedSubs: function notifyNestedSubs() {
          n.notify();
        },
        handleChangeWrapper: o,
        isSubscribed: function isSubscribed() {
          return Boolean(r);
        },
        trySubscribe: i,
        tryUnsubscribe: function tryUnsubscribe() {
          r && (r(), r = void 0, n.clear(), n = T);
        },
        getListeners: function getListeners() {
          return n;
        }
      };
      return s;
    }

    var D = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? c.useLayoutEffect : c.useEffect;

    function C(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }

    function I(e, t) {
      if (C(e, t)) return !0;
      if ("object" != _typeof(e) || null === e || "object" != _typeof(t) || null === t) return !1;
      var r = Object.keys(e),
          n = Object.keys(t);
      if (r.length !== n.length) return !1;

      for (var _n = 0; _n < r.length; _n++) {
        if (!Object.prototype.hasOwnProperty.call(t, r[_n]) || !C(e[r[_n]], t[r[_n]])) return !1;
      }

      return !0;
    }

    var N = ["reactReduxForwardedRef"];

    var P = function P() {
      throw new Error("uSES not initialized!");
    };

    var x = [null, null];

    function M(e, t, r, n, o, i) {
      e.current = n, r.current = !1, o.current && (o.current = null, i());
    }

    function A(e, t) {
      return e === t;
    }

    var R = function R(e, t, r) {
      var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          n = _ref3.pure,
          _ref3$areStatesEqual = _ref3.areStatesEqual,
          o = _ref3$areStatesEqual === void 0 ? A : _ref3$areStatesEqual,
          _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
          i = _ref3$areOwnPropsEqua === void 0 ? I : _ref3$areOwnPropsEqua,
          _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
          s = _ref3$areStatePropsEq === void 0 ? I : _ref3$areStatePropsEq,
          _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
          a = _ref3$areMergedPropsE === void 0 ? I : _ref3$areMergedPropsE,
          _ref3$forwardRef = _ref3.forwardRef,
          l = _ref3$forwardRef === void 0 ? !1 : _ref3$forwardRef,
          _ref3$context = _ref3.context,
          h = _ref3$context === void 0 ? u : _ref3$context;

      var S = h,
          T = function (e) {
        return e ? "function" == typeof e ? b(e) : O(e, "mapStateToProps") : m(function () {
          return {};
        });
      }(e),
          C = function (e) {
        return e && "object" == _typeof(e) ? m(function (t) {
          return function (e, t) {
            var r = {};

            var _loop = function _loop(_n2) {
              var o = e[_n2];
              "function" == typeof o && (r[_n2] = function () {
                return t(o.apply(void 0, arguments));
              });
            };

            for (var _n2 in e) {
              _loop(_n2);
            }

            return r;
          }(e, t);
        }) : e ? "function" == typeof e ? b(e) : O(e, "mapDispatchToProps") : m(function (e) {
          return {
            dispatch: e
          };
        });
      }(t),
          R = function (e) {
        return e ? "function" == typeof e ? function (e) {
          return function (t, _ref4) {
            var r = _ref4.displayName,
                n = _ref4.areMergedPropsEqual;
            var o,
                i = !1;
            return function (t, r, s) {
              var a = e(t, r, s);
              return i ? n(a, o) || (o = a) : (i = !0, o = a), o;
            };
          };
        }(e) : O(e, "mergeProps") : function () {
          return E;
        };
      }(r),
          L = Boolean(e);

      return function (e) {
        var t = e.displayName || e.name || "Component",
            r = "Connect(".concat(t, ")"),
            n = {
          shouldHandleStateChanges: L,
          displayName: r,
          wrappedComponentName: t,
          WrappedComponent: e,
          initMapStateToProps: T,
          initMapDispatchToProps: C,
          initMergeProps: R,
          areStatesEqual: o,
          areStatePropsEqual: s,
          areOwnPropsEqual: i,
          areMergedPropsEqual: a
        };

        function u(t) {
          var _ref5 = (0, c.useMemo)(function () {
            var e = t.reactReduxForwardedRef,
                r = (0, f["default"])(t, N);
            return [t.context, e, r];
          }, [t]),
              _ref6 = _slicedToArray(_ref5, 3),
              r = _ref6[0],
              o = _ref6[1],
              i = _ref6[2],
              s = (0, c.useMemo)(function () {
            return r && r.Consumer && (0, p.isContextConsumer)(c.createElement(r.Consumer, null)) ? r : S;
          }, [r, S]),
              a = (0, c.useContext)(s),
              u = Boolean(t.store) && Boolean(t.store.getState) && Boolean(t.store.dispatch),
              l = Boolean(a) && Boolean(a.store);

          var h = u ? t.store : a.store,
              g = l ? a.getServerState : h.getState,
              m = (0, c.useMemo)(function () {
            return function (e, t) {
              var r = t.initMapStateToProps,
                  n = t.initMapDispatchToProps,
                  o = t.initMergeProps,
                  i = (0, f["default"])(t, v);
              return y(r(e, i), n(e, i), o(e, i), e, i);
            }(h.dispatch, n);
          }, [h]),
              _ref7 = (0, c.useMemo)(function () {
            if (!L) return x;
            var e = w(h, u ? void 0 : a.subscription),
                t = e.notifyNestedSubs.bind(e);
            return [e, t];
          }, [h, u, a]),
              _ref8 = _slicedToArray(_ref7, 2),
              b = _ref8[0],
              O = _ref8[1],
              E = (0, c.useMemo)(function () {
            return u ? a : (0, d["default"])({}, a, {
              subscription: b
            });
          }, [u, a, b]),
              T = (0, c.useRef)(),
              C = (0, c.useRef)(i),
              I = (0, c.useRef)(),
              A = (0, c.useRef)(!1),
              R = ((0, c.useRef)(!1), (0, c.useRef)(!1)),
              _ = (0, c.useRef)();

          D(function () {
            return R.current = !0, function () {
              R.current = !1;
            };
          }, []);
          var j = (0, c.useMemo)(function () {
            return function () {
              return I.current && i === C.current ? I.current : m(h.getState(), i);
            };
          }, [h, i]),
              k = (0, c.useMemo)(function () {
            return function (e) {
              return b ? function (e, t, r, n, o, i, s, a, c, u, l) {
                if (!e) return function () {};
                var d = !1,
                    f = null;

                var h = function h() {
                  if (d || !a.current) return;
                  var e = t.getState();
                  var r, h;

                  try {
                    r = n(e, o.current);
                  } catch (e) {
                    h = e, f = e;
                  }

                  h || (f = null), r === i.current ? s.current || u() : (i.current = r, c.current = r, s.current = !0, l());
                };

                return r.onStateChange = h, r.trySubscribe(), h(), function () {
                  if (d = !0, r.tryUnsubscribe(), r.onStateChange = null, f) throw f;
                };
              }(L, h, b, m, C, T, A, R, I, O, e) : function () {};
            };
          }, [b]);
          var H, U, F;
          var $;
          H = M, U = [C, T, A, i, I, O], D(function () {
            return H.apply(void 0, _toConsumableArray(U));
          }, F);

          try {
            $ = P(k, j, g ? function () {
              return m(g(), i);
            } : j);
          } catch (e) {
            throw _.current && (e.message += "\nThe error may be correlated with this previous error:\n".concat(_.current.stack, "\n\n")), e;
          }

          D(function () {
            _.current = void 0, I.current = void 0, T.current = $;
          });
          var B = (0, c.useMemo)(function () {
            return c.createElement(e, (0, d["default"])({}, $, {
              ref: o
            }));
          }, [o, e, $]);
          return (0, c.useMemo)(function () {
            return L ? c.createElement(s.Provider, {
              value: E
            }, B) : B;
          }, [s, B, E]);
        }

        var h = c.memo(u);

        if (h.WrappedComponent = e, h.displayName = u.displayName = r, l) {
          var _t = c.forwardRef(function (e, t) {
            return c.createElement(h, (0, d["default"])({}, e, {
              reactReduxForwardedRef: t
            }));
          });

          return _t.displayName = r, _t.WrappedComponent = e, g()(_t, e);
        }

        return g()(h, e);
      };
    };

    var L = function L(_ref9) {
      var e = _ref9.store,
          t = _ref9.context,
          r = _ref9.children,
          n = _ref9.serverState;
      var o = (0, c.useMemo)(function () {
        var t = w(e);
        return {
          store: e,
          subscription: t,
          getServerState: n ? function () {
            return n;
          } : void 0
        };
      }, [e, n]),
          i = (0, c.useMemo)(function () {
        return e.getState();
      }, [e]);
      D(function () {
        var t = o.subscription;
        return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), i !== e.getState() && t.notifyNestedSubs(), function () {
          t.tryUnsubscribe(), t.onStateChange = void 0;
        };
      }, [o, i]);
      var s = t || u;
      return c.createElement(s.Provider, {
        value: o
      }, r);
    };

    var _, j;

    _ = o.useSyncExternalStoreWithSelector, l = _, function (e) {
      P = e;
    }(n.useSyncExternalStore), j = i.unstable_batchedUpdates, s = j;
  },
  3354: function _(e, t, r) {
    "use strict";

    var n = r(50959),
        o = Symbol["for"]("react.element"),
        i = Symbol["for"]("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function u(e, t, r) {
      var n,
          i = {},
          u = null,
          l = null;

      for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) {
        s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
      }

      if (e && e.defaultProps) for (n in t = e.defaultProps) {
        void 0 === i[n] && (i[n] = t[n]);
      }
      return {
        $$typeof: o,
        type: e,
        key: u,
        ref: l,
        props: i,
        _owner: a.current
      };
    }

    t.jsx = u;
  },
  16453: function _(e, t, r) {
    "use strict";

    e.exports = r(3354);
  },
  54773: function _(e, t, r) {
    "use strict";

    r.d(t, {
      buffers: function buffers() {
        return a.H;
      },
      "default": function _default() {
        return z;
      },
      eventChannel: function eventChannel() {
        return N;
      }
    });
    var n = r(49209),
        o = r(15882),
        i = r(30950),
        s = r(75880),
        a = r(60676),
        c = r(21153);

    function u() {
      var e = {};
      return e.promise = new Promise(function (t, r) {
        e.resolve = t, e.reject = r;
      }), e;
    }

    var l = u;
    var d = [],
        f = 0;

    function h(e) {
      try {
        v(), e();
      } finally {
        y();
      }
    }

    function g(e) {
      d.push(e), f || (v(), m());
    }

    function p(e) {
      try {
        return v(), e();
      } finally {
        m();
      }
    }

    function v() {
      f++;
    }

    function y() {
      f--;
    }

    function m() {
      var e;

      for (y(); !f && void 0 !== (e = d.shift());) {
        h(e);
      }
    }

    var S = function S(e) {
      return function (t) {
        return e.some(function (e) {
          return w(e)(t);
        });
      };
    },
        b = function b(e) {
      return function (t) {
        return e(t);
      };
    },
        O = function O(e) {
      return function (t) {
        return t.type === String(e);
      };
    },
        E = function E(e) {
      return function (t) {
        return t.type === e;
      };
    },
        T = function T() {
      return a.k;
    };

    function w(e) {
      var t = "*" === e ? T : (0, s.string)(e) ? O : (0, s.array)(e) ? S : (0, s.stringableFunc)(e) ? O : (0, s.func)(e) ? b : (0, s.symbol)(e) ? E : null;
      if (null === t) throw new Error("invalid pattern: " + e);
      return t(e);
    }

    var D = {
      type: n.CHANNEL_END_TYPE
    },
        C = function C(e) {
      return e && e.type === n.CHANNEL_END_TYPE;
    };

    function I(e) {
      void 0 === e && (e = (0, a.e)());
      var t = !1,
          r = [];
      return {
        take: function take(n) {
          t && e.isEmpty() ? n(D) : e.isEmpty() ? (r.push(n), n.cancel = function () {
            (0, a.r)(r, n);
          }) : n(e.take());
        },
        put: function put(n) {
          if (!t) {
            if (0 === r.length) return e.put(n);
            r.shift()(n);
          }
        },
        flush: function flush(r) {
          t && e.isEmpty() ? r(D) : r(e.flush());
        },
        close: function close() {
          if (!t) {
            t = !0;
            var e = r;
            r = [];

            for (var n = 0, o = e.length; n < o; n++) {
              (0, e[n])(D);
            }
          }
        }
      };
    }

    function N(e, t) {
      void 0 === t && (t = (0, a.n)());

      var r,
          n = !1,
          o = I(t),
          i = function i() {
        n || (n = !0, (0, s.func)(r) && r(), o.close());
      };

      return r = e(function (e) {
        C(e) ? i() : o.put(e);
      }), r = (0, a.o)(r), n && r(), {
        take: o.take,
        flush: o.flush,
        close: i
      };
    }

    function P() {
      var e,
          t,
          r,
          o,
          i,
          s,
          c = (t = !1, o = r = [], i = function i() {
        o === r && (o = r.slice());
      }, s = function s() {
        t = !0;
        var e = r = o;
        o = [], e.forEach(function (e) {
          e(D);
        });
      }, (e = {})[n.MULTICAST] = !0, e.put = function (e) {
        if (!t) if (C(e)) s();else for (var i = r = o, a = 0, c = i.length; a < c; a++) {
          var u = i[a];
          u[n.MATCH](e) && (u.cancel(), u(e));
        }
      }, e.take = function (e, r) {
        void 0 === r && (r = T), t ? e(D) : (e[n.MATCH] = r, i(), o.push(e), e.cancel = (0, a.o)(function () {
          i(), (0, a.r)(o, e);
        }));
      }, e.close = s, e),
          u = c.put;
      return c.put = function (e) {
        e[n.SAGA_ACTION] ? u(e) : g(function () {
          u(e);
        });
      }, c;
    }

    function x(e, t) {
      var r = e[n.CANCEL];
      (0, s.func)(r) && (t.cancel = r), e.then(t, function (e) {
        t(e, !0);
      });
    }

    var M,
        A = 0,
        R = function R() {
      return ++A;
    };

    function L(e) {
      e.isRunning() && e.cancel();
    }

    var _ = ((M = {})[a.T] = function (e, t, r) {
      var o = t.channel,
          i = void 0 === o ? e.channel : o,
          a = t.pattern,
          c = t.maybe,
          u = function u(e) {
        e instanceof Error ? r(e, !0) : !C(e) || c ? r(e) : r(n.TERMINATE);
      };

      try {
        i.take(u, (0, s.notUndef)(a) ? w(a) : null);
      } catch (e) {
        return void r(e, !0);
      }

      r.cancel = u.cancel;
    }, M[a.P] = function (e, t, r) {
      var n = t.channel,
          o = t.action,
          i = t.resolve;
      g(function () {
        var t;

        try {
          t = (n ? n.put : e.dispatch)(o);
        } catch (e) {
          return void r(e, !0);
        }

        i && (0, s.promise)(t) ? x(t, r) : r(t);
      });
    }, M[a.A] = function (e, t, r, n) {
      var o = n.digestEffect,
          i = A,
          c = Object.keys(t);

      if (0 !== c.length) {
        var u = (0, a.l)(t, r);
        c.forEach(function (e) {
          o(t[e], i, u[e], e);
        });
      } else r((0, s.array)(t) ? [] : {});
    }, M[a.R] = function (e, t, r, n) {
      var o = n.digestEffect,
          i = A,
          c = Object.keys(t),
          u = (0, s.array)(t) ? (0, a.m)(c.length) : {},
          l = {},
          d = !1;
      c.forEach(function (e) {
        var t = function t(_t2, n) {
          d || (n || (0, a.s)(_t2) ? (r.cancel(), r(_t2, n)) : (r.cancel(), d = !0, u[e] = _t2, r(u)));
        };

        t.cancel = a.t, l[e] = t;
      }), r.cancel = function () {
        d || (d = !0, c.forEach(function (e) {
          return l[e].cancel();
        }));
      }, c.forEach(function (e) {
        d || o(t[e], i, l[e], e);
      });
    }, M[a.C] = function (e, t, r, n) {
      var o = t.context,
          i = t.fn,
          c = t.args,
          u = n.task;

      try {
        var l = i.apply(o, c);
        if ((0, s.promise)(l)) return void x(l, r);
        if ((0, s.iterator)(l)) return void G(e, l, u.context, A, (0, a.j)(i), !1, r);
        r(l);
      } catch (e) {
        r(e, !0);
      }
    }, M[a.a] = function (e, t, r) {
      var n = t.context,
          o = t.fn,
          i = t.args;

      try {
        var a = function a(e, t) {
          (0, s.undef)(e) ? r(t) : r(e, !0);
        };

        o.apply(n, i.concat(a)), a.cancel && (r.cancel = a.cancel);
      } catch (e) {
        r(e, !0);
      }
    }, M[a.F] = function (e, t, r, n) {
      var o = t.context,
          i = t.fn,
          c = t.args,
          u = t.detached,
          l = n.task,
          d = function (e) {
        var t = e.context,
            r = e.fn,
            n = e.args;

        try {
          var o = r.apply(t, n);
          if ((0, s.iterator)(o)) return o;
          var i = !1;
          return (0, a.q)(function (e) {
            return i ? {
              value: e,
              done: !0
            } : (i = !0, {
              value: o,
              done: !(0, s.promise)(o)
            });
          });
        } catch (e) {
          return (0, a.q)(function () {
            throw e;
          });
        }
      }({
        context: o,
        fn: i,
        args: c
      }),
          f = function (e, t) {
        return e.isSagaIterator ? {
          name: e.meta.name
        } : (0, a.j)(t);
      }(d, i);

      p(function () {
        var t = G(e, d, l.context, A, f, u, void 0);
        u ? r(t) : t.isRunning() ? (l.queue.addTask(t), r(t)) : t.isAborted() ? l.queue.abort(t.error()) : r(t);
      });
    }, M[a.J] = function (e, t, r, n) {
      var o = n.task,
          i = function i(e, t) {
        if (e.isRunning()) {
          var r = {
            task: o,
            cb: t
          };
          t.cancel = function () {
            e.isRunning() && (0, a.r)(e.joiners, r);
          }, e.joiners.push(r);
        } else e.isAborted() ? t(e.error(), !0) : t(e.result());
      };

      if ((0, s.array)(t)) {
        if (0 === t.length) return void r([]);
        var c = (0, a.l)(t, r);
        t.forEach(function (e, t) {
          i(e, c[t]);
        });
      } else i(t, r);
    }, M[a.b] = function (e, t, r, o) {
      var i = o.task;
      t === n.SELF_CANCELLATION ? L(i) : (0, s.array)(t) ? t.forEach(L) : L(t), r();
    }, M[a.S] = function (e, t, r) {
      var n = t.selector,
          o = t.args;

      try {
        r(n.apply(void 0, [e.getState()].concat(o)));
      } catch (e) {
        r(e, !0);
      }
    }, M[a.d] = function (e, t, r) {
      var n = t.pattern,
          o = I(t.buffer),
          i = w(n),
          s = function t(r) {
        C(r) || e.channel.take(t, i), o.put(r);
      },
          a = o.close;

      o.close = function () {
        s.cancel(), a();
      }, e.channel.take(s, i), r(o);
    }, M[a.f] = function (e, t, r, n) {
      r(n.task.isCancelled());
    }, M[a.g] = function (e, t, r) {
      t.flush(r);
    }, M[a.G] = function (e, t, r, n) {
      r(n.task.context[t]);
    }, M[a.h] = function (e, t, r, n) {
      var o = n.task;
      (0, a.p)(o.context, t), r();
    }, M);

    function j(e, t) {
      return e + "?" + t;
    }

    function k(e) {
      var t = e.name,
          r = e.location;
      return r ? t + "  " + j(r.fileName, r.lineNumber) : t;
    }

    function H(e) {
      var t = (0, a.u)(function (e) {
        return e.cancelledTasks;
      }, e);
      return t.length ? ["Tasks cancelled due to error:"].concat(t).join("\n") : "";
    }

    var U = null,
        F = [],
        $ = function $(e) {
      e.crashedEffect = U, F.push(e);
    },
        B = function B() {
      U = null, F.length = 0;
    },
        q = function q() {
      var e = F[0],
          t = F.slice(1),
          r = e.crashedEffect ? function (e) {
        var t = (0, a.v)(e);
        return t ? t.code + "  " + j(t.fileName, t.lineNumber) : "";
      }(e.crashedEffect) : null;
      return ["The above error occurred in task " + k(e.meta) + (r ? " \n when executing effect " + r : "")].concat(t.map(function (e) {
        return "    created by " + k(e.meta);
      }), [H(F)]).join("\n");
    };

    function K(e, t, r, o, i, s, c) {
      var u;
      void 0 === c && (c = a.t);

      var d,
          f,
          h = 0,
          g = null,
          p = [],
          v = Object.create(r),
          y = function (e, t, r) {
        var n,
            o = [],
            i = !1;

        function s(e) {
          t(), u(), r(e, !0);
        }

        function c(t) {
          o.push(t), t.cont = function (c, u) {
            i || ((0, a.r)(o, t), t.cont = a.t, u ? s(c) : (t === e && (n = c), o.length || (i = !0, r(n))));
          };
        }

        function u() {
          i || (i = !0, o.forEach(function (e) {
            e.cont = a.t, e.cancel();
          }), o = []);
        }

        return c(e), {
          addTask: c,
          cancelAll: u,
          abort: s,
          getTasks: function getTasks() {
            return o;
          }
        };
      }(t, function () {
        p.push.apply(p, y.getTasks().map(function (e) {
          return e.meta.name;
        }));
      }, m);

      function m(t, r) {
        if (r) {
          if (h = 2, $({
            meta: i,
            cancelledTasks: p
          }), S.isRoot) {
            var o = q();
            B(), e.onError(t, {
              sagaStack: o
            });
          }

          f = t, g && g.reject(t);
        } else t === n.TASK_CANCEL ? h = 1 : 1 !== h && (h = 3), d = t, g && g.resolve(t);

        S.cont(t, r), S.joiners.forEach(function (e) {
          e.cb(t, r);
        }), S.joiners = null;
      }

      var S = ((u = {})[n.TASK] = !0, u.id = o, u.meta = i, u.isRoot = s, u.context = v, u.joiners = [], u.queue = y, u.cancel = function () {
        0 === h && (h = 1, y.cancelAll(), m(n.TASK_CANCEL, !1));
      }, u.cont = c, u.end = m, u.setContext = function (e) {
        (0, a.p)(v, e);
      }, u.toPromise = function () {
        return g || (g = l(), 2 === h ? g.reject(f) : 0 !== h && g.resolve(d)), g.promise;
      }, u.isRunning = function () {
        return 0 === h;
      }, u.isCancelled = function () {
        return 1 === h || 0 === h && 1 === t.status;
      }, u.isAborted = function () {
        return 2 === h;
      }, u.result = function () {
        return d;
      }, u.error = function () {
        return f;
      }, u);
      return S;
    }

    function G(e, t, r, o, i, c, u) {
      var l = e.finalizeRunEffect(function (t, r, o) {
        if ((0, s.promise)(t)) x(t, o);else if ((0, s.iterator)(t)) G(e, t, f.context, r, i, !1, o);else if (t && t[n.IO]) {
          (0, _[t.type])(e, t.payload, o, h);
        } else o(t);
      });
      g.cancel = a.t;
      var d = {
        meta: i,
        cancel: function cancel() {
          0 === d.status && (d.status = 1, g(n.TASK_CANCEL));
        },
        status: 0
      },
          f = K(e, d, r, o, i, c, u),
          h = {
        task: f,
        digestEffect: p
      };
      return u && (u.cancel = f.cancel), g(), f;

      function g(e, r) {
        try {
          var i;
          r ? (i = t["throw"](e), B()) : (0, a.y)(e) ? (d.status = 1, g.cancel(), i = (0, s.func)(t["return"]) ? t["return"](n.TASK_CANCEL) : {
            done: !0,
            value: n.TASK_CANCEL
          }) : i = (0, a.z)(e) ? (0, s.func)(t["return"]) ? t["return"]() : {
            done: !0
          } : t.next(e), i.done ? (1 !== d.status && (d.status = 3), d.cont(i.value)) : p(i.value, o, g);
        } catch (e) {
          if (1 === d.status) throw e;
          d.status = 2, d.cont(e, !0);
        }
      }

      function p(t, r, n, o) {
        void 0 === o && (o = "");
        var i,
            s = R();

        function c(r, o) {
          i || (i = !0, n.cancel = a.t, e.sagaMonitor && (o ? e.sagaMonitor.effectRejected(s, r) : e.sagaMonitor.effectResolved(s, r)), o && function (e) {
            U = e;
          }(t), n(r, o));
        }

        e.sagaMonitor && e.sagaMonitor.effectTriggered({
          effectId: s,
          parentEffectId: r,
          label: o,
          effect: t
        }), c.cancel = a.t, n.cancel = function () {
          i || (i = !0, c.cancel(), c.cancel = a.t, e.sagaMonitor && e.sagaMonitor.effectCancelled(s));
        }, l(t, s, c);
      }
    }

    function W(e, t) {
      var r = e.channel,
          n = void 0 === r ? P() : r,
          o = e.dispatch,
          i = e.getState,
          s = e.context,
          u = void 0 === s ? {} : s,
          l = e.sagaMonitor,
          d = e.effectMiddlewares,
          f = e.onError,
          h = void 0 === f ? a.B : f;

      for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), y = 2; y < g; y++) {
        v[y - 2] = arguments[y];
      }

      var m = t.apply(void 0, v);
      var S,
          b = R();

      if (l && (l.rootSagaStarted = l.rootSagaStarted || a.t, l.effectTriggered = l.effectTriggered || a.t, l.effectResolved = l.effectResolved || a.t, l.effectRejected = l.effectRejected || a.t, l.effectCancelled = l.effectCancelled || a.t, l.actionDispatched = l.actionDispatched || a.t, l.rootSagaStarted({
        effectId: b,
        saga: t,
        args: v
      })), d) {
        var O = c.compose.apply(void 0, d);

        S = function S(e) {
          return function (t, r, n) {
            return O(function (t) {
              return e(t, r, n);
            })(t);
          };
        };
      } else S = a.E;

      var E = {
        channel: n,
        dispatch: (0, a.D)(o),
        getState: i,
        sagaMonitor: l,
        onError: h,
        finalizeRunEffect: S
      };
      return p(function () {
        var e = G(E, m, u, b, (0, a.j)(t), !0, void 0);
        return l && l.effectResolved(b, e), e;
      });
    }

    var Y = function Y(e) {
      var t,
          r = void 0 === e ? {} : e,
          n = r.context,
          s = void 0 === n ? {} : n,
          c = r.channel,
          u = void 0 === c ? P() : c,
          l = r.sagaMonitor,
          d = (0, i["default"])(r, ["context", "channel", "sagaMonitor"]);

      function f(e) {
        var r = e.getState,
            n = e.dispatch;
        return t = W.bind(null, (0, o["default"])({}, d, {
          context: s,
          channel: u,
          dispatch: n,
          getState: r,
          sagaMonitor: l
        })), function (e) {
          return function (t) {
            l && l.actionDispatched && l.actionDispatched(t);
            var r = e(t);
            return u.put(t), r;
          };
        };
      }

      return f.run = function () {
        return t.apply(void 0, arguments);
      }, f.setContext = function (e) {
        (0, a.p)(s, e);
      }, f;
    },
        z = Y;
  },
  36349: function _(e, t, r) {
    "use strict";

    r.d(t, {
      all: function all() {
        return o._;
      },
      call: function call() {
        return o.N;
      },
      cancel: function cancel() {
        return o.M;
      },
      fork: function fork() {
        return o.L;
      },
      put: function put() {
        return o.Y;
      },
      select: function select() {
        return o.a3;
      },
      take: function take() {
        return o.K;
      },
      throttle: function throttle() {
        return l;
      }
    });

    var n = r(75880),
        o = r(60676),
        i = function i(e) {
      return {
        done: !0,
        value: e
      };
    },
        s = {};

    function a(e) {
      return (0, n.channel)(e) ? "channel" : (0, n.stringableFunc)(e) ? String(e) : (0, n.func)(e) ? e.name : String(e);
    }

    function c(e, t, r) {
      var n,
          a,
          c,
          u = t;

      function l(t, r) {
        if (u === s) return i(t);
        if (r && !a) throw u = s, r;
        n && n(t);
        var o = r ? e[a](r) : e[u]();
        return u = o.nextState, c = o.effect, n = o.stateUpdater, a = o.errorState, u === s ? i(t) : c;
      }

      return (0, o.q)(l, function (e) {
        return l(null, e);
      }, r);
    }

    function u(e, t, r) {
      for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) {
        i[s - 3] = arguments[s];
      }

      var u,
          l,
          d = {
        done: !1,
        value: (0, o.O)(t, (0, o.Q)(1))
      },
          f = function f() {
        return {
          done: !1,
          value: (0, o.K)(l)
        };
      },
          h = function h(e) {
        return {
          done: !1,
          value: o.L.apply(void 0, [r].concat(i, [e]))
        };
      },
          g = {
        done: !1,
        value: (0, o.U)(e)
      },
          p = function p(e) {
        return u = e;
      },
          v = function v(e) {
        return l = e;
      };

      return c({
        q1: function q1() {
          return {
            nextState: "q2",
            effect: d,
            stateUpdater: v
          };
        },
        q2: function q2() {
          return {
            nextState: "q3",
            effect: f(),
            stateUpdater: p
          };
        },
        q3: function q3() {
          return {
            nextState: "q4",
            effect: h(u)
          };
        },
        q4: function q4() {
          return {
            nextState: "q2",
            effect: g
          };
        }
      }, "q1", "throttle(" + a(t) + ", " + r.name + ")");
    }

    function l(e, t, r) {
      for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) {
        i[s - 3] = arguments[s];
      }

      return o.L.apply(void 0, [u, e, t, r].concat(i));
    }
  },
  91622: function _(e, t, r) {
    "use strict";

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function o(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(r), !0).forEach(function (t) {
          n(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function s(e) {
      return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
    }

    r.d(t, {
      applyMiddleware: function applyMiddleware() {
        return v;
      },
      bindActionCreators: function bindActionCreators() {
        return g;
      },
      combineReducers: function combineReducers() {
        return f;
      },
      createStore: function createStore() {
        return d;
      }
    });

    var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
        c = function c() {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
        u = {
      INIT: "@@redux/INIT" + c(),
      REPLACE: "@@redux/REPLACE" + c(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + c();
      }
    };

    function l(e) {
      if ("object" != _typeof(e) || null === e) return !1;

      for (var t = e; null !== Object.getPrototypeOf(t);) {
        t = Object.getPrototypeOf(t);
      }

      return Object.getPrototypeOf(e) === t;
    }

    function d(e, t, r) {
      var n;
      if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error(s(0));

      if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
        if ("function" != typeof r) throw new Error(s(1));
        return r(d)(e, t);
      }

      if ("function" != typeof e) throw new Error(s(2));
      var o = e,
          i = t,
          c = [],
          f = c,
          h = !1;

      function g() {
        f === c && (f = c.slice());
      }

      function p() {
        if (h) throw new Error(s(3));
        return i;
      }

      function v(e) {
        if ("function" != typeof e) throw new Error(s(4));
        if (h) throw new Error(s(5));
        var t = !0;
        return g(), f.push(e), function () {
          if (t) {
            if (h) throw new Error(s(6));
            t = !1, g();
            var r = f.indexOf(e);
            f.splice(r, 1), c = null;
          }
        };
      }

      function y(e) {
        if (!l(e)) throw new Error(s(7));
        if (void 0 === e.type) throw new Error(s(8));
        if (h) throw new Error(s(9));

        try {
          h = !0, i = o(i, e);
        } finally {
          h = !1;
        }

        for (var t = c = f, r = 0; r < t.length; r++) {
          (0, t[r])();
        }

        return e;
      }

      function m(e) {
        if ("function" != typeof e) throw new Error(s(10));
        o = e, y({
          type: u.REPLACE
        });
      }

      function S() {
        var e,
            t = v;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e) || null === e) throw new Error(s(11));

            function r() {
              e.next && e.next(p());
            }

            return r(), {
              unsubscribe: t(r)
            };
          }
        })[a] = function () {
          return this;
        }, e;
      }

      return y({
        type: u.INIT
      }), (n = {
        dispatch: y,
        subscribe: v,
        getState: p,
        replaceReducer: m
      })[a] = S, n;
    }

    function f(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        0, "function" == typeof e[o] && (r[o] = e[o]);
      }

      var i,
          a = Object.keys(r);

      try {
        !function (e) {
          Object.keys(e).forEach(function (t) {
            var r = e[t];
            if (void 0 === r(void 0, {
              type: u.INIT
            })) throw new Error(s(12));
            if (void 0 === r(void 0, {
              type: u.PROBE_UNKNOWN_ACTION()
            })) throw new Error(s(13));
          });
        }(r);
      } catch (e) {
        i = e;
      }

      return function (e, t) {
        if (void 0 === e && (e = {}), i) throw i;

        for (var n = !1, o = {}, c = 0; c < a.length; c++) {
          var u = a[c],
              l = r[u],
              d = e[u],
              f = l(d, t);

          if (void 0 === f) {
            t && t.type;
            throw new Error(s(14));
          }

          o[u] = f, n = n || f !== d;
        }

        return (n = n || a.length !== Object.keys(e).length) ? o : e;
      };
    }

    function h(e, t) {
      return function () {
        return t(e.apply(this, arguments));
      };
    }

    function g(e, t) {
      if ("function" == typeof e) return h(e, t);
      if ("object" != _typeof(e) || null === e) throw new Error(s(16));
      var r = {};

      for (var n in e) {
        var o = e[n];
        "function" == typeof o && (r[n] = h(o, t));
      }

      return r;
    }

    function p() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return 0 === t.length ? function (e) {
        return e;
      } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
        return function () {
          return e(t.apply(void 0, arguments));
        };
      });
    }

    function v() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return function (e) {
        return function () {
          var r = e.apply(void 0, arguments),
              n = function n() {
            throw new Error(s(15));
          },
              o = {
            getState: r.getState,
            dispatch: function dispatch() {
              return n.apply(void 0, arguments);
            }
          },
              a = t.map(function (e) {
            return e(o);
          });

          return n = p.apply(void 0, a)(r.dispatch), i(i({}, r), {}, {
            dispatch: n
          });
        };
      };
    }
  },
  21153: function _(e, t, r) {
    "use strict";

    function n(e) {
      return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
    }

    r.d(t, {
      compose: function compose() {
        return u;
      },
      createStore: function createStore() {
        return c;
      }
    });

    var o = "function" == typeof Symbol && Symbol.observable || "@@observable",
        i = function i() {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
        s = {
      INIT: "@@redux/INIT" + i(),
      REPLACE: "@@redux/REPLACE" + i(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + i();
      }
    };

    function a(e) {
      if ("object" != _typeof(e) || null === e) return !1;

      for (var t = e; null !== Object.getPrototypeOf(t);) {
        t = Object.getPrototypeOf(t);
      }

      return Object.getPrototypeOf(e) === t;
    }

    function c(e, t, r) {
      var i;
      if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error(n(0));

      if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
        if ("function" != typeof r) throw new Error(n(1));
        return r(c)(e, t);
      }

      if ("function" != typeof e) throw new Error(n(2));
      var u = e,
          l = t,
          d = [],
          f = d,
          h = !1;

      function g() {
        f === d && (f = d.slice());
      }

      function p() {
        if (h) throw new Error(n(3));
        return l;
      }

      function v(e) {
        if ("function" != typeof e) throw new Error(n(4));
        if (h) throw new Error(n(5));
        var t = !0;
        return g(), f.push(e), function () {
          if (t) {
            if (h) throw new Error(n(6));
            t = !1, g();
            var r = f.indexOf(e);
            f.splice(r, 1), d = null;
          }
        };
      }

      function y(e) {
        if (!a(e)) throw new Error(n(7));
        if (void 0 === e.type) throw new Error(n(8));
        if (h) throw new Error(n(9));

        try {
          h = !0, l = u(l, e);
        } finally {
          h = !1;
        }

        for (var t = d = f, r = 0; r < t.length; r++) {
          (0, t[r])();
        }

        return e;
      }

      function m(e) {
        if ("function" != typeof e) throw new Error(n(10));
        u = e, y({
          type: s.REPLACE
        });
      }

      function S() {
        var e,
            t = v;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e) || null === e) throw new Error(n(11));

            function r() {
              e.next && e.next(p());
            }

            return r(), {
              unsubscribe: t(r)
            };
          }
        })[o] = function () {
          return this;
        }, e;
      }

      return y({
        type: s.INIT
      }), (i = {
        dispatch: y,
        subscribe: v,
        getState: p,
        replaceReducer: m
      })[o] = S, i;
    }

    function u() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return 0 === t.length ? function (e) {
        return e;
      } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
        return function () {
          return e(t.apply(void 0, arguments));
        };
      });
    }
  },
  77145: function _(e, t, r) {
    "use strict";

    function n(e, t) {
      return e === t;
    }

    function o(e, t, r) {
      if (null === t || null === r || t.length !== r.length) return !1;

      for (var n = t.length, o = 0; o < n; o++) {
        if (!e(t[o], r[o])) return !1;
      }

      return !0;
    }

    function i(e) {
      var t = Array.isArray(e[0]) ? e[0] : e;

      if (!t.every(function (e) {
        return "function" == typeof e;
      })) {
        var r = t.map(function (e) {
          return _typeof(e);
        }).join(", ");
        throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + r + "]");
      }

      return t;
    }

    r.d(t, {
      createSelector: function createSelector() {
        return s;
      }
    });

    var s = function (e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }

      return function () {
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) {
          n[o] = arguments[o];
        }

        var s = 0,
            a = n.pop(),
            c = i(n),
            u = e.apply(void 0, [function () {
          return s++, a.apply(null, arguments);
        }].concat(r)),
            l = e(function () {
          for (var e = [], t = c.length, r = 0; r < t; r++) {
            e.push(c[r].apply(null, arguments));
          }

          return u.apply(null, e);
        });
        return l.resultFunc = a, l.dependencies = c, l.recomputations = function () {
          return s;
        }, l.resetRecomputations = function () {
          return s = 0;
        }, l;
      };
    }(function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
          r = null,
          i = null;
      return function () {
        return o(t, r, arguments) || (i = e.apply(null, arguments)), r = arguments, i;
      };
    });
  },
  12415: function _(e, t, r) {
    "use strict";

    var n = r(50959);
    var o = "function" == typeof Object.is ? Object.is : function (e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
    },
        i = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        c = n.useDebugValue;

    function u(e) {
      var t = e.getSnapshot;
      e = e.value;

      try {
        var r = t();
        return !o(e, r);
      } catch (e) {
        return !0;
      }
    }

    var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
      return t();
    } : function (e, t) {
      var r = t(),
          n = i({
        inst: {
          value: r,
          getSnapshot: t
        }
      }),
          o = n[0].inst,
          l = n[1];
      return a(function () {
        o.value = r, o.getSnapshot = t, u(o) && l({
          inst: o
        });
      }, [e, r, t]), s(function () {
        return u(o) && l({
          inst: o
        }), e(function () {
          u(o) && l({
            inst: o
          });
        });
      }, [e]), c(r), r;
    };
    t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
  },
  2179: function _(e, t, r) {
    "use strict";

    var n = r(50959),
        o = r(4322);
    var i = "function" == typeof Object.is ? Object.is : function (e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
    },
        s = o.useSyncExternalStore,
        a = n.useRef,
        c = n.useEffect,
        u = n.useMemo,
        l = n.useDebugValue;

    t.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
      var d = a(null);

      if (null === d.current) {
        var f = {
          hasValue: !1,
          value: null
        };
        d.current = f;
      } else f = d.current;

      d = u(function () {
        function e(e) {
          if (!c) {
            if (c = !0, s = e, e = n(e), void 0 !== o && f.hasValue) {
              var t = f.value;
              if (o(t, e)) return a = t;
            }

            return a = e;
          }

          if (t = a, i(s, e)) return t;
          var r = n(e);
          return void 0 !== o && o(t, r) ? t : (s = e, a = r);
        }

        var s,
            a,
            c = !1,
            u = void 0 === r ? null : r;
        return [function () {
          return e(t());
        }, null === u ? void 0 : function () {
          return e(u());
        }];
      }, [t, r, n, o]);
      var h = s(e, d[0], d[1]);
      return c(function () {
        f.hasValue = !0, f.value = h;
      }, [h]), l(h), h;
    };
  },
  4322: function _(e, t, r) {
    "use strict";

    e.exports = r(12415);
  },
  7231: function _(e, t, r) {
    "use strict";

    e.exports = r(2179);
  },
  15882: function _(e, t, r) {
    "use strict";

    function n() {
      return n = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
        }

        return e;
      }, n.apply(this, arguments);
    }

    r.d(t, {
      "default": function _default() {
        return n;
      }
    });
  },
  30950: function _(e, t, r) {
    "use strict";

    function n(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    r.d(t, {
      "default": function _default() {
        return n;
      }
    });
  },
  6346: function _(e, t, r) {
    "use strict";

    function n(e, t) {
      for (var _len = arguments.length, r = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        r[_key - 2] = arguments[_key];
      }

      if ("undefined" != typeof process && void 0 === t) throw new Error("invariant requires an error message argument");

      if (!e) {
        var _e2;

        if (void 0 === t) _e2 = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var _n3 = 0;
          _e2 = new Error(t.replace(/%s/g, function () {
            return r[_n3++];
          })), _e2.name = "Invariant Violation";
        }
        throw _e2.framesToPop = 1, _e2;
      }
    }

    r.d(t, {
      invariant: function invariant() {
        return n;
      }
    });
  },
  98789: function _(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
      var o = r ? r.call(n, e, t) : void 0;
      if (void 0 !== o) return !!o;
      if (e === t) return !0;
      if ("object" != _typeof(e) || !e || "object" != _typeof(t) || !t) return !1;
      var i = Object.keys(e),
          s = Object.keys(t);
      if (i.length !== s.length) return !1;
      var a = Object.prototype.hasOwnProperty.bind(t);

      for (var _s2 = 0; _s2 < i.length; _s2++) {
        var c = i[_s2];
        if (!a(c)) return !1;
        var u = e[c],
            l = t[c];
        if (o = r ? r.call(n, u, l, c) : void 0, !1 === o || void 0 === o && u !== l) return !1;
      }

      return !0;
    }

    r.d(t, {
      shallowEqual: function shallowEqual() {
        return n;
      }
    });
  },
  98314: function _(e, t, r) {
    "use strict";

    var n;

    function o() {
      return n || (n = new Image(), n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), n;
    }

    r.d(t, {
      getEmptyImage: function getEmptyImage() {
        return o;
      }
    });
  },
  10170: function _(e, t, r) {
    "use strict";

    var _f;

    r.d(t, {
      HTML5Backend: function HTML5Backend() {
        return w;
      }
    });
    var n = {};

    function o(e) {
      var t = null;
      return function () {
        return null == t && (t = e()), t;
      };
    }

    r.r(n), r.d(n, {
      FILE: function FILE() {
        return a;
      },
      HTML: function HTML() {
        return l;
      },
      TEXT: function TEXT() {
        return u;
      },
      URL: function URL() {
        return c;
      }
    });

    var i =
    /*#__PURE__*/
    function () {
      _createClass(i, [{
        key: "enter",
        value: function enter(e) {
          var _this = this;

          var t = this.entered.length;
          return this.entered = function (e, t) {
            var r = new Set(),
                n = function n(e) {
              return r.add(e);
            };

            e.forEach(n), t.forEach(n);
            var o = [];
            return r.forEach(function (e) {
              return o.push(e);
            }), o;
          }(this.entered.filter(function (t) {
            return _this.isNodeInDocument(t) && (!t.contains || t.contains(e));
          }), [e]), 0 === t && this.entered.length > 0;
        }
      }, {
        key: "leave",
        value: function leave(e) {
          var t = this.entered.length;
          var r, n;
          return this.entered = (r = this.entered.filter(this.isNodeInDocument), n = e, r.filter(function (e) {
            return e !== n;
          })), t > 0 && 0 === this.entered.length;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.entered = [];
        }
      }]);

      function i(e) {
        _classCallCheck(this, i);

        this.entered = [], this.isNodeInDocument = e;
      }

      return i;
    }();

    var s =
    /*#__PURE__*/
    function () {
      _createClass(s, [{
        key: "initializeExposedProperties",
        value: function initializeExposedProperties() {
          var _this2 = this;

          Object.keys(this.config.exposeProperties).forEach(function (e) {
            Object.defineProperty(_this2.item, e, {
              configurable: !0,
              enumerable: !0,
              get: function get() {
                return console.warn("Browser doesn't allow reading \"".concat(e, "\" until the drop event.")), null;
              }
            });
          });
        }
      }, {
        key: "loadDataTransfer",
        value: function loadDataTransfer(e) {
          var _this3 = this;

          if (e) {
            var _t3 = {};
            Object.keys(this.config.exposeProperties).forEach(function (r) {
              var n = _this3.config.exposeProperties[r];
              null != n && (_t3[r] = {
                value: n(e, _this3.config.matchesTypes),
                configurable: !0,
                enumerable: !0
              });
            }), Object.defineProperties(this.item, _t3);
          }
        }
      }, {
        key: "canDrag",
        value: function canDrag() {
          return !0;
        }
      }, {
        key: "beginDrag",
        value: function beginDrag() {
          return this.item;
        }
      }, {
        key: "isDragging",
        value: function isDragging(e, t) {
          return t === e.getSourceId();
        }
      }, {
        key: "endDrag",
        value: function endDrag() {}
      }]);

      function s(e) {
        _classCallCheck(this, s);

        this.config = e, this.item = {}, this.initializeExposedProperties();
      }

      return s;
    }();

    var a = "__NATIVE_FILE__",
        c = "__NATIVE_URL__",
        u = "__NATIVE_TEXT__",
        l = "__NATIVE_HTML__";

    function d(e, t, r) {
      var n = t.reduce(function (t, r) {
        return t || e.getData(r);
      }, "");
      return null != n ? n : r;
    }

    var f = (_f = {}, _defineProperty(_f, a, {
      exposeProperties: {
        files: function files(e) {
          return Array.prototype.slice.call(e.files);
        },
        items: function items(e) {
          return e.items;
        },
        dataTransfer: function dataTransfer(e) {
          return e;
        }
      },
      matchesTypes: ["Files"]
    }), _defineProperty(_f, l, {
      exposeProperties: {
        html: function html(e, t) {
          return d(e, t, "");
        },
        dataTransfer: function dataTransfer(e) {
          return e;
        }
      },
      matchesTypes: ["Html", "text/html"]
    }), _defineProperty(_f, c, {
      exposeProperties: {
        urls: function urls(e, t) {
          return d(e, t, "").split("\n");
        },
        dataTransfer: function dataTransfer(e) {
          return e;
        }
      },
      matchesTypes: ["Url", "text/uri-list"]
    }), _defineProperty(_f, u, {
      exposeProperties: {
        text: function text(e, t) {
          return d(e, t, "");
        },
        dataTransfer: function dataTransfer(e) {
          return e;
        }
      },
      matchesTypes: ["Text", "text/plain"]
    }), _f);

    function h(e) {
      if (!e) return null;
      var t = Array.prototype.slice.call(e.types || []);
      return Object.keys(f).filter(function (e) {
        var r = f[e];
        return !!(null == r ? void 0 : r.matchesTypes) && r.matchesTypes.some(function (e) {
          return t.indexOf(e) > -1;
        });
      })[0] || null;
    }

    var g = o(function () {
      return /firefox/i.test(navigator.userAgent);
    }),
        p = o(function () {
      return Boolean(window.safari);
    });

    var v =
    /*#__PURE__*/
    function () {
      _createClass(v, [{
        key: "interpolate",
        value: function interpolate(e) {
          var t = this.xs,
              r = this.ys,
              n = this.c1s,
              o = this.c2s,
              i = this.c3s;
          var s = t.length - 1;
          if (e === t[s]) return r[s];
          var a,
              c = 0,
              u = i.length - 1;

          for (; c <= u;) {
            a = Math.floor(.5 * (c + u));
            var _n4 = t[a];
            if (_n4 < e) c = a + 1;else {
              if (!(_n4 > e)) return r[a];
              u = a - 1;
            }
          }

          s = Math.max(0, u);
          var l = e - t[s],
              d = l * l;
          return r[s] + n[s] * l + o[s] * d + i[s] * l * d;
        }
      }]);

      function v(e, t) {
        _classCallCheck(this, v);

        var r = e.length,
            n = [];

        for (var _e3 = 0; _e3 < r; _e3++) {
          n.push(_e3);
        }

        n.sort(function (t, r) {
          return e[t] < e[r] ? -1 : 1;
        });
        var o = [],
            i = [],
            s = [];
        var a, c;

        for (var _n5 = 0; _n5 < r - 1; _n5++) {
          a = e[_n5 + 1] - e[_n5], c = t[_n5 + 1] - t[_n5], i.push(a), o.push(c), s.push(c / a);
        }

        var u = [s[0]];

        for (var _e4 = 0; _e4 < i.length - 1; _e4++) {
          var _t4 = s[_e4],
              _r2 = s[_e4 + 1];
          if (_t4 * _r2 <= 0) u.push(0);else {
            a = i[_e4];

            var _n6 = i[_e4 + 1],
                _o = a + _n6;

            u.push(3 * _o / ((_o + _n6) / _t4 + (_o + a) / _r2));
          }
        }

        u.push(s[s.length - 1]);
        var l = [],
            d = [];
        var f;

        for (var _e5 = 0; _e5 < u.length - 1; _e5++) {
          f = s[_e5];

          var _t5 = u[_e5],
              _r3 = 1 / i[_e5],
              _n7 = _t5 + u[_e5 + 1] - f - f;

          l.push((f - _t5 - _n7) * _r3), d.push(_n7 * _r3 * _r3);
        }

        this.xs = e, this.ys = t, this.c1s = u, this.c2s = l, this.c3s = d;
      }

      return v;
    }();

    function y(e) {
      var t = 1 === e.nodeType ? e : e.parentElement;
      if (!t) return null;

      var _t$getBoundingClientR = t.getBoundingClientRect(),
          r = _t$getBoundingClientR.top,
          n = _t$getBoundingClientR.left;

      return {
        x: n,
        y: r
      };
    }

    function m(e) {
      return {
        x: e.clientX,
        y: e.clientY
      };
    }

    function S(e, t, r, n, o) {
      var i = "IMG" === (s = t).nodeName && (g() || !(null === (a = document.documentElement) || void 0 === a ? void 0 : a.contains(s)));
      var s, a;

      var c = y(i ? e : t),
          u = {
        x: r.x - c.x,
        y: r.y - c.y
      },
          l = e.offsetWidth,
          d = e.offsetHeight,
          f = n.anchorX,
          h = n.anchorY,
          _ref10 = function (e, t, r, n) {
        var o = e ? t.width : r,
            i = e ? t.height : n;
        return p() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
          dragPreviewWidth: o,
          dragPreviewHeight: i
        };
      }(i, t, l, d),
          m = _ref10.dragPreviewWidth,
          S = _ref10.dragPreviewHeight,
          b = o.offsetX,
          O = o.offsetY,
          E = 0 === O || O;

      return {
        x: 0 === b || b ? b : new v([0, .5, 1], [u.x, u.x / l * m, u.x + m - l]).interpolate(f),
        y: E ? O : function () {
          var e = new v([0, .5, 1], [u.y, u.y / d * S, u.y + S - d]).interpolate(h);
          return p() && i && (e += (window.devicePixelRatio - 1) * S), e;
        }()
      };
    }

    var b =
    /*#__PURE__*/
    function () {
      _createClass(b, [{
        key: "window",
        get: function get() {
          return this.globalContext ? this.globalContext : "undefined" != typeof window ? window : void 0;
        }
      }, {
        key: "document",
        get: function get() {
          var e;
          return (null === (e = this.globalContext) || void 0 === e ? void 0 : e.document) ? this.globalContext.document : this.window ? this.window.document : void 0;
        }
      }, {
        key: "rootElement",
        get: function get() {
          var e;
          return (null === (e = this.optionsArgs) || void 0 === e ? void 0 : e.rootElement) || this.window;
        }
      }]);

      function b(e, t) {
        _classCallCheck(this, b);

        this.ownerDocument = null, this.globalContext = e, this.optionsArgs = t;
      }

      return b;
    }();

    function O(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function E(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), n.forEach(function (t) {
          O(e, t, r[t]);
        });
      }

      return e;
    }

    var T =
    /*#__PURE__*/
    function () {
      _createClass(T, [{
        key: "profile",
        value: function profile() {
          var e, t;
          return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
          };
        }
      }, {
        key: "setup",
        value: function setup() {
          var e = this.rootElement;

          if (void 0 !== e) {
            if (e.__isReactDndBackendSetUp) throw new Error("Cannot have two HTML5 backends at the same time.");
            e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
          }
        }
      }, {
        key: "teardown",
        value: function teardown() {
          var e = this.rootElement;
          var t;
          void 0 !== e && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (t = this.window) || void 0 === t || t.cancelAnimationFrame(this.asyncEndDragFrameId)));
        }
      }, {
        key: "connectDragPreview",
        value: function connectDragPreview(e, t, r) {
          var _this4 = this;

          return this.sourcePreviewNodeOptions.set(e, r), this.sourcePreviewNodes.set(e, t), function () {
            _this4.sourcePreviewNodes["delete"](e), _this4.sourcePreviewNodeOptions["delete"](e);
          };
        }
      }, {
        key: "connectDragSource",
        value: function connectDragSource(e, t, r) {
          var _this5 = this;

          this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);

          var n = function n(t) {
            return _this5.handleDragStart(t, e);
          },
              o = function o(e) {
            return _this5.handleSelectStart(e);
          };

          return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", n), t.addEventListener("selectstart", o), function () {
            _this5.sourceNodes["delete"](e), _this5.sourceNodeOptions["delete"](e), t.removeEventListener("dragstart", n), t.removeEventListener("selectstart", o), t.setAttribute("draggable", "false");
          };
        }
      }, {
        key: "connectDropTarget",
        value: function connectDropTarget(e, t) {
          var _this6 = this;

          var r = function r(t) {
            return _this6.handleDragEnter(t, e);
          },
              n = function n(t) {
            return _this6.handleDragOver(t, e);
          },
              o = function o(t) {
            return _this6.handleDrop(t, e);
          };

          return t.addEventListener("dragenter", r), t.addEventListener("dragover", n), t.addEventListener("drop", o), function () {
            t.removeEventListener("dragenter", r), t.removeEventListener("dragover", n), t.removeEventListener("drop", o);
          };
        }
      }, {
        key: "addEventListeners",
        value: function addEventListeners(e) {
          e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
        }
      }, {
        key: "removeEventListeners",
        value: function removeEventListeners(e) {
          e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
        }
      }, {
        key: "getCurrentSourceNodeOptions",
        value: function getCurrentSourceNodeOptions() {
          var e = this.monitor.getSourceId(),
              t = this.sourceNodeOptions.get(e);
          return E({
            dropEffect: this.altKeyPressed ? "copy" : "move"
          }, t || {});
        }
      }, {
        key: "getCurrentDropEffect",
        value: function getCurrentDropEffect() {
          return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
        }
      }, {
        key: "getCurrentSourcePreviewNodeOptions",
        value: function getCurrentSourcePreviewNodeOptions() {
          var e = this.monitor.getSourceId();
          return E({
            anchorX: .5,
            anchorY: .5,
            captureDraggingState: !1
          }, this.sourcePreviewNodeOptions.get(e) || {});
        }
      }, {
        key: "isDraggingNativeItem",
        value: function isDraggingNativeItem() {
          var e = this.monitor.getItemType();
          return Object.keys(n).some(function (t) {
            return n[t] === e;
          });
        }
      }, {
        key: "beginDragNativeItem",
        value: function beginDragNativeItem(e, t) {
          this.clearCurrentDragSourceNode(), this.currentNativeSource = function (e, t) {
            var r = f[e];
            if (!r) throw new Error("native type ".concat(e, " has no configuration"));
            var n = new s(r);
            return n.loadDataTransfer(t), n;
          }(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
        }
      }, {
        key: "setCurrentDragSourceNode",
        value: function setCurrentDragSourceNode(e) {
          var _this7 = this;

          this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
          this.mouseMoveTimeoutTimer = setTimeout(function () {
            var e;
            return null === (e = _this7.rootElement) || void 0 === e ? void 0 : e.addEventListener("mousemove", _this7.endDragIfSourceWasRemovedFromDOM, !0);
          }, 1e3);
        }
      }, {
        key: "clearCurrentDragSourceNode",
        value: function clearCurrentDragSourceNode() {
          if (this.currentDragSourceNode) {
            var e;
            if (this.currentDragSourceNode = null, this.rootElement) null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
            return this.mouseMoveTimeoutTimer = null, !0;
          }

          return !1;
        }
      }, {
        key: "handleDragStart",
        value: function handleDragStart(e, t) {
          e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t));
        }
      }, {
        key: "handleDragEnter",
        value: function handleDragEnter(e, t) {
          this.dragEnterTargetIds.unshift(t);
        }
      }, {
        key: "handleDragOver",
        value: function handleDragOver(e, t) {
          null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
        }
      }, {
        key: "handleDrop",
        value: function handleDrop(e, t) {
          this.dropTargetIds.unshift(t);
        }
      }, {
        key: "window",
        get: function get() {
          return this.options.window;
        }
      }, {
        key: "document",
        get: function get() {
          return this.options.document;
        }
      }, {
        key: "rootElement",
        get: function get() {
          return this.options.rootElement;
        }
      }]);

      function T(e, t, r) {
        var _this8 = this;

        _classCallCheck(this, T);

        this.sourcePreviewNodes = new Map(), this.sourcePreviewNodeOptions = new Map(), this.sourceNodes = new Map(), this.sourceNodeOptions = new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = function (e) {
          var t = _this8.sourceNodes.get(e);

          return t && y(t) || null;
        }, this.endDragNativeItem = function () {
          _this8.isDraggingNativeItem() && (_this8.actions.endDrag(), _this8.currentNativeHandle && _this8.registry.removeSource(_this8.currentNativeHandle), _this8.currentNativeHandle = null, _this8.currentNativeSource = null);
        }, this.isNodeInDocument = function (e) {
          return Boolean(e && _this8.document && _this8.document.body && _this8.document.body.contains(e));
        }, this.endDragIfSourceWasRemovedFromDOM = function () {
          var e = _this8.currentDragSourceNode;
          null == e || _this8.isNodeInDocument(e) || (_this8.clearCurrentDragSourceNode() && _this8.monitor.isDragging() && _this8.actions.endDrag(), _this8.cancelHover());
        }, this.scheduleHover = function (e) {
          null === _this8.hoverRafId && "undefined" != typeof requestAnimationFrame && (_this8.hoverRafId = requestAnimationFrame(function () {
            _this8.monitor.isDragging() && _this8.actions.hover(e || [], {
              clientOffset: _this8.lastClientOffset
            }), _this8.hoverRafId = null;
          }));
        }, this.cancelHover = function () {
          null !== _this8.hoverRafId && "undefined" != typeof cancelAnimationFrame && (cancelAnimationFrame(_this8.hoverRafId), _this8.hoverRafId = null);
        }, this.handleTopDragStartCapture = function () {
          _this8.clearCurrentDragSourceNode(), _this8.dragStartSourceIds = [];
        }, this.handleTopDragStart = function (e) {
          if (e.defaultPrevented) return;
          var t = _this8.dragStartSourceIds;
          _this8.dragStartSourceIds = null;
          var r = m(e);
          _this8.monitor.isDragging() && (_this8.actions.endDrag(), _this8.cancelHover()), _this8.actions.beginDrag(t || [], {
            publishSource: !1,
            getSourceClientOffset: _this8.getSourceClientOffset,
            clientOffset: r
          });
          var n = e.dataTransfer,
              o = h(n);

          if (_this8.monitor.isDragging()) {
            if (n && "function" == typeof n.setDragImage) {
              var _e6 = _this8.monitor.getSourceId(),
                  _t7 = _this8.sourceNodes.get(_e6),
                  _o2 = _this8.sourcePreviewNodes.get(_e6) || _t7;

              if (_o2) {
                var _this8$getCurrentSour = _this8.getCurrentSourcePreviewNodeOptions(),
                    _e7 = _this8$getCurrentSour.anchorX,
                    _i2 = _this8$getCurrentSour.anchorY,
                    _s3 = _this8$getCurrentSour.offsetX,
                    _a = _this8$getCurrentSour.offsetY,
                    _c = S(_t7, _o2, r, {
                  anchorX: _e7,
                  anchorY: _i2
                }, {
                  offsetX: _s3,
                  offsetY: _a
                });

                n.setDragImage(_o2, _c.x, _c.y);
              }
            }

            try {
              null == n || n.setData("application/json", {});
            } catch (e) {}

            _this8.setCurrentDragSourceNode(e.target);

            var _this8$getCurrentSour2 = _this8.getCurrentSourcePreviewNodeOptions(),
                _t6 = _this8$getCurrentSour2.captureDraggingState;

            _t6 ? _this8.actions.publishDragSource() : setTimeout(function () {
              return _this8.actions.publishDragSource();
            }, 0);
          } else if (o) _this8.beginDragNativeItem(o);else {
            if (n && !n.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
            e.preventDefault();
          }
        }, this.handleTopDragEndCapture = function () {
          _this8.clearCurrentDragSourceNode() && _this8.monitor.isDragging() && _this8.actions.endDrag(), _this8.cancelHover();
        }, this.handleTopDragEnterCapture = function (e) {
          var t;
          (_this8.dragEnterTargetIds = [], _this8.isDraggingNativeItem()) && (null === (t = _this8.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer));
          if (!_this8.enterLeaveCounter.enter(e.target) || _this8.monitor.isDragging()) return;
          var r = e.dataTransfer,
              n = h(r);
          n && _this8.beginDragNativeItem(n, r);
        }, this.handleTopDragEnter = function (e) {
          var t = _this8.dragEnterTargetIds;
          if (_this8.dragEnterTargetIds = [], !_this8.monitor.isDragging()) return;
          _this8.altKeyPressed = e.altKey, t.length > 0 && _this8.actions.hover(t, {
            clientOffset: m(e)
          });
          t.some(function (e) {
            return _this8.monitor.canDropOnTarget(e);
          }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = _this8.getCurrentDropEffect()));
        }, this.handleTopDragOverCapture = function (e) {
          var t;
          (_this8.dragOverTargetIds = [], _this8.isDraggingNativeItem()) && (null === (t = _this8.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer));
        }, this.handleTopDragOver = function (e) {
          var t = _this8.dragOverTargetIds;
          if (_this8.dragOverTargetIds = [], !_this8.monitor.isDragging()) return e.preventDefault(), void (e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
          _this8.altKeyPressed = e.altKey, _this8.lastClientOffset = m(e), _this8.scheduleHover(t);
          (t || []).some(function (e) {
            return _this8.monitor.canDropOnTarget(e);
          }) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = _this8.getCurrentDropEffect())) : _this8.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
        }, this.handleTopDragLeaveCapture = function (e) {
          _this8.isDraggingNativeItem() && e.preventDefault();
          _this8.enterLeaveCounter.leave(e.target) && (_this8.isDraggingNativeItem() && setTimeout(function () {
            return _this8.endDragNativeItem();
          }, 0), _this8.cancelHover());
        }, this.handleTopDropCapture = function (e) {
          var t;
          (_this8.dropTargetIds = [], _this8.isDraggingNativeItem()) ? (e.preventDefault(), null === (t = _this8.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer)) : h(e.dataTransfer) && e.preventDefault();

          _this8.enterLeaveCounter.reset();
        }, this.handleTopDrop = function (e) {
          var t = _this8.dropTargetIds;
          _this8.dropTargetIds = [], _this8.actions.hover(t, {
            clientOffset: m(e)
          }), _this8.actions.drop({
            dropEffect: _this8.getCurrentDropEffect()
          }), _this8.isDraggingNativeItem() ? _this8.endDragNativeItem() : _this8.monitor.isDragging() && _this8.actions.endDrag(), _this8.cancelHover();
        }, this.handleSelectStart = function (e) {
          var t = e.target;
          "function" == typeof t.dragDrop && ("INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable || (e.preventDefault(), t.dragDrop()));
        }, this.options = new b(t, r), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new i(this.isNodeInDocument);
      }

      return T;
    }();

    var w = function w(e, t, r) {
      return new T(e, t, r);
    };
  },
  7809: function _(e, t, r) {
    "use strict";

    var _f2;

    r.d(t, {
      TouchBackend: function TouchBackend() {
        return g;
      }
    });
    var n,
        o = r(6346);
    !function (e) {
      e.mouse = "mouse", e.touch = "touch", e.keyboard = "keyboard";
    }(n || (n = {}));

    var i =
    /*#__PURE__*/
    function () {
      _createClass(i, [{
        key: "delay",
        get: function get() {
          var e;
          return null !== (e = this.args.delay) && void 0 !== e ? e : 0;
        }
      }, {
        key: "scrollAngleRanges",
        get: function get() {
          return this.args.scrollAngleRanges;
        }
      }, {
        key: "getDropTargetElementsAtPoint",
        get: function get() {
          return this.args.getDropTargetElementsAtPoint;
        }
      }, {
        key: "ignoreContextMenu",
        get: function get() {
          var e;
          return null !== (e = this.args.ignoreContextMenu) && void 0 !== e && e;
        }
      }, {
        key: "enableHoverOutsideTarget",
        get: function get() {
          var e;
          return null !== (e = this.args.enableHoverOutsideTarget) && void 0 !== e && e;
        }
      }, {
        key: "enableKeyboardEvents",
        get: function get() {
          var e;
          return null !== (e = this.args.enableKeyboardEvents) && void 0 !== e && e;
        }
      }, {
        key: "enableMouseEvents",
        get: function get() {
          var e;
          return null !== (e = this.args.enableMouseEvents) && void 0 !== e && e;
        }
      }, {
        key: "enableTouchEvents",
        get: function get() {
          var e;
          return null === (e = this.args.enableTouchEvents) || void 0 === e || e;
        }
      }, {
        key: "touchSlop",
        get: function get() {
          return this.args.touchSlop || 0;
        }
      }, {
        key: "delayTouchStart",
        get: function get() {
          var e, t, r, n;
          return null !== (n = null !== (r = null === (e = this.args) || void 0 === e ? void 0 : e.delayTouchStart) && void 0 !== r ? r : null === (t = this.args) || void 0 === t ? void 0 : t.delay) && void 0 !== n ? n : 0;
        }
      }, {
        key: "delayMouseStart",
        get: function get() {
          var e, t, r, n;
          return null !== (n = null !== (r = null === (e = this.args) || void 0 === e ? void 0 : e.delayMouseStart) && void 0 !== r ? r : null === (t = this.args) || void 0 === t ? void 0 : t.delay) && void 0 !== n ? n : 0;
        }
      }, {
        key: "window",
        get: function get() {
          return this.context && this.context.window ? this.context.window : "undefined" != typeof window ? window : void 0;
        }
      }, {
        key: "document",
        get: function get() {
          var e;
          return (null === (e = this.context) || void 0 === e ? void 0 : e.document) ? this.context.document : this.window ? this.window.document : void 0;
        }
      }, {
        key: "rootElement",
        get: function get() {
          var e;
          return (null === (e = this.args) || void 0 === e ? void 0 : e.rootElement) || this.document;
        }
      }]);

      function i(e, t) {
        _classCallCheck(this, i);

        this.args = e, this.context = t;
      }

      return i;
    }();

    var s = 1,
        a = 0;

    function c(e) {
      return void 0 === e.button || e.button === a;
    }

    function u(e) {
      return !!e.targetTouches;
    }

    function l(e, t) {
      return u(e) ? function (e, t) {
        return 1 === e.targetTouches.length ? l(e.targetTouches[0]) : t && 1 === e.touches.length && e.touches[0].target === t.target ? l(e.touches[0]) : void 0;
      }(e, t) : {
        x: e.clientX,
        y: e.clientY
      };
    }

    var d = function () {
      var e = !1;

      try {
        addEventListener("test", function () {}, Object.defineProperty({}, "passive", {
          get: function get() {
            return e = !0, !0;
          }
        }));
      } catch (e) {}

      return e;
    }(),
        f = (_f2 = {}, _defineProperty(_f2, n.mouse, {
      start: "mousedown",
      move: "mousemove",
      end: "mouseup",
      contextmenu: "contextmenu"
    }), _defineProperty(_f2, n.touch, {
      start: "touchstart",
      move: "touchmove",
      end: "touchend"
    }), _defineProperty(_f2, n.keyboard, {
      keydown: "keydown"
    }), _f2);

    var h =
    /*#__PURE__*/
    function () {
      _createClass(h, [{
        key: "profile",
        value: function profile() {
          var e;
          return {
            sourceNodes: this.sourceNodes.size,
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            targetNodes: this.targetNodes.size,
            dragOverTargetIds: (null === (e = this.dragOverTargetIds) || void 0 === e ? void 0 : e.length) || 0
          };
        }
      }, {
        key: "setup",
        value: function setup() {
          var e = this.options.rootElement;
          e && ((0, o.invariant)(!h.isSetUp, "Cannot have two Touch backends at the same time."), h.isSetUp = !0, this.addEventListener(e, "start", this.getTopMoveStartHandler()), this.addEventListener(e, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(e, "move", this.handleTopMove), this.addEventListener(e, "move", this.handleTopMoveCapture, !0), this.addEventListener(e, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(e, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(e, "keydown", this.handleCancelOnEscape, !0));
        }
      }, {
        key: "teardown",
        value: function teardown() {
          var e = this.options.rootElement;
          e && (h.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(e, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(e, "start", this.handleTopMoveStart), this.removeEventListener(e, "move", this.handleTopMoveCapture, !0), this.removeEventListener(e, "move", this.handleTopMove), this.removeEventListener(e, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(e, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(e, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver());
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          var o = d ? {
            capture: n,
            passive: !1
          } : n;
          this.listenerTypes.forEach(function (n) {
            var i = f[n][t];
            i && e.addEventListener(i, r, o);
          });
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          var o = d ? {
            capture: n,
            passive: !1
          } : n;
          this.listenerTypes.forEach(function (n) {
            var i = f[n][t];
            i && e.removeEventListener(i, r, o);
          });
        }
      }, {
        key: "connectDragSource",
        value: function connectDragSource(e, t) {
          var _this9 = this;

          var r = this.handleMoveStart.bind(this, e);
          return this.sourceNodes.set(e, t), this.addEventListener(t, "start", r), function () {
            _this9.sourceNodes["delete"](e), _this9.removeEventListener(t, "start", r);
          };
        }
      }, {
        key: "connectDragPreview",
        value: function connectDragPreview(e, t, r) {
          var _this10 = this;

          return this.sourcePreviewNodeOptions.set(e, r), this.sourcePreviewNodes.set(e, t), function () {
            _this10.sourcePreviewNodes["delete"](e), _this10.sourcePreviewNodeOptions["delete"](e);
          };
        }
      }, {
        key: "connectDropTarget",
        value: function connectDropTarget(e, t) {
          var _this11 = this;

          var r = this.options.rootElement;
          if (!this.document || !r) return function () {};

          var n = function n(_n8) {
            if (!_this11.document || !r || !_this11.monitor.isDragging()) return;
            var o;

            switch (_n8.type) {
              case f.mouse.move:
                o = {
                  x: _n8.clientX,
                  y: _n8.clientY
                };
                break;

              case f.touch.move:
                var i, s;
                o = {
                  x: (null === (i = _n8.touches[0]) || void 0 === i ? void 0 : i.clientX) || 0,
                  y: (null === (s = _n8.touches[0]) || void 0 === s ? void 0 : s.clientY) || 0
                };
            }

            var a = null != o ? _this11.document.elementFromPoint(o.x, o.y) : void 0,
                c = a && t.contains(a);
            return a === t || c ? _this11.handleMove(_n8, e) : void 0;
          };

          return this.addEventListener(this.document.body, "move", n), this.targetNodes.set(e, t), function () {
            _this11.document && (_this11.targetNodes["delete"](e), _this11.removeEventListener(_this11.document.body, "move", n));
          };
        }
      }, {
        key: "getTopMoveStartHandler",
        value: function getTopMoveStartHandler() {
          return this.options.delayTouchStart || this.options.delayMouseStart ? this.handleTopMoveStartDelay : this.handleTopMoveStart;
        }
      }, {
        key: "installSourceNodeRemovalObserver",
        value: function installSourceNodeRemovalObserver(e) {
          var _this12 = this;

          this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = e, this.draggedSourceNodeRemovalObserver = new MutationObserver(function () {
            e && !e.parentElement && (_this12.resurrectSourceNode(), _this12.uninstallSourceNodeRemovalObserver());
          }), e && e.parentElement && this.draggedSourceNodeRemovalObserver.observe(e.parentElement, {
            childList: !0
          });
        }
      }, {
        key: "resurrectSourceNode",
        value: function resurrectSourceNode() {
          this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode));
        }
      }, {
        key: "uninstallSourceNodeRemovalObserver",
        value: function uninstallSourceNodeRemovalObserver() {
          this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0;
        }
      }, {
        key: "document",
        get: function get() {
          return this.options.document;
        }
      }]);

      function h(e, t, r) {
        var _this13 = this;

        _classCallCheck(this, h);

        this.getSourceClientOffset = function (e) {
          var t = _this13.sourceNodes.get(e);

          return t && function (e) {
            var t = 1 === e.nodeType ? e : e.parentElement;
            if (!t) return;

            var _t$getBoundingClientR2 = t.getBoundingClientRect(),
                r = _t$getBoundingClientR2.top,
                n = _t$getBoundingClientR2.left;

            return {
              x: n,
              y: r
            };
          }(t);
        }, this.handleTopMoveStartCapture = function (e) {
          c(e) && (_this13.moveStartSourceIds = []);
        }, this.handleMoveStart = function (e) {
          Array.isArray(_this13.moveStartSourceIds) && _this13.moveStartSourceIds.unshift(e);
        }, this.handleTopMoveStart = function (e) {
          if (!c(e)) return;
          var t = l(e);
          t && (u(e) && (_this13.lastTargetTouchFallback = e.targetTouches[0]), _this13._mouseClientOffset = t), _this13.waitingForDelay = !1;
        }, this.handleTopMoveStartDelay = function (e) {
          if (!c(e)) return;
          var t = e.type === f.touch.start ? _this13.options.delayTouchStart : _this13.options.delayMouseStart;
          _this13.timeout = setTimeout(_this13.handleTopMoveStart.bind(_this13, e), t), _this13.waitingForDelay = !0;
        }, this.handleTopMoveCapture = function () {
          _this13.dragOverTargetIds = [];
        }, this.handleMove = function (e, t) {
          _this13.dragOverTargetIds && _this13.dragOverTargetIds.unshift(t);
        }, this.handleTopMove = function (e) {
          if (_this13.timeout && clearTimeout(_this13.timeout), !_this13.document || _this13.waitingForDelay) return;
          var t = _this13.moveStartSourceIds,
              r = _this13.dragOverTargetIds,
              n = _this13.options.enableHoverOutsideTarget,
              o = l(e, _this13.lastTargetTouchFallback);
          if (!o) return;
          if (_this13._isScrolling || !_this13.monitor.isDragging() && function (e, t, r, n, o) {
            if (!o) return !1;
            var i = 180 * Math.atan2(n - t, r - e) / Math.PI + 180;

            for (var _e8 = 0; _e8 < o.length; ++_e8) {
              var _t8 = o[_e8];
              if (_t8 && (null == _t8.start || i >= _t8.start) && (null == _t8.end || i <= _t8.end)) return !0;
            }

            return !1;
          }(_this13._mouseClientOffset.x || 0, _this13._mouseClientOffset.y || 0, o.x, o.y, _this13.options.scrollAngleRanges)) return void (_this13._isScrolling = !0);
          var i, s, a, c;
          if (!_this13.monitor.isDragging() && _this13._mouseClientOffset.hasOwnProperty("x") && t && (i = _this13._mouseClientOffset.x || 0, s = _this13._mouseClientOffset.y || 0, a = o.x, c = o.y, Math.sqrt(Math.pow(Math.abs(a - i), 2) + Math.pow(Math.abs(c - s), 2)) > (_this13.options.touchSlop ? _this13.options.touchSlop : 0)) && (_this13.moveStartSourceIds = void 0, _this13.actions.beginDrag(t, {
            clientOffset: _this13._mouseClientOffset,
            getSourceClientOffset: _this13.getSourceClientOffset,
            publishSource: !1
          })), !_this13.monitor.isDragging()) return;

          var u = _this13.sourceNodes.get(_this13.monitor.getSourceId());

          _this13.installSourceNodeRemovalObserver(u), _this13.actions.publishDragSource(), e.cancelable && e.preventDefault();
          var d = (r || []).map(function (e) {
            return _this13.targetNodes.get(e);
          }).filter(function (e) {
            return !!e;
          }),
              f = _this13.options.getDropTargetElementsAtPoint ? _this13.options.getDropTargetElementsAtPoint(o.x, o.y, d) : _this13.document.elementsFromPoint(o.x, o.y),
              h = [];

          for (var _e9 in f) {
            if (!f.hasOwnProperty(_e9)) continue;
            var _t9 = f[_e9];

            for (null != _t9 && h.push(_t9); _t9;) {
              _t9 = _t9.parentElement, _t9 && -1 === h.indexOf(_t9) && h.push(_t9);
            }
          }

          var g = h.filter(function (e) {
            return d.indexOf(e) > -1;
          }).map(function (e) {
            return _this13._getDropTargetId(e);
          }).filter(function (e) {
            return !!e;
          }).filter(function (e, t, r) {
            return r.indexOf(e) === t;
          });
          if (n) for (var _e10 in _this13.targetNodes) {
            var _t10 = _this13.targetNodes.get(_e10);

            if (u && _t10 && _t10.contains(u) && -1 === g.indexOf(_e10)) {
              g.unshift(_e10);
              break;
            }
          }
          g.reverse(), _this13.actions.hover(g, {
            clientOffset: o
          });
        }, this._getDropTargetId = function (e) {
          var t = _this13.targetNodes.keys();

          var r = t.next();

          for (; !1 === r.done;) {
            var _n9 = r.value;
            if (e === _this13.targetNodes.get(_n9)) return _n9;
            r = t.next();
          }
        }, this.handleTopMoveEndCapture = function (e) {
          _this13._isScrolling = !1, _this13.lastTargetTouchFallback = void 0, function (e) {
            return void 0 === e.buttons || 0 == (e.buttons & s);
          }(e) && (_this13.monitor.isDragging() && !_this13.monitor.didDrop() ? (e.cancelable && e.preventDefault(), _this13._mouseClientOffset = {}, _this13.uninstallSourceNodeRemovalObserver(), _this13.actions.drop(), _this13.actions.endDrag()) : _this13.moveStartSourceIds = void 0);
        }, this.handleCancelOnEscape = function (e) {
          "Escape" === e.key && _this13.monitor.isDragging() && (_this13._mouseClientOffset = {}, _this13.uninstallSourceNodeRemovalObserver(), _this13.actions.endDrag());
        }, this.options = new i(r, t), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.sourceNodes = new Map(), this.sourcePreviewNodes = new Map(), this.sourcePreviewNodeOptions = new Map(), this.targetNodes = new Map(), this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(n.mouse), this.options.enableTouchEvents && this.listenerTypes.push(n.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(n.keyboard);
      }

      return h;
    }();

    var g = function g(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new h(e, t, r);
    };
  },
  81904: function _(e, t, r) {
    "use strict";

    r.d(t, {
      DndContext: function DndContext() {
        return n;
      }
    });
    var n = (0, r(50959).createContext)({
      dragDropManager: void 0
    });
  },
  23642: function _(e, t, r) {
    "use strict";

    r.d(t, {
      DndProvider: function DndProvider() {
        return fe;
      }
    });
    var n = r(16453),
        o = r(21153),
        i = r(6346);

    function s(e) {
      return "object" == _typeof(e);
    }

    var a = "dnd-core/INIT_COORDS",
        c = "dnd-core/BEGIN_DRAG",
        u = "dnd-core/PUBLISH_DRAG_SOURCE",
        l = "dnd-core/HOVER",
        d = "dnd-core/DROP",
        f = "dnd-core/END_DRAG";

    function h(e, t) {
      return {
        type: a,
        payload: {
          sourceClientOffset: t || null,
          clientOffset: e || null
        }
      };
    }

    var g = {
      type: a,
      payload: {
        clientOffset: null,
        sourceClientOffset: null
      }
    };

    function p(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          publishSource: !0
        };
        var _r$publishSource = r.publishSource,
            n = _r$publishSource === void 0 ? !0 : _r$publishSource,
            o = r.clientOffset,
            a = r.getSourceClientOffset,
            u = e.getMonitor(),
            l = e.getRegistry();
        e.dispatch(h(o)), function (e, t, r) {
          (0, i.invariant)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function (e) {
            (0, i.invariant)(r.getSource(e), "Expected sourceIds to be registered.");
          });
        }(t, u, l);

        var d = function (e, t) {
          var r = null;

          for (var _n10 = e.length - 1; _n10 >= 0; _n10--) {
            if (t.canDragSource(e[_n10])) {
              r = e[_n10];
              break;
            }
          }

          return r;
        }(t, u);

        if (null == d) return void e.dispatch(g);
        var f = null;

        if (o) {
          if (!a) throw new Error("getSourceClientOffset must be defined");
          !function (e) {
            (0, i.invariant)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.");
          }(a), f = a(d);
        }

        e.dispatch(h(o, f));
        var p = l.getSource(d).beginDrag(u, d);
        if (null == p) return;
        !function (e) {
          (0, i.invariant)(s(e), "Item must be an object.");
        }(p), l.pinSource(d);
        var v = l.getSourceType(d);
        return {
          type: c,
          payload: {
            itemType: v,
            item: p,
            sourceId: d,
            clientOffset: o || null,
            sourceClientOffset: f || null,
            isSourcePublic: !!n
          }
        };
      };
    }

    function v(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), n.forEach(function (t) {
          v(e, t, r[t]);
        });
      }

      return e;
    }

    function m(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var r = e.getMonitor(),
            n = e.getRegistry();
        !function (e) {
          (0, i.invariant)(e.isDragging(), "Cannot call drop while not dragging."), (0, i.invariant)(!e.didDrop(), "Cannot call drop twice during one drag operation.");
        }(r);

        var o = function (e) {
          var t = e.getTargetIds().filter(e.canDropOnTarget, e);
          return t.reverse(), t;
        }(r);

        o.forEach(function (o, a) {
          var c = function (e, t, r, n) {
            var o = r.getTarget(e);
            var a = o ? o.drop(n, e) : void 0;
            (function (e) {
              (0, i.invariant)(void 0 === e || s(e), "Drop result must either be an object or undefined.");
            })(a), void 0 === a && (a = 0 === t ? {} : n.getDropResult());
            return a;
          }(o, a, n, r),
              u = {
            type: d,
            payload: {
              dropResult: y({}, t, c)
            }
          };

          e.dispatch(u);
        });
      };
    }

    function S(e) {
      return function () {
        var t = e.getMonitor(),
            r = e.getRegistry();
        !function (e) {
          (0, i.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.");
        }(t);
        var n = t.getSourceId();

        if (null != n) {
          r.getSource(n, !0).endDrag(t, n), r.unpinSource();
        }

        return {
          type: f
        };
      };
    }

    function b(e, t) {
      return null === t ? null === e : Array.isArray(e) ? e.some(function (e) {
        return e === t;
      }) : e === t;
    }

    function O(e) {
      return function (t) {
        var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            r = _ref11.clientOffset;

        !function (e) {
          (0, i.invariant)(Array.isArray(e), "Expected targetIds to be an array.");
        }(t);
        var n = t.slice(0),
            o = e.getMonitor(),
            s = e.getRegistry();
        return function (e, t, r) {
          for (var _n11 = e.length - 1; _n11 >= 0; _n11--) {
            var _o3 = e[_n11];
            b(t.getTargetType(_o3), r) || e.splice(_n11, 1);
          }
        }(n, s, o.getItemType()), function (e, t, r) {
          (0, i.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, i.invariant)(!t.didDrop(), "Cannot call hover after drop.");

          for (var _t11 = 0; _t11 < e.length; _t11++) {
            var _n12 = e[_t11];
            (0, i.invariant)(e.lastIndexOf(_n12) === _t11, "Expected targetIds to be unique in the passed array.");

            var _o4 = r.getTarget(_n12);

            (0, i.invariant)(_o4, "Expected targetIds to be registered.");
          }
        }(n, o, s), function (e, t, r) {
          e.forEach(function (e) {
            r.getTarget(e).hover(t, e);
          });
        }(n, o, s), {
          type: l,
          payload: {
            targetIds: n,
            clientOffset: r || null
          }
        };
      };
    }

    function E(e) {
      return function () {
        if (e.getMonitor().isDragging()) return {
          type: u
        };
      };
    }

    var T =
    /*#__PURE__*/
    function () {
      _createClass(T, [{
        key: "receiveBackend",
        value: function receiveBackend(e) {
          this.backend = e;
        }
      }, {
        key: "getMonitor",
        value: function getMonitor() {
          return this.monitor;
        }
      }, {
        key: "getBackend",
        value: function getBackend() {
          return this.backend;
        }
      }, {
        key: "getRegistry",
        value: function getRegistry() {
          return this.monitor.registry;
        }
      }, {
        key: "getActions",
        value: function getActions() {
          var e = this,
              t = this.store.dispatch;

          var r = function (e) {
            return {
              beginDrag: p(e),
              publishDragSource: E(e),
              hover: O(e),
              drop: m(e),
              endDrag: S(e)
            };
          }(this);

          return Object.keys(r).reduce(function (n, o) {
            var i = r[o];
            var s;
            return n[o] = (s = i, function () {
              for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                r[_key2] = arguments[_key2];
              }

              var n = s.apply(e, r);
              void 0 !== n && t(n);
            }), n;
          }, {});
        }
      }, {
        key: "dispatch",
        value: function dispatch(e) {
          this.store.dispatch(e);
        }
      }]);

      function T(e, t) {
        var _this14 = this;

        _classCallCheck(this, T);

        this.isSetUp = !1, this.handleRefCountChange = function () {
          var e = _this14.store.getState().refCount > 0;
          _this14.backend && (e && !_this14.isSetUp ? (_this14.backend.setup(), _this14.isSetUp = !0) : !e && _this14.isSetUp && (_this14.backend.teardown(), _this14.isSetUp = !1));
        }, this.store = e, this.monitor = t, e.subscribe(this.handleRefCountChange);
      }

      return T;
    }();

    function w(e, t) {
      return {
        x: e.x - t.x,
        y: e.y - t.y
      };
    }

    var D = [],
        C = [];
    D.__IS_NONE__ = !0, C.__IS_ALL__ = !0;

    var I =
    /*#__PURE__*/
    function () {
      _createClass(I, [{
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(e) {
          var _this15 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var r = t.handlerIds;
          (0, i.invariant)("function" == typeof e, "listener must be a function."), (0, i.invariant)(void 0 === r || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
          var n = this.store.getState().stateId;
          return this.store.subscribe(function () {
            var t = _this15.store.getState(),
                o = t.stateId;

            try {
              var _i3 = o === n || o === n + 1 && !function (e, t) {
                return e !== D && (e === C || void 0 === t || (r = e, t.filter(function (e) {
                  return r.indexOf(e) > -1;
                })).length > 0);
                var r;
              }(t.dirtyHandlerIds, r);

              _i3 || e();
            } finally {
              n = o;
            }
          });
        }
      }, {
        key: "subscribeToOffsetChange",
        value: function subscribeToOffsetChange(e) {
          var _this16 = this;

          (0, i.invariant)("function" == typeof e, "listener must be a function.");
          var t = this.store.getState().dragOffset;
          return this.store.subscribe(function () {
            var r = _this16.store.getState().dragOffset;

            r !== t && (t = r, e());
          });
        }
      }, {
        key: "canDragSource",
        value: function canDragSource(e) {
          if (!e) return !1;
          var t = this.registry.getSource(e);
          return (0, i.invariant)(t, "Expected to find a valid source. sourceId=".concat(e)), !this.isDragging() && t.canDrag(this, e);
        }
      }, {
        key: "canDropOnTarget",
        value: function canDropOnTarget(e) {
          if (!e) return !1;
          var t = this.registry.getTarget(e);
          if ((0, i.invariant)(t, "Expected to find a valid target. targetId=".concat(e)), !this.isDragging() || this.didDrop()) return !1;
          return b(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e);
        }
      }, {
        key: "isDragging",
        value: function isDragging() {
          return Boolean(this.getItemType());
        }
      }, {
        key: "isDraggingSource",
        value: function isDraggingSource(e) {
          if (!e) return !1;
          var t = this.registry.getSource(e, !0);
          if ((0, i.invariant)(t, "Expected to find a valid source. sourceId=".concat(e)), !this.isDragging() || !this.isSourcePublic()) return !1;
          return this.registry.getSourceType(e) === this.getItemType() && t.isDragging(this, e);
        }
      }, {
        key: "isOverTarget",
        value: function isOverTarget(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            shallow: !1
          };
          if (!e) return !1;
          var r = t.shallow;
          if (!this.isDragging()) return !1;
          var n = this.registry.getTargetType(e),
              o = this.getItemType();
          if (o && !b(n, o)) return !1;
          var i = this.getTargetIds();
          if (!i.length) return !1;
          var s = i.indexOf(e);
          return r ? s === i.length - 1 : s > -1;
        }
      }, {
        key: "getItemType",
        value: function getItemType() {
          return this.store.getState().dragOperation.itemType;
        }
      }, {
        key: "getItem",
        value: function getItem() {
          return this.store.getState().dragOperation.item;
        }
      }, {
        key: "getSourceId",
        value: function getSourceId() {
          return this.store.getState().dragOperation.sourceId;
        }
      }, {
        key: "getTargetIds",
        value: function getTargetIds() {
          return this.store.getState().dragOperation.targetIds;
        }
      }, {
        key: "getDropResult",
        value: function getDropResult() {
          return this.store.getState().dragOperation.dropResult;
        }
      }, {
        key: "didDrop",
        value: function didDrop() {
          return this.store.getState().dragOperation.didDrop;
        }
      }, {
        key: "isSourcePublic",
        value: function isSourcePublic() {
          return Boolean(this.store.getState().dragOperation.isSourcePublic);
        }
      }, {
        key: "getInitialClientOffset",
        value: function getInitialClientOffset() {
          return this.store.getState().dragOffset.initialClientOffset;
        }
      }, {
        key: "getInitialSourceClientOffset",
        value: function getInitialSourceClientOffset() {
          return this.store.getState().dragOffset.initialSourceClientOffset;
        }
      }, {
        key: "getClientOffset",
        value: function getClientOffset() {
          return this.store.getState().dragOffset.clientOffset;
        }
      }, {
        key: "getSourceClientOffset",
        value: function getSourceClientOffset() {
          return function (e) {
            var t = e.clientOffset,
                r = e.initialClientOffset,
                n = e.initialSourceClientOffset;
            return t && r && n ? w((i = n, {
              x: (o = t).x + i.x,
              y: o.y + i.y
            }), r) : null;
            var o, i;
          }(this.store.getState().dragOffset);
        }
      }, {
        key: "getDifferenceFromInitialOffset",
        value: function getDifferenceFromInitialOffset() {
          return function (e) {
            var t = e.clientOffset,
                r = e.initialClientOffset;
            return t && r ? w(t, r) : null;
          }(this.store.getState().dragOffset);
        }
      }]);

      function I(e, t) {
        _classCallCheck(this, I);

        this.store = e, this.registry = t;
      }

      return I;
    }();

    var N = "undefined" != typeof global ? global : self,
        P = N.MutationObserver || N.WebKitMutationObserver;

    function x(e) {
      return function () {
        var t = setTimeout(n, 0),
            r = setInterval(n, 50);

        function n() {
          clearTimeout(t), clearInterval(r), e();
        }
      };
    }

    var M = "function" == typeof P ? function (e) {
      var t = 1;
      var r = new P(e),
          n = document.createTextNode("");
      return r.observe(n, {
        characterData: !0
      }), function () {
        t = -t, n.data = t;
      };
    } : x;

    var A =
    /*#__PURE__*/
    function () {
      _createClass(A, [{
        key: "call",
        value: function call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            this.task = null, this.release(this);
          }
        }
      }]);

      function A(e, t) {
        _classCallCheck(this, A);

        this.onError = e, this.release = t, this.task = null;
      }

      return A;
    }();

    var R = new (
    /*#__PURE__*/
    function () {
      _createClass(_class, [{
        key: "enqueueTask",
        value: function enqueueTask(e) {
          var t = this.queue,
              r = this.requestFlush;
          t.length || (r(), this.flushing = !0), t[t.length] = e;
        }
      }]);

      function _class() {
        var _this17 = this;

        _classCallCheck(this, _class);

        this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = function () {
          var e = _this17.queue;

          for (; _this17.index < e.length;) {
            var _t12 = _this17.index;

            if (_this17.index++, e[_t12].call(), _this17.index > _this17.capacity) {
              for (var _t13 = 0, _r4 = e.length - _this17.index; _t13 < _r4; _t13++) {
                e[_t13] = e[_t13 + _this17.index];
              }

              e.length -= _this17.index, _this17.index = 0;
            }
          }

          e.length = 0, _this17.index = 0, _this17.flushing = !1;
        }, this.registerPendingError = function (e) {
          _this17.pendingErrors.push(e), _this17.requestErrorThrow();
        }, this.requestFlush = M(this.flush), this.requestErrorThrow = x(function () {
          if (_this17.pendingErrors.length) throw _this17.pendingErrors.shift();
        });
      }

      return _class;
    }())(),
        L = new (
    /*#__PURE__*/
    function () {
      _createClass(_class2, [{
        key: "create",
        value: function create(e) {
          var t = this.freeTasks,
              r = t.length ? t.pop() : new A(this.onError, function (e) {
            return t[t.length] = e;
          });
          return r.task = e, r;
        }
      }]);

      function _class2(e) {
        _classCallCheck(this, _class2);

        this.onError = e, this.freeTasks = [];
      }

      return _class2;
    }())(R.registerPendingError);
    var _ = "dnd-core/ADD_SOURCE",
        j = "dnd-core/ADD_TARGET",
        k = "dnd-core/REMOVE_SOURCE",
        H = "dnd-core/REMOVE_TARGET";

    function U(e, t) {
      t && Array.isArray(e) ? e.forEach(function (e) {
        return U(e, !1);
      }) : (0, i.invariant)("string" == typeof e || "symbol" == _typeof(e), t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
    }

    var F;
    !function (e) {
      e.SOURCE = "SOURCE", e.TARGET = "TARGET";
    }(F || (F = {}));
    var $ = 0;

    function B(e) {
      var t = ($++).toString();

      switch (e) {
        case F.SOURCE:
          return "S".concat(t);

        case F.TARGET:
          return "T".concat(t);

        default:
          throw new Error("Unknown Handler Role: ".concat(e));
      }
    }

    function q(e) {
      switch (e[0]) {
        case "S":
          return F.SOURCE;

        case "T":
          return F.TARGET;

        default:
          throw new Error("Cannot parse handler ID: ".concat(e));
      }
    }

    function K(e, t) {
      var r = e.entries();
      var n = !1;

      do {
        var _r$next = r.next(),
            _e11 = _r$next.done,
            _r$next$value = _slicedToArray(_r$next.value, 2),
            _o5 = _r$next$value[1];

        if (_o5 === t) return !0;
        n = !!_e11;
      } while (!n);

      return !1;
    }

    var G =
    /*#__PURE__*/
    function () {
      _createClass(G, [{
        key: "addSource",
        value: function addSource(e, t) {
          U(e), function (e) {
            (0, i.invariant)("function" == typeof e.canDrag, "Expected canDrag to be a function."), (0, i.invariant)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."), (0, i.invariant)("function" == typeof e.endDrag, "Expected endDrag to be a function.");
          }(t);
          var r = this.addHandler(F.SOURCE, e, t);
          return this.store.dispatch(function (e) {
            return {
              type: _,
              payload: {
                sourceId: e
              }
            };
          }(r)), r;
        }
      }, {
        key: "addTarget",
        value: function addTarget(e, t) {
          U(e, !0), function (e) {
            (0, i.invariant)("function" == typeof e.canDrop, "Expected canDrop to be a function."), (0, i.invariant)("function" == typeof e.hover, "Expected hover to be a function."), (0, i.invariant)("function" == typeof e.drop, "Expected beginDrag to be a function.");
          }(t);
          var r = this.addHandler(F.TARGET, e, t);
          return this.store.dispatch(function (e) {
            return {
              type: j,
              payload: {
                targetId: e
              }
            };
          }(r)), r;
        }
      }, {
        key: "containsHandler",
        value: function containsHandler(e) {
          return K(this.dragSources, e) || K(this.dropTargets, e);
        }
      }, {
        key: "getSource",
        value: function getSource(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          (0, i.invariant)(this.isSourceId(e), "Expected a valid source ID.");
          return t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
        }
      }, {
        key: "getTarget",
        value: function getTarget(e) {
          return (0, i.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
        }
      }, {
        key: "getSourceType",
        value: function getSourceType(e) {
          return (0, i.invariant)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
        }
      }, {
        key: "getTargetType",
        value: function getTargetType(e) {
          return (0, i.invariant)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
        }
      }, {
        key: "isSourceId",
        value: function isSourceId(e) {
          return q(e) === F.SOURCE;
        }
      }, {
        key: "isTargetId",
        value: function isTargetId(e) {
          return q(e) === F.TARGET;
        }
      }, {
        key: "removeSource",
        value: function removeSource(e) {
          var _this18 = this;

          var t;
          (0, i.invariant)(this.getSource(e), "Expected an existing source."), this.store.dispatch(function (e) {
            return {
              type: k,
              payload: {
                sourceId: e
              }
            };
          }(e)), t = function t() {
            _this18.dragSources["delete"](e), _this18.types["delete"](e);
          }, R.enqueueTask(L.create(t));
        }
      }, {
        key: "removeTarget",
        value: function removeTarget(e) {
          (0, i.invariant)(this.getTarget(e), "Expected an existing target."), this.store.dispatch(function (e) {
            return {
              type: H,
              payload: {
                targetId: e
              }
            };
          }(e)), this.dropTargets["delete"](e), this.types["delete"](e);
        }
      }, {
        key: "pinSource",
        value: function pinSource(e) {
          var t = this.getSource(e);
          (0, i.invariant)(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t;
        }
      }, {
        key: "unpinSource",
        value: function unpinSource() {
          (0, i.invariant)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
        }
      }, {
        key: "addHandler",
        value: function addHandler(e, t, r) {
          var n = B(e);
          return this.types.set(n, t), e === F.SOURCE ? this.dragSources.set(n, r) : e === F.TARGET && this.dropTargets.set(n, r), n;
        }
      }]);

      function G(e) {
        _classCallCheck(this, G);

        this.types = new Map(), this.dragSources = new Map(), this.dropTargets = new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
      }

      return G;
    }();

    var W = function W(e, t) {
      return e === t;
    };

    function Y() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : D;
      var t = arguments.length > 1 ? arguments[1] : undefined;

      switch (t.type) {
        case l:
          break;

        case _:
        case j:
        case H:
        case k:
          return D;

        default:
          return C;
      }

      var _t$payload = t.payload,
          _t$payload$targetIds = _t$payload.targetIds,
          r = _t$payload$targetIds === void 0 ? [] : _t$payload$targetIds,
          _t$payload$prevTarget = _t$payload.prevTargetIds,
          n = _t$payload$prevTarget === void 0 ? [] : _t$payload$prevTarget,
          o = function (e, t) {
        var r = new Map(),
            n = function n(e) {
          r.set(e, r.has(e) ? r.get(e) + 1 : 1);
        };

        e.forEach(n), t.forEach(n);
        var o = [];
        return r.forEach(function (e, t) {
          1 === e && o.push(t);
        }), o;
      }(r, n);

      if (!(o.length > 0 || !function (e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : W;
        if (e.length !== t.length) return !1;

        for (var _n13 = 0; _n13 < e.length; ++_n13) {
          if (!r(e[_n13], t[_n13])) return !1;
        }

        return !0;
      }(r, n))) return D;
      var i = n[n.length - 1],
          s = r[r.length - 1];
      return i !== s && (i && o.push(i), s && o.push(s)), o;
    }

    function z(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var X = {
      initialSourceClientOffset: null,
      initialClientOffset: null,
      clientOffset: null
    };

    function V() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : X;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var r = t.payload;

      switch (t.type) {
        case a:
        case c:
          return {
            initialSourceClientOffset: r.sourceClientOffset,
            initialClientOffset: r.clientOffset,
            clientOffset: r.clientOffset
          };

        case l:
          return n = e.clientOffset, o = r.clientOffset, !n && !o || n && o && n.x === o.x && n.y === o.y ? e : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }))), n.forEach(function (t) {
                z(e, t, r[t]);
              });
            }

            return e;
          }({}, e, {
            clientOffset: r.clientOffset
          });

        case f:
        case d:
          return X;

        default:
          return e;
      }

      var n, o;
    }

    function J(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function Q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), n.forEach(function (t) {
          J(e, t, r[t]);
        });
      }

      return e;
    }

    var Z = {
      itemType: null,
      item: null,
      sourceId: null,
      targetIds: [],
      dropResult: null,
      didDrop: !1,
      isSourcePublic: null
    };

    function ee() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Z;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var r = t.payload;

      switch (t.type) {
        case c:
          return Q({}, e, {
            itemType: r.itemType,
            item: r.item,
            sourceId: r.sourceId,
            isSourcePublic: r.isSourcePublic,
            dropResult: null,
            didDrop: !1
          });

        case u:
          return Q({}, e, {
            isSourcePublic: !0
          });

        case l:
          return Q({}, e, {
            targetIds: r.targetIds
          });

        case H:
          return -1 === e.targetIds.indexOf(r.targetId) ? e : Q({}, e, {
            targetIds: (n = e.targetIds, o = r.targetId, n.filter(function (e) {
              return e !== o;
            }))
          });

        case d:
          return Q({}, e, {
            dropResult: r.dropResult,
            didDrop: !0,
            targetIds: []
          });

        case f:
          return Q({}, e, {
            itemType: null,
            item: null,
            sourceId: null,
            dropResult: null,
            didDrop: !1,
            isSourcePublic: null,
            targetIds: []
          });

        default:
          return e;
      }

      var n, o;
    }

    function te() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 ? arguments[1] : undefined;

      switch (t.type) {
        case _:
        case j:
          return e + 1;

        case k:
        case H:
          return e - 1;

        default:
          return e;
      }
    }

    function re() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return e + 1;
    }

    function ne(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function oe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), n.forEach(function (t) {
          ne(e, t, r[t]);
        });
      }

      return e;
    }

    function ie() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = arguments.length > 1 ? arguments[1] : undefined;
      return {
        dirtyHandlerIds: Y(e.dirtyHandlerIds, {
          type: t.type,
          payload: oe({}, t.payload, {
            prevTargetIds: (r = e, n = "dragOperation.targetIds", o = [], n.split(".").reduce(function (e, t) {
              return e && e[t] ? e[t] : o || null;
            }, r))
          })
        }),
        dragOffset: V(e.dragOffset, t),
        refCount: te(e.refCount, t),
        dragOperation: ee(e.dragOperation, t),
        stateId: re(e.stateId)
      };
      var r, n, o;
    }

    function se(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

      var i = function (e) {
        var t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return (0, o.createStore)(ie, e && t && t({
          name: "dnd-core",
          instanceId: "dnd-core"
        }));
      }(n),
          s = new I(i, new G(i)),
          a = new T(i, s),
          c = e(a, t, r);

      return a.receiveBackend(c), a;
    }

    var ae = r(50959),
        ce = r(81904);

    function ue(e, t) {
      if (null == e) return {};

      var r,
          n,
          o = function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = {},
            i = Object.keys(e);

        for (n = 0; n < i.length; n++) {
          r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        }

        return o;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);

        for (n = 0; n < i.length; n++) {
          r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        }
      }

      return o;
    }

    var le = 0;
    var de = Symbol["for"]("__REACT_DND_CONTEXT_INSTANCE__");
    var fe = (0, ae.memo)(function (e) {
      var t = e.children,
          r = ue(e, ["children"]);

      var _ref12 = function (e) {
        if ("manager" in e) {
          return [{
            dragDropManager: e.manager
          }, !1];
        }

        var t = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : he();
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var n = arguments.length > 3 ? arguments[3] : undefined;
          var o = t;
          o[de] || (o[de] = {
            dragDropManager: se(e, t, r, n)
          });
          return o[de];
        }(e.backend, e.context, e.options, e.debugMode),
            r = !e.context;

        return [t, r];
      }(r),
          _ref13 = _slicedToArray(_ref12, 2),
          o = _ref13[0],
          i = _ref13[1];

      return (0, ae.useEffect)(function () {
        if (i) {
          var _e12 = he();

          return ++le, function () {
            0 == --le && (_e12[de] = null);
          };
        }
      }, []), (0, n.jsx)(ce.DndContext.Provider, {
        value: o,
        children: t
      });
    });

    function he() {
      return "undefined" != typeof global ? global : window;
    }
  },
  91701: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useCollectedProps: function useCollectedProps() {
        return i;
      }
    });
    var n = r(76121),
        o = r(74401);

    function i(e, t, r) {
      return function (e, t, r) {
        var _ref14 = (0, n.useCollector)(e, t, r),
            _ref15 = _slicedToArray(_ref14, 2),
            i = _ref15[0],
            s = _ref15[1];

        return (0, o.useIsomorphicLayoutEffect)(function () {
          var t = e.getHandlerId();
          if (null != t) return e.subscribeToStateChange(s, {
            handlerIds: [t]
          });
        }, [e, s]), i;
      }(t, e || function () {
        return {};
      }, function () {
        return r.reconnect();
      });
    }
  },
  76121: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useCollector: function useCollector() {
        return s;
      }
    });
    var n = r(3341),
        o = r(50959),
        i = r(74401);

    function s(e, t, r) {
      var _ref16 = (0, o.useState)(function () {
        return t(e);
      }),
          _ref17 = _slicedToArray(_ref16, 2),
          s = _ref17[0],
          a = _ref17[1],
          c = (0, o.useCallback)(function () {
        var o = t(e);
        n(s, o) || (a(o), r && r());
      }, [s, e, r]);

      return (0, i.useIsomorphicLayoutEffect)(c), [s, c];
    }
  },
  42357: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useDrag: function useDrag() {
        return O;
      }
    });
    var n = r(6346),
        o = r(91701),
        i = r(82442),
        s = r(50959);

    function a(e) {
      return (0, s.useMemo)(function () {
        return e.hooks.dragSource();
      }, [e]);
    }

    function c(e) {
      return (0, s.useMemo)(function () {
        return e.hooks.dragPreview();
      }, [e]);
    }

    var u = r(98789),
        l = r(71982),
        d = r(12406);

    var f =
    /*#__PURE__*/
    function () {
      _createClass(f, [{
        key: "receiveHandlerId",
        value: function receiveHandlerId(e) {
          this.handlerId !== e && (this.handlerId = e, this.reconnect());
        }
      }, {
        key: "reconnect",
        value: function reconnect() {
          var e = this.reconnectDragSource();
          this.reconnectDragPreview(e);
        }
      }, {
        key: "reconnectDragSource",
        value: function reconnectDragSource() {
          var e = this.dragSource,
              t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
          return t && this.disconnectDragSource(), this.handlerId ? e ? (t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), t) : (this.lastConnectedDragSource = e, t) : t;
        }
      }, {
        key: "reconnectDragPreview",
        value: function reconnectDragPreview() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          var t = this.dragPreview,
              r = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
          r && this.disconnectDragPreview(), this.handlerId && (t ? r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = t, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, t, this.dragPreviewOptions)) : this.lastConnectedDragPreview = t);
        }
      }, {
        key: "didHandlerIdChange",
        value: function didHandlerIdChange() {
          return this.lastConnectedHandlerId !== this.handlerId;
        }
      }, {
        key: "didConnectedDragSourceChange",
        value: function didConnectedDragSourceChange() {
          return this.lastConnectedDragSource !== this.dragSource;
        }
      }, {
        key: "didConnectedDragPreviewChange",
        value: function didConnectedDragPreviewChange() {
          return this.lastConnectedDragPreview !== this.dragPreview;
        }
      }, {
        key: "didDragSourceOptionsChange",
        value: function didDragSourceOptionsChange() {
          return !(0, u.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
        }
      }, {
        key: "didDragPreviewOptionsChange",
        value: function didDragPreviewOptionsChange() {
          return !(0, u.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
        }
      }, {
        key: "disconnectDragSource",
        value: function disconnectDragSource() {
          this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
        }
      }, {
        key: "disconnectDragPreview",
        value: function disconnectDragPreview() {
          this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
        }
      }, {
        key: "clearDragSource",
        value: function clearDragSource() {
          this.dragSourceNode = null, this.dragSourceRef = null;
        }
      }, {
        key: "clearDragPreview",
        value: function clearDragPreview() {
          this.dragPreviewNode = null, this.dragPreviewRef = null;
        }
      }, {
        key: "connectTarget",
        get: function get() {
          return this.dragSource;
        }
      }, {
        key: "dragSourceOptions",
        get: function get() {
          return this.dragSourceOptionsInternal;
        },
        set: function set(e) {
          this.dragSourceOptionsInternal = e;
        }
      }, {
        key: "dragPreviewOptions",
        get: function get() {
          return this.dragPreviewOptionsInternal;
        },
        set: function set(e) {
          this.dragPreviewOptionsInternal = e;
        }
      }, {
        key: "dragSource",
        get: function get() {
          return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
        }
      }, {
        key: "dragPreview",
        get: function get() {
          return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
        }
      }]);

      function f(e) {
        var _this19 = this;

        _classCallCheck(this, f);

        this.hooks = (0, d.wrapConnectorHooks)({
          dragSource: function dragSource(e, t) {
            _this19.clearDragSource(), _this19.dragSourceOptions = t || null, (0, l.isRef)(e) ? _this19.dragSourceRef = e : _this19.dragSourceNode = e, _this19.reconnectDragSource();
          },
          dragPreview: function dragPreview(e, t) {
            _this19.clearDragPreview(), _this19.dragPreviewOptions = t || null, (0, l.isRef)(e) ? _this19.dragPreviewRef = e : _this19.dragPreviewNode = e, _this19.reconnectDragPreview();
          }
        }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
      }

      return f;
    }();

    var h = r(84570),
        g = r(74401);
    var p = !1,
        v = !1;

    var y =
    /*#__PURE__*/
    function () {
      _createClass(y, [{
        key: "receiveHandlerId",
        value: function receiveHandlerId(e) {
          this.sourceId = e;
        }
      }, {
        key: "getHandlerId",
        value: function getHandlerId() {
          return this.sourceId;
        }
      }, {
        key: "canDrag",
        value: function canDrag() {
          (0, n.invariant)(!p, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");

          try {
            return p = !0, this.internalMonitor.canDragSource(this.sourceId);
          } finally {
            p = !1;
          }
        }
      }, {
        key: "isDragging",
        value: function isDragging() {
          if (!this.sourceId) return !1;
          (0, n.invariant)(!v, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");

          try {
            return v = !0, this.internalMonitor.isDraggingSource(this.sourceId);
          } finally {
            v = !1;
          }
        }
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t);
        }
      }, {
        key: "isDraggingSource",
        value: function isDraggingSource(e) {
          return this.internalMonitor.isDraggingSource(e);
        }
      }, {
        key: "isOverTarget",
        value: function isOverTarget(e, t) {
          return this.internalMonitor.isOverTarget(e, t);
        }
      }, {
        key: "getTargetIds",
        value: function getTargetIds() {
          return this.internalMonitor.getTargetIds();
        }
      }, {
        key: "isSourcePublic",
        value: function isSourcePublic() {
          return this.internalMonitor.isSourcePublic();
        }
      }, {
        key: "getSourceId",
        value: function getSourceId() {
          return this.internalMonitor.getSourceId();
        }
      }, {
        key: "subscribeToOffsetChange",
        value: function subscribeToOffsetChange(e) {
          return this.internalMonitor.subscribeToOffsetChange(e);
        }
      }, {
        key: "canDragSource",
        value: function canDragSource(e) {
          return this.internalMonitor.canDragSource(e);
        }
      }, {
        key: "canDropOnTarget",
        value: function canDropOnTarget(e) {
          return this.internalMonitor.canDropOnTarget(e);
        }
      }, {
        key: "getItemType",
        value: function getItemType() {
          return this.internalMonitor.getItemType();
        }
      }, {
        key: "getItem",
        value: function getItem() {
          return this.internalMonitor.getItem();
        }
      }, {
        key: "getDropResult",
        value: function getDropResult() {
          return this.internalMonitor.getDropResult();
        }
      }, {
        key: "didDrop",
        value: function didDrop() {
          return this.internalMonitor.didDrop();
        }
      }, {
        key: "getInitialClientOffset",
        value: function getInitialClientOffset() {
          return this.internalMonitor.getInitialClientOffset();
        }
      }, {
        key: "getInitialSourceClientOffset",
        value: function getInitialSourceClientOffset() {
          return this.internalMonitor.getInitialSourceClientOffset();
        }
      }, {
        key: "getSourceClientOffset",
        value: function getSourceClientOffset() {
          return this.internalMonitor.getSourceClientOffset();
        }
      }, {
        key: "getClientOffset",
        value: function getClientOffset() {
          return this.internalMonitor.getClientOffset();
        }
      }, {
        key: "getDifferenceFromInitialOffset",
        value: function getDifferenceFromInitialOffset() {
          return this.internalMonitor.getDifferenceFromInitialOffset();
        }
      }]);

      function y(e) {
        _classCallCheck(this, y);

        this.sourceId = null, this.internalMonitor = e.getMonitor();
      }

      return y;
    }();

    var m = r(87408);

    var S =
    /*#__PURE__*/
    function () {
      _createClass(S, [{
        key: "beginDrag",
        value: function beginDrag() {
          var e = this.spec,
              t = this.monitor;
          var r = null;
          return r = "object" == _typeof(e.item) ? e.item : "function" == typeof e.item ? e.item(t) : {}, null != r ? r : null;
        }
      }, {
        key: "canDrag",
        value: function canDrag() {
          var e = this.spec,
              t = this.monitor;
          return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(t);
        }
      }, {
        key: "isDragging",
        value: function isDragging(e, t) {
          var r = this.spec,
              n = this.monitor,
              o = r.isDragging;
          return o ? o(n) : t === e.getSourceId();
        }
      }, {
        key: "endDrag",
        value: function endDrag() {
          var e = this.spec,
              t = this.monitor,
              r = this.connector,
              n = e.end;
          n && n(t.getItem(), t), r.reconnect();
        }
      }]);

      function S(e, t, r) {
        _classCallCheck(this, S);

        this.spec = e, this.monitor = t, this.connector = r;
      }

      return S;
    }();

    function b(e, t, r) {
      var o = (0, h.useDragDropManager)(),
          i = function (e, t, r) {
        var n = (0, s.useMemo)(function () {
          return new S(e, t, r);
        }, [t, r]);
        return (0, s.useEffect)(function () {
          n.spec = e;
        }, [e]), n;
      }(e, t, r),
          a = function (e) {
        return (0, s.useMemo)(function () {
          var t = e.type;
          return (0, n.invariant)(null != t, "spec.type must be defined"), t;
        }, [e]);
      }(e);

      (0, g.useIsomorphicLayoutEffect)(function () {
        if (null != a) {
          var _ref18 = (0, m.registerSource)(a, i, o),
              _ref19 = _slicedToArray(_ref18, 2),
              _e13 = _ref19[0],
              _n14 = _ref19[1];

          return t.receiveHandlerId(_e13), r.receiveHandlerId(_e13), _n14;
        }
      }, [o, t, r, i, a]);
    }

    function O(e, t) {
      var r = (0, i.useOptionalFactory)(e, t);
      (0, n.invariant)(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");

      var u = function () {
        var e = (0, h.useDragDropManager)();
        return (0, s.useMemo)(function () {
          return new y(e);
        }, [e]);
      }(),
          l = function (e, t) {
        var r = (0, h.useDragDropManager)(),
            n = (0, s.useMemo)(function () {
          return new f(r.getBackend());
        }, [r]);
        return (0, g.useIsomorphicLayoutEffect)(function () {
          return n.dragSourceOptions = e || null, n.reconnect(), function () {
            return n.disconnectDragSource();
          };
        }, [n, e]), (0, g.useIsomorphicLayoutEffect)(function () {
          return n.dragPreviewOptions = t || null, n.reconnect(), function () {
            return n.disconnectDragPreview();
          };
        }, [n, t]), n;
      }(r.options, r.previewOptions);

      return b(r, u, l), [(0, o.useCollectedProps)(r.collect, u, l), a(l), c(l)];
    }
  },
  84570: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useDragDropManager: function useDragDropManager() {
        return s;
      }
    });
    var n = r(6346),
        o = r(50959),
        i = r(81904);

    function s() {
      var _ref20 = (0, o.useContext)(i.DndContext),
          e = _ref20.dragDropManager;

      return (0, n.invariant)(null != e, "Expected drag drop context"), e;
    }
  },
  85783: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useDragLayer: function useDragLayer() {
        return s;
      }
    });
    var n = r(50959),
        o = r(76121),
        i = r(84570);

    function s(e) {
      var t = (0, i.useDragDropManager)().getMonitor(),
          _ref21 = (0, o.useCollector)(t, e),
          _ref22 = _slicedToArray(_ref21, 2),
          r = _ref22[0],
          s = _ref22[1];

      return (0, n.useEffect)(function () {
        return t.subscribeToOffsetChange(s);
      }), (0, n.useEffect)(function () {
        return t.subscribeToStateChange(s);
      }), r;
    }
  },
  40933: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useDrop: function useDrop() {
        return S;
      }
    });
    var n = r(91701),
        o = r(82442),
        i = r(50959);

    function s(e) {
      return (0, i.useMemo)(function () {
        return e.hooks.dropTarget();
      }, [e]);
    }

    var a = r(98789),
        c = r(71982),
        u = r(12406);

    var l =
    /*#__PURE__*/
    function () {
      _createClass(l, [{
        key: "reconnect",
        value: function reconnect() {
          var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
          e && this.disconnectDropTarget();
          var t = this.dropTarget;
          this.handlerId && (t ? e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions)) : this.lastConnectedDropTarget = t);
        }
      }, {
        key: "receiveHandlerId",
        value: function receiveHandlerId(e) {
          e !== this.handlerId && (this.handlerId = e, this.reconnect());
        }
      }, {
        key: "didHandlerIdChange",
        value: function didHandlerIdChange() {
          return this.lastConnectedHandlerId !== this.handlerId;
        }
      }, {
        key: "didDropTargetChange",
        value: function didDropTargetChange() {
          return this.lastConnectedDropTarget !== this.dropTarget;
        }
      }, {
        key: "didOptionsChange",
        value: function didOptionsChange() {
          return !(0, a.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
        }
      }, {
        key: "disconnectDropTarget",
        value: function disconnectDropTarget() {
          this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
        }
      }, {
        key: "clearDropTarget",
        value: function clearDropTarget() {
          this.dropTargetRef = null, this.dropTargetNode = null;
        }
      }, {
        key: "connectTarget",
        get: function get() {
          return this.dropTarget;
        }
      }, {
        key: "dropTargetOptions",
        get: function get() {
          return this.dropTargetOptionsInternal;
        },
        set: function set(e) {
          this.dropTargetOptionsInternal = e;
        }
      }, {
        key: "dropTarget",
        get: function get() {
          return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
        }
      }]);

      function l(e) {
        var _this20 = this;

        _classCallCheck(this, l);

        this.hooks = (0, u.wrapConnectorHooks)({
          dropTarget: function dropTarget(e, t) {
            _this20.clearDropTarget(), _this20.dropTargetOptions = t, (0, c.isRef)(e) ? _this20.dropTargetRef = e : _this20.dropTargetNode = e, _this20.reconnect();
          }
        }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
      }

      return l;
    }();

    var d = r(84570),
        f = r(74401);
    var h = r(6346);
    var g = !1;

    var p =
    /*#__PURE__*/
    function () {
      _createClass(p, [{
        key: "receiveHandlerId",
        value: function receiveHandlerId(e) {
          this.targetId = e;
        }
      }, {
        key: "getHandlerId",
        value: function getHandlerId() {
          return this.targetId;
        }
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t);
        }
      }, {
        key: "canDrop",
        value: function canDrop() {
          if (!this.targetId) return !1;
          (0, h.invariant)(!g, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");

          try {
            return g = !0, this.internalMonitor.canDropOnTarget(this.targetId);
          } finally {
            g = !1;
          }
        }
      }, {
        key: "isOver",
        value: function isOver(e) {
          return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e);
        }
      }, {
        key: "getItemType",
        value: function getItemType() {
          return this.internalMonitor.getItemType();
        }
      }, {
        key: "getItem",
        value: function getItem() {
          return this.internalMonitor.getItem();
        }
      }, {
        key: "getDropResult",
        value: function getDropResult() {
          return this.internalMonitor.getDropResult();
        }
      }, {
        key: "didDrop",
        value: function didDrop() {
          return this.internalMonitor.didDrop();
        }
      }, {
        key: "getInitialClientOffset",
        value: function getInitialClientOffset() {
          return this.internalMonitor.getInitialClientOffset();
        }
      }, {
        key: "getInitialSourceClientOffset",
        value: function getInitialSourceClientOffset() {
          return this.internalMonitor.getInitialSourceClientOffset();
        }
      }, {
        key: "getSourceClientOffset",
        value: function getSourceClientOffset() {
          return this.internalMonitor.getSourceClientOffset();
        }
      }, {
        key: "getClientOffset",
        value: function getClientOffset() {
          return this.internalMonitor.getClientOffset();
        }
      }, {
        key: "getDifferenceFromInitialOffset",
        value: function getDifferenceFromInitialOffset() {
          return this.internalMonitor.getDifferenceFromInitialOffset();
        }
      }]);

      function p(e) {
        _classCallCheck(this, p);

        this.targetId = null, this.internalMonitor = e.getMonitor();
      }

      return p;
    }();

    var v = r(87408);

    var y =
    /*#__PURE__*/
    function () {
      _createClass(y, [{
        key: "canDrop",
        value: function canDrop() {
          var e = this.spec,
              t = this.monitor;
          return !e.canDrop || e.canDrop(t.getItem(), t);
        }
      }, {
        key: "hover",
        value: function hover() {
          var e = this.spec,
              t = this.monitor;
          e.hover && e.hover(t.getItem(), t);
        }
      }, {
        key: "drop",
        value: function drop() {
          var e = this.spec,
              t = this.monitor;
          if (e.drop) return e.drop(t.getItem(), t);
        }
      }]);

      function y(e, t) {
        _classCallCheck(this, y);

        this.spec = e, this.monitor = t;
      }

      return y;
    }();

    function m(e, t, r) {
      var n = (0, d.useDragDropManager)(),
          o = function (e, t) {
        var r = (0, i.useMemo)(function () {
          return new y(e, t);
        }, [t]);
        return (0, i.useEffect)(function () {
          r.spec = e;
        }, [e]), r;
      }(e, t),
          s = function (e) {
        var t = e.accept;
        return (0, i.useMemo)(function () {
          return (0, h.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t];
        }, [t]);
      }(e);

      (0, f.useIsomorphicLayoutEffect)(function () {
        var _ref23 = (0, v.registerTarget)(s, o, n),
            _ref24 = _slicedToArray(_ref23, 2),
            e = _ref24[0],
            i = _ref24[1];

        return t.receiveHandlerId(e), r.receiveHandlerId(e), i;
      }, [n, t, o, r, s.map(function (e) {
        return e.toString();
      }).join("|")]);
    }

    function S(e, t) {
      var r = (0, o.useOptionalFactory)(e, t),
          a = function () {
        var e = (0, d.useDragDropManager)();
        return (0, i.useMemo)(function () {
          return new p(e);
        }, [e]);
      }(),
          c = function (e) {
        var t = (0, d.useDragDropManager)(),
            r = (0, i.useMemo)(function () {
          return new l(t.getBackend());
        }, [t]);
        return (0, f.useIsomorphicLayoutEffect)(function () {
          return r.dropTargetOptions = e || null, r.reconnect(), function () {
            return r.disconnectDropTarget();
          };
        }, [e]), r;
      }(r.options);

      return m(r, a, c), [(0, n.useCollectedProps)(r.collect, a, c), s(c)];
    }
  },
  74401: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useIsomorphicLayoutEffect: function useIsomorphicLayoutEffect() {
        return o;
      }
    });
    var n = r(50959);
    var o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
  },
  82442: function _(e, t, r) {
    "use strict";

    r.d(t, {
      useOptionalFactory: function useOptionalFactory() {
        return o;
      }
    });
    var n = r(50959);

    function o(e, t) {
      var r = _toConsumableArray(t || []);

      return null == t && "function" != typeof e && r.push(e), (0, n.useMemo)(function () {
        return "function" == typeof e ? e() : e;
      }, r);
    }
  },
  71982: function _(e, t, r) {
    "use strict";

    function n(e) {
      return null !== e && "object" == _typeof(e) && Object.prototype.hasOwnProperty.call(e, "current");
    }

    r.d(t, {
      isRef: function isRef() {
        return n;
      }
    });
  },
  87408: function _(e, t, r) {
    "use strict";

    function n(e, t, r) {
      var n = r.getRegistry(),
          o = n.addTarget(e, t);
      return [o, function () {
        return n.removeTarget(o);
      }];
    }

    function o(e, t, r) {
      var n = r.getRegistry(),
          o = n.addSource(e, t);
      return [o, function () {
        return n.removeSource(o);
      }];
    }

    r.d(t, {
      registerSource: function registerSource() {
        return o;
      },
      registerTarget: function registerTarget() {
        return n;
      }
    });
  },
  12406: function _(e, t, r) {
    "use strict";

    r.d(t, {
      wrapConnectorHooks: function wrapConnectorHooks() {
        return s;
      }
    });
    var n = r(6346),
        o = r(50959);

    function i(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!(0, o.isValidElement)(t)) {
          var _n15 = t;
          return e(_n15, r), _n15;
        }

        var i = t;
        !function (e) {
          if ("string" == typeof e.type) return;
          var t = e.type.displayName || e.type.name || "the component";
          throw new Error("Only native element nodes can now be passed to React DnD connectors.You can either wrap ".concat(t, " into a <div>, or turn it into a drag source or a drop target itself."));
        }(i);
        return function (e, t) {
          var r = e.ref;
          return (0, n.invariant)("string" != typeof r, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? (0, o.cloneElement)(e, {
            ref: function ref(e) {
              a(r, e), a(t, e);
            }
          }) : (0, o.cloneElement)(e, {
            ref: t
          });
        }(i, r ? function (t) {
          return e(t, r);
        } : e);
      };
    }

    function s(e) {
      var t = {};
      return Object.keys(e).forEach(function (r) {
        var n = e[r];
        if (r.endsWith("Ref")) t[r] = e[r];else {
          var _e14 = i(n);

          t[r] = function () {
            return _e14;
          };
        }
      }), t;
    }

    function a(e, t) {
      "function" == typeof e ? e(t) : e.current = t;
    }
  }
}]);