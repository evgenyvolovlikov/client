import eslint from '@eslint/js';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['dist/**', 'out-tsc/**', '.angular/**', 'node_modules/**'],
	},
	{
		plugins: {
			boundaries,
		},
		settings: {
			'boundaries/elements': [
				{type: 'app', pattern: 'src/app/**/*'},
				{type: 'pages', pattern: 'src/pages/:slice/**/*'},
				{type: 'widgets', pattern: 'src/widgets/:slice/**/*'},
				{type: 'features', pattern: 'src/features/:slice/**/*'},
				{type: 'entities', pattern: 'src/entities/:slice/**/*'},
				{type: 'shared', pattern: 'src/shared/**/*'},
				{type: 'root', pattern: 'src/*.ts', mode: 'full'},
			],
		},
		rules: {
			'boundaries/dependencies': [
				'error',
				{
					default: 'allow',
					message: '${file.type} не может импортировать ${dependency.type}',
					rules: [
						{
							from: 'shared',
							disallow: ['app', 'pages', 'widgets', 'features', 'entities'],
						},

						{from: 'entities', disallow: ['app', 'pages', 'widgets', 'features']},
						{from: 'features', disallow: ['app', 'pages', 'widgets']},
						{from: 'widgets', disallow: ['app', 'pages']},
						{from: 'pages', disallow: ['app']},

						{
							from: 'entities',
							disallow: [['entities', {slice: '!${slice}'}]],
							message:
								'Запрещен импорт из соседнего слайса entities: ${file.slice} -> ${dependency.slice}',
						},
						{
							from: 'features',
							disallow: [['features', {slice: '!${slice}'}]],
							message:
								'Запрещен импорт из соседнего слайса features: ${file.slice} -> ${dependency.slice}',
						},
						{
							from: 'widgets',
							disallow: [['widgets', {slice: '!${slice}'}]],
							message:
								'Запрещен импорт из соседнего слайса widgets: ${file.slice} -> ${dependency.slice}',
						},
						{
							from: 'pages',
							disallow: [['pages', {slice: '!${slice}'}]],
							message:
								'Запрещен импорт из соседнего слайса pages: ${file.slice} -> ${dependency.slice}',
						},
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/component-selector': [
				'error',
				{type: 'element', prefix: 'app', style: 'kebab-case'},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{type: 'attribute', prefix: 'app', style: 'camelCase'},
			],
			'no-console': ['warn', {allow: ['warn', 'error']}],
			'@angular-eslint/prefer-standalone': 'error',

			// Защита Strict Mode согласно Манифесту 1.2
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error', // <-- ДОБАВЛЕНО: Запрет на оператор "!"
			'@typescript-eslint/no-unused-vars': [
				'error',
				{argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
			],
			'@typescript-eslint/explicit-member-accessibility': [
				'error',
				{accessibility: 'explicit'},
			],
		},
	},
	{
		files: ['**/*.html'],
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		rules: {
			'@angular-eslint/template/interactive-supports-focus': 'off',
		},
	},
	eslintConfigPrettier,
);
