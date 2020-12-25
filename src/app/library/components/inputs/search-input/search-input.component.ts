import { Component, OnInit } from '@angular/core';
import { FundService } from '../../../services';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Fund } from 'src/app/library/models/Fund';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  public funds: Fund[] ;
  public current_fund: Fund;
  public search_icon = faSearch;
  public advanced_search: boolean = false;
  public filtres: [];

  constructor(private fundsService: FundService) {
    this.fundsService.getFunds().subscribe( fundsList => {
      this.funds = fundsList;
      this.current_fund = this.funds[0];
    });    
  }

  selectFund(event): void{
    this.current_fund = this.funds.find(fund => {
      return fund.id == event.target.value;
    })
  }

  showMenuFilters(){
    this.advanced_search = true;
  }

  hideMenuFilters(){
    this.advanced_search = false;
  }

  ngOnInit(): void {
  }

  addFilter(data: { name: string, value: any}): void{
    console.log(data);
  }

}
