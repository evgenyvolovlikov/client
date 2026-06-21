export const APP_ROUTES = {
    /* Публичные */
    LANDING: '',
    DASHBOARD: 'dashboard',
    TRACKS: 'tracks',
    PROFILE: 'profile',

    /* Глоссарий */
    GLOSSARY: 'glossary',
    GLOSSARY_CREATE: 'glossary/create',
    GLOSSARY_DETAIL: 'glossary/:category/:id',
    GLOSSARY_EDIT: 'glossary/:category/:id/edit',

    /* Авторизация  */
    AUTH: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',

    NOT_FOUND: '**',
} as const;

export const getRoute = {
    glossaryDetail: (category: string, slug: string) =>
        `/${APP_ROUTES.GLOSSARY}/${category}/${slug}`,

    glossaryEdit: (category: string, slug: string) =>
        `/${APP_ROUTES.GLOSSARY}/${category}/${slug}/edit`,

    glossaryCreate: () => `/${APP_ROUTES.GLOSSARY_CREATE}`,
};
