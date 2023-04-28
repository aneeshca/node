import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=[''];
  constructor(private service:RegistrationService,private router:Router) { }
  ngOnInit(): void {
      
      let token=localStorage.getItem('token');
      if(token){
       this.service.getAllUser(token).subscribe((result)=>{
       this.users=result;
       }
       );
      }
  }
}
  


