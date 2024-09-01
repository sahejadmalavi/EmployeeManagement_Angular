import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department, DepartmentDelete } from '../Models/department.model';
//add api Url
const baseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {}

  //add model
  dpt: Department = new Department();
  dptdlt: DepartmentDelete = new DepartmentDelete();
  
 
  
  //get Department list
  listDepartment() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.get(`${baseURL + 'Department/Index'}`, {
      headers: httpheaders,
    });
  }
  //post Department api
  createDepartment() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.post(baseURL + 'Department/Create', this.dpt, {
      headers: httpheaders,
    });
  }

  //get  department detail api with Id
  getDetail(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'Department/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }


  //get  department list by company api
  getListByCompany(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'Department/GetByCompany?id='}${id}`, {
      headers: httpheaders,
    });
  }


  //edit Department api with Id
  editDepartment() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'Department/Edit', this.dpt, {
      headers: httpheaders,
    });
  }

  //delete Department api with Id
  deleteDepartment(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.dptdlt.dptId = id
    return this.http.post(baseURL + 'department/Delete?Id=', this.dptdlt, {
      headers: httpheaders,
    });
    //return this.http.post(baseURL + 'Catalogue/Delete?id=',+ id,{headers:httpheaders});
  }

}
