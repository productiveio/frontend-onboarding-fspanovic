import './time-tracker-component.scss'

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject, service } from '@ember/service';

import type StoreService from '@ember-data/store'
import type TimeEntryModel from 'frontend-onboarding-template/models/time-entry';
import type SessionService from 'frontend-onboarding-template/services/session';

export default class TimeTrackerComponent extends Component {
  @service declare session:SessionService;

  @inject("store") declare store:StoreService;

  @tracked selectedDate = "";
  @tracked time = "";
  @tracked note = "";
  @tracked selectedService = "";
  @tracked isLoading = false;
  @tracked timeEntries:any = [];

  setSelectedDate = (e:Event) => {
    const target = e.target as HTMLSelectElement;
    const date = target.value;

    this.selectedDate = date;
    this.setTimeEntries()
  }

  setTimeEntries = async() => {
    try {
      const timeEntries = await this.store.query("time-entry", 
        {
          filter: {
            before: this.selectedDate, 
            after: this.selectedDate,
        }, 
        personId: this.session.person?.id,
      });

      this.timeEntries = timeEntries;
    } catch(e) {
      alert("Something went wrong...")
    }
  }

  setTime = (e:Event) => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.time = currentValue;
  }

  setNote = (e:Event) => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.note = currentValue;
  }

  setSelectedService = (e:Event) => {
    const target = e.target as HTMLSelectElement;
    const currentValue = target.value;

    this.selectedService = currentValue;
  };

  resetFormFields = () => {
    this.time = "";
    this.note = "";
    this.selectedService = "";
  };

  deleteEntry = async(e: MouseEvent) => {
    const target = e.target as HTMLElement;

    this.isLoading = true;

    try{
      const timeEntry:TimeEntryModel =  await this.store.findRecord('time-entry', target.id, { reload: true });

      timeEntry.destroyRecord() 
    }catch(e){
      alert("Something went wrong...")
    }finally{
      this.isLoading = false;
    }
  };

  submitTimeTracking = async(e:SubmitEvent) => {
    e.preventDefault();

    const [year, month, day] = this.selectedDate.split("-"); 
    const formattedDate = `${year}-${month}-${day}`;

    const personId = this.session.person?.id;

    if(!personId)return

    this.isLoading = true;

    try {
      let timeEntry = this.store.createRecord('time-entry', {
        note: this.note,
        date: formattedDate,
        time: this.time,
        person: this.store.peekRecord('person', personId), 
        service: this.store.peekRecord('service', this.selectedService), 
      });  

      await timeEntry.save();
      this.resetFormFields();
      await this.setTimeEntries()
      alert("Time entry added.");
    } catch (e) {
      alert("something went wrong");
    } finally {
      this.isLoading = false;
    }
  };
}
