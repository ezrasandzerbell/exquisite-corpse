import { text } from 'ember-cli-page-object';
import testSelector from 'ember-test-selectors';

export default {
  currentUsername: text(testSelector('current-username'))
};
