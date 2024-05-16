"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5093], {
  27267: function _(e, t, s) {
    "use strict";

    function i(e, t, s, i, l) {
      function o(l) {
        if (e > l.timeStamp) return;
        var o = l.target;
        void 0 !== s && null !== t && null !== o && o.ownerDocument === i && (t.contains(o) || s(l));
      }

      return l.click && i.addEventListener("click", o, !1), l.mouseDown && i.addEventListener("mousedown", o, !1), l.touchEnd && i.addEventListener("touchend", o, !1), l.touchStart && i.addEventListener("touchstart", o, !1), function () {
        i.removeEventListener("click", o, !1), i.removeEventListener("mousedown", o, !1), i.removeEventListener("touchend", o, !1), i.removeEventListener("touchstart", o, !1);
      };
    }

    s.d(t, {
      addOutsideEventListener: function addOutsideEventListener() {
        return i;
      }
    });
  },
  967: function _(e, t, s) {
    "use strict";

    var _o, _a;

    s.d(t, {
      weekDaysMiniNames: function weekDaysMiniNames() {
        return a;
      },
      weekDaysShortNames: function weekDaysShortNames() {
        return o;
      }
    });
    var i = s(44352),
        l = s(84917);
    l.Months.JANUARY, i.t(null, void 0, s(26910)), l.Months.FEBRUARY, i.t(null, void 0, s(16467)), l.Months.MARCH, i.t(null, void 0, s(84675)), l.Months.APRIL, i.t(null, void 0, s(97637)), l.Months.MAY, i.t(null, void 0, s(68327)), l.Months.JUNE, i.t(null, void 0, s(49385)), l.Months.JULY, i.t(null, void 0, s(23230)), l.Months.AUGUST, i.t(null, void 0, s(86797)), l.Months.SEPTEMBER, i.t(null, void 0, s(61132)), l.Months.OCTOBER, i.t(null, void 0, s(90784)), l.Months.NOVEMBER, i.t(null, void 0, s(71194)), l.Months.DECEMBER, i.t(null, void 0, s(55669)), l.Months.JANUARY, i.t(null, void 0, s(95425)), l.Months.FEBRUARY, i.t(null, void 0, s(35050)), l.Months.MARCH, i.t(null, void 0, s(51369)), l.Months.APRIL, i.t(null, void 0, s(42762)), l.Months.MAY, i.t(null, {
      context: "short"
    }, s(27991)), l.Months.JUNE, i.t(null, void 0, s(15224)), l.Months.JULY, i.t(null, void 0, s(6215)), l.Months.AUGUST, i.t(null, void 0, s(38465)), l.Months.SEPTEMBER, i.t(null, void 0, s(57902)), l.Months.OCTOBER, i.t(null, void 0, s(73546)), l.Months.NOVEMBER, i.t(null, void 0, s(71230)), l.Months.DECEMBER, i.t(null, void 0, s(92203)), l.WeekDays.SUNDAY, i.t(null, void 0, s(72149)), l.WeekDays.MONDAY, i.t(null, void 0, s(61199)), l.WeekDays.TUESDAY, i.t(null, void 0, s(44979)), l.WeekDays.WEDNESDAY, i.t(null, void 0, s(7147)), l.WeekDays.THURSDAY, i.t(null, void 0, s(7951)), l.WeekDays.FRIDAY, i.t(null, void 0, s(72970)), l.WeekDays.SATURDAY, i.t(null, void 0, s(1144));
    var o = (_o = {}, _defineProperty(_o, l.WeekDays.SUNDAY, i.t(null, void 0, s(86577))), _defineProperty(_o, l.WeekDays.MONDAY, i.t(null, void 0, s(83085))), _defineProperty(_o, l.WeekDays.TUESDAY, i.t(null, void 0, s(94316))), _defineProperty(_o, l.WeekDays.WEDNESDAY, i.t(null, void 0, s(75094))), _defineProperty(_o, l.WeekDays.THURSDAY, i.t(null, void 0, s(9787))), _defineProperty(_o, l.WeekDays.FRIDAY, i.t(null, void 0, s(564))), _defineProperty(_o, l.WeekDays.SATURDAY, i.t(null, void 0, s(36835))), _o),
        a = (_a = {}, _defineProperty(_a, l.WeekDays.SUNDAY, i.t(null, {
      context: "day_of_week"
    }, s(85954))), _defineProperty(_a, l.WeekDays.MONDAY, i.t(null, {
      context: "day_of_week"
    }, s(11268))), _defineProperty(_a, l.WeekDays.TUESDAY, i.t(null, {
      context: "day_of_week"
    }, s(31533))), _defineProperty(_a, l.WeekDays.WEDNESDAY, i.t(null, {
      context: "day_of_week"
    }, s(26230))), _defineProperty(_a, l.WeekDays.THURSDAY, i.t(null, {
      context: "day_of_week"
    }, s(24793))), _defineProperty(_a, l.WeekDays.FRIDAY, i.t(null, {
      context: "day_of_week"
    }, s(19801))), _defineProperty(_a, l.WeekDays.SATURDAY, i.t(null, {
      context: "day_of_week"
    }, s(63331))), _a);
  },
  76266: function _(e, t, s) {
    "use strict";

    var i = s(11417).TVLocalStorage,
        l = s(57898).Delegate;
    s(49483);
    var o = new l();
    TradingView.FeatureToggle = {
      force_prefix: "forcefeaturetoggle.",
      onChanged: new l(),
      enableFeature: function enableFeature(e) {
        i.setItem(this.force_prefix + e, "true"), o.fire(e);
      },
      disableFeature: function disableFeature(e) {
        i.setItem(this.force_prefix + e, "false"), o.fire(e);
      },
      resetFeature: function resetFeature(e) {
        i.removeItem(this.force_prefix + e), o.fire(e);
      },
      onFeaturesStateChanged: function onFeaturesStateChanged() {
        return o;
      }
    }, TradingView.isFeatureEnabled = function (e) {
      var t = "featuretoggle_seed";

      function s(e) {
        try {
          var s = undefined(e + function () {
            if (window.user && window.user.id) return window.user.id;
            var e = i.getItem(t);
            return null !== e || (e = Math.floor(1e6 * Math.random()), i.setItem(t, e)), e;
          }());
          return new DataView(s).getUint32(0, !0) / 4294967296;
        } catch (e) {
          return .5;
        }
      }

      return function (t) {
        return !("local" !== window.environment || !function (e) {
          var t = ["skip_navigation_on_chart", "tick_intervals", "show_reset_chart_only_if_required", "broker_FXCM_token_v2", "broker_TRADESTATION", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "disable_recaptcha_on_signup", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-apple-pay-trial", "braintree-3ds-enabled", "trial_increased_monthly_discounts", "razorpay-card-tvcoins", "razorpay-card-subscriptions", "razorpay-upi-tvcoins", "razorpay-upi-subscriptions", "razorpay-use-recurring-billing-scheduler", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "broker_id_session", "remove_line_tools_from_content", "disable_retry_load_linetools_from_storage", "modular_broker_use_sync_mapper", "do_not_save_shared_line_tools_to_charts", "save_shared_line_tools", "multichart_replay", "chart_storage_with_broker_name", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "enable_toggle_streams_rtmp_url", "hide_ecomonic_events", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "disable_tradestation_country_block", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "minds_widget_enabled", "collapse_pane_buttons_when_connected_to_broker", "enable_new_execution_style", "disable_pushstream_connections_for_anonymous_users", "use_new_paper_status_mapping", "use_staging_verifier", "fxcm_fcl_api", "ally_use_new_sso_url", "ibkr_use_new_init_session_api", "enable_eventsource_pushstream_transport", "enable_eventsource_pushstream_mobile", "ftx_request_server_logger", "ibkr_request_server_logger", "disallow_concurrent_sessions", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "hide_tweet_drawingtool", "RU_SF_disable", "RU_VOR_disable", "enable_monaco_editor", "enable_import_inlay_hints", "enable_pine_editor_status_bar", "enable_pine_logs", "enable_pine_editor_full_source_ids", "enable_new_custom_public_chats", "bottom_panel_track_events", "continuous_front_contract_trading", "vertex-tax-included", "enable_place_order_context_in_instant_mode", "multiple_SoS", "enable_edit_order_context_in_instant_mode", "show_data_problems_in_help_center", "chart_storage_hibernation_delay_60min", "chart_storage_hibernation_delay_10min", "chart_storage_hibernation_delay_5min", "widget-sheriff", "enable_sign_in_popup_with_evercookie", "center_alignment_replay_position", "start_replay_right_after_point_selection", "switching_raf_toast", "trade_button", "order_type_specific_settings_saving", "enable_share_idea_via_twitter", "hide_position_trade_value", "alerts-restrict-offline-clear-requests", "alerts-logos-in-widgets", "enable_qty_calculator_in_replay", "alerts-widgets-use-facade", "alerts-facade-use-permission-proxy", "forexcom_session_v2", "add_financials_for_symbols", "hide_percent_bottom_toolbar", "hide_log_bottom_toolbar", "hide_auto_bottom_toolbar", "remove_lines_submenu", "new_idea_publish_page", "new_script_publish_page", "enable_logo_in_mobile_apps", "show_symbol_logo_in_legend", "fxcm_fcl_server_logger", "minds_comments_enable_for_free_users", "ibkr_new_book_trader_api", "alerts-hide-widget-filters-by-type"],
              s = "[A-Z]+[a-zA-Z0-9_]+",
              i = new RegExp("broker_".concat(s, "_dev"), "g"),
              l = new RegExp("hide_".concat(s, "_on_ios"), "g"),
              o = new RegExp("hide_".concat(s, "_on_android"), "g"),
              a = new RegExp("hide_".concat(s, "_on_mobile_web"), "g");
          return -1 === t.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === i.test(e) && !1 === l.test(e) && !1 === o.test(e) && !1 === a.test(e);
        }(t)) || (!e[t] || -1 !== e[t]) && (!!("true" === i.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + t]) || !("false" === i.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + t]) && !!e[t] && (1 === e[t] || s(t) <= e[t]));
      };
    }(window.featureToggleState || {}), TradingView.FeatureToggle, TradingView.isFeatureEnabled, TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle);
  },
  36279: function _(e, t, s) {
    "use strict";

    var i;
    s.d(t, {
      LogoSize: function LogoSize() {
        return i;
      },
      getLogoUrlResolver: function getLogoUrlResolver() {
        return a;
      }
    }), function (e) {
      e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large";
    }(i || (i = {}));

    var l =
    /*#__PURE__*/
    function () {
      function l() {
        _classCallCheck(this, l);
      }

      _createClass(l, [{
        key: "getSymbolLogoUrl",
        value: function getSymbolLogoUrl(e) {
          return e;
        }
      }, {
        key: "getCountryFlagUrl",
        value: function getCountryFlagUrl() {
          return "";
        }
      }, {
        key: "getCryptoLogoUrl",
        value: function getCryptoLogoUrl(e) {
          return e;
        }
      }, {
        key: "getProviderLogoUrl",
        value: function getProviderLogoUrl(e) {
          return e;
        }
      }]);

      return l;
    }();

    var o;

    function a() {
      return o || (o = new l()), o;
    }
  },
  82708: function _(e, t, s) {
    "use strict";

    s.d(t, {
      safeShortName: function safeShortName() {
        return l;
      }
    });
    var i = s(79982);

    function l(e) {
      try {
        return (0, i.shortName)(e);
      } catch (t) {
        return e;
      }
    }
  },
  93251: function _(e, t, s) {
    "use strict";

    s.d(t, {
      removeUsdFromCryptoPairLogos: function removeUsdFromCryptoPairLogos() {
        return a;
      },
      resolveLogoUrls: function resolveLogoUrls() {
        return o;
      }
    });
    var i = s(36279);
    var l = (0, i.getLogoUrlResolver)();

    function o(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.LogoSize.Medium;
      var s = e.logoid,
          o = e["base-currency-logoid"],
          a = e["currency-logoid"],
          n = s && l.getSymbolLogoUrl(s, t);
      if (n) return [n];
      var r = o && l.getSymbolLogoUrl(o, t),
          d = a && l.getSymbolLogoUrl(a, t);
      return r && d ? [r, d] : r ? [r] : d ? [d] : [];
    }

    function a(e) {
      return 2 !== e.length ? e : function (e) {
        return e.some(function (e) {
          return n(e);
        });
      }(e) && !function (e) {
        return e.some(function (e) {
          return e.includes("country") && !n(e);
        });
      }(e) ? e.filter(function (e) {
        return !n(e);
      }) : e;
    }

    function n(e) {
      return !1;
    }
  },
  44747: function _(e, t, s) {
    "use strict";

    s.d(t, {
      getBlockStyleClasses: function getBlockStyleClasses() {
        return l;
      },
      getLogoStyleClasses: function getLogoStyleClasses() {
        return o;
      }
    });
    var i = s(97754);

    function l(e, t) {
      return i("tv-circle-logo-pair", "tv-circle-logo-pair--".concat(e), t);
    }

    function o(e, t) {
      return i("tv-circle-logo-pair__logo", "tv-circle-logo-pair__logo--".concat(e), !t && "tv-circle-logo-pair__logo-empty");
    }
  },
  58492: function _(e, t, s) {
    "use strict";

    s.d(t, {
      getStyleClasses: function getStyleClasses() {
        return l;
      },
      isCircleLogoWithUrlProps: function isCircleLogoWithUrlProps() {
        return o;
      }
    });
    var i = s(97754);

    function l(e, t) {
      return i("tv-circle-logo", "tv-circle-logo--".concat(e), t);
    }

    function o(e) {
      return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length;
    }
  },
  77975: function _(e, t, s) {
    "use strict";

    s.d(t, {
      useWatchedValueReadonly: function useWatchedValueReadonly() {
        return l;
      }
    });
    var i = s(50959);

    var l = function l(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      var s = "watchedValue" in e ? e.watchedValue : void 0,
          l = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          _ref = (0, i.useState)(s ? s.value() : l),
          _ref2 = _slicedToArray(_ref, 2),
          o = _ref2[0],
          a = _ref2[1];

      return (t ? i.useLayoutEffect : i.useEffect)(function () {
        if (s) {
          a(s.value());

          var _e2 = function _e2(e) {
            return a(e);
          };

          return s.subscribe(_e2), function () {
            return s.unsubscribe(_e2);
          };
        }

        return function () {};
      }, [s]), o;
    };
  },
  23709: function _(e) {
    e.exports = {};
  },
  83314: function _(e) {
    e.exports = {
      wrapper: "wrapper-hPiAkrn3",
      timezone: "timezone-hPiAkrn3",
      sessionDayWrapper: "sessionDayWrapper-hPiAkrn3",
      nowWrapper: "nowWrapper-hPiAkrn3",
      now: "now-hPiAkrn3",
      sessionDay: "sessionDay-hPiAkrn3",
      weekDay: "weekDay-hPiAkrn3",
      sessionDaySegments: "sessionDaySegments-hPiAkrn3",
      timeMarkWrapper: "timeMarkWrapper-hPiAkrn3",
      timeMarkSegment: "timeMarkSegment-hPiAkrn3",
      timeMark: "timeMark-hPiAkrn3",
      timeMarkSegmentAlignByEnds: "timeMarkSegmentAlignByEnds-hPiAkrn3",
      segment: "segment-hPiAkrn3",
      small: "small-hPiAkrn3",
      start: "start-hPiAkrn3",
      end: "end-hPiAkrn3",
      active: "active-hPiAkrn3",
      green: "green-hPiAkrn3",
      orange: "orange-hPiAkrn3",
      blue: "blue-hPiAkrn3",
      gray: "gray-hPiAkrn3",
      tooltip: "tooltip-hPiAkrn3",
      time: "time-hPiAkrn3"
    };
  },
  77539: function _(e) {
    e.exports = {
      marginlegendhoriz: "4px",
      legend: "legend-l31H9iuA",
      item: "item-l31H9iuA",
      withAction: "withAction-l31H9iuA",
      selected: "selected-l31H9iuA",
      last: "last-l31H9iuA",
      text: "text-l31H9iuA",
      noWrapWrapper: "noWrapWrapper-l31H9iuA",
      noWrap: "noWrap-l31H9iuA",
      series: "series-l31H9iuA",
      valuesAdditionalWrapper: "valuesAdditionalWrapper-l31H9iuA",
      valueItem: "valueItem-l31H9iuA",
      valueTitle: "valueTitle-l31H9iuA",
      valueValue: "valueValue-l31H9iuA",
      hideUniportantValueItems: "hideUniportantValueItems-l31H9iuA",
      unimportant: "unimportant-l31H9iuA",
      valuesWrapper: "valuesWrapper-l31H9iuA",
      wrappable: "wrappable-l31H9iuA",
      directionColumn: "directionColumn-l31H9iuA",
      titleWrapper: "titleWrapper-l31H9iuA",
      logoAndTitlesWrapper: "logoAndTitlesWrapper-l31H9iuA",
      button: "button-l31H9iuA",
      statusesWrapper: "statusesWrapper-l31H9iuA",
      logoWrapper: "logoWrapper-l31H9iuA",
      buttonsWrapper: "buttonsWrapper-l31H9iuA",
      buttons: "buttons-l31H9iuA",
      statusesWrapper__statuses: "statusesWrapper__statuses-l31H9iuA",
      pairContainer: "pairContainer-l31H9iuA",
      logo: "logo-l31H9iuA",
      hidden: "hidden-l31H9iuA",
      noActions: "noActions-l31H9iuA",
      title: "title-l31H9iuA",
      intervalTitle: "intervalTitle-l31H9iuA",
      disabled: "disabled-l31H9iuA",
      disabledOnInterval: "disabledOnInterval-l31H9iuA",
      withDot: "withDot-l31H9iuA",
      withCustomTextColor: "withCustomTextColor-l31H9iuA",
      study: "study-l31H9iuA",
      mainTitle: "mainTitle-l31H9iuA",
      descTitle: "descTitle-l31H9iuA",
      hideValues: "hideValues-l31H9iuA",
      has5Buttons: "has5Buttons-l31H9iuA",
      stayInHoveredMode: "stayInHoveredMode-l31H9iuA",
      withTail: "withTail-l31H9iuA",
      loading: "loading-l31H9iuA",
      loader: "loader-l31H9iuA",
      providerTitle: "providerTitle-l31H9iuA",
      exchangeTitle: "exchangeTitle-l31H9iuA",
      styleTitle: "styleTitle-l31H9iuA",
      minHideIntervalTitle: "minHideIntervalTitle-l31H9iuA",
      microHideIntervalTitle: "microHideIntervalTitle-l31H9iuA",
      hideExchangeProviderTitles: "hideExchangeProviderTitles-l31H9iuA",
      flagged: "flagged-l31H9iuA",
      medium: "medium-l31H9iuA",
      minimized: "minimized-l31H9iuA",
      micro: "micro-l31H9iuA",
      linked: "linked-l31H9iuA",
      onlyOneButtonCanBeStick: "onlyOneButtonCanBeStick-l31H9iuA",
      touchMode: "touchMode-l31H9iuA",
      buttonIcon: "buttonIcon-l31H9iuA",
      flag: "flag-l31H9iuA",
      invisibleHover: "invisibleHover-l31H9iuA",
      eye: "eye-l31H9iuA",
      eyeLoading: "eyeLoading-l31H9iuA",
      "eye-animation": "eye-animation-l31H9iuA",
      linking: "linking-l31H9iuA",
      intervalEye: "intervalEye-l31H9iuA",
      markerContainer: "markerContainer-l31H9iuA",
      flagWrapper: "flagWrapper-l31H9iuA",
      sourcesWrapper: "sourcesWrapper-l31H9iuA",
      legendMainSourceWrapper: "legendMainSourceWrapper-l31H9iuA",
      sources: "sources-l31H9iuA",
      toggler: "toggler-l31H9iuA pane-button-e6PF69Df",
      onlyOneSourceShown: "onlyOneSourceShown-l31H9iuA",
      counter: "counter-l31H9iuA",
      iconArrow: "iconArrow-l31H9iuA",
      objectTree: "objectTree-l31H9iuA",
      closed: "closed-l31H9iuA",
      objectsTreeCanBeShown: "objectsTreeCanBeShown-l31H9iuA"
    };
  },
  34362: function _(e) {
    e.exports = {
      loader: "loader-_7n3rLPY",
      loaderItem: "loaderItem-_7n3rLPY",
      "loader-animation": "loader-animation-_7n3rLPY",
      touchMode: "touchMode-_7n3rLPY"
    };
  },
  94815: function _(e) {
    e.exports = {
      "css-value-pane-controls-padding-left": "1px",
      "css-value-pane-controls-padding-right": "4px",
      css_value_pane_controls_margin_top: "4",
      css_value_pane_controls_button_size: "22",
      css_value_pane_controls_button_touch_size: "22",
      paneControls: "paneControls-JQv8nO8e",
      hidden: "hidden-JQv8nO8e",
      forceHidden: "forceHidden-JQv8nO8e",
      button: "button-JQv8nO8e pane-button-e6PF69Df",
      buttonIcon: "buttonIcon-JQv8nO8e",
      minimize: "minimize-JQv8nO8e",
      restore: "restore-JQv8nO8e",
      newButton: "newButton-JQv8nO8e",
      touchMode: "touchMode-JQv8nO8e",
      maximize: "maximize-JQv8nO8e",
      collapse: "collapse-JQv8nO8e",
      "maximize-animation-up-bracket": "maximize-animation-up-bracket-JQv8nO8e",
      "maximize-animation-down-bracket": "maximize-animation-down-bracket-JQv8nO8e",
      "minimize-animation-up-bracket": "minimize-animation-up-bracket-JQv8nO8e",
      "minimize-animation-down-bracket": "minimize-animation-down-bracket-JQv8nO8e",
      up: "up-JQv8nO8e",
      "up-animation": "up-animation-JQv8nO8e",
      down: "down-JQv8nO8e",
      "down-animation": "down-animation-JQv8nO8e",
      buttonsWrapper: "buttonsWrapper-JQv8nO8e"
    };
  },
  7488: function _(e) {
    e.exports = {
      blockHidden: "blockHidden-e6PF69Df",
      "pane-button": "pane-button-e6PF69Df"
    };
  },
  64123: function _(e) {
    e.exports = {
      "css-value-small-size": "18px",
      "css-value-medium-size": "22px",
      "css-value-large-size": "28px",
      "css-value-border-radius-small-size": "9px",
      "css-value-border-radius-medium-size": "11px",
      "css-value-border-radius-large-size": "8px",
      statuses: "statuses-Lgtz1OtS",
      statusItem: "statusItem-Lgtz1OtS",
      statuses_hidden: "statuses_hidden-Lgtz1OtS",
      small: "small-Lgtz1OtS",
      medium: "medium-Lgtz1OtS",
      large: "large-Lgtz1OtS",
      blinking: "blinking-Lgtz1OtS",
      "blinking-animation": "blinking-animation-Lgtz1OtS",
      marketStatusOpen: "marketStatusOpen-Lgtz1OtS",
      marketStatusClose: "marketStatusClose-Lgtz1OtS",
      marketStatusPre: "marketStatusPre-Lgtz1OtS",
      marketStatusPost: "marketStatusPost-Lgtz1OtS",
      marketStatusHoliday: "marketStatusHoliday-Lgtz1OtS",
      marketStatusExpired: "marketStatusExpired-Lgtz1OtS",
      marketStatusCustom: "marketStatusCustom-Lgtz1OtS",
      invalidSymbol: "invalidSymbol-Lgtz1OtS",
      replayModeAutoPlay: "replayModeAutoPlay-Lgtz1OtS",
      replayModePause: "replayModePause-Lgtz1OtS",
      replayModePointSelect: "replayModePointSelect-Lgtz1OtS",
      "blinking-animation-custom": "blinking-animation-custom-Lgtz1OtS",
      notAccurate: "notAccurate-Lgtz1OtS",
      delay: "delay-Lgtz1OtS",
      eod: "eod-Lgtz1OtS",
      dataProblemHigh: "dataProblemHigh-Lgtz1OtS",
      dataProblemLow: "dataProblemLow-Lgtz1OtS"
    };
  },
  33283: function _(e, t, s) {
    "use strict";

    s.r(t), s.d(t, {
      ControlBarNavigation: function ControlBarNavigation() {
        return Y;
      }
    });

    var i = s(50151),
        l = s(44352),
        o = s(32563),
        a = s(14483),
        n = s(78159),
        r = s(38223),
        d = s(70027),
        u = s(61814),
        h = s(49483),
        c = s(68335),
        _ = (s(51768), s(23317)),
        p = s(89612),
        m = s(77576),
        g = s(93724),
        v = s(91986),
        b = s(76996),
        w = s(78529),
        y = s(50119),
        S = s(62884),
        f = s(50662),
        M = s(42205);

    s(23709);
    var C = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
        E = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
        V = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
        k = (0, u.hotKeySerialize)({
      keys: [C, "R"],
      text: "{0} + {1}"
    }),
        A = (0, u.hotKeySerialize)({
      keys: [C, "Click", C, "Enter"],
      text: "{0} + {1}, {2} + {3}"
    }),
        L = (0, u.hotKeySerialize)({
      keys: [y],
      text: "{0}"
    }),
        W = (0, u.hotKeySerialize)({
      keys: [S],
      text: "{0}"
    }),
        T = (0, u.hotKeySerialize)({
      keys: [V, f],
      text: "{0} + {1}"
    }),
        x = (0, u.hotKeySerialize)({
      keys: [V, M],
      text: "{0} + {1}"
    }),
        H = (0, u.hotKeySerialize)({
      keys: [C, E, S],
      text: "{0} + {1} + {2}"
    }),
        D = l.t(null, void 0, s(47602)),
        P = l.t(null, void 0, s(61311)),
        B = l.t(null, void 0, s(56470)),
        I = l.t(null, void 0, s(48293)),
        z = l.t(null, void 0, s(40653)),
        N = l.t(null, void 0, s(35809)),
        O = l.t(null, void 0, s(34301)),
        F = l.t(null, void 0, s(26721)),
        R = "<div class=\"control-bar-wrapper\">\n\t<div class=\"control-bar control-bar--hidden\">\n\t\t<div class=\"control-bar__group js-btn-group js-btn-group-zoom\">\n\t\t\t<div class=\"control-bar__btn control-bar__btn--zoom-out apply-common-tooltip\" title=\"".concat(D, "\" data-tooltip-hotkey=\"").concat(x, "\">\n\t\t\t\t").concat(_, "\n\t\t\t</div>\n\t\t\t<div class=\"control-bar__btn control-bar__btn--zoom-in apply-common-tooltip\" title=\"").concat(P, "\" data-tooltip-hotkey=\"").concat(T, "\">\n\t\t\t\t").concat(m, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"control-bar__group js-btn-group js-btn-group-maximize\">\n\t\t\t<div class=\"control-bar__btn control-bar__btn--maximize apply-common-tooltip\" title=\"").concat(B, "\" data-tooltip-hotkey=\"").concat(A, "\">\n\t\t\t\t").concat(v, "\n\t\t\t</div>\n\t\t\t<div class=\"control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip\" title=\"").concat(I, "\" data-tooltip-hotkey=\"").concat(A, "\">\n\t\t\t\t").concat(b, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"control-bar__group js-btn-group js-btn-group-scroll\">\n\t\t\t<div class=\"control-bar__btn control-bar__btn--move-left apply-common-tooltip\" title=\"").concat(z, "\" data-tooltip-hotkey=\"").concat(L, "\">\n\t\t\t\t").concat(p, "\n\t\t\t</div>\n\t\t\t<div class=\"control-bar__btn control-bar__btn--move-right apply-common-tooltip\" title=\"").concat(N, "\" data-tooltip-hotkey=\"").concat(W, "\">\n\t\t\t\t").concat(p, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"control-bar__group js-btn-group js-btn-group-reset-scale\">\n\t\t\t<div class=\"control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset\" title=\"").concat(O, "\" data-tooltip-hotkey=\"").concat(k, "\">\n\t\t\t\t").concat(g, "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"),
        U = "<div class=\"control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip\" title=\"".concat(F, "\" data-tooltip-hotkey=\"").concat(H, "\">\n\t").concat(w, "\n</div>"),
        G = h.CheckMobile.any(),
        $ = "control-bar__btn--btn-hidden",
        j = {
      zoomInOut: !0,
      maximize: !0,
      scrollLeftRight: !0,
      resetScale: !0,
      goToRealtime: !0
    };

    var Y =
    /*#__PURE__*/
    function () {
      function Y(e, t, s) {
        _classCallCheck(this, Y);

        this._widget = (0, i.ensureNotNull)((0, d.parseHtml)(R).querySelector(".control-bar-wrapper")), this._controlBar = (0, i.ensureNotNull)(this._widget.querySelector(".control-bar")), this._back = (0, i.ensureNotNull)((0, d.parseHtml)(U).querySelector(".control-bar__btn--back-present")), this._btnGroups = Array.from(this._controlBar.querySelectorAll(".js-btn-group")), this._backButtonVisible = !1, this._boundMouseHandler = null, this._chartModel = null, this._checkIntervalId = 0, this._controlBarVisible = !1, this._priceAxisChanged = null, this._resetScalesAvailable = null, this._priceAxisName = "right", this._rafId = 0, this._visibilityTypeProperty = null, this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(this), this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(this), this._paneWidth = 0, this._leftPriceScaleWidth = 0, this._rightPriceScaleWidth = 0, this._chart = e, this._parent = t, this._options = Object.assign({}, j, s), this._visibilityPrioritizedGroups = this._initGroupDescriptions(), this._init(), this._initHandlers(), this.updatePosition();
      }

      _createClass(Y, [{
        key: "destroy",
        value: function destroy() {
          var e;
          null !== this._visibilityTypeProperty && (this._visibilityTypeProperty.unsubscribe(this, this._onVisibilityTypeChange), this._visibilityTypeProperty = null), null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null), null !== this._priceAxisChanged && (this._priceAxisChanged.unsubscribe(this, this._updateBackBtnPosition), this._priceAxisChanged = null), clearInterval(this._checkIntervalId), null === (e = this._resetScalesAvailable) || void 0 === e || e.destroy();

          var t = this._chart.getResizerDetacher();

          t.fullscreenable.unsubscribe(this._boundUpdateMaximizeButtonsVisibility), t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons), this._chart = null;
        }
      }, {
        key: "updatePosition",
        value: function updatePosition() {
          var e = this._chart.paneWidgets();

          if (0 === e.length) return;
          this._paneWidth = e[0].width(), this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("left"), this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("right");

          var t = this._chart.timeAxisHeight() + this._bottomMargin();

          this._widget.style.bottom = "".concat(t, "px"), this._back.style.bottom = "".concat(t, "px"), this._updateBtnGroupVisibility();
        }
      }, {
        key: "_bottomMargin",
        value: function _bottomMargin() {
          var e;

          var t = this._chart.paneWidgets();

          return (null !== (e = this._chart.maximizedPaneWidget()) && void 0 !== e ? e : t[t.length - 1]).containsMainSeries() ? 32 : 5;
        }
      }, {
        key: "_init",
        value: function _init() {
          var _this = this;

          if (h.CheckMobile.any()) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this._btnGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _e3 = _step.value;

                _e3.classList.add("js-hidden");
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
          }

          this._buttons = {
            zoomIn: this._widget.querySelector(".control-bar__btn--zoom-in"),
            zoomOut: this._widget.querySelector(".control-bar__btn--zoom-out"),
            moveLeft: this._widget.querySelector(".control-bar__btn--move-left"),
            moveRight: this._widget.querySelector(".control-bar__btn--move-right"),
            turn: this._widget.querySelector(".control-bar__btn--turn-button"),
            maximize: this._widget.querySelector(".control-bar__btn--maximize"),
            minimize: this._widget.querySelector(".control-bar__btn--minimize")
          }, this._initVisibility(), this._parent.appendChild(this._widget), this._parent.appendChild(this._back), this._backButtonVisible = !1, this._priceAxisName = (0, r.isRtl)() ? "left" : "right", this._chart.withModel(this, function () {
            _this._chartModel = _this._chart.model(), _this._priceAxisChanged = _this._chart.getPriceAxisWidthChangedByName(_this._priceAxisName), _this._priceAxisChanged.subscribe(_this, _this._updateBackBtnPosition), _this._resetScalesAvailable = _this._chartModel.model().resetScalesAvailable().spawn(), _this._resetScalesAvailable.subscribe(_this._updateResetScalesButtonVisibility.bind(_this), {
              callWithLast: !0
            });

            var e = _this._chart.getResizerDetacher();

            e.fullscreenable.subscribe(_this._boundUpdateMaximizeButtonsVisibility), e.fullscreen.subscribe(_this._boundToggleFullscreenButtons), _this._updateMaximizeButtonsVisibility(), _this._updateBackBtnPosition(), _this._back.addEventListener("click", function () {
              null !== _this._chartModel && _this._chartModel.timeScale().scrollToRealtime(!0);
            }), _this._checkIntervalId = setInterval(function () {
              return _this._check();
            }, 1e3);
          });
        }
      }, {
        key: "_initHandlers",
        value: function _initHandlers() {
          var _this2 = this;

          var e = o.mobiletouch ? "touchstart" : "mousedown",
              t = o.mobiletouch ? ["touchend"] : ["mouseup", "mouseout"];
          this._buttons.moveLeft.addEventListener(e, function (e) {
            e.preventDefault(), _this2._chart.scrollHelper().moveByBar(1), _this2._trackEvent("Move Left");
          }), this._buttons.moveRight.addEventListener(e, function (e) {
            e.preventDefault(), _this2._chart.scrollHelper().moveByBar(-1), _this2._trackEvent("Move Right");
          });

          for (var _i2 = 0, _t2 = t; _i2 < _t2.length; _i2++) {
            var _e4 = _t2[_i2];
            this._buttons.moveLeft.addEventListener(_e4, function () {
              return _this2._chart.scrollHelper().stopMoveByBar();
            }), this._buttons.moveRight.addEventListener(_e4, function () {
              return _this2._chart.scrollHelper().stopMoveByBar();
            });
          }

          this._buttons.turn.addEventListener("click", function (e) {
            e.preventDefault(), _this2._chart.GUIResetScales(), _this2._trackEvent("Reset to Default Settings");
          }), this._buttons.zoomOut.addEventListener("click", function (e) {
            e.preventDefault(), null !== _this2._chartModel && _this2._chartModel.zoomOut(), _this2._trackEvent("Zoom Out");
          }), this._buttons.zoomIn.addEventListener("click", function (e) {
            e.preventDefault(), null !== _this2._chartModel && _this2._chartModel.zoomIn(), _this2._trackEvent("Zoom In");
          }), this._buttons.maximize.addEventListener("click", function (e) {
            e.preventDefault(), _this2._chart.setActive(!0), _this2._chart.getResizerDetacher().requestFullscreen(), _this2._trackEvent(" Maximize Chart");
          }), this._buttons.minimize.addEventListener("click", function (e) {
            e.preventDefault(), _this2._chart.getResizerDetacher().exitFullscreen(), _this2._trackEvent(" Restore Chart");
          });

          var s = function s(e) {
            return e.addEventListener("contextmenu", function (e) {
              return e.preventDefault();
            });
          };

          s(this._buttons.moveLeft), s(this._buttons.moveRight), s(this._buttons.turn), s(this._buttons.zoomOut), s(this._buttons.zoomIn), s(this._buttons.minimize), s(this._buttons.maximize);
        }
      }, {
        key: "_initGroupDescriptions",
        value: function _initGroupDescriptions() {
          var _this3 = this;

          return [{
            shouldBeHiddenOnMobile: !1,
            available: this._isMaximizeButtonAvailable.bind(this),
            className: "js-btn-group-maximize",
            element: this._getBtnGroup("js-btn-group-maximize"),
            totalWidth: 50
          }, {
            shouldBeHiddenOnMobile: !1,
            available: function available() {
              return _this3._options.resetScale;
            },
            className: "js-btn-group-reset-scale",
            element: this._getBtnGroup("js-btn-group-reset-scale"),
            totalWidth: 50
          }, {
            shouldBeHiddenOnMobile: !a.enabled("show_zoom_and_move_buttons_on_touch"),
            available: function available() {
              return _this3._options.zoomInOut;
            },
            className: "js-btn-group-zoom",
            element: this._getBtnGroup("js-btn-group-zoom"),
            totalWidth: 86
          }, {
            shouldBeHiddenOnMobile: !a.enabled("show_zoom_and_move_buttons_on_touch"),
            available: function available() {
              return _this3._options.scrollLeftRight;
            },
            className: "js-btn-group-scroll",
            element: this._getBtnGroup("js-btn-group-scroll"),
            totalWidth: 86
          }];
        }
      }, {
        key: "_check",
        value: function _check() {
          if (null === this._chartModel || !this._options.goToRealtime) return;
          var e = this._chartModel.timeScale().rightOffset() < 0;
          e !== this._backButtonVisible && (this._backButtonVisible = e, this._back.classList.toggle($, !this._backButtonVisible));
        }
      }, {
        key: "_initVisibility",
        value: function _initVisibility() {
          this._visibilityTypeProperty = (0, n.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, this._onVisibilityTypeChange), this._onVisibilityTypeChange();
        }
      }, {
        key: "_onVisibilityTypeChange",
        value: function _onVisibilityTypeChange() {
          if (null === this._visibilityTypeProperty) return;

          var e = this._visibilityTypeProperty.value();

          "alwaysOn" === e || "alwaysOff" === e ? (this._controlBarVisible = "alwaysOn" === e, null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null)) : (this._controlBarVisible = !1, this._boundMouseHandler || (this._boundMouseHandler = this._visibilityMouseHandler.bind(this), this._parent.addEventListener("mousemove", this._boundMouseHandler), this._parent.addEventListener("mouseleave", this._boundMouseHandler))), this._updateControlBarVisibility();
        }
      }, {
        key: "_visibilityMouseHandler",
        value: function _visibilityMouseHandler(e) {
          if (e.buttons) return;
          if (null !== this._chartModel && this._chartModel.lineBeingCreated()) return;
          var t = "mouseleave" !== e.type;

          if ("mousemove" === e.type) {
            var _s2 = this._widget.getBoundingClientRect(),
                _i3 = 100 - this._bottomMargin();

            t = e.clientX >= _s2.left - 100 && e.clientX <= _s2.right + 100 && e.clientY >= _s2.top - _i3 && e.clientY <= _s2.bottom + 100;
          }

          this._controlBarVisible !== t && (this._controlBarVisible = t, null === this._rafId && (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(this._updateControlBarVisibility.bind(this))));
        }
      }, {
        key: "_updateControlBarVisibility",
        value: function _updateControlBarVisibility() {
          this._rafId = null, this._controlBar.classList.toggle("control-bar--hidden", !this._controlBarVisible);
        }
      }, {
        key: "_updateBackBtnPosition",
        value: function _updateBackBtnPosition() {
          if ("left" === this._priceAxisName || "right" === this._priceAxisName) {
            var _e5 = this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14;

            _e5 && (this._back.style.marginRight = "".concat(_e5, "px"));
          }
        }
      }, {
        key: "_updateBtnGroupVisibility",
        value: function _updateBtnGroupVisibility() {
          var e = this._leftPriceScaleWidth + this._paneWidth,
              t = (e + this._rightPriceScaleWidth) / 2;
          var s = 2 * Math.min(e - t, t - this._leftPriceScaleWidth) - 50 - 50,
              i = !1;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._visibilityPrioritizedGroups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e6 = _step2.value;
              _e6.enoughSpaceForGroup = !1;
              _e6.available() && (!G || !_e6.shouldBeHiddenOnMobile) && (s -= _e6.totalWidth, _e6.enoughSpaceForGroup = s >= 0 && !i, i = i || !_e6.enoughSpaceForGroup), !_e6.enoughSpaceForGroup !== _e6.element.classList.contains("js-hidden") && _e6.element.classList.toggle("js-hidden", !_e6.enoughSpaceForGroup);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this._updateControlBarPosition();
        }
      }, {
        key: "_getBtnGroup",
        value: function _getBtnGroup(e) {
          return (0, i.ensureDefined)(this._btnGroups.find(function (t) {
            return t.classList.contains(e);
          }));
        }
      }, {
        key: "_updateControlBarPosition",
        value: function _updateControlBarPosition() {
          var e = this._visibilityPrioritizedGroups.reduce(function (e, t) {
            return e + (t.enoughSpaceForGroup ? t.totalWidth : 0);
          }, 0),
              t = (this._paneWidth + this._leftPriceScaleWidth + this._rightPriceScaleWidth) / 2 - Math.ceil(e / 2);

          this._widget.style.left = "".concat(t, "px");
        }
      }, {
        key: "_updateResetScalesButtonVisibility",
        value: function _updateResetScalesButtonVisibility() {
          if (null === this._chartModel) return;

          var e = this._chartModel.model().resetScalesAvailable().value();

          this._buttons.turn.classList.toggle($, !e);
        }
      }, {
        key: "_updateMaximizeButtonsVisibility",
        value: function _updateMaximizeButtonsVisibility() {
          this._updateBtnGroupVisibility();
        }
      }, {
        key: "_toggleFullscreenButtons",
        value: function _toggleFullscreenButtons() {
          var e = this._chart.inFullscreen();

          this._buttons.maximize.classList.toggle("js-hidden", e), this._buttons.minimize.classList.toggle("js-hidden", !e);
        }
      }, {
        key: "_isMaximizeButtonAvailable",
        value: function _isMaximizeButtonAvailable() {
          return this._options.maximize, !1;
        }
      }, {
        key: "_trackEvent",
        value: function _trackEvent(e) {
          0;
        }
      }]);

      return Y;
    }();
  },
  85109: function _(e, t, s) {
    "use strict";

    var _Bt;

    s.r(t), s.d(t, {
      LegendWidget: function LegendWidget() {
        return Ml;
      }
    });

    var i = s(27714),
        l = s(43370),
        o = s(50151),
        a = s(97145),
        n = s(1722),
        r = s(24377),
        d = s(14483),
        u = s(49483),
        h = s(65616),
        c = s(59255),
        _ = s(34926),
        p = s(42184),
        m = s(80007),
        g = s(7488);

    var v = s(34362);

    var b =
    /*#__PURE__*/
    function (_ref3) {
      _inherits(b, _ref3);

      function b() {
        _classCallCheck(this, b);

        return _possibleConstructorReturn(this, _getPrototypeOf(b).apply(this, arguments));
      }

      _createClass(b, [{
        key: "_renderLoading",
        value: function _renderLoading(e) {
          _get(_getPrototypeOf(b.prototype), "_renderLoading", this).call(this, e), this._loadingEl.innerHTML = "\n\t\t\t<span class=\"".concat(v.loaderItem, "\"></span>\n\t\t\t<span class=\"").concat(v.loaderItem, "\"></span>\n\t\t\t<span class=\"").concat(v.loaderItem, "\"></span>\n\t\t"), this._loadingEl.classList.add(v.loader);
        }
      }]);

      return b;
    }(
    /*#__PURE__*/
    function () {
      function _class(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, _class);

        this._loadingEl = document.createElement("span"), this._renderLoading(t), this.toggleVisibility(!1), e.appendChild(this._loadingEl);
      }

      _createClass(_class, [{
        key: "toggleVisibility",
        value: function toggleVisibility(e) {
          this._loadingEl.classList.toggle(g.blockHidden, !e);
        }
      }, {
        key: "_renderLoading",
        value: function _renderLoading(e) {
          var t = e.className;
          t && this._loadingEl.classList.add(t);
        }
      }]);

      return _class;
    }());

    function w(e, t) {
      null === e.firstChild ? e.textContent = t : e.firstChild.nodeValue = t;
    }

    var y = s(77539);
    var S = u.CheckMobile.any();

    var f =
    /*#__PURE__*/
    function () {
      function f(e, t, s) {
        var _this4 = this;

        _classCallCheck(this, f);

        this._el = null, this._firstBlockWrapper = null, this._logoAndTitleParentEl = null, this._titleElements = [], this._valuesParentEl = null, this._valuesAdditionalWrapperEl = null, this._valuesElements = [], this._actionsParentEl = null, this._actionAdditionalWrapperEl = null, this._stayInHoveredMode = !1, this._mode = 4, this._statusesWrapper = null, this._resizeObserver = null, this._hideInvisibleHover = null, this._hideValues = null, this._allButtonsWidth = null, this._lastStatusesWrapperWidth = null, this._lastActionsWrapperWidth = null, this._showActionsHandler = null, this._hideActionsHandler = null, this._selectedSourceHandler = null, this._mouseEventHandlers = [], this._disableTimeout = null, this._loader = null, this._updateDisabledState = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4._disabled.value();
          null !== _this4._el && (_this4._el.classList.toggle(y.disabled, e), _this4._updateLoadingState(), _this4._updateStatusWidgetVisibility(e), _this4._updateTitleMaxWidth());
        }, this._updateLoadingState = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4._loading.value();

          if (null !== _this4._el) {
            var _t3 = _this4._el.classList;
            _t3.toggle(y.eyeLoading, e && !_this4._disabled.value()), _t3.toggle(y.loading, e);
          }

          null !== _this4._loader && _this4._loader.toggleVisibility(e);
        }, this._model = e, this._parentEl = t, this._disabled = this._model.disabled().spawn(), this._disabled.subscribe(this._updateDisabledState), this._disabledOnInterval = this._model.disabledOnInterval().spawn(), this._disabledOnInterval.subscribe(this._updateDisabledOnIntervalState.bind(this)), this._selected = this._model.selected().spawn(), this._selected.subscribe(this._updateSelectedState.bind(this)), this._loading = this._model.loading().spawn(), this._loading.subscribe(function (e, t) {
          var s = 0;
          return function (i) {
            clearTimeout(s), i ? e() : s = setTimeout(e, t);
          };
        }(this._updateLoadingState, 700)), this._isTitleHidden = this._model.isTitleHidden().spawn(), this._isValuesHidden = this._model.isValuesHidden().spawn(), this._isRowHidden = this._model.isRowHidden().spawn(), this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)), this._isValuesHidden.subscribe(this._updateShowValues.bind(this)), this._isRowHidden.subscribe(this._updateShowLine.bind(this)), this._createTitlesSpawns();

        for (var _e7 = 0; _e7 < this._titlesSpawns.length; _e7++) {
          this._titlesSpawns[_e7].title.subscribe(this._updateTitlesHandler.bind(this, _e7));
        }

        this._values = this._model.values().spawn(), this._values.subscribe(this._updateValues.bind(this)), this._createValuesSpawns(), this._addValuesSpawnsSubscriptions(), this._actionsSpawnArray = this._model.actions().map(function (e) {
          return {
            visible: e.visible.spawn(),
            title: void 0 === e.title ? null : e.title.spawn()
          };
        });

        for (var _e8 = 0; _e8 < this._actionsSpawnArray.length; _e8++) {
          this._actionsSpawnArray[_e8].visible.subscribe(this._updateActionVisibilities.bind(this, _e8));

          var _t4 = this._actionsSpawnArray[_e8].title;
          null !== _t4 && _t4.subscribe(this._updateActionTitle.bind(this, _e8));
        }

        this._withActions = s.withActions, this._render(), this._updateStates(), this._updateShowTitles(), this._updateShowValues(), this._updateShowLine(), null !== this._valuesParentEl && (this._loader = new b(this._valuesParentEl, {
          className: y.loader
        })), this._customTextColor = s.customTextColor.spawn(), this._customTextColor.subscribe(this._updateCustomTextColor.bind(this)), this._updateCustomTextColor(), this._withActions && (this._showActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._showActions.bind(this)), this._hideActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._hideActions.bind(this)), this._selectedSourceHandler = (0, m.wrapHandlerWithPreventEvent)(this._model.setSourceSelected.bind(this._model)), null !== this._logoAndTitleParentEl && (this._logoAndTitleParentEl.addEventListener("touchend", this._selectedSourceHandler), this._logoAndTitleParentEl.addEventListener("mousedown", this._selectedSourceHandler), S || (this._logoAndTitleParentEl.addEventListener("mouseenter", this._showActionsHandler), this._logoAndTitleParentEl.addEventListener("mouseleave", this._hideActionsHandler)), this._mouseEventHandlers.push(new p.MouseEventHandler(this._logoAndTitleParentEl, {
          mouseDoubleClickEvent: this._model.onShowSettings.bind(this._model),
          doubleTapEvent: this._model.onShowSettings.bind(this._model)
        }))), null === this._actionAdditionalWrapperEl || null === this._actionsParentEl || S || (this._actionAdditionalWrapperEl.addEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.addEventListener("mouseleave", this._hideActionsHandler), this._actionsParentEl.addEventListener("contextmenu", function (e) {
          e.preventDefault(), e.stopPropagation();
        })));
      }

      _createClass(f, [{
        key: "destroy",
        value: function destroy() {
          var e, t;
          this._disabled.destroy(), this._disabledOnInterval.destroy(), this._selected.destroy(), this._loading.destroy(), this._isTitleHidden.destroy(), this._isValuesHidden.destroy(), this._isRowHidden.destroy(), this._customTextColor.destroy(), null !== this._disableTimeout && clearTimeout(this._disableTimeout);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this._titlesSpawns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _e10 = _step3.value;

              _e10.title.destroy();
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (null !== this._logoAndTitleParentEl) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = this._mouseEventHandlers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _e9 = _step4.value;

                _e9.destroy();
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            this._titleElements = [], this._withActions && null !== this._selectedSourceHandler && null !== this._showActionsHandler && null !== this._hideActionsHandler && (this._logoAndTitleParentEl.removeEventListener("touchend", this._selectedSourceHandler), this._logoAndTitleParentEl.removeEventListener("mousedown", this._selectedSourceHandler), S || (this._logoAndTitleParentEl.removeEventListener("mouseenter", this._showActionsHandler), this._logoAndTitleParentEl.removeEventListener("mouseleave", this._hideActionsHandler))), this._logoAndTitleParentEl = null;
          }

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this._actionsSpawnArray[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _e11 = _step5.value;

              _e11.visible.destroy();

              var _t5 = _e11.title;
              null !== _t5 && _t5.destroy();
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          if (null !== this._actionAdditionalWrapperEl && (this._withActions && null !== this._showActionsHandler && null !== this._hideActionsHandler && !S && (this._actionAdditionalWrapperEl.removeEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.removeEventListener("mouseleave", this._hideActionsHandler)), this._actionAdditionalWrapperEl = null), this._actionsParentEl = null, this._removeValuesSpawnsSubscriptions(), this._values.destroy(), null !== this._valuesParentEl && (this._valuesElements = [], this._valuesParentEl = null), null === (e = this._hideInvisibleHover) || void 0 === e || e.destroy(), null === (t = this._hideValues) || void 0 === t || t.destroy(), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), null !== this._el) {
            (0, o.ensureNotNull)(this._el.parentNode).removeChild(this._el), this._el = null;
          }
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return null === this._el ? null : 24;
        }
      }, {
        key: "updateMode",
        value: function updateMode(e) {
          this._mode === e && null !== this._allButtonsWidth || (this._mode = e, this._updateAllButtonsWidth());
        }
      }, {
        key: "_render",
        value: function _render() {
          this._renderTitle(), this._renderActions(), this._renderValues(), this._el = document.createElement("div"), this._firstBlockWrapper = document.createElement("div"), this._firstBlockWrapper.classList.add(y.noWrapWrapper), this._firstBlockWrapper.appendChild((0, o.ensureNotNull)(this._logoAndTitleParentEl)), null !== this._actionsParentEl && this._firstBlockWrapper.appendChild(this._actionsParentEl), this._el.appendChild(this._firstBlockWrapper), this._el.appendChild((0, o.ensureNotNull)(this._valuesParentEl)), this._parentEl.append(this._el);
        }
      }, {
        key: "_renderTitle",
        value: function _renderTitle() {
          var e;
          null === this._logoAndTitleParentEl && (this._logoAndTitleParentEl = document.createElement("div"), this._logoAndTitleParentEl.classList.add(y.logoAndTitlesWrapper));
          var t = document.createElement("div");
          t.classList.add(y.titleWrapper), this._logoAndTitleParentEl.appendChild(t);

          for (var _s3 = 0; _s3 < this._titlesSpawns.length; _s3++) {
            var _i4 = null !== (e = this._titlesSpawns[_s3].title.value()) && void 0 !== e ? e : "",
                _l2 = this._titlesSpawns[_s3]["class"],
                _o2 = document.createElement("div");

            _o2.classList.add(y.title, _l2, "apply-overflow-tooltip"), _o2.dataset.name = "legend-source-title", _i4.length > 0 ? (_o2.appendChild(document.createTextNode(_i4)), _o2.classList.add(y.withDot)) : _o2.classList.add(g.blockHidden), t.appendChild(_o2), this._titleElements.push(_o2);
          }
        }
      }, {
        key: "_renderActions",
        value: function _renderActions() {
          if (!this._withActions) return;
          null === this._actionsParentEl && (this._actionsParentEl = document.createElement("div"), this._actionsParentEl.classList.add(y.buttonsWrapper), this._parentEl.append(this._actionsParentEl), this._actionAdditionalWrapperEl = document.createElement("div"), this._actionAdditionalWrapperEl.classList.add(y.buttons), this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl));
          var e = (0, o.ensureNotNull)(this._actionAdditionalWrapperEl),
              t = h.trackingModeIsAvailable ? "large" : "small";
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this._model.actions()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _s4 = _step6.value;

              var _i5 = (0, _.createActionElement)(_s4, y.button, y.buttonIcon, g.blockHidden, t);

              e.appendChild(_i5);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }, {
        key: "_isWidthButtonsMode",
        value: function _isWidthButtonsMode() {
          return null !== this._el && (this._el.classList.contains(y.withAction) || this._disabled.value() || this._selected.value() || this._stayInHoveredMode);
        }
      }, {
        key: "_updateTitlesHandler",
        value: function _updateTitlesHandler(e, t) {
          var s = (0, o.ensureNotNull)(this._titleElements[e]),
              i = 0 === t.length;
          s.classList.toggle(g.blockHidden, i), s.classList.toggle(y.withDot, !i), w(s, t);
        }
      }, {
        key: "_updateStates",
        value: function _updateStates(e) {
          this._updateDisabledState(), this._updateDisabledOnIntervalState(), this._updateSelectedState(), this._updateLoadingState(), e && this._clearDisableState();
        }
      }, {
        key: "_updateValuesHTMLElHandler",
        value: function _updateValuesHTMLElHandler(e, t) {
          w((0, o.ensure)(this._valuesElements[e].value), t), this._updateShowValues();
        }
      }, {
        key: "_updateValueColorHandler",
        value: function _updateValueColorHandler(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          (0, o.ensure)(this._valuesElements[e].value).style.color = t;
        }
      }, {
        key: "_updateValueVisibleHandler",
        value: function _updateValueVisibleHandler(e, t) {
          var s = (0, o.ensure)(this._valuesElements[e].value).closest(".".concat(y.valueItem));
          null !== s && s.classList.toggle(g.blockHidden, !t);
        }
      }, {
        key: "_updateShowLine",
        value: function _updateShowLine() {
          null !== this._el && this._el.classList.toggle(g.blockHidden, this._isRowHidden.value());
        }
      }, {
        key: "_createValuesSpawns",
        value: function _createValuesSpawns() {
          this._valuesSpawnArray = this._values.value().map(function (e) {
            return {
              value: e.value.spawn(),
              color: e.color.spawn(),
              visible: e.visible.spawn(),
              title: e.title.spawn()
            };
          });
        }
      }, {
        key: "_removeValuesSpawnsSubscriptions",
        value: function _removeValuesSpawnsSubscriptions() {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this._valuesSpawnArray[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _e12 = _step7.value;
              _e12.value.destroy(), _e12.color.destroy(), _e12.visible.destroy(), _e12.title.destroy();
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          this._valuesSpawnArray = [];
        }
      }, {
        key: "_addValuesSpawnsSubscriptions",
        value: function _addValuesSpawnsSubscriptions() {
          for (var _e13 = 0; _e13 < this._valuesSpawnArray.length; _e13++) {
            var _t6 = this._valuesSpawnArray[_e13];
            _t6.value.subscribe(this._updateValuesHTMLElHandler.bind(this, _e13)), _t6.color.subscribe(this._updateValueColorHandler.bind(this, _e13)), _t6.visible.subscribe(this._updateValueVisibleHandler.bind(this, _e13)), _t6.title.subscribe(this._updateValuesTitleHTMLElHandler.bind(this, _e13));
          }
        }
      }, {
        key: "_updateShowValues",
        value: function _updateShowValues() {
          null !== this._valuesAdditionalWrapperEl && this._valuesAdditionalWrapperEl.classList.toggle(g.blockHidden, this._isValuesShouldBeHidden());
        }
      }, {
        key: "_isValuesShouldBeHidden",
        value: function _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some(function (e) {
            return e.value.value().length > 0;
          });
        }
      }, {
        key: "_addStatusesWidget",
        value: function _addStatusesWidget(e, t, s) {
          this._statusesWrapper = document.createElement("div"), this._statusesWrapper.classList.add(y.statusesWrapper), e.classList.add(y.statusesWrapper__statuses), this._statusesWrapper.appendChild(e), (0, o.ensureNotNull)(this._firstBlockWrapper).appendChild(this._statusesWrapper), this._hideInvisibleHover = t.spawn(), this._hideInvisibleHover.subscribe(this._updateInvisibleHoverMode.bind(this), {
            callWithLast: !0
          }), this._hideValues = s.spawn(), this._hideValues.subscribe(this._updateHideValuesMode.bind(this), {
            callWithLast: !0
          }), this._updateStatusWidgetVisibility(this._disabled.value()), this._resizeObserver = new c["default"](this._handlerRestrictTitleWidth.bind(this)), null !== this._actionsParentEl && this._resizeObserver.observe(this._actionsParentEl), this._resizeObserver.observe(this._statusesWrapper);
        }
      }, {
        key: "_updateTitleMaxWidth",
        value: function _updateTitleMaxWidth() {
          if (null === this._firstBlockWrapper) return;
          var e = this._allButtonsWidth || 0,
              t = (this._lastActionsWrapperWidth || 0) + (this._lastStatusesWrapperWidth || 0);
          this._isWidthButtonsMode() ? this._firstBlockWrapper.style.maxWidth = "calc(100% - ".concat(Math.max(e, t), "px)") : this._firstBlockWrapper.style.maxWidth = t > 0 ? "calc(100% - ".concat(t, "px)") : "";
        }
      }, {
        key: "_updateAllButtonsWidth",
        value: function _updateAllButtonsWidth() {
          this._allButtonsWidth = this._getButtonsCount() * Z + 1, this._updateTitleMaxWidth();
        }
      }, {
        key: "_updateInvisibleHoverMode",
        value: function _updateInvisibleHoverMode(e) {
          null !== this._el && this._el.classList.toggle(y.invisibleHover, !e);
        }
      }, {
        key: "_updateHideValuesMode",
        value: function _updateHideValuesMode(e) {
          null !== this._el && this._el.classList.toggle(y.hideValues, e);
        }
      }, {
        key: "_showActions",
        value: function _showActions() {
          if (null === this._el || !this._withActions) return;

          this._el.classList.add(y.withAction);

          var e = null !== this._valuesParentEl && null !== this._logoAndTitleParentEl && this._valuesParentEl.offsetTop === this._logoAndTitleParentEl.offsetTop;
          this._el.classList.toggle(y.withTail, e), this._updateTitleMaxWidth();
        }
      }, {
        key: "_hideActions",
        value: function _hideActions() {
          null !== this._el && this._withActions && !this._stayInHoveredMode && (this._el.classList.remove(y.withAction), null !== this._valuesParentEl && this._valuesParentEl.classList.remove(y.withTail), this._updateTitleMaxWidth());
        }
      }, {
        key: "_handlerRestrictTitleWidth",
        value: function _handlerRestrictTitleWidth(e) {
          if (null === this._actionsParentEl || null === this._firstBlockWrapper) return;
          var t = null,
              s = null;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = e[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _i6 = _step8.value;
              _i6.target === this._statusesWrapper && (t = _i6.contentRect.width), _i6.target === this._actionsParentEl && (s = _i6.contentRect.width);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          t === this._lastStatusesWrapperWidth && s === this._lastActionsWrapperWidth || (null !== t && (this._lastStatusesWrapperWidth = t), null !== s && (this._lastActionsWrapperWidth = s), this._updateTitleMaxWidth());
        }
      }, {
        key: "_clearDisableState",
        value: function _clearDisableState() {
          null !== this._el && (this._el.classList.remove(y.eyeLoading), this._el.classList.remove(y.disabled), this._updateStatusWidgetVisibility(this._disabled.value()), this._updateTitleMaxWidth());
        }
      }, {
        key: "_updateDisabledOnIntervalState",
        value: function _updateDisabledOnIntervalState() {
          var e;
          null === (e = this._el) || void 0 === e || e.classList.toggle(y.disabledOnInterval, this._disabledOnInterval.value());
        }
      }, {
        key: "_updateSelectedState",
        value: function _updateSelectedState() {
          null !== this._el && this._withActions && this._el.classList.toggle(y.selected, this._selected.value());
        }
      }, {
        key: "_updateShowTitles",
        value: function _updateShowTitles() {
          null !== this._logoAndTitleParentEl && (this._logoAndTitleParentEl.classList.toggle(g.blockHidden, this._isTitleHidden.value()), null !== this._actionsParentEl && this._actionsParentEl.classList.toggle(g.blockHidden, this._isTitleHidden.value()));
        }
      }, {
        key: "_updateValues",
        value: function _updateValues() {
          this._removeValuesSpawnsSubscriptions(), this._createValuesSpawns(), null !== this._valuesParentEl && null !== this._valuesAdditionalWrapperEl && (this._valuesElements = [], this._valuesAdditionalWrapperEl.innerHTML = ""), this._renderValues(), this._addValuesSpawnsSubscriptions(), this._updateShowValues();
        }
      }, {
        key: "_updateActionVisibilities",
        value: function _updateActionVisibilities(e) {
          null !== this._actionsParentEl && this._actionsParentEl.querySelectorAll(".".concat(y.button))[e].classList.toggle(g.blockHidden, !this._actionsSpawnArray[e].visible.value());
        }
      }, {
        key: "_updateActionTitle",
        value: function _updateActionTitle(e) {
          var t = this._actionsSpawnArray[e].title;
          null !== this._actionsParentEl && null !== t && this._actionsParentEl.querySelectorAll(".".concat(y.button))[e].setAttribute("title", t.value());
        }
      }, {
        key: "_updateCustomTextColor",
        value: function _updateCustomTextColor() {
          var e = this._customTextColor.value() || "";
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = this._titleElements[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var _t7 = _step9.value;
              null !== _t7 && (_t7.style.color = e);
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                _iterator9["return"]();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          var t = (0, o.ensureNotNull)(this._valuesParentEl).querySelectorAll(".".concat(y.valueTitle));

          for (var _s5 = 0; _s5 < t.length; _s5++) {
            t[_s5].style.color = e;
          }

          (0, o.ensureNotNull)(this._el).classList.toggle(y.withCustomTextColor, Boolean(e));
        }
      }, {
        key: "_updateStatusWidgetVisibility",
        value: function _updateStatusWidgetVisibility(e) {
          null !== this._statusesWrapper && this._statusesWrapper.classList.toggle(g.blockHidden, e);
        }
      }]);

      return f;
    }();

    var M = s(16230),
        C = s(97754),
        E = s.n(C),
        V = s(44747),
        k = s(58492),
        A = s(82708),
        L = s(12767);
    var W = "tv-circle-logo--visually-hidden";

    var T =
    /*#__PURE__*/
    function () {
      function T(e, t) {
        var _this5 = this;

        _classCallCheck(this, T);

        this._lastDrawnLogos = [], this._logoWrapper = null, this._pairContainer = null, this._primaryLogo = null, this._secondaryLogo = null, this._logoContainer = null, this._symbolLetterContainer = null, this._updateLogoVisibility = function (e) {
          _this5._logoWrapper && _this5._logoWrapper.classList.toggle(y.hidden, !e);
        }, this._updateSymbolLogo = function _callee(e) {
          var t, s, i, l, o, a, n, r, d, u, h;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(null === _this5._logoWrapper && _this5._renderSymbolLogo(), (0, M["default"])(_this5._lastDrawnLogos, e))) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return regeneratorRuntime.awrap((h = e, Promise.all(h.map(function (e) {
                    return (0, L.getImage)("symbol_logo_".concat(e), e, function (e) {
                      e.decoding = "async";
                    }).then(function (e) {
                      return e.cloneNode();
                    });
                  }))));

                case 4:
                  u = _context.sent;
                  _context.t0 = u.length;
                  _context.next = _context.t0 === 0 ? 8 : _context.t0 === 1 ? 10 : _context.t0 === 2 ? 12 : 13;
                  break;

                case 8:
                  null === (t = _this5._pairContainer) || void 0 === t || t.classList.add(y.hidden), null === (s = _this5._logoContainer) || void 0 === s || s.classList.add(W), _this5._updateSymbolLetter(), null === (i = _this5._symbolLetterContainer) || void 0 === i || i.classList.remove(W), _this5._lastDrawnLogos = e;
                  return _context.abrupt("break", 13);

                case 10:
                  x(_this5._logoContainer, u[0]), null === (l = _this5._pairContainer) || void 0 === l || l.classList.add(y.hidden), null === (o = _this5._logoContainer) || void 0 === o || o.classList.remove(W), null === (a = _this5._symbolLetterContainer) || void 0 === a || a.classList.add(W), _this5._lastDrawnLogos = e;
                  return _context.abrupt("break", 13);

                case 12:
                  x(_this5._primaryLogo, u[0]), x(_this5._secondaryLogo, u[1]), null === (n = _this5._pairContainer) || void 0 === n || n.classList.remove(y.hidden), null === (r = _this5._logoContainer) || void 0 === r || r.classList.add(W), null === (d = _this5._symbolLetterContainer) || void 0 === d || d.classList.add(W), _this5._lastDrawnLogos = e;

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          });
        }, this._model = e, this._parentElement = t, this._renderSymbolLogo(), this._logoUrls = e.symbolLogoUrls().spawn(), this._logoUrls.subscribe(this._updateSymbolLogo, {
          callWithLast: !0
        }), this._isLogoVisible = e.isSymbolLogoVisible().spawn(), this._isLogoVisible.subscribe(this._updateLogoVisibility, {
          callWithLast: !0
        });
      }

      _createClass(T, [{
        key: "destroy",
        value: function destroy() {
          var e;
          null === (e = this._logoWrapper) || void 0 === e || e.remove(), this._logoWrapper = null, this._pairContainer = null, this._primaryLogo = null, this._secondaryLogo = null, this._logoContainer = null, this._symbolLetterContainer = null, this._logoUrls.destroy(), this._isLogoVisible.destroy();
        }
      }, {
        key: "_renderSymbolLogo",
        value: function _renderSymbolLogo() {
          if (!this._logoWrapper) {
            var _e14 = this._logoWrapper = document.createElement("div");

            _e14.classList.add(y.logoWrapper);

            var _t8 = this._pairContainer = _e14.appendChild(document.createElement("span"));

            _t8.classList.add(y.pairContainer, y.hidden);

            var s = _t8.appendChild(document.createElement("span"));

            s.className = (0, V.getBlockStyleClasses)("xxxsmall");
            (this._secondaryLogo = s.appendChild(document.createElement("span"))).className = E()((0, V.getLogoStyleClasses)("xxxsmall"), y.logo);
            (this._primaryLogo = s.appendChild(document.createElement("span"))).className = E()((0, V.getLogoStyleClasses)("xxxsmall"), y.logo);
            (this._logoContainer = _e14.appendChild(document.createElement("span"))).className = E()((0, k.getStyleClasses)("xxxsmall"), y.logo, W);
            (this._symbolLetterContainer = _e14.appendChild(document.createElement("span"))).className = E()((0, k.getStyleClasses)("xxxsmall"), y.logo), this._updateSymbolLetter();
          }

          this._parentElement.insertBefore(this._logoWrapper, this._parentElement.firstChild);
        }
      }, {
        key: "_updateSymbolLetter",
        value: function _updateSymbolLetter() {
          var e;

          if (this._symbolLetterContainer) {
            var _t9 = (0, A.safeShortName)(null !== (e = this._model.symbol()) && void 0 !== e ? e : "")[0];
            w(this._symbolLetterContainer, _t9);
          }
        }
      }]);

      return T;
    }();

    function x(e, t) {
      e && e.replaceChildren(t);
    }

    var H =
    /*#__PURE__*/
    function (_f) {
      _inherits(H, _f);

      function H(e, t, s) {
        var _this6;

        _classCallCheck(this, H);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(H).call(this, e, t, s)), _this6._symbolLogoRenderer = null, _this6._clientHeight = null, _this6._updateLinkedState = void 0, _this6._flagged = _this6._model.flagged().spawn(), _this6._flagged.subscribe(_this6._updateFlaggedState.bind(_assertThisInitialized(_this6))), _this6._updateStates(), s.statusWidgetEl && _this6._addStatusesWidget(s.statusWidgetEl, s.hideInvisibleHover, s.hideValues), _this6._selected.subscribe(_this6._updateTitleMaxWidth.bind(_assertThisInitialized(_this6)));
        var i = e.symbolLogoViewModel().value();
        i && (_this6._symbolLogoRenderer = new T(i, (0, o.ensureNotNull)(_this6._logoAndTitleParentEl)));
        return _this6;
      }

      _createClass(H, [{
        key: "destroy",
        value: function destroy() {
          var e, t;
          _get(_getPrototypeOf(H.prototype), "destroy", this).call(this), null === (e = this._flagged) || void 0 === e || e.destroy(), null === (t = this._symbolLogoRenderer) || void 0 === t || t.destroy();
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return null === this._el ? null : (null === this._clientHeight && (this._clientHeight = this._el.clientHeight, 0 === this._clientHeight && (this._clientHeight = null)), this._clientHeight);
        }
      }, {
        key: "_getButtonsCount",
        value: function _getButtonsCount() {
          return 1 === this._mode ? 1 : 3;
        }
      }, {
        key: "_render",
        value: function _render() {
          _get(_getPrototypeOf(H.prototype), "_render", this).call(this);

          var e = (0, o.ensureNotNull)(this._el);
          e.classList.add(y.item, y.series), e.classList.toggle(y.onlyOneButtonCanBeStick, this._model.isOneButtonCanBeStick()), e.dataset.name = "legend-series-item";
        }
      }, {
        key: "_updateStates",
        value: function _updateStates() {
          _get(_getPrototypeOf(H.prototype), "_updateStates", this).call(this), this._updateFlaggedState();
        }
      }, {
        key: "_renderValues",
        value: function _renderValues() {
          null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(y.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(y.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));

          var e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
              t = this._values.value();

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var s = _step10.value;

              var _t10 = document.createElement("div");

              _t10.classList.add(y.valueItem), _t10.classList.toggle(g.blockHidden, !s.visible.value()), _t10.classList.toggle(y.unimportant, s.unimportant.value());
              var i = document.createElement("div"),
                  l = s.title.value() || "";
              i.classList.add(y.valueTitle), i.classList.toggle(g.blockHidden, 0 === l.length), i.appendChild(document.createTextNode(l)), _t10.appendChild(i);

              var _o3 = document.createElement("div");

              _o3.classList.add(y.valueValue), _o3.style.color = s.color.value() || "", _o3.appendChild(document.createTextNode(s.value.value())), _t10.appendChild(_o3), this._valuesElements.push({
                title: i,
                value: _o3
              }), e.appendChild(_t10);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      }, {
        key: "_createTitlesSpawns",
        value: function _createTitlesSpawns() {
          var e = this._model.titles();

          this._titlesSpawns = [{
            title: e.title.spawn(),
            "class": y.mainTitle
          }, {
            title: e.description.spawn(),
            "class": y.descTitle
          }, {
            title: e.interval.spawn(),
            "class": y.intervalTitle
          }, {
            title: e.provider.spawn(),
            "class": y.providerTitle
          }, {
            title: e.exchange.spawn(),
            "class": y.exchangeTitle
          }, {
            title: e.chartStyle.spawn(),
            "class": y.styleTitle
          }, {
            title: e.priceSource.spawn(),
            "class": y.styleTitle
          }];
        }
      }, {
        key: "_isValuesShouldBeHidden",
        value: function _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some(function (e) {
            return e.value.value().length > 0 || (e.title.value() || "").length > 0;
          });
        }
      }, {
        key: "_updateValuesTitleHTMLElHandler",
        value: function _updateValuesTitleHTMLElHandler(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var s = (0, o.ensure)(this._valuesElements[e].title);
          w(s, t), s.classList.toggle(g.blockHidden, 0 === t.length), this._updateShowValues();
        }
      }, {
        key: "_isWidthButtonsMode",
        value: function _isWidthButtonsMode() {
          var e;
          return null !== this._el && (void 0 !== this._flagged && Boolean(this._flagged.value()) || (null === (e = this._linked) || void 0 === e ? void 0 : e.value()) || _get(_getPrototypeOf(H.prototype), "_isWidthButtonsMode", this).call(this));
        }
      }, {
        key: "_updateFlaggedState",
        value: function _updateFlaggedState() {
          if (void 0 === this._flagged) return;
          (0, o.ensureNotNull)(this._el).classList.toggle(y.flagged, Boolean(this._flagged.value())), this._updateTitleMaxWidth();
        }
      }]);

      return H;
    }(f);

    var D = u.isSafari ? "click" : "auxclick";

    var P =
    /*#__PURE__*/
    function (_f2) {
      _inherits(P, _f2);

      function P(e, t, s) {
        var _this7;

        _classCallCheck(this, P);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this, e, t, s)), _this7._wheelClickHandler = null, _this7._symbolLogoRenderer = null, _this7._updateSymbolLogoRenderer = function (e) {
          var t;
          d.enabled("show_symbol_logo_for_compare_studies") && (null === (t = _this7._symbolLogoRenderer) || void 0 === t || t.destroy(), _this7._symbolLogoRenderer = e ? new T(e, (0, o.ensureNotNull)(_this7._logoAndTitleParentEl)) : null);
        }, _this7._canUpdateRowVisibility = !0, _this7._globalRowVisibility = _this7._model.globalVisibility().spawn(), _this7._globalRowVisibility.subscribe(_this7._updateShowLine.bind(_assertThisInitialized(_this7)), {
          callWithLast: !0
        }), _this7._has5Buttons = _this7._model.isPineScriptDataSource().spawn(), _this7._has5Buttons.subscribe(_this7._update5ButtonsStyles.bind(_assertThisInitialized(_this7))), _this7._updateStates(!_this7._disabled.value()), s.statusWidgetEl && _this7._addStatusesWidget(s.statusWidgetEl, s.hideInvisibleHover, s.hideValues), _this7._selected.subscribe(_this7._updateTitleMaxWidth.bind(_assertThisInitialized(_this7))), s.withActions && (_this7._wheelClickHandler = _this7._onWheelClicked.bind(_assertThisInitialized(_this7)), null !== _this7._logoAndTitleParentEl && _this7._logoAndTitleParentEl.addEventListener(D, _this7._wheelClickHandler));
        var i = e.symbolLogoViewModel().value();
        _this7._updateSymbolLogoRenderer(i), e.symbolLogoViewModel().subscribe(_this7._updateSymbolLogoRenderer);
        return _this7;
      }

      _createClass(P, [{
        key: "destroy",
        value: function destroy() {
          var e;
          this._model.symbolLogoViewModel().unsubscribe(this._updateSymbolLogoRenderer), null === (e = this._symbolLogoRenderer) || void 0 === e || e.destroy(), this._has5Buttons.destroy(), this._globalRowVisibility && this._globalRowVisibility.destroy(), null !== this._wheelClickHandler && null !== this._logoAndTitleParentEl && this._logoAndTitleParentEl.removeEventListener(D, this._wheelClickHandler), _get(_getPrototypeOf(P.prototype), "destroy", this).call(this);
        }
      }, {
        key: "_updateShowLine",
        value: function _updateShowLine() {
          if (null === this._el || !this._canUpdateRowVisibility) return;
          var e = !this._globalRowVisibility.value();
          e ? this._el.classList.toggle(g.blockHidden, e) : _get(_getPrototypeOf(P.prototype), "_updateShowLine", this).call(this);
        }
      }, {
        key: "_getButtonsCount",
        value: function _getButtonsCount() {
          switch (this._mode) {
            case 4:
              return this._has5Buttons.value() ? 5 : 4;

            case 3:
              return 3;

            default:
              return 2;
          }
        }
      }, {
        key: "_render",
        value: function _render() {
          _get(_getPrototypeOf(P.prototype), "_render", this).call(this);

          var e = (0, o.ensureNotNull)(this._el);
          e.classList.add(y.item, y.study), e.dataset.name = "legend-source-item";
        }
      }, {
        key: "_createTitlesSpawns",
        value: function _createTitlesSpawns() {
          var e = this._model.titles();

          this._titlesSpawns = [{
            title: e.title.spawn(),
            "class": y.mainTitle
          }, {
            title: e.args.spawn(),
            "class": y.descTitle
          }];
        }
      }, {
        key: "_renderValues",
        value: function _renderValues() {
          null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(y.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(y.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));

          var e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
              t = this._values.value();

          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = t[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var s = _step11.value;

              var _t11 = document.createElement("div");

              _t11.classList.add(y.valueItem), _t11.classList.toggle(g.blockHidden, !s.visible.value());
              var i = document.createElement("div");
              i.classList.add(y.valueValue), i.style.color = s.color.value() || "", i.appendChild(document.createTextNode(s.value.value()));
              var l = s.title.value();
              void 0 !== l && (i.classList.add("apply-common-tooltip"), i.title = l), _t11.appendChild(i), this._valuesElements.push({
                value: i
              }), e.appendChild(_t11);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }
      }, {
        key: "_updateValuesTitleHTMLElHandler",
        value: function _updateValuesTitleHTMLElHandler(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var s = (0, o.ensure)(this._valuesElements[e].value);
          s.classList.toggle("apply-common-tooltip", 0 !== t.length), s.title = t;
        }
      }, {
        key: "_update5ButtonsStyles",
        value: function _update5ButtonsStyles(e) {
          null !== this._el && (this._el.classList.toggle(y.has5Buttons, e), this._updateAllButtonsWidth());
        }
      }, {
        key: "_onWheelClicked",
        value: function _onWheelClicked(e) {
          1 === e.button && this._model.onRemoveSource();
        }
      }]);

      return P;
    }(f);

    var B = s(44352),
        I = s(51768);

    function z(e) {
      (0, I.trackEvent)("GUI", "Legend action", e);
    }

    var N = s(47036),
        O = s(62920),
        F = s(65300),
        R = s(36885);
    var U = B.t(null, void 0, s(21686)),
        G = B.t(null, void 0, s(28705)),
        $ = B.t(null, void 0, s(51072));

    var j =
    /*#__PURE__*/
    function () {
      function j(e, t, s) {
        _classCallCheck(this, j);

        this._el = null, this._counterEl = null, this._arrowIconEL = null, this._objectTreeEl = null, this._mode = 0, this._parentEl = e, this._themedColor = t.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this)), this._sourceCount = s.visibleDataSourceCount.spawn(), this._sourceCount.subscribe(this._updateSourceCount.bind(this)), this._isStateOpen = s.isDataSourcesCollapsed.spawn(), this._isStateOpen.subscribe(this._updateState.bind(this)), this._showObjectsTree = s.showObjectsTree.spawn(), this._showObjectsTree.subscribe(this._updateObjectTreeVisibility.bind(this)), this._render(), this._updateState(), this._updateThemedColor(this._themedColor.value()), this._updateObjectTreeVisibility(this._showObjectsTree.value()), this._toggleStateHandler = (0, m.wrapHandlerWithPreventEvent)(s.onCollapseDataSources), this._showObjectTreeHandler = (0, m.wrapHandlerWithPreventEvent)(s.onShowObjectsTreeDialog), null !== this._el && (this._el.addEventListener("touchend", this._toggleStateHandler), this._el.addEventListener("click", this._toggleStateHandler), this._el.addEventListener("contextmenu", function (e) {
          e.preventDefault(), e.stopPropagation();
        })), null !== this._objectTreeEl && (this._objectTreeEl.addEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.addEventListener("click", this._showObjectTreeHandler));
      }

      _createClass(j, [{
        key: "destroy",
        value: function destroy() {
          this._sourceCount.destroy(), this._isStateOpen.destroy(), null !== this._objectTreeEl && (this._objectTreeEl.removeEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.removeEventListener("click", this._showObjectTreeHandler), this._objectTreeEl = null), this._arrowIconEL = null, this._counterEl = null, null !== this._el && (this._el.removeEventListener("touchend", this._toggleStateHandler), this._el.removeEventListener("click", this._toggleStateHandler), this._el.innerHTML = "", this._el = null);
        }
      }, {
        key: "setMode",
        value: function setMode(e) {
          this._mode = e ? 1 : 0, this._updateTooltip();
        }
      }, {
        key: "_render",
        value: function _render() {
          this._el = document.createElement("div"), this._el.className = "".concat(y.toggler, " apply-common-tooltip"), this._arrowIconEL = document.createElement("div"), this._arrowIconEL.classList.add(y.iconArrow), this._arrowIconEL.innerHTML = h.trackingModeIsAvailable ? O : N, this._el.appendChild(this._arrowIconEL), this._objectTreeEl = document.createElement("div"), this._objectTreeEl.classList.add(y.objectTree), this._objectTreeEl.innerHTML = h.trackingModeIsAvailable ? R : F, this._el.appendChild(this._objectTreeEl), this._counterEl = document.createElement("div"), this._counterEl.classList.add(y.counter), this._counterEl.appendChild(document.createTextNode(String(this._sourceCount.value()))), this._el.appendChild(this._counterEl), this._parentEl.appendChild(this._el);
        }
      }, {
        key: "_updateThemedColor",
        value: function _updateThemedColor(e) {
          if (null !== this._el) if (e.length > 0) {
            var _ref4 = (0, r.parseRgb)(e),
                _ref5 = _slicedToArray(_ref4, 3),
                _t12 = _ref5[0],
                s = _ref5[1],
                i = _ref5[2];

            this._el.style.backgroundColor = (0, r.rgbaToString)([_t12, s, i, (0, r.normalizeAlphaComponent)(.8)]);
          } else this._el.style.removeProperty("background-color");
        }
      }, {
        key: "_updateSourceCount",
        value: function _updateSourceCount(e) {
          w((0, o.ensureNotNull)(this._counterEl), String(e));
          var t = (0, o.ensureNotNull)(this._el),
              s = e < 1;
          t.classList.toggle(g.blockHidden, s);
          {
            var _s6 = 1 === e;

            t.classList.toggle(y.onlyOneSourceShown, _s6);
          }
        }
      }, {
        key: "_updateState",
        value: function _updateState() {
          var e = !this._isStateOpen.value();
          this._parentEl.classList.toggle(y.closed, e), this._updateTooltip(), z((e ? "Hide" : "Show") + " not main sources");
        }
      }, {
        key: "_tooltip",
        value: function _tooltip() {
          return 1 === this._mode ? $ : this._isStateOpen.value() ? U : G;
        }
      }, {
        key: "_updateTooltip",
        value: function _updateTooltip() {
          null !== this._el && this._el.setAttribute("title", this._tooltip());
        }
      }, {
        key: "_updateObjectTreeVisibility",
        value: function _updateObjectTreeVisibility(e) {
          (0, o.ensureNotNull)(this._el).classList.toggle(y.objectsTreeCanBeShown, e);
        }
      }]);

      return j;
    }();

    var Y = s(38780),
        q = s(27267);
    var Z = h.trackingModeIsAvailable ? 44 : 28,
        X = d.enabled("object_tree_legend_mode");

    var J =
    /*#__PURE__*/
    function () {
      function J(e, t) {
        _classCallCheck(this, J);

        this._renderToggler = null, this._mainDataSourceRenderer = null, this._dataSourceRenderers = [], this._parentEl = document.createElement("div"), this._mainDataSourceEl = null, this._dataSourcesEl = null, this._dataSourcesAdditionalWrapperEl = null, this._collapsedDataSourcesWrapperEl = null, this._collapsedDataSourcesEl = null, this._outsideEventForCollapsedTooltip = null, this._options = e, this._togglerOptions = t, this._isStudiesLegendHidden = e.isStudiesLegendHidden.spawn(), this._isStudiesLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._isAllLegendHidden = e.isAllLegendHidden.spawn(), this._isAllLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._updateLegendVisibility(), this._hideAllExceptFirstLine = e.hideAllExceptFirstLine.spawn(), this._hideAllExceptFirstLine.subscribe(this._updateAllHiddenExeptFirstLine.bind(this)), this._themedColor = e.themedColor.spawn(), this._themedColor.subscribe(this._setCustomBg.bind(this)), this._showBackground = e.showBackground.spawn(), this._showBackground.subscribe(this._setCustomBg.bind(this)), this._backgroundTransparency = e.backgroundTransparency.spawn(), this._backgroundTransparency.subscribe(this._setCustomBg.bind(this)), this._collapsedDataSourcesCountSpawn = e.collapsedDataSourcesCount.spawn(), this._collapsedDataSourcesCountSpawn.subscribe(this._updateCollapsedSourcesCount.bind(this)), this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(this), this._parentEl.classList.add(y.legend), this._parentEl.classList.toggle(y.noWrap, !h.trackingModeIsAvailable), this._parentEl.classList.toggle(y.noActions, !this._options.withActions), this._parentEl.classList.toggle(y.touchMode, h.trackingModeIsAvailable), this._parentEl.classList.toggle(y.wrappable, !this._hideAllExceptFirstLine.value()), this._parentEl.dataset.name = "legend", this._parentEl.style.setProperty("--legend-source-item-button-width", "".concat(Z, "px"));

        var s = function s(t) {
          t.preventDefault(), e.showLegendWidgetContextMenu(t);
        };

        this._mouseEventHandler = new p.MouseEventHandler(this._parentEl, {
          contextMenuEvent: s,
          touchContextMenuEvent: s
        });
      }

      _createClass(J, [{
        key: "destroy",
        value: function destroy() {
          if (this._isStudiesLegendHidden.destroy(), this._isAllLegendHidden.destroy(), this._hideAllExceptFirstLine.destroy(), this._themedColor.destroy(), this._showBackground.destroy(), this._backgroundTransparency.destroy(), this._collapsedDataSourcesCountSpawn.destroy(), h.trackingModeIsAvailable && null !== this._collapsedDataSourcesWrapperEl && this._collapsedDataSourcesWrapperEl.removeEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler), this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), null !== this._dataSourcesAdditionalWrapperEl && (this._dataSourcesAdditionalWrapperEl.innerHTML = "", this._dataSourcesAdditionalWrapperEl = null), null !== this._dataSourcesEl && (this._dataSourcesEl.innerHTML = "", this._dataSourcesEl = null), null !== this._renderToggler && (this._renderToggler.destroy(), this._renderToggler = null), null !== this._mainDataSourceRenderer && (this._mainDataSourceRenderer.destroy(), this._mainDataSourceRenderer = null), 0 !== this._dataSourceRenderers.length) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = this._dataSourceRenderers[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var _e15 = _step12.value;

                _e15.destroy();
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                  _iterator12["return"]();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }

            this._dataSourceRenderers = [];
          }

          this._mouseEventHandler.destroy(), this._parentEl.innerHTML = "", delete this._parentEl;
        }
      }, {
        key: "addMainDataSource",
        value: function addMainDataSource(e, t) {
          var _this8 = this;

          this._renderMainDataSourceEl(), this._mainDataSourceRenderer = new H(e, (0, o.ensureNotNull)(this._mainDataSourceEl), {
            withActions: this._options.withActions,
            customTextColor: this._options.customTextColor,
            statusWidgetEl: t.getElement(),
            hideInvisibleHover: t.visibility(),
            hideValues: t.errorWidgetIsShown
          }), this._updateLegendVisibility(), e.onDestroy().subscribe(this, function () {
            null !== _this8._mainDataSourceRenderer && (_this8._mainDataSourceRenderer.destroy(), _this8._mainDataSourceRenderer = null);
          }, !0);
        }
      }, {
        key: "addDataSources",
        value: function addDataSources(e, t) {
          var _this9 = this;

          this._renderDataSourcesEl();

          var s = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);

          var _loop = function _loop(i) {
            var l = e[i],
                o = new P(l, s, {
              withActions: _this9._options.withActions,
              customTextColor: _this9._options.customTextColor,
              statusWidgetEl: t[i].getElement(),
              hideInvisibleHover: t[i].visibility(),
              hideValues: t[i].errorWidgetIsShown
            });
            _this9._dataSourceRenderers.push(o), _this9._updateLegendVisibility(), l.onDestroy().subscribe(_this9, function () {
              var e = _this9._dataSourceRenderers.indexOf(o);

              -1 !== e && (_this9._dataSourceRenderers[e].destroy(), _this9._dataSourceRenderers.splice(e, 1));
            }, !0);
          };

          for (var i = 0; i < e.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "addCustomWidget",
        value: function addCustomWidget(e, t) {
          if (0 === t.block) {
            this._renderMainDataSourceEl();

            var s = (0, o.ensureNotNull)(this._mainDataSourceEl);
            1 === t.position && e.renderTo(s, s.firstChild), 0 === t.position && e.renderTo(s);
          }

          if (1 === t.block) {
            this._renderDataSourcesEl();

            var _s7 = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);

            1 === t.position && e.renderTo(_s7, _s7.firstChild), 0 === t.position && e.renderTo(_s7);
          }
        }
      }, {
        key: "firstTitle",
        value: function firstTitle() {
          return this._parentEl.firstElementChild;
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._parentEl;
        }
      }, {
        key: "updateMode",
        value: function updateMode(e) {
          var t = X && e < 133 ? 1 : e < 205 ? 2 : e < 222 ? 3 : 4;
          null !== this._mainDataSourceRenderer && this._mainDataSourceRenderer.updateMode(t);
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this._dataSourceRenderers[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _e16 = _step13.value;

              _e16.updateMode(t);
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          this._parentEl.classList.toggle(y.medium, 3 === t), this._parentEl.classList.toggle(y.minimized, 2 === t), this._parentEl.classList.toggle(y.micro, 1 === t), null !== this._renderToggler && this._renderToggler.setMode(1 === t);
          var s = !this._hideAllExceptFirstLine.value() && (h.trackingModeIsAvailable || e < 542);
          this._parentEl.classList.toggle(y.directionColumn, s), this._parentEl.classList.toggle(y.hideUniportantValueItems, !u.CheckMobile.any() && e <= 272);
        }
      }, {
        key: "getMainSourceHeight",
        value: function getMainSourceHeight() {
          return null === this._mainDataSourceRenderer ? 0 : this._mainDataSourceRenderer.getHeight();
        }
      }, {
        key: "getDataSourceHeight",
        value: function getDataSourceHeight() {
          return 0 === this._dataSourceRenderers.length ? 0 : this._dataSourceRenderers[0].getHeight();
        }
      }, {
        key: "_renderMainDataSourceEl",
        value: function _renderMainDataSourceEl() {
          null === this._mainDataSourceEl && (this._mainDataSourceEl = document.createElement("div"), this._mainDataSourceEl.classList.add(y.legendMainSourceWrapper), this._parentEl.insertBefore(this._mainDataSourceEl, this._dataSourcesEl));
        }
      }, {
        key: "_renderDataSourcesEl",
        value: function _renderDataSourcesEl() {
          null === this._dataSourcesEl && (this._dataSourcesEl = document.createElement("div"), this._dataSourcesEl.classList.add(y.sourcesWrapper), this._renderToggle(this._dataSourcesEl), this._dataSourcesAdditionalWrapperEl = document.createElement("div"), this._dataSourcesAdditionalWrapperEl.classList.add(y.sources), this._dataSourcesEl.appendChild(this._dataSourcesAdditionalWrapperEl), this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl), this._parentEl.appendChild(this._dataSourcesEl));
        }
      }, {
        key: "_renderToggle",
        value: function _renderToggle(e) {
          this._options.showToggleButton && (this._renderToggler = new j(e, this._options.themedColor, this._togglerOptions));
        }
      }, {
        key: "_renderCollapsedCounter",
        value: function _renderCollapsedCounter(e) {
          this._collapsedDataSourcesWrapperEl = document.createElement("div"), this._collapsedDataSourcesWrapperEl.className = "".concat(y.item, " ").concat(y.last), this._collapsedDataSourcesEl = document.createElement("span"), this._collapsedDataSourcesEl.className = "".concat(y.text, " apply-common-tooltip"), this._collapsedDataSourcesWrapperEl.append(this._collapsedDataSourcesEl), e.append(this._collapsedDataSourcesWrapperEl), h.trackingModeIsAvailable && this._collapsedDataSourcesWrapperEl.addEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler), this._updateCollapsedSourcesCount(this._collapsedDataSourcesCountSpawn.value());
        }
      }, {
        key: "_showCollapsedDataSourcesTooltip",
        value: function _showCollapsedDataSourcesTooltip() {
          (0, Y.showOnElement)(this._collapsedDataSourcesEl, {
            text: this._options.collapsedDataSourcesTitle.value()
          }), this._addOutsideEventForHideTooltip();
        }
      }, {
        key: "_addOutsideEventForHideTooltip",
        value: function _addOutsideEventForHideTooltip() {
          var _this10 = this;

          null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), this._outsideEventForCollapsedTooltip = (0, q.addOutsideEventListener)(new CustomEvent("timestamp").timeStamp, this._collapsedDataSourcesWrapperEl, function () {
            null !== _this10._outsideEventForCollapsedTooltip && _this10._outsideEventForCollapsedTooltip(), (0, Y.hide)();
          }, window.document, {
            touchEnd: !0
          });
        }
      }, {
        key: "_updateCollapsedSourcesCount",
        value: function _updateCollapsedSourcesCount(e) {
          if (null === this._collapsedDataSourcesWrapperEl || null === this._collapsedDataSourcesEl) return;
          var t = 0 === e;
          this._collapsedDataSourcesWrapperEl.classList.toggle(g.blockHidden, t), t || (w(this._collapsedDataSourcesEl, "+".concat(e)), this._collapsedDataSourcesEl.setAttribute("title", this._options.collapsedDataSourcesTitle.value()));
        }
      }, {
        key: "_updateLegendVisibility",
        value: function _updateLegendVisibility() {
          this._parentEl.classList.toggle(g.blockHidden, this._isAllLegendHidden.value()), null !== this._dataSourcesEl && this._dataSourcesEl.classList.toggle(g.blockHidden, this._isStudiesLegendHidden.value());
        }
      }, {
        key: "_updateAllHiddenExeptFirstLine",
        value: function _updateAllHiddenExeptFirstLine() {
          this._parentEl.classList.toggle(y.wrappable, !this._hideAllExceptFirstLine.value());
        }
      }, {
        key: "_setCustomBg",
        value: function _setCustomBg() {
          var e = this._showBackground.value(),
              t = this._themedColor.value(),
              s = this._backgroundTransparency.value();

          var i = "";

          if (e) {
            var _ref6 = (0, r.parseRgb)(t),
                _ref7 = _slicedToArray(_ref6, 3),
                _e17 = _ref7[0],
                l = _ref7[1],
                _o4 = _ref7[2];

            i = (0, r.rgbaToString)([_e17, l, _o4, (0, r.normalizeAlphaComponent)(1 - s / 100)]);
          }

          this._parentEl.style.color = i;
        }
      }]);

      return J;
    }();

    var Q = s(54358),
        K = s(49152),
        ee = s(87095),
        te = s(36298),
        se = s(57898),
        ie = s(38223),
        le = s(97906),
        oe = s(37591);

    function ae(e) {
      return void 0 !== e ? ee.resetTransparency(e) : e;
    }

    var ne = new te.TranslatedString("show {title}", B.t(null, void 0, s(87358))),
        re = new te.TranslatedString("hide {title}", B.t(null, void 0, s(70301))),
        de = B.t(null, void 0, s(81428)),
        ue = B.t(null, void 0, s(31971));

    var he =
    /*#__PURE__*/
    function () {
      function he(e, t, s, i, l) {
        var _this11 = this;

        _classCallCheck(this, he);

        this._values = new a.WatchedValue([]), this._actions = [], this._onDestroy = new se.Delegate(), this._loading = new a.WatchedValue(!1), this._symbolLogoViewModel = new a.WatchedValue(null), this._moreActionCM = null, this._updateLoadingStatus = function () {
          _this11._loading.setValue(_this11._source.isLoading());
        }, this._model = e, this._source = t, this._options = s, this._callbacks = i, this._contextMenuOptions = l, this._disabled = new a.WatchedValue(this._getDisabledState()), this._disabledOnInterval = new a.WatchedValue(this._getDisabledOnIntervalState()), this._selected = new a.WatchedValue(!1), this._isTitleHidden = new a.WatchedValue(this._getTitleHiddenValue()), this._isValuesHidden = new a.WatchedValue(this._getValuesHiddenValue()), this._isRowHidden = new a.WatchedValue(this._getRowHiddenValue()), this._isEditable = new a.WatchedValue(this._getIsEditable()), (0, le.combine)(function () {
          return {};
        }, this._isTitleHidden.weakReference(), this._isValuesHidden.weakReference(), this._disabled.weakReference()).subscribe(this._updateRowVisibilities.bind(this)), this._values.subscribe(function () {
          _this11._isValuesHidden.setValue(_this11._getValuesHiddenValue());
        });
      }

      _createClass(he, [{
        key: "destroy",
        value: function destroy() {
          var e;
          null === (e = this._symbolLogoViewModel.value()) || void 0 === e || e.destroy();
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          return this._onDestroy;
        }
      }, {
        key: "titles",
        value: function titles() {
          return this._titles;
        }
      }, {
        key: "values",
        value: function values() {
          return this._values.readonly();
        }
      }, {
        key: "actions",
        value: function actions() {
          return this._actions;
        }
      }, {
        key: "disabled",
        value: function disabled() {
          return this._disabled.readonly();
        }
      }, {
        key: "disabledOnInterval",
        value: function disabledOnInterval() {
          return this._disabledOnInterval.readonly();
        }
      }, {
        key: "selected",
        value: function selected() {
          return this._selected.readonly();
        }
      }, {
        key: "loading",
        value: function loading() {
          return this._loading.readonly();
        }
      }, {
        key: "isTitleHidden",
        value: function isTitleHidden() {
          return this._isTitleHidden.readonly();
        }
      }, {
        key: "isValuesHidden",
        value: function isValuesHidden() {
          return this._isValuesHidden.readonly();
        }
      }, {
        key: "isRowHidden",
        value: function isRowHidden() {
          return this._isRowHidden.readonly();
        }
      }, {
        key: "isEditable",
        value: function isEditable() {
          return this._isEditable.readonly();
        }
      }, {
        key: "symbolLogoViewModel",
        value: function symbolLogoViewModel() {
          return this._symbolLogoViewModel;
        }
      }, {
        key: "update",
        value: function update() {
          this._updateTitles(), this._updateValues(), this._updateStates();
        }
      }, {
        key: "updateSource",
        value: function updateSource(e) {
          this._source !== e && (this._source = e, this.update(), this._isTitleHidden.setValue(this._getTitleHiddenValue()), this._isValuesHidden.setValue(this._getValuesHiddenValue()));
        }
      }, {
        key: "onToggleDisabled",
        value: function onToggleDisabled() {
          var e = this._source.properties().childs().visible,
              t = !e.value();

          this._model.setProperty(e, t, (t ? ne : re).format({
            title: new te.TranslatedString(this._source.name(), this._source.title(oe.TitleDisplayTarget.StatusLine))
          })), z((t ? "Show" : "Hide") + " source");
        }
      }, {
        key: "onShowSettings",
        value: function onShowSettings(e) {
          this._source.userEditEnabled() && (this.setSourceSelected(), this._callbacks.showChartPropertiesForSource(this._source, e), z("Settings for source"));
        }
      }, {
        key: "onShowMoreActions",
        value: function onShowMoreActions(e) {
          return this._options.readOnlyMode ? Promise.resolve(null) : (this._callbacks.updateActions(), z("Show source context menu"), this._callbacks.showContextMenuForSources([this._source], this._calcNewPosition(e), this._contextMenuOptions));
        }
      }, {
        key: "setSourceSelected",
        value: function setSourceSelected() {
          var _this12 = this;

          this._model.selectionMacro(function (e) {
            e.clearSelection(), e.addSourceToSelection(_this12._source);
          });
        }
      }, {
        key: "_moreActionHandler",
        value: function _moreActionHandler(e) {
          var _this13 = this;

          e.preventDefault(), null !== this._moreActionCM && this._moreActionCM.isShown() ? this._moreActionCM = null : (this.setSourceSelected(), this.onShowMoreActions(e).then(function (e) {
            _this13._moreActionCM = e;
          }));
        }
      }, {
        key: "_updateStates",
        value: function _updateStates() {
          this._disabled.setValue(this._getDisabledState()), this._disabledOnInterval.setValue(this._getDisabledOnIntervalState()), this._selected.setValue(this._model.selection().isSelected(this._source)), this._isEditable.setValue(this._getIsEditable()), this._updateLoadingStatus();
        }
      }, {
        key: "_hasValues",
        value: function _hasValues() {
          return this._values.value().length > 0;
        }
      }, {
        key: "_getEyeTitle",
        value: function _getEyeTitle() {
          return this._disabled.value() ? de : ue;
        }
      }, {
        key: "_getIsEditable",
        value: function _getIsEditable() {
          return this._source.userEditEnabled();
        }
      }, {
        key: "_getDisabledState",
        value: function _getDisabledState() {
          return !this._source.properties().visible.value();
        }
      }, {
        key: "_updateRowVisibilities",
        value: function _updateRowVisibilities() {
          this._isRowHidden.setValue(this._getRowHiddenValue());
        }
      }, {
        key: "_getRowHiddenValue",
        value: function _getRowHiddenValue() {
          return this._options.readOnlyMode && this._disabled.value() || this._isTitleHidden.value() && (this._isValuesHidden.value() || this._disabled.value());
        }
      }, {
        key: "_calcNewPosition",
        value: function _calcNewPosition(e) {
          var t = {};
          if (e.hasOwnProperty("touches") && e.touches.length > 0) t = {
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
          };else if (null !== e.target) {
            var s = e.target.getBoundingClientRect();
            t = {
              clientX: (0, ie.isRtl)() ? s.right : s.left,
              clientY: s.top + s.height + 3
            };
          } else {
            var _s8 = e;
            t = {
              clientX: _s8.clientX,
              clientY: _s8.clientY
            };
          }
          return t;
        }
      }]);

      return he;
    }();

    var ce = s(93251),
        _e = (s(76266), s(36279)),
        pe = s(28986);

    var me = d.enabled("show_symbol_logos") && d.enabled("show_symbol_logo_in_legend"),
        ge = new (
    /*#__PURE__*/
    function () {
      function _class2() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, _class2);

        this._keys = [], this._cache = new Map(), this._size = e;
      }

      _createClass(_class2, [{
        key: "set",
        value: function set(e, t) {
          if (!this._touchKeyIfExists(e) && (this._keys.push(e), this._size && this._keys.length > this._size)) {
            var _e18 = this._keys.shift();

            this._cache["delete"]((0, o.ensureDefined)(_e18));
          }

          this._cache.set(e, t);
        }
      }, {
        key: "get",
        value: function get(e) {
          return this._touchKeyIfExists(e), this._cache.get(e);
        }
      }, {
        key: "_touchKeyIfExists",
        value: function _touchKeyIfExists(e) {
          var t = this._keys.indexOf(e);

          return -1 !== t && (this._keys.splice(t, 1), this._keys.push(e), !0);
        }
      }]);

      return _class2;
    }())(100);

    var ve =
    /*#__PURE__*/
    function () {
      function ve(e, t) {
        _classCallCheck(this, ve);

        this._symbolLogoUrls = new a.WatchedValue([]), this._quoteDataForLogos = null, this._source = e, this._isLogoVisible = (0, pe.createWVFromGetterAndSubscription)(function () {
          return t.showLogo.value();
        }, t.showLogo), this._source.symbolChanged().subscribe(this, this._quoteSymbolChanged), this._source.symbolResolved().subscribe(this, this._onSourceSymbolResolved), this._quoteSymbolChanged();
      }

      _createClass(ve, [{
        key: "destroy",
        value: function destroy() {
          this._source.symbolChanged().unsubscribeAll(this), this._source.symbolResolved().unsubscribeAll(this), this._isLogoVisible.destroy();
        }
      }, {
        key: "isSymbolLogoVisible",
        value: function isSymbolLogoVisible() {
          return this._isLogoVisible;
        }
      }, {
        key: "symbolLogoUrls",
        value: function symbolLogoUrls() {
          return this._symbolLogoUrls;
        }
      }, {
        key: "symbol",
        value: function symbol() {
          return this._source.symbol();
        }
      }, {
        key: "_updateSymbolLogoUrls",
        value: function _updateSymbolLogoUrls(e, t) {
          var s = t.values;

          if (void 0 !== s.logoid || void 0 !== s["currency-logoid"] || void 0 !== s["base-currency-logoid"]) {
            this._quoteDataForLogos = {
              logoid: s.logoid,
              "currency-logoid": s["currency-logoid"],
              "base-currency-logoid": s["base-currency-logoid"]
            };

            var _e19 = this.symbol();

            _e19 && ge.set(_e19, this._quoteDataForLogos), this._updateLogoUrls();
          }
        }
      }, {
        key: "_quoteSymbolChanged",
        value: function _quoteSymbolChanged() {
          var e, t, s;

          var i = this._source.quotesProvider().quotes(),
              l = (0, o.ensureNotNull)(this.symbol()),
              a = ge.get(l);

          this._quoteDataForLogos = {
            logoid: null !== (e = null == i ? void 0 : i.logoid) && void 0 !== e ? e : null == a ? void 0 : a.logoid,
            "currency-logoid": null !== (t = null == i ? void 0 : i["currency-logoid"]) && void 0 !== t ? t : null == a ? void 0 : a["currency-logoid"],
            "base-currency-logoid": null !== (s = null == i ? void 0 : i["base-currency-logoid"]) && void 0 !== s ? s : null == a ? void 0 : a["base-currency-logoid"]
          }, this._updateLogoUrls();
        }
      }, {
        key: "_updateLogoUrls",
        value: function _updateLogoUrls() {
          if (this._quoteDataForLogos) {
            var _e20 = (0, ce.removeUsdFromCryptoPairLogos)((0, ce.resolveLogoUrls)(this._quoteDataForLogos, _e.LogoSize.Medium));

            this._symbolLogoUrls.setValue(_e20);
          }
        }
      }, {
        key: "_onSourceSymbolResolved",
        value: function _onSourceSymbolResolved() {
          {
            var _e21 = this._source.symbolInfo();

            this._quoteDataForLogos = {};

            var _t13 = (null == _e21 ? void 0 : _e21.logo_urls) || [];

            1 === _t13.length ? this._quoteDataForLogos = {
              logoid: _t13[0]
            } : 2 === _t13.length && (this._quoteDataForLogos = {
              "currency-logoid": _t13[0],
              "base-currency-logoid": _t13[1]
            }), this._updateLogoUrls();
          }
        }
      }]);

      return ve;
    }();

    function be(e, t) {
      return me ? new ve(e, t) : null;
    }

    var we = s(14787),
        ye = s(3792),
        Se = s(41674),
        fe = s(87258),
        Me = s(45534);
    var Ce = B.t(null, void 0, s(41610)),
        Ee = B.t(null, void 0, s(93666)),
        Ve = B.t(null, void 0, s(8209)),
        ke = d.enabled("show_hide_button_in_legend"),
        Ae = d.enabled("hide_resolution_in_legend");

    var Le =
    /*#__PURE__*/
    function (_he) {
      _inherits(Le, _he);

      function Le(e, t, s, i, l) {
        var _this14;

        _classCallCheck(this, Le);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Le).call(this, e, t, s, i, l)), _this14._titles = {
          title: new a.WatchedValue(""),
          description: new a.WatchedValue(""),
          interval: new a.WatchedValue(""),
          provider: new a.WatchedValue(""),
          exchange: new a.WatchedValue(""),
          chartStyle: new a.WatchedValue(""),
          priceSource: new a.WatchedValue("")
        }, _this14._symbolMarker = null, _this14._symbolMarkerIcon = null, _this14._flagged = new a.WatchedValue(null), _this14._symbolAction = null, _this14._symbolForMarker = null, _this14._isOneButtonCanBeStick = !1, _this14._layoutChartSyncLegendRenderer = null, _this14._isChartLinked = new a.WatchedValue(!1).readonly().spawn(), _this14._createActions(), _this14._updateSymbolMarker();

        var o = _this14._model.model().properties().childs().paneProperties.childs().legendProperties.childs();

        _this14._symbolLogoViewModel.setValue(be(t, o)), o.showSeriesTitle.subscribe(_assertThisInitialized(_this14), function () {
          _this14._isTitleHidden.setValue(_this14._getTitleHiddenValue());
        }), _this14._isPriceSourceHidden = (0, K.createWVFromGetterAndSubscription)(function () {
          return !o.showPriceSource.value();
        }, o.showPriceSource), _this14._valuesVisibleProperty = (0, K.combineProperty)(function (e, t, s) {
          return e || t || s;
        }, o.showSeriesOHLC.weakReference(), o.showBarChange.weakReference(), o.showVolume.weakReference()), _this14._valuesVisibleProperty.subscribe(null, function () {
          _this14._isValuesHidden.setValue(_this14._getValuesHiddenValue());
        }), _this14.update(), _this14._source.onStatusChanged().subscribe(_assertThisInitialized(_this14), _this14._updateLoadingStatus);
        return _this14;
      }

      _createClass(Le, [{
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(Le.prototype), "destroy", this).call(this), this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.unsubscribeAll(this), this._source.onStatusChanged().unsubscribeAll(this), this._valuesVisibleProperty.destroy(), this._isPriceSourceHidden.destroy(), this._onDestroy.fire();
        }
      }, {
        key: "flagged",
        value: function flagged() {
          return this._flagged;
        }
      }, {
        key: "linked",
        value: function linked() {
          return this._isChartLinked;
        }
      }, {
        key: "onShowSettings",
        value: function onShowSettings() {
          this._source.userEditEnabled() && this._callbacks.showGeneralChartProperties(we.TabNames.symbol);
        }
      }, {
        key: "isOneButtonCanBeStick",
        value: function isOneButtonCanBeStick() {
          return this._isOneButtonCanBeStick;
        }
      }, {
        key: "_updateTitles",
        value: function _updateTitles() {
          var e = (0, o.ensureNotNull)(this._source.statusView()).getSplitTitle();
          this._titles.title.setValue((0, Q.clean)(e.title, !0)), this._titles.description.setValue((0, Q.clean)(e.description, !0)), Ae || this._titles.interval.setValue((0, Q.clean)(e.interval, !0)), this._titles.provider.setValue((0, Q.clean)(e.provider, !0)), this._titles.exchange.setValue((0, Q.clean)(e.exchange, !0)), this._titles.chartStyle.setValue((0, Q.clean)(e.chartStyle, !0)), this._titles.priceSource.setValue((0, Q.clean)(this._isPriceSourceHidden.value() ? "" : e.priceSource, !0));
        }
      }, {
        key: "_updateValues",
        value: function _updateValues() {
          var e = this._source.legendView(),
              t = this._values.value(),
              s = e.marketTitle(),
              i = e.marketTitle().length > 0;

          if (0 === t.length) {
            var _t14 = {
              value: new a.WatchedValue(""),
              color: new a.WatchedValue(""),
              visible: new a.WatchedValue(i),
              title: new a.WatchedValue(s),
              unimportant: new a.WatchedValue(!1)
            },
                l = e.items().map(function (e) {
              return {
                value: new a.WatchedValue(e.value()),
                color: new a.WatchedValue(ae(e.color())),
                visible: new a.WatchedValue(e.visible()),
                title: new a.WatchedValue(e.title()),
                unimportant: new a.WatchedValue(e.unimportant())
              };
            });

            this._values.setValue([_t14].concat(l));
          } else {
            t[0].title.setValue(s), t[0].visible.setValue(i);

            var _l3 = e.items();

            for (var _e22 = 0; _e22 < _l3.length; _e22++) {
              var _s9 = _l3[_e22];
              t[_e22 + 1].value.setValue(_s9.value()), t[_e22 + 1].color.setValue(ae(_s9.color())), t[_e22 + 1].visible.setValue(_s9.visible()), t[_e22 + 1].title.setValue(_s9.title());
            }
          }
        }
      }, {
        key: "_updateStates",
        value: function _updateStates() {
          _get(_getPrototypeOf(Le.prototype), "_updateStates", this).call(this), this._updateSymbolMarker();
        }
      }, {
        key: "_getDisabledOnIntervalState",
        value: function _getDisabledOnIntervalState() {
          return !1;
        }
      }, {
        key: "_getTitleHiddenValue",
        value: function _getTitleHiddenValue() {
          return !this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.value();
        }
      }, {
        key: "_getValuesHiddenValue",
        value: function _getValuesHiddenValue() {
          return !this._hasValues() || !this._valuesVisibleProperty.value();
        }
      }, {
        key: "_createActions",
        value: function _createActions() {
          var _this15 = this;

          if (ke) {
            var _e23 = {
              iconMap: new Map([["large", Se], ["small", ye]]),
              action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
              visible: new a.WatchedValue(!0),
              className: y.eye,
              title: new a.WatchedValue(this._getEyeTitle()),
              dataset: {
                name: "legend-show-hide-action"
              }
            };
            this._actions.push(_e23), this._disabled.subscribe(function () {
              _e23.title.setValue(_this15._getEyeTitle());
            });
          }

          this._actions.push({
            iconMap: new Map([["large", Me], ["small", fe]]),
            action: this._moreActionHandler.bind(this),
            visible: new a.WatchedValue(!0),
            title: new a.WatchedValue(Ce),
            dataset: {
              name: "legend-more-action"
            }
          });
        }
      }, {
        key: "_getMarkerTitle",
        value: function _getMarkerTitle() {
          return null !== this._symbolMarker ? this._symbolMarker.isMarked() ? Ve : Ee : "";
        }
      }, {
        key: "_symbolActionHandler",
        value: function _symbolActionHandler() {
          null !== this._symbolMarker && (this._updateSymbolMarker(), z("Change flag state"));
        }
      }, {
        key: "_updateSymbolMarker",
        value: function _updateSymbolMarker() {
          this._isOneButtonCanBeStick = !0;
        }
      }]);

      return Le;
    }(he);

    var We = s(28853),
        Te = s(3615);
    var xe = s(96362),
        He = s(59224),
        De = s(83637),
        Pe = s(34882),
        Be = s(88658),
        Ie = s(52506),
        ze = s(64063),
        Ne = s(8561),
        Oe = s(18611);
    (0, He.getLogger)("Chart.LegendWidget");
    var Fe = B.t(null, void 0, s(89517)),
        Re = B.t(null, void 0, s(66324)),
        Ue = B.t(null, void 0, s(34596)),
        Ge = B.t(null, void 0, s(41610)),
        $e = (B.t(null, void 0, s(82751)), B.t(null, void 0, s(89790)), B.t(null, void 0, s(37809))),
        je = (d.enabled("study_buttons_in_legend"), d.enabled("show_hide_button_in_legend")),
        Ye = d.enabled("property_pages"),
        qe = d.enabled("format_button_in_legend"),
        Ze = d.enabled("delete_button_in_legend");

    var Xe =
    /*#__PURE__*/
    function (_he2) {
      _inherits(Xe, _he2);

      function Xe(e, t, s, i, l) {
        var _this16;

        _classCallCheck(this, Xe);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Xe).call(this, e, t, s, i, l)), _this16._titles = {
          title: new a.WatchedValue(""),
          args: new a.WatchedValue("")
        }, _this16._error = new a.WatchedValue(!1), _this16._isPineScriptDataSource = new a.WatchedValue(!1), _this16._pineAction = null, _this16._globalVisibility = new a.WatchedValue(!0), _this16._updateSymbolLogoModel(), _this16._createActions();

        var o = _this16._model.model().properties().childs().paneProperties.childs().legendProperties.childs(),
            n = [o.showSeriesTitle, o.showStudyTitles];

        for (var _i7 = 0, _n2 = n; _i7 < _n2.length; _i7++) {
          var _e24 = _n2[_i7];

          _e24.subscribe(_assertThisInitialized(_this16), function () {
            _this16._isTitleHidden.setValue(_this16._getTitleHiddenValue());
          });
        }

        var r = [o.showSeriesOHLC, o.showBarChange, o.showStudyValues];

        for (var _i8 = 0, _r = r; _i8 < _r.length; _i8++) {
          var _e25 = _r[_i8];

          _e25.subscribe(_assertThisInitialized(_this16), function () {
            _this16._isValuesHidden.setValue(_this16._getValuesHiddenValue());
          });
        }

        _this16.update();

        return _this16;
      }

      _createClass(Xe, [{
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(Xe.prototype), "destroy", this).call(this);

          var e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();

          e.showSeriesTitle.unsubscribeAll(this), e.showStudyTitles.unsubscribeAll(this), e.showSeriesOHLC.unsubscribeAll(this), e.showBarChange.unsubscribeAll(this), e.showStudyValues.unsubscribeAll(this), this._onDestroy.fire();
        }
      }, {
        key: "error",
        value: function error() {
          return this._error.readonly();
        }
      }, {
        key: "isPineScriptDataSource",
        value: function isPineScriptDataSource() {
          return this._isPineScriptDataSource.readonly();
        }
      }, {
        key: "updateSource",
        value: function updateSource(e) {
          this._source !== e && (this._values.setValue([]), _get(_getPrototypeOf(Xe.prototype), "updateSource", this).call(this, e), this._updateAbleShowSourceCode(), this._updateSymbolLogoModel());
        }
      }, {
        key: "onRemoveSource",
        value: function onRemoveSource() {
          var e;
          this._source.isUserDeletable() && (this._source.hasChildren() ? (e = this._model.removeSource.bind(this._model, this._source, !1), (0, Te.showConfirm)({
            title: B.t(null, void 0, s(38154)),
            text: B.t(null, void 0, s(52003)),
            onConfirm: function onConfirm(_ref8) {
              var t = _ref8.dialogClose;
              e(), t();
            }
          })) : this._model.removeSource(this._source, !1), z("Remove sources"));
        }
      }, {
        key: "onShowSourceCode",
        value: function onShowSourceCode() {
          0;
        }
      }, {
        key: "setGlobalVisibility",
        value: function setGlobalVisibility(e) {
          this._globalVisibility.setValue(e);
        }
      }, {
        key: "globalVisibility",
        value: function globalVisibility() {
          return this._globalVisibility.readonly();
        }
      }, {
        key: "getFullTitle",
        value: function getFullTitle() {
          return [this._titles.title, this._titles.args].map(function (e) {
            return e.value();
          }).join(" ");
        }
      }, {
        key: "_updateTitles",
        value: function _updateTitles() {
          var e = (0, o.ensureNotNull)(this._source.statusView()).getSplitTitle();

          this._titles.title.setValue((0, Q.clean)(e[0], !0));

          var t = Array.isArray(e[1]) ? e[1].join(" ") : e[1] || "";

          this._titles.args.setValue((0, Q.clean)(t, !0));
        }
      }, {
        key: "_updateValues",
        value: function _updateValues() {
          var e = this._source.legendView();

          if (null === e) return;
          if (0 === e.items().length) return;

          var t = this._values.value();

          if (0 === t.length) {
            var _t15 = e.items().map(function (e) {
              return {
                value: new a.WatchedValue(e.value()),
                color: new a.WatchedValue(ae(e.color())),
                visible: new a.WatchedValue(e.visible()),
                unimportant: new a.WatchedValue(e.unimportant()),
                title: new a.WatchedValue(e.title())
              };
            });

            this._values.setValue(_t15);
          } else {
            var _s10 = e.items();

            for (var _e26 = 0; _e26 < _s10.length; _e26++) {
              var i = t[_e26],
                  l = _s10[_e26];
              i.value.setValue(l.value()), i.color.setValue(ae(l.color())), i.visible.setValue(l.visible()), i.title.setValue(l.title());
            }
          }
        }
      }, {
        key: "_updateStates",
        value: function _updateStates() {
          _get(_getPrototypeOf(Xe.prototype), "_updateStates", this).call(this), void 0 !== this._error && this._error.setValue(Boolean(this._source.isFailed()));
        }
      }, {
        key: "_getTitleHiddenValue",
        value: function _getTitleHiddenValue() {
          var e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();

          return this._isSymbolLikeStudy() ? !e.showSeriesTitle.value() : !e.showStudyTitles.value();
        }
      }, {
        key: "_getDisabledOnIntervalState",
        value: function _getDisabledOnIntervalState() {
          return !(!(0, We.isStudy)(this._source) && !(0, We.isStudyStub)(this._source)) && !this._source.isActualInterval();
        }
      }, {
        key: "_getValuesHiddenValue",
        value: function _getValuesHiddenValue() {
          if (!this._hasValues()) return !0;

          var e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();

          return this._isSymbolLikeStudy() ? !e.showSeriesOHLC.value() && !e.showBarChange.value() : !e.showStudyValues.value();
        }
      }, {
        key: "_isSymbolLikeStudy",
        value: function _isSymbolLikeStudy() {
          return this._source instanceof ze.study_Overlay || this._source instanceof Ne.StudyCompare;
        }
      }, {
        key: "_updateAbleShowSourceCode",
        value: function _updateAbleShowSourceCode() {
          0;
        }
      }, {
        key: "_updateVisibilityPineAction",
        value: function _updateVisibilityPineAction(e) {
          null !== this._pineAction && (this._pineAction.visible.setValue(e), this._isPineScriptDataSource.setValue(e));
        }
      }, {
        key: "_createActions",
        value: function _createActions() {
          var _this17 = this;

          if (this._options.readOnlyMode) return;

          if (this._pineAction = {
            iconMap: new Map([["large", Pe], ["small", Pe]]),
            action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSourceCode.bind(this)),
            visible: new a.WatchedValue(!1),
            title: new a.WatchedValue(Re),
            dataset: {
              name: "legend-pine-action"
            }
          }, je) {
            var _e27 = {
              iconMap: new Map([["large", Se], ["small", ye]]),
              action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
              visible: new a.WatchedValue(!this._getDisabledOnIntervalState()),
              className: y.eye,
              title: new a.WatchedValue(this._getEyeTitle()),
              dataset: {
                name: "legend-show-hide-action"
              }
            };
            this._actions.push(_e27), this._disabled.subscribe(function () {
              _e27.title.setValue(_this17._getEyeTitle());
            });
            var _t16 = {
              iconMap: new Map([["large", Se], ["small", ye]]),
              action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this, we.TabNames.visibility)),
              visible: new a.WatchedValue(this._getDisabledOnIntervalState()),
              className: y.intervalEye,
              title: new a.WatchedValue($e),
              dataset: {
                name: "legend-interval-show-hide-action"
              }
            };
            this._actions.push(_t16), this._disabledOnInterval.subscribe(function (s) {
              _t16.visible.setValue(s), _e27.visible.setValue(!s);
            });
          }

          if (Ye && qe && (!(0, We.isStudy)(this._source) || new xe.MetaInfoHelper(this._source.metaInfo()).hasUserEditableOptions())) {
            var _e28 = {
              iconMap: new Map([["large", De], ["small", De]]),
              action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this)),
              visible: new a.WatchedValue(this._getIsEditable()),
              title: new a.WatchedValue(Fe),
              dataset: {
                name: "legend-settings-action"
              }
            };
            this._actions.push(_e28), this._isEditable.subscribe(function (t) {
              _e28.visible.setValue(t);
            });
          }

          if (Ze) {
            var _e29 = {
              iconMap: new Map([["large", Ie], ["small", Be]]),
              action: (0, m.wrapHandlerWithPreventEvent)(this.onRemoveSource.bind(this)),
              visible: new a.WatchedValue(this._getIsEditable()),
              title: new a.WatchedValue(Ue),
              dataset: {
                name: "legend-delete-action"
              }
            };
            this._actions.push(_e29), this._isEditable.subscribe(function (t) {
              _e29.visible.setValue(t);
            });
          }

          var e = {
            iconMap: new Map([["large", Me], ["small", fe]]),
            action: this._moreActionHandler.bind(this),
            visible: new a.WatchedValue(this._getIsEditable()),
            title: new a.WatchedValue(Ge),
            dataset: {
              name: "legend-more-action"
            }
          };
          this._actions.push(e), this._isEditable.subscribe(function (t) {
            e.visible.setValue(t);
          });
        }
      }, {
        key: "_updateSymbolLogoModel",
        value: function _updateSymbolLogoModel() {
          var e;

          if (null === (e = this._symbolLogoViewModel.value()) || void 0 === e || e.destroy(), (0, Oe.isSymbolSourceWithQuotesProvider)(this._source)) {
            var _e30 = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();

            this._symbolLogoViewModel.setValue(be(this._source, _e30));
          } else this._symbolLogoViewModel.setValue(null);
        }
      }]);

      return Xe;
    }(he);

    var Je = s(39347),
        Qe = s(10643),
        Ke = s(42960),
        et = s(98425),
        tt = s(53180),
        st = s(51983);

    function it(e, t, s) {
      e.setProperty(t, !t.value(), s);
    }

    var lt = new te.TranslatedString("change symbol description visibility", B.t(null, void 0, s(26717))),
        ot = new te.TranslatedString("change open market status visibility", B.t(null, void 0, s(18644))),
        at = new te.TranslatedString("change OHLC values visibility", B.t(null, void 0, s(57889))),
        nt = new te.TranslatedString("change bar change visibility", B.t(null, void 0, s(45110))),
        rt = new te.TranslatedString("change indicator titles visibility", B.t(null, void 0, s(31325))),
        dt = new te.TranslatedString("change indicator arguments visibility", B.t(null, void 0, s(96162))),
        ut = new te.TranslatedString("change indicator values visibility", B.t(null, void 0, s(99774))),
        ht = new te.TranslatedString("change volume values visibility", B.t(null, void 0, s(9455))),
        ct = new te.TranslatedString("change symbol field visibility", B.t(null, void 0, s(6091))),
        _t = B.t(null, void 0, s(63143)),
        pt = B.t(null, void 0, s(75991)),
        mt = B.t(null, void 0, s(99487)),
        gt = B.t(null, void 0, s(22519)),
        vt = B.t(null, void 0, s(1111)),
        bt = B.t(null, void 0, s(26315)),
        wt = B.t(null, void 0, s(26935)),
        yt = B.t(null, void 0, s(84098)),
        St = B.t(null, void 0, s(46041)),
        ft = (0, tt.appendEllipsis)(B.t(null, void 0, s(89517))),
        Mt = d.enabled("symbol_info_price_source");

    var Ct = s(78071),
        Et = s(38618),
        Vt = s(61146),
        kt = s(967),
        At = s(84917),
        Lt = s(41249),
        Wt = s(32923);

    function Tt(e) {
      return e === At.WeekDays.SUNDAY ? At.WeekDays.SATURDAY : e - 1;
    }

    function xt(e) {
      return e === At.WeekDays.SATURDAY ? At.WeekDays.SUNDAY : e + 1;
    }

    function Ht(e, t) {
      var s = Tt(t);
      return 0 === e[s].entries.length ? Ht(e, s) : {
        dayIndex: s,
        entries: e[s].entries
      };
    }

    function Dt(e, t) {
      var s = xt(t);
      return 0 === e[s].entries.length ? Dt(e, s) : {
        dayIndex: s,
        entries: e[s].entries
      };
    }

    function Pt(e) {
      for (; e > Lt.minutesPerDay;) {
        e -= Lt.minutesPerDay;
      }

      var t = e % 60,
          s = (e - t) / 60;
      return (0, Vt.numberToStringWithLeadingZero)(s, 2) + ":" + (0, Vt.numberToStringWithLeadingZero)(t, 2);
    }

    var Bt = (_Bt = {}, _defineProperty(_Bt, At.WeekDays.MONDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.MONDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.TUESDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.TUESDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.WEDNESDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.WEDNESDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.THURSDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.THURSDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.FRIDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.FRIDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.SATURDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.SATURDAY],
      isActive: !1,
      entries: []
    }), _defineProperty(_Bt, At.WeekDays.SUNDAY, {
      title: kt.weekDaysShortNames[At.WeekDays.SUNDAY],
      isActive: !1,
      entries: []
    }), _Bt);

    function It(e, t) {
      return e.start.value === t.start.value && e.end.value === t.end.value;
    }

    function zt(e, t) {
      return It(e[0], t[0]);
    }

    function Nt(e) {
      var t = e.start(),
          s = e.length(),
          i = e.sessionStartDayOfWeek(),
          l = e.sessionEndDayOfWeek(),
          o = Pt(t),
          a = Pt(t + s);
      return s > Lt.minutesPerDay ? "".concat(kt.weekDaysShortNames[i], " ").concat(o, " \u2014 ").concat(kt.weekDaysShortNames[l], " ").concat(a) : "".concat(o, " \u2014 ").concat(a);
    }

    function Ot(e, t, s, i) {
      return Math.abs(i - s) > 1 ? "".concat(kt.weekDaysShortNames[s], " ").concat(e.title, " \u2014 ").concat(kt.weekDaysShortNames[i], " ").concat(t.title) : "".concat(e.title, " \u2014 ").concat(t.title);
    }

    function Ft(e, t, s) {
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = t[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var i = _step14.value;

          var _t17 = i.sessionStartDayOfWeek();

          var l = i.start(),
              _o5 = i.length(),
              _a2 = l + _o5,
              _n3 = [];

          if (_a2 <= Lt.minutesPerDay) _n3.push([l, _a2]);else {
            var _e31 = Math.min(Lt.minutesPerDay - l, _o5);

            _n3.push([l, l + _e31]), _n3.push([0, _o5 - _e31]);
          }

          for (var _l4 = 0; _l4 < _n3.length; _l4++) {
            var _o6 = _n3[_l4],
                _o7 = _slicedToArray(_o6, 2),
                _a3 = _o7[0],
                _r2 = _o7[1],
                _d2 = _a3 / Lt.minutesPerDay,
                _u = (0, Ct.lowerbound)(e[_t17].entries, _d2, function (e, t) {
              return e.start.value < t;
            }),
                _h = {
              start: {
                value: _d2,
                title: Pt(_a3),
                isFirstOrLastPoint: _a3 === i.start()
              },
              end: {
                value: _r2 / Lt.minutesPerDay,
                title: Pt(_r2),
                isFirstOrLastPoint: _n3.length - 1 === _l4
              },
              type: s,
              tooltip: Nt(i),
              showStartForLastEntry: !1,
              showEndForFirstEntry: !1
            };

            e[_t17].entries.splice(_u, 0, _h), _t17 = xt(_t17);
          }
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }

    var Rt =
    /*#__PURE__*/
    function () {
      function Rt(e) {
        _classCallCheck(this, Rt);

        this.sessionsDays = new a.WatchedValue((0, n.clone)(Bt)), this.todaySession = new a.WatchedValue((0, n.clone)({
          entries: []
        })), this._todayInExchangeTime = null, this._symbolInfo = e.symbolInfo().spawn(), this._symbolInfo.subscribe(this._updateEntriesBySubSessions.bind(this), {
          callWithLast: !0
        });
      }

      _createClass(Rt, [{
        key: "destroy",
        value: function destroy() {
          this._symbolInfo.destroy();
        }
      }, {
        key: "currentTimeValue",
        value: function currentTimeValue() {
          return null === this._todayInExchangeTime ? -1 : Lt.get_minutes_from_midnight(this._todayInExchangeTime) / Lt.minutesPerDay;
        }
      }, {
        key: "timezone",
        value: function timezone() {
          var e = this._symbolInfo.value();

          return null === e ? "" : (0, Et.timezoneTitle)(e.timezone);
        }
      }, {
        key: "_updateEntriesBySubSessions",
        value: function _updateEntriesBySubSessions(e) {
          var t;

          this._updateTodayWithOffsets(e);

          var s = this._createSubSessionSpecs(e),
              i = (l = (null === (t = this._todayInExchangeTime) || void 0 === t ? void 0 : t.getUTCDay()) || new Date().getDay()) < At.WeekDays.SATURDAY ? l + 1 : At.WeekDays.SUNDAY;

          var l;
          var a = (0, n.clone)(Bt);
          a[i].isActive = !0;

          for (var _i9 = 0, _Array$from = Array.from(s.keys()); _i9 < _Array$from.length; _i9++) {
            var _e33 = _Array$from[_i9];
            Ft(a, (0, o.ensureDefined)(s.get(_e33)).getEntriesForWeekByCalendar((0, o.ensureNotNull)(this._todayInExchangeTime)), _e33);
          }

          !function (e) {
            var t = Pt(0),
                s = Pt(Lt.minutesPerDay),
                i = (0, n.clone)(e);

            for (var _i10 = 0, _Object$keys = Object.keys(e); _i10 < _Object$keys.length; _i10++) {
              var _l5 = _Object$keys[_i10];

              var _a4 = parseInt(_l5),
                  _n4 = e[_a4].entries;

              if (0 === _n4.length) {
                _n4.push({
                  start: {
                    value: 0,
                    title: t,
                    isFirstOrLastPoint: !0
                  },
                  end: {
                    value: 1,
                    title: s,
                    isFirstOrLastPoint: !0
                  },
                  type: 3,
                  tooltip: "".concat(t, " \u2014 ").concat(s),
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1
                });

                continue;
              }

              var _r3 = Tt(_a4),
                  _d3 = xt(_a4),
                  _u2 = i[_r3].entries,
                  _h2 = i[_d3].entries,
                  _c = Ht(i, _a4),
                  _2 = Dt(i, _a4),
                  _p = _n4.length;

              var _m = 0;

              for (var _e32 = 0; _e32 < _p; _e32++) {
                var _s11 = _n4[_e32],
                    _i11 = _e32 > 0 ? _n4[_e32 - 1] : null,
                    _l6 = 0 === _e32;

                if (0 === _s11.start.value || 0 === _s11.start.value && 1 === _s11.end.value || null !== _i11 && _s11.start.value === _i11.end.value) {
                  _m++;
                  continue;
                }

                var _r4 = _l6 ? _c.entries[_c.entries.length - 1] : (0, o.ensureNotNull)(_i11),
                    _d4 = {
                  start: {
                    value: _l6 ? 0 : _n4[_e32 - 1].end.value,
                    title: _l6 ? t : _n4[_e32 - 1].end.title,
                    isFirstOrLastPoint: !(_l6 && _u2.length > 0) || 1 === _u2[_u2.length - 1].end.value
                  },
                  end: {
                    value: _s11.start.value,
                    title: _s11.start.title,
                    isFirstOrLastPoint: !0
                  },
                  type: 3,
                  tooltip: Ot(_r4.end, _s11.start, _c.dayIndex, _a4),
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1
                };

                _n4.splice(_m, 0, _d4), _m = _e32 + 2;
              }

              var _g = _n4[_n4.length - 1];
              1 !== _g.end.value && _n4.push({
                start: {
                  value: _g.end.value,
                  title: _g.end.title,
                  isFirstOrLastPoint: !0
                },
                end: {
                  value: 1,
                  title: Pt(Lt.minutesPerDay),
                  isFirstOrLastPoint: !(_h2.length > 0) || 0 === _h2[0].start.value
                },
                type: 3,
                tooltip: Ot(_g.end, _2.entries[0].start, _a4, _2.dayIndex),
                showStartForLastEntry: !1,
                showEndForFirstEntry: !1
              });
            }
          }(a), function (e) {
            for (var _i12 = 0, _Object$keys2 = Object.keys(e); _i12 < _Object$keys2.length; _i12++) {
              var _i13 = _Object$keys2[_i12];

              var _l7 = parseInt(_i13),
                  _o8 = e[_l7].entries;

              if (1 === _o8.length) continue;

              var _a5 = Tt(_l7),
                  _n5 = xt(_l7),
                  _r5 = _o8[0],
                  _d5 = _o8[_o8.length - 1];

              _r5.start.isFirstOrLastPoint || (_r5.showStartForLastEntry = (t = _o8, s = e[_a5].entries, It(t[t.length - 1], s[s.length - 1]))), _d5.end.isFirstOrLastPoint || (_d5.showEndForFirstEntry = zt(_o8, e[_n5].entries));
            }

            var t, s;
          }(a), this.sessionsDays.setValue(a), this.todaySession.setValue(a[i]);
        }
      }, {
        key: "_createSubSessionSpecs",
        value: function _createSubSessionSpecs(e) {
          if (null === e) return new Map();
          if (void 0 === e.subsessions) return new Map([[0, new Wt.SessionSpec(e.timezone, e.session, e.session_holidays, e.corrections)]]);
          var t = "regular",
              s = "premarket",
              i = "postmarket",
              l = [t, s, i],
              o = new Map();

          var _loop2 = function _loop2() {
            var a = _l8[_i14];
            var l = null;

            switch (a) {
              case t:
                l = 0;
                break;

              case s:
                l = 1;
                break;

              case i:
                l = 2;
            }

            if (null !== l) {
              var _t18 = e.subsessions.find(function (e) {
                return e.id === a;
              });

              void 0 !== _t18 && o.set(l, new Wt.SessionSpec(e.timezone, _t18["session-display"] || _t18.session, e.session_holidays, _t18["session-correction"]));
            }
          };

          for (var _i14 = 0, _l8 = l; _i14 < _l8.length; _i14++) {
            _loop2();
          }

          return o;
        }
      }, {
        key: "_updateTodayWithOffsets",
        value: function _updateTodayWithOffsets(e) {
          if (null === e) return void (this._todayInExchangeTime = null);
          var t = 1e3 * window.ChartApiInstance.serverTimeOffset();
          this._todayInExchangeTime = Lt.get_cal_from_unix_timestamp_ms(Lt.get_timezone(e.timezone), Date.now() + t);
        }
      }]);

      return Rt;
    }();

    var Ut = s(50959),
        Gt = s(77975),
        $t = s(36174),
        jt = s(83314);
    var Yt = new WeakMap();

    function qt(e) {
      return Yt.has(e) || Yt.set(e, (0, $t.randomHash)()), (0, o.ensureDefined)(Yt.get(e));
    }

    var Zt = new Map([[0, jt.green], [1, jt.orange], [2, jt.blue], [3, jt.gray]]),
        Xt = new Map([[0, B.t(null, void 0, s(83949))], [1, B.t(null, void 0, s(56042))], [2, B.t(null, void 0, s(29985))], [3, B.t(null, void 0, s(95814))]]),
        Jt = B.t(null, void 0, s(80227));

    function Qt(e) {
      var t = e.segment,
          s = e.forceStart,
          i = e.forceEnd,
          l = t.end.value - t.start.value,
          o = l < .03,
          a = {
        left: 100 * t.start.value + "%",
        width: "calc(".concat(100 * l, "% + ").concat(o ? 2 : 0, "px)")
      },
          n = C(jt.segment, Zt.get(t.type), (s || t.start.isFirstOrLastPoint) && jt.start, (i || t.end.isFirstOrLastPoint) && jt.end, o && jt.small, "common-tooltip-html", "apply-common-tooltip"),
          r = function (e, t) {
        return "<div class=\"".concat(jt.tooltip, "\">\n\t\t<span class=\"").concat(Zt.get(t), "\">").concat(Xt.get(t), "</span>\n\t\t<span class=\"").concat(jt.time, "\">").concat(e, "</span>\n\t</div>");
      }(t.tooltip, t.type);

      return Ut.createElement("div", {
        className: n,
        style: a,
        "data-tooltip": r
      });
    }

    function Kt(e) {
      var t = e.sessionDay,
          s = t.entries.map(function (e, s) {
        return Ut.createElement(Qt, {
          key: "".concat(qt(e), "Segment"),
          segment: e,
          forceStart: 0 === s && 3 === e.type,
          forceEnd: s === t.entries.length - 1 && 3 === e.type
        });
      }),
          i = C(jt.sessionDay, t.isActive && jt.active);
      return Ut.createElement("div", {
        className: i
      }, Ut.createElement("div", {
        className: jt.weekDay
      }, t.title), Ut.createElement("div", {
        className: jt.sessionDaySegments
      }, s));
    }

    function es(e) {
      var t = e.sessionDays,
          s = e.currentTimeMark,
          i = [],
          l = parseInt(Object.keys(t).filter(function (e) {
        return t[parseInt(e)].isActive;
      })[0]),
          o = t[l],
          a = o.entries.filter(function (e) {
        return e.start.value <= s && e.end.value >= s;
      })[0];
      !a.start.isFirstOrLastPoint && a.showStartForLastEntry ? i.push(o.entries[o.entries.length - 1].start) : i.push(a.start);
      var n = !a.end.isFirstOrLastPoint && a.showEndForFirstEntry ? o.entries[0].end : a.end;
      if (i[0].value !== n.value && i.push(n), 0 === i.length) return null;
      i.sort(function (e, t) {
        return e.value - t.value;
      });
      var r = i.map(function (e) {
        return Ut.createElement("div", {
          key: qt(e),
          className: jt.timeMark
        }, e.title);
      }),
          d = 100 * (2 === i.length ? i[1].value - i[0].value : 0),
          u = C(d > 12 && jt.timeMarkSegmentAlignByEnds, jt.timeMarkSegment);
      return Ut.createElement("div", {
        className: jt.sessionDay
      }, Ut.createElement("div", {
        className: jt.weekDay
      }), Ut.createElement("div", {
        className: jt.timeMarkWrapper
      }, Ut.createElement("div", {
        className: u,
        style: {
          left: 100 * i[0].value + "%",
          width: "".concat(d, "%")
        }
      }, r)));
    }

    var ts =
    /*#__PURE__*/
    function () {
      function ts(e) {
        _classCallCheck(this, ts);

        this._source = e, this._fullSessionScheduleViewModel = new Rt(e);
      }

      _createClass(ts, [{
        key: "destroy",
        value: function destroy() {
          this._fullSessionScheduleViewModel.destroy();
        }
      }, {
        key: "renderer",
        value: function renderer(e, t) {
          var s, i;
          return (null === (i = null === (s = this._source.marketStatusModel()) || void 0 === s ? void 0 : s.futuresContractExpirationTime()) || void 0 === i ? void 0 : i.expired().value()) ? null : function (e) {
            var t = e.key,
                s = e.className,
                i = e.now,
                l = e.timezone,
                o = (0, Gt.useWatchedValueReadonly)({
              watchedValue: e.sessionDays
            }),
                a = Object.values(o).filter(function (e) {
              return e.isActive;
            })[0],
                n = C(s, jt.wrapper);
            return Ut.createElement("div", {
              key: t,
              className: n
            }, Ut.createElement("div", {
              className: jt.sessionDayWrapper
            }, Ut.createElement(Kt, {
              sessionDay: a
            }), Ut.createElement("div", {
              className: jt.nowWrapper
            }, Ut.createElement("div", {
              className: jt.now,
              style: {
                left: 100 * i + "%"
              }
            }))), Ut.createElement(es, {
              sessionDays: o,
              currentTimeMark: i
            }), Ut.createElement("div", {
              className: jt.timezone
            }, "".concat(Jt, ": ").concat(l)));
          }({
            key: e,
            className: t,
            sessionDays: this._fullSessionScheduleViewModel.sessionsDays,
            now: this._fullSessionScheduleViewModel.currentTimeValue(),
            timezone: this._fullSessionScheduleViewModel.timezone()
          });
        }
      }, {
        key: "updateSource",
        value: function updateSource(e) {}
      }]);

      return ts;
    }();

    var ss = s(48891),
        is = s(94474),
        ls = s(64123);

    var os =
    /*#__PURE__*/
    function () {
      function os(e) {
        _classCallCheck(this, os);

        this.isBlinkingMode = new a.WatchedValue(!1), this._status = new a.WatchedValue(null), this._fullTooltip = new a.WatchedValue(null), this._iconClassNames = new a.WatchedValue(null), this._visible = new a.WatchedValue(!1), this._tooltip = new a.WatchedValue(null), this._icon = new a.WatchedValue(null), this._className = new a.WatchedValue(null), this._customColor = new a.WatchedValue(null), this._infoMaps = e, this._size = e.size || "small", this._status.subscribe(this._updateByStatus.bind(this), {
          callWithLast: !0
        });
      }

      _createClass(os, [{
        key: "turnOffBlinkingMode",
        value: function turnOffBlinkingMode() {}
      }, {
        key: "status",
        value: function status() {
          return this._status;
        }
      }, {
        key: "tooltip",
        value: function tooltip() {
          return this._tooltip;
        }
      }, {
        key: "icon",
        value: function icon() {
          return this._icon;
        }
      }, {
        key: "className",
        value: function className() {
          return this._className;
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._visible;
        }
      }, {
        key: "size",
        value: function size() {
          return this._size;
        }
      }, {
        key: "fullInfo",
        value: function fullInfo() {
          return this._fullTooltip;
        }
      }, {
        key: "customColor",
        value: function customColor() {
          return this._customColor;
        }
      }, {
        key: "_getTooltip",
        value: function _getTooltip(e) {
          var t, s;
          return null !== (s = null === (t = this._infoMaps.tooltipMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null;
        }
      }, {
        key: "_getIcon",
        value: function _getIcon(e) {
          var t;

          var s = this._infoMaps.iconMap.get(e);

          return void 0 !== s && (t = s.get(this._size)), t || null;
        }
      }, {
        key: "_getClassName",
        value: function _getClassName(e) {
          return this._infoMaps.classNameMap.get(e) || null;
        }
      }, {
        key: "_getFullTooltipIconClassNames",
        value: function _getFullTooltipIconClassNames(e) {
          var t = this._getClassName(e);

          return t ? [ls.statusItem, t] : [];
        }
      }, {
        key: "_getTitle",
        value: function _getTitle(e) {
          var t, s;
          return null !== (s = null === (t = this._infoMaps.titleMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null;
        }
      }, {
        key: "_getTitleColor",
        value: function _getTitleColor(e) {
          var t, s;
          return null !== (s = null === (t = this._infoMaps.titleColorMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null;
        }
      }, {
        key: "_getAction",
        value: function _getAction(e) {
          var t, s;
          return null !== (s = null === (t = this._infoMaps.actionMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null;
        }
      }, {
        key: "_getHTML",
        value: function _getHTML(e) {
          var t, s, i;
          return null !== (i = null === (s = null === (t = this._infoMaps.htmlMap) || void 0 === t ? void 0 : t.get(e)) || void 0 === s ? void 0 : s.map(is.htmlEscape)) && void 0 !== i ? i : [];
        }
      }, {
        key: "_updateFullTooltip",
        value: function _updateFullTooltip() {
          var e;
          return regeneratorRuntime.async(function _updateFullTooltip$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e = this._status.value();
                  null !== e ? this._fullTooltip.setValue([{
                    icon: this._getIcon(e),
                    iconClassName: this._getFullTooltipIconClassNames(e),
                    title: this._getTitle(e),
                    titleColor: this._getTitleColor(e),
                    html: this._getHTML(e),
                    size: this._size,
                    action: this._getAction(e)
                  }]) : this._fullTooltip.setValue(null);

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_updateByStatus",
        value: function _updateByStatus(e) {
          if (null === e || this._shouldBeHiddenByStatus(e)) return this._icon.setValue(null), this._tooltip.setValue(null), void this._visible.setValue(!1);
          this._icon.setValue(this._getIcon(e)), this._className.setValue(this._getClassName(e)), this._tooltip.setValue(this._getTooltip(e)), this._visible.setValue(!0), this._updateFullTooltip();
        }
      }, {
        key: "_shouldBeHiddenByStatus",
        value: function _shouldBeHiddenByStatus(e) {
          return !1;
        }
      }]);

      return os;
    }();

    var as = s(12646),
        ns = s(31233),
        rs = s(55593),
        ds = s(69410),
        us = s(52828),
        hs = s(91665),
        cs = s(39379),
        _s = s(72844),
        ps = s(23683);

    var ms = new Map([["small", as], ["medium", ns], ["large", ns]]),
        gs = new Map([["small", rs], ["medium", ds], ["large", ds]]),
        vs = new Map([["small", us], ["medium", hs], ["large", hs]]),
        bs = (new Map([["small", cs], ["medium", cs], ["large", cs]]), new Map([["small", _s], ["medium", ps], ["large", ps]]), new Map([["small", ""], ["medium", ""], ["large", ""]]), ss.colorsPalette["color-delay-mode"]),
        ws = ss.colorsPalette["color-eod-mode"],
        ys = ss.colorsPalette["color-notaccurate-mode"],
        Ss = (ss.colorsPalette["color-primary-symbol"], ss.colorsPalette["color-halal"], ss.colorsPalette["color-continuous"], B.t(null, void 0, s(57310))),
        fs = B.t(null, void 0, s(59315)),
        Ms = B.t(null, void 0, s(15815)),
        Cs = B.t(null, void 0, s(45e3)),
        Es = B.t(null, void 0, s(7435)),
        Vs = (B.t(null, void 0, s(24680)), B.t(null, void 0, s(99214)), B.t(null, void 0, s(6044)), B.t(null, void 0, s(31461)), B.t(null, void 0, s(32960)), B.t(null, void 0, s(52449)), (0, is.htmlEscape)(B.t(null, void 0, s(11155)))),
        ks = (0, is.htmlEscape)(B.t(null, void 0, s(1084))),
        As = (0, is.htmlEscape)(B.t(null, void 0, s(52984))),
        Ls = (0, is.htmlEscape)(B.t(null, void 0, s(89022))),
        Ws = (0, is.htmlEscape)(B.t(null, void 0, s(52916))),
        Ts = (0, is.htmlEscape)(B.t(null, void 0, s(49321))),
        xs = (0, is.htmlEscape)(B.t(null, void 0, s(25978))),
        Hs = (0, is.htmlEscape)(B.t(null, void 0, s(28412))),
        Ds = (0, is.htmlEscape)(B.t(null, void 0, s(91459))),
        Ps = B.t(null, void 0, s(6667)),
        Bs = (B.t(null, {
      context: 'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."'
    }, s(12978)), B.t(null, {
      context: 'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."'
    }, s(64565)), B.t(null, void 0, s(2310))),
        Is = B.t(null, void 0, s(29512));
    B.t(null, void 0, s(53205)), B.t(null, void 0, s(15993));
    var zs = s(56840);
    var Ns = "tv.alreadyBlinkedStatuses",
        Os = [];

    function Fs() {
      return zs.getJSON(Ns, Os);
    }

    var Rs = new a.WatchedValue(Fs());

    function Us(e) {
      var t = zs.getJSON(Ns, Os);
      t.includes(e) || (t.push(e), zs.setJSON(Ns, t), Rs.setValue(Fs()));
    }

    zs.onSync.subscribe(null, function () {
      return Rs.setValue(Fs());
    });
    var Gs = Rs;
    var $s = s(93544);
    var js = (0, He.getLogger)("Chart.LegendWidget"),
        Ys = ["TFEXDelayForGuest", "MOEXDelayForGuest", "CHIXAuDelayForGuest", "MILDelayForGuest", "NGMDelayForGuest", "DEForGuest", "ICESGDelayForGuest", "TAIFEXDelayForGuest", "TURQUOISEDelayForGuest", "ADXDelayForGuest", "TRADEGATEDelayForGuest", "LUXSEDelayForGuest", "NSENGDelayForGuest"],
        qs = new Map([["DelayToRealtime", ms], ["DelayNoRealtime", ms], ["TFEXDelayForGuest", ms], ["MOEXDelayForGuest", ms], ["CHIXAuDelayForGuest", ms], ["MILDelayForGuest", ms], ["NGMDelayForGuest", ms], ["ICESGDelayForGuest", ms], ["TAIFEXDelayForGuest", ms], ["TURQUOISEDelayForGuest", ms], ["ADXDelayForGuest", ms], ["TRADEGATEDelayForGuest", ms], ["LUXSEDelayForGuest", ms], ["NSENGDelayForGuest", ms], ["DEForGuest", ms], ["EOD", gs], ["TickByTick", vs], ["BATSToRealtime", vs], ["DelayWithoutMarketAgreement", ms]]),
        Zs = new Map([["DelayToRealtime", ls.delay], ["DelayNoRealtime", ls.delay], ["TFEXDelayForGuest", ls.delay], ["MOEXDelayForGuest", ls.delay], ["CHIXAuDelayForGuest", ls.delay], ["MILDelayForGuest", ls.delay], ["NGMDelayForGuest", ls.delay], ["ICESGDelayForGuest", ls.delay], ["TAIFEXDelayForGuest", ls.delay], ["TURQUOISEDelayForGuest", ls.delay], ["ADXDelayForGuest", ls.delay], ["TRADEGATEDelayForGuest", ls.delay], ["LUXSEDelayForGuest", ls.delay], ["NSENGDelayForGuest", ls.delay], ["DEForGuest", ls.delay], ["EOD", ls.eod], ["TickByTick", ls.notAccurate], ["BATSToRealtime", ls.notAccurate], ["DelayWithoutMarketAgreement", ls.delay]]),
        Xs = new Map([["DelayToRealtime", bs], ["DelayNoRealtime", bs], ["TFEXDelayForGuest", bs], ["MOEXDelayForGuest", bs], ["CHIXAuDelayForGuest", bs], ["MILDelayForGuest", bs], ["NGMDelayForGuest", bs], ["ICESGDelayForGuest", bs], ["TAIFEXDelayForGuest", bs], ["TURQUOISEDelayForGuest", bs], ["ADXDelayForGuest", bs], ["TRADEGATEDelayForGuest", bs], ["LUXSEDelayForGuest", bs], ["NSENGDelayForGuest", bs], ["DEForGuest", bs], ["EOD", ws], ["TickByTick", ys], ["BATSToRealtime", ys], ["DelayWithoutMarketAgreement", bs]]);
    B.t(null, void 0, s(36004)), B.t(null, void 0, s(36051)), (0, is.htmlEscape)(B.t(null, void 0, s(25046)));

    var Js =
    /*#__PURE__*/
    function (_os) {
      _inherits(Js, _os);

      function Js(e, t, s) {
        var _this18;

        _classCallCheck(this, Js);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Js).call(this, {
          iconMap: qs,
          classNameMap: Zs,
          titleColorMap: Xs,
          size: t
        })), _this18._dataUpdatedInfo = new a.WatchedValue(null).spawn(), _this18._options = s, _this18._model = e, _this18._dataModeBlinkingStatuses = Gs.spawn(), _this18._dataModeBlinkingStatuses.subscribe(_this18._updateBlinkingMode.bind(_assertThisInitialized(_this18))), _this18.turnOffBlinkingMode = _this18._turnOffBlinking.bind(_assertThisInitialized(_this18)), _this18.setModel(e);
        return _this18;
      }

      _createClass(Js, [{
        key: "destroy",
        value: function destroy() {
          this._dataUpdatedInfo.destroy(), this._dataModeBlinkingStatuses.destroy();
        }
      }, {
        key: "setModel",
        value: function setModel(e) {
          if (this._dataUpdatedInfo.destroy(), null === e) return this._model = e, void (this._dataUpdatedInfo = new a.WatchedValue(null).spawn());
          this._dataUpdatedInfo = e.status().spawn(), this._dataUpdatedInfo.subscribe(this._updateStatus.bind(this), {
            callWithLast: !0
          });
        }
      }, {
        key: "_shouldBeHiddenByStatus",
        value: function _shouldBeHiddenByStatus(e) {
          var t;
          return !!(null === (t = this._options.shouldBeHiddenRegardlessOfStatus) || void 0 === t ? void 0 : t.value()) || _get(_getPrototypeOf(Js.prototype), "_shouldBeHiddenByStatus", this).call(this, e);
        }
      }, {
        key: "_getTooltip",
        value: function _getTooltip() {
          var e = this._getShortTexts();

          return null === e ? null : Object.values(e).join(" · ");
        }
      }, {
        key: "_updateFullTooltip",
        value: function _updateFullTooltip() {
          var e, t, s, _ref9, _ref10, i, l, o, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _a6, _e34;

          return regeneratorRuntime.async(function _updateFullTooltip$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e = this._dataUpdatedInfo.value(), t = this._status.value();

                  if (!(null === e || null === t)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return", void this._fullTooltip.setValue(null));

                case 3:
                  s = this._getShortTexts();
                  _context3.next = 6;
                  return regeneratorRuntime.awrap(Promise.all([this._getHtmls(), this._getActions()]));

                case 6:
                  _ref9 = _context3.sent;
                  _ref10 = _slicedToArray(_ref9, 2);
                  i = _ref10[0];
                  l = _ref10[1];

                  if (!(e !== this._dataUpdatedInfo.value())) {
                    _context3.next = 12;
                    break;
                  }

                  return _context3.abrupt("return");

                case 12:
                  o = [];
                  _iteratorNormalCompletion15 = true;
                  _didIteratorError15 = false;
                  _iteratorError15 = undefined;
                  _context3.prev = 16;

                  for (_iterator15 = e[Symbol.iterator](); !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    _a6 = _step15.value;
                    _e34 = _a6.mode;
                    o.push({
                      icon: this._getIcon(_e34),
                      iconClassName: this._getFullTooltipIconClassNames(t),
                      title: s && s[_e34],
                      titleColor: this._getTitleColor(_e34),
                      html: i && i[_e34],
                      size: this._size,
                      action: l && l[_e34]
                    });
                  }

                  _context3.next = 24;
                  break;

                case 20:
                  _context3.prev = 20;
                  _context3.t0 = _context3["catch"](16);
                  _didIteratorError15 = true;
                  _iteratorError15 = _context3.t0;

                case 24:
                  _context3.prev = 24;
                  _context3.prev = 25;

                  if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                    _iterator15["return"]();
                  }

                case 27:
                  _context3.prev = 27;

                  if (!_didIteratorError15) {
                    _context3.next = 30;
                    break;
                  }

                  throw _iteratorError15;

                case 30:
                  return _context3.finish(27);

                case 31:
                  return _context3.finish(24);

                case 32:
                  this._fullTooltip.setValue(o);

                case 33:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this, [[16, 20, 24, 32], [25,, 27, 31]]);
        }
      }, {
        key: "_updateStatus",
        value: function _updateStatus(e) {
          var t;
          var s = null !== e ? e[0] : null;
          this._status.setValue(null !== (t = null == s ? void 0 : s.mode) && void 0 !== t ? t : null, !0), this._updateBlinkingMode();
        }
      }, {
        key: "_getHtmls",
        value: function _getHtmls() {
          var e, t, i, l, o, a, n, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _r6, _i15, _o9, _a7, _e35;

          return regeneratorRuntime.async(function _getHtmls$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  i = this._dataUpdatedInfo.value();

                  if (!(null === i || null === this._model)) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return", Promise.resolve(null));

                case 3:
                  l = {}, o = this._model.symbolName();
                  a = null, n = null;
                  _context4.prev = 5;
                  _context4.next = 8;
                  return regeneratorRuntime.awrap(this._model.description());

                case 8:
                  a = _context4.sent;
                  n = this._model.exchange();
                  _context4.next = 15;
                  break;

                case 12:
                  _context4.prev = 12;
                  _context4.t0 = _context4["catch"](5);
                  js.logError("Can't get exchange description, reason: ".concat((0, $s.errorToString)(_context4.t0)));

                case 15:
                  _iteratorNormalCompletion16 = true;
                  _didIteratorError16 = false;
                  _iteratorError16 = undefined;
                  _context4.prev = 18;

                  for (_iterator16 = i[Symbol.iterator](); !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    _r6 = _step16.value;
                    _i15 = _r6.mode;

                    if (l[_i15] = [], ["DelayToRealtime", "DelayNoRealtime", "DelayWithoutMarketAgreement"].concat(Ys).includes(_i15) && (l[_i15].push(Vs.format({
                      symbolName: o,
                      time: this._model.time().toString()
                    })), this._options.subscriptionFullInfo && null !== a && "DelayToRealtime" === _i15 && l[_i15].push(As.format({
                      description: "<b>".concat(a, "</b>")
                    })), "DelayNoRealtime" === _i15 && l[_i15].push(Ls), "DelayWithoutMarketAgreement" === _i15 && l[_i15].push(Ds.format({
                      listedExchange: this._model.listedExchange()
                    })), this._options.subscriptionFullInfo && Ys.includes(_i15) && l[_i15].push(ks.format({
                      listedExchange: this._model.listedExchange()
                    }))), "EOD" === _i15 && (l[_i15] = [Ws]), "TickByTick" === _i15) {
                      _o9 = void 0 === _r6.updatePeriod ? Ts : (0, is.htmlEscape)(B.t(null, {
                        count: _r6.updatePeriod,
                        replace: {
                          amount: (null !== (e = _r6.updatePeriod) && void 0 !== e ? e : 1).toString()
                        },
                        plural: "Data on our Basic plan is updated once every {amount} seconds, even if there are more updates on the market."
                      }, s(2121))), _a7 = void 0 === _r6.updatePeriod ? xs : (0, is.htmlEscape)(B.t(null, {
                        count: _r6.updatePeriod,
                        replace: {
                          amount: (null !== (t = _r6.updatePeriod) && void 0 !== t ? t : 1).toString()
                        },
                        plural: "Data is updated once every {amount} seconds, even if there are more updates on the market."
                      }, s(77033)));
                      l[_i15].push(this._options.subscriptionFullInfo ? _o9 : _a7), this._options.subscriptionFullInfo && l[_i15].push(Hs);
                    }

                    if (null !== n && "BATSToRealtime" === _i15) {
                      _e35 = this._model.listedExchange();
                      0, l[_i15].push(Ps.format({
                        symbolName: o,
                        exchange: n
                      }), "" !== _e35 ? (0, is.htmlEscape)(Is).format({
                        exchange: _e35
                      }) : (0, is.htmlEscape)(Bs));
                    }
                  }

                  _context4.next = 26;
                  break;

                case 22:
                  _context4.prev = 22;
                  _context4.t1 = _context4["catch"](18);
                  _didIteratorError16 = true;
                  _iteratorError16 = _context4.t1;

                case 26:
                  _context4.prev = 26;
                  _context4.prev = 27;

                  if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                    _iterator16["return"]();
                  }

                case 29:
                  _context4.prev = 29;

                  if (!_didIteratorError16) {
                    _context4.next = 32;
                    break;
                  }

                  throw _iteratorError16;

                case 32:
                  return _context4.finish(29);

                case 33:
                  return _context4.finish(26);

                case 34:
                  return _context4.abrupt("return", Object.keys(l).length > 0 ? l : null);

                case 35:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this, [[5, 12], [18, 22, 26, 34], [27,, 29, 33]]);
        }
      }, {
        key: "_getActions",
        value: function _getActions() {
          var e;
          return regeneratorRuntime.async(function _getActions$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(null === this._dataUpdatedInfo.value() || null === this._model)) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return", null);

                case 2:
                  e = {};
                  return _context5.abrupt("return", Object.keys(e).length > 0 ? e : null);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_getShortTexts",
        value: function _getShortTexts() {
          var e, t;

          var i = this._dataUpdatedInfo.value();

          if (null === i || null === this._model) return null;
          var l = {};
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = i[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var _o10 = _step17.value;
              var _i16 = _o10.mode;

              if (["DelayToRealtime", "DelayNoRealtime"].concat(Ys, ["DelayWithoutMarketAgreement"]).includes(_i16) && (l[_i16] = Ss), "EOD" === _i16 && (l[_i16] = fs), "TickByTick" === _i16) {
                var _t19 = void 0 === _o10.updatePeriod ? Ms : (0, is.htmlEscape)(B.t(null, {
                  plural: "One update every {amount} seconds",
                  count: _o10.updatePeriod,
                  replace: {
                    amount: (null !== (e = _o10.updatePeriod) && void 0 !== e ? e : 1).toString()
                  }
                }, s(5223)));

                l[_i16] = _t19;
              }

              if ("BATSToRealtime" === _i16) {
                var _e36 = null !== (t = this._model.firstReplacedByBatsExchange()) && void 0 !== t ? t : "";

                0, l[_i16] = "" !== _e36 ? Es.format({
                  exchange: _e36,
                  originalExchange: Cs
                }) : Cs;
              }
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                _iterator17["return"]();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          return Object.keys(l).length > 0 ? l : null;
        }
      }, {
        key: "_updateBlinkingMode",
        value: function _updateBlinkingMode() {
          var e = this._dataUpdatedInfo.value();

          if (null === e) return;

          var t = this._dataModeBlinkingStatuses.value();

          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = e[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var _s12 = _step18.value;
              if (!t.includes(_s12.mode)) return void this.isBlinkingMode.setValue(!0);
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                _iterator18["return"]();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          this.isBlinkingMode.setValue(!1);
        }
      }, {
        key: "_turnOffBlinking",
        value: function _turnOffBlinking() {
          var e = this._dataUpdatedInfo.value();

          if (null !== e) {
            var _iteratorNormalCompletion19 = true;
            var _didIteratorError19 = false;
            var _iteratorError19 = undefined;

            try {
              for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                var t = _step19.value;
                Us(t.mode);
              }
            } catch (err) {
              _didIteratorError19 = true;
              _iteratorError19 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                  _iterator19["return"]();
                }
              } finally {
                if (_didIteratorError19) {
                  throw _iteratorError19;
                }
              }
            }
          }
        }
      }]);

      return Js;
    }(os);

    var Qs = s(38373),
        Ks = s(79304);
    var ei = B.t(null, void 0, s(39045)),
        ti = new Map([[!0, new Map([["small", Qs], ["medium", Ks], ["large", Ks]])], [!1, new Map([["small", ""], ["medium", ""], ["large", ""]])]]),
        si = new Map([[!0, ls.dataProblemLow], [!1, null]]),
        ii = new Map([[!0, ei], [!1, null]]),
        li = new Map([[!0, ei], [!1, null]]),
        oi = new Map([[!0, ss.colorsPalette["color-data-problem"]], [!1, null]]);

    var ai =
    /*#__PURE__*/
    function (_os2) {
      _inherits(ai, _os2);

      function ai(e, t, s) {
        var _this19;

        _classCallCheck(this, ai);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(ai).call(this, {
          iconMap: ti,
          classNameMap: si,
          tooltipMap: ii,
          titleMap: li,
          titleColorMap: oi,
          size: t
        })), _this19._dataSourceErrorStatus = new a.WatchedValue(null).spawn(), _this19._lastError = null, _this19._options = s, _this19.setSource(e);
        return _this19;
      }

      _createClass(ai, [{
        key: "destroy",
        value: function destroy() {
          this._dataSourceErrorStatus.destroy();
        }
      }, {
        key: "setSource",
        value: function setSource(e) {
          this._dataSourceErrorStatus.destroy(), this._dataSourceErrorStatus = e.errorStatus().spawn(), this._dataSourceErrorStatus.subscribe(this._updateStatus.bind(this), {
            callWithLast: !0
          });
        }
      }, {
        key: "_getTooltip",
        value: function _getTooltip(e) {
          var t;
          return null !== (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== t ? t : _get(_getPrototypeOf(ai.prototype), "_getTooltip", this).call(this, e);
        }
      }, {
        key: "_getTitle",
        value: function _getTitle(e) {
          var t;
          return null !== (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== t ? t : _get(_getPrototypeOf(ai.prototype), "_getTitle", this).call(this, e);
        }
      }, {
        key: "_updateFullTooltip",
        value: function _updateFullTooltip() {
          var e, t;
          return regeneratorRuntime.async(function _updateFullTooltip$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  e = this._status.value(), t = this._dataSourceErrorStatus.value();
                  null !== e && null !== t ? this._fullTooltip.setValue([{
                    icon: this._getIcon(e),
                    iconClassName: this._getFullTooltipIconClassNames(e),
                    title: this._getTitle(e),
                    titleColor: this._getTitleColor(e),
                    html: [(0, is.htmlEscape)(t.error)],
                    size: this._size,
                    action: this._getAction(e)
                  }]) : this._fullTooltip.setValue(null);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_getAction",
        value: function _getAction(e) {
          return null;
        }
      }, {
        key: "_updateStatus",
        value: function _updateStatus(e) {
          var t = this._status.value();

          null !== e ? (this._status.setValue(!0), t && this._lastError !== e.error && this._updateByStatus(!0), this._lastError = e.error) : (this._status.setValue(null), this._lastError = null);
        }
      }, {
        key: "_getDataSourceErrorStatusCustomTitle",
        value: function _getDataSourceErrorStatusCustomTitle() {
          var e;
          return (null === (e = this._dataSourceErrorStatus.value()) || void 0 === e ? void 0 : e.title) || null;
        }
      }]);

      return ai;
    }(os);

    var ni = B.t(null, void 0, s(97325)),
        ri = new Map([["high", new Map([["small", Qs], ["medium", Ks], ["large", Ks]])], ["low", new Map([["small", Qs], ["medium", Ks], ["large", Ks]])]]),
        di = new Map([["high", ls.dataProblemHigh], ["low", ls.dataProblemLow]]),
        ui = new Map([["high", ni], ["low", ni]]),
        hi = new Map([["high", ss.colorsPalette["color-data-problem"]], ["low", ss.colorsPalette["color-data-problem"]]]);

    var ci =
    /*#__PURE__*/
    function (_os3) {
      _inherits(ci, _os3);

      function ci(e, t) {
        var _this20;

        _classCallCheck(this, ci);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(ci).call(this, {
          tooltipMap: ui,
          iconMap: ri,
          classNameMap: di,
          titleMap: ui,
          titleColorMap: hi,
          size: t
        })), _this20._dataProblems = new a.WatchedValue([]).spawn(), _this20._isDataProblemCritical = new a.WatchedValue(!1), _this20.setModel(e);
        return _this20;
      }

      _createClass(ci, [{
        key: "destroy",
        value: function destroy() {
          this._dataProblems.destroy();
        }
      }, {
        key: "isDataProblemCritical",
        value: function isDataProblemCritical() {
          return this._isDataProblemCritical;
        }
      }, {
        key: "setModel",
        value: function setModel(e) {
          this._dataProblems.destroy(), null !== e ? (this._dataProblems = e.dataProblems().spawn(), this._dataProblems.subscribe(this._updateStatus.bind(this), {
            callWithLast: !0
          })) : this._dataProblems = new a.WatchedValue([]).spawn();
        }
      }, {
        key: "_updateFullTooltip",
        value: function _updateFullTooltip() {
          var _this21 = this;

          var e, t, s;
          return regeneratorRuntime.async(function _updateFullTooltip$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  e = this.status().value(), t = this._dataProblems.value();

                  if (!(null === e || 0 === t.length)) {
                    _context7.next = 3;
                    break;
                  }

                  return _context7.abrupt("return", void this._fullTooltip.setValue(null));

                case 3:
                  s = t.map(function (t, s) {
                    var i;
                    return {
                      icon: _this21._getIcon(e),
                      iconClassName: _this21._getFullTooltipIconClassNames(e),
                      title: null !== (i = t.title) && void 0 !== i ? i : 0 === s ? _this21._getTitle(e) : null,
                      titleColor: _this21._getTitleColor(e),
                      html: [(0, is.htmlEscape)(t.text)],
                      size: _this21._size,
                      action: _this21._getAction(e)
                    };
                  });

                  this._fullTooltip.setValue(s);

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_getTooltip",
        value: function _getTooltip(e) {
          var t;
          return null !== (t = this._getDataProblemCustomTitle()) && void 0 !== t ? t : _get(_getPrototypeOf(ci.prototype), "_getTooltip", this).call(this, e);
        }
      }, {
        key: "_getTitle",
        value: function _getTitle(e) {
          var t;
          return null !== (t = this._getDataProblemCustomTitle()) && void 0 !== t ? t : _get(_getPrototypeOf(ci.prototype), "_getTitle", this).call(this, e);
        }
      }, {
        key: "_updateStatus",
        value: function _updateStatus(e) {
          var t, s;
          var i = null !== (s = null === (t = e[0]) || void 0 === t ? void 0 : t.severity) && void 0 !== s ? s : null,
              l = this._status.value() !== i;
          this._status.setValue(i), this._isDataProblemCritical.setValue(function (e) {
            return "high" === e;
          }(i)), l || this._updateFullTooltip();
        }
      }, {
        key: "_getDataProblemCustomTitle",
        value: function _getDataProblemCustomTitle() {
          var e, t;
          return (null === (t = null === (e = this._dataProblems.value()) || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.title) || null;
        }
      }]);

      return ci;
    }(os);

    var _i =
    /*#__PURE__*/
    function (_os4) {
      _inherits(_i, _os4);

      function _i(e, t) {
        var _this22;

        _classCallCheck(this, _i);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(_i).call(this, t)), _this22._booleanStatus = new a.WatchedValue(!1).spawn(), _this22.updateStatus(e);
        return _this22;
      }

      _createClass(_i, [{
        key: "destroy",
        value: function destroy() {
          this._booleanStatus.destroy();
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(e) {
          this._booleanStatus.destroy(), this._booleanStatus = e.spawn(), this._booleanStatus.subscribe(this._updateStatus.bind(this), {
            callWithLast: !0
          });
        }
      }, {
        key: "_updateStatus",
        value: function _updateStatus(e) {
          e ? this._status.setValue(!0) : this._status.setValue(null);
        }
      }]);

      return _i;
    }(os);

    var pi = s(73710),
        mi = s(45503);
    var gi = B.t(null, void 0, s(14177)),
        vi = B.t(null, void 0, s(73717)),
        bi = new Map([[!0, new Map([["small", pi], ["medium", mi], ["large", mi]])], [!1, new Map([["small", ""], ["medium", ""], ["large", ""]])]]),
        wi = new Map([[!0, ls.invalidSymbol], [!1, null]]),
        yi = new Map([[!0, gi], [!1, null]]),
        Si = new Map([[!0, gi], [!1, null]]),
        fi = new Map([[!0, ss.colorsPalette["color-invalid-symbol"]], [!1, null]]),
        Mi = new Map([[!0, [vi]], [!1, null]]),
        Ci = new Map([[!0, null], [!1, null]]);

    var Ei =
    /*#__PURE__*/
    function () {
      function Ei(e) {
        _classCallCheck(this, Ei);

        this._el = document.createElement("div"), this._prevCustomClass = null, this._prevCustomColor = null, this._customColor = null, this._size = e.size || "small", this._icon = e.icon.spawn(), this._className = e.className.spawn(), this._visible = e.visible.spawn(), this._el.classList.add(ls.statusItem, ls[this._size]), this._icon.subscribe(this._updateIcon.bind(this), {
          callWithLast: !0
        }), this._className.subscribe(this._updateClassName.bind(this), {
          callWithLast: !0
        }), this._customColor = e.customColor.spawn(), this._customColor.subscribe(this._updateCustomColor.bind(this), {
          callWithLast: !0
        }), e.isBlinking && (this._isBlinking = e.isBlinking.spawn(), this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), {
          callWithLast: !0
        }), this._turnOffBlinking = e.turnOffBlinking);
      }

      _createClass(Ei, [{
        key: "destroy",
        value: function destroy() {
          this._visible.destroy(), this._icon.destroy(), this._isBlinking && this._isBlinking.destroy();
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this._turnOffBlinking && this._turnOffBlinking();
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._visible;
        }
      }, {
        key: "element",
        value: function element() {
          return this._el;
        }
      }, {
        key: "_updateIcon",
        value: function _updateIcon(e) {
          this._el.innerHTML = e || "";
        }
      }, {
        key: "_updateClassName",
        value: function _updateClassName(e) {
          this._prevCustomClass !== e && (null !== this._prevCustomClass && this._el.classList.remove(this._prevCustomClass), null !== e && this._el.classList.add(e), this._prevCustomClass = e);
        }
      }, {
        key: "_updateCustomColor",
        value: function _updateCustomColor(e) {
          this._prevCustomColor !== e && (this._el.style.setProperty("--custom-status-color", e), this._prevCustomColor = e);
        }
      }, {
        key: "_updateBlinkingMode",
        value: function _updateBlinkingMode(e) {
          this._el.classList.toggle(ls.blinking, e);
        }
      }]);

      return Ei;
    }();

    function Vi(e, t, s) {
      var _iteratorNormalCompletion20 = true;
      var _didIteratorError20 = false;
      var _iteratorError20 = undefined;

      try {
        for (var _iterator20 = t[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
          var i = _step20.value;
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = i.split(" ")[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _t20 = _step21.value;
              e.classList.toggle(_t20, s);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                _iterator21["return"]();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError20 = true;
        _iteratorError20 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
            _iterator20["return"]();
          }
        } finally {
          if (_didIteratorError20) {
            throw _iteratorError20;
          }
        }
      }
    }

    var ki =
    /*#__PURE__*/
    function () {
      function ki(e, t, s) {
        var _this23 = this;

        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ls;

        _classCallCheck(this, ki);

        this.element = document.createElement("div"), this._blinkingSpawns = [], this._iconsRenderers = [], this._updateIcons = function () {
          var _this23$_iconsRendere = _this23._iconsRenderers.reduce(function (e, t) {
            var s = t.element();
            return t.visible().value() && e[0].length < 3 ? e[0].push(s) : e[1].push(s), e;
          }, [[], []]),
              _this23$_iconsRendere2 = _slicedToArray(_this23$_iconsRendere, 2),
              e = _this23$_iconsRendere2[0],
              t = _this23$_iconsRendere2[1];

          t.forEach(function (e) {
            _this23.element.contains(e) && _this23.element.removeChild(e);
          }), e.forEach(function (e, t) {
            _this23.element.contains(e) || (t >= _this23.element.childElementCount ? _this23.element.appendChild(e) : _this23.element.insertBefore(e, _this23.element.childNodes[t]));
          });
        }, this._theme = i;
        var l = [this._theme.statuses, "apply-common-tooltip", "common-tooltip-wide", this._theme[e], this._theme.statuses_hidden];
        Vi(this.element, l, !0), this._tooltips = t.spawn(), this._tooltips.subscribe(this._updateTooltip.bind(this)), this._onClickCallback = s.onClick, this._onClickHandler = this._onClick.bind(this), this.element.addEventListener("click", this._onClickHandler);
      }

      _createClass(ki, [{
        key: "destroy",
        value: function destroy() {
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = this._iconsRenderers[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var e = _step22.value;
              e.destroy();
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = this._blinkingSpawns[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var _e37 = _step23.value;

              _e37.destroy();
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                _iterator23["return"]();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }

          this._tooltips.destroy(), this.element.removeEventListener("click", this._onClickHandler), this.element.remove();
        }
      }, {
        key: "setVisibility",
        value: function setVisibility(e) {
          Vi(this.element, [this._theme.statuses_hidden], e);
        }
      }, {
        key: "addStatusModel",
        value: function addStatusModel(e) {
          var t = new Ei({
            visible: e.visible,
            icon: e.model.icon(),
            className: e.model.className(),
            size: e.model.size(),
            isBlinking: e.model.isBlinkingMode,
            turnOffBlinking: e.model.turnOffBlinkingMode,
            customColor: e.model.customColor()
          });

          this._iconsRenderers.push(t);

          var s = e.model.isBlinkingMode.spawn();
          s.subscribe(this._updateBlinkingMode.bind(this)), t.visible().subscribe(this._updateIcons, {
            callWithLast: !0
          }), this._blinkingSpawns.push(s), this._updateBlinkingMode();
        }
      }, {
        key: "_onClick",
        value: function _onClick(e) {
          e.preventDefault();

          var t = this._iconsRenderers.filter(function (e) {
            return e.visible().value();
          });

          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = t[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var _e38 = _step24.value;

              _e38.onClick();
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                _iterator24["return"]();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }

          var s = 14;
          t.length > 1 && (s -= 2);
          var i = this.element.getBoundingClientRect(),
              l = {
            x: i.left - s,
            y: i.bottom + 4
          };

          this._onClickCallback(l);
        }
      }, {
        key: "_updateTooltip",
        value: function _updateTooltip() {
          this.element.setAttribute("title", this._tooltips.value().join(" · "));
        }
      }, {
        key: "_updateBlinkingMode",
        value: function _updateBlinkingMode() {
          var e = this._blinkingSpawns.some(function (e) {
            return e.value();
          });

          Vi(this.element, [this._theme.blinking], e);
        }
      }]);

      return ki;
    }();

    var Ai =
    /*#__PURE__*/
    function () {
      function Ai(e, t) {
        _classCallCheck(this, Ai);

        this.isBlinkingMode = new a.WatchedValue(!1), this._status = new a.WatchedValue(null), this._size = "small", this._fullInfo = new a.WatchedValue(null), this._className = new a.WatchedValue(ls.marketStatusCustom), this._symbolModel = null, this._symbol = null, this._tooltip = new a.WatchedValue(null), this._icon = new a.WatchedValue(null), this._visible = new a.WatchedValue(!1), this._color = new a.WatchedValue(null), this._updateVisibleCallback = this._updateVisible.bind(this), this._updateColorCallback = this._updateColor.bind(this), this._updateIconCallback = this._updateIcon.bind(this), this._updateTooltipCallback = this._updateTooltip.bind(this), this._updateFullInfoCallback = this._updateFullInfo.bind(this), this._model = e, this._size = t;
      }

      _createClass(Ai, [{
        key: "turnOffBlinkingMode",
        value: function turnOffBlinkingMode() {}
      }, {
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "setModel",
        value: function setModel(e) {
          this._model = e;
        }
      }, {
        key: "setSymbol",
        value: function setSymbol(e) {
          e !== this._symbol && (this._unSyncModel(), this._symbol = e, e ? (this._symbolModel = this._model.getSymbolCustomStatus(e), this._syncModel()) : this._symbolModel = null);
        }
      }, {
        key: "status",
        value: function status() {
          return this._status.spawn();
        }
      }, {
        key: "tooltip",
        value: function tooltip() {
          return this._tooltip.spawn();
        }
      }, {
        key: "icon",
        value: function icon() {
          return this._icon.spawn();
        }
      }, {
        key: "className",
        value: function className() {
          return this._className.spawn();
        }
      }, {
        key: "visible",
        value: function visible() {
          return this._visible.spawn();
        }
      }, {
        key: "size",
        value: function size() {
          return this._size;
        }
      }, {
        key: "fullInfo",
        value: function fullInfo() {
          return this._fullInfo.spawn();
        }
      }, {
        key: "customColor",
        value: function customColor() {
          return this._color.spawn();
        }
      }, {
        key: "_updateFullInfo",
        value: function _updateFullInfo(e) {
          var _this24 = this;

          if (null === e) return void this._fullInfo.setValue(null);
          var t = e.map(function (e) {
            var t, s;
            return {
              icon: null !== (t = e.icon) && void 0 !== t ? t : _this24.icon().value(),
              iconClassName: [ls.marketStatusCustom],
              title: e.title,
              titleColor: null !== (s = e.color) && void 0 !== s ? s : _this24.customColor().value(),
              html: e.content,
              size: _this24.size(),
              action: _this24._buildAction(e.action)
            };
          });

          this._fullInfo.setValue(t);
        }
      }, {
        key: "_buildAction",
        value: function _buildAction(e) {
          var t;
          return e && e.onClick ? {
            text: null !== (t = e.text) && void 0 !== t ? t : "",
            tooltip: e.tooltip,
            onClick: e.onClick
          } : null;
        }
      }, {
        key: "_unSyncModel",
        value: function _unSyncModel() {
          this._symbolModel && (this._symbolModel.visible().unsubscribe(this._updateVisibleCallback), this._symbolModel.color().unsubscribe(this._updateColorCallback), this._symbolModel.icon().unsubscribe(this._updateIconCallback), this._symbolModel.tooltip().unsubscribe(this._updateTooltipCallback), this._symbolModel.tooltipContent().unsubscribe(this._updateFullInfoCallback));
        }
      }, {
        key: "_syncModel",
        value: function _syncModel() {
          var e, t, s, i, l, o, a, n, r, d;
          this._visible.setValue(null !== (t = null === (e = this._symbolModel) || void 0 === e ? void 0 : e.visible().value()) && void 0 !== t && t), this._color.setValue(null !== (i = null === (s = this._symbolModel) || void 0 === s ? void 0 : s.color().value()) && void 0 !== i ? i : null), this._icon.setValue(null !== (o = null === (l = this._symbolModel) || void 0 === l ? void 0 : l.icon().value()) && void 0 !== o ? o : null), this._tooltip.setValue(null !== (n = null === (a = this._symbolModel) || void 0 === a ? void 0 : a.tooltip().value()) && void 0 !== n ? n : null), this._updateFullInfo(null !== (d = null === (r = this._symbolModel) || void 0 === r ? void 0 : r.tooltipContent().value()) && void 0 !== d ? d : null), this._symbolModel && (this._symbolModel.visible().subscribe(this._updateVisibleCallback), this._symbolModel.color().subscribe(this._updateColorCallback), this._symbolModel.icon().subscribe(this._updateIconCallback), this._symbolModel.tooltip().subscribe(this._updateTooltipCallback), this._symbolModel.tooltipContent().subscribe(this._updateFullInfoCallback));
        }
      }, {
        key: "_updateVisible",
        value: function _updateVisible(e) {
          this._visible.setValue(e);
        }
      }, {
        key: "_updateColor",
        value: function _updateColor(e) {
          this._color.setValue(e);
        }
      }, {
        key: "_updateIcon",
        value: function _updateIcon(e) {
          this._icon.setValue(e);
        }
      }, {
        key: "_updateTooltip",
        value: function _updateTooltip(e) {
          this._tooltip.setValue(e);
        }
      }]);

      return Ai;
    }();

    var Li = s(75593),
        Wi = s(53218),
        Ti = s(32140),
        xi = s(62998),
        Hi = s(25230),
        Di = s(15507),
        Pi = s(43401),
        Bi = s(85290),
        Ii = s(12462);
    var zi = B.t(null, void 0, s(83949)),
        Ni = B.t(null, void 0, s(56042)),
        Oi = B.t(null, void 0, s(29985)),
        Fi = B.t(null, void 0, s(95814)),
        Ri = B.t(null, void 0, s(88958)),
        Ui = B.t(null, void 0, s(69419)),
        Gi = B.t(null, void 0, s(1653)),
        $i = B.t(null, void 0, s(40519)),
        ji = B.t(null, void 0, s(57048)),
        Yi = B.t(null, void 0, s(56086)),
        qi = B.t(null, void 0, s(39348)),
        Zi = B.t(null, void 0, s(7827)),
        Xi = B.t(null, void 0, s(19830)),
        Ji = B.t(null, void 0, s(35701)),
        Qi = B.t(null, void 0, s(98105)),
        Ki = B.t(null, void 0, s(50634)),
        el = B.t(null, void 0, s(74537)),
        tl = new Map([["market", new Map([["small", Ti], ["medium", xi], ["large", xi]])], ["pre_market", new Map([["small", Bi], ["medium", Ii], ["large", Ii]])], ["post_market", new Map([["small", Di], ["medium", Pi], ["large", Pi]])], ["out_of_session", new Map([["small", Wi], ["medium", Wi], ["large", Wi]])], ["holiday", new Map([["small", Hi], ["medium", Hi], ["large", Hi]])]]),
        sl = new Map([["market", ls.marketStatusOpen], ["pre_market", ls.marketStatusPre], ["post_market", ls.marketStatusPost], ["out_of_session", ls.marketStatusClose], ["holiday", ls.marketStatusHoliday]]),
        il = new Map([["market", zi], ["pre_market", Ni], ["post_market", Oi], ["out_of_session", Fi], ["holiday", Ri]]),
        ll = new Map([["market", zi], ["pre_market", Ni], ["post_market", Oi], ["out_of_session", Fi], ["holiday", Ri]]),
        ol = new Map([["market", ss.colorsPalette["color-market-open"]], ["pre_market", ss.colorsPalette["color-pre-market"]], ["post_market", ss.colorsPalette["color-post-market"]], ["out_of_session", ss.colorsPalette["color-market-closed"]], ["holiday", ss.colorsPalette["color-market-holiday"]]]),
        al = {
      market: Ui,
      pre_market: Gi,
      post_market: $i,
      out_of_session: ji,
      holiday: Yi
    };

    function nl(e) {
      return B.t(null, {
        plural: "{number} minutes",
        count: e
      }, s(67151)).format({
        number: e.toString()
      });
    }

    function rl(e) {
      return B.t(null, {
        plural: "{number} hours",
        count: e
      }, s(24430)).format({
        number: e.toString()
      });
    }

    function dl(e) {
      var t = Math.floor(e / 86400),
          i = Math.floor((e - 86400 * t) / 3600),
          l = Math.floor((e - 86400 * t - 3600 * i) / 60);
      return 0 === t && 0 === i && 0 === l ? qi : t > 0 ? Zi.format({
        days: (o = t, B.t(null, {
          plural: "{number} days",
          count: o
        }, s(58609)).format({
          number: o.toString()
        })),
        hours: rl(i)
      }) : i > 0 ? Xi.format({
        hours: rl(i),
        minutes: nl(l)
      }) : nl(l);
      var o;
    }

    var ul = {
      market: function market(e) {
        return ("post_market" === e.status ? Ki : Qi).format({
          remainingTime: dl(e.remainingSeconds)
        });
      },
      pre_market: function pre_market(e) {
        return Ji.format({
          remainingTime: dl(e.remainingSeconds)
        });
      },
      post_market: function post_market(e) {
        return Qi.format({
          remainingTime: dl(e.remainingSeconds)
        });
      },
      out_of_session: function out_of_session(e) {
        return ("pre_market" === e.status ? el : Ji).format({
          remainingTime: dl(e.remainingSeconds)
        });
      },
      holiday: function holiday(e) {
        return ("pre_market" === e.status ? el : Ji).format({
          remainingTime: dl(e.remainingSeconds)
        });
      }
    },
        hl = new Map([["market", null], ["pre_market", null], ["post_market", null], ["out_of_session", null], ["holiday", null]]);

    var cl =
    /*#__PURE__*/
    function (_os5) {
      _inherits(cl, _os5);

      function cl(e, t) {
        var _this25;

        _classCallCheck(this, cl);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(cl).call(this, {
          tooltipMap: il,
          iconMap: tl,
          classNameMap: sl,
          titleMap: ll,
          titleColorMap: ol,
          actionMap: hl,
          size: t
        })), _this25._model = null, _this25._expiredStatus = null, _this25._marketStatus = new a.WatchedValue(null).spawn(), _this25._sessionEdge = new a.WatchedValue(null).spawn(), _this25.setModel(e), et.showMarketOpenStatusProperty.subscribe(_assertThisInitialized(_this25), _this25._showMarketOpenStatusPropertyChanged);
        return _this25;
      }

      _createClass(cl, [{
        key: "destroy",
        value: function destroy() {
          this._marketStatus.destroy(), this._sessionEdge.destroy(), this._model = null, et.showMarketOpenStatusProperty.unsubscribeAll(this);
        }
      }, {
        key: "setModel",
        value: function setModel(e) {
          var _this26 = this;

          var t;
          if (this._marketStatus.destroy(), this._sessionEdge.destroy(), null === (t = this._expiredStatus) || void 0 === t || t.destroy(), null === e) return this._marketStatus = new a.WatchedValue(null).spawn(), this._sessionEdge = new a.WatchedValue(null).spawn(), void (this._expiredStatus = null);
          this._model = e;
          var s = e.futuresContractExpirationTime();
          s && (this._expiredStatus = s.expired().spawn(), this._expiredStatus.subscribe(function (e) {
            e && _this26._updateByStatus(_this26._marketStatus.value());
          })), this._marketStatus = e.status().spawn(), this._marketStatus.subscribe(this._updateStatus.bind(this), {
            callWithLast: !0
          }), this._sessionEdge = e.nextSessionEdge().spawn(), this._sessionEdge.subscribe(this._updateTooltip.bind(this)), this._updateTooltip();
        }
      }, {
        key: "_updateFullTooltip",
        value: function _updateFullTooltip() {
          var e, t, _s13, _s14;

          return regeneratorRuntime.async(function _updateFullTooltip$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  e = this.status().value();

                  if (!(null === e)) {
                    _context8.next = 3;
                    break;
                  }

                  return _context8.abrupt("return", void this._fullTooltip.setValue(null));

                case 3:
                  if (this._isExpiredFutures()) t = [(0, is.htmlEscape)(expiredHtml)];else {
                    t = [(0, is.htmlEscape)(al[e])];
                    _s13 = this._marketStatus.value();

                    if (null !== this._model && null !== _s13) {
                      _s14 = this._model.nextSessionEdge().value();
                      null !== _s14 && t.push({
                        text: ul[e](_s14),
                        bold: !0
                      });
                    }
                  }

                  this._fullTooltip.setValue([{
                    icon: this._getIcon(e),
                    iconClassName: this._getFullTooltipIconClassNames(e),
                    title: this._getTitle(e),
                    titleColor: this._getTitleColor(e),
                    html: t,
                    size: this._size,
                    action: this._getAction(e)
                  }]);

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_shouldBeHiddenByStatus",
        value: function _shouldBeHiddenByStatus(e) {
          return !et.showMarketOpenStatusProperty.value() && "market" === e;
        }
      }, {
        key: "_getTooltip",
        value: function _getTooltip(e) {
          return this._isExpiredFutures() ? expiredTooltip : _get(_getPrototypeOf(cl.prototype), "_getTooltip", this).call(this, e);
        }
      }, {
        key: "_getIcon",
        value: function _getIcon(e) {
          return this._isExpiredFutures() ? expiredIconMap.get(this._size) || null : _get(_getPrototypeOf(cl.prototype), "_getIcon", this).call(this, e);
        }
      }, {
        key: "_getClassName",
        value: function _getClassName(e) {
          return this._isExpiredFutures() ? expiredClassName : _get(_getPrototypeOf(cl.prototype), "_getClassName", this).call(this, e);
        }
      }, {
        key: "_getTitle",
        value: function _getTitle(e) {
          return this._isExpiredFutures() ? expiredTitle : _get(_getPrototypeOf(cl.prototype), "_getTitle", this).call(this, e);
        }
      }, {
        key: "_getTitleColor",
        value: function _getTitleColor(e) {
          return this._isExpiredFutures() ? expiredTitleColor : _get(_getPrototypeOf(cl.prototype), "_getTitleColor", this).call(this, e);
        }
      }, {
        key: "_isExpiredFutures",
        value: function _isExpiredFutures() {
          var e, t, s;
          return null !== (s = null === (t = null === (e = this._model) || void 0 === e ? void 0 : e.futuresContractExpirationTime()) || void 0 === t ? void 0 : t.expired().value()) && void 0 !== s && s;
        }
      }, {
        key: "_updateStatus",
        value: function _updateStatus(e) {
          this._status.setValue(e);
        }
      }, {
        key: "_updateTooltip",
        value: function _updateTooltip() {
          this._updateFullTooltip();
        }
      }, {
        key: "_showMarketOpenStatusPropertyChanged",
        value: function _showMarketOpenStatusPropertyChanged() {
          this._updateByStatus(this._status.value());
        }
      }]);

      return cl;
    }(os);

    var _l =
    /*#__PURE__*/
    function () {
      function _l(e, t) {
        var _this27 = this;

        _classCallCheck(this, _l);

        var s, i;
        this.errorWidgetIsShown = new a.WatchedValue(!1), this._size = h.trackingModeIsAvailable ? "medium" : "small", this._tooltips = new a.WatchedValue([]), this._visibilitySpawns = [], this._tooltipSpawns = [], this._statusWidgetInfos = [], this._visibility = new a.WatchedValue(!1), this._renderer = new ki(this._size, this._tooltips, {
          onClick: this._handleToggleDropdown.bind(this)
        }), this._symbolInvalidViewModel = null, this._dataSourceErrorStatusViewModel = null, this._marketStatusViewModel = null, this._dataUpdatedModeViewModel = null, this._dataProblemViewModel = null, this._customStatusViewModel = null, this._sessionWidget = null, this._dataSourceHasErrorVisible = null, this._dataSourceErrorCanBeShown = new a.WatchedValue(!1), this._marketStatusCanBeShown = new a.WatchedValue(!1), this._dataUpdatedModeCanBeShown = new a.WatchedValue(!1), this._dataProblemCanBeShown = new a.WatchedValue(!1), this._isDataProblemCritical = null, this._container = document.createElement("div"), this._menuOpened = !1, this._menuPosition = null, this._handleDropdownMenuClose = function () {
          var e;
          _this27._menuOpened = !1, null === (e = _this27._source.symbol()) || void 0 === e || e.unsubscribe(_this27._handleDropdownMenuClose), _this27._updateDropdownMenu();
        }, this._updateVisibility = function (e) {
          _this27._visibility.setValue(!e), _this27._renderer.setVisibility(e);
        }, this._source = e, this._symbol = null !== (i = null === (s = e.symbol()) || void 0 === s ? void 0 : s.spawn()) && void 0 !== i ? i : null, this._options = t, this._statusProviderHidden = e.hidden().spawn(), this._statusProviderHidden.subscribe(this._updateVisibility, {
          callWithLast: !0
        }), this._recreateWidgets(), this._symbol && this._symbol.subscribe(this._recreateAndUpdateWidgetState.bind(this)), this._addSubscriptionForSymbolInvalid(), null !== this._dataSourceHasErrorVisible && (this._dataSourceHasErrorVisible.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), this._dataSourceHasErrorVisible.subscribe(this._updateErrorWidgetIsShown.bind(this))), this._options.dataProblemEnabled && null !== this._isDataProblemCritical && this._isDataProblemCritical.subscribe(this._updateStatusWidgetsVisibilities.bind(this));
        var _iteratorNormalCompletion25 = true;
        var _didIteratorError25 = false;
        var _iteratorError25 = undefined;

        try {
          for (var _iterator25 = this._tooltipSpawns[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
            var _e39 = _step25.value;

            _e39.subscribe(this._updateTooltips.bind(this));
          }
        } catch (err) {
          _didIteratorError25 = true;
          _iteratorError25 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
              _iterator25["return"]();
            }
          } finally {
            if (_didIteratorError25) {
              throw _iteratorError25;
            }
          }
        }

        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = this._visibilitySpawns[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _e40 = _step26.value;

            _e40.subscribe(this._updateTooltips.bind(this));
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }

        this._updateErrorWidgetIsShown(), this._updateStatusWidgetsVisibilities(), this._updateTooltips();
      }

      _createClass(_l, [{
        key: "destroy",
        value: function destroy() {
          var e, t;
          this._statusProviderHidden.destroy(), this._visibility.unsubscribe(), null === (e = this._symbol) || void 0 === e || e.destroy(), null === (t = this._isDataProblemCritical) || void 0 === t || t.destroy();
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = this._tooltipSpawns[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _e41 = _step27.value;

              _e41.destroy();
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                _iterator27["return"]();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }

          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = this._visibilitySpawns[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var _e42 = _step28.value;

              _e42.destroy();
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                _iterator28["return"]();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }

          var _iteratorNormalCompletion29 = true;
          var _didIteratorError29 = false;
          var _iteratorError29 = undefined;

          try {
            for (var _iterator29 = this._statusWidgetInfos[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
              var _e43 = _step29.value;

              _e43.model.destroy();
            }
          } catch (err) {
            _didIteratorError29 = true;
            _iteratorError29 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
                _iterator29["return"]();
              }
            } finally {
              if (_didIteratorError29) {
                throw _iteratorError29;
              }
            }
          }

          this._renderer.destroy();
        }
      }, {
        key: "visibility",
        value: function visibility() {
          return this._visibility.readonly();
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._renderer.element;
        }
      }, {
        key: "updateSource",
        value: function updateSource(e) {
          var t, s, i;
          this._source !== e && (this._statusProviderHidden.destroy(), null === (t = this._symbol) || void 0 === t || t.destroy(), this._source = e, this._symbol = null !== (i = null === (s = e.symbol()) || void 0 === s ? void 0 : s.spawn()) && void 0 !== i ? i : null, this._statusProviderHidden = e.hidden().spawn(), this._statusProviderHidden.subscribe(this._updateVisibility, {
            callWithLast: !0
          }), this._recreateAndUpdateWidgetState());
        }
      }, {
        key: "_updateStatusWidgetsVisibilities",
        value: function _updateStatusWidgetsVisibilities() {
          var e = this._isForceStatusActive();

          this._dataSourceErrorCanBeShown.setValue(!e), this._marketStatusCanBeShown.setValue(!e), this._dataUpdatedModeCanBeShown.setValue(!e), this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown());
        }
      }, {
        key: "_isPrimaryWidgetShown",
        value: function _isPrimaryWidgetShown() {
          var e, t;
          return null !== (t = null === (e = this._source.isSymbolInvalid()) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t;
        }
      }, {
        key: "_isForceStatusActive",
        value: function _isForceStatusActive() {
          var e, t;
          return this._isPrimaryWidgetShown() || null !== (t = null === (e = this._isDataProblemCritical) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t;
        }
      }, {
        key: "_recreateWidgets",
        value: function _recreateWidgets() {
          var _this28 = this;

          var e, t, s, i, l, a, n, r;

          if (this._options.sourceStatusesEnabled) {
            var _e44 = this._source.isSymbolInvalid();

            if (null !== _e44) if (null === this._symbolInvalidViewModel) {
              this._symbolInvalidViewModel = new _i(_e44, {
                tooltipMap: yi,
                iconMap: bi,
                classNameMap: wi,
                titleMap: Si,
                titleColorMap: fi,
                htmlMap: Mi,
                actionMap: Ci,
                size: this._size
              });

              var _t21 = this._symbolInvalidViewModel.visible().spawn();

              this._visibilitySpawns.push(_t21), this._tooltipSpawns.push(this._symbolInvalidViewModel.tooltip().spawn());
              var _s15 = {
                visible: _t21,
                model: this._symbolInvalidViewModel
              };
              this._statusWidgetInfos.push(_s15), this._renderer.addStatusModel(_s15);
            } else this._symbolInvalidViewModel.updateStatus(_e44), this._addSubscriptionForSymbolInvalid();

            if (null === this._dataSourceErrorStatusViewModel) {
              this._dataSourceErrorStatusViewModel = new ai(this._source, this._size, this._options.sourceStatuses), this._dataSourceHasErrorVisible = (0, le.combine)(function () {
                return _this28._dataSourceErrorCanBeShown.value() && (0, o.ensureNotNull)(_this28._dataSourceErrorStatusViewModel).visible().value();
              }, this._dataSourceErrorCanBeShown.weakReference(), this._dataSourceErrorStatusViewModel.visible().weakReference()), this._visibilitySpawns.push(this._dataSourceHasErrorVisible), this._tooltipSpawns.push(this._dataSourceErrorStatusViewModel.tooltip().spawn());
              var _e45 = {
                visible: this._dataSourceHasErrorVisible,
                model: this._dataSourceErrorStatusViewModel
              };
              this._statusWidgetInfos.push(_e45), this._renderer.addStatusModel(_e45);
            } else this._dataSourceErrorStatusViewModel.setSource(this._source);
          }

          if (this._options.marketStatusEnabled) {
            var _t22 = this._source.marketStatusModel();

            if (null === this._marketStatusViewModel) {
              this._marketStatusViewModel = new cl(_t22, this._size);

              var _e46 = (0, le.combine)(function () {
                return _this28._marketStatusCanBeShown.value() && (0, o.ensureNotNull)(_this28._marketStatusViewModel).visible().value() && !(0, Ke.isEconomicSymbol)(_this28._source.symbolInfo().value());
              }, this._marketStatusCanBeShown.weakReference(), this._marketStatusViewModel.visible().weakReference(), this._source.symbolInfo().weakReference());

              this._visibilitySpawns.push(_e46), this._tooltipSpawns.push(this._marketStatusViewModel.tooltip().spawn());
              var _s16 = {
                visible: _e46,
                model: this._marketStatusViewModel
              };
              null !== _t22 && (this._sessionWidget = new ts(this._source), _s16.additionalWidgets = [this._sessionWidget]), this._statusWidgetInfos.push(_s16), this._renderer.addStatusModel(_s16);
            } else this._marketStatusViewModel.setModel(_t22), null === (e = this._sessionWidget) || void 0 === e || e.updateSource(this._source);
          }

          if (this._options.dataUpdateModeEnabled) {
            var _e47 = this._source.dataUpdatedModeModel();

            if (null === this._dataUpdatedModeViewModel) {
              var _i17 = _objectSpread({}, this._options.dataUpdateMode, {
                shouldBeHiddenRegardlessOfStatus: null === (s = null === (t = this._source.marketStatusModel()) || void 0 === t ? void 0 : t.futuresContractExpirationTime()) || void 0 === s ? void 0 : s.expired()
              });

              this._dataUpdatedModeViewModel = new Js(_e47, this._size, _i17);

              var _l9 = (0, le.combine)(function () {
                return _this28._dataUpdatedModeCanBeShown.value() && (0, o.ensureNotNull)(_this28._dataUpdatedModeViewModel).visible().value() && !(0, Ke.isEconomicSymbol)(_this28._source.symbolInfo().value());
              }, this._dataUpdatedModeCanBeShown.weakReference(), this._dataUpdatedModeViewModel.visible().weakReference(), this._source.symbolInfo().weakReference());

              this._visibilitySpawns.push(_l9), this._tooltipSpawns.push(this._dataUpdatedModeViewModel.tooltip().spawn());
              var _a8 = {
                visible: _l9,
                model: this._dataUpdatedModeViewModel
              };
              this._statusWidgetInfos.push(_a8), this._renderer.addStatusModel(_a8);
            } else this._dataUpdatedModeViewModel.setModel(_e47);
          }

          if (this._options.dataProblemEnabled) {
            var _e48 = this._source.dataProblemModel();

            if (null === this._dataProblemViewModel) {
              this._dataProblemViewModel = new ci(_e48, this._size), this._isDataProblemCritical = this._dataProblemViewModel.isDataProblemCritical().spawn();

              var _t23 = (0, le.combine)(function () {
                return _this28._dataProblemCanBeShown.value() && (0, o.ensureNotNull)(_this28._dataProblemViewModel).visible().value();
              }, this._dataProblemCanBeShown.weakReference(), this._dataProblemViewModel.visible().weakReference());

              this._visibilitySpawns.push(_t23), this._tooltipSpawns.push(this._dataProblemViewModel.tooltip().spawn());
              var _s17 = {
                visible: _t23,
                model: this._dataProblemViewModel
              };
              this._statusWidgetInfos.push(_s17), this._renderer.addStatusModel(_s17);
            } else this._dataProblemViewModel.setModel(_e48);
          }

          if (null !== (a = null === (l = (i = this._source).isMainSeries) || void 0 === l ? void 0 : l.call(i)) && void 0 !== a && a) {
            var _e49 = Li.CustomStatusModel.getInstance(),
                _t24 = null !== (r = null === (n = this._symbol) || void 0 === n ? void 0 : n.value()) && void 0 !== r ? r : null;

            if (null === this._customStatusViewModel) {
              this._customStatusViewModel = new Ai(_e49, this._size), this._customStatusViewModel.setSymbol(_t24);

              var _s18 = this._customStatusViewModel.visible().spawn(),
                  _i18 = {
                visible: _s18,
                model: this._customStatusViewModel
              };

              this._visibilitySpawns.push(_s18), this._tooltipSpawns.push(this._customStatusViewModel.tooltip().spawn()), this._statusWidgetInfos.push(_i18), this._renderer.addStatusModel(_i18);
            } else this._customStatusViewModel.setModel(_e49), this._customStatusViewModel.setSymbol(_t24);
          }
        }
      }, {
        key: "_updateTooltips",
        value: function _updateTooltips() {
          var e = [];

          for (var t = 0; t < this._tooltipSpawns.length; t++) {
            if (!this._visibilitySpawns[t].value()) continue;

            var _s19 = this._tooltipSpawns[t].value();

            null !== _s19 && _s19.length > 0 && e.push(_s19);
          }

          this._tooltips.setValue(e);
        }
      }, {
        key: "_addTooltipSpawn",
        value: function _addTooltipSpawn(e) {
          e.subscribe(this._updateTooltips.bind(this)), this._tooltipSpawns.push(e);
        }
      }, {
        key: "_addVisibilitySpawn",
        value: function _addVisibilitySpawn(e) {
          e.subscribe(this._updateTooltips.bind(this)), this._visibilitySpawns.push(e);
        }
      }, {
        key: "_recreateAndUpdateWidgetState",
        value: function _recreateAndUpdateWidgetState() {
          this._recreateWidgets(), this._updateStatusWidgetsVisibilities(), this._updateErrorWidgetIsShown(), this._updateTooltips();
        }
      }, {
        key: "_addSubscriptionForSymbolInvalid",
        value: function _addSubscriptionForSymbolInvalid() {
          var e = this._source.isSymbolInvalid();

          this._options.sourceStatusesEnabled && null !== e && (e.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), e.subscribe(this._updateErrorWidgetIsShown.bind(this), {
            callWithLast: !0
          }));
        }
      }, {
        key: "_updateErrorWidgetIsShown",
        value: function _updateErrorWidgetIsShown() {
          var e, t, s, i;
          var l = null !== (t = null === (e = this._source.isSymbolInvalid()) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t,
              o = null !== (i = null === (s = this._dataSourceHasErrorVisible) || void 0 === s ? void 0 : s.value()) && void 0 !== i && i;
          this.errorWidgetIsShown.setValue(l || o);
        }
      }, {
        key: "_handleToggleDropdown",
        value: function _handleToggleDropdown(e) {
          var t, s;
          this._menuPosition = e, this._menuOpened = !this._menuOpened, this._menuOpened && (null === (t = this._source.symbol()) || void 0 === t || t.subscribe(this._handleDropdownMenuClose), s = "Open full tooltip for statuses: ".concat(this._tooltips.value().join(", ")), (0, I.trackEvent)("GUI", "Statuses widget's action", s)), this._updateDropdownMenu();
        }
      }, {
        key: "_updateDropdownMenu",
        value: function _updateDropdownMenu() {
          var _this29 = this;

          Promise.all([s.e(3842), s.e(5649), s.e(2731), s.e(962), s.e(3179), s.e(8643)]).then(s.bind(s, 52685)).then(function (e) {
            e.render({
              opened: _this29._menuOpened,
              container: _this29._container,
              rendererButton: _this29._renderer.element,
              statusWidgetInfos: _this29._statusWidgetInfos,
              onClose: _this29._handleDropdownMenuClose,
              position: (0, o.ensureNotNull)(_this29._menuPosition)
            });
          });
        }
      }]);

      return _l;
    }();

    var pl =
    /*#__PURE__*/
    function (_l10) {
      _inherits(pl, _l10);

      function pl(e, t, s) {
        var _this30;

        _classCallCheck(this, pl);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(pl).call(this, e, s)), _this30._isInReplay = new a.WatchedValue(!1).readonly().spawn(), _this30._isInReplayCanBeShown = null, _this30._inited = !1, _this30._halalViewModel = null, _this30._halalCanBeShown = new a.WatchedValue(!1);
        return _this30;
      }

      _createClass(pl, [{
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(pl.prototype), "destroy", this).call(this);
        }
      }, {
        key: "updateSource",
        value: function updateSource(e) {
          _get(_getPrototypeOf(pl.prototype), "updateSource", this).call(this, e);
        }
      }, {
        key: "_updateStatusWidgetsVisibilities",
        value: function _updateStatusWidgetsVisibilities() {
          _get(_getPrototypeOf(pl.prototype), "_updateStatusWidgetsVisibilities", this).call(this);
        }
      }, {
        key: "_isPrimaryWidgetShown",
        value: function _isPrimaryWidgetShown() {
          var e, t;
          return _get(_getPrototypeOf(pl.prototype), "_isPrimaryWidgetShown", this).call(this) || null !== (t = null === (e = this._isInReplay) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t;
        }
      }, {
        key: "_crateHalalStatus",
        value: function _crateHalalStatus() {}
      }, {
        key: "_getHalalVisibilitySpawn",
        value: function _getHalalVisibilitySpawn() {
          return new a.WatchedValue(!1).readonly().spawn();
        }
      }]);

      return pl;
    }(_l);

    var ml = s(92249);

    var gl =
    /*#__PURE__*/
    function () {
      function gl(e, t) {
        var _this31 = this;

        _classCallCheck(this, gl);

        this._hidden = new a.WatchedValue(!1), this._symbol = null, this._isSymbolInvalid = null, this._symbolInfo = new a.WatchedValue(null).spawn(), this._source = e, e.properties().hasChild("symbol") && (this._symbol = (0, K.createWVFromGetterAndSubscription)(function () {
          return e.properties().symbol.value();
        }, e.properties().symbol.listeners()));
        var s = [];
        if ((0, ml.isStudyLineTool)(e)) s.push(e.onStatusChanged());else if ((0, We.isStudy)(e) || (0, We.isStudyStub)(e)) this._isSymbolInvalid = (0, K.createWVFromGetterAndSubscriptions)(function () {
          return e.isSymbolInvalid() && e.isActualInterval();
        }, s), s.push(e.onStatusChanged(), e.onIsActualIntervalChange());else {
          (0, o.assert)(e === t.mainSeries());
          var i = t.mainSeries();
          this._isSymbolInvalid = (0, K.createWVFromGetterAndSubscription)(function () {
            return i.isSymbolInvalid();
          }, i.onStatusChanged()), s.push(i.onStatusChanged()), this._symbolInfo = (0, K.createWVFromGetterAndSubscription)(i.symbolInfo.bind(i), i.dataEvents().symbolResolved());
        }
        this._dataSourceErrorStatus = (0, K.createWVFromGetterAndSubscriptions)(function () {
          return _this31._source.statusProvider({}).errorStatus();
        }, s);
      }

      _createClass(gl, [{
        key: "destroy",
        value: function destroy() {
          var e, t;
          null === (e = this._symbol) || void 0 === e || e.destroy(), null === (t = this._isSymbolInvalid) || void 0 === t || t.destroy(), this._dataSourceErrorStatus.destroy(), this._symbolInfo.destroy();
        }
      }, {
        key: "symbol",
        value: function symbol() {
          return this._symbol;
        }
      }, {
        key: "isSymbolInvalid",
        value: function isSymbolInvalid() {
          return this._isSymbolInvalid;
        }
      }, {
        key: "errorStatus",
        value: function errorStatus() {
          return this._dataSourceErrorStatus;
        }
      }, {
        key: "symbolInfo",
        value: function symbolInfo() {
          return this._symbolInfo;
        }
      }, {
        key: "hidden",
        value: function hidden() {
          return this._hidden.readonly();
        }
      }, {
        key: "marketStatusModel",
        value: function marketStatusModel() {
          return this._source.marketStatusModel();
        }
      }, {
        key: "dataProblemModel",
        value: function dataProblemModel() {
          return this._source.dataProblemModel();
        }
      }, {
        key: "dataUpdatedModeModel",
        value: function dataUpdatedModeModel() {
          return this._source.dataUpdatedModeModel();
        }
      }, {
        key: "isMainSeries",
        value: function isMainSeries() {
          var e, t, s;
          return null !== (s = null === (t = (e = this._source).isMainSeries) || void 0 === t ? void 0 : t.call(e)) && void 0 !== s && s;
        }
      }]);

      return gl;
    }();

    var vl =
    /*#__PURE__*/
    function (_gl) {
      _inherits(vl, _gl);

      function vl(e, t) {
        var _this32;

        _classCallCheck(this, vl);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(vl).call(this, e, t)), _this32._forceDisableHiddenState = new a.WatchedValue(!0), _this32._forceDisableHiddenStateTimeout = null, _this32._series = e, _this32._marketStatus = e.marketStatusModel().status().spawn(), _this32._marketStatus.subscribe(function (e) {
          null === e && (null !== _this32._forceDisableHiddenStateTimeout && clearTimeout(_this32._forceDisableHiddenStateTimeout), _this32._forceDisableHiddenState.setValue(!1), _this32._forceDisableHiddenStateTimeout = setTimeout(function () {
            _this32._forceDisableHiddenStateTimeout = null, _this32._forceDisableHiddenState.setValue(!0);
          }, 3500));
        }, {
          callWithLast: !0
        }), _this32._dataProblems = _this32._series.dataProblemModel().dataProblems().spawn(), _this32._marketStatus.subscribe(_this32._updateHiddenValue.bind(_assertThisInitialized(_this32))), _this32._dataProblems.subscribe(_this32._updateHiddenValue.bind(_assertThisInitialized(_this32))), _this32._forceDisableHiddenState.subscribe(_this32._updateHiddenValue.bind(_assertThisInitialized(_this32))), e.onStatusChanged().subscribe(_assertThisInitialized(_this32), _this32._updateHiddenValue), _this32._updateHiddenValue();
        return _this32;
      }

      _createClass(vl, [{
        key: "destroy",
        value: function destroy() {
          this._marketStatus.destroy(), this._dataProblems.destroy(), this._series.onStatusChanged().unsubscribeAll(this), null !== this._forceDisableHiddenStateTimeout && clearTimeout(this._forceDisableHiddenStateTimeout), _get(_getPrototypeOf(vl.prototype), "destroy", this).call(this);
        }
      }, {
        key: "_updateHiddenValue",
        value: function _updateHiddenValue() {
          var e = this._series.status(),
              t = this._forceDisableHiddenState.value() || 12 === e || 4 === e || null !== this._marketStatus.value() && 2 !== e && 1 !== e || this._dataProblems.value().some(function (e) {
            return "high" === e.severity;
          });

          this._hidden.setValue(!t);
        }
      }]);

      return vl;
    }(gl);

    var bl = s(5286);
    var wl = {
      readOnlyMode: !1,
      contextMenu: {
        settings: !0,
        mainSeries: !0,
        studies: !0,
        showOpenMarketStatus: !1
      },
      symbolMarkerEnabled: !1,
      showToggleButton: !0,
      canShowSourceCode: !1,
      statusesWidgets: {
        sourceStatusesEnabled: !1,
        sourceStatuses: {
          errorSolution: !0
        },
        marketStatusEnabled: !1,
        marketStatus: {
          preMarketSolution: !0,
          postMarketSolution: !0
        },
        dataUpdateModeEnabled: !1,
        dataUpdateMode: {
          subscriptionFullInfo: !0
        },
        dataProblemEnabled: !1
      }
    },
        yl = (d.enabled("hide_legend_by_default"), d.enabled("fundamental_widget")),
        Sl = d.enabled("legend_context_menu"),
        fl = 2 * parseInt(y.marginlegendhoriz);

    var Ml =
    /*#__PURE__*/
    function () {
      function Ml(e, t, s, i, o, r, d, u) {
        var _this33 = this;

        _classCallCheck(this, Ml);

        this._mainSeriesViewModel = null, this._dataSourceViewModels = [], this._visibleDataSourceCount = new a.WatchedValue(0), this._themedColor = new a.WatchedValue(""), this._mainSeriesRowHidden = null, this._dataSourceRowsHidden = [], this._customWidgetsVisibilities = [], this._allLegendHidden = new a.WatchedValue(!1), this._studiesLegendHidden = new a.WatchedValue(!1), this._customWidgetsHeights = [], this._onLegendVisibilityToggled = null, this._availableHeight = 0, this._collapsedDataSourcesCount = new a.WatchedValue(0), this._collapsedDataSourcesTitle = new a.WatchedValue(""), this._mainSeriesStatusWidget = null, this._dataSourcesStatusesWidgets = [], this._statusProviders = new Map(), this._size = null, this._customLegendWidgetsFactoriesMap = new Map(), this._customLegendWidgetsMap = new Map(), this._margin = 0, this._model = e, this._paneWidget = t, this._options = (0, n.merge)((0, n.clone)(wl), d), this._callbacks = u, this._mainSeriesViewModelsOptions = {
          readOnlyMode: this._options.readOnlyMode,
          symbolMarkerEnabled: this._options.symbolMarkerEnabled
        }, this._dataSourceViewModelsOptions = _objectSpread({}, this._mainSeriesViewModelsOptions, {
          canShowSourceCode: this._options.canShowSourceCode
        }), this._backgroundThemeName = s;

        var h = this._showLegendCalculatedProperty();

        this._isDataSourcesCollapsed = new a.WatchedValue(h.value()), h.subscribe(this, function () {
          _this33._isDataSourcesCollapsed.setValue(h.value());
        });

        var c = new a.WatchedValue(this._getCustomTextColorValue()),
            _ = this._model.model().properties().childs();

        _.scalesProperties.childs().textColor.subscribe(this, function () {
          c.setValue(_this33._getCustomTextColorValue());
        });

        var p = _.paneProperties.childs().legendProperties.childs().showBackground,
            m = new a.WatchedValue(p.value());

        p.subscribe(this, function () {
          m.setValue(p.value());
        });

        var g = _.paneProperties.childs().legendProperties.childs().backgroundTransparency,
            v = new a.WatchedValue(g.value());

        g.subscribe(this, function () {
          v.setValue(g.value());
        }), this._hideNotMainSources = i, this._hideNotMainSources.subscribe(this._updateLegendVisibilities.bind(this)), this._hideAllExceptFirstLine = o, this._hideAllExceptFirstLine.subscribe(this._updateCollapsedSourcesMode.bind(this)), this._hideWholeLegend = r, this._hideWholeLegend.subscribe(this._updateLegendVisibilities.bind(this)), this._isPaneMain = new a.WatchedValue(this._getIsPaneMainValue()), this._updateCollapsedSourcesModeThrottle = (0, l["default"])(this._updateCollapsedSourcesMode.bind(this), 100), this._renderer = new J({
          withActions: !this._options.readOnlyMode,
          showToggleButton: this._options.showToggleButton,
          isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
          isAllLegendHidden: this._allLegendHidden.readonly(),
          customTextColor: c.readonly(),
          themedColor: this._themedColor.readonly(),
          showBackground: m.readonly(),
          backgroundTransparency: v.readonly(),
          collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
          collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
          showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(this),
          hideAllExceptFirstLine: this._hideAllExceptFirstLine
        }, {
          visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
          isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
          showObjectsTree: this._isPaneMain.readonly(),
          onCollapseDataSources: this.onCollapseDataSources.bind(this),
          onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog
        });
      }

      _createClass(Ml, [{
        key: "destroy",
        value: function destroy() {
          this._backgroundThemeName.release(), this._hideNotMainSources.release(), this._hideAllExceptFirstLine.release(), this._hideWholeLegend.release(), null !== this._mainSeriesViewModel && this._destroyMainDataSource();
          var _iteratorNormalCompletion30 = true;
          var _didIteratorError30 = false;
          var _iteratorError30 = undefined;

          try {
            for (var _iterator30 = this._statusProviders[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
              var _step30$value = _slicedToArray(_step30.value, 2),
                  _e50 = _step30$value[1];

              _e50.destroy();
            }
          } catch (err) {
            _didIteratorError30 = true;
            _iteratorError30 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
                _iterator30["return"]();
              }
            } finally {
              if (_didIteratorError30) {
                throw _iteratorError30;
              }
            }
          }

          var _iteratorNormalCompletion31 = true;
          var _didIteratorError31 = false;
          var _iteratorError31 = undefined;

          try {
            for (var _iterator31 = this._dataSourceViewModels[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
              var _e51 = _step31.value;

              _e51.destroy();
            }
          } catch (err) {
            _didIteratorError31 = true;
            _iteratorError31 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
                _iterator31["return"]();
              }
            } finally {
              if (_didIteratorError31) {
                throw _iteratorError31;
              }
            }
          }

          var _iteratorNormalCompletion32 = true;
          var _didIteratorError32 = false;
          var _iteratorError32 = undefined;

          try {
            for (var _iterator32 = this._dataSourcesStatusesWidgets[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
              var _e52 = _step32.value;

              _e52.destroy();
            }
          } catch (err) {
            _didIteratorError32 = true;
            _iteratorError32 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
                _iterator32["return"]();
              }
            } finally {
              if (_didIteratorError32) {
                throw _iteratorError32;
              }
            }
          }

          this._clearSubscriptions();

          for (var _i19 = 0, _Array$from2 = Array.from(this._customLegendWidgetsMap.keys()); _i19 < _Array$from2.length; _i19++) {
            var _e53 = _Array$from2[_i19];

            this._destroyCustomWidgetFromLayerBlock(_e53);
          }

          this._customLegendWidgetsMap.clear(), this._renderer.destroy(), delete this._renderer, this._showLegendCalculatedProperty().unsubscribeAll(this), this._showLegendOriginalProperty().unsubscribeAll(this);

          var e = this._model.model().properties().childs();

          e.scalesProperties.childs().textColor.unsubscribeAll(this), e.paneProperties.childs().legendProperties.childs().showBackground.unsubscribeAll(this), e.paneProperties.childs().legendProperties.childs().backgroundTransparency.unsubscribeAll(this);
        }
      }, {
        key: "addCustomWidgetToLegend",
        value: function addCustomWidgetToLegend(e, t) {
          var s = this._customLegendWidgetsFactoriesMap.get(t.block) || new Map(),
              i = s.get(t.position) || [];
          i.push(e), s.set(t.position, i), this._customLegendWidgetsFactoriesMap.set(t.block, s), this.updateLayout(), this._updateCustomWidgetModeBySize();
        }
      }, {
        key: "onShowLegendWidgetContextMenu",
        value: function onShowLegendWidgetContextMenu(e, t) {
          if (this._options.readOnlyMode || !Sl) return Promise.resolve();
          z("Show legend context menu");
          var s = new Map();

          for (var _i20 = 0, _Array$from3 = Array.from(this._customLegendWidgetsMap.keys()); _i20 < _Array$from3.length; _i20++) {
            var _e58 = _Array$from3[_i20];

            var _t25 = (0, o.ensureDefined)(this._customLegendWidgetsMap.get(_e58)),
                _i21 = new Map();

            for (var _i22 = 0, _Array$from4 = Array.from(_t25.keys()); _i22 < _Array$from4.length; _i22++) {
              var _e59 = _Array$from4[_i22];

              var _s20 = (0, o.ensureDefined)(_t25.get(_e59)),
                  _l11 = _i21.get(_e59) || [];

              var _iteratorNormalCompletion33 = true;
              var _didIteratorError33 = false;
              var _iteratorError33 = undefined;

              try {
                for (var _iterator33 = _s20[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                  var _e60 = _step33.value;

                  _l11.push.apply(_l11, _toConsumableArray(_e60.contextMenuActions()));
                }
              } catch (err) {
                _didIteratorError33 = true;
                _iteratorError33 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
                    _iterator33["return"]();
                  }
                } finally {
                  if (_didIteratorError33) {
                    throw _iteratorError33;
                  }
                }
              }

              _i21.set(_e59, _l11);
            }

            s.set(_e58, _i21);
          }

          return function (e, t, s, i, l, o) {
            var a = [],
                n = i.get(0);

            if (void 0 !== n) {
              var _e54 = n.get(1);

              void 0 !== _e54 && _e54.length > 0 && (a.push.apply(a, _toConsumableArray(_e54)), a.push(new Je.Separator()));
            }

            var r = e.model().properties().childs().paneProperties.childs().legendProperties.childs(),
                d = Mt && e.model().symbolSources().some(function (e) {
              var t;
              return void 0 !== (null === (t = e.symbolInfo()) || void 0 === t ? void 0 : t.price_source_id);
            });

            if (a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleSymbolVisibility",
              checkable: !0,
              checked: r.showSeriesTitle.value(),
              label: _t,
              statName: "Show Symbol",
              onExecute: function onExecute() {
                return it(e, r.showSeriesTitle, lt);
              }
            })), t.showOpenMarketStatus && "market" === e.mainSeries().marketStatusModel().status().value() && !(0, Ke.isEconomicSymbol)(e.mainSeries().symbolInfo()) && a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleOpenMarketStatusVisibility",
              checkable: !0,
              checked: et.showMarketOpenStatusProperty.value(),
              label: pt,
              statName: "Show Open market status",
              onExecute: function onExecute() {
                return it(e, et.showMarketOpenStatusProperty, ot);
              }
            })), a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleOhlcValuesVisibility",
              checkable: !0,
              checked: r.showSeriesOHLC.value(),
              label: mt,
              statName: "Show OHLC Values",
              onExecute: function onExecute() {
                return it(e, r.showSeriesOHLC, at);
              }
            })), a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleBarChangeValuesVisibility",
              checkable: !0,
              checked: r.showBarChange.value(),
              label: gt,
              statName: "Show Bar Change Values",
              onExecute: function onExecute() {
                return it(e, r.showBarChange, nt);
              }
            })), a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleVolumeVisibility",
              checkable: !0,
              checked: r.showVolume.value(),
              label: vt,
              statName: "Show Volume",
              onExecute: function onExecute() {
                return it(e, r.showVolume, ht);
              }
            })), d && a.push(new Je.Action({
              actionId: "Chart.Legend.TogglePriceSourceVisibility",
              checkable: !0,
              checked: r.showPriceSource.value(),
              label: St,
              statName: "Show Price Source",
              onExecute: function onExecute() {
                return it(e, r.showPriceSource, ct);
              }
            })), a.push(new Je.Separator()), void 0 !== n) {
              var _e55 = n.get(0);

              void 0 !== _e55 && _e55.length > 0 && (a.push.apply(a, _toConsumableArray(_e55)), a.push(new Je.Separator()));
            }

            var u = i.get(1);

            if (void 0 !== u) {
              var _e56 = u.get(1);

              void 0 !== _e56 && _e56.length > 0 && (a.push.apply(a, _toConsumableArray(_e56)), a.push(new Je.Separator()));
            }

            if (e.model().priceDataSources().some(function (e) {
              return !(0, Oe.isActingAsSymbolSource)(e) && e.showInObjectTree();
            }) && (a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleIndicatorTitlesVisibility",
              checkable: !0,
              checked: r.showStudyTitles.value(),
              label: bt,
              statName: "Show Indicator Titles",
              onExecute: function onExecute() {
                return it(e, r.showStudyTitles, rt);
              }
            })), a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleIndicatorArgumentsVisibility",
              checkable: !0,
              checked: r.showStudyArguments.value(),
              label: wt,
              statName: "Show Indicator Arguments",
              onExecute: function onExecute() {
                return it(e, r.showStudyArguments, dt);
              }
            })), a.push(new Je.Action({
              actionId: "Chart.Legend.ToggleIndicatorValuesVisibility",
              checkable: !0,
              checked: r.showStudyValues.value(),
              label: yt,
              statName: "Show Indicator Values",
              onExecute: function onExecute() {
                return it(e, r.showStudyValues, ut);
              }
            }))), void 0 !== u) {
              var _e57 = u.get(0);

              void 0 !== _e57 && _e57.length > 0 && (a.push.apply(a, _toConsumableArray(_e57)), a.push(new Je.Separator()));
            }

            return t.settings && (a[a.length - 1] instanceof Je.Separator || a.push(new Je.Separator()), a.push(new Je.Action({
              actionId: "Chart.Dialogs.ShowGeneralSettings.LegendTab",
              label: ft,
              icon: st,
              statName: "Settings...",
              onExecute: function onExecute() {
                return s(we.TabNames.legend);
              }
            }))), Qe.ContextMenuManager.showMenu(a, l, void 0, {
              menuName: "LegendPropertiesContextMenu"
            }, o);
          }(this._model, this._options.contextMenu, this._callbacks.showGeneralChartProperties, s, e, t);
        }
      }, {
        key: "onCollapseDataSources",
        value: function onCollapseDataSources() {
          var e = this._showLegendOriginalProperty();

          e.setValue(!e.value());
        }
      }, {
        key: "updateLayout",
        value: function updateLayout() {
          var _this$_dataSourceView, _this$_dataSourcesSta;

          var e = this._paneWidget.state().sourcesByGroup().legendViewSources().filter(function (e) {
            return null !== e.statusView() && e.isDisplayedInLegend();
          }),
              t = Array.from(this._statusProviders.keys()).filter(function (t) {
            return !e.includes(t);
          });

          var _iteratorNormalCompletion34 = true;
          var _didIteratorError34 = false;
          var _iteratorError34 = undefined;

          try {
            for (var _iterator34 = t[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
              var _e61 = _step34.value;

              var _t28 = this._statusProviders.get(_e61);

              _t28 && (_t28.destroy(), this._statusProviders["delete"](_e61));
            }
          } catch (err) {
            _didIteratorError34 = true;
            _iteratorError34 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
                _iterator34["return"]();
              }
            } finally {
              if (_didIteratorError34) {
                throw _iteratorError34;
              }
            }
          }

          if (0 === e.length) return;

          var s = this._model.mainSeries(),
              i = e.indexOf(s);

          i > -1 ? (e.splice(i, 1), yl || null !== this._mainSeriesViewModel || (this._mainSeriesViewModel = new Le(this._model, s, this._mainSeriesViewModelsOptions, this._callbacks, this._options.contextMenu), this._mainSeriesStatusWidget = new pl(this._statusSourceAdapter(s), this._model.model(), this._options.statusesWidgets), this._renderer.addMainDataSource(this._mainSeriesViewModel, this._mainSeriesStatusWidget)), this._addCustomWidgetForLayerBlock(0)) : null !== this._mainSeriesViewModel && (this._destroyMainDataSource(), this._destroyCustomWidgetFromLayerBlock(0));
          var l = [],
              a = [],
              n = this._dataSourceViewModels.length;
          if (0 === n) for (var _t26 = e.length - 1; _t26 >= 0; _t26--) {
            var _s21 = e[_t26];
            l.push(new Xe(this._model, _s21, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)), a.push(new _l(this._statusSourceAdapter(_s21), this._options.statusesWidgets));
          } else {
            var _t27 = 0;

            for (var _s22 = e.length - 1; _s22 >= 0; _s22--) {
              var _i23 = e[_s22];
              this._dataSourceViewModels[_t27] ? (this._dataSourceViewModels[_t27].updateSource(_i23), this._dataSourcesStatusesWidgets[_t27].updateSource(this._statusSourceAdapter(_i23))) : (l.push(new Xe(this._model, _i23, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)), a.push(new _l(this._statusSourceAdapter(_i23), this._options.statusesWidgets))), _t27++;
            }

            for (; this._dataSourceViewModels.length > _t27;) {
              (0, o.ensureDefined)(this._dataSourceViewModels.pop()).destroy();
            }

            for (; this._dataSourcesStatusesWidgets.length > _t27;) {
              (0, o.ensureDefined)(this._dataSourcesStatusesWidgets.pop()).destroy();
            }
          }
          0 !== l.length && (this._renderer.addDataSources(l, a), (_this$_dataSourceView = this._dataSourceViewModels).push.apply(_this$_dataSourceView, l), (_this$_dataSourcesSta = this._dataSourcesStatusesWidgets).push.apply(_this$_dataSourcesSta, a)), n !== this._dataSourceViewModels.length && this._updateCollapsedSourcesMode(), this._dataSourceViewModels.length > 0 ? this._addCustomWidgetForLayerBlock(1) : this._destroyCustomWidgetFromLayerBlock(1), this._recreateSubscriptions(), this._isPaneMain.setValue(this._getIsPaneMainValue()), this.update(), this._updateWidgetModeByWidth();
        }
      }, {
        key: "update",
        value: function update() {
          null !== this._mainSeriesViewModel && this._mainSeriesViewModel.update();
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = this._dataSourceViewModels[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var e = _step35.value;
              e.update();
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
                _iterator35["return"]();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }
        }
      }, {
        key: "updateThemedColors",
        value: function updateThemedColors(e) {
          null === e && (e = (0, bl.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(e || "");
        }
      }, {
        key: "firstTitle",
        value: function firstTitle() {
          return this._renderer.firstTitle();
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._renderer.getElement();
        }
      }, {
        key: "addMargin",
        value: function addMargin(e) {
          if (this._margin === e) return;
          this._margin = e;
          this._renderer.getElement().style.maxWidth = 0 === this._margin ? "" : "calc(100% - ".concat(this._margin + fl, "px)"), this._updateWidgetModeBySize();
        }
      }, {
        key: "updateWidgetModeBySize",
        value: function updateWidgetModeBySize(e) {
          this._size = e, this._updateWidgetModeBySize();
        }
      }, {
        key: "_statusSourceAdapter",
        value: function _statusSourceAdapter(e) {
          var t = this._statusProviders.get(e);

          return void 0 === t && (t = e !== this._model.mainSeries() ? new gl(e, this._model.model()) : new vl(this._model.mainSeries(), this._model.model()), this._statusProviders.set(e, t)), t;
        }
      }, {
        key: "_updateWidgetModeBySize",
        value: function _updateWidgetModeBySize() {
          this._updateWidgetModeByWidth(), this._updateWidgetModeByHeight(), this._updateCustomWidgetModeBySize();
        }
      }, {
        key: "_updateWidgetModeByWidth",
        value: function _updateWidgetModeByWidth() {
          if (null === this._size) return;

          var e = this._availableWidth();

          this._renderer.updateMode(e), this._paneWidget.hasState() && this._paneWidget.state().containsMainSeries() && this._model.mainSeries().setTextSourceIsAlwaysTickerRestrictionEnabled(e <= 132);
        }
      }, {
        key: "_updateWidgetModeByHeight",
        value: function _updateWidgetModeByHeight() {
          null !== this._size && (this._availableHeight = .8 * this._size.height, this._updateCollapsedSourcesModeThrottle());
        }
      }, {
        key: "_updateCustomWidgetModeBySize",
        value: function _updateCustomWidgetModeBySize() {
          if (null === this._size) return;
          var e = (0, i.size)({
            width: this._availableWidth(),
            height: this._size.height
          });

          for (var _i24 = 0, _Array$from5 = Array.from(this._customLegendWidgetsMap.values()); _i24 < _Array$from5.length; _i24++) {
            var t = _Array$from5[_i24];

            for (var _i25 = 0, _Array$from6 = Array.from(t.values()); _i25 < _Array$from6.length; _i25++) {
              var _s23 = _Array$from6[_i25];
              var _iteratorNormalCompletion36 = true;
              var _didIteratorError36 = false;
              var _iteratorError36 = undefined;

              try {
                for (var _iterator36 = _s23[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                  var _t29 = _step36.value;

                  _t29.updateWidgetModeBySize(e);
                }
              } catch (err) {
                _didIteratorError36 = true;
                _iteratorError36 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
                    _iterator36["return"]();
                  }
                } finally {
                  if (_didIteratorError36) {
                    throw _iteratorError36;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "_destroyMainDataSource",
        value: function _destroyMainDataSource() {
          (0, o.ensureNotNull)(this._mainSeriesStatusWidget).destroy(), this._mainSeriesStatusWidget = null, (0, o.ensureNotNull)(this._mainSeriesViewModel).destroy(), this._mainSeriesViewModel = null;
        }
      }, {
        key: "_updateCollapsedSourcesMode",
        value: function _updateCollapsedSourcesMode() {
          var e = this._dataSourceViewModels.length,
              t = this._hideAllExceptFirstLine.value();

          if (this._availableHeight > 0 && e > 2) {
            var _s24 = Number(this._renderer.getMainSourceHeight()),
                _i26 = this._renderer.getDataSourceHeight(),
                _l12 = this._getCustomWidgetsHeight();

            if (null !== _i26) {
              var _o11 = Math.floor((this._availableHeight - _s24 - _l12) / _i26),
                  _a9 = Math.max(_o11, 2) - 1;

              if (e > _a9 + 1) {
                var _s25 = "";

                for (var _i27 = 0; _i27 < e; _i27++) {
                  var _e62 = _i27 < _a9;

                  this._dataSourceViewModels[_i27].setGlobalVisibility(_e62 && (!t || 0 === _i27)), _e62 || (_s25 += "".concat(0 === _s25.length ? "" : ", ").concat(this._dataSourceViewModels[_i27].getFullTitle()));
                }

                return this._collapsedDataSourcesTitle.setValue(_s25), void this._collapsedDataSourcesCount.setValue(e - _a9);
              }
            }
          }

          for (var _e63 = 0; _e63 < this._dataSourceViewModels.length; ++_e63) {
            this._dataSourceViewModels[_e63].setGlobalVisibility(!t || 0 === _e63);
          }

          this._collapsedDataSourcesCount.setValue(0), this._collapsedDataSourcesTitle.setValue("");
        }
      }, {
        key: "_getCustomWidgetsHeight",
        value: function _getCustomWidgetsHeight() {
          var e = 0;

          for (var _i28 = 0, _Array$from7 = Array.from(this._customLegendWidgetsMap.values()); _i28 < _Array$from7.length; _i28++) {
            var t = _Array$from7[_i28];

            for (var _i29 = 0, _Array$from8 = Array.from(t.values()); _i29 < _Array$from8.length; _i29++) {
              var _s26 = _Array$from8[_i29];
              var _iteratorNormalCompletion37 = true;
              var _didIteratorError37 = false;
              var _iteratorError37 = undefined;

              try {
                for (var _iterator37 = _s26[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                  var _t30 = _step37.value;
                  e += _t30.height().value();
                }
              } catch (err) {
                _didIteratorError37 = true;
                _iteratorError37 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion37 && _iterator37["return"] != null) {
                    _iterator37["return"]();
                  }
                } finally {
                  if (_didIteratorError37) {
                    throw _iteratorError37;
                  }
                }
              }
            }
          }

          return e;
        }
      }, {
        key: "_getCustomTextColorValue",
        value: function _getCustomTextColorValue() {
          var e = this._model.model().properties().childs().scalesProperties.childs().textColor.value();

          return (0, bl.isStdThemedDefaultValue)("chartProperties.scalesProperties.textColor", e, (0, bl.getCurrentTheme)().name) ? null : e;
        }
      }, {
        key: "_clearSubscriptions",
        value: function _clearSubscriptions() {
          null !== this._mainSeriesRowHidden && (this._mainSeriesRowHidden.destroy(), this._mainSeriesRowHidden = null);
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = this._dataSourceRowsHidden[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var e = _step38.value;
              e.destroy();
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38["return"] != null) {
                _iterator38["return"]();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }

          this._dataSourceRowsHidden = [];
          var _iteratorNormalCompletion39 = true;
          var _didIteratorError39 = false;
          var _iteratorError39 = undefined;

          try {
            for (var _iterator39 = this._customWidgetsVisibilities[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
              var _e64 = _step39.value;

              _e64.destroy();
            }
          } catch (err) {
            _didIteratorError39 = true;
            _iteratorError39 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion39 && _iterator39["return"] != null) {
                _iterator39["return"]();
              }
            } finally {
              if (_didIteratorError39) {
                throw _iteratorError39;
              }
            }
          }

          this._customWidgetsVisibilities = [];
          var _iteratorNormalCompletion40 = true;
          var _didIteratorError40 = false;
          var _iteratorError40 = undefined;

          try {
            for (var _iterator40 = this._customWidgetsHeights[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
              var _e65 = _step40.value;

              _e65.destroy();
            }
          } catch (err) {
            _didIteratorError40 = true;
            _iteratorError40 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion40 && _iterator40["return"] != null) {
                _iterator40["return"]();
              }
            } finally {
              if (_didIteratorError40) {
                throw _iteratorError40;
              }
            }
          }

          this._customWidgetsHeights = [];
        }
      }, {
        key: "_recreateSubscriptions",
        value: function _recreateSubscriptions() {
          this._clearSubscriptions(), null !== this._mainSeriesViewModel && (this._mainSeriesRowHidden = this._mainSeriesViewModel.isRowHidden().spawn(), this._mainSeriesRowHidden.subscribe(this._updateLegendVisibilities.bind(this)));
          var _iteratorNormalCompletion41 = true;
          var _didIteratorError41 = false;
          var _iteratorError41 = undefined;

          try {
            for (var _iterator41 = this._dataSourceViewModels[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
              var e = _step41.value;
              var t = e.isRowHidden().spawn();
              this._dataSourceRowsHidden.push(t), t.subscribe(this._updateVisibleDataSourceCount.bind(this)), t.subscribe(this._updateLegendVisibilities.bind(this));
            }
          } catch (err) {
            _didIteratorError41 = true;
            _iteratorError41 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion41 && _iterator41["return"] != null) {
                _iterator41["return"]();
              }
            } finally {
              if (_didIteratorError41) {
                throw _iteratorError41;
              }
            }
          }

          for (var _i30 = 0, _Array$from9 = Array.from(this._customLegendWidgetsMap.values()); _i30 < _Array$from9.length; _i30++) {
            var _e66 = _Array$from9[_i30];

            for (var _i31 = 0, _Array$from10 = Array.from(_e66.values()); _i31 < _Array$from10.length; _i31++) {
              var _t31 = _Array$from10[_i31];
              var _iteratorNormalCompletion42 = true;
              var _didIteratorError42 = false;
              var _iteratorError42 = undefined;

              try {
                for (var _iterator42 = _t31[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                  var _e67 = _step42.value;

                  var _t32 = _e67.visibility().spawn();

                  this._customWidgetsVisibilities.push(_t32), _t32.subscribe(this._updateLegendVisibilities.bind(this));

                  var _s27 = _e67.height().spawn();

                  this._customWidgetsHeights.push(_s27), _s27.subscribe(this._updateCollapsedSourcesMode.bind(this));
                }
              } catch (err) {
                _didIteratorError42 = true;
                _iteratorError42 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion42 && _iterator42["return"] != null) {
                    _iterator42["return"]();
                  }
                } finally {
                  if (_didIteratorError42) {
                    throw _iteratorError42;
                  }
                }
              }
            }
          }

          this._updateVisibleDataSourceCount(), this._updateLegendVisibilities();
        }
      }, {
        key: "_updateLegendVisibilities",
        value: function _updateLegendVisibilities() {
          if (this._hideWholeLegend.value()) return void this._allLegendHidden.setValue(!0);

          var e = this._dataSourceRowsHidden.every(function (e) {
            return e.value();
          }),
              t = this._hideNotMainSources.value() || e;

          this._studiesLegendHidden.setValue(t);

          var s = null === this._mainSeriesRowHidden || this._mainSeriesRowHidden.value(),
              i = this._customWidgetsVisibilities.some(function (e) {
            return e.value();
          });

          this._allLegendHidden.setValue(e && s && !i);
        }
      }, {
        key: "_updateVisibleDataSourceCount",
        value: function _updateVisibleDataSourceCount() {
          var e = this._dataSourceRowsHidden.filter(function (e) {
            return !e.value();
          }).length;

          this._visibleDataSourceCount.setValue(e);
        }
      }, {
        key: "_setLegendVisibilityToggled",
        value: function _setLegendVisibilityToggled() {
          0;
        }
      }, {
        key: "_getIsPaneMainValue",
        value: function _getIsPaneMainValue() {
          return this._paneWidget.containsMainSeries();
        }
      }, {
        key: "_showLegendCalculatedProperty",
        value: function _showLegendCalculatedProperty() {
          return this._model.model().showLegend();
        }
      }, {
        key: "_showLegendOriginalProperty",
        value: function _showLegendOriginalProperty() {
          return this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showLegend;
        }
      }, {
        key: "_addCustomWidgetForLayerBlock",
        value: function _addCustomWidgetForLayerBlock(e) {
          var t = this._customLegendWidgetsFactoriesMap.get(e);

          if (void 0 === t) return;
          var s = this._customLegendWidgetsMap.get(e) || new Map();
          var i = !1;

          for (var _i32 = 0, _Array$from11 = Array.from(t.keys()); _i32 < _Array$from11.length; _i32++) {
            var _l13 = _Array$from11[_i32];

            var _o12 = s.get(_l13) || [],
                _a10 = t.get(_l13) || [];

            for (var _t33 = _o12.length; _t33 < _a10.length; _t33++) {
              var _s28 = _a10[_t33](this._model.model(), this._backgroundThemeName);

              0 === e && 0 === _l13 && _s28.setGlobalVisibility((0, le.combine)(function (e, t) {
                return !e && !t;
              }, this._hideNotMainSources.weakReference(), this._hideAllExceptFirstLine.weakReference()).ownership()), _o12.push(_s28), this._renderer.addCustomWidget(_s28, {
                block: e,
                position: _l13
              }), i = !0;
            }

            i && s.set(_l13, _o12);
          }

          i && this._customLegendWidgetsMap.set(e, s);
        }
      }, {
        key: "_destroyCustomWidgetFromLayerBlock",
        value: function _destroyCustomWidgetFromLayerBlock(e) {
          var t = this._customLegendWidgetsMap.get(e);

          if (void 0 !== t) {
            for (var _i33 = 0, _Array$from12 = Array.from(t.values()); _i33 < _Array$from12.length; _i33++) {
              var _e68 = _Array$from12[_i33];
              var _iteratorNormalCompletion43 = true;
              var _didIteratorError43 = false;
              var _iteratorError43 = undefined;

              try {
                for (var _iterator43 = _e68[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
                  var _t34 = _step43.value;

                  _t34.destroy();
                }
              } catch (err) {
                _didIteratorError43 = true;
                _iteratorError43 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion43 && _iterator43["return"] != null) {
                    _iterator43["return"]();
                  }
                } finally {
                  if (_didIteratorError43) {
                    throw _iteratorError43;
                  }
                }
              }
            }

            t.clear(), this._customLegendWidgetsMap["delete"](e);
          }
        }
      }, {
        key: "_availableWidth",
        value: function _availableWidth() {
          return null === this._size ? 0 : this._size.width - this._margin - fl;
        }
      }]);

      return Ml;
    }();
  },
  69289: function _(e, t, s) {
    "use strict";

    s.r(t), s.d(t, {
      PaneControlsWidget: function PaneControlsWidget() {
        return X;
      }
    });

    var i = s(32563),
        l = s(51768),
        o = s(44352),
        a = s(68335),
        n = s(3228),
        r = s(28853),
        d = s(50151),
        u = s(24377),
        h = s(65616),
        c = s(34926),
        _ = s(94815),
        p = s(7488);

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t, s) {
        _classCallCheck(this, m);

        this._parentEl = document.createElement("div"), this._listActionsWrapperEl = null, this._listActionsElements = {}, this._actionsSpawns = {}, this._onMouseEnterLeaveEventHandler = null, this._mouseOverWidget = !1, this._width = null, this._wrapEl = e, this._onMouseEnterLeaveEventHandler = this._onMouseEnterLeaveEvent.bind(this), this._wrapEl.addEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.addEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._actions = t, this._globalVisibility = s.globalVisibility.spawn(), this._globalVisibility.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._visibilityType = s.visibilityType.spawn(), this._visibilityType.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._doNotSwitchToContextMenuMode = s.doNotSwitchToContextMenuMode, this._forceContextMenuMode = s.forceContextMenuMode.spawn(), this._forceContextMenuMode.subscribe(this._updateWidgetMode.bind(this)), this._themedColor = s.themedColor.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this));

        for (var _i34 = 0, _Object$entries = Object.entries(this._actions); _i34 < _Object$entries.length; _i34++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i34], 2),
              _e69 = _Object$entries$_i[0],
              _t35 = _Object$entries$_i[1];

          var _s29 = _e69;
          this._actionsSpawns[_s29] = {
            visible: _t35.visible.spawn(),
            title: void 0 === _t35.title ? null : _t35.title.spawn()
          }, this._actionsSpawns[_s29].visible.subscribe(this._updateActionVisibilities.bind(this, _s29));
          var _i35 = this._actionsSpawns[_s29].title;
          null !== _i35 && _i35.subscribe(this._updateActionTitle.bind(this, _s29));
        }

        this._render(), this._updatePaneControlsWidgetVisibility(), this._updateThemedColor(this._themedColor.value()), this._parentEl.classList.toggle(_.touchMode, h.trackingModeIsAvailable), this._parentEl.addEventListener("contextmenu", function (e) {
          return e.preventDefault();
        });
      }

      _createClass(m, [{
        key: "destroy",
        value: function destroy() {
          this._visibilityType.destroy(), this._forceContextMenuMode.destroy(), this._themedColor.destroy();

          for (var _i36 = 0, _Object$keys3 = Object.keys(this._actionsSpawns); _i36 < _Object$keys3.length; _i36++) {
            var _e70 = _Object$keys3[_i36];
            var _t36 = _e70;

            this._actionsSpawns[_t36].visible.destroy();

            var _s30 = this._actionsSpawns[_t36].title;
            null !== _s30 && _s30.destroy();
          }

          null !== this._onMouseEnterLeaveEventHandler && (this._wrapEl.removeEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.removeEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._onMouseEnterLeaveEventHandler = null), this._parentEl.innerHTML = "", delete this._parentEl;
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._parentEl;
        }
      }, {
        key: "bottomWithMargin",
        value: function bottomWithMargin() {
          var e = this._parentEl.classList.contains(_.touchMode) ? Number(_.css_value_pane_controls_button_touch_size) : Number(_.css_value_pane_controls_button_size);
          return 2 * Number(_.css_value_pane_controls_margin_top) + e;
        }
      }, {
        key: "updateWidgetModeByWidth",
        value: function updateWidgetModeByWidth(e) {
          this._width = e, this._updateWidgetMode();
        }
      }, {
        key: "_updateWidgetMode",
        value: function _updateWidgetMode() {
          if (null === this._width) return;
          var e = !this._doNotSwitchToContextMenuMode.value() && this._width < 356,
              t = !this._doNotSwitchToContextMenuMode.value() && (this._forceContextMenuMode.value() || this._width < 666.65),
              s = (0, d.ensureNotNull)(this._listActionsWrapperEl),
              i = (0, d.ensureNotNull)(this._listActionsElements.more);
          s.classList.toggle(p.blockHidden, e || t), i.classList.toggle(p.blockHidden, e || !t || !this._actions.more.visible.value());
        }
      }, {
        key: "_render",
        value: function _render() {
          this._renderActions(), this._parentEl.classList.add(_.paneControls), this._wrapEl.append(this._parentEl);
        }
      }, {
        key: "_renderActions",
        value: function _renderActions() {
          null === this._listActionsWrapperEl && (this._listActionsWrapperEl = document.createElement("div"), this._listActionsWrapperEl.classList.add(_.buttonsWrapper), this._parentEl.append(this._listActionsWrapperEl));
          var e = h.trackingModeIsAvailable ? "large" : "small";
          this._listActionsElements.up = (0, c.createActionElement)(this._actions.up, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.down = (0, c.createActionElement)(this._actions.down, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.collapse = (0, c.createActionElement)(this._actions.collapse, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.restore = (0, c.createActionElement)(this._actions.restore, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.close = (0, c.createActionElement)(this._actions.close, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.maximize = (0, c.createActionElement)(this._actions.maximize, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsElements.minimize = (0, c.createActionElement)(this._actions.minimize, _.button, _.buttonIcon, p.blockHidden, e), this._listActionsWrapperEl.append(this._listActionsElements.up, this._listActionsElements.down, this._listActionsElements.close, this._listActionsElements.collapse, this._listActionsElements.restore, this._listActionsElements.maximize, this._listActionsElements.minimize), this._listActionsElements.more = (0, c.createActionElement)(this._actions.more, _.button, _.buttonIcon, p.blockHidden, e);

          for (var _i37 = 0, _Object$keys4 = Object.keys(this._listActionsElements); _i37 < _Object$keys4.length; _i37++) {
            var _e71 = _Object$keys4[_i37];
            (0, d.ensureNotNull)(this._listActionsElements[_e71]).classList.add(_.newButton);
          }

          this._parentEl.append(this._listActionsElements.more);
        }
      }, {
        key: "_updateActionVisibilities",
        value: function _updateActionVisibilities(e, t) {
          (0, d.ensureNotNull)(this._listActionsElements[e]).classList.toggle(p.blockHidden, !t);
        }
      }, {
        key: "_updateActionTitle",
        value: function _updateActionTitle(e, t) {
          (0, d.ensureNotNull)(this._listActionsElements[e]).setAttribute("title", t);
        }
      }, {
        key: "_onMouseEnterLeaveEvent",
        value: function _onMouseEnterLeaveEvent(e) {
          this._mouseOverWidget = "mouseenter" === e.type, "visibleOnMouseOver" === this._visibilityType.value() && this._updatePaneControlsWidgetVisibility();
        }
      }, {
        key: "_updatePaneControlsWidgetVisibility",
        value: function _updatePaneControlsWidgetVisibility() {
          var e,
              t = !1;

          switch (this._visibilityType.value()) {
            case "alwaysOff":
              e = !1, t = !0;
              break;

            case "alwaysOn":
              e = this._globalVisibility.value();
              break;

            case "visibleOnMouseOver":
              e = this._globalVisibility.value() && this._mouseOverWidget;
          }

          this._parentEl.classList.toggle(_.hidden, !e), this._parentEl.classList.toggle(_.forceHidden, !this._globalVisibility.value() || t);
        }
      }, {
        key: "_updateThemedColor",
        value: function _updateThemedColor(e) {
          if (e.length > 0) {
            var _ref11 = (0, u.parseRgb)(e),
                _ref12 = _slicedToArray(_ref11, 3),
                _t37 = _ref12[0],
                _s31 = _ref12[1],
                _i38 = _ref12[2];

            this._parentEl.style.color = (0, u.rgbaToString)([_t37, _s31, _i38, (0, u.normalizeAlphaComponent)(.8)]);
          } else this._parentEl.style.removeProperty("color");
        }
      }]);

      return m;
    }();

    var g = s(39347),
        v = s(10643),
        b = s(36016),
        w = s(72899),
        y = s(48344),
        S = s(99539),
        f = s(20465),
        M = s(34763);
    var C = o.t(null, void 0, s(68854)),
        E = C,
        V = (0, a.humanReadableModifiers)(a.Modifiers.Mod) + C;
    var k = s(97145),
        A = s(5286),
        L = s(61814),
        W = s(72237),
        T = s(81020),
        x = s(3515),
        H = s(79526),
        D = s(82847),
        P = s(7859),
        B = s(70471),
        I = s(71402),
        z = s(42930);
    var N = i.mobiletouch,
        O = o.t(null, void 0, s(83498)),
        F = o.t(null, void 0, s(70343)),
        R = o.t(null, void 0, s(39899)),
        U = o.t(null, void 0, s(19603)),
        G = o.t(null, void 0, s(91029)),
        $ = o.t(null, void 0, s(39589)),
        j = o.t(null, void 0, s(35732)),
        Y = o.t(null, void 0, s(68854)),
        q = (0, L.hotKeySerialize)({
      keys: [""],
      text: Y
    }),
        Z = (0, L.hotKeySerialize)({
      keys: [(0, a.humanReadableModifiers)(a.Modifiers.Mod, !1)],
      text: "{0} + ".concat(Y)
    });

    var X =
    /*#__PURE__*/
    function () {
      function X(e, t, s, i, l) {
        var _this34 = this;

        _classCallCheck(this, X);

        this._actions = {}, this._moreCMShown = !1, this._themedColor = new k.WatchedValue(""), this._connectedToBroker = new k.WatchedValue(!1), this._isDestroyed = !1, this._model = e, this._paneWidget = t, this._callbacks = i, this._closeButtonVisibility = new k.WatchedValue(this._getCloseButtonVisibility()), this._upButtonVisibility = new k.WatchedValue(this._getUpButtonVisibility()), this._downButtonVisibility = new k.WatchedValue(this._getDownButtonVisibility()), this._maximizeButtonVisibility = new k.WatchedValue(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility = new k.WatchedValue(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility = new k.WatchedValue(this._getCollapseButtonVisibility()), this._restoreButtonVisibility = new k.WatchedValue(this._getRestoreButtonVisibility()), this._createActions(), this._visibilityTypeProperty = (0, n.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, function (e) {
          _this34._visibilityType.setValue(e.value());
        }), this._visibilityType = new k.WatchedValue(this._visibilityTypeProperty.value()), this._isPaneMaximize = new k.WatchedValue(this._getIsPaneMaximizeValue()), this._isWidgetShow = new k.WatchedValue(this._getIsWidgetShow()), this._backgroundThemeName = s.backgroundThemeName, this._renderer = new m(l, this._actions, {
          visibilityType: this._visibilityType.readonly(),
          globalVisibility: this._isWidgetShow.readonly(),
          doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
          forceContextMenuMode: this._connectedToBroker.readonly(),
          themedColor: this._themedColor.readonly()
        });
      }

      _createClass(X, [{
        key: "destroy",
        value: function destroy() {
          this._visibilityTypeProperty.unsubscribeAll(this), this._renderer.destroy(), this._isDestroyed = !0;
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._renderer.getElement();
        }
      }, {
        key: "bottomWithMargin",
        value: function bottomWithMargin() {
          return this._renderer.bottomWithMargin();
        }
      }, {
        key: "action",
        value: function action() {
          return this._actions;
        }
      }, {
        key: "update",
        value: function update() {
          this._updateButtonsVisibility(), this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()), this._isWidgetShow.setValue(this._getIsWidgetShow());
        }
      }, {
        key: "updateWidgetModeByWidth",
        value: function updateWidgetModeByWidth(e) {
          this._renderer.updateWidgetModeByWidth(e);
        }
      }, {
        key: "updateThemedColors",
        value: function updateThemedColors(e) {
          null === e && (e = (0, A.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(e || "");
        }
      }, {
        key: "_subscribeOnConnectedToBroker",
        value: function _subscribeOnConnectedToBroker() {
          var e;
          return regeneratorRuntime.async(function _subscribeOnConnectedToBroker$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return regeneratorRuntime.awrap(waitTradingService());

                case 2:
                  e = _context9.sent;
                  this._isDestroyed || (e.onConnectionStatusChange.subscribe(this, this._updateConnectedToBroker.bind(this)), this._updateConnectedToBroker(e.connectStatus()));

                case 4:
                case "end":
                  return _context9.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_updateConnectedToBroker",
        value: function _updateConnectedToBroker(e) {
          this._connectedToBroker.setValue(1 === e);
        }
      }, {
        key: "_updateButtonsVisibility",
        value: function _updateButtonsVisibility() {
          this._closeButtonVisibility.setValue(this._getCloseButtonVisibility()), this._upButtonVisibility.setValue(this._getUpButtonVisibility()), this._downButtonVisibility.setValue(this._getDownButtonVisibility()), this._maximizeButtonVisibility.setValue(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility.setValue(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility.setValue(this._getCollapseButtonVisibility()), this._restoreButtonVisibility.setValue(this._getRestoreButtonVisibility());
        }
      }, {
        key: "_createActions",
        value: function _createActions() {
          this._actions.up = {
            iconMap: new Map([["large", T], ["small", T]]),
            action: this._onUpDownButton.bind(this, "up"),
            visible: this._upButtonVisibility,
            title: new k.WatchedValue(F),
            className: _.up,
            dataset: {
              name: "pane-button-up"
            }
          }, this._actions.down = {
            iconMap: new Map([["large", x], ["small", x]]),
            action: this._onUpDownButton.bind(this, "down"),
            visible: this._downButtonVisibility,
            title: new k.WatchedValue(R),
            className: _.down,
            dataset: {
              name: "pane-button-down"
            }
          }, this._actions.close = {
            iconMap: new Map([["large", W], ["small", W]]),
            action: this._onCloseButton.bind(this),
            visible: this._closeButtonVisibility,
            title: new k.WatchedValue(O),
            dataset: {
              name: "pane-button-close"
            }
          }, this._actions.maximize = {
            iconMap: new Map([["large", P], ["small", H]]),
            action: this._onToggleMaximizeButton.bind(this, "Maximize pane"),
            visible: this._maximizeButtonVisibility,
            title: new k.WatchedValue(U),
            hotKeyTitle: q,
            className: _.maximize,
            dataset: {
              name: "pane-button-maximize"
            }
          }, this._actions.minimize = {
            iconMap: new Map([["large", P], ["small", H]]),
            action: this._onToggleMaximizeButton.bind(this, "Minimize pane"),
            visible: this._minimizeButtonVisibility,
            title: new k.WatchedValue(G),
            hotKeyTitle: q,
            className: _.minimize,
            dataset: {
              name: "pane-button-minimize"
            }
          }, this._actions.collapse = {
            iconMap: new Map([["large", I], ["small", I]]),
            action: this._onToggleCollapseButton.bind(this, "Collapse pane"),
            visible: this._collapseButtonVisibility,
            title: new k.WatchedValue($),
            hotKeyTitle: Z,
            className: _.collapse,
            dataset: {
              name: "pane-button-collapse"
            }
          }, this._actions.restore = {
            iconMap: new Map([["large", z], ["small", z]]),
            action: this._onToggleCollapseButton.bind(this, "Restore pane"),
            visible: this._restoreButtonVisibility,
            title: new k.WatchedValue(G),
            hotKeyTitle: Z,
            className: _.restore,
            dataset: {
              name: "pane-button-restore"
            }
          }, this._actions.more = {
            iconMap: new Map([["large", B], ["small", D]]),
            action: this._showButtonsInContextMenu.bind(this),
            visible: new k.WatchedValue(!N),
            title: new k.WatchedValue(j),
            dataset: {
              name: "pane-button-more"
            }
          };
        }
      }, {
        key: "_getCloseButtonVisibility",
        value: function _getCloseButtonVisibility() {
          var e = this._paneWidget.state();

          var t = !1;
          return e.containsMainSeries() || e.maximized().value() || N || (t = e.dataSources().some(function (e) {
            return (0, r.isStudy)(e);
          })), t;
        }
      }, {
        key: "_onCloseButton",
        value: function _onCloseButton() {
          this._trackEvent("Delete pane");

          var e = this._model.model().panes().indexOf(this._paneWidget.state());

          this._model.removePane(e);
        }
      }, {
        key: "_getUpButtonVisibility",
        value: function _getUpButtonVisibility() {
          var e = this._paneWidget.state();

          return this._model.model().panes().indexOf(e) > 0 && !e.maximized().value() && !N;
        }
      }, {
        key: "_getDownButtonVisibility",
        value: function _getDownButtonVisibility() {
          var e = this._paneWidget.state(),
              t = this._model.model().panes();

          return t.indexOf(e) < t.length - 1 && !e.maximized().value() && !N;
        }
      }, {
        key: "_onUpDownButton",
        value: function _onUpDownButton(e) {
          this._trackEvent("Move pane ".concat(e));

          var t = this._model.model().panes().indexOf(this._paneWidget.state());

          this._model.rearrangePanes(t, e);
        }
      }, {
        key: "_getMaximizeButtonVisibility",
        value: function _getMaximizeButtonVisibility() {
          var e = this._paneWidget.state();

          return this._model.model().panes().length > 1 && !e.maximized().value() && !N;
        }
      }, {
        key: "_getMinimizeButtonVisibility",
        value: function _getMinimizeButtonVisibility() {
          var e = this._paneWidget.state();

          return this._model.model().panes().length > 1 && e.maximized().value();
        }
      }, {
        key: "_getCollapseButtonVisibility",
        value: function _getCollapseButtonVisibility() {
          if (N) return !1;

          var e = this._paneWidget.state();

          return !e.maximized().value() && !e.collapsed().value() && this._model.model().paneCollapsingAvailable().value();
        }
      }, {
        key: "_getRestoreButtonVisibility",
        value: function _getRestoreButtonVisibility() {
          var e = this._paneWidget.state();

          return !e.maximized().value() && e.collapsed().value();
        }
      }, {
        key: "_onToggleMaximizeButton",
        value: function _onToggleMaximizeButton(e) {
          this._trackEvent(e), this._callbacks.toggleMaximizePane(this._paneWidget);
        }
      }, {
        key: "_onToggleCollapseButton",
        value: function _onToggleCollapseButton(e) {
          this._trackEvent(e), this._callbacks.toggleCollapsedPane(this._paneWidget);
        }
      }, {
        key: "_showButtonsInContextMenu",
        value: function _showButtonsInContextMenu(e) {
          var _this35 = this;

          e.preventDefault(), this._moreCMShown || function (e, t, s) {
            var i = [];

            if (e.maximize.visible.value()) {
              var _t38 = (0, d.ensure)(e.maximize.title),
                  _s32 = (0, d.ensureNotNull)(e.maximize.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.MaximizePane",
                icon: S,
                label: _t38.value(),
                statName: "Maximize Pane",
                shortcutHint: E,
                onExecute: function onExecute() {
                  return _s32();
                }
              }));
            } else if (e.minimize.visible.value()) {
              var _t39 = (0, d.ensure)(e.minimize.title),
                  _s33 = (0, d.ensureNotNull)(e.minimize.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.MinimizePane",
                icon: S,
                label: _t39.value(),
                statName: "Minimize Pane",
                shortcutHint: E,
                onExecute: function onExecute() {
                  return _s33();
                }
              }));
            }

            if (e.collapse.visible.value()) {
              var _t40 = (0, d.ensure)(e.collapse.title),
                  _s34 = (0, d.ensureNotNull)(e.collapse.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.CollapsePane",
                icon: f,
                label: _t40.value(),
                statName: "Collapse pane",
                shortcutHint: V,
                onExecute: function onExecute() {
                  return _s34();
                }
              }));
            }

            if (e.restore.visible.value()) {
              var _t41 = (0, d.ensure)(e.restore.title),
                  _s35 = (0, d.ensureNotNull)(e.restore.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.RestorePane",
                icon: M,
                label: _t41.value(),
                statName: "Restore pane",
                shortcutHint: V,
                onExecute: function onExecute() {
                  return _s35();
                }
              }));
            }

            if (e.up.visible.value()) {
              var _t42 = (0, d.ensure)(e.up.title),
                  _s36 = (0, d.ensureNotNull)(e.up.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.MovePaneUp",
                icon: w,
                label: _t42.value(),
                statName: "Move pane up",
                onExecute: function onExecute() {
                  return _s36();
                }
              }));
            }

            if (e.down.visible.value()) {
              var _t43 = (0, d.ensure)(e.down.title),
                  _s37 = (0, d.ensureNotNull)(e.down.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.MovePaneDown",
                icon: y,
                label: _t43.value(),
                statName: "Move pane down",
                onExecute: function onExecute() {
                  return _s37();
                }
              }));
            }

            if (e.close.visible.value()) {
              var _t44 = (0, d.ensure)(e.close.title),
                  _s38 = (0, d.ensureNotNull)(e.close.action);

              i.push(new g.Action({
                actionId: "Chart.PaneControls.DeletePane",
                icon: b,
                label: _t44.value(),
                statName: "Delete pane",
                onExecute: function onExecute() {
                  return _s38();
                }
              }));
            }

            var l = (0, d.ensureNotNull)(t.target).getBoundingClientRect();
            return v.ContextMenuManager.showMenu(i, {
              clientX: l.right,
              clientY: l.top + l.height + 3,
              attachToXBy: "right"
            }, void 0, void 0, s);
          }(this._actions, e, function () {
            _this35._moreCMShown = !1;
          }).then(function () {
            _this35._moreCMShown = !0;
          });
        }
      }, {
        key: "_getIsPaneMaximizeValue",
        value: function _getIsPaneMaximizeValue() {
          return this._paneWidget.state().maximized().value();
        }
      }, {
        key: "_getIsWidgetShow",
        value: function _getIsWidgetShow() {
          return this._model.model().panes().length > 1;
        }
      }, {
        key: "_trackEvent",
        value: function _trackEvent(e) {
          (0, l.trackEvent)("GUI", "Pane action", e);
        }
      }]);

      return X;
    }();
  },
  34926: function _(e, t, s) {
    "use strict";

    s.d(t, {
      createActionElement: function createActionElement() {
        return l;
      }
    });
    var i = s(1722);

    function l(e, t, s, l, o) {
      var a = document.createElement("div");
      a.className = t, a.classList.toggle(l, !e.visible.value()), Object.assign(a.dataset, e.dataset), void 0 !== e.className && a.classList.add(e.className), void 0 !== e.title && (a.classList.add("apply-common-tooltip"), a.setAttribute("title", e.title.value()), void 0 !== e.hotKeyTitle && (a.dataset.tooltipHotkey = e.hotKeyTitle)), a.addEventListener("touchend", e.action), a.addEventListener("mousedown", function (t) {
        0 === t.button && e.action(t);
      });
      var n = document.createElement("div");
      n.classList.add(s);
      var r = e.iconMap.get(o) || "";
      return (0, i.isString)(r) ? n.innerHTML = r : n.appendChild(r), a.appendChild(n), a;
    }
  },
  65616: function _(e, t, s) {
    "use strict";

    s.d(t, {
      trackingModeIsAvailable: function trackingModeIsAvailable() {
        return i;
      }
    });
    var i = s(49483).CheckMobile.any();
  },
  89612: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.26 4.44a.75.75 0 0 1 1.05.07l3.5 4c.25.28.25.7 0 .98l-3.5 4a.75.75 0 0 1-1.12-.98L10.25 9 7.2 5.5a.75.75 0 0 1 .07-1.06Z"/></svg>';
  },
  23317: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14 10H4V8.5h10V10Z"/></svg>';
  },
  77576: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.25 13.75v-9.5h1.5v9.5h-1.5Z"/><path fill="currentColor" d="M13.75 9.75h-9.5v-1.5h9.5v1.5Z"/></svg>';
  },
  91986: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.5 8V3.5H10V2h6v6h-1.5Zm-11 2v4.5H8V16H2v-6h1.5Z"/></svg>';
  },
  76996: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11.5 2v4.5H16V8h-6V2h1.5Zm-5 14v-4.5H2V10h6v6H6.5Z"/></svg>';
  },
  78529: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.45 3.5 12.48 9l-5.03 5.49 1.1 1.01L14.52 9 8.55 2.49 7.45 3.5Z"/><path fill="currentColor" d="m3.93 5.99 2.58 3-2.58 3.02 1.14.98 3.42-4-3.42-3.98L3.93 6Z"/></svg>';
  },
  93724: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z"/></svg>';
  },
  79304: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';
  },
  38373: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
  },
  45503: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>';
  },
  73710: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>';
  },
  31233: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>';
  },
  12646: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>';
  },
  69410: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>';
  },
  55593: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>';
  },
  23683: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.2 7.34c0-1.4.73-2.64 1.82-3.34A5.03 5.03 0 0 0 4 9c0 2.76 2.26 5 5.05 5A5.04 5.04 0 0 0 14 10c-.71.8-1.74 1.29-2.89 1.29A3.93 3.93 0 0 1 7.2 7.34Z"/><path fill="currentColor" d="M11.67 6.33 11 5l-.67 1.33-1.33.2.98 1.03L9.76 9 11 8.34l1.24.66-.22-1.44.98-1.03-1.33-.2Z"/></svg>';
  },
  72844: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 11.39c0-2.27 1.19-4.25 3-5.39-4.43.07-8 3.63-8 8 0 4.42 3.64 8 8.13 8A8.1 8.1 0 0 0 22 16a6.55 6.55 0 0 1-11-4.61Z"/><path fill="currentColor" d="m18 10-1-2-1 2-2 .3 1.47 1.54-.32 2.16L17 13l1.85 1-.32-2.16L20 10.29 18 10Z"/></svg>';
  },
  53218: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>';
  },
  62998: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>';
  },
  32140: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>';
  },
  25230: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>';
  },
  43401: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>';
  },
  15507: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>';
  },
  12462: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>';
  },
  85290: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>';
  },
  91665: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>';
  },
  52828: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>';
  },
  39379: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M4 6.5 6 8l3-3 3 3 2-1.5V10H4V6.5ZM14 13v-2H4v2h10Z"/></svg>';
  },
  52506: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>';
  },
  88658: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>';
  },
  41674: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>';
  },
  3792: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>';
  },
  45534: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>';
  },
  87258: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>';
  },
  36885: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>';
  },
  65300: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>';
  },
  34882: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>';
  },
  83637: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>';
  },
  72237: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>';
  },
  71402: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="M11 2 7.5 5 4 2" class="bracket-up"/><path stroke="currentColor" d="M4 13l3.5-3 3.5 3" class="bracket-down"/></svg>';
  },
  36016: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>';
  },
  20465: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.53 3.73 14 9.33 7.47 3.73M7.47 24.27l6.53 -5.60 6.53 5.60"/></svg>';
  },
  48344: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>';
  },
  99539: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>';
  },
  34763: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="m7.47 9.33 6.53 -5.60L20.53 9.33M20.53 18.67l-6.53 5.60L7.47 18.67"/></svg>';
  },
  72899: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>';
  },
  70471: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>';
  },
  82847: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>';
  },
  3515: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>';
  },
  7859: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>';
  },
  79526: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>';
  },
  42930: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="m4 5 3.5-3L11 5" class="bracket-up"/><path stroke="currentColor" d="M11 10l-3.5 3L4 10" class="bracket-down"/></svg>';
  },
  81020: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>';
  },
  62920: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>';
  },
  47036: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>';
  },
  42205: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 7L7 4H4V0H3V4H0L3.5 7Z"/></svg>';
  },
  50119: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
  },
  62884: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
  },
  50662: function _(e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 0L0 3h3v4h1V3h3L3.5 0z"/></svg>';
  }
}]);