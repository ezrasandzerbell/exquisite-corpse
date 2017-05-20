import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    accessDenied() {
      this.transitionTo('sign-in');
    },

    signOut() {
      this.get('session').close().then(() => this.transitionTo('sign-in'));
    }
  }
});
