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
import { CustomizeComponent } from './admin/customize/customize.component';
import { UserSecurityComponent } from './admin/user-security/user-security.component';
import { FeatureActivationComponent } from './admin/feature-activation/feature-activation.component';
import { AccountComponent } from './admin/account/account.component';
import { ConflictsComponent } from './CareConnect/conflicts/conflicts.component';
import { MonitorComponent } from './CareConnect/monitor/monitor.component';
import { ClaimSummaryComponent } from './billing/claim-summary/claim-summary.component';
import { GenerateClaimsComponent } from './billing/generate-claims/generate-claims.component';
import { ClaimsPDGMComponent } from './billing/claims-pdgm/claims-pdgm.component';
import { ElectronicClaimFileComponent } from './billing/electronic-claim-file/electronic-claim-file.component';
import { GenerateInvoicesComponent } from './billing/generate-invoices/generate-invoices.component';
import { InvoiceSummaryComponent } from './billing/invoice-summary/invoice-summary.component';
import { BatchPrintInvoicesComponent } from './billing/batch-print-invoices/batch-print-invoices.component';
import { BatchPrintClaimsComponent } from './billing/batch-print-claims/batch-print-claims.component';
import { PreBillingComponent } from './billing/pre-billing/pre-billing.component';
import { PostPaymentComponent } from './AR/post-payment/post-payment.component';
import { TransactionLogComponent } from './AR/transaction-log/transaction-log.component';
import { SkilledNursingVisitComponent } from './clinic/skilled-nursing-visit/skilled-nursing-visit.component';
import { AssessmentsComponent } from './clinic/assessments/assessments.component';
import { CertificationAndPlanComponent } from './clinic/certification-and-plan/certification-and-plan.component';
import { PlanOfCarePlusComponent } from './clinic/plan-of-care-plus/plan-of-care-plus.component';
import { OrdersAndDocsComponent } from './clinic/orders-and-docs/orders-and-docs.component';
import { OrderPlusComponent } from './clinic/order-plus/order-plus.component';
import { MedicationProfileComponent } from './clinic/medication-profile/medication-profile.component';
import { MedicationAdministrationLogComponent } from './clinic/medication-administration-log/medication-administration-log.component';
import { PhysicalTherapyDocsComponent } from './clinic/physical-therapy-docs/physical-therapy-docs.component';
import { OccupationalTherapyDocsComponent } from './clinic/occupational-therapy-docs/occupational-therapy-docs.component';
import { SpeechTherapyDocsComponent } from './clinic/speech-therapy-docs/speech-therapy-docs.component';
import { MedicalSocialWorkerComponent } from './clinic/medical-social-worker/medical-social-worker.component';
import { AideDocsComponent } from './clinic/aide-docs/aide-docs.component';
import { NonSkilledAssessmentsComponent } from './clinic/non-skilled-assessments/non-skilled-assessments.component';
import { ElectronicHealthRecordComponent } from './clinic/electronic-health-record/electronic-health-record.component';
import { BradenScaleComponent } from './clinic/braden-scale/braden-scale.component';
import { SupervisoryVisitComponent } from './clinic/supervisory-visit/supervisory-visit.component';
import { IncidentReportComponent } from './clinic/incident-report/incident-report.component';
import { StaffScreeningComponent } from './covid19/staff-screening/staff-screening.component';
import { PatientScreeningComponent } from './covid19/patient-screening/patient-screening.component';
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';
import { AloramailComponent } from './aloramail/aloramail/aloramail.component';

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
      {
        path:'customize',
        component:CustomizeComponent
      },
      {
        path:'user_security',
        component:UserSecurityComponent
      },
      {
        path:'feature_activation',
        component:FeatureActivationComponent
      },
      {
        path:'account_invoices',
        component:AccountComponent
      },
      {
        path:'monitor',
        component:MonitorComponent
      },
      {
        path:'conflicts',
        component:ConflictsComponent
      },
      {
        path:'claim_summary',
        component:ClaimSummaryComponent
      },
      {
        path:'generate_claims',
        component:GenerateClaimsComponent
      },
      {
        path:'claims_PDGM',
        component:ClaimsPDGMComponent
      },
      {
        path:'electronic_claim_file',
        component:ElectronicClaimFileComponent
      },
      {
        path:'generate_invoices',
        component:GenerateInvoicesComponent
      },
      {
        path:'invoice_summary',
        component:InvoiceSummaryComponent
      },
      {
        path:'batch_print_invoices',
        component:BatchPrintInvoicesComponent
      },
      {
        path:'batch_print_claims',
        component:BatchPrintClaimsComponent
      },
      {
        path:'pre_billing',
        component:PreBillingComponent
      },
      {
        path:'post_payment',
        component:PostPaymentComponent
      },
      {
        path:'transaction_log',
        component:TransactionLogComponent
      },
      {
        path:'skilled_nursing',
        component:SkilledNursingVisitComponent
      },
      {
        path:'assessments',
        component:AssessmentsComponent
      },
      {
        path:'certificationPlan',
        component:CertificationAndPlanComponent
      },
      {
        path:'plan_of_care',
        component:PlanOfCarePlusComponent
      },
      {
        path:'orders_and_docs',
        component:OrdersAndDocsComponent
      },
      {
        path:'order_plus',
        component:OrderPlusComponent
      },
      {
        path:'medication_profile',
        component:MedicationProfileComponent
      },
      {
        path:'medication_administration',
        component:MedicationAdministrationLogComponent
      },
      {
        path:'physical_therapy',
        component:PhysicalTherapyDocsComponent
      },
      {
        path:'occupational_therapy',
        component:OccupationalTherapyDocsComponent
      },
      {
        path:'speech_therapy',
        component:SpeechTherapyDocsComponent
      },
      {
        path:'medical_social_worker',
        component:MedicalSocialWorkerComponent
      },
      {
        path:'aide_documents',
        component:AideDocsComponent
      },
      {
        path:'non_skilled_assessments',
        component:NonSkilledAssessmentsComponent
      },
      {
        path:'electronic_health_record',
        component:ElectronicHealthRecordComponent
      },
      {
        path:'braden_scale',
        component:BradenScaleComponent
      },
      {
        path:'supervisory_visit_notes',
        component:SupervisoryVisitComponent
      },
      {
        path:'incident_report',
        component:IncidentReportComponent
      },
      {
        path:'patient_covid_screening',
        component:PatientScreeningComponent
      },
      {
        path:'staff_covid_screening',
        component:StaffScreeningComponent
      },
      {
        path:'View_BillingDashboard',
        component:BillingDashboardComponent
      },
      {
        path:'View_Aloramail',
        component:AloramailComponent
      }
    
    ]

   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
