import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
	selector: 'app-a-auth-layout',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
	templateUrl: 'auth-layout.component.html',
	styleUrl: 'auth-layout.component.scss',
})
export class AuthLayoutComponent {
	protected readonly currentYear = signal<number>(new Date().getFullYear());
}
