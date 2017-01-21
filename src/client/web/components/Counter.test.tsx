import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import { create } from '../../redux/store';
import { Counter, CounterContainer } from './Counter';

describe('<Counter />', () => {
	it('renders correctly', () => {
		const store = create();

		const tree = mount(
			<Provider store={store}>
				<CounterContainer />
			</Provider>,
		);

		const counterComponent = tree.find(CounterContainer).find(Counter);
		const counter = counterComponent.find('h1');
		expect(counter.text()).toBe('0');

		const increment = counterComponent.find('button').at(0);
		increment.simulate('click');
		expect(counter.text()).toBe('1');

		const decrement = counterComponent.find('button').at(1);
		decrement.simulate('click');
		expect(counter.text()).toBe('0');
	});
});
