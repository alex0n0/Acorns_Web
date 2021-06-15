import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiscService } from 'src/app/core/services/http/misc.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-cards-screen',
  templateUrl: './cards-screen.component.html',
  styleUrls: ['./cards-screen.component.scss']
})
export class CardsScreenComponent implements OnInit, OnDestroy {

  $cards:Subscription | undefined;

  activeCards:any[] = [];
  inactiveCards:any[] = [];
  activeCardExists:boolean = false;

  breadcrumbs:Breadcrumb[] = [
    {
      path: 'Cards',
      isMatchingRoute: true
    }
  ];

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.$cards = this.miscService.getCards().subscribe(res => {
      this.activeCards = res.active;
      this.inactiveCards = res.inactive;
      this.activeCardExists = res.active.length > 0 ? true : false;
    });
  }

  ngOnDestroy() {
    this.$cards?.unsubscribe();
  }

}
