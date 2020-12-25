import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
  @Input() title: string;
  @Input() label: string;
  @Input() groups: Object[];
  @Input() list: Object[];
  @Input() selected: FormControl = new FormControl(); 
  @Input() keyField: string = "id";
  @Input() valueField: string = "name";
  @Input() groupField: string = "group_id";
  @Input() keyGroupField: string = "id";
  @Input() valueGroupField: string = "name";
  @Output() onSelectionChange = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
    if(this.selected.value){
      this.emitSelectionChange({
          "name": this.label,
          "value": this.selected.value
      });
      // this.onSelectionChange.emit({
      //     "name": this.label,
      //     "value": this.selected.value
      // }); 
    }
    else{
      this.selected.valueChanges.pipe(first()).subscribe((value) => {
        this.emitSelectionChange({
            "name": this.label,
            "value": value
        });
        // this.onSelectionChange.emit({
        //     "name": this.label,
        //     "value": value
        // }); 
      });
    }
  }

  getTopicsByGroup(group_id: number): Object[]{
    return this.list.filter(value => {
      return value[ this.groupField ] === group_id;
    });
  }

  selectionChange(event): void{
    if(event.isUserInput){
      this.selected.valueChanges.pipe(first()).subscribe((value) => {
        this.emitSelectionChange({
            "name": this.label,
            "value": value
        });
        // this.onSelectionChange.emit({
        //     "name": this.label,
        //     "value": value
        // }); 
      });
    }
  }

  emitSelectionChange(data: {name: string, value: any}): void{
    this.onSelectionChange.emit(data); 
  }

}
