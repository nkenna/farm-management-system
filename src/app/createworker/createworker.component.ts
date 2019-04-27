import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-createworker',
  templateUrl: './createworker.component.html',
  styleUrls: ['./createworker.component.css']
})
export class CreateworkerComponent implements OnInit {

  data: { 
    firstname: any;
    lastname; any;
    workerID: any;
    email: any;
    dob: any;
    sex: any;
    address: any;
    city: any;
    country: any;
    phone: any;
    taskemail: boolean;
     };


  constructor(public dialogRef: MatDialogRef<CreateworkerComponent> ) {
    this.data ={
      firstname:  '',
      lastname:  ''
    }
   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
