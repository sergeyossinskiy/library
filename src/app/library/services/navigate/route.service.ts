import { Injectable } from '@angular/core';
import { QueryParamsHandling, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {

  }

  urldecode(str: string): string {
    return decodeURIComponent((str + '')
    .replace(/%(?![\da-f]{2})/gi, function () {
      return '%25'
    })
    .replace(/\+/g, '%20'))
  }

  get(name: string): string{
    return this.gets()[name];
  };

  gets(): object {
    let request: string = window.location.search;
    let requests: string[] = request.substring(1).split("&");
    let result = new Object();

    for (var i = 0; i < requests.length; i++) {
  	let parts: string[] = requests[i].split("=");
        result[parts[0]] = this.urldecode( parts[1] );
    }

    return result;
  };

  goToLoginPage(): void{

    this.router.navigate(['/login'], {
      queryParams: this.activeRouteCompactToGET()
    });
  }

  activeRouteCompactToGET(): object{

    return {
              "protocol": window.location.protocol, 
              "address": window.location.hostname,
              "port": window.location.port,
              "pathname": decodeURI(window.location.pathname)
            }
  }

  redirect(pagename): void{
    this.router.navigate(['/' + pagename]);
  }

  clearGetParameters(): void{
    window.location.href =  window.location.protocol +
                            "//" + window.location.hostname +
                            (window.location.port ? ":" + window.location.port : '') +
                            decodeURI(window.location.pathname);
  }
}
