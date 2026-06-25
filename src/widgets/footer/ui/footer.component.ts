import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {APP_ROUTES} from '@shared/config';

interface FooterLink {
	label: string;
	route: string[];
	fragment?: string;
}
interface FooterSection {
	title: string;
	items: FooterLink[];
}

@Component({
	selector: 'app-w-footer',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	templateUrl: 'footer.component.html',
	styleUrl: 'footer.component.scss',
})
export class FooterComponent {
	protected readonly currentYear = signal<number>(new Date().getFullYear());

	protected readonly sections: FooterSection[] = [
		{
			title: 'Фреймворк',
			items: [
				{label: 'Signals API', route: ['/', APP_ROUTES.TRACKS]},
				{label: 'Zoneless Flow', route: ['/', APP_ROUTES.TRACKS]},
				{label: 'Hydration', route: ['/', APP_ROUTES.TRACKS]},
			],
		},
		{
			title: 'Навигация',
			items: [
				{label: 'Главная (Лендинг)', route: ['/', APP_ROUTES.LANDING]},
				{label: 'Панель управления', route: ['/', APP_ROUTES.DASHBOARD]},
				{label: 'Глоссарий', route: ['/', APP_ROUTES.ARTICLES]},
			],
		},
	];

	protected readonly bottomDashboardRoute = ['/', APP_ROUTES.DASHBOARD];
	protected readonly landingRoute = ['/', APP_ROUTES.LANDING];
}
