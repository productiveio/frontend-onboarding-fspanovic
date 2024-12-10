import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject, service } from '@ember/service';

import type StoreService from '@ember-data/store'
import type SessionService from 'frontend-onboarding-template/services/session';

export default class TimeTrackerComponent extends Component {
  @tracked selectedDate = "";
  @tracked time = "";
  @tracked note = "";
  @tracked selectedService = "";

  @service declare session:SessionService;

  @inject("store") declare store:StoreService;


  setSelectedDate = (e:Event) =>{
    const target = e.target as HTMLSelectElement;
    const currentValue = target.value;

    this.selectedDate = currentValue;
  }

  setTime = (e:Event) =>{
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.time = currentValue;
  }

  setNote = (e:Event) => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.note = currentValue;
  }

  setSelectedService = (e:Event) =>{
    const target = e.target as HTMLSelectElement;

    const currentValue = target.value;

    this.selectedService = currentValue;
  }

  submitTimeTracking = (e:SubmitEvent) =>{
    e.preventDefault();
    // date, service id, person id , noter

    const [year, month, day] = this.selectedDate.split("-"); 

    const formattedDate = `${day}-${month}-${year}`;
    
    try{
      const timeTracker = this.store.createRecord("time-entry", {
        date: formattedDate,
        serviceId: this.selectedService,
        // personId: ,
        note: this.note,
      })
      
    }catch(e){
      alert("Something went wrong");
    }
  }
}
