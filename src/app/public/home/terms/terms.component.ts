import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  terminos:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum similique quisquam itaque. Ullam est dolore tempore velit vitae cum! Dolorem maxime tempore inventore, temporibus fuga maiores expedita eligendi alias sapiente incidunt eos asperiores reiciendis aperiam, iure autem odit voluptatum culpa itaque. Magni, molestias explicabo nesciunt sequi voluptas dicta laudantium sit itaque impedit adipisci nemo neque mollitia commodi quasi iste repellendus hic natus saepe laborum necessitatibus autem provident voluptate. Magnam, expedita accusamus. Sed aliquam, voluptas maxime eum magnam mollitia asperiores sequi velit, facilis commodi alias repellat cum. Vero nobis sequi distinctio voluptatem asperiores. Ex, nulla optio. Dolorem ad suscipit porro sunt, nesciunt amet nobis possimus consectetur vero maiores molestias? Ex reiciendis dolore quod adipisci est, eveniet voluptates veritatis a, error vel saepe soluta ea labore. Quia nulla, deleniti recusandae corrupti pariatur eaque atque qui ex unde mollitia veniam culpa minus quibusdam deserunt quod error sit amet. Possimus cumque, asperiores debitis laudantium repudiandae "
  chekea:boolean = false;
  description:string = "una breve descripcion de su casa y sus caracteristicas (hasta 100 palabras)"
  
  // formgroup
  enviabtn:FormGroup;
  email:any;
  
  constructor(private _formbuilder:FormBuilder) {
    this.enviabtn = _formbuilder.group({
      inputmail:["",[Validators.email, Validators.required]]
            
    })
  
  }

  ngOnInit(): void {
  
  }
  suscribe(){
    if ((document.getElementById('terminosUsosCheckBox')as HTMLInputElement).checked == true){
    this.chekea = true;
    
    }else{this.chekea = false}
   
  }
  enviaSuscription(){
  if(this.enviabtn.valid){
    this.email = this.enviabtn.value
  }
  // Mandar peticion get al backend para obtener link de suscribe
  // Mandar email al usuario con datos de continuar y link
  console.log(this.email);
  
    alert("Se le envio un mail con los datos de suscripcion. Gracias!")
  }
  
}
