import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

import './login-component.scss'

export default class LoginComponent extends Component {
  @service session;
  @tracked email= "";
  @tracked password= "";

  @action
  onInputChange(e:InputEvent){
    const target = e.target as HTMLInputElement
    this[target.id] = (target  as HTMLInputElement).value
  }



  @action
  submitLogin(e:SubmitEvent){
    e.preventDefault();
    this.session.login(this.email, this.password)
  }
 
}
