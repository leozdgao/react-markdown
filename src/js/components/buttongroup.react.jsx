import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="md-btngroup">
        <button onClick={this.props.submit}>提交</button>
      </div>
    );
  }
});
