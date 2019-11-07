const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './public/javascript'),
        filename: 'index.bundle.js'
    },
    module: {
        rules : [
          // JavaScript/JSX Files
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          }
         
        ]
    }
      
}