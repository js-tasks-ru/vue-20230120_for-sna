import { createApp } from './vendor/vue.esm-browser.js';
//import { createApp } from 'vue.esm-browser.js';

//import * as Vue from './vue.esm-browser.js';



// Создайте Vue приложение
const App = {
 data() {	
	return {
		counter: 0,
	} 
 }
 
} //app

//Vue.createApp(App).mount("#app")
const app = createApp(App);
const vm = app.mount("#app");
