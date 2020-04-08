import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     // 'Authorization': 'my-auth-token'
  //   })
  // };
  constructor(private http: HttpClient) { }

  sendPost(url: string, data: any): Observable<any> {
    // return this.http.post<any>(url, data, this.httpOptions);
    return this.http.post<any>(url, data);
    // .pipe(catchError(this.handleError));
  }

  sendDelete(url: string, data: any): Observable<any> {
    return this.http.delete<any>(url, data);
  }

  sendPut(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data);
  }

  sendPatch(url: string, data: any): Observable<any> {
    return this.http.patch<any>(url, data);
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
