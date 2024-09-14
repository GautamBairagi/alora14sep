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
    this.homecarename=sessionStorage.getItem('homecare_name')
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
    sessionStorage.removeItem('homecare_token')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('homecare_name')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
