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
                {type: 'pages', pattern: 'src/pages/**/*'},
                {type: 'widgets', pattern: 'src/widgets/**/*'},
                {type: 'features', pattern: 'src/features/**/*'},
                {type: 'entities', pattern: 'src/entities/**/*'},
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
            '@typescript-eslint/no-unused-vars': 'off',
            '@angular-eslint/prefer-standalone': 'error',
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {
            '@angular-eslint/template/interactive-supports-focus': 'off',
        },
    },
    eslintConfigPrettier,
);
