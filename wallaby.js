module.exports = function(wallaby) {
	const testFilePattern = 'src/**/*.test.ts?(x)';

	return {
		compilers: {
			'**/*.ts?(x)': wallaby.compilers.typeScript({
				jsx: 'React',
				module: 'CommonJS',
			}),
		},
		env: {
			runner: 'node',
			type: 'node',
		},
		files: [
			'src/**/*.ts?(x)',
			`!${testFilePattern}`,
			'jest.json',
		],
		// tslint:disable-next-line:no-shadowed-variable
		setup: function (wallaby) {
			const jestConfig = require('./jest.json');
			wallaby.testFramework.configure(jestConfig);
		},
		testFramework: 'jest',
		tests: [
			testFilePattern,
		],
	};
};
