import Mirage from 'ember-cli-mirage';

export default function() {
  this.post('/accounts', function({ users }) {
    let attrs = this.normalizedRequestAttrs();

    if (users.where({ username: attrs.username }).models.length > 0) {
      return new Mirage.Response(422, {}, { errors: [{ detail: 'Username is already taken.' }] });
    }

    Object.assign(attrs, { apiKey: `totally-secure-token-for-${attrs.username}` });
    let user = users.create(attrs);

    return this.serialize(user, 'session');
  });
}
