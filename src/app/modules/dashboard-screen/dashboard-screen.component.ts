import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsdfService } from 'src/app/core/services/http/asdf.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit {
  $users: Subscription | undefined;

  constructor(private asdfService: AsdfService) { }

  ngOnInit(): void {
    this.$users = this.asdfService.getUsers().subscribe(res => {
      console.log(res);
    });
  }
  ngOnDestroy() {
    this.$users?.unsubscribe();
  }
}
