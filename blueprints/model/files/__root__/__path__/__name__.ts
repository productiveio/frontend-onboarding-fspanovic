import Model, {attr, hasMany, belongsTo} from '@ember-data/model';

import type OrganizationModel from 'frontend-onboarding-template/models/organization';

export default class <%= modelClass %> extends Model {
  @attr('string') name?: string;

  @belongsTo('organization', { async: false, inverse: null })
  organization?: OrganizationModel;
}
