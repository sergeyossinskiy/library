import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, AuthComponent } from './components/layouts';
import { HomeComponent, LoginComponent, RootComponent  } from './components/pages';
import { config } from './config';
import { AuthGuard, NotAuthGuard } from './guards';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},      
      { path: 'root', component: RootComponent, canActivate: [AuthGuard] } 
  ]},
  {
    path: '', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
