import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { create } from 'ember-cli-page-object';
import NavBar from 'exquisite-corpse/tests/pages/components/nav-bar';

const component = create(NavBar);

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true,
  beforeEach() {
    component.setContext(this);
  },

  afterEach() {
    component.removeContext();
  }
});

test('it renders the current username', function(assert) {
  this.setProperties({
    currentUser: { username: 'current-user' },
    signOut: () => {}
  });

  this.render(hbs`{{nav-bar currentUser=currentUser signOut=signOut}}`);

  assert.equal(component.currentUsername, 'current-user');
});
