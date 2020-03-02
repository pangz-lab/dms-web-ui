import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from './../service/query.service';
import { PayloadTemplate } from '../interface';

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
  // @Input() dataSrc: any[];
  view: any[] = [250, 250];

  // options
  gradient = true;
  showLegend = true;
  showLabels = false;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private queryService: QueryService) {
    console.log('1. Inside constructor ...');
    Object.assign(this, { single});
  }

  ngOnInit() {
    // this.queryService.getBalanceSummary()
    // .subscribe(
    //   (serverResponse: PayloadTemplate[]) => {
    //     console.log('2. Inside getBalanceSummary subscribe...');
    //     console.log(serverResponse['data']);
    //     this.balanceSummary = serverResponse['data'];
    //     const bs = serverResponse['data'];

    //     Object.assign(this, { bs});
    //     // Object.assign(this, { this.balanceSummary });
    //     // this.setupDatatable(this.tableData);
    //   },
    // );
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

}
