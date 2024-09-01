export class Department {
    Id: any;
    dptName: string;
    dptIsActive: boolean;
    dptCreatedDate: Date;
    dptUpdatedDate: Date;

    constructor() {
        this.Id = '';
        this.dptName = '';
        this.dptIsActive = true;
        this.dptCreatedDate = new Date();
        this.dptUpdatedDate = new Date();
    }
}
export class DepartmentDelete {
    dptId: any;
    
    constructor() {
        this.dptId = '';
    }
}
