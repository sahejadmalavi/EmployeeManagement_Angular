export class Company {

    Id: any;
    cmpId:any;
    cmpName: string;
    dptid:string;
    cmpIsActive: boolean;
    cmpCreatedDate: Date;
    cmpUpdatedDate: Date;

    constructor() {
        this.Id = '';
        this.cmpId='';
        this.cmpName = '';
        this.dptid="";
        this.cmpIsActive = true;
        this.cmpCreatedDate = new Date();
        this.cmpUpdatedDate = new Date();
    }
}

export class CompanyDelete {
    cmpId: any;
    constructor() {
        this.cmpId = '';
    }
}
