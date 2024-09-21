import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {

  constructor (){
    this.nursename=localStorage.getItem('patient_name')
  }
  nursename:any;

}
