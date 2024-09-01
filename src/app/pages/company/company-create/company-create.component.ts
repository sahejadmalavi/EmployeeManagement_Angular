import { Component } from '@angular/core';
import { CompanyService } from '../../../Services/company.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { DepartmentService } from '../../../Services/department.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.css'
})
export class CompanyCreateComponent {

  cmpName: any;
  dptid:any;
  selectedDepartments: string[] = [];
  loading = false;
  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  departmentlist:any;

  constructor(
    public companyservice: CompanyService,
    public departmentService: DepartmentService,
    private router: Router
  ) {
    this.dptlist();
  }

//get the list from department
private dptlist() {
  this.departmentlist = null;
  
  this.departmentService.listDepartment().subscribe({
    next: (data) => {
      this.departmentlist = data;  
      console.log(data);
    },
  });
}
// Handle checkbox changes
onCheckboxChange(event: any,ind:any) {
  
  const dptid = event.target.value;
  var dpt1 = this.departmentlist[ind];
  if (event.target.checked) {
    
    
    this.selectedDepartments.push(dpt1.dptId);
  } else {
    this.selectedDepartments = this.selectedDepartments.filter(id => id !== dpt1.dptId);
  }
  console.log(this.selectedDepartments);
}

  //post for company Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.cmpName == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.cmpName.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }
    
    var slcDpt=this.selectedDepartments.join(", ");
    
  
    //if (this.errorCount == 0) {
     
      this.companyservice.com.Id = "";
      this.companyservice.com.cmpName = this.cmpName;
      this.companyservice.com.dptid = slcDpt;
      this.companyservice.com.cmpIsActive = true;
      this.companyservice.com.cmpCreatedDate =new Date();
      this.companyservice.com.cmpUpdatedDate = new Date();

        //start company create service
        this.companyservice.createCompany().subscribe((res) => {
          this.response = res;
         console.log("res",res)
          if (this.response != 'Success') {
            this.mes = this.response;
          } else {
            this.companyservice.com.cmpName = '';
            this.router.navigate([environment.companyList]);
          }
        });
    //}
  }


}
