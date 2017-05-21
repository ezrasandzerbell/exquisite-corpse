import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: false }),
  title: DS.attr('string'),
  segments: DS.hasMany('segment')
});
