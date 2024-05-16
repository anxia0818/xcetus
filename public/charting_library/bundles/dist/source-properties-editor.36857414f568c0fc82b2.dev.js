"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6780], {
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
  55309: function _(e) {
    e.exports = {
      scrollable: "scrollable-Ycj0dUGE",
      tabs: "tabs-Ycj0dUGE"
    };
  },
  53018: function _(e) {
    e.exports = {
      titleWrap: "titleWrap-e3jFxbHm",
      ellipsis: "ellipsis-e3jFxbHm",
      hideInput: "hideInput-e3jFxbHm",
      hideText: "hideText-e3jFxbHm",
      empty: "empty-e3jFxbHm",
      hideEmpty: "hideEmpty-e3jFxbHm",
      editIcon: "editIcon-e3jFxbHm"
    };
  },
  31202: function _(e) {
    e.exports = {
      tabs: "tabs-xNPrJ8dY"
    };
  },
  38546: function _(e, t, i) {
    "use strict";

    i.d(t, {
      DialogTabs: function DialogTabs() {
        return n;
      }
    });
    var a = i(50959),
        s = i(64378);
    var n = a.forwardRef(function (e, t) {
      var i = e.id,
          n = e.tabs,
          r = e.activeTab,
          o = e.onChange,
          l = e.className;
      return a.createElement("div", {
        className: l,
        ref: t
      }, a.createElement(s.UnderlineButtonTabs, {
        id: i,
        items: n,
        isActive: function isActive(e) {
          return e.id === r;
        },
        onActivate: function onActivate(e) {
          o(e.id);
        }
      }));
    });
  },
  50945: function _(e, t, i) {
    "use strict";

    i.d(t, {
      StudyDefaultsManager: function StudyDefaultsManager() {
        return p;
      }
    });
    var a = i(50959),
        s = i(97754),
        n = i.n(s),
        r = i(9745),
        o = i(44352),
        l = i(95276),
        c = i(16396),
        d = i(44996),
        u = i(92229);
    var h = {
      reset: o.t(null, void 0, i(79782)),
      saveAsDefault: o.t(null, void 0, i(18229)),
      defaults: o.t(null, void 0, i(98938))
    };

    var p =
    /*#__PURE__*/
    function (_a$PureComponent) {
      _inherits(p, _a$PureComponent);

      function p() {
        var _this;

        _classCallCheck(this, p);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments)), _this._handleResetToDefaults = function () {
          _this.props.model.restorePropertiesForSource(_this.props.source);
        }, _this._handleSaveAsDefaults = function () {
          _this.props.source.properties().saveDefaults();
        };
        return _this;
      }

      _createClass(p, [{
        key: "render",
        value: function render() {
          var e = this.props.mode;
          return a.createElement(l.ControlDisclosure, {
            id: "study-defaults-manager",
            className: n()("normal" === e && u.defaultsButtonText),
            hideArrowButton: "compact" === e,
            buttonChildren: this._getPlaceHolderItem("compact" === e)
          }, a.createElement(c.PopupMenuItem, {
            className: u.defaultsButtonItem,
            isActive: !1,
            label: h.reset,
            onClick: this._handleResetToDefaults
          }), a.createElement(c.PopupMenuItem, {
            className: u.defaultsButtonItem,
            isActive: !1,
            label: h.saveAsDefault,
            onClick: this._handleSaveAsDefaults
          }));
        }
      }, {
        key: "_getPlaceHolderItem",
        value: function _getPlaceHolderItem(e) {
          return e ? a.createElement(r.Icon, {
            className: u.defaultsButtonIcon,
            icon: d
          }) : h.defaults;
        }
      }]);

      return p;
    }(a.PureComponent);
  },
  48531: function _(e, t, i) {
    "use strict";

    i.d(t, {
      FooterMenu: function FooterMenu() {
        return b;
      }
    });
    var a = i(50959),
        s = i(44352),
        n = i(9745),
        r = i(95276),
        o = i(90692),
        l = i(47334),
        c = i(44996);

    function d(e) {
      return e.isTabletWidth ? a.createElement(n.Icon, {
        className: l.themesButtonIcon,
        icon: c
      }) : a.createElement(a.Fragment, null, s.t(null, void 0, i(19611)));
    }

    function u(e) {
      return a.createElement(o.MatchMedia, {
        rule: "screen and (max-width: 768px)"
      }, function (t) {
        return a.createElement(r.ControlDisclosure, {
          className: !t && l.themesButtonText,
          hideArrowButton: t,
          buttonChildren: a.createElement(d, {
            isTabletWidth: t
          })
        }, e.children);
      });
    }

    var h = i(16396),
        p = i(96040),
        m = i(70412),
        _ = i(32563);

    function g(e) {
      var t = e.name,
          i = e.onRemove,
          s = e.onClick,
          _ref = (0, m.useHover)(),
          _ref2 = _slicedToArray(_ref, 2),
          n = _ref2[0],
          r = _ref2[1],
          o = a.useCallback(function () {
        return s(t);
      }, [s, t]),
          c = a.useCallback(function () {
        i && i(t);
      }, [i, t]);

      return a.createElement("div", _objectSpread({}, r), a.createElement(h.PopupMenuItem, {
        className: l.defaultsButtonItem,
        isActive: !1,
        label: t,
        onClick: o,
        toolbox: i && a.createElement(p.RemoveButton, {
          hidden: !_.mobiletouch && !n,
          onClick: c
        })
      }));
    }

    function f(e) {
      return a.createElement(u, null, a.createElement(g, {
        onClick: function onClick() {
          var t = e.sources,
              i = e.chartUndoModel;
          i.restoreLineToolsFactoryDefaults(t);
        },
        name: s.t(null, void 0, i(67049))
      }));
    }

    function b(e) {
      return a.createElement(f, _objectSpread({}, e));
    }
  },
  37289: function _(e, t, i) {
    "use strict";

    i.d(t, {
      PropertiesEditorTab: function PropertiesEditorTab() {
        return c;
      }
    });
    var a = i(50959),
        s = i(66849);
    var n = {
      "Elliott Impulse Wave (12345)Degree": "normal",
      "Elliott Triangle Wave (ABCDE)Degree": "normal",
      "Elliott Triple Combo Wave (WXYXZ)Degree": "normal",
      "Elliott Correction Wave (ABC)Degree": "normal",
      "Elliott Double Combo Wave (WXY)Degree": "normal",
      BarsPatternMode: "normal",
      StudyInputSource: "normal"
    },
        r = {
      TextText: "big",
      AnchoredTextText: "big",
      NoteText: "big",
      AnchoredNoteText: "big",
      CalloutText: "big",
      BalloonText: "big"
    };
    var o = i(11062),
        l = i(15650);

    function c(e) {
      var t = e.page,
          i = e.pageRef,
          c = e.tableKey;
      return a.createElement(s.ControlCustomHeightContext.Provider, {
        value: r
      }, a.createElement(s.ControlCustomWidthContext.Provider, {
        value: n
      }, t && a.createElement(o.PropertyTable, {
        reference: i,
        key: c
      }, t.definitions.value().map(function (e) {
        return a.createElement(l.Section, {
          key: e.id,
          definition: e
        });
      }))));
    }
  },
  75892: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      SourcePropertiesEditorRenderer: function SourcePropertiesEditorRenderer() {
        return M;
      }
    });

    var a = i(50959),
        s = i(962),
        n = i(76422),
        r = i(50151),
        o = i(49483),
        l = i(56840),
        c = i.n(l),
        d = i(44352),
        u = i(50182),
        h = i(59064),
        p = i(48531),
        m = i(37289),
        _ = i(86656),
        g = i(37591),
        f = i(92249),
        b = i(50945),
        v = i(28853),
        T = i(76544),
        S = i(13087),
        k = i(8708),
        y = i(90692),
        z = i(36298),
        D = i(38546),
        I = i(68495),
        x = i(14483),
        C = i(55309);

    var L = new z.TranslatedString("change {sourceTitle} title to {newSourceTitle}", d.t(null, void 0, i(40001)));

    var E =
    /*#__PURE__*/
    function (_a$PureComponent2) {
      _inherits(E, _a$PureComponent2);

      function E(e) {
        var _this2;

        _classCallCheck(this, E);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(E).call(this, e)), _this2._activePageRef = a.createRef(), _this2._handleChangeMode = function (e) {
          _this2.setState({
            isRenaming: e
          });
        }, _this2._getTranslatedStringForSource = function (e) {
          return new z.TranslatedString(e.name(), e.title(g.TitleDisplayTarget.StatusLine));
        }, _this2._setTitle = function (e) {
          var _this2$props = _this2.props,
              t = _this2$props.source,
              i = _this2$props.model,
              a = L.format({
            sourceTitle: t.properties().title.value() || _this2._getTranslatedStringForSource(t),
            newSourceTitle: e
          });
          i.setProperty(t.properties().title, e, a, false);
        }, _this2._getActionPageById = function (e) {
          if (!e) return;
          var t = _this2.props.pages;
          return t.find(function (t) {
            return t.id.toLowerCase() === e.toLowerCase();
          });
        }, _this2._onChangeActivePageDefinitions = function () {
          _this2.setState({
            tableKey: Date.now()
          }, function () {
            _this2._requestResize && _this2._requestResize();
          });
        }, _this2._renderFooterLeft = function () {
          var _this2$props2 = _this2.props,
              e = _this2$props2.source,
              t = _this2$props2.model;
          return (0, f.isLineTool)(e) ? a.createElement(p.FooterMenu, {
            sources: [e],
            chartUndoModel: t
          }) : a.createElement(y.MatchMedia, {
            rule: "screen and (max-width: 430px)"
          }, function (i) {
            return (0, v.isStudy)(e) && a.createElement(b.StudyDefaultsManager, {
              model: t,
              source: e,
              mode: i ? "compact" : "normal"
            });
          });
        }, _this2._subscribe = function (e) {
          e && e.definitions.subscribe(_this2._onChangeActivePageDefinitions);
        }, _this2._unsubscribe = function (e) {
          e && e.definitions.unsubscribe(_this2._onChangeActivePageDefinitions);
        }, _this2._getActiveTabSettingsName = function () {
          var e = _this2.props.source;
          return e instanceof T.Series ? "properties_dialog.active_tab.chart" : e instanceof S.LineDataSource ? "properties_dialog.active_tab.drawing" : e instanceof k.Study ? "properties_dialog.active_tab.study" : "";
        }, _this2._handleSelectPage = function (e) {
          var t = _this2.state.activePageId,
              i = _this2._getActionPageById(t),
              a = _this2._getActionPageById(e),
              s = _this2._getActiveTabSettingsName();

          t !== e && (_this2._unsubscribe(i), s && c().setValue(s, e), _this2._subscribe(a), _this2.setState({
            activePageId: e,
            tableKey: Date.now()
          }, function () {
            _this2._requestResize && _this2._requestResize(), _this2._focusActivePageFirstTextInput();
          }));
        }, _this2._handleScroll = function () {
          h.globalCloseDelegate.fire();
        }, _this2._handleSubmit = function () {
          _this2.props.onSubmit(), _this2._closePopupDialog();
        }, _this2._closePopupDialog = function () {
          window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.refresh(), _this2.props.onClose();
        };
        var t = _this2.props.pages;
        var i;
        if (_this2._getActionPageById(_this2.props.activePageId)) i = (0, r.ensureDefined)(_this2.props.activePageId);else {
          var _e2 = c().getValue(_this2._getActiveTabSettingsName(), ""),
              _a = _this2._getActionPageById(_e2);

          i = _a ? _a.id : t[0].id;
        }
        _this2.state = {
          activePageId: i,
          tableKey: Date.now(),
          isRenaming: !1
        }, window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.hide();
        return _this2;
      }

      _createClass(E, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var e = this.state.activePageId,
              t = this._getActionPageById(e);

          this._focusActivePageFirstTextInput(), this._subscribe(t);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var e = this.props.activePageId,
              t = this._getActionPageById(e);

          clearTimeout(this._timeout), this._unsubscribe(t);
        }
      }, {
        key: "render",
        value: function render() {
          var e;
          var _this$props = this.props,
              t = _this$props.onCancel,
              i = _this$props.source,
              _this$state = this.state,
              s = _this$state.activePageId,
              n = _this$state.isRenaming,
              r = (null === (e = i.properties().title) || void 0 === e ? void 0 : e.value()) || i.title(g.TitleDisplayTarget.StatusLine),
              o = a.createElement(I.Title, {
            isRenaming: n,
            onChangeMode: this._handleChangeMode,
            setTitle: this._setTitle,
            defaultTitle: r,
            canBeRenamed: (0, f.isLineTool)(i) && !x.enabled("widget")
          });
          return a.createElement(u.AdaptiveConfirmDialog, {
            dataName: (0, v.isStudy)(i) ? "indicator-properties-dialog" : "source-properties-editor",
            dataDialogName: r,
            title: o,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: t,
            onClickOutside: this._handleSubmit,
            onClose: this._closePopupDialog,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(s),
            submitOnEnterKey: !1,
            showCloseIcon: !n
          });
        }
      }, {
        key: "_renderChildren",
        value: function _renderChildren(e) {
          var _this3 = this;

          return function (_ref3) {
            var t = _ref3.requestResize;
            _this3._requestResize = t;
            var _this3$props = _this3.props,
                i = _this3$props.pages,
                s = _this3$props.source,
                n = i.find(function (t) {
              return t.id === e;
            }),
                r = (0, v.isStudy)(s) ? "indicator-properties-dialog-tabs" : "source-properties-editor-tabs",
                o = i.map(function (_ref4) {
              var e = _ref4.title,
                  t = _ref4.id;
              return {
                label: e,
                id: t,
                dataId: "".concat(r, "-").concat(t)
              };
            });
            return a.createElement(a.Fragment, null, a.createElement(D.DialogTabs, {
              className: C.tabs,
              id: r,
              activeTab: e,
              onChange: _this3._handleSelectPage,
              tabs: o
            }), a.createElement(_.TouchScrollContainer, {
              className: C.scrollable,
              onScroll: _this3._handleScroll
            }, a.createElement(m.PropertiesEditorTab, {
              page: n,
              pageRef: _this3._activePageRef,
              tableKey: _this3.state.tableKey
            })));
          };
        }
      }, {
        key: "_focusActivePageFirstTextInput",
        value: function _focusActivePageFirstTextInput() {
          if (!o.CheckMobile.any() && this._activePageRef.current) {
            var _e3 = this._activePageRef.current.querySelector("input[type=text],textarea");

            _e3 && (this._timeout = setTimeout(function () {
              _e3.focus();
            }, 0));
          }
        }
      }]);

      return E;
    }(a.PureComponent);

    var w = i(85067);

    var M =
    /*#__PURE__*/
    function (_w$DialogRenderer) {
      _inherits(M, _w$DialogRenderer);

      function M(e) {
        var _this4;

        _classCallCheck(this, M);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(M).call(this)), _this4._timeout = null, _this4._handleClose = function () {
          s.unmountComponentAtNode(_this4._container), _this4._setVisibility(!1), _this4._onClose && _this4._onClose(), _this4._subscription.unsubscribe(_assertThisInitialized(_this4), _this4._handleCollectionChanged);
        }, _this4._handleSubmit = function () {
          var e = _this4._source;
          (0, f.isLineTool)(e) && e.hasAlert.value() && setTimeout(function () {
            e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
          });
        }, _this4._handleCancel = function () {
          _this4._model.undoToCheckpoint(_this4._checkpoint);
        }, _this4._propertyPages = e.propertyPages, _this4._model = e.model, _this4._activePageId = e.activePageId, _this4._onClose = e.onClose, _this4._source = e.source, _this4._checkpoint = _this4._ensureCheckpoint(e.undoCheckPoint), _this4._subscription = _this4._model.model().dataSourceCollectionChanged(), _this4._subscription.subscribe(_assertThisInitialized(_this4), _this4._handleCollectionChanged);
        return _this4;
      }

      _createClass(M, [{
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
          s.render(a.createElement(E, {
            source: this._source,
            onSubmit: this._handleSubmit,
            onClose: this._handleClose,
            onCancel: this._handleCancel,
            pages: this._propertyPages,
            model: this._model,
            activePageId: this._activePageId,
            shouldReturnFocus: null == e ? void 0 : e.shouldReturnFocus
          }), this._container), this._setVisibility(!0), n.emit("drawings_settings_dialog", {
            objectType: "drawing",
            scriptTitle: this._source.title(g.TitleDisplayTarget.StatusLine)
          });
        }
      }, {
        key: "_handleCollectionChanged",
        value: function _handleCollectionChanged() {
          var _this5 = this;

          null === this._timeout && (this._timeout = setTimeout(function () {
            _this5._closeDialogIfSourceIsDeleted(), _this5._timeout = null;
          }));
        }
      }, {
        key: "_closeDialogIfSourceIsDeleted",
        value: function _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) && this._handleClose();
        }
      }, {
        key: "_ensureCheckpoint",
        value: function _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
      }]);

      return M;
    }(w.DialogRenderer);
  },
  68495: function _(e, t, i) {
    "use strict";

    i.d(t, {
      Title: function Title() {
        return h;
      }
    });
    var a = i(50959),
        s = i(97754),
        n = i(31261),
        r = i(9745),
        o = i(21861),
        l = i(68335),
        c = i(51768),
        d = i(33055),
        u = i(53018);

    function h(e) {
      var t = e.isRenaming,
          i = e.onChangeMode,
          h = e.setTitle,
          p = e.defaultTitle,
          m = e.canBeRenamed,
          _ = (0, a.useRef)(null),
          _ref5 = (0, a.useState)(p),
          _ref6 = _slicedToArray(_ref5, 2),
          g = _ref6[0],
          f = _ref6[1],
          _ref7 = (0, a.useState)(p),
          _ref8 = _slicedToArray(_ref7, 2),
          b = _ref8[0],
          v = _ref8[1];

      return (0, a.useEffect)(function () {
        t && _.current && (_.current.focus(), _.current.setSelectionRange(0, g.length));
      }, [t]), a.createElement(a.Fragment, null, a.createElement("div", {
        className: s(u.titleWrap, t && u.hideText)
      }, a.createElement("span", {
        className: u.ellipsis
      }, " ", b), m && a.createElement(a.Fragment, null, a.createElement(r.Icon, {
        className: s(u.editIcon),
        icon: d,
        onClick: function onClick() {
          (0, c.trackEvent)("GUI", "Rename", "Drawing settings"), f(b), i(!0);
        },
        "data-name": "edit",
        "data-role": "button"
      }), a.createElement("div", {
        className: s(u.empty, !t && u.hideEmpty)
      }))), m && a.createElement("div", {
        className: s(!t && u.hideInput),
        "data-disable-drag": !0
      }, a.createElement(n.InputControl, {
        value: g,
        onChange: function onChange(e) {
          f(e.currentTarget.value);
        },
        onBlur: T,
        reference: _,
        onClick: o.preventDefault,
        onKeyDown: function onKeyDown(e) {
          27 === (0, l.hashFromEvent)(e) && (e.preventDefault(), f(p), i(!1));
          13 === (0, l.hashFromEvent)(e) && (e.preventDefault(), T());
        },
        "data-disable-drag": !0,
        stretch: !0
      })));

      function T() {
        "" !== g && (h(g), v(g)), i(!1);
      }
    }
  },
  66512: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      SourcesPropertiesEditorRenderer: function SourcesPropertiesEditorRenderer() {
        return f;
      }
    });
    var a = i(50959),
        s = i(962),
        n = i(85067),
        r = i(44352),
        o = i(86656),
        l = i(50182),
        c = i(48531),
        d = i(37289),
        u = i(68495),
        h = i(14483),
        p = i(38546),
        m = i(31202);

    var _ = r.t(null, void 0, i(37214));

    function g(e) {
      var t = e.propertyPages,
          i = e.onSubmit,
          s = e.onCancel,
          n = e.onClose,
          r = e.title,
          g = e.activeTabId,
          f = e.sources,
          b = e.undoModel,
          v = e.renamable,
          T = g && t.filter(function (e) {
        return e.id === g;
      }).length > 0 ? g : t[0].id,
          S = b.model().lineToolsGroupModel().groupForLineTool(f[0]),
          k = !!(v && S && r && f.every(function (e) {
        var t;
        return (null == S ? void 0 : S.id) === (null === (t = b.model().lineToolsGroupModel().groupForLineTool(e)) || void 0 === t ? void 0 : t.id);
      })),
          _ref9 = (0, a.useState)(T),
          _ref10 = _slicedToArray(_ref9, 2),
          y = _ref10[0],
          z = _ref10[1],
          _ref11 = (0, a.useState)(!1),
          _ref12 = _slicedToArray(_ref11, 2),
          D = _ref12[0],
          I = _ref12[1],
          _ref13 = (0, a.useState)(r || _),
          _ref14 = _slicedToArray(_ref13, 2),
          x = _ref14[0],
          C = _ref14[1],
          L = (0, a.useMemo)(function () {
        return t.map(function (_ref15) {
          var e = _ref15.title,
              t = _ref15.id;
          return {
            label: e,
            id: t,
            dataId: "sources-properties-editor-tabs-".concat(t)
          };
        });
      }, [t]);

      var E = a.createElement(u.Title, {
        isRenaming: D,
        onChangeMode: function onChangeMode(e) {
          I(e);
        },
        setTitle: function setTitle(e) {
          S && (S.setName(e), C(e));
        },
        defaultTitle: x,
        canBeRenamed: k && !h.enabled("widget")
      });
      return a.createElement(l.AdaptiveConfirmDialog, {
        dataName: "sources-properties-editor",
        dataDialogName: x,
        title: E,
        isOpened: !0,
        onSubmit: i,
        onCancel: s,
        onClickOutside: n,
        onClose: n,
        footerLeftRenderer: function footerLeftRenderer() {
          return a.createElement(c.FooterMenu, {
            sources: f,
            chartUndoModel: b
          });
        },
        render: function render() {
          var e = t.find(function (e) {
            return e.id === y;
          });
          return a.createElement(a.Fragment, null, a.createElement(p.DialogTabs, {
            className: m.tabs,
            id: "sources-properties-editor-tabs",
            activeTab: y,
            onChange: z,
            tabs: L
          }), a.createElement(o.TouchScrollContainer, null, a.createElement(d.PropertiesEditorTab, {
            page: e,
            tableKey: y
          })));
        },
        submitOnEnterKey: !1,
        showCloseIcon: !D
      });
    }

    var f =
    /*#__PURE__*/
    function (_n$DialogRenderer) {
      _inherits(f, _n$DialogRenderer);

      function f(e) {
        var _this6;

        _classCallCheck(this, f);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this)), _this6._dataSourceChangedPromise = null, _this6._submitHandler = function () {
          Promise.resolve().then(function () {
            _this6._sources.map(function (e) {
              e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
            });
          }), _this6._close();
        }, _this6._cancelHandler = function () {
          _this6._undoModel.undoToCheckpoint(_this6._undoCheckpoint);
        }, _this6._closeHandler = function () {
          _this6._close();
        }, _this6._dataSourceCollectionChangedHandler = function () {
          null === _this6._dataSourceChangedPromise && (_this6._dataSourceChangedPromise = Promise.resolve().then(function () {
            var e = _this6._undoModel.model();

            _this6._sources.find(function (t) {
              return null === e.dataSourceForId(t.id());
            }) && _this6._close(), _this6._dataSourceChangedPromise = null;
          }));
        }, _this6._sources = e.sources, _this6._propertyPages = e.propertyPages, _this6._undoModel = e.undoModel, _this6._title = e.title, _this6._activeTabId = e.activeTabId, _this6._renamable = e.renamable, _this6._undoCheckpoint = _this6._undoModel.createUndoCheckpoint(), _this6._undoModel.model().dataSourceCollectionChanged().subscribe(_assertThisInitialized(_this6), _this6._dataSourceCollectionChangedHandler);
        return _this6;
      }

      _createClass(f, [{
        key: "destroy",
        value: function destroy() {
          this._close();
        }
      }, {
        key: "show",
        value: function show() {
          this._isVisible() || (this._mount(), this._setVisibility(!0));
        }
      }, {
        key: "hide",
        value: function hide() {
          this._isVisible() && (this._unmount(), this._setVisibility(!1));
        }
      }, {
        key: "_mount",
        value: function _mount() {
          s.render(a.createElement(g, {
            propertyPages: this._propertyPages,
            sources: this._sources,
            undoModel: this._undoModel,
            onSubmit: this._submitHandler,
            onCancel: this._cancelHandler,
            onClose: this._closeHandler,
            title: this._title,
            activeTabId: this._activeTabId,
            renamable: this._renamable
          }), this._container);
        }
      }, {
        key: "_unmount",
        value: function _unmount() {
          s.unmountComponentAtNode(this._container);
        }
      }, {
        key: "_isVisible",
        value: function _isVisible() {
          return this.visible().value();
        }
      }, {
        key: "_close",
        value: function _close() {
          this.hide(), this._undoModel.model().dataSourceCollectionChanged().unsubscribe(this, this._dataSourceCollectionChangedHandler);
        }
      }]);

      return f;
    }(n.DialogRenderer);
  },
  33055: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
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
  67049: function _(e) {
    e.exports = {
      ar: ["تطبيق الإعدادات الافتراضية"],
      ca_ES: ["Aplica configuració predeterminada"],
      cs: "Apply Defaults",
      de: ["Voreinstellungen anwenden"],
      el: "Apply Defaults",
      en: "Apply Defaults",
      es: ["Aplicar configuración predeterminada"],
      fa: "Apply Defaults",
      fr: ["Appliquer les paramètres par défaut"],
      he_IL: ["החל ברירת מחדל"],
      hu_HU: ["Alapértelmezett Alkalmazása"],
      id_ID: ["Terapkan Pengaturan Awal"],
      it: ["Applica predefiniti"],
      ja: ["デフォルトを適用"],
      ko: ["기본설정"],
      ms_MY: ["Guna Pakai Lalai"],
      nl_NL: "Apply Defaults",
      pl: ["Zastosuj domyślne"],
      pt: ["Aplicar padrões"],
      ro: "Apply Defaults",
      ru: ["Применить по умолчанию"],
      sv: ["Tillämpa standardinställningarna"],
      th: ["ตั้งให้เป็นค่าเบื้องต้น"],
      tr: ["Varsayılanları Uygula"],
      vi: ["Áp dụng Nhiều mặc định"],
      zh: ["应用默认"],
      zh_TW: ["套用預設值"]
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
  98938: function _(e) {
    e.exports = {
      ar: ["الإعدادات الإفتراضية"],
      ca_ES: ["Predeterminats"],
      cs: ["Výchozí"],
      de: ["Standardeinstellungen"],
      el: ["Προεπιλογές"],
      en: "Defaults",
      es: ["Impagados"],
      fa: ["پیش‌فرض‌ها"],
      fr: ["Configurations par Défaut"],
      he_IL: ["ברירות מחדל"],
      hu_HU: ["Alapértelmezettek"],
      id_ID: ["Bawaan"],
      it: ["Predefiniti"],
      ja: ["デフォルト"],
      ko: ["기본설정"],
      ms_MY: ["Lalai"],
      nl_NL: ["Standaard"],
      pl: ["Domyślne"],
      pt: ["Padrões"],
      ro: "Defaults",
      ru: ["По умолчанию"],
      sv: ["Standardinställningar"],
      th: ["ค่าเริ่มต้น"],
      tr: ["Varsayılanlar"],
      vi: ["Các mặc định"],
      zh: ["系统预设"],
      zh_TW: ["預設值"]
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
  41610: function _(e) {
    e.exports = {
      ar: ["المزيد"],
      ca_ES: ["Més"],
      cs: ["Více"],
      de: ["Mehr"],
      el: "More",
      en: "More",
      es: ["Más"],
      fa: ["بیشتر"],
      fr: ["Plus"],
      he_IL: ["עוד"],
      hu_HU: ["Több"],
      id_ID: ["Lebih lanjut"],
      it: ["Altro"],
      ja: ["詳細"],
      ko: ["더보기"],
      ms_MY: ["Lebih"],
      nl_NL: ["Meer"],
      pl: ["Więcej"],
      pt: ["Mais"],
      ro: "More",
      ru: ["Ещё"],
      sv: ["Mer"],
      th: ["เพิ่มเติม"],
      tr: ["Daha Fazla"],
      vi: ["Thêm nữa"],
      zh: ["更多"],
      zh_TW: ["更多"]
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
  18229: function _(e) {
    e.exports = {
      ar: ["حفظ كافتراضي"],
      ca_ES: ["Desa per defecte"],
      cs: ["Save As Default"],
      de: ["Als Standard speichern"],
      el: ["Save As Default"],
      en: "Save as default",
      es: ["Guardar por defecto"],
      fa: ["Save As Default"],
      fr: ["Sauvegarder comme Paramètres par Défaut"],
      he_IL: ["שמור כברירת מחדל"],
      hu_HU: ["Mentés Alapértelmezettként"],
      id_ID: ["Simpan Sebagai Bawaan"],
      it: ["Salva come predefinito"],
      ja: ["デフォルトを保存"],
      ko: ["기본설정으로 사용"],
      ms_MY: ["Simpan Sebagai Lalai"],
      nl_NL: ["Save As Default"],
      pl: ["Zapisz jako domyślny"],
      pt: ["Salvar como padrão"],
      ro: ["Save As Default"],
      ru: ["Сделать по умолчанию"],
      sv: ["Spara som standard"],
      th: ["บันทึกเป็นค่าเริ่มต้น"],
      tr: ["Varsayılan olarak sakla"],
      vi: ["Lưu Mặc định"],
      zh: ["保存为默认"],
      zh_TW: ["存為系統預設"]
    };
  },
  37214: function _(e) {
    e.exports = {
      ar: ["الرسومات المختارة"],
      ca_ES: ["Dibuixos seleccionats"],
      cs: "Selected Drawings",
      de: ["Ausgewählte Zeichnungen"],
      el: "Selected Drawings",
      en: "Selected Drawings",
      es: ["Dibujos seleccionados"],
      fa: "Selected Drawings",
      fr: ["Dessins sélectionnés"],
      he_IL: ["שרטוטים נבחרים"],
      hu_HU: "Selected Drawings",
      id_ID: ["Gambar yang dipilih"],
      it: ["Disegni selezionati"],
      ja: ["選択中の描画"],
      ko: ["고른 드로잉"],
      ms_MY: ["Lukisan Dipilih"],
      nl_NL: "Selected Drawings",
      pl: ["Wybrane Rysunki"],
      pt: ["Desenhos selecionados"],
      ro: "Selected Drawings",
      ru: ["Выбранные инструменты рисования"],
      sv: ["Utvalda ritningar"],
      th: ["ภาพวาดที่เลือก"],
      tr: ["Seçilmiş Çizimler"],
      vi: ["Bản vẽ đã chọn"],
      zh: ["已选绘图"],
      zh_TW: ["選定的繪圖"]
    };
  },
  79782: function _(e) {
    e.exports = {
      ar: ["إعادة ضبط الإعدادات"],
      ca_ES: ["Restablir configuració"],
      cs: "Reset settings",
      de: ["Einstellungen zurücksetzen"],
      el: ["Reset Settings"],
      en: "Reset settings",
      es: ["Restablecer configuración"],
      fa: "Reset settings",
      fr: ["Réinitialiser les paramètres"],
      he_IL: ["אפס הגדרות"],
      hu_HU: ["Alapbeállítások Visszaállítása"],
      id_ID: ["Atur Ulang Pengaturan"],
      it: ["Ripristina impostazioni"],
      ja: ["設定をリセット"],
      ko: ["설정초기화"],
      ms_MY: ["Set semula tetapan"],
      nl_NL: "Reset settings",
      pl: ["Resetuj ustawienia"],
      pt: ["Redefinir configurações"],
      ro: ["Reset Settings"],
      ru: ["Сбросить настройки"],
      sv: ["Återställ inställningar"],
      th: ["คืนค่าการตั้งค่า"],
      tr: ["Ayarları Sıfırla"],
      vi: ["Thiết lập lại Cài đặt"],
      zh: ["重置设置"],
      zh_TW: ["重設設定"]
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
  40001: function _(e) {
    e.exports = {
      ar: ["غيّر عنوان {sourceTitle} إلى {newSourceTitle}"],
      ca_ES: ["canvia el títol {sourceTitle} per {newSourceTitle}"],
      cs: "change {sourceTitle} title to {newSourceTitle}",
      de: ["{sourceTitle} zu {newSourceTitle} ändern"],
      el: "change {sourceTitle} title to {newSourceTitle}",
      en: "change {sourceTitle} title to {newSourceTitle}",
      es: ["cambiar el título {sourceTitle} por {newSourceTitle}"],
      fa: "change {sourceTitle} title to {newSourceTitle}",
      fr: ["Remplacer le titre {sourceTitle} par {newSourceTitle}"],
      he_IL: ["שנה את {sourceTitle} כותרת ל- {newSourceTitle}"],
      hu_HU: "change {sourceTitle} title to {newSourceTitle}",
      id_ID: ["Ubah judul {sourceTitle} menjadi {newSourceTitle}"],
      it: ["Cambia titolo da {sourceTitle} a {newSourceTitle}"],
      ja: ["{sourceTitle}のタイトルを{newSourceTitle}に変更"],
      ko: ["{sourceTitle} 타이틀을 {newSourceTitle} 으로 바꾸기"],
      ms_MY: ["Tukar tajuk {sourceTitle} kepada {newSourceTitle}"],
      nl_NL: "change {sourceTitle} title to {newSourceTitle}",
      pl: ["Zmień tytuł {sourceTitle} na {newSourceTitle}."],
      pt: ["Mudar {sourceTitle} título para {newSourceTitle}"],
      ro: ["Change {sourceTitle} title to {newSourceTitle}"],
      ru: ["изменение названия {sourceTitle} на {newSourceTitle}"],
      sv: ["Ändra {sourceTitle} titel till {newSourceTitle}"],
      th: ["เปลี่ยนชื่อ {sourceTitle} ไปเป็น {newSourceTitle}"],
      tr: ["{sourceTitle} başlığını {newSourceTitle} olarak değiştirin"],
      vi: ["Thay đổi {sourceTitle} tiêu đề sang {newSourceTitle}"],
      zh: ["将{sourceTitle}标题更改为{newSourceTitle}"],
      zh_TW: ["將{sourceTitle}標題更改為{newSourceTitle}"]
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