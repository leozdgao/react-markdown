import React from 'react';
import TagInput from './taginput.react';
import Editor from './editor.react';

export default React.createClass({
  render: function() {
    return (
      <form>
        <TagInput />
        <Editor />
      </form>
    );
  }
});