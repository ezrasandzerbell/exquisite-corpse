import Ember from 'ember';
import { isNotFoundError } from 'ember-ajax/errors';

export default Ember.Route.extend({
  model({ story_id: storyId }) {
    return this.get('store').find('story', storyId);
  },

  actions: {
    error(error) {
      if (isNotFoundError(error)) {
        this.transitionTo('stories');
      }
    }
  }
});
