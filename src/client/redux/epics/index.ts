import { combineEpics } from 'redux-observable';

import { decrementEpic } from './decrement';
import { incrementEpic } from './increment';

export {
	decrementEpic,
	incrementEpic,
};

export default combineEpics(
	decrementEpic,
	incrementEpic,
);
