import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-create-card-screen',
  templateUrl: './create-card-screen.component.html',
  styleUrls: ['./create-card-screen.component.scss']
})
export class CreateCardScreenComponent implements OnInit {

  breadcrumbs:Breadcrumb[] = [
    {
      path: 'Cards',
      url: '/cards'
    },
    {
      path: 'Create Card',
      url: '/cards/create-card',
      isMatchingRoute: true
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
