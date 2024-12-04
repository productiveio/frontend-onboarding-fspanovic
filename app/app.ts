import Ember from 'ember';
import Application from '@ember/application';
import * as EString from '@ember/string';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import config from 'frontend-onboarding-template/config/environment';
// @ts-expect-error runtime polyfill
Ember.String = EString; // polyfill ember string to fix some deprecations

import './assets/styles/app.scss';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
