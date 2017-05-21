import Ember from 'ember';
import { task } from 'ember-concurrency';


export default Ember.Controller.extend( {
  bodyInput: null,
  actionPerformed: false,

  addSegment: task(function * () {

    let username = this.session.content.currentUser.username;

    let allSegments = this.model.get('segments').then((dataList) => {
      // var dataArray = dataList;
      // var arraylength = dataArray.length;
      // var previousEntry = dataArray[arraylength-1];

      // Once previousEntry works, then I can test this conditional to see if it works

      // if (previousEntry.username !== username) {
      //   let segment = this.get('store').createRecord('segment', {
      //     username: username,
      //     body: this.bodyInput,
      //     story: this.model
      //   });
      //
      //   segment.save();
      //
      //   yield segment;
      // } else {
      //   alert("You cannot post on the same story consecutively")
      // }

    });


    let segment = this.get('store').createRecord('segment', {
      body: this.bodyInput,
      username: username,
      story: this.model
    });

    segment.save();
    yield segment;
    this.transitionToRoute('stories.show', this.model);

  })
});
