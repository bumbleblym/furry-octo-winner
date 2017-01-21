import { config } from './base.config';

config.devtool = 'source-map';
config.module.rules.push({
	enforce: 'pre',
	test: /\.js$/,
	use: [
		'source-map-loader',
	],
});

export {
	config,
};
