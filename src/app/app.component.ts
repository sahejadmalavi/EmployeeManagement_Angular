import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagement';
  showHeader = false;
  showSidebar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data['showHeader'] !== false;
        this.showSidebar = this.activatedRoute.firstChild?.snapshot.data['showSidebar'] !== false;
      }
    });
   
  }
 


}
