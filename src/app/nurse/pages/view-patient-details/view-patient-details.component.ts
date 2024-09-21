import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-view-patient-details',
  templateUrl: './view-patient-details.component.html',
  styleUrls: ['./view-patient-details.component.css']
})
export class ViewPatientDetailsComponent implements OnInit {
patientDetailData: any;

constructor(private patientService: AllService) {
  console.log('patient details', this.patientService.getPatientDetailData());
}

ngOnInit(): void {
  this.patientService.patientDetailData$.subscribe((data) => {
    if (data) {
      console.log('patient details', data);
      this.patientDetailData = data;
    }
  });
}


}
