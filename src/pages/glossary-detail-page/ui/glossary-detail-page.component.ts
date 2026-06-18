import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-p-glossary-detail',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-detail-page.component.html',
    styleUrl: 'glossary-detail-page.component.scss',
})
export class GlossaryDetailPageComponent {}
