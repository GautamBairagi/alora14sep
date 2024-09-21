import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(private route :Router){}

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
    localStorage.removeItem('nurse_token')
    localStorage.removeItem('nurse_name')
    localStorage.removeItem('id')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
