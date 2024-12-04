import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';

import type PageTitle from 'ember-page-title/template-registry';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends PageTitle, EmberTruthRegistry {}
}
