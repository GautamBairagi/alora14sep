import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AllService } from 'src/app/Api/all.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  updateForm!:FormGroup;

  constructor(private api:AllService, private fb :FormBuilder,
   
  ){

    this.updateForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      mobileNumber: [''],
      fullAddress: [''],
      image: [''],
      license: [''],

    })

  }

  doctorsCount: any[] = [];
  paginatedDoctors: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;
  dataSend: any

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.api.doctorsForSuperAdmin().subscribe((res: any) => {
      this.doctorsCount = res.data;
      this.totalPages = Math.ceil(this.doctorsCount.length / this.itemsPerPage);
      this.setPage(1); // Initialize with the first page
    });
  }

  deleteDoctors(id:any) {
    this.api.deletedoctorsForSuperAdmin(id).subscribe((res: any) => {
      this.doctorsCount = res.data;
      window.location.reload()
      this.totalPages = Math.ceil(this.doctorsCount.length / this.itemsPerPage);
      this.setPage(1); // Initialize with the first page
    });
  }

  id:any;
  adminByIdData:any=[];
adminById(data: any) {
  this.id = data;
  this.api.adminsById(data).subscribe((res: any) => {
    this.adminByIdData = res.data;
  })
}

downloadImage(imageUrl: string) {
  // Fetch the image as a Blob
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);
      
      // Create an anchor element and trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'license-image.jpg'; // Set the file name here
      document.body.appendChild(a);
      a.click();
      
      // Clean up: remove the anchor element and revoke the Blob URL
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Download failed', error));
}


adminDelete(itemDlt: any): void {
  this.api.deletedoctorsForSuperAdmin(itemDlt.id).subscribe(
    () => {
      window.location.reload()
    },
    (error) => {
      console.error('Error deleting dispatched', error);
    }
  );
}




updateNurse() {
  this.api.adminupdate(this.id, this.adminByIdData).subscribe((res: any) => {
    console.log('Nurse updated successfully', res);
    window.location.reload()
  }, (error) => {
    console.error('Error updating user', error);
    // Handle error
  });
}



  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDoctors = this.doctorsCount.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }


  // verified(data: any) {
  //   var id = data.id
  //   this.dataSend = {
  //     account: true
  //   }
  //   this.api.ststusdoctorsForSuperAdmin(id, this.dataSend).subscribe(res => {
  //     if (res) {
  //       this.getDoctors()
  //     }
  //   })
  // }



  toggleVerified(data: any) {
    var id = data.id;
    this.dataSend = {
      account: !data.account // Toggle between true and false
    };
    this.api.ststusdoctorsForSuperAdmin(id, this.dataSend).subscribe(res => {
      if (res) {
        this.getDoctors(); // Reload doctors list
      }
    });
  }

}
