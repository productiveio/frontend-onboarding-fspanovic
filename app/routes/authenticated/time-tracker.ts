import Route from '@ember/routing/route';
import { inject } from '@ember/service';

import type StoreService from '@ember-data/store'

export default class AuthenticatedTimeTrackerRoute extends Route {
    @inject("store") declare store:StoreService;
    
    model(){
        return this.store.findAll("people")
    }
}
