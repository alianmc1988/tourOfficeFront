import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(public el:ElementRef, public _renderer:Renderer2) { }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this._renderer.setStyle(this.el.nativeElement,'display','none');
  }

}
