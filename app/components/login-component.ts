import './login-component.scss'

import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import {inject} from '@ember/service';

import type RouterService from '@ember/routing/router-service';
import type StoreService from '@ember-data/store'
import type SessionModel from 'frontend-onboarding-template/models/session';

export default class LoginComponent extends Component {
  @inject('store') declare store:StoreService;
  @inject('router') declare router:RouterService;

  @tracked email= "";
  @tracked password= "";
  
  @action
  onInputChange(event:Event){
    const target = event.target as HTMLInputElement

    this[target.id] = target.value;
  }

  @action
  async submitLogin(e:SubmitEvent) {
    e.preventDefault();

    try {
      const session = await this.store.createRecord('session', {email:this.email, password:this.password});
      const response:SessionModel = await session.save();

      localStorage.setItem('token', response?.token as string);
      this.router.transitionTo('/');
    } catch(e) {
      alert('Something went wrong.');
    }
  }
}
