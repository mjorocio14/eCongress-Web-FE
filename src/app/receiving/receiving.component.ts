import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceivingDialogComponent } from './receiving-dialog/receiving-dialog.component';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent {
  ButtonActions: any[] = [{
    'text': 'add',
    'action': () => this.openDialog()
  }];

  constructor(public dialog: MatDialog) {

  }
 
  openDialog() {
    this.dialog.open(ReceivingDialogComponent, {
      data: {},
      height: 'auto',
      width: '600px',
      disableClose: true
    });
  }
  

}

