import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,  withDebugTracing()), provideHttpClient(withInterceptors([httpInterceptor]))]
};
