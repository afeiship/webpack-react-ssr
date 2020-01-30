import webpackBase from './webpack.base';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

export default (inEnv) => {
  return merge(webpackBase(inEnv), {
    entry: './src/server.js',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'server.js'
    },
    target: 'node',
    externals: [nodeExternals()]
  });
};
