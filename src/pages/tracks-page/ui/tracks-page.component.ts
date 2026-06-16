import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-p-tracks-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'tracks-page.component.html',
    styleUrl: 'tracks-page.component.scss',
})
export class TracksPageComponentPage {}
