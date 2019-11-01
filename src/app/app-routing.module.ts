import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'send'},
  {path: 'send', children: [
    {path: '', pathMatch: 'full', redirectTo: '/send/' + environment.DEFAULT_USER},
    {path: ':id', component: MainComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
