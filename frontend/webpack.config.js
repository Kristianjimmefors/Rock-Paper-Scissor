
module.exports = {
  entry: './script.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        },
        test: /\.jsx$/
      },
      {
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.jsx$/
      }
    ]
  },
};
