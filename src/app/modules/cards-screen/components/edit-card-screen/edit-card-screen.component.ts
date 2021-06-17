import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiscService } from 'src/app/core/services/http/misc.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-edit-card-screen',
  templateUrl: './edit-card-screen.component.html',
  styleUrls: ['./edit-card-screen.component.scss']
})
export class EditCardScreenComponent implements OnInit {

  card:any | undefined;

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
  
  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.miscService.getCard("asdfasdf").subscribe(res => {
      this.card = res;
    });
  }
}
