import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscription',
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css']
})
export class SuscriptionComponent implements OnInit {
 
  house_pics:object = [3]
  
  description:string = "una breve descripcion de su casa y sus caracteristicas (hasta 100 palabras)"
  constructor() { }

  ngOnInit(): void {
  }
  // Esta funcion "send()" envia la info luego de ser validada hacia el backEnd.
  // este a su vez, envia email con datos de User y Password TODA VEZ QUE SE HAYA COMPLETADO EL PAGO CORRESPONDIENTE
  send():void{
  
  }

}
