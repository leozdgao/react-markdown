import React from 'react';
import marked from 'marked';

export default React.createClass({
  getInitialState: function() { console.log('state');
    return {
      content: { __html: '' },
      editorHeight: 540
    };
  },
  componentDidMount: function() { console.log('mount');
    // check dom node
    this.textControl = React.findDOMNode(this.refs.editor);
    this.previewControl = React.findDOMNode(this.refs.preview);
    this.resizer = React.findDOMNode(this.refs.resizer);
    this.minEditorHeight = this.state.editorHeight;
  },
  render: function() {
    return (
      <div className="md-panel">
        <div className="md-toolbar"></div>
        <div className="md-editor">
          <textarea ref="editor" onChange={this._onChange} style={{height: this.state.editorHeight + 'px'}}></textarea>
        </div>
        <div ref="preview" className="md-preview markdown" dangerouslySetInnerHTML={this.state.content}></div>
        <div className="md-spliter"></div>
        <div ref="resizer" className="md-resizer" onMouseDown={this._mousedown}></div>
      </div>
    );
  },
  _onChange: function(e) {
    if(this._ltr) clearTimeout(this._ltr);

    this._ltr = setTimeout(() => {
      let input = this.textControl.value;
      this.setState({ __html: marked(input) });
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
    let h = e.clientY - this.textControl.getBoundingClientRect().top; console.log(e.screenY); console.log(this.textControl.offsetTop);
    this.setState({ editorHeight: Math.max(h, this.minEditorHeight) });
  }
});
