import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
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
      isMatchingRoute: true
    }
  ];
  
  constructor(private miscService:HttpService) { }

  ngOnInit(): void {

  }
}
