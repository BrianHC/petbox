import Ember from 'ember';

var testdata = [
{
  id:1,
  body: 'test body 1'
},
{
  id:2,
  body:'testbody 2'
}];

export default Ember.Route.extend({
  model(){
    return testdata;
  }
});
