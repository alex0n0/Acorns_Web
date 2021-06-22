import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/services/data/mockRepository.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-create-card-screen',
  templateUrl: './create-card-screen.component.html',
  styleUrls: ['./create-card-screen.component.scss'],
})
export class CreateCardScreenComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      path: 'Cards',
      url: '/cards',
    },
    {
      path: 'Create Card',
      isMatchingRoute: true,
    },
  ];

  formState = {
    submitting: false,
    success: false,
    error: undefined,
  };

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  handleSubmitCardDetailsForm = ({
    cardName,
    cardImage,
    cardRewardProfileId,
  }: {
    cardId: string | undefined;
    cardName: string;
    cardImage: string | undefined;
    cardRewardProfileId: string | undefined;
  }) => {
    this.formState = {
      ...this.formState,
      submitting: true,
      success: false,
    };
    this.httpService
      .createBusinessCard(cardName, cardImage, cardRewardProfileId)
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
}
