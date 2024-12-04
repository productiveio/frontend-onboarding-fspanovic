<% if (templateOnly) { %>import templateOnlyComponent from '@ember/component/template-only';
<% } else { %>import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import {inject} from '@ember/service';
<% } %>
export interface I<%= classifiedModuleName %>Signature {
  Element: HTMLDivElement
  Args: {
    items: string[]
  }
  Blocks: {
    default: [greeting: string]
  }
}
<% if (templateOnly) { %>
const <%= classifiedModuleName %>Component = templateOnlyComponent<I<%= classifiedModuleName %>Signature>();

export default <%= classifiedModuleName %>Component;
<% } else { %>
// If unused delete this file (that makes this component template-only)
export default class <%= classifiedModuleName %>Component extends Component<I<%= classifiedModuleName %>Signature> {

}
<% } %>
declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    '<%= componentName %>': typeof <%= classifiedModuleName %>Component
    '<%= fullPath %>': typeof <%= classifiedModuleName %>Component
  }
}
