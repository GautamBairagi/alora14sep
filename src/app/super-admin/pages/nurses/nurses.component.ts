import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent implements OnInit {
  constructor(private api:AllService){}

  nursesCount: any[] = [];
  paginatedNurses: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  ngOnInit() {
    this.getNurses();
  }


  
  getNurses(){
    this.api.nursesForSuperAdmin().subscribe((res:any)=>{
      this.nursesCount = res.data;
      this.totalPages = Math.ceil(this.nursesCount.length / this.itemsPerPage);
      this.setPage(1);
      console.log('nurse count', this.nursesCount)
    })
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedNurses = this.nursesCount.slice(startIndex, endIndex);
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

