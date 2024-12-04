import Component from '@glimmer/component';
import {get} from '@ember/helper';

import styles from './title.module.scss';

export interface ITitleSignature {
  Element: HTMLHeadingElement;
  Args: {
    size?: 'small' | 'medium' | 'large';
  };
  Blocks: {
    default: [];
  };
}

const SizeClassMap = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

export default class TitleComponent extends Component<ITitleSignature> {
  get size() {
    return this.args.size ?? 'large';
  }

  <template>
    <h1
      class="{{styles.title}} {{get SizeClassMap this.size}}"
      ...attributes
    >
      {{yield}}
    </h1>
  </template>
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Title: typeof TitleComponent;
    title: typeof TitleComponent;
  }
}
