const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry: './src/nt-voog-tags.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
