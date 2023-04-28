import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from '../registration.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
constructor(private service:RegistrationService,private router:Router){}


LoginForm=new FormGroup({
email:new FormControl("",[Validators.required]),
password: new FormControl("",[Validators.required])
})
 getControl(name:any):AbstractControl | null {
  return this.LoginForm.get(name);
 }
loginFm(){
  console.log(this.LoginForm.value);
  const data=this.LoginForm.value
  this.service.SignIn(data).subscribe((result)=>{
    
    if(result !=''){
      console.log("user id"+result.user_id)
    this.router.navigate(['/user',{ id: result.user_id }]);
    console.log('login success');
    }else{
      console.log('login error')
      this.router.navigate(['/registration'])
    }
    
  })
  

  
}




}
