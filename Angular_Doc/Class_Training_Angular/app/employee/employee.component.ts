import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';
import { EmployeeType } from '../Model/employeeType';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = "Employee Information";
  firstName="Amit";
  lastName="Pandey";
  gender="Male";
  age=30;

  showFaculty:boolean=true;
  facultyName="Rashmi";
  subject: string[]=["MS.NET","Java","SharePoint"];
  duration:number=7;

  
 employees: any[] = [

    {
      code: 'emp101',name: 'Amit', gender: 'Male', anualsalary:5500, dateofbirth:'9/6/1982'
    },

    {
      code: 'emp102',name: 'Sunil', gender: 'Male', anualsalary:15500, dateofbirth:'9/7/1982'
    },

    {
      code: 'emp105',name: 'Rohit', gender: 'Male', anualsalary:25500, dateofbirth:'9/7/1932'
    }

 ]

 
  



  constructor() { }

  ngOnInit() {
  }

   fullName():string{

    //return "Full Name : "+this.firstName+" "+this.lastName;

    return "Full Name : ".concat(this.firstName.concat(" ",this.lastName));
  }

  emp = [new Employee(1, "Emp1", 1000, EmployeeType.Contract), 
         new Employee(2, "Emp2", 1100, EmployeeType.Permanent),
          new Employee(3, "Emp3", 1200, EmployeeType.Retired),
          new Employee(4, "Emp4", 1300, EmployeeType.Daily)
      ] 

      selectEmp=this.emp[1];
}


