import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { NurseComponent } from './nurse.component';
import { ViewPatientComponent } from './pages/view-patient/view-patient.component';
import { NurseHomeComponent } from './pages/nurse-home/nurse-home.component';
import { NurseDashboardComponent } from './pages/nurse-dashboard/nurse-dashboard.component';
import { NursePatientComponent } from './shared/nurse-patient/nurse-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPatientDetailsComponent } from './pages/view-patient-details/view-patient-details.component';


@NgModule({
  declarations: [
    NurseComponent,
    ViewPatientComponent,
    NurseHomeComponent,
    NurseDashboardComponent,
    NursePatientComponent,
    ViewPatientDetailsComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NurseModule { }
