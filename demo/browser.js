import React from 'react'
import marked from 'marked'
import App from './App'

import './site.less'
import './markdown.less'

const mount = document.getElementById('editor')
React.render(<App />, mount)

// async init highlight.js
const script = document.getElementById('hlscript')
script.onload = () => {
  window.hljs.initHighlightingOnLoad()
}
