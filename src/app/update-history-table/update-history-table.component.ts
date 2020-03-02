import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateHistorySummary } from '../interface';
import { QueryService } from './../service/query.service';

@Component({
  selector: 'app-update-history-table',
  templateUrl: './update-history-table.component.html',
  styleUrls: ['./update-history-table.component.css']
})
export class UpdateHistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'description', 'remarks', 'author'];
  // dataSource = new MatTableDataSource<UpdateHistorySummary>(ELEMENT_DATA);
  dataSource: MatTableDataSource<UpdateHistorySummary>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private queryService: QueryService) { }

  ngOnInit() {

    this.queryService.getUpdateHistorySummary()
    .subscribe(
      (serverResponse: UpdateHistorySummary[]) => {
        console.log('Inside subscribe getTransactionList...');
        this.dataSource = new MatTableDataSource<UpdateHistorySummary>(serverResponse['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
