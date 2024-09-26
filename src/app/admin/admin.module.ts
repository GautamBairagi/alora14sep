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
import { ClockStatusComponent } from './pages/clock-status/clock-status.component';
import { CustomizeComponent } from './admin/customize/customize.component';
import { UserSecurityComponent } from './admin/user-security/user-security.component';
import { FeatureActivationComponent } from './admin/feature-activation/feature-activation.component';
import { AccountComponent } from './admin/account/account.component';
import { MonitorComponent } from './CareConnect/monitor/monitor.component';
import { ConflictsComponent } from './CareConnect/conflicts/conflicts.component';
import { ClaimSummaryComponent } from './billing/claim-summary/claim-summary.component';
import { GenerateClaimsComponent } from './billing/generate-claims/generate-claims.component';
import { ClaimsPDGMComponent } from './billing/claims-pdgm/claims-pdgm.component';
import { ElectronicClaimFileComponent } from './billing/electronic-claim-file/electronic-claim-file.component';
import { GenerateInvoicesComponent } from './billing/generate-invoices/generate-invoices.component';
import { InvoiceSummaryComponent } from './billing/invoice-summary/invoice-summary.component';
import { BatchPrintInvoicesComponent } from './billing/batch-print-invoices/batch-print-invoices.component';
import { BatchPrintClaimsComponent } from './billing/batch-print-claims/batch-print-claims.component';
import { PreBillingComponent } from './billing/pre-billing/pre-billing.component';
import { TransactionLogComponent } from './AR/transaction-log/transaction-log.component';
import { PostPaymentComponent } from './AR/post-payment/post-payment.component';
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
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';


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
    ViewAlotComponent,
    ClockStatusComponent,
    CustomizeComponent,
    UserSecurityComponent,
    FeatureActivationComponent,
    AccountComponent,
    MonitorComponent,
    ConflictsComponent,
    ClaimSummaryComponent,
    GenerateClaimsComponent,
    ClaimsPDGMComponent,
    ElectronicClaimFileComponent,
    GenerateInvoicesComponent,
    InvoiceSummaryComponent,
    BatchPrintInvoicesComponent,
    BatchPrintClaimsComponent,
    PreBillingComponent,
    TransactionLogComponent,
    PostPaymentComponent,
    SkilledNursingVisitComponent,
    AssessmentsComponent,
    CertificationAndPlanComponent,
    PlanOfCarePlusComponent,
    OrdersAndDocsComponent,
    OrderPlusComponent,
    MedicationProfileComponent,
    MedicationAdministrationLogComponent,
    PhysicalTherapyDocsComponent,
    OccupationalTherapyDocsComponent,
    SpeechTherapyDocsComponent,
    MedicalSocialWorkerComponent,
    AideDocsComponent,
    NonSkilledAssessmentsComponent,
    ElectronicHealthRecordComponent,
    BradenScaleComponent,
    SupervisoryVisitComponent,
    IncidentReportComponent,
    BillingDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
