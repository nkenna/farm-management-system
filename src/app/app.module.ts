import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {ApiCallService} from "./api-call.service";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
//import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatMenuItem } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule, MatSidenavModule, MatTabsModule, MatList, MatListModule, MatCardModule, MatSnackBarModule,
   MatTooltipModule, MatFormFieldModule, MatRadioModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FrontPanelComponent } from './front-panel/front-panel.component';
import { CropProductionPanelComponent } from './crop-production-panel/crop-production-panel.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserboardComponent } from './userboard/userboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { CreatecommentComponent } from './createcomment/createcomment.component';
import { CreateworkerComponent } from './createworker/createworker.component';
import { WorkerboardComponent } from './workerboard/workerboard.component';
import { DeleteworkerComponent } from './deleteworker/deleteworker.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavListComponent,
    FrontPanelComponent,
    CropProductionPanelComponent,
    CreateuserComponent,
    UserboardComponent,
    DashboardComponent,
    DeleteuserComponent,
    EdituserComponent,
    CreatecommentComponent,
    CreateworkerComponent,
    WorkerboardComponent,
    DeleteworkerComponent,
    CategoriesComponent
  ],
  entryComponents: [
    CreateuserComponent, DeleteuserComponent, EdituserComponent,CreatecommentComponent, CreateworkerComponent,DeleteworkerComponent, CategoriesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, MatSelectModule, MatRadioModule, MatCheckboxModule,  MatSnackBarModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule,
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule, FlexLayoutModule, MatRippleModule, MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTabsModule, MatListModule, MatCardModule
    
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
