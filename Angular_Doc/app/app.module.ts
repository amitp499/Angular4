import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { EmpPipe } from './pipes/emp.pipe';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingNewModule } from './app-routing-new/app-routing-new.module';
import { EmpdataService } from './services/empdata.service';
import { EmplistserviceComponent } from './emplistservice/emplistservice.component';



// const appRoutes: Routes = [

//   {path: 'home', component: HomeComponent},
//   {path: 'employees', component: EmployeeComponent},
//   {path: 'employeelist', component: EmployeeinfoComponent},
//   {path: '',redirectTo:'/home', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}
 

// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ContractorsComponent,
    EmpPipe,
    EmployeeinfoComponent,
    PageNotFoundComponent,
    EmplistserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingNewModule
    //RouterModule.forRoot(appRoutes)
    
  ],
  providers: [EmpdataService],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
