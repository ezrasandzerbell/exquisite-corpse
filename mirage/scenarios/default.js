export default function(server) {
  let user = server.create('user', { username: 'existing-user' });

  server.create('story', { user, title: 'Scary Stories to Tell in the Dark' });
  server.create('story', { user, title: 'Scary Stories to Tell in the Dark 2' });
  server.create('story', { user, title: 'Scary Stories to Tell in the Dark 3' });
}
