const clientConfig = require('./client.config.js');
const serverConfig = require('./server.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const devtool = "#source-map";
const resolve = (name) => {
    return path.resolve(__dirname, name);
}
module.exports = [
    merge(clientConfig, {
        devtool,
        entry: {
            app: [resolve('./dev-client.js'), clientConfig.entry.app],
        },
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }), 
    merge(serverConfig, {
        devtool,
    })
];