import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/security/login/login.component';
import { SuscriptionComponent } from './modules/security/suscription/suscription.component';
import { SessionPageComponent } from './modules/user/session/session-page/session-page.component';
import { DefaultComponent } from './public/home/default/default.component';
import { TermsComponent } from './public/home/terms/terms.component';

const joinRuta:string = "sessionId"
const routes: Routes = [
  {
    path:'home', 
    component:DefaultComponent,
  },  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'suscription',
    component:SuscriptionComponent
  },
  
  {
  // Realmente va ruta desde el servidor
    path: 'session',
    component:SessionPageComponent
  },
  {
    path:'**', pathMatch:'full', redirectTo:'home'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
