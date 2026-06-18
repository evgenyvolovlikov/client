import {Route, Routes} from '@angular/router';

import {SidebarLayoutComponent} from '@app/layouts/sidebar-layout/sidebar-layout.component';

import {APP_ROUTES} from '@shared/config';

import {PublicLayoutComponent} from '../layouts/public-layout/public-layout.component';

const authRoutes: Route = {
    path: APP_ROUTES.AUTH,
    loadComponent: () =>
        import('../layouts/auth-layout/auth-layout.component').then((c) => c.AuthLayoutComponent),
    children: [
        {
            path: APP_ROUTES.LOGIN,
            loadComponent: () => import('@pages/auth').then((c) => c.LoginPageComponent),
        },
        {
            path: APP_ROUTES.REGISTER,
            loadComponent: () => import('@pages/auth').then((c) => c.RegisterPageComponent),
        },
    ],
};

export const appRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: APP_ROUTES.LANDING,
                loadComponent: () =>
                    import('@pages/landing-page').then((c) => c.LandingPageComponent),
            },

            {
                path: APP_ROUTES.DASHBOARD,
                loadComponent: () =>
                    import('@pages/dashboard-page').then((c) => c.DashboardPageComponent),
            },

            {
                path: APP_ROUTES.TRACKS,
                loadComponent: () =>
                    import('@pages/tracks-page').then((c) => c.TracksPageComponentPage),
            },

            {
                path: '',
                component: SidebarLayoutComponent,
                children: [
                    {
                        path: APP_ROUTES.GLOSSARY,
                        loadComponent: () =>
                            import('@pages/glossary-page').then((c) => c.GlossaryPageComponent),
                    },

                    {
                        path: APP_ROUTES.GLOSSARY_CREATE,
                        loadComponent: () =>
                            import('@pages/glossary-form-page').then(
                                (c) => c.GlossaryFormPageComponent,
                            ),
                    },

                    {
                        path: APP_ROUTES.GLOSSARY_DETAIL,
                        loadComponent: () =>
                            import('@pages/glossary-detail-page').then(
                                (c) => c.GlossaryDetailPageComponent,
                            ),
                    },

                    {
                        path: APP_ROUTES.GLOSSARY_EDIT,
                        loadComponent: () =>
                            import('@pages/glossary-form-page').then(
                                (c) => c.GlossaryFormPageComponent,
                            ),
                    },
                ],
            },
        ],
    },

    authRoutes,

    // 404
    // {
    //     path: '**',
    //     redirectTo: '',
    //     pathMatch: 'full',
    // },
];
