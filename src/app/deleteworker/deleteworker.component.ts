import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  deleteWorkerID: any;
}



@Component({
  selector: 'app-deleteworker',
  templateUrl: './deleteworker.component.html',
  styleUrls: ['./deleteworker.component.css']
})
export class DeleteworkerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteworkerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
