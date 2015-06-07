import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="md-panel">
        <div className="md-toolbar"></div>
        <div className="md-editor">
          <textarea></textarea>
        </div>
        <div className="md-preview"></div>
      </div>
      );
  }
});