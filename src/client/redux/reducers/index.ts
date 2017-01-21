import { combineReducers } from 'redux-immutable';

import { counter } from './counter';

export {
	counter,
};

export default combineReducers({
	counter,
});
