import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="editor-title">
        <input className="textbox" name="title" ref="title" type="text"
          value={this.props.title} onChange={this._onChange}
          placeholder="来，取个响亮的标题吧！" />
      </div>
    );
  },
  _onChange: function(e) {
    this.props.refreshState(e.target.value); // change state
  }
});
