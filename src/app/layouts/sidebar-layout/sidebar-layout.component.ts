import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {SidebarComponent} from '@widgets/sidebar';

@Component({
	selector: 'app-a-sidebar-layout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet, SidebarComponent],
	templateUrl: 'sidebar-layout.component.html',
	styleUrl: 'sidebar-layout.component.scss',
})
export class SidebarLayoutComponent {}
