import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/Api/all.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: {
      head: Array<any>;
      body: Array<any>;
      startY?: number;
      [key: string]: any; // Allow other options if needed
    }) => jsPDF;
  }
}



@Component({
  selector: 'app-patient-nurse-aloted',
  templateUrl: './patient-nurse-aloted.component.html',
  styleUrls: ['./patient-nurse-aloted.component.css']
})
export class PatientNurseAlotedComponent implements OnInit {

  nursename:any;
  updateForm!:FormGroup;
  allalotsssCount:any=[];
  // rehan:any;
  currentDate: Date = new Date();
  // admin: any;
  calculateTotalAmount() {
    return this.rehan.reduce((acc: any, item: { totalCharge: any; }) => acc + item.totalCharge, 0);
  }

  constructor(private api:AllService,private route:Router,private fb:FormBuilder){
    this.nursename=localStorage.getItem('patient_name')
    this.updateForm = this.fb.group({
      patientName: [''],
      nurseName: [''],
      formDate: [''],
      toDate: [''],
    })
  }

  admin: Admin | any;
  rehan: Admin[] = [];

  setAdminData(admin: Admin) {
    this.admin = admin;
  }

  // downloadPDF() {
  //   const doc = new jsPDF();
  
  //   // Set the title and other metadata
  //   doc.setFontSize(18);
  //   doc.text('Billing Invoice', 14, 22);
  //   doc.setFontSize(12);
  //   doc.text(`Patient Name: ${this.admin.patientName}`, 14, 30);
  //   doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);
    
  //   // Prepare the data for the table
  //   const rows = this.rehan.map((admin, index) => [
  //     (this.currentPage - 1) * this.itemsPerPage + index + 1,
  //     admin.nurseName,
  //     admin.formDate,
  //     admin.toDate,
  //     admin.nursingServiceCharge,
  //     admin.medicationCharge,
  //     admin.additionalService,
  //     admin.additionalServiceCharge,
  //     admin.totalCharge
  //   ]);
  
  //   // Define the columns
  //   const columns = [
  //     { header: 'Sr No', dataKey: 'srNo' },
  //     { header: 'Nurse Name', dataKey: 'nurseName' },
  //     { header: 'From Date', dataKey: 'fromDate' },
  //     { header: 'To Date', dataKey: 'toDate' },
  //     { header: 'Nursing Service Charge', dataKey: 'nursingServiceCharge' },
  //     { header: 'Medication Charge', dataKey: 'medicationCharge' },
  //     { header: 'Additional Service', dataKey: 'additionalService' },
  //     { header: 'Additional Service Charge', dataKey: 'additionalServiceCharge' },
  //     { header: 'Total Charge', dataKey: 'totalCharge' }
  //   ];
  
  //   // Add the table to the PDF
  //   const startY = 45; // Starting Y position for the table
  //   doc.autoTable({
  //     head: [columns],
  //     body: rows,
  //     startY: startY,
  //     theme: 'grid' // Optional: Add a theme for better styling
  //   });
  
  //   // Calculate final Y position after the table
  //   const tableHeight = rows.length > 0 ? (rows.length * 10) + 20 : 20; // Estimate row height
  //   const finalY = startY + tableHeight + 10; // Adding space after the table
  
  //   // Calculate total amount
  //   const totalAmount = this.calculateTotalAmount();
  //   doc.text(`Total Amount: ${totalAmount}`, 14, finalY); // Use finalY to position the total amount
  
  //   // Save the PDF
  //   doc.save('invoice.pdf');
  // }

  downloadPDF() {
    const doc = new jsPDF();
  
    // Set the title and other metadata
    doc.setFontSize(18);
    doc.text('Billing Invoice', 14, 22);
    doc.setFontSize(12);
    doc.text(`Patient Name: ${this.admin.patientName}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);
  
    // Prepare the data for the table
    const rows = this.rehan.map((admin, index) => [
      (this.currentPage - 1) * this.itemsPerPage + index + 1,
      admin.nurseName,
      admin.formDate,
      admin.toDate,
      admin.nursingServiceCharge,
      admin.medicationCharge,
      admin.additionalService,
      admin.additionalServiceCharge,
      admin.totalCharge
    ]);
  
    // Define the columns (Just use strings, no need for objects here)
    const columns = [
      'Sr No', 
      'Nurse Name', 
      'From Date', 
      'To Date', 
      'Nursing Service Charge', 
      'Medication Charge', 
      'Additional Service', 
      'Additional Service Charge', 
      'Total Charge'
    ];
  
    // Add the table to the PDF
    const startY = 45; // Starting Y position for the table
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: startY,
      theme: 'grid' // Optional: Add a theme for better styling
    });
  
    // Calculate final Y position after the table
    const tableHeight = rows.length > 0 ? (rows.length * 10) + 20 : 20; // Estimate row height
    const finalY = startY + tableHeight + 10; // Adding space after the table
  
    // Calculate total amount
    const totalAmount = this.calculateTotalAmount();
    doc.text(`Total Amount: ${totalAmount}`, 14, finalY); // Use finalY to position the total amount
  
    // Save the PDF
    doc.save('invoice.pdf');
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

      this.rehan =this.allalotsssCount.filter((item:any)=>item.patientName===this.patientNameFromStorage)
      console.log('nurse count', this.allalotsssCount)
      console.log('rehan ', this.rehan)
      
    })
  }
  
  patientNameFromStorage: any = localStorage.getItem('patient_name');
  filteredPatients: any[] = [];

  // getAllotedPatients() {
  //   this.api.getallalotnursesForAdmin().subscribe((res: any) => {
  //     this.allalotsssCount = res.data;
  //     this.filteredPatients = this.allalotsssCount.filter(patient => patient.nurseName === this.patientNameFromStorage);
      
  //     this.totalPages = Math.ceil(this.filteredPatients.length / this.itemsPerPage);
  //     this.setPage(1); // Initialize with the first page
  
  //     console.log('Filtered patient count', this.filteredPatients);
  //   });
  // }

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

interface Admin {
  nurseName: string;
  formDate: string;
  toDate: string;
  nursingServiceCharge: number;
  medicationCharge: number;
  additionalService: string;
  additionalServiceCharge: number;
  totalCharge: number;
  patientName: string;
}
