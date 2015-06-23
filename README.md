## React markdown

[Demo here.](http://leozdgao.github.io/react-markdown/)

A markdown text editor written in [React](https://facebook.github.io/react/). The markdown syntax parser is the [marked](https://github.com/chjj/marked).
I try to use ES6 with Babel to write source code, but not use React ES6.
[Webpack](https://webpack.github.io) is used to bundle source code.

#### Introduction

The reusable editor component is `src/js/components/editor.react.jsx`, the content of this component is passed through prop, and the change of content will invoke the method `refreshState`, which should be a function passed as a prop, and update the state of the parent component of this editor.

3 modes are provided:

- Edit mode
- Split mode
- Preview mode

This editor support full screen editting!

#### TODO

- Make it responsive.
- Adjust it to fit as a comment editor, in this status, only provide 2 modes: edit, preview. And the initial height will be smaller.
