import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'story.title': validator('presence', true)
});

export default Ember.Component.extend(Validations, {
  tagName: 'form',
  classNames: 'c_form',
  isInvalid: Ember.computed.not('validations.isValid'),

  submit(e) {
    e.preventDefault();

    this.get('saveTask').perform();
  }
});
