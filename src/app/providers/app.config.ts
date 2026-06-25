import {provideHttpClient} from '@angular/common/http';
import {type ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		provideRouter(appRoutes, withComponentInputBinding()),
		provideHttpClient(),
	],
};
