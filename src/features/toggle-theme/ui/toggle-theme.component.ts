import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {ThemeService} from '../model/theme.service';

@Component({
    selector: 'app-f-toggle-theme',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'toggle-theme.component.html',
    styleUrl: 'toggle-theme.component.scss',
})
export class ToggleTheme {
    protected readonly themeService = inject(ThemeService);
}
