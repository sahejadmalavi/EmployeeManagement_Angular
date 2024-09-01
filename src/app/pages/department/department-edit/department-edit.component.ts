import { Component, Input } from '@angular/core';
import { DepartmentService } from '../../../Services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent {
  dptId:any;
  dptName: any;
  dptIsActive:any;

  mes: any;
  response: any;
  errorCount = 0;
  nameMessage: any;
  id1:any;
  @Input() Isshowfileupload = true;

  constructor(
    public departmentservice: DepartmentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getdpt(this.route.snapshot.params['id']);
  }

// get the record particular employee
getdpt(id: any) {
  this.dptId = id;
  this.departmentservice.getDetail(id).subscribe({
    next: (data: any) => {
      
      (this.dptName = data.dptName),
      (this.dptIsActive = data.dptIsActive)
    },
    //error: (e) => console.log(e),
  });

}
  //post for employee Create
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
  
    
      this.departmentservice.dpt.Id = "";
      this.departmentservice.dpt.dptName = this.dptName;
      this.departmentservice.dpt.dptIsActive = true;
      this.departmentservice.dpt.dptCreatedDate =new Date();
      this.departmentservice.dpt.dptUpdatedDate = new Date();

        //start department create service
        this.departmentservice.editDepartment().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
          } else {
            this.router.navigate([environment.departmentList]);
          }
        });
    
  }
}
