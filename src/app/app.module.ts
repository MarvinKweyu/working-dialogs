import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogOverviewExample} from "./dialog-body/dialog-overview-example";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
// import { DialogBodyComponent } from './dialog-body/dialog-body.component';


const modules = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDialogModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExample,

  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
