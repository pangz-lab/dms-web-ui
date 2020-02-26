import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { UpdateHistoryComponent } from './update-history/update-history.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const appRoutes: Routes = [
  { path: 'tx-summary', component: TransactionSummaryComponent },
  { path: 'tx-detail', component: TransactionDetailComponent },
  { path: 'update-history', component: UpdateHistoryComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '',   redirectTo: '/tx-summary', pathMatch: 'full' },
  { path: '**', component: PagNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
