import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { RewardProfile, UpdateRewardProfile } from 'src/app/core/services/data/mockRepository.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-reward-profile-screen',
  templateUrl: './edit-reward-profile-screen.component.html',
  styleUrls: ['./edit-reward-profile-screen.component.scss'],
})
export class EditRewardProfileScreenComponent implements OnInit {
  $routeSub: Subscription | undefined;

  breadcrumbs: Breadcrumb[] = [
    {
      path: 'Reward Profiles',
      url: '/reward-profiles',
    },
    {
      path: 'Edit Reward Profile',
      isMatchingRoute: true,
    },
  ];

  rewardProfile: RewardProfile | undefined;

  formState = {
    error: undefined,
    submitting: false,
    success: false,
  };

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.$routeSub = this.activatedRoute.params.subscribe((params) => {
      this.httpService.getRewardProfile(params['id']).subscribe((res) => {
        this.rewardProfile = res;
      });
    });
  }

  handleSubmitRewardProfileForm = ({
    id,
    name,
    rewardConfigId,
  }: UpdateRewardProfile) => {
    this.formState = {
      ...this.formState,
      submitting: true,
      success: false,
    };
    this.httpService
      .updateRewardProfile(id, name, rewardConfigId)
      .subscribe((res) => {
        setTimeout(() => {
          this.formState = {
            ...this.formState,
            submitting: false,
            success: true,
          };
        }, 1000);
      });
  };

  handleDeleteRewardProfile = () => {
    let result = window.confirm(
      'Are you sure you want to delete this reward profile?'
    );
    if (result) {
      if (this.rewardProfile) {
        this.httpService
          .deleteRewardProfile(this.rewardProfile.Id)
          .subscribe((res) => {
            this.openSnackBar();
          });
      }
    }
  };

  openSnackBar = () => {
    let snackbar = this.matSnackBar.open('Successfully deleted', 'Done', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });

    snackbar.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
      this.location.back();
    });

    // snackbar.afterDismissed().subscribe(() => {
    //   console.log('The snack-bar was dismissed');
    // });
  };
}
