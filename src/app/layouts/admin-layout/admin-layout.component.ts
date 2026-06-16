import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
