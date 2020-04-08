import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserTransactionList } from 'src/app/interface';

@Component({
  selector: 'app-transaction-detail-table',
  templateUrl: './transaction-detail-table.component.html',
  styleUrls: ['./transaction-detail-table.component.css']
})
export class TransactionDetailTableComponent implements OnInit {
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @Input() dataTableSource: [];
  dataSource: MatTableDataSource<UserTransactionList>;
  columnsToDisplay = [
    'Wallet Address',
    'Total Coins',
    'Deposits',
    'Withdrawals',
    '%Override',
    'Date Added',
    'Date Updated',
    'Orig Balance',
    'Prev Balance',
    'Orig Tx',
    'Latest Tx',
    'Remarks',
    'Earnings',
    'Current%',
    'Staking%',
    'Stake Reward',
    'Deposit Stake',
    'Current Balance',
    'Stake Rewards',
  ];
  displayedColumns: string[] = [
    'walletAddress',
    'totalCoins',
    'deposits',
    'withdrawals',
    'percentageOverride',
    'dateAdded',
    'dateUpdated',
    'originalBalance',
    'previousBalance',
    'originalTransaction',
    'latestTransaction',
    'remarks',
    'earnings',
    'currentPercentage',
    'stakingPercentage',
    'stakeReward',
    'depositStake',
    'currentBalance',
    'stakeRewardAmount'
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserTransactionList>(this.dataTableSource);
  }
}
