import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminNursesComponent } from './shared/admin-nurses/admin-nurses.component';
import { ViewNursesComponent } from './pages/view-nurses/view-nurses.component';
import { AdminPatientsComponent } from './shared/admin-patients/admin-patients.component';
import { ViewPatientsComponent } from './pages/view-patients/view-patients.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddalotComponent } from './shared/addalot/addalot.component';
import { ViewAlotComponent } from './pages/view-alot/view-alot.component';
import { ClockStatusComponent } from './pages/clock-status/clock-status.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:[
      {
        path:'',
        redirectTo:'admin_home',
        pathMatch:'full'
      },
      {
        path:'admin_home',
        component:AdminHomeComponent
      },
      {
        path:'admin_dashboard',
        component:AdminDashboardComponent
      },
      {
        path:'add_nurses',
        component:AdminNursesComponent
      },
      {
        path:'view_nurses',
        component:ViewNursesComponent
      },
      {
        path:'add_patients',
        component:AdminPatientsComponent
      },
      {
        path:'view_patients',
        component:ViewPatientsComponent
      },
      {
        path:'Addalot',
        component:AddalotComponent
      },
      {
        path:'View_alot',
        component:ViewAlotComponent
      },
      {
        path:'clock_status',
        component:ClockStatusComponent
      },
    ]

   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
