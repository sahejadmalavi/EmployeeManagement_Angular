import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CompanyService } from '../../../Services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../../../Services/department.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent {
  Id: any;
  cmpName: any;
  cmpIsActive: any;
  cmpCreatedDate:any;
cmpId:any;
  loading = false;
  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  departmentlist:any;
  cmpdepartmentlist:any;
  selectedDepartments: string[] = [];

  constructor(
    public companyservice: CompanyService,
    public departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cmpId=this.route.snapshot.params['id'];
    this.getcom(this.route.snapshot.params['id']);
    this.dptlist();
    this.getCompanyDept();
  }


  getCompanyDept(){
    this.departmentService.getListByCompany(this.cmpId).subscribe({
      next: (data) => {
        this.cmpdepartmentlist = data;  
        console.log("dept",data)
      },
      //error: (e) => console.log(e),
    });
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

isSelected(dpt:any){
  var length = this.cmpdepartmentlist.length;
  var response=false;
  for(var i=0;i<length;i++)
  {
    var d = this.cmpdepartmentlist[i];
    if(d.dptId==dpt.dptId)
    {
      if(!(this.selectedDepartments.includes(d.dptId)))
      {
        this.selectedDepartments.push(d.dptId); 
      }
      
      response=true;
    }
  }
  return response;
}

// get the record particular catalogues
getcom(id: any) {
  this.Id = id;
  this.companyservice.getDetail(id).subscribe({
    next: (data: any) => {
      console.log("data",data);
      (this.cmpName = data.cmpName),
      (this.cmpIsActive = data.cmpIsActive)
    },
  });
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
      this.companyservice.com.cmpId=this.cmpId;
      this.companyservice.com.cmpName = this.cmpName;
      this.companyservice.com.dptid = slcDpt;
      this.companyservice.com.cmpIsActive = this.cmpIsActive;
      this.companyservice.com.cmpCreatedDate =this.cmpCreatedDate;
      this.companyservice.com.cmpUpdatedDate = new Date();
      

        //start company edit service
        this.companyservice.editCompany().subscribe((res) => {
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
