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
	
	var _react = __webpack_require__(/*! react */ 157);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Heading = __webpack_require__(/*! ./Heading.jsx */ 459);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flexboxCenter = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};
	
	var Header = function Header() {
		var style = {
			width: '100%',
			height: '12.5%',
			backgroundColor: '#F7ECD2',
			top: '0%'
		};
		style = Object.assign(style, flexboxCenter);
		return _react2.default.createElement(
			'div',
			{ id: 'header', style: style },
			_react2.default.createElement(BookInfo, null),
			_react2.default.createElement(AbrahamLogo, null),
			_react2.default.createElement(ViewSettings, null)
		);
	};
	
	var AbrahamLogo = function AbrahamLogo() {
		var style = {
			height: '72%'
		};
		return _react2.default.createElement('img', { style: style, src: 'assets/images/logo.svg', alt: 'Abraham' });
	};
	
	var BookInfo = function BookInfo() {
		return _react2.default.createElement(
			'div',
			{ id: 'bookInfo', style: Object.assign(flexboxCenter, { 'flex-direction': 'column' }) },
			_react2.default.createElement('img', { src: 'assets/images/book_icon.svg', alt: 'Pick a book' }),
			_react2.default.createElement(
				_Heading2.default,
				{ type: 1 },
				'Genesis 1'
			)
		);
	};
	
	var ViewSettings = function ViewSettings() {
		return _react2.default.createElement(
			'div',
			{ id: 'viewSettings', style: flexboxCenter },
			_react2.default.createElement('img', { src: 'assets/images/gear_icon.svg', alt: 'Settings' }),
			_react2.default.createElement(
				_Heading2.default,
				{ type: 1 },
				'Classic View'
			)
		);
	};
	
	exports.default = Header;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 455); if (makeExportsHot(module, __webpack_require__(/*! react */ 157))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 11)(module), __webpack_require__(/*! ./~/console-browserify/index.js */ 2)))

/***/ }

})
//# sourceMappingURL=0.9b81e934275ea8a23cd9.hot-update.js.map