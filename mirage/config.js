import Mirage from 'ember-cli-mirage';

function authenticated(callback) {
  return function(schema, request) {
    let authHeader = request.requestHeaders.Authorization;
    let apiKey = authHeader && authHeader.split(' ')[1];
    let user = apiKey && schema.users.where({ apiKey }).models[0];

    if (!user) {
      return new Mirage.Response(401, { 'Content-Type': 'text/plain' }, '');
    }

    return callback.call(this, schema, request, user);
  };
}

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

  this.post('/sessions', function({ users }) {
    let attrs = this.normalizedRequestAttrs();
    let [user] = users.where({ username: attrs.username, password: attrs.password }).models;

    if (!user) {
      return new Mirage.Response(422, {}, { errors: [{ detail: 'Incorrect username or password' }] });
    }

    return this.serialize(user, 'session');
  });

  this.get('/stories');
  this.get('/stories/:id');
  this.post('/stories', authenticated(function({ stories }, _, user) {
    let attrs = Object.assign(this.normalizedRequestAttrs(), { user });

    return stories.create(attrs);
  }));
}
