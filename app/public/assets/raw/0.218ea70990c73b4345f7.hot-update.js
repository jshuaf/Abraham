webpackHotUpdate(0,{

/***/ 453:
/*!************************************!*\
  !*** ./app/components/Chapter.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 82), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 90), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 92), React = __webpack_require__(/*! react */ 157); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(/*! react */ 157);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Verse = __webpack_require__(/*! ./Verse.jsx */ 454);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Chapter = function Chapter(_ref) {
		var text = _ref.text;
		var details = _ref.details;
		var notes = _ref.notes;
	
		var verses = [];
		for (var verseIndex = 0; verseIndex < text.length; verseIndex++) {
			verses.push(_react2.default.createElement(_Verse.Verse, {
				text: text[verseIndex],
				notes: notes[verseIndex],
				key: verseIndex,
				number: verseIndex + 1,
				indents: details.indents[verseIndex],
				indentIndices: details.indentIndices[verseIndex],
				jqIndices: details.jqIndices[verseIndex]
			}));
		}
	
		var style = {
			textAlign: 'left',
			lineHeight: '300%'
		};
	
		return _react2.default.createElement(
			'div',
			{ className: 'seven columns offset-by-two-and-one-half', style: style },
			verses
		);
	};
	
	var indicesArrayPropType = _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.number.isRequired).isRequired).isRequired;
	
	Chapter.propTypes = {
		number: _react.PropTypes.number.isRequired,
		text: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired,
		details: _react.PropTypes.shape({
			indents: indicesArrayPropType,
			indentIndices: indicesArrayPropType,
			jqIndices: indicesArrayPropType
		}).isRequired,
		notes: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired)
	};
	
	exports.default = Chapter;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 455); if (makeExportsHot(module, __webpack_require__(/*! react */ 157))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Chapter.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 11)(module), __webpack_require__(/*! ./~/console-browserify/index.js */ 2)))

/***/ },

/***/ 454:
/*!**********************************!*\
  !*** ./app/components/Verse.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 82), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 90), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 92), React = __webpack_require__(/*! react */ 157); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 157);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Verse = function Verse(_ref) {
		var text = _ref.text;
		var notes = _ref.notes;
		var indents = _ref.indents;
		var indentIndices = _ref.indentIndices;
		var jqIndices = _ref.jqIndices;
	
		// add a space if needed
		if (text[text.length - 1] !== ' ') {
			text += ' ';
		}
	
		var style = {
			color: '#58371C',
			marginLeft: 0,
			fontSize: '2rem'
		};
	
		var verse = [];
		var textWords = text.split(' ');
		for (var i = 0; i < indents.length; i++) {
			var indent = indents[i];
			var verseSection = textWords.slice(indentIndices[i], indentIndices[i + 1]).join(' ');
	
			style.marginLeft = indent * 30;
			if (indent !== 0) {
				verse.push(_react2.default.createElement('br', { key: i + 0.5 }));
			}
			verse.push(_react2.default.createElement(
				'span',
				{ style: style, className: 'verseText', key: i },
				verseSection
			));
		}
	
		return _react2.default.createElement(
			'div',
			{ className: 'verse', style: { display: 'inline' } },
			verse
		);
	};
	
	Verse.propTypes = {
		text: _react.PropTypes.string.isRequired,
		number: _react.PropTypes.number.isRequired
	};
	
	module.exports = { Verse: Verse };
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 455); if (makeExportsHot(module, __webpack_require__(/*! react */ 157))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Verse.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 11)(module), __webpack_require__(/*! ./~/console-browserify/index.js */ 2)))

/***/ }

})
//# sourceMappingURL=0.218ea70990c73b4345f7.hot-update.js.map