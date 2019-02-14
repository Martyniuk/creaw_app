const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry:   './src/App.js',
    output:  {
        path:     path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:     {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use:  [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            modules: true,
                        },
                    }
                ],
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot:         true,
        open:        true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};
