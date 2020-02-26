import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTransactionSummary } from '../interface';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
    // 'Authorization': 'my-auth-token'
  })
};

// const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  txUrl = 'http://127.0.0.1:8888/v1/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<UserTransactionSummary[]> {
    return this.http.get<UserTransactionSummary[]>(this.txUrl);
  }

  fetchAny(): Observable<any[]> {
    // console.log('Inside QueryService ..');
    return this.http.get<any[]>(this.txUrl);
  }
}
