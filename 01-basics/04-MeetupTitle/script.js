import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

// Требуется создать Vue приложение

const App = {
 data() {	
	return {		
		meetaps: [1,2,3,4,5], 
		selMeetup: 1
	}
 },

 watch: {
	selMeetup(newValue, oldValue) 	{
		console.log(newValue, oldValue);
		
		let res = await this.fetchMeetupById(newValue);
	
		console.log(res.title);
	},
	
 },

methods: {
	fetchMeetupById(meetupId) {
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
},


} //app



const app = createApp(App);
const vm = app.mount("#app");



