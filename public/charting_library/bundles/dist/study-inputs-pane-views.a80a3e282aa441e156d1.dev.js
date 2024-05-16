"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[2183], {
  79059: function _(t, e, i) {
    i.d(e, {
      LineAnchorRenderer: function LineAnchorRenderer() {
        return y;
      }
    });
    var n = i(86441),
        r = i(34026),
        s = i(50151),
        o = i(68441),
        a = i(1722),
        l = i(18807),
        u = i(66103),
        d = i(45197),
        c = i(59590);

    var h =
    /*#__PURE__*/
    function (_n$Point) {
      _inherits(h, _n$Point);

      function h(t, e, i, n) {
        var _this;

        _classCallCheck(this, h);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, t, e)), _this.data = i, _this.square = n;
        return _this;
      }

      return h;
    }(n.Point);

    function p(t, e, i, n) {
      var r = i + n / 2;
      (0, o.drawRoundRect)(t, e.x - r, e.y - r, 2 * r, 2 * r, (i + n) / 2), t.closePath(), t.lineWidth = n;
    }

    function _(t, e, i, n) {
      t.globalAlpha = .2, p(t, e, i, n), t.stroke(), t.globalAlpha = 1;
    }

    function P(t, e, i, n) {
      p(t, e, i - n, n), t.fill(), t.stroke();
    }

    function g(t, e, i, n) {
      t.globalAlpha = .2, t.beginPath(), t.arc(e.x, e.y, i + n / 2, 0, 2 * Math.PI, !0), t.closePath(), t.lineWidth = n, t.stroke(), t.globalAlpha = 1;
    }

    function f(t, e, i, n) {
      t.beginPath(), t.arc(e.x, e.y, i - n / 2, 0, 2 * Math.PI, !0), t.closePath(), t.lineWidth = n, t.fill(), t.stroke();
    }

    var y =
    /*#__PURE__*/
    function (_c$BitmapCoordinatesP) {
      _inherits(y, _c$BitmapCoordinatesP);

      function y(t) {
        var _this2;

        _classCallCheck(this, y);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this)), _this2._data = null != t ? t : null;
        return _this2;
      }

      _createClass(y, [{
        key: "setData",
        value: function setData(t) {
          this._data = t;
        }
      }, {
        key: "hitTest",
        value: function hitTest(t) {
          var e;
          if (null === this._data || this._data.disableInteractions) return null;
          var _this$_data = this._data,
              i = _this$_data.radius,
              n = _this$_data.points,
              r = _this$_data.pointsCursorType,
              s = _this$_data.hittestResult,
              o = (0, d.interactionTolerance)().anchor;

          for (var _a = 0; _a < n.length; ++_a) {
            var _d = n[_a];
            if (_d.subtract(t).length() <= i + o) return new l.HitTestResult(Array.isArray(s) ? s[_a] : s, {
              pointIndex: _d.data,
              cursorType: null !== (e = null == r ? void 0 : r[_a]) && void 0 !== e ? e : u.PaneCursorType.Default,
              activeItem: _d.activeItem,
              snappingPrice: _d.snappingPrice,
              snappingIndex: _d.snappingIndex,
              nonDiscreteIndex: _d.nonDiscreteIndex
            });
          }

          return null;
        }
      }, {
        key: "doesIntersectWithBox",
        value: function doesIntersectWithBox(t) {
          return null !== this._data && this._data.points.some(function (e) {
            return (0, r.pointInBox)(e, t);
          });
        }
      }, {
        key: "_drawImpl",
        value: function _drawImpl(t) {
          if (null === this._data || !this._data.visible) return;
          var e = [],
              i = [],
              n = [],
              r = [];

          for (var _t = 0; _t < this._data.points.length; ++_t) {
            var _s = this._data.points[_t],
                _o = this._data.backgroundColors[_t];
            _s.square ? (e.push(_s), i.push(_o)) : (n.push(_s), r.push(_o));
          }

          e.length && this._drawPoints(t, e, i, P, _), n.length && this._drawPoints(t, n, r, f, g);
        }
      }, {
        key: "_drawPoints",
        value: function _drawPoints(t, e, i, n, r) {
          var o = t.context,
              l = t.horizontalPixelRatio,
              u = t.verticalPixelRatio,
              c = (0, s.ensureNotNull)(this._data),
              p = c.currentPoint,
              _ = c.radius;
          var P = Math.max(1, Math.floor((c.strokeWidth || 2) * l));
          c.selected && (P += Math.max(1, Math.floor(l / 2)));
          var g = Math.max(1, Math.floor(l));
          var f = Math.round(_ * l * 2);
          f % 2 != g % 2 && (f += 1);
          var y = g % 2 / 2,
              m = (0, d.interactionTolerance)().anchor;
          o.strokeStyle = c.color;

          for (var _t2 = 0; _t2 < e.length; ++_t2) {
            var _s2 = e[_t2];
            o.fillStyle = i[_t2];

            if (!((0, a.isInteger)(_s2.data) && c.linePointBeingEdited === _s2.data)) {
              if (n(o, new h(Math.round(_s2.x * l) + y, Math.round(_s2.y * u) + y, _s2.data, _s2.square), f / 2, P), !c.disableInteractions) {
                if (_s2.subtract(p).length() <= _ + m) {
                  var _t3 = Math.max(1, Math.floor(c.selectedStrokeWidth * l));

                  var _e = Math.round(_ * l * 2);

                  _e % 2 != g % 2 && (_e += 1);
                  r(o, new h(Math.round(_s2.x * l) + y, Math.round(_s2.y * u) + y, _s2.data, _s2.square), _e / 2, _t3);
                }
              }
            }
          }
        }
      }]);

      return y;
    }(c.BitmapCoordinatesPaneRenderer);
  },
  32866: function _(t, e, i) {
    i.r(e), i.d(e, {
      StudyInputPriceAxisPaneView: function StudyInputPriceAxisPaneView() {
        return s;
      }
    });
    var n = i(81580),
        r = i(42275);

    var s =
    /*#__PURE__*/
    function (_r$PriceAxisView) {
      _inherits(s, _r$PriceAxisView);

      function s(t, e) {
        var _this3;

        _classCallCheck(this, s);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this3._input = t, _this3._getInputValue = e.getInputValue, _this3._convertPriceToCoordinate = e.convertPriceToCoordinate, _this3._formatPrice = e.formatPrice;
        return _this3;
      }

      _createClass(s, [{
        key: "_updateRendererData",
        value: function _updateRendererData(t, e, i) {
          t.visible = !1;

          var r = this._getInputValue(this._input.id);

          if (null === r) return;

          var s = this._convertPriceToCoordinate(r);

          if (null === s) return;
          var o = n.axisLabelBackgroundColor.common;
          i.background = o, i.textColor = this.generateTextColor(o), i.coordinate = s, t.text = this._formatPrice(r), t.visible = !0;
        }
      }]);

      return s;
    }(r.PriceAxisView);
  },
  22491: function _(t, e, i) {
    i.r(e), i.d(e, {
      StudyInputTimeAxisPaneView: function StudyInputTimeAxisPaneView() {
        return s;
      }
    });
    var n = i(81580),
        r = i(34951);

    var s =
    /*#__PURE__*/
    function (_r$TimeAxisView) {
      _inherits(s, _r$TimeAxisView);

      function s(t, e, i) {
        var _this4;

        _classCallCheck(this, s);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this4._input = t, _this4._getInputValue = i;
        return _this4;
      }

      _createClass(s, [{
        key: "_getBgColor",
        value: function _getBgColor() {
          return n.axisLabelBackgroundColor.common;
        }
      }, {
        key: "_getIndex",
        value: function _getIndex() {
          var t = this._getInputValue(this._input.id);

          return null === t ? null : this._model.timeScale().timePointToIndex(t / 1e3);
        }
      }, {
        key: "_isVisible",
        value: function _isVisible() {
          return !0;
        }
      }]);

      return s;
    }(r.TimeAxisView);
  },
  60305: function _(t, e, i) {
    i.r(e), i.d(e, {
      StudyInputsAnchorsPaneView: function StudyInputsAnchorsPaneView() {
        return h;
      }
    });
    var n = i(86441),
        r = i(48891),
        s = i(38325),
        o = i(18807),
        a = i(66103),
        l = i(79059),
        u = i(81824);
    var d = r.colorsPalette["color-cold-gray-500"],
        c = r.colorsPalette["color-tv-blue-600"];

    var h =
    /*#__PURE__*/
    function (_u$StudyInputsPaneVie) {
      _inherits(h, _u$StudyInputsPaneVie);

      function h(t, e, i) {
        var _this5;

        _classCallCheck(this, h);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, t, e, i)), _this5._editable = !0, _this5._points = [], _this5._cursors = [], _this5._studyAnchorRenderers = [], _this5._isSelected = i.isSelected ? i.isSelected : function () {
          return !0;
        }, _this5._isHovered = i.isHovered ? i.isHovered : function () {
          return !0;
        };
        return _this5;
      }

      _createClass(h, [{
        key: "setEditable",
        value: function setEditable(t) {
          this._editable = t;
        }
      }, {
        key: "getEditable",
        value: function getEditable() {
          return this._editable;
        }
      }, {
        key: "_fillCompositeRendrer",
        value: function _fillCompositeRendrer(t, e) {
          this._fillInformationAboutPointsAndCursors(t, e), this._renderer.append(this._createStudyAnchor({
            points: this._points,
            pointsCursorType: this._cursors
          }, t, 0));
        }
      }, {
        key: "_fillInformationAboutPointsAndCursors",
        value: function _fillInformationAboutPointsAndCursors(t, e) {
          var _this6 = this;

          if (this._points = [], this._cursors = [], this._inputs.find(function (t) {
            return Array.isArray(t) || "price" === t.type;
          })) {
            if (null === this._convertPriceToCoordinate(0)) return;
          }

          this._inputs.forEach(function (i, r) {
            var s = a.PaneCursorType.Default,
                o = null,
                l = null,
                u = !0;
            var d = i;

            if (Array.isArray(i)) {
              var _t4 = "time" === i[0].type ? i[0] : i[1],
                  _e2 = "price" === i[0].type ? i[0] : i[1],
                  _n = _this6._getInputValue(_t4.id),
                  _r = _this6._getInputValue(_e2.id);

              null !== _n && null !== _r && (o = _this6._convertTimeToCoordinate(_n), l = _this6._convertPriceToCoordinate(_r), u = !1);
            } else {
              var _n2 = _this6._getInputValue(i.id);

              null !== _n2 && ("time" === i.type ? (o = _this6._convertTimeToCoordinate(_n2), l = t / 2, s = a.PaneCursorType.HorizontalResize) : (o = e / 2, l = _this6._convertPriceToCoordinate(_n2), s = a.PaneCursorType.VerticalResize));
            }

            if (null !== o && null !== l) {
              var _t5 = new n.Point(o, l);

              _t5.activeItem = d, _t5.square = u, _t5.data = r, _this6._points.push(_t5), _this6._cursors.push(s);
            }
          });
        }
      }, {
        key: "_createStudyAnchor",
        value: function _createStudyAnchor(t, e, i) {
          var n = (0, s.lastMouseOrTouchEventInfo)().isTouch,
              r = this._getStudyAnchorRenderer(i),
              a = this._inputs.indexOf(this._model.activeItemBeingMoved()),
              l = this._model.crossHairSource(),
              u = (this._isHovered() || this._isSelected()) && !this._model.isSnapshot(),
              h = _objectSpread({}, t, {
            color: this._editable ? c : d,
            backgroundColors: this._studyAnchorColors(t.points, e),
            currentPoint: l.currentPoint(),
            linePointBeingEdited: -1 !== a ? a : null,
            hittestResult: o.HitTarget.MovePoint,
            radius: n ? 13 : 6,
            strokeWidth: n ? 2 : 1,
            selected: this._isSelected(),
            selectedStrokeWidth: n ? 0 : 3,
            visible: u
          });

          return this._editable || (h.disableInteractions = !0), r.setData(h), r;
        }
      }, {
        key: "_studyAnchorColors",
        value: function _studyAnchorColors(t, e) {
          var _this7 = this;

          return t.map(function (t) {
            return _this7._model.backgroundColorAtYPercentFromTop(t.y / e);
          });
        }
      }, {
        key: "_getStudyAnchorRenderer",
        value: function _getStudyAnchorRenderer(t) {
          for (; this._studyAnchorRenderers.length <= t;) {
            this._studyAnchorRenderers.push(new l.LineAnchorRenderer());
          }

          return this._studyAnchorRenderers[t];
        }
      }]);

      return h;
    }(u.StudyInputsPaneView);
  },
  8475: function _(t, e, i) {
    i.r(e), i.d(e, {
      StudyInputsLinesPaneView: function StudyInputsLinesPaneView() {
        return c;
      }
    });
    var n = i(48891),
        r = i(79849),
        s = i(18807),
        o = i(66103),
        a = i(74997),
        l = i(71254),
        u = i(81824);
    var d = {
      color: n.colorsPalette["color-cold-gray-500"],
      linewidth: 1,
      linestyle: r.LINESTYLE_SOLID
    };

    var c =
    /*#__PURE__*/
    function (_u$StudyInputsPaneVie2) {
      _inherits(c, _u$StudyInputsPaneVie2);

      function c() {
        var _this8;

        _classCallCheck(this, c);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(c).apply(this, arguments)), _this8._editable = !0;
        return _this8;
      }

      _createClass(c, [{
        key: "setEditable",
        value: function setEditable(t) {
          this._editable = t;
        }
      }, {
        key: "getEditable",
        value: function getEditable() {
          return this._editable;
        }
      }, {
        key: "_fillCompositeRendrer",
        value: function _fillCompositeRendrer(t, e) {
          var _this9 = this;

          this._inputs.forEach(function (t) {
            if (Array.isArray(t)) {
              var _e3 = t[0],
                  _i = t[1],
                  _n3 = _this9._getInputValue(_e3.id),
                  _r2 = _this9._getInputValue(_i.id);

              if (null !== _n3 && null !== _r2) {
                var _t6 = _this9._createLineRendererForinput(_n3, _e3),
                    _s3 = _this9._createLineRendererForinput(_r2, _i);

                null !== _t6 && null !== _s3 && (_this9._renderer.append(_t6), _this9._renderer.append(_s3));
              }
            } else {
              var _e4 = _this9._getInputValue(t.id);

              if (null !== _e4) {
                var _i2 = _this9._createLineRendererForinput(_e4, t);

                null !== _i2 && _this9._renderer.append(_i2);
              }
            }
          });
        }
      }, {
        key: "_createLineRendererForinput",
        value: function _createLineRendererForinput(t, e) {
          if ("price" === e.type) {
            var _i3 = this._convertPriceToCoordinate(t);

            if (null !== _i3) {
              var _t7 = new a.HorizontalLineRenderer();

              _t7.setData(_objectSpread({}, d, {
                y: _i3
              }));

              var _n4 = this._editable ? new s.HitTestResult(s.HitTarget.MovePoint, {
                cursorType: o.PaneCursorType.VerticalResize,
                activeItem: e
              }) : null;

              return _t7.setHitTest(_n4), _t7;
            }
          } else if ("time" === e.type) {
            var _i4 = this._convertTimeToCoordinate(t);

            if (null !== _i4) {
              var _t8 = new l.VerticalLineRenderer();

              _t8.setData(_objectSpread({}, d, {
                x: _i4
              }));

              var _n5 = this._editable ? new s.HitTestResult(s.HitTarget.MovePoint, {
                cursorType: o.PaneCursorType.HorizontalResize,
                activeItem: e
              }) : null;

              return _t8.setHitTest(_n5), _t8;
            }
          }

          return null;
        }
      }]);

      return c;
    }(u.StudyInputsPaneView);
  },
  81824: function _(t, e, i) {
    i.d(e, {
      StudyInputsPaneView: function StudyInputsPaneView() {
        return s;
      }
    });
    var n = i(50151),
        r = i(19266);

    var s =
    /*#__PURE__*/
    function () {
      function s(t, e, i) {
        _classCallCheck(this, s);

        this._renderer = new r.CompositeRenderer(), this._invalidated = !0, this._inputs = t, this._model = e, this._convertPriceToCoordinate = i.convertPriceToCoordinate, this._getInputValue = i.getInputValue;
      }

      _createClass(s, [{
        key: "getInputs",
        value: function getInputs() {
          return this._inputs;
        }
      }, {
        key: "addInput",
        value: function addInput(t) {
          (0, n.assert)(-1 === this._inputs.indexOf(t), "Pane view already contains specified input"), this._inputs.push(t), this.update();
        }
      }, {
        key: "update",
        value: function update(t) {
          this._invalidated = !0;
        }
      }, {
        key: "renderer",
        value: function renderer(t, e) {
          return this._invalidated && (this._updateImpl(t, e), this._invalidated = !1), this._renderer;
        }
      }, {
        key: "_updateImpl",
        value: function _updateImpl(t, e) {
          this._renderer.clear();

          this._model.timeScale().isEmpty() || 0 === this._inputs.length || this._fillCompositeRendrer(t, e);
        }
      }, {
        key: "_convertTimeToCoordinate",
        value: function _convertTimeToCoordinate(t) {
          var e = this._model.timeScale(),
              i = e.timePointToIndex(t / 1e3);

          return null !== i ? e.indexToCoordinate(i) : null;
        }
      }]);

      return s;
    }();
  }
}]);