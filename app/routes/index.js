import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return
    restaurants: this.store.findAll('restaurant')
  }
});
