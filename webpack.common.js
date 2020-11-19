const path = require("path");

module.exports = {
    entry: {
        app: path.join(__dirname + "/src/index.js"),
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public', 'build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "static/images"
                    }
                }
            }
        ],
    },
};
