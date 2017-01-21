import { fromJS } from 'immutable';

import { create } from './store';

describe('store', () => {
	it('initializes with the correct state', () => {
		const store = create();

		const initialState = {
			counter: 0,
		};

		expect(store.getState()).toEqual(fromJS(initialState));
	});
});
