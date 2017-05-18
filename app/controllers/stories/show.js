import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  addon: task(function * () {
    console.log("test");
    this.transitionToRoute('stories');
  })
});
