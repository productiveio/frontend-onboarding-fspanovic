import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {service} from "@ember/service";

import type StoreService from '@ember-data/store'
import type SessionService from "frontend-onboarding-template/services/session";

interface TimeTrackerFormArgs {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  selectedDate: string;
  setSelectedDate: (e: Event) => void;
  services: any;
}

export default class TimeEntryFormComponent extends Component<TimeTrackerFormArgs> {
  @service declare session:SessionService;
  @service declare store:StoreService;
  
  @tracked time = '';
  @tracked note = '';
  @tracked services:any = [];
  @tracked selectedService = '';

  @action
  setTime(e:Event) {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
  
    this.time = currentValue;
  }
  
  @action
  setNote(e:Event) {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
  
    this.note = currentValue;
  }
  
  @action
  setSelectedService(e:Event) {
    const target = e.target as HTMLSelectElement;
    const currentValue = target.value;
  
    this.selectedService = currentValue;
  }
    
  @action
  resetFormFields() {
    this.time = '';
    this.note = '';
    this.selectedService = '';
  }

  @action
  async loadServices() {
    if(this.services.length > 0){
      return;
    }

    try{
      this.services = await this.store.findAll('service');
    }catch(e){
      alert("Failed to load services.")
    }
  }

  @action
  async submitTimeTracking(e:SubmitEvent) {
    e.preventDefault();
  
    const [year, month, day] = this.args.selectedDate.split('-'); 
    const formattedDate = `${year}-${month}-${day}`;
  
    const personId = this.session.person?.id;
  
    if (!personId) {
      return;
    }
  
    this.args.setIsLoading(true);
  
    try {
      let timeEntry = this.store.createRecord('time-entry', {
        note: this.note,
        date: formattedDate,
        time: this.time,
        person: this.session.person, 
        service: this.store.peekRecord('service', this.selectedService), 
      });  
      
      await timeEntry.save();
      this.resetFormFields();
      alert('Time entry added.');
    } catch(e) {
        alert('Something went wrong');
    } finally {
        this.args.setIsLoading(false);
    }
  }
}