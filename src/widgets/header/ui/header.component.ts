import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {ToggleTheme} from '@features/toggle-theme';

import {NavigationLink} from '@shared/model';
import {NavigationComponent} from '@shared/ui';

@Component({
    selector: 'app-w-header',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, ToggleTheme, NavigationComponent],
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
})
export class HeaderComponent {
    protected menuElements = signal<NavigationLink[]>([
        {
            label: 'Dashboard',
            route: '/dashboard',
            exact: true,
        },
        {
            label: 'Tracks',
            route: '/tracks',
            exact: false,
        },
        {
            label: 'Glossary',
            route: '/glossary',
            exact: false,
        },
    ]);
}
