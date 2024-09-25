import { Component, OnInit } from '@angular/core';

import { AllService } from 'src/app/Api/all.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clock-status',
  templateUrl: './clock-status.component.html',
  styleUrls: ['./clock-status.component.css']
})
export class ClockStatusComponent implements OnInit {

  updateForm!:FormGroup;
  allalotsssCount:any=[];

  constructor(private api:AllService,private route:Router,private fb:FormBuilder){
    this.updateForm = this.fb.group({
      patientName: [''],
      nurseName: [''],
      formDate: [''],
      toDate: [''],
    })
  }


  
  updateNurse() {
    this.api.allotupdate(this.id, this.nurseByIdData).subscribe((res: any) => {
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
    // const userIdString = localStorage.getItem('id');
    // this.userId = userIdString ? parseInt(userIdString, 10) : null;
    // console.log( 'admin id', this.userId);
    this.getalotss();
  }



  getalotss(){
    this.api.clockStatus().subscribe((res:any)=>{
      this.allalotsssCount = res.data;
      this.totalPages = Math.ceil(this.allalotsssCount.length / this.itemsPerPage);
      this.setPage(1);
      console.log('nurse count', this.allalotsssCount)
    })
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedNurses = this.allalotsssCount.slice(startIndex, endIndex);
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
  allotedById(data: any) {
  this.id = data;
  this.api.allotedById(data).subscribe((res: any) => {
    this.nurseByIdData = res.data;
  })
}

allotsDeleted(itemDlt: any): void {
  this.api.deletealot(itemDlt.id).subscribe(
    () => {
      window.location.reload()
    },
    (error) => {
      console.error('Error deleting dispatched', error);
    }
  );
}
}
