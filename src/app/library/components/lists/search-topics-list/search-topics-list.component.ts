import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchTopicsGroup, SearchTopic, SearchTopicsGrouped } from '../../../models';
import { SearchTopicsGroupedService } from '../../../services';

@Component({
  selector: 'app-search-topics-list',
  templateUrl: './search-topics-list.component.html',
  styleUrls: ['./search-topics-list.component.scss']
})
export class SearchTopicsListComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<object>();
  public selected: FormControl = new FormControl(); 

  groups: SearchTopicsGroup[];
  topics: SearchTopic[];

  constructor(private searchTopicsGroupedService: SearchTopicsGroupedService) { 
    this.searchTopicsGroupedService.getAll().subscribe( (value: SearchTopicsGrouped) => {
      this.topics = value.topics;
      this.groups = value.groups;
    }); 
  }

  ngOnInit(): void {
    //this.selected.setValue(6);
  }

  selectionChange(data: { name: string, value: any}): void{        
    this.onSelectionChange.emit(data); 
  }

}
