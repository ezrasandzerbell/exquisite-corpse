import Ember from 'ember';
import { task } from 'ember-concurrency';


export default Ember.Controller.extend( {
  bodyInput: null,
  actionPerformed: false,

  addSegment: task(function * () {

    let user = this.session.content.currentUser.username;

    let segment = this.get('store').createRecord('segment', {
      user: user,
      body: this.bodyInput,
      story: this.model
    });
    console.log("model", this.model.get('store').findAll('segment'));
    segment.save();

    yield segment;

    // if (user == ) {
    //   let segment = this.get('store').createRecord('segment', {
    //     user: user,
    //     body: this.bodyInput,
    //     story: this.model
    //   });
    //   segment.save();
    //   yield segment;
    // } else {
    //   alert("You cannot post consecutively")
    // }

    this.transitionToRoute('stories.show', this.model);
  })
});
