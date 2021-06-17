import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.scss']
})
export class CardDetailsFormComponent implements OnInit {

  @Input() card:any;
  
  $rewardProfiles:Subscription | undefined;
  rewardProfiles:any[] = [];
  
  $accountCredentials:Subscription | undefined;
  creditCardAdded:boolean = false;

  constructor(private miscService: MiscService, private location: Location) { }

  ngOnInit(): void {
    this.$rewardProfiles = this.miscService.getRewardProfiles().subscribe(res => {
      this.rewardProfiles = res;
    });
    this.$accountCredentials = this.miscService.getAccountCredentials().subscribe(res => {
      this.creditCardAdded = res.CreditCardAdded;
    });
  }

  ngOnDestroy():void {
    this.$rewardProfiles?.unsubscribe();
  }

  goBack():void {
    this.location.back();
  }

  submit():void {
    
  }
}
