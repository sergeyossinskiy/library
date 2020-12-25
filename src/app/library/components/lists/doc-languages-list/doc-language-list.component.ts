import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocLanguage } from '../../../models';
import { DocLanguageService, LanguageService } from '../../../services';

@Component({
  selector: 'app-doc-language-list',
  templateUrl: './doc-language-list.component.html',
  styleUrls: ['./doc-language-list.component.scss']
})
export class DocLanguageListComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<object>();
  public selected: FormControl = new FormControl(); 

  languages: DocLanguage[];

  constructor(private docLanguageService: DocLanguageService, private lang: LanguageService) { 
    this.docLanguageService.getAll().subscribe( (value: DocLanguage[]) => {
      this.languages = value;

      let cur_language = this.languages.find(lang => {
        return lang.code2_country.toLowerCase() === this.lang.getCurrentLanguage();
      });

      this.selected.setValue(cur_language.id);
    });
  }

  ngOnInit(): void {
    //this.selected.setValue(6);
  }

  selectionChange(data: { name: string, value: any}): void{        
    this.onSelectionChange.emit(data); 
  }

}
