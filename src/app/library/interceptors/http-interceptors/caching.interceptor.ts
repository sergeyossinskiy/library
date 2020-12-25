import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const cachedResponse = this.cache.get(req.url);
    if (cachedResponse &&
        req.headers.has('cacheable')) {
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap(event => {
        
        if (event instanceof HttpResponse &&
          req.headers.has('cacheable') ) {
          this.cache.set(req.url, event);
        }
      })
    );
  }
}