import './login-component.scss'

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject, service } from '@ember/service';

import type RouterService from '@ember/routing/router-service';
import type StoreService from '@ember-data/store'
import type SessionModel from 'frontend-onboarding-template/models/session';
import type SessionService from 'frontend-onboarding-template/services/session';

export default class LoginComponent extends Component {
  @service declare session:SessionService;
  @tracked email= "";
  @tracked password= "";
  @inject("store") declare store:StoreService;
  @inject('router') declare router:RouterService;

  @action
  onInputChange(event:Event){
    const target = event.target as HTMLInputElement

    this[target.id] = (target).value
  }

  @action
  submitLogin(e:SubmitEvent){
    e.preventDefault();

    const session = this.store.createRecord("session", {email:this.email, password:this.password});

    session.save().then((res:SessionModel)=>{
      localStorage.setItem("token", res?.token as string) 
      this.router.transitionTo("/");
    }).catch(()=>{
      alert("Something went wrong");
    });
  }
 
}
