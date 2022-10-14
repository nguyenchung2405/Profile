const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname)
    },
    mode: "development",
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "less-loader",
                            options: {
                                lessOptions: {
                                    modifyVars: {
                                        "primary-color": "#459C60",
                                        "link-color": "#35794a"
                                    },
                                    javascriptEnabled: true,
                                }
                            }
                        }
                ]
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                          presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ]
            },
            {
                test: /\.(sa|sc|c)ss/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            import:false
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.(sa|sc|c)ss/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                exclude: /\.module\.css$/
            },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ],
    resolve: {
        extensions: [".js",".jsx"]
    },
    target: "web",
}