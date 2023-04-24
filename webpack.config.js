
const HtmlWebpackPlugin =require('html-webpack-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')
module.exports ={
    mode:'development',
    entry:'./src/index.tsx',
    module:{
        rules:[
            {
                test:/.tsx$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react',"@babel/preset-typescript"]
                        }
                    },
                    // "@babel/preset-typescript"
                    // {
                    //     loader:'ts-loader'
                    // }
                ]
                
            },
            {
                test:/.less$/,
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                    },
                    {
                        loader:'less-loader',
                    },
                ]
            }
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'初始化项目demo',
            template:'./src/index.html'
        })
    ]
}