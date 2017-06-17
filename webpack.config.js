var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    watch: true,

    module: {
        rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: [ "style-loader" ],
                use: [ "css-loader?importLoaders=1", "postcss-loader", "sass-loader" ]
            })
        },
        {
            test: /\.js$/,
            use: [ "babel-loader" ]
        }]
    },
    
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: "./app/index.html",
            files: {
                css: [ "styles.css" ],
                js: [ "app.js" ]
            }
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ["dist"] },
        })
    ],

    resolve: {
        modules: [ "bower_components", "node_modules", "app" ],
        extensions: [ ".js", ".jsx" ]
    }
}