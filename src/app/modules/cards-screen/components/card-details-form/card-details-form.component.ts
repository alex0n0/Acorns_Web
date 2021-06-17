import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.scss']
})
export class CardDetailsFormComponent implements OnInit {

  @Input() card:any;
  
  rewardProfiles:any[] = [];
  
  creditCardAdded:boolean = false;

  constructor(private miscService: MiscService, private location: Location) { }

  ngOnInit(): void {
    this.miscService.getRewardProfiles().subscribe(res => {
      this.rewardProfiles = res;
    });
    this.miscService.getAccountCredentials().subscribe(res => {
      this.creditCardAdded = res.CreditCardAdded;
    });
  }

  goBack():void {
    this.location.back();
  }

  submit():void {
    
  }
}
