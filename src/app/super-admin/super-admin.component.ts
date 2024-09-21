import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent {
  constructor(
    private route :Router){
      this.name=localStorage.getItem('superadmin_name')
    }

    name:any

  // isCollapsed: boolean = false;

  // toggleSidebar(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }


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
    localStorage.removeItem('Superadmin_token')
    localStorage.removeItem('id')
    localStorage.removeItem('superadmin_name')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
