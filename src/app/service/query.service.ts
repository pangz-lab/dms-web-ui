import { ApiSetting } from '../setting/ApiSetting';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  UserTransactionSummary,
  PayloadTemplate,
  UserTransactionList,
  UpdateHistorySummary,
  ResponseData
} from 'src/app/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<UserTransactionSummary[]> {
    return this.http.get<UserTransactionSummary[]>(ApiSetting.resolveEndpoint('TX_SUMMARY'));
  }

  getTransactionList(): Observable<UserTransactionList[]> {
    return this.http.get<UserTransactionList[]>(ApiSetting.resolveEndpoint('TX_LIST'));
  }

  getBalanceSummary(): Observable<PayloadTemplate[]> {
    return this.http.get<PayloadTemplate[]>(ApiSetting.resolveEndpoint('BALANCE_SUMMARY'));
  }

  getUpdateHistorySummary(): Observable<UpdateHistorySummary[]> {
    return this.http.get<UpdateHistorySummary[]>(ApiSetting.resolveEndpoint('HISTORY_UPDATE_SUMMARY'));
  }

  fetchAny(): Observable<any[]> {
    return this.http.get<any[]>(ApiSetting.resolveEndpoint('TX_SUMMARY'));
  }
}
