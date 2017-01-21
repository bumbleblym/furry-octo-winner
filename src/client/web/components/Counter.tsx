import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../redux/actions';

export interface CounterStateProps {
	counter: number;
}

export interface CounterDispatchProps {
	actions: {
		// XXX: narrow type
		decrement: React.EventHandler<any>;
		increment: React.EventHandler<any>;
	};
}

export type CounterProps = CounterStateProps & CounterDispatchProps;

export const Counter = ({
	counter,
	actions: {
		decrement,
		increment,
	},
}: CounterProps) => (
	<div>
		<h1>{counter}</h1>
		<button onClick={increment}>+</button>
		<button onClick={decrement}>-</button>
	</div>
);

// XXX: narrow type
const mapStateToProps = (state: any): CounterStateProps => ({
	counter: state.get('counter'),
});

// XXX: narrow type
const mapDispatchToProps = (dispatch: Dispatch<any>): CounterDispatchProps => ({
	actions: {
		// XXX: port bindActionCreators
		decrement: () => dispatch(actions.decrement()),
		increment: () => dispatch(actions.increment()),
	},
});

export const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
