import Model, {attr, belongsTo} from '@ember-data/model';


export default class SessionModel extends Model {
  @attr('string') token?: string;
  @attr('string') userId?: string;

  @attr("string") email?: string;
  @attr("string") password?: string

  @belongsTo("user", {async: false, inverse: null}) user:any;
}
