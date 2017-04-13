import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import createSession from 'exquisite-corpse/tests/helpers/create-session';
import NewStoryPage from 'exquisite-corpse/tests/pages/new-story';
import StoryPage from 'exquisite-corpse/tests/pages/story';

moduleForAcceptance('Acceptance | creating stories');

test('successful story creation', async function(assert) {
  createSession(this.application, { username: 'author' });

  await NewStoryPage
    .visit()
    .title('New Spooky Story')
    .submit();

  assert.equal(StoryPage.title, 'New Spooky Story');
  assert.equal(StoryPage.creator, 'author');
});
