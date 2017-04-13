import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  create: task(function * () {
    let story = this.get('store').createRecord('story', { title: this.get('title') });
    yield story.save();

    this.transitionToRoute('stories.show', story);
  })
});
