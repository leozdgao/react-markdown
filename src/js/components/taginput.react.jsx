/// <reference path="../../typings/react/react.d.ts"/>
import React from 'react';
import tagStore, {setTags} from '../stores/taginput.store';
import tagActions from '../actions/taginput.action';

export default React.createClass({
  getInitialState: function () {
    return {
      tags: this.props.tags || []
    };
  },
  componentDidMount: function () {
    let input = React.findDOMNode(this.refs.input);
    this._initialInputWidth = this._getElementWidth(input);

    // init tags
    setTags(this.state.tags);
    tagStore.listen(this._updateView);
  },
  render: function () {
    let that = this;
    let tags = this.state.tags.map((tag, i) => {
      return (
        <span className="tag">
          {tag}
          <span className="tag-remove" onClick={function() { tagActions.removeTag(i); }}> X</span>
        </span>
      );
    });

    return (
      <div className="tag-input" onClick={this._click}>
        {tags}
        <input type="text" ref="input" onKeyDown={this._keyDown} onKeyUp={this._keyUp} />
        <span className="hidden" ref="hidden"></span>
      </div>
      );
  },
  _updateView: function (tags) {
    this.setState({ tags: tags });
  },
  _click: function () {
    let input = React.findDOMNode(this.refs.input);
    input.focus();
  },
  _keyDown: function (e) {
    let input = React.findDOMNode(this.refs.input);
    
    switch(e.keyCode) {
      case 188: { // add tag if ','
        e.preventDefault();  // prevent the input of ','
          
        let val = input.value.trim();
        input.value = "";
        input.style.width = this._initialInputWidth + "px";
        tagActions.addTag(val);
        break;
      };
      case 8: { // remove tag if 'del'
        if(input.value == '') tagActions.removeTag();
        break;
      };
      default: {
        // dynamic adjust input width
      };
    }
  },
  _keyUp: function (e) {
    let input = React.findDOMNode(this.refs.input);
    let hidden = React.findDOMNode(this.refs.hidden);

    hidden.textContent = input.value;

    let wInput = this._getElementWidth(input);
    let wHidden = this._getElementWidth(hidden);
    if(wHidden + 20 > wInput) {
      input.style.width = (wInput + 20) + "px";
    }
  },
  _getElementWidth: function (elem) {
    let rect = elem.getBoundingClientRect();
    return rect.right - rect.left;
  }
});