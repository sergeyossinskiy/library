import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dataList: Array<string>;
  public current_item: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.current_item = this.dataList[0];
    console.log( this.dataList );
  }

}
