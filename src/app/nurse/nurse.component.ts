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
    this.nursename=sessionStorage.getItem('nurse_name')
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
    sessionStorage.removeItem('nurse_token')
    sessionStorage.removeItem('nurse_name')
    sessionStorage.removeItem('id')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
