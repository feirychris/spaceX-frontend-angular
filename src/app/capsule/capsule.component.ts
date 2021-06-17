import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Capsule } from '../models/capsule';
import { CapsuleService } from '../_services/capsule.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {

  capsules!: Capsule[];

  constructor(
    private capsuleService: CapsuleService
  ) { }

  ngOnInit(): void {
    this.getAllCapsules();

  }

  getAllCapsules() : void {
    this.capsuleService.getCapsuleSerial().subscribe(
      data=>{
        this.capsules=data;
      },
      error=>{console.log(error)}
    )
  }

}
