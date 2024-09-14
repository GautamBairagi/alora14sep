import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Login/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  
  { path: 'superAdmin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'nurse', loadChildren: () => import('./nurse/nurse.module').then(m => m.NurseModule) }, 
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
