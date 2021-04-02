import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionPageComponent } from './session/session-page/session-page.component';

const routes: Routes = [
  {
    path:'session',
    component:SessionPageComponent
  },
  {
    path:' ',
    pathMatch:'full',
    component:SessionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
