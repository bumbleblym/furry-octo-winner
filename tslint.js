const commonRules = {
	'arrow-parens': [
		true,
		'ban-single-arg-parens',
	],
	indent: [
		true,
		'tabs',
	],
	'object-literal-key-quotes': [
		true,
		'as-needed',
	],
	quotemark: [
		true,
		'single',
		'jsx-single',
		'avoid-escape',
	],
};

module.exports = {
	extends: [
		'tslint:latest',
		'tslint-react',
	],
	jsRules: commonRules,
	rules: Object.assign({
		'interface-name': [
			true,
			'never-prefix',
		],
	}, commonRules),
};
