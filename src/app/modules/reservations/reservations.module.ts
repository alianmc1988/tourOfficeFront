import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ModifyReservationComponent } from './modify-reservation/modify-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { RemoveReservationComponent } from './remove-reservation/remove-reservation.component';


@NgModule({
  declarations: [CreateReservationComponent, ModifyReservationComponent, ListReservationComponent, RemoveReservationComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
