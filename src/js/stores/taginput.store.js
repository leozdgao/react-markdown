import Reflux from 'reflux';
import tagActions from '../actions/taginput.action';

let tags = [];

export function getTags() {
  return tags;
}

export function setTags(newTags) {
  if(Object.prototype.toString.call(tags) == '[object Array]') {
    tags = newTags;
  }
}

export default Reflux.createStore({
  init: function() {
    this.listenToMany(tagActions);
  },
  onAddTag: function(newTag) {
    if(newTag && tags.indexOf(newTag) < 0) {
      tags.push(newTag);
      this.trigger(tags);
    }
  },
  onRemoveTag: function(index) {
    if(typeof index == 'undefined') {
      index = tags.length - 1;
    }
    tags.splice(index, 1);
    this.trigger(tags);
  }
});