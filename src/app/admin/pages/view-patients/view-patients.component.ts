import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  updateForm!:FormGroup;


  constructor(private api:AllService,private route:Router,private fb:FormBuilder){
    this.updateForm = this.fb.group({
      firstname:[''],
      middlename:[''],
      lastname:[''],
      dateofBirth:[''],
      gender:[''],
      city:[''],
      email:[''],
    })
  }

  
  patientsCount: any[] = [];
  paginatedDoctors: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  userId:any
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    
    console.log( 'admin id', this.userId);
    this.getPatients();
  }


  updatePatient() {
    this.api.updatePatientById(this.id, this.patientByIdData).subscribe((res: any) => {
      console.log('Patient updated successfully', res);
      window.location.reload()
    }, (error) => {
      console.error('Error updating user', error);
      // Handle error
    });
  }


  getPatients(){
    this.api.patientsForAdmin().subscribe((res:any)=>{
      this.patientsCount = res.data;
      this.totalPages = Math.ceil(this.patientsCount.length / this.itemsPerPage);
      this.setPage(1); // Initialize with the first page
      console.log('patient count', this.patientsCount)
    })
  }



  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDoctors = this.patientsCount.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  id:any;
  patientByIdData:any=[];
patientById(data: any) {
  this.id = data;
  this.api.patientById(data).subscribe((res: any) => {
    this.patientByIdData = res.data;
  })
}

patientDelete(itemDlt: any): void {
  this.api.deletepatient(itemDlt.id).subscribe(
    () => {
      window.location.reload()
    },
    (error) => {
      console.error('Error deleting dispatched', error);
    }
  );
}

}
