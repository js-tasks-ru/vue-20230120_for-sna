import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
	type: String,
	requuired: true,
    },

    place: {
	type: String,
	requuired: true,
    },	
	
    date: {
	type: Number,
	requuired: true,
    }	
  },
  
  methods: {
    formatAsIsoDate(value) {		 
	return new Date(value).toISOString().substring(0,10);  
    }, 
	 
    formatAsLocalDate(value) {		 
	return new Date(value).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) 
    }
  }, 
  
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/src/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/src/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/src/assets/icons/icon-cal-lg.svg" />
	<time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time>
      </li>
    </ul>`,
});
