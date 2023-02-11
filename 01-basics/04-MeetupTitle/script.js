import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
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
     selIdMeetup: 1,
     selTitleMeetup: ''		
   }
 },

 watch: {	 
   selIdMeetup(newValue, oldValue) {		
     fetchMeetupById(newValue).then( meetups => { this.selTitleMeetup = meetups.title; })
   }
 }
} //app

const app = createApp(App);
const vm = app.mount("#app");