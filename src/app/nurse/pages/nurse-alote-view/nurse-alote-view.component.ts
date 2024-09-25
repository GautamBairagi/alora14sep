import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-nurse-alote-view',
  templateUrl: './nurse-alote-view.component.html',
  styleUrls: ['./nurse-alote-view.component.css']
})
export class NurseAloteViewComponent implements OnInit {


  nursename:any;
  updateForm!:FormGroup;
  allalotsssCount:any=[];
  rehan:any;

  constructor(private api:AllService,private route:Router,private fb:FormBuilder){
    this.nursename=localStorage.getItem('nurse_name')
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
  
    this.getalotss();
  }



  getalotss(){
    this.api.getallalotnursesForAdmin().subscribe((res:any)=>{
      this.allalotsssCount = res.data;
      this.totalPages = Math.ceil(this.allalotsssCount.length / this.itemsPerPage);
      // this.setPage(1);

      this.rehan =this.allalotsssCount.filter((item:any)=>item.nurseName===this.nursename)
      console.log('nurse count', this.allalotsssCount)
      console.log('rehan ', this.rehan)
      
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


