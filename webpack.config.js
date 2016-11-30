const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        vendor: ['fastclick', 'jquery', 'router', 'art-template/dist/template-debug'],
        js: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }, {
                test: /\.png|jpg|gif$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    postcss: [autoprefixer],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false},
            output: {comments: false}
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};