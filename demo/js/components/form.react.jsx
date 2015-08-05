import React from 'react';
import TagInput from './taginput.react';
import Editor from './editor.react';
import TitleInput from './title.react';
import ButtonGroup from './buttongroup.react';

export default React.createClass({
  propTypes: {
    postUrl: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      title: '',
      tags: [],
      content: ''
    }
  },
  render: function() {
    return (
      <form>
        <h2>写文章</h2>
        <TitleInput title={this.state.title} refreshState={this._refreshState('title')} />
        <TagInput tags={this.state.tags} refreshState={this._refreshState('tags')} />
        <Editor content={this.state.content} refreshState={this._refreshState('content')} />
        <ButtonGroup submit={this._submit} />
      </form>
    );
  },
  _submit: function(e) {
    e.preventDefault();
    console.log(this.state);
  },
  _refreshState: function(key) {
    let that = this;
    return function(val) {
      let temp = {};
      temp[key] = val;
      that.setState(temp);
    };
  }
});
