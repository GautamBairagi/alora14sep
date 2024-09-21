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
  doctorId:any;
  ngOnInit(): void {
    const nurseIdString = localStorage.getItem('id');
    this.nurseId = nurseIdString ? parseInt(nurseIdString, 10) : null;
    
    const doctorIdString = localStorage.getItem('doctorId');
    this.doctorId = doctorIdString ? parseInt(doctorIdString, 10) : null;

    this.nurseName = localStorage.getItem('nurse_name');
   

    
    console.log( 'admin id', this.nurseId);

    this.checkClockStatusFromLocalStorage();

  }
  clockedIn = false;
  message: string = '';
  showMessage: boolean = false;
  clockInTime: string | null = null; // Store clock-in time in ISO string format
  clockOutTime: string | null = null; // Store clock-out time in ISO string format
  differenceTime: string | null = null; // Store difference between clock-in and clock-out as string


  // Retrieve clock-in/clock-out status and clock-in time from local storage
  checkClockStatusFromLocalStorage(): void {
    const storedClockStatus = localStorage.getItem('clockedIn');
    this.clockedIn = storedClockStatus === 'true'; // Set initial state based on stored status

    const storedClockInTime = localStorage.getItem('clockInTime');
    if (storedClockInTime) {
      this.clockInTime = storedClockInTime;
    }
  }

  // Clock in and store current time in local storage
  clockIn(): void {
    const currentTime = new Date();
    this.clockedIn = true;
    this.clockInTime = currentTime.toISOString(); // Capture current time in ISO string format
    localStorage.setItem('clockedIn', 'true');
    localStorage.setItem('clockInTime', this.clockInTime); // Store clock-in time

    this.sendClockStatusToApi('clockIn', this.clockInTime, null, '00:00:00');
    this.showTemporaryMessage('Clocked in successfully!');
  }

  // Clock out, capture clock-out time, and calculate time difference
  clockOut(): void {
    const currentTime = new Date();
    this.clockOutTime = currentTime.toISOString(); // Capture current time as clock-out time

    if (this.clockInTime) {
      const differenceInMillis = currentTime.getTime() - new Date(this.clockInTime).getTime(); // Calculate time difference
      this.differenceTime = this.convertMillisToTimeString(differenceInMillis); // Convert to hh:mm:ss string

      // Send clockOutTime and differenceTime along with clockInTime
      this.sendClockStatusToApi('clockOut', this.clockInTime, this.clockOutTime, this.differenceTime);
    }

    this.clockedIn = false;
    localStorage.setItem('clockedIn', 'false'); // Store clock-out status
    localStorage.removeItem('clockInTime'); // Clear clock-in time from localStorage
    this.showTemporaryMessage('Clocked out successfully!');
  }

  // Convert milliseconds to hh:mm:ss string format
  convertMillisToTimeString(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  // Helper function to add leading zero for single-digit values
  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  // Send clock-in or clock-out status to API
  sendClockStatusToApi(status: string, clockInTime: string, clockOutTime: string | null, differenceTime: string): void {
    const payload = {
      nurseId: this.nurseId,
      nurseName: this.nurseName, // 'clockIn' or 'clockOut'
      doctorId: this.doctorId,
      clockInTime: clockInTime, // Always send clockInTime
      clockOutTime: clockOutTime, // Send clockOutTime only during clock-out
      differenceTime: differenceTime // Send the time difference as a string
    };

    this.clockService.clockStatusPost(payload).subscribe(response => {
      console.log('Clock status sent:', response);
    });
  }

  // Display message for 3 seconds after clocking in/out
  showTemporaryMessage(message: string): void {
    this.message = message;
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

}
