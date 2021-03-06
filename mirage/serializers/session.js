import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  attrs: ['id', 'username', 'apiKey'],
  typeKeyForModel() { return 'session' }
});
