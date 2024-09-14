import { Component } from '@angular/core';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent {

  constructor (){ this.name=sessionStorage.getItem('nurse_name')}
  
  name:any

}
