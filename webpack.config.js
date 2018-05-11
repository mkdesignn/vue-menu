var path = require("path"),
    entryPointsPathPrefix = './source',
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    entry :{

        'dist/index.js': entryPointsPathPrefix + '/index.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    module: {
        rules:[
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../js/'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=public/fonts/[name].[ext]',
                        options: {}
                    }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("./../style/[name].css")
    ]
}