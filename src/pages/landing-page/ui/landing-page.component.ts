import {ChangeDetectionStrategy, Component, OnInit, inject, signal} from '@angular/core';

import {ApiResponse, BackendTestService} from '@shared/api/backend-test.service';

@Component({
    selector: 'app-p-landing-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'landing-page.component.html',
    styleUrl: 'landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
    private testService = inject(BackendTestService);

    backendData = signal<ApiResponse | null>(null);
    errorLoading = signal<boolean>(false);

    ngOnInit() {
        this.testService.getTestMessage().subscribe({
            next: (data) => {
                this.backendData.set(data);
            },
            error: (err) => {
                console.error('Ошибка связи с бэкендом:', err);
                this.errorLoading.set(true);
            },
        });
    }
}
