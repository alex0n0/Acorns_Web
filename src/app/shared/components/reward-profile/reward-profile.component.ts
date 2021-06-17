import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-profile',
  templateUrl: './reward-profile.component.html',
  styleUrls: ['./reward-profile.component.scss']
})
export class RewardProfileComponent implements OnInit {

  @Input() rewardProfile:any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
