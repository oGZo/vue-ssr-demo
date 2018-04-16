const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const NODE_ENV = process.env.NODE_ENV === 'production' ? '"production"' : '"develop"';
const resolve = (name) => {
    return path.join(__dirname, '..', name);
}

module.exports = merge(baseConfig, {
    entry:  {
        app: resolve('src/entry-client.js')
    },
    plugins: [
        new VueSSRClientPlugin(),
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': '"client"',
            'process.env.NODE_ENV': NODE_ENV,
        })
    ]
});