import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services';
  
@Pipe({
    name: 'translate_db',
    pure: false
})

export class TranslateDbPipe implements PipeTransform {

    constructor(private translate: LanguageService){}

    transform(value: string, args?: any): string {
        if (value) return JSON.parse(value)[this.translate.getCurrentLanguage()];

        return "...";
    }
}