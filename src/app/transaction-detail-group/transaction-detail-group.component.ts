import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserTransactionDetail, UserTransactionList} from '../interface';
import { QueryService } from './../service/query.service';

@Component({
  selector: 'app-transaction-detail-group',
  templateUrl: './transaction-detail-group.component.html',
  styleUrls: ['./transaction-detail-group.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionDetailGroupComponent implements OnInit {
  dataSource: MatTableDataSource<UserTransactionList>;
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  headerColumns = [
    'id',
    'stakeNumber',
    'name',
    'transactionId',
    'description',
    'dateTime',
    // 'detail',
  ];
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
    // 'walletAddress',
    // 'totalCoins',
    // 'deposits',
    // 'withdrawals',
    // 'percentageOverride',
    // 'dateAdded',
    // 'dateUpdated',
    // 'originalBalance',
    // 'previousBalance',
    // 'originalTransaction',
    // 'latestTransaction',
    // 'remarks',
    // 'earnings',
    // 'currentPercentage',
    // 'stakingPercentage',
    // 'stakeReward',
    // 'depositStake',
    // 'currentBalance',
    // 'stakeRewardAmount'
  ];
  // expandedElement: PeriodicElement | null;
  expandedElement: UserTransactionList | null;
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
  // dataSource2 = ELEMENT_DATA2;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getTransactionList()
    .subscribe(
      (serverResponse: UserTransactionList[]) => {
        console.log('Inside subscribe getTransactionList...');
        this.dataSource = new MatTableDataSource<UserTransactionList>(serverResponse['data']);
        this.dataSource.paginator = this.paginator;
      },
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getGroupTitle(index: number, headerNameList: string[]) {
    return (index <= 2) ? headerNameList[index] : '';
  }

}
