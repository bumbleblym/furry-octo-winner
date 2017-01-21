describe('App', () => {
	it('renders into document', () => {
		const root = document.createElement('div');
		root.id = 'root';
		document.body.appendChild(root);

		require('./index');

		expect(root.hasChildNodes()).toBe(true);
	});
});
