import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(private route :Router)
  {
    this.nursename=localStorage.getItem('patient_name')
  }
  nursename:any;


  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }

  toggleSidebar2() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }



  logouts() {
    
    localStorage.removeItem('patient_token')
    localStorage.removeItem('patient_name')
    localStorage.removeItem('id')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
