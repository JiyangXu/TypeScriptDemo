const path=require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
    mode: 'development',
    entry:path.resolve(__dirname,"./src/index.ts"),
    devtool: 'inline-source-map',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'),
        environment:{
            arrowFunction:false,
            const:false
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        "corejs":"3",
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude:/node-modules/
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }

                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}