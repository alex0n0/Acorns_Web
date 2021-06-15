import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-edit-card-screen',
  templateUrl: './edit-card-screen.component.html',
  styleUrls: ['./edit-card-screen.component.scss']
})
export class EditCardScreenComponent implements OnInit {

  breadcrumbs:Breadcrumb[] = [
    {
      path: 'Cards',
      url: '/cards'
    },
    {
      path: 'Edit Card',
      isMatchingRoute: true
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
