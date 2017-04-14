import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('story');
  },

  resetController(controller) {
    controller.get('model').rollbackAttributes();
  }
});
