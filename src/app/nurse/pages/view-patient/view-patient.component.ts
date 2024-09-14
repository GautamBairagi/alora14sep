import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  constructor(private api:AllService){}

  
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




nursePhoto = 'path/to/photo.jpg';
nurseName = 'Hanson, Susan';
unitNumber = '305';
carePlan = 'Current care plan';
allergies = 'Penicillin, sulfa, tramadol';
diet = 'Regular Diet';
ongoingOrders = 'Independent w/wheeled walker, Elopement Precautions';

// Task list
tasks = [
  { title: 'Medication Assistance', duration: 5, instructions: 'Pour meds into receptacle.', isCompleted: false },
  { title: 'Bowel Management', duration: 15, instructions: 'Track and document bowel movements.', isCompleted: false },
  { title: 'Laundry Service', duration: 30, instructions: 'Collect and return clean laundry.', isCompleted: true }
];

// Medication
medication = {
  name: 'Lisinopril Tab 10mg',
  dosage: '10 mg by mouth',
  instructions: 'Give 1 tab by mouth 2x a day.',
  isGiven: false
};

// Nurse notes
nurseNote = '';

saveNote() {
  console.log('Nurse note saved:', this.nurseNote);
}

  isMedsCollapsed: boolean = true;

  // Toggle the meds collapsed state
  toggleMeds() {
    this.isMedsCollapsed = !this.isMedsCollapsed;
  }




}
