import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   readonly  pageUrl='http://localhost:3000'

   constructor(private http :HttpClient,private router:Router){
   
   const token= localStorage.getItem('token')
   this._isLoggedIn.next(!! token);


  };



  saveStud(body: any){
          return this.http.post(`${this.pageUrl}/save`, body);
      
  }
 private _isLoggedIn=new BehaviorSubject<boolean>(false)
   isLoggedIn=this._isLoggedIn.asObservable();
   

  SignIn(body: any){
    return this.http.post(`${this.pageUrl}/signin`, body).pipe(tap(
   (response:any)=>{
      console.log(response.token);
      console.log(response);
      
      localStorage.setItem('token',response.token)
      this._isLoggedIn.next(true);
      

   }

    ));
  
}
  LogOut(){
    
    localStorage.removeItem('token')
    localStorage.clear();
   let token= localStorage.getItem('token')
    if(token!=''){
         this.router.navigateByUrl('/login')
    }
    
 
  }

  getAllUser(token:any){
    const httpHeader=new HttpHeaders({
      'Content-Type':"application/jason",
      'Authorization':`Bearer ${token}`
   
    })
    
    return this.http.get(`${this.pageUrl}/getAll` ,{headers:httpHeader}).pipe(tap((response:any)=>{
      
    
    }));
  }

  
getOneUser(user_id:any){
 
  
  return this.http.get(`${this.pageUrl}/findOneUser/${user_id}`).pipe(tap(

    (response:any)=>{

      console.log("email is "+response.email)
    }
  ));

}
updateUser(user:any,user_id:any){
 return this.http.post(`${this.pageUrl}/update/${user_id}`,user)

}

deleteUserAccount(user_id:any){

  var res =  this.http.delete(`${this.pageUrl}/delete/${user_id}`)
  console.log(res);
  return res;
  

}




}
