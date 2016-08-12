webpackHotUpdate(0,{

/***/ 459:
/*!************************************!*\
  !*** ./app/components/Heading.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 82), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 90), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 92), React = __webpack_require__(/*! react */ 157); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 157);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Heading = function Heading(_ref) {
		var type = _ref.type;
		var children = _ref.children;
	
		var fontSize = void 0;
		switch (type) {
			case 1:
				{
					fontSize = '2.5rem';
					break;
				}case 2:
				{
					fontSize = '2rem';
					break;
				}default:
				{
					fontSize = '1.5rem';
					break;
				}
		}
		return _react2.default.createElement(
			'h1',
			{ fontSize: fontSize, className: 'heading' },
			undefined.props.children
		);
	};
	
	Heading.propTypes = {
		type: _react2.default.PropTypes.number.isRequired,
		children: _react2.default.PropTypes.any
	};
	
	exports.default = Heading;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 455); if (makeExportsHot(module, __webpack_require__(/*! react */ 157))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Heading.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 11)(module), __webpack_require__(/*! ./~/console-browserify/index.js */ 2)))

/***/ }

})
//# sourceMappingURL=0.7654f0752c487cca39b7.hot-update.js.map