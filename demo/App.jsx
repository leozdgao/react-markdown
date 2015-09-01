import React, { PropTypes } from 'react'
import Editor from '../lib/editor'

const App = React.createClass({
  render () {
    return (
      <div className="container">
        <Editor>
          <option title="自定义按钮" onClick={this._handleClick}><i className="fa fa-bomb"></i></option>
        </Editor>
      </div>
    )
  },
  _handleClick () {
    /* eslint-disable no-alert */
    alert('这个是自定义按钮')
    /* eslint-enable no-alert */
  }
})

export default App
