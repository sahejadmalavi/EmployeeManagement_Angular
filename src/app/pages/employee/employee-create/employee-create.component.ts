import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../../Services/employee.service';
import { DepartmentService } from '../../../Services/department.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { CompanyService } from '../../../Services/company.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent {
  empFirstName: any;
  empLastName:any;
  empImage:any;
  empDob:any;
  empPhone:any;
  empGender:any;
  empQualification:any;
  empCity:any;
  empState:any;
  empPincode:any;
  empAddress:any;
  empEmail:any;
  dptId:any;
  empJoiningDate:any;

  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  companylist:any;
  departmentlist:any;
  id1:any;
  cmpId:any;
  empimageUrl: any;
  @Input() Isshowfileupload = true;

  constructor(
    public departmentservice: DepartmentService,
    public employeeservice: EmployeeService,
    public companyservice: CompanyService,
    private router: Router
  ) {
    this.catlist();
    this.comlist();
  }

  //select file event
  selectedfile(empImage: string) {
    
    const empimg = empImage.split("||");
    this.empimageUrl = empimg[0];
    this.employeeservice.emp.empImage =  empimg[0];;
  }

  //get the list from catalogues
  private comlist() {
    this.companylist = null;
    
    
    this.companyservice.listCompany().subscribe({
      next: (data) => {
        this.companylist = data;  
        console.log(data);
      },
      //error: (e) => console.log(e),
    });
  }
  //get the list from department
  private catlist() {
    this.departmentlist = null;
    
    
    this.departmentservice.listDepartment().subscribe({
      next: (data) => {
        this.departmentlist = data;  
      },
      //error: (e) => console.log(e),
    });
  }
  onDepartmentChange(event: any) {
    this.id1=event.target.value;
    if (this.id1 !== '-') {
      this.employeeservice.emp.dptId = this.id1;
    } else {
      alert('Please select a valid department');
    }
  }

  onCompanyChange(event: any) {
    this.cmpId=event.target.value;
    this.departmentservice.getListByCompany(this.cmpId).subscribe({
      next: (data) => {
        this.departmentlist = data;  
      },
      //error: (e) => console.log(e),
    });
    if (this.cmpId !== '-') {
      this.employeeservice.emp.cmpId = this.cmpId;
    } else {
      alert('Please select a valid company');
    }
  }
  //post for employee Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.empFirstName == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.empFirstName.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }
  
    //if (this.errorCount == 0) {
     debugger
      this.employeeservice.emp.Id = "";
      this.employeeservice.emp.empFirstName = this.empFirstName;
      this.employeeservice.emp.empLastName = this.empLastName;
      this.employeeservice.emp.empDob = this.empDob;
      this.employeeservice.emp.empPhone = this.empPhone;
      this.employeeservice.emp.empGender = this.empGender;
      this.employeeservice.emp.empQualification = this.empQualification;
      this.employeeservice.emp.empCity = this.empCity;
      this.employeeservice.emp.empState = this.empState;
      this.employeeservice.emp.empPincode = this.empPincode;
      this.employeeservice.emp.empAddress = this.empAddress;
      this.employeeservice.emp.empEmail = this.empEmail;
      this.employeeservice.emp.empJoiningDate = this.empJoiningDate;
      this.employeeservice.emp.empIsActive = true;
      this.employeeservice.emp.cmpId=this.cmpId;
      this.employeeservice.emp.empCreatedDate =new Date();
      this.employeeservice.emp.empUpdatedDate = new Date();

        //start department create service
        this.employeeservice.createEmployee().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
          } else {
            this.router.navigate([environment.employeeList]);
          }
        });
    //}
  }
}
