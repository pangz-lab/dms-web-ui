import { AppSetting } from './../AppSetting';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UserTransactionSummary,
  PayloadTemplate,
  UserTransactionList,
  UpdateHistorySummary
} from '../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<UserTransactionSummary[]> {
    return this.http.get<UserTransactionSummary[]>(this.resolveEndpoint('TX_SUMMARY'));
  }

  getTransactionList(): Observable<UserTransactionList[]> {
    return this.http.get<UserTransactionList[]>(this.resolveEndpoint('TX_LIST'));
  }

  getBalanceSummary(): Observable<PayloadTemplate[]> {
    return this.http.get<PayloadTemplate[]>(this.resolveEndpoint('BALANCE_SUMMARY'));
  }

  getUpdateHistorySummary(): Observable<UpdateHistorySummary[]> {
    return this.http.get<UpdateHistorySummary[]>(this.resolveEndpoint('HISTORY_UPDATE_SUMMARY'));
  }

  fetchAny(): Observable<any[]> {
    return this.http.get<any[]>(this.resolveEndpoint('TX_SUMMARY'));
  }

  private resolveEndpoint(uri: string): string {
    return AppSetting.API_SERVER + AppSetting.API_VERSION + AppSetting.API_ENDPOINTS[uri];
  }
}
