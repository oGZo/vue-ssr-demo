const path = require('path');

const resolve = (name) => {
    return path.join(__dirname, '..', name);
}

module.exports = {
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                include: [resolve("src")],
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [resolve("src"), resolve("test")],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                include: [resolve("src")]
            }
        ]
    },
}