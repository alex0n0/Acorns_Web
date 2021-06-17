import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-edit-reward-profile-screen',
  templateUrl: './edit-reward-profile-screen.component.html',
  styleUrls: ['./edit-reward-profile-screen.component.scss']
})
export class EditRewardProfileScreenComponent implements OnInit {

  breadcrumbs:Breadcrumb[] = [
    {
      path: 'Reward Profiles',
      url: '/reward-profiles'
    },
    {
      path: 'Edit Reward Profile',
      isMatchingRoute: true
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
