import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId)  {
	return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
	if (response.ok) {
	  return response.json();
	} else {
	  return response.json().then((error) => {
		throw error;
	  });
	}
	});
}	

// Требуется создать Vue приложение

const App = {
 data() {	
	return {		
		meetaps: [1,2,3,4,5], 
		selIdMeetup: 1,
		selTitleMeetup: ''		
	}
 },

 watch: {	 
	selIdMeetup: {
		immediate: true,
		handler(newValue, oldValue) 	{		
			console.log(newValue, oldValue);
			this.selIdMeetup =  newValue;

			let f = fetchMeetupById(this.selIdMeetup).then( meetups => {
				this.selTitleMeetup = meetups.title;
				console.log('meetups:');				
				console.log(meetups.title);	
			} )
		}
	}	
 }
} //app

const app = createApp(App);
const vm = app.mount("#app");