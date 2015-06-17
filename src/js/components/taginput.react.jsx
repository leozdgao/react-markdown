import React from 'react';

export default React.createClass({
  getInitialState: function () {
    let tags = this.props.tags || [];
    return this._getState(tags);
  },
  componentDidMount: function () {
    let input = React.findDOMNode(this.refs.input);
    this._initialInputWidth = this._getElementWidth(input);
  },
  render: function () {
    let tags = this.state.tags.map((tag, i) => {
      return (
        <span key={i} className="tag">{tag}</span>
      );
    });

    return (
      <div className="textbox tag-input" onClick={this._click}>
        {tags}
        <input type="text" ref="input" onKeyDown={this._keyDown} onKeyUp={this._keyUp} placeholder={this.state.placeholder} />
        <span className="hidden" ref="hidden"></span>
      </div>
      );
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
        this._addTag(val);
        break;
      };
      case 8: { // remove tag if 'del'
        if(input.value == '') this._removeTag();
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
  _addTag: function(tag) {
    let tags = this.state.tags;
    if(tag && tags.indexOf(tag) < 0) {
      tags.push(tag);
      this.setState(this._getState(tags));
    }
  },
  _removeTag: function(index) {
    let tags = this.state.tags;

    if(typeof index == 'undefined') {
      index = tags.length - 1;
    }

    tags.splice(index, 1);
    this.setState(this._getState(tags));
  },
  _getState: function(tags) {
    return {
      tags: tags,
      placeholder: "标签，如JavaScript"
      // placeholder: tags.length ? "": "标签，如JavaScript"
    };
  },
  _getElementWidth: function (elem) {
    let rect = elem.getBoundingClientRect();
    return rect.right - rect.left;
  }
});
