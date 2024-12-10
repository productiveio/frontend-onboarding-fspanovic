import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';

import type StoreService from '@ember-data/store'
import type SessionService from 'frontend-onboarding-template/services/session';
export default class ApplicationRoute extends Route {
    @inject("store") declare store: StoreService;
    @service declare session:SessionService;


  async model() {
    const organizationMembershipResponse = await this.store.findAll("organization-membership");
    const userId = organizationMembershipResponse[0].user.id;

    this.store.query("person", {userId});

    return organizationMembershipResponse
  }
 
  setupController(controller, model, transition) {
      super.setupController(controller, model, transition);
         
      const user = model[0]?.user;

      this.session.setUser(user);
  } 
}
