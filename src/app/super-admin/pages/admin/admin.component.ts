import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private api:AllService){}

  doctorsCount: any[] = [];
  paginatedDoctors: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;
  dataSend: any

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.api.doctorsForSuperAdmin().subscribe((res: any) => {
      this.doctorsCount = res.data;
      this.totalPages = Math.ceil(this.doctorsCount.length / this.itemsPerPage);
      this.setPage(1); // Initialize with the first page
    });
  }

  deleteDoctors(id:any) {
    this.api.deletedoctorsForSuperAdmin(id).subscribe((res: any) => {
      this.doctorsCount = res.data;
      this.totalPages = Math.ceil(this.doctorsCount.length / this.itemsPerPage);
      this.setPage(1); // Initialize with the first page
    });
  }

  

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDoctors = this.doctorsCount.slice(startIndex, endIndex);
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


  verified(data: any) {
    var id = data.id
    this.dataSend = {
      account: true
    }
    this.api.ststusdoctorsForSuperAdmin(id, this.dataSend).subscribe(res => {
      if (res) {
        this.getDoctors()
      }
    })
  }

}
