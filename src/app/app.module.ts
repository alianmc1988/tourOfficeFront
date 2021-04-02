import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './public/home/default/default.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityModule } from './modules/security/security.module';
import { SecurityRoutingModule } from './modules/security/security-routing.module';
import { MiDirectivaDirective } from './public/master-page/directives/mi-directiva.directive';
import { TermsComponent } from './public/home/terms/terms.component';
import { UserModule } from './modules/user/user.module'
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    NavbarComponent,
    SideMenuComponent,
    FooterComponent,
    MiDirectivaDirective,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityModule,
    SecurityRoutingModule,
    UserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
