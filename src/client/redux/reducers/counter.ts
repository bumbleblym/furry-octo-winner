import { Action } from 'redux';
import { isType } from 'redux-typescript-actions';

import * as actions from '../actions';

export const counter = (state = 0, action: Action): number => {
	if (isType(action, actions.decrementEvent)) {
		return state - 1;
	}

	if (isType(action, actions.incrementEvent)) {
		return state + 1;
	}

	return state;
};
