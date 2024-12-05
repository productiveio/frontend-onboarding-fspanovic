import './login-component.scss'

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject, service } from '@ember/service';
import type RouterService from '@ember/routing/router-service';
import type StoreService from '@ember-data/store'
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

    try{
      const session = this.store.createRecord("session", {email:this.email, password:this.password});

      session.save().then((res:any)=>{
        localStorage.setItem("token", res?.token) 
        this.router.transitionTo("/");
      }).catch((e:any)=>{
        alert("Something went wrong");
        console.log(e)
      });
    }catch(e){
      console.log(e)
    }
  }
 
}
