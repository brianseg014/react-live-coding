const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        'path': path.resolve(__dirname, 'dist'),
        'filename': '[name].[chunkhash].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: '9000',
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@app': path.join(__dirname, 'src', 'app'),
            '@components': path.join(__dirname, 'src', 'components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', { plugins: ['@babel/plugin-proposal-class-properties'] }],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}