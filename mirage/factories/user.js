import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  username(i) { return `user-${i}`; },
  password: 'secret',
  apiKey() { return `totally-secure-token-for-${this.username}`; }
});
