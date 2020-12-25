import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-fields-list',
  templateUrl: './search-fields-list.component.html',
  styleUrls: ['./search-fields-list.component.scss']
})
export class SearchFieldsListComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<object>();

  public searchFields: Object[] = [
    { "id": 1, "name": '{"kz":"Қосымша ірімшік","ru":"Экстра сыр","en":"Extra cheese"}'},
    { "id": 2, "name": '{"kz":"Пияз","ru":"Лук","en":"Onion"}'},
    { "id": 6, "name": '{"kz":"Пепперони","ru":"Пепперони","en":"Pepperoni"}'},
    { "id": 4, "name": '{"kz":"Шұжық","ru":"Колбаса","en":"Sausage"}'},
    { "id": 5, "name": '{"kz":"Қызанақ","ru":"Помидор","en":"Tomato"}'},
  ];

  constructor() {
  }

  ngOnInit(): void { }

  selectionChange(data: { name: string, value: any}): void{        
    this.onSelectionChange.emit(data); 
  }

}
