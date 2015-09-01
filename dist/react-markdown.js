/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(2);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _editor = __webpack_require__(3);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	__webpack_require__(11);
	
	var mount = document.getElementById('editor');
	_react2['default'].render(_react2['default'].createElement(_editor2['default'], null), mount);
	
	// async init highlight.js
	var script = document.getElementById('hlscript');
	script.onload = function () {
	  window.hljs.initHighlightingOnLoad();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = marked;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(2);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	__webpack_require__(5);
	
	__webpack_require__(9);
	
	var MdEditor = _react2['default'].createClass({
	  displayName: 'MdEditor',
	
	  propTypes: {
	    content: _react.PropTypes.string
	  },
	  getInitialState: function getInitialState() {
	    return {
	      panelClass: 'md-panel',
	      mode: 'split',
	      isFullScreen: false,
	      result: (0, _marked2['default'])(this.props.content || '')
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    // cache dom node
	    this.textControl = _react2['default'].findDOMNode(this.refs.editor);
	    this.previewControl = _react2['default'].findDOMNode(this.refs.preview);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.textControl = null;
	    this.previewControl = null;
	  },
	  render: function render() {
	    var panelClass = (0, _classnames2['default'])(['md-panel', { 'fullscreen': this.state.isFullScreen }]);
	    var editorClass = (0, _classnames2['default'])(['md-editor', { 'expand': this.state.mode === 'edit' }]);
	    var previewClass = (0, _classnames2['default'])(['md-preview', 'markdown', { 'expand': this.state.mode === 'preview', 'shrink': this.state.mode === 'edit' }]);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: panelClass },
	      _react2['default'].createElement(
	        'div',
	        { className: 'md-menubar' },
	        this._getModeBar(),
	        this._getToolBar()
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: editorClass },
	        _react2['default'].createElement('textarea', { ref: 'editor', name: 'content', onChange: this._onChange })
	      ),
	      _react2['default'].createElement('div', { className: previewClass, ref: 'preview', dangerouslySetInnerHTML: { __html: this.state.result } }),
	      _react2['default'].createElement('div', { className: 'md-spliter' })
	    );
	  },
	  // public methods
	  isDirty: function isDirty() {
	    return this._isDirty || false;
	  },
	  getValue: function getValue() {
	    return this.state.content;
	  },
	  // widgets constructors
	  _getToolBar: function _getToolBar() {
	    return _react2['default'].createElement(
	      'ul',
	      { className: 'md-toolbar clearfix' },
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '加粗', onClick: this._boldText },
	          _react2['default'].createElement('i', { className: 'fa fa-bold' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '斜体', onClick: this._italicText },
	          _react2['default'].createElement('i', { className: 'fa fa-italic' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement('li', { className: 'tb-btn spliter' }),
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '链接', onClick: this._linkText },
	          _react2['default'].createElement('i', { className: 'fa fa-link' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '引用', onClick: this._blockquoteText },
	          _react2['default'].createElement('i', { className: 'fa fa-outdent' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '代码段', onClick: this._codeText },
	          _react2['default'].createElement('i', { className: 'fa fa-code' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '图片', onClick: this._pictureText },
	          _react2['default'].createElement('i', { className: 'fa fa-picture-o' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement('li', { className: 'tb-btn spliter' }),
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '有序列表', onClick: this._listOlText },
	          _react2['default'].createElement('i', { className: 'fa fa-list-ol' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '无序列表', onClick: this._listUlText },
	          _react2['default'].createElement('i', { className: 'fa fa-list-ul' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn' },
	        _react2['default'].createElement(
	          'a',
	          { title: '标题', onClick: this._headerText },
	          _react2['default'].createElement('i', { className: 'fa fa-header' })
	        )
	      ),
	      ' '
	    );
	  },
	  _getModeBar: function _getModeBar() {
	    var _this = this;
	
	    var checkActive = function checkActive(mode) {
	      return (0, _classnames2['default'])({ active: _this.state.mode === mode });
	    };
	
	    return _react2['default'].createElement(
	      'ul',
	      { className: 'md-modebar' },
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn pull-right' },
	        _react2['default'].createElement(
	          'a',
	          { className: checkActive('preview'), onClick: this._changeMode('preview'), title: '预览模式' },
	          _react2['default'].createElement('i', { className: 'fa fa-eye' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn pull-right' },
	        _react2['default'].createElement(
	          'a',
	          { className: checkActive('split'), onClick: this._changeMode('split'), title: '分屏模式' },
	          _react2['default'].createElement('i', { className: 'fa fa-columns' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn pull-right' },
	        _react2['default'].createElement(
	          'a',
	          { className: checkActive('edit'), onClick: this._changeMode('edit'), title: '编辑模式' },
	          _react2['default'].createElement('i', { className: 'fa fa-pencil' })
	        )
	      ),
	      ' ',
	      _react2['default'].createElement('li', { className: 'tb-btn spliter pull-right' }),
	      _react2['default'].createElement(
	        'li',
	        { className: 'tb-btn pull-right' },
	        _react2['default'].createElement(
	          'a',
	          { title: '全屏模式', onClick: this._toggleFullScreen },
	          _react2['default'].createElement('i', { className: 'fa fa-arrows-alt' })
	        )
	      ),
	      ' '
	    );
	  },
	  // event handlers
	  _onChange: function _onChange(e) {
	    var _this2 = this;
	
	    this._isDirty = true; // set dirty
	    if (this._ltr) clearTimeout(this._ltr);
	
	    this._ltr = setTimeout(function () {
	      _this2.setState({ result: (0, _marked2['default'])(_this2.textControl.value) }); // change state
	    }, 300);
	  },
	  _changeMode: function _changeMode(mode) {
	    var _this3 = this;
	
	    return function (e) {
	      _this3.setState({ mode: mode });
	    };
	  },
	  _toggleFullScreen: function _toggleFullScreen(e) {
	    this.setState({ isFullScreen: !this.state.isFullScreen });
	  },
	  // default text processors
	  _preInputText: function _preInputText(text, preStart, preEnd) {
	    var start = this.textControl.selectionStart;
	    var end = this.textControl.selectionEnd;
	    var origin = this.textControl.value;
	
	    if (start !== end) {
	      var exist = origin.slice(start, end);
	      text = text.slice(0, preStart) + exist + text.slice(preEnd);
	      preEnd = preStart + exist.length;
	    }
	    this.textControl.value = origin.slice(0, start) + text + origin.slice(end);
	    // pre-select
	    this.textControl.setSelectionRange(start + preStart, start + preEnd);
	    this.setState({ result: (0, _marked2['default'])(this.textControl.value) }); // change state
	  },
	  _boldText: function _boldText() {
	    this._preInputText("**加粗文字**", 2, 6);
	  },
	  _italicText: function _italicText() {
	    this._preInputText("_斜体文字_", 1, 5);
	  },
	  _linkText: function _linkText() {
	    this._preInputText("[链接文本](www.yourlink.com)", 1, 5);
	  },
	  _blockquoteText: function _blockquoteText() {
	    this._preInputText("> 引用", 2, 4);
	  },
	  _codeText: function _codeText() {
	    this._preInputText("```\ncode block\n```", 4, 14);
	  },
	  _pictureText: function _pictureText() {
	    this._preInputText("![alt](www.yourlink.com)", 2, 5);
	  },
	  _listUlText: function _listUlText() {
	    this._preInputText("- 无序列表项0\n- 无序列表项1", 2, 8);
	  },
	  _listOlText: function _listOlText() {
	    this._preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9);
	  },
	  _headerText: function _headerText() {
	    this._preInputText("## 标题", 3, 5);
	  }
	});
	
	exports['default'] = MdEditor;
	module.exports = exports['default'];
	/* style={{height: this.state.editorHeight + 'px'}} */ /* bold */ /* italic */ /* link */ /* blockquote */ /* code */ /* picture-o */ /* list-ol */ /* list-ul */ /* header */ /* preview mode */ /* split mode */ /* edit mode */ /* full-screen */

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=react-markdown.js.map