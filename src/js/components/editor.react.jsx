import React from 'react';
import marked from 'marked';

export default React.createClass({
  getInitialState: function() {
    return { __html: '' };
  },
  componentDidMount: function() {
    // check dom node
    this.textControl = React.findDOMNode(this.refs.editor);
    this.previewControl = React.findDOMNode(this.refs.preview);
  },
  render: function() {
    return (
      <div className="md-panel">
        <div className="md-toolbar"></div>
        <div className="md-editor">
          <textarea ref="editor" onChange={this._onChange}></textarea>
        </div>
        <div ref="preview" className="md-preview markdown" dangerouslySetInnerHTML={this.state}></div>
        <div className="md-spliter"></div>
      </div>
    );
  },
  _onChange: function(e) {
    if(this._ltr) clearTimeout(this._ltr);

    this._ltr = setTimeout(() => {
      let input = this.textControl.value;
      this.setState({ __html: marked(input) });
    }, 300);
  }
});
