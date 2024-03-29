import { Receiving } from './../../models/receiving.model';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { ReceivingService } from '../receiving.service';
import { MatDialog } from '@angular/material/dialog';
import { ReceivingDialogComponent } from '../receiving-dialog/receiving-dialog.component';

@Component({
  selector: 'app-receiving-table',
  templateUrl: './receiving-table.component.html',
  styleUrls: ['./receiving-table.component.css']
})
export class ReceivingTableComponent implements OnInit {
  displayedColumns: string[] = ['no', 'fromSender', 'description', 'letterType', 'eventDateStart', 'eventDateEnd', 'note', 'dateTimeReceived', 'action'];
  dataSource?: any;
  receivingList?: Receiving[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private receivingService: ReceivingService, public dialog: MatDialog) {
    this.getReceivingList();
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getReceivingList = () => {
    this.receivingService.getReceivingList()
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<Receiving>(data.map((d) => {
          d.eventDateStart = moment(d.eventDateStart).format('ll');
          d.eventDateEnd = moment(d.eventDateEnd).format('ll');
          d.dateTimeReceived = moment(d.dateTimeReceived).format('lll');
          return d;
        }));

        // Assign the paginator *after* dataSource is set
        this.setPagination();
      });
  }

  setPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clickedRows(tableData: Receiving) {
    this.receivingService.selectedRow.emit(tableData);
    this.dialog.open(ReceivingDialogComponent, {
      data: tableData
    });
  }
  

}
