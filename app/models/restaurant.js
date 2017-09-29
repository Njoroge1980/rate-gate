import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cuisine: DS.attr(),
  locale: DS.attr(),
  sitting: DS.attr()

});
