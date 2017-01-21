// tslint:disable:object-literal-sort-keys
module.exports = {
	scripts: {
		default: 'nps s',
		compile: {
			dev: {
				default: {
					script: 'tsc -p dev',
					description: 'Compile dev directory.',
				},
				noEmit: {
					script: 'nps compile.dev --noEmit',
					description: 'Compile dev directory without output.',
				},
			},
			src: {
				default: {
					script: 'tsc -p src',
					description: 'Compile src directory.',
				},
				noEmit: {
					script: 'nps compile.src --noEmit',
					description: 'Compile src directory without output.',
				},
			},
		},
		build: {
			default: 'nps build.dist',
			dev: {
				script: 'shx rm -rf dev_js && nps compile.dev',
				description: 'Build dev directory.',
			},
			src: {
				script: 'shx rm -rf src_js && nps compile.src',
				description: 'Build src directory.',
			},
			dist: {
				script: 'nps build.dev && shx rm -rf dist && webpack --config dev_js/dev.config.js',
				description: 'Build dist.',
			},
		},
		start: {
			script: 'nps build.dev && node dev_js/server.js',
			description: 'Start dev server.',
		},
		lint: {
			default: {
				script: 'tslint -c tslint.js \"{dev,src}/**/*.{ts,tsx}\" \"*.js\"',
				description: 'Lint files.',
			},
			fix: {
				script: 'nps lint --fix',
				description: 'Fix lint errors.',
			},
		},
		test: {
			default: {
				script: 'nps lint,compile.dev.noEmit,compile.src.noEmit,test.only',
				description: 'Run all checks.',
			},
			only: {
				script: 'shx rm -rf coverage && jest -c jest.json --coverage',
				description: 'Run tests.',
			},
		},
		commit: {
			script: 'git-cz',
			description: 'Commit changes.',
		},
	},
};
// tslint:enable:object-literal-sort-keys
