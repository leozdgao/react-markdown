import React from 'react';
import TagInput from './taginput.react';
import Editor from './editor.react';
import TitleInput from './title.react';
import ButtonGroup from './buttongroup.react';

export default React.createClass({
  propTypes: {
    postUrl: React.PropTypes.string
  },
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
        <ButtonGroup submit={this._submit} />
      </form>
    );
  },
  _submit: function(e) {
    e.preventDefault();
    console.log('c');
  }
});
