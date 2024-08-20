const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'production',
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
    }
}