import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-p-dashboard-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'dashboard-page.component.html',
    styleUrl: 'dashboard-page.component.scss',
})
export class DashboardPageComponent {}
