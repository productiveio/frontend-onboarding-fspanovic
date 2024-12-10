import Model, {attr} from '@ember-data/model';


export default class PersonModel extends Model {
  @attr('string') firstName?: string;
  @attr('string') lastName?: string;
  @attr('string') nickname?: string | null;
  @attr('string') email?: string;
  @attr('string') title?: string;
  @attr('string') colorId?: string;
  @attr('string') userId?: string;


  @attr('boolean') autotracking?: boolean;
  @attr('boolean') placeholder?: boolean;
  @attr('boolean') sampleData?: boolean;
  @attr('boolean') twoFactorAuth?: boolean;
}
