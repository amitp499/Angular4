import { Injectable } from '@angular/core';

@Injectable(
  //providedIn: 'root'
)
export class EmpdataService {

  getEmployees(): any[]{

    return [

                {
                  code: 'emp101',
                  name: 'Amit', 
                  gender: 'Male', 
                  anualsalary:5500, 
                  dateofbirth:'9/6/1982'
                },
            
                {
                  code: 'emp102',
                  name: 'Sunil', 
                  gender: 'Male', 
                  anualsalary:15500, 
                  dateofbirth:'9/7/1982'
                },
            
                {
                  code: 'emp103',
                  name: 'Rohit', 
                  gender: 'Male', 
                  anualsalary:25500, 
                  dateofbirth:'9/7/2000'
                }

    ];

  }

  constructor() { }
}
