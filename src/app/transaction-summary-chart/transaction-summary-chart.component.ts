import { Component, OnInit } from '@angular/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
//https://github.com/swimlane/ngx-charts
//https://stackblitz.com/edit/swimlane-pie-chart?embed=1&file=app/app.component.ts
//https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-horizontal

@Component({
  selector: 'app-transaction-summary-chart',
  templateUrl: './transaction-summary-chart.component.html',
  styleUrls: ['./transaction-summary-chart.component.css']
})
export class TransactionSummaryChartComponent implements OnInit {
  single: any[];
  view: any[] = [250, 250];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
  }

}
