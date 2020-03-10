const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        host: 'localhost',
        index: 'app-shell.html',
        open: true,
        hot: true,
        historyApiFallback: true,
        overlay: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app-shell.html',
            filename: 'app-shell.html'
        })
    ]
};
