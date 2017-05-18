import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend()({
  update: task(function * () {
    let story = this.get('model');
    yield story.save();
  })
});
