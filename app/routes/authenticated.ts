import Route from '@ember/routing/route';
import {inject, service} from '@ember/service';

import type RouterService from '@ember/routing/router-service';
import type Transition from '@ember/routing/transition';
import type StoreService from '@ember-data/store'
import type OrganizationMembershipModel from 'frontend-onboarding-template/models/organization-membership';
import type SessionService from 'frontend-onboarding-template/services/session';

export default class AuthenticatedRoute extends Route {
    @inject('store') declare store: StoreService;
    @inject('router') declare router:RouterService;
    @service declare session:SessionService;

    beforeModel(): Promise<unknown> | void {
        if(!this.session.isAuthenticated()){
            this.router.transitionTo('/login')
        }
    }

    async model() {
        const organizationMemberships = await this.store.findAll('organization-membership');

        return organizationMemberships[0];
    }
 
    setupController(controller, model:OrganizationMembershipModel, transition:Transition) {
        super.setupController(controller, model, transition);

        const user = model.user; 
        const person = model.person

        if(!user || !person){
        return;
        }

        this.session.user = user;
        this.session.person = person;
    }  
}
