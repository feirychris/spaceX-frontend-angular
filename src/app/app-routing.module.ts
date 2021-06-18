
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './capsules/capsules.component';
import { ComponentLaunchesComponent } from './component-launches/component-launches.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'capsules', component: CapsulesComponent },
  { path : 'launches', component: ComponentLaunchesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

