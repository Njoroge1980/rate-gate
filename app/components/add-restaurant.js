import Ember from 'ember';

export default Ember.Component.extend({

  addNewRestaurant: false,
  actions: {
    newRestaurantForm() {
      this.set('addNewRestaurant', true);
    },

    saveRestaurant() {
      var params = {
        name: this.get('name') || "",
        cuisine: this.get('cuisine') || "",
        location: this.get('location') || "",
        sitting: this.get('sitting') || "",
      };
      this.set('addNewRestaurant', false);
      this.sendAction('saveRestaurant', params);
    }
  }
});
