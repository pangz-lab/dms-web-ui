import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { ApiSetting } from '../setting/ApiSetting';
import { JoiningUser, ResponseData } from './../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  constructor(private http: HttpClient) {}

  registerUser(user: JoiningUser): Observable<ResponseData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    console.log(user);
    return this.http.post<ResponseData>(ApiSetting.resolveEndpoint('POOL_USER_REGISTRATION'), user);
  }
}
