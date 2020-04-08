import { QueryService } from 'src/app/service/query.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserTransactionSummary } from 'src/app/interface';

@Component({
  selector: 'app-transaction-summary-body',
  templateUrl: './transaction-summary-body.component.html',
  styleUrls: ['./transaction-summary-body.component.css']
})
export class TransactionSummaryBodyComponent implements OnInit {
  displayedColumns: string[] = [
    'walletAddress',
    'verusID',
    'openingBalance',
    'deposits',
    'withdrawals',
    'stakingBalance',
    'currentPercentage',
    'stakingPercentage',
    'stakeReward',
    'depositStake',
    'currentBalance',
    'stakeRewardAmount'
  ];

  //@TODO Error handling for failed request
  error;
  tableData: UserTransactionSummary[];
  dataSource: MatTableDataSource<UserTransactionSummary>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    this.queryService.getTransactions()
    .subscribe(
      (serverResponse: UserTransactionSummary[]) => {
        console.log('Inside subscribe...');
        // tslint:disable-next-line:no-string-literal
        this.tableData = serverResponse['data'];
        this.setupDatatable(this.tableData);
      },
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setupDatatable(data) {
    this.dataSource = new MatTableDataSource<UserTransactionSummary>(data);
    this.dataSource.paginator = this.paginator;
  }

}
