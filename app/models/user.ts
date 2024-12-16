import Model, {attr,hasMany, type SyncHasMany} from '@ember-data/model';

import type OrganizationMembershipModel from './organization-membership';
import type SessionModel from './session';

export default class UserModel extends Model {
  @attr('string') firstName?: string;
  @attr('string') lastName?: string;
  @attr('string') email?: string;
  @attr('string') defaultOrganizationId?: number;

  @hasMany('string', {async: false, inverse: null}) sessions?: SessionModel;
  @hasMany('organization-membership', {async: false, inverse: 'user'}) organizationMemberships?: SyncHasMany<OrganizationMembershipModel>;
}
