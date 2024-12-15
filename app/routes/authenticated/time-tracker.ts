import '../../components/time-tracker-component.scss'

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Route from '@ember/routing/route';
import {inject, service} from '@ember/service';

import type Controller from '@ember/controller';
import type RouterService from '@ember/routing/router-service';
import type Transition from '@ember/routing/transition';
import type StoreService from '@ember-data/store'
import type SessionService from 'frontend-onboarding-template/services/session';

export default class AuthenticatedTimeTrackerRoute extends Route {
  queryParams = {
    date: {
      refreshModel: true, 
    },
  };

  @inject('store') declare store: StoreService;
  @service declare session:SessionService;
  @service declare router:RouterService;

  @tracked isLoading = false;

  async model(params) {
    const date = params.date;

    if(!date){
      return;
    }

    this.store.query('time-entry',  {
      filter: {
        before: date, 
        after: date,
      },
    });

    const services = await this.store.findAll('service');

    return {services};
  }

  get timeEntries() {
    const params = this.router.currentRoute.queryParams;

    const date = params.date;

    return this.store.peekAll('time-entry').slice().filter((entry) => {
      return entry.date === date;
    });
  }

  get selectedDate() {
    return this.router.currentRoute.queryParams.date || '';
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
  
    this.router.transitionTo({queryParams: {date}});
  }
}
