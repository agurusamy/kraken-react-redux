const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'public');

const WebpackConfig = {

    entry: APP_DIR + '/main.js',
    devtool: 'source-map',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: 'kraken-react-redux'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /.js$/,
                exclude: /node_modules/,
                include : APP_DIR,
                options: {
                    presets: [ 'env', 'react' ]
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }
        ]}]
    },

};

// webpack production config.
if ( process.env.NODE_ENV === 'production' ) {

    WebpackConfig.externals = {
        'react': 'react',
        'react-dom': 'react-dom'
    };

    WebpackConfig.plugins = [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
    ];

}

module.exports = WebpackConfig;
