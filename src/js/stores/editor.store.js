import Reflux from 'reflux';
import editorActions from '../actions/editor.action';
import {parse} from '';

export default Reflux.createStore({
  init: function() {
    this.listenToMany(editorActions);
  },
  onUpdatePreview: function(input) {
    let content = parse(input);
    this.trigger({content: content, input: input);
  }
});