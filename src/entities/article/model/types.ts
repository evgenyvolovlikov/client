export enum ArticleStatus {
	DRAFT = 'draft',
	PUBLISHED = 'published',
	ARCHIVED = 'archived',
}

export type ArticleTag = 'theory' | 'component' | 'example' | 'algorithm' | 'structure';

export type ArticleContentBlock =
	| {type: 'text'; data: {content: string; format: 'html' | 'markdown' | 'raw'}}
	| {type: 'features'; data: {sectionTitle: string; items: {title: string; text: string}[]}}
	| {type: 'note'; data: {text: string; noteType: 'info' | 'warning'}}
	| {type: 'code'; data: {code: string; language: string}}
	| {type: 'image'; data: {url: string; alt: string; caption?: string; width?: string}}
	| {type: 'complexity'; data: {time: string; space: string; description?: string}};

export interface ArticleTocElement {
	/** Уникальный ID */
	readonly id: string;
	/** Текст ссылки в оглавлении */
	readonly label: string;
	/** Ссылка-якорь для скролла */
	readonly anchor: string;
}

export interface SeoMetadata {
	readonly description: string;
	readonly keywords: string[];
}

export interface Article {
	readonly id: string;
	readonly slug: string;
	readonly status: ArticleStatus;

	/* Мета-инфо */
	readonly title: string;
	readonly leadText: string;
	readonly seo: SeoMetadata;
	readonly categoryId: string;
	readonly tags: ArticleTag[];

	readonly blocks: ArticleContentBlock[];
	readonly toc: ArticleTocElement[];

	readonly authorId: string;
	readonly createdAt: string;
	readonly updatedAt: string;
}

/** Типы для создания новой статьи */
export type CreatedArticlePayload = Omit<Article, 'id' | 'createdAt' | 'updatedAt'>;

/** Тип для обновления статьи */
export type UpdateArticlePayload = Partial<CreatedArticlePayload> & Pick<Article, 'id'>;
