import Ember from 'ember';

export default Ember.Route.extend({
  model({ story_id: storyId }) {
    return this.get('store').find('story', storyId);
  }
});
