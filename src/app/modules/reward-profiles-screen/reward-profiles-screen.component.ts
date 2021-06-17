import { Component, OnInit } from '@angular/core';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-reward-profiles',
  templateUrl: './reward-profiles-screen.component.html',
  styleUrls: ['./reward-profiles-screen.component.scss']
})
export class RewardProfilesScreenComponent implements OnInit {

  rewardProfiles:any[] = [];

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.miscService.getRewardProfiles().subscribe(res => {
      this.rewardProfiles = res;
    });
  }
}
