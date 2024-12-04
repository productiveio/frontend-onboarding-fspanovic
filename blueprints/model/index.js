/* eslint-env node */
/* eslint-disable prefer-template, no-use-before-define, no-var, guard-for-in, prefer-const, quotes */

const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates an ember-data model.',

  anonymousOptions: [
    'name'
  ],

  locals(options) {
    return {
      dasherizedModuleName: `${stringUtils.dasherize(options.entity.name)}`,
      modelClass: `${stringUtils.classify(options.entity.name)}Model`
    };
  }
};
