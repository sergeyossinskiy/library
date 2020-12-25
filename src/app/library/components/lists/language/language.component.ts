import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  public languages: Array<string>;
  public current_language: string;

  constructor(private lang: LanguageService) {
    this.languages = this.lang.languages;
    this.current_language = lang.getCurrentLanguage();
  }

  selectLanguage(e): void{
    this.current_language = e.target.name;
    this.lang.changeTo( this.current_language );
  }

  ngOnInit(): void {
  }

}
