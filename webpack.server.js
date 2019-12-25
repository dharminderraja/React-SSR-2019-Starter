const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webPackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we are building a bundle for nodeJS, not browser
    target: 'node',

    // Tell webpack the root file of our server app
    entry: './src/index.js',

    // Tell webpack where to put generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webPackNodeExternals()]
};

module.exports = merge(baseConfig,config);