import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mapTo';

import * as actions from '../actions';

// XXX: narrow type
export const decrementEpic = (action$: ActionsObservable<Action>) =>
	action$.ofType(actions.decrement.type)
		.debounceTime(500)
		.mapTo(actions.decrementEvent())
;
