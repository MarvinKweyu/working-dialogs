import { Component } from '@angular/core';
import {MatDialogConfig, MatDialog} from "@angular/material/dialog";
// import {DialogBodyComponent} from "./dialog-body/dialog-body.component";
import {DialogOverviewExample} from "./dialog-body/dialog-overview-example";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'working-dialogs';
  name: any;
  constructor(private matDialog: MatDialog) {
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data"; // optionally an object
    let dialogRef = this.matDialog.open(DialogOverviewExample, dialogConfig);

  }
}
