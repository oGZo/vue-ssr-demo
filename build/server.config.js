const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const resolve = (name) => {
    return path.join(__dirname, '..', name);
}

module.exports = merge(baseConfig, {
    entry:  {
        app: resolve('src/entry-server.js')
    },
    target: 'node',
    output: {
      libraryTarget: 'commonjs2'
    },
    // https://webpack.js.org/configuration/externals/#externals
    // https://github.com/liady/webpack-node-externals
    externals: nodeExternals({
      // do not externalize CSS files in case we need to import it from a dep
      whitelist: /\.(css|vue)$/
    }),
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_ENV': '"server"',
        'process.env.NODE_ENV': '"production"',
      }),
      new VueSSRServerPlugin(),
    ]
});