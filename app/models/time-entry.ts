import Model, {attr, belongsTo} from '@ember-data/model';

import type OrganizationMembershipModel from './organization-membership';
import type PersonModel from './person';
import type ServiceModel from './service';

export default class TimeEntryModel extends Model {
  @attr('date') createdAt?: Date;
  @attr('number') time?: number;
  @attr('number') billableTime?: number;
  @attr('string') note?: string;
  @attr('boolean') approved?: boolean;
  @attr('date') approvedAt?: Date;
  @attr('boolean') rejected?: boolean;
  @attr('date') rejectedAt?: Date;
  @attr('string') rejectedReason?: string;
  @attr('date') timerStartedAt?: Date;
  @attr('date') timerStoppedAt?: Date;
  @attr('date') startedAt?: Date | null;
  @attr('string') trackMethodId?: string;
  @attr('date') updatedAt?: Date;
  @attr('boolean') invoiced?: boolean;
  @attr('string') calendarEventId?: string;
  @attr('boolean') overhead?: boolean;
  @attr('date') lastActivityAt?: Date;
  @attr("string") date?: string;

  @belongsTo('organization-membership', {async: false, inverse: null}) organizationMembership?: OrganizationMembershipModel;
  @belongsTo('person', {async: false, inverse: 'timeEntries'}) person?: PersonModel;
  @belongsTo('service', {async: false, inverse: null}) service?: ServiceModel;
}