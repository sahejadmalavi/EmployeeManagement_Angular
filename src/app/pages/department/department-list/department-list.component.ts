import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DepartmentService } from '../../../Services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  departmentCreateUrl = "/" +environment.departmentCreate;
  departmentEditUrl   = "/" +environment.departmentEdit+"/";
  
  isdel = false;
  departmentlist: any;
  
  constructor(
    public departmentservice: DepartmentService,
    private router: Router
  ) {
    this.dptlist();
  }


  //get the list from catalogues
  private dptlist() {
    this.departmentlist = null;
    
    this.departmentservice.listDepartment().subscribe({
      next: (data) => {
        this.departmentlist = data;  
      },
      //error: (e) => console.log(e),
    });
  }

   //delete the data particular department
   deleteDepartment(id: any) {   
    this.departmentservice.deleteDepartment(id).subscribe({
      next: (res) => {
        this.dptlist();
        this.isdel = false;
      },
      //error: (e) => console.error(e),
    });
  }
}
