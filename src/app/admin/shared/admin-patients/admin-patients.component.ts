import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
 
@Component({
  selector: 'app-admin-patients',
  templateUrl: './admin-patients.component.html',
  styleUrls: ['./admin-patients.component.css']
})
export class AdminPatientsComponent implements OnInit {
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
      firstname: [''],
      middlename: [''],
      lastname: [''],
      dateofBirth: [''],
      gender: [''],
      ethnicity: [''],
      addressOne: [''],
      addressTwo: [''],
      city: [''],
      state: [''],
      zip: [''],
      instruction: [''],
      MRNnumber: [''],
      email: [''],
      homePhone: [''],
      mobilePhone: [''],
      otherPhone: [''],
      contactName: [''],
      phoneOne: [''],
      phoneTwo: [''],
      emergencyEmail: [''],
      language: [''],
      image: [''],
      comments: [''],
      password: [''],
      doctorId:[this.userId]
    });
  }

  url: any;
  fileType!: string;

  onSelectFile(event: any) {
    let file = event.target.files[0];
    if (file.type.includes('image')) {
      this.fileType = 'image';
    } else if (file.type.includes('pdf')) {
      this.fileType = 'pdf';
    } else {
      this.fileType = ''; // Reset fileType if neither image nor pdf
    }
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result;
      
      this.myForm.value.image = reader.result;
    };
    if (event.target.files && event.target.files[0]) {
      if (
        event.target.files[0].type === 'image/jpeg' ||
        event.target.files[0].type === 'image/png' ||
        event.target.files[0].type === 'image/jpg' ||
        event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        if (event.target.files[0].size < 200 * 200) {
          /* Checking height * width*/
        }
        if (event.target.files[0].size < 20000) {
          /* checking size here - 2MB */
        }
      }
    }
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
     this.myForm.value.image = this.url
      this.service.addpatientsForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
        console.log('form added',res)
        this.route.navigate(["/Admin/view_patients"]);
       });
    }
  }
}
