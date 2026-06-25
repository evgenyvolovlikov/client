import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {ToggleTheme} from '@features/toggle-theme';

import {APP_ROUTES} from '@shared/config';
import {NavigationLink} from '@shared/model';
import {NavigationComponent} from '@shared/ui';

@Component({
	selector: 'app-w-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ToggleTheme, NavigationComponent],
	templateUrl: 'header.component.html',
	styleUrl: 'header.component.scss',
})
export class HeaderComponent {
	protected readonly loginRoute = `/${APP_ROUTES.AUTH}/${APP_ROUTES.LOGIN}`;

	protected menuElements = signal<NavigationLink[]>([
		{
			label: 'Dashboard',
			route: `/${APP_ROUTES.DASHBOARD}`,
			exact: true,
		},
		{
			label: 'Tracks',
			route: `/${APP_ROUTES.TRACKS}`,
			exact: false,
		},
		{
			label: 'Articles',
			route: `/${APP_ROUTES.ARTICLES}`,
			exact: false,
		},
	]);
}
