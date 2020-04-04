import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from 'src/app/service/query.service';
import { UserTransactionDetail, PayloadTemplate} from 'src/app/interface';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-transaction-summary-chart',
  templateUrl: './transaction-summary-chart.component.html',
  styleUrls: ['./transaction-summary-chart.component.css']
})
export class TransactionSummaryChartComponent implements OnInit {
    // Pie
    public pieChartOptions: ChartOptions = {
      responsive: true,
      legend: { position: 'left'}
    };
    public pieChartLabels: Label[] = ['Current Balance', 'Stake Rewards'];
    // public pieChartLabels: Label[];
    public pieChartData: SingleDataSet = [30, 70];
    // public pieChartData: SingleDataSet;
    // public pieChartData: number[];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor(private queryService: QueryService) {
      // this.queryService.getBalanceSummary()
      // .subscribe(
      //   (serverResponse: PayloadTemplate[]) => {
      //     console.log('Inside subscribe getBalanceSummary...');
      //     const data = serverResponse['data'];
      //     // console.log(data);
      //     let tempTitle: string[] = [];
      //     let tempData: number[] = [];
      //     // tslint:disable-next-line:forin
      //     for (const item of data) {
      //       console.log(item);
      //       tempTitle.push(item['name']);
      //       tempData.push(item['value']);
      //     }

      //     this.pieChartLabels = tempTitle;
      //     this.pieChartData = tempData;
      //     monkeyPatchChartJsTooltip();
      //     monkeyPatchChartJsLegend();
      //   },
      // );
    }

    ngOnInit() {
      this.queryService.getBalanceSummary()
      .subscribe(
        (serverResponse: PayloadTemplate[]) => {
          console.log('Inside subscribe getBalanceSummary...');
          const data = serverResponse['data'];
          // console.log(data);
          let tempTitle: string[] = [];
          let tempData: number[] = [];
          // tslint:disable-next-line:forin
          for (const item of data) {
            console.log(item);
            tempTitle.push(item['name']);
            tempData.push(item['value']);
          }

          this.pieChartLabels = tempTitle;
          this.pieChartData = tempData;
          monkeyPatchChartJsTooltip();
          monkeyPatchChartJsLegend();
        },
      );
    }

}
