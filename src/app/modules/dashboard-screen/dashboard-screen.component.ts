import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiscService } from 'src/app/core/services/http/misc.service';
import { Subscription } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss']
})
export class DashboardScreenComponent implements OnInit, OnDestroy {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

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
