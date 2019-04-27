import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserboardComponent } from './userboard/userboard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'create-user', component: CreateuserComponent },
{ path: 'user-board',      component: UserboardComponent },
//{  path: 'heroes',  component: HeroListComponent,  data: { title: 'Heroes List' }},
//{ path: '', redirectTo: '/heroes',   pathMatch: 'full'},
//{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
