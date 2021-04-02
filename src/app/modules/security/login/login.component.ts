import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email= "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passvalid='^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$';
  loginForm:FormGroup;
  
  constructor(private _builder:FormBuilder) {
    this.loginForm = this._builder.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    })
    
  }

  ngOnInit(): void {
    this.easyin();
  if (this.loginForm.valid) {
    console.log('valido')
    
  }else{
    console.log('esto no es valido')
  }
  }
  
  send(e:any){
    console.log(e)
  }
  
  easyin = ()=>{
    (document.querySelector('.form-login') as HTMLElement).className.replace('.form-login', '.form-login-animation')
  }
}
