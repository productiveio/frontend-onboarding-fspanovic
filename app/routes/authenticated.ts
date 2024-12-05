import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';
import { inject, service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
    @inject('router') router;
    @service session;

    beforeModel(transition: Transition): Promise<unknown> | void {
        if(!this.session.isAuthenticated){
            this.router.transitionTo("/login")
        }
    }
    
}
