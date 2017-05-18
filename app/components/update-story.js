import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryListing: false,
  actions: {
    updateRentalForm() {
      this.set('updateStoryListing', true);
    },
    update(story) {
      var params = {
        user: this.get('user'),
        title: this.get('title')
      };
      this.set('updateStoryListing', false);
      this.sendAction('update', story, params);
    }
  }
});
