import Ember from 'ember';
import { isInvalidError } from 'ember-ajax/errors';

export default Ember.Object.extend({
  ajax: Ember.inject.service(),

  open({ username, password }) {
    return this.get('ajax').post('/sessions', {
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      data: {
        data: {
          type: 'session',
          attributes: { username, password }
        }
      }
    }).then(
      ({ data }) => data,
      (error) => {
        if (isInvalidError(error)) {
          throw error.errors.map((e) => e.detail);
        } else {
          throw ['There was an error processing your request.'];
        }
      }
    );
  }
});
