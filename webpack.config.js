const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
	mode: 'development',
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
		publicPath: "/dist/assets"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {presets: ["es2015"]}
				}
			},
			{
				test: /\.scss$/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "sass-loader",
					},
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'fonts/[name].[ext]',
							publicPath: 'assets/fonts/'
						},
					},
				]
			},
			// {
			// 	test: /\.(png|jpe?g|gif)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: 'assets/images',
			// 				context: './src/images',
			// 				limit: 10000,
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
		new CopyWebpackPlugin([
			{
				from:'src/images',
				to:'images',
			},
		]),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			optipng: {
				optimizationLevel: 9
			}
		}),
	],
};