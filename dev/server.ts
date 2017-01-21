import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as WebpackNotifierPlugin from 'webpack-notifier';

import { config } from './dev.config';

config.entry.push('webpack-hot-middleware/client');
config.plugins = [
	...config.plugins,
	new WebpackNotifierPlugin({
		alwaysNotify: true,
		excludeWarnings: true,
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
];

const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: '/',
	stats: {
		colors: true,
	},
}));

app.use(webpackHotMiddleware(compiler));

app.listen(process.env.PORT || 3000);
