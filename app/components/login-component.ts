import './login-component.scss'

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject, service } from '@ember/service';
import type StoreService from '@ember-data/store'

export default class LoginComponent extends Component {
  @service session;
  @tracked email= "";
  @tracked password= "";
  @inject("store") declare store:StoreService;

  @action
  onInputChange(e:InputEvent){
    const target = e.target as HTMLInputElement
    this[target.id] = (target).value
  }

  @action
  submitLogin(e:SubmitEvent){
    e.preventDefault();
    try{
      const session = this.store.createRecord("session", {email:this.email, password:this.password})
      session.save()
    }catch(e){
      console.log(e)
    }
  }
 
}
