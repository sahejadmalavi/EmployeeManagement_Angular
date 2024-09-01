import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { EmployeeService } from '../../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeCreateUrl = "/" +environment.employeeCreate;
  employeeEditUrl   = "/" +environment.employeeEdit+"/";
  
  isdel = false;
  employeelist: any;
  
  constructor(
    public employeeservice: EmployeeService,
    private router: Router
  ) {
    this.emplist();
  }


  //get the list from employee
  private emplist() {
    this.employeelist = null;
    
    
    this.employeeservice.listEmployee().subscribe({
      next: (data) => {
        this.employeelist = data;  
        console.log(data);
      },
      //error: (e) => console.log(e),
    });
  }

  //delete the data particular employee
  deleteEmployee(id: any) {  
    this.employeeservice.deleteEmployee(id).subscribe({
      next: (res) => {
        this.emplist();
        this.isdel = false;
      },
      //error: (e) => console.error(e),
    });
  }
}
