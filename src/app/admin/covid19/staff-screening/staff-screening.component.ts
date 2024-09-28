import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-staff-screening',
  templateUrl: './staff-screening.component.html',
  styleUrls: ['./staff-screening.component.css']
})
export class StaffScreeningComponent implements OnInit {

  nurses: any[] = [];
  covidPositiveNurses: any[] = [];
  covidNegativeNurses: any[] = [];

  constructor(private api:AllService) {}

  ngOnInit(): void {
    this.fetchNurses();
  }

  fetchNurses(): void {
    this.api.nursesForAdmin().subscribe((response: any) => {
      this.nurses = response.data;
      this.filterNursesByCovidStatus();
    });
  }

  filterNursesByCovidStatus(): void {
    this.covidPositiveNurses = this.nurses.filter(nurse => nurse.Covid19Status === 'Yes');
    this.covidNegativeNurses = this.nurses.filter(nurse => nurse.Covid19Status === 'No');
  }

}
