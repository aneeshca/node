import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit  {
  userId:any;
  user:any=[];
     id:any
     fname:any
     lname:any 
     email:any 
     phone:any
   
  constructor(private service:RegistrationService,private route:ActivatedRoute,private rou:Router) { }
  ngOnInit(): void {

        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId)

        let token=localStorage.getItem('token')  
        let useid2=localStorage.getItem('')
        if(token){
        
        this.service.getOneUser(this.userId).subscribe((data)=>{
                   this.id=data.id;
                   this.fname=data.fname;
                   this.lname=data.lname;
                   this.email=data.email;
                   this.phone=data.phone;
          

         
        console.log(data)
        
      })
    } 

    

  }
   updatePro(){
     let token=localStorage.getItem('token')
     if(token){
    this.rou.navigate(['/update',{id:this.id }])
     }
   }
   
   deleteUser (){
    console.log(this.id)

    if(localStorage.getItem('token')){
      localStorage.removeItem('token')
      this.rou.navigate(['/registration'])


    }
   
   this.service.deleteUserAccount(this.id).subscribe((_result)=>{
   
       
   })

   }
   
 
  }

  


