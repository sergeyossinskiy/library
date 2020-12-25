import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-multiselect-list',
  templateUrl: './multiselect-list.component.html',
  styleUrls: ['./multiselect-list.component.scss']
})
export class MultiselectListComponent implements OnInit {
  @Input() title: String;
  @Input() label: String;
  @Input() list: Object[];
  @Input() keyField: String = "id";
  @Input() valueField: String = "name";
  @Input() selected: FormControl = new FormControl(); 
  @Input() allSelected: boolean = false; 

  @Output() onSelectionChange = new EventEmitter<object>();
  @ViewChild('select') select: MatSelect; 
  
  private clickAllSelect: boolean = false;

  constructor() { }

  ngOnInit(): void { 
    if(this.selected.value){
      this.onSelectionChange.emit({
          "name": this.label,
          "value": this.selected.value
      }); 
    }
  }

  ngDoCheck(): void{
    if (this.select && this.allSelected) {
        this.toggleAllSelection();
    }
  }

  toggleAllSelection() {    
    this.clickAllSelect = true;

    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  } 

  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  selectionChange(event): void{
    this.optionClick(); 
    
    if(event.isUserInput || this.clickAllSelect){
      this.selected.valueChanges.pipe(first()).subscribe((value) => {
          this.onSelectionChange.emit({
            "name": this.label,
            "value": value
          });            
      }); 
    }

    if(event.isUserInput){
      this.clickAllSelect = false;
    }    
  }

}
