var path = require('path');
var webpack = require('webpack');
module.exports = {
    target: 'web',
    entry: './src/js/*.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          { 
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            }
        ],
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
              
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};