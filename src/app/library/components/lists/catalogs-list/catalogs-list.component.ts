import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-catalogs-list',
  templateUrl: './catalogs-list.component.html',
  styleUrls: ['./catalogs-list.component.scss']
})
export class CatalogsListComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<object>();
  public selected = new FormControl();

  catalogs: Object[] = [
    { "id": 1, "name": '{"kz":"Қосымша ірімшік","ru":"Экстра сыр","en":"Extra cheese"}'},
    { "id": 2, "name": '{"kz":"Пияз","ru":"Лук","en":"Onion"}'},
    { "id": 6, "name": '{"kz":"Пепперони","ru":"Пепперони","en":"Pepperoni"}'},
    { "id": 4, "name": '{"kz":"Шұжық","ru":"Колбаса","en":"Sausage"}'},
    { "id": 5, "name": '{"kz":"Қызанақ","ru":"Помидор","en":"Tomato"}'},
    { "id": 7, "name": '{"kz":"Қызfанақ","ru":"Помfидор","en":"Tomfato"}'},
  ];

  constructor() { 
    this.selected.setValue([1, 7, 6]);
  }

  ngOnInit(): void { }

  selectionChange(data: { name: string, value: any}): void{        
    this.onSelectionChange.emit(data); 
  }

}
