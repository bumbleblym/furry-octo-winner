import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as template from 'html-webpack-template';
import { resolve } from 'path';
import { Configuration, NewModule, Plugin } from 'webpack';

const rootPath = resolve(__dirname, '..');
const resolveRoot = resolve.bind(null, rootPath);

interface WebpackConfig extends Configuration {
	entry: string[];
	module: NewModule;
	plugins: Plugin[];
}

export const config: WebpackConfig = {
	context: resolveRoot('src'),
	entry: [
		'./client/web',
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'babel-loader',
					'awesome-typescript-loader',
				],
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: resolveRoot('dist'),
	},
	performance: {
		hints: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			appMountId: 'root',
			inject: false,
			template,
			title: 'blymbot',
		}),
	],
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.jsx',
			'.json',
		],
	},
};
