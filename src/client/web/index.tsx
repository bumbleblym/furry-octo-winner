import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

const mountNode = document.getElementById('root');

const render = (app: React.ReactElement<any>) => {
	ReactDOM.render(
		app,
		mountNode,
	);
};

render(<App />);

// istanbul ignore next
if (module.hot) {
	module.hot.accept('./App', () => {
		const { App } = require('./App');

		render(<App />);
	});
}
