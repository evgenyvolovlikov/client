import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

import {SidebarLink} from '@shared/model';

@Component({
    selector: 'app-s-navigation',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'navigation.component.html',
    styleUrl: 'navigation.component.scss',
})
export class NavigationComponent {
    public elements = input.required<SidebarLink[]>();

    private router = inject(Router);

    protected isBranchActive(route: string | string[]): boolean {
        if (Array.isArray(route)) {
            const fullRoute = route.join('/').replace(/\/+/g, '/');
            return this.router.url.startsWith(fullRoute);
        }

        return this.router.url.startsWith(route);
    }
}
