import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo({ async: false }),
  body: DS.attr('string')
});
