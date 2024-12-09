import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';

import type StoreService from '@ember-data/store'
import type SessionService from 'frontend-onboarding-template/services/session';
export default class ApplicationRoute extends Route {
    @inject("store") declare store: StoreService;
    @service declare session:SessionService;


    model() {
      return  this.store.findAll("organization-membership");

    }

    setupController(controller, model, transition) {
        super.setupController(controller, model, transition);

        const user = model[0]?.user

        this.session.setUser(user)
      }
    
}
