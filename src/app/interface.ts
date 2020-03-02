export interface UserTransactionSummary {
  walletAddress: string;
  verusID: string;
  openingBalance: number;
  deposits: number;
  withdrawals: number;
  stakingBalance: number;
  currentPercentage: number;
  stakingPercentage: string;
  stakeReward: number;
  depositStake: number;
  currentBalance: number;
  stakeRewardAmount: number;
}

export interface UserTransactionDetail {
  walletAddress: string;
  totalCoins: number;
  deposits: number;
  withdrawals: number;
  percentageOverride: number;
  dateAdded: string;
  dateUpdated: string;
  originalBalance: number;
  previousBalance: number;
  originalTransaction: string;
  latestTransaction: string;
  remarks: string;
  earnings: number;
  currentPercentage: number;
  stakingPercentage: number;
  stakeReward: number;
  depositStake: number;
  currentBalance: number;
  stakeRewardAmount: number;
}

export interface UserTransactionList {
  id: number;
  stakeNumber: number;
  name: string;
  transactionId: string;
  description: string;
  dateTime: string;
  detail: UserTransactionDetail[];
}

export interface UpdateHistorySummary {
  id: number;
  date: string;
  description: string;
  remarks: string;
  author: string;
}

export interface PayloadTemplate {
  name: string;
  value: any;
}
