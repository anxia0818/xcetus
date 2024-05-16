"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5551], {
  71355: function _(i, t, e) {
    e.r(t), e.d(t, {
      FavoriteDrawingsApi: function FavoriteDrawingsApi() {
        return l;
      }
    });
    var s = e(50151),
        a = e(97145),
        o = e(241);

    var l =
    /*#__PURE__*/
    function () {
      function l() {
        _classCallCheck(this, l);

        this._visibility = new a.WatchedValue(!1), this._canBeShownValue = new a.WatchedValue(!1), this._toolbarPromise = null, this._toolbar = null, this._init();
      }

      _createClass(l, [{
        key: "visible",
        value: function visible() {
          return this._visibility.readonly();
        }
      }, {
        key: "canBeShown",
        value: function canBeShown() {
          return this._canBeShownValue.readonly();
        }
      }, {
        key: "show",
        value: function show() {
          (0, s.ensureNotNull)(this._toolbarPromise).then(function (i) {
            i.showAndSaveSettingsValue();
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          null !== this._toolbarPromise && this._toolbarPromise.then(function (i) {
            i.hideAndSaveSettingsValue();
          });
        }
      }, {
        key: "_init",
        value: function _init() {
          var _this = this;

          (0, o.createFavoriteDrawingToolbar)();
          var i = (0, s.ensureNotNull)((0, o.getFavoriteDrawingToolbarPromise)());
          this._toolbarPromise = i.then(function (i) {
            return _this._toolbar = i, _this._visibility.setValue(_this._toolbar.visibility().value()), _this._canBeShownValue.setValue(_this._toolbar.canBeShown().value()), _this._toolbar.visibility().subscribe(function (i) {
              _this._visibility.setValue(i);
            }), _this._toolbar.canBeShown().subscribe(function (i) {
              _this._canBeShownValue.setValue(i);
            }), _this._toolbar;
          });
        }
      }]);

      return l;
    }();
  }
}]);