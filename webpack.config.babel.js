import path from 'path';

export default {
    entry: [
        'babel-core/register',
        'babel-polyfill',
        path.join(__dirname, 'src/app.client.js')
    ],
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js',
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx', '.json'],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    }
};
