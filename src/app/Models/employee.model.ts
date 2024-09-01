export class Employee {
    Id: any;
    empId:any;
    empFirstName: string;
    empLastName: string;
    empImage:string;
    empDob:Date;
    empPhone:string;
    empGender:string;
    empQualification:string;
    empCity:string;
    empState:string;
    empPincode:string;
    empAddress:string;
    empEmail:string;
    dptId:string;
    cmpId:string;
    empJoiningDate: Date;
    empIsActive: boolean;
    empCreatedDate: Date;
    empUpdatedDate: Date;

    constructor() {
        this.Id = '';
        this.empId='';
        this.empFirstName='';
        this.empLastName='';
        this.empImage='';
        this.empDob= new Date;
        this.empPhone='';
        this.empGender='';
        this.empQualification='';
        this.empCity='';
        this.empState='';
        this.empPincode='';
        this.empAddress='';
        this.empEmail='';
        this.dptId='';
        this.cmpId='';
        this.empJoiningDate= new Date;
        this.empIsActive= true;
        this.empCreatedDate = new Date();
        this.empUpdatedDate = new Date();
    }
}

export class EmployeeDelete {
    empId: any;

    constructor() {
        this.empId = '';
        
    }
}
