import { stubValidSession } from 'exquisite-corpse/tests/helpers/torii';

export default function createSession(application, options = {}) {
  let user = server.create('user', options);

  stubValidSession(application, {
    currentUser: { id: user.id, username: user.username },
    apiKey: user.apiKey
  });
}
