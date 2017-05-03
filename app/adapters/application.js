import DS from 'ember-data';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';
import { InvalidError as AjaxInvalidError } from 'ember-ajax/errors';
import { InvalidError as DSInvalidError } from 'ember-data/adapters/errors';

export default DS.JSONAPIAdapter.extend(AjaxServiceSupport, {
  // https://github.com/ember-cli/ember-ajax/issues/224
  ajax() {
    return this._super(...arguments).catch((e) => {
      if (e instanceof AjaxInvalidError) {
        throw new DSInvalidError(e.errors);
      }

      throw e;
    });
  }
});
