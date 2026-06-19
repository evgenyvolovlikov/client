import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {ToggleTheme} from '@features/toggle-theme';

@Component({
    selector: 'app-w-header',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive, ToggleTheme],
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
})
export class HeaderComponent {}
