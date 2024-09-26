import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse.component';
import { NurseDashboardComponent } from './pages/nurse-dashboard/nurse-dashboard.component';
import { NurseHomeComponent } from './pages/nurse-home/nurse-home.component';
import { NursePatientComponent } from './shared/nurse-patient/nurse-patient.component';
import { ViewPatientComponent } from './pages/view-patient/view-patient.component';
import { ViewPatientDetailsComponent } from './pages/view-patient-details/view-patient-details.component';
import { NurseAloteViewComponent } from './pages/nurse-alote-view/nurse-alote-view.component';
import { ViewReportComponent } from './pages/view-report/view-report.component';

const routes: Routes = [
  { path: '', component: NurseComponent,
    children:[
      {
        path:'',
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path:'nurse_dashboard',
        component:NurseDashboardComponent
      },
      {
        path:'nurse_home',
        component:NurseHomeComponent
      },
      {
        path:'nurse_patient',
        component:NursePatientComponent
      },
      {
        path:'view_patient',
        component:ViewPatientComponent
      },
      {
        path:'patient_details',
        component:ViewPatientDetailsComponent
      },
      {
        path:'nurse_alote_view',
        component:NurseAloteViewComponent
      },
      {
        path:'Report_view',
        component:ViewReportComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseRoutingModule { }
