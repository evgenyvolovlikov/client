import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

import {getRoute} from '@shared/config';
import {SidebarLink} from '@shared/model';
import {NavigationComponent} from '@shared/ui';

@Component({
    selector: 'app-w-sidebar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    imports: [NavigationComponent],
})
export class SidebarComponent {
    protected menuElements = signal<SidebarLink[]>([
        {
            label: '📖 Эмоции',
            route: getRoute.glossaryDetail('emotions'),
            children: [
                {
                    label: '🍂 Страх',
                    route: `${getRoute.glossaryDetail('emotions')}/fear`,
                },

                {
                    label: '☀️ Радость',
                    route: `${getRoute.glossaryDetail('emotions')}/joy`,
                },

                {
                    label: '🍵 Гнев',
                    route: `${getRoute.glossaryDetail('emotions')}/anger`,
                },
            ],
        },
    ]);
}
