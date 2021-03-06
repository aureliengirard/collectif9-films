const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: ["./js/main.js"],
        vendor: ["./js/vendor.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './js/[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: require.resolve("jquery-migrate"),
                use: "imports-loader?define=>false"
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            //minimize: true,
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/[name].[ext]",
                    },
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ["popper.js", "default"]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        })
    ]
    //devtool: 'inline-source-map'
};
module.exports = config;
