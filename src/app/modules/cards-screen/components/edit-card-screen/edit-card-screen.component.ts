import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiscService } from 'src/app/core/services/http/misc.service';
import { Breadcrumb } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-edit-card-screen',
  templateUrl: './edit-card-screen.component.html',
  styleUrls: ['./edit-card-screen.component.scss']
})
export class EditCardScreenComponent implements OnInit, OnDestroy {

  $card:Subscription | undefined;
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
    this.$card = this.miscService.getCard("asdfasdf").subscribe(res => {
      this.card = res;
    });
  }

  ngOnDestroy() {
    this.$card?.unsubscribe();
  }

}
