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
    // const userIdString = localStorage.getItem('id');
    // this.userId = localStorage.getItem('id');
    // Number(this.userId)
    

  const userIdString = localStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    console.log("type",typeof this.userId)

    console.log( 'admin id', this.userId);
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['',Validators.required],
      lastname: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      gender: ['', Validators.required],
      ethnicity: ['',Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      instruction: ['',Validators.required],
      MRNnumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      homePhone: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      mobilePhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otherPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      contactName: ['',Validators.required],
      phoneOne: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      phoneTwo: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      emergencyEmail: ['',[Validators.required, Validators.email]],
      language: ['',Validators.required],
      image: ['', Validators.required],
      comments: ['',Validators.required],
      password: ['',Validators.required],
      doctorId:[this.userId]
    });
  }

  url: any;
  fileType!: string;
  imgs:any;
  qimgs:any
  imagesBox = '../../../../../../assets/img/product/product1.jpg'


  // onSelectFile(event: any) {
  //   let file = event.target.files[0];
  //   if (file.type.includes('image')) {
  //     this.fileType = 'image';
  //   } else if (file.type.includes('pdf')) {
  //     this.fileType = 'pdf';
  //   } else {
  //     this.fileType = ''; // Reset fileType if neither image nor pdf
  //   }
    
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.url = reader.result;
      
  //     this.myForm.value.image = reader.result;
  //   };
  //   if (event.target.files && event.target.files[0]) {
  //     if (
  //       event.target.files[0].type === 'image/jpeg' ||
  //       event.target.files[0].type === 'image/png' ||
  //       event.target.files[0].type === 'image/jpg' ||
  //       event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  //     ) {
  //       if (event.target.files[0].size < 200 * 200) {
  //         /* Checking height * width*/
  //       }
  //       if (event.target.files[0].size < 20000) {
  //         /* checking size here - 2MB */
  //       }
  //     }
  //   }
  // }

  // onSubmit(): void {
  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //    this.myForm.value.image = this.url
  //     this.service.addpatientsForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
  //       console.log('form added',res)
  //       this.route.navigate(["/Admin/view_patients"]);
  //      });
  //   }
  // }

  

  Onupload(event: any) {
    if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  // Onuploadquali(event: any) {
  //   if (event.target.files.length > 0) {
  //     this.qimgs = event.target.files[0];
  //   }
  //   if (event.target.files && event.target.files[0]) {
  //     const filesAmount = event.target.files.length;
  //     for (let i = 0; i < filesAmount; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (event: any) => {
  //         this.imagesBox = event.target.result;
  //       }
  //       reader.readAsDataURL(event.target.files[i]);
  //     }
  //   }
  // }
  

  
  onSubmit() {
    console.log("After Doctor data", this.myForm.value);
    if (this.myForm.invalid) {
      return;
    } else {
      try {
        console.log("Doctor data", this.myForm.value);
        
        const formData: any = new FormData();
        formData.append('image', this.imgs);
        
        const arr = [
         'firstname',
      'middlename',
      'lastname',
      'dateofBirth',
      'gender',
      'ethnicity',
      'addressOne',
      'addressTwo',
      'city',
      'state',
      'zip',
      'instruction',
      'MRNnumber',
      'email',
      'homePhone',
      'mobilePhone',
      'otherPhone',
      'contactName',
      'phoneOne',
      'phoneTwo',
      'emergencyEmail',
      'language',
      'comments',
      'password',
      'doctorId'
  
        ];
  
        for (const key of arr) {
          formData.append(key, this.myForm.get(key)?.value);
        }
  
        console.log("post api fire", this.myForm);
        console.log("formdata api fire", formData.getAll('image'));
        console.log("formdata api fire", formData.getAll('doctorId'));
  
        // Call the postDoctors method without headers
        this.service.addpatientsForSuperAdmin(formData).subscribe((res: any) => {
          console.log(res);
          // this.router.navigate(['sign-in/signin']);
        },
        (err) => {
          console.log(err);
        });
        
      } catch (err) {
        console.log(err);
      }
    }
  }




}
