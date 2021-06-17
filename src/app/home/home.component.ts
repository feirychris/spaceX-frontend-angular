import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapsuleService } from '../_services/capsule.service';
import { LaunchesService } from '../_services/launches.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private capsuleService: CapsuleService,
    private launchesService: LaunchesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  goToCapsule(){
    this.router.navigate(['/capsule']);
  }

  goToLaunches(){
    this.router.navigate(['/launches'])
  }

}
