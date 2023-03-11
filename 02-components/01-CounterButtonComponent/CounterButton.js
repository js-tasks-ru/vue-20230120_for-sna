import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: {
	type: Number,
	required: true,
	default: 0		
    }
  },

  emits: ['update:count'], 

  methods: {
     counter() {
	  return this.$emit('update:count', this.count + 1);
     }
  },

  template: `<button type="button" :value="count" @click="counter">{{ count }} </button>`, 

});