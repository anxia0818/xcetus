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

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[1702], {
  95002: function _(e) {
    e.exports = {
      dialog: "dialog-lmxpCvnK",
      dialogWrapper: "dialogWrapper-lmxpCvnK",
      wrap: "wrap-lmxpCvnK"
    };
  },
  41662: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, {
      ManageDrawingsDialogRenderer: function ManageDrawingsDialogRenderer() {
        return c;
      }
    });
    var s = i(50959),
        a = i(962),
        n = i(44352),
        r = i(16216),
        l = i(98310),
        o = i(35057),
        d = i(23263),
        h = i(95002);

    var p =
    /*#__PURE__*/
    function (_s$PureComponent) {
      _inherits(p, _s$PureComponent);

      function p(e) {
        var _this;

        _classCallCheck(this, p);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this, e)), _this._dialogRef = s.createRef(), _this._renderChildren = function (e) {
          return s.createElement("div", {
            className: h.wrap
          }, s.createElement(d.ManageDrawings, {
            onInitialized: e.centerAndFit,
            chartWidget: _this._activeChartWidget
          }));
        };
        var t = (0, r.service)(l.CHART_WIDGET_COLLECTION_SERVICE);
        _this._activeChartWidget = t.activeChartWidget.value(), _this.state = {
          layoutName: t.metaInfo.name.value()
        };
        return _this;
      }

      _createClass(p, [{
        key: "render",
        value: function render() {
          return s.createElement(o.AdaptivePopupDialog, {
            wrapperClassName: h.dialogWrapper,
            className: h.dialog,
            dataName: "manage-drawings-dialog",
            isOpened: !0,
            onClickOutside: this.props.onClose,
            onClose: this.props.onClose,
            ref: this._dialogRef,
            render: this._renderChildren,
            showSeparator: !0,
            title: n.t(null, void 0, i(72357)),
            subtitle: this.state.layoutName
          });
        }
      }]);

      return p;
    }(s.PureComponent);

    var c =
    /*#__PURE__*/
    function () {
      function c(e) {
        var _this2 = this;

        _classCallCheck(this, c);

        this._container = document.createElement("div"), this._isVisible = !1, this._handleClose = function () {
          _this2._onClose && _this2._onClose(), a.unmountComponentAtNode(_this2._container), _this2._isVisible = !1;
        }, this._onClose = e;
      }

      _createClass(c, [{
        key: "hide",
        value: function hide() {
          this._handleClose();
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._isVisible;
        }
      }, {
        key: "show",
        value: function show() {
          a.render(s.createElement(p, {
            onClose: this._handleClose
          }), this._container), this._isVisible = !0;
        }
      }]);

      return c;
    }();
  }
}]);