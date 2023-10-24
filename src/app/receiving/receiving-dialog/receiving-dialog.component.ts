import { Component, Inject, Input, OnInit } from '@angular/core';
import { IReceiving } from 'src/app/interface/receiving.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LetterTypesService } from 'src/app/services/letter-types.service';
import { ILetterType } from 'src/app/interface/letter-type.interface';

@Component({
  selector: 'app-receiving-dialog',
  templateUrl: './receiving-dialog.component.html',
  styleUrls: ['./receiving-dialog.component.css'],
})
export class ReceivingDialogComponent implements OnInit {
  letterTypes: ILetterType[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: IReceiving, private letterTypeService: LetterTypesService) {
  }

  ngOnInit(): void {
    this.getLetterTypes();
  }

  getLetterTypes() {
    this.letterTypeService.getReceivingList()
      .subscribe((data) => this.letterTypes = data);
  }

}
