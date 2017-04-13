import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  signIn: task(function * () {
    this.set('errors', null);

    try {
      yield this.get('session')
        .open('password', this.getProperties('username', 'password'));

      this.setProperties({ username: null, password: null });
      this.transitionToRoute('index');
    } catch (errors) {
      this.set('errors', errors);
    }
  })
});
