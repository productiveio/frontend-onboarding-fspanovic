import Model, {attr} from '@ember-data/model';


export default class PeopleModel extends Model {
  @attr('string') email?: string;
  @attr('string') firstName?: string;
  @attr('string') lastName?: string;
  @attr('number') userId?: string;

}
