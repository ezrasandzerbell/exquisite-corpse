import { test } from 'qunit';
import moduleForAcceptance from 'exquisite-corpse/tests/helpers/module-for-acceptance';
import SignInPage from 'exquisite-corpse/tests/pages/sign-in';
import StoriesPage from 'exquisite-corpse/tests/pages/stories';

moduleForAcceptance('Acceptance | sign in');

test('successful sign in', async function(assert) {
  let user = server.create('user');

  await SignInPage
    .visit()
    .username(user.username)
    .password(user.password)
    .submit();


  assert.equal(currentURL(), '/');
  assert.equal(StoriesPage.navBar.currentUsername, user.username);
});

test('unsuccessful sign in', async function(assert) {
  await SignInPage
    .visit()
    .username('existing-user')
    .password('secret')
    .submit()

  assert.equal(SignInPage.errors.length, 1);
});
