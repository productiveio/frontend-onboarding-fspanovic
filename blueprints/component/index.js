/* eslint-env node */
/* eslint no-console: 0, no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */
const {getAppRoot, getComponentFilePath, getStyleFilePath, dasherize, componentPathToTemplateName} = require('../utils');
const path = require('path');

module.exports = {
  description: 'Generates a component.',

  availableOptions: [{
    name: 'bundle',
    type: String
  }, {
    name: 'template-only',
    type: Boolean
  }],

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        return options.locals.path;
      }
    };
  },

  locals(options) {
    let fullPath = options.bundle ?
      path.join(`${options.bundle}-bundle`, options.entity.name) :
      options.entity.name;
    let componentName = componentPathToTemplateName(fullPath);


    return {
      componentName,
      fullPath,
      path: `${getAppRoot(options)}/${getComponentFilePath(options)}`,
      stylePath: `${getAppRoot(options)}/${getStyleFilePath(options)}`,
      fullDasherizedModuleName: dasherize(options.entity.name),
      templateOnly: options.templateOnly
    };
  }
};
