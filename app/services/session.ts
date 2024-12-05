import Service, { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @tracked currentUser = null;
  @tracked isAuthenticated = false;
  @tracked token = null;
  @inject('router') router;

  get isLoggedin(){
    return this.isAuthenticated
  }

  async login(email: string, password: string) {
    console.log(email, password, 'email and pw')
   
    const response = await fetch('https://api-staging.productive.io/api/v2/sessions', {
      method: 'POST',
      headers: {
        "Accept": "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
        "Content-Type": "application/vnd.api+json",
      },
      

      body: JSON.stringify({ data: {

        type: "sessions",
        attributes:{
          email,
          password
        }
      }  }),
    });

    // const { user, token } = await response.json();
    // this.currentUser = user;
    // this.token = token;
    // this.isAuthenticated = true;
    this.router.transitionTo("/")
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
