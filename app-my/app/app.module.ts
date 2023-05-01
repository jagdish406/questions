import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceNameService } from './service/common.service';
import {HttpClientModule  } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,HttpClientModule, FormsModule
  ],
  providers: [ServiceNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
