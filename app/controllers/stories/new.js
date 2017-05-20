import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  create: task(function * () {
    console.log("tester");
    let story = this.get('model');
    yield story.save();

    this.transitionToRoute('stories.show', story);
  })
});
