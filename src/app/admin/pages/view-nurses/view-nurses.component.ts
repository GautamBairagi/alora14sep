import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-nurses',
  templateUrl: './view-nurses.component.html',
  styleUrls: ['./view-nurses.component.css']
})
export class ViewNursesComponent implements OnInit {
  updateForm!:FormGroup;


  constructor(private api:AllService,private route:Router,private fb:FormBuilder){
    this.updateForm = this.fb.group({
      name:[''],
      mobileNumber:[''],
      email:[''],
    })
  }


  
  updateNurse() {
    this.api.updateNurseById(this.id, this.nurseByIdData).subscribe((res: any) => {
      console.log('Nurse updated successfully', res);
      window.location.reload()
    }, (error) => {
      console.error('Error updating user', error);
      // Handle error
    });
  }

  nursesCount: any[] = [];  // Initialize as an array to store the single nurse
  paginatedNurses: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  userId:any
  ngOnInit(): void {
    const userIdString = sessionStorage.getItem('id');
    this.userId = userIdString ? parseInt(userIdString, 10) : null;
    
    console.log( 'admin id', this.userId);
    this.getNurses();
  }


  
  getNurses(){
    this.api.nursesForAdmin().subscribe((res:any)=>{
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

  id:any;
  nurseByIdData:any=[];
nurseById(data: any) {
  this.id = data;
  this.api.nurseById(data).subscribe((res: any) => {
    this.nurseByIdData = res.data;
  })
}

nurseDelete(itemDlt: any): void {
  this.api.deleteNurse(itemDlt.id).subscribe(
    () => {
      window.location.reload()
    },
    (error) => {
      console.error('Error deleting dispatched', error);
    }
  );
}
}
