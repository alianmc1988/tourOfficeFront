import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserEmitterComponent } from './user-emitter/user-emitter.component';
import { UserReceiverComponent } from './user-receiver/user-receiver.component';
import { SessionPageComponent } from './session/session-page/session-page.component';
import { SideMenuComponent } from './session/side-menu/side-menu.component';
import { FooterComponent } from './session/footer/footer.component';
import { SessionNavbarComponent } from './session/session-navbar/session-navbar.component';
import { SlideMenuDirective } from './session/slide-menu.directive';
import { SessionMainDisplayComponent } from './session/session-main-display/session-main-display.component';
import { HouseBoockingComponent } from './house-boocking/house-boocking.component';
import { CalendarComponent } from './session/calendar/calendar.component';

@NgModule({
  declarations: [
  UserEmitterComponent, 
  UserReceiverComponent, 
  SessionPageComponent, 
  SideMenuComponent, 
  FooterComponent, 
  SessionNavbarComponent, SlideMenuDirective, SessionMainDisplayComponent, HouseBoockingComponent, CalendarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  bootstrap: [SessionPageComponent]
})
export class UserModule { }
