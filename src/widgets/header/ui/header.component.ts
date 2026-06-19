import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-w-header',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
})
export class HeaderComponent {
    protected readonly isLightTheme = signal<boolean>(false);

    constructor() {
        const body = document.body;
        if (this.isLightTheme()) {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
    }

    protected toggleTheme(): void {
        this.isLightTheme.update((state) => !state);
    }
}
