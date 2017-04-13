import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import SignUpPage from 'exquisite-corpse/tests/pages/sign-up';
import StoriesPage from 'exquisite-corpse/tests/pages/stories';

moduleForAcceptance('Acceptance | sign up');

test('successful sign up', async function(assert) {
  await SignUpPage
    .visit()
    .username('new-user')
    .password('secret')
    .submit()

  assert.equal(currentURL(), '/');
  assert.equal(StoriesPage.navBar.currentUsername, 'new-user');
});

test('unsuccessful sign up', async function(assert) {
  server.create('user', { username: 'existing-user' });

  await SignUpPage
    .visit()
    .username('existing-user')
    .password('secret')
    .submit()

  assert.equal(SignUpPage.errors.length, 1);
});
