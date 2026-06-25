import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AuthByEmailComponent} from '@features/auth-by-email';

@Component({
	selector: 'app-p-login-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'login-page.component.html',
	styleUrl: 'login-page.component.scss',
	imports: [AuthByEmailComponent],
})
export class LoginPageComponent {}
