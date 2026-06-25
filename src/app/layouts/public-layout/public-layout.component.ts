import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {FooterComponent} from '@widgets/footer';
import {HeaderComponent} from '@widgets/header';

@Component({
	selector: 'app-a-public-layout',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: 'public-layout.component.html',
	styleUrl: 'public-layout.component.scss',
})
export class PublicLayoutComponent {}
