import React from 'react';
import TagInput from './taginput.react';
import Editor from './editor.react';
import TitleInput from './title.react';

export default React.createClass({
  getDefaultProps: function() {
    return {
      article: {}
    };
  },
  render: function() {
    return (
      <form>
        <TitleInput title={this.props.article.title} />
        <TagInput tags={this.props.article.tags} />
        <Editor content={this.props.article.content} />
      </form>
    );
  }
});
