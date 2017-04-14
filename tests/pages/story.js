import {
  create,
  text,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/:id'),
  title: text(testSelector('title')),
  creator: text(testSelector('creator'))
});
