import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AuthService } from 'src/app/core/services/http/auth.service';
import { Card } from 'src/app/core/services/data/mockRepository.service';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.scss'],
})
export class CardDetailsFormComponent implements OnInit {

  @Input() formState = {
    submitting: false,
    success: false,
    error: undefined,
  };

  @Input() card: Card | undefined;

  @Output() submitCardDetailsForm = new EventEmitter<{
    cardId: string | undefined;
    cardName: string;
    cardImage: string | undefined;
    cardRewardProfileId: string | undefined;
  }>();

  creditCardAdded: boolean = false;

  rewardProfiles: any[] = [];

  cardId: string | undefined = undefined;
  cardName: string = '';
  cardImage: string | undefined = undefined;
  cardRewardProfileId: string | undefined = undefined;

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

  handleAddImage(): void {
    this.cardImage = 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg';
  }

  handleAddImageUrl = (url:string) => {
    if (url.length > 0) {
      console.log(url.length);
      this.cardImage = url;
    }
  }

  handleSubmitCardDetailsForm(): void {
    console.log(
      this.cardId,
      this.cardName,
      this.cardImage,
      this.cardRewardProfileId
    );
    this.submitCardDetailsForm.emit({
      cardId: this.cardId,
      cardName: this.cardName,
      cardImage: this.cardImage,
      cardRewardProfileId: this.cardRewardProfileId,
    });
  }

  handleGoBack(): void {
    this.location.back();
  }

  handleDone(): void {
    // this.router.navigate(['/cards']);
    this.location.back();
  }
}
