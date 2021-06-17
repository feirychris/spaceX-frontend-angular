import { Component, OnInit } from '@angular/core';
import { Capsule } from '../models/capsules';
import { CapsulesService } from '../services/capsules.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  capsules!: Capsule[]

  constructor(private capsuleService: CapsulesService) { }

  ngOnInit(): void {
    this.getAllCapsule();
  }


  getAllCapsule(): void {
    this.capsuleService.getAll()
    .subscribe(
      data => {
        this.capsules = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      
    );
  }

}
