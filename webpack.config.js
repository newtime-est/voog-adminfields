const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry: './src/voog-tags.js',
    mode: 'production',
    target: 'web',
    resolve: {
        extensions: ['.js'],
    },
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
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-modules-commonjs']
                    }
                }
            }
        ],
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
