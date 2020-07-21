const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js' ),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve( __dirname , 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.vue'
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config;