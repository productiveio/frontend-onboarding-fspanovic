import '../../components/time-tracker-component.scss'

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Route from '@ember/routing/route';
import {inject, service} from '@ember/service';

import type Controller from '@ember/controller';
import type Transition from '@ember/routing/transition';
import type StoreService from '@ember-data/store'
import type SessionService from 'frontend-onboarding-template/services/session';

export default class AuthenticatedTimeTrackerRoute extends Route {
    @inject('store') declare store: StoreService;
    @service declare session:SessionService;

    @tracked selectedDate = "";
    @tracked isLoading = false;

    async model(){
      const services = await this.store.findAll('service');

      return {services};
    }

    get timeEntries() {
        return this.store.query('time-entry', 
        {
          filter: {
            before: this.selectedDate, 
            after: this.selectedDate,
        }, 
        personId: this.session.person?.id,
      });
    }

    setupController(controller: Controller, model: any, transition: Transition): void {
      super.setupController(controller, model, transition);

      controller.set('route', this);
      controller.set('session', this.session);
    }

    @action
    setIsLoading(value: boolean) {
      this.isLoading = value;
    }

    @action
    setSelectedDate(e:Event) {
      const target = e.target as HTMLSelectElement;
      const date = target.value;
  
      this.selectedDate = date;
      this.setTimeEntries();
    }
  
    @action
    async setTimeEntries() {
      try {
        await this.store.query('time-entry', 
          {
            filter: {
              before: this.selectedDate, 
              after: this.selectedDate,
          }, 
          personId: this.session.person?.id,
        });
      } catch (e) {
        alert('Something went wrong...')
      }
    }
}
