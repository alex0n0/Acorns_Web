import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-reward-profile-form',
  templateUrl: './reward-profile-form.component.html',
  styleUrls: ['./reward-profile-form.component.scss']
})
export class RewardProfileFormComponent implements OnInit {

  @Input() options = {
    createNewProfile: false
  };

  rewardProfileConfigId = undefined;
  rewardProfileConfigs:any[] = [];

  constructor(private httpService: HttpService, private location: Location) { }

  ngOnInit(): void {
    this.httpService.getRewardProfileConfigs().subscribe(res => {
      this.rewardProfileConfigs = res;
      this.rewardProfileConfigId = this.rewardProfileConfigs[0].Id;
    });
  }

  goBack():void {
    this.location.back();
  }

  submit():void {
    
  }

}
