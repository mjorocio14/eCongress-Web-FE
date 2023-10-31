import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { ReceivingService } from '../../services/receiving.service';
import { MatDialog } from '@angular/material/dialog';
import { ReceivingDialogComponent } from '../receiving-dialog/receiving-dialog.component';
import { IReceiving } from 'src/app/interface/receiving.interface';
import { FormControl } from '@angular/forms';
import { FilterDialogComponent } from 'src/app/shared/filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-receiving-table',
  templateUrl: './receiving-table.component.html',
  styleUrls: ['./receiving-table.component.css']
})
export class ReceivingTableComponent implements OnInit {
  displayedColumns: string[] = ['no', 'fromSender', 'description', 'letterType', 'eventDateStart', 'eventDateEnd', 'note', 'receivedBy', 'dateReceived', 'action'];
  dataSource?: any;
  receivingList?: IReceiving[] = [];
  panelOpenState: boolean = false;
  dateReceivedFilter: FormControl = new FormControl(new Date);

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private receivingService: ReceivingService, public dialog: MatDialog) {
    this.onGetReceivingList(this.dateReceivedFilter.value);
  }

  ngOnInit(): void {
    this.receivingService.refreshTable.subscribe(response => {
      if(response)
        this.onGetReceivingList(this.dateReceivedFilter.value);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onGetReceivingList = (date: string) => {
    this.receivingService.getReceiving(date)
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<IReceiving>(data);

        // Assign the paginator *after* dataSource is set
        this.setPagination();
      });
  }

  setPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clickedRows(tableData: IReceiving) { 
    this.dialog.open(ReceivingDialogComponent, {
      data: tableData,
      height: 'auto',
      width: '600px',
      disableClose: true
    });
  }

  setBgColor(letterTypeName: string) {
    let color = null;

    switch(letterTypeName)
    {
      case 'Solicitation':
        color = '#690000';
        break;
      case 'Invitation':
        color = '#6495ED';
        break;
      case 'Memorandum':
        color = '#00AB66';
        break;
    }

    return color;
  }

  onChangeDate() {
    this.receivingList = [];
    this.onGetReceivingList(this.dateReceivedFilter.value);
  }

  openFilterDialog() {
    this.dialog.open(FilterDialogComponent);
  }

}
