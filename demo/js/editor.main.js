import React from 'react'
import marked from 'marked'
import highlight from 'highlight'
import EditorForm from './components/form.react'

highlight.configure({
  tabReplace: '  ',
  languages: ['html', 'css', 'javascript']
})

marked.setOptions({
  highlight: function (code, lang) {
    let obj = lang ? highlight.highlight(lang, code) : highlight.highlightAuto(code)
    return obj.value
  }
})

let mount = document.getElementById('editor')
React.render(<EditorForm postUrl={0} />, mount)
