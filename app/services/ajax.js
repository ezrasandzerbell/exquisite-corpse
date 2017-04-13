import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),

  headers: Ember.computed('session.apiKey', function() {
    let headers = {};

    let apiKey = this.get('session.apiKey');
    if (apiKey) {
      headers.Authorization = `Bearer ${apiKey}`;
    }

    return headers;
  })
});
