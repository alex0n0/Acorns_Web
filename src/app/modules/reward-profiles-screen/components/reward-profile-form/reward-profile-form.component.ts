import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-reward-profile-form',
  templateUrl: './reward-profile-form.component.html',
  styleUrls: ['./reward-profile-form.component.scss']
})
export class RewardProfileFormComponent implements OnInit {

  constructor(private miscService: MiscService, private location: Location) { }

  ngOnInit(): void {
  }

  goBack():void {
    this.location.back();
  }

  submit():void {
    
  }

}
