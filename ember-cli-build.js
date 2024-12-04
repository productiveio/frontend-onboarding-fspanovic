'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  const isProduction = EmberApp.env() === 'production';
  const sourceMap = !isProduction;

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    packagerOptions: {
      publicAssetURL: '/',
      webpackConfig: {
        plugins: [
          new MiniCssExtractPlugin({
            ignoreOrder: true,
          }),
        ],
        module: {
          rules: [
            // assets
            {
              test: /(node_modules\/\.embroider\/rewritten-app\/)(.*\.(png|svg|jpg|jpeg|gif|json|ico|mp3|woff2))$/i,
              type: 'asset/resource',
            },
            {
              test: /(node_modules\/\.embroider\/rewritten-app\/)(.*(?<!\.module)\.scss)$/i,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap,
                    implementation: require('sass-embedded'),
                  },
                },
              ],
            },
            {
              test: /\.module\.scss$/i,
              exclude: /node_modules((?!\/rewritten-app).)*$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap,
                    modules: {
                      mode: 'local',
                      localIdentName: isProduction
                        ? '[sha512:hash:base64:5]'
                        : '[path][name]__[local]',
                    },
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap,
                    implementation: require('sass-embedded'),
                  },
                },
              ],
            },
          ],
        },
      },
    },
    extraPublicTrees: [],
  });
};
