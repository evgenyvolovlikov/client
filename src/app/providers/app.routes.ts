import {type Route, Routes} from '@angular/router';

import {PublicLayoutComponent} from '@app/layouts/public-layout/public-layout.component';
import {SidebarLayoutComponent} from '@app/layouts/sidebar-layout/sidebar-layout.component';

import {APP_ROUTES} from '@shared/config';

const authRoutes: Route = {
	path: APP_ROUTES.AUTH,
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

			/* ARTICLES PAGES */
			{
				path: '',
				component: SidebarLayoutComponent,
				children: [
					{
						path: APP_ROUTES.ARTICLES,
						loadComponent: () =>
							import('@pages/articles-page').then((c) => c.ArticlesPageComponent),
					},

					{
						path: APP_ROUTES.ARTICLE_CREATE,
						loadComponent: () =>
							import('@pages/article-form-edit-page').then(
								(c) => c.ArticleFormEditPageComponent,
							),
					},

					{
						path: APP_ROUTES.ARTICLE_DETAIL,
						loadComponent: () =>
							import('@pages/article-detail-page').then(
								(c) => c.ArticleDetailPageComponent,
							),
					},

					{
						path: APP_ROUTES.ARTICLE_EDIT,
						loadComponent: () =>
							import('@pages/article-form-edit-page').then(
								(c) => c.ArticleFormEditPageComponent,
							),
					},
				],
			},
		],
	},

	authRoutes,

	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];
