import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-add-nurses',
  templateUrl: './add-nurses.component.html',
  styleUrls: ['./add-nurses.component.css']
})
export class AddNursesComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private service:AllService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.service.adnursesForSuperAdmin(this.myForm.value).subscribe((res:any)=>{
        console.log('form added',res)
        this.route.navigate(["/superAdmin/view_nurses"]);
       });
    }
  }
}
