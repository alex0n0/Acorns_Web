import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from 'src/app/core/services/http/http.service';
import { CreateRewardProfile, RewardProfile, UpdateRewardProfile } from 'src/app/core/services/data/mockRepository.service';

@Component({
  selector: 'app-reward-profile-form',
  templateUrl: './reward-profile-form.component.html',
  styleUrls: ['./reward-profile-form.component.scss'],
})
export class RewardProfileFormComponent implements OnInit {
  @Input() formState = {
    submitting: false,
    success: false,
    error: undefined,
  };

  @Input() rewardProfile: RewardProfile | undefined;

  @Output() submitRewardProfileForm = new EventEmitter<CreateRewardProfile | UpdateRewardProfile>();

  rewardConfigs: any[] = [];

  rewardProfileId: string | undefined = undefined;
  rewardProfileName: string = '';
  rewardConfigId: string | undefined = undefined;

  constructor(private httpService: HttpService, private location: Location) {}

  ngOnInit(): void {
    this.httpService.getRewardConfigs().subscribe((res) => {
      this.rewardConfigs = res;
    });

    if (this.rewardProfile != null) {
      this.rewardProfileId = this.rewardProfile.Id;
      this.rewardProfileName = this.rewardProfile.Name;
      this.rewardConfigId = this.rewardProfile.RewardConfig?.Id;
    }
  }

  handleSubmitRewardProfileForm(): void {
    this.submitRewardProfileForm.emit({
      id: this.rewardProfileId,
      name: this.rewardProfileName,
      rewardConfigId: this.rewardConfigId,
    });
  }

  handleGoBack(): void {
    this.location.back();
  }

  handleDone(): void {
    this.location.back();
  }
}
