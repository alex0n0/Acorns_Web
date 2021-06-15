import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiscService } from 'src/app/core/services/http/misc.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit, OnDestroy {
  $users: Subscription | undefined;

  constructor(private miscService: MiscService) { }

  ngOnInit(): void {
    this.$users = this.miscService.getUsers().subscribe(res => {
      console.log(res);
    });
  }
  ngOnDestroy() {
    this.$users?.unsubscribe();
  }
}
