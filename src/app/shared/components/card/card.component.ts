import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() options = {
    overrideContent: false
  }

  @Input() card:any;
  @Input() activeCardExists:boolean = false;

  @Output() swapActiveBusinessCard = new EventEmitter<string>();
  @Output() deleteBusinessCard = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSwapActiveBusinessCard = (id:string) => {
    this.swapActiveBusinessCard.emit(id);
  }
  handleDeleteBusinessCard = (id:string) => {
    this.deleteBusinessCard.emit(id);
  }
}
