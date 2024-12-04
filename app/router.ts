import EmberRouter from '@embroider/router';

import config from 'frontend-onboarding-template/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
Router.map(function () {
  this.route('login');
});
