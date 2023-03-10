import { defineComponent } from '../vendor/vue.esm-browser.js';

// failed 
import MeetupView from './MeetupView.js';

import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';

import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },
  
  props: { 
    meetupId: {
      type: Number,
      required: true,
    },
  },
  
  data() {
    return {
      selMeetup: {},
      err: '', 
      st_onload: 0,
    };
  },  
  
  created() {  
	  this.currentMeetups(this.meetupId);
  },

  watch: {	 
	meetupId(newValue, oldValue) {
//	  console.log('');	 	  	
//	  console.log('watch meetupId '+newValue, oldValue);
//	  console.log('watch begin st_onload '+this.st_onload);	
	  
	  this.currentMeetups(newValue);

//	  console.log('watch end st_onload '+this.st_onload);
//	  console.log('');	  
	}	  
  },
  
  methods: {
	is_not_empty(obj) {
	   for (var i in obj) { 
		  if (obj.hasOwnProperty(i)) { return true;  }
	   }
	   return false;
	},
	
	currentMeetups(meetupId) {
	  this.st_onload = 0;	  
	  fetchMeetupById(meetupId).then(  
	     meetups => { 
		  this.selMeetup = meetups; this.err = ''; this.st_onload = 2;	  		 				 
//		  console.log('currentMeetups meetups st_onload '+this.st_onload);		  	  		 
		 },
	     error => { 
                  this.selMeetup = {}; this.err = error.message; this.st_onload = 3;	  		 				 
//		  console.log('currentMeetups error st_onload '+this.st_onload);		  	  		 				 
		 }
	  )	
	}		
  },  
  
  template: `
    <div class="page-meetup">
      <MeetupView v-if="this.st_onload && is_not_empty(this.selMeetup)" :meetup="selMeetup" />
	  
      <UiContainer v-else-if="!this.st_onload">
        <UiAlert :text="'Загрузка...'"></UiAlert>
      </UiContainer>
 
      <UiContainer v-else-if="err.length">
        <UiAlert :text="this.err"></UiAlert>
      </UiContainer>
    </div>`,	  
});	