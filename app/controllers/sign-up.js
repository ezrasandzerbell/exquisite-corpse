import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  signUp: task(function * () {
    this.set('errors', null);

    try {
      yield this.get('session')
        .open('new-account', this.getProperties('username', 'password'));

      this.setProperties({ username: null, password: null });
      this.transitionToRoute('stories');
    } catch (errors) {
      this.set('errors', errors);
    }
  })
});
