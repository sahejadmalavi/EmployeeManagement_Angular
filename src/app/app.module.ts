import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
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
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { UploadcontrolconcomponentComponent } from './components/uploadcontrolconcomponent/uploadcontrolconcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyListComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    UploadcontrolconcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
