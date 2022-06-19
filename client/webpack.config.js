const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const treatWarningsAsErrors = !process.argv.includes('--watch');

module.exports = {
	mode: 'production',
	entry: {
		index: ['./src/index.tsx']
	},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, './build'),
		filename: '[name].js?[chunkhash]',
		chunkFilename: '[name].[id].js?[chunkhash]'
	},
	resolve: {
		alias: {
			'~': path.join(__dirname, 'src')
		},
		extensions: ['*', '.tsx', '.ts', '.jsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							modules: {
								localIdentName: '[hash:base64:4]'
							}
						}
					},
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css?[contenthash]'
		}),
		new EsLintPlugin({
			extensions: ['ts', 'tsx'],
			failOnWarning: treatWarningsAsErrors,
			exclude: ['node_modules']
		}),
		new ForkTsCheckerWebpackPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()],
		splitChunks: {
			chunks: 'all'
		}
	}
};
