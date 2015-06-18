import React from 'react';
import marked from 'marked';

export default React.createClass({
  getInitialState: function() {
    return {
      content: { __html: '' },
      editorHeight: 540
    };
  },
  componentDidMount: function() {
    // check dom node
    this.textControl = React.findDOMNode(this.refs.editor);
    this.previewControl = React.findDOMNode(this.refs.preview);
    this.resizer = React.findDOMNode(this.refs.resizer);
    this.minEditorHeight = this.state.editorHeight;
  },
  render: function() {
    return (
      <div className="md-panel">
        <ul className="md-toolbar">
          <li className="tb-btn"><a title="加粗"><i className="fa fa-bold"></i></a></li> {/* bold */}
          <li className="tb-btn"><a title="斜体"><i className="fa fa-italic"></i></a></li> {/* italic */}
          <li className="tb-btn spliter"></li>
          <li className="tb-btn"><a title="链接"><i className="fa fa-link"></i></a></li> {/* link */}
          <li className="tb-btn"><a title="引用"><i className="fa fa-outdent"></i></a></li> {/* blockquote */}
          <li className="tb-btn"><a title="代码段"><i className="fa fa-code"></i></a></li> {/* code */}
          <li className="tb-btn"><a title="图片"><i className="fa fa-picture-o"></i></a></li> {/* picture-o */}
          <li className="tb-btn spliter"></li>
          <li className="tb-btn"><a title="有序列表"><i className="fa fa-list-ol"></i></a></li> {/* list-ol */}
          <li className="tb-btn"><a title="无序列表"><i className="fa fa-list-ul"></i></a></li> {/* list-ul */}
          <li className="tb-btn"><a title="标题"><i className="fa fa-header"></i></a></li> {/* header */}

          <li className="tb-btn pull-right"><a title="预览模式"><i className="fa fa-eye"></i></a></li> { /* preview mode */ }
          <li className="tb-btn pull-right"><a title="分屏模式"><i className="fa fa-columns"></i></a></li> { /* split mode */ }
          <li className="tb-btn pull-right"><a title="编辑模式"><i className="fa fa-pencil"></i></a></li> { /* edit mode */ }
          <li className="tb-btn spliter pull-right"></li>
          <li className="tb-btn pull-right"><a title="全屏模式"><i className="fa fa-arrows-alt"></i></a></li> {/* full-screen */}
        </ul>
        <div className="md-editor">
          <textarea ref="editor" onChange={this._onChange} style={{height: this.state.editorHeight + 'px'}}></textarea>
        </div>
        <div ref="preview" className="md-preview markdown" dangerouslySetInnerHTML={this.state.content}></div>
        <div className="md-spliter"></div>
        <div ref="resizer" className="md-resizer" onMouseDown={this._mousedown} onDragStart={this._dragstart}></div>
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
  _mousedown: function(e) {
    document.addEventListener('mousemove', this._mousemove);
    document.addEventListener('mouseup', this._mouseup);
  },
  _mouseup: function(e) {
    document.removeEventListener('mousemove', this._mousemove);
  },
  _mousemove: function(e) {
    let h = e.clientY - this.textControl.getBoundingClientRect().top - 5;
    this.setState({ editorHeight: Math.max(h, this.minEditorHeight) });
  },
  _dragstart: function(e) {
    e.preventDefault();
    e.stopPropergation();
  }
});
