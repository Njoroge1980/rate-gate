import DS from 'ember-data';

export default DS.Model.extend({
  Name: DS.store(),
  Cuisine: DS.store(),
  Locale: DS.store(),
  Sitting: DS.store()

});
