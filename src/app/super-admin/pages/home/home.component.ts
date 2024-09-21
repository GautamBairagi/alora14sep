import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (){ this.name=localStorage.getItem('superadmin_name')}

  name:any
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
