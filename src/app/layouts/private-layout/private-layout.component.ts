import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './private-layout.component.html',
    styleUrl: './private-layout.component.scss',
})
export class PrivateLayoutComponent {}
