import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CompanyService } from '../../../Services/company.service';
import { Router } from '@angular/router';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companyCreateUrl = "/" +environment.companyCreate;
  companyEditUrl   = "/" +environment.companyEdit+"/";
  
  isdel = false;
  companylist: any;
  
  constructor(
    public companyervice: CompanyService,
    private router: Router
  ) {
    this.comlist();
  }


  //get the list from catalogues
  private comlist() {
    this.companylist = null;
    
    
    this.companyervice.listCompany().subscribe({
      next: (data) => {
        this.companylist = data;  
        console.log(data);
      },
      //error: (e) => console.log(e),
    });
  }
  //delete the data particular company
  deleteCompany(id: any) {   
    this.companyervice.deleteCompany(id).subscribe({
      next: (res) => {
        this.comlist();
        this.isdel = false;
      },
      //error: (e) => console.error(e),
    });
  }

}
