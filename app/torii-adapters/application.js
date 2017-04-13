import Ember from 'ember';

export default Ember.Object.extend({
  open({id, attributes: { username, 'api-key': apiKey } }) {
    return Ember.Object.create({
      apiKey,
      currentUser: { id, username }
    });
  }
});
