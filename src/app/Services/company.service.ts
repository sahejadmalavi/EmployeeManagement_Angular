import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, CompanyDelete } from '../Models/company.model';
import { environment } from '../../environments/environment';
//add api Url
const baseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  //add model
  com: Company = new Company();
  comdlt: CompanyDelete = new CompanyDelete();
  
 
  
  //get company list
  listCompany() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.get(`${baseURL + 'Company/Index'}`, {
      headers: httpheaders,
    });
  }
  //post Company api
  createCompany() {
    alert("test")
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'Company/Create', this.com, {
      headers: httpheaders,
    });
    console.log(this.com)
  }

  //get  company detail api with Id
  getDetail(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'Company/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }


  //edit company api with Id
  editCompany() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'Company/Edit', this.com, {
      headers: httpheaders,
    });
  }

  //delete company api with Id
  deleteCompany(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    this.comdlt.cmpId = id
    return this.http.post(baseURL + 'Company/Delete', this.comdlt, {
      headers: httpheaders,
    });
  }
}
