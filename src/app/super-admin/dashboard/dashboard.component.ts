import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:AllService){}

  ngOnInit(): void {
    this.getDoctors();
    this.getNurses();
    this.getPatients();
  }

  doctorsCount:any;
  getDoctors(){
    this.api.doctorsForSuperAdmin().subscribe((res:any)=>{
      this.doctorsCount = res.data;
      console.log('docs count', this.doctorsCount)
    })
  }

  nursesCount:any;
  getNurses(){
    this.api.nursesForSuperAdmin().subscribe((res:any)=>{
      this.nursesCount = res.data;
      console.log('nurse count', this.nursesCount)
    })
  }

  patientsCount:any;
  getPatients(){
    this.api.patientsForSuperAdmin().subscribe((res:any)=>{
      this.patientsCount = res.data;
      console.log('patient count', this.patientsCount)
    })
  }

}
