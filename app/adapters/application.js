import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = "api/v2";
    host = "https://api-staging.productive.io";
    headers = this.headers

    pathForType(modelName) {
        return pluralize(underscore(modelName));
    }

    get headers(){
        return{
            "X-Auth-token": 'sdads',
            "Accept": "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
            "Content-Type": "application/vnd.api+json",
            "X-Organization-Id": "535"
        }
    }
}
