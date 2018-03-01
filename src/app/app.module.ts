import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';
import { DataserviceService } from './dataservice.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';

import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { SchoolService } from './school.service';
import { CollegeService } from './college.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebComponent,
    DashboardComponent,
    SchoolComponent,
    CollegeComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataserviceService, ProfileService, SchoolService, CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
