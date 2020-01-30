import path, { join } from 'path';

export default (inEnv) => {
  const { NODE_ENV } = process.env;
  return require(`./build/webpack.${NODE_ENV}.js`).default(inEnv);
};
