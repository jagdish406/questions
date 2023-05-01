import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceNameService } from './service/common.service';
import {HttpClientModule  } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule ,Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent,


},
{ path: 'about', component: AboutComponent }
,
{ path: 'contact', component: ContactComponent }]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [ServiceNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
