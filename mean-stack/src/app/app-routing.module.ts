import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';


const routes: Routes =[
{path:'registration' ,component:RegistrationComponent},
{path:'login' ,component:LoginComponent},
{path:'user' ,component:UserhomeComponent},
{path:'update' ,component:UpdateComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
