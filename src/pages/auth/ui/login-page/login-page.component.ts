import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-p-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'login-page.component.html',
    styleUrl: 'login-page.component.scss',
    imports: [RouterLink],
})
export class LoginPageComponent {}
