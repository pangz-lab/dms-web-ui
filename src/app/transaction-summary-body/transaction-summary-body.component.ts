import { QueryService } from './../service/query.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserTransactionSummary } from '../interface';



const ELEMENT_DATA: UserTransactionSummary[] = [
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Adudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Bdudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Cdudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Ddudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Edudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Fdudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Gdudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Hdudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Idudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Jdudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Kdudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Ldudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Mpangz@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Ndudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
  {
    walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
    verusID: 'Odudezmobi@',
    openingBalance: 123.323,
    deposits: 0.0,
    withdrawals: 0.0,
    stakingBalance: 123.32,
    currentPercentage: 0.005807,
    stakingPercentage: '0.58%',
    stakeReward: 0.123232,
    depositStake: 116.12,
    currentBalance: 208.3232,
    stakeRewardAmount: 92.0439430 },
  {
      walletAddress: 'FA4NL2KN3124L3N6J2N3J62NB3K56BJ3K256BB',
      verusID: 'Pdudezmobi@',
      openingBalance: 123.323,
      deposits: 0.0,
      withdrawals: 0.0,
      stakingBalance: 123.32,
      currentPercentage: 0.005807,
      stakingPercentage: '0.58%',
      stakeReward: 0.123232,
      depositStake: 116.12,
      currentBalance: 208.3232,
      stakeRewardAmount: 92.0439430 },
];

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

  // data: UserTransactionSummary[];
  td: any[];
  error;
  // dataSource = new MatTableDataSource<UserTransactionSummary>(ELEMENT_DATA);
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<UserTransactionSummary>(this.data);
    this.queryService.getTransactions()
    .subscribe(
      // (data: UserTransactionSummary[]) => {
      (d: UserTransactionSummary[]) => {
        console.log('Inside subscribe...');
        this.td = d["data"];
        // this.dataSource = new MatTableDataSource<UserTransactionSummary>(this.td);
        // console.log(this.td);
        this.setupDatatable(this.td)
      },
      // error => this.error = error
      // res => {
      //   console.log('Inside subscribe...');
      //   console.log(res);
      // }
    );

    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setupDatatable(data) {
    this.dataSource = new MatTableDataSource<UserTransactionSummary>(data);
    this.dataSource.paginator = this.paginator;
  }

}
