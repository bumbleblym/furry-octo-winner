import { DefinePlugin, optimize } from 'webpack';

import { config } from './base.config';

config.plugins = [
	...config.plugins,
	new DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),
	new optimize.UglifyJsPlugin(),
];

export {
	config,
};
