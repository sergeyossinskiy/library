import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LibraryRoutingModule } from './library-routing.module';
import { AppComponent, MainLayoutComponent } from './components/layouts';
import { HomeComponent, LoginComponent, RootComponent  } from './components/pages';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { HeaderComponent } from './components/headers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialComponent, AuthButtonsComponent } from './components/links';
import { MultiselectListComponent, LanguageComponent, DropdownComponent, SearchTopicsListComponent, CatalogsListComponent, SearchFieldsListComponent, DocLanguageListComponent } from './components/lists';
import { SearchInputComponent } from './components/inputs';
import { TranslateDbPipe } from './pipes';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
import { SelectListComponent } from './components/lists/select-list/select-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    MainLayoutComponent, 
    RootComponent, 
    LoginComponent, 
    AuthComponent, 
    HeaderComponent, 
    SocialComponent, 
    LanguageComponent, 
    AuthButtonsComponent, 
    SearchInputComponent, 
    DropdownComponent,
    TranslateDbPipe,
    CheckboxComponent,
    SearchTopicsListComponent,
    CatalogsListComponent,
    MultiselectListComponent,
    SearchFieldsListComponent,
    SelectListComponent,
    DocLanguageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    TranslateModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class LibraryModule { }
