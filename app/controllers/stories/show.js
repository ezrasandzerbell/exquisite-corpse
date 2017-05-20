import Ember from 'ember';
import { task } from 'ember-concurrency';


export default Ember.Controller.extend( {
  bodyInput: null,

  addSegment: task(function * () {
    // console.log(this.bodyInput);
    // console.log(this.model.id);

    // The currentUser exists on the session but I
    // can't get it to pass in as the user on the segment model
    // let thisUserName = this.get('store').find('user', this.session.content.currentUser.id);
    //
    let session = this.session.content.currentUser.username;
    console.log("its current", session);
    let segment = this.get('store').createRecord('segment', {
      user: session,
      body: this.bodyInput,
      story: this.model
    });
    // console.log('currentUser', this.session.content.currentUser);
    // console.log(segment.user.username);
    segment.save();
    // console.log(segment.user.username);
    yield segment;

    this.transitionToRoute('stories.show', this.model);
  })
});
