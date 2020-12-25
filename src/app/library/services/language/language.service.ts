import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages: Array<string>;

  constructor(private cookie: CookieService, private translate: TranslateService) {
    this.languages = config('locale.languages');
    translate.setDefaultLang( config('locale.defaultLang') );

    this.onLoad();

    translate.onLangChange.subscribe( this.onChange );
  }

  onLoad(): void{
    if( this.cookie.check('language') ){
      this.translate.use( this.cookie.get('language') );
    }

    this.translate.use( this.translate.getDefaultLang() );
  }

  getCurrentLanguage(): string {
    if( this.cookie.check('language') ){
      return this.cookie.get('language');
    }
    return this.translate.getDefaultLang();
  }

  changeTo(language: string): void {
    this.translate.use(language);
  }

  onChange = (event: LangChangeEvent) => {
    this.cookie.set('language', event.lang);
  }
}
