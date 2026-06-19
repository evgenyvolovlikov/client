import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {getRoute} from '@shared/config';

@Component({
    selector: 'app-w-footer',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'footer.component.html',
    styleUrl: 'footer.component.scss',
    imports: [RouterLink],
})
export class FooterComponent {
    protected readonly getRoute = getRoute;
    protected readonly currentYear = signal<number>(new Date().getFullYear());
}
