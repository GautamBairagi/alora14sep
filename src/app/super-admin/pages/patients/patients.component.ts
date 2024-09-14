import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  constructor(private api:AllService){}

  
  patientsCount: any[] = [];
  paginatedDoctors: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  ngOnInit() {
    this.getPatients();
  }

  

  getPatients(){
    this.api.patientsForSuperAdmin().subscribe((res:any)=>{
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
}