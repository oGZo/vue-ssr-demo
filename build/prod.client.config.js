const clientConfig = require('./client.config.js');
const serverConfig = require('./server.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const output = {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[id]-[chunkhash].js'
};

module.exports = merge(clientConfig, {
    output,
    plugins: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                ie8: true,
                compress: {
                    warnings: false,
                    drop_console: true,
                    unused: false,
                    properties: false
                },
                mangle: false
            }
        }),
    ]
});

// merge(serverConfig, {
//     output,
// });

// module.exports = [clientConfig, serverConfig];