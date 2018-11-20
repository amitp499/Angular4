import { Component, OnInit } from '@angular/core';
import { emp } from '../Model/emp';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  employees =[

    {
      id:1,
      name:"Rashmi",
      contactPreference: "email",
      dateOfBirth: new Date('10/25/1988'),
      department: 'it',
      isActive: true,
      photoPath: 'assets/images/rash.png'

        },

        {
          id:2,
          name:"Amit",
          contactPreference: "email",
          dateOfBirth: new Date('10/25/1987'),
          department: 'it',
          isActive: true,
          photoPath: 'assets/images/parth.png'
          
            },

            {
              id:3,
              name:"Sunil",
              contactPreference: "email",
              dateOfBirth: new Date('10/25/1989'),
              department: 'it',
              isActive: true,
              photoPath: 'assets/images/anu.png'
              
                }
  ];

  

  constructor() { }

  ngOnInit() {
  }



}
