import { Injectable } from '@angular/core';
import { DialogService } from './../service/dialog.service';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MessageDialogComponent } from '../components/dialog/message-dialog/message-dialog.component';

@Injectable()
export class HttpAppInterceptor implements HttpInterceptor {

  constructor(public dialogService: DialogService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dialogService.openLoadingDialog({});
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            this.dialogService.close();
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
          let data = {};
          console.log("Catch error");
          console.log(error);
          data = {
              reason: error.statusText,
              status: error.status
          };
          this.showErrorMessage();
          return throwError(error);
      }));
  }

  private showErrorMessage() {
    this.dialogService.close();
    this.dialogService.openDialog({
      type: MessageDialogComponent.TYPE.network_error,
      title: 'Network Connection Error!',
      reason: 'Unable to communicate with the server at the moment.',
      status: '500'
    });
  }
}
