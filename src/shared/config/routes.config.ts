export const APP_ROUTES = {
    /* Публичные */
    LANDING: '',
    DASHBOARD: 'dashboard',
    TRACKS: 'tracks',
    PROFILE: 'profile',

    /* Глоссарий */
    GLOSSARY: 'glossary',
    GLOSSARY_CREATE: 'glossary/create',
    GLOSSARY_DETAIL: 'glossary/:id',
    GLOSSARY_EDIT: 'glossary/:id/edit',

    /* Авторизация  */
    AUTH: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',

    NOT_FOUND: '**',
} as const;

export const getRoute = {
    glossaryDetail: (slug: string) => `/${APP_ROUTES.GLOSSARY}/${slug}`,
    glossaryEdit: (slug: string) => `/${APP_ROUTES.GLOSSARY}/${slug}/edit`,
    glossaryCreate: () => `/${APP_ROUTES.GLOSSARY_CREATE}`,
};
