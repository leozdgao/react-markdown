import React from 'react'
import marked from 'marked'
import Editor from './editor'

import './site.less'

const mount = document.getElementById('editor')
React.render(<Editor />, mount)

// async init highlight.js
const script = document.getElementById('hlscript')
script.onload = () => {
  window.hljs.initHighlightingOnLoad()
}
