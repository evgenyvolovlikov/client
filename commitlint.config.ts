import type {UserConfig} from '@commitlint/types';

const config: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
		'scope-enum': [
			2,
			'always',
			['app', 'pages', 'widgets', 'features', 'entities', 'shared', 'core', 'infra'],
		],
		'subject-case': [2, 'never', ['sentence-case', 'start-case']],
	},
};

export default config;
