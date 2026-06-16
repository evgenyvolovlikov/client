import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, RouterLink],
    templateUrl: 'auth-layout.component.html',
    styleUrl: 'auth-layout.component.scss',
})
export class AuthLayoutComponent {}
