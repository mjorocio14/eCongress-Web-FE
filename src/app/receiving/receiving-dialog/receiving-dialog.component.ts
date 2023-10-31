import { Component, Inject, Input, OnInit } from '@angular/core';
import { IReceiving } from 'src/app/interface/receiving.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LetterTypesService } from 'src/app/services/letter-types.service';
import { ILetterType } from 'src/app/interface/letter-type.interface';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReceivingService } from 'src/app/services/receiving.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-receiving-dialog',
  templateUrl: './receiving-dialog.component.html',
  styleUrls: ['./receiving-dialog.component.css'],
})
export class ReceivingDialogComponent implements OnInit {
  letterTypes: ILetterType[] = [];
  receivingForm: FormGroup = new FormGroup({
    letterTypesId: new FormControl('', Validators.required),
    fromSender: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    eventDateStart: new FormControl('', Validators.required),
    eventDateEnd: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    receivedBy: new FormControl('', Validators.required),
    dateReceived: new FormControl(moment().toDate(), Validators.required),
    note: new FormControl(''),
    remarks: new FormControl('')
  });
  loading = false;
  viewing = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IReceiving, private letterTypeService: LetterTypesService,
    private receivingService: ReceivingService, private snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getLetterTypes();
   
    // Populate dialog with selected row data for viewing/editting
    if (this.data.id !== undefined) {
      this.receivingForm.setValue({
        letterTypesId: this.data.letterType.id.toString(),
        fromSender: this.data.fromSender,
        description: this.data.description,
        eventDateStart: this.data.eventDateStart,
        eventDateEnd: this.data.eventDateEnd,
        contact: this.data.contact,
        receivedBy: this.data.receivedBy,
        dateReceived: this.data.dateReceived,
        note: this.data.note,
        remarks: this.data.remarks
      });

      this.receivingForm.disable();
      this.viewing = true;
    }
  }

  getLetterTypes() {
    this.letterTypeService.getReceivingList()
      .subscribe((data) => this.letterTypes = data);
  }

  onSubmit() {
    this.loading = true;
    this.receivingForm.value.dateReceived = moment(this.receivingForm.value.dateReceived).format('YYYY-MM-DD');
    this.receivingForm.value.eventDateEnd = moment(this.receivingForm.value.eventDateEnd).format('YYYY-MM-DD');
    this.receivingForm.value.eventDateStart = moment(this.receivingForm.value.eventDateStart).format('YYYY-MM-DD');
    
    // Saving new received letter
    if(!this.viewing)
    {
      this.receivingService.postReceiving(this.receivingForm.value).subscribe(
        {
          error: (e) => this.openSnackBar(e.status === 409 ? 'Letter already exist!' : 'Something went wrong!', 'error'),
          complete: () => {
            this.openSnackBar('Letter is successfully saved!', 'success');
            this.dialog.closeAll();
            this.receivingService.refreshTable.emit(true);
          }
        }
      );
    }

    // Updating existing record
    else {
      this.receivingService.putReceiving(this.data.id, this.receivingForm.value).subscribe(
        {
          error: (e) => this.openSnackBar(e.status === 409 ? 'Letter already exist!' : 'Something went wrong!', 'error'),
          complete: () => {
            this.openSnackBar('Letter is successfully saved!', 'success');
            this.dialog.closeAll();
            this.receivingService.refreshTable.emit(true);
          }
        }
      );
    }

    this.loading = false;
    
  }

  openSnackBar(message: string, option: string) {
    this.snackBar.open(message, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: option + '-snackbar',
      duration: 3000
    });
  }

  onEdit() {
    this.receivingForm.enable();
  }

}
