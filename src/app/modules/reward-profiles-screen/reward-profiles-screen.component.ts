import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AuthService } from 'src/app/core/services/http/auth.service';

@Component({
  selector: 'app-reward-profiles',
  templateUrl: './reward-profiles-screen.component.html',
  styleUrls: ['./reward-profiles-screen.component.scss']
})
export class RewardProfilesScreenComponent implements OnInit {

  creditCardAdded: boolean = false;

  rewardProfiles:any[] = [];
  
  constructor(private httpService: HttpService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getOrgDetails().subscribe(res => {
      this.creditCardAdded = res.CreditCardAdded;
      this.httpService.getRewardProfiles().subscribe(res => {
        this.rewardProfiles = res;
      });
    });

    this.authService.getOrgDetails().subscribe((res) => {
      this.creditCardAdded = res.CreditCardAdded;

      if (this.creditCardAdded) {
        this.httpService.getRewardProfiles().subscribe((res) => {
          this.rewardProfiles = res;
        });
      }
    });
  }
}
