import Model, { attr, belongsTo } from '@ember-data/model';

import type OrganizationMembershipModel from './organization-membership';


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


  @belongsTo('organization-membership', {async: false, inverse: null}) organizationMembership?: OrganizationMembershipModel;
}
