import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { UpdateHistoryComponent } from './update-history/update-history.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MainRegistrationComponent } from './main-registration/main-registration.component';

const appRoutes: Routes = [
  { path: 'transaction-summary', component: TransactionSummaryComponent },
  { path: 'transaction-detail', component: TransactionDetailComponent },
  { path: 'update-history', component: UpdateHistoryComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'welcome', component: MainRegistrationComponent },
  // Official Main - Remove this for and the one in update app.component
  // { path: '',   redirectTo: '/transaction-summary', pathMatch: 'full' },
  // Temporary Main
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
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
