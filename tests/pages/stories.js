import {
  collection,
  create,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';
import NavBar from 'exquisite-corpse/tests/pages/components/nav-bar';

export default create({
  visit: visitable('/'),
  navBar: NavBar,
  stories: collection({
    itemScope: testSelector('story-id')
  })
});
