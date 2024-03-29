const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob-all");

module.exports = {
    entry: {
        yourAwesomeEntryPoint: glob.sync([
            "./modal/*.js",
            "./src/*.js",
        ])
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },

    mode: 'development',
};