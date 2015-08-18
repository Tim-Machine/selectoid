var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["webpack/hot/dev-server", "./index.jsx"]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './example/index.html'
    })],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}