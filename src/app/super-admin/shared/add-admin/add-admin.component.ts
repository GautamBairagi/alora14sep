import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
//   myForm!: FormGroup;
//   ck:boolean=false;
//   imagesBox='gautamsdata'
//   constructor(private fb: FormBuilder,
//     private route:Router,
//     private service:AllService
//   ) {}

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       image: ['', Validators.required],
//       license: ['', Validators.required],
//       fullAddress: ['', Validators.required],
//     });
//   }


//   url: any;
//   url2: any;
//   fileType!: string;

//   onSelectFile(event: any) {
//     let file = event.target.files[0];
//     if (file.type.includes('image')) {
//       this.fileType = 'image';
//     } else if (file.type.includes('pdf')) {
//       this.fileType = 'pdf';
//     } else {
//       this.fileType = ''; // Reset fileType if neither image nor pdf
//     }
    
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       this.url = reader.result;
      
//       this.myForm.value.image = reader.result;
//     };
//     if (event.target.files && event.target.files[0]) {
//       if (
//         event.target.files[0].type === 'image/jpeg' ||
//         event.target.files[0].type === 'image/png' ||
//         event.target.files[0].type === 'image/jpg' ||
//         event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//       ) {
//         if (event.target.files[0].size < 200 * 200) {
//           /* Checking height * width*/
//         }
//         if (event.target.files[0].size < 20000) {
//           /* checking size here - 2MB */
//         }
//       }
//     }
//   }

//   onSelectLicense(event: any) {
//     let file = event.target.files[0];
//     if (file.type.includes('image')) {
//       this.fileType = 'image';
//     } else if (file.type.includes('pdf')) {
//       this.fileType = 'pdf';
//     } else {
//       this.fileType = ''; // Reset fileType if neither image nor pdf
//     }
    
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       this.url2 = reader.result;
      
//       this.myForm.value.license = reader.result;
//     };
//     if (event.target.files && event.target.files[0]) {
//       if (
//         event.target.files[0].type === 'image/jpeg' ||
//         event.target.files[0].type === 'image/png' ||
//         event.target.files[0].type === 'image/jpg' ||
//         event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//       ) {
//         if (event.target.files[0].size < 200 * 200) {
//           /* Checking height * width*/
//         }
//         if (event.target.files[0].size < 20000) {
//           /* checking size here - 2MB */
//         }
//       }
//     }
//   }


// //   onSubmit() {
// //     if (this.myForm.valid) {
// //      this.ck = true;
// //     //  this.myForm.value.image = this.url
// //     //  this.myForm.value.license = this.url2
// //      console.log(this.url)
// //      const formData = new FormData();
// //      formData.append('image', this.imgs)
// //      formData.append('license', this.imgs2)

// //      const arr = [

    

// //     ]

// //     for (const key of arr) {
// //       if (key === 'details') {
// //         formData.append(key, JSON.stringify(this.myForm.get(key)?.value));
// //       } else {
// //         formData.append(key, this.myForm.get(key)?.value);
// //       }
// //     }
// //     console.log("post api fire",this.myForm);
// //     this.service.postDoctors(formData).subscribe((res: any) => {
// //       console.log(res)
// //     },
// //     )
// //   }
// // }



// onSubmit() {

//   console.log("After Doctor data", this.myForm.value);
//   if (this.myForm.invalid) {
//     this.ck = true;
//     return
//   } else {
//     try {
//       console.log("Doctor data", this.myForm.value);
//       const formData = new FormData();
//       formData.append('image', this.imgs)
//      formData.append('license', this.imgs2)
//       const arr = [
//         'name',
//         'email',
//         'password',
//         'mobileNumber',
//         'fullAddress'
//       ]

//       for (const key of arr) {

//         if (key === 'details') {
//           formData.append(key, JSON.stringify(this.myForm.get(key)?.value));
//         } else {

//           formData.append(key, this.myForm.get(key)?.value);
//         }
//       }
//       console.log("post api fire",this.myForm);
    
//       this.service.postDoctors(formData).subscribe((res: any) => {
//         console.log(res)
//         // this.router.navigate(['sign-in/signin'])
//       },
//       )
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }














//   //    this.service.postDoctors(this.formData.value).subscribe((res:any)=>{
//   //     console.log('form added',res)
//   //     this.route.navigate(["/superAdmin/view_admins"]);
//   //    })
//   //   return
//   //   }

//   // }

//   imgs!: File;
//   imgs2!: File;


//   Onupload(event: any) {
//     if (event.target.files.length > 0) {
//       this.imgs = event.target.files[0];
//     }
//     if (event.target.files && event.target.files[0]) {
//       const filesAmount = event.target.files.length;
//       for (let i = 0; i < filesAmount; i++) {
//         const reader = new FileReader();
//         reader.onload = (event: any) => {
//           this.imagesBox = event.target.result;
//         }
//         reader.readAsDataURL(event.target.files[i]);
//       }
//     }
//   }

//   Onupload2(event: any) {
//     if (event.target.files.length > 0) {
//       this.imgs2 = event.target.files[0];
//     }
//     if (event.target.files && event.target.files[0]) {
//       const filesAmount = event.target.files.length;
//       for (let i = 0; i < filesAmount; i++) {
//         const reader = new FileReader();
//         reader.onload = (event: any) => {
//           this.imagesBox = event.target.result;
//         }
//         reader.readAsDataURL(event.target.files[i]);
//       }
//     }
//   }


//   onCancle(){
//     this.route.navigate(["/superAdmin/view_admins"])
//   }








addDoctorform!: FormGroup;
isDisabled: boolean = true;
ckDep: boolean = false;
liveDate = new Date();
PurchasLeagers: any;
panelOpenState = false;
url: any;
imgs!: File;
qimgs! :File;







PurchaseNote: string = '';
Vendoe_Name: any = '';
imagesBox = '../../../../../../assets/img/product/product1.jpg'
productnams: any[] = [];
productPrice: any[] = [];
productQut: any[] = [];
productDiscount: any[] = [];
productTax: any[] = [];
productAmount: any[] = [];
allCategoryName: any = [];
allspeciality: [] = [];
allContry: any[] = [];
allState: any[] = [];
allCity: any[] = [];
dis:any[]=[];
contryName:string = ''
Ser:string=''
spesci: string = ''
inputList: string = '';
doctorList: any = [];
doctoename: any = [];
doctorname: any = [];
specializationData: any = [];
allsubspeciality: any = [];
specility: any;
allservice: any = []
Service: any = []
Serviceper:any=[]
item: any;
doctorData: [] = [];
num:[] = [];
select: any;
price: any;
Totalamountsss :any;
discount: any;
totalprice: any;
formData: FormData = new FormData();
constructor(
  private fb: FormBuilder,
  private router: Router,

  private service: AllService,
  


) {
  this.addDoctorform = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    fullAddress: ['', Validators.required],
    image: ['', Validators.required],
    license: ['', Validators.required],
   
  })
}
ngOnInit(): void {

//  this.getallservicesper();

 
}


numberOnly(event: any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

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
Onuploadquali(event: any) {
  if (event.target.files.length > 0) {
    this.qimgs = event.target.files[0];
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

// addDoctor() {
//   console.log("After Doctor data", this.addDoctorform.value);
//   if (this.addDoctorform.invalid) {
//     this.ckDep = true;
//     return
//   } else {
//     try {
//       console.log("Doctor data", this.addDoctorform.value);
//       const formData:any = new FormData();
//       formData.append('image', this.imgs)
//       formData.append('license', this.qimgs)
//       const arr = [
//         'name',
//         'email',
//         'password',
//         'mobileNumber',
//         'fullAddress',
//       ]
//       for (const key of arr) {
//         if (key === 'details') {
//           formData.append(key, JSON.stringify(this.addDoctorform.get(key)?.value));
//         } else {
//           formData.append(key, this.addDoctorform.get(key)?.value);
//         }
//       }
//       console.log("post api fire",this.addDoctorform);
//       console.log("formdata api fire",formData.getAll('image'));
//       this.service.postDoctors(formData).subscribe((res: any) => {
//         console.log(res)
//         this.router.navigate(['sign-in/signin'])
//       },
//       )
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }


addDoctor() {
  console.log("After Doctor data", this.addDoctorform.value);
  if (this.addDoctorform.invalid) {
    this.ckDep = true;
    return;
  } else {
    try {
      console.log("Doctor data", this.addDoctorform.value);
      
      const formData: any = new FormData();
      formData.append('image', this.imgs);
      formData.append('license', this.qimgs);
      
      const arr = [
        'name',
        'email',
        'password',
        'mobileNumber',
        'fullAddress',
      ];

      for (const key of arr) {
        formData.append(key, this.addDoctorform.get(key)?.value);
      }

      console.log("post api fire", this.addDoctorform);
      console.log("formdata api fire", formData.getAll('image'));
      
      // Call the postDoctors method without headers
      this.service.postDoctors(formData).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['sign-in/signin']);
      },
      (err) => {
        console.log(err);
      });
      
    } catch (err) {
      console.log(err);
    }
  }
}





openproduct() {
  this.router.navigate(["super-admin/doctor"])
}
Cancel(){
  this.router.navigate(["/super-admin/doctor"])
}


}
