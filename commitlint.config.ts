import type {UserConfig} from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // Здесь можно кастомизировать правила, например, длину строки или типы
        'type-enum': [
            2,
            'always',
            [
                'build', // Изменения в сборке (пакеты, настройки)
                'chore', // Рутинные задачи (husky, prettier, eslint)
                'ci', // Настройки CI/CD
                'docs', // Документация
                'feat', // Новая фича
                'fix', // Исправление багов
                'perf', // Повышение производительности
                'refactor', // Рефакторинг кода
                'revert', // Откат изменений
                'style', // Правки по стилям (не влияющие на код)
                'test', // Тесты
            ],
        ],
        'subject-case': [2, 'never', ['sentence-case', 'start-case']],
    },
};

export default config;
