const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'          //Nome do arquivo final que será gerado no projeto
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'jsx'],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",           //Arquivo que será interpretado pelo webpack
            filename: "./index.html"                //Arquivo que será gerado pelo webpack
        })
    ]
};
