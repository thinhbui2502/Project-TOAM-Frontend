
import { NgModule } from '@angular/core';
import {IndexComponent} from './component/index/index.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './register/register.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';

import {LoginComponent} from './component/login/login.component';
import {DetailsComponent} from "./component/details/details.component";
import {AuthGuard} from "./_helpers/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path:'detail',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
