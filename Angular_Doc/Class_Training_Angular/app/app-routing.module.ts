import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { EmpPipe } from './pipes/emp.pipe';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';


//const routes: Routes = [];

// const appRoutes: Routes = [

//   {path: 'home', component: HomeComponent},
//   {path: 'employees', component: EmployeeComponent},
//   {path: 'employeelist', component: EmployeeinfoComponent},
//   {path: '',redirectTo:'/home', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}
 

// ];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
