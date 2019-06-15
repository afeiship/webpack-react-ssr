import path, { join } from 'path';

export default {
  mode: 'development',
  entry: './src/app-client.js',
  output: {
    path: join(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
