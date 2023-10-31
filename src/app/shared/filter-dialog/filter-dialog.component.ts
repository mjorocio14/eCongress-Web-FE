import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ILetterType } from 'src/app/interface/letter-type.interface';
import { LetterTypesService } from 'src/app/services/letter-types.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {
  letterTypes: ILetterType[] = [];
  filterForm: FormGroup = new FormGroup({
    letterTypesId: new FormControl(''),
    fromSender: new FormControl(''),
    eventDateStart: new FormControl(''),
    eventDateEnd: new FormControl(''),
    receivedBy: new FormControl('')
  });

  constructor(private letterTypeService: LetterTypesService) { }

  ngOnInit(): void {
    this.getLetterTypes();
  }

  getLetterTypes() {
    this.letterTypeService.getReceivingList()
      .subscribe((data) => this.letterTypes = data);
  }

  onFilterSubmit() {

  }

}
