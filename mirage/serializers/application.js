import { underscore } from '@ember/string';
import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(attr) {
    return underscore(attr);
  },

  include() {
    const modelClass = this.schema.modelClassFor(this.type);
    return Object.keys(modelClass.belongsToAssociations).concat(
      Object.keys(modelClass.hasManyAssociations).filter(
        (key) => modelClass.hasManyAssociations[key].opts.async === false
      )
    );
  },
});
