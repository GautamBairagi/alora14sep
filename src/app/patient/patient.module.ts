import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientHomeComponent,
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
