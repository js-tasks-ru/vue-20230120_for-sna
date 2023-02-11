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
		emls: [...emails], // Начальный список email-ов
		inputTxt: '' // Фильтр
	}
 },		

 computed: {
		emailsList() {	// Новый список email-ов
		   return (this.inputTxt.trim().length > 0) ? this.emls.map(ems => ({ name: ems.name, f:(ems.name.includes(this.inputTxt.trim())) ? 1 : 0 })) : this.emls;
		},
 }
} //app


const app = createApp(App);
const vm = app.mount("#app");
