import * as React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';

import { create } from '../redux/store';
import { CounterContainer } from './components/Counter';

const store = create();

export const App = () =>
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={CounterContainer} />
		</Router>
	</Provider>
;
