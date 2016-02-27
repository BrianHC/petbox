import Ember from 'ember';

export default Ember.Service.extend({
  isAuthenticated: true,
  validate(){
    this.set('isAuthenticated',true);
  },
  invalidate() {
    this.set('isAuthenticated',false);
  }
});
