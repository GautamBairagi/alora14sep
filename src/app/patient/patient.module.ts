import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientNurseAlotedComponent } from './pages/patient-nurse-aloted/patient-nurse-aloted.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    PatientHomeComponent,
    PatientDashboardComponent,
    PatientNurseAlotedComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientModule { }
