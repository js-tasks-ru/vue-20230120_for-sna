import { createApp } from './vendor/vue.esm-browser.js';

const App = {
 data() {	
	return {
		inputOne: 0,
		inputTwo: 0,
		selOperator: 'sum'
	} 
 },
 
 computed: {
	Result() {	
		if (this.selOperator === 'sum') { return (this.inputOne + this.inputTwo) }
			else if (this.selOperator == 'subtract') { return (this.inputOne - this.inputTwo) }
				else if (this.selOperator == 'multiply') { return (this.inputOne * this.inputTwo) }
					else if (this.selOperator == 'divide') { return (this.inputOne / this.inputTwo) }
						else return 0;
	} 
 }
} //App


const app = createApp(App);
const vm = app.mount("#app");