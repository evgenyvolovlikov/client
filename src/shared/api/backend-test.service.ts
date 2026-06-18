import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';

import {Observable} from 'rxjs';

export interface ApiResponse {
    status: string;
    message: string;
    timestamp: string;
}

@Injectable({
    providedIn: 'root',
})
export class BackendTestService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:4201';

    getTestMessage(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiUrl);
    }
}
