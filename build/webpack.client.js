import webpackBase from './webpack.base';
import merge from 'webpack-merge';
import path from 'path';

export default (inEnv) => {
  return merge(webpackBase(inEnv), {
    mode: 'production',
    entry: './src/client.js',
    output: {
      path: path.join(__dirname, '../dist/public'),
      filename: 'client.js'
    }
  });
};
