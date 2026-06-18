/** Интерфейс для элемента оглавления (TOC) справа */
export interface ArticleTocElement {
    /** Уникальный ID */
    readonly id: string;
    /** Текст ссылки в оглавлении */
    readonly label: string;
    /** Ссылка-якорь для скролла */
    readonly anchor: string;
}

/** Интерфейс для ключевых особенностей / списков функций внутри статьи */
export interface ArticleFeatureElement {
    /** Название функции */
    readonly title: string;
}

/** Главный интерфейс Сущности Статьи */
export interface Article {
    /** Уникальный текстовый ID в URL */
    readonly slug: string;
    /** Название категории для крошек */
    readonly category: string;
    /** Главный заголовок H1 */
    readonly title: string;
    /** Вводный жирный абзац (Lead) */
    readonly leadText: string;
    /** Текст интерактивной цитаты-выделения */
    readonly noteText?: string;
    /** Заголовок H2 для списка функций */
    readonly sectionTitle: string;
    /** Массив функций (Сигнальная, Мотивационная...) */
    readonly features: ArticleFeatureElement[];
    /** Массив элементов оглавления справа */
    readonly toc: ArticleTocElement[];

    /**  Дата создания (ISO строка для сортировки) */
    readonly createdAt: string;
    /** Дата обновления */
    readonly updatedAt: string;
}

/** Типы для создания новой статьи */
export type CreatedArticlePayload = Omit<Article, 'slug' | 'createdAt' | 'updatedAt'>;

/** Тип для обновления статьи */
export type UpdateArticlePayload = Partial<CreatedArticlePayload> & Pick<Article, 'slug'>;
