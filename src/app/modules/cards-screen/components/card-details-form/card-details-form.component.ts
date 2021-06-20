import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AuthService } from 'src/app/core/services/http/auth.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.scss'],
})
export class CardDetailsFormComponent implements OnInit {
  @Input() options = {
    createNewCard: false,
  };
  @Input() card: any;

  formState = {
    submitting: false,
    success: false,
    error: undefined,
  };

  creditCardAdded: boolean = false;

  rewardProfiles: any[] = [];

  cardId: string = uuid();
  cardName: string = '';
  cardRewardProfileId: string | undefined = undefined;
  cardImage: string | undefined = undefined;

  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getOrgDetails().subscribe((res) => {
      this.creditCardAdded = res.CreditCardAdded;

      if (this.creditCardAdded) {
        this.httpService.getRewardProfiles().subscribe((res) => {
          this.rewardProfiles = res;
        });
      }
    });

    if (this.card) {
      this.cardId = this.card.Id;
      this.cardName = this.card.Name;
      this.cardRewardProfileId = this.card.RewardProfile?.Id;
      this.cardImage = this.card.CardImage;
    }
    console.log(
      this.cardId,
      this.cardName,
      this.cardImage,
      this.cardRewardProfileId
    );
  }

  addImage(): void {
    this.cardImage = 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg';
  }

  submit(): void {
    console.log(
      this.cardId,
      this.cardName,
      this.cardImage,
      this.cardRewardProfileId
    );

    this.formState.submitting = true;

    if (this.options.createNewCard) {
      this.httpService
        .createBusinessCard(
          this.cardName,
          this.cardImage,
          this.cardRewardProfileId
        )
        .subscribe((res) => {
          setTimeout(() => {
            this.formState = {
              ...this.formState,
              submitting: false,
              success: true,
            };
          }, 1000);
        });
    } else {
      this.httpService
        .patchBusinessCard(
          this.cardId,
          this.cardName,
          this.cardImage,
          this.cardRewardProfileId
        )
        .subscribe((res) => {
          setTimeout(() => {
            this.formState = {
              ...this.formState,
              submitting: false,
              success: true,
            };
          }, 1000);
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  done(): void {
    // this.router.navigate(['/cards']);
    this.location.back();
  }
}
