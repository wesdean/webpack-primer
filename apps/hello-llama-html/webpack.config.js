module.exports = {
  entry: './hello-llama-html.js',
  output: {
    filename: 'hello-llama-html.bundle.js',
    path: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};