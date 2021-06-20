import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Subscription } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss'],
})
export class DashboardScreenComponent implements OnInit {
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
      ]
    }
  };
  // public lineChartColors: Color[] = [
  //   { borderColor: 'black', backgroundColor: 'rgba(255,0,0,0.3)' },
  // ];
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType:ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCustomerUserAccounts().subscribe((res) => {
      console.log(res);
    });
    this.httpService.getCustomerTransactions().subscribe((res) => {
      console.log(res);

      this.lineChartData.push({
        label: "transactions",
        data: res.map(transaction => transaction.Transactions.length),
        fill: true,
        cubicInterpolationMode: "monotone",
        lineTension: 0,
        borderWidth: 1,
        pointRadius: 0,
      });
      this.lineChartLabels = res.map(transaction => transaction.DateTime.getFullYear() + '/' + transaction.DateTime.getMonth() + 1 + '/' + transaction.DateTime.getDate());
      this.lineChartColors.push({ borderColor: 'black', backgroundColor: 'rgba(0,0,0,0.3)' });
    });
  }
}
