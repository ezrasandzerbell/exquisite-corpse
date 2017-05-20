import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  bodyInput: null,
  // submit(e) {
  //   e.preventDefault();
  //   let segment = this.get('store').createRecord('segment');
  //
  // }
  addSegment: task(function * () {
    // I need to add a segment to the story that already exists.

      console.log('story', this.story.segments);
      let segment = this.get('store').createRecord('segment', {
        body: this.bodyInput,
        story: this.story
      });
      // yield segment;
      // let segment = this.get('segment');
      // yield segment.save();
      // this.transitionToRoute('stories.show', story);
    })
});
