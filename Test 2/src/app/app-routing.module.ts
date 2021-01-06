import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/loggin/loggin.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  { path: "login",
   component: LogginComponent,
    pathMatch: "full" },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
