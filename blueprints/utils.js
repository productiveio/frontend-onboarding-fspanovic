/* eslint-env node */

const fs = require('fs');
const path = require('path');

/**
 * Returns root path depending if it is bundle or core.
 */
function getAppRoot(options) {
  if (options.bundle) {
    return path.join('lib', `${options.bundle}-bundle`, 'addon');
  }

  return 'app';
}

function getTestRoot(options) {
  if (options.bundle) {
    return path.join('tests', `${options.bundle}-bundle`);
  }

  return 'tests';
}

/**
 * Returns second part of full component file path.
 */
function getComponentFilePath(options) {
  if (options.bundle) {
    const bundlePath = `${options.bundle}-bundle`;
    const bundleLocalComponentPath = {
      'deal-modal-bundle': 'deal',
      'invoice-modal-bundle': 'invoice',
      'person-modal-bundle': 'person-modal',
      'konva-bundle': 'konva'
    }[bundlePath] || bundlePath;

    return path.join('components', bundleLocalComponentPath, options.entity.name);
  }

  return path.join('components', options.entity.name);
}

/**
 * Returns second part of full component style file path.
 */
function getStyleFilePath(options) {
  const entityPath = options.entity.name.split('/').slice(0, -1).join('/');

  if (options.bundle) {
    return path.join('styles', 'components', `${options.bundle}-bundle`, entityPath);
  }

  return path.join('styles', 'components', entityPath);
}

function readFile(file) {
  return fs.readFileSync(file, {encoding: 'utf-8'})
    .split('\n')
    .filter((line) => line && !line.startsWith('//'));
}

function writeFile(file, content) {
  fs.writeFileSync(file, content, {encoding: 'utf-8'});
}

/**
 * Returns component path formatted as template name.
 *
 * admin-bundle/export/popover would be returned as AdminBundle::Export::Popover
 */
function componentPathToTemplateName(componentPath) {
  return componentPath.slice(0, 1).toUpperCase() + componentPath.slice(1).replace(/[-/][a-z]/g, (group) => {
    if (group[0] === '-') {
      return group[1].toUpperCase();
    }

    return `::${group[1].toUpperCase()}`;
  });
}

function camelize(string) {
  return string.replace(/[-_\s./](.)/g, (_, c) => c?.toUpperCase() ?? '');
}

function classify(string) {
  return `${string[0].toUpperCase()}${camelize(string.slice(1))}`;
}

function dasherize(string) {
  return string.replace(/[/]/g, '-');
}

module.exports = {
  getAppRoot,
  getTestRoot,
  getComponentFilePath,
  getStyleFilePath,
  componentPathToTemplateName,
  readFile,
  writeFile,
  classify,
  dasherize,
  camelize
};
