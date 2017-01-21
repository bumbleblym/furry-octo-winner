import * as actions from '../actions';
import { counter } from './counter';

describe('counter', () => {
	it('returns the initial state', () => {
		expect(counter(0, actions.sentinel())).toBe(0);
	});

	// XXX: fix async tests
	it('decrements the state', () => {
		expect(counter(1, actions.decrementEvent())).toBe(0);
	});

	// XXX: fix async tests
	it('increments the state', () => {
		expect(counter(0, actions.incrementEvent())).toBe(1);
	});
});
