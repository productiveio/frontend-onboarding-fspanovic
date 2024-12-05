import { tracked } from '@glimmer/tracking';
import Service, { inject } from '@ember/service';
import type RouterService from '@ember/routing/router-service';

export default class SessionService extends Service {
  @tracked currentUser = null;
  @tracked isAuthenticated = false;
  @tracked token = null;
  @inject('router') declare router:RouterService;

  get isLoggedin(){
    return this.isAuthenticated
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:session')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('session') declare altName: SessionService;`.
declare module '@ember/service' {
  interface Registry {
    'session': SessionService;
  }
}
