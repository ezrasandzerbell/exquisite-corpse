import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  create: task(function * () {
    let story = this.get('model');
    yield story.save();
    
    this.transitionToRoute('stories.show', story);
  })
});
