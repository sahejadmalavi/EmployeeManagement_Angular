import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, EmployeeDelete } from '../Models/employee.model';
//add api Url
const baseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  //add model
  emp: Employee = new Employee();
  empdlt: EmployeeDelete = new EmployeeDelete();
  
 
  
  //get Employee list
  listEmployee() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.get(`${baseURL + 'Employee/Index'}`, {
      headers: httpheaders,
    });
  }
  //post Employee api
  createEmployee() {
    
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.post(baseURL + 'Employee/Create', this.emp, {
      headers: httpheaders,
    });
    
  }

  //get  Employee detail api with Id
  getDetail(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'Employee/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }


  //edit Employee api with Id
  editEmployee() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'Employee/Edit', this.emp, {
      headers: httpheaders,
    });
  }

  //delete Employee api with Id
  deleteEmployee(id: any) {
   
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.empdlt.empId = id
    return this.http.post(baseURL + 'Employee/Delete', this.empdlt, {
      headers: httpheaders,
    });
    //return this.http.post(baseURL + 'Employee/Delete?id=',+ id,{headers:httpheaders});
  }
}
