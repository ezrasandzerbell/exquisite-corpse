import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return `Story ${i}`; },
  user: association()
});
