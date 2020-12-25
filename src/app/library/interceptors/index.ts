import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CachingInterceptor } from './http-interceptors/caching.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
];