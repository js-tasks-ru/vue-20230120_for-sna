import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';
//import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  
  agendaItemDefaultTitles,
  agendaItemIcons,
  
  props: {
    agendaItem: { 
	type: Object,
	requuired: true,
    }	
  },  

  computed: {
    urlIcon() {
	return `/src/assets/icons/icon-${this.$options.agendaItemIcons[this.agendaItem.type]}.svg`;
    },

    titleItem() {
        return ( this.agendaItem.title === null ) ? this.$options.agendaItemDefaultTitles[this.agendaItem.type] : this.agendaItem.title;
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="urlIcon" class="icon" alt="key" /> 
      </div>
      <div class="agenda-item__col"><time>{{ agendaItem.startsAt }}</time> - <time>{{ agendaItem.endsAt }}</time></div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ titleItem }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
