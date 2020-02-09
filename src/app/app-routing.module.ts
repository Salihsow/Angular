import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TechComponent } from './tech/tech.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"profile",component:ProfileComponent},
    {path:"hr",component:HrhelpdeskComponent},
    {path:"departments",component:DepartmentComponent},
    {path:"departments/:id",component:DepartmentDetailComponent},
    {path:"learning/:technologie",component:TechComponent},
    {path:"learning",component:LearningComponent},
    {path:"**",component:PageNotFoundComponent},
    
    
    {path:"payroll",component:PayrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
