import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  story: DS.belongsTo('story'),
  body: DS.attr('string')
});
