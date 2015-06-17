import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title || ''
    };
  },
  render: function() {
    return (
      <div className="editor-title">
        <input className="textbox" name="title" ref="title" type="text"
          value={this.state.title} onChange={this._onChange}
          placeholder="来，取个响亮的标题吧！" />
      </div>
    );
  },
  getValue: function() {
    let input = React.findDOMNode(this.refs.title);
    return input && input.value;
  },
  _onChange: function(e) {
    this.setState({title: e.target.value});
  }
});
