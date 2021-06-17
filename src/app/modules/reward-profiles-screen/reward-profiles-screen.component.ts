import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-reward-profiles',
  templateUrl: './reward-profiles-screen.component.html',
  styleUrls: ['./reward-profiles-screen.component.scss']
})
export class RewardProfilesScreenComponent implements OnInit, OnDestroy {

  $rewardProfiles:Subscription | undefined;
  rewardProfiles:any[] = [];

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.$rewardProfiles = this.miscService.getRewardProfiles().subscribe(res => {
      this.rewardProfiles = res;
    });
  }
  ngOnDestroy(): void {
    this.$rewardProfiles?.unsubscribe();
  }
}
