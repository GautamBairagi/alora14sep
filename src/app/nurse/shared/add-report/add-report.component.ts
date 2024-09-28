import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private service :AllService,
    private route:Router
  ) {}

  userId:any
  ngOnInit(): void {
    const userIdString = localStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    
    console.log( 'admin id', this.userId);
    this.myForm = this.fb.group({
      mobilePhone: [''],
      image: [''],
      email: [''],
      MRNnumber: [''],
      firstname: [''],
      medicationsGiven: [''],
      patientBehavior: [''],
      patientHealthStatus: [''],
      patientId: [''],
      doctorId: [''],
      nurseId:[this.userId]
    });

    this.getPatientName()

  }

  nurseNameFromStorage: any = localStorage.getItem('nurse_name');
  
  patientNames:any;

  getPatientName(){
    this.service.patientsForNurse().subscribe((res:any)=>{
      this.patientNames = res.data;
    })
  }

  // onPatientSelect(event: any) {
  //   const selectedName = event.target.value;
  //   if (selectedName) {
  //     this.service.getPatientDetailsByName(selectedName).subscribe((res: any) => {
  //       console.log('Patient Details:', res);
  //       // Handle the response with patient details
  //     });
  //   }
  // }


  onPatientSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
  
    if (target && target.value) {
      const selectedPatientId = target.value;
  
      if (selectedPatientId) {
        this.service.getPatientDetailsByName(selectedPatientId).subscribe((res: any) => {
          const patientDetails = res.data;
  
          if (patientDetails) {
            this.myForm.patchValue({
              email: patientDetails.email,
              MRNnumber: patientDetails.MRNnumber,
              mobilePhone: patientDetails.mobilePhone,
            });
          }
        });
      }
    }
  }
  
  


  // this functions API should be change
  onSubmit(): void {
    // if (this.myForm.valid) {
    //   console.log(this.myForm.value);
    //   this.service.addpatientsForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
    //     console.log('form added',res)
    //     this.route.navigate(["/nurse/view_patient"]);
    //    });
    // }
  }

}
