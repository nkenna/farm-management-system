import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateuserComponent } from '../createuser/createuser.component';
import {ApiCallService} from "../api-call.service";
import {MatSnackBar} from '@angular/material';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { EdituserComponent } from '../edituser/edituser.component';
import { CreatecommentComponent } from '../createcomment/createcomment.component';




@Component({
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: ['./userboard.component.css']
})
export class UserboardComponent implements OnInit {

  deleteUserID: any;

  userData = [];/* { 
    name: any;
    role: any;
    userID: any;
    email: any;
    city: any;
    country: any;
    phone: any;
    }; */

    displayedColumns: string[] = ['Role', 'Name', 'email', 'phone', 'edit', 'comment', 'doc', 'task', 'delete'];

 
  

  constructor(public dialog: MatDialog, public apiCall: ApiCallService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.callAllUsers();
  }

  callAllUsers(){
    this.apiCall.allUsers()
    .subscribe((data: any) => {
     
      this.userData = data['status'];
      
    })
  }

  onRowClicked(row) {
    //console.log('Row clicked: ', row);
}

  openCreateUser(): void {
    const dialogRef = this.dialog.open(CreateuserComponent, {
      width: '400px'
      //data: {role: this.role, name: this.name, userID: this.userID, email: this.email, city: this.city, country: this.country, phone: this.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
       this.apiCall.createNewUser(result)
      .subscribe((data: any) => {
        console.log(data);
        this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
        this.callAllUsers();
      }) 

    });
  }

  deleteUser(userID) {
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      width: '250px',
      data: {deleteUserID: userID}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result == true){
         this.apiCall.deleteUser(userID)
      .subscribe((data: any) => {
        console.log(data);
        this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
        this.callAllUsers();
      }) 
      }
          
      
    });
  }

  editUser(userData){
       console.log(userData);
       const dialogRef = this.dialog.open(EdituserComponent, {
        width: '250px',
        data: {userData: userData}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
               

           this.apiCall.editUser(result)
        .subscribe((data: any) => {
          console.log(data);
          this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
          this.callAllUsers();
        })  
        
  });
}

userComment(userData){
  console.log(userData);
  const dialogRef = this.dialog.open(CreatecommentComponent, {
   width: '250px',
   data: {userData: userData}
 });

 dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
   console.log(result);
          

      this.apiCall.createUserComment(result)
   .subscribe((data: any) => {
     console.log(data);
     this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
     this.callAllUsers();
   })  
   
});
}
  

}
