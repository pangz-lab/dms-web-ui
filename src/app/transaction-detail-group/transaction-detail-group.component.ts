import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserTransactionDetail, UserTransactionList} from '../interface';

const TRANSACTION_DATA: UserTransactionList[] = [
  {
    id: 1,
    stakeNumber: 1,
    name: 'Stake 1',
    transactionId: 'Transaction 1',
    description: 'Description 1',
    dateTime: 'January 1,2020',
    detail: [
      {
        walletAddress: '1JFAKLJJ34K2LJJL45H2J354',
        totalCoins: 1243.43,
        deposits: 12333,
        withdrawals: 0,
        percentageOverride: 33.3,
        dateAdded: '6/8/2019',
        dateUpdated: '6/8/2019',
        originalBalance: 5000,
        previousBalance: 500,
        originalTransaction: 'FASD452342GG5',
        latestTransaction: 'FASD452342GG5',
        remarks: 'Remarks',
        earnings: 0,
        currentPercentage: 0,
        stakingPercentage: 0,
        stakeReward: 0,
        depositStake: 0,
        currentBalance: 0,
        stakeRewardAmount: 0,
      },
      {
        walletAddress: '2JFAKLJJ34K2LJJL45H2J354',
        totalCoins: 1243.43,
        deposits: 12333,
        withdrawals: 0,
        percentageOverride: 33.3,
        dateAdded: '6/8/2019',
        dateUpdated: '6/8/2019',
        originalBalance: 5000,
        previousBalance: 500,
        originalTransaction: 'FASD452342GG5',
        latestTransaction: 'FASD452342GG5',
        remarks: 'Remarks',
        earnings: 0,
        currentPercentage: 0,
        stakingPercentage: 0,
        stakeReward: 0,
        depositStake: 0,
        currentBalance: 0,
        stakeRewardAmount: 0,
      },
    ],
  },
  {
    id: 2,
    stakeNumber: 2,
    name: 'Stake 2',
    transactionId: 'Transaction 2',
    description: 'Description 2',
    dateTime: 'January 1,2020',
    detail: [
      {
        walletAddress: '2JFAKLJJ34K2LJJL45H2J354',
        totalCoins: 1243.43,
        deposits: 12333,
        withdrawals: 0,
        percentageOverride: 33.3,
        dateAdded: '6/8/2019',
        dateUpdated: '6/8/2019',
        originalBalance: 5000,
        previousBalance: 500,
        originalTransaction: 'FASD452342GG5',
        latestTransaction: 'FASD452342GG5',
        remarks: 'Remarks',
        earnings: 0,
        currentPercentage: 0,
        stakingPercentage: 0,
        stakeReward: 0,
        depositStake: 0,
        currentBalance: 0,
        stakeRewardAmount: 0,
      },
      {
        walletAddress: '2JFAKLJJ34K2LJJL45H2J354',
        totalCoins: 1243.43,
        deposits: 12333,
        withdrawals: 0,
        percentageOverride: 33.3,
        dateAdded: '6/8/2019',
        dateUpdated: '6/8/2019',
        originalBalance: 5000,
        previousBalance: 500,
        originalTransaction: 'FASD452342GG5',
        latestTransaction: 'FASD452342GG5',
        remarks: 'Remarks',
        earnings: 0,
        currentPercentage: 0,
        stakingPercentage: 0,
        stakeReward: 0,
        depositStake: 0,
        currentBalance: 0,
        stakeRewardAmount: 0,
      },
    ],
  },
];

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
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<UserTransactionList>(TRANSACTION_DATA);
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

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = [
    // 'Wallet Address',
    // 'Total Coins',
    // 'Deposits',
    // 'Withdrawals',
    // '%Override',
    // 'Date Added',
    // 'Date Updated',
    // 'Orig Balance',
    // 'Prev Balance',
    // 'Orig Tx',
    // 'Latest Tx',
    // 'Remarks',
    // 'Earnings',
    // 'Current%',
    // 'Staking%',
    // 'Stake Reward',
    // 'Deposit Stake',
    // 'Current Balance',
    // 'Stake Rewards',
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
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getGroupTitle(index: number, headerNameList: string[]) {
    return (index <= 2) ? headerNameList[index] : '';
  }

}
