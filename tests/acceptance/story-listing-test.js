import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import createSession from 'exquisite-corpse/tests/helpers/create-session';
import StoriesPage from 'exquisite-corpse/tests/pages/stories';

moduleForAcceptance('Acceptance | story listing');

test('listing stories', async function(assert) {
  createSession(this.application);
  server.createList('story', 3);

  await StoriesPage.visit();

  assert.equal(StoriesPage.stories().count, 3);
});
