import { Component, OnInit } from '@angular/core';
import { MiscService } from 'src/app/core/services/http/misc.service';

@Component({
  selector: 'app-cards-screen',
  templateUrl: './cards-screen.component.html',
  styleUrls: ['./cards-screen.component.scss']
})
export class CardsScreenComponent implements OnInit {
  activeCards:any[] = [];
  inactiveCards:any[] = [];
  activeCardExists:boolean = false;

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.miscService.getCards().subscribe(res => {
      this.activeCards = res.active;
      this.inactiveCards = res.inactive;
      this.activeCardExists = res.active.length > 0 ? true : false;
    });
  }
}
