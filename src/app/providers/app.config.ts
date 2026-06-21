import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(appRoutes, withComponentInputBinding()), provideHttpClient()],
};
