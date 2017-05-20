import Ember from 'ember';
import { isNotFoundError } from 'ember-ajax/errors';

export default Ember.Route.extend({
  model({ story_id: storyId }) {
    return this.get('store').find('story', storyId);
  },

  segments() {
    return this.get('store').findAll('segment');
  },

  segment() {
    return this.get('store').createRecord('segment');
  },

  actions: {
    error(error) {
      if (isNotFoundError(error)) {
        this.transitionTo('stories');
      }
    }

  }
});
