import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

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
}
