import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';

import type Transition from '@ember/routing/transition';
import type RouterService from '@ember/routing/router-service';
import type SessionService from 'frontend-onboarding-template/services/session';

export default class AuthenticatedRoute extends Route {
    @inject('router') declare router:RouterService;
    @service declare session:SessionService;

    beforeModel(transition: Transition): Promise<unknown> | void {
        if(!this.session.isAuthenticated){
            this.router.transitionTo("/login")
        }
    }
    
}
