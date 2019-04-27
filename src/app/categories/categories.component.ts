import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';

export interface DialogData {
  categoriesData: any;
}





@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['Category', 'Cost per hour', 'Set for all workers'];
  dataC: any; 

  constructor(public dialogRef: MatDialogRef<CategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.dataC = data['categoriesData'];
      console.log(data)
    }

  ngOnInit() {
  }

  onRowClicked(row){

  }

}
