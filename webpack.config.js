const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const context = __dirname;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: false,
                        presets: ['es2015', 'react'],
                        plugins: [
                            [
                                'react-css-modules',
                                {
                                    context
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                        }
                    }],
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};