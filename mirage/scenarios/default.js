export default function(server) {
  server.create('user', { username: 'existing-user' });

  server.create('story', { title: 'Scary Stories to Tell in the Dark' });
  server.create('story', { title: 'Scary Stories to Tell in the Dark 2' });
  server.create('story', { title: 'Scary Stories to Tell in the Dark 3' });
}
