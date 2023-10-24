import { Component, Inject, Input, OnInit } from '@angular/core';
import { ReceivingService } from '../receiving.service';
import { IReceiving } from 'src/app/interface/receiving.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-receiving-dialog',
  templateUrl: './receiving-dialog.component.html',
  styleUrls: ['./receiving-dialog.component.css']
})
export class ReceivingDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IReceiving) {}

  ngOnInit(): void {
  }

}
