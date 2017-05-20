import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo({ async: false }),
  story: DS.belongsTo('story'),
  body: DS.attr('string')
});
