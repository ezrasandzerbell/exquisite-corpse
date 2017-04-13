import Ember from 'ember';
import RSVP from 'rsvp';

const SESSION_KEY = 'session';

export default Ember.Object.extend({
  open({id, attributes: { username, 'api-key': apiKey } }) {
    let session = { apiKey, currentUser: { id, username } };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return Ember.Object.create(session);
  },

  fetch() {
    return new RSVP.Promise((resolve, reject) => {
      let rawSession = window.localStorage.getItem(SESSION_KEY);
      if (!rawSession) {
        reject();
      }

      let session = JSON.parse(rawSession);
      resolve(Ember.Object.create(session));
    });
  },

  close() {
    window.localStorage.removeItem(SESSION_KEY);
  }
});
