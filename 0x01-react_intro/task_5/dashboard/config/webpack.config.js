const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',   
    
                  outputPath: 'images/',   
    
                },
              },
              'image-webpack-loader',
            ],
          },
        ],
    },
}