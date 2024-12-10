import './time-tracker-component.scss'

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
  };

  resetFormFields = () =>{
    this.time = "";
    this.note = "";
    this.selectedService = "";
  }

  submitTimeTracking = async(e:SubmitEvent) =>{
    e.preventDefault();

    const [year, month, day] = this.selectedDate.split("-"); 
    const formattedDate = `${year}-${month}-${day}`;

    try{
      let timeEntry = this.store.createRecord('time-entry', {
        note: this.note,
        date: formattedDate,
        time: this.time,
        person: this.store.peekRecord('person', '13532'), 
        service: this.store.peekRecord('service', this.selectedService), 
      });  

      await timeEntry.save();
      this.resetFormFields();
      alert("Time entry added.");
    }catch(e){
      alert("something went wrong");
    }
  }
}
