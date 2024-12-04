import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';


export default class LoginComponent extends Component {
  @tracked email= "";
  @tracked password= "";

  @action
  submitLogin(e:SubmitEvent){
    e.preventDefault()
  }
 
}
