/*
entry : first file that webpack is looking for to start your application (root component)
output : result of webpack compiling all your "resolved files" in 1 uniq file called "bundle.js"
alias : list of jsx files path to import easily each one of them by just typing the filename


*/

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
