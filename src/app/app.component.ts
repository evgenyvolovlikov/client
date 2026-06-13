import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        Hello World
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected readonly title = signal('ngalg');
}
