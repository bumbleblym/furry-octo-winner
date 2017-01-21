import { Map } from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epics';
import reducer from './reducers';

const preloadedState = Map();
const epicMiddleware = createEpicMiddleware(epic);

export const create = () => {
	const store = createStore(
		reducer,
		preloadedState,
		applyMiddleware(
			epicMiddleware,
		),
	);

	// istanbul ignore next
	if (module.hot) {
		module.hot.accept('./epics', () => {
			const epic = require('./epics').default;
			epicMiddleware.replaceEpic(epic);
		});

		module.hot.accept('./reducers', () => {
			const reducer = require('./reducers').default;
			store.replaceReducer(reducer);
		});
	}

	return store;
};
