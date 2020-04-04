import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';

import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule } from '@angular/forms';

import { AppMainComponent } from './app-main/app-main.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { TransactionSummaryHeaderComponent } from './transaction-summary-header/transaction-summary-header.component';
import { TransactionSummaryBodyComponent } from './transaction-summary-body/transaction-summary-body.component';
import { TransactionSummaryChartComponent } from './transaction-summary-chart/transaction-summary-chart.component';
import { UpdateHistoryComponent } from './update-history/update-history.component';
import { AppRoutingModule } from './app-routing.module';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TransactionDetailTableComponent } from './transaction-detail-table/transaction-detail-table.component';
import { TransactionDetailGroupComponent } from './transaction-detail-group/transaction-detail-group.component';
import { AppMainBodyComponent } from './app-main-body/app-main-body.component';
import { UpdateHistoryTableComponent } from './update-history-table/update-history-table.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MainRegistrationComponent } from './main-registration/main-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    TransactionSummaryComponent,
    TransactionSummaryHeaderComponent,
    TransactionSummaryBodyComponent,
    TransactionSummaryChartComponent,
    UpdateHistoryComponent,
    PagNotFoundComponent,
    TransactionDetailComponent,
    UserRegistrationComponent,
    TransactionDetailTableComponent,
    TransactionDetailGroupComponent,
    AppMainBodyComponent,
    UpdateHistoryTableComponent,
    UserRegistrationFormComponent,
    MainRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxDatatableModule,
    ChartsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
