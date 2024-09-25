// const baseUrl = 'https://alora-yst7j.ondigitalocean.app/api/v1/';
const baseUrl = 'https://alora-plus.vercel.app/api/v1/';
const adminId = localStorage.getItem('id')
console.log('url id for all',adminId)


export const superAdminEndPoints = {
    superAdminLogin: `${baseUrl}login`,
    getdoctors: `${baseUrl}doctors`,
    deletedoctor: `${baseUrl}doctor/`,
    doctorsAdd: `${baseUrl}doctor`,
    getnurses: `${baseUrl}nurses`,
    addnurses: `${baseUrl}nurse`,
    addslotpost: `${baseUrl}allot`,
    nursesById: `${baseUrl}nurse/`,
    allotedByIdById:`${baseUrl}allot/`,
    allotById: `${baseUrl}allot/`,
    getNursesForAdmin: `${baseUrl}nurse/doctorid/`,
    getallalotssgetNursesForAdmin: `${baseUrl}allots`, 
    getpatients: `${baseUrl}patients`,
    getPatientsForAdmin: `${baseUrl}patient/doctorid/${adminId}`,
    getPatientsForNurse: `${baseUrl}patient/nurseId/${adminId}`,
    clockInNurse: `${baseUrl}clockin`,
    clockOutNurse: `${baseUrl}clockout`,
    clockStatus: `${baseUrl}clockinout`,
    clockStatusForAdmin: `${baseUrl}clockinout/doctor/${adminId}`,
    addpatients: `${baseUrl}patient`,
    patientById: `${baseUrl}patient/`,
    addtionalservice: `${baseUrl}servicetitle`,
    addtionalserviceGet: `${baseUrl}servicetitles`,
    approveDoctor: `${baseUrl}doctor/accountStatusUpdate/`,
}
