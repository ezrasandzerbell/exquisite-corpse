import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import StoryPage from 'exquisite-corpse/tests/pages/story';
import createSession from 'exquisite-corpse/tests/helpers/create-session';

moduleForAcceptance('Acceptance | story viewing');

test('viewing a story', async function(assert) {
  createSession(this.application);
  let story = server.create('story');

  await StoryPage.visit({ id: story.id });

  assert.equal(StoryPage.title, story.title);
  assert.equal(StoryPage.creator, story.user.username);
});

test('viewing a non-existent story', async function(assert) {
  createSession(this.application);

  await StoryPage.visit({ id: 404 });

  assert.equal(currentURL(), '/');
});
