import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {FooterComponent} from '@widgets/footer';
import {HeaderComponent} from '@widgets/header';

@Component({
    selector: 'app-a-public-layout',
    templateUrl: 'public-layout.component.html',
    styleUrl: 'public-layout.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class PublicLayoutComponent {}
