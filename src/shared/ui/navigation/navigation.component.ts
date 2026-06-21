import {ChangeDetectionStrategy, Component, forwardRef, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {NavigationLink} from '@shared/model';

@Component({
    selector: 'app-s-navigation',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, forwardRef(() => NavigationComponent)],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'navigation.component.html',
    styleUrl: 'navigation.component.scss',
})
export class NavigationComponent {
    public readonly elements = input.required<NavigationLink[]>();

    public readonly orientation = input<'horizontal' | 'vertical'>('vertical');

    public readonly isSubList = input<boolean>(false);
}
