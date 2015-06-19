import React from 'react';
import marked from 'marked';

export default React.createClass({
  getInitialState: function() {
    return {
      content: { __html: '' },
      // editorHeight: 540,
      modeControlStyle: {
        btnEdit: '',
        btnSplit: 'active',
        btnPreview: '',
        pEditor: 'md-editor',
        pPreview: 'md-preview markdown'
      },
      panelClass: 'md-panel'
    };
  },
  componentDidMount: function() {
    // check dom node
    this.textControl = React.findDOMNode(this.refs.editor);
    this.previewControl = React.findDOMNode(this.refs.preview);
    this.resizer = React.findDOMNode(this.refs.resizer);
    // this.minEditorHeight = this.state.editorHeight;
  },
  render: function() {
    return (
      <div className={this.state.panelClass}>
        <div className="md-menubar">
          <ul className="md-modebar">
            <li className="tb-btn pull-right">
              <a className={this.state.modeControlStyle["btnPreview"]} onClick={this._previewMode} title="预览模式">
                <i className="fa fa-eye"></i>
              </a>
            </li> { /* preview mode */ }
            <li className="tb-btn pull-right">
              <a className={this.state.modeControlStyle["btnSplit"]} onClick={this._splitMode} title="分屏模式">
                <i className="fa fa-columns"></i>
              </a>
            </li> { /* split mode */ }
            <li className="tb-btn pull-right">
              <a className={this.state.modeControlStyle["btnEdit"]} onClick={this._editMode} title="编辑模式">
                <i className="fa fa-pencil"></i>
              </a>
            </li> { /* edit mode */ }
            <li className="tb-btn spliter pull-right"></li>
            <li className="tb-btn pull-right"><a title="全屏模式" onClick={this._fullScreen}><i className="fa fa-arrows-alt"></i></a></li> {/* full-screen */}
          </ul>
          <ul className="md-toolbar clearfix">
            <li className="tb-btn"><a title="加粗" onClick={this._boldText}><i className="fa fa-bold"></i></a></li> {/* bold */}
            <li className="tb-btn"><a title="斜体" onClick={this._italicText}><i className="fa fa-italic"></i></a></li> {/* italic */}
            <li className="tb-btn spliter"></li>
            <li className="tb-btn"><a title="链接" onClick={this._linkText}><i className="fa fa-link"></i></a></li> {/* link */}
            <li className="tb-btn"><a title="引用" onClick={this._blockquoteText}><i className="fa fa-outdent"></i></a></li> {/* blockquote */}
            <li className="tb-btn"><a title="代码段" onClick={this._codeText}><i className="fa fa-code"></i></a></li> {/* code */}
            <li className="tb-btn"><a title="图片" onClick={this._pictureText}><i className="fa fa-picture-o"></i></a></li> {/* picture-o */}
            <li className="tb-btn spliter"></li>
            <li className="tb-btn"><a title="有序列表" onClick={this._listOlText}><i className="fa fa-list-ol"></i></a></li> {/* list-ol */}
            <li className="tb-btn"><a title="无序列表" onClick={this._listUlText}><i className="fa fa-list-ul"></i></a></li> {/* list-ul */}
            <li className="tb-btn"><a title="标题" onClick={this._headerText}><i className="fa fa-header"></i></a></li> {/* header */}
          </ul>
        </div>
        <div className={this.state.modeControlStyle["pEditor"]}>
          <textarea ref="editor" name="content" onChange={this._onChange}></textarea>  {/*style={{height: this.state.editorHeight + 'px'}}*/}
        </div>
        <div className={this.state.modeControlStyle["pPreview"]} ref="preview" dangerouslySetInnerHTML={this.state.content}></div>
        <div className="md-spliter"></div>
        {/*<div className="md-resizer" ref="resizer" onMouseDown={this._mousedown} onDragStart={this._dragstart}></div>*/}
      </div>
    );
  },
  _onChange: function(e) {
    if(this._ltr) clearTimeout(this._ltr);

    this._ltr = setTimeout(() => {
      let input = this.textControl.value;
      this.setState({ content: { __html: marked(input) } });
    }, 300);
  },
  // _mousedown: function(e) {
  //   document.addEventListener('mousemove', this._mousemove);
  //   document.addEventListener('mouseup', this._mouseup);
  // },
  // _mouseup: function(e) {
  //   document.removeEventListener('mousemove', this._mousemove);
  // },
  // _mousemove: function(e) {
  //   let h = e.clientY - this.textControl.getBoundingClientRect().top - 5;
  //   this.setState({ editorHeight: Math.max(h, this.minEditorHeight) });
  // },
  // _dragstart: function(e) {
  //   e.preventDefault();
  //   e.stopPropergation();
  // },
  _preInputText: function(text, preStart, preEnd) {
    let start = this.textControl.selectionStart,
        end = this.textControl.selectionEnd,
        origin = this.textControl.value

    this.textControl.value = origin.slice(0, start) + text + origin.slice(end);
    // pre-select
    this.textControl.setSelectionRange(start + preStart, start + preEnd);
    this.setState({ content: { __html: marked(this.textControl.value) } });
  },
  _boldText: function() {
    this._preInputText("**加粗文字**", 2, 6);
  },
  _italicText: function() {
    this._preInputText("_斜体文字_", 1, 5);
  },
  _linkText: function() {
    this._preInputText("[链接文本](www.yourlink.com)", 1, 5);
  },
  _blockquoteText: function() {
    this._preInputText("> 引用", 2, 4);
  },
  _codeText: function() {
    this._preInputText("```\ncode block\n```", 4, 14);
  },
  _pictureText: function() {
    this._preInputText("![alt](www.yourlink.com)", 2, 5);
  },
  _listUlText: function() {
    this._preInputText("- 无序列表项0\n- 无序列表项1", 2, 8);
  },
  _listOlText: function() {
    this._preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9);
  },
  _headerText: function() {
    this._preInputText("## 标题", 3, 5);
  },
  _editMode: function() {
    this.setState({modeControlStyle: this._getModeStyle('edit')});
  },
  _splitMode: function() {
    this.setState({modeControlStyle: this._getModeStyle('split')});
  },
  _previewMode: function() {
    this.setState({modeControlStyle: this._getModeStyle('preview')});
  },
  _getModeStyle: function(mode) {
    switch (mode) {
      case 'split':
        return {
          btnEdit: '',
          btnSplit: 'active',
          btnPreview: '',
          pEditor: 'md-editor',
          pPreview: 'md-preview markdown'
        }
      case 'edit':
        return {
          btnEdit: 'active',
          btnSplit: '',
          btnPreview: '',
          pEditor: 'md-editor expand',
          pPreview: 'md-preview markdown shrink'
        }
      case 'preview':
        return {
          btnEdit: '',
          btnSplit: '',
          btnPreview: 'active',
          pEditor: 'md-editor',
          pPreview: 'md-preview markdown expand'
        }
    };
  },
  _fullScreen: function() {
    (this._isFullScreen = !this._isFullScreen) ?
      this.setState({panelClass: 'md-panel fullscreen'}) :
      this.setState({panelClass: 'md-panel'});
  }
});
