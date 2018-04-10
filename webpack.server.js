const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternal = require('webpack-node-externals');

const config = {
    //special ssr setup
    target:'node',

    //root file to bundle
    entry: './src/index.js',

    //where to put the output file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //exclude node_modules
    externals:[webpackNodeExternal()]
}

module.exports = merge(baseConfig, config);