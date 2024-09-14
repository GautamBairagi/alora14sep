import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminNursesComponent } from './shared/admin-nurses/admin-nurses.component';
import { AdminPatientsComponent } from './shared/admin-patients/admin-patients.component';
import { ViewNursesComponent } from './pages/view-nurses/view-nurses.component';
import { ViewPatientsComponent } from './pages/view-patients/view-patients.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddalotComponent } from './shared/addalot/addalot.component';
import { ViewAlotComponent } from './pages/view-alot/view-alot.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminNursesComponent,
    AdminPatientsComponent,
    ViewNursesComponent,
    ViewPatientsComponent,
    AdminDashboardComponent,
    AddalotComponent,
    ViewAlotComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
