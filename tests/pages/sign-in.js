import {
  clickable,
  create,
  fillable,
  text,
  visitable
} from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default create({
  visit: visitable('/sign-in'),
  username: fillable(testSelector('username')),
  password: fillable(testSelector('password')),
  submit: clickable(testSelector('action', 'sign-in')),
  errors: text(testSelector('error'), { multiple: true })
});
