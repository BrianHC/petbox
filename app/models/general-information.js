import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('string'),
  weight: DS.attr('string'),
  species: DS.attri('string')
});
