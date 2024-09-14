import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/httpServices';
import { superAdminEndPoints } from '../Urls/ApiUrl';
// import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AllService extends HttpService {

  constructor(public override http:HttpClient,
    // private _tos:ToastrService
  ) {
    super(http)
   }

   superAdminLogin(data: any) {
    return this.post(superAdminEndPoints.superAdminLogin,data)
   }

   doctorsForSuperAdmin(){
    return this.get(superAdminEndPoints.getdoctors)
   }
   
   deletedoctorsForSuperAdmin(id:any){
    return this.delete(superAdminEndPoints.deletedoctor + id)
   }
   ststusdoctorsForSuperAdmin(id:any, data:any){
    return this.patch(superAdminEndPoints.approveDoctor + id , data)
   }
   postDoctors(data:any){
    return this.post(superAdminEndPoints.doctorsAdd, data)
   }
   nursesForSuperAdmin(){
    return this.get(superAdminEndPoints.getnurses)
   }
   nursesForAdmin(){
    return this.get(superAdminEndPoints.getNursesForAdmin)
   }

   getallalotnursesForAdmin(){
    return this.get(superAdminEndPoints.getallalotssgetNursesForAdmin)
   }
   adnursesForSuperAdmin(data:any){
    return this.post(superAdminEndPoints.addnurses, data)
   }

   addslote(data:any){
    return this.post(superAdminEndPoints.addslotpost, data)
   }
   patientsForSuperAdmin(){
    return this.get(superAdminEndPoints.getpatients)
   }

   patientsForAdmin(){
    return this.get(superAdminEndPoints.getPatientsForAdmin)
   }

   patientById(id:any){
    return this.get(superAdminEndPoints.patientById + id )
   }

   updatePatientById(id: any, updatedData: any) {
    return this.http.put(`https://alora-plus.vercel.app/api/v1/patient/${id}`, updatedData);
  }

   deletepatient(id:any){
    return this.delete(superAdminEndPoints.patientById + id )
   }


   nurseById(id:any){
    return this.get(superAdminEndPoints.nursesById + id )
   }

   updateNurseById(id: any, updatedData: any) {
    return this.http.put(`https://alora-plus.vercel.app/api/v1/nurse/${id}`, updatedData);
  }

   deleteNurse(id:any){
    return this.delete(superAdminEndPoints.nursesById + id )
   }

   addpatientsForSuperAdmin(data :any){
    return this.post(superAdminEndPoints.addpatients, data)
   }
  //  showSuccess(p0: string) {
  //   this._tos.success('Hello World!', 'Toastr fun!');
  // }

  //  showSuccess(msg : string, status:string) {
  //   this._tos.success(msg, status,{
  //     positionClass : 'toast-top-center',
  //     progressBar: true,
  //     closeButton: true, // Show close button
  //     newestOnTop: true, 
  //   });
  // }
  // showError(msg: string, status: string) {
  //   this._tos.error(msg, status, {
  //     positionClass: 'toast-top-center',
  //     progressBar: true,
  //     closeButton: true,
  //     newestOnTop: true,
  //   });
  // }


}
