import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  segments: DS.hasMany('segment'),
  stories: DS.hasMany('story')
});
