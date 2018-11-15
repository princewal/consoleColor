const path = require('path');

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   mode: 'development',
   watch: true,
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         }
       ]
    },
}