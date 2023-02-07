import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
			{ name: 'Eliseo@gardner.biz', f: 0 },
			{ name: 'Jayne_Kuhic@sydney.com', f: 0 },
			{ name: 'Nikita@garfield.biz', f: 0 },
			{ name: 'Lew@alysha.tv', f: 0 },
			{ name: 'Hayden@althea.biz', f: 0 },
			{ name: 'Presley.Mueller@myrl.com', f: 0 },
			{ name: 'Dallas@ole.me', f: 0 },
			{ name: 'Mallory_Kunze@marie.org', f: 0 },
			{ name: 'Meghan_Littel@rene.us', f: 0 },
			{ name: 'Carmen_Keeling@caroline.name', f: 0 },
			{ name: 'Veronica_Goodwin@timmothy.net', f: 0 },
			{ name: 'Oswald.Vandervort@leanne.org', f: 0 },
			{ name: 'Kariane@jadyn.tv', f: 0 },
			{ name: 'Nathan@solon.io', f: 0 },
			{ name: 'Maynard.Hodkiewicz@roberta.com', f: 0 },
			{ name: 'Christine@ayana.info', f: 0 },
			{ name: 'Preston_Hudson@blaise.tv', f: 0 },
			{ name: 'Vincenza_Klocko@albertha.name', f: 0 },
			{ name: 'Madelynn.Gorczany@darion.biz', f: 0 },
			{ name: 'Mariana_Orn@preston.org', f: 0 },
			{ name: 'Noemie@marques.me', f: 0 },
			{ name: 'Khalil@emile.co.uk', f: 0 },
			{ name: 'Sophia@arianna.co.uk', f: 0 },
			{ name: 'Jeffery@juwan.us', f: 0 },
			{ name: 'Isaias_Kuhic@jarrett.net', f: 0 }
		]

const App = {
 data() {	
	return {		
		ems: [...emails], 
		inputTxt: ''
	}
 },

 computed: {
		t() {	
			return this.ems.map(em => {
				em.f = ( this.inputTxt.length > 0 && em.name.includes(this.inputTxt) > 0 ) ? 1: 0;
			})

		} 
 } 

} //app


const app = createApp(App);
const vm = app.mount("#app");
