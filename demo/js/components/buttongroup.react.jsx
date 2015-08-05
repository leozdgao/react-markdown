import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="md-btngroup">
        <button className="btn primary" onClick={this.props.submit}>提交</button>
        <span className="help-text">这是一条提示信息</span>
      </div>
    );
  }
});
