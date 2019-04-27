import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface UserEditData {
  userData: any;
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
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

    newData :  { 
      firstname: any;
  lastname; any;
  role: any;
  userID: any;
  email: any;
  password: any;
  dob: any;
  sex: any;
  address: any;
  city: any;
  country: any;
  phone: any;
  
      }; 

      password_error: any;
   pl: any;
   savebtn1 = false;
   savebtn2 = false;

  constructor(public dialogRef: MatDialogRef<EdituserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserEditData) { 
      console.log(this.data);
      this.firstname = data['userData']['firstname'];
      this.lastname = data['userData']['lastname'];
      this.role = data['userData']['role'];
     // this.password = data['userData']['password'];
      this.dob = data['userData']['dob'];
      this.email = data['userData']['email'];
      this.sex = data['userData']['sex'];
      this.address = data['userData']['address'];
      this.city = data['userData']['city'];
      this.country = data['userData']['country'];
      this.phone = data['userData']['phone'];

      this.newData = {
        firstname: this.firstname,
        lastname: this.lastname,
        role: this.role,
        password: this.password,
        userID: data['userData']['_id'],
        dob: this.dob,
        sex: this.sex,
        address: this.address,
        email:this.email,
        city: this.city,
        country: this.country,
        phone: this.phone
      }

      console.log(this.newData);
      
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  passwordLen(event: any) {
    if(this.password.length < 8) {
      this.savebtn1 = false;
      this.pl = 'password length is less than 8 characters';
    }else{
      this.savebtn1 = true;
      this.pl = '';
      if(this.password.length === 0 || this.password === null){
        this.newData.password = this.data['userData']['password'];
      }else{
        this.newData.password = this.password;
      }
       
      
    }
  }


  verifyPassword(event: any) {
    if(this.vpassword != this.password) {
      this.savebtn2 = false;
      this.password_error = 'password verification invalidated';
    }else{
      this.password_error = '';
      this.savebtn2 = true;
    }
  }

}
