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

this.getAllotedPatients()    
  }

  nurseNameFromStorage: any = localStorage.getItem('nurse_name');
  allotedPatients: any[] = [];
  filteredPatients: any[] = [];
  
  getAllotedPatients() {
    this.service.getallalotnursesForAdmin().subscribe((res: any) => {
      this.allotedPatients = res.data;
      this.filteredPatients = this.allotedPatients.filter(patient => patient.nurseName === this.nurseNameFromStorage);

      console.log('Filtered patient count', this.filteredPatients);
    });
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
