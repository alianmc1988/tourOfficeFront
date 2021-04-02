
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  nav_visible:boolean = true;
  text = 'tourOfficeFront';
  direccion:string = '/home';
  
  cambia(){
    this.nav_visible = !this.nav_visible;
    if (this.nav_visible == false) {
      this.direccion = 'session'
    }
  }
  
}

