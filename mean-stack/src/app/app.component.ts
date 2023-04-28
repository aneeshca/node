import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {
 constructor(public service:RegistrationService){
 
  



 }
 logout(){
  return this.service.LogOut();
 }

 
  title = 'mean-stack';

 


}
