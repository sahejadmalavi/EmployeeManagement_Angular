import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor() { }

  menuItems: any[] = [
      {
         label: 'Dashboard',
         href: '/dashboard',
         icon:'bi-speedometer2',
         children: []
      },
      {
         label: 'Company',
         href: '/company',
         icon:'bi-basket',
         children: []
      },
      {
         label: 'Department',
         href: '/department',
         icon:'bi-box-seam',
         children: []
      },
      {
         label: 'Employee',
         href: '/employee',
         icon:'bi-cart',
         children: []
      },
   
   ];
   @Input() logo = "assets/images/logo.jpg";
   @Input() logostyle = "";
 
  
}
