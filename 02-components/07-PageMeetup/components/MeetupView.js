import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupAgenda from './MeetupAgenda.js'; 
import MeetupAgendaItem from './MeetupAgendaItem.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
	MeetupCover, 
	MeetupDescription,
	MeetupInfo,
	MeetupAgenda,
	MeetupAgendaItem,	
	UiAlert,
	UiContainer, 
  },

  props: { 
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div v-if="meetup" >
      <!-- meetup cover-->
      <MeetupCover :title="meetup.title" :image="meetup.image" />	  	  	  
	  
      <UiContainer>		
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
       	    <MeetupDescription  :description="meetup.description" />
			
            <h3>Программа</h3>
            <!-- meetup agenda  -->
	        <MeetupAgenda v-if="this.meetup.agenda" :agenda="meetup.agenda" />
            <UiAlert v-else :text="'Программа пока пуста...'"></UiAlert>						
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->			
		    <MeetupInfo
		        :organizer="meetup.organizer"
		        :place="meetup.place"
		        :date="meetup.date"
		    />			
          </div>
        </div>	  
      </UiContainer>
    </div>`,
});