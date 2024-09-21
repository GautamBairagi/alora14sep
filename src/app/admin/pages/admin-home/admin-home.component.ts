import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

 
  constructor (){ this.name=localStorage.getItem('homecare_name')}
  
  name:any



}
