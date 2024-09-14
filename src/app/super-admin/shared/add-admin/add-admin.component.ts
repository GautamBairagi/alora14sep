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
  myForm!: FormGroup;
  ck:boolean=false;
  constructor(private fb: FormBuilder,
    private route:Router,
    private service:AllService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
     this.ck = true;
     this.myForm.value.image = this.url
     console.log(this.url)
     this.service.postDoctors(this.myForm.value).subscribe((res:any)=>{
      console.log('form added',res)
      this.route.navigate(["/superAdmin/view_admins"]);
     })
    return
    }

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
  onCancle(){
    this.route.navigate(["/superAdmin/view_admins"])
  }


}
