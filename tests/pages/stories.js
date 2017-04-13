import {
  create,
  visitable
} from 'ember-cli-page-object';
import NavBar from 'exquisite-corpse/tests/pages/components/nav-bar';

export default create({
  visit: visitable('/'),
  navBar: NavBar
});
