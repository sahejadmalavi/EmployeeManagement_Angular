import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //userName = localStorage.getItem('user')
  userName ="Bradd Haddin"
  data :any[] = [
    {
      username :'Bradd Haddin',
      userrole :'Super Admin',
      profile:'/assets/images/logo.png'},    
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
