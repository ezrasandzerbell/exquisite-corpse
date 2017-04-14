import {
  clickable,
  collection,
  create,
  fillable,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/new'),
  title: fillable(testSelector('title')),
  submit: clickable(testSelector('action', 'create')),
  errors: collection({
    itemScope: testSelector('error')
  })
});
