export const APP_ROUTES = {
	/* Публичные & Приватные */
	LANDING: '',
	DASHBOARD: 'dashboard',
	TRACKS: 'tracks',
	PROFILE: 'profile',

	/* Статьи */
	ARTICLES: 'articles',

	/* Статья */
	ARTICLE_CREATE: 'articles/create',
	ARTICLE_DETAIL: 'articles/:category/:slug',
	ARTICLE_EDIT: 'articles/:category/:slug/edit',

	/* Авторизация  */
	AUTH: 'auth',
	LOGIN: 'login',
	REGISTER: 'register',

	NOT_FOUND: '**',
} as const;

export const getRoute = {
	articleDetail: (category: string, slug: string): string =>
		`/${APP_ROUTES.ARTICLES}/${category}/${slug}`,

	articleEdit: (category: string, slug: string): string =>
		`/${APP_ROUTES.ARTICLES}/${category}/${slug}/edit`,

	articleCreate: (): string => `/${APP_ROUTES.ARTICLE_CREATE}`,
};
