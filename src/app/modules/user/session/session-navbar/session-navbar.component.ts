import { HtmlAstPath } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-session-navbar',
  templateUrl: './session-navbar.component.html',
  styleUrls: ['./session-navbar.component.css']
})
export class SessionNavbarComponent implements OnInit {

  name:string = "Default";
  avatar:any;
  cantNotifications:number = 0;
  estilo = 'left: -380px;';
  seeit:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  elClick(){
  if(this.seeit == false){
    this.estilo = "left: 0px;";
    this.seeit = true;
  }else{
    this.estilo = "left: -380px;";
    this.seeit = false;
  }
    
  }
}


