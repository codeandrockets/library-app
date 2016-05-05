import Ember from 'ember';

export default Ember.Controller.extend({

	display: Ember.computed.alias('firstName'),

	firstName: '',

	actualEmailAddress: Ember.computed('firstName', function() { 
    console.log('actualFirstName function is called: ', this.get('firstName'));
	  })



});
