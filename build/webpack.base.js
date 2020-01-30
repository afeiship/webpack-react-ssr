export default (inEnv) => {
  return {
    mode:'production',
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
};
