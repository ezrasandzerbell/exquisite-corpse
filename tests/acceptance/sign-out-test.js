import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import createSession from 'exquisite-corpse/tests/helpers/create-session';
import StoriesPage from 'exquisite-corpse/tests/pages/stories';

moduleForAcceptance('Acceptance | sign out');

test('signing out', async function(assert) {
  createSession(this.application);

  await StoriesPage
          .visit()
          .navBar.signOut();

  assert.equal(currentURL(), '/sign-in');
});
