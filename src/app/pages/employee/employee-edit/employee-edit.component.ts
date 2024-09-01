import { Component, Input } from '@angular/core';
import { DepartmentService } from '../../../Services/department.service';
import { EmployeeService } from '../../../Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { CompanyService } from '../../../Services/company.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  empId:any;
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
  dptId="-";
  cmpId="-";
  empJoiningDate:any;
  empIsActive:any;

  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  departmentlist:any;
  companylist:any;
  id1:any;
  empimageUrl: any;
  @Input() Isshowfileupload = true;

  constructor(
    public departmentservice: DepartmentService,
    public employeeservice: EmployeeService,
    public companyservice: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getcat(this.route.snapshot.params['id']);
    this.catlist();
    this.comlist();
    this.empId=this.route.snapshot.params['id'];
  }

// get the record particular employee
getcat(id: any) {
  this.empId = id;
  this.employeeservice.getDetail(id).subscribe({
    next: (data: any) => {
      var dt = new Date(data.empDob);
      var dobMonth = String(dt.getMonth()+1).padStart(2,'0');
      var dobDate = String(dt.getDate()).padStart(2,'0');
      var joiningDate = new Date(data.empJoiningDate);
      var joinMonth = String(dt.getMonth()+1).padStart(2,'0');
      var joinDate = String(dt.getDate()).padStart(2,'0');
      
      (this.empFirstName = data.empFirstName),
      (this.empLastName = data.empLastName),
      (this.empDob =  dt.getFullYear()+"-"+dobMonth+"-"+dobDate),
      (this.empPhone = data.empPhone),
      (this.empGender = data.empGender),
      (this.empQualification = data.empQualification),
      (this.empCity = data.empCity),
      (this.empState = data.empState),
      (this.empPincode = data.empPincode),
      (this.empAddress = data.empAddress),
      (this.empEmail = data.empEmail),
      (this.dptId = data.dptId),
      (this.empJoiningDate = joiningDate.getFullYear()+"-"+joinMonth+"-"+joinDate),

        // (this.imageUrl = this.ImagePath + data.ctlmImage),
        (this.empIsActive = data.empIsActive)
        
       
    },
    //error: (e) => console.log(e),
  });
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
    this.dptId = event.target.value;
    
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
  
      this.employeeservice.emp.Id = "";
      this.employeeservice.emp.empId=this.empId;
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
      this.employeeservice.emp.cmpId=this.cmpId;
      this.employeeservice.emp.empJoiningDate = this.empJoiningDate;
      this.employeeservice.emp.empIsActive = true;
      this.employeeservice.emp.empCreatedDate =new Date();
      this.employeeservice.emp.empUpdatedDate = new Date();

        //start department create service
        this.employeeservice.editEmployee().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
          } else {
            this.router.navigate([environment.employeeList]);
          }
        });
  }
}
