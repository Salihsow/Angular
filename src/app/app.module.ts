import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PayrollComponent } from './payroll/payroll.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { ReadingJsonFilesComponent } from './reading-json-files/reading-json-files.component';
import { SaadElGhamidiComponent } from './saad-el-ghamidi/saad-el-ghamidi.component';
@NgModule({
  declarations: [
    AppComponent,
    PayrollComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent,
    TechComponent,
    DepartmentComponent,
    DepartmentDetailComponent,
    PageNotFoundComponent,
    HighlightDirective,
    RainbowDirective,
    ReadingJsonFilesComponent,
    SaadElGhamidiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    NgxAudioPlayerModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
