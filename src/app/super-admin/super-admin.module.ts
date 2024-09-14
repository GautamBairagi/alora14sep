import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NursesComponent } from './pages/nurses/nurses.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AddAdminComponent } from './shared/add-admin/add-admin.component';
import { AddNursesComponent } from './shared/add-nurses/add-nurses.component';
import { AddPatientsComponent } from './shared/add-patients/add-patients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    SuperAdminComponent,
    DashboardComponent,
    AdminComponent,
    NursesComponent,
    PatientsComponent,
    AddAdminComponent,
    AddNursesComponent,
    AddPatientsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
   
  ]
})
export class SuperAdminModule { }
