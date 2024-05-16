"use strict";

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[4665], {
  65692: function _(t, n, e) {
    var o;
    e.r(n), e.d(n, {
      Twitter: function Twitter() {
        return o;
      }
    }), function (t) {
      function n(t, n) {
        return "cme" === TradingView.widgetCustomer ? n + " from cmegroup.com via @tradingview $" + t : "Check out my #".concat(t, " analysis on @TradingView: ").concat(n);
      }

      function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "about:blank";
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "snapshot_tweet";
        var e = Math.round(screen.width / 2 - 275),
            o = Math.round(screen.height / 2 - 210);
        return window.open(t, n, "scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=550,height=420,\n\t\t\t\tleft=".concat(e, ",top=").concat(o));
      }

      t.getStatus = n, t.shareSnapshot = function (t) {
        var o = e();
        return {
          onFailure: function onFailure() {
            o.close();
          },
          onSuccess: function onSuccess(e) {
            o.location.href = function (t, e) {
              return "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(n(t, function (t) {
                return window.location.protocol + "//" + window.location.host + "/x/" + t + "/";
              }(e)));
            }(t, e);
          }
        };
      }, t.shareSnapshotInstantly = function (t, o) {
        e(function (t, e) {
          return "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(n(t, e));
        }(t, o));
      };
    }(o || (o = {}));
  }
}]);