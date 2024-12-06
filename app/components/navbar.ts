import Component from '@glimmer/component';
import styles from './navbar.module.scss';
import { service } from '@ember/service';
import type SessionService from 'frontend-onboarding-template/services/session';

export default class NavbarComponent extends Component {
  @service declare session:SessionService;

  styles = styles;

  get isRed() {
    return true;
  }

  handleLogout = () =>{
    this.session.logout()
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Navbar: typeof NavbarComponent;
    navbar: typeof NavbarComponent;
  }
}
