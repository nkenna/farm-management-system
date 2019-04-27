import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface CreateUserData {
  userData: any;
}

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent implements OnInit {
  newData: {
    comment: any
  }

  constructor(public dialogRef: MatDialogRef<CreatecommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateUserData) { 
      this.newData = {
        comment:  ''
      }
    }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
