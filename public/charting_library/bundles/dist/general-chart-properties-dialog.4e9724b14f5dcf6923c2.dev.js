"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[7078], {
  37463: function _(e) {
    e.exports = {
      backButton: "backButton-yMMXpYEB"
    };
  },
  54829: function _(e) {
    e.exports = {
      wrapper: "wrapper-nGEmjtaX",
      container: "container-nGEmjtaX",
      tab: "tab-nGEmjtaX",
      active: "active-nGEmjtaX",
      title: "title-nGEmjtaX",
      icon: "icon-nGEmjtaX",
      withoutIcon: "withoutIcon-nGEmjtaX",
      titleText: "titleText-nGEmjtaX",
      nested: "nested-nGEmjtaX",
      isTablet: "isTablet-nGEmjtaX",
      isMobile: "isMobile-nGEmjtaX",
      accessible: "accessible-nGEmjtaX"
    };
  },
  62845: function _(e) {
    e.exports = {
      "tablet-normal-breakpoint": "screen and (max-width: 768px)",
      "tablet-small-breakpoint": "screen and (max-width: 430px)",
      withSidebar: "withSidebar-F0WBLDV5",
      content: "content-F0WBLDV5",
      tabContent: "tabContent-F0WBLDV5",
      applyToAllButton: "applyToAllButton-F0WBLDV5"
    };
  },
  12009: function _(e) {
    e.exports = {
      themesButtonText: "themesButtonText-w7kgghoW",
      themesButtonIcon: "themesButtonIcon-w7kgghoW",
      defaultsButtonText: "defaultsButtonText-w7kgghoW",
      defaultsButtonItem: "defaultsButtonItem-w7kgghoW",
      remove: "remove-w7kgghoW"
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
  22265: function _(e, t, a) {
    "use strict";

    a.d(t, {
      DialogSidebarContainer: function DialogSidebarContainer() {
        return m;
      },
      DialogSidebarItem: function DialogSidebarItem() {
        return h;
      },
      DialogSidebarWrapper: function DialogSidebarWrapper() {
        return d;
      }
    });
    var i = a(50959),
        n = a(97754),
        l = a.n(n),
        s = a(9745),
        r = a(65631),
        o = a(68648),
        c = a(54829);

    function m(e) {
      var t = e.mode,
          a = e.className,
          n = _objectWithoutProperties(e, ["mode", "className"]),
          _ref = (0, r.getSidebarMode)(t),
          s = _ref.isMobile,
          o = _ref.isTablet,
          m = l()(c.container, o && c.isTablet, s && c.isMobile, a);

      return i.createElement("div", _objectSpread({}, n, {
        className: m,
        "data-role": "dialog-sidebar"
      }));
    }

    function d(e) {
      return i.createElement("div", _objectSpread({
        className: c.wrapper
      }, e));
    }

    function h(e) {
      var t = e.mode,
          a = e.title,
          n = e.icon,
          m = e.isActive,
          d = e.onClick,
          _e$tag = e.tag,
          h = _e$tag === void 0 ? "div" : _e$tag,
          u = e.reference,
          p = e.className,
          g = _objectWithoutProperties(e, ["mode", "title", "icon", "isActive", "onClick", "tag", "reference", "className"]),
          _ref2 = (0, r.getSidebarMode)(t),
          _ = _ref2.isMobile,
          b = _ref2.isTablet,
          v = m ? null == n ? void 0 : n.active : null == n ? void 0 : n["default"];

      return i.createElement(h, _objectSpread({}, g, {
        ref: u,
        className: l()(c.tab, b && c.isTablet, _ && c.isMobile, m && c.active, p),
        onClick: d
      }), n && i.createElement(s.Icon, {
        className: c.icon,
        icon: v
      }), !b && i.createElement("span", {
        className: l()(c.title, !n && c.withoutIcon)
      }, i.createElement("span", {
        className: c.titleText
      }, a), _ && i.createElement(s.Icon, {
        className: c.nested,
        icon: o
      })));
    }
  },
  65631: function _(e, t, a) {
    "use strict";

    function i(e) {
      return {
        isMobile: "mobile" === e,
        isTablet: "tablet" === e
      };
    }

    a.d(t, {
      getSidebarMode: function getSidebarMode() {
        return i;
      }
    });
  },
  56080: function _(e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      GeneralChartPropertiesDialogRenderer: function GeneralChartPropertiesDialogRenderer() {
        return me;
      }
    });

    var i = a(44352),
        n = a(50959),
        l = a(962),
        s = a(94720),
        r = a(15650),
        o = a(50182),
        c = a(66849),
        m = a(11062),
        d = a(56840),
        h = a.n(d),
        u = a(75531),
        p = a(90692),
        g = a(9745),
        _ = a(14483),
        b = a(81351),
        v = a(51613),
        f = a(5286),
        y = (a(42053), a(3615));

    var k = i.t(null, void 0, a(40837));
    var T = a(60508),
        S = a(53180),
        C = a(74628),
        E = a(51768),
        A = a(70412),
        L = a(32563),
        I = a(12009);

    function z(e) {
      var t = e.themeName,
          a = e.chartWidgetCollection,
          i = e.onRemove,
          l = e.manager,
          _ref3 = (0, A.useHover)(),
          _ref4 = _slicedToArray(_ref3, 2),
          s = _ref4[0],
          r = _ref4[1],
          o = n.useCallback(function () {
        return function (e, t, a) {
          (0, y.showConfirm)({
            text: k.format({
              name: e
            }),
            onConfirm: function onConfirm(_ref5) {
              var a = _ref5.dialogClose;
              (0, f.removeTheme)(e), t && t(e), a();
            }
          }, a);
        }(t, i, l);
      }, [t, i, l]),
          c = n.useCallback(function () {
        (0, f.loadTheme)(a, {
          themeName: t,
          standardTheme: !1
        }).then(function () {
          (0, E.trackEvent)("GUI", "Switch to custom theme");
        });
      }, [t, a]);

      return n.createElement("div", _objectSpread({}, r), n.createElement(b.AccessibleMenuItem, {
        "data-series-theme-item-theme-name": t,
        className: I.defaultsButtonItem,
        isActive: !1,
        label: t,
        onClick: c,
        toolbox: n.createElement(C.MenuRemoveButton, {
          className: I.remove,
          hidden: !L.mobiletouch && !s,
          onClick: o
        })
      }));
    }

    var x = a(95276),
        D = a(81261),
        M = a(44996);

    var N = i.t(null, void 0, a(19611)),
        B = i.t(null, void 0, a(73169)),
        w = (0, S.appendEllipsis)(i.t(null, void 0, a(9908))),
        P = i.t(null, void 0, a(75819)),
        j = _.enabled("chart_template_storage");

    var W =
    /*#__PURE__*/
    function (_n$PureComponent) {
      _inherits(W, _n$PureComponent);

      function W(e) {
        var _this;

        _classCallCheck(this, W);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(W).call(this, e)), _this._manager = null, _this._reference = n.createRef(), _this._handleApplyDefaults = function () {
          var _this$props = _this.props,
              e = _this$props.model,
              t = _this$props.chartWidgetCollection;
          e.restorePreferences();
          var a = (0, f.getCurrentTheme)().name;
          (0, f.loadTheme)(t, {
            themeName: a,
            standardTheme: !0,
            applyOverrides: !0,
            onlyActiveChart: !0
          });
        }, _this._handleSaveAs = function () {
          if (j) {
            var _e2 = _this.props.model;
            window.runOrSignIn(function () {
              return function _callee(e, t, i) {
                var _ref6, _ref7, n, l;

                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return regeneratorRuntime.awrap(Promise.all([a.e(7648).then(a.bind(a, 57351)), (0, f.getThemeNames)()]));

                      case 2:
                        _ref6 = _context.sent;
                        _ref7 = _slicedToArray(_ref6, 2);
                        n = _ref7[0];
                        l = _ref7[1];
                        n.showThemeSaveDialog(e, t, l, i);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }(_e2.model().theme(), _this._syncThemeList, _this._handleRenameClose);
            }, {
              source: "Save theme in chart properties"
            });
          }
        }, _this._handleRemoveTheme = function (e) {
          _this.setState({
            themes: _this.state.themes.filter(function (t) {
              return t !== e;
            })
          });
        }, _this._syncThemeList = function () {
          j && (0, f.getThemeNames)().then(function (e) {
            _this.setState({
              themes: e
            });
          });
        }, _this._handleListboxFocus = function (e) {
          e.target instanceof HTMLElement && (0, D.handleAccessibleMenuFocus)(e, _this._reference);
        }, _this._handleRenameClose = function () {
          var e;
          null === (e = _this._reference.current) || void 0 === e || e.focus();
        }, _this.state = {
          themes: []
        }, _this._syncThemeList();
        return _this;
      }

      _createClass(W, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return n.createElement(T.SlotContext.Consumer, null, function (e) {
            return _this2._manager = e, n.createElement(p.MatchMedia, {
              rule: "screen and (max-width: 768px)"
            }, function (e) {
              return n.createElement(x.ControlDisclosure, {
                id: "series-theme-manager",
                className: !e && I.themesButtonText,
                hideArrowButton: e,
                "data-name": "theme-select",
                ref: _this2._reference,
                buttonChildren: _this2._getPlaceHolderItem(e),
                onListboxFocus: _this2._handleListboxFocus,
                onListboxKeyDown: D.handleAccessibleMenuKeyDown
              }, _this2._getThemeItems(e));
            });
          });
        }
      }, {
        key: "_getPlaceHolderItem",
        value: function _getPlaceHolderItem(e) {
          return e ? n.createElement(g.Icon, {
            className: I.themesButtonIcon,
            icon: M
          }) : N;
        }
      }, {
        key: "_getThemeItems",
        value: function _getThemeItems(e) {
          var _this3 = this;

          var _this$props2 = this.props,
              t = _this$props2.isApplyToAllVisible,
              a = _this$props2.chartWidgetCollection,
              i = _this$props2.applyToAllCallback,
              l = this.state.themes;
          return n.createElement(n.Fragment, null, e && t && n.createElement(b.AccessibleMenuItem, {
            className: I.defaultsButtonItem,
            isActive: !1,
            label: P,
            onClick: i
          }), n.createElement(b.AccessibleMenuItem, {
            "data-name": "series-theme-manager-apply-defaults",
            className: I.defaultsButtonItem,
            isActive: !1,
            label: B,
            onClick: this._handleApplyDefaults
          }), j && n.createElement(b.AccessibleMenuItem, {
            "data-name": "series-theme-manager-save-as",
            className: I.defaultsButtonItem,
            isActive: !1,
            label: w,
            onClick: this._handleSaveAs
          }), l.length > 0 && n.createElement(n.Fragment, null, n.createElement(v.PopupMenuSeparator, {
            key: "separator"
          }), l.map(function (e) {
            return n.createElement(z, {
              key: e,
              themeName: e,
              onRemove: _this3._handleRemoveTheme,
              chartWidgetCollection: a,
              manager: _this3._manager
            });
          })));
        }
      }]);

      return W;
    }(n.PureComponent);

    var H = a(59064),
        U = a(71953),
        R = a(24437),
        V = a(97754),
        Y = a.n(V),
        F = a(50238),
        G = a(16838),
        O = a(54079),
        q = a(22265),
        K = a(65631),
        X = a(54829);

    function Z(e) {
      var _ref8 = (0, F.useRovingTabindexElement)(null),
          _ref9 = _slicedToArray(_ref8, 2),
          t = _ref9[0],
          a = _ref9[1];

      return n.createElement(q.DialogSidebarItem, _objectSpread({}, e, {
        className: G.PLATFORM_ACCESSIBILITY_ENABLED ? X.accessible : void 0,
        tag: G.PLATFORM_ACCESSIBILITY_ENABLED ? "button" : "div",
        reference: t,
        tabIndex: a
      }));
    }

    function J(e) {
      if (!G.PLATFORM_ACCESSIBILITY_ENABLED) return n.createElement(q.DialogSidebarContainer, _objectSpread({}, e));

      var t = e.mode,
          a = e.className,
          i = _objectWithoutProperties(e, ["mode", "className"]),
          _ref10 = (0, K.getSidebarMode)(t),
          l = _ref10.isMobile,
          s = _ref10.isTablet,
          r = Y()(X.container, s && X.isTablet, l && X.isMobile, a);

      return n.createElement(O.Toolbar, _objectSpread({}, i, {
        className: r,
        orientation: "vertical",
        blurOnEscKeydown: !1,
        blurOnClick: !1,
        "data-role": "dialog-sidebar"
      }));
    }

    var Q = a(86656);
    var $ = {
      areaSymbolMinTick: "normal",
      areaSymbolTimezone: "normal",
      barSymbolMinTick: "normal",
      barSymbolTimezone: "normal",
      baselineSymbolMinTick: "normal",
      baselineSymbolTimezone: "normal",
      candleSymbolMinTick: "normal",
      candleSymbolTimezone: "normal",
      dateFormat: "normal",
      haSymbolMinTick: "normal",
      haSymbolTimezone: "normal",
      hiloSymbolMinTick: "normal",
      hiloSymbolTimezone: "normal",
      hollowCandleSymbolMinTick: "normal",
      hollowCandleSymbolTimezone: "normal",
      kagiAtrLength: "normal",
      kagiReversalAmount: "normal",
      kagiStyle: "normal",
      kagiSymbolMinTick: "normal",
      kagiSymbolTimezone: "normal",
      lineSymbolMinTick: "normal",
      lineSymbolTimezone: "normal",
      sessionId: "normal",
      lockScale: "normal",
      mainSeriesSymbolAreaPriceSource: "normal",
      mainSeriesSymbolBaseLevelPercentage: "normal",
      mainSeriesSymbolBaseLinePriceSource: "normal",
      mainSeriesSymbolLinePriceSource: "normal",
      mainSeriesSymbolStyleType: "normal",
      navButtons: "big",
      paneButtons: "big",
      scalesCurrencyUnit: "big",
      autoLogButtonsVisibility: "big",
      pbLb: "normal",
      pbSymbolMinTick: "normal",
      pbSymbolTimezone: "normal",
      pnfAtrLength: "normal",
      pnfBoxSize: "normal",
      pnfReversalAmount: "normal",
      pnfSources: "normal",
      pnfStyle: "normal",
      pnfSymbolMinTick: "normal",
      pnfSymbolTimezone: "normal",
      rangeSymbolMinTick: "normal",
      rangeSymbolTimezone: "normal",
      renkoAtrLength: "normal",
      renkoBoxSize: "normal",
      renkoStyle: "normal",
      renkoSymbolMinTick: "normal",
      renkoSymbolTimezone: "normal",
      scalesPlacement: "normal",
      symbolLastValueLabel: "big",
      symbolTextSource: "normal"
    };
    var ee = a(48199),
        te = a(37463);

    function ae(e) {
      return n.createElement(ee.BackButton, _objectSpread({
        className: te.backButton,
        size: "medium",
        "aria-label": i.t(null, {
          context: "input"
        }, a(16936)),
        preservePaddings: !0
      }, e));
    }

    var ie = a(62845);
    var ne = "properties_dialog.last_page_id";

    var le =
    /*#__PURE__*/
    function (_n$PureComponent2) {
      _inherits(le, _n$PureComponent2);

      function le(e) {
        var _this4;

        _classCallCheck(this, le);

        var t;
        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(le).call(this, e)), _this4._renderChildren = function (_ref11) {
          var e = _ref11.requestResize,
              t = _ref11.isSmallWidth;
          return _this4._requestResize = e, n.createElement("div", {
            className: ie.content
          }, _this4._renderTabs(t), _this4._renderTabContent(t));
        }, _this4._renderApplyToAllButton = function () {
          return n.createElement(p.MatchMedia, {
            rule: R.DialogBreakpoints.TabletNormal
          }, function (e) {
            return _this4._renderApplyToAll(e);
          });
        }, _this4._renderFooterLeft = function () {
          var _this4$props = _this4.props,
              e = _this4$props.model,
              t = _this4$props.chartWidgetCollection,
              a = _this4.state.isApplyToAllVisible;
          return n.createElement(W, {
            model: e,
            isApplyToAllVisible: a,
            applyToAllCallback: _this4._handleApplyToAll,
            chartWidgetCollection: t
          });
        }, _this4._createTabClickHandler = function (e) {
          return function () {
            return _this4._selectPage(e);
          };
        }, _this4._selectPage = function (e, t) {
          var a = _this4.state.activePage;
          e !== a && (a && a.definitions.unsubscribe(_this4._onChangeActivePageDefinitions), null !== e && (t || h().setValue(ne, e.id), e.definitions.subscribe(_this4._onChangeActivePageDefinitions)), _this4.setState({
            activePage: e,
            tableKey: Date.now()
          }, function () {
            _this4._requestResize && _this4._requestResize();
          }));
        }, _this4._onChangeActivePageDefinitions = function () {
          U.logger.logNormal("Definition collection was updated"), _this4.setState({
            tableKey: Date.now()
          }, function () {
            _this4._requestResize && _this4._requestResize();
          });
        }, _this4._onTabVisibilityChanged = function () {
          var e = _this4.props.pages.filter(function (e) {
            return e.visible.value();
          });

          _this4.setState({
            visiblePages: e
          });

          var t = _this4.state.activePage;
          null === t || e.includes(t) || _this4._selectPage(0 === e.length ? null : e[0], !0);
        }, _this4._handleCancel = function () {
          _this4.props.onCancel(), _this4.props.onClose();
        }, _this4._handleSubmit = function () {
          _this4.props.onSubmit(), _this4.props.onClose();
        }, _this4._handleScroll = function () {
          H.globalCloseDelegate.fire();
        }, _this4._handleApplyToAll = function () {
          var _this4$props2 = _this4.props,
              e = _this4$props2.chartWidgetCollection,
              t = _this4$props2.model,
              a = _this4.state.isApplyToAllVisible;
          a && e.applyPreferencesToAllCharts(t);
        }, _this4._syncApplyToAllVisibility = function () {
          var e = _this4.props.chartWidgetCollection;

          _this4.setState({
            isApplyToAllVisible: (0, u.isMultipleLayout)(e.layout.value())
          });
        }, _this4._handleBackClick = function () {
          var e = _this4.state.activePage;
          e && e.definitions.unsubscribe(_this4._onChangeActivePageDefinitions), _this4.setState({
            activePage: null
          });
        }, _this4._handleForceFocus = function (e) {
          (0, G.updateTabIndexes)(), setTimeout(function () {
            var _ref12 = (0, G.queryTabbableElements)(e),
                _ref13 = _slicedToArray(_ref12, 1),
                t = _ref13[0];

            t && t.focus();
          });
        };
        var a = e.pages,
            i = e.activePageId,
            l = a.filter(function (e) {
          return e.visible.value();
        });
        var s = null !== (t = l.find(function (e) {
          return e.id === i;
        })) && void 0 !== t ? t : null;

        if (!s) {
          var _e3 = h().getValue(ne),
              _t = l.find(function (t) {
            return t.id === _e3;
          });

          s = _t || (l.length > 0 ? l[0] : null);
        }

        _this4.state = {
          activePage: s,
          visiblePages: l,
          isApplyToAllVisible: (0, u.isMultipleLayout)(e.chartWidgetCollection.layout.value()),
          tableKey: Date.now()
        };
        return _this4;
      }

      _createClass(le, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this5 = this;

          var _this$props3 = this.props,
              e = _this$props3.chartWidgetCollection,
              t = _this$props3.pages,
              a = this.state.activePage;
          e.layout.subscribe(this._syncApplyToAllVisibility), a && a.definitions.subscribe(this._onChangeActivePageDefinitions), t.forEach(function (e) {
            return e.visible.subscribe(_this5._onTabVisibilityChanged);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this6 = this;

          var _this$props4 = this.props,
              e = _this$props4.chartWidgetCollection,
              t = _this$props4.pages,
              a = this.state.activePage;
          a && a.definitions.unsubscribe(this._onChangeActivePageDefinitions), e.layout.unsubscribe(this._syncApplyToAllVisibility), t.forEach(function (e) {
            return e.visible.unsubscribe(_this6._onTabVisibilityChanged);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this7 = this;

          var _this$props5 = this.props,
              e = _this$props5.isOpened,
              t = _this$props5.onClose,
              l = _this$props5.shouldReturnFocus,
              s = this.state.activePage;
          return n.createElement(p.MatchMedia, {
            rule: R.DialogBreakpoints.TabletSmall
          }, function (r) {
            return n.createElement(o.AdaptiveConfirmDialog, {
              className: ie.withSidebar,
              dataName: "series-properties-dialog",
              onClose: t,
              isOpened: e,
              title: null !== s && r ? s.title : i.t(null, void 0, a(74207)),
              footerLeftRenderer: _this7._renderFooterLeft,
              additionalButtons: _this7._renderApplyToAllButton(),
              additionalHeaderElement: null !== s && r ? n.createElement(ae, {
                onClick: _this7._handleBackClick
              }) : void 0,
              onSubmit: _this7._handleSubmit,
              onForceFocus: G.PLATFORM_ACCESSIBILITY_ENABLED ? _this7._handleForceFocus : void 0,
              onCancel: _this7._handleCancel,
              render: _this7._renderChildren,
              submitOnEnterKey: !1,
              shouldReturnFocus: l
            });
          });
        }
      }, {
        key: "_renderTabContent",
        value: function _renderTabContent(e) {
          var t = this.props.pages,
              a = this._getCurrentPage(e);

          if (a) {
            var _e4 = t.find(function (e) {
              return e.id === a.id;
            }),
                _i2 = _e4 ? _e4.definitions.value() : [];

            return n.createElement(Q.TouchScrollContainer, {
              className: ie.tabContent,
              onScroll: this._handleScroll
            }, n.createElement(c.ControlCustomWidthContext.Provider, {
              value: $
            }, n.createElement(m.PropertyTable, {
              key: this.state.tableKey
            }, _i2.map(function (e) {
              return n.createElement(r.Section, {
                key: e.id,
                definition: e
              });
            }))));
          }

          return null;
        }
      }, {
        key: "_renderTabs",
        value: function _renderTabs(e) {
          var _this8 = this;

          var _this$state = this.state,
              t = _this$state.activePage,
              a = _this$state.visiblePages;
          if (t && e) return null;

          var i = this._getCurrentPage(e);

          return n.createElement(p.MatchMedia, {
            rule: R.DialogBreakpoints.TabletNormal
          }, function (e) {
            return n.createElement(p.MatchMedia, {
              rule: R.DialogBreakpoints.TabletSmall
            }, function (t) {
              var l = t ? "mobile" : e ? "tablet" : void 0;
              return n.createElement(J, {
                mode: l,
                onScroll: _this8._handleScroll
              }, a.map(function (e) {
                return n.createElement(Z, {
                  key: e.id,
                  mode: l,
                  "data-name": e.id,
                  title: e.title,
                  icon: e.icon,
                  onClick: _this8._createTabClickHandler(e),
                  isActive: i ? e.id === i.id : void 0
                });
              }));
            });
          });
        }
      }, {
        key: "_renderApplyToAll",
        value: function _renderApplyToAll(e) {
          var t = this.state.isApplyToAllVisible;
          return !e && t && n.createElement("span", {
            className: ie.applyToAllButton
          }, n.createElement(s.Button, {
            appearance: "stroke",
            onClick: this._handleApplyToAll
          }, i.t(null, void 0, a(75819))));
        }
      }, {
        key: "_getCurrentPage",
        value: function _getCurrentPage(e) {
          var t = this.props.pages,
              a = this.state.activePage;
          var i = null;
          return a ? i = a : !e && t.length && (i = t[0]), i;
        }
      }]);

      return le;
    }(n.PureComponent);

    var se = a(76422),
        re = a(85067),
        oe = a(37591);
    var ce = i.t(null, void 0, a(74207));

    var me =
    /*#__PURE__*/
    function (_re$DialogRenderer) {
      _inherits(me, _re$DialogRenderer);

      function me(e) {
        var _this9;

        _classCallCheck(this, me);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(me).call(this)), _this9._handleClose = function () {
          l.unmountComponentAtNode(_this9._container), _this9._setVisibility(!1), _this9._onClose && _this9._onClose();
        }, _this9._handleSubmit = function () {}, _this9._handleCancel = function () {
          _this9._model.undoToCheckpoint(_this9._checkpoint);
        }, _this9._propertyPages = e.propertyPages, _this9._model = e.model, _this9._activePageId = e.activePageId, _this9._onClose = e.onClose, _this9._chartWidgetCollection = e.chartWidgetCollection, _this9._checkpoint = _this9._ensureCheckpoint(e.undoCheckPoint);
        return _this9;
      }

      _createClass(me, [{
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
        value: function show(e) {
          l.render(n.createElement(le, {
            title: ce,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onClose: this._handleClose,
            onCancel: this._handleCancel,
            pages: this._propertyPages,
            model: this._model,
            activePageId: this._activePageId,
            chartWidgetCollection: this._chartWidgetCollection,
            shouldReturnFocus: null == e ? void 0 : e.shouldReturnFocus
          }), this._container), this._setVisibility(!0), se.emit("edit_object_dialog", {
            objectType: "mainSeries",
            scriptTitle: this._model.mainSeries().title(oe.TitleDisplayTarget.StatusLine)
          });
        }
      }, {
        key: "_ensureCheckpoint",
        value: function _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
      }]);

      return me;
    }(re.DialogRenderer);
  },
  51613: function _(e, t, a) {
    "use strict";

    a.d(t, {
      PopupMenuSeparator: function PopupMenuSeparator() {
        return r;
      }
    });
    var i = a(50959),
        n = a(97754),
        l = a.n(n),
        s = a(92910);

    function r(e) {
      var _e$size = e.size,
          t = _e$size === void 0 ? "normal" : _e$size,
          a = e.className,
          _e$ariaHidden = e.ariaHidden,
          n = _e$ariaHidden === void 0 ? !1 : _e$ariaHidden;
      return i.createElement("div", {
        className: l()(s.separator, "small" === t && s.small, "normal" === t && s.normal, "large" === t && s.large, a),
        role: "separator",
        "aria-hidden": n
      });
    }
  },
  47102: function _(e) {
    e.exports = {
      accessible: "accessible-NQERJsv9",
      active: "active-NQERJsv9"
    };
  },
  90826: function _(e) {
    e.exports = {
      button: "button-Y1TCZogJ",
      active: "active-Y1TCZogJ"
    };
  },
  81261: function _(e, t, a) {
    "use strict";

    a.d(t, {
      focusFirstMenuItem: function focusFirstMenuItem() {
        return c;
      },
      handleAccessibleMenuFocus: function handleAccessibleMenuFocus() {
        return r;
      },
      handleAccessibleMenuKeyDown: function handleAccessibleMenuKeyDown() {
        return o;
      },
      queryMenuElements: function queryMenuElements() {
        return h;
      }
    });
    var i = a(16838),
        n = a(71468),
        l = a(68335);
    var s = [37, 39, 38, 40];

    function r(e, t) {
      e.target && i.PLATFORM_ACCESSIBILITY_ENABLED && e.relatedTarget === t.current && c(e.target);
    }

    function o(e) {
      if (!i.PLATFORM_ACCESSIBILITY_ENABLED) return;
      if (e.defaultPrevented) return;
      var t = (0, l.hashFromEvent)(e);
      if (!s.includes(t)) return;
      var a = document.activeElement;
      if (!(document.activeElement instanceof HTMLElement)) return;
      var r = h(e.currentTarget).sort(i.navigationOrderComparator);
      if (0 === r.length) return;
      var o = document.activeElement.closest('[data-role="menuitem"]');
      if (!(o instanceof HTMLElement)) return;
      var c = r.indexOf(o);
      if (-1 === c) return;

      var p = u(o),
          g = p.indexOf(document.activeElement),
          _ = -1 !== g,
          b = function b(e) {
        a && (0, n.becomeSecondaryElement)(a), (0, n.becomeMainElement)(e), e.focus();
      };

      switch (t) {
        case 37:
          if (!p.length) return;
          e.preventDefault(), b(0 === g ? r[c] : _ ? m(p, g, -1) : p[p.length - 1]);
          break;

        case 39:
          if (!p.length) return;
          e.preventDefault(), g === p.length - 1 ? b(r[c]) : b(_ ? m(p, g, 1) : p[0]);
          break;

        case 38:
          {
            e.preventDefault();

            var _t2 = m(r, c, -1);

            if (_) {
              var _e5 = d(_t2, g);

              b(_e5 || _t2);
              break;
            }

            b(_t2);
            break;
          }

        case 40:
          {
            e.preventDefault();

            var _t3 = m(r, c, 1);

            if (_) {
              var _e6 = d(_t3, g);

              b(_e6 || _t3);
              break;
            }

            b(_t3);
          }
      }
    }

    function c(e) {
      var _h = h(e),
          _h2 = _slicedToArray(_h, 1),
          t = _h2[0];

      t && ((0, n.becomeMainElement)(t), t.focus());
    }

    function m(e, t, a) {
      return e[(t + e.length + a) % e.length];
    }

    function d(e, t) {
      var a = u(e);
      return a.length ? a[(t + a.length) % a.length] : null;
    }

    function h(e) {
      return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled], [aria-disabled])')).filter((0, i.createScopedVisibleElementFilter)(e));
    }

    function u(e) {
      return Array.from(e.querySelectorAll("[tabindex]:not([disabled], [aria-disabled])")).filter((0, i.createScopedVisibleElementFilter)(e));
    }
  },
  81351: function _(e, t, a) {
    "use strict";

    a.d(t, {
      AccessibleMenuItem: function AccessibleMenuItem() {
        return d;
      }
    });
    var i = a(50959),
        n = a(97754),
        l = a.n(n),
        s = a(3343),
        r = a(50238),
        o = a(16838),
        c = a(16396),
        m = a(47102);

    function d(e) {
      var t = e.className,
          a = _objectWithoutProperties(e, ["className"]),
          _ref14 = (0, r.useRovingTabindexElement)(null),
          _ref15 = _slicedToArray(_ref14, 2),
          n = _ref15[0],
          d = _ref15[1];

      return i.createElement(c.PopupMenuItem, _objectSpread({}, a, {
        className: l()(o.PLATFORM_ACCESSIBILITY_ENABLED && m.accessible, e.isActive && m.active, t),
        reference: n,
        tabIndex: d,
        onKeyDown: function onKeyDown(e) {
          if (!o.PLATFORM_ACCESSIBILITY_ENABLED || e.target !== e.currentTarget) return;
          var t = (0, s.hashFromEvent)(e);
          13 !== t && 32 !== t || (e.preventDefault(), n.current instanceof HTMLElement && n.current.click());
        },
        "data-role": o.PLATFORM_ACCESSIBILITY_ENABLED ? "menuitem" : void 0,
        "aria-disabled": o.PLATFORM_ACCESSIBILITY_ENABLED && e.isDisabled || void 0
      }));
    }
  },
  74628: function _(e, t, a) {
    "use strict";

    a.d(t, {
      MenuRemoveButton: function MenuRemoveButton() {
        return m;
      }
    });
    var i = a(50959),
        n = a(97754),
        l = a.n(n),
        s = a(50238),
        r = a(16838),
        o = a(96040),
        c = a(90826);

    function m(e) {
      var t = e.tooltip,
          a = e.onClick,
          n = _objectWithoutProperties(e, ["tooltip", "onClick"]),
          _ref16 = (0, s.useRovingTabindexElement)(null),
          _ref17 = _slicedToArray(_ref16, 2),
          m = _ref17[0],
          d = _ref17[1];

      return r.PLATFORM_ACCESSIBILITY_ENABLED ? i.createElement("button", {
        ref: m,
        tabIndex: d,
        onClick: a,
        className: l()(c.button, n.isActive && c.active),
        type: "button"
      }, i.createElement(o.RemoveButton, _objectSpread({
        "aria-label": t
      }, n, {
        "data-tooltip": t
      }))) : i.createElement(o.RemoveButton, _objectSpread({}, e, {
        "data-tooltip": t
      }));
    }
  },
  68648: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
  },
  60558: function _(e) {
    e.exports = {
      ar: ["الحيوانات والطبيعة"],
      ca_ES: ["animals i natura"],
      cs: "animals & nature",
      de: ["Tiere & Natur"],
      el: "animals & nature",
      en: "animals & nature",
      es: ["animales y naturaleza"],
      fa: "animals & nature",
      fr: ["animaux & nature"],
      he_IL: ["בעלי חיים וטבע"],
      hu_HU: "animals & nature",
      id_ID: ["hewan & alam"],
      it: ["animali e natura"],
      ja: ["動物 & 自然"],
      ko: ["애니멀 & 네이처"],
      ms_MY: ["haiwan & alam"],
      nl_NL: "animals & nature",
      pl: ["zwierzęta i natura"],
      pt: ["animais & natureza"],
      ro: "animals & nature",
      ru: ["животные и природа"],
      sv: ["djur & natur"],
      th: ["สัตว์และธรรมชาติ"],
      tr: ["hayvanlar & doğa"],
      vi: ["động vật và thiên nhiên"],
      zh: ["动物&自然"],
      zh_TW: ["動物&自然"]
    };
  },
  14232: function _(e) {
    e.exports = {
      ar: ["أنشطة"],
      ca_ES: ["activitat"],
      cs: "activity",
      de: ["Aktivität"],
      el: "activity",
      en: "activity",
      es: ["actividad"],
      fa: "activity",
      fr: ["activité"],
      he_IL: ["פעילות"],
      hu_HU: "activity",
      id_ID: ["aktivitas"],
      it: ["attività"],
      ja: ["アクティビティ"],
      ko: ["액티비티"],
      ms_MY: ["aktiviti"],
      nl_NL: "activity",
      pl: ["aktywność"],
      pt: ["atividade"],
      ro: "activity",
      ru: ["спорт и активность"],
      sv: ["aktiviteter"],
      th: ["กิจกรรม"],
      tr: ["aktivite"],
      vi: ["hoạt động"],
      zh: ["活动"],
      zh_TW: ["活動"]
    };
  },
  35305: function _(e) {
    e.exports = {
      ar: ["الطعام والشراب"],
      ca_ES: ["menjar i begudes"],
      cs: "food & drink",
      de: ["Essen & Trinken"],
      el: "food & drink",
      en: "food & drink",
      es: ["comida y bebida"],
      fa: "food & drink",
      fr: ["nourriture & boissons"],
      he_IL: ["אוכל ושתייה"],
      hu_HU: "food & drink",
      id_ID: ["makanan & minuman"],
      it: ["cibo e bevande"],
      ja: ["フード & ドリンク"],
      ko: ["푸드 & 드링크"],
      ms_MY: ["makanan & minuman"],
      nl_NL: "food & drink",
      pl: ["żywność i napoje"],
      pt: ["comida & bebida"],
      ro: "food & drink",
      ru: ["еда и напитки"],
      sv: ["mat & dryck"],
      th: ["อาหารเครื่องดื่ม"],
      tr: ["yiyecek & içecek"],
      vi: ["đồ ăn & đồ uống"],
      zh: ["食物&饮料"],
      zh_TW: ["食物&飲料"]
    };
  },
  49546: function _(e) {
    e.exports = {
      ar: ["أعلام"],
      ca_ES: ["banderes"],
      cs: "flags",
      de: ["Flaggen"],
      el: "flags",
      en: "flags",
      es: ["banderas"],
      fa: "flags",
      fr: ["drapeaux"],
      he_IL: ["דגלים"],
      hu_HU: "flags",
      id_ID: ["bendera"],
      it: ["bandiere"],
      ja: ["旗"],
      ko: ["플래그"],
      ms_MY: ["bendera-bendera"],
      nl_NL: "flags",
      pl: ["flagi"],
      pt: ["bandeiras"],
      ro: "flags",
      ru: ["флаги"],
      sv: ["flaggor"],
      th: ["ธง"],
      tr: ["bayraklar"],
      vi: ["gắn cờ"],
      zh: ["旗帜"],
      zh_TW: ["旗幟"]
    };
  },
  72302: function _(e) {
    e.exports = {
      ar: ["أشياء"],
      ca_ES: ["objectes"],
      cs: "objects",
      de: ["Objekte"],
      el: "objects",
      en: "objects",
      es: ["objetos"],
      fa: "objects",
      fr: ["objets"],
      he_IL: ["אובייקטים"],
      hu_HU: "objects",
      id_ID: ["objek"],
      it: ["oggetti"],
      ja: ["モノ"],
      ko: ["오브젝트"],
      ms_MY: ["objek-objek"],
      nl_NL: "objects",
      pl: ["obiekty"],
      pt: ["objetos"],
      ro: "objects",
      ru: ["предметы"],
      sv: ["objekt"],
      th: ["วัตถุ"],
      tr: ["nesneler"],
      vi: ["các đối tượng"],
      zh: ["物品"],
      zh_TW: ["物品"]
    };
  },
  96330: function _(e) {
    e.exports = {
      ar: ["الابتسامات والأشخاص"],
      ca_ES: ["cares i gent"],
      cs: "smiles & people",
      de: ["Smilies & Menschen"],
      el: "smiles & people",
      en: "smiles & people",
      es: ["emoticonos y personas"],
      fa: "smiles & people",
      fr: ["sourires & personnes"],
      he_IL: ["חיוכים ואנשים"],
      hu_HU: "smiles & people",
      id_ID: ["senyuman & orang"],
      it: ["smile e persone"],
      ja: ["スマイル & 人物"],
      ko: ["스마일 & 피플"],
      ms_MY: ["senyuman & orang"],
      nl_NL: "smiles & people",
      pl: ["buźki i osoby"],
      pt: ["smiles & pessoas"],
      ro: "smiles & people",
      ru: ["эмоции и люди"],
      sv: ["leenden & människor"],
      th: ["รอยยิ้มและผู้คน"],
      tr: ["gülümsemeler & insanlar"],
      vi: ["nụ cười và mọi người"],
      zh: ["笑脸&人像"],
      zh_TW: ["笑臉&人像"]
    };
  },
  6878: function _(e) {
    e.exports = {
      ar: ["رموز"],
      ca_ES: ["símbols"],
      cs: "symbols",
      de: ["Symbole"],
      el: "symbols",
      en: "symbols",
      es: ["simbolos"],
      fa: "symbols",
      fr: ["symboles"],
      he_IL: ["סימולים"],
      hu_HU: "symbols",
      id_ID: ["simbol"],
      it: ["simboli"],
      ja: ["記号"],
      ko: ["심볼"],
      ms_MY: ["simbol-simbol"],
      nl_NL: "symbols",
      pl: ["symbole"],
      pt: ["símbolos"],
      ro: "symbols",
      ru: ["символы"],
      sv: ["symboler"],
      th: ["สัญญาลักษณ์"],
      tr: ["semboller"],
      vi: ["mã giao dịch"],
      zh: ["符号"],
      zh_TW: ["符號"]
    };
  },
  15426: function _(e) {
    e.exports = {
      ar: ["مستخدَمٌ حديثاً"],
      ca_ES: ["usat recentment"],
      cs: "recently used",
      de: ["Zuletzt genutzt"],
      el: "recently used",
      en: "recently used",
      es: ["usados con frecuencia"],
      fa: "recently used",
      fr: ["récemment utilisé"],
      he_IL: ["נעשה בו שימוש לאחרונה"],
      hu_HU: "recently used",
      id_ID: ["baru digunakan"],
      it: ["usato di recente"],
      ja: ["最近使用したもの"],
      ko: ["최근에 쓰임"],
      ms_MY: ["baru lepas digunakan"],
      nl_NL: "recently used",
      pl: ["ostatnio używane"],
      pt: ["usados recentemente"],
      ro: "recently used",
      ru: ["недавние"],
      sv: ["nyligen använd"],
      th: ["ที่เพิ่งใช้ล่าสุด"],
      tr: ["son zamanlarda kullanılanlar"],
      vi: ["Sử dụng gần đây"],
      zh: ["最近使用"],
      zh_TW: ["最近使用"]
    };
  },
  15395: function _(e) {
    e.exports = {
      ar: ["السفر والأماكن"],
      ca_ES: ["viatges i llocs"],
      cs: "travel & places",
      de: ["Reisen & Orte"],
      el: "travel & places",
      en: "travel & places",
      es: ["viajes y destinos"],
      fa: "travel & places",
      fr: ["voyages & lieux"],
      he_IL: ["נסיעות ומקומות"],
      hu_HU: "travel & places",
      id_ID: ["perjalanan & tempat"],
      it: ["viaggi e località"],
      ja: ["トラベル & 場所"],
      ko: ["트래블 & 플레이스"],
      ms_MY: ["melancong & tempat-tempat"],
      nl_NL: "travel & places",
      pl: ["podróże i miejsca"],
      pt: ["viagens & lugares"],
      ro: "travel & places",
      ru: ["путешествия"],
      sv: ["resor & platser"],
      th: ["การเดินทางและสถานที่"],
      tr: ["seyahat & yerler"],
      vi: ["du lịch & địa điểm"],
      zh: ["旅游&地点"],
      zh_TW: ["旅遊&地點"]
    };
  },
  72171: function _(e) {
    e.exports = {
      ar: ["مركز"],
      ca_ES: ["Centre"],
      cs: "Center",
      de: ["Zentrieren"],
      el: "Center",
      en: "Center",
      es: ["Centro"],
      fa: "Center",
      fr: ["Centre"],
      he_IL: ["מרכז"],
      hu_HU: "Center",
      id_ID: ["Pusat"],
      it: ["Centro"],
      ja: ["中央"],
      ko: ["센터"],
      ms_MY: ["Pusat"],
      nl_NL: "Center",
      pl: ["Środek"],
      pt: ["Centro"],
      ro: "Center",
      ru: ["По центру"],
      sv: ["Centrera"],
      th: ["ตรงกลาง"],
      tr: ["Orta"],
      vi: ["Trung tâm"],
      zh: ["中心"],
      zh_TW: ["中心"]
    };
  },
  74207: function _(e) {
    e.exports = {
      ar: ["إعدادات الرسم البياني"],
      ca_ES: ["Configuració de gràfics"],
      cs: "Chart settings",
      de: ["Chart Einstellungen"],
      el: "Chart settings",
      en: "Chart settings",
      es: ["Configuración del gráfico"],
      fa: "Chart settings",
      fr: ["Paramètres du graphique"],
      he_IL: ["הגדרות גרף"],
      hu_HU: "Chart settings",
      id_ID: ["Pengaturan chart"],
      it: ["Impostazioni grafico"],
      ja: ["チャート設定"],
      ko: ["차트 세팅"],
      ms_MY: ["Tetapan Carta"],
      nl_NL: "Chart settings",
      pl: ["Ustawienia wykresu"],
      pt: ["Configurações do gráfico"],
      ro: "Chart settings",
      ru: ["Настройки графика"],
      sv: ["Diagraminställningar"],
      th: ["การตั้งค่าชาร์ต"],
      tr: ["Grafik ayarları"],
      vi: ["Cài đặt biểu đồ"],
      zh: ["图表设置"],
      zh_TW: ["圖表設定"]
    };
  },
  73169: function _(e) {
    e.exports = {
      ar: ["تطبيق الإعدادات الافتراضية"],
      ca_ES: ["Aplica configuracions per defecte"],
      cs: ["Apply Defaults"],
      de: ["Voreinstellungen anwenden"],
      el: ["Apply Defaults"],
      en: "Apply defaults",
      es: ["Aplicar configuraciones por defecto"],
      fa: ["Apply Defaults"],
      fr: ["Appliquer les paramètres par défaut"],
      he_IL: ["החל ברירת מחדל"],
      hu_HU: ["Alapértelmezett Alkalmazása"],
      id_ID: ["Terapkan Pengaturan Awal"],
      it: ["Applica predefiniti"],
      ja: ["デフォルトを適用"],
      ko: ["기본설정"],
      ms_MY: ["Guna Pakai Lalai"],
      nl_NL: ["Apply Defaults"],
      pl: ["Zastosuj domyślne"],
      pt: ["Aplicar padrões"],
      ro: ["Apply Defaults"],
      ru: ["Применить по умолчанию"],
      sv: ["Tillämpa standardinställningarna"],
      th: ["ตั้งให้เป็นค่าเบื้องต้น"],
      tr: ["Varsayılanları uygula"],
      vi: ["Áp dụng Nhiều mặc định"],
      zh: ["应用默认"],
      zh_TW: ["套用預設值"]
    };
  },
  75819: function _(e) {
    e.exports = {
      ar: ["تفعيل على الكل"],
      ca_ES: ["Aplica-ho a tot"],
      cs: "Apply to all",
      de: ["Auf alle Anwenden"],
      el: "Apply to all",
      en: "Apply to all",
      es: ["Aplicar a todo"],
      fa: "Apply to all",
      fr: ["Appliquer à tous"],
      he_IL: ["החל על הכל"],
      hu_HU: "Apply to all",
      id_ID: ["Terapkan ke seluruh"],
      it: ["Applica su tutti"],
      ja: ["すべてに適用"],
      ko: ["모두 적용"],
      ms_MY: ["Tertakluk untuk semua"],
      nl_NL: "Apply to all",
      pl: ["Zastosuj do wszystkich"],
      pt: ["Aplicar a todos"],
      ro: "Apply to all",
      ru: ["Применить ко всем"],
      sv: ["Använd för alla"],
      th: ["ดำเนินการกับทั้งหมด"],
      tr: ["Hepsine uygula"],
      vi: ["Áp dụng cho tất cả"],
      zh: ["应用至全部"],
      zh_TW: ["全部套用"]
    };
  },
  91757: function _(e) {
    e.exports = {
      ar: ["الأسفل"],
      ca_ES: ["Part inferior"],
      cs: "Bottom",
      de: ["Unten"],
      el: "Bottom",
      en: "Bottom",
      es: ["Parte inferior"],
      fa: ["پایین"],
      fr: ["Bas"],
      he_IL: ["תחתית"],
      hu_HU: ["Alsó"],
      id_ID: ["Dasar"],
      it: ["Sotto"],
      ja: ["下"],
      ko: ["아래"],
      ms_MY: ["Bawah"],
      nl_NL: "Bottom",
      pl: ["Dno"],
      pt: ["Em baixo"],
      ro: "Bottom",
      ru: ["Снизу"],
      sv: ["Botten"],
      th: ["ข้างล่าง"],
      tr: ["Alt"],
      vi: ["Đáy"],
      zh: ["底部"],
      zh_TW: ["底部"]
    };
  },
  16079: function _(e) {
    e.exports = {
      ar: ["متدرج"],
      ca_ES: "Gradient",
      cs: "Gradient",
      de: ["Farbverlauf"],
      el: "Gradient",
      en: "Gradient",
      es: ["Gradiente"],
      fa: "Gradient",
      fr: ["Dégradé"],
      he_IL: ["משולב"],
      hu_HU: "Gradient",
      id_ID: ["Gradien"],
      it: ["Gradiente"],
      ja: ["グラデーション"],
      ko: ["그래디언트"],
      ms_MY: ["Gradien"],
      nl_NL: "Gradient",
      pl: "Gradient",
      pt: ["Gradiente"],
      ro: "Gradient",
      ru: ["Градиент"],
      sv: ["Lutning"],
      th: ["ไล่เฉดสี"],
      tr: ["Gradyan"],
      vi: "Gradient",
      zh: ["渐变"],
      zh_TW: ["漸層"]
    };
  },
  40837: function _(e) {
    e.exports = {
      ar: ['هل تريد حقًا حذف قالب الرسم البياني "{name}"؟'],
      ca_ES: ["De debò que voleu eliminar la plantilla de gràfic '{name}'?"],
      cs: "Do you really want to delete Chart Template '{name}' ?",
      de: ["Möchten Sie die Chart-Vorlage '{name}' wirklich löschen?"],
      el: "Do you really want to delete Chart Template '{name}' ?",
      en: "Do you really want to delete Chart Template '{name}' ?",
      es: ["¿Está seguro de que desea eliminar la plantilla de gráfico '{name}'?"],
      fa: "Do you really want to delete Chart Template '{name}' ?",
      fr: ['Voulez-vous vraiment supprimer le modèle de graphique "{name}"?'],
      he_IL: ["האם אתה באמת רוצה למחוק את תבנית הגרף '{name}'?"],
      hu_HU: "Do you really want to delete Chart Template '{name}' ?",
      id_ID: ["Apakah anda benar-benar ingin menghapus Template Chart '{name}' ?"],
      it: ["Si vuole davvero cancellare il modello del grafico '{name}'?"],
      ja: ["本当にチャートテンプレート '{name}' を削除しますか？"],
      ko: ["차트 템플릿 '{name}'를 정말 삭제하시겠습니까?"],
      ms_MY: ["Adakah anda benar-benar ingin memadamkan Templat Carta '{name}' ?"],
      nl_NL: "Do you really want to delete Chart Template '{name}' ?",
      pl: ["Czy na pewno chcesz usunąć szablon wykresu „{name}”?"],
      pt: ["Você realmente quer apagar o Template '{name}' do Gráfico?"],
      ro: "Do you really want to delete Chart Template '{name}' ?",
      ru: ['Вы действительно хотите удалить шаблон графика "{name}"?'],
      sv: ['Vill du verkligen radera diagrammall "{name}"?'],
      th: ["คุณต้องการลบเทมเพลตแผนภูมิ '{name}' หรือไม่"],
      tr: ["'{name}' Grafik Taslağını gerçekten silmek istiyor musunuz?"],
      vi: ["Bạn có thực sự muốn xoá Mẫu Biểu đồ '{name}' không?"],
      zh: ["您真的要删除图表模板'{name}'吗？"],
      zh_TW: ["您真的要刪除圖表模板'{name}'嗎？"]
    };
  },
  42973: function _(e) {
    e.exports = {
      ar: ["خط منقط"],
      ca_ES: ["Línia de punts"],
      cs: "Dotted line",
      de: ["Gepunktete Linie"],
      el: "Dotted line",
      en: "Dotted line",
      es: ["Linea de puntos"],
      fa: "Dotted line",
      fr: ["Ligne pointillée"],
      he_IL: ["קו מנוקד"],
      hu_HU: "Dotted line",
      id_ID: ["Garis titik-titik"],
      it: ["Linea punteggiata"],
      ja: ["点線"],
      ko: ["도트 라인"],
      ms_MY: ["Garis Bertitik"],
      nl_NL: "Dotted line",
      pl: ["Linia kropkowana"],
      pt: ["Linha Pontilhada"],
      ro: "Dotted line",
      ru: ["Точечный пунктир"],
      sv: ["Prickad linje"],
      th: ["เส้นไข่ปลา"],
      tr: ["Noktalı Çizgi"],
      vi: ["Đường chấm chấm"],
      zh: ["点虚线"],
      zh_TW: ["點虛線"]
    };
  },
  59317: function _(e) {
    e.exports = {
      ar: ["خط متقطع"],
      ca_ES: ["Línia discontínua"],
      cs: "Dashed line",
      de: ["Gestrichelte Linie"],
      el: "Dashed line",
      en: "Dashed line",
      es: ["Linea discontinua"],
      fa: "Dashed line",
      fr: ["Ligne traitillée"],
      he_IL: ["קו מקווקו"],
      hu_HU: "Dashed line",
      id_ID: ["Garis putus-putus"],
      it: ["Linea tratteggiata"],
      ja: ["破線"],
      ko: ["대쉬 라인"],
      ms_MY: ["Garis Putus-Putus"],
      nl_NL: "Dashed line",
      pl: ["Linia przerywana"],
      pt: ["Linha Tracejada"],
      ro: "Dashed line",
      ru: ["Штриховой пунктир"],
      sv: ["Streckad linje"],
      th: ["เส้นประ"],
      tr: ["Kesik Çizgi"],
      vi: ["Đường Đứt nét"],
      zh: ["短虚线"],
      zh_TW: ["短虛線"]
    };
  },
  77405: function _(e) {
    e.exports = {
      ar: ["أفقي"],
      ca_ES: ["Horitzontal"],
      cs: "Horizontal",
      de: "Horizontal",
      el: "Horizontal",
      en: "Horizontal",
      es: "Horizontal",
      fa: "Horizontal",
      fr: "Horizontal",
      he_IL: ["אופקי"],
      hu_HU: "Horizontal",
      id_ID: "Horizontal",
      it: ["Orizzontale"],
      ja: ["水平"],
      ko: ["가로"],
      ms_MY: ["Melintang"],
      nl_NL: "Horizontal",
      pl: ["Poziomo"],
      pt: "Horizontal",
      ro: "Horizontal",
      ru: ["Горизонтальная"],
      sv: ["Vågrät"],
      th: ["แนวนอน"],
      tr: ["Yatay"],
      vi: ["Ngang"],
      zh: ["横式"],
      zh_TW: ["橫式"]
    };
  },
  19286: function _(e) {
    e.exports = {
      ar: ["يسار"],
      ca_ES: ["Esquerra"],
      cs: "Left",
      de: ["Links"],
      el: "Left",
      en: "Left",
      es: ["Izquierda"],
      fa: "Left",
      fr: ["Gauche"],
      he_IL: ["שמאל"],
      hu_HU: ["Bal"],
      id_ID: ["Kiri"],
      it: ["Sinistra"],
      ja: ["左"],
      ko: ["왼쪽"],
      ms_MY: ["Kiri"],
      nl_NL: "Left",
      pl: ["Lewo"],
      pt: ["Esquerda"],
      ro: "Left",
      ru: ["Слева"],
      sv: ["Vänster"],
      th: ["ซ้าย"],
      tr: ["Sol"],
      vi: ["Bên trái"],
      zh: ["左"],
      zh_TW: ["左"]
    };
  },
  76476: function _(e) {
    e.exports = {
      ar: ["وسط"],
      ca_ES: ["Al mig"],
      cs: "Middle",
      de: ["Mitte"],
      el: "Middle",
      en: "Middle",
      es: ["En el medio"],
      fa: "Middle",
      fr: ["Milieu"],
      he_IL: ["אמצע"],
      hu_HU: "Middle",
      id_ID: ["Tengah"],
      it: ["Medio"],
      ja: ["中央"],
      ko: ["미들"],
      ms_MY: ["Tengah"],
      nl_NL: "Middle",
      pl: ["Środek"],
      pt: ["No meio"],
      ro: "Middle",
      ru: ["По центру"],
      sv: ["Mitten"],
      th: ["ตรงกลาง"],
      tr: ["Orta"],
      vi: ["Giữa"],
      zh: ["中间"],
      zh_TW: ["中間"]
    };
  },
  55362: function _(e) {
    e.exports = {
      ar: ["عادي"],
      ca_ES: "Normal",
      cs: ["Běžné"],
      de: "Normal",
      el: "Normal",
      en: "Normal",
      es: "Normal",
      fa: ["خط"],
      fr: "Normal",
      he_IL: ["רגיל"],
      hu_HU: ["Normális"],
      id_ID: "Normal",
      it: ["Normale"],
      ja: ["通常"],
      ko: ["정상"],
      ms_MY: ["Biasa"],
      nl_NL: ["Normaal"],
      pl: ["Normalny"],
      pt: "Normal",
      ro: "Normal",
      ru: ["Обычный"],
      sv: "Normal",
      th: ["ปกติ"],
      tr: "Normal",
      vi: ["Bình thường"],
      zh: ["普通"],
      zh_TW: ["正常"]
    };
  },
  35637: function _(e) {
    e.exports = {
      ar: ["ثابت"],
      ca_ES: ["Sòlid"],
      cs: "Solid",
      de: ["Einfarbig"],
      el: "Solid",
      en: "Solid",
      es: ["Sólido"],
      fa: "Solid",
      fr: ["Uni"],
      he_IL: ["סולידי"],
      hu_HU: "Solid",
      id_ID: "Solid",
      it: ["Tinta unita"],
      ja: ["ソリッド"],
      ko: ["솔리드"],
      ms_MY: ["Padu"],
      nl_NL: "Solid",
      pl: ["Jednolite"],
      pt: ["Sólido"],
      ro: "Solid",
      ru: ["Сплошной"],
      sv: "Solid",
      th: ["สีเดียว"],
      tr: ["Katı"],
      vi: "Solid",
      zh: "Solid",
      zh_TW: "Solid"
    };
  },
  21141: function _(e) {
    e.exports = {
      ar: ["يمين"],
      ca_ES: ["Dreta"],
      cs: "Right",
      de: ["Rechts"],
      el: "Right",
      en: "Right",
      es: ["Derecha"],
      fa: "Right",
      fr: ["Droite"],
      he_IL: ["ימין"],
      hu_HU: ["Jobb"],
      id_ID: ["Kanan"],
      it: ["Destra"],
      ja: ["右"],
      ko: ["오른쪽"],
      ms_MY: ["Kanan"],
      nl_NL: "Right",
      pl: ["Prawy"],
      pt: ["Direita"],
      ro: "Right",
      ru: ["Справа"],
      sv: ["Höger"],
      th: ["ขวา"],
      tr: ["Sağ"],
      vi: ["Phải"],
      zh: ["右"],
      zh_TW: ["右"]
    };
  },
  65994: function _(e) {
    e.exports = {
      ar: ["الأعلى"],
      ca_ES: ["Part superior"],
      cs: "Top",
      de: ["Oben"],
      el: "Top",
      en: "Top",
      es: ["Parte superior"],
      fa: "Top",
      fr: ["Haut"],
      he_IL: ["עליון"],
      hu_HU: ["Felső"],
      id_ID: ["Teratas"],
      it: ["Sopra"],
      ja: ["上"],
      ko: ["탑"],
      ms_MY: ["Atas"],
      nl_NL: "Top",
      pl: ["Szczyt"],
      pt: ["Em cima"],
      ro: "Top",
      ru: ["Сверху"],
      sv: ["Topp"],
      th: ["บน"],
      tr: ["Üst"],
      vi: ["Trên đầu"],
      zh: ["顶部"],
      zh_TW: ["頂部"]
    };
  },
  92960: function _(e) {
    e.exports = {
      ar: ["محاذاة النص"],
      ca_ES: ["Alineació del text"],
      cs: "Text alignment",
      de: ["Textausrichtung"],
      el: "Text alignment",
      en: "Text alignment",
      es: ["Alineación del texto"],
      fa: "Text alignment",
      fr: ["Alignement du texte"],
      he_IL: ["יישור טקסט"],
      hu_HU: "Text alignment",
      id_ID: ["Perataan teks"],
      it: ["Allineamento testo"],
      ja: ["テキストの配置"],
      ko: ["텍스트 얼라인"],
      ms_MY: ["jajaran teks"],
      nl_NL: "Text alignment",
      pl: ["Wyrównanie tekstu"],
      pt: ["Alinhamento do texto"],
      ro: "Text alignment",
      ru: ["Выравнивание текста"],
      sv: ["Textjustering"],
      th: ["การจัดตำแหน่งตัวอักษร"],
      tr: ["Metin hizalama"],
      vi: ["Căn chỉnh chữ"],
      zh: ["文字对齐"],
      zh_TW: ["文字對齊"]
    };
  },
  90581: function _(e) {
    e.exports = {
      ar: ["اتجاه النص"],
      ca_ES: ["Orientació del text"],
      cs: "Text orientation",
      de: ["Text Ausrichtung"],
      el: "Text orientation",
      en: "Text orientation",
      es: ["Orientación del texto"],
      fa: "Text orientation",
      fr: ["Orientation du texte"],
      he_IL: ["כיוון טקסט"],
      hu_HU: "Text orientation",
      id_ID: ["Orientasi teks"],
      it: ["Orientamento testo"],
      ja: ["テキストの向き"],
      ko: ["텍스트 방향"],
      ms_MY: ["Orientasi teks"],
      nl_NL: "Text orientation",
      pl: ["Kierunek tekstu"],
      pt: ["Orientação do Texto"],
      ro: "Text orientation",
      ru: ["Ориентация текста"],
      sv: ["Textriktning"],
      th: ["การเรียงตัวของตัวอักษร"],
      tr: ["Metin yönü"],
      vi: ["Chiều của chữ"],
      zh: ["文字方向"],
      zh_TW: ["文字方向"]
    };
  },
  78019: function _(e) {
    e.exports = {
      ar: ["استخدم علامات رياضية خاصة لتحل محل الرسومات المحددة: + ، - ، / ، * للسعر و + ، - لفهرس العمود."],
      ca_ES: ["Feu servir signes matemàtics especials per desplaçar els dibuixos seleccionats: +,-,/,* per al preu i +,- per a l'índex de barres."],
      cs: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      de: ["Verwenden Sie spezielle mathematische Zeichen, um ausgewählte Zeichnungen zu verschieben: +,-,/,* für Preis- und +,- für Balken-Index."],
      el: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      en: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      es: ["Utilice signos matemáticos especiales para desplazar los dibujos seleccionados: +,-,/,* para el precio y +,- para el índice de barras."],
      fa: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      fr: ["Utilisez des signes mathématiques spéciaux pour déplacer les dessins sélectionnés : +,-,/,* pour le prix et +,- pour l'index des barres."],
      he_IL: ["השתמש בסימנים מתמטיים מיוחדים כדי להחליף שרטוטים נבחרים: +,-,/,* עבור המחיר ו-+,- עבור בר אינדקס."],
      hu_HU: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      id_ID: ["Gunakan tanda matematika khusus untuk memindahkan gambar yang dipilih: +,-,/,* untuk harga dan +,- untuk indeks bar."],
      it: ["Per spostare i disegni selezionati, potete utilizzare i segni matematici speciali: +,-,/,* per il prezzo e +,- per l'indice delle barre."],
      ja: ["選択中の描画をまとめて移動するには演算子を使用します。価格に対しては+ , - , / , *、バーインデックスに対しては+ ,- を使用します。"],
      ko: ["선택한 드로윙을 대체하려면 특수 연산 부호를 사용합니다. 가격에는 +,-,/,*, 막대 인덱스는 +,-입니다."],
      ms_MY: ["Gunakan simbol matematik istimewa untuk menganjakkan lukisan-lukisan terpilih:  +,-,/,* untuk harga dan +,- untuk indeks bar."],
      nl_NL: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      pl: ["Użyj specjalnych znaków matematycznych, aby zastąpić wybrane rysunki: +,-,/,* dla ceny i +,- dla indeksu słupka."],
      pt: ["Usar símbolos matemáticos especiais para deslocar os desenhos selecionados: +,-,/,* para preço e +,- para o índice de barras."],
      ro: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
      ru: ["Используйте специальные символы, чтобы перемещать выбранные объекты рисования: +, -, /, * для цены и +, - для индекса бара."],
      sv: ["Använd särskilda matematiska tecken för att förflytta valda ritningar: +,-,/,* för pris och +,- för stapelindex."],
      th: ["ใช้เครื่องหมายทางคณิตศาสตร์พิเศษเพื่อแทนที่ภาพวาดที่เลือก: +,-,/,* สำหรับราคา และ +,- สำหรับดัชนีแท่ง"],
      tr: ["Özel matematik işaretleri ile seçili çizimleri oynatın. +,-,/,* ile fiyatı ve +,- ile çubuk endeksi oynar."],
      vi: ["Sử dụng các dấu hiệu toán học đặc biệt để thay thế các bản vẽ đã chọn: +, -, /, * cho giá và +, - cho chỉ số thanh."],
      zh: ["使用特殊的数学符号替换选定的图形：+,-,/,* 表示价格，+,- 表示K线指数。"],
      zh_TW: ["使用特殊的數學符號替換選定的圖形：+,-,/,* 表示價格，+,- 表示K線指數。"]
    };
  },
  44085: function _(e) {
    e.exports = {
      ar: ["عمودي"],
      ca_ES: "Vertical",
      cs: "Vertical",
      de: ["Vertikal"],
      el: "Vertical",
      en: "Vertical",
      es: "Vertical",
      fa: "Vertical",
      fr: "Vertical",
      he_IL: ["אנכי"],
      hu_HU: "Vertical",
      id_ID: "Vertical",
      it: ["Verticale"],
      ja: ["垂直"],
      ko: ["세로"],
      ms_MY: ["Menegak"],
      nl_NL: "Vertical",
      pl: ["Pionowo"],
      pt: "Vertical",
      ro: "Vertical",
      ru: ["Вертикальная"],
      sv: ["Lodrät"],
      th: ["แนวตั้ง"],
      tr: ["Dikey"],
      vi: ["Dọc"],
      zh: ["竖式"],
      zh_TW: ["直式"]
    };
  },
  76080: function _(e) {
    e.exports = {
      ar: ["على سبيل المثال +1"],
      ca_ES: ["p. ex., +1"],
      cs: "e.g. +1",
      de: ["z.B. +1"],
      el: "e.g. +1",
      en: "e.g. +1",
      es: ["p. ej., +1"],
      fa: "e.g. +1",
      fr: ["p. ex. +1"],
      he_IL: ["לְמָשָׁל /+1"],
      hu_HU: "e.g. +1",
      id_ID: ["misalnya +1"],
      it: ["es. +1"],
      ja: ["例. +1"],
      ko: "e.g. +1",
      ms_MY: ["cth. +1"],
      nl_NL: "e.g. +1",
      pl: ["np. +1"],
      pt: ["ex.: +1"],
      ro: "e.g. +1",
      ru: ["н-р, +1"],
      sv: ["t. ex. +1"],
      th: ["เช่น. +1"],
      tr: ["örn. +1"],
      vi: "e.g. +1",
      zh: ["例如 +1"],
      zh_TW: ["例如+1"]
    };
  },
  95166: function _(e) {
    e.exports = {
      ar: ["/2"],
      ca_ES: ["p. ex., /2"],
      cs: "e.g. /2",
      de: ["z.B. /2"],
      el: "e.g. /2",
      en: "e.g. /2",
      es: ["p. ej., /2"],
      fa: "e.g. /2",
      fr: ["p. ex. /2"],
      he_IL: ["לְמָשָׁל /2"],
      hu_HU: "e.g. /2",
      id_ID: ["misalnya /2"],
      it: ["es. /2"],
      ja: ["例. /2"],
      ko: "e.g. /2",
      ms_MY: ["cth. /2"],
      nl_NL: "e.g. /2",
      pl: ["np. /2"],
      pt: ["ex.: /2"],
      ro: "e.g. /2",
      ru: ["н-р, /2"],
      sv: ["t. ex. /2"],
      th: ["ยกตัวอย่าง/2"],
      tr: ["örn. /2"],
      vi: "e.g. /2",
      zh: ["例如 /2"],
      zh_TW: ["例如 /2"]
    };
  }
}]);