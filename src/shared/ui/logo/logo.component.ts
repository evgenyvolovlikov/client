import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-s-logo',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'logo.component.html',
    styleUrl: 'logo.component.scss',
})
export class LogoComponent {}
