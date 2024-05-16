"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6265], {
  26574: function _(e) {
    e.exports = {
      switcher: "switcher-fwE97QDf",
      "thumb-wrapper": "thumb-wrapper-fwE97QDf",
      "size-small": "size-small-fwE97QDf",
      "size-medium": "size-medium-fwE97QDf",
      "size-large": "size-large-fwE97QDf",
      input: "input-fwE97QDf",
      "intent-default": "intent-default-fwE97QDf",
      "disable-active-state-styles": "disable-active-state-styles-fwE97QDf",
      "intent-select": "intent-select-fwE97QDf",
      track: "track-fwE97QDf",
      thumb: "thumb-fwE97QDf"
    };
  },
  14904: function _(e) {
    e.exports = {
      scrollable: "scrollable-vwgPOHG8",
      tabs: "tabs-vwgPOHG8"
    };
  },
  92229: function _(e) {
    e.exports = {
      defaultsButtonText: "defaultsButtonText-zcLkuEMM",
      defaultsButtonItem: "defaultsButtonItem-zcLkuEMM",
      defaultsButtonIcon: "defaultsButtonIcon-zcLkuEMM"
    };
  },
  47334: function _(e) {
    e.exports = {
      themesButtonText: "themesButtonText-AeBgp7zz",
      themesButtonIcon: "themesButtonIcon-AeBgp7zz",
      defaultsButtonText: "defaultsButtonText-AeBgp7zz",
      defaultsButtonItem: "defaultsButtonItem-AeBgp7zz"
    };
  },
  92910: function _(e) {
    e.exports = {
      separator: "separator-QjUlCDId",
      small: "small-QjUlCDId",
      normal: "normal-QjUlCDId",
      large: "large-QjUlCDId"
    };
  },
  38546: function _(e, t, l) {
    "use strict";

    l.d(t, {
      DialogTabs: function DialogTabs() {
        return o;
      }
    });
    var n = l(50959),
        r = l(64378);
    var o = n.forwardRef(function (e, t) {
      var l = e.id,
          o = e.tabs,
          i = e.activeTab,
          s = e.onChange,
          a = e.className;
      return n.createElement("div", {
        className: a,
        ref: t
      }, n.createElement(r.UnderlineButtonTabs, {
        id: l,
        items: o,
        isActive: function isActive(e) {
          return e.id === i;
        },
        onActivate: function onActivate(e) {
          s(e.id);
        }
      }));
    });
  },
  63374: function _(e, t, l) {
    "use strict";

    var _$, _ke;

    l.r(t), l.d(t, {
      EditObjectDialogRenderer: function EditObjectDialogRenderer() {
        return dl;
      }
    });
    var n = l(962),
        r = l(50959),
        o = l(50151),
        i = l(44352),
        s = l(36298),
        a = l(54358),
        c = l(56840),
        p = l(14483),
        d = l(76422),
        u = l(51768),
        h = l(50945),
        m = l(50182),
        v = l(59064),
        y = l(86656),
        g = l(28853),
        b = l(37289),
        w = l(92249),
        f = l(48531),
        C = l(38546),
        P = l(14904);

    var S =
    /*#__PURE__*/
    function (_r$PureComponent) {
      _inherits(S, _r$PureComponent);

      function S(e) {
        var _this;

        _classCallCheck(this, S);

        var t;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(S).call(this, e)), _this._handleClose = function (e) {
          (null == e ? void 0 : e.target) && (e.target.closest('[data-dialog-name="gopro"]') || e.target.closest("[data-name=support-dialog]")) || _this.props.onClose();
        }, _this._renderFooterLeft = function (e) {
          var _this$props = _this.props,
              t = _this$props.source,
              l = _this$props.model;
          if ((0, w.isLineTool)(t)) return r.createElement(f.FooterMenu, {
            sources: [t],
            chartUndoModel: l
          });
          if ((0, g.isStudy)(t)) return r.createElement(h.StudyDefaultsManager, {
            model: l,
            source: t,
            mode: e ? "compact" : "normal"
          });
          throw new TypeError("Unsupported source type.");
        }, _this._handleSelect = function (e) {
          _this.setState({
            activeTabId: e
          }, function () {
            _this._requestResize && _this._requestResize();
          }), _this.props.onActiveTabChanged && _this.props.onActiveTabChanged(e);
        }, _this._handleScroll = function () {
          v.globalCloseDelegate.fire();
        }, _this._handleSubmit = function () {
          _this.props.onSubmit(), _this.props.onClose();
        };
        var _this$props2 = _this.props,
            l = _this$props2.pages,
            n = _this$props2.initialActiveTab,
            o = null !== (t = l.find(function (e) {
          return e.id === n;
        })) && void 0 !== t ? t : l[0];
        _this.state = {
          activeTabId: o.id
        };
        return _this;
      }

      _createClass(S, [{
        key: "render",
        value: function render() {
          var _this$props3 = this.props,
              e = _this$props3.title,
              t = _this$props3.onCancel,
              l = _this$props3.onClose,
              n = _this$props3.shouldReturnFocus;
          return r.createElement(m.AdaptiveConfirmDialog, {
            dataName: "indicator-properties-dialog",
            title: e,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: t,
            onClickOutside: this._handleClose,
            onClose: l,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(),
            submitOnEnterKey: !1,
            shouldReturnFocus: n
          });
        }
      }, {
        key: "_renderChildren",
        value: function _renderChildren() {
          var _this2 = this;

          return function (_ref) {
            var e = _ref.requestResize;
            var t;
            _this2._requestResize = e;
            var _this2$props = _this2.props,
                l = _this2$props.pages,
                n = _this2$props.source,
                o = _this2$props.model,
                i = _this2.state.activeTabId,
                s = null !== (t = l.find(function (e) {
              return e.id === i;
            })) && void 0 !== t ? t : l[0],
                a = "Component" in s ? void 0 : s.page,
                c = l.map(function (_ref2) {
              var e = _ref2.label,
                  t = _ref2.id;
              return {
                label: e,
                id: t,
                dataId: "indicator-properties-dialog-tabs-".concat(t)
              };
            });
            return r.createElement(r.Fragment, null, r.createElement(C.DialogTabs, {
              className: P.tabs,
              id: "indicator-properties-dialog-tabs",
              activeTab: s.id,
              onChange: _this2._handleSelect,
              tabs: c
            }), r.createElement(y.TouchScrollContainer, {
              className: P.scrollable,
              onScroll: _this2._handleScroll
            }, "Component" in s ? r.createElement(s.Component, {
              source: n,
              model: o
            }) : r.createElement(b.PropertiesEditorTab, {
              page: a,
              tableKey: s.id
            })));
          };
        }
      }]);

      return S;
    }(r.PureComponent);

    var E = l(39828),
        T = l(96362);

    var k =
    /*#__PURE__*/
    function (_r$PureComponent2) {
      _inherits(k, _r$PureComponent2);

      function k(e) {
        var _this3;

        _classCallCheck(this, k);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(k).call(this, e)), _this3._properties = _this3.props.source.properties(), _this3._inputs = new T.MetaInfoHelper(_this3.props.source.metaInfo()).getUserEditableInputs();
        return _this3;
      }

      _createClass(k, [{
        key: "render",
        value: function render() {
          return r.createElement(E.InputsTabContent, {
            property: this._properties,
            model: this.props.model,
            study: this.props.source,
            studyMetaInfo: this.props.source.metaInfo(),
            inputs: this._inputs
          });
        }
      }]);

      return k;
    }(r.PureComponent);

    var _ = l(22064),
        x = l(72877),
        I = l(42856),
        L = l(41594),
        D = l(4781),
        V = l(17948);

    var R = new s.TranslatedString("change visibility", i.t(null, void 0, l(21511)));

    var M =
    /*#__PURE__*/
    function (_r$PureComponent3) {
      _inherits(M, _r$PureComponent3);

      function M() {
        var _this4;

        _classCallCheck(this, M);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(M).apply(this, arguments)), _this4._onChange = function (e) {
          var t = _this4.context.setValue,
              l = _this4.props.visible;
          l && (0, V.setPropertyValue)(l, function (l) {
            return t(l, e, R);
          });
        };
        return _this4;
      }

      _createClass(M, [{
        key: "render",
        value: function render() {
          var _this$props4 = this.props,
              e = _this$props4.id,
              t = _this$props4.title,
              n = _this$props4.visible,
              o = _this$props4.disabled,
              s = (0, a.clean)(i.t(t, {
            context: "input"
          }, l(88601)), !0);
          return r.createElement(D.BoolInputComponent, {
            label: s,
            disabled: o,
            input: {
              id: e,
              type: "bool",
              defval: !0,
              name: "visible"
            },
            value: !n || (0, V.getPropertyValue)(n),
            onChange: this._onChange
          });
        }
      }]);

      return M;
    }(r.PureComponent);

    M.contextType = L.StylePropertyContext;
    var B = l(12949),
        N = l(51613),
        W = l(69297),
        A = l(94697),
        z = l(94152),
        H = l(18819),
        F = l(14643),
        G = l(46464),
        U = l(96298),
        O = l(18621),
        j = l(98450),
        Q = l(91512),
        Z = l(93976),
        q = l(72914),
        K = l(21579);
    var $ = (_$ = {}, _defineProperty(_$, x.LineStudyPlotStyle.Line, {
      type: x.LineStudyPlotStyle.Line,
      order: 0,
      icon: z,
      label: i.t(null, void 0, l(1277))
    }), _defineProperty(_$, x.LineStudyPlotStyle.LineWithBreaks, {
      type: x.LineStudyPlotStyle.LineWithBreaks,
      order: 1,
      icon: H,
      label: i.t(null, void 0, l(54934))
    }), _defineProperty(_$, x.LineStudyPlotStyle.StepLine, {
      type: x.LineStudyPlotStyle.StepLine,
      order: 2,
      icon: F,
      label: i.t(null, void 0, l(79511))
    }), _defineProperty(_$, x.LineStudyPlotStyle.StepLineWithBreaks, {
      type: x.LineStudyPlotStyle.StepLineWithBreaks,
      order: 3,
      icon: G,
      label: i.t(null, void 0, l(64108))
    }), _defineProperty(_$, x.LineStudyPlotStyle.StepLineWithDiamonds, {
      type: x.LineStudyPlotStyle.StepLineWithDiamonds,
      order: 4,
      icon: U,
      label: i.t(null, void 0, l(67767))
    }), _defineProperty(_$, x.LineStudyPlotStyle.Histogram, {
      type: x.LineStudyPlotStyle.Histogram,
      order: 5,
      icon: O,
      label: i.t(null, void 0, l(11091))
    }), _defineProperty(_$, x.LineStudyPlotStyle.Cross, {
      type: x.LineStudyPlotStyle.Cross,
      order: 6,
      icon: j,
      label: i.t(null, {
        context: "chart_type"
      }, l(74274))
    }), _defineProperty(_$, x.LineStudyPlotStyle.Area, {
      type: x.LineStudyPlotStyle.Area,
      order: 7,
      icon: Q,
      label: i.t(null, void 0, l(42097))
    }), _defineProperty(_$, x.LineStudyPlotStyle.AreaWithBreaks, {
      type: x.LineStudyPlotStyle.AreaWithBreaks,
      order: 8,
      icon: Z,
      label: i.t(null, void 0, l(65262))
    }), _defineProperty(_$, x.LineStudyPlotStyle.Columns, {
      type: x.LineStudyPlotStyle.Columns,
      order: 9,
      icon: q,
      label: i.t(null, void 0, l(36018))
    }), _defineProperty(_$, x.LineStudyPlotStyle.Circles, {
      type: x.LineStudyPlotStyle.Circles,
      order: 10,
      icon: K,
      label: i.t(null, void 0, l(39495))
    }), _$),
        X = Object.values($).sort(function (e, t) {
      return e.order - t.order;
    }).map(function (e) {
      return {
        value: e.type,
        selectedContent: r.createElement(A.DisplayItem, {
          icon: e.icon
        }),
        content: r.createElement(A.DropItem, {
          icon: e.icon,
          label: e.label
        })
      };
    }),
        Y = i.t(null, void 0, l(91492));

    var J =
    /*#__PURE__*/
    function (_r$PureComponent4) {
      _inherits(J, _r$PureComponent4);

      function J() {
        _classCallCheck(this, J);

        return _possibleConstructorReturn(this, _getPrototypeOf(J).apply(this, arguments));
      }

      _createClass(J, [{
        key: "render",
        value: function render() {
          var _this$props5 = this.props,
              e = _this$props5.id,
              t = _this$props5.plotType,
              l = _this$props5.className,
              n = _this$props5.priceLine,
              o = _this$props5.plotTypeChange,
              i = _this$props5.priceLineChange,
              s = _this$props5.disabled;
          if (!(t in $)) return null;
          var a = {
            readonly: !0,
            content: r.createElement(r.Fragment, null, r.createElement(W.MenuItemSwitcher, {
              id: "PlotTypePriceLineSwitch",
              checked: n,
              label: Y,
              preventLabelHighlight: !0,
              value: "priceLineSwitcher",
              onChange: i
            }), r.createElement(N.PopupMenuSeparator, null))
          };
          return r.createElement(A.IconDropdown, {
            id: e,
            disabled: s,
            className: l,
            hideArrowButton: !0,
            items: [a].concat(_toConsumableArray(X)),
            value: t,
            onChange: o
          });
        }
      }]);

      return J;
    }(r.PureComponent);

    var ee = l(41552),
        te = l(62433);
    var le = new s.TranslatedString("change plot type", i.t(null, void 0, l(15683))),
        ne = new s.TranslatedString("change price line visibility", i.t(null, void 0, l(67761)));

    var re =
    /*#__PURE__*/
    function (_r$PureComponent5) {
      _inherits(re, _r$PureComponent5);

      function re() {
        var _this5;

        _classCallCheck(this, re);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(re).apply(this, arguments)), _this5._onPlotTypeChange = function (e) {
          var t = _this5.context.setValue,
              l = _this5.props.styleProp.plottype;
          l && t(l, e, le);
        }, _this5._onPriceLineChange = function (e) {
          var t = _this5.context.setValue,
              l = _this5.props.styleProp.trackPrice;
          l && t(l, e, ne);
        };
        return _this5;
      }

      _createClass(re, [{
        key: "render",
        value: function render() {
          var _this$props6 = this.props,
              e = _this$props6.id,
              t = _this$props6.paletteColor,
              n = _this$props6.paletteColorProps,
              o = _this$props6.styleProp,
              s = _this$props6.isLine,
              a = _this$props6.hasPlotTypeSelect,
              c = _this$props6.grouped,
              p = _this$props6.offset,
              d = n.childs();
          return r.createElement(B.InputRow, {
            grouped: c,
            label: r.createElement("div", {
              className: te.childRowContainer
            }, i.t(t.name, {
              context: "input"
            }, l(88601))),
            offset: p
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: !o.visible.value(),
            color: d.color,
            transparency: o.transparency,
            thickness: s ? d.width : void 0,
            isPaletteColor: !0
          }), s && a && o.plottype && o.trackPrice ? r.createElement(J, {
            id: (0, _.createDomId)(e, "plot-type-select"),
            disabled: !o.visible.value(),
            className: te.smallStyleControl,
            plotType: o.plottype.value(),
            priceLine: o.trackPrice.value(),
            plotTypeChange: this._onPlotTypeChange,
            priceLineChange: this._onPriceLineChange
          }) : null);
        }
      }]);

      return re;
    }(r.PureComponent);

    re.contextType = L.StylePropertyContext;
    var oe = l(11062);

    function ie(e, t, l, n, i, s, a) {
      var c = t.colors,
          p = l.colors;
      return Object.keys(c).map(function (t, l) {
        return r.createElement(re, {
          key: a ? "".concat(t, "-secondary") : t,
          id: e,
          grouped: !0,
          paletteColor: (0, o.ensureDefined)(c[t]),
          paletteColorProps: (0, o.ensureDefined)(p[t]),
          styleProp: n,
          isLine: i,
          hasPlotTypeSelect: 0 === l,
          offset: s
        });
      });
    }

    var se =
    /*#__PURE__*/
    function (_r$PureComponent6) {
      _inherits(se, _r$PureComponent6);

      function se() {
        _classCallCheck(this, se);

        return _possibleConstructorReturn(this, _getPrototypeOf(se).apply(this, arguments));
      }

      _createClass(se, [{
        key: "render",
        value: function render() {
          var _this$props7 = this.props,
              e = _this$props7.plot,
              t = _this$props7.area,
              l = _this$props7.palette,
              n = _this$props7.paletteProps,
              i = _this$props7.hideVisibilitySwitch,
              s = _this$props7.styleProp,
              a = _this$props7.showOnlyTitle,
              _this$props7$showSepa = _this$props7.showSeparator,
              c = _this$props7$showSepa === void 0 ? !0 : _this$props7$showSepa,
              p = _this$props7.offset,
              d = _this$props7.secondaryPalette,
              u = _this$props7.secondaryPaletteProps,
              h = _this$props7.title,
              m = e ? e.id : (0, o.ensureDefined)(t).id,
              v = !m.startsWith("fill") && e && (0, x.isLinePlot)(e);
          return r.createElement(r.Fragment, null, !i && r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2,
            offset: p
          }, a ? r.createElement("div", null, h) : r.createElement(M, {
            id: m,
            title: h,
            visible: s.visible
          }))), ie(m, l, n, s, v, p), d && u && ie(m, d, u, s, v, p, !0), c && r.createElement(oe.PropertyTable.GroupSeparator, null));
        }
      }]);

      return se;
    }(r.PureComponent);

    se.contextType = L.StylePropertyContext;
    var ae = l(99970);

    var ce =
    /*#__PURE__*/
    function (_r$PureComponent7) {
      _inherits(ce, _r$PureComponent7);

      function ce(e) {
        var _this6;

        _classCallCheck(this, ce);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ce).call(this, e)), _this6._visible = new ae.StudyPlotVisibleProperty(e.styleProp.display);
        return _this6;
      }

      _createClass(ce, [{
        key: "render",
        value: function render() {
          var _this$props8 = this.props,
              e = _this$props8.title,
              t = _this$props8.plot,
              l = _this$props8.area,
              n = _this$props8.palette,
              o = _this$props8.paletteProps,
              i = _this$props8.hideVisibilitySwitch,
              s = _this$props8.styleProp,
              a = _this$props8.showOnlyTitle,
              _this$props8$showSepa = _this$props8.showSeparator,
              c = _this$props8$showSepa === void 0 ? !0 : _this$props8$showSepa,
              p = _this$props8.offset;
          return r.createElement(se, {
            plot: t,
            area: l,
            title: e,
            palette: n,
            paletteProps: o,
            styleProp: _objectSpread({}, s, {
              visible: this._visible
            }),
            showSeparator: c,
            hideVisibilitySwitch: i,
            showOnlyTitle: a,
            offset: p
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._visible.destroy();
        }
      }]);

      return ce;
    }(r.PureComponent);

    ce.contextType = L.StylePropertyContext;

    var pe =
    /*#__PURE__*/
    function (_r$PureComponent8) {
      _inherits(pe, _r$PureComponent8);

      function pe(e) {
        var _this7;

        _classCallCheck(this, pe);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(pe).call(this, e)), _this7._visible = new ae.StudyPlotVisibleProperty(e.display);
        return _this7;
      }

      _createClass(pe, [{
        key: "render",
        value: function render() {
          var _this$props9 = this.props,
              e = _this$props9.id,
              t = _this$props9.title,
              l = _this$props9.disabled;
          return r.createElement(M, {
            id: e,
            title: t,
            disabled: l,
            visible: this._visible
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._visible.destroy();
        }
      }]);

      return pe;
    }(r.PureComponent);

    pe.contextType = L.StylePropertyContext;
    var de = l(50890);
    var ue = new s.TranslatedString("change plot type", i.t(null, void 0, l(15683))),
        he = new s.TranslatedString("change price line visibility", i.t(null, void 0, l(67761)));

    var me =
    /*#__PURE__*/
    function (_r$PureComponent9) {
      _inherits(me, _r$PureComponent9);

      function me() {
        var _this8;

        _classCallCheck(this, me);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(me).apply(this, arguments)), _this8._onPlotTypeChange = function (e) {
          var t = _this8.context.setValue,
              l = _this8.props.property.plottype;
          l && t(l, e, ue);
        }, _this8._onPriceLineChange = function (e) {
          var t = _this8.context.setValue,
              l = _this8.props.property.trackPrice;
          l && t(l, e, he);
        };
        return _this8;
      }

      _createClass(me, [{
        key: "render",
        value: function render() {
          var _this$props10 = this.props,
              e = _this$props10.id,
              t = _this$props10.title,
              l = _this$props10.isRGB,
              n = _this$props10.isFundamental,
              _this$props10$propert = _this$props10.property,
              o = _this$props10$propert.color,
              i = _this$props10$propert.plottype,
              s = _this$props10$propert.linewidth,
              a = _this$props10$propert.transparency,
              c = _this$props10$propert.trackPrice,
              p = _this$props10$propert.display;
          return r.createElement(B.InputRow, {
            label: r.createElement(pe, {
              id: e,
              title: t,
              display: p
            })
          }, l && !n ? this._getInputForRgb() : r.createElement(ee.ColorWithThicknessSelect, {
            disabled: 0 === p.value(),
            color: o,
            transparency: a,
            thickness: s
          }), r.createElement(J, {
            id: (0, _.createDomId)(e, "plot-type-select"),
            disabled: 0 === p.value(),
            className: te.smallStyleControl,
            plotType: i.value(),
            priceLine: c.value(),
            plotTypeChange: this._onPlotTypeChange,
            priceLineChange: this._onPriceLineChange
          }));
        }
      }, {
        key: "_getInputForRgb",
        value: function _getInputForRgb() {
          var _this$props11 = this.props,
              e = _this$props11.id,
              t = _this$props11.showLineWidth,
              l = _this$props11.property,
              n = l.linewidth,
              o = l.display;
          return n && t ? r.createElement(de.LineWidthSelect, {
            id: (0, _.createDomId)(e, "line-width-select"),
            property: n,
            disabled: 0 === o.value()
          }) : null;
        }
      }]);

      return me;
    }(r.PureComponent);

    me.contextType = L.StylePropertyContext;
    var ve = r.createContext(null);

    var ye =
    /*#__PURE__*/
    function (_r$PureComponent10) {
      _inherits(ye, _r$PureComponent10);

      function ye() {
        _classCallCheck(this, ye);

        return _possibleConstructorReturn(this, _getPrototypeOf(ye).apply(this, arguments));
      }

      _createClass(ye, [{
        key: "render",
        value: function render() {
          var _this$props12 = this.props,
              e = _this$props12.id,
              t = _this$props12.isRGB,
              l = _this$props12.title,
              n = _this$props12.visible,
              o = _this$props12.color,
              i = _this$props12.transparency,
              s = _this$props12.thickness,
              a = _this$props12.children,
              _this$props12$switcha = _this$props12.switchable,
              c = _this$props12$switcha === void 0 ? !0 : _this$props12$switcha,
              p = _this$props12.offset,
              d = _this$props12.grouped,
              u = _this$props12.disabled;
          return r.createElement(B.InputRow, {
            label: c ? r.createElement(M, {
              id: e,
              title: l,
              visible: n,
              disabled: u
            }) : l,
            offset: p,
            grouped: d
          }, t ? null : r.createElement(ee.ColorWithThicknessSelect, {
            disabled: u || n && !(Array.isArray(n) ? n[0].value() : n.value()),
            color: o,
            transparency: i,
            thickness: s
          }), a);
        }
      }]);

      return ye;
    }(r.PureComponent);

    ye.contextType = L.StylePropertyContext;

    var ge =
    /*#__PURE__*/
    function (_r$PureComponent11) {
      _inherits(ge, _r$PureComponent11);

      function ge(e) {
        var _this9;

        _classCallCheck(this, ge);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(ge).call(this, e)), _this9._visible = new ae.StudyPlotVisibleProperty(e.display);
        return _this9;
      }

      _createClass(ge, [{
        key: "render",
        value: function render() {
          var _this$props13 = this.props,
              e = _this$props13.id,
              t = _this$props13.isRGB,
              l = _this$props13.title,
              n = _this$props13.color,
              o = _this$props13.transparency,
              i = _this$props13.thickness,
              s = _this$props13.children,
              _this$props13$switcha = _this$props13.switchable,
              a = _this$props13$switcha === void 0 ? !0 : _this$props13$switcha,
              c = _this$props13.offset,
              p = _this$props13.grouped;
          return r.createElement(ye, {
            id: e,
            isRGB: t,
            title: l,
            color: n,
            transparency: o,
            thickness: i,
            children: s,
            switchable: a,
            offset: c,
            grouped: p,
            visible: this._visible
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._visible.destroy();
        }
      }]);

      return ge;
    }(r.PureComponent);

    ge.contextType = L.StylePropertyContext;

    var be =
    /*#__PURE__*/
    function (_r$PureComponent12) {
      _inherits(be, _r$PureComponent12);

      function be() {
        _classCallCheck(this, be);

        return _possibleConstructorReturn(this, _getPrototypeOf(be).apply(this, arguments));
      }

      _createClass(be, [{
        key: "render",
        value: function render() {
          var _this$props14 = this.props,
              e = _this$props14.id,
              t = _this$props14.isRGB,
              _this$props14$propert = _this$props14.property,
              l = _this$props14$propert.colorup,
              n = _this$props14$propert.colordown,
              i = _this$props14$propert.transparency,
              s = _this$props14$propert.display;
          return r.createElement(ve.Consumer, null, function (a) {
            return r.createElement(r.Fragment, null, r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
              placement: "first",
              colSpan: 2,
              grouped: !0
            }, r.createElement(pe, {
              id: e,
              title: Ze((0, o.ensureNotNull)(a), e),
              display: s
            }))), !t && r.createElement(r.Fragment, null, r.createElement(ge, {
              id: e,
              title: Fe,
              color: l,
              transparency: i,
              display: s,
              switchable: !1,
              offset: !0,
              grouped: !0
            }), r.createElement(ge, {
              id: e,
              title: Ge,
              color: n,
              transparency: i,
              display: s,
              switchable: !1,
              offset: !0,
              grouped: !0
            })), r.createElement(oe.PropertyTable.GroupSeparator, null));
          });
        }
      }]);

      return be;
    }(r.PureComponent);

    be.contextType = L.StylePropertyContext;
    var we = l(87795),
        fe = l.n(we),
        Ce = l(97754),
        Pe = l.n(Ce),
        Se = l(31261),
        Ee = l(90405),
        Te = l(95586);

    var ke = (_ke = {}, _defineProperty(_ke, Te.MarkLocation.AboveBar, {
      value: Te.MarkLocation.AboveBar,
      content: i.t(null, void 0, l(41389)),
      order: 0
    }), _defineProperty(_ke, Te.MarkLocation.BelowBar, {
      value: Te.MarkLocation.BelowBar,
      content: i.t(null, void 0, l(78626)),
      order: 1
    }), _defineProperty(_ke, Te.MarkLocation.Top, {
      value: Te.MarkLocation.Top,
      content: i.t(null, void 0, l(65994)),
      order: 2
    }), _defineProperty(_ke, Te.MarkLocation.Bottom, {
      value: Te.MarkLocation.Bottom,
      content: i.t(null, void 0, l(91757)),
      order: 3
    }), _defineProperty(_ke, Te.MarkLocation.Absolute, {
      value: Te.MarkLocation.Absolute,
      content: i.t(null, void 0, l(29520)),
      order: 4
    }), _ke),
        _e = Object.values(ke).sort(function (e, t) {
      return e.order - t.order;
    });

    var xe =
    /*#__PURE__*/
    function (_r$PureComponent13) {
      _inherits(xe, _r$PureComponent13);

      function xe() {
        _classCallCheck(this, xe);

        return _possibleConstructorReturn(this, _getPrototypeOf(xe).apply(this, arguments));
      }

      _createClass(xe, [{
        key: "render",
        value: function render() {
          var _this$props15 = this.props,
              e = _this$props15.id,
              t = _this$props15.shapeLocation,
              l = _this$props15.className,
              n = _this$props15.menuItemClassName,
              o = _this$props15.shapeLocationChange,
              i = _this$props15.disabled;
          return r.createElement(Ee.Select, {
            id: e,
            disabled: i,
            className: l,
            menuItemClassName: n,
            items: _e,
            value: t,
            onChange: o
          });
        }
      }]);

      return xe;
    }(r.PureComponent);

    var Ie = new s.TranslatedString("change char", i.t(null, void 0, l(98491))),
        Le = new s.TranslatedString("change location", i.t(null, void 0, l(38361)));

    var De =
    /*#__PURE__*/
    function (_r$PureComponent14) {
      _inherits(De, _r$PureComponent14);

      function De() {
        var _this10;

        _classCallCheck(this, De);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(De).apply(this, arguments)), _this10._onCharChange = function (e) {
          var t = _this10.context.setValue,
              l = e.currentTarget.value.trim(),
              n = fe()(l),
              r = 0 === n.length ? "" : n[n.length - 1];
          t((0, o.ensureDefined)(_this10.props.property.childs()["char"]), r, Ie);
        }, _this10._onLocationChange = function (e) {
          var t = _this10.context.setValue;
          t(_this10.props.property.childs().location, e, Le);
        };
        return _this10;
      }

      _createClass(De, [{
        key: "render",
        value: function render() {
          var e;

          var _this$props16 = this.props,
              t = _this$props16.id,
              l = _this$props16.title,
              n = _this$props16["char"],
              i = _this$props16.isRGB,
              s = _this$props16.property,
              a = _this$props16.hasPalette,
              _s$childs = s.childs(),
              c = _s$childs.color,
              p = _s$childs.transparency,
              d = _s$childs["char"],
              u = _s$childs.location,
              h = _s$childs.display;

          return r.createElement(B.InputRow, {
            grouped: a,
            label: r.createElement(pe, {
              id: t,
              title: l,
              display: h
            })
          }, !a && !i && r.createElement(ee.ColorWithThicknessSelect, {
            disabled: 0 === h.value(),
            color: c,
            transparency: p
          }), r.createElement(Se.InputControl, {
            disabled: void 0 === d || 0 === h.value(),
            className: te.smallStyleControl,
            value: (0, o.ensureDefined)(null !== (e = null == d ? void 0 : d.value()) && void 0 !== e ? e : n),
            onChange: this._onCharChange
          }), r.createElement(xe, {
            id: (0, _.createDomId)(t, "shape-style-select"),
            disabled: 0 === h.value(),
            className: Ce(te.defaultSelect, te.additionalSelect),
            menuItemClassName: te.defaultSelectItem,
            shapeLocation: u.value(),
            shapeLocationChange: this._onLocationChange
          }));
        }
      }]);

      return De;
    }(r.PureComponent);

    De.contextType = L.StylePropertyContext;
    var Ve = l(76058);
    var Re = {
      arrow_down: l(69151),
      arrow_up: l(67211),
      circle: l(83786),
      cross: l(50858),
      diamond: l(13201),
      flag: l(59058),
      label_down: l(8537),
      label_up: l(2309),
      square: l(78240),
      triangle_down: l(41683),
      triangle_up: l(6570),
      x_cross: l(23223)
    };

    function Me(e) {
      return Re[e];
    }

    var Be = [];
    Object.keys(Ve.plotShapesData).forEach(function (e) {
      var t = Ve.plotShapesData[e];
      Be.push({
        id: t.id,
        value: t.id,
        selectedContent: r.createElement(A.DisplayItem, {
          icon: Me(t.icon)
        }),
        content: r.createElement(A.DropItem, {
          icon: Me(t.icon),
          label: t.guiName
        })
      });
    });

    var Ne =
    /*#__PURE__*/
    function (_r$PureComponent15) {
      _inherits(Ne, _r$PureComponent15);

      function Ne() {
        _classCallCheck(this, Ne);

        return _possibleConstructorReturn(this, _getPrototypeOf(Ne).apply(this, arguments));
      }

      _createClass(Ne, [{
        key: "render",
        value: function render() {
          var _this$props17 = this.props,
              e = _this$props17.id,
              t = _this$props17.shapeStyleId,
              l = _this$props17.className,
              n = _this$props17.shapeStyleChange,
              o = _this$props17.disabled;
          return r.createElement(A.IconDropdown, {
            id: e,
            disabled: o,
            className: l,
            hideArrowButton: !0,
            items: Be,
            value: t,
            onChange: n
          });
        }
      }]);

      return Ne;
    }(r.PureComponent);

    var We = new s.TranslatedString("change shape", i.t(null, void 0, l(86888))),
        Ae = new s.TranslatedString("change location", i.t(null, void 0, l(38361)));

    var ze =
    /*#__PURE__*/
    function (_r$PureComponent16) {
      _inherits(ze, _r$PureComponent16);

      function ze() {
        var _this11;

        _classCallCheck(this, ze);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(ze).apply(this, arguments)), _this11._onPlotTypeChange = function (e) {
          var t = _this11.context.setValue;
          t(_this11.props.property.childs().plottype, e, We);
        }, _this11._onLocationChange = function (e) {
          var t = _this11.context.setValue;
          t(_this11.props.property.childs().location, e, Ae);
        };
        return _this11;
      }

      _createClass(ze, [{
        key: "render",
        value: function render() {
          var _this$props18 = this.props,
              e = _this$props18.id,
              t = _this$props18.title,
              l = _this$props18.isRGB,
              n = _this$props18.hasPalette,
              o = _this$props18.property,
              _o$childs = o.childs(),
              i = _o$childs.color,
              s = _o$childs.transparency,
              a = _o$childs.plottype,
              c = _o$childs.location,
              p = _o$childs.display;

          return r.createElement(B.InputRow, {
            grouped: n,
            label: r.createElement(pe, {
              id: e,
              title: t,
              display: p
            })
          }, !n && !l && r.createElement(ee.ColorWithThicknessSelect, {
            disabled: 0 === p.value(),
            color: i,
            transparency: s
          }), r.createElement(Ne, {
            id: (0, _.createDomId)(e, "shape-style-select"),
            disabled: 0 === p.value(),
            className: te.smallStyleControl,
            shapeStyleId: a.value(),
            shapeStyleChange: this._onPlotTypeChange
          }), r.createElement(xe, {
            id: (0, _.createDomId)(e, "shape-location-select"),
            disabled: 0 === p.value(),
            className: Ce(te.defaultSelect, te.additionalSelect),
            menuItemClassName: te.defaultSelectItem,
            shapeLocation: c.value(),
            shapeLocationChange: this._onLocationChange
          }));
        }
      }]);

      return ze;
    }(r.PureComponent);

    ze.contextType = L.StylePropertyContext;
    var He = (0, l(59224).getLogger)("Chart.Study.PropertyPage"),
        Fe = i.t(null, void 0, l(98802)),
        Ge = i.t(null, void 0, l(41361)),
        Ue = i.t(null, void 0, l(83760)),
        Oe = i.t(null, void 0, l(26458)),
        je = i.t(null, void 0, l(48848));

    var Qe =
    /*#__PURE__*/
    function (_r$PureComponent17) {
      _inherits(Qe, _r$PureComponent17);

      function Qe() {
        _classCallCheck(this, Qe);

        return _possibleConstructorReturn(this, _getPrototypeOf(Qe).apply(this, arguments));
      }

      _createClass(Qe, [{
        key: "render",
        value: function render() {
          var e, t, l;
          var _this$props19 = this.props,
              n = _this$props19.plot,
              i = _this$props19.palettes,
              s = _this$props19.study,
              a = n.id,
              c = s.properties().styles,
              p = s.metaInfo().styles,
              d = c[a],
              u = n.type,
              h = i.main,
              m = !!s.metaInfo().isRGB;
          if ("line" === u || "bar_colorer" === u || "bg_colorer" === u) return h && h.palette && h.paletteProps ? r.createElement(ce, {
            title: null !== (t = null === (e = null == p ? void 0 : p[a]) || void 0 === e ? void 0 : e.title) && void 0 !== t ? t : a,
            plot: n,
            palette: h.palette,
            paletteProps: h.paletteProps,
            styleProp: d
          }) : r.createElement(me, {
            id: a,
            title: (0, o.ensureDefined)(null === (l = null == p ? void 0 : p[a]) || void 0 === l ? void 0 : l.title),
            property: d,
            isRGB: m,
            isFundamental: false,
            showLineWidth: "line" === u
          });

          if ("arrows" === u) {
            var _e2 = this._getPlotSwitch(a, Ze(s, a), d.display);

            if (m) return _e2;
            var _t2 = i.up,
                _l = i.down;
            return _t2 || _l ? r.createElement(r.Fragment, null, _e2, _t2 && _t2.palette && _t2.paletteProps ? r.createElement(ce, {
              title: Fe,
              plot: n,
              palette: _t2.palette,
              paletteProps: _t2.paletteProps,
              styleProp: d,
              showSeparator: !1,
              showOnlyTitle: !0,
              offset: !0
            }) : r.createElement(ge, {
              id: a,
              isRGB: m,
              title: Fe,
              color: d.colorup,
              display: d.display,
              transparency: d.transparency,
              switchable: !1,
              grouped: !0,
              offset: !0
            }), _l && _l.palette && _l.paletteProps ? r.createElement(ce, {
              title: Ge,
              plot: n,
              palette: _l.palette,
              paletteProps: _l.paletteProps,
              styleProp: d,
              showSeparator: !1,
              showOnlyTitle: !0,
              offset: !0
            }) : r.createElement(ge, {
              id: a,
              isRGB: m,
              title: Ge,
              color: d.colordown,
              display: d.display,
              transparency: d.transparency,
              switchable: !1,
              grouped: !0,
              offset: !0
            }), r.createElement(oe.PropertyTable.GroupSeparator, null)) : r.createElement(be, {
              id: a,
              property: d,
              isRGB: m,
              plot: n,
              palettes: i,
              styleProp: d
            });
          }

          if ("chars" === u || "shapes" === u) {
            var _e3 = (0, o.ensureDefined)(null == p ? void 0 : p[a]),
                _t3 = _e3.title;

            return r.createElement(r.Fragment, null, "chars" === u ? r.createElement(De, {
              id: a,
              title: _t3,
              "char": _e3["char"],
              property: d,
              hasPalette: Boolean(h && h.palette),
              isRGB: m
            }) : r.createElement(ze, {
              id: a,
              title: _t3,
              property: d,
              hasPalette: Boolean(h && h.palette),
              isRGB: m
            }), h && h.palette && h.paletteProps && r.createElement(ce, {
              title: _t3,
              plot: n,
              palette: h.palette,
              paletteProps: h.paletteProps,
              hideVisibilitySwitch: !0,
              styleProp: d
            }));
          }

          if ((0, x.isOhlcPlot)(n)) {
            var _e4 = n.target,
                _t4 = s.properties().ohlcPlots[_e4],
                _l2 = (0, o.ensureDefined)((0, o.ensureDefined)(s.metaInfo().ohlcPlots)[_e4]),
                _c = this._getPlotSwitch(a, _l2.title, _t4.display);

            if (m) return _c;

            var _p = i.wick && i.wick.palette && i.wick.paletteProps,
                _d = i.border && i.border.palette && i.border.paletteProps;

            return r.createElement(r.Fragment, null, _c, h && h.palette && h.paletteProps ? r.createElement(ce, {
              title: Ue,
              plot: n,
              palette: h.palette,
              paletteProps: h.paletteProps,
              styleProp: _t4,
              showSeparator: !1,
              showOnlyTitle: !0,
              offset: !0
            }) : r.createElement(ge, {
              id: a,
              isRGB: m,
              title: Ue,
              display: _t4.display,
              color: _t4.color,
              transparency: _t4.transparency,
              switchable: !1,
              grouped: !0,
              offset: !0
            }), i.wick && i.wick.palette && i.wick.paletteProps && r.createElement(ce, {
              title: Oe,
              plot: n,
              palette: i.wick.palette,
              paletteProps: i.wick.paletteProps,
              styleProp: _t4,
              showSeparator: !1,
              showOnlyTitle: !0,
              offset: !0
            }), Boolean(!_p && _t4.wickColor) && r.createElement(ge, {
              id: a,
              isRGB: m,
              title: Oe,
              display: _t4.display,
              color: _t4.wickColor,
              transparency: _t4.transparency,
              switchable: !1,
              grouped: !0,
              offset: !0
            }), i.border && i.border.palette && i.border.paletteProps && r.createElement(ce, {
              title: je,
              plot: n,
              palette: i.border.palette,
              paletteProps: i.border.paletteProps,
              styleProp: _t4,
              showSeparator: !1,
              showOnlyTitle: !0,
              offset: !0
            }), Boolean(!_d && _t4.borderColor) && r.createElement(ge, {
              id: a,
              isRGB: m,
              title: je,
              display: _t4.display,
              color: _t4.borderColor,
              transparency: _t4.transparency,
              switchable: !1,
              grouped: !0,
              offset: !0
            }), r.createElement(oe.PropertyTable.GroupSeparator, null));
          }

          return He.logError("Unknown plot type: " + u), null;
        }
      }, {
        key: "_getPlotSwitch",
        value: function _getPlotSwitch(e, t, l) {
          return r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(pe, {
            id: e,
            title: t,
            display: l
          })));
        }
      }]);

      return Qe;
    }(r.PureComponent);

    function Ze(e, t) {
      var l = (0, o.ensureDefined)(e.metaInfo().styles),
          _ref3 = (0, o.ensureDefined)(l[t]),
          n = _ref3.title;

      return (0, o.ensureDefined)(n);
    }

    var qe = l(47510),
        Ke = l(53598);
    var $e = new s.TranslatedString("change line style", i.t(null, void 0, l(28691)));

    var Xe =
    /*#__PURE__*/
    function (_r$PureComponent18) {
      _inherits(Xe, _r$PureComponent18);

      function Xe() {
        var _this12;

        _classCallCheck(this, Xe);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Xe).apply(this, arguments)), _this12._onLineStyleChange = function (e) {
          var t = _this12.context.setValue,
              l = _this12.props.lineStyle;
          (0, V.setPropertyValue)(l, function (l) {
            return t(l, e, $e);
          });
        };
        return _this12;
      }

      _createClass(Xe, [{
        key: "render",
        value: function render() {
          var _this$props20 = this.props,
              e = _this$props20.lineStyle,
              t = _objectWithoutProperties(_this$props20, ["lineStyle"]);

          return r.createElement(Ke.LineStyleSelect, _objectSpread({}, t, {
            lineStyle: (0, V.getPropertyValue)(e),
            lineStyleChange: this._onLineStyleChange
          }));
        }
      }]);

      return Xe;
    }(r.PureComponent);

    Xe.contextType = L.StylePropertyContext;
    var Ye = new s.TranslatedString("change value", i.t(null, void 0, l(50463)));

    var Je =
    /*#__PURE__*/
    function (_r$PureComponent19) {
      _inherits(Je, _r$PureComponent19);

      function Je() {
        var _this13;

        _classCallCheck(this, Je);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Je).apply(this, arguments)), _this13._onValueChange = function (e) {
          var t = _this13.context.setValue,
              l = _this13.props.property.value;
          t(l, e, Ye);
        };
        return _this13;
      }

      _createClass(Je, [{
        key: "render",
        value: function render() {
          var _this$props21 = this.props,
              e = _this$props21.id,
              t = _this$props21.name,
              _this$props21$propert = _this$props21.property,
              l = _this$props21$propert.color,
              n = _this$props21$propert.linestyle,
              o = _this$props21$propert.linewidth,
              i = _this$props21$propert.transparency,
              s = _this$props21$propert.value,
              a = _this$props21$propert.visible;
          return r.createElement(B.InputRow, {
            labelAlign: "adaptive",
            label: r.createElement(M, {
              id: e,
              title: t,
              visible: a
            })
          }, r.createElement("div", {
            className: te.block
          }, r.createElement("div", {
            className: te.group
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: !a.value(),
            color: l,
            transparency: i,
            thickness: o
          }), r.createElement(Xe, {
            id: (0, _.createDomId)(e, "line-style-select"),
            disabled: !a.value(),
            className: te.smallStyleControl,
            lineStyle: n
          })), r.createElement("div", {
            className: Ce(te.wrapGroup, te.defaultSelect, te.additionalSelect)
          }, r.createElement(qe.FloatInputComponent, {
            input: {
              id: "",
              name: "",
              type: "float",
              defval: 0
            },
            value: s.value(),
            disabled: !a.value(),
            onChange: this._onValueChange
          }))));
        }
      }]);

      return Je;
    }(r.PureComponent);

    Je.contextType = L.StylePropertyContext;

    var et =
    /*#__PURE__*/
    function (_r$PureComponent20) {
      _inherits(et, _r$PureComponent20);

      function et() {
        _classCallCheck(this, et);

        return _possibleConstructorReturn(this, _getPrototypeOf(et).apply(this, arguments));
      }

      _createClass(et, [{
        key: "render",
        value: function render() {
          var _this$props$orders = this.props.orders,
              e = _this$props$orders.visible,
              t = _this$props$orders.showLabels,
              n = _this$props$orders.showQty;
          return r.createElement(r.Fragment, null, r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "chart-orders-switch",
            title: i.t(null, void 0, l(77409)),
            visible: e
          }))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "chart-orders-labels-switch",
            title: i.t(null, void 0, l(86520)),
            visible: t
          }))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "chart-orders-qty-switch",
            title: i.t(null, void 0, l(66596)),
            visible: n
          }))));
        }
      }]);

      return et;
    }(r.PureComponent);

    et.contextType = L.StylePropertyContext;
    var tt = l(90164),
        lt = l(96438);
    var nt = new s.TranslatedString("change percent width", i.t(null, void 0, l(51081))),
        rt = new s.TranslatedString("change placement", i.t(null, void 0, l(47634))),
        ot = new s.TranslatedString("change values visibility", i.t(null, void 0, l(12628))),
        it = [{
      value: tt.HHistDirection.LeftToRight,
      content: i.t(null, void 0, l(19286))
    }, {
      value: tt.HHistDirection.RightToLeft,
      content: i.t(null, void 0, l(21141))
    }],
        st = i.t(null, void 0, l(95247)),
        at = i.t(null, void 0, l(91502)),
        ct = i.t(null, void 0, l(91322)),
        pt = i.t(null, void 0, l(19221));

    var dt =
    /*#__PURE__*/
    function (_r$PureComponent21) {
      _inherits(dt, _r$PureComponent21);

      function dt() {
        var _this14;

        _classCallCheck(this, dt);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(dt).apply(this, arguments)), _this14._onPercentWidthChange = function (e) {
          var t = _this14.context.setValue,
              _this14$props$propert = _this14.props.property.childs(),
              l = _this14$props$propert.percentWidth;

          t(l, e, nt);
        }, _this14._onPlacementChange = function (e) {
          var t = _this14.context.setValue,
              _this14$props$propert2 = _this14.props.property.childs(),
              l = _this14$props$propert2.direction;

          t(l, e, rt);
        }, _this14._onShowValuesChange = function (e) {
          var t = _this14.context.setValue,
              _this14$props$propert3 = _this14.props.property.childs(),
              l = _this14$props$propert3.showValues;

          t(l, e, ot);
        };
        return _this14;
      }

      _createClass(dt, [{
        key: "render",
        value: function render() {
          var _this$props22 = this.props,
              e = _this$props22.hHistInfo,
              t = _this$props22.property,
              _t$childs = t.childs(),
              l = _t$childs.percentWidth,
              n = _t$childs.direction,
              o = _t$childs.showValues,
              i = _t$childs.valuesColor,
              s = _t$childs.visible,
              a = e.title;

          return r.createElement(r.Fragment, null, r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2,
            grouped: !0
          }, r.createElement(M, {
            id: a,
            title: a,
            visible: s
          }))), r.createElement(B.InputRow, {
            label: r.createElement("div", {
              className: te.childRowContainer
            }, st),
            grouped: !0
          }, r.createElement(lt.IntegerInputComponent, {
            input: {
              id: "",
              name: "",
              type: "integer",
              defval: 0
            },
            value: l.value(),
            disabled: !s.value(),
            onChange: this._onPercentWidthChange
          })), r.createElement(B.InputRow, {
            label: r.createElement("div", {
              className: te.childRowContainer
            }, at),
            grouped: !0
          }, r.createElement(Ee.Select, {
            id: "hhist-graphic-placement-select",
            disabled: !s.value(),
            className: te.defaultSelect,
            menuItemClassName: te.defaultSelectItem,
            items: it,
            value: n.value(),
            onChange: this._onPlacementChange
          })), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            className: te.childRowContainer,
            placement: "first",
            colSpan: 2,
            grouped: !0
          }, r.createElement(D.BoolInputComponent, {
            label: ct,
            input: {
              id: a + "_showValues",
              type: "bool",
              defval: !0,
              name: "visible"
            },
            value: !o || o.value(),
            disabled: !s.value(),
            onChange: this._onShowValuesChange
          }))), r.createElement(B.InputRow, {
            label: r.createElement("div", {
              className: te.childRowContainer
            }, pt),
            grouped: !0
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: s && !s.value(),
            color: i
          })), this._renderColors(), r.createElement(oe.PropertyTable.GroupSeparator, null));
        }
      }, {
        key: "_renderColors",
        value: function _renderColors() {
          var _this$props23 = this.props,
              e = _this$props23.property,
              t = _this$props23.hHistInfo,
              _e$childs = e.childs(),
              l = _e$childs.colors,
              n = _e$childs.transparencies,
              o = _e$childs.visible,
              i = t.titles;

          return l.childNames().map(function (e) {
            return r.createElement(B.InputRow, {
              key: e,
              grouped: !0,
              label: r.createElement("div", {
                className: te.childRowContainer
              }, i[+e])
            }, r.createElement(ee.ColorWithThicknessSelect, {
              disabled: !o.value(),
              color: l[+e],
              transparency: n[+e]
            }));
          });
        }
      }]);

      return dt;
    }(r.PureComponent);

    dt.contextType = L.StylePropertyContext;

    var ut =
    /*#__PURE__*/
    function (_r$PureComponent22) {
      _inherits(ut, _r$PureComponent22);

      function ut() {
        _classCallCheck(this, ut);

        return _possibleConstructorReturn(this, _getPrototypeOf(ut).apply(this, arguments));
      }

      _createClass(ut, [{
        key: "render",
        value: function render() {
          var _this$props24 = this.props,
              e = _this$props24.title,
              t = _this$props24.property,
              _t$childs2 = t.childs(),
              l = _t$childs2.color,
              n = _t$childs2.width,
              o = _t$childs2.style,
              i = _t$childs2.visible;

          return r.createElement(B.InputRow, {
            label: r.createElement(M, {
              id: e,
              title: e,
              visible: i
            })
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: !i.value(),
            color: l,
            transparency: t.child("transparency"),
            thickness: n
          }), r.createElement(Xe, {
            id: (0, _.createDomId)(e, "line-style-select"),
            disabled: !i.value(),
            className: te.smallStyleControl,
            lineStyle: o
          }));
        }
      }]);

      return ut;
    }(r.PureComponent);

    ut.contextType = L.StylePropertyContext;
    var ht, mt;
    l(1115);
    !function (e) {
      e.Triangle = "triangle", e.Rectangle = "rectangle";
    }(ht || (ht = {})), function (e) {
      e.Verdana = "Verdana", e.CourierNew = "Courier New", e.TimesNewRoman = "Times New Roman", e.Arial = "Arial";
    }(mt || (mt = {}));

    var vt =
    /*#__PURE__*/
    function (_r$PureComponent23) {
      _inherits(vt, _r$PureComponent23);

      function vt() {
        _classCallCheck(this, vt);

        return _possibleConstructorReturn(this, _getPrototypeOf(vt).apply(this, arguments));
      }

      _createClass(vt, [{
        key: "render",
        value: function render() {
          var _this$props25 = this.props,
              e = _this$props25.graphicType,
              t = _this$props25.study,
              l = t.metaInfo(),
              n = l.graphics,
              i = t.properties().graphics.childs(),
              s = (0, o.ensureDefined)(n[e]);
          return Object.keys(s).map(function (t, n) {
            var s, a, c, p;
            var d = (0, o.ensureDefined)(null === (s = i[e]) || void 0 === s ? void 0 : s.childs()[t]);
            return "horizlines" === e || "vertlines" === e ? r.createElement(ut, {
              key: t,
              title: (0, o.ensureDefined)(null === (a = l.graphics[e]) || void 0 === a ? void 0 : a[t]).name,
              property: d
            }) : "lines" === e ? r.createElement(ut, {
              key: t,
              title: (0, o.ensureDefined)(null === (c = l.graphics.lines) || void 0 === c ? void 0 : c[t]).title,
              property: d
            }) : "hhists" === e ? r.createElement(dt, {
              key: t,
              hHistInfo: (0, o.ensureDefined)(null === (p = l.graphics.hhists) || void 0 === p ? void 0 : p[t]),
              property: d
            }) : null;
          });
        }
      }]);

      return vt;
    }(r.PureComponent);

    var yt = l(66045);
    var gt = new s.TranslatedString("change font size", i.t(null, void 0, l(7378))),
        bt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
      return {
        value: e,
        title: e.toString()
      };
    });

    var wt =
    /*#__PURE__*/
    function (_r$PureComponent24) {
      _inherits(wt, _r$PureComponent24);

      function wt() {
        var _this15;

        _classCallCheck(this, wt);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(wt).apply(this, arguments)), _this15._onFontSizeChange = function (e) {
          var t = _this15.context.setValue,
              l = _this15.props.fontSize;
          t(l, e, gt);
        };
        return _this15;
      }

      _createClass(wt, [{
        key: "render",
        value: function render() {
          var _this$props26 = this.props,
              e = _this$props26.fontSize,
              t = _objectWithoutProperties(_this$props26, ["fontSize"]);

          return r.createElement(yt.FontSizeSelect, _objectSpread({}, t, {
            fontSizes: bt,
            fontSize: e.value(),
            fontSizeChange: this._onFontSizeChange
          }));
        }
      }]);

      return wt;
    }(r.PureComponent);

    wt.contextType = L.StylePropertyContext;
    var ft = new s.TranslatedString("change visibility", i.t(null, void 0, l(21511))),
        Ct = i.t(null, void 0, l(64606)),
        Pt = i.t(null, void 0, l(94420)),
        St = {
      Traditional: new Set(["S5/R5", "S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
      Fibonacci: new Set(["S3/R3", "S2/R2", "S1/R1", "P"]),
      Woodie: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
      Classic: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
      DM: new Set(["S1/R1", "P"]),
      DeMark: new Set(["S1/R1", "P"]),
      Camarilla: new Set(["S4/R4", "S3/R3", "S2/R2", "S1/R1", "P"]),
      Floor: new Set(["S3/R3", "S2/R2", "S1/R1", "P"])
    };

    var Et =
    /*#__PURE__*/
    function (_r$PureComponent25) {
      _inherits(Et, _r$PureComponent25);

      function Et() {
        var _this16;

        _classCallCheck(this, Et);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Et).apply(this, arguments)), _this16._onChange = function (e) {
          var t = _this16.context.setValue,
              _this16$props$propert = _this16.props.property.childs(),
              l = _this16$props$propert.levelsStyle,
              _l$childs = l.childs(),
              n = _l$childs.showLabels;

          t(n, e, ft);
        };
        return _this16;
      }

      _createClass(Et, [{
        key: "render",
        value: function render() {
          var _this$props$property$ = this.props.property.childs(),
              e = _this$props$property$.fontsize,
              t = _this$props$property$.levelsStyle;

          return r.createElement(r.Fragment, null, r.createElement(B.InputRow, {
            labelAlign: "adaptive",
            label: r.createElement("span", null, Ct)
          }, r.createElement("div", {
            className: te.block
          }, r.createElement("div", {
            className: Ce(te.wrapGroup, te.additionalSelect)
          }, r.createElement(wt, {
            id: "pivot-points-standard-font-size-select",
            fontSize: e
          })))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(D.BoolInputComponent, {
            label: Pt,
            input: {
              id: "ShowLabels",
              type: "bool",
              defval: !0,
              name: "visible"
            },
            value: t.childs().showLabels.value(),
            onChange: this._onChange
          }))), this._renderColors());
        }
      }, {
        key: "_renderColors",
        value: function _renderColors() {
          var _this$props$property$2 = this.props.property.childs(),
              e = _this$props$property$2.levelsStyle,
              t = _this$props$property$2.inputs,
              _e$childs2 = e.childs(),
              l = _e$childs2.colors,
              n = _e$childs2.widths,
              i = _e$childs2.visibility,
              _t$childs3 = t.childs(),
              s = _t$childs3.kind,
              a = (0, o.ensureDefined)(St[s.value()]);

          return l.childNames().filter(function (e) {
            return a.has(e);
          }).map(function (e) {
            return r.createElement(ye, {
              key: e,
              id: e,
              title: e,
              color: l.childs()[e],
              visible: i.childs()[e],
              thickness: n.childs()[e]
            });
          });
        }
      }]);

      return Et;
    }(r.PureComponent);

    Et.contextType = L.StylePropertyContext;

    var Tt = i.t(null, void 0, l(91502)),
        kt = [{
      value: tt.HHistDirection.RightToLeft,
      content: i.t(null, void 0, l(21141))
    }, {
      value: tt.HHistDirection.LeftToRight,
      content: i.t(null, void 0, l(19286))
    }],
        _t = new s.TranslatedString("change visibility", i.t(null, void 0, l(21511))),
        xt = i.t(null, void 0, l(14414)),
        It = i.t(null, void 0, l(91322)),
        Lt = i.t(null, void 0, l(95247)),
        Dt = i.t(null, void 0, l(31577)),
        Vt = i.t(null, {
      context: "input"
    }, l(45811)),
        Rt = i.t(null, {
      context: "input"
    }, l(41596));

    var Mt =
    /*#__PURE__*/
    function (_r$PureComponent26) {
      _inherits(Mt, _r$PureComponent26);

      function Mt() {
        var _this17;

        _classCallCheck(this, Mt);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Mt).apply(this, arguments)), _this17._onChange = function (e) {
          _this17._setHhistsProperty("visible", e);
        }, _this17._onShowValuesChange = function (e) {
          _this17._setHhistsProperty("showValues", e);
        }, _this17._onValueChange = function (e) {
          _this17._setHhistsProperty("percentWidth", e);
        }, _this17._onDirectionChange = function (e) {
          _this17._setHhistsProperty("direction", e);
        };
        return _this17;
      }

      _createClass(Mt, [{
        key: "render",
        value: function render() {
          var e, t, n, s, a, c;

          var p = this.props.metaInfo,
              _this$props$property$3 = this.props.property.childs(),
              d = _this$props$property$3.graphics,
              u = _this$props$property$3.styles,
              h = _this$props$property$3.showLabelsOnPriceScale,
              m = _this$props$property$3.showLegendValues,
              _d$childs = d.childs(),
              v = _d$childs.hhists,
              y = _d$childs.horizlines,
              g = _d$childs.polygons,
              b = (0, o.ensureDefined)(p.graphics.hhists),
              w = Object.keys(b),
              f = v.childs()[w[0]],
              C = f.childs().visible,
              P = w.map(function (e) {
            return v.childs()[e].childs().showValues;
          }),
              S = f.childs().percentWidth,
              E = f.childs().direction,
              T = w.map(function (e) {
            return v.childs()[e].childs().valuesColor;
          }),
              k = null === (e = y.childs()) || void 0 === e ? void 0 : e.vahLines,
              _ = null === (t = p.graphics.horizlines) || void 0 === t ? void 0 : t.vahLines,
              x = null === (n = y.childs()) || void 0 === n ? void 0 : n.valLines,
              I = null === (s = p.graphics.horizlines) || void 0 === s ? void 0 : s.valLines,
              L = y.childs().pocLines,
              V = (0, o.ensureDefined)(null === (a = p.graphics.horizlines) || void 0 === a ? void 0 : a.pocLines),
              R = u.childs().developingPoc,
              N = new ae.StudyPlotVisibleProperty(R.childs().display),
              W = (0, o.ensureDefined)(null === (c = p.styles) || void 0 === c ? void 0 : c.developingPoc),
              A = u.childs().developingVAHigh,
              z = new ae.StudyPlotVisibleProperty(A.childs().display),
              H = u.childs().developingVALow,
              F = new ae.StudyPlotVisibleProperty(H.childs().display),
              G = p.graphics.polygons && p.graphics.polygons.histBoxBg;

          return r.createElement(r.Fragment, null, r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(D.BoolInputComponent, {
            label: xt,
            input: {
              id: "VolumeProfile",
              type: "bool",
              defval: !0,
              name: "visible"
            },
            value: C.value(),
            onChange: this._onChange
          }))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first"
          }, r.createElement("div", {
            className: te.childRowContainer
          }, r.createElement(D.BoolInputComponent, {
            disabled: !C.value(),
            label: It,
            input: {
              id: "ShowValues",
              type: "bool",
              defval: !0,
              name: "visible"
            },
            value: P[0].value(),
            onChange: this._onShowValuesChange
          }))), r.createElement(oe.PropertyTable.Cell, {
            placement: "last"
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: !C.value() || !P[0].value(),
            color: T
          }))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first"
          }, r.createElement("div", {
            className: te.childRowContainer
          }, Lt)), r.createElement(oe.PropertyTable.Cell, {
            placement: "last"
          }, r.createElement(lt.IntegerInputComponent, {
            disabled: !C.value(),
            input: {
              id: "",
              name: "",
              type: "integer",
              defval: 0
            },
            value: S.value(),
            onChange: this._onValueChange
          }))), r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first"
          }, r.createElement("div", {
            className: te.childRowContainer
          }, Tt)), r.createElement(oe.PropertyTable.Cell, {
            placement: "last"
          }, r.createElement(Ee.Select, {
            id: "hhist-direction-select",
            disabled: !C.value(),
            className: te.defaultSelect,
            menuItemClassName: te.defaultSelectItem,
            items: kt,
            value: E.value(),
            onChange: this._onDirectionChange
          }))), w.map(function (e) {
            return r.createElement(r.Fragment, {
              key: e
            }, v.childs()[e].childs().colors.childNames().map(function (t, n) {
              var o = b[e];
              return r.createElement(B.InputRow, {
                key: n,
                label: r.createElement("div", {
                  className: te.childRowContainer
                }, o && i.t(o.titles[n], {
                  context: "input"
                }, l(88601)) || "")
              }, r.createElement(ee.ColorWithThicknessSelect, {
                disabled: !C.value(),
                color: v.childs()[e].childs().colors.childs()[n],
                transparency: v.childs()[e].childs().transparencies.childs()[n]
              }));
            }));
          }), _ && k && r.createElement(ye, {
            id: "vahLines",
            title: _.name,
            color: k.childs().color,
            visible: k.childs().visible,
            thickness: k.childs().width
          }, r.createElement(Xe, {
            id: "vah-lines-line-style-select",
            disabled: !k.childs().visible.value(),
            className: te.smallStyleControl,
            lineStyle: k.childs().style
          })), I && x && r.createElement(ye, {
            id: "valLines",
            title: I.name,
            color: x.childs().color,
            visible: x.childs().visible,
            thickness: x.childs().width
          }, r.createElement(Xe, {
            id: "val-lines-line-style-select",
            disabled: !x.childs().visible.value(),
            className: te.smallStyleControl,
            lineStyle: x.childs().style
          })), r.createElement(ye, {
            id: "pocLines",
            title: V.name,
            color: L.childs().color,
            visible: L.childs().visible,
            thickness: L.childs().width
          }, r.createElement(Xe, {
            id: "poc-lines-line-style-select",
            disabled: !L.childs().visible.value(),
            className: te.smallStyleControl,
            lineStyle: L.childs().style
          })), R && r.createElement(ye, {
            id: "developingPoc",
            title: W.title && i.t(W.title, {
              context: "input"
            }, l(88601)) || "",
            color: R.childs().color,
            visible: N,
            thickness: R.childs().linewidth
          }, r.createElement(Xe, {
            id: "developing-poc-line-style-select",
            disabled: !N.value(),
            className: te.smallStyleControl,
            lineStyle: R.childs().linestyle
          })), A && H && r.createElement(ye, {
            id: "developingPoc",
            title: Dt,
            color: [A.childs().color, H.childs().color],
            visible: [z, F],
            thickness: [A.childs().linewidth, H.childs().linewidth]
          }, r.createElement(Xe, {
            id: "developing-VA-line-style-select",
            disabled: !z.value() && !F.value(),
            className: te.smallStyleControl,
            lineStyle: [A.childs().linestyle, H.childs().linestyle]
          })), g && r.createElement(B.InputRow, {
            label: r.createElement("div", null, G && i.t(G.name, {
              context: "input"
            }, l(88601)) || "")
          }, r.createElement(ee.ColorWithThicknessSelect, {
            color: g.childs().histBoxBg.childs().color,
            transparency: g.childs().histBoxBg.childs().transparency
          })), (h || m) && "VbPFixed" !== p.shortId && r.createElement(r.Fragment, null, h && r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "showLabelsOnPriceScale",
            title: Rt,
            visible: h
          })), m && r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "showLegendValues",
            title: Vt,
            visible: m
          }))));
        }
      }, {
        key: "_setHhistsProperty",
        value: function _setHhistsProperty(e, t) {
          var l = this.context.setValue,
              _this$props27 = this.props,
              n = _this$props27.metaInfo,
              r = _this$props27.property,
              i = r.childs().graphics.childs().hhists,
              s = Object.keys((0, o.ensureDefined)(n.graphics.hhists));

          for (var _n = 0; _n < s.length; _n++) {
            var _r = i.childs()[s[_n]].child(e);

            l((0, o.ensureDefined)(_r), t, _t);
          }
        }
      }]);

      return Mt;
    }(r.PureComponent);

    function Bt() {
      var e = (0, o.ensureNotNull)((0, r.useContext)(ve)),
          t = e.metaInfo(),
          l = e.properties();
      return r.createElement(Mt, {
        metaInfo: t,
        property: l
      });
    }

    Mt.contextType = L.StylePropertyContext;
    var Nt = l(51717);
    var Wt = {
      VbPFixed: Bt,
      PivotPointsStandard: function PivotPointsStandard() {
        var e = (0, o.ensureNotNull)((0, r.useContext)(ve)).properties();
        return r.createElement(Et, {
          property: e
        });
      },
      VbPVisible: Bt,
      VbPAnchored: Bt
    };

    var At =
    /*#__PURE__*/
    function (_r$PureComponent27) {
      _inherits(At, _r$PureComponent27);

      function At() {
        _classCallCheck(this, At);

        return _possibleConstructorReturn(this, _getPrototypeOf(At).apply(this, arguments));
      }

      _createClass(At, [{
        key: "render",
        value: function render() {
          var _this18 = this;

          var e = (0, o.ensureNotNull)(this.context);
          return r.createElement(ve.Consumer, null, function (t) {
            return r.createElement(L.StylePropertyContainer, {
              property: (0, o.ensureNotNull)(t).properties(),
              model: e
            }, r.createElement(oe.PropertyTable, null, _this18._renderCustomContent((0, o.ensureNotNull)(t).metaInfo().shortId)));
          });
        }
      }, {
        key: "_renderCustomContent",
        value: function _renderCustomContent(e) {
          if (e in Wt) {
            var _t5 = Wt[e];
            return r.createElement(_t5, null);
          }

          return null;
        }
      }]);

      return At;
    }(r.PureComponent);

    At.contextType = Nt.ModelContext;
    var zt = l(43886);
    var Ht = new s.TranslatedString("change precision", i.t(null, void 0, l(164))),
        Ft = i.t(null, void 0, l(4329)),
        Gt = i.t(null, void 0, l(73947)),
        Ut = [{
      value: "default",
      content: Ft
    }];

    for (var _e5 = 0; _e5 <= 8; _e5++) {
      Ut.push({
        value: _e5,
        content: _e5.toString()
      });
    }

    var Ot =
    /*#__PURE__*/
    function (_r$PureComponent28) {
      _inherits(Ot, _r$PureComponent28);

      function Ot() {
        var _this19;

        _classCallCheck(this, Ot);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(Ot).apply(this, arguments)), _this19._onChange = function (e) {
          var t = _this19.context.setValue,
              l = _this19.props.precision;
          t(l, e, Ht);
        };
        return _this19;
      }

      _createClass(Ot, [{
        key: "render",
        value: function render() {
          var _this$props28 = this.props,
              e = _this$props28.id,
              t = _this$props28.precision;
          return r.createElement(B.InputRow, {
            label: Gt
          }, r.createElement(Ee.Select, {
            id: e,
            className: te.defaultSelect,
            menuItemClassName: te.defaultSelectItem,
            items: Ut,
            value: t.value(),
            onChange: this._onChange
          }));
        }
      }]);

      return Ot;
    }(r.PureComponent);

    Ot.contextType = L.StylePropertyContext;
    var jt = new s.TranslatedString("change min tick", i.t(null, void 0, l(20834))),
        Qt = i.t(null, void 0, l(4329)),
        Zt = i.t(null, void 0, l(36993)),
        qt = [{
      priceScale: 1,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 10,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 100,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e3,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e4,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e5,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e6,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e7,
      minMove: 1,
      frac: !1
    }, {
      priceScale: 1e8,
      minMove: 1,
      frac: !1
    }, {
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
        Kt = [{
      id: "tick-default",
      value: "default",
      content: Qt
    }];

    for (var _e6 = 0; _e6 < qt.length; _e6++) {
      var _t6 = qt[_e6];
      Kt.push({
        value: _t6.priceScale + "," + _t6.minMove + "," + _t6.frac,
        content: _t6.minMove + "/" + _t6.priceScale
      });
    }

    var $t =
    /*#__PURE__*/
    function (_r$PureComponent29) {
      _inherits($t, _r$PureComponent29);

      function $t() {
        var _this20;

        _classCallCheck(this, $t);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf($t).apply(this, arguments)), _this20._onChange = function (e) {
          var t = _this20.context.setValue,
              l = _this20.props.minTick;
          t(l, e, jt);
        };
        return _this20;
      }

      _createClass($t, [{
        key: "render",
        value: function render() {
          var _this$props29 = this.props,
              e = _this$props29.id,
              t = _this$props29.minTick;
          return r.createElement(B.InputRow, {
            label: Zt
          }, r.createElement(Ee.Select, {
            id: e,
            className: te.defaultSelect,
            menuItemClassName: te.defaultSelectItem,
            items: Kt,
            value: t.value(),
            onChange: this._onChange
          }));
        }
      }]);

      return $t;
    }(r.PureComponent);

    $t.contextType = L.StylePropertyContext;
    var Xt = l(73146),
        Yt = l(86067);

    var Jt =
    /*#__PURE__*/
    function (_r$PureComponent30) {
      _inherits(Jt, _r$PureComponent30);

      function Jt() {
        _classCallCheck(this, Jt);

        return _possibleConstructorReturn(this, _getPrototypeOf(Jt).apply(this, arguments));
      }

      _createClass(Jt, [{
        key: "render",
        value: function render() {
          var _this$props30 = this.props,
              e = _this$props30.id,
              t = _this$props30.isRGB,
              l = _this$props30.title,
              n = _this$props30.visible,
              o = _this$props30.bottomColor,
              i = _this$props30.topColor,
              s = _this$props30.transparency,
              a = _this$props30.children,
              _this$props30$switcha = _this$props30.switchable,
              c = _this$props30$switcha === void 0 ? !0 : _this$props30$switcha,
              p = _this$props30.offset,
              d = _this$props30.grouped;
          return r.createElement(B.InputRow, {
            label: c ? r.createElement(M, {
              id: e,
              title: l,
              visible: n
            }) : l,
            offset: p,
            grouped: d
          }, t ? null : r.createElement(r.Fragment, null, i && r.createElement(ee.ColorWithThicknessSelect, {
            disabled: n && !(Array.isArray(n) ? n[0].value() : n.value()),
            color: i,
            transparency: s
          }), o && r.createElement("div", {
            className: Pe()(o && i && te.additionalSelect)
          }, r.createElement(ee.ColorWithThicknessSelect, {
            disabled: n && !(Array.isArray(n) ? n[0].value() : n.value()),
            color: o,
            transparency: s
          }))), a);
        }
      }]);

      return Jt;
    }(r.PureComponent);

    Jt.contextType = L.StylePropertyContext;
    var el = i.t(null, void 0, l(27331)),
        tl = i.t(null, {
      context: "input"
    }, l(45811)),
        ll = i.t(null, {
      context: "input"
    }, l(41596)),
        nl = i.t(null, void 0, l(40297));

    var rl =
    /*#__PURE__*/
    function (_r$PureComponent31) {
      _inherits(rl, _r$PureComponent31);

      function rl() {
        var _this21;

        _classCallCheck(this, rl);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(rl).apply(this, arguments)), _this21._findPlotPalettes = function (e) {
          var t = _this21.props.study,
              l = t.metaInfo(),
              n = (0, o.ensureDefined)(l.palettes);
          return (0, x.isBarColorerPlot)(e) || (0, x.isBgColorerPlot)(e) ? {
            main: {
              palette: n[e.palette],
              paletteProps: t.properties().palettes[e.palette]
            }
          } : _this21._findPalettesByTargetId(e.id);
        };
        return _this21;
      }

      _createClass(rl, [{
        key: "render",
        value: function render() {
          var e = this.props.study,
              t = e.metaInfo();
          if ((0, zt.isCustomStudy)(t.shortId)) return r.createElement(At, null);
          var l = e.properties(),
              n = l.precision,
              o = l.strategy,
              i = l.minTick,
              s = l.showLabelsOnPriceScale,
              a = l.showLegendValues,
              c = t.plots.length > 0,
              p = t.plots.some(function (e) {
            return !(0, x.isPlotWithTechnicalValues)(e);
          }),
              d = c || t.inputs.some(function (e) {
            return "price" === e.type;
          }),
              u = (0, Xt.createAdapter)(e).canOverrideMinTick();
          return r.createElement(oe.PropertyTable, null, this._plotsElement(), this._bandsElement(), this._bandsBackgroundsElement(), this._areasBackgroundsElement(), this._filledAreasElement(), this._graphicsElement(), u && r.createElement($t, {
            id: (0, _.createDomId)(t.id, "min-tick-select"),
            minTick: i
          }), I.StudyMetaInfo.isScriptStrategy(t) && r.createElement(et, {
            orders: o.orders
          }), (d || p) && r.createElement(oe.PropertyTable.Row, null, r.createElement(oe.PropertyTable.GroupSeparator, {
            size: 1
          }), r.createElement(Yt.GroupTitleSection, {
            title: nl,
            name: nl
          }), d && r.createElement(Ot, {
            id: (0, _.createDomId)(t.id, "precision-select"),
            precision: n
          }), p && r.createElement(r.Fragment, null, r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "showLabelsOnPriceScale",
            title: ll,
            visible: s
          })), r.createElement(oe.PropertyTable.Cell, {
            placement: "first",
            colSpan: 2
          }, r.createElement(M, {
            id: "showLegendValues",
            title: tl,
            visible: a
          })))));
        }
      }, {
        key: "_plotsElement",
        value: function _plotsElement() {
          var _this22 = this;

          var e = this.props.study,
              t = e.metaInfo();
          return new T.MetaInfoHelper(t).getUserEditablePlots().filter(function (e) {
            return !((0, x.isUpColorerPlot)(e) || (0, x.isDownColorerPlot)(e) || (0, x.isCandleBorderColorerPlot)(e) || (0, x.isCandleWickColorerPlot)(e));
          }).map(function (t) {
            var l = (0, x.isOhlcPlot)(t) ? _objectSpread({}, t, {
              id: t.target
            }) : t,
                n = _this22._findPlotPalettes(l);

            return r.createElement(Qe, {
              key: t.id,
              plot: t,
              palettes: n,
              study: e
            });
          });
        }
      }, {
        key: "_bandsElement",
        value: function _bandsElement() {
          var e = this.props.study,
              t = e.metaInfo().bands,
              l = e.properties().childs().bands;
          return t && l && t.map(function (e, t) {
            if (!e.isHidden) return r.createElement(Je, {
              key: t,
              id: e.name,
              name: e.name,
              property: l[t]
            });
          });
        }
      }, {
        key: "_bandsBackgroundsElement",
        value: function _bandsBackgroundsElement() {
          var e = this.props.study,
              t = e.properties(),
              l = t.bandsBackground;
          return l && r.createElement(ye, {
            id: "bandsBackground",
            title: el,
            visible: l.fillBackground,
            color: l.backgroundColor,
            transparency: l.transparency
          });
        }
      }, {
        key: "_areasBackgroundsElement",
        value: function _areasBackgroundsElement() {
          var e = this.props.study,
              t = e.metaInfo(),
              l = e.properties(),
              n = l.areaBackground;
          return t.isRGB ? null : n && r.createElement(ye, {
            id: "areaBackground",
            title: el,
            visible: n.fillBackground,
            color: n.backgroundColor,
            transparency: n.transparency
          });
        }
      }, {
        key: "_filledAreasElement",
        value: function _filledAreasElement() {
          var _this23 = this;

          var e = this.props.study,
              t = e.metaInfo(),
              l = t.filledAreas;
          return !l || t.isRGB ? [] : l.map(function (t) {
            if (t.isHidden) return null;
            var l = e.properties().filledAreasStyle[t.id],
                n = t.title || el;

            if (l.hasChild("fillType") && "gradient" === l.childs().fillType.value()) {
              if (l.topColor || l.bottomColor) return r.createElement(Jt, {
                key: t.id,
                id: t.id,
                title: n,
                bottomColor: l.bottomColor,
                topColor: l.topColor,
                visible: l.visible,
                transparency: l.transparency
              });

              if (t.palette) {
                var _e7 = _this23._findPalettesByTargetId(t.id),
                    _n2 = (0, o.ensureDefined)(_e7.main),
                    _i = _e7.secondary;

                return r.createElement(se, {
                  key: t.id,
                  title: t.title,
                  area: t,
                  palette: (0, o.ensureDefined)(_n2.palette),
                  paletteProps: (0, o.ensureDefined)(_n2.paletteProps),
                  secondaryPalette: null == _i ? void 0 : _i.palette,
                  secondaryPaletteProps: null == _i ? void 0 : _i.paletteProps,
                  styleProp: l
                });
              }

              return null;
            }

            if (t.palette) {
              var _e8 = _this23._findPalettesByTargetId(t.id),
                  _n3 = (0, o.ensureDefined)(_e8.main);

              return r.createElement(se, {
                key: t.id,
                title: t.title,
                area: t,
                palette: (0, o.ensureDefined)(_n3.palette),
                paletteProps: (0, o.ensureDefined)(_n3.paletteProps),
                styleProp: l
              });
            }

            return r.createElement(ye, {
              key: t.id,
              id: t.id,
              title: n,
              color: l.color,
              visible: l.visible,
              transparency: l.transparency
            });
          });
        }
      }, {
        key: "_graphicsElement",
        value: function _graphicsElement() {
          var e = this.props.study,
              t = e.metaInfo().graphics;
          return t && Object.keys(t).map(function (t, l) {
            return r.createElement(vt, {
              key: t,
              graphicType: t,
              study: e
            });
          });
        }
      }, {
        key: "_findPalettesByTargetId",
        value: function _findPalettesByTargetId(e) {
          var t = this.props.study,
              l = t.metaInfo(),
              n = l.plots,
              r = (0, o.ensureDefined)(l.palettes),
              i = {};
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _l3 = _step.value;

              if (((0, x.isPaletteColorerPlot)(_l3) || (0, x.isOhlcColorerPlot)(_l3)) && _l3.target === e) {
                if (i.main) {
                  i.secondary = {
                    palette: r[_l3.palette],
                    paletteProps: t.properties().palettes[_l3.palette]
                  };
                  continue;
                }

                i.main = {
                  palette: r[_l3.palette],
                  paletteProps: t.properties().palettes[_l3.palette]
                };
              }

              (0, x.isUpColorerPlot)(_l3) && _l3.target === e && (i.up = {
                palette: r[_l3.palette],
                paletteProps: t.properties().palettes[_l3.palette]
              }), (0, x.isDownColorerPlot)(_l3) && _l3.target === e && (i.down = {
                palette: r[_l3.palette],
                paletteProps: t.properties().palettes[_l3.palette]
              }), (0, x.isCandleWickColorerPlot)(_l3) && _l3.target === e && (i.wick = {
                palette: r[_l3.palette],
                paletteProps: t.properties().palettes[_l3.palette]
              }), (0, x.isCandleBorderColorerPlot)(_l3) && _l3.target === e && (i.border = {
                palette: r[_l3.palette],
                paletteProps: t.properties().palettes[_l3.palette]
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

          return i;
        }
      }]);

      return rl;
    }(r.PureComponent);

    function ol(e) {
      return (0, L.bindPropertyContext)(rl, _objectSpread({}, e, {
        property: e.study.properties()
      }));
    }

    var il =
    /*#__PURE__*/
    function (_r$PureComponent32) {
      _inherits(il, _r$PureComponent32);

      function il() {
        _classCallCheck(this, il);

        return _possibleConstructorReturn(this, _getPrototypeOf(il).apply(this, arguments));
      }

      _createClass(il, [{
        key: "render",
        value: function render() {
          return r.createElement(Nt.ModelContext.Provider, {
            value: this.props.model
          }, r.createElement(ve.Provider, {
            value: this.props.source
          }, r.createElement(ol, {
            study: this.props.source
          })));
        }
      }]);

      return il;
    }(r.PureComponent);

    var sl = l(73955),
        al = l(85067),
        cl = l(97456),
        pl = l(37591);

    var dl =
    /*#__PURE__*/
    function (_al$DialogRenderer) {
      _inherits(dl, _al$DialogRenderer);

      function dl(e, t, l, r) {
        var _this24;

        _classCallCheck(this, dl);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(dl).call(this)), _this24._timeout = null, _this24._handleClose = function () {
          n.unmountComponentAtNode(_this24._container), _this24._setVisibility(!1), _this24._subscription.unsubscribe(_assertThisInitialized(_this24), _this24._handleCollectionChanged);
        }, _this24._handleCancel = function () {
          _this24._model.undoToCheckpoint(_this24._checkpoint);
        }, _this24._handleSubmit = function () {}, _this24._handleActiveTabChanged = function (e) {
          c.setValue(_this24._activeTabSettingsName(), e);
        }, _this24._source = e, _this24._model = t, _this24._propertyPages = r, _this24._checkpoint = _this24._ensureCheckpoint(l), _this24._subscription = _this24._model.model().dataSourceCollectionChanged(), _this24._subscription.subscribe(_assertThisInitialized(_this24), _this24._handleCollectionChanged);
        return _this24;
      }

      _createClass(dl, [{
        key: "hide",
        value: function hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose();
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this.visible().value();
        }
      }, {
        key: "show",
        value: function show() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t;
          if (!p.enabled("property_pages")) return;

          var o = this._source.metaInfo();

          if ((0, w.isLineTool)(this._source) && (0, u.trackEvent)("GUI", "Drawing Properties", this._source.name()), (0, g.isStudy)(this._source)) {
            var _e9 = !this._source.isPine() || this._source.isStandardPine() ? o.description : "Custom Pine";

            (0, u.trackEvent)("GUI", "Study Properties", _e9);
          }

          var s = [];
          var h = new T.MetaInfoHelper(o);
          h.hasUserEditableInputs() && s.push({
            id: "inputs",
            label: i.t(null, void 0, l(66304)),
            Component: k
          }), h.hasUserEditableProperties(), h.hasUserEditableStyles() && s.push({
            id: "style",
            label: i.t(null, void 0, l(32733)),
            Component: il
          }), this._propertyPages || s.push({
            id: "visibilities",
            label: i.t(null, void 0, l(21852)),
            page: this._createVisibilitiesPropertyPage()
          }), s = this._getPagesForStudyLineTool(s);
          var m = e.initialTab || c.getValue(this._activeTabSettingsName()) || "inputs";
          var v = (0, a.clean)(o.shortDescription, !0);
          var y = null !== (t = s.find(function (e) {
            return e.id === m;
          })) && void 0 !== t ? t : s[0];
          n.render(r.createElement(S, {
            title: v,
            model: this._model,
            source: this._source,
            initialActiveTab: y.id,
            pages: s,
            shouldReturnFocus: e.shouldReturnFocus,
            onSubmit: this._handleSubmit,
            onCancel: this._handleCancel,
            onClose: this._handleClose,
            onActiveTabChanged: this._handleActiveTabChanged
          }), this._container), this._setVisibility(!0), d.emit("edit_object_dialog", {
            objectType: "study",
            scriptTitle: this._source.title(pl.TitleDisplayTarget.StatusLine)
          });
        }
      }, {
        key: "_createVisibilitiesPropertyPage",
        value: function _createVisibilitiesPropertyPage() {
          var e = this._source.properties().childs().intervalsVisibilities.childs();

          return (0, sl.createPropertyPage)((0, cl.getIntervalsVisibilitiesPropertiesDefinitions)(this._model, e, new s.TranslatedString(this._source.name(!0), this._source.title(pl.TitleDisplayTarget.StatusLine, !0))), "visibility", i.t(null, void 0, l(21852)));
        }
      }, {
        key: "_activeTabSettingsName",
        value: function _activeTabSettingsName() {
          return "properties_dialog.active_tab.study";
        }
      }, {
        key: "_ensureCheckpoint",
        value: function _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
      }, {
        key: "_getPagesForStudyLineTool",
        value: function _getPagesForStudyLineTool(e) {
          if (this._propertyPages) {
            var _t7 = this._propertyPages.filter(function (e) {
              return "coordinates" === e.id || "visibility" === e.id;
            });

            return [].concat(_toConsumableArray(e), _toConsumableArray(_t7.map(function (e) {
              return {
                id: e.id,
                label: e.title,
                page: e
              };
            })));
          }

          return e;
        }
      }, {
        key: "_handleCollectionChanged",
        value: function _handleCollectionChanged() {
          var _this25 = this;

          null === this._timeout && (this._timeout = setTimeout(function () {
            _this25._closeDialogIfSourceIsDeleted(), _this25._timeout = null;
          }));
        }
      }, {
        key: "_closeDialogIfSourceIsDeleted",
        value: function _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) && this._handleClose();
        }
      }]);

      return dl;
    }(al.DialogRenderer);
  },
  50945: function _(e, t, l) {
    "use strict";

    l.d(t, {
      StudyDefaultsManager: function StudyDefaultsManager() {
        return h;
      }
    });
    var n = l(50959),
        r = l(97754),
        o = l.n(r),
        i = l(9745),
        s = l(44352),
        a = l(95276),
        c = l(16396),
        p = l(44996),
        d = l(92229);
    var u = {
      reset: s.t(null, void 0, l(79782)),
      saveAsDefault: s.t(null, void 0, l(18229)),
      defaults: s.t(null, void 0, l(98938))
    };

    var h =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(h, _n$PureComponent);

      function h() {
        var _this26;

        _classCallCheck(this, h);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(h).apply(this, arguments)), _this26._handleResetToDefaults = function () {
          _this26.props.model.restorePropertiesForSource(_this26.props.source);
        }, _this26._handleSaveAsDefaults = function () {
          _this26.props.source.properties().saveDefaults();
        };
        return _this26;
      }

      _createClass(h, [{
        key: "render",
        value: function render() {
          var e = this.props.mode;
          return n.createElement(a.ControlDisclosure, {
            id: "study-defaults-manager",
            className: o()("normal" === e && d.defaultsButtonText),
            hideArrowButton: "compact" === e,
            buttonChildren: this._getPlaceHolderItem("compact" === e)
          }, n.createElement(c.PopupMenuItem, {
            className: d.defaultsButtonItem,
            isActive: !1,
            label: u.reset,
            onClick: this._handleResetToDefaults
          }), n.createElement(c.PopupMenuItem, {
            className: d.defaultsButtonItem,
            isActive: !1,
            label: u.saveAsDefault,
            onClick: this._handleSaveAsDefaults
          }));
        }
      }, {
        key: "_getPlaceHolderItem",
        value: function _getPlaceHolderItem(e) {
          return e ? n.createElement(i.Icon, {
            className: d.defaultsButtonIcon,
            icon: p
          }) : u.defaults;
        }
      }]);

      return h;
    }(n.PureComponent);
  },
  48531: function _(e, t, l) {
    "use strict";

    l.d(t, {
      FooterMenu: function FooterMenu() {
        return b;
      }
    });
    var n = l(50959),
        r = l(44352),
        o = l(9745),
        i = l(95276),
        s = l(90692),
        a = l(47334),
        c = l(44996);

    function p(e) {
      return e.isTabletWidth ? n.createElement(o.Icon, {
        className: a.themesButtonIcon,
        icon: c
      }) : n.createElement(n.Fragment, null, r.t(null, void 0, l(19611)));
    }

    function d(e) {
      return n.createElement(s.MatchMedia, {
        rule: "screen and (max-width: 768px)"
      }, function (t) {
        return n.createElement(i.ControlDisclosure, {
          className: !t && a.themesButtonText,
          hideArrowButton: t,
          buttonChildren: n.createElement(p, {
            isTabletWidth: t
          })
        }, e.children);
      });
    }

    var u = l(16396),
        h = l(96040),
        m = l(70412),
        v = l(32563);

    function y(e) {
      var t = e.name,
          l = e.onRemove,
          r = e.onClick,
          _ref4 = (0, m.useHover)(),
          _ref5 = _slicedToArray(_ref4, 2),
          o = _ref5[0],
          i = _ref5[1],
          s = n.useCallback(function () {
        return r(t);
      }, [r, t]),
          c = n.useCallback(function () {
        l && l(t);
      }, [l, t]);

      return n.createElement("div", _objectSpread({}, i), n.createElement(u.PopupMenuItem, {
        className: a.defaultsButtonItem,
        isActive: !1,
        label: t,
        onClick: s,
        toolbox: l && n.createElement(h.RemoveButton, {
          hidden: !v.mobiletouch && !o,
          onClick: c
        })
      }));
    }

    function g(e) {
      return n.createElement(d, null, n.createElement(y, {
        onClick: function onClick() {
          var t = e.sources,
              l = e.chartUndoModel;
          l.restoreLineToolsFactoryDefaults(t);
        },
        name: r.t(null, void 0, l(67049))
      }));
    }

    function b(e) {
      return n.createElement(g, _objectSpread({}, e));
    }
  },
  37289: function _(e, t, l) {
    "use strict";

    l.d(t, {
      PropertiesEditorTab: function PropertiesEditorTab() {
        return c;
      }
    });
    var n = l(50959),
        r = l(66849);
    var o = {
      "Elliott Impulse Wave (12345)Degree": "normal",
      "Elliott Triangle Wave (ABCDE)Degree": "normal",
      "Elliott Triple Combo Wave (WXYXZ)Degree": "normal",
      "Elliott Correction Wave (ABC)Degree": "normal",
      "Elliott Double Combo Wave (WXY)Degree": "normal",
      BarsPatternMode: "normal",
      StudyInputSource: "normal"
    },
        i = {
      TextText: "big",
      AnchoredTextText: "big",
      NoteText: "big",
      AnchoredNoteText: "big",
      CalloutText: "big",
      BalloonText: "big"
    };
    var s = l(11062),
        a = l(15650);

    function c(e) {
      var t = e.page,
          l = e.pageRef,
          c = e.tableKey;
      return n.createElement(r.ControlCustomHeightContext.Provider, {
        value: i
      }, n.createElement(r.ControlCustomWidthContext.Provider, {
        value: o
      }, t && n.createElement(s.PropertyTable, {
        reference: l,
        key: c
      }, t.definitions.value().map(function (e) {
        return n.createElement(a.Section, {
          key: e.id,
          definition: e
        });
      }))));
    }
  },
  51613: function _(e, t, l) {
    "use strict";

    l.d(t, {
      PopupMenuSeparator: function PopupMenuSeparator() {
        return s;
      }
    });
    var n = l(50959),
        r = l(97754),
        o = l.n(r),
        i = l(92910);

    function s(e) {
      var _e$size = e.size,
          t = _e$size === void 0 ? "normal" : _e$size,
          l = e.className,
          _e$ariaHidden = e.ariaHidden,
          r = _e$ariaHidden === void 0 ? !1 : _e$ariaHidden;
      return n.createElement("div", {
        className: o()(i.separator, "small" === t && i.small, "normal" === t && i.normal, "large" === t && i.large, l),
        role: "separator",
        "aria-hidden": r
      });
    }
  },
  40670: function _(e) {
    e.exports = {
      wrapper: "wrapper-bl9AR3Gv",
      hovered: "hovered-bl9AR3Gv",
      withIcon: "withIcon-bl9AR3Gv",
      labelRow: "labelRow-bl9AR3Gv",
      label: "label-bl9AR3Gv",
      switchWrap: "switchWrap-bl9AR3Gv",
      icon: "icon-bl9AR3Gv",
      labelHint: "labelHint-bl9AR3Gv",
      labelOn: "labelOn-bl9AR3Gv"
    };
  },
  62433: function _(e) {
    e.exports = {
      smallStyleControl: "smallStyleControl-l5f4IL9k",
      additionalSelect: "additionalSelect-l5f4IL9k",
      childRowContainer: "childRowContainer-l5f4IL9k",
      defaultSelect: "defaultSelect-l5f4IL9k",
      defaultSelectItem: "defaultSelectItem-l5f4IL9k",
      block: "block-l5f4IL9k",
      group: "group-l5f4IL9k",
      wrapGroup: "wrapGroup-l5f4IL9k",
      textMarkGraphicBlock: "textMarkGraphicBlock-l5f4IL9k",
      textMarkGraphicWrapGroup: "textMarkGraphicWrapGroup-l5f4IL9k",
      transparency: "transparency-l5f4IL9k",
      color: "color-l5f4IL9k"
    };
  },
  69297: function _(e, t, l) {
    "use strict";

    l.d(t, {
      DEFAULT_MENU_ITEM_SWITCHER_THEME: function DEFAULT_MENU_ITEM_SWITCHER_THEME() {
        return m;
      },
      MenuItemSwitcher: function MenuItemSwitcher() {
        return v;
      }
    });
    var n = l(50959),
        r = l(97754),
        o = l.n(r),
        i = l(17946),
        s = l(26574),
        a = l.n(s);

    function c(e) {
      var t = (0, n.useContext)(i.CustomBehaviourContext),
          l = e.className,
          _e$intent = e.intent,
          o = _e$intent === void 0 ? "default" : _e$intent,
          _e$size2 = e.size,
          s = _e$size2 === void 0 ? "small" : _e$size2,
          _e$enableActiveStateS = e.enableActiveStateStyles,
          c = _e$enableActiveStateS === void 0 ? t.enableActiveStateStyles : _e$enableActiveStateS;
      return r(l, a().switcher, a()["size-".concat(s)], a()["intent-".concat(o)], !c && a()["disable-active-state-styles"]);
    }

    function p(e) {
      var t;

      var l = e.reference,
          r = e.size,
          o = e.intent,
          i = e.role,
          s = e["aria-checked"],
          p = e.checked,
          d = e.defaultChecked,
          u = e.onKeyDown,
          h = _objectWithoutProperties(e, ["reference", "size", "intent", "role", "aria-checked", "checked", "defaultChecked", "onKeyDown"]),
          m = (0, n.useCallback)(function (e) {
        13 === e.keyCode && e.target.click(), u && u(e);
      }, [u]);

      return n.createElement("span", {
        className: c(e)
      }, n.createElement("input", _objectSpread({}, h, {
        type: "checkbox",
        className: a().input,
        ref: l,
        role: null != i ? i : "switch",
        "aria-checked": null !== (t = null != s ? s : p) && void 0 !== t ? t : d,
        checked: p,
        defaultChecked: d,
        onKeyDown: m
      })), n.createElement("span", {
        className: a()["thumb-wrapper"]
      }, n.createElement("span", {
        className: a().track
      }), n.createElement("span", {
        className: a().thumb
      })));
    }

    var d = l(9745),
        u = l(90186),
        h = l(40670);
    var m = h;

    function v(e) {
      var t = e.className,
          l = e.checked,
          r = e.id,
          i = e.label,
          s = e.labelDescription,
          a = e.value,
          c = e.preventLabelHighlight,
          m = e.reference,
          v = e.switchReference,
          _e$theme = e.theme,
          y = _e$theme === void 0 ? h : _e$theme,
          g = e.disabled,
          b = e.icon,
          w = o()(y.label, l && !c && y.labelOn),
          f = o()(t, y.wrapper, l && y.wrapperWithOnLabel, s && y.wrapperWithDescription);
      return n.createElement("label", {
        className: o()(f, b && y.withIcon),
        htmlFor: r,
        ref: m
      }, void 0 !== b && n.createElement(d.Icon, {
        className: y.icon,
        icon: b
      }), n.createElement("div", {
        className: y.labelRow
      }, n.createElement("div", {
        className: w
      }, i), s && n.createElement("div", {
        className: y.labelHint
      }, s)), n.createElement("div", {
        className: h.switchWrap
      }, n.createElement(p, _objectSpread({
        disabled: g,
        className: y["switch"],
        reference: v,
        checked: l,
        onChange: function onChange(t) {
          var l = t.target.checked;
          void 0 !== e.onChange && e.onChange(l);
        },
        value: a,
        tabIndex: -1,
        id: r,
        role: e.switchRole
      }, (0, u.filterDataProps)(e)))));
    }
  },
  73955: function _(e, t, l) {
    "use strict";

    l.r(t), l.d(t, {
      createPropertyPage: function createPropertyPage() {
        return r;
      }
    });
    var n = l(97145);

    function r(e, t, l) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var o;
      var i = {
        id: t,
        title: l,
        definitions: new n.WatchedValue(e.definitions),
        visible: null !== (o = e.visible) && void 0 !== o ? o : new n.WatchedValue(!0).readonly()
      };
      return null !== r && (i.icon = r), i;
    }
  },
  97456: function _(e, t, l) {
    "use strict";

    l.r(t), l.d(t, {
      getIntervalsVisibilitiesPropertiesDefinitions: function getIntervalsVisibilitiesPropertiesDefinitions() {
        return ae;
      },
      getSelectionIntervalsVisibilitiesPropertiesDefinition: function getSelectionIntervalsVisibilitiesPropertiesDefinition() {
        return ce;
      }
    });
    var n = l(44352),
        r = l(36298),
        o = l(14483),
        i = l(46141),
        s = l(97145),
        a = l(94025),
        c = l(68806),
        p = l(62513);

    var d = new r.TranslatedString("change {title} visibility on ticks", n.t(null, void 0, l(30810))),
        u = new r.TranslatedString("change {title} visibility on seconds", n.t(null, void 0, l(46948))),
        h = new r.TranslatedString("change {title} seconds from", n.t(null, void 0, l(2822))),
        m = new r.TranslatedString("change {title} seconds to", n.t(null, void 0, l(66161))),
        v = new r.TranslatedString("change {title} visibility on minutes", n.t(null, void 0, l(64370))),
        y = new r.TranslatedString("change {title} minutes from", n.t(null, void 0, l(15106))),
        g = new r.TranslatedString("change {title} minutes to", n.t(null, void 0, l(91633))),
        b = new r.TranslatedString("change {title} visibility on hours", n.t(null, void 0, l(68971))),
        w = new r.TranslatedString("change {title} hours from", n.t(null, void 0, l(35388))),
        f = new r.TranslatedString("change {title} hours to", n.t(null, void 0, l(78586))),
        C = new r.TranslatedString("change {title} visibility on days", n.t(null, void 0, l(29088))),
        P = new r.TranslatedString("change {title} days from", n.t(null, void 0, l(41377))),
        S = new r.TranslatedString("change {title} days to", n.t(null, void 0, l(13355))),
        E = new r.TranslatedString("change {title} visibility on weeks", n.t(null, void 0, l(24941))),
        T = new r.TranslatedString("change {title} weeks from", n.t(null, void 0, l(21339))),
        k = new r.TranslatedString("change {title} weeks to", n.t(null, void 0, l(68643))),
        _ = new r.TranslatedString("change {title} visibility on months", n.t(null, void 0, l(6659))),
        x = new r.TranslatedString("change {title} months from", n.t(null, void 0, l(59635))),
        I = new r.TranslatedString("change {title} months to", n.t(null, void 0, l(74266))),
        L = (new r.TranslatedString("change {title} visibility on ranges", n.t(null, void 0, l(29091))), n.t(null, void 0, l(30973))),
        D = n.t(null, void 0, l(71129)),
        V = n.t(null, void 0, l(28134)),
        R = n.t(null, void 0, l(63099)),
        M = n.t(null, void 0, l(22192)),
        B = n.t(null, void 0, l(21594)),
        N = n.t(null, void 0, l(95543)),
        W = (n.t(null, void 0, l(86672)), new r.TranslatedString("ticks", n.t(null, void 0, l(59523)))),
        A = new r.TranslatedString("seconds", n.t(null, void 0, l(32925))),
        z = new r.TranslatedString("seconds from", n.t(null, void 0, l(6049))),
        H = new r.TranslatedString("seconds to", n.t(null, void 0, l(39017))),
        F = new r.TranslatedString("minutes", n.t(null, void 0, l(16465))),
        G = new r.TranslatedString("minutes from", n.t(null, void 0, l(25586))),
        U = new r.TranslatedString("minutes to", n.t(null, void 0, l(72317))),
        O = new r.TranslatedString("hours", n.t(null, void 0, l(3143))),
        j = new r.TranslatedString("hours from", n.t(null, void 0, l(84775))),
        Q = new r.TranslatedString("hours to", n.t(null, void 0, l(11255))),
        Z = new r.TranslatedString("days", n.t(null, void 0, l(82211))),
        q = new r.TranslatedString("days from", n.t(null, void 0, l(14077))),
        K = new r.TranslatedString("days to", n.t(null, void 0, l(33486))),
        $ = new r.TranslatedString("weeks", n.t(null, void 0, l(93016))),
        X = new r.TranslatedString("weeks from", n.t(null, void 0, l(32002))),
        Y = new r.TranslatedString("weeks to", n.t(null, void 0, l(28091))),
        J = new r.TranslatedString("months", n.t(null, void 0, l(58964))),
        ee = new r.TranslatedString("months from", n.t(null, void 0, l(71770))),
        te = new r.TranslatedString("months to", n.t(null, void 0, l(37179))),
        le = (new r.TranslatedString("ranges", n.t(null, void 0, l(13604))), [1, 59]),
        ne = [1, 59],
        re = [1, 24],
        oe = [1, 366],
        ie = [1, 52],
        se = [1, 12];

    function ae(e, t, l) {
      var n = [];

      if (o.enabled("tick_resolution")) {
        var _r2 = (0, i.createCheckablePropertyDefinition)({
          checked: (0, i.convertToDefinitionProperty)(e, t.ticks, d.format({
            title: l
          }))
        }, {
          id: "IntervalsVisibilitiesTicks",
          title: L
        });

        n.push(_r2);
      }

      if ((0, a.isSecondsEnabled)()) {
        var _r3 = (0, i.createRangePropertyDefinition)({
          checked: (0, i.convertToDefinitionProperty)(e, t.seconds, u.format({
            title: l
          })),
          from: (0, i.convertToDefinitionProperty)(e, t.secondsFrom, h.format({
            title: l
          })),
          to: (0, i.convertToDefinitionProperty)(e, t.secondsTo, m.format({
            title: l
          }))
        }, {
          id: "IntervalsVisibilitiesSecond",
          title: D,
          min: new s.WatchedValue(le[0]),
          max: new s.WatchedValue(le[1])
        });

        n.push(_r3);
      }

      var r = (0, i.createRangePropertyDefinition)({
        checked: (0, i.convertToDefinitionProperty)(e, t.minutes, v.format({
          title: l
        })),
        from: (0, i.convertToDefinitionProperty)(e, t.minutesFrom, y.format({
          title: l
        })),
        to: (0, i.convertToDefinitionProperty)(e, t.minutesTo, g.format({
          title: l
        }))
      }, {
        id: "IntervalsVisibilitiesMinutes",
        title: V,
        min: new s.WatchedValue(ne[0]),
        max: new s.WatchedValue(ne[1])
      }),
          c = (0, i.createRangePropertyDefinition)({
        checked: (0, i.convertToDefinitionProperty)(e, t.hours, b.format({
          title: l
        })),
        from: (0, i.convertToDefinitionProperty)(e, t.hoursFrom, w.format({
          title: l
        })),
        to: (0, i.convertToDefinitionProperty)(e, t.hoursTo, f.format({
          title: l
        }))
      }, {
        id: "IntervalsVisibilitiesHours",
        title: R,
        min: new s.WatchedValue(re[0]),
        max: new s.WatchedValue(re[1])
      }),
          p = (0, i.createRangePropertyDefinition)({
        checked: (0, i.convertToDefinitionProperty)(e, t.days, C.format({
          title: l
        })),
        from: (0, i.convertToDefinitionProperty)(e, t.daysFrom, P.format({
          title: l
        })),
        to: (0, i.convertToDefinitionProperty)(e, t.daysTo, S.format({
          title: l
        }))
      }, {
        id: "IntervalsVisibilitiesDays",
        title: M,
        min: new s.WatchedValue(oe[0]),
        max: new s.WatchedValue(oe[1])
      });
      n.push(r, c, p);
      var W = (0, i.createRangePropertyDefinition)({
        checked: (0, i.convertToDefinitionProperty)(e, t.weeks, E.format({
          title: l
        })),
        from: (0, i.convertToDefinitionProperty)(e, t.weeksFrom, T.format({
          title: l
        })),
        to: (0, i.convertToDefinitionProperty)(e, t.weeksTo, k.format({
          title: l
        }))
      }, {
        id: "IntervalsVisibilitiesWeeks",
        title: B,
        min: new s.WatchedValue(ie[0]),
        max: new s.WatchedValue(ie[1])
      }),
          A = (0, i.createRangePropertyDefinition)({
        checked: (0, i.convertToDefinitionProperty)(e, t.months, _.format({
          title: l
        })),
        from: (0, i.convertToDefinitionProperty)(e, t.monthsFrom, x.format({
          title: l
        })),
        to: (0, i.convertToDefinitionProperty)(e, t.monthsTo, I.format({
          title: l
        }))
      }, {
        id: "IntervalsVisibilitiesMonths",
        title: N,
        min: new s.WatchedValue(se[0]),
        max: new s.WatchedValue(se[1])
      });
      return n.push(W, A), {
        definitions: n
      };
    }

    function ce(e, t) {
      var l = [];

      if (o.enabled("tick_resolution")) {
        var _n4 = (0, i.createCheckablePropertyDefinition)({
          checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.ticks), W, t)
        }, {
          id: "IntervalsVisibilitiesTicks",
          title: L
        });

        l.push(_n4);
      }

      if ((0, a.isSecondsEnabled)()) {
        var _n5 = (0, i.createRangePropertyDefinition)({
          checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.seconds), A, t),
          from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.secondsFrom), z, t),
          to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.secondsTo), H, t)
        }, {
          id: "IntervalsVisibilitiesSecond",
          title: D,
          min: new s.WatchedValue(le[0]),
          max: new s.WatchedValue(le[1])
        });

        l.push(_n5);
      }

      var n = (0, i.createRangePropertyDefinition)({
        checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.minutes), F, t),
        from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.minutesFrom), G, t),
        to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.minutesTo), U, t)
      }, {
        id: "IntervalsVisibilitiesMinutes",
        title: V,
        min: new s.WatchedValue(ne[0]),
        max: new s.WatchedValue(ne[1])
      }),
          r = (0, i.createRangePropertyDefinition)({
        checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.hours), O, t),
        from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.hoursFrom), j, t),
        to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.hoursTo), Q, t)
      }, {
        id: "IntervalsVisibilitiesHours",
        title: R,
        min: new s.WatchedValue(re[0]),
        max: new s.WatchedValue(re[1])
      }),
          d = (0, i.createRangePropertyDefinition)({
        checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.days), Z, t),
        from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.daysFrom), q, t),
        to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.daysTo), K, t)
      }, {
        id: "IntervalsVisibilitiesDays",
        title: M,
        min: new s.WatchedValue(oe[0]),
        max: new s.WatchedValue(oe[1])
      });
      l.push(n, r, d);
      var u = (0, i.createRangePropertyDefinition)({
        checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.weeks), $, t),
        from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.weeksFrom), X, t),
        to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.weeksTo), Y, t)
      }, {
        id: "IntervalsVisibilitiesWeeks",
        title: B,
        min: new s.WatchedValue(ie[0]),
        max: new s.WatchedValue(ie[1])
      }),
          h = (0, i.createRangePropertyDefinition)({
        checked: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.months), J, t),
        from: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.monthsFrom), ee, t),
        to: new p.CollectiblePropertyUndoWrapper(new c.LineToolCollectedProperty(e.monthsTo), te, t)
      }, {
        id: "IntervalsVisibilitiesMonths",
        title: N,
        min: new s.WatchedValue(se[0]),
        max: new s.WatchedValue(se[1])
      });
      return l.push(u, h), {
        definitions: l
      };
    }
  },
  62513: function _(e, t, l) {
    "use strict";

    l.d(t, {
      CollectiblePropertyUndoWrapper: function CollectiblePropertyUndoWrapper() {
        return c;
      }
    });
    var n = l(50151),
        r = l(44352),
        o = l(36298),
        i = l(59452),
        s = l.n(i);
    var a = new o.TranslatedString("change {propertyName} property", r.t(null, void 0, l(18567)));

    var c =
    /*#__PURE__*/
    function (_s2) {
      _inherits(c, _s2);

      function c(e, t, l) {
        var _this27;

        _classCallCheck(this, c);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this)), _this27._isProcess = !1, _this27._listenersMappers = [], _this27._valueApplier = {
          applyValue: function applyValue(e, t) {
            _this27._propertyApplier.setProperty(e, t, a);
          }
        }, _this27._baseProperty = e, _this27._propertyApplier = l, _this27._propertyName = t;
        return _this27;
      }

      _createClass(c, [{
        key: "destroy",
        value: function destroy() {
          this._baseProperty.destroy(), _get(_getPrototypeOf(c.prototype), "destroy", this).call(this);
        }
      }, {
        key: "value",
        value: function value() {
          return this._baseProperty.value();
        }
      }, {
        key: "setValue",
        value: function setValue(e, t) {
          var _this28 = this;

          this._propertyApplier.beginUndoMacro(a.format({
            propertyName: this._propertyName
          })), this._isProcess = !0, this._baseProperty.setValue(e, void 0, this._valueApplier), this._isProcess = !1, this._propertyApplier.endUndoMacro(), this._listenersMappers.forEach(function (e) {
            e.method.call(e.obj, _this28);
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(e, t) {
          var _this29 = this;

          var l = function l() {
            _this29._isProcess || t.call(e, _this29);
          };

          this._listenersMappers.push({
            obj: e,
            method: t,
            callback: l
          }), this._baseProperty.subscribe(e, l);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, t) {
          var l;
          var r = (0, n.ensureDefined)(null === (l = this._listenersMappers.find(function (l) {
            return l.obj === e && l.method === t;
          })) || void 0 === l ? void 0 : l.callback);

          this._baseProperty.unsubscribe(e, r);
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e);
        }
      }]);

      return c;
    }(s());
  },
  99970: function _(e, t, l) {
    "use strict";

    l.d(t, {
      StudyPlotVisibleProperty: function StudyPlotVisibleProperty() {
        return o;
      }
    });
    var n = l(19782),
        r = l(57898);

    var o =
    /*#__PURE__*/
    function () {
      function o(e) {
        _classCallCheck(this, o);

        this._subscribers = new r.Delegate(), this._displayProperty = e, this._displayProperty.subscribe(this, this._displayPropertyValueChanged);
      }

      _createClass(o, [{
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

      return o;
    }();
  },
  69151: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 21l7.424-6.114a.5.5 0 0 0-.318-.886H18.5V7h-9v7H6.894a.5.5 0 0 0-.318.886L14 21z"/></svg>';
  },
  67211: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 7l7.424 6.114a.5.5 0 0 1-.318.886H18.5v7h-9v-7H6.894a.5.5 0 0 1-.318-.886L14 7z"/></svg>';
  },
  83786: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><circle stroke="currentColor" cx="14" cy="14" r="6.5"/></svg>';
  },
  50858: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 14.5h11M14.5 20V9"/></svg>';
  },
  13201: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14.354 6.646L14 6.293l-.354.353-7 7-.353.354.353.354 7 7 .354.353.354-.353 7-7 .353-.354-.353-.354-7-7z"/></svg>';
  },
  59058: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 22v-5.5m0 0v-8L12 7l4 2.5 3.5-1v8l-3.5 1-4-2.5-3.5 1.5z"/></svg>';
  },
  8537: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 8.5h-.5v9.707l.146.147 3 3 .354.353.354-.353 3-3 .146-.147V8.5H11z"/></svg>';
  },
  2309: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 18.5h-.5V8.793l.146-.147 3-3L14 5.293l.354.353 3 3 .146.147V18.5H11z"/></svg>';
  },
  78240: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 7.5h13v13h-13z"/></svg>';
  },
  41683: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 11.265l.478-.765H8.098l.478.765 5 8 .424.678.424-.678 5-8z"/></svg>';
  },
  6570: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 16.735l.478.765H8.098l.478-.765 5-8L14 8.057l.424.678 5 8z"/></svg>';
  },
  23223: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 9l11 11M9 20L20 9"/></svg>';
  },
  93976: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M13 11.5l-1.915-1.532a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82V18.5a1 1 0 0 0 1 1H13m3.5-7l4.293-4.293c.63-.63 1.707-.184 1.707.707V18.5a1 1 0 0 1-1 1H16"/><path fill="currentColor" d="M14 6h1v2h-1zM14 11h1v2h-1zM14 16h1v2h-1zM14 21h1v2h-1z"/></svg>';
  },
  91512: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13.52v4.98a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.914c0-.89-1.077-1.337-1.707-.707l-4.66 4.66a1 1 0 0 1-1.332.074l-3.716-2.973a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82z"/></svg>';
  },
  21579: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></svg>';
  },
  72914: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 12.5v8h3v-8h-3zM12.5 7.5v13h3v-13h-3zM18.5 15.5v5h3v-5h-3z"/></svg>';
  },
  98450: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M17 8.5h7M20.5 12V5M10 19.5h7M13.5 23v-7M3 12.5h7M6.5 16V9"/></svg>';
  },
  18621: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4.5 20v-7m3 7V10m3 10V8m3 12V10m3 10v-8m3 8V10m3 10V8"/></svg>';
  },
  18819: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l5-5a1.414 1.414 0 0 1 2 0m11-1l-5 5a1.414 1.414 0 0 1-2 0"/><path fill="currentColor" d="M14 5h1v2h-1zM14 10h1v2h-1zM14 15h1v2h-1zM14 20h1v2h-1z"/></svg>';
  },
  94152: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
  },
  46464: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 3h1v2h-1V3Zm1 5h-1v2h1V8Zm-1 5h1v2h-1v-2Zm0 5h1v2h-1v-2Zm0 5h1v2h-1v-2ZM10 5h2V4H9v18H6v-5H5v6h5V5Zm11 16h1V7h-5v10h1V8h3v13Z"/></svg>';
  },
  96298: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9.8 2.7l.7-.7.7.7 2.1 2.1.2.2H18v9.5l.2.2 2.1 2.1.2.2H24v1h-3.5l-.2.2-2.1 2.1-.7.7-.7-.7-2.1-2.1-.7-.7.7-.7 2.1-2.1.2-.2V6h-3.5l-.2.2-2.1 2.1-.2.2V24H5.5v-1H10V8.5l-.2-.2-2.1-2.1-.7-.7.7-.7 2.1-2.1zM8.4 5.5l2.09 2.09 2.09-2.09-2.09-2.09L8.41 5.5zm9.09 14.09l-2.09-2.09 2.09-2.09 2.09 2.09-2.09 2.09z"/></svg>';
  },
  14643: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 17v5.5h4v-18h4v12h4v-9h4V21"/></svg>';
  }
}]);