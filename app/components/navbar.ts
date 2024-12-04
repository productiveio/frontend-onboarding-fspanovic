import Component from '@glimmer/component';

import styles from './navbar.module.scss';

export interface INavbarSignature {
  Element: HTMLElement;
  Args: {};
  Blocks: {
    default: [];
  };
}

export default class NavbarComponent extends Component<INavbarSignature> {
  styles = styles;

  get isRed() {
    return true;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Navbar: typeof NavbarComponent;
    navbar: typeof NavbarComponent;
  }
}
