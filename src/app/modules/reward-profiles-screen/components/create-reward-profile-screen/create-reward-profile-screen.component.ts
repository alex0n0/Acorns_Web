import { Component, OnInit } from '@angular/core';
import { CreateRewardProfile } from 'src/app/core/services/data/mockRepository.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-create-reward-profile-screen',
  templateUrl: './create-reward-profile-screen.component.html',
  styleUrls: ['./create-reward-profile-screen.component.scss'],
})
export class CreateRewardProfileScreenComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      path: 'Reward Profiles',
      url: '/reward-profiles',
    },
    {
      path: 'Create Reward Profile',
      isMatchingRoute: true,
    },
  ];

  formState = {
    error: undefined,
    submitting: false,
    success: false,
  };

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  handleSubmitRewardProfileForm = ({
    name,
    rewardConfigId,
  }: CreateRewardProfile) => {
    this.formState = {
      ...this.formState,
      submitting: true,
      success: false,
    };
    this.httpService.createRewardProfile(name, rewardConfigId).subscribe((res) => {
      setTimeout(() => {
        this.formState = {
          ...this.formState,
          submitting: false,
          success: true,
        };
      }, 1000);
    });
  };
}
