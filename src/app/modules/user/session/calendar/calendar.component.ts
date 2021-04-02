import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  daysSpell = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  daysNumber = [31];
  weeksNumber = [1,2,3,4,5];
  
  constructor() { }

  ngOnInit(): void {
  }

}
