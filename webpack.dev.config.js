module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: ['', '.js', 'jsx', 'json']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}