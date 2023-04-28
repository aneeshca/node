import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userId:any;
  user:any=[];
  UpadteForm= new FormGroup({
     fname:new FormControl(""),
     lname:new FormControl(""),
     email:new FormControl(""),
     phone:new FormControl(""),
    
  })




  constructor(private service:RegistrationService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {

        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId)

        let token=localStorage.getItem('token')  
        if(token){
        
        this.service.getOneUser(this.userId).subscribe((data)=>{

               this.UpadteForm=new FormGroup({
              fname:new FormControl(data['fname']),
              lname:new FormControl(data['lname']),
              email:new FormControl(data['email']),
              phone:new FormControl(data['phone'])

          })
            
          

         
        console.log(data)
        
      })
    } 

    

  }

  UpdateFm(){
     
     let body= this.UpadteForm.value
     let token=localStorage.getItem('token')  
     if(token){
     let up= this.service.updateUser(body,this.userId).subscribe((result)=>{
      if(result){
        this.router.navigate(['/user',{id:this.userId }])
      }
     
      
     })
    }
      
    

      
  }

}
