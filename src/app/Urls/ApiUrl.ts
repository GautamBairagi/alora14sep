const baseUrl = 'https://alora-plus.vercel.app/api/v1/';
const adminId = sessionStorage.getItem('id')


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
    getNursesForAdmin: `${baseUrl}nurse/doctorid/${adminId}`,
    getallalotssgetNursesForAdmin: `${baseUrl}allots`,
    getpatients: `${baseUrl}patients`,
    getPatientsForAdmin: `${baseUrl}patient/doctorid/${adminId}`,
    addpatients: `${baseUrl}patient`,
    patientById: `${baseUrl}patient/`,
    approveDoctor: `${baseUrl}doctor/accountStatusUpdate/`,
}
