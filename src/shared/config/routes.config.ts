export const APP_ROUTES = {
    /* Публичные */
    LANDING: '',
    DASHBOARD: 'dashboard',
    TRACKS: 'tracks',
    PROFILE: 'profile',

    /* Приватные */

    /* Глоссарий */
    GLOSSARY: 'glossary',
    GLOSSARY_DETAIL: 'glossary/:id',

    /* Авторизация  */
    AUTH: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',

    NOT_FOUND: '**',
} as const;

export const getRoute = {
    glossaryDetail: (slug: string) => `/${APP_ROUTES.GLOSSARY}/${slug}`,
};
