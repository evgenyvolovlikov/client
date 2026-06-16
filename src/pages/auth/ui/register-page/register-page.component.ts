import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-p-register-page',
    standalone: true,
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'register-page.component.html',
    styleUrl: 'register-page.component.scss',
})
export class RegisterPageComponent {}
