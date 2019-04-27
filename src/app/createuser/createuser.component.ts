import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import {UserDialogData} from '/home/steinacoz/Documents/farm/farm-man/src/app/userboard/userboard.component';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

data: { 
  firstname: any;
  lastname; any;
  role: any;
  userID: any;
  email: any;
  password: any;
  vpassword: any;
  dob: any;
  sex: any;
  address: any;
  city: any;
  country: any;
  phone: any;
  taskemail: boolean;
  newsletter: boolean;
  };


   password_error: any;
   pl: any;


 // @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  constructor(public dialogRef: MatDialogRef<CreateuserComponent>  ) { 
    this.password_error = '';
    
    this.data.address = '';
    this.data.firstname = '';
    this.data.lastname = '';
    this.data.role = '';
    this.data.userID = '';
    this.data.email = '';
    this.data.password = '';
    this.data.vpassword = '';
    this.data.dob = null;
    this.data.sex = '';
    this.data.city = '';
    this.data.country = '';
    this.data.phone = '';
    this.data.newsletter = false;
    this.data.newsletter = false;
     

   
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  passwordLen(event: any) {
    if(this.data.password.length < 8) {
     
      this.pl = 'password length is less than 8 characters';
    }else{
      this.pl = '';
      
    }
  }


  verifyPassword(event: any) {
    if(this.data.vpassword != this.data.password) {
      
      this.password_error = 'password verification invalidated';
    }else{
      this.password_error = '';
      
    }
  }

  
 
  }


