import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';

import type Transition from '@ember/routing/transition';

export default class AuthenticatedRoute extends Route {
    @inject('router') router;
    @service session;

    beforeModel(transition: Transition): Promise<unknown> | void {
        if(!this.session.isAuthenticated){
            this.router.transitionTo("/login")
        }
    }
    
}
