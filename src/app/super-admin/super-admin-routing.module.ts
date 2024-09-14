import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddAdminComponent } from './shared/add-admin/add-admin.component';
import { AddNursesComponent } from './shared/add-nurses/add-nurses.component';
import { NursesComponent } from './pages/nurses/nurses.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AddPatientsComponent } from './shared/add-patients/add-patients.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',
     component: SuperAdminComponent,
     children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'view_admins',
        component:AdminComponent
      },
      {
        path:'admins',
        component:AddAdminComponent
      },
      {
        path:'nurses',
        component:AddNursesComponent
      },
      {
        path:'view_nurses',
        component:NursesComponent
      },
      {
        path:'view_patients',
        component:PatientsComponent
      },
      {
        path:'patients',
        component:AddPatientsComponent
      },


     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
