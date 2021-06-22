import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-edit-card-screen',
  templateUrl: './edit-card-screen.component.html',
  styleUrls: ['./edit-card-screen.component.scss'],
})
export class EditCardScreenComponent implements OnInit, OnDestroy {
  $routeSub: Subscription | undefined;

  card: any | undefined;

  breadcrumbs: Breadcrumb[] = [
    {
      path: 'Cards',
      url: '/cards',
    },
    {
      path: 'Edit Card',
      isMatchingRoute: true,
    },
  ];

  formState = {
    submitting: false,
    success: false,
    error: undefined,
  };

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.$routeSub = this.activatedRoute.params.subscribe((params) => {
      this.httpService.getBusinessCard(params['id']).subscribe((res) => {
        this.card = res;
      });
    });
  }

  ngOnDestroy(): void {
    this.$routeSub?.unsubscribe();
  }

  handleSubmitCardDetailsForm = ({
    cardId,
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
      .updateBusinessCard(cardId ? cardId : '', cardName, cardImage, cardRewardProfileId)
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
