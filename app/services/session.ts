import Service, { inject } from '@ember/service';
import type RouterService from '@ember/routing/router-service';

export default class SessionService extends Service {
  @inject('router') declare router:RouterService;

  get token(){
    return localStorage.getItem("token")
  }

   isAuthenticated(){
   return !!localStorage.getItem("token")
  }

  logout(){
    localStorage.removeItem("token");
    this.router.transitionTo("/login")
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
