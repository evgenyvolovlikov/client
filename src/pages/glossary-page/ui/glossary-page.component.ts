import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-p-glossary',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-page.component.html',
    styleUrl: 'glossary-page.component.scss',
})
export class GlossaryPageComponent {}
