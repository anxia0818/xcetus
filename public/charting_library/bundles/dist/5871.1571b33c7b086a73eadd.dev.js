"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5871], {
  73955: function _(e, t, r) {
    r.r(t), r.d(t, {
      createPropertyPage: function createPropertyPage() {
        return o;
      }
    });
    var i = r(97145);

    function o(e, t, r) {
      var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n;
      var s = {
        id: t,
        title: r,
        definitions: new i.WatchedValue(e.definitions),
        visible: null !== (n = e.visible) && void 0 !== n ? n : new i.WatchedValue(!0).readonly()
      };
      return null !== o && (s.icon = o), s;
    }
  },
  20345: function _(e, t, r) {
    r.d(t, {
      convertToInt: function convertToInt() {
        return n;
      },
      floor: function floor() {
        return o;
      },
      limitedPrecision: function limitedPrecision() {
        return s;
      }
    });
    var i = r(10786);

    function o(e) {
      return Math.floor(e);
    }

    function n(e) {
      return parseInt(String(e));
    }

    function s(e) {
      var t = new i.LimitedPrecisionNumericFormatter(e);
      return function (e) {
        if (null === e) return e;
        var r = t.parse(t.format(e));
        return r.res ? r.value : null;
      };
    }
  },
  3347: function _(e, t, r) {
    r.d(t, {
      convertToDefinitionProperty: function convertToDefinitionProperty() {
        return n;
      },
      makeProxyDefinitionProperty: function makeProxyDefinitionProperty() {
        return o;
      }
    });
    var i = r(51768);

    function o(e, t, r) {
      var i = new Map(),
          o = void 0 !== t ? t[0] : function (e) {
        return e;
      },
          n = void 0 !== t ? void 0 !== t[1] ? t[1] : t[0] : function (e) {
        return e;
      },
          s = {
        value: function value() {
          return o(e.value());
        },
        setValue: function setValue(t) {
          e.setValue(n(t));
        },
        subscribe: function subscribe(t, r) {
          var o = function o(e) {
            r(s);
          };

          i.set(r, o), e.subscribe(t, o);
        },
        unsubscribe: function unsubscribe(t, r) {
          var o = i.get(r);
          o && (e.unsubscribe(t, o), i["delete"](r));
        },
        unsubscribeAll: function unsubscribeAll(t) {
          e.unsubscribeAll(t), i.clear();
        },
        destroy: function destroy() {
          e.release(), null == r || r();
        }
      };
      return s;
    }

    function n(e, t, r, n, s, l, p) {
      var a = o(t.weakReference(), n, l),
          u = void 0 !== n ? void 0 !== n[1] ? n[1] : n[0] : function (e) {
        return e;
      },
          c = null != s ? s : function (i) {
        return e.setProperty(t, u(i), r);
      };
      return a.setValue = function (e) {
        var t;
        p && (0, i.trackEvent)(p.category, p.event, null === (t = p.label) || void 0 === t ? void 0 : t.call(p, e)), c(e);
      }, a;
    }
  },
  43715: function _(e, t, r) {
    r.d(t, {
      createLinePropertyDefinition: function createLinePropertyDefinition() {
        return p;
      }
    });
    var i = r(73436),
        o = r(79849);
    var n = [o.LINESTYLE_SOLID, o.LINESTYLE_DOTTED, o.LINESTYLE_DASHED],
        s = [1, 2, 3, 4],
        l = [i.LineEnd.Normal, i.LineEnd.Arrow];

    function p(e, t) {
      var r = _objectSpread({
        propType: "line",
        properties: e
      }, t);

      return void 0 !== r.properties.style && (r.styleValues = n), void 0 !== r.properties.width && (r.widthValues = s), void 0 === r.properties.leftEnd && void 0 === r.properties.rightEnd || void 0 !== r.endsValues || (r.endsValues = l), void 0 !== r.properties.value && void 0 === r.valueType && (r.valueType = 1), r;
    }
  },
  46141: function _(e, t, r) {
    function i(e, t) {
      return _objectSpread({
        propType: "checkable",
        properties: e
      }, t);
    }

    function o(e, t, r) {
      return _objectSpread({
        propType: "checkableSet",
        properties: e,
        childrenDefinitions: r
      }, t);
    }

    function n(e, t) {
      return _objectSpread({
        propType: "color",
        properties: e,
        noAlpha: !1
      }, t);
    }

    r.d(t, {
      convertFromReadonlyWVToDefinitionProperty: function convertFromReadonlyWVToDefinitionProperty() {
        return H;
      },
      convertFromWVToDefinitionProperty: function convertFromWVToDefinitionProperty() {
        return N;
      },
      convertToDefinitionProperty: function convertToDefinitionProperty() {
        return z.convertToDefinitionProperty;
      },
      createCheckablePropertyDefinition: function createCheckablePropertyDefinition() {
        return i;
      },
      createCheckableSetPropertyDefinition: function createCheckableSetPropertyDefinition() {
        return o;
      },
      createColorPropertyDefinition: function createColorPropertyDefinition() {
        return n;
      },
      createCoordinatesPropertyDefinition: function createCoordinatesPropertyDefinition() {
        return k;
      },
      createEmojiPropertyDefinition: function createEmojiPropertyDefinition() {
        return A;
      },
      createLeveledLinePropertyDefinition: function createLeveledLinePropertyDefinition() {
        return u;
      },
      createLinePropertyDefinition: function createLinePropertyDefinition() {
        return s.createLinePropertyDefinition;
      },
      createNumberPropertyDefinition: function createNumberPropertyDefinition() {
        return c;
      },
      createOptionalTwoColorsPropertyDefinition: function createOptionalTwoColorsPropertyDefinition() {
        return S;
      },
      createOptionsPropertyDefinition: function createOptionsPropertyDefinition() {
        return d;
      },
      createPropertyDefinitionsGeneralGroup: function createPropertyDefinitionsGeneralGroup() {
        return O;
      },
      createPropertyDefinitionsLeveledLinesGroup: function createPropertyDefinitionsLeveledLinesGroup() {
        return W;
      },
      createRangePropertyDefinition: function createRangePropertyDefinition() {
        return V;
      },
      createSelectionCoordinatesPropertyDefinition: function createSelectionCoordinatesPropertyDefinition() {
        return E;
      },
      createSessionPropertyDefinition: function createSessionPropertyDefinition() {
        return C;
      },
      createStudyInputsPropertyDefinition: function createStudyInputsPropertyDefinition() {
        return R;
      },
      createSymbolPropertyDefinition: function createSymbolPropertyDefinition() {
        return I;
      },
      createTextPropertyDefinition: function createTextPropertyDefinition() {
        return h;
      },
      createTransparencyPropertyDefinition: function createTransparencyPropertyDefinition() {
        return L;
      },
      createTwoColorsPropertyDefinition: function createTwoColorsPropertyDefinition() {
        return w;
      },
      createTwoOptionsPropertyDefinition: function createTwoOptionsPropertyDefinition() {
        return f;
      },
      destroyDefinitions: function destroyDefinitions() {
        return Q;
      },
      getColorDefinitionProperty: function getColorDefinitionProperty() {
        return B;
      },
      getLockPriceScaleDefinitionProperty: function getLockPriceScaleDefinitionProperty() {
        return Y;
      },
      getPriceScaleSelectionStrategyDefinitionProperty: function getPriceScaleSelectionStrategyDefinitionProperty() {
        return _;
      },
      getScaleRatioDefinitionProperty: function getScaleRatioDefinitionProperty() {
        return G;
      },
      getSymbolDefinitionProperty: function getSymbolDefinitionProperty() {
        return J;
      },
      isPropertyDefinitionsGroup: function isPropertyDefinitionsGroup() {
        return K;
      },
      makeProxyDefinitionProperty: function makeProxyDefinitionProperty() {
        return z.makeProxyDefinitionProperty;
      }
    });
    var s = r(43715),
        l = r(79849);
    var p = [l.LINESTYLE_SOLID, l.LINESTYLE_DOTTED, l.LINESTYLE_DASHED],
        a = [1, 2, 3, 4];

    function u(e, t) {
      var r = _objectSpread({
        propType: "leveledLine",
        properties: e
      }, t);

      return void 0 !== r.properties.style && (r.styleValues = p), void 0 !== r.properties.width && (r.widthValues = a), r;
    }

    function c(e, t) {
      return _objectSpread({
        propType: "number",
        properties: e,
        type: 1
      }, t);
    }

    function d(e, t) {
      return _objectSpread({
        propType: "options",
        properties: e
      }, t);
    }

    function f(e, t) {
      return _objectSpread({
        propType: "twoOptions",
        properties: e
      }, t);
    }

    var v = r(44352);
    var y = [{
      id: "bottom",
      value: "bottom",
      title: v.t(null, void 0, r(65994))
    }, {
      id: "middle",
      value: "middle",
      title: v.t(null, void 0, r(76476))
    }, {
      id: "top",
      value: "top",
      title: v.t(null, void 0, r(91757))
    }],
        b = [{
      id: "left",
      value: "left",
      title: v.t(null, void 0, r(19286))
    }, {
      id: "center",
      value: "center",
      title: v.t(null, void 0, r(72171))
    }, {
      id: "right",
      value: "right",
      title: v.t(null, void 0, r(21141))
    }],
        P = [{
      id: "horizontal",
      value: "horizontal",
      title: v.t(null, void 0, r(77405))
    }, {
      id: "vertical",
      value: "vertical",
      title: v.t(null, void 0, r(44085))
    }],
        D = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
      return {
        title: String(e),
        value: e
      };
    }),
        T = [1, 2, 3, 4],
        m = v.t(null, void 0, r(92960)),
        g = v.t(null, void 0, r(90581));

    function h(e, t) {
      var r = _objectSpread({
        propType: "text",
        properties: e
      }, t, {
        isEditable: t.isEditable || !1
      });

      return void 0 !== r.properties.size && void 0 === r.sizeItems && (r.sizeItems = D), void 0 !== r.properties.alignmentVertical && void 0 === r.alignmentVerticalItems && (r.alignmentVerticalItems = y), void 0 !== r.properties.alignmentHorizontal && void 0 === r.alignmentHorizontalItems && (r.alignmentHorizontalItems = b), (r.alignmentVerticalItems || r.alignmentHorizontalItems) && void 0 === r.alignmentTitle && (r.alignmentTitle = m), void 0 !== r.properties.orientation && (void 0 === r.orientationItems && (r.orientationItems = P), void 0 === r.orientationTitle && (r.orientationTitle = g)), void 0 !== r.properties.borderWidth && void 0 === r.borderWidthItems && (r.borderWidthItems = T), r;
    }

    function w(e, t) {
      return _objectSpread({
        propType: "twoColors",
        properties: e,
        noAlpha1: !1,
        noAlpha2: !1
      }, t);
    }

    function S(e, t) {
      return _objectSpread({
        propType: "optionalTwoColors",
        properties: e,
        noAlpha1: !1,
        noAlpha2: !1
      }, t);
    }

    function k(e, t) {
      return _objectSpread({
        propType: "coordinates",
        properties: e
      }, t);
    }

    function E(e, t) {
      return _objectSpread({
        propType: "selectionCoordinates",
        properties: e
      }, t);
    }

    function V(e, t) {
      return _objectSpread({
        propType: "range",
        properties: e
      }, t);
    }

    function L(e, t) {
      return _objectSpread({
        propType: "transparency",
        properties: e
      }, t);
    }

    function I(e, t) {
      return _objectSpread({
        propType: "symbol",
        properties: e
      }, t);
    }

    function C(e, t) {
      return _objectSpread({
        propType: "session",
        properties: e
      }, t);
    }

    function A(e, t) {
      return _objectSpread({
        propType: "emoji",
        properties: e
      }, t);
    }

    function R(e, t) {
      return _objectSpread({
        propType: "studyInputs",
        properties: e
      }, t);
    }

    var x = r(97145);

    function O(e, t, r, i) {
      return {
        id: t,
        title: r,
        visible: i,
        groupType: "general",
        definitions: new x.WatchedValue(e)
      };
    }

    function W(e, t, r) {
      return {
        id: t,
        title: r,
        groupType: "leveledLines",
        definitions: new x.WatchedValue(e)
      };
    }

    var z = r(3347);

    function M(e, t, r) {
      var i = new Map(),
          o = void 0 !== t ? t[0] : function (e) {
        return e;
      },
          n = void 0 !== t ? void 0 !== t[1] ? t[1] : t[0] : function (e) {
        return e;
      },
          s = {
        value: function value() {
          return o(e.value());
        },
        setValue: function setValue(t) {
          var r;
          null === (r = e.setValue) || void 0 === r || r.call(e, n(t));
        },
        subscribe: function subscribe(t, r) {
          var o = function o() {
            r(s);
          };

          var n = i.get(t);
          void 0 === n ? (n = new Map(), n.set(r, o), i.set(t, n)) : n.set(r, o), e.subscribe(o);
        },
        unsubscribe: function unsubscribe(t, r) {
          var o = i.get(t);

          if (void 0 !== o) {
            var _t = o.get(r);

            void 0 !== _t && (e.unsubscribe(_t), o["delete"](r));
          }
        },
        unsubscribeAll: function unsubscribeAll(t) {
          var r = i.get(t);
          void 0 !== r && (r.forEach(function (t, r) {
            e.unsubscribe(t);
          }), r.clear());
        }
      };
      return r && (s.destroy = function () {
        return r();
      }), s;
    }

    function N(e, t, r, i) {
      var o = M(t, i),
          n = void 0 !== i ? void 0 !== i[1] ? i[1] : i[0] : function (e) {
        return e;
      };
      return o.setValue = function (i) {
        return e.setWatchedValue(t, n(i), r);
      }, o;
    }

    function H(e, t) {
      return function (e, t, r, i) {
        var o = new Map();
        return M({
          subscribe: function subscribe(r, i) {
            var n = function n(e) {
              return r(t(e));
            };

            o.set(r, n), e.subscribe(n, i);
          },
          unsubscribe: function unsubscribe(t) {
            if (t) {
              var _r = o.get(t);

              _r && (e.unsubscribe(_r), o["delete"](t));
            } else o.clear(), e.unsubscribe();
          },
          value: function value() {
            return t(e.value());
          }
        }, r, i);
      }(e, function (e) {
        return e;
      }, t, function () {
        return e.release();
      });
    }

    function _(e, t) {
      var r = (0, z.makeProxyDefinitionProperty)(t.weakReference());
      return r.setValue = function (t) {
        return e.setPriceScaleSelectionStrategy(t);
      }, r;
    }

    function Y(e, t, r, i) {
      var o = (0, z.makeProxyDefinitionProperty)(t.weakReference());
      return o.setValue = function (t) {
        var o = {
          lockScale: t
        };
        e.setPriceScaleMode(o, r, i);
      }, o;
    }

    function G(e, t, r, i) {
      var o = (0, z.makeProxyDefinitionProperty)(t.weakReference(), i);
      return o.setValue = function (i) {
        e.setScaleRatioProperty(t, i, r);
      }, o;
    }

    var j = r(24377),
        F = r(87095),
        U = r(49152);

    function q(e, t) {
      if ((0, F.isHexColor)(e)) {
        var _r2 = (0, j.parseRgb)(e);

        return (0, j.rgbaToString)((0, j.rgba)(_r2, (100 - t) / 100));
      }

      return e;
    }

    function B(e, t, r, i, o) {
      var n;

      if (null !== r) {
        var _e = (0, U.combineProperty)(q, t.weakReference(), r.weakReference());

        n = (0, z.makeProxyDefinitionProperty)(_e.ownership());
      } else n = (0, z.makeProxyDefinitionProperty)(t.weakReference(), [function () {
        return q(t.value(), 0);
      }, function (e) {
        return e;
      }]);

      return n.setValue = function (r) {
        o && e.beginUndoMacro(i), e.setProperty(t, r, i), o && e.endUndoMacro();
      }, n;
    }

    function J(e, t, r, i, o, n) {
      var s = [(l = r, p = t, function (e) {
        var t = l(p);

        if (e === p.value() && null !== t) {
          var _e2 = t.ticker || t.full_name;

          if (_e2) return _e2;
        }

        return e;
      }), function (e) {
        return e;
      }];
      var l, p;
      var a = (0, z.convertToDefinitionProperty)(e, t, o, s);
      n && (a.setValue = n);
      var u = new Map();
      a.subscribe = function (e, r) {
        var i = function i(e) {
          r(a);
        };

        u.set(r, i), t.subscribe(e, i);
      }, a.unsubscribe = function (e, r) {
        var i = u.get(r);
        i && (t.unsubscribe(e, i), u["delete"](r));
      };
      var c = {};
      return i.subscribe(c, function () {
        u.forEach(function (e, t) {
          t(a);
        });
      }), a.destroy = function () {
        i.unsubscribeAll(c), u.clear();
      }, a;
    }

    function K(e) {
      return e.hasOwnProperty("groupType");
    }

    function Q(e) {
      e.forEach(function (e) {
        var t;

        if (e.hasOwnProperty("propType")) {
          Object.keys(e.properties).forEach(function (t) {
            var r = e.properties[t];
            void 0 !== r && void 0 !== r.destroy && r.destroy();
          });
        } else Q(e.definitions.value()), null === (t = e.visible) || void 0 === t || t.destroy();
      });
    }
  }
}]);