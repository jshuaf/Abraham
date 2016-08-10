webpackHotUpdate(0,{

/***/ 458:
/*!***********************************!*\
  !*** ./app/components/Header.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 82), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 90), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 92), React = __webpack_require__(/*! react */ 157); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 157);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Heading = __webpack_require__(/*! ./Heading.jsx */ 459);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: 'render',
			value: function render() {
				var style = {
					width: '100%',
					height: '12.5%',
					backgroundColor: '#F7ECD2',
					top: '0%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				};
				return _react2.default.createElement(
					'div',
					{ id: 'header', style: style },
					_react2.default.createElement(BookInfo, null),
					_react2.default.createElement(AbrahamLogo, null),
					_react2.default.createElement(ViewSettings, null)
				);
			}
		}]);
	
		return Header;
	}(_react2.default.Component);
	
	var AbrahamLogo = function (_React$Component2) {
		_inherits(AbrahamLogo, _React$Component2);
	
		function AbrahamLogo() {
			_classCallCheck(this, AbrahamLogo);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AbrahamLogo).apply(this, arguments));
		}
	
		_createClass(AbrahamLogo, [{
			key: 'render',
			value: function render() {
				var style = {
					height: '72%'
				};
				return _react2.default.createElement('img', { style: style, src: 'assets/images/logo.svg', alt: 'Abraham' });
			}
		}]);
	
		return AbrahamLogo;
	}(_react2.default.Component);
	
	var BookInfo = function (_React$Component3) {
		_inherits(BookInfo, _React$Component3);
	
		function BookInfo() {
			_classCallCheck(this, BookInfo);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).apply(this, arguments));
		}
	
		_createClass(BookInfo, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'bookInfo', style: { display: 'flex' } },
					_react2.default.createElement('img', { src: 'assets/images/book_icon.svg', alt: 'Pick a book' }),
					_react2.default.createElement(
						_Heading2.default,
						{ type: 1 },
						'Genesis 2'
					)
				);
			}
		}]);
	
		return BookInfo;
	}(_react2.default.Component);
	
	var ViewSettings = function (_React$Component4) {
		_inherits(ViewSettings, _React$Component4);
	
		function ViewSettings() {
			_classCallCheck(this, ViewSettings);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewSettings).apply(this, arguments));
		}
	
		_createClass(ViewSettings, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'bookInfo' },
					_react2.default.createElement('img', { src: 'assets/images/gear_icon.svg', alt: 'Settings' }),
					_react2.default.createElement(
						_Heading2.default,
						{ type: 1 },
						'Classic View'
					)
				);
			}
		}]);
	
		return ViewSettings;
	}(_react2.default.Component);
	
	exports.default = Header;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 455); if (makeExportsHot(module, __webpack_require__(/*! react */ 157))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 11)(module), __webpack_require__(/*! ./~/console-browserify/index.js */ 2)))

/***/ }

})
//# sourceMappingURL=0.75d42078fc84833a96b3.hot-update.js.map