import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSlideMenu]'
})
export class SlideMenuDirective implements OnInit{

  constructor(public el:ElementRef, public render:Renderer2) {
    
  }
   valorLeft:string = '-300px';
  ngOnInit(){
    this.render.setStyle(this.el.nativeElement,"left", this.valorLeft)
  }
  
  elClick(appSlideMenu:string){
  this.valorLeft = appSlideMenu;
    this.render.setStyle(this.el.nativeElement,"left", this.valorLeft)
  }
}

