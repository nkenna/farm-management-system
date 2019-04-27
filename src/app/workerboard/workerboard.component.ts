import { Component, OnInit } from '@angular/core';
import {ApiCallService} from "../api-call.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { CreateworkerComponent } from '../createworker/createworker.component';
import { DeleteworkerComponent } from '../deleteworker/deleteworker.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-workerboard',
  templateUrl: './workerboard.component.html',
  styleUrls: ['./workerboard.component.css']
})
export class WorkerboardComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'edit', 'comment', 'doc', 'task', 'delete'];
  workerData = [];
  categoriesData = [];
  deleteWorkerID: any;

  constructor(public dialog: MatDialog, public apiCall: ApiCallService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.callAllWorkers();
    this.callAllCategories();
  }

  callAllCategories(){
    this.apiCall.allCategories()
    .subscribe((data: any) => {
     console.log(data['status'])
      this.categoriesData = data['status'];
      
    })
  }


  callAllWorkers(){
    this.apiCall.allWorkers()
    .subscribe((data: any) => {
     
      this.workerData = data['status'];
      
    })
  }

  openCreateWorker(){
    const dialogRef = this.dialog.open(CreateworkerComponent, {
      width: '400px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
       this.apiCall.createNewWorker(result)
      .subscribe((data: any) => {
        console.log(data);
        this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
        this.callAllWorkers();
      }) 

    });
  }


  onRowClicked(row) {
    //console.log('Row clicked: ', row);
}


  openDeleteWorker(workerID) {
    const dialogRef = this.dialog.open(DeleteworkerComponent, {
      width: '500px',
      data: {deleteWorkerID: workerID}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result == true){
         this.apiCall.deleteWorker(workerID)
      .subscribe((data: any) => {
        console.log(data);
        this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
        this.callAllWorkers();
      }) 
      }
          
      
    });
  }


  openSetWorkCost() {
    const dialogRef = this.dialog.open(CategoriesComponent, {
      width: '500px',
      data: {categoriesData: this.categoriesData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result == true){
         this.apiCall.allCategories()
      .subscribe((data: any) => {
        console.log(data);
        this.snackBar.open(data['status'], 'Dismiss', {duration: 3000});
        this.callAllWorkers();
      }) 
      }
          
      
    });
  }
  }




