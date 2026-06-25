import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

import {ARTICLES_NAVIGATON_ELEMENTS} from '@shared/config';
import type {NavigationSection} from '@shared/model';
import {NavigationComponent} from '@shared/ui';

@Component({
	selector: 'app-w-sidebar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'sidebar.component.html',
	styleUrl: 'sidebar.component.scss',
	imports: [NavigationComponent],
})
export class SidebarComponent {
	protected sections = signal<NavigationSection[]>(ARTICLES_NAVIGATON_ELEMENTS);
}
