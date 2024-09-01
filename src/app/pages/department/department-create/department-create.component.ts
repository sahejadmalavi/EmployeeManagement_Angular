import { Component } from '@angular/core';
import { DepartmentService } from '../../../Services/department.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { CompanyService } from '../../../Services/company.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.css'
})
export class DepartmentCreateComponent {
  dptName: any;
  loading = false;
  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  companylist:any;
  id1:any;

  constructor(
    public departmentservice: DepartmentService,
    public companyservice: CompanyService,
    private router: Router
  ) {
  }
  
 
  //post for department Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.dptName == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.dptName.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }
  
    //if (this.errorCount == 0) {
      this.departmentservice.dpt.Id = "";
      this.departmentservice.dpt.dptName = this.dptName;
      this.departmentservice.dpt.dptIsActive = true;
      this.departmentservice.dpt.dptCreatedDate =new Date();
      this.departmentservice.dpt.dptUpdatedDate = new Date();

        //start department create service
        this.departmentservice.createDepartment().subscribe((res) => {
          this.response = res;
         console.log("res",res)
          if (this.response != 'Success') {
            this.mes = this.response;
          } else {
            this.departmentservice.dpt.dptName = '';
            this.router.navigate([environment.departmentList]);
          }
        });
    //}
  }

}
