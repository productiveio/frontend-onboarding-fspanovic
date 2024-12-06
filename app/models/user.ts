import Model, {attr, belongsTo,hasMany} from '@ember-data/model';


export default class UserModel extends Model {
  @attr('string') firstName?: string;
  @attr("string") lastName?: string;
  @attr("string") email?: string;

  @hasMany("session", {async: false, inverse: null}) sessions:any;
}
