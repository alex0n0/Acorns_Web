import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/services/data/repository.service';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-cards-screen',
  templateUrl: './cards-screen.component.html',
  styleUrls: ['./cards-screen.component.scss'],
})
export class CardsScreenComponent implements OnInit {
  activeCards: Card[] = [];
  inactiveCards: Card[] = [];
  activeCardExists: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBusinessCards();
  }

  getBusinessCards = () => {
    this.httpService.getBusinessCards().subscribe((res) => {
      this.processActiveInactiveCards(res);
    });
  };

  processActiveInactiveCards = (businessCards: {
    ActiveCards: Card[];
    InactiveCards: Card[];
  }) => {
    this.activeCards = businessCards.ActiveCards;
    this.inactiveCards = businessCards.InactiveCards;
    this.activeCardExists = businessCards.ActiveCards.length > 0 ? true : false;
  };

  handleDeleteBusinessCard = (id: string) => {
    this.httpService.deleteBusinessCard(id).subscribe((res) => {
      this.getBusinessCards();
    });
  };

  handleSwapActiveBusinessCard = (id: string) => {
    this.httpService.swapActiveBusinessCard(id).subscribe((res) => {
      this.getBusinessCards();
    });
  };
}
