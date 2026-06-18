import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-p-glossary-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-form-page.component.html',
    styleUrl: 'glossary-form-page.component.scss',
})
export class GlossaryFormPageComponent {}
