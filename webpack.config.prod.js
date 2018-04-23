const path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./app/frontend/app.js'],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
