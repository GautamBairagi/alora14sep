import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {
  constructor(
    private route :Router
  ){
    this.nursename=localStorage.getItem('nurse_name')
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
    localStorage.removeItem('nurse_token')
    localStorage.removeItem('nurse_name')
    localStorage.removeItem('id')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
