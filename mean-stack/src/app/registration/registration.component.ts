import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from '../registration.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private service:RegistrationService,private router:Router){}
   emailRegex="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  RegistrationForm=new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
    password: new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(8)])
    })
     getControl(name:any):AbstractControl | null {
      return this.RegistrationForm.get(name);
     }
  
     RegisterFm(){
      console.log(this.RegistrationForm.value);
          const data = this.RegistrationForm.value;
        this.service.saveStud(data).subscribe((data)=>{
              console.log(data.toString);
              if(data !='')this.router.navigate(['/login']);
             
            
             
        })
      
      
   
     }
  
  }




