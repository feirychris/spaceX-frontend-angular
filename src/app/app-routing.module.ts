import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './capsule/capsule.component';
import { HomeComponent } from './home/home.component';
import { LaunchesComponent } from './launches/launches.component';



const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'capsule', component: CapsuleComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
 ];
  
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }

