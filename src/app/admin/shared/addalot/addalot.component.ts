import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-addalot',
  templateUrl: './addalot.component.html',
  styleUrls: ['./addalot.component.css']
})
export class AddalotComponent implements OnInit {

  myForm!: FormGroup;
  addServicForm!: FormGroup;
  nursesCount:any=[];
  patientsCount:any=[];
  servicesCount:any=[];

  constructor(private fb: FormBuilder,
    private service:AllService,
    private route:Router
  ) {}

  userId:any
  ngOnInit(): void {
    this.getNurses();
    this.getPatients();
    this.getServices();
    const userIdString = localStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    
    console.log( 'admin id', this.userId);
    this.myForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      nurseName: ['', Validators.required],
      formDate: ['', Validators.required],
      toDate: ['',  Validators.required],
      nursingServiceCharge: ['',  Validators.required],
      medicationCharge: ['',  Validators.required],
      additionalService: ['',  Validators.required],
      additionalServiceCharge: ['',  Validators.required],
      doctorId:[this.userId],
    });

    this.addServicForm = this.fb.group({
      name:['']
    })
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.service.addslote(this.myForm.value).subscribe((res:any)=>{
        console.log('form added',res)
        this.route.navigate(["/Admin/View_alot"]);
       });
    }
  }

  addService(): void {
    if (this.addServicForm.valid) {
      console.log(this.addServicForm.value);
      this.service.additionalServicePost(this.addServicForm.value).subscribe((res:any)=>{
        console.log('service added',res)
        window.location.reload()
       });
    }
  }


  getNurses(){
    this.service.nursesForAdmin().subscribe((res:any)=>{
      this.nursesCount = res.data;
      console.log('home care nurse', this.nursesCount)
    })
  }

  getServices(){
    this.service.additionalServiceGet().subscribe((res:any)=>{
      this.servicesCount = res.data;
      console.log('services data', this.servicesCount)
    })
  }

  getPatients(){
    this.service.patientsForAdmin().subscribe((res:any)=>{
      this.patientsCount = res.data;
      console.log('home care patient', this.patientsCount)
    })
  }
}


