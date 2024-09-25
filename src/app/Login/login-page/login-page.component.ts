import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup;
  ck: boolean = false;
  constructor (
  private fb:FormBuilder,
  private router:Router,
  private service:AllService,
){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
}


loading: boolean = false;
loginSuccess: boolean = false;
loginError: boolean = false;
addPatients() {
  if (this.loginForm.invalid) {
    this.ck = true;
    return;
  } 
  else {
    console.log("Patient data", this.loginForm.value);
    this.loading = true;
    this.loginSuccess = false;
    this.loginError = false;
    this.service.superAdminLogin(this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.role === 'superadmin' || res.role === 'doctor' || res.role === 'nurse' || res.role === 'patient') {
          this.handleRoleBasedRedirection(res);
          this.loginSuccess = true;  // Login success message
        } else {
          this.loginError = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.loginError = true;  // Error message
      }
    });
  }
}

handleRoleBasedRedirection(res: any) {
  if (res.role === 'superadmin') {
    localStorage.setItem('Superadmin_token', res.token);
    localStorage.setItem('superadmin_name', res.name);
    this.router.navigate(["/superAdmin/home"]);
  } else if (res.role === 'doctor') {
    localStorage.setItem('homecare_token', res.token);
    localStorage.setItem('id', res.id);
    localStorage.setItem('homecare_name', res.name);
    this.router.navigate(["/Admin/admin_home"]);
  } else if (res.role === 'nurse') {
    localStorage.setItem('nurse_token', res.token);
    localStorage.setItem('id', res.id);
    localStorage.setItem('nurse_name', res.name);
    localStorage.setItem('doctorId', res.doctorId);
    this.router.navigate(["/nurse/nurse_home"]);
  } else if (res.role === 'patient') {
    localStorage.setItem('patient_token', res.token);
    localStorage.setItem('patient_name', res.firstname);
    this.router.navigate(["/patient/patient_home"]);
  }
}

onChanges(data: string) {
  if (data === 'superadmin') { 
    this.loginForm.controls['email'].setValue('superadmin@gmail.com');
    this.loginForm.controls['password'].setValue('superadmin');
  } else if (data === 'doctor') { 
    this.loginForm.controls['email'].setValue('mayank@gmail.com');
    this.loginForm.controls['password'].setValue('mayank@123');
  }
  else if (data === 'nurse') {
    // this.form.controls['mobileNumber'].setValue('+919644605330');
    this.loginForm.controls['email'].setValue('nurse@gmail.com');
    this.loginForm.controls['password'].setValue('nurse');
    } 
    else if (data === 'patient') {
      // this.form.controls['mobileNumber'].setValue('+919644605330');
      this.loginForm.controls['email'].setValue('patient@gmail.com');
      this.loginForm.controls['password'].setValue('patient');
      } 
}
showPassword: boolean = false;
togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}
}
