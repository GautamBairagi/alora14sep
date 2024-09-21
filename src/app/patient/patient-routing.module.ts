import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  { path: '', component: PatientComponent,
    children:[
      {
        path:'',
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path:'patient_home',
        component:PatientHomeComponent
      },
      {
        path:'patient_dashboard',
        component:PatientDashboardComponent
      }


      
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
