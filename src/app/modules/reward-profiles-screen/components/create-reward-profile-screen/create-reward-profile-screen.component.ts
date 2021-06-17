import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-create-reward-profile-screen',
  templateUrl: './create-reward-profile-screen.component.html',
  styleUrls: ['./create-reward-profile-screen.component.scss']
})
export class CreateRewardProfileScreenComponent implements OnInit {

  breadcrumbs:Breadcrumb[] = [
    {
      path: 'Reward Profiles',
      url: '/reward-profiles'
    },
    {
      path: 'Create Reward Profile',
      isMatchingRoute: true
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
