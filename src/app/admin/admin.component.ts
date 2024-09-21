import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(
    private route :Router
  ){
    this.homecarename=localStorage.getItem('homecare_name')
  }

  homecarename:any;

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
    localStorage.removeItem('homecare_token')
    localStorage.removeItem('id')
    localStorage.removeItem('homecare_name')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
