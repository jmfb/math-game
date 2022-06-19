const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const treatWarningsAsErrors = !process.argv.includes('--watch');
const version = fs.readFileSync('./src/version.json', 'utf8').trim();

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
		new CopyWebpackPlugin({
			patterns: [
				{
					context: path.join(__dirname, 'src'),
					from: 'version.json'
				}
			]
		}),
		new EsLintPlugin({
			extensions: ['ts', 'tsx'],
			failOnWarning: treatWarningsAsErrors,
			exclude: ['node_modules']
		}),
		new ForkTsCheckerWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Math Games',
			favicon: './src/favicon.ico',
			meta: {
				viewport:
					'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
				author: 'Jacob Buysse',
				description: 'Math Games'
			},
			inject: false,
			templateContent: ({ htmlWebpackPlugin: { tags } }) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		${tags.headTags}
	</head>
	<body>
		<div id="root" data-bundle-version="${version}"></div>
	</body>
</html>
`
		}),
		new CleanWebpackPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserWebpackPlugin({
				terserOptions: {
					output: {
						comments: false
					}
				},
				extractComments: false
			}),
			new CssMinimizerWebpackPlugin()
		],
		splitChunks: {
			chunks: 'all'
		}
	},
	devServer: {
		static: {
			directory: path.join(__dirname, './build')
		},
		client: {
			overlay: {
				errors: true,
				warnings: false
			}
		},
		compress: true,
		port: 6402,
		historyApiFallback: true
	}
};
