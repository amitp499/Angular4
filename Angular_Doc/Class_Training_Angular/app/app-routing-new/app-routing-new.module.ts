import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeeinfoComponent } from 'src/app/employeeinfo/employeeinfo.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { EmplistserviceComponent } from 'src/app/emplistservice/emplistservice.component';
import { CreateemployeeComponent } from 'src/app/createemployee/createemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { ContractorsComponent } from '../contractors/contractors.component';
import { JsonitemsComponent } from '../jsonitems/jsonitems.component';

const appRoutes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'employees', component: EmployeeComponent},
    {path: 'employeelist', component: EmployeeinfoComponent},
    {path: 'contractors', component: ContractorsComponent},
    {path: 'employeeService', component: EmplistserviceComponent},
    {path: 'createemployee', component: CreateemployeeComponent},
    {path: 'jasonitems', component: JsonitemsComponent},
    {path: '',redirectTo:'/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
   
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingNewModule { }
