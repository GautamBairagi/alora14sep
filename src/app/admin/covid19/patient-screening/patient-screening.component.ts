import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-patient-screening',
  templateUrl: './patient-screening.component.html',
  styleUrls: ['./patient-screening.component.css']
})
export class PatientScreeningComponent implements OnInit {

  nurses: any[] = [];
  covidPositiveNurses: any[] = [];
  covidNegativeNurses: any[] = [];

  constructor(private api:AllService) {}

  ngOnInit(): void {
    this.fetchNurses();
  }

  fetchNurses(): void {
    this.api.patientsForAdmin().subscribe((response: any) => {
      this.nurses = response.data;
      this.filterNursesByCovidStatus();
    });
  }

  filterNursesByCovidStatus(): void {
    this.covidPositiveNurses = this.nurses.filter(nurse => nurse.Covid19Status === 'Yes');
    this.covidNegativeNurses = this.nurses.filter(nurse => nurse.Covid19Status === 'No');
  }

}

