import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompanyCreateComponent } from './pages/company/company-create/company-create.component';
import { CompanyEditComponent } from './pages/company/company-edit/company-edit.component';
import { CompanyListComponent } from './pages/company/company-list/company-list.component';
import { DepartmentCreateComponent } from './pages/department/department-create/department-create.component';
import { DepartmentEditComponent } from './pages/department/department-edit/department-edit.component';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {path: 'dashboard',component:DashboardComponent,title:'dashboard'},
  {path: '', component:DashboardComponent,title:'dashboard'},
  {path: environment.companyList,component:CompanyListComponent,title:'company'},
  {path: environment.companyCreate, component: CompanyCreateComponent ,title:'create-company'},
  {path: environment.companyEdit+"/:id",component:CompanyEditComponent,title:'edit-company'},

  {path: environment.departmentList,component:DepartmentListComponent,title:'department'},
  {path: environment.departmentCreate, component: DepartmentCreateComponent ,title:'create-department'},
  {path: environment.departmentEdit+"/:id",component:DepartmentEditComponent,title:'edit-department'},

  {path: environment.employeeList,component:EmployeeListComponent,title:'employee'},
  {path: environment.employeeCreate, component: EmployeeCreateComponent ,title:'create-employee'},
  {path: environment.employeeEdit+"/:id",component:EmployeeEditComponent,title:'edit-employee'},
  
  // {path: 'departmentCreate', component: DepartmentCreateComponent ,title:'create-department'},
  // {path: 'departmentEdit'+"/:id",component: DepartmentEditComponent,title:'edit-department'},
  // {path: 'departmentList',component: DepartmentListComponent,title:'department'},
  // {path: 'employeeCreate', component: EmployeeCreateComponent ,title:'create-employee'},
  // {path: 'employeeEdit'+"/:id",component: EmployeeEditComponent,title:'edit-employee'},
  // {path: 'employeeList',component: EmployeeListComponent,title:'employee'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
