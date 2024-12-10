import Model, {attr, belongsTo} from '@ember-data/model';

import type PersonModel from './person';
import type UserModel from './user';


export default class OrganizationMembershipModel extends Model {
  @attr('string') updatedAt?: string;
  
  @belongsTo('user', {async: false, inverse: 'organizationMemberships'}) user?: UserModel;
  @belongsTo('person', {async: false, inverse: null}) person?: PersonModel;
}
