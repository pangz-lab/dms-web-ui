import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UpdateHistoryRecord} from '../interface';
const ELEMENT_DATA: UpdateHistoryRecord[] = [
  {id: 1, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 1'},
  {id: 2, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 2'},
  {id: 3, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 3'},
  {id: 4, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 4'},
  {id: 5, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 5'},
  {id: 6, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 6'},
  {id: 7, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 7'},
  {id: 8, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 8'},
  {id: 9, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 9'},
  {id: 10, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 10'},
  {id: 11, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 11'},
  {id: 12, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 12'},
  {id: 13, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 13'},
  {id: 14, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 14'},
  {id: 15, date: 'January 19, 2020', description: 'Stake found', remarks: 'remarks' , author: 'author 15'},
];


@Component({
  selector: 'app-update-history-table',
  templateUrl: './update-history-table.component.html',
  styleUrls: ['./update-history-table.component.css']
})
export class UpdateHistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'description', 'remarks', 'author'];
  dataSource = new MatTableDataSource<UpdateHistoryRecord>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
