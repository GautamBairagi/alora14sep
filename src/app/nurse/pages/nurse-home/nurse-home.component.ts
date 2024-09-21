import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/Api/all.service';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit {

  constructor (private clockService:AllService){ this.name=localStorage.getItem('nurse_name')}
  
  name:any

  nurseId:any; 
  nurseName:any;
  ngOnInit(): void {
    const nurseIdString = localStorage.getItem('id');
    this.nurseId = nurseIdString ? parseInt(nurseIdString, 10) : null;
    this.nurseName = localStorage.getItem('nurse_name');

    
    console.log( 'admin id', this.nurseId);

    this.checkClockStatusFromLocalStorage();
  }

  clockedIn = false;
  showMessage = false;
  message = '';

  checkClockStatusFromLocalStorage(): void {
    const storedClockStatus = localStorage.getItem('clockedIn');
    this.clockedIn = storedClockStatus === 'true'; // Check if user is clocked in
  }

  clockIn(): void {
    this.clockService.clockIn(this.nurseId,this.nurseName).subscribe(response => {
      this.clockedIn = true;
      localStorage.setItem('clockedIn', 'true');
      this.showTemporaryMessage('Clocked in successfully!');
    });
  }

  clockOut(): void {
    this.clockService.clockOut(this.nurseId,this.nurseName).subscribe(response => {
      this.clockedIn = false;
      localStorage.setItem('clockedIn', 'false');
      this.showTemporaryMessage('Clocked out successfully!');
    });
  }

  showTemporaryMessage(message: string): void {
    this.message = message;
    this.showMessage = true;

    // Hide the message after 3 seconds
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);  // 3000 milliseconds = 3 seconds
  }

}
