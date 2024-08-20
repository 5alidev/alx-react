const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    performance: {
        maxAssetSize: 1000000,
        hints: false,
        maxEntrypointSize: 1000000,
    },
}